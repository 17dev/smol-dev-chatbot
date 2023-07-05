```python
from flask import Flask, render_template
from backend_api.chat_threads import chatThreads

app = Flask(__name__)

@app.route('/chat_listing')
def chat_listing():
    return render_template('chat_listing.html', chats=chatThreads)

if __name__ == '__main__':
    app.run(debug=True)
```

In the above code, we are creating a Flask application and defining a route for chat listing. The `chat_listing` function fetches the chat threads from the backend API and passes them to the 'chat_listing.html' template for rendering. The 'chat_listing.html' file should be located in the 'templates' directory of the Flask application and should be designed to display the chat threads in a scrollable list.