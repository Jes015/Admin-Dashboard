import { CardsSection, LatestTransactions } from './components'

const DashboardPage = () => {
  return (
    <div className='flex gap-1'>
      <div className='flex flex-col gap-3 [flex-grow:1]'>
        <CardsSection />
        <LatestTransactions />
      </div>
      <div className='[flex-grow:0.8]'>
        lsdkfj
      </div>
    </div>
  )
}

export default DashboardPage
