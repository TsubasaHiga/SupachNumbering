import { createChromeStorageStateHookLocal } from 'use-chrome-storage'

import { SettingsType } from '~/types/SettingsType'

const SETTINGS_KEY = 'settings'
const INITIAL_VALUE: SettingsType = {
  // 全ての機能を有効化
  isEnableAll: true,

  // スーパーチャットにナンバリングを追加
  isAddSuperChatNumbering: false,

  // ナンバリング方式の選択
  numberingType: 'default',
  uniqueNumberingStringLength: 3,

  // スーパーチャットを全て表示
  isWrapSuperChat: false,
  valueWrapSuperChatMaxHeight: 50,

  // スーパーチャットの金額を非表示
  isHideSuperChatPrice: false,

  // スーパーチャットのスポンサーティッカーを非表示
  isHideSuperChatSponsorTicker: false,

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

  // チャット欄の偶数コメントに背景色を追加
  isAddEvenCommentBackgroundColor: false,

  // チャット欄上部に設定メニューを表示
  isDisplayChatOnSettingMenu: true
}

export const useSettingsStore = createChromeStorageStateHookLocal(SETTINGS_KEY, INITIAL_VALUE)
