interface Props {
  as: keyof JSX.IntrinsicElements
  children: React.ReactNode
  className?: string
}
export const Sheet: React.FC<Props> = ({ children, className, as }) => {
  const SheetRootComponent = as

  return (
    <SheetRootComponent
        className={[
          'bg-primaryBackground border border-line rounded-md p-2 relative overflow-hidden',
          className
        ].join(' ')}
    >
        {children}
    </SheetRootComponent>
  )
}
