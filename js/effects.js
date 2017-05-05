
jQuery(function($) {
  'use strict';

  var effects = {
    innit: function() {
      this.typewriter();
      this.smoothVerticalScroll();
      this.smoothHorizontalScroll();
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
      $('.smooth-testimonials').click(function(event){
        var $link = $(this).attr("href");
        $('#scroll-testimonials').animate({
          scrollLeft: $('#scroll-testimonials').scrollLeft()-15 + $($link).offset().left
        }, 500);
        event.preventDefault();
      });
      $('.smooth-featured-code').click(function(event){
        var $link = $(this).attr("href");
        $('#scroll-featured-code').animate({
          scrollLeft: $('#scroll-featured-code').scrollLeft()-15 + $($link).offset().left
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
  }
  effects.innit();
});
