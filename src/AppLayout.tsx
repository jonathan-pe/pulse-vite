import { Outlet } from 'react-router'

import { Toaster } from '@/components/ui/sonner'

import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/sidebar'

const AppLayout = () => {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className='min-h-screen antialiased'>
        <SidebarProvider>
          {true && <span />}

          <SidebarInset>
            <Outlet />
          </SidebarInset>
          <Toaster richColors />
        </SidebarProvider>
      </body>
    </html>
  )
}

export default AppLayout
