import withAuth from '@/utils/withAuth'
import { UserProfile } from '@clerk/clerk-react'

const AccountPage = withAuth(() => {
  return (
    <div className='flex flex-col flex-1 justify-center items-center gap-4 p-4'>
      <UserProfile />
    </div>
  )
})

export default AccountPage
