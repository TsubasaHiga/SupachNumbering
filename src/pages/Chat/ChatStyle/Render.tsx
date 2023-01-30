import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import ElementWait from '~/modules/ElementWait'

import ChatStyle from './ChatStyle'

export const RenderChatStyle = async () => {
  const element = await ElementWait('body')
  if (element) {
    const div = document.createElement('div')
    element.firstChild?.before(div)

    const root = createRoot(div)
    root.render(
      <StrictMode>
        <ChatStyle />
      </StrictMode>
    )
  }
}
