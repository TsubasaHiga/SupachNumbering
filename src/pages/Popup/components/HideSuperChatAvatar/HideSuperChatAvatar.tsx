import InfoIcon from '@mui/icons-material/Info'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'

import { useSettingsStore } from '../../../../common/useSettingsStore'
import GetI18n from '../../../../utils/GetI18n'

const HideSuperChatAvatar = (): JSX.Element => {
  const [settings, setSettings] = useSettingsStore()
  const { isHideSuperChatAvatar } = settings

  return (
    <FormControlLabel
      control={
        <Switch
          size="small"
          checked={isHideSuperChatAvatar}
          onChange={() => {
            setSettings((prevState: any) => {
              return {
                ...prevState,
                isHideSuperChatAvatar: !isHideSuperChatAvatar,
                isHideSuperChatPrice: false, // 金額を非表示をfalseに
              }
            })
          }}
        />
      }
      label={
        <>
          {GetI18n('popup_settings_HideSuperChatAvatar_label')}
          <span>
            <InfoIcon fontSize="inherit" />
            {GetI18n('popup_settings_HideSuperChatAvatar_label_caption')}
          </span>
        </>
      }
    />
  )
}

export default HideSuperChatAvatar
