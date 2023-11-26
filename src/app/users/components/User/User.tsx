'use client'
import { HoverCard, Text } from '@radix-ui/themes'
import { BaseUserComponent, PopoverUserComponent } from './components'

interface Props {
  name: string
}

export const User: React.FC<Props> = ({ name }) => {
  return (

        <HoverCard.Root>
            <HoverCard.Trigger>
                <Text>
                    <BaseUserComponent />
                </Text>
            </HoverCard.Trigger>
            <HoverCard.Content side='bottom'>
                <PopoverUserComponent />
            </HoverCard.Content>
        </HoverCard.Root>

  )
}
