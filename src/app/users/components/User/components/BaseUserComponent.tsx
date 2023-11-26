import { Image, Link, Sheet } from '@/components'
import { frontRoutes } from '@/models'

export const BaseUserComponent = () => {
  const name = 'Alonso'
  return (
        <Sheet
            component={Link as React.FC<unknown>}
            href={frontRoutes.dynamics.user(name)}
            className="inline-flex flex-col !p-0  hover:bg-backgroundCurrent cursor-pointer flex-shrink-0 transition-colors no-underline"
        >
            <header className='[max-width:8.5rem] [max-height:8.5rem] w-full h-full'>
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
                <span className='[text-overflow:elipsis] overflow-hidden text-tprimary'>
                    {name}
                </span>
            </footer>
        </Sheet>
  )
}
