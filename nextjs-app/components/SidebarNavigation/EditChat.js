import React, { useState } from 'react';
import { Dialog, Button } from '@radix-ui/react';

const EditChat = ({ chat, onEdit }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [newName, setNewName] = useState(chat.name);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleEdit = () => {
    onEdit(chat.id, newName);
    handleClose();
  };

  return (
    <div id="editChat">
      <Button onClick={handleOpen}>Edit</Button>

      <Dialog open={isOpen} onClose={handleClose}>
        <Dialog.Title>Edit Chat</Dialog.Title>
        <Dialog.Content>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </Dialog.Content>
        <Dialog.Action onClick={handleEdit}>Save</Dialog.Action>
        <Dialog.Action onClick={handleClose}>Cancel</Dialog.Action>
      </Dialog>
    </div>
  );
};

export default EditChat;