import { BriefcaseBusiness, FolderKanban, HomeIcon, MessageSquareQuote, Newspaper, Settings, UserRoundSearch, UsersRound } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const SideBar = () => {
  return (
    <div className='flex flex-col justify-between min-h-screen p-5 text-xl bg-mauve-900 w-75 text-amber-50'>
      <div className='flex flex-col gap-5'>
        <h1 className='text-4xl'>Be<span className='text-blue-600'>Next</span>Digital</h1>
        <Link href="/admin/dashboard" className='flex gap-5'><HomeIcon /> Dashboard</Link>
        <Link href="/admin/leads" className='flex gap-5'><UserRoundSearch /> Leads</Link>
        <Link href="/admin/services" className='flex gap-5'><BriefcaseBusiness /> Services</Link>
        <Link href="/admin/testimonials" className='flex gap-5'><MessageSquareQuote /> Testimonials</Link>
        <Link href="/admin/blogs" className='flex gap-5'><Newspaper /> Blogs</Link>
        <Link href="/admin/works" className='flex gap-5'><FolderKanban /> Works</Link>
        <Link href="/admin/team" className='flex gap-5'><UsersRound /> Team</Link>
      </div>
      <div>
        <Link href="/admin/settings" className='flex gap-5'><Settings /> Settings</Link>
      </div>
    </div>
  )
}

export default SideBar