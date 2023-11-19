import { Sheet } from '@/components'
import { SideBarContent, SideBarHeader } from './components'

export const SideBar = () => {
  return (
      <Sheet
        as='aside'
        className='[flex-grow:1] h-full w-full [max-width:16rem] overflow-y-auto'
      >
        <SideBarHeader />
        <SideBarContent />
      </Sheet>
  )
}
