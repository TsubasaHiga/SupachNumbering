import elementReady from 'element-ready'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import define from '~/const/define'

import SettingsMenu from '../components/SettingsMenu/SettingsMenu'

const SettingsRender = async () => {
  const element = await elementReady('#overflow', define.ELEMENT_READY_OPTIONS)

  try {
    if (element) {
      const div = document.createElement('div')
      element.before(div)

      const root = createRoot(div)
      root.render(
        <StrictMode>
          <SettingsMenu />
        </StrictMode>
      )
    } else {
      throw new SyntaxError()
    }
  } catch (error) {
    console.error(error)
  }
}

export default SettingsRender
