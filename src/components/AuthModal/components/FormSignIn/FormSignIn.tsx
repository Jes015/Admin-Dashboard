import { TextField } from '@/components'
import { Button } from '@radix-ui/themes'
import { useForm } from 'react-hook-form'

export const FormSignIn = () => {
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
                label='Email'
                placeholder='pepe@gmail.com'
            />
            <TextField
                label='Password'
                inputProps={{
                  type: 'password'
                }}
                placeholder='pepe123'
            />
            <Button
                className='self-end'
            >
                Sign in
            </Button>
        </form>
  )
}
