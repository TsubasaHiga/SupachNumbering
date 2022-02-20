const ChangeChatFontSize = (fontSize: number) => {
  const style = `
yt-live-chat-text-message-renderer,
yt-live-chat-paid-message-renderer {
  font-size: ${fontSize}px !important;
}
`
  return style.replace(/\r?\n/g, '')
}

export default ChangeChatFontSize
