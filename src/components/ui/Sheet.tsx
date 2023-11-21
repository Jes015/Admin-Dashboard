interface Props {
  as?: keyof JSX.IntrinsicElements
  children: React.ReactNode
  className?: string
  href?: string
  component?: React.FC<unknown>
}

export const Sheet: React.FC<Props> = ({ children, className, as, href, component }) => {
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
