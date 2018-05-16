import { PartHero } from '../part-hero/index.js'
import { PartBlock1 } from '../part-block-1/index.js'
import { PartBlock2 } from '../part-block-2/index.js'
import { PartBlockquote } from '../part-blockquote/index.js'
import { PartImages } from '../part-images/index.js'
import { PartFooter } from '../part-footer/index.js'

import * as data from './data.json.js'
import * as template from './template.html.js'
import * as style from './style.css.js'

export class AppContainer extends Pantarei.Component {

  static get is () { return 'app-container' }

  static get style () { return style.default }

  static get template () { return template.default }

  static get props () {
    return {
      data: { value: data.default }
    }
  }

}

window.customElements.define(AppContainer.is, AppContainer)