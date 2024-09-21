/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssfilters-csstransforms-csstransitions-flexbox-fontface-touchevents-setclasses !*/
!(function (e, t, n) {
  function s(e, t) {
    return typeof e === t;
  }
  function r() {
    var e, t, n, r, o, i, a;
    for (var l in C)
      if (C.hasOwnProperty(l)) {
        if (
          ((e = []),
          (t = C[l]),
          t.name &&
            (e.push(t.name.toLowerCase()),
            t.options && t.options.aliases && t.options.aliases.length))
        )
          for (n = 0; n < t.options.aliases.length; n++)
            e.push(t.options.aliases[n].toLowerCase());
        for (r = s(t.fn, "function") ? t.fn() : t.fn, o = 0; o < e.length; o++)
          (i = e[o]),
            (a = i.split(".")),
            1 === a.length
              ? (Modernizr[a[0]] = r)
              : (!Modernizr[a[0]] ||
                  Modernizr[a[0]] instanceof Boolean ||
                  (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])),
                (Modernizr[a[0]][a[1]] = r)),
            x.push((r ? "" : "no-") + a.join("-"));
      }
  }
  function o(e) {
    var t = w.className,
      n = Modernizr._config.classPrefix || "";
    if ((b && (t = t.baseVal), Modernizr._config.enableJSClass)) {
      var s = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
      t = t.replace(s, "$1" + n + "js$2");
    }
    Modernizr._config.enableClasses &&
      ((t += " " + n + e.join(" " + n)),
      b ? (w.className.baseVal = t) : (w.className = t));
  }
  function i() {
    return "function" != typeof t.createElement
      ? t.createElement(arguments[0])
      : b
      ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0])
      : t.createElement.apply(t, arguments);
  }
  function a() {
    var e = t.body;
    return e || ((e = i(b ? "svg" : "body")), (e.fake = !0)), e;
  }
  function l(e, n, s, r) {
    var o,
      l,
      u,
      f,
      c = "modernizr",
      d = i("div"),
      p = a();
    if (parseInt(s, 10))
      for (; s--; )
        (u = i("div")), (u.id = r ? r[s] : c + (s + 1)), d.appendChild(u);
    return (
      (o = i("style")),
      (o.type = "text/css"),
      (o.id = "s" + c),
      (p.fake ? p : d).appendChild(o),
      p.appendChild(d),
      o.styleSheet
        ? (o.styleSheet.cssText = e)
        : o.appendChild(t.createTextNode(e)),
      (d.id = c),
      p.fake &&
        ((p.style.background = ""),
        (p.style.overflow = "hidden"),
        (f = w.style.overflow),
        (w.style.overflow = "hidden"),
        w.appendChild(p)),
      (l = n(d, e)),
      p.fake
        ? (p.parentNode.removeChild(p), (w.style.overflow = f), w.offsetHeight)
        : d.parentNode.removeChild(d),
      !!l
    );
  }
  function u(e, t) {
    return function () {
      return e.apply(t, arguments);
    };
  }
  function f(e, t, n) {
    var r;
    for (var o in e)
      if (e[o] in t)
        return n === !1
          ? e[o]
          : ((r = t[e[o]]), s(r, "function") ? u(r, n || t) : r);
    return !1;
  }
  function c(e, t) {
    return !!~("" + e).indexOf(t);
  }
  function d(e) {
    return e
      .replace(/([a-z])-([a-z])/g, function (e, t, n) {
        return t + n.toUpperCase();
      })
      .replace(/^-/, "");
  }
  function p(e) {
    return e
      .replace(/([A-Z])/g, function (e, t) {
        return "-" + t.toLowerCase();
      })
      .replace(/^ms-/, "-ms-");
  }
  function m(t, n, s) {
    var r;
    if ("getComputedStyle" in e) {
      r = getComputedStyle.call(e, t, n);
      var o = e.console;
      if (null !== r) s && (r = r.getPropertyValue(s));
      else if (o) {
        var i = o.error ? "error" : "log";
        o[i].call(
          o,
          "getComputedStyle returning null, its possible modernizr test results are inaccurate"
        );
      }
    } else r = !n && t.currentStyle && t.currentStyle[s];
    return r;
  }
  function h(t, s) {
    var r = t.length;
    if ("CSS" in e && "supports" in e.CSS) {
      for (; r--; ) if (e.CSS.supports(p(t[r]), s)) return !0;
      return !1;
    }
    if ("CSSSupportsRule" in e) {
      for (var o = []; r--; ) o.push("(" + p(t[r]) + ":" + s + ")");
      return (
        (o = o.join(" or ")),
        l(
          "@supports (" + o + ") { #modernizr { position: absolute; } }",
          function (e) {
            return "absolute" == m(e, null, "position");
          }
        )
      );
    }
    return n;
  }
  function v(e, t, r, o) {
    function a() {
      u && (delete R.style, delete R.modElem);
    }
    if (((o = s(o, "undefined") ? !1 : o), !s(r, "undefined"))) {
      var l = h(e, r);
      if (!s(l, "undefined")) return l;
    }
    for (
      var u, f, p, m, v, g = ["modernizr", "tspan", "samp"];
      !R.style && g.length;

    )
      (u = !0), (R.modElem = i(g.shift())), (R.style = R.modElem.style);
    for (p = e.length, f = 0; p > f; f++)
      if (
        ((m = e[f]),
        (v = R.style[m]),
        c(m, "-") && (m = d(m)),
        R.style[m] !== n)
      ) {
        if (o || s(r, "undefined")) return a(), "pfx" == t ? m : !0;
        try {
          R.style[m] = r;
        } catch (y) {}
        if (R.style[m] != v) return a(), "pfx" == t ? m : !0;
      }
    return a(), !1;
  }
  function g(e, t, n, r, o) {
    var i = e.charAt(0).toUpperCase() + e.slice(1),
      a = (e + " " + A.join(i + " ") + i).split(" ");
    return s(t, "string") || s(t, "undefined")
      ? v(a, t, r, o)
      : ((a = (e + " " + N.join(i + " ") + i).split(" ")), f(a, t, n));
  }
  function y(e, t, s) {
    return g(e, n, n, t, s);
  }
  var x = [],
    C = [],
    S = {
      _version: "3.5.0",
      _config: {
        classPrefix: "",
        enableClasses: !0,
        enableJSClass: !0,
        usePrefixes: !0,
      },
      _q: [],
      on: function (e, t) {
        var n = this;
        setTimeout(function () {
          t(n[e]);
        }, 0);
      },
      addTest: function (e, t, n) {
        C.push({ name: e, fn: t, options: n });
      },
      addAsyncTest: function (e) {
        C.push({ name: null, fn: e });
      },
    },
    Modernizr = function () {};
  (Modernizr.prototype = S), (Modernizr = new Modernizr());
  var w = t.documentElement,
    b = "svg" === w.nodeName.toLowerCase(),
    T = S._config.usePrefixes
      ? " -webkit- -moz- -o- -ms- ".split(" ")
      : ["", ""];
  S._prefixes = T;
  var _ = "CSS" in e && "supports" in e.CSS,
    z = "supportsCSS" in e;
  Modernizr.addTest("supports", _ || z);
  var E = (S.testStyles = l);
  Modernizr.addTest("touchevents", function () {
    var n;
    if ("ontouchstart" in e || (e.DocumentTouch && t instanceof DocumentTouch))
      n = !0;
    else {
      var s = [
        "@media (",
        T.join("touch-enabled),("),
        "heartz",
        ")",
        "{#modernizr{top:9px;position:absolute}}",
      ].join("");
      E(s, function (e) {
        n = 9 === e.offsetTop;
      });
    }
    return n;
  });
  var P = (function () {
    var e = navigator.userAgent,
      t = e.match(/w(eb)?osbrowser/gi),
      n =
        e.match(/windows phone/gi) &&
        e.match(/iemobile\/([0-9])+/gi) &&
        parseFloat(RegExp.$1) >= 9;
    return t || n;
  })();
  P
    ? Modernizr.addTest("fontface", !1)
    : E('@font-face {font-family:"font";src:url("https://")}', function (e, n) {
        var s = t.getElementById("smodernizr"),
          r = s.sheet || s.styleSheet,
          o = r
            ? r.cssRules && r.cssRules[0]
              ? r.cssRules[0].cssText
              : r.cssText || ""
            : "",
          i = /src/i.test(o) && 0 === o.indexOf(n.split(" ")[0]);
        Modernizr.addTest("fontface", i);
      });
  var j = "Moz O ms Webkit",
    A = S._config.usePrefixes ? j.split(" ") : [];
  S._cssomPrefixes = A;
  var N = S._config.usePrefixes ? j.toLowerCase().split(" ") : [];
  S._domPrefixes = N;
  var k = { elem: i("modernizr") };
  Modernizr._q.push(function () {
    delete k.elem;
  });
  var R = { style: k.elem.style };
  Modernizr._q.unshift(function () {
    delete R.style;
  }),
    (S.testAllProps = g),
    (S.testAllProps = y),
    Modernizr.addTest("cssfilters", function () {
      if (Modernizr.supports) return y("filter", "blur(2px)");
      var e = i("a");
      return (
        (e.style.cssText = T.join("filter:blur(2px); ")),
        !!e.style.length && (t.documentMode === n || t.documentMode > 9)
      );
    }),
    Modernizr.addTest("flexbox", y("flexBasis", "1px", !0)),
    Modernizr.addTest("csstransitions", y("transition", "all", !0)),
    Modernizr.addTest("csstransforms", function () {
      return (
        -1 === navigator.userAgent.indexOf("Android 2.") &&
        y("transform", "scale(1)", !0)
      );
    }),
    r(),
    o(x),
    delete S.addTest,
    delete S.addAsyncTest;
  for (var O = 0; O < Modernizr._q.length; O++) Modernizr._q[O]();
  e.Modernizr = Modernizr;
})(window, document);
