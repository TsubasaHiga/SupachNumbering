export type SettingsType = {
  // スーパーチャットにナンバリングを追加
  isAddSuperChatNumbering: boolean

  // スーパーチャットを全て表示
  isWrapSuperChat: boolean

  // スーパーチャットの金額を非表示
  isHideSuperChatPrice: boolean

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
}
