import Breadcrumbs from '@/components/breadcrumbs'
import { Button } from '@/components/ui/button'
import UserButton from '@/components/user-button'
import { Home } from 'lucide-react'
import { useNavigate } from 'react-router'

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <header className='sticky top-0 z-10 flex h-16 shrink-0 items-center justify-between gap-2 border-b bg-background px-4'>
      <div className='flex items-center gap-2'>
        <Button size='icon' variant='ghost' onClick={() => navigate('/sportsbook')}>
          <Home size={16} />
        </Button>
        <Breadcrumbs />
      </div>
      <UserButton />
    </header>
  )
}

export default Navbar
