import { useCallback, useEffect, useState } from 'react'

import useMutationObserver from '~/hooks/useMutationObserver'
import GetSha256 from '~/modules/GetSha256'

/**
 * addHash
 * @param element
 * @param hashLength
 * @returns
 */
const addHash = async (element: HTMLElement, hashLength: number) => {
  if (!element.id || element.id.length <= 0) return
  console.log('addHash')

  // id取得
  const id = element.id

  // ハッシュ取得
  const hashValue = await GetSha256(id, hashLength)

  // スーパーチャットの要素を取得
  const tickerPaidMessageItem = element.querySelector('#content') as HTMLElement

  // データ属性にハッシュ値をセット
  if (tickerPaidMessageItem) tickerPaidMessageItem.dataset.hash = hashValue
}

type Props = {
  hashLength: number
}

const AddSuperChatNumbering = ({ hashLength }: Props): null => {
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

      // addHash
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

        // addHash
        addHash(mutation.addedNodes[0] as HTMLElement, hashLength)
      })
    },
    [hashLength]
  )

  // useMutationObserver
  useMutationObserver(elementItems, mutationCallback, { childList: true })

  // 初期化
  useEffect(() => {
    if (!elementItems) return
    elementItems.forEach((target) => {
      target.childNodes.forEach((child) =>
        addHash(child as HTMLElement, hashLength)
      )
    })
  }, [elementItems, hashLength])

  return null
}

export default AddSuperChatNumbering
