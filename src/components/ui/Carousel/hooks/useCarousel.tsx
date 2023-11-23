import { useState } from 'react'

interface CarouselParams {
  itemsLength: number
  itemStartIndex: number
}

export const useCarousel = ({ itemsLength, itemStartIndex }: CarouselParams) => {
  const [actualItemIndex, setActualItemIndex] = useState(() => itemStartIndex)

  const adaptedItemsLength = itemsLength - 1

  const nextItem = () => {
    const isNotThereNextItem = actualItemIndex === adaptedItemsLength
    if (isNotThereNextItem) return

    const nextItemIndex = actualItemIndex + 1
    setActualItemIndex(nextItemIndex)
  }

  const previousItem = () => {
    const isNotTherePreviousItem = actualItemIndex === 0
    if (isNotTherePreviousItem) return

    const nextItemIndex = actualItemIndex - 1
    setActualItemIndex(nextItemIndex)
  }

  const setItem = (newItemIndex: number) => {
    if (newItemIndex < 0 || newItemIndex > adaptedItemsLength) {
      console.error('useCarousel: bad item index')
      return
    }
    setActualItemIndex(newItemIndex)
  }

  return {
    actualItemIndex,
    nextItem,
    previousItem,
    itemsLength: adaptedItemsLength,
    setItem
  }
}
