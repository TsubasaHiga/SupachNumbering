import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'

import GetI18n from '~/modules/GetI18n'
import { useSettingsStore } from '~/store/atoms/useSettingsStore'
import { SettingsType } from '~/types/SettingsType'

const AddSuperChatNumbering = (): JSX.Element => {
  const [settings, setSettings] = useSettingsStore()
  const { isAddSuperChatNumbering }: SettingsType = settings

  return (
    <FormControlLabel
      control={
        <Switch
          size="small"
          checked={isAddSuperChatNumbering}
          onChange={() => {
            setSettings((prevState: any) => {
              return {
                ...prevState,
                isAddSuperChatNumbering: !isAddSuperChatNumbering,
              }
            })
          }}
        />
      }
      label={GetI18n('popup_settings_AddSuperChatNumbering_label')}
    />
  )
}

export default AddSuperChatNumbering
