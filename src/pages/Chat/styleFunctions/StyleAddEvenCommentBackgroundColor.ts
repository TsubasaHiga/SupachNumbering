const StyleAddEvenCommentBackgroundColor = () => {
  const style = `
yt-live-chat-text-message-renderer:nth-child(even) {
  background-color: var(--yt-spec-brand-background-primary);
}
`
  return style.replace(/\r?\n/g, '')
}

export default StyleAddEvenCommentBackgroundColor
