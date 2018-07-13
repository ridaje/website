export default `
:host {
  display: block;
}

#steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 20px;
}

@media (max-width: 1024px) {

  #steps {
    grid-template-columns: 1fr;
  }

}
`