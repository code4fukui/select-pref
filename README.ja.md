# select-pref

都道府県選択タグ (Japanese Prefecture Selector Tag)

日本の都道府県のドロップダウンリストを作成するための、シンプルで依存関係のないWebコンポーネント（`<select-pref>`）です。

## デモ

[デモを見る](https://code4fukui.github.io/select-pref/)

## 特徴

-   **言語自動切替 (Language-aware):** ユーザーのブラウザの言語設定に応じて、自動的に日本語または英語でラベルを表示します。
-   **依存関係なし (Zero Dependencies):** 単一の軽量なESモジュールです。
-   **標準API:** `.value` で選択内容の取得・設定を行い、`.onchange` でイベントを処理します。
-   **シンプルなスタイル:** クリーンでミニマルなデフォルトスタイルが適用されています。

## 使い方

モジュールをインポートし、HTML内で `<select-pref>` タグを使用します。

```html
<script type="module" src="https://code4fukui.github.io/select-pref/select-pref.js"></script>

<select-pref id="pref"></select-pref><br>

<p><input id="selected" placeholder="選択内容がここに表示されます"></p>
<p><button id="set">福井県をセット</button></p>

<script type="module">
  const pref = document.getElementById("pref");
  const selected = document.getElementById("selected");
  const set = document.getElementById("set");

  // 値が変更された際に取得する
  pref.onchange = () => {
    selected.value = pref.value ? pref.value + "が選択されました" : "都道府県を選択してください";
  };

  // プログラムから値を設定する
  set.onclick = () => {
    pref.value = "福井県"; // "Fukui" と設定することも可能です
  };
</script>
```

## API

### プロパティ

-   `.value`
    -   **取得 (Get):** ブラウザの言語設定に応じて、現在選択されている都道府県名を文字列で返します（例: `"東京都"` または `"Tokyo"`）。都道府県が選択されていない場合は空文字列 `""` を返します。
    -   **設定 (Set):** 選択する都道府県を設定します。日本語名（例: `pref.value = "福井県"`）と英語名（例: `pref.value = "Fukui"`）のどちらでも指定可能です。

### イベント

-   `.onchange`
    -   ユーザーが別の都道府県を選択した際のイベントを処理するには、このプロパティに関数を代入します。

## 要件

このコンポーネントはモダンなWebプラットフォームの機能に依存しています。以下の機能に対応したブラウザが必要です。
-   Custom Elements v1
-   ES Modules

## データソース

都道府県データは [address-japan](https://github.com/code4fukui/address-japan) プロジェクトから取得しています。
-   **データファイル:** `https://code4fukui.github.io/address-japan/data/pref.json`

## クレジット

[福野泰介の一日一創 (Taisuke Fukuno's Daily Creation)](https://fukuno.jig.jp/3328) のアイデアを基に作成されています。

## ライセンス

MIT License
