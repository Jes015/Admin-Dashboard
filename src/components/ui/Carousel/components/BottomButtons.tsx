import { useCarouselState } from '../hooks/useCarouselState'

interface Props {
  ariaLabelType: string
}
export const BottomButtons: React.FC<Props> = ({ ariaLabelType }) => {
  const { itemsLength, actualItemIndex, setItem } = useCarouselState()

  const handleOnClick = (itemIndex: number) => () => {
    setItem(itemIndex)
  }

  return (
    <div className='absolute bottom-0 left-0 w-full flex justify-center gap-1 pb-1'>
      <div className='absolute z-[0] bottom-[-15px] left-0 w-[100%] h-[280%] bg-red-500 [background:linear-gradient(0deg,_rgba(0,0,0,1)_0%,_rgba(30,215,96,0)_100%)]' />
      {Array(itemsLength + 1).fill(null).map((_, index) => (
        <button
          key={index}
          aria-label={`View ${ariaLabelType} ${index}`}
          onClick={handleOnClick(index)}
          className={
            [
              'w-3 h-3 rounded-full bg-white opacity-40 [filter:drop-shadow(0px_0px_1px_black)] focus-visible:outline focus-visible:outline-emerald-800 focus-visible:scale-125',
              index === actualItemIndex ? '!opacity-90' : ''

            ].join(' ')
          }
        />
      ))
      }
    </div>
  )
}
