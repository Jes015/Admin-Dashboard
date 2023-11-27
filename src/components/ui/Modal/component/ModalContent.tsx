import { SectionLayout, type PartialSectionLayoutProps } from '@/layouts'
import { type BaseComponentProps } from '@/models'
import { Button, DialogClose, DialogContent } from '@radix-ui/themes'

interface Props extends BaseComponentProps {
  sectionLayout: PartialSectionLayoutProps
  displayCloseButton?: boolean
}

export const ModalContent: React.FC<Props> = ({ children, sectionLayout, displayCloseButton = true, className }) => {
  return (
        <DialogContent
            className={
                [
                  '!p-0 max-w-[450px]',
                  className
                ].join(' ')
            }
        >
            <SectionLayout
                {...sectionLayout}
                headerButton={
                    displayCloseButton &&
                    (
                        <DialogClose>
                            <Button variant="soft" color="gray">
                                Close
                            </Button>
                        </DialogClose>
                    )
                }
                className={
                    [
                      '!border-none ',
                      sectionLayout.className
                    ].join(' ')
                }
                itemsContainerClassName={
                    [
                      'pt-2',
                      sectionLayout.itemsContainerClassName
                    ].join(' ')
                }
            >
                {children}
            </SectionLayout>
        </DialogContent>
  )
}
