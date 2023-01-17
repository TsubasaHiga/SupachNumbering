import { memo } from 'react'

import Logo from '~/assets/img/icon-34.png'

import styles from './MenuHeader.module.scss'

type Props = {
  manifest: chrome.runtime.Manifest
}

const MenuHeader = ({ manifest }: Props): JSX.Element => {
  return (
    <div className={styles.title}>
      <span className={styles.logo}>
        <img src={chrome.runtime.getURL(Logo)} alt={manifest.name} />
      </span>
      <span className={styles.name}>
        <span className={styles.text}>{manifest.name}</span>
      </span>
    </div>
  )
}

export default memo(MenuHeader)
