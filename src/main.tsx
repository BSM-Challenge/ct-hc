import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './globals.css'

import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

import Error from './routes/CT-HC/Error/index.tsx'
import Home from './routes/CT-HC/Home/index.tsx'
import FAQ from './routes/CT-HC/FAQ/index.tsx'
import Integrantes from './routes/CT-HC/Integrantes/index.tsx'
import Contato from './routes/CT-HC/Contato/index.tsx'

// HC
import AppHC from './AppHC.tsx'
import HomeHC from './routes/HC/HomeHC/index.tsx'
import MaisRecursos from './routes/HC/MaisRecursos/index.tsx'
import CentroDeTreinamento from './routes/HC/CentroDeTreinamento/index.tsx'
import ErrorHC from './routes/HC/ErrorHC/index.tsx'
import MeusResultados from './routes/HC/MeusResultados/index.tsx'
import MinhasReceitas from './routes/HC/MinhasReceitas/index.tsx'
import MinhasAgendas from './routes/HC/MinhasAgendas/index.tsx'

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
    children: [
      { path: "", element: <HomeHC /> },
      { path: "maisRecursos", element: <MaisRecursos /> },
      { path: "centroDeTreinamento", element: <CentroDeTreinamento /> },
      { path: "resultados", element: <MeusResultados /> },
      { path: "receitas", element: <MinhasReceitas /> },
      { path: "agenda", element: <MinhasAgendas /> },
      { path: "*", element: <Navigate to="/hc/erro" replace /> },
    ],
  },
  {
    path: "/hc/erro",
    element: <ErrorHC />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
