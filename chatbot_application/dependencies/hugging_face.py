```python
from transformers import AutoModelForCausalLM, AutoTokenizer

class HuggingFaceChatModel:
    def __init__(self, model_name="gpt2"):
        self.tokenizer = AutoTokenizer.from_pretrained(model_name)
        self.model = AutoModelForCausalLM.from_pretrained(model_name)

    def generate_response(self, input_text):
        # Encode the input text
        input_ids = self.tokenizer.encode(input_text + self.tokenizer.eos_token, return_tensors='pt')

        # Generate a response
        chat_ids = self.model.generate(input_ids, max_length=1000, pad_token_id=self.tokenizer.eos_token_id)

        # Decode the response
        chat_text = self.tokenizer.decode(chat_ids[:, input_ids.shape[-1]:][0], skip_special_tokens=True)

        return chat_text
```