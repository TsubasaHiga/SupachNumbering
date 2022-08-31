import React from 'react'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import Popup from './Popup'
import './index.scss'
import 'ress'

const rootElement = document.getElementById('app-container')
const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <Popup />
  </StrictMode>
)
