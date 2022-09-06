const changeLog = [
  {
    version: '1.0.2',
    date: '2022.09.09',
    changes: [
      {
        type: 'new',
        message: '<b>「ユーザー名を非表示」</b>機能を追加しました。🎉',
      },
      {
        type: 'new',
        message:
          '「スーパーチャットにナンバリングを追加」機能にて、<b>ナンバリング方式を選択出来るオプション</b>を追加しました。🎉<br>数字でのナンバリング方式以外に<b>「ユニークIDを使用（文字）」</b>、<b>「ユーザー名を使用（文字）」</b>の2つの方式から選択出来ます。',
      },
      {
        type: 'new',
        message:
          '「スーパーチャットを全て表示」機能をONにした際の<b>最大高（max-height）</b>を指定出来るようになりました。🎉',
      },
      {
        type: 'update',
        message:
          '本拡張機能がアップデートされた事を伝える処理を追加しました。今後はアップデートされた際にアイコンに「NEW」バッジの追加と、設定画面を開くと更新情報の表示を行います。またこの処理を機能させる為に新たに権限<code>background</code>を追加しました。',
      },
      {
        type: 'update',
        message: '設定画面のUIを改善しました。',
      },
      {
        type: 'update',
        message: '内部メンテナンスを実施しました。',
      },
    ],
  },
  {
    version: '1.0.1',
    date: '2022.08.18',
    changes: [
      {
        type: 'update',
        message:
          'YouTube配信者側の画面<code>*://studio.youtube.com/*</code>での動作をサポートしました。',
      },
      {
        type: 'update',
        message: 'ライブラリのアップデートを実施しました。',
      },
      {
        type: 'update',
        message: '設定画面内の動作イメージ画像を更新しました。',
      },
    ],
  },
  {
    version: '1.0.0',
    date: '2022.02.22',
    changes: [
      {
        type: 'info',
        message: '初期リリース',
      },
    ],
  },
]
export default changeLog
