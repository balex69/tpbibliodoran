import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Nav from "@/components/Nav/Nav";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <>
          <Nav />
          <Component {...pageProps} />
      </>

  )
}
