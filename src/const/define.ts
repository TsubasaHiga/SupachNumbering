const define = {
  STORE_URL: `https://chrome.google.com/webstore/detail/${chrome.runtime.id}`,

  POPUP_WIDTH: 660,
  POPUP_HEIGHT: 800,

  ELEMENT_READY_OPTIONS: {
    timeout: 10000,
    stopOnDomReady: false
  }
}

export default define
