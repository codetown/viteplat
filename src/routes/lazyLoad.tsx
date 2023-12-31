import PageLoading from '@/layouts/PageLoading'
import { Suspense } from 'react'

export default function lazyLoad(Component: React.LazyExoticComponent<() => JSX.Element>) {
  return (
    <Suspense fallback={<PageLoading />}>
      <Component />
    </Suspense>
  )
}
