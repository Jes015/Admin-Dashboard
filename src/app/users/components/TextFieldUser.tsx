'use client'
import { TextField } from '@/components'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'

export const TextFieldUser = () => {
  return (
        <TextField
            Icon={MagnifyingGlassIcon}
            label='Search'
            placeholder='La niña, pepe, toro...'
            inputProps={{
              onChange: () => {}
            }}
        />
  )
}
