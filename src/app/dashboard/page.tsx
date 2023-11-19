import { CardsSection, ChartsSection, LatestTransactionsSection } from './components'

const DashboardPage = () => {
  return (
    <div className='flex gap-1 h-full'>
      <div className='flex flex-col gap-3 [flex-grow:1] h-full'>
        <CardsSection />
        <LatestTransactionsSection />
        <ChartsSection />
      </div>
      <div className='[flex-grow:0.8]'>
        lsdkfj
      </div>
    </div>
  )
}

export default DashboardPage
