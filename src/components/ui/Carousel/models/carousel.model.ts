export interface ContextParams {
  actualItemIndex: number
  nextItem: () => void
  previousItem: () => void
  itemsLength: number
  setItem: (newItemIndex: number) => void
}

export const carouselContextDefaultValues: ContextParams = {
  actualItemIndex: 0,
  itemsLength: 0,
  nextItem: () => {},
  previousItem: () => {},
  setItem: () => {}
}
