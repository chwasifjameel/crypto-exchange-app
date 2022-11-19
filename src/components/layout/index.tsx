import { useState } from 'react';

import Sidebar from './Sidebar';
import { DashboardNav } from '../navbar';

export default function Example({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="min-h-[100vh] h-full flex flex-1 flex-col md:pl-64">
        <DashboardNav setSidebarOpen={setSidebarOpen} />
        {children}
      </div>
    </>
  );
}
