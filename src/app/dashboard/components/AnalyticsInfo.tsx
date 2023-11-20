import { Sheet } from '@/components'
import { type Icon } from '@/models'
import { Badge } from '@radix-ui/themes'

interface Props {
  Icon: Icon
  title: string
  digits: React.ReactNode
  message: React.ReactNode
}

export const AnalyticsInfo: React.FC<Props> = ({ Icon, message, digits, title }) => {
  return (
    <Sheet
      as='article'
      className='!py-3 flex-grow hover:bg-backgroundHover cursor-default'
    >
      <div className='flex flex-row items-start gap-[0.6rem]'>
        <div>
          <Icon className='w-5 h-5 text-icon' />
        </div>
        <div className='flex flex-col gap-[0.3rem] flex-grow font-bold'>
          <header className='text-sm'>
            {title}
          </header>
          <div className='text-2xl font-bold leading-7'>
            {digits}
          </div>
          <footer className='text-xs text-tsecondary'>
            <Badge>
              {message}
            </Badge>
          </footer>
        </div>
      </div>
    </Sheet>
  )
}
