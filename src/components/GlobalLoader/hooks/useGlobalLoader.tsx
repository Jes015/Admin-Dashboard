'use client'
import { globalLoaderStateService } from '@/components/GlobalLoader/services'
import { useOnPageLoad } from '@/hooks'
import { useEffect, useState } from 'react'

const defaultValues = {
  modalOpen: false
}

export const useGlobalLoader = () => {
  const [isLoaderVisible, setIsLoaderVisible] = useState(defaultValues.modalOpen)

  useOnPageLoad(() => {
    setIsLoaderVisible(false)
  })


  useEffect(() => {
    globalLoaderStateService.listenEvent((data) => {
      if (typeof data?.detail === 'boolean') {
        toggleLoaderVisibility(data.detail)
      }
    })

    return () => {
      globalLoaderStateService.removeEvent()
    }
  }, [])

  const toggleLoaderVisibility = (newState?: boolean) => {
    setIsLoaderVisible(prevState => newState ?? !prevState)
  }

  return { isLoaderVisible }
}
