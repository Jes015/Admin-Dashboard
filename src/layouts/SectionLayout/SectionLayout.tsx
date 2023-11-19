import { Sheet } from '@/components'
import { Heading } from '@radix-ui/themes'
import styles from './sectionLayout.module.css'

interface Props {
  title?: string
  className?: string
  children: React.ReactNode
}

export const SectionLayout: React.FC<Props> = ({ className, children, title }) => {
  return (
    <Sheet
      as='section'
      className={[
        '!p-0',
        className
      ].join(' ')
      }
    >
      <header
        className={
          [
            'sticky top-0 p-2 z-10',
            styles.sectionLayout__header
          ].join(' ')
        }
      >
        <Heading size='4' as='h3'>{title}</Heading>
      </header>
      <div className='p-2 pt-0'>
        {children}
      </div>
    </Sheet>
  )
}
