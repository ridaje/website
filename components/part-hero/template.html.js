export default `
<div id="part">
  <div id="container">
    <div id="image" class="fit"></div>
    <div id="overlay" class="fit"></div>
    <div id="content" class="fit">
      <div id="banner">
        <h1 id="title" text="data.title"></h1>
        <h2 id="tagline" text="data.subtitle"></h2>
        <a id="button" text="data.tagline" attr.href="data.offers_link"></a>
      </div>
    </div>
  </div>
</div>
`