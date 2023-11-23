'use client'

import { useCarouselState } from '../hooks/useCarouselState'

interface Props {
  children: React.ReactNode
  className?: React.HTMLProps<HTMLElement>['className']
}

export const CarouselItem: React.FC<Props> = ({ children, className }) => {
  const { actualItemIndex } = useCarouselState()
  return (
          <div
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
