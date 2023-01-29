import GetSha256 from '~/modules/GetSha256'
import GetUserNameFromTickerItemElement from '~/modules/GetUserNameFromTickerItemElement'
import { NumberingTypeUnique } from '~/types/SettingsType'

// 除外するクラス名
const ignoreClassNames = ['yt-live-chat-ticker-sponsor-item-renderer']

type Props = {
  tickerElement: HTMLElement
  numberingType: NumberingTypeUnique
  stringLength: number
  isChanged: boolean
}

/**
 * スーパーチャットの要素にユニークな文字列をデータ属性として追加する
 */
const AddUniqueNumberingString = async ({ tickerElement, numberingType, stringLength, isChanged }: Props) => {
  // tickerElement配下の'#content'要素を取得
  const tickerContentElement = tickerElement.querySelector('#content') as HTMLElement
  if (!tickerContentElement) {
    console.warn('tickerContentElement not found')
    return
  }

  // tickerPaidMessageItemのクラスリストを取得し
  // tickerContentElementClassListにignoreClassNamesが含まれる場合はスキップ
  const tickerContentElementClassList = tickerContentElement.classList
  if (ignoreClassNames.some((className) => tickerContentElementClassList.contains(className))) {
    console.warn('Skip sponsor')
    return
  }

  // tickerElementのidがない場合はスキップ
  if (!tickerElement.id || tickerElement.id.length <= 0) {
    console.warn('tickerElement.id not found')
    return
  }

  // isChangedがtrueの場合はtickerContentElementのデータ属性numberingTypeを削除する
  if (isChanged) {
    console.warn(`Remove data-${numberingType}`)
    delete tickerContentElement.dataset[numberingType]
  }

  // tickerContentElementのdata属性にnumberingTypeが既に存在する場合且つ、
  // 文字列の長さ指定が変わらない場合はスキップ
  if (tickerContentElement.dataset[numberingType]) {
    console.warn(`${numberingType} already exists`)
    return
  }

  // uniqueIdの場合
  if (numberingType === 'uniqueId') {
    // tickerElementのidからハッシュ値を取得
    const stringValue = await GetSha256(tickerElement.id)

    // データ属性にユニークな文字列としてセット
    tickerContentElement.dataset[numberingType] = stringLength > 0 ? stringValue.slice(0, stringLength) : stringValue
  }

  if (numberingType === 'uniqueUserName') {
    //  画像のaltからユーザー名を取得
    const stringValue = await GetUserNameFromTickerItemElement(tickerElement)

    // データ属性にユニークな文字列としてセット
    tickerContentElement.dataset[numberingType] = stringLength > 0 ? stringValue.slice(0, stringLength) : stringValue
  }
}

export default AddUniqueNumberingString
