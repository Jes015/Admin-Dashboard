import { ChatBubbleIcon } from '@radix-ui/react-icons'
import { IconButton, Popover, Text } from '@radix-ui/themes'

export const NotificationsHeader = () => {
  return (
        <Popover.Root>
            <Popover.Trigger>
                <IconButton size='2' className='cursor-pointer hover:bg-backgroundHover rounded-full'>
                    <ChatBubbleIcon width="16" height="16" />
                </IconButton>
            </Popover.Trigger>
            <Popover.Content style={{ width: 360 }}>
                <header>
                    <Text>Notifications</Text>
                </header>
            </Popover.Content>
        </Popover.Root>
  )
}
