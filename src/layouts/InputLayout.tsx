'use client'
import { Text } from '@radix-ui/themes'

interface Props {
  label: string
  children: React.ReactNode
}
export const InputLayout: React.FC<Props> = ({ children, label }) => {
  return (
        <div className='flex flex-col justify-start'>
            <Text className='cursor-default text-xs'>{label}</Text>
            {children}
        </div>
  )
}
