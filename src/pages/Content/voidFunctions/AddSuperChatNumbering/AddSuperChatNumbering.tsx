import { useCallback, useEffect, useState } from 'react'

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

  // スーパーチャットの要素の親要素を取得
  const [elementItems, setElementItems] =
    useState<null | NodeListOf<HTMLElement>>(
      document.querySelectorAll('#ticker #items')
    )

  // チャット欄の変更を監視する要素を取得
  const rootElements = document.querySelectorAll(
    '#chat-messages #ticker'
  ) as NodeListOf<HTMLElement>

  // rootMutationCallback
  const rootMutationCallback = useCallback((mutations: MutationRecord[]) => {
    mutations.forEach((mutation: MutationRecord) => {
      // childList以外の変更の時は処理しない
      if (mutation.type !== 'childList') return

      // 要素が存在しない時は処理しない
      if (!mutation.addedNodes[0]) return

      // 追加された要素を取得
      const element = mutation.addedNodes[0] as HTMLElement
      console.log(element.className)

      // classNameが.yt-live-chat-rendererの時以外は処理しない
      if (!element.className.includes('yt-live-chat-renderer')) return

      // #itemsを取得
      const elementItems = element.querySelectorAll(
        '#items'
      ) as NodeListOf<HTMLElement>

      // setElementItems
      setElementItems(elementItems)
    })
  }, [])

  // useMutationObserver
  useMutationObserver(rootElements, rootMutationCallback, { childList: true })

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

export default AddSuperChatNumbering
