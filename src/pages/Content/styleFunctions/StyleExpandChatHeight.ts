const StyleExpandChatHeight = (headerH: number) => {
  // collapsed属性が付与されていない時のみ、チャットの高さを伸ばす
  const style = `
ytd-live-chat-frame:not([collapsed]) {
  min-height: unset !important;
  max-height: unset !important;
  height: calc(100vh - ${headerH}px - 36px) !important;
}
`
  return style.replace(/\r?\n/g, '')
}

export default StyleExpandChatHeight
