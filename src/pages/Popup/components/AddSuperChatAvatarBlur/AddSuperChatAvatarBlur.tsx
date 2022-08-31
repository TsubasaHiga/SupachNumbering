import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'

import GetI18n from '~/modules/GetI18n'
import { useSettingsStore } from '~/store/atoms/useSettingsStore'
import { SettingsType } from '~/types/SettingsType'

const AddSuperChatAvatarBlur = (): JSX.Element => {
  const [settings, setSettings] = useSettingsStore()
  const { isAddSuperChatAvatarBlur, isHideSuperChatAvatar }: SettingsType =
    settings

  return (
    <FormControlLabel
      control={
        <Switch
          size="small"
          disabled={isHideSuperChatAvatar}
          checked={isAddSuperChatAvatarBlur}
          onChange={() => {
            setSettings((prevState: any) => {
              return {
                ...prevState,
                isAddSuperChatAvatarBlur: !isAddSuperChatAvatarBlur,
              }
            })
          }}
        />
      }
      label={GetI18n('popup_settings_AddSuperChatAvatarBlur_label')}
    />
  )
}

export default AddSuperChatAvatarBlur
