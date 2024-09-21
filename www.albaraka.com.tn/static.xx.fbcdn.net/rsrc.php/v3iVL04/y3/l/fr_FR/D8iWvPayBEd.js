/*FB_PKG_DELIM*/

__d(
  "isBlueprintStylesEnabled",
  ["qex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      return c("qex")._("1022") || !1;
    }
    g["default"] = a;
  },
  98
);
__d(
  "CDSTextStyleContext.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext("body");
    g["default"] = b;
  },
  98
);
__d(
  "BaseDialog.react",
  [
    "BaseThemeProvider.react",
    "BaseView.react",
    "CometHideLayerOnEscape.react",
    "pointerEventDistance",
    "react",
    "stylex",
    "useMergeRefs",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useEffect,
      j = b.useRef,
      k = {
        anchor: {
          alignItems: "x1cy8zhl",
          boxSizing: "x9f619",
          display: "x78zum5",
          justifyContent: "xl56j7k",
          minHeight: "x2lwn1j",
          minWidth: "xeuugli",
          pointerEvents: "x47corl",
          $$css: !0,
        },
        dialog: {
          boxSizing: "x1afcbsf",
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          outline: "x1a2a7pz",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          pointerEvents: "x71s49j",
          $$css: !0,
        },
        root: {
          alignItems: "x1qjc9v5",
          boxSizing: "x9f619",
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          flexGrow: "x1iyjqo2",
          justifyContent: "xl56j7k",
          $$css: !0,
        },
        rootWithDeprecatedStyles: {
          flexGrow: "x1c4vz4f",
          minHeight: "xg6iff7",
          $$css: !0,
        },
      };
    function a(a, b) {
      var e = a.anchorXStyle,
        f = a.children,
        g = a.disableClosingWithEscape;
      g = g === void 0 ? !1 : g;
      var l = a.disableClosingWithMask,
        m = l === void 0 ? !1 : l,
        n = a.onClose,
        o = a.rootXStyle;
      l = a.testid;
      l = a.themeConfig;
      var p = a.withDeprecatedStyles,
        q = p === void 0 ? !1 : p,
        r = a.xstyle,
        s = babelHelpers.objectWithoutPropertiesLoose(a, [
          "anchorXStyle",
          "children",
          "disableClosingWithEscape",
          "disableClosingWithMask",
          "onClose",
          "rootXStyle",
          "testid",
          "themeConfig",
          "withDeprecatedStyles",
          "xstyle",
        ]),
        t = j(null),
        u = j(null),
        v = j(null);
      i(
        function () {
          var a = t.current,
            b = u.current;
          if (a == null || b == null || m) return;
          function c(c) {
            return c instanceof Node && !b.contains(c) && a.contains(c);
          }
          var e = "PointerEvent" in window;
          if (!e) {
            var f = function (a) {
              c(a.target) && n();
            };
            a.addEventListener("click", f);
            return function () {
              a.removeEventListener("click", f);
            };
          }
          var g = !1;
          function h(a) {
            if (a.isPrimary) {
              var b = c(a.target);
              g = b;
              v.current = a;
            }
          }
          function i(a) {
            var b = c(a.target);
            if (g && b && v.current != null && a.isPrimary) {
              b = d("pointerEventDistance").isWithinThreshold(v.current, a);
              b && n();
            }
            g = !1;
            v.current = null;
          }
          a.addEventListener("pointerup", i);
          a.addEventListener("pointerdown", h);
          return function () {
            a.removeEventListener("pointerup", i),
              a.removeEventListener("pointerdown", h);
          };
        },
        [m, n]
      );
      var w = c("useMergeRefs")(u, b);
      p = h.jsx(c("BaseThemeProvider.react"), {
        config: l,
        children: function (a, b) {
          return h.jsx("div", {
            className: c("stylex")([
              a,
              k.root,
              q && k.rootWithDeprecatedStyles,
              o,
            ]),
            ref: t,
            style: b,
            children: h.jsx("div", {
              className: c("stylex")(k.anchor, e),
              children: h.jsx(
                c("BaseView.react"),
                babelHelpers["extends"]({}, s, {
                  ref: w,
                  role: "dialog",
                  testid: void 0,
                  xstyle: [k.dialog, r],
                  children: f,
                })
              ),
            }),
          });
        },
      });
      return g
        ? p
        : h.jsx(c("CometHideLayerOnEscape.react"), { onHide: n, children: p });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = h.forwardRef(a);
    g["default"] = e;
  },
  98
);
__d(
  "getLoadingStateAriaProps",
  ["fbt"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    function a(a, b) {
      var c;
      b =
        a == null
          ? { "aria-label": h._("Chargement...") }
          : {
              "aria-valuemax":
                (c = b == null ? void 0 : b.max) != null ? c : 100,
              "aria-valuemin": (c = b == null ? void 0 : b.min) != null ? c : 0,
              "aria-valuenow": a,
            };
      return babelHelpers["extends"]({ role: "progressbar" }, b);
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometLoadingStateTracker",
  ["CometVisualCompletionAttributes", "InteractionTracing", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useEffect,
      i = b.useRef;
    function a() {
      var a = i(null);
      h(function () {
        var b = a.current,
          c = [];
        b != null && (c = j(b));
        return function () {
          c.forEach(function (a) {
            a();
          });
        };
      }, []);
      return [c("CometVisualCompletionAttributes").LOADING_STATE, a];
    }
    function j(a) {
      var b = [];
      c("InteractionTracing")
        .getPendingInteractions()
        .forEach(function (c) {
          c = c.getTrace();
          c && c.vcTracker && b.push(c.vcTracker.waitLoadingState(a));
        });
      return b;
    }
    g["default"] = a;
  },
  98
);
__d(
  "BaseLoadingStateElement.react",
  [
    "getLoadingStateAriaProps",
    "react",
    "stylex",
    "useCometLoadingStateTracker",
    "useMergeRefs",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useContext,
      j = { hideOutline: { outline: "x1a2a7pz", $$css: !0 } },
      k = h.createContext(!1);
    function a(a, b) {
      var d = a.children,
        e = a.disableLoadingStateTracker;
      e = e === void 0 ? !1 : e;
      var f = a.isFocusTarget,
        g = a.progress,
        l = a.style,
        m = a.testid;
      m = a.xstyle;
      a = i(k);
      var n = c("useCometLoadingStateTracker")(),
        o = n[0];
      n = n[1];
      n = c("useMergeRefs")(b, n);
      if (a)
        return h.jsx("div", {
          className: c("stylex")(m),
          "data-testid": void 0,
          ref: b,
          style: l,
          children: d,
        });
      a = c("getLoadingStateAriaProps")(g, { max: 100, min: 0 });
      return h.jsx(k.Provider, {
        value: !0,
        children: h.jsx(
          "div",
          babelHelpers["extends"]({}, a, e ? {} : o, {
            className: c("stylex")(j.hideOutline, m),
            "data-focus-target": f,
            "data-testid": void 0,
            ref: n,
            style: l,
            children: d,
          })
        ),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "BaseImage.react",
  [
    "CometSSRPreloadImageCollection",
    "ExecutionEnvironment",
    "RecoverableViolationWithComponentStack.react",
    "mergeRefs",
    "react",
    "stylex",
    "testID",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useEffect,
      j = b.useMemo,
      k = b.useRef,
      l = {
        contain: { objectFit: "x19kjcj4", $$css: !0 },
        cover: { objectFit: "xl1xv1r", $$css: !0 },
        fill: { objectFit: "xz74otr", $$css: !0 },
      };
    function a(a, b) {
      var e = a.alt;
      e = e === void 0 ? "" : e;
      var f = a["aria-labelledby"],
        g = a.elementtiming,
        m = a.objectFit;
      m = m === void 0 ? "none" : m;
      var n = a.onLoad,
        o = a.referrerPolicy;
      o = o === void 0 ? "origin-when-cross-origin" : o;
      var p = a.src,
        q = a.testid,
        r = a.xstyle;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "alt",
        "aria-labelledby",
        "elementtiming",
        "objectFit",
        "onLoad",
        "referrerPolicy",
        "src",
        "testid",
        "xstyle",
      ]);
      var s = k(null),
        t = j(
          function () {
            return c("mergeRefs")(s, b);
          },
          [s, b]
        );
      !c("ExecutionEnvironment").canUseDOM &&
        p &&
        d("CometSSRPreloadImageCollection").addImage(p);
      i(
        function () {
          var a = s.current;
          n != null && a != null && a.complete && n();
        },
        [n]
      );
      return p === ""
        ? h.jsx(c("RecoverableViolationWithComponentStack.react"), {
            errorMessage: "Invalid src provided to image",
            projectName: "comet_ui",
          })
        : h.jsx(
            "img",
            babelHelpers["extends"]({}, a, c("testID")(q), {
              alt: e,
              "aria-labelledby": f,
              className:
                m === "none" && r == null
                  ? void 0
                  : c("stylex")(m !== "none" && l[m], r),
              elementtiming: g,
              onLoad: n,
              ref: t,
              referrerPolicy: o,
              src: p,
            })
          );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = h.forwardRef(a);
    g["default"] = e;
  },
  98
);
__d(
  "BaseInput.react",
  ["CometContainerPressableContext", "Locale", "react", "stylex", "testID"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useContext,
      j = b.useMemo,
      k = {
        root: {
          WebkitTapHighlightColor: "x1i10hfl",
          boxSizing: "x9f619",
          touchAction: "xggy1nq",
          ":disabled_cursor": "x1s07b3s",
          $$css: !0,
        },
        zIndex: { zIndex: "x1vjfegm", $$css: !0 },
      },
      l = d("Locale").isRTL();
    function a(a, b) {
      var d = a.onChange,
        e = a.onClick,
        f = a.onValueChange,
        g = a.testid,
        m = a.type,
        n = m === void 0 ? "text" : m;
      m = a.xstyle;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "onChange",
        "onClick",
        "onValueChange",
        "testid",
        "type",
        "xstyle",
      ]);
      var o = j(
          function () {
            switch (n) {
              case "switch":
                return "checkbox";
              default:
                return n;
            }
          },
          [n]
        ),
        p = o === "checkbox" || o === "radio",
        q = o === "textarea",
        r = i(c("CometContainerPressableContext")) != null;
      a = babelHelpers["extends"](
        { dir: l ? "rtl" : "ltr" },
        a,
        c("testID")(g),
        {
          className: c("stylex")(k.root, m, r && k.zIndex),
          onChange: function (a) {
            p || (f && f(a.target.value, a)), d && d(a);
          },
          onClick: function (a) {
            p && f && f(a.target.checked, a), e && e(a);
          },
        }
      );
      return q
        ? h.jsx(
            "textarea",
            babelHelpers["extends"]({ suppressHydrationWarning: !0 }, a, {
              ref: b,
            })
          )
        : h.jsx(
            "input",
            babelHelpers["extends"]({ suppressHydrationWarning: !0 }, a, {
              ref: b,
              type: o,
            })
          );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = h.memo(h.forwardRef(a));
    g["default"] = e;
  },
  98
);
__d(
  "stylex-compat",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      a.$$css = !0;
      return a;
    }
    f.makeNamespace = a;
  },
  66
);
__d(
  "BaseStyledButton.react",
  [
    "BaseRow.react",
    "BaseRowItem.react",
    "CometPressable.react",
    "react",
    "stylex",
    "stylex-compat",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useRef,
      j = 0.96,
      k = 10,
      l = {
        button: {
          boxSizing: "x9f619",
          display: "x3nfvp2",
          flexDirection: "xdt5ytf",
          justifyContent: "xl56j7k",
          position: "x1n2onr6",
          width: "xh8yej3",
          $$css: !0,
        },
        content: {
          borderTopStartRadius: "xi112ho",
          borderTopEndRadius: "x17zwfj4",
          borderBottomEndRadius: "x585lrc",
          borderBottomStartRadius: "x1403ito",
          borderTopWidth: "x972fbf",
          borderEndWidth: "xcfux6l",
          borderBottomWidth: "x1qhh985",
          borderStartWidth: "xm0m39n",
          boxSizing: "x9f619",
          paddingEnd: "xn6708d",
          paddingStart: "x1ye3gou",
          $$css: !0,
        },
        disabled: { backgroundColor: "xwcfey6", $$css: !0 },
        item: {
          alignItems: "x6s0dn4",
          display: "x78zum5",
          flexShrink: "x2lah0s",
          marginEnd: "x1fbi1t2",
          marginStart: "xl8fo4v",
          $$css: !0,
        },
        offset: {
          alignItems: "x6s0dn4",
          display: "x78zum5",
          justifyContent: "xl56j7k",
          marginEnd: "x1608yet",
          marginStart: "xljgi0e",
          width: "x1e0frkt",
          $$css: !0,
        },
        paddingWide: {
          paddingEnd: "xbxaen2",
          paddingStart: "x1u72gb5",
          $$css: !0,
        },
        sizeLargeItem: {
          marginEnd: "x185m5pd",
          marginStart: "xmly5ks",
          $$css: !0,
        },
        sizeLargeOffset: {
          marginEnd: "x3fpzix",
          marginStart: "xxdpisx",
          $$css: !0,
        },
      };
    function a(a, b) {
      var d = a.addOnAbsolute,
        e = a.addOnEnd,
        f = a.addOnStart,
        g = a.content,
        m = a.contentXstyle,
        o = a.disabled,
        p = o === void 0 ? !1 : o;
      o = a.display;
      o = o === void 0 ? "inline" : o;
      var q = a.focusable,
        r = a.icon,
        s = a.id,
        t = a.linkProps,
        u = a.onFocusIn,
        v = a.onFocusOut,
        w = a.onHoverIn,
        x = a.onHoverOut,
        y = a.onPress,
        z = a.onPressIn,
        A = a.onPressOut,
        B = a.overlayHoveredStyle,
        C = a.overlayPressedStyle,
        D = a.padding,
        E = D === void 0 ? "normal" : D;
      D = a.size;
      var F = D === void 0 ? "medium" : D;
      D = a.suppressHydrationWarning;
      D = D === void 0 ? !1 : D;
      var G = a.testid;
      G = a.testOnly_pressed;
      G = G === void 0 ? !1 : G;
      var H = a.xstyle;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "addOnAbsolute",
        "addOnEnd",
        "addOnStart",
        "content",
        "contentXstyle",
        "disabled",
        "display",
        "focusable",
        "icon",
        "id",
        "linkProps",
        "onFocusIn",
        "onFocusOut",
        "onHoverIn",
        "onHoverOut",
        "onPress",
        "onPressIn",
        "onPressOut",
        "overlayHoveredStyle",
        "overlayPressedStyle",
        "padding",
        "size",
        "suppressHydrationWarning",
        "testid",
        "testOnly_pressed",
        "xstyle",
      ]);
      var I = i(null),
        J = function (a) {
          if (I.current != null) {
            var b = I.current;
            b.style.transform =
              "scale(" + Math.max(j, (b.offsetWidth - k) / b.offsetWidth) + ")";
          }
          typeof z === "function" && z(a);
        },
        K = function (a) {
          if (I.current != null) {
            var b = I.current;
            b.style.transform = "none";
          }
          typeof A === "function" && A(a);
        };
      H = n(H);
      var L = H[0],
        M = H[1],
        N = [l.item, F === "large" && l.sizeLargeItem];
      H = function (a) {
        a = a.overlay;
        return h.jsxs(c("BaseRow.react"), {
          align: "center",
          ref: I,
          verticalAlign: "center",
          xstyle: [
            l.content,
            E === "wide" && l.paddingWide,
            p && l.disabled,
            M,
            m,
          ],
          children: [
            h.jsxs("div", {
              className: c("stylex")([
                l.offset,
                F === "large" && l.sizeLargeOffset,
              ]),
              children: [
                f != null
                  ? h.jsx(c("BaseRowItem.react"), {
                      useDeprecatedStyles: !0,
                      xstyle: N,
                      children: f,
                    })
                  : r != null
                  ? h.jsx(c("BaseRowItem.react"), {
                      useDeprecatedStyles: !0,
                      xstyle: N,
                      children: r,
                    })
                  : null,
                g != null
                  ? h.jsx(c("BaseRowItem.react"), {
                      useDeprecatedStyles: !0,
                      xstyle: N,
                      children: g,
                    })
                  : null,
                e != null
                  ? h.jsx(c("BaseRowItem.react"), {
                      useDeprecatedStyles: !0,
                      xstyle: N,
                      children: e,
                    })
                  : null,
              ],
            }),
            a,
            d != null ? d : null,
          ],
        });
      };
      return h.jsx(
        c("CometPressable.react"),
        babelHelpers["extends"]({}, a, {
          disabled: p,
          display: o,
          focusable: q,
          id: s,
          linkProps: t,
          onFocusIn: u,
          onFocusOut: v,
          onHoverIn: w,
          onHoverOut: x,
          onPress: y,
          onPressIn: J,
          onPressOut: K,
          overlayHoveredStyle: B,
          overlayPressedStyle: C,
          ref: b,
          suppressHydrationWarning: D,
          testOnly_pressed: G,
          testid: void 0,
          xstyle: [l.button, L],
          children: H,
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    var m = new WeakMap();
    function n(a) {
      if (!a) return [{}, {}];
      var b = m.get(a);
      if (b != null) return b;
      b = c("stylex").compose(a);
      var e = b.alignSelf,
        f = b.flexBasis,
        g = b.flexGrow,
        h = b.flexShrink,
        i = b.height,
        j = b.justifySelf,
        k = b.margin,
        l = b.marginBottom,
        n = b.marginEnd,
        o = b.marginStart,
        p = b.marginTop,
        q = b.maxHeight,
        r = b.maxWidth,
        s = b.minHeight,
        t = b.minWidth,
        u = b.position,
        v = b.width;
      b = babelHelpers.objectWithoutPropertiesLoose(b, [
        "alignSelf",
        "flexBasis",
        "flexGrow",
        "flexShrink",
        "height",
        "justifySelf",
        "margin",
        "marginBottom",
        "marginEnd",
        "marginStart",
        "marginTop",
        "maxHeight",
        "maxWidth",
        "minHeight",
        "minWidth",
        "position",
        "width",
      ]);
      e = {
        alignSelf: e,
        flexBasis: f,
        flexGrow: g,
        flexShrink: h,
        height: i,
        justifySelf: j,
        margin: k,
        marginBottom: l,
        marginEnd: n,
        marginStart: o,
        marginTop: p,
        maxHeight: q,
        maxWidth: r,
        minHeight: s,
        minWidth: t,
        position: u,
        width: v,
      };
      f = {};
      for (g in e) e[g] !== void 0 && (f[g] = e[g]);
      h = [
        d("stylex-compat").makeNamespace(f),
        d("stylex-compat").makeNamespace(b),
      ];
      m.set(a, h);
      return h;
    }
    g["default"] = b;
  },
  98
);
__d(
  "BaseTooltipTargetWrapper.react",
  ["FocusWithinHandler.react", "react", "stylex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
      j = b.useEffect,
      k = b.useRef,
      l = b.useState,
      m = {
        inheritAll: {
          alignContent: "x4k7w5x",
          alignItems: "x1h91t0o",
          alignSelf: "x1h9r5lt",
          display: "x1jfb8zj",
          flexBasis: "xv2umb2",
          flexDirection: "x1beo9mf",
          flexGrow: "xaigb6o",
          flexShrink: "x12ejxvf",
          height: "x3igimt",
          justifyContent: "xarpa2k",
          maxHeight: "xedcshv",
          maxWidth: "x1lytzrv",
          minHeight: "x1t2pt76",
          minWidth: "x7ja8zs",
          width: "x1qrby5j",
          $$css: !0,
        },
        wrapperInline: { display: "x3nfvp2", $$css: !0 },
      };
    function a(a, b) {
      var d = a.children,
        e = a.forceInlineDisplay,
        f = a.onHide,
        g = a.onShow,
        n = a.tooltipIdentifier;
      a = l(!1);
      var o = a[0];
      a = a[1];
      var p = l(!1),
        q = p[0];
      p = p[1];
      var r = o && q,
        s = k(r);
      j(
        function () {
          s.current !== r && (r ? g() : f()), (s.current = r);
        },
        [f, g, r]
      );
      o = i(
        function (a) {
          var b = a.key;
          b === "Escape" && n != null && (f(), a.stopPropagation());
        },
        [f, n]
      );
      return h.jsx("span", {
        "aria-describedby": n,
        className: c("stylex")(m.inheritAll, e === !0 && m.wrapperInline),
        "data-testid": void 0,
        onKeyDown: o,
        onPointerEnter: g,
        onPointerLeave: f,
        onPointerUp: f,
        ref: b,
        children: h.jsx(c("FocusWithinHandler.react"), {
          onFocusChange: a,
          onFocusVisibleChange: p,
          children: d,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = h.forwardRef(a);
    g["default"] = e;
  },
  98
);
__d(
  "useDelayedState",
  ["clearTimeout", "emptyFunction", "react", "setTimeout"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useEffect,
      j = b.useRef,
      k = b.useState;
    function a(a) {
      a = k(a);
      var b = a[0],
        d = a[1],
        e = j(null);
      i(function () {
        return function () {
          return c("clearTimeout")(e.current);
        };
      }, []);
      a = h(function (a, b, f) {
        b === void 0 && (b = 0),
          f === void 0 && (f = c("emptyFunction")),
          c("clearTimeout")(e.current),
          (e.current = null),
          b === 0
            ? (d(a), f(a))
            : (e.current = c("setTimeout")(function () {
                d(a), f(a), (e.current = null);
              }, b));
      }, []);
      return [b, a];
    }
    g["default"] = a;
  },
  98
);
__d(
  "BaseTooltipGroup.react",
  [
    "BaseTooltipTargetWrapper.react",
    "react",
    "recoverableViolation",
    "useCometUniqueID",
    "useDelayedState",
    "useStable",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    e = d("react");
    var i = e.useCallback,
      j = e.useContext,
      k = e.useMemo,
      l = e.useRef,
      m = e.useState,
      n = h.createContext(null);
    function a(a) {
      var b = a.children;
      a = a.tooltipImpl;
      var d = c("useDelayedState")(!1),
        e = d[0],
        f = d[1];
      d = m(null);
      var g = d[0],
        i = d[1],
        j = c("useCometUniqueID")(),
        l = g != null && g.contentKey != null ? g.contentKey : null;
      d = k(
        function () {
          return {
            activeContentKey: l,
            isVisible: e,
            onHide: function (a, b) {
              f(!1, a, b);
            },
            onShow: function (a, b, c) {
              i(a), f(!0, b, c);
            },
            tooltipIdentifier: j,
          };
        },
        [l, e, j, f]
      );
      return h.jsxs(h.Fragment, {
        children: [
          h.jsx(n.Provider, { value: d, children: b }),
          g != null
            ? h.jsx(
                a,
                babelHelpers["extends"]({}, g, {
                  id: e ? j : void 0,
                  isVisible: e,
                })
              )
            : null,
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    var o = 0;
    function p() {
      return "tooltip-" + o++;
    }
    function b(a) {
      var b = a.children,
        d = a.disabled,
        e = d === void 0 ? !1 : d;
      d = a.forceInlineDisplay;
      var f = a.hideDelayMs,
        g = a.onVisibilityChange,
        k = a.showDelayMs,
        m = babelHelpers.objectWithoutPropertiesLoose(a, [
          "children",
          "disabled",
          "forceInlineDisplay",
          "hideDelayMs",
          "onVisibilityChange",
          "showDelayMs",
        ]),
        o = c("useStable")(p),
        q = l(null);
      a = j(n);
      var r = a || {},
        s = r.activeContentKey,
        t = r.isVisible;
      t = t === void 0 ? !1 : t;
      var u = r.onHide,
        v = r.onShow;
      r = r.tooltipIdentifier;
      var w = i(
          function () {
            !e &&
              v &&
              v(
                babelHelpers["extends"]({ contentKey: o, contextRef: q }, m),
                k,
                g
              );
          },
          [e, v, o, m, k, g]
        ),
        x = i(
          function () {
            u && u(f, g);
          },
          [f, u, g]
        );
      a == null &&
        c("recoverableViolation")(
          "BaseTooltipGroup: Cannot render a BaseTooltipGroupChild component outside of a BaseTooltipGroup component. ",
          "comet_ui"
        );
      return h.jsx(c("BaseTooltipTargetWrapper.react"), {
        forceInlineDisplay: d,
        onHide: x,
        onShow: w,
        ref: q,
        tooltipIdentifier: t && s === o ? r : void 0,
        children: b,
      });
    }
    b.displayName = b.name + " [from " + f.id + "]";
    g.Context = n;
    g.Container = a;
    g.Child = b;
  },
  98
);
__d(
  "BaseTooltip.react",
  [
    "BaseTooltipGroup.react",
    "BaseTooltipTargetWrapper.react",
    "react",
    "useCometUniqueID",
    "useDelayedState",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
      j = b.useContext,
      k = b.useRef,
      l = 50,
      m = 300;
    function n(a) {
      var b = a.children,
        d = a.delayTooltipMs,
        e = d === void 0 ? m : d;
      d = a.disabled;
      var f = d === void 0 ? !1 : d;
      d = a.forceInlineDisplay;
      var g = a.tooltipImpl,
        j = a.onVisibilityChange;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "children",
        "delayTooltipMs",
        "disabled",
        "forceInlineDisplay",
        "tooltipImpl",
        "onVisibilityChange",
      ]);
      var l = c("useDelayedState")(!1),
        n = l[0],
        o = l[1];
      l = k(null);
      var p = c("useCometUniqueID")(),
        q = i(
          function () {
            if (f) return;
            o(!0, e, j);
          },
          [e, f, j, o]
        ),
        r = i(
          function () {
            o(!1, 0, j);
          },
          [j, o]
        );
      return h.jsxs(h.Fragment, {
        children: [
          h.jsx(c("BaseTooltipTargetWrapper.react"), {
            forceInlineDisplay: d,
            onHide: r,
            onShow: q,
            ref: l,
            tooltipIdentifier: n ? p : void 0,
            children: b,
          }),
          h.jsx(
            g,
            babelHelpers["extends"]({}, a, {
              contentKey: null,
              contextRef: l,
              id: n ? p : void 0,
              isVisible: n,
            })
          ),
        ],
      });
    }
    n.displayName = n.name + " [from " + f.id + "]";
    function a(a) {
      var b = j(d("BaseTooltipGroup.react").Context);
      if (b != null) {
        b = a.delayTooltipMs;
        b = b === void 0 ? m : b;
        a.tooltipImpl;
        var c = babelHelpers.objectWithoutPropertiesLoose(a, [
          "delayTooltipMs",
          "tooltipImpl",
        ]);
        return h.jsx(
          d("BaseTooltipGroup.react").Child,
          babelHelpers["extends"]({}, c, { hideDelayMs: l, showDelayMs: b })
        );
      }
      return h.jsx(n, babelHelpers["extends"]({}, a));
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useCometDisplayTimingTrackerForInteraction",
  ["InteractionTracingMetrics", "cr:449", "performanceNow", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    e = d("react");
    var h = e.useCallback,
      i = e.useRef;
    function a(a, d, e) {
      d === void 0 && (d = !1);
      var f = i(null);
      return h(
        function (g) {
          if (a != null && f.current !== g) {
            f.current = g;
            if (g) {
              var h = c("performanceNow")();
              e != null
                ? c("InteractionTracingMetrics").addMountPoint(e, h, a)
                : c("InteractionTracingMetrics")
                    .currentInteractionLogger()
                    .forEach(function (b) {
                      return c("InteractionTracingMetrics").addMountPoint(
                        b.traceId,
                        h,
                        a
                      );
                    });
              if (!d && b("cr:449")) {
                var i = b("cr:449").getCurrentVCTraces();
                i.forEach(function (a) {
                  a.interactionType !== "INTERACTION" && a.excludeElement(g);
                });
              }
            }
          }
        },
        [e, d, a]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useFadeEffect",
  [
    "clearTimeout",
    "react",
    "setTimeout",
    "useDoubleEffectHack_DO_NOT_USE_THIS_IS_TRACKED",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useLayoutEffect,
      j = b.useReducer,
      k = b.useRef,
      l = 1e3;
    function m(a, b) {
      switch (b.type) {
        case "start":
          return { isTransitioning: !0, shouldBeVisible: b.shouldBeVisible };
        case "finish":
          return { isTransitioning: !1, shouldBeVisible: a.shouldBeVisible };
        default:
          return a;
      }
    }
    function a(a) {
      var b = k(null),
        d = j(m, { isTransitioning: !1, shouldBeVisible: !1 }),
        e = d[0],
        f = e.isTransitioning;
      e = e.shouldBeVisible;
      var g = d[1],
        n = k(null),
        o = k(null);
      c("useDoubleEffectHack_DO_NOT_USE_THIS_IS_TRACKED")(function () {
        return function () {
          n.current != null && c("clearTimeout")(n.current),
            o.current != null && window.cancelAnimationFrame(o.current);
        };
      }, []);
      var p = h(function () {
          g({ type: "finish" }),
            n.current != null && c("clearTimeout")(n.current),
            (n.current = null);
        }, []),
        q = h(
          function (a) {
            o.current != null && window.cancelAnimationFrame(o.current),
              (o.current = window.requestAnimationFrame(function () {
                g({ shouldBeVisible: a, type: "start" }),
                  (o.current = null),
                  n.current != null && c("clearTimeout")(n.current),
                  (n.current = c("setTimeout")(p, l));
              }));
          },
          [p]
        ),
        r = k(!1);
      i(
        function () {
          r.current !== a && (!a || b.current != null) && q(a), (r.current = a);
        },
        [a, q]
      );
      d = h(
        function (a) {
          var c = b.current;
          b.current = a;
          a != null
            ? (a.addEventListener != null &&
                (a.addEventListener("transitionend", p),
                a.addEventListener("webkitTransitionEnd", p)),
              r.current === !0 && q(!0))
            : c != null &&
              c.removeEventListener != null &&
              (c.removeEventListener("transitionend", p),
              c.removeEventListener("webkitTransitionEnd", p));
        },
        [p, q]
      );
      f = f || e || a;
      return [f, e, d];
    }
    g["default"] = a;
  },
  98
);
__d(
  "useTooltipDelayedContent",
  ["clearTimeout", "react", "setTimeout"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useLayoutEffect,
      i = b.useRef,
      j = b.useState;
    function a(a) {
      var b = a.delayContentMs,
        d = a.isVisible,
        e = i(d),
        f = i(null);
      a = j(function () {
        return d === !0 && e.current === !1 && b > 0;
      });
      var g = a[0],
        k = a[1];
      h(
        function () {
          if (d === !0 && e.current === !1 && b > 0) {
            k(!0);
            f.current = c("setTimeout")(function () {
              k(!1), (f.current = null);
            }, b);
            return function () {
              c("clearTimeout")(f.current), (f.current = null);
            };
          } else
            f.current != null &&
              (k(!1), c("clearTimeout")(f.current), (f.current = null));
          e.current = d;
        },
        [b, d, e]
      );
      return { isPending: g };
    }
    g["default"] = a;
  },
  98
);
__d(
  "BaseTooltipImpl.react",
  [
    "BaseContextualLayer.react",
    "CometHeroInteractionContextPassthrough.react",
    "CometPlaceholder.react",
    "react",
    "stylex",
    "useCometDisplayTimingTrackerForInteraction",
    "useFadeEffect",
    "useTooltipDelayedContent",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useLayoutEffect,
      j = b.useRef,
      k = {
        container: {
          backgroundColor: "xj5tmjb",
          borderTopStartRadius: "x1r9drvm",
          borderTopEndRadius: "x16aqbuh",
          borderBottomEndRadius: "x9rzwcf",
          borderBottomStartRadius: "xjkqk3g",
          boxShadow: "xms15q0",
          display: "x1lliihq",
          marginBottom: "xjpr12u",
          marginTop: "xr9ek0c",
          maxWidth: "x86nfjv",
          opacity: "xg01cxk",
          paddingStart: "x1ye3gou",
          paddingEnd: "xn6708d",
          paddingTop: "xz9dl7a",
          paddingBottom: "xsag5q8",
          position: "x1n2onr6",
          transitionDuration: "x1ebt8du",
          transitionProperty: "x19991ni",
          transitionTimingFunction: "x1dhq9h",
          $$css: !0,
        },
        containerVisible: {
          opacity: "x1hc1fzr",
          transitionDuration: "xhb22t3",
          transitionTimingFunction: "xls3em1",
          $$css: !0,
        },
        contextualLayer: { pointerEvents: "x47corl", $$css: !0 },
        loadingState: {
          display: "x78zum5",
          justifyContent: "xl56j7k",
          $$css: !0,
        },
      };
    function l(a) {
      var b = a.contextualLayerRef;
      i(
        function () {
          var a = b.current;
          a && a.reposition({ autoflip: !0 });
        },
        [b]
      );
      return null;
    }
    function a(a) {
      var b = a.contentKey,
        d = a.delayContentMs;
      d = d === void 0 ? 0 : d;
      a.headline;
      var e = a.id,
        f = a.isVisible,
        g = a.loadingState,
        i = a.tooltip;
      a.tooltipTheme;
      var m = a.xstyle;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "contentKey",
        "delayContentMs",
        "headline",
        "id",
        "isVisible",
        "loadingState",
        "tooltip",
        "tooltipTheme",
        "xstyle",
      ]);
      var n = j(null),
        o = c("useFadeEffect")(f),
        p = o[0],
        q = o[1];
      o = o[2];
      var r = c("useCometDisplayTimingTrackerForInteraction")("ToolTip");
      d = c("useTooltipDelayedContent")({ delayContentMs: d, isVisible: f });
      f = d.isPending;
      return i == null || !p
        ? null
        : h.jsx(c("CometHeroInteractionContextPassthrough.react"), {
            clear: !0,
            children: h.jsx(
              c("BaseContextualLayer.react"),
              babelHelpers["extends"]({ align: "middle" }, a, {
                imperativeRef: n,
                ref: r,
                xstyle: k.contextualLayer,
                children: h.jsx("span", {
                  className: c("stylex")(
                    k.container,
                    m,
                    q && k.containerVisible
                  ),
                  "data-testid": void 0,
                  id: e,
                  ref: o,
                  role: "tooltip",
                  children: f
                    ? h.jsx("div", {
                        className: "x78zum5 xl56j7k",
                        children: g,
                      })
                    : h.jsxs(
                        c("CometPlaceholder.react"),
                        {
                          fallback: g,
                          children: [h.jsx(l, { contextualLayerRef: n }), i],
                        },
                        b
                      ),
                }),
              })
            ),
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometCircleButton.react",
  ["CometIcon.react", "CometPressable.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        pressableOverlayPressed: { backgroundColor: "x1lxk4cn", $$css: !0 },
        pressed: { transform: "x1n5d1j9", $$css: !0 },
        root: {
          alignItems: "x6s0dn4",
          borderTopStartRadius: "x14yjl9h",
          borderTopEndRadius: "xudhj91",
          borderBottomEndRadius: "x18nykt9",
          borderBottomStartRadius: "xww2gxu",
          borderTopWidth: "x972fbf",
          borderEndWidth: "xcfux6l",
          borderBottomWidth: "x1qhh985",
          borderStartWidth: "xm0m39n",
          boxSizing: "x9f619",
          display: "x78zum5",
          justifyContent: "xl56j7k",
          paddingTop: "xexx8yu",
          paddingEnd: "x4uap5",
          paddingBottom: "x18d9i69",
          paddingStart: "xkhd6sd",
          position: "x1n2onr6",
          $$css: !0,
        },
      },
      j = {
        24: { height: "xxk0z11", width: "xvy4d1p", $$css: !0 },
        28: { height: "x1fgtraw", width: "xgd8bvy", $$css: !0 },
        32: { height: "x10w6t97", width: "x1td3qas", $$css: !0 },
        36: { height: "xc9qbxq", width: "x14qfxbe", $$css: !0 },
        40: { height: "x1vqgdyp", width: "x100vrsf", $$css: !0 },
        48: { height: "xsdox4t", width: "x1useyqa", $$css: !0 },
      },
      k = {
        "dark-overlay": {
          backgroundColor: "x18l40ae",
          color: "x14ctfv",
          $$css: !0,
        },
        deemphasized: { backgroundColor: "xjbqb8w", $$css: !0 },
        "deemphasized-overlay": { backgroundColor: "x1hr4nm9", $$css: !0 },
        normal: { backgroundColor: "x1qhmfi1", $$css: !0 },
        overlay: {
          backgroundColor: "x9bbmet",
          boxShadow: "x10f5nwc",
          color: "xi81zsa",
          $$css: !0,
        },
        "overlay-floating": {
          backgroundColor: "x1l31dnx",
          boxShadow: "x1qeybcx",
          $$css: !0,
        },
        "overlay-raised": {
          backgroundColor: "x9bbmet",
          boxShadow: "x1k54i6l",
          color: "xi81zsa",
          $$css: !0,
        },
        "primary-background-overlay": { backgroundColor: "xtvsq51", $$css: !0 },
      },
      l = {
        "dark-overlay": { backgroundColor: "x18l40ae", $$css: !0 },
        deemphasized: { backgroundColor: "xjbqb8w", $$css: !0 },
        "deemphasized-overlay": { backgroundColor: "x1f2gare", $$css: !0 },
        normal: { backgroundColor: "xwcfey6", $$css: !0 },
        overlay: {
          backgroundColor: "x1ahlmzr",
          borderTopWidth: "x972fbf",
          borderEndWidth: "xcfux6l",
          borderBottomWidth: "x1qhh985",
          borderStartWidth: "xm0m39n",
          boxShadow: "xxnfx33",
          color: "x1dntmbh",
          $$css: !0,
        },
        "primary-background-overlay": { backgroundColor: "xtvsq51", $$css: !0 },
      },
      m =
        ((b = {}),
        (b[24] = 12),
        (b[28] = 16),
        (b[32] = 16),
        (b[36] = 20),
        (b[40] = 20),
        (b[48] = 24),
        b),
      n =
        ((e = {}),
        (e[24] = 20),
        (e[28] = 20),
        (e[32] = 24),
        (e[36] = 28),
        (e[40] = 32),
        (e[48] = 32),
        e);
    function a(a, b) {
      var d = a["aria-hidden"],
        e = a["aria-pressed"],
        f = a.color,
        g = a.dataAttributes,
        p = a.disabled,
        q = p === void 0 ? !1 : p;
      p = a.focusable;
      var r = a.icon,
        s = a.iconRatio,
        t = a.label,
        u = a.linkProps,
        v = a.onFocusIn,
        w = a.onFocusOut,
        x = a.onHoverIn,
        y = a.onHoverOut,
        z = a.onPress,
        A = a.onPressIn,
        B = a.onPressOut,
        C = a.overlayHoveredStyle,
        D = a.size,
        E = a.testid;
      E = a.testOnly_pressed;
      a = a.type;
      var F = a === void 0 ? "normal" : a;
      a =
        g != null
          ? Object.keys(g).reduce(function (a, b) {
              a != null && b != null && (a["data-" + b] = g[b]);
              return a;
            }, {})
          : null;
      t = h.jsx(c("CometPressable.react"), {
        "aria-hidden": d,
        "aria-label": t,
        "aria-pressed": e,
        disabled: q,
        display: "inline",
        focusable: p,
        linkProps: u,
        onFocusIn: v,
        onFocusOut: w,
        onHoverIn: x,
        onHoverOut: y,
        onPress: z,
        onPressIn: A,
        onPressOut: B,
        overlayHoveredStyle: C,
        overlayPressedStyle: i.pressableOverlayPressed,
        overlayRadius: "50%",
        ref: b,
        testOnly_pressed: E,
        testid: void 0,
        xstyle: function (a) {
          a = a.pressed;
          return [
            i.root,
            j[D],
            k[F],
            q &&
              l[
                F === "overlay-raised" || F === "overlay-floating"
                  ? "overlay"
                  : F
              ],
            a && i.pressed,
          ];
        },
        children: h.jsx(c("CometIcon.react"), {
          color: q ? "disabled" : (d = f) != null ? d : o(F),
          icon: r,
          size: s === "large" ? n[D] : m[D],
        }),
      });
      return a != null
        ? h.jsx("div", babelHelpers["extends"]({}, a, { children: t }))
        : t;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function o(a) {
      switch (a) {
        case "dark-overlay":
          return "white";
        case "deemphasized-overlay":
          return "highlight";
        default:
          return "primary";
      }
    }
    d = h.forwardRef(a);
    g["default"] = d;
  },
  98
);
__d(
  "CometImageFromIXValue.react",
  [
    "BaseImage.react",
    "CometSSRBackgroundImageUtils",
    "CometVisualCompletionAttributes",
    "RecoverableViolationWithComponentStack.react",
    "coerceImageishSprited",
    "coerceImageishURL",
    "react",
    "stylex",
    "testID",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a, b) {
      var e = a.alt;
      e = e === void 0 ? "" : e;
      var f = a.objectFit,
        g = a.source,
        i = a.testid;
      a = a.xstyle;
      d("CometSSRBackgroundImageUtils").processSpritedImagesForSSRPreload(g);
      var j = c("coerceImageishSprited")(g);
      if (j != null) {
        var k = c("stylex")(a);
        return h.jsx(
          "i",
          babelHelpers["extends"](
            {},
            c("CometVisualCompletionAttributes").CSS_IMG,
            c("testID")(i),
            {
              "aria-label": e === "" ? null : e,
              className:
                j.type === "css"
                  ? k !== ""
                    ? j.className + " " + k
                    : j.className
                  : k,
              ref: b,
              role: e === "" ? null : "img",
              style: j.type === "cssless" ? j.style : void 0,
            }
          )
        );
      }
      i = c("coerceImageishURL")(g);
      if (i != null) {
        k = i.height;
        j = i.uri;
        g = i.width;
        return h.jsx(c("BaseImage.react"), {
          alt: e,
          draggable: !1,
          height: f === "cover" ? "100%" : k,
          objectFit: f,
          ref: b,
          src: j,
          testid: void 0,
          width: f === "cover" ? "100%" : g,
          xstyle: a,
        });
      }
      return h.jsx(c("RecoverableViolationWithComponentStack.react"), {
        errorMessage:
          "asset provided to CometImageFromIXValue cannot be transformed by Haste",
        projectName: "comet_ui",
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "useFeedImageErrorEventLoggerCbs",
  ["Banzai", "CometInteractionSourceContext", "Random", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useContext,
      j = b.useRef,
      k = 1e3,
      l = function (a) {
        var b = a.result,
          e = a.src;
        a = a.surface;
        d("Random").coinflip(k) &&
          c("Banzai").post("logger:WWWImageLoadSrcEventLoggerConfig", {
            result: b,
            src: e,
            surface: a,
          });
      };
    function a(a) {
      var b = a.onError,
        d = a.onLoad,
        e = a.src,
        f = j(null);
      a = i(c("CometInteractionSourceContext"));
      var g = a === 3 ? "profile" : a === 0 ? "feed" : null;
      a = h(
        function (a) {
          d != null && d(a);
          if (f.current === e) return;
          typeof e === "string" &&
            (l({ result: "success", src: e, surface: g }), (f.current = e));
        },
        [d, e, g]
      );
      var k = h(
        function (a) {
          b != null && b(a);
          if (f.current === e) return;
          typeof e === "string" &&
            (l({ result: "error", src: e, surface: g }), (f.current = e));
        },
        [b, e, g]
      );
      return g == null || typeof e !== "string"
        ? { _onError: b, _onLoad: d }
        : { _onError: k, _onLoad: a };
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometImage.react",
  [
    "BaseImage.react",
    "CometImageFromIXValue.react",
    "cr:2010754",
    "gkx",
    "mergeRefs",
    "react",
    "useFeedImageErrorEventLoggerCbs",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    e = d("react");
    var i = e.useMemo,
      j = e.useRef,
      k = "1";
    function a(a, d) {
      var e = j(null),
        f = i(
          function () {
            return c("mergeRefs")(e, d);
          },
          [e, d]
        ),
        g = a.alt,
        l = a.objectFit,
        m = a.onError,
        n = a.onLoad,
        o = a.src,
        p = a.testid;
      p = a.xstyle;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "alt",
        "objectFit",
        "onError",
        "onLoad",
        "src",
        "testid",
        "xstyle",
      ]);
      m = c("useFeedImageErrorEventLoggerCbs")({
        onError: m,
        onLoad: n,
        src: o,
      });
      n = m._onError;
      m = m._onLoad;
      var q = c("gkx")("1690028") ? k : void 0;
      function r(a, c, d, f, g, h) {
        b("cr:2010754") &&
          c === "mount" &&
          e.current != null &&
          typeof o === "string" &&
          b("cr:2010754").trackImagePerf(e.current, h, o, {
            mutationType: "reactCommit",
          });
      }
      if (typeof o === "string") {
        a = h.jsx(
          c("BaseImage.react"),
          babelHelpers["extends"]({}, a, {
            alt: g,
            elementtiming: q,
            objectFit: l,
            onError: n,
            onLoad: m,
            ref: f,
            src: o,
            testid: void 0,
            xstyle: p,
          })
        );
        return c("gkx")("1690028")
          ? h.jsx(h.Profiler, { id: k, onRender: r, children: a })
          : a;
      }
      return h.jsx(c("CometImageFromIXValue.react"), {
        alt: g,
        objectFit: l,
        ref: f,
        source: o,
        testid: void 0,
        xstyle: p,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    d = h.forwardRef(a);
    g["default"] = d;
  },
  98
);
__d(
  "deferredLoadComponentBase",
  [
    "ExecutionEnvironment",
    "Promise",
    "PromiseAnnotate",
    "react",
    "suspendOrThrowIfUsedInSSR",
  ],
  function (a, b, c, d, e, f, g) {
    var h = c("react"),
      i = {},
      j = {},
      k = new Map();
    function l(a, b) {
      k.set(a, b);
    }
    function m(a) {
      return k.get(a);
    }
    function a(a, e) {
      var g = m(a);
      if (g) return g;
      var k,
        n = a.getModuleId();
      function o() {
        var c = j[n];
        c ||
          (c = j[n] =
            new (b("Promise"))(function (b) {
              a.loadImmediately(function (a) {
                delete j[n], (k = e(a)), b();
              });
            }));
        return c;
      }
      function p() {
        var c = i[n];
        c ||
          (c = i[n] =
            new (b("Promise"))(function (b) {
              a.onReady(function (a) {
                (k = e(a)), delete i[n], b();
              });
            }));
        return c;
      }
      function q(b, f) {
        var g = b.loadImmediately;
        b = babelHelpers.objectWithoutPropertiesLoose(b, ["loadImmediately"]);
        if (!k) {
          var i = a.getModuleIfRequireable();
          i != null && (k = e(i));
          if (!k) {
            !c("ExecutionEnvironment").isInBrowser &&
              !a.isAvailableInSSR_DO_NOT_USE() &&
              c("suspendOrThrowIfUsedInSSR")(
                "Loading bootloaded and T3 components are disabled during SSR"
              );
            i = g === !0 ? o() : p();
            d("PromiseAnnotate").setDisplayName(i, q.displayName);
            throw i;
          }
        }
        return h.jsx(k, babelHelpers["extends"]({}, b, { ref: f }));
      }
      q.displayName = q.name + " [from " + f.id + "]";
      q.displayName = "deferredLoadComponent(" + a.getModuleId() + ")";
      g = h.forwardRef(q);
      l(a, g);
      return g;
    }
    g["default"] = a;
  },
  98
);
__d(
  "deferredLoadComponent",
  ["deferredLoadComponentBase"],
  function (a, b, c, d, e, f, g) {
    var h = function (a) {
      return a;
    };
    function a(a) {
      return c("deferredLoadComponentBase")(a, h);
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometTooltipImpl.react",
  [
    "CometPlaceholder.react",
    "deferredLoadComponent",
    "react",
    "requireDeferredForDisplay",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = c("deferredLoadComponent")(
        c("requireDeferredForDisplay")(
          "CometTooltipDeferredImpl.react"
        ).__setRef("CometTooltipImpl.react")
      );
    function a(a) {
      return h.jsx(c("CometPlaceholder.react"), {
        fallback: null,
        children: h.jsx(i, babelHelpers["extends"]({}, a)),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometTooltip.react",
  ["BaseTooltip.react", "CometTooltipImpl.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.delayMs;
      a = babelHelpers.objectWithoutPropertiesLoose(a, ["delayMs"]);
      return h.jsx(
        c("BaseTooltip.react"),
        babelHelpers["extends"]({}, a, {
          delayTooltipMs: b,
          tooltipImpl: c("CometTooltipImpl.react"),
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useCometTheme",
  [
    "BaseThemeDisplayModeContext",
    "react",
    "stylex-compat",
    "useCurrentDisplayMode",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useMemo,
      j = { dark: "__fb-dark-mode ", light: "__fb-light-mode " };
    function a(a) {
      var b = c("useCurrentDisplayMode")(),
        e;
      a === "invert" ? (e = b === "light" ? "dark" : "light") : (e = a);
      b = i(
        function () {
          return function (a) {
            a = a.children;
            return h.jsx(c("BaseThemeDisplayModeContext").Provider, {
              value: e,
              children: a,
            });
          };
        },
        [e]
      );
      a = d("stylex-compat").makeNamespace({ theme: j[e] });
      return [b, a];
    }
    g["default"] = a;
  },
  98
);
__d(
  "TetraButton.react",
  [
    "BaseStyledButton.react",
    "CometGHLRenderingContext",
    "CometIcon.react",
    "CometTooltip.react",
    "TetraText.react",
    "isBlueprintStylesEnabled",
    "mergeRefs",
    "react",
    "useCometTheme",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useContext,
      j = b.useRef,
      k = {
        contentDisabled: { opacity: "xuzhngd", $$css: !0 },
        darkOverlay: {
          backgroundColor: "x18l40ae",
          color: "x14ctfv",
          $$css: !0,
        },
        darkOverlayPressed: { backgroundColor: "x1lxk4cn", $$css: !0 },
        disabled: { backgroundColor: "xwcfey6", $$css: !0 },
        fdsOverrideBlack: { backgroundColor: "xal61yo", $$css: !0 },
        fdsOverrideCollaborativePostCTA: {
          backgroundColor: "x14hiurz",
          mixBlendMode: "x1nor908",
          $$css: !0,
        },
        fdsOverrideNegative: { backgroundColor: "x1ciooss", $$css: !0 },
        fdsOverridePositive: { backgroundColor: "xv9rvxn", $$css: !0 },
        overlay: { backgroundColor: "x14hiurz", $$css: !0 },
        overlayDeemphasized: { backgroundColor: "x1f2gare", $$css: !0 },
        overlayDeemphasizedOverlayPressed: {
          backgroundColor: "x1f2gare",
          $$css: !0,
        },
        overlayDisabled: { backgroundColor: "x1ahlmzr", $$css: !0 },
        overlayOverlayPressed: { backgroundColor: "xiwuv7k", $$css: !0 },
        paddingIconOnly: {
          paddingEnd: "x1pi30zi",
          paddingStart: "x1swvt13",
          $$css: !0,
        },
        primary: { backgroundColor: "xtvsq51", $$css: !0 },
        primaryDeemphasized: { backgroundColor: "x1hr4nm9", $$css: !0 },
        primaryDeemphasizedOverlayPressed: {
          backgroundColor: "x18z898i",
          $$css: !0,
        },
        primaryOverlayPressed: { backgroundColor: "x1iutvsz", $$css: !0 },
        secondary: { backgroundColor: "x1qhmfi1", $$css: !0 },
        secondaryDeemphasized: { backgroundColor: "xjbqb8w", $$css: !0 },
        secondaryDeemphasizedOverlayPressed: {
          backgroundColor: "x18z898i",
          $$css: !0,
        },
        secondaryOverlayPressed: { backgroundColor: "x1iutvsz", $$css: !0 },
        sizeLarge: { height: "x1fq8qgq", $$css: !0 },
        sizeMedium: { height: "x1r1pt67", $$css: !0 },
      },
      l = {
        sizeLarge: {
          borderTopStartRadius: "x4dbc",
          borderTopEndRadius: "x1y9341w",
          borderBottomEndRadius: "x197fjye",
          borderBottomStartRadius: "xjufhxy",
          height: "x1whk3tm",
          $$css: !0,
        },
        sizeMedium: {
          borderTopStartRadius: "xeqyu0i",
          borderTopEndRadius: "x1grejt4",
          borderBottomEndRadius: "x1xrrxpe",
          borderBottomStartRadius: "x17se2pc",
          height: "xfumdyt",
          $$css: !0,
        },
      },
      m = {
        ":deemphasized": {
          iconColor: "highlight",
          overlayPressedStyle: k.primaryDeemphasizedOverlayPressed,
          textColor: "highlight",
        },
        ":disabled": { iconColor: "disabled", textColor: "disabled" },
        iconColor: "white",
        overlayPressedStyle: k.primaryOverlayPressed,
        textColor: "white",
      },
      n = {
        ":deemphasized": {
          iconColor: "highlight",
          overlayPressedStyle: k.secondaryDeemphasizedOverlayPressed,
          textColor: "highlight",
        },
        ":disabled": { iconColor: "disabled", textColor: "disabled" },
        iconColor: "primary",
        overlayPressedStyle: k.secondaryOverlayPressed,
        textColor: "secondary",
      },
      o = {
        ":deemphasized": {
          iconColor: "white",
          overlayPressedStyle: k.overlayDeemphasizedOverlayPressed,
          textColor: "white",
        },
        ":disabled": { iconColor: "disabled", textColor: "disabled" },
        iconColor: "primary",
        overlayPressedStyle: k.overlayOverlayPressed,
        textColor: "primary",
      },
      p = {
        ":deemphasized": {
          iconColor: "white",
          overlayPressedStyle: k.overlayDeemphasizedOverlayPressed,
          textColor: "white",
        },
        ":disabled": { iconColor: "disabled", textColor: "disabled" },
        iconColor: "white",
        overlayPressedStyle: k.darkOverlayPressed,
        textColor: "white",
      };
    function q(a) {
      switch (a) {
        case "fdsOverride_collaborativePostCTA":
        case "secondary":
          return n;
        case "overlay":
          return o;
        case "dark-overlay":
          return p;
        case "primary":
        default:
          return m;
      }
    }
    function r(a, b) {
      var c = b.disabled;
      b = b.reduceEmphasis;
      a = q(a);
      return (
        (c ? a[":disabled"] : null) || (b ? a[":deemphasized"] : null) || a
      );
    }
    function a(a, b) {
      var d,
        e = a.addOnPrimary,
        f = a.addOnSecondary,
        g = a.disabled;
      g = g === void 0 ? !1 : g;
      var m = a.icon,
        n = a.id,
        o = a.label,
        p = a.labelIsHidden;
      p = p === void 0 ? !1 : p;
      var q = a.linkProps,
        s = a.onFocusIn,
        t = a.onFocusOut,
        u = a.onHoverIn,
        v = a.onHoverOut,
        w = a.onPress,
        x = a.onPressIn,
        y = a.onPressOut,
        z = a.padding;
      z = z === void 0 ? "normal" : z;
      var A = a.reduceEmphasis;
      A = A === void 0 ? !1 : A;
      var B = a.size;
      B = B === void 0 ? "medium" : B;
      var C = a.suppressHydrationWarning;
      C = C === void 0 ? !1 : C;
      var D = a.testid;
      D = a.testOnly_pressed;
      D = D === void 0 ? !1 : D;
      var E = a.tooltip,
        F = a.tooltipPosition;
      F = F === void 0 ? "above" : F;
      var G = a.type;
      G = G === void 0 ? "primary" : G;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "addOnPrimary",
        "addOnSecondary",
        "disabled",
        "icon",
        "id",
        "label",
        "labelIsHidden",
        "linkProps",
        "onFocusIn",
        "onFocusOut",
        "onHoverIn",
        "onHoverOut",
        "onPress",
        "onPressIn",
        "onPressOut",
        "padding",
        "reduceEmphasis",
        "size",
        "suppressHydrationWarning",
        "testid",
        "testOnly_pressed",
        "tooltip",
        "tooltipPosition",
        "type",
      ]);
      var H = r(G, { disabled: g, reduceEmphasis: A }),
        I = H.iconColor,
        J = H.overlayPressedStyle;
      H = H.textColor;
      var K = j(null),
        L = c("useCometTheme")("light"),
        M = L[0];
      L = L[1];
      var N = i(c("CometGHLRenderingContext"));
      N = q != null && N;
      d = (d = a["aria-label"]) != null ? d : o;
      N = N ? void 0 : d;
      d = h.jsx(
        c("BaseStyledButton.react"),
        babelHelpers["extends"]({}, a, {
          addOnEnd: f,
          addOnStart: e,
          "aria-label": N,
          content: p
            ? null
            : h.jsx(c("TetraText.react"), {
                color: H,
                numberOfLines: 1,
                type: B === "large" ? "button1" : "button2",
                children: o,
              }),
          contentXstyle: [
            G === "overlay" && g && k.contentDisabled,
            G === "overlay" && L,
            B === "medium" &&
              (c("isBlueprintStylesEnabled")() ? l.sizeMedium : k.sizeMedium),
            B === "large" &&
              (c("isBlueprintStylesEnabled")() ? l.sizeLarge : k.sizeLarge),
            m != null && p && k.paddingIconOnly,
          ],
          disabled: g,
          icon:
            m && h.jsx(c("CometIcon.react"), { color: I, icon: m, size: 16 }),
          id: n,
          linkProps: q,
          onFocusIn: s,
          onFocusOut: t,
          onHoverIn: u,
          onHoverOut: v,
          onPress: w,
          onPressIn: x,
          onPressOut: y,
          overlayPressedStyle: J,
          padding: z,
          ref: c("mergeRefs")(K, b),
          suppressHydrationWarning: C,
          testOnly_pressed: D,
          testid: void 0,
          xstyle: [
            G === "primary" && k.primary,
            G === "primary" && A && k.primaryDeemphasized,
            G === "secondary" && k.secondary,
            G === "secondary" && A && k.secondaryDeemphasized,
            G === "fdsOverride_black" && k.fdsOverrideBlack,
            G === "fdsOverride_negative" && k.fdsOverrideNegative,
            G === "fdsOverride_positive" && k.fdsOverridePositive,
            G === "fdsOverride_collaborativePostCTA" &&
              k.fdsOverrideCollaborativePostCTA,
            G === "overlay" && k.overlay,
            G === "overlay" && A && k.overlayDeemphasized,
            g && k.disabled,
            G === "overlay" && g && k.overlayDisabled,
            G === "dark-overlay" && k.darkOverlay,
          ],
        })
      );
      a = G === "overlay" ? h.jsx(M, { children: d }) : d;
      return E != null
        ? h.jsx(c("CometTooltip.react"), {
            position: F,
            tooltip: E,
            children: a,
          })
        : a;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = h.forwardRef(a);
    g["default"] = e;
  },
  98
);
__d(
  "BaseHeadingContextWrapper.react",
  ["BaseHeadingContext", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useContext;
    function a(a) {
      a = a.children;
      var b = i(c("BaseHeadingContext"));
      return h.jsx(c("BaseHeadingContext").Provider, {
        value: b + 1,
        children: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometTrackingNodeAbstractViewHierarchyWrapperContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    a = d("react").createContext;
    b = a(void 0);
    c = b;
    g["default"] = c;
  },
  98
);
__d(
  "useCometTrackingNodes",
  ["CometTrackingNodesContext", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useContext;
    function a() {
      return h(c("CometTrackingNodesContext"));
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometTrackingNodeProvider.react",
  [
    "CometTrackingNodeAbstractViewHierarchyWrapperContext",
    "CometTrackingNodesContext",
    "encodeTrackingNode",
    "react",
    "useCometTrackingNodes",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useContext,
      j = b.useMemo;
    function a(a) {
      var b = a.children,
        d = a.index,
        e = a.trackingNode,
        f = c("useCometTrackingNodes")();
      a = j(
        function () {
          if (e == null) return f;
          var a = c("encodeTrackingNode")(e, d);
          return [a].concat(f);
        },
        [f, e, d]
      );
      var g = b,
        k = i(c("CometTrackingNodeAbstractViewHierarchyWrapperContext"));
      k != null && (g = k(a, b));
      return h.jsx(c("CometTrackingNodesContext").Provider, {
        value: a,
        children: g,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometOnMobileContext.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = { isCometOnMobile: !1 };
    c = a.createContext(b);
    g["default"] = c;
  },
  98
);
__d(
  "useIsCometOnMobile",
  ["CometOnMobileContext.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useContext;
    function a() {
      return h(c("CometOnMobileContext.react")).isCometOnMobile;
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometCardedDialogLegacy.react",
  [
    "fbt",
    "ix",
    "BaseDialog.react",
    "BaseHeadingContextWrapper.react",
    "CometCircleButton.react",
    "CometTrackingNodeProvider.react",
    "Locale",
    "TetraText.react",
    "TetraTextPairing.react",
    "fbicon",
    "react",
    "stylex",
    "useCometUniqueID",
    "useIsCometOnMobile",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = d("fbicon")._(i("512647"), 20),
      l = d("fbicon")._(i("514454"), 20),
      m = {
        anchor: {
          paddingStart: "xurb0ha",
          paddingEnd: "x1sxyh0",
          paddingTop: "x1x97wu9",
          paddingBottom: "xbr3nou",
          "@media (max-width: 564px)_paddingStart": "x3v4vwv",
          "@media (max-width: 564px)_paddingEnd": "x1dzdb2q",
          $$css: !0,
        },
        anchorInMobileEnvironment: {
          paddingTop: "xexx8yu",
          paddingBottom: "x18d9i69",
          $$css: !0,
        },
        backButton: {
          position: "x10l6tqk",
          start: "x16q8cke",
          top: "x1tk7jg1",
          zIndex: "x1vjfegm",
          $$css: !0,
        },
        card: {
          backgroundColor: "x1jx94hy",
          borderTopStartRadius: "x1qpq9i9",
          borderTopEndRadius: "xdney7k",
          borderBottomEndRadius: "xu5ydu1",
          borderBottomStartRadius: "xt3gfkd",
          boxShadow: "x104qc98",
          "@media (max-width: 564px)_borderTopStartRadius": "x1g2kw80",
          "@media (max-width: 564px)_borderTopEndRadius": "x16n5opg",
          "@media (max-width: 564px)_borderBottomEndRadius": "xl7ujzl",
          "@media (max-width: 564px)_borderBottomStartRadius": "xhkep3z",
          $$css: !0,
        },
        closeButton: {
          end: "x92rtbv",
          position: "x10l6tqk",
          top: "x1tk7jg1",
          zIndex: "x1vjfegm",
          $$css: !0,
        },
        header: { boxSizing: "x9f619", height: "xng8ra", $$css: !0 },
        headerBottomBorder: { borderBottom: "xua58t2", $$css: !0 },
        headerWithBackButton: { paddingStart: "xyxze6z", $$css: !0 },
        headerWithCloseButton: { paddingEnd: "x525zg8", $$css: !0 },
        headerWithPadding: {
          paddingEnd: "x525zg8",
          paddingStart: "xyxze6z",
          $$css: !0,
        },
        rootInMobileEnvironment: { justifyContent: "x1nhvcw1", $$css: !0 },
        titleWrapper: {
          alignItems: "x6s0dn4",
          boxSizing: "x9f619",
          display: "x78zum5",
          height: "x5yr21d",
          paddingEnd: "x1pi30zi",
          paddingStart: "x1swvt13",
          $$css: !0,
        },
      },
      n = {
        content: { maxWidth: "x193iq5w", $$css: !0 },
        "content-mobile-safe": { width: "xh8yej3", $$css: !0 },
        medium: { maxWidth: "xrgej4m", width: "xh8yej3", $$css: !0 },
        small: { maxWidth: "x1n7qst7", width: "xh8yej3", $$css: !0 },
      },
      o = {
        center: { justifyContent: "xl56j7k", $$css: !0 },
        start: { justifyContent: "x1nhvcw1", $$css: !0 },
      };
    function a(a, b) {
      var e,
        f,
        g,
        p = a.anchorXStyle,
        q = a.ariaLabel,
        r = a.rootXStyle,
        s = a.backButtonType,
        t = a.children,
        u = a.disableHeaderDivider;
      u = u === void 0 ? !1 : u;
      var v = a.closeButtonType,
        w = a.closeButtonTestId;
      w = w === void 0 ? "close_button" : w;
      w = a.header;
      var x = a.onBack;
      x = x === void 0 ? function () {} : x;
      var y = a.onClose;
      y = y === void 0 ? function () {} : y;
      var z = a.disableClosingWithMask;
      z = z === void 0 ? !1 : z;
      var A = a.labelledBy,
        B = a.size;
      B = B === void 0 ? "small" : B;
      var C = a.testid;
      C = a.title;
      var D = a.titleWithEntities,
        E = a.subtitle,
        F = a.titleHorizontalAlignment;
      F = F === void 0 ? "center" : F;
      var G = a.withBackButton;
      G = G === void 0 ? !1 : G;
      var H = a.withCloseButton;
      H = H === void 0 ? !1 : H;
      a = a.withDeprecatedStyles;
      a = a === void 0 ? !0 : a;
      var I = c("useIsCometOnMobile")();
      B = B === "content-mobile-safe" && !I ? "content" : B;
      e = (e = C) != null ? e : D;
      var J = c("useCometUniqueID")();
      f = C == null && ((f = w) != null ? f : D) != null ? J : void 0;
      D = d("Locale").isRTL();
      return j.jsxs(c("BaseDialog.react"), {
        anchorXStyle: [m.anchor, I && m.anchorInMobileEnvironment, p],
        "aria-label":
          A != null
            ? void 0
            : (p = (J = q) != null ? J : C) != null
            ? p
            : void 0,
        "aria-labelledby": (q = A) != null ? q : f,
        disableClosingWithMask: z,
        onClose: y,
        ref: b,
        rootXStyle: [I && m.rootInMobileEnvironment, r],
        testid: void 0,
        withDeprecatedStyles: a,
        xstyle: [m.card, n[B]],
        children: [
          w != null &&
            j.jsx("div", {
              className: c("stylex")(
                m.header,
                !u && m.headerBottomBorder,
                H && m.headerWithCloseButton,
                G && m.headerWithBackButton,
                (H || G) && F === "center" && m.headerWithPadding
              ),
              id: f,
              children: w,
            }),
          e != null &&
            w == null &&
            j.jsx("div", {
              className: c("stylex")(
                m.header,
                !u && m.headerBottomBorder,
                H && m.headerWithCloseButton,
                G && m.headerWithBackButton,
                (H || G) && F === "center" && m.headerWithPadding
              ),
              id: f,
              children: j.jsx("div", {
                className: c("stylex")(m.titleWrapper, o[F]),
                children:
                  E != null
                    ? j.jsx(c("TetraTextPairing.react"), {
                        body: E,
                        bodyLineLimit: 2,
                        headline: e,
                        headlineLineLimit: 1,
                        isSemanticHeading: !0,
                        level: I ? 3 : 2,
                        textAlign: "center",
                      })
                    : j.jsx(c("TetraText.react"), {
                        isSemanticHeading: !0,
                        numberOfLines: 1,
                        type: I ? "headlineEmphasized3" : "headlineEmphasized2",
                        children: e,
                      }),
              }),
            }),
          H
            ? j.jsx(c("CometTrackingNodeProvider.react"), {
                trackingNode: 141,
                children: j.jsx("div", {
                  className: "x92rtbv x10l6tqk x1tk7jg1 x1vjfegm",
                  "data-testid": void 0,
                  children: j.jsx(c("CometCircleButton.react"), {
                    color: "secondary",
                    icon: d("fbicon")._(i("478233"), 20),
                    label: h._("Fermer"),
                    onPress: y,
                    size: 36,
                    type: v,
                  }),
                }),
              })
            : null,
          G
            ? j.jsx("div", {
                className: "x10l6tqk x16q8cke x1tk7jg1 x1vjfegm",
                "data-testid": void 0,
                children: j.jsx(c("CometCircleButton.react"), {
                  color: "secondary",
                  icon: D ? l : k,
                  label: h._("Retour"),
                  onPress: x,
                  size: 36,
                  type: s,
                }),
              })
            : null,
          j.jsx(c("BaseHeadingContextWrapper.react"), { children: t }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = j.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "CometProgressRingUtils",
  ["ix"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    function a(a, b, c, d) {
      function e(a, b) {
        return 1 - 3 * b + 3 * a;
      }
      function f(a, b) {
        return 3 * b - 6 * a;
      }
      function g(a) {
        return 3 * a;
      }
      function h(a, b, c) {
        return ((e(b, c) * a + f(b, c)) * a + g(b)) * a;
      }
      function i(a, b, c) {
        return 3 * e(b, c) * a * a + 2 * f(b, c) * a + g(b);
      }
      function j(b) {
        var d = b;
        for (var e = 0; e < 4; ++e) {
          var f = i(d, a, c);
          if (f === 0) return d;
          var g = h(d, a, c) - b;
          d -= g / f;
        }
        return d;
      }
      return function (e) {
        return a === b && c === d ? e : h(j(e), b, d);
      };
    }
    function b(a, b, c) {
      switch (b) {
        case "12":
          switch (c) {
            case "dark":
              switch (a) {
                case "blue":
                  return h("1876411");
                case "disabled":
                  return h("1876443");
                case "dark":
                  return h("1876427");
                case "light":
                  return h("1876427");
                default:
                  return h("1876427");
              }
            case "light":
              switch (a) {
                case "blue":
                  return h("1876419");
                case "disabled":
                  return h("1876451");
                case "dark":
                  return h("1876435");
                case "light":
                  return h("1876427");
                default:
                  return h("1876435");
              }
            default:
              return h("1876435");
          }
        case "16":
          switch (c) {
            case "dark":
              switch (a) {
                case "blue":
                  return h("1876412");
                case "disabled":
                  return h("1876444");
                case "dark":
                  return h("1876428");
                case "light":
                  return h("1876428");
                default:
                  return h("1876428");
              }
            case "light":
              switch (a) {
                case "blue":
                  return h("1876420");
                case "disabled":
                  return h("1876452");
                case "dark":
                  return h("1876436");
                case "light":
                  return h("1876428");
                default:
                  return h("1876436");
              }
            default:
              return h("1876436");
          }
        case "20":
          switch (c) {
            case "dark":
              switch (a) {
                case "blue":
                  return h("1876413");
                case "disabled":
                  return h("1876445");
                case "dark":
                  return h("1876429");
                case "light":
                  return h("1876429");
                default:
                  return h("1876429");
              }
            case "light":
              switch (a) {
                case "blue":
                  return h("1876421");
                case "disabled":
                  return h("1876453");
                case "dark":
                  return h("1876437");
                case "light":
                  return h("1876429");
                default:
                  return h("1876437");
              }
            default:
              return h("1876437");
          }
        case "24":
          switch (c) {
            case "dark":
              switch (a) {
                case "blue":
                  return h("1876414");
                case "disabled":
                  return h("1876446");
                case "dark":
                  return h("1876430");
                case "light":
                  return h("1876430");
                default:
                  return h("1876430");
              }
            case "light":
              switch (a) {
                case "blue":
                  return h("1876422");
                case "disabled":
                  return h("1876454");
                case "dark":
                  return h("1876438");
                case "light":
                  return h("1876430");
                default:
                  return h("1876438");
              }
            default:
              return h("1876438");
          }
        case "32":
          switch (c) {
            case "dark":
              switch (a) {
                case "blue":
                  return h("1876415");
                case "disabled":
                  return h("1876447");
                case "dark":
                  return h("1876431");
                case "light":
                  return h("1876431");
                default:
                  return h("1876431");
              }
            case "light":
              switch (a) {
                case "blue":
                  return h("1876423");
                case "disabled":
                  return h("1876455");
                case "dark":
                  return h("1876439");
                case "light":
                  return h("1876431");
                default:
                  return h("1876439");
              }
            default:
              return h("1876439");
          }
        case "48":
          switch (c) {
            case "dark":
              switch (a) {
                case "blue":
                  return h("1876416");
                case "disabled":
                  return h("1876448");
                case "dark":
                  return h("1876432");
                case "light":
                  return h("1876432");
                default:
                  return h("1876432");
              }
            case "light":
              switch (a) {
                case "blue":
                  return h("1876424");
                case "disabled":
                  return h("1876456");
                case "dark":
                  return h("1876440");
                case "light":
                  return h("1876432");
                default:
                  return h("1876440");
              }
            default:
              return h("1876440");
          }
        case "60":
          switch (c) {
            case "dark":
              switch (a) {
                case "blue":
                  return h("1940508");
                case "disabled":
                  return h("1940512");
                case "dark":
                  return h("1940510");
                case "light":
                  return h("1940510");
                default:
                  return h("1940510");
              }
            case "light":
              switch (a) {
                case "blue":
                  return h("1940509");
                case "disabled":
                  return h("1940513");
                case "dark":
                  return h("1940511");
                case "light":
                  return h("1940510");
                default:
                  return h("1940511");
              }
            default:
              return h("1940511");
          }
        case "72":
          switch (c) {
            case "dark":
              switch (a) {
                case "blue":
                  return h("1876418");
                case "disabled":
                  return h("1876450");
                case "dark":
                  return h("1876434");
                case "light":
                  return h("1876434");
                default:
                  return h("1876434");
              }
            case "light":
              switch (a) {
                case "blue":
                  return h("1876426");
                case "disabled":
                  return h("1876458");
                case "dark":
                  return h("1876442");
                case "light":
                  return h("1876434");
                default:
                  return h("1876442");
              }
            default:
              return h("1876442");
          }
        default:
          return h("1876439");
      }
    }
    function c(a) {
      switch (a) {
        case "dark":
          return {
            backgroundColor: "var(--progress-ring-neutral-background)",
            foregroundColor: "var(--progress-ring-neutral-foreground)",
          };
        case "light":
          return {
            backgroundColor: "var(--progress-ring-on-media-background)",
            foregroundColor: "var(--progress-ring-on-media-foreground)",
          };
        case "blue":
          return {
            backgroundColor: "var(--progress-ring-blue-background)",
            foregroundColor: "var(--progress-ring-blue-foreground)",
          };
        case "disabled":
          return {
            backgroundColor: "var(--progress-ring-disabled-background)",
            foregroundColor: "var(--progress-ring-disabled-foreground)",
          };
        default:
          return {
            backgroundColor: "var(--progress-ring-neutral-background)",
            foregroundColor: "var(--progress-ring-neutral-foreground)",
          };
      }
    }
    g.getCubicBezierPercentageFunc = a;
    g.getRingGifUrl = b;
    g.getRingColor = c;
  },
  98
);
__d(
  "CometProgressRingIndeterminate.react",
  [
    "BaseLoadingStateElement.react",
    "CometImageFromIXValue.react",
    "CometProgressRingUtils",
    "react",
    "stylex",
    "useCurrentDisplayMode",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        animationFillModeAndTimingFn: {
          animationFillMode: "x1u6ievf",
          animationTimingFunction: "x1wnkzza",
          $$css: !0,
        },
        foregroundCircle: {
          animationDuration: "x1c74tu6",
          animationFillMode: "x1u6ievf",
          animationIterationCount: "xa4qsjk",
          animationTimingFunction: "xuxiujg",
          transformOrigin: "x1bndym7",
          $$css: !0,
        },
        foregroundCircle12: { animationName: "x1iqdq0d", $$css: !0 },
        foregroundCircle16: { animationName: "x1koaglw", $$css: !0 },
        foregroundCircle20: { animationName: "x16tkgvi", $$css: !0 },
        foregroundCircle24: { animationName: "xiepp7r", $$css: !0 },
        foregroundCircle32: { animationName: "x1pb3rhs", $$css: !0 },
        foregroundCircle48: { animationName: "x1w90wak", $$css: !0 },
        foregroundCircle60: { animationName: "x1jrcm85", $$css: !0 },
        foregroundCircle72: { animationName: "xnw30k", $$css: !0 },
        root: { display: "x78zum5", $$css: !0 },
        rotationCircle: {
          animationDuration: "x1c74tu6",
          animationIterationCount: "xa4qsjk",
          animationName: "x1kfoseq",
          animationTimingFunction: "x193epu2",
          transformOrigin: "x1bndym7",
          $$css: !0,
        },
      },
      j = 2,
      k = "always-enable-animations";
    function a(a) {
      var b = a.color,
        e = a.size,
        f = d("CometProgressRingUtils").getRingColor(b);
      f = f.foregroundColor;
      var g = (e - j) * Math.PI,
        l = c("useCurrentDisplayMode")();
      l = l === "dark";
      l = d("CometProgressRingUtils").getRingGifUrl(
        b,
        e.toString(),
        l ? "dark" : "light"
      );
      return h.jsx(c("BaseLoadingStateElement.react"), {
        xstyle: [i.root, a.xstyle],
        children:
          b === "dark"
            ? h.jsx("svg", {
                className: [
                  k,
                  "x1c74tu6 xa4qsjk x1kfoseq x1bndym7 x1u6ievf x1wnkzza",
                ].join(" "),
                height: e,
                viewBox: "0 0 " + e + " " + e,
                width: e,
                children: h.jsx("circle", {
                  className: [
                    k,
                    c("stylex")([
                      i.foregroundCircle,
                      e === 12 && i.foregroundCircle12,
                      e === 16 && i.foregroundCircle16,
                      e === 20 && i.foregroundCircle20,
                      e === 24 && i.foregroundCircle24,
                      e === 32 && i.foregroundCircle32,
                      e === 48 && i.foregroundCircle48,
                      e === 60 && i.foregroundCircle60,
                      e === 72 && i.foregroundCircle72,
                    ]),
                  ].join(" "),
                  cx: e / 2,
                  cy: e / 2,
                  fill: "none",
                  r: (e - j) / 2,
                  stroke: f,
                  strokeDasharray: g,
                  strokeWidth: j,
                }),
              })
            : h.jsx("div", {
                style: { height: e, width: e },
                children: h.jsx(c("CometImageFromIXValue.react"), {
                  source: l,
                  testid: void 0,
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
  "CometTooltipDeferredImpl.react",
  [
    "BaseTooltipImpl.react",
    "CometProgressRingIndeterminate.react",
    "TetraTextPairing.react",
    "react",
    "useCometTheme",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.headline,
        d = a.tooltip,
        e = a.tooltipTheme;
      e = e === void 0 ? "invert" : e;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "headline",
        "tooltip",
        "tooltipTheme",
      ]);
      e = c("useCometTheme")(e);
      var f = e[0];
      e = e[1];
      var g = h.jsx(c("CometProgressRingIndeterminate.react"), {
        color: "dark",
        size: 20,
      });
      d =
        d != null
          ? h.jsx(c("TetraTextPairing.react"), {
              body: d,
              bodyColor: "primary",
              headline: b,
              headlineColor: "primary",
              level: 4,
            })
          : null;
      return h.jsx(f, {
        children: h.jsx(
          c("BaseTooltipImpl.react"),
          babelHelpers["extends"]({}, a, {
            loadingState: g,
            tooltip: d,
            xstyle: e,
          })
        ),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "usePrevious",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useEffect,
      i = b.useRef;
    function a(a) {
      var b = i(null);
      h(function () {
        b.current = a;
      });
      return b.current;
    }
    g["default"] = a;
  },
  98
);
__d(
  "useSubscriptionValue",
  ["React"],
  function (a, b, c, d, e, f, g) {
    b = d("React");
    var h = b.useCallback,
      i = b.useEffect,
      j = b.useState;
    function a(a) {
      var b = a.getCurrentValue,
        c = a.subscribe;
      a = j(function () {
        return b();
      });
      var d = a[0],
        e = a[1],
        f = h(
          function () {
            e(b);
          },
          [b]
        );
      a = j(function () {
        return b;
      });
      var g = a[0];
      a = a[1];
      g !== b &&
        (a(function () {
          return b;
        }),
        f());
      i(
        function () {
          var a = !1,
            b = function () {
              a || f();
            },
            d = c(b);
          f();
          return function () {
            (a = !0), d();
          };
        },
        [f, c]
      );
      return d;
    }
    g["default"] = a;
  },
  98
);
__d(
  "useWindowSize",
  ["ExecutionEnvironment", "react", "throttle", "useSubscriptionValue"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;
    function i() {
      return !c("ExecutionEnvironment").canUseDOM
        ? { innerHeight: 0, innerWidth: 0, outerHeight: 0, outerWidth: 0 }
        : {
            innerHeight: window.innerHeight,
            innerWidth: window.innerWidth,
            outerHeight: window.outerHeight,
            outerWidth: window.outerWidth,
          };
    }
    function a(a) {
      a === void 0 && (a = 500);
      var b = h(
        function (b) {
          var d = c("throttle")(b, a);
          window.addEventListener("resize", d);
          return function () {
            window.removeEventListener("resize", d);
          };
        },
        [a]
      );
      return c("useSubscriptionValue")({ getCurrentValue: i, subscribe: b });
    }
    g["default"] = a;
  },
  98
);
__d(
  "BaseTextInput.react",
  ["BaseFocusRing.react", "BaseInput.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = { root: { ":disabled_color": "x1kdt53j", $$css: !0 } };
    function a(a, b) {
      var d = a.suppressFocusRing,
        e = a.xstyle,
        f = babelHelpers.objectWithoutPropertiesLoose(a, [
          "suppressFocusRing",
          "xstyle",
        ]);
      return h.jsx(c("BaseFocusRing.react"), {
        suppressFocusRing: d,
        children: function (a) {
          return h.jsx(
            c("BaseInput.react"),
            babelHelpers["extends"]({}, f, { ref: b, xstyle: [i.root, a, e] })
          );
        },
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.memo(h.forwardRef(a));
    g["default"] = b;
  },
  98
);
__d(
  "processBaseInputValidators",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function g(a, b) {
      if (typeof b === "function") return [b(a)];
      var c = [];
      for (
        var b = b,
          d = Array.isArray(b),
          e = 0,
          b = d
            ? b
            : b[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        var f;
        if (d) {
          if (e >= b.length) break;
          f = b[e++];
        } else {
          e = b.next();
          if (e.done) break;
          f = e.value;
        }
        f = f;
        Array.isArray(f)
          ? c.push.apply(c, g(a, f))
          : typeof f === "function" && c.push(f(a));
      }
      return c.filter(function (a) {
        return a.type !== "CORRECT";
      });
    }
    f["default"] = g;
  },
  66
);
__d(
  "useIsPristineValue",
  ["react", "useStable"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useState;
    function a(a, b) {
      b = h(b);
      var d = b[0];
      b = b[1];
      var e = c("useStable")(function () {
        return a;
      });
      d && a !== e && b(!1);
      return d;
    }
    g["default"] = a;
  },
  98
);
__d(
  "validateBaseInput",
  ["processBaseInputValidators"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, d) {
      a = d != null && !a ? c("processBaseInputValidators")(b, d) : [];
      if (a.length === 0)
        return {
          allResults: a,
          topResultReason: null,
          topResultType: "CORRECT",
        };
      var e = a.some(function (a) {
        return a.type === "ERROR";
      });
      d =
        (b = a.find(function (a) {
          return a.type === (e ? "ERROR" : "WARN");
        })) != null
          ? b
          : null;
      return {
        allResults: a,
        topResultReason: d != null && d.reason != null ? d.reason : null,
        topResultType: d != null ? d.type : "CORRECT",
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "useBaseInputValidators",
  ["react", "useIsPristineValue", "validateBaseInput"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useMemo;
    function a(a) {
      var b = a.isInitialValuePristine;
      b = b === void 0 ? !0 : b;
      var d = a.validator,
        e = a.value,
        f = c("useIsPristineValue")(e, b);
      return h(
        function () {
          return c("validateBaseInput")(f, e, d);
        },
        [f, d, e]
      );
    }
    g["default"] = a;
  },
  98
);
