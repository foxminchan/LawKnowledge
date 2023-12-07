import os
import pandas as pd
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from tqdm import tqdm


class VBPLCrawler:
    def __init__(self):
        options = Options()
        options.add_argument("--incognito")
        options.add_argument("--window-size=1920x1080")
        self.driver = webdriver.Chrome()

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
            except:
                pass
                is_expire = pd.NA
            temp_df = temp_df.append({
              'url': url.get_attribute('href'),
              'lawName': law_name.text,
              'description': des.text,
              "expDate": exp_date.text,
              "isExpire": is_expire
            }, ignore_index=True)

        return temp_df

    def process_pages(self):
        df = pd.DataFrame(columns=['url', 'law_name', 'description'])
        list_raw_data = os.listdir("./raw_data")
        if "raw_VBPL_corpus.csv" not in list_raw_data:
            df.to_csv("./raw_data/raw_VBPL_corpus.csv")
        else:
            df = pd.read_csv("./raw_data/raw_VBPL_corpus.csv", index_col=0)

        try:
            for i in tqdm(range(1, 140)):
                temp_df = self.crawl_url(i)
                df = pd.concat([df, temp_df])
            print("Good job! Done and saving to csv")
            df.to_csv("./raw_data/raw_VBPL_corpus.csv")
        except Exception as e:
            print(e)
            print(f"ERROR DUMP at index {i}! Saving to csv")
            df.to_csv("./raw_data/raw_VBPL_corpus.csv")

    def close_driver(self):
        self.driver.close()
