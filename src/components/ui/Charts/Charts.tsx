'use client'
import { ColorType, createChart, type LineData } from 'lightweight-charts'
import { useEffect, useRef, type LegacyRef } from 'react'

interface Colors {
  backgroundColor: string
  lineColor: string
  textColor: string
  areaTopColor: string
  areaBottomColor: string
  gridHorizontalLInes: string
  gridVerticalLInes: string
  crosshairHorizontalLine: string
  crosshairVerticalLine: string
}

interface Props {
  data: LineData[]
  colors: Colors
}

export const ChartComponent: React.FC<Props> = props => {
  const {
    data,
    colors: {
      backgroundColor,
      lineColor,
      textColor,
      areaTopColor,
      areaBottomColor,
      gridHorizontalLInes,
      gridVerticalLInes,
      crosshairHorizontalLine,
      crosshairVerticalLine
    } = {}
  } = props

  const chartContainerRef = useRef<HTMLDivElement>()

  useEffect(
    () => {
      if (chartContainerRef?.current == null) return
      const handleResize = () => {
        chart.applyOptions({ width: chartContainerRef.current?.clientWidth })
      }

      const chart = createChart(chartContainerRef.current, {
        layout: {
          background: { type: ColorType.Solid, color: backgroundColor },
          textColor
        },
        grid: {
          horzLines: { color: gridHorizontalLInes },
          vertLines: { color: gridVerticalLInes }
        },
        crosshair: {
          horzLine: { color: crosshairHorizontalLine },
          vertLine: { color: crosshairVerticalLine }
        },
        width: chartContainerRef.current.clientWidth,
        height: 300
      })
      chart.timeScale().fitContent()

      chart.addBaselineSeries({ baseLineColor: 'red' })
      const newSeries = chart.addAreaSeries({ lineColor, topColor: areaTopColor, bottomColor: areaBottomColor })
      newSeries.setData(data)

      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)

        chart.remove()
      }
    },
    [data, backgroundColor, lineColor, textColor, areaTopColor, areaBottomColor]
  )

  return (
        <div className='w-full' ref={chartContainerRef as LegacyRef<HTMLDivElement>} />
  )
}
