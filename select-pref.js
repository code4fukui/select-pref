import { TownID } from "https://code4fukui.github.io/TownID/TownID.js";

class SelectPref extends HTMLElement {
  constructor() {
    super();
    this.init();
  }
  async init() {
    const prefs = await TownID.getPrefs();
    const cr = (tag) => document.createElement(tag);
    const sel = cr("select");
    const opt = cr("option");
    opt.textContent = "都道府県";
    opt.value = "";
    sel.appendChild(opt);
    for (const pref of prefs) {
      const opt = cr("option");
      opt.textContent = pref;
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
    this.sel.value = v;
  }
}

customElements.define("select-pref", SelectPref);

export { SelectPref };
