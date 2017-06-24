var testimonials = [
  {
    id: 'ref3',
    img: 'img/Kave_bulambo.jpg',
    link: 'https://www.linkedin.com/in/kave-bulambo-a090bb32/',
    name: 'Kave Bulambo',
    title: 'Tech Placement Specialist at CareerFoundry',
    testimonial: 'Alex is an inspirational young professional who has successfully transitioned his career from teaching to software engineering. Working with him  was absolutely delightful and showed me his courage and tenacity  for challenges bigger than himself.',
    previous: '#ref2',
    next: '#ref1'
  },
  // {
  //   id: 'ref3',
  //   img: 'img/Omar_mekky.jpg',
  //   link: 'https://www.linkedin.com/in/omarmekky/',
  //   name: 'Omar Mekky',
  //   title: 'Communications & Brand Consulting <br/>at Zalando SE',
  //   testimonial: 'Alejandro, despites having many tasks on his table, is always really "on the job" and finishes everything in a super timely manner. He is also highly responsive and responsible.',
  //   previous: '#ref2',
  //   next: '#ref4'
  // },
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
    testimonial:'Alex is a responsible colleague who has a thorough approach to tasks and is willing to go an extra mile in order to achieve the goal.',
    previous: '#ref3',
    next: '#ref2'
  }
];

{
  var i = testimonials.length;
  while(i--) {
    const testimonialTemplate =
    `<article id="${testimonials[i].id}">
      <a href="${testimonials[i].previous}" class="smooth-testimonials"><i class="fa fa-angle-double-left arrow-testimonials"></i></a>
      <blockquote>
        <a href="${testimonials[i].link}"><img src="${testimonials[i].img}" alt="#" /></a><br/>
        <i id="linkedin" class="fa fa-linkedin-square linkedin-testimonials"></i>
        <h2>${testimonials[i].name}</h2>
        <h3>${testimonials[i].title}</h3></br>
        <p>${testimonials[i].testimonial}</p>
      </blockquote>
      <a href="${testimonials[i].next}" class="smooth-testimonials"><i class="fa fa-angle-double-right arrow-testimonials"></i></a>
    </article>`;
    document.getElementById('scroll-testimonials').innerHTML += testimonialTemplate;
  };
}
