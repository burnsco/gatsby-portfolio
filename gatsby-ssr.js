import { jsx, InitializeColorMode } from 'theme-ui'

export { wrapRootElement } from './src/theme/provider'

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([jsx(InitializeColorMode, { key: 'theme-ui-no-flash' })])
}
