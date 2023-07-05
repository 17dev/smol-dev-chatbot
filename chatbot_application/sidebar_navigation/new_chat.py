```python
from flask import Flask, request, jsonify
from chatbot_application.backend_api.chat_threads import chatThreads
from chatbot_application.chat_configuration.database_connection import connectDatabase
from chatbot_application.dependencies.vercel_ai_sdk import VercelAISDK

app = Flask(__name__)

@app.route('/new_chat', methods=['POST'])
def createChat():
    chat_data = request.get_json()

    # Validate chat data against ChatThreadSchema
    # This part is omitted for brevity

    # Create new chat thread
    new_chat = {
        "id": len(chatThreads) + 1,
        "name": chat_data['name'],
        "databaseConnections": [],
        "fileUploads": []
    }

    # Add new chat to chatThreads
    chatThreads.append(new_chat)

    # Connect to database if provided
    if 'database' in chat_data:
        connectDatabase(new_chat['id'], chat_data['database'])

    # Send message to Vercel AI SDK
    VercelAISDK.sendMessage('ChatCreated', new_chat)

    return jsonify(new_chat), 201

if __name__ == '__main__':
    app.run(debug=True)
```