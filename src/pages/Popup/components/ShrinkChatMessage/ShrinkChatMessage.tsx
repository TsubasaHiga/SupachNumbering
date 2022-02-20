import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'

import { useSettingsStore } from '../../../../common/useSettingsStore'
import GetI18n from '../../../../utils/GetI18n'

const ShrinkChatMessage = (): JSX.Element => {
  const [settings, setSettings] = useSettingsStore()
  const { isShrinkChatMessage } = settings

  return (
    <FormControlLabel
      control={
        <Switch
          size="small"
          checked={isShrinkChatMessage}
          onChange={() => {
            setSettings((prevState: any) => {
              return {
                ...prevState,
                isShrinkChatMessage: !isShrinkChatMessage,
              }
            })
          }}
        />
      }
      label={GetI18n('popup_settings_ShrinkChatMessage_label')}
    />
  )
}

export default ShrinkChatMessage
