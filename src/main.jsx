import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootApp from './root'

const router = createBrowserRouter([
  { path: '/', element: <RootApp /> },
], { basename: import.meta.env.BASE_URL || '/' })

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)