const asideTemplate =
`<img src="img/cover-img.svg" alt="profile">
  <h1>I am a Front End &<br/>Ruby on Rails Developer</h1>
  <div id="submenu">
    <a href="#testimonials" class="smooth">testimonials <i class="fa fa-quote-right"></i></a>
    <a href="#featured-code" class="smooth">featured code <i class="fa fa-code"></i></a>
    <a href="mailto:alejandro.ginesmartinez@gmail.com?subject=Contact%20from%20alexgines.com." rolle="button">contact me <i class="fa fa-envelope-o"></i></a>
  </div>`;
document.getElementById('cover-sidebar').innerHTML += asideTemplate;
