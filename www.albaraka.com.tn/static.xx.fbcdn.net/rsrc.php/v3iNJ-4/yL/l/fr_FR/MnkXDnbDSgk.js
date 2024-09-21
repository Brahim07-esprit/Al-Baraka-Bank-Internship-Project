/*FB_PKG_DELIM*/

__d(
  "NotificationBeeperConst",
  ["keyMirror"],
  function (a, b, c, d, e, f, g) {
    a = 1e4;
    b = 4e3;
    d = 1500;
    e = c("keyMirror")({
      PENDING: !0,
      RENDERED: !0,
      READY_TO_HIDE: !0,
      FADING_OUT: !0,
    });
    g.IDLE_DELAY = a;
    g.ACTIVE_DELAY_LONG = b;
    g.FADE_OUT_LENGTH = d;
    g.BeepStates = e;
  },
  98
);
__d(
  "Text.react",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = "span";
    f["default"] = a;
  },
  66
);
__d(
  "UnicodeUtils",
  ["invariant"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = 55296,
      j = 56319,
      k = 56320,
      l = 57343,
      m = /[\uD800-\uDFFF]/;
    function n(a) {
      return i <= a && a <= l;
    }
    function a(a, b) {
      (0 <= b && b < a.length) || h(0, 1346, b, a.length);
      if (b + 1 === a.length) return !1;
      var c = a.charCodeAt(b);
      a = a.charCodeAt(b + 1);
      return i <= c && c <= j && k <= a && a <= l;
    }
    function o(a) {
      return m.test(a);
    }
    function p(a, b) {
      return 1 + n(a.charCodeAt(b));
    }
    function b(a) {
      if (!o(a)) return a.length;
      var b = 0;
      for (var c = 0; c < a.length; c += p(a, c)) b++;
      return b;
    }
    function c(a, b) {
      return r(a, b, b + 1);
    }
    function q(a, b, c) {
      var d = b || 0;
      c = c === void 0 ? Infinity : c || 0;
      if (!o(a)) return a.substr(d, c);
      var e = a.length;
      if (e <= 0 || d > e || c <= 0) return "";
      var f = 0;
      if (d > 0) {
        for (; d > 0 && f < e; d--) f += p(a, f);
        if (f >= e) return "";
      } else if (b < 0) {
        for (f = e; d < 0 && 0 < f; d++) f -= p(a, f - 1);
        f < 0 && (f = 0);
      }
      b = e;
      if (c < e) for (b = f; c > 0 && b < e; c--) b += p(a, b);
      return a.substring(f, b);
    }
    function r(a, b, c) {
      b = b || 0;
      c = c === void 0 ? Infinity : c || 0;
      b < 0 && (b = 0);
      c < 0 && (c = 0);
      var d = Math.abs(c - b);
      b = b < c ? b : c;
      return q(a, b, d);
    }
    function d(a) {
      var b = [];
      for (var c = 0; c < a.length; c += p(a, c)) b.push(a.codePointAt(c));
      return b;
    }
    g.isCodeUnitInSurrogateRange = n;
    g.isSurrogatePair = a;
    g.hasSurrogateUnit = o;
    g.getUTF16Length = p;
    g.strlen = b;
    g.charAt = c;
    g.substr = q;
    g.substring = r;
    g.getCodePoints = d;
  },
  98
);
__d(
  "BaseTextWithEntities.react",
  ["Newline.react", "Text.react", "UnicodeUtils", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function i(a, b) {
      return a.offset - b.offset || b.length - a.length;
    }
    function j(a) {
      return []
        .concat(
          a.ranges,
          a.aggregatedRanges,
          a.imageRanges,
          a.metaRanges,
          a.inlineStyleRanges,
          a.textDelightRanges,
          a.colorRanges
        )
        .filter(Boolean)
        .sort(i);
    }
    function k(a, b) {
      a = a.split(/(\r\n|[\r\n])/);
      var d = [];
      for (var e = 0; e < a.length; e++) {
        var f = a[e];
        f &&
          d.push(
            h.jsx(
              h.Fragment,
              { children: e % 2 === 1 ? h.jsx(c("Newline.react"), {}) : b(f) },
              "text" + e
            )
          );
      }
      return d;
    }
    k.displayName = k.name + " [from " + f.id + "]";
    function a(a) {
      var b = 0,
        e = null,
        f = a.text,
        g = j(a);
      for (var i = 0; i < g.length; i++) {
        var l = g[i];
        if (l.offset < b) continue;
        e = e || [];
        l.offset > b &&
          e.push(
            h.jsx(
              h.Fragment,
              {
                children: k(
                  d("UnicodeUtils").substring(f, b, l.offset),
                  a.textRenderer
                ),
              },
              "text" + i
            )
          );
        e.push(
          h.jsx(
            h.Fragment,
            {
              children: a.rangeRenderer(
                d("UnicodeUtils").substr(f, l.offset, l.length),
                l
              ),
            },
            "range" + i
          )
        );
        b = l.offset + l.length;
      }
      return h.jsxs(c("Text.react"), {
        className: a.className,
        style: a.style,
        children: [
          e,
          f.length > b
            ? k(d("UnicodeUtils").substr(f, b), a.textRenderer)
            : null,
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "BaseTextWithDecoration.react",
  ["ReactFragment", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function i(a, b, c, d) {
      var e = a[b];
      if (!e) {
        d.push(c);
        return;
      }
      e(
        c,
        function (a) {
          d.push(a);
        },
        function (c) {
          i(a, b + 1, c, d);
        }
      );
    }
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var c = b.prototype;
      c.render = function () {
        var a = this.props,
          b = a.decorators;
        a = a.text;
        var c = [],
          e = {};
        i(b, 0, a, c);
        c.forEach(function (a, b) {
          e["i" + b] = a;
        });
        return h.jsx("span", { children: d("ReactFragment").create(e) });
      };
      return b;
    })(h.Component);
    g["default"] = a;
  },
  98
);
__d(
  "AbstractFBEmoji.react",
  ["cx", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.children,
        c = a.size,
        d = a.src;
      a = a.title;
      c = {
        height: c,
        width: c,
        fontSize: c,
        backgroundImage: "url('" + d + "')",
      };
      return i.jsx("span", {
        className: "_5mfr",
        title: a,
        children: i.jsx("span", { style: c, className: "_6qdm", children: b }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "EmojiImageURL",
  ["invariant", "EmojiConfig", "EmojiStaticConfig"],
  function (a, b, c, d, e, f, g) {
    function h(b, c) {
      var d = a.unescape(encodeURIComponent(b));
      c = c;
      for (var e = 0; e < d.length; e++)
        (c = (c << 5) - c + b.charCodeAt(e)), (c &= 4294967295);
      return (c & 255).toString(16);
    }
    function i(a, c, d) {
      c in b("EmojiStaticConfig").supportedSizes || g(0, 772, c);
      c =
        b("EmojiConfig").pixelRatio +
        "/" +
        c +
        "/" +
        a +
        b("EmojiStaticConfig").fileExt;
      a = h(c, b("EmojiStaticConfig").checksumBase);
      return b("EmojiConfig").schemaAuth + "/" + d + a + "/" + c;
    }
    e.exports = {
      getMessengerURL: function (a, c) {
        return i(a, c, b("EmojiStaticConfig").types.MESSENGER);
      },
      getEmoji3URL: function (a, c) {
        c === void 0 && (c = 16);
        return i(a, c, b("EmojiStaticConfig").types.EMOJI_3);
      },
      getFBEmojiURL: function (a, c) {
        c === void 0 && (c = 16);
        return i(a, c, b("EmojiStaticConfig").types.FBEMOJI);
      },
      getFBEmojiExtendedURL: function (a, c) {
        c === void 0 && (c = 16);
        return i(a, c, b("EmojiStaticConfig").types.FB_EMOJI_EXTENDED);
      },
      getCompositeURL: function (a, c) {
        c === void 0 && (c = 16);
        return i(a, c, b("EmojiStaticConfig").types.COMPOSITE);
      },
    };
  },
  null
);
__d(
  "EmojiRendererData",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a() {}
      a.isEmoji = function (a) {
        return a > 983041 || a < 35
          ? !1
          : a === 35 ||
              a === 42 ||
              (a >= 48 && a <= 57) ||
              a === 169 ||
              a === 174 ||
              a === 8205 ||
              a === 8252 ||
              a === 8265 ||
              a === 8419 ||
              a === 8482 ||
              a === 8505 ||
              (a >= 8596 && a <= 8601) ||
              (a >= 8617 && a <= 8618) ||
              (a >= 8986 && a <= 8987) ||
              a === 9e3 ||
              a === 9167 ||
              (a >= 9193 && a <= 9203) ||
              (a >= 9208 && a <= 9210) ||
              a === 9410 ||
              (a >= 9642 && a <= 9643) ||
              a === 9654 ||
              a === 9664 ||
              (a >= 9723 && a <= 9726) ||
              (a >= 9728 && a <= 9732) ||
              a === 9742 ||
              a === 9745 ||
              (a >= 9748 && a <= 9749) ||
              a === 9752 ||
              a === 9760 ||
              (a >= 9762 && a <= 9763) ||
              a === 9766 ||
              a === 9770 ||
              (a >= 9774 && a <= 9775) ||
              (a >= 9784 && a <= 9786) ||
              a === 9792 ||
              a === 9794 ||
              (a >= 9800 && a <= 9811) ||
              (a >= 9823 && a <= 9824) ||
              a === 9827 ||
              (a >= 9829 && a <= 9830) ||
              a === 9832 ||
              a === 9851 ||
              (a >= 9854 && a <= 9855) ||
              (a >= 9874 && a <= 9879) ||
              a === 9881 ||
              (a >= 9883 && a <= 9884) ||
              (a >= 9888 && a <= 9889) ||
              a === 9895 ||
              (a >= 9898 && a <= 9899) ||
              (a >= 9904 && a <= 9905) ||
              (a >= 9917 && a <= 9918) ||
              (a >= 9924 && a <= 9925) ||
              a === 9928 ||
              (a >= 9934 && a <= 9935) ||
              a === 9937 ||
              (a >= 9939 && a <= 9940) ||
              (a >= 9961 && a <= 9962) ||
              (a >= 9968 && a <= 9973) ||
              (a >= 9975 && a <= 9976) ||
              a === 9978 ||
              a === 9981 ||
              a === 9986 ||
              a === 9989 ||
              (a >= 9992 && a <= 9993) ||
              a === 9999 ||
              a === 10002 ||
              a === 10004 ||
              a === 10006 ||
              a === 10013 ||
              a === 10017 ||
              a === 10024 ||
              (a >= 10035 && a <= 10036) ||
              a === 10052 ||
              a === 10055 ||
              a === 10060 ||
              a === 10062 ||
              (a >= 10067 && a <= 10069) ||
              a === 10071 ||
              (a >= 10083 && a <= 10084) ||
              (a >= 10133 && a <= 10135) ||
              a === 10145 ||
              a === 10160 ||
              a === 10175 ||
              (a >= 10548 && a <= 10549) ||
              (a >= 11013 && a <= 11015) ||
              (a >= 11035 && a <= 11036) ||
              a === 11088 ||
              a === 11093 ||
              a === 12336 ||
              a === 12349 ||
              a === 12951 ||
              a === 12953 ||
              a === 126980 ||
              a === 127183 ||
              (a >= 127344 && a <= 127345) ||
              (a >= 127358 && a <= 127359) ||
              a === 127374 ||
              (a >= 127377 && a <= 127386) ||
              (a >= 127462 && a <= 127487) ||
              (a >= 127489 && a <= 127490) ||
              a === 127514 ||
              a === 127535 ||
              (a >= 127538 && a <= 127546) ||
              (a >= 127568 && a <= 127569) ||
              (a >= 127744 && a <= 127777) ||
              (a >= 127780 && a <= 127876) ||
              (a >= 127878 && a <= 127891) ||
              (a >= 127894 && a <= 127895) ||
              (a >= 127897 && a <= 127899) ||
              (a >= 127902 && a <= 127937) ||
              (a >= 127941 && a <= 127942) ||
              (a >= 127944 && a <= 127945) ||
              (a >= 127949 && a <= 127984) ||
              (a >= 127987 && a <= 127989) ||
              (a >= 127991 && a <= 127994) ||
              (a >= 128e3 && a <= 128065) ||
              (a >= 128068 && a <= 128069) ||
              (a >= 128081 && a <= 128101) ||
              (a >= 128121 && a <= 128123) ||
              (a >= 128125 && a <= 128128) ||
              a === 128132 ||
              (a >= 128136 && a <= 128142) ||
              a === 128144 ||
              (a >= 128146 && a <= 128169) ||
              (a >= 128171 && a <= 128253) ||
              (a >= 128255 && a <= 128317) ||
              (a >= 128329 && a <= 128334) ||
              (a >= 128336 && a <= 128359) ||
              (a >= 128367 && a <= 128368) ||
              a === 128371 ||
              (a >= 128374 && a <= 128377) ||
              a === 128391 ||
              (a >= 128394 && a <= 128397) ||
              (a >= 128420 && a <= 128421) ||
              a === 128424 ||
              (a >= 128433 && a <= 128434) ||
              a === 128444 ||
              (a >= 128450 && a <= 128452) ||
              (a >= 128465 && a <= 128467) ||
              (a >= 128476 && a <= 128478) ||
              a === 128481 ||
              a === 128483 ||
              a === 128488 ||
              a === 128495 ||
              a === 128499 ||
              (a >= 128506 && a <= 128580) ||
              (a >= 128584 && a <= 128586) ||
              (a >= 128640 && a <= 128674) ||
              (a >= 128676 && a <= 128691) ||
              (a >= 128695 && a <= 128703) ||
              (a >= 128705 && a <= 128709) ||
              a === 128715 ||
              (a >= 128717 && a <= 128722) ||
              (a >= 128725 && a <= 128727) ||
              (a >= 128732 && a <= 128741) ||
              a === 128745 ||
              (a >= 128747 && a <= 128748) ||
              a === 128752 ||
              (a >= 128755 && a <= 128764) ||
              (a >= 128992 && a <= 129003) ||
              a === 129008 ||
              (a >= 129293 && a <= 129294) ||
              (a >= 129296 && a <= 129303) ||
              (a >= 129312 && a <= 129317) ||
              (a >= 129319 && a <= 129327) ||
              a === 129338 ||
              (a >= 129343 && a <= 129349) ||
              (a >= 129351 && a <= 129398) ||
              (a >= 129400 && a <= 129460) ||
              a === 129463 ||
              a === 129466 ||
              (a >= 129468 && a <= 129484) ||
              a === 129488 ||
              (a >= 129502 && a <= 129535) ||
              (a >= 129648 && a <= 129660) ||
              (a >= 129664 && a <= 129672) ||
              (a >= 129680 && a <= 129725) ||
              (a >= 129727 && a <= 129730) ||
              (a >= 129742 && a <= 129755) ||
              (a >= 129760 && a <= 129768) ||
              (a >= 917536 && a <= 917631) ||
              (a >= 983040 && a <= 983041);
      };
      a.isEmojiModifier = function (a) {
        return a > 127999 || a < 127995 ? !1 : a >= 127995 && a <= 127999;
      };
      a.isEmojiModifierBase = function (a) {
        return a > 129784 || a < 9757
          ? !1
          : a === 9757 ||
              a === 9977 ||
              (a >= 9994 && a <= 9997) ||
              a === 127877 ||
              (a >= 127938 && a <= 127940) ||
              a === 127943 ||
              (a >= 127946 && a <= 127948) ||
              (a >= 128066 && a <= 128067) ||
              (a >= 128070 && a <= 128080) ||
              (a >= 128102 && a <= 128120) ||
              a === 128124 ||
              (a >= 128129 && a <= 128131) ||
              (a >= 128133 && a <= 128135) ||
              a === 128143 ||
              a === 128145 ||
              a === 128170 ||
              (a >= 128372 && a <= 128373) ||
              a === 128378 ||
              a === 128400 ||
              (a >= 128405 && a <= 128406) ||
              (a >= 128581 && a <= 128583) ||
              (a >= 128587 && a <= 128591) ||
              a === 128675 ||
              (a >= 128692 && a <= 128694) ||
              a === 128704 ||
              a === 128716 ||
              a === 129292 ||
              a === 129295 ||
              (a >= 129304 && a <= 129311) ||
              a === 129318 ||
              (a >= 129328 && a <= 129337) ||
              (a >= 129340 && a <= 129342) ||
              a === 129399 ||
              (a >= 129461 && a <= 129462) ||
              (a >= 129464 && a <= 129465) ||
              a === 129467 ||
              (a >= 129485 && a <= 129487) ||
              (a >= 129489 && a <= 129501) ||
              (a >= 129731 && a <= 129733) ||
              (a >= 129776 && a <= 129784);
      };
      a.isEmojiVariationSelector = function (a) {
        return a === 65039;
      };
      a.isNonSpacingCombiningMark = function (a) {
        return a > 8419 || a < 8416 ? !1 : a === 8416 || a === 8419;
      };
      a.isRegionalIndicator = function (a) {
        return a > 127487 || a < 127462 ? !1 : a >= 127462 && a <= 127487;
      };
      a.isTagSpec = function (a) {
        return a > 917630 || a < 917536
          ? !1
          : (a >= 917536 && a <= 917568) || (a >= 917595 && a <= 917630);
      };
      a.isTagTerm = function (a) {
        return a === 917631;
      };
      a.isText = function (a) {
        return a > 8419 || a < 35
          ? !1
          : a === 35 || a === 42 || (a >= 48 && a <= 57) || a === 8419;
      };
      a.isTextVariationSelector = function (a) {
        return a === 65038;
      };
      a.isDefaultTextPresentation = function (a) {
        return a > 917631 || a < 35
          ? !1
          : a === 35 ||
              a === 42 ||
              (a >= 48 && a <= 57) ||
              a === 169 ||
              a === 174 ||
              a === 8205 ||
              a === 8252 ||
              a === 8265 ||
              a === 8419 ||
              a === 8482 ||
              a === 8505 ||
              (a >= 8596 && a <= 8597) ||
              (a >= 8617 && a <= 8618) ||
              a === 9e3 ||
              a === 9167 ||
              (a >= 9197 && a <= 9199) ||
              (a >= 9201 && a <= 9202) ||
              (a >= 9208 && a <= 9210) ||
              a === 9410 ||
              a === 9654 ||
              a === 9664 ||
              (a >= 9730 && a <= 9732) ||
              a === 9745 ||
              a === 9752 ||
              a === 9760 ||
              (a >= 9762 && a <= 9763) ||
              a === 9766 ||
              a === 9770 ||
              (a >= 9774 && a <= 9775) ||
              (a >= 9784 && a <= 9785) ||
              a === 9792 ||
              a === 9794 ||
              a === 9823 ||
              a === 9851 ||
              a === 9854 ||
              a === 9874 ||
              (a >= 9876 && a <= 9879) ||
              a === 9881 ||
              (a >= 9883 && a <= 9884) ||
              a === 9895 ||
              (a >= 9904 && a <= 9905) ||
              a === 9928 ||
              a === 9935 ||
              a === 9937 ||
              a === 9939 ||
              a === 9961 ||
              (a >= 9968 && a <= 9969) ||
              a === 9972 ||
              (a >= 9975 && a <= 9977) ||
              a === 9997 ||
              a === 9999 ||
              a === 10002 ||
              a === 10004 ||
              a === 10013 ||
              a === 10017 ||
              a === 10052 ||
              a === 10055 ||
              a === 10083 ||
              a === 12336 ||
              (a >= 127344 && a <= 127345) ||
              (a >= 127358 && a <= 127359) ||
              a === 127777 ||
              (a >= 127780 && a <= 127788) ||
              a === 127798 ||
              a === 127869 ||
              (a >= 127894 && a <= 127895) ||
              (a >= 127897 && a <= 127899) ||
              (a >= 127902 && a <= 127903) ||
              (a >= 127947 && a <= 127950) ||
              (a >= 127956 && a <= 127967) ||
              a === 127987 ||
              a === 127989 ||
              a === 127991 ||
              a === 128063 ||
              a === 128065 ||
              a === 128253 ||
              (a >= 128329 && a <= 128330) ||
              (a >= 128367 && a <= 128368) ||
              (a >= 128371 && a <= 128377) ||
              a === 128391 ||
              (a >= 128394 && a <= 128397) ||
              a === 128400 ||
              a === 128421 ||
              a === 128424 ||
              (a >= 128433 && a <= 128434) ||
              a === 128444 ||
              (a >= 128450 && a <= 128452) ||
              (a >= 128465 && a <= 128467) ||
              (a >= 128476 && a <= 128478) ||
              a === 128481 ||
              a === 128483 ||
              a === 128488 ||
              a === 128495 ||
              a === 128499 ||
              a === 128506 ||
              a === 128715 ||
              (a >= 128717 && a <= 128719) ||
              (a >= 128736 && a <= 128741) ||
              a === 128745 ||
              a === 128752 ||
              a === 128755 ||
              (a >= 917536 && a <= 917631);
      };
      a.isSymbol = function (a) {
        return a > 8482 || a < 169 ? !1 : a === 169 || a === 174 || a === 8482;
      };
      a.isZWJ = function (a) {
        return a === 8205;
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "EmojiRenderer",
  ["EmojiRendererData", "UnicodeUtils"],
  function (a, b, c, d, e, f, g) {
    var h = 0,
      i = 1,
      j = 2,
      k = 3,
      l = 4,
      m = 5,
      n = 6,
      o = 7,
      p = 8,
      q = 9,
      r = 10,
      s = 11;
    function t(a) {
      var b = a[0];
      if (b === void 0) return !1;
      var d = a.length,
        e = a[d - 1];
      if (e) {
        e = e.charCodeAt(0);
        if (c("EmojiRendererData").isTagSpec(e)) return !1;
      }
      b = b.charCodeAt(0);
      if (c("EmojiRendererData").isSymbol(b) && d < 2) return !1;
      if (c("EmojiRendererData").isText(b))
        if (d === 1) return !1;
        else if (a.length == 2)
          return c("EmojiRendererData").isNonSpacingCombiningMark(
            a[1].charCodeAt(0)
          );
        else {
          e = 1;
          c("EmojiRendererData").isEmojiVariationSelector(a[e].charCodeAt(0)) &&
            e++;
          while (e < a.length) {
            if (
              !c("EmojiRendererData").isNonSpacingCombiningMark(
                a[e].charCodeAt(0)
              )
            )
              return !1;
            e++;
          }
          return !0;
        }
      return !0;
    }
    function u(a, b) {
      var e = null,
        f = [],
        g = p,
        u = 0,
        v = a.length;
      while (u < v) {
        var w = a.codePointAt(u),
          x = d("UnicodeUtils").getUTF16Length(a, u),
          y = a.substr(u, x);
        switch (g) {
          case q:
            c("EmojiRendererData").isRegionalIndicator(w) ? (g = k) : (g = p);
            break;
          case l:
            if (c("EmojiRendererData").isEmojiModifier(w)) {
              g = m;
              break;
            }
          case h:
            c("EmojiRendererData").isZWJ(w)
              ? (g = o)
              : c("EmojiRendererData").isEmojiVariationSelector(w)
              ? (g = j)
              : c("EmojiRendererData").isTextVariationSelector(w)
              ? (g = s)
              : c("EmojiRendererData").isNonSpacingCombiningMark(w)
              ? (g = i)
              : c("EmojiRendererData").isTagSpec(w)
              ? (g = n)
              : (g = p);
            break;
          case i:
          case j:
            if (c("EmojiRendererData").isNonSpacingCombiningMark(w)) break;
          case k:
          case m:
            c("EmojiRendererData").isZWJ(w)
              ? (g = o)
              : c("EmojiRendererData").isTagSpec(w)
              ? (g = n)
              : (g = p);
            break;
          case n:
            c("EmojiRendererData").isTagSpec(w) ||
            c("EmojiRendererData").isTagTerm(w)
              ? (g = n)
              : (g = p);
            break;
          case o:
            c("EmojiRendererData").isRegionalIndicator(w)
              ? (g = q)
              : c("EmojiRendererData").isEmojiModifierBase(w)
              ? (g = l)
              : c("EmojiRendererData").isEmoji(w)
              ? (g = h)
              : (g = p);
            break;
          case r:
            c("EmojiRendererData").isNonSpacingCombiningMark(w)
              ? (g = i)
              : c("EmojiRendererData").isEmojiVariationSelector(w)
              ? (g = j)
              : (g = p);
            break;
          default:
            g = p;
            break;
        }
        if (g === p) {
          c("EmojiRendererData").isRegionalIndicator(w)
            ? (g = q)
            : c("EmojiRendererData").isEmojiModifierBase(w)
            ? (g = l)
            : c("EmojiRendererData").isText(w)
            ? (g = r)
            : c("EmojiRendererData").isEmoji(w) && (g = h);
          if (g !== p) {
            e !== null && t(e.emoji) && f.push(e);
            if (b !== null && b === f.length) {
              e = null;
              break;
            }
            e = { emoji: [y], length: x, offset: u };
          }
        } else e !== null && (e.emoji.push(y), (e.length += x));
        u += x;
      }
      e !== null && t(e.emoji) && f.push(e);
      return f;
    }
    function a(a, b, c) {
      c = u(a);
      var d = [],
        e = 0;
      c.forEach(function (c) {
        var f = c.offset;
        f > e && d.push(a.substr(e, f - e));
        var g = b(c.emoji);
        g != null && d.push(g);
        e = f + c.length;
      });
      d.push(a.substr(e, a.length - e));
      return d;
    }
    function b(a) {
      return u(a, 1).length === 1;
    }
    function e(a) {
      return u(a).length;
    }
    g.parse = u;
    g.render = a;
    g.containsEmoji = b;
    g.countEmoji = e;
  },
  98
);
__d(
  "SupportedCommonEmoji",
  [],
  function (a, b, c, d, e, f) {
    a = {
      "1f004": 1,
      "1f0cf": 1,
      "1f170": 1,
      "1f171": 1,
      "1f17e": 1,
      "1f17f": 1,
      "1f18e": 1,
      "1f191": 1,
      "1f192": 1,
      "1f193": 1,
      "1f194": 1,
      "1f195": 1,
      "1f196": 1,
      "1f197": 1,
      "1f198": 1,
      "1f199": 1,
      "1f19a": 1,
      "1f1e6": 1,
      "1f1e6_1f1e8": 1,
      "1f1e6_1f1e9": 1,
      "1f1e6_1f1ea": 1,
      "1f1e6_1f1eb": 1,
      "1f1e6_1f1ec": 1,
      "1f1e6_1f1ee": 1,
      "1f1e6_1f1f1": 1,
      "1f1e6_1f1f2": 1,
      "1f1e6_1f1f4": 1,
      "1f1e6_1f1f6": 1,
      "1f1e6_1f1f7": 1,
      "1f1e6_1f1f8": 1,
      "1f1e6_1f1f9": 1,
      "1f1e6_1f1fa": 1,
      "1f1e6_1f1fc": 1,
      "1f1e6_1f1fd": 1,
      "1f1e6_1f1ff": 1,
      "1f1e7": 1,
      "1f1e7_1f1e6": 1,
      "1f1e7_1f1e7": 1,
      "1f1e7_1f1e9": 1,
      "1f1e7_1f1ea": 1,
      "1f1e7_1f1eb": 1,
      "1f1e7_1f1ec": 1,
      "1f1e7_1f1ed": 1,
      "1f1e7_1f1ee": 1,
      "1f1e7_1f1ef": 1,
      "1f1e7_1f1f1": 1,
      "1f1e7_1f1f2": 1,
      "1f1e7_1f1f3": 1,
      "1f1e7_1f1f4": 1,
      "1f1e7_1f1f6": 1,
      "1f1e7_1f1f7": 1,
      "1f1e7_1f1f8": 1,
      "1f1e7_1f1f9": 1,
      "1f1e7_1f1fb": 1,
      "1f1e7_1f1fc": 1,
      "1f1e7_1f1fe": 1,
      "1f1e7_1f1ff": 1,
      "1f1e8": 1,
      "1f1e8_1f1e6": 1,
      "1f1e8_1f1e8": 1,
      "1f1e8_1f1e9": 1,
      "1f1e8_1f1eb": 1,
      "1f1e8_1f1ec": 1,
      "1f1e8_1f1ed": 1,
      "1f1e8_1f1ee": 1,
      "1f1e8_1f1f0": 1,
      "1f1e8_1f1f1": 1,
      "1f1e8_1f1f2": 1,
      "1f1e8_1f1f3": 1,
      "1f1e8_1f1f4": 1,
      "1f1e8_1f1f5": 1,
      "1f1e8_1f1f7": 1,
      "1f1e8_1f1fa": 1,
      "1f1e8_1f1fb": 1,
      "1f1e8_1f1fc": 1,
      "1f1e8_1f1fd": 1,
      "1f1e8_1f1fe": 1,
      "1f1e8_1f1ff": 1,
      "1f1e9": 1,
      "1f1e9_1f1ea": 1,
      "1f1e9_1f1ec": 1,
      "1f1e9_1f1ef": 1,
      "1f1e9_1f1f0": 1,
      "1f1e9_1f1f2": 1,
      "1f1e9_1f1f4": 1,
      "1f1e9_1f1ff": 1,
      "1f1ea": 1,
      "1f1ea_1f1e6": 1,
      "1f1ea_1f1e8": 1,
      "1f1ea_1f1ea": 1,
      "1f1ea_1f1ec": 1,
      "1f1ea_1f1ed": 1,
      "1f1ea_1f1f7": 1,
      "1f1ea_1f1f8": 1,
      "1f1ea_1f1f9": 1,
      "1f1ea_1f1fa": 1,
      "1f1eb": 1,
      "1f1eb_1f1ee": 1,
      "1f1eb_1f1ef": 1,
      "1f1eb_1f1f0": 1,
      "1f1eb_1f1f2": 1,
      "1f1eb_1f1f4": 1,
      "1f1eb_1f1f7": 1,
      "1f1ec": 1,
      "1f1ec_1f1e6": 1,
      "1f1ec_1f1e7": 1,
      "1f1ec_1f1e9": 1,
      "1f1ec_1f1ea": 1,
      "1f1ec_1f1eb": 1,
      "1f1ec_1f1ec": 1,
      "1f1ec_1f1ed": 1,
      "1f1ec_1f1ee": 1,
      "1f1ec_1f1f1": 1,
      "1f1ec_1f1f2": 1,
      "1f1ec_1f1f3": 1,
      "1f1ec_1f1f5": 1,
      "1f1ec_1f1f6": 1,
      "1f1ec_1f1f7": 1,
      "1f1ec_1f1f8": 1,
      "1f1ec_1f1f9": 1,
      "1f1ec_1f1fa": 1,
      "1f1ec_1f1fc": 1,
      "1f1ec_1f1fe": 1,
      "1f1ed": 1,
      "1f1ed_1f1f0": 1,
      "1f1ed_1f1f2": 1,
      "1f1ed_1f1f3": 1,
      "1f1ed_1f1f7": 1,
      "1f1ed_1f1f9": 1,
      "1f1ed_1f1fa": 1,
      "1f1ee": 1,
      "1f1ee_1f1e8": 1,
      "1f1ee_1f1e9": 1,
      "1f1ee_1f1ea": 1,
      "1f1ee_1f1f1": 1,
      "1f1ee_1f1f2": 1,
      "1f1ee_1f1f3": 1,
      "1f1ee_1f1f4": 1,
      "1f1ee_1f1f6": 1,
      "1f1ee_1f1f7": 1,
      "1f1ee_1f1f8": 1,
      "1f1ee_1f1f9": 1,
      "1f1ef": 1,
      "1f1ef_1f1ea": 1,
      "1f1ef_1f1f2": 1,
      "1f1ef_1f1f4": 1,
      "1f1ef_1f1f5": 1,
      "1f1f0": 1,
      "1f1f0_1f1ea": 1,
      "1f1f0_1f1ec": 1,
      "1f1f0_1f1ed": 1,
      "1f1f0_1f1ee": 1,
      "1f1f0_1f1f2": 1,
      "1f1f0_1f1f3": 1,
      "1f1f0_1f1f5": 1,
      "1f1f0_1f1f7": 1,
      "1f1f0_1f1fc": 1,
      "1f1f0_1f1fe": 1,
      "1f1f0_1f1ff": 1,
      "1f1f1": 1,
      "1f1f1_1f1e6": 1,
      "1f1f1_1f1e7": 1,
      "1f1f1_1f1e8": 1,
      "1f1f1_1f1ee": 1,
      "1f1f1_1f1f0": 1,
      "1f1f1_1f1f7": 1,
      "1f1f1_1f1f8": 1,
      "1f1f1_1f1f9": 1,
      "1f1f1_1f1fa": 1,
      "1f1f1_1f1fb": 1,
      "1f1f1_1f1fe": 1,
      "1f1f2": 1,
      "1f1f2_1f1e6": 1,
      "1f1f2_1f1e8": 1,
      "1f1f2_1f1e9": 1,
      "1f1f2_1f1ea": 1,
      "1f1f2_1f1eb": 1,
      "1f1f2_1f1ec": 1,
      "1f1f2_1f1ed": 1,
      "1f1f2_1f1f0": 1,
      "1f1f2_1f1f1": 1,
      "1f1f2_1f1f2": 1,
      "1f1f2_1f1f3": 1,
      "1f1f2_1f1f4": 1,
      "1f1f2_1f1f5": 1,
      "1f1f2_1f1f6": 1,
      "1f1f2_1f1f7": 1,
      "1f1f2_1f1f8": 1,
      "1f1f2_1f1f9": 1,
      "1f1f2_1f1fa": 1,
      "1f1f2_1f1fb": 1,
      "1f1f2_1f1fc": 1,
      "1f1f2_1f1fd": 1,
      "1f1f2_1f1fe": 1,
      "1f1f2_1f1ff": 1,
      "1f1f3": 1,
      "1f1f3_1f1e6": 1,
      "1f1f3_1f1e8": 1,
      "1f1f3_1f1ea": 1,
      "1f1f3_1f1eb": 1,
      "1f1f3_1f1ec": 1,
      "1f1f3_1f1ee": 1,
      "1f1f3_1f1f1": 1,
      "1f1f3_1f1f4": 1,
      "1f1f3_1f1f5": 1,
      "1f1f3_1f1f7": 1,
      "1f1f3_1f1fa": 1,
      "1f1f3_1f1ff": 1,
      "1f1f4": 1,
      "1f1f4_1f1f2": 1,
      "1f1f5": 1,
      "1f1f5_1f1e6": 1,
      "1f1f5_1f1ea": 1,
      "1f1f5_1f1eb": 1,
      "1f1f5_1f1ec": 1,
      "1f1f5_1f1ed": 1,
      "1f1f5_1f1f0": 1,
      "1f1f5_1f1f1": 1,
      "1f1f5_1f1f2": 1,
      "1f1f5_1f1f3": 1,
      "1f1f5_1f1f7": 1,
      "1f1f5_1f1f8": 1,
      "1f1f5_1f1f9": 1,
      "1f1f5_1f1fc": 1,
      "1f1f5_1f1fe": 1,
      "1f1f6": 1,
      "1f1f6_1f1e6": 1,
      "1f1f7": 1,
      "1f1f7_1f1ea": 1,
      "1f1f7_1f1f4": 1,
      "1f1f7_1f1f8": 1,
      "1f1f7_1f1fa": 1,
      "1f1f7_1f1fc": 1,
      "1f1f8": 1,
      "1f1f8_1f1e6": 1,
      "1f1f8_1f1e7": 1,
      "1f1f8_1f1e8": 1,
      "1f1f8_1f1e9": 1,
      "1f1f8_1f1ea": 1,
      "1f1f8_1f1ec": 1,
      "1f1f8_1f1ed": 1,
      "1f1f8_1f1ee": 1,
      "1f1f8_1f1ef": 1,
      "1f1f8_1f1f0": 1,
      "1f1f8_1f1f1": 1,
      "1f1f8_1f1f2": 1,
      "1f1f8_1f1f3": 1,
      "1f1f8_1f1f4": 1,
      "1f1f8_1f1f7": 1,
      "1f1f8_1f1f8": 1,
      "1f1f8_1f1f9": 1,
      "1f1f8_1f1fb": 1,
      "1f1f8_1f1fd": 1,
      "1f1f8_1f1fe": 1,
      "1f1f8_1f1ff": 1,
      "1f1f9": 1,
      "1f1f9_1f1e6": 1,
      "1f1f9_1f1e8": 1,
      "1f1f9_1f1e9": 1,
      "1f1f9_1f1eb": 1,
      "1f1f9_1f1ec": 1,
      "1f1f9_1f1ed": 1,
      "1f1f9_1f1ef": 1,
      "1f1f9_1f1f0": 1,
      "1f1f9_1f1f1": 1,
      "1f1f9_1f1f2": 1,
      "1f1f9_1f1f3": 1,
      "1f1f9_1f1f4": 1,
      "1f1f9_1f1f7": 1,
      "1f1f9_1f1f9": 1,
      "1f1f9_1f1fb": 1,
      "1f1f9_1f1fc": 1,
      "1f1f9_1f1ff": 1,
      "1f1fa": 1,
      "1f1fa_1f1e6": 1,
      "1f1fa_1f1ec": 1,
      "1f1fa_1f1f2": 1,
      "1f1fa_1f1f3": 1,
      "1f1fa_1f1f8": 1,
      "1f1fa_1f1fe": 1,
      "1f1fa_1f1ff": 1,
      "1f1fb": 1,
      "1f1fb_1f1e6": 1,
      "1f1fb_1f1e8": 1,
      "1f1fb_1f1ea": 1,
      "1f1fb_1f1ec": 1,
      "1f1fb_1f1ee": 1,
      "1f1fb_1f1f3": 1,
      "1f1fb_1f1fa": 1,
      "1f1fc": 1,
      "1f1fc_1f1eb": 1,
      "1f1fc_1f1f8": 1,
      "1f1fd": 1,
      "1f1fd_1f1f0": 1,
      "1f1fe": 1,
      "1f1fe_1f1ea": 1,
      "1f1fe_1f1f9": 1,
      "1f1ff": 1,
      "1f1ff_1f1e6": 1,
      "1f1ff_1f1f2": 1,
      "1f1ff_1f1fc": 1,
      "1f201": 1,
      "1f202": 1,
      "1f21a": 1,
      "1f22f": 1,
      "1f232": 1,
      "1f233": 1,
      "1f234": 1,
      "1f235": 1,
      "1f236": 1,
      "1f237": 1,
      "1f238": 1,
      "1f239": 1,
      "1f23a": 1,
      "1f250": 1,
      "1f251": 1,
      "1f300": 1,
      "1f301": 1,
      "1f302": 1,
      "1f303": 1,
      "1f304": 1,
      "1f305": 1,
      "1f306": 1,
      "1f307": 1,
      "1f308": 1,
      "1f309": 1,
      "1f30a": 1,
      "1f30b": 1,
      "1f30c": 1,
      "1f30d": 1,
      "1f30e": 1,
      "1f30f": 1,
      "1f310": 1,
      "1f311": 1,
      "1f312": 1,
      "1f313": 1,
      "1f314": 1,
      "1f315": 1,
      "1f316": 1,
      "1f317": 1,
      "1f318": 1,
      "1f319": 1,
      "1f31a": 1,
      "1f31b": 1,
      "1f31c": 1,
      "1f31d": 1,
      "1f31e": 1,
      "1f31f": 1,
      "1f320": 1,
      "1f321": 1,
      "1f324": 1,
      "1f325": 1,
      "1f326": 1,
      "1f327": 1,
      "1f328": 1,
      "1f329": 1,
      "1f32a": 1,
      "1f32b": 1,
      "1f32c": 1,
      "1f32d": 1,
      "1f32e": 1,
      "1f32f": 1,
      "1f330": 1,
      "1f331": 1,
      "1f332": 1,
      "1f333": 1,
      "1f334": 1,
      "1f335": 1,
      "1f336": 1,
      "1f337": 1,
      "1f338": 1,
      "1f339": 1,
      "1f33a": 1,
      "1f33b": 1,
      "1f33c": 1,
      "1f33d": 1,
      "1f33e": 1,
      "1f33f": 1,
      "1f340": 1,
      "1f341": 1,
      "1f342": 1,
      "1f343": 1,
      "1f344": 1,
      "1f345": 1,
      "1f346": 1,
      "1f347": 1,
      "1f348": 1,
      "1f349": 1,
      "1f34a": 1,
      "1f34b": 1,
      "1f34c": 1,
      "1f34d": 1,
      "1f34e": 1,
      "1f34f": 1,
      "1f350": 1,
      "1f351": 1,
      "1f352": 1,
      "1f353": 1,
      "1f354": 1,
      "1f355": 1,
      "1f356": 1,
      "1f357": 1,
      "1f358": 1,
      "1f359": 1,
      "1f35a": 1,
      "1f35b": 1,
      "1f35c": 1,
      "1f35d": 1,
      "1f35e": 1,
      "1f35f": 1,
      "1f360": 1,
      "1f361": 1,
      "1f362": 1,
      "1f363": 1,
      "1f364": 1,
      "1f365": 1,
      "1f366": 1,
      "1f367": 1,
      "1f368": 1,
      "1f369": 1,
      "1f36a": 1,
      "1f36b": 1,
      "1f36c": 1,
      "1f36d": 1,
      "1f36e": 1,
      "1f36f": 1,
      "1f370": 1,
      "1f371": 1,
      "1f372": 1,
      "1f373": 1,
      "1f374": 1,
      "1f375": 1,
      "1f376": 1,
      "1f377": 1,
      "1f378": 1,
      "1f379": 1,
      "1f37a": 1,
      "1f37b": 1,
      "1f37c": 1,
      "1f37d": 1,
      "1f37e": 1,
      "1f37f": 1,
      "1f380": 1,
      "1f381": 1,
      "1f382": 1,
      "1f383": 1,
      "1f384": 1,
      "1f385": 1,
      "1f385_1f3fb": 1,
      "1f385_1f3fc": 1,
      "1f385_1f3fd": 1,
      "1f385_1f3fe": 1,
      "1f385_1f3ff": 1,
      "1f386": 1,
      "1f387": 1,
      "1f388": 1,
      "1f389": 1,
      "1f38a": 1,
      "1f38b": 1,
      "1f38c": 1,
      "1f38d": 1,
      "1f38e": 1,
      "1f38f": 1,
      "1f390": 1,
      "1f391": 1,
      "1f392": 1,
      "1f393": 1,
      "1f396": 1,
      "1f397": 1,
      "1f399": 1,
      "1f39a": 1,
      "1f39b": 1,
      "1f39e": 1,
      "1f39f": 1,
      "1f3a0": 1,
      "1f3a1": 1,
      "1f3a2": 1,
      "1f3a3": 1,
      "1f3a4": 1,
      "1f3a5": 1,
      "1f3a6": 1,
      "1f3a7": 1,
      "1f3a8": 1,
      "1f3a9": 1,
      "1f3aa": 1,
      "1f3ab": 1,
      "1f3ac": 1,
      "1f3ad": 1,
      "1f3ae": 1,
      "1f3af": 1,
      "1f3b0": 1,
      "1f3b1": 1,
      "1f3b2": 1,
      "1f3b3": 1,
      "1f3b4": 1,
      "1f3b5": 1,
      "1f3b6": 1,
      "1f3b7": 1,
      "1f3b8": 1,
      "1f3b9": 1,
      "1f3ba": 1,
      "1f3bb": 1,
      "1f3bc": 1,
      "1f3bd": 1,
      "1f3be": 1,
      "1f3bf": 1,
      "1f3c0": 1,
      "1f3c1": 1,
      "1f3c2": 1,
      "1f3c2_1f3fb": 1,
      "1f3c2_1f3fc": 1,
      "1f3c2_1f3fd": 1,
      "1f3c2_1f3fe": 1,
      "1f3c2_1f3ff": 1,
      "1f3c3_1f3fb_200d_2640": 1,
      "1f3c3_1f3fb_200d_2642": 1,
      "1f3c3_1f3fc_200d_2640": 1,
      "1f3c3_1f3fc_200d_2642": 1,
      "1f3c3_1f3fd_200d_2640": 1,
      "1f3c3_1f3fd_200d_2642": 1,
      "1f3c3_1f3fe_200d_2640": 1,
      "1f3c3_1f3fe_200d_2642": 1,
      "1f3c3_1f3ff_200d_2640": 1,
      "1f3c3_1f3ff_200d_2642": 1,
      "1f3c3_200d_2640": 1,
      "1f3c3_200d_2642": 1,
      "1f3c4_1f3fb_200d_2640": 1,
      "1f3c4_1f3fb_200d_2642": 1,
      "1f3c4_1f3fc_200d_2640": 1,
      "1f3c4_1f3fc_200d_2642": 1,
      "1f3c4_1f3fd_200d_2640": 1,
      "1f3c4_1f3fd_200d_2642": 1,
      "1f3c4_1f3fe_200d_2640": 1,
      "1f3c4_1f3fe_200d_2642": 1,
      "1f3c4_1f3ff_200d_2640": 1,
      "1f3c4_1f3ff_200d_2642": 1,
      "1f3c4_200d_2640": 1,
      "1f3c4_200d_2642": 1,
      "1f3c5": 1,
      "1f3c6": 1,
      "1f3c7": 1,
      "1f3c7_1f3fb": 1,
      "1f3c7_1f3fc": 1,
      "1f3c7_1f3fd": 1,
      "1f3c7_1f3fe": 1,
      "1f3c7_1f3ff": 1,
      "1f3c8": 1,
      "1f3c9": 1,
      "1f3ca_1f3fb_200d_2640": 1,
      "1f3ca_1f3fb_200d_2642": 1,
      "1f3ca_1f3fc_200d_2640": 1,
      "1f3ca_1f3fc_200d_2642": 1,
      "1f3ca_1f3fd_200d_2640": 1,
      "1f3ca_1f3fd_200d_2642": 1,
      "1f3ca_1f3fe_200d_2640": 1,
      "1f3ca_1f3fe_200d_2642": 1,
      "1f3ca_1f3ff_200d_2640": 1,
      "1f3ca_1f3ff_200d_2642": 1,
      "1f3ca_200d_2640": 1,
      "1f3ca_200d_2642": 1,
      "1f3cb_1f3fb_200d_2640": 1,
      "1f3cb_1f3fb_200d_2642": 1,
      "1f3cb_1f3fc_200d_2640": 1,
      "1f3cb_1f3fc_200d_2642": 1,
      "1f3cb_1f3fd_200d_2640": 1,
      "1f3cb_1f3fd_200d_2642": 1,
      "1f3cb_1f3fe_200d_2640": 1,
      "1f3cb_1f3fe_200d_2642": 1,
      "1f3cb_1f3ff_200d_2640": 1,
      "1f3cb_1f3ff_200d_2642": 1,
      "1f3cb_200d_2640": 1,
      "1f3cb_200d_2642": 1,
      "1f3cc_1f3fb_200d_2640": 1,
      "1f3cc_1f3fb_200d_2642": 1,
      "1f3cc_1f3fc_200d_2640": 1,
      "1f3cc_1f3fc_200d_2642": 1,
      "1f3cc_1f3fd_200d_2640": 1,
      "1f3cc_1f3fd_200d_2642": 1,
      "1f3cc_1f3fe_200d_2640": 1,
      "1f3cc_1f3fe_200d_2642": 1,
      "1f3cc_1f3ff_200d_2640": 1,
      "1f3cc_1f3ff_200d_2642": 1,
      "1f3cc_200d_2640": 1,
      "1f3cc_200d_2642": 1,
      "1f3cd": 1,
      "1f3ce": 1,
      "1f3cf": 1,
      "1f3d0": 1,
      "1f3d1": 1,
      "1f3d2": 1,
      "1f3d3": 1,
      "1f3d4": 1,
      "1f3d5": 1,
      "1f3d6": 1,
      "1f3d7": 1,
      "1f3d8": 1,
      "1f3d9": 1,
      "1f3da": 1,
      "1f3db": 1,
      "1f3dc": 1,
      "1f3dd": 1,
      "1f3de": 1,
      "1f3df": 1,
      "1f3e0": 1,
      "1f3e1": 1,
      "1f3e2": 1,
      "1f3e3": 1,
      "1f3e4": 1,
      "1f3e5": 1,
      "1f3e6": 1,
      "1f3e7": 1,
      "1f3e8": 1,
      "1f3e9": 1,
      "1f3ea": 1,
      "1f3eb": 1,
      "1f3ec": 1,
      "1f3ed": 1,
      "1f3ee": 1,
      "1f3ef": 1,
      "1f3f0": 1,
      "1f3f3": 1,
      "1f3f3_200d_1f308": 1,
      "1f3f4": 1,
      "1f3f4_e0067_e0062_e0065_e006e_e0067_e007f": 1,
      "1f3f4_e0067_e0062_e0073_e0063_e0074_e007f": 1,
      "1f3f4_e0067_e0062_e0077_e006c_e0073_e007f": 1,
      "1f3f5": 1,
      "1f3f7": 1,
      "1f3f8": 1,
      "1f3f9": 1,
      "1f3fa": 1,
      "1f3fb": 1,
      "1f3fc": 1,
      "1f3fd": 1,
      "1f3fe": 1,
      "1f3ff": 1,
      "1f400": 1,
      "1f401": 1,
      "1f402": 1,
      "1f403": 1,
      "1f404": 1,
      "1f405": 1,
      "1f406": 1,
      "1f407": 1,
      "1f408": 1,
      "1f409": 1,
      "1f40a": 1,
      "1f40b": 1,
      "1f40c": 1,
      "1f40d": 1,
      "1f40e": 1,
      "1f40f": 1,
      "1f410": 1,
      "1f411": 1,
      "1f412": 1,
      "1f413": 1,
      "1f414": 1,
      "1f415": 1,
      "1f416": 1,
      "1f417": 1,
      "1f418": 1,
      "1f419": 1,
      "1f41a": 1,
      "1f41b": 1,
      "1f41c": 1,
      "1f41d": 1,
      "1f41e": 1,
      "1f41f": 1,
      "1f420": 1,
      "1f421": 1,
      "1f422": 1,
      "1f423": 1,
      "1f424": 1,
      "1f425": 1,
      "1f426": 1,
      "1f427": 1,
      "1f428": 1,
      "1f429": 1,
      "1f42a": 1,
      "1f42b": 1,
      "1f42c": 1,
      "1f42d": 1,
      "1f42e": 1,
      "1f42f": 1,
      "1f430": 1,
      "1f431": 1,
      "1f432": 1,
      "1f433": 1,
      "1f434": 1,
      "1f435": 1,
      "1f436": 1,
      "1f437": 1,
      "1f438": 1,
      "1f439": 1,
      "1f43a": 1,
      "1f43b": 1,
      "1f43c": 1,
      "1f43d": 1,
      "1f43e": 1,
      "1f43f": 1,
      "1f440": 1,
      "1f441": 1,
      "1f441_200d_1f5e8": 1,
      "1f442": 1,
      "1f442_1f3fb": 1,
      "1f442_1f3fc": 1,
      "1f442_1f3fd": 1,
      "1f442_1f3fe": 1,
      "1f442_1f3ff": 1,
      "1f443": 1,
      "1f443_1f3fb": 1,
      "1f443_1f3fc": 1,
      "1f443_1f3fd": 1,
      "1f443_1f3fe": 1,
      "1f443_1f3ff": 1,
      "1f444": 1,
      "1f445": 1,
      "1f446": 1,
      "1f446_1f3fb": 1,
      "1f446_1f3fc": 1,
      "1f446_1f3fd": 1,
      "1f446_1f3fe": 1,
      "1f446_1f3ff": 1,
      "1f447": 1,
      "1f447_1f3fb": 1,
      "1f447_1f3fc": 1,
      "1f447_1f3fd": 1,
      "1f447_1f3fe": 1,
      "1f447_1f3ff": 1,
      "1f448": 1,
      "1f448_1f3fb": 1,
      "1f448_1f3fc": 1,
      "1f448_1f3fd": 1,
      "1f448_1f3fe": 1,
      "1f448_1f3ff": 1,
      "1f449": 1,
      "1f449_1f3fb": 1,
      "1f449_1f3fc": 1,
      "1f449_1f3fd": 1,
      "1f449_1f3fe": 1,
      "1f449_1f3ff": 1,
      "1f44a": 1,
      "1f44a_1f3fb": 1,
      "1f44a_1f3fc": 1,
      "1f44a_1f3fd": 1,
      "1f44a_1f3fe": 1,
      "1f44a_1f3ff": 1,
      "1f44b": 1,
      "1f44b_1f3fb": 1,
      "1f44b_1f3fc": 1,
      "1f44b_1f3fd": 1,
      "1f44b_1f3fe": 1,
      "1f44b_1f3ff": 1,
      "1f44c": 1,
      "1f44c_1f3fb": 1,
      "1f44c_1f3fc": 1,
      "1f44c_1f3fd": 1,
      "1f44c_1f3fe": 1,
      "1f44c_1f3ff": 1,
      "1f44d": 1,
      "1f44d_1f3fb": 1,
      "1f44d_1f3fc": 1,
      "1f44d_1f3fd": 1,
      "1f44d_1f3fe": 1,
      "1f44d_1f3ff": 1,
      "1f44e": 1,
      "1f44e_1f3fb": 1,
      "1f44e_1f3fc": 1,
      "1f44e_1f3fd": 1,
      "1f44e_1f3fe": 1,
      "1f44e_1f3ff": 1,
      "1f44f": 1,
      "1f44f_1f3fb": 1,
      "1f44f_1f3fc": 1,
      "1f44f_1f3fd": 1,
      "1f44f_1f3fe": 1,
      "1f44f_1f3ff": 1,
      "1f450": 1,
      "1f450_1f3fb": 1,
      "1f450_1f3fc": 1,
      "1f450_1f3fd": 1,
      "1f450_1f3fe": 1,
      "1f450_1f3ff": 1,
      "1f451": 1,
      "1f452": 1,
      "1f453": 1,
      "1f454": 1,
      "1f455": 1,
      "1f456": 1,
      "1f457": 1,
      "1f458": 1,
      "1f459": 1,
      "1f45a": 1,
      "1f45b": 1,
      "1f45c": 1,
      "1f45d": 1,
      "1f45e": 1,
      "1f45f": 1,
      "1f460": 1,
      "1f461": 1,
      "1f462": 1,
      "1f463": 1,
      "1f464": 1,
      "1f465": 1,
      "1f466": 1,
      "1f466_1f3fb": 1,
      "1f466_1f3fc": 1,
      "1f466_1f3fd": 1,
      "1f466_1f3fe": 1,
      "1f466_1f3ff": 1,
      "1f467": 1,
      "1f467_1f3fb": 1,
      "1f467_1f3fc": 1,
      "1f467_1f3fd": 1,
      "1f467_1f3fe": 1,
      "1f467_1f3ff": 1,
      "1f468": 1,
      "1f468_1f3fb": 1,
      "1f468_1f3fb_200d_1f33e": 1,
      "1f468_1f3fb_200d_1f373": 1,
      "1f468_1f3fb_200d_1f393": 1,
      "1f468_1f3fb_200d_1f3a4": 1,
      "1f468_1f3fb_200d_1f3a8": 1,
      "1f468_1f3fb_200d_1f3eb": 1,
      "1f468_1f3fb_200d_1f3ed": 1,
      "1f468_1f3fb_200d_1f466_1f3fb": 1,
      "1f468_1f3fb_200d_1f466_1f3fb_200d_1f466_1f3fb": 1,
      "1f468_1f3fb_200d_1f467_1f3fb": 1,
      "1f468_1f3fb_200d_1f467_1f3fb_200d_1f466_1f3fb": 1,
      "1f468_1f3fb_200d_1f467_1f3fb_200d_1f467_1f3fb": 1,
      "1f468_1f3fb_200d_1f468_1f3fb_200d_1f466_1f3fb": 1,
      "1f468_1f3fb_200d_1f468_1f3fb_200d_1f466_1f3fb_200d_1f466_1f3fb": 1,
      "1f468_1f3fb_200d_1f468_1f3fb_200d_1f467_1f3fb": 1,
      "1f468_1f3fb_200d_1f468_1f3fb_200d_1f467_1f3fb_200d_1f466_1f3fb": 1,
      "1f468_1f3fb_200d_1f468_1f3fb_200d_1f467_1f3fb_200d_1f467_1f3fb": 1,
      "1f468_1f3fb_200d_1f469_1f3fb_200d_1f466_1f3fb": 1,
      "1f468_1f3fb_200d_1f469_1f3fb_200d_1f466_1f3fb_200d_1f466_1f3fb": 1,
      "1f468_1f3fb_200d_1f469_1f3fb_200d_1f467_1f3fb": 1,
      "1f468_1f3fb_200d_1f469_1f3fb_200d_1f467_1f3fb_200d_1f466_1f3fb": 1,
      "1f468_1f3fb_200d_1f469_1f3fb_200d_1f467_1f3fb_200d_1f467_1f3fb": 1,
      "1f468_1f3fb_200d_1f4bb": 1,
      "1f468_1f3fb_200d_1f4bc": 1,
      "1f468_1f3fb_200d_1f527": 1,
      "1f468_1f3fb_200d_1f52c": 1,
      "1f468_1f3fb_200d_1f680": 1,
      "1f468_1f3fb_200d_1f692": 1,
      "1f468_1f3fb_200d_2695": 1,
      "1f468_1f3fb_200d_2696": 1,
      "1f468_1f3fb_200d_2708": 1,
      "1f468_1f3fc": 1,
      "1f468_1f3fc_200d_1f33e": 1,
      "1f468_1f3fc_200d_1f373": 1,
      "1f468_1f3fc_200d_1f393": 1,
      "1f468_1f3fc_200d_1f3a4": 1,
      "1f468_1f3fc_200d_1f3a8": 1,
      "1f468_1f3fc_200d_1f3eb": 1,
      "1f468_1f3fc_200d_1f3ed": 1,
      "1f468_1f3fc_200d_1f466_1f3fc": 1,
      "1f468_1f3fc_200d_1f466_1f3fc_200d_1f466_1f3fc": 1,
      "1f468_1f3fc_200d_1f467_1f3fc": 1,
      "1f468_1f3fc_200d_1f467_1f3fc_200d_1f466_1f3fc": 1,
      "1f468_1f3fc_200d_1f467_1f3fc_200d_1f467_1f3fc": 1,
      "1f468_1f3fc_200d_1f468_1f3fc_200d_1f466_1f3fc": 1,
      "1f468_1f3fc_200d_1f468_1f3fc_200d_1f466_1f3fc_200d_1f466_1f3fc": 1,
      "1f468_1f3fc_200d_1f468_1f3fc_200d_1f467_1f3fc": 1,
      "1f468_1f3fc_200d_1f468_1f3fc_200d_1f467_1f3fc_200d_1f466_1f3fc": 1,
      "1f468_1f3fc_200d_1f468_1f3fc_200d_1f467_1f3fc_200d_1f467_1f3fc": 1,
      "1f468_1f3fc_200d_1f469_1f3fc_200d_1f466_1f3fc": 1,
      "1f468_1f3fc_200d_1f469_1f3fc_200d_1f466_1f3fc_200d_1f466_1f3fc": 1,
      "1f468_1f3fc_200d_1f469_1f3fc_200d_1f467_1f3fc": 1,
      "1f468_1f3fc_200d_1f469_1f3fc_200d_1f467_1f3fc_200d_1f466_1f3fc": 1,
      "1f468_1f3fc_200d_1f469_1f3fc_200d_1f467_1f3fc_200d_1f467_1f3fc": 1,
      "1f468_1f3fc_200d_1f4bb": 1,
      "1f468_1f3fc_200d_1f4bc": 1,
      "1f468_1f3fc_200d_1f527": 1,
      "1f468_1f3fc_200d_1f52c": 1,
      "1f468_1f3fc_200d_1f680": 1,
      "1f468_1f3fc_200d_1f692": 1,
      "1f468_1f3fc_200d_2695": 1,
      "1f468_1f3fc_200d_2696": 1,
      "1f468_1f3fc_200d_2708": 1,
      "1f468_1f3fd": 1,
      "1f468_1f3fd_200d_1f33e": 1,
      "1f468_1f3fd_200d_1f373": 1,
      "1f468_1f3fd_200d_1f393": 1,
      "1f468_1f3fd_200d_1f3a4": 1,
      "1f468_1f3fd_200d_1f3a8": 1,
      "1f468_1f3fd_200d_1f3eb": 1,
      "1f468_1f3fd_200d_1f3ed": 1,
      "1f468_1f3fd_200d_1f466_1f3fd": 1,
      "1f468_1f3fd_200d_1f466_1f3fd_200d_1f466_1f3fd": 1,
      "1f468_1f3fd_200d_1f467_1f3fd": 1,
      "1f468_1f3fd_200d_1f467_1f3fd_200d_1f466_1f3fd": 1,
      "1f468_1f3fd_200d_1f467_1f3fd_200d_1f467_1f3fd": 1,
      "1f468_1f3fd_200d_1f468_1f3fd_200d_1f466_1f3fd": 1,
      "1f468_1f3fd_200d_1f468_1f3fd_200d_1f466_1f3fd_200d_1f466_1f3fd": 1,
      "1f468_1f3fd_200d_1f468_1f3fd_200d_1f467_1f3fd": 1,
      "1f468_1f3fd_200d_1f468_1f3fd_200d_1f467_1f3fd_200d_1f466_1f3fd": 1,
      "1f468_1f3fd_200d_1f468_1f3fd_200d_1f467_1f3fd_200d_1f467_1f3fd": 1,
      "1f468_1f3fd_200d_1f469_1f3fd_200d_1f466_1f3fd": 1,
      "1f468_1f3fd_200d_1f469_1f3fd_200d_1f466_1f3fd_200d_1f466_1f3fd": 1,
      "1f468_1f3fd_200d_1f469_1f3fd_200d_1f467_1f3fd": 1,
      "1f468_1f3fd_200d_1f469_1f3fd_200d_1f467_1f3fd_200d_1f466_1f3fd": 1,
      "1f468_1f3fd_200d_1f469_1f3fd_200d_1f467_1f3fd_200d_1f467_1f3fd": 1,
      "1f468_1f3fd_200d_1f4bb": 1,
      "1f468_1f3fd_200d_1f4bc": 1,
      "1f468_1f3fd_200d_1f527": 1,
      "1f468_1f3fd_200d_1f52c": 1,
      "1f468_1f3fd_200d_1f680": 1,
      "1f468_1f3fd_200d_1f692": 1,
      "1f468_1f3fd_200d_2695": 1,
      "1f468_1f3fd_200d_2696": 1,
      "1f468_1f3fd_200d_2708": 1,
      "1f468_1f3fe": 1,
      "1f468_1f3fe_200d_1f33e": 1,
      "1f468_1f3fe_200d_1f373": 1,
      "1f468_1f3fe_200d_1f393": 1,
      "1f468_1f3fe_200d_1f3a4": 1,
      "1f468_1f3fe_200d_1f3a8": 1,
      "1f468_1f3fe_200d_1f3eb": 1,
      "1f468_1f3fe_200d_1f3ed": 1,
      "1f468_1f3fe_200d_1f466_1f3fe": 1,
      "1f468_1f3fe_200d_1f466_1f3fe_200d_1f466_1f3fe": 1,
      "1f468_1f3fe_200d_1f467_1f3fe": 1,
      "1f468_1f3fe_200d_1f467_1f3fe_200d_1f466_1f3fe": 1,
      "1f468_1f3fe_200d_1f467_1f3fe_200d_1f467_1f3fe": 1,
      "1f468_1f3fe_200d_1f468_1f3fe_200d_1f466_1f3fe": 1,
      "1f468_1f3fe_200d_1f468_1f3fe_200d_1f466_1f3fe_200d_1f466_1f3fe": 1,
      "1f468_1f3fe_200d_1f468_1f3fe_200d_1f467_1f3fe": 1,
      "1f468_1f3fe_200d_1f468_1f3fe_200d_1f467_1f3fe_200d_1f466_1f3fe": 1,
      "1f468_1f3fe_200d_1f468_1f3fe_200d_1f467_1f3fe_200d_1f467_1f3fe": 1,
      "1f468_1f3fe_200d_1f469_1f3fe_200d_1f466_1f3fe": 1,
      "1f468_1f3fe_200d_1f469_1f3fe_200d_1f466_1f3fe_200d_1f466_1f3fe": 1,
      "1f468_1f3fe_200d_1f469_1f3fe_200d_1f467_1f3fe": 1,
      "1f468_1f3fe_200d_1f469_1f3fe_200d_1f467_1f3fe_200d_1f466_1f3fe": 1,
      "1f468_1f3fe_200d_1f469_1f3fe_200d_1f467_1f3fe_200d_1f467_1f3fe": 1,
      "1f468_1f3fe_200d_1f4bb": 1,
      "1f468_1f3fe_200d_1f4bc": 1,
      "1f468_1f3fe_200d_1f527": 1,
      "1f468_1f3fe_200d_1f52c": 1,
      "1f468_1f3fe_200d_1f680": 1,
      "1f468_1f3fe_200d_1f692": 1,
      "1f468_1f3fe_200d_2695": 1,
      "1f468_1f3fe_200d_2696": 1,
      "1f468_1f3fe_200d_2708": 1,
      "1f468_1f3ff": 1,
      "1f468_1f3ff_200d_1f33e": 1,
      "1f468_1f3ff_200d_1f373": 1,
      "1f468_1f3ff_200d_1f393": 1,
      "1f468_1f3ff_200d_1f3a4": 1,
      "1f468_1f3ff_200d_1f3a8": 1,
      "1f468_1f3ff_200d_1f3eb": 1,
      "1f468_1f3ff_200d_1f3ed": 1,
      "1f468_1f3ff_200d_1f466_1f3ff": 1,
      "1f468_1f3ff_200d_1f466_1f3ff_200d_1f466_1f3ff": 1,
      "1f468_1f3ff_200d_1f467_1f3ff": 1,
      "1f468_1f3ff_200d_1f467_1f3ff_200d_1f466_1f3ff": 1,
      "1f468_1f3ff_200d_1f467_1f3ff_200d_1f467_1f3ff": 1,
      "1f468_1f3ff_200d_1f468_1f3ff_200d_1f466_1f3ff": 1,
      "1f468_1f3ff_200d_1f468_1f3ff_200d_1f466_1f3ff_200d_1f466_1f3ff": 1,
      "1f468_1f3ff_200d_1f468_1f3ff_200d_1f467_1f3ff": 1,
      "1f468_1f3ff_200d_1f468_1f3ff_200d_1f467_1f3ff_200d_1f466_1f3ff": 1,
      "1f468_1f3ff_200d_1f468_1f3ff_200d_1f467_1f3ff_200d_1f467_1f3ff": 1,
      "1f468_1f3ff_200d_1f469_1f3ff_200d_1f466_1f3ff": 1,
      "1f468_1f3ff_200d_1f469_1f3ff_200d_1f466_1f3ff_200d_1f466_1f3ff": 1,
      "1f468_1f3ff_200d_1f469_1f3ff_200d_1f467_1f3ff": 1,
      "1f468_1f3ff_200d_1f469_1f3ff_200d_1f467_1f3ff_200d_1f466_1f3ff": 1,
      "1f468_1f3ff_200d_1f469_1f3ff_200d_1f467_1f3ff_200d_1f467_1f3ff": 1,
      "1f468_1f3ff_200d_1f4bb": 1,
      "1f468_1f3ff_200d_1f4bc": 1,
      "1f468_1f3ff_200d_1f527": 1,
      "1f468_1f3ff_200d_1f52c": 1,
      "1f468_1f3ff_200d_1f680": 1,
      "1f468_1f3ff_200d_1f692": 1,
      "1f468_1f3ff_200d_2695": 1,
      "1f468_1f3ff_200d_2696": 1,
      "1f468_1f3ff_200d_2708": 1,
      "1f468_200d_1f33e": 1,
      "1f468_200d_1f373": 1,
      "1f468_200d_1f393": 1,
      "1f468_200d_1f3a4": 1,
      "1f468_200d_1f3a8": 1,
      "1f468_200d_1f3eb": 1,
      "1f468_200d_1f3ed": 1,
      "1f468_200d_1f466": 1,
      "1f468_200d_1f466_200d_1f466": 1,
      "1f468_200d_1f467": 1,
      "1f468_200d_1f467_200d_1f466": 1,
      "1f468_200d_1f467_200d_1f467": 1,
      "1f468_200d_1f468_200d_1f466": 1,
      "1f468_200d_1f468_200d_1f466_200d_1f466": 1,
      "1f468_200d_1f468_200d_1f467": 1,
      "1f468_200d_1f468_200d_1f467_200d_1f466": 1,
      "1f468_200d_1f468_200d_1f467_200d_1f467": 1,
      "1f468_200d_1f469_200d_1f466": 1,
      "1f468_200d_1f469_200d_1f466_200d_1f466": 1,
      "1f468_200d_1f469_200d_1f467": 1,
      "1f468_200d_1f469_200d_1f467_200d_1f466": 1,
      "1f468_200d_1f469_200d_1f467_200d_1f467": 1,
      "1f468_200d_1f4bb": 1,
      "1f468_200d_1f4bc": 1,
      "1f468_200d_1f527": 1,
      "1f468_200d_1f52c": 1,
      "1f468_200d_1f680": 1,
      "1f468_200d_1f692": 1,
      "1f468_200d_2695": 1,
      "1f468_200d_2696": 1,
      "1f468_200d_2708": 1,
      "1f468_200d_2764_200d_1f468": 1,
      "1f468_200d_2764_200d_1f48b_200d_1f468": 1,
      "1f469": 1,
      "1f469_1f3fb": 1,
      "1f469_1f3fb_200d_1f33e": 1,
      "1f469_1f3fb_200d_1f373": 1,
      "1f469_1f3fb_200d_1f393": 1,
      "1f469_1f3fb_200d_1f3a4": 1,
      "1f469_1f3fb_200d_1f3a8": 1,
      "1f469_1f3fb_200d_1f3eb": 1,
      "1f469_1f3fb_200d_1f3ed": 1,
      "1f469_1f3fb_200d_1f466_1f3fb": 1,
      "1f469_1f3fb_200d_1f466_1f3fb_200d_1f466_1f3fb": 1,
      "1f469_1f3fb_200d_1f467_1f3fb": 1,
      "1f469_1f3fb_200d_1f467_1f3fb_200d_1f466_1f3fb": 1,
      "1f469_1f3fb_200d_1f467_1f3fb_200d_1f467_1f3fb": 1,
      "1f469_1f3fb_200d_1f469_1f3fb_200d_1f466_1f3fb": 1,
      "1f469_1f3fb_200d_1f469_1f3fb_200d_1f466_1f3fb_200d_1f466_1f3fb": 1,
      "1f469_1f3fb_200d_1f469_1f3fb_200d_1f467_1f3fb": 1,
      "1f469_1f3fb_200d_1f469_1f3fb_200d_1f467_1f3fb_200d_1f466_1f3fb": 1,
      "1f469_1f3fb_200d_1f469_1f3fb_200d_1f467_1f3fb_200d_1f467_1f3fb": 1,
      "1f469_1f3fb_200d_1f4bb": 1,
      "1f469_1f3fb_200d_1f4bc": 1,
      "1f469_1f3fb_200d_1f527": 1,
      "1f469_1f3fb_200d_1f52c": 1,
      "1f469_1f3fb_200d_1f680": 1,
      "1f469_1f3fb_200d_1f692": 1,
      "1f469_1f3fb_200d_2695": 1,
      "1f469_1f3fb_200d_2696": 1,
      "1f469_1f3fb_200d_2708": 1,
      "1f469_1f3fc": 1,
      "1f469_1f3fc_200d_1f33e": 1,
      "1f469_1f3fc_200d_1f373": 1,
      "1f469_1f3fc_200d_1f393": 1,
      "1f469_1f3fc_200d_1f3a4": 1,
      "1f469_1f3fc_200d_1f3a8": 1,
      "1f469_1f3fc_200d_1f3eb": 1,
      "1f469_1f3fc_200d_1f3ed": 1,
      "1f469_1f3fc_200d_1f466_1f3fc": 1,
      "1f469_1f3fc_200d_1f466_1f3fc_200d_1f466_1f3fc": 1,
      "1f469_1f3fc_200d_1f467_1f3fc": 1,
      "1f469_1f3fc_200d_1f467_1f3fc_200d_1f466_1f3fc": 1,
      "1f469_1f3fc_200d_1f467_1f3fc_200d_1f467_1f3fc": 1,
      "1f469_1f3fc_200d_1f469_1f3fc_200d_1f466_1f3fc": 1,
      "1f469_1f3fc_200d_1f469_1f3fc_200d_1f466_1f3fc_200d_1f466_1f3fc": 1,
      "1f469_1f3fc_200d_1f469_1f3fc_200d_1f467_1f3fc": 1,
      "1f469_1f3fc_200d_1f469_1f3fc_200d_1f467_1f3fc_200d_1f466_1f3fc": 1,
      "1f469_1f3fc_200d_1f469_1f3fc_200d_1f467_1f3fc_200d_1f467_1f3fc": 1,
      "1f469_1f3fc_200d_1f4bb": 1,
      "1f469_1f3fc_200d_1f4bc": 1,
      "1f469_1f3fc_200d_1f527": 1,
      "1f469_1f3fc_200d_1f52c": 1,
      "1f469_1f3fc_200d_1f680": 1,
      "1f469_1f3fc_200d_1f692": 1,
      "1f469_1f3fc_200d_2695": 1,
      "1f469_1f3fc_200d_2696": 1,
      "1f469_1f3fc_200d_2708": 1,
      "1f469_1f3fd": 1,
      "1f469_1f3fd_200d_1f33e": 1,
      "1f469_1f3fd_200d_1f373": 1,
      "1f469_1f3fd_200d_1f393": 1,
      "1f469_1f3fd_200d_1f3a4": 1,
      "1f469_1f3fd_200d_1f3a8": 1,
      "1f469_1f3fd_200d_1f3eb": 1,
      "1f469_1f3fd_200d_1f3ed": 1,
      "1f469_1f3fd_200d_1f466_1f3fd": 1,
      "1f469_1f3fd_200d_1f466_1f3fd_200d_1f466_1f3fd": 1,
      "1f469_1f3fd_200d_1f467_1f3fd": 1,
      "1f469_1f3fd_200d_1f467_1f3fd_200d_1f466_1f3fd": 1,
      "1f469_1f3fd_200d_1f467_1f3fd_200d_1f467_1f3fd": 1,
      "1f469_1f3fd_200d_1f469_1f3fd_200d_1f466_1f3fd": 1,
      "1f469_1f3fd_200d_1f469_1f3fd_200d_1f466_1f3fd_200d_1f466_1f3fd": 1,
      "1f469_1f3fd_200d_1f469_1f3fd_200d_1f467_1f3fd": 1,
      "1f469_1f3fd_200d_1f469_1f3fd_200d_1f467_1f3fd_200d_1f466_1f3fd": 1,
      "1f469_1f3fd_200d_1f469_1f3fd_200d_1f467_1f3fd_200d_1f467_1f3fd": 1,
      "1f469_1f3fd_200d_1f4bb": 1,
      "1f469_1f3fd_200d_1f4bc": 1,
      "1f469_1f3fd_200d_1f527": 1,
      "1f469_1f3fd_200d_1f52c": 1,
      "1f469_1f3fd_200d_1f680": 1,
      "1f469_1f3fd_200d_1f692": 1,
      "1f469_1f3fd_200d_2695": 1,
      "1f469_1f3fd_200d_2696": 1,
      "1f469_1f3fd_200d_2708": 1,
      "1f469_1f3fe": 1,
      "1f469_1f3fe_200d_1f33e": 1,
      "1f469_1f3fe_200d_1f373": 1,
      "1f469_1f3fe_200d_1f393": 1,
      "1f469_1f3fe_200d_1f3a4": 1,
      "1f469_1f3fe_200d_1f3a8": 1,
      "1f469_1f3fe_200d_1f3eb": 1,
      "1f469_1f3fe_200d_1f3ed": 1,
      "1f469_1f3fe_200d_1f466_1f3fe": 1,
      "1f469_1f3fe_200d_1f466_1f3fe_200d_1f466_1f3fe": 1,
      "1f469_1f3fe_200d_1f467_1f3fe": 1,
      "1f469_1f3fe_200d_1f467_1f3fe_200d_1f466_1f3fe": 1,
      "1f469_1f3fe_200d_1f467_1f3fe_200d_1f467_1f3fe": 1,
      "1f469_1f3fe_200d_1f469_1f3fe_200d_1f466_1f3fe": 1,
      "1f469_1f3fe_200d_1f469_1f3fe_200d_1f466_1f3fe_200d_1f466_1f3fe": 1,
      "1f469_1f3fe_200d_1f469_1f3fe_200d_1f467_1f3fe": 1,
      "1f469_1f3fe_200d_1f469_1f3fe_200d_1f467_1f3fe_200d_1f466_1f3fe": 1,
      "1f469_1f3fe_200d_1f469_1f3fe_200d_1f467_1f3fe_200d_1f467_1f3fe": 1,
      "1f469_1f3fe_200d_1f4bb": 1,
      "1f469_1f3fe_200d_1f4bc": 1,
      "1f469_1f3fe_200d_1f527": 1,
      "1f469_1f3fe_200d_1f52c": 1,
      "1f469_1f3fe_200d_1f680": 1,
      "1f469_1f3fe_200d_1f692": 1,
      "1f469_1f3fe_200d_2695": 1,
      "1f469_1f3fe_200d_2696": 1,
      "1f469_1f3fe_200d_2708": 1,
      "1f469_1f3ff": 1,
      "1f469_1f3ff_200d_1f33e": 1,
      "1f469_1f3ff_200d_1f373": 1,
      "1f469_1f3ff_200d_1f393": 1,
      "1f469_1f3ff_200d_1f3a4": 1,
      "1f469_1f3ff_200d_1f3a8": 1,
      "1f469_1f3ff_200d_1f3eb": 1,
      "1f469_1f3ff_200d_1f3ed": 1,
      "1f469_1f3ff_200d_1f466_1f3ff": 1,
      "1f469_1f3ff_200d_1f466_1f3ff_200d_1f466_1f3ff": 1,
      "1f469_1f3ff_200d_1f467_1f3ff": 1,
      "1f469_1f3ff_200d_1f467_1f3ff_200d_1f466_1f3ff": 1,
      "1f469_1f3ff_200d_1f467_1f3ff_200d_1f467_1f3ff": 1,
      "1f469_1f3ff_200d_1f469_1f3ff_200d_1f466_1f3ff": 1,
      "1f469_1f3ff_200d_1f469_1f3ff_200d_1f466_1f3ff_200d_1f466_1f3ff": 1,
      "1f469_1f3ff_200d_1f469_1f3ff_200d_1f467_1f3ff": 1,
      "1f469_1f3ff_200d_1f469_1f3ff_200d_1f467_1f3ff_200d_1f466_1f3ff": 1,
      "1f469_1f3ff_200d_1f469_1f3ff_200d_1f467_1f3ff_200d_1f467_1f3ff": 1,
      "1f469_1f3ff_200d_1f4bb": 1,
      "1f469_1f3ff_200d_1f4bc": 1,
      "1f469_1f3ff_200d_1f527": 1,
      "1f469_1f3ff_200d_1f52c": 1,
      "1f469_1f3ff_200d_1f680": 1,
      "1f469_1f3ff_200d_1f692": 1,
      "1f469_1f3ff_200d_2695": 1,
      "1f469_1f3ff_200d_2696": 1,
      "1f469_1f3ff_200d_2708": 1,
      "1f469_200d_1f33e": 1,
      "1f469_200d_1f373": 1,
      "1f469_200d_1f393": 1,
      "1f469_200d_1f3a4": 1,
      "1f469_200d_1f3a8": 1,
      "1f469_200d_1f3eb": 1,
      "1f469_200d_1f3ed": 1,
      "1f469_200d_1f466": 1,
      "1f469_200d_1f466_200d_1f466": 1,
      "1f469_200d_1f467": 1,
      "1f469_200d_1f467_200d_1f466": 1,
      "1f469_200d_1f467_200d_1f467": 1,
      "1f469_200d_1f469_200d_1f466": 1,
      "1f469_200d_1f469_200d_1f466_200d_1f466": 1,
      "1f469_200d_1f469_200d_1f467": 1,
      "1f469_200d_1f469_200d_1f467_200d_1f466": 1,
      "1f469_200d_1f469_200d_1f467_200d_1f467": 1,
      "1f469_200d_1f4bb": 1,
      "1f469_200d_1f4bc": 1,
      "1f469_200d_1f527": 1,
      "1f469_200d_1f52c": 1,
      "1f469_200d_1f680": 1,
      "1f469_200d_1f692": 1,
      "1f469_200d_2695": 1,
      "1f469_200d_2696": 1,
      "1f469_200d_2708": 1,
      "1f469_200d_2764_200d_1f468": 1,
      "1f469_200d_2764_200d_1f469": 1,
      "1f469_200d_2764_200d_1f48b_200d_1f468": 1,
      "1f469_200d_2764_200d_1f48b_200d_1f469": 1,
      "1f46a_1f3fb": 1,
      "1f46a_1f3fc": 1,
      "1f46a_1f3fd": 1,
      "1f46a_1f3fe": 1,
      "1f46a_1f3ff": 1,
      "1f46b": 1,
      "1f46b_1f3fb": 1,
      "1f46b_1f3fc": 1,
      "1f46b_1f3fd": 1,
      "1f46b_1f3fe": 1,
      "1f46b_1f3ff": 1,
      "1f46c": 1,
      "1f46c_1f3fb": 1,
      "1f46c_1f3fc": 1,
      "1f46c_1f3fd": 1,
      "1f46c_1f3fe": 1,
      "1f46c_1f3ff": 1,
      "1f46d": 1,
      "1f46d_1f3fb": 1,
      "1f46d_1f3fc": 1,
      "1f46d_1f3fd": 1,
      "1f46d_1f3fe": 1,
      "1f46d_1f3ff": 1,
      "1f46e_1f3fb_200d_2640": 1,
      "1f46e_1f3fb_200d_2642": 1,
      "1f46e_1f3fc_200d_2640": 1,
      "1f46e_1f3fc_200d_2642": 1,
      "1f46e_1f3fd_200d_2640": 1,
      "1f46e_1f3fd_200d_2642": 1,
      "1f46e_1f3fe_200d_2640": 1,
      "1f46e_1f3fe_200d_2642": 1,
      "1f46e_1f3ff_200d_2640": 1,
      "1f46e_1f3ff_200d_2642": 1,
      "1f46e_200d_2640": 1,
      "1f46e_200d_2642": 1,
      "1f46f_1f3fb_200d_2640": 1,
      "1f46f_1f3fb_200d_2642": 1,
      "1f46f_1f3fc_200d_2640": 1,
      "1f46f_1f3fc_200d_2642": 1,
      "1f46f_1f3fd_200d_2640": 1,
      "1f46f_1f3fd_200d_2642": 1,
      "1f46f_1f3fe_200d_2640": 1,
      "1f46f_1f3fe_200d_2642": 1,
      "1f46f_1f3ff_200d_2640": 1,
      "1f46f_1f3ff_200d_2642": 1,
      "1f46f_200d_2640": 1,
      "1f46f_200d_2642": 1,
      "1f470": 1,
      "1f470_1f3fb": 1,
      "1f470_1f3fc": 1,
      "1f470_1f3fd": 1,
      "1f470_1f3fe": 1,
      "1f470_1f3ff": 1,
      "1f471_1f3fb_200d_2640": 1,
      "1f471_1f3fb_200d_2642": 1,
      "1f471_1f3fc_200d_2640": 1,
      "1f471_1f3fc_200d_2642": 1,
      "1f471_1f3fd_200d_2640": 1,
      "1f471_1f3fd_200d_2642": 1,
      "1f471_1f3fe_200d_2640": 1,
      "1f471_1f3fe_200d_2642": 1,
      "1f471_1f3ff_200d_2640": 1,
      "1f471_1f3ff_200d_2642": 1,
      "1f471_200d_2640": 1,
      "1f471_200d_2642": 1,
      "1f472": 1,
      "1f472_1f3fb": 1,
      "1f472_1f3fc": 1,
      "1f472_1f3fd": 1,
      "1f472_1f3fe": 1,
      "1f472_1f3ff": 1,
      "1f473_1f3fb_200d_2640": 1,
      "1f473_1f3fb_200d_2642": 1,
      "1f473_1f3fc_200d_2640": 1,
      "1f473_1f3fc_200d_2642": 1,
      "1f473_1f3fd_200d_2640": 1,
      "1f473_1f3fd_200d_2642": 1,
      "1f473_1f3fe_200d_2640": 1,
      "1f473_1f3fe_200d_2642": 1,
      "1f473_1f3ff_200d_2640": 1,
      "1f473_1f3ff_200d_2642": 1,
      "1f473_200d_2640": 1,
      "1f473_200d_2642": 1,
      "1f474": 1,
      "1f474_1f3fb": 1,
      "1f474_1f3fc": 1,
      "1f474_1f3fd": 1,
      "1f474_1f3fe": 1,
      "1f474_1f3ff": 1,
      "1f475": 1,
      "1f475_1f3fb": 1,
      "1f475_1f3fc": 1,
      "1f475_1f3fd": 1,
      "1f475_1f3fe": 1,
      "1f475_1f3ff": 1,
      "1f476": 1,
      "1f476_1f3fb": 1,
      "1f476_1f3fc": 1,
      "1f476_1f3fd": 1,
      "1f476_1f3fe": 1,
      "1f476_1f3ff": 1,
      "1f477_1f3fb_200d_2640": 1,
      "1f477_1f3fb_200d_2642": 1,
      "1f477_1f3fc_200d_2640": 1,
      "1f477_1f3fc_200d_2642": 1,
      "1f477_1f3fd_200d_2640": 1,
      "1f477_1f3fd_200d_2642": 1,
      "1f477_1f3fe_200d_2640": 1,
      "1f477_1f3fe_200d_2642": 1,
      "1f477_1f3ff_200d_2640": 1,
      "1f477_1f3ff_200d_2642": 1,
      "1f477_200d_2640": 1,
      "1f477_200d_2642": 1,
      "1f478": 1,
      "1f478_1f3fb": 1,
      "1f478_1f3fc": 1,
      "1f478_1f3fd": 1,
      "1f478_1f3fe": 1,
      "1f478_1f3ff": 1,
      "1f479": 1,
      "1f47a": 1,
      "1f47b": 1,
      "1f47c": 1,
      "1f47c_1f3fb": 1,
      "1f47c_1f3fc": 1,
      "1f47c_1f3fd": 1,
      "1f47c_1f3fe": 1,
      "1f47c_1f3ff": 1,
      "1f47d": 1,
      "1f47e": 1,
      "1f47f": 1,
      "1f480": 1,
      "1f481_1f3fb_200d_2640": 1,
      "1f481_1f3fb_200d_2642": 1,
      "1f481_1f3fc_200d_2640": 1,
      "1f481_1f3fc_200d_2642": 1,
      "1f481_1f3fd_200d_2640": 1,
      "1f481_1f3fd_200d_2642": 1,
      "1f481_1f3fe_200d_2640": 1,
      "1f481_1f3fe_200d_2642": 1,
      "1f481_1f3ff_200d_2640": 1,
      "1f481_1f3ff_200d_2642": 1,
      "1f481_200d_2640": 1,
      "1f481_200d_2642": 1,
      "1f482_1f3fb_200d_2640": 1,
      "1f482_1f3fb_200d_2642": 1,
      "1f482_1f3fc_200d_2640": 1,
      "1f482_1f3fc_200d_2642": 1,
      "1f482_1f3fd_200d_2640": 1,
      "1f482_1f3fd_200d_2642": 1,
      "1f482_1f3fe_200d_2640": 1,
      "1f482_1f3fe_200d_2642": 1,
      "1f482_1f3ff_200d_2640": 1,
      "1f482_1f3ff_200d_2642": 1,
      "1f482_200d_2640": 1,
      "1f482_200d_2642": 1,
      "1f483": 1,
      "1f483_1f3fb": 1,
      "1f483_1f3fc": 1,
      "1f483_1f3fd": 1,
      "1f483_1f3fe": 1,
      "1f483_1f3ff": 1,
      "1f484": 1,
      "1f485": 1,
      "1f485_1f3fb": 1,
      "1f485_1f3fc": 1,
      "1f485_1f3fd": 1,
      "1f485_1f3fe": 1,
      "1f485_1f3ff": 1,
      "1f486_1f3fb_200d_2640": 1,
      "1f486_1f3fb_200d_2642": 1,
      "1f486_1f3fc_200d_2640": 1,
      "1f486_1f3fc_200d_2642": 1,
      "1f486_1f3fd_200d_2640": 1,
      "1f486_1f3fd_200d_2642": 1,
      "1f486_1f3fe_200d_2640": 1,
      "1f486_1f3fe_200d_2642": 1,
      "1f486_1f3ff_200d_2640": 1,
      "1f486_1f3ff_200d_2642": 1,
      "1f486_200d_2640": 1,
      "1f486_200d_2642": 1,
      "1f487_1f3fb_200d_2640": 1,
      "1f487_1f3fb_200d_2642": 1,
      "1f487_1f3fc_200d_2640": 1,
      "1f487_1f3fc_200d_2642": 1,
      "1f487_1f3fd_200d_2640": 1,
      "1f487_1f3fd_200d_2642": 1,
      "1f487_1f3fe_200d_2640": 1,
      "1f487_1f3fe_200d_2642": 1,
      "1f487_1f3ff_200d_2640": 1,
      "1f487_1f3ff_200d_2642": 1,
      "1f487_200d_2640": 1,
      "1f487_200d_2642": 1,
      "1f488": 1,
      "1f489": 1,
      "1f48a": 1,
      "1f48b": 1,
      "1f48c": 1,
      "1f48d": 1,
      "1f48e": 1,
      "1f490": 1,
      "1f492": 1,
      "1f493": 1,
      "1f494": 1,
      "1f495": 1,
      "1f496": 1,
      "1f497": 1,
      "1f498": 1,
      "1f499": 1,
      "1f49a": 1,
      "1f49b": 1,
      "1f49c": 1,
      "1f49d": 1,
      "1f49e": 1,
      "1f49f": 1,
      "1f4a0": 1,
      "1f4a1": 1,
      "1f4a2": 1,
      "1f4a3": 1,
      "1f4a4": 1,
      "1f4a5": 1,
      "1f4a6": 1,
      "1f4a7": 1,
      "1f4a8": 1,
      "1f4a9": 1,
      "1f4aa": 1,
      "1f4aa_1f3fb": 1,
      "1f4aa_1f3fc": 1,
      "1f4aa_1f3fd": 1,
      "1f4aa_1f3fe": 1,
      "1f4aa_1f3ff": 1,
      "1f4ab": 1,
      "1f4ac": 1,
      "1f4ad": 1,
      "1f4ae": 1,
      "1f4af": 1,
      "1f4b0": 1,
      "1f4b1": 1,
      "1f4b2": 1,
      "1f4b3": 1,
      "1f4b4": 1,
      "1f4b5": 1,
      "1f4b6": 1,
      "1f4b7": 1,
      "1f4b8": 1,
      "1f4b9": 1,
      "1f4ba": 1,
      "1f4bb": 1,
      "1f4bc": 1,
      "1f4bd": 1,
      "1f4be": 1,
      "1f4bf": 1,
      "1f4c0": 1,
      "1f4c1": 1,
      "1f4c2": 1,
      "1f4c3": 1,
      "1f4c4": 1,
      "1f4c5": 1,
      "1f4c6": 1,
      "1f4c7": 1,
      "1f4c8": 1,
      "1f4c9": 1,
      "1f4ca": 1,
      "1f4cb": 1,
      "1f4cc": 1,
      "1f4cd": 1,
      "1f4ce": 1,
      "1f4cf": 1,
      "1f4d0": 1,
      "1f4d1": 1,
      "1f4d2": 1,
      "1f4d3": 1,
      "1f4d4": 1,
      "1f4d5": 1,
      "1f4d6": 1,
      "1f4d7": 1,
      "1f4d8": 1,
      "1f4d9": 1,
      "1f4da": 1,
      "1f4db": 1,
      "1f4dc": 1,
      "1f4dd": 1,
      "1f4de": 1,
      "1f4df": 1,
      "1f4e0": 1,
      "1f4e1": 1,
      "1f4e2": 1,
      "1f4e3": 1,
      "1f4e4": 1,
      "1f4e5": 1,
      "1f4e6": 1,
      "1f4e7": 1,
      "1f4e8": 1,
      "1f4e9": 1,
      "1f4ea": 1,
      "1f4eb": 1,
      "1f4ec": 1,
      "1f4ed": 1,
      "1f4ee": 1,
      "1f4ef": 1,
      "1f4f0": 1,
      "1f4f1": 1,
      "1f4f2": 1,
      "1f4f3": 1,
      "1f4f4": 1,
      "1f4f5": 1,
      "1f4f6": 1,
      "1f4f7": 1,
      "1f4f8": 1,
      "1f4f9": 1,
      "1f4fa": 1,
      "1f4fb": 1,
      "1f4fc": 1,
      "1f4fd": 1,
      "1f4ff": 1,
      "1f500": 1,
      "1f501": 1,
      "1f502": 1,
      "1f503": 1,
      "1f504": 1,
      "1f505": 1,
      "1f506": 1,
      "1f507": 1,
      "1f508": 1,
      "1f509": 1,
      "1f50a": 1,
      "1f50b": 1,
      "1f50c": 1,
      "1f50d": 1,
      "1f50e": 1,
      "1f50f": 1,
      "1f510": 1,
      "1f511": 1,
      "1f512": 1,
      "1f513": 1,
      "1f514": 1,
      "1f515": 1,
      "1f516": 1,
      "1f517": 1,
      "1f518": 1,
      "1f519": 1,
      "1f51a": 1,
      "1f51b": 1,
      "1f51c": 1,
      "1f51d": 1,
      "1f51e": 1,
      "1f51f": 1,
      "1f520": 1,
      "1f521": 1,
      "1f522": 1,
      "1f523": 1,
      "1f524": 1,
      "1f525": 1,
      "1f526": 1,
      "1f527": 1,
      "1f528": 1,
      "1f529": 1,
      "1f52a": 1,
      "1f52b": 1,
      "1f52c": 1,
      "1f52d": 1,
      "1f52e": 1,
      "1f52f": 1,
      "1f530": 1,
      "1f531": 1,
      "1f532": 1,
      "1f533": 1,
      "1f534": 1,
      "1f535": 1,
      "1f536": 1,
      "1f537": 1,
      "1f538": 1,
      "1f539": 1,
      "1f53a": 1,
      "1f53b": 1,
      "1f53c": 1,
      "1f53d": 1,
      "1f549": 1,
      "1f54a": 1,
      "1f54b": 1,
      "1f54c": 1,
      "1f54d": 1,
      "1f54e": 1,
      "1f550": 1,
      "1f551": 1,
      "1f552": 1,
      "1f553": 1,
      "1f554": 1,
      "1f555": 1,
      "1f556": 1,
      "1f557": 1,
      "1f558": 1,
      "1f559": 1,
      "1f55a": 1,
      "1f55b": 1,
      "1f55c": 1,
      "1f55d": 1,
      "1f55e": 1,
      "1f55f": 1,
      "1f560": 1,
      "1f561": 1,
      "1f562": 1,
      "1f563": 1,
      "1f564": 1,
      "1f565": 1,
      "1f566": 1,
      "1f567": 1,
      "1f56f": 1,
      "1f570": 1,
      "1f573": 1,
      "1f574": 1,
      "1f574_1f3fb": 1,
      "1f574_1f3fb_200d_2640": 1,
      "1f574_1f3fc": 1,
      "1f574_1f3fc_200d_2640": 1,
      "1f574_1f3fd": 1,
      "1f574_1f3fd_200d_2640": 1,
      "1f574_1f3fe": 1,
      "1f574_1f3fe_200d_2640": 1,
      "1f574_1f3ff": 1,
      "1f574_1f3ff_200d_2640": 1,
      "1f574_200d_2640": 1,
      "1f575_1f3fb_200d_2640": 1,
      "1f575_1f3fb_200d_2642": 1,
      "1f575_1f3fc_200d_2640": 1,
      "1f575_1f3fc_200d_2642": 1,
      "1f575_1f3fd_200d_2640": 1,
      "1f575_1f3fd_200d_2642": 1,
      "1f575_1f3fe_200d_2640": 1,
      "1f575_1f3fe_200d_2642": 1,
      "1f575_1f3ff_200d_2640": 1,
      "1f575_1f3ff_200d_2642": 1,
      "1f575_200d_2640": 1,
      "1f575_200d_2642": 1,
      "1f576": 1,
      "1f577": 1,
      "1f578": 1,
      "1f579": 1,
      "1f57a": 1,
      "1f57a_1f3fb": 1,
      "1f57a_1f3fc": 1,
      "1f57a_1f3fd": 1,
      "1f57a_1f3fe": 1,
      "1f57a_1f3ff": 1,
      "1f587": 1,
      "1f58a": 1,
      "1f58b": 1,
      "1f58c": 1,
      "1f58d": 1,
      "1f590": 1,
      "1f590_1f3fb": 1,
      "1f590_1f3fc": 1,
      "1f590_1f3fd": 1,
      "1f590_1f3fe": 1,
      "1f590_1f3ff": 1,
      "1f595": 1,
      "1f595_1f3fb": 1,
      "1f595_1f3fc": 1,
      "1f595_1f3fd": 1,
      "1f595_1f3fe": 1,
      "1f595_1f3ff": 1,
      "1f596": 1,
      "1f596_1f3fb": 1,
      "1f596_1f3fc": 1,
      "1f596_1f3fd": 1,
      "1f596_1f3fe": 1,
      "1f596_1f3ff": 1,
      "1f5a4": 1,
      "1f5a5": 1,
      "1f5a8": 1,
      "1f5b1": 1,
      "1f5b2": 1,
      "1f5bc": 1,
      "1f5c2": 1,
      "1f5c3": 1,
      "1f5c4": 1,
      "1f5d1": 1,
      "1f5d2": 1,
      "1f5d3": 1,
      "1f5dc": 1,
      "1f5dd": 1,
      "1f5de": 1,
      "1f5e1": 1,
      "1f5e3": 1,
      "1f5e8": 1,
      "1f5ef": 1,
      "1f5f3": 1,
      "1f5fa": 1,
      "1f5fb": 1,
      "1f5fc": 1,
      "1f5fd": 1,
      "1f5fe": 1,
      "1f5ff": 1,
      "1f600": 1,
      "1f601": 1,
      "1f602": 1,
      "1f603": 1,
      "1f604": 1,
      "1f605": 1,
      "1f606": 1,
      "1f607": 1,
      "1f608": 1,
      "1f609": 1,
      "1f60a": 1,
      "1f60b": 1,
      "1f60c": 1,
      "1f60d": 1,
      "1f60e": 1,
      "1f60f": 1,
      "1f610": 1,
      "1f611": 1,
      "1f612": 1,
      "1f613": 1,
      "1f614": 1,
      "1f615": 1,
      "1f616": 1,
      "1f617": 1,
      "1f618": 1,
      "1f619": 1,
      "1f61a": 1,
      "1f61b": 1,
      "1f61c": 1,
      "1f61d": 1,
      "1f61e": 1,
      "1f61f": 1,
      "1f620": 1,
      "1f621": 1,
      "1f622": 1,
      "1f623": 1,
      "1f624": 1,
      "1f625": 1,
      "1f626": 1,
      "1f627": 1,
      "1f628": 1,
      "1f629": 1,
      "1f62a": 1,
      "1f62b": 1,
      "1f62c": 1,
      "1f62d": 1,
      "1f62e": 1,
      "1f62f": 1,
      "1f630": 1,
      "1f631": 1,
      "1f632": 1,
      "1f633": 1,
      "1f634": 1,
      "1f635": 1,
      "1f636": 1,
      "1f637": 1,
      "1f638": 1,
      "1f639": 1,
      "1f63a": 1,
      "1f63b": 1,
      "1f63c": 1,
      "1f63d": 1,
      "1f63e": 1,
      "1f63f": 1,
      "1f640": 1,
      "1f641": 1,
      "1f642": 1,
      "1f643": 1,
      "1f644": 1,
      "1f645_1f3fb_200d_2640": 1,
      "1f645_1f3fb_200d_2642": 1,
      "1f645_1f3fc_200d_2640": 1,
      "1f645_1f3fc_200d_2642": 1,
      "1f645_1f3fd_200d_2640": 1,
      "1f645_1f3fd_200d_2642": 1,
      "1f645_1f3fe_200d_2640": 1,
      "1f645_1f3fe_200d_2642": 1,
      "1f645_1f3ff_200d_2640": 1,
      "1f645_1f3ff_200d_2642": 1,
      "1f645_200d_2640": 1,
      "1f645_200d_2642": 1,
      "1f646_1f3fb_200d_2640": 1,
      "1f646_1f3fb_200d_2642": 1,
      "1f646_1f3fc_200d_2640": 1,
      "1f646_1f3fc_200d_2642": 1,
      "1f646_1f3fd_200d_2640": 1,
      "1f646_1f3fd_200d_2642": 1,
      "1f646_1f3fe_200d_2640": 1,
      "1f646_1f3fe_200d_2642": 1,
      "1f646_1f3ff_200d_2640": 1,
      "1f646_1f3ff_200d_2642": 1,
      "1f646_200d_2640": 1,
      "1f646_200d_2642": 1,
      "1f647_1f3fb_200d_2640": 1,
      "1f647_1f3fb_200d_2642": 1,
      "1f647_1f3fc_200d_2640": 1,
      "1f647_1f3fc_200d_2642": 1,
      "1f647_1f3fd_200d_2640": 1,
      "1f647_1f3fd_200d_2642": 1,
      "1f647_1f3fe_200d_2640": 1,
      "1f647_1f3fe_200d_2642": 1,
      "1f647_1f3ff_200d_2640": 1,
      "1f647_1f3ff_200d_2642": 1,
      "1f647_200d_2640": 1,
      "1f647_200d_2642": 1,
      "1f648": 1,
      "1f649": 1,
      "1f64a": 1,
      "1f64b_1f3fb_200d_2640": 1,
      "1f64b_1f3fb_200d_2642": 1,
      "1f64b_1f3fc_200d_2640": 1,
      "1f64b_1f3fc_200d_2642": 1,
      "1f64b_1f3fd_200d_2640": 1,
      "1f64b_1f3fd_200d_2642": 1,
      "1f64b_1f3fe_200d_2640": 1,
      "1f64b_1f3fe_200d_2642": 1,
      "1f64b_1f3ff_200d_2640": 1,
      "1f64b_1f3ff_200d_2642": 1,
      "1f64b_200d_2640": 1,
      "1f64b_200d_2642": 1,
      "1f64c": 1,
      "1f64c_1f3fb": 1,
      "1f64c_1f3fc": 1,
      "1f64c_1f3fd": 1,
      "1f64c_1f3fe": 1,
      "1f64c_1f3ff": 1,
      "1f64d_1f3fb_200d_2640": 1,
      "1f64d_1f3fb_200d_2642": 1,
      "1f64d_1f3fc_200d_2640": 1,
      "1f64d_1f3fc_200d_2642": 1,
      "1f64d_1f3fd_200d_2640": 1,
      "1f64d_1f3fd_200d_2642": 1,
      "1f64d_1f3fe_200d_2640": 1,
      "1f64d_1f3fe_200d_2642": 1,
      "1f64d_1f3ff_200d_2640": 1,
      "1f64d_1f3ff_200d_2642": 1,
      "1f64d_200d_2640": 1,
      "1f64d_200d_2642": 1,
      "1f64e_1f3fb_200d_2640": 1,
      "1f64e_1f3fb_200d_2642": 1,
      "1f64e_1f3fc_200d_2640": 1,
      "1f64e_1f3fc_200d_2642": 1,
      "1f64e_1f3fd_200d_2640": 1,
      "1f64e_1f3fd_200d_2642": 1,
      "1f64e_1f3fe_200d_2640": 1,
      "1f64e_1f3fe_200d_2642": 1,
      "1f64e_1f3ff_200d_2640": 1,
      "1f64e_1f3ff_200d_2642": 1,
      "1f64e_200d_2640": 1,
      "1f64e_200d_2642": 1,
      "1f64f": 1,
      "1f64f_1f3fb": 1,
      "1f64f_1f3fc": 1,
      "1f64f_1f3fd": 1,
      "1f64f_1f3fe": 1,
      "1f64f_1f3ff": 1,
      "1f680": 1,
      "1f681": 1,
      "1f682": 1,
      "1f683": 1,
      "1f684": 1,
      "1f685": 1,
      "1f686": 1,
      "1f687": 1,
      "1f688": 1,
      "1f689": 1,
      "1f68a": 1,
      "1f68b": 1,
      "1f68c": 1,
      "1f68d": 1,
      "1f68e": 1,
      "1f68f": 1,
      "1f690": 1,
      "1f691": 1,
      "1f692": 1,
      "1f693": 1,
      "1f694": 1,
      "1f695": 1,
      "1f696": 1,
      "1f697": 1,
      "1f698": 1,
      "1f699": 1,
      "1f69a": 1,
      "1f69b": 1,
      "1f69c": 1,
      "1f69d": 1,
      "1f69e": 1,
      "1f69f": 1,
      "1f6a0": 1,
      "1f6a1": 1,
      "1f6a2": 1,
      "1f6a3_1f3fb_200d_2640": 1,
      "1f6a3_1f3fb_200d_2642": 1,
      "1f6a3_1f3fc_200d_2640": 1,
      "1f6a3_1f3fc_200d_2642": 1,
      "1f6a3_1f3fd_200d_2640": 1,
      "1f6a3_1f3fd_200d_2642": 1,
      "1f6a3_1f3fe_200d_2640": 1,
      "1f6a3_1f3fe_200d_2642": 1,
      "1f6a3_1f3ff_200d_2640": 1,
      "1f6a3_1f3ff_200d_2642": 1,
      "1f6a3_200d_2640": 1,
      "1f6a3_200d_2642": 1,
      "1f6a4": 1,
      "1f6a5": 1,
      "1f6a6": 1,
      "1f6a7": 1,
      "1f6a8": 1,
      "1f6a9": 1,
      "1f6aa": 1,
      "1f6ab": 1,
      "1f6ac": 1,
      "1f6ad": 1,
      "1f6ae": 1,
      "1f6af": 1,
      "1f6b0": 1,
      "1f6b1": 1,
      "1f6b2": 1,
      "1f6b3": 1,
      "1f6b4_1f3fb_200d_2640": 1,
      "1f6b4_1f3fb_200d_2642": 1,
      "1f6b4_1f3fc_200d_2640": 1,
      "1f6b4_1f3fc_200d_2642": 1,
      "1f6b4_1f3fd_200d_2640": 1,
      "1f6b4_1f3fd_200d_2642": 1,
      "1f6b4_1f3fe_200d_2640": 1,
      "1f6b4_1f3fe_200d_2642": 1,
      "1f6b4_1f3ff_200d_2640": 1,
      "1f6b4_1f3ff_200d_2642": 1,
      "1f6b4_200d_2640": 1,
      "1f6b4_200d_2642": 1,
      "1f6b5_1f3fb_200d_2640": 1,
      "1f6b5_1f3fb_200d_2642": 1,
      "1f6b5_1f3fc_200d_2640": 1,
      "1f6b5_1f3fc_200d_2642": 1,
      "1f6b5_1f3fd_200d_2640": 1,
      "1f6b5_1f3fd_200d_2642": 1,
      "1f6b5_1f3fe_200d_2640": 1,
      "1f6b5_1f3fe_200d_2642": 1,
      "1f6b5_1f3ff_200d_2640": 1,
      "1f6b5_1f3ff_200d_2642": 1,
      "1f6b5_200d_2640": 1,
      "1f6b5_200d_2642": 1,
      "1f6b6_1f3fb_200d_2640": 1,
      "1f6b6_1f3fb_200d_2642": 1,
      "1f6b6_1f3fc_200d_2640": 1,
      "1f6b6_1f3fc_200d_2642": 1,
      "1f6b6_1f3fd_200d_2640": 1,
      "1f6b6_1f3fd_200d_2642": 1,
      "1f6b6_1f3fe_200d_2640": 1,
      "1f6b6_1f3fe_200d_2642": 1,
      "1f6b6_1f3ff_200d_2640": 1,
      "1f6b6_1f3ff_200d_2642": 1,
      "1f6b6_200d_2640": 1,
      "1f6b6_200d_2642": 1,
      "1f6b7": 1,
      "1f6b8": 1,
      "1f6b9": 1,
      "1f6ba": 1,
      "1f6bb": 1,
      "1f6bc": 1,
      "1f6bd": 1,
      "1f6be": 1,
      "1f6bf": 1,
      "1f6c0": 1,
      "1f6c0_1f3fb": 1,
      "1f6c0_1f3fc": 1,
      "1f6c0_1f3fd": 1,
      "1f6c0_1f3fe": 1,
      "1f6c0_1f3ff": 1,
      "1f6c1": 1,
      "1f6c2": 1,
      "1f6c3": 1,
      "1f6c4": 1,
      "1f6c5": 1,
      "1f6cb": 1,
      "1f6cc": 1,
      "1f6cc_1f3fb": 1,
      "1f6cc_1f3fc": 1,
      "1f6cc_1f3fd": 1,
      "1f6cc_1f3fe": 1,
      "1f6cc_1f3ff": 1,
      "1f6cd": 1,
      "1f6ce": 1,
      "1f6cf": 1,
      "1f6d0": 1,
      "1f6d1": 1,
      "1f6d2": 1,
      "1f6e0": 1,
      "1f6e1": 1,
      "1f6e2": 1,
      "1f6e3": 1,
      "1f6e4": 1,
      "1f6e5": 1,
      "1f6e9": 1,
      "1f6eb": 1,
      "1f6ec": 1,
      "1f6f0": 1,
      "1f6f3": 1,
      "1f6f4": 1,
      "1f6f5": 1,
      "1f6f6": 1,
      "1f6f7": 1,
      "1f6f8": 1,
      "1f910": 1,
      "1f911": 1,
      "1f912": 1,
      "1f913": 1,
      "1f914": 1,
      "1f915": 1,
      "1f916": 1,
      "1f917": 1,
      "1f918": 1,
      "1f918_1f3fb": 1,
      "1f918_1f3fc": 1,
      "1f918_1f3fd": 1,
      "1f918_1f3fe": 1,
      "1f918_1f3ff": 1,
      "1f919": 1,
      "1f919_1f3fb": 1,
      "1f919_1f3fc": 1,
      "1f919_1f3fd": 1,
      "1f919_1f3fe": 1,
      "1f919_1f3ff": 1,
      "1f91a": 1,
      "1f91a_1f3fb": 1,
      "1f91a_1f3fc": 1,
      "1f91a_1f3fd": 1,
      "1f91a_1f3fe": 1,
      "1f91a_1f3ff": 1,
      "1f91b": 1,
      "1f91b_1f3fb": 1,
      "1f91b_1f3fc": 1,
      "1f91b_1f3fd": 1,
      "1f91b_1f3fe": 1,
      "1f91b_1f3ff": 1,
      "1f91c": 1,
      "1f91c_1f3fb": 1,
      "1f91c_1f3fc": 1,
      "1f91c_1f3fd": 1,
      "1f91c_1f3fe": 1,
      "1f91c_1f3ff": 1,
      "1f91d": 1,
      "1f91d_1f3fb": 1,
      "1f91d_1f3fc": 1,
      "1f91d_1f3fd": 1,
      "1f91d_1f3fe": 1,
      "1f91d_1f3ff": 1,
      "1f91e": 1,
      "1f91e_1f3fb": 1,
      "1f91e_1f3fc": 1,
      "1f91e_1f3fd": 1,
      "1f91e_1f3fe": 1,
      "1f91e_1f3ff": 1,
      "1f91f": 1,
      "1f91f_1f3fb": 1,
      "1f91f_1f3fc": 1,
      "1f91f_1f3fd": 1,
      "1f91f_1f3fe": 1,
      "1f91f_1f3ff": 1,
      "1f920": 1,
      "1f921": 1,
      "1f922": 1,
      "1f923": 1,
      "1f924": 1,
      "1f925": 1,
      "1f926_1f3fb_200d_2640": 1,
      "1f926_1f3fb_200d_2642": 1,
      "1f926_1f3fc_200d_2640": 1,
      "1f926_1f3fc_200d_2642": 1,
      "1f926_1f3fd_200d_2640": 1,
      "1f926_1f3fd_200d_2642": 1,
      "1f926_1f3fe_200d_2640": 1,
      "1f926_1f3fe_200d_2642": 1,
      "1f926_1f3ff_200d_2640": 1,
      "1f926_1f3ff_200d_2642": 1,
      "1f926_200d_2640": 1,
      "1f926_200d_2642": 1,
      "1f927": 1,
      "1f928": 1,
      "1f929": 1,
      "1f92a": 1,
      "1f92b": 1,
      "1f92c": 1,
      "1f92d": 1,
      "1f92e": 1,
      "1f92f": 1,
      "1f930": 1,
      "1f930_1f3fb": 1,
      "1f930_1f3fc": 1,
      "1f930_1f3fd": 1,
      "1f930_1f3fe": 1,
      "1f930_1f3ff": 1,
      "1f931": 1,
      "1f931_1f3fb": 1,
      "1f931_1f3fc": 1,
      "1f931_1f3fd": 1,
      "1f931_1f3fe": 1,
      "1f931_1f3ff": 1,
      "1f932": 1,
      "1f932_1f3fb": 1,
      "1f932_1f3fc": 1,
      "1f932_1f3fd": 1,
      "1f932_1f3fe": 1,
      "1f932_1f3ff": 1,
      "1f933": 1,
      "1f933_1f3fb": 1,
      "1f933_1f3fc": 1,
      "1f933_1f3fd": 1,
      "1f933_1f3fe": 1,
      "1f933_1f3ff": 1,
      "1f934": 1,
      "1f934_1f3fb": 1,
      "1f934_1f3fc": 1,
      "1f934_1f3fd": 1,
      "1f934_1f3fe": 1,
      "1f934_1f3ff": 1,
      "1f935": 1,
      "1f935_1f3fb": 1,
      "1f935_1f3fc": 1,
      "1f935_1f3fd": 1,
      "1f935_1f3fe": 1,
      "1f935_1f3ff": 1,
      "1f936": 1,
      "1f936_1f3fb": 1,
      "1f936_1f3fc": 1,
      "1f936_1f3fd": 1,
      "1f936_1f3fe": 1,
      "1f936_1f3ff": 1,
      "1f937_1f3fb_200d_2640": 1,
      "1f937_1f3fb_200d_2642": 1,
      "1f937_1f3fc_200d_2640": 1,
      "1f937_1f3fc_200d_2642": 1,
      "1f937_1f3fd_200d_2640": 1,
      "1f937_1f3fd_200d_2642": 1,
      "1f937_1f3fe_200d_2640": 1,
      "1f937_1f3fe_200d_2642": 1,
      "1f937_1f3ff_200d_2640": 1,
      "1f937_1f3ff_200d_2642": 1,
      "1f937_200d_2640": 1,
      "1f937_200d_2642": 1,
      "1f938_1f3fb_200d_2640": 1,
      "1f938_1f3fb_200d_2642": 1,
      "1f938_1f3fc_200d_2640": 1,
      "1f938_1f3fc_200d_2642": 1,
      "1f938_1f3fd_200d_2640": 1,
      "1f938_1f3fd_200d_2642": 1,
      "1f938_1f3fe_200d_2640": 1,
      "1f938_1f3fe_200d_2642": 1,
      "1f938_1f3ff_200d_2640": 1,
      "1f938_1f3ff_200d_2642": 1,
      "1f938_200d_2640": 1,
      "1f938_200d_2642": 1,
      "1f939": 1,
      "1f939_1f3fb": 1,
      "1f939_1f3fc": 1,
      "1f939_1f3fd": 1,
      "1f939_1f3fe": 1,
      "1f939_1f3ff": 1,
      "1f93a": 1,
      "1f93c_1f3fb_200d_2640": 1,
      "1f93c_1f3fb_200d_2642": 1,
      "1f93c_1f3fc_200d_2640": 1,
      "1f93c_1f3fc_200d_2642": 1,
      "1f93c_1f3fd_200d_2640": 1,
      "1f93c_1f3fd_200d_2642": 1,
      "1f93c_1f3fe_200d_2640": 1,
      "1f93c_1f3fe_200d_2642": 1,
      "1f93c_1f3ff_200d_2640": 1,
      "1f93c_1f3ff_200d_2642": 1,
      "1f93c_200d_2640": 1,
      "1f93c_200d_2642": 1,
      "1f93d_1f3fb_200d_2640": 1,
      "1f93d_1f3fb_200d_2642": 1,
      "1f93d_1f3fc_200d_2640": 1,
      "1f93d_1f3fc_200d_2642": 1,
      "1f93d_1f3fd_200d_2640": 1,
      "1f93d_1f3fd_200d_2642": 1,
      "1f93d_1f3fe_200d_2640": 1,
      "1f93d_1f3fe_200d_2642": 1,
      "1f93d_1f3ff_200d_2640": 1,
      "1f93d_1f3ff_200d_2642": 1,
      "1f93d_200d_2640": 1,
      "1f93d_200d_2642": 1,
      "1f93e_1f3fb_200d_2640": 1,
      "1f93e_1f3fb_200d_2642": 1,
      "1f93e_1f3fc_200d_2640": 1,
      "1f93e_1f3fc_200d_2642": 1,
      "1f93e_1f3fd_200d_2640": 1,
      "1f93e_1f3fd_200d_2642": 1,
      "1f93e_1f3fe_200d_2640": 1,
      "1f93e_1f3fe_200d_2642": 1,
      "1f93e_1f3ff_200d_2640": 1,
      "1f93e_1f3ff_200d_2642": 1,
      "1f93e_200d_2640": 1,
      "1f93e_200d_2642": 1,
      "1f940": 1,
      "1f941": 1,
      "1f942": 1,
      "1f943": 1,
      "1f944": 1,
      "1f945": 1,
      "1f947": 1,
      "1f948": 1,
      "1f949": 1,
      "1f94a": 1,
      "1f94b": 1,
      "1f94c": 1,
      "1f950": 1,
      "1f951": 1,
      "1f952": 1,
      "1f953": 1,
      "1f954": 1,
      "1f955": 1,
      "1f956": 1,
      "1f957": 1,
      "1f958": 1,
      "1f959": 1,
      "1f95a": 1,
      "1f95b": 1,
      "1f95c": 1,
      "1f95d": 1,
      "1f95e": 1,
      "1f95f": 1,
      "1f960": 1,
      "1f961": 1,
      "1f962": 1,
      "1f963": 1,
      "1f964": 1,
      "1f965": 1,
      "1f966": 1,
      "1f967": 1,
      "1f968": 1,
      "1f969": 1,
      "1f96a": 1,
      "1f96b": 1,
      "1f980": 1,
      "1f981": 1,
      "1f982": 1,
      "1f983": 1,
      "1f984": 1,
      "1f985": 1,
      "1f986": 1,
      "1f987": 1,
      "1f988": 1,
      "1f989": 1,
      "1f98a": 1,
      "1f98b": 1,
      "1f98c": 1,
      "1f98d": 1,
      "1f98e": 1,
      "1f98f": 1,
      "1f990": 1,
      "1f991": 1,
      "1f992": 1,
      "1f993": 1,
      "1f994": 1,
      "1f995": 1,
      "1f996": 1,
      "1f997": 1,
      "1f9c0": 1,
      "1f9d0": 1,
      "1f9d1": 1,
      "1f9d1_1f3fb": 1,
      "1f9d1_1f3fc": 1,
      "1f9d1_1f3fd": 1,
      "1f9d1_1f3fe": 1,
      "1f9d1_1f3ff": 1,
      "1f9d2": 1,
      "1f9d2_1f3fb": 1,
      "1f9d2_1f3fc": 1,
      "1f9d2_1f3fd": 1,
      "1f9d2_1f3fe": 1,
      "1f9d2_1f3ff": 1,
      "1f9d3": 1,
      "1f9d3_1f3fb": 1,
      "1f9d3_1f3fc": 1,
      "1f9d3_1f3fd": 1,
      "1f9d3_1f3fe": 1,
      "1f9d3_1f3ff": 1,
      "1f9d4": 1,
      "1f9d4_1f3fb": 1,
      "1f9d4_1f3fc": 1,
      "1f9d4_1f3fd": 1,
      "1f9d4_1f3fe": 1,
      "1f9d4_1f3ff": 1,
      "1f9d5": 1,
      "1f9d5_1f3fb": 1,
      "1f9d5_1f3fc": 1,
      "1f9d5_1f3fd": 1,
      "1f9d5_1f3fe": 1,
      "1f9d5_1f3ff": 1,
      "1f9d6": 1,
      "1f9d6_1f3fb": 1,
      "1f9d6_1f3fb_200d_2640": 1,
      "1f9d6_1f3fb_200d_2642": 1,
      "1f9d6_1f3fc": 1,
      "1f9d6_1f3fc_200d_2640": 1,
      "1f9d6_1f3fc_200d_2642": 1,
      "1f9d6_1f3fd": 1,
      "1f9d6_1f3fd_200d_2640": 1,
      "1f9d6_1f3fd_200d_2642": 1,
      "1f9d6_1f3fe": 1,
      "1f9d6_1f3fe_200d_2640": 1,
      "1f9d6_1f3fe_200d_2642": 1,
      "1f9d6_1f3ff": 1,
      "1f9d6_1f3ff_200d_2640": 1,
      "1f9d6_1f3ff_200d_2642": 1,
      "1f9d6_200d_2640": 1,
      "1f9d6_200d_2642": 1,
      "1f9d7": 1,
      "1f9d7_1f3fb": 1,
      "1f9d7_1f3fb_200d_2640": 1,
      "1f9d7_1f3fb_200d_2642": 1,
      "1f9d7_1f3fc": 1,
      "1f9d7_1f3fc_200d_2640": 1,
      "1f9d7_1f3fc_200d_2642": 1,
      "1f9d7_1f3fd": 1,
      "1f9d7_1f3fd_200d_2640": 1,
      "1f9d7_1f3fd_200d_2642": 1,
      "1f9d7_1f3fe": 1,
      "1f9d7_1f3fe_200d_2640": 1,
      "1f9d7_1f3fe_200d_2642": 1,
      "1f9d7_1f3ff": 1,
      "1f9d7_1f3ff_200d_2640": 1,
      "1f9d7_1f3ff_200d_2642": 1,
      "1f9d7_200d_2640": 1,
      "1f9d7_200d_2642": 1,
      "1f9d8": 1,
      "1f9d8_1f3fb": 1,
      "1f9d8_1f3fb_200d_2640": 1,
      "1f9d8_1f3fb_200d_2642": 1,
      "1f9d8_1f3fc": 1,
      "1f9d8_1f3fc_200d_2640": 1,
      "1f9d8_1f3fc_200d_2642": 1,
      "1f9d8_1f3fd": 1,
      "1f9d8_1f3fd_200d_2640": 1,
      "1f9d8_1f3fd_200d_2642": 1,
      "1f9d8_1f3fe": 1,
      "1f9d8_1f3fe_200d_2640": 1,
      "1f9d8_1f3fe_200d_2642": 1,
      "1f9d8_1f3ff": 1,
      "1f9d8_1f3ff_200d_2640": 1,
      "1f9d8_1f3ff_200d_2642": 1,
      "1f9d8_200d_2640": 1,
      "1f9d8_200d_2642": 1,
      "1f9d9": 1,
      "1f9d9_1f3fb": 1,
      "1f9d9_1f3fb_200d_2640": 1,
      "1f9d9_1f3fb_200d_2642": 1,
      "1f9d9_1f3fc": 1,
      "1f9d9_1f3fc_200d_2640": 1,
      "1f9d9_1f3fc_200d_2642": 1,
      "1f9d9_1f3fd": 1,
      "1f9d9_1f3fd_200d_2640": 1,
      "1f9d9_1f3fd_200d_2642": 1,
      "1f9d9_1f3fe": 1,
      "1f9d9_1f3fe_200d_2640": 1,
      "1f9d9_1f3fe_200d_2642": 1,
      "1f9d9_1f3ff": 1,
      "1f9d9_1f3ff_200d_2640": 1,
      "1f9d9_1f3ff_200d_2642": 1,
      "1f9d9_200d_2640": 1,
      "1f9d9_200d_2642": 1,
      "1f9da": 1,
      "1f9da_200d_2640": 1,
      "1f9da_200d_2642": 1,
      "1f9db": 1,
      "1f9db_200d_2640": 1,
      "1f9db_200d_2642": 1,
      "1f9dc": 1,
      "1f9dc_1f3fb": 1,
      "1f9dc_1f3fb_200d_2640": 1,
      "1f9dc_1f3fb_200d_2642": 1,
      "1f9dc_1f3fc": 1,
      "1f9dc_1f3fc_200d_2640": 1,
      "1f9dc_1f3fc_200d_2642": 1,
      "1f9dc_1f3fd": 1,
      "1f9dc_1f3fd_200d_2640": 1,
      "1f9dc_1f3fd_200d_2642": 1,
      "1f9dc_1f3fe": 1,
      "1f9dc_1f3fe_200d_2640": 1,
      "1f9dc_1f3fe_200d_2642": 1,
      "1f9dc_1f3ff": 1,
      "1f9dc_1f3ff_200d_2640": 1,
      "1f9dc_1f3ff_200d_2642": 1,
      "1f9dc_200d_2640": 1,
      "1f9dc_200d_2642": 1,
      "1f9dd": 1,
      "1f9dd_1f3fb": 1,
      "1f9dd_1f3fb_200d_2640": 1,
      "1f9dd_1f3fb_200d_2642": 1,
      "1f9dd_1f3fc": 1,
      "1f9dd_1f3fc_200d_2640": 1,
      "1f9dd_1f3fc_200d_2642": 1,
      "1f9dd_1f3fd": 1,
      "1f9dd_1f3fd_200d_2640": 1,
      "1f9dd_1f3fd_200d_2642": 1,
      "1f9dd_1f3fe": 1,
      "1f9dd_1f3fe_200d_2640": 1,
      "1f9dd_1f3fe_200d_2642": 1,
      "1f9dd_1f3ff": 1,
      "1f9dd_1f3ff_200d_2640": 1,
      "1f9dd_1f3ff_200d_2642": 1,
      "1f9dd_200d_2640": 1,
      "1f9dd_200d_2642": 1,
      "1f9de": 1,
      "1f9de_200d_2640": 1,
      "1f9de_200d_2642": 1,
      "1f9df": 1,
      "1f9df_200d_2640": 1,
      "1f9df_200d_2642": 1,
      "1f9e0": 1,
      "1f9e1": 1,
      "1f9e2": 1,
      "1f9e3": 1,
      "1f9e4": 1,
      "1f9e5": 1,
      "1f9e6": 1,
      "203c": 1,
      2049: 1,
      2122: 1,
      2139: 1,
      2194: 1,
      2195: 1,
      2196: 1,
      2197: 1,
      2198: 1,
      2199: 1,
      "21a9": 1,
      "21aa": 1,
      "231a": 1,
      "231b": 1,
      2328: 1,
      "23_20e3": 1,
      "23cf": 1,
      "23e9": 1,
      "23ea": 1,
      "23eb": 1,
      "23ec": 1,
      "23ed": 1,
      "23ee": 1,
      "23ef": 1,
      "23f0": 1,
      "23f1": 1,
      "23f2": 1,
      "23f3": 1,
      "23f8": 1,
      "23f9": 1,
      "23fa": 1,
      "24c2": 1,
      "25aa": 1,
      "25ab": 1,
      "25b6": 1,
      "25c0": 1,
      "25fb": 1,
      "25fc": 1,
      "25fd": 1,
      "25fe": 1,
      2600: 1,
      2601: 1,
      2602: 1,
      2603: 1,
      2604: 1,
      "260e": 1,
      2611: 1,
      2614: 1,
      2615: 1,
      2618: 1,
      "261d": 1,
      "261d_1f3fb": 1,
      "261d_1f3fc": 1,
      "261d_1f3fd": 1,
      "261d_1f3fe": 1,
      "261d_1f3ff": 1,
      2620: 1,
      2622: 1,
      2623: 1,
      2626: 1,
      "262a": 1,
      "262e": 1,
      "262f": 1,
      2638: 1,
      2639: 1,
      "263a": 1,
      2640: 1,
      2642: 1,
      2648: 1,
      2649: 1,
      "264a": 1,
      "264b": 1,
      "264c": 1,
      "264d": 1,
      "264e": 1,
      "264f": 1,
      2650: 1,
      2651: 1,
      2652: 1,
      2653: 1,
      2660: 1,
      2663: 1,
      2665: 1,
      2666: 1,
      2668: 1,
      "267b": 1,
      "267f": 1,
      2692: 1,
      2693: 1,
      2694: 1,
      2695: 1,
      2696: 1,
      2697: 1,
      2699: 1,
      "269b": 1,
      "269c": 1,
      "26a0": 1,
      "26a1": 1,
      "26aa": 1,
      "26ab": 1,
      "26b0": 1,
      "26b1": 1,
      "26bd": 1,
      "26be": 1,
      "26c4": 1,
      "26c5": 1,
      "26c8": 1,
      "26ce": 1,
      "26cf": 1,
      "26d1": 1,
      "26d3": 1,
      "26d4": 1,
      "26e9": 1,
      "26ea": 1,
      "26f0": 1,
      "26f1": 1,
      "26f2": 1,
      "26f3": 1,
      "26f4": 1,
      "26f5": 1,
      "26f7": 1,
      "26f8": 1,
      "26f9_1f3fb_200d_2640": 1,
      "26f9_1f3fb_200d_2642": 1,
      "26f9_1f3fc_200d_2640": 1,
      "26f9_1f3fc_200d_2642": 1,
      "26f9_1f3fd_200d_2640": 1,
      "26f9_1f3fd_200d_2642": 1,
      "26f9_1f3fe_200d_2640": 1,
      "26f9_1f3fe_200d_2642": 1,
      "26f9_1f3ff_200d_2640": 1,
      "26f9_1f3ff_200d_2642": 1,
      "26f9_200d_2640": 1,
      "26f9_200d_2642": 1,
      "26fa": 1,
      "26fd": 1,
      2702: 1,
      2705: 1,
      2708: 1,
      2709: 1,
      "270a": 1,
      "270a_1f3fb": 1,
      "270a_1f3fc": 1,
      "270a_1f3fd": 1,
      "270a_1f3fe": 1,
      "270a_1f3ff": 1,
      "270b": 1,
      "270b_1f3fb": 1,
      "270b_1f3fc": 1,
      "270b_1f3fd": 1,
      "270b_1f3fe": 1,
      "270b_1f3ff": 1,
      "270c": 1,
      "270c_1f3fb": 1,
      "270c_1f3fc": 1,
      "270c_1f3fd": 1,
      "270c_1f3fe": 1,
      "270c_1f3ff": 1,
      "270d": 1,
      "270d_1f3fb": 1,
      "270d_1f3fc": 1,
      "270d_1f3fd": 1,
      "270d_1f3fe": 1,
      "270d_1f3ff": 1,
      "270f": 1,
      2712: 1,
      2714: 1,
      2716: 1,
      "271d": 1,
      2721: 1,
      2728: 1,
      2733: 1,
      2734: 1,
      2744: 1,
      2747: 1,
      "274c": 1,
      "274e": 1,
      2753: 1,
      2754: 1,
      2755: 1,
      2757: 1,
      2763: 1,
      2764: 1,
      2795: 1,
      2796: 1,
      2797: 1,
      "27a1": 1,
      "27b0": 1,
      "27bf": 1,
      2934: 1,
      2935: 1,
      "2a_20e3": 1,
      "2b05": 1,
      "2b06": 1,
      "2b07": 1,
      "2b1b": 1,
      "2b1c": 1,
      "2b50": 1,
      "2b55": 1,
      3030: 1,
      "303d": 1,
      "30_20e3": 1,
      "31_20e3": 1,
      3297: 1,
      3299: 1,
      "32_20e3": 1,
      "33_20e3": 1,
      "34_20e3": 1,
      "35_20e3": 1,
      "36_20e3": 1,
      "37_20e3": 1,
      "38_20e3": 1,
      "39_20e3": 1,
      a9: 1,
      ae: 1,
    };
    e.exports = a;
  },
  null
);
__d(
  "SupportedEmoji3",
  ["SupportedCommonEmoji"],
  function (a, b, c, d, e, f) {
    a = babelHelpers["extends"]({}, b("SupportedCommonEmoji"), {
      "1f3c3": 1,
      "1f3c3_1f3fb": 1,
      "1f3c3_1f3fc": 1,
      "1f3c3_1f3fd": 1,
      "1f3c3_1f3fe": 1,
      "1f3c3_1f3ff": 1,
      "1f3c4": 1,
      "1f3c4_1f3fb": 1,
      "1f3c4_1f3fc": 1,
      "1f3c4_1f3fd": 1,
      "1f3c4_1f3fe": 1,
      "1f3c4_1f3ff": 1,
      "1f3ca": 1,
      "1f3ca_1f3fb": 1,
      "1f3ca_1f3fc": 1,
      "1f3ca_1f3fd": 1,
      "1f3ca_1f3fe": 1,
      "1f3ca_1f3ff": 1,
      "1f3cb": 1,
      "1f3cb_1f3fb": 1,
      "1f3cb_1f3fc": 1,
      "1f3cb_1f3fd": 1,
      "1f3cb_1f3fe": 1,
      "1f3cb_1f3ff": 1,
      "1f3cc": 1,
      "1f3cc_1f3fb": 1,
      "1f3cc_1f3fc": 1,
      "1f3cc_1f3fd": 1,
      "1f3cc_1f3fe": 1,
      "1f3cc_1f3ff": 1,
      "1f3f3_200d_26a7": 1,
      "1f3f4_200d_2620": 1,
      "1f408_200d_2b1b": 1,
      "1f415_200d_1f9ba": 1,
      "1f43b_200d_2744": 1,
      "1f468_1f3fb_200d_1f37c": 1,
      "1f468_1f3fb_200d_1f91d_200d_1f468_1f3fc": 1,
      "1f468_1f3fb_200d_1f91d_200d_1f468_1f3fd": 1,
      "1f468_1f3fb_200d_1f91d_200d_1f468_1f3fe": 1,
      "1f468_1f3fb_200d_1f91d_200d_1f468_1f3ff": 1,
      "1f468_1f3fb_200d_1f9af": 1,
      "1f468_1f3fb_200d_1f9b0": 1,
      "1f468_1f3fb_200d_1f9b1": 1,
      "1f468_1f3fb_200d_1f9b2": 1,
      "1f468_1f3fb_200d_1f9b3": 1,
      "1f468_1f3fb_200d_1f9bc": 1,
      "1f468_1f3fb_200d_1f9bd": 1,
      "1f468_1f3fb_200d_2764_200d_1f3fb_1f468": 1,
      "1f468_1f3fb_200d_2764_200d_1f468_1f3fb": 1,
      "1f468_1f3fb_200d_2764_200d_1f468_1f3fc": 1,
      "1f468_1f3fb_200d_2764_200d_1f468_1f3fd": 1,
      "1f468_1f3fb_200d_2764_200d_1f468_1f3fe": 1,
      "1f468_1f3fb_200d_2764_200d_1f468_1f3ff": 1,
      "1f468_1f3fb_200d_2764_200d_1f48b_200d_1f3fb_1f468": 1,
      "1f468_1f3fb_200d_2764_200d_1f48b_200d_1f468_1f3fb": 1,
      "1f468_1f3fb_200d_2764_200d_1f48b_200d_1f468_1f3fc": 1,
      "1f468_1f3fb_200d_2764_200d_1f48b_200d_1f468_1f3fd": 1,
      "1f468_1f3fb_200d_2764_200d_1f48b_200d_1f468_1f3fe": 1,
      "1f468_1f3fb_200d_2764_200d_1f48b_200d_1f468_1f3ff": 1,
      "1f468_1f3fc_200d_1f37c": 1,
      "1f468_1f3fc_200d_1f91d_200d_1f468_1f3fb": 1,
      "1f468_1f3fc_200d_1f91d_200d_1f468_1f3fd": 1,
      "1f468_1f3fc_200d_1f91d_200d_1f468_1f3fe": 1,
      "1f468_1f3fc_200d_1f91d_200d_1f468_1f3ff": 1,
      "1f468_1f3fc_200d_1f9af": 1,
      "1f468_1f3fc_200d_1f9b0": 1,
      "1f468_1f3fc_200d_1f9b1": 1,
      "1f468_1f3fc_200d_1f9b2": 1,
      "1f468_1f3fc_200d_1f9b3": 1,
      "1f468_1f3fc_200d_1f9bc": 1,
      "1f468_1f3fc_200d_1f9bd": 1,
      "1f468_1f3fc_200d_2764_200d_1f3fc_1f468": 1,
      "1f468_1f3fc_200d_2764_200d_1f468_1f3fb": 1,
      "1f468_1f3fc_200d_2764_200d_1f468_1f3fc": 1,
      "1f468_1f3fc_200d_2764_200d_1f468_1f3fd": 1,
      "1f468_1f3fc_200d_2764_200d_1f468_1f3fe": 1,
      "1f468_1f3fc_200d_2764_200d_1f468_1f3ff": 1,
      "1f468_1f3fc_200d_2764_200d_1f48b_200d_1f3fc_1f468": 1,
      "1f468_1f3fc_200d_2764_200d_1f48b_200d_1f468_1f3fb": 1,
      "1f468_1f3fc_200d_2764_200d_1f48b_200d_1f468_1f3fc": 1,
      "1f468_1f3fc_200d_2764_200d_1f48b_200d_1f468_1f3fd": 1,
      "1f468_1f3fc_200d_2764_200d_1f48b_200d_1f468_1f3fe": 1,
      "1f468_1f3fc_200d_2764_200d_1f48b_200d_1f468_1f3ff": 1,
      "1f468_1f3fd_200d_1f37c": 1,
      "1f468_1f3fd_200d_1f91d_200d_1f468_1f3fb": 1,
      "1f468_1f3fd_200d_1f91d_200d_1f468_1f3fc": 1,
      "1f468_1f3fd_200d_1f91d_200d_1f468_1f3fe": 1,
      "1f468_1f3fd_200d_1f91d_200d_1f468_1f3ff": 1,
      "1f468_1f3fd_200d_1f9af": 1,
      "1f468_1f3fd_200d_1f9b0": 1,
      "1f468_1f3fd_200d_1f9b1": 1,
      "1f468_1f3fd_200d_1f9b2": 1,
      "1f468_1f3fd_200d_1f9b3": 1,
      "1f468_1f3fd_200d_1f9bc": 1,
      "1f468_1f3fd_200d_1f9bd": 1,
      "1f468_1f3fd_200d_2764_200d_1f3fd_1f468": 1,
      "1f468_1f3fd_200d_2764_200d_1f468_1f3fb": 1,
      "1f468_1f3fd_200d_2764_200d_1f468_1f3fc": 1,
      "1f468_1f3fd_200d_2764_200d_1f468_1f3fd": 1,
      "1f468_1f3fd_200d_2764_200d_1f468_1f3fe": 1,
      "1f468_1f3fd_200d_2764_200d_1f468_1f3ff": 1,
      "1f468_1f3fd_200d_2764_200d_1f48b_200d_1f3fd_1f468": 1,
      "1f468_1f3fd_200d_2764_200d_1f48b_200d_1f468_1f3fb": 1,
      "1f468_1f3fd_200d_2764_200d_1f48b_200d_1f468_1f3fc": 1,
      "1f468_1f3fd_200d_2764_200d_1f48b_200d_1f468_1f3fd": 1,
      "1f468_1f3fd_200d_2764_200d_1f48b_200d_1f468_1f3fe": 1,
      "1f468_1f3fd_200d_2764_200d_1f48b_200d_1f468_1f3ff": 1,
      "1f468_1f3fe_200d_1f37c": 1,
      "1f468_1f3fe_200d_1f91d_200d_1f468_1f3fb": 1,
      "1f468_1f3fe_200d_1f91d_200d_1f468_1f3fc": 1,
      "1f468_1f3fe_200d_1f91d_200d_1f468_1f3fd": 1,
      "1f468_1f3fe_200d_1f91d_200d_1f468_1f3ff": 1,
      "1f468_1f3fe_200d_1f9af": 1,
      "1f468_1f3fe_200d_1f9b0": 1,
      "1f468_1f3fe_200d_1f9b1": 1,
      "1f468_1f3fe_200d_1f9b2": 1,
      "1f468_1f3fe_200d_1f9b3": 1,
      "1f468_1f3fe_200d_1f9bc": 1,
      "1f468_1f3fe_200d_1f9bd": 1,
      "1f468_1f3fe_200d_2764_200d_1f3fe_1f468": 1,
      "1f468_1f3fe_200d_2764_200d_1f468_1f3fb": 1,
      "1f468_1f3fe_200d_2764_200d_1f468_1f3fc": 1,
      "1f468_1f3fe_200d_2764_200d_1f468_1f3fd": 1,
      "1f468_1f3fe_200d_2764_200d_1f468_1f3fe": 1,
      "1f468_1f3fe_200d_2764_200d_1f468_1f3ff": 1,
      "1f468_1f3fe_200d_2764_200d_1f48b_200d_1f3fe_1f468": 1,
      "1f468_1f3fe_200d_2764_200d_1f48b_200d_1f468_1f3fb": 1,
      "1f468_1f3fe_200d_2764_200d_1f48b_200d_1f468_1f3fc": 1,
      "1f468_1f3fe_200d_2764_200d_1f48b_200d_1f468_1f3fd": 1,
      "1f468_1f3fe_200d_2764_200d_1f48b_200d_1f468_1f3fe": 1,
      "1f468_1f3fe_200d_2764_200d_1f48b_200d_1f468_1f3ff": 1,
      "1f468_1f3ff_200d_1f37c": 1,
      "1f468_1f3ff_200d_1f91d_200d_1f468_1f3fb": 1,
      "1f468_1f3ff_200d_1f91d_200d_1f468_1f3fc": 1,
      "1f468_1f3ff_200d_1f91d_200d_1f468_1f3fd": 1,
      "1f468_1f3ff_200d_1f91d_200d_1f468_1f3fe": 1,
      "1f468_1f3ff_200d_1f9af": 1,
      "1f468_1f3ff_200d_1f9b0": 1,
      "1f468_1f3ff_200d_1f9b1": 1,
      "1f468_1f3ff_200d_1f9b2": 1,
      "1f468_1f3ff_200d_1f9b3": 1,
      "1f468_1f3ff_200d_1f9bc": 1,
      "1f468_1f3ff_200d_1f9bd": 1,
      "1f468_1f3ff_200d_2764_200d_1f3ff_1f468": 1,
      "1f468_1f3ff_200d_2764_200d_1f468_1f3fb": 1,
      "1f468_1f3ff_200d_2764_200d_1f468_1f3fc": 1,
      "1f468_1f3ff_200d_2764_200d_1f468_1f3fd": 1,
      "1f468_1f3ff_200d_2764_200d_1f468_1f3fe": 1,
      "1f468_1f3ff_200d_2764_200d_1f468_1f3ff": 1,
      "1f468_1f3ff_200d_2764_200d_1f48b_200d_1f3ff_1f468": 1,
      "1f468_1f3ff_200d_2764_200d_1f48b_200d_1f468_1f3fb": 1,
      "1f468_1f3ff_200d_2764_200d_1f48b_200d_1f468_1f3fc": 1,
      "1f468_1f3ff_200d_2764_200d_1f48b_200d_1f468_1f3fd": 1,
      "1f468_1f3ff_200d_2764_200d_1f48b_200d_1f468_1f3fe": 1,
      "1f468_1f3ff_200d_2764_200d_1f48b_200d_1f468_1f3ff": 1,
      "1f468_200d_1f37c": 1,
      "1f468_200d_1f9af": 1,
      "1f468_200d_1f9b0": 1,
      "1f468_200d_1f9b1": 1,
      "1f468_200d_1f9b2": 1,
      "1f468_200d_1f9b3": 1,
      "1f468_200d_1f9bc": 1,
      "1f468_200d_1f9bd": 1,
      "1f469_1f3fb_200d_1f37c": 1,
      "1f469_1f3fb_200d_1f91d_200d_1f468_1f3fc": 1,
      "1f469_1f3fb_200d_1f91d_200d_1f468_1f3fd": 1,
      "1f469_1f3fb_200d_1f91d_200d_1f468_1f3fe": 1,
      "1f469_1f3fb_200d_1f91d_200d_1f468_1f3ff": 1,
      "1f469_1f3fb_200d_1f91d_200d_1f469_1f3fc": 1,
      "1f469_1f3fb_200d_1f91d_200d_1f469_1f3fd": 1,
      "1f469_1f3fb_200d_1f91d_200d_1f469_1f3fe": 1,
      "1f469_1f3fb_200d_1f91d_200d_1f469_1f3ff": 1,
      "1f469_1f3fb_200d_1f9af": 1,
      "1f469_1f3fb_200d_1f9b0": 1,
      "1f469_1f3fb_200d_1f9b1": 1,
      "1f469_1f3fb_200d_1f9b2": 1,
      "1f469_1f3fb_200d_1f9b3": 1,
      "1f469_1f3fb_200d_1f9bc": 1,
      "1f469_1f3fb_200d_1f9bd": 1,
      "1f469_1f3fb_200d_2764_200d_1f3fb_1f468": 1,
      "1f469_1f3fb_200d_2764_200d_1f3fb_1f469": 1,
      "1f469_1f3fb_200d_2764_200d_1f468_1f3fb": 1,
      "1f469_1f3fb_200d_2764_200d_1f468_1f3fc": 1,
      "1f469_1f3fb_200d_2764_200d_1f468_1f3fd": 1,
      "1f469_1f3fb_200d_2764_200d_1f468_1f3fe": 1,
      "1f469_1f3fb_200d_2764_200d_1f468_1f3ff": 1,
      "1f469_1f3fb_200d_2764_200d_1f469_1f3fb": 1,
      "1f469_1f3fb_200d_2764_200d_1f469_1f3fc": 1,
      "1f469_1f3fb_200d_2764_200d_1f469_1f3fd": 1,
      "1f469_1f3fb_200d_2764_200d_1f469_1f3fe": 1,
      "1f469_1f3fb_200d_2764_200d_1f469_1f3ff": 1,
      "1f469_1f3fb_200d_2764_200d_1f48b_200d_1f3fb_1f468": 1,
      "1f469_1f3fb_200d_2764_200d_1f48b_200d_1f3fb_1f469": 1,
      "1f469_1f3fb_200d_2764_200d_1f48b_200d_1f468_1f3fb": 1,
      "1f469_1f3fb_200d_2764_200d_1f48b_200d_1f468_1f3fc": 1,
      "1f469_1f3fb_200d_2764_200d_1f48b_200d_1f468_1f3fd": 1,
      "1f469_1f3fb_200d_2764_200d_1f48b_200d_1f468_1f3fe": 1,
      "1f469_1f3fb_200d_2764_200d_1f48b_200d_1f468_1f3ff": 1,
      "1f469_1f3fb_200d_2764_200d_1f48b_200d_1f469_1f3fb": 1,
      "1f469_1f3fb_200d_2764_200d_1f48b_200d_1f469_1f3fc": 1,
      "1f469_1f3fb_200d_2764_200d_1f48b_200d_1f469_1f3fd": 1,
      "1f469_1f3fb_200d_2764_200d_1f48b_200d_1f469_1f3fe": 1,
      "1f469_1f3fb_200d_2764_200d_1f48b_200d_1f469_1f3ff": 1,
      "1f469_1f3fc_200d_1f37c": 1,
      "1f469_1f3fc_200d_1f91d_200d_1f468_1f3fb": 1,
      "1f469_1f3fc_200d_1f91d_200d_1f468_1f3fd": 1,
      "1f469_1f3fc_200d_1f91d_200d_1f468_1f3fe": 1,
      "1f469_1f3fc_200d_1f91d_200d_1f468_1f3ff": 1,
      "1f469_1f3fc_200d_1f91d_200d_1f469_1f3fb": 1,
      "1f469_1f3fc_200d_1f91d_200d_1f469_1f3fd": 1,
      "1f469_1f3fc_200d_1f91d_200d_1f469_1f3fe": 1,
      "1f469_1f3fc_200d_1f91d_200d_1f469_1f3ff": 1,
      "1f469_1f3fc_200d_1f9af": 1,
      "1f469_1f3fc_200d_1f9b0": 1,
      "1f469_1f3fc_200d_1f9b1": 1,
      "1f469_1f3fc_200d_1f9b2": 1,
      "1f469_1f3fc_200d_1f9b3": 1,
      "1f469_1f3fc_200d_1f9bc": 1,
      "1f469_1f3fc_200d_1f9bd": 1,
      "1f469_1f3fc_200d_2764_200d_1f3fc_1f468": 1,
      "1f469_1f3fc_200d_2764_200d_1f3fc_1f469": 1,
      "1f469_1f3fc_200d_2764_200d_1f468_1f3fb": 1,
      "1f469_1f3fc_200d_2764_200d_1f468_1f3fc": 1,
      "1f469_1f3fc_200d_2764_200d_1f468_1f3fd": 1,
      "1f469_1f3fc_200d_2764_200d_1f468_1f3fe": 1,
      "1f469_1f3fc_200d_2764_200d_1f468_1f3ff": 1,
      "1f469_1f3fc_200d_2764_200d_1f469_1f3fb": 1,
      "1f469_1f3fc_200d_2764_200d_1f469_1f3fc": 1,
      "1f469_1f3fc_200d_2764_200d_1f469_1f3fd": 1,
      "1f469_1f3fc_200d_2764_200d_1f469_1f3fe": 1,
      "1f469_1f3fc_200d_2764_200d_1f469_1f3ff": 1,
      "1f469_1f3fc_200d_2764_200d_1f48b_200d_1f3fc_1f468": 1,
      "1f469_1f3fc_200d_2764_200d_1f48b_200d_1f3fc_1f469": 1,
      "1f469_1f3fc_200d_2764_200d_1f48b_200d_1f468_1f3fb": 1,
      "1f469_1f3fc_200d_2764_200d_1f48b_200d_1f468_1f3fc": 1,
      "1f469_1f3fc_200d_2764_200d_1f48b_200d_1f468_1f3fd": 1,
      "1f469_1f3fc_200d_2764_200d_1f48b_200d_1f468_1f3fe": 1,
      "1f469_1f3fc_200d_2764_200d_1f48b_200d_1f468_1f3ff": 1,
      "1f469_1f3fc_200d_2764_200d_1f48b_200d_1f469_1f3fb": 1,
      "1f469_1f3fc_200d_2764_200d_1f48b_200d_1f469_1f3fc": 1,
      "1f469_1f3fc_200d_2764_200d_1f48b_200d_1f469_1f3fd": 1,
      "1f469_1f3fc_200d_2764_200d_1f48b_200d_1f469_1f3fe": 1,
      "1f469_1f3fc_200d_2764_200d_1f48b_200d_1f469_1f3ff": 1,
      "1f469_1f3fd_200d_1f37c": 1,
      "1f469_1f3fd_200d_1f91d_200d_1f468_1f3fb": 1,
      "1f469_1f3fd_200d_1f91d_200d_1f468_1f3fc": 1,
      "1f469_1f3fd_200d_1f91d_200d_1f468_1f3fe": 1,
      "1f469_1f3fd_200d_1f91d_200d_1f468_1f3ff": 1,
      "1f469_1f3fd_200d_1f91d_200d_1f469_1f3fb": 1,
      "1f469_1f3fd_200d_1f91d_200d_1f469_1f3fc": 1,
      "1f469_1f3fd_200d_1f91d_200d_1f469_1f3fe": 1,
      "1f469_1f3fd_200d_1f91d_200d_1f469_1f3ff": 1,
      "1f469_1f3fd_200d_1f9af": 1,
      "1f469_1f3fd_200d_1f9b0": 1,
      "1f469_1f3fd_200d_1f9b1": 1,
      "1f469_1f3fd_200d_1f9b2": 1,
      "1f469_1f3fd_200d_1f9b3": 1,
      "1f469_1f3fd_200d_1f9bc": 1,
      "1f469_1f3fd_200d_1f9bd": 1,
      "1f469_1f3fd_200d_2764_200d_1f3fd_1f468": 1,
      "1f469_1f3fd_200d_2764_200d_1f3fd_1f469": 1,
      "1f469_1f3fd_200d_2764_200d_1f468_1f3fb": 1,
      "1f469_1f3fd_200d_2764_200d_1f468_1f3fc": 1,
      "1f469_1f3fd_200d_2764_200d_1f468_1f3fd": 1,
      "1f469_1f3fd_200d_2764_200d_1f468_1f3fe": 1,
      "1f469_1f3fd_200d_2764_200d_1f468_1f3ff": 1,
      "1f469_1f3fd_200d_2764_200d_1f469_1f3fb": 1,
      "1f469_1f3fd_200d_2764_200d_1f469_1f3fc": 1,
      "1f469_1f3fd_200d_2764_200d_1f469_1f3fd": 1,
      "1f469_1f3fd_200d_2764_200d_1f469_1f3fe": 1,
      "1f469_1f3fd_200d_2764_200d_1f469_1f3ff": 1,
      "1f469_1f3fd_200d_2764_200d_1f48b_200d_1f3fd_1f468": 1,
      "1f469_1f3fd_200d_2764_200d_1f48b_200d_1f3fd_1f469": 1,
      "1f469_1f3fd_200d_2764_200d_1f48b_200d_1f468_1f3fb": 1,
      "1f469_1f3fd_200d_2764_200d_1f48b_200d_1f468_1f3fc": 1,
      "1f469_1f3fd_200d_2764_200d_1f48b_200d_1f468_1f3fd": 1,
      "1f469_1f3fd_200d_2764_200d_1f48b_200d_1f468_1f3fe": 1,
      "1f469_1f3fd_200d_2764_200d_1f48b_200d_1f468_1f3ff": 1,
      "1f469_1f3fd_200d_2764_200d_1f48b_200d_1f469_1f3fb": 1,
      "1f469_1f3fd_200d_2764_200d_1f48b_200d_1f469_1f3fc": 1,
      "1f469_1f3fd_200d_2764_200d_1f48b_200d_1f469_1f3fd": 1,
      "1f469_1f3fd_200d_2764_200d_1f48b_200d_1f469_1f3fe": 1,
      "1f469_1f3fd_200d_2764_200d_1f48b_200d_1f469_1f3ff": 1,
      "1f469_1f3fe_200d_1f37c": 1,
      "1f469_1f3fe_200d_1f91d_200d_1f468_1f3fb": 1,
      "1f469_1f3fe_200d_1f91d_200d_1f468_1f3fc": 1,
      "1f469_1f3fe_200d_1f91d_200d_1f468_1f3fd": 1,
      "1f469_1f3fe_200d_1f91d_200d_1f468_1f3ff": 1,
      "1f469_1f3fe_200d_1f91d_200d_1f469_1f3fb": 1,
      "1f469_1f3fe_200d_1f91d_200d_1f469_1f3fc": 1,
      "1f469_1f3fe_200d_1f91d_200d_1f469_1f3fd": 1,
      "1f469_1f3fe_200d_1f91d_200d_1f469_1f3ff": 1,
      "1f469_1f3fe_200d_1f9af": 1,
      "1f469_1f3fe_200d_1f9b0": 1,
      "1f469_1f3fe_200d_1f9b1": 1,
      "1f469_1f3fe_200d_1f9b2": 1,
      "1f469_1f3fe_200d_1f9b3": 1,
      "1f469_1f3fe_200d_1f9bc": 1,
      "1f469_1f3fe_200d_1f9bd": 1,
      "1f469_1f3fe_200d_2764_200d_1f3fe_1f468": 1,
      "1f469_1f3fe_200d_2764_200d_1f3fe_1f469": 1,
      "1f469_1f3fe_200d_2764_200d_1f468_1f3fb": 1,
      "1f469_1f3fe_200d_2764_200d_1f468_1f3fc": 1,
      "1f469_1f3fe_200d_2764_200d_1f468_1f3fd": 1,
      "1f469_1f3fe_200d_2764_200d_1f468_1f3fe": 1,
      "1f469_1f3fe_200d_2764_200d_1f468_1f3ff": 1,
      "1f469_1f3fe_200d_2764_200d_1f469_1f3fb": 1,
      "1f469_1f3fe_200d_2764_200d_1f469_1f3fc": 1,
      "1f469_1f3fe_200d_2764_200d_1f469_1f3fd": 1,
      "1f469_1f3fe_200d_2764_200d_1f469_1f3fe": 1,
      "1f469_1f3fe_200d_2764_200d_1f469_1f3ff": 1,
      "1f469_1f3fe_200d_2764_200d_1f48b_200d_1f3fe_1f468": 1,
      "1f469_1f3fe_200d_2764_200d_1f48b_200d_1f3fe_1f469": 1,
      "1f469_1f3fe_200d_2764_200d_1f48b_200d_1f468_1f3fb": 1,
      "1f469_1f3fe_200d_2764_200d_1f48b_200d_1f468_1f3fc": 1,
      "1f469_1f3fe_200d_2764_200d_1f48b_200d_1f468_1f3fd": 1,
      "1f469_1f3fe_200d_2764_200d_1f48b_200d_1f468_1f3fe": 1,
      "1f469_1f3fe_200d_2764_200d_1f48b_200d_1f468_1f3ff": 1,
      "1f469_1f3fe_200d_2764_200d_1f48b_200d_1f469_1f3fb": 1,
      "1f469_1f3fe_200d_2764_200d_1f48b_200d_1f469_1f3fc": 1,
      "1f469_1f3fe_200d_2764_200d_1f48b_200d_1f469_1f3fd": 1,
      "1f469_1f3fe_200d_2764_200d_1f48b_200d_1f469_1f3fe": 1,
      "1f469_1f3fe_200d_2764_200d_1f48b_200d_1f469_1f3ff": 1,
      "1f469_1f3ff_200d_1f37c": 1,
      "1f469_1f3ff_200d_1f91d_200d_1f468_1f3fb": 1,
      "1f469_1f3ff_200d_1f91d_200d_1f468_1f3fc": 1,
      "1f469_1f3ff_200d_1f91d_200d_1f468_1f3fd": 1,
      "1f469_1f3ff_200d_1f91d_200d_1f468_1f3fe": 1,
      "1f469_1f3ff_200d_1f91d_200d_1f469_1f3fb": 1,
      "1f469_1f3ff_200d_1f91d_200d_1f469_1f3fc": 1,
      "1f469_1f3ff_200d_1f91d_200d_1f469_1f3fd": 1,
      "1f469_1f3ff_200d_1f91d_200d_1f469_1f3fe": 1,
      "1f469_1f3ff_200d_1f9af": 1,
      "1f469_1f3ff_200d_1f9b0": 1,
      "1f469_1f3ff_200d_1f9b1": 1,
      "1f469_1f3ff_200d_1f9b2": 1,
      "1f469_1f3ff_200d_1f9b3": 1,
      "1f469_1f3ff_200d_1f9bc": 1,
      "1f469_1f3ff_200d_1f9bd": 1,
      "1f469_1f3ff_200d_2764_200d_1f3ff_1f468": 1,
      "1f469_1f3ff_200d_2764_200d_1f3ff_1f469": 1,
      "1f469_1f3ff_200d_2764_200d_1f468_1f3fb": 1,
      "1f469_1f3ff_200d_2764_200d_1f468_1f3fc": 1,
      "1f469_1f3ff_200d_2764_200d_1f468_1f3fd": 1,
      "1f469_1f3ff_200d_2764_200d_1f468_1f3fe": 1,
      "1f469_1f3ff_200d_2764_200d_1f468_1f3ff": 1,
      "1f469_1f3ff_200d_2764_200d_1f469_1f3fb": 1,
      "1f469_1f3ff_200d_2764_200d_1f469_1f3fc": 1,
      "1f469_1f3ff_200d_2764_200d_1f469_1f3fd": 1,
      "1f469_1f3ff_200d_2764_200d_1f469_1f3fe": 1,
      "1f469_1f3ff_200d_2764_200d_1f469_1f3ff": 1,
      "1f469_1f3ff_200d_2764_200d_1f48b_200d_1f3ff_1f468": 1,
      "1f469_1f3ff_200d_2764_200d_1f48b_200d_1f3ff_1f469": 1,
      "1f469_1f3ff_200d_2764_200d_1f48b_200d_1f468_1f3fb": 1,
      "1f469_1f3ff_200d_2764_200d_1f48b_200d_1f468_1f3fc": 1,
      "1f469_1f3ff_200d_2764_200d_1f48b_200d_1f468_1f3fd": 1,
      "1f469_1f3ff_200d_2764_200d_1f48b_200d_1f468_1f3fe": 1,
      "1f469_1f3ff_200d_2764_200d_1f48b_200d_1f468_1f3ff": 1,
      "1f469_1f3ff_200d_2764_200d_1f48b_200d_1f469_1f3fb": 1,
      "1f469_1f3ff_200d_2764_200d_1f48b_200d_1f469_1f3fc": 1,
      "1f469_1f3ff_200d_2764_200d_1f48b_200d_1f469_1f3fd": 1,
      "1f469_1f3ff_200d_2764_200d_1f48b_200d_1f469_1f3fe": 1,
      "1f469_1f3ff_200d_2764_200d_1f48b_200d_1f469_1f3ff": 1,
      "1f469_200d_1f37c": 1,
      "1f469_200d_1f9af": 1,
      "1f469_200d_1f9b0": 1,
      "1f469_200d_1f9b1": 1,
      "1f469_200d_1f9b2": 1,
      "1f469_200d_1f9b3": 1,
      "1f469_200d_1f9bc": 1,
      "1f469_200d_1f9bd": 1,
      "1f46a": 1,
      "1f46e": 1,
      "1f46e_1f3fb": 1,
      "1f46e_1f3fc": 1,
      "1f46e_1f3fd": 1,
      "1f46e_1f3fe": 1,
      "1f46e_1f3ff": 1,
      "1f46f": 1,
      "1f46f_1f3fb": 1,
      "1f46f_1f3fc": 1,
      "1f46f_1f3fd": 1,
      "1f46f_1f3fe": 1,
      "1f46f_1f3ff": 1,
      "1f470_1f3fb_200d_2640": 1,
      "1f470_1f3fb_200d_2642": 1,
      "1f470_1f3fc_200d_2640": 1,
      "1f470_1f3fc_200d_2642": 1,
      "1f470_1f3fd_200d_2640": 1,
      "1f470_1f3fd_200d_2642": 1,
      "1f470_1f3fe_200d_2640": 1,
      "1f470_1f3fe_200d_2642": 1,
      "1f470_1f3ff_200d_2640": 1,
      "1f470_1f3ff_200d_2642": 1,
      "1f470_200d_2640": 1,
      "1f470_200d_2642": 1,
      "1f471": 1,
      "1f471_1f3fb": 1,
      "1f471_1f3fc": 1,
      "1f471_1f3fd": 1,
      "1f471_1f3fe": 1,
      "1f471_1f3ff": 1,
      "1f473": 1,
      "1f473_1f3fb": 1,
      "1f473_1f3fc": 1,
      "1f473_1f3fd": 1,
      "1f473_1f3fe": 1,
      "1f473_1f3ff": 1,
      "1f477": 1,
      "1f477_1f3fb": 1,
      "1f477_1f3fc": 1,
      "1f477_1f3fd": 1,
      "1f477_1f3fe": 1,
      "1f477_1f3ff": 1,
      "1f481": 1,
      "1f481_1f3fb": 1,
      "1f481_1f3fc": 1,
      "1f481_1f3fd": 1,
      "1f481_1f3fe": 1,
      "1f481_1f3ff": 1,
      "1f482": 1,
      "1f482_1f3fb": 1,
      "1f482_1f3fc": 1,
      "1f482_1f3fd": 1,
      "1f482_1f3fe": 1,
      "1f482_1f3ff": 1,
      "1f486": 1,
      "1f486_1f3fb": 1,
      "1f486_1f3fc": 1,
      "1f486_1f3fd": 1,
      "1f486_1f3fe": 1,
      "1f486_1f3ff": 1,
      "1f487": 1,
      "1f487_1f3fb": 1,
      "1f487_1f3fc": 1,
      "1f487_1f3fd": 1,
      "1f487_1f3fe": 1,
      "1f487_1f3ff": 1,
      "1f48f": 1,
      "1f48f_1f3fb": 1,
      "1f48f_1f3fc": 1,
      "1f48f_1f3fd": 1,
      "1f48f_1f3fe": 1,
      "1f48f_1f3ff": 1,
      "1f491": 1,
      "1f491_1f3fb": 1,
      "1f491_1f3fc": 1,
      "1f491_1f3fd": 1,
      "1f491_1f3fe": 1,
      "1f491_1f3ff": 1,
      "1f574_1f3fb_200d_2642": 1,
      "1f574_1f3fc_200d_2642": 1,
      "1f574_1f3fd_200d_2642": 1,
      "1f574_1f3fe_200d_2642": 1,
      "1f574_1f3ff_200d_2642": 1,
      "1f574_200d_2642": 1,
      "1f575": 1,
      "1f575_1f3fb": 1,
      "1f575_1f3fc": 1,
      "1f575_1f3fd": 1,
      "1f575_1f3fe": 1,
      "1f575_1f3ff": 1,
      "1f62e_200d_1f4a8": 1,
      "1f635_200d_1f4ab": 1,
      "1f636_200d_1f32b": 1,
      "1f645": 1,
      "1f645_1f3fb": 1,
      "1f645_1f3fc": 1,
      "1f645_1f3fd": 1,
      "1f645_1f3fe": 1,
      "1f645_1f3ff": 1,
      "1f646": 1,
      "1f646_1f3fb": 1,
      "1f646_1f3fc": 1,
      "1f646_1f3fd": 1,
      "1f646_1f3fe": 1,
      "1f646_1f3ff": 1,
      "1f647": 1,
      "1f647_1f3fb": 1,
      "1f647_1f3fc": 1,
      "1f647_1f3fd": 1,
      "1f647_1f3fe": 1,
      "1f647_1f3ff": 1,
      "1f64b": 1,
      "1f64b_1f3fb": 1,
      "1f64b_1f3fc": 1,
      "1f64b_1f3fd": 1,
      "1f64b_1f3fe": 1,
      "1f64b_1f3ff": 1,
      "1f64d": 1,
      "1f64d_1f3fb": 1,
      "1f64d_1f3fc": 1,
      "1f64d_1f3fd": 1,
      "1f64d_1f3fe": 1,
      "1f64d_1f3ff": 1,
      "1f64e": 1,
      "1f64e_1f3fb": 1,
      "1f64e_1f3fc": 1,
      "1f64e_1f3fd": 1,
      "1f64e_1f3fe": 1,
      "1f64e_1f3ff": 1,
      "1f6a3": 1,
      "1f6a3_1f3fb": 1,
      "1f6a3_1f3fc": 1,
      "1f6a3_1f3fd": 1,
      "1f6a3_1f3fe": 1,
      "1f6a3_1f3ff": 1,
      "1f6b4": 1,
      "1f6b4_1f3fb": 1,
      "1f6b4_1f3fc": 1,
      "1f6b4_1f3fd": 1,
      "1f6b4_1f3fe": 1,
      "1f6b4_1f3ff": 1,
      "1f6b5": 1,
      "1f6b5_1f3fb": 1,
      "1f6b5_1f3fc": 1,
      "1f6b5_1f3fd": 1,
      "1f6b5_1f3fe": 1,
      "1f6b5_1f3ff": 1,
      "1f6b6": 1,
      "1f6b6_1f3fb": 1,
      "1f6b6_1f3fc": 1,
      "1f6b6_1f3fd": 1,
      "1f6b6_1f3fe": 1,
      "1f6b6_1f3ff": 1,
      "1f6d5": 1,
      "1f6d6": 1,
      "1f6d7": 1,
      "1f6dd": 1,
      "1f6de": 1,
      "1f6df": 1,
      "1f6f9": 1,
      "1f6fa": 1,
      "1f6fb": 1,
      "1f6fc": 1,
      "1f7e0": 1,
      "1f7e1": 1,
      "1f7e2": 1,
      "1f7e3": 1,
      "1f7e4": 1,
      "1f7e5": 1,
      "1f7e6": 1,
      "1f7e7": 1,
      "1f7e8": 1,
      "1f7e9": 1,
      "1f7ea": 1,
      "1f7eb": 1,
      "1f7f0": 1,
      "1f90c": 1,
      "1f90c_1f3fb": 1,
      "1f90c_1f3fc": 1,
      "1f90c_1f3fd": 1,
      "1f90c_1f3fe": 1,
      "1f90c_1f3ff": 1,
      "1f90d": 1,
      "1f90e": 1,
      "1f90f": 1,
      "1f90f_1f3fb": 1,
      "1f90f_1f3fc": 1,
      "1f90f_1f3fd": 1,
      "1f90f_1f3fe": 1,
      "1f90f_1f3ff": 1,
      "1f926": 1,
      "1f926_1f3fb": 1,
      "1f926_1f3fc": 1,
      "1f926_1f3fd": 1,
      "1f926_1f3fe": 1,
      "1f926_1f3ff": 1,
      "1f935_1f3fb_200d_2640": 1,
      "1f935_1f3fb_200d_2642": 1,
      "1f935_1f3fc_200d_2640": 1,
      "1f935_1f3fc_200d_2642": 1,
      "1f935_1f3fd_200d_2640": 1,
      "1f935_1f3fd_200d_2642": 1,
      "1f935_1f3fe_200d_2640": 1,
      "1f935_1f3fe_200d_2642": 1,
      "1f935_1f3ff_200d_2640": 1,
      "1f935_1f3ff_200d_2642": 1,
      "1f935_200d_2640": 1,
      "1f935_200d_2642": 1,
      "1f937": 1,
      "1f937_1f3fb": 1,
      "1f937_1f3fc": 1,
      "1f937_1f3fd": 1,
      "1f937_1f3fe": 1,
      "1f937_1f3ff": 1,
      "1f938": 1,
      "1f938_1f3fb": 1,
      "1f938_1f3fc": 1,
      "1f938_1f3fd": 1,
      "1f938_1f3fe": 1,
      "1f938_1f3ff": 1,
      "1f939_1f3fb_200d_2640": 1,
      "1f939_1f3fb_200d_2642": 1,
      "1f939_1f3fc_200d_2640": 1,
      "1f939_1f3fc_200d_2642": 1,
      "1f939_1f3fd_200d_2640": 1,
      "1f939_1f3fd_200d_2642": 1,
      "1f939_1f3fe_200d_2640": 1,
      "1f939_1f3fe_200d_2642": 1,
      "1f939_1f3ff_200d_2640": 1,
      "1f939_1f3ff_200d_2642": 1,
      "1f939_200d_2640": 1,
      "1f939_200d_2642": 1,
      "1f93c": 1,
      "1f93c_1f3fb": 1,
      "1f93c_1f3fc": 1,
      "1f93c_1f3fd": 1,
      "1f93c_1f3fe": 1,
      "1f93c_1f3ff": 1,
      "1f93d": 1,
      "1f93d_1f3fb": 1,
      "1f93d_1f3fc": 1,
      "1f93d_1f3fd": 1,
      "1f93d_1f3fe": 1,
      "1f93d_1f3ff": 1,
      "1f93e": 1,
      "1f93e_1f3fb": 1,
      "1f93e_1f3fc": 1,
      "1f93e_1f3fd": 1,
      "1f93e_1f3fe": 1,
      "1f93e_1f3ff": 1,
      "1f93f": 1,
      "1f94d": 1,
      "1f94e": 1,
      "1f94f": 1,
      "1f96c": 1,
      "1f96d": 1,
      "1f96e": 1,
      "1f96f": 1,
      "1f970": 1,
      "1f971": 1,
      "1f972": 1,
      "1f973": 1,
      "1f974": 1,
      "1f975": 1,
      "1f976": 1,
      "1f977": 1,
      "1f977_1f3fb": 1,
      "1f977_1f3fc": 1,
      "1f977_1f3fd": 1,
      "1f977_1f3fe": 1,
      "1f977_1f3ff": 1,
      "1f978": 1,
      "1f979": 1,
      "1f97a": 1,
      "1f97b": 1,
      "1f97c": 1,
      "1f97d": 1,
      "1f97e": 1,
      "1f97f": 1,
      "1f998": 1,
      "1f999": 1,
      "1f99a": 1,
      "1f99b": 1,
      "1f99c": 1,
      "1f99d": 1,
      "1f99e": 1,
      "1f99f": 1,
      "1f9a0": 1,
      "1f9a1": 1,
      "1f9a2": 1,
      "1f9a3": 1,
      "1f9a4": 1,
      "1f9a5": 1,
      "1f9a6": 1,
      "1f9a7": 1,
      "1f9a8": 1,
      "1f9a9": 1,
      "1f9aa": 1,
      "1f9ab": 1,
      "1f9ac": 1,
      "1f9ad": 1,
      "1f9ae": 1,
      "1f9af": 1,
      "1f9b0": 1,
      "1f9b1": 1,
      "1f9b2": 1,
      "1f9b3": 1,
      "1f9b4": 1,
      "1f9b5": 1,
      "1f9b5_1f3fb": 1,
      "1f9b5_1f3fc": 1,
      "1f9b5_1f3fd": 1,
      "1f9b5_1f3fe": 1,
      "1f9b5_1f3ff": 1,
      "1f9b6": 1,
      "1f9b6_1f3fb": 1,
      "1f9b6_1f3fc": 1,
      "1f9b6_1f3fd": 1,
      "1f9b6_1f3fe": 1,
      "1f9b6_1f3ff": 1,
      "1f9b7": 1,
      "1f9b8": 1,
      "1f9b8_1f3fb": 1,
      "1f9b8_1f3fb_200d_2640": 1,
      "1f9b8_1f3fb_200d_2642": 1,
      "1f9b8_1f3fc": 1,
      "1f9b8_1f3fc_200d_2640": 1,
      "1f9b8_1f3fc_200d_2642": 1,
      "1f9b8_1f3fd": 1,
      "1f9b8_1f3fd_200d_2640": 1,
      "1f9b8_1f3fd_200d_2642": 1,
      "1f9b8_1f3fe": 1,
      "1f9b8_1f3fe_200d_2640": 1,
      "1f9b8_1f3fe_200d_2642": 1,
      "1f9b8_1f3ff": 1,
      "1f9b8_1f3ff_200d_2640": 1,
      "1f9b8_1f3ff_200d_2642": 1,
      "1f9b8_200d_2640": 1,
      "1f9b8_200d_2642": 1,
      "1f9b9": 1,
      "1f9b9_1f3fb": 1,
      "1f9b9_1f3fb_200d_2640": 1,
      "1f9b9_1f3fb_200d_2642": 1,
      "1f9b9_1f3fc": 1,
      "1f9b9_1f3fc_200d_2640": 1,
      "1f9b9_1f3fc_200d_2642": 1,
      "1f9b9_1f3fd": 1,
      "1f9b9_1f3fd_200d_2640": 1,
      "1f9b9_1f3fd_200d_2642": 1,
      "1f9b9_1f3fe": 1,
      "1f9b9_1f3fe_200d_2640": 1,
      "1f9b9_1f3fe_200d_2642": 1,
      "1f9b9_1f3ff": 1,
      "1f9b9_1f3ff_200d_2640": 1,
      "1f9b9_1f3ff_200d_2642": 1,
      "1f9b9_200d_2640": 1,
      "1f9b9_200d_2642": 1,
      "1f9ba": 1,
      "1f9bb": 1,
      "1f9bb_1f3fb": 1,
      "1f9bb_1f3fc": 1,
      "1f9bb_1f3fd": 1,
      "1f9bb_1f3fe": 1,
      "1f9bb_1f3ff": 1,
      "1f9bc": 1,
      "1f9bd": 1,
      "1f9be": 1,
      "1f9bf": 1,
      "1f9c1": 1,
      "1f9c2": 1,
      "1f9c3": 1,
      "1f9c4": 1,
      "1f9c5": 1,
      "1f9c6": 1,
      "1f9c7": 1,
      "1f9c8": 1,
      "1f9c9": 1,
      "1f9ca": 1,
      "1f9cb": 1,
      "1f9cc": 1,
      "1f9cd": 1,
      "1f9cd_1f3fb": 1,
      "1f9cd_1f3fb_200d_2640": 1,
      "1f9cd_1f3fb_200d_2642": 1,
      "1f9cd_1f3fc": 1,
      "1f9cd_1f3fc_200d_2640": 1,
      "1f9cd_1f3fc_200d_2642": 1,
      "1f9cd_1f3fd": 1,
      "1f9cd_1f3fd_200d_2640": 1,
      "1f9cd_1f3fd_200d_2642": 1,
      "1f9cd_1f3fe": 1,
      "1f9cd_1f3fe_200d_2640": 1,
      "1f9cd_1f3fe_200d_2642": 1,
      "1f9cd_1f3ff": 1,
      "1f9cd_1f3ff_200d_2640": 1,
      "1f9cd_1f3ff_200d_2642": 1,
      "1f9cd_200d_2640": 1,
      "1f9cd_200d_2642": 1,
      "1f9ce": 1,
      "1f9ce_1f3fb": 1,
      "1f9ce_1f3fb_200d_2640": 1,
      "1f9ce_1f3fb_200d_2642": 1,
      "1f9ce_1f3fc": 1,
      "1f9ce_1f3fc_200d_2640": 1,
      "1f9ce_1f3fc_200d_2642": 1,
      "1f9ce_1f3fd": 1,
      "1f9ce_1f3fd_200d_2640": 1,
      "1f9ce_1f3fd_200d_2642": 1,
      "1f9ce_1f3fe": 1,
      "1f9ce_1f3fe_200d_2640": 1,
      "1f9ce_1f3fe_200d_2642": 1,
      "1f9ce_1f3ff": 1,
      "1f9ce_1f3ff_200d_2640": 1,
      "1f9ce_1f3ff_200d_2642": 1,
      "1f9ce_200d_2640": 1,
      "1f9ce_200d_2642": 1,
      "1f9cf": 1,
      "1f9cf_1f3fb": 1,
      "1f9cf_1f3fb_200d_2640": 1,
      "1f9cf_1f3fb_200d_2642": 1,
      "1f9cf_1f3fc": 1,
      "1f9cf_1f3fc_200d_2640": 1,
      "1f9cf_1f3fc_200d_2642": 1,
      "1f9cf_1f3fd": 1,
      "1f9cf_1f3fd_200d_2640": 1,
      "1f9cf_1f3fd_200d_2642": 1,
      "1f9cf_1f3fe": 1,
      "1f9cf_1f3fe_200d_2640": 1,
      "1f9cf_1f3fe_200d_2642": 1,
      "1f9cf_1f3ff": 1,
      "1f9cf_1f3ff_200d_2640": 1,
      "1f9cf_1f3ff_200d_2642": 1,
      "1f9cf_200d_2640": 1,
      "1f9cf_200d_2642": 1,
      "1f9d1_1f3fb_200d_1f33e": 1,
      "1f9d1_1f3fb_200d_1f373": 1,
      "1f9d1_1f3fb_200d_1f37c": 1,
      "1f9d1_1f3fb_200d_1f384": 1,
      "1f9d1_1f3fb_200d_1f393": 1,
      "1f9d1_1f3fb_200d_1f3a4": 1,
      "1f9d1_1f3fb_200d_1f3a8": 1,
      "1f9d1_1f3fb_200d_1f3eb": 1,
      "1f9d1_1f3fb_200d_1f3ed": 1,
      "1f9d1_1f3fb_200d_1f4bb": 1,
      "1f9d1_1f3fb_200d_1f4bc": 1,
      "1f9d1_1f3fb_200d_1f527": 1,
      "1f9d1_1f3fb_200d_1f52c": 1,
      "1f9d1_1f3fb_200d_1f680": 1,
      "1f9d1_1f3fb_200d_1f692": 1,
      "1f9d1_1f3fb_200d_1f91d_200d_1f9d1_1f3fb": 1,
      "1f9d1_1f3fb_200d_1f91d_200d_1f9d1_1f3fc": 1,
      "1f9d1_1f3fb_200d_1f91d_200d_1f9d1_1f3fd": 1,
      "1f9d1_1f3fb_200d_1f91d_200d_1f9d1_1f3fe": 1,
      "1f9d1_1f3fb_200d_1f91d_200d_1f9d1_1f3ff": 1,
      "1f9d1_1f3fb_200d_1f9af": 1,
      "1f9d1_1f3fb_200d_1f9b0": 1,
      "1f9d1_1f3fb_200d_1f9b1": 1,
      "1f9d1_1f3fb_200d_1f9b2": 1,
      "1f9d1_1f3fb_200d_1f9b3": 1,
      "1f9d1_1f3fb_200d_1f9bc": 1,
      "1f9d1_1f3fb_200d_1f9bd": 1,
      "1f9d1_1f3fb_200d_2695": 1,
      "1f9d1_1f3fb_200d_2696": 1,
      "1f9d1_1f3fb_200d_2708": 1,
      "1f9d1_1f3fb_200d_2764_200d_1f48b_200d_1f9d1_1f3fc": 1,
      "1f9d1_1f3fb_200d_2764_200d_1f48b_200d_1f9d1_1f3fd": 1,
      "1f9d1_1f3fb_200d_2764_200d_1f48b_200d_1f9d1_1f3fe": 1,
      "1f9d1_1f3fb_200d_2764_200d_1f48b_200d_1f9d1_1f3ff": 1,
      "1f9d1_1f3fb_200d_2764_200d_1f9d1_1f3fc": 1,
      "1f9d1_1f3fb_200d_2764_200d_1f9d1_1f3fd": 1,
      "1f9d1_1f3fb_200d_2764_200d_1f9d1_1f3fe": 1,
      "1f9d1_1f3fb_200d_2764_200d_1f9d1_1f3ff": 1,
      "1f9d1_1f3fc_200d_1f33e": 1,
      "1f9d1_1f3fc_200d_1f373": 1,
      "1f9d1_1f3fc_200d_1f37c": 1,
      "1f9d1_1f3fc_200d_1f384": 1,
      "1f9d1_1f3fc_200d_1f393": 1,
      "1f9d1_1f3fc_200d_1f3a4": 1,
      "1f9d1_1f3fc_200d_1f3a8": 1,
      "1f9d1_1f3fc_200d_1f3eb": 1,
      "1f9d1_1f3fc_200d_1f3ed": 1,
      "1f9d1_1f3fc_200d_1f4bb": 1,
      "1f9d1_1f3fc_200d_1f4bc": 1,
      "1f9d1_1f3fc_200d_1f527": 1,
      "1f9d1_1f3fc_200d_1f52c": 1,
      "1f9d1_1f3fc_200d_1f680": 1,
      "1f9d1_1f3fc_200d_1f692": 1,
      "1f9d1_1f3fc_200d_1f91d_200d_1f9d1_1f3fb": 1,
      "1f9d1_1f3fc_200d_1f91d_200d_1f9d1_1f3fc": 1,
      "1f9d1_1f3fc_200d_1f91d_200d_1f9d1_1f3fd": 1,
      "1f9d1_1f3fc_200d_1f91d_200d_1f9d1_1f3fe": 1,
      "1f9d1_1f3fc_200d_1f91d_200d_1f9d1_1f3ff": 1,
      "1f9d1_1f3fc_200d_1f9af": 1,
      "1f9d1_1f3fc_200d_1f9b0": 1,
      "1f9d1_1f3fc_200d_1f9b1": 1,
      "1f9d1_1f3fc_200d_1f9b2": 1,
      "1f9d1_1f3fc_200d_1f9b3": 1,
      "1f9d1_1f3fc_200d_1f9bc": 1,
      "1f9d1_1f3fc_200d_1f9bd": 1,
      "1f9d1_1f3fc_200d_2695": 1,
      "1f9d1_1f3fc_200d_2696": 1,
      "1f9d1_1f3fc_200d_2708": 1,
      "1f9d1_1f3fc_200d_2764_200d_1f48b_200d_1f9d1_1f3fb": 1,
      "1f9d1_1f3fc_200d_2764_200d_1f48b_200d_1f9d1_1f3fd": 1,
      "1f9d1_1f3fc_200d_2764_200d_1f48b_200d_1f9d1_1f3fe": 1,
      "1f9d1_1f3fc_200d_2764_200d_1f48b_200d_1f9d1_1f3ff": 1,
      "1f9d1_1f3fc_200d_2764_200d_1f9d1_1f3fb": 1,
      "1f9d1_1f3fc_200d_2764_200d_1f9d1_1f3fd": 1,
      "1f9d1_1f3fc_200d_2764_200d_1f9d1_1f3fe": 1,
      "1f9d1_1f3fc_200d_2764_200d_1f9d1_1f3ff": 1,
      "1f9d1_1f3fd_200d_1f33e": 1,
      "1f9d1_1f3fd_200d_1f373": 1,
      "1f9d1_1f3fd_200d_1f37c": 1,
      "1f9d1_1f3fd_200d_1f384": 1,
      "1f9d1_1f3fd_200d_1f393": 1,
      "1f9d1_1f3fd_200d_1f3a4": 1,
      "1f9d1_1f3fd_200d_1f3a8": 1,
      "1f9d1_1f3fd_200d_1f3eb": 1,
      "1f9d1_1f3fd_200d_1f3ed": 1,
      "1f9d1_1f3fd_200d_1f4bb": 1,
      "1f9d1_1f3fd_200d_1f4bc": 1,
      "1f9d1_1f3fd_200d_1f527": 1,
      "1f9d1_1f3fd_200d_1f52c": 1,
      "1f9d1_1f3fd_200d_1f680": 1,
      "1f9d1_1f3fd_200d_1f692": 1,
      "1f9d1_1f3fd_200d_1f91d_200d_1f9d1_1f3fb": 1,
      "1f9d1_1f3fd_200d_1f91d_200d_1f9d1_1f3fc": 1,
      "1f9d1_1f3fd_200d_1f91d_200d_1f9d1_1f3fd": 1,
      "1f9d1_1f3fd_200d_1f91d_200d_1f9d1_1f3fe": 1,
      "1f9d1_1f3fd_200d_1f91d_200d_1f9d1_1f3ff": 1,
      "1f9d1_1f3fd_200d_1f9af": 1,
      "1f9d1_1f3fd_200d_1f9b0": 1,
      "1f9d1_1f3fd_200d_1f9b1": 1,
      "1f9d1_1f3fd_200d_1f9b2": 1,
      "1f9d1_1f3fd_200d_1f9b3": 1,
      "1f9d1_1f3fd_200d_1f9bc": 1,
      "1f9d1_1f3fd_200d_1f9bd": 1,
      "1f9d1_1f3fd_200d_2695": 1,
      "1f9d1_1f3fd_200d_2696": 1,
      "1f9d1_1f3fd_200d_2708": 1,
      "1f9d1_1f3fd_200d_2764_200d_1f48b_200d_1f9d1_1f3fb": 1,
      "1f9d1_1f3fd_200d_2764_200d_1f48b_200d_1f9d1_1f3fc": 1,
      "1f9d1_1f3fd_200d_2764_200d_1f48b_200d_1f9d1_1f3fe": 1,
      "1f9d1_1f3fd_200d_2764_200d_1f48b_200d_1f9d1_1f3ff": 1,
      "1f9d1_1f3fd_200d_2764_200d_1f9d1_1f3fb": 1,
      "1f9d1_1f3fd_200d_2764_200d_1f9d1_1f3fc": 1,
      "1f9d1_1f3fd_200d_2764_200d_1f9d1_1f3fe": 1,
      "1f9d1_1f3fd_200d_2764_200d_1f9d1_1f3ff": 1,
      "1f9d1_1f3fe_200d_1f33e": 1,
      "1f9d1_1f3fe_200d_1f373": 1,
      "1f9d1_1f3fe_200d_1f37c": 1,
      "1f9d1_1f3fe_200d_1f384": 1,
      "1f9d1_1f3fe_200d_1f393": 1,
      "1f9d1_1f3fe_200d_1f3a4": 1,
      "1f9d1_1f3fe_200d_1f3a8": 1,
      "1f9d1_1f3fe_200d_1f3eb": 1,
      "1f9d1_1f3fe_200d_1f3ed": 1,
      "1f9d1_1f3fe_200d_1f4bb": 1,
      "1f9d1_1f3fe_200d_1f4bc": 1,
      "1f9d1_1f3fe_200d_1f527": 1,
      "1f9d1_1f3fe_200d_1f52c": 1,
      "1f9d1_1f3fe_200d_1f680": 1,
      "1f9d1_1f3fe_200d_1f692": 1,
      "1f9d1_1f3fe_200d_1f91d_200d_1f9d1_1f3fb": 1,
      "1f9d1_1f3fe_200d_1f91d_200d_1f9d1_1f3fc": 1,
      "1f9d1_1f3fe_200d_1f91d_200d_1f9d1_1f3fd": 1,
      "1f9d1_1f3fe_200d_1f91d_200d_1f9d1_1f3fe": 1,
      "1f9d1_1f3fe_200d_1f91d_200d_1f9d1_1f3ff": 1,
      "1f9d1_1f3fe_200d_1f9af": 1,
      "1f9d1_1f3fe_200d_1f9b0": 1,
      "1f9d1_1f3fe_200d_1f9b1": 1,
      "1f9d1_1f3fe_200d_1f9b2": 1,
      "1f9d1_1f3fe_200d_1f9b3": 1,
      "1f9d1_1f3fe_200d_1f9bc": 1,
      "1f9d1_1f3fe_200d_1f9bd": 1,
      "1f9d1_1f3fe_200d_2695": 1,
      "1f9d1_1f3fe_200d_2696": 1,
      "1f9d1_1f3fe_200d_2708": 1,
      "1f9d1_1f3fe_200d_2764_200d_1f48b_200d_1f9d1_1f3fb": 1,
      "1f9d1_1f3fe_200d_2764_200d_1f48b_200d_1f9d1_1f3fc": 1,
      "1f9d1_1f3fe_200d_2764_200d_1f48b_200d_1f9d1_1f3fd": 1,
      "1f9d1_1f3fe_200d_2764_200d_1f48b_200d_1f9d1_1f3ff": 1,
      "1f9d1_1f3fe_200d_2764_200d_1f9d1_1f3fb": 1,
      "1f9d1_1f3fe_200d_2764_200d_1f9d1_1f3fc": 1,
      "1f9d1_1f3fe_200d_2764_200d_1f9d1_1f3fd": 1,
      "1f9d1_1f3fe_200d_2764_200d_1f9d1_1f3ff": 1,
      "1f9d1_1f3ff_200d_1f33e": 1,
      "1f9d1_1f3ff_200d_1f373": 1,
      "1f9d1_1f3ff_200d_1f37c": 1,
      "1f9d1_1f3ff_200d_1f384": 1,
      "1f9d1_1f3ff_200d_1f393": 1,
      "1f9d1_1f3ff_200d_1f3a4": 1,
      "1f9d1_1f3ff_200d_1f3a8": 1,
      "1f9d1_1f3ff_200d_1f3eb": 1,
      "1f9d1_1f3ff_200d_1f3ed": 1,
      "1f9d1_1f3ff_200d_1f4bb": 1,
      "1f9d1_1f3ff_200d_1f4bc": 1,
      "1f9d1_1f3ff_200d_1f527": 1,
      "1f9d1_1f3ff_200d_1f52c": 1,
      "1f9d1_1f3ff_200d_1f680": 1,
      "1f9d1_1f3ff_200d_1f692": 1,
      "1f9d1_1f3ff_200d_1f91d_200d_1f9d1_1f3fb": 1,
      "1f9d1_1f3ff_200d_1f91d_200d_1f9d1_1f3fc": 1,
      "1f9d1_1f3ff_200d_1f91d_200d_1f9d1_1f3fd": 1,
      "1f9d1_1f3ff_200d_1f91d_200d_1f9d1_1f3fe": 1,
      "1f9d1_1f3ff_200d_1f91d_200d_1f9d1_1f3ff": 1,
      "1f9d1_1f3ff_200d_1f9af": 1,
      "1f9d1_1f3ff_200d_1f9b0": 1,
      "1f9d1_1f3ff_200d_1f9b1": 1,
      "1f9d1_1f3ff_200d_1f9b2": 1,
      "1f9d1_1f3ff_200d_1f9b3": 1,
      "1f9d1_1f3ff_200d_1f9bc": 1,
      "1f9d1_1f3ff_200d_1f9bd": 1,
      "1f9d1_1f3ff_200d_2695": 1,
      "1f9d1_1f3ff_200d_2696": 1,
      "1f9d1_1f3ff_200d_2708": 1,
      "1f9d1_1f3ff_200d_2764_200d_1f48b_200d_1f9d1_1f3fb": 1,
      "1f9d1_1f3ff_200d_2764_200d_1f48b_200d_1f9d1_1f3fc": 1,
      "1f9d1_1f3ff_200d_2764_200d_1f48b_200d_1f9d1_1f3fd": 1,
      "1f9d1_1f3ff_200d_2764_200d_1f48b_200d_1f9d1_1f3fe": 1,
      "1f9d1_1f3ff_200d_2764_200d_1f9d1_1f3fb": 1,
      "1f9d1_1f3ff_200d_2764_200d_1f9d1_1f3fc": 1,
      "1f9d1_1f3ff_200d_2764_200d_1f9d1_1f3fd": 1,
      "1f9d1_1f3ff_200d_2764_200d_1f9d1_1f3fe": 1,
      "1f9d1_200d_1f33e": 1,
      "1f9d1_200d_1f373": 1,
      "1f9d1_200d_1f37c": 1,
      "1f9d1_200d_1f384": 1,
      "1f9d1_200d_1f393": 1,
      "1f9d1_200d_1f3a4": 1,
      "1f9d1_200d_1f3a8": 1,
      "1f9d1_200d_1f3eb": 1,
      "1f9d1_200d_1f3ed": 1,
      "1f9d1_200d_1f4bb": 1,
      "1f9d1_200d_1f4bc": 1,
      "1f9d1_200d_1f527": 1,
      "1f9d1_200d_1f52c": 1,
      "1f9d1_200d_1f680": 1,
      "1f9d1_200d_1f692": 1,
      "1f9d1_200d_1f91d_200d_1f9d1": 1,
      "1f9d1_200d_1f9af": 1,
      "1f9d1_200d_1f9b0": 1,
      "1f9d1_200d_1f9b1": 1,
      "1f9d1_200d_1f9b2": 1,
      "1f9d1_200d_1f9b3": 1,
      "1f9d1_200d_1f9bc": 1,
      "1f9d1_200d_1f9bd": 1,
      "1f9d1_200d_2695": 1,
      "1f9d1_200d_2696": 1,
      "1f9d1_200d_2708": 1,
      "1f9d4_1f3fb_200d_2640": 1,
      "1f9d4_1f3fb_200d_2642": 1,
      "1f9d4_1f3fc_200d_2640": 1,
      "1f9d4_1f3fc_200d_2642": 1,
      "1f9d4_1f3fd_200d_2640": 1,
      "1f9d4_1f3fd_200d_2642": 1,
      "1f9d4_1f3fe_200d_2640": 1,
      "1f9d4_1f3fe_200d_2642": 1,
      "1f9d4_1f3ff_200d_2640": 1,
      "1f9d4_1f3ff_200d_2642": 1,
      "1f9d4_200d_2640": 1,
      "1f9d4_200d_2642": 1,
      "1f9da_1f3fb": 1,
      "1f9da_1f3fb_200d_2640": 1,
      "1f9da_1f3fb_200d_2642": 1,
      "1f9da_1f3fc": 1,
      "1f9da_1f3fc_200d_2640": 1,
      "1f9da_1f3fc_200d_2642": 1,
      "1f9da_1f3fd": 1,
      "1f9da_1f3fd_200d_2640": 1,
      "1f9da_1f3fd_200d_2642": 1,
      "1f9da_1f3fe": 1,
      "1f9da_1f3fe_200d_2640": 1,
      "1f9da_1f3fe_200d_2642": 1,
      "1f9da_1f3ff": 1,
      "1f9da_1f3ff_200d_2640": 1,
      "1f9da_1f3ff_200d_2642": 1,
      "1f9db_1f3fb": 1,
      "1f9db_1f3fb_200d_2640": 1,
      "1f9db_1f3fb_200d_2642": 1,
      "1f9db_1f3fc": 1,
      "1f9db_1f3fc_200d_2640": 1,
      "1f9db_1f3fc_200d_2642": 1,
      "1f9db_1f3fd": 1,
      "1f9db_1f3fd_200d_2640": 1,
      "1f9db_1f3fd_200d_2642": 1,
      "1f9db_1f3fe": 1,
      "1f9db_1f3fe_200d_2640": 1,
      "1f9db_1f3fe_200d_2642": 1,
      "1f9db_1f3ff": 1,
      "1f9db_1f3ff_200d_2640": 1,
      "1f9db_1f3ff_200d_2642": 1,
      "1f9e7": 1,
      "1f9e8": 1,
      "1f9e9": 1,
      "1f9ea": 1,
      "1f9eb": 1,
      "1f9ec": 1,
      "1f9ed": 1,
      "1f9ee": 1,
      "1f9ef": 1,
      "1f9f0": 1,
      "1f9f1": 1,
      "1f9f2": 1,
      "1f9f3": 1,
      "1f9f4": 1,
      "1f9f5": 1,
      "1f9f6": 1,
      "1f9f7": 1,
      "1f9f8": 1,
      "1f9f9": 1,
      "1f9fa": 1,
      "1f9fb": 1,
      "1f9fc": 1,
      "1f9fd": 1,
      "1f9fe": 1,
      "1f9ff": 1,
      "1fa70": 1,
      "1fa71": 1,
      "1fa72": 1,
      "1fa73": 1,
      "1fa74": 1,
      "1fa78": 1,
      "1fa79": 1,
      "1fa7a": 1,
      "1fa7b": 1,
      "1fa7c": 1,
      "1fa80": 1,
      "1fa81": 1,
      "1fa82": 1,
      "1fa83": 1,
      "1fa84": 1,
      "1fa85": 1,
      "1fa86": 1,
      "1fa90": 1,
      "1fa91": 1,
      "1fa92": 1,
      "1fa93": 1,
      "1fa94": 1,
      "1fa95": 1,
      "1fa96": 1,
      "1fa97": 1,
      "1fa98": 1,
      "1fa99": 1,
      "1fa9a": 1,
      "1fa9b": 1,
      "1fa9c": 1,
      "1fa9d": 1,
      "1fa9e": 1,
      "1fa9f": 1,
      "1faa0": 1,
      "1faa1": 1,
      "1faa2": 1,
      "1faa3": 1,
      "1faa4": 1,
      "1faa5": 1,
      "1faa6": 1,
      "1faa7": 1,
      "1faa8": 1,
      "1faa9": 1,
      "1faaa": 1,
      "1faab": 1,
      "1faac": 1,
      "1fab0": 1,
      "1fab1": 1,
      "1fab2": 1,
      "1fab3": 1,
      "1fab4": 1,
      "1fab5": 1,
      "1fab6": 1,
      "1fab7": 1,
      "1fab8": 1,
      "1fab9": 1,
      "1faba": 1,
      "1fac0": 1,
      "1fac1": 1,
      "1fac2": 1,
      "1fac3": 1,
      "1fac3_1f3fb": 1,
      "1fac3_1f3fc": 1,
      "1fac3_1f3fd": 1,
      "1fac3_1f3fe": 1,
      "1fac3_1f3ff": 1,
      "1fac4": 1,
      "1fac4_1f3fb": 1,
      "1fac4_1f3fc": 1,
      "1fac4_1f3fd": 1,
      "1fac4_1f3fe": 1,
      "1fac4_1f3ff": 1,
      "1fac5": 1,
      "1fac5_1f3fb": 1,
      "1fac5_1f3fc": 1,
      "1fac5_1f3fd": 1,
      "1fac5_1f3fe": 1,
      "1fac5_1f3ff": 1,
      "1fad0": 1,
      "1fad1": 1,
      "1fad2": 1,
      "1fad3": 1,
      "1fad4": 1,
      "1fad5": 1,
      "1fad6": 1,
      "1fad7": 1,
      "1fad8": 1,
      "1fad9": 1,
      "1fae0": 1,
      "1fae1": 1,
      "1fae2": 1,
      "1fae3": 1,
      "1fae4": 1,
      "1fae5": 1,
      "1fae6": 1,
      "1fae7": 1,
      "1faf0": 1,
      "1faf0_1f3fb": 1,
      "1faf0_1f3fc": 1,
      "1faf0_1f3fd": 1,
      "1faf0_1f3fe": 1,
      "1faf0_1f3ff": 1,
      "1faf1": 1,
      "1faf1_1f3fb": 1,
      "1faf1_1f3fb_200d_1faf2_1f3fc": 1,
      "1faf1_1f3fb_200d_1faf2_1f3fd": 1,
      "1faf1_1f3fb_200d_1faf2_1f3fe": 1,
      "1faf1_1f3fb_200d_1faf2_1f3ff": 1,
      "1faf1_1f3fc": 1,
      "1faf1_1f3fc_200d_1faf2_1f3fb": 1,
      "1faf1_1f3fc_200d_1faf2_1f3fd": 1,
      "1faf1_1f3fc_200d_1faf2_1f3fe": 1,
      "1faf1_1f3fc_200d_1faf2_1f3ff": 1,
      "1faf1_1f3fd": 1,
      "1faf1_1f3fd_200d_1faf2_1f3fb": 1,
      "1faf1_1f3fd_200d_1faf2_1f3fc": 1,
      "1faf1_1f3fd_200d_1faf2_1f3fe": 1,
      "1faf1_1f3fd_200d_1faf2_1f3ff": 1,
      "1faf1_1f3fe": 1,
      "1faf1_1f3fe_200d_1faf2_1f3fb": 1,
      "1faf1_1f3fe_200d_1faf2_1f3fc": 1,
      "1faf1_1f3fe_200d_1faf2_1f3fd": 1,
      "1faf1_1f3fe_200d_1faf2_1f3ff": 1,
      "1faf1_1f3ff": 1,
      "1faf1_1f3ff_200d_1faf2_1f3fb": 1,
      "1faf1_1f3ff_200d_1faf2_1f3fc": 1,
      "1faf1_1f3ff_200d_1faf2_1f3fd": 1,
      "1faf1_1f3ff_200d_1faf2_1f3fe": 1,
      "1faf1_1f3ff_200d_1faf_1f3fd": 1,
      "1faf2": 1,
      "1faf2_1f3fb": 1,
      "1faf2_1f3fc": 1,
      "1faf2_1f3fd": 1,
      "1faf2_1f3fe": 1,
      "1faf2_1f3ff": 1,
      "1faf3": 1,
      "1faf3_1f3fb": 1,
      "1faf3_1f3fc": 1,
      "1faf3_1f3fd": 1,
      "1faf3_1f3fe": 1,
      "1faf3_1f3ff": 1,
      "1faf4": 1,
      "1faf4_1f3fb": 1,
      "1faf4_1f3fc": 1,
      "1faf4_1f3fd": 1,
      "1faf4_1f3fe": 1,
      "1faf4_1f3ff": 1,
      "1faf5": 1,
      "1faf5_1f3fb": 1,
      "1faf5_1f3fc": 1,
      "1faf5_1f3fd": 1,
      "1faf5_1f3fe": 1,
      "1faf5_1f3ff": 1,
      "1faf6": 1,
      "1faf6_1f3fb": 1,
      "1faf6_1f3fc": 1,
      "1faf6_1f3fd": 1,
      "1faf6_1f3fe": 1,
      "1faf6_1f3ff": 1,
      "265f": 1,
      "267e": 1,
      "26a7": 1,
      "26f9": 1,
      "26f9_1f3fb": 1,
      "26f9_1f3fc": 1,
      "26f9_1f3fd": 1,
      "26f9_1f3fe": 1,
      "26f9_1f3ff": 1,
      "2764_200d_1f525": 1,
      "2764_200d_1fa79": 1,
      "2764_fe0f_200d_1fa79": 1,
      f0000: 1,
    });
    e.exports = a;
  },
  null
);
__d(
  "FBEmojiUtils",
  ["EmojiRendererData", "SupportedEmoji3"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = /_fe0f/g,
      i = [127995, 127996, 127997, 127998, 127999];
    function a(a) {
      return a
        .map(function (a) {
          return String.fromCodePoint(a);
        })
        .join("");
    }
    var j = function (a) {
        return a
          .filter(function (a) {
            return a.length > 0;
          })
          .map(function (a) {
            return a.codePointAt(0).toString(16);
          })
          .join("_")
          .replace(h, "");
      },
      k = function (a) {
        a = j(a);
        if (a == null) return null;
        return c("SupportedEmoji3")[a] ? a : null;
      };
    b = function (a) {
      return a.replace(h, "");
    };
    d = function (a) {
      var b = [];
      if (!c("EmojiRendererData").isEmojiModifierBase(a[0])) return b;
      i.forEach(function (d) {
        var e = a.reduce(function (a, b) {
          if (
            a.length &&
            c("EmojiRendererData").isEmojiVariationSelector(b) &&
            c("EmojiRendererData").isEmojiModifier(a[a.length - 1])
          )
            return a;
          a.push(b);
          c("EmojiRendererData").isEmojiModifierBase(b) && a.push(d);
          return a;
        }, []);
        k(
          e.map(function (a) {
            return String.fromCodePoint(a);
          })
        ) && b.push(e);
      });
      return b;
    };
    g.codepointsToString = a;
    g.getKeyFromCodepoints = j;
    g.getSupportedKey = k;
    g.normalizeKey = b;
    g.getSupportedModifierSequences = d;
  },
  98
);
__d(
  "SupportedEmojiExtended",
  [],
  function (a, b, c, d, e, f) {
    a = { FACE_WITH_COLON_THREE: 1, LIKE: 1, PACMAN: 1 };
    e.exports = a;
  },
  null
);
__d(
  "SupportedFacebookEmoji",
  ["SupportedCommonEmoji"],
  function (a, b, c, d, e, f) {
    a = babelHelpers["extends"]({}, b("SupportedCommonEmoji"));
    e.exports = a;
  },
  null
);
__d(
  "FBEmojiResource",
  [
    "EmojiImageURL",
    "EmojiRenderer",
    "FBEmojiUtils",
    "SupportedEmoji3",
    "SupportedEmojiExtended",
    "SupportedFacebookEmoji",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      a = d("FBEmojiUtils").normalizeKey(a);
      return c("SupportedFacebookEmoji")[a] || c("SupportedEmoji3")[a]
        ? a
        : null;
    }
    function i(a) {
      if (c("SupportedEmoji3")[a]) return "EMOJI_3";
      else if (c("SupportedFacebookEmoji")[a]) return "FB_EMOJI";
      else return null;
    }
    a = (function () {
      function a(a) {
        this.$1 = a;
      }
      var b = a.prototype;
      b.getImageURL = function (a) {
        var b = this.$1;
        if (c("SupportedEmojiExtended")[b])
          return d("EmojiImageURL").getFBEmojiExtendedURL(b, a);
        var e = i(b);
        switch (e) {
          case "EMOJI_3":
            return d("EmojiImageURL").getEmoji3URL(b, a);
          case "FB_EMOJI":
            return d("EmojiImageURL").getFBEmojiURL(b, a);
        }
        return null;
      };
      a.firstFromText = function (b) {
        b = d("EmojiRenderer").parse(b);
        return b.length === 0 ? null : a.fromCodepoints(b[0].emoji);
      };
      a.fromCodepoints = function (b) {
        b = h(d("FBEmojiUtils").getKeyFromCodepoints(b));
        return b == null ? null : new a(b);
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "FBEmoji.react",
  ["cx", "AbstractFBEmoji.react", "FBEmojiResource", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.codepoints;
      a = a.size;
      var d = b.join("");
      b = c("FBEmojiResource").fromCodepoints(b);
      b = b != null ? b.getImageURL(a) : null;
      return b == null
        ? i.jsx("span", {
            className:
              "_4ay8" +
              (a === 16 ? " _3kkw" : "") +
              (a === 18 ? " _366d" : "") +
              (a === 20 ? " _366e" : "") +
              (a === 24 ? " _48cb" : "") +
              (a === 28 ? " _5-0n" : "") +
              (a === 30 ? " _5-0o" : "") +
              (a === 32 ? " _5-0p" : "") +
              (a === 36 ? " _2oah" : "") +
              (a === 56 ? " _4352" : "") +
              (a === 112 ? " _435o" : ""),
            children: d,
          })
        : i.jsx(c("AbstractFBEmoji.react"), { size: a, src: b, children: d });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "EmoticonsList",
  [],
  function (a, b, c, d, e, f) {
    e.exports = {
      emotes: {
        "O:)": "angel",
        "O:-)": "angel",
        "0:)": "angel",
        "0:-)": "angel",
        "'-_-": "coldsweat",
        ":3": "colonthree",
        "o.O": "confused",
        O_O: "confused",
        o_o: "confused",
        "0_0": "confused",
        "O.o": "confused_rev",
        ":'(": "cry",
        ":'-(": "cry",
        "3:)": "devil",
        "3:-)": "devil",
        ":dog:": "dog",
        "-3-": "flushkiss",
        ":(": "frown",
        ":-(": "frown",
        ":[": "frown",
        "=(": "frown",
        ")=": "frown",
        ":o": "gasp",
        ":-O": "gasp",
        ":O": "gasp",
        ":-o": "gasp",
        "8-)": "glasses",
        "B-)": "glasses",
        "=D": "grin",
        ":-D": "grin",
        ":D": "grin",
        ">:(": "grumpy",
        ">:-(": "grumpy",
        "<3": "heart",
        "&lt;3": "heart",
        "^_^": "kiki",
        "^~^": "kiki",
        ":*": "kiss",
        ":-*": "kiss",
        "(y)": "like",
        ":like:": "like",
        "(Y)": "like",
        T_T: "loudly_crying",
        "T-T": "loudly_crying",
        ToT: "loudly_crying",
        "T.T": "loudly_crying",
        ":-|": "neutral",
        ":|": "neutral",
        ":v": "pacman",
        ":V": "pacman",
        '<(")': "penguin",
        ">_<": "persevere",
        ">.<": "persevere",
        ":poop:": "poop",
        ":|]": "robot",
        "(^^^)": "shark",
        ":)": "smile",
        ":-)": "smile",
        ":]": "smile",
        "(:": "smile",
        "=)": "smilingface",
        "(=": "smilingface",
        "-_-": "squint",
        "B|": "sunglasses",
        "8-|": "sunglasses",
        "8|": "sunglasses",
        "B-|": "sunglasses",
        "8)": "sunglasses",
        "(n)": "thumbsdown",
        "(N)": "thumbsdown",
        ":+1:": "thumbsup",
        ":thumbsup:": "thumbsup",
        ":P": "tongue",
        ":-P": "tongue",
        ":-p": "tongue",
        ":p": "tongue",
        "=P": "tongue",
        ":trans:": "transflag",
        ":/": "unsure",
        ":-/": "unsure",
        ":\\": "unsure",
        ":-\\": "unsure",
        "=/": "unsure",
        "=\\": "unsure",
        ">:o": "upset",
        ">:O": "upset",
        ">:-O": "upset",
        ">:-o": "upset",
        ";)": "wink",
        ";-)": "wink",
        ";*": "winkkiss",
        ";-*": "winkkiss",
        ";-P": "winktongue",
        ";P": "winktongue",
        ";-p": "winktongue",
        ";p": "winktongue",
        ":cheese:": "cheesewedge",
        ":eyes:": "eyes",
        ":peek:": "eyes",
        ":clown:": "clown",
      },
      symbols: {
        angel: "O:)",
        coldsweat: "'-_-",
        colonthree: ":3",
        confused: "o.O",
        confused_rev: "O.o",
        cry: ":'(",
        devil: "3:)",
        dog: ":dog:",
        flushkiss: "-3-",
        frown: ":(",
        gasp: ":o",
        glasses: "8-)",
        grin: "=D",
        grumpy: ">:(",
        heart: "<3",
        kiki: "^_^",
        kiss: ":*",
        like: "(y)",
        loudly_crying: "T_T",
        neutral: ":-|",
        pacman: ":v",
        penguin: '<(")',
        persevere: ">_<",
        poop: ":poop:",
        robot: ":|]",
        shark: "(^^^)",
        smile: ":)",
        smilingface: "=)",
        squint: "-_-",
        sunglasses: "B|",
        thumbsdown: "(n)",
        thumbsup: ":+1:",
        tongue: ":P",
        transflag: ":trans:",
        unsure: ":/",
        upset: ">:o",
        wink: ";)",
        winkkiss: ";*",
        winktongue: ";-P",
        cheesewedge: ":cheese:",
        eyes: ":eyes:",
        clown: ":clown:",
      },
      emoji: {
        angel: "1f607",
        coldsweat: "1f613",
        colonthree: "FACE_WITH_COLON_THREE",
        confused: "1f633",
        confused_rev: "1f633",
        cry: "1f622",
        devil: "1f608",
        dog: "1f436",
        flushkiss: "1f61a",
        frown: "1f641",
        gasp: "1f62e",
        glasses: "1f913",
        grin: "1f603",
        grumpy: "1f620",
        heart: "2764",
        kiki: "1f60a",
        kiss: "1f618",
        like: "LIKE",
        loudly_crying: "1f62d",
        neutral: "1f610",
        pacman: "PACMAN",
        penguin: "1f427",
        persevere: "1f623",
        poop: "1f4a9",
        robot: "1f916",
        shark: "1f988",
        smile: "1f642",
        smilingface: "1f60a",
        squint: "1f611",
        sunglasses: "1f60e",
        thumbsdown: "1f44e",
        thumbsup: "1f44d",
        tongue: "1f61b",
        transflag: "1f3f3_fe0f_200d_26a7_fe0f",
        unsure: "1f615",
        upset: "1f620",
        wink: "1f609",
        winkkiss: "1f618",
        winktongue: "1f61c",
        cheesewedge: "1f9c0",
        eyes: "1f440",
        clown: "1f921",
      },
      regexp:
        /(^|[\s\'\".\(])(O:\)(?!\))|O:\-\)(?!\))|0:\)(?!\))|0:\-\)(?!\))|\'\-_\-|:3|o\.O|O_O|o_o|0_0|O\.o|:\'\(|:\'\-\(|3:\)(?!\))|3:\-\)(?!\))|:dog:|\-3\-|:\(|:\-\(|:\[|=\(|\)=|:o|:\-O|:O|:\-o|8\-\)(?!\))|B\-\)(?!\))|=D|:\-D|:D|>:\(|>:\-\(|<3|&lt;3|\^_\^|\^~\^|:\*|:\-\*|\(y\)(?!\))|:like:|\(Y\)(?!\))|T_T|T\-T|ToT|T\.T|:\-\||:\||:v|:V|<\(\"\)(?!\))|>_<|>\.<|:poop:|:\|\]|\(\^\^\^\)(?!\))|:\)(?!\))|:\-\)(?!\))|:\]|\(:|=\)(?!\))|\(=|\-_\-|B\||8\-\||8\||B\-\||8\)(?!\))|\(n\)(?!\))|\(N\)(?!\))|:\+1:|:thumbsup:|:P|:\-P|:\-p|:p|=P|:trans:|:\/|:\-\/|:\\|:\-\\|=\/|=\\|>:o|>:O|>:\-O|>:\-o|;\)(?!\))|;\-\)(?!\))|;\*|;\-\*|;\-P|;P|;\-p|;p|:cheese:|:eyes:|:peek:|:clown:)([\s\'\".,!?\)]|<br>|$)/,
      noncapturingRegexp:
        /(?:^|[\s\'\".\(])(O:\)(?!\))|O:\-\)(?!\))|0:\)(?!\))|0:\-\)(?!\))|\'\-_\-|:3|o\.O|O_O|o_o|0_0|O\.o|:\'\(|:\'\-\(|3:\)(?!\))|3:\-\)(?!\))|:dog:|\-3\-|:\(|:\-\(|:\[|=\(|\)=|:o|:\-O|:O|:\-o|8\-\)(?!\))|B\-\)(?!\))|=D|:\-D|:D|>:\(|>:\-\(|<3|&lt;3|\^_\^|\^~\^|:\*|:\-\*|\(y\)(?!\))|:like:|\(Y\)(?!\))|T_T|T\-T|ToT|T\.T|:\-\||:\||:v|:V|<\(\"\)(?!\))|>_<|>\.<|:poop:|:\|\]|\(\^\^\^\)(?!\))|:\)(?!\))|:\-\)(?!\))|:\]|\(:|=\)(?!\))|\(=|\-_\-|B\||8\-\||8\||B\-\||8\)(?!\))|\(n\)(?!\))|\(N\)(?!\))|:\+1:|:thumbsup:|:P|:\-P|:\-p|:p|=P|:trans:|:\/|:\-\/|:\\|:\-\\|=\/|=\\|>:o|>:O|>:\-O|>:\-o|;\)(?!\))|;\-\)(?!\))|;\*|;\-\*|;\-P|;P|;\-p|;p|:cheese:|:eyes:|:peek:|:clown:)(?:[\s\'\".,!?\)]|<br>|$)/,
    };
  },
  null
);
__d(
  "FBEmoticon.react",
  ["fbt", "AbstractFBEmoji.react", "EmoticonsList", "FBEmojiResource", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.emoticon,
        e = a.name;
      a = a.size;
      var f = d("EmoticonsList").emoji[e];
      if (!f) return i.jsx("span", { children: b });
      f = new (c("FBEmojiResource"))(f);
      f = f.getImageURL(a);
      if (f == null) return i.jsx("span", { children: b });
      e = h._("\u00e9motic\u00f4ne {emoticonName}", [
        h._param("emoticonName", e),
      ]);
      return i.jsx(c("AbstractFBEmoji.react"), {
        size: a,
        src: f,
        title: e,
        children: b,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "iterateEmoji",
  ["EmojiRenderer"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, c) {
      var e = 0,
        f = d("EmojiRenderer").parse(a);
      f.forEach(function (d) {
        var f = d.offset;
        f > e && c(a.substr(e, f - e));
        b(d.emoji);
        e = f + d.length;
      });
      c(a.substr(e, a.length - e));
    }
    g["default"] = a;
  },
  98
);
__d(
  "iterateEmoticons",
  ["EmoticonsList"],
  function (a, b, c, d, e, f, g) {
    function a(a, b, c) {
      var e, f, g;
      a = a;
      while (a) {
        f = d("EmoticonsList").regexp.exec(a);
        if (f)
          (e = f.index + f[1].length),
            (g = a.substr(0, e)),
            (f = f[2]),
            (e = a.substr(e + f.length)),
            c(g),
            b(f, d("EmoticonsList").emotes[f]),
            (a = e);
        else break;
      }
      c(a);
    }
    g["default"] = a;
  },
  98
);
__d(
  "TextWithEmoticons.react",
  [
    "BaseTextWithDecoration.react",
    "FBEmoji.react",
    "FBEmoticon.react",
    "iterateEmoji",
    "iterateEmoticons",
    "memoizeWithArgs",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function i(a, b) {
      return h.jsx(c("FBEmoji.react"), { codepoints: a, size: b });
    }
    i.displayName = i.name + " [from " + f.id + "]";
    function j(a, b, d) {
      return h.jsx(c("FBEmoticon.react"), { emoticon: a, name: b, size: d });
    }
    j.displayName = j.name + " [from " + f.id + "]";
    function k(a) {
      return function (b, d, e) {
        c("iterateEmoji")(
          b,
          function (b) {
            return d(i(b, a));
          },
          e
        );
      };
    }
    function l(a) {
      return function (b, d, e) {
        c("iterateEmoticons")(
          b,
          function (b, c) {
            return d(j(b, c, a));
          },
          e
        );
      };
    }
    var m = c("memoizeWithArgs")(
      function (a, b, c) {
        if (a && b) return [k(c), l(c)];
        else if (b) return [l(c)];
        else return [k(c)];
      },
      function (a, b, c) {
        return a.toString() + "_" + b.toString() + "_" + c;
      }
    );
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var d = b.prototype;
      d.shouldComponentUpdate = function (a) {
        return a.text !== this.props.text || a.size !== this.props.size;
      };
      d.render = function () {
        var a = this.props,
          b = a.text;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["text"]);
        if (typeof b === "string")
          return this.props.isWhitespace
            ? h.jsx("span", { className: "whitespace", children: b })
            : h.jsx(
                c("BaseTextWithDecoration.react"),
                babelHelpers["extends"]({}, a, {
                  text: b,
                  decorators: [].concat(
                    m(
                      this.props.renderEmoji,
                      this.props.renderEmoticons,
                      this.props.size
                    ),
                    this.props.decorators
                  ),
                })
              );
        else return h.jsx("span", { children: b });
      };
      return b;
    })(h.Component);
    a.defaultProps = {
      renderEmoji: !0,
      renderEmoticons: !0,
      size: 16,
      decorators: [],
    };
    g["default"] = a;
  },
  98
);
__d(
  "TextWithEntities.react",
  [
    "BaseTextWithEntities.react",
    "Link.react",
    "TextWithEmoticons.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function i(a) {
      return a.replace(/<3\b|&hearts;/g, "\u2665");
    }
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, d;
        for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
          f[g] = arguments[g];
        return (
          ((b = d = a.call.apply(a, [this].concat(f)) || this),
          (d.$1 = function (a) {
            if (d.props.renderEmoticons || d.props.renderEmoji) {
              var b = a.trim();
              return h.jsx(c("TextWithEmoticons.react"), {
                isWhitespace: b.length === 0,
                text: a,
                renderEmoticons: d.props.renderEmoticons,
                renderEmoji: d.props.renderEmoji,
                size: d.props.showEmojisStandalone ? 32 : 16,
              });
            } else return i(a);
          }),
          (d.$2 = function (a, b) {
            if (d.props.interpolator) return d.props.interpolator(a, b);
            else if (
              b.entity &&
              b.entity.url !== void 0 &&
              b.entity.url !== null
            )
              return h.jsx(c("Link.react"), { href: b.entity, children: a });
            else if (b.entity && b.entity.url === void 0)
              return h.jsx(c("Link.react"), { href: b.entity, children: a });
            else return a;
          }),
          b) || babelHelpers.assertThisInitialized(d)
        );
      }
      var d = b.prototype;
      d.render = function () {
        return h.jsx(
          c("BaseTextWithEntities.react"),
          babelHelpers["extends"]({}, this.props, {
            textRenderer: this.$1,
            rangeRenderer: this.$2,
            ranges: this.props.ranges,
            imageRanges: this.props.imageRanges,
            aggregatedRanges: this.props.aggregatedRanges,
            metaRanges: this.props.metaRanges,
            textDelightRanges: this.props.textDelightRanges,
            text: this.props.text,
          })
        );
      };
      return b;
    })(h.Component);
    g["default"] = a;
  },
  98
);
__d(
  "SoundPlayer",
  ["ODS", "URI", "createArrayFromMixed"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = new Map();
    function i(a) {
      var b = new (c("URI"))(a);
      return b.getDomain()
        ? a
        : new (c("URI"))(window.location.href).setPath(b.getPath()).toString();
    }
    function j(a) {
      a = new (c("URI"))(a).getPath();
      if (/\.mp3$/.test(a)) return "audio/mpeg";
      return /\.og[ga]$/.test(a) ? "audio/ogg" : "";
    }
    var k = function (a, b) {
      for (
        var a = c("createArrayFromMixed")(a),
          d = Array.isArray(a),
          e = 0,
          a = d
            ? a
            : a[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        var f;
        if (d) {
          if (e >= a.length) break;
          f = a[e++];
        } else {
          e = a.next();
          if (e.done) break;
          f = e.value;
        }
        f = f;
        if (h.has(f)) return;
        var g = document.createElement("audio");
        if (!g || !g.canPlayType || !g.canPlayType(j(f))) continue;
        g.preload = "auto";
        g.src = i(f);
        document.body && document.body.appendChild(g);
        h.set(f, g);
        (b == null ? void 0 : b.onPreload) != null && b.onPreload(g);
        return;
      }
    };
    a = function (a, b) {
      b === void 0 && (b = {});
      for (
        var a = c("createArrayFromMixed")(a),
          e = Array.isArray(a),
          f = 0,
          a = e
            ? a
            : a[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        var g;
        if (e) {
          if (f >= a.length) break;
          g = a[f++];
        } else {
          f = a.next();
          if (f.done) break;
          g = f.value;
        }
        g = g;
        h.has(g) || k(g, b.callbacks);
        g = h.get(g);
        if (!g) continue;
        b.loop && g.setAttribute("loop", "");
        b.volume && (g.volume = b.volume);
        g = g.play();
        g != null && typeof g.then === "function"
          ? g
              .then(function (a) {
                d("ODS").bumpEntityKey(2966, "sound_player", "play.success");
              })
              ["catch"](function (a) {
                d("ODS").bumpEntityKey(2966, "sound_player", "play.error");
              })
          : d("ODS").bumpEntityKey(2966, "sound_player", "non_promise");
        return;
      }
    };
    b = function (a) {
      for (
        var a = c("createArrayFromMixed")(a),
          b = Array.isArray(a),
          d = 0,
          a = b
            ? a
            : a[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        var e;
        if (b) {
          if (d >= a.length) break;
          e = a[d++];
        } else {
          d = a.next();
          if (d.done) break;
          e = d.value;
        }
        e = e;
        e = h.get(e);
        if (e) {
          e.pause();
          return;
        }
      }
    };
    e = function (a) {
      for (
        var a = c("createArrayFromMixed")(a),
          b = Array.isArray(a),
          d = 0,
          a = b
            ? a
            : a[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        var e;
        if (b) {
          if (d >= a.length) break;
          e = a[d++];
        } else {
          d = a.next();
          if (d.done) break;
          e = d.value;
        }
        e = e;
        var f = h.get(e);
        f && (f.pause(), f.removeAttribute("src"), (f.src = i(e)));
      }
    };
    g.preload = k;
    g.play = a;
    g.pause = b;
    g.stop = e;
  },
  98
);
__d(
  "SoundSynchronizer",
  ["SoundPlayer", "WebStorage", "createArrayFromMixed"],
  function (a, b, c, d, e, f) {
    var g,
      h = "fb_sounds_playing3";
    function i() {
      var a = (g || (g = b("WebStorage"))).getLocalStorage();
      if (a)
        try {
          a = a[h];
          if (a) {
            a = JSON.parse(a);
            if (Array.isArray(a)) return a;
          }
        } catch (a) {}
      return [];
    }
    function j(a) {
      var c = (g || (g = b("WebStorage"))).getLocalStorage();
      if (c) {
        var d = i();
        d.push(a);
        while (d.length > 5) d.shift();
        try {
          c[h] = JSON.stringify(d);
        } catch (a) {}
      }
    }
    function k(a) {
      return i().some(function (b) {
        return b === a;
      });
    }
    a = {
      play: function (a, c, d, e) {
        a = b("createArrayFromMixed")(a);
        c = c || a[0] + Math.floor(Date.now() / 1e3);
        if (k(c)) return;
        b("SoundPlayer").play(a, { loop: !!d, callbacks: e });
        j(c);
      },
      isSupported: function () {
        return !!(g || (g = b("WebStorage"))).getLocalStorage();
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "SoundRPC",
  ["FBJSON", "SecurePostMessage", "SoundSynchronizer", "cr:950105"],
  function (a, b, c, d, e, f, g) {
    function h(a, b, c, e) {
      d("SoundSynchronizer").play(a, b, c, e);
    }
    function a(a, b, c, e) {
      b = { name: "SoundRPC", data: { paths: b, sync: c, loop: e } };
      d("SecurePostMessage").sendMessageAllowAnyOrigin_UNSAFE(
        a,
        d("FBJSON").stringify(b)
      );
    }
    function c() {
      return !!window.postMessage;
    }
    function e() {
      var a = function (a) {
        if (!/\.facebook.com$/.test(a.origin)) return;
        var b = {};
        try {
          a = a.data;
          typeof a === "string" && (b = d("FBJSON").parse(a));
        } catch (a) {}
        a = b;
        b = a.name;
        a = a.data;
        b === "SoundRPC" &&
          a != null &&
          typeof a === "object" &&
          h(a.paths, a.sync, a.loop);
      };
      b("cr:950105") != null
        ? b("cr:950105").listen(window, "message", a)
        : window.addEventListener("message", a);
    }
    g.playLocal = h;
    g.playRemote = a;
    g.supportsRPC = c;
    g._listen = e;
  },
  98
);
__d(
  "Sound",
  [
    "SoundInitialData",
    "SoundPlayer",
    "SoundRPC",
    "SoundSynchronizer",
    "URI",
    "UserAgent_DEPRECATED",
    "Visibility",
    "isFacebookURI",
  ],
  function (a, b, c, d, e, f, g) {
    var h = null,
      i = !1;
    function a(a) {}
    function j(a, b, c, e) {
      h
        ? d("SoundRPC").playRemote(h.contentWindow, a, b, !1)
        : d("SoundRPC").playLocal(a, b, c, e),
        (i = !0);
    }
    function b() {
      return i;
    }
    function e(a, b, d) {
      if (!i && c("Visibility").isHidden()) return;
      j(a, b, d);
    }
    function f(a) {
      h || d("SoundPlayer").stop(a);
    }
    var k = new (c("URI"))(location.href);
    k.getSubdomain() &&
      k.getSubdomain() !== "comet" &&
      k.getSubdomain() !== "www" &&
      k.setSubdomain("www");
    var l = k.getDomain();
    function m() {
      if (d("UserAgent_DEPRECATED").ie() < 9) return !1;
      return c("SoundInitialData").RPC_DISABLED
        ? !1
        : d("SoundSynchronizer").isSupported() && d("SoundRPC").supportsRPC();
    }
    c("isFacebookURI")(k) &&
      location.host !== l &&
      m() &&
      ((h = document.createElement("iframe")),
      h.setAttribute("src", "//" + l + "/sound_iframe.php"),
      (h.style.display = "none"),
      document.body && document.body.appendChild(h));
    g.init = a;
    g.play = j;
    g.hasPlayedSoundBefore = b;
    g.playOnlyIfImmediate = e;
    g.stop = f;
  },
  98
);
__d(
  "NotificationSound",
  ["Sound"],
  function (a, b, c, d, e, f, g) {
    var h = 5e3;
    d("Sound").init(["audio/mpeg"]);
    a = (function () {
      function a(a) {
        (this.$1 = a), (this.$2 = 0);
      }
      var b = a.prototype;
      b.play = function (a) {
        if (!this.$1) return !1;
        var b = Date.now();
        if (b - this.$2 < h) return !1;
        this.$2 = b;
        d("Sound").playOnlyIfImmediate(this.$1, a, !1);
        return !0;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "enumUtils",
  ["nullthrows"],
  function (a, b, c, d, e, f, g) {
    function h(a, b) {
      return Object.values(b).find(function (b) {
        return b === a;
      });
    }
    function a(a, b) {
      return a == null ? null : h(a, b);
    }
    function i(a, b) {
      if (a != null) {
        b = Object.keys(b);
        for (var c = 0; c < b.length; c++) {
          var d = b[c];
          if (d === a) return d;
        }
      }
      return null;
    }
    function j(a, b) {
      return c("nullthrows")(h(a, b));
    }
    function b(a, b) {
      return c("nullthrows")(i(a, b));
    }
    function d(a, b) {
      var c = [];
      for (
        var a = a,
          d = Array.isArray(a),
          e = 0,
          a = d
            ? a
            : a[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        var f;
        if (d) {
          if (e >= a.length) break;
          f = a[e++];
        } else {
          e = a.next();
          if (e.done) break;
          f = e.value;
        }
        f = f;
        c.push(j(f, b));
      }
      return c;
    }
    function k(a, b) {
      return (b = b[a]) != null ? b : null;
    }
    function l(a, b) {
      return c("nullthrows")(k(a, b));
    }
    function e(a, b) {
      var c = [];
      for (
        var a = a,
          d = Array.isArray(a),
          e = 0,
          a = d
            ? a
            : a[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        var f;
        if (d) {
          if (e >= a.length) break;
          f = a[e++];
        } else {
          e = a.next();
          if (e.done) break;
          f = e.value;
        }
        f = f;
        c.push(l(f, b));
      }
      return c;
    }
    function m(a, b) {
      var c;
      Object.keys(b).forEach(function (d) {
        b[d] === a && (c = d);
      });
      return c;
    }
    function f(a, b) {
      return c("nullthrows")(m(a, b));
    }
    g.coerce = h;
    g.coerceNullable = a;
    g.coerceKey = i;
    g.assert = j;
    g.assertKey = b;
    g.assertIterable = d;
    g.coerceFromKey = k;
    g.assertFromKey = l;
    g.assertIterableFromKey = e;
    g.enumValueToKey = m;
    g.enumValueToKeyEnforcing = f;
  },
  98
);
__d(
  "isEmptyObject",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      for (a in a) return !1;
      return !0;
    }
    f["default"] = a;
  },
  66
);
__d(
  "PhotosMimeType",
  [],
  function (a, b, c, d, e, f) {
    function g(a) {
      return h(a)[0] === "image";
    }
    function a(a) {
      var b = h(a);
      return g(a) && (b[1] === "jpeg" || b[1] === "pjpeg");
    }
    function h(a) {
      return a.split("/");
    }
    f.isImage = g;
    f.isJpeg = a;
  },
  66
);
__d(
  "isDevelopersURI",
  ["isFacebookURI"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      return c("isFacebookURI")(a) && a.getSubdomain() === "developers";
    }
    g["default"] = a;
  },
  98
);
__d(
  "LoadObjectOperation",
  ["$InternalEnum"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("$InternalEnum").Mirrored([
      "CREATING",
      "DELETING",
      "LOADING",
      "UPDATING",
    ]);
    c = a;
    f["default"] = c;
  },
  66
);
__d(
  "LoadObject",
  [
    "invariant",
    "LoadObjectOperation",
    "immutable",
    "nullthrows",
    "shallowEqual",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = [void 0, null, !1, !0, 0, ""];
    var i = function (a, b) {
        return Object.is(a, b) || c("immutable").is(a, b);
      },
      j = "SECRET_" + Math.random(),
      k = new Map(
        new Map(
          a.map(function (a) {
            return [
              a,
              new Map([
                [!0, new Map()],
                [!1, new Map()],
              ]),
            ];
          })
        )
      );
    b = c("immutable").Record({
      operation: void 0,
      value: void 0,
      error: void 0,
      internalHasValue: !1,
    });
    d = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c, d, e, f) {
        b === j || h(0, 2084);
        return (
          a.call(this, {
            operation: c,
            value: d,
            error: e,
            internalHasValue: f,
          }) || this
        );
      }
      b.$LoadObject1 = function (a, c, d, e) {
        var f = b.$LoadObject2(a, c, d, e);
        return f || new b(j, a, c, d, e);
      };
      b.$LoadObject2 = function (a, d, e, f) {
        if (e !== void 0 || !k.has(d)) return null;
        var g = c("nullthrows")(k.get(d));
        g = c("nullthrows")(g.get(f));
        if (!g.has(a)) {
          d = new b(j, a, d, e, f);
          g.set(a, d);
        }
        return c("nullthrows")(g.get(a));
      };
      var d = b.prototype;
      d.getOperation = function () {
        return this.get("operation");
      };
      d.getValue = function () {
        return this.get("value");
      };
      d.getValueEnforcing = function () {
        this.hasValue() || h(0, 2085);
        var a = this.getValue();
        return a;
      };
      d.getError = function () {
        return this.get("error");
      };
      d.getErrorEnforcing = function () {
        this.hasError() || h(0, 2086);
        return this.get("error");
      };
      d.hasValue = function () {
        return !!this.get("internalHasValue");
      };
      d.hasOperation = function () {
        return this.getOperation() !== void 0;
      };
      d.hasError = function () {
        return this.getError() !== void 0;
      };
      d.isEmpty = function () {
        return !this.hasValue() && !this.hasOperation() && !this.hasError();
      };
      d.setOperation = function (a) {
        var c = b.$LoadObject2(
          a,
          this.getValue(),
          this.getError(),
          this.hasValue()
        );
        return c || this.set("operation", a);
      };
      d.setValue = function (a) {
        var c = b.$LoadObject2(this.getOperation(), a, this.getError(), !0);
        return c || this.set("value", a).set("internalHasValue", !0);
      };
      d.setError = function (a) {
        var c = b.$LoadObject2(
          this.getOperation(),
          this.getValue(),
          a,
          this.hasValue()
        );
        return c || this.set("error", a);
      };
      d.removeOperation = function () {
        var a = this.remove("operation"),
          c = b.$LoadObject2(
            a.getOperation(),
            a.getValue(),
            a.getError(),
            a.hasValue()
          );
        return c || a;
      };
      d.removeValue = function () {
        var a = this.remove("value").remove("internalHasValue"),
          c = b.$LoadObject2(
            a.getOperation(),
            a.getValue(),
            a.getError(),
            a.hasValue()
          );
        return c || a;
      };
      d.removeError = function () {
        var a = this.remove("error"),
          c = b.$LoadObject2(
            a.getOperation(),
            a.getValue(),
            a.getError(),
            a.hasValue()
          );
        return c || a;
      };
      d.isCreating = function () {
        return this.getOperation() === c("LoadObjectOperation").CREATING;
      };
      d.isDeleting = function () {
        return this.getOperation() === c("LoadObjectOperation").DELETING;
      };
      d.isDone = function () {
        return !this.hasOperation();
      };
      d.hasValueWithoutError = function () {
        return this.isDone() && this.hasValue() && !this.hasError();
      };
      d.isLoading = function () {
        return this.getOperation() === c("LoadObjectOperation").LOADING;
      };
      d.isLoadingOrEmpty = function () {
        return this.isLoading() || this.isEmpty();
      };
      d.isUpdating = function () {
        return this.getOperation() === c("LoadObjectOperation").UPDATING;
      };
      d.creating = function () {
        return this.setOperation(c("LoadObjectOperation").CREATING);
      };
      d.deleting = function () {
        return this.setOperation(c("LoadObjectOperation").DELETING);
      };
      d.done = function () {
        return this.removeOperation();
      };
      d.loading = function () {
        return this.setOperation(c("LoadObjectOperation").LOADING);
      };
      d.updating = function () {
        return this.setOperation(c("LoadObjectOperation").UPDATING);
      };
      d.map = function (a) {
        if (!this.hasValue()) return this;
        var c = this.getValueEnforcing();
        a = a(c);
        return a instanceof b ? a : this.setValue(a);
      };
      d.mapValue = function (a) {
        if (!this.hasValue()) return this;
        var c = this.getValueEnforcing();
        a = a(c);
        if (a instanceof b) {
          !a.hasError() &&
            this.hasError() &&
            (a = a.setError(this.getErrorEnforcing()));
          !a.hasOperation() &&
            this.hasOperation() &&
            (a = a.setOperation(this.getOperation()));
          return a;
        } else return this.setValue(a);
      };
      d.mapError = function (a) {
        if (!this.hasError()) return this;
        var c = this.getErrorEnforcing();
        a = a(c);
        return a instanceof b ? a : this.setError(a);
      };
      d.match = function (a, b) {
        if (this.hasOperation()) {
          var d = a.loading;
          this.isCreating() && a.creating
            ? (d = a.creating)
            : this.isUpdating() && a.updating
            ? (d = a.updating)
            : this.isDeleting() && a.deleting && (d = a.deleting);
          return d(this.value, this.error, b);
        }
        if (this.hasError())
          return this.hasValue() && a.loadedWithError
            ? c("nullthrows")(a.loadedWithError)(
                this.getValueEnforcing(),
                this.getErrorEnforcing(),
                b
              )
            : a.error(this.getErrorEnforcing(), b);
        return this.hasValue()
          ? a.loaded(this.getValueEnforcing(), b)
          : a.empty
          ? a.empty(b)
          : a.error(new Error("No value"), b);
      };
      d.equals = function (a, c) {
        return b.equals(this, a, c);
      };
      d.shallowEquals = function (a) {
        return b.equals(this, a, c("shallowEqual"));
      };
      b.equals = function (a, b, c) {
        var d = a === b;
        if (!a || !b || d) return d;
        if (
          a.getOperation() !== b.getOperation() ||
          a.hasError() !== b.hasError() ||
          a.hasValue() !== b.hasValue()
        )
          return !1;
        if (a.hasError() && b.hasError() && a.getError() === b.getError())
          return !0;
        d = a.getValue();
        a = b.getValue();
        if (!d || !a) return d === a;
        c = (b = c) != null ? b : i;
        return c(d, a);
      };
      b.shallowEquals = function (a, d) {
        return b.equals(a, d, c("shallowEqual"));
      };
      b.creating = function () {
        return b.$LoadObject1(
          c("LoadObjectOperation").CREATING,
          void 0,
          void 0,
          !1
        );
      };
      b.deleting = function () {
        return b.$LoadObject1(
          c("LoadObjectOperation").DELETING,
          void 0,
          void 0,
          !1
        );
      };
      b.empty = function () {
        return b.$LoadObject1(void 0, void 0, void 0, !1);
      };
      b.loading = function () {
        return b.$LoadObject1(
          c("LoadObjectOperation").LOADING,
          void 0,
          void 0,
          !1
        );
      };
      b.updating = function () {
        return b.$LoadObject1(
          c("LoadObjectOperation").UPDATING,
          void 0,
          void 0,
          !1
        );
      };
      b.withError = function (a) {
        return b.$LoadObject1(void 0, void 0, a, !1);
      };
      b.withValue = function (a) {
        return b.$LoadObject1(void 0, a, void 0, !0);
      };
      return b;
    })(b);
    g["default"] = d;
  },
  98
);
__d(
  "NotifClickEventsFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("getFalcoLogPolicy_DO_NOT_USE")("1835463");
    b = d("FalcoLoggerInternal").create("notif_click_events", a);
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "filterNulls",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      var b = [];
      for (
        var a = a,
          c = Array.isArray(a),
          d = 0,
          a = c
            ? a
            : a[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        var e;
        if (c) {
          if (d >= a.length) break;
          e = a[d++];
        } else {
          d = a.next();
          if (d.done) break;
          e = d.value;
        }
        e = e;
        e != null && b.push(e);
      }
      return b;
    }
    f["default"] = a;
  },
  66
);
