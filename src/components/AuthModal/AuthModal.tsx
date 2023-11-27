'use client'
import { useGlobalAuth } from '@/hooks'
import { Button } from '@radix-ui/themes'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { FormSignIn, FormSignUp } from './components'
import { useAuthModal } from './hooks'
const Modal = dynamic(async () => await import('@/components/ui/Modal/Modal'))
const ModalContent = dynamic(async () => await import('@/components/ui/Modal/Modal').then(module => ({ default: module.default.Content })))

export const AuthModal = () => {
  const { isAuth } = useGlobalAuth()
  const { authModal, toggleAuthModalType, contraryAuthModal } = useAuthModal()

  const handleOnClickForToggleModalType = () => {
    toggleAuthModalType()
  }

  return (
    <Suspense>
      {
        !isAuth &&
        (
          <Modal isOpen>
            <ModalContent
              displayCloseButton={false}
              sectionLayout={{
                title: authModal,
                headerButton: (
                  <div className='flex items-center gap-1 text-xs'>
                    <Button
                      color='indigo'
                      variant='ghost'
                      size='1'
                      className='hover:bg-transparent hover:underline !cursor-pointer outline-none focus:outline-none focus-within:outline'
                      aria-label={`Change auth method to ${contraryAuthModal}`}
                      onClick={handleOnClickForToggleModalType}
                    >
                      {contraryAuthModal}
                    </Button>
                  </div>
                )
              }}
              className='!max-w-[340px]'
            >
              {
                authModal === 'Sign in'
                  ? (
                  <FormSignIn />
                    )
                  : (
                  <FormSignUp />
                    )
              }

            </ModalContent>
          </Modal >
        )
      }
    </Suspense >
  )
}
