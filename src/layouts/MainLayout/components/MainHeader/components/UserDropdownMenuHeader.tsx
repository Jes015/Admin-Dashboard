import { PersonIcon } from '@radix-ui/react-icons'
import { Button, DropdownMenu } from '@radix-ui/themes'

export const UserDropdownMenu = () => {
  return (
    <DropdownMenu.Root>
        <DropdownMenu.Trigger>
            <Button size='2' className='cursor-pointer hover:bg-backgroundHover rounded-sm'>
                <PersonIcon className='w-5 h-5' />
            </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
            <DropdownMenu.Item>
                Log out
            </DropdownMenu.Item>
        </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}
