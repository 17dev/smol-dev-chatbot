```python
from phosphor_icons import PhosphorIcon

class IconManager:
    def __init__(self):
        self.icons = {}

    def add_icon(self, name, icon):
        self.icons[name] = icon

    def get_icon(self, name):
        return self.icons.get(name, None)

icon_manager = IconManager()

# Add icons as needed
icon_manager.add_icon("chat", PhosphorIcon("chat"))
icon_manager.add_icon("database", PhosphorIcon("database"))
icon_manager.add_icon("file", PhosphorIcon("file"))
icon_manager.add_icon("settings", PhosphorIcon("settings"))
icon_manager.add_icon("connection", PhosphorIcon("connection"))
icon_manager.add_icon("new", PhosphorIcon("new"))
icon_manager.add_icon("edit", PhosphorIcon("edit"))
icon_manager.add_icon("delete", PhosphorIcon("delete"))
```