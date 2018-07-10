export default `
:host {
  display: block;
}

:host {
  display: block;
  font-size: var(--title-size);
  font-family: var(--heading-font);
  color: var(--heading-color);
  text-transform: uppercase;
  position: relative;
  line-height: 1;
  padding-top: .5em;
  text-align: right;
}
:host:before {
  content: '';
  position: absolute;
  right: 0px;
  top: 0px;
  width: 100%;
  height: 2px;
  background: #272b2b;
}
`