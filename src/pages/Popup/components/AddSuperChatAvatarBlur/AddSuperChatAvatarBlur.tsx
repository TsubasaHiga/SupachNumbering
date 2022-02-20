import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'

import { useSettingsStore } from '../../../../common/useSettingsStore'
import GetI18n from '../../../../utils/GetI18n'

const AddSuperChatAvatarBlur = (): JSX.Element => {
  const [settings, setSettings] = useSettingsStore()
  const { isAddSuperChatAvatarBlur, isHideSuperChatAvatar } = settings

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
