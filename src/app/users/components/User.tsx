import { Sheet } from '@/components'
import { Badge } from '@radix-ui/themes'
import Image from 'next/image'

interface Props {
  name: string
}

export const User: React.FC<Props> = ({ name }) => {
  return (
        <Sheet
            as='a'
            className="inline-flex flex-col !p-0 hover:bg-backgroundCurrent cursor-pointer"
        >
            <header>
                <Image
                    src='/cow.jpg'
                    alt="cow image"
                    width={150}
                    height={150}
                />
            </header>
            <footer
                className='flex flex-col p-2'
            >
                <span className='[text-overflow:elipsis] overflow-hidden'>
                    {name}
                </span>
                <div>
                    <Badge size='1'>
                        10.000/M
                    </Badge>
                </div>
            </footer>
        </Sheet>
  )
}
