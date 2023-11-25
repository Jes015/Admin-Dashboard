import { Link, Table } from '@/components'
import { Avatar, Badge } from '@radix-ui/themes'

interface Props {
  title: string
  href: string
  type: 'search' | 'user'
}

export const SearchRow: React.FC<Props> = ({ type, title, href }) => {
  return (
        <Table.Row>
            <Table.Cell>
                {
                    type === 'user' && <Avatar fallback={title?.at(0)?.toUpperCase() ?? 'U'} size='2' />
                }
                <Link {...{ href }}>
                    <span>{title}</span>
                </Link>
            </Table.Cell>
            <Table.Cell>
                <Badge className='capitalize' color='brown'>{type}</Badge>
            </Table.Cell>

        </Table.Row>
  )
}
