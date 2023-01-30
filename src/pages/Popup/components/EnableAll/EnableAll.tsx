import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import { memo, useCallback } from 'react'

import GetI18n from '~/modules/GetI18n'
import TextLabel from '~/pages/Popup/components/TextLabel/TextLabel'
import { useSettingsStore } from '~/store/atoms/useSettingsStore'
import { SettingsType } from '~/types/SettingsType'

type Props = {
  isNew?: boolean
}

const EnableAll = ({ isNew = false }: Props): JSX.Element => {
  const [settings, setSettings] = useSettingsStore()
  const { isEnableAll }: SettingsType = settings

  const switchHandleChange = useCallback(() => {
    setSettings((prevState: SettingsType) => {
      return {
        ...prevState,
        isEnableAll: !isEnableAll
      }
    })
  }, [isEnableAll, setSettings])

  return (
    <FormControlLabel
      label={
        <>
          {isNew && <TextLabel text="NEW" />}
          {GetI18n('popup_settings_EnableAll_label')}
        </>
      }
      control={<Switch size="small" checked={isEnableAll} onChange={switchHandleChange} />}
    />
  )
}

export default memo(EnableAll)
