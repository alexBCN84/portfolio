var about = [
  {
    p: 'At present, I work at Zalando’s Advertising Engineering Department.'
  },
  {
    p: 'I’m originally from Barcelona, but I lived and worked in London for a while before landing here.'
  },
  {
    p: 'Hi, I am a Frontend and Ruby on Rails Developer based in Berlin.'
  }
];

{

  var i = about.length;
  while(i--) {
    const aboutTemplate =
    `<p>${about[i].p}</p><br/>`;
    document.getElementById('about-texts').innerHTML += aboutTemplate;
  };
}
