'use client'
import { Input, TextField } from '@/components'
import { InputLayout } from '@/layouts'
import { userFormSchema, type UserFormSchema } from '@/models'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Select } from '@radix-ui/themes'
import { useForm } from 'react-hook-form'

interface Props {
  formDefaultValues: UserFormSchema
}

export const UserForm: React.FC<Props> = ({ formDefaultValues }) => {
  const {
    handleSubmit,
    register
  } = useForm<UserFormSchema>({
    defaultValues: formDefaultValues,
    resolver: zodResolver(userFormSchema)
  })

  const handleOnSubmit = (data: unknown) => {
    console.log('submit', data)
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
            ...register('propietario')
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
