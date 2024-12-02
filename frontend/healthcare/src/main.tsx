import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom'
import './index.css'
import Login from './routes/Login.tsx'
import Register from './routes/Register.tsx'
import Home from './routes/Home.tsx'
import Dashboard from './routes/Dashboard.tsx'
import Profile from './routes/Profile.tsx'
import ProfileHistory from './routes/ProfileHistory.tsx'
import Available from './routes/Available.tsx'

import PatientRecords from './routes/PatientRecords.tsx'
import MenuConsults from './routes/MenuConsults.tsx'
import OnlineConsult from './routes/OnlineConsult.tsx'
import ProfileDocuments from './routes/ProfileDocuments.tsx'
import AuthProvider from './contexts/AuthContext.tsx'
import ProtectedRoute from './routes/ProtectedRoute.tsx'
import Header from './layouts/Header.tsx'

import { EditarUsuario } from './routes/EditarUsuario.tsx'
import Schedule from './routes/Schedule.tsx'
import Auth from './routes/Auth.tsx'
import Doctors from './routes/Doctors.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Auth />,
    children: [
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
        path: '/',
        element: <ProtectedRoute/>,
        children: [
          {
            path: '/',
            element: <Header/>,
            children: [
              {
                path: "/dashboard",
                element: <Dashboard/>
              },
              {
                path: '/doctors',
                element: <Doctors/>
              },
              {
                path: '/profile',
                element: <Outlet/>,
                children: [
                  {
                    path: '',
                    element: <Profile/>
                  },
                  {
                    path: 'history',
                    element: <ProfileHistory/>
                  },
                  {
                    path: 'documents',
                    element: <ProfileDocuments/>
                  },
                  {
                    path: 'configure',
                    element: <EditarUsuario/>
                  }
                ]
              },
              {
                path: '/available',
                element: <Available/>
              },
              {
                path: '/schedule/:id',
                element: <Schedule/>
              },
              {
                path: '/patientrecords',
                element: <PatientRecords/>
              },
              {
                path: '/menuconsults',
                element: <MenuConsults/>
              },
              {
                path: '/onlineconsult',
                element: <OnlineConsult/>
              },
            ]
          }
        ]
      },
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  </StrictMode>,
)
