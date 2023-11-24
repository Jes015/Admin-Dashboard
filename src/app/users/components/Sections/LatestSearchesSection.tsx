import { Table } from '@/components'
import { SectionLayout } from '@/layouts'
import { Avatar, Badge } from '@radix-ui/themes'

export const LatestSearchesSection = () => {
  return (
        <SectionLayout
            title='Latest searches'
            className='flex-shrink-0 max-h-[25rem] overflow-y-auto'
            itemsContainerClassName='flex flex-col overflow-x-auto gap-2'
        >
            <Table>
                <Table.Header>
                    <Table.Row isHeader>
                        <Table.Cell>Search</Table.Cell>
                        <Table.Cell>Type</Table.Cell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        Array(22).fill(null).map((_, index) => (
                            <Table.Row
                                key={index}
                            >
                                <Table.Cell>
                                    <Avatar fallback="A" size='2' />
                                    Alonso
                                </Table.Cell>
                                <Table.Cell>
                                    <Badge color='brown'>User</Badge>
                                </Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
        </SectionLayout>
  )
}
