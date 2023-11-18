import { inter } from '@/assets'
import { MainLayout } from '@/layouts'
import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Admin dashboard',
  description: 'manage your finances'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={[inter.className, 'dark'].join(' ')}>
        <Theme appearance="dark" accentColor="red" grayColor="mauve" radius="small">
          <MainLayout>
            {children}
          </MainLayout>
        </Theme>
      </body>
    </html>
  )
}
