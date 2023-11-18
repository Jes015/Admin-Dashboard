import { Header, SideBar } from './components'

interface Props {
  children: React.ReactNode
}
export const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className='flex flex-row'>
      <SideBar className='[flex-grow:0.7] border-r [height:100svh] border-line p-2' />
      <main className='[flex-grow:10] p-2'>
        main
        <Header />
        {children}
      </main>
    </div>
  )
}
