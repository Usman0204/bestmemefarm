import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap-libs/uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kanit', sans-serif;
  }
  body {
    background-image:url('/images/background.png') ;
    background-size:contain;
    //background-repeat:no-repeat;
    height:100vh
    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
