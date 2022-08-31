const StyleExpandChatHeight = (headerH: number) => {
  const style = `
ytd-live-chat-frame {
  min-height: unset !important;
  max-height: unset !important;
  height: calc(100vh - ${headerH}px - 36px) !important;
}
`
  return style.replace(/\r?\n/g, '')
}

export default StyleExpandChatHeight
