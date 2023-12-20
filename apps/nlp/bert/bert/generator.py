import csv
import glob
import concurrent
from bert.config import configs
from pyspark.sql import SparkSession
from pyspark.sql.functions import udf
from concurrent.futures import ThreadPoolExecutor
from pyspark.sql.types import StringType, ArrayType
from transformers import BartForConditionalGeneration, BartTokenizer, T5ForConditionalGeneration, T5Tokenizer


class QuestionGenerator:
    def __init__(self):
        self.bart_tokenizer = BartTokenizer.from_pretrained(configs.SUMMARY_MODEL)
        self.bart_model = BartForConditionalGeneration.from_pretrained(configs.SUMMARY_MODEL)
        self.t5_tokenizer = T5Tokenizer.from_pretrained(configs.GENERATE_MODEL)
        self.t5_model = T5ForConditionalGeneration.from_pretrained(configs.GENERATE_MODEL)

    def summarize(self, text):
        inputs = self.bart_tokenizer([text], max_length=1024, return_tensors='pt')
        summary_ids = self.bart_model.generate(inputs['input_ids'], num_beams=4, max_length=200, early_stopping=True)
        return self.bart_tokenizer.decode(summary_ids[0], skip_special_tokens=True, clean_up_tokenization_spaces=False)

    def generate_questions(self, text):
        input_text = "generate question: " + text
        inputs = self.t5_tokenizer.encode(input_text, return_tensors='pt', max_length=512, truncation=True)
        outputs = self.t5_model.generate(inputs, max_length=64, num_return_sequences=3)
        return [self.t5_tokenizer.decode(output, skip_special_tokens=True) for output in outputs]

    def process_file(self, filename):
        spark = SparkSession.builder.appName("TextProcessing").getOrCreate()
        df = spark.read.csv(filename, header=True, encoding='utf-8')
        summarize_udf = udf(self.summarize, StringType())
        generate_questions_udf = udf(self.generate_questions, ArrayType(StringType()))
        transformed_df = df.withColumn("summary", summarize_udf(df['content'])) \
            .withColumn("questions", generate_questions_udf(df['summary']))
        return transformed_df.rdd.flatMap(lambda row: [(q, row['summary']) for q in row['questions']]).collect()

    def process_files(self, file_path, max_workers=5):
        question_context_pairs = []
        with ThreadPoolExecutor(max_workers=max_workers) as executor:
            future_to_file = {
              executor.submit(self.process_file, filename): filename for filename in glob.glob(file_path)
            }
            for future in concurrent.futures.as_completed(future_to_file):
                question_context_pairs.extend(future.result())
        return question_context_pairs

    @staticmethod
    def save_to_csv(dataset, csv_file):
        with open(csv_file, 'w', newline='', encoding='utf-8') as file:
            writer = csv.DictWriter(file, fieldnames=['question', 'context'])
            writer.writeheader()
            for question, context in dataset:
                writer.writerow({'question': question, 'context': context})
        print(f"Dataset saved to {csv_file}")
