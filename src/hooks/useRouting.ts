'use client'
import { globalLoaderStateService } from '@/components/GlobalLoader/services'
import { usePathname, useRouter } from 'next/navigation'

export const useRouting = () => {
  const currentPathname = usePathname()
  const navigation = useRouter()

  const goBack = () => {
    navigation.back()
    globalLoaderStateService.sendMessage({ detail: true })
  }
  const goForward = () => {
    navigation.forward()
  }

  const currentPathnameFormatted = currentPathname.slice(1)

  return { currentPathname, currentPathnameFormatted, goBack, goForward }
}
