import style from './Footer.module.scss'

const Footer = (): JSX.Element => {
  return (
    <footer className={style.footer}>
      <div className={style.messagearea}>
        <p className={style.caption}>
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
            className={style.ja}
            href="https://chrome-extensions.cofus.work"
            target="_blank"
            rel="noreferrer noopener"
          >
            Chrome拡張機能リストを見る
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
