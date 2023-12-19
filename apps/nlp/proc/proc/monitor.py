import os
import shutil
import pandas as pd
import concurrent.futures
from corpus import CorpusCrawler
from proc.codification import CodificationCrawler


class DataMonitor:
    NEW_DATA_FILE = "./phap_dien_raw/new_data"

    def __init__(self, start_page=1, end_page=10):
        self.data_file = "./raw_data/raw_VBPL_corpus.csv"
        self.start_page = start_page
        self.end_page = end_page
        self.corpus_crawler = CorpusCrawler()
        self.codification_crawler = CodificationCrawler()

    def crawl_new_corpus_data(self):
        new_data = pd.DataFrame()
        with concurrent.futures.ThreadPoolExecutor() as executor:
            futures = [
              executor.submit(self.corpus_crawler.crawl_url, page) for page in range(self.start_page, self.end_page + 1)
            ]
            for future in concurrent.futures.as_completed(futures):
                new_data = new_data.append(future.result(), ignore_index=True)
        return new_data

    def compare_and_update(self):
        def process_corpus():
            print("Processing Corpus...")
            existing_data = pd.read_csv(self.data_file) if os.path.exists(self.data_file) else pd.DataFrame()
            new_data = self.crawl_new_corpus_data()
            if not new_data.equals(existing_data):
                updated_data = pd.concat([existing_data, new_data]).drop_duplicates(keep='last')
                updated_data.to_csv(self.data_file, index=False)
                print("Data updated.")
                self.corpus_crawler.process_corpus(start_index=len(existing_data))
                print("Corpus updated.")
            else:
                print("No updates required.")

        def process_codification():
            print("Processing Codification...")
            self.codification_crawler.download_data()
            for file_name in os.listdir('./phap_dien_raw/txt'):
                if file_name not in os.listdir('./phap_dien_raw/demuc'):
                    if not os.path.exists(DataMonitor.NEW_DATA_FILE):
                        os.makedirs(DataMonitor.NEW_DATA_FILE)
                shutil.move(
                  os.path.join('./phap_dien_raw/txt', file_name),
                  os.path.join(DataMonitor.NEW_DATA_FILE, file_name)
                )
            os.remove('./phap_dien_raw/demuc')

        process_corpus()
        process_codification()
