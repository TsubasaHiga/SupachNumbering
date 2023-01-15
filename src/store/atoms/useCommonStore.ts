import { createChromeStorageStateHookLocal } from 'use-chrome-storage'

import { CommonType } from '~/types/CommonType'

const SETTINGS_KEY = 'common'
const INITIAL_VALUE: CommonType = {
  // isUpdated
  isUpdated: false
}

export const useCommonStore = createChromeStorageStateHookLocal(SETTINGS_KEY, INITIAL_VALUE)
