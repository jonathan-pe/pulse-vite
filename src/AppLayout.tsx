import Navbar from '@/components/navbar'
import AppSidebar from '@/components/sidebar'
import { useUser } from '@clerk/clerk-react'
import { Outlet } from 'react-router'
import { Toaster } from 'sonner'

const AppLayout = () => {
  const { isSignedIn } = useUser()

  return (
    <div className='flex min-h-screen mx-auto w-full'>
      {isSignedIn && <AppSidebar />}
      <div className='flex flex-col flex-1 h-full'>
        {isSignedIn && <Navbar />}
        <Outlet />
      </div>
      <Toaster richColors />
    </div>
  )
}

export default AppLayout
