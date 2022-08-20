import FormatSizeIcon from '@mui/icons-material/FormatSize'
import Box from '@mui/material/Box'
import FormControlLabel from '@mui/material/FormControlLabel'
import InputAdornment from '@mui/material/InputAdornment'
import Switch from '@mui/material/Switch'
import TextField from '@mui/material/TextField'

import GetI18n from '~/modules/GetI18n'
import { useSettingsStore } from '~/store/atoms/useSettingsStore'

const ChangeChatFontSize = (): JSX.Element => {
  const [settings, setSettings] = useSettingsStore()
  const { isChangeChatFontSize, valueChatFontSize } = settings

  return (
    <>
      <Box display="flex" alignItems="center">
        <FormControlLabel
          control={
            <Switch
              size="small"
              checked={isChangeChatFontSize}
              onChange={() => {
                setSettings((prevState: any) => {
                  return {
                    ...prevState,
                    isChangeChatFontSize: !isChangeChatFontSize,
                  }
                })
              }}
            />
          }
          label={GetI18n('popup_settings_ChangeChatFontSize_label')}
        />
        <TextField
          value={valueChatFontSize}
          label="font-size"
          type="number"
          size="small"
          margin="none"
          disabled={!isChangeChatFontSize}
          style={{
            minWidth: '100px',
          }}
          inputProps={{
            min: 10,
            max: 20,
          }}
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FormatSizeIcon fontSize="small" />
              </InputAdornment>
            ),
            endAdornment: <InputAdornment position="end">px</InputAdornment>,
          }}
          onChange={(e) => {
            setSettings((prevState: any) => {
              return {
                ...prevState,
                valueChatFontSize: e.target.value,
              }
            })
          }}
        />
      </Box>
    </>
  )
}

export default ChangeChatFontSize
