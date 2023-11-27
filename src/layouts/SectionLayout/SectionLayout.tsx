import { Sheet } from '@/components'
import { Heading } from '@radix-ui/themes'
import styles from './sectionLayout.module.css'

interface SectionLayoutProps {
  title?: string
  className?: React.HTMLAttributes<HTMLDivElement>['className']
  children: React.ReactNode
  itemsContainerClassName?: React.HTMLAttributes<HTMLDivElement>['className']
  headerButton?: React.ReactNode
}

export type PartialSectionLayoutProps = Partial<SectionLayoutProps>

export const SectionLayout: React.FC<SectionLayoutProps> = ({ className, children, title, itemsContainerClassName, headerButton }) => {
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
            'sticky top-0 p-2 z-10 flex items-center justify-between',
            styles.sectionLayout__header
          ].join(' ')
        }
      >
        <Heading size='4' as='h3'>{title}</Heading>
        {headerButton}
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
