import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import { memo, useCallback } from 'react'

import GetI18n from '~/modules/GetI18n'
import { useSettingsStore } from '~/store/atoms/useSettingsStore'
import { SettingsType } from '~/types/SettingsType'

const ExpandChatHeight = (): JSX.Element => {
  const [settings, setSettings] = useSettingsStore()
  const { isExpandChatHeight }: SettingsType = settings

  const switchHandleChange = useCallback(() => {
    setSettings((prevState: SettingsType) => {
      return {
        ...prevState,
        isExpandChatHeight: !isExpandChatHeight,
      }
    })
  }, [isExpandChatHeight, setSettings])

  return (
    <FormControlLabel
      label={GetI18n('popup_settings_ExpandChatHeight_label')}
      control={
        <Switch
          size="small"
          checked={isExpandChatHeight}
          onChange={switchHandleChange}
        />
      }
    />
  )
}

export default memo(ExpandChatHeight)
