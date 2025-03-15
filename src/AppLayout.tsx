import AppSidebar from '@/components/sidebar'
import { Separator } from '@/components/ui/separator'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { useAuth, UserButton } from '@clerk/clerk-react'
import { Outlet } from 'react-router'
import { Toaster } from 'sonner'

const AppLayout = () => {
  const { isSignedIn } = useAuth()
  return (
    <div className='flex min-h-screen mx-auto w-full'>
      {isSignedIn && <AppSidebar />}
      <div className='flex flex-col flex-1 h-full'>
        {isSignedIn && (
          <header className='sticky top-0 z-10 flex h-16 shrink-0 items-center justify-between gap-2 border-b bg-background px-4'>
            <div className='flex items-center'>
              <SidebarTrigger className='-ml-1' />
              <Separator orientation='vertical' className='mr-2 h-4' />
              {/* <Breadcrumbs /> */}
            </div>
            {/* <Cart /> */}
            <UserButton />
          </header>
        )}
        <Outlet />
      </div>
      <Toaster richColors />
    </div>
  )
}

export default AppLayout
