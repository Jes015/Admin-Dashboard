import { type BaseComponentProps } from '@/models'
import { TableBody, TableHeader, TableRoot } from '@radix-ui/themes'
import { Cell, Row } from './components'

export const Table = ({ children }: BaseComponentProps) => {
  return (
    <TableRoot>
      {children}
    </TableRoot>
  )
}
Table.Root = Table
Table.Cell = Cell
Table.Header = TableHeader
Table.Body = TableBody
Table.Row = Row
