import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import { memo, useCallback } from 'react'

import GetI18n from '~/modules/GetI18n'
import { useSettingsStore } from '~/store/atoms/useSettingsStore'
import { SettingsType } from '~/types/SettingsType'

const AddSuperChatAvatarBlur = (): JSX.Element => {
  const [settings, setSettings] = useSettingsStore()
  const { isAddSuperChatAvatarBlur, isHideSuperChatAvatar }: SettingsType = settings

  const switchHandleChange = useCallback(() => {
    setSettings((prevState: SettingsType) => {
      return {
        ...prevState,
        isAddSuperChatAvatarBlur: !isAddSuperChatAvatarBlur
      }
    })
  }, [isAddSuperChatAvatarBlur, setSettings])

  return (
    <FormControlLabel
      label={GetI18n('popup_settings_AddSuperChatAvatarBlur_label')}
      control={
        <Switch
          size="small"
          disabled={isHideSuperChatAvatar}
          checked={isAddSuperChatAvatarBlur}
          onChange={switchHandleChange}
        />
      }
    />
  )
}

export default memo(AddSuperChatAvatarBlur)
