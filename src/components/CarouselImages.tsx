'use client'
import { Carousel, Image, Sheet, type PartialImageProps, type PartialSheetProps } from '@/components'

interface BaseCarouselProps {
  className: string
}
interface Props {
  baseProps?: BaseCarouselProps
  sheetProps?: PartialSheetProps
  imageProps?: PartialImageProps
}

export const CarouselImages: React.FC<Props> = ({ baseProps, sheetProps, imageProps }) => {
  const itemStartIndex = 0
  const itemsLength = 4

  return (
        <Carousel
            className={['rounded-md', baseProps?.className].join(' ')}
            {...{ itemsLength, itemStartIndex }}
        >
            {
                Array(4).fill(null).map((_, index) => (
                    <Carousel.Item key={index} itemIndex={index}>
                        <Sheet
                            {...sheetProps}
                            className={
                                [
                                  '!p-0 self-start flex-grow w-full',
                                  sheetProps?.className
                                ].join(' ')
                            }
                        >
                            <Image
                                {...imageProps}
                                src='/cow.jpg'
                                alt="Cow image"
                                width={200}
                                height={200}
                                loading={index !== itemStartIndex ? 'lazy' : 'eager'}
                                className='!w-full !h-full'
                            />
                        </Sheet>
                    </Carousel.Item>
                ))
            }
            <Carousel.SideButtons
                ariaLabels={{
                  leftButton: 'View previous image',
                  rightButton: 'View next image'
                }}
            />
            <Carousel.BottomButtons
                ariaLabelType='image'
            />
        </Carousel>
  )
}
