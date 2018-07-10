import * as template from './template.html.js'
import * as style from './style.css.js'

export class PartContact extends Pantarei.Component {

  static get is () { return 'part-contact' }

  static get style () { return style.default }

  static get template () { return template.default }

  on_submit (event) {
    this.send()
  }

  async send () {
    let valid = this.validate()

    if (!valid) {
      return
    }

    let url = this.data.url
    let method = 'POSt'
    let mode = 'no-cors'

    let name = this.refs.name.value
    let email = this.refs.email.value
    let message = this.refs.message.value
    let body = `name=${name}&email=${email}&message=${message}`

    let res = await fetch(url, { method, mode, body })
    let text = await res.text()
    console.log(text)

    alert(this.data.thanks)

    this.clear()
  }

  validate () {
    let name = this.refs.name.value
    let email = this.refs.email.value
    let message = this.refs.message.value

    if (name === '') {
      return false
    }
    if (email === '') {
      return false
    }
    if (email === '') {
      return false
    }

    return true
  }

  clear () {
    this.refs.name.value = ''
    this.refs.email.value = ''
    this.refs.message.value = ''
  }
}

window.customElements.define(PartContact.is, PartContact)