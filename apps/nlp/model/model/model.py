import torch
import torch.optim as optim
from pyspark.sql import SparkSession
from torch.utils.data import DataLoader
from datasets import load_metric, Dataset
from transformers import RobertaForSequenceClassification, RobertaTokenizer, get_linear_schedule_with_warmup


class PhoBertFineTuner:
    def __init__(self, model_identifier, folder_path):
        self.val_dataset = None
        self.train_dataset = None
        self.device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
        self.tokenizer = RobertaTokenizer.from_pretrained(model_identifier)
        self.model = RobertaForSequenceClassification.from_pretrained(model_identifier).to(self.device)
        self.folder_path = folder_path
        self.num_train_epochs = 3
        self.per_device_train_batch_size = 16
        self.per_device_eval_batch_size = 64
        self.warmup_steps = 500
        self.weight_decay = 0.01

    def preprocess_function(self, examples):
        return self.tokenizer(examples['text'], padding=True, truncation=True, max_length=512)

    def load_dataset(self):
        spark = SparkSession.builder.appName("PhoBERT").getOrCreate()
        spark_df = spark.read.csv(f"{self.folder_path}/*.csv", header=True, inferSchema=True)
        pandas_df = spark_df.toPandas()
        dataset = Dataset.from_pandas(pandas_df)
        dataset = dataset.map(self.preprocess_function, batched=True)
        dataset.set_format(type='torch', columns=['input_ids', 'attention_mask', 'label'])
        train_test_split = dataset.train_test_split(test_size=0.2)
        self.train_dataset = train_test_split['train']
        self.val_dataset = train_test_split['test']

    def configure_optimizers(self):
        optimizer = optim.AdamW(self.model.parameters(), lr=5e-5, weight_decay=self.weight_decay)
        num_training_steps = self.num_train_epochs * len(self.train_dataset) // self.per_device_train_batch_size
        scheduler = get_linear_schedule_with_warmup(
          optimizer,
          num_warmup_steps=self.warmup_steps,
          num_training_steps=num_training_steps
        )
        return optimizer, scheduler

    @staticmethod
    def compute_metrics(predictions, references):
        accuracy_metric = load_metric("accuracy")
        return accuracy_metric.compute(predictions=predictions, references=references)

    def validation(self, dataloader):
        self.model.eval()
        total_loss = 0
        total_correct = 0
        total = 0
        all_predictions = []
        all_references = []

        with torch.no_grad():
            for batch in dataloader:
                batch = {k: v.to(self.device) for k, v in batch.items()}
                outputs = self.model(**batch)
                loss = outputs.loss
                total_loss += loss.item()
                pred = torch.argmax(outputs.logits, dim=1)
                total_correct += (pred == batch['labels']).to(torch.int).sum().item()
                total += batch['labels'].size(0)
                all_predictions.extend(pred.cpu().numpy())
                all_references.extend(batch['labels'].cpu().numpy())

        avg_loss = total_loss / len(dataloader)
        accuracy = total_correct / total
        metrics = self.compute_metrics(all_predictions, all_references)
        return avg_loss, accuracy, metrics

    @staticmethod
    def validation_epoch_end(avg_loss, accuracy, metrics):
        print(f"Validation Loss: {avg_loss}")
        print(f"Validation Accuracy: {accuracy}")
        print(f"Validation Metrics: {metrics}")

    def evaluate_model(self, eval_dataset):
        eval_dataloader = DataLoader(eval_dataset, batch_size=self.per_device_eval_batch_size)
        eval_loss, eval_accuracy, eval_metrics = self.validation(eval_dataloader)
        print(f"Evaluation Loss: {eval_loss}")
        print(f"Evaluation Accuracy: {eval_accuracy}")
        print(f"Evaluation Metrics: {eval_metrics}")

    def train(self):
        train_dataloader = DataLoader(
          self.train_dataset,
          batch_size=self.per_device_train_batch_size,
          shuffle=True,
          num_workers=4
        )

        val_dataloader = DataLoader(
          self.val_dataset,
          batch_size=self.per_device_eval_batch_size,
          num_workers=4
        )
        optimizer, scheduler = self.configure_optimizers()

        for _ in range(self.num_train_epochs):
            self.model.train()
            for batch in train_dataloader:
                batch = {k: v.to(self.device) for k, v in batch.items()}
                outputs = self.model(**batch)
                loss = outputs.loss
                optimizer.zero_grad()
                loss.backward()
                optimizer.step()
                scheduler.step()

            val_loss, val_accuracy, val_metrics = self.validation(val_dataloader)
            self.validation_epoch_end(val_loss, val_accuracy, val_metrics)

    def save_model(self, save_directory):
        self.model.save_pretrained(save_directory)
