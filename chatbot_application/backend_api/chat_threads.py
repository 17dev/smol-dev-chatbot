```python
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:@localhost/chatbot'
db = SQLAlchemy(app)
ma = Marshmallow(app)

class ChatThread(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True)

    def __init__(self, name):
        self.name = name

class ChatThreadSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name')

chat_thread_schema = ChatThreadSchema()
chat_threads_schema = ChatThreadSchema(many=True)

@app.route('/chat', methods=['POST'])
def add_chat():
    name = request.json['name']
    new_chat = ChatThread(name)
    db.session.add(new_chat)
    db.session.commit()
    return chat_thread_schema.jsonify(new_chat)

@app.route('/chat', methods=['GET'])
def get_chats():
    all_chats = ChatThread.query.all()
    result = chat_threads_schema.dump(all_chats)
    return jsonify(result)

@app.route('/chat/<id>', methods=['GET'])
def get_chat(id):
    chat = ChatThread.query.get(id)
    return chat_thread_schema.jsonify(chat)

@app.route('/chat/<id>', methods=['PUT'])
def update_chat(id):
    chat = ChatThread.query.get(id)
    name = request.json['name']
    chat.name = name
    db.session.commit()
    return chat_thread_schema.jsonify(chat)

@app.route('/chat/<id>', methods=['DELETE'])
def delete_chat(id):
    chat = ChatThread.query.get(id)
    db.session.delete(chat)
    db.session.commit()
    return chat_thread_schema.jsonify(chat)

if __name__ == '__main__':
    app.run(debug=True)
```