import InfoIcon from '@mui/icons-material/Info'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import { memo, useCallback } from 'react'

import GetI18n from '~/modules/GetI18n'
import { useSettingsStore } from '~/store/atoms/useSettingsStore'
import { SettingsType } from '~/types/SettingsType'

const HideSuperChatAvatar = (): JSX.Element => {
  const [settings, setSettings] = useSettingsStore()
  const { isHideSuperChatAvatar }: SettingsType = settings

  const switchHandleChange = useCallback(() => {
    setSettings((prevState: SettingsType) => {
      return {
        ...prevState,
        isHideSuperChatAvatar: !isHideSuperChatAvatar,
        isHideSuperChatPrice: false, // 金額を非表示をfalseに
      }
    })
  }, [isHideSuperChatAvatar, setSettings])

  return (
    <FormControlLabel
      label={
        <>
          {GetI18n('popup_settings_HideSuperChatAvatar_label')}
          <span>
            <InfoIcon fontSize="inherit" />
            {GetI18n('popup_settings_HideSuperChatAvatar_label_caption')}
          </span>
        </>
      }
      control={
        <Switch
          size="small"
          checked={isHideSuperChatAvatar}
          onChange={switchHandleChange}
        />
      }
    />
  )
}

export default memo(HideSuperChatAvatar)
