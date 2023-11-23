'use client'
import { BottomButtons, CarouselItem, SideButtons } from './components'
import { CarouselProvider } from './context'

interface Props {
  children: React.ReactNode
  className?: React.HTMLProps<HTMLElement>['className']
  itemsLength: number
  itemStartIndex?: number
  ariaLabel?: string
}

export const Carousel = ({ children, className, itemsLength, itemStartIndex = 0, ariaLabel }: Props) => {
  return (
    <CarouselProvider {...{ itemsLength, itemStartIndex }}>
        <div
          role='region'
          aria-label={ariaLabel}
            className={
                [
                  'w-full h-full flex flex-nowrap overflow-hidden relative',
                  className
                ].join(' ')
            }
        >
            {children}
        </div>
    </CarouselProvider>
  )
}

Carousel.Item = CarouselItem
Carousel.SideButtons = SideButtons
Carousel.BottomButtons = BottomButtons
