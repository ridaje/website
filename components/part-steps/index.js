import { PartStep } from '../part-step/index.js'

import * as template from './template.html.js'
import * as style from './style.css.js'

export class PartSteps extends Pantarei.Component {

  static get is () { return 'part-steps' }

  static get style () { return style.default }

  static get template () { return template.default }

}

window.customElements.define(PartSteps.is, PartSteps)