import Link from 'next/link'
import React from 'react'

const SideBar = () => {
  return (
    <div>
      <h1>BeNextDigital</h1>
      <div>
        <Link href="/admin/dashboard"> Dashboard</Link>

      </div>
    </div>
  )
}

export default SideBar