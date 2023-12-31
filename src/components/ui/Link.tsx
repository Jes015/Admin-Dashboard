'use client'
import { globalLoaderStateService } from '@/components/GlobalLoader/services'
import { type BaseComponentProps } from '@/models'
import DefaultLink, { type LinkProps } from 'next/link'
import { forwardRef } from 'react'

interface Props extends BaseComponentProps, LinkProps {
}

export const Link: React.FC<Props> = forwardRef<HTMLAnchorElement, Props>(
  ({ children, href, className, ...props }, ref) => {
    const handleOnClick = () => {
      const linkPathname = href
      const actualPathname = location.pathname
      if (linkPathname === actualPathname) return
      globalLoaderStateService.sendMessage({ detail: true })
    }

    return (
      <DefaultLink
        onClick={handleOnClick}
        className={
          [
            'text-link underline',
            className
          ].join(' ')
        }
        {...{ props, href, ref }}
      >
        {children}
      </DefaultLink>
    )
  }
)

Link.displayName = 'Link'
