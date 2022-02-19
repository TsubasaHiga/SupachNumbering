const AddSuperChatAvatarBlur = () => {
  const style = `
yt-live-chat-ticker-renderer yt-img-shadow img,
yt-live-chat-paid-message-renderer yt-img-shadow img,
yt-live-chat-paid-sticker-renderer yt-img-shadow img {
  filter: blur(4px);
}
`
  return style.replace(/\r?\n/g, '')
}

export default AddSuperChatAvatarBlur
