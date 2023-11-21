'use client'
import { Input, TextField } from '@/components'
import { InputLayout } from '@/layouts'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Select } from '@radix-ui/themes'
import { useForm } from 'react-hook-form'
import { userFormSchema, type UserFormSchema } from './models'

export const UserForm = () => {
  const {
    handleSubmit
  } = useForm<UserFormSchema>({
    resolver: zodResolver(userFormSchema)
  })

  const handleOnSubmit = () => {
    console.log('submit')
  }

  return (
    <form className='flex flex-col gap-3' onSubmit={handleSubmit(handleOnSubmit)}>
      <header className='relative flex items-center'>
        <Input
          inputProps={{
            className: 'text-4xl font-bold uppercase leading-[0.1rem]'
          }}
        />
      </header>
      <div className='relative grid grid-cols-4 gap-3'>
        <TextField
          label='Hierro'
          placeholder='AX23'
          inputProps={{
          }}
        />

        <TextField
          label='Color'
          placeholder='Blanco, marron, negro...'
          inputProps={{
          }}
        />

        <TextField
          label='Peso'

          placeholder='Blanco, marron, negro...'
          inputProps={{
            type: 'number'
          }}
        />

        <TextField
          label='Propietario'

          placeholder='Propietario'
          inputProps={{
            type: 'number'
          }}
        />
        <TextField
          label='Peso'

          placeholder='Blanco, marron, negro...'
          inputProps={{
            type: 'number'
          }}
        />
        <InputLayout label='Estado'>
          <Select.Root defaultValue="Viva">
            <Select.Trigger />
            <Select.Content>
              <Select.Group>
                <Select.Label>Estado</Select.Label>
                <Select.Item value="Viva">Viva</Select.Item>
                <Select.Item value="Muerta">Muerta</Select.Item>
              </Select.Group>
            </Select.Content>
          </Select.Root>
        </InputLayout>
      </div>
      <footer>
        <Button>
          SAVE
        </Button>
      </footer>
    </form>
  )
}
