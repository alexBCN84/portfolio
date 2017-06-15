
const template = `<div id="front-page">
          <h1>Front-end  &amp; Ruby on Rails Developer</h1>
          <div id="divider"></div>
          <ul class="intro-list">
            <li id="subheading">I'm passionate about the web and I proudly turn my passion into my career</li>
          </ul>
          <ul id="more-buttons">
            <li><a href="#testimonials" id="btn-testimonials" class="smooth button">testimonials</a></li>
            <li><a href="#featured-code" id="btn-featured-code" class="smooth button">featured code</a></li>
          </ul>
        </div>`

document.getElementById('landingBlock').innerHTML += template;
