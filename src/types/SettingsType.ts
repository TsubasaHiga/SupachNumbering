export type NumberingType = 'default' | 'uniqueId' | 'uniqueUserName'

// NumberingType型から'uniqueId'と'uniqueUserName'をピックアップした型を生成
export type NumberingTypeUnique = Extract<NumberingType, 'uniqueId' | 'uniqueUserName'>

export type SettingsType = {
  // スーパーチャットにナンバリングを追加
  isAddSuperChatNumbering: boolean

  // ナンバリング方式の選択
  numberingType: NumberingType
  uniqueNumberingStringLength: number

  // スーパーチャットを全て表示
  isWrapSuperChat: boolean
  valueWrapSuperChatMaxHeight: number

  // スーパーチャットの金額を非表示
  isHideSuperChatPrice: boolean

  // スーパーチャットのスポンサーティッカーを非表示
  isHideSuperChatSponsorTicker: boolean

  // ユーザーアバター画像（スーパーチャット内のみ）の非表示
  isHideSuperChatAvatar: boolean

  // ユーザーアバター画像（チャット内のみ）の非表示
  isHideChatAvatar: boolean

  // ユーザーアバター画像（スーパーチャット内のみ）にモザイクを追加
  isAddSuperChatAvatarBlur: boolean

  // ユーザーアバター画像（チャット内のみ）にモザイクを追加
  isAddChatAvatarBlur: boolean

  // ユーザー名を非表示
  isHideAuthorName: boolean

  // チャット欄のメッセージ間隔を狭める
  isShrinkChatMessage: boolean

  // チャット欄の高さを拡張
  isExpandChatHeight: boolean

  // チャット欄のフォントサイズを変更
  isChangeChatFontSize: boolean
  valueChatFontSize: number

  // チャット欄の偶数コメントに背景色を追加
  isAddEvenCommentBackgroundColor: boolean
}
