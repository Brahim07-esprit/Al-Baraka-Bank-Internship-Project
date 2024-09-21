/*FB_PKG_DELIM*/

__d(
  "FBClipboardLink.react",
  [
    "cx",
    "fbt",
    "Clipboard",
    "DOMContainer.react",
    "Event",
    "KeyEventController",
    "ReactDOM",
    "SubscriptionsHandler",
    "Tooltip.react",
    "isKeyActivation",
    "joinClasses",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    var j = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
          f[g] = arguments[g];
        return (
          ((b = c = a.call.apply(a, [this].concat(f)) || this),
          (c.$1 = j.createRef()),
          (c.state = { copied: !1, supported: d("Clipboard").isSupported() }),
          (c.$2 = null),
          (c.$3 = null),
          (c.$5 = function (a) {
            a.clipboardData &&
              (a.clipboardData.setData("text/html", c.$8()),
              a.clipboardData.setData("text", c.$9()),
              a.preventDefault());
          }),
          (c.$7 = function () {
            if (!c.state.supported) return "Unsupported in this browser";
            return c.state.copied ? c.props.tooltipSuccess : c.props.tooltip;
          }),
          (c.$4 = function () {
            c.$3 && (window.clearTimeout(c.$3), (c.$3 = null));
          }),
          (c.$10 = function () {
            c.$3 = window.setTimeout(c.$11, c.props.tooltipSuccessDuration);
          }),
          (c.$6 = function (a) {
            var b = d("ReactDOM").findDOMNode(c.$1.current);
            b = d("Clipboard").copy(c.$8(), b);
            c.$4();
            c.setState({ copied: !0, supported: b });
            c.$10();
            c.props.onComplete && c.props.onComplete(b);
            c.props.stopPropagation && a.stopPropagation();
            c.props.preventDefaultOnClick && a.preventDefault();
          }),
          (c.$11 = function () {
            c.$4(), c.setState({ copied: !1 });
          }),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      var e = b.prototype;
      e.componentWillUnmount = function () {
        this.$4(), this.$2 && this.$2.release();
      };
      e.componentDidMount = function () {
        if (this.props.type === "html") {
          var a = d("ReactDOM").findDOMNode(this);
          this.$2 = this.$2 || new (c("SubscriptionsHandler"))();
          this.$2.addSubscriptions(c("Event").listen(a, "copy", this.$5));
        }
        this.props.hotkey &&
          ((this.$2 = this.$2 || new (c("SubscriptionsHandler"))()),
          this.$2.addSubscriptions(
            c("KeyEventController").registerKey(this.props.hotkey, this.$6)
          ));
      };
      e.render = function () {
        var a = this,
          b = c("joinClasses")(this.props.className, "_xd6"),
          d = this.props.children || this.props.label;
        !d &&
          this.props.childrenDONOTUSE &&
          (d = j.jsx(c("DOMContainer.react"), {
            children: this.props.childrenDONOTUSE,
          }));
        return j.jsx(
          c("Tooltip.react"),
          babelHelpers["extends"]({}, this.props, {
            tabIndex: "0",
            className: b,
            tooltip: this.$7(),
            "data-pitloot-persistonclick": !0,
            onClick: this.$6,
            onKeyPress: function (b) {
              return c("isKeyActivation")(b) && a.$6();
            },
            position: this.props.position,
            alignH: this.props.alignment,
            role: "button",
            children: j.jsx("div", {
              ref: this.$1,
              className: c("joinClasses")(
                "_2lj1",
                c("stylex")(this.props.innerXStyle)
              ),
              children: d,
            }),
          })
        );
      };
      e.$8 = function () {
        if (this.props.getValue) return this.props.getValue();
        else return this.props.value;
      };
      e.$9 = function () {
        return this.props.plainTextValue != null
          ? this.props.plainTextValue
          : this.$8();
      };
      return b;
    })(j.PureComponent);
    a.defaultProps = {
      tooltip: i._("Copier le texte dans le presse-papier"),
      tooltipSuccess: i._("Texte copi\u00e9 dans le presse-papier"),
      tooltipSuccessDuration: 1e3,
      type: "string",
    };
    g["default"] = a;
  },
  98
);
__d(
  "BasicFBNux",
  ["AsyncRequest", "XBasicFBNuxDismissController", "XBasicFBNuxViewController"],
  function (a, b, c, d, e, f, g) {
    function a(a, b) {
      a.subscribe("hide", function () {
        return h(b);
      });
    }
    function b(a) {
      a = c("XBasicFBNuxViewController")
        .getURIBuilder()
        .setInt("nux_id", a)
        .getURI();
      new (c("AsyncRequest"))().setURI(a).send();
    }
    function h(a) {
      a = c("XBasicFBNuxDismissController")
        .getURIBuilder()
        .setInt("nux_id", a)
        .getURI();
      new (c("AsyncRequest"))().setURI(a).send();
    }
    g.subscribeHide = a;
    g.onView = b;
    g.onDismiss = h;
  },
  98
);
__d(
  "getContextualLayerCursorOffset",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b, c) {
      var d = a.getOrientation(),
        e = d.getPosition();
      d = d.getAlignment();
      var f = a.getContent().getBoundingClientRect();
      a = a.getContext().getBoundingClientRect();
      b = b - a.left;
      c = c - a.top;
      switch (d) {
        case "left":
          b -= f.width;
          break;
        case "center":
          b -= a.width * 0.5;
          break;
        case "right":
          b -= a.width - f.width;
          break;
        default:
          throw new Error("invalid alignment");
      }
      switch (e) {
        case "above":
          break;
        case "left":
          b += f.width;
          c -= f.height * 0.5;
          break;
        case "right":
          b -= f.width;
          c -= f.height * 0.5;
          break;
        case "below":
          c -= a.height;
          break;
        default:
          throw new Error("invalid position");
      }
      return { offsetX: b, offsetY: c };
    }
    f["default"] = a;
  },
  66
);
__d(
  "VideoAutoplayPlayerBase",
  ["EventEmitter", "FBLogger"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
          e[f] = arguments[f];
        return (
          ((b = c = a.call.apply(a, [this].concat(e)) || this),
          (c.wasVisible = !1),
          (c.$VideoAutoplayPlayerBase1 = []),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      var d = b.prototype;
      d.isVisible = function () {
        throw new Error("Should be overridden");
      };
      d.getDistanceToViewport = function () {
        throw new Error("Should be overridden");
      };
      d.getVideoPlayerController = function () {
        c("FBLogger")("video").warn(
          [
            "VideoAutoplayPlayerBase.getVideoPlayerController()",
            "was called and returned null.",
          ].join(" ")
        );
        return null;
      };
      d.logDisplayed = function () {
        throw new Error("Should be overridden");
      };
      d.playWithoutUnmute = function (a) {
        throw new Error("Should be overridden");
      };
      d.pause = function (a) {
        throw new Error("Should be overridden");
      };
      d.isAutoplayable = function () {
        throw new Error("Should be overridden");
      };
      d.getDOMPosition = function () {
        throw new Error("Should be overridden");
      };
      d.isLooping = function () {
        throw new Error("Should be overridden");
      };
      d.isState = function (a) {
        throw new Error("Should be overridden");
      };
      d.preload = function () {
        throw new Error("Should be overridden");
      };
      d.isMuted = function () {
        throw new Error("Should be overridden");
      };
      d.isPlaying = function () {
        throw new Error("Should be overridden");
      };
      d.shouldPauseWhenScrolledOffscreen = function () {
        throw new Error("Should be overridden");
      };
      d.getAutoplayRules = function () {
        return this.$VideoAutoplayPlayerBase1;
      };
      d.registerAutoplayRule = function (a) {
        this.$VideoAutoplayPlayerBase1.push(a);
      };
      d.shouldImmediatelyAutoplayOnRegister = function () {
        return !1;
      };
      return b;
    })(c("EventEmitter"));
    g["default"] = a;
  },
  98
);
__d(
  "MountedContextMenu.react",
  [
    "cx",
    "ContextualLayer.react",
    "DOMQuery",
    "Event",
    "Focus",
    "LayerHideOnEscape",
    "PopoverMenu.react",
    "ReactDOM",
    "SubscriptionsHandler",
    "getContextualLayerCursorOffset",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
          f[g] = arguments[g];
        return (
          ((b = c = a.call.apply(a, [this].concat(f)) || this),
          (c.state = {
            shown: !1,
            lastOpenedX: 0,
            lastOpenedY: 0,
            offsetX: 0,
            offsetY: 0,
          }),
          (c.refs_fakeTrigger = null),
          (c.menuLayerRefHandler = function (a) {
            c.refs_menuLayer = a;
          }),
          (c.$6 = function (a) {
            var b = a.clientX,
              d = a.clientY;
            a.preventDefault();
            a.stopPropagation();
            c.showAt(b, d);
          }),
          (c.$7 = function (a) {
            var b = c.$3();
            b = b && d("DOMQuery").contains(b, a.target);
            a = a.button === 0;
            (b && a) || c.hide();
          }),
          (c.$8 = function () {
            c.props.disableFocusOutline && d("Focus").setWithoutOutline(c.$2());
          }),
          (c.$9 = function () {
            var a = c.$2();
            c.props.disableFocusOutline
              ? d("Focus").setWithoutOutline(a)
              : d("Focus").set(a);
            c.state.shown && c.hide();
          }),
          (c.$10 = function () {
            c.hide();
          }),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      var e = b.prototype;
      e.$2 = function () {
        return this.props.mountedTriggerElem;
      };
      e.$3 = function () {
        var a = this.refs_popover.getMenu();
        return a && a.getRoot();
      };
      e.$4 = function () {
        return this.refs_menuLayer.layer;
      };
      e.renderLayers = function () {
        var a = this;
        return i.jsx(
          c("ContextualLayer.react"),
          {
            alignment: "right",
            behaviors: [c("LayerHideOnEscape")],
            contextRef: function () {
              return a.$2();
            },
            offsetX: this.state.offsetX,
            offsetY: this.state.offsetY,
            position: "below",
            ref: this.menuLayerRefHandler,
            shown: this.state.shown,
            children: i.jsx(c("PopoverMenu.react"), {
              alignh: "left",
              menu: this.props.menu,
              position: "below",
              ref: function (b) {
                return (a.refs_popover = b);
              },
              children: i.jsx("div", {
                className: "_4345",
                ref: function (b) {
                  return (a.refs_fakeTrigger = b);
                },
              }),
            }),
          },
          "menu"
        );
      };
      e.render = function () {
        return this.props.mountedTriggerElem
          ? i.jsx("span", { children: this.renderLayers() })
          : null;
      };
      e.$5 = function (a, b) {
        var d = this.$4();
        a = c("getContextualLayerCursorOffset")(d, a, b);
        b = a.offsetX;
        a = a.offsetY;
        d.setOffsetX(b).setOffsetY(a);
        this.setState({ offsetX: b, offsetY: a });
      };
      e.componentDidMount = function () {
        var a = this,
          b = this.$2(),
          e = d("ReactDOM").findDOMNode(this.refs_fakeTrigger),
          f = this.$4(),
          g = this.refs_popover;
        this.$1 = new (c("SubscriptionsHandler"))();
        this.$1.addSubscriptions(
          c("Event").listen(b, "contextmenu", this.$6),
          c("Event").listen(document.body, "mousedown", this.$7),
          c("Event").listen(b, "focus", this.$8),
          c("Event").listen(e, "focus", this.$9),
          c("Event").listen(window, "blur", this.$10),
          f.subscribe("show", function () {
            var b = a.state.lastOpenedX,
              c = a.state.lastOpenedY;
            a.$5(b, c);
            g.showPopover();
          }),
          f.subscribe("hide", function () {
            g.hidePopover();
          })
        );
      };
      e.componentWillUnmount = function () {
        this.$1 && this.$1.release();
      };
      e.show = function () {
        this.setState({ shown: !0 });
      };
      e.showAt = function (a, b) {
        this.setState({ lastOpenedX: a, lastOpenedY: b }), this.show();
      };
      e.hide = function () {
        this.setState({ shown: !1 });
      };
      return b;
    })(i.Component);
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerHTML5ContextMenu.react",
  [
    "cx",
    "fbt",
    "ContextualLayer.react",
    "DOMQuery",
    "Event",
    "FBClipboardLink.react",
    "Focus",
    "FullScreen",
    "Keys",
    "LayerAutoFocus",
    "LayerHideOnEscape",
    "MountedContextMenu.react",
    "ODS",
    "ReactDOM",
    "ReactXUIMenu",
    "SubscriptionsHandler",
    "URI",
    "VideoPermalinkURI",
    "VideoPlayerExperiments",
    "getFullScreenElement",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = 0.35,
      l = 6,
      m = 60;
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, e;
        for (var f = arguments.length, g = new Array(f), h = 0; h < f; h++)
          g[h] = arguments[h];
        return (
          ((b = e = a.call.apply(a, [this].concat(g)) || this),
          (e.state = {
            permalinkVisible: !1,
            fullscreened: !1,
            screenWidth: screen.width,
            screenHeight: screen.height,
          }),
          (e.refs_copyPermalinkMenuItem = null),
          (e.refs_menu = null),
          (e.$2 = function () {
            var a = c("getFullScreenElement")(),
              b = e.props.rootContainer;
            a = !!(
              c("FullScreen").isFullScreen() &&
              a &&
              b &&
              d("DOMQuery").contains(a, b)
            );
            e.setState({ fullscreened: a });
          }),
          (e.$7 = function () {
            e.props.onTogglePause && e.props.onTogglePause();
          }),
          (e.$8 = function () {
            e.props.onToggleMute && e.props.onToggleMute();
          }),
          (e.$4 = function () {
            d("Focus").set(d("ReactDOM").findDOMNode(e.refs_permalinkText)),
              e.setState({ permalinkVisible: !0 });
          }),
          (e.$3 = function () {
            e.setState({ permalinkVisible: !1 });
          }),
          (e.$9 = function () {
            d("ReactDOM").findDOMNode(e.refs_permalinkText).select();
          }),
          (e.$10 = function (a) {
            c("Event").getKeyCode(a) === c("Keys").ESC &&
              e.setState({ permalinkVisible: !1 });
          }),
          (e.$11 = function (a) {
            a.preventDefault();
          }),
          (e.$14 = function () {
            d("ODS").bumpEntityKey(2079, "videos", "copy_video_url.click");
          }),
          b) || babelHelpers.assertThisInitialized(e)
        );
      }
      var e = b.prototype;
      e.componentDidMount = function () {
        var a = this.refs_permalinkLayer.layer;
        this.$1 = new (c("SubscriptionsHandler"))();
        this.$1.addSubscriptions(
          c("FullScreen").subscribe("changed", this.$2),
          a.subscribe("hide", this.$3),
          a.subscribe("show", this.$4)
        );
        this.props.initialPosition &&
          this.refs_menu.showAt(
            this.props.initialPosition.x,
            this.props.initialPosition.y
          );
      };
      e.componentWillUnmount = function () {
        this.$1 && this.$1.release();
      };
      e.$5 = function () {
        if (this.props.paused) return i._("Lire");
        else return i._("Pause");
      };
      e.$6 = function () {
        if (this.props.muted) return i._("R\u00e9activer");
        else return i._("Sourdine");
      };
      e.hidePermalinkOverlay = function () {
        this.$3();
      };
      e.$12 = function () {
        var a, b;
        if (this.state.fullscreened)
          (a = this.state.screenWidth), (b = this.state.screenHeight);
        else {
          var c = this.props.rootContainer.getBoundingClientRect();
          a = c.width;
          b = c.height;
        }
        return { width: a, height: b };
      };
      e.$13 = function (a) {
        var b = this,
          c = this.props.permalinkURL;
        if (c) {
          a = { width: a + "px" };
          return j.jsxs("div", {
            className: "_26oo",
            style: a,
            children: [
              j.jsx("input", {
                className: "_26op autofocus",
                onFocus: this.$9,
                onKeyDown: this.$10,
                onMouseUp: this.$11,
                readOnly: !0,
                ref: function (a) {
                  return (b.refs_permalinkText = a);
                },
                type: "text",
                value: c,
              }),
              j.jsx("button", {
                className: "_26oq",
                onClick: this.$3,
                children: i._("Fermer"),
              }),
            ],
          });
        }
        return null;
      };
      e.renderLayers = function () {
        var a = this,
          b = this.props.permalinkURL && this.state.permalinkVisible,
          d = 0,
          e = 0,
          f = null,
          g = this.$12(),
          h = g.width;
        g = g.height;
        var i = h * k;
        d = h / 2 - i / 2;
        e = -g + l;
        this.state.fullscreened && (e += m);
        f = this.$13(i);
        return j.jsx(
          c("ContextualLayer.react"),
          {
            alignment: "left",
            behaviors: [c("LayerHideOnEscape"), c("LayerAutoFocus")],
            contextRef: function () {
              return a.props.videoContainer;
            },
            offsetX: d,
            offsetY: e,
            position: "below",
            ref: function (b) {
              return (a.refs_permalinkLayer = b);
            },
            shown: b,
            children: f,
          },
          "permalinkOverlay"
        );
      };
      e.$15 = function () {
        var a = this;
        if (!this.props.permalinkURL) return null;
        var b = new (c("URI"))(this.props.permalinkURL);
        if (d("VideoPermalinkURI").isValid(b)) {
          b.addQueryData("t", this.props.getVideoCurrentTimePosition());
          return j.jsx(c("ReactXUIMenu").Item, {
            ref: function (b) {
              return (a.refs_copyPermalinkMenuItem = b);
            },
            children: j.jsx(c("FBClipboardLink.react"), {
              onComplete: this.$14,
              tooltip: null,
              tooltipSuccess: null,
              value: b.toString(),
              children: i._(
                "Copier l\u2019URL de la vid\u00e9o \u00e0 l\u2019instant T"
              ),
            }),
          });
        }
        return null;
      };
      e.$16 = function () {
        var a = this;
        if (this.props.permalinkURL)
          if (c("VideoPlayerExperiments").copyLinkInContextMenu)
            return j.jsx(c("ReactXUIMenu").Item, {
              ref: function (b) {
                return (a.refs_copyPermalinkMenuItem = b);
              },
              children: j.jsx(c("FBClipboardLink.react"), {
                onComplete: this.$14,
                tooltip: null,
                tooltipSuccess: null,
                value: this.props.permalinkURL,
                children: i._("Copy Video URL"),
              }),
            });
          else
            return j.jsx(c("ReactXUIMenu").Item, {
              onclick: this.$4,
              ref: function (b) {
                return (a.refs_permalinkMenuItem = b);
              },
              children: i._("Afficher URL de la vid\u00e9o"),
            });
        return null;
      };
      e.render = function () {
        var a = this,
          b =
            this.props.paused !== null &&
            j.jsx(c("ReactXUIMenu").Item, {
              onclick: this.$7,
              children: this.$5(),
            }),
          d = this.props.isLive ? null : this.$15();
        b = j.jsxs(c("ReactXUIMenu"), {
          children: [
            b,
            j.jsx(c("ReactXUIMenu").Item, {
              onclick: this.$8,
              children: this.$6(),
            }),
            this.$16(),
            d,
            this.props.children,
          ],
        });
        return j.jsxs("span", {
          children: [
            j.jsx(c("MountedContextMenu.react"), {
              mountedTriggerElem: this.props.videoContainer,
              menu: b,
              ref: function (b) {
                return (a.refs_menu = b);
              },
            }),
            this.renderLayers(),
          ],
        });
      };
      return b;
    })(j.Component);
    g["default"] = a;
  },
  98
);
__d(
  "VideoContextMenu",
  [
    "Bootloader",
    "CurrentUser",
    "EventListener",
    "ReactDOM",
    "URI",
    "UserAgent",
    "VideoPlayerHTML5ContextMenu.react",
    "isFacebookURI",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    var h = d("react"),
      i = /(instagram)/g;
    a = (function () {
      function a(a, b, e) {
        var g = this;
        this.$10 = function () {
          for (var a in g.$8) {
            var b = g.$8[a].name,
              c = g.$8[a].option,
              d = g.$8[a].description,
              e = g.$8[a].closeMessage;
            g.$2.hasOption(b, c) ? g.$13(b, c, d, e) : g.$12(b, c);
          }
          g.$9();
        };
        this.$9 = function () {
          g.$6 && g.$14();
        };
        this.$11 = function (a) {
          var b = /^a$/i.test(a.target.nodeName || "");
          b =
            b ||
            (c("CurrentUser").isEmployee() &&
              (c("UserAgent").isPlatform("Mac OS X")
                ? a.getModifiers().meta
                : a.getModifiers().ctrl));
          b && g.$6
            ? (d("ReactDOM").unmountComponentAtNode(g.$4, f.id), delete g.$6)
            : !b && !g.$6 && (a.preventDefault(), g.$14(a));
        };
        this.$8 = {
          debugOverlay: {
            name: "DebugOverlay",
            option: "hidden",
            description: "Employee Debug Info",
            closeMessage: "Hide Debug Information",
          },
          statsForNerds: {
            name: "StatsForNerds",
            option: "hidden",
            description: "Show video stats",
            closeMessage: "Hide video stats",
          },
        };
        this.$2 = a;
        this.$3 = e;
        this.$4 = b;
        this.$1 = {};
        this.$5 = null;
        if (this.$3.permalinkURL) {
          e = new (c("URI"))(this.$3.permalinkURL).getQualifiedURI();
          (!c("isFacebookURI")(e) ||
            e.getSubdomain() === "developers" ||
            e.getSubdomain() === "ai" ||
            e.getSubdomain() === "sparkar") &&
            (e.setSubdomain("www"),
            e.setDomain(e.getDomain().replace(i, "facebook")));
          this.$5 = e.toString();
        }
        b = [
          "muteVideo",
          "unmuteVideo",
          "changeVolume",
          "beginPlayback",
          "pausePlayback",
          "finishPlayback",
          "adBreakIndicatorShowing",
        ];
        ["enterWatchAndScroll", "exitWatchAndScroll"].forEach(function (b) {
          return a.addListener(b, function () {
            g.$6 && g.$6.hidePermalinkOverlay(), g.$9();
          });
        });
        a.addListener("optionsChange", this.$10);
        this.$10();
        b.forEach(function (b) {
          return a.addListener(b, g.$9);
        });
        c("EventListener").listen(
          this.$2.getRootNode(),
          "contextmenu",
          this.$11
        );
      }
      var b = a.prototype;
      b.setPermalinkURL = function (a) {
        (this.$5 = a), this.$9();
      };
      b.$12 = function (a, b) {
        this.$7 && this.$7.removeMenuItem(a, b);
      };
      b.$13 = function (a, b, d, e) {
        var f = this;
        c("Bootloader").loadModules(
          ["VideoComponentOptionMenuItems"],
          function (c) {
            f.$7 || (f.$7 = new c(f.$2, f.$9)),
              f.$7.addComponentOptionMenuItem(a, b, d, e);
          },
          "VideoContextMenu"
        );
      };
      b.$15 = function (a, b) {
        return !this.$7 ? void 0 : this.$7.getComponentOptionMenuItem(a, b);
      };
      b.$14 = function (a) {
        var b = this,
          e = this.$15(this.$8.debugOverlay.name, this.$8.debugOverlay.option),
          f = this.$15(
            this.$8.statsForNerds.name,
            this.$8.statsForNerds.option
          ),
          g = this.$2.getRootNode(),
          i = this.$2.getContainerNode(),
          j = function () {
            return Math.round(b.$2.getCurrentTimePosition());
          };
        this.$6 = d("ReactDOM").render(
          h.jsxs(c("VideoPlayerHTML5ContextMenu.react"), {
            rootContainer: g,
            videoContainer: i,
            paused: this.$16() ? null : !this.$2.isState("playing"),
            muted: this.$2.isMuted(),
            permalinkURL: this.$5,
            initialPosition: a ? { x: a.clientX, y: a.clientY } : void 0,
            getVideoCurrentTimePosition: j,
            onTogglePause: function () {
              return b.$17();
            },
            onToggleMute: function () {
              return b.$18();
            },
            isLive: this.$2.isLiveVideo(),
            children: [e, f],
          }),
          this.$4,
          "VideoContextMenu.js"
        );
      };
      b.$16 = function () {
        if (this.$2.getOption("VideoContextMenu", "disablePlayPauseMenuItem"))
          return !0;
        if (
          this.$2.getOption("VideoContextMenu", "disablePauseMenuItem") &&
          !this.$2.isState("paused")
        )
          return !0;
        var a = this.$2.getOption("VideoWithCommercialBreak", "controller");
        return a && a.getIsDuringTransition() ? !0 : !1;
      };
      b.$18 = function () {
        this.$2.isMuted() ? this.$2.unmute() : this.$2.mute();
      };
      b.$17 = function () {
        !this.$2.isState("playing")
          ? this.$2.play("user_initiated")
          : this.$2.pause("user_initiated");
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "VideoUpdateStateDirectory",
  ["VideoStateDirectory"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a() {
        var a = this;
        this.$2 = function () {
          var b = a.$1,
            d = b.getVideoID(),
            e = b.getCurrentTimePosition();
          b = b.getPlaybackDuration();
          c("VideoStateDirectory").setPlaybackState(d, e, b);
        };
      }
      var b = a.prototype;
      b.enable = function (a) {
        (this.$1 = a),
          a.addListener("finishPlayback", this.$2),
          a.addListener("pausePlayback", this.$2);
      };
      b.disable = function () {};
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "VideoWithLoopingPlayback",
  ["setImmediate"],
  function (a, b, c, d, e, f, g) {
    a = (function () {
      function a(a, b, d) {
        var e = this;
        b === void 0 && (b = -1);
        d === void 0 && (d = !1);
        this.$5 = !1;
        this.$8 = function () {
          var a,
            b = e.$1.getOption("FeedAutoplay", "isVisibleForAutoplay"),
            d = e.$1.getOption("WatchAndScroll", "isActive"),
            f = e.$1.getIsInChannel(),
            g = e.$1.getSource() === "tahoe";
          a = (a = e.$1.getVideoNodeNullable()) == null ? void 0 : a.loop;
          if (e.$7 && a === !1) return;
          !e.$5 &&
            (b || b === void 0) &&
            !d &&
            !f &&
            !g &&
            (!e.$4 || e.$3 < e.$4) &&
            (c("setImmediate")(function () {
              return e.$1.play("loop_initiated");
            }),
            e.$3++,
            e.$4 &&
              e.$3 === e.$4 - 1 &&
              (e.$1.setOption("Looping", "isLooping", !1),
              e.setVideoNodeLoop(!1)));
        };
        this.$1 = a;
        this.$2 = !0;
        this.$3 = 1;
        this.$4 = b > -1 ? b : null;
        this.$6 = this.$1.addListener("finishPlayback", this.$8);
        this.$1.registerOption(
          "Looping",
          "isLooping",
          function () {
            return e.$2;
          },
          function (a) {
            return e.$9(a);
          }
        );
        this.$1.registerOption(
          "Looping",
          "disabled",
          function () {
            return e.$5;
          },
          function (a) {
            return (e.$5 = a);
          }
        );
        this.$7 = d;
        this.setVideoNodeLoop(!0);
      }
      var b = a.prototype;
      b.setVideoNodeLoop = function (a) {
        if (!this.$7) return;
        var b = this.$1.getVideoNodeNullable();
        b != null && (b.loop = a);
      };
      b.destroy = function () {
        this.$6 != null && (this.$6.remove(), (this.$6 = null)),
          this.$1.hasOption("Looping", "isLooping") &&
            this.$1.unregisterOption("Looping", "isLooping"),
          this.$1.hasOption("Looping", "disabled") &&
            this.$1.unregisterOption("Looping", "disabled");
      };
      b.isLooping = function () {
        return this.$2;
      };
      b.getLoopCount = function () {
        return this.$3;
      };
      b.getMaxLoopCount = function () {
        return this.$4;
      };
      b.setMaxLoopCount = function (a) {
        this.$4 = a > -1 ? a : null;
      };
      b.$9 = function (a) {
        this.$2 = a;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "clamp",
  [],
  function (a, b, c, d, e, f) {
    function a(a, b, c) {
      if (a < b) return b;
      return a > c ? c : a;
    }
    f["default"] = a;
  },
  66
);
__d(
  "onViewportChanged",
  [
    "EventListener",
    "emptyFunction",
    "getViewportDimensions",
    "requestAnimationFrame",
  ],
  function (a, b, c, d, e, f, g) {
    var h = [],
      i = !1,
      j = null,
      k,
      l;
    function m() {
      var a = c("getViewportDimensions").withoutScrollbars();
      return { top: 0, bottom: a.height, left: 0, right: a.width };
    }
    function a(a, b) {
      b = {
        transform: b || c("emptyFunction").thatReturnsArgument,
        callback: a,
        needsUpdate: !0,
      };
      h.push(b);
      t();
      o();
      return { remove: n.bind(null, b), scheduleCheck: r.bind(null, b) };
    }
    function n(a) {
      a = h.indexOf(a);
      a !== -1 && (h.splice(a, 1), h.length === 0 && (p(), (j = null)));
    }
    function o() {
      l ||
        ((l = c("EventListener").capture(window, "scroll", s)),
        (k = c("EventListener").capture(window, "resize", q)));
    }
    function p() {
      l !== null && k !== null && (l.remove(), k.remove(), (l = k = null));
    }
    function q() {
      (j = null), s();
    }
    function r(a) {
      (a.needsUpdate = !0), t();
    }
    function s() {
      h.map(function (a) {
        return (a.needsUpdate = !0);
      }),
        t();
    }
    function t() {
      i ||
        ((i = !0),
        c("requestAnimationFrame")(function () {
          (i = !1), v();
        }));
    }
    function u(a) {
      if (a.needsUpdate) {
        a.needsUpdate = !1;
        return !0;
      }
      return !1;
    }
    function v() {
      j || (j = m());
      var a = h.filter(u),
        b = a.map(function (a) {
          return a.transform.call(null, j);
        });
      a.forEach(function (a, c) {
        return a.callback.call(null, b[c]);
      });
    }
    g["default"] = a;
  },
  98
);
