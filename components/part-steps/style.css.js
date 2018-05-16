export default `
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