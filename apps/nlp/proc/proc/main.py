from proc.monitor import DataMonitor
from proc.corpus import CorpusCrawler
from proc.codification import CodificationCrawler


def switch(__action__):
    if __action__ == 'SETUP_CODIFICATION':
        CodificationCrawler().process_data()
    elif __action__ == 'SETUP_CORPUS':
        CorpusCrawler().process_corpus()
    elif __action__ == 'UPDATE_DATA':
        DataMonitor().compare_and_update()
    else:
        raise ValueError('Invalid action: {}'.format(__action__))


if __name__ == '__main__':
    while True:
        action = input('Please enter action (SETUP_CODIFICATION, SETUP_CORPUS, UPDATE_DATA): ')
        try:
            switch(action)
            break
        except ValueError as error:
            print(error)
