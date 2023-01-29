const StyleHideChatAvatar = () => {
  const style = `
yt-live-chat-item-list-renderer yt-img-shadow {
  display: none !important;
}
`
  return style.replace(/\r?\n/g, '')
}

export default StyleHideChatAvatar
