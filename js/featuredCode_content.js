var featuredCode = [
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
