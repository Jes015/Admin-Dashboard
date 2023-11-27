import { TextField } from '@/components'
import { Button } from '@radix-ui/themes'
import { useForm } from 'react-hook-form'

export const FormSignUp = () => {
  const {
    handleSubmit
  } = useForm()

  const handleOnSubmit = handleSubmit((data) => {

  })

  return (
    <form
      className='flex flex-col gap-2'
      onSubmit={handleOnSubmit}
    >
      <TextField
        label='Username'
        placeholder='pepe'
        inputProps={{
          autoComplete: 'username'
        }}
      />
      <TextField
        label='Email'
        placeholder='pepe@gmail.com'
        inputProps={{
          autoComplete: 'email'
        }}
      />
      <TextField
        label='Password'
        inputProps={{
          type: 'password',
          autoComplete: 'new-password'
        }}
        placeholder='pepe123'
      />
      <TextField
        label='Repeat your password'
        inputProps={{
          type: 'password',
          autoComplete: 'new-password'
        }}
        placeholder='pepe123'
      />
      <Button
        className='self-end'
      >
        Sign up
      </Button>
    </form>
  )
}
