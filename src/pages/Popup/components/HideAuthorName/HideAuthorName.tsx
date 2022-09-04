import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'

import GetI18n from '~/modules/GetI18n'
import TextLabel from '~/pages/Popup/components/TextLabel/TextLabel'
import { useSettingsStore } from '~/store/atoms/useSettingsStore'
import { SettingsType } from '~/types/SettingsType'

type Props = {
  isNew?: boolean
}

const HideAuthorName = ({ isNew = false }: Props): JSX.Element => {
  const [settings, setSettings] = useSettingsStore()
  const { isHideAuthorName }: SettingsType = settings

  return (
    <FormControlLabel
      control={
        <Switch
          size="small"
          checked={isHideAuthorName}
          onChange={() => {
            setSettings((prevState: any) => {
              return {
                ...prevState,
                isHideAuthorName: !isHideAuthorName,
              }
            })
          }}
        />
      }
      label={
        <>
          {GetI18n('popup_settings_HideAuthorName_label')}
          {isNew && <TextLabel text="NEW" />}
        </>
      }
    />
  )
}

export default HideAuthorName
