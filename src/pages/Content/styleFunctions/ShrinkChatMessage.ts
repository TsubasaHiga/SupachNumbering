const ShrinkChatMessage = () => {
  const style = `
yt-live-chat-text-message-renderer {
  padding-top: 1px !important;
  padding-bottom: 1px !important;
}
`
  return style.replace(/\r?\n/g, '')
}

export default ShrinkChatMessage
