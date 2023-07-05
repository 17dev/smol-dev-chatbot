```javascript
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import ChatListing from '../components/SidebarNavigation/ChatListing';
import NewChat from '../components/SidebarNavigation/NewChat';
import EditChat from '../components/SidebarNavigation/EditChat';
import DeleteChat from '../components/SidebarNavigation/DeleteChat';
import DatabaseConnection from '../components/ChatConfiguration/DatabaseConnection';
import DatabaseSettings from '../components/ConfigurationDrawer/DatabaseSettings';
import ConnectionManagement from '../components/ConfigurationDrawer/ConnectionManagement';
import FileUpload from '../components/SideDrawer/FileUpload';
import '../styles/index.css';

export default function Home() {
  const [session, loading] = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !session) {
      router.push('/api/auth/signin');
    }
  }, [session, loading]);

  if (loading) return null;

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3">
          <ChatListing />
          <NewChat />
          <EditChat />
          <DeleteChat />
        </div>
        <div className="col-span-6">
          <DatabaseConnection />
        </div>
        <div className="col-span-3">
          <DatabaseSettings />
          <ConnectionManagement />
          <FileUpload />
        </div>
      </div>
    </div>
  );
}
```