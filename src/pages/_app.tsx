import * as React from 'react'
import '../styles/globals.css'
import '@fontsource/inter'
import type { AppProps } from 'next/app'
import { GlobalContext } from '@app/utils/helpers/context'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@utils/theme'

import { Loader } from '@components/Loader'
import { Navbar } from '@components/Navbar'
import { motion } from 'framer-motion'

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
            <motion.div animate={{ y: [80, 0], opacity: [0.5, 1] }} transition={{ ease: 'easeInOut', duration: 2 }}>
              {/* @ts-ignore */}
              <Component {...pageProps} />
            </motion.div>
          </>
        ) : (
          <Loader />
        )}
      </GlobalContext.Provider>
    </ChakraProvider>
  )
}

export default MyApp
