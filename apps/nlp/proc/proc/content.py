import os
import pandas as pd
from tqdm import tqdm
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.common import NoSuchElementException
from selenium.webdriver.chrome.options import Options


class VBPLCrawler:
    RAW_DATA_FILE = "./raw_data/raw_VBPL_corpus.csv"

    def __init__(self):
        options = Options()
        options.add_argument("--incognito")
        options.add_argument("--window-size=1920x1080")
        self.driver = webdriver.Chrome(options=options)

    def crawl_url(self, page):
        url = ("https://vbpl.vn/VBQPPL_UserControls/Publishing_22/TimKiem/p_KetQuaTimKiemVanBan.aspx??type=0&s=0"
               "&SearchIn=VBPQFulltext&&IsVietNamese=True&DivID=tabVB_lv1_01&Page={}&RowPerPage=1000").format(page)
        self.driver.set_page_load_timeout(1000)
        self.driver.get(url)

        temp_df = pd.DataFrame(columns=["url", "lawName", "description", "expDate", "isExpire"])
        title = self.driver.find_elements(By.XPATH, '//ul[@class="listLaw"]/li')

        for tit in title:
            des = tit.find_element(By.XPATH, './/div[@class="des"]')
            law_name = tit.find_element(By.XPATH, './/p[@class="title"]')
            url = law_name.find_element(By.XPATH, './/a')
            exp_date = tit.find_elements(By.XPATH, './/p[@class="green"]')[-1]
            try:
                is_expire = tit.find_element(By.XPATH, './/p[@class="red"]').text
            except NoSuchElementException:
                is_expire = pd.NA

            temp_df = temp_df._append({
                'url': url.get_attribute('href'),
                'lawName': law_name.text,
                'description': des.text,
                "expDate": exp_date.text,
                "isExpire": is_expire
              },
              ignore_index=True
            )

        return temp_df

    def process_pages(self):
        df = pd.DataFrame(columns=["url", "lawName", "description", "expDate", "isExpire"])  # Correct column names
        list_raw_data = os.listdir("./raw_data")
        if "raw_VBPL_corpus.csv" not in list_raw_data:
            df.to_csv(VBPLCrawler.RAW_DATA_FILE)
        else:
            df = pd.read_csv(VBPLCrawler.RAW_DATA_FILE, index_col=0)

        i = 0
        try:
            for i in tqdm(range(1, 140)):
                temp_df = self.crawl_url(i)
                df = pd.concat([df, temp_df])
            print("Good job! Done and saving to csv")
            df.to_csv(VBPLCrawler.RAW_DATA_FILE)
            print(df)
        except Exception as e:
            print(e)
            print(f"ERROR DUMP at index {i}! Saving to csv")
            df.to_csv(VBPLCrawler.RAW_DATA_FILE)
            print(df)

    def close_driver(self):
        self.driver.close()
