import { Sheet } from '@/components'
import { Heading } from '@radix-ui/themes'
import styles from './sectionLayout.module.css'

interface Props {
  title?: string
  className?: React.HTMLAttributes<HTMLDivElement>['className']
  children: React.ReactNode
  itemsContainerClassName?: React.HTMLAttributes<HTMLDivElement>['className']
}

export const SectionLayout: React.FC<Props> = ({ className, children, title, itemsContainerClassName }) => {
  return (
    <Sheet
      as='section'
      className={[
        '!p-0 z-10 scroll',
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
      <div className={
        [
          'p-2 pt-0',
          itemsContainerClassName
        ].join(' ')
      }
      >
        {children}
      </div>
    </Sheet>
  )
}
