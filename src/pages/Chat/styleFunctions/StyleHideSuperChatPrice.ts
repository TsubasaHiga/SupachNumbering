const StyleHideSuperChatPrice = () => {
  const style = `
yt-live-chat-ticker-renderer #text,
yt-live-chat-paid-message-renderer #purchase-amount-column {
  display: none !important;
}

yt-live-chat-ticker-paid-message-item-renderer yt-img-shadow {
  margin-right: 0px !important;
}

yt-live-chat-ticker-sponsor-item-renderer #content {
  padding-right: 4px !important;
}
`
  return style.replace(/\r?\n/g, '')
}

export default StyleHideSuperChatPrice
