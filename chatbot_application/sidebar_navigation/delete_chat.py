```python
from flask import Blueprint, request, jsonify
from chatbot_application.backend_api.chat_threads import chatThreads

delete_chat = Blueprint('delete_chat', __name__)

@delete_chat.route('/delete_chat', methods=['DELETE'])
def delete_chat():
    chat_id = request.args.get('chat_id')
    chat = [chat for chat in chatThreads if chat['id'] == chat_id]
    if len(chat) == 0:
        return jsonify({'error': 'Chat not found'}), 404
    chatThreads.remove(chat[0])
    return jsonify({'success': 'Chat deleted'}), 200
```