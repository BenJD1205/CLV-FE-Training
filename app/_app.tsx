// import React from 'react';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// type MyAppProps = {
//   Component: React.FC;
//   pageProps: any;
// }

// export default function MyApp({ Component, pageProps }:MyAppProps) {
//   const [queryClient] = React.useState(
//     () =>
//       new QueryClient({
//         defaultOptions: {
//           queries: {
//             // With SSR, we usually want to set some default staleTime
//             // above 0 to avoid refetching immediately on the client
//             staleTime: 60 * 1000,
//           },
//         },
//       }),
//   )

//   return (
//     <QueryClientProvider client={queryClient}>
//       <Component {...pageProps} />
//     </QueryClientProvider>
//   )
// }

import React from 'react'
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


type MyAppProps = {
  Component: React.FC;
  pageProps: any;
}

export default function MyApp({ Component, pageProps }: MyAppProps) {
  const [queryClient] = React.useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </HydrationBoundary>
    </QueryClientProvider>
  )
}