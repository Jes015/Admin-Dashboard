'use client'
import { Carousel, Sheet } from '@/components'
import Image from 'next/image'

export const CarouselImages = () => {
  return (
        <Carousel itemsLength={4} itemStartIndex={2} className='rounded-md'>
            {Array(4).fill(null).map((_, index) => (
                <Carousel.Item key={index} itemIndex={index}>
                    <Sheet
                        className='!p-0 self-start flex-grow'
                    >
                        <Image
                            src='/cow.jpg'
                            alt="Cow image"
                            width={100}
                            height={100}
                            className='w-full h-full'
                        />
                    </Sheet>
                </Carousel.Item>
            ))}
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
