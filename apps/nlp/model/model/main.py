from model.config import configs
from model.model import PhoBertFineTuner

if __name__ == '__main__':
    fine_tuner_model_name = configs.MODEL
    data_directory = configs.DATASET
    fine_tuner = PhoBertFineTuner(fine_tuner_model_name, data_directory)
    fine_tuner.load_dataset()
    fine_tuner.train()
    fine_tuner.evaluate_model(fine_tuner.val_dataset)
    fine_tuner.save_model(configs.PATH)
