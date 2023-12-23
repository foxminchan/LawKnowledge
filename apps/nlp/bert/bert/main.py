# Copyright (c) 2023-present Hutech University. All rights reserved
# Licensed under the MIT License

from bert.config import configs
from bert.model import PhoBertFineTuner
from bert.generator import QuestionGenerator


def switch(__action__):
    if __action__ == 'GENERATE_DATA':
        generator = QuestionGenerator()
        data = generator.process_dataset(configs.DATASET)
        generator.save_to_csv(data)
    elif __action__ == 'FINE_TUNING':
        fine_tuner = PhoBertFineTuner()
        fine_tuner.load_dataset()
        fine_tuner.train()
        fine_tuner.evaluate_model(fine_tuner.val_dataset)
        fine_tuner.save_model(configs.PATH)
    elif __action__ == 'EXIT':
        exit(0)
    else:
        raise ValueError(f'Invalid action: {format(__action__)}')


if __name__ == '__main__':
    while True:
        try:
            action = input("Enter action (GENERATE_DATA, FINE_TUNING, EXIT): ")
            switch(action)
            break
        except ValueError as error:
            print(error)
