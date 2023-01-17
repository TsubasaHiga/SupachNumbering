import { memo } from 'react'

import styles from './MenuFooter.module.scss'

type Props = {
  manifest: chrome.runtime.Manifest
}

const MenuFooter = ({ manifest }: Props): JSX.Element => {
  return <div className={styles.version}>Version {manifest.version}</div>
}

export default memo(MenuFooter)
