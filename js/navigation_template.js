
const navigationTemplate = {
    templateBranding: `<h1 id="logo"><a href="index.html"><i></i><div><span id="brand-name">Alex Ginés</span><br/><span id="brand-prof">Web Developer</span></div></a></h1>`,
     templateMenuMobile: `<a class="to_nav" id="openNav" href="#"><i class="fa fa-bars menu-icon"></i></a>
    <!-- The overlay -->
    <div id="myNav" class="overlay">

        <!-- Button to close the overlay navigation -->
        <a href="#" id="closebtn" class="closeNav">&times;</a>

        <!-- Overlay content -->
        <div class="overlay-content">
            <a href="#about" class="closeNav">About</a>
            <a href="#featured-code" class="closeNav">Code</a>
            <a href="http://tutorialzine.com/2014/09/50-awesome-tools-and-resources-for-web-developers/" class="closeNav" target="blank">Resources</a>
            <a href="mailto:alejandro.ginesmartinez@gmail.com?subject=Contact%20from%20alexgines.com/"  class="closeNav" >Contact</a>
            <a href="http://alexgines.com/AlejandroGinesMartinezCV.pdf" id="resume" type="application/pdf" target="blank" class="closeNav" >Resume</a>
        </div>

    </div>`,
    templateMenuDesktop: `<nav id="primary_nav">
        <ul>
          <li><a href="#about" class="smooth">About</a></li>
          <li><a href="#featured-code" class="smooth">Code</a></li>
          <li><a href="http://tutorialzine.com/2014/09/50-awesome-tools-and-resources-for-web-developers/" target="blank">Resources</a></li>
          <li><a href="mailto:alejandro.ginesmartinez@gmail.com?subject=Contact%20from%20alexgines.com." role="button">Contact</a></li>
          <li><a href="http://alexgines.com/AlejandroGinesMartinezCV.pdf" id="resume" type="application/pdf">Resume</a></li>
        </ul>
      </nav><!-- end primary-nav-->`,
    controllers () { this.openNav(); this.closeItems() },
    insertTemplates  () { this.onLoad(); this.onResize() },
    deleteContent: () => document.getElementById('header').innerHTML = '',
    onLoad () {
        const width = $(window).width();
        document.getElementById('header').innerHTML += this.templateBranding;
        width < 768 ? (
            document.getElementById('header').innerHTML += this.templateMenuMobile,
                this.controllers()
        ) : document.getElementById('header').innerHTML +=this.templateMenuDesktop;
    },
    onResize () {
        const widthResize = $(window).resize(function () {
            const width = $(window).width();
            width < 768 ? (
                    navigationTemplate.deleteContent(),
                        document.getElementById('header').innerHTML += navigationTemplate.templateBranding,
                        document.getElementById('header').innerHTML += navigationTemplate.templateMenuMobile,
                        navigationTemplate.controllers()
                ) : (
                    navigationTemplate.deleteContent(),
                        document.getElementById('header').innerHTML += navigationTemplate.templateBranding,
                        document.getElementById('header').innerHTML += navigationTemplate.templateMenuDesktop
                );
        });
    },
    openNav () {
        const openNav = document.getElementById('openNav');
        openNav.addEventListener('click', () => {
            document.getElementById('myNav').style.width = "100%";
        })
    },
    closeItems () {
        const itemToClose = document.querySelector('#myNav');
        itemToClose.addEventListener('click', (event) => {
            const elementClicked = event.target;
            if (elementClicked.className === 'closeNav'){
                document.getElementById('myNav').style.width = "0%";
            }
        })
    }
};

navigationTemplate.insertTemplates();

