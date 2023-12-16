from proc.content import VBPLCrawler
from proc.crawler import LawCorpusCrawler
from proc.scraping import Scraping


def switch(__action__):
    if __action__ == 'CLEAN_DATA':
        Scraping().data_processing()
    elif __action__ == 'SPLIT_DATA':
        Scraping().split_data()
    elif __action__ == 'CRAWL_DATA':
        crawler = LawCorpusCrawler()
        try:
            crawler.process_corpus("./raw_data/raw_VBPL_corpus.csv")
        finally:
            crawler.close_driver()
    elif __action__ == 'CRAWL_URL':
        crawler = VBPLCrawler()
        try:
            crawler.process_pages()
        finally:
            crawler.close_driver()
    else:
        raise ValueError('Invalid action: {}'.format(__action__))


if __name__ == '__main__':
    action = input("Enter action: ")
    switch(action)
