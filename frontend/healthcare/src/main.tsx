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

import PatientStep1 from './routes/PatientStep1.tsx'
import PatientRecords from './routes/PatientRecords.tsx'
import MenuConsults from './routes/MenuConsults.tsx'
import OnlineConsult from './routes/OnlineConsult.tsx'
import PatientStep2 from './routes/PatientStep2.tsx'
import ProfileDocuments from './routes/ProfileDocuments.tsx'
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
    path: '/profiledocuments',
    element: <ProfileDocuments/>
  },
  {
    path: '/PatientStep1',
    element: <PatientStep1/>
  },
  {
    path: '/PatientStep2',
    element: <PatientStep2/>
  },
  {
    path: '/patientrecords',
    element: <PatientRecords/>
  },
  {
    path: '/MenuConsults',
    element: <MenuConsults/>
  },
  {
    path: '/OnlineConsult',
    element: <OnlineConsult/>
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
