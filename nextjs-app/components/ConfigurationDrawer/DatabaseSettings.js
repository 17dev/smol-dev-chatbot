import React, { useState } from 'react';
import { Dialog, DropdownMenu, DropdownItem } from '@radix-ui/react';

const DatabaseSettings = () => {
  const [open, setOpen] = useState(false);
  const [selectedDatabase, setSelectedDatabase] = useState('');
  const [tableName, setTableName] = useState('');

  const databases = ['MySQL', 'PostgreSQL'];

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDatabaseSelect = (database) => {
    setSelectedDatabase(database);
  };

  const handleTableNameChange = (event) => {
    setTableName(event.target.value);
  };

  return (
    <div id="databaseSettings">
      <button onClick={handleOpen}>Database Settings</button>

      <Dialog open={open} onClose={handleClose}>
        <h2>Database Settings</h2>

        <label>Select Database:</label>
        <DropdownMenu>
          {databases.map((database, index) => (
            <DropdownItem key={index} onSelect={() => handleDatabaseSelect(database)}>
              {database}
            </DropdownItem>
          ))}
        </DropdownMenu>

        <label>Table Name:</label>
        <input type="text" value={tableName} onChange={handleTableNameChange} />

        <button onClick={handleClose}>Save</button>
      </Dialog>
    </div>
  );
};

export default DatabaseSettings;