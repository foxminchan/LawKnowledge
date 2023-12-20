import os
import re
import csv
import json
import zipfile
import requests
import concurrent.futures
from bs4 import BeautifulSoup
from concurrent.futures import ThreadPoolExecutor


class CodificationCrawler:
    MAX_RETRIES = 3
    ZIP_FILE = 'BoPhapDienDienTu.zip'
    RAW_DATA_FOLDER = './phap_dien_raw'
    JS_FILE = './phap_dien_raw/jsonData.js'

    @staticmethod
    def download_data():
        attempt = 0
        while attempt < CodificationCrawler.MAX_RETRIES:
            try:
                with requests.get(
                  'https://phapdien.moj.gov.vn/TraCuuPhapDien/Files/BoPhapDienDienTu.zip', stream=True
                ) as response:
                    response.raise_for_status()
                    with open(CodificationCrawler.ZIP_FILE, 'wb') as file:
                        for chunk in response.iter_content(chunk_size=8192):
                            file.write(chunk)
                print(f'Downloaded {CodificationCrawler.ZIP_FILE}')
                break
            except requests.exceptions.RequestException as e:
                print(f'Failed to download {CodificationCrawler.ZIP_FILE}. Error: {e}. Retrying...')
                attempt += 1
                if attempt == CodificationCrawler.MAX_RETRIES:
                    print(f'Failed to download {CodificationCrawler.ZIP_FILE} after {attempt} attempts.')
                    raise
        if not os.path.exists(CodificationCrawler.RAW_DATA_FOLDER):
            os.makedirs(CodificationCrawler.RAW_DATA_FOLDER)
        try:
            with zipfile.ZipFile(CodificationCrawler.ZIP_FILE, 'r') as zip_ref:
                zip_ref.extractall(CodificationCrawler.RAW_DATA_FOLDER)
            os.remove(CodificationCrawler.ZIP_FILE)
            os.remove(f"{CodificationCrawler.RAW_DATA_FOLDER}/lib")
            os.remove(f"{CodificationCrawler.RAW_DATA_FOLDER}/BoPhapDien.html")
            print(f'Extracted {CodificationCrawler.ZIP_FILE} to {CodificationCrawler.RAW_DATA_FOLDER}')
        except zipfile.BadZipFile:
            print(f'Failed to extract {CodificationCrawler.ZIP_FILE}')
            raise

    @staticmethod
    def convert_html_to_text():
        CodificationCrawler.download_data()

        def convert_file(filename):
            filepath = os.path.join('./phap_dien_raw/demuc', filename)
            with open(filepath, 'r', encoding='utf-8') as file:
                soup = BeautifulSoup(file, 'html.parser')
                text = '\n'.join(p.get_text() for p in soup.find_all('p'))
                text = text.replace("(Xem Danh mục văn bản pháp điển vào đề mục: )\n", "")
            if text.strip():
                new_filename = filename.replace('.html', '.txt')
                new_filepath = os.path.join('./phap_dien_raw/demuc', new_filename)
                with open(new_filepath, 'w', encoding='utf-8') as new_file:
                    new_file.write(text)
                print(f'Converted {filename} to {new_filename}')
            else:
                print(f'Skipped empty file: {filename}')
            os.remove(filepath)

        files_to_convert = [f for f in os.listdir('./phap_dien_raw/txt') if f.endswith('.html')]
        with concurrent.futures.ThreadPoolExecutor() as executor:
            executor.map(convert_file, files_to_convert)

    @staticmethod
    def convert_to_csv():
        CodificationCrawler.convert_html_to_text()

        if not os.path.exists(CodificationCrawler.JS_FILE):
            raise FileNotFoundError(f'Folder {CodificationCrawler.JS_FILE} not found')

        def to_csv(data, name, output):
            csv_file_path = os.path.join(output, f'{name}.csv')
            with open(csv_file_path, 'w', newline='', encoding='utf-8') as csv_file:
                writer = csv.DictWriter(csv_file, fieldnames=data[0].keys())
                writer.writeheader()
                writer.writerows(data)
            print(f'Converted {name} to CSV at {csv_file_path}')

        def split_large_json(json_str):
            objects = re.split(r'},\s*\{', json_str)
            json_objects = []
            for i, obj in enumerate(objects):
                try:
                    if i != 0:
                        obj = '{' + obj
                    if i != len(objects) - 1:
                        obj += '}'
                    json_object = json.loads(obj)
                    json_objects.append(json_object)
                except json.JSONDecodeError as e:
                    print(f"Error decoding JSON object at index {i}: {e}")
            return json_objects

        with open(CodificationCrawler.JS_FILE, 'r', encoding='utf-8') as file:
            content = file.read()
            jd_topic = json.loads(re.search(r"var jdChuDe = (\[[^]]*])", content, re.DOTALL).group(1))
            jd_heading = json.loads(re.search(r"var jdDeMuc = (\[[^]]*])", content, re.DOTALL).group(1))
            jd_all_tree = split_large_json(
              re.search(r"var jdAllTree = (\[[^]]*])", content, re.DOTALL).group(1)[1:-1]
            )

        output_folder = os.path.dirname(CodificationCrawler.JS_FILE)
        tasks = [
          (jd_topic, 'ChuDe', output_folder),
          (jd_heading, 'DeMuc', output_folder),
          (jd_all_tree, 'AllTree', output_folder)
        ]

        with ThreadPoolExecutor() as executor:
            executor.map(lambda p: to_csv(*p), tasks)

        os.remove(CodificationCrawler.JS_FILE)

    @staticmethod
    def process_data():
        CodificationCrawler.convert_to_csv()
