import { AnalyticsInfo } from '@/app/dashboard/components'
import { PersonIcon } from '@radix-ui/react-icons'

export const CardsAnalyticsInfoSection = () => {
  return (
        <section className='flex gap-3'>
            <AnalyticsInfo
                title='Users'
                digits='10.000'
                Icon={PersonIcon}
                message='+20.000 users'
            />
            <AnalyticsInfo
                title='Users'
                digits='10.000'
                Icon={PersonIcon}
                message='+20.000 users'
            />
            <AnalyticsInfo
                title='Users'
                digits='10.000'
                Icon={PersonIcon}
                message='+20.000 users'
            />
        </section>
  )
}
