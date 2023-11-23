import { useContext } from 'react'
import { carouselContext } from '../context'

export const useCarouselState = () => useContext(carouselContext)
