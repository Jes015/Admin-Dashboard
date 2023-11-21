import { Sheet } from '@/components'
import { NavigationHeader, NotificationsHeader, UserDropdownMenu } from './components'

export const Header = () => {
  return (
    <Sheet
      as='header'
      className='rounded-md p-3 flex justify-between items-center w-full [min-height:56.08px]'
    >
      <NavigationHeader />
      <div className='flex items-center gap-1'>
        <NotificationsHeader />
        <UserDropdownMenu />
      </div>
    </Sheet>
  )
}
