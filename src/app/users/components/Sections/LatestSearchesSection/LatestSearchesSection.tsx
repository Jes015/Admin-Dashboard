import { Table } from '@/components'
import { SectionLayout } from '@/layouts'
import { SearchRow } from './components'

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
                    <SearchRow
                        title='Search 2'
                        href='/help'
                        type='user'
                    />
                    {
                        Array(2).fill(null).map((_, index) => (
                            <SearchRow
                                key={index}
                                title='Search 2'
                                href='/help'
                                type='search'
                            />
                        ))
                    }
                    {
                        Array(2).fill(null).map((_, index) => (
                            <SearchRow
                                key={index}
                                title='Search 2'
                                href='/help'
                                type='user'
                            />
                        ))
                    }
                    {
                        Array(6).fill(null).map((_, index) => (
                            <SearchRow
                                key={index}
                                title='Search 2'
                                href='/help'
                                type='search'
                            />
                        ))
                    }
                </Table.Body>
            </Table>
        </SectionLayout>
  )
}
