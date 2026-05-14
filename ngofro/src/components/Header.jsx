import React from 'react'

function Header() {
  return (
    <header className="h-16 bg-white shadow flex items-center justify-between px-6">
      <h1 className="text-lg font-semibold">Dashboard</h1>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Logout
      </button>
    </header>
  )
}

export default Header