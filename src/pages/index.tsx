import type { NextPage } from 'next'

import Head from 'next/head'
import Image from 'next/image'

import Landing from './landing'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <html lang="en" />
        <title>M. Rizki Aiman</title>
        <meta name="description" content="Software Engineer and Notion Creator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
    </div>
  )
}

export default Home
