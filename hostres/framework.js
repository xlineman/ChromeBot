var libs = {},
  refreshmineId,
  refreshtableId,
  Render = {},
  JP_CONFIG = {},
  refreshId,
  show = 0,
  uiLoad = uiLoad || {};
(function ($) {
  Render.location = function () {
    return $(location).attr("href").split("/");
  };
  Render.requestAjax = requestAjax = function (form_id, url) {
    if ($("#" + form_id).valid()) {
      jQuery.ajax({
        url: url,
        type: "POST",
        dataType: "json",
        data: jQuery("#" + form_id).serialize(),
        success: function (response) {
          Render.notify_show(response);
          if (response.block !== undefined && response.html !== undefined) {
            $("#" + response.block).html(response.html);
            $(document).trigger("pjax:end");
          }
        },
      });
    }
  };
  var myStack = { dir1: "down", dir2: "left", push: "bottom" };
  Render.notify_show = notify_show = function (message) {
    if (message.delay == undefined) {
      message.delay = 1000;
    }
    new PNotify({
      delay: message.delay,
      addclass: "stack-custom",
      text: message.desc,
      addclass: "brighttheme-" + message.style,
      stack: myStack,
    });
    if (message.redirect !== undefined) {
      if (message.delay !== undefined) {
        setTimeout(function () {
          location.href = message.redirect;
        }, message.delay);
      } else {
        location.href = message.redirect;
      }
    }
    if (message.href !== undefined) {
      if (message.delay !== undefined) {
        setTimeout(function () {
          location.href = message.href;
        }, message.delay);
      } else {
        location.href = message.href;
      }
    }
  };
  $.app = Render;
  $.pjax.defaults = { replace: true, type: "GET", scrollTo: 0 };
  $.fn.extend({
    animateCss: function (animationName, callback) {
      var animationEnd = (function (el) {
        var animations = {
          animation: "animationend",
          OAnimation: "oAnimationEnd",
          MozAnimation: "mozAnimationEnd",
          WebkitAnimation: "webkitAnimationEnd",
        };
        for (var t in animations) {
          if (el.style[t] !== undefined) {
            return animations[t];
          }
        }
      })(document.createElement("div"));
      this.addClass("animated " + animationName).one(animationEnd, function () {
        $(this).removeClass("animated " + animationName);
        if (typeof callback === "function") callback();
      });
      return this;
    },
  });
  $(document).on("click", "a", function (event) {
    if (!$(this).hasClass("no-ajax")) {
      $.pjax.click(event, {
        container: ".pjax-container",
        fragment: ".pjax-container",
      });
    }
  });
  $(document).ready(function () {
    $(document).find("[ui-jp], [data-ui-jp]").uiJp();
    $(document).trigger("pjaxEnd");
  });
  $(document).on("pjax:end", function (c) {
    $(c.target).find("[ui-jp], [data-ui-jp]").uiJp();
    $(document).trigger("pjaxEnd");
  });
  function socketSender(type, data) {
    $.socket.emit(type, data);
  }
  $.fn.uiJp = function () {
    return this.each(function () {
      var self = $(this),
        opts = self.attr("ui-options") || self.attr("data-ui-options"),
        attr = self.attr("ui-jp") || self.attr("data-ui-jp"),
        options = opts && eval("[" + opts + "]");
      options &&
        $.isPlainObject(options[0]) &&
        (options[0] = $.extend({}, JP_CONFIG[attr], options[0])),
        self[attr]
          ? self[attr].apply(self, options)
          : uiLoad.load(libs[attr]).then(function () {
              if (self[attr]) {
                self[attr].apply(self, options);
              }
            });
    });
  };
})(jQuery);
!(function (a, b, c) {
  "use strict";
  var d = [],
    e = !1,
    f = a.Deferred();
  (c.load = function (b) {
    return (
      (b = a.isArray(b) ? b : b.split(/\s+/)),
      e || (e = f.promise()),
      a.each(b, function (a, b) {
        e = e.then(function () {
          return d[b] ? d[b].promise() : b.indexOf(".css") >= 0 ? h(b) : g(b);
        });
      }),
      f.resolve(),
      e
    );
  }),
    (c.remove = function (b) {
      (b = a.isArray(b) ? b : b.split(/\s+/)),
        a.each(b, function (b, c) {
          c.indexOf(".css") >= 0
            ? a('link[href="' + c + '"]').remove()
            : a('script[src="' + c + '"]').remove(),
            delete d[c];
        });
    });
  var g = function (c) {
      var e = a.Deferred(),
        f = b.createElement("script");
      return (
        (f.src = c),
        (f.onload = function (a) {
          e.resolve(a);
        }),
        (f.onerror = function (a) {
          e.reject(a);
        }),
        b.body.appendChild(f),
        (d[c] = e),
        e.promise()
      );
    },
    h = function (c) {
      var e = a.Deferred(),
        f = b.createElement("link");
      return (
        (f.rel = "stylesheet"),
        (f.type = "text/css"),
        (f.href = c),
        (f.onload = function (a) {
          e.resolve(a);
        }),
        (f.onerror = function (a) {
          e.reject(a);
        }),
        b.head.appendChild(f),
        (d[c] = e),
        e.promise()
      );
    };
})(jQuery, document, uiLoad);
