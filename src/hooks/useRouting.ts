'use client'
import { usePathname, useRouter } from 'next/navigation'

export const useRouting = () => {
  const currentPathname = usePathname()
  const navigation = useRouter()

  const goBack = () => {
    navigation.back()
  }
  const goForward = () => {
    navigation.forward()
  }

  const currentPathnameFormatted = currentPathname.slice(1)

  return { currentPathname, currentPathnameFormatted, goBack, goForward }
}
