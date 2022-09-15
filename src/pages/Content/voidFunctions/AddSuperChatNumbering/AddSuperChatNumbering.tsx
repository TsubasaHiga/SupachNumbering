import { memo, useCallback, useEffect, useState } from 'react'

import useMutationObserver from '~/hooks/useMutationObserver'
import GetSha256 from '~/modules/GetSha256'
import GetUserNameFromTickerItemElement from '~/modules/GetUserNameFromTickerItemElement'
import { NumberingType } from '~/types/SettingsType'

/**
 * addUniqueNumberingString
 * @param element
 * @param numberingType
 * @param stringLength
 * @returns
 */
const addUniqueNumberingString = async (
  element: HTMLElement,
  numberingType: NumberingType,
  stringLength: number
) => {
  if (!element.id || element.id.length <= 0) return
  // console.log('addUniqueNumberingString')

  // スーパーチャットの要素を取得
  const tickerPaidMessageItem = element.querySelector('#content') as HTMLElement
  if (!tickerPaidMessageItem) return

  // 文字列取得
  let stringValue = ''

  if (numberingType === 'uniqueId') {
    stringValue = await GetSha256(element.id)
  }

  if (numberingType === 'uniqueUserName') {
    stringValue = await GetUserNameFromTickerItemElement(element, 1000, 100)
  }

  // データ属性にユニークな文字列をセット
  tickerPaidMessageItem.dataset.uniqueString =
    stringLength > 0 ? stringValue.slice(0, stringLength) : stringValue
}

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
      // childList以外の変更の時は処理しない
      if (mutation.type !== 'childList') return

      // addedNodesがない時は処理しない
      if (!mutation.addedNodes || mutation.addedNodes.length <= 0) return

      // addedNodesの0番目を取得
      const addedNode = mutation.addedNodes[0] as HTMLElement | null | undefined

      // 存在しない時は処理しない
      if (!addedNode) return

      // nodeTypeが1以外の時は処理しない
      if (addedNode.nodeType !== 1) return

      // 追加された要素を取得
      const element = addedNode as HTMLElement | undefined

      // elementが空の時は処理しない
      if (!element) return

      // elementのtagNameが'YT-LIVE-CHAT-TICKER-RENDERER'以外の時は処理しない
      if (element.tagName !== 'YT-LIVE-CHAT-TICKER-RENDERER') return

      // #itemsを取得
      const elementItems = element.querySelectorAll(
        '#items'
      ) as NodeListOf<HTMLElement>

      // elementItemsが存在しない時は処理しない
      if (!elementItems || elementItems.length <= 0) return

      // setElementItems
      console.log('setElementItems')
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

        // addUniqueNumberingString
        addUniqueNumberingString(
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
        addUniqueNumberingString(
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
