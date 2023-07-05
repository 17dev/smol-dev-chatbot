```javascript
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { ChatListing } from '../components/SidebarNavigation/ChatListing';
import { NewChat } from '../components/SidebarNavigation/NewChat';
import { EditChat } from '../components/SidebarNavigation/EditChat';
import { DeleteChat } from '../components/SidebarNavigation/DeleteChat';
import { DatabaseConnection } from '../components/ChatConfiguration/DatabaseConnection';
import { DatabaseSettings } from '../components/ConfigurationDrawer/DatabaseSettings';
import { ConnectionManagement } from '../components/ConfigurationDrawer/ConnectionManagement';
import { FileUpload } from '../components/SideDrawer/FileUpload';
import { vercelAI } from '../lib/vercelAI';
import { openAI } from '../lib/openAI';
import { langChain } from '../lib/langChain';

export default function Home() {
  const [chatThreads, setChatThreads] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);

  useEffect(() => {
    // Fetch chat threads when component mounts
    fetchChatThreads();
  }, []);

  const fetchChatThreads = async () => {
    // Fetch chat threads from the server
    const response = await fetch('/api/chatThreads');
    const data = await response.json();
    setChatThreads(data);
  };

  const handleChatSelect = (chat) => {
    setSelectedChat(chat);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Head>
        <title>Nextjs Chatbot App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-1 overflow-hidden">
        <aside className="w-64 bg-white border-r">
          <ChatListing chatThreads={chatThreads} onChatSelect={handleChatSelect} />
          <NewChat fetchChatThreads={fetchChatThreads} />
          {selectedChat && <EditChat selectedChat={selectedChat} fetchChatThreads={fetchChatThreads} />}
          {selectedChat && <DeleteChat selectedChat={selectedChat} fetchChatThreads={fetchChatThreads} />}
        </aside>

        <section className="flex flex-1 overflow-auto">
          {selectedChat && <DatabaseConnection selectedChat={selectedChat} />}
          <DatabaseSettings />
          <ConnectionManagement />
          <FileUpload />
        </section>
      </main>
    </div>
  );
}
```