import { FilterByCategory, TextFieldUser, User } from '@/app/users/components'
import { Sheet } from '@/components'

export const UsersSection = () => {
  return (
    <section className='flex flex-col gap-3'>
      <Sheet
        as='header'
        className='flex gap-2'
      >
        <TextFieldUser />
        <FilterByCategory label='Holaa' />
      </Sheet>
      <div
        className='grid grid-cols-7 gap-2'
      >
        {
          Array(12).fill(null).map((_, index) => (
            <User
              key={index}
              name='Alonso'
            />
          ))
        }
      </div>
    </section>
  )
}
