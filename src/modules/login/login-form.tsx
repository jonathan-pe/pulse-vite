import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import GoogleIcon from '@/components/google-icon'
// import { useNavigate } from 'react-router'

export default function LoginForm() {
  // const navigate = useNavigate()
  return (
    <Card className='mx-auto w-96'>
      <CardHeader>
        <CardTitle className='text-2xl'>Login</CardTitle>
      </CardHeader>
      <CardContent>
        <Button
          className='w-full'
          // onClick={() => navigate(`${process.env.BACKEND_URL!}/auth/google`)}
        >
          <GoogleIcon />
          Sign in with Google
        </Button>
      </CardContent>
    </Card>
  )
}
