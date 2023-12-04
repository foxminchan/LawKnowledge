from bs4 import BeautifulSoup
import os
import re
import json
import codecs


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

    def data_processing(self):
        output_directory = "Output"
        os.makedirs(output_directory, exist_ok=True)

        for file_path in os.listdir('Raw/demuc'):
            if file_path.endswith('.html'):
                file_data = self.get_data(file_path)
                with open(os.path.join(output_directory, os.path.splitext(file_path)[0] + '.txt'), 'w') as file:
                    file.writelines(file_data)

    @staticmethod
    def split_data():
        output_directory = "Split"
        os.makedirs(output_directory, exist_ok=True)

        for file_path in os.listdir('Output'):
            if file_path.endswith('.txt'):
                with open(file_path, 'r') as file:
                    data = file.read()
                sentences = re.split(r'(?<=[.!?])\s+', data)
                for sentence in sentences:
                    file_name = f"{os.path.splitext(file_path)[0]}.json"
                    with open(os.path.join(output_directory, file_name), 'w') as file:
                        json.dump({"message": sentence}, file)
