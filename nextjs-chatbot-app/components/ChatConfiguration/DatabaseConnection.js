import React, { useState } from 'react';

const DatabaseConnection = ({ chatThread, updateChatThread }) => {
  const [selectedDatabases, setSelectedDatabases] = useState(chatThread.databases || []);

  const handleDatabaseSelection = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions, option => option.value);
    setSelectedDatabases(selectedOptions);
  };

  const handleDatabaseConnection = () => {
    updateChatThread({
      ...chatThread,
      databases: selectedDatabases,
    });
  };

  return (
    <div id="databaseConnection">
      <h2>Database Connection</h2>
      <select multiple={true} value={selectedDatabases} onChange={handleDatabaseSelection}>
        <option value="MySQL">MySQL</option>
        <option value="PostgreSQL">PostgreSQL</option>
        {/* Add more options as needed */}
      </select>
      <button onClick={handleDatabaseConnection}>Connect</button>
    </div>
  );
};

export default DatabaseConnection;