'use client'
import { PersonIcon } from '@radix-ui/react-icons'
import { DropdownMenu, IconButton } from '@radix-ui/themes'

export const UserDropdownMenu = () => {
  return (
    <DropdownMenu.Root>
        <DropdownMenu.Trigger>
            <IconButton size='2' variant='soft' className='cursor-pointer rounded-full hover:bg-backgroundHover'>
                <PersonIcon className='w-5 h-5' />
            </IconButton>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
            <DropdownMenu.Item>
                Log out
            </DropdownMenu.Item>
        </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}
