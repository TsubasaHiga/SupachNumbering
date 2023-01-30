import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import ElementWait from '~/modules/ElementWait'

import SuperChatNumbering from './SuperChatNumbering'

export const RenderSuperChatNumbering = async () => {
  const element = await ElementWait('yt-live-chat-app')
  if (element) {
    const div = document.createElement('div')
    element.before(div)

    const root = createRoot(div)
    root.render(
      <StrictMode>
        <SuperChatNumbering />
      </StrictMode>
    )
  }
}
