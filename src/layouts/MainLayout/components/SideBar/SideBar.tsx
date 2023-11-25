import { Sheet } from '@/components'
import { SideBarContent } from './components/SideBarContent'

export const SideBar = () => {
  return (
      <Sheet
        as='aside'
        className='h-full w-full overflow-y-auto'
      >
        <SideBarContent />
      </Sheet>
  )
}
