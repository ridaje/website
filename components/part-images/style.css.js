export default `
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

@media (max-width: 1024px) {

  :host {
    padding: 20px;
  }

  #part {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }

  .image {
    height: 200px;
  }

  #a {
    grid-column: 1;
    grid-row: 1;
  }

  #b {
    grid-column: 1;
    grid-row: 2;
  }

  #c {
    grid-column: 1;
    grid-row: 3;
  }

}
`