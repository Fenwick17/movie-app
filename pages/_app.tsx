import '@/styles/globals.css'
import '@/styles/grid.css';
import '@/styles/movie-list.css'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
