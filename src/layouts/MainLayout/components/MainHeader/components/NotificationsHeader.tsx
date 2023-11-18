import { ChatBubbleIcon } from '@radix-ui/react-icons'
import { Button, Popover, Text } from '@radix-ui/themes'

export const NotificationsHeader = () => {
  return (
        <Popover.Root>
            <Popover.Trigger>
                <Button size='2' className='cursor-pointer hover:bg-backgroundHover rounded-sm'>
                    <ChatBubbleIcon width="16" height="16" />
                </Button>
            </Popover.Trigger>
            <Popover.Content style={{ width: 360 }}>
                <header>
                    <Text>Notifications</Text>
                </header>
            </Popover.Content>
        </Popover.Root>
  )
}
