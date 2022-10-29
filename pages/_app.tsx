import { createTheme, NextUIProvider } from '@nextui-org/react'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import '../initializers/firebase'
import { HeaderMenu } from '../components/HeaderMenu'

const theme = createTheme({
  type: 'dark', // it could be "light" or "dark"
  theme: {
    colors: {
      gradient:
        'linear-gradient(90deg, $blue600 -25%, $blue800 -10%, $purple700 80%)',
    },
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={theme}>
      <HeaderMenu></HeaderMenu>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp
