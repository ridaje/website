import { PartTitle } from '../part-title/index.js'
import { PartSubtitle } from '../part-subtitle/index.js'
import { PartOffers } from '../part-offers/index.js'

import * as template from './template.html.js'
import * as style from './style.css.js'

export class PartBlock3 extends Pantarei.Component {

  static get is () { return 'part-block-3' }

  static get style () { return style.default }

  static get template () { return template.default }

  render () {
    if (!this.data) {
      return
    }

    if (this.data.background) {
      this.style.backgroundColor = this.data.background;
    }
  }

}

window.customElements.define(PartBlock3.is, PartBlock3)