{
  var i = testimonials.length;
  while(i--) {
    const testimonialTemplate =
    `<article id="${testimonials[i].id}">
      <a href="${testimonials[i].previous}" class="smooth-testimonials"><i class="fa fa-angle-double-left arrow-testimonials"></i></a>
      <blockquote>
        <a href="${testimonials[i].link}"><img src="${testimonials[i].img}" alt="#" /></a>
        <h2>${testimonials[i].name}</h2>
        <h3>${testimonials[i].title}</h3></br>
        <p>${testimonials[i].testimonial}</p>
      </blockquote>
      <a href="${testimonials[i].next}" class="smooth-testimonials"><i class="fa fa-angle-double-right arrow-testimonials"></i></a>
    </article>`;
    document.getElementById('scroll-testimonials').innerHTML += testimonialTemplate;
  };
}
