from proc.scraping import Scraping
from proc.monitor import DataMonitor
from proc.content import VBPLCrawler
from proc.crawler import LawCorpusCrawler


def switch(__action__):
    if __action__ == 'SETUP_PHAP_DIEN':
        Scraping().process_data()
    if __action__ == 'SETUP_CORPUS':
        VBPLCrawler().process_pages()
        LawCorpusCrawler().process_corpus()
    elif __action__ == 'UPDATE_DATA':
        DataMonitor().compare_and_update()
    else:
        raise ValueError('Invalid action: {}'.format(__action__))


if __name__ == '__main__':
    action = input('Please enter action: ')
    switch(action)
