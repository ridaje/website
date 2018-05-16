export default `
:host {
  display: block;
}

#part {
  display: grid;
  grid-template-columns: 2fr 6fr 4fr;
  grid-template-rows: auto 1fr;
  box-sizing: border-box;
  grid-column-gap: 30px;
  grid-row-gap: 60px;
  padding: 0 60px;
}

#title {
  grid-column: 1;
  grid-row: 1;
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

#subtitle {
  grid-column: 2/4;
  font-family: var(--heading-font);
  color: var(--heading-color);
  font-size: 1.75em;
  line-height: 1;
  text-transform: uppercase;
}

#blockquote {
  grid-column: 2;
  grid-row: 1;
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

#steps {
  grid-column: 1 / 4;
  grid-row: 2;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 30px;
}

.step {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
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

.step .info {
  box-sizing: border-box;
  padding: 50px 30px;
  background-color: #efefef;
}

.step .title {
  text-align: center;
  font-family: var(--heading-font);
  color: var(--heading-color);
  line-height: 1;
  margin-bottom: 20px;
  text-transform: uppercase;
}

.step .description {
  text-align: center;
  font-size: .85em;
  line-height: 1.5;
}

.step .image {
  background-image: url('/images/hero.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
`