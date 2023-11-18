import { SideBarContent, SideBarHeader } from './components'

interface Props {
  className: string
}

export const SideBar: React.FC<Props> = ({ className }) => {
  return (
    <div {...{ className }}>
      <SideBarHeader />
      <SideBarContent />
    </div>
  )
}
