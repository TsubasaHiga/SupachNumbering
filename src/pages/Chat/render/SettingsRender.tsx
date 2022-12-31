import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import ElementWait from '~/modules/ElementWait'

import SettingsMenu from '../components/SettingsMenu/SettingsMenu'

const SettingsRender = async () => {
  const element = await ElementWait('#overflow')
  if (element) {
    const div = document.createElement('div')
    element.before(div)

    const root = createRoot(div)
    root.render(
      <StrictMode>
        <SettingsMenu />
      </StrictMode>
    )
  }
}

export default SettingsRender
