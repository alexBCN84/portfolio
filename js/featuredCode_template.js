{
  var i = featuredCode.length;
  while(i--) {
    const featuredTemplate =
    `<article id="${featuredCode[i].id}">
      <a href="${featuredCode[i].previous}" class="smooth-featured-code"><i class="fa fa-angle-double-left arrow-code"></i></a>
      <blockquote>

        <h2>${featuredCode[i].title}</h2>
        <h3>${featuredCode[i].tools}</h3></br>
        <pre><code class="${featuredCode[i].language}">${featuredCode[i].code}</code></pre>
        <h2>...</h2>
        <a href="${featuredCode[i].github}">More code on <i class="fa fa-github-square arrow-code"></i></a>
      </blockquote>
      <a href="${featuredCode[i].next}" class="smooth-featured-code"><i class="fa fa-angle-double-right arrow-code"></i></a>
    </article>`;
    document.getElementById('scroll-featured-code').innerHTML += featuredTemplate;
  };
}
