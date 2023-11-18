import { SideBarContent, SideBarHeader } from './components'

export const SideBar = () => {
  return (
    <aside className='bg-primaryBackground  p-2[flex-grow:1] border h-full border-line rounded-sm p-2 w-full [max-width:16rem] overflow-y-auto'>
      <SideBarHeader />
      <SideBarContent />
    </aside>
  )
}
