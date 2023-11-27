'use client'
import { defaultAuthContextState, type BaseComponentType } from '@/models'
import { authContext } from './auth.context'


export const AuthProvider: BaseComponentType = ({ children }) => {
  return (
    <authContext.Provider
        value={defaultAuthContextState}
    >
        {children}
    </authContext.Provider>
  )
}
