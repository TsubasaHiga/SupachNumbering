import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'

import { useSettingsStore } from '../../../../common/useSettingsStore'
import GetI18n from '../../../../utils/GetI18n'

const ExpandChatHeight = (): JSX.Element => {
  const [settings, setSettings] = useSettingsStore()
  const { isExpandChatHeight } = settings

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
