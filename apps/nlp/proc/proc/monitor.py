
import os
import pandas as pd
import concurrent.futures
from content import VBPLCrawler
from crawler import LawCorpusCrawler


class DataMonitor:
    def __init__(self, data_file, start_page=1, end_page=10):
        self.data_file = data_file
        self.start_page = start_page
        self.end_page = end_page
        self.crawler = VBPLCrawler()
        self.content = LawCorpusCrawler()

    def read_existing_data(self):
        if os.path.exists(self.data_file):
            return pd.read_csv(self.data_file)
        else:
            return pd.DataFrame()

    def crawl_new_data(self):
        new_data = pd.DataFrame()
        with concurrent.futures.ThreadPoolExecutor() as executor:
            futures = [
              executor.submit(self.crawler.crawl_url, page) for page in range(self.start_page, self.end_page + 1)
            ]
            for future in concurrent.futures.as_completed(futures):
                new_data = new_data.append(future.result(), ignore_index=True)
        return new_data

    def compare_and_update(self):
        existing_data = self.read_existing_data()
        new_data = self.crawl_new_data()

        if not new_data.equals(existing_data):
            updated_data = pd.concat([existing_data, new_data]).drop_duplicates(keep='last')
            updated_data.to_csv(self.data_file, index=False)
            print("Data updated.")
            self.content.process_corpus(self.data_file, start_index=len(existing_data))
            print("Corpus updated.")
        else:
            print("No updates required.")
