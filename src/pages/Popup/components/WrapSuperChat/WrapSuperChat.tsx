import HeightIcon from '@mui/icons-material/Height'
import Box from '@mui/material/Box'
import FormControlLabel from '@mui/material/FormControlLabel'
import InputAdornment from '@mui/material/InputAdornment'
import Switch from '@mui/material/Switch'
import TextField from '@mui/material/TextField'

import GetI18n from '~/modules/GetI18n'
import { useSettingsStore } from '~/store/atoms/useSettingsStore'
import { SettingsType } from '~/types/SettingsType'

const WrapSuperChat = (): JSX.Element => {
  const [settings, setSettings] = useSettingsStore()
  const { isWrapSuperChat, valueWrapSuperChatMaxHeight }: SettingsType =
    settings

  return (
    <Box display="flex" alignItems="center" mt={0.5}>
      <FormControlLabel
        control={
          <Switch
            size="small"
            checked={isWrapSuperChat}
            onChange={() => {
              setSettings((prevState: any) => {
                return {
                  ...prevState,
                  isWrapSuperChat: !isWrapSuperChat,
                }
              })
            }}
          />
        }
        label={GetI18n('popup_settings_WrapSuperChat_label')}
      />
      <TextField
        value={valueWrapSuperChatMaxHeight}
        label="max-height"
        type="number"
        size="small"
        margin="none"
        disabled={!isWrapSuperChat}
        style={{
          minWidth: '100px',
        }}
        inputProps={{
          min: 10,
          max: 100,
          step: 10,
        }}
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <HeightIcon fontSize="small" />
            </InputAdornment>
          ),
          endAdornment: <InputAdornment position="end">%</InputAdornment>,
        }}
        onChange={(e) => {
          setSettings((prevState: any) => {
            return {
              ...prevState,
              valueWrapSuperChatMaxHeight: e.target.value,
            }
          })
        }}
      />
    </Box>
  )
}

export default WrapSuperChat
