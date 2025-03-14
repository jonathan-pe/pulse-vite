import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'

import './index.css'
import '@fontsource/poppins/index.css'
import App from './App.tsx'
import AppLayout from './AppLayout.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<App />} />

          <Route path='about' element={<h1>About</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
