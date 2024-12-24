import React from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from '@/components/ui/sidebar';

function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <h2 className="text-lg font-bold">My Sidebar</h2>
      </SidebarHeader>
      <SidebarContent className="p-4 space-y-4">
        <SidebarGroup>
          <a href="/" className="block py-2 text-sm text-gray-700 hover:text-gray-900">
            Home
          </a>
          <a href="/students" className="block py-2 text-sm text-gray-700 hover:text-gray-900">
            Students
          </a>
        </SidebarGroup>
        <SidebarGroup>
          <a href="/settings" className="block py-2 text-sm text-gray-700 hover:text-gray-900">
            Settings
          </a>
          <a href="/about" className="block py-2 text-sm text-gray-700 hover:text-gray-900">
            About
          </a>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4 text-sm text-gray-500">
        &copy; 2024 My Project
      </SidebarFooter>
    </Sidebar>
  );
}

export default AppSidebar;