```python
from flask import Flask, request, jsonify
from sidebar_navigation.chat_listing import ChatListing
from sidebar_navigation.new_chat import NewChat
from sidebar_navigation.edit_chat import EditChat
from sidebar_navigation.delete_chat import DeleteChat
from chat_configuration.database_connection import DatabaseConnection
from configuration_drawer.database_settings import DatabaseSettings
from configuration_drawer.connection_management import ConnectionManagement
from side_drawer.file_upload import FileUpload
from responsiveness import Responsiveness
from backend_api.chat_threads import ChatThreads
from backend_api.database_configurations import DatabaseConfigurations
from backend_api.file_uploads import FileUploads

app = Flask(__name__)

@app.route('/')
def home():
    return "Welcome to the Chatbot Application!"

@app.route('/chat_listing', methods=['GET'])
def chat_listing():
    return ChatListing().get_chat_listing()

@app.route('/new_chat', methods=['POST'])
def new_chat():
    return NewChat().create_chat(request.json)

@app.route('/edit_chat', methods=['PUT'])
def edit_chat():
    return EditChat().edit_chat(request.json)

@app.route('/delete_chat', methods=['DELETE'])
def delete_chat():
    return DeleteChat().delete_chat(request.json)

@app.route('/database_connection', methods=['POST'])
def database_connection():
    return DatabaseConnection().connect_database(request.json)

@app.route('/database_settings', methods=['GET', 'PUT'])
def database_settings():
    if request.method == 'GET':
        return DatabaseSettings().get_database_settings()
    elif request.method == 'PUT':
        return DatabaseSettings().update_database_settings(request.json)

@app.route('/connection_management', methods=['GET', 'PUT', 'DELETE'])
def connection_management():
    if request.method == 'GET':
        return ConnectionManagement().get_connections()
    elif request.method == 'PUT':
        return ConnectionManagement().edit_connection(request.json)
    elif request.method == 'DELETE':
        return ConnectionManagement().delete_connection(request.json)

@app.route('/file_upload', methods=['POST'])
def file_upload():
    return FileUpload().upload_file(request.files)

@app.route('/chat_threads', methods=['GET'])
def chat_threads():
    return ChatThreads().get_chat_threads()

@app.route('/database_configurations', methods=['GET'])
def database_configurations():
    return DatabaseConfigurations().get_database_configurations()

@app.route('/file_uploads', methods=['GET'])
def file_uploads():
    return FileUploads().get_file_uploads()

if __name__ == '__main__':
    app.run(debug=True)
```