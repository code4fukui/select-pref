# select-pref

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

都道府県選択タグ (Japanese Prefecture Selector Tag)

A simple, dependency-free Web Component (`<select-pref>`) for creating a dropdown list of Japanese prefectures.

## Demo

[View Demo](https://code4fukui.github.io/select-pref/)

## Features

-   **Language-aware (言語自動切替):** Automatically displays labels in Japanese or English based on the user's browser language.
-   **Zero Dependencies:** A single, lightweight ES module.
-   **Standard API:** Use `.value` to get/set the selection and `.onchange` for events.
-   **Simple Styling:** Comes with a clean, minimal default style.

## Usage

Import the module and use the `<select-pref>` tag in your HTML.

```html
<script type="module" src="https://code4fukui.github.io/select-pref/select-pref.js"></script>

<select-pref id="pref"></select-pref><br>

<p><input id="selected" placeholder="Selection will appear here"></p>
<p><button id="set">福井県をセット</button></p>

<script type="module">
  const pref = document.getElementById("pref");
  const selected = document.getElementById("selected");
  const set = document.getElementById("set");

  // Read the value when it changes
  pref.onchange = () => {
    selected.value = pref.value ? pref.value + "が選択されました" : "都道府県を選択してください";
  };

  // Set the value programmatically
  set.onclick = () => {
    pref.value = "福井県"; // Can also be set with "Fukui"
  };
</script>
```

## API

### Properties

-   `.value`
    -   **Get:** Returns the currently selected prefecture name as a string (e.g., `"東京都"` or `"Tokyo"`), depending on the browser language. Returns an empty string `""` if no prefecture is selected.
    -   **Set:** Sets the selected prefecture. You can use either the Japanese name (e.g., `pref.value = "福井県"`) or the English name (e.g., `pref.value = "Fukui"`).

### Events

-   `.onchange`
    -   Assign a function to this property to handle the event when a user selects a different prefecture.

## Requirements

This component relies on modern web platform features. A browser with support for the following is required:
-   Custom Elements v1
-   ES Modules

## Data Source

Prefecture data is fetched from the [address-japan](https://github.com/code4fukui/address-japan) project.
-   **Data file:** `https://code4fukui.github.io/address-japan/data/pref.json`

## Credit

Based on an idea from [福野泰介の一日一創 (Taisuke Fukuno's Daily Creation)](https://fukuno.jig.jp/3328).

## License

MIT License