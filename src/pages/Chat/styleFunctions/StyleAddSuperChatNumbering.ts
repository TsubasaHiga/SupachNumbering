import { NumberingType } from '~/types/SettingsType'

const StyleAddSuperChatNumbering = (numberingType: NumberingType) => {
  const style = `
yt-live-chat-ticker-renderer {
  counter-reset: number 0;
  ${
    // 通常のナンバリング
    numberingType === 'default' ? `counter-reset: number 0;` : ''
  }
}

yt-live-chat-ticker-paid-sticker-item-renderer,
yt-live-chat-ticker-paid-message-item-renderer,
yt-live-chat-ticker-sponsor-item-renderer,
yt-live-chat-ticker-paid-sticker-item-renderer {
  width: auto !important;
}

yt-live-chat-ticker-paid-sticker-item-renderer #content,
yt-live-chat-ticker-paid-message-item-renderer #content {
  display: flex;
  align-items: center;
}

yt-live-chat-ticker-paid-sticker-item-renderer #content:before,
yt-live-chat-ticker-paid-message-item-renderer #content:before {
  border-right: 1px solid rgb(0 0 0 / 25%);
  box-sizing: border-box;
  color: inherit;
  ${
    // 通常のナンバリング
    numberingType === 'default'
      ? `
    content: counter(number, decimal-leading-zero);
    counter-increment: number 1;
    `
      : ''
  }
  ${
    // ユニークなナンバリング
    ['uniqueId', 'uniqueUserName'].includes(numberingType) ? `content: attr(data-unique-string);` : ''
  }
  counter-increment: number 1;
  margin-right: 8px;
  padding: 0 8px 0 9px;
  font-weight: bold;
}
`
  return style.replace(/\r?\n/g, '')
}

export default StyleAddSuperChatNumbering
