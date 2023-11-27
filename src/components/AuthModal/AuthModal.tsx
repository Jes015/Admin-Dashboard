'use client'
import { useGlobalAuth } from '@/hooks'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
const Modal = dynamic(async () => await import('@/components/ui/Modal/Modal'))
const ModalContent = dynamic(async () => await import('@/components/ui/Modal/Modal').then(module => ({ default: module.default.Content })))

export const AuthModal = () => {
  const { isAuth } = useGlobalAuth()

  return (
    <Suspense>
        {
          !isAuth &&
          (
            <Modal isOpen>
              <ModalContent
                displayCloseButton={false}
                sectionLayout={{
                  title: 'Sign in'
                }}
              >
                hola sign in
              </ModalContent>
            </Modal >
          )
        }
      </Suspense >
  )
}
