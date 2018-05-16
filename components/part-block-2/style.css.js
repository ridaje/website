export default `
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