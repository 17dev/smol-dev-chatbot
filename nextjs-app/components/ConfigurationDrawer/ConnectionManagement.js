import React, { useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { mutate } from 'swr';
import { fetcher } from '../../utils/vercel';
import { useSession } from 'next-auth/client';

const ConnectionManagement = () => {
  const [session] = useSession();
  const [open, setOpen] = useState(false);
  const [connections, setConnections] = useState([]);
  const [selectedConnection, setSelectedConnection] = useState(null);

  useEffect(() => {
    fetcher('/api/database')
      .then(res => setConnections(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleDelete = async () => {
    try {
      const res = await fetcher(`/api/database/${selectedConnection}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session.accessToken}`
        }
      });

      mutate('/api/database');
      setSelectedConnection(null);
      setOpen(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div id="connectionManagement">
      <button onClick={() => setOpen(true)}>Manage Connections</button>

      <Transition show={open} as={React.Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={setOpen}
        >
          <Dialog.Overlay className="fixed inset-0" />

          <div className="min-h-screen px-4 text-center">
            <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
              Manage Connections
            </Dialog.Title>

            <div className="mt-2">
              {connections.map(connection => (
                <div key={connection.id}>
                  <p>{connection.name}</p>
                  <button onClick={() => setSelectedConnection(connection.id)}>Delete</button>
                </div>
              ))}
            </div>

            <div className="mt-5 sm:mt-6">
              <button type="button" onClick={handleDelete} className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm">
                Delete
              </button>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default ConnectionManagement;