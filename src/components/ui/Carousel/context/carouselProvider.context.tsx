import { useCarousel } from '../hooks'
import { carouselContext } from './carousel.context'

interface Props {
  itemsLength: number
  itemStartIndex: number
  children: React.ReactNode
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
