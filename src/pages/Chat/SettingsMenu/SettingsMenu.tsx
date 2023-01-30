import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuList from '@mui/material/MenuList'
import { memo, useCallback, useState } from 'react'

import Logo from '~/assets/img/icon-34.png'
import { useSettingsStore } from '~/store/atoms/useSettingsStore'
import { SettingsType } from '~/types/SettingsType'

import MenuEnableAll from './components/MenuEnableAll/MenuEnableAll'
import MenuFooter from './components/MenuFooter/MenuFooter'
import MenuHeader from './components/MenuHeader/MenuHeader'
import MenuOpenPopupPage from './components/MenuOpenPopupPage/MenuOpenPopupPage'
import MenuReapply from './components/MenuReapply/MenuReapply'
import styles from './SettingsMenu.module.scss'

const ITEM_HEIGHT = 48

const SettingsMenu = (): JSX.Element => {
  const manifest = chrome.runtime.getManifest()

  const [settings] = useSettingsStore()
  const { isDisplayChatOnSettingMenu }: SettingsType = settings

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }, [])
  const handleClose = useCallback(() => {
    setAnchorEl(null)
  }, [])

  return (
    <>
      {isDisplayChatOnSettingMenu && (
        <div className={styles.root}>
          <IconButton
            className={styles.button}
            aria-label="more"
            id="long-button"
            aria-controls={open ? 'long-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <img src={chrome.runtime.getURL(Logo)} alt={manifest.name} />
          </IconButton>

          <Menu
            id="long-menu"
            MenuListProps={{
              'aria-labelledby': 'long-button',
              disablePadding: true
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5
              }
            }}
          >
            <MenuList>
              <MenuHeader manifest={manifest} />
              <Divider />
              <MenuEnableAll />
              <MenuReapply handleClose={handleClose} />
              <MenuOpenPopupPage handleClose={handleClose} />
              <Divider />
              <MenuFooter manifest={manifest} />
            </MenuList>
          </Menu>
        </div>
      )}
    </>
  )
}

export default memo(SettingsMenu)
