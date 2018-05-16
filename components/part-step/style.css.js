export default `
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