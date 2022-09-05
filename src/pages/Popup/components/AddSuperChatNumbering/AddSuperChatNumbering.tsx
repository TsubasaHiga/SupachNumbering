import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import Typography from '@mui/material/Typography'

import GetI18n from '~/modules/GetI18n'
import SelectNumberingType from '~/pages/Popup/components/SelectNumberingType/SelectNumberingType'
import SettingsWrap from '~/pages/Popup/components/SettingsWrap/SettingsWrap'
import { useSettingsStore } from '~/store/atoms/useSettingsStore'
import { SettingsType } from '~/types/SettingsType'

const AddSuperChatNumbering = (): JSX.Element => {
  const [settings, setSettings] = useSettingsStore()
  const { isAddSuperChatNumbering }: SettingsType = settings

  return (
    <>
      <FormControlLabel
        control={
          <Switch
            size="small"
            checked={isAddSuperChatNumbering}
            onChange={() => {
              setSettings((prevState: any) => {
                return {
                  ...prevState,
                  isAddSuperChatNumbering: !isAddSuperChatNumbering,
                }
              })
            }}
          />
        }
        label={GetI18n('popup_settings_AddSuperChatNumbering_label')}
      />

      {isAddSuperChatNumbering && (
        <SettingsWrap style={{ marginTop: '20px' }}>
          <Typography variant="caption" component="div">
            {GetI18n('popup_settings_main_select_numbering_type_title')}
          </Typography>
          <SelectNumberingType isNew={true} />
        </SettingsWrap>
      )}
    </>
  )
}

export default AddSuperChatNumbering
