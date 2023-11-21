import { useId } from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
}

interface Props {
  inputProps: InputProps
  label?: string
}

export const Input: React.FC<Props> = ({ label, inputProps: { className: inputClassName, ...inputProps } }) => {
  const inputID = useId()
  return (
    <div className="flex flex-col">
      <label htmlFor={inputID}>
        {
          label != null && <span className="text-xs [line-height:0.1rem]">{label}</span>
        }
      </label>
      <input
        className={
          [
            'bg-transparent [line-height:0.1rem] outline-none border-none opacity-[0.85] transition-opacity hover:opacity-100 active:opacity-100 focus:opacity-100 p-0',
            inputClassName
          ].join(' ')
        }
        autoComplete='off'
        {...{ ...inputProps, id: inputID }}
      />
    </div>
  )
}
