# Copyright (c) 2023-present Hutech University. All rights reserved
# Licensed under the MIT License

from processor.corpus import CorpusCrawler
from processor.codification import CodificationCrawler


def switch(__action__):
    if __action__ == 'SETUP_CODIFICATION':
        CodificationCrawler().process_data()
    elif __action__ == 'SETUP_CORPUS':
        CorpusCrawler().process_corpus()
    elif __action__ == 'EXIT':
        exit(0)
    else:
        raise ValueError(f'Invalid action: {format(__action__)}')


if __name__ == '__main__':
    while True:
        action = input('Please enter action (SETUP_CODIFICATION, SETUP_CORPUS, EXIT): ')
        try:
            switch(action)
            break
        except ValueError as error:
            print(error)
