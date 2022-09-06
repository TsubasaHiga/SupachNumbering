import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer'
import RateReviewIcon from '@mui/icons-material/RateReview'
import ShopIcon from '@mui/icons-material/Shop'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import { memo } from 'react'

import Logo from '~/assets/img/icon-128.png'
import define from '~/const/define'
import GetI18n from '~/modules/GetI18n'

import styles from './Header.module.scss'

const linkList = [
  {
    id: 'store',
    title: 'popup_web_store',
    link: define.STORE_URL,
    icon: <ShopIcon fontSize="inherit" color="primary" />,
  },
  {
    id: 'review',
    title: 'popup_review',
    link: define.STORE_URL + '/reviews',
    icon: <RateReviewIcon fontSize="inherit" color="primary" />,
  },
  {
    id: 'support',
    title: 'popup_support',
    link: define.STORE_URL + '/support',
    icon: <QuestionAnswerIcon fontSize="inherit" color="primary" />,
  },
]

const Header = (): JSX.Element => {
  const manifest = chrome.runtime.getManifest()

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <p className={styles.title}>
          <img className={styles.logo} src={Logo} alt="Supach Numbering" />
          <span className={styles.name}>
            <span className={styles.text}>Supach Numbering</span>
            <span className={styles.version}>{manifest.version}</span>
          </span>
        </p>

        <div className={styles.links}>
          {linkList.map((link) => (
            <a
              key={link.id}
              href={link.link}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Tooltip title={GetI18n(link.title)} arrow placement="bottom">
                <IconButton color="inherit">{link.icon}</IconButton>
              </Tooltip>
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}

export default memo(Header)
