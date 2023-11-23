import { Sheet } from '@/components'
import { CarouselImages } from '@/components/CarouselImages'
import { UserForm } from './components'

interface Params {
  user: string
}
interface Props {
  params: Params
}

const UserPage: React.FC<Props> = ({ params: { user } }) => {
  return (
    <div className="flex gap-3">
      <div className='flex flex-col gap-[0.05rem] [max-width:18.75rem] w-full'>
        <div
          className='flex gap-[0.05rem] items-center'
        >
          <CarouselImages />
        </div>
      </div>
      <Sheet
        className='flex-grow relative'
      >
        <UserForm />
      </Sheet>
    </div>
  )
}

export default UserPage
