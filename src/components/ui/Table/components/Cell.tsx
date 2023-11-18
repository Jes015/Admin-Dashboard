import { TableCell, TableColumnHeaderCell } from '@radix-ui/themes'

interface Props {
  as?: 'colHeader' | 'default'
  children: React.ReactNode
}

export const Cell: React.FC<Props> = ({ children, as = 'default' }) => {
  const CellComponent = as === 'default' ? TableCell : TableColumnHeaderCell

  return (
        <CellComponent>
            <div className='h-full flex items-center gap-1 p-0'>
                {children}
            </div>
        </CellComponent>
  )
}
