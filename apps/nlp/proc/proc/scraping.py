import os
import re
import json
import codecs
import concurrent.futures
from bs4 import BeautifulSoup


class Scraping:
    def get_data(self, file_path):
        file_path = codecs.decode(file_path, 'utf-8')
        if not os.path.exists(file_path):
            return []

        with open(file_path, 'r', encoding='utf-8') as file:
            html_content = file.read()
        soup = BeautifulSoup(html_content, 'html.parser')
        return self.get_body_str(soup.descendants)

    def get_body_str(self, html_nodes):
        return [self.clean_text(node.get_text().strip()) for node in html_nodes
                if node and not node.has_children and node.get_text().strip()]

    @staticmethod
    def clean_text(text):
        replacements = {
            "\n\n": "\n", "\t\t": "\t", "\r\r": "\r", "…": "", "(": "", ")": "", ";": ""
        }
        for old, new in replacements.items():
            text = text.replace(old, new)
        return text

    def data_processing(self, path):
        output_directory = "processed_data"
        os.makedirs(output_directory, exist_ok=True)

        def process_file(file_path):
            if file_path.endswith('.html'):
                file_data = self.get_data(file_path)
                with open(os.path.join(output_directory, os.path.splitext(file_path)[0] + '.txt'), 'w') as file:
                    file.writelines(file_data)

        with concurrent.futures.ThreadPoolExecutor() as executor:
            executor.map(process_file, [os.path.join(path, file_path) for file_path in os.listdir(path)])

    @staticmethod
    def sentence_split_data():
        output_directory = "Split"
        os.makedirs(output_directory, exist_ok=True)
        for file_path in os.listdir('processed_data'):
            if file_path.endswith('.txt'):
                with open(os.path.join('processed_data', file_path), 'r') as file:
                    data = file.read()
                sentences = re.split(r'(?<=[.!?])\s+', data)
                for sentence in sentences:
                    file_name = f"{os.path.splitext(file_path)[0]}.json"
                    with open(os.path.join(output_directory, file_name), 'w') as file:
                        json.dump({"message": sentence}, file)

    @staticmethod
    def chapter_split_data():
        input_directory = 'processed_data'
        output_directory = "Split"
        os.makedirs(output_directory, exist_ok=True)

        def process_chapter_split(file_path):
            if file_path.endswith('.txt'):
                with open(os.path.join(input_directory, file_path), 'r') as file:
                    data = file.read()
                chapter_pattern = r'Chương (\d+|[IVXLCDM]+)'
                chapters = re.split(chapter_pattern, data)
                chapter_titles = re.findall(chapter_pattern, data)
                chapter_data = {}
                for i, chapter in enumerate(chapters[1:], start=1):
                    chapter_title = f'Chương {chapter_titles[i - 1]}'
                    chapter_data[chapter_title] = chapter.strip()
                with open(
                  os.path.join(output_directory, os.path.splitext(file_path)[0] + '.json'), 'w', encoding='utf-8'
                ) as json_file:
                    json.dump(chapter_data, json_file, ensure_ascii=False, indent=4)

        with concurrent.futures.ThreadPoolExecutor() as executor:
            executor.map(process_chapter_split, os.listdir(input_directory))
