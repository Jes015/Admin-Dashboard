import { CardInfo } from '@/app/dashboard/components'
import { PersonIcon } from '@radix-ui/react-icons'

export const CardsSection = () => {
  return (
        <section className='flex gap-1'>
            <CardInfo
                title='Users'
                digits='10.000'
                Icon={PersonIcon}
                message='+20.000 users'
            />
            <CardInfo
                title='Users'
                digits='10.000'
                Icon={PersonIcon}
                message='+20.000 users'
            />
            <CardInfo
                title='Users'
                digits='10.000'
                Icon={PersonIcon}
                message='+20.000 users'
            />
        </section>
  )
}
