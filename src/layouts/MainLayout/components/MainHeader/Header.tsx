'use client'
import { Sheet } from '@/components'
import { useRouting } from '@/hooks'
import { Badge } from '@radix-ui/themes'
import { NotificationsHeader, UserDropdownMenu } from './components'

export const Header = () => {
  const { currentPathnameFormatted } = useRouting()
  return (
    <Sheet
      as='header'
      className='bg-primaryBackground border border-line rounded-md p-3 flex justify-between items-center w-full [min-height:56.08px]'
    >
      <span className='capitalize text-sm font-bold'>
        <Badge color='orange' size='2'>
          {currentPathnameFormatted}
        </Badge>
      </span>
      <div className='flex items-center gap-1'>
        <NotificationsHeader />
        <UserDropdownMenu />
      </div>
    </Sheet>
  )
}
