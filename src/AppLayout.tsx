import { Outlet } from 'react-router'
import { Toaster } from 'sonner'

const AppLayout = () => {
  return (
    <div>
      <Outlet />
      <Toaster richColors />
    </div>
  )
}

export default AppLayout
