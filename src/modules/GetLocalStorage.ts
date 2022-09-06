import { StorageType, StorageTypeKeys } from '~/types/StorageType'

const GetLocalStorage = (
  key: StorageTypeKeys | null = null
): Promise<StorageType> | false => {
  if (!chrome.runtime) return false

  return new Promise((resolve) => {
    chrome.storage.local.get(key, (item) => {
      key ? resolve(item[key]) : resolve(item)
    })
  })
}

export default GetLocalStorage
