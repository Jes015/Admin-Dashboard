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
            className={className}
        >
          <header
                className={
                    [
                      'sticky top-0 bg-red-600 z-10',
                      styles.sectionLayout__header
                    ].join(' ')
                }
            >
                <Heading size='4' as='h3'>{title}</Heading>
            </header>
          {children}
        </Sheet>
  )
}
