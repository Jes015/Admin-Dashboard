import { FilterByCategory, TextFieldUser, User } from '@/app/users/components'
import { SectionLayout } from '@/layouts'
import { Button } from '@radix-ui/themes'

export const UsersSection = () => {
  return (
    <section className='flex flex-col h-full gap-3'>
      <div className='flex-shrink-0 flex gap-3'>
        <SectionLayout
          title='Filters'
          className='flex flex-col flex-grow'
          itemsContainerClassName='flex gap-2 pt-1 h-full'
        >
            <TextFieldUser />
            <FilterByCategory label='Holaa' />
        </SectionLayout>
        <SectionLayout
          title='Actions'
          className='flex flex-col'
          itemsContainerClassName='flex gap-2 pt-1 h-full items-center'
        >
            <Button variant='soft'>Add user</Button>
            <Button variant='soft' color='red'>Add user</Button>
        </SectionLayout>
      </div>
      <SectionLayout
        title='Results'
        className='flex-grow flex-shrink-0'
        itemsContainerClassName='flex flex-nowrap overflow-x-auto gap-2 pt-2'
      >
        {
          Array(2).fill(null).map((_, index) => (
            <User
              key={index}
              name='Alonso'
            />
          ))
        }
      </SectionLayout>
      <SectionLayout
        title='Latest searches'
        className='flex-grow flex-shrink-0'
        itemsContainerClassName='flex flex-nowrap overflow-x-auto gap-2 pt-2'
      >
        {
          Array(22).fill(null).map((_, index) => (
            <User
              key={index}
              name='Alonso'
            />
          ))
        }
      </SectionLayout>
    </section>
  )
}
