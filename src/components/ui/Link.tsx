import DefaultLink, { type LinkProps } from 'next/link'
import { forwardRef } from 'react'

interface Props extends LinkProps {
  children: React.ReactNode
  className?: string
}

export const Link: React.FC<Props> = forwardRef<HTMLAnchorElement, Props>(
  ({ children, href, className, ...props }, ref) => {
    return (
      <DefaultLink
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
