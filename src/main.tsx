import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import '@fontsource/poppins/index.css'

import './index.css'
import LandingPage from './LandingPage.tsx'
import AppLayout from './AppLayout.tsx'
import NotFoundPage from './NotFoundPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<LandingPage />} />

          <Route path='about' element={<h1>About</h1>} />

          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
