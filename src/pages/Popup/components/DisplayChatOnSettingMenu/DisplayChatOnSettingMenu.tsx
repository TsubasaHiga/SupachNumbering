import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import { memo, useCallback } from 'react'

import GetI18n from '~/modules/GetI18n'
import TextLabel from '~/pages/Popup/components/TextLabel/TextLabel'
import { useSettingsStore } from '~/store/atoms/useSettingsStore'
import { SettingsType } from '~/types/SettingsType'

type Props = {
  isNew?: boolean
}

const DisplayChatOnSettingMenu = ({ isNew = false }: Props): JSX.Element => {
  const [settings, setSettings] = useSettingsStore()
  const { isDisplayChatOnSettingMenu }: SettingsType = settings

  const switchHandleChange = useCallback(() => {
    setSettings((prevState: SettingsType) => {
      return {
        ...prevState,
        isDisplayChatOnSettingMenu: !isDisplayChatOnSettingMenu
      }
    })
  }, [isDisplayChatOnSettingMenu, setSettings])

  return (
    <FormControlLabel
      label={
        <>
          {isNew && <TextLabel text="NEW" />}
          {GetI18n('popup_settings_DisplayChatOnSettingMenu_label')}
        </>
      }
      control={<Switch size="small" checked={isDisplayChatOnSettingMenu} onChange={switchHandleChange} />}
    />
  )
}

export default memo(DisplayChatOnSettingMenu)
