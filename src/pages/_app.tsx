import * as React from 'react'
import '../styles/globals.css'
import '@fontsource/inter'
import type { AppProps } from 'next/app'
import { GlobalContext } from '@app/utils/helpers/context'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@utils/theme'

import { Navbar } from '@components/Navbar'
import { RenderPageMotion } from '@components/containers/animations/RenderPageMotion'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <RenderPageMotion>
        {/* @ts-ignore */}
        <Component {...pageProps} />
      </RenderPageMotion>
    </ChakraProvider>
  )
}

export default MyApp
