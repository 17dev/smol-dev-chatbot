import React, { useState } from 'react';
import { Dialog, DialogTrigger, DialogContent, DialogClose } from '@radix-ui/react-dialog';
import { Button } from '@radix-ui/react-button';
import { useMutation } from 'react-query';
import { createChat } from '../../utils/openai';

const NewChat = () => {
  const [chatName, setChatName] = useState('');
  const mutation = useMutation(createChat);

  const handleCreateChat = async () => {
    await mutation.mutateAsync({ name: chatName });
    setChatName('');
  };

  return (
    <div id="newChat">
      <Dialog>
        <DialogTrigger as={Button}>New Chat</DialogTrigger>
        <DialogContent>
          <h2>Create a new chat</h2>
          <input
            type="text"
            value={chatName}
            onChange={(e) => setChatName(e.target.value)}
            placeholder="Enter chat name"
          />
          <DialogClose as={Button} onClick={handleCreateChat}>
            Create
          </DialogClose>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default NewChat;