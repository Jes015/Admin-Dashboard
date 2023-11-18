'use client'
import { useRouting } from '@/hooks'
import { sideBarSections } from '@/layouts/MainLayout/components/SideBar/models'
import { Box } from '@radix-ui/themes'
import Link from 'next/link'

export const SideBarContent = () => {
  const { currentPathname } = useRouting()

  return (
    <div>
      {
        sideBarSections.map((section) => (
          <>
            <span className='text-tsecondary text-xs font-bold'>{section.title}</span>
            <ul>
              {section.routes.map((route) => (
                <li key={route.name}>
                  <Link href={route.path}>
                    <Box
                      className={
                        [
                          '[transition:background_ease_0.3s]',
                          'text-sm flex items-center gap-2 p-3 rounded-md hover:[transition:background_ease_0.2s]',
                          currentPathname === route.path ? 'bg-backgroundCurrentLink hover:bg-backgroundCurrentLinkHover' : 'hover:bg-backgroundHoverLink'
                        ].join(' ')
                      }
                    >
                      <route.Icon />
                      {route.name}
                    </Box>
                  </Link>
                </li>
              ))}
            </ul>
          </>
        ))
      }
    </div>
  )
}
