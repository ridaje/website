export default `
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

@media (max-width: 1024px) {

  :host {
    padding: 20px;
  }

  #part {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }

  #title {
    grid-column: 1;
    grid-row: 1;
  }

  #subtitle {
    grid-column: 1;
    grid-row: 2;
  }

  #content {
    grid-column: 1;
    grid-row: 3;
  }

  #image {
    grid-column: 1;
    grid-row: 4;
  }

}
`