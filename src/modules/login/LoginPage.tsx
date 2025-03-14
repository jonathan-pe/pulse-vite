import { SignIn } from '@clerk/clerk-react'

export default function LoginPage() {
  return (
    <div className='flex min-h-screen items-center justify-center'>
      <SignIn signUpUrl='/sign-up' />
    </div>
  )
}
