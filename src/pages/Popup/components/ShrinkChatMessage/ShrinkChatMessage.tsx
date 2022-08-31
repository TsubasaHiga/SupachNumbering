import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'

import GetI18n from '~/modules/GetI18n'
import { useSettingsStore } from '~/store/atoms/useSettingsStore'
import { SettingsType } from '~/types/SettingsType'

const ShrinkChatMessage = (): JSX.Element => {
  const [settings, setSettings] = useSettingsStore()
  const { isShrinkChatMessage }: SettingsType = settings

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
