import type { NextPage } from 'next'
import Head from 'next/head'

import Landing from './landing'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>M. Rizki Aiman</title>
        <meta lang="en" name="description" content="Software Engineer and Notion Creator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
    </div>
  )
}

export default Home
