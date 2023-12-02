
from transformers import AutoTokenizer, AutoModelForQuestionAnswering
from transformers import TrainingArguments, Trainer
from datasets import load_dataset

# Load the pre-trained question answering model and tokenizerd
model_name = "deepset/roberta-base-squad2"
model = AutoModelForQuestionAnswering.from_pretrained(model_name)
tokenizer = AutoTokenizer.from_pretrained(model_name)

# Load your labeled question answering dataset
# Replace 'path/to/your/dataset' with the actual path or name of your dataset
dataset = load_dataset("C:/Users/ADMIN/Downloads/BoPhapDienDienTu/output/")


# Tokenize the dataset
def tokenize_function(examples):
  return tokenizer(examples['context'], examples['context'], truncation=True)


tokenized_datasets = dataset.map(tokenize_function, batched=True)

# Define training arguments for fine-tuning
fine_tuning_args = TrainingArguments(
  output_dir="./question_answering_fine_tuned_model",
  per_device_train_batch_size=4,
  save_total_limit=2,
  num_train_epochs=2,
  logging_dir="./logs",
)


# Define a function to compute metrics during fine-tuning
def compute_metrics(p):
  return {"exact_match": p["exact_match"], "f1": p["f1"]}


# Define the Trainer for fine-tuning
trainer = Trainer(
  model=model,
  args=fine_tuning_args,
  train_dataset=tokenized_datasets["train"],
  data_collator=None,
  compute_metrics=compute_metrics,
)

# Fine-tune the model
trainer.train()

# Save the fine-tuned model
model.save_pretrained("./question_answering_fine_tuned_model")

# Optionally, evaluate the fine-tuned model on a validation set
# Replace 'path/to/your/validation/dataset' with the actual path or name of your validation dataset
validation_dataset = load_dataset("path/to/your/validation/dataset")
tokenized_validation_datasets = validation_dataset.map(tokenize_function, batched=True)
trainer.evaluate(tokenized_validation_datasets["train"])
