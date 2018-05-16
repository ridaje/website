import * as template from './template.html.js'
import * as style from './style.css.js'

export class PartImage extends Pantarei.Component {

  static get is () { return 'part-image' }

  static get style () { return style.default }

  static get template () { return template.default }

  render () {
    if (!this.data) {
      return
    }

    if (!this.data.image) {
      return
    }

    this.refs.image.style.backgroundImage = `url(${this.data.image})`
  }

}

window.customElements.define(PartImage.is, PartImage)