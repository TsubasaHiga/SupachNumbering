const AddSuperChatNumbering = () => {
  const style = `
yt-live-chat-ticker-renderer {
  counter-reset: number 0;
}

yt-live-chat-ticker-paid-message-item-renderer,
yt-live-chat-ticker-sponsor-item-renderer,
yt-live-chat-ticker-paid-sticker-item-renderer {
  width: auto !important;
}

yt-live-chat-ticker-paid-message-item-renderer #content {
  display: flex;
  align-items: center;
}

yt-live-chat-ticker-paid-message-item-renderer #content:before {
  border-right: 1px solid rgb(0 0 0 / 20%);
  box-sizing: border-box;
  color: inherit;
  content: counter(number, decimal-leading-zero);
  counter-increment: number 1;
  margin-right: 8px;
  padding: 0 8px 0 9px;
}
`
  return style.replace(/\r?\n/g, '')
}

export default AddSuperChatNumbering
