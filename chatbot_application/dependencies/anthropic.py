```python
from anthroai import AnthroAi

class Anthropic:
    def __init__(self, api_key):
        self.api_key = api_key
        self.model = AnthroAi(api_key=self.api_key)

    def generate_response(self, prompt):
        response = self.model.generate(prompt=prompt)
        return response

    def set_api_key(self, api_key):
        self.api_key = api_key
        self.model = AnthroAi(api_key=self.api_key)
```