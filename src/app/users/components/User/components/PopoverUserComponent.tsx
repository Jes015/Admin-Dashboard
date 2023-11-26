import { CarouselImages } from '@/components/CarouselImages'
import { Badge, Heading, Inset, Text } from '@radix-ui/themes'

export const PopoverUserComponent = () => {
  return (
    <div className='flex gap-2 [max-width:25rem] [max-height:15rem]'>
      <Inset side="left" pr="0">
        <div className='[max-width:10rem]'>
          <CarouselImages
            baseProps={{
              className: 'rounded-none'
            }}
            sheetProps={{
              className: 'border-none !rounded-none'
            }}
            imageProps={{
              className: '!rounded-none'
            }}
          />
        </div>
      </Inset>
      <div className='flex-grow [min-width:15rem]'>
        <header className='flex justify-between'>
          <Heading as='h5'>LA NIÑA</Heading>
          <Badge size='2'>
            <Text>VIVA</Text>
          </Badge>
        </header>
      </div>
    </div>
  )
}
