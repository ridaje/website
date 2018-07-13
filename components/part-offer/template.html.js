export default `
<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
  <div id="step">
    <div id="image"></div>
    <div id="info">
      <div id="title" text="data.title"></div>
      <div id="description" text="data.description"></div>
      <input type="hidden" name="cmd" value="_s-xclick">
      <input type="hidden" name="hosted_button_id" attr.value="data.paypal_button_id">
      <input type="image" src="https://www.paypalobjects.com/it_IT/IT/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal è il metodo rapido e sicuro per pagare e farsi pagare online.">
      <img alt="" border="0" src="https://www.paypalobjects.com/it_IT/i/scr/pixel.gif" width="1" height="1">
    </div>
  </div>
</form>
`