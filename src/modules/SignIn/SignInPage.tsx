import { GoogleOneTap, SignIn } from '@clerk/clerk-react'

export default function SignInPage() {
  return (
    <div className='flex min-h-screen items-center justify-center'>
      <SignIn signUpUrl='/sign-up' forceRedirectUrl='/sportsbook' />
      <GoogleOneTap />
    </div>
  )
}
