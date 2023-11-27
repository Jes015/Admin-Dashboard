import { type BaseComponentProps } from '@/models'
import { useCarousel } from '../hooks'
import { carouselContext } from './carousel.context'

interface Props extends BaseComponentProps {
  itemsLength: number
  itemStartIndex: number
}
export const CarouselProvider: React.FC<Props> = ({ children, itemsLength, itemStartIndex }) => {
  const carouselValues = useCarousel({ itemsLength, itemStartIndex })

  return (
    <carouselContext.Provider
      value={carouselValues}
    >
      {children}
    </carouselContext.Provider>
  )
}
