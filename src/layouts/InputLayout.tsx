'use client'
import { Text } from '@radix-ui/themes'
interface Props {
  label?: string
  children: React.ReactNode
  error?: string
}
export const InputLayout: React.FC<Props> = ({ children, label, error }) => {
  return (
    <div className='flex flex-col justify-start'>
      {
        label != null && <Text className='cursor-default text-xs'>{label}</Text>
      }
      {children}
      {
        error != null && <Text color='tomato' className='cursor-default text-xs'>{error}</Text>
      }
    </div>
  )
}
