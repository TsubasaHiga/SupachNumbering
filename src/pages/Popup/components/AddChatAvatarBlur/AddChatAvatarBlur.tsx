import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'

import GetI18n from '~/modules/GetI18n'
import { useSettingsStore } from '~/store/atoms/useSettingsStore'
import { SettingsType } from '~/types/SettingsType'

const AddChatAvatarBlur = (): JSX.Element => {
  const [settings, setSettings] = useSettingsStore()
  const { isAddChatAvatarBlur, isHideChatAvatar }: SettingsType = settings

  return (
    <FormControlLabel
      control={
        <Switch
          size="small"
          disabled={isHideChatAvatar}
          checked={isAddChatAvatarBlur}
          onChange={() => {
            setSettings((prevState: any) => {
              return {
                ...prevState,
                isAddChatAvatarBlur: !isAddChatAvatarBlur,
              }
            })
          }}
        />
      }
      label={GetI18n('popup_settings_AddChatAvatarBlur_label')}
    />
  )
}

export default AddChatAvatarBlur
