import InfoIcon from '@mui/icons-material/Info'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'

import GetI18n from '~/modules/GetI18n'
import { useSettingsStore } from '~/store/atoms/useSettingsStore'
import { SettingsType } from '~/types/SettingsType'

const HideSuperChatAvatar = (): JSX.Element => {
  const [settings, setSettings] = useSettingsStore()
  const { isHideSuperChatAvatar }: SettingsType = settings

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
