import SettingsIcon from '@mui/icons-material/Settings'
import { memo } from 'react'

import GetPopupPosition from '~/modules/GetPopupPosition'

import ListItemContent from '../ListText/ListText'

type Props = {
  handleClose: () => void
}

const OpenPopupPage = ({ handleClose }: Props): JSX.Element => {
  return (
    <ListItemContent
      icon={<SettingsIcon fontSize="large" />}
      label="content_menu_open_popup_page_label"
      onClick={(e) => {
        handleClose()

        // popupを開く際の位置を取得
        const { top, left } = GetPopupPosition(e)

        // backgroundにメッセージ送信
        chrome.runtime.sendMessage({
          type: 'open-setting-page',
          top: top,
          left: left
        })
      }}
    />
  )
}

export default memo(OpenPopupPage)
