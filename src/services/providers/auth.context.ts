'use client'
import { defaultAuthContextState, type AuthContext } from '@/models'
import { createContext } from 'react'

export const authContext = createContext<AuthContext>(defaultAuthContextState)
