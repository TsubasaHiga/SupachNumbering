import { useEffect } from 'react'

import { useSettingsStore } from '~/store/atoms/useSettingsStore'
import { SettingsType } from '~/types/SettingsType'

import StyleAddChatAvatarBlur from './styleFunctions/StyleAddChatAvatarBlur'
import StyleAddEvenCommentBackgroundColor from './styleFunctions/StyleAddEvenCommentBackgroundColor'
import StyleAddSuperChatAvatarBlur from './styleFunctions/StyleAddSuperChatAvatarBlur'
import StyleAddSuperChatNumbering from './styleFunctions/StyleAddSuperChatNumbering'
import StyleChangeChatFontSize from './styleFunctions/StyleChangeChatFontSize'
import StyleHideAuthorName from './styleFunctions/StyleHideAuthorName'
import StyleHideChatAvatar from './styleFunctions/StyleHideChatAvatar'
import StyleHideSuperChatAvatar from './styleFunctions/StyleHideSuperChatAvatar'
import StyleHideSuperChatPrice from './styleFunctions/StyleHideSuperChatPrice'
import StyleHideSuperChatSponsorTicker from './styleFunctions/StyleHideSuperChatSponsorTicker'
import StyleShrinkChatMessage from './styleFunctions/StyleShrinkChatMessage'
import StyleWrapSuperChat from './styleFunctions/StyleWrapSuperChat'

const inlineStyleElement = document.createElement('style')
inlineStyleElement.type = 'text/css'
inlineStyleElement.id = 'supach-numbering-chat-style'

const ChatStyle = (): null => {
  const [settings] = useSettingsStore()
  const {
    isEnableAll,
    isAddSuperChatNumbering,
    numberingType,
    isWrapSuperChat,
    valueWrapSuperChatMaxHeight,
    isHideSuperChatPrice,
    isHideSuperChatAvatar,
    isAddSuperChatAvatarBlur,
    isHideSuperChatSponsorTicker,
    isHideChatAvatar,
    isAddChatAvatarBlur,
    isHideAuthorName,
    isShrinkChatMessage,
    isChangeChatFontSize,
    valueChatFontSize,
    isAddEvenCommentBackgroundColor
  }: SettingsType = settings

  // スタイル追加
  useEffect(() => {
    if (!isEnableAll) {
      console.log('スタイル削除')
      inlineStyleElement.innerText = ''
      return
    }

    inlineStyleElement.innerText = ''

    // スーパーチャットにナンバリングを追加
    if (isAddSuperChatNumbering) {
      inlineStyleElement.innerText += StyleAddSuperChatNumbering(numberingType)
    }

    // スーパーチャットを全て表示
    if (isWrapSuperChat) {
      const containerElement = document.querySelector('#content-pages')
      const containerH = containerElement ? containerElement.clientHeight : 0
      // containerHをvalueWrapSuperChatMaxHeightの割合で計算
      const maxHeight = (containerH * valueWrapSuperChatMaxHeight) / 100 - 100
      console.log({ containerH, maxHeight })
      inlineStyleElement.innerText += StyleWrapSuperChat(maxHeight)
    }

    // スーパーチャットの金額を非表示
    if (isHideSuperChatPrice) {
      inlineStyleElement.innerText += StyleHideSuperChatPrice()
    }

    // ユーザーアバター画像（スーパーチャット内のみ）の非表示
    if (isHideSuperChatAvatar) {
      inlineStyleElement.innerText += StyleHideSuperChatAvatar()
    }

    // ユーザーアバター画像（スーパーチャット内のみ）にモザイクを追加
    if (isAddSuperChatAvatarBlur) {
      inlineStyleElement.innerText += StyleAddSuperChatAvatarBlur()
    }

    // スーパーチャットのスポンサーティッカーを非表示
    if (isHideSuperChatSponsorTicker) {
      inlineStyleElement.innerText += StyleHideSuperChatSponsorTicker()
    }

    // ユーザーアバター画像（チャット内のみ）の非表示
    if (isHideChatAvatar) {
      inlineStyleElement.innerText += StyleHideChatAvatar()
    }

    // ユーザーアバター画像（チャット内のみ）にモザイクを追加
    if (isAddChatAvatarBlur) {
      inlineStyleElement.innerText += StyleAddChatAvatarBlur()
    }

    // ユーザー名を非表示
    if (isHideAuthorName) {
      inlineStyleElement.innerText += StyleHideAuthorName()
    }

    // チャット欄のメッセージ間隔を狭める
    if (isShrinkChatMessage) {
      inlineStyleElement.innerText += StyleShrinkChatMessage()
    }

    // チャット欄のフォントサイズを変更
    if (isChangeChatFontSize) {
      inlineStyleElement.innerText += StyleChangeChatFontSize(valueChatFontSize)
    }

    // チャット欄の偶数コメントに背景色を追加
    if (isAddEvenCommentBackgroundColor) {
      inlineStyleElement.innerText += StyleAddEvenCommentBackgroundColor()
    }

    console.log('スタイル追加')
    console.log({ inlineStyleElement })

    // headに追加
    document.querySelector('head')?.appendChild(inlineStyleElement)
  }, [
    isEnableAll,
    isAddSuperChatNumbering,
    numberingType,
    isWrapSuperChat,
    valueWrapSuperChatMaxHeight,
    isHideSuperChatPrice,
    isHideSuperChatAvatar,
    isAddSuperChatAvatarBlur,
    isHideSuperChatSponsorTicker,
    isHideChatAvatar,
    isAddChatAvatarBlur,
    isHideAuthorName,
    isShrinkChatMessage,
    isChangeChatFontSize,
    valueChatFontSize,
    isAddEvenCommentBackgroundColor
  ])

  return null
}

export default ChatStyle
