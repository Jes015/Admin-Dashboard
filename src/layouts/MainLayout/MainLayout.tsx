import { Header, SideBar } from './components'

interface Props {
  children: React.ReactNode
}
export const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className='flex flex-row [height:100vh]'>
      <div className='[flex-grow:1] [max-width:16rem] w-full p-3 pr-0'>
        <SideBar/>
      </div>
      <div className='[flex-grow:10] p-3 flex flex-col gap-3 w-full overflow-y-auto'>
        <Header/>
        <main className='flex-grow h-full'>
          {children}
        </main>
      </div>
    </div>
  )
}
