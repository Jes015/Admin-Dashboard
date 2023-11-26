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
      let newVisibility: boolean | undefined

      if (typeof data?.detail === 'boolean') {
        newVisibility = data.detail
      }

      toggleLoaderVisibility(newVisibility)
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
