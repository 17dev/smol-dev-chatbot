```python
# Importing necessary libraries
from edge_runtime import EdgeRuntime

# Initializing Edge Runtime
edge_runtime = EdgeRuntime()

# Function to start the edge runtime
def start_edge_runtime():
    edge_runtime.start()

# Function to stop the edge runtime
def stop_edge_runtime():
    edge_runtime.stop()

# Function to check if edge runtime is running
def is_edge_runtime_running():
    return edge_runtime.is_running()
```