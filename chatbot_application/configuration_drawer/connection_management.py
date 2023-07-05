```python
from backend_api.database_configurations import DatabaseConnectionSchema, databaseConnections
from backend_api.chat_threads import ChatThreadSchema, chatThreads

def manageConnection(connection_id, action, new_data=None):
    """
    Function to manage a connection. It can edit or delete an existing database connection.
    """
    connection = next((connection for connection in databaseConnections if connection['id'] == connection_id), None)
    if not connection:
        return {"error": "Connection not found"}

    if action == 'edit':
        if not new_data:
            return {"error": "New data for connection is required for editing"}
        connection.update(new_data)
        return {"success": "Connection updated successfully"}

    elif action == 'delete':
        databaseConnections.remove(connection)
        # Remove this connection from all chat threads
        for chat in chatThreads:
            chat['databaseConnections'] = [db for db in chat['databaseConnections'] if db != connection_id]
        return {"success": "Connection deleted successfully"}

    else:
        return {"error": "Invalid action"}
```