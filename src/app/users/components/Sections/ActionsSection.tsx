import { AddUserModal } from '@/app/users/components'
import { SectionLayout } from '@/layouts'
import { Button } from '@radix-ui/themes'

export const ActionsSection = () => {
  return (
        <SectionLayout
            title='Actions'
            className='flex flex-col'
            itemsContainerClassName='flex gap-2 pt-1 h-full items-center'
        >
            <AddUserModal />
            <Button variant='soft' color='red'>Add user</Button>
        </SectionLayout>
  )
}
