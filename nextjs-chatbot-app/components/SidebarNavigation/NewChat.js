import React, { useState } from 'react';
import { Button, Input } from 'shadcn/ui';
import { CREATE_CHAT } from '../../lib/messageNames';
import { useVercelAI } from '../../lib/vercelAI';

const NewChat = () => {
  const [chatName, setChatName] = useState('');
  const { sendMessage } = useVercelAI();

  const handleCreateChat = () => {
    if (chatName.trim() !== '') {
      sendMessage(CREATE_CHAT, { name: chatName });
      setChatName('');
    }
  };

  return (
    <div id="newChat">
      <Input
        value={chatName}
        onChange={(e) => setChatName(e.target.value)}
        placeholder="Enter chat name"
      />
      <Button onClick={handleCreateChat}>Create Chat</Button>
    </div>
  );
};

export default NewChat;