/**
 * GetUserNameFromTickerItemElement
 * @param element
 * @returns
 */
const GetUserNameFromTickerItemElement = async (
  element: HTMLElement,
  timeoutMillisecond = 10000,
  intervalMillisecond = 100
): Promise<string> => {
  // 画像のaltは動的に生成されるのでsetIntervalで取得できるまでポーリングする
  return new Promise(async (resolve, reject) => {
    // 画像のaltからユーザー名を取得するので要素を取得
    const imageElement = element.querySelector('#author-photo #img') as HTMLImageElement
    if (!imageElement) {
      console.warn('imageElement not found')
      reject('-')
      return
    }

    // timeout
    const timer = setTimeout(() => {
      clearInterval(interval)
      console.error('timeout')
      reject('-')
    }, timeoutMillisecond)

    // interval
    const interval = setInterval(() => {
      const alt = imageElement.alt
      const existAlt = alt && alt.length > 0 ? true : false

      console.log({ id: element.id, existAlt, alt, imageElement })

      if (existAlt) {
        clearInterval(interval)
        clearTimeout(timer)
        resolve(alt)
      }
    }, intervalMillisecond)
  })
}

export default GetUserNameFromTickerItemElement
