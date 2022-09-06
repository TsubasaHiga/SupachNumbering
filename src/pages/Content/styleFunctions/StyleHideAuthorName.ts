const StyleHideAuthorName = () => {
  const style = `
yt-live-chat-item-list-renderer .yt-live-chat-text-message-renderer {
  margin-right: 4px;
}

yt-live-chat-text-message-renderer .yt-live-chat-author-chip {
  display: none;
}
`
  return style.replace(/\r?\n/g, '')
}

export default StyleHideAuthorName
