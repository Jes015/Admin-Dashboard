import { SideBarContent, SideBarHeader } from './components'

export const SideBar = () => {
  return (
    <aside className='bg-primaryBackground [flex-grow:1] border-r [height:100svh] border-line p-2 w-full [max-width:16rem]'>
      <SideBarHeader />
      <SideBarContent />
    </aside>
  )
}
