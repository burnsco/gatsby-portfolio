/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui'
import theme from './index'

export const wrapRootElement = ({ element }) =>
  jsx(
    ThemeProvider,
    {
      theme,
    },
    element
  )
