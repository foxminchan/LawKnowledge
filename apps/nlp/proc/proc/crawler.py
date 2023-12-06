from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as ec
from tqdm import tqdm
import pandas as pd


class LawCorpusCrawler:
    def __init__(self):
        options = Options()
        options.add_argument("--incognito")
        options.add_argument("--window-size=1920x1080")
        options.add_argument("--disable-extensions")
        options.add_argument("--dns-prefetch-disable")
        options.add_argument("--no-sandbox")
        options.add_argument("--disable-dev-shm-usage")
        options.add_argument("--disable-browser-side-navigation")
        options.add_argument("--disable-gpu")
        self.driver = webdriver.Chrome(options=options)

    def crawl_text(self, url):
        try:
            self.driver.get(url)
            WebDriverWait(self.driver, 0.2)
            self.driver.set_page_load_timeout(5)
            content = self.driver.find_element(By.XPATH, '//*[@id="toanvancontent"]')
            text = content.text.replace("  ", "")
            return text
        except Exception as ex:
            print(ex)
            return ""

    def process_corpus(self, file_path):
        df = pd.read_csv(file_path)
        df['content'] = df['content'].astype(str)
        try:
            for i in tqdm(range(350, len(df))):
                content = self.crawl_text(df.iloc[i]["url"])
                df.at[i, "content"] = content
                if content != "":
                    df.at[i, "is_content"] = True
            print("Good job! Done and saving to csv")
            df.to_csv(file_path, index=False)
        except Exception as e:
            print(e)
            print("ERROR DUMP at index {}! Saving to csv".format(i))
            df.to_csv(file_path, index=False)
        except KeyboardInterrupt:
            print("ERROR DUMP at index {}! Saving to csv".format(i))
            df.to_csv(file_path, index=False)

    def close_driver(self):
        self.driver.close()
