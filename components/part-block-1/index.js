import { PartTitle } from '../part-title/index.js'
import { PartSubtitle } from '../part-subtitle/index.js'
import { PartContent } from '../part-content/index.js'
import { PartImage } from '../part-image/index.js'

import * as template from './template.html.js'
import * as style from './style.css.js'

export class PartBlock1 extends Pantarei.Component {

  static get is () { return 'part-block-1' }

  static get style () { return style.default }

  static get template () { return template.default }

}

window.customElements.define(PartBlock1.is, PartBlock1)