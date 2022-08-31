import React from 'react'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import Content from './Content'

const insertWrapElement = document.querySelector('body')

if (insertWrapElement) {
  console.log('content script')

  const div = document.createElement('div')
  insertWrapElement.firstChild.before(div)

  const root = createRoot(div)
  root.render(
    <StrictMode>
      <Content />
    </StrictMode>
  )
}
