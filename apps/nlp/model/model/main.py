from model.config import configs
from model.model import PhoBertFineTuner
from model.generator import QuestionGenerator


def switch(__action__):
    if __action__ == 'GENERATE_DATA':
        generator = QuestionGenerator()
        data = generator.process_files('./raw-data/*.csv')
        generator.save_to_csv(data, configs.DATASET)
    elif __action__ == 'FINE_TUNING':
        fine_tuner = PhoBertFineTuner(configs.QA_MODEL, configs.DATASET)
        fine_tuner.load_dataset()
        fine_tuner.train()
        fine_tuner.evaluate_model(fine_tuner.val_dataset)
        fine_tuner.save_model(configs.PATH)
    else:
        raise ValueError('Invalid action: {}'.format(__action__))


if __name__ == '__main__':
    while True:
        try:
            action = input("Enter action (GENERATE_DATA or FINE_TUNING): ")
            switch(action)
            break
        except ValueError as error:
            print(error)
