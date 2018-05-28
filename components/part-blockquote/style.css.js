export default `
:host {
  display: block;
  width: 100%;
  background-color: #efefef;
}

#part {
  padding: 120px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;

  background-repeat: no-repeat;
  background-position: center;
  font-size: 1.25em;
  text-shadow: 0 0 4px #efefef;
}

#blockquote {
  display: block;
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

@media (max-width: 1024px) {

  #part {
    padding: 60px 30px;
    font-size: 1em;
  }

}
`