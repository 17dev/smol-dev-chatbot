```javascript
import { useState } from 'react';
import { Dialog, Select, Button } from '@radix-ui/react';
import { updateDatabaseSettings } from '../../lib/openAI';

const DatabaseSettings = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDatabase, setSelectedDatabase] = useState('');
  const [tableName, setTableName] = useState('');

  const databases = ['MySQL', 'PostgreSQL'];

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleDatabaseChange = (event) => setSelectedDatabase(event.target.value);
  const handleTableNameChange = (event) => setTableName(event.target.value);

  const handleUpdateSettings = () => {
    updateDatabaseSettings(selectedDatabase, tableName);
    handleClose();
  };

  return (
    <div id="databaseSettings">
      <Button onClick={handleOpen}>Database Settings</Button>
      <Dialog open={isOpen} onClose={handleClose}>
        <Dialog.Title>Database Settings</Dialog.Title>
        <Dialog.Content>
          <Select value={selectedDatabase} onChange={handleDatabaseChange}>
            {databases.map((database) => (
              <Select.Option key={database} value={database}>
                {database}
              </Select.Option>
            ))}
          </Select>
          <input
            type="text"
            value={tableName}
            onChange={handleTableNameChange}
            placeholder="Table Name"
          />
        </Dialog.Content>
        <Dialog.Action onClick={handleUpdateSettings}>Update Settings</Dialog.Action>
        <Dialog.Close>Close</Dialog.Close>
      </Dialog>
    </div>
  );
};

export default DatabaseSettings;
```