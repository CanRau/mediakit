// @refresh reload
import './root.css'
import { Suspense } from 'solid-js'
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
  Link,
} from 'solid-start'
import { queryClient, trpc } from './utils/trpc'
import { QueryClientProvider } from '@tanstack/solid-query'

export default function Root() {
  return (
    <Html lang='en'>
      <Head>
        <Title>Create JD App</Title>
        <Meta charset='utf-8' />
        <Meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta name='theme-color' content='#026d56' />
        <Meta name='description' content='Generated by create-jd-app' />
        <Link rel='icon' href='/favicon.ico' />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            {' '}
            <QueryClientProvider client={queryClient}>
              <trpc.Provider queryClient={queryClient}>
                <Routes>
                  <FileRoutes />
                </Routes>
              </trpc.Provider>
            </QueryClientProvider>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  )
}
