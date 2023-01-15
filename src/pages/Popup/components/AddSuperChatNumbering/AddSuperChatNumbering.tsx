import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import Typography from '@mui/material/Typography'
import { memo, useCallback } from 'react'

import GetI18n from '~/modules/GetI18n'
import SelectNumberingType from '~/pages/Popup/components/SelectNumberingType/SelectNumberingType'
import SettingsWrap from '~/pages/Popup/components/SettingsWrap/SettingsWrap'
import { useSettingsStore } from '~/store/atoms/useSettingsStore'
import { SettingsType } from '~/types/SettingsType'

const AddSuperChatNumbering = (): JSX.Element => {
  const [settings, setSettings] = useSettingsStore()
  const { isAddSuperChatNumbering }: SettingsType = settings

  const switchHandleChange = useCallback(() => {
    setSettings((prevState: SettingsType) => {
      return {
        ...prevState,
        isAddSuperChatNumbering: !isAddSuperChatNumbering
      }
    })
  }, [isAddSuperChatNumbering, setSettings])

  return (
    <>
      <FormControlLabel
        label={GetI18n('popup_settings_AddSuperChatNumbering_label')}
        control={<Switch size="small" checked={isAddSuperChatNumbering} onChange={switchHandleChange} />}
      />

      {isAddSuperChatNumbering && (
        <SettingsWrap style={{ marginTop: '20px' }}>
          <Typography variant="caption" component="div">
            {GetI18n('popup_settings_main_select_numbering_type_title')}
          </Typography>
          <SelectNumberingType />
        </SettingsWrap>
      )}
    </>
  )
}

export default memo(AddSuperChatNumbering)
