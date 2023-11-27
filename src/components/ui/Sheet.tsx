import { type BaseComponentProps } from '@/models'
import { forwardRef } from 'react'

interface SheetProps extends BaseComponentProps {
  as?: keyof JSX.IntrinsicElements
  href?: string
  component?: React.FC<unknown>
}

export type PartialSheetProps = Partial<SheetProps>

export const Sheet: React.FC<SheetProps> = forwardRef(
  ({ children, className, as, href, component }, ref) => {
    const SheetRootComponent = (component ?? as) ?? 'div'

    return (
      <SheetRootComponent
        className={[
          'bg-primaryBackground border border-line rounded-md p-2 relative overflow-hidden',
          className
        ].join(' ')}
        {...{ href }}
      >
        {children}
      </SheetRootComponent>
    )
  }
)
Sheet.displayName = 'Sheet'
