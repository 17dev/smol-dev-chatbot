```python
# Importing required libraries
from vercel_ai_sdk import VercelAISDK

# Initializing Vercel AI SDK
vercel_ai = VercelAISDK()

# Function to initialize chat UI
def initialize_chat_ui(chatThreads):
    try:
        # Initialize chat UI with chat threads
        vercel_ai.initialize_chat_ui(chatThreads)
    except Exception as e:
        print(f"Error while initializing chat UI: {str(e)}")

# Function to update chat UI
def update_chat_ui(chatThreads):
    try:
        # Update chat UI with new chat threads
        vercel_ai.update_chat_ui(chatThreads)
    except Exception as e:
        print(f"Error while updating chat UI: {str(e)}")

# Function to stream chat UI
def stream_chat_ui(chatThreads):
    try:
        # Stream chat UI with chat threads
        vercel_ai.stream_chat_ui(chatThreads)
    except Exception as e:
        print(f"Error while streaming chat UI: {str(e)}")
```