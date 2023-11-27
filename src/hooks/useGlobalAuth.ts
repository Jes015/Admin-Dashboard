'use client'
import { authContext } from '@/services/providers'
import { useContext } from 'react'

export const useGlobalAuth = () => useContext(authContext)
