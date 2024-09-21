/*FB_PKG_DELIM*/

__d(
  "ads-lib-urllib",
  [],
  function (a, b, c, d, e, f) {
    function g(a) {
      return k(m.normalize(a.trim()));
    }
    var h =
        /^(?:(\w+):)?(?:\/\/([^\/:?#]*)(?::(\d+))?)?([^#?]*)(?:\?([^#]*))?(?:#(.*))?/,
      i = "invalid.invalid";
    function j(a) {
      var b = new RegExp(
        "[\\x00-\\x2c\\x2f\\x3b-\\x40\\x5c\\x5e\\x60\\x7b-\\x7f\\uFDD0-\\uFDEF\\uFFF0-\\uFFFF\\u2047\\u2048\\uFE56\\uFE5F\\uFF03\\uFF0F\\uFF1F]"
      );
      if (b.test(a)) return i;
      else return a;
    }
    function k(a) {
      var b = a.toString().trim().match(h) || [];
      b = {
        protocol: b[1] || "",
        domain: j(b[2] || ""),
        port: b[3] || "",
        path: b[4] || "",
        query_s: b[5] || "",
        fragment: b[6] || "",
      };
      if (!b.domain && b.path.indexOf("\\") !== -1) return {};
      var c = new RegExp("^(?:[^/]*:|[\\x00-\\x1f]*/[\\x00-\\x1f]*/)");
      return !b.protocol && c.test(a.toString()) ? {} : b;
    }
    function l(a) {
      var b = "";
      a.protocol && (b += a.protocol + "://");
      a.domain && (b += a.domain);
      a.port && (b += ":" + a.port);
      a.domain && !a.path && (b += "/");
      a.path && (b += a.path);
      a.query_s && (b += "?" + a.query_s);
      a.fragment && (b += "#" + a.fragment);
      return b;
    }
    var m = {
      normalize: function (a) {
        if (!a) return a;
        a = k(a);
        a.protocol || (a.protocol = "http");
        return l(a);
      },
      isUrlSimple: function (a) {
        a = a.trim().split(".");
        return (
          a.length > 1 &&
          a.filter(function (a) {
            return !a;
          }).length === 0
        );
      },
      isUrl: function (a) {
        if (!a) return !1;
        a = g(a);
        return !!(a.domain && a.domain !== i && m.isUrlSimple(a.domain));
      },
      isPotentialUrl: function (a) {
        if (!a) return !0;
        a = g(a);
        return !!(a.domain && a.domain !== i);
      },
      getDomain: function (a) {
        if (!a) return null;
        a = g(a);
        return a.domain && a.domain !== i ? a.domain : null;
      },
    };
    a = m;
    f["default"] = a;
  },
  66
);
__d(
  "FBOverlayBase.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    var h = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var c = b.prototype;
      c.render = function () {
        return h.Children.only(this.props.children);
      };
      return b;
    })(h.Component);
    g["default"] = a;
  },
  98
);
__d(
  "FBOverlayElement.react",
  ["cx", "joinClasses", "react"],
  function (a, b, c, d, e, f, g, h) {
    var i = d("react"),
      j = {
        horizontal: {
          left: "_32rg",
          right: "_32rh",
          fit: "_32rg _32rh",
          center: "_1cy5",
          leftOfChild: "_9ppc",
        },
        vertical: {
          top: "_32ri",
          bottom: "_32rj",
          fit: "_32ri _32rj",
          middle: "_1cy6",
        },
      };
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var d = b.prototype;
      d.render = function () {
        var a = this.props,
          b = a.horizontal;
        b = b === void 0 ? "fit" : b;
        a = a.vertical;
        a = a === void 0 ? "fit" : a;
        var d = i.Children.only(this.props.children);
        b = c("joinClasses")(
          d.props.className,
          "_32rk",
          j.horizontal[b],
          j.vertical[a]
        );
        return i.cloneElement(d, { className: b });
      };
      return b;
    })(i.PureComponent);
    g["default"] = a;
  },
  98
);
__d(
  "FBOverlayContainer.react",
  [
    "cx",
    "invariant",
    "FBOverlayBase.react",
    "FBOverlayElement.react",
    "joinClasses",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    var j = d("react");
    function a(a, b) {
      return j.jsx(
        "div",
        babelHelpers["extends"]({}, a, {
          ref: b,
          className: c("joinClasses")(a.className, "_23n-"),
          children: a.children,
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = j.forwardRef(a);
    b.propTypes = {
      children: function (a, b) {
        a = a[b];
        var d = 0;
        j.Children.forEach(a, function (a) {
          if (a == null) return;
          switch (a.type) {
            case c("FBOverlayBase.react"):
              d++;
              break;
            case c("FBOverlayElement.react"):
              break;
            default:
              i(0, 435);
          }
        });
        d === 1 || i(0, 436);
      },
    };
    e = b;
    g["default"] = e;
  },
  98
);
