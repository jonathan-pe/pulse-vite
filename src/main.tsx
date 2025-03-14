import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import '@fontsource/poppins/index.css'
import { ClerkProvider } from '@clerk/clerk-react'

import './index.css'
import LandingPage from './LandingPage.tsx'
import AppLayout from './AppLayout.tsx'
import NotFoundPage from './NotFoundPage.tsx'
import LoginPage from './modules/login/LoginPage.tsx'
import SignUpPage from './modules/login/SignUpPage.tsx'

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AppLayout />}>
            <Route index element={<LandingPage />} />
            <Route path='login' index element={<LoginPage />} />
            <Route path='sign-up' index element={<SignUpPage />} />

            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ClerkProvider>
  </StrictMode>
)
