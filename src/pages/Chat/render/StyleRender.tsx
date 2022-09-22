import elementReady from 'element-ready'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import define from '~/const/define'

import Chat from '../Chat'

const StyleRender = async () => {
  const element = await elementReady('body', define.ELEMENT_READY_OPTIONS)

  try {
    if (element) {
      const div = document.createElement('div')
      element.firstChild?.before(div)

      const root = createRoot(div)
      root.render(
        <StrictMode>
          <Chat />
        </StrictMode>
      )
    } else {
      throw new SyntaxError()
    }
  } catch (error) {
    console.error(error)
  }
}

export default StyleRender
