'use client'
import { useRouting } from '@/hooks'
import { sideBarSections } from '@/layouts/MainLayout/components/SideBar/models'
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
                    <div
                      className={
                        [
                          '[font-weight:500] text-sm flex items-center gap-2 p-3 rounded-md [transition:background_ease_0.3s] hover:[transition:background_ease_0.2s]',
                          currentPathname === route.path ? 'bg-backgroundCurrent hover:bg-backgroundCurrentHover' : 'hover:bg-backgroundHover'
                        ].join(' ')
                      }
                    >
                      <route.Icon className='text-icon' />
                      {route.name}
                    </div>
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
