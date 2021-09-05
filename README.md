# select-pref
 
都道府県選択タグ, select-prefタグ

## usage

```html
<script type="module" src="https://code4fukui.github.io/select-pref/select-pref.js"></script>

<select-pref id="pref"></select-pref><br>

<p><input id="selected"></p>
<p><button id="set">福井県をセット</button></p>

<script type="module">
pref.onchange = () => {
  selected.value = pref.value ? pref.value + "が選択されました" : "都道府県を選択してください";
};
set.onclick = () => {
  pref.value = "福井県";
};
</script>
```
