import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function RootApp() {
  return (
    <div style={{ fontFamily: 'Inter, system-ui, Arial', padding: 24 }}>
      <header style={{ marginBottom: 24 }}>
        <h1>My React GH Pages Site</h1>
        <nav style={{ display: 'flex', gap: 12 }}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>

      <main>
        <p>Welcome! This is a minimal template ready for GitHub Pages (Vite + React).</p>
        <Outlet />
      </main>

      <footer style={{ marginTop: 40, opacity: 0.75 }}>
        <small>Built with Vite • Deploys to GitHub Pages</small>
      </footer>
    </div>
  )
}