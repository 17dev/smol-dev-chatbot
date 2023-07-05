```python
from flask import Flask, request
from werkzeug.utils import secure_filename
import os

app = Flask(__name__)

fileUploads = []

class FileUploadSchema:
    def __init__(self, filename, filepath):
        self.filename = filename
        self.filepath = filepath

@app.route('/upload', methods=['POST'])
def uploadFile():
    if 'file' not in request.files:
        return 'No file part in the request', 400

    file = request.files['file']
    if file.filename == '':
        return 'No selected file', 400

    if file:
        filename = secure_filename(file.filename)
        filepath = os.path.join('/uploads', filename)
        file.save(filepath)
        fileUpload = FileUploadSchema(filename, filepath)
        fileUploads.append(fileUpload)
        return 'File Uploaded Successfully', 200

@app.route('/uploads', methods=['GET'])
def getUploads():
    return {'uploads': [upload.__dict__ for upload in fileUploads]}, 200

if __name__ == '__main__':
    app.run(debug=True)
```