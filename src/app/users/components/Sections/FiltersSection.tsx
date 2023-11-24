import { FilterByCategory, TextFieldUser } from '@/app/users/components'
import { SectionLayout } from '@/layouts'

export const FiltersSection = () => {
  return (
        <SectionLayout
            title='Filters'
            className='flex flex-col flex-grow'
            itemsContainerClassName='flex gap-2 pt-1 h-full'
        >
            <TextFieldUser />
            <FilterByCategory label='Holaa' />
        </SectionLayout>
  )
}
