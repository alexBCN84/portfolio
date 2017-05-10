var submenu = {
  O1: 'testimonials',
  O2: 'featured code',
  O3: 'contact me',
  email: 'mailto:alejandro.ginesmartinez@gmail.com?subject=Contact%20from%20alexgines.com'
};

{
  const submenuTemplate =
  `<a href="#testimonials" class="smooth">${submenu.O1}<i class="fa fa-quote-right"></i></a>
  <a href="#featured-code" class="smooth">${submenu.O2}<i class="fa fa-code"></i></a>
  <a href="${submenu.email}" rolle="button">${submenu.O3} <i class="fa fa-envelope-o"></i></a>`;

 var responsiveSubmenu = {
   deleteContent: function() {
     document.getElementById('submenu-mobile').innerHTML = '';
     document.getElementById('submenu-desktop').innerHTML = '';
   },
   onLoad: function() {
     const width = $(window).width();
     width < 768 ? document.getElementById('submenu-mobile').innerHTML += submenuTemplate : document.getElementById('submenu-desktop').innerHTML += submenuTemplate
   },
   onResize: function() {
     var widthResize = $(window).resize(function () {
       const width = $(window).width();
       width < 768 ? (
         responsiveSubmenu.deleteContent(),
         document.getElementById('submenu-mobile').innerHTML += submenuTemplate
       ) : (
         responsiveSubmenu.deleteContent(),
         document.getElementById('submenu-desktop').innerHTML += submenuTemplate
       );
     });
   }
  }
  responsiveSubmenu.onLoad();
  responsiveSubmenu.onResize();
}
