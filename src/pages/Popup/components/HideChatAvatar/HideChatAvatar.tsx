import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'

import { useSettingsStore } from '../../../../common/useSettingsStore'
import GetI18n from '../../../../utils/GetI18n'

const HideChatAvatar = (): JSX.Element => {
  const [settings, setSettings] = useSettingsStore()
  const { isHideChatAvatar } = settings

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