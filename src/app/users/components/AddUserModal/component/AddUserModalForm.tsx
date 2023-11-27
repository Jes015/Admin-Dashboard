'use client'
import { TextField } from '@/components'
import { userFormSchema, type UserFormSchema } from '@/models'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

export const AddUserModalForm = () => {
  const {
    handleSubmit,
    register
  } = useForm<UserFormSchema>({
    resolver: zodResolver(userFormSchema)
  })

  const handleOnSubmit = (data: unknown) => {
    console.log('submit', data)
  }

  return (
        <form className='flex flex-col gap-3' onSubmit={handleSubmit(handleOnSubmit)}>
            <TextField
                label='Nombre'
                placeholder='La niña'
                inputProps={{
                  ...register('name'),
                  autoComplete: 'cow-name'
                }}
            />
            <TextField
                label='Hierro'
                placeholder='AX23'
                inputProps={{
                  ...register('hierro')
                }}
            />

            <TextField
                label='Color'
                placeholder='Blanco, marron, negro...'
                inputProps={{
                  ...register('color')
                }}
            />

            <TextField
                label='Peso'

                placeholder='Blanco, marron, negro...'
                inputProps={{
                  type: 'number',
                  ...register('peso')
                }}
            />

            <TextField
                label='Propietario'
                placeholder='Propietario'
                inputProps={{
                  type: 'number',
                  ...register('propietario'),
                  autoComplete: 'name'
                }}
            />
            <TextField
                label='Peso'
                placeholder='Blanco, marron, negro...'
                inputProps={{
                  type: 'number',
                  ...register('peso')
                }}
            />
        </form>
  )
}
