import { ChartComponent } from '@/components'
import { SectionLayout } from '@/layouts'

const initialData = [
  { time: '2018-12-22', value: 32.51 },
  { time: '2018-12-23', value: 31.11 },
  { time: '2018-12-24', value: 27.02 },
  { time: '2018-12-25', value: 27.32 },
  { time: '2018-12-26', value: 25.17 },
  { time: '2018-12-27', value: 28.89 },
  { time: '2018-12-28', value: 25.46 },
  { time: '2018-12-29', value: 23.92 },
  { time: '2018-12-30', value: 22.68 },
  { time: '2018-12-31', value: 22.67 }
]

export const ChartsSection = () => {
  return (
    <SectionLayout
      className="flex flex-col gap-5 p-0 [min-height:23.4375rem] overflow-y-auto"
      title='Charts'
    >
      <ChartComponent
        data={initialData}
        colors={{
          areaTopColor: 'rgb(47 98 255 / 0%)',
          areaBottomColor: 'rgb(47 98 255 / 24%)',
          backgroundColor: '#1a191b',
          lineColor: 'rgba(47, 98, 255, 0.54)',
          textColor: 'rgb(185,185,185)',
          gridHorizontalLInes: 'rgba(159, 166, 173, 0.16)',
          gridVerticalLInes: 'rgba(159, 166, 173, 0.16)',
          crosshairHorizontalLine: 'rgb(145,145,145)',
          crosshairVerticalLine: 'rgb(145 145 145)'
        }}
      />
    </SectionLayout>
  )
}
