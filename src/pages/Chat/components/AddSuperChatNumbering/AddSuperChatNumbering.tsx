import { memo, useCallback, useEffect, useState } from 'react'

import useMutationObserver from '~/hooks/useMutationObserver'
import { NumberingType } from '~/types/SettingsType'

import AddUniqueNumberingString from './modules/AddUniqueNumberingString'
import GetItemsElement from './modules/GetItemsElement'

type Props = {
  stringLength: number
  numberingType: NumberingType
}

const AddSuperChatNumbering = ({
  stringLength,
  numberingType,
}: Props): null => {
  console.log('AddSuperChatNumbering')

  // チャット欄の変更を監視する要素を取得
  const [rootElements] = useState<null | NodeListOf<HTMLElement>>(
    document.querySelectorAll('yt-live-chat-app')
  )

  // スーパーチャットの要素の親要素を取得
  const [elementItems, setElementItems] =
    useState<null | NodeListOf<HTMLElement>>(
      document.querySelectorAll('#ticker #items')
    )

  // rootMutationCallback
  const rootMutationCallback = useCallback((mutations: MutationRecord[]) => {
    mutations.forEach((mutation: MutationRecord) => {
      const elementItems = GetItemsElement(mutation)
      if (!elementItems) return

      // setElementItems
      setElementItems(elementItems)
    })
  }, [])

  // useMutationObserver
  useMutationObserver(rootElements, rootMutationCallback, {
    childList: true,
    subtree: true,
  })

  // mutationCallback
  const mutationCallback = useCallback(
    (mutations: MutationRecord[]) => {
      mutations.forEach((mutation: MutationRecord) => {
        // childList以外の変更の時は処理しない
        if (mutation.type !== 'childList') return

        // 要素が存在しない時は処理しない
        if (!mutation.addedNodes[0]) return

        // AddUniqueNumberingString
        AddUniqueNumberingString(
          mutation.addedNodes[0] as HTMLElement,
          numberingType,
          stringLength
        )
      })
    },
    [stringLength, numberingType]
  )

  // useMutationObserver
  useMutationObserver(elementItems, mutationCallback, { childList: true })

  // 初期化
  useEffect(() => {
    if (!elementItems) return
    elementItems.forEach((target) => {
      target.childNodes.forEach((child) =>
        AddUniqueNumberingString(
          child as HTMLElement,
          numberingType,
          stringLength
        )
      )
    })
  }, [elementItems, stringLength, numberingType])

  return null
}

export default memo(AddSuperChatNumbering)
