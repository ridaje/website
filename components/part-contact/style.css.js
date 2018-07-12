export default `
:host {
  display: block;
  box-sizing: border-box;
  padding: 60px;
  margin: 60px;
  width: 100%;
  max-width: 1200px;
}

#part {
  box-sizing: border-box;
}

#part {
  display: grid;
  grid-template-columns: 2fr 10fr;
  grid-template-rows: auto 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 60px;
}

#title {
  grid-column: 1;
  grid-row: 1;
}

#subtitle {
  grid-column: 2;
}

#contacts {
  grid-column: 1 / 3;
  grid-row: 2;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.form {
  width: 100%;
  max-width: 600px;
}

.field {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
}

.field .label {
  font-family: var(--heading-font);
  text-transform: uppercase;
  color: var(--heading-color);
}

.field .input {
  font-size: 1.5em;
  border: none;
  outline: none;
  border: 2px solid #efefef;
  padding: 10px 10px;
}
.field .input:focus {
  border-color: gold;
}

.field .textarea {
  font-size: 1.5em;
  border: none;
  outline: none;
  border: 2px solid #efefef;
  padding: 10px 10px;
}
.field .textarea:focus {
  border-color: gold;
}

#button {
  border: none;
  background: limegreen;
  font-size: 1.5em;
  text-transform: uppercase;
  font-family: var(--heading-font);
  color: white;
  padding: 10px 20px;
  width: 100%;
  outline: none;
}
#button:hover {
  background: gold;
  cursor: pointer;
}

@media (max-width: 1024px) {

  :host {
    margin: 60px 0;
    padding: 20px;
  }

  #part {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }

  #subtitle {
    grid-column: 1;
    grid-row: 2;
  }

  #contacts {
    grid-column: 1;
    grid-row: 3;
  }

}
`
