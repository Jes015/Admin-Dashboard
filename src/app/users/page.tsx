import { ActionsSection, FiltersSection, LatestSearchesSection, ResultsSection } from './components'

const DashboardPage = () => {
  return (
    <div className='flex flex-col gap-3 h-full'>
      <div className='flex-shrink-0 flex gap-3'>
        <FiltersSection />
        <ActionsSection />
      </div>
      <ResultsSection />
      <LatestSearchesSection />
    </div>
  )
}

export default DashboardPage
