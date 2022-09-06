import GetLocalStorage from '~/modules/GetLocalStorage'
import SetLocalStorage from '~/modules/SetLocalStorage'
import { CommonType } from '~/types/CommonType'

// onUpdate
const onUpdate = async () => {
  console.log('onUpdate')

  // local storageからcommonのデータを取得
  const commonValues = (await GetLocalStorage('common')) as CommonType

  // isUpdatedをtrueにする
  const value: CommonType = {
    ...commonValues,
    isUpdated: true,
  }

  // local storageにcommonのデータを保存
  await SetLocalStorage({ common: value })

  // アイコンにNEWバッジ追加
  await chrome.action.setBadgeText({ text: 'NEW' })
}

// clearBadgeText
const clearBadgeText = async () => {
  await chrome.action.setBadgeText({ text: '' })
}

// onInstalled listener
chrome.runtime.onInstalled.addListener((details) => {
  // update
  if (details.reason === 'update') onUpdate()
})

// onMessage listener
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // 設定画面のアップデートDialogを閉じた時
  if (request.type === 'closed-update-dialog') {
    console.log('closed-update-dialog')
    clearBadgeText()
  }
})

export {}
