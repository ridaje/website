export default `
<div id="steps">
  <template repeat="data.steps">
    <part-step class="step" prop.data="item"></part-step>
  </template>
</div>
`