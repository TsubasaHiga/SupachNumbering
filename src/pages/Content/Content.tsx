import { useEffect } from 'react'

import { useSettingsStore } from '~/store/atoms/useSettingsStore'
import { SettingsType } from '~/types/SettingsType'

import StyleAddChatAvatarBlur from './styleFunctions/StyleAddChatAvatarBlur'
import StyleAddSuperChatAvatarBlur from './styleFunctions/StyleAddSuperChatAvatarBlur'
import StyleAddSuperChatNumbering from './styleFunctions/StyleAddSuperChatNumbering'
import StyleChangeChatFontSize from './styleFunctions/StyleChangeChatFontSize'
import StyleExpandChatHeight from './styleFunctions/StyleExpandChatHeight'
import StyleHideAuthorName from './styleFunctions/StyleHideAuthorName'
import StyleHideChatAvatar from './styleFunctions/StyleHideChatAvatar'
import StyleHideSuperChatAvatar from './styleFunctions/StyleHideSuperChatAvatar'
import StyleHideSuperChatPrice from './styleFunctions/StyleHideSuperChatPrice'
import StyleShrinkChatMessage from './styleFunctions/StyleShrinkChatMessage'
import StyleWrapSuperChat from './styleFunctions/StyleWrapSuperChat'
import AddSuperChatNumbering from './voidFunctions/AddSuperChatNumbering/AddSuperChatNumbering'

const Content = (): JSX.Element => {
  const [settings] = useSettingsStore()
  const {
    isAddSuperChatNumbering,
    numberingType,
    uniqueNumberingStringLength,
    isWrapSuperChat,
    isHideSuperChatPrice,
    isHideSuperChatAvatar,
    isAddSuperChatAvatarBlur,
    isHideChatAvatar,
    isAddChatAvatarBlur,
    isHideAuthorName,
    isShrinkChatMessage,
    isExpandChatHeight,
    isChangeChatFontSize,
    valueChatFontSize,
  }: SettingsType = settings

  const inlineStyleElement = document.createElement('style')
  inlineStyleElement.type = 'text/css'
  inlineStyleElement.className = 'supach-numbering'

  // スタイル追加
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
      inlineStyleElement.innerText += StyleAddSuperChatNumbering(numberingType)
    }

    // スーパーチャットを全て表示
    if (isWrapSuperChat) {
      inlineStyleElement.innerText += StyleWrapSuperChat()
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

    // チャット欄の高さを拡張
    if (isExpandChatHeight) {
      const headerElement = document.querySelector('#masthead-container')
      const headerH = headerElement ? headerElement.clientHeight : 0
      console.log({ headerH })
      inlineStyleElement.innerText += StyleExpandChatHeight(headerH)
    }

    // チャット欄のフォントサイズを変更
    if (isChangeChatFontSize) {
      inlineStyleElement.innerText += StyleChangeChatFontSize(valueChatFontSize)
    }

    console.log('スタイル追加')
    console.log({ inlineStyleElement })

    // headに追加
    head?.appendChild(inlineStyleElement)
  }, [
    isAddSuperChatNumbering,
    numberingType,
    isWrapSuperChat,
    isHideSuperChatPrice,
    isHideSuperChatAvatar,
    isAddSuperChatAvatarBlur,
    isHideChatAvatar,
    isAddChatAvatarBlur,
    isHideAuthorName,
    isShrinkChatMessage,
    isExpandChatHeight,
    isChangeChatFontSize,
    valueChatFontSize,
    inlineStyleElement,
  ])

  return (
    <>
      {
        // isAddSuperChatNumberingがtrue且つ
        // ナンバリング方式に'uniqueId', 'uniqueUserName'を選択している時のみレンダリング
        isAddSuperChatNumbering &&
          ['uniqueId', 'uniqueUserName'].includes(numberingType) && (
            <AddSuperChatNumbering
              stringLength={uniqueNumberingStringLength}
              numberingType={numberingType}
            />
          )
      }
    </>
  )
}

export default Content
