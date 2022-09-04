import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'

import GetI18n from '~/modules/GetI18n'
import { useSettingsStore } from '~/store/atoms/useSettingsStore'
import { SettingsType } from '~/types/SettingsType'

const ExpandChatHeight = (): JSX.Element => {
  const [settings, setSettings] = useSettingsStore()
  const { isExpandChatHeight }: SettingsType = settings

  return (
    <FormControlLabel
      control={
        <Switch
          size="small"
          checked={isExpandChatHeight}
          onChange={() => {
            setSettings((prevState: any) => {
              return {
                ...prevState,
                isExpandChatHeight: !isExpandChatHeight,
              }
            })
          }}
        />
      }
      label={GetI18n('popup_settings_ExpandChatHeight_label')}
    />
  )
}

export default ExpandChatHeight
