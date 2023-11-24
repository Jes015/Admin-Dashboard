import { InfoCard } from '@/components'
import { frontRoutes } from '@/models'
import { ActionsSection, FiltersSection, LatestSearchesSection, ResultsSection } from './components'

const DashboardPage = () => {
  return (
    <div className='flex flex-col gap-3 h-full'>
      <div className='flex-shrink-0 flex gap-3'>
        <FiltersSection />
        <ActionsSection />
      </div>
      <div className='flex-shrink-0 flex gap-3 items-start'>
        <div className='flex flex-col flex-grow gap-3'>
          <ResultsSection />
          <ResultsSection />
        </div>
        <div className='flex-shrink-0 flex flex-col gap-3 [max-width:15.5rem]'>
          <LatestSearchesSection />
          <InfoCard
            title='How to use search and filters?'
            subTitle='Learn in 5 minutes'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illo praesentium nemo doloremque consequuntur. Fugit praesentium quibusdam nostrum possimus non corporis! Debitis sunt officia voluptate odio ipsam necessitatibus et optio.'
            anchorText='Go to'
            anchorHref={frontRoutes.statics.help.path}
          />
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
