import { GlobalLoader } from '@/components/GlobalLoader/GlobalLoader'
import dynamic from 'next/dynamic'
const AuthModal = dynamic(
  () => import('@/components/AuthModal/AuthModal').then(module => ({ default: module.AuthModal })),
  { ssr: false }
)

export const GlobalComponents = () => {
  return (
    <div>
      <GlobalLoader />
      <AuthModal />
    </div>
  )
}
