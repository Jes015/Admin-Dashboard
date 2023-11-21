import { Sheet } from '@/components'
import Image from 'next/image'
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
        <Sheet
          className='!p-0 self-start'
        >
          <Image
            src='/cow.jpg'
            alt="Cow image"
            width={300}
            height={300}
          />
        </Sheet>
        <div
          className='flex gap-[0.05rem] items-center'
        >
          {Array(4).fill(null).map((_, index) => (
            <Sheet
              className='!p-0 self-start flex-grow'
              key={index}
            >
              <Image
                src='/cow.jpg'
                alt="Cow image"
                width={100}
                height={100}
                className='w-full h-full'
              />
            </Sheet>
          ))}
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
