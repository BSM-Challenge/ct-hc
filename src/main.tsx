import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './globals.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './routes/CT-HC/Error/index.tsx'
import Home from './routes//CT-HC/Home/index.tsx'
import FAQ from './routes/CT-HC/FAQ/index.tsx'
import Integrantes from './routes//CT-HC/Integrantes/index.tsx'
import Contato from './routes/CT-HC/Contato/index.tsx'
// HC
import AppHC from './AppHC.tsx'
import HomeHC from './routes/HC/HomeHC/index.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/contato", element: <Contato /> },
      { path: "/integrantes", element: <Integrantes /> },
      { path: "/faq", element: <FAQ /> },
    ],
  },
  {
    path: "/hc",
    element: <AppHC />,
    errorElement: <Error />,
    children: [
      { path: "/hc", element: <HomeHC /> },
    ],
  },
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
