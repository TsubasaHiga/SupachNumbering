const WrapSuperChat = () => {
  const style = `
yt-live-chat-ticker-renderer #items {
  height: unset !important;
  overflow: auto !important;
  padding-bottom: 3px !important;
  white-space: unset !important;
}
yt-live-chat-ticker-paid-message-item-renderer,
yt-live-chat-ticker-sponsor-item-renderer,
yt-live-chat-ticker-paid-sticker-item-renderer {
  margin-bottom: 5px;
}
`
  return style.replace(/\r?\n/g, '')
}

export default WrapSuperChat
