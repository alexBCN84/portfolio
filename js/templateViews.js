// testimonials module
(function testimonialsTemplate() {
  const testimonials = [
    {
      id: 'ref4',
      img: 'img/Kave_bulambo.jpg',
      link: 'https://www.linkedin.com/in/kave-bulambo-a090bb32/',
      name: 'Kave Bulambo',
      title: 'Communications & Brand Consulting <br/>at Zalando SE',
      testimonial: 'Alejandro, despites having many tasks on his table, is always really "on the job" and finishes everything in a super timely manner. He is also highly responsive and responsible.',
      previous: '#ref3',
      next: '#ref1'
    },
    {
      id: 'ref3',
      img: 'img/Omar_mekky.jpg',
      link: 'https://www.linkedin.com/in/omarmekky/',
      name: 'Omar Mekky',
      title: 'Communications & Brand Consulting <br/>at Zalando SE',
      testimonial: 'Alejandro, despites having many tasks on his table, is always really "on the job" and finishes everything in a super timely manner. He is also highly responsive and responsible.',
      previous: '#ref2',
      next: '#ref4'
    },
    {
      id: 'ref2',
      img: 'img/Uleshka_asher.jpg',
      link: 'https://www.linkedin.com/in/uleshka-asher-9096384/',
      name: 'Uleshka Asher',
      title: 'Communications & Brand Consulting <br/>at Zalando SE',
      testimonial: 'Alejandro, despites having many tasks on his table, is always really "on the job" and finishes everything in a super timely manner. He is also highly responsive and responsible.',
      previous: '#ref1',
      next: '#ref3'
    },
    {
      id: 'ref1',
      img:'img/Anna_kochegura.jpg',
      link:'https://www.linkedin.com/in/akochegura/',
      name:'Anna Kochegura',
      title:'Account Manager <br/>Zalando Media Solutions<br/>at Zalando SE',
      testimonial:'Alex is a responsible colleague who has a thorough approach to tasks and is willing to go an extra mile in order to achieve the goal',
      previous: '#ref4',
      next: '#ref2'
    }
  ];

// testimonials view
  {
    let i = testimonials.length;
    while(i--) {
      const testimonialTemplate =
      `<article id="${testimonials[i].id}">
        <a href="${testimonials[i].previous}" class="smooth-left"><i class="fa fa-angle-double-left arrow-testimonials"></i></a>
        <blockquote>
          <a href="${testimonials[i].link}"><img src="${testimonials[i].img}" alt="#" /></a>
          <h2>${testimonials[i].name}</h2>
          <h3>${testimonials[i].title}</h3></br>
          <p>${testimonials[i].testimonial}</p>
        </blockquote>
        <a href="${testimonials[i].next}" class="smooth-left"><i class="fa fa-angle-double-right arrow-testimonials"></i></a>
      </article>`;
      document.getElementById('scroll-testimonials').innerHTML += testimonialTemplate;
    };
  }
})();

// featuredCode module
(function featuredCodeTemplate() {
  const featuredCode = [
    {
      id: 'code3',
      title: 'BiBer App',
      tools: 'I have experience developing web applications with Ruby on Rails.',
      code:
`&lt;li id="sm-login-out"&gt;
  <% if user_signed_in? %>
    &lt;a&gt;Hello
      <% if current_user.admin? %>
      Admin
      <% else %>
        <% if current_user.first_name.present?%>
          <%= current_user.first_name %>
        <% else %>
          <%= current_user.email %>
        <% end %>
      <% end %>
    &lt;/a&gt;
  <% end %>
&lt;/li&gt;
&lt;li id="sm-login-out"&gt;
  <% if user_signed_in? %>
  &lt;a&gt;|&lt;/a&gt;
  <% end %>
&lt;/li&gt;`,
      github: 'https://github.com/alexBCN84/bikeberlin/blob/master/app/views/layouts/application.html.erb',
      previous: '#code2',
      next: '#code1',
      language: 'language-html'
    },
    {
      id: 'code2',
      title: 'Matching Game',
      tools: `I enhance the functionality of my CSS with
      <i class="ionicons ion-social-sass" style="font-size: 30px;"></i>
      nesting, mixins, variables and functions.`,
      code:
`#gamePannel {
  position: absolute;
  margin: 5%;
  width: 90%;
  height: 80%;
  border-radius: 20px;
  background-color: $gamePannelBackground;
  .gameBox {
    position: absolute;
    float: left;
    @include mQ (500px) {
      height: 48%;
      width: 96%;
    }
    @include mQ (3001px, 501px) {
      width: 48%;
    }
  }`,
      github: 'https://github.com/alexBCN84/matchinggame/blob/master/assets/scss/main.scss',
      previous: '#code1',
      next: '#code3',
      language: 'language-css'
    },
    {
      id: 'code1',
      title: 'notepad app',
      tools: `I structure my <i class="ionicons ion-social-javascript"></i> code
      following the module pattern for optimal readiblity and maintainability.`,
      code:
`var app = {
  init: function() {
    app.entries = dataStore.store('myData');
    view.setUpEventListeners();
    view.displayEntries();
  },

  entries: [],

  addEntry: function(entryTitle, entryText) {
    this.entries.push({
      entryDate: new Date().toDateString(),
      entryTitle: entryTitle,
      entryText: entryText,
      archived: false
    });
  },
`,

      github: 'https://github.com/alexBCN84/myNotepad/blob/master/public/client.js',
      previous: '#code3',
      next: '#code2',
      language: 'language-javascript'
    }
  ];

// featuredCode view
  {
    let i = featuredCode.length;
    while(i--) {
      const featuredTemplate =
      `<article id="${featuredCode[i].id}">
        <a href="${featuredCode[i].previous}" class="smooth-left"><i class="fa fa-angle-double-left arrow-code"></i></a>
        <blockquote>

          <h2>${featuredCode[i].title}</h2>
          <h3>${featuredCode[i].tools}</h3></br>
          <pre><code class="${featuredCode[i].language}">${featuredCode[i].code}</code></pre>
          <h2>...</h2>
          <a href="${featuredCode[i].github}">More code on <i class="fa fa-github-square"></i></a>
        </blockquote>
        <a href="${featuredCode[i].next}" class="smooth-left"><i class="fa fa-angle-double-right arrow-code"></i></a>
      </article>`;
      document.getElementById('scroll-featured-code').innerHTML += featuredTemplate;
    }
  }
})();
