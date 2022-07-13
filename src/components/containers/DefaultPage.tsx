import { FCProps } from '@app/types/FCProps'
import { Navbar } from '@app/components/Navbar'
import { Flex, Box } from '@chakra-ui/react'

import Head from 'next/head'

interface DefaultPageProps extends FCProps {
  headTitle: string
}

export const DefaultPage = (props: DefaultPageProps) => {
  const { children, headTitle } = props
  return (
    <>
      <Head>
        <title>{headTitle}</title>
      </Head>
      <Navbar />
      <Flex width={'100%'} direction="column" justifyContent="center" alignItems={'center'}>
        <Box width={{ base: '90%', md: 1000 }} alignSelf="center">
          {children}
        </Box>
      </Flex>
    </>
  )
}
