import elementReady from 'element-ready'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import define from '~/const/define'

import SuperChatNumbering from '../SuperChatNumbering'

const SuperChatNumberingRender = async () => {
  const element = await elementReady(
    'yt-live-chat-app',
    define.ELEMENT_READY_OPTIONS
  )

  try {
    if (element) {
      const div = document.createElement('div')
      element.before(div)

      const root = createRoot(div)
      root.render(
        <StrictMode>
          <SuperChatNumbering />
        </StrictMode>
      )
    } else {
      throw new SyntaxError()
    }
  } catch (error) {
    console.error(error)
  }
}

export default SuperChatNumberingRender
