export default `
:host {
  display: block;
  box-sizing: border-box;
  width: 100%;
}

#part {
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  min-height: 400px;
  padding: 60px;
}

#container {
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
}

.fit {
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

#image {
  background-size: cover;
  background-position: center;
}

#overlay {
  background-color: #00ff80;
  opacity: .25;
}

#content {
  display: flex;
  align-items: center;
  justify-content: center;
}

#title {
  line-height: 1em;
  font-size: 5em;
  letter-spacing: .2em;
  margin: .25em 0;
  font-family: var(--heading-font);
  text-transform: uppercase;
  text-align: center;
  color: white;
}

#tagline {
  font-size: 1.25em;
  line-height: 1;
  letter-spacing: .15em;
  text-transform: uppercase;
  font-family: var(--heading-font);
  text-align: center;
  color: white;
  margin: 0;
}

@media (max-width: 1024px) {

  #part {
    padding: 0;
  }

}
`