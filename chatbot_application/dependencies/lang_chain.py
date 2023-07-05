```python
from langchain import LangChain

class LangChainIntegration:
    def __init__(self, model_name):
        self.model_name = model_name
        self.lang_chain = LangChain(model_name)

    def generate_response(self, prompt):
        response = self.lang_chain.generate(prompt)
        return response

    def update_model(self, new_model_name):
        self.model_name = new_model_name
        self.lang_chain = LangChain(new_model_name)
```