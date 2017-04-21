jQuery(function($) {
  'use strict';

  var effects = {
    innit: function() {
      this.typewriter();
      this.smoothVerticalScroll();
      this.smoothHorizontalScroll();
      this.codeGalleryTypewriter();
    },
    typewriter: function() {
      var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
      };
      TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var keySpeed = 120 - Math.random() * 100;

        if (this.isDeleting) { keySpeed /= 4; }

        if (!this.isDeleting && this.txt === fullTxt) {
          keySpeed = this.period;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
          this.isDeleting = false;
          this.loopNum++;
          keySpeed = 100;
        }

        setTimeout(function() {
          that.tick();
        }, keySpeed);
      };

      var view = {
        elements: $('.typewrite'),
        typingMessage: function() {
          for (var i = 0; i < this.elements.length; i++) {
            var toRotate = this.elements[i].getAttribute('data-type');
            var period = this.elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(this.elements[i], JSON.parse(toRotate), period);
            }
            this.injectCSS();
          }
        },
        injectCSS: function() {
          var css = document.createElement('style');
          css.type = 'text/css';
          css.innerHTML = '.typewrite > .wrap { border-right: 0.08em solid #4e4e4e; line-height: 150%; }';
          document.body.appendChild(css);
        }
      };
      view.typingMessage();
    },


    smoothHorizontalScroll: function() {
      $('.smooth-left').on('click', function(event){
        var $link = $(this).attr("href");
        $('.scrolls').animate({
          scrollLeft: $('.scrolls').scrollLeft()-15 + $($link).offset().left
        }, 500);
        event.preventDefault();
      });
    },

    smoothVerticalScroll: function() {
      var $root = $('html, body');
      $('.smooth').on('click', function() {
        var href = $.attr(this, 'href');
        if(href != undefined) {
          $root.animate({
            scrollTop: $(href).offset().top
          }, 500, function () {
            window.location.hash = href;
          });
        }
        return false;
      });
    },

    codeGalleryTypewriter: function() {
      var codeGallery = {
  setupTypewriter: function(t) {
    var HTML = t.innerHTML;
    t.innerHTML = '';

    var cursorPosition = 0,
        tag = '',
        writingTag = false,
        tagOpen = false,
        typeSpeed = 100,
        tempTypeSpeed = 0;

    var type = function() {
      if (writingTag === true) {
        tag += HTML[cursorPosition];
      }

      if (HTML[cursorPosition] === "<") {
        tempTypeSpeed = 0;
        if (tagOpen) {
          tagOpen = false;
          writingTag = true;
        } else {
          tag = "";
          tagOpen = true;
          writingTag = true;
          tag += HTML[cursorPosition];
        }
      }
      if (!writingTag && tagOpen) {
        tag.innerHTML += HTML[cursorPosition];
      }
      if (!writingTag && !tagOpen) {
        if (HTML[cursorPosition] === " ") {
          tempTypeSpeed = 0;
        } else {
          tempTypeSpeed = (Math.random() * typeSpeed) + 50;
        }
        t.innerHTML += HTML[cursorPosition];
      }
      if (writingTag === true && HTML[cursorPosition] === ">") {
        tempTypeSpeed = (Math.random() * typeSpeed) + 50;
        writingTag = false;
        if (tagOpen) {
          var newSpan = document.createElement("span");
          t.appendChild(newSpan);
          newSpan.innerHTML = tag;
          tag = newSpan.firstChild;
        }
      }

      cursorPosition += 1;
      if (cursorPosition < HTML.length - 1) {
        setTimeout(type, tempTypeSpeed);
      }
    };
    return {
      type: type
    };
  }
}
  var typewriter = document.getElementById('typewriter');

  typewriter = codeGallery.setupTypewriter(typewriter);

  typewriter.type();

    }

  }

  effects.innit();
});
