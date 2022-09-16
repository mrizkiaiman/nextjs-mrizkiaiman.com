import { Html, Head, Main, NextScript } from 'next/document'
import { PIRSCH_CODE } from '@app/_config'

import { SEO } from '@components/containers/SEO'
import { SEO_CONTENT_LANDING } from '@app/_config'

export default function Document() {
  return (
    <Html>
      <Head />
      <SEO title={SEO_CONTENT_LANDING.title} description={SEO_CONTENT_LANDING.description} keywords={SEO_CONTENT_LANDING.keywords} />
      <body>
        <Main />
        <NextScript />
        <script defer type="text/javascript" src="https://api.pirsch.io/pirsch.js" id="pirschjs" data-code={PIRSCH_CODE}></script>
      </body>
    </Html>
  )
}
