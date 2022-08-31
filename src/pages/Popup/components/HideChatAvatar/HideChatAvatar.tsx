import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'

import GetI18n from '~/modules/GetI18n'
import { useSettingsStore } from '~/store/atoms/useSettingsStore'
import { SettingsType } from '~/types/SettingsType'

const HideChatAvatar = (): JSX.Element => {
  const [settings, setSettings] = useSettingsStore()
  const { isHideChatAvatar }: SettingsType = settings

  return (
    <FormControlLabel
      control={
        <Switch
          size="small"
          checked={isHideChatAvatar}
          onChange={() => {
            setSettings((prevState: any) => {
              return {
                ...prevState,
                isHideChatAvatar: !isHideChatAvatar,
              }
            })
          }}
        />
      }
      label={GetI18n('popup_settings_HideChatAvatar_label')}
    />
  )
}

export default HideChatAvatar
