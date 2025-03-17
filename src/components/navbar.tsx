import { SidebarTrigger } from '@/components/ui/sidebar'
import { UserButton } from '@clerk/clerk-react'
import { Separator } from '@/components/ui/separator'
import Breadcrumbs from '@/components/breadcrumbs'

const Navbar = () => {
  return (
    <header className='sticky top-0 z-10 flex h-16 shrink-0 items-center justify-between gap-2 border-b bg-background px-4'>
      <div className='flex items-center gap-2'>
        <SidebarTrigger />
        <Separator orientation='vertical' />
        {/* <Breadcrumbs /> */}
      </div>
      <UserButton />
    </header>
  )
}

export default Navbar
