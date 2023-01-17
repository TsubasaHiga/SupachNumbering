import ReplayIcon from '@mui/icons-material/Replay'
import { memo, useCallback } from 'react'

import { useSettingsStore } from '~/store/atoms/useSettingsStore'
import { SettingsType } from '~/types/SettingsType'

import ListItemContent from '../ListText/ListText'

type Props = {
  handleClose: () => void
}

const MainSettingsReApplying = ({ handleClose }: Props): JSX.Element => {
  const [, setSettings] = useSettingsStore()

  const Reapply = useCallback(() => {
    setSettings((prevState: SettingsType) => {
      return {
        ...prevState,
        isAddSuperChatNumbering: !prevState.isAddSuperChatNumbering
      }
    })
  }, [setSettings])

  const clickHandler = useCallback(() => {
    Reapply()

    // 一定時間後にボタンを有効化
    setTimeout(() => Reapply(), 250)
  }, [Reapply])

  return (
    <ListItemContent
      icon={<ReplayIcon fontSize="large" />}
      label="content_menu_reapplying_label"
      onClick={() => {
        clickHandler()
        handleClose()
      }}
    />
  )
}

export default memo(MainSettingsReApplying)
