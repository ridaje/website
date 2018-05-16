import * as template from './template.html.js'
import * as style from './style.css.js'

export class PartImages extends Pantarei.Component {

  static get is () { return 'part-images' }

  static get style () { return style.default }

  static get template () { return template.default }

  render () {
    if (!this.data) {
      return
    }

    if (!this.data.images) {
      return
    }

    this.refs.a.style.backgroundImage = `url(${this.data.images[0]})`
    this.refs.b.style.backgroundImage = `url(${this.data.images[1]})`
    this.refs.c.style.backgroundImage = `url(${this.data.images[2]})`
  }

}

window.customElements.define(PartImages.is, PartImages)