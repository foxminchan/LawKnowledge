import pandas as pd
import concurrent.futures
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.common import WebDriverException
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait


class LawCorpusCrawler:
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
        options.add_argument("--disable-gpu")

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
            driver.close()
            return text
        except Exception as ex:
            print(ex)
            driver.close()
            return ""

    def process_corpus(self, file_path, start_index=350, max_workers=10):
        df = pd.read_csv(file_path)
        df['content'] = df['content'].astype(str)

        with concurrent.futures.ThreadPoolExecutor(max_workers=max_workers) as executor:
            future_to_url = {
              executor.submit(self.crawl_text, df.iloc[i]["url"]): i for i in range(start_index, len(df))
            }
            for future in concurrent.futures.as_completed(future_to_url):
                i = future_to_url[future]
                try:
                    content = future.result()
                    df.at[i, "content"] = content
                    if content != "":
                        df.at[i, "is_content"] = True
                except Exception as e:
                    print(f"Error at index {i}: {e}")

        print("Good job! Done and saving to csv")
        df.to_csv(file_path, index=False)
