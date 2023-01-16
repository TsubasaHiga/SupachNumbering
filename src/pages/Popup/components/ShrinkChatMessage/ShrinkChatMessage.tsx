import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import { memo, useCallback } from 'react'

import GetI18n from '~/modules/GetI18n'
import { useSettingsStore } from '~/store/atoms/useSettingsStore'
import { SettingsType } from '~/types/SettingsType'

const ShrinkChatMessage = (): JSX.Element => {
  const [settings, setSettings] = useSettingsStore()
  const { isShrinkChatMessage }: SettingsType = settings

  const switchHandleChange = useCallback(() => {
    setSettings((prevState: SettingsType) => {
      return {
        ...prevState,
        isShrinkChatMessage: !isShrinkChatMessage
      }
    })
  }, [isShrinkChatMessage, setSettings])

  return (
    <FormControlLabel
      label={GetI18n('popup_settings_ShrinkChatMessage_label')}
      control={<Switch size="small" checked={isShrinkChatMessage} onChange={switchHandleChange} />}
    />
  )
}

export default memo(ShrinkChatMessage)
