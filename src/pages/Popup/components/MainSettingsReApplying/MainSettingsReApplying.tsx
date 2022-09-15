import { memo, useCallback, useState } from 'react'

import ReApplyingButton from '~/pages/Popup/components/ReApplyingButton/ReApplyingButton'
import { useSettingsStore } from '~/store/atoms/useSettingsStore'
import { SettingsType } from '~/types/SettingsType'

const MainSettingsReApplying = (): JSX.Element => {
  const [, setSettings] = useSettingsStore()
  const [isDisabled, setIsDisabled] = useState(false)

  const clickHandler = useCallback(() => {
    setIsDisabled(true)
    setSettings((prevState: SettingsType) => {
      return {
        ...prevState,
        isAddSuperChatNumbering: false,
      }
    })

    // 一定時間後にボタンを有効化
    setTimeout(() => {
      setIsDisabled(false)
      setSettings((prevState: SettingsType) => {
        return {
          ...prevState,
          isAddSuperChatNumbering: true,
        }
      })
    }, 250)
  }, [setSettings])

  return <ReApplyingButton isDisabled={isDisabled} onClick={clickHandler} />
}

export default memo(MainSettingsReApplying)
