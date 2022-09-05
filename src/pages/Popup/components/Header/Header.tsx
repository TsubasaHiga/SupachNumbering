import Logo from '~/assets/img/icon-128.png'
import define from '~/const/define'

import style from './Header.module.scss'

const Header = (): JSX.Element => {
  const manifest = chrome.runtime.getManifest()

  return (
    <header className={style.header}>
      <div className={style.inner}>
        <p className={style.title}>
          <img className={style.logo} src={Logo} alt="Supach Numbering" />
          <a
            className={style.name}
            href={define.STORE_URL}
            target="_blank"
            rel="noreferrer noopener"
          >
            <span className={style.text}>Supach Numbering</span>
            <span className={style.version}>{manifest.version}</span>
          </a>
        </p>
      </div>
    </header>
  )
}

export default Header
