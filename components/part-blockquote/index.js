import * as template from './template.html.js'
import * as style from './style.css.js'

export class PartBlockquote extends Pantarei.Component {

  static get is () { return 'part-blockquote' }

  static get style () { return style.default }

  static get template () { return template.default }

  render () {
    if (!this.data) {
      return
    }

    if (this.data.image) {
      this.refs.part.style.backgroundImage = `url(${this.data.image})`
    }
  }

}

window.customElements.define(PartBlockquote.is, PartBlockquote)