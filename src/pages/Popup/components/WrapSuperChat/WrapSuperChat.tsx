import HeightIcon from '@mui/icons-material/Height'
import HelpIcon from '@mui/icons-material/Help'
import Box from '@mui/material/Box'
import FormControlLabel from '@mui/material/FormControlLabel'
import InputAdornment from '@mui/material/InputAdornment'
import Switch from '@mui/material/Switch'
import TextField from '@mui/material/TextField'
import Tooltip from '@mui/material/Tooltip'
import { memo, useCallback } from 'react'

import GetI18n from '~/modules/GetI18n'
import { useSettingsStore } from '~/store/atoms/useSettingsStore'
import { SettingsType } from '~/types/SettingsType'

const WrapSuperChat = (): JSX.Element => {
  const [settings, setSettings] = useSettingsStore()
  const { isWrapSuperChat, valueWrapSuperChatMaxHeight }: SettingsType =
    settings

  const switchHandleChange = useCallback(() => {
    setSettings((prevState: SettingsType) => {
      return {
        ...prevState,
        isWrapSuperChat: !isWrapSuperChat,
      }
    })
  }, [isWrapSuperChat, setSettings])

  const textHandleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setSettings((prevState: SettingsType) => {
        return {
          ...prevState,
          valueWrapSuperChatMaxHeight: e.target.value,
        }
      })
    },
    [setSettings]
  )

  return (
    <Box display="flex" alignItems="center" mt={0.5}>
      <FormControlLabel
        control={
          <Switch
            size="small"
            checked={isWrapSuperChat}
            onChange={switchHandleChange}
          />
        }
        label={
          <>
            {GetI18n('popup_settings_WrapSuperChat_label')}
            <Tooltip
              title={GetI18n('popup_settings_WrapSuperChat_help')}
              arrow
              placement="right"
            >
              <HelpIcon
                fontSize="inherit"
                style={{ fontSize: '17px', marginLeft: '4px' }}
              />
            </Tooltip>
          </>
        }
      />
      <TextField
        value={valueWrapSuperChatMaxHeight}
        label="max-height"
        type="number"
        size="small"
        margin="none"
        disabled={!isWrapSuperChat}
        style={{ minWidth: '100px' }}
        inputProps={{ min: 10, max: 100, step: 10 }}
        InputLabelProps={{ shrink: true }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <HeightIcon fontSize="small" />
            </InputAdornment>
          ),
          endAdornment: <InputAdornment position="end">%</InputAdornment>,
        }}
        onChange={(e) => textHandleChange(e)}
      />
    </Box>
  )
}

export default memo(WrapSuperChat)
