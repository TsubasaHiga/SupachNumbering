const define = {
  STORE_URL: `https://chrome.google.com/webstore/detail/${chrome.runtime.id}`,

  POPUP_WIDTH: 660 + 10, // スクロールバー分の10pxを追加（10pxは'src/pages/Popup/index.scss'に記載）
  POPUP_HEIGHT: 800,

  ELEMENT_READY_OPTIONS: {
    timeout: 10000,
    stopOnDomReady: false
  }
}

export default define
