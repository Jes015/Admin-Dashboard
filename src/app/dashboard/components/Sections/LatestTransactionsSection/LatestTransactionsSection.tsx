import { Table } from '@/components'
import { SectionLayout } from '@/layouts'
import { Avatar, Badge } from '@radix-ui/themes'

export const LatestTransactionsSection = () => {
  return (
        <SectionLayout
            className="flex flex-col [min-height:23.4375rem]"
            title='Latest Transactions'
        >
            <Table>
                <Table.Header>
                    <Table.Row isHeader className='text-tsecondary'>
                        <Table.Cell as='colHeader'>Name</Table.Cell>
                        <Table.Cell as='colHeader'>Status</Table.Cell>
                        <Table.Cell as='colHeader'>Date</Table.Cell>
                        <Table.Cell as='colHeader'>Amount</Table.Cell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        Array(15).fill(null).map((_, index) => (
                            <Table.Row key={index}>
                                <Table.Cell>
                                    <Avatar fallback="M" size='2' />
                                    Mario
                                </Table.Cell>
                                <Table.Cell>
                                    <Badge color='brown'>Status</Badge>
                                </Table.Cell>
                                <Table.Cell>
                                    <time dateTime='15/02/2023'>Feb 15</time>
                                </Table.Cell>
                                <Table.Cell>
                                    12.000
                                </Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
        </SectionLayout>
  )
}
