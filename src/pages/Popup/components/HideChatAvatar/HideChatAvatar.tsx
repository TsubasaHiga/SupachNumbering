import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import { memo, useCallback } from 'react'

import GetI18n from '~/modules/GetI18n'
import { useSettingsStore } from '~/store/atoms/useSettingsStore'
import { SettingsType } from '~/types/SettingsType'

const HideChatAvatar = (): JSX.Element => {
  const [settings, setSettings] = useSettingsStore()
  const { isHideChatAvatar }: SettingsType = settings

  const switchHandleChange = useCallback(() => {
    setSettings((prevState: SettingsType) => {
      return {
        ...prevState,
        isHideChatAvatar: !isHideChatAvatar
      }
    })
  }, [isHideChatAvatar, setSettings])

  return (
    <FormControlLabel
      label={GetI18n('popup_settings_HideChatAvatar_label')}
      control={<Switch size="small" checked={isHideChatAvatar} onChange={switchHandleChange} />}
    />
  )
}

export default memo(HideChatAvatar)
