import Navbar from '@/components/navbar'
import AppSidebar from '@/components/sidebar'
import { useClerk } from '@clerk/clerk-react'
import { Outlet } from 'react-router'
import { Toaster } from 'sonner'
import { toast } from 'sonner'
import { SWRConfig } from 'swr'

const AppLayout = () => {
  const { isSignedIn, signOut } = useClerk()

  return (
    <SWRConfig
      value={{
        onError: (error) => {
          console.error(error.response.status)

          if (error.response.status === 401) {
            signOut(
              () => {
                toast.error('You are not authorized', {
                  description: 'Please sign in to use the application',
                })
              },
              {
                redirectUrl: '/sign-in',
              }
            )
          }
        },
        revalidateOnFocus: false,
        refreshInterval: 60000,
      }}
    >
      <div className='flex min-h-screen mx-auto w-full'>
        {isSignedIn && <AppSidebar />}
        <div className='flex flex-col flex-1 h-full'>
          {isSignedIn && <Navbar />}
          <Outlet />
        </div>
        <Toaster richColors />
      </div>
    </SWRConfig>
  )
}

export default AppLayout
