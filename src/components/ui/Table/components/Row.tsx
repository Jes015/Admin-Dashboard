import { type BaseComponentProps } from '@/models'
import { TableRow } from '@radix-ui/themes'
interface Props extends BaseComponentProps {
  isHeader?: boolean
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
