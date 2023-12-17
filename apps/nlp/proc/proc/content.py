import os
import pandas as pd
import concurrent.futures
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.common.exceptions import NoSuchElementException, WebDriverException


class VBPLCrawler:
    RAW_DATA_FILE = "./raw_data/raw_VBPL_corpus.csv"

    @staticmethod
    def crawl_url(page):
        options = Options()
        options.add_argument("--incognito")
        options.add_argument("--window-size=1920x1080")

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

            temp_df = temp_df.append({
                'url': url.get_attribute('href'),
                'lawName': law_name.text,
                'description': des.text,
                "expDate": exp_date.text,
                "isExpire": is_expire
            }, ignore_index=True)

        driver.close()
        return temp_df

    def process_pages(self, start_page=1, end_page=140, max_workers=10):
        df = pd.DataFrame(columns=["url", "lawName", "description", "expDate", "isExpire"])
        if "raw_VBPL_corpus.csv" not in os.listdir("./raw_data"):
            df.to_csv(VBPLCrawler.RAW_DATA_FILE)
        else:
            df = pd.read_csv(VBPLCrawler.RAW_DATA_FILE, index_col=0)

        with concurrent.futures.ThreadPoolExecutor(max_workers=max_workers) as executor:
            future_to_page = {executor.submit(self.crawl_url, page): page for page in range(start_page, end_page)}
            for future in concurrent.futures.as_completed(future_to_page):
                page = future_to_page[future]
                try:
                    temp_df = future.result()
                    df = pd.concat([df, temp_df])
                except Exception as exc:
                    print(f'Page {page} generated an exception: {exc}')
                else:
                    print(f'Page {page} loaded')

        df.to_csv(VBPLCrawler.RAW_DATA_FILE)
        print("Crawling completed. Data saved to CSV.")
