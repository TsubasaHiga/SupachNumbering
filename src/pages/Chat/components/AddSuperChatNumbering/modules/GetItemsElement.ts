/**
 * '#items'を取得
 * 取得出来た場合は要素を返し、取得出来なかった場合はfalseを返す
 */
const GetItemsElement = (mutation: MutationRecord): NodeListOf<HTMLElement> | false => {
  // childList以外の変更の時は処理しない
  if (mutation.type !== 'childList') return false

  // addedNodesがない時は処理しない
  if (!mutation.addedNodes || mutation.addedNodes.length <= 0) return false

  // addedNodesの0番目を取得
  const addedNode = mutation.addedNodes[0] as HTMLElement | null | undefined

  // 存在しない時は処理しない
  if (!addedNode) return false

  // nodeTypeが1以外の時は処理しない
  if (addedNode.nodeType !== 1) return false

  // 追加された要素を取得
  const element = addedNode as HTMLElement | undefined

  // elementが空の時は処理しない
  if (!element) return false

  // elementのtagNameが'YT-LIVE-CHAT-TICKER-RENDERER'以外の時は処理しない
  if (element.tagName !== 'YT-LIVE-CHAT-TICKER-RENDERER') return false

  // #itemsを取得
  const elementItems = element.querySelectorAll('#items') as NodeListOf<HTMLElement>

  // elementItemsが存在しない時は処理しない
  if (!elementItems || elementItems.length <= 0) return false

  return elementItems
}

export default GetItemsElement
