import { useEffect } from 'react'

import { useSettingsStore } from '~/store/atoms/useSettingsStore'
import { SettingsType } from '~/types/SettingsType'

import SettingsMenu from './components/SettingsMenu/SettingsMenu'
import StyleAddChatAvatarBlur from './styleFunctions/StyleAddChatAvatarBlur'
import StyleAddSuperChatAvatarBlur from './styleFunctions/StyleAddSuperChatAvatarBlur'
import StyleAddSuperChatNumbering from './styleFunctions/StyleAddSuperChatNumbering'
import StyleChangeChatFontSize from './styleFunctions/StyleChangeChatFontSize'
import StyleHideAuthorName from './styleFunctions/StyleHideAuthorName'
import StyleHideChatAvatar from './styleFunctions/StyleHideChatAvatar'
import StyleHideSuperChatAvatar from './styleFunctions/StyleHideSuperChatAvatar'
import StyleHideSuperChatPrice from './styleFunctions/StyleHideSuperChatPrice'
import StyleShrinkChatMessage from './styleFunctions/StyleShrinkChatMessage'
import StyleWrapSuperChat from './styleFunctions/StyleWrapSuperChat'
import AddSuperChatNumbering from './voidFunctions/AddSuperChatNumbering/AddSuperChatNumbering'

const inlineStyleElement = document.createElement('style')
inlineStyleElement.type = 'text/css'
inlineStyleElement.id = 'supach-numbering-chat-style'

const Chat = (): JSX.Element => {
  const [settings] = useSettingsStore()
  const {
    isAddSuperChatNumbering,
    numberingType,
    uniqueNumberingStringLength,
    isWrapSuperChat,
    valueWrapSuperChatMaxHeight,
    isHideSuperChatPrice,
    isHideSuperChatAvatar,
    isAddSuperChatAvatarBlur,
    isHideChatAvatar,
    isAddChatAvatarBlur,
    isHideAuthorName,
    isShrinkChatMessage,
    isChangeChatFontSize,
    valueChatFontSize,
  }: SettingsType = settings

  // スタイル追加
  useEffect(() => {
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
      const maxHeight = (containerH * valueWrapSuperChatMaxHeight) / 100
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

    console.log('スタイル追加')
    console.log({ inlineStyleElement })

    // headに追加
    document.querySelector('head')?.appendChild(inlineStyleElement)
  }, [
    isAddSuperChatNumbering,
    numberingType,
    isWrapSuperChat,
    valueWrapSuperChatMaxHeight,
    isHideSuperChatPrice,
    isHideSuperChatAvatar,
    isAddSuperChatAvatarBlur,
    isHideChatAvatar,
    isAddChatAvatarBlur,
    isHideAuthorName,
    isShrinkChatMessage,
    isChangeChatFontSize,
    valueChatFontSize,
  ])

  return (
    <>
      {
        // isAddSuperChatNumberingがtrue且つ
        // ナンバリング方式に'uniqueId', 'uniqueUserName'を選択している時のみレンダリング
        isAddSuperChatNumbering &&
          ['uniqueId', 'uniqueUserName'].includes(numberingType) && (
            <>
              <SettingsMenu />
              <AddSuperChatNumbering
                stringLength={uniqueNumberingStringLength}
                numberingType={numberingType}
              />
            </>
          )
      }
    </>
  )
}

export default Chat
