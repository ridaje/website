export default `
<div id="steps">
  <template repeat="data.offers">
    <part-offer class="step" prop.data="item"></part-offer>
  </template>
</div>
`