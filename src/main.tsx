import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './globals.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './routes/Error/index.tsx'
import Main from './components/Main/index.tsx'

const router = createBrowserRouter([
  {path: "/", element: <App />, errorElement: <Error />, children: [
    {path: "/", element: <Main />}, 
  ]},
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
