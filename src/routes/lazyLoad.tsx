import PageLoading from '@/layouts/components/PageLoading'
import { Suspense } from 'react'

export default function lazyLoad(Component: React.LazyExoticComponent<() => React.ReactNode>) {
  return (
    <Suspense fallback={<PageLoading />}>
      <Component />
    </Suspense>
  )
}
