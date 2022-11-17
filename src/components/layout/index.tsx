import { useState } from 'react';

import Sidebar from './Sidebar';
import { DashboardNav } from '../navbar';

export default function Example({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="h-screen flex flex-1 flex-col md:pl-64 h-full">
        <DashboardNav setSidebarOpen={setSidebarOpen} />
        {children}
      </div>
    </>
  );
}
