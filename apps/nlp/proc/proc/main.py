from proc.content import VBPLCrawler
from proc.crawler import LawCorpusCrawler
from proc.scraping import Scraping


def switch(__action__):
    if __action__ == 'CLEAN_DATA':
        Scraping().data_processing("./raw_data")
    elif __action__ == 'SPLIT_DATA':
        Scraping().split_data()
    elif __action__ == 'CRAWL_DATA':
        LawCorpusCrawler().process_corpus("./raw_data/raw_VBPL_corpus.csv")
    elif __action__ == 'CRAWL_URL':
        VBPLCrawler().process_pages()
    else:
        raise ValueError('Invalid action: {}'.format(__action__))


if __name__ == '__main__':
    action = input("Enter action: ")
    switch(action)
