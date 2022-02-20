import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'

import { useSettingsStore } from '../../../../common/useSettingsStore'
import GetI18n from '../../../../utils/GetI18n'

const WrapSuperChat = (): JSX.Element => {
  const [settings, setSettings] = useSettingsStore()
  const { isWrapSuperChat } = settings

  return (
    <FormControlLabel
      control={
        <Switch
          size="small"
          checked={isWrapSuperChat}
          onChange={() => {
            setSettings((prevState: any) => {
              return {
                ...prevState,
                isWrapSuperChat: !isWrapSuperChat,
              }
            })
          }}
        />
      }
      label={GetI18n('popup_settings_WrapSuperChat_label')}
    />
  )
}

export default WrapSuperChat
