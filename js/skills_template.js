var skills = [
  {
    heading: 'Management Tools',
    p: 'Git & Github, Agile Scrum, Agile Kanban.'
  },
  {
    heading: 'Build Tools',
    p: 'NPM, Webpack.'
  },
  {
    heading: 'Compiling Tools',
    p: 'Prepos, Babel.'
  },
  {
    heading: 'Architectural Concepts & Frontend Frameworks',
    p: 'WebSockets, Responsive Design, Bootstrap, Web APIs.'
  },
  {
    heading: 'Javascript Libreries & Frameworks',
    p: 'jQuery,Modernizr ,Handlebars, React JS, Angular JS, '
  },
  {
    heading: 'Programming & Markup',
    p: 'HTML, CSS & CSS3, SASS, vanilla JavaScript and ES6, JSON, Jsx, mySQL, PostgreSQL, Ruby, Slim'
  }
];

{
  var i = skills.length;
  while(i--) {
    const skillsTemplate =
    `<h3>${skills[i].heading}</h3>
     <p>${skills[i].p}</p>`;
    document.getElementById('skills-texts').innerHTML += skillsTemplate;
  };
}
