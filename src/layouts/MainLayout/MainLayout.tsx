import { Header, SideBar } from './components'

interface Props {
  children: React.ReactNode
}
export const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className='flex flex-row p-3 [height:100vh]'>
      <SideBar/>
      <div className='[flex-grow:10] pl-3 flex flex-col gap-3 w-full'>
        <Header/>
        <main className='flex-grow h-full overflow-y-auto'>
          {children}
        </main>
      </div>
    </div>
  )
}
