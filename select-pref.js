class SelectPref extends HTMLElement {
  constructor() {
    super();
    this.init();
  }
  async init() {
    const ja = navigator.language == "ja";
    //const ja = false;
    const url = "https://code4fukui.github.io/address-japan/data/pref.json";
    this.prefs = await (await fetch(url)).json();
    const cr = (tag) => document.createElement(tag);
    const sel = cr("select");
    const opt = cr("option");
    opt.textContent = ja ? "都道府県" : "Prefecture";
    opt.value = "";
    sel.appendChild(opt);
    for (const pref of this.prefs) {
      const opt = cr("option");
      opt.textContent = ja ? pref.都道府県名 : pref.都道府県名_英字;
      sel.appendChild(opt);
    }
    this.appendChild(sel);
    this.sel = sel;
    this.sel.onchange = () => {
      if (this.onchange) {
        this.onchange();
      }
    };

    // style
    Object.assign(sel.style, {
      "fontSize": "18px",
      "padding": "4px 4px",
    });
  }
  get value() {
    return this.sel.value;
  }
  set value(v) {
    const ja = navigator.language == "ja";
    //const ja = false;
    const p = this.prefs.find(p => p.都道府県名 == v || p.都道府県名_英字 == v);
    this.sel.value = ja ? p.都道府県名 : p.都道府県名_英字;
  }
}

customElements.define("select-pref", SelectPref);

export { SelectPref };
