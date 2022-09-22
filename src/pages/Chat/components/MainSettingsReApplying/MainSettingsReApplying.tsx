import ReplayIcon from '@mui/icons-material/Replay'
import { memo, useCallback } from 'react'

import { useSettingsStore } from '~/store/atoms/useSettingsStore'
import { SettingsType } from '~/types/SettingsType'

import ListItemContent from '../ListText/ListText'

type Props = {
  enabled: boolean
  handleClose: () => void
}

const MainSettingsReApplying = ({
  enabled,
  handleClose,
}: Props): JSX.Element => {
  const [, setSettings] = useSettingsStore()

  const clickHandler = useCallback(() => {
    setSettings((prevState: SettingsType) => {
      return {
        ...prevState,
        isAddSuperChatNumbering: false,
      }
    })

    // 一定時間後にボタンを有効化
    setTimeout(() => {
      setSettings((prevState: SettingsType) => {
        return {
          ...prevState,
          isAddSuperChatNumbering: true,
        }
      })
    }, 250)
  }, [setSettings])

  return (
    <ListItemContent
      enabled={enabled}
      icon={<ReplayIcon fontSize="large" />}
      label="content_menu_AddSuperChatNumbering_re_applying_label"
      onClick={() => {
        clickHandler()
        handleClose()
      }}
    />
  )
}

export default memo(MainSettingsReApplying)
