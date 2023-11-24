import { User } from '@/app/users/components'
import { SectionLayout } from '@/layouts'

export const LatestSearchesSection = () => {
  return (
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
  )
}
