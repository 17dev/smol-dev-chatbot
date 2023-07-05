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

# Database Connection Class/Model
class DatabaseConnection(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  chat_id = db.Column(db.Integer)
  database_name = db.Column(db.String(100))

  def __init__(self, chat_id, database_name):
    self.chat_id = chat_id
    self.database_name = database_name

# Database Connection Schema
class DatabaseConnectionSchema(ma.Schema):
  class Meta:
    fields = ('id', 'chat_id', 'database_name')

# Init schema
database_connection_schema = DatabaseConnectionSchema()
database_connections_schema = DatabaseConnectionSchema(many=True)

# Create a Database Connection
@app.route('/database_connection', methods=['POST'])
def add_database_connection():
  chat_id = request.json['chat_id']
  database_name = request.json['database_name']

  new_database_connection = DatabaseConnection(chat_id, database_name)

  db.session.add(new_database_connection)
  db.session.commit()

  return database_connection_schema.jsonify(new_database_connection)

# Get All Database Connections
@app.route('/database_connection', methods=['GET'])
def get_database_connections():
  all_database_connections = DatabaseConnection.query.all()
  result = database_connections_schema.dump(all_database_connections)
  return jsonify(result)

# Run Server
if __name__ == '__main__':
  app.run(debug=True)
```