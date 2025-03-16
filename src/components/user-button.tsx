import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { useClerk, useUser } from '@clerk/clerk-react'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { User, LogOut, ChartLine } from 'lucide-react'
import { useNavigate } from 'react-router'

const UserButton = () => {
  const { isSignedIn, user } = useUser()
  const clerk = useClerk()
  const navigate = useNavigate()

  const dropdownMenuItems = [
    {
      icon: User,
      text: 'Account',
      onClick: () => navigate('/account'),
    },
    {
      icon: ChartLine,
      text: 'Stats',
      onClick: () => navigate('/stats'),
    },
    {
      icon: LogOut,
      text: 'Sign Out',
      onClick: () => clerk.signOut(),
    },
  ]

  return isSignedIn ? (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className='cursor-pointer'>
          <AvatarImage src={user.imageUrl} />
          <AvatarFallback>{`${user.firstName?.charAt(0)}${user.lastName?.charAt(0)}`}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {dropdownMenuItems.map((item, index) => (
          <DropdownMenuItem key={index} onClick={item.onClick} className='flex items-center gap-2 cursor-pointer'>
            <item.icon />
            <span>{item.text}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  ) : null
}

export default UserButton
