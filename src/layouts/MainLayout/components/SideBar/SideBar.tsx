import { Sheet } from '@/components'
import { SideBarContent, SideBarHeader } from './components'

export const SideBar = () => {
  return (
      <Sheet
        as='aside'
        className='h-full w-full overflow-y-auto'
      >
        <SideBarHeader />
        <SideBarContent />
      </Sheet>
  )
}
