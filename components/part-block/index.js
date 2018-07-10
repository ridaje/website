import * as template from './template.html.js'
import * as style from './style.css.js'

export class PartBlock extends Pantarei.Component {

  static get is () { return 'part-block' }

  static get style () { return style.default }

  static get template () { return template.default }

}

window.customElements.define(PartBlock.is, PartBlock)