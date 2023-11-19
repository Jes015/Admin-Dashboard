import { CardsAnalyticsInfoSection, ChartsSection, LatestTransactionsSection, RightDashboardBar } from './components'

const DashboardPage = () => {
  return (
    <div className='flex gap-3 h-full'>
      <div className='flex flex-col gap-3 [flex-grow:5] w-full h-full'>
        <CardsAnalyticsInfoSection />
        <LatestTransactionsSection />
        <ChartsSection />
      </div>
      <div className='[flex-grow:1] overflow-hidden'>
        <RightDashboardBar />
      </div>
    </div>
  )
}

export default DashboardPage
