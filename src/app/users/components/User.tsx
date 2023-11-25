import { Image, Link, Sheet } from '@/components'
import { frontRoutes } from '@/models'
import { Badge } from '@radix-ui/themes'

interface Props {
  name: string
}

export const User: React.FC<Props> = ({ name }) => {
  return (
        <Sheet
            component={Link as React.FC<unknown>}
            href={frontRoutes.dynamics.user(name)}
            className="inline-flex flex-col !p-0  hover:bg-backgroundCurrent cursor-pointer flex-shrink-0 transition-colors"
        >
            <header>
                <Image
                    src='/cow.jpg'
                    alt="cow image"
                    width={150}
                    height={150}
                    loading='eager'
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
