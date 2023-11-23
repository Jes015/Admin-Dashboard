'use client'
import { SectionLayout } from '@/layouts'
import { Button, Dialog, Flex } from '@radix-ui/themes'
import { AddUserModalForm } from './component'

export const AddUserModal = () => {
  return (
        <Dialog.Root>
            <Dialog.Trigger>
                <Button variant='surface' className='bg-indigo-950'>Add user</Button>
            </Dialog.Trigger>

            <Dialog.Content
                style={{ maxWidth: 450 }}
                className='p-0'
            >
                <SectionLayout
                    title='Register a user'
                    className='!border-none'
                    itemsContainerClassName='pt-2'
                >
                    <AddUserModalForm />
                    <footer>
                        <Flex gap="3" mt="4" justify="end">
                            <Dialog.Close>
                                <Button variant="soft" color="gray">
                                    Cancel
                                </Button>
                            </Dialog.Close>
                            <Dialog.Close>
                                <Button>Save</Button>
                            </Dialog.Close>
                        </Flex>
                    </footer>
                </SectionLayout>
            </Dialog.Content>
        </Dialog.Root>
  )
}
