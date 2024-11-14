import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import Login from './routes/Login.tsx'
import Register from './routes/Register.tsx'
import Home from './routes/Home.tsx'
import Dashboard from './routes/Dashboard.tsx'
import Profile from './routes/Profile.tsx'
import ProfileHistory from './routes/ProfileHistory.tsx'
import Available from './routes/Available.tsx'

import PatientBookingStep1 from './routes/PatientBookingStep1.tsx'
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
  },
  {
    path: '/profile',
    element: <Profile/>
  },
  {
    path: '/profilehistory',
    element: <ProfileHistory/>
  }, {
    path: '/available',
    element: <Available/>
  },
  {
    path: '/patientBookingstep1',
    element: <PatientBookingStep1/>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
