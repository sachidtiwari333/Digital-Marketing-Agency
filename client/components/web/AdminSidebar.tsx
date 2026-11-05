
'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import {
  LayoutDashboard,
  BriefcaseBusiness,
  Users,
  MessageSquare,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronRight,
  PanelsTopLeft,
} from 'lucide-react'

const navItems = [
  {
    name: 'Dashboard',
    href: '/admin',
    icon: LayoutDashboard,
  },
  {
    name: 'Works',
    href: '/admin/works',
    icon: BriefcaseBusiness,
  },
  {
    name: 'Services',
    href: '/admin/services',
    icon: Users,
  },
  {
    name: 'Testimonials',
    href: '/admin/testimonials',
    icon: MessageSquare,
  },
  {
    name: 'Blog',
    href: '/admin/blogs',
    icon: Settings,
  },
  {
    name: 'Team',
    href: '/admin/team',
    icon: Settings,
  },
  {
    name: 'Settings',
    href: '/admin/settings',
    icon: Settings,
  }
]

const AdminSidebar = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile Header */}
      <div className="fixed top-0 z-40 flex w-full items-center justify-between bg-emerald-950 px-5 py-4 lg:hidden">
        <Link href="/admin" className="flex items-center gap-2">
          <PanelsTopLeft size={27} className="text-emerald-400" />
          <span className="text-xl font-bold text-white">
            BeNext<span className="text-emerald-400">Digital</span>
          </span>
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-white hover:bg-white/10"
          aria-label="Toggle sidebar"
        >
          {isOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-72 flex-col bg-emerald-950 text-white transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >

        {/* Logo */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-7">
          <Link href="/admin" className="flex items-center gap-3">
            <div className="rounded-xl bg-emerald-500/20 p-2">
              <PanelsTopLeft size={30} className="text-emerald-400" />
            </div>

            <div>
              <h1 className="text-xl font-bold tracking-tight">
                BeNext<span className="text-emerald-400">Digital</span>
              </h1>
              <p className="text-xs tracking-widest text-emerald-300/60">
                ADMIN PANEL
              </p>
            </div>
          </Link>

          <button
            onClick={() => setIsOpen(false)}
            className="rounded-lg p-2 text-white/70 hover:bg-white/10 lg:hidden"
            aria-label="Close sidebar"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 px-4 py-8">
          <p className="mb-5 px-3 text-xs font-semibold uppercase tracking-widest text-emerald-400/60">
            Main Menu
          </p>

          <nav className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon

              const isActive =
                item.href === '/admin'
                  ? pathname === '/admin'
                  : pathname === item.href ||
                    pathname.startsWith(`${item.href}/`)

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`group flex items-center justify-between rounded-xl px-4 py-3.5 transition-all duration-200 ${
                    isActive
                      ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-950/30'
                      : 'text-emerald-100/70 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      size={21}
                      strokeWidth={isActive ? 2.3 : 1.8}
                    />

                    <span className="text-sm font-medium">
                      {item.name}
                    </span>
                  </div>

                  {isActive && (
                    <ChevronRight size={18} />
                  )}
                </Link>
              )
            })}
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 p-5">

          <div className="mb-5 rounded-2xl bg-emerald-900/70 p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold">
                A
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  Administrator
                </p>
                <p className="text-xs text-emerald-300/60">
                  Super Admin
                </p>
              </div>
            </div>
          </div>

          <Link
            href="/"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-red-300 transition hover:bg-red-500/10 hover:text-red-200"
          >
            <LogOut size={20} />
            Back to Website
          </Link>

          <p className="mt-5 text-center text-xs text-emerald-400/40">
            © 2026 BeNextDigital
          </p>
        </div>
      </aside>
    </>
  )
}

export default AdminSidebar
