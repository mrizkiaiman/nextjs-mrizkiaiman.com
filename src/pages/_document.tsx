import { Html, Head, Main, NextScript } from 'next/document'
import { PIRSCH_CODE } from '@app/_config'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <script defer type="text/javascript" src="https://api.pirsch.io/pirsch.js" id="pirschjs" data-code={PIRSCH_CODE}></script>
      </body>
    </Html>
  )
}
