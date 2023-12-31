'use client'
import { type BaseComponentProps } from '@/models'
import { useCarouselState } from '../hooks/useCarouselState'

interface Props extends BaseComponentProps {
  itemIndex: number
}

export const CarouselItem: React.FC<Props> = ({ children, className, itemIndex }) => {
  const { actualItemIndex } = useCarouselState()
  return (
    <div
      aria-hidden={actualItemIndex !== itemIndex}
      className={
        [
          'flex-grow-0 flex-shrink-0 [flex-basis:100%] w-full h-full overflow-hidden',
          className
        ]
          .filter(Boolean)
          .join(' ')
      }
      style={{
        transform: `translateX(${actualItemIndex * (-100)}%)`,
        transitionDuration: '0.7s'
      }}
    >
      {children}
    </div>
  )
}
