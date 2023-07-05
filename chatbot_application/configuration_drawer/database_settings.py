```python
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
import os

# Init app
app = Flask(__name__)

# Database
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:@localhost/flaskmysql'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Init db
db = SQLAlchemy(app)

# Init ma
ma = Marshmallow(app)

# Database Connection Class/Model
class DatabaseConnection(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    db_type = db.Column(db.String(100))
    table_name = db.Column(db.String(200))

    def __init__(self, db_type, table_name):
        self.db_type = db_type
        self.table_name = table_name

# Database Connection Schema
class DatabaseConnectionSchema(ma.Schema):
    class Meta:
        fields = ('id', 'db_type', 'table_name')

# Init schema
database_connection_schema = DatabaseConnectionSchema()
database_connections_schema = DatabaseConnectionSchema(many=True)

# Update Database Settings
@app.route('/database_settings', methods=['PUT'])
def update_database_settings():
    id = request.json['id']
    db_type = request.json['db_type']
    table_name = request.json['table_name']

    database_connection = DatabaseConnection.query.get(id)

    database_connection.db_type = db_type
    database_connection.table_name = table_name

    db.session.commit()

    return database_connection_schema.jsonify(database_connection)

# Run Server
if __name__ == '__main__':
    app.run(debug=True)
```