'use client'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { TextField } from '@radix-ui/themes'

export const TextFieldUser = () => {
  return (
        <TextField.Root>
            <TextField.Slot>
                <MagnifyingGlassIcon height="16" width="16" />
            </TextField.Slot>
            <TextField.Input placeholder='La niña, pepe, toro...' />
        </TextField.Root>
  )
}
