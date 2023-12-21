# Copyright (c) 2023-present Hutech University. All rights reserved
# Licensed under the MIT License

import os
import re
import pandas as pd
import concurrent.futures
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.wait import WebDriverWait
from selenium.common.exceptions import NoSuchElementException, WebDriverException


class CorpusCrawler:
    FOLDER = "./raw_data"
    RAW_DATA_FILE = "./raw_data/raw_VBPL_corpus.csv"
    FILE_PATH = "./raw_data/raw_VBPL_corpus.csv"

    @staticmethod
    def crawl_url(page):
        options = Options()
        options.add_argument("--incognito")
        options.add_argument("--window-size=1920x1080")
        options.add_argument("--headless")

        try:
            driver = webdriver.Chrome(options=options)
        except WebDriverException:
            driver = webdriver.Edge(options=options)

        url = (f"https://vbpl.vn/VBQPPL_UserControls/Publishing_22/TimKiem/p_KetQuaTimKiemVanBan.aspx??type=0&s=0"
               f"&SearchIn=VBPQFulltext&&IsVietNamese=True&DivID=tabVB_lv1_01&Page={page}&RowPerPage=1000")
        driver.set_page_load_timeout(1000)
        driver.get(url)

        temp_df = pd.DataFrame(columns=["url", "lawName", "description", "expDate", "isExpire"])
        title = driver.find_elements(By.XPATH, '//ul[@class="listLaw"]/li')

        for tit in title:
            des = tit.find_element(By.XPATH, './/div[@class="des"]')
            law_name = tit.find_element(By.XPATH, './/p[@class="title"]')
            url = law_name.find_element(By.XPATH, './/a')
            exp_date = tit.find_elements(By.XPATH, './/p[@class="green"]')[-1]
            try:
                is_expire = tit.find_element(By.XPATH, './/p[@class="red"]').text
            except NoSuchElementException:
                is_expire = pd.NA

            temp_df = pd.concat([temp_df, pd.DataFrame([{
              'url': url.get_attribute('href'),
              'lawName': law_name.text,
              'description': des.text,
              "expDate": exp_date.text,
              "isExpire": is_expire
            }])], ignore_index=True)

        driver.close()
        return temp_df

    def process_pages(self, start_page=1, end_page=140, max_workers=10):
        df = pd.DataFrame(columns=["url", "lawName", "description", "expDate", "isExpire"])
        if not os.path.exists(CorpusCrawler.FOLDER):
            os.makedirs(CorpusCrawler.FOLDER)
        if "raw_VBPL_corpus.csv" not in os.listdir(CorpusCrawler.FOLDER):
            df.to_csv(CorpusCrawler.RAW_DATA_FILE)
        else:
            df = pd.read_csv(CorpusCrawler.RAW_DATA_FILE, index_col=0)

        with concurrent.futures.ThreadPoolExecutor(max_workers=max_workers) as executor:
            future_to_page = {executor.submit(self.crawl_url, page): page for page in range(start_page, end_page)}
            for future in concurrent.futures.as_completed(future_to_page):
                page = future_to_page[future]
                try:
                    df = pd.concat([df, future.result().dropna()], ignore_index=True)
                except Exception as exc:
                    print(f'Page {page} generated an exception: {exc}')
                else:
                    print(f'Page {page} loaded')

        df = df[~df['isExpire'].str.contains('Hết hiệu lực', na=False, flags=re.IGNORECASE)]
        df.to_csv(CorpusCrawler.RAW_DATA_FILE)
        print("Crawling completed. Data saved to CSV.")

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
        CorpusCrawler().process_pages()

        df = pd.read_csv(CorpusCrawler.FILE_PATH)
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
        df.to_csv(CorpusCrawler.FILE_PATH, index=False)
