import { Link, Sheet } from '@/components'
import { Badge, Button } from '@radix-ui/themes'

interface Props {
  title: string
  subTitle: string
  description: string
  anchorHref: string
  anchorText: string
  className?: React.HtmlHTMLAttributes<HTMLDivElement>['className']
}

export const InfoCard: React.FC<Props> = ({ title, subTitle, description, anchorHref, anchorText, className }) => {
  return (
    <Sheet
      as="article"
      className={
        [
          'flex flex-col gap-1 text-sm [max-width:22rem]',
          className
        ].join(' ')
      }
    >
      <header className='flex flex-col gap-1'>
        <h4 className='text-base font-bold leading-5'>{title}</h4>
        <Badge color='indigo' className='self-start' size='1'>
          {subTitle}
        </Badge>
      </header>
      <div>
        <p
          className='text-xs leading-[1rem] [text-wrap:pretty]'
        >
          {description}
        </p>
      </div>
      <footer className='flex'>
        <div className='w-full flex items-center justify-between self-end'>
          <Link href={anchorHref}>{anchorText}</Link>
          <Button variant='soft' size='1'>Copy link</Button>
        </div>
      </footer>
    </Sheet>
  )
}
