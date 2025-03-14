import React from 'react'
import { Link } from 'react-router'

const NotFoundPage: React.FC = () => {
  return (
    <div className='mx-auto flex min-h-screen w-full flex-col p-4 items-center justify-center'>
      <h1 className='text-4xl font-bold'>Page Not Found</h1>
      <p className='mb-8 text-lg'>Sorry, the page you are looking for does not exist.</p>
      <Link to='/' className='text-primary hover:opacity-80'>
        Go back to Home
      </Link>
    </div>
  )
}

export default NotFoundPage
