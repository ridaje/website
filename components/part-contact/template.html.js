export default `
<div id="part">
  <part-title id="title" prop.data="data"></part-title>
  <part-subtitle id="subtitle" prop.data="data"></part-subtitle>
  <div id="contacts">
    <div class="form">
      <div class="field">
        <label class="label" for="name" text="data.name"></label>
        <input class="input" id="name" type="text">
      </div>
      <div class="field">
        <label class="label" for="email" text="data.email"></label>
        <input class="input" id="email" type="email">
      </div>
      <div class="field">
        <label class="label" for="message" text="data.message"></label>
        <textarea class="textarea" id="message" type="text"></textarea>
      </div>
      <button id="button" text="data.button" ev.click="on_submit"></button>
    </div>
  </div>
</div>
`