import GetSha256 from '~/modules/GetSha256'
import GetUserNameFromTickerItemElement from '~/modules/GetUserNameFromTickerItemElement'
import { NumberingType } from '~/types/SettingsType'

/**
 * スーパーチャットの要素にユニークな文字列をデータ属性として追加する
 * @param element
 * @param numberingType
 * @param stringLength
 * @returns
 */
const AddUniqueNumberingString = async (
  element: HTMLElement,
  numberingType: NumberingType,
  stringLength: number
) => {
  if (!element.id || element.id.length <= 0) return
  // console.log('AddUniqueNumberingString')

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

export default AddUniqueNumberingString
