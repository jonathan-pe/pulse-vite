import { useAuth } from '@clerk/clerk-react'
import { useNavigate } from 'react-router'
import { toast } from 'sonner'
import React, { useEffect } from 'react'

const withAuth = (Component: React.ComponentType) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (props: any) => {
    const { isSignedIn, isLoaded } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
      if (isLoaded && !isSignedIn) {
        toast.error('You must be signed in to view this page')
        navigate('/sign-in')
        return
      }
    }, [isLoaded, isSignedIn, navigate])

    return <Component {...props} />
  }
}

export default withAuth
