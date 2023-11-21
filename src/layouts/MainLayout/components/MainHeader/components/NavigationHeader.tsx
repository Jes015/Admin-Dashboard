'use client'

import { useRouting } from '@/hooks'
import { Badge } from '@radix-ui/themes'

export const NavigationHeader = () => {
  const { currentPathnameFormatted } = useRouting()
  return (
    <div className='flex items-center'>
        <span className='capitalize text-sm font-bold'>
            <Badge color='orange' size='2'>
                {currentPathnameFormatted}
            </Badge>
        </span>
    </div>
  )
}
