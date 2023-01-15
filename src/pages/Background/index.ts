import define from '~/const/define'
import GetDateFormatted from '~/modules/GetDateString'
import GetLocalStorage from '~/modules/GetLocalStorage'
import SetLocalStorage from '~/modules/SetLocalStorage'
import { CommonType } from '~/types/CommonType'

// onUpdate
const onUpdate = async () => {
  console.log('onUpdate')

  // local storageからcommonのデータを取得
  const commonValues = (await GetLocalStorage('common')) as CommonType

  const value: CommonType = {
    ...commonValues,

    // isUpdatedをtrueにする
    isUpdated: true,

    // 最終アップデート日付を更新（ChangeLogの最初の項目で使用などを想定）
    lastUpdateDate: GetDateFormatted(new Date())
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

// openPopupPage
const openPopupPage = async (top: number, left: number) => {
  chrome.windows.create({
    focused: true,
    width: define.POPUP_WIDTH,
    height: define.POPUP_HEIGHT,
    type: 'popup',
    url: 'popup.html',
    top: top,
    left: left
  })
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

  // contentScriptのメニュー内から設定画面を開く時
  if (request.type === 'open-setting-page') {
    console.log('open-setting-page')
    openPopupPage(request.top, request.left)
  }
})

export {}
