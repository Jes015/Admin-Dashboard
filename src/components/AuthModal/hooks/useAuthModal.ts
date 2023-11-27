import { useState } from 'react'
import { authModalType, type AuthModalType } from '../models'

export const useAuthModal = () => {
  const [authModal, setAuthModalType] = useState<AuthModalType>(authModalType.signIn)

  const toggleAuthModalType = (newModalType?: AuthModalType) => {
    if (newModalType == null) {
      newModalType = contraryAuthModal
    }
    setAuthModalType(newModalType)
  }

  const contraryAuthModal: AuthModalType = authModal === 'Sign in' ? 'Sign up' : 'Sign in'

  return { authModal, toggleAuthModalType, contraryAuthModal }
}
