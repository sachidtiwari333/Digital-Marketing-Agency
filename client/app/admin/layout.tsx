
import React from 'react'
import AdminSidebar from '@/components/web/AdminSidebar'

const AdminLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="min-h-screen w-full bg-slate-50">
      <AdminSidebar />

      <main className="min-h-screen w-full pt-16 lg:w-[calc(100%-288px)] lg:ml-72 lg:pt-0">
        {children}
      </main>
    </div>
  )
}

export default AdminLayout
