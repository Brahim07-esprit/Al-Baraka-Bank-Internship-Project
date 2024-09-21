/*FB_PKG_DELIM*/

__d(
  "FBLikeSvgIcon.react",
  ["react", "useCometUniqueID"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.alt,
        d = a.className,
        e = a.color;
      a = a.size;
      a = a === void 0 ? 20 : a;
      var f = b != null,
        g = c("useCometUniqueID")();
      return h.jsxs("svg", {
        "aria-hidden": f ? void 0 : !0,
        "aria-labelledby": f ? g : void 0,
        className: d,
        height: a,
        viewBox: "0 0 16 16",
        width: a,
        children: [
          f && h.jsx("title", { id: g, children: b }),
          h.jsx("path", {
            d: "M16,9.1c0-0.8-0.3-1.1-0.6-1.3c0.2-0.3,0.3-0.7,0.3-1.2c0-1-0.8-1.7-2.1-1.7h-3.1c0.1-0.5,0.2-1.3,0.2-1.8 c0-1.1-0.3-2.4-1.2-3C9.3,0.1,9,0,8.7,0C8.1,0,7.7,0.2,7.6,0.4C7.5,0.5,7.5,0.6,7.5,0.7L7.6,3c0,0.2,0,0.4-0.1,0.5L5.7,6.6 c0,0-0.1,0.1-0.1,0.1l0,0l0,0L5.3,6.8C5.1,7,5,7.2,5,7.4v6.1c0,0.2,0.1,0.4,0.2,0.5c0.1,0.1,1,1,2,1h5.2c0.9,0,1.4-0.3,1.8-0.9 c0.3-0.5,0.2-1,0.1-1.4c0.5-0.2,0.9-0.5,1.1-1.2c0.1-0.4,0-0.8-0.2-1C15.6,10.3,16,9.9,16,9.1z",
            fill: e,
          }),
          h.jsx("path", {
            d: "M3.3,6H0.7C0.3,6,0,6.3,0,6.7v8.5C0,15.7,0.3,16,0.7,16h2.5C3.7,16,4,15.7,4,15.3V6.7C4,6.3,3.7,6,3.3,6z",
            fill: e,
          }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "MWLikeSvgIcon.react",
  ["cr:1798"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:1798");
  },
  98
);
__d(
  "MessengerColors",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      b === void 0 && (b = !1);
      var c = 100 / (a.length - 1);
      b = b ? a.slice() : a.slice().reverse();
      a = b
        .map(function (a, b) {
          return a + " " + b * c + "%";
        })
        .join(",");
      return "radial-gradient(circle at center 75%, " + a + ")";
    }
    function b(a, b, c) {
      var d = {};
      if (a) {
        b != null && b !== ""
          ? (d.backgroundColor = b)
          : (d.backgroundColor = c);
        if (a.length && a.length > 0)
          if (a.length === 1) d.backgroundColor = a[0];
          else if (a.length === 2)
            d.backgroundImage = "linear-gradient(" + a[0] + ", " + a[1] + ")";
          else {
            var e = a.length,
              f = 100 / (e - 1);
            e = a
              .map(function (a, b) {
                return a + " " + b * f + "%";
              })
              .join(", ");
            d.backgroundImage = "linear-gradient(" + e + ")";
          }
      } else
        b != null && b !== ""
          ? (d.backgroundColor = b)
          : (d.backgroundColor = c);
      return d;
    }
    f.makeRadialGradient = a;
    f.makeLinearGradient = b;
  },
  66
);
__d(
  "MessengerCustomColorUtils.bs",
  ["cssVar", "CurrentUser"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    function i(a) {
      if (c("CurrentUser").isWorkUser()) return "#373e4c";
      else return "#0099ff";
    }
    function a(a) {
      a = a.solid_color;
      if (a == null) return i();
      else return a;
    }
    g.defaultColor = i;
    g.customColorOrBlue = a;
  },
  98
);
__d(
  "MessengerHotLikeIconSVGM4React.bs",
  [
    "cx",
    "CurrentUser",
    "MessengerColors",
    "MessengerCustomColorUtils.bs",
    "MessengerEnvironment",
    "gkx",
    "react",
    "uniqueID",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function j(a) {
      return i.jsx("path", {
        d: "M10,30 L7.75,30 C6.625,30 6,27.7515306 6,23.3673469 C6,18.9831633 6.625,16.7346939 7.75,16.7346939 L10,16.7346939 C10.552,16.7346939 11,17.1918367 11,17.755102 L11,28.9795918 C11,29.5428571 10.552,30 10,30 M17,6.02040816 C17,5.44540816 17.4195,5.00255102 18,5 C19.2035,5 22,5.79081633 22,10.6122449 C22,12.2443878 21.8015,13.130102 21.7195,13.7163265 C21.719,13.7183673 21.719,13.7204082 21.7185,13.722449 C21.6865,13.9566327 21.872,14.1647959 22.113,14.1647959 C26.908,14.1647959 29.469,15.4336735 29.469,16.7290816 C29.469,17.3612245 29.211,17.9321429 28.7975,18.3535714 C29.513,18.7591837 30,19.5091837 30,20.3780612 C30,21.3642857 29.4255,22.2045918 28.5475,22.5515306 C28.821,22.9326531 28.9845,23.3954082 28.9845,23.8969388 C28.9845,24.9704082 28.3395,25.8653061 27.3365,26.1438776 C27.4285,26.377551 27.4845,26.6290816 27.4845,26.8943878 C27.4845,28.0459184 25.5485,28.9795918 21,28.9795918 C17.675,28.9795918 15.3815,28.3857143 14.5,27.9591837 C13.851,27.6454082 13,27.0770408 13,25.4081633 L13,18.7755102 C13,15.0403061 17.25,13.7760204 17.25,10.1020408 C17.25,7.78826531 17,6.81326531 17,6.02040816",
        fill: a,
      });
    }
    j.displayName = j.name + " [from " + f.id + "]";
    function a(a) {
      a = a.color;
      a = j(a);
      if (
        (c("MessengerEnvironment").messengerui &&
          !c("CurrentUser").isWorkUser()) ||
        c("gkx")("1072568")
      )
        return i.jsx("svg", {
          className: "_7oal",
          width: "36px",
          height: "36px",
          viewBox: "0 1 36 36",
          children: a,
        });
      else
        return i.jsx("svg", {
          width: "32px",
          height: "32px",
          viewBox: "0 0 36 36",
          children: a,
        });
    }
    function b(a) {
      a = a.thread;
      var b = i.useState(function () {
        return c("uniqueID")();
      });
      b = b[0];
      var e = j("black");
      return i.jsxs(i.Fragment, {
        children: [
          i.jsxs("svg", {
            viewBox: "0 0 36 36",
            style: { height: "100%", position: "absolute", width: "100%" },
            children: [
              i.jsxs("mask", {
                id: b,
                children: [
                  i.jsx("rect", {
                    x: "0",
                    y: "0",
                    width: "100%",
                    height: "100%",
                    fill: "white",
                  }),
                  e,
                ],
              }),
              i.jsx("rect", {
                className: "_8rsr",
                width: "100%",
                height: "100%",
                mask: "url(#" + b + ")",
                fill: "white",
              }),
            ],
          }),
          i.jsx("div", {
            style: babelHelpers["extends"](
              {},
              d("MessengerColors").makeLinearGradient(
                a.gradient_colors,
                a.solid_color,
                d("MessengerCustomColorUtils.bs").defaultColor()
              ),
              {
                backgroundAttachment: "fixed",
                height: "95%",
                margin: "auto",
                width: "95%",
              }
            ),
          }),
        ],
      });
    }
    b.displayName = b.name + " [from " + f.id + "]";
    e = a;
    h = b;
    g.pathHotLike = j;
    g.make = e;
    g.makeWithGradient = h;
  },
  98
);
__d(
  "MessengerHotLikeSVGReact.bs",
  [
    "cssVar",
    "cx",
    "fbt",
    "CurrentUser",
    "MWLikeSvgIcon.react",
    "MessengerEnvironment",
    "bs_belt_Option",
    "joinClasses",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i, j) {
    "use strict";
    var k = d("react"),
      l = j._("Pouce vers le haut");
    function a(a) {
      var b = a.className;
      a = a.color;
      var d,
        e = 0;
      a == null || a === "" ? (e = 1) : (d = a);
      e === 1 &&
        (d = c("CurrentUser").isWorkUser()
          ? "#373e4c"
          : c("MessengerEnvironment").messengerui
          ? "#0084ff"
          : "#4080ff");
      return k.jsx("div", {
        className: c("joinClasses")(
          c("bs_belt_Option").getWithDefault(b, ""),
          "_1i1j"
        ),
        "data-testid": void 0,
        children: k.jsx(c("MWLikeSvgIcon.react"), {
          alt: l,
          color: d,
          size: "100%",
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = "transparent";
    g.MessengerHotLikeSVGReact = a;
    g.cTRANSPARENT = b;
  },
  98
);
__d(
  "StickerConstants",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      MOBILE_LIKE_STICKER_PACK_ID: "227877430692340",
      GRAVEYARD_PACK_ID: "604597256247273",
      LIKE_STICKER_ID: "227878347358915",
      HOT_LIKE_SMALL_STICKER_ID: "369239263222822",
      HOT_LIKE_MEDIUM_STICKER_ID: "369239343222814",
      HOT_LIKE_LARGE_STICKER_ID: "369239383222810",
      MRU_STICKER_PACK: "599061016853145",
      SEARCH_PACK_ID: "680229632032514",
      FEED_PACK_ID: "2239834712900285",
      OZ_PACK_ID: "1456625217993235",
      AVATARS_PACK_ID: "2191329907595522",
      TRENDING_STICKER_PACK_ID: "924487421216423",
      SPRITE_PADDING: "24",
      PayloadSource: { VIEW_ACTION: "view-action" },
      DEFAULT_FRAME_RATE: 83,
      TRAY_SIZE: 64,
      THREAD_SIZE: 120,
    });
    f["default"] = a;
  },
  66
);
__d(
  "Sticker.react",
  [
    "cx",
    "fbt",
    "Arbiter",
    "ConstUriUtils",
    "CurrentUser",
    "JSResource",
    "MessengerHotLikeIconSVGM4React.bs",
    "MessengerHotLikeSVGReact.bs",
    "PaddedStickerConfig",
    "StickerConstants",
    "clearInterval",
    "emptyFunction",
    "getElementPosition",
    "gkx",
    "isWorkplaceDotComURI",
    "joinClasses",
    "lazyLoadComponent",
    "nullthrows",
    "react",
    "setIntervalAcrossTransitions",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = d("react").Suspense,
      l = c("lazyLoadComponent")(
        c("JSResource")("StickerPopoverImage.react").__setRef("Sticker.react")
      ),
      m = c("lazyLoadComponent")(
        c("JSResource")("GeoPopover.react").__setRef("Sticker.react")
      ),
      n = 83;
    a = 5e3;
    var o = 10,
      p = {
        CLICK: "click",
        HOVER: "hover",
        LOAD_AND_HOVER: "load_and_hover",
        ANIMATE_FOREVER: "animate_forever",
      };
    b = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
          e[f] = arguments[f];
        return (
          ((b = c = a.call.apply(a, [this].concat(e)) || this),
          (c.__stopIntervalID = null),
          (c.$1 = !1),
          (c.$2 = j.createRef()),
          (c.state = {
            index: 0,
            isHovered: !1,
            hasAnimated: !1,
            unsubscribeID: null,
          }),
          (c.toggleAnimation = function () {
            c.isAnimating() ? c.stopAnimation() : c.startAnimation();
          }),
          (c.incrementFrameIndex = function () {
            c.shouldStopAnimating()
              ? c.stopAnimation()
              : c.setState({ index: c.state.index + 1 });
          }),
          (c.onStickerClick = function () {
            if (!c.$3(c.props.packID)) return;
            c.props.onStickerClick &&
              c.props.onStickerClick(c.props.packID, c.props.stickerID);
          }),
          (c.mouseLeft = function () {
            c.setState({ isHovered: !1 });
          }),
          (c.mouseEntered = function () {
            c.setState({ isHovered: !0 }),
              c.isAnimating() || c.startAnimation();
          }),
          (c.tabFocusSelected = function () {
            c.setState({ isHovered: !0 }),
              c.isAnimating() || c.startAnimation();
          }),
          (c.tabFocusUnselected = function () {
            c.setState({ isHovered: !1 });
          }),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      var e = b.prototype;
      e.componentDidMount = function () {
        var a = this;
        this.$1 = !0;
        this.props.onAttachmentLoad && this.props.onAttachmentLoad();
        this.__stopIntervalID = null;
        (this.props.animationTrigger === p.LOAD_AND_HOVER ||
          this.props.animationTrigger === p.ANIMATE_FOREVER) &&
          this.props.frameCount &&
          this.props.frameCount > 1 &&
          this.props.spriteURI &&
          this.startAnimation();
        if (
          this.props.subscribedThreadID &&
          this.props.frameCount &&
          this.props.frameCount > 1
        ) {
          var b = c("Arbiter").subscribe(
            this.props.subscribedThreadID,
            function (b, c) {
              a.isScrolledIntoView(c.scrollTop, c.viewHeight, c.top);
            }
          );
          this.setState({ unsubscribeID: b });
        }
      };
      e.componentWillUnmount = function () {
        (this.$1 = !1),
          this.state.unsubscribeID &&
            c("Arbiter").unsubscribe(this.state.unsubscribeID),
          this.isAnimating() && c("clearInterval")(this.__stopIntervalID);
      };
      e.isAnimating = function () {
        return !!this.__stopIntervalID;
      };
      e.getWidth = function () {
        var a;
        return Math.floor((a = this.props.sourceWidth) != null ? a : 0);
      };
      e.getHeight = function () {
        var a;
        return Math.floor((a = this.props.sourceHeight) != null ? a : 0);
      };
      e.preloadSprite = function () {
        var a = this,
          b = new window.Image();
        b.onload = function () {
          a.$1 &&
            !a.state.hasAnimated &&
            (a.setState({ hasAnimated: !0 }),
            (a.__stopIntervalID = c("setIntervalAcrossTransitions")(
              a.incrementFrameIndex,
              a.props.frameRate
            )));
        };
        c("PaddedStickerConfig").ChatPaddedAnimatedStickerGK &&
        this.props.paddedSpriteURI
          ? (b.src = this.props.paddedSpriteURI)
          : (b.src = this.props.spriteURI);
      };
      e.isScrolledIntoView = function (a, b, d) {
        var e = c("getElementPosition")(this.$2.current);
        d = a + e.y - d;
        b = a + b;
        e = d + e.height;
        this.props.frameCount &&
          this.props.frameCount > 1 &&
          !this.state.hasAnimated &&
          e - o <= b &&
          d + o >= a &&
          this.startAnimation();
      };
      e.startAnimation = function () {
        !this.state.hasAnimated && this.props.spriteURI
          ? this.preloadSprite()
          : this.isAnimating() ||
            (this.setState({ hasAnimated: !0 }),
            (this.__stopIntervalID = c("setIntervalAcrossTransitions")(
              this.incrementFrameIndex,
              this.props.frameRate
            )));
      };
      e.stopAnimation = function () {
        this.setState({ index: 0 }),
          c("clearInterval")(this.__stopIntervalID),
          (this.__stopIntervalID = null);
      };
      e.shouldStopAnimating = function () {
        var a;
        if (!this.props.frameCount) return !0;
        var b = this.state.index % this.props.frameCount;
        if (this.props.animationTrigger === p.ANIMATE_FOREVER) return !1;
        a = (a = this.props.frameRate) != null ? a : n;
        if (!(b === 0 && this.state.index * a > this.props.animationTime))
          return !1;
        return this.props.animationTrigger === p.CLICK
          ? !0
          : !this.state.isHovered;
      };
      e.getStyle = function () {
        var a,
          b = 0,
          d = this.props.spriteURI;
        a = (a = this.props.scale) != null ? a : 1;
        var e = this.getHeight() * a;
        a = this.getWidth() * a;
        if (
          c("PaddedStickerConfig").ChatPaddedAnimatedStickerGK &&
          this.props.paddedSpriteURI
        ) {
          d = this.props.paddedSpriteURI;
          var f = 240 / Math.min(e, a);
          b = Math.floor(
            parseInt(c("StickerConstants").SPRITE_PADDING, 10) / f
          );
        }
        f = this.props.frameCount
          ? this.state.index % this.props.frameCount
          : 0;
        var g = this.props.framesPerRow
          ? (f % this.props.framesPerRow) * (a + b * 2) + b
          : 0;
        f = this.props.framesPerRow
          ? Math.floor(f / this.props.framesPerRow) * (e + b * 2) + b
          : 0;
        var h =
          (this.props.frameCount &&
            this.props.frameCount > 1 &&
            this.props.animationTrigger === p.CLICK) ||
          this.$3(this.props.packID);
        h = this.props.forceCursorPointer || h ? "pointer" : "default";
        if (
          !this.state.hasAnimated ||
          !this.props.spriteURI ||
          !d ||
          !this.props.framesPerRow ||
          !this.props.framesPerCol
        )
          return {
            backgroundImage:
              this.$4() || !this.props.sourceURI
                ? null
                : "url(" + this.props.sourceURI.toString() + ")",
            backgroundRepeat: "no-repeat",
            backgroundSize: a + "px " + e + "px",
            cursor: h,
            height: e,
            width: a,
          };
        else
          return {
            backgroundSize:
              (a + b * 2) * this.props.framesPerRow +
              "px " +
              (e + b * 2) * this.props.framesPerCol +
              "px",
            backgroundImage: "url(" + d.toString() + ")",
            backgroundPosition: -g + "px " + -f + "px",
            cursor: h,
            height: e,
            width: a,
            imageRendering: "-webkit-optimize-contrast",
          };
      };
      e.$3 = function (a) {
        return (
          a &&
          a != c("StickerConstants").MOBILE_LIKE_STICKER_PACK_ID &&
          a != c("StickerConstants").GRAVEYARD_PACK_ID
        );
      };
      e.getAriaLabel = function () {
        var a;
        return i._("Sticker {sticker name} {pack name}", [
          i._param("pack name", (a = this.props.packName) != null ? a : ""),
          i._param("sticker name", this.props.accessibilityLabel),
        ]);
      };
      e.render = function () {
        var a, b;
        this.props.animationTrigger === p.CLICK &&
        this.props.frameCount &&
        this.props.frameCount > 1 &&
        this.props.spriteURI
          ? (a = !0)
          : (this.props.animationTrigger === p.HOVER ||
              this.props.animationTrigger === p.LOAD_AND_HOVER) &&
            this.props.frameCount &&
            this.props.frameCount > 1 &&
            this.props.spriteURI &&
            (b = !0);
        var e = a ? this.toggleAnimation : null;
        this.props.packID && (e = this.onStickerClick);
        var f = this.props.className,
          g = null;
        this.$4() &&
          ((f = c("joinClasses")(f, "_576q")),
          (!c("CurrentUser").isWorkUser() || c("gkx")("1072568")) &&
          this.props.thread != null
            ? (g = j.jsx(
                d("MessengerHotLikeIconSVGM4React.bs").makeWithGradient,
                { thread: this.props.thread }
              ))
            : (g = j.jsx(
                d("MessengerHotLikeSVGReact.bs").MessengerHotLikeSVGReact,
                { color: this.props.customColor }
              )));
        f = j.jsx("div", {
          "aria-label": this.getAriaLabel(),
          className: f,
          "data-testid": void 0,
          onBlur: this.tabFocusUnselected,
          onClick: e,
          onFocus: this.tabFocusSelected,
          onMouseEnter: b ? this.mouseEntered : null,
          onMouseLeave: b ? this.mouseLeft : null,
          role: "img",
          style: this.getStyle(),
          tabIndex: this.props.tabIndex,
          ref: this.$2,
          children: g,
        });
        e = d("ConstUriUtils").getUri(window.location.href);
        return this.props.enablePopoverIfPassesGK &&
          (e != null ? c("isWorkplaceDotComURI")(e) : !1) &&
          c("gkx")("4316")
          ? j.jsx(m, {
              content: j.jsx(k, {
                fallback: "Loading...",
                children: j.jsx(l, {
                  stickerID: c("nullthrows")(this.props.stickerID),
                }),
              }),
              heading: "",
              isSticky: !1,
              children: f,
            })
          : f;
      };
      e.$4 = function () {
        return !!document.createElementNS &&
          !!document.createElementNS("http://www.w3.org/2000/svg", "svg")
            .createSVGRect
          ? this.props.stickerID ===
              c("StickerConstants").HOT_LIKE_SMALL_STICKER_ID ||
              this.props.stickerID ===
                c("StickerConstants").HOT_LIKE_MEDIUM_STICKER_ID ||
              this.props.stickerID ===
                c("StickerConstants").HOT_LIKE_LARGE_STICKER_ID
          : !1;
      };
      return b;
    })(j.Component);
    b.defaultProps = {
      animationTime: a,
      accessibilityLabel: "",
      forceCursorPointer: !1,
      frameRate: n,
      onStickerClick: c("emptyFunction"),
      packID: null,
      packName: "",
      tabIndex: 0,
    };
    g["default"] = b;
  },
  98
);
