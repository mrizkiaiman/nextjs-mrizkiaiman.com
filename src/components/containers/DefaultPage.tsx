import { FCProps } from '@app/types/FCProps'
import { Navbar } from '@app/components/Navbar'
import { Flex, Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'

import Head from 'next/head'

interface DefaultPageProps extends FCProps {
  headTitle: string
}

export const DefaultPage = (props: DefaultPageProps) => {
  const { children, headTitle } = props

  const isHomeOrAboutPage = headTitle === 'M. Rizki Aiman' || headTitle === 'M. Rizki Aiman - About'

  return (
    <>
      <Head>
        <title>{headTitle}</title>
      </Head>
      {isHomeOrAboutPage ? (
        <Flex width={'100%'} direction="column" justifyContent="center" alignItems={'center'}>
          <Box width={{ base: '90%', md: 1000 }} alignSelf="center">
            {children}
          </Box>
        </Flex>
      ) : (
        <motion.div animate={{ y: [120, 0], opacity: [0.6, 1] }} transition={{ ease: 'backOut', duration: 1.5 }}>
          <Flex width={'100%'} direction="column" justifyContent="center" alignItems={'center'}>
            <Box width={{ base: '90%', md: 1000 }} alignSelf="center">
              {children}
            </Box>
          </Flex>
        </motion.div>
      )}
    </>
  )
}

export default DefaultPage
