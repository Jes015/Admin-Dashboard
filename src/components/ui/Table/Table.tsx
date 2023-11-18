import { TableBody, TableHeader, TableRoot, TableRow } from '@radix-ui/themes'
import { Cell } from './components'

interface Props {
  children: React.ReactNode
}
export const Table = ({ children }: Props) => {
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
Table.Row = TableRow
