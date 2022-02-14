import React from 'react'
import styles from './Popup.module.scss'
import { IconBellRinging, IconBrandChrome, IconTools } from '@tabler/icons'
import Footer from './components/Footer/Footer'
import define from '../../common/constants/define'

const Popup = (): JSX.Element => {
  return (
    <>
      <div className={styles.root}>
        <section>
          <h2>
            <IconBrandChrome size={18} stroke="1.5" />
            <span>本拡張機能について</span>
          </h2>
          <div className={styles.content}>
            <p>
              本拡張機能は「
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                title="example"
              >
                example
              </a>
              」<b>example</b>
              を追加するChrome拡張機能です。
            </p>
          </div>
        </section>

        <section>
          <h2>
            <IconTools size={18} stroke="1.5" />
            <span>使い方＆動作イメージ</span>
          </h2>
          <div className={styles.content}>
            <small>
              バージョンによっては一部UIのデザインや機能が異なる場合がございます。
            </small>
          </div>
        </section>

        <section>
          <h2>
            <IconBellRinging size={18} stroke="1.5" />
            <span>動作しない時</span>
          </h2>
          <div className={styles.content}>
            <p>
              example
              MEのページ仕様が変わった場合正常に動作しなくなる可能性があります。その際は
              <a
                href={define.STORE_URL}
                target="_blank"
                rel="noreferrer noopener"
              >
                ウェブストア内のサポート
              </a>
              または
              <a
                href="https://twitter.com/_cofus"
                target="_blank"
                rel="noreferrer noopener"
              >
                @_cofus
              </a>
              までお知らせ下さい。
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}

export default Popup
