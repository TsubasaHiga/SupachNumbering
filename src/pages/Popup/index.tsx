import './index.scss'
import 'ress/dist/ress.min.css'

import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Popup from './Popup'

const rootElement = document.getElementById('app-container')
if (rootElement) {
  const root = createRoot(rootElement)

  root.render(
    <StrictMode>
      <Popup />
    </StrictMode>
  )
}
