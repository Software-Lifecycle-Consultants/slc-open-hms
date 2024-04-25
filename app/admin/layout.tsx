// app/admin/layout.tsx
import React from 'react';
import AdminNavbar from '@/components/AdminNavBar';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {/* <AdminNavbar /> */}
      {children}
    </div>
  );
}