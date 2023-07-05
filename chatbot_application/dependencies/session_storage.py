```python
import os
from vercel_kv import VercelKV

class SessionStorage:
    def __init__(self):
        self.vercel_kv = VercelKV(os.getenv("VERCEL_KV_NAMESPACE"), os.getenv("VERCEL_KV_TOKEN"))

    def get_session(self, session_id):
        return self.vercel_kv.get(session_id)

    def set_session(self, session_id, session_data):
        self.vercel_kv.set(session_id, session_data)

    def delete_session(self, session_id):
        self.vercel_kv.delete(session_id)
```