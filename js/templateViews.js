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
  ]

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
})();

(function featuredCodeTemplate() {
  const featuredCode = [
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

      github: 'https://github.com/alexBCN84/portfolio',
      previous: '#code4',
      next: '#code2'
    }
  ];

  let i = featuredCode.length;
  while(i--) {
    const featuredTemplate =
    `<article id="${featuredCode[i].id}">
      <a href="${featuredCode[i].previous}" class="smooth-left"><i class="fa fa-angle-double-left arrow-code"></i></a>
      <blockquote>

        <h2>${featuredCode[i].title}</h2>
        <h3>${featuredCode[i].tools}</h3></br>
        <pre><code class="language-javascript">${featuredCode[i].code}</code></pre>
        <h2>...</h2>
        <a href="${featuredCode[i].github}">More code on <i class="fa fa-github-square"></i></a>
      </blockquote>
      <a href="${featuredCode[i].next}" class="smooth-left"><i class="fa fa-angle-double-right arrow-code"></i></a>
    </article>`;
    document.getElementById('scroll-featured-code').innerHTML += featuredTemplate;
  }
})();
