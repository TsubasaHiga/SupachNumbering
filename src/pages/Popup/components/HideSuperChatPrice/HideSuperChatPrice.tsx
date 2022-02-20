import InfoIcon from '@mui/icons-material/Info'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'

import { useSettingsStore } from '../../../../common/useSettingsStore'
import GetI18n from '../../../../utils/GetI18n'
const HideSuperChatPrice = (): JSX.Element => {
  const [settings, setSettings] = useSettingsStore()
  const { isHideSuperChatPrice } = settings

  return (
    <>
      <FormControlLabel
        control={
          <Switch
            size="small"
            checked={isHideSuperChatPrice}
            onChange={() => {
              setSettings((prevState: any) => {
                return {
                  ...prevState,
                  isHideSuperChatPrice: !isHideSuperChatPrice,
                  isHideSuperChatAvatar: false, // ユーザーアバター画像を非表示をfalse
                }
              })
            }}
          />
        }
        label={
          <>
            {GetI18n('popup_settings_HideSuperChatPrice_label')}
            <span>
              <InfoIcon fontSize="inherit" />
              {GetI18n('popup_settings_HideSuperChatPrice_label_caption')}
            </span>
          </>
        }
      />
    </>
  )
}

export default HideSuperChatPrice