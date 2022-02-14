import React from 'react'
import { render } from 'react-dom'
import Content from './Content'

const insertWrapElement = document.querySelector('#example')

if (insertWrapElement) {
  console.log('content script')

  const div = document.createElement('div')

  insertWrapElement.firstChild.before(div)

  render(<Content />, div)
}
