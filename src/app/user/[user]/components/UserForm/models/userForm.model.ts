import { z as ZValidator } from 'zod'

export const userFormSchema = ZValidator.object({
  name: ZValidator.string().min(1),
  description: ZValidator.string().min(1),
  hierro: ZValidator.string().min(1),
  color: ZValidator.string().min(4),
  peso: ZValidator.number(),
  propietario: ZValidator.string().min(3),
  estado: ZValidator.string().min(3)
})

export type UserFormSchema = ZValidator.infer<typeof userFormSchema>
