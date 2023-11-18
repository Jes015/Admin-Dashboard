import { TableRow } from '@radix-ui/themes'
interface Props {
  isHeader?: boolean
  children: React.ReactNode
  className?: string
}
export const Row: React.FC<Props> = ({ children, className, isHeader = false }) => {
  return (
    <TableRow
      className={[
        !isHeader ? 'hover:bg-backgroundHover' : '',
        className
      ].join(' ')
      }
    >
      {children}
    </TableRow>
  )
}
