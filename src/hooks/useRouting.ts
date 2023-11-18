'use client'
import { usePathname } from 'next/navigation'

export const useRouting = () => {
  const currentPathname = usePathname()

  const currentPathnameFormatted = currentPathname.slice(1)

  return { currentPathname, currentPathnameFormatted }
}
