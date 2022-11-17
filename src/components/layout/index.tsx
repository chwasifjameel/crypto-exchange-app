import { useState } from 'react';

import Sidebar from './Sidebar';
import { DashboardNav } from '../navbar';

export default function Example({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <DashboardNav sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
        {children}
      </DashboardNav>
    </>
  );
}

// import { DashboardNav } from '../navbar';
// import Sidebar from './Sidebar';
// export default function Layout({ children }) {
//   return (
//     <>
//       <Sidebar />
//       <DashboardNav />
//       {children}
//     </>
//   );
// }
