'use client'
import { Carousel, Image, Sheet } from '@/components'

export const CarouselImages = () => {
  const itemStartIndex = 0
  const itemsLength = 4

  return (
        <Carousel
            className='rounded-md'
            {...{ itemsLength, itemStartIndex }}
        >
            {
                Array(4).fill(null).map((_, index) => (
                    <Carousel.Item key={index} itemIndex={index}>
                        <Sheet
                            className='!p-0 self-start flex-grow w-full'
                        >
                            <Image
                                src='/cow.jpg'
                                alt="Cow image"
                                width={300}
                                height={300}
                                loading={index !== itemStartIndex ? 'lazy' : 'eager'}
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
