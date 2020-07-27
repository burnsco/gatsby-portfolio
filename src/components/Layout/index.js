/** @jsx jsx */
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import { ScrollingProvider } from 'react-scroll-section'

const Layout = ({ children }) => (
  <main
    sx={{
      '*,\n  *:before,\n  *:after': {
        boxSizing: 'border-box',
        WebkitBoxSizing: 'border-box',
        MozBoxSizing: 'border-box',
      },
      display: 'flex',
      flexDirection: 'column',
      scrollBehavior: 'smooth',
      justifyContent: 'center',
      webkitFontSmoothing: 'antialiased',
      mozOsxFontSmoothing: 'grayscale',
      MsTextSizeAdjust: '100%',
      WebkitTextSizeAdjust: '100%',
      WebkitTapHighlightColor: 'rgba(0,0,0,0)',
      textRendering: 'optimizeLegibility',
      overflowX: 'hidden',
      wordWrap: 'break-word',
      fontKerning: 'normal',
      mozFontFeatureSettings: ['case', 1, 'rlig', 1, 'calt', 0],
      msFontFeatureSettings: ['case', 1, 'rlig', 1, 'calt', 0],
      webkitFontFeatureSettings: ['case', 1, 'rlig', 1, 'calt', 0],
      fontFeatureSettings: ['case', 1, 'rlig', 1, 'calt', 0],
      minWidth: '100%',
      minHeight: '100vh',
    }}
  >
    <ScrollingProvider>{children}</ScrollingProvider>
  </main>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
