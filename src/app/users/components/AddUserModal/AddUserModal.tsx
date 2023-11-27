'use client'
import Modal from '@/components/ui/Modal/Modal'
import { Button } from '@radix-ui/themes'
import { AddUserModalForm } from './component'

export const AddUserModal = () => {
  return (
        <Modal>
            <Modal.Trigger>
                <Button variant='surface' className='bg-indigo-950'>Add user</Button>
            </Modal.Trigger>
            <Modal.Content
                sectionLayout={{
                  title: 'Register a user'
                }}
            >
                <AddUserModalForm />
            </Modal.Content>
        </Modal>
  )
}
