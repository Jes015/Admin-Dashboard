import { Header, SideBar } from './components'

interface Props {
  children: React.ReactNode
}
export const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className='flex flex-row'>
      <SideBar/>
      <div className='[flex-grow:10] p-3 flex flex-col gap-3 w-full'>
        <Header/>
        <main className='flex-grow'>
          {children}
        </main>
      </div>
    </div>
  )
}
