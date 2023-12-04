from proc.scraping import Scraping


def switch(__action__):
    if __action__ == 'CLEAN_DATA':
        Scraping().data_processing()
    elif __action__ == 'SPLIT_DATA':
        Scraping().split_data()
    else:
        raise ValueError('Invalid action: {}'.format(__action__))


if __name__ == '__main__':
    action = input("Enter action: ")
    switch(action)
