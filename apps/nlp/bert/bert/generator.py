# Copyright (c) 2023-present Hutech University. All rights reserved
# Licensed under the MIT License

import os
import csv
import random
import concurrent
from bert.config import configs
from datasets import load_dataset
from concurrent.futures import ThreadPoolExecutor
from transformers import BartForConditionalGeneration, BartTokenizer, T5ForConditionalGeneration, T5Tokenizer


class QuestionGenerator:
    QA_SETS = './datasets/qa_sets.csv'

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

    def process_dataset(self, dataset_name, max_workers=5):
        def process_text(text):
            summary = self.summarize(text)
            questions = self.generate_questions(summary)
            return [(q, summary) for q in questions]

        dataset = load_dataset(dataset_name)
        question_context_pairs = []
        with ThreadPoolExecutor(max_workers=max_workers) as executor:
            for batch in dataset:
                future_results = [executor.submit(process_text, text) for text in batch['text']]
                for future in concurrent.futures.as_completed(future_results):
                    question_context_pairs.extend(future.result())
        return question_context_pairs

    @staticmethod
    def save_to_csv(dataset,):
        if not os.path.exists(QuestionGenerator.QA_SETS):
            os.makedirs(QuestionGenerator.QA_SETS)
        with open(QuestionGenerator.QA_SETS, 'w', newline='', encoding='utf-8') as file:
            writer = csv.DictWriter(file, fieldnames=['question', 'context'])
            writer.writeheader()
            for question, context in dataset:
                writer.writerow({'question': question, 'context': context})
        print(f"Dataset saved to {QuestionGenerator.QA_SETS}")
        load_dataset(QuestionGenerator.QA_SETS).push_to_hub(
          configs.DATASET, commit_message=f"Add question-answer dataset #{random.getrandbits(128)}"
        )
        print("Dataset uploaded to HuggingFace Hub")
