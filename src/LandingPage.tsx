import { Button } from '@/components/ui/button'
import { useAuth } from '@clerk/clerk-react'
import { useNavigate } from 'react-router'

export default function LandingPage() {
  const navigate = useNavigate()

  const { isSignedIn } = useAuth()

  if (isSignedIn) {
    navigate('/sportsbook')
    return
  }

  return (
    <div className='mx-auto flex min-h-screen w-full flex-col p-4'>
      <header className='flex items-center justify-between'>
        <span className='text-2xl font-bold'>Pulse</span>
        <Button
          onClick={() => {
            navigate('/sign-in')
          }}
        >
          Sign In
        </Button>
      </header>
      <main className='flex h-full flex-1 flex-col items-center justify-center'>
        <h1 className='mb-4 text-4xl font-bold'>Welcome to Pulse</h1>
        <p>Gamified sports predictions without real money or prizes</p>
      </main>
    </div>
  )
}
