import { PartOffer } from '../part-offer/index.js'

import * as template from './template.html.js'
import * as style from './style.css.js'

export class PartOffers extends Pantarei.Component {

  static get is () { return 'part-offers' }

  static get style () { return style.default }

  static get template () { return template.default }

}

window.customElements.define(PartOffers.is, PartOffers)