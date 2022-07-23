import * as React from 'react'
import '../styles/globals.css'
import '@fontsource/inter'
import type { AppProps } from 'next/app'
import { GlobalContext } from '@app/utils/helpers/context'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@utils/theme'

import { Loader } from '@components/Loader'
import { Navbar } from '@components/Navbar'
import { RenderPageMotion } from '@components/containers/animations/RenderPageMotion'

function MyApp({ Component, pageProps }: AppProps) {
  const [alreadyLoad, setAlreadyLoad] = React.useState<boolean>(false)

  React.useEffect(() => {
    setTimeout(() => {
      setAlreadyLoad(true)
    }, 9900)
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <GlobalContext.Provider value={{ alreadyLoad, setAlreadyLoad }}>
        {alreadyLoad ? (
          <>
            <Navbar />
            <RenderPageMotion>
              {/* @ts-ignore */}
              <Component {...pageProps} />
            </RenderPageMotion>
          </>
        ) : (
          <Loader />
        )}
      </GlobalContext.Provider>
    </ChakraProvider>
  )
}

export default MyApp
