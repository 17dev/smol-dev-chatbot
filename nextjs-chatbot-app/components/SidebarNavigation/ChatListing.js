import React, { useState, useEffect } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { ChatThread } from '../../lib/shadcnUI';

const ChatListing = () => {
  const [selected, setSelected] = useState();
  const [chatThreads, setChatThreads] = useState([]);

  useEffect(() => {
    // Fetch chat threads from the server or local storage
    // This is a placeholder and should be replaced with actual data fetching
    setChatThreads([
      { id: 1, name: 'Chat 1' },
      { id: 2, name: 'Chat 2' },
      // ...
    ]);
  }, []);

  return (
    <div className="w-60">
      <Listbox value={selected} onChange={setSelected}>
        {({ open }) => (
          <>
            <Listbox.Label className="block text-sm font-medium text-gray-700">
              Select Chat Thread
            </Listbox.Label>
            <div className="mt-1 relative">
              <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <span className="block truncate">{selected?.name || 'Select a chat thread'}</span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
              </Listbox.Button>
              <Transition
                show={open}
                as={React.Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options
                  static
                  className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                >
                  {chatThreads.map((chatThread) => (
                    <Listbox.Option
                      key={chatThread.id}
                      className={({ active }) =>
                        `${active ? 'text-white bg-indigo-600' : 'text-gray-900'}
                          cursor-default select-none relative py-2 pl-3 pr-9`
                      }
                      value={chatThread}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`${
                              selected ? 'font-semibold' : 'font-normal'
                            } block truncate`}
                          >
                            {chatThread.name}
                          </span>
                          {selected ? (
                            <span
                              className={`${
                                active ? 'text-white' : 'text-indigo-600'
                              } absolute inset-y-0 right-0 flex items-center pr-4`}
                            >
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
};

export default ChatListing;