from model.config import configs
from model.model import PhoBertFineTuner
from model.generator import QuestionGenerator


def switch(__action__):
    if __action__ == 'GENERATE_DATA':
        generator = QuestionGenerator()
        data = generator.process_files('./data/*.txt')
        generator.save_to_csv(data, "question_context_dataset.csv")
    elif __action__ == 'FINE_TUNING':
        fine_tuner = PhoBertFineTuner(configs.QA_MODEL, configs.DATASET)
        fine_tuner.load_dataset()
        fine_tuner.train()
        fine_tuner.evaluate_model(fine_tuner.val_dataset)
        fine_tuner.save_model(configs.PATH)
    else:
        raise ValueError('Invalid action: {}'.format(__action__))


if __name__ == '__main__':
    action = input("Enter action: ")
    switch(action)
