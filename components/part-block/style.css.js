export default `
:host {
  display: block;
  width: 100%;
  height: 100vh;
  border: 20px solid white;
  box-sizing: border-box;
}

#part {
  background-image: inherit;
  background-color: #efefef;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(9, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  justify-content: stretch;
  justify-items: stretch;
  align-items: stretch;
}
`