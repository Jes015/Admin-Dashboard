import { type Icon } from '@/models'
import { Card } from '@radix-ui/themes'

interface Props {
  Icon: Icon
  title: string
  digits: React.ReactNode
  message: React.ReactNode
}

export const CardInfo: React.FC<Props> = ({ Icon, message, digits, title }) => {
  return (
    <Card className='bg-primaryBackground border-line rounded-sm p-2 flex-grow hover:bg-backgroundHover'>
      <div className='flex flex-row items-start gap-[0.6rem]'>
        <div>
          <Icon className='w-5 h-5 text-icon' />
        </div>
        <div className='flex flex-col gap-[0.1rem] flex-grow font-bold'>
          <header className='text-sm'>
            {title}
          </header>
          <div className='text-2xl font-bold leading-7'>
            {digits}
          </div>
          <footer className='text-xs text-tsecondary'>
            {message}
          </footer>
        </div>
      </div>
    </Card>
  )
}
