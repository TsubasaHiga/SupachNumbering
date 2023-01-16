import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import { memo, useCallback } from 'react'

import GetI18n from '~/modules/GetI18n'
import { useSettingsStore } from '~/store/atoms/useSettingsStore'
import { SettingsType } from '~/types/SettingsType'

const AddChatAvatarBlur = (): JSX.Element => {
  const [settings, setSettings] = useSettingsStore()
  const { isAddChatAvatarBlur, isHideChatAvatar }: SettingsType = settings

  const switchHandleChange = useCallback(() => {
    setSettings((prevState: SettingsType) => {
      return {
        ...prevState,
        isAddChatAvatarBlur: !isAddChatAvatarBlur
      }
    })
  }, [isAddChatAvatarBlur, setSettings])

  return (
    <FormControlLabel
      label={GetI18n('popup_settings_AddChatAvatarBlur_label')}
      control={
        <Switch size="small" disabled={isHideChatAvatar} checked={isAddChatAvatarBlur} onChange={switchHandleChange} />
      }
    />
  )
}

export default memo(AddChatAvatarBlur)
