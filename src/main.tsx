import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import '@fontsource/poppins/index.css'
import { ClerkProvider } from '@clerk/clerk-react'
import { dark } from '@clerk/themes'

import './index.css'
import LandingPage from './LandingPage.tsx'
import AppLayout from './AppLayout.tsx'
import NotFoundPage from './NotFoundPage.tsx'
import SignInPage from './modules/SignIn/SignInPage.tsx'
import SignUpPage from './modules/SignIn/SignUpPage.tsx'
import SportsbookPage from './modules/Sportsbook/SportsbookPage.tsx'
import { SidebarProvider } from '@/components/ui/sidebar.tsx'
import { ThemeProvider } from '@/components/theme-provider.tsx'

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider
      appearance={{
        baseTheme: dark, // could potentially cause problems - might need to uninstall @clerk/themes in case of packaging issues (doesn't officially support React 19 yet)
      }}
      publishableKey={PUBLISHABLE_KEY}
    >
      <ThemeProvider defaultTheme='dark' storageKey='pulse-ui-theme'>
        <SidebarProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<AppLayout />}>
                <Route index element={<LandingPage />} />

                <Route path='sign-in' index element={<SignInPage />} />
                <Route path='sign-up' index element={<SignUpPage />} />

                <Route path='/sportsbook' element={<SportsbookPage />} />

                <Route path='*' element={<NotFoundPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </SidebarProvider>
      </ThemeProvider>
    </ClerkProvider>
  </StrictMode>
)
