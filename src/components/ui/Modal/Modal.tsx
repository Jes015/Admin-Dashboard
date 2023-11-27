import { type BaseComponentProps } from '@/models'
import { DialogRoot, DialogTrigger } from '@radix-ui/themes'
import { ModalContent } from './component'

interface ModalProps extends BaseComponentProps {
  isOpen?: boolean
}
const Modal = ({ children, isOpen }: ModalProps) => {
  return (
        <DialogRoot open={isOpen}>
            {children}
        </DialogRoot>
  )
}

Modal.Trigger = DialogTrigger
Modal.Content = ModalContent

export default Modal
