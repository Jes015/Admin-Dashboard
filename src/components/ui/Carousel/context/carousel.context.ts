import { createContext } from 'react'
import { carouselContextDefaultValues, type ContextParams } from '../models'

export const carouselContext = createContext<ContextParams>(carouselContextDefaultValues)
