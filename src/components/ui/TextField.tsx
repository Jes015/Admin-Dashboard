import { InputLayout } from '@/layouts'
import { type Icon } from '@/models'
import { TextField as DefaultTextField } from '@radix-ui/themes'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

interface Props {
  Icon?: Icon
  label?: string
  placeholder?: string
  error?: string
  inputProps?: InputProps
  size?: '1' | '2' | '3'
}

export const TextField: React.FC<Props> = ({ Icon, label, placeholder, error, inputProps, size }) => {
  return (
    <InputLayout
      {...{ label, error }}
    >
      <DefaultTextField.Root {...{ size }}>
        {
          Icon != null &&
          <DefaultTextField.Slot>
            <Icon />
          </DefaultTextField.Slot>
        }
        <DefaultTextField.Input
          {
          ...{
            placeholder,
            size,
            onChange: inputProps?.onChange,
            className: inputProps?.className,
            type: inputProps?.type,
            defaultValue: inputProps?.defaultValue,
            value: inputProps?.value
          }
          }
        />
      </DefaultTextField.Root>
    </InputLayout>
  )
}
