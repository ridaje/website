export default `
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
  --title-size: 1.25em;
  --subtitle-size: 3em;
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