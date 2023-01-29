const StyleHideSuperChatSponsorTicker = () => {
  const style = `
yt-live-chat-ticker-sponsor-item-renderer {
  display: none;
}
`
  return style.replace(/\r?\n/g, '')
}

export default StyleHideSuperChatSponsorTicker
