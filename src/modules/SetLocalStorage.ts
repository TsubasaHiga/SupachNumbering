const SetLocalStorage = (data: any): any => {
  if (!chrome.runtime) {
    console.warn(`Called Local Storage [${Object.keys(data)}]`, data)
    return false
  }

  return new Promise<void>((resolve) => {
    chrome.storage.local.set(data, () => {
      // Get error
      const error = chrome.runtime.lastError
      if (error) console.error(error)

      resolve()
    })
  })
}

export default SetLocalStorage
