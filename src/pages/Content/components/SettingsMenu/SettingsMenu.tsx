import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuList from '@mui/material/MenuList'
import { memo, useCallback, useState } from 'react'

import Logo from '~/assets/img/icon-34.png'

import MainSettingsReApplying from '../MainSettingsReApplying/MainSettingsReApplying'
import OpenPopupPage from '../OpenPopupPage/OpenPopupPage'
import styles from './SettingsMenu.module.scss'

const ITEM_HEIGHT = 48

const SettingsMenu = (): JSX.Element => {
  const manifest = chrome.runtime.getManifest()

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }, [])
  const handleClose = useCallback(() => {
    setAnchorEl(null)
  }, [])

  return (
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
          disablePadding: true,
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
          },
        }}
      >
        <MenuList>
          <div className={styles.title}>
            <span className={styles.logo}>
              <img src={chrome.runtime.getURL(Logo)} alt={manifest.name} />
            </span>
            <span className={styles.name}>
              <span className={styles.text}>{manifest.name}</span>
              <span className={styles.version}>{manifest.version}</span>
            </span>
          </div>
          <Divider />
          <MainSettingsReApplying handleClose={handleClose} />
          <OpenPopupPage handleClose={handleClose} />
        </MenuList>
      </Menu>
    </div>
  )
}

export default memo(SettingsMenu)
