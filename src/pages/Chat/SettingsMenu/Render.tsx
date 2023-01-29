import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import ElementWait from '~/modules/ElementWait'

import SettingsMenu from './SettingsMenu'

export const RenderSettingsMenu = async () => {
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
