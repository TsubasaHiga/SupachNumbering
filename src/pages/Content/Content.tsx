import { useEffect } from 'react'

import { useSettingsStore } from '~/store/atoms/useSettingsStore'

import AddChatAvatarBlur from './styleFunctions/AddChatAvatarBlur'
import AddSuperChatAvatarBlur from './styleFunctions/AddSuperChatAvatarBlur'
import AddSuperChatNumbering from './styleFunctions/AddSuperChatNumbering'
import ChangeChatFontSize from './styleFunctions/ChangeChatFontSize'
import ExpandChatHeight from './styleFunctions/ExpandChatHeight'
import HideChatAvatar from './styleFunctions/HideChatAvatar'
import HideSuperChatAvatar from './styleFunctions/HideSuperChatAvatar'
import HideSuperChatPrice from './styleFunctions/HideSuperChatPrice'
import ShrinkChatMessage from './styleFunctions/ShrinkChatMessage'
import WrapSuperChat from './styleFunctions/WrapSuperChat'

const Content = (): JSX.Element | null => {
  const [settings] = useSettingsStore()
  const {
    isAddSuperChatNumbering,
    isWrapSuperChat,
    isHideSuperChatPrice,
    isHideSuperChatAvatar,
    isAddSuperChatAvatarBlur,
    isHideChatAvatar,
    isAddChatAvatarBlur,
    isShrinkChatMessage,
    isExpandChatHeight,
    isChangeChatFontSize,
    valueChatFontSize,
  } = settings

  const inlineStyleElement = document.createElement('style')
  inlineStyleElement.type = 'text/css'
  inlineStyleElement.className = 'supach-numbering'

  useEffect(() => {
    const head = document.querySelector('head')
    const isExistenceElement = head?.querySelector('.supach-numbering')

    // 既に追加されている場合は駆除
    if (isExistenceElement) {
      console.log('スタイル削除')
      head?.removeChild(isExistenceElement)
    }

    // スーパーチャットにナンバリングを追加
    if (isAddSuperChatNumbering) {
      inlineStyleElement.innerText += AddSuperChatNumbering()
    }

    // スーパーチャットを全て表示
    if (isWrapSuperChat) {
      inlineStyleElement.innerText += WrapSuperChat()
    }

    // スーパーチャットの金額を非表示
    if (isHideSuperChatPrice) {
      inlineStyleElement.innerText += HideSuperChatPrice()
    }

    // ユーザーアバター画像（スーパーチャット内のみ）の非表示
    if (isHideSuperChatAvatar) {
      inlineStyleElement.innerText += HideSuperChatAvatar()
    }

    // ユーザーアバター画像（スーパーチャット内のみ）にモザイクを追加
    if (isAddSuperChatAvatarBlur) {
      inlineStyleElement.innerText += AddSuperChatAvatarBlur()
    }

    // ユーザーアバター画像（チャット内のみ）の非表示
    if (isHideChatAvatar) {
      inlineStyleElement.innerText += HideChatAvatar()
    }

    // ユーザーアバター画像（チャット内のみ）にモザイクを追加
    if (isAddChatAvatarBlur) {
      inlineStyleElement.innerText += AddChatAvatarBlur()
    }

    // チャット欄のメッセージ間隔を狭める
    if (isShrinkChatMessage) {
      inlineStyleElement.innerText += ShrinkChatMessage()
    }

    // チャット欄の高さを拡張
    if (isExpandChatHeight) {
      const headerElement = document.querySelector('#masthead-container')
      const headerH = headerElement ? headerElement.clientHeight : 0
      console.log(headerH)
      inlineStyleElement.innerText += ExpandChatHeight(headerH)
    }

    // チャット欄のフォントサイズを変更
    if (isChangeChatFontSize) {
      inlineStyleElement.innerText += ChangeChatFontSize(valueChatFontSize)
    }

    console.log('スタイル追加')
    console.log(inlineStyleElement.innerText)

    // headに追加
    head?.appendChild(inlineStyleElement)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    isAddSuperChatNumbering,
    isWrapSuperChat,
    isHideSuperChatPrice,
    isHideSuperChatAvatar,
    isAddSuperChatAvatarBlur,
    isHideChatAvatar,
    isAddChatAvatarBlur,
    isShrinkChatMessage,
    isExpandChatHeight,
    isChangeChatFontSize,
    valueChatFontSize,
  ])

  return null
}

export default Content
