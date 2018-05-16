import * as template from './template.html.js'
import * as style from './style.css.js'

export class PartHow extends Pantarei.Component {

  static get is () { return 'part-how' }

  static get style () { return style.default }

  static get template () { return template.default }

  static get props () {
    return {
      steps: { value: [1, 2, 3] }
    }
  }

}

window.customElements.define(PartHow.is, PartHow)