import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './globals.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './routes/Error/index.tsx'
import Home from './routes/Home/index.tsx'
import FAQ from './routes/FAQ/index.tsx'

const router = createBrowserRouter([
  {path: "/", element: <App />, errorElement: <Error />, children: [
    {path: "/", element: <Home />}, 
    {path: "/faq", element: <FAQ />}, 
  ]},
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
