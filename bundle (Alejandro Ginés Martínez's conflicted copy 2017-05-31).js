/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var about = [{
  p: 'At present, I work at Zalando’s Advertising Engineering Department.'
}, {
  p: 'I’m originally from Barcelona, but I lived and worked in London for a while before landing here.'
}, {
  p: 'Hi, I am a Frontend and Ruby on Rails Developer based in Berlin.'
}];

{
  var i = about.length;
  while (i--) {
    var aboutTemplate = '<p>' + about[i].p + '</p>';
    document.getElementById('about-texts').innerHTML += aboutTemplate;
  };
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


jQuery(function ($) {
  'use strict';

  var effects = {
    innit: function innit() {
      this.animatePreloader();
      this.typewriter();
      this.smoothVerticalScroll();
      this.smoothHorizontalScroll();
    },
    animatePreloader: function animatePreloader() {
      //$(window).on('load', showPage());
      var loadingTime = setTimeout(showPage, 1000);
      function showPage() {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('home').style.display = 'block';
        document.body.style.backgroundColor = "#fff";
      }
    },
    typewriter: function typewriter() {
      var TxtType = function TxtType(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
      };
      TxtType.prototype.tick = function () {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

        var that = this;
        var keySpeed = 120 - Math.random() * 100;

        if (this.isDeleting) {
          keySpeed /= 4;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
          keySpeed = this.period;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
          this.isDeleting = false;
          this.loopNum++;
          keySpeed = 100;
        }

        setTimeout(function () {
          that.tick();
        }, keySpeed);
      };

      var view = {
        elements: $('.typewrite'),
        typingMessage: function typingMessage() {
          for (var i = 0; i < this.elements.length; i++) {
            var toRotate = this.elements[i].getAttribute('data-type');
            var period = this.elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(this.elements[i], JSON.parse(toRotate), period);
            }
            this.injectCSS();
          }
        },
        injectCSS: function injectCSS() {
          var css = document.createElement('style');
          css.type = 'text/css';
          css.innerHTML = '.typewrite > .wrap { border-right: 0.08em solid #4e4e4e; line-height: 150%; }';
          document.body.appendChild(css);
        }
      };
      view.typingMessage();
    },

    smoothHorizontalScroll: function smoothHorizontalScroll() {
      $('.smooth-testimonials').click(function (event) {
        var $link = $(this).attr("href");
        if ($(window).width() < 601) {
          // It’s a Phone.
          $('#scroll-testimonials').animate({
            scrollLeft: $('#scroll-testimonials').scrollLeft() - 15 + $($link).offset().left
          }, 500);
        } else {
          // It’s a tablet/ desktop/laptop.
          $('#scroll-testimonials').animate({
            scrollLeft: $('#scroll-testimonials').scrollLeft() + $($link).offset().left
          }, 500);
        }
        event.preventDefault();
      });
      $('.smooth-featured-code').click(function (event) {
        var $link = $(this).attr("href");
        if ($(window).width() < 601) {
          // It’s a Phone.
          $('#scroll-featured-code').animate({
            scrollLeft: $('#scroll-featured-code').scrollLeft() - 15 + $($link).offset().left
          }, 500);
        } else {
          // It’s a tablet/ desktop/laptop.
          $('#scroll-featured-code').animate({
            scrollLeft: $('#scroll-featured-code').scrollLeft() - 35 + $($link).offset().left
          }, 500);
        }
        event.preventDefault();
      });
    },

    smoothVerticalScroll: function smoothVerticalScroll() {
      var $root = $('html, body');
      $('.smooth').on('click', function () {
        var href = $.attr(this, 'href');
        if (href != undefined) {
          $root.animate({
            scrollTop: $(href).offset().top
          }, 500, function () {
            window.location.hash = href;
          });
        }
        return false;
      });
    }
  };
  effects.innit();
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var featuredCode = [{
  id: 'code3',
  title: 'bibber app',
  tools: 'I have experience developing web applications with Ruby on Rails.',
  code: '&lt;li id="sm-login-out"&gt;\n<% if user_signed_in? %>\n&lt;a&gt;Hello\n  <% if current_user.admin? %>\n  Admin\n  <% else %>\n    <% if current_user.first_name.present?%>\n      <%= current_user.first_name %>\n    <% else %>\n      <%= current_user.email %>\n    <% end %>\n  <% end %>\n&lt;/a&gt;\n<% end %>\n&lt;/li&gt;\n&lt;li id="sm-login-out"&gt;\n<% if user_signed_in? %>\n&lt;a&gt;|&lt;/a&gt;\n<% end %>\n&lt;/li&gt;',
  github: 'https://github.com/alexBCN84/bikeberlin/blob/master/app/views/layouts/application.html.erb',
  previous: '#code2',
  next: '#code1',
  language: 'language-html'
}, {
  id: 'code2',
  title: 'matching game',
  tools: 'I enhance the functionality of my CSS with\n    <i class="ionicons ion-social-sass" style="font-size: 30px;"></i>\n    nesting, mixins, variables and functions.',
  code: '#gamePannel {\nposition: absolute;\nmargin: 5%;\nwidth: 90%;\nheight: 80%;\nborder-radius: 20px;\nbackground-color: $gamePannelBackground;\n.gameBox {\n  position: absolute;\n  float: left;\n  @include mQ (500px) {\n    height: 48%;\n    width: 96%;\n  }\n  @include mQ (3001px, 501px) {\n    width: 48%;\n  }\n}',
  github: 'https://github.com/alexBCN84/matchinggame/blob/master/assets/scss/main.scss',
  previous: '#code1',
  next: '#code3',
  language: 'language-css'
}, {
  id: 'code1',
  title: 'notepad app',
  tools: 'I structure my <i class="ionicons ion-social-javascript"></i> code\n    following the module pattern for optimal readiblity and maintainability.',
  code: 'var app = {\ninit: function() {\n  app.entries = dataStore.store(\'myData\');\n  view.setUpEventListeners();\n  view.displayEntries();\n},\n\nentries: [],\n\naddEntry: function(entryTitle, entryText) {\n  this.entries.push({\n    entryDate: new Date().toDateString(),\n    entryTitle: entryTitle,\n    entryText: entryText,\n    archived: false\n  });\n},\n',

  github: 'https://github.com/alexBCN84/myNotepad/blob/master/public/client.js',
  previous: '#code3',
  next: '#code2',
  language: 'language-javascript'
}];

{
  var i = featuredCode.length;
  while (i--) {
    var featuredTemplate = '<article id="' + featuredCode[i].id + '">\n      <a href="' + featuredCode[i].previous + '" class="smooth-featured-code"><i class="fa fa-angle-double-left arrow-code"></i></a>\n      <blockquote>\n\n        <h2>' + featuredCode[i].title + '</h2>\n        <h3>' + featuredCode[i].tools + '</h3></br>\n        <pre><code class="' + featuredCode[i].language + '">' + featuredCode[i].code + '</code></pre>\n        <h2>...</h2>\n        <a href="' + featuredCode[i].github + '">More code on <i class="fa fa-github-square"></i></a>\n      </blockquote>\n      <a href="' + featuredCode[i].next + '" class="smooth-featured-code"><i class="fa fa-angle-double-right arrow-code"></i></a>\n    </article>';
    document.getElementById('scroll-featured-code').innerHTML += featuredTemplate;
  };
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

/* http://prismjs.com/download.html?themes=prism&languages=markup+css+clike+javascript */
var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
    Prism = function () {
  var e = /\blang(?:uage)?-(\w+)\b/i,
      t = 0,
      n = _self.Prism = { manual: _self.Prism && _self.Prism.manual, util: { encode: function encode(e) {
        return e instanceof a ? new a(e.type, n.util.encode(e.content), e.alias) : "Array" === n.util.type(e) ? e.map(n.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
      }, type: function type(e) {
        return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1];
      }, objId: function objId(e) {
        return e.__id || Object.defineProperty(e, "__id", { value: ++t }), e.__id;
      }, clone: function clone(e) {
        var t = n.util.type(e);switch (t) {case "Object":
            var a = {};for (var r in e) {
              e.hasOwnProperty(r) && (a[r] = n.util.clone(e[r]));
            }return a;case "Array":
            return e.map && e.map(function (e) {
              return n.util.clone(e);
            });}return e;
      } }, languages: { extend: function extend(e, t) {
        var a = n.util.clone(n.languages[e]);for (var r in t) {
          a[r] = t[r];
        }return a;
      }, insertBefore: function insertBefore(e, t, a, r) {
        r = r || n.languages;var l = r[e];if (2 == arguments.length) {
          a = arguments[1];for (var i in a) {
            a.hasOwnProperty(i) && (l[i] = a[i]);
          }return l;
        }var o = {};for (var s in l) {
          if (l.hasOwnProperty(s)) {
            if (s == t) for (var i in a) {
              a.hasOwnProperty(i) && (o[i] = a[i]);
            }o[s] = l[s];
          }
        }return n.languages.DFS(n.languages, function (t, n) {
          n === r[e] && t != e && (this[t] = o);
        }), r[e] = o;
      }, DFS: function DFS(e, t, a, r) {
        r = r || {};for (var l in e) {
          e.hasOwnProperty(l) && (t.call(e, l, e[l], a || l), "Object" !== n.util.type(e[l]) || r[n.util.objId(e[l])] ? "Array" !== n.util.type(e[l]) || r[n.util.objId(e[l])] || (r[n.util.objId(e[l])] = !0, n.languages.DFS(e[l], t, l, r)) : (r[n.util.objId(e[l])] = !0, n.languages.DFS(e[l], t, null, r)));
        }
      } }, plugins: {}, highlightAll: function highlightAll(e, t) {
      var a = { callback: t, selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code' };n.hooks.run("before-highlightall", a);for (var r, l = a.elements || document.querySelectorAll(a.selector), i = 0; r = l[i++];) {
        n.highlightElement(r, e === !0, a.callback);
      }
    }, highlightElement: function highlightElement(t, a, r) {
      for (var l, i, o = t; o && !e.test(o.className);) {
        o = o.parentNode;
      }o && (l = (o.className.match(e) || [, ""])[1].toLowerCase(), i = n.languages[l]), t.className = t.className.replace(e, "").replace(/\s+/g, " ") + " language-" + l, o = t.parentNode, /pre/i.test(o.nodeName) && (o.className = o.className.replace(e, "").replace(/\s+/g, " ") + " language-" + l);var s = t.textContent,
          u = { element: t, language: l, grammar: i, code: s };if (n.hooks.run("before-sanity-check", u), !u.code || !u.grammar) return u.code && (u.element.textContent = u.code), n.hooks.run("complete", u), void 0;if (n.hooks.run("before-highlight", u), a && _self.Worker) {
        var g = new Worker(n.filename);g.onmessage = function (e) {
          u.highlightedCode = e.data, n.hooks.run("before-insert", u), u.element.innerHTML = u.highlightedCode, r && r.call(u.element), n.hooks.run("after-highlight", u), n.hooks.run("complete", u);
        }, g.postMessage(JSON.stringify({ language: u.language, code: u.code, immediateClose: !0 }));
      } else u.highlightedCode = n.highlight(u.code, u.grammar, u.language), n.hooks.run("before-insert", u), u.element.innerHTML = u.highlightedCode, r && r.call(t), n.hooks.run("after-highlight", u), n.hooks.run("complete", u);
    }, highlight: function highlight(e, t, r) {
      var l = n.tokenize(e, t);return a.stringify(n.util.encode(l), r);
    }, tokenize: function tokenize(e, t) {
      var a = n.Token,
          r = [e],
          l = t.rest;if (l) {
        for (var i in l) {
          t[i] = l[i];
        }delete t.rest;
      }e: for (var i in t) {
        if (t.hasOwnProperty(i) && t[i]) {
          var o = t[i];o = "Array" === n.util.type(o) ? o : [o];for (var s = 0; s < o.length; ++s) {
            var u = o[s],
                g = u.inside,
                c = !!u.lookbehind,
                h = !!u.greedy,
                f = 0,
                d = u.alias;if (h && !u.pattern.global) {
              var p = u.pattern.toString().match(/[imuy]*$/)[0];u.pattern = RegExp(u.pattern.source, p + "g");
            }u = u.pattern || u;for (var m = 0, y = 0; m < r.length; y += r[m].length, ++m) {
              var v = r[m];if (r.length > e.length) break e;if (!(v instanceof a)) {
                u.lastIndex = 0;var b = u.exec(v),
                    k = 1;if (!b && h && m != r.length - 1) {
                  if (u.lastIndex = y, b = u.exec(e), !b) break;for (var w = b.index + (c ? b[1].length : 0), _ = b.index + b[0].length, P = m, A = y, j = r.length; j > P && _ > A; ++P) {
                    A += r[P].length, w >= A && (++m, y = A);
                  }if (r[m] instanceof a || r[P - 1].greedy) continue;k = P - m, v = e.slice(y, A), b.index -= y;
                }if (b) {
                  c && (f = b[1].length);var w = b.index + f,
                      b = b[0].slice(f),
                      _ = w + b.length,
                      x = v.slice(0, w),
                      O = v.slice(_),
                      S = [m, k];x && S.push(x);var N = new a(i, g ? n.tokenize(b, g) : b, d, b, h);S.push(N), O && S.push(O), Array.prototype.splice.apply(r, S);
                }
              }
            }
          }
        }
      }return r;
    }, hooks: { all: {}, add: function add(e, t) {
        var a = n.hooks.all;a[e] = a[e] || [], a[e].push(t);
      }, run: function run(e, t) {
        var a = n.hooks.all[e];if (a && a.length) for (var r, l = 0; r = a[l++];) {
          r(t);
        }
      } } },
      a = n.Token = function (e, t, n, a, r) {
    this.type = e, this.content = t, this.alias = n, this.length = 0 | (a || "").length, this.greedy = !!r;
  };if (a.stringify = function (e, t, r) {
    if ("string" == typeof e) return e;if ("Array" === n.util.type(e)) return e.map(function (n) {
      return a.stringify(n, t, e);
    }).join("");var l = { type: e.type, content: a.stringify(e.content, t, r), tag: "span", classes: ["token", e.type], attributes: {}, language: t, parent: r };if ("comment" == l.type && (l.attributes.spellcheck = "true"), e.alias) {
      var i = "Array" === n.util.type(e.alias) ? e.alias : [e.alias];Array.prototype.push.apply(l.classes, i);
    }n.hooks.run("wrap", l);var o = Object.keys(l.attributes).map(function (e) {
      return e + '="' + (l.attributes[e] || "").replace(/"/g, "&quot;") + '"';
    }).join(" ");return "<" + l.tag + ' class="' + l.classes.join(" ") + '"' + (o ? " " + o : "") + ">" + l.content + "</" + l.tag + ">";
  }, !_self.document) return _self.addEventListener ? (_self.addEventListener("message", function (e) {
    var t = JSON.parse(e.data),
        a = t.language,
        r = t.code,
        l = t.immediateClose;_self.postMessage(n.highlight(r, n.languages[a], a)), l && _self.close();
  }, !1), _self.Prism) : _self.Prism;var r = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();return r && (n.filename = r.src, !document.addEventListener || n.manual || r.hasAttribute("data-manual") || ("loading" !== document.readyState ? window.requestAnimationFrame ? window.requestAnimationFrame(n.highlightAll) : window.setTimeout(n.highlightAll, 16) : document.addEventListener("DOMContentLoaded", n.highlightAll))), _self.Prism;
}();"undefined" != typeof module && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism);
Prism.languages.markup = { comment: /<!--[\w\W]*?-->/, prolog: /<\?[\w\W]+?\?>/, doctype: /<!DOCTYPE[\w\W]+?>/i, cdata: /<!\[CDATA\[[\w\W]*?]]>/i, tag: { pattern: /<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i, inside: { tag: { pattern: /^<\/?[^\s>\/]+/i, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } }, "attr-value": { pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i, inside: { punctuation: /[=>"']/ } }, punctuation: /\/?>/, "attr-name": { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } } } }, entity: /&#?[\da-z]{1,8};/i }, Prism.hooks.add("wrap", function (a) {
  "entity" === a.type && (a.attributes.title = a.content.replace(/&amp;/, "&"));
}), Prism.languages.xml = Prism.languages.markup, Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup;
Prism.languages.css = { comment: /\/\*[\w\W]*?\*\//, atrule: { pattern: /@[\w-]+?.*?(;|(?=\s*\{))/i, inside: { rule: /@[\w-]+/ } }, url: /url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i, selector: /[^\{\}\s][^\{\};]*?(?=\s*\{)/, string: { pattern: /("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/, greedy: !0 }, property: /(\b|\B)[\w-]+(?=\s*:)/i, important: /\B!important\b/i, "function": /[-a-z0-9]+(?=\()/i, punctuation: /[(){};:]/ }, Prism.languages.css.atrule.inside.rest = Prism.util.clone(Prism.languages.css), Prism.languages.markup && (Prism.languages.insertBefore("markup", "tag", { style: { pattern: /(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i, lookbehind: !0, inside: Prism.languages.css, alias: "language-css" } }), Prism.languages.insertBefore("inside", "attr-value", { "style-attr": { pattern: /\s*style=("|').*?\1/i, inside: { "attr-name": { pattern: /^\s*style/i, inside: Prism.languages.markup.tag.inside }, punctuation: /^\s*=\s*['"]|['"]\s*$/, "attr-value": { pattern: /.+/i, inside: Prism.languages.css } }, alias: "language-css" } }, Prism.languages.markup.tag));
Prism.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\w\W]*?\*\//, lookbehind: !0 }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0 }], string: { pattern: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 }, "class-name": { pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i, lookbehind: !0, inside: { punctuation: /(\.|\\)/ } }, keyword: /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/, "boolean": /\b(true|false)\b/, "function": /[a-z0-9_]+(?=\()/i, number: /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i, operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/, punctuation: /[{}[\];(),.:]/ };
Prism.languages.javascript = Prism.languages.extend("clike", { keyword: /\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/, number: /\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/, "function": /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i, operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*\*?|\/|~|\^|%|\.{3}/ }), Prism.languages.insertBefore("javascript", "keyword", { regex: { pattern: /(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/, lookbehind: !0, greedy: !0 } }), Prism.languages.insertBefore("javascript", "string", { "template-string": { pattern: /`(?:\\\\|\\?[^\\])*?`/, greedy: !0, inside: { interpolation: { pattern: /\$\{[^}]+\}/, inside: { "interpolation-punctuation": { pattern: /^\$\{|\}$/, alias: "punctuation" }, rest: Prism.languages.javascript } }, string: /[\s\S]+/ } } }), Prism.languages.markup && Prism.languages.insertBefore("markup", "tag", { script: { pattern: /(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i, lookbehind: !0, inside: Prism.languages.javascript, alias: "language-javascript" } }), Prism.languages.js = Prism.languages.javascript;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var skills = [{
  heading: 'Management Tools',
  p: 'Git & Github, Agile Scrum, Agile Kanban.'
}, {
  heading: 'Build Tools',
  p: 'NPM, Webpack.'
}, {
  heading: 'Compiling Tools',
  p: 'Prepos, Babel.'
}, {
  heading: 'Architectural Concepts & Frontend Frameworks',
  p: 'WebSockets, Responsive Design, Bootstrap, Web APIs.'
}, {
  heading: 'Javascript Libreries & Frameworks',
  p: 'jQuery,Modernizr ,Handlebars, React JS, Angular JS, '
}, {
  heading: 'Programming & Markup',
  p: 'HTML, CSS & CSS3, SASS, vanilla JavaScript and ES6, JSON, Jsx, mySQL, PostgreSQL, Ruby, Slim'
}];

{
  var i = skills.length;
  while (i--) {
    var skillsTemplate = '<h3>' + skills[i].heading + '</h3>\n     <p>' + skills[i].p + '</p>';
    document.getElementById('skills-texts').innerHTML += skillsTemplate;
  };
}

/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var testimonials = [{
  id: 'ref3',
  img: 'img/Kave_bulambo.jpg',
  link: 'https://www.linkedin.com/in/kave-bulambo-a090bb32/',
  name: 'Kave Bulambo',
  title: 'Communications & Brand Consulting <br/>at Zalando SE',
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
}, {
  id: 'ref1',
  img: 'img/Anna_kochegura.jpg',
  link: 'https://www.linkedin.com/in/akochegura/',
  name: 'Anna Kochegura',
  title: 'Account Manager <br/>Zalando Media Solutions<br/>at Zalando SE',
  testimonial: 'Alex is a responsible colleague who has a thorough approach to tasks and is willing to go an extra mile in order to achieve the goal.',
  previous: '#ref3',
  next: '#ref2'
}];

{
  var i = testimonials.length;
  while (i--) {
    var testimonialTemplate = '<article id="' + testimonials[i].id + '">\n      <a href="' + testimonials[i].previous + '" class="smooth-testimonials"><i class="fa fa-angle-double-left arrow-testimonials"></i></a>\n      <blockquote>\n        <a href="' + testimonials[i].link + '"><img src="' + testimonials[i].img + '" alt="#" /></a><br/>\n        <i id="linkedin" class="fa fa-linkedin-square linkedin-testimonials"></i>\n        <h2>' + testimonials[i].name + '</h2>\n        <h3>' + testimonials[i].title + '</h3></br>\n        <p>' + testimonials[i].testimonial + '</p>\n      </blockquote>\n      <a href="' + testimonials[i].next + '" class="smooth-testimonials"><i class="fa fa-angle-double-right arrow-testimonials"></i></a>\n    </article>';
    document.getElementById('scroll-testimonials').innerHTML += testimonialTemplate;
  };
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(10);

__webpack_require__(1);

__webpack_require__(3);

__webpack_require__(0);

__webpack_require__(4);

__webpack_require__(6);

__webpack_require__(2);

__webpack_require__(9);

/***/ }),
/* 8 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var navigationTemplate = {
    templateBranding: '<h1 id="logo"><a href="index.html"><i></i><div><span id="brand-name">Alex Gin\xE9s</span><br/><span id="brand-prof">Web Developer</span></div></a></h1>',
    templateMenuMobile: '<a class="to_nav" id="openNav" href="#"><i class="fa fa-bars menu-icon"></i></a>\n    <!-- The overlay -->\n    <div id="myNav" class="overlay">\n\n        <!-- Button to close the overlay navigation -->\n        <a href="#" id="closebtn" class="closeNav">&times;</a>\n\n        <!-- Overlay content -->\n        <div class="overlay-content">\n            <a href="#about" class="closeNav">About</a>\n            <a href="#featured-code" class="closeNav">Code</a>\n            <a href="http://tutorialzine.com/2014/09/50-awesome-tools-and-resources-for-web-developers/" class="closeNav" target="blank">Resources</a>\n            <a href="mailto:alejandro.ginesmartinez@gmail.com?subject=Contact%20from%20alexgines.com/"  class="closeNav" >Contact</a>\n            <a href="http://alexgines.com/AlejandroGinesMartinezCV.pdf" id="resume" type="application/pdf" target="blank" class="closeNav" >Resume</a>\n        </div>\n\n    </div>',
    templateMenuDesktop: '<nav id="primary_nav">\n        <ul>\n          <li><a href="#about" class="smooth">About</a></li>\n          <li><a href="#featured-code" class="smooth">Code</a></li>\n          <li><a href="http://tutorialzine.com/2014/09/50-awesome-tools-and-resources-for-web-developers/" target="blank">Resources</a></li>\n          <li><a href="mailto:alejandro.ginesmartinez@gmail.com?subject=Contact%20from%20alexgines.com." role="button">Contact</a></li>\n          <li><a href="http://alexgines.com/AlejandroGinesMartinezCV.pdf" id="resume" type="application/pdf">Resume</a></li>\n        </ul>\n      </nav><!-- end primary-nav-->',
    controllers: function controllers() {
        this.openNav();this.closeItems();
    },
    insertTemplates: function insertTemplates() {
        this.onLoad();this.onResize();
    },

    deleteContent: function deleteContent() {
        return document.getElementById('header').innerHTML = '';
    },
    onLoad: function onLoad() {
        var width = $(window).width();
        document.getElementById('header').innerHTML += this.templateBranding;
        width < 768 ? (document.getElementById('header').innerHTML += this.templateMenuMobile, this.controllers()) : document.getElementById('header').innerHTML += this.templateMenuDesktop;
    },
    onResize: function onResize() {
        var widthResize = $(window).resize(function () {
            var width = $(window).width();
            width < 768 ? (navigationTemplate.deleteContent(), document.getElementById('header').innerHTML += navigationTemplate.templateBranding, document.getElementById('header').innerHTML += navigationTemplate.templateMenuMobile, navigationTemplate.controllers()) : (navigationTemplate.deleteContent(), document.getElementById('header').innerHTML += navigationTemplate.templateBranding, document.getElementById('header').innerHTML += navigationTemplate.templateMenuDesktop);
        });
    },
    openNav: function openNav() {
        var openNav = document.getElementById('openNav');
        openNav.addEventListener('click', function () {
            document.getElementById('myNav').style.width = "100%";
        });
    },
    closeItems: function closeItems() {
        var itemToClose = document.querySelector('#myNav');
        itemToClose.addEventListener('click', function (event) {
            var elementClicked = event.target;
            if (elementClicked.className === 'closeNav') {
                document.getElementById('myNav').style.width = "0%";
            }
        });
    }
};

navigationTemplate.insertTemplates();

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var template = '<div id="front-page">\n          <h1>Front-end  &amp; Ruby on Rails Developer</h1>\n          <div id="divider"></div>\n          <ul class="intro-list">\n            <li id="subheading">I\'m passionate about the web and I proudly turn my passion into my career</li>\n          </ul>\n          <ul>\n            <li><a href="#testimonials" class="button">testimonials</a></li>\n            <li><a href="#featured-code" class="button">featured code</a></li>\n          </ul>\n        </div>';

document.getElementById('landingBlock').innerHTML += template;

/***/ })
/******/ ]);