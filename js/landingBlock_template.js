
const template = `<div id="front-page">
          <h1>Front-end  &amp; Ruby on Rails Developer</h1>
          <div id="divider"></div>
          <ul class="intro-list">
            <li id="subheading">I'm passionate about the web and I proudly turn my passion into my career</li>
          </ul>
          <div id="more-buttons">
            <a href="#testimonials" id="btn-testimonials" class="smooth button">testimonials</a>
            <a href="#featured-code" id="btn-featured-code" class="smooth button">featured code</a>
          </div>
        </div>`

document.getElementById('landingBlock').innerHTML += template;
