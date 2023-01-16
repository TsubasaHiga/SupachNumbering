const changeLog = [
  {
    version: '1.0.3',
    date: new Date('2022-09-17'),
    changes: [
      {
        type: 'fix',
        message:
          '「スーパーチャットにナンバリングを追加」機能の「ユニークIDを使用」または「ユーザー名を使用」を利用中にチャットが落ちた際、チャット復帰時に同機能が利用できなくなる問題の暫定対応を行いました。<br>なお本事象は様々な要因により発生する可能性があり、本対応により完全に解消されるわけではなく随時改善を行っていく予定です。'
      },
      {
        type: 'new',
        message:
          '設定画面より「スーパーチャットにナンバリングを追加」機能を任意のタイミングで再度適用を行える「再適用ボタン」を追加しました。何らかの理由で同機能が利用できない際にご利用頂けます。'
      },
      {
        type: 'update',
        message: '内部メンテナンスを実施しました。'
      }
    ]
  },
  {
    version: '1.0.2',
    date: new Date('2022-09-09'),
    changes: [
      {
        type: 'new',
        message: '<b>「ユーザー名を非表示」</b>機能を追加しました。🎉'
      },
      {
        type: 'new',
        message:
          '「スーパーチャットにナンバリングを追加」機能にて、<b>ナンバリング方式を選択出来るオプション</b>を追加しました。🎉<br>数字でのナンバリング方式以外に<b>「ユニークIDを使用（文字）」</b>、<b>「ユーザー名を使用（文字）」</b>の2つの方式から選択出来ます。'
      },
      {
        type: 'new',
        message:
          '「スーパーチャットを全て表示」機能をONにした際の<b>最大高（max-height）</b>を指定出来るようになりました。🎉'
      },
      {
        type: 'update',
        message:
          '本拡張機能がアップデートされた事を伝える処理を追加しました。今後はアップデートされた際にアイコンに「NEW」バッジの追加と、設定画面を開くと更新情報の表示を行います。またこの処理を機能させる為に新たに権限<code>background</code>を追加しました。'
      },
      {
        type: 'update',
        message: '設定画面のUIを改善しました。'
      },
      {
        type: 'update',
        message: '内部メンテナンスを実施しました。'
      }
    ]
  },
  {
    version: '1.0.1',
    date: new Date('2022-08-18'),
    changes: [
      {
        type: 'update',
        message: 'YouTube配信者側の画面<code>*://studio.youtube.com/*</code>での動作をサポートしました。'
      },
      {
        type: 'update',
        message: 'ライブラリのアップデートを実施しました。'
      },
      {
        type: 'update',
        message: '設定画面内の動作イメージ画像を更新しました。'
      }
    ]
  },
  {
    version: '1.0.0',
    date: new Date('2022-02-22'),
    changes: [
      {
        type: 'info',
        message: '初期リリース'
      }
    ]
  }
]
export default changeLog
