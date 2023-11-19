import DefaultLink, { type LinkProps } from 'next/link'

interface Props extends LinkProps {
  children: React.ReactNode
  className?: string
}

export const Link: React.FC<Props> = ({ children, href, className, ...props }) => {
  return (
        <DefaultLink
            className={
                [
                  'text-link underline',
                  className
                ].join(' ')
            }
            {...{ props, href }}
        >
            {children}
        </DefaultLink>
  )
}

