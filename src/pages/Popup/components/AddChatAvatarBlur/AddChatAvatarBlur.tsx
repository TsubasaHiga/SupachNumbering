import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'

import { useSettingsStore } from '../../../../common/useSettingsStore'
import GetI18n from '../../../../utils/GetI18n'

const AddChatAvatarBlur = (): JSX.Element => {
  const [settings, setSettings] = useSettingsStore()
  const { isAddChatAvatarBlur, isHideChatAvatar } = settings

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
