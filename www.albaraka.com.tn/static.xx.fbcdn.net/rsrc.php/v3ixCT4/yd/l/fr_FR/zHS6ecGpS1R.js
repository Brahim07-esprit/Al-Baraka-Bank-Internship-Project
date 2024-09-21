/*FB_PKG_DELIM*/

__d(
  "CometImageFromIXValueRelayWrapper_sprite.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometImageFromIXValueRelayWrapper_sprite",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "sprited",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "sprite_map_css_class",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "sprite_css_class",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "preloading_spi",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "w",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "h",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "p",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "sz",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "spi",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "uri",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "width",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "height",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "logging_id",
          storageKey: null,
        },
      ],
      type: "XFBIXMapEntry",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "GlobalPanelEnabled.relayprovider",
  ["qex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      get: function () {
        return Boolean(c("qex")._("19"));
      },
    };
    g["default"] = a;
  },
  98
);
__d(
  "GroupsCometGroupChatLazyLoadLastMessageSnippet.relayprovider",
  ["qex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      get: function () {
        return Boolean(c("qex")._("717"));
      },
    };
    g["default"] = a;
  },
  98
);
__d(
  "CometHovercardQueryRendererQuery$Parameters",
  [
    "GlobalPanelEnabled.relayprovider",
    "GroupsCometGroupChatLazyLoadLastMessageSnippet.relayprovider",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: "9727516133957012",
        metadata: {},
        name: "CometHovercardQueryRendererQuery",
        operationKind: "query",
        text: null,
        providedVariables: {
          __relay_internal__pv__GlobalPanelEnabledrelayprovider: b(
            "GlobalPanelEnabled.relayprovider"
          ),
          __relay_internal__pv__GroupsCometGroupChatLazyLoadLastMessageSnippetrelayprovider:
            b("GroupsCometGroupChatLazyLoadLastMessageSnippet.relayprovider"),
        },
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "HovercardInteractionPreference",
  ["$InternalEnum"],
  function (a, b, c, d, e, f) {
    a = b("$InternalEnum")({
      DISABLED: 1,
      ENABLED_ON_HOVER: 2,
      ENABLED_ON_CLICK: 3,
    });
    c = a;
    f["default"] = c;
  },
  66
);
__d(
  "CometHovercardSettingsContext",
  ["emptyFunction", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({
      hovercardInteractionPreference: 2,
      setHovercardInteractionPreference: c("emptyFunction"),
    });
    g["default"] = b;
  },
  98
);
__d(
  "CometRootInitServerFlag",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = !1;
    function a() {
      g = !0;
    }
    function b() {
      return g;
    }
    f.enableServerEnvironment = a;
    f.isServerEnvironment = b;
  },
  66
);
__d(
  "OutsideExceptionKeyCommandListener.react",
  [
    "BaseKeyCommandListener.react",
    "CometLayerKeyCommandWrapper.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsx(c("BaseKeyCommandListener.react"), {
        observersEnabled: !1,
        children: h.jsx(c("CometLayerKeyCommandWrapper.react"), {
          debugName: "outside exception layer",
          children: a.children,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useLayerKeyCommands",
  ["CometLayerKeyCommandWidget"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("CometLayerKeyCommandWidget").useKeyCommands;
  },
  98
);
__d(
  "goForceFullPageRedirectTo",
  ["ConstUriUtils", "FBLogger", "err"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      var e =
        typeof a === "string"
          ? d("ConstUriUtils").getUri(a)
          : d("ConstUriUtils").isConstUri(a);
      if (e)
        b === !0
          ? window.location.replace(e.toString())
          : (window.location = e.toString());
      else {
        b = "Invalid URI " + a.toString() + " provided to goFullPageRedirectTo";
        c("FBLogger")("comet_infra").blameToPreviousFrame().mustfix(b);
      }
    }
    g["default"] = a;
  },
  98
);
__d(
  "handleCheckpointRedirect",
  ["ConstUriUtils", "goForceFullPageRedirectTo"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      a =
        (a = d("ConstUriUtils").getUri(a)) == null
          ? void 0
          : a.addQueryParam("next", location.toString());
      c("goForceFullPageRedirectTo")((a = a) != null ? a : "/");
    }
    g["default"] = a;
  },
  98
);
__d(
  "getItemRoleFromCompositeRole",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      switch (a) {
        case "grid":
          return "row";
        case "listbox":
          return "option";
        case "list":
          return "listitem";
        case "radiogroup":
          return "radio";
        case "row":
          return "gridcell";
        case "tablist":
          return "tab";
      }
      return null;
    }
    f["default"] = a;
  },
  66
);
__d(
  "CometFocusGroupContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({ FocusContainer: null, FocusItem: null });
    g["default"] = b;
  },
  98
);
__d(
  "BaseDivider.react",
  ["react", "stylex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        divider: {
          backgroundColor: "x14nfmen",
          boxSizing: "x9f619",
          height: "xjm9jq1",
          $$css: !0,
        },
        reset: {
          backgroundColor: "xjbqb8w",
          borderTopWidth: "x972fbf",
          borderEndWidth: "xcfux6l",
          borderBottomWidth: "x1qhh985",
          borderStartWidth: "xm0m39n",
          marginTop: "xdj266r",
          marginEnd: "x11i5rnm",
          marginBottom: "xat24cr",
          marginStart: "x1mh8g0r",
          $$css: !0,
        },
      };
    function a(a) {
      return h.jsx("hr", {
        "aria-hidden": a.ariaHidden,
        className: c("stylex")(i.reset, i.divider, a.xstyle),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "BaseSuppressHovercards",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useContext,
      j = h.createContext(!1);
    function a(a) {
      a = a.children;
      return h.jsx(j.Provider, { value: !0, children: a });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function b() {
      return i(j);
    }
    g.BaseSuppressHovercardsContext = j;
    g.BaseSuppressHovercardsProvider = a;
    g.useIsHovercardSuppressed = b;
  },
  98
);
__d(
  "BaseSvgImage.react",
  ["react", "useFeedImageErrorEventLoggerCbs"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useEffect,
      j = b.useRef;
    function a(a) {
      var b = a.onError,
        d = a.src,
        e = a.testid;
      e = babelHelpers.objectWithoutPropertiesLoose(a, [
        "onError",
        "src",
        "testid",
      ]);
      a = c("useFeedImageErrorEventLoggerCbs")({ onError: b, src: d });
      b = a._onError;
      a = a._onLoad;
      var f = j(null),
        g = j(d);
      i(
        function () {
          f.current &&
            f.current.getAttribute("xlink:href") !== g.current &&
            f.current.setAttribute("xlink:href", g.current);
        },
        [f, g]
      );
      return h.jsx(
        "image",
        babelHelpers["extends"]({}, e, {
          "data-testid": void 0,
          height: "100%",
          onError: b,
          onLoad: a,
          preserveAspectRatio: "xMidYMid slice",
          ref: f,
          width: "100%",
          xlinkHref: d,
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "BaseInlinePressable.react",
  ["CometPressable.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        defaultCursor: { cursor: "xt0e3qv", $$css: !0 },
        disabled: { textDecoration: "x1hl2dhg", $$css: !0 },
        disabledColor: { color: "x1dntmbh", $$css: !0 },
        disabledLink: { opacity: "xbyyjgo", $$css: !0 },
        expanding: { display: "x3nfvp2", $$css: !0 },
        link: { ":hover_textDecoration": "xt0b8zv", $$css: !0 },
        linkColor: { color: "x1fey0fg", $$css: !0 },
        root: {
          display: "xt0psk2",
          position: "x1n2onr6",
          userSelect: "x87ps6o",
          $$css: !0,
        },
      };
    function a(a, b) {
      var d = a.ariaLabel,
        e = a.children,
        f = a.color;
      f = f === void 0 ? "blue" : f;
      var g = a.cursorDisabled,
        j = a.expanding;
      j = j === void 0 ? !1 : j;
      var k = a.linkProps,
        l = a.onPress,
        m = a.xstyle;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "ariaLabel",
        "children",
        "color",
        "cursorDisabled",
        "expanding",
        "linkProps",
        "onPress",
        "xstyle",
      ]);
      var n = [i.root, g === !0 && i.defaultCursor, j && i.expanding, m],
        o = f !== "inherit" && (k != null || l != null);
      return h.jsx(
        c("CometPressable.react"),
        babelHelpers["extends"](
          { "aria-label": d, linkProps: k, onPress: l, overlayDisabled: !0 },
          a,
          {
            ref: b,
            xstyle: function (a) {
              var b = a.disabled;
              a = a.hovered;
              return [
                n,
                o && i.linkColor,
                a && !b && i.link,
                b && i.disabled,
                b && !o && i.disabledColor,
                b && o && i.disabledLink,
              ];
            },
            children: e,
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
  "BaseMultiPageViewContext",
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
  "FocusInertRegion.react",
  ["react", "setElementCanTab"],
  function (a, b, c, d, e, f, g) {
    var h = d("react");
    b = d("react");
    var i = b.useLayoutEffect,
      j = b.useRef,
      k = h.unstable_Scope;
    function a(a) {
      var b = a.children,
        c = a.disabled,
        e = c === void 0 ? !1 : c,
        f = a.focusQuery,
        g = j(null);
      i(
        function () {
          var a = g.current;
          if (f && a != null) {
            a = a.DO_NOT_USE_queryAllNodes(f);
            if (a !== null)
              for (var b = 0; b < a.length; b++) {
                var c = a[b];
                d("setElementCanTab").setElementCanTab(c, e);
              }
          }
        },
        [e, f]
      );
      return h.jsx(k, { ref: g, children: b });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "getPrefersReducedMotion",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = null;
    function h(a) {
      g = a.matches;
    }
    function a() {
      if (g == null)
        if (typeof window.matchMedia === "function") {
          var a = matchMedia("(prefers-reduced-motion: reduce)");
          g = a.matches;
          a.addListener(h);
        } else g = !1;
      return g;
    }
    f["default"] = a;
  },
  66
);
__d(
  "BaseMultiPageViewContainer.react",
  [
    "BaseMultiPageViewContext",
    "FocusInertRegion.react",
    "FocusRegion.react",
    "HiddenSubtreeContextProvider.react",
    "Locale",
    "emptyFunction",
    "focusScopeQueries",
    "getPrefersReducedMotion",
    "gkx",
    "mergeRefs",
    "react",
    "stylex",
    "testID",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
      j = b.useEffect,
      k = b.useImperativeHandle,
      l = b.useMemo,
      m = b.useRef,
      n = {
        page: {
          borderTopStartRadius: "x1o1ewxj",
          borderTopEndRadius: "x3x9cwd",
          borderBottomEndRadius: "x1e5q0jg",
          borderBottomStartRadius: "x13rtm0m",
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          flexGrow: "x1iyjqo2",
          transformOrigin: "x1al4vs7",
          $$css: !0,
        },
        pageInactive: {
          display: "x1s85apg",
          left: "xu96u03",
          pointerEvents: "x47corl",
          position: "x10l6tqk",
          top: "x13vifvy",
          zIndex: "x1vjfegm",
          $$css: !0,
        },
        root: {
          alignItems: "x1qjc9v5",
          clipPath: "x3vj7og",
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          position: "x1n2onr6",
          transformOrigin: "x1al4vs7",
          $$css: !0,
        },
      },
      o = d("Locale").isRTL(),
      p = 300,
      q = c("getPrefersReducedMotion")() || !c("gkx")("1485");
    function r(a) {
      return Math.cos((a + 1) * Math.PI) / 2 + 0.5;
    }
    function a(a, b) {
      var e = a.children,
        f = a.disableAutoFocus,
        g = f === void 0 ? !1 : f;
      f = a.disableAutoRestoreFocus;
      var s = f === void 0 ? !1 : f;
      f = a.disableFocusContainment;
      var t = f === void 0 ? !1 : f;
      f = a.disableInitialAutoFocus;
      f = f === void 0 ? !1 : f;
      var u = a.fallback,
        v = a.imperativeRef,
        w = a.onPageChange,
        x = w === void 0 ? c("emptyFunction") : w,
        y = a.onAddPage,
        z = a.onPopPage,
        A = a.onClearRemovedPages,
        B = a.pageXStyle,
        C = a.pageHistory,
        D = a.placeholderComponent;
      w = a.xstyle;
      var E = m(null),
        F = m(null),
        G = m(null),
        H = m(!1),
        I = f && !H.current,
        J = i(function () {
          var a = E.current,
            b = F.current;
          b != null
            ? (G.current = b.getBoundingClientRect())
            : a != null && (G.current = a.getBoundingClientRect());
        }, []),
        K = i(
          function (a, b, c) {
            J(), (H.current = !0), y(a, b, c);
          },
          [y, J]
        ),
        L = i(
          function (a) {
            J(), z(a);
          },
          [z, J]
        ),
        M = i(
          function (a, b) {
            return K("end", a, b);
          },
          [K]
        ),
        N = l(
          function () {
            for (var a = C.length - 1; a >= 0; a--) {
              var b = C[a];
              if (b.type !== "pushed_page" || !b.removed) return a;
            }
            return 0;
          },
          [C]
        ),
        O = m(N);
      j(
        function () {
          N !== O.current && x && x(N), (O.current = N);
        },
        [x, N]
      );
      var P = i(
        function (a) {
          var b = F.current,
            c = E.current;
          if (a != null) {
            var d = C[N];
            d = d.type === "pushed_page" ? d.direction : "end";
            O.current > N && (d = d === "start" ? "end" : "start");
            var e = G.current,
              f = a.getBoundingClientRect();
            if (!q && b != null && b !== a && e != null && c != null) {
              d = (d === "start" ? -1 : 1) * (o ? -1 : 1);
              b.style.cssText = "";
              a.style.cssText = "";
              b.style.setProperty("display", "flex");
              b.style.setProperty("width", e.width + "px");
              b.style.setProperty("height", e.height + "px");
              a.style.removeProperty("display");
              a.style.removeProperty("width");
              a.style.removeProperty("height");
              var g = Math.round(60 * (p / 1e3)),
                h = [],
                i = [],
                j = [];
              for (var k = 0; k <= g; k++) {
                var l = k / g,
                  m = r(l),
                  n = e.width / f.width,
                  s = e.height / f.height;
                n = n + (1 - n) * m;
                s = s + (1 - s) * m;
                var t = e.left - f.left,
                  u = e.top - f.top;
                t = t * (1 - m);
                var v = u * (1 - m),
                  w = Math.min(e.width, f.width),
                  x = w * -d * m;
                w = w * d * (1 - m);
                m = u - v;
                u = -v;
                h.push({
                  easing: "step-end",
                  offset: l,
                  transform:
                    "translateX(" +
                    t +
                    "px) translateY(" +
                    v +
                    "px) scaleX(" +
                    n +
                    ") scaleY(" +
                    s +
                    ")",
                });
                i.push({
                  easing: "step-end",
                  offset: l,
                  transform:
                    "scaleX(" +
                    1 / n +
                    ") scaleY(" +
                    1 / s +
                    ") translateX(" +
                    x +
                    "px) translateY(" +
                    m +
                    "px)",
                });
                j.push({
                  easing: "step-end",
                  offset: l,
                  transform:
                    "scaleX(" +
                    1 / n +
                    ") scaleY(" +
                    1 / s +
                    ") translateX(" +
                    w +
                    "px) translateY(" +
                    u +
                    "px)",
                });
              }
              a.animate(j, p);
              c.animate(h, p);
              b.animate(i, p);
              a.animate([{ opacity: 0 }, { opacity: 1 }], p);
              b.animate([{ opacity: 1 }, { opacity: 0 }], p).onfinish =
                function () {
                  (b.style.cssText = ""), A && A();
                };
            }
            F.current = a;
          }
        },
        [N, A, C]
      );
      k(
        v,
        function () {
          return { addPage: K, popPage: L };
        },
        [L, K]
      );
      var Q = l(
        function () {
          return {
            fallback: u,
            placeholderComponent: D,
            popPage: L,
            pushPage: M,
          };
        },
        [u, D, L, M]
      );
      a = l(
        function () {
          return c("mergeRefs")(E, b);
        },
        [b]
      );
      return h.jsx(
        "div",
        babelHelpers["extends"](
          { className: c("stylex")(n.root, w), ref: a },
          c("testID")("BaseMultiStepContainer"),
          {
            children: C.map(function (a, b) {
              return h.jsx(
                "div",
                babelHelpers["extends"](
                  {
                    "aria-hidden": b !== N,
                    className: c("stylex")(
                      n.page,
                      b !== N && n.pageInactive,
                      B
                    ),
                    ref: b === N ? P : null,
                  },
                  c("testID")(
                    b === 0 ? "base-multistep-container-first-step" : null
                  ),
                  {
                    children: h.jsx(d("FocusRegion.react").FocusRegion, {
                      autoFocusQuery:
                        !g && !I && b === N
                          ? d("focusScopeQueries").headerOrTabbableScopeQuery
                          : null,
                      autoRestoreFocus: !s,
                      containFocusQuery: t
                        ? null
                        : d("focusScopeQueries").tabbableScopeQuery,
                      recoverFocusQuery:
                        d("focusScopeQueries").headerOrTabbableScopeQuery,
                      children: h.jsx(c("FocusInertRegion.react"), {
                        disabled: b === N,
                        children: h.jsx(
                          c("HiddenSubtreeContextProvider.react"),
                          {
                            isHidden: b !== N,
                            children: h.jsx(
                              c("BaseMultiPageViewContext").Provider,
                              {
                                value: Q,
                                children:
                                  a.type === "initial_page"
                                    ? typeof e === "function"
                                      ? e(M)
                                      : e
                                    : a.type === "pushed_page"
                                    ? h.createElement(a.component, {
                                        onReturn: L,
                                      })
                                    : null,
                              }
                            ),
                          }
                        ),
                      }),
                    }),
                  }
                ),
                a.key
              );
            }),
          }
        )
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = h.forwardRef(a);
    g["default"] = e;
  },
  98
);
__d(
  "BasePopover.react",
  ["react", "stylex", "testID"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = { root: { position: "x1n2onr6", $$css: !0 } };
    function a(a, b) {
      var d = a.arrowAlignment;
      d = d === void 0 ? "center" : d;
      var e = a.arrowImpl,
        f = a.id,
        g = a.label,
        j = a.labelledby,
        k = a.role;
      k = k === void 0 ? "dialog" : k;
      var l = a.testid,
        m = a.xstyle;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "arrowAlignment",
        "arrowImpl",
        "id",
        "label",
        "labelledby",
        "role",
        "testid",
        "xstyle",
      ]);
      return e
        ? h.jsx(
            e,
            babelHelpers["extends"](
              {
                arrowAlignment: d,
                id: f,
                label: g,
                labelledby: j,
                ref: b,
                role: k,
                testid: void 0,
                xstyle: m,
              },
              a
            )
          )
        : h.jsx(
            "div",
            babelHelpers["extends"](
              {
                "aria-label": g,
                "aria-labelledby": j,
                className: c("stylex")(i.root, m),
                id: f,
                ref: b,
                role: k,
              },
              c("testID")(l),
              a
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
  "BasePopoverDownEdgeArrow.svg.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsxs(
        "svg",
        babelHelpers["extends"](
          { height: 12, viewBox: "0 0 21 12", width: 21 },
          a,
          {
            children: [
              a.title != null && h.jsx("title", { children: a.title }),
              a.children != null && h.jsx("defs", { children: a.children }),
              h.jsx("path", {
                d: "M20.685.12c-2.229.424-4.278 1.914-6.181 3.403L5.4 10.94c-2.026 2.291-5.434.62-5.4-2.648V.12h20.684z",
              }),
            ],
          }
        )
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    a._isSVG = !0;
    g["default"] = a;
  },
  98
);
__d(
  "BasePopoverDownInsetArrow.svg.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsxs(
        "svg",
        babelHelpers["extends"](
          { height: 12, viewBox: "0 0 25 12", width: 25 },
          a,
          {
            children: [
              a.title != null && h.jsx("title", { children: a.title }),
              a.children != null && h.jsx("defs", { children: a.children }),
              h.jsx("path", {
                d: "M24.553.103c-2.791.32-5.922 1.53-7.78 3.455l-9.62 7.023c-2.45 2.54-5.78 1.645-5.78-2.487V2.085C1.373 1.191.846.422.1.102h24.453z",
              }),
            ],
          }
        )
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    a._isSVG = !0;
    g["default"] = a;
  },
  98
);
__d(
  "BasePopoverRightEdgeArrow.svg.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsxs(
        "svg",
        babelHelpers["extends"](
          { height: 21, viewBox: "0 0 12 21", width: 12 },
          a,
          {
            children: [
              a.title != null && h.jsx("title", { children: a.title }),
              a.children != null && h.jsx("defs", { children: a.children }),
              h.jsx("path", {
                d: "M20.685.12c-2.229.424-4.278 1.914-6.181 3.403L5.4 10.94c-2.026 2.291-5.434.62-5.4-2.648V.12Z",
                transform: "rotate(-90 10.498 10.488)",
              }),
            ],
          }
        )
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    a._isSVG = !0;
    g["default"] = a;
  },
  98
);
__d(
  "BasePopoverRightInsetArrow.svg.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsxs(
        "svg",
        babelHelpers["extends"](
          { height: 25, viewBox: "0 0 12 25", width: 12 },
          a,
          {
            children: [
              a.title != null && h.jsx("title", { children: a.title }),
              a.children != null && h.jsx("defs", { children: a.children }),
              h.jsx("path", {
                d: "M24.553.103c-2.791.32-5.922 1.53-7.78 3.455l-9.62 7.023c-2.45 2.54-5.78 1.645-5.78-2.487V2.085C1.373 1.19.846.422.1.102z",
                transform: "rotate(-90 12.5 12.48)",
              }),
            ],
          }
        )
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    a._isSVG = !0;
    g["default"] = a;
  },
  98
);
__d(
  "BasePopoverSVGArrowContainer.react",
  [
    "BaseContextualLayerContextSizeContext",
    "BaseContextualLayerLayerAdjustmentContext",
    "BaseContextualLayerOrientationContext",
    "BasePopoverDownEdgeArrow.svg.react",
    "BasePopoverDownInsetArrow.svg.react",
    "BasePopoverRightEdgeArrow.svg.react",
    "BasePopoverRightInsetArrow.svg.react",
    "Locale",
    "react",
    "stylex",
    "testID",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useContext,
      j = b.useMemo,
      k = 3,
      l = c("Locale").isRTL(),
      m = 25,
      n = {
        arrow: { position: "x10l6tqk", $$css: !0 },
        container: { position: "x1n2onr6", $$css: !0 },
      },
      o = {
        above: { marginBottom: "x1fqp7bg", $$css: !0 },
        below: { marginTop: "xcxhlts", $$css: !0 },
        end: { marginStart: "x13ibhcj", $$css: !0 },
        start: { marginEnd: "x1jqylkn", $$css: !0 },
      },
      p = {
        above: { top: "x11k2h6o", $$css: !0 },
        below: { bottom: "xng853d", $$css: !0 },
        end: { end: "x1gozi89", $$css: !0 },
        start: { start: "x1ke83zm", $$css: !0 },
      },
      q = {
        end: { end: "xds687c", $$css: !0 },
        middle: { start: "xu8u0ou", $$css: !0 },
        start: { start: "x17qophe", $$css: !0 },
        stretch: { $$css: !0 },
      },
      r = {
        end: { bottom: "x1ey2m1c", $$css: !0 },
        middle: { top: "x18g6o9x", $$css: !0 },
        start: { top: "x13vifvy", $$css: !0 },
        stretch: { $$css: !0 },
      };
    function s(a, b, c) {
      c = c - k;
      if (!a) return b === "end" || b === "middle" ? c * -1 : c;
      return (l && b === "start") || (!l && b === "end") ? c * -1 : c;
    }
    function t(a, b, c, d) {
      if (c === "edge" || d == null) return {};
      c = a === "below" || a === "above";
      a = c ? d.width : d.height;
      d = a > 0 ? a / 2 : 0;
      if (d === 0) return {};
      a = s(c, b, b === "middle" ? m / 2 : d);
      return {
        transform: c ? "translateX(" + a + "px)" : "translateY(" + a + "px)",
      };
    }
    function u(a, b) {
      return a === "above" || a === "below"
        ? b === "middle"
          ? c("BasePopoverDownInsetArrow.svg.react")
          : c("BasePopoverDownEdgeArrow.svg.react")
        : b === "middle"
        ? c("BasePopoverRightInsetArrow.svg.react")
        : c("BasePopoverRightEdgeArrow.svg.react");
    }
    function a(a, b) {
      var d,
        e = a.arrowAlignment,
        f = e === void 0 ? "center" : e;
      e = a.children;
      var g = a.label,
        k = a.labelledby,
        m = a.testid,
        s = a.xstyle;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "arrowAlignment",
        "children",
        "label",
        "labelledby",
        "testid",
        "xstyle",
      ]);
      var v = i(c("BaseContextualLayerOrientationContext")),
        w = v.align,
        x = v.position,
        y = i(c("BaseContextualLayerContextSizeContext"));
      v = u(x, w);
      var z =
        (d = i(c("BaseContextualLayerLayerAdjustmentContext"))) != null ? d : 0;
      d = j(
        function () {
          var a = l ? "start" : "end",
            b = l ? "end" : "start",
            c = (w === "end" && !l) || (w === "start" && l),
            d = 1,
            e = 1,
            g = 0,
            h = 0;
          switch (x) {
            case "above":
              g += -z;
              c && (d = -1);
              break;
            case "below":
              g += -z;
              e = -1;
              c && (d = -1);
              break;
            case b:
              h += -z;
              w === "start" && (e = -1);
              break;
            case a:
              h += -z;
              d = -1;
              w === "start" && (e = -1);
              break;
          }
          return {
            arrowStyle: {
              transform:
                "scale(" +
                d +
                ", " +
                e +
                ") translate(" +
                g +
                "px, " +
                h +
                "px)",
            },
            containerStyle: t(x, w, f, y),
          };
        },
        [w, f, y, z, x]
      );
      var A = d.arrowStyle;
      d = d.containerStyle;
      return h.jsxs(
        "div",
        babelHelpers["extends"](
          {},
          a,
          {
            "aria-label": g,
            "aria-labelledby": k,
            className: c("stylex")(n.container, o[x], s),
            ref: b,
            style: d,
          },
          c("testID")(m),
          {
            children: [
              e,
              h.jsx(v, {
                className: c("stylex")(
                  n.arrow,
                  p[x],
                  (x === "start" || x === "end") && r[w],
                  (x === "above" || x === "below") && q[w]
                ),
                fill: "var(--card-background)",
                style: A,
              }),
            ],
          }
        )
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = h.forwardRef(a);
    g["default"] = e;
  },
  98
);
__d(
  "BaseScrollRegionObserver.react",
  [
    "intersectionObserverEntryIsIntersecting",
    "react",
    "stylex",
    "useIntersectionObserver",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useMemo,
      j = {
        end: { bottom: "x1ey2m1c", $$css: !0 },
        start: { top: "x13vifvy", $$css: !0 },
        target: {
          end: "xds687c",
          opacity: "xg01cxk",
          position: "x10l6tqk",
          start: "x17qophe",
          zIndex: "x8knxv4",
          $$css: !0,
        },
      };
    function a(a) {
      var b = a.end,
        c = a.rootRef;
      a = a.start;
      a = a
        ? h.jsx(k, {
            callback: a.callback,
            rootRef: c,
            xstyle: [j.target, j.start, a.heightXStyle],
          })
        : null;
      c = b
        ? h.jsx(k, {
            callback: b.callback,
            rootRef: c,
            xstyle: [j.target, j.end, b.heightXStyle],
          })
        : null;
      return h.jsxs(h.Fragment, { children: [a, c] });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function k(a) {
      var b = a.callback,
        d = a.rootRef;
      a = a.xstyle;
      var e = i(
        function () {
          return {
            root: function () {
              return d == null ? void 0 : d.current;
            },
            rootMargin: { bottom: 0, left: 0, right: 0, top: 0 },
            threshold: 0,
          };
        },
        [d]
      );
      e = c("useIntersectionObserver")(function (a) {
        a = c("intersectionObserverEntryIsIntersecting")(a);
        b(a);
      }, e);
      return h.jsx("div", { className: c("stylex")(a), ref: e });
    }
    k.displayName = k.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometDebounce",
  ["clearTimeout", "setTimeout"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      b = b === void 0 ? {} : b;
      var d = b.leading,
        e = b.wait,
        f = !0,
        g;
      function h() {
        for (var b = arguments.length, i = new Array(b), j = 0; j < b; j++)
          i[j] = arguments[j];
        var k;
        if (d === !0) {
          k = function () {
            (f = !0), (g = null);
          };
          if (!f) {
            c("clearTimeout")(g);
            g = c("setTimeout")(k, e);
            return;
          }
          f = !1;
          a.apply(void 0, i);
        } else
          h.reset(),
            (k = function () {
              (g = null), a.apply(void 0, i);
            });
        g = c("setTimeout")(k, e);
      }
      h.isPending = function () {
        return g != null;
      };
      h.reset = function () {
        c("clearTimeout")(g), (g = null), (f = !0);
      };
      return h;
    }
    g["default"] = a;
  },
  98
);
__d(
  "BaseScrollableArea.react",
  [
    "BaseScrollableAreaContext",
    "CometDebounce",
    "CometVisualCompletionAttributes",
    "Locale",
    "UserAgent",
    "gkx",
    "react",
    "resize-observer-polyfill",
    "stylex",
    "useUnsafeRef_DEPRECATED",
    "useVisibilityObserver",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useContext,
      j = b.useEffect,
      k = b.useImperativeHandle,
      l = b.useMemo,
      m = b.useRef,
      n = b.useState,
      o = {
        baseScroller: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          flexGrow: "x1iyjqo2",
          position: "x1n2onr6",
          $$css: !0,
        },
        baseScrollerHorizontal: { flexDirection: "x1q0g3np", $$css: !0 },
        baseScrollerWithBottomShadow: { marginBottom: "x129vozr", $$css: !0 },
        baseScrollerWithTopShadow: { marginTop: "xaci4zi", $$css: !0 },
        default: {
          MsOverflowStyle: "x2atdfe",
          MsScrollChaining: "xb57i2i",
          MsScrollRails: "x1q594ok",
          WebkitOverflowScrolling: "x5lxg6s",
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          position: "x1n2onr6",
          zIndex: "x1ja2u2z",
          $$css: !0,
        },
        expanding: {
          flexBasis: "x1l7klhg",
          flexGrow: "x1iyjqo2",
          flexShrink: "xs83m0k",
          minHeight: "x2lwn1j",
          $$css: !0,
        },
        expandingIE11: {
          flexBasis: "xdl72j9",
          flexGrow: "x1iyjqo2",
          flexShrink: "xs83m0k",
          minHeight: "x2lwn1j",
          $$css: !0,
        },
        hideScrollbar: {
          MsOverflowStyle: "x1pq812k",
          scrollbarWidth: "x1rohswg",
          "::-webkit-scrollbar_display": "xfk6m8",
          "::-webkit-scrollbar_height": "x1yqm8si",
          "::-webkit-scrollbar_width": "xjx87ck",
          $$css: !0,
        },
        horizontalAuto: {
          overflowX: "xw2csxc",
          overscrollBehaviorX: "x7p5m3t",
          $$css: !0,
        },
        perspective: {
          perspective: "xx8ngbg",
          perspectiveOrigin: "xwo3gff",
          position: "x1n2onr6",
          transformStyle: "x1oyok0e",
          $$css: !0,
        },
        perspectiveRTL: { perspectiveOrigin: "x1glq8lk", $$css: !0 },
        verticalAuto: {
          overflowY: "x1odjw0f",
          overscrollBehaviorY: "x1e4zzel",
          $$css: !0,
        },
      },
      p = {
        base: {
          boxSizing: "x9f619",
          display: "x1s85apg",
          end: "xds687c",
          opacity: "xg01cxk",
          paddingTop: "xexx8yu",
          paddingEnd: "x150jy0e",
          paddingBottom: "x18d9i69",
          paddingStart: "x1e558r4",
          pointerEvents: "x47corl",
          position: "x10l6tqk",
          top: "x13vifvy",
          transformOrigin: "x1n4smgl",
          transitionDuration: "x1d8287x",
          transitionProperty: "x19991ni",
          transitionTimingFunction: "xwji4o3",
          width: "x1kky2od",
          $$css: !0,
        },
        hovered: {
          opacity: "x1hc1fzr",
          transitionDuration: "x1p6kkr5",
          $$css: !0,
        },
        inner: {
          backgroundColor: "x1hwfnsy",
          borderTopStartRadius: "x1lcm9me",
          borderTopEndRadius: "x1yr5g0i",
          borderBottomEndRadius: "xrt01vj",
          borderBottomStartRadius: "x10y3i5r",
          height: "x5yr21d",
          width: "xh8yej3",
          $$css: !0,
        },
        rtl: { transformOrigin: "xyyilfv", $$css: !0 },
      },
      q = d("Locale").isRTL(),
      r = c("gkx")("1299319");
    function a(a, b) {
      var d = a.children,
        e = a.contentRef,
        f = a.expanding;
      f = f === void 0 ? !1 : f;
      var g = a.forceBrowserDefault,
        t = g === void 0 ? !1 : g;
      g = a.hideScrollbar;
      var u = g === void 0 ? !1 : g,
        y = a.horizontal;
      g = a.id;
      var z = a.onScroll,
        A = a.onScrollBottom,
        B = a.onScrollTop,
        C = a.scrollTracePolicy,
        D = a.style,
        E = a.tabIndex,
        F = a.testid,
        G = a.vertical;
      F = a.withBottomShadow;
      F = F === void 0 ? !1 : F;
      var H = a.withTopShadow;
      H = H === void 0 ? !1 : H;
      var I = a.xstyle;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "children",
        "contentRef",
        "expanding",
        "forceBrowserDefault",
        "hideScrollbar",
        "horizontal",
        "id",
        "onScroll",
        "onScrollBottom",
        "onScrollTop",
        "scrollTracePolicy",
        "style",
        "tabIndex",
        "testid",
        "vertical",
        "withBottomShadow",
        "withTopShadow",
        "xstyle",
      ]);
      var J = l(
          function () {
            return t || !G || u || y || x();
          },
          [G, u, y, t]
        ),
        K = n(!1),
        L = K[0],
        M = K[1];
      K = n(!1);
      var N = K[0],
        O = K[1];
      K = n(!1);
      var aa = K[0],
        P = K[1],
        Q = i(c("BaseScrollableAreaContext")),
        R = m(null),
        S = c("useUnsafeRef_DEPRECATED")(null),
        T = m(null),
        U = m(null),
        V = m(null),
        W = m(0);
      j(
        function () {
          var a;
          if (J) return;
          var b = S.current,
            d = R.current,
            f = (a = e == null ? void 0 : e.current) != null ? a : d,
            g = U.current,
            h = T.current;
          if (d == null || f == null || b == null || h == null || g == null)
            return;
          var i = 0,
            j = 0;
          a = function () {
            g.style.display = "none";
            h.style.display = "none";
            var a = b.getBoundingClientRect(),
              c = f.getBoundingClientRect(),
              e = b.scrollHeight,
              k = d.scrollHeight,
              l = f.scrollHeight;
            k = k - l;
            var m = k !== 0;
            k = Math.ceil(a.height - k);
            j = a.top;
            W.current = m ? l : e;
            l = W.current;
            i = Math.pow(k, 2) / l;
            h.style.height = l <= k ? "0px" : i + "px";
            g.style.height = l + "px";
            q
              ? ((h.style.left = "0px"), (g.style.left = "0px"))
              : ((h.style.right = "0px"), (g.style.right = "0px"));
            e = b.scrollTop;
            c = c.top - a.top + e;
            a = 0;
            m &&
              ((a = c * -1),
              (g.style.top = c + "px"),
              (h.style.top = c + "px"));
            e = (k - i) / (l - k);
            h.style.transform = [
              "matrix3d(\n          1,0,0,0,\n          0,1,0,0,\n          0," +
                a +
                ",1,0,\n          0,0,0,-1)",
              "scale(" + 1 / e + ")",
              "translateZ(" + (1 - 1 / e) + "px)",
              "translateZ(-2px)",
            ].join(" ");
            h.style.display = "block";
            g.style.display = l <= k ? "none" : "block";
          };
          var k = function (a) {
              s(a);
              var c = a.clientY;
              a = b.clientHeight;
              var d = b.scrollTop;
              P(!0);
              var e = W.current / a;
              a = d / e;
              if (c < j + a || c > j + a + i) {
                var f = c < j + a ? -20 : 20,
                  h = !0,
                  k = window.setInterval(function () {
                    h && b.scrollTo({ top: b.scrollTop + f });
                  }, 16);
                a = function a(b) {
                  s(b),
                    k && window.clearInterval(k),
                    window.removeEventListener("mouseup", a, !0),
                    g.removeEventListener("mouseenter", l),
                    g.removeEventListener("mouseleave", m);
                };
                var l = function (a) {
                    s(a), (h = !0);
                  },
                  m = function (a) {
                    s(a), (h = !1);
                  };
                window.addEventListener("mouseup", a, !0);
                g.addEventListener("mouseenter", l);
                g.addEventListener("mouseleave", m);
                return;
              }
              var n = function (a) {
                s(a);
                a = a.clientY - c;
                b.scrollTo({ top: d + a * e });
              };
              a = function a(b) {
                s(b),
                  P(!1),
                  window.removeEventListener("mousemove", n, !0),
                  window.removeEventListener("mouseup", a, !0);
              };
              window.addEventListener("mousemove", n, !0);
              window.addEventListener("mouseup", a, !0);
            },
            l = c("CometDebounce")(a, { wait: 100 });
          window.addEventListener("resize", l);
          g.addEventListener("mousedown", k);
          var m = new (c("resize-observer-polyfill"))(l);
          m.observe(d);
          m.observe(b);
          return function () {
            window.removeEventListener("resize", l),
              g.removeEventListener("mousedown", k),
              m.disconnect(),
              l.reset();
          };
        },
        [e, S, J]
      );
      K = function () {
        M(!0);
      };
      var ba = function () {
          return M(!1);
        },
        X = function (a) {
          z && z(a),
            O(!0),
            V.current && window.clearTimeout(V.current),
            (V.current = window.setTimeout(function () {
              O(!1);
            }, 1e3));
        };
      j(function () {
        return function () {
          window.clearTimeout(V.current);
        };
      }, []);
      var Y = l(function () {
        return {
          getDOMNode: function () {
            return S.current;
          },
        };
      }, []);
      k(
        b,
        function () {
          return Y;
        },
        [Y]
      );
      b = l(
        function () {
          return [].concat(Q, [Y]);
        },
        [Y, Q]
      );
      var Z = h.jsx("div", {
          className:
            "x78zum5 xds687c xdt5ytf x2lah0s x10wjd1d x47corl x7wzq59 x17qophe x1vjfegm x19bjbvb x1nhvcw1 xepu288",
          children: h.jsx("div", {
            className:
              "x2lah0s xlup9mm x7wzq59 x7r5tp8 x1s928wv x1a5uphr x1j6awrg x1s71c9q x4eaejv x13vifvy",
          }),
        }),
        $ = h.jsx("div", {
          className:
            "x78zum5 xds687c xdt5ytf x2lah0s x10wjd1d x47corl x7wzq59 x17qophe x1vjfegm x1l3hj4d x1vjtdzu x13a6bvl x1yztbdb",
          children: h.jsx("div", {
            className:
              "x2lah0s xlup9mm x7wzq59 x7r5tp8 x1s928wv x1a5uphr x1j6awrg x1s71c9q x4eaejv x1ey2m1c xtjevij",
          }),
        });
      return J
        ? h.jsx(c("BaseScrollableAreaContext").Provider, {
            value: b,
            children: h.jsxs(
              "div",
              babelHelpers["extends"]({}, a, {
                className: c("stylex")(
                  o["default"],
                  f && (r ? o.expandingIE11 : o.expanding),
                  u && o.hideScrollbar,
                  y && o.horizontalAuto,
                  G && o.verticalAuto,
                  I
                ),
                "data-testid": void 0,
                id: g,
                onScroll: X,
                ref: S,
                style: D,
                tabIndex: E,
                children: [
                  H && Z,
                  h.jsxs("div", {
                    className: c("stylex")(
                      o.baseScroller,
                      y && !G && o.baseScrollerHorizontal,
                      H && o.baseScrollerWithTopShadow,
                      F && o.baseScrollerWithBottomShadow
                    ),
                    children: [
                      B ? h.jsx(w, { onVisible: B, scrollerRef: S }) : null,
                      d,
                      A ? h.jsx(v, { onVisible: A, scrollerRef: S }) : null,
                    ],
                  }),
                  F && $,
                ],
              })
            ),
          })
        : h.jsx(c("BaseScrollableAreaContext").Provider, {
            value: b,
            children: h.jsxs(
              "div",
              babelHelpers["extends"]({}, a, {
                className: c("stylex")(
                  o["default"],
                  o.hideScrollbar,
                  f && (r ? o.expandingIE11 : o.expanding),
                  o.perspective,
                  q && o.perspectiveRTL,
                  y && o.horizontalAuto,
                  G && o.verticalAuto,
                  I
                ),
                "data-scrolltracepolicy": C,
                "data-testid": void 0,
                id: g,
                onMouseEnter: K,
                onMouseLeave: ba,
                onScroll: X,
                ref: S,
                style: D,
                tabIndex: E,
                children: [
                  H && Z,
                  h.jsxs("div", {
                    className: c("stylex")(
                      o.baseScroller,
                      y && !G && o.baseScrollerHorizontal,
                      H && o.baseScrollerWithTopShadow,
                      F && o.baseScrollerWithBottomShadow
                    ),
                    ref: R,
                    children: [
                      B ? h.jsx(w, { onVisible: B, scrollerRef: S }) : null,
                      d,
                      A ? h.jsx(v, { onVisible: A, scrollerRef: S }) : null,
                    ],
                  }),
                  F && $,
                  h.jsx(
                    "div",
                    babelHelpers["extends"](
                      {
                        className:
                          "x14nfmen x1s85apg xds687c x5yr21d xg01cxk x10l6tqk x13vifvy x1wsgiic x19991ni xwji4o3 x1kky2od x1sd63oq",
                      },
                      c("CometVisualCompletionAttributes").IGNORE,
                      { "data-thumb": 1, ref: U }
                    )
                  ),
                  h.jsx(
                    "div",
                    babelHelpers["extends"](
                      {
                        className: c("stylex")(
                          p.base,
                          q && p.rtl,
                          (L || N || aa) && p.hovered
                        ),
                      },
                      c("CometVisualCompletionAttributes").IGNORE,
                      {
                        "data-thumb": 1,
                        ref: T,
                        children: h.jsx("div", {
                          className:
                            "x1hwfnsy x1lcm9me x1yr5g0i xrt01vj x10y3i5r x5yr21d xh8yej3",
                        }),
                      }
                    )
                  ),
                ],
              })
            ),
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    var s = function (a) {
        a.preventDefault(), a.stopPropagation(), a.stopImmediatePropagation();
      },
      t = {
        bottom: { bottom: "x1ey2m1c", $$css: !0 },
        main: {
          height: "xjm9jq1",
          opacity: "xg01cxk",
          pointerEvents: "x47corl",
          position: "x10l6tqk",
          width: "x1i1rx1s",
          $$css: !0,
        },
        top: { top: "x13vifvy", $$css: !0 },
      };
    function u(a) {
      var b = a.onVisible,
        d = a.scrollerRef;
      a = a.xstyle;
      var e = l(
        function () {
          return function () {
            return d.current;
          };
        },
        [d]
      );
      b = c("useVisibilityObserver")({
        onVisible: b,
        options: { root: e, rootMargin: 0 },
      });
      return h.jsx("div", { className: c("stylex")(t.main, a), ref: b });
    }
    u.displayName = u.name + " [from " + f.id + "]";
    function v(a) {
      var b = a.onVisible;
      a = a.scrollerRef;
      return h.jsx(u, { onVisible: b, scrollerRef: a, xstyle: t.bottom });
    }
    v.displayName = v.name + " [from " + f.id + "]";
    function w(a) {
      var b = a.onVisible;
      a = a.scrollerRef;
      return h.jsx(u, { onVisible: b, scrollerRef: a, xstyle: t.top });
    }
    w.displayName = w.name + " [from " + f.id + "]";
    function x() {
      return (
        c("UserAgent").isPlatform("iOS") ||
        c("UserAgent").isPlatform("Android") ||
        c("UserAgent").isBrowser("Edge") ||
        c("UserAgent").isBrowser("IE") ||
        c("UserAgent").isBrowser("Firefox < 64")
      );
    }
    e = h.forwardRef(a);
    g["default"] = e;
  },
  98
);
__d(
  "useSetAttributeRef",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;
    function a(a, b) {
      return h(
        function (c) {
          c != null && c.setAttribute(a, b);
        },
        [a, b]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometCalloutContext",
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
  "useCometCallout",
  [
    "BaseContextualLayerAnchorRootContext",
    "BaseScrollableAreaContext",
    "CometCalloutContext",
    "LayoutAnimationBoundaryContext",
    "react",
    "useCometUniqueID",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useContext,
      i = b.useEffect,
      j = b.useRef;
    function a(a, b) {
      var d = h(c("CometCalloutContext")),
        e = h(c("BaseContextualLayerAnchorRootContext")),
        f = j(null),
        g = c("useCometUniqueID")(),
        k = h(c("BaseScrollableAreaContext")),
        l = h(c("LayoutAnimationBoundaryContext"));
      i(
        function () {
          if (d == null || f.current == null) return;
          if (a != null && b === !0) {
            d.addCallout({
              anchorRootRefContext: e,
              animationContext: l,
              calloutID: g,
              calloutProps: a,
              contextRef: f,
              scrollableAreaContext: k,
            });
            return function () {
              return d.removeCallout(g);
            };
          }
        },
        [l, e, d, g, a, b, k]
      );
      return f;
    }
    g["default"] = a;
  },
  98
);
__d(
  "TetraCircleButton.react",
  ["CometCircleButton.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a, b) {
      return h.jsx(
        c("CometCircleButton.react"),
        babelHelpers["extends"]({}, a, { ref: b })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "CometDivider.react",
  ["BaseDivider.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsx(c("BaseDivider.react"), { xstyle: a.xstyle });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometEntryPointPopoverContainer.react",
  ["CometRelay", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useLayoutEffect,
      j = b.useMemo;
    function a(a) {
      a.entryPointParams;
      var b = a.entryPointReference,
        c = a.load,
        e = a.otherProps,
        f = babelHelpers.objectWithoutPropertiesLoose(a, [
          "entryPointParams",
          "entryPointReference",
          "load",
          "otherProps",
        ]);
      a = j(
        function () {
          return babelHelpers["extends"]({}, e, f);
        },
        [e, f]
      );
      i(
        function () {
          b == null && c();
        },
        [b, c]
      );
      return b == null
        ? null
        : h.jsx(d("CometRelay").EntryPointContainer, {
            entryPointReference: b,
            props: a,
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometPopover.react",
  [
    "BaseContextualLayerOrientationContext",
    "BasePopover.react",
    "BasePopoverSVGArrowContainer.react",
    "cr:1941981",
    "cr:1941982",
    "isBlueprintStylesEnabled",
    "react",
    "stylex",
    "useCometDisplayTimingTrackerForInteraction",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useContext,
      j = {
        card: { boxSizing: "x9f619", $$css: !0 },
        cardBackground: { backgroundColor: "x1jx94hy", $$css: !0 },
        cardBorderRadius: {
          borderTopStartRadius: "x1qpq9i9",
          borderTopEndRadius: "xdney7k",
          borderBottomEndRadius: "xu5ydu1",
          borderBottomStartRadius: "xt3gfkd",
          $$css: !0,
        },
        cardOverflow: {
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        cardShadow: { boxShadow: "x8ii3r7", $$css: !0 },
        popoverWithArrow: { filter: "x1fayt1i", $$css: !0 },
      },
      k = {
        end: { borderBottomEndRadius: "x5pf9jr", $$css: !0 },
        middle: { $$css: !0 },
        start: { borderBottomStartRadius: "xo71vjh", $$css: !0 },
        stretch: { $$css: !0 },
      },
      l = {
        end: { borderTopEndRadius: "x13lgxp2", $$css: !0 },
        middle: { $$css: !0 },
        start: { borderTopStartRadius: "x168nmei", $$css: !0 },
        stretch: { $$css: !0 },
      },
      m = {
        end: { borderBottomEndRadius: "x5pf9jr", $$css: !0 },
        middle: { $$css: !0 },
        start: { borderTopEndRadius: "x13lgxp2", $$css: !0 },
        stretch: { $$css: !0 },
      },
      n = {
        end: { borderBottomStartRadius: "xo71vjh", $$css: !0 },
        middle: { $$css: !0 },
        start: { borderTopStartRadius: "x168nmei", $$css: !0 },
        stretch: { $$css: !0 },
      };
    function o(a, b) {
      switch (a) {
        case "above":
          return k[b];
        case "below":
          return l[b];
        case "end":
          return n[b];
        case "start":
          return m[b];
      }
    }
    function a(a, d) {
      var e = a.animatedPopover;
      e = e === void 0 ? !1 : e;
      var f = a.children,
        g = a.popoverName,
        k = a.withArrow;
      k = k === void 0 ? !1 : k;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "animatedPopover",
        "children",
        "popoverName",
        "withArrow",
      ]);
      g = c("useCometDisplayTimingTrackerForInteraction")(g);
      var l = i(c("BaseContextualLayerOrientationContext")),
        m = l.align;
      l = l.position;
      return h.jsx(
        c("BasePopover.react"),
        babelHelpers["extends"]({}, a, {
          arrowImpl: k ? c("BasePopoverSVGArrowContainer.react") : void 0,
          ref: d,
          xstyle: k && j.popoverWithArrow,
          children:
            e && b("cr:1941981") != null && b("cr:1941982") != null
              ? h.jsx(b("cr:1941982"), {
                  children: h.jsx(b("cr:1941981"), {
                    backgroundColorXStyle: j.cardBackground,
                    borderRadius: c("isBlueprintStylesEnabled")() ? 16 : 8,
                    boxShadowXStyle: j.cardShadow,
                    ref: g,
                    springConfig: { bounciness: 4, speed: 40 },
                    xstyle: j.card,
                    children: f,
                  }),
                })
              : h.jsx("div", {
                  className: c("stylex")(
                    j.card,
                    j.cardBackground,
                    j.cardShadow,
                    j.cardBorderRadius,
                    j.cardOverflow,
                    k === !0 && o(l, m)
                  ),
                  ref: g,
                  children: f,
                }),
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
  "CometPopoverLoadingStateContent.react",
  ["CometProgressRingIndeterminate.react", "react", "stylex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        root: {
          alignItems: "x6s0dn4",
          display: "x78zum5",
          height: "xnnlda6",
          justifyContent: "xl56j7k",
          minWidth: "x53cq04",
          width: "xh8yej3",
          $$css: !0,
        },
      };
    function a(a) {
      a = a.xstyle;
      return h.jsx("div", {
        className: c("stylex")(i.root, a),
        children: h.jsx(c("CometProgressRingIndeterminate.react"), {
          color: "disabled",
          size: 24,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometPopoverLoadingState.react",
  [
    "fbt",
    "CometPopover.react",
    "CometPopoverLoadingStateContent.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.xstyle;
      a = babelHelpers.objectWithoutPropertiesLoose(a, ["xstyle"]);
      return i.jsx(
        c("CometPopover.react"),
        babelHelpers["extends"]({ label: h._("Chargement...") }, a, {
          children: i.jsx(c("CometPopoverLoadingStateContent.react"), {
            xstyle: b,
          }),
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "isPrimitive",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      switch (Object.prototype.toString.call(a)) {
        case "[object String]":
        case "[object Number]":
        case "[object Boolean]":
        case "[object Null]":
        case "[object Undefined]":
          return !0;
      }
      return !1;
    }
    f["default"] = a;
  },
  66
);
__d(
  "deepEquals",
  ["isPrimitive"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = function (a) {
        return function (b, c) {
          return l(b, a[c]);
        };
      },
      i = function (a, b) {
        return function (c) {
          return c in a && c in b && l(a[c], b[c]);
        };
      },
      j = function (a, b) {
        if (a.size !== b.size) return !1;
        b = new Set(b);
        for (
          var a = a.keys(),
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
          if (b.has(f)) b["delete"](f);
          else if (c("isPrimitive")(f)) return !1;
          else {
            f = k(b, f);
            if (f != null) b["delete"](f);
            else return !1;
          }
        }
        return b.size === 0;
      };
    function k(a, b) {
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
        if (l(e, b)) return e;
      }
      return null;
    }
    function l(a, b) {
      if (a === b) return !0;
      if (c("isPrimitive")(a)) return !1;
      if (
        Object.prototype.toString.call(a) !== Object.prototype.toString.call(b)
      )
        return !1;
      if (Array.isArray(a)) return a.length === b.length && a.every(h(b));
      if (a instanceof Set) return j(a, b);
      var d = Object.keys(a);
      return d.length !== Object.keys(b).length ? !1 : d.every(i(a, b));
    }
    g["default"] = l;
  },
  98
);
__d(
  "tracePolicyFromResource",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      return a + "." + b.getModuleId();
    }
    f["default"] = a;
  },
  66
);
__d(
  "CometCurrentInitialLoadVC",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g;
    function a(a) {
      g == null && (g = a);
    }
    function b() {
      return g;
    }
    f.setInitialLoadVC = a;
    f.getInitialLoadVC = b;
  },
  66
);
__d(
  "CometInteractionTracingQPLConfigContext",
  ["qpl", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    d = d("react");
    var i = d.useContext,
      j = d.useMemo;
    d = {
      dialogTraceQPLEvent: c("qpl")._(30605361, "6204"),
      popoverTraceQPLEvent: c("qpl")._(30605361, "6204"),
    };
    var k = h.createContext(d);
    function a() {
      return i(k).dialogTraceQPLEvent;
    }
    function b() {
      return i(k).popoverTraceQPLEvent;
    }
    function e(a) {
      var b = a.children,
        c = a.dialogTraceQPLEvent,
        d = a.popoverTraceQPLEvent;
      return h.jsx(k.Provider, {
        value: j(
          function () {
            return { dialogTraceQPLEvent: c, popoverTraceQPLEvent: d };
          },
          [c, d]
        ),
        children: b,
      });
    }
    e.displayName = e.name + " [from " + f.id + "]";
    g.defaultInteractionQPLEvents = d;
    g.useDialogTraceQPLEvent = a;
    g.usePopoverTraceQPLEvent = b;
    g.CometInteractionTracingQPLConfigContextProvider = e;
  },
  98
);
__d(
  "MAWTTRCSafe",
  ["cr:496", "cr:7346"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = (h = b("cr:496")) != null ? h : b("cr:7346");
    function a(a) {
      i == null ? void 0 : i.fail(a);
    }
    function c(a, b) {
      i == null ? void 0 : i.markEvent(a, b);
    }
    function d(a, b) {
      i == null ? void 0 : i.addBoolAnnotation(a, b);
    }
    function e(a, b) {
      i == null ? void 0 : i.addIntAnnotation(a, b);
    }
    function f(a, b) {
      i == null ? void 0 : i.addStringAnnotation(a, b);
    }
    function j() {
      return (i == null ? void 0 : i.duringMIC()) === !0;
    }
    g.fail = a;
    g.markEvent = c;
    g.addBoolAnnotation = d;
    g.addIntAnnotation = e;
    g.addStringAnnotation = f;
    g.duringMIC = j;
  },
  98
);
__d(
  "CometInteractionTracingConfig",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      defaultTracePolicy: "comet.app",
      getMetadata: function () {
        return {};
      },
      navigationCancelsInteractions: !0,
    };
    f.tracingConfig = a;
  },
  66
);
__d(
  "CometPassiveRouterRouteTracePolicyContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(function () {
      return void 0;
    });
    g["default"] = b;
  },
  98
);
__d(
  "useGetCometRouteTracePolicy",
  ["CometPassiveRouterRouteTracePolicyContext", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useContext;
    function a() {
      return h(c("CometPassiveRouterRouteTracePolicyContext"));
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometInteractionTracing",
  [
    "CometInteractionTracingConfig",
    "InteractionTracing",
    "forEachObject",
    "react",
    "useGetCometRouteTracePolicy",
    "uuidv4",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback,
      i = 0;
    function j() {
      return i++;
    }
    function a(a, b, e, f, g) {
      var i = c("useGetCometRouteTracePolicy")(),
        k = "" + j();
      return h(
        function (h, j, l, m, n) {
          var o = c("uuidv4")(),
            p =
              (m = (m = (m = m) != null ? m : f) != null ? m : i()) != null
                ? m
                : "comet.app",
            q = p + "_" + k + (n != null ? "_" + n : "");
          c("InteractionTracing").trace(
            a,
            function (a) {
              var b = c("InteractionTracing").checkAndMarkRevisit(p),
                d = c("InteractionTracing").checkAndMarkRevisit(q);
              a.addMetadata("revisit", b ? 1 : 0);
              a.addMetadata("instance_revisit", d ? 1 : 0);
              g != null &&
                c("forEachObject")(g, function (b, c) {
                  c != null && b != null && a.addMetadata(c, b);
                });
              h(a);
            },
            b,
            e,
            p,
            o,
            j,
            l,
            d("CometInteractionTracingConfig").tracingConfig
          );
        },
        [a, b, e, f]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometPopoverInteractionTracing",
  [
    "CometCurrentInitialLoadVC",
    "CometInteractionTracingQPLConfigContext",
    "MAWTTRCSafe",
    "react",
    "useCometInteractionTracing",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;
    function a(a, b, e) {
      var f = d(
          "CometInteractionTracingQPLConfigContext"
        ).usePopoverTraceQPLEvent(),
        g = c("useCometInteractionTracing")(
          f,
          "fluid",
          "INTERACTION",
          a,
          babelHelpers["extends"](
            { interaction_type: "popover", load_type: b },
            e != null ? { preload_trigger: e } : null
          )
        );
      return h(
        function (a) {
          g(function (b) {
            var c = d("MAWTTRCSafe").duringMIC();
            c && b.addAnnotationInt("startedDuringMIC", 1);
            b.onComplete(function (a) {
              var c = d("CometCurrentInitialLoadVC").getInitialLoadVC();
              c != null &&
                b.addAnnotationInt(
                  "sinceInitialLoadVC",
                  Math.round(a.start - c)
                );
            });
            a(b);
          });
        },
        [g]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometMissingFieldHandlers",
  [
    "UFI2CommentsConnectionHandler",
    "getRelayFBMissingFieldHandlers",
    "relay-runtime",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = [].concat(c("getRelayFBMissingFieldHandlers")(), [
      {
        handle: function (a, b, c, e) {
          if (
            b != null &&
            b.getType() === d("relay-runtime").ROOT_TYPE &&
            a.name === "user" &&
            Object.prototype.hasOwnProperty.call(c, "id")
          )
            return c.id;
          if (
            b != null &&
            b.getType() === d("relay-runtime").ROOT_TYPE &&
            a.name === "story" &&
            Object.prototype.hasOwnProperty.call(c, "story_id")
          )
            return c.story_id;
          if (
            b != null &&
            b.getType() === "Story" &&
            a.name === "comet_sections"
          ) {
            var f = b.getLinkedRecord(a.name, {
              renderLocation: "homepage_stream",
            });
            if (f != null) return f.getDataID();
          }
          f = b == null ? void 0 : b.getValue("id");
          if (
            b != null &&
            typeof f === "string" &&
            b.getType() === "Feedback" &&
            a.name.startsWith(
              "__UFI2CommentsProvider_feedback_display_comments_ufi2_comments"
            )
          ) {
            var g = e.get(f);
            if (!g) return void 0;
            g = d("UFI2CommentsConnectionHandler").getConnection(
              g,
              "UFI2CommentsProvider_feedback_display_comments",
              { feedback_source: 1 }
            );
            return !g ? void 0 : g.getDataID();
          }
          if (
            b != null &&
            typeof f === "string" &&
            b.getType() === "Feedback" &&
            a.name === "display_comments"
          ) {
            g = e.get(f);
            if (!g) return void 0;
            e = g.getLinkedRecord("display_comments", c);
            if (e) return e.getDataID();
            e = g.getLinkedRecord("display_comments");
            if (e) return e.getDataID();
            Object.prototype.hasOwnProperty.call(c, "is_initial_fetch") &&
              (e = g.getLinkedRecord(
                "display_comments",
                babelHelpers["extends"]({}, c, {
                  is_initial_fetch: !c.is_initial_fetch,
                })
              ));
            return e ? e.getDataID() : void 0;
          }
          return b != null &&
            a.name === "video" &&
            Object.prototype.hasOwnProperty.call(c, "id")
            ? c.id
            : void 0;
        },
        kind: "linked",
      },
    ]);
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "CometNewsFeedConnectionHandler",
  [
    "FBLogger",
    "RelayFBConnectionHandler_UNSTABLE",
    "gkx",
    "relay-runtime",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "comet_news_feed",
      i = "__connection_next_edge_index",
      j = "received_edges_count";
    function a(a, b) {
      var e,
        f = a.get(b.dataID);
      if (!f) return;
      var g = d("relay-runtime").ConnectionInterface.get();
      g = g.EDGES;
      if (b.args.before != null)
        throw c("unrecoverableViolation")(
          "The newsfeed connection does not support backward pagination by design",
          "comet_feed"
        );
      var h = f.getLinkedRecord(b.fieldKey);
      if (!h) {
        c("FBLogger")("comet_feed").mustfix(
          "Newsfeed connection is null in the store, this means no feed stories will be shown"
        );
        return;
      }
      var m = d("relay-runtime").generateClientID(f.getDataID(), b.handleKey),
        n = f.getLinkedRecord(b.handleKey);
      e = (e = n) != null ? e : a.get(m);
      if (!e) {
        var o = a.create(m, h.getType());
        o.setValue(0, i);
        o.copyFieldsFrom(h);
        m = h.getLinkedRecords(g);
        m &&
          ((m = m.map(function (b) {
            return d("relay-runtime").ConnectionHandler.buildConnectionEdge(
              a,
              o,
              b
            );
          })),
          o.setLinkedRecords(m, g),
          o.setValue(m.length, j));
        f.setLinkedRecord(o, b.handleKey);
        k(a, m, m, o, h);
        return;
      }
      n == null && f.setLinkedRecord(e, b.handleKey);
      var p = e;
      m = h.getLinkedRecords(g);
      m &&
        ((m = m.map(function (b) {
          return d("relay-runtime").ConnectionHandler.buildConnectionEdge(
            a,
            p,
            b
          );
        })),
        p.setValue(m.length, j));
      n = p.getLinkedRecords(g);
      p.copyFieldsFrom(h);
      f = [];
      e = new Set();
      if (
        b.args.after != null ||
        ((b = (b = m) == null ? void 0 : b.length) != null ? b : 0) === 0
      ) {
        l((b = n) != null ? b : [], f, e);
      }
      l((n = m) != null ? n : [], f, e);
      p.setLinkedRecords(f, g);
      k(a, m, f, p, h);
    }
    function k(a, b, e, f, g) {
      var h = d("relay-runtime").ConnectionInterface.get(),
        i = h.END_CURSOR,
        j = h.HAS_NEXT_PAGE,
        k = h.HAS_PREV_PAGE,
        l = h.PAGE_INFO;
      h = h.PAGE_INFO_TYPE;
      g = g.getLinkedRecord(l);
      var m = f.getLinkedRecord(l);
      m == null &&
        ((m = a.create(
          d("relay-runtime").generateClientID(f.getDataID(), l),
          h
        )),
        f.setLinkedRecord(m, l));
      a = g == null ? void 0 : g.getValue(i);
      m.setValue(!1, k);
      if (c("gkx")("1250838")) {
        m.setValue(
          ((h = b == null ? void 0 : b.length) != null ? h : 0) > 0 ||
            (g == null ? void 0 : g.getValue(j)) === !0,
          j
        );
      } else {
        m.setValue(
          ((f = b == null ? void 0 : b.length) != null ? f : 0) > 0,
          j
        );
      }
      l = e != null ? e[e.length - 1] : null;
      k = null;
      l != null && (k = l.getValue("cursor"));
      if (k == null && a == null) {
        c("FBLogger")("comet_feed").info(
          "Unable to set end_cursor as neither the server end cursor, or last edge cursor is defined, this can happen on initial load when there are no stories but shouldn't happen otherwise",
          "comet_feed"
        );
        return;
      }
      m.setValue((h = a) != null ? h : k, i);
    }
    function b(a, b, c) {
      b = d("relay-runtime").getRelayHandleKey(h, b, null);
      return a.getLinkedRecord(b, c);
    }
    function e(a, b, c) {
      return d(
        "RelayFBConnectionHandler_UNSTABLE"
      ).unstable_getAllConnectionsWithKey(a, b, c, h);
    }
    function l(a, b, e) {
      var f = d("relay-runtime").ConnectionInterface.get();
      f = f.NODE;
      for (var g = 0; g < a.length; g++) {
        var h = a[g];
        if (!h) continue;
        var i = h.getLinkedRecord(f);
        if (!i) continue;
        i = i && i.getDataID();
        if (i == null) {
          c("FBLogger")("comet_feed").mustfix(
            "Found edge without deduplication nodeID in comet_news_feed, this can lead to duplicate feed stories being rendered"
          );
          b.push(h);
          continue;
        }
        if (e.has(i)) continue;
        e.add(i);
        b.push(h);
      }
    }
    function f(a, b, e, f) {
      if (e == null) return e;
      var g = d("relay-runtime").ConnectionInterface.get();
      g = g.EDGES;
      var h = b.getValue(i);
      if (typeof h !== "number")
        throw c("unrecoverableViolation")(
          "CometNewsFeedConnectionHandler: Expected edgeIndex to be a number",
          "comet_feed"
        );
      f =
        (f = f) != null
          ? f
          : d("relay-runtime").generateClientID(b.getDataID(), g, h);
      g = a.create(f, e.getType());
      g.copyFieldsFrom(e);
      b.setValue(h + 1, i);
      return g;
    }
    g.update = a;
    g.getConnection = b;
    g.unstable_getAllConnectionsWithKey = e;
    g.buildConnectionEdge = f;
    g.insertEdgeBefore = d("relay-runtime").ConnectionHandler.insertEdgeBefore;
  },
  98
);
__d(
  "CometNotificationsThinClientConnectionHandler",
  ["relay-runtime", "unrecoverableViolation", "warning"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "comet_notifications_thin_client",
      i = "__connection_next_edge_index";
    function a(a, b) {
      var e,
        f = a.get(b.dataID);
      if (!f) return;
      var g = d("relay-runtime").ConnectionInterface.get(),
        h = g.EDGES,
        n = g.END_CURSOR,
        o = g.HAS_NEXT_PAGE,
        p = g.HAS_PREV_PAGE,
        q = g.PAGE_INFO,
        r = g.PAGE_INFO_TYPE;
      g = g.START_CURSOR;
      var s = f.getLinkedRecord(b.fieldKey),
        t = s && s.getLinkedRecord(q);
      if (!s) {
        f.setValue(null, b.handleKey);
        return;
      }
      var u = d("relay-runtime").generateClientID(f.getDataID(), b.handleKey),
        v = f.getLinkedRecord(b.handleKey);
      e = (e = v) != null ? e : a.get(u);
      var w = e && e.getLinkedRecord(q);
      if (!e) {
        var x = a.create(u, s.getType());
        x.setValue(0, i);
        x.copyFieldsFrom(s);
        u = s.getLinkedRecords(h);
        if (u) {
          var y = d("relay-runtime").ConnectionInterface.get(),
            z = y.NODE;
          u = u.reduce(function (b, c) {
            if (!c) return b;
            var d = c.getLinkedRecord(z);
            d = d == null ? void 0 : d.getType();
            return d === "NotifPageCachedNotificationRow"
              ? b
              : b.concat(j(a, x, c));
          }, []);
          x.setLinkedRecords(u, h);
        }
        f.setLinkedRecord(x, b.handleKey);
        w = a.create(d("relay-runtime").generateClientID(x.getDataID(), q), r);
        w.setValue(!1, o);
        w.setValue(!1, p);
        w.setValue(null, n);
        w.setValue(null, g);
        t && w.copyFieldsFrom(t);
        x.setLinkedRecord(w, q);
      } else {
        v == null && f.setLinkedRecord(e, b.handleKey);
        var A = e;
        y = s.getLinkedRecords(h);
        y &&
          (y = y.map(function (b) {
            return j(a, A, b);
          }));
        u = A.getLinkedRecords(h);
        r = A.getLinkedRecord(q);
        A.copyFieldsFrom(s);
        u && A.setLinkedRecords(u, h);
        r && A.setLinkedRecord(r, q);
        v = [];
        f = b.args;
        if (u && y)
          if (f.after != null)
            if (w && f.after === w.getValue(n)) {
              e = new Set();
              k(u, v, e);
              k(y, v, e);
            } else {
              c("warning")(
                !1,
                "Relay: Unexpected after cursor `%s`, edges must be fetched from the end of the list (`%s`).",
                f.after,
                w && w.getValue(n)
              );
              return;
            }
          else if (f.before != null)
            if (w && f.before === w.getValue(g)) {
              s = new Set();
              k(y, v, s);
              k(u, v, s);
            } else {
              c("warning")(
                !1,
                "Relay: Unexpected before cursor `%s`, edges must be fetched from the beginning of the list (`%s`).",
                f.before,
                w && w.getValue(g)
              );
              return;
            }
          else {
            r = l(u);
            q = new Set();
            m(y, v, r, q);
          }
        else y ? (v = y) : (v = u);
        v != null && v !== u && A.setLinkedRecords(v, h);
        if (w && t)
          if (f.after == null && f.before == null) w.copyFieldsFrom(t);
          else if (f.before != null || (f.after == null && f.last)) {
            w.setValue(!!t.getValue(p), p);
            b = t.getValue(g);
            typeof b === "string" && w.setValue(b, g);
          } else if (f.after != null || (f.before == null && f.first)) {
            w.setValue(!!t.getValue(o), o);
            e = t.getValue(n);
            typeof e === "string" && w.setValue(e, n);
          }
      }
    }
    function b(a, b, c) {
      b = d("relay-runtime").getRelayHandleKey(h, b, null);
      return a.getLinkedRecord(b, c);
    }
    function j(a, b, e) {
      if (e == null) return e;
      var f = d("relay-runtime").ConnectionInterface.get(),
        g = f.EDGES;
      f = f.NODE;
      var h = b.getValue(i);
      if (typeof h !== "number")
        throw c("unrecoverableViolation")(
          "CometNotificationsThinClientConnectionHandler: Expected edgeIndex to be a number",
          "Notifications"
        );
      g = d("relay-runtime").generateClientID(b.getDataID(), g, h);
      var j = e.getLinkedRecord(f);
      if (j) {
        var k = d("relay-runtime").generateClientID(e.getDataID(), f, h);
        k = a.create(k, j.getType());
        k.copyFieldsFrom(j);
        e.setLinkedRecord(k, f);
      }
      j = a.create(g, e.getType());
      j.copyFieldsFrom(e);
      b.setValue(h + 1, i);
      return j;
    }
    function k(a, b, c) {
      var e = d("relay-runtime").ConnectionInterface.get();
      e = e.NODE;
      for (var f = 0; f < a.length; f++) {
        var g = a[f];
        if (!g) continue;
        var h = g.getLinkedRecord(e);
        h = h && h.getDataID();
        if (h != null) {
          if (c.has(h)) continue;
          c.add(h);
        }
        b.push(g);
      }
    }
    function l(a) {
      var b = {},
        c = d("relay-runtime").ConnectionInterface.get();
      c = c.NODE;
      for (var e = 0; e < a.length; e++) {
        var f = a[e];
        if (!f) continue;
        f = f.getLinkedRecord(c);
        var g = f && f.getType();
        if (g === "NotifPageNotificationRow") {
          g =
            f == null
              ? void 0
              : (g = f.getLinkedRecord("notif")) == null
              ? void 0
              : g.getValue("id");
          typeof g === "string" && (b[g] = f);
        }
      }
      return b;
    }
    function m(a, b, c, e) {
      var f = d("relay-runtime").ConnectionInterface.get();
      f = f.NODE;
      for (var g = 0; g < a.length; g++) {
        var h,
          i = a[g];
        if (!i) continue;
        var j = i.getLinkedRecord(f),
          k = j && j.getDataID();
        if (k != null) {
          if (e.has(k)) continue;
          e.add(k);
        }
        k = j == null ? void 0 : j.getType();
        h =
          j == null
            ? void 0
            : (h = j.getLinkedRecord("notif")) == null
            ? void 0
            : h.getValue("id");
        if (j && k === "NotifPageCachedNotificationRow") {
          if (typeof h === "string") {
            k = c[h];
            k && (k.copyFieldsFrom(j), i.setLinkedRecord(k, f), b.push(i));
          }
        } else b.push(i);
      }
    }
    g.update = a;
    g.getConnection = b;
    g.buildConnectionEdge = j;
  },
  98
);
__d(
  "PinnedCommentEventsConnectionHandler",
  ["expectationViolation", "relay-runtime"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      a = a.get(b.dataID);
      if (!a) return;
      var c = a.getLinkedRecords(b.fieldKey);
      if (!c) {
        a.setValue(null, b.handleKey);
        return;
      }
      var d = a.getLinkedRecords(b.handleKey);
      if (!d) {
        a.setLinkedRecords(c, b.handleKey);
        return;
      }
      var e;
      d == null ? (e = c) : c == null ? (e = d) : (e = h(d, c));
      a.setLinkedRecords((d = e) != null ? d : [], b.handleKey);
    }
    function h(a, b) {
      var d = 0,
        e = 0,
        f = new Set(),
        g = [],
        h = function (a) {
          var b = a == null ? void 0 : a.getValue("id");
          if (b == null) {
            c("expectationViolation")("Pinned Comment Event should have id");
            return;
          }
          if (f.has(b)) return;
          f.add(b);
          g.push(a);
        };
      while (d < a.length && e < b.length) {
        var i, j;
        i = (i = a[d]) == null ? void 0 : i.getValue("vod_time_offset");
        j = (j = b[e]) == null ? void 0 : j.getValue("vod_time_offset");
        if (typeof i !== "number") {
          d++;
          continue;
        }
        if (typeof j !== "number") {
          e++;
          continue;
        }
        if (i > j) {
          h(a[d]);
          d++;
          continue;
        }
        if (i < j) {
          h(b[e]);
          e++;
          continue;
        }
        h(a[d]);
        h(b[e]);
        d++;
        e++;
      }
      for (i = d; i < a.length; i++) h(a[i]);
      for (j = e; j < b.length; j++) h(b[j]);
      return g;
    }
    function i(a) {
      return d("relay-runtime").getRelayHandleKey(
        "pinned_comment_events",
        a,
        null
      );
    }
    function j(a, b, c) {
      return (a = a.getLinkedRecords(i(b), c)) != null ? a : [];
    }
    function b(a, b, c, d) {
      a.setLinkedRecords(
        j(a, b, d).filter(function (a) {
          return (a == null ? void 0 : a.getValue("id")) !== c;
        }),
        i(b)
      );
      return;
    }
    g.update = a;
    g.getEvents = j;
    g.deleteEvent = b;
  },
  98
);
__d(
  "mergeCommentEdgesSortedByTimestampInVideo",
  ["expectationViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = function (a) {
      a =
        a == null
          ? void 0
          : (a = a.getLinkedRecord("node")) == null
          ? void 0
          : a.getValue("timestamp_in_video");
      return typeof a !== "number" ? null : a;
    };
    function a(a, b) {
      var d = 0,
        e = 0,
        f = new Set(),
        g = [],
        i = function (a) {
          var b;
          b =
            a == null
              ? void 0
              : (b = a.getLinkedRecord("node")) == null
              ? void 0
              : b.getValue("id");
          if (b == null) {
            c("expectationViolation")("Node should have id");
            return;
          }
          if (f.has(b)) return;
          f.add(b);
          g.push(a);
        };
      while (d < a.length && e < b.length) {
        var j = h(a[d]),
          k = h(b[e]);
        if (j == null) {
          d++;
          continue;
        }
        if (k == null) {
          e++;
          continue;
        }
        if (j < k) {
          i(a[d]);
          d++;
          continue;
        }
        if (j > k) {
          i(b[e]);
          e++;
          continue;
        }
        i(a[d]);
        i(b[e]);
        d++;
        e++;
      }
      for (j = d; j < a.length; j++) i(a[j]);
      for (k = e; k < b.length; k++) i(b[k]);
      return g;
    }
    g["default"] = a;
  },
  98
);
__d(
  "VideoTimestampedCommentsConnectionHandler",
  ["mergeCommentEdgesSortedByTimestampInVideo", "relay-runtime"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      var e = a.get(b.dataID);
      if (!e) return;
      var f = e.getLinkedRecord(b.fieldKey);
      if (!f) {
        e.setValue(null, b.handleKey);
        return;
      }
      var g = e.getLinkedRecord(b.handleKey);
      if (!g) {
        a = a.create(
          d("relay-runtime").generateClientID(e.getDataID(), b.handleKey),
          f.getType()
        );
        a.copyFieldsFrom(f);
        e.setLinkedRecord(a, b.handleKey);
        return;
      }
      e = f.getLinkedRecords("edges");
      a = g.getLinkedRecords("edges");
      a == null
        ? (b = e)
        : e == null
        ? (b = a)
        : (b = c("mergeCommentEdgesSortedByTimestampInVideo")(a, e));
      g.setLinkedRecords((f = b) != null ? f : [], "edges");
    }
    function b(a, b, c) {
      b = d("relay-runtime").getRelayHandleKey(
        "video_timestamped_comments",
        b,
        null
      );
      return a.getLinkedRecord(b, c);
    }
    function e(a, b) {
      var d = a.getLinkedRecords("edges");
      if (!d) {
        a.setLinkedRecords([b], "edges");
        return;
      }
      d = c("mergeCommentEdgesSortedByTimestampInVideo")(d, [b]);
      a.setLinkedRecords((b = d) != null ? b : [], "edges");
      return;
    }
    g.update = a;
    g.getConnection = b;
    g.insertEdge = e;
  },
  98
);
__d(
  "cometHandlerProvider",
  [
    "BizKitNotificationsThinClientConnectionHandler",
    "CometNewsFeedConnectionHandler",
    "CometNotificationsThinClientConnectionHandler",
    "PinnedCommentEventsConnectionHandler",
    "UFI2CommentsConnectionHandler",
    "VideoTimestampedCommentsConnectionHandler",
    "relay-runtime",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      switch (a) {
        case "connection":
          return d("relay-runtime").ConnectionHandler;
        case "video_timestamped_comments":
          return d("VideoTimestampedCommentsConnectionHandler");
        case "pinned_comment_events":
          return d("PinnedCommentEventsConnectionHandler");
        case "ufi2_comments":
          return d("UFI2CommentsConnectionHandler");
        case "comet_news_feed":
          return d("CometNewsFeedConnectionHandler");
        case "comet_notifications_thin_client":
          return d("CometNotificationsThinClientConnectionHandler");
        case "bizkit_notifications_thin_client":
          return d("BizKitNotificationsThinClientConnectionHandler");
        case "deleteRecord":
          return d("relay-runtime").MutationHandlers.DeleteRecordHandler;
        case "appendEdge":
          return d("relay-runtime").MutationHandlers.AppendEdgeHandler;
        case "prependEdge":
          return d("relay-runtime").MutationHandlers.PrependEdgeHandler;
        case "deleteEdge":
          return d("relay-runtime").MutationHandlers.DeleteEdgeHandler;
        case "appendNode":
          return d("relay-runtime").MutationHandlers.AppendNodeHandler;
        case "prependNode":
          return d("relay-runtime").MutationHandlers.PrependNodeHandler;
      }
      throw c("unrecoverableViolation")(
        "RelayCometEnvironment: No handler defined for `" + a + "`.",
        "comet_ui"
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometRelayFlightEventLogger",
  ["InteractionTracing"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = new Map();
    function a(a) {
      a.name === "execute.start" &&
        a.params.name === "MarketplacePDPContainerQuery" &&
        h.set(a.executeId, {
          totalDuration: 0,
          totalModuleDuration: 0,
          totalPayloadDuration: 0,
        });
      if (a.executeId != null && !h.has(a.executeId)) return;
      if (a.name === "execute.next") {
        var b = h.get(a.executeId);
        b &&
          ((b.totalDuration += a.duration),
          (b.totalPayloadDuration += a.duration));
      }
      if (a.name === "execute.async.module") {
        b = h.get(a.executeId);
        b &&
          ((b.totalDuration += a.duration),
          (b.totalModuleDuration += a.duration));
      }
      if (a.name === "execute.complete") {
        b = h.get(a.executeId);
        if (b) {
          var d = b.totalDuration,
            e = b.totalModuleDuration,
            f = b.totalPayloadDuration;
          c("InteractionTracing")
            .getPendingInteractions()
            .forEach(function (a) {
              a.addAnnotationInt(
                "MarketplacePDPContainerQueryModuleProcessingSuccessDuration",
                e
              ),
                a.addAnnotationInt(
                  "MarketplacePDPContainerQueryPayloadProcessingSuccessDuration",
                  f
                ),
                a.addAnnotationInt(
                  "MarketplacePDPContainerQueryRelayProcessingSuccessDuration",
                  d
                );
            });
        }
        h["delete"](a.executeId);
      }
      a.name === "execute.error" && h["delete"](a.executeId);
    }
    g.log = a;
  },
  98
);
__d(
  "CometRelayPerfStoreCommon",
  ["performanceNow", "setTimeout"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 5 * 6e4,
      i = {},
      j = {},
      k = {};
    function a(a) {
      if (a.name === "network.start") {
        var b = {
          flushes: [],
          hasteResponseLogEvents: [],
          isPreloaded: !1,
          name: a.params.name,
          start: c("performanceNow")(),
        };
        j[a.networkRequestId] = b;
        i[a.params.name] = b;
        c("setTimeout")(function () {
          delete j[a.networkRequestId], b && delete i[b.name];
        }, h);
      } else if (a.name === "network.next") {
        var d = j[a.networkRequestId];
        if (d) {
          var e = a.response,
            f = function (a) {
              d.flushes.push({
                label: (a = a.label) != null ? a : "root",
                time: c("performanceNow")(),
              });
            };
          e instanceof Array ? e.forEach(f) : f(e);
        }
      } else if (a.name === "network.complete") {
        f = j[a.networkRequestId];
        f && (f.end = c("performanceNow")());
      } else if (a.name === "queryresource.fetch") {
        if (a.operation.root.node.name != null) {
          e = a.operation.root.node.name;
          f = i[e];
          f != null &&
            ((k[a.resourceID] = f),
            c("setTimeout")(function () {
              delete k[a.resourceID];
            }, h));
        }
      } else if (a.name === "queryresource.retain") {
        e = k[a.resourceID];
        if (e != null) {
          f = a.profilerContext;
          f && f.retainQuery && f.retainQuery(e);
        }
      } else if (a.name === "network.info") {
        f = a.info;
        if (
          f != null &&
          typeof f === "object" &&
          Object.prototype.hasOwnProperty.call(f, "prefetched")
        ) {
          e = j[a.networkRequestId];
          e && ((e.start = 0), (e.isPreloaded = !0));
        }
        if (
          f != null &&
          typeof f === "object" &&
          "srPayloadStats" in f &&
          f.srPayloadStats != null &&
          typeof f.srPayloadStats === "object"
        ) {
          e = j[a.networkRequestId];
          e && e.hasteResponseLogEvents.push(f.srPayloadStats);
        }
      } else if (a.name === "entrypoint.root.consume") {
        e = a.profilerContext;
        e &&
          typeof e.consumeBootload === "function" &&
          e.consumeBootload(a.rootModuleID);
      }
    }
    g.log = a;
  },
  98
);
__d(
  "CometRelayPerfStore",
  ["CometRelayPerfStoreCommon", "ExecutionEnvironment"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      if (!c("ExecutionEnvironment").canUseDOM) return;
      d("CometRelayPerfStoreCommon").log(a);
    }
    g.log = a;
  },
  98
);
__d(
  "OzSystemicRiskUtils",
  ["oz-player/networks/OzBandwidthUtils"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 50;
    function i(a, b, c) {
      a = d(
        "oz-player/networks/OzBandwidthUtils"
      ).getEstimatedRequestTimeToLastByteMs(a, b, c);
      return (b / a) * 8e3;
    }
    function a(a, b, c, d) {
      a = a * b;
      b = (a * c) / 8e3;
      c = i(d, b, h);
      return a < c;
    }
    function j(a, b, c, d) {
      if (a > 0) return c <= a;
      return d != null && d > 0 ? d <= b : !1;
    }
    function b(a) {
      var b = a.bandwidthDiagnostics,
        c = a.bitrate,
        d = a.bufferAhead,
        e = a.config,
        f = a.hasMadeInitialDecision,
        g = a.initialRiskFactor,
        k = a.lowMosResolution,
        l = a.minWatchableMos,
        m = a.previousMos,
        n = a.previousResolution,
        o = a.remainingVideoDurationMs;
      a = a.segmentFetchRangeDurationMs;
      c = (c * a) / 8e3;
      a = i(
        b,
        c,
        e.getNumber("systemic_risk_abr_high_estimate_confidence", 52)
      );
      b = i(b, c, h);
      c = j(k, l, n, m);
      k = 1;
      c || (k = b / a);
      l = 1;
      b = e.getNumber("systemic_risk_abr_document_hidden_risk_factor", 0);
      b > 0 && document.hidden ? (l = b) : !f && !c && (l = g);
      a =
        l *
        (c
          ? e.getNumber("systemic_risk_abr_low_mos_risk_factor", 1.3)
          : e.getNumber("systemic_risk_abr_risk_factor", 1.75));
      b = (o - d * 1e3) / o;
      f = a * k;
      g = f * b;
      l = Math.max(g, 1);
      return {
        bandwidth: k,
        buffer: b,
        encoding: a,
        lowMos: c,
        multiplier: l,
        previousMos: m,
        previousResolution: n,
      };
    }
    g.getBandwidthEstimateForRequest = i;
    g.isEffectiveBitrateBelowBandwidthEstimate = a;
    g.getRiskFactorsForRepresentation = b;
  },
  98
);
__d(
  "CometDASHPrefetchCache",
  [
    "ConstUriUtils",
    "MosUtils",
    "OzSystemicRiskUtils",
    "clearTimeout",
    "oz-player/configs/OzGlobalConfig",
    "oz-player/networks/OzBandwidthEstimator",
    "oz-player/parsers/getMIMECodecs",
    "setTimeout",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 6e4,
      i = 2e3,
      j = 500;
    a = (function () {
      function a() {
        this.$1 = new Map();
      }
      var b = a.prototype;
      b.fetch = function (a) {
        this.$1.size === 0 && (this.$2(a), this.$3(a));
      };
      b.clear = function () {
        var a = this;
        this.$1.forEach(function (b, c) {
          a.$4(c);
        });
        this.$1.clear();
      };
      b.hasCacheValue = function (a) {
        return this.$1.has(a);
      };
      b.getCacheValue = function (a) {
        var b = this.$1.get(a);
        b && (this.$4(a), this.$1["delete"](a));
        return b == null ? void 0 : b.request;
      };
      b.getCachedRepresentations = function () {
        var a = [];
        this.$1.forEach(function (b) {
          b = b.representationID;
          a.indexOf(b) === -1 && a.push(b);
        });
        return a;
      };
      b.$4 = function (a) {
        a = this.$1.get(a);
        a && a.cancelTimeoutID != null && c("clearTimeout")(a.cancelTimeoutID);
      };
      b.$3 = function (a) {
        a = a.find(function (a) {
          return a.mimeType.indexOf("audio") > -1;
        });
        if (a == null) return;
        this.$5(a);
      };
      b.$2 = function (a) {
        a = a.filter(function (a) {
          return a.mimeType.indexOf("video") > -1;
        });
        if (a.length === 0) return;
        var b = a[0];
        a.sort(function (a, b) {
          return a.bandwidth - b.bandwidth;
        });
        a = this.$6(a);
        if (a.length === 0) return;
        var e = c(
          "oz-player/networks/OzBandwidthEstimator"
        ).getBandwidthDiagnostics(c("oz-player/configs/OzGlobalConfig"));
        if (e == null) {
          this.$5(b);
          return;
        }
        b = null;
        for (var f = 0; f < a.length; f++) {
          var g = a[Math.max(f - 1, 0)],
            k = Math.min(g.height, g.width),
            l = null,
            m = c("oz-player/configs/OzGlobalConfig").getNumber(
              "systemic_risk_abr_prefetch_low_mos_resolution",
              0
            );
          if (
            c("oz-player/configs/OzGlobalConfig").getBool(
              "systemic_risk_abr_parse_prefetch_mos",
              !1
            )
          ) {
            g = d("MosUtils").parsePlaybackMos(g.playbackResolutionMOS);
            g != null && ((l = d("MosUtils").getMosValue(g, j)), (m = 0));
          }
          g = d("OzSystemicRiskUtils").getRiskFactorsForRepresentation({
            bandwidthDiagnostics: e,
            bitrate: a[f].bandwidth,
            bufferAhead: 0,
            config: c("oz-player/configs/OzGlobalConfig"),
            hasMadeInitialDecision: !1,
            initialRiskFactor: c("oz-player/configs/OzGlobalConfig").getNumber(
              "systemic_risk_abr_prefetch_initial_risk_factor",
              1
            ),
            lowMosResolution: m,
            minWatchableMos: c("oz-player/configs/OzGlobalConfig").getNumber(
              "systemic_risk_abr_min_watchable_mos",
              0
            ),
            previousMos: l,
            previousResolution: k,
            remainingVideoDurationMs: h,
            segmentFetchRangeDurationMs: i,
          });
          m = g.multiplier;
          if (isNaN(m)) break;
          l = d("OzSystemicRiskUtils").isEffectiveBitrateBelowBandwidthEstimate(
            a[f].bandwidth,
            m,
            i,
            e
          );
          if (l) b = a[f];
          else break;
        }
        g = (k = b) != null ? k : a[0];
        this.$5(g);
      };
      b.$5 = function (a) {
        var b = this;
        a.segments.forEach(function (c) {
          c = b.$7(a.baseURL, c);
          if (c == null) return;
          var d = window.fetch(c).then(function (a) {
            return { initiator: "FETCH", response: a };
          });
          d = d["catch"](function () {});
          b.$8(c, { representationID: a.representationID, request: d });
        });
      };
      b.$8 = function (a, b) {
        var d = this;
        this.$4(a);
        var e = c("oz-player/configs/OzGlobalConfig").getNumber(
            "prefetch_retention_duration_ms",
            0
          ),
          f = null;
        e > 0 &&
          (f = c("setTimeout")(function () {
            d.$1["delete"](a);
          }, e));
        this.$1.set(a, babelHelpers["extends"]({}, b, { cancelTimeoutID: f }));
      };
      b.$7 = function (a, b) {
        return (a = d("ConstUriUtils").getUri(a)) == null
          ? void 0
          : (a = a.addQueryParam("bytestart", b.start)) == null
          ? void 0
          : (a = a.addQueryParam("byteend", b.end)) == null
          ? void 0
          : a.toString();
      };
      b.$6 = function (a) {
        var b;
        a = a.filter(function (a) {
          var b;
          return (b = window.MediaSource) == null
            ? void 0
            : b.isTypeSupported(
                c("oz-player/parsers/getMIMECodecs")(a.mimeType, a.codecs)
              );
        });
        var d = (b = window.devicePixelRatio) != null ? b : 1,
          e = c("oz-player/configs/OzGlobalConfig").getNumber(
            "prefetch_resolution_threshold",
            0
          );
        e === 0 && (e = Infinity);
        b = a.filter(function (a) {
          a = Math.min(a.width, a.height);
          return a / d <= e;
        });
        return b.length > 0 ? b : a.length > 0 ? [a[0]] : [];
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "RunComet",
  [
    "ExecutionEnvironment",
    "FBLogger",
    "createCancelableFunction",
    "emptyFunction",
    "recoverableViolation",
    "setTimeout",
    "unexpectedUseInComet",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = {},
      i = !1,
      j = !1,
      k = { remove: c("emptyFunction") };
    function l(a, b) {
      h.unload == null &&
        ((h.unload = []),
        (h.afterunload = []),
        c("ExecutionEnvironment").canUseEventListeners &&
          window.addEventListener("unload", function () {
            o("unload"), o("afterunload");
          })),
        h[a] == null
          ? (c("recoverableViolation")(
              "EVENT_LISTENERS." +
                a +
                " wasn't initialized but should have been!",
              "comet_infra"
            ),
            (h[a] = [b]))
          : h[a].push(b);
    }
    function m(a) {
      a ||
        c("recoverableViolation")(
          "Undefined event listener handler is not allowed",
          "comet_infra"
        );
      return c("createCancelableFunction")(
        (a = a) != null ? a : c("emptyFunction")
      );
    }
    function n(a) {
      return {
        remove: function () {
          a.cancel();
        },
      };
    }
    function o(a) {
      var b = h[a] || [];
      for (var d = 0; d < b.length; d++) {
        var e = b[d];
        try {
          e();
        } catch (b) {
          c("FBLogger")("comet_infra")
            .catching(b)
            .mustfix(
              "Hit an error while executing '" + a + "' event listeners."
            );
        }
      }
      h[a] = [];
    }
    function p(a) {
      if (i) {
        a();
        return n(m(c("emptyFunction")));
      }
      a = m(a);
      h.domcontentloaded == null
        ? ((h.domcontentloaded = [a]),
          c("ExecutionEnvironment").canUseEventListeners &&
            window.addEventListener(
              "DOMContentLoaded",
              function () {
                o("domcontentloaded");
              },
              !0
            ))
        : h.domcontentloaded.push(a);
      return n(a);
    }
    function a(a) {
      a = m(a);
      l("afterunload", a);
      return n(a);
    }
    function b(a) {
      a = m(a);
      h.load == null
        ? ((h.load = [a]),
          c("ExecutionEnvironment").canUseEventListeners &&
            window.addEventListener("load", function () {
              o("domcontentloaded"), o("load");
            }))
        : h.load.push(a);
      j &&
        c("setTimeout")(function () {
          o("domcontentloaded"), o("load");
        }, 0);
      return n(a);
    }
    function d(a) {
      a = m(a);
      l("unload", a);
      return n(a);
    }
    function e(a, b) {
      if (b !== !1) {
        b =
          "Run.onBeforeUnload was called with include_quickling_events as true or undefined, but this is not valid in Comet.";
        c("FBLogger")("comet_infra").blameToPreviousFrame().mustfix(b);
      }
      b = m(a);
      h.beforeunload == null &&
        ((h.beforeunload = []),
        c("ExecutionEnvironment").canUseEventListeners &&
          window.addEventListener("beforeunload", function (a) {
            var b = h.beforeunload || [];
            for (
              var b = b,
                d = Array.isArray(b),
                e = 0,
                b = d
                  ? b
                  : b[
                      typeof Symbol === "function"
                        ? Symbol.iterator
                        : "@@iterator"
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
              var g = void 0;
              try {
                g = f();
              } catch (a) {
                c("FBLogger")("comet_infra")
                  .catching(a)
                  .mustfix(
                    "Hit an error while executing onBeforeUnload event listeners."
                  );
              }
              if (g !== void 0) {
                g != null && g.body != null && (g = g.body);
                a.preventDefault();
                a.returnValue = g;
                return g;
              }
            }
          }));
      h.beforeunload.push(b);
      return n(b);
    }
    var q = e;
    function f(a) {
      c("unexpectedUseInComet")("Run.onLeave");
      return k;
    }
    function r(a, b) {
      c("unexpectedUseInComet")("Run.onCleanupOrLeave");
      return k;
    }
    function s(a) {
      c("unexpectedUseInComet")("Run.removeHook");
    }
    function t() {
      document.readyState === "loading"
        ? p(function () {
            i = !0;
          })
        : (i = !0);
      if (document.readyState === "complete") j = !0;
      else {
        var a = window.onload;
        window.onload = function () {
          a && a(), (j = !0);
        };
      }
    }
    c("ExecutionEnvironment").canUseDOM && t();
    t = null;
    var u = null;
    g.onLoad = p;
    g.onAfterUnload = a;
    g.onAfterLoad = b;
    g.onUnload = d;
    g.onBeforeUnload = e;
    g.maybeOnBeforeUnload = q;
    g.onLeave = f;
    g.onCleanupOrLeave = r;
    g.__removeHook = s;
    g.__domContentCallback = t;
    g.__onloadCallback = u;
  },
  98
);
__d(
  "CometDASHPrefetchCacheManager",
  ["CometDASHPrefetchCache", "RunComet", "oz-player/configs/OzGlobalConfig"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a() {
        var a = this;
        this.$1 = new Map();
        c("oz-player/configs/OzGlobalConfig").getBool(
          "clear_prefetch_on_unload",
          !1
        ) &&
          d("RunComet").onUnload(function () {
            a.$1.forEach(function (a) {
              a.clear();
            });
          });
      }
      var b = a.prototype;
      b.fetch = function (a, b) {
        var d = this.$1.get(a),
          e = c("oz-player/configs/OzGlobalConfig").getBool(
            "allow_subsequent_prefetch",
            !1
          );
        d ||
          ((d = new (c("CometDASHPrefetchCache"))()),
          this.$1.set(a, d),
          e || d.fetch(b));
        e && d.fetch(b);
      };
      b.get = function (a) {
        return this.$1.get(a);
      };
      return a;
    })();
    b = new a();
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "cometPrefetchVideoDashV2",
  ["CometDASHPrefetchCacheManager"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      if (window.__comet_ssr_is_server_env_DO_NOT_USE === !0) return;
      c("CometDASHPrefetchCacheManager") != null &&
        a != null &&
        Array.isArray(a) &&
        a.forEach(function (a) {
          if (a != null && a.video_id != null) {
            var b = String(a.video_id),
              d = [];
            Array.isArray(a.representations) &&
              a.representations.forEach(function (a) {
                var b = [];
                if (
                  a != null &&
                  Array.isArray(a.segments) &&
                  typeof a.representation_id === "string" &&
                  typeof a.mime_type === "string" &&
                  typeof a.codecs === "string" &&
                  typeof a.bandwidth === "number" &&
                  typeof a.width === "number" &&
                  typeof a.height === "number" &&
                  typeof a.base_url === "string" &&
                  typeof a.playback_resolution_mos === "string"
                ) {
                  var c = {
                    bandwidth: a.bandwidth,
                    baseURL: a.base_url,
                    codecs: a.codecs,
                    height: a.height,
                    mimeType: a.mime_type,
                    playbackResolutionMOS: a.playback_resolution_mos,
                    representationID: a.representation_id,
                    segments: [],
                    width: a.width,
                  };
                  a.segments.forEach(function (a) {
                    a != null &&
                      typeof a.start === "number" &&
                      typeof a.end === "number" &&
                      b.push({ end: a.end, start: a.start });
                  });
                  b.length > 0 && ((c.segments = b), d.push(c));
                }
              });
            d.length > 0 && c("CometDASHPrefetchCacheManager").fetch(b, d);
          }
        });
    }
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "SilenceableErrorMessageUtils",
  ["killswitch"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      return c("killswitch")("COMET_HIDE_SILENT_ERROR_MESSAGE")
        ? !1
        : a.is_silent === !0;
    }
    function i(a) {
      if (typeof a === "object" && a instanceof Error) {
        var b = a.description,
          c = a.message,
          d = a.source;
        return {
          code: d == null ? void 0 : d.code,
          is_silent: d == null ? void 0 : d.is_silent,
          message: (d = b) != null ? d : c,
          timestamp: Date.now(),
        };
      }
      return {
        is_silent: (b = a.source) == null ? void 0 : b.is_silent,
        message: a.description,
      };
    }
    function a(a, b) {
      var c,
        d = a.description,
        e = a.message,
        f = a.source;
      c =
        (f =
          (c =
            (c =
              f == null
                ? void 0
                : (c = f.exception) == null
                ? void 0
                : c.message) != null
              ? c
              : f == null
              ? void 0
              : f.description) != null
            ? c
            : d) != null
          ? f
          : e;
      h(i(a)) && b(c);
    }
    g.shouldHideErrorMessage = h;
    g.getMetadataFromError = i;
    g.handleSilentError = a;
  },
  98
);
__d(
  "CometRelayErrorHandling",
  ["errorCode", "SilenceableErrorMessageUtils"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i;
    try {
      i = new WeakMap();
    } catch (a) {
      i = null;
    }
    function a(a) {
      var b;
      (b = i) == null ? void 0 : b.set(a, !0);
    }
    function b(a) {
      var b,
        c = a == null ? void 0 : a.source;
      b =
        (b = c == null ? void 0 : c.errorCode) != null
          ? b
          : c == null
          ? void 0
          : c.code;
      if (b === 1357001) return !1;
      return b === 1675030
        ? !0
        : ((c = i) == null ? void 0 : c.get(a)) === !0 ||
            d("SilenceableErrorMessageUtils").shouldHideErrorMessage(
              d("SilenceableErrorMessageUtils").getMetadataFromError(a)
            );
    }
    g.markErrorAsHandled = a;
    g.shouldSkipErrorSideEffects = b;
  },
  98
);
__d(
  "cometWrapWithRetryOnError",
  ["relay-runtime"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      return d("relay-runtime").Observable.create(function (c) {
        var d,
          e = function e() {
            d = a.subscribe({
              complete: c.complete,
              error: function (a) {
                var d = function (b) {
                  c.error((b = b) != null ? b : a);
                };
                d = b(a, e, d);
                d || c.error(a);
              },
              next: c.next,
            });
          };
        e();
        return function () {
          return d.unsubscribe();
        };
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "cometWrapNetworkObservable",
  [
    "CometRelayErrorHandling",
    "cometWrapWithRetryOnError",
    "cr:1196",
    "cr:641",
    "gkx",
    "relay-runtime",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      if (!b("cr:641"))
        return function (a) {
          return a;
        };
      else
        return function (a) {
          return d("relay-runtime").Observable.create(function (e) {
            return h(a).subscribe({
              complete: e.complete,
              error: function (a) {
                var f,
                  g,
                  h,
                  i = e.error(a);
                if (d("CometRelayErrorHandling").shouldSkipErrorSideEffects(a))
                  return i;
                a = a == null ? void 0 : a.source;
                f =
                  (f =
                    (f = a == null ? void 0 : a.errorCode) != null
                      ? f
                      : a == null
                      ? void 0
                      : a.code) != null
                    ? f
                    : a == null
                    ? void 0
                    : a.error;
                g =
                  (g = a == null ? void 0 : a.errorDescription) != null
                    ? g
                    : a == null
                    ? void 0
                    : a.description;
                h =
                  (h = a == null ? void 0 : a.errorSummary) != null
                    ? h
                    : a == null
                    ? void 0
                    : a.summary;
                var j = null;
                if (c("gkx")("2581")) {
                  var k;
                  j =
                    (k = a == null ? void 0 : a.debug_info) != null
                      ? k
                      : a == null
                      ? void 0
                      : a.message;
                  g === j && (j = null);
                }
                f &&
                  h &&
                  g &&
                  b("cr:641")(
                    f,
                    h,
                    g,
                    a == null ? void 0 : a.redirectTo,
                    !0,
                    j
                  );
                return i;
              },
              next: function (a) {
                if (Array.isArray(a))
                  for (
                    var b = a,
                      c = Array.isArray(b),
                      d = 0,
                      b = c
                        ? b
                        : b[
                            typeof Symbol === "function"
                              ? Symbol.iterator
                              : "@@iterator"
                          ]();
                    ;

                  ) {
                    var f;
                    if (c) {
                      if (d >= b.length) break;
                      f = b[d++];
                    } else {
                      d = b.next();
                      if (d.done) break;
                      f = d.value;
                    }
                    f = f;
                    f = i(f);
                    if (f != null) {
                      e.error(f);
                      return;
                    }
                  }
                else {
                  f = i(a);
                  if (f != null) {
                    e.error(f);
                    return;
                  }
                }
                e.next(a);
              },
            });
          });
        };
    }
    function h(a) {
      return !b("cr:1196")
        ? a
        : c("cometWrapWithRetryOnError")(a, b("cr:1196"));
    }
    function i(a) {
      var b = a.data;
      a = Object.prototype.hasOwnProperty.call(a, "errors") ? a.errors : void 0;
      if (Array.isArray(a))
        for (
          var a = a,
            c = Array.isArray(a),
            e = 0,
            a = c
              ? a
              : a[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var f;
          if (c) {
            if (e >= a.length) break;
            f = a[e++];
          } else {
            e = a.next();
            if (e.done) break;
            f = e.value;
          }
          f = f;
          if (
            f != null &&
            typeof f === "object" &&
            (f.severity === "CRITICAL" || f.severity === "ERROR") &&
            Array.isArray(f.path) &&
            f.path.length === 3 &&
            f.path[0] === "viewer" &&
            f.path[1] === "news_feed" &&
            f.path[2] === "edges"
          ) {
            f =
              b == null
                ? void 0
                : (f = b.viewer) == null
                ? void 0
                : f.news_feed;
            var g = f == null ? void 0 : f.edges;
            if (
              f != null &&
              (g == null || (Array.isArray(g) && g.length === 0))
            )
              return d("relay-runtime").RelayError.create(
                "CometNewsFeed",
                "Error evaluating Comet News Feed, edges cannot be resolved."
              );
          }
        }
    }
    g["default"] = a;
  },
  98
);
__d(
  "createCometStore",
  [
    "CometRelayConfig",
    "RelayFBGCScheduler",
    "RelayFBOperationLoader",
    "cr:2928",
    "gkx",
    "relayFBGetDataID",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = c("gkx")("1151941");
    function a(a) {
      var e = new (b("cr:2928").RecordSource)();
      e = new (b("cr:2928").Store)(e, {
        gcReleaseBufferSize: d("CometRelayConfig").gc_release_buffer_size,
        gcScheduler: c("RelayFBGCScheduler"),
        getDataID: c("relayFBGetDataID"),
        log: a,
        operationLoader: c("RelayFBOperationLoader"),
        queryCacheExpirationTime: void 0,
      });
      h || e.holdGC();
      return e;
    }
    g["default"] = a;
  },
  98
);
__d(
  "createCometRelayEnvironmentConfig",
  [
    "ActorURIConfig",
    "CometMissingFieldHandlers",
    "CometRelayFlightEventLogger",
    "CometRelayPerfStore",
    "CometRootInitServerFlag",
    "RelayAPIConfig",
    "RelayFBOperationLoader",
    "RelayRequiredFieldLogger",
    "cometHandlerProvider",
    "cometPrefetchVideoDashV2",
    "cometWrapNetworkObservable",
    "cr:1121434",
    "cr:1445039",
    "cr:1467370",
    "cr:2701",
    "cr:5655",
    "cr:851",
    "createCometStore",
    "createRelayFBNetwork",
    "createRelayFBNetworkFetch",
    "createRelayFBSubscribeFunction",
    "liveQueryFetch",
    "liveQueryFetchWithWWWInitial",
    "relay-runtime",
    "relayFBGetDataID",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a, b) {
      var d = c("RelayAPIConfig").actorID === a && b == null ? " DEFAULT" : "";
      b = b == null ? "" : " - " + b;
      return "CometRelayEnvironment (" + String(a) + b + ")" + d;
    }
    function i(a, d) {
      d = {
        actorID: a,
        batchResponseChunks: !0,
        getAdditionalData: function () {
          var b = {};
          a != null && (b[c("ActorURIConfig").PARAMETER_ACTOR] = a);
          c("RelayAPIConfig").useXController === !1 &&
            c("RelayAPIConfig").accessToken !== "" &&
            (b.access_token = c("RelayAPIConfig").accessToken);
          return b;
        },
        graphURI: d,
        liveQueryFetchFn: c("liveQueryFetch"),
        liveQueryFetchWithWWWInitialFn: c("liveQueryFetchWithWWWInitial"),
        wrapObservableFn: c("cometWrapNetworkObservable")(),
      };
      d =
        b("cr:2701") != null
          ? b("cr:2701")(
              d,
              function (a, b) {
                return c("RelayAPIConfig").workRequestTaggingProduct;
              },
              c("RelayAPIConfig").encryptionKeyParams
            )
          : c("createRelayFBNetworkFetch")(d);
      return c("createRelayFBNetwork")(
        d,
        c("createRelayFBSubscribeFunction")({ actorID: a }),
        null,
        c("cometPrefetchVideoDashV2")
      );
    }
    function j(a) {
      return b("cr:1445039") != null
        ? b("cr:1445039").create(String(a), 2e3)
        : null;
    }
    function k(a) {
      var c = b("cr:1121434") != null ? b("cr:1121434")() : null;
      return function (e) {
        c && c(e),
          a && a.log(e),
          b("cr:5655") && b("cr:5655").log(e),
          d("CometRelayPerfStore").log(e),
          d("CometRelayFlightEventLogger").log(e),
          b("cr:851") && b("cr:851").log(e);
      };
    }
    function l(a) {
      return a != null
        ? function (b) {
            return a.log(b);
          }
        : null;
    }
    function a(a) {
      var e = a.actorID,
        f = a.actorEnvironmentKey;
      a = a.graphURI;
      a = a === void 0 ? void 0 : a;
      var g = j(e);
      return {
        UNSTABLE_defaultRenderPolicy: "partial",
        actorID: e,
        configName: h(e, f),
        getDataID: c("relayFBGetDataID"),
        handlerProvider: c("cometHandlerProvider"),
        isServer: d("CometRootInitServerFlag").isServerEnvironment(),
        log: k(g),
        missingFieldHandlers: c("CometMissingFieldHandlers"),
        network: i(e, a),
        operationLoader: c("RelayFBOperationLoader"),
        operationTracker: new (d(
          "relay-runtime"
        ).__internal.OperationTracker)(),
        requiredFieldLogger: d("RelayRequiredFieldLogger").create(),
        scheduler: b("cr:1467370"),
        store: c("createCometStore")(l(g)),
      };
    }
    g.createCometEnvironmentConfigName = h;
    g.createCometNetwork = i;
    g.createCometRelayEventLogger = j;
    g.createCometEnvironmentLogFn = k;
    g.createCometStoreLoggerFn = l;
    g.createCometRelayEnvironmentConfig = a;
  },
  98
);
__d(
  "cometCreateMulitActorEnvironmentConfig",
  [
    "CometMissingFieldHandlers",
    "CometRootInitServerFlag",
    "RelayFBOperationLoader",
    "RelayRequiredFieldLogger",
    "cometHandlerProvider",
    "cr:1467370",
    "createCometRelayEnvironmentConfig",
    "createCometStore",
    "relayFBGetDataID",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, e, f) {
      f === void 0 && (f = void 0);
      var g = d(
        "createCometRelayEnvironmentConfig"
      ).createCometRelayEventLogger(a);
      return {
        createConfigNameForActor: function (a) {
          return (
            d(
              "createCometRelayEnvironmentConfig"
            ).createCometEnvironmentConfigName(String(a), e) + " (Multi Actor)"
          );
        },
        createNetworkForActor: function (a) {
          return d("createCometRelayEnvironmentConfig").createCometNetwork(
            String(a),
            f
          );
        },
        createStoreForActor: function () {
          return c("createCometStore")(
            d("createCometRelayEnvironmentConfig").createCometStoreLoggerFn(g)
          );
        },
        getDataID: c("relayFBGetDataID"),
        handlerProvider: c("cometHandlerProvider"),
        isServer: d("CometRootInitServerFlag").isServerEnvironment(),
        logFn: d(
          "createCometRelayEnvironmentConfig"
        ).createCometEnvironmentLogFn(g),
        missingFieldHandlers: c("CometMissingFieldHandlers"),
        operationLoader: c("RelayFBOperationLoader"),
        requiredFieldLogger: d("RelayRequiredFieldLogger").create(),
        scheduler: b("cr:1467370"),
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "relay-runtime/multi-actor-environment/ActorSpecificEnvironment",
  [
    "relay-runtime/network/wrapNetworkWithLogObserver",
    "relay-runtime/store/RelayOperationTracker",
    "relay-runtime/store/RelayPublishQueue",
    "relay-runtime/store/StoreInspector",
    "relay-runtime/store/defaultGetDataID",
    "relay-runtime/util/registerEnvironmentWithDevTools",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a) {
        var c = this;
        this.configName = a.configName;
        this.actorIdentifier = a.actorIdentifier;
        this.multiActorEnvironment = a.multiActorEnvironment;
        this.__log = a.logFn;
        this.requiredFieldLogger = a.requiredFieldLogger;
        this.$3 = new (b("relay-runtime/store/RelayOperationTracker"))();
        this.$5 = a.store;
        this.$2 = b("relay-runtime/network/wrapNetworkWithLogObserver")(
          this,
          a.network
        );
        this.$4 = new (b("relay-runtime/store/RelayPublishQueue"))(
          a.store,
          a.handlerProvider,
          b("relay-runtime/store/defaultGetDataID"),
          a.missingFieldHandlers
        );
        this.$1 = a.defaultRenderPolicy;
        this.options = { actorID: this.actorIdentifier };
        this["@@RelayModernEnvironment"] = !0;
        b("relay-runtime/util/registerEnvironmentWithDevTools")(this);
      }
      var c = a.prototype;
      c.getPublishQueue = function () {
        return this.$4;
      };
      c.UNSTABLE_getDefaultRenderPolicy = function () {
        return this.$1;
      };
      c.applyMutation = function (a) {
        return this.multiActorEnvironment.applyMutation(this, a);
      };
      c.applyUpdate = function (a) {
        return this.multiActorEnvironment.applyUpdate(this, a);
      };
      c.revertUpdate = function (a) {
        return this.multiActorEnvironment.revertUpdate(this, a);
      };
      c.replaceUpdate = function (a, b) {
        return this.multiActorEnvironment.replaceUpdate(this, a, b);
      };
      c.check = function (a) {
        return this.multiActorEnvironment.check(this, a);
      };
      c.subscribe = function (a, b) {
        return this.multiActorEnvironment.subscribe(this, a, b);
      };
      c.retain = function (a) {
        return this.multiActorEnvironment.retain(this, a);
      };
      c.commitUpdate = function (a) {
        return this.multiActorEnvironment.commitUpdate(this, a);
      };
      c.commitPayload = function (a, b) {
        return this.multiActorEnvironment.commitPayload(this, a, b);
      };
      c.getNetwork = function () {
        return this.$2;
      };
      c.getStore = function () {
        return this.$5;
      };
      c.getOperationTracker = function () {
        return this.$3;
      };
      c.getScheduler = function () {
        return this.multiActorEnvironment.getScheduler();
      };
      c.lookup = function (a) {
        return this.multiActorEnvironment.lookup(this, a);
      };
      c.execute = function (a) {
        return this.multiActorEnvironment.execute(this, a);
      };
      c.executeSubscription = function (a) {
        return this.multiActorEnvironment.executeSubscription(this, a);
      };
      c.executeMutation = function (a) {
        return this.multiActorEnvironment.executeMutation(this, a);
      };
      c.executeWithSource = function (a) {
        return this.multiActorEnvironment.executeWithSource(this, a);
      };
      c.isRequestActive = function (a) {
        return this.multiActorEnvironment.isRequestActive(this, a);
      };
      c.isServer = function () {
        return this.multiActorEnvironment.isServer();
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "relay-runtime/multi-actor-environment/MultiActorEnvironment",
  [
    "relay-runtime/handlers/RelayDefaultHandlerProvider",
    "relay-runtime/multi-actor-environment/ActorSpecificEnvironment",
    "relay-runtime/network/RelayObservable",
    "relay-runtime/store/OperationExecutor",
    "relay-runtime/store/RelayModernStore",
    "relay-runtime/store/RelayRecordSource",
    "relay-runtime/store/defaultGetDataID",
    "relay-runtime/store/defaultRequiredFieldLogger",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a) {
        var c;
        this.$1 = new Map();
        this.$12 = a.operationLoader;
        this.$3 = a.createNetworkForActor;
        this.$14 = a.scheduler;
        this.$6 =
          (c = a.getDataID) != null
            ? c
            : b("relay-runtime/store/defaultGetDataID");
        this.$7 = a.handlerProvider
          ? a.handlerProvider
          : b("relay-runtime/handlers/RelayDefaultHandlerProvider");
        this.$9 = (c = a.logFn) != null ? c : g;
        this.$11 = new Map();
        this.$13 =
          (c = a.requiredFieldLogger) != null
            ? c
            : b("relay-runtime/store/defaultRequiredFieldLogger");
        this.$15 = a.shouldProcessClientComponents;
        this.$16 = (c = a.treatMissingFieldsAsNull) != null ? c : !1;
        this.$8 = (c = a.isServer) != null ? c : !1;
        this.$10 = (c = a.missingFieldHandlers) != null ? c : [];
        this.$4 = a.createStoreForActor;
        this.$2 = a.createConfigNameForActor;
        this.$5 = (c = a.defaultRenderPolicy) != null ? c : "partial";
      }
      var c = a.prototype;
      c.forActor = function (a) {
        var c = this.$1.get(a);
        if (c == null) {
          var d = new (b(
            "relay-runtime/multi-actor-environment/ActorSpecificEnvironment"
          ))({
            configName: this.$2 ? this.$2(a) : null,
            actorIdentifier: a,
            multiActorEnvironment: this,
            logFn: this.$9,
            requiredFieldLogger: this.$13,
            store:
              this.$4 != null
                ? this.$4(a)
                : new (b("relay-runtime/store/RelayModernStore"))(
                    b("relay-runtime/store/RelayRecordSource").create()
                  ),
            network: this.$3(a),
            handlerProvider: this.$7,
            defaultRenderPolicy: this.$5,
            missingFieldHandlers: this.$10,
          });
          this.$1.set(a, d);
          return d;
        } else return c;
      };
      c.check = function (a, c) {
        var d = this;
        return this.$10 == null || this.$10.length === 0
          ? a.getStore().check(c, {
              handlers: [],
              defaultActorIdentifier: a.actorIdentifier,
              getSourceForActor: function (a) {
                return d.forActor(a).getStore().getSource();
              },
              getTargetForActor: function () {
                return b("relay-runtime/store/RelayRecordSource").create();
              },
            })
          : this.$17(a, c, this.$10);
      };
      c.$17 = function (a, c, d) {
        var e = this,
          f = new Map([
            [
              a.actorIdentifier,
              b("relay-runtime/store/RelayRecordSource").create(),
            ],
          ]);
        c = a.getStore().check(c, {
          handlers: d,
          defaultActorIdentifier: a.actorIdentifier,
          getSourceForActor: function (a) {
            return e.forActor(a).getStore().getSource();
          },
          getTargetForActor: function (a) {
            var c = f.get(a);
            c == null &&
              ((c = b("relay-runtime/store/RelayRecordSource").create()),
              f.set(a, c));
            return c;
          },
        });
        a = function () {
          if (h) {
            if (i >= g.length) return "break";
            d = g[i++];
          } else {
            i = g.next();
            if (i.done) return "break";
            d = i.value;
          }
          var a = d,
            b = a[0],
            c = a[1];
          c.size() > 0 &&
            e.$18(function () {
              var a = e.forActor(b).getPublishQueue();
              a.commitSource(c);
              a.run();
            });
        };
        for (
          var g = f,
            h = Array.isArray(g),
            i = 0,
            g = h
              ? g
              : g[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var j = a();
          if (j === "break") break;
        }
        return c;
      };
      c.subscribe = function (a, b, c) {
        return a.getStore().subscribe(b, c);
      };
      c.retain = function (a, b) {
        return a.getStore().retain(b);
      };
      c.applyUpdate = function (a, b) {
        var c = this,
          d = a.getPublishQueue();
        a = function () {
          c.$18(function () {
            d.revertUpdate(b), d.run();
          });
        };
        this.$18(function () {
          d.applyUpdate(b), d.run();
        });
        return { dispose: a };
      };
      c.revertUpdate = function (a, b) {
        var c = a.getPublishQueue();
        this.$18(function () {
          c.revertUpdate(b), c.run();
        });
      };
      c.replaceUpdate = function (a, b, c) {
        var d = a.getPublishQueue();
        this.$18(function () {
          d.revertUpdate(b), d.applyUpdate(c), d.run();
        });
      };
      c.applyMutation = function (a, c) {
        var d = this.$19(a, {
          createSource: function () {
            return b("relay-runtime/network/RelayObservable").create(function (
              a
            ) {});
          },
          isClientPayload: !1,
          operation: c.operation,
          optimisticConfig: c,
          updater: null,
        }).subscribe({});
        return {
          dispose: function () {
            return d.unsubscribe();
          },
        };
      };
      c.commitUpdate = function (a, b) {
        var c = a.getPublishQueue();
        this.$18(function () {
          c.commitUpdate(b), c.run();
        });
      };
      c.commitPayload = function (a, c, d) {
        this.$19(a, {
          createSource: function () {
            return b("relay-runtime/network/RelayObservable").from({ data: d });
          },
          isClientPayload: !0,
          operation: c,
          optimisticConfig: null,
          updater: null,
        }).subscribe({});
      };
      c.lookup = function (a, b) {
        return a.getStore().lookup(b);
      };
      c.execute = function (a, b) {
        var c = b.operation;
        return this.$19(a, {
          createSource: function () {
            return a
              .getNetwork()
              .execute(
                c.request.node.params,
                c.request.variables,
                c.request.cacheConfig || {},
                null
              );
          },
          isClientPayload: !1,
          operation: c,
          optimisticConfig: null,
          updater: null,
        });
      };
      c.executeSubscription = function (a, b) {
        var c = b.operation;
        b = b.updater;
        return this.$19(a, {
          createSource: function () {
            return a
              .getNetwork()
              .execute(
                c.request.node.params,
                c.request.variables,
                c.request.cacheConfig || {},
                null
              );
          },
          isClientPayload: !1,
          operation: c,
          optimisticConfig: null,
          updater: b,
        });
      };
      c.executeMutation = function (a, b) {
        var c = b.operation,
          d = b.optimisticResponse,
          e = b.optimisticUpdater,
          f = b.updater,
          g = b.uploadables,
          h;
        (d || e) && (h = { operation: c, response: d, updater: e });
        return this.$19(a, {
          createSource: function () {
            return a
              .getNetwork()
              .execute(
                c.request.node.params,
                c.request.variables,
                babelHelpers["extends"]({}, c.request.cacheConfig, {
                  force: !0,
                }),
                g
              );
          },
          isClientPayload: !1,
          operation: c,
          optimisticConfig: h,
          updater: f,
        });
      };
      c.executeWithSource = function (a, b) {
        return this.$19(a, {
          createSource: function () {
            return b.source;
          },
          isClientPayload: !1,
          operation: b.operation,
          optimisticConfig: null,
          updater: null,
        });
      };
      c.isRequestActive = function (a, b) {
        a = this.$11.get(b);
        return a === "active";
      };
      c.isServer = function () {
        return this.$8;
      };
      c.$19 = function (a, c) {
        var d = this,
          e = c.createSource,
          f = c.isClientPayload,
          g = c.operation,
          h = c.optimisticConfig,
          i = c.updater;
        return b("relay-runtime/network/RelayObservable").create(function (c) {
          var j = b("relay-runtime/store/OperationExecutor").execute({
            actorIdentifier: a.actorIdentifier,
            getDataID: d.$6,
            isClientPayload: f,
            operation: g,
            operationExecutions: d.$11,
            operationLoader: d.$12,
            operationTracker: a.getOperationTracker(),
            optimisticConfig: h,
            getPublishQueue: function (a) {
              return d.forActor(a).getPublishQueue();
            },
            scheduler: d.$14,
            shouldProcessClientComponents: d.$15,
            sink: c,
            source: e(),
            getStore: function (a) {
              return d.forActor(a).getStore();
            },
            treatMissingFieldsAsNull: d.$16,
            updater: i,
            log: d.$9,
          });
          return function () {
            return j.cancel();
          };
        });
      };
      c.$18 = function (a) {
        var b = this.$14;
        b != null ? b.schedule(a) : a();
      };
      c.commitMultiActorUpdate = function (a) {
        var b = function () {
          if (d) {
            if (e >= c.length) return "break";
            f = c[e++];
          } else {
            e = c.next();
            if (e.done) return "break";
            f = e.value;
          }
          var b = f,
            g = b[0],
            h = b[1];
          h.commitUpdate(function (b) {
            a(g, h, b);
          });
        };
        for (
          var c = this.$1,
            d = Array.isArray(c),
            e = 0,
            c = d
              ? c
              : c[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var f,
            g = b();
          if (g === "break") break;
        }
      };
      c.getScheduler = function () {
        return this.$14;
      };
      return a;
    })();
    function g() {}
    e.exports = a;
  },
  null
);
__d(
  "relay-runtime/multi-actor-environment",
  [
    "relay-runtime/multi-actor-environment/ActorIdentifier",
    "relay-runtime/multi-actor-environment/MultiActorEnvironment",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b(
      "relay-runtime/multi-actor-environment/ActorIdentifier"
    ).getActorIdentifier;
    e.exports = {
      MultiActorEnvironment: b(
        "relay-runtime/multi-actor-environment/MultiActorEnvironment"
      ),
      getActorIdentifier: a,
    };
  },
  null
);
__d(
  "CometRelayMultiActorEnvironment",
  [
    "RelayAPIConfig",
    "cometCreateMulitActorEnvironmentConfig",
    "relay-runtime/multi-actor-environment",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = new Map(),
      i = new (d(
        "relay-runtime/multi-actor-environment"
      ).MultiActorEnvironment)(
        c("cometCreateMulitActorEnvironmentConfig")(c("RelayAPIConfig").actorID)
      );
    function a(a) {
      var b = function (b, c, d) {
        a(String(b), c, d);
      };
      for (
        var c = h.values(),
          d = Array.isArray(c),
          e = 0,
          c = d
            ? c
            : c[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        var f;
        if (d) {
          if (e >= c.length) break;
          f = c[e++];
        } else {
          e = c.next();
          if (e.done) break;
          f = e.value;
        }
        f = f;
        f.commitMultiActorUpdate(b);
      }
      i.commitMultiActorUpdate(b);
    }
    function b(a, b) {
      var e;
      b != null
        ? ((e = h.get(b)),
          e == null &&
            ((e = new (d(
              "relay-runtime/multi-actor-environment"
            ).MultiActorEnvironment)(
              c("cometCreateMulitActorEnvironmentConfig")(
                c("RelayAPIConfig").actorID,
                b
              )
            )),
            h.set(b, e)))
        : (e = i);
      return e.forActor(a);
    }
    g.commitMultiActorUpdate = a;
    g.forActor = b;
  },
  98
);
__d(
  "createRelayFBLocalEnvironment",
  [
    "RelayFBHandlerProvider",
    "RelayFBOperationLoader",
    "RelayRequiredFieldLogger",
    "RelayRuntime",
    "getRelayFBMissingFieldHandlers",
    "relayFBGetDataID",
    "resolveImmediate",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b("RelayRuntime").Environment,
      h = b("RelayRuntime").RecordSource,
      i = b("RelayRuntime").Store,
      j = {
        execute: function (a) {
          throw new Error(
            "RelayFBLocalEnvironment: Network requests are not allowed in the local environment, got: " +
              a.name
          );
        },
      };
    function a(a) {
      var c = a.handlerProvider,
        d = a.missingFieldHandlers,
        e = a.scheduler,
        f = a.store,
        k = a.configName,
        l = a.log,
        m = a.operationTracker;
      a = a.getDataID;
      c = new g({
        configName: (k = k) != null ? k : "RelayFBLocalEnvironment",
        handlerProvider: (k = c) != null ? k : b("RelayFBHandlerProvider"),
        missingFieldHandlers:
          (c = d) != null ? c : b("getRelayFBMissingFieldHandlers")(),
        operationLoader: b("RelayFBOperationLoader"),
        scheduler: e,
        store:
          (k = f) != null
            ? k
            : new i(new h(), {
                getDataID: b("relayFBGetDataID"),
                gcReleaseBufferSize: 10,
                gcScheduler: b("resolveImmediate"),
                operationLoader: b("RelayFBOperationLoader"),
              }),
        network: j,
        operationTracker: m,
        log: l,
        getDataID: (d = a) != null ? d : b("relayFBGetDataID"),
        options: { isLocal: !0 },
        requiredFieldLogger: b("RelayRequiredFieldLogger").create(),
      });
      return c;
    }
    e.exports = a;
  },
  null
);
__d(
  "cometCreateLocalEnvironment",
  [
    "CometMissingFieldHandlers",
    "cometHandlerProvider",
    "createCometStore",
    "createRelayFBLocalEnvironment",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      return c("createRelayFBLocalEnvironment")({
        configName: "CometRelayLocalEnvironment",
        handlerProvider: c("cometHandlerProvider"),
        missingFieldHandlers: c("CometMissingFieldHandlers"),
        scheduler: null,
        store: c("createCometStore")(),
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometRelayEnvironmentFactory",
  [
    "CometRelayMultiActorEnvironment",
    "RelayAPIConfig",
    "cometCreateLocalEnvironment",
    "cometHandlerProvider",
    "configureRelayForWWW",
    "createCometRelayEnvironmentConfig",
    "relay-runtime/multi-actor-environment",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    c("configureRelayForWWW")();
    function a(a, b) {
      return d("CometRelayMultiActorEnvironment").forActor(
        d("relay-runtime/multi-actor-environment").getActorIdentifier(a),
        b
      );
    }
    e = a(c("RelayAPIConfig").actorID);
    function b(a) {
      return d("CometRelayMultiActorEnvironment").commitMultiActorUpdate(a);
    }
    f = {
      commitLocalUpdateForEachEnvironment: b,
      configEnvironment: d("createCometRelayEnvironmentConfig")
        .createCometRelayEnvironmentConfig,
      createLocalEnvironment: c("cometCreateLocalEnvironment"),
      defaultEnvironment: e,
      getForActor: d("CometRelayMultiActorEnvironment").forActor,
      getForActorID: a,
      handlerProvider: c("cometHandlerProvider"),
    };
    g.createLocalEnvironment = c("cometCreateLocalEnvironment");
    g.configEnvironment = d(
      "createCometRelayEnvironmentConfig"
    ).createCometRelayEnvironmentConfig;
    g.cometHandlerProvider = c("cometHandlerProvider");
    g.commitLocalUpdateForEachEnvironment = b;
    g.defaultEnvironment = e;
    g.getForActorID = a;
    g.CometRelayEnvironmentFactory = f;
  },
  98
);
__d(
  "RelayEnvironmentFactoryProvider",
  ["CometRelayEnvironmentFactory", "FBLogger", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useContext;
    function j() {
      c("FBLogger")("comet_root").warn(
        "RelayEnvironmentFactoryContext called without parent provider - using CometRelayEnvironmentFactory as fallback"
      );
      return d("CometRelayEnvironmentFactory").CometRelayEnvironmentFactory;
    }
    var k = h.createContext(null);
    function a() {
      var a = i(k);
      return a ? a : j();
    }
    function b(a) {
      var b = i(k);
      if (b) return b;
      return a ? a : j();
    }
    function e(a) {
      return h.jsx(k.Provider, { value: a.factory, children: a.children });
    }
    e.displayName = e.name + " [from " + f.id + "]";
    g.useRelayEnvironmentFactory = a;
    g.useRelayEnvironmentFactoryWithFallback = b;
    g.RelayEnvironmentFactoryProvider = e;
  },
  98
);
__d(
  "createCometRelayBaseEntryPointEnvironmentProvider",
  ["err"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, d) {
      var e = function (e) {
        e = (e = e == null ? void 0 : e.actorID) != null ? e : b;
        if (e == null) {
          if (d != null) return d;
          if (a.defaultEnvironment == null)
            throw c("err")("No default Relay environment found in factory");
          return a.defaultEnvironment;
        }
        return a.getForActorID(String(e));
      };
      return { getEnvironment: e };
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometRelayEntrypointContextualEnvironmentProvider",
  [
    "CometRelay",
    "RelayEnvironmentFactoryProvider",
    "createCometRelayBaseEntryPointEnvironmentProvider",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useMemo;
    function a() {
      var a = d("CometRelay").useRelayEnvironment(),
        b = d("RelayEnvironmentFactoryProvider").useRelayEnvironmentFactory();
      return h(
        function () {
          return c("createCometRelayBaseEntryPointEnvironmentProvider")(
            b,
            null,
            a
          );
        },
        [a, b]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometEntryPointPopoverTrigger.react",
  [
    "BasePopoverTrigger.react",
    "CometEntryPointPopoverContainer.react",
    "CometPopoverLoadingState.react",
    "CometRelay",
    "deepEquals",
    "react",
    "tracePolicyFromResource",
    "useCometPopoverInteractionTracing",
    "useCometRelayEntrypointContextualEnvironmentProvider",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
      j = b.useMemo,
      k = b.useRef;
    function a(a) {
      var b = a.doNotCloseOnOutsideClick,
        e = a.entryPointParams,
        f = a.fallback,
        g = a.onVisibilityChange,
        l = a.otherProps,
        m = a.popoverEntryPoint,
        n = a.preloadTrigger,
        o = a.tracePolicy;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "doNotCloseOnOutsideClick",
        "entryPointParams",
        "fallback",
        "onVisibilityChange",
        "otherProps",
        "popoverEntryPoint",
        "preloadTrigger",
        "tracePolicy",
      ]);
      o = c("useCometPopoverInteractionTracing")(
        (o = o) != null
          ? o
          : c("tracePolicyFromResource")("comet.popover", m.root),
        "entrypoint",
        n
      );
      var p = c("useCometRelayEntrypointContextualEnvironmentProvider")();
      p = d("CometRelay").useEntryPointLoader(p, m);
      var q = p[0],
        r = p[1];
      p = p[2];
      var s = k(null),
        t = i(
          function () {
            if (e == null) return;
            if (q !== null && c("deepEquals")(s.current, e)) return;
            s.current = e;
            r(e);
          },
          [e, q, r]
        ),
        u = j(
          function () {
            return {
              entryPointParams: e,
              entryPointReference: q,
              load: t,
              otherProps: l,
            };
          },
          [e, q, t, l]
        ),
        v = i(
          function () {
            (arguments.length <= 0 ? void 0 : arguments[0]) && t(),
              g && g.apply(void 0, arguments);
          },
          [t, g]
        );
      return h.jsx(
        c("BasePopoverTrigger.react"),
        babelHelpers["extends"](
          {
            doNotCloseOnOutsideClick: b,
            fallback:
              (b = f) != null
                ? b
                : h.jsx(c("CometPopoverLoadingState.react"), { withArrow: !0 }),
            interactionTracker: o,
            onHighIntentPreload: t,
            onLayerDetached: p,
            onVisibilityChange: v,
            popover: c("CometEntryPointPopoverContainer.react"),
            popoverPreloadResource: m.root,
            popoverProps: u,
            preloadTrigger: n,
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
  "BaseGlimmer.react",
  ["BaseLoadingStateElement.react", "react", "useVisibilityObserver"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
      j = b.useState,
      k = 200,
      l = {
        paused: { animationPlayState: "xorstpt", $$css: !0 },
        root: {
          animationDirection: "xpz12be",
          animationDuration: "x1q3qbx4",
          animationIterationCount: "xa4qsjk",
          animationName: "xeuoslp",
          animationTimingFunction: "x193epu2",
          opacity: "xvpkmg4",
          $$css: !0,
        },
      };
    function a(a) {
      var b = a.children,
        d = a.index;
      a = a.xstyle;
      var e = j(!0),
        f = e[0],
        g = e[1];
      e = i(function (a) {
        a = a.hiddenReason;
        a !== "COMPONENT_UNMOUNTED" && g(!0);
      }, []);
      var m = i(function () {
        g(!1);
      }, []);
      e = c("useVisibilityObserver")({ onHidden: e, onVisible: m });
      return h.jsx(c("BaseLoadingStateElement.react"), {
        ref: e,
        style: { animationDelay: (d % 10) * k + "ms" },
        xstyle: [l.root, f && l.paused, a],
        children: b,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometGlimmer.react",
  ["BaseGlimmer.react", "react", "useCurrentDisplayMode"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        dark: { backgroundColor: "xhzw6zf", $$css: !0 },
        light: { backgroundColor: "x1vtvx1t", $$css: !0 },
      };
    function a(a) {
      var b = a.xstyle;
      a = babelHelpers.objectWithoutPropertiesLoose(a, ["xstyle"]);
      var d = c("useCurrentDisplayMode")();
      return h.jsx(
        c("BaseGlimmer.react"),
        babelHelpers["extends"](
          { xstyle: [d === "dark" ? i.dark : i.light, b] },
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
  "CometImageFromIXValueRelayWrapper.react",
  [
    "CometImageFromIXValue.react",
    "CometImageFromIXValueRelayWrapper_sprite.graphql",
    "CometRelay",
    "RecoverableViolationWithComponentStack.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a, e) {
      a = a.sprite;
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("CometImageFromIXValueRelayWrapper_sprite.graphql")),
        a
      );
      var f = a.h,
        g = a.height,
        j = a.logging_id,
        k = a.p,
        l = a.preloading_spi,
        m = a.spi,
        n = a.sprite_css_class,
        o = a.sprite_map_css_class,
        p = a.sprited,
        q = a.sz,
        r = a.uri,
        s = a.w;
      a = a.width;
      var t = null;
      if (p === 0)
        t = { height: g, loggingID: j, sprited: p, uri: r, width: a };
      else if (p === 1)
        t = {
          _spi: l,
          loggingID: j,
          spriteCssClass: n,
          sprited: p,
          spriteMapCssClass: o,
        };
      else if (p === 2)
        t = { h: f, loggingID: j, p: k, spi: m, sprited: p, sz: q, w: s };
      else
        return i.jsx(c("RecoverableViolationWithComponentStack.react"), {
          errorMessage:
            "asset fetched from graphql via CometImageFromIXValueRelay that doesn't match expected any known sprited icons",
          projectName: "comet_ui",
        });
      return i.jsx(c("CometImageFromIXValue.react"), { ref: e, source: t });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = i.forwardRef(a);
    g["default"] = e;
  },
  98
);
__d(
  "CometPressableChildrenWithOverlay.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.children;
      a = a.overlay;
      return h.jsxs("div", {
        className:
          "x4k7w5x x1h91t0o x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x1jfb8zj x1beo9mf x3igimt xarpa2k x1n2onr6 x1qrby5j",
        children: [b, a],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometLoadingAnimation.react",
  ["cssVar", "react", "stylex"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = 38,
      k = 62,
      l = 42,
      m = 2,
      n = 3,
      o = 4,
      p = j / 2,
      q = k / 2,
      r = l / 2,
      s = p - 2,
      t = q - 2,
      u = r - 2,
      v = {
        animationCircleWrapper: {
          animationDuration: "xeaay5l",
          animationIterationCount: "xa4qsjk",
          animationName: "xnjvcao",
          animationTimingFunction: "x1esw782",
          transformOrigin: "x1bndym7",
          $$css: !0,
        },
        animationPaused: { animationPlayState: "xorstpt", $$css: !0 },
        animationRoot: { position: "x10l6tqk", $$css: !0 },
        animationRootSize36: { start: "x1150agl", top: "x1e0gzzx", $$css: !0 },
        animationRootSize40: { start: "x1150agl", top: "x1e0gzzx", $$css: !0 },
        animationRootSize60: { start: "x1150agl", top: "x1e0gzzx", $$css: !0 },
        animationUploadingCircle: {
          animationDirection: "xeo85xg",
          animationDuration: "x7s8090",
          animationIterationCount: "xa4qsjk",
          animationTimingFunction: "x1esw782",
          transformOrigin: "x1bndym7",
          $$css: !0,
        },
        animationUploadingCircleSize36: {
          animationDirection: "xeo85xg",
          animationDuration: "xeaay5l",
          animationIterationCount: "xa4qsjk",
          animationName: "xq0anyh",
          animationTimingFunction: "x1esw782",
          strokeWidth: "xvlca1e",
          $$css: !0,
        },
        animationUploadingCircleSize40: {
          animationDirection: "xeo85xg",
          animationDuration: "xeaay5l",
          animationIterationCount: "xa4qsjk",
          animationName: "x62hu5v",
          animationTimingFunction: "x1esw782",
          strokeWidth: "xqjr0vm",
          $$css: !0,
        },
        animationUploadingCircleSize60: {
          animationDirection: "xeo85xg",
          animationDuration: "xeaay5l",
          animationIterationCount: "xa4qsjk",
          animationName: "xm4p48w",
          animationTimingFunction: "x1esw782",
          strokeWidth: "x17ld789",
          $$css: !0,
        },
      };
    function a(a) {
      var b = a.animationPaused;
      b = b === void 0 ? !1 : b;
      a = a.size;
      var d, e, f;
      switch (a) {
        case 36:
          d = j;
          e = p;
          f = s;
          break;
        case 40:
          d = l;
          e = r;
          f = u;
          break;
        case 60:
        default:
          d = k;
          e = q;
          f = t;
          break;
      }
      return i.jsx("svg", {
        className: c("stylex")(
          v.animationRoot,
          a === 36 && v.animationRootSize36,
          a === 60 && v.animationRootSize60,
          a === 40 && v.animationRootSize40
        ),
        height: d,
        width: d,
        children: i.jsx("g", {
          className: c("stylex")(
            v.animationCircleWrapper,
            b && v.animationPaused
          ),
          children: i.jsx("circle", {
            className: c("stylex")(
              v.animationUploadingCircle,
              a === 36 && v.animationUploadingCircleSize36,
              a === 40 && v.animationUploadingCircleSize40,
              a === 60 && v.animationUploadingCircleSize60,
              b && v.animationPaused
            ),
            cx: e,
            cy: e,
            fill: "none",
            r: f,
            stroke: "#1877F2",
            strokeWidth: a === 36 ? m : a === 40 ? n : o,
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
  "BaseBadge.react",
  ["CometVisualCompletionAttributes", "react", "stylex", "testID"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        root: {
          alignItems: "x6s0dn4",
          borderTopStartRadius: "xzolkzo",
          borderTopEndRadius: "x12go9s9",
          borderBottomEndRadius: "x1rnf11y",
          borderBottomStartRadius: "xprq8jg",
          boxSizing: "x9f619",
          display: "x3nfvp2",
          justifyContent: "xl56j7k",
          $$css: !0,
        },
      };
    a = function (a) {
      var b = a.children,
        d = a.testid,
        e = a.xstyle;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "children",
        "testid",
        "xstyle",
      ]);
      return h.jsx(
        "span",
        babelHelpers["extends"](
          {},
          a,
          { className: c("stylex")([i.root, e]) },
          c("testID")(d),
          c("CometVisualCompletionAttributes").IGNORE,
          { children: b }
        )
      );
    };
    g["default"] = a;
  },
  98
);
__d(
  "BaseStyledBadge.react",
  ["BaseBadge.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        6: { height: "xols6we", width: "x1v4s8kt", $$css: !0 },
        7: { height: "x1hagigm", width: "xci0xqf", $$css: !0 },
        8: { height: "xdk7pt", width: "x1xc55vz", $$css: !0 },
        9: { height: "xegnrdp", width: "x1wc42o8", $$css: !0 },
        10: { height: "x170jfvy", width: "x1fsd2vl", $$css: !0 },
        12: { height: "x1kpxq89", width: "xsmyaan", $$css: !0 },
        14: { height: "x1v9usgg", width: "x6jxa94", $$css: !0 },
        15: { height: "xx3o462", width: "x1a00udw", $$css: !0 },
        18: { height: "xmix8c7", width: "x1xp8n7a", $$css: !0 },
        20: { height: "x1qx5ct2", width: "xw4jnvo", $$css: !0 },
        22: { height: "x17rw0jw", width: "x17z2i9w", $$css: !0 },
        24: { height: "xxk0z11", width: "xvy4d1p", $$css: !0 },
        32: { height: "x10w6t97", width: "x1td3qas", $$css: !0 },
        41: { height: "x1njhlm6", width: "x1r9kitl", $$css: !0 },
      },
      j = {
        6: {
          borderTopStyle: "x13fuv20",
          borderEndStyle: "xu3j5b3",
          borderBottomStyle: "x1q0q8m5",
          borderStartStyle: "x26u7qi",
          borderTopWidth: "x5see2y",
          borderEndWidth: "x8ebbdf",
          borderBottomWidth: "x1pzews7",
          borderStartWidth: "x1r61nuk",
          height: "xegnrdp",
          width: "x1wc42o8",
          $$css: !0,
        },
        7: {
          borderTopStyle: "x13fuv20",
          borderEndStyle: "xu3j5b3",
          borderBottomStyle: "x1q0q8m5",
          borderStartStyle: "x26u7qi",
          borderTopWidth: "xamhcws",
          borderEndWidth: "xol2nv",
          borderBottomWidth: "xlxy82",
          borderStartWidth: "x19p7ews",
          height: "x6w4g8m",
          width: "x10vfzb2",
          $$css: !0,
        },
        8: {
          borderTopStyle: "x13fuv20",
          borderEndStyle: "xu3j5b3",
          borderBottomStyle: "x1q0q8m5",
          borderStartStyle: "x26u7qi",
          borderTopWidth: "xamhcws",
          borderEndWidth: "xol2nv",
          borderBottomWidth: "xlxy82",
          borderStartWidth: "x19p7ews",
          height: "x1kpxq89",
          width: "xsmyaan",
          $$css: !0,
        },
        9: {
          borderTopStyle: "x13fuv20",
          borderEndStyle: "xu3j5b3",
          borderBottomStyle: "x1q0q8m5",
          borderStartStyle: "x26u7qi",
          borderTopWidth: "xamhcws",
          borderEndWidth: "xol2nv",
          borderBottomWidth: "xlxy82",
          borderStartWidth: "x19p7ews",
          height: "x18gnavp",
          width: "x1fxhmyf",
          $$css: !0,
        },
        10: {
          borderTopStyle: "x13fuv20",
          borderEndStyle: "xu3j5b3",
          borderBottomStyle: "x1q0q8m5",
          borderStartStyle: "x26u7qi",
          borderTopWidth: "xamhcws",
          borderEndWidth: "xol2nv",
          borderBottomWidth: "xlxy82",
          borderStartWidth: "x19p7ews",
          height: "x1v9usgg",
          width: "x6jxa94",
          $$css: !0,
        },
        12: {
          borderTopStyle: "x13fuv20",
          borderEndStyle: "xu3j5b3",
          borderBottomStyle: "x1q0q8m5",
          borderStartStyle: "x26u7qi",
          borderTopWidth: "xamhcws",
          borderEndWidth: "xol2nv",
          borderBottomWidth: "xlxy82",
          borderStartWidth: "x19p7ews",
          height: "xlup9mm",
          width: "x1kky2od",
          $$css: !0,
        },
        14: {
          borderTopStyle: "x13fuv20",
          borderEndStyle: "xu3j5b3",
          borderBottomStyle: "x1q0q8m5",
          borderStartStyle: "x26u7qi",
          borderTopWidth: "xamhcws",
          borderEndWidth: "xol2nv",
          borderBottomWidth: "xlxy82",
          borderStartWidth: "x19p7ews",
          height: "xmix8c7",
          width: "x1xp8n7a",
          $$css: !0,
        },
        15: {
          borderTopStyle: "x13fuv20",
          borderEndStyle: "xu3j5b3",
          borderBottomStyle: "x1q0q8m5",
          borderStartStyle: "x26u7qi",
          borderTopWidth: "xamhcws",
          borderEndWidth: "xol2nv",
          borderBottomWidth: "xlxy82",
          borderStartWidth: "x19p7ews",
          height: "xhvdbge",
          width: "xn6xy2s",
          $$css: !0,
        },
        18: {
          borderTopStyle: "x13fuv20",
          borderEndStyle: "xu3j5b3",
          borderBottomStyle: "x1q0q8m5",
          borderStartStyle: "x26u7qi",
          borderTopWidth: "xamhcws",
          borderEndWidth: "xol2nv",
          borderBottomWidth: "xlxy82",
          borderStartWidth: "x19p7ews",
          height: "x17rw0jw",
          width: "x17z2i9w",
          $$css: !0,
        },
        20: {
          borderTopStyle: "x13fuv20",
          borderEndStyle: "xu3j5b3",
          borderBottomStyle: "x1q0q8m5",
          borderStartStyle: "x26u7qi",
          borderTopWidth: "x1gp4ovq",
          borderEndWidth: "xdio9jc",
          borderBottomWidth: "x1h2mt7u",
          borderStartWidth: "x7g060r",
          height: "x1fgtraw",
          width: "xgd8bvy",
          $$css: !0,
        },
        22: {
          borderTopStyle: "x13fuv20",
          borderEndStyle: "xu3j5b3",
          borderBottomStyle: "x1q0q8m5",
          borderStartStyle: "x26u7qi",
          borderTopWidth: "x1gp4ovq",
          borderEndWidth: "xdio9jc",
          borderBottomWidth: "x1h2mt7u",
          borderStartWidth: "x7g060r",
          height: "x1gnnpzl",
          width: "x1849jeq",
          $$css: !0,
        },
        24: {
          borderTopStyle: "x13fuv20",
          borderEndStyle: "xu3j5b3",
          borderBottomStyle: "x1q0q8m5",
          borderStartStyle: "x26u7qi",
          borderTopWidth: "x1gp4ovq",
          borderEndWidth: "xdio9jc",
          borderBottomWidth: "x1h2mt7u",
          borderStartWidth: "x7g060r",
          height: "x10w6t97",
          width: "x1td3qas",
          $$css: !0,
        },
        32: {
          borderTopStyle: "x13fuv20",
          borderEndStyle: "xu3j5b3",
          borderBottomStyle: "x1q0q8m5",
          borderStartStyle: "x26u7qi",
          borderTopWidth: "x1gp4ovq",
          borderEndWidth: "xdio9jc",
          borderBottomWidth: "x1h2mt7u",
          borderStartWidth: "x7g060r",
          height: "x1vqgdyp",
          width: "x100vrsf",
          $$css: !0,
        },
        41: {
          borderTopStyle: "x13fuv20",
          borderEndStyle: "xu3j5b3",
          borderBottomStyle: "x1q0q8m5",
          borderStartStyle: "x26u7qi",
          borderTopWidth: "x1gp4ovq",
          borderEndWidth: "xdio9jc",
          borderBottomWidth: "x1h2mt7u",
          borderStartWidth: "x7g060r",
          height: "x112a4uq",
          width: "x15jighw",
          $$css: !0,
        },
      };
    function a(a) {
      var b = a.border;
      b = b === void 0 ? !1 : b;
      var d = a.children,
        e = a.colorXStyle,
        f = a.size;
      f = f === void 0 ? 8 : f;
      var g = a.xstyle;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "border",
        "children",
        "colorXStyle",
        "size",
        "xstyle",
      ]);
      return h.jsx(
        c("BaseBadge.react"),
        babelHelpers["extends"]({}, a, {
          xstyle: [e, b ? j[f] : i[f], g],
          children: d,
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "getCometBadgeColorStyle",
  ["unrecoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = {
      blue: { backgroundColor: "xwnonoy", $$css: !0 },
      darkGray: { backgroundColor: "xhazfnh", $$css: !0 },
      gray: { backgroundColor: "x1d2osyd", $$css: !0 },
      green: { backgroundColor: "xv9rvxn", $$css: !0 },
      lightBlue: { backgroundColor: "xfmpgtx", $$css: !0 },
      red: { backgroundColor: "x1cdvf7c", $$css: !0 },
      yellow: { backgroundColor: "xacajkf", $$css: !0 },
    };
    function a(a) {
      switch (a) {
        case "blue":
          return h.blue;
        case "gray":
          return h.gray;
        case "darkGray":
          return h.darkGray;
        case "green":
          return h.green;
        case "lightBlue":
          return h.lightBlue;
        case "red":
          return h.red;
        case "yellow":
          return h.yellow;
        default:
          a;
          throw c("unrecoverableViolation")(
            " Invalid color in getCometBadgeColorStyle",
            "comet_ui"
          );
      }
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometBadge.react",
  ["BaseStyledBadge.react", "getCometBadgeColorStyle", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        borderDark: {
          borderTopColor: "x1o7swki",
          borderEndColor: "xp7cj6j",
          borderBottomColor: "x1bkzgmd",
          borderStartColor: "xl02xpf",
          $$css: !0,
        },
        borderWhite: {
          borderTopColor: "x6zyg47",
          borderEndColor: "x1xm1mqw",
          borderBottomColor: "xpn8fn3",
          borderStartColor: "xtct9fg",
          $$css: !0,
        },
        isNoneProfileBadge: { marginEnd: "x1emribx", $$css: !0 },
      },
      j = {
        6: { marginStart: "x1w4ip6v", width: "x1wc42o8", $$css: !0 },
        7: { marginStart: "x1b2warb", width: "xaw7vzs", $$css: !0 },
        8: { marginStart: "xsgj6o6", width: "xsmyaan", $$css: !0 },
        9: { marginStart: "x1hvlnb8", width: "x197psvt", $$css: !0 },
        10: { marginStart: "x8j4wrb", width: "x1a00udw", $$css: !0 },
        12: { marginStart: "x1mnrxsn", width: "x1xp8n7a", $$css: !0 },
        14: { marginStart: "xnfveip", width: "x1kl0l3y", $$css: !0 },
        15: { marginStart: "xpw6ms", width: "xpcibvc", $$css: !0 },
        18: { marginStart: "x1cxxrxm", width: "xo7uitg", $$css: !0 },
        20: { marginStart: "x17adc0v", width: "x1849jeq", $$css: !0 },
        22: { marginStart: "x1hy63sm", width: "x1npj6m0", $$css: !0 },
        24: { marginStart: "x16n37ib", width: "x14qfxbe", $$css: !0 },
        32: { marginStart: "x1d52u69", width: "x1useyqa", $$css: !0 },
        41: { marginStart: "x1v860g0", width: "x1yaf2ey", $$css: !0 },
      },
      k = {
        6: { marginStart: "x1mnrxsn", width: "xsmyaan", $$css: !0 },
        7: { marginStart: "xnfveip", width: "x6jxa94", $$css: !0 },
        8: { marginStart: "x1i64zmx", width: "x1kky2od", $$css: !0 },
        9: { marginStart: "x1cxxrxm", width: "x1xp8n7a", $$css: !0 },
        10: { marginStart: "x17adc0v", width: "xw4jnvo", $$css: !0 },
        12: { marginStart: "x16n37ib", width: "xvy4d1p", $$css: !0 },
        14: { marginStart: "xwycmqc", width: "xgd8bvy", $$css: !0 },
        15: { marginStart: "x13ibhcj", width: "x1849jeq", $$css: !0 },
        18: { marginStart: "x1sliqq", width: "x14qfxbe", $$css: !0 },
        20: { marginStart: "xmn8rco", width: "x100vrsf", $$css: !0 },
        22: { marginStart: "x1tv9t25", width: "x187nhsf", $$css: !0 },
        24: { marginStart: "xmupa6y", width: "x1useyqa", $$css: !0 },
        32: { marginStart: "x8vdgqj", width: "x1fu8urw", $$css: !0 },
        41: { marginStart: "x2vb376", width: "x1pigqs1", $$css: !0 },
      };
    function a(a) {
      var b = a.border;
      b = b === void 0 ? "none" : b;
      var d = a.children,
        e = a.color;
      e = e === void 0 ? "blue" : e;
      var f = a.colorOverride,
        g = a.isProfileBadge;
      g = g === void 0 ? !1 : g;
      var l = a.label,
        m = a.size;
      m = m === void 0 ? 8 : m;
      var n = a.wide;
      n = n === void 0 ? "normal" : n;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "border",
        "children",
        "color",
        "colorOverride",
        "isProfileBadge",
        "label",
        "size",
        "wide",
      ]);
      return h.jsx(
        c("BaseStyledBadge.react"),
        babelHelpers["extends"]({}, a, {
          "aria-label": l,
          border: b !== "none",
          colorXStyle: (a = f) != null ? a : c("getCometBadgeColorStyle")(e),
          size: m,
          xstyle: [
            !g && i.isNoneProfileBadge,
            b === "white" && i.borderWhite,
            b === "dark" && i.borderDark,
            n === "wide" && j[m],
            n === "extraWide" && k[m],
          ],
          children: d,
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometScreenReaderText.react",
  ["BaseView.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        visuallyHidden: {
          clip: "xzpqnlu",
          clipPath: "x1hyvwdk",
          height: "xjm9jq1",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          position: "x10l6tqk",
          width: "x1i1rx1s",
          $$css: !0,
        },
      };
    function a(a) {
      var b = a.text;
      a = babelHelpers.objectWithoutPropertiesLoose(a, ["text"]);
      return h.jsx(
        c("BaseView.react"),
        babelHelpers["extends"]({}, a, {
          xstyle: i.visuallyHidden,
          children: b,
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometProfilePhotoAvailabilityBadge.react",
  [
    "fbt",
    "CometBadge.react",
    "CometPressableChildrenWithOverlay.react",
    "CometPressableOverlay.react",
    "CometScreenReaderText.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = h._("En ligne");
    function a(a) {
      var b = a.pressed;
      a = a.size;
      return i.jsxs("div", {
        className:
          "x14yjl9h xudhj91 x18nykt9 xww2gxu x78zum5 x6ikm8r x10wlt62 x1n2onr6",
        children: [
          i.jsx(c("CometPressableChildrenWithOverlay.react"), {
            overlay: i.jsx(c("CometPressableOverlay.react"), {
              pressed: b,
              radius: "50%",
            }),
            children: i.jsx(c("CometBadge.react"), {
              color: "green",
              isProfileBadge: !0,
              size: a,
            }),
          }),
          i.jsx(c("CometScreenReaderText.react"), { text: j }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useServerTime",
  ["JSScheduler", "ServerTime", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useEffect,
      i = b.useState,
      j = 6e4,
      k = new Set(),
      l = null,
      m = !1;
    function n() {
      k.forEach(function (a) {
        return a();
      }),
        (m = !1);
    }
    function o(a) {
      a === void 0 && (a = j),
        (l = window.setInterval(function () {
          m || ((m = !0), d("JSScheduler").scheduleSpeculativeCallback(n));
        }, a));
    }
    function p() {
      k.size === 0 && (window.clearInterval(l), (l = null));
    }
    function q(a, b) {
      b === void 0 && (b = j);
      k.add(a);
      l == null && o(b);
      return function () {
        k["delete"](a), p();
      };
    }
    function r() {
      return new Date(d("ServerTime").getMillis());
    }
    function a(a) {
      a === void 0 && (a = j);
      var b = i(function () {
          return r();
        }),
        c = b[0],
        d = b[1],
        e = function () {
          return d(r());
        };
      h(
        function () {
          return q(e, a);
        },
        [a]
      );
      return c;
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometRelativeTimestamp.react",
  ["fbt", "react", "useServerTime"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    e = d("react");
    function i(a, b) {
      if (b === "minimized") return h._("1 min");
      else if (b === "shortened") return h._("\u00c0 l\u2019instant");
      return h._("il y a quelques secondes");
    }
    function j(a, b) {
      return b === "minimized" ? h._("1 min") : h._("dans quelques secondes");
    }
    function k(a, b) {
      if (b === "minimized")
        return h._({ "*": "{minutes} min" }, [h._param("minutes", a, [0])]);
      else if (b === "shortened")
        return h._({ "*": "{number} min", _1: "1 min" }, [
          h._plural(a, "number"),
        ]);
      return h._(
        { "*": "il y a {number} minutes", _1: "il y a environ une minute" },
        [h._plural(a, "number")]
      );
    }
    function l(a, b) {
      if (b === "minimized")
        return h._({ "*": "dans {minutes} min" }, [
          h._param("minutes", a, [0]),
        ]);
      else if (b === "shortened")
        return h._({ "*": "dans {number} min.", _1: "dans 1 min." }, [
          h._plural(a, "number"),
        ]);
      return h._(
        { "*": "dans {number}\u00a0minutes", _1: "dans environ une minute" },
        [h._plural(a, "number")]
      );
    }
    function m(a, b) {
      if (b === "minimized") return h._("{hours} h", [h._param("hours", a)]);
      else if (b === "shortened")
        return h._({ "*": "{number} h", _1: "1 h" }, [h._plural(a, "number")]);
      return h._(
        { "*": "il y a {number} heures", _1: "il y a environ une heure" },
        [h._plural(a, "number")]
      );
    }
    function n(a, b) {
      if (b === "minimized")
        return h._("dans {hours} h", [h._param("hours", a)]);
      else if (b === "shortened")
        return h._({ "*": "dans {number} h.", _1: "dans 1 h." }, [
          h._plural(a, "number"),
        ]);
      return h._(
        { "*": "dans {number}\u00a0heures", _1: "dans environ une heure" },
        [h._plural(a, "number")]
      );
    }
    function o(a, b) {
      if (b === "minimized") return h._("{days} j", [h._param("days", a)]);
      else if (b === "shortened")
        return h._({ "*": "{number} jours", _1: "1 jour" }, [
          h._plural(a, "number"),
        ]);
      return h._({ "*": "il y a {number} jours", _1: "il y a un jour" }, [
        h._plural(a, "number"),
      ]);
    }
    function p(a, b) {
      if (b === "minimized") return h._("dans {days} j", [h._param("days", a)]);
      else if (b === "shortened")
        return h._({ "*": "dans {number} jours", _1: "dans 1 jour" }, [
          h._plural(a, "number"),
        ]);
      return h._({ "*": "dans {number} jours", _1: "dans un jour" }, [
        h._plural(a, "number"),
      ]);
    }
    function q(a, b) {
      if (b === "minimized") return h._("{weeks} sem", [h._param("weeks", a)]);
      else if (b === "shortened")
        return h._({ "*": "{number} sem", _1: "1 sem" }, [
          h._plural(a, "number"),
        ]);
      return h._(
        { "*": "il y a {number} semaines", _1: "il y a une semaine" },
        [h._plural(a, "number")]
      );
    }
    function r(a, b) {
      if (b === "minimized")
        return h._("dans {weeks} sem.", [h._param("weeks", a)]);
      else if (b === "shortened")
        return h._({ "*": "dans {number} sem.", _1: "dans 1 sem." }, [
          h._plural(a, "number"),
        ]);
      return h._({ "*": "dans {number} semaines", _1: "dans une semaine" }, [
        h._plural(a, "number"),
      ]);
    }
    function s(a, b) {
      if (b === "minimized") return h._("{years} ans", [h._param("years", a)]);
      else if (b === "shortened")
        return h._({ "*": "{number} ans", _1: "1 an" }, [
          h._plural(a, "number"),
        ]);
      return h._({ "*": "il y a {number} ans", _1: "il y a un an" }, [
        h._plural(a, "number"),
      ]);
    }
    function t(a, b) {
      if (b === "minimized")
        return h._("dans {years} ans", [h._param("years", a)]);
      else if (b === "shortened")
        return h._({ "*": "dans {number} ans", _1: "dans 1 an" }, [
          h._plural(a, "number"),
        ]);
      return h._({ "*": "dans {number} ans", _1: "dans un an" }, [
        h._plural(a, "number"),
      ]);
    }
    var u = 60,
      v = 60,
      w = 24,
      x = 7,
      y = 365;
    function z(a, b, c) {
      c === void 0 && (c = "normal");
      a = (a.valueOf() - b.valueOf()) / 1e3;
      if (a < u) return i(a, c);
      b = a / u;
      a = Math.floor(b);
      if (a < v) return k(a, c);
      a = b / v;
      b = Math.floor(a);
      if (b < w) return m(b, c);
      b = a / w;
      a = Math.floor(b);
      if (a < x) return o(a, c);
      else if (b < y) {
        a = Math.floor(b / x);
        return q(a, c);
      }
      a = Math.floor(b / y);
      return s(a, c);
    }
    function a(a, b, c) {
      c === void 0 && (c = "normal");
      b = (b.valueOf() - a.valueOf()) / 1e3;
      if (b < u) return j(b, c);
      a = b / u;
      b = Math.floor(a);
      if (b < v) return l(b, c);
      b = a / v;
      a = Math.floor(a / v);
      if (a < w) return n(a, c);
      a = b / w;
      b = Math.floor(a);
      if (b < x) return p(b, c);
      else if (a < y) {
        b = Math.floor(a / x);
        return r(b, c);
      }
      b = Math.floor(a / y);
      return t(b, c);
    }
    function b(a) {
      var b = a.date;
      a = a.format;
      var d = c("useServerTime")();
      d = z(d, b, a);
      return d;
    }
    b.displayName = b.name + " [from " + f.id + "]";
    b.getRelativeTimestamp = z;
    b.getRelativeTimestampInFuture = a;
    g["default"] = b;
  },
  98
);
__d(
  "MWChatActivePill.react",
  [
    "CometPressableChildrenWithOverlay.react",
    "CometPressableOverlay.react",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        badge: {
          backgroundColor: "xbb192p",
          borderTopStartRadius: "xhw592a",
          borderTopEndRadius: "xwihvcr",
          borderBottomEndRadius: "x7wuybg",
          borderBottomStartRadius: "xb9tvrk",
          borderTopStyle: "x13fuv20",
          borderEndStyle: "xu3j5b3",
          borderBottomStyle: "x1q0q8m5",
          borderStartStyle: "x26u7qi",
          borderTopWidth: "xamhcws",
          borderEndWidth: "xol2nv",
          borderBottomWidth: "xlxy82",
          borderStartWidth: "x19p7ews",
          boxSizing: "x9f619",
          display: "x78zum5",
          fontWeight: "x117nqv4",
          justifyContent: "xl56j7k",
          marginTop: "x1kgmq87",
          marginEnd: "xwrv7xz",
          marginBottom: "xmgb6t1",
          marginStart: "x8182xy",
          paddingStart: "x1h0ha7o",
          paddingEnd: "xg83lxy",
          $$css: !0,
        },
        badgeContainer: {
          display: "x78zum5",
          justifyContent: "xl56j7k",
          maxWidth: "x193iq5w",
          $$css: !0,
        },
        inner: {
          color: "x6u5lvz",
          fontSize: "x190qgfh",
          lineHeight: "x132q4wb",
          whiteSpace: "xuxw1ft",
          $$css: !0,
        },
      },
      j = {
        "card-background": {
          borderTopColor: "x6zyg47",
          borderEndColor: "x1xm1mqw",
          borderBottomColor: "xpn8fn3",
          borderStartColor: "xtct9fg",
          $$css: !0,
        },
        "secondary-button-background-floating": {
          borderTopColor: "x1bmsi4x",
          borderEndColor: "xrcl4xe",
          borderBottomColor: "x17j0sh5",
          borderStartColor: "x14li8yl",
          $$css: !0,
        },
        "web-wash": {
          borderTopColor: "x1516sgx",
          borderEndColor: "x1fjwj1m",
          borderBottomColor: "x1khxuxv",
          borderStartColor: "x4gm0zg",
          $$css: !0,
        },
      };
    function a(a) {
      var b = a.border;
      b = b === void 0 ? "card-background" : b;
      var d = a.children;
      a = a.pressed;
      return h.jsx("div", {
        className: "x78zum5 xl56j7k x193iq5w",
        children: h.jsx(c("CometPressableChildrenWithOverlay.react"), {
          overlay: h.jsx(c("CometPressableOverlay.react"), {
            pressed: a,
            radius: 7,
          }),
          children: h.jsx("div", {
            className: c("stylex")(i.badge, j[b]),
            children: h.jsx("span", {
              className: "x6u5lvz x190qgfh x132q4wb xuxw1ft",
              children: d,
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
  "CometProfilePhotoLastActiveTimeBadge.react",
  ["CometRelativeTimestamp.react", "MWChatActivePill.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.border;
      b = b === void 0 ? "card-background" : b;
      var d = a.pressed;
      a = a.time;
      return h.jsx(c("MWChatActivePill.react"), {
        border: b,
        pressed: d,
        children: h.jsx(c("CometRelativeTimestamp.react"), {
          date: new Date(a * 1e3),
          format: "minimized",
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometProfilePhotoNotificationBadge.react",
  ["CometBadge.react", "TetraText.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      a = a.number;
      return h.jsx(c("CometBadge.react"), {
        color: "red",
        isProfileBadge: !0,
        size: 18,
        wide: a > 9 ? "wide" : "normal",
        children: h.jsx("div", {
          className: "x6s0dn4 x78zum5 x5yr21d xl56j7k xuxw1ft xh8yej3",
          children: h.jsx(c("TetraText.react"), {
            color: "primaryOnMedia",
            type: "body4",
            children: a > 9 ? "9+" : a,
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
  "CometSSRSuspendOnServer.react",
  ["ExecutionEnvironment", "react", "suspendOrThrowIfUsedInSSR"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    function a(a) {
      a = a.children;
      if (c("ExecutionEnvironment").canUseDOM) return a;
      c("suspendOrThrowIfUsedInSSR")(
        "CometSSRSuspendOnServer: This component is marked to be client rendered"
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometSSRReplaceContentOnHydrationAndBreakEventReplaying.react",
  ["CometPlaceholder.react", "CometSSRSuspendOnServer.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.children;
      a = a.useSuspenseDirectlyForSVG;
      a = a === !0 ? h.Suspense : c("CometPlaceholder.react");
      return h.jsx(a, {
        fallback: b,
        children: h.jsx(c("CometSSRSuspendOnServer.react"), { children: b }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometProfileVideoGlimmer.react",
  ["CometGlimmer.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        container: { position: "x1n2onr6", $$css: !0 },
        glimmer: {
          borderTopStartRadius: "x14yjl9h",
          borderTopEndRadius: "xudhj91",
          borderBottomEndRadius: "x18nykt9",
          borderBottomStartRadius: "xww2gxu",
          height: "x5yr21d",
          position: "x10l6tqk",
          start: "x17qophe",
          top: "x13vifvy",
          width: "xh8yej3",
          $$css: !0,
        },
      };
    function a(a) {
      a = a.size;
      return h.jsx("div", {
        className: "x1n2onr6",
        style: { height: a, width: a },
        children: h.jsx(c("CometGlimmer.react"), {
          index: 0,
          xstyle: i.glimmer,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "LazyCometProfileVideoSection.react",
  [
    "CometPlaceholder.react",
    "CometProfileVideoGlimmer.react",
    "JSResourceForInteraction",
    "lazyLoadComponent",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = c("lazyLoadComponent")(
        c("JSResourceForInteraction")(
          "CometProfileVideoSection.react"
        ).__setRef("LazyCometProfileVideoSection.react")
      );
    function a(a) {
      return h.jsx(c("CometPlaceholder.react"), {
        fallback: h.jsx(c("CometProfileVideoGlimmer.react"), { size: a.size }),
        children: h.jsx(i, babelHelpers["extends"]({}, a)),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "profilePhotoUtils",
  ["Locale", "memoizeWithArgs"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("memoizeWithArgs")(
      function (a, b) {
        b === void 0 && (b = !1);
        a = Math.sqrt(2 * a * a) - a;
        a = Math.round(Math.sqrt((a * a) / 2));
        if (b)
          if (d("Locale").isRTL())
            return { left: a, top: a, transform: "translate(-50%, -50%)" };
          else return { right: a, top: a, transform: "translate(50%, -50%)" };
        else if (d("Locale").isRTL())
          return { bottom: a, left: a, transform: "translate(-50%, 50%)" };
        else return { bottom: a, right: a, transform: "translate(50%, 50%)" };
      },
      function (a, b) {
        return String(b) + String(a);
      }
    );
    b = c("memoizeWithArgs")(
      function (a) {
        switch (a) {
          case 24:
          case 32:
          case 36:
          case 40:
            return 2;
          case 48:
          case 56:
          case 60:
            return 3;
          case 132:
          default:
            return 4;
        }
      },
      function (a) {
        return String(a);
      }
    );
    e = c("memoizeWithArgs")(
      function (a, b) {
        if (b === "availabilityBadge")
          switch (a) {
            case 16:
            case 20:
            case 24:
              return [6, 1.5];
            case 28:
              return [7, 2];
            case 32:
            case 36:
              return [8, 2];
            case 40:
            case 44:
            case 48:
              return [9, 2];
            case 56:
            case 60:
              return [10, 2];
            case 72:
              return [12, 2];
            case 80:
            case 88:
              return [14, 2];
            case 96:
            case 100:
              return [15, 2];
            case 120:
            case 132:
            case 168:
              return [20, 4];
            default:
              a;
              return [8, 2];
          }
        switch (a) {
          case 16:
          case 20:
          case 24:
            return [6, 1.5];
          case 28:
            return [7, 1.5];
          case 32:
            return [8, 2];
          case 36:
            return [9, 2];
          case 40:
            return [10, 2];
          case 44:
          case 48:
            return [12, 2];
          case 56:
            return [14, 2];
          case 60:
            return [15, 2];
          case 72:
            return [18, 2];
          case 80:
            return [20, 4];
          case 88:
            return [22, 4];
          case 96:
          case 100:
            return [24, 4];
          case 120:
          case 132:
            return [32, 4];
          case 168:
            return [41, 4];
          default:
            a;
            return [8, 2];
        }
      },
      function (a, b) {
        return String(a) + b;
      }
    );
    g.getBadgePosition = a;
    g.getStoryRingSize = b;
    g.getBadgeSizeAndStrokeWidth = e;
  },
  98
);
__d(
  "CometProfilePhoto.react",
  [
    "BaseSvgImage.react",
    "CometErrorBoundary.react",
    "CometImage.react",
    "CometLoadingAnimation.react",
    "CometPlaceholder.react",
    "CometPressable.react",
    "CometPressableChildrenWithOverlay.react",
    "CometPressableOverlay.react",
    "CometProfilePhotoAvailabilityBadge.react",
    "CometProfilePhotoLastActiveTimeBadge.react",
    "CometProfilePhotoNotificationBadge.react",
    "CometSSRReplaceContentOnHydrationAndBreakEventReplaying.react",
    "CometSSRSuspendOnServer.react",
    "CometTrackingNodeProvider.react",
    "CometVisualCompletionAttributes",
    "LazyCometProfileVideoSection.react",
    "profilePhotoUtils",
    "react",
    "stylex",
    "useCometUniqueID",
    "useSetAttributeRef",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        activityBadge: {
          alignItems: "x6s0dn4",
          borderBottomStyle: "x1q0q8m5",
          borderBottomWidth: "x1qhh985",
          borderEndStyle: "xu3j5b3",
          borderEndWidth: "xcfux6l",
          borderTopStartRadius: "x14yjl9h",
          borderTopEndRadius: "xudhj91",
          borderBottomEndRadius: "x18nykt9",
          borderBottomStartRadius: "xww2gxu",
          borderStartStyle: "x26u7qi",
          borderStartWidth: "xm0m39n",
          borderTopStyle: "x13fuv20",
          borderTopWidth: "x972fbf",
          boxSizing: "x9f619",
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          flexGrow: "x1iyjqo2",
          flexShrink: "xs83m0k",
          justifyContent: "xl56j7k",
          marginBottom: "xat24cr",
          marginEnd: "x11i5rnm",
          marginStart: "x1mh8g0r",
          marginTop: "xdj266r",
          minHeight: "x2lwn1j",
          minWidth: "xeuugli",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          paddingBottom: "x18d9i69",
          paddingEnd: "x4uap5",
          paddingStart: "xkhd6sd",
          paddingTop: "xexx8yu",
          position: "x1n2onr6",
          zIndex: "x1ja2u2z",
          $$css: !0,
        },
        activityIcon10: {
          height: "x17rw0jw",
          paddingTop: "x123j3cw",
          paddingEnd: "x1mpkggp",
          paddingBottom: "xs9asl8",
          paddingStart: "x1t2a60a",
          width: "x17z2i9w",
          $$css: !0,
        },
        activityIcon16: {
          height: "xd7y6wv",
          paddingTop: "x123j3cw",
          paddingEnd: "x1mpkggp",
          paddingBottom: "xs9asl8",
          paddingStart: "x1t2a60a",
          width: "x23j0i4",
          $$css: !0,
        },
        activityIcon8: { height: "x1v9usgg", width: "x6jxa94", $$css: !0 },
        badge: {
          borderTopStartRadius: "x14yjl9h",
          borderTopEndRadius: "xudhj91",
          borderBottomEndRadius: "x18nykt9",
          borderBottomStartRadius: "xww2gxu",
          position: "x10l6tqk",
          zIndex: "xhtitgo",
          $$css: !0,
        },
        badgeWithBorder: {
          borderTopColor: "x1aoij9j",
          borderEndColor: "xxpsvdv",
          borderBottomColor: "x2e7n7m",
          borderStartColor: "x9387xi",
          borderTopStyle: "x13fuv20",
          borderEndStyle: "xu3j5b3",
          borderBottomStyle: "x1q0q8m5",
          borderStartStyle: "x26u7qi",
          $$css: !0,
        },
        badgeWithLastActiveTime: {
          bottom: "x1ey2m1c",
          display: "x78zum5",
          end: "xds687c",
          justifyContent: "x13a6bvl",
          start: "x17qophe",
          $$css: !0,
        },
        badgeWithShadow: { boxShadow: "x14ihvte", $$css: !0 },
        insetSVG: {
          fill: "xbh8q5q",
          stroke: "x1pwv2dq",
          strokeWidth: "xvlca1e",
          $$css: !0,
        },
        photo: { verticalAlign: "x3ajldb", $$css: !0 },
        photoCircle: {
          borderTopStartRadius: "x14yjl9h",
          borderTopEndRadius: "xudhj91",
          borderBottomEndRadius: "x18nykt9",
          borderBottomStartRadius: "xww2gxu",
          $$css: !0,
        },
        photoRoundedRect: {
          borderTopStartRadius: "x1lq5wgf",
          borderTopEndRadius: "xgqcy7u",
          borderBottomEndRadius: "x30kzoy",
          borderBottomStartRadius: "x9jhf4c",
          $$css: !0,
        },
        pressable: { color: "xzsf02u", display: "x1rg5ohu", $$css: !0 },
        pressed: { transform: "x1n5d1j9", $$css: !0 },
        storyRingBlue: { stroke: "x1p5r69i", $$css: !0 },
        storyRingGray: { stroke: "x1tbtn3x", $$css: !0 },
        storyRingGreen: { stroke: "x1cm6qz0", $$css: !0 },
        storyRingRed: { stroke: "x1c97i5p", $$css: !0 },
        storyRingSize2: { strokeWidth: "xvlca1e", $$css: !0 },
        storyRingSize3: { strokeWidth: "xqjr0vm", $$css: !0 },
        storyRingSize4: { strokeWidth: "x17ld789", $$css: !0 },
        svgOverlay: { fill: "x1tgjyoi", $$css: !0 },
        videoContainer: {
          WebkitMaskImage: "x1u31j2f",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        videoContainerRectRounded: {
          borderTopStartRadius: "x1lq5wgf",
          borderTopEndRadius: "xgqcy7u",
          borderBottomEndRadius: "x30kzoy",
          borderBottomStartRadius: "x9jhf4c",
          $$css: !0,
        },
        videoContainerRounded: {
          borderTopStartRadius: "x14yjl9h",
          borderTopEndRadius: "xudhj91",
          borderBottomEndRadius: "x18nykt9",
          borderBottomStartRadius: "xww2gxu",
          $$css: !0,
        },
        wrapper: {
          display: "x1rg5ohu",
          position: "x1n2onr6",
          verticalAlign: "x3ajldb",
          zIndex: "x1ja2u2z",
          $$css: !0,
        },
      };
    function a(a, b) {
      var e = a.addOn,
        f = a.addOnTopEnd,
        g = a.alt,
        k = a.children,
        l = a.cursorDisabled,
        m = a.isOverlapped,
        n = m === void 0 ? !1 : m,
        o = a.linkProps,
        p = a.onHoverIn,
        q = a.onHoverOut,
        r = a.onPress,
        s = a.onPressIn;
      m = a.overlayDisabled;
      m = m === void 0 ? !1 : m;
      a.preview;
      var t = a.profileVideo,
        u = a.shape,
        v = u === void 0 ? "circle" : u;
      u = a.shouldShowCloseFriendsBadge;
      var w = u === void 0 ? !1 : u,
        x = a.size,
        y = a.source;
      u = a.storyStatus;
      var z = u === void 0 ? "none" : u;
      u = a.testid;
      u = a.testOnly_pressed;
      a.testOnly_previewDelay;
      var A = babelHelpers.objectWithoutPropertiesLoose(a, [
          "addOn",
          "addOnTopEnd",
          "alt",
          "children",
          "cursorDisabled",
          "isOverlapped",
          "linkProps",
          "onHoverIn",
          "onHoverOut",
          "onPress",
          "onPressIn",
          "overlayDisabled",
          "preview",
          "profileVideo",
          "shape",
          "shouldShowCloseFriendsBadge",
          "size",
          "source",
          "storyStatus",
          "testid",
          "testOnly_pressed",
          "testOnly_previewDelay",
        ]),
        B = c("useCometUniqueID")(),
        C = c("useSetAttributeRef")("id", B),
        D = "url(#" + B + ")",
        E = c("useSetAttributeRef")("mask", D),
        F = function (a, b) {
          var l,
            m = a.overlay;
          a = a.pressed;
          var u = z !== "none" ? d("profilePhotoUtils").getStoryRingSize(x) : 0,
            F = d("profilePhotoUtils").getBadgePosition(x / 2, !0),
            G = d("profilePhotoUtils").getBadgeSizeAndStrokeWidth(
              x,
              e == null ? void 0 : e.type
            ),
            H = G[0];
          G = G[1];
          var I = t != null ? { borderWidth: G } : {},
            J =
              (e == null ? void 0 : e.type) === "lastActiveTimeBadge" && x > 28,
            K = J ? {} : d("profilePhotoUtils").getBadgePosition(x / 2, !1);
          J =
            e != null
              ? h.jsx(
                  "div",
                  babelHelpers["extends"](
                    {
                      className: c("stylex")(
                        i.badge,
                        J && i.badgeWithLastActiveTime,
                        x === 60 &&
                          e.type === "activityBadge" &&
                          i.badgeWithShadow,
                        e.type === "activityBadge" &&
                          (t != null || e.withBorder) &&
                          i.badgeWithBorder
                      ),
                    },
                    c("CometVisualCompletionAttributes").IGNORE,
                    {
                      style: babelHelpers["extends"]({}, K, I),
                      children: h.jsx(j, { addOn: e, pressed: a, size: x }),
                    }
                  )
                )
              : null;
          I =
            f != null
              ? h.jsx("div", {
                  className:
                    "x14yjl9h xudhj91 x18nykt9 xww2gxu x10l6tqk xhtitgo",
                  "data-testid": void 0,
                  style: babelHelpers["extends"]({}, F),
                  children: h.jsx(
                    c("CometProfilePhotoNotificationBadge.react"),
                    { number: f.number }
                  ),
                })
              : null;
          var L =
            typeof y.uri === "string"
              ? h.jsx(c("BaseSvgImage.react"), {
                  src: y.uri,
                  style: { height: x - u * 4, width: x - u * 4 },
                  x: 2 * u,
                  y: 2 * u,
                })
              : h.jsx(c("CometImage.react"), {
                  alt: g,
                  height: x - 4 * u,
                  src: y.uri,
                  testid: void 0,
                  width: x - 4 * u,
                  xstyle: [
                    i.photo,
                    v === "circle" && i.photoCircle,
                    v === "roundedRect" && i.photoRoundedRect,
                  ],
                });
          H =
            typeof y.uri === "string"
              ? h.jsxs(
                  "svg",
                  babelHelpers["extends"](
                    {
                      "aria-hidden": g == null ? !0 : void 0,
                      "aria-label": g,
                      className: "x3ajldb",
                    },
                    c("CometVisualCompletionAttributes").IGNORE_DYNAMIC,
                    {
                      role: g != null ? "img" : "none",
                      style: { height: x, width: x },
                      children: [
                        h.jsxs("mask", {
                          id: B,
                          ref: C,
                          suppressHydrationWarning: !0,
                          children: [
                            v === "circle"
                              ? h.jsx("circle", {
                                  cx: x / 2,
                                  cy: x / 2,
                                  fill: "white",
                                  r: x / 2,
                                })
                              : h.jsx("rect", {
                                  cy: x / 2,
                                  fill: "white",
                                  height: x,
                                  rx: v === "square" ? 0 : 8,
                                  ry: v === "square" ? 0 : 8,
                                  width: x,
                                  x: 0,
                                  y: 0,
                                }),
                            h.jsx(
                              c(
                                "CometSSRReplaceContentOnHydrationAndBreakEventReplaying.react"
                              ),
                              {
                                useSuspenseDirectlyForSVG: !0,
                                children:
                                  J != null &&
                                  (e == null ? void 0 : e.type) !== "trigger" &&
                                  (e == null ? void 0 : e.type) !==
                                    "lastActiveTimeBadge" &&
                                  (e == null ? void 0 : e.backgroundColor) !==
                                    "none" &&
                                  h.jsx(
                                    "circle",
                                    babelHelpers["extends"](
                                      {
                                        cx:
                                          (l = K.left) != null
                                            ? l
                                            : x -
                                              ((l = K.right) != null ? l : 0),
                                        cy:
                                          (l = K.top) != null
                                            ? l
                                            : x -
                                              ((l = K.bottom) != null ? l : 0),
                                      },
                                      c("CometVisualCompletionAttributes")
                                        .IGNORE,
                                      {
                                        fill: "black",
                                        r: Math.max(
                                          (e == null ? void 0 : e.type) ===
                                            "activityBadge"
                                            ? 8
                                            : 0,
                                          H / 2 + G
                                        ),
                                      }
                                    )
                                  ),
                              }
                            ),
                            I != null &&
                              f != null &&
                              f.type === "notificationBadge" &&
                              h.jsx("rect", {
                                height: 22,
                                rx: 11,
                                ry: 11,
                                width:
                                  f.number <= 9 ? 22 : f.number <= 99 ? 33 : 44,
                                x:
                                  F.left != null
                                    ? F.left -
                                      (f.number <= 9
                                        ? 11
                                        : f.number <= 99
                                        ? 22
                                        : 33)
                                    : x - ((K = F.right) != null ? K : 0) - 11,
                                y:
                                  F.top != null
                                    ? F.top - 11
                                    : x - ((l = F.bottom) != null ? l : 0) - 11,
                              }),
                            z === "uploading" && (x === 36 || x === 60)
                              ? h.jsx("circle", {
                                  cx: x / 2,
                                  cy: x / 2,
                                  fill: "transparent",
                                  r: x / 2 - 1 * u,
                                  stroke: "black",
                                  strokeWidth: u * 2,
                                })
                              : z !== "none" &&
                                u > 0 &&
                                h.jsx("circle", {
                                  cx: x / 2,
                                  cy: x / 2,
                                  fill: "transparent",
                                  r: x / 2 - 1.5 * u,
                                  stroke: "black",
                                  strokeWidth: u,
                                }),
                            n &&
                              h.jsx("circle", {
                                cx: -x / 2 + 4,
                                cy: x / 2,
                                fill: "black",
                                r: x / 2 + 2,
                              }),
                          ],
                        }),
                        h.jsxs("g", {
                          mask: D,
                          ref: E,
                          suppressHydrationWarning: !0,
                          children: [
                            t != null
                              ? h.jsx(c("CometErrorBoundary.react"), {
                                  fallback: function () {
                                    return L;
                                  },
                                  children: h.jsx(c("CometPlaceholder.react"), {
                                    fallback: L,
                                    children: h.jsx(
                                      c("CometSSRSuspendOnServer.react"),
                                      {
                                        children: h.jsx("foreignObject", {
                                          height: "100%",
                                          width: "100%",
                                          x: 2 * u,
                                          y: 2 * u,
                                          children: h.jsx("div", {
                                            className: c("stylex")(
                                              i.videoContainer,
                                              v === "roundedRect" &&
                                                i.videoContainerRectRounded,
                                              v === "circle" &&
                                                i.videoContainerRounded
                                            ),
                                            style: {
                                              height: x - u * 4,
                                              width: x - u * 4,
                                            },
                                            children: h.jsx(
                                              c(
                                                "LazyCometProfileVideoSection.react"
                                              ),
                                              babelHelpers["extends"](
                                                {
                                                  linkProps: o,
                                                  onHoverIn: p,
                                                  onHoverOut: q,
                                                  onPress: r,
                                                  onPressIn: s,
                                                  profileVideo: t,
                                                  size: x - u * 4,
                                                  thumbnailUri: y.uri,
                                                },
                                                A
                                              )
                                            ),
                                          }),
                                        }),
                                      }
                                    ),
                                  }),
                                })
                              : L,
                            v === "circle"
                              ? h.jsx("circle", {
                                  className: c("stylex")(
                                    i.insetSVG,
                                    a && i.svgOverlay
                                  ),
                                  cx: x / 2,
                                  cy: x / 2,
                                  r: x / 2,
                                })
                              : h.jsx("rect", {
                                  className: c("stylex")(
                                    i.insetSVG,
                                    a && i.svgOverlay
                                  ),
                                  cy: x / 2,
                                  fill: "white",
                                  height: x,
                                  rx: v === "square" ? 0 : 8,
                                  ry: v === "square" ? 0 : 8,
                                  width: x,
                                  x: 0,
                                  y: 0,
                                }),
                            z === "uploading" && (x === 36 || x === 60)
                              ? null
                              : z !== "none" &&
                                u > 0 &&
                                h.jsx("circle", {
                                  className: c("stylex")(
                                    z === "unseen" &&
                                      (w ? i.storyRingGreen : i.storyRingBlue),
                                    z === "seen" && i.storyRingGray,
                                    z === "live" && i.storyRingRed,
                                    u === 4 && i.storyRingSize4,
                                    u === 3 && i.storyRingSize3,
                                    u === 2 && i.storyRingSize2
                                  ),
                                  cx: x / 2,
                                  cy: x / 2,
                                  fill: "transparent",
                                  r: x / 2 - u / 2,
                                  stroke: "var(--accent)",
                                  strokeWidth: u,
                                }),
                          ],
                        }),
                        z === "uploading" &&
                          (x === 36 || x === 60) &&
                          h.jsx("g", {
                            style: {
                              transform:
                                "scale(" + (x - Math.floor(x / 30)) / x + ")",
                            },
                            children: h.jsx(c("CometLoadingAnimation.react"), {
                              size: x,
                            }),
                          }),
                      ],
                    }
                  )
                )
              : L;
          return h.jsxs("div", {
            className: "x1rg5ohu x1n2onr6 x3ajldb x1ja2u2z",
            ref: b,
            children: [
              H,
              k,
              m,
              h.jsx(
                c(
                  "CometSSRReplaceContentOnHydrationAndBreakEventReplaying.react"
                ),
                { children: J }
              ),
              I,
            ],
          });
        };
      return !r && !o && u !== !0
        ? F({ pressed: !1 }, b)
        : h.jsx(c("CometTrackingNodeProvider.react"), {
            trackingNode: 3,
            children: h.jsx(
              c("CometPressable.react"),
              babelHelpers["extends"]({}, A, {
                cursorDisabled: l,
                linkProps: o,
                onHoverIn: p,
                onHoverOut: q,
                onPress: r,
                onPressIn: s,
                overlayDisabled: m,
                overlayRadius:
                  v === "circle" ? "50%" : v === "roundedRect" ? 8 : 0,
                ref: b,
                testOnly_pressed: u,
                testid: void 0,
                xstyle: function (a) {
                  a = a.pressed;
                  return [i.pressable, a && i.pressed];
                },
                children: function (a) {
                  var b = a.overlay;
                  a = a.pressed;
                  return F({ overlay: b, pressed: a }, null);
                },
              })
            ),
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function j(a) {
      var b = a.addOn,
        e = a.pressed;
      a = a.size;
      switch (b.type) {
        case "availabilityBadge":
          a = d("profilePhotoUtils").getBadgeSizeAndStrokeWidth(
            a,
            b == null ? void 0 : b.type
          );
          a = a[0];
          return h.jsx(c("CometProfilePhotoAvailabilityBadge.react"), {
            pressed: e,
            size: a,
          });
        case "lastActiveTimeBadge":
          return h.jsx(c("CometProfilePhotoLastActiveTimeBadge.react"), {
            border: b.border,
            pressed: e,
            time: b.time,
          });
        case "activityBadge":
          return h.jsx(k, {
            backgroundColor: b.backgroundColor,
            icon: b.icon,
            overflow: b.overflow,
            pressed: e,
            size: b.size,
          });
        case "trigger":
          return b.icon;
        case "multipleVoicesForAction":
          return b.badge;
        default:
          return null;
      }
    }
    j.displayName = j.name + " [from " + f.id + "]";
    function k(a) {
      var b = a.backgroundColor;
      b = b === void 0 ? "white" : b;
      var d = a.icon,
        e = a.overflow,
        f = a.pressed;
      a = a.size;
      return h.jsx(c("CometPressableChildrenWithOverlay.react"), {
        overlay: h.jsx(c("CometPressableOverlay.react"), {
          offset: 0,
          pressed: f,
          radius: "50%",
        }),
        children: h.jsx("div", {
          className: c("stylex")(
            i.activityBadge,
            a === 8 && i.activityIcon8,
            a === 10 && i.activityIcon10,
            a === 16 && i.activityIcon16
          ),
          style: { backgroundColor: b, overflow: e },
          children: d,
        }),
      });
    }
    k.displayName = k.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "TetraProfilePhoto.react",
  ["CometProfilePhoto.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a, b) {
      return h.jsx(
        c("CometProfilePhoto.react"),
        babelHelpers["extends"]({}, a, { ref: b })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "CometSkittleIcon.react",
  ["CometIcon.react", "profilePhotoUtils", "react", "stylex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        circle: {
          borderTopStartRadius: "x14yjl9h",
          borderTopEndRadius: "xudhj91",
          borderBottomEndRadius: "x18nykt9",
          borderBottomStartRadius: "xww2gxu",
          $$css: !0,
        },
        iconBadge: {
          alignItems: "x6s0dn4",
          backgroundColor: "xwnonoy",
          borderTopColor: "x6zyg47",
          borderEndColor: "x1xm1mqw",
          borderBottomColor: "xpn8fn3",
          borderStartColor: "xtct9fg",
          borderTopStartRadius: "x14yjl9h",
          borderTopEndRadius: "xudhj91",
          borderBottomEndRadius: "x18nykt9",
          borderBottomStartRadius: "xww2gxu",
          borderTopStyle: "x13fuv20",
          borderEndStyle: "xu3j5b3",
          borderBottomStyle: "x1q0q8m5",
          borderStartStyle: "x26u7qi",
          borderTopWidth: "xamhcws",
          borderEndWidth: "xol2nv",
          borderBottomWidth: "xlxy82",
          borderStartWidth: "x19p7ews",
          display: "x78zum5",
          justifyContent: "xl56j7k",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          paddingTop: "x1nn3v0j",
          paddingEnd: "xg83lxy",
          paddingBottom: "x1120s5i",
          paddingStart: "x1h0ha7o",
          position: "x10l6tqk",
          $$css: !0,
        },
        roundedRect: {
          borderTopStartRadius: "x1lq5wgf",
          borderTopEndRadius: "xgqcy7u",
          borderBottomEndRadius: "x30kzoy",
          borderBottomStartRadius: "x9jhf4c",
          $$css: !0,
        },
        skittle: {
          alignItems: "x6s0dn4",
          borderTopWidth: "x972fbf",
          borderEndWidth: "xcfux6l",
          borderBottomWidth: "x1qhh985",
          borderStartWidth: "xm0m39n",
          boxSizing: "x9f619",
          display: "x3nfvp2",
          justifyContent: "xl56j7k",
          position: "x1n2onr6",
          $$css: !0,
        },
      },
      j = {
        accent: { backgroundColor: "xwnonoy", $$css: !0 },
        blue: { backgroundColor: "x11goek", $$css: !0 },
        cherry: { backgroundColor: "x1tzrqqp", $$css: !0 },
        grape: { backgroundColor: "x17f3y5z", $$css: !0 },
        gray: { backgroundColor: "x1qhmfi1", $$css: !0 },
        green: { backgroundColor: "xv9rvxn", $$css: !0 },
        lemon: { backgroundColor: "xacajkf", $$css: !0 },
        lightblue: { backgroundColor: "x1hr4nm9", $$css: !0 },
        lime: { backgroundColor: "xbmc1ew", $$css: !0 },
        pink: { backgroundColor: "x1qrsksh", $$css: !0 },
        red: { backgroundColor: "x1ciooss", $$css: !0 },
        seafoam: { backgroundColor: "x1tw9p8u", $$css: !0 },
        teal: { backgroundColor: "x1emf0wh", $$css: !0 },
        tomato: { backgroundColor: "xqjkjv5", $$css: !0 },
        white: { backgroundColor: "x14hiurz", $$css: !0 },
      },
      k = {
        32: { height: "x10w6t97", width: "x1td3qas", $$css: !0 },
        36: { height: "xc9qbxq", width: "x14qfxbe", $$css: !0 },
        40: { height: "x1vqgdyp", width: "x100vrsf", $$css: !0 },
        48: { height: "xsdox4t", width: "x1useyqa", $$css: !0 },
        56: { height: "xnnlda6", width: "x15yg21f", $$css: !0 },
        60: { height: "xng8ra", width: "x1247r65", $$css: !0 },
      },
      l =
        ((b = {}),
        (b[24] = 16),
        (b[36] = 20),
        (b[40] = 24),
        (b[48] = 24),
        (b[56] = 24),
        (b[60] = 24),
        b);
    function m(a) {
      switch (a) {
        case "gray":
          return "primary";
        case "white":
          return "primary";
        case "lightblue":
          return "highlight";
        default:
          return "white";
      }
    }
    function a(a, b) {
      var e = a.color,
        f = a.disabled;
      f = f === void 0 ? !1 : f;
      var g = a.icon,
        n = a.iconAria,
        o = a.iconBadge,
        p = a.iconBadgeAria,
        q = a.shape;
      q = q === void 0 ? "circle" : q;
      a = a.size;
      return h.jsxs("div", {
        className: c("stylex")(
          q === "circle" && i.circle,
          q === "roundedRect" && i.roundedRect,
          i.skittle,
          j[e],
          k[a]
        ),
        ref: b,
        children: [
          h.jsx(
            c("CometIcon.react"),
            babelHelpers["extends"]({}, n, {
              color: f ? "disabled" : m(e),
              icon: g,
              size: l[a],
            })
          ),
          o &&
            h.jsx("div", {
              className:
                "x6s0dn4 xwnonoy x6zyg47 x1xm1mqw xpn8fn3 xtct9fg x14yjl9h xudhj91 x18nykt9 xww2gxu x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi xamhcws xol2nv xlxy82 x19p7ews x78zum5 xl56j7k x6ikm8r x10wlt62 x1nn3v0j xg83lxy x1120s5i x1h0ha7o x10l6tqk",
              style: d("profilePhotoUtils").getBadgePosition(a / 2),
              children: h.jsx(
                c("CometIcon.react"),
                babelHelpers["extends"]({}, p, {
                  color: "white",
                  icon: o,
                  size: 8,
                })
              ),
            }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = h.forwardRef(a);
    g["default"] = e;
  },
  98
);
__d(
  "BaseMultiPageViewReducer",
  ["FBLogger"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 0;
    function i() {
      return h++;
    }
    b = [{ key: i(), type: "initial_page" }];
    function a(a, b) {
      var d = a.filter(function (a) {
        return a.type !== "pushed_page" || !a.removed;
      });
      switch (b.type) {
        case "push_page":
          var e =
            b.pageKey != null
              ? d.find(function (a) {
                  return a.pageKey === b.pageKey;
                })
              : null;
          if (e != null)
            throw c("FBLogger")("comet_ui").mustfixThrow(
              "Tried to push page with duplicate key."
            );
          return d.concat([
            {
              component: b.component,
              direction: b.direction,
              key: i(),
              pageKey: b.pageKey,
              removed: !1,
              type: "pushed_page",
            },
          ]);
        case "clear_removed_pages":
          return d;
        case "pop_page":
          e = d.length - 1;
          e = d[e];
          if (e.type === "pushed_page") {
            var f = b.index;
            if (b.pageKey != null) {
              var g = d.findIndex(function (a) {
                return a.pageKey === b.pageKey;
              });
              f = g > -1 ? g : f;
            }
            return [].concat(d.slice(0, f != null ? Math.max(f + 1, 1) : -1), [
              babelHelpers["extends"]({}, e, { removed: !0 }),
            ]);
          }
      }
      return a;
    }
    g.initialState = b;
    g.reducer = a;
  },
  98
);
__d(
  "BaseMultiPageView.react",
  ["BaseMultiPageViewContainer.react", "BaseMultiPageViewReducer", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
      j = b.useReducer;
    function a(a, b) {
      a = babelHelpers["extends"]({}, a);
      var e = j(
          d("BaseMultiPageViewReducer").reducer,
          d("BaseMultiPageViewReducer").initialState
        ),
        f = e[0],
        g = e[1];
      e = i(
        function (a, b, c) {
          g({
            component: b,
            direction: a,
            pageKey: c == null ? void 0 : c.pageKey,
            type: "push_page",
          });
        },
        [g]
      );
      var k = i(
          function (a) {
            return g({
              index: a == null ? void 0 : a.index,
              pageKey: a == null ? void 0 : a.pageKey,
              type: "pop_page",
            });
          },
          [g]
        ),
        l = i(
          function () {
            g({ type: "clear_removed_pages" });
          },
          [g]
        );
      return h.jsx(
        c("BaseMultiPageViewContainer.react"),
        babelHelpers["extends"]({}, a, {
          onAddPage: e,
          onClearRemovedPages: l,
          onPopPage: k,
          pageHistory: f,
          ref: b,
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
  "CometDialogLoadingStateContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(!1);
    g["default"] = b;
  },
  98
);
__d(
  "ArrowLeftFilled24.svg.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsxs(
        "svg",
        babelHelpers["extends"](
          {
            fill: "currentColor",
            viewBox: "0 0 24 24",
            width: "1em",
            height: "1em",
          },
          a,
          {
            children: [
              a.title != null && h.jsx("title", { children: a.title }),
              a.children != null && h.jsx("defs", { children: a.children }),
              h.jsx("g", {
                fillRule: "evenodd",
                transform: "translate(-444 -156)",
                children: h.jsxs("g", {
                  fillRule: "nonzero",
                  children: [
                    h.jsx("path", {
                      d: "M99.957 8.957a1 1 0 0 0-1.414-1.414l-6.25 6.25a1 1 0 0 0 0 1.414l6.25 6.25a1 1 0 0 0 1.414-1.414L94.414 14.5l5.543-5.543z",
                      transform: "translate(355 153.5)",
                    }),
                    h.jsx("path", {
                      d: "M109 13.5H93.625a1 1 0 0 0 0 2H109a1 1 0 1 0 0-2z",
                      transform: "translate(355 153.5)",
                    }),
                  ],
                }),
              }),
            ],
          }
        )
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    a._isSVG = !0;
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "ArrowRightFilled24.svg.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsxs(
        "svg",
        babelHelpers["extends"](
          {
            fill: "currentColor",
            viewBox: "0 0 24 24",
            width: "1em",
            height: "1em",
          },
          a,
          {
            children: [
              a.title != null && h.jsx("title", { children: a.title }),
              a.children != null && h.jsx("defs", { children: a.children }),
              h.jsx("g", {
                fillRule: "evenodd",
                transform: "translate(-444 -156)",
                children: h.jsxs("g", {
                  fillRule: "nonzero",
                  children: [
                    h.jsx("path", {
                      d: "M102.043 20.043a1 1 0 0 0 1.414 1.414l6.25-6.25a1 1 0 0 0 0-1.414l-6.25-6.25a1 1 0 0 0-1.414 1.414l5.543 5.543-5.543 5.543z",
                      transform: "translate(355 153.5)",
                    }),
                    h.jsx("path", {
                      d: "M93 15.5h15.375a1 1 0 1 0 0-2H93a1 1 0 0 0 0 2z",
                      transform: "translate(355 153.5)",
                    }),
                  ],
                }),
              }),
            ],
          }
        )
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    a._isSVG = !0;
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "CometDialogHeaderFooterContainerContext.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({ type: "static", xstyle: null });
    g["default"] = b;
  },
  98
);
__d(
  "CometDialogScrollShadow.react",
  ["react", "stylex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        bottomShadow: { top: "x1pdr0v7", transform: "x19jd1h0", $$css: !0 },
        hidden: { opacity: "xg01cxk", $$css: !0 },
        shadow: {
          bottom: "x1ey2m1c",
          boxShadow: "x15e8x56",
          height: "xjm9jq1",
          position: "x10l6tqk",
          transitionDuration: "x1k90msu",
          transitionProperty: "x19991ni",
          width: "xh8yej3",
          $$css: !0,
        },
      };
    function a(a) {
      var b = a.hidden;
      a = a.position;
      return h.jsx("div", {
        className: c("stylex")([
          i.shadow,
          a === "bottom" && i.bottomShadow,
          b === !0 && i.hidden,
        ]),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometDialogHeaderContainer.react",
  [
    "CometDialogHeaderFooterContainerContext.react",
    "CometDialogScrollShadow.react",
    "CometDivider.react",
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
        container: { backgroundColor: "x1jx94hy", width: "xh8yej3", $$css: !0 },
        containerFloated: {
          end: "xds687c",
          position: "x10l6tqk",
          start: "x17qophe",
          top: "x13vifvy",
          width: "xh8yej3",
          zIndex: "x1vjfegm",
          $$css: !0,
        },
        containerStatic: { position: "x1n2onr6", $$css: !0 },
        content: {
          alignItems: "x6s0dn4",
          display: "x78zum5",
          flexShrink: "x2lah0s",
          justifyContent: "x1qughib",
          minHeight: "x879a55",
          position: "x1n2onr6",
          $$css: !0,
        },
      };
    function a(a) {
      var b = a.addOnBottom,
        e = a.children,
        f = a.id,
        g = a.withDivider;
      g = g === void 0 ? !1 : g;
      a = a.xstyle;
      var k = c("gkx")("664"),
        l = i(c("CometDialogHeaderFooterContainerContext.react")),
        m = l.showShadow,
        n = l.type;
      l = l.xstyle;
      l = k
        ? [
            n === "static" && j.containerStatic,
            n === "floated" && j.containerFloated,
            n === "placeholder" && l,
          ]
        : j.containerStatic;
      return h.jsxs("div", {
        "aria-hidden": n === "placeholder",
        className: c("stylex")([j.container, l]),
        children: [
          h.jsx("div", {
            className: c("stylex")([j.content, a]),
            id: f,
            children: h.jsx(c("FocusInertRegion.react"), {
              disabled: n !== "placeholder",
              focusQuery: d("focusScopeQueries").tabbableScopeQuery,
              children: e,
            }),
          }),
          b,
          g && h.jsx(c("CometDivider.react"), {}),
          n !== "placeholder" &&
            k &&
            h.jsx(c("CometDialogScrollShadow.react"), {
              hidden: !m,
              position: "top",
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
  "CrossFilled24.svg.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsxs(
        "svg",
        babelHelpers["extends"](
          {
            fill: "currentColor",
            viewBox: "0 0 24 24",
            width: "1em",
            height: "1em",
          },
          a,
          {
            children: [
              a.title != null && h.jsx("title", { children: a.title }),
              a.children != null && h.jsx("defs", { children: a.children }),
              h.jsx("path", {
                d: "M18.707 5.293a1 1 0 0 0-1.414 0L12 10.586 6.707 5.293a1 1 0 0 0-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 1 0 1.414 1.414L12 13.414l5.293 5.293a1 1 0 0 0 1.414-1.414L13.414 12l5.293-5.293a1 1 0 0 0 0-1.414z",
              }),
            ],
          }
        )
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    a._isSVG = !0;
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "useCometDialogPlaceholderRemoveSelectorIds.react",
  ["CometDialogHeaderFooterContainerContext.react", "gkx", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useContext,
      i = b.useMemo;
    function a() {
      var a = c("gkx")("664"),
        b = h(c("CometDialogHeaderFooterContainerContext.react")),
        d = b.type;
      b = i(
        function () {
          return d === "placeholder" && a
            ? { "aria-label": "", id: void 0, role: "none", testid: void 0 }
            : null;
        },
        [d, a]
      );
      return b;
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometDialogHeader.react",
  [
    "fbt",
    "ArrowLeftFilled24.svg.react",
    "ArrowRightFilled24.svg.react",
    "CometCircleButton.react",
    "CometDialogHeaderContainer.react",
    "CrossFilled24.svg.react",
    "Locale",
    "TetraText.react",
    "emptyFunction",
    "react",
    "stylex",
    "useCometDialogPlaceholderRemoveSelectorIds.react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = {
        headerItem: {
          marginStart: "x1d52u69",
          marginEnd: "xktsk01",
          $$css: !0,
        },
        headerPlaceholder: { height: "xc9qbxq", width: "x14qfxbe", $$css: !0 },
      },
      k = c("Locale").isRTL();
    function a(a) {
      var b = a.backTestID;
      b = b === void 0 ? "back-button" : b;
      var d = a.closeTestID;
      d = d === void 0 ? "close-button" : d;
      var e = a.disabled;
      e = e === void 0 ? !1 : e;
      var f = a.withBackButton;
      f = f === void 0 ? !1 : f;
      var g = a.withCloseButton;
      g = g === void 0 ? !0 : g;
      var l = a.onClose;
      l = l === void 0 ? c("emptyFunction") : l;
      var m = a.onBack;
      m = m === void 0 ? c("emptyFunction") : m;
      var n = a.withoutDivider;
      n = n === void 0 ? !1 : n;
      var o = a.text;
      a = a.id;
      var p = c("useCometDialogPlaceholderRemoveSelectorIds.react")();
      d = p != null ? { testid: p.testid } : { testid: d };
      p = p != null ? { testid: p.testid } : { testid: b };
      return i.jsxs(c("CometDialogHeaderContainer.react"), {
        withDivider: !n,
        children: [
          f
            ? i.jsx("div", {
                className: "x1d52u69 xktsk01",
                children: i.jsx(
                  c("CometCircleButton.react"),
                  babelHelpers["extends"](
                    {
                      disabled: e,
                      icon: k
                        ? c("ArrowRightFilled24.svg.react")
                        : c("ArrowLeftFilled24.svg.react"),
                      label: h._("Retour"),
                      onPress: m,
                      size: 36,
                    },
                    p
                  )
                ),
              })
            : i.jsx("div", {
                className: c("stylex")([j.headerItem, j.headerPlaceholder]),
              }),
          o != null &&
            i.jsx(c("TetraText.react"), {
              align: "center",
              id: a,
              isSemanticHeading: !0,
              numberOfLines: 1,
              type: "headlineEmphasized2",
              children: o,
            }),
          g
            ? i.jsx("div", {
                className: "x1d52u69 xktsk01",
                children: i.jsx(
                  c("CometCircleButton.react"),
                  babelHelpers["extends"](
                    {
                      disabled: e,
                      icon: c("CrossFilled24.svg.react"),
                      label: h._("Fermer"),
                      onPress: l,
                      size: 36,
                    },
                    d
                  )
                ),
              })
            : i.jsx("div", {
                className: c("stylex")([j.headerPlaceholder, j.headerItem]),
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
  "CometDialogLoadingStateImpl.react",
  ["CometGlimmer.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        firstLine: {
          height: "x1kpxq89",
          marginBottom: "xyorhqc",
          maxWidth: "xq2pcee",
          $$css: !0,
        },
        glimmer: {
          alignSelf: "xqcrz7y",
          borderTopStartRadius: "x1lq5wgf",
          borderTopEndRadius: "xgqcy7u",
          borderBottomEndRadius: "x30kzoy",
          borderBottomStartRadius: "x9jhf4c",
          boxSizing: "x9f619",
          marginStart: "x1d52u69",
          marginEnd: "xktsk01",
          width: "x19sv2k2",
          $$css: !0,
        },
        heading: {
          height: "x1qx5ct2",
          marginTop: "x1sy10c2",
          marginBottom: "xieb3on",
          maxWidth: "xws0hc0",
          $$css: !0,
        },
        secondLine: {
          height: "x1kpxq89",
          marginBottom: "xieb3on",
          maxWidth: "xg16ivm",
          $$css: !0,
        },
      };
    function a(a) {
      return h.jsxs(h.Fragment, {
        children: [
          h.jsx(c("CometGlimmer.react"), {
            index: 0,
            xstyle: [i.glimmer, i.heading],
          }),
          h.jsx(c("CometGlimmer.react"), {
            index: 1,
            xstyle: [i.glimmer, i.firstLine],
          }),
          h.jsx(c("CometGlimmer.react"), {
            index: 2,
            xstyle: [i.glimmer, i.secondLine],
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
  "CometSSRViewportHints",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    e = {
      max: function (a, b) {
        return a <= b;
      },
      min: function (a, b) {
        return a >= b;
      },
    };
    var g = null,
      h = null,
      i = [];
    function a(a) {
      return a === "width" ? g : h;
    }
    function b(a) {
      (g = a.width_px), (h = a.height_px);
    }
    function c(a, b, c, d) {
      var e = i.findIndex(function (b) {
        return b.dimension === a && b.operation === c && b.result === d;
      });
      if (e === -1)
        i.push({ dimension: a, numPixels: b, operation: c, result: d });
      else {
        var f = (c === "min" && d === !0) || (c === "max" && d === !1),
          g = i[e].numPixels;
        i[e].numPixels = f ? Math.max(g, b) : Math.min(g, b);
      }
    }
    function d() {
      i.length = 0;
    }
    f.check = e;
    f.useMatchViewportResults = i;
    f.getDimension = a;
    f.setDimensions = b;
    f.addUseMatchViewportResult = c;
    f.clearUseMatchViewportResults = d;
  },
  66
);
__d(
  "useMatchViewport",
  ["CometSSRViewportHints", "ExecutionEnvironment", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useLayoutEffect,
      i = b.useState;
    function a(a, b, e) {
      var f = i(function () {
          if (!c("ExecutionEnvironment").canUseDOM) {
            var f = d("CometSSRViewportHints").getDimension(b);
            return f != null ? d("CometSSRViewportHints").check[a](f, e) : !1;
          }
          return !!window.matchMedia && window.matchMedia(j(a, b, e)).matches;
        }),
        g = f[0],
        k = f[1];
      c("ExecutionEnvironment").canUseDOM ||
        d("CometSSRViewportHints").addUseMatchViewportResult(b, e, a, g);
      h(
        function () {
          if (!window.matchMedia) return;
          var c = j(a, b, e),
            d = window.matchMedia(c),
            f = function (a) {
              return k(a.matches);
            };
          d.addListener(f);
          return function () {
            return d.removeListener(f);
          };
        },
        [a, b, e]
      );
      return g;
    }
    function j(a, b, c) {
      return "(" + a + "-" + b + ": " + c + "px)";
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometDialogPage.react",
  [
    "BaseHeadingContextWrapper.react",
    "BaseScrollRegionObserver.react",
    "BaseScrollableArea.react",
    "CometDialogHeaderFooterContainerContext.react",
    "FocusInertRegion.react",
    "focusScopeQueries",
    "gkx",
    "react",
    "stylex",
    "useMatchViewport",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useMemo,
      j = b.useRef,
      k = b.useState,
      l = {
        container: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          flexGrow: "x1iyjqo2",
          minHeight: "x7ywyr2",
          $$css: !0,
        },
        inert: { pointerEvents: "x47corl", userSelect: "x87ps6o", $$css: !0 },
        placeholder: {
          opacity: "xg01cxk",
          pointerEvents: "x47corl",
          position: "x1n2onr6",
          $$css: !0,
        },
        root: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          flexGrow: "x1iyjqo2",
          maxHeight: "x1yr2tfi",
          position: "x1n2onr6",
          "@media (max-width: 679px)_maxHeight": "x1jxyteu",
          $$css: !0,
        },
        rootFullHeight: { minHeight: "xw36ugu", $$css: !0 },
        rootMinHeight: {
          "@media (max-width: 679px)_minHeight": "x1mfppf3",
          $$css: !0,
        },
        scrollableArea: {
          flexGrow: "x1iyjqo2",
          overscrollBehaviorY: "xy5w88m",
          $$css: !0,
        },
        scrollSectionObserver: { height: "xjm9jq1", $$css: !0 },
      };
    function a(a) {
      var b = a.children,
        e = a.footer,
        f = a.header,
        g = a.isContentInert;
      g = g === void 0 ? !1 : g;
      var m = a.isFullHeightByDefault;
      m = m === void 0 ? !1 : m;
      var n = a.mobileFullHeight;
      n = n === void 0 ? !0 : n;
      var o = a.pageXStyle;
      a = a.scrollAreaRef;
      var p = j(null),
        q = k(!1),
        r = q[0],
        s = q[1];
      q = k(!1);
      var t = q[0],
        u = q[1];
      q = j(null);
      var v = c("useMatchViewport")("max", "width", 679),
        w = c("gkx")("664"),
        x = {
          callback: function (a) {
            s(!a);
          },
          heightXStyle: l.scrollSectionObserver,
        },
        y = {
          callback: function (a) {
            u(!a);
          },
          heightXStyle: l.scrollSectionObserver,
        },
        z = i(function () {
          return { type: "placeholder", xstyle: l.placeholder };
        }, []),
        A = i(
          function () {
            return { showShadow: r, type: b != null ? "floated" : "static" };
          },
          [b, r]
        ),
        B = i(
          function () {
            return { showShadow: t, type: b != null ? "floated" : "static" };
          },
          [b, t]
        ),
        C = h.jsx(c("CometDialogHeaderFooterContainerContext.react").Provider, {
          value: z,
          children: f,
        });
      z =
        e != null &&
        h.jsx(c("CometDialogHeaderFooterContainerContext.react").Provider, {
          value: z,
          children: e,
        });
      return h.jsxs("div", {
        className: c("stylex")([
          l.root,
          m && l.rootFullHeight,
          n && b != null && l.rootMinHeight,
          o,
        ]),
        ref: q,
        children: [
          w
            ? h.jsx(
                c("CometDialogHeaderFooterContainerContext.react").Provider,
                { value: A, children: f }
              )
            : f,
          b != null &&
            h.jsx(c("BaseHeadingContextWrapper.react"), {
              children: h.jsxs(c("BaseScrollableArea.react"), {
                contentRef: p,
                horizontal: !1,
                ref: a,
                vertical: !0,
                withBottomShadow: e != null && !w,
                withTopShadow: f != null && !w,
                xstyle: [l.scrollableArea, g && l.inert],
                children: [
                  h.jsx(c("BaseScrollRegionObserver.react"), {
                    end: y,
                    rootRef: q,
                    start: x,
                  }),
                  w && C,
                  h.jsx(c("FocusInertRegion.react"), {
                    disabled: !g,
                    focusQuery: d("focusScopeQueries").tabbableScopeQuery,
                    children: h.jsx("div", {
                      className: "x78zum5 xdt5ytf x1iyjqo2 x7ywyr2",
                      ref: p,
                      children: b,
                    }),
                  }),
                  w && !v && z,
                ],
              }),
            }),
          w
            ? h.jsx(
                c("CometDialogHeaderFooterContainerContext.react").Provider,
                { value: B, children: e }
              )
            : e,
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometDialogPageLoadingState.react",
  [
    "CometDialogHeader.react",
    "CometDialogLoadingStateImpl.react",
    "CometDialogPage.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      a = a.onClose;
      return h.jsx(c("CometDialogPage.react"), {
        footer: null,
        header: h.jsx(c("CometDialogHeader.react"), { onClose: a }),
        children: h.jsx(c("CometDialogLoadingStateImpl.react"), {}),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometDialogContainer.react",
  [
    "BaseDialog.react",
    "BaseMultiPageView.react",
    "CometDialogLoadingStateContext",
    "CometDialogPageLoadingState.react",
    "emptyFunction",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useContext,
      j = b.useMemo,
      k = {
        anchor: {
          alignItems: "x1qjc9v5",
          maxHeight: "x1bwycvy",
          paddingStart: "x1e558r4",
          paddingEnd: "x150jy0e",
          paddingTop: "x1x97wu9",
          paddingBottom: "xbr3nou",
          "@supports (padding: env(safe-area-inset-bottom, 0))_paddingBottom":
            "xqit15g",
          "@supports (padding: env(safe-area-inset-bottom, 0))_paddingTop":
            "x1bi8yb4",
          $$css: !0,
        },
        card: {
          backgroundColor: "x1jx94hy",
          borderTopStartRadius: "x1qpq9i9",
          borderTopEndRadius: "xdney7k",
          borderBottomEndRadius: "xu5ydu1",
          borderBottomStartRadius: "xt3gfkd",
          boxShadow: "x104qc98",
          clipPath: "x1gj8qfm",
          flexGrow: "x1iyjqo2",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          "@media (max-width: 679px)_boxShadow": "x1likypf",
          "@media (max-width: 679px)_clipPath": "x7b354b",
          "@media (max-width: 679px)_overflowX": "x1e9k66k",
          "@media (max-width: 679px)_overflowY": "x12l8kdc",
          $$css: !0,
        },
        dialog: {
          alignItems: "x1qjc9v5",
          borderTopStartRadius: "x1qpq9i9",
          borderTopEndRadius: "xdney7k",
          borderBottomEndRadius: "xu5ydu1",
          borderBottomStartRadius: "xt3gfkd",
          display: "x78zum5",
          overflowX: "x1plvlek",
          overflowY: "xryxfnj",
          "@media (max-width: 679px)_boxShadow": "xcatxm7",
          $$css: !0,
        },
        root: {
          "@media (max-width: 679px)_justifyContent": "xshlqvt",
          $$css: !0,
        },
      },
      l = {
        medium: { maxWidth: "xrgej4m", width: "xh8yej3", $$css: !0 },
        small: { maxWidth: "x1n7qst7", width: "xh8yej3", $$css: !0 },
      };
    function a(a, b) {
      var d = a.anchorXStyle,
        e = a.children,
        f = a.disableClosingWithMask;
      f = f === void 0 ? !1 : f;
      var g = a.label,
        m = a.labelledBy,
        n = a.onClose,
        o = a.size;
      o = o === void 0 ? "small" : o;
      a = a.testid;
      a = j(
        function () {
          var a;
          return h.jsx(c("CometDialogPageLoadingState.react"), {
            onClose: (a = n) != null ? a : c("emptyFunction"),
          });
        },
        [n]
      );
      var p = i(c("CometDialogLoadingStateContext"));
      return h.jsx(c("BaseDialog.react"), {
        anchorXStyle: [k.anchor, d],
        "aria-label": g,
        "aria-labelledby": m,
        disableClosingWithMask: f,
        onClose: (d = n) != null ? d : c("emptyFunction"),
        ref: b,
        rootXStyle: k.root,
        testid: void 0,
        xstyle: [k.dialog, l[o]],
        children: h.jsx(c("BaseMultiPageView.react"), {
          disableAutoRestoreFocus: p,
          fallback: a,
          xstyle: k.card,
          children: e,
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
  "CometDialog.react",
  [
    "CometDialogContainer.react",
    "CometDialogPage.react",
    "react",
    "useCometUniqueID",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a, b) {
      var d = a.anchorXStyle,
        e = a.disableClosingWithMask,
        f = a.header,
        g = a.label,
        i = a.labelledBy,
        j = a.onClose,
        k = a.size,
        l = a.testid;
      l = babelHelpers.objectWithoutPropertiesLoose(a, [
        "anchorXStyle",
        "disableClosingWithMask",
        "header",
        "label",
        "labelledBy",
        "onClose",
        "size",
        "testid",
      ]);
      a = c("useCometUniqueID")();
      var m = f;
      f != null &&
        f.props.id == null &&
        (m = h.cloneElement(
          f,
          babelHelpers["extends"]({}, f.props, { id: a })
        ));
      return h.jsx(c("CometDialogContainer.react"), {
        anchorXStyle: d,
        disableClosingWithMask: e,
        label: g,
        labelledBy:
          (d = (f = i) != null ? f : (a = m) == null ? void 0 : a.props.id) !=
          null
            ? d
            : null,
        onClose: j,
        ref: b,
        size: k,
        testid: void 0,
        children: h.jsx(
          c("CometDialogPage.react"),
          babelHelpers["extends"]({ header: m }, l)
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
  "CometDialogLoadingStateHeader.react",
  [
    "fbt",
    "BaseDivider.react",
    "CometCircleButton.react",
    "CometDialogHeaderFooterContainerContext.react",
    "CrossFilled24.svg.react",
    "gkx",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = d("react").useContext,
      k = {
        headerContainer: { position: "x1n2onr6", width: "xh8yej3", $$css: !0 },
        headerFloated: { position: "x10l6tqk", $$css: !0 },
        headerRow: {
          alignItems: "x6s0dn4",
          display: "x78zum5",
          flexShrink: "x2lah0s",
          justifyContent: "x13a6bvl",
          marginStart: "x1d52u69",
          marginEnd: "xktsk01",
          minHeight: "x879a55",
          $$css: !0,
        },
      };
    function a(a) {
      var b = c("gkx")("664"),
        d = j(c("CometDialogHeaderFooterContainerContext.react"));
      d = d.xstyle;
      return i.jsxs("div", {
        className: c("stylex")([k.headerContainer, b && k.headerFloated, d]),
        children: [
          i.jsx("div", {
            className:
              "x6s0dn4 x78zum5 x2lah0s x13a6bvl x1d52u69 xktsk01 x879a55",
            id: a.id,
            children: i.jsx(c("CometCircleButton.react"), {
              icon: c("CrossFilled24.svg.react"),
              label: h._("Fermer"),
              onPress: a.onClose,
              size: 36,
              testid: void 0,
            }),
          }),
          i.jsx(c("BaseDivider.react"), {}),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometDialogLoadingState.react",
  [
    "fbt",
    "CometDialog.react",
    "CometDialogLoadingStateContext",
    "CometDialogLoadingStateHeader.react",
    "CometDialogLoadingStateImpl.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.id;
      a = a.onClose;
      return i.jsx(c("CometDialogLoadingStateContext").Provider, {
        value: !0,
        children: i.jsx(c("CometDialog.react"), {
          footer: null,
          header: i.jsx(c("CometDialogLoadingStateHeader.react"), {
            id: b,
            onClose: a,
          }),
          label: h._("Chargement..."),
          onClose: a,
          children: i.jsx(c("CometDialogLoadingStateImpl.react"), {}),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometDialogContext",
  ["FBLogger", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    function a() {
      c("FBLogger")("comet_ui")
        .blameToPreviousFrame()
        .mustfix(
          "Attempted to imperatively render a dialog without CometTransientDialogProvider in the tree. This is not allowed. Please add a CometTransientDialogProvider to render a dialog (https://fburl.com/dialog-provider)."
        );
    }
    e = b.createContext(a);
    g["default"] = e;
  },
  98
);
__d(
  "CometSuspendedDialogImpl.react",
  ["CometPlaceholder.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.dialog,
        d = a.dialogProps,
        e = a.fallback,
        f = a.onClose;
      a = a.onHide;
      return h.jsx(c("CometPlaceholder.react"), {
        fallback: e(f),
        children: h.jsx(
          b,
          babelHelpers["extends"]({}, d, { onClose: f, onHide: a })
        ),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useBaseLazyDialog",
  [
    "CometDialogContext",
    "CometSuspendedDialogImpl.react",
    "lazyLoadComponent",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useContext;
    function a(a, b, d) {
      var e = i(c("CometDialogContext")),
        f = h(
          function (f, g) {
            var h = c("lazyLoadComponent")(a);
            e(
              c("CometSuspendedDialogImpl.react"),
              { dialog: h, dialogProps: f, fallback: b },
              { loadType: "lazy", tracePolicy: d },
              g
            );
          },
          [e, a, b, d]
        ),
        g = h(
          function () {
            a.preload();
          },
          [a]
        );
      return [f, g];
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometLazyDialog",
  [
    "CometDialogLoadingState.react",
    "react",
    "tracePolicyFromResource",
    "useBaseLazyDialog",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = function (a) {
        return h.jsx(c("CometDialogLoadingState.react"), { onClose: a });
      };
    function a(a, b) {
      var d = c("tracePolicyFromResource")("comet.dialog", a);
      return c("useBaseLazyDialog")(a, (a = b) != null ? a : i, d);
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometHovercardQueryRenderer.entrypoint",
  [
    "CometHovercardQueryRendererQuery$Parameters",
    "JSResourceForInteraction",
    "WebPixelRatio",
    "gkx",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        var e = a.actionBarRenderLocation,
          f = a.context,
          g = a.entityID;
        a = a.groupID;
        return {
          queries: {
            hovercardQueryReference: {
              parameters: b("CometHovercardQueryRendererQuery$Parameters"),
              variables: {
                actionBarRenderLocation: e,
                context: f,
                entityID: g,
                groupID: a,
                includeTdaInfo: c("gkx")("4427"),
                scale: d("WebPixelRatio").get(),
              },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "CometHovercardQueryRenderer.react"
      ).__setRef("CometHovercardQueryRenderer.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "CometErrorOverlay",
  ["ReactDOMComet", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    function h() {
      var a = document.body;
      if (a == null) return null;
      var b = document.createElement("div");
      a.appendChild(b);
      return b;
    }
    function a(a) {
      var b = h();
      if (b != null) {
        var c = function () {
            window.setTimeout(function () {
              e.unmount(), b.remove();
            }, 0);
          },
          e = d("ReactDOMComet").createRoot(b, {
            unstable_concurrentUpdatesByDefault: !0,
            unstable_strictMode: !0,
          });
        a = a(c);
        e.render(a);
        return c;
      }
    }
    g.injectComponent = a;
  },
  98
);
__d(
  "UserMismatchExpected",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = !1;
    function a(a) {
      g = a;
    }
    function b() {
      return g;
    }
    f.setIsUserMismatchExpected = a;
    f.getIsUserMismatchExpected = b;
  },
  66
);
__d(
  "handleErrorCodeBasicSideEffects",
  ["errorCode", "UserMismatchExpected"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    function a(a) {
      if (
        a === 1357032 &&
        d("UserMismatchExpected").getIsUserMismatchExpected() === !0
      )
        return !0;
      if (a === 1357001 || a === 1357032) {
        window.location.reload(!0);
        return !0;
      }
      return !1;
    }
    g["default"] = a;
  },
  98
);
__d(
  "handleCometErrorCodeSideEffects",
  [
    "errorCode",
    "fbt",
    "CometDialogLoadingState.react",
    "CometErrorOverlay",
    "CometPlaceholder.react",
    "JSResourceForInteraction",
    "NewsRegulationErrorMessageData",
    "OutsideExceptionKeyCommandListener.react",
    "ServerHTML.react",
    "deferredLoadComponent",
    "handleCheckpointRedirect",
    "handleErrorCodeBasicSideEffects",
    "lazyLoadComponent",
    "react",
    "requireDeferredForDisplay",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = c("deferredLoadComponent")(
        c("requireDeferredForDisplay")("CometExceptionDialog.react").__setRef(
          "handleCometErrorCodeSideEffects"
        )
      ),
      l = c("lazyLoadComponent")(
        c("JSResourceForInteraction")(
          "CometNewsRegulationDialog.react"
        ).__setRef("handleCometErrorCodeSideEffects")
      ),
      m = new Set();
    function n(a) {
      return (
        typeof a === "object" &&
        a != null &&
        Object.prototype.hasOwnProperty.call(a, "__html")
      );
    }
    function o(a, b, e) {
      d("CometErrorOverlay").injectComponent(function (d) {
        return j.jsx(c("OutsideExceptionKeyCommandListener.react"), {
          children: j.jsx(c("CometPlaceholder.react"), {
            fallback: j.jsx(c("CometDialogLoadingState.react"), {}),
            children: j.jsx(l, {
              errorDescription: b,
              onClose: function () {
                m["delete"](a), d();
              },
              regulationType: e,
            }),
          }),
        });
      });
    }
    function p(a, b, e, f) {
      f === void 0 && (f = null);
      var g = e,
        h = b;
      g = j.jsx(c("ServerHTML.react"), { blob: g });
      n(h) && (h = i._("Une erreur s\u2019est produite."));
      d("CometErrorOverlay").injectComponent(function (b) {
        return j.jsx(c("OutsideExceptionKeyCommandListener.react"), {
          children: j.jsx(c("CometPlaceholder.react"), {
            fallback: j.jsx(c("CometDialogLoadingState.react"), {}),
            children: j.jsx(k, {
              debugInfo: f,
              errorDescription: g,
              errorSummary: h,
              onClose: function () {
                m["delete"](a), b();
              },
              testid: void 0,
            }),
          }),
        });
      });
    }
    function a(a, b, d, e, f, g) {
      e === void 0 && (e = null);
      f === void 0 && (f = !0);
      g === void 0 && (g = null);
      if (!c("handleErrorCodeBasicSideEffects")(a))
        if (a === 1357053 && e != null) c("handleCheckpointRedirect")(e);
        else if (!m.has(a)) {
          m.add(a);
          if (f) {
            e = c("NewsRegulationErrorMessageData").errorCodeToRegType[a];
            e != null ? o(a, d, e) : p(a, b, d, g);
          }
        }
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometAsyncFetchError",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function g(a) {
      if (a == null) return "";
      if (typeof a === "string") return a;
      try {
        return String.fromCharCode.apply(null, new Uint16Array(a));
      } catch (a) {
        return "<error parsing ArrayBuffer>";
      }
    }
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c, d, e, f) {
        var g;
        g = a.call(this, b) || this;
        g.errorMsg = b;
        g.errorCode = c;
        g.errorRawResponseHeaders = d;
        g.errorRawTransport = e;
        g.errorType = f;
        return g;
      }
      var c = b.prototype;
      c.toString = function () {
        var a;
        a =
          ((a = this.errorCode) != null ? a : "") +
          "." +
          g(this.errorMsg) +
          "." +
          ((a = this.errorRawResponseHeaders) != null ? a : "") +
          "." +
          ((a = this.errorRawTransport) != null ? a : "") +
          "." +
          ((a = this.errorType) != null ? a : "") +
          "." +
          ((a = this.errorRawTransportStatus) != null ? a : "");
        return "CometAyncFetchError: " + a;
      };
      return b;
    })(babelHelpers.wrapNativeSuper(Error));
    f["default"] = a;
  },
  66
);
__d(
  "cometAsyncRequestHeaders",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = [];
    function a() {
      return g.reduce(function (a, b) {
        b = b();
        return Object.assign(b, a);
      }, {});
    }
    function b(a) {
      g.push(a);
    }
    f.getHeaders = a;
    f.registerHeaderProvider = b;
  },
  66
);
__d(
  "cometAsyncFetch",
  [
    "CSRFGuard",
    "CometAsyncFetchError",
    "ConstUriUtils",
    "DTSG",
    "DTSG_ASYNC",
    "NetworkStatus",
    "PHPQuerySerializer",
    "Promise",
    "XHRRequest",
    "cometAsyncRequestHeaders",
    "getAsyncParams",
    "handleCometErrorCodeSideEffects",
    "isFacebookURI",
    "isHorizonDotMetaDotComURI",
    "isInternalFBURI",
    "isMessengerDotComURI",
    "isWorkDotMetaDotComURI",
    "isWorkplaceDotComURI",
    "isWorkroomsDotComURI",
    "recoverableViolation",
    "setTimeout",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 250;
    function a(a, e) {
      e === void 0 && (e = { data: {}, method: "GET" });
      var f = 0,
        g;
      return new (b("Promise"))(function (b, k) {
        var l;
        function m(f) {
          if (e.ignoreResponse === !0) return b();
          var g;
          f = f.trim();
          try {
            d("CSRFGuard").exists(f) && (f = d("CSRFGuard").clean(f)),
              (g = JSON.parse(f));
          } catch (b) {
            c("recoverableViolation")(
              'Unable to parse uri "' +
                a.toString() +
                '" response. Error: ' +
                (b == null ? void 0 : b.message) +
                ", response: " +
                f.substring(0, 1e3),
              "comet_infra"
            );
            k(b);
            return;
          }
          if (j(a)) {
            var h;
            f = (f = g) == null ? void 0 : f.dtsgToken;
            h = (h = g) == null ? void 0 : h.dtsgAsyncGetToken;
            f && d("DTSG").setToken(f);
            h && d("DTSG_ASYNC").setToken(h);
          }
          if (g.error) {
            c("handleCometErrorCodeSideEffects")(
              g.error,
              g.errorSummary,
              g.errorDescription,
              g.redirectTo,
              e.shouldShowErrorDialog
            );
            k({
              error: g.error,
              errorMsg: g.errorDescription,
              errorType: g.errorSummary,
              redirectTo: g.redirectTo,
            });
            return;
          }
          if (((f = e) == null ? void 0 : f.getFullPayload) === !0) {
            b(g);
            return;
          }
          b((h = g) == null ? void 0 : h.payload);
        }
        function n(a) {
          var b = e.retryCount != null && e.retryCount > 0 && f <= e.retryCount;
          if (b) c("setTimeout")(p, h);
          else {
            b = new (c("CometAsyncFetchError"))(
              a.errorMsg,
              a.errorCode,
              a.errorRawResponseHeaders,
              a.errorRawTransport,
              a.errorType
            );
            return k(b);
          }
        }
        function o() {
          var b = new (c("CometAsyncFetchError"))(
            "Request to " + a + " was aborted",
            null,
            null,
            null,
            "Abort"
          );
          return k(b);
        }
        function p() {
          var a;
          if (((a = e.abortSignal) == null ? void 0 : a.aborted) === !0)
            return o();
          q();
          r();
        }
        function q() {
          l != null && (l.abort(), (l = null));
        }
        function r() {
          var b,
            g = (b = e.requestHeaders) != null ? b : {};
          Object.assign(g, d("cometAsyncRequestHeaders").getHeaders());
          b = Object.keys(g)
            .reduce(function (a, b) {
              return a.setRequestHeader(b, g[b]);
            }, new (c("XHRRequest"))(a))
            .setMethod(e.method)
            .setData(
              babelHelpers["extends"](
                {},
                e.data,
                c("getAsyncParams")(
                  e.method,
                  (b = e.skipSRState) != null ? b : !1
                )
              )
            )
            .setRawData(e.formData)
            .setResponseHandler(m)
            .setErrorHandler(n)
            .setAbortHandler(o)
            .setUploadProgressHandler(e.onUploadProgress)
            .setDataSerializer(c("PHPQuerySerializer").serialize);
          l = b;
          e.withCredentials === !0 && i(a) && b.setWithCredentials(!0);
          b.send();
          f++;
        }
        e.abortSignal &&
          (e.abortSignal.onabort = function () {
            q();
          });
        c("NetworkStatus").isOnline()
          ? p()
          : (g = c("NetworkStatus").onChange(function (a) {
              a = a.online;
              a && (p(), g.remove());
            }));
      });
    }
    function i(a) {
      a = d("ConstUriUtils").getUri(a);
      return a == null
        ? !1
        : c("isFacebookURI")(a) ||
            c("isInternalFBURI")(a) ||
            c("isMessengerDotComURI")(a) ||
            c("isWorkplaceDotComURI")(a) ||
            c("isWorkroomsDotComURI")(a) ||
            c("isWorkDotMetaDotComURI")(a) ||
            c("isHorizonDotMetaDotComURI")(a);
    }
    function j(a) {
      a = d("ConstUriUtils").getUri(a);
      if (a == null) return !1;
      return !a.getProtocol() && !a.getDomain()
        ? !0
        : document.location.origin === a.getOrigin();
    }
    g["default"] = a;
  },
  98
);
__d(
  "DOMRectIsEqual",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      if (!a && !b) return !0;
      else if (!a || !b) return !1;
      return (
        a.x === b.x &&
        a.y === b.y &&
        a.width === b.width &&
        a.height === b.height
      );
    }
    f["default"] = a;
  },
  66
);
__d(
  "VideoPlayerAudioAvailabilityInfo",
  ["recoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b = a.audioAvailability;
      a = a.mutedSegmentsUnsanitized;
      a = a
        .map(function (a) {
          return a.muteStartTimeInSec != null &&
            a.muteEndTimeInSec != null &&
            a.muteEndTimeInSec > a.muteStartTimeInSec
            ? {
                muteEndTimeInSec: a.muteEndTimeInSec,
                muteStartTimeInSec: a.muteStartTimeInSec,
              }
            : null;
        })
        .filter(Boolean);
      return { audioAvailability: b, mutedSegments: a };
    }
    function b(a, b) {
      var d = a.audioAvailability;
      a = a.mutedSegments;
      var e = b.playheadPosition,
        f;
      b = !1;
      var g = !1;
      switch (d) {
        case "AVAILABLE_BUT_MUTED":
          a.length > 0
            ? ((b =
                e != null &&
                a.some(function (a) {
                  return a.muteStartTimeInSec <= e && e <= a.muteEndTimeInSec;
                })),
              b
                ? ((f = "VOLUME_COPYRIGHT_PARTIAL_SILENCED"), (g = !0))
                : (f = "VOLUME_COPYRIGHT_PARTIAL_NOT_SILENCED"))
            : ((f = "VOLUME_COPYRIGHT_FULL"), (g = !0));
          break;
        case "AVAILABLE_BUT_SILENT":
        case "UNAVAILABLE":
          f = "VOLUME_SILENT";
          g = !0;
          break;
        case "AVAILABLE":
        case "UNKNOWN":
        case "AVAILABLE_BUT_MISSING_LOUDNESS_DATA":
        case null:
        case void 0:
          f = "VOLUME_DEFAULT";
          break;
        default:
          c("recoverableViolation")(
            "Unhandled audio availability: " + d,
            "comet_video_player"
          );
          f = "VOLUME_DEFAULT";
          break;
      }
      return {
        isPlayheadWithinMutedSegment: b,
        isSilentAtPlayhead: g,
        volumeControlState: f,
      };
    }
    d = a({ audioAvailability: null, mutedSegmentsUnsanitized: [] });
    g.makeVideoPlayerAudioAvailabilityInfo = a;
    g.makeVideoPlayerAudioAvailabilityAtPlayheadInfo = b;
    g.VideoPlayerAudioAvailabilityInfoDefault = d;
  },
  98
);
__d(
  "VideoPlayerContexts",
  ["VideoPlayerAudioAvailabilityInfo", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react").createContext;
    b = a(null);
    c = a(!1);
    e = a("");
    f = a(null);
    var h = a(0),
      i = a(0),
      j = a(!1),
      k = a(!1),
      l = a(!0),
      m = a(!1),
      n = a(!1),
      o = a(null),
      p = a(!1),
      q = a(!1),
      r = a(null),
      s = a(null),
      t = a(null),
      u = a(null),
      v = a([]),
      w = a("notselected"),
      x = a([]),
      y = a(null),
      z = a(null),
      A = a(""),
      B = a(null),
      C = a(!1),
      D = a(!1),
      E = a(null),
      F = a(1),
      G = a(!1),
      H = a(0),
      I = a(0),
      J = a(null),
      K = a(null),
      L = a(null),
      M = a(null),
      N = a(!1),
      O = a(!1),
      P = a(null),
      Q = a("deny"),
      R = a(null),
      S = a("unknown"),
      T = a(!1),
      U = a(!1),
      V = a({
        release: function (a) {},
        reserve: function (a) {
          return a;
        },
      }),
      W = a([]),
      X = a(!1),
      Y = a(0),
      Z = a(0),
      $ = a(null),
      aa = a(!1);
    d = a(
      d("VideoPlayerAudioAvailabilityInfo")
        .VideoPlayerAudioAvailabilityInfoDefault
    );
    var ba = a(1),
      ca = a(!1),
      da = a(!1),
      ea = a(null),
      fa = a("normal");
    a = a([]);
    g.VideoFBIDContext = b;
    g.IsAbrEnabledContext = c;
    g.TargetVideoQualityContext = e;
    g.AdClientTokenContext = f;
    g.LoopCountContext = h;
    g.LoopCurrentContext = i;
    g.PlayingContext = j;
    g.StallingContext = k;
    g.PausedContext = l;
    g.EndedContext = m;
    g.InPlayStallingContext = n;
    g.ErrorContext = o;
    g.IsLiveContext = p;
    g.SeekingContext = q;
    g.ControllerContext = r;
    g.LastMuteReasonContext = s;
    g.LastPlayReasonContext = t;
    g.LastPauseReasonContext = u;
    g.AvailableVideoQualitiesContext = v;
    g.SelectedVideoQualityContext = w;
    g.AvailableAudioTracksContext = x;
    g.SelectedAudioTrackIDContext = y;
    g.CurrentAudioTrackIDContext = z;
    g.CurrentVideoQualityContext = A;
    g.ActiveCaptionsContext = B;
    g.CaptionsVisibleContext = C;
    g.CaptionsLoadedContext = D;
    g.CaptionDisplayStyleContext = E;
    g.VolumeContext = F;
    g.MutedContext = G;
    g.DurationContext = H;
    g.BufferEndContext = I;
    g.InstanceKeyContext = J;
    g.VideoPixelsAspectRatioContext = K;
    g.DimensionsContext = L;
    g.PlayerImplementationNameContext = M;
    g.VideoPlayerMouseHoverContext = N;
    g.VideoPlayerMouseIdleContext = O;
    g.BroadcastStatusContext = P;
    g.CanAutoplayContext = Q;
    g.VolumeSettingContext = R;
    g.AutoplayGatingResultContext = S;
    g.InbandCaptionsAutogeneratedContext = T;
    g.IsExternalMediaContext = U;
    g.VideoPlayerCaptionsReservationActionsContext = V;
    g.VideoPlayerCaptionsReservationsContext = W;
    g.StreamInterruptedContext = X;
    g.WatchTimeContext = Y;
    g.LastPlayedTimeContext = Z;
    g.SeekableRangesContext = $;
    g.IsLiveRewindActiveContext = aa;
    g.AudioAvailabilityInfoContext = d;
    g.PlaybackRateContext = ba;
    g.IsNCSRContext = ca;
    g.IsPremiumMusicVideoContext = da;
    g.InitialTracePolicyContext = ea;
    g.LatencyLevelContext = fa;
    g.ActiveEmsgBoxesContext = a;
  },
  98
);
__d(
  "VideoPlayerVideoPixelsFitContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react").createContext;
    b = a(null);
    c = b;
    g["default"] = c;
  },
  98
);
__d(
  "VideoPlayerViewabilityContexts",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react").createContext;
    b = a(null);
    c = a(!1);
    e = a(!1);
    f = a(null);
    g.VideoPlayerPassiveViewabilityInfoContext = b;
    g.VideoPlayerDesktopPictureInPictureContext = c;
    g.VideoPlayerFullscreenContext = e;
    g.VideoPlayerExtendedPassiveViewabilityInfoContext = f;
  },
  98
);
__d(
  "VideoPlayerHooks",
  [
    "DOMRectIsEqual",
    "VideoPlayerContexts",
    "VideoPlayerVideoPixelsFitContext",
    "VideoPlayerViewabilityContexts",
    "clearTimeout",
    "react",
    "removeFromArray",
    "setTimeout",
    "unrecoverableViolation",
    "useStable",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = h.useContext,
      j = h.useEffect,
      k = h.useRef,
      l = h.useState;
    function a(a) {
      var b = k(a);
      j(
        function () {
          b.current = a;
        },
        [a]
      );
      return b;
    }
    function m() {
      var a = i(d("VideoPlayerContexts").ControllerContext);
      if (a == null)
        throw c("unrecoverableViolation")(
          "Empty ControllerContext. Are you rendering useController outside of VideoPlayerRelay/VideoPlayerX?",
          "comet_video_player"
        );
      return a;
    }
    function b() {
      var a = i(d("VideoPlayerContexts").InstanceKeyContext);
      if (a == null)
        throw c("unrecoverableViolation")(
          "Empty InstanceKeyContext. Are you rendering useInstanceKey outside of VideoPlayerRelay/VideoPlayerX?",
          "comet_video_player"
        );
      return a;
    }
    function n() {
      var a = T();
      return a === "LIVE";
    }
    function e() {
      var a = T();
      return a === "LIVE" || a === "VOD_READY";
    }
    function f() {
      return i(d("VideoPlayerContexts").BufferEndContext);
    }
    function o() {
      return i(d("VideoPlayerContexts").DurationContext);
    }
    function p() {
      return i(d("VideoPlayerContexts").SeekingContext);
    }
    function q() {
      return i(d("VideoPlayerContexts").EndedContext);
    }
    function r() {
      return i(d("VideoPlayerContexts").ErrorContext);
    }
    function s() {
      return i(d("VideoPlayerContexts").PlayingContext);
    }
    function t() {
      var a = l(0),
        b = a[0],
        c = a[1],
        d = m();
      j(
        function () {
          var a = d.subscribe(function () {
            c(d.getPlayheadPosition());
          });
          c(d.getPlayheadPosition());
          return function () {
            return a.remove();
          };
        },
        [d]
      );
      return b;
    }
    function u(a, b) {
      var d = l(0),
        e = d[0],
        f = d[1],
        g = m(),
        h = k(null),
        i = k(e);
      j(
        function () {
          var d = g.subscribe(function () {
            i.current = b ? b(g) : g.getPlayheadPosition();
            if (h.current != null) return;
            h.current = c("setTimeout")(function () {
              f(i.current), (h.current = null);
            }, a);
          });
          f(g.getPlayheadPosition());
          return d.remove;
        },
        [g, a]
      );
      j(function () {
        return function () {
          h.current !== null &&
            (c("clearTimeout")(h.current), (h.current = null));
        };
      }, []);
      return e;
    }
    function v(a) {
      a === void 0 && (a = 200);
      var b = l(0),
        d = b[0],
        e = b[1],
        f = m(),
        g = n(),
        h = k(null),
        i = k(d);
      j(
        function () {
          if (!g) return;
          var b = f.subscribe(function () {
            if (h.current != null) return;
            h.current = c("setTimeout")(function () {
              f.getCurrentState().paused ||
                ((i.current += a / 1e3), e(i.current)),
                (h.current = null);
            }, a);
          });
          e(0);
          return function () {
            return b.remove();
          };
        },
        [f, a, g]
      );
      j(function () {
        return function () {
          h.current !== null &&
            (c("clearTimeout")(h.current), (h.current = null));
        };
      }, []);
      return !g ? null : d;
    }
    function w() {
      var a = m(),
        b = k([]),
        d = k(a.isFrozen()),
        e = c("useStable")(function () {
          return {
            getCurrentState: function () {
              return a.isFrozen();
            },
            subscribeToChanges: function (a) {
              var d = b.current;
              d.push(a);
              return {
                remove: function () {
                  return c("removeFromArray")(d, a);
                },
              };
            },
          };
        });
      j(
        function () {
          var c = a.subscribe(function () {
            var c = d.current,
              e = a.isFrozen();
            d.current = e;
            if (e !== c) {
              c = b.current;
              c.forEach(function (a) {
                return a(e);
              });
            }
          });
          return function () {
            c.remove();
          };
        },
        [a]
      );
      return e;
    }
    function x() {
      return i(d("VideoPlayerContexts").WatchTimeContext);
    }
    function y() {
      return i(d("VideoPlayerContexts").LastPlayedTimeContext);
    }
    function z() {
      return i(d("VideoPlayerContexts").PausedContext);
    }
    function A() {
      return i(d("VideoPlayerContexts").StallingContext);
    }
    function B() {
      return i(d("VideoPlayerContexts").InPlayStallingContext);
    }
    function C() {
      return i(d("VideoPlayerContexts").LastMuteReasonContext);
    }
    function D() {
      return i(d("VideoPlayerContexts").LastPauseReasonContext);
    }
    function E() {
      return i(d("VideoPlayerContexts").LastPlayReasonContext);
    }
    function F() {
      return i(d("VideoPlayerContexts").AvailableVideoQualitiesContext);
    }
    function G() {
      return i(d("VideoPlayerContexts").AvailableAudioTracksContext);
    }
    function H() {
      return i(d("VideoPlayerContexts").CaptionsVisibleContext);
    }
    function I() {
      return i(d("VideoPlayerContexts").CaptionDisplayStyleContext);
    }
    function J() {
      return i(d("VideoPlayerContexts").ActiveCaptionsContext);
    }
    function K() {
      return i(d("VideoPlayerContexts").CurrentAudioTrackIDContext);
    }
    function L() {
      return i(d("VideoPlayerContexts").CurrentVideoQualityContext);
    }
    function M() {
      return i(d("VideoPlayerContexts").SelectedVideoQualityContext);
    }
    function N() {
      return i(d("VideoPlayerContexts").SelectedAudioTrackIDContext);
    }
    function O() {
      return i(d("VideoPlayerContexts").MutedContext);
    }
    function P() {
      return i(d("VideoPlayerContexts").VolumeContext);
    }
    function Q() {
      return i(
        d("VideoPlayerViewabilityContexts")
          .VideoPlayerDesktopPictureInPictureContext
      );
    }
    function R() {
      return i(
        d("VideoPlayerViewabilityContexts").VideoPlayerFullscreenContext
      );
    }
    function aa() {
      return i(d("VideoPlayerContexts").DimensionsContext);
    }
    function ba() {
      return i(d("VideoPlayerContexts").VideoPixelsAspectRatioContext);
    }
    function ca() {
      return i(d("VideoPlayerContexts").PlayerImplementationNameContext);
    }
    function da() {
      return i(d("VideoPlayerContexts").CaptionsLoadedContext);
    }
    function ea() {
      return i(d("VideoPlayerContexts").IsAbrEnabledContext);
    }
    function fa() {
      return i(d("VideoPlayerContexts").TargetVideoQualityContext);
    }
    function ga() {
      return i(d("VideoPlayerContexts").VideoPlayerMouseHoverContext);
    }
    function ha() {
      return i(d("VideoPlayerContexts").VideoPlayerMouseIdleContext);
    }
    function S() {
      return i(
        d("VideoPlayerViewabilityContexts")
          .VideoPlayerPassiveViewabilityInfoContext
      );
    }
    function ia() {
      return i(
        d("VideoPlayerViewabilityContexts")
          .VideoPlayerExtendedPassiveViewabilityInfoContext
      );
    }
    function ja() {
      var a = S(),
        b = l(null),
        d = b[0],
        e = b[1],
        f = k(d);
      j(
        function () {
          f.current = d;
        },
        [d]
      );
      j(
        function () {
          if (a) {
            var b = function () {
                var b = a.getCurrent();
                if (b) {
                  var d = b.positionToViewport;
                  b = b.visiblePercentage;
                  var g = f.current;
                  (g == null ||
                    b !== g.visiblePercentage ||
                    !c("DOMRectIsEqual")(d, g.positionToViewport)) &&
                    e({ positionToViewport: d, visiblePercentage: b });
                }
              },
              d = a.subscribe(function () {
                b();
              });
            return function () {
              return d.remove();
            };
          }
        },
        [e, a]
      );
      return d;
    }
    function T() {
      return i(d("VideoPlayerContexts").BroadcastStatusContext);
    }
    function ka() {
      return i(d("VideoPlayerContexts").CanAutoplayContext);
    }
    function la() {
      return i(d("VideoPlayerContexts").VolumeSettingContext);
    }
    function ma() {
      return i(d("VideoPlayerContexts").AutoplayGatingResultContext);
    }
    function na() {
      return i(d("VideoPlayerContexts").VideoFBIDContext);
    }
    function U() {
      return i(d("VideoPlayerContexts").AdClientTokenContext);
    }
    function V() {
      return i(d("VideoPlayerContexts").LoopCurrentContext);
    }
    function W() {
      return i(d("VideoPlayerContexts").LoopCountContext);
    }
    function oa() {
      return i(d("VideoPlayerContexts").InbandCaptionsAutogeneratedContext);
    }
    function pa() {
      return i(d("VideoPlayerContexts").IsExternalMediaContext);
    }
    function qa() {
      return i(d("VideoPlayerContexts").VideoPlayerCaptionsReservationsContext);
    }
    function ra() {
      return i(
        d("VideoPlayerContexts").VideoPlayerCaptionsReservationActionsContext
      );
    }
    function sa() {
      return i(d("VideoPlayerContexts").StreamInterruptedContext);
    }
    function ta() {
      return i(d("VideoPlayerContexts").SeekableRangesContext);
    }
    function X() {
      return i(d("VideoPlayerContexts").IsLiveRewindActiveContext);
    }
    function Y() {
      var a = q(),
        b = V(),
        c = W();
      a = a && (c === -1 || (c > 0 && b < c));
      return a;
    }
    function ua() {
      var a = q(),
        b = Y();
      return a && !b;
    }
    function va() {
      return i(d("VideoPlayerContexts").PlaybackRateContext);
    }
    function wa() {
      return i(d("VideoPlayerContexts").IsNCSRContext);
    }
    function Z() {
      return i(d("VideoPlayerContexts").IsPremiumMusicVideoContext);
    }
    function xa() {
      var a = U() != null,
        b = n(),
        c = Z(),
        d = X();
      if (a || c) return !1;
      if (b) return d;
      else return !0;
    }
    function ya() {
      return i(d("VideoPlayerContexts").InitialTracePolicyContext);
    }
    function za() {
      return i(d("VideoPlayerContexts").LatencyLevelContext);
    }
    function Aa() {
      return i(d("VideoPlayerContexts").AudioAvailabilityInfoContext);
    }
    function Ba() {
      var a = U() != null,
        b = n(),
        c = Z();
      return a || c || b ? !1 : !0;
    }
    function $(a) {
      a === void 0 && (a = !0);
      var b = m();
      j(
        function () {
          if (a) {
            var c = b.registerEmsgObserver();
            return function () {
              b.unregisterEmsgObserver(c);
            };
          }
        },
        [b, a]
      );
    }
    function Ca() {
      $();
      return i(d("VideoPlayerContexts").ActiveEmsgBoxesContext);
    }
    function Da() {
      return i(c("VideoPlayerVideoPixelsFitContext"));
    }
    g.useLatestValueRef = a;
    g.useController = m;
    g.useInstanceKey = b;
    g.useIsLive = n;
    g.useIsVideoBroadcast = e;
    g.useBufferEnd = f;
    g.useDuration = o;
    g.useSeeking = p;
    g.useEnded = q;
    g.useError = r;
    g.usePlaying = s;
    g.useCurrentTime_DO_NOT_USE = t;
    g.useCurrentTimeThrottled = u;
    g.useLiveTimeElapsedThrottled = v;
    g.useIsFrozenPassive = w;
    g.useWatchTime = x;
    g.useLastPlayedTime = y;
    g.usePaused = z;
    g.useStalling = A;
    g.useInPlayStalling = B;
    g.useLastMuteReason = C;
    g.useLastPauseReason = D;
    g.useLastPlayReason = E;
    g.useAvailableVideoQualities = F;
    g.useAvailableAudioTracks = G;
    g.useCaptionsVisible = H;
    g.useCaptionDisplayStyle = I;
    g.useActiveCaptions = J;
    g.useCurrentAudioTrackID = K;
    g.useCurrentVideoQuality = L;
    g.useSelectedVideoQuality = M;
    g.useSelectedAudioTrackID = N;
    g.useMuted = O;
    g.useVolume = P;
    g.useIsDesktopPictureInPicture = Q;
    g.useIsFullscreen = R;
    g.useDimensions = aa;
    g.useVideoPixelsAspectRatio = ba;
    g.usePlayerImplementationName = ca;
    g.useCaptionsLoaded = da;
    g.useIsAbrEnabled = ea;
    g.useTargetVideoQuality = fa;
    g.useIsHovering = ga;
    g.useIsMouseIdle = ha;
    g.useVideoPlayerPassiveViewabilityInfo = S;
    g.useVideoPlayerExtendedPassiveViewabilityInfo = ia;
    g.useVideoPlayerViewabilityInfo = ja;
    g.useBroadcastStatus = T;
    g.useCanAutoplay = ka;
    g.useVolumeSetting = la;
    g.useAutoplayGatingResult = ma;
    g.useVideoFbid = na;
    g.useAdClientToken = U;
    g.useVideoPlayerCurrentLoop = V;
    g.useVideoPlayerTotalLoops = W;
    g.useInbandCaptionsAutogenerated = oa;
    g.useIsExternalMedia = pa;
    g.useVideoPlayerCaptionsReservations = qa;
    g.useVideoPlayerCaptionsReservationActions = ra;
    g.useStreamInterrupted = sa;
    g.useSeekableRanges_DO_NOT_USE = ta;
    g.useIsLiveRewindActive = X;
    g.useIsTransitioningToNextLoop = Y;
    g.useVideoPlaybackEnded = ua;
    g.usePlaybackRate = va;
    g.useIsNCSR = wa;
    g.useIsPremiumMusicVideo = Z;
    g.useShouldShowPlaybackRateControl = xa;
    g.useVideoPlayerInitialTracePolicy = ya;
    g.useLatencyLevel = za;
    g.useAudioAvailabilityInfo = Aa;
    g.useShouldPersistPlaybackRate = Ba;
    g.useEmsgObserver = $;
    g.useActiveEmsgBoxes = Ca;
    g.useVideoPlayerVideoPixelsFit = Da;
  },
  98
);
__d(
  "CastingContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(null);
    c = a.createContext(null);
    e = a.createContext(null);
    f = a.createContext(null);
    g.CastingStateContext = b;
    g.CastingExperienceStateContext = c;
    g.SetCastingControllerContext = e;
    g.CastingControllerContext = f;
  },
  98
);
__d(
  "createVideoStateHook",
  [
    "VideoPlayerHooks",
    "emptyFunction",
    "gkx",
    "react",
    "unrecoverableViolation",
    "useStable",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useEffect,
      i = b.useMemo,
      j = b.useRef,
      k = b.useState,
      l = b.useSyncExternalStore,
      m = new Set();
    e = function (a) {
      var b = new Map();
      m.add(b);
      function e() {
        var a = d("VideoPlayerHooks").useInstanceKey();
        b.has(a) ||
          b.set(a, { consumers: new Set(), key: a, lastValue: void 0 });
        var e = b.get(a);
        if (e == null)
          throw c("unrecoverableViolation")(
            'createVideoStateHook useInstance missing instance by key "' +
              a +
              '"',
            "comet_video_player"
          );
        return e;
      }
      function f(a, b) {
        a.consumers.add(b);
      }
      function g(a, b) {
        a.consumers["delete"](b);
      }
      function i(a, b, c) {
        (a.lastValue = b),
          a.consumers.forEach(function (a) {
            c !== a && a(b);
          });
      }
      function l(a) {
        var b = e(),
          c = j(b);
        c.current = b;
        a = b.lastValue != null ? b.lastValue : a;
        var d = j(a);
        d.current = a;
        a = k(a);
        var l = a[0],
          m = a[1];
        h(
          function () {
            m(d.current);
            f(b, m);
            return function () {
              g(b, m);
            };
          },
          [b]
        );
        h(
          function () {
            i(c.current, l, m);
          },
          [l]
        );
        return [l, m];
      }
      function a(a) {
        a = l(a);
        a[0];
        a = a[1];
        return a;
      }
      function n(a) {
        a = l(a);
        var b = a[0];
        a[1];
        return b;
      }
      return { setterHook: a, stateHook: l, valueHook: n };
    };
    f = function (a) {
      var b = new Map();
      m.add(b);
      var e = c("emptyFunction");
      function f(a, c) {
        var d = b.get(a);
        d ||
          ((d = { consumers: new Set(), key: a, lastValue: c }), b.set(a, d));
        return d;
      }
      function g(a, c) {
        return {
          getSnapshot: function () {
            var d = b.get(a);
            return d == null ? c : d.lastValue;
          },
          setValue: function (b) {
            var d = f(a, c),
              e;
            typeof b === "function" ? (e = b(d.lastValue)) : (e = b);
            d.lastValue = e;
            d.consumers.forEach(function (a) {
              a(e);
            });
          },
          subscribe: function (b) {
            var d = f(a, c);
            d.consumers.add(b);
            return function () {
              d.consumers["delete"](b);
            };
          },
        };
      }
      function a(a) {
        var b = c("useStable")(function () {
            return a;
          }),
          e = d("VideoPlayerHooks").useInstanceKey(),
          f = i(
            function () {
              return g(e, b);
            },
            [b, e]
          ),
          h = f.getSnapshot,
          j = f.setValue;
        f = f.subscribe;
        f = l(f, h);
        return [f, j];
      }
      function h(a) {
        var b = c("useStable")(function () {
            return a;
          }),
          e = d("VideoPlayerHooks").useInstanceKey(),
          f = i(
            function () {
              return g(e, b);
            },
            [b, e]
          );
        f = f.setValue;
        return f;
      }
      function j(a) {
        var b = c("useStable")(function () {
            return a;
          }),
          e = d("VideoPlayerHooks").useInstanceKey(),
          f = i(
            function () {
              return g(e, b);
            },
            [b, e]
          ),
          h = f.getSnapshot;
        f = f.subscribe;
        return l(f, h);
      }
      return { setterHook: h, stateHook: a, valueHook: j };
    };
    function a(a) {
      h(
        function () {
          return function () {
            m.forEach(function (b) {
              b["delete"](a);
            });
          };
        },
        [a]
      );
    }
    b = c("gkx")("3854") ? f : e;
    a = a;
    g.createVideoStateHookImpl_UnsafeForConcurrentRendering = e;
    g.createVideoStateHookImpl_SafeForConcurrentRendering = f;
    g.createVideoStateHook = b;
    g.useCleanupVideoStateHooks_INTERNAL = a;
  },
  98
);
__d(
  "CometPictureInPictureExpContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({
      pictureInPictureExpConfig: {
        isInPictureInPictureExp: !1,
        isInPictureInPictureExpControlGroup: !1,
        isSkipAndChainingDisabled: !1,
      },
      setPictureInPictureExpConfig: function () {},
    });
    g["default"] = b;
  },
  98
);
__d(
  "VideoPlayerPortalingPlaceInfoProvider.react",
  ["emptyFunction", "react", "recoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    e = d("react");
    d = e.createContext;
    var i = e.useContext,
      j = e.useEffect,
      k = e.useMemo,
      l = d(null);
    function a(a) {
      var b = a.children,
        c = a.currentPlaceID,
        d = a.currentVideoID,
        e = a.portalingEnabled,
        f = a.previousPlaceMetaData,
        g = a.thisPlaceID;
      a = k(
        function () {
          return {
            currentPlaceID: c,
            currentVideoID: d,
            portalingEnabled: e,
            previousPlaceMetaData: f,
            thisPlaceID: g,
          };
        },
        [c, d, e, f, g]
      );
      return h.jsx(l.Provider, { value: a, children: b });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    var m = c("emptyFunction");
    function b() {
      var a = i(l);
      m(a);
      return a == null
        ? {
            currentPlaceID: null,
            currentVideoID: null,
            portalingEnabled: !1,
            previousPlaceMetaData: null,
            thisPlaceID: null,
          }
        : a;
    }
    g.VideoPlayerPortalingPlaceInfoProvider = a;
    g.useVideoPlayerPortalingPlaceInfo = b;
  },
  98
);
__d(
  "CometSetWatchAndScrollVideoContext",
  ["react", "recoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(function () {
      c("recoverableViolation")(
        "No provider of CometSetWatchAndScrollVideoContext exists",
        "comet_video_player"
      );
    });
    g["default"] = b;
  },
  98
);
__d(
  "CometWatchAndScrollVideoContext",
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
  "CometWatchAndScrollSoundContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({
      muted: null,
      setMuted: function () {},
      setVolume: function () {},
      volume: null,
    });
    g["default"] = b;
  },
  98
);
__d(
  "XCometWatchControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")("/watch/", Object.freeze({}), void 0);
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "ErrorMetadata",
  ["fb-error"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      b.addGlobalMetadata = function (b, c, d) {
        a.addGlobalMetadata.call(this, b, c, d);
      };
      return b;
    })(c("fb-error").ErrorMetadata);
    g["default"] = a;
  },
  98
);
__d(
  "CometFocusTableContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({ FocusCell: null, FocusRow: null, FocusTable: null });
    g["default"] = b;
  },
  98
);
__d(
  "CometRoutePassthroughPropsContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext();
    g["default"] = b;
  },
  98
);
__d(
  "CometRouterParentRouteContext",
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
  "CometRouterRenderTypeContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext();
    g["default"] = b;
  },
  98
);
__d(
  "CometRouterRouteTracePolicyContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext();
    g["default"] = b;
  },
  98
);
__d(
  "CometRouterStateContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext();
    g["default"] = b;
  },
  98
);
__d(
  "useCometRouterState",
  ["CometRouterStateContext", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useContext;
    function a() {
      return h(c("CometRouterStateContext"));
    }
    g["default"] = a;
  },
  98
);
__d(
  "useParentRoute",
  ["CometRouterParentRouteContext", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useContext;
    function a() {
      return h(c("CometRouterParentRouteContext"));
    }
    g["default"] = a;
  },
  98
);
__d(
  "useRoutePassthroughProps",
  ["CometRoutePassthroughPropsContext", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useContext;
    function a() {
      return h(c("CometRoutePassthroughPropsContext"));
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometScrollableArea.react",
  ["BaseScrollableArea.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a, b) {
      var d = a.horizontal;
      d = d === void 0 ? !0 : d;
      var e = a.id,
        f = a.vertical;
      f = f === void 0 ? !0 : f;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "horizontal",
        "id",
        "vertical",
      ]);
      return h.jsx(
        c("BaseScrollableArea.react"),
        babelHelpers["extends"]({}, a, {
          horizontal: d,
          id: e,
          ref: b,
          vertical: f,
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b;
  },
  98
);
