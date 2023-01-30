import ToggleOffIcon from '@mui/icons-material/ToggleOff'
import ToggleOnIcon from '@mui/icons-material/ToggleOn'
import { memo, useCallback } from 'react'

import { useSettingsStore } from '~/store/atoms/useSettingsStore'
import { SettingsType } from '~/types/SettingsType'
import ListItemContent from '~/ui/MenuListItem'

const MenuEnableAll = (): JSX.Element => {
  const [settings, setSettings] = useSettingsStore()
  const { isEnableAll }: SettingsType = settings

  const clickHandler = useCallback(() => {
    setSettings((prevState: SettingsType) => {
      return {
        ...prevState,
        isEnableAll: !prevState.isEnableAll
      }
    })
  }, [setSettings])

  return (
    <ListItemContent
      icon={isEnableAll ? <ToggleOnIcon color="primary" fontSize="large" /> : <ToggleOffIcon fontSize="large" />}
      label={!isEnableAll ? 'content_menu_enable_label' : 'content_menu_disable_label'}
      onClick={clickHandler}
    />
  )
}

export default memo(MenuEnableAll)
