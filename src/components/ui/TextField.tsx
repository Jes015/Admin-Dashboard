import { InputLayout } from '@/layouts'
import { type Icon } from '@/models'
import { TextField as DefaultTextField } from '@radix-ui/themes'

interface Props {
  Icon: Icon
  label: string
  placeholder: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

export const TextField: React.FC<Props> = ({ Icon, label, placeholder, onChange }) => {
  return (
    <InputLayout
      label={label}
    >
      <DefaultTextField.Root>
        <DefaultTextField.Slot>
          <Icon />
        </DefaultTextField.Slot>
        <DefaultTextField.Input
          {...{ placeholder, onChange }}
        />
      </DefaultTextField.Root>
    </InputLayout>
  )
}
