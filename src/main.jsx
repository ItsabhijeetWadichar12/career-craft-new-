import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignInPage from './auth/sign-in/index.jsx'
import Home from './Home/index.jsx'
import Dashboard from './Dashboard/index.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
import EditResume from './Dashboard/resume/[resumeId]/edit/index.jsx'
import ViewResume from './my-resumes/[resumeId]/view/index.jsx'
import Templates from './Dashboard/Templates/index.jsx'
import EditResume1 from './Dashboard/Templates/resume/[resumeId]/edit/index.jsx'
import EditResume2 from './Dashboard/Templates1/resume/[resumeId]/edit/index.jsx'
import EditResume3 from './Dashboard/Templates2/resume/[resumeId]/edit/index.jsx'
import EditResume4 from './Dashboard/Templates3/resume/[resumeId]/edit/index.jsx'







const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

const router = createBrowserRouter([
  {
    
    element:<App/>,
    children:[
      
      {
        path:'/dashboard',
        element:<Dashboard/>
      },
      {
        path:'/templates',
        element:<Templates/>
      },

      
      {
        path:'/dashboard/resume/:resumeId/edit',
        element:<EditResume/>
      },
      {
        path:'/dashboard/Templates/resume/:resumeId/edit',
        element:<EditResume1/>
      },
      {
        path:'/dashboard/Templates1/resume/:resumeId/edit',
        element:<EditResume2/>
      },
      {
        path:'/dashboard/Templates2/resume/:resumeId/edit',
        element:<EditResume3/>
      },
      {
        path:'/dashboard/Templates3/resume/:resumeId/edit',
        element:<EditResume4/>
      },
     
    ]
  },
  {
    path:'/',
    element:<Home/>
    
  },
  {
    path: '/auth/sign-in',
    element:<SignInPage/>
  },
  {
    path:'/my-resumes/:resumeId/view',
    element:<ViewResume/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}> 
      
    <RouterProvider router={router} />

    </ClerkProvider>
  </React.StrictMode>,
)
