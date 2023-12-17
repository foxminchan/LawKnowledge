from proc.scraping import Scraping
from proc.monitor import DataMonitor
from proc.content import VBPLCrawler
from proc.crawler import LawCorpusCrawler


def switch(__action__):
    if __action__ == 'CLEAN_DATA':
        Scraping().data_processing("./raw_data")
    elif __action__ == 'SENTENCE_SPLIT_DATA':
        Scraping().sentence_split_data()
    elif __action__ == 'CHAPTER_SPLIT_DATA':
        Scraping().chapter_split_data()
    elif __action__ == 'CRAWL_DATA':
        LawCorpusCrawler().process_corpus("./raw_data/raw_VBPL_corpus.csv")
    elif __action__ == 'CRAWL_URL':
        VBPLCrawler().process_pages()
    elif __action__ == 'UPDATE_DATA':
        DataMonitor("./raw_data/raw_VBPL_corpus.csv").compare_and_update()
    else:
        raise ValueError('Invalid action: {}'.format(__action__))


if __name__ == '__main__':
    action = input("Enter action: ")
    switch(action)
