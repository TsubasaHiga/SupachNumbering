import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import { memo, useCallback } from 'react'

import GetI18n from '~/modules/GetI18n'
import { useSettingsStore } from '~/store/atoms/useSettingsStore'
import { SettingsType } from '~/types/SettingsType'

const HideSuperChatSponsorTicker = (): JSX.Element => {
  const [settings, setSettings] = useSettingsStore()
  const { isHideSuperChatSponsorTicker }: SettingsType = settings

  const switchHandleChange = useCallback(() => {
    setSettings((prevState: SettingsType) => {
      return {
        ...prevState,
        isHideSuperChatSponsorTicker: !isHideSuperChatSponsorTicker,
      }
    })
  }, [isHideSuperChatSponsorTicker, setSettings])

  return (
    <>
      <FormControlLabel
        label={
          <>{GetI18n('popup_settings_HideSuperChatSponsorTicker_label')}</>
        }
        control={
          <Switch
            size="small"
            checked={isHideSuperChatSponsorTicker}
            onChange={switchHandleChange}
          />
        }
      />
    </>
  )
}

export default memo(HideSuperChatSponsorTicker)
