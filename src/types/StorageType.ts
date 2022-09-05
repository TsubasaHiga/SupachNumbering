import { CommonType } from './CommonType'
import { SettingsType } from './SettingsType'

export type StorageType = {
  common?: CommonType
  settings?: SettingsType
}

export type StorageTypeKeys = keyof StorageType
