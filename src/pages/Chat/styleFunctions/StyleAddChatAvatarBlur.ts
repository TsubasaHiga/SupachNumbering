const StyleAddChatAvatarBlur = () => {
  const style = `
yt-live-chat-item-list-renderer yt-img-shadow img {
  filter: blur(4px);
}

yt-live-chat-paid-sticker-renderer:not([dashboard-money-feed]) #sticker-container.yt-live-chat-paid-sticker-renderer yt-img-shadow img {
  filter: unset;
}
`
  return style.replace(/\r?\n/g, '')
}

export default StyleAddChatAvatarBlur
