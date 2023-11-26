import torch
from transformers import AutoModel, AutoTokenizer

phobert = AutoModel.from_pretrained("duyduong9htv/phobert-qa-finetuned-viet-qa")
tokenizer = AutoTokenizer.from_pretrained("duyduong9htv/phobert-qa-finetuned-viet-qa")

# INPUT TEXT MUST BE ALREADY WORD-SEGMENTED!
sentence = 'Chúng_tôi là những nghiên_cứu_viên .'

input_ids = torch.tensor([tokenizer.encode(sentence)])

with torch.no_grad():
    features = phobert(input_ids)  # Models outputs are now tuples

## With TensorFlow 2.0+:
# from transformers import TFAutoModel
# phobert = TFAutoModel.from_pretrained("vinai/phobert-base")
