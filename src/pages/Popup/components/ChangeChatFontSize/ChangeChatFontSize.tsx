import FormatSizeIcon from '@mui/icons-material/FormatSize'
import Box from '@mui/material/Box'
import FormControlLabel from '@mui/material/FormControlLabel'
import InputAdornment from '@mui/material/InputAdornment'
import Switch from '@mui/material/Switch'
import TextField from '@mui/material/TextField'
import React, { memo, useCallback } from 'react'

import GetI18n from '~/modules/GetI18n'
import { useSettingsStore } from '~/store/atoms/useSettingsStore'
import { SettingsType } from '~/types/SettingsType'

const ChangeChatFontSize = (): JSX.Element => {
  const [settings, setSettings] = useSettingsStore()
  const { isChangeChatFontSize, valueChatFontSize }: SettingsType = settings

  const switchHandleChange = useCallback(() => {
    setSettings((prevState: SettingsType) => {
      return { ...prevState, isChangeChatFontSize: !isChangeChatFontSize }
    })
  }, [isChangeChatFontSize, setSettings])

  const textHandleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setSettings((prevState: SettingsType) => {
        return { ...prevState, valueChatFontSize: e.target.value }
      })
    },
    [setSettings]
  )

  return (
    <>
      <Box display="flex" alignItems="center">
        <FormControlLabel
          label={GetI18n('popup_settings_ChangeChatFontSize_label')}
          control={<Switch size="small" checked={isChangeChatFontSize} onChange={switchHandleChange} />}
        />
        <TextField
          value={valueChatFontSize}
          label="font-size"
          type="number"
          size="small"
          margin="none"
          disabled={!isChangeChatFontSize}
          style={{ minWidth: '100px' }}
          inputProps={{ min: 10, max: 20 }}
          InputLabelProps={{ shrink: true }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FormatSizeIcon fontSize="small" />
              </InputAdornment>
            ),
            endAdornment: <InputAdornment position="end">px</InputAdornment>
          }}
          onChange={(e) => textHandleChange(e)}
        />
      </Box>
    </>
  )
}

export default memo(ChangeChatFontSize)
