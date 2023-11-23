'use client'

import { PlayIcon } from '@/assets/Icons'
import { useRouting } from '@/hooks'
import { Badge, IconButton } from '@radix-ui/themes'

export const NavigationHeader = () => {
  const { currentPathnameFormatted, goForward, goBack } = useRouting()

  const handleOnClickForGoForward = () => {
    goForward()
  }

  const handleOnClickForGoBack = () => {
    goBack()
  }

  return (
    <div className='flex items-center gap-3'>
      <div className='flex items-center gap-1'>
        <IconButton
          aria-label='Go to the previous page'
          onClick={handleOnClickForGoBack}
        >
          <PlayIcon className='rotate-180 w-6 h-6 text-gray-200 ' aria-hidden />
        </IconButton>
        <IconButton
          aria-label='Go to the next page'
          onClick={handleOnClickForGoForward}
        >
          <PlayIcon className='w-6 h-6' aria-hidden />
        </IconButton>
      </div>
      <span className='capitalize text-sm font-bold'>
        <Badge color='orange' size='2'>
          {currentPathnameFormatted}
        </Badge>
      </span>
    </div>
  )
}
