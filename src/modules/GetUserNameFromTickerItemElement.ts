/**
 * GetUserNameFromTickerItemElement
 * @param element
 * @returns
 */
const GetUserNameFromTickerItemElement = async (
  element: HTMLElement,
  timeoutMillisecond: number,
  intervalMillisecond: number
): Promise<string> => {
  // 画像のaltからユーザー名を取得するので要素を取得
  const targetElement = element.querySelector('#img') as HTMLImageElement

  // 画像のaltは動的に生成されるのでsetIntervalで取得できるまでポーリングする
  return new Promise(async (resolve, reject) => {
    // 一定時間で強制的にintervalを終了させる
    const timer = setTimeout(() => {
      clearInterval(interval)
      console.log('timeout')
      resolve('-')
    }, timeoutMillisecond)

    // interval
    const interval = setInterval(() => {
      console.log('interval')
      const alt = targetElement.alt
      if (alt) {
        clearInterval(interval)
        clearTimeout(timer)
        resolve(alt)
      }
    }, intervalMillisecond)
  })
}

export default GetUserNameFromTickerItemElement
