var about = [
  {
    p: 'At present, I am part of Zalando Marketing Services. And I contribute to build and leverage ZMS frontend tooling within zalando tech ecosystem.'
  },
  {
    p: 'I’m originally from Barcelona, but I lived and worked in London for a while before landing here.'
  },
  {
    p: 'Hi, I am a Javascript Developer based in Berlin.'
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
