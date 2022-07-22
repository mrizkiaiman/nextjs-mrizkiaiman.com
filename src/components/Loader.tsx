import { Center } from '@chakra-ui/react'
import Head from 'next/head'

import Lottie from 'react-lottie'
import * as Animation from '../../public/loading/main.json'

export const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
    speed: 2,
  }

  return (
    <>
      <Head>
        <title>M. Rizki Aiman</title>
      </Head>
      <Center height={'100vh'}>
        <Lottie speed={2} options={defaultOptions} height={320} width={320} />
      </Center>
    </>
  )
}

export default Loader
