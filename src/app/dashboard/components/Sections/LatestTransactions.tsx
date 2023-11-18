import { Table } from '@/components'
import { Avatar, Badge, Heading } from '@radix-ui/themes'

export const LatestTransactions = () => {
  return (
        <section className="bg-primaryBackground border border-line rounded-md p-2 flex flex-col gap-2">
            <header>
                <Heading size='4' as='h3'>Latests Transactions</Heading>
            </header>
            <Table>
                <Table.Header>
                    <Table.Row className='text-tsecondary'>
                        <Table.Cell as='colHeader'>Name</Table.Cell>
                        <Table.Cell as='colHeader'>Status</Table.Cell>
                        <Table.Cell as='colHeader'>Date</Table.Cell>
                        <Table.Cell as='colHeader'>Amount</Table.Cell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        Array(5).fill(null).map((_, index) => (
                            <Table.Row key={index}>
                                <Table.Cell>
                                    <div className='inline-flex items-center gap-1'>
                                        <Avatar fallback="M" size='2' />
                                        Mario
                                    </div>
                                </Table.Cell>
                                <Table.Cell>
                                    <div className='h-full flex items-center gap-1'>
                                        <Badge color='brown'>Status</Badge>
                                    </div>
                                </Table.Cell>
                                <Table.Cell>
                                    <div className='h-full flex items-center gap-1'>
                                        <time dateTime='15/02/2023'>Feb 15</time>
                                    </div>
                                </Table.Cell>
                                <Table.Cell>
                                    <div className='h-full flex items-center gap-1'>
                                        12.000
                                    </div>
                                </Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
        </section>
  )
}
