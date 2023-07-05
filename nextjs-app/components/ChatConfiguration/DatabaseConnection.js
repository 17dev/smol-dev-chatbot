import React, { useState } from 'react';
import { Dropdown } from 'shadcn/ui';

const DatabaseConnection = ({ chatId, databases, onDatabaseConnect }) => {
  const [selectedDatabases, setSelectedDatabases] = useState([]);

  const handleDatabaseSelect = (selected) => {
    setSelectedDatabases(selected);
  };

  const handleConnect = () => {
    onDatabaseConnect(chatId, selectedDatabases);
  };

  return (
    <div id="databaseConnection">
      <h2>Database Connection</h2>
      <Dropdown
        options={databases}
        selected={selectedDatabases}
        onChange={handleDatabaseSelect}
        multiselect
      />
      <button onClick={handleConnect}>Connect</button>
    </div>
  );
};

export default DatabaseConnection;