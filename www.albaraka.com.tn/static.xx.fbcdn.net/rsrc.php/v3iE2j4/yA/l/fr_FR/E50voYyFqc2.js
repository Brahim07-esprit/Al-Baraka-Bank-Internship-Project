/*FB_PKG_DELIM*/

__d(
  "BaseModal.react",
  ["cr:1824473", "cr:994756", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    a = b("cr:1824473") != null ? b("cr:1824473") : b("cr:994756");
    g["default"] = a;
  },
  98
);
__d(
  "XPlatReactToasterStateManager",
  ["clearTimeout", "removeFromArray", "setTimeout", "unrecoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = {};
    function i(a) {
      var b = !1;
      return function () {
        b || (a(), (b = !0));
      };
    }
    a = (function () {
      function a(a) {
        var b = a.callbackScheduler;
        a = a.maxQueuedToasts;
        this.$1 = 0;
        this.$2 = new Map();
        this.$3 = [];
        this.$4 = [];
        this.$5 = null;
        this.$7 = b;
        this.$6 = a;
      }
      var b = a.prototype;
      b.push = function (a, b) {
        var c = "toast-" + this.$1++;
        b = {
          duration: b,
          expired: !1,
          id: c,
          shown: !1,
          timer: null,
          value: a,
        };
        this.$8({ node: b, type: "PUSH" });
        return c;
      };
      b.replace = function (a, b) {
        this.$8({ id: a, type: "REPLACE", value: b });
      };
      b.shown = function (a) {
        this.$8({ id: a, type: "SHOWN" });
      };
      b["delete"] = function (a) {
        this.$8({ id: a, type: "DELETE" });
      };
      b.expire = function (a) {
        this.$8({ id: a, type: "EXPIRE" });
      };
      b.hidden = function (a) {
        this.$8({ id: a, type: "HIDDEN" });
      };
      b.stopTimer = function (a) {
        this.$8({ id: a, type: "STOP_TIMER" });
      };
      b.resetTimer = function (a) {
        this.$8({ id: a, type: "RESET_TIMER" });
      };
      b.getState = function () {
        return Object.fromEntries(this.$2);
      };
      b.getEmptyState = function () {
        return h;
      };
      b.addListener = function (a) {
        var b = this;
        this.$3.push(a);
        return {
          remove: i(function () {
            c("removeFromArray")(b.$3, a);
          }),
        };
      };
      b.$9 = function (a) {
        (this.$5 == null || a.priority > this.$5.priority) && (this.$5 = a);
      };
      b.registerView = function (a, b) {
        var d = this;
        b === void 0 && (b = 1);
        var e = { handler: a, priority: b };
        this.$4.push(e);
        this.$9(e);
        this.$10();
        return {
          remove: i(function () {
            c("removeFromArray")(d.$4, e),
              d.$5 === e &&
                ((d.$5 = null),
                d.$4.forEach(function (a) {
                  return d.$9(a);
                }));
          }),
        };
      };
      b.$8 = function (a) {
        var b = this.$2;
        switch (a.type) {
          case "PUSH":
            var c = a.node;
            this.$2 = new Map([].concat(Array.from(this.$2), [[c.id, c]]));
            if (this.$6 !== 0) {
              c = Array.from(this.$2.values()).filter(function (a) {
                return !a.shown && !a.expired;
              });
              if (c.length > this.$6) {
                c = c[0];
                this["delete"](c.id);
              }
            }
            break;
          case "SHOWN":
            if (this.$2.has(a.id) && !this.$11(a.id).shown) {
              c = babelHelpers["extends"]({}, this.$11(a.id), { shown: !0 });
              this.$2 = new Map(
                [].concat(Array.from(this.$2), [[a.id, this.$12(c)]])
              );
            }
            break;
          case "EXPIRE":
            if (this.$2.has(a.id)) {
              c = babelHelpers["extends"]({}, this.$11(a.id), { expired: !0 });
              this.$2 = new Map(
                [].concat(Array.from(this.$2), [[a.id, this.$13(c)]])
              );
              this.$14(c);
            }
            break;
          case "HIDDEN":
            if (this.$2.has(a.id)) {
              c = this.$11(a.id);
              (c.shown || c.expired) &&
                ((this.$2 = new Map(this.$2)),
                this.$2["delete"](a.id),
                this.$13(c));
            }
            break;
          case "DELETE":
            if (this.$2.has(a.id)) {
              c = this.$11(a.id);
              this.$2 = new Map(this.$2);
              this.$2["delete"](a.id);
              this.$13(c);
            }
            break;
          case "REPLACE":
            if (this.$2.has(a.id)) {
              c = this.$11(a.id);
              this.$2 = new Map(
                [].concat(Array.from(this.$2), [
                  [a.id, babelHelpers["extends"]({}, c, { value: a.value })],
                ])
              );
            }
            break;
          case "STOP_TIMER":
            if (this.$2.has(a.id) && this.$15(this.$11(a.id))) {
              c = babelHelpers["extends"]({}, this.$11(a.id));
              this.$2 = new Map(
                [].concat(Array.from(this.$2), [[a.id, this.$13(c)]])
              );
            }
            break;
          case "RESET_TIMER":
            if (this.$2.has(a.id) && !this.$15(this.$11(a.id))) {
              c = babelHelpers["extends"]({}, this.$11(a.id));
              this.$2 = new Map(
                [].concat(Array.from(this.$2), [[a.id, this.$12(c)]])
              );
            }
            break;
          default:
            a.type;
        }
        b !== this.$2 && this.$10();
      };
      b.$10 = function () {
        var a = this;
        this.$3.forEach(function (b) {
          return a.$7(function () {
            b();
          });
        });
        this.$4.forEach(function (b) {
          return a.$7(function () {
            b.handler(b === a.$5 ? a.getState() : a.getEmptyState());
          });
        });
      };
      b.$12 = function (a) {
        var b = this;
        a.duration !== null &&
          a.timer == null &&
          (a.timer = c("setTimeout")(function () {
            b.expire(a.id);
          }, a.duration));
        return a;
      };
      b.$13 = function (a) {
        a.timer != null && (c("clearTimeout")(a.timer), (a.timer = null));
        return a;
      };
      b.$14 = function (a) {
        var b = this;
        this.$13(a);
        var d = a.id;
        c("setTimeout")(function () {
          b["delete"](d);
        }, 1e3);
      };
      b.$15 = function (a) {
        return a.timer != null;
      };
      b.$11 = function (a) {
        a = this.$2.get(a);
        if (a == null)
          throw c("unrecoverableViolation")(
            "Toast with given identifier was not found",
            "comet_ui"
          );
        return a;
      };
      a.getInstance = function (b) {
        a.$16 == null && (a.$16 = new a(b));
        return a.$16;
      };
      a.resetInstance_DO_NOT_USE = function () {
        a.$16 = null;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "BaseToasterStateManager",
  [
    "CometMaxEnqueuedToastsSitevarConfig",
    "JSScheduler",
    "XPlatReactToasterStateManager",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    function h(a) {
      d("JSScheduler").scheduleNormalPriCallback(function () {
        a();
      });
    }
    a = {
      getInstance: function () {
        return c("XPlatReactToasterStateManager").getInstance({
          callbackScheduler: h,
          maxQueuedToasts: c("CometMaxEnqueuedToastsSitevarConfig").max,
        });
      },
      resetInstance_DO_NOT_USE: function () {
        c("XPlatReactToasterStateManager").resetInstance_DO_NOT_USE();
      },
    };
    g["default"] = a;
  },
  98
);
__d(
  "CometColumnContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(null);
    g["default"] = b;
  },
  98
);
__d(
  "CometColumnItem.react",
  [
    "BaseView.react",
    "CometColumnContext",
    "CometErrorBoundary.react",
    "CometPlaceholder.react",
    "UserAgent",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useContext,
      j = {
        divider: {
          borderTopColor: "x8cjs6t",
          borderTopStyle: "x13fuv20",
          borderTopWidth: "x178xt8z",
          ":first-child_display": "xh99ass",
          $$css: !0,
        },
        dividerMargin: {
          ":first-child:empty + *_marginTop": "xb939ph",
          $$css: !0,
        },
        expanding: {
          flexBasis: "x1l7klhg",
          flexGrow: "x1iyjqo2",
          flexShrink: "xs83m0k",
          minHeight: "x2lwn1j",
          $$css: !0,
        },
        expandingIE11: { flexBasis: "xdl72j9", $$css: !0 },
        marginFirstChild: { ":first-child_marginTop": "x14l7nz5", $$css: !0 },
        marginLastChild: { ":last-child_marginBottom": "xzboxd6", $$css: !0 },
        root: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          flexShrink: "x2lah0s",
          maxWidth: "x193iq5w",
          $$css: !0,
        },
      },
      k = {
        center: { alignItems: "x6s0dn4", $$css: !0 },
        end: { alignItems: "xuk3077", $$css: !0 },
        start: { alignItems: "x1cy8zhl", $$css: !0 },
      },
      l = {
        4: { paddingStart: "x1e558r4", paddingEnd: "x150jy0e", $$css: !0 },
        8: { paddingStart: "xurb0ha", paddingEnd: "x1sxyh0", $$css: !0 },
        12: { paddingStart: "x1ye3gou", paddingEnd: "xn6708d", $$css: !0 },
        16: { paddingStart: "x1swvt13", paddingEnd: "x1pi30zi", $$css: !0 },
        20: { paddingStart: "x5ib6vp", paddingEnd: "xc73u3c", $$css: !0 },
      },
      m = {
        0: { paddingTop: "xexx8yu", $$css: !0 },
        4: { paddingTop: "x1iorvi4", $$css: !0 },
        8: { paddingTop: "x1y1aw1k", $$css: !0 },
        12: { paddingTop: "xz9dl7a", $$css: !0 },
        16: { paddingTop: "xyamay9", $$css: !0 },
        20: { paddingTop: "x1cnzs8", $$css: !0 },
        40: { paddingTop: "x13zrc24", $$css: !0 },
      },
      n = {
        4: { paddingTop: "x1iorvi4", paddingBottom: "xjkvuk6", $$css: !0 },
        8: { paddingTop: "x1y1aw1k", paddingBottom: "xwib8y2", $$css: !0 },
        12: { paddingTop: "xz9dl7a", paddingBottom: "xsag5q8", $$css: !0 },
        16: { paddingTop: "xyamay9", paddingBottom: "x1l90r2v", $$css: !0 },
        20: { paddingTop: "x1cnzs8", paddingBottom: "xx6bls6", $$css: !0 },
        40: { paddingTop: "x13zrc24", paddingBottom: "x1t1ogtf", $$css: !0 },
      },
      o = {
        4: { marginTop: "xr9ek0c", marginBottom: "xjpr12u", $$css: !0 },
        8: { marginTop: "x1gslohp", marginBottom: "x12nagc", $$css: !0 },
        12: { marginTop: "x1k70j0n", marginBottom: "xzueoph", $$css: !0 },
        16: { marginTop: "x1xmf6yo", marginBottom: "x1e56ztr", $$css: !0 },
        20: { marginTop: "x1anpbxc", marginBottom: "xyorhqc", $$css: !0 },
        24: { marginTop: "x14vqqas", marginBottom: "xod5an3", $$css: !0 },
        32: { marginTop: "xw7yly9", marginBottom: "x1yztbdb", $$css: !0 },
        40: { marginTop: "x1sy10c2", marginBottom: "xieb3on", $$css: !0 },
      },
      p = {
        bottom: { justifyContent: "x13a6bvl", $$css: !0 },
        center: { justifyContent: "xl56j7k", $$css: !0 },
        "space-between": { justifyContent: "x1qughib", $$css: !0 },
      },
      q = {
        4: { marginStart: "xsgj6o6", marginEnd: "xw3qccf", $$css: !0 },
        8: { marginStart: "x1i64zmx", marginEnd: "x1emribx", $$css: !0 },
        12: { marginStart: "x16n37ib", marginEnd: "xq8finb", $$css: !0 },
        16: { marginStart: "x1d52u69", marginEnd: "xktsk01", $$css: !0 },
        20: { marginStart: "xmn8rco", marginEnd: "x1h5jrl4", $$css: !0 },
      },
      r = c("UserAgent").isBrowser("IE >= 11");
    function a(a, b) {
      var d, e, f, g;
      d = (d = i(c("CometColumnContext"))) != null ? d : {};
      var t = a.align;
      e = t === void 0 ? ((e = d.align) != null ? e : "stretch") : t;
      t = a.children;
      var u = a.expanding;
      u = u === void 0 ? !1 : u;
      var v = a.fallback,
        w = a.paddingHorizontal;
      f = w === void 0 ? ((f = d.paddingHorizontal) != null ? f : 0) : w;
      w = a.paddingTop;
      var x = a.paddingVertical;
      x = x === void 0 ? 0 : x;
      var y = a.placeholder,
        z = a.verticalAlign;
      z = z === void 0 ? "top" : z;
      var A = babelHelpers.objectWithoutPropertiesLoose(a, [
          "align",
          "children",
          "expanding",
          "fallback",
          "paddingHorizontal",
          "paddingTop",
          "paddingVertical",
          "placeholder",
          "verticalAlign",
        ]),
        B = c("stylex").compose(a.xstyle);
      g = h.jsxs(h.Fragment, {
        children: [
          d.hasDividers === !0 &&
            h.jsx(c("BaseView.react"), {
              role: "separator",
              xstyle: [
                j.divider,
                q[(g = d.paddingHorizontal) != null ? g : 0],
                d.spacing != null && j.dividerMargin,
              ],
            }),
          h.jsx(
            c("BaseView.react"),
            babelHelpers["extends"]({}, A, {
              ref: b,
              xstyle: [
                j.root,
                u && [j.expanding, r && j.expandingIE11],
                e !== "stretch" && k[e],
                z !== "top" && p[z],
                l[f],
                n[x],
                w != null && m[w],
                d.spacing != null && [
                  o[d.spacing],
                  B.marginBottom == null && j.marginLastChild,
                  B.marginTop == null && j.marginFirstChild,
                ],
                a.xstyle,
              ],
              children: h.jsx(c("CometColumnContext").Provider, {
                value: null,
                children: t,
              }),
            })
          ),
        ],
      });
      if (v !== void 0) {
        a.fallback;
        var C = babelHelpers.objectWithoutPropertiesLoose(a, ["fallback"]);
        v === null
          ? (g = h.jsx(c("CometErrorBoundary.react"), { children: g }))
          : (g = h.jsx(c("CometErrorBoundary.react"), {
              fallback: function (a, c) {
                return h.jsx(
                  s,
                  babelHelpers["extends"]({}, C, {
                    ref: b,
                    children: typeof v === "function" ? v(a, c) : v,
                  })
                );
              },
              children: g,
            }));
      }
      if (y !== void 0) {
        a.placeholder;
        A = babelHelpers.objectWithoutPropertiesLoose(a, ["placeholder"]);
        g = h.jsx(c("CometPlaceholder.react"), {
          fallback:
            y != null
              ? h.jsx(
                  s,
                  babelHelpers["extends"]({}, A, { ref: b, children: y })
                )
              : null,
          children: g,
        });
      }
      return g;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    var s = h.forwardRef(a);
    b = s;
    g["default"] = b;
  },
  98
);
__d(
  "CometColumn.react",
  [
    "BaseView.react",
    "CometColumnContext",
    "CometColumnItem.react",
    "UserAgent",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useContext,
      j = b.useMemo,
      k = {
        expanding: {
          flexBasis: "x1l7klhg",
          flexGrow: "x1iyjqo2",
          flexShrink: "xs83m0k",
          minHeight: "x2lwn1j",
          $$css: !0,
        },
        expandingIE11: { flexBasis: "xdl72j9", $$css: !0 },
        inner: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          flexGrow: "x1iyjqo2",
          minHeight: "x2lwn1j",
          $$css: !0,
        },
        root: {
          boxSizing: "x9f619",
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          flexShrink: "x2lah0s",
          maxWidth: "x193iq5w",
          $$css: !0,
        },
      },
      l = {
        0: { paddingTop: "xexx8yu", $$css: !0 },
        4: { paddingTop: "x1iorvi4", $$css: !0 },
        8: { paddingTop: "x1y1aw1k", $$css: !0 },
        12: { paddingTop: "xz9dl7a", $$css: !0 },
        16: { paddingTop: "xyamay9", $$css: !0 },
        20: { paddingTop: "x1cnzs8", $$css: !0 },
      },
      m = {
        4: { paddingTop: "x1iorvi4", paddingBottom: "xjkvuk6", $$css: !0 },
        8: { paddingTop: "x1y1aw1k", paddingBottom: "xwib8y2", $$css: !0 },
        12: { paddingTop: "xz9dl7a", paddingBottom: "xsag5q8", $$css: !0 },
        16: { paddingTop: "xyamay9", paddingBottom: "x1l90r2v", $$css: !0 },
        20: { paddingTop: "x1cnzs8", paddingBottom: "xx6bls6", $$css: !0 },
      },
      n = {
        bottom: { justifyContent: "x13a6bvl", $$css: !0 },
        center: { justifyContent: "xl56j7k", $$css: !0 },
        "space-between": { justifyContent: "x1qughib", $$css: !0 },
      },
      o = c("UserAgent").isBrowser("IE >= 11");
    function a(a, b) {
      var d = a.align,
        e = d === void 0 ? null : d;
      d = a.children;
      var f = a.expanding;
      f = f === void 0 ? !1 : f;
      var g = a.hasDividers,
        p = g === void 0 ? !1 : g;
      g = a.paddingHorizontal;
      var q = g === void 0 ? null : g;
      g = a.paddingTop;
      var r = a.paddingVertical;
      r = r === void 0 ? 0 : r;
      var s = a.spacing,
        t = s === void 0 ? null : s;
      s = a.verticalAlign;
      s = s === void 0 ? "top" : s;
      var u = a.xstyle;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "align",
        "children",
        "expanding",
        "hasDividers",
        "paddingHorizontal",
        "paddingTop",
        "paddingVertical",
        "spacing",
        "verticalAlign",
        "xstyle",
      ]);
      var v = i(c("CometColumnContext")),
        w = j(
          function () {
            return {
              align: e,
              hasDividers: p,
              paddingHorizontal: q,
              spacing: t,
            };
          },
          [e, p, q, t]
        );
      a = h.jsx(
        c("BaseView.react"),
        babelHelpers["extends"]({}, a, {
          ref: b,
          xstyle: [
            k.root,
            f === !0 && [k.expanding, o && k.expandingIE11],
            m[r],
            g != null && l[g],
            u,
          ],
          children: h.jsx(c("BaseView.react"), {
            xstyle: [k.inner, s !== "top" && n[s]],
            children: h.jsx(c("CometColumnContext").Provider, {
              value: w,
              children: d,
            }),
          }),
        })
      );
      if (v != null) {
        return h.jsx(c("CometColumnItem.react"), {
          expanding: (b = f) != null ? b : void 0,
          children: a,
        });
      }
      return a;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = h.forwardRef(a);
    d = e;
    g["default"] = d;
  },
  98
);
__d(
  "CometContextualLayerAnchorRoot.react",
  ["BaseContextualLayerAnchorRoot.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsx(
        c("BaseContextualLayerAnchorRoot.react"),
        babelHelpers["extends"]({}, a)
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometDeferredPopoverTrigger.react",
  [
    "BasePopoverTrigger.react",
    "CometPopoverLoadingState.react",
    "deferredLoadComponent",
    "react",
    "tracePolicyFromResource",
    "useCometPopoverInteractionTracing",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.doNotCloseOnOutsideClick,
        d = a.fallback,
        e = a.popoverProps,
        f = a.popoverResource,
        g = a.preloadTrigger,
        i = a.tracePolicy;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "doNotCloseOnOutsideClick",
        "fallback",
        "popoverProps",
        "popoverResource",
        "preloadTrigger",
        "tracePolicy",
      ]);
      var j = c("deferredLoadComponent")(f);
      i = c("useCometPopoverInteractionTracing")(
        (i = i) != null ? i : c("tracePolicyFromResource")("comet.popover", f),
        "deferred",
        g
      );
      return h.jsx(
        c("BasePopoverTrigger.react"),
        babelHelpers["extends"](
          {
            doNotCloseOnOutsideClick: b,
            fallback:
              (b = d) != null
                ? b
                : h.jsx(c("CometPopoverLoadingState.react"), { withArrow: !0 }),
            interactionTracker: i,
            popover: j,
            popoverPreloadResource: f,
            popoverProps: babelHelpers["extends"]({}, e, {
              loadImmediately: !0,
            }),
            preloadTrigger: g,
          },
          a
        )
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometNonBreakingSpace.react",
  ["react", "stylex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        1: { marginEnd: "x1xxsv49", $$css: !0 },
        0.25: { marginEnd: "x1yi58nm", $$css: !0 },
        0.5: { marginEnd: "xgnuv6c", $$css: !0 },
        0.75: { marginEnd: "x1jnq1ez", $$css: !0 },
      };
    function a(a) {
      a = a.size;
      if (a != null)
        return h.jsx("span", {
          className: c("stylex")(i[a]),
          children: "\ufeff",
        });
      else return h.jsx(h.Fragment, { children: "\xa0" });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometRowContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(null);
    g["default"] = b;
  },
  98
);
__d(
  "CometRowItem.react",
  [
    "BaseRowItem.react",
    "CometErrorBoundary.react",
    "CometPlaceholder.react",
    "CometRowContext",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useContext,
      j = {
        4: { paddingEnd: "xg83lxy", paddingStart: "x1h0ha7o", $$css: !0 },
        8: { paddingEnd: "x150jy0e", paddingStart: "x1e558r4", $$css: !0 },
        12: { paddingEnd: "xsyo7zv", paddingStart: "x16hj40l", $$css: !0 },
        16: { paddingEnd: "x1sxyh0", paddingStart: "xurb0ha", $$css: !0 },
        24: { paddingEnd: "xn6708d", paddingStart: "x1ye3gou", $$css: !0 },
        32: { paddingEnd: "x1pi30zi", paddingStart: "x1swvt13", $$css: !0 },
      },
      k = {
        4: { paddingBottom: "x1120s5i", paddingTop: "x1nn3v0j", $$css: !0 },
        8: { paddingBottom: "xjkvuk6", paddingTop: "x1iorvi4", $$css: !0 },
        12: { paddingBottom: "x10b6aqq", paddingTop: "x1yrsyyn", $$css: !0 },
        16: { paddingBottom: "xwib8y2", paddingTop: "x1y1aw1k", $$css: !0 },
        24: { paddingBottom: "xsag5q8", paddingTop: "xz9dl7a", $$css: !0 },
        32: { paddingBottom: "x1l90r2v", paddingTop: "xyamay9", $$css: !0 },
      };
    function a(a, b) {
      var d;
      d = (d = i(c("CometRowContext"))) != null ? d : {};
      var e = d.spacingHorizontal;
      d = d.spacingVertical;
      var f = a.fallback,
        g = a.placeholder,
        m = babelHelpers.objectWithoutPropertiesLoose(a, [
          "fallback",
          "placeholder",
        ]);
      if (g !== void 0) {
        a.placeholder;
        var n = babelHelpers.objectWithoutPropertiesLoose(a, ["placeholder"]);
        return h.jsx(c("CometPlaceholder.react"), {
          fallback:
            g != null
              ? h.jsx(
                  l,
                  babelHelpers["extends"]({}, n, { ref: b, children: g })
                )
              : null,
          children: h.jsx(l, babelHelpers["extends"]({}, n, { ref: b })),
        });
      }
      if (f !== void 0) {
        a.fallback;
        var o = babelHelpers.objectWithoutPropertiesLoose(a, ["fallback"]);
        return f === null
          ? h.jsx(c("CometErrorBoundary.react"), {
              children: h.jsx(l, babelHelpers["extends"]({}, o, { ref: b })),
            })
          : h.jsx(c("CometErrorBoundary.react"), {
              fallback: function (a, c) {
                return h.jsx(
                  l,
                  babelHelpers["extends"]({}, o, {
                    ref: b,
                    children: typeof f === "function" ? f(a, c) : f,
                  })
                );
              },
              children: h.jsx(l, babelHelpers["extends"]({}, o, { ref: b })),
            });
      }
      return h.jsx(
        c("BaseRowItem.react"),
        babelHelpers["extends"]({}, m, {
          ref: b,
          useDeprecatedStyles: m.useDeprecatedStyles,
          xstyle: [j[e], k[d], m.xstyle],
          children: h.jsx(c("CometRowContext").Provider, {
            value: null,
            children: m.children,
          }),
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    var l = h.forwardRef(a);
    b = l;
    g["default"] = b;
  },
  98
);
__d(
  "CometRow.react",
  [
    "BaseRow.react",
    "CometColumnContext",
    "CometColumnItem.react",
    "CometRowContext",
    "CometRowItem.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useContext,
      j = b.useMemo,
      k = {
        4: { paddingEnd: "x150jy0e", paddingStart: "x1e558r4", $$css: !0 },
        8: { paddingEnd: "x1sxyh0", paddingStart: "xurb0ha", $$css: !0 },
        12: { paddingEnd: "xn6708d", paddingStart: "x1ye3gou", $$css: !0 },
        16: { paddingEnd: "x1pi30zi", paddingStart: "x1swvt13", $$css: !0 },
      },
      l = {
        0: { paddingTop: "xexx8yu", $$css: !0 },
        4: { paddingTop: "x1iorvi4", $$css: !0 },
        8: { paddingTop: "x1y1aw1k", $$css: !0 },
        12: { paddingTop: "xz9dl7a", $$css: !0 },
        16: { paddingTop: "xyamay9", $$css: !0 },
      },
      m = {
        4: { paddingBottom: "xjkvuk6", paddingTop: "x1iorvi4", $$css: !0 },
        8: { paddingBottom: "xwib8y2", paddingTop: "x1y1aw1k", $$css: !0 },
        12: { paddingBottom: "xsag5q8", paddingTop: "xz9dl7a", $$css: !0 },
        16: { paddingBottom: "x1l90r2v", paddingTop: "xyamay9", $$css: !0 },
      },
      n = {
        4: { marginEnd: "xwrv7xz", marginStart: "x8182xy", $$css: !0 },
        8: { marginEnd: "xcud41i", marginStart: "x139jcc6", $$css: !0 },
        12: { marginEnd: "xykv574", marginStart: "xbmpl8g", $$css: !0 },
        16: { marginEnd: "x1n0m28w", marginStart: "xp7jhwk", $$css: !0 },
        24: { marginEnd: "x12rz0ws", marginStart: "x16hk5td", $$css: !0 },
        32: { marginEnd: "x19f6ikt", marginStart: "x169t7cy", $$css: !0 },
      },
      o = {
        4: { marginBottom: "xmgb6t1", marginTop: "x1kgmq87", $$css: !0 },
        8: { marginBottom: "x4vbgl9", marginTop: "x1rdy4ex", $$css: !0 },
        12: { marginBottom: "x4cne27", marginTop: "xifccgj", $$css: !0 },
        16: { marginBottom: "x1wsgfga", marginTop: "x9otpla", $$css: !0 },
        24: { marginBottom: "xh3wvx0", marginTop: "x7wgvq7", $$css: !0 },
        32: { marginBottom: "x1oo3vh0", marginTop: "xwya9rg", $$css: !0 },
      };
    function a(a, b) {
      var d = i(c("CometColumnContext")),
        e = i(c("CometRowContext")),
        f = (d == null ? void 0 : d.paddingHorizontal) != null ? 0 : 12,
        g = (d == null ? void 0 : d.spacing) != null ? 0 : 16,
        p = a.children,
        q = a.paddingHorizontal;
      f = q === void 0 ? f : q;
      q = a.paddingVertical;
      q = q === void 0 ? 0 : q;
      var r = a.paddingTop;
      g = r === void 0 ? (a.paddingVertical == null ? g : null) : r;
      r = a.spacing;
      r = r === void 0 ? 12 : r;
      var s = a.spacingHorizontal,
        t = s === void 0 ? r : s;
      s = a.spacingVertical;
      var u = s === void 0 ? r : s;
      r = a.xstyle;
      s = babelHelpers.objectWithoutPropertiesLoose(a, [
        "children",
        "paddingHorizontal",
        "paddingVertical",
        "paddingTop",
        "spacing",
        "spacingHorizontal",
        "spacingVertical",
        "xstyle",
      ]);
      a = j(
        function () {
          return { spacingHorizontal: t, spacingVertical: u };
        },
        [t, u]
      );
      b = h.jsx(
        c("BaseRow.react"),
        babelHelpers["extends"]({}, s, {
          ref: b,
          xstyle: [k[f], m[q], g != null && l[g], n[t], o[u], r],
          children: h.jsx(c("CometRowContext").Provider, {
            value: a,
            children: p,
          }),
        })
      );
      if (e != null)
        return h.jsx(c("CometRowItem.react"), {
          expanding: s.expanding,
          children: b,
        });
      return d != null
        ? h.jsx(c("CometColumnItem.react"), {
            expanding: s.expanding,
            children: b,
          })
        : b;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = h.forwardRef(a);
    d = e;
    g["default"] = d;
  },
  98
);
__d(
  "CometDialogFooterContainer.react",
  [
    "CometColumn.react",
    "CometDialogHeaderFooterContainerContext.react",
    "CometDialogScrollShadow.react",
    "FocusInertRegion.react",
    "focusScopeQueries",
    "gkx",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useContext,
      j = {
        container: {
          backgroundColor: "x1jx94hy",
          width: "xh8yej3",
          "@media (max-width: 679px)_backgroundColor": "x1hlgzme",
          "@media (max-width: 679px)_borderBottomEndRadius": "xvcs8rp",
          "@media (max-width: 679px)_borderBottomStartRadius": "x1bpvpm7",
          "@media (max-width: 679px)_bottom": "xefnots",
          "@media (max-width: 679px)_boxShadow": "x13xjmei",
          "@media (max-width: 679px)_position": "xv7j57z",
          $$css: !0,
        },
        containerFloated: {
          bottom: "x1ey2m1c",
          end: "xds687c",
          position: "x10l6tqk",
          start: "x17qophe",
          zIndex: "x1vjfegm",
          $$css: !0,
        },
        containerStatic: {
          position: "x1n2onr6",
          "@media (max-width: 679px)_position": "xv7j57z",
          $$css: !0,
        },
      };
    function a(a) {
      a = a.children;
      var b = c("gkx")("664"),
        e = i(c("CometDialogHeaderFooterContainerContext.react")),
        f = e.showShadow,
        g = e.type;
      e = e.xstyle;
      e = b
        ? [
            g === "static" && j.containerStatic,
            g === "floated" && j.containerFloated,
            g === "placeholder" && e,
          ]
        : j.containerStatic;
      return h.jsxs("div", {
        "aria-hidden": g === "placeholder",
        className: c("stylex")([j.container, e]),
        children: [
          g !== "placeholder" &&
            b &&
            h.jsx(c("CometDialogScrollShadow.react"), {
              hidden: !f,
              position: "bottom",
            }),
          h.jsx(c("FocusInertRegion.react"), {
            disabled: g !== "placeholder",
            focusQuery: d("focusScopeQueries").tabbableScopeQuery,
            children: h.jsx(c("CometColumn.react"), {
              paddingHorizontal: 16,
              children: a,
            }),
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
  "CometDialogMetaTextItem.react",
  ["CometColumnItem.react", "TetraText.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.meta;
      a = a.metaPosition;
      a = a === void 0 ? "above" : a;
      var d = b != null && a === "above";
      a = b != null && a === "below";
      return h.jsx(c("CometColumnItem.react"), {
        align: d ? "start" : "center",
        paddingTop: a ? 0 : 12,
        paddingVertical: a ? 16 : 0,
        children: h.jsx(c("TetraText.react"), {
          align: d ? "start" : "center",
          color: "secondary",
          type: "body3",
          children: b,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometDialogConfirmationFooter.react",
  [
    "BaseRow.react",
    "BaseRowItem.react",
    "CometColumnItem.react",
    "CometDialogFooterContainer.react",
    "CometDialogMetaTextItem.react",
    "TetraButton.react",
    "react",
    "useCometDialogPlaceholderRemoveSelectorIds.react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        item: {
          flexBasis: "x1r8uery",
          minWidth: "xl9nvqe",
          "@media (max-width: 679px)_minWidth": "x17ot9bj",
          $$css: !0,
        },
        secondary: { paddingEnd: "x1sxyh0", $$css: !0 },
      };
    function a(a) {
      var b = a.meta,
        d = a.primary,
        e = a.secondary;
      a = a.size;
      a = a === void 0 ? "medium" : a;
      var f = c("useCometDialogPlaceholderRemoveSelectorIds.react")();
      d = babelHelpers["extends"]({}, d, f);
      e = babelHelpers["extends"]({}, e, f);
      return h.jsxs(c("CometDialogFooterContainer.react"), {
        children: [
          b != null && h.jsx(c("CometDialogMetaTextItem.react"), { meta: b }),
          h.jsx(c("CometColumnItem.react"), {
            paddingVertical: 16,
            children: h.jsxs(c("BaseRow.react"), {
              align: "end",
              direction: "backward",
              verticalAlign: "stretch",
              wrap: "forward",
              children: [
                h.jsx(c("BaseRowItem.react"), {
                  xstyle: i.item,
                  children: h.jsx(
                    c("TetraButton.react"),
                    babelHelpers["extends"]({ padding: "wide", size: a }, d)
                  ),
                }),
                h.jsx(c("BaseRowItem.react"), {
                  xstyle: [i.item, i.secondary],
                  children: h.jsx(
                    c("TetraButton.react"),
                    babelHelpers["extends"](
                      { reduceEmphasis: !0, size: a, type: "secondary" },
                      e
                    )
                  ),
                }),
              ],
            }),
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
  "CometDialogFooterSingleButtonItem.react",
  [
    "BaseRow.react",
    "BaseRowItem.react",
    "CometColumnItem.react",
    "TetraButton.react",
    "react",
    "useCometDialogPlaceholderRemoveSelectorIds.react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        item: {
          flexBasis: "x1r8uery",
          minWidth: "xl9nvqe",
          "@media (max-width: 679px)_minWidth": "xwfmwtl",
          $$css: !0,
        },
      };
    function a(a) {
      var b = a.expanding;
      b = b === void 0 ? !0 : b;
      var d = a.primary;
      a = a.size;
      a = a === void 0 ? "medium" : a;
      var e = c("useCometDialogPlaceholderRemoveSelectorIds.react")();
      d = babelHelpers["extends"]({}, d, e);
      return h.jsx(c("CometColumnItem.react"), {
        paddingVertical: 16,
        children: h.jsx(c("BaseRow.react"), {
          align: "end",
          direction: "backward",
          verticalAlign: "stretch",
          wrap: "forward",
          children: h.jsx(c("BaseRowItem.react"), {
            expanding: b,
            xstyle: i.item,
            children: h.jsx(
              c("TetraButton.react"),
              babelHelpers["extends"]({ padding: "wide" }, d, { size: a })
            ),
          }),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometDialogFooter.react",
  [
    "CometDialogFooterContainer.react",
    "CometDialogFooterSingleButtonItem.react",
    "CometDialogMetaTextItem.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.expanding,
        d = a.meta,
        e = a.metaPosition;
      e = e === void 0 ? "above" : e;
      var f = a.primary;
      a = a.size;
      var g = d != null && e === "above",
        i = d != null && e === "below";
      return h.jsxs(c("CometDialogFooterContainer.react"), {
        children: [
          g &&
            h.jsx(c("CometDialogMetaTextItem.react"), {
              meta: d,
              metaPosition: e,
            }),
          h.jsx(c("CometDialogFooterSingleButtonItem.react"), {
            expanding: b,
            primary: f,
            size: a,
          }),
          i &&
            h.jsx(c("CometDialogMetaTextItem.react"), {
              meta: d,
              metaPosition: e,
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
  "useCometDeferredDialog",
  [
    "CometDialogContext",
    "CometDialogLoadingState.react",
    "CometSuspendedDialogImpl.react",
    "deferredLoadComponent",
    "react",
    "tracePolicyFromResource",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = c("react"),
      i = b.useCallback,
      j = b.useContext,
      k = function (a) {
        return h.jsx(c("CometDialogLoadingState.react"), { onClose: a });
      };
    function a(a, b) {
      var d = j(c("CometDialogContext"));
      return i(
        function (e, f) {
          var g = c("deferredLoadComponent")(a);
          d(
            c("CometSuspendedDialogImpl.react"),
            {
              dialog: g,
              dialogProps: babelHelpers["extends"]({}, e, {
                loadImmediately: !0,
              }),
              fallback: (g = b) != null ? g : k,
            },
            {
              loadType: "deferred",
              tracePolicy: c("tracePolicyFromResource")("comet.dialog", a),
            },
            f
          );
        },
        [d, a, b]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometEntryPointPrerendererWithQueryTimeoutPrivate",
  [
    "CometRelay",
    "clearTimeout",
    "react",
    "requireDeferred",
    "setTimeout",
    "stableStringify",
    "useCometPrerenderer",
    "useCometRelayEntrypointContextualEnvironmentProvider",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    b = d("react");
    var h = b.useCallback,
      i = b.useEffect,
      j = b.useRef,
      k = c("requireDeferred")("CometRelayEF").__setRef(
        "useCometEntryPointPrerendererWithQueryTimeoutPrivate"
      ),
      l = 3e4;
    function a(a, b, e, f) {
      var g = j(null),
        m = c("stableStringify")(b),
        n = j(null),
        o = h(function () {
          if (n.current == null) return;
          c("clearTimeout")(n.current);
          n.current = null;
        }, []),
        p = h(
          function () {
            var a;
            o();
            a =
              (a = g.current) == null
                ? void 0
                : (a = a.preloadedEntryPoint) == null
                ? void 0
                : a.dispose;
            a && a();
            g.current = null;
          },
          [o]
        ),
        q = h(
          function () {
            n.current = c("setTimeout")(function () {
              p();
            }, l);
          },
          [p]
        );
      i(
        function () {
          return p;
        },
        [p]
      );
      var r = c("useCometRelayEntrypointContextualEnvironmentProvider")(),
        s = h(
          function () {
            o();
            if (b == null) return;
            if (
              g.current == null ||
              g.current.entryPoint !== a ||
              g.current.preloadParamsHash !== m
            ) {
              p();
              g.current = {
                entryPoint: a,
                preloadedEntryPoint: d("CometRelay").loadEntryPoint(r, a, b),
                preloadParamsHash: m,
              };
              var c = k.getModuleIfRequireable();
              c && a && c.fetchPredictedResources(a, b);
            }
            return (c = g.current) == null ? void 0 : c.preloadedEntryPoint;
          },
          [o, a, p, r, m]
        ),
        t = h(
          function () {
            var c = k.getModuleIfRequireable();
            b && c && c.fetchPredictions(a, b);
            a.root.preload();
            Boolean(
              f == null
                ? void 0
                : f.queryIsCheap_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            ) && s();
          },
          [
            a,
            f == null ? void 0 : f.queryIsCheap_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
            b,
            s,
          ]
        );
      e = c("useCometPrerenderer")(e, !1, t, s, q);
      e[0];
      t = e[1];
      q = e[2];
      var u = e[3];
      e = e[4];
      var v = h(
        function () {
          var a = s();
          a != null && (g.current = null);
          return a;
        },
        [s]
      );
      return [
        v,
        { onHighIntent: e, onHoverIn: t, onHoverOut: q, onPressIn: u },
      ];
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometEntryPointPrerendererWithQueryTimeout",
  ["FBLogger", "react", "useCometEntryPointPrerendererWithQueryTimeoutPrivate"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;
    function a(a, b, d, e) {
      a = c("useCometEntryPointPrerendererWithQueryTimeoutPrivate")(a, b, d, e);
      var f = a[0];
      b = a[1];
      d = b.onHighIntent;
      e = b.onHoverIn;
      a = b.onHoverOut;
      b = b.onPressIn;
      var g = h(
        function (a, b) {
          var d = f();
          if (d == null) {
            c("FBLogger")("comet_ui")
              .blameToPreviousFrame()
              .mustfix(
                "Unable to present comet page EntryPoint component, preloadParams not set"
              );
            return;
          }
          var e = function () {
            b && b.apply(void 0, arguments);
            var a = d == null ? void 0 : d.dispose;
            a && a();
          };
          a(d, e);
        },
        [f]
      );
      return [g, e, a, b, d];
    }
    g["default"] = a;
  },
  98
);
__d(
  "useBaseEntryPointDialog",
  [
    "CometDialogContext",
    "CometRelay",
    "CometSuspendedDialogImpl.react",
    "react",
    "tracePolicyFromResource",
    "useCometEntryPointPrerendererWithQueryTimeout",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
      j = b.useContext;
    function k(a) {
      var b = a.onClose,
        c = a.onHide,
        e = a.otherProps;
      a = a.preloadedEntryPoint;
      e = babelHelpers["extends"]({}, e, { onClose: b, onHide: c });
      return h.jsx(d("CometRelay").EntryPointContainer, {
        entryPointReference: a,
        props: e,
      });
    }
    k.displayName = k.name + " [from " + f.id + "]";
    function a(a, b, d, e, f) {
      var g = j(c("CometDialogContext")),
        h = k;
      b = c("useCometEntryPointPrerendererWithQueryTimeout")(a, b, d, f);
      var l = b[0];
      f = b[1];
      var m = b[2],
        n = b[3];
      b = b[4];
      var o = i(
        function (b, f, i) {
          l(function (f, j) {
            g(
              c("CometSuspendedDialogImpl.react"),
              {
                dialog: h,
                dialogProps: { otherProps: b, preloadedEntryPoint: f },
                fallback: e,
              },
              {
                loadType: "entrypoint",
                preloadTrigger: d,
                tracePolicy:
                  (f = i) != null
                    ? f
                    : c("tracePolicyFromResource")("comet.dialog", a.root),
              },
              j
            );
          }, f);
        },
        [g, h, a.root, e, d, l]
      );
      return [o, f, m, n, b];
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometEntryPointDialog",
  ["CometDialogLoadingState.react", "react", "useBaseEntryPointDialog"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = function (a) {
        return h.jsx(c("CometDialogLoadingState.react"), { onClose: a });
      };
    function a(a, b, d, e, f) {
      return c("useBaseEntryPointDialog")(a, b, d, (a = e) != null ? a : i, f);
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometCard.react",
  ["BaseView.react", "isBlueprintStylesEnabled", "react", "stylex", "testID"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        "base-wash": { backgroundColor: "x1vtvx1t", $$css: !0 },
        "card-flat": { backgroundColor: "xlhe6ec", $$css: !0 },
        "dark-wash": { backgroundColor: "xatbrnm", $$css: !0 },
        error: { backgroundColor: "x1ciooss", $$css: !0 },
        highlight: { backgroundColor: "xwnonoy", $$css: !0 },
        "light-wash": { backgroundColor: "x443n21", $$css: !0 },
        transparent: { backgroundColor: "xjbqb8w", $$css: !0 },
        white: { backgroundColor: "x2bj2ny", $$css: !0 },
      },
      j = {
        borderHighlightAnimation: {
          animationDuration: "x1q3qbx4",
          animationFillMode: "x1u6ievf",
          animationName: "x1raiwjw",
          animationTimingFunction: "x11wifem",
          $$css: !0,
        },
        borderHighlightOverlay: {
          borderTopColor: "x1tz4bnf",
          borderEndColor: "xmds5ef",
          borderBottomColor: "x25epmt",
          borderStartColor: "x11y6y4w",
          borderTopStartRadius: "x1a2cdl4",
          borderTopEndRadius: "xnhgr82",
          borderBottomEndRadius: "x1qt0ttw",
          borderBottomStartRadius: "xgk8upj",
          borderTopStyle: "x13fuv20",
          borderEndStyle: "xu3j5b3",
          borderBottomStyle: "x1q0q8m5",
          borderStartStyle: "x26u7qi",
          borderTopWidth: "xamhcws",
          borderEndWidth: "xol2nv",
          borderBottomWidth: "xlxy82",
          borderStartWidth: "x19p7ews",
          bottom: "x1t1qrwb",
          end: "x15jmxi0",
          pointerEvents: "x47corl",
          position: "x10l6tqk",
          start: "x1uvgrom",
          top: "x1qiirwl",
          zIndex: "x1vjfegm",
          $$css: !0,
        },
        borderInset: {
          borderTopStartRadius: "x1lq5wgf",
          borderTopEndRadius: "xgqcy7u",
          borderBottomEndRadius: "x30kzoy",
          borderBottomStartRadius: "x9jhf4c",
          bottom: "x1ey2m1c",
          boxShadow: "xlg9a9y",
          boxSizing: "x9f619",
          end: "xds687c",
          pointerEvents: "x47corl",
          position: "x10l6tqk",
          start: "x17qophe",
          top: "x13vifvy",
          $$css: !0,
        },
        borderOnWash: {
          borderTopColor: "x8cjs6t",
          borderEndColor: "x1ch86jh",
          borderBottomColor: "x80vd3b",
          borderStartColor: "xckqwgs",
          $$css: !0,
        },
        borderOnWhite: {
          borderTopColor: "x8cjs6t",
          borderEndColor: "x1ch86jh",
          borderBottomColor: "x80vd3b",
          borderStartColor: "xckqwgs",
          $$css: !0,
        },
        borderSolid: {
          borderTopStyle: "x13fuv20",
          borderEndStyle: "xu3j5b3",
          borderBottomStyle: "x1q0q8m5",
          borderStartStyle: "x26u7qi",
          borderTopWidth: "x178xt8z",
          borderEndWidth: "xm81vs4",
          borderBottomWidth: "xso031l",
          borderStartWidth: "xy80clv",
          $$css: !0,
        },
        container: {
          display: "x78zum5",
          position: "x1n2onr6",
          width: "xh8yej3",
          $$css: !0,
        },
        expanding: { flexGrow: "x1iyjqo2", $$css: !0 },
        overflowHidden: {
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        root: {
          borderTopStartRadius: "x1qpq9i9",
          borderTopEndRadius: "xdney7k",
          borderBottomEndRadius: "xu5ydu1",
          borderBottomStartRadius: "xt3gfkd",
          width: "xh8yej3",
          $$css: !0,
        },
      },
      k = {
        1: { boxShadow: "xquyuld", $$css: !0 },
        2: { boxShadow: "x10h3on", $$css: !0 },
      };
    function a(a, b) {
      var d = a.allowOverflow;
      d = d === void 0 ? !1 : d;
      var e = a.background;
      e = e === void 0 ? "transparent" : e;
      var f = a.border;
      f = f === void 0 ? "none" : f;
      var g = a.borderHighlight,
        l = a.children,
        m = a.dropShadow;
      m = m === void 0 ? 0 : m;
      var n = a.expanding;
      n = n === void 0 ? !1 : n;
      var o = a.testid;
      a = a.xstyle;
      m = k[m];
      return h.jsxs(
        "div",
        babelHelpers["extends"](
          { className: c("stylex")(j.container, n && j.expanding) },
          c("testID")(o),
          {
            children: [
              h.jsx(c("BaseView.react"), {
                ref: b,
                style: {
                  borderRadius: c("isBlueprintStylesEnabled")()
                    ? "max(0px, min(12px, calc((100vw - 4px - 100%) * 9999))) / 12px"
                    : "max(0px, min(8px, calc((100vw - 4px - 100%) * 9999))) / 8px",
                },
                xstyle: [
                  i[e],
                  f === "solid" && e !== "white" && j.borderOnWash,
                  f === "solid" && e === "white" && j.borderOnWhite,
                  f === "solid" && j.borderSolid,
                  j.root,
                  !d && j.overflowHidden,
                  m,
                  a,
                ],
                children: l,
              }),
              f === "inset"
                ? h.jsx("div", {
                    className:
                      "x1lq5wgf xgqcy7u x30kzoy x9jhf4c x1ey2m1c xlg9a9y x9f619 xds687c x47corl x10l6tqk x17qophe x13vifvy",
                  })
                : null,
              g != null
                ? h.jsx("div", {
                    className: c("stylex")(
                      j.borderHighlightOverlay,
                      g === "animated" && j.borderHighlightAnimation
                    ),
                  })
                : null,
            ],
          }
        )
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "cometPushToast",
  [
    "ix",
    "BaseToasterStateManager",
    "CometIcon.react",
    "deferredLoadComponent",
    "fbicon",
    "react",
    "requireDeferred",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = c("BaseToasterStateManager").getInstance(),
      k = c("deferredLoadComponent")(
        c("requireDeferred")("CometToast.react").__setRef("cometPushToast")
      );
    function l(a, b, c) {
      b === void 0 && (b = 2750);
      var d = (c = c) != null ? c : j,
        e = d.push(
          i.jsx(
            k,
            babelHelpers["extends"]({}, a, {
              loadImmediately: !0,
              onDismiss: function () {
                return d.expire(e);
              },
            })
          ),
          b
        );
      return e;
    }
    function a(a, b) {
      return l({ message: a }, b);
    }
    function b(a, b, e) {
      b === void 0 && (b = 2750);
      return l(
        babelHelpers["extends"]({}, a, {
          icon: i.jsx(c("CometIcon.react"), {
            color: "warning",
            icon: d("fbicon")._(h("502062"), 20),
          }),
        }),
        b,
        e
      );
    }
    g.cometPushToast = l;
    g.cometPushSimpleToast = a;
    g.cometPushErrorToast = b;
  },
  98
);
__d(
  "CometSuspendWhileWaitingOnDOM.react",
  ["react", "suspendOrThrowIfUsedInSSR"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      a = a.children;
      c("suspendOrThrowIfUsedInSSR")(
        "CometSuspendWhileWaitingOnDOM: This component is marked to be client rendered"
      );
      return h.jsx(h.Fragment, { children: a });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometDOMOnlyBoundary.react",
  ["CometPlaceholder.react", "CometSuspendWhileWaitingOnDOM.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.children;
      a = a.fallback;
      return h.jsx(c("CometPlaceholder.react"), {
        fallback: a,
        children: h.jsx(c("CometSuspendWhileWaitingOnDOM.react"), {
          children: b,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometObjectFitContainer.react",
  [
    "cr:964538",
    "isStringNullOrEmpty",
    "react",
    "stylex",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        inner: {
          height: "x5yr21d",
          position: "x1n2onr6",
          width: "xh8yej3",
          $$css: !0,
        },
        innerWithAspectRatio: {
          bottom: "x1ey2m1c",
          boxSizing: "x9f619",
          end: "xds687c",
          position: "x10l6tqk",
          start: "x17qophe",
          top: "x13vifvy",
          $$css: !0,
        },
        outer: {
          height: "x5yr21d",
          position: "x1n2onr6",
          width: "xh8yej3",
          $$css: !0,
        },
        outerWithAspectRatio: { height: "xt7dq6l", $$css: !0 },
      };
    function j(a) {
      var b = a.children,
        d = a.debugRole;
      d = a.innerInlineStyle;
      var e = a.innerXStyle,
        f = a.outerInlineStyle,
        g = a.outerRef,
        j = a.outerXStyle;
      a = a.testid;
      var k = c("isStringNullOrEmpty")(a) ? void 0 : a + "-outer";
      k = c("isStringNullOrEmpty")(a) ? void 0 : a + "-inner";
      return h.jsx(
        "div",
        babelHelpers["extends"](
          {},
          {},
          {
            className: c("stylex")(i.outer, j),
            "data-testid": void 0,
            ref: g,
            style: f,
            children: h.jsx(
              "div",
              babelHelpers["extends"](
                {},
                {},
                {
                  className: c("stylex")(i.inner, e),
                  "data-testid": void 0,
                  style: d,
                  children: b,
                }
              )
            ),
          }
        )
      );
    }
    j.displayName = j.name + " [from " + f.id + "]";
    function a(a, b) {
      var d = a.children,
        e = a.contentAspectRatio,
        f = a.debugRole,
        g = a.objectFitMode;
      g = g === void 0 ? "CONTAINER_SIZE" : g;
      a = a.testid;
      a = 16 / 9;
      e = e != null && isFinite(e) && e > 0 ? e : a;
      if (g === "CONTAINER_WIDTH_BASED_ASPECT_RATIO") {
        a = isFinite(e) && e > 0 ? 100 / e : 100;
        e = { paddingBottom: a.toFixed(5) + "%" };
        return h.jsx(j, {
          children: d,
          debugRole: f,
          innerXStyle: i.innerWithAspectRatio,
          outerInlineStyle: e,
          outerRef: b,
          outerXStyle: i.outerWithAspectRatio,
          testid: void 0,
        });
      } else if (g === "CONTAINER_SIZE")
        return h.jsx(j, {
          children: d,
          debugRole: f,
          outerRef: b,
          testid: void 0,
        });
      else
        throw c("unrecoverableViolation")(
          "Unsupported objectFitMode " + g,
          "comet_ui"
        );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "CometThrottle",
  ["clearTimeout", "setTimeout", "unrecoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, d) {
      d = d === void 0 ? {} : d;
      var e = d.leading,
        f = d.trailing,
        g,
        h,
        i,
        j = null,
        k = 0,
        l = function () {
          var b = g;
          g = null;
          var d = h;
          h = null;
          if (b == null)
            throw c("unrecoverableViolation")(
              "It should be impossible for `cachedArgs` to be `null` at the moment we invoke the throttled function. Investigate why this is the case.",
              "comet_infra"
            );
          else return a.apply(d, b);
        },
        m = function () {
          (k = e === !1 ? 0 : new Date()), (j = null), (i = l());
        };
      d = function () {
        (g = h = null), j != null && (c("clearTimeout")(j), (j = null));
      };
      function n() {
        var a = new Date();
        !k && e === !1 && (k = a);
        var d = b - (a - k);
        d <= 0
          ? (c("clearTimeout")(j),
            (j = null),
            (k = a),
            (g = arguments),
            (h = this),
            (i = l()))
          : f !== !1 &&
            ((g = arguments), (h = this), j || (j = c("setTimeout")(m, d)));
        return i;
      }
      n.cancel = d;
      return n;
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometSize_DO_NOT_USE",
  [
    "CometThrottle",
    "ExecutionEnvironment",
    "FBLogger",
    "HiddenSubtreePassiveContext",
    "react",
    "useResizeObserver",
    "useStable",
    "useUnsafeRef_DEPRECATED",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useContext,
      i = b.useEffect,
      j = b.useLayoutEffect,
      k = b.useRef,
      l = b.useState;
    function m(a) {
      var b = a.setBoxStateStable,
        d = null,
        e = function (a) {
          var c;
          if (
            ((c = d) == null ? void 0 : c.height) === a.height &&
            ((c = d) == null ? void 0 : c.width) === a.width
          )
            return;
          d = a;
          b(a);
        };
      a = function (a) {
        a = a.getBoundingClientRect();
        var b = a.height;
        a = a.width;
        e({ height: b, width: a });
      };
      var f = c("CometThrottle")(
        function (a) {
          var b = a.height;
          a = a.width;
          if (b === 0 && a === 0) return;
          e({ height: b, width: a });
        },
        200,
        { leading: !0, trailing: !0 }
      );
      return { measure: a, onResizeThrottled: f };
    }
    function a() {
      if (!c("ExecutionEnvironment").canUseDOM)
        throw c("FBLogger")("comet_ssr")
          .blameToPreviousFile()
          .mustfixThrow(
            "useCometSize is not compatible with Server Rendering. This will break SSR! See https://fburl.com/wiki/xrzohrqb"
          );
      var a = k(null),
        b = l(null),
        d = b[0],
        e = b[1],
        f = h(c("HiddenSubtreePassiveContext")),
        g = c("useStable")(function () {
          return m({ setBoxStateStable: e });
        }),
        n = c("useResizeObserver")(g.onResizeThrottled),
        o = k(n);
      j(
        function () {
          o.current = n;
        },
        [n]
      );
      b = c("useUnsafeRef_DEPRECATED")(function (b) {
        b !== a.current && ((a.current = b), b != null && g.measure(b)),
          o.current(a.current);
      });
      i(
        function () {
          if (!f.getCurrentState().hidden) return;
          var b = f.subscribeToChanges(function (c) {
            !c.hidden &&
              a.current != null &&
              (g.measure(a.current), b.remove());
          });
          return function () {
            return b.remove();
          };
        },
        [f, g]
      );
      i(
        function () {
          return function () {
            g.onResizeThrottled.cancel();
          };
        },
        [g]
      );
      return [b.current, d];
    }
    g["default"] = a;
  },
  98
);
__d(
  "useIsCalledDuringRender",
  ["FBLogger", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = d("react").useCallback;
    function a() {
      var a;
      return h(
        function () {
          c("FBLogger")("comet_ui")
            .blameToPreviousFrame()
            .warn(
              "useIsCalledDuringRender should only be used for development purpose. It is implemented in a way that will not work correctly in production."
            );
          return !1;
        },
        [a]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useToggle",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useState;
    function a(a) {
      a === void 0 && (a = !1);
      a = i(a);
      var b = a[0],
        c = a[1];
      a = h(function (a) {
        c(
          a == null
            ? function (a) {
                return !a;
              }
            : a
        );
      }, []);
      return [b, a];
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometExceptionDialog.react",
  [
    "fbt",
    "BaseModal.react",
    "CometColumn.react",
    "CometColumnItem.react",
    "CometDialog.react",
    "CometDialogConfirmationFooter.react",
    "CometDialogFooter.react",
    "CometDialogHeader.react",
    "TetraText.react",
    "react",
    "useToggle",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.closeButtonText,
        d = a.debugInfo,
        e = a.errorDescription,
        f = a.errorSummary,
        g = a.onClose;
      a = a.testid;
      a = c("useToggle")(!1);
      var j = a[0],
        k = a[1];
      b = {
        label: (a = b) != null ? a : h._("OK"),
        onPress: g,
        testid: "comet-exception-dialog-ok-button",
      };
      a = {
        label: "[META ONLY] " + (j ? "Hide" : "Show") + " error details",
        onPress: function () {
          return k();
        },
        reduceEmphasis: !1,
      };
      a =
        d != null
          ? i.jsx(c("CometDialogConfirmationFooter.react"), {
              primary: b,
              secondary: a,
            })
          : i.jsx(c("CometDialogFooter.react"), {
              expanding: !1,
              primary: babelHelpers["extends"]({}, b, { padding: "wide" }),
            });
      return i.jsx(c("BaseModal.react"), {
        stackingBehavior: "above-everything",
        children: i.jsx(c("CometDialog.react"), {
          footer: a,
          header: i.jsx(c("CometDialogHeader.react"), { onClose: g, text: f }),
          onClose: g,
          testid: void 0,
          children: i.jsx(c("CometColumn.react"), {
            paddingHorizontal: 16,
            paddingTop: 20,
            paddingVertical: 8,
            spacing: 8,
            children: i.jsx(c("CometColumnItem.react"), {
              children: i.jsxs(c("TetraText.react"), {
                color: "secondary",
                type: "body3",
                children: [
                  e,
                  d != null &&
                    i.jsx("div", {
                      children:
                        j &&
                        i.jsx("pre", {
                          className:
                            "x443n21 xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x1a1m0xk x1yrsyyn x1iji9kk x10b6aqq x1sln4lm xeaf4i8",
                          children: d,
                        }),
                    }),
                ],
              }),
            }),
          }),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CoreVideoPlayerImplementationCallbacks",
  ["VideoPlayerAudioAvailabilityInfo", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useEffect,
      j = b.useRef;
    function a(a) {
      var b = a.coreVideoPlayerMetaData,
        c = a.dimensions,
        e = a.instanceKey,
        f = a.isFullscreen,
        g = a.onCoreVideoStatesChanged,
        k = a.renderWithCoreVideoStates,
        l = a.videoPlayerPassiveViewabilityInfo,
        m = h(
          function (a) {
            var g,
              h = a.implementationController;
            a = a.implementationExposedState;
            g = {
              adClientToken: b.adClientToken,
              audioAvailabilityInfo:
                (g = b.audioAvailabilityInfo) != null
                  ? g
                  : d("VideoPlayerAudioAvailabilityInfo")
                      .VideoPlayerAudioAvailabilityInfoDefault,
              autoplayGatingResult:
                b.autoplayGatingResult != null
                  ? b.autoplayGatingResult
                  : "unknown",
              autoplaySetting: b.autoplaySetting,
              broadcastStatus: b.broadcastStatus,
              canAutoplay: b.canAutoplay != null ? b.canAutoplay : "allow",
              controller: h,
              dimensions: c,
              duration: a.duration,
              initialTracePolicy: b.initialTracePolicy,
              instanceKey: e,
              isDesktopPictureInPicture: a.isDesktopPictureInPicture,
              isFullscreen: f,
              isNCSR: Boolean(b.isNCSR),
              isPremiumMusicVideo: Boolean(b.isPremiumMusicVideo),
              lastMuteReason: a.lastMuteReason,
              lastPauseReason: a.lastPauseReason,
              lastPlayReason: a.lastPlayReason,
              loopCount: a.loopCount,
              loopCurrent: a.loopCurrent,
              videoFBID: b.videoFBID,
              videoPixelsAspectRatio: b.videoPixelsAspectRatio,
              videoPlayerPassiveViewabilityInfo: l,
              videoState: a,
              volumeSetting: b.volumeSetting,
            };
            return g;
          },
          [b, c, e, f, l]
        );
      a = h(
        function (a) {
          a = m(a);
          return k(a);
        },
        [k, m]
      );
      var n = j(null),
        o = h(
          function (a) {
            n.current = a.implementationController;
            if (g) {
              a = m(a);
              g(a);
            }
          },
          [g, m]
        );
      i(
        function () {
          var a = n.current;
          if (g && a) {
            a = m({
              implementationController: a,
              implementationExposedState: a.getCurrentState(),
            });
            g(a);
          }
        },
        [g, m]
      );
      return { onExposedStateChanged: o, renderWithExposedState: a };
    }
    g.useImplementationCallbacks = a;
  },
  98
);
__d(
  "VideoPlayerViewabilityConstants",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = { DEFAULT_VIEWABILITY_PERCENTAGE_FOR_PAUSE: 0.5 };
    b = a;
    f["default"] = b;
  },
  66
);
__d(
  "VideoPlayerOnViewability.react",
  [
    "DOMRectIsEqual",
    "DOMRectReadOnly",
    "VideoPlayerViewabilityConstants",
    "emptyFunction",
    "react",
    "useIntersectionObserver",
    "useUnsafeRef_DEPRECATED",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
      j = b.useMemo,
      k = b.useRef,
      l = 10,
      m = [0.25, 0.75, 0.99, 1].concat(
        new Array(10).fill().map(function (a, b) {
          return b / 10;
        })
      );
    function a(a) {
      var b = a.viewportMargins,
        d = k(-1),
        e = k(-1),
        f = k(
          c("DOMRectReadOnly").fromRect({ height: 0, width: 0, x: 0, y: 0 })
        ),
        g = k(null),
        n = k(null);
      b =
        -b.top + "px " + -b.right + "px " + -b.bottom + "px " + -b.left + "px";
      var o = a.onVideoPlayerViewabilityInfoChange || c("emptyFunction"),
        p = l,
        q = i(
          function (a) {
            if (
              a.time > e.current &&
              !c("DOMRectIsEqual")(a.boundingClientRect, f.current)
            ) {
              var b = a.boundingClientRect,
                d = b.height,
                h = b.width,
                i = b.x;
              b = b.y;
              var j = g.current;
              d = c("DOMRectReadOnly").fromRect({
                height: d,
                width: h,
                x: i,
                y: b,
              });
              f.current = d;
              e.current = a.time;
              if (j === null || j <= 0) return;
              if (
                j <=
                c("VideoPlayerViewabilityConstants")
                  .DEFAULT_VIEWABILITY_PERCENTAGE_FOR_PAUSE
              )
                return;
              o({ positionToViewport: d, visiblePercentage: j });
            }
          },
          [f, g, o]
        ),
        r = i(
          function (a) {
            if (
              a.time > d.current &&
              (a.intersectionRatio !== g.current ||
                !c("DOMRectIsEqual")(a.boundingClientRect, f.current))
            ) {
              var b = a.boundingClientRect,
                h = b.height,
                i = b.width,
                j = b.x;
              b = b.y;
              var k = a.intersectionRatio;
              h = c("DOMRectReadOnly").fromRect({
                height: h,
                width: i,
                x: j,
                y: b,
              });
              i = n.current;
              j = i;
              b = !1;
              var l = Math.abs((i || 0) * 100 - (k || 0) * 100);
              ((k !== null && l >= 1) || (l > 0 && k < (i || 0))) &&
                ((j = k), (n.current = k), (b = !0));
              g.current = k;
              d.current = a.time;
              l = f.current;
              f.current = h;
              e.current = a.time;
              if (!b && c("DOMRectIsEqual")(l, h)) return;
              j !== null && o({ positionToViewport: h, visiblePercentage: j });
            }
          },
          [e, f, g, o, d]
        ),
        s = j(
          function () {
            var b = [];
            for (var a = 1; a <= p; a++)
              b.push("-" + (100 - (a / p) * 100) + "% 0% 0% 0%");
            return b;
          },
          [p]
        ),
        t = c("useUnsafeRef_DEPRECATED")([]);
      t.current = [];
      for (var u = 0; u < s.length; u++)
        t.current.push(
          i(
            c("useIntersectionObserver")(q, {
              root: null,
              rootMargin: s[u],
              threshold: m,
            }),
            [s[u], m, c("useIntersectionObserver")]
          )
        );
      var v = t.current.length,
        w = i(
          function (a) {
            for (var b = 0; b < v; b++) t.current[b](a);
          },
          [v, t]
        ),
        x = i(
          c("useIntersectionObserver")(r, {
            root: null,
            rootMargin: b,
            threshold: m,
          }),
          [r, b, m, c("useIntersectionObserver")]
        );
      u = i(
        function (a) {
          x(a), w(a);
        },
        [x, w]
      );
      return h.jsx("div", {
        className: "x5yr21d x1uhb9sk xh8yej3",
        ref: u,
        children: h.Children.only(a.children),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "renderVideoPlayerImplementation",
  ["react", "unrecoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a, b) {
      if (a.typename === "VideoPlayerEmptyImplementation")
        return h.jsx(a.Component, babelHelpers["extends"]({}, b, a.data));
      else if (a.typename === "VideoPlayerOzImplementation")
        return h.jsx(a.Component, babelHelpers["extends"]({}, b, a.data));
      else if (a.typename === "VideoPlayerProgressiveImplementation")
        return h.jsx(a.Component, babelHelpers["extends"]({}, b, a.data));
      else
        throw c("unrecoverableViolation")(
          'CoreVideoPlayer: Unrecognized implementation typename "' +
            a.typename +
            '".',
          "comet_video_player"
        );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useCreateVideoPlayerPassiveViewabilityInfo",
  ["removeFromArray", "useStable"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      return c("useStable")(function () {
        var a = [],
          b = null;
        return {
          setVideoPlayerPassiveViewabilityInfo: function (c) {
            (b = c),
              a.forEach(function (a) {
                return a();
              });
          },
          videoPlayerPassiveViewabilityInfo: {
            getCurrent: function () {
              return b;
            },
            subscribe: function (b) {
              a.push(b);
              return {
                remove: function () {
                  c("removeFromArray")(a, b);
                },
              };
            },
          },
        };
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "videoPlayerUniqueID",
  ["guid"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      return "id-vpuid-" + c("guid")();
    }
    g["default"] = a;
  },
  98
);
__d(
  "CoreVideoPlayer.react",
  [
    "CometObjectFitContainer.react",
    "CoreVideoPlayerImplementationCallbacks",
    "ErrorMetadata",
    "FBLogger",
    "VideoPlayerOnViewability.react",
    "VideoPlayerViewabilityContexts",
    "cr:1136",
    "createVideoStateHook",
    "err",
    "react",
    "renderVideoPlayerImplementation",
    "useCometSize_DO_NOT_USE",
    "useCreateVideoPlayerPassiveViewabilityInfo",
    "useStable",
    "videoPlayerUniqueID",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    e = d("react");
    var i = e.useCallback,
      j = e.useRef,
      k = 584;
    function l(a) {
      return a != null && isFinite(a) && a > 0 ? a : 0;
    }
    function m(a) {
      if (a === "video_home_inline" || a === "inline")
        return { height: k, width: k };
      else return { height: 1080, width: 1920 };
    }
    var n = function (a) {
      var b = c("useCometSize_DO_NOT_USE")(),
        d = b[0];
      b = b[1];
      b = (b = b) != null ? b : m(a);
      return [
        b,
        function (a) {
          return h.jsx(c("CometObjectFitContainer.react"), {
            debugRole: null,
            objectFitMode: "CONTAINER_SIZE",
            ref: d,
            children: a,
          });
        },
      ];
    };
    function o(a) {
      var b = a.accessToken,
        e = a.expiredVideoUrlRefreshHandler,
        f = a.fullscreenController,
        g = a.implementation,
        k = a.isFullscreen,
        m = a.onCoreVideoStatesChanged,
        o = a.productAttribution,
        p = a.renderWithCoreVideoStates,
        q = a.trackingDataEncrypted,
        r = a.trackingNodes,
        s = a.viewportMarginsForViewability;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "accessToken",
        "expiredVideoUrlRefreshHandler",
        "fullscreenController",
        "implementation",
        "isFullscreen",
        "onCoreVideoStatesChanged",
        "productAttribution",
        "renderWithCoreVideoStates",
        "trackingDataEncrypted",
        "trackingNodes",
        "viewportMarginsForViewability",
      ]);
      var t = c("useStable")(c("videoPlayerUniqueID"));
      d("createVideoStateHook").useCleanupVideoStateHooks_INTERNAL(t);
      var u = j(0),
        v = c("useCreateVideoPlayerPassiveViewabilityInfo")(),
        w = v.setVideoPlayerPassiveViewabilityInfo;
      v = v.videoPlayerPassiveViewabilityInfo;
      var x = n(a.subOrigin),
        y = x[0];
      x = x[1];
      var z = i(
        function (a) {
          w(a);
        },
        [w]
      );
      m = d(
        "CoreVideoPlayerImplementationCallbacks"
      ).useImplementationCallbacks({
        coreVideoPlayerMetaData: a,
        dimensions: y,
        instanceKey: t,
        isFullscreen: k,
        onCoreVideoStatesChanged: m,
        renderWithCoreVideoStates: p,
        videoPlayerPassiveViewabilityInfo: v,
      });
      p = m.onExposedStateChanged;
      m = m.renderWithExposedState;
      b = {
        accessToken: b,
        coreVideoPlayerMetaData: a,
        dimensions: y,
        instanceKey: t,
        playerImplementationInstanceCountRef: u,
        productAttribution: o,
        trackingDataEncrypted: q,
        trackingNodes: r,
      };
      t = Boolean(a.captionsUrl);
      u = Boolean(a.isLiveStreaming);
      r = {
        VideoPlayerShakaPerformanceLoggerClass:
          a.VideoPlayerShakaPerformanceLoggerClass,
        alt: a.alt,
        alwaysShowCaptions: a.alwaysShowCaptions,
        areCaptionsAutogenerated: a.areCaptionsAutogenerated,
        audioOnly: a.audioOnly,
        broadcastLatencySensitivity: a.broadcastLatencySensitivity,
        bufferEndLimit: a.bufferEndLimit,
        captionDisplayStyle: a.captionDisplayStyle,
        captionsUrl: a.captionsUrl,
        dimensions: y,
        disableLogging: a.disableLogging === !0,
        expiredVideoUrlRefreshHandler: e,
        fullscreenController: f,
        graphQLVideoDRMInfo: (o = a.graphQLVideoDRMInfo) != null ? o : null,
        graphQLVideoP2PSettings:
          (q = a.graphQLVideoP2PSettings) != null ? q : null,
        inbandCaptionsExpected: u,
        initialDesiredLatencyMs: a.desiredLatencyMs,
        initialLatencyToleranceMs: a.latencyToleranceMs,
        initialRepresentationIds: a.initialRepresentationIds,
        isClientTriggeredTraceEnabled: a.isClientTriggeredTraceEnabled,
        loadSequence: a.loadSequence,
        loggingMetaData: b,
        loopCount: a.loopCount,
        onExposedStateChanged: p,
        poster: a.poster,
        preloadForProgressiveDisabled: a.preloadForProgressiveDisabled,
        renderVideoPixelsFit: a.renderVideoPixelsFit,
        renderWithExposedState: m,
        seoWebCrawlerVideoTracks: a.seoWebCrawlerVideoTracks,
        sideLoadCaptionsExpected: t,
        startTimestamp: l(a.startTimestamp),
        videoFBID: a.videoFBID,
        videoPlayerPassiveViewabilityInfo: v,
        videoPlayerShakaPerformanceLoggerBuilder:
          a.videoPlayerShakaPerformanceLoggerBuilder,
        wrapVideoPixels_EXPERIMENTAL: a.wrapVideoPixels_EXPERIMENTAL,
      };
      return x(
        h.jsx(
          d("VideoPlayerViewabilityContexts").VideoPlayerFullscreenContext
            .Provider,
          {
            value: k,
            children: h.jsx(c("VideoPlayerOnViewability.react"), {
              onVideoPlayerViewabilityInfoChange: z,
              viewportMargins: s,
              children: c("renderVideoPlayerImplementation")(g, r),
            }),
          }
        )
      );
    }
    o.displayName = o.name + " [from " + f.id + "]";
    function a(a) {
      var d = a.implementations;
      a = babelHelpers.objectWithoutPropertiesLoose(a, ["implementations"]);
      if (d.length === 0) {
        var e,
          f = c("err")("No implementations given to CoreVideoPlayer");
        f.name = "VideoPlayerNoImplementations";
        f.project = "comet_video_player";
        e = (e = f.metadata) != null ? e : new (c("ErrorMetadata"))();
        f.metadata = e;
        var g = a.videoFBID;
        g != null && e.addEntry("COMET_VIDEO", "VIDEO_ID", g);
        throw (e =
          c("FBLogger")("comet_video_player").catching(f)).mustfixThrow.apply(
          e,
          [(g = f.messageFormat) != null ? g : f.message].concat(
            f.messageFormat != null
              ? (e = f.messageParams) != null
                ? e
                : []
              : []
          )
        );
      }
      return b("cr:1136")
        ? h.jsx(b("cr:1136"), {
            CoreVideoPlayerWithOneImplementation: o,
            coreVideoPlayerProps: a,
            implementations: d,
          })
        : h.jsx(o, babelHelpers["extends"]({}, a, { implementation: d[0] }));
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CoreVideoPlayerFitParentContainer.react",
  ["DOMContainer.react", "cr:964538", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = h.forwardRef(function (a, b) {
      var c = a.children,
        d = a.debugRole;
      d = a.testid;
      return h.jsx(
        "div",
        babelHelpers["extends"]({}, null, {
          className: "x1lliihq x5yr21d x1n2onr6 xh8yej3 x1ja2u2z",
          "data-testid": void 0,
          ref: b,
          children: c,
        })
      );
    });
    e = h.forwardRef(function (a, b) {
      var d = a.debugRole;
      d = a.domElement;
      return h.jsx(
        c("DOMContainer.react"),
        babelHelpers["extends"]({}, null, {
          className: "x1lliihq x5yr21d x1n2onr6 xh8yej3 x1ja2u2z",
          display: "block",
          ref: b,
          children: d,
        })
      );
    });
    function a(a) {
      a = a.debugRole;
      a = document.createElement("div");
      a.className = "x1lliihq x5yr21d x1n2onr6 xh8yej3 x1ja2u2z";
      return a;
    }
    g.CoreVideoPlayerFitParentContainer = b;
    g.CoreVideoPlayerFitParentDOMContainer = e;
    g.createFitParentContainerDiv = a;
  },
  98
);
__d(
  "cometUniqueID",
  ["ExecutionEnvironment"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 0,
      i;
    c("ExecutionEnvironment").canUseDOM ? (i = "c") : (i = "s");
    function a() {
      return "jsc_" + i + "_" + (h++).toString(36);
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometAudioManagerContexts",
  ["cometUniqueID", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react").createContext;
    function a() {
      return c("cometUniqueID")();
    }
    e = b({
      muted: !0,
      setMuted: function () {},
      setVolume: function () {},
      volume: 1,
    });
    f = b(null);
    d = b(null);
    g.makeAudioGroupID = a;
    g.CometAudioLocalScopeContext = e;
    g.CometAudioGroupContext = f;
    g.AudioApiContext = d;
  },
  98
);
__d(
  "CoreVideoPlayerAutoplayClientUtils",
  ["gkx"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {}
    function b(a, b, c, d) {
      return a === "PAUSE" && b === "PAUSE" && !c && d;
    }
    g.log = a;
    g.componentShouldPause = b;
  },
  98
);
__d(
  "createEvaluateVideoAutoplayIgnoreOnLowBandwidthRule",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      function b(b) {
        return b.bandwidthEstimate < a ? "IGNORE" : "SKIP";
      }
      b.displayName = "evaluateVideoAutoplayIgnoreOnLowBandwidthRule";
      return b;
    }
    f["default"] = a;
  },
  66
);
__d(
  "createEvaluateVideoAutoplayPauseOnInvisibleRule",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      function b(b) {
        b = b.videoPlayerPassiveViewabilityInfo;
        b = b && b.getCurrent();
        b = b ? b.visiblePercentage : null;
        b = b === null || b >= a;
        return b ? "SKIP" : "PAUSE";
      }
      b.displayName = "evaluateVideoAutoplayPauseOnInvisibleRule:" + a + "%";
      return b;
    }
    f["default"] = a;
  },
  66
);
__d(
  "createEvaluateVideoAutoplayPauseOnMutedInvisibleRule",
  ["createEvaluateVideoAutoplayPauseOnInvisibleRule"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b = c("createEvaluateVideoAutoplayPauseOnInvisibleRule")(a);
      function d(a) {
        return a.muted ? b(a) : "SKIP";
      }
      d.displayName =
        "evaluateVideoAutoplayPauseOnMutedInvisibleRule:" + a + "%";
      return d;
    }
    g["default"] = a;
  },
  98
);
__d(
  "evaluateVideoAutoplayDefaultIgnoreRule",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a() {
      return "IGNORE";
    }
    a.displayName = "evaluateVideoAutoplayDefaultIgnoreRule";
    f["default"] = a;
  },
  66
);
__d(
  "evaluateVideoAutoplayIgnoreExternalMediaRule",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return a.isExternalMedia ? "IGNORE" : "SKIP";
    }
    a.displayName = "evaluateVideoAutoplayIgnoreExternalMediaRule";
    f["default"] = a;
  },
  66
);
__d(
  "evaluateVideoAutoplayIgnoreOnBroadcastEndedRule",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      var b = a.ended;
      a = a.broadcastStatus != null;
      return a && b ? "IGNORE" : "SKIP";
    }
    a.displayName = "evaluateVideoAutoplayIgnoreOnBroadcastEndedRule";
    f["default"] = a;
  },
  66
);
__d(
  "evaluateVideoAutoplayIgnoreOnEndedRule",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      a = a.ended;
      return a ? "IGNORE" : "SKIP";
    }
    a.displayName = "evaluateVideoAutoplayIgnoreOnEndedRule";
    f["default"] = a;
  },
  66
);
__d(
  "evaluateVideoAutoplayIgnoreOnFrozenRule",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      a = a.isFrozenPassive;
      a = a.getCurrentState();
      return a ? "IGNORE" : "SKIP";
    }
    a.displayName = "evaluateVideoAutoplayIgnoreOnFrozenRule";
    f["default"] = a;
  },
  66
);
__d(
  "evaluateVideoAutoplayIgnoreOnUnmuteRule",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      var b = a.muted;
      a = a.paused;
      return !b && !a ? "IGNORE" : "SKIP";
    }
    a.displayName = "evaluateVideoAutoplayIgnoreOnUnmuteRule";
    f["default"] = a;
  },
  66
);
__d(
  "evaluateVideoAutoplayIgnoreOnUserPausedRule",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      var b = a.paused;
      a = a.lastPauseReason;
      return b && (a === "user_initiated" || a === "other_user_initiated")
        ? "IGNORE"
        : "SKIP";
    }
    a.displayName = "evaluateVideoAutoplayIgnoreOnUserPausedRule";
    f["default"] = a;
  },
  66
);
__d(
  "evaluateVideoAutoplayIgnoreOnUserPlayRule",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      var b = a.paused,
        c = a.muted;
      a = a.lastPlayReason;
      return !c &&
        !b &&
        (a === "user_initiated" || a === "other_user_initiated")
        ? "IGNORE"
        : "SKIP";
    }
    a.displayName = "evaluateVideoAutoplayIgnoreOnUserPlayRule";
    f["default"] = a;
  },
  66
);
__d(
  "evaluateVideoAutoplayPauseOnAdInvisibleRule",
  ["VideoPlayerViewabilityConstants"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b = a.adClientToken;
      a = a.videoPlayerPassiveViewabilityInfo;
      a = a && a.getCurrent();
      a = a ? a.visiblePercentage : null;
      a =
        a === null ||
        a >=
          c("VideoPlayerViewabilityConstants")
            .DEFAULT_VIEWABILITY_PERCENTAGE_FOR_PAUSE;
      return b != null && !a ? "PAUSE" : "SKIP";
    }
    a.displayName = "evaluateVideoAutoplayPauseOnAdInvisibleRule";
    g["default"] = a;
  },
  98
);
__d(
  "evaluateVideoAutoplayPauseOnAdMutedBackgroundedRule",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    b = !1;
    function a(a) {
      var b = a.adClientToken,
        c = a.hiddenSubtreePassive,
        d = a.muted;
      a = a.isDocumentHiddenOrBlurred || c.getCurrentState().backgrounded;
      c = b != null;
      return !a || !d ? "SKIP" : a && d && c ? "PAUSE" : "SKIP";
    }
    a.displayName = "evaluateVideoAutoplayPauseOnAdMutedBackgroundedRule";
    f["default"] = a;
  },
  66
);
__d(
  "evaluateVideoAutoplayPauseOnBackgroundedRule",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      var b = a.hiddenSubtreePassive;
      a = a.isDocumentHiddenOrBlurred || b.getCurrentState().backgrounded;
      return a ? "PAUSE" : "SKIP";
    }
    a.displayName = "evaluateVideoAutoplayPauseOnBackgroundedRule";
    f["default"] = a;
  },
  66
);
__d(
  "evaluateVideoAutoplayPauseOnBackgroundedSubtreeRule",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      a = a.hiddenSubtreePassive;
      return a.getCurrentState().backgrounded ? "PAUSE" : "SKIP";
    }
    f["default"] = a;
  },
  66
);
__d(
  "evaluateVideoAutoplayPauseOnHiddenSubtreeRule",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      a = a.hiddenSubtreePassive;
      return a.getCurrentState().hidden ? "PAUSE" : "SKIP";
    }
    a.displayName = "evaluateVideoAutoplayPauseOnHiddenSubtreeRule";
    f["default"] = a;
  },
  66
);
__d(
  "evaluateVideoAutoplayPauseOnMutedBackgroundedRule",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    b = !1;
    function a(a) {
      var b = a.hiddenSubtreePassive,
        c = a.muted;
      a = a.isDocumentHiddenOrBlurred || b.getCurrentState().backgrounded;
      return a ? (a && c ? "PAUSE" : "SKIP") : "SKIP";
    }
    a.displayName = "evaluateVideoAutoplayPauseOnMutedBackgroundedRule";
    f["default"] = a;
  },
  66
);
__d(
  "VideoPlayerAutoplayRulesProvider",
  [
    "VideoPlayerViewabilityConstants",
    "createEvaluateVideoAutoplayIgnoreOnLowBandwidthRule",
    "createEvaluateVideoAutoplayPauseOnInvisibleRule",
    "createEvaluateVideoAutoplayPauseOnMutedInvisibleRule",
    "evaluateVideoAutoplayDefaultIgnoreRule",
    "evaluateVideoAutoplayIgnoreExternalMediaRule",
    "evaluateVideoAutoplayIgnoreOnBroadcastEndedRule",
    "evaluateVideoAutoplayIgnoreOnEndedRule",
    "evaluateVideoAutoplayIgnoreOnFrozenRule",
    "evaluateVideoAutoplayIgnoreOnUnmuteRule",
    "evaluateVideoAutoplayIgnoreOnUserPausedRule",
    "evaluateVideoAutoplayIgnoreOnUserPlayRule",
    "evaluateVideoAutoplayPauseOnAdInvisibleRule",
    "evaluateVideoAutoplayPauseOnAdMutedBackgroundedRule",
    "evaluateVideoAutoplayPauseOnBackgroundedRule",
    "evaluateVideoAutoplayPauseOnBackgroundedSubtreeRule",
    "evaluateVideoAutoplayPauseOnHiddenSubtreeRule",
    "evaluateVideoAutoplayPauseOnMutedBackgroundedRule",
    "gkx",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = 25e4;
    d = [
      c("evaluateVideoAutoplayIgnoreOnFrozenRule"),
      c("evaluateVideoAutoplayPauseOnAdInvisibleRule"),
      c("createEvaluateVideoAutoplayPauseOnInvisibleRule")(
        c("VideoPlayerViewabilityConstants")
          .DEFAULT_VIEWABILITY_PERCENTAGE_FOR_PAUSE
      ),
      c("evaluateVideoAutoplayPauseOnAdMutedBackgroundedRule"),
      c("evaluateVideoAutoplayPauseOnHiddenSubtreeRule"),
      c("evaluateVideoAutoplayIgnoreOnUnmuteRule"),
      c("evaluateVideoAutoplayIgnoreOnUserPausedRule"),
      c("evaluateVideoAutoplayIgnoreOnUserPlayRule"),
      c("evaluateVideoAutoplayIgnoreOnEndedRule"),
    ];
    e = [
      c("evaluateVideoAutoplayIgnoreOnFrozenRule"),
      c("evaluateVideoAutoplayPauseOnAdInvisibleRule"),
      c("createEvaluateVideoAutoplayPauseOnInvisibleRule")(
        c("VideoPlayerViewabilityConstants")
          .DEFAULT_VIEWABILITY_PERCENTAGE_FOR_PAUSE
      ),
      c("createEvaluateVideoAutoplayIgnoreOnLowBandwidthRule")(b),
      c("evaluateVideoAutoplayPauseOnMutedBackgroundedRule"),
      c("evaluateVideoAutoplayPauseOnHiddenSubtreeRule"),
      c("evaluateVideoAutoplayIgnoreOnUnmuteRule"),
      c("evaluateVideoAutoplayIgnoreOnUserPausedRule"),
      c("evaluateVideoAutoplayIgnoreOnUserPlayRule"),
      c("evaluateVideoAutoplayIgnoreOnEndedRule"),
    ];
    f = [
      c("evaluateVideoAutoplayIgnoreOnFrozenRule"),
      c("createEvaluateVideoAutoplayIgnoreOnLowBandwidthRule")(b),
      c("evaluateVideoAutoplayPauseOnMutedBackgroundedRule"),
      c("evaluateVideoAutoplayIgnoreOnUnmuteRule"),
      c("evaluateVideoAutoplayIgnoreOnUserPausedRule"),
      c("evaluateVideoAutoplayIgnoreOnUserPlayRule"),
      c("evaluateVideoAutoplayIgnoreOnEndedRule"),
    ];
    var h = [
      c("evaluateVideoAutoplayIgnoreOnFrozenRule"),
      c("createEvaluateVideoAutoplayPauseOnInvisibleRule")(
        c("VideoPlayerViewabilityConstants")
          .DEFAULT_VIEWABILITY_PERCENTAGE_FOR_PAUSE
      ),
      c("evaluateVideoAutoplayPauseOnHiddenSubtreeRule"),
      c("evaluateVideoAutoplayIgnoreOnUserPausedRule"),
      c("evaluateVideoAutoplayIgnoreOnUserPlayRule"),
      c("evaluateVideoAutoplayIgnoreOnEndedRule"),
    ];
    b = [
      c("evaluateVideoAutoplayIgnoreOnFrozenRule"),
      c("evaluateVideoAutoplayPauseOnAdInvisibleRule"),
      c("evaluateVideoAutoplayPauseOnAdMutedBackgroundedRule"),
      c("evaluateVideoAutoplayPauseOnHiddenSubtreeRule"),
      c("createEvaluateVideoAutoplayIgnoreOnLowBandwidthRule")(b),
      c("evaluateVideoAutoplayIgnoreOnUserPausedRule"),
    ];
    b.push(
      c("createEvaluateVideoAutoplayPauseOnInvisibleRule")(
        c("VideoPlayerViewabilityConstants")
          .DEFAULT_VIEWABILITY_PERCENTAGE_FOR_PAUSE
      )
    );
    c("gkx")("1564135")
      ? b.push(c("evaluateVideoAutoplayIgnoreOnBroadcastEndedRule"))
      : b.push(c("evaluateVideoAutoplayIgnoreOnEndedRule"));
    b = b.slice();
    var i = [
        c("evaluateVideoAutoplayIgnoreOnFrozenRule"),
        c("evaluateVideoAutoplayPauseOnAdInvisibleRule"),
        c("createEvaluateVideoAutoplayPauseOnMutedInvisibleRule")(0.01),
        c("evaluateVideoAutoplayPauseOnAdMutedBackgroundedRule"),
        c("evaluateVideoAutoplayPauseOnHiddenSubtreeRule"),
        c("evaluateVideoAutoplayIgnoreOnUnmuteRule"),
        c("evaluateVideoAutoplayIgnoreOnUserPausedRule"),
        c("evaluateVideoAutoplayIgnoreOnUserPlayRule"),
        c("evaluateVideoAutoplayIgnoreOnEndedRule"),
      ].filter(Boolean),
      j = [
        c("evaluateVideoAutoplayIgnoreOnFrozenRule"),
        c("createEvaluateVideoAutoplayPauseOnInvisibleRule")(
          c("VideoPlayerViewabilityConstants")
            .DEFAULT_VIEWABILITY_PERCENTAGE_FOR_PAUSE
        ),
        c("evaluateVideoAutoplayPauseOnHiddenSubtreeRule"),
        c("evaluateVideoAutoplayIgnoreOnUnmuteRule"),
        c("evaluateVideoAutoplayIgnoreOnUserPausedRule"),
        c("evaluateVideoAutoplayIgnoreOnUserPlayRule"),
        c("evaluateVideoAutoplayIgnoreOnEndedRule"),
      ],
      k = [
        c("evaluateVideoAutoplayIgnoreOnFrozenRule"),
        c("createEvaluateVideoAutoplayPauseOnInvisibleRule")(
          c("VideoPlayerViewabilityConstants")
            .DEFAULT_VIEWABILITY_PERCENTAGE_FOR_PAUSE
        ),
        c("evaluateVideoAutoplayPauseOnHiddenSubtreeRule"),
        c("evaluateVideoAutoplayIgnoreOnUnmuteRule"),
        c("evaluateVideoAutoplayIgnoreOnUserPausedRule"),
        c("evaluateVideoAutoplayIgnoreOnUserPlayRule"),
        c("evaluateVideoAutoplayIgnoreOnEndedRule"),
      ],
      l = [
        c("evaluateVideoAutoplayIgnoreOnFrozenRule"),
        c("evaluateVideoAutoplayPauseOnAdInvisibleRule"),
        c("evaluateVideoAutoplayPauseOnAdMutedBackgroundedRule"),
        c("evaluateVideoAutoplayPauseOnHiddenSubtreeRule"),
        c("evaluateVideoAutoplayIgnoreOnUnmuteRule"),
        c("evaluateVideoAutoplayIgnoreOnUserPausedRule"),
        c("evaluateVideoAutoplayIgnoreOnUserPlayRule"),
        c("evaluateVideoAutoplayIgnoreOnEndedRule"),
      ],
      m = [
        c("evaluateVideoAutoplayIgnoreOnFrozenRule"),
        c("evaluateVideoAutoplayPauseOnAdInvisibleRule"),
        c("evaluateVideoAutoplayPauseOnHiddenSubtreeRule"),
        c("evaluateVideoAutoplayIgnoreOnUserPausedRule"),
        c("evaluateVideoAutoplayIgnoreOnUserPlayRule"),
        c("evaluateVideoAutoplayIgnoreOnEndedRule"),
      ],
      n = [
        c("evaluateVideoAutoplayIgnoreOnFrozenRule"),
        c("evaluateVideoAutoplayPauseOnHiddenSubtreeRule"),
        c("evaluateVideoAutoplayIgnoreOnUnmuteRule"),
        c("evaluateVideoAutoplayIgnoreOnUserPausedRule"),
        c("evaluateVideoAutoplayIgnoreOnUserPlayRule"),
        c("evaluateVideoAutoplayIgnoreOnEndedRule"),
      ],
      o = [
        c("evaluateVideoAutoplayIgnoreOnFrozenRule"),
        c("evaluateVideoAutoplayPauseOnHiddenSubtreeRule"),
        c("evaluateVideoAutoplayIgnoreOnUnmuteRule"),
        c("evaluateVideoAutoplayIgnoreOnUserPausedRule"),
        c("evaluateVideoAutoplayIgnoreOnUserPlayRule"),
        c("evaluateVideoAutoplayIgnoreOnEndedRule"),
      ],
      p = [
        c("evaluateVideoAutoplayIgnoreOnFrozenRule"),
        c("evaluateVideoAutoplayPauseOnAdInvisibleRule"),
        c("createEvaluateVideoAutoplayPauseOnInvisibleRule")(
          c("VideoPlayerViewabilityConstants")
            .DEFAULT_VIEWABILITY_PERCENTAGE_FOR_PAUSE
        ),
        c("evaluateVideoAutoplayPauseOnAdMutedBackgroundedRule"),
        c("evaluateVideoAutoplayIgnoreOnUnmuteRule"),
        c("evaluateVideoAutoplayIgnoreOnUserPausedRule"),
        c("evaluateVideoAutoplayIgnoreOnUserPlayRule"),
        c("evaluateVideoAutoplayIgnoreOnEndedRule"),
      ],
      q = [c("evaluateVideoAutoplayDefaultIgnoreRule")],
      r = [c("createEvaluateVideoAutoplayPauseOnInvisibleRule")(0)],
      s = [c("createEvaluateVideoAutoplayPauseOnInvisibleRule")(0)],
      t = [
        c("evaluateVideoAutoplayIgnoreOnFrozenRule"),
        c("createEvaluateVideoAutoplayPauseOnInvisibleRule")(0.25),
        c("evaluateVideoAutoplayPauseOnBackgroundedRule"),
        c("evaluateVideoAutoplayPauseOnHiddenSubtreeRule"),
        c("evaluateVideoAutoplayIgnoreOnUserPausedRule"),
        c("evaluateVideoAutoplayPauseOnBackgroundedSubtreeRule"),
      ],
      u = [c("createEvaluateVideoAutoplayPauseOnInvisibleRule")(0.25)],
      v = {
        always_disable: q,
        basic: d,
        bulletin: r,
        creator_studio: p,
        creator_studio_sliding_tray_rules: s,
        default_feed: e,
        focused_story_view: f,
        gif: h,
        live_producer: j,
        live_studio: k,
        polaris_feed: t,
        polaris_grid: u,
        stages: o,
        tournament_hero: l,
        watch_feed: b,
        watch_live_tab: i,
        wns: m,
        work_knowledge: n,
      };
    for (q in v) v[q].push(c("evaluateVideoAutoplayIgnoreExternalMediaRule"));
    d = function (a) {
      a = v[a];
      if (!a)
        throw c("unrecoverableViolation")(
          "Unknown VideoPlayerAutoplayRulesType passed to VideoPlayerAutoplayRulesProvider",
          "comet_video_player"
        );
      return a;
    };
    function a(a) {
      return a;
    }
    g.provideAutoplayRules = d;
    g.makeVideoPlayerAutoplayRules = a;
  },
  98
);
__d(
  "VideoPlayerAutoplayContexts",
  ["VideoPlayerAutoplayRulesProvider", "cometUniqueID", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react").createContext;
    e = b({
      autoplayLocalRules: d(
        "VideoPlayerAutoplayRulesProvider"
      ).provideAutoplayRules("basic"),
      autoplayScopeID: "null",
    });
    f = b(null);
    function a() {
      return "id-vpas-" + c("cometUniqueID")();
    }
    g.VideoAutoplayLocalScopeContext = e;
    g.AutoplayApiContext = f;
    g.makeAutoplayScopeID = a;
  },
  98
);
__d(
  "VideoAutoplayLocalScopeProvider.react",
  ["VideoPlayerAutoplayContexts", "react", "useUnsafeRef_DEPRECATED"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useMemo;
    function a(a) {
      var b = a.autoplayLocalRules,
        e = a.customAutoplaySelectionFunc,
        f = a.disableScrollBeforePlayWhenOffscreen,
        g = a.noPauseOnBlurOrFocus,
        j = d("VideoPlayerAutoplayContexts").makeAutoplayScopeID(),
        k = c("useUnsafeRef_DEPRECATED")(j);
      j = i(
        function () {
          return {
            autoplayLocalRules: b,
            autoplayScopeID: k.current,
            customAutoplaySelectionFunc: e,
            disableScrollBeforePlayWhenOffscreen: f,
            noPauseOnBlurOrFocus: g,
          };
        },
        [k, e, b, f, g]
      );
      return h.jsx(
        d("VideoPlayerAutoplayContexts").VideoAutoplayLocalScopeContext
          .Provider,
        { value: j, children: a.children }
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "GlobalVideoPortsContexts",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    e = d("react");
    f = e.createContext;
    var h = e.useContext,
      i = f(null),
      j = f(null),
      k = f(null);
    function a() {
      return h(i);
    }
    function b() {
      return h(j);
    }
    function c() {
      return h(k);
    }
    d = i.Provider;
    e = j.Provider;
    f = k.Provider;
    g.useGlobalVideoPortsLoader = a;
    g.useGlobalVideoPortsManager = b;
    g.useGlobalVideoPortsState = c;
    g.GlobalVideoPortsLoaderContextProvider = d;
    g.GlobalVideoPortsManagerContextProvider = e;
    g.GlobalVideoPortsStateContextProvider = f;
  },
  98
);
__d(
  "GlobalVideoPortsRenderers.react",
  [
    "CoreVideoPlayer.react",
    "VideoPlayerContexts",
    "VideoPlayerPortalingPlaceInfoProvider.react",
    "emptyFunction",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react"),
      j = i.useEffect,
      k = i.useState,
      l = c("emptyFunction").thatReturns(null);
    function a(a) {
      var b = a.coreVideoPlayerMetaData,
        e = a.currentPlaceID,
        f = a.currentVideoID,
        g = a.fullscreenController,
        i = a.implementations,
        j = a.isFullscreen,
        k = a.onCoreVideoStatesChanged,
        m = a.previousPlaceMetaData,
        n = a.trackingDataEncrypted,
        o = a.trackingNodes;
      a = a.viewportMarginsForViewability;
      var p = l;
      return h.jsx(
        d("VideoPlayerPortalingPlaceInfoProvider.react")
          .VideoPlayerPortalingPlaceInfoProvider,
        {
          currentPlaceID: e,
          currentVideoID: f,
          portalingEnabled: !0,
          previousPlaceMetaData: m,
          thisPlaceID: e,
          children: h.jsx(
            c("CoreVideoPlayer.react"),
            babelHelpers["extends"]({}, b, {
              fullscreenController: g,
              implementations: i,
              isFullscreen: j,
              onCoreVideoStatesChanged: k,
              renderWithCoreVideoStates: p,
              trackingDataEncrypted: n,
              trackingNodes: o,
              viewportMarginsForViewability: a,
            })
          ),
        }
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function b(a) {
      var b = a.currentPlaceID,
        c = a.currentVideoID,
        e = a.previousPlaceMetaData,
        f = a.renderPlaceholder,
        g = a.thisPlaceID;
      a = a.videoPixelsAspectRatio;
      return h.jsx(
        d("VideoPlayerPortalingPlaceInfoProvider.react")
          .VideoPlayerPortalingPlaceInfoProvider,
        {
          currentPlaceID: b,
          currentVideoID: c,
          portalingEnabled: !0,
          previousPlaceMetaData: e,
          thisPlaceID: g,
          children: h.jsx(
            d("VideoPlayerContexts").VideoPixelsAspectRatioContext.Provider,
            { value: a, children: f != null ? f() : null }
          ),
        }
      );
    }
    b.displayName = b.name + " [from " + f.id + "]";
    function e(a) {
      var b = a.currentPlaceID,
        c = a.currentVideoID,
        e = a.injectCoreVideoStatesRef,
        f = a.previousPlaceMetaData,
        g = a.renderComponents;
      a = a.thisPlaceID;
      var i = k(null),
        l = i[0],
        m = i[1];
      i = k(null);
      var n = i[0],
        o = i[1];
      j(
        function () {
          e.current = function (a, b) {
            a != null &&
              o(function () {
                return a;
              }),
              m(b);
          };
          return function () {
            e.current = null;
          };
        },
        [e]
      );
      if (a === b && l != null) {
        if (n != null) throw n;
        return h.jsx(
          d("VideoPlayerPortalingPlaceInfoProvider.react")
            .VideoPlayerPortalingPlaceInfoProvider,
          {
            currentPlaceID: b,
            currentVideoID: c,
            portalingEnabled: !0,
            previousPlaceMetaData: f,
            thisPlaceID: a,
            children: g(l),
          }
        );
      } else return null;
    }
    e.displayName = e.name + " [from " + f.id + "]";
    g.GlobalVideoPortsPlayerRenderer = a;
    g.GlobalVideoPortsPlaceholderRenderer = b;
    g.GlobalVideoPortsVideoComponentsRenderer = e;
  },
  98
);
__d(
  "getRequestConstUri",
  ["ConstUriUtils", "unrecoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      var a = d("ConstUriUtils").getUri(window.location.href);
      if (a == null)
        throw c("unrecoverableViolation")(
          "Cannot create ConstUriImpl of current request",
          "comet_infra"
        );
      return a;
    }
    g["default"] = a;
  },
  98
);
__d(
  "useInterval",
  ["clearInterval", "react", "setIntervalAcrossTransitions"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useEffect,
      i = b.useRef;
    function a(a, b, d) {
      d === void 0 && (d = []);
      var e = i(a);
      h(
        function () {
          e.current = a;
        },
        [a]
      );
      var f = a != null;
      h(function () {
        if (!f || b <= 0) return;
        var a = c("setIntervalAcrossTransitions")(function () {
          var a = e.current;
          if (a == null) return;
          a();
        }, b);
        return function () {
          return c("clearInterval")(a);
        };
      }, [f, b].concat(d));
    }
    g["default"] = a;
  },
  98
);
__d(
  "isDollyFBURI",
  ["isFacebookURI"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      return c("isFacebookURI")(a) && a.getSubdomain() === "store";
    }
    g["default"] = a;
  },
  98
);
__d(
  "isWhatsAppBlogURI",
  [],
  function (a, b, c, d, e, f) {
    var g = new RegExp("^blog\\.whatsapp\\.com$", "i"),
      h = ["https"];
    function a(a) {
      if (a.isEmpty() && a.toString() !== "#") return !1;
      return !a.getDomain() && !a.getProtocol()
        ? !1
        : h.indexOf(a.getProtocol()) !== -1 && g.test(a.getDomain());
    }
    f["default"] = a;
  },
  66
);
__d(
  "WwwCometVideoAutoplayFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("getFalcoLogPolicy_DO_NOT_USE")("1744552");
    b = d("FalcoLoggerInternal").create("www_comet_video_autoplay", a);
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "XRefererFrameControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/common/referer_frame.php",
      Object.freeze({ no_lower: !1 }),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "QPLJoinUtils",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b, c, d) {
      var e;
      e = (e = d == null ? void 0 : d.instanceKey) != null ? e : 0;
      d =
        (d = d == null ? void 0 : d.timestamp) != null
          ? d
          : a.getMarkerStartTs(b, { instanceKey: e });
      a.markerAnnotate(
        b,
        {
          string: ((a = {}), (a.join_id = c), a),
          int: ((b = {}), (b.qpl_join__absolute_time_origin_ms = d), b),
          bool: ((c = {}), (c.qpl_join__use_absolute_alignment = !0), c),
        },
        { instanceKey: e }
      );
    }
    function b(a, b, c, d) {
      var e;
      d = (d = d == null ? void 0 : d.instanceKey) != null ? d : 0;
      a.markerAnnotate(
        b,
        { string: ((e = {}), (e.qpl_join__source = "client"), e) },
        { instanceKey: d }
      );
      a.markerAnnotate(
        b,
        { string: ((e = {}), (e.join_id = c), e) },
        { instanceKey: d }
      );
    }
    function c(a, b, c, d) {
      a.markerPoint(b, "join_request_" + c, {
        instanceKey: (b = d == null ? void 0 : d.instanceKey) != null ? b : 0,
        timestamp:
          (b = d == null ? void 0 : d.timestamp) != null
            ? b
            : a.currentTimestamp(),
        data: c != null ? { string: { __key: c } } : null,
      });
    }
    function d(a, b, c, d) {
      var e;
      e = (e = d == null ? void 0 : d.instanceKey) != null ? e : 0;
      d =
        (d = d == null ? void 0 : d.timestamp) != null
          ? d
          : a.currentTimestamp();
      a.markerPoint(b, "join_response_" + c, {
        instanceKey: e,
        timestamp: d,
        data: c != null ? { string: { __key: c } } : null,
      });
    }
    f.setAbsoluteAlignment = a;
    f.setJoinId = b;
    f.markJoinRequest = c;
    f.markJoinResponse = d;
  },
  66
);
__d(
  "QPLUserFlow",
  [
    "ErrorMetadata",
    "ErrorPubSub",
    "QPLEvent",
    "QPLJoinUtils",
    "QuickPerformanceLogger",
    "cr:1752405",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = typeof window !== "undefined" ? window : self;
    function i(a, b) {
      if (b === null) {
        var c;
        return (c = a) != null ? c : null;
      }
      a = (c = a) != null ? c : {};
      a.string || (a.string = {});
      a.string.uf_debug_info = b;
      return a;
    }
    a = (function () {
      function a() {
        var a = this;
        b("cr:1752405")();
        c("ErrorPubSub").unshiftListener(function (b) {
          if (b.type !== "fatal") return;
          var d = a.getActiveFlowIDs();
          if (d.length === 0) return;
          var e = new (c("ErrorMetadata"))();
          e.clearEntries();
          d.forEach(function (a) {
            e.addEntry("QPL", "ACTIVE_FLOW_ID", a.toString());
          });
          d = e.format();
          b.metadata
            ? (b.metadata = [].concat(b.metadata, d))
            : (b.metadata = d);
        });
        this.$1 = new Map();
      }
      var e = a.prototype;
      e.$2 = function (a, b, c, e, f) {
        var g = this,
          i;
        if (e == null) return;
        e = h.setTimeout(function () {
          f != null && f(a, b, c),
            g.endTimeout(a, { instanceKey: b, joinID: c });
        }, e);
        this.$1.has(d("QPLEvent").getMarkerId(a)) ||
          this.$1.set(d("QPLEvent").getMarkerId(a), new Map());
        (i = this.$1.get(d("QPLEvent").getMarkerId(a))) == null
          ? void 0
          : i.set(b, e);
      };
      e.start = function (a, b) {
        b = b === void 0 ? {} : b;
        var e = b.instanceKey;
        e = e === void 0 ? 0 : e;
        var f = b.annotations,
          g = b.cancelExisting;
        g = g === void 0 ? !1 : g;
        var h = b.cancelOnUnload;
        h = h === void 0 ? !0 : h;
        var i = b.timestamp,
          j = b.trackedForLoss;
        j = j === void 0 ? !0 : j;
        var k = b.joinID,
          l = b.timeoutInMs,
          m = b.onFlowTimeout;
        b = b.qplInternalDoNotUseAbsoluteTimeOrigin;
        c("QuickPerformanceLogger").markerStart(a, e, i, {
          cancelExisting: g,
          cancelOnUnload: h,
          trackedForLoss: j,
          type: 2,
          samplingBasis: k,
          qplInternalDoNotUseAbsoluteTimeOrigin: b,
        });
        this.$2(a, e, k, l, m);
        f &&
          c("QuickPerformanceLogger").markerAnnotate(a, f, { instanceKey: e });
        k != null &&
          (d("QPLJoinUtils").setJoinId(c("QuickPerformanceLogger"), a, k, {
            instanceKey: e,
          }),
          d("QPLJoinUtils").markJoinRequest(c("QuickPerformanceLogger"), a, k, {
            instanceKey: e,
          }));
      };
      e.startFromNavStart = function (a, b) {
        b = b === void 0 ? {} : b;
        var d = b.instanceKey;
        d = d === void 0 ? 0 : d;
        var e = b.annotations,
          f = b.cancelExisting;
        f = f === void 0 ? !1 : f;
        var g = b.cancelOnUnload;
        g = g === void 0 ? !0 : g;
        var h = b.trackedForLoss;
        h = h === void 0 ? !0 : h;
        var i = b.joinID,
          j = b.timeoutInMs,
          k = b.onFlowTimeout;
        b = b.qplInternalDoNotUseConvertToTimeOnServer;
        c("QuickPerformanceLogger").markerStartFromNavStart(a, d, {
          cancelExisting: f,
          cancelOnUnload: g,
          trackedForLoss: h,
          type: 2,
          samplingBasis: i,
          qplInternalDoNotUseConvertToTimeOnServer: b,
        });
        this.$2(a, d, i, j, k);
        e &&
          c("QuickPerformanceLogger").markerAnnotate(a, e, { instanceKey: d });
      };
      e.endSuccess = function (a, b) {
        b = b === void 0 ? {} : b;
        var c = b.instanceKey;
        c = c === void 0 ? 0 : c;
        var d = b.annotations,
          e = b.joinID;
        b = b.timestamp;
        this.$3(a, 2, c, e, d, b);
      };
      e.endFailure = function (a, b, c) {
        c = c === void 0 ? {} : c;
        var d = c.instanceKey;
        d = d === void 0 ? 0 : d;
        var e = c.debugInfo,
          f = c.annotations,
          g = c.joinID,
          h = c.timestamp;
        c = c.error;
        this.markError(a, b, { debugInfo: e, instanceKey: d, error: c });
        this.$3(a, 3, d, g, f, h);
      };
      e.endValidationFailure_DO_NOT_USE = function (a, b) {
        b = b === void 0 ? {} : b;
        var c = b.instanceKey;
        c = c === void 0 ? 0 : c;
        var d = b.debugInfo,
          e = b.annotations,
          f = b.joinID;
        b = b.timestamp;
        this.markError(a, "validation_failed", {
          debugInfo: d,
          instanceKey: c,
        });
        this.$3(a, 7952, c, f, e, b);
      };
      e.endTimeout = function (a, b) {
        b = b === void 0 ? {} : b;
        var c = b.instanceKey;
        c = c === void 0 ? 0 : c;
        var d = b.annotations,
          e = b.joinID;
        b = b.timestamp;
        this.$3(a, 113, c, e, d, b);
      };
      e.endCancel = function (a, b) {
        b = b === void 0 ? {} : b;
        var c = b.instanceKey;
        c = c === void 0 ? 0 : c;
        var d = b.cancelReason;
        d = d === void 0 ? 4 : d;
        var e = b.annotations,
          f = b.joinID;
        b = b.timestamp;
        this.$3(a, d, c, f, e, b);
      };
      e.$3 = function (a, b, e, f, g, i) {
        var j;
        j =
          (j = this.$1.get(d("QPLEvent").getMarkerId(a))) == null
            ? void 0
            : j.get(e);
        if (j != null) {
          h.clearTimeout(j);
          (j = this.$1.get(d("QPLEvent").getMarkerId(a))) == null
            ? void 0
            : j["delete"](e);
        }
        g &&
          c("QuickPerformanceLogger").markerAnnotate(a, g, { instanceKey: e });
        f != null &&
          (i != null
            ? d("QPLJoinUtils").markJoinResponse(
                c("QuickPerformanceLogger"),
                a,
                f,
                { instanceKey: e, timestamp: i }
              )
            : d("QPLJoinUtils").markJoinResponse(
                c("QuickPerformanceLogger"),
                a,
                f,
                { instanceKey: e }
              ));
        i != null
          ? c("QuickPerformanceLogger").markerEnd(a, b, e, i)
          : c("QuickPerformanceLogger").markerEnd(a, b, e);
      };
      e.addAnnotations = function (a, b, d) {
        d = d === void 0 ? {} : d;
        d = d.instanceKey;
        c("QuickPerformanceLogger").markerAnnotate(a, b, { instanceKey: d });
      };
      e.addPoint = function (a, b, d) {
        d = d === void 0 ? {} : d;
        var e = d.instanceKey,
          f = d.debugInfo,
          g = d.data;
        d = d.timestamp;
        f = i(g, (g = f) != null ? g : null);
        c("QuickPerformanceLogger").markerPoint(a, b, {
          data: f,
          instanceKey: e,
          timestamp: d,
        });
      };
      e.markError = function (a, b, d) {
        d = d === void 0 ? {} : d;
        var e = d.debugInfo,
          f = d.instanceKey;
        d = d.error;
        c("QuickPerformanceLogger").markerAnnotate(
          a,
          babelHelpers["extends"]({}, this.$4(d), {
            bool: ((d = {}), (d.uf_has_error = !0), d),
          }),
          { instanceKey: f }
        );
        this.addPoint(a, b, { debugInfo: e, instanceKey: f });
      };
      e.storeBeforeNavigation = function (a, b) {
        b = b === void 0 ? {} : b;
        b = b.instanceKey;
        b = b === void 0 ? 0 : b;
        c("QuickPerformanceLogger").markerStoreBeforeNavigation(a, {
          instanceKey: b,
        });
      };
      e.getActiveFlowIDs = function () {
        return c("QuickPerformanceLogger").getActiveMarkerIds({ type: 2 });
      };
      e.$4 = function (a) {
        var b;
        if (a == null) return {};
        var c = { int: {}, string: {} };
        c.string.uf_error_name = a.name;
        a = a;
        (a == null ? void 0 : (b = a.source) == null ? void 0 : b.code) !=
          null &&
          (c["int"].uf_graphql_error_code = a == null ? void 0 : a.source.code);
        if (
          (a == null
            ? void 0
            : (b = a.source) == null
            ? void 0
            : (b = b.exception) == null
            ? void 0
            : b["class"]) != null
        ) {
          c.string.uf_graphql_exception_class =
            a == null
              ? void 0
              : (b = a.source) == null
              ? void 0
              : (a = b.exception) == null
              ? void 0
              : a["class"];
        }
        return c;
      };
      return a;
    })();
    e = new a();
    g["default"] = e;
  },
  98
);
__d(
  "ControlledReferer",
  [
    "invariant",
    "Bootloader",
    "ConstUriUtils",
    "CookieConsent",
    "XRefererFrameControllerRouteBuilder",
    "getRequestConstUri",
    "gkx",
    "isDollyFBURI",
    "isInstagramURI",
    "isInternalFBURI",
    "isMessengerDotComURI",
    "isMetaDotComURI",
    "isOculusDotComURI",
    "isWhatsAppBlogURI",
    "isWorkplaceDotComURI",
    "lowerFacebookDomain",
  ],
  function (a, b, c, d, e, f, g, h) {
    function i(a, b, e) {
      if (!c("CookieConsent").isThirdPartyIframeAllowed(a)) {
        c("Bootloader").loadModules(
          ["ODS"],
          function (a) {
            a.bumpEntityKey(
              2966,
              "defer_cookies",
              "block_controlled_referer_iframe"
            );
          },
          "ControlledReferer"
        );
        return;
      }
      function f() {
        var c = "";
        try {
          c = a.contentWindow.location.pathname;
        } catch (a) {
          return;
        }
        if (
          c !== "/intern/common/referer_frame.php" &&
          c !== "/common/referer_frame.php" &&
          c !== "/common/referer_frame.php/"
        )
          return;
        a.contentWindow.document.body.style.margin = 0;
        b();
      }
      var g =
        c("gkx")("708253") &&
        c("gkx")("4142") &&
        !c("lowerFacebookDomain").isValidDocumentDomain();
      g = c("XRefererFrameControllerRouteBuilder").buildUri({ no_lower: g });
      var i;
      c("isMessengerDotComURI")(c("getRequestConstUri")()) ||
      c("isInstagramURI")(c("getRequestConstUri")()) ||
      c("isWhatsAppBlogURI")(c("getRequestConstUri")()) ||
      c("isMetaDotComURI")(c("getRequestConstUri")()) ||
      c("isDollyFBURI")(c("getRequestConstUri")()) ||
      c("isWorkplaceDotComURI")(c("getRequestConstUri")())
        ? (i = g)
        : c("isOculusDotComURI")(c("getRequestConstUri")())
        ? (i = g)
        : c("isInternalFBURI")(c("getRequestConstUri")())
        ? (i = d("ConstUriUtils").getUri("/intern/common/referer_frame.php"))
        : (i = g);
      e == null &&
        c("isWorkplaceDotComURI")(c("getRequestConstUri")()) &&
        (e = "workplace");
      if (e) {
        i = (g = i) == null ? void 0 : g.addQueryParam("fb_source", e);
      }
      i != null || h(0, 67317);
      a.onload = f;
      a.src = i.toString();
    }
    function a(a, b, c) {
      i(
        a,
        function () {
          a.contentWindow.document.body.innerHTML = b;
        },
        c
      );
    }
    g.shouldUseFacebookReferer = i;
    g.useFacebookRefererHtml = a;
  },
  98
);
__d(
  "$InternalEnumUtils",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = Object.prototype.hasOwnProperty;
    function a(a) {
      return function (b) {
        return b == null || !g.call(a, b) ? null : a[b];
      };
    }
    var h = typeof WeakMap === "function" ? new WeakMap() : new Map();
    function b(a) {
      return function (b) {
        if (b == null) return null;
        var c = h.get(a);
        c == null &&
          ((c = new Map(
            Object.getOwnPropertyNames(a).map(function (b) {
              return [a[b], b];
            })
          )),
          h.set(a, c));
        return (c = c.get(b)) != null ? c : null;
      };
    }
    f.createToJSEnum = a;
    f.createFromJSEnum = b;
  },
  66
);
__d(
  "CometRouterDispatcherContextFactory.react",
  ["CometRouterDispatcherContext", "gkx", "react", "useStable"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    e = d("react");
    var i = e.useContext,
      j = e.useInsertionEffect,
      k = e.useMemo,
      l = e.useRef;
    function m(a) {
      var b = a.actorID,
        d = a.children,
        e = a.from,
        f = a.parentDispatcher,
        g = a.tracePolicy,
        i = a.url,
        m = k(
          function () {
            var a = { actorID: b, from: e, tracePolicy: g, url: i };
            return f.withContext(a);
          },
          [b, f, e, g, i]
        ),
        n = l(m);
      j(
        function () {
          n.current = m;
        },
        [m]
      );
      a = c("useStable")(function () {
        return {
          componentHistoryState: {
            popState: function () {
              var a;
              for (
                var b = arguments.length, c = new Array(b), d = 0;
                d < b;
                d++
              )
                c[d] = arguments[d];
              return (a = n.current.componentHistoryState) == null
                ? void 0
                : a.popState.apply(a, c);
            },
            pushState: function () {
              var a;
              for (
                var b = arguments.length, c = new Array(b), d = 0;
                d < b;
                d++
              )
                c[d] = arguments[d];
              return (a = n.current.componentHistoryState) == null
                ? void 0
                : a.pushState.apply(a, c);
            },
          },
          go: function () {
            var a;
            return (a = n.current).go.apply(a, arguments);
          },
          goBack: function () {
            return n.current.goBack();
          },
          goTo: function () {
            var a;
            return (a = n.current).goTo.apply(a, arguments);
          },
          popPushView: function () {
            return n.current.popPushView();
          },
          prefetchRouteDefinition: function () {
            var a;
            return (a = n.current).prefetchRouteDefinition.apply(a, arguments);
          },
          prefetchRouteQueries: function () {
            var a;
            return (a = n.current).prefetchRouteQueries.apply(a, arguments);
          },
          preloadRouteCode: function () {
            var a;
            return (a = n.current).preloadRouteCode.apply(a, arguments);
          },
          withContext: function () {
            var a;
            return (a = n.current).withContext.apply(a, arguments);
          },
        };
      });
      return m == null
        ? d
        : h.jsx(c("CometRouterDispatcherContext").Provider, {
            value: a,
            children: d,
          });
    }
    m.displayName = m.name + " [from " + f.id + "]";
    function a(a) {
      var b = a.children;
      a = babelHelpers.objectWithoutPropertiesLoose(a, ["children"]);
      var d = i(c("CometRouterDispatcherContext"));
      return d == null
        ? b
        : h.jsx(
            m,
            babelHelpers["extends"]({}, a, { parentDispatcher: d, children: b })
          );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function b(a) {
      var b = a.actorID,
        d = a.children,
        e = a.from,
        f = a.tracePolicy,
        g = a.url,
        j = i(c("CometRouterDispatcherContext"));
      j = k(
        function () {
          var a,
            c = { actorID: b, from: e, tracePolicy: f, url: g };
          return (a = j) == null ? void 0 : a.withContext(c);
        },
        [b, j, e, f, g]
      );
      return j == null
        ? d
        : h.jsx(c("CometRouterDispatcherContext").Provider, {
            value: j,
            children: d,
          });
    }
    b.displayName = b.name + " [from " + f.id + "]";
    d = c("gkx")("1226") ? a : b;
    e = d;
    g["default"] = e;
  },
  98
);
__d(
  "CometTransientDialogProvider.react",
  [
    "fbt",
    "BaseModal.react",
    "CometDialogContext",
    "CometErrorBoundary.react",
    "CometHeroLogging",
    "CometInteractionTracingQPLConfigContext",
    "FBLogger",
    "cometPushToast",
    "cr:945",
    "react",
    "useCometInteractionTracing",
    "useIsCalledDuringRender",
    "useIsMountedRef",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    e = d("react");
    var j = e.useCallback,
      k = e.useEffect,
      l = e.useRef,
      m = e.useState;
    function n(a) {
      var b = a.dialogConfig,
        e = a.dialogConfigsRef,
        f = a.displayBaseModal_DO_NOT_USE,
        g = a.removeDialogConfig,
        n = l(null);
      k(function () {
        return function () {
          n.current != null && window.cancelAnimationFrame(n.current);
        };
      }, []);
      a = b.dialog;
      var o = b.dialogProps,
        p = m(!1),
        q = p[0];
      p = p[1];
      var r = j(
          function () {
            for (var a = arguments.length, d = new Array(a), f = 0; f < a; f++)
              d[f] = arguments[f];
            n.current != null && window.cancelAnimationFrame(n.current);
            var h = e.current.indexOf(b);
            h < 0 &&
              c("FBLogger")("comet_ui")
                .blameToPreviousFrame()
                .mustfix(
                  "Attempting to close a dialog that does not exist anymore."
                );
            n.current = window.requestAnimationFrame(function () {
              g(b, d), (n.current = null);
            });
          },
          [b, e, g]
        ),
        s = j(
          function () {
            r(),
              d("cometPushToast").cometPushErrorToast({
                message: h._(
                  "Quelque chose ne fonctionne pas. Cela peut \u00eatre d\u00fb \u00e0 une erreur technique que nous tentons de r\u00e9soudre actuellement."
                ),
                truncateText: !1,
              });
          },
          [r]
        );
      a = i.jsx(a, babelHelpers["extends"]({}, o, { onClose: r, onHide: p }));
      return i.jsx(c("CometErrorBoundary.react"), {
        onError: s,
        children:
          f === !0
            ? i.jsx(c("BaseModal.react"), {
                hidden: q,
                interactionDesc: b.interactionDesc,
                interactionUUID: b.interactionUUID,
                isOverlayTransparent:
                  (o = b.baseModalProps) == null
                    ? void 0
                    : o.isOverlayTransparent,
                stackingBehavior: "above-nav",
                children: a,
              })
            : a,
      });
    }
    n.displayName = n.name + " [from " + f.id + "]";
    function a(a) {
      var e = a.displayBaseModal_DO_NOT_USE,
        f = e === void 0 ? !0 : e;
      e = babelHelpers.objectWithoutPropertiesLoose(a, [
        "displayBaseModal_DO_NOT_USE",
      ]);
      a = m([]);
      var g = a[0],
        h = a[1];
      a = d("CometInteractionTracingQPLConfigContext").useDialogTraceQPLEvent();
      var o = c("useCometInteractionTracing")(a, "fluid", "INTERACTION");
      a = c("useIsCalledDuringRender")();
      a = j(
        function (a, d, e, f, g) {
          var i = e.loadType,
            j = e.preloadTrigger,
            k = e.tracePolicy;
          o(
            function (e) {
              var l = c("CometHeroLogging").genHeroInteractionUUIDAndMarkStart(
                e.getTraceId()
              );
              e.addMetadata("interaction_type", "dialog");
              e.addMetadata("load_type", i);
              j != null && e.addMetadata("preload_trigger", j);
              var m = "Dialog";
              h(function (b) {
                return b.concat({
                  baseModalProps: g == null ? void 0 : g.baseModalProps,
                  dialog: a,
                  dialogProps: d,
                  interactionDesc: m,
                  interactionUUID: l,
                  onClose: f,
                  tracePolicy: k,
                });
              });
              b("cr:945") && b("cr:945").logOpen(k, l);
            },
            void 0,
            void 0,
            k
          );
        },
        [a, o]
      );
      var p = l(g);
      k(
        function () {
          p.current = g;
        },
        [g]
      );
      var q = c("useIsMountedRef")(),
        r = j(
          function (a, c) {
            if (!q.current) return;
            h(function (b) {
              var c = b.indexOf(a);
              return c < 0 ? b : b.slice(0, c);
            });
            a.onClose && a.onClose.apply(a, c);
            b("cr:945") &&
              b("cr:945").logClose(a.tracePolicy, a.interactionUUID);
          },
          [q]
        );
      return i.jsxs(c("CometDialogContext").Provider, {
        value: a,
        children: [
          e.children,
          g.map(function (a, b) {
            return i.jsx(
              n,
              {
                dialogConfig: a,
                dialogConfigsRef: p,
                displayBaseModal_DO_NOT_USE: f,
                removeDialogConfig: r,
              },
              b
            );
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
  "BaseActorProvider",
  [
    "CometRelay",
    "CometRouterDispatcherContextFactory.react",
    "CometTransientDialogProvider.react",
    "RelayEnvironmentFactoryProvider",
    "react",
    "recoverableViolation",
    "unrecoverableViolation",
    "usePrevious",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    e = d("react");
    var i = e.useMemo,
      j = e.useState;
    function a(a) {
      return function () {
        throw c("unrecoverableViolation")(
          "You are " +
            a +
            " the Actor from a React component that is not a descendent of ActorProvider.",
          "groups_comet"
        );
      };
    }
    var k = h.createContext({ get: a("reading"), set: a("setting") });
    function b(a) {
      var b =
          a.actorEnvironmentKey_DO_NOT_USE_UNLESS_YOU_KNOW_WHAT_YOU_ARE_DOING,
        e = a.children,
        f = a.initialActorID,
        g = a.readonly,
        l = g === void 0 ? !1 : g;
      g = a.relayEnvironmentFactory;
      a = a.scope;
      a = a === void 0 ? null : a;
      var m = j(f),
        n = m[0],
        o = m[1];
      m = c("usePrevious")(a);
      var p = c("usePrevious")(f);
      g = d(
        "RelayEnvironmentFactoryProvider"
      ).useRelayEnvironmentFactoryWithFallback(g);
      b = g.getForActorID(n, b);
      p = p != null && p !== f;
      m = m != null && m !== a;
      (p || m) && n !== f && o(f);
      a = i(
        function () {
          return {
            get: function () {
              return n;
            },
            set: function (a) {
              if (l) {
                c("recoverableViolation")(
                  "You tried to update the Actor ID, but the <ActorProvider /> closest to your useActor() call has a read-only Actor ID. To fix this, wrap the React tree that you want to set an Actor ID for with your own <ActorProvider />.",
                  "groups_comet"
                );
                return;
              }
              o(a);
            },
          };
        },
        [n, l]
      );
      return h.jsx(k.Provider, {
        value: a,
        children: h.jsx(d("CometRelay").RelayEnvironmentProvider, {
          environment: b,
          getEnvironmentForActor: g.getForActor,
          children: h.jsx(c("CometRouterDispatcherContextFactory.react"), {
            actorID: n,
            children: h.jsx(c("CometTransientDialogProvider.react"), {
              children: e,
            }),
          }),
        }),
      });
    }
    b.displayName = b.name + " [from " + f.id + "]";
    g.ActorContext = k;
    g.BaseActorProvider = b;
  },
  98
);
__d(
  "Actor",
  ["BaseActorProvider", "CometRelayEnvironmentFactory", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useContext;
    function a(a) {
      return h.jsx(
        d("BaseActorProvider").BaseActorProvider,
        babelHelpers["extends"]({}, a, {
          relayEnvironmentFactory: d("CometRelayEnvironmentFactory")
            .CometRelayEnvironmentFactory,
          children: a.children,
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function b() {
      var a = i(d("BaseActorProvider").ActorContext);
      return [a.get(), a.set];
    }
    g.ActorProvider = a;
    g.useActor = b;
  },
  98
);
__d(
  "absoluteToRelative",
  ["memoizeStringOnly"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = c("memoizeStringOnly")(function (a) {
      return a.replace(/^https?:\/\/[^\/]+/i, "");
    });
    function a(a) {
      return h((a = a) != null ? a : "#");
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometRouteURL",
  [
    "ConstUriUtils",
    "absoluteToRelative",
    "memoizeStringOnly",
    "useCurrentRoute",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = c("memoizeStringOnly")(function (a) {
        a = d("ConstUriUtils").getUri(a);
        return a != null ? a.getPath() : null;
      }),
      i = c("memoizeStringOnly")(function (a) {
        a = d("ConstUriUtils").getUri(a);
        return a != null ? Object.fromEntries(a.getQueryParams()) : null;
      });
    function j() {
      var a;
      if (window.location.href == null) return null;
      a =
        (a = d("ConstUriUtils").getUri(window.location.href)) == null
          ? void 0
          : a.toString();
      return a != null ? c("absoluteToRelative")(a) : null;
    }
    function a() {
      var a = j();
      return a != null ? i(a) : null;
    }
    function k() {
      var a = c("useCurrentRoute")();
      if (a != null) {
        var b;
        return (b = a.canonicalUrl) != null ? b : a.url;
      } else {
        return (b = j()) != null ? b : "";
      }
    }
    function b() {
      var a = k();
      return (a = h(a)) != null ? a : "";
    }
    function e() {
      var a = k();
      return (a = i(a)) != null ? a : {};
    }
    g.getWindowURL = j;
    g.getWindowURLParams = a;
    g.useRouteURL = k;
    g.useRouteURLPath = b;
    g.useRouteURLParams = e;
  },
  98
);
