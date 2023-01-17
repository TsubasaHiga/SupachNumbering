import { useEffect } from 'react'

import { useSettingsStore } from '~/store/atoms/useSettingsStore'
import { SettingsType } from '~/types/SettingsType'

import StyleExpandChatHeight from './styleFunctions/StyleExpandChatHeight'

const inlineStyleElement = document.createElement('style')
inlineStyleElement.type = 'text/css'
inlineStyleElement.id = 'supach-numbering-style'

const Content = (): null => {
  const [settings] = useSettingsStore()
  const { isExpandChatHeight }: SettingsType = settings

  // スタイル追加
  useEffect(() => {
    inlineStyleElement.innerText = ''

    // チャット欄の高さを拡張
    if (isExpandChatHeight) {
      const headerElement = document.querySelector('#masthead-container')
      const headerH = headerElement ? headerElement.clientHeight : 0
      console.log({ headerH })
      inlineStyleElement.innerText += StyleExpandChatHeight(headerH)
    }

    console.log('スタイル追加')
    console.log({ inlineStyleElement })

    // headに追加
    document.querySelector('head')?.appendChild(inlineStyleElement)
  }, [isExpandChatHeight])

  return null
}

export default Content
