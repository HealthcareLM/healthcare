import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import Login from './routes/Login.tsx'
import Register from './routes/Register.tsx'
import Home from './routes/Home.tsx'
import Dashboard from './routes/Dashboard.tsx'

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/signup',
    element: <Register/>
  },
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/dashboard',
    element: <Dashboard/>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
