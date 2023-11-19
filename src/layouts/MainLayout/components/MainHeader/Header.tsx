'use client'
import { Sheet } from '@/components'
import { useRouting } from '@/hooks'
import { NotificationsHeader, SearchHeader, UserDropdownMenu } from './components'

export const Header = () => {
  const { currentPathnameFormatted } = useRouting()
  return (
    <Sheet
      as='header'
      className='bg-primaryBackground border border-line rounded-md p-3 flex justify-between items-center w-full'
    >
      <span className='capitalize text-sm font-bold'>
        {currentPathnameFormatted}
      </span>
      <div className='flex items-center gap-1'>
        <SearchHeader />
        <NotificationsHeader />
        <UserDropdownMenu />
      </div>
    </Sheet>
  )
}
