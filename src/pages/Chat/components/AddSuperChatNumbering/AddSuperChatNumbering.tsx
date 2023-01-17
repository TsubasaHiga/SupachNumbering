import { memo, useCallback, useEffect, useState } from 'react'

import useMutationObserver from '~/hooks/useMutationObserver'
import usePrevious from '~/hooks/usePrevious'
import { NumberingTypeUnique } from '~/types/SettingsType'

import AddUniqueNumberingString from './modules/AddUniqueNumberingString'
import GetItemsElement from './modules/GetItemsElement'

type Props = {
  stringLength: number
  numberingType: NumberingTypeUnique
}

const SetAddUniqueNumberingString = (
  elements: null | NodeListOf<HTMLElement>,
  numberingType: NumberingTypeUnique,
  prevNumberingType: NumberingTypeUnique,
  stringLength: number,
  prevStringLength: number
) => {
  if (!elements) return

  console.log('AddUniqueNumberingString-------------------------------------')

  // numberingTypeもしくはstringLengthが変更されているかチェック
  const isChanged = numberingType !== prevNumberingType || stringLength !== prevStringLength

  elements.forEach((target) => {
    target.childNodes.forEach((child) =>
      AddUniqueNumberingString({
        tickerElement: child as HTMLElement,
        numberingType,
        stringLength,
        isChanged
      })
    )
  })
}

const AddSuperChatNumbering = ({ stringLength, numberingType }: Props): null => {
  console.log('AddSuperChatNumbering', numberingType)

  // 前回のstringLengthを取得
  const prevStringLength = usePrevious(stringLength)

  // 前回のnumberingTypeを取得
  const prevNumberingType = usePrevious(numberingType)

  console.log({ prevStringLength, stringLength, prevNumberingType, numberingType })

  // チャット欄の変更を監視する要素を取得
  const [chatElements] = useState<null | NodeListOf<HTMLElement>>(document.querySelectorAll('yt-live-chat-app'))

  // スーパーチャットの要素の親要素を取得
  const [tickerElements, setTickerElements] = useState<null | NodeListOf<HTMLElement>>(
    document.querySelectorAll('#ticker #items')
  )

  // rootMutationCallback
  const rootMutationCallback = useCallback((mutations: MutationRecord[]) => {
    mutations.forEach((mutation: MutationRecord) => {
      const element = GetItemsElement(mutation)
      if (!element) return

      // setTickerElements
      setTickerElements(element)
    })
  }, [])

  // useMutationObserver
  useMutationObserver(chatElements, rootMutationCallback, {
    childList: true,
    subtree: true
  })

  // mutationCallback
  const mutationCallback = useCallback(
    (mutations: MutationRecord[]) => {
      mutations.forEach((mutation: MutationRecord) => {
        // childList以外の変更の時は処理しない
        if (mutation.type !== 'childList') return

        // 追加された要素が存在しない時は処理しない
        if (!mutation.addedNodes[0]) return

        // AddUniqueNumberingString
        SetAddUniqueNumberingString(tickerElements, numberingType, prevNumberingType, stringLength, prevStringLength)
      })
    },
    [stringLength, numberingType, tickerElements, prevStringLength, prevNumberingType]
  )

  // useMutationObserver
  useMutationObserver(tickerElements, mutationCallback, { childList: true })

  // 初期化
  useEffect(() => {
    // AddUniqueNumberingString
    SetAddUniqueNumberingString(tickerElements, numberingType, prevNumberingType, stringLength, prevStringLength)
  }, [tickerElements, stringLength, numberingType, prevStringLength, prevNumberingType])

  return null
}

export default memo(AddSuperChatNumbering)
