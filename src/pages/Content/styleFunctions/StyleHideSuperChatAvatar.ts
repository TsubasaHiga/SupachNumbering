const StyleHideSuperChatAvatar = () => {
  const style = `
yt-live-chat-ticker-renderer yt-img-shadow,
yt-live-chat-paid-message-renderer yt-img-shadow {
  display: none !important;
}

yt-live-chat-ticker-paid-message-item-renderer #content:before {
  margin-right: 0 !important;
}
`
  return style.replace(/\r?\n/g, '')
}

export default StyleHideSuperChatAvatar
