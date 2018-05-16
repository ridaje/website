import * as template from './template.html.js'
import * as style from './style.css.js'

export class PartSubtitle extends Pantarei.Component {

  static get is () { return 'part-subtitle' }

  static get style () { return style.default }

  static get template () { return template.default }

}

window.customElements.define(PartSubtitle.is, PartSubtitle)