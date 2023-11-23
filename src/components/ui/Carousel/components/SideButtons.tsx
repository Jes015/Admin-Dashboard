'use client'
import { PlayIcon } from '@/assets/Icons'
import { useCarouselState } from '../hooks/useCarouselState'

export const SideButtons = () => {
  const { itemsLength, actualItemIndex, previousItem, nextItem } = useCarouselState()

  const handleOnLeftClick = () => {
    previousItem()
  }

  const handleOnRightClick = () => {
    nextItem()
  }

  return (
        <>
            <div className="absolute left-0 top-0 inline-flex items-center justify-start p-[0.3rem] h-full"
            >
                {
                    actualItemIndex !== 0 &&
                    (
                        <button
                            className="z-10 [filter:drop-shadow(0px_0px_6px_rgb(25_25_25_/_0.5))]"
                            onClick={handleOnLeftClick}
                        >
                            <PlayIcon className='rotate-180 w-5 h-5' />
                        </button>
                    )
                }

            </div>
            <div className="absolute right-0 top-0 inline-flex items-center justify-end p-[0.3rem] h-full">
                {
                    actualItemIndex !== itemsLength &&
                    (
                        <button
                        className="z-10 [filter:drop-shadow(0px_0px_6px_rgb(25_25_25_/_0.5))]"
                            onClick={handleOnRightClick}
                        >
                            <PlayIcon className='w-5 h-5'/>
                        </button>
                    )
                }

            </div>
        </>
  )
}
