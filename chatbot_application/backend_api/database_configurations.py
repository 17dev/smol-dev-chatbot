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
    name = db.Column(db.String(100), unique=True)
    type = db.Column(db.String(200))
    table_name = db.Column(db.String(200))

    def __init__(self, name, type, table_name):
        self.name = name
        self.type = type
        self.table_name = table_name

# Database Connection Schema
class DatabaseConnectionSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name', 'type', 'table_name')

# Init schema
database_connection_schema = DatabaseConnectionSchema()
database_connections_schema = DatabaseConnectionSchema(many=True)

# Create a Database Connection
@app.route('/database_connection', methods=['POST'])
def add_database_connection():
    name = request.json['name']
    type = request.json['type']
    table_name = request.json['table_name']

    new_database_connection = DatabaseConnection(name, type, table_name)

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