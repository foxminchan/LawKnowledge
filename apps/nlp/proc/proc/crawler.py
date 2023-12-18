import pandas as pd
import concurrent.futures
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.common import WebDriverException
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait


class LawCorpusCrawler:
    FILE_PATH = "./raw_data/raw_VBPL_corpus.csv"

    @staticmethod
    def crawl_text(url):
        options = Options()
        options.add_argument("--incognito")
        options.add_argument("--window-size=1920x1080")
        options.add_argument("--disable-extensions")
        options.add_argument("--dns-prefetch-disable")
        options.add_argument("--no-sandbox")
        options.add_argument("--disable-dev-shm-usage")
        options.add_argument("--disable-browser-side-navigation")
        options.add_argument("--headless")

        try:
            driver = webdriver.Chrome(options=options)
        except WebDriverException:
            driver = webdriver.Edge(options=options)

        try:
            driver.get(url)
            WebDriverWait(driver, 0.2)
            driver.set_page_load_timeout(5)
            content = driver.find_element(By.XPATH, '//*[@id="toanvancontent"]')
            text = content.text.replace("  ", "")
            print(f"Done with {url} with {len(text)} characters")
            driver.close()
            return text
        except Exception as ex:
            print(ex)
            driver.close()
            return ""

    def process_corpus(self, start_index=350, max_workers=30):
        df = pd.read_csv(LawCorpusCrawler.FILE_PATH)
        df["is_content"] = df['content'].astype(str) if 'content' in df.columns else ''

        with concurrent.futures.ThreadPoolExecutor(max_workers=max_workers) as executor:
            future_to_url = {
              executor.submit(self.crawl_text, df.iloc[i]["url"]): i for i in range(start_index, len(df))
            }
            for future in concurrent.futures.as_completed(future_to_url):
                i = future_to_url[future]
                try:
                    content = future.result()
                    df.at[i, "content"] = content
                    df.at[i, "is_content"] = True if content != "" else False
                except Exception as e:
                    print(f"Error at index {i}: {e}")

        df = df[~df["is_content"]]
        print("Good job! Done and saving to csv")
        df.to_csv(LawCorpusCrawler.FILE_PATH, index=False)
