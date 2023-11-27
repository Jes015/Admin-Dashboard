import { inter } from '@/assets'
import { MainLayout } from '@/layouts'
import { type BaseComponentType } from '@/models'
import { AuthProvider } from '@/services/providers'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Admin dashboard',
  description: 'manage your finances'
}

const RootLayout: BaseComponentType = ({ children }) => {
  return (
    <html lang="en">
      <body className={[inter.className, 'dark'].join(' ')}>
        <AuthProvider>
          <MainLayout>
            {children}
          </MainLayout>
        </AuthProvider>
      </body>
    </html>
  )
}

export default RootLayout
