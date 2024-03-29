import { useSettingsStore } from '~/store/atoms/useSettingsStore'
import { NumberingTypeUnique, SettingsType } from '~/types/SettingsType'

import AddSuperChatNumbering from './components/AddSuperChatNumbering/AddSuperChatNumbering'

const SuperChatNumbering = (): JSX.Element => {
  const [settings] = useSettingsStore()
  const { isEnableAll, isAddSuperChatNumbering, numberingType, uniqueNumberingStringLength }: SettingsType = settings

  return (
    <>
      {
        // isAddSuperChatNumberingがtrue且つ
        // ナンバリング方式に'uniqueId', 'uniqueUserName'を選択している時のみレンダリング
        isEnableAll && isAddSuperChatNumbering && ['uniqueId', 'uniqueUserName'].includes(numberingType) && (
          <>
            <AddSuperChatNumbering
              stringLength={uniqueNumberingStringLength}
              numberingType={numberingType as NumberingTypeUnique}
            />
          </>
        )
      }
    </>
  )
}

export default SuperChatNumbering
