import { createChromeStorageStateHookLocal } from 'use-chrome-storage'

import { SettingsType } from '~/types/SettingsType'

const SETTINGS_KEY = 'settings'
const INITIAL_VALUE: SettingsType = {
  // スーパーチャットにナンバリングを追加
  isAddSuperChatNumbering: true,

  // ナンバリング方式の選択
  numberingType: 'unique',
  uniqueNumberingHashLength: 3,

  // スーパーチャットを全て表示
  isWrapSuperChat: false,

  // スーパーチャットの金額を非表示
  isHideSuperChatPrice: false,

  // ユーザーアバター画像（スーパーチャット内のみ）の非表示
  isHideSuperChatAvatar: false,

  // ユーザーアバター画像（チャット内のみ）の非表示
  isHideChatAvatar: false,

  // ユーザーアバター画像（スーパーチャット内のみ）にモザイクを追加
  isAddSuperChatAvatarBlur: false,

  // ユーザーアバター画像（チャット内のみ）にモザイクを追加
  isAddChatAvatarBlur: false,

  // ユーザー名を非表示
  isHideAuthorName: false,

  // チャット欄のメッセージ間隔を狭める
  isShrinkChatMessage: false,

  // チャット欄の高さを拡張
  isExpandChatHeight: false,

  // チャット欄のフォントサイズを変更
  isChangeChatFontSize: false,
  valueChatFontSize: 10,
}

export const useSettingsStore = createChromeStorageStateHookLocal(
  SETTINGS_KEY,
  INITIAL_VALUE
)
