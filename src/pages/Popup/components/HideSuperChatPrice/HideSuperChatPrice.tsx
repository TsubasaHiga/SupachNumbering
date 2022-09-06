import InfoIcon from '@mui/icons-material/Info'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import { memo, useCallback } from 'react'

import GetI18n from '~/modules/GetI18n'
import { useSettingsStore } from '~/store/atoms/useSettingsStore'
import { SettingsType } from '~/types/SettingsType'

const HideSuperChatPrice = (): JSX.Element => {
  const [settings, setSettings] = useSettingsStore()
  const { isHideSuperChatPrice }: SettingsType = settings

  const switchHandleChange = useCallback(() => {
    setSettings((prevState: SettingsType) => {
      return {
        ...prevState,
        isHideSuperChatPrice: !isHideSuperChatPrice,
        isHideSuperChatAvatar: false, // ユーザーアバター画像を非表示をfalse
      }
    })
  }, [isHideSuperChatPrice, setSettings])

  return (
    <>
      <FormControlLabel
        label={
          <>
            {GetI18n('popup_settings_HideSuperChatPrice_label')}
            <span>
              <InfoIcon fontSize="inherit" />
              {GetI18n('popup_settings_HideSuperChatPrice_label_caption')}
            </span>
          </>
        }
        control={
          <Switch
            size="small"
            checked={isHideSuperChatPrice}
            onChange={switchHandleChange}
          />
        }
      />
    </>
  )
}

export default memo(HideSuperChatPrice)
