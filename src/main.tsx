import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './mycomponents/dashboardDetails/Dashboard.tsx'
import AuthorsTable from './mycomponents/table/AuthorsTable.tsx'

const router = createBrowserRouter([
  { path : '/',
    element : <App/>,
    children : [
      {
        path : 'dashboard',
        element : <Dashboard/>,
        index : true
      },
      {
        
        element : <Dashboard/>,
        index : true
      },
      {
        path : 'table',
        element : <AuthorsTable/>,
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
