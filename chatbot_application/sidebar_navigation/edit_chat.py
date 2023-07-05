```python
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
import os

# Init app
app = Flask(__name__)
basedir = os.path.abspath(os.path.dirname(__file__))
# Database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'db.sqlite')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# Init db
db = SQLAlchemy(app)
# Init ma
ma = Marshmallow(app)

# Chat Thread Class/Model
class ChatThread(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True)

    def __init__(self, name):
        self.name = name

# Chat Thread Schema
class ChatThreadSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name')

# Init schema
chat_thread_schema = ChatThreadSchema()
chat_threads_schema = ChatThreadSchema(many=True)

# Edit a Chat Thread
@app.route('/chat_thread/<id>', methods=['PUT'])
def edit_chat(id):
    chat_thread = ChatThread.query.get(id)
    name = request.json['name']

    chat_thread.name = name

    db.session.commit()

    return chat_thread_schema.jsonify(chat_thread)

# Run Server
if __name__ == '__main__':
    app.run(debug=True)
```