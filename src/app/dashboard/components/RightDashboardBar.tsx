import { InfoCard } from '@/components/InfoCard'
import { frontRoutes } from '@/models'

export const RightDashboardBar = () => {
  return (
    <aside
      className='flex flex-col gap-3'
    >
      {
        Array(2).fill(null).map((_, index) => (
          <InfoCard
            key={index}
            title='How to use the new version of the admin dashboard?'
            subTitle='Take 4 minutes to learn'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab incidunt tenetur harum illum fuga natus! Excepturi corrupti error voluptatem, dolor dignissimos esse? Velit expedita corrupti deleniti porro libero veniam reiciendis!'
            anchorHref={frontRoutes.statics.help.path}
            anchorText='Read'
          />
        ))
      }
    </aside>
  )
}

