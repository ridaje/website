'use strict';

var template_html = `
<div id="part">
  <div id="container">
    <div id="image" class="fit"></div>
    <div id="overlay" class="fit"></div>
    <div id="content" class="fit">
      <div id="banner">
        <h1 id="title" text="data.title"></h1>
        <h2 id="tagline" text="data.subtitle"></h2>
      </div>
    </div>
  </div>
</div>
`

var style_css = `
:host {
  display: block;
  box-sizing: border-box;
  width: 100%;
}

#part {
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  min-height: 400px;
  padding: 60px;
}

#container {
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
}

.fit {
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

#image {
  background-size: cover;
  background-position: center;
}

#overlay {
  background-color: #00ff80;
  opacity: .25;
}

#content {
  display: flex;
  align-items: center;
  justify-content: center;
}

#banner {
}

#title {
  line-height: 1em;
  font-size: 5em;
  letter-spacing: .2em;
  margin: .25em 0;
  font-family: var(--heading-font);
  text-transform: uppercase;
  text-align: center;
  color: white;
}

#tagline {
  font-size: 1.25em;
  line-height: 1;
  letter-spacing: .15em;
  text-transform: uppercase;
  font-family: var(--heading-font);
  text-align: center;
  color: white;
  margin: 0;
}
`

class PartHero extends Pantarei.Component {

  static get is () { return 'part-hero' }

  static get style () { return style_css }

  static get template () { return template_html }

  render () {
    if (!this.data) {
      return
    }

    if (this.data.image) {
      this.refs.image.style.backgroundImage = `url(${this.data.image})`;
    }
  }

}

window.customElements.define(PartHero.is, PartHero);

var template_html$1 = `
<div id="title" text="data.title"></div>
`

var style_css$1 = `
:host {
  display: block;
}

#title {
  display: block;
  font-family: var(--heading-font);
  color: var(--heading-color);
  text-transform: uppercase;
  position: relative;
  line-height: 1;
  padding-top: .5em;
  text-align: right;
}
#title:before {
  content: '';
  position: absolute;
  right: 0px;
  top: 0px;
  width: 100%;
  height: 2px;
  background: #272b2b;
}
`

class PartTitle extends Pantarei.Component {

  static get is () { return 'part-title' }

  static get style () { return style_css$1 }

  static get template () { return template_html$1 }

}

window.customElements.define(PartTitle.is, PartTitle);

var template_html$2 = `
<div id="subtitle" text="data.subtitle"></div>
`

var style_css$2 = `
:host {
  display: block;
}

#subtitle {
  font-family: var(--heading-font);
  color: var(--heading-color);
  font-size: 1.75em;
  line-height: 1;
  text-transform: uppercase;
}
`

class PartSubtitle extends Pantarei.Component {

  static get is () { return 'part-subtitle' }

  static get style () { return style_css$2 }

  static get template () { return template_html$2 }

}

window.customElements.define(PartSubtitle.is, PartSubtitle);

var template_html$3 = `
<div id="content" text="data.content"></div>
`

var style_css$3 = `
:host {
  display: block;
}

#content {
  grid-column: 3;
  font-family: var(--content-font);
  line-height: 1.5;
  text-align: justify;
  hyphens: auto;
}
`

class PartContent extends Pantarei.Component {

  static get is () { return 'part-content' }

  static get style () { return style_css$3 }

  static get template () { return template_html$3 }

}

window.customElements.define(PartContent.is, PartContent);

var template_html$4 = `
<div id="image"></div>
`

var style_css$4 = `
:host {
  display: block;
  width: 100%;
  height: 100%;
}

#image {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
`

class PartImage extends Pantarei.Component {

  static get is () { return 'part-image' }

  static get style () { return style_css$4 }

  static get template () { return template_html$4 }

  render () {
    if (!this.data) {
      return
    }

    if (!this.data.image) {
      return
    }

    this.refs.image.style.backgroundImage = `url(${this.data.image})`;
  }

}

window.customElements.define(PartImage.is, PartImage);

var template_html$5 = `
<div id="part">
  <part-title id="title" prop.data="data"></part-title>
  <part-subtitle id="subtitle" prop.data="data"></part-subtitle>
  <part-content id="content" prop.data="data"></part-content>
  <part-image id="image" prop.data="data"></part-image>
</div>
`

var style_css$5 = `
:host {
  display: block;
  max-width: var(--container-width);
  padding: 60px;
}

#part {
  display: grid;
  grid-template-columns: 2fr 6fr 4fr;
  grid-template-rows: auto 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  justify-content: stretch;
  justify-items: stretch;
  align-items: start;
}

#title {
  grid-column: 1;
  grid-row: 1;
}

#subtitle {
  grid-column: 2;
  grid-row: 1;
}

#content {
  grid-column: 2;
  grid-row: 2;
}

#image {
  grid-column: 3;
  grid-row: 1 / 3;
}
`

class PartBlock1 extends Pantarei.Component {

  static get is () { return 'part-block-1' }

  static get style () { return style_css$5 }

  static get template () { return template_html$5 }

}

window.customElements.define(PartBlock1.is, PartBlock1);

var template_html$6 = `
<div id="step">
  <div id="info">
    <div id="title" text="data.title"></div>
    <div id="description" text="data.description"></div>
  </div>
  <div id="image"></div>
</div>
`

var style_css$6 = `
:host {
  display: block;
}

#info {
  box-sizing: border-box;
  padding: 50px;
  height: 200px;
  background-color: white;
}

#title {
  text-align: center;
  font-family: var(--heading-font);
  color: var(--heading-color);
  line-height: 1;
  margin-bottom: 20px;
  text-transform: uppercase;
}

#description {
  text-align: center;
  font-size: .85em;
  line-height: 1.5;
}

#image {
  height: 200px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
`

class PartStep extends Pantarei.Component {

  static get is () { return 'part-step' }

  static get style () { return style_css$6 }

  static get template () { return template_html$6 }

  render () {
    if (!this.data) {
      return
    }

    if (!this.data.image) {
      return
    }

    this.refs.image.style.backgroundImage = `url(${this.data.image})`;
  }
}

window.customElements.define(PartStep.is, PartStep);

var template_html$7 = `
<div id="steps">
  <template repeat="data.steps">
    <part-step class="step" prop.data="item"></part-step>
  </template>
</div>
`

var style_css$7 = `
:host {
  display: block;
}

#steps {
  grid-column: 1 / 4;
  grid-row: 2;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 30px;
}

.step:nth-child(1) {
  grid-column: 1;
}

.step:nth-child(2) {
  grid-column: 2;
}

.step:nth-child(3) {
  grid-column: 3;
}
`

class PartSteps extends Pantarei.Component {

  static get is () { return 'part-steps' }

  static get style () { return style_css$7 }

  static get template () { return template_html$7 }

}

window.customElements.define(PartSteps.is, PartSteps);

var template_html$8 = `
<div id="part">
  <part-title id="title" prop.data="data"></part-title>
  <part-subtitle id="subtitle" prop.data="data"></part-subtitle>
  <part-steps id="steps" prop.data="data"></part-steps>
</div>
`

var style_css$8 = `
:host {
  display: block;
  padding: 60px;
  margin: 60px;
}

#part {
  box-sizing: border-box;
  max-width: 1200px;
}

#part {
  display: grid;
  grid-template-columns: 2fr 10fr;
  grid-template-rows: auto 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 60px;
}

#title {
  grid-column: 1;
  grid-row: 1;
}

#subtitle {
  grid-column: 2;
}

#steps {
  grid-column: 1 / 3;
  grid-row: 2;
}
`

class PartBlock2 extends Pantarei.Component {

  static get is () { return 'part-block-2' }

  static get style () { return style_css$8 }

  static get template () { return template_html$8 }

  render () {
    if (!this.data) {
      return
    }

    if (this.data.background) {
      this.style.backgroundColor = this.data.background;
    }
  }

}

window.customElements.define(PartBlock2.is, PartBlock2);

var template_html$9 = `
<div id="part">
  <div id="blockquote">
    <div id="quote" text="data.quote"></div>
    <div id="cite" text="data.cite"></div>
  </div>
</div>
`

var style_css$9 = `
:host {
  display: block;
  width: 100%;
  background-color: #efefef;
}

#part {
  padding: 120px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;

  background-repeat: no-repeat;
  background-position: center;
  font-size: 1.25em;
  text-shadow: 0 0 4px #efefef;
}

#blockquote {
  display: block;
}

#quote {
  font-style: italic;
  position: relative;
  font-size: 1.25em;
  padding-bottom: .5em;
}

#cite {
  font-family: var(--heading-font);
  text-transform: uppercase;
}
#cite:before {
  content: '— ';
}
`

class PartBlockquote extends Pantarei.Component {

  static get is () { return 'part-blockquote' }

  static get style () { return style_css$9 }

  static get template () { return template_html$9 }

  render () {
    if (!this.data) {
      return
    }

    if (this.data.image) {
      this.refs.part.style.backgroundImage = `url(${this.data.image})`;
    }
  }

}

window.customElements.define(PartBlockquote.is, PartBlockquote);

var template_html$10 = `
<div id="part">
  <div id="a" class="image"></div>
  <div id="b" class="image"></div>
  <div id="c" class="image"></div>
</div>
`

var style_css$10 = `
:host {
  display: block;
  box-sizing: border-box;
  width: 100%;
  padding: 60px;
}

#part {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  box-sizing: border-box;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
}

#a {
  grid-column: 1 / 3;
  grid-row: 1;
}

#b {
  grid-column: 1;
  grid-row: 2;
}

#c {
  grid-column: 2;
  grid-row: 2;
}

.image {
  height: 400px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  align-self: stretch;
}
`

class PartImages extends Pantarei.Component {

  static get is () { return 'part-images' }

  static get style () { return style_css$10 }

  static get template () { return template_html$10 }

  render () {
    if (!this.data) {
      return
    }

    if (!this.data.images) {
      return
    }

    this.refs.a.style.backgroundImage = `url(${this.data.images[0]})`;
    this.refs.b.style.backgroundImage = `url(${this.data.images[1]})`;
    this.refs.c.style.backgroundImage = `url(${this.data.images[2]})`;
  }

}

window.customElements.define(PartImages.is, PartImages);

var template_html$11 = `
<div id="part">
  <div>© 2018 Ridaje. All rights reserved</div>
</div>
`

var style_css$11 = `
:host {
  display: block;
  width: 100%;
  max-width: var(--container-width);
  font-size: smaller;
}

#part {
  padding: 1em 0;
}
`

class PartFooter extends Pantarei.Component {

  static get is () { return 'part-footer' }

  static get style () { return style_css$11 }

  static get template () { return template_html$11 }

}

window.customElements.define(PartFooter.is, PartFooter);

var data_json = [
  {
    title: 'Ridaje',
    subtitle: `C'è sempre un altra chance!`,
    image: 'https://images.pexels.com/photos/255441/pexels-photo-255441.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    title: 'La nostra missione',
    subtitle: 'Ridaje  trasforma i senzatetto in giardinieri urbani che si prendono cura delle aree verdi abbandonate della città',
    content: `Solo a Roma i senzatetto sono 8000 e le aree verdi del comune che non godono dell'adeguata manutenzione sono circa 44 milioni metri quadrati.
      Oggi queste aree verdi possono essere prese in gestione dai cittadini che, grazie al supporto dei giardinieri urbani di Ridaje, possono richiedere collettivamente la pulizia e la manutenzione del quartiere ripristinando il decoro urbano e risolvendo due problemi con un’unica soluzione.
      Inoltre l'obiettivo di Ridaje è rendere ogni cittadino socio dell'Azienda e quindi di detenere una quota societaria divenendone parte integrante.
      La visione di Ridaje non è pulire una città ma ridare dignità all'uomo integrando i senzatetto per riqualificare il verde pubblico.
      Daje...e Ridaje!`,
    image: 'https://images.pexels.com/photos/401213/pexels-photo-401213.jpeg?auto=compress&cs=tinysrgb&h=350'
  },
  {
    title: 'Cosa facciamo',
    subtitle: 'Ci prendiamo cura delle aree verdi',
    background: 'gold',
    steps: [
      {
        title: 'Pulizia',
        description: 'I nostri giardinieri provvedono alla pulitura dell’area.',
        image: 'https://images.pexels.com/photos/296230/pexels-photo-296230.jpeg?auto=compress&cs=tinysrgb&h=350'
      },
      {
        title: 'Progettazione',
        description: 'I nostri giardinieri progettano e decorano l’area d’interesse.',
        image: 'https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&h=350'
      },
      {
        title: 'Manutenzione',
        description: 'I nostri giardinieri attuano una costante manutenzione dell’area adottata.',
        image: 'https://images.pexels.com/photos/589/garden-grass-meadow-green.jpg?auto=compress&cs=tinysrgb&h=350'
      }
    ]
  },
  {
    quote: `Chi lavora con le sue mani è un lavoratore.
      Chi lavora con le sue mani e la sua testa è un artigiano.
      Chi lavora con le sue mani e la sua testa ed il suo cuore è un artista.`,
    cite: `San Francesco d'Assisi`,
    image: 'https://images.pexels.com/photos/886521/pexels-photo-886521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    title: 'Come facciamo',
    subtitle: 'Curiamo tutte le fasi di selezione dei Giardinieri',
    background: '#eee',
    steps: [
      {
        title: 'Scouting',
        description: 'Selezioniamo le persone più motivate a riscattarsi nella società.',
        image: 'https://images.pexels.com/photos/398532/pexels-photo-398532.jpeg?auto=compress&cs=tinysrgb&h=350'
      },
      {
        title: 'Formazione',
        description: 'Istruiamo le persone alle tecniche e metodologie di giardinaggio.',
        image: 'https://images.pexels.com/photos/707194/pexels-photo-707194.jpeg?auto=compress&cs=tinysrgb&h=350'
      },
      {
        title: 'Certificazione',
        description: 'Attestiamo l’abilitazione professionale dei nuovi giardinieri.',
        image: 'https://images.pexels.com/photos/58086/pexels-photo-58086.jpeg?auto=compress&cs=tinysrgb&h=350'
      }
    ]
  },
  {
    images: [
      'https://images.pexels.com/photos/305558/pexels-photo-305558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      'https://images.pexels.com/photos/7591/garden-flower-green-room-7591.jpg?auto=compress&cs=tinysrgb&h=350',
      'https://images.pexels.com/photos/295771/pexels-photo-295771.jpeg?auto=compress&cs=tinysrgb&h=350'
    ]
  },
  {
    title: 'Contattaci',
    subtitle: 'Riporta il verde nel tuo quartiere',
    description: 'Noi abbiamo le persone per farlo',
    button: 'Segui la nostra passione'
  }
]

var template_html$12 = `
<div id="app">
  <part-hero id="hero" prop.data="data.0"></part-hero>
  <part-block-1 id="mission" prop.data="data.1"></part-block-1>
  <part-block-2 id="what" prop.data="data.2"></part-block-2>
  <part-blockquote id="blockquote" prop.data="data.3"></part-blockquote>
  <part-block-2 id="how" prop.data="data.4"></part-block-2>
  <part-images id="images" prop.data="data.5"></part-images>
  <part-footer id="footer"></part-footer>
</div>
`

var style_css$12 = `
:host {
  display: block;
}

:host > * {
  --primary-color: #191B2F;
  --secondary-color: #191B2F;
  --container-width: 1200px;
  --heading-font: Oswald;
  --heading-color: #503629;
  --content-font: Lato;
}

:root {
  --primary-color: #191B2F;
  --secondary-color: #191B2F;
  --container-width: 1200px;
  --heading-font: Oswald;
  --heading-color: #503629;
  --content-font: Lato;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
`

class AppContainer extends Pantarei.Component {

  static get is () { return 'app-container' }

  static get style () { return style_css$12 }

  static get template () { return template_html$12 }

  static get props () {
    return {
      data: { value: data_json }
    }
  }

}

window.customElements.define(AppContainer.is, AppContainer);
