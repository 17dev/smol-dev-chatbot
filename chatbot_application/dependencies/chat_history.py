```python
import vercel_kv

class ChatHistory:
    def __init__(self):
        self.kv = vercel_kv.Namespace('chat_history')

    def get_chat_history(self, chat_id):
        return self.kv.get(chat_id)

    def save_chat_history(self, chat_id, chat_history):
        self.kv.put(chat_id, chat_history)

    def delete_chat_history(self, chat_id):
        self.kv.delete(chat_id)
```