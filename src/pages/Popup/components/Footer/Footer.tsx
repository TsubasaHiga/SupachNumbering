import GetI18n from '~/modules/GetI18n'

import styles from './Footer.module.scss'

const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <div className={styles.messagearea}>
        <p className={styles.caption}>
          Powered by{' '}
          <a
            href="https://cofus.work"
            target="_blank"
            rel="noreferrer noopener"
          >
            COFUS
          </a>
          ｜Developer{' '}
          <a
            href="https://twitter.com/_cofus"
            target="_blank"
            rel="noreferrer noopener"
          >
            Higa Tsubasa
          </a>
          ｜
          <a
            href="https://chrome-extensions.cofus.work"
            target="_blank"
            rel="noreferrer noopener"
          >
            {GetI18n('popup_footer_link')}
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
