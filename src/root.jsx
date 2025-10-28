import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function RootApp() {
  return (
    <div style={{ fontFamily: 'Inter, system-ui, Arial', padding: 0 }}>
        <nav style={{ display: 'flex', gap: 0 }}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
    </div>
  )
}