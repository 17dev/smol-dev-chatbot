import { useState } from 'react';
import { Dialog, DialogTrigger, DialogContent, DialogClose } from '@radix-ui/react-dialog';
import { Button, Input } from 'shadcn';
import { PencilIcon } from 'phosphor-react';

const EditChat = ({ chatThread, onEdit }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [newName, setNewName] = useState(chatThread.name);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleEdit = () => {
    onEdit({ ...chatThread, name: newName });
    handleClose();
  };

  return (
    <div>
      <Button onClick={handleOpen}>
        <PencilIcon />
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button>Edit Chat</Button>
        </DialogTrigger>
        <DialogContent>
          <h2>Edit Chat</h2>
          <Input
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Enter new chat name"
          />
          <Button onClick={handleEdit}>Save</Button>
          <DialogClose asChild>
            <Button>Close</Button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditChat;