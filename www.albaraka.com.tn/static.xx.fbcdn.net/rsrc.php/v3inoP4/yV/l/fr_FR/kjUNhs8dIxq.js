/*FB_PKG_DELIM*/

__d(
  "ChatReliabilityTypedLogger",
  ["Banzai", "GeneratedLoggerUtils"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a() {
        this.$1 = {};
      }
      var c = a.prototype;
      c.log = function (a) {
        b("GeneratedLoggerUtils").log(
          "logger:ChatReliabilityLoggerConfig",
          this.$1,
          b("Banzai").BASIC,
          a
        );
      };
      c.logVital = function (a) {
        b("GeneratedLoggerUtils").log(
          "logger:ChatReliabilityLoggerConfig",
          this.$1,
          b("Banzai").VITAL,
          a
        );
      };
      c.logImmediately = function (a) {
        b("GeneratedLoggerUtils").log(
          "logger:ChatReliabilityLoggerConfig",
          this.$1,
          { signal: !0 },
          a
        );
      };
      c.clear = function () {
        this.$1 = {};
        return this;
      };
      c.getData = function () {
        return babelHelpers["extends"]({}, this.$1);
      };
      c.updateData = function (a) {
        this.$1 = babelHelpers["extends"]({}, this.$1, a);
        return this;
      };
      c.setEvent = function (a) {
        this.$1.event = a;
        return this;
      };
      c.setEventData = function (a) {
        this.$1.event_data = a;
        return this;
      };
      return a;
    })();
    c = { event: !0, event_data: !0 };
    f["default"] = a;
  },
  66
);
__d(
  "isAttributionReportingAPIEnabled",
  ["gkx", "justknobx"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      return c("justknobx")._("1203") && c("gkx")("3773");
    }
    g["default"] = a;
  },
  98
);
__d(
  "XCometPrivacySandboxRegisterSourceControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/privacy_sandbox/comet/register/source/",
      Object.freeze({}),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "useAttributionSourceForClick",
  [
    "XCometPrivacySandboxRegisterSourceControllerRouteBuilder",
    "isAttributionReportingAPIEnabled",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      if (!c("isAttributionReportingAPIEnabled")()) return null;
      var d = {};
      if (a != null && a.length > 0) d.eid = a;
      else if (b != null && b.length > 0) d.xt = b;
      else return null;
      a = c(
        "XCometPrivacySandboxRegisterSourceControllerRouteBuilder"
      ).buildUri(d);
      return a.toString();
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometSSRHydrationMarkerUtils",
  ["cr:1106516"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = b("cr:1106516") == null ? void 0 : b("cr:1106516").addMarkersToChildren;
    c = b("cr:1106516") == null ? void 0 : b("cr:1106516").addMarkersToFallback;
    d = b("cr:1106516") == null ? void 0 : b("cr:1106516").injectStyles;
    g.addMarkersToChildren = a;
    g.addMarkersToFallback = c;
    g.injectStyles = d;
  },
  98
);
__d(
  "CometSuspenseHUD.react",
  ["cr:1064332", "cr:4874", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    c = (a = b("cr:1064332")) != null ? a : b("cr:4874");
    g["default"] = c;
  },
  98
);
__d(
  "useCometPlaceholderImpl",
  [
    "CometSSRHydrationMarkerUtils",
    "CometSuspenseHUD.react",
    "ExecutionEnvironment",
    "gkx",
    "hero-tracing-placeholder",
    "react",
    "requireDeferred",
    "useStable",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    e = d("react");
    var i = e.useCallback,
      j = e.useLayoutEffect,
      k = e.useRef,
      l = c("requireDeferred")("CometSuspenseFalcoEvent").__setRef(
        "useCometPlaceholderImpl"
      ),
      m = 5;
    function n(a) {
      var b = a.cb,
        c = k(!1);
      j(function () {
        c.current || (b(), (c.current = !0));
      });
      return null;
    }
    function b(b) {
      var e = b.children,
        f = b.fallback,
        g = b.name,
        j = b.unstable_avoidThisFallback,
        o = b.unstable_onSuspense,
        p = c("useStable")(function () {
          return c("CometSuspenseHUD.react") &&
            c("ExecutionEnvironment").canUseDOM
            ? a.document.createElement("div")
            : null;
        }),
        q = k(0),
        r = k(null),
        s = k(!1);
      b = e;
      e = f;
      d("CometSSRHydrationMarkerUtils").addMarkersToChildren != null &&
        d("CometSSRHydrationMarkerUtils").addMarkersToFallback != null &&
        ((b = d("CometSSRHydrationMarkerUtils").addMarkersToChildren(b)),
        (e = d("CometSSRHydrationMarkerUtils").addMarkersToFallback(e)));
      f = i(
        function (a) {
          p != null && (p.textContent = a), (r.current = a), o && o(a);
        },
        [p, o]
      );
      var t = null;
      p != null &&
        c("CometSuspenseHUD.react") != null &&
        (t = h.jsx(c("CometSuspenseHUD.react"), { desc: p }));
      var u = i(
          function () {
            (q.current += 1),
              c("gkx")("1863055") &&
                s.current &&
                q.current <= m &&
                l.onReady(function (a) {
                  a.log(function () {
                    return {
                      event: "unexpected_suspense",
                      is_backup_placeholder: j === !0,
                      placeholder_name: g,
                      promise_name: r.current,
                      suspense_count: String(q.current),
                    };
                  });
                });
          },
          [g, j]
        ),
        v = i(function () {
          s.current = !0;
        }, []);
      return h.jsxs(d("hero-tracing-placeholder").HeroPlaceholder, {
        fallback: h.jsxs(h.Fragment, { children: [e, h.jsx(n, { cb: u }), t] }),
        name: g,
        unstable_avoidThisFallback: j,
        unstable_onSuspense: f,
        children: [h.jsx(n, { cb: v }), b],
      });
    }
    b.displayName = b.name + " [from " + f.id + "]";
    g["default"] = b;
  },
  98
);
__d(
  "CometDangerouslySuppressInteractiveElementsContext",
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
  "CometKeyCommandContext",
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
  "CometKeyCommandSettingsContext",
  ["CometCustomKeyCommands", "gkx", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    var h =
      c("CometCustomKeyCommands").areSingleKeysDisabled === null &&
      !c("gkx")("1707273")
        ? !1
        : c("CometCustomKeyCommands").areSingleKeysDisabled;
    b = a.createContext({
      addCustomCommand: function (a) {},
      checkForKeyCommandConflict: function (a) {
        return [];
      },
      disableCustomCommand: function (a) {},
      getAreSingleKeysDisabled: function () {
        return h;
      },
      getCustomCommandsMap: function () {
        return new Map();
      },
      getCustomKeyCombination: function (a) {},
      getModifiedKeyboardShortcutsPreference: function (a) {
        return 4;
      },
      isViewerShowing: !1,
      resetAllCustomCommands: function (a) {},
      resetCustomCommand: function (a) {},
      setAreSingleKeysDisabled: function (a) {},
      setModifiedKeyboardShortcutsPreference: function (a) {},
      setViewerInfo: function (a) {},
      viewerType: "see_all",
    });
    g["default"] = b;
  },
  98
);
__d(
  "CometKeyCommandUtilsContext",
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
  "CometKeyCommandsTypedLoggerLite",
  ["generateLiteTypedLogger"],
  function (a, b, c, d, e, f) {
    "use strict";
    e.exports = b("generateLiteTypedLogger")(
      "logger:CometKeyCommandsLoggerConfig"
    );
  },
  null
);
__d(
  "areKeyCombinationsEqual",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      return a == null || b == null
        ? a === b
        : a.key !== "" &&
            b.key !== "" &&
            a.key === b.key &&
            (a.alt === !0) === (b.alt === !0) &&
            (a.command === !0) === (b.command === !0) &&
            (a.shift === !0) === (b.shift === !0);
    }
    f["default"] = a;
  },
  66
);
__d(
  "createKeyCommand",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = ["alt", "command", "shift"];
    function a(a) {
      return g
        .filter(function (b) {
          return (a == null ? void 0 : a[b]) === !0;
        })
        .concat(a == null ? void 0 : a.key)
        .join(" ");
    }
    f["default"] = a;
  },
  66
);
__d(
  "isSingleCharKey",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = /^[a-z0-9/]$/;
    function a(a) {
      return a != null ? g.test(a) : !1;
    }
    f["default"] = a;
  },
  66
);
__d(
  "createKeyCommandWrapper",
  [
    "CometKeyCommandContext",
    "CometKeyCommandSettingsContext",
    "CometKeyCommandUtilsContext",
    "CometKeyCommandsTypedLoggerLite",
    "areKeyCombinationsEqual",
    "createKeyCommand",
    "gkx",
    "isSingleCharKey",
    "react",
    "recoverableViolation",
    "stylex",
    "useStable",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
      j = b.useContext,
      k = b.useMemo,
      l = b.useRef,
      m = { wrapperFocusable: { ":focus_outline": "x1uvtmcs", $$css: !0 } };
    function n(a) {
      if (a instanceof HTMLInputElement)
        return a.type !== "hidden" && a.type !== "file" && !a.disabled;
      return a instanceof HTMLSelectElement || a instanceof HTMLTextAreaElement
        ? !a.disabled
        : a instanceof HTMLElement && a.isContentEditable;
    }
    function o(a) {
      return a instanceof HTMLElement && a.getAttribute("role") === "listbox"
        ? !a.getAttribute("aria-disabled")
        : !1;
    }
    function p(a, b, c) {
      for (
        var d = a,
          e = Array.isArray(d),
          f = 0,
          d = e
            ? d
            : d[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        var g;
        if (e) {
          if (f >= d.length) break;
          g = d[f++];
        } else {
          f = d.next();
          if (f.done) break;
          g = f.value;
        }
        g = g;
        var h = g[0];
        g = g[1];
        if (g.groupID === b && g.commandID === c) return a.get(h);
      }
    }
    function q(a, b) {
      return (
        c("gkx")("3598") &&
        b.triggerFromInputs === !0 &&
        n(a) &&
        ((a = b.command) == null ? void 0 : a.alt) === !0
      );
    }
    var r = function (a, b) {
        c("recoverableViolation")(
          "Tried to call showSingleCharacterKeyCommandWrapperDialogRef, but it was never set",
          "comet_ax"
        );
      },
      s = function (a, b) {
        c("recoverableViolation")(
          "Tried to call showModifiedKeyCommandWrapperDialogRef, but it was never set",
          "comet_ax"
        );
      };
    function a(a, b) {
      return function (d) {
        var e = j(c("CometKeyCommandContext")),
          f = j(c("CometKeyCommandUtilsContext")),
          g = j(c("CometKeyCommandSettingsContext")),
          t = f && f.setActiveWrapper,
          u = l(r),
          v = l(s),
          w = c("useStable")(function () {
            return new Map();
          }),
          x = i(
            function (a) {
              var b,
                d = w.get(a);
              if (
                ((b = d) == null ? void 0 : b.groupID) != null &&
                ((b = d) == null ? void 0 : b.commandID) != null
              ) {
                b = g.getCustomKeyCombination(d.groupID, d.commandID);
                if (
                  b == null ||
                  c("areKeyCombinationsEqual")(
                    b,
                    (b = d) == null ? void 0 : b.command
                  )
                )
                  return d;
                else d = null;
              }
              b = g.getCustomCommandsMap().get(a);
              if (b != null && b.groupID != null && b.commandID != null) {
                a = p(w, b.groupID, b.commandID);
                a != null && (d = a);
              }
              return d;
            },
            [g, w]
          ),
          y = k(
            function () {
              return {
                addCommands: function (a, b) {
                  a.forEach(function (a) {
                    var d = a.command;
                    if (d != null) {
                      d = c("createKeyCommand")(d);
                      var e = w.has(d),
                        g = e && b === !0;
                      g = g || !e || b === void 0;
                      g && (w.set(d, a), f && f.notifyCommandUpdate());
                    }
                  });
                  return function () {
                    a.forEach(function (a) {
                      var b = a.command;
                      b = c("createKeyCommand")(b);
                      var d = w.get(b);
                      d === a && w["delete"](b);
                    }),
                      f && f.notifyCommandUpdate();
                  };
                },
                applyCommand: function (a, b) {
                  var e,
                    f = x(a);
                  if (f == null) return !1;
                  var h = /^[a-z0-9]$/;
                  if (
                    c("gkx")("3598") &&
                    ((e = f.command) == null ? void 0 : e.alt) === !0 &&
                    g.getModifiedKeyboardShortcutsPreference() === 1
                  )
                    return !0;
                  if (
                    (!f.triggerFromInputs && n(b.target)) ||
                    (o(b.target) && h.test(a))
                  )
                    return !1;
                  if (
                    b.type === "keyup" &&
                    f.triggerOnKeyUp !== !0 &&
                    f.triggerOnKeyUpAndKeyDown !== !0
                  )
                    return !1;
                  if (b.type === "keydown" && f.triggerOnKeyUp === !0)
                    return !1;
                  e = f.handler;
                  if (f.shouldPreventDefault !== !1) {
                    if (
                      q(b.target, f) &&
                      g.getModifiedKeyboardShortcutsPreference() === 3
                    )
                      return !0;
                    e && b.preventDefault();
                  }
                  if (f.triggerOnRepeats === !1 && b.repeat === !0) return !1;
                  if (e != null) {
                    if (
                      f.command != null &&
                      q(b.target, f) &&
                      g.getModifiedKeyboardShortcutsPreference() === 4
                    ) {
                      v.current(f.command, f.singleCharDescription);
                      return !0;
                    }
                    h = g && g.getAreSingleKeysDisabled();
                    b = c("isSingleCharKey")(a);
                    if (h === !0 && b) return !0;
                    if (h === null && b) {
                      u.current(a, f.singleCharDescription);
                      return !0;
                    }
                    e();
                    h = f.description;
                    c("CometKeyCommandsTypedLoggerLite").log({
                      key_combo: a,
                      key_context: d.debugName,
                      key_description: h,
                    });
                    return f.shouldStopPropagation !== !1;
                  }
                  return !1;
                },
                debugName: d.debugName,
                getCommandMap: function () {
                  return w;
                },
                getParent: function () {
                  return e;
                },
                removeCommand: function (a) {
                  w["delete"](a), f && f.notifyCommandUpdate();
                },
                setShowModifiedKeyCommandWrapperDialogRef: function (a) {
                  v.current = a;
                  return function () {
                    v.current = s;
                  };
                },
                setShowSingleCharacterKeyCommandWrapperDialogRef: function (a) {
                  u.current = a;
                  return function () {
                    u.current = r;
                  };
                },
              };
            },
            [g, f, w, e, d.debugName, v, u, x]
          ),
          z = i(
            function () {
              if (!t) {
                c("recoverableViolation")(
                  "setActiveWrapper is undefined in " +
                    (d.debugName != null ? d.debugName : "unknown"),
                  "comet_ax"
                );
                return;
              }
              t(y);
            },
            [t, y, d.debugName]
          );
        if (a || d.elementType !== void 0) {
          var A;
          A = (A = d.elementType) != null ? A : "div";
          A = h.jsx(A, {
            className: c("stylex")(
              d.isWrapperFocusable ? m.wrapperFocusable : void 0,
              d.xstyle
            ),
            "data-testid": void 0,
            onFocusCapture: a ? z : void 0,
            tabIndex: d.isWrapperFocusable ? -1 : void 0,
            children: d.children,
          });
        } else A = d.children;
        b && (A = h.jsx(b.Provider, { value: y, children: A }));
        return h.jsx(c("CometKeyCommandContext").Provider, {
          value: y,
          children: A,
        });
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "createKeyCommandWidget",
  ["createKeyCommandWrapper", "react", "recoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useContext,
      j = b.useEffect;
    function a(a) {
      a === void 0 && (a = !0);
      var b = h.createContext();
      a = c("createKeyCommandWrapper")(a, b);
      function d(a, d, e) {
        d === void 0 && (d = !1);
        var f = i(b);
        j(
          function () {
            if (!f) {
              d ||
                c("recoverableViolation")(
                  "Attempting to register a key command outside of its widget scope. Calls to useKeyCommand must be within its widget's wrapper.",
                  "comet_ax"
                );
              return;
            }
            if (a) return f.addCommands(a, e);
          },
          [f, a, d, e]
        );
      }
      return { Context: b, Wrapper: a, useKeyCommands: d };
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometGlobalKeyCommandWidget",
  ["createKeyCommandWidget"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("createKeyCommandWidget")(!1);
    g["default"] = a;
  },
  98
);
__d(
  "CometKeys",
  ["Locale"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = Object.freeze({
      AREA_NAV: "f6",
      COMMA: ",",
      DEL: "delete",
      DELETE: "backspace",
      DOT: ".",
      DOWN: "arrowdown",
      END: "end",
      ENTER: "enter",
      EQUAL: "=",
      ESCAPE: "escape",
      HOME: "home",
      LEFT: d("Locale").isRTL() ? "arrowright" : "arrowleft",
      LEFT_SQUARE_BRACKET: "[",
      MINUS: "-",
      NEXT: d("Locale").isRTL() ? "arrowleft" : "arrowright",
      PAGE_DOWN: "pagedown",
      PAGE_UP: "pageup",
      PREVIOUS: d("Locale").isRTL() ? "arrowright" : "arrowleft",
      QUESTION: "?",
      RIGHT: d("Locale").isRTL() ? "arrowleft" : "arrowright",
      RIGHT_SQUARE_BRACKET: "]",
      SEMI_COLON: ";",
      SLASH: "/",
      SPACE: " ",
      TAB: "tab",
      UP: "arrowup",
      F1: "f1",
      F2: "f2",
      F3: "f3",
      F4: "f4",
      F5: "f5",
      F6: "f6",
      F7: "f7",
      F8: "f8",
      F9: "f9",
      F10: "f10",
      F11: "f11",
      F12: "f12",
      ONE: "1",
      TWO: "2",
      THREE: "3",
      FOUR: "4",
      FIVE: "5",
      SIX: "6",
      SEVEN: "7",
      EIGHT: "8",
      NINE: "9",
      ZERO: "0",
      A: "a",
      B: "b",
      C: "c",
      D: "d",
      E: "e",
      F: "f",
      G: "g",
      H: "h",
      I: "i",
      J: "j",
      K: "k",
      L: "l",
      M: "m",
      N: "n",
      O: "o",
      P: "p",
      Q: "q",
      R: "r",
      S: "s",
      T: "t",
      U: "u",
      V: "v",
      W: "w",
      X: "x",
      Y: "y",
      Z: "z",
    });
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "getCometKey",
  ["CometKeys", "isStringNullOrEmpty"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = {
        8: "Backspace",
        13: "Enter",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        46: "Delete",
      },
      i = new Set(Object.values(c("CometKeys")));
    function a(a) {
      var b = a.key;
      a = a.which || a.keyCode;
      ((a >= 48 && a <= 57) || (a >= 65 && a <= 90)) &&
        (b = String.fromCharCode(a));
      a >= 96 && a <= 105 && (b = String.fromCharCode(a - 48));
      if (!c("isStringNullOrEmpty")(b)) {
        b = b.toLowerCase();
        if (i.has(b)) return b;
      }
      if (Object.prototype.hasOwnProperty.call(h, a)) {
        b = h[a].toLowerCase();
        if (i.has(b)) return b;
      }
      return null;
    }
    g["default"] = a;
  },
  98
);
__d(
  "getKeyCommand",
  ["UserAgent", "createKeyCommand", "getCometKey"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b = c("getCometKey")(a);
      if (b == null) return null;
      var d = !1;
      c("UserAgent").isPlatform("Mac OS X")
        ? a.metaKey && (d = !0)
        : a.ctrlKey && (d = !0);
      d = { alt: a.altKey, command: d, key: b, shift: a.shiftKey };
      return c("createKeyCommand")(d);
    }
    g["default"] = a;
  },
  98
);
__d(
  "applyKeyCommand",
  ["getKeyCommand"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, d, e) {
      var f = c("getKeyCommand")(a);
      if (f == null) return !1;
      b = b;
      while (b != null) {
        if (b && b.applyCommand(f, a)) return !0;
        b = b && b.getParent();
      }
      if (d != null && d.applyCommand(f, a)) return !0;
      return e != null && e.applyCommand(f, a) ? !0 : !1;
    }
    g["default"] = a;
  },
  98
);
__d(
  "getActiveCommands",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b, c) {
      var d = new Map();
      function e(a) {
        a.forEach(function (a, b) {
          var c = d.get(b);
          if (c) {
            var e = c.every(function (a) {
              return a.shouldStopPropagation === !1;
            });
            e && c.push(a);
          } else d.set(b, [a]);
        });
      }
      a = a;
      while (a != null) {
        var f = a && a.getCommandMap();
        e(f);
        a = a && a.getParent();
      }
      b && e(b.getCommandMap());
      c && e(c.getCommandMap());
      return d;
    }
    f["default"] = a;
  },
  66
);
__d(
  "useGetComposingState",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useEffect,
      j = b.useRef;
    function a() {
      var a = j(!1),
        b = h(
          function (b) {
            a.current = !0;
          },
          [a]
        ),
        c = h(
          function (b) {
            a.current = !1;
          },
          [a]
        );
      i(
        function () {
          window.addEventListener("compositionstart", b);
          window.addEventListener("compositionend", c);
          return function () {
            window.removeEventListener("compositionstart", b),
              window.removeEventListener("compositionend", c);
          };
        },
        [c, b]
      );
      return function (b) {
        return b.isComposing || a.current;
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "useGlobalEventListener",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useEffect,
      i = {
        fullscreenchange: [
          "webkitfullscreenchange",
          "mozfullscreenchange",
          "MSFullscreenChange",
          "fullscreenchange",
        ],
      };
    a = function (a, b, c) {
      h(
        function () {
          if (b != null) {
            var d,
              e = (d = i[a]) != null ? d : a;
            window.addEventListener(e, b, c);
            return function () {
              window.removeEventListener(e, b, c);
            };
          }
        },
        [b, a, c]
      );
    };
    g["default"] = a;
  },
  98
);
__d(
  "useUnsafeRef_DEPRECATED",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useMemo;
    function a(a) {
      return h(function () {
        return { current: a };
      }, []);
    }
    g["default"] = a;
  },
  98
);
__d(
  "BaseKeyCommandListener.react",
  [
    "CometGlobalKeyCommandWidget",
    "CometKeyCommandUtilsContext",
    "ReactDOMComet",
    "applyKeyCommand",
    "getActiveCommands",
    "getKeyCommand",
    "react",
    "recoverableViolation",
    "useGetComposingState",
    "useGlobalEventListener",
    "useUnsafeRef_DEPRECATED",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
      j = b.useContext,
      k = b.useMemo,
      l = b.useRef;
    function m(a, b) {
      var c;
      return function () {
        window.clearTimeout(c), (c = window.setTimeout(a, b));
      };
    }
    var n = 100;
    function a(a) {
      var b = l(null),
        e = l(null),
        f = l(new Set()),
        g = j(c("CometGlobalKeyCommandWidget").Context),
        o = i(
          function (d) {
            if (!a.observersEnabled)
              return {
                getActiveCommands: function () {
                  c("recoverableViolation")(
                    "Key Command observers are not supported in this context",
                    "comet_ax"
                  );
                  return null;
                },
                remove: function () {},
              };
            var h = f.current;
            h.add(d);
            return {
              getActiveCommands: function () {
                return c("getActiveCommands")(e.current, b.current, g);
              },
              remove: function () {
                h["delete"](d);
              },
            };
          },
          [g, a.observersEnabled]
        ),
        p = i(
          function (b) {
            a.observersEnabled &&
              f.current.forEach(function (a) {
                return a({ key: b, type: "triggered" });
              });
          },
          [a.observersEnabled]
        ),
        q = k(
          function () {
            return m(function () {
              a.observersEnabled &&
                f.current.forEach(function (a) {
                  return a({ type: "update" });
                });
            }, n);
          },
          [a.observersEnabled]
        ),
        r = i(
          function (a) {
            var c = b.current !== a;
            b.current = a;
            c && q();
          },
          [q]
        ),
        s = i(
          function (a) {
            var b = e.current !== a;
            e.current = a;
            b && q();
          },
          [q]
        );
      o = c("useUnsafeRef_DEPRECATED")({
        addObserver: o,
        notifyCommandUpdate: q,
        setActiveLayer: r,
        setActiveWrapper: s,
      });
      r = i(
        function () {
          var a = e.current !== null;
          e.current = null;
          a && q();
        },
        [q]
      );
      var t = c("useGetComposingState")();
      s = i(
        function (a) {
          if (t(a)) return;
          d("ReactDOMComet").flushSync(function () {
            var d = c("applyKeyCommand")(a, e.current, b.current, g);
            if (d) {
              d = c("getKeyCommand")(a);
              p(d);
            }
          });
        },
        [t, g, p]
      );
      c("useGlobalEventListener")("keydown", s);
      c("useGlobalEventListener")("keyup", s);
      return h.jsx(c("CometKeyCommandUtilsContext").Provider, {
        value: o.current,
        children: h.jsx("div", { onBlurCapture: r, children: a.children }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometKeyCommandWidget",
  ["createKeyCommandWidget"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("createKeyCommandWidget")();
    g["default"] = a;
  },
  98
);
__d(
  "CometKeyCommandWrapper.react",
  ["CometKeyCommandWidget", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.children;
      a = babelHelpers.objectWithoutPropertiesLoose(a, ["children"]);
      return h.jsx(
        c("CometKeyCommandWidget").Wrapper,
        babelHelpers["extends"]({}, a, { children: b })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useKeyCommands",
  ["CometKeyCommandWidget"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("CometKeyCommandWidget").useKeyCommands;
  },
  98
);
__d(
  "CometComponentWithKeyCommands.react",
  ["CometKeyCommandWrapper.react", "react", "useKeyCommands"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        displayInherit: { display: "x1jfb8zj", $$css: !0 },
        inherit: {
          alignContent: "x4k7w5x",
          alignItems: "x1h91t0o",
          flexDirection: "x1beo9mf",
          flexGrow: "xaigb6o",
          flexShrink: "x12ejxvf",
          height: "x3igimt",
          justifyContent: "xarpa2k",
          maxHeight: "xedcshv",
          maxWidth: "x1lytzrv",
          minHeight: "x1t2pt76",
          minWidth: "x7ja8zs",
          position: "x1n2onr6",
          width: "x1qrby5j",
          $$css: !0,
        },
      };
    function j(a) {
      c("useKeyCommands")(a.commandConfigs);
      return null;
    }
    function a(a) {
      var b = a.children,
        d = a.commandConfigs,
        e = a.elementType,
        f = a.xstyle;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "children",
        "commandConfigs",
        "elementType",
        "xstyle",
      ]);
      var g = e === "span" ? i.inherit : [i.inherit, i.displayInherit];
      return h.jsxs(
        c("CometKeyCommandWrapper.react"),
        babelHelpers["extends"](
          { elementType: e, xstyle: f != null ? f : g },
          a,
          { children: [h.jsx(j, { commandConfigs: d }), b] }
        )
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometLayerKeyCommandWidget",
  ["createKeyCommandWidget"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("createKeyCommandWidget")(!1);
    g["default"] = a;
  },
  98
);
__d(
  "HiddenSubtreeContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({
      backgrounded: !1,
      hidden: !1,
      hiddenOrBackgrounded: !1,
      hiddenOrBackgrounded_FIXME: !1,
    });
    g["default"] = b;
  },
  98
);
__d(
  "SetActiveLayerIfAttached.react",
  [
    "CometKeyCommandUtilsContext",
    "CometLayerKeyCommandWidget",
    "HiddenSubtreeContext",
    "react",
    "recoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useContext,
      i = b.useEffect;
    function a(a) {
      var b = h(c("HiddenSubtreeContext"));
      a = h(c("CometKeyCommandUtilsContext"));
      var d = a && a.setActiveLayer,
        e = h(c("CometLayerKeyCommandWidget").Context);
      i(
        function () {
          if (!d) {
            c("recoverableViolation")(
              "The current layer is not wrapped in a *KeyCommandListener",
              "comet_ax"
            );
            return;
          }
          if (!e) {
            c("recoverableViolation")(
              "setActiveLayer not wrapped in CometLayerKeyCommandWidget.Wrapper",
              "comet_ax"
            );
            return;
          }
          b.hiddenOrBackgrounded || d(e);
        },
        [e, b, d]
      );
      return null;
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometLayerKeyCommandWrapper.react",
  ["CometLayerKeyCommandWidget", "SetActiveLayerIfAttached.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.children;
      a = a.debugName;
      return h.jsxs(c("CometLayerKeyCommandWidget").Wrapper, {
        debugName: a,
        children: [
          h.jsx(c("SetActiveLayerIfAttached.react"), { debugName: a }),
          b,
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometVisibilityUserActivityMonitor",
  ["Visibility"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      isUserActive: function () {
        return c("Visibility").isHidden() === !1;
      },
      subscribe: function (a) {
        var b = c("Visibility").addListener(
            c("Visibility").HIDDEN,
            function () {
              return a && a(!1);
            }
          ),
          d = c("Visibility").addListener(c("Visibility").VISIBLE, function () {
            return a && a(!0);
          });
        return function () {
          b && b.remove(), d && d.remove();
        };
      },
    };
    g["default"] = a;
  },
  98
);
__d(
  "BaseViewportMarginsContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({ bottom: 0, left: 0, right: 0, top: 0 });
    g["default"] = b;
  },
  98
);
__d(
  "HiddenSubtreePassiveContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({
      getCurrentState: function () {
        return {
          backgrounded: !1,
          hidden: !1,
          hiddenOrBackgrounded: !1,
          hiddenOrBackgrounded_FIXME: !1,
        };
      },
      subscribeToChanges: function (a) {
        return { remove: function () {} };
      },
    });
    g["default"] = b;
  },
  98
);
__d(
  "getIntersectionMarginFromViewportMargin",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = new Map();
    function a(a) {
      var b =
          "bottom:" +
          a.bottom +
          "|top:" +
          a.top +
          "|left:" +
          a.left +
          "|right:" +
          a.right,
        c = g.get(b);
      c == null &&
        ((c = {
          bottom: a.bottom * -1,
          left: a.left * -1,
          right: a.right * -1,
          top: a.top * -1,
        }),
        g.set(b, c));
      return c;
    }
    f["default"] = a;
  },
  66
);
__d(
  "nullIntersectionObserverEntryLogger",
  ["FBLogger", "Random"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      a == null &&
        d("Random").coinflip(100) &&
        c("FBLogger")("comet_infra").warn(b);
    }
    g["default"] = a;
  },
  98
);
__d(
  "useDoubleEffectHack_DO_NOT_USE_THIS_IS_TRACKED",
  ["clearTimeout", "err", "react", "setTimeout"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useEffect,
      i = b.useRef;
    function a(a, b) {
      var d = i(null),
        e = i();
      h(function () {
        var b = d.current;
        b !== null
          ? (c("clearTimeout")(b), (d.current = null))
          : (e.current = a());
        return function () {
          function a() {
            d.current = null;
            var a = e.current;
            a && a();
          }
          d.current = c("setTimeout")(a, 0);
        };
      }, []);
    }
    e = h;
    f = e;
    g["default"] = f;
  },
  98
);
__d(
  "DOMRectReadOnly",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a() {
        (this.bottom = 0),
          (this.height = 0),
          (this.left = 0),
          (this.right = 0),
          (this.top = 0),
          (this.width = 0),
          (this.x = 0),
          (this.y = 0);
      }
      a.fromRect = function (b) {
        b = b || { height: 0, width: 0, x: 0, y: 0 };
        var c = b.height,
          d = b.width,
          e = b.x;
        b = b.y;
        var f = new a();
        f.x = e;
        f.y = b;
        f.width = d;
        f.height = c;
        f.top = b;
        f.bottom = b + c;
        f.right = e + d;
        f.left = e;
        return f;
      };
      return a;
    })();
    b = "DOMRectReadOnly" in window;
    c = b ? window.DOMRectReadOnly.fromRect : void 0;
    d = !!c && "function" === typeof c;
    e = d ? window.DOMRectReadOnly : a;
    f["default"] = e;
  },
  66
);
__d(
  "useDynamicCallbackDANGEROUS",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useLayoutEffect,
      j = b.useRef;
    function a(a) {
      var b = j(a);
      i(
        function () {
          b.current = a;
        },
        [a]
      );
      return h(function () {
        return b.current.apply(b, arguments);
      }, []);
    }
    g["default"] = a;
  },
  98
);
__d(
  "useIntersectionObserver",
  [
    "DOMRectReadOnly",
    "ExecutionEnvironment",
    "JSScheduler",
    "observeIntersection",
    "react",
    "useDynamicCallbackDANGEROUS",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    e = d("react");
    var h = e.useCallback,
      i = e.useLayoutEffect,
      j = e.useRef,
      k = { bottom: 0, left: 0, right: 0, top: 0 },
      l = c("DOMRectReadOnly").fromRect(),
      m = {
        bottom: 0,
        height: 0,
        left: 0,
        right: 0,
        top: 0,
        width: 0,
        x: 0,
        y: 0,
      };
    function n(a) {
      var b;
      if (a == null) b = k;
      else if (typeof a === "string") return a;
      else
        typeof a === "number"
          ? (b = { bottom: a, left: a, right: a, top: a })
          : (b = babelHelpers["extends"]({}, k, a));
      a = b;
      b = a.bottom;
      var c = a.left,
        d = a.right;
      a = a.top;
      return a + "px " + d + "px " + b + "px " + c + "px";
    }
    function o(a, b, d, e) {
      var f = b.root,
        g = b.rootMargin,
        h = b.threshold;
      f = f === null ? null : f();
      var i =
        a == null ||
        a.element !== d ||
        a.onIntersect !== e ||
        a.observedRoot !== f ||
        a.rootMargin !== g ||
        a.threshold !== h;
      if (i) {
        a && a.subscription.remove();
        i = c("observeIntersection")(d, e, {
          root: f,
          rootMargin: n(g),
          threshold: h,
        });
        return babelHelpers["extends"]({}, b, {
          element: d,
          observedRoot: f,
          onIntersect: e,
          subscription: i,
        });
      }
      return a;
    }
    function a(a, b) {
      var e = b.root,
        f = b.rootMargin,
        g = b.threshold,
        k = j(null),
        n = j(null),
        p = j(null),
        q = j(null),
        r = j(!1),
        s = c("useDynamicCallbackDANGEROUS")(a);
      b = h(
        function (a) {
          if (k.current === a) return;
          if (k.current != null && a == null) {
            q.current != null && d("JSScheduler").cancelCallback(q.current);
            var b = k.current;
            q.current = d("JSScheduler").scheduleImmediatePriCallback(
              function () {
                k.current === null &&
                  r.current === !1 &&
                  s({
                    boundingClientRect: m,
                    intersectionRatio: 0,
                    intersectionRect: m,
                    isIntersecting: !1,
                    isVisible: !1,
                    rootBounds: l,
                    target: b,
                    time: Date.now(),
                  }),
                  (q.current = null);
              }
            );
          }
          k.current = a;
          n.current != null &&
            (n.current.subscription.remove(), (n.current = null));
          p.current != null && d("JSScheduler").cancelCallback(p.current);
          p.current = d("JSScheduler").scheduleImmediatePriCallback(
            function () {
              k.current != null &&
                (n.current = o(
                  n.current,
                  { root: e, rootMargin: f, threshold: g },
                  k.current,
                  s
                )),
                (p.current = null);
            }
          );
        },
        [s, e, f, g]
      );
      i(
        function () {
          p.current != null && d("JSScheduler").cancelCallback(p.current);
          p.current = d("JSScheduler").scheduleImmediatePriCallback(
            function () {
              k.current != null &&
                (n.current = o(
                  n.current,
                  { root: e, rootMargin: f, threshold: g },
                  k.current,
                  s
                )),
                (p.current = null);
            }
          );
          return function () {
            n.current != null &&
              (n.current.subscription.remove(), (n.current = null)),
              p.current != null &&
                (d("JSScheduler").cancelCallback(p.current),
                (p.current = null));
          };
        },
        [s, e, f, g]
      );
      i(function () {
        r.current = !1;
        return function () {
          r.current = !0;
        };
      }, []);
      return b;
    }
    function b(a, b, c) {
      return function (a) {};
    }
    f = c("ExecutionEnvironment").canUseDOM ? a : b;
    g["default"] = f;
  },
  98
);
__d(
  "useViewportDuration",
  [
    "BaseViewportMarginsContext",
    "CometVisibilityUserActivityMonitor",
    "HiddenSubtreePassiveContext",
    "Run",
    "getIntersectionMarginFromViewportMargin",
    "getStyleProperty",
    "gkx",
    "intersectionObserverEntryIsIntersecting",
    "nullIntersectionObserverEntryLogger",
    "react",
    "useDoubleEffectHack_DO_NOT_USE_THIS_IS_TRACKED",
    "useIntersectionObserver",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useContext,
      j = b.useLayoutEffect,
      k = b.useMemo,
      l = b.useRef,
      m = function (a) {
        if (a.target == null) return null;
        if (c("getStyleProperty")(a.target, "opacity") === "0")
          return "TARGET_TRANSPARENT";
        return c("getStyleProperty")(a.target, "visibility") === "hidden"
          ? "TARGET_HIDDEN"
          : null;
      },
      n = function (a) {
        return (
          a.boundingClientRect &&
          (a.boundingClientRect.height === 0 ||
            a.boundingClientRect.width === 0)
        );
      };
    function a(a) {
      var b,
        e,
        f,
        g = arguments,
        o,
        p,
        q = a.onHidden,
        r = a.onIntersection,
        s = a.onVisibilityDurationUpdated,
        t = a.onVisible,
        u = a.options,
        v = u === void 0 ? {} : u,
        w = a.threshold,
        x = (b = v.hiddenWhenZeroArea) != null ? b : !1,
        y = (e = v.hiddenWhenCSSStyleHidden) != null ? e : !1,
        z =
          (f = v.isEntryInViewport) != null
            ? f
            : c("intersectionObserverEntryIsIntersecting"),
        A = l(null),
        B = l(!1),
        C = l(null),
        D = l(null),
        E = l(null),
        F = i(c("HiddenSubtreePassiveContext")),
        G =
          v.activityMonitorOverride !== void 0
            ? v.activityMonitorOverride
            : c("CometVisibilityUserActivityMonitor"),
        H = h(
          function (a) {
            if (G && !G.isUserActive()) return "USER_INACTIVE";
            var b = F.getCurrentState();
            if (b.hidden) return "PUSH_VIEW_HIDDEN";
            if (b.backgrounded) return "BACKGROUNDED";
            if (B.current === !1) return "NOT_IN_VIEWPORT";
            if (x === !0 && n(a)) return "TARGET_SIZE_0";
            if (y === !0) {
              b = m(a);
              if (b !== null) return b;
            }
            return null;
          },
          [G, F, y, x]
        ),
        I = h(
          function (a) {
            return H(a) === null;
          },
          [H]
        ),
        J = h(
          function (a, b, c) {
            var d = A.current != null;
            if (!d && c) {
              var e = Date.now();
              A.current = e;
              t != null && b != null && t({ entry: b, visibleTime: e });
            } else if (d && !c) {
              d = (e = A.current) != null ? e : 0;
              c = Date.now();
              if (q != null) {
                e = a || (b && H(b)) || "UNKNOWN";
                q({
                  entry: b,
                  hiddenReason: e,
                  hiddenTime: c,
                  visibleDuration: c - d,
                  visibleTime: d,
                });
              }
              A.current = null;
            }
          },
          [H, q, s, t]
        ),
        K = l(J);
      j(
        function () {
          K.current = J;
        },
        [J]
      );
      c("useDoubleEffectHack_DO_NOT_USE_THIS_IS_TRACKED")(function () {
        return function () {
          K.current("COMPONENT_UNMOUNTED", null, !1),
            C.current != null && (C.current(), (C.current = null)),
            E.current != null && (E.current.remove(), (E.current = null)),
            D.current != null && (D.current.remove(), (D.current = null));
        };
      }, []);
      var L = h(
          function (a) {
            c("nullIntersectionObserverEntryLogger")(
              a,
              "IntersectionObserverEntry is null. num_arguments=" + g.length
            );
            var b = (B.current = z(a));
            r && r({ entry: a, isElementVisible: I(a) });
            C.current == null
              ? b &&
                ((C.current =
                  G &&
                  G.subscribe(function (b) {
                    return K.current("USER_INACTIVE", a, I(a));
                  })),
                (E.current = F.subscribeToChanges(function (b) {
                  return K.current(
                    b.hidden ? "PUSH_VIEW_HIDDEN" : "BACKGROUNDED",
                    a,
                    I(a)
                  );
                })),
                c("gkx")("5223") && D.current != null && D.current.remove(),
                (D.current = d("Run").onBeforeUnload(function (a) {
                  K.current("PAGE_UNLOAD", null, !1);
                }, !1)))
              : b ||
                (C.current != null && (C.current(), (C.current = null)),
                E.current && (E.current.remove(), (E.current = null)),
                D.current != null && (D.current.remove(), (D.current = null)));
            K.current(null, a, I(a));
          },
          [I, G, F, z, r]
        ),
        M = i(c("BaseViewportMarginsContext")),
        N = k(
          function () {
            return {
              bottom: M.bottom + 1,
              left: M.left + 1,
              right: M.right + 1,
              top: M.top + 1,
            };
          },
          [M.bottom, M.left, M.right, M.top]
        ),
        O = (o = v.root) != null ? o : null,
        P =
          (p = v.rootMargin) != null
            ? p
            : c("getIntersectionMarginFromViewportMargin")(N);
      return c("useIntersectionObserver")(L, {
        root: O,
        rootMargin: P,
        threshold: w,
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "useVisibilityObserver",
  ["useViewportDuration"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = 0;
    d = [0, 0.25, 0.5, 0.75, 1];
    e = [
      0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65,
      0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1,
    ];
    var h = { EXPENSIVE: e, LITE: b, MODERATE: d };
    function a(a) {
      var b = a.onHidden,
        d = a.onIntersection,
        e = a.onVisibilityDurationUpdated,
        f = a.onVisible;
      a = a.options;
      return c("useViewportDuration")({
        onHidden: b,
        onIntersection: d,
        onVisibilityDurationUpdated: e,
        onVisible: f,
        options: a,
        threshold:
          h[
            (b = a == null ? void 0 : a.thresholdOverride) != null ? b : "LITE"
          ],
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "ReactEventHelpers",
  [],
  function (a, b, c, d, e, f) {
    b =
      typeof window !== "undefined" && window.navigator != null
        ? /^Mac/.test(window.navigator.platform)
        : !1;
    c = typeof window !== "undefined" && window.PointerEvent != null;
    function a(a, b) {
      return b == null
        ? !1
        : typeof a.containsNode === "function"
        ? a.containsNode(b)
        : a.contains(b);
    }
    f.isMac = b;
    f.hasPointerEvents = c;
    f.isRelatedTargetWithin = a;
  },
  66
);
__d(
  "ReactEventHookPropagation",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      a = a._stopEventHookPropagation;
      return a !== void 0 && a[b];
    }
    function b(a, b) {
      var c = a._stopEventHookPropagation;
      c || (c = a._stopEventHookPropagation = {});
      c[b] = !0;
    }
    f.hasEventHookPropagationStopped = a;
    f.stopEventHookPropagation = b;
  },
  66
);
__d(
  "ReactUseEvent.react",
  ["ReactDOMComet", "gkx", "react", "useUnsafeRef_DEPRECATED"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useLayoutEffect;
    function a(a, b) {
      var e = c("useUnsafeRef_DEPRECATED")(null),
        f = e.current;
      c("gkx")("1703328") && b && (b.passive = void 0);
      if (f === null) {
        var g = d("ReactDOMComet").unstable_createEventHandle(a, b),
          i = new Map();
        f = {
          setListener: function (a, b) {
            var c = i.get(a);
            c !== void 0 && c();
            if (b === null) {
              i["delete"](a);
              return;
            }
            c = g(a, b);
            i.set(a, c);
          },
          clear: function () {
            var a = Array.from(i.values());
            for (var b = 0; b < a.length; b++) a[b]();
            i.clear();
          },
        };
        e.current = f;
      }
      h(
        function () {
          return function () {
            f !== null && f.clear(), (e.current = null);
          };
        },
        [f]
      );
      return f;
    }
    g["default"] = a;
  },
  98
);
__d(
  "checkPassiveEventsSupported",
  ["gkx"],
  function (a, b, c, d, e, f, g) {
    a = !!(
      typeof window !== "undefined" &&
      typeof window.document !== "undefined" &&
      typeof window.document.createElement !== "undefined"
    );
    b = !1;
    if (a && !c("gkx")("1703328"))
      try {
        d = {};
        Object.defineProperty(d, "passive", {
          get: function () {
            b = !0;
          },
        });
        window.addEventListener("test", d, d);
        window.removeEventListener("test", d, d);
      } catch (a) {
        b = !1;
      }
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "ReactFocusEvent.react",
  [
    "ReactEventHelpers",
    "ReactEventHookPropagation",
    "ReactUseEvent.react",
    "checkPassiveEventsSupported",
    "gkx",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    e = d("react");
    var h = e.useCallback,
      i = e.useEffect,
      j = e.useLayoutEffect,
      k = e.useMemo,
      l = e.useRef,
      m = d("ReactEventHelpers").hasPointerEvents
        ? ["keydown", "pointermove", "pointerdown", "pointerup"]
        : [
            "keydown",
            "mousedown",
            "mousemove",
            "mouseup",
            "touchmove",
            "touchstart",
            "touchend",
          ],
      n = { passive: !0 },
      o = !0,
      p = !1;
    function q() {
      m.forEach(function (a) {
        window.addEventListener(
          a,
          t,
          c("checkPassiveEventsSupported") ? { capture: !0, passive: !0 } : !0
        );
      });
    }
    function r(a) {
      var b = a.metaKey,
        c = a.altKey;
      a = a.ctrlKey;
      return !(b || (!d("ReactEventHelpers").isMac && c) || a);
    }
    function s(a) {
      var b = a.key;
      a = a.target;
      if (b === "Tab" || b === "Escape") return !1;
      b = a.isContentEditable;
      a = a.tagName;
      return a === "INPUT" || a === "TEXTAREA" || b;
    }
    function t(a) {
      if (a.type === "keydown") r(a) && (o = !0);
      else {
        a = a.target.nodeName;
        if (a === "HTML") return;
        o = !1;
      }
    }
    function u(a, b) {
      if (a.type === "keydown") {
        a = a.nativeEvent;
        r(a) && !s(a) && b(!0);
      } else (o = !1), b(!1);
    }
    function v(a, b, c) {
      a.forEach(function (a) {
        a.setListener(b, function (a) {
          return u(a, c);
        });
      });
    }
    function w() {
      var a = c("ReactUseEvent.react")("mousedown", n),
        b = c("ReactUseEvent.react")(
          d("ReactEventHelpers").hasPointerEvents
            ? "pointerdown"
            : "touchstart",
          n
        ),
        e = c("ReactUseEvent.react")("keydown", n);
      return k(
        function () {
          return [a, b, e];
        },
        [e, a, b]
      );
    }
    function x() {
      i(function () {
        p || ((p = !0), q());
      }, []);
    }
    function a(a, b) {
      var e = b.disabled,
        f = b.onBlur,
        g = b.onFocus,
        h = b.onFocusChange,
        k = b.onFocusVisibleChange,
        m = l({ isFocused: !1, isFocusVisible: !1 }),
        p = c("ReactUseEvent.react")("focusin", n),
        q = c("ReactUseEvent.react")("focusout", n),
        r = w();
      j(
        function () {
          var b = a.current,
            i = m.current;
          if (b !== null && b.nodeType === 1) {
            v(r, b, function (a) {
              i.isFocused &&
                i.isFocusVisible !== a &&
                ((i.isFocusVisible = a), k && k(a));
            });
            var j = function (a) {
              i.isFocused &&
                ((i.isFocused = !1),
                f && f(a),
                h && h(!1),
                i.isFocusVisible && k && k(!1),
                (i.isFocusVisible = o));
            };
            p.setListener(b, function (a) {
              if (!c("gkx")("5403") && e === !0) return;
              if (
                d("ReactEventHookPropagation").hasEventHookPropagationStopped(
                  a,
                  "useFocus"
                )
              )
                return;
              d("ReactEventHookPropagation").stopEventHookPropagation(
                a,
                "useFocus"
              );
              !i.isFocused &&
                b === a.target &&
                ((i.isFocused = !0),
                (i.isFocusVisible = o),
                g && g(a),
                h && h(!0),
                i.isFocusVisible && k && k(!0));
            });
            q.setListener(b, function (a) {
              if (!c("gkx")("5403") && e === !0) return;
              if (
                d("ReactEventHookPropagation").hasEventHookPropagationStopped(
                  a,
                  "useFocus"
                )
              )
                return;
              d("ReactEventHookPropagation").stopEventHookPropagation(
                a,
                "useFocus"
              );
              j(a);
            });
          }
        },
        [q, e, p, a, r, f, g, h, k]
      );
      i(function () {
        var b = a.current,
          c = m.current;
        return function () {
          if (a.current === null && c.isFocused) {
            c.isFocused = !1;
            var d = new window.FocusEvent("blur");
            Object.defineProperty(d, "target", { value: b });
            f && f(d);
            h && h(!1);
            c.isFocusVisible && k && k(!1);
            c.isFocusVisible = o;
          }
        };
      });
      x();
    }
    function b(a, b) {
      var e = b.disabled,
        f = b.onAfterBlurWithin,
        g = b.onBeforeBlurWithin,
        i = b.onBlurWithin,
        j = b.onFocusWithin,
        k = b.onFocusWithinChange,
        m = b.onFocusWithinVisibleChange,
        p = l({ isFocused: !1, isFocusVisible: !1 }),
        q = c("ReactUseEvent.react")("focusin", n),
        r = c("ReactUseEvent.react")("focusout", n),
        s = c("ReactUseEvent.react")("afterblur", n),
        t = c("ReactUseEvent.react")("beforeblur", n),
        u = w();
      b = h(
        function (b) {
          typeof a === "function" ? a(b) : (a.current = b);
          var h = p.current;
          b !== null &&
            h !== null &&
            (v(u, b, function (a) {
              h.isFocused &&
                h.isFocusVisible !== a &&
                ((h.isFocusVisible = a), m && m(a));
            }),
            q.setListener(b, function (a) {
              if (!c("gkx")("5403") && e === !0) return;
              if (
                d("ReactEventHookPropagation").hasEventHookPropagationStopped(
                  a,
                  "useFocusWithin"
                )
              )
                return;
              h.isFocused ||
                ((h.isFocused = !0),
                (h.isFocusVisible = o),
                k && k(!0),
                h.isFocusVisible && m && m(!0));
              !h.isFocusVisible && o && ((h.isFocusVisible = o), m && m(!0));
              j && j(a);
            }),
            r.setListener(b, function (a) {
              if (!c("gkx")("5403") && e === !0) return;
              var f = a.nativeEvent.relatedTarget;
              if (
                d("ReactEventHookPropagation").hasEventHookPropagationStopped(
                  a,
                  "useFocusWithin"
                )
              )
                return;
              h.isFocused && !d("ReactEventHelpers").isRelatedTargetWithin(b, f)
                ? ((h.isFocused = !1),
                  k && k(!1),
                  h.isFocusVisible && m && m(!1),
                  i && i(a))
                : d("ReactEventHookPropagation").stopEventHookPropagation(
                    a,
                    "useFocusWithin"
                  );
            }),
            t.setListener(b, function (a) {
              if (!c("gkx")("5403") && e === !0) return;
              g &&
                (g(a),
                s.setListener(document, function (a) {
                  f && f(a), s.setListener(document, null);
                }));
            }));
        },
        [s, t, r, e, q, u, a, f, g, i, j, k, m]
      );
      x();
      return b;
    }
    g.useFocus = a;
    g.useFocusWithin = b;
  },
  98
);
__d(
  "FocusWithinHandler.react",
  ["ReactFocusEvent.react", "react"],
  function (a, b, c, d, e, f, g) {
    var h = d("react");
    b = d("react");
    var i = b.useMemo,
      j = b.useRef,
      k = b.useState,
      l = h.unstable_Scope;
    function a(a) {
      var b,
        c = a.children,
        e = a.onFocusChange,
        f = a.onFocusVisibleChange,
        g = a.onFocusWithin,
        m = a.onBlurWithin;
      a = a.testOnly;
      var n = j(null);
      b = k((b = a && a.focus) != null ? b : !1);
      var o = b[0],
        p = b[1];
      a = k((b = a && a.focusVisible) != null ? b : !1);
      b = a[0];
      var q = a[1];
      a = d("ReactFocusEvent.react").useFocusWithin(
        n,
        i(
          function () {
            return {
              onFocusWithin: function (a) {
                g && !o && g(a);
              },
              onBlurWithin: function (a) {
                m && o && m(a);
              },
              onFocusWithinChange: e
                ? function (a) {
                    p(a), e(a);
                  }
                : p,
              onFocusWithinVisibleChange: f
                ? function (a) {
                    q(a), f(a);
                  }
                : q,
            };
          },
          [o, m, e, f, g]
        )
      );
      return h.jsx(l, {
        ref: a,
        children: typeof c === "function" ? c(o, b) : c,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "BaseFocusRing.react",
  ["FocusWithinHandler.react", "gkx", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        focused: {
          outline: "x1i4iak8",
          "@media (-webkit-min-device-pixel-ratio: 0)_outline": "x1n22pj5",
          $$css: !0,
        },
        newFocused: {
          boxShadow: "x90kdol",
          outline: "x1a2a7pz",
          "@media (forced-colors: active)_outline": "xzpvr9o",
          $$css: !0,
        },
        newFocusedInset: {
          boxShadow: "xsgs0p0",
          outline: "x1a2a7pz",
          $$css: !0,
        },
        newFocusedLink: { outline: "x11312b7", $$css: !0 },
        unfocused: { outline: "x1a2a7pz", $$css: !0 },
      },
      j = { default: i.newFocused, inset: i.newFocusedInset },
      k = c("gkx")("1721477") || c("gkx")("1459");
    function a(a) {
      var b = a.children,
        d = a.focusRingPosition;
      d = d === void 0 ? "default" : d;
      var e = a.mode,
        f = e === void 0 ? "focus-visible" : e;
      e = a.suppressFocusRing;
      var g = e === void 0 ? !1 : e;
      e = a.testOnly;
      var l = k ? j[d] : i.focused;
      return h.jsx(c("FocusWithinHandler.react"), {
        testOnly: e,
        children: function (a, c) {
          var d = !1;
          g || (a && c ? (d = !0) : a && f === "focus" && (d = !0));
          return b(d ? l : i.unfocused);
        },
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    a.focusRingXStyle = k ? i.newFocused : i.focused;
    a.focusRingInsetXStyle = k ? i.newFocusedInset : i.focused;
    a.linkFocusRingXStyle = k ? i.newFocusedLink : i.focused;
    g["default"] = a;
  },
  98
);
__d(
  "CometPressableOverlay.react",
  [
    "BaseFocusRing.react",
    "CometCompositeItemFocusIndicator.react",
    "CometVisualCompletionAttributes",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useState,
      j = {
        circle: {
          borderTopStartRadius: "x14yjl9h",
          borderTopEndRadius: "xudhj91",
          borderBottomEndRadius: "x18nykt9",
          borderBottomStartRadius: "xww2gxu",
          $$css: !0,
        },
        defaultHoveredStyle: { backgroundColor: "x1wpzbip", $$css: !0 },
        defaultPressedStyle: { backgroundColor: "x1iutvsz", $$css: !0 },
        overlay: {
          borderTopStartRadius: "x1o1ewxj",
          borderTopEndRadius: "x3x9cwd",
          borderBottomEndRadius: "x1e5q0jg",
          borderBottomStartRadius: "x13rtm0m",
          bottom: "x1ey2m1c",
          end: "xds687c",
          opacity: "xg01cxk",
          pointerEvents: "x47corl",
          position: "x10l6tqk",
          start: "x17qophe",
          top: "x13vifvy",
          transitionDuration: "x1ebt8du",
          transitionProperty: "x19991ni",
          transitionTimingFunction: "x1dhq9h",
          $$css: !0,
        },
        overlayVisible: {
          opacity: "x1hc1fzr",
          transitionDuration: "x1mq3mr6",
          $$css: !0,
        },
      };
    function a(a) {
      var b = a.focusVisible;
      b = b === void 0 ? !1 : b;
      var d = a.focusRingPosition;
      d = d === void 0 ? "default" : d;
      var e = a.hovered;
      e = e === void 0 ? !1 : e;
      var f = a.hoveredStyle;
      f = f === void 0 ? j.defaultHoveredStyle : f;
      var g = a.offset,
        k = a.pressed;
      k = k === void 0 ? !1 : k;
      var l = a.pressedStyle;
      l = l === void 0 ? j.defaultPressedStyle : l;
      var m = a.radius,
        n = a.focusVisibleStyle;
      n = n === void 0 ? f : n;
      var o = a.showGridSignifiers;
      o = o === void 0 ? !1 : o;
      a = a.showFocusRing;
      a = a === void 0 ? !1 : a;
      var p = i(),
        q = p[0];
      p = p[1];
      k
        ? q !== "pressed" && p("pressed")
        : b
        ? q !== "focused" && p("focused")
        : e && q !== "hovered" && p("hovered");
      var r, s, t, u;
      g != null &&
        (typeof g === "number"
          ? ((r = -g), (s = -g), (t = -g), (u = -g))
          : ((r = -g.bottom), (s = -g.left), (t = -g.right), (u = -g.top)));
      return h.jsx(
        "div",
        babelHelpers["extends"](
          {
            className: c("stylex")(
              j.overlay,
              (k || b || e || o) && j.overlayVisible,
              q === "pressed" && l,
              q === "focused" && n,
              q === "hovered" && f,
              q === "focused" && a
                ? d === "default"
                  ? c("BaseFocusRing.react").focusRingXStyle
                  : c("BaseFocusRing.react").focusRingInsetXStyle
                : void 0,
              m === "50%" && j.circle
            ),
          },
          c("CometVisualCompletionAttributes").IGNORE,
          {
            style:
              q != null
                ? {
                    borderRadius: typeof m === "number" ? m : void 0,
                    bottom: r,
                    left: s,
                    right: t,
                    top: u,
                  }
                : void 0,
            children: o
              ? h.jsx(c("CometCompositeItemFocusIndicator.react"), {})
              : null,
          }
        )
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometCompositeStructureContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({ horizontal: !1, vertical: !1 });
    g["default"] = b;
  },
  98
);
__d(
  "IconSource",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = function (a, b, c) {
      (this.$$typeof = "fb.iconsource"), (this.src = b), (this.size = c);
    };
    f["default"] = a;
  },
  66
);
__d(
  "TintableIconSource",
  ["IconSource"],
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
          (c.$$typeof = "fb.tintableiconsource"),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      return b;
    })(c("IconSource"));
    g["default"] = a;
  },
  98
);
__d(
  "fbicon",
  [
    "TintableIconSource",
    "coerceImageishSprited",
    "memoizeWithArgs",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      throw c("unrecoverableViolation")(
        "fbicon.filled" +
          ("(" + JSON.stringify(a) + ", " + b + "): ") +
          "Unexpected fbicon.filled reference.",
        "comet_ui"
      );
    }
    function b(a, b) {
      throw c("unrecoverableViolation")(
        "fbicon.outline" +
          ("(" + JSON.stringify(a) + ", " + b + "): ") +
          "Unexpected fbicon.outline reference.",
        "comet_ui"
      );
    }
    d = c("memoizeWithArgs")(
      function (a, b) {
        return new (c("TintableIconSource"))("FB", a, b);
      },
      function (a, b) {
        if (typeof a === "object") {
          var d = c("coerceImageishSprited")(a);
          if (d != null) return d.identifier + ":" + b;
          else if (typeof a.uri === "string") return a.uri + ":" + b;
        } else if (typeof a === "string") return a + ":" + b;
        throw c("unrecoverableViolation")(
          "fbicon._: Invalid icon provided.",
          "comet_ui"
        );
      }
    );
    g.filled = a;
    g.outline = b;
    g._ = d;
  },
  98
);
__d(
  "CometCompositeItemFocusIndicator.react",
  [
    "ix",
    "CometCompositeStructureContext",
    "CometIcon.react",
    "fbicon",
    "gkx",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = d("react").useContext,
      k = c("gkx")("1721477") || c("gkx")("1459");
    function a() {
      var a = j(c("CometCompositeStructureContext"));
      return !k || a.hideArrowSignifiers === !0
        ? null
        : i.jsxs(i.Fragment, {
            children: [
              a.horizontal === !0
                ? i.jsxs(i.Fragment, {
                    children: [
                      i.jsx("div", {
                        className:
                          "x2bj2ny xn7ya7q x1su9jv1 xt02mhb xb4krs4 x1npaq5j x1c83p5e x1enjb0b x199158v xdk7pt x14ju556 x1nn3v0j xg83lxy xg8j3zb x1k2j06m x10l6tqk x1xc55vz x9otpla x67uiyb xwa60dl",
                        children: i.jsx(c("CometIcon.react"), {
                          color: "primary",
                          icon: d("fbicon")._(h("1739808"), 8),
                        }),
                      }),
                      i.jsx("div", {
                        className:
                          "x2bj2ny xn7ya7q x1su9jv1 xt02mhb xb4krs4 x1npaq5j x1c83p5e x1enjb0b x199158v xdk7pt x14ju556 x1nn3v0j xg83lxy xg8j3zb x1k2j06m x10l6tqk x1xc55vz x1wtad8d x9otpla xwa60dl",
                        children: i.jsx(c("CometIcon.react"), {
                          color: "primary",
                          icon: d("fbicon")._(h("897949"), 8),
                        }),
                      }),
                    ],
                  })
                : null,
              a.vertical === !0
                ? i.jsxs(i.Fragment, {
                    children: [
                      i.jsx("div", {
                        className:
                          "x2bj2ny xn7ya7q x1su9jv1 xt02mhb xb4krs4 x1npaq5j x1c83p5e x1enjb0b x199158v xdk7pt x14ju556 x1nn3v0j xg83lxy xg8j3zb x1k2j06m x10l6tqk x1xc55vz x1orzsq4 xtzzx4i x1fur4o1",
                        children: i.jsx(c("CometIcon.react"), {
                          color: "primary",
                          icon: d("fbicon")._(h("702721"), 8),
                        }),
                      }),
                      i.jsx("div", {
                        className:
                          "x2bj2ny xn7ya7q x1su9jv1 xt02mhb xb4krs4 x1npaq5j x1c83p5e x1enjb0b x199158v xdk7pt x14ju556 x1nn3v0j xg83lxy xg8j3zb x1k2j06m x10l6tqk x1xc55vz xqd3l62 x1orzsq4 xtzzx4i",
                        children: i.jsx(c("CometIcon.react"), {
                          color: "primary",
                          icon: d("fbicon")._(h("701592"), 8),
                        }),
                      }),
                    ],
                  })
                : null,
            ],
          });
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometSSRPreloadImageCollection",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = new Set(),
      h = new Set();
    function a(a) {
      g.add(a);
    }
    function b() {
      g.clear();
    }
    function c() {
      if (!g || g.size === 0) return "";
      var a = [];
      g == null
        ? void 0
        : g.forEach(function (b) {
            h.has(b) ||
              (a.push('<link rel="preload" as="image" href="' + b + '" />'),
              h.add(b));
          });
      return a.join("\n");
    }
    f.addImage = a;
    f.clearImageCollection = b;
    f.imagesToHTMLLinkString = c;
  },
  66
);
__d(
  "CometSSRBackgroundImageUtils",
  ["CometSSRPreloadImageCollection", "ExecutionEnvironment"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b;
      if (a === null || c("ExecutionEnvironment").canUseDOM) return;
      b = (b = (b = a.spi) != null ? b : a._spi) != null ? b : a.uri;
      if (!b) return;
      d("CometSSRPreloadImageCollection").addImage(b);
    }
    g.processSpritedImagesForSSRPreload = a;
  },
  98
);
__d(
  "getReactComponentDisplayName",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      var b = a.displayName;
      if (b != null) return b;
      return a.name != null ? a.name : "ReactComponent";
    }
    f["default"] = a;
  },
  66
);
__d(
  "getReactElementDisplayName",
  ["getReactComponentDisplayName", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    function a(a) {
      if (a == null) return "#empty";
      if (
        typeof a === "string" ||
        typeof a === "number" ||
        typeof a === "boolean"
      )
        return "#text";
      a = a.type;
      if (a == null) return "ReactComponent";
      return typeof a === "string" ? a : c("getReactComponentDisplayName")(a);
    }
    g["default"] = a;
  },
  98
);
__d(
  "ErrorBoundary.react",
  [
    "ErrorPubSub",
    "ErrorSerializer",
    "cr:1645510",
    "getErrorSafe",
    "getReactElementDisplayName",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(d, a);
      function d() {
        var b, c;
        for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
          e[f] = arguments[f];
        return (
          ((b = c = a.call.apply(a, [this].concat(e)) || this),
          (c.state = { error: null, moduleName: i(c.props.children) }),
          (c.suppressReactDefaultErrorLogging = !0),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      d.getDerivedStateFromError = function (a) {
        return { error: c("getErrorSafe")(a) };
      };
      var e = d.prototype;
      e.componentDidUpdate = function (a) {
        if (
          this.state.error &&
          this.props.forceResetErrorCount != null &&
          this.props.forceResetErrorCount !== a.forceResetErrorCount
        ) {
          this.setState({ error: null });
          return;
        }
      };
      e.componentDidCatch = function (a, b) {
        a = b.componentStack;
        b = this.props;
        var d = b.augmentError,
          e = b.context;
        e = e === void 0 ? {} : e;
        var f = b.description;
        f = f === void 0 ? "base" : f;
        b = b.onError;
        e.messageFormat == null &&
          ((e.messageFormat = "caught error in module %s (%s)"),
          (e.messageParams = [this.state.moduleName, f]));
        f = this.state;
        var g = f.error;
        f = f.moduleName;
        g != null &&
          (c("ErrorSerializer").aggregateError(g, {
            componentStack: a,
            loggingSource: "ERROR_BOUNDARY",
          }),
          c("ErrorSerializer").aggregateError(g, e),
          typeof d === "function" && d(g),
          c("ErrorPubSub").reportError(g),
          typeof b === "function" && b(g, f));
      };
      e.render = function () {
        var a = this.state,
          c = a.error;
        a = a.moduleName;
        if (c) {
          var d = this.props.fallback;
          return d != null ? d(c, a) : null;
        }
        return b("cr:1645510") != null
          ? h.jsxs(h.Fragment, {
              children: [h.jsx(b("cr:1645510"), {}), this.props.children],
            })
          : (d = this.props.children) != null
          ? d
          : null;
      };
      return d;
    })(h.PureComponent);
    a.defaultProps = { forceResetErrorCount: 0 };
    function i(a) {
      a = h.Children.count(a) > 1 ? h.Children.toArray(a)[0] : a;
      return c("getReactElementDisplayName")(a);
    }
    g["default"] = a;
  },
  98
);
__d(
  "addAnnotations",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      Object.keys(b).forEach(function (c) {
        var d;
        a[c] = Object.assign((d = a[c]) != null ? d : {}, b[c]);
      });
    }
    f["default"] = a;
  },
  66
);
__d(
  "InteractionTracingMetricsCore",
  ["addAnnotations", "hero-tracing-placeholder", "performanceNowSinceAppStart"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = new Map(),
      i = new Map(),
      j = new Map(),
      k = {
        string: {},
        int: {},
        double: {},
        bool: {},
        string_array: {},
        int_array: {},
        double_array: {},
        bool_array: {},
      },
      l = { interactionCount: 0 };
    a = function () {
      var a = new Map(j),
        b = function (b) {
          a.forEach(function (a) {
            b(a);
          });
        },
        d = {
          addGlobalMetadata: function (a, b) {
            if (typeof b === "number") {
              var e;
              c("addAnnotations")(k, { int: ((e = {}), (e[a] = b), e) });
            } else if (typeof b === "string") {
              c("addAnnotations")(k, { string: ((e = {}), (e[a] = b), e) });
            } else if (typeof b === "boolean") {
              c("addAnnotations")(k, { bool: ((e = {}), (e[a] = b), e) });
            }
            d.addMetadata(a, b);
          },
          addMetadata: function (a, d) {
            b(function (b) {
              if (typeof d === "number") {
                var e;
                c("addAnnotations")(b.annotations, {
                  int: ((e = {}), (e[a] = d), e),
                });
              } else if (typeof d === "string") {
                c("addAnnotations")(b.annotations, {
                  string: ((e = {}), (e[a] = d), e),
                });
              } else if (typeof d === "boolean") {
                c("addAnnotations")(b.annotations, {
                  bool: ((e = {}), (e[a] = d), e),
                });
              }
            });
          },
          addRequireDeferred: function (a, c) {
            var d = [];
            b(function (b) {
              if (b.requireDeferreds[a] != null) return;
              b = b.requireDeferreds[a] = { start: c };
              d.push(b);
            });
            return function (a, b) {
              d.forEach(function (d) {
                (d.end = a),
                  (d.duration = a - c),
                  b && (d.alreadyRequired = !0);
              });
            };
          },
          forEach: function (a) {
            b(function (b) {
              a(b);
            });
          },
        };
      return d;
    };
    var m = {
      addFactoryTiming: function (a, b) {
        a = i.get(a);
        if (!a) return;
        a.factoryTimings.push(b);
      },
      addGlobalMetadata: function (a, b, d) {
        if (typeof d === "number") {
          var e;
          c("addAnnotations")(k, { int: ((e = {}), (e[b] = d), e) });
          m.addAnnotationInt(a, b, d);
        } else if (typeof d === "string") {
          c("addAnnotations")(k, { string: ((e = {}), (e[b] = d), e) });
          m.addAnnotation(a, b, d);
        } else if (typeof d === "boolean") {
          c("addAnnotations")(k, { bool: ((e = {}), (e[b] = d), e) });
          m.addAnnotationBoolean(a, b, d);
        }
      },
      addHeroBootload: function (a, b) {
        a = i.get(a);
        if (!a) return;
        a.heroBootloads.push(b);
      },
      addHeroRelay: function (a, b) {
        a = i.get(a);
        if (!a) return;
        a.heroRelay.push(b);
      },
      addHeroPendingPlaceholders: function (a, b) {
        a = i.get(a);
        if (!a) return;
        a.pendingPlaceholders = a.pendingPlaceholders.concat(b);
      },
      addHiddenTiming: function (a, b) {
        a = i.get(a);
        if (!a) return;
        a.hiddenTimings = b;
      },
      addImagePreloader: function (a, b, c) {
        a = i.get(a);
        if (!a) return;
        a.imagePreloaderTimings[b] = c;
      },
      addMarkerPoint: function (a, b, d, e, f) {
        e === void 0 && (e = c("performanceNowSinceAppStart")());
        a = i.get(a);
        if (!a) return;
        e >= a.start &&
          ((a.markerPoints[b] = { timestamp: e, type: d }),
          f && (a.markerPoints[b].data = f));
      },
      addFirstMarkerPoint: function (a, b, c, d, e) {
        e === void 0 && (e = {});
        a = i.get(a);
        if (!a) return;
        var f = a.markerPoints[b];
        d >= a.start &&
          (!f || f.timestamp > d) &&
          ((a.markerPoints[b] = { timestamp: d, type: c }),
          e && (a.markerPoints[b].data = e));
      },
      addMetadata: function (a, b, d) {
        a = i.get(a);
        if (!a) return;
        if (typeof d === "number") {
          var e;
          c("addAnnotations")(a.annotations, {
            int: ((e = {}), (e[b] = d), e),
          });
        } else if (typeof d === "string") {
          c("addAnnotations")(a.annotations, {
            string: ((e = {}), (e[b] = d), e),
          });
        } else if (typeof d === "boolean") {
          c("addAnnotations")(a.annotations, {
            bool: ((e = {}), (e[b] = d), e),
          });
        }
      },
      addAnnotation: function (a, b, d) {
        a = i.get(a);
        if (a) {
          c("addAnnotations")(a.annotations, {
            string: ((a = {}), (a[b] = d), a),
          });
        }
      },
      addAnnotationInt: function (a, b, d) {
        a = i.get(a);
        if (a) {
          c("addAnnotations")(a.annotations, {
            int: ((a = {}), (a[b] = d), a),
          });
        }
      },
      addAnnotationDouble: function (a, b, d) {
        a = i.get(a);
        if (a) {
          c("addAnnotations")(a.annotations, {
            double: ((a = {}), (a[b] = d), a),
          });
        }
      },
      addAnnotationBoolean: function (a, b, d) {
        a = i.get(a);
        if (a) {
          c("addAnnotations")(a.annotations, {
            bool: ((a = {}), (a[b] = d), a),
          });
        }
      },
      addAnnotationStringArray: function (a, b, d) {
        a = i.get(a);
        if (a) {
          c("addAnnotations")(a.annotations, {
            string_array: ((a = {}), (a[b] = d), a),
          });
        }
      },
      addAnnotationIntArray: function (a, b, d) {
        a = i.get(a);
        if (a) {
          c("addAnnotations")(a.annotations, {
            int_array: ((a = {}), (a[b] = d), a),
          });
        }
      },
      addAnnotationDoubleArray: function (a, b, d) {
        a = i.get(a);
        if (a) {
          c("addAnnotations")(a.annotations, {
            double_array: ((a = {}), (a[b] = d), a),
          });
        }
      },
      addAnnotationBooleanArray: function (a, b, d) {
        a = i.get(a);
        if (a) {
          c("addAnnotations")(a.annotations, {
            bool_array: ((a = {}), (a[b] = d), a),
          });
        }
      },
      addOfflineTiming: function (a, b) {
        a = i.get(a);
        if (!a) return;
        a.offlineTimings = b;
      },
      addPayloadResource: function (a, b, c) {
        a = i.get(a);
        if (!a) return;
        a.payloadResources[b] = c;
      },
      addPayloadTiming: function (a, b, c) {
        a = i.get(a);
        if (!a) return;
        a.payloadTimings[b] = c;
      },
      addReactRender: function (a, b, c, d, e, f, g) {
        a = i.get(a);
        if (!a) return;
        e = {
          actualDuration: e,
          baseDuration: f,
          duration: d - c,
          end: d,
          phase: g,
          start: c,
        };
        a.reactRender[b] ? a.reactRender[b].push(e) : (a.reactRender[b] = [e]);
        a.commitSet.add(d);
      },
      addSubspan: function (a, b, c, d, e, f) {
        a = i.get(a);
        if (!a) return;
        f = { data: f, end: e, start: d, type: c };
        a.subSpans[b] ? a.subSpans[b].push(f) : (a.subSpans[b] = [f]);
      },
      addMountPoint: function (a, b, c) {
        c = "Mount_" + c;
        m.addFirstMarkerPoint(a, c, "VisualCompletion", b);
      },
      addMountPointMetadata: function (a, b, c) {
        a = m.get(a);
        b = "Mount_" + b;
        a = a == null ? void 0 : a.markerPoints[b];
        if (a) {
          var d = a.data || {};
          a.data = d;
          Object.keys(c).forEach(function (a) {
            d[a] = c[a];
          });
        }
      },
      addTag: function (a, b, c) {
        a = i.get(a);
        if (!a) return;
        a.tagSet[b] || (a.tagSet[b] = new Set());
        a.tagSet[b].add(c);
      },
      addTracedInteraction: function (a, b, c) {
        b = {
          annotations: {
            string: {},
            int: {},
            double: {},
            bool: {},
            string_array: {},
            int_array: {},
            double_array: {},
            bool_array: {},
          },
          commitSet: new Set(),
          factoryTimings: [],
          hasVcReport: !1,
          heroBootloads: [],
          heroRelay: [],
          hiddenTimings: [],
          imagePreloaderTimings: {},
          lateMutationIgnoreElements: new Set(),
          markerPoints: {},
          navigationTiming: {},
          offlineTimings: [],
          payloadResources: {},
          payloadTimings: {},
          pendingPlaceholders: [],
          reactRender: {},
          requireDeferreds: {},
          start: b,
          subSpans: {},
          tagSet: {},
          traceId: a,
          vcStateLog: null,
          wasCanceled: !1,
          wasOffline: !1,
        };
        for (var d in k) for (var e in k[d]) b.annotations[d][e] = k[d][e];
        i.set(a, b);
        j.set(a, b);
        h.set(a, c);
        l.interactionCount++;
        return b;
      },
      complete: function (a) {
        var b = i.get(a);
        if (b && b.completed == null) {
          c("addAnnotations")(b.annotations, {
            int: { endedByHeroComplete: 1 },
          });
          b.completed = c("performanceNowSinceAppStart")();
          var d = h.get(a);
          d && d(b);
          h["delete"](a);
          j["delete"](a);
        }
      },
      currentInteractionLogger: a,
      dump: function () {
        var a = {},
          b = Array.from(i.values());
        b.sort(function (a, b) {
          return a.start - b.start;
        }).forEach(function (b) {
          var c = b.traceId,
            e = d(
              "hero-tracing-placeholder"
            ).HeroPendingPlaceholderTracker.dump(b.traceId);
          a[c] = babelHelpers["extends"]({}, b, {
            pendingPlaceholders: e,
            e2e:
              b.completed != null
                ? ((b.completed - b.start) / 1e3).toFixed(2)
                : "?",
          });
        });
        return a;
      },
      get: function (a) {
        return i.get(a);
      },
      removeMarkerPoint: function (a, b) {
        a = i.get(a);
        a && delete a.markerPoints[b];
      },
      setInteractionClass: function (a, b) {
        a = i.get(a);
        a && (a.interactionClass = b);
      },
      setInteractionType: function (a, b, c, d) {
        a = i.get(a);
        a && ((a.interactionClass = b), (a.type = c), (a.qplEvent = d));
      },
      delete: function (a) {
        i["delete"](a);
      },
      getInteractionStat: function () {
        return l;
      },
    };
    b = m;
    g["default"] = b;
  },
  98
);
__d(
  "interaction-tracing-metrics",
  ["InteractionTracingMetricsCore"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g.InteractionTracingMetricsCore = c("InteractionTracingMetricsCore");
  },
  98
);
__d(
  "InteractionTracingMetrics",
  ["interaction-tracing-metrics"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = d(
      "interaction-tracing-metrics"
    ).InteractionTracingMetricsCore;
  },
  98
);
__d(
  "useHeroErrorMetadata",
  [
    "InteractionTracingMetrics",
    "QPLEvent",
    "fb-error",
    "hero-tracing-placeholder",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useContext;
    function a() {
      var a = i(
          d("hero-tracing-placeholder").HeroCurrentInteractionForLoggingContext
        ),
        b = i(d("hero-tracing-placeholder").HeroInteractionContext.Context),
        e = b.pageletStack;
      return h(
        function (b) {
          var f;
          f =
            (f = b.metadata) != null ? f : new (c("fb-error").ErrorMetadata)();
          b.metadata = f;
          b = (b = a.current) == null ? void 0 : b.interactionUUID;
          if (b != null) {
            b = c("InteractionTracingMetrics").get(b);
            e != null &&
              f.addEntry(
                "COMET_INFRA",
                "INTERACTION_PAGELET_STACK",
                e.join(",")
              );
            b != null &&
              b.qplAction == null &&
              (b.qplEvent != null &&
                f.addEntry(
                  "COMET_INFRA",
                  "INTERACTION_QPL_EVENT",
                  String(d("QPLEvent").getMarkerId(b.qplEvent))
                ),
              b.tracePolicy != null &&
                f.addEntry(
                  "COMET_INFRA",
                  "INTERACTION_TRACE_POLICY",
                  b.tracePolicy
                ));
          }
        },
        [a, e]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometErrorBoundary.react",
  ["ErrorBoundary.react", "react", "useHeroErrorMetadata"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react").forwardRef;
    function a(a, b) {
      var d = c("useHeroErrorMetadata")();
      return h.jsx(
        c("ErrorBoundary.react"),
        babelHelpers["extends"]({}, a, {
          augmentError: d,
          fallback: a.fallback,
          ref: b,
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = b(a);
    g["default"] = e;
  },
  98
);
__d(
  "RecoverableViolationWithComponentStack.react",
  ["CometErrorBoundary.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function i(a) {
      a = a.errorMessage;
      throw new Error(a);
    }
    function a(a) {
      var b = a.errorMessage,
        d = a.fallback;
      a = a.projectName;
      return h.jsx(c("CometErrorBoundary.react"), {
        context: { project: a, type: "error" },
        fallback: function () {
          var a;
          return (a = d) != null ? a : null;
        },
        children: h.jsx(i, { errorMessage: b }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "BaseImage_DEPRECATED.react",
  [
    "CometSSRBackgroundImageUtils",
    "CometVisualCompletionAttributes",
    "RecoverableViolationWithComponentStack.react",
    "coerceImageishSprited",
    "coerceImageishURL",
    "cr:2010754",
    "gkx",
    "joinClasses",
    "mergeRefs",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    e = d("react");
    var i = e.useEffect,
      j = e.useMemo,
      k = e.useRef,
      l = "2";
    function m(a) {
      return (
        a != null &&
        typeof a === "string" &&
        a !== "" &&
        a !== "[object Object]"
      );
    }
    function a(a, e) {
      var f = a.alt,
        g = a.testid,
        n = babelHelpers.objectWithoutPropertiesLoose(a, ["alt", "testid"]),
        o = n.onLoad;
      g = n.src;
      var p = k(null);
      a = j(
        function () {
          return c("mergeRefs")(p, e);
        },
        [p, e]
      );
      d("CometSSRBackgroundImageUtils").processSpritedImagesForSSRPreload(g);
      var q = c("coerceImageishSprited")(g),
        r = c("coerceImageishURL")(g);
      i(
        function () {
          var a;
          o != null &&
            p.current instanceof HTMLImageElement &&
            ((a = p.current) == null ? void 0 : a.complete) &&
            o();
        },
        [o, g]
      );
      if (r != null && r.uri != null) {
        return !m(r.uri)
          ? h.jsx(c("RecoverableViolationWithComponentStack.react"), {
              errorMessage: "Invalid src provided as imageish uri",
              projectName: "comet_ui",
            })
          : h.jsx(
              "img",
              babelHelpers["extends"]({}, n, {
                alt: (g = f) != null ? g : "",
                "data-testid": void 0,
                height: n.height != null ? n.height : r.height,
                ref: a,
                src: r.uri,
                width: n.width != null ? n.width : r.width,
              })
            );
      } else if (q != null) {
        n.height;
        n.src;
        g = n.style;
        n.width;
        r = babelHelpers.objectWithoutPropertiesLoose(n, [
          "height",
          "src",
          "style",
          "width",
        ]);
        return h.jsx(
          "i",
          babelHelpers["extends"](
            {},
            c("CometVisualCompletionAttributes").CSS_IMG,
            r,
            {
              "aria-label": f === "" ? null : f,
              className: c("joinClasses")(
                n.className,
                q.type === "css" ? q.className : void 0
              ),
              "data-testid": void 0,
              ref: a,
              role: f === "" ? null : "img",
              style:
                q.type === "cssless"
                  ? babelHelpers["extends"]({}, g, q.style)
                  : g,
            }
          )
        );
      }
      if (!m(n.src))
        return h.jsx(c("RecoverableViolationWithComponentStack.react"), {
          errorMessage: "Invalid src provided to image",
          projectName: "comet_ui",
        });
      r = c("gkx")("1690028") ? l : void 0;
      function s(a, c, d, e, f, g) {
        b("cr:2010754") &&
          c === "mount" &&
          p.current != null &&
          b("cr:2010754").trackImagePerf(
            p.current,
            g,
            typeof n.src === "string" ? n.src : "",
            { mutationType: "reactCommit" }
          );
      }
      g = h.jsx(
        "img",
        babelHelpers["extends"]({}, n, {
          alt: (q = f) != null ? q : "",
          "data-testid": void 0,
          elementtiming: r,
          ref: a,
        })
      );
      return c("gkx")("1690028")
        ? h.jsx(h.Profiler, { id: l, onRender: s, children: g })
        : g;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = h.forwardRef(a);
    g["default"] = e;
  },
  98
);
__d(
  "useCometUniqueID",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useId;
    function a() {
      return h();
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometSVGIcon.react",
  ["react", "stylex", "useCometUniqueID"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        icon: {
          display: "x1lliihq",
          transitionDuration: "x1k90msu",
          transitionProperty: "x2h7rmj",
          transitionTimingFunction: "x1qfuztq",
          $$css: !0,
        },
        inline: { display: "x1rg5ohu", $$css: !0 },
        shadow: { filter: "x1ssd25i", $$css: !0 },
      },
      j = {
        8: { height: "xdk7pt", width: "x1xc55vz", $$css: !0 },
        10: { height: "x170jfvy", width: "x1fsd2vl", $$css: !0 },
        12: { height: "x1kpxq89", width: "xsmyaan", $$css: !0 },
        16: { height: "xlup9mm", width: "x1kky2od", $$css: !0 },
        18: { height: "xmix8c7", width: "x1xp8n7a", $$css: !0 },
        20: { height: "x1qx5ct2", width: "xw4jnvo", $$css: !0 },
        24: { height: "xxk0z11", width: "xvy4d1p", $$css: !0 },
        28: { height: "x1fgtraw", width: "xgd8bvy", $$css: !0 },
        30: { height: "x1gnnpzl", width: "x1849jeq", $$css: !0 },
        32: { height: "x10w6t97", width: "x1td3qas", $$css: !0 },
        36: { height: "xc9qbxq", width: "x14qfxbe", $$css: !0 },
        40: { height: "x1vqgdyp", width: "x100vrsf", $$css: !0 },
        48: { height: "xsdox4t", width: "x1useyqa", $$css: !0 },
        52: { height: "xdd8jsf", width: "xvni27", $$css: !0 },
        56: { height: "xnnlda6", width: "x15yg21f", $$css: !0 },
        60: { height: "xng8ra", width: "x1247r65", $$css: !0 },
        72: { height: "xy75621", width: "xni59qk", $$css: !0 },
        112: { height: "x19swzb4", width: "xj35x94", $$css: !0 },
        132: { height: "x1h5wmu3", width: "x16s0kzc", $$css: !0 },
      },
      k = {
        "active-tab": { color: "x5e5rjt", $$css: !0 },
        baseCherry: { color: "xmw33a7", $$css: !0 },
        baseLemon: { color: "xedzdh8", $$css: !0 },
        baseLime: { color: "xdb1l0v", $$css: !0 },
        black: { color: "x1p6odiv", $$css: !0 },
        blueLink: { color: "x1fey0fg", $$css: !0 },
        disabled: { color: "x1eu2eya", $$css: !0 },
        "fb-logo": { color: "xig6vdn", $$css: !0 },
        highlight: { color: "x1qq9wsj", $$css: !0 },
        "inactive-tab": { color: "xcza8v6", $$css: !0 },
        negative: { color: "x1a1m0xk", $$css: !0 },
        none: { color: "x19co3pv", $$css: !0 },
        positive: { color: "x6u5lvz", $$css: !0 },
        primary: { color: "x198g3q0", $$css: !0 },
        "rating-star-active": { color: "x1n8qakd", $$css: !0 },
        secondary: { color: "xcza8v6", $$css: !0 },
        tertiary: { color: "xfuq9xy", $$css: !0 },
        warning: { color: "xcly8g5", $$css: !0 },
        white: { color: "x14ctfv", $$css: !0 },
        "work-iris": { color: "xx4snyb", $$css: !0 },
      };
    function a(a) {
      var b = c("useCometUniqueID")();
      if (a.viewBox === void 0) {
        var d = a.alt,
          e = a.color,
          f = a.component,
          g = a.inline;
        g = g === void 0 ? !1 : g;
        var l = a.shadow;
        l = l === void 0 ? !1 : l;
        var m = a.size;
        f = f;
        return h.jsx(f, {
          className: c("stylex")([
            i.icon,
            g && i.inline,
            l && i.shadow,
            k[e],
            j[m],
          ]),
          title: d == null || d === "" ? void 0 : d,
        });
      } else {
        f = a.children;
        g = a.color;
        l = a.inline;
        e = l === void 0 ? !1 : l;
        m = a.shadow;
        d = m === void 0 ? !1 : m;
        l = a.size;
        m = babelHelpers.objectWithoutPropertiesLoose(a, [
          "children",
          "color",
          "inline",
          "shadow",
          "size",
        ]);
        a = [];
        var n;
        g != null &&
          typeof g !== "string" &&
          h.isValidElement(g) &&
          (a.push(
            h.cloneElement(g, { id: b, key: "1", suppressHydrationWarning: !0 })
          ),
          (n = "url(#" + b + ")"));
        return h.jsxs(
          "svg",
          babelHelpers["extends"]({}, m, {
            className: c("stylex")([
              i.icon,
              e && i.inline,
              d && i.shadow,
              typeof g === "string" && k[g],
            ]),
            fill: (b = n) != null ? b : "currentColor",
            height: l,
            suppressHydrationWarning: !0,
            width: l,
            children: [
              a.length > 0 ? h.jsx("defs", { children: a }) : void 0,
              f,
            ],
          })
        );
      }
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometTintedIcon.react",
  ["BaseImage_DEPRECATED.react", "TintableIconSource", "react", "stylex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = { image: { verticalAlign: "x1b0d499", $$css: !0 } },
      j = {
        accent: { filter: "xi3auck", $$css: !0 },
        blueLink: { filter: "x1vv9jnp", $$css: !0 },
        disabled: { filter: "xmgbrsx", $$css: !0 },
        negative: { filter: "x1d2xfc3", $$css: !0 },
        placeholder: { filter: "xuo83w3", $$css: !0 },
        positive: { filter: "x1hq76kk", $$css: !0 },
        primary: { filter: "xep6ejk", $$css: !0 },
        secondary: { filter: "x1d69dk1", $$css: !0 },
        warning: { filter: "xgzi2j0", $$css: !0 },
        white: { filter: "xaj1gnb", $$css: !0 },
      };
    function a(a, b) {
      var d = a.alt;
      d = d === void 0 ? "" : d;
      var e = a.color;
      e = e === void 0 ? "black" : e;
      var f = a.draggable,
        g = a.icon,
        k = a.testid;
      k = a.xstyle;
      a = g instanceof c("TintableIconSource");
      return h.jsx(c("BaseImage_DEPRECATED.react"), {
        alt: d,
        className: c("stylex")(i.image, a && e !== "black" && j[e], k),
        draggable: f,
        ref: b,
        src: g.src,
        testid: void 0,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    b.name = "CometTintedIcon";
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "ImageIconSource",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = function (a, b, c, d) {
      d === void 0 && (d = "cover"),
        (this.$$typeof = "fb.imageiconsource"),
        (this.src = a),
        (this.width = b),
        (this.height = c),
        (this.resizeStrategy = d);
    };
    f["default"] = a;
  },
  66
);
__d(
  "FlightSerializableIcon",
  ["IconSource", "ImageIconSource", "TintableIconSource"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      if (
        typeof a === "object" &&
        typeof a !== "function" &&
        a != null &&
        (a.flight_icon_type === "TintableIconSource" ||
          a.$$typeof === "fb.tintableiconsource")
      ) {
        var b = a;
        return new (c("TintableIconSource"))(b.domain, b.src, b.size);
      }
      if (
        typeof a === "object" &&
        typeof a !== "function" &&
        a != null &&
        (a.flight_icon_type === "IconSource" || a.$$typeof === "fb.iconsource")
      ) {
        b = a;
        return new (c("IconSource"))(b.domain, b.src, b.size);
      }
      if (
        typeof a === "object" &&
        typeof a !== "function" &&
        a != null &&
        (a.flight_icon_type === "ImageIconSource" ||
          a.$$typeof === "fb.imageiconsource")
      ) {
        b = a;
        return new (c("ImageIconSource"))(
          b.src,
          b.width,
          b.height,
          b.resizeStrategy
        );
      }
      return a;
    }
    g.parseFlightIcon = a;
  },
  98
);
__d(
  "SVGIcon",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = function (a) {
      this.component = a;
    };
    function a(a) {
      return new g(a);
    }
    c = function (a) {
      this.codepoints = a;
    };
    var h = function (a) {
      this.component = a;
    };
    function b(a) {
      return new h(a);
    }
    f.SVGIcon = g;
    f.svgIcon = a;
    f.EmojiIcon = c;
    f.LegacySVGIcon = h;
    f.legacySVGIcon = b;
  },
  66
);
__d(
  "CometIcon.react",
  [
    "BaseImage_DEPRECATED.react",
    "CometPressable.react",
    "CometSVGIcon.react",
    "CometTintedIcon.react",
    "FlightSerializableIcon",
    "IconSource",
    "ImageIconSource",
    "SVGIcon",
    "TintableIconSource",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        button: {
          appearance: "xjyslct",
          backgroundColor: "xjbqb8w",
          borderTopStyle: "x13fuv20",
          borderEndStyle: "xu3j5b3",
          borderBottomStyle: "x1q0q8m5",
          borderStartStyle: "x26u7qi",
          borderTopWidth: "x972fbf",
          borderEndWidth: "xcfux6l",
          borderBottomWidth: "x1qhh985",
          borderStartWidth: "xm0m39n",
          display: "x3nfvp2",
          marginTop: "xdj266r",
          marginEnd: "x11i5rnm",
          marginBottom: "xat24cr",
          marginStart: "x1mh8g0r",
          paddingTop: "xexx8yu",
          paddingEnd: "x4uap5",
          paddingBottom: "x18d9i69",
          paddingStart: "xkhd6sd",
          position: "x1n2onr6",
          verticalAlign: "x3ajldb",
          "::after_borderTopStartRadius": "x194ut8o",
          "::after_borderTopEndRadius": "x1vzenxt",
          "::after_borderBottomEndRadius": "xd7ygy7",
          "::after_borderBottomStartRadius": "xt298gk",
          "::after_bottom": "x1xhcax0",
          "::after_content": "x1s928wv",
          "::after_end": "x10pfhc2",
          "::after_position": "x1j6awrg",
          "::after_start": "x1v53gu8",
          "::after_top": "x1tfg27r",
          "::after_zIndex": "xitxdhh",
          $$css: !0,
        },
        image: { verticalAlign: "x1b0d499", $$css: !0 },
        imageContain: { objectFit: "xz74otr", $$css: !0 },
        imageCover: { objectFit: "xl1xv1r", $$css: !0 },
        pressed: { transform: "x1n5d1j9", $$css: !0 },
      };
    function a(a, b) {
      var e = a.alt;
      e = e === void 0 ? "" : e;
      var f = a.color;
      f = f === void 0 ? "primary" : f;
      var g = a.disabled;
      g = g === void 0 ? !1 : g;
      var k = a.disableOverlay_DEPRECATED;
      k = k === void 0 ? !1 : k;
      a.draggable;
      var l = a.focusable,
        m = a.hideHoverOverlay;
      m = m === void 0 ? !1 : m;
      var n = a.icon,
        o = a.linkProps,
        p = a.onHoverIn,
        q = a.onHoverOut,
        r = a.onPress,
        s = a.onPressIn,
        t = a.onPressOut,
        u = a.size;
      u = u === void 0 ? 8 : u;
      var v = a.testid,
        w = a.testOnly_pressed;
      w = w === void 0 ? !1 : w;
      var x = a.xstyle,
        y = babelHelpers.objectWithoutPropertiesLoose(a, [
          "alt",
          "color",
          "disabled",
          "disableOverlay_DEPRECATED",
          "draggable",
          "focusable",
          "hideHoverOverlay",
          "icon",
          "linkProps",
          "onHoverIn",
          "onHoverOut",
          "onPress",
          "onPressIn",
          "onPressOut",
          "size",
          "testid",
          "testOnly_pressed",
          "xstyle",
        ]);
      n = d("FlightSerializableIcon").parseFlightIcon(n);
      v = r == null ? v : void 0;
      f = a.disabled === !0 ? "disabled" : f;
      var z = r != null || o != null;
      e = (!z && y["aria-label"]) || e;
      var A = z ? void 0 : b;
      x =
        n instanceof c("TintableIconSource")
          ? h.jsx(c("CometTintedIcon.react"), {
              alt: e,
              color: j(f),
              draggable: a.draggable,
              icon: n,
              ref: A,
              testid: void 0,
              xstyle: x,
            })
          : n instanceof c("ImageIconSource")
          ? h.jsx(c("BaseImage_DEPRECATED.react"), {
              alt: e,
              className: c("stylex")(
                i.image,
                n.resizeStrategy === "contain" && i.imageContain,
                n.resizeStrategy === "cover" && i.imageCover,
                x
              ),
              draggable: a.draggable,
              ref: A,
              src: n.src,
              style: { height: n.height, width: n.width },
              testid: void 0,
            })
          : n instanceof c("IconSource")
          ? h.jsx(c("BaseImage_DEPRECATED.react"), {
              alt: e,
              className: c("stylex")(i.image, x),
              draggable: a.draggable,
              height: n.size,
              ref: A,
              src: n.src,
              width: n.size,
            })
          : n instanceof d("SVGIcon").LegacySVGIcon
          ? h.createElement(n.component, {
              alt: e,
              color: f,
              "data-testid": v,
              size: u,
            })
          : n instanceof d("SVGIcon").SVGIcon
          ? h.jsx(c("CometSVGIcon.react"), {
              alt: e,
              color: f,
              component: n.component,
              "data-testid": void 0,
              size: u,
            })
          : h.jsx(c("CometSVGIcon.react"), {
              alt: e,
              color: f,
              component: n,
              "data-testid": void 0,
              size: u,
            });
      return z
        ? h.jsx(
            c("CometPressable.react"),
            babelHelpers["extends"]({}, y, {
              disabled: g,
              focusable: l,
              hideHoverOverlay: m,
              linkProps: o,
              onHoverIn: p,
              onHoverOut: q,
              onPress: r,
              onPressIn: s,
              onPressOut: t,
              overlayDisabled: k,
              overlayOffset: 8,
              overlayRadius: "50%",
              ref: b,
              testOnly_pressed: w,
              testid: void 0,
              xstyle: function (a) {
                a = a.pressed;
                return [i.button, a && i.pressed];
              },
              children: x,
            })
          )
        : x;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function j(a) {
      switch (a) {
        case "positive":
          return "positive";
        case "negative":
          return "negative";
        case "disabled":
          return "disabled";
        case "highlight":
          return "accent";
        case "secondary":
          return "secondary";
        case "tertiary":
          return "placeholder";
        case "white":
          return "white";
        case "primary":
          return "primary";
        case "warning":
          return "warning";
        case "blueLink":
          return "blueLink";
        default:
          return "black";
      }
    }
    b = h.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "BaseButtonPopoverContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = null;
    c = a.createContext(b);
    g["default"] = c;
  },
  98
);
__d(
  "ReactContextMenuEvent.react",
  ["ReactEventHookPropagation", "ReactUseEvent.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useEffect;
    function a(a, b) {
      var e = b.disabled,
        f = b.onContextMenu,
        g = b.preventDefault,
        i = c("ReactUseEvent.react")("contextmenu");
      h(
        function () {
          var b = a.current;
          b !== null &&
            i.setListener(b, function (a) {
              if (e === !0) return;
              if (
                d("ReactEventHookPropagation").hasEventHookPropagationStopped(
                  a,
                  "useContextMenu"
                )
              )
                return;
              d("ReactEventHookPropagation").stopEventHookPropagation(
                a,
                "useContextMenu"
              );
              g !== !1 && !a.nativeEvent.defaultPrevented && a.preventDefault();
              f && f(a);
            });
        },
        [e, a, i, g, f]
      );
    }
    g.useContextMenu = a;
  },
  98
);
__d(
  "ReactHoverEvent.react",
  [
    "ReactEventHelpers",
    "ReactEventHookPropagation",
    "ReactUseEvent.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useEffect,
      i = b.useRef;
    function j(a, b, c) {
      return {
        clientX: b.clientX,
        clientY: b.clientY,
        pageX: b.pageX,
        pageY: b.pageY,
        screenX: b.screenX,
        screenY: b.screenY,
        target: c,
        timeStamp: b.timeStamp,
        type: a,
        x: b.clientX,
        y: b.clientY,
      };
    }
    var k = { passive: !0 };
    function l(a, b) {
      b = b;
      while (b != null) {
        if (b === a) return !0;
        if (b._hoverEventTarget) return !1;
        b = b.parentNode;
      }
      return !1;
    }
    function a(a, b) {
      var e = b.disabled,
        f = b.onHoverStart,
        g = b.onHoverMove,
        m = b.onHoverEnd,
        n = b.onHoverChange,
        o = c("ReactUseEvent.react")("touchstart", k),
        p = c("ReactUseEvent.react")("mouseover", k),
        q = c("ReactUseEvent.react")("mouseout", k),
        r = c("ReactUseEvent.react")("mousemove", k),
        s = c("ReactUseEvent.react")("pointerover", k),
        t = c("ReactUseEvent.react")("pointerout", k),
        u = c("ReactUseEvent.react")("pointermove", k),
        v = c("ReactUseEvent.react")("pointercancel", k),
        w = i({ isHovered: !1, isTouched: !1 });
      h(
        function () {
          var b = a.current,
            c = w.current;
          if (b !== null && c !== null) {
            b._hoverEventTarget = !0;
            var h = document,
              i = function (a) {
                if (e === !0) {
                  y(a);
                  return;
                }
                if (
                  d("ReactEventHookPropagation").hasEventHookPropagationStopped(
                    a,
                    "useHover"
                  )
                )
                  return;
                d("ReactEventHookPropagation").stopEventHookPropagation(
                  a,
                  "useHover"
                );
                !c.isHovered &&
                  !l(b, a.relatedTarget) &&
                  ((c.isHovered = !0),
                  f && f(j("hoverstart", a, b)),
                  n && n(!0),
                  d("ReactEventHelpers").hasPointerEvents
                    ? (u.setListener(h, x),
                      v.setListener(h, y),
                      t.setListener(h, k))
                    : q.setListener(h, k));
              },
              k = function (a) {
                c.isHovered &&
                  !l(b, a.relatedTarget) &&
                  ((c.isHovered = !1),
                  m && m(j("hoverend", a, b)),
                  n && n(!1),
                  y(a));
              },
              x = function (a) {
                c.isTouched = !1;
                if (e === !0) {
                  y(a);
                  return;
                }
                c.isHovered && g && g(j("hovermove", a, b));
              },
              y = function (a) {
                (c.isTouched = !1),
                  d("ReactEventHelpers").hasPointerEvents
                    ? (u.setListener(h, null),
                      v.setListener(h, null),
                      t.setListener(h, null))
                    : q.setListener(h, null),
                  k(a);
              };
            d("ReactEventHelpers").hasPointerEvents
              ? s.setListener(b, function (a) {
                  a.pointerType !== "touch" && i(a);
                })
              : (p.setListener(b, function (a) {
                  c.isTouched || i(a);
                }),
                o.setListener(b, function () {
                  c.isTouched = !0;
                }),
                r.setListener(h, x));
            c.isHovered &&
              (d("ReactEventHelpers").hasPointerEvents
                ? (u.setListener(h, x),
                  v.setListener(h, y),
                  t.setListener(h, k))
                : q.setListener(h, k));
          }
        },
        [e, n, m, g, f, v, u, t, s, r, q, p, a, o]
      );
    }
    g.useHover = a;
  },
  98
);
__d(
  "ReactPressEvent.react",
  [
    "ReactEventHelpers",
    "ReactEventHookPropagation",
    "ReactUseEvent.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useEffect,
      i = b.useRef,
      j = { passive: !0 };
    function k(a, b, c, d, e) {
      var f = {
        altKey: d.altKey,
        buttons: b,
        clientX: d.clientX,
        clientY: d.clientY,
        ctrlKey: d.ctrlKey,
        defaultPrevented: d.defaultPrevented,
        metaKey: d.metaKey,
        pageX: d.pageX,
        pageY: d.pageY,
        pointerType: c,
        screenX: d.screenX,
        screenY: d.screenY,
        shiftKey: d.shiftKey,
        target: e,
        timeStamp: d.timeStamp,
        type: a,
        x: d.clientX,
        y: d.clientY,
        preventDefault: function () {
          (f.defaultPrevented = !0), d.preventDefault();
        },
        stopPropagation: function () {
          d.stopPropagation();
        },
      };
      return f;
    }
    function a(a, b) {
      var e = b.disabled,
        f = b.onPressStart,
        g = b.onPressMove,
        l = b.onPressEnd,
        m = b.onPressChange,
        n = i({
          isPressed: !1,
          isPressActive: !1,
          pointerId: null,
          bounds: null,
          pointerType: "",
          buttons: 0,
          activationEvent: null,
        }),
        o = c("ReactUseEvent.react")("pointerdown"),
        p = c("ReactUseEvent.react")("pointermove", j),
        q = c("ReactUseEvent.react")("pointerup", j),
        r = c("ReactUseEvent.react")("pointercancel", j),
        s = c("ReactUseEvent.react")("mousedown"),
        t = c("ReactUseEvent.react")("mouseup", j),
        u = c("ReactUseEvent.react")("mousemove", j),
        v = c("ReactUseEvent.react")("dragstart", j),
        w = c("ReactUseEvent.react")("focusout", j);
      h(
        function () {
          var b = a.current,
            c = n.current;
          if (b !== null) {
            var h = document,
              i = function (a) {
                if (e === !0) {
                  y(a);
                  return;
                }
                if (
                  d("ReactEventHookPropagation").hasEventHookPropagationStopped(
                    a,
                    "usePress"
                  )
                )
                  return;
                d("ReactEventHookPropagation").stopEventHookPropagation(
                  a,
                  "usePress"
                );
                if (
                  a.buttons === 2 ||
                  a.buttons > 4 ||
                  (d("ReactEventHelpers").isMac &&
                    a.pointerType === "mouse" &&
                    a.ctrlKey)
                )
                  return;
                c.buttons = a.buttons;
                a.button === 1 && (c.buttons = 4);
                j(a);
              },
              j = function (a) {
                if (!c.isPressed) {
                  var e = a,
                    g = e.pointerId;
                  e = e.pointerType || "mouse";
                  c.isPressed = !0;
                  c.isPressActive = !0;
                  c.pointerId = g !== void 0 ? g : null;
                  c.pointerType = e;
                  c.activationEvent = a;
                  e !== "mouse" && (c.bounds = b.getBoundingClientRect());
                  f && f(k("pressstart", c.buttons, e, a, b));
                  m && m(!0);
                  d("ReactEventHelpers").hasPointerEvents
                    ? (q.setListener(h, y),
                      p.setListener(h, z),
                      r.setListener(h, y))
                    : (u.setListener(h, z),
                      t.setListener(h, y),
                      v.setListener(h, y));
                }
              },
              x = function (a) {
                c.isPressed &&
                  ((c.isPressed = !1),
                  l && l(k("pressend", c.buttons, c.pointerType, a, b)),
                  m && m(!1));
              },
              y = function (a) {
                (c.isPressActive = !1),
                  (c.bounds = null),
                  (c.activationEvent = null),
                  x(a),
                  d("ReactEventHelpers").hasPointerEvents
                    ? (q.setListener(h, null),
                      p.setListener(h, null),
                      r.setListener(h, null))
                    : (u.setListener(h, null),
                      t.setListener(h, null),
                      v.setListener(h, null));
              },
              z = function (a) {
                if (e === !0) {
                  y(a);
                  return;
                }
                if (!c.isPressActive) return;
                var d = c.pointerType,
                  f = c.isPressed,
                  h = !1;
                if (d === "mouse") {
                  var i = a.target;
                  h = b.contains(i);
                } else {
                  i = a;
                  i = i.pointerId;
                  var l = c.bounds;
                  if (i !== c.pointerId || l === null) return;
                  i = a.clientX;
                  var m = a.clientY,
                    n = l.top,
                    o = l.left,
                    p = l.right;
                  l = l.bottom;
                  i >= o && i <= p && m >= n && m <= l && (h = !0);
                }
                h
                  ? f
                    ? g && g(k("pressmove", c.buttons, d, a, b))
                    : j(a)
                  : f && x(a);
              };
            d("ReactEventHelpers").hasPointerEvents
              ? o.setListener(b, i)
              : s.setListener(b, i);
            w.setListener(b, function (a) {
              var d = c.activationEvent;
              a.target === b && d !== null && y(d);
            });
            c.isPressActive &&
              (d("ReactEventHelpers").hasPointerEvents
                ? (q.setListener(h, y),
                  p.setListener(h, z),
                  r.setListener(h, y))
                : (u.setListener(h, z),
                  t.setListener(h, y),
                  v.setListener(h, y)));
            return function () {
              var b = c.activationEvent;
              a.current === null && b !== null && y(b);
            };
          }
        },
        [e, v, w, s, u, t, m, l, g, f, r, o, p, q, a]
      );
    }
    g.usePress = a;
  },
  98
);
__d(
  "Pressability",
  [
    "ReactContextMenuEvent.react",
    "ReactFocusEvent.react",
    "ReactHoverEvent.react",
    "ReactPressEvent.react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      var c = b.disabled,
        e = b.onBlur,
        f = b.onContextMenu,
        g = b.onFocus,
        h = b.onFocusChange,
        i = b.onFocusVisibleChange,
        j = b.onHoverChange,
        k = b.onHoverEnd,
        l = b.onHoverMove,
        m = b.onHoverStart,
        n = b.onPressChange,
        o = b.onPressEnd,
        p = b.onPressMove,
        q = b.onPressStart;
      b = b.preventContextMenu;
      d("ReactHoverEvent.react").useHover(a, {
        disabled: c,
        onHoverChange: j,
        onHoverEnd: k,
        onHoverMove: l,
        onHoverStart: m,
      });
      d("ReactPressEvent.react").usePress(a, {
        disabled: c,
        onPressChange: n,
        onPressEnd: o,
        onPressMove: p,
        onPressStart: q,
      });
      d("ReactFocusEvent.react").useFocus(a, {
        disabled: c,
        onBlur: e,
        onFocus: g,
        onFocusChange: h,
        onFocusVisibleChange: i,
      });
      d("ReactContextMenuEvent.react").useContextMenu(a, {
        disabled: c,
        onContextMenu: f,
        preventDefault: b || !1,
      });
    }
    g.usePressability = a;
  },
  98
);
__d(
  "PressableGroupContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(void 0);
    g["default"] = b;
  },
  98
);
__d(
  "Pressable.react",
  [
    "Pressability",
    "PressableGroupContext",
    "UserAgent",
    "cr:7332",
    "gkx",
    "joinClasses",
    "justknobx",
    "passiveEventListenerUtil",
    "react",
    "recoverableViolation",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    e = d("react");
    var i = e.useCallback,
      j = e.useContext,
      k = e.useEffect,
      l = e.useRef,
      m = e.useState,
      n =
        c("UserAgent").isBrowser("Safari") ||
        c("UserAgent").isBrowser("Mobile Safari"),
      o = ["menuitem", "tab", "none"],
      p = {
        article: "article",
        banner: "header",
        complementary: "aside",
        contentinfo: "footer",
        figure: "figure",
        form: "form",
        heading: "h1",
        label: "label",
        link: "a",
        list: "ul",
        listitem: "li",
        main: "main",
        navigation: "nav",
        none: "div",
        region: "section",
      };
    function q(a, b) {
      var c = "div";
      if (o.includes(a) && b != null && b.url != null) c = "a";
      else if (a != null) {
        b = p[a];
        b != null && (c = b);
      }
      return c;
    }
    function r(a) {
      switch (a) {
        case "none":
          return "presentation";
        case "label":
          return void 0;
        default:
          return a;
      }
    }
    var s = function (a) {
      var b = a.target,
        c = b.tagName;
      c =
        b.isContentEditable ||
        (c === "A" && b.href != null) ||
        c === "BUTTON" ||
        c === "INPUT" ||
        c === "SELECT" ||
        c === "TEXTAREA";
      if (b.tabIndex === 0 && !c) {
        c = a.key;
        if (c === "Enter") return !0;
        a = b.getAttribute("role");
        if (
          (c === " " || c === "Spacebar") &&
          (a === "button" ||
            a === "checkbox" ||
            a === "combobox" ||
            a === "menuitem" ||
            a === "menuitemcheckbox" ||
            a === "menuitemradio" ||
            a === "option" ||
            a === "radio" ||
            a === "switch" ||
            a === "tab")
        )
          return !0;
      }
      return !1;
    };
    function t(a) {
      return typeof document !== "undefined" &&
        typeof document.contains === "function"
        ? document.contains(a)
        : !1;
    }
    function u(a) {
      a = a;
      while (a != null) {
        if (a.tagName === "A" && a.href != null) return !0;
        a = a.parentNode;
      }
      return !1;
    }
    function v(a, b) {
      var d = a.altKey,
        e = a.ctrlKey,
        f = a.currentTarget,
        g = a.metaKey,
        h = a.shiftKey;
      a = a.target;
      var i = a;
      c("justknobx")._("450") && (i = t(a) ? a : f);
      a = u(i);
      f = d || e || g || h;
      return b !== !1 && a && !f;
    }
    var w =
      (e = b("cr:7332")) != null
        ? e
        : function (a, b, c) {
            k(
              function () {
                var e = a.current;
                if (!e || !e.addEventListener || !t(e)) return;
                if (!b && !n) return;
                b && b.register(e, c);
                var f = function (a) {
                    b && (a.preventDefault(), b.onTouchStart());
                    if (!n) return;
                    var c =
                      (a = window) == null
                        ? void 0
                        : (a = a.document) == null
                        ? void 0
                        : a.body;
                    if (c == null) return;
                    c.style.WebkitUserSelect = "none";
                    var e = d("passiveEventListenerUtil").makeEventOptions({
                      passive: !0,
                    });
                    a = function a() {
                      (c.style.WebkitUserSelect = null),
                        document.removeEventListener("touchend", a, e);
                    };
                    document.addEventListener("touchend", a, e);
                  },
                  g = d("passiveEventListenerUtil").makeEventOptions({
                    passive: !b,
                  });
                e.addEventListener("touchstart", f, g);
                return function () {
                  b && b.unRegister(e),
                    e.removeEventListener("touchstart", f, g);
                };
              },
              [b, c, a]
            );
          };
    function a(a) {
      var b = l(null),
        e = m(!1),
        f = e[0];
      e = e[1];
      var g = m(!1),
        k = g[0];
      g = g[1];
      var n = m(!1),
        o = n[0];
      n = n[1];
      var p = m(!1),
        t = p[0];
      p = p[1];
      var u = j(c("PressableGroupContext")),
        z = a.accessibilityLabel,
        A = a.accessibilityRelationship,
        B = a.accessibilityRole,
        C = a.accessibilityState,
        D = a.accessibilityValue,
        E = a.allowClickEventPropagation,
        F = E === void 0 ? !1 : E;
      E = a.children;
      var G = a.className_DEPRECATED,
        H = a.disabled,
        I = a.forwardedRef,
        J = a.link,
        K = a.nativeID,
        L = a.onBlur,
        M = a.onContextMenu,
        N = a.onFocus,
        O = a.onFocusChange,
        P = a.onFocusVisibleChange,
        aa = a.onHoverChange,
        ba = a.onHoverEnd,
        ca = a.onHoverMove,
        da = a.onHoverStart,
        Q = a.onKeyDown,
        R = a.onPress,
        ea = a.onPressChange,
        fa = a.onPressEnd,
        ga = a.onPressMove,
        ha = a.onPressStart,
        ia = a.preventContextMenu,
        S = a.preventDefault,
        T = a.style,
        U = a.suppressFocusRing;
      U = U === void 0 ? !1 : U;
      var V = a.tabbable,
        W = a.testID;
      W = a.testOnly_state;
      var X = a.xstyle;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "accessibilityLabel",
        "accessibilityRelationship",
        "accessibilityRole",
        "accessibilityState",
        "accessibilityValue",
        "allowClickEventPropagation",
        "children",
        "className_DEPRECATED",
        "disabled",
        "forwardedRef",
        "link",
        "nativeID",
        "onBlur",
        "onContextMenu",
        "onFocus",
        "onFocusChange",
        "onFocusVisibleChange",
        "onHoverChange",
        "onHoverEnd",
        "onHoverMove",
        "onHoverStart",
        "onKeyDown",
        "onPress",
        "onPressChange",
        "onPressEnd",
        "onPressMove",
        "onPressStart",
        "preventContextMenu",
        "preventDefault",
        "style",
        "suppressFocusRing",
        "tabbable",
        "testID",
        "testOnly_state",
        "xstyle",
      ]);
      var Y = q(B, J);
      H = H === !0 || (C == null ? void 0 : C.disabled) === !0;
      var Z = C == null ? void 0 : C.hidden,
        $ = Y === "a" && H !== !0;
      k = {
        disabled: H === !0 || (W == null ? void 0 : W.disabled) === !0 || !1,
        focusVisible: k || (W == null ? void 0 : W.focusVisible) === !0,
        focused: f || (W == null ? void 0 : W.focused) === !0,
        hovered: o || (W == null ? void 0 : W.hovered) === !0,
        pressed: t || (W == null ? void 0 : W.pressed) === !0,
      };
      f = typeof E === "function" ? E(k) : E;
      o = typeof G === "function" ? G(k) : G;
      t = typeof T === "function" ? T(k) : T;
      W = typeof X === "function" ? X(k) : X;
      d("Pressability").usePressability(b, {
        disabled: H,
        onBlur: L,
        onContextMenu: M,
        onFocus: N,
        onFocusChange: x(e, O),
        onFocusVisibleChange: x(g, P),
        onHoverChange: x(n, aa),
        onHoverEnd: ba,
        onHoverMove: ca,
        onHoverStart: da,
        onPressChange: x(p, ea),
        onPressEnd: fa,
        onPressMove: ga,
        onPressStart: ha,
        preventContextMenu: ia,
        preventDefault: S == null ? !0 : S,
      });
      E = i(
        function (a) {
          R && R(a),
            (R || J != null) && F !== !0 && a.stopPropagation(),
            v(a, S) && a.nativeEvent.preventDefault();
        },
        [J, R, S]
      );
      G = i(
        function (a) {
          Q && Q(a);
          if (s(a)) {
            var b = a.key;
            (b === " " || b === "Spacebar") && a.preventDefault();
            R && (R(a), a.stopPropagation());
          }
        },
        [Q, R]
      );
      T = i(
        function (a) {
          (b.current = a),
            typeof I === "function" ? I(a) : I != null && (I.current = a);
        },
        [I]
      );
      w(b, u, E);
      X = -1;
      c("gkx")("5403")
        ? Z !== !0 && V !== !1 && (X = 0)
        : H !== !0 && Z !== !0 && V !== !1 && (X = 0);
      L = J == null ? void 0 : J.download;
      M = (L === !0 || typeof L === "string") && $;
      return h.jsx(
        Y,
        babelHelpers["extends"]({}, a, {
          "aria-activedescendant": A == null ? void 0 : A.activedescendant,
          "aria-busy": C == null ? void 0 : C.busy,
          "aria-checked": C == null ? void 0 : C.checked,
          "aria-controls": A == null ? void 0 : A.controls,
          "aria-current": A == null ? void 0 : A.current,
          "aria-describedby": A == null ? void 0 : A.describedby,
          "aria-details": A == null ? void 0 : A.details,
          "aria-disabled": H === !0 ? H : void 0,
          "aria-errormessage": A == null ? void 0 : A.errormessage,
          "aria-expanded": C == null ? void 0 : C.expanded,
          "aria-haspopup": A == null ? void 0 : A.haspopup,
          "aria-hidden": Z,
          "aria-invalid": C == null ? void 0 : C.invalid,
          "aria-label": z,
          "aria-labelledby": A == null ? void 0 : A.labelledby,
          "aria-modal": C == null ? void 0 : C.modal,
          "aria-orientation": C == null ? void 0 : C.orientation,
          "aria-owns": A == null ? void 0 : A.owns,
          "aria-pressed": C == null ? void 0 : C.pressed,
          "aria-readonly": C == null ? void 0 : C.readonly,
          "aria-required": C == null ? void 0 : C.required,
          "aria-selected": C == null ? void 0 : C.selected,
          "aria-valuemax": D == null ? void 0 : D.max,
          "aria-valuemin": D == null ? void 0 : D.min,
          "aria-valuenow": D == null ? void 0 : D.now,
          "aria-valuetext": D == null ? void 0 : D.text,
          attributionsrc: $ ? (J == null ? void 0 : J.attributionsrc) : void 0,
          children: f,
          className: c("joinClasses")(
            c("stylex")(
              y.root,
              k.disabled && y.disabled,
              (!k.focusVisible || U === !0) && y.focusNotVisible,
              W,
              u && y.rootInGroup
            ),
            o
          ),
          "data-testid": void 0,
          download: M ? L : void 0,
          href: $ ? (J == null ? void 0 : J.url) : void 0,
          id: K,
          onClick: H ? void 0 : E,
          onKeyDown: H ? void 0 : G,
          ref: T,
          rel: $ ? (J == null ? void 0 : J.rel) : void 0,
          role: r(B),
          style: t,
          tabIndex: X,
          target: $ ? (J == null ? void 0 : J.target) : void 0,
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function x(a, b) {
      return i(
        function (c) {
          a(c), b && b(c);
        },
        [b, a]
      );
    }
    var y = {
      disabled: { cursor: "x1h6gzvc", $$css: !0 },
      focusNotVisible: { outlineStyle: "x1t137rt", $$css: !0 },
      root: {
        WebkitTapHighlightColor: "x1i10hfl",
        alignItems: "x1qjc9v5",
        backgroundColor: "xjbqb8w",
        borderTopColor: "xjqpnuy",
        borderEndColor: "xa49m3k",
        borderBottomColor: "xqeqjp1",
        borderStartColor: "x2hbi6w",
        borderTopStyle: "x13fuv20",
        borderEndStyle: "xu3j5b3",
        borderBottomStyle: "x1q0q8m5",
        borderStartStyle: "x26u7qi",
        borderTopWidth: "x972fbf",
        borderEndWidth: "xcfux6l",
        borderBottomWidth: "x1qhh985",
        borderStartWidth: "xm0m39n",
        boxSizing: "x9f619",
        cursor: "x1ypdohk",
        display: "x78zum5",
        flexBasis: "xdl72j9",
        flexDirection: "xdt5ytf",
        flexShrink: "x2lah0s",
        listStyle: "xe8uvvx",
        marginTop: "xdj266r",
        marginEnd: "x11i5rnm",
        marginBottom: "xat24cr",
        marginStart: "x1mh8g0r",
        minHeight: "x2lwn1j",
        minWidth: "xeuugli",
        paddingTop: "xexx8yu",
        paddingEnd: "x4uap5",
        paddingBottom: "x18d9i69",
        paddingStart: "xkhd6sd",
        position: "x1n2onr6",
        textAlign: "x16tdsg8",
        textDecoration: "x1hl2dhg",
        touchAction: "xggy1nq",
        zIndex: "x1ja2u2z",
        $$css: !0,
      },
      rootInGroup: { touchAction: "x5ve5x3", $$css: !0 },
    };
    g["default"] = a;
  },
  98
);
__d(
  "CometErrorProjectContext",
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
  "useCometErrorProject",
  ["CometErrorProjectContext", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useContext;
    function a() {
      return h(c("CometErrorProjectContext"));
    }
    g["default"] = a;
  },
  98
);
__d(
  "useMergeRefs",
  ["mergeRefs", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useMemo;
    function a() {
      for (var a = arguments.length, b = new Array(a), d = 0; d < a; d++)
        b[d] = arguments[d];
      return h(function () {
        return c("mergeRefs").apply(void 0, b);
      }, [].concat(b));
    }
    g["default"] = a;
  },
  98
);
__d(
  "PressableText.react",
  [
    "BaseFocusRing.react",
    "Pressability",
    "PressableGroupContext",
    "RecoverableViolationWithComponentStack.react",
    "UserAgent",
    "cr:7332",
    "gkx",
    "joinClasses",
    "justknobx",
    "passiveEventListenerUtil",
    "react",
    "stylex",
    "useCometErrorProject",
    "useMergeRefs",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    e = d("react");
    var i = e.useCallback,
      j = e.useContext,
      k = e.useEffect,
      l = e.useRef,
      m = e.useState,
      n =
        c("UserAgent").isBrowser("Safari") ||
        c("UserAgent").isBrowser("Mobile Safari"),
      o = ["menuitem", "tab", "none"],
      p = {
        article: "article",
        banner: "header",
        complementary: "aside",
        contentinfo: "footer",
        figure: "figure",
        form: "form",
        heading: "h1",
        label: "label",
        link: "a",
        list: "ul",
        listitem: "li",
        main: "main",
        navigation: "nav",
        none: "div",
        region: "section",
      };
    function q(a, b) {
      var c = "div";
      if (
        ((b == null ? void 0 : b.url) != null &&
          (b == null ? void 0 : b.url) !== "#") ||
        (o.includes(a) && (b == null ? void 0 : b.url) != null)
      )
        c = "a";
      else if (a != null) {
        b = p[a];
        b != null && (c = b);
      }
      return c;
    }
    var r = function (a) {
      var b = a.target,
        c = b.tagName;
      c =
        b.isContentEditable ||
        (c === "A" && b.href != null) ||
        c === "BUTTON" ||
        c === "INPUT" ||
        c === "SELECT" ||
        c === "TEXTAREA";
      if (b.tabIndex === 0 && !c) {
        c = a.key;
        if (c === "Enter") return !0;
        a = b.getAttribute("role");
        if (
          (c === " " || c === "Spacebar") &&
          (a === "button" ||
            a === "combobox" ||
            a === "menuitem" ||
            a === "menuitemradio" ||
            a === "option")
        )
          return !0;
      }
      return !1;
    };
    function s(a) {
      return typeof document !== "undefined" &&
        typeof document.contains === "function"
        ? document.contains(a)
        : !1;
    }
    function t(a) {
      a = a;
      while (a != null) {
        if (a.tagName === "A" && a.href != null) return !0;
        a = a.parentNode;
      }
      return !1;
    }
    function u(a, b) {
      var d = a.altKey,
        e = a.ctrlKey,
        f = a.currentTarget,
        g = a.metaKey,
        h = a.shiftKey;
      a = a.target;
      var i = a;
      c("justknobx")._("450") && (i = s(a) ? a : f);
      a = t(i);
      f = d || e || g || h;
      return b !== !1 && a && !f;
    }
    var v =
      (e = b("cr:7332")) != null
        ? e
        : function (a, b, c) {
            k(
              function () {
                var e,
                  f = a.current,
                  g =
                    (e = window) == null
                      ? void 0
                      : (e = e.document) == null
                      ? void 0
                      : e.body;
                if (
                  g == null ||
                  f == null ||
                  !s(f) ||
                  f.addEventListener == null
                )
                  return;
                b && b.register(f, c);
                var h = function (a) {
                    b && (a.preventDefault(), b.onTouchStart());
                    if (!n) return;
                    if (g == null) return;
                    g.style.WebkitUserSelect = "none";
                    var c = d("passiveEventListenerUtil").makeEventOptions({
                      passive: !0,
                    });
                    a = function a() {
                      (g.style.WebkitUserSelect = null),
                        document.removeEventListener("touchend", a, c);
                    };
                    document.addEventListener("touchend", a, c);
                  },
                  i = d("passiveEventListenerUtil").makeEventOptions({
                    passive: !b,
                  });
                f.addEventListener("touchstart", h, i);
                return function () {
                  b && b.unRegister(f),
                    f.removeEventListener("touchstart", h, i);
                };
              },
              [b, c, a]
            );
          };
    function a(a) {
      var b = l(null),
        e = m(!1),
        f = e[0];
      e = e[1];
      var g = m(!1),
        k = g[0];
      g = g[1];
      var n = m(!1),
        o = n[0];
      n = n[1];
      var p = m(!1),
        s = p[0];
      p = p[1];
      var t = j(c("PressableGroupContext")),
        y = a.accessibilityLabel,
        z = a.accessibilityRelationship,
        A = a.accessibilityRole,
        B = a.accessibilityState,
        C = a.children,
        D = a.className_DEPRECATED,
        E = a.direction,
        F = a.disabled,
        G = a.focusable,
        H = a.forwardedRef,
        I = a.link,
        J = a.nativeID,
        K = a.onBlur,
        L = a.onContextMenu,
        M = a.onFocus,
        N = a.onFocusChange,
        O = a.onFocusVisibleChange,
        P = a.onHoverChange,
        aa = a.onHoverEnd,
        ba = a.onHoverMove,
        ca = a.onHoverStart,
        Q = a.onPress,
        da = a.onPressChange,
        ea = a.onPressEnd,
        fa = a.onPressMove,
        ga = a.onPressStart,
        ha = a.preventContextMenu,
        R = a.preventDefault,
        ia = a.selectable,
        S = a.style,
        T = a.suppressFocusRing,
        U = a.testID;
      U = a.testOnly_state;
      var V = a.xstyle;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "accessibilityLabel",
        "accessibilityRelationship",
        "accessibilityRole",
        "accessibilityState",
        "children",
        "className_DEPRECATED",
        "direction",
        "disabled",
        "focusable",
        "forwardedRef",
        "link",
        "nativeID",
        "onBlur",
        "onContextMenu",
        "onFocus",
        "onFocusChange",
        "onFocusVisibleChange",
        "onHoverChange",
        "onHoverEnd",
        "onHoverMove",
        "onHoverStart",
        "onPress",
        "onPressChange",
        "onPressEnd",
        "onPressMove",
        "onPressStart",
        "preventContextMenu",
        "preventDefault",
        "selectable",
        "style",
        "suppressFocusRing",
        "testID",
        "testOnly_state",
        "xstyle",
      ]);
      var W = q(A, I);
      F = F === !0 || (B == null ? void 0 : B.disabled) === !0;
      var X = B == null ? void 0 : B.hidden,
        Y = W === "a" && F !== !0;
      f = {
        disabled: F === !0 || (U == null ? void 0 : U.disabled) === !0 || !1,
        focused: f || (U == null ? void 0 : U.focused) === !0,
        focusVisible:
          (k && T !== !0) || (U == null ? void 0 : U.focusVisible) === !0,
        hovered: o || (U == null ? void 0 : U.hovered) === !0,
        pressed: s || (U == null ? void 0 : U.pressed) === !0,
      };
      k = typeof C === "function" ? C(f) : C;
      T = typeof D === "function" ? D(f) : D;
      o = typeof S === "function" ? S(f) : S;
      s = typeof V === "function" ? V(f) : V;
      d("Pressability").usePressability(b, {
        disabled: F,
        onBlur: K,
        onContextMenu: L,
        onFocus: M,
        onFocusChange: w(e, N),
        onFocusVisibleChange: w(g, O),
        onHoverChange: w(n, P),
        onHoverEnd: aa,
        onHoverMove: ba,
        onHoverStart: ca,
        onPressChange: w(p, da),
        onPressEnd: ea,
        onPressMove: fa,
        onPressStart: ga,
        preventContextMenu: ha,
        preventDefault: R == null ? !0 : R,
      });
      U = i(
        function (a) {
          Q && Q(a),
            (Q || I != null) && a.stopPropagation(),
            u(a, R) && a.nativeEvent.preventDefault();
        },
        [I, Q, R]
      );
      C = i(
        function (a) {
          if (r(a)) {
            var b = a.key;
            (b === " " || b === "Spacebar") && a.preventDefault();
            Q && (Q(a), a.stopPropagation());
          }
        },
        [Q]
      );
      var ja, Z;
      switch (E) {
        case "none":
          break;
        default:
          E != null && (Z = E);
          break;
      }
      D = c("useMergeRefs")(b, H);
      v(b, t, U);
      var $;
      S = W === "a" || A === "button";
      S
        ? X === !0 || G === !1 || (!c("gkx")("5403") && F === !0)
          ? ($ = -1)
          : ($ = 0)
        : c("gkx")("5403")
        ? X !== !0 && G !== !1 && A !== "none" && ($ = 0)
        : F !== !0 && X !== !0 && G !== !1 && A !== "none" && ($ = 0);
      V = I == null ? void 0 : I.download;
      K = (V === !0 || typeof V === "string") && Y;
      L = A === "none" ? "presentation" : A;
      M = h.jsx(
        W,
        babelHelpers["extends"]({}, a, {
          "aria-activedescendant": z == null ? void 0 : z.activedescendant,
          "aria-busy": B == null ? void 0 : B.busy,
          "aria-checked": B == null ? void 0 : B.checked,
          "aria-controls": z == null ? void 0 : z.controls,
          "aria-current": z == null ? void 0 : z.current,
          "aria-describedby": z == null ? void 0 : z.describedby,
          "aria-details": z == null ? void 0 : z.details,
          "aria-disabled": F === !0 && L !== "presentation" ? F : void 0,
          "aria-expanded": B == null ? void 0 : B.expanded,
          "aria-haspopup": z == null ? void 0 : z.haspopup,
          "aria-hidden": X,
          "aria-invalid": B == null ? void 0 : B.invalid,
          "aria-label": y,
          "aria-labelledby": z == null ? void 0 : z.labelledby,
          "aria-owns": z == null ? void 0 : z.owns,
          "aria-pressed": B == null ? void 0 : B.pressed,
          "aria-readonly": B == null ? void 0 : B.readonly,
          "aria-required": B == null ? void 0 : B.required,
          "aria-selected": B == null ? void 0 : B.selected,
          attributionsrc: Y ? (I == null ? void 0 : I.attributionsrc) : void 0,
          children: k,
          className: c("joinClasses")(
            c("stylex")(
              x.root,
              ia === !1 && x.notSelectable,
              f.disabled && x.disabled,
              !f.focusVisible && x.focusNotVisible,
              f.focusVisible &&
                S &&
                c("BaseFocusRing.react").linkFocusRingXStyle,
              s,
              t && x.rootInGroup
            ),
            T
          ),
          "data-testid": void 0,
          dir: Z,
          download: K ? V : void 0,
          href: Y ? (I == null ? void 0 : I.url) : void 0,
          id: J,
          onClick: F ? void 0 : U,
          onKeyDown: F ? void 0 : C,
          ref: D,
          rel: Y ? (I == null ? void 0 : I.rel) : void 0,
          role: L,
          style: o,
          tabIndex: $,
          target: Y ? (I == null ? void 0 : I.target) : void 0,
        })
      );
      return M;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function w(a, b) {
      return i(
        function (c) {
          a(c), b && b(c);
        },
        [b, a]
      );
    }
    var x = {
      disabled: { cursor: "x1h6gzvc", $$css: !0 },
      focusNotVisible: { outline: "x1a2a7pz", $$css: !0 },
      notSelectable: { userSelect: "x87ps6o", $$css: !0 },
      root: {
        WebkitTapHighlightColor: "x1i10hfl",
        backgroundColor: "xjbqb8w",
        borderTop: "x6umtig",
        borderEnd: "x1b1mbwd",
        borderBottom: "xaqea5y",
        borderStart: "xav7gou",
        boxSizing: "x9f619",
        cursor: "x1ypdohk",
        display: "xt0psk2",
        listStyle: "xe8uvvx",
        marginTop: "xdj266r",
        marginEnd: "x11i5rnm",
        marginBottom: "xat24cr",
        marginStart: "x1mh8g0r",
        paddingTop: "xexx8yu",
        paddingEnd: "x4uap5",
        paddingBottom: "x18d9i69",
        paddingStart: "xkhd6sd",
        textAlign: "x16tdsg8",
        textDecoration: "x1hl2dhg",
        touchAction: "xggy1nq",
        $$css: !0,
      },
      rootInGroup: { touchAction: "x5ve5x3", $$css: !0 },
    };
    g["default"] = a;
  },
  98
);
__d(
  "CometFeedClickEventsLoggerContext",
  ["emptyFunction", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(c("emptyFunction"));
    g["default"] = b;
  },
  98
);
__d(
  "CometFeedLoggingExtraFieldsContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({});
    g["default"] = b;
  },
  98
);
__d(
  "CometTrackingCodeContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({
      click_tracking_linkshim_cb: [],
      encrypted_click_tracking: [],
      encrypted_tracking: [],
    });
    g["default"] = b;
  },
  98
);
__d(
  "CometTrackingNodesContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext([]);
    g["default"] = b;
  },
  98
);
__d(
  "DataUrlUtils",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = /^data:.*/;
    function a(a) {
      return a == null ? !1 : g.test(a);
    }
    f.isDataUrl = a;
  },
  66
);
__d(
  "MailLinkUtils",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = new RegExp("mailto:.*@.*");
    function a(a) {
      return a == null ? !1 : g.test(a);
    }
    f.isMailToLink = a;
  },
  66
);
__d(
  "getAbsoluteUrl",
  ["ConstUriUtils", "FBLogger"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      if (a == null || a.trim() === "#") return a;
      a =
        (a = d("ConstUriUtils").getUri(a)) == null
          ? void 0
          : (a = a.getQualifiedUri()) == null
          ? void 0
          : a.toString();
      a == null &&
        c("FBLogger")("comet_infra")
          .blameToPreviousFrame()
          .mustfix("must pass a valid href to getAbsoluteUrl");
      return a;
    }
    g["default"] = a;
  },
  98
);
__d(
  "useStoryClickEventLogger",
  [
    "CometFeedClickEventsLoggerContext",
    "CometFeedLoggingExtraFieldsContext",
    "CometTrackingCodeContext",
    "CometTrackingNodesContext",
    "DataUrlUtils",
    "MailLinkUtils",
    "getAbsoluteUrl",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useContext;
    function a() {
      var a = i(c("CometFeedClickEventsLoggerContext")),
        b = i(c("CometTrackingNodesContext")),
        e = i(c("CometTrackingCodeContext")),
        f = e.encrypted_tracking[0],
        g = i(c("CometFeedLoggingExtraFieldsContext"));
      return h(
        function (e, h, i, j) {
          var k = i;
          !d("MailLinkUtils").isMailToLink(i) &&
            !d("DataUrlUtils").isDataUrl(i) &&
            (k = c("getAbsoluteUrl")(i));
          a(e, b, f, h, k, g, j);
        },
        [a, b, f, g]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useFeedPressEventHandler",
  [
    "FBLogger",
    "cr:11054",
    "emptyFunction",
    "react",
    "useStoryClickEventLogger",
    "uuidv4",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback,
      i =
        (e = b("cr:11054")) != null
          ? e
          : function () {
              return c("emptyFunction");
            };
    function a(a, b) {
      var d = c("useStoryClickEventLogger")(),
        e = i();
      return h(
        function (f) {
          try {
            e(f);
          } catch (a) {
            c("FBLogger")("voyage")
              .catching(a)
              .mustfix("Voyage press logger threw");
          }
          a && a(f);
          var g = f.buttons,
            h = f.timeStamp;
          f = f.type;
          if (
            f === "click" ||
            f === "press" ||
            f === "contextmenu" ||
            (f === "pressstart" && g === 4)
          ) {
            f = f === "contextmenu" ? 2 : g === 4 ? 1 : 0;
            g = c("uuidv4")();
            d(h, f, b, g);
          }
        },
        [a, d, b, e]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "BaseButton.react",
  [
    "BaseButtonPopoverContext",
    "Pressable.react",
    "PressableText.react",
    "react",
    "useFeedPressEventHandler",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useContext;
    function a(a, b) {
      var d = a.allowClickEventPropagation,
        e = a["aria-activedescendant"],
        f = a["aria-checked"],
        g = a["aria-controls"],
        j = a["aria-current"],
        k = a["aria-describedby"],
        l = a["aria-expanded"],
        m = a["aria-haspopup"],
        n = a["aria-hidden"],
        o = a["aria-invalid"],
        p = a["aria-label"],
        q = a["aria-labelledby"],
        r = a["aria-pressed"],
        s = a["aria-selected"],
        t = a.children,
        u = a.className_DEPRECATED,
        v = a.disabled;
      v = v === void 0 ? !1 : v;
      var w = a.display;
      w = w === void 0 ? "inline" : w;
      var x = a.focusable,
        y = a.id,
        z = a.label,
        A = a.onBlur,
        B = a.onClick,
        C = a.onContextMenu,
        D = a.onFocus,
        E = a.onFocusChange,
        F = a.onFocusVisibleChange,
        G = a.onHoverChange,
        H = a.onHoverEnd,
        I = a.onHoverStart,
        J = a.onPressChange,
        K = a.onPressEnd,
        L = a.onPressStart,
        M = a.preventContextMenu,
        N = a.role,
        O = a.style,
        P = a.suppressFocusRing,
        Q = a.suppressHydrationWarning,
        R = a.testid,
        S = a.testOnly_pressed;
      S = S === void 0 ? !1 : S;
      a = a.xstyle;
      N = N === "presentation" ? "none" : N;
      p = N !== "none" ? ((p = p) != null ? p : z) : void 0;
      z = b;
      b = B;
      var T = L,
        U = C;
      b = c("useFeedPressEventHandler")(B);
      T = c("useFeedPressEventHandler")(L);
      U = c("useFeedPressEventHandler")(C);
      B = i(c("BaseButtonPopoverContext"));
      L = {
        accessibilityLabel: p,
        accessibilityRelationship: {
          activedescendant: e,
          controls: g,
          current: j,
          describedby: k,
          haspopup: B != null && m == null ? B.haspopup : m,
          labelledby: q,
        },
        accessibilityState: {
          checked: f,
          disabled: v,
          expanded: B != null && l == null ? B.expanded : l,
          hidden: n,
          invalid: o,
          pressed: r,
          selected: s,
        },
        className_DEPRECATED: u,
        disabled: v,
        forwardedRef: z,
        nativeID: y,
        onBlur: A,
        onContextMenu: U,
        onFocus: D,
        onFocusChange: E,
        onFocusVisibleChange: F,
        onHoverChange: G,
        onHoverEnd: H,
        onHoverStart: I,
        onPress: b,
        onPressChange: J,
        onPressEnd: K,
        onPressStart: T,
        preventContextMenu: M,
        style: O,
        suppressHydrationWarning: Q,
        testID: R,
        testOnly_state: {
          disabled: !1,
          focused: !1,
          focusVisible: !1,
          hovered: !1,
          pressed: S,
        },
        xstyle: a,
      };
      if (w === "block") {
        C =
          N === "menuitem" ||
          N === "none" ||
          N === "gridcell" ||
          N === "switch" ||
          N === "combobox" ||
          N === "checkbox" ||
          N === "tab" ||
          N === "radio" ||
          N === "option"
            ? N
            : "button";
        return h.jsx(
          c("Pressable.react"),
          babelHelpers["extends"]({}, L, {
            accessibilityRole: C,
            allowClickEventPropagation: d,
            suppressFocusRing: P,
            tabbable: x,
            children: t,
          })
        );
      } else {
        p =
          N === "combobox" ||
          N === "menuitem" ||
          N === "menuitemcheckbox" ||
          N === "menuitemradio" ||
          N === "option" ||
          N === "none" ||
          N === "tab"
            ? N
            : "button";
        return h.jsx(
          c("PressableText.react"),
          babelHelpers["extends"]({ focusable: x }, L, {
            accessibilityRole: p,
            direction: "none",
            suppressFocusRing: P,
            children: t,
          })
        );
      }
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "BaseLinkDefaultTargetContext",
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
  "BaseLinkEndpointModifierContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext([]);
    g["default"] = b;
  },
  98
);
__d(
  "BaseLinkNestedPressableContext",
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
  "BaseNestedPressableHack_DO_NOT_USE.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useEffect,
      j = b.useState;
    function a(a) {
      a = a.children;
      var b = j(!1),
        c = b[0],
        d = b[1];
      i(function () {
        return d(!0);
      }, []);
      b = c ? null : { height: 0, width: 0 };
      return h.jsx(
        "object",
        babelHelpers["extends"]({}, b, {
          type: "nested/pressable",
          children: a,
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometClickIDParameterUtils",
  [
    "ConstUriUtils",
    "isCdnURI",
    "isClickIDBlacklistSVDomainURI",
    "isFacebookSVDomainURI",
    "isFacebookURI",
    "isFbDotComURI",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "fbclid";
    b = "doubleclick.net";
    var i =
      ((e = {}),
      (e[b] = [
        {
          extractor: function (a) {
            a = a.getQueryString();
            return a != null && a.startsWith("http")
              ? d("ConstUriUtils").getUri(a)
              : null;
          },
          injector: function (a, b, c) {
            b = b.addQueryParam(h, c);
            if (b != null) {
              c = new Map();
              c.set(b.toString(), null);
              b = a.replaceQueryParams(c);
              if (b != null) return b;
            }
            return a;
          },
        },
      ]),
      e);
    function j(a) {
      return a.getOrigin() !== "://";
    }
    function k(a) {
      var b = Object.keys(i).filter(function (b) {
        return a.getDomain().endsWith(b);
      });
      b = b[0] || null;
      b = b != null ? i[b] : null;
      if (b == null) return null;
      b = b
        .map(function (b) {
          var c = b.extractor(a);
          return c == null ? null : { injector: b.injector, uri: c };
        })
        .filter(function (a) {
          return a != null;
        });
      return b[0] || null;
    }
    function l(a) {
      var b = c("isClickIDBlacklistSVDomainURI")(a);
      if (b) return !0;
      b = k(a);
      return b != null ? l(b.uri) : !1;
    }
    function m(a) {
      return (
        !c("isFacebookURI")(a) &&
        !c("isFacebookSVDomainURI")(a) &&
        !c("isCdnURI")(a) &&
        !c("isFbDotComURI")(a) &&
        j(a) &&
        ["http", "https"].includes(a.getProtocol()) &&
        !l(a)
      );
    }
    function n(a, b) {
      var c = k(a);
      if (c != null) return c.injector(a, c.uri, b);
      c = a.addQueryParam(h, b);
      return c != null ? c : a;
    }
    function a(a, b) {
      return m(a) ? n(a, b) : a;
    }
    g.appendClickIDQueryParam = a;
  },
  98
);
__d(
  "CometLynxGeneration",
  ["ConstUriUtils", "LinkshimHandlerConfig"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "c",
      i = "__tn__",
      j = d("ConstUriUtils").getUri(c("LinkshimHandlerConfig").linkshim_path);
    j != null && (j = j.setDomain(c("LinkshimHandlerConfig").linkshim_host));
    function k(a) {
      return c("LinkshimHandlerConfig").always_use_https
        ? "https"
        : a.getProtocol() === "http"
        ? "http"
        : "https";
    }
    function l() {
      return j;
    }
    function a(a, b, d, e) {
      var f = k(a),
        g = l();
      g != null &&
        (g = g.addQueryParams(
          new Map([
            [
              c("LinkshimHandlerConfig").linkshim_url_param,
              e === !0 ? a.toStringPreserveQuery() : a.toString(),
            ],
            [c("LinkshimHandlerConfig").linkshim_enc_param, b],
          ])
        ));
      g != null && (g = g.setProtocol(f));
      e = d == null ? void 0 : d.trackingNodes;
      b = d == null ? void 0 : d.callbacks;
      e && e.length && g != null && (g = g.addQueryParam(i, e.join("")));
      b && b.length && g != null && (g = g.addQueryParam(h, b));
      return g != null ? g : a;
    }
    g.getLynxURIProtocol = k;
    g.getShimURI = l;
    g.getShimmedHref = a;
  },
  98
);
__d(
  "isRelativeURL",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = /^(#|\/\w)/;
    function a(a) {
      return g.test(a);
    }
    f["default"] = a;
  },
  66
);
__d(
  "CometLinkShimUtils",
  [
    "CometClickIDParameterUtils",
    "CometLynxGeneration",
    "ConstUriUtils",
    "LinkshimHandlerConfig",
    "Random",
    "gkx",
    "isLinkshimURI",
    "isRelativeURL",
    "isTrustedDestination",
    "killswitch",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      if (c("isRelativeURL")(a.toString())) return !1;
      var b = a.getProtocol();
      return b !== "http" && b !== "https" ? !1 : !c("isTrustedDestination")(a);
    }
    var i = new RegExp("^(l|lm|h)\\..*$", "i");
    function j(a) {
      if (c("killswitch")("LINK_UPGRADE_UNSHIMMED_JS")) return null;
      if (a.getProtocol() !== "http") return null;
      if (!c("isTrustedDestination")(a)) return null;
      return i.test(a.getDomain()) ? null : a.setProtocol("https");
    }
    function k(a) {
      a = a.getQueryParams();
      a = a.get("enc");
      return String(a) !== "1" ? !1 : c("gkx")("5945");
    }
    var l = { href: "#", shimmed: !1 };
    function a(a, b, e, f, g, i) {
      if (a == null || a === "#") return l;
      var m = d("ConstUriUtils").getUri(a);
      if (m == null) return l;
      a = k(m);
      var n = c("LinkshimHandlerConfig").link_react_default_hash;
      if (c("isLinkshimURI")(m) && !a) {
        var o = m.getQueryParams(),
          p = o.get(c("LinkshimHandlerConfig").linkshim_url_param);
        o = o.get(c("LinkshimHandlerConfig").linkshim_enc_param);
        p = d("ConstUriUtils").getUri(String(p));
        p != null && ((m = p), (n = String(o)));
      }
      if (a) {
        p = m.removeQueryParam("enc");
        p != null && (m = p);
      }
      o = c("LinkshimHandlerConfig").click_ids;
      p = !1;
      if (
        !c("killswitch")("LINKSHIM_ADD_CLICK_ID_PARAM") &&
        o != null &&
        o.length > 0
      ) {
        var q = null;
        if (c("gkx")("1616314") && f != null) q = f;
        else {
          f = Math.floor(c("Random").random() * o.length);
          q = o[f];
        }
        m = d("CometClickIDParameterUtils").appendClickIDQueryParam(m, q);
        p = !0;
      }
      o = j(m);
      o != null && (m = o);
      if (h(m) && g !== !0 && !a) {
        f = d("CometLynxGeneration").getShimmedHref(
          m,
          n,
          { callbacks: b, trackingNodes: e },
          i
        );
        q = c("LinkshimHandlerConfig").blocklisted_domains.some(function (a) {
          var b;
          return (b = m) == null ? void 0 : b.toString().includes(a);
        });
        return q
          ? {
              clickIDAppended: p,
              href: f.toString(),
              shimmed: !0,
              unshimmedHref: f.toString(),
            }
          : {
              clickIDAppended: p,
              ghlEncrypted: a,
              href: f.toString(),
              shimmed: !0,
              unshimmedHref:
                i === !0 ? m.toStringPreserveQuery() : m.toString(),
            };
      } else
        return {
          clickIDAppended: p,
          ghlEncrypted: a,
          href: i === !0 ? m.toStringPreserveQuery() : m.toString(),
          shimmed: !1,
        };
    }
    g.getLinkShimInfo = a;
    g.use_rel_no_referrer = c("LinkshimHandlerConfig").use_rel_no_referrer;
  },
  98
);
__d(
  "CometLinkTrackingUtils",
  ["cr:1522191"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g.decorateHrefWithTrackingInfo =
      b("cr:1522191").decorateHrefWithTrackingInfo;
  },
  98
);
__d(
  "CometProductAttributionContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = null;
    c = a.createContext(b);
    g["default"] = c;
  },
  98
);
__d(
  "appendPersistQueryParamsToUrl",
  ["CometPersistQueryParams", "ConstUriUtils", "isRelativeURL"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a, b) {
      var c;
      return (b =
        (c = d("ConstUriUtils").getUri(a)) == null
          ? void 0
          : (c = c.addQueryParams(new Map(Object.entries(b)))) == null
          ? void 0
          : c.toString()) != null
        ? b
        : a;
    }
    function a(a) {
      var b = d("ConstUriUtils").getUri(a);
      if (b == null) return a;
      if (c("isRelativeURL")(a) || b.getDomain() === "")
        return h(a, c("CometPersistQueryParams").relative);
      b = b.getDomain().split(".").slice(-2).join(".");
      return c("CometPersistQueryParams").domain[b] != null
        ? h(a, c("CometPersistQueryParams").domain[b])
        : a;
    }
    g["default"] = a;
  },
  98
);
__d(
  "isCometRouterUrl",
  [
    "ConstUriUtils",
    "Env",
    "isFacebookURI",
    "isLinkshimURI",
    "memoizeStringOnly",
    "uriIsRelativePath",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = function (a) {
        return (
          a === "/l.php" ||
          a.startsWith("/si/ajax/l/") ||
          a.startsWith("/l/") ||
          a.startsWith("l/")
        );
      },
      i = function (a) {
        var b = a.getDomain();
        return b == null ? !1 : c("isFacebookURI")(a) && b.startsWith("www");
      },
      j = /^(\/\w)/;
    a = c("memoizeStringOnly")(function (a) {
      if (a == null || a.startsWith("#") || !d("ConstUriUtils").isValidUri(a))
        return !1;
      var b = null,
        e = !1;
      b = d("ConstUriUtils").getUri(a);
      if (b != null) {
        if (!h(b.getPath()) && j.test(a)) return !0;
        a = d("ConstUriUtils").getUri(window.location.href);
        e = a ? b.isSameOrigin(a) || c("uriIsRelativePath")(b) : !1;
      }
      return b != null
        ? !c("isLinkshimURI")(b) &&
            (e ||
              (Boolean(c("Env").isCometSubdomain) && i(b)) ||
              (Boolean(c("Env").isStoryGallery) && i(b)) ||
              (Boolean(c("Env").isAdsPreviewTool) && i(b)))
        : !1;
    });
    g["default"] = a;
  },
  98
);
__d(
  "CometRouterDispatcherContext",
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
  "useCometRouterDispatcher",
  ["CometRouterDispatcherContext", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useContext;
    function a() {
      return h(c("CometRouterDispatcherContext"));
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometMouseActivity",
  ["clearTimeout", "removeFromArray", "setTimeout"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 50,
      i = [],
      j = [],
      k = null;
    function l() {
      i.length > 0 &&
        i.forEach(function (a) {
          return a();
        }),
        j.length > 0 &&
          (j.forEach(function (a) {
            return a();
          }),
          (j = [])),
        (k = null);
    }
    function m() {
      c("clearTimeout")(k),
        (k = c("setTimeout")(function () {
          l();
        }, h));
    }
    var n = !1;
    function o() {
      n || (window.addEventListener("mousemove", m), (n = !0));
      return function () {
        window.removeEventListener("mousemove", m);
      };
    }
    function a(a) {
      n || o();
      i.push(a);
      return function () {
        c("removeFromArray")(i, a);
      };
    }
    function b(a) {
      n || o();
      j.push(a);
      return function () {
        c("removeFromArray")(j, a);
      };
    }
    d = { addOnMouseStopCallback: a, addOnMouseStopCallbackOnce: b, init: o };
    e = d;
    g["default"] = e;
  },
  98
);
__d(
  "useCometPreloaderImpl",
  [
    "Bootloader",
    "CometMouseActivity",
    "JSScheduler",
    "clearTimeout",
    "ifRequired",
    "react",
    "setTimeout",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useEffect,
      j = b.useRef;
    function k(a) {
      return a.pointerType === "mouse";
    }
    function l(a) {
      a && (typeof a === "function" ? a() : a.preload());
    }
    var m = 50;
    function a(a, b, d, e) {
      var f = j(null),
        g = j(null),
        n = j(null),
        o = function (a) {
          c("ifRequired")(
            "setTimeoutCometInternals",
            function (b) {
              f.current = b.setTimeoutAtPriority_DO_NOT_USE(
                c("JSScheduler").priorities.unstable_UserBlocking,
                a,
                m
              );
            },
            function () {
              f.current = c("setTimeout")(a, m);
            }
          );
        },
        p = h(
          function (e, f, g) {
            if (
              a === "tooltip" ||
              ((a === "button" || a === "button_aggressive") && b != null)
            ) {
              e = function () {
                a === "tooltip"
                  ? (l(d), l(b), c("Bootloader").forceFlush())
                  : (a === "button" || a === "button_aggressive") &&
                    (l(b), c("Bootloader").forceFlush()),
                  f && f();
              };
              o(e);
            }
            if (a === "button_aggressive") {
              e = function () {
                l(d), g && g();
              };
              n.current != null && (n.current(), (n.current = null));
              n.current = c("CometMouseActivity").addOnMouseStopCallbackOnce(e);
            }
          },
          [d, b, a]
        ),
        q = h(
          function () {
            c("clearTimeout")(f.current),
              (f.current = null),
              e && e(),
              g.current != null && g.current(),
              n.current != null && n.current();
          },
          [e]
        ),
        r = h(
          function (b) {
            if (!k(b)) return;
            (a === "button" || a === "button_aggressive") &&
              (l(d), c("Bootloader").forceFlush());
          },
          [d, a]
        ),
        s = h(
          function (a) {
            c("JSScheduler").scheduleSpeculativeCallback(function () {
              a === !0 && (l(d), l(b), c("Bootloader").forceFlush());
            });
          },
          [d, b]
        );
      i(function () {
        return function () {
          g.current != null && g.current(),
            n.current != null && n.current(),
            c("clearTimeout")(f.current);
        };
      }, []);
      return [p, q, r, s];
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometPreloader",
  ["useCometPreloaderImpl"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("useCometPreloaderImpl");
  },
  98
);
__d(
  "useCometRouterLinkQueryPrefetcher",
  ["ODS", "react", "useCometRouterDispatcher"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.startTransition,
      i = b.useCallback,
      j = b.useRef;
    function a(a) {
      var b = a.dispatcherExtras,
        e = a.href,
        f = a.preloadTriggerType,
        g = a.routeHandledByCometRouter,
        k = c("useCometRouterDispatcher")(),
        l = j(null);
      a = i(function () {
        var a = l.current;
        a &&
          (h(function () {
            a.cancel();
          }),
          (l.current = null));
      }, []);
      var m = i(
          function () {
            var a = l.current;
            l.current = null;
            a != null &&
              d("ODS").bumpEntityKey(
                2994,
                "comet_preloading",
                "prefetch_route_queries." + f + ".used"
              );
            return a;
          },
          [f]
        ),
        n = i(
          function () {
            if (k != null && e != null && g && l.current == null) {
              var a;
              l.current = k.prefetchRouteQueries(e, (a = b) != null ? a : {});
              d("ODS").bumpEntityKey(
                2994,
                "comet_preloading",
                "prefetch_route_queries." + f + ".preloaded"
              );
            }
          },
          [k, e, g, b, f]
        );
      return {
        cancelPrefetchRouteQueries: a,
        getPrefetchedQueryContainerAndMarkAsUsed: m,
        prefetchRouteQueries: n,
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "useCometRouterLinkEventHandlers",
  [
    "JSScheduler",
    "gkx",
    "react",
    "useCometPreloader",
    "useCometRouterDispatcher",
    "useCometRouterLinkQueryPrefetcher",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useEffect,
      j = b.useMemo,
      k = b.useRef,
      l = /async(?:-post)?|dialog(?:-post)?|theater|toggle/;
    function a(a) {
      var b = a.dispatcherExtras,
        e = a.href,
        f = a.isRouterLink,
        g = a.onHoverEnd,
        m = a.onHoverStart,
        n = a.onPress,
        o = a.onPressStart,
        p = a.prefetchQueriesOnHover,
        q = a.preloadCodeOnMount,
        r = a.preventLocalNavigation,
        s = a.rel,
        t = a.target;
      a = p === !0 ? "button_aggressive" : "button";
      var u = c("useCometRouterDispatcher")(),
        v = k(null),
        w = j(
          function () {
            var a = t == null || t === "_self",
              b = !c("gkx")("708253") && s != null && s.match(l) != null;
            return f && r !== !0 && a && !b;
          },
          [f, r, t, s]
        );
      p = (p = b) != null ? p : {};
      p.onNavigate;
      p = babelHelpers.objectWithoutPropertiesLoose(p, ["onNavigate"]);
      p = c("useCometRouterLinkQueryPrefetcher")({
        dispatcherExtras: p,
        href: e,
        preloadTriggerType: a,
        routeHandledByCometRouter: w,
      });
      var x = p.cancelPrefetchRouteQueries,
        y = p.getPrefetchedQueryContainerAndMarkAsUsed;
      p = p.prefetchRouteQueries;
      var z = function (a) {
          n && n(a);
          var c = !(a.metaKey || a.altKey || a.ctrlKey || a.shiftKey);
          if (c && w && u && e != null) {
            c = y();
            u.go(
              e,
              babelHelpers["extends"](
                { eventTimestamp: a.timeStamp, prefetcher: c },
                b
              )
            );
          }
        },
        A = b == null ? void 0 : b.target,
        B = h(
          function () {
            e != null &&
              v.current !== e &&
              w &&
              d("JSScheduler").scheduleSpeculativeCallback(function () {
                u != null &&
                  v.current !== e &&
                  ((v.current = e), u.preloadRouteCode(e, A));
              });
          },
          [u, e, A, w]
        );
      i(
        function () {
          e != null &&
            w &&
            (q === !0
              ? B()
              : d("JSScheduler").scheduleSpeculativeCallback(function () {
                  u == null ? void 0 : u.prefetchRouteDefinition(e);
                }));
        },
        [B, q, u, w, e]
      );
      a = c("useCometPreloader")(a, B, p, x);
      var C = a[0],
        D = a[1],
        E = a[2];
      p = function (a) {
        o && o(a), E(a);
      };
      x = function (a) {
        m && m(a);
        if (!f) return;
        C(a);
      };
      a = function (a) {
        g && g(a), D();
      };
      return { onHoverEnd: a, onHoverStart: x, onPress: z, onPressStart: p };
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometGHLRenderingContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = !1;
    c = a.createContext(b);
    e = c;
    g["default"] = e;
  },
  98
);
__d(
  "useCometRouterLinkShimEventHandlers",
  [
    "CometGHLRenderingContext",
    "ReactDOMComet",
    "gkx",
    "react",
    "requireDeferred",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useContext,
      i = b.useState,
      j = c("requireDeferred")("LynxAsyncCallbackFalcoEvent").__setRef(
        "useCometRouterLinkShimEventHandlers"
      );
    function a(a) {
      var b = a.href,
        e = a.lynxMode,
        f = a.onContextMenu,
        g = a.onHoverStart,
        k = a.onPress,
        l = a.shimmed,
        m = a.unshimmedHref;
      a = h(c("CometGHLRenderingContext"));
      a = i(a);
      var n = a[0],
        o = a[1];
      function p(a) {
        f && f(a),
          n &&
            d("ReactDOMComet").flushSync(function () {
              o(!1);
            });
      }
      function q(a) {
        k && k(a),
          l === !0 &&
          e === "ASYNCLAZY" &&
          b != null &&
          m != null &&
          c("gkx")("1642984")
            ? (n ||
                d("ReactDOMComet").flushSync(function () {
                  o(!0);
                }),
              j.onReadyImmediately(function (a) {
                a.log(function () {
                  return { lynx_uri: b, next_uri: m };
                });
              }))
            : n &&
              d("ReactDOMComet").flushSync(function () {
                o(!1);
              });
      }
      function r(a) {
        g && g(a), l === !0 && o(!0);
      }
      return { onContextMenu: p, onHoverStart: r, onPress: q, useOrigHref: n };
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometRouterRouteContext",
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
  "useCurrentRoute",
  ["CometRouterRouteContext", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useContext;
    function a() {
      return h(c("CometRouterRouteContext"));
    }
    g["default"] = a;
  },
  98
);
__d(
  "BaseLinkUriBaseContext",
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
  "useTransformRelativeUri",
  ["BaseLinkUriBaseContext", "ConstUriUtils", "isRelativeURL", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useContext,
      i = b.useMemo;
    function j(a, b) {
      if (c("isRelativeURL")(b)) {
        var e = d("ConstUriUtils").getUri(b);
        if (e != null) {
          e =
            (a = a.addQueryParams(e.getQueryParams())) == null
              ? void 0
              : (a = a.setPath(e.getPath())) == null
              ? void 0
              : (a = a.setFragment(e.getFragment())) == null
              ? void 0
              : a.toString();
          if (e != null) return e;
        }
      }
      return b;
    }
    function a(a) {
      var b = h(c("BaseLinkUriBaseContext"));
      return i(
        function () {
          return b == null || a == null ? a : j(b, a);
        },
        [b, a]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "BaseLink.react",
  [
    "BaseLinkDefaultTargetContext",
    "BaseLinkEndpointModifierContext",
    "BaseLinkNestedPressableContext",
    "BaseNestedPressableHack_DO_NOT_USE.react",
    "CometLinkShimUtils",
    "CometLinkTrackingUtils",
    "CometProductAttributionContext",
    "CometTrackingCodeContext",
    "CometTrackingNodesContext",
    "ConstUriUtils",
    "Pressable.react",
    "PressableText.react",
    "RecoverableViolationWithComponentStack.react",
    "appendPersistQueryParamsToUrl",
    "isCometRouterUrl",
    "isTrustedDestination",
    "justknobx",
    "mergeRefs",
    "react",
    "recoverableViolation",
    "useAttributionSourceForClick",
    "useCometErrorProject",
    "useCometRouterDispatcher",
    "useCometRouterLinkEventHandlers",
    "useCometRouterLinkShimEventHandlers",
    "useCurrentRoute",
    "useFeedPressEventHandler",
    "useTransformRelativeUri",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
      j = b.useContext,
      k = b.useMemo,
      aa = b.useRef;
    function ba(a, b) {
      return b == null
        ? null
        : a.reduce(function (a, b) {
            b = b(a);
            if (!c("isCometRouterUrl")(b)) {
              c("recoverableViolation")(
                "Endpoint modifier returned a non-router URL, ignoring.",
                "comet_infra"
              );
              return a;
            }
            return b;
          }, b);
    }
    function l(a) {
      a = a.children;
      return h.jsx(c("BaseLinkNestedPressableContext").Provider, {
        value: !0,
        children: a,
      });
    }
    l.displayName = l.name + " [from " + f.id + "]";
    function a(a, b) {
      var e = a["aria-activedescendant"],
        f = a["aria-checked"],
        g = a["aria-controls"],
        ca = a["aria-current"],
        da = a["aria-describedby"],
        ea = a["aria-expanded"],
        fa = a["aria-haspopup"],
        ga = a["aria-hidden"],
        ha = a["aria-invalid"],
        n = a["aria-label"],
        ia = a["aria-labelledby"],
        ja = a["aria-owns"],
        ka = a["aria-selected"],
        la = a.attributionsrc,
        o = a.children,
        ma = a.className_DEPRECATED,
        p = a.disabled,
        q =
          a.disableLinkShimAndTracking_DO_NOT_USE_OR_SEE_YOU_AT_THE_PRIVACY_SEV,
        r =
          a.disableLinkShimForFollowLinkButton_DO_NOT_USE_OR_SEE_YOU_AT_THE_PRIVACY_SEV,
        s = a.display;
      s = s === void 0 ? "inline" : s;
      var t = a.download,
        u = a.fbclid,
        v = a.focusable,
        w = a.href,
        na = a.id,
        x = a.label,
        y = a.lynxMode,
        oa = a.onBlur,
        z = a.onClick,
        A = a.onContextMenu,
        pa = a.onFocus,
        qa = a.onFocusChange,
        ra = a.onFocusVisibleChange,
        sa = a.onHoverChange,
        B = a.onHoverEnd,
        C = a.onHoverStart,
        D = a.onNavigate,
        ta = a.onPressChange,
        ua = a.onPressEnd,
        E = a.onPressStart,
        F = a.passthroughProps,
        G = a.prefetchQueriesOnHover,
        H = a.preloadCodeOnMount,
        va = a.preserveQueryInShim,
        wa = a.preventContextMenu,
        xa = a.preventLocalNavigation,
        ya = a.productAttribution,
        I = a.rel,
        za = a.replace,
        J = a.role,
        K = a.routeTarget,
        Aa = a.style,
        Ba = a.suppressFocusRing,
        Ca = a.suppressHydrationWarning,
        L = a.target,
        Da = a.testid,
        M = a.testOnly_pressed;
      M = M === void 0 ? !1 : M;
      var Ea = a.traceParams;
      a = a.xstyle;
      var Fa = c("useCometRouterDispatcher")(),
        N = aa(null),
        Ga = j(c("BaseLinkEndpointModifierContext")),
        O = j(c("BaseLinkDefaultTargetContext")),
        P = j(c("CometTrackingNodesContext")),
        Q = j(c("CometTrackingCodeContext")),
        Ha = Q.click_tracking_linkshim_cb,
        Ia = Q.encrypted_click_tracking;
      Q = Q.encrypted_tracking;
      var Ja = j(c("CometProductAttributionContext")),
        R = i(
          function (a) {
            return d("CometLinkTrackingUtils").decorateHrefWithTrackingInfo(
              a,
              P,
              Ia
            );
          },
          [Ia, P]
        ),
        Ka = i(
          function (a) {
            return ba(Ga, a);
          },
          [Ga]
        ),
        La = t === !0 || typeof t === "string",
        S = k(
          function () {
            var a =
                w != null && c("justknobx")._("144")
                  ? c("appendPersistQueryParamsToUrl")(w)
                  : w,
              b = !1;
            if (a != null) {
              var e = d("ConstUriUtils").getUri(a);
              if (e != null) {
                var f = e.getProtocol(),
                  g = e.getDomain();
                if (!f.length && !g.length) b = !0;
                else {
                  g = f.length ? e : e.getQualifiedUri();
                  b = g != null && c("isTrustedDestination")(g);
                }
              }
            } else b = !0;
            if (La || q === !0)
              return {
                clickIDAppended: !1,
                ghlEncrypted: !1,
                href: a,
                isExternalLink: !b,
                isRouterLink: !1,
                shimmed: !1,
                unshimmedHref: null,
              };
            if (a != null && c("isCometRouterUrl")(a)) {
              f = R(Ka(a));
              return {
                clickIDAppended: !1,
                ghlEncrypted: !1,
                href: f,
                isExternalLink: !b,
                isRouterLink: !0,
                shimmed: !1,
                unshimmedHref: null,
              };
            }
            e = d("CometLinkShimUtils").getLinkShimInfo(a, Ha, P, u, r, va);
            g = e.shimmed ? e.href : R(e.href);
            return {
              clickIDAppended: e.clickIDAppended,
              ghlEncrypted: (f = e.ghlEncrypted) != null ? f : !1,
              href: g,
              isExternalLink: !b,
              isRouterLink: !1,
              shimmed: e.shimmed,
              unshimmedHref: e.shimmed ? e.unshimmedHref : null,
            };
          },
          [Ha, r, q, u, La, w, va, P, R, Ka]
        ),
        Ma = S.clickIDAppended,
        T = S.ghlEncrypted,
        U = S.href,
        V = S.isExternalLink,
        W = S.isRouterLink,
        X = S.shimmed;
      S = S.unshimmedHref;
      var Y = !1,
        Z = !1;
      L = L;
      if (O) {
        var $;
        L = ($ = L) != null ? $ : O;
      }
      if (X || T || (V && r !== !0)) {
        Y = !0;
        L = ($ = L) != null ? $ : "_blank";
        Z = !!d("CometLinkShimUtils").use_rel_no_referrer && L === "_blank";
      }
      O = Array.isArray(I) ? I.join(" ") : I;
      Y &&
        (O == null || O.indexOf("nofollow") < 0) &&
        (O = O != null ? O + " nofollow" : "nofollow");
      Z &&
        (O == null || O.indexOf("noreferrer") < 0) &&
        (O = O != null ? O + " noreferrer" : "noreferrer");
      T = c("useAttributionSourceForClick")(null, Q[0]);
      V = j(c("BaseLinkNestedPressableContext"));
      $ = J === "presentation" ? "none" : J;
      I = x != null && $ !== "none" ? x : n;
      var Na = b;
      Y = z;
      Z = E;
      Q = A;
      Y = c("useFeedPressEventHandler")(z, U);
      Z = c("useFeedPressEventHandler")(E, U);
      Q = c("useFeedPressEventHandler")(A, U);
      J = k(
        function () {
          return c("mergeRefs")(Na, N);
        },
        [Na, N]
      );
      x = c("useCometRouterLinkShimEventHandlers")({
        href: U,
        lynxMode: y,
        onContextMenu: Q,
        onHoverStart: C,
        onPress: Y,
        shimmed: X,
        unshimmedHref: S,
      });
      n = x.onContextMenu;
      b = x.onHoverStart;
      z = x.onPress;
      E = x.useOrigHref;
      A = k(
        function () {
          return {
            linkRef: N,
            onNavigate: D,
            passthroughProps: F,
            productAttributionUpdateProps: {
              fromLink: ya,
              linkContext: Ja,
              trackingNodes: P,
            },
            replace: za,
            target: K,
            traceParams: Ea,
          };
        },
        [N, ya, Ja, P, D, za, K, Ea, F]
      );
      y = c("useCometRouterLinkEventHandlers")({
        dispatcherExtras: A,
        href: U,
        isRouterLink: W,
        onHoverEnd: B,
        onHoverStart: b,
        onPress: z,
        onPressStart: Z,
        prefetchQueriesOnHover: G,
        preloadCodeOnMount: H,
        preventLocalNavigation: xa,
        rel: O,
        target: L,
      });
      Q = y.onHoverEnd;
      C = y.onHoverStart;
      Y = y.onPress;
      x = y.onPressStart;
      A = E && X ? S : U;
      B =
        (W && L !== "_blank" && Fa != null) ||
        A == null ||
        A === "#" ||
        xa === !0;
      z = (b = c("useTransformRelativeUri")(E && X ? S : U)) != null ? b : "#";
      G = {
        accessibilityLabel: I,
        accessibilityRelationship: {
          activedescendant: e,
          controls: g,
          current: ca,
          describedby: da,
          haspopup: fa,
          labelledby: ia,
          owns: ja,
        },
        accessibilityState: {
          checked: f,
          disabled: p,
          expanded: ea,
          hidden: ga,
          invalid: ha,
          selected: ka,
        },
        className_DEPRECATED: ma,
        disabled: p,
        forwardedRef: J,
        link: {
          attributionsrc: (Z = la) != null ? Z : T,
          download: t,
          rel: O,
          target: L,
          url: z,
        },
        nativeID: na,
        onBlur: oa,
        onContextMenu: n,
        onFocus: pa,
        onFocusChange: qa,
        onFocusVisibleChange: ra,
        onHoverChange: sa,
        onHoverEnd: Q,
        onHoverStart: C,
        onPress: Y,
        onPressChange: ta,
        onPressEnd: ua,
        onPressStart: x,
        preventContextMenu: wa,
        preventDefault: B,
        style: Aa,
        suppressHydrationWarning: Ca === !0 || Ma === !0 ? !0 : void 0,
        testID: Da,
        testOnly_state: {
          disabled: !1,
          focused: !1,
          focusVisible: !1,
          hovered: !1,
          pressed: M,
        },
        xstyle: a,
      };
      if (s === "block") {
        H =
          $ === "button" ||
          $ === "menuitem" ||
          $ === "none" ||
          $ === "switch" ||
          $ === "checkbox" ||
          $ === "article" ||
          $ === "radio" ||
          $ === "tab"
            ? $
            : "link";
        y = h.jsx(
          c("Pressable.react"),
          babelHelpers["extends"]({}, G, {
            accessibilityRole: H,
            suppressFocusRing: Ba,
            tabbable: v,
            children: h.jsx(l, { children: o }),
          })
        );
      } else {
        W =
          $ === "button" ||
          $ === "menuitem" ||
          $ === "menuitemradio" ||
          $ === "menuitemcheckbox" ||
          $ === "none" ||
          $ === "tab"
            ? $
            : "link";
        y = h.jsx(
          c("PressableText.react"),
          babelHelpers["extends"]({}, G, {
            accessibilityRole: W,
            direction: "none",
            focusable: v,
            suppressFocusRing: Ba,
            children: h.jsx(l, { children: o }),
          })
        );
      }
      return h.jsxs(h.Fragment, {
        children: [
          K === "content" && h.jsx(m, {}),
          V
            ? h.jsx(c("BaseNestedPressableHack_DO_NOT_USE.react"), {
                children: y,
              })
            : y,
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function m() {
      var a = c("useCurrentRoute")(),
        b = c("useCometErrorProject")();
      return (
        a != null &&
        a.isCometRootContainer !== !0 &&
        h.jsx(c("RecoverableViolationWithComponentStack.react"), {
          errorMessage:
            "A link with target=content was rendered in a non-tab-container",
          projectName: (a = b) != null ? a : "comet_infra",
        })
      );
    }
    m.displayName = m.name + " [from " + f.id + "]";
    e = h.forwardRef(a);
    g["default"] = e;
  },
  98
);
__d(
  "CometContainerPressableContext",
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
  "CometPressable.react",
  [
    "BaseButton.react",
    "BaseFocusRing.react",
    "BaseLink.react",
    "CometContainerPressableContext",
    "CometDangerouslySuppressInteractiveElementsContext",
    "CometPressableOverlay.react",
    "gkx",
    "react",
    "stylex",
    "useMergeRefs",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
      j = b.useContext,
      k = b.useEffect,
      l = b.useRef,
      m = b.useState,
      n = c("gkx")("1721477") || c("gkx")("1459"),
      o = {
        defaultCursor: { cursor: "xt0e3qv", $$css: !0 },
        expanding: { display: "x78zum5", $$css: !0 },
        hideOutline: { outline: "x1a2a7pz", $$css: !0 },
        linkBase: { display: "x1rg5ohu", $$css: !0 },
        root: {
          borderTopStartRadius: "x1o1ewxj",
          borderTopEndRadius: "x3x9cwd",
          borderBottomEndRadius: "x1e5q0jg",
          borderBottomStartRadius: "x13rtm0m",
          display: "x3nfvp2",
          flexDirection: "x1q0g3np",
          userSelect: "x87ps6o",
          ":hover_textDecoration": "x1lku1pv",
          $$css: !0,
        },
        root_DEPRECATED: {
          borderTopStartRadius: "x1o1ewxj",
          borderTopEndRadius: "x3x9cwd",
          borderBottomEndRadius: "x1e5q0jg",
          borderBottomStartRadius: "x13rtm0m",
          position: "x1n2onr6",
          userSelect: "x87ps6o",
          ":hover_textDecoration": "x1lku1pv",
          $$css: !0,
        },
        zIndex: { zIndex: "x1vjfegm", $$css: !0 },
      };
    function a(a, b) {
      var d = a.allowClickEventPropagation,
        e = a.children,
        f = a.className_DEPRECATED,
        g = a.cursorDisabled;
      g = g === void 0 ? !1 : g;
      var p = a.xstyle,
        q = a.disabled;
      q = q === void 0 ? !1 : q;
      var r = a.display,
        s = a.expanding;
      s = s === void 0 ? r === "block" : s;
      var t = a.hideFocusOverlay;
      t = t === void 0 ? !1 : t;
      var u = a.hideHoverOverlay;
      u = u === void 0 ? !1 : u;
      var v = a.isContainerTarget,
        w = v === void 0 ? !1 : v,
        x = a.linkProps,
        y = a.onFocusChange;
      v = a.onFocusIn;
      var z = a.onFocusOut,
        A = a.onFocusVisibleChange,
        B = a.onHoverChange,
        C = a.onHoverIn,
        D = a.onHoverOut,
        E = a.onPress,
        F = a.onPressChange,
        G = a.onPressIn,
        H = a.onPressOut,
        I = a.preventContextMenu,
        J = a.overlayDisabled;
      J = J === void 0 ? !1 : J;
      var K = a.overlayOffset,
        L = a.overlayFocusRingPosition,
        M = a.overlayFocusVisibleStyle,
        N = a.overlayHoveredStyle,
        O = a.overlayPressedStyle,
        P = a.overlayRadius,
        Q = a.suppressFocusRing;
      Q = Q === void 0 ? !1 : Q;
      var R = a.testOnly_pressed,
        S = R === void 0 ? !1 : R;
      R = a.testid;
      R = babelHelpers.objectWithoutPropertiesLoose(a, [
        "allowClickEventPropagation",
        "children",
        "className_DEPRECATED",
        "cursorDisabled",
        "xstyle",
        "disabled",
        "display",
        "expanding",
        "hideFocusOverlay",
        "hideHoverOverlay",
        "isContainerTarget",
        "linkProps",
        "onFocusChange",
        "onFocusIn",
        "onFocusOut",
        "onFocusVisibleChange",
        "onHoverChange",
        "onHoverIn",
        "onHoverOut",
        "onPress",
        "onPressChange",
        "onPressIn",
        "onPressOut",
        "preventContextMenu",
        "overlayDisabled",
        "overlayOffset",
        "overlayFocusRingPosition",
        "overlayFocusVisibleStyle",
        "overlayHoveredStyle",
        "overlayPressedStyle",
        "overlayRadius",
        "suppressFocusRing",
        "testOnly_pressed",
        "testid",
      ]);
      a = m(S);
      var T = a[0],
        U = a[1];
      a = m(!1);
      var V = a[0],
        aa = a[1];
      a = m(!1);
      var W = a[0],
        ba = a[1];
      a = m(!1);
      var X = a[0],
        ca = a[1];
      a = i(
        function (a) {
          U(a || S), F && F(a);
        },
        [F, S]
      );
      var da = i(
          function (a) {
            aa(a), y && y(a);
          },
          [y]
        ),
        ea = i(
          function (a) {
            ba(a), A && A(a);
          },
          [A]
        ),
        fa = i(
          function (a) {
            ca(a), B && B(a);
          },
          [B]
        );
      M = J
        ? null
        : h.jsx(c("CometPressableOverlay.react"), {
            focusRingPosition: L,
            focusVisible: !t && W,
            focusVisibleStyle: M,
            hovered: !u && X,
            hoveredStyle: N,
            offset: K,
            pressed: T,
            pressedStyle: O,
            radius: P,
            showFocusRing: !0,
          });
      u =
        typeof e === "function"
          ? e({
              disabled: q,
              focused: V,
              focusVisible: W,
              hovered: X,
              overlay: M,
              pressed: T,
            })
          : h.jsxs(h.Fragment, { children: [e, M] });
      N =
        typeof p === "function"
          ? p({
              disabled: q,
              focused: V,
              focusVisible: W,
              hovered: X,
              pressed: T,
            })
          : p;
      var Y = j(c("CometContainerPressableContext"));
      K = j(c("CometDangerouslySuppressInteractiveElementsContext"));
      O = W && (t || J) && !Q;
      P = [
        r === "inline" ? o.root_DEPRECATED : o.root,
        g === !0 && o.defaultCursor,
        s && o.expanding,
        x != null && o.linkBase,
        !W && o.hideOutline,
        N,
        O &&
          (L === "inset"
            ? c("BaseFocusRing.react").focusRingInsetXStyle
            : c("BaseFocusRing.react").focusRingXStyle),
        Y != null && o.zIndex,
      ];
      e = {
        onBlur: z,
        onClick: E,
        onFocus: v,
        onFocusChange: da,
        onFocusVisibleChange: ea,
        onHoverChange: fa,
        onHoverEnd: D,
        onHoverStart: C,
        onPressChange: a,
        onPressEnd: H,
        onPressStart: G,
      };
      var ga = l(null),
        Z = l(null),
        $ = R.onContextMenu;
      k(
        function () {
          w &&
            Y &&
            Y.onMount(
              {
                onContextMenu: function (a) {
                  I === !0 && a.preventDefault(), $ != null && $(a);
                },
                onPress: function (a) {
                  a = Z.current;
                  a && a.click();
                },
                target: x == null ? void 0 : x.target,
                url: x == null ? void 0 : x.url,
              },
              ga
            );
        },
        [
          Y,
          w,
          R,
          $,
          I,
          x == null ? void 0 : x.url,
          x == null ? void 0 : x.target,
        ]
      );
      M = c("useMergeRefs")(b, Z);
      if (K) {
        V = r === "inline" ? "span" : "div";
        return h.jsx(
          V,
          babelHelpers["extends"](
            {
              className_DEPRECATED: f,
              display: r === "inline" ? r : "block",
              preventContextMenu: I,
            },
            R,
            {
              className: c("stylex")(P),
              "data-testid": void 0,
              ref: M,
              children: u,
            }
          )
        );
      }
      if (x != null) {
        X = x.url;
        T = babelHelpers.objectWithoutPropertiesLoose(x, ["url"]);
        p = babelHelpers["extends"]({}, T, { href: X });
        return h.jsx(
          c("BaseLink.react"),
          babelHelpers["extends"]({}, e, R, p, {
            className_DEPRECATED: f,
            disabled: q,
            display: r === "inline" ? r : "block",
            preventContextMenu: I,
            ref: M,
            suppressFocusRing: !O || n,
            testid: void 0,
            xstyle: P,
            children: u,
          })
        );
      }
      return h.jsx(
        c("BaseButton.react"),
        babelHelpers["extends"]({}, e, R, {
          allowClickEventPropagation: d,
          className_DEPRECATED: f,
          disabled: q,
          display: r === "inline" ? r : "block",
          preventContextMenu: I,
          ref: M,
          suppressFocusRing: !O || n,
          testid: void 0,
          xstyle: P,
          children: u,
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
  "CometTextContext",
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
  "TetraTextTypography",
  ["UserAgent", "cr:4166"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = {
        apple: {
          MozOsxFontSmoothing: "xlh3980",
          WebkitFontSmoothing: "xvmahel",
          fontFamily: "x1n0sxbx",
          $$css: !0,
        },
        default: { fontFamily: "x10flsy6", $$css: !0 },
        segoe: { fontFamily: "x1xmvt09", $$css: !0 },
      },
      i = {
        body1: {
          fontFamily: h["default"],
          fontSize: 20,
          fontWeight: "normal",
          lineHeight: 24,
          offsets: [4, 5],
        },
        body2: {
          fontFamily: h["default"],
          fontSize: 17,
          fontWeight: "normal",
          lineHeight: 20,
          offsets: [3, 5],
        },
        body3: {
          fontFamily: h["default"],
          fontSize: 15,
          fontWeight: "normal",
          lineHeight: 20,
          offsets: [4, 5],
        },
        body4: {
          fontFamily: h["default"],
          fontSize: 13,
          fontWeight: "normal",
          lineHeight: 16,
          offsets: [3, 4],
        },
        bodyLink1: {
          fontFamily: h["default"],
          fontSize: 20,
          fontWeight: "semibold",
          lineHeight: 24,
          offsets: [4, 5],
        },
        bodyLink2: {
          fontFamily: h["default"],
          fontSize: 17,
          fontWeight: "semibold",
          lineHeight: 20,
          offsets: [3, 5],
        },
        bodyLink3: {
          fontFamily: h["default"],
          fontSize: 15,
          fontWeight: "semibold",
          lineHeight: 20,
          offsets: [4, 5],
        },
        bodyLink4: {
          fontFamily: h["default"],
          fontSize: 13,
          fontWeight: "semibold",
          lineHeight: 16,
          offsets: [3, 4],
        },
        button1: {
          fontFamily: h["default"],
          fontSize: 17,
          fontWeight: "semibold",
          lineHeight: 20,
          offsets: [3, 5],
        },
        button2: {
          fontFamily: h["default"],
          fontSize: 15,
          fontWeight: "semibold",
          lineHeight: 20,
          offsets: [4, 5],
        },
        entityHeaderHeadline1: {
          fontFamily: h["default"],
          fontSize: 32,
          fontWeight: "bold",
          lineHeight: 38,
          offsets: [7, 8],
        },
        entityHeaderHeadline2: {
          fontFamily: h["default"],
          fontSize: 28,
          fontWeight: "bold",
          lineHeight: 32,
          offsets: [5, 7],
        },
        entityHeaderMeta1: {
          defaultColor: "secondary",
          fontFamily: h["default"],
          fontSize: 15,
          fontWeight: "bold",
          lineHeight: 20,
          offsets: [4, 5],
        },
        entityHeaderMeta2: {
          defaultColor: "secondary",
          fontFamily: h["default"],
          fontSize: 15,
          fontWeight: "bold",
          lineHeight: 20,
          offsets: [4, 5],
        },
        headline3: {
          fontFamily: h["default"],
          fontSize: 17,
          fontWeight: "medium",
          lineHeight: 20,
          offsets: [3, 5],
        },
        headline4: {
          fontFamily: h["default"],
          fontSize: 15,
          fontWeight: "medium",
          lineHeight: 20,
          offsets: [4, 5],
        },
        headlineDeemphasized3: {
          fontFamily: h["default"],
          fontSize: 17,
          fontWeight: "normal",
          lineHeight: 20,
          offsets: [3, 5],
        },
        headlineDeemphasized4: {
          fontFamily: h["default"],
          fontSize: 15,
          fontWeight: "normal",
          lineHeight: 20,
          offsets: [4, 5],
        },
        headlineEmphasized1: {
          fontFamily: h["default"],
          fontSize: 24,
          fontWeight: "bold",
          lineHeight: 28,
          offsets: [5, 6],
        },
        headlineEmphasized2: {
          fontFamily: h["default"],
          fontSize: 20,
          fontWeight: "bold",
          lineHeight: 24,
          offsets: [4, 5],
        },
        headlineEmphasized3: {
          fontFamily: h["default"],
          fontSize: 17,
          fontWeight: "semibold",
          lineHeight: 20,
          offsets: [3, 4],
        },
        headlineEmphasized4: {
          fontFamily: h["default"],
          fontSize: 15,
          fontWeight: "semibold",
          lineHeight: 20,
          offsets: [4, 5],
        },
        meta1: {
          defaultColor: "secondary",
          fontFamily: h["default"],
          fontSize: 13,
          fontWeight: "semibold",
          lineHeight: 16,
          offsets: [3, 4],
        },
        meta2: {
          defaultColor: "secondary",
          fontFamily: h["default"],
          fontSize: 13,
          fontWeight: "semibold",
          lineHeight: 16,
          offsets: [3, 4],
        },
        meta3: {
          defaultColor: "secondary",
          fontFamily: h["default"],
          fontSize: 13,
          fontWeight: "normal",
          lineHeight: 16,
          offsets: [3, 4],
        },
        meta4: {
          defaultColor: "secondary",
          fontFamily: h["default"],
          fontSize: 12,
          fontWeight: "normal",
          lineHeight: 16,
          offsets: [3, 4],
        },
      },
      j = [
        ["body1", [5, 5]],
        ["body2", [4, 4]],
        ["body3", [4, 4]],
        ["body4", [4, 3]],
        ["bodyLink1", [5, 5]],
        ["bodyLink2", [4, 4]],
        ["bodyLink3", [4, 4]],
        ["bodyLink4", [4, 3]],
        ["button1", [4, 4]],
        ["button2", [4, 4]],
        ["entityHeaderHeadline1", [8, 7]],
        ["entityHeaderHeadline2", [6, 6]],
        ["entityHeaderMeta1", [4, 4]],
        ["entityHeaderMeta2", [4, 4]],
        ["headline3", [4, 4]],
        ["headline4", [4, 4]],
        ["headlineDeemphasized3", [4, 4]],
        ["headlineDeemphasized4", [4, 4]],
        ["headlineEmphasized1", [6, 5]],
        ["headlineEmphasized2", [5, 5]],
        ["headlineEmphasized3", [4, 4]],
        ["headlineEmphasized4", [4, 4]],
        ["meta1", [4, 3]],
        ["meta2", [4, 3]],
        ["meta3", [4, 3]],
        ["meta4", [3, 3]],
      ],
      k = [
        ["body1", [5, 5]],
        ["body2", [4, 4]],
        ["body3", [5, 4]],
        ["body4", [4, 3]],
        ["bodyLink1", [6, 4]],
        ["bodyLink2", [4, 3]],
        ["bodyLink3", [5, 4]],
        ["bodyLink4", [4, 3]],
        ["button1", [4, 3]],
        ["button2", [5, 4]],
        ["entityHeaderHeadline1", [8, 7]],
        ["entityHeaderHeadline2", [7, 5]],
        ["entityHeaderMeta1", [5, 4]],
        ["entityHeaderMeta2", [5, 4]],
        ["headline3", [5, 3]],
        ["headline4", [5, 4]],
        ["headlineDeemphasized3", [5, 3]],
        ["headlineDeemphasized4", [5, 4]],
        ["headlineEmphasized1", [6, 5]],
        ["headlineEmphasized2", [6, 4]],
        ["headlineEmphasized3", [4, 3]],
        ["headlineEmphasized4", [5, 4]],
        ["meta1", [4, 3]],
        ["meta2", [4, 3]],
        ["meta3", [4, 3]],
        ["meta4", [4, 3]],
      ],
      l = [
        ["body1", [6, 4, 1]],
        ["body2", [5, 3, 1]],
        ["body3", [5, 4]],
        ["body4", [4, 3, 1]],
        ["bodyLink1", [6, 4, 1]],
        ["bodyLink2", [5, 3, 1]],
        ["bodyLink3", [5, 4]],
        ["bodyLink4", [4, 3, 1]],
        ["button1", [5, 3, 1]],
        ["button2", [5, 4]],
        ["entityHeaderHeadline1", [10, 6, 2]],
        ["entityHeaderHeadline2", [8, 5, 3]],
        ["entityHeaderMeta1", [5, 4, 1]],
        ["entityHeaderMeta2", [5, 4, 1]],
        ["headline3", [5, 3, 1]],
        ["headline4", [5, 4]],
        ["headlineDeemphasized3", [5, 3, 1]],
        ["headlineDeemphasized4", [5, 4]],
        ["headlineEmphasized1", [7, 4, 2]],
        ["headlineEmphasized2", [6, 4, 2]],
        ["headlineEmphasized3", [5, 3, 1]],
        ["headlineEmphasized4", [5, 4]],
        ["meta1", [4, 3, 1]],
        ["meta2", [4, 3, 1]],
        ["meta3", [4, 3, 1]],
        ["meta4", [4, 3]],
      ];
    function m() {
      if (c("UserAgent").isPlatform("Windows >= 6"))
        return { fontFamily: h.segoe, offsets: l };
      return (c("UserAgent").isPlatform("Mac OS X >= 10.11") &&
        !c("UserAgent").isBrowser("Firefox < 55")) ||
        c("UserAgent").isPlatform("iOS >= 9")
        ? {
            fontFamily: h.apple,
            offsets: c("UserAgent").isEngine("Gecko") ? k : j,
          }
        : null;
    }
    function a() {
      var a = babelHelpers["extends"]({}, i),
        c = m();
      if (c != null) {
        var d = c.fontFamily;
        c = c.offsets;
        c = new Map(c);
        c.forEach(function (b, c) {
          a[c] = babelHelpers["extends"]({}, a[c], {
            fontFamily: d,
            offsets: b,
          });
        });
      }
      b("cr:4166") &&
        Object.keys(b("cr:4166")).forEach(function (c) {
          a[c] = b("cr:4166")[c];
        });
      return a;
    }
    d = a();
    g["default"] = d;
  },
  98
);
__d(
  "CometTextTypography",
  ["TetraTextTypography"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("TetraTextTypography");
  },
  98
);
__d(
  "BaseContextualLayerAnchorRootContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({ current: document.body });
    g["default"] = b;
  },
  98
);
__d(
  "BaseDOMContainer.react",
  ["react", "useMergeRefs"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useLayoutEffect,
      j = b.useRef;
    function a(a, b) {
      var d = a.node,
        e = j(null);
      i(
        function () {
          var a = e.current;
          if (d != null && a != null) {
            a.appendChild(d);
            return function () {
              a.removeChild(d);
            };
          }
        },
        [d]
      );
      a = c("useMergeRefs")(b, e);
      return h.jsx("div", { ref: a });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = h.memo(h.forwardRef(a));
    g["default"] = e;
  },
  98
);
__d(
  "BaseContextualLayerAnchorRoot.react",
  [
    "BaseContextualLayerAnchorRootContext",
    "BaseDOMContainer.react",
    "ExecutionEnvironment",
    "react",
    "useStable",
    "useUnsafeRef_DEPRECATED",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      a = a.children;
      var b = c("useStable")(function () {
          return c("ExecutionEnvironment").canUseDOM
            ? document.createElement("div")
            : null;
        }),
        d = c("useUnsafeRef_DEPRECATED")(b);
      return h.jsxs(h.Fragment, {
        children: [
          h.jsx(c("BaseContextualLayerAnchorRootContext").Provider, {
            value: d,
            children: a,
          }),
          h.jsx(c("BaseDOMContainer.react"), { node: b }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "BaseContextualLayerAvailableHeightContext",
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
  "BaseContextualLayerContextSizeContext",
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
  "LegacyHidden",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = h.unstable_LegacyHidden,
      j = h.unstable_Offscreen;
    function a(a, b) {
      var c = a.children,
        d = a.htmlAttributes,
        e = a.mode;
      a = a.suppressHydrationWarning;
      return h.jsx(
        "div",
        babelHelpers["extends"]({}, d, {
          hidden: e === "hidden" ? !0 : void 0,
          ref: b,
          suppressHydrationWarning: a,
          children: h.jsx(i, {
            mode: e === "hidden" ? "unstable-defer-without-hiding" : e,
            children: c,
          }),
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    a.displayName = "LegacyHidden";
    function b(a, b) {
      var c = a.children,
        d = a.htmlAttributes,
        e = a.mode;
      a = a.suppressHydrationWarning;
      return h.jsx(j, {
        mode: e,
        children: h.jsx(
          "div",
          babelHelpers["extends"]({}, d, {
            ref: b,
            suppressHydrationWarning: a,
            children: c,
          })
        ),
      });
    }
    b.displayName = b.name + " [from " + f.id + "]";
    b.displayName = "LegacyHiddenOffscreen";
    c = h.forwardRef(a);
    g["default"] = c;
  },
  98
);
__d(
  "BaseContextualLayerDefaultContainer.react",
  ["LegacyHidden", "react", "stylex", "testID"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a, b) {
      return h.jsx(c("LegacyHidden"), {
        htmlAttributes: babelHelpers["extends"]({}, c("testID")(a.testid), {
          className: c("stylex")(a.xstyle),
          onClick:
            a.stopClickPropagation === !0
              ? function (a) {
                  return a.stopPropagation();
                }
              : void 0,
        }),
        mode: a.hidden ? "hidden" : "visible",
        ref: b,
        children: a.children,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "BaseContextualLayerLayerAdjustmentContext",
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
  "BaseContextualLayerOrientationContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = { align: "start", position: "below" };
    c = a.createContext(b);
    g["default"] = c;
  },
  98
);
__d(
  "BasePortalTargetContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(document.body);
    g["default"] = b;
  },
  98
);
__d(
  "BaseThemeConfigContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = {
      darkClassName: null,
      darkVariables: {},
      lightClassName: null,
      lightVariables: {},
    };
    c = a.createContext(b);
    g["default"] = c;
  },
  98
);
__d(
  "BaseThemeDisplayModeContext",
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
  "useCurrentDisplayMode",
  ["BaseThemeDisplayModeContext", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useContext,
      i = "light";
    function a() {
      var a;
      return (a = h(c("BaseThemeDisplayModeContext"))) != null ? a : i;
    }
    g["default"] = a;
  },
  98
);
__d(
  "BaseThemeProvider.react",
  [
    "BaseThemeConfigContext",
    "BaseThemeDisplayModeContext",
    "react",
    "useCurrentDisplayMode",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useContext,
      j = b.useMemo;
    function a(a) {
      var b = a.children,
        d = a.config;
      a = a.displayMode;
      var e = i(c("BaseThemeConfigContext")),
        f = c("useCurrentDisplayMode")(),
        g = (a = a) != null ? a : f;
      a = j(
        function () {
          var a;
          d != null && d.type === "CLASSNAMES"
            ? (a = g === "dark" ? d.dark : d.light)
            : (a = g === "dark" ? e.darkClassName : e.lightClassName);
          return a != null ? { $$css: !0, theme: a } : null;
        },
        [d, e.darkClassName, e.lightClassName, g]
      );
      f = a;
      a = j(
        function () {
          if (d != null)
            if (d.type === "VARIABLES")
              return babelHelpers["extends"]({}, e, {
                darkVariables: babelHelpers["extends"](
                  {},
                  e.darkVariables,
                  d.dark
                ),
                lightVariables: babelHelpers["extends"](
                  {},
                  e.lightVariables,
                  d.light
                ),
              });
            else if (d.type === "CLASSNAMES")
              return babelHelpers["extends"]({}, e, {
                darkClassName: d.dark,
                lightClassName: d.light,
              });
          return e;
        },
        [d, e]
      );
      var l = k(g === "dark" ? a.darkVariables : a.lightVariables);
      return h.jsx(c("BaseThemeConfigContext").Provider, {
        value: a,
        children: h.jsx(c("BaseThemeDisplayModeContext").Provider, {
          value: g,
          children: b(f, l),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function k(a) {
      var b = {};
      Object.keys(a).forEach(function (c) {
        b["--" + c] = a[c];
      });
      return b;
    }
    g["default"] = a;
  },
  98
);
__d(
  "BasePortal.react",
  [
    "BaseDOMContainer.react",
    "BasePortalTargetContext",
    "BaseThemeProvider.react",
    "ExecutionEnvironment",
    "ReactDOMComet",
    "react",
    "stylex",
    "suspendOrThrowIfUsedInSSR",
    "useStable",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useContext;
    function a(a) {
      var b = a.children,
        e = a.hidden,
        f = e === void 0 ? !1 : e;
      e = a.target;
      var g = a.xstyle;
      a = i(c("BasePortalTargetContext"));
      e = e || a;
      var j = c("useStable")(function () {
        return c("ExecutionEnvironment").canUseDOM
          ? document.createElement("div")
          : null;
      });
      c("suspendOrThrowIfUsedInSSR")(
        "BasePortal: Portals are not currently supported by the server renderer."
      );
      return e != null
        ? d("ReactDOMComet").createPortal(
            h.jsx(c("BaseThemeProvider.react"), {
              children: function (a, d) {
                return h.jsxs(
                  "div",
                  babelHelpers["extends"]({}, f && { hidden: !0 }, {
                    className: c("stylex")(a, g) || void 0,
                    style: d,
                    children: [
                      h.jsx(c("BasePortalTargetContext").Provider, {
                        value: j,
                        children: b,
                      }),
                      h.jsx(c("BaseDOMContainer.react"), { node: j }),
                    ],
                  })
                );
              },
            }),
            e
          )
        : null;
    }
    g["default"] = a;
  },
  98
);
__d(
  "BaseScrollableAreaContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext([]);
    g["default"] = b;
  },
  98
);
__d(
  "ActiveFocusRegionUtilsContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(null);
    c = b;
    g["default"] = c;
  },
  98
);
__d(
  "getTabbableNodes",
  [],
  function (a, b, c, d, e, f) {
    function a(a, b) {
      var c = document.activeElement,
        d = function (b, d, e) {
          return e === c
            ? !0
            : a(b, d, e) &&
                e.offsetWidth > 0 &&
                e.offsetHeight > 0 &&
                e.tabIndex !== -1 &&
                window.getComputedStyle(e).visibility !== "hidden";
        };
      b = c ? b.DO_NOT_USE_queryAllNodes(d) : null;
      if (b === null) return [null, null, null, 0, null];
      d = {};
      for (
        var e = b,
          f = Array.isArray(e),
          g = 0,
          e = f
            ? e
            : e[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        var h;
        if (f) {
          if (g >= e.length) break;
          h = e[g++];
        } else {
          g = e.next();
          if (g.done) break;
          h = g.value;
        }
        h = h;
        if (
          h instanceof HTMLInputElement &&
          h.tagName === "INPUT" &&
          h.type === "radio" &&
          h.name != null
        ) {
          var i;
          d[h.name] = [].concat((i = d[h.name]) != null ? i : [], [h]);
        }
      }
      var j = Object.values(d)
        .map(function (a) {
          if (
            a.find(function (a) {
              return a.checked;
            })
          )
            return a.filter(function (a) {
              return !a.checked;
            });
          a[0];
          a = a.slice(1);
          return a;
        })
        .flat();
      b = b.filter(function (a) {
        return !j.includes(a);
      });
      i = b[0];
      h = b[b.length - 1];
      g = b.indexOf(c);
      f = null;
      g !== -1 && (f = b[g]);
      return [b, i, h, g, f];
    }
    f["default"] = a;
  },
  66
);
__d(
  "FocusManager",
  ["getTabbableNodes"],
  function (a, b, c, d, e, f, g) {
    var h = !1,
      i = !1,
      j = !1,
      k = 500;
    function l() {
      try {
        var a = document.createElement("div");
        a.addEventListener(
          "focus",
          function (a) {
            a.preventDefault(), a.stopPropagation();
          },
          !0
        );
        a.focus(
          Object.defineProperty({}, "preventScroll", {
            get: function () {
              i = !0;
            },
          })
        );
      } catch (a) {}
    }
    function m(a) {
      a = a.parentElement;
      var b = [],
        c = document.scrollingElement || document.documentElement;
      while (a && a !== c) {
        var d = a,
          e = d.offsetHeight;
        d = d.offsetWidth;
        (e < a.scrollHeight || d < a.scrollWidth) &&
          b.push([a, a.scrollTop, a.scrollLeft]);
        a = a.parentElement;
      }
      c && b.push([c, c.scrollTop, c.scrollLeft]);
      return b;
    }
    function n(a) {
      for (var b = 0; b < a.length; b++) {
        var c = a[b],
          d = c[0],
          e = c[1];
        c = c[2];
        d.scrollTop = e;
        d.scrollLeft = c;
      }
    }
    function a(a, b) {
      a = Array.isArray(a) ? a : [a];
      for (var c = 0; c < a.length; c++) {
        var d = b.DO_NOT_USE_queryAllNodes(a[c]);
        if (d) return d;
      }
      return null;
    }
    function o(a, b) {
      a = Array.isArray(a) ? a : [a];
      for (var c = 0; c < a.length; c++) {
        var d = b.DO_NOT_USE_queryFirstNode(a[c]);
        if (d) return d;
      }
      return null;
    }
    function b(a, b, c) {
      c = c || {};
      var d = c.preventScroll,
        e = c.focusWithoutUserIntent;
      c = c.focusWithAutoFocus;
      a = o(a, b);
      a != null &&
        p(a, {
          preventScroll: d,
          focusWithoutUserIntent: e,
          focusWithAutoFocus: c,
        });
    }
    function d() {
      return h;
    }
    function e(a) {
      return a._focusWithAutoFocus === !0;
    }
    function p(a, b) {
      b = b || {};
      var c = b.preventScroll,
        d = b.focusWithoutUserIntent;
      b = b.focusWithAutoFocus;
      if (a !== null) {
        j || ((j = !0), l());
        var e = a._tabIndexState;
        if (e && e.canTab === !1) return;
        e = e ? e.value : a.tabIndex;
        a.tabIndex = -1;
        var f = h;
        c = c || !1;
        b === !0 &&
          ((a._focusWithAutoFocus = !0),
          window.setTimeout(function () {
            a._focusWithAutoFocus = !1;
          }, k));
        try {
          h = d || !1;
          b = a.__lexicalEditor;
          if (b !== void 0) b.focus();
          else if (!c) t(a);
          else if (i) t(a, { preventScroll: !0 });
          else {
            d = m(a);
            t(a);
            n(d);
          }
        } catch (a) {
        } finally {
          h = f;
        }
        a.tabIndex = e;
      }
    }
    function f(a, b, d) {
      a = c("getTabbableNodes")(a, b);
      b = a[0];
      var e = a[2],
        f = a[3];
      a = a[4];
      a !== null && a !== e && b && p(b[f + 1], { preventScroll: d });
    }
    function q(a, b, d) {
      a = c("getTabbableNodes")(a, b);
      b = a[0];
      var e = a[1],
        f = a[3];
      a = a[4];
      a !== null && a !== e && b && p(b[f - 1], { preventScroll: d });
    }
    function r(a, b, d, e, f) {
      a = c("getTabbableNodes")(a, b);
      b = a[0];
      var g = a[1],
        h = a[2],
        i = a[3];
      a = a[4];
      if (a === null || b === null) return;
      a === h
        ? f != null
          ? f()
          : e === !0 && (p(g), d.preventDefault(), d.stopPropagation())
        : (p(b[i + 1]), d.preventDefault(), d.stopPropagation());
    }
    function s(a, b, d, e, f) {
      a = c("getTabbableNodes")(a, b);
      b = a[0];
      var g = a[1],
        h = a[2],
        i = a[3];
      a = a[4];
      if (a === null || b === null) return;
      a === g
        ? f != null
          ? f()
          : e === !0 && (p(h), d.preventDefault(), d.stopPropagation())
        : (p(b[i - 1]), d.preventDefault(), d.stopPropagation());
    }
    var t = function (a, b) {
      (a.focus || HTMLElement.prototype.focus).call(a, b);
    };
    g.getAllNodesFromOneOrManyQueries = a;
    g.getFirstNodeFromOneOrManyQueries = o;
    g.focusFirst = b;
    g.isFocusingWithoutUserIntent = d;
    g.wasElementAutoFocused = e;
    g.focusElement = p;
    g.focusNext = f;
    g.focusPrevious = q;
    g.focusNextContained = r;
    g.focusPreviousContained = s;
  },
  98
);
__d(
  "FocusRegionType",
  ["$InternalEnum", "react"],
  function (a, b, c, d, e, f, g) {
    d("react");
    a = b("$InternalEnum").Mirrored(["Nearest", "First"]);
    g.RecoverFocusStrategy = a;
  },
  98
);
__d(
  "ReactKeyboardEvent.react",
  ["ReactUseEvent.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useEffect,
      i = { passive: !0 };
    function a(a, b) {
      var d = b.disabled,
        e = d === void 0 ? !1 : d,
        f = b.onKeyDown,
        g = b.onKeyUp,
        j = c("ReactUseEvent.react")("keydown"),
        k = c("ReactUseEvent.react")("keyup", i);
      h(
        function () {
          var b = a.current;
          b !== null &&
            (j.setListener(b, (!e && f) || null),
            k.setListener(b, (!e && g) || null));
        },
        [e, f, j, k, a, g]
      );
    }
    g.useKeyboard = a;
  },
  98
);
__d(
  "setElementCanTab",
  [],
  function (a, b, c, d, e, f) {
    c = Object.getOwnPropertyDescriptor(HTMLElement.prototype, "tabIndex");
    d = Object.getOwnPropertyDescriptor(SVGElement.prototype, "tabIndex");
    e = function (a) {
      return a;
    };
    var g = c ? c.set : e,
      h = d ? d.set : e;
    function i(a) {
      return a instanceof SVGElement ? h : g;
    }
    function a(a, b, c) {
      c === void 0 && (c = !1);
      var d = a._tabIndexState,
        e = i(a);
      if (!d) {
        b && c && a.tabIndex < 0 && (a.tabIndex = 0);
        var f = { value: a.tabIndex, canTab: b };
        a._tabIndexState = f;
        b || (a.tabIndex = -1);
        Object.defineProperty(a, "tabIndex", {
          enumerable: !1,
          configurable: !0,
          get: function () {
            return f.canTab ? f.value : -1;
          },
          set: function (a) {
            f.canTab && typeof e === "function" && e.call(this, a),
              (f.value = a);
          },
        });
      } else
        d.canTab !== b &&
          typeof e === "function" &&
          (e.call(a, b ? d.value : -1), (d.canTab = b));
    }
    function b(a) {
      var b = a._tabIndexState;
      if (!b) return a.tabIndex > 0;
      else return b.canTab;
    }
    f.setElementCanTab = a;
    f.canElementTab = b;
  },
  66
);
__d(
  "FocusRegion.react",
  [
    "ActiveFocusRegionUtilsContext",
    "FocusManager",
    "FocusRegionType",
    "ReactEventHookPropagation",
    "ReactFocusEvent.react",
    "ReactKeyboardEvent.react",
    "react",
    "setElementCanTab",
    "useUnsafeRef_DEPRECATED",
  ],
  function (a, b, c, d, e, f, g) {
    var h = d("react");
    e = d("react");
    var i = e.useCallback,
      j = e.useContext,
      k = e.useEffect,
      l = e.useLayoutEffect,
      m = e.useMemo,
      n = e.useRef;
    function o(a, b, c) {
      var e = document.activeElement;
      window.requestAnimationFrame(function () {
        document.activeElement === e &&
          d("FocusManager").focusElement(a, {
            preventScroll: b,
            focusWithoutUserIntent: c,
          });
      });
    }
    function p(a) {
      return a.offsetWidth === 0 && a.offsetHeight === 0;
    }
    var q = h.unstable_Scope,
      r = new Map();
    function a(a) {
      var b = a.autoRestoreFocus,
        e = a.autoFocusQuery,
        f = a.children,
        g = a.containFocusQuery,
        s = a.forwardRef,
        t = a.id,
        u = a.onEscapeFocusRegion,
        v = a.recoverFocusStrategy,
        w =
          v === void 0 ? d("FocusRegionType").RecoverFocusStrategy.Nearest : v,
        x = a.recoverFocusQuery;
      v = a.stopOnFocusWithinPropagation;
      var y = v === void 0 ? !0 : v,
        z = n(null),
        A = n(null),
        B = j(c("ActiveFocusRegionUtilsContext"));
      a = B === null && (b === !0 || u != null) ? document.activeElement : null;
      var C = c("useUnsafeRef_DEPRECATED")(a),
        D = (v = C.current) != null ? v : a,
        E = m(function () {
          return {
            lastFocused: null,
            scope: null,
            restorationFocusRegionItem: null,
            triggeredFocusRegionItems: new Set(),
          };
        }, []),
        F = i(
          function () {
            if (B != null) {
              var a = B.getActiveFocusRegion();
              if (a !== E) {
                if (E.restorationFocusRegionItem !== a) {
                  var b;
                  if (
                    (a == null ? void 0 : a.lastFocused) != null &&
                    !((b = z.current) == null
                      ? void 0
                      : b.containsNode(a.lastFocused))
                  )
                    a != null && a.triggeredFocusRegionItems.add(E),
                      (E.restorationFocusRegionItem = a);
                  else if (E.restorationFocusRegionItem == null) {
                    b = a == null ? void 0 : a.restorationFocusRegionItem;
                    E.restorationFocusRegionItem = b;
                    a != null &&
                      (b == null
                        ? void 0
                        : b.triggeredFocusRegionItems["delete"](a));
                    b == null ? void 0 : b.triggeredFocusRegionItems.add(E);
                    B.setActiveFocusRegion(E);
                    return;
                  }
                }
                (a === null ||
                  (a != null &&
                    E != null &&
                    a.lastFocused !== E.lastFocused)) &&
                  B.setActiveFocusRegion(E);
              }
            }
          },
          [B, E]
        ),
        G = n(null);
      v = i(
        function (a) {
          z.current = a;
          E.scope = a;
          var b = G.current;
          s && (s.current = a);
          b !== null && b !== t && r.get(b) === null && r["delete"](b);
          t != null &&
            (a !== null
              ? ((G.current = t), r.set(t, a))
              : r.get(t) === null && r["delete"](t));
        },
        [s, t, E]
      );
      v = d("ReactFocusEvent.react").useFocusWithin(
        v,
        m(
          function () {
            return {
              onBeforeBlurWithin: function (a) {
                var b = z.current;
                if (b !== null && x !== void 0) {
                  a.stopPropagation();
                  if (x === null) return;
                  a = a.target;
                  b = d("FocusManager").getAllNodesFromOneOrManyQueries(x, b);
                  if (b === null) return;
                  var c = b.indexOf(a);
                  a = a._tabIndexState;
                  A.current = {
                    detachedCanTab: a != null && a.canTab,
                    recoveryIndex: c,
                    recovery: b,
                  };
                }
              },
              onAfterBlurWithin: function () {
                var a = z.current,
                  b = A.current;
                A.current = null;
                var c = document.activeElement;
                if (
                  a !== null &&
                  x != null &&
                  b !== null &&
                  (c == null || c === document.body || !a.containsNode(c))
                ) {
                  c = !0;
                  var e = !0,
                    f = b.recovery,
                    g = b.recoveryIndex,
                    h = d("FocusManager").getAllNodesFromOneOrManyQueries(x, a);
                  if (h !== null && f !== null) {
                    var i = new Set(h),
                      j = new Set(f);
                    for (var k = g - 1; k >= 0; k--) {
                      var l = f[k];
                      if (i.has(l)) {
                        var m = h.indexOf(l);
                        m = m + 1;
                        if (m < h.length) {
                          m = h[m];
                          if (!j.has(m)) {
                            b.detachedCanTab &&
                              d("setElementCanTab").setElementCanTab(m, !0);
                            o(m, c, e);
                            return;
                          }
                        }
                        b.detachedCanTab &&
                          d("setElementCanTab").setElementCanTab(l, !0);
                        o(l, c, e);
                        return;
                      }
                    }
                    if (w === d("FocusRegionType").RecoverFocusStrategy.Nearest)
                      for (m = g + 1; m < f.length; m++) {
                        l = f[m];
                        if (i.has(l)) {
                          j = h.indexOf(l);
                          k = j - 1;
                          if (k >= 0) {
                            g = h[k];
                            b.detachedCanTab &&
                              d("setElementCanTab").setElementCanTab(g, !0);
                            o(g, c, e);
                            return;
                          }
                        }
                      }
                    l = d("FocusManager").getFirstNodeFromOneOrManyQueries(
                      x,
                      a
                    );
                    l &&
                      (b.detachedCanTab &&
                        d("setElementCanTab").setElementCanTab(l, !0),
                      o(l, c, e));
                  }
                }
              },
              onFocusWithin: function (a) {
                y &&
                  d("ReactEventHookPropagation").stopEventHookPropagation(
                    a,
                    "useFocusWithin"
                  ),
                  (E.lastFocused = a.target),
                  F();
              },
            };
          },
          [x, w, y, E, F]
        )
      );
      a = i(
        function () {
          var a = z.current,
            b = document.activeElement;
          if (e != null && a !== null && (!b || !a.containsNode(b))) {
            b = E.lastFocused;
            b != null && a.containsNode(b) && !p(b)
              ? d("FocusManager").focusElement(b, {
                  focusWithAutoFocus: !0,
                  focusWithoutUserIntent: !0,
                  preventScroll: !0,
                })
              : d("FocusManager").focusFirst(e, a, {
                  focusWithAutoFocus: !0,
                  focusWithoutUserIntent: !0,
                  preventScroll: !0,
                });
          }
        },
        [e, E]
      );
      l(a, [a]);
      k(a, [a]);
      var H = i(
          function (a, c) {
            c === void 0 && (c = !1);
            var e = z.current,
              f = document.activeElement,
              g = C.current;
            C.current = null;
            var h = a == null ? void 0 : a.triggeredFocusRegionItems,
              i = a == null ? void 0 : a.restorationFocusRegionItem;
            (h == null ? void 0 : h.size) &&
              h.forEach(function (a) {
                return (a.restorationFocusRegionItem = i);
              });
            a != null &&
              i != null &&
              (i.triggeredFocusRegionItems["delete"](a),
              (h == null ? void 0 : h.size) &&
                h.forEach(function (a) {
                  i.triggeredFocusRegionItems.add(a);
                }));
            E.lastFocused = null;
            h = B == null ? void 0 : B.getActiveFocusRegion();
            var j =
              h != null ? h.restorationFocusRegionItem : { lastFocused: g };
            h === a && (B == null ? void 0 : B.setActiveFocusRegion(i));
            g =
              (e !== null && f !== null && e.containsNode(f)) ||
              f == null ||
              f === document.body;
            if ((b === !0 || u != null) && g) {
              var k = function (a) {
                a === void 0 && (a = !1);
                if ((j == null ? void 0 : j.lastFocused) != null) {
                  var b = !0,
                    c = !0,
                    e = document.activeElement;
                  (a || e === null || e === document.body) &&
                    d("FocusManager").focusElement(j.lastFocused, {
                      preventScroll: b,
                      focusWithoutUserIntent: c,
                    });
                }
              };
              c
                ? k(c)
                : window.requestAnimationFrame(function () {
                    return k();
                  });
            }
          },
          [B, b, u, E]
        ),
        I = i(
          function () {
            H(E, !0), u && u();
          },
          [H, u, E]
        );
      d("ReactKeyboardEvent.react").useKeyboard(
        z,
        m(
          function () {
            return {
              onKeyDown: function (a) {
                if (g == null || a.key !== "Tab" || a.isDefaultPrevented())
                  return;
                var b = z.current;
                b !== null &&
                  (a.shiftKey
                    ? d("FocusManager").focusPreviousContained(
                        g,
                        b,
                        a,
                        !0,
                        u != null ? I : void 0
                      )
                    : d("FocusManager").focusNextContained(
                        g,
                        b,
                        a,
                        !0,
                        u != null ? I : void 0
                      ));
              },
            };
          },
          [g, I, u]
        )
      );
      l(
        function () {
          C.current = D;
          var a = E;
          return function () {
            H(a);
          };
        },
        [B, b, H, E, D]
      );
      return h.jsx(q, { ref: v, id: t, children: f });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function b(a, b, c) {
      a = r.get(a);
      if (a) {
        a = a.DO_NOT_USE_queryFirstNode(b);
        if (a !== null) {
          d("FocusManager").focusElement(a, { preventScroll: c });
          return a;
        }
      }
      return null;
    }
    g.FocusRegion = a;
    g.focusRegionById = b;
  },
  98
);
__d(
  "LayoutAnimationBoundaryContext",
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
  "LayoutAnimationEvents",
  ["$InternalEnum"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = "layoutAnimation";
    c = b("$InternalEnum").Mirrored(["Start", "Stop"]);
    f.LAYOUT_ANIMATION_EVENT = a;
    f.LayoutAnimationEventType = c;
  },
  66
);
__d(
  "calculateBaseContextualLayerPosition",
  ["Locale"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("Locale").isRTL();
    function a(a) {
      var b = a.align,
        c = a.contextRect,
        d = a.contextualLayerSize,
        e = a.fixed,
        f = a.offsetRect,
        g = a.position;
      a = a.screenRect;
      e = {
        height: void 0,
        position: e ? "fixed" : void 0,
        transform: "",
        width: void 0,
      };
      var i = 0,
        j = 0,
        k = 0,
        l = 0,
        m = (c.bottom + c.top) / 2,
        n = (c.left + c.right) / 2,
        o = h ? "start" : "end",
        p = h ? "end" : "start";
      switch (g) {
        case "above":
          j = c.top - f.top;
          l = "-100%";
          break;
        case "below":
          j = c.bottom - f.top;
          break;
        case p:
          i = c.left - f.left;
          k = "-100%";
          break;
        case o:
          i = c.right - f.left;
          break;
      }
      if (g === "start" || g === "end")
        switch (b) {
          case "start":
            j = c.top - f.top;
            break;
          case "middle":
            j = m - f.top;
            l = "-50%";
            break;
          case "end":
            j = c.bottom - f.top;
            l = "-100%";
            break;
          case "stretch":
            j = c.top - f.top;
            e.height = c.bottom - c.top + "px";
            break;
        }
      else if (g === "above" || g === "below")
        switch (b) {
          case p:
            i = c.left - f.left;
            break;
          case "middle":
            i = n - f.left;
            k = "-50%";
            break;
          case o:
            i = c.right - f.left;
            k = "-100%";
            break;
          case "stretch":
            i = c.left - f.left;
            e.width = c.right - c.left + "px";
            break;
        }
      f = 0;
      if (d != null)
        if (g === "start" || g === "end") {
          var q = null;
          switch (b) {
            case "start":
              q = c.top;
              break;
            case "middle":
              q = m - d.height / 2;
              break;
            case "end":
              q = c.bottom - d.height;
              break;
          }
          q != null &&
            (q < a.top
              ? (f = a.top - q)
              : q + d.height > a.bottom && (f = a.bottom - q - d.height));
          j += f;
        } else if (g === "above" || g === "below") {
          m = null;
          switch (b) {
            case p:
              m = c.left;
              break;
            case "middle":
              m = n - d.width / 2;
              break;
            case o:
              m = c.right - d.width;
              break;
          }
          m != null &&
            (m < a.left
              ? (f = a.left - m)
              : m + d.width > a.right && (f = a.right - m - d.width));
          i += f;
        }
      q = "";
      (i !== 0 || j !== 0) &&
        (q += "translate(" + Math.round(i) + "px, " + Math.round(j) + "px) ");
      (k !== 0 || l !== 0) && (q += "translate(" + k + ", " + l + ") ");
      e.transform = q;
      return { adjustment: f, style: e };
    }
    g["default"] = a;
  },
  98
);
__d(
  "focusScopeQueries",
  [],
  function (a, b, c, d, e, f) {
    function g(a, b) {
      return a === "h1" ||
        a === "h2" ||
        a === "h3" ||
        (b.role === "heading" &&
          (b["aria-level"] === 1 ||
            b["aria-level"] === 2 ||
            b["aria-level"] === 3)) ||
        b["aria-busy"] === !0 ||
        b.role === "progressbar"
        ? !0
        : !1;
    }
    function a(a, b) {
      return b.tabIndex === -1 &&
        !(
          b.disabled === !0 ||
          b.type === "hidden" ||
          b["aria-disabled"] === !0 ||
          b["aria-hidden"] === !0
        )
        ? !0
        : i(a, b);
    }
    function h(a) {
      return a.type !== "hidden" && a.type !== "file";
    }
    function b(a, b) {
      return a === "input" && h(b);
    }
    function i(a, b) {
      if (b.tabIndex === -1 || b.disabled === !0) return !1;
      if (b.tabIndex === 0 || b.contentEditable === !0) return !0;
      if (a === "a" || a === "area")
        return b.href != null && b.href !== "" && b.rel !== "ignore";
      return a === "input"
        ? h(b)
        : a === "button" ||
            a === "textarea" ||
            a === "select" ||
            a === "iframe" ||
            a === "embed";
    }
    b = [b, i];
    function j(a) {
      return a.offsetWidth === 0 && a.offsetHeight === 0;
    }
    function c(a, b, c) {
      return !j(c) && i(a, b);
    }
    function k(a, b) {
      return a === "td" ||
        a === "th" ||
        b.role === "gridcell" ||
        b.role === "columnheader" ||
        b.role === "rowheader"
        ? !0
        : !1;
    }
    function d(a, b) {
      return !k(a, b) && i(a, b);
    }
    var l = [g, i];
    function e(a, b) {
      return g(a, b) || i(a, b);
    }
    var m = function (a, b) {
      return b["data-focus-target"] === !0 &&
        (b["aria-busy"] === !0 || b.role === "progressbar")
        ? !0
        : !1;
    };
    f.headerAndSpinnerFocusScopeQuery = g;
    f.focusableScopeQuery = a;
    f.tabbableScopeQuery = i;
    f.inputFirstTabbbableScopeQuery = b;
    f.displayedTabbableScopeQuery = c;
    f.tableCellScopeQuery = k;
    f.tableCellTabbableContentScopeQuery = d;
    f.headerFirstTabbableSecondScopeQuery = l;
    f.headerOrTabbableScopeQuery = e;
    f.topLoadingScopeQuery = m;
  },
  66
);
__d(
  "getDefaultViewForNode",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      a = a === document ? document : a.ownerDocument;
      return a.defaultView;
    }
    f["default"] = a;
  },
  66
);
__d(
  "getComputedStyle",
  ["getDefaultViewForNode"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      var d = c("getDefaultViewForNode")(a);
      return d == null ? null : d.getComputedStyle(a, b);
    }
    g["default"] = a;
  },
  98
);
__d(
  "isElementFixedOrSticky",
  ["getComputedStyle"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b = a;
      while (b != null && b !== a.ownerDocument) {
        var d = c("getComputedStyle")(b);
        if (d == null) return !1;
        d = d.getPropertyValue("position");
        if (d === "fixed" || d === "sticky") return !0;
        b = b.parentElement;
      }
      return !1;
    }
    g["default"] = a;
  },
  98
);
__d(
  "useLayoutAnimationEvents",
  ["LayoutAnimationBoundaryContext", "LayoutAnimationEvents", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useContext,
      i = b.useEffect,
      j = b.useRef;
    function a(a) {
      var b = h(c("LayoutAnimationBoundaryContext")),
        e = j([]);
      i(
        function () {
          var c = (b == null ? void 0 : b.animationEventTargets) || [];
          c.forEach(function (b) {
            b = b.addListener(
              d("LayoutAnimationEvents").LAYOUT_ANIMATION_EVENT,
              a
            );
            e.current = [].concat(e.current, [b]);
          });
          return function () {
            e.current.forEach(function (a) {
              a.remove();
            }),
              (e.current = []);
          };
        },
        [a, b]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useResizeObserver",
  [
    "FBLogger",
    "ReactDOMComet",
    "gkx",
    "react",
    "resize-observer-polyfill",
    "uniqueID",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useLayoutEffect,
      j = b.useRef;
    function a(a) {
      var b = j(null),
        c = j(a);
      i(
        function () {
          c.current = a;
        },
        [a]
      );
      return h(function (d) {
        var a = function (a, b, d) {
          c.current && c.current(a, b, d);
        };
        d = d == null ? null : o(d, a);
        b.current && b.current();
        b.current = d;
      }, []);
    }
    var k = null,
      l = new Map();
    function m() {
      k == null && (k = new (c("resize-observer-polyfill"))(n));
      return k;
    }
    function n(a) {
      var b = new Map(),
        e = new Map(
          a.map(function (a) {
            var d = a.contentRect;
            if (c("gkx")("1470120")) {
              var e = b.get(a.target);
              if (e == null) {
                var f = w(a.target);
                b.set(a.target, f);
                d = f;
              } else d = e;
            }
            return [a.target, d];
          })
        ),
        f = new Set(l.keys());
      d("ReactDOMComet").unstable_batchedUpdates(function () {
        for (
          var a = e,
            b = Array.isArray(a),
            d = 0,
            a = b
              ? a
              : a[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var g;
          if (b) {
            if (d >= a.length) break;
            g = a[d++];
          } else {
            d = a.next();
            if (d.done) break;
            g = d.value;
          }
          g = g;
          var h = g[0];
          g = g[1];
          var i = l.get(h);
          if (i != null)
            for (
              var i = i,
                j = Array.isArray(i),
                k = 0,
                i = j
                  ? i
                  : i[
                      typeof Symbol === "function"
                        ? Symbol.iterator
                        : "@@iterator"
                    ]();
              ;

            ) {
              var m;
              if (j) {
                if (k >= i.length) break;
                m = i[k++];
              } else {
                k = i.next();
                if (k.done) break;
                m = k.value;
              }
              m = m;
              m = m[1];
              try {
                m(g, h, e);
              } catch (a) {
                c("FBLogger")("useResizeObserver").catching(a);
              }
            }
          else
            f.has(h) ||
              c("FBLogger")("useResizeObserver").mustfix(
                "ResizeObserver observed resizing of an element that it should not be observing"
              );
        }
      });
    }
    function o(a, b) {
      var d,
        e = c("uniqueID")();
      d = (d = l.get(a)) != null ? d : new Map();
      d.set(e, b);
      l.set(a, d);
      m().observe(a);
      return p(a, e);
    }
    function p(a, b) {
      return function () {
        var c = l.get(a);
        if (c == null) return;
        c["delete"](b);
        c.size === 0 && (m().unobserve(a), l["delete"](a));
      };
    }
    function q(a) {
      return parseFloat(a) || 0;
    }
    function r(a) {
      return (a =
        a == null
          ? void 0
          : (a = a.ownerDocument) == null
          ? void 0
          : a.defaultView) != null
        ? a
        : window;
    }
    function s(a, b, c, d) {
      return { x: a, y: b, width: c, height: d };
    }
    var t = s(0, 0, 0, 0);
    function u(a) {
      var b = ["top", "right", "bottom", "left"],
        c = {};
      for (var d = 0; d < b.length; d++) {
        var e = b[d],
          f = a["padding-" + e];
        c[e] = q(f);
      }
      return c;
    }
    function v(a) {
      for (
        var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
        d < b;
        d++
      )
        c[d - 1] = arguments[d];
      return c.reduce(function (b, c) {
        c = a["border-" + c + "-width"];
        return b + q(c);
      }, 0);
    }
    function w(a) {
      var b = a.clientWidth,
        c = a.clientHeight;
      if (!b && !c) return t;
      a = r(a).getComputedStyle(a);
      var d = u(a),
        e = d.left + d.right,
        f = d.top + d.bottom,
        g = q(a.width),
        h = q(a.height);
      a.boxSizing === "border-box" &&
        (Math.round(g + e) !== b && (g -= v(a, "left", "right") + e),
        Math.round(h + f) !== c && (h -= v(a, "top", "bottom") + f));
      return s(d.left, d.top, g, h);
    }
    f.exports = a;
  },
  34
);
__d(
  "BaseContextualLayer.react",
  [
    "BaseContextualLayerAnchorRoot.react",
    "BaseContextualLayerAnchorRootContext",
    "BaseContextualLayerAvailableHeightContext",
    "BaseContextualLayerContextSizeContext",
    "BaseContextualLayerDefaultContainer.react",
    "BaseContextualLayerLayerAdjustmentContext",
    "BaseContextualLayerOrientationContext",
    "BaseLinkNestedPressableContext",
    "BasePortal.react",
    "BaseScrollableAreaContext",
    "BaseViewportMarginsContext",
    "CometTextContext",
    "FocusRegion.react",
    "HiddenSubtreeContext",
    "LayoutAnimationBoundaryContext",
    "LayoutAnimationEvents",
    "Locale",
    "calculateBaseContextualLayerPosition",
    "focusScopeQueries",
    "getComputedStyle",
    "isElementFixedOrSticky",
    "mergeRefs",
    "react",
    "useLayoutAnimationEvents",
    "useResizeObserver",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
      j = b.useContext,
      k = b.useEffect,
      l = b.useImperativeHandle,
      m = b.useLayoutEffect,
      n = b.useMemo,
      o = b.useReducer,
      p = b.useRef,
      q = b.useState;
    function r(a) {
      a = a.getBoundingClientRect();
      return { bottom: a.bottom, left: a.left, right: a.right, top: a.top };
    }
    function s(a) {
      return (a =
        (a = a[a.length - 1]) == null
          ? void 0
          : (a = a.getDOMNode()) == null
          ? void 0
          : a.scrollTop) != null
        ? a
        : window.pageYOffset;
    }
    function t(a) {
      var b = c("getComputedStyle")(a);
      return b != null && b.getPropertyValue("position") !== "static"
        ? a
        : (a instanceof HTMLElement && a.offsetParent) ||
            a.ownerDocument.documentElement;
    }
    var u = 8;
    function v(a, b) {
      return a.bottom < b.top ||
        b.bottom < a.top ||
        a.right < b.left ||
        b.right < b.left
        ? null
        : {
            bottom: Math.min(a.bottom, b.bottom),
            left: Math.max(a.left, b.left),
            right: Math.min(a.right, b.right),
            top: Math.max(a.top, b.top),
          };
    }
    var w = d("Locale").isRTL(),
      aa = {
        root: {
          left: "xu96u03",
          marginRight: "xm80bdy",
          position: "x10l6tqk",
          top: "x13vifvy",
          $$css: !0,
        },
      };
    function ba(a) {
      return {
        adjustment: null,
        availableHeight: null,
        contextSize: null,
        isPositionIndeterminate: !1,
        position: a,
      };
    }
    function ca(a, b) {
      var c;
      switch (b.type) {
        case "determine_direction":
          if (
            a.position !== b.position ||
            a.availableHeight !== b.availableHeight
          )
            return babelHelpers["extends"]({}, a, {
              availableHeight: b.availableHeight,
              position: b.position,
            });
          break;
        case "reposition":
          if (
            a.adjustment !== b.adjustment ||
            ((c = a.contextSize) == null ? void 0 : c.height) !==
              ((c = b.contextSize) == null ? void 0 : c.height) ||
            ((c = a.contextSize) == null ? void 0 : c.width) !==
              ((c = b.contextSize) == null ? void 0 : c.width)
          )
            return babelHelpers["extends"]({}, a, {
              adjustment: b.adjustment,
              contextSize: b.contextSize,
              isPositionIndeterminate: !1,
            });
          break;
        case "position_indeterminate":
          return babelHelpers["extends"]({}, a, {
            isPositionIndeterminate: !0,
          });
        case "position_changed":
          if (a.position !== b.position)
            return babelHelpers["extends"]({}, a, { position: b.position });
          break;
      }
      return a;
    }
    function a(a, b) {
      var e = a.align,
        f = e === void 0 ? "start" : e;
      e = a.disableAutoAlign;
      var g = e === void 0 ? !1 : e;
      e = a.children;
      var x = a.containFocus;
      x = x === void 0 ? !1 : x;
      var y = a.customContainer;
      y = y === void 0 ? c("BaseContextualLayerDefaultContainer.react") : y;
      var z = a.disableAutoFlip,
        A = z === void 0 ? !1 : z;
      z = a.hidden;
      z = z === void 0 ? !1 : z;
      var B = a.imperativeRef,
        da = a.onEscapeFocusRegion,
        C = a.onIndeterminatePosition,
        ea = a.presencePayload,
        D = a.position,
        E = D === void 0 ? "below" : D;
      D = a.stopClickPropagation;
      D = D === void 0 ? !1 : D;
      var fa = a.xstyle,
        F = babelHelpers.objectWithoutPropertiesLoose(a, [
          "align",
          "disableAutoAlign",
          "children",
          "containFocus",
          "customContainer",
          "disableAutoFlip",
          "hidden",
          "imperativeRef",
          "onEscapeFocusRegion",
          "onIndeterminatePosition",
          "presencePayload",
          "position",
          "stopClickPropagation",
          "xstyle",
        ]);
      a = o(ca, E, ba);
      var G = a[0],
        ga = G.adjustment,
        ha = G.availableHeight,
        ia = G.contextSize,
        H = G.isPositionIndeterminate,
        I = G.position,
        J = a[1],
        K = j(c("BaseContextualLayerAnchorRootContext")),
        L = j(c("BaseScrollableAreaContext")),
        M = j(c("BaseViewportMarginsContext")),
        N = j(c("LayoutAnimationBoundaryContext"));
      G = q(!1);
      a = G[0];
      var O = G[1];
      G = j(c("HiddenSubtreeContext"));
      G = G.hidden;
      var P = G || z,
        Q = p(null),
        R = p(null),
        S = i(
          function () {
            return F.context_DEPRECATED == null && F.contextRef != null
              ? F.contextRef.current
              : F.context_DEPRECATED;
          },
          [F.contextRef, F.context_DEPRECATED]
        ),
        T = i(
          function () {
            var a = document.documentElement;
            if (a == null) return;
            return {
              bottom: a.clientHeight - M.bottom - u,
              left: M.left + u,
              right: a.clientWidth - M.right - u,
              top: M.top + u,
            };
          },
          [M.bottom, M.left, M.right, M.top]
        ),
        U = i(
          function () {
            var a = Q.current,
              b = S(),
              c = T();
            if (a == null || b == null || c == null) return;
            b = r(b);
            a = r(a);
            var d = a.bottom - a.top;
            a = a.right - a.left;
            var e = w ? "start" : "end",
              f = w ? "end" : "start",
              g = I,
              h = null;
            A ||
              (I === "above" || I === "below"
                ? I === "above" && b.top - d < c.top && b.bottom + d < c.bottom
                  ? (g = "below")
                  : I === "above" && s(L) + b.top < d
                  ? (g = "below")
                  : I === "below" &&
                    b.bottom + d > c.bottom &&
                    b.top - d > c.top &&
                    (g = "above")
                : (I === "start" || I === "end") &&
                  (I === f && b.left - a < c.left && b.right + a < c.right
                    ? (g = e)
                    : I === e &&
                      b.right + a > c.right &&
                      b.left - a > c.left &&
                      (g = f)));
            (g === "above" || g === "below") &&
              (h = g === "above" ? b.top - c.top : c.bottom - b.bottom);
            R.current = { height: d, width: a };
            J({ availableHeight: h, position: g, type: "determine_direction" });
          },
          [S, T, A, I]
        ),
        V = i(
          function () {
            var a = document.documentElement,
              b = K.current,
              d = T(),
              e = S();
            if (a == null || b == null || d == null || e == null) return;
            var h = t(b);
            if (h == null) return;
            b = c("isElementFixedOrSticky")(b);
            b = !b && e.nodeType === 1 && c("isElementFixedOrSticky")(e);
            e = L.map(function (a) {
              return a.getDOMNode();
            })
              .filter(Boolean)
              .filter(function (a) {
                return h.contains(a);
              })
              .reduce(function (a, b) {
                return a != null ? v(a, r(b)) : null;
              }, r(e));
            if (e == null || (e.left === 0 && e.right === 0)) {
              J({ type: "position_indeterminate" });
              C && C();
              return;
            }
            a = b
              ? {
                  bottom: a.clientHeight,
                  left: 0,
                  right: a.clientWidth,
                  top: 0,
                }
              : r(h);
            b = c("calculateBaseContextualLayerPosition")({
              align: f,
              contextRect: e,
              contextualLayerSize: g ? null : R.current,
              fixed: b,
              offsetRect: a,
              position: I,
              screenRect: d,
            });
            a = b.adjustment;
            d = b.style;
            b = Q.current;
            if (b != null) {
              var i = Object.keys(d);
              for (var j = 0; j < i.length; j++) {
                var k = i[j],
                  l = d[k];
                l != null
                  ? b.style.setProperty(k, l)
                  : b.style.removeProperty(k);
              }
            }
            J({
              adjustment: a,
              contextSize: {
                height: e.bottom - e.top,
                width: e.right - e.left,
              },
              type: "reposition",
            });
          },
          [K, T, S, L, g, f, I, C]
        ),
        W = i(
          function (a) {
            a === d("LayoutAnimationEvents").LayoutAnimationEventType.Start &&
              O(!0),
              a === d("LayoutAnimationEvents").LayoutAnimationEventType.Stop &&
                (O(!1), V());
          },
          [V, O]
        );
      m(
        function () {
          N != null &&
            N.getIsAnimating() &&
            W(d("LayoutAnimationEvents").LayoutAnimationEventType.Start);
        },
        [N, W]
      );
      c("useLayoutAnimationEvents")(W);
      l(
        B,
        function () {
          return {
            reposition: function (a) {
              if (!P) {
                a = a || {};
                a = a.autoflip;
                a = a === void 0 ? !1 : a;
                a && U();
                V();
              }
            },
          };
        },
        [P, V, U]
      );
      var X = c("useResizeObserver")(function (a) {
          var b = a.height;
          a = a.width;
          R.current = { height: b, width: a };
        }),
        Y = p(E);
      m(function () {
        E !== Y.current &&
          (J({ position: E, type: "position_changed" }),
          P || (U(), V()),
          (Y.current = E));
      });
      var Z = i(
        function (a) {
          (Q.current = a), a != null && !P && (U(), V());
        },
        [P, V, U]
      );
      k(
        function () {
          if (P) return;
          var a = function () {
            U(), V();
          };
          window.addEventListener("resize", a);
          return function () {
            window.removeEventListener("resize", a);
          };
        },
        [P, V, U]
      );
      k(
        function () {
          if (P) return;
          var a = L.map(function (a) {
            return a.getDOMNode();
          }).filter(Boolean);
          if (a.length > 0) {
            a.forEach(function (a) {
              return a.addEventListener("scroll", V, { passive: !0 });
            });
            return function () {
              a.forEach(function (a) {
                return a.removeEventListener("scroll", V, { passive: !0 });
              });
            };
          }
        },
        [P, V, L]
      );
      k(
        function () {
          if (window.addEventListener == null || P) return;
          window.addEventListener("scroll", V, { passive: !0 });
          return function () {
            window.removeEventListener("scroll", V, { passive: !0 });
          };
        },
        [P, V]
      );
      G = n(
        function () {
          return c("mergeRefs")(Z, X, b);
        },
        [Z, X, b]
      );
      B = n(
        function () {
          return { align: f, position: I };
        },
        [f, I]
      );
      var $ = z || H;
      return h.jsx(c("BasePortal.react"), {
        target: K.current,
        children: h.jsx(y, {
          hidden: z || H || a,
          presencePayload: ea,
          ref: G,
          stopClickPropagation: D,
          testid: void 0,
          xstyle: [aa.root, fa],
          children: h.jsx(d("FocusRegion.react").FocusRegion, {
            autoFocusQuery:
              !$ && x
                ? d("focusScopeQueries").headerFirstTabbableSecondScopeQuery
                : null,
            autoRestoreFocus: !$,
            containFocusQuery:
              !$ && x ? d("focusScopeQueries").tabbableScopeQuery : null,
            onEscapeFocusRegion: da,
            recoverFocusQuery: $
              ? null
              : d("focusScopeQueries").headerFirstTabbableSecondScopeQuery,
            children: h.jsx(c("BaseContextualLayerAnchorRoot.react"), {
              children: h.jsx(
                c("BaseContextualLayerContextSizeContext").Provider,
                {
                  value: ia,
                  children: h.jsx(
                    c("BaseContextualLayerLayerAdjustmentContext").Provider,
                    {
                      value: ga,
                      children: h.jsx(
                        c("BaseContextualLayerAvailableHeightContext").Provider,
                        {
                          value: ha,
                          children: h.jsx(
                            c("BaseContextualLayerOrientationContext").Provider,
                            {
                              value: B,
                              children: h.jsx(
                                c("BaseLinkNestedPressableContext").Provider,
                                {
                                  value: !1,
                                  children: h.jsx(
                                    c("CometTextContext").Provider,
                                    { value: null, children: e }
                                  ),
                                }
                              ),
                            }
                          ),
                        }
                      ),
                    }
                  ),
                }
              ),
            }),
          }),
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
  "CometLinkTrackingUtils.facebook",
  ["ConstUriUtils", "isFacebookURI"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, e) {
      if (a != null && a !== "#" && (e.length || b.length)) {
        var f = d("ConstUriUtils").getUri(a);
        if (f != null) {
          if (!c("isFacebookURI")(f)) return a;
          e.length && (f = f.addQueryParam("__cft__", e));
          b.length && f != null && (f = f.addQueryParam("__tn__", b.join("")));
          return f != null ? f.toString() : a;
        }
      }
      return a;
    }
    g.decorateHrefWithTrackingInfo = a;
  },
  98
);
__d(
  "BasePopoverLayerVisibility.react",
  ["HiddenSubtreePassiveContext", "emptyFunction", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    b = d("react");
    var h = b.useContext,
      i = b.useEffect,
      j = b.useRef;
    function a(a) {
      var b = a.children;
      a = a.onLayerDetached;
      var d = a === void 0 ? c("emptyFunction") : a;
      a = h(c("HiddenSubtreePassiveContext"));
      var e = a.getCurrentState,
        f = a.subscribeToChanges,
        g = j(!e().hiddenOrBackgrounded);
      i(
        function () {
          var a = f(function (a) {
            a = a.hiddenOrBackgrounded;
            a = !a;
            g.current !== a && !a && d();
            g.current = a;
          });
          return function () {
            a.remove();
          };
        },
        [d, f]
      );
      var k = j(d);
      i(
        function () {
          k.current = d;
        },
        [d]
      );
      var l = j(null);
      i(function () {
        l.current != null &&
          (window.clearTimeout(l.current), (l.current = null));
        return function () {
          var a = k.current;
          l.current = window.setTimeout(a, 1);
        };
      }, []);
      return b;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometEventTimings",
  ["performanceNavigationStart", "performanceNow"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b = c("performanceNow")(),
        d = null,
        e =
          document.createEvent("MouseEvent").timeStamp <
          c("performanceNavigationStart")();
      e && a != null && a < b && ((d = b - a), (b = a));
      return [b, d];
    }
    g.getCurrentQueueTime = a;
  },
  98
);
__d(
  "CometHeroInteractionContextPassthrough.react",
  ["hero-tracing-placeholder"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = d(
      "hero-tracing-placeholder"
    ).HeroInteractionContextPassthrough;
  },
  98
);
__d(
  "CometHeroInteractionWithDiv.react",
  ["LegacyHidden", "cr:1011783", "react", "stylex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    a = function (a, b) {
      var d = a.children,
        e = a.hidden,
        f = a.htmlAttributes,
        g = a.pageletAriaProps;
      a = a.xstyle;
      return h.jsx(c("LegacyHidden"), {
        htmlAttributes: babelHelpers["extends"](
          {
            className: c("stylex")(a),
            onMouseLeave: f == null ? void 0 : f.onMouseLeave,
            style: f == null ? void 0 : f.style,
          },
          g
        ),
        mode: e === !0 ? "hidden" : "visible",
        ref: b,
        children: d,
      });
    };
    f = (e = b("cr:1011783")) != null ? e : h.forwardRef(a);
    g["default"] = f;
  },
  98
);
__d(
  "useCometTailLoadPageletTracker",
  [
    "IntersectionObserver",
    "cr:1703077",
    "intersectionObserverEntryIsIntersecting",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    e = d("react");
    var h = e.useCallback,
      i = e.useRef;
    function a(a, d, e) {
      var f = i(null),
        g = i(!1),
        j = i(null);
      return h(
        function (h) {
          if (h == null && j.current) {
            j.current();
            j.current = null;
            return;
          }
          if (
            b("cr:1703077") &&
            e === !0 &&
            a != null &&
            d != null &&
            h &&
            f.current !== h
          ) {
            f.current = h;
            var i = function (e) {
                Array.prototype.forEach.call(e, function (e) {
                  if (
                    c("intersectionObserverEntryIsIntersecting")(e) &&
                    !g.current
                  ) {
                    g.current = !0;
                    if (b("cr:1703077")) {
                      var f = a + "_" + d,
                        h = !b("cr:1703077").alreadyFinishedMarkerKeys.has(f);
                      h && b("cr:1703077").endTailloadTracing(a, d, e.time, 2);
                      b("cr:1703077").alreadyFinishedMarkerKeys["delete"](f);
                    }
                  }
                });
              },
              k = new (c("IntersectionObserver"))(i);
            k.observe(h);
            j.current = function () {
              (f.current = null), k.disconnect();
            };
          }
        },
        [a, d, e]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "HeroTracingCoreDependencies",
  ["cr:3798", "cr:449", "useCometTailLoadPageletTracker"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      useTailLoadPageletTracker: c("useCometTailLoadPageletTracker"),
      UserTimingUtils: b("cr:3798"),
      VCTracker: b("cr:449"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "HeroLogger",
  [
    "HeroTracingCoreDependencies",
    "hero-tracing-placeholder",
    "interaction-tracing-metrics",
    "performanceNowSinceAppStart",
    "uuidv4",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = {},
      i = 0,
      j = new Map();
    function a(a) {
      var b = i++;
      j.set(b, a);
      return function () {
        j["delete"](b);
      };
    }
    function b(a, b) {
      a = (a = a) != null ? a : c("uuidv4")();
      if (
        d(
          "hero-tracing-placeholder"
        ).HeroPendingPlaceholderTracker.isInteractionActive(a)
      )
        return a;
      k(a, "Interaction Start", b);
      d(
        "hero-tracing-placeholder"
      ).HeroPendingPlaceholderTracker.addInteraction(a);
      return a;
    }
    function e(a) {
      d(
        "hero-tracing-placeholder"
      ).HeroPendingPlaceholderTracker.removeInteraction(a);
    }
    function f(a, b, c) {
      var e = d(
        "interaction-tracing-metrics"
      ).InteractionTracingMetricsCore.get(a);
      if (e != null && b === "ABORT") {
        d(
          "interaction-tracing-metrics"
        ).InteractionTracingMetricsCore.addAnnotationInt(a, "aborted", 1);
        d(
          "interaction-tracing-metrics"
        ).InteractionTracingMetricsCore.addAnnotation(
          a,
          "cancelType",
          "aborted:" + ((e = c) != null ? e : "unknown")
        );
      }
      d("interaction-tracing-metrics").InteractionTracingMetricsCore.complete(
        a
      );
    }
    function k(a, b, d, e) {
      a = b + a;
      h[a] = (a = d) != null ? a : c("performanceNowSinceAppStart")();
      (e == null ? void 0 : e.userTiming) !== !1 &&
        (c("HeroTracingCoreDependencies").UserTimingUtils == null
          ? void 0
          : c("HeroTracingCoreDependencies").UserTimingUtils.measureStart(b));
    }
    function l(a, b, e, f, g) {
      var h;
      e = (e = e) != null ? e : c("performanceNowSinceAppStart")();
      k(a, b, e);
      d(
        "hero-tracing-placeholder"
      ).HeroPendingPlaceholderTracker.addPlaceholder(
        a,
        b,
        g,
        e,
        (h = f) != null ? h : []
      );
      if (j.size) {
        var i = {
          placeholderID: b + a,
          interactionID: a,
          spanUUID: b,
          startTime: e,
          pageletStack: f,
          description: g,
        };
        j.forEach(function (a) {
          a.onStart(i);
        });
      }
    }
    function m(a, b, e, f, g, i, k, l) {
      var m = g + a;
      m = h[m];
      k = (k = k) != null ? k : c("performanceNowSinceAppStart")();
      m != null && o(a, b, e, f, m, k, i, l);
      if (j.size) {
        var n = {
          placeholderID: g + a,
          interactionID: a,
          pageletStack: b,
          spanType: e,
          name: f,
          spanUUID: g,
          data: i,
          endTime: k,
        };
        j.forEach(function (a) {
          a.onEnd(n);
        });
      }
      d(
        "hero-tracing-placeholder"
      ).HeroPendingPlaceholderTracker.removePlaceholder(a, g);
    }
    function n(a, b, c, e, f, g, h, i) {
      m(a, b, c, e, f, g, h, i),
        d(
          "hero-tracing-placeholder"
        ).HeroPendingPlaceholderTracker.removePlaceholder(a, f);
    }
    function o(a, b, e, f, g, h, i, j) {
      var k;
      h === void 0 && (h = c("performanceNowSinceAppStart")());
      d("interaction-tracing-metrics").InteractionTracingMetricsCore.addSubspan(
        a,
        f,
        "HeroTracing",
        g,
        (k = h) != null ? k : c("performanceNowSinceAppStart")(),
        babelHelpers["extends"]({}, i, {
          pagelet: b[b.length - 1],
          pageletStack: b,
          spanType: e,
        })
      );
      (j == null ? void 0 : j.userTiming) !== !1 &&
        (c("HeroTracingCoreDependencies").UserTimingUtils == null
          ? void 0
          : c("HeroTracingCoreDependencies").UserTimingUtils.measureModern(
              f + ("[" + a.slice(0, 3) + "]"),
              { end: h, start: g },
              e
            ));
    }
    g.subscribeToPlaceholders = a;
    g.genHeroInteractionUUIDAndMarkStart = b;
    g.cleanupHeroInteraction = e;
    g.endHeroInteraction = f;
    g.markStart = k;
    g.markStartPlaceholder = l;
    g.markEnd = m;
    g.markEndPlaceholder = n;
    g.measure = o;
  },
  98
);
__d(
  "HeroTracingCoreConfig",
  ["gkx"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      alwaysMarkMutationRootAsVisualChange: c("gkx")("8232"),
      enableCascadingRenderDetector: c("gkx")("443"),
      enableHeroLoggingVerbose: c("gkx")("2954"),
      enableReactProfiling: c("gkx")("1407308"),
      logNestedReactUpdates: c("gkx")("678680") && c("gkx")("1902022"),
      addExistingPageletMountPoint: c("gkx")("4635"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "usePageletVCTracker",
  [
    "HeroTracingCoreConfig",
    "interaction-tracing-metrics",
    "performanceNowSinceAppStart",
    "react",
    "useStable",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useRef;
    function a(a) {
      var b = a.interactionUUID,
        e = a.isMutationRoot,
        f = a.observeTextMutation,
        g = a.pageletName,
        j = a.pageletType,
        k = a.vcCallback,
        l = a.alwaysMarkMutationRootAsVisualChange,
        m = c("useStable")(function () {
          return typeof WeakMap === "function" ? new WeakMap() : new Map();
        }),
        n = i(null);
      return h(
        function (a) {
          if (a == null) return;
          var h = m.has(a),
            i = m.get(a);
          i == null && ((i = c("performanceNowSinceAppStart")()), m.set(a, i));
          var o,
            p =
              b != null
                ? d(
                    "interaction-tracing-metrics"
                  ).InteractionTracingMetricsCore.get(b)
                : null;
          b != null &&
            n.current !== b &&
            p &&
            p.vcTracker &&
            ((o = p.vcTracker),
            e === !0 &&
              (f != null && (o.config.observeTextMutation = f),
              h && l === !1 ? o.observeMutation(a) : o.addMutationRoot(a)));
          i =
            h &&
            c("HeroTracingCoreConfig").addExistingPageletMountPoint &&
            p != null &&
            p.start > i;
          p = i && p != null ? p.start : c("performanceNowSinceAppStart")();
          if (b != null && (!h || i)) {
            d(
              "interaction-tracing-metrics"
            ).InteractionTracingMetricsCore.addMountPoint(b, p, g);
            (h = o) == null ? void 0 : h.trackPagelet(a, g, p, k, j);
          }
          n.current = b;
        },
        [l, b, e, f, g, j, m, k]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useHeroTracingDOMTracking",
  ["HeroTracingCoreDependencies", "mergeRefs", "react", "usePageletVCTracker"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useMemo;
    a = function (a) {
      var b = a.vcCallback,
        d = a.isMutationRoot,
        e = a.interactionUUID,
        f = a.name,
        g = a.pageletName,
        i = a.observeTextMutation,
        j = a.pageletType,
        k = a.position,
        l = a.trackTailLoad;
      a = a.alwaysMarkMutationRootAsVisualChange;
      var m = c("usePageletVCTracker")({
          interactionUUID: e,
          isMutationRoot: d,
          observeTextMutation: i,
          pageletName: f,
          pageletType: j,
          vcCallback: b,
          alwaysMarkMutationRootAsVisualChange: a,
        }),
        n = c("HeroTracingCoreDependencies").useTailLoadPageletTracker(g, k, l);
      return h(
        function () {
          return c("mergeRefs")(m, n);
        },
        [m, n]
      );
    };
    g["default"] = a;
  },
  98
);
__d(
  "HeroTracingPlatformDependencies",
  ["LegacyHidden", "useHeroTracingDOMTracking"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      HostInstanceTrackableComponent: c("LegacyHidden"),
      useHostInstanceTracking: c("useHeroTracingDOMTracking"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "foregroundRequestAnimationFrame",
  [
    "Visibility",
    "cancelAnimationFrame",
    "clearTimeout",
    "requestAnimationFrame",
    "setTimeout",
  ],
  function (a, b, c, d, e, f, g) {
    function a(a) {
      if (c("Visibility").isHidden()) {
        var b = c("setTimeout")(a, 0);
        return function () {
          c("clearTimeout")(b);
        };
      } else {
        var d = c("requestAnimationFrame")(a);
        return function () {
          c("cancelAnimationFrame")(d);
        };
      }
    }
    g.foregroundRequestAnimationFrame = a;
  },
  98
);
__d(
  "objectEntries",
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      return Object.entries(a);
    }
    f["default"] = a;
  },
  66
);
__d(
  "useHeroCascadingRenderDetector",
  ["HeroTracingCoreDependencies", "useStable"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = (function () {
      function a() {
        this.$1 = new Map();
      }
      var b = a.prototype;
      b.logRender = function (a, b, c, d) {
        a = this.$2(a);
        a.set(b, { isNested: c === "nested-update", renderDuration: d });
      };
      b.logCommit = function (a, b, c, d) {
        a = this.$2(a);
        var e = a.get(b);
        if (e == null || c !== "nested-update") return;
        a.set(
          b,
          babelHelpers["extends"]({}, e, { isNested: !0, layoutDuration: d })
        );
      };
      b.logPostCommit = function (a, b, c, d) {
        a = this.$2(a);
        var e = a.get(b);
        if (e == null || c !== "nested-update") return;
        a.set(
          b,
          babelHelpers["extends"]({}, e, { effectDuration: d, isNested: !0 })
        );
      };
      b.getPageletReport = function (a, b) {
        var d = this.$2(a);
        if (d.size === 0) return;
        var e = {
            cascadingRenderCount: 0,
            cascadingRenderTotalDuration: 0,
            maxChainedCascadingRenderCount: 0,
          },
          f = Array.from(d.keys()).reverse(),
          g = !1,
          h = 0;
        for (
          var f = f,
            i = Array.isArray(f),
            j = 0,
            f = i
              ? f
              : f[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var k, l;
          if (i) {
            if (j >= f.length) break;
            l = f[j++];
          } else {
            j = f.next();
            if (j.done) break;
            l = j.value;
          }
          l = l;
          if (l > b) continue;
          k = (k = d.get(l)) != null ? k : {};
          var m = k.effectDuration;
          m = m === void 0 ? 0 : m;
          var n = k.isNested;
          n = n === void 0 ? !1 : n;
          var o = k.layoutDuration;
          o = o === void 0 ? 0 : o;
          k = k.renderDuration;
          k = k === void 0 ? 0 : k;
          n &&
            ((e.cascadingRenderCount += 1),
            (e.cascadingRenderTotalDuration += m + k + o));
          c("HeroTracingCoreDependencies").UserTimingUtils != null &&
            n &&
            c("HeroTracingCoreDependencies").UserTimingUtils.measureModern(
              "\u26a0\ufe0f " + a + " [cascading commit block]",
              { end: l + k + o + m, start: l },
              "ReactCascadingRender"
            );
          n && g
            ? h++
            : ((e.maxChainedCascadingRenderCount = Math.max(
                h,
                e.maxChainedCascadingRenderCount
              )),
              (h = 0));
          g = n;
        }
        return e;
      };
      b.cleanup = function (a) {
        this.$1["delete"](a);
      };
      b.$2 = function (a) {
        if (this.$1.has(a)) return this.$1.get(a);
        else {
          var b = new Map();
          this.$1.set(a, b);
          return b;
        }
      };
      return a;
    })();
    function a() {
      return c("useStable")(function () {
        return new h();
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "HeroInteraction.react",
  [
    "ExecutionEnvironment",
    "HeroLogger",
    "HeroPagelet.react",
    "HeroTracingCoreConfig",
    "HeroTracingCoreDependencies",
    "HeroTracingPlatformDependencies",
    "HiddenSubtreePassiveContext",
    "Promise",
    "PromiseAnnotate",
    "RelayProfilerContext",
    "clearImmediate",
    "foregroundRequestAnimationFrame",
    "hero-tracing-placeholder",
    "interaction-tracing-metrics",
    "objectEntries",
    "objectValues",
    "performanceNowSinceAppStart",
    "react",
    "setImmediateAcrossTransitions",
    "setTimeoutAcrossTransitions",
    "useHeroCascadingRenderDetector",
    "useStable",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    e = d("react");
    var i = e.useCallback,
      j = e.useContext,
      k = e.useEffect,
      l = e.useLayoutEffect,
      m = e.useMemo,
      n = e.useRef,
      o = c("HeroTracingCoreConfig").enableCascadingRenderDetector
        ? c("useHeroCascadingRenderDetector")
        : function () {
            return null;
          },
      p = "Interaction Start",
      q = "root",
      r = { userTiming: !1 },
      s = new Set();
    function t(a, b) {
      d("HeroLogger").markStart(a, b);
    }
    function u(a, b, c, e) {
      d("HeroLogger").markStartPlaceholder(a, b, void 0, c, e);
    }
    function v(a, b, e, f) {
      d("HeroLogger").markEnd(
        a,
        e,
        "SuspensePromise",
        "Promise Wait: " + f,
        b,
        void 0,
        void 0,
        c("HeroTracingCoreConfig").enableHeroLoggingVerbose ? void 0 : r
      );
    }
    function w(a, b, e, f) {
      d("HeroLogger").markEndPlaceholder(
        a,
        e,
        "PlaceholderWait",
        "Placeholder Wait: " + f,
        b,
        void 0,
        void 0,
        c("HeroTracingCoreConfig").enableHeroLoggingVerbose ? void 0 : r
      );
    }
    function x(a, b, e) {
      d(
        "interaction-tracing-metrics"
      ).InteractionTracingMetricsCore.addHeroRelay(b, {
        pageletStack: e,
        queries: a,
      });
      for (
        var a = a,
          f = Array.isArray(a),
          g = 0,
          a = f
            ? a
            : a[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        var h, i;
        if (f) {
          if (g >= a.length) break;
          i = a[g++];
        } else {
          g = a.next();
          if (g.done) break;
          i = g.value;
        }
        i = i;
        d("HeroLogger").measure(
          b,
          e,
          "Relay",
          i.name,
          i.start,
          i.end,
          {
            full_duration:
              (((h = i.end) != null ? h : c("performanceNowSinceAppStart")()) -
                i.start) /
              1e3,
            is_preloaded: i.isPreloaded === !0,
          },
          c("HeroTracingCoreConfig").enableHeroLoggingVerbose ? void 0 : r
        );
        for (h = 0; h < i.flushes.length; h++) {
          var j = i.flushes[h];
          d("HeroLogger").measure(
            b,
            e,
            "RelayFlush",
            i.name + "(" + j.label + ")",
            i.start,
            j.time,
            {
              flush: j.label,
              queryName: i.name,
              full_duration: (j.time - i.start) / 1e3,
              is_preloaded: i.isPreloaded === !0,
            },
            c("HeroTracingCoreConfig").enableHeroLoggingVerbose ? void 0 : r
          );
        }
      }
    }
    function y(a, b, c) {
      d(
        "interaction-tracing-metrics"
      ).InteractionTracingMetricsCore.addHeroBootload(b, {
        moduleIDs: Array.from(a),
        pageletStack: c,
      });
    }
    function z(a) {
      if (!a) return "No placeholder";
      var b = a.boundaryName != null ? "@" + a.boundaryName : "";
      a =
        d(
          "hero-tracing-placeholder"
        ).HeroPlaceholderUtils.createThenableDescription(a.thenables) ||
        "No Promises";
      return a + b;
    }
    function A(a, b) {
      if (a == null) return null;
      var d = {
        commitCount: 0,
        lastBaseDuration: 0,
        maxBaseDuration: 0,
        totalActualDuration: 0,
        totalCommitDuration: 0,
        totalPostCommitDuration: 0,
        zeroDurationCommitCount: 0,
        zeroDurationPostCommitCount: 0,
      };
      for (
        var a = c("objectEntries")(a),
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
        var h = g[0];
        g = g[1];
        if (h > b) break;
        h = g.actualDuration;
        h = h === void 0 ? 0 : h;
        var i = g.baseDuration;
        i = i === void 0 ? 0 : i;
        var j = g.commitDuration;
        j = j === void 0 ? 0 : j;
        var k = g.postCommitDuration;
        k = k === void 0 ? 0 : k;
        d.commitCount++;
        g.commitDuration === 0 && d.zeroDurationCommitCount++;
        g.postCommitDuration === 0 && d.zeroDurationPostCommitCount++;
        d.maxBaseDuration = Math.max(d.maxBaseDuration, i);
        d.lastBaseDuration = i;
        d.totalActualDuration += h;
        d.totalCommitDuration += j;
        d.totalPostCommitDuration += k;
      }
      return d;
    }
    function a(a, e) {
      var f,
        g = a.children,
        B = a.hidden,
        C = a.htmlAttributes,
        D = a.interactionDesc,
        E = a.interactionUUID,
        F = a.observeTextMutation,
        G = a.pageletName,
        H = a.renderTrackedDOMElement;
      a = a.alwaysMarkMutationRootAsVisualChange;
      var I = j(d("hero-tracing-placeholder").HeroInteractionContext.Context),
        J = j(d("hero-tracing-placeholder").HeroInteractionIDContext),
        K = n(null),
        L = n(null),
        M = j(c("HiddenSubtreePassiveContext")),
        N = (D = D) != null ? D : "No Description",
        O = n({}),
        P = n({}),
        Q = n({}),
        R = n(null),
        aa = n(J),
        S = c("useStable")(
          d("hero-tracing-placeholder").HeroPlaceholderUtils.getSimpleUUID
        ),
        T = m(
          function () {
            var a;
            return [].concat(I.pageletStack, [(a = G) != null ? a : q]);
          },
          [I.pageletStack, G]
        ),
        U = n([]),
        V = n(new Set()),
        W = o(),
        X = i(function () {
          return c("objectValues")(O.current).some(function (a) {
            return a.shouldHold;
          });
        }, []),
        Y = i(
          function (a, b, c) {
            L.current !== a &&
              K.current == null &&
              !M.getCurrentState().hidden &&
              !X() &&
              (K.current = d(
                "foregroundRequestAnimationFrame"
              ).foregroundRequestAnimationFrame(function () {
                (K.current = null),
                  !M.getCurrentState().hidden &&
                    L.current !== a &&
                    !X() &&
                    ((L.current = a),
                    d("HeroLogger").markEnd(
                      a,
                      T,
                      "Interaction",
                      "Interaction Done: " + b,
                      p
                    ),
                    c !== a && d("HeroLogger").endHeroInteraction(a, "SUCCESS"),
                    I.unhold(a, a + "_" + S),
                    x(U.current, a, T),
                    y(V.current, a, T),
                    (U.current = []),
                    (V.current = new Set()));
              }));
          },
          [M, I, S, T, X]
        ),
        Z = i(
          function () {
            var a = R.current;
            a != null && Y(a.interactionUUID, a.interactionDesc, J);
          },
          [J, Y]
        ),
        $ = i(
          function (a, b, c) {
            var e;
            e =
              a != null &&
              ((e = d(
                "interaction-tracing-metrics"
              ).InteractionTracingMetricsCore.get(a.interactionUUID)) == null
                ? void 0
                : (e = e.annotations["int"]) == null
                ? void 0
                : e.heroNestedRootsFix) === 1;
            var f = R.current;
            f != null &&
              L.current !== f.interactionUUID &&
              (d("HeroLogger").markEnd(
                f.interactionUUID,
                T,
                "Interaction",
                "Interaction Aborted (" + b + "): " + f.interactionDesc,
                p
              ),
              I.unhold(f.interactionUUID, f.interactionUUID + "_" + S),
              c !== f.interactionUUID
                ? d("HeroLogger").endHeroInteraction(
                    f.interactionUUID,
                    "ABORT",
                    b
                  )
                : c != null &&
                  d(
                    "interaction-tracing-metrics"
                  ).InteractionTracingMetricsCore.addMetadata(
                    c,
                    "childInteractionAborted",
                    1
                  ),
              a !== null &&
                f.interactionUUID === a.interactionUUID &&
                (d("HeroLogger").genHeroInteractionUUIDAndMarkStart(
                  a.interactionUUID
                ),
                e ||
                  I.hold(
                    a.interactionUUID,
                    T,
                    "Sub Interaction:" + a.interactionDesc,
                    a.interactionUUID + "_" + S
                  )));
            f != null &&
              (x(U.current, f.interactionUUID, T),
              y(V.current, f.interactionUUID, T));
            U.current = [];
            V.current = new Set();
            L.current = null;
            K.current && K.current();
            K.current = null;
            R.current = a;
            aa.current = c;
            a !== null &&
              e &&
              I.hold(
                a.interactionUUID,
                T,
                "Sub Interaction:" + a.interactionDesc,
                a.interactionUUID + "_" + S
              );
          },
          [I, S, T]
        );
      D = n(null);
      k(
        function () {
          return function () {
            var a = function () {
              return $(null, "Unmount");
            };
            a();
          };
        },
        [$]
      );
      l(
        function () {
          var a = null;
          E != null && (a = { interactionDesc: N, interactionUUID: E });
          $(a, "New Interaction", J);
          E != null && Y(E, N, J);
        },
        [N, E, J, $, Y]
      );
      l(
        function () {
          if (E != null) {
            var a = M.getCurrentState().hidden,
              b = M.subscribeToChanges(function (b) {
                b = b.hidden;
                a !== b &&
                  ((a = b),
                  b
                    ? $({ interactionDesc: N, interactionUUID: E }, "Hidden")
                    : Y(E, N, J));
              });
            E != null && Y(E, N, J);
            return function () {
              return b.remove();
            };
          }
        },
        [M, E, N, $, Y, J]
      );
      D = m(
        function () {
          var a = {
            consumeBootload: function (a) {
              V.current.add(a);
            },
            hold: function (c, e, f, g, h) {
              f === void 0 && (f = "Hold");
              g =
                (g = g) != null
                  ? g
                  : d(
                      "hero-tracing-placeholder"
                    ).HeroPlaceholderUtils.getSimpleUUID();
              var i = new (b("Promise"))(function () {});
              d("PromiseAnnotate").setDisplayName(i, f);
              a.suspenseCallback(c, g, e, new Set([i]), h);
              a.registerPlaceholder(c, g, e);
              return g;
            },
            logHeroRender: function (a, b, e) {
              L.current !== a &&
                d("HeroLogger").markEnd(
                  a,
                  [].concat(e),
                  "HeroRendering",
                  "Hero Rendering: " + b,
                  p,
                  void 0,
                  void 0,
                  c("HeroTracingCoreConfig").enableHeroLoggingVerbose
                    ? void 0
                    : r
                );
            },
            logMetadata: function (a, b, c) {
              var d;
              c = c[c.length - 1];
              d = (d = P.current[c]) != null ? d : Object.create(null);
              b != null ? (d[a] = b) : delete d[a];
              P.current[c] = d;
            },
            logPageletVC: function (a, b, c, e, f) {
              var g = f[f.length - 1],
                h = P.current[g];
              h = h != null ? babelHelpers["extends"]({}, h) : void 0;
              h &&
                d(
                  "interaction-tracing-metrics"
                ).InteractionTracingMetricsCore.addMountPointMetadata(a, g, h);
              e != null &&
                d("HeroLogger").measure(
                  a,
                  [].concat(f),
                  "VCWithoutImage",
                  "VCWithoutImage: " + f[f.length - 1],
                  Math.min(b, e),
                  e,
                  h
                );
              if (c != null) {
                h = Object.assign(
                  (e = h) != null ? e : babelHelpers["extends"]({}, null),
                  A(Q.current[g], c),
                  W == null ? void 0 : W.getPageletReport(g, c)
                );
                Q.current[g] = {};
                W == null ? void 0 : W.cleanup(g);
                d("HeroLogger").measure(
                  a,
                  [].concat(f),
                  "VC",
                  "VC: " + f[f.length - 1],
                  Math.min(b, c),
                  c,
                  h
                );
              }
            },
            logReactCommit: function (a, b, d, e, f, g, h) {
              c("HeroTracingCoreDependencies").UserTimingUtils == null
                ? void 0
                : c(
                    "HeroTracingCoreDependencies"
                  ).UserTimingUtils.measureReactCommit(b, f, e);
              if (L.current !== a && g) {
                b = h[h.length - 1];
                W == null ? void 0 : W.logCommit(b, f, d, e);
                g = (a = Q.current[b]) != null ? a : Object.create(null);
                d = (h = g[f]) != null ? h : Object.create(null);
                d.commitDuration = e;
                g[f] = d;
                Q.current[b] = g;
              }
            },
            logReactPostCommit: function (a, b, d, e, f, g, h) {
              c("HeroTracingCoreDependencies").UserTimingUtils == null
                ? void 0
                : c(
                    "HeroTracingCoreDependencies"
                  ).UserTimingUtils.measureReactPostCommit(b, e);
              if (L.current !== a && g) {
                b = h[h.length - 1];
                W == null ? void 0 : W.logPostCommit(b, f, d, e);
                g = (a = Q.current[b]) != null ? a : Object.create(null);
                d = (h = g[f]) != null ? h : Object.create(null);
                d.postCommitDuration = e;
                g[f] = d;
                Q.current[b] = g;
              }
            },
            logReactRender: function (a, b, c, e, f, g, h, i, j) {
              if (L.current !== a) {
                d("HeroLogger").measure(
                  a,
                  [].concat(j),
                  "ReactRender",
                  "ReactRender: " + b,
                  e,
                  f,
                  { actualDuration: g, baseDuration: h, phase: c }
                );
                if (i) {
                  a = j[j.length - 1];
                  W == null ? void 0 : W.logRender(a, f, c, g);
                  e = (b = Q.current[a]) != null ? b : Object.create(null);
                  j = (i = e[f]) != null ? i : Object.create(null);
                  j.actualDuration = g;
                  j.baseDuration = h;
                  e[f] = j;
                  Q.current[a] = e;
                }
              }
            },
            pageletStack: I.pageletStack,
            registerPlaceholder: function (a, b, c) {
              var d = O.current[b];
              K.current && K.current();
              K.current = null;
              if (d != null) {
                d.shouldHold = !0;
                return;
              }
              d = new Set();
              O.current[b] = { pageletStack: c, shouldHold: !0, thenables: d };
              u(a, b, c, z(O.current[b]));
            },
            removePlaceholder: function (a, b) {
              var c = O.current[b] != null;
              if (!c) return;
              c = O.current[b];
              !c;
              delete O.current[b];
              Z();
              w(a, b, c.pageletStack, z(c));
            },
            suspenseCallback: function (a, b, e, f, g) {
              var h = O.current[b];
              g = {
                boundaryName: g,
                pageletStack: e,
                shouldHold:
                  (g = h == null ? void 0 : h.shouldHold) != null ? g : !1,
                thenables: f,
              };
              O.current[b] = g;
              g = z(g);
              h == null && u(a, b, e, g);
              f.forEach(function (b) {
                if (!s.has(b)) {
                  var f;
                  s.add(b);
                  c("ExecutionEnvironment").canUseDOM &&
                    c("setTimeoutAcrossTransitions")(function () {
                      s["delete"](b);
                    }, 6e4);
                  var g =
                      (f = d("PromiseAnnotate").getDisplayName(b)) != null
                        ? f
                        : "Promise",
                    h = d(
                      "hero-tracing-placeholder"
                    ).HeroPlaceholderUtils.getSimpleUUID();
                  t(a, h);
                  b.then(function () {
                    v(a, h, e, g);
                  });
                }
              });
              f = z(h);
              h != null && g !== f && (w(a, b, e, f), u(a, b, e, g));
            },
            unhold: function (b, c) {
              a.removePlaceholder(b, c);
            },
          };
          return a;
        },
        [W, I.pageletStack, Z]
      );
      var ba = m(function () {
        return {
          consumeBootload: function (a) {
            V.current.add(a);
          },
          retainQuery: function (a) {
            U.current.push(a);
          },
          wrapPrepareQueryResource: function (a) {
            return a();
          },
        };
      }, []);
      f = (f = G) != null ? f : q;
      return h.jsx(
        d("hero-tracing-placeholder").HeroInteractionContext.Context.Provider,
        {
          value: D,
          children: h.jsx(
            d("hero-tracing-placeholder").HeroInteractionIDContext.Provider,
            {
              value: E,
              children: h.jsx(
                d("hero-tracing-placeholder")
                  .HeroCurrentInteractionForLoggingContext.Provider,
                {
                  value: R,
                  children: h.jsx(c("RelayProfilerContext").Provider, {
                    value: ba,
                    children: h.jsx(c("HeroPagelet.react"), {
                      isMutationRoot: !0,
                      name: f,
                      observeTextMutation: F,
                      ref: e,
                      alwaysMarkMutationRootAsVisualChange:
                        (D = a) != null
                          ? D
                          : c("HeroTracingCoreConfig")
                              .alwaysMarkMutationRootAsVisualChange,
                      children: (function (b) {
                        function a(a, c) {
                          return b.apply(this, arguments);
                        }
                        a.toString = function () {
                          return b.toString();
                        };
                        return a;
                      })(function (a, b) {
                        return H
                          ? h.jsxs(h.Fragment, {
                              children: [H(a, g), h.jsx(b, {})],
                            })
                          : h.jsxs(
                              c("HeroTracingPlatformDependencies")
                                .HostInstanceTrackableComponent,
                              {
                                htmlAttributes: babelHelpers["extends"]({}, C),
                                mode: B === !0 ? "hidden" : "visible",
                                ref: a,
                                children: [h.jsx(b, {}), g],
                              }
                            );
                      }),
                    }),
                  }),
                }
              ),
            }
          ),
        }
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    a.displayName = "HeroInteraction";
    e = h.forwardRef(a);
    g["default"] = e;
  },
  98
);
__d(
  "HeroPagelet.react",
  [
    "HeroReactProfiler.react",
    "HeroTracingPlatformDependencies",
    "hero-tracing-placeholder",
    "interaction-tracing-metrics",
    "mergeRefs",
    "performanceNowSinceAppStart",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
      j = b.useContext,
      k = b.useMemo;
    function a(a, b) {
      var e = a.children,
        f = a.isMutationRoot,
        g = a.name,
        l = a.pageletName,
        m = a.observeTextMutation,
        n = a.pageletType,
        o = a.position,
        p = a.trackTailLoad;
      a = a.alwaysMarkMutationRootAsVisualChange;
      var q = j(d("hero-tracing-placeholder").HeroInteractionContext.Context),
        r = j(d("hero-tracing-placeholder").HeroInteractionIDContext),
        s = k(
          function () {
            return babelHelpers["extends"]({}, q, {
              pageletStack: [].concat(q.pageletStack, [g]),
            });
          },
          [q, g]
        ),
        t = k(
          function () {
            return c("performanceNowSinceAppStart")();
          },
          [r]
        ),
        u = i(
          function () {
            r != null &&
              (d(
                "interaction-tracing-metrics"
              ).InteractionTracingMetricsCore.addFirstMarkerPoint(
                r,
                "Queue_" + g,
                "VisualCompletion",
                t
              ),
              d(
                "interaction-tracing-metrics"
              ).InteractionTracingMetricsCore.addFirstMarkerPoint(
                r,
                "Render_" + g,
                "VisualCompletion",
                c("performanceNowSinceAppStart")()
              ));
            return null;
          },
          [r, g, t]
        ),
        v = i(
          function (a, b) {
            r != null && s.logPageletVC(r, t, a, b, s.pageletStack);
          },
          [r, s, t]
        ),
        w = c("HeroTracingPlatformDependencies").useHostInstanceTracking({
          vcCallback: v,
          isMutationRoot: f,
          interactionUUID: r,
          name: g,
          pageletName: l,
          observeTextMutation: m,
          pageletType: n,
          position: o,
          trackTailLoad: p,
          alwaysMarkMutationRootAsVisualChange: a,
        });
      v = k(
        function () {
          return c("mergeRefs")(w, b);
        },
        [w, b]
      );
      return h.jsx(
        d("hero-tracing-placeholder").HeroInteractionContext.Context.Provider,
        {
          value: s,
          children: h.jsx(c("HeroReactProfiler.react"), {
            id: g,
            isPagelet: !0,
            children: e(v, u),
          }),
        }
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    a.displayName = "HeroPagelet";
    e = h.forwardRef(a);
    g["default"] = e;
  },
  98
);
__d(
  "HeroReactProfiler.react",
  [
    "HeroTracingCoreConfig",
    "HeroTracingCoreDependencies",
    "addAnnotations",
    "hero-tracing-placeholder",
    "interaction-tracing",
    "interaction-tracing-metrics",
    "performanceNowSinceAppStart",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
      j = b.useContext;
    e = function (a) {
      a = a.children;
      return a;
    };
    e.displayName = "HeroReactProfilerNoOp";
    var k = 0;
    function l() {
      var a = k++;
      c("HeroTracingCoreDependencies").UserTimingUtils == null
        ? void 0
        : c("HeroTracingCoreDependencies").UserTimingUtils.measureModern(
            "Nested update " + a,
            { duration: 100, start: c("performanceNowSinceAppStart")() },
            "ReactNestedUpdate"
          );
      console.trace("nested update " + a);
    }
    function a(a) {
      var b = a.children,
        e = a.id,
        f = a.isPagelet,
        g = f === void 0 ? !1 : f;
      f = a.logDurationToQPL;
      var k = f === void 0 ? !1 : f,
        m = j(d("hero-tracing-placeholder").HeroInteractionContext.Context),
        n = j(d("hero-tracing-placeholder").HeroInteractionIDContext);
      a = i(
        function (a, b, e, f, h, i) {
          if (n == null) return;
          m.logReactRender(n, a, b, h, i, e, f, g, m.pageletStack);
          d(
            "interaction-tracing-metrics"
          ).InteractionTracingMetricsCore.addReactRender(n, a, h, i, e, f, b);
          k &&
            c("interaction-tracing")
              .InteractionTracingCore.getPendingInteractions()
              .forEach(function (b) {
                b = b.getTrace();
                if (b) {
                  var d,
                    f = a.replace(/_[0-9]+$/, "_{N}");
                  f = "ReactRenderDuration_" + f;
                  d =
                    ((d = (d = b.annotations["int"]) == null ? void 0 : d[f]) !=
                    null
                      ? d
                      : 0) + e;
                  c("addAnnotations")(b.annotations, {
                    int: ((b = {}), (b[f] = d), b),
                  });
                }
              });
        },
        [m, n, g, k]
      );
      f = i(
        function (a, b, c, d) {
          n != null && m.logReactCommit(n, a, b, c, d, g, m.pageletStack);
        },
        [m, n, g]
      );
      var o = i(
        function (a, b, c, d) {
          n != null && m.logReactPostCommit(n, a, b, c, d, g, m.pageletStack);
        },
        [m, n, g]
      );
      return h.jsx(h.Profiler, {
        id: e,
        onCommit: f,
        onNestedUpdateScheduled: c("HeroTracingCoreConfig")
          .logNestedReactUpdates
          ? l
          : null,
        onPostCommit: o,
        onRender: a,
        children: b,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    a.displayName = "HeroReactProfiler";
    b =
      h.Profiler != null && c("HeroTracingCoreConfig").enableReactProfiling
        ? a
        : e;
    g["default"] = b;
  },
  98
);
__d(
  "hero-tracing",
  [
    "HeroInteraction.react",
    "HeroLogger",
    "HeroPagelet.react",
    "HeroReactProfiler.react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    (g.HeroInteraction = c("HeroInteraction.react")),
      (g.HeroPagelet = c("HeroPagelet.react")),
      (g.HeroLogger = d("HeroLogger")),
      (g.HeroReactProfiler = c("HeroReactProfiler.react"));
  },
  98
);
__d(
  "HeroTracingDebugTracing",
  [
    "QPLEvent",
    "hero-tracing",
    "interaction-tracing-metrics",
    "performanceNowSinceAppStart",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 600,
      i = 150,
      j = 5;
    function k(a) {
      var b;
      b =
        a == null
          ? void 0
          : (b = a.annotations.string) == null
          ? void 0
          : b.tracePolicy;
      return (
        ((a = (a == null ? void 0 : a.qplEvent)
          ? d("QPLEvent").getMarkerId(a.qplEvent)
          : null) != null
          ? a
          : "unknown") +
        ":" +
        (typeof b === "string" ? b : "unknown")
      );
    }
    function l(a, b, c, e, f) {
      var g;
      if (c.interactionID !== a.traceId) g = "OtherInteraction";
      else if (b.has(c.placeholderID)) g = "LatePlaceholder";
      else if (!e) g = "IncompletePlaceholder";
      else return;
      b = {};
      b.type = g;
      (e == null ? void 0 : e.spanType) &&
        (b.spanType = e == null ? void 0 : e.spanType);
      if (g === "OtherInteraction") {
        var h = d(
          "interaction-tracing-metrics"
        ).InteractionTracingMetricsCore.get(c.interactionID);
        b.interactionType = k(h);
      }
      h = (h = e == null ? void 0 : e.endTime) != null ? h : f;
      f =
        (e = (f = e == null ? void 0 : e.name) != null ? f : c.description) !=
        null
          ? e
          : "[No Description]";
      d("interaction-tracing-metrics").InteractionTracingMetricsCore.addSubspan(
        a.traceId,
        g === "OtherInteraction" ? "OtherInteraction: " + f : f,
        g === "OtherInteraction" ? "HeroDebug" : "LatePlaceholder",
        c.startTime,
        Math.max(h, c.startTime),
        b
      );
    }
    var m = "LatePlaceholder";
    function a(a, b, e) {
      if (!(b.heroLatePlaceholderDetection || b.heroDebugTracing)) return;
      var f = a.getTraceId(),
        g = d("interaction-tracing-metrics").InteractionTracingMetricsCore.get(
          f
        );
      if (!g) return;
      var n = g,
        o = new Map(),
        p = new Map(),
        q = new Set(),
        r = 0,
        s = d("hero-tracing").HeroLogger.subscribeToPlaceholders({
          onStart: function (a) {
            if (a.interactionID !== f && !b.heroDebugTracing) return;
            a.interactionID === f &&
              n.completed != null &&
              q.add(a.placeholderID);
            o.set(a.placeholderID, a);
          },
          onEnd: function (a) {
            if (a.interactionID !== f && !b.heroDebugTracing) return;
            p.set(a.placeholderID, a);
          },
        });
      function t() {
        s(), a.unlockInteractionLogging(m);
      }
      function u() {
        var a = c("performanceNowSinceAppStart")(),
          e = new Set();
        o.forEach(function (b) {
          var c = p.get(b.placeholderID);
          b.interactionID !== f && e.add(b.interactionID);
          l(n, q, b, c, a);
        });
        b.heroDebugTracing &&
          e.forEach(function (b) {
            var c = d(
              "interaction-tracing-metrics"
            ).InteractionTracingMetricsCore.get(b);
            if (c) {
              d(
                "interaction-tracing-metrics"
              ).InteractionTracingMetricsCore.addSubspan(
                f,
                "OtherInteraction: " + k(c),
                "HeroDebug",
                Math.max(c.start, n.start),
                Math.min((c = c.completed) != null ? c : a, a),
                { otherInteractionID: b }
              );
            }
          });
        t();
      }
      function v() {
        r === 0 ||
        (r <= j &&
          Array.from(q).some(function (a) {
            return !p.has(a);
          }))
          ? (setTimeout(v, r === 0 ? h : i), r++)
          : u();
      }
      a.lockInteractionLogging(m);
      a.onCompleteSync(function () {
        if (!e()) {
          t();
          return;
        }
        b.heroLatePlaceholderDetection
          ? setTimeout(function () {
              v();
            })
          : u();
      });
    }
    g.addHeroDebugging = a;
  },
  98
);
__d(
  "InteractionTracingLogger",
  ["performanceNowSinceAppStart"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = new RegExp(/^late_mutation\/(un)?expected_([0-9]+)$/),
      i = 4;
    function j(a, b, c, d) {
      a.QuickPerformanceLogger.markerAnnotate(
        b,
        { int: { numReactCommit: c.size } },
        { instanceKey: d }
      );
    }
    function k(a, b, c, d, e) {
      a.QuickPerformanceLogger.markerAnnotate(
        b,
        { string_array: ((a = {}), (a[c] = d), a) },
        { instanceKey: e }
      );
    }
    function l(a, b, c, d, e, f) {
      a.QuickPerformanceLogger.markerPoint(b, c, {
        data: d != null ? { string: { __key: d } } : null,
        instanceKey: e,
        timestamp: f,
      });
    }
    function m(a, b, c, d) {
      a.QuickPerformanceLogger.markerAnnotate(b, c.annotations, {
        instanceKey: d,
      });
      for (var e in c.tagSet) {
        var f = Array.from(c.tagSet[e]).sort();
        k(a, b, e, f, d);
      }
    }
    function n(a, b, c, d, e) {
      for (var f in d) {
        var g = d[f],
          i = g.data,
          j = g.timestamp;
        g = g.type;
        if (
          !a.allowedQPLPointTypes.has(g) ||
          ((g = a.qplPointFilterRegex) == null ? void 0 : g.exec(f))
        )
          continue;
        g = i;
        h.test(f) &&
          f !== "late_mutation/unexpected_1" &&
          (i == null ? void 0 : i.reactStack) &&
          (g = o(d[f], ["reactStack"]));
        l(
          b,
          c,
          f,
          g && Object.keys(g).length ? JSON.stringify(g) : void 0,
          e,
          j + a.appStart
        );
      }
    }
    function o(a, b) {
      a = a.data;
      var c = a != null ? JSON.parse(JSON.stringify(a)) : null;
      c != null &&
        b.forEach(function (a) {
          return delete c[a];
        });
      return c;
    }
    function p(a, b, c, d, e) {
      for (var f in d) {
        var g;
        if ((g = a.qplPointFilterRegex) == null ? void 0 : g.exec(f)) continue;
        for (g = 0; g < d[f].length; g++) {
          var h = d[f][g],
            j = h.data,
            k = h.end,
            m = h.start;
          h = h.type;
          if (!a.allowedQPLPointTypes.has(h)) continue;
          h = d[f].length === 1 ? f : f + "_" + (g >= i ? "MAX" : g + 1);
          l(b, c, h + "_start", void 0, e, m + a.appStart);
          l(
            b,
            c,
            h + "_end",
            Object.keys(j).length ? JSON.stringify(j) : void 0,
            e,
            k + a.appStart
          );
        }
      }
    }
    function a(a, b, c, d, e, f) {
      f = (f == null ? void 0 : f.qplMarkerType)
        ? { type: f.qplMarkerType }
        : babelHelpers["extends"]({}, null);
      b.QuickPerformanceLogger.markerStart(c, e, d + a.appStart, f);
    }
    function b(a, b, d, e, f, g) {
      j(b, d, f.commitSet, g);
      m(b, d, f, g);
      n(a, b, d, f.markerPoints, g);
      p(a, b, d, f.subSpans, g);
      f = a.qplActionMap[e];
      b.QuickPerformanceLogger.markerEnd(
        d,
        f,
        g,
        c("performanceNowSinceAppStart")() + a.appStart
      );
      return f;
    }
    function d(a) {
      var b;
      return ((b = a.annotations["int"]) == null ? void 0 : b.isError) === 1
        ? "FAIL"
        : a.wasOffline
        ? "OFFLINE"
        : ((b = a.annotations.string) == null ? void 0 : b.cancelType) ===
          "timeout"
        ? "TIMEOUT"
        : a.wasCanceled ||
          ((b = a.annotations["int"]) == null ? void 0 : b.aborted) === 1
        ? "CANCEL"
        : "SUCCESS";
    }
    g.initQPL = a;
    g.logQPL = b;
    g.getTraceStatus = d;
  },
  98
);
__d(
  "InteractionCloning",
  [
    "InteractionTracingLogger",
    "QPLEvent",
    "interaction-tracing-metrics",
    "uuidv4",
  ],
  function (a, b, c, d, e, f, g) {
    function h(a) {
      a = (a = a.annotations.string) == null ? void 0 : a.clonedInteractionId;
      return a != null
        ? d("interaction-tracing-metrics").InteractionTracingMetricsCore.get(a)
        : null;
    }
    function i(a, b, c) {
      var e = h(a);
      e != null &&
        (e.annotations === a.annotations &&
          (a.annotations = babelHelpers["extends"]({}, a.annotations)),
        e.annotations.string === a.annotations.string &&
          (a.annotations.string = babelHelpers["extends"](
            {},
            a.annotations.string
          )));
      d(
        "interaction-tracing-metrics"
      ).InteractionTracingMetricsCore.addAnnotation(a.traceId, b, c);
    }
    function j(a, b, c) {
      var e = h(a);
      e != null &&
        e.tagSet === a.tagSet &&
        (a.tagSet = babelHelpers["extends"]({}, a.tagSet));
      d("interaction-tracing-metrics").InteractionTracingMetricsCore.addTag(
        a.traceId,
        b,
        c
      );
    }
    function a(a, b, c, e) {
      var f = h(a);
      f != null &&
        f.markerPoints === a.markerPoints &&
        (a.markerPoints = babelHelpers["extends"]({}, a.markerPoints));
      d(
        "interaction-tracing-metrics"
      ).InteractionTracingMetricsCore.addMarkerPoint(a.traceId, b, c, e);
    }
    function b(a, b, c, e, f, g) {
      var i = h(a);
      i != null &&
        i.subSpans === a.subSpans &&
        (a.subSpans = babelHelpers["extends"]({}, a.subSpans));
      d("interaction-tracing-metrics").InteractionTracingMetricsCore.addSubspan(
        a.traceId,
        b,
        c,
        e,
        f,
        g
      );
    }
    function k(a, b, e, f, g, h) {
      var k = c("uuidv4")(),
        l = d(
          "interaction-tracing-metrics"
        ).InteractionTracingMetricsCore.addTracedInteraction(
          k,
          a.start,
          function () {}
        );
      l = Object.assign(l, a);
      l.traceId = k;
      l.annotations = babelHelpers["extends"]({}, a.annotations);
      l.annotations.string = babelHelpers["extends"]({}, a.annotations.string);
      d(
        "interaction-tracing-metrics"
      ).InteractionTracingMetricsCore.addAnnotation(
        k,
        "clonedInteractionId",
        a.traceId
      );
      i(l, "interactionId", k);
      j(l, "traceID", k);
      l.qplEvent = b;
      l.debugName = e;
      d("InteractionTracingLogger").initQPL(f, g, b, l.start, h, {
        qplMarkerType: f.qplMarkerType,
      });
      k = {
        interaction_class: l.interactionClass,
        interaction_id: l.traceId,
        qpl_marker_id: "" + d("QPLEvent").getMarkerId(b),
        sample_rate: 1,
        trace_policy: (a = l) == null ? void 0 : a.tracePolicy,
        type: "INTERACTION",
      };
      h =
        (e = g.WebLoom) == null
          ? void 0
          : e.startTrace(l.traceId, k, l.start + f.appStart, void 0);
      b = h == null ? void 0 : h.traceReferenceId;
      b != null && i(l, "loomRefId", b);
      return l;
    }
    function l(a, b, c, e, f) {
      var g = d("InteractionTracingLogger").getTraceStatus(a);
      e = d("InteractionTracingLogger").logQPL(e, f, b, g, a, c);
      (b = f.WebLoom) == null ? void 0 : b.endTraceForInteraction(a, e);
    }
    e = {
      addMarkerPoint_cloneSafe: a,
      addSubspan_cloneSafe: b,
      clone: function (a, b, c, d) {
        var e = a.getTrace();
        if (e == null) return;
        a = a.getConfigAndDependencies();
        var f = a.cfg;
        a = a.deps;
        e = k(e, b, c, f, a, d);
        l(e, b, d, f, a);
      },
      cloneAndStart: k,
      log: l,
    };
    f = e;
    g["default"] = f;
  },
  98
);
__d(
  "InteractionTracingUserTimingUtils",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b, c) {
      if (a.UserTimingUtils == null) return;
      if (b.markerPoints.visuallyComplete) {
        var d;
        (d = a.UserTimingUtils) == null
          ? void 0
          : d.measureModern(
              "VisuallyComplete(" + c + ")[" + b.traceId.slice(0, 3) + "]",
              {
                end: b.markerPoints.visuallyComplete.timestamp,
                start: b.start,
              },
              "VC"
            );
      }
      if (b.markerPoints.vcWithoutImage) {
        (d = a.UserTimingUtils) == null
          ? void 0
          : d.measureModern(
              "VCWithoutImage(" + c + ")[" + b.traceId.slice(0, 3) + "]",
              { end: b.markerPoints.vcWithoutImage.timestamp, start: b.start },
              "VCWithoutImage"
            );
      }
    }
    f.markInteraction = a;
  },
  66
);
__d(
  "VisibilityAPI",
  ["performanceNowSinceAppStart"],
  function (a, b, c, d, e, f, g) {
    var h = document.visibilityState !== void 0 || document.hidden !== void 0;
    function a() {
      if (h)
        return document.visibilityState !== void 0
          ? document.visibilityState === "hidden"
          : document.hidden;
      else return !1;
    }
    function b(a) {
      document.addEventListener("visibilitychange", function (b) {
        b =
          (b = b == null ? void 0 : b.timeStamp) != null
            ? b
            : c("performanceNowSinceAppStart")();
        a(b);
      });
    }
    g.canUseVisibilityAPI = h;
    g.isVisibilityHidden = a;
    g.onVisibilityChange = b;
  },
  98
);
__d(
  "VisibilityState",
  ["VisibilityAPI", "performanceNowSinceAppStart"],
  function (a, b, c, d, e, f, g) {
    var h = 1e3,
      i = [],
      j = null,
      k = !1,
      l = new Set();
    k || (d("VisibilityAPI").isVisibilityHidden() && (j = 0), (k = !0));
    d("VisibilityAPI").canUseVisibilityAPI &&
      d("VisibilityAPI").onVisibilityChange(function (a) {
        m(a, d("VisibilityAPI").isVisibilityHidden()),
          l.forEach(function (b) {
            b(a, d("VisibilityAPI").isVisibilityHidden());
          });
      });
    function m(a, b) {
      b
        ? (j = a)
        : j != null &&
          (i.push({ end: a, start: j }), i.length > h && i.shift(), (j = null));
    }
    function a(a) {
      l.add(a);
      return function () {
        l["delete"](a);
      };
    }
    function b(a) {
      l["delete"](a);
    }
    function n(a, b) {
      var d = [],
        e = Array.from(i);
      if (j != null) {
        var f = j;
        e.push({ end: c("performanceNowSinceAppStart")(), start: f });
      }
      e.forEach(function (c) {
        c.start <= a && c.end > a
          ? c.end <= b
            ? d.push({ end: c.end, start: a })
            : d.push({ end: b, start: a })
          : c.start > a &&
            c.start <= b &&
            (c.end <= b
              ? d.push({ end: c.end, start: c.start })
              : d.push({ end: b, start: c.start }));
      });
      return d;
    }
    function e(a, b) {
      var c = 0;
      a = n(a, b);
      if (a.length > 0) {
        b = a[0];
        c += b.end - b.start;
      }
      return c;
    }
    function o(a, b) {
      var c = 0;
      a = n(a, b);
      a.forEach(function (a) {
        c += a.end - a.start;
      });
      return c;
    }
    function f(a, b) {
      a = o(a, b);
      return a > 0;
    }
    g.subscribe = a;
    g.unsubscribe = b;
    g.getHiddenSpans = n;
    g.firstHiddenTime = e;
    g.totalHiddenTime = o;
    g.wasHidden = f;
  },
  98
);
__d(
  "VisualCompletionTraceObserver",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = [],
      h = [];
    a = {
      subscribe: function (a) {
        g.push(a);
      },
      subscribeStart: function (a) {
        h.push(a);
      },
      unsubscribe: function (a) {
        g = g.filter(function (b) {
          return b !== a;
        });
      },
      unsubscribeStart: function (a) {
        h = h.filter(function (b) {
          return b !== a;
        });
      },
      emit: function (a) {
        g.forEach(function (b) {
          return b(a);
        });
      },
      emitStart: function (a) {
        h.forEach(function (b) {
          return b(a);
        });
      },
    };
    f["default"] = a;
  },
  66
);
__d(
  "ResourceTimingAPI",
  ["performance"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = !1,
      i = !1;
    function a() {
      h ||
        (typeof (c("performance") == null
          ? void 0
          : c("performance").getEntriesByName) !== "function" ||
        typeof (c("performance") == null
          ? void 0
          : c("performance").getEntriesByType) !== "function"
          ? ((i = !1), (h = !0))
          : c("performance").getEntriesByType("resource").length > 0 &&
            ((i = !0), (h = !0)));
      return i;
    }
    function b(a) {
      if (typeof c("performance").getEntriesByName !== "function") return null;
      var b = c("performance").getEntriesByName(a);
      b.length === 0 &&
        a.indexOf("#") >= 0 &&
        (b = c("performance").getEntriesByName(a.split("#")[0]));
      return b && b[0];
    }
    g.canUseResourceTimingAPI = a;
    g.getResourceTiming = b;
  },
  98
);
__d(
  "CLS",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g =
      typeof ((b = window.PerformanceObserver) == null
        ? void 0
        : (c = b.supportedEntryTypes) == null
        ? void 0
        : c.includes) === "function" &&
      window.PerformanceObserver.supportedEntryTypes.includes("layout-shift");
    function a() {
      if (!g) return null;
      var a = 0,
        b = 0,
        c = [],
        d = new window.PerformanceObserver(function (d) {
          for (
            var d = d.getEntries(),
              e = Array.isArray(d),
              f = 0,
              d = e
                ? d
                : d[
                    typeof Symbol === "function"
                      ? Symbol.iterator
                      : "@@iterator"
                  ]();
            ;

          ) {
            var g;
            if (e) {
              if (f >= d.length) break;
              g = d[f++];
            } else {
              f = d.next();
              if (f.done) break;
              g = f.value;
            }
            g = g;
            if (!g.hadRecentInput) {
              var h = c[0],
                i = c[c.length - 1];
              b &&
              g.startTime - i.startTime < 1e3 &&
              g.startTime - h.startTime < 5e3
                ? ((b += g.value), c.push(g))
                : ((b = g.value), (c = [g]));
              b > a && (a = b);
            }
          }
        });
      d.observe({ buffered: !0, type: "layout-shift" });
      return function () {
        d.disconnect();
        return a;
      };
    }
    f.getCLSCallback = a;
  },
  66
);
__d(
  "LCP",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g =
      typeof ((b = window.PerformanceObserver) == null
        ? void 0
        : (c = b.supportedEntryTypes) == null
        ? void 0
        : c.includes) === "function" &&
      window.PerformanceObserver.supportedEntryTypes.includes(
        "largest-contentful-paint"
      );
    function a() {
      if (!g) return null;
      var a = null,
        b = new window.PerformanceObserver(function (b) {
          for (
            var b = b.getEntries(),
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
            var e;
            if (c) {
              if (d >= b.length) break;
              e = b[d++];
            } else {
              d = b.next();
              if (d.done) break;
              e = d.value;
            }
            e = e;
            a = e;
          }
        });
      b.observe({ buffered: !0, type: "largest-contentful-paint" });
      return function () {
        b.disconnect();
        return a == null ? null : { timestamp: a.startTime };
      };
    }
    f.getLCPCallback = a;
  },
  66
);
__d(
  "ResourceDownloadLogger",
  ["performance"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = { JS: "js", CSS: "css", IMG: "img", TRANSLATIONS: "translations" };
    function i(a) {
      var b = a.indexOf("?");
      return b === -1 ? a : a.substring(0, b);
    }
    function j(a, b) {
      var c = b.substring(b.lastIndexOf(".") + 1);
      if (c === "js")
        return b.includes("rsrc-translations.php") ? h.TRANSLATIONS : h.JS;
      else if (c === "css") return h.CSS;
      return a;
    }
    function k() {
      return Object.keys(h).reduce(function (a, b) {
        b = h[b];
        a[b] = {
          cacheCount: 0,
          cacheRate: 0,
          encodedBodySize: 0,
          decodedBodySize: 0,
          totalCount: 0,
          transferSize: 0,
        };
        return a;
      }, {});
    }
    function a(a, b) {
      if (typeof c("performance").getEntriesByType !== "function")
        return new Map();
      var d = k(),
        e = c("performance")
          .getEntriesByType("resource")
          .filter(function (c) {
            return c.startTime >= a && c.startTime <= b;
          })
          .map(function (a) {
            return {
              encodedBodySize: a.encodedBodySize,
              decodedBodySize: a.decodedBodySize,
              transferSize: a.transferSize,
              type: j(a.initiatorType, i(a.name)),
            };
          })
          .filter(function (a) {
            return d[a.type];
          });
      e.forEach(function (a) {
        var b = d[a.type];
        b.encodedBodySize += a.encodedBodySize;
        b.decodedBodySize += a.decodedBodySize;
        b.transferSize += a.transferSize;
        b.totalCount++;
        a.transferSize === 0 && b.cacheCount++;
      });
      e = new Map();
      for (var f in d) {
        var g = d[f];
        g.totalCount > 0 &&
          (g.cacheRate = Math.round((g.cacheCount / g.totalCount) * 100));
        for (var h in g) e.set(f + "_" + h, g[h]);
      }
      return e;
    }
    g["default"] = a;
  },
  98
);
__d(
  "ImageDownloadTracker",
  ["NetworkStatus", "Promise", "setTimeout"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 2,
      i = 250;
    function a(a, d) {
      var e = 0,
        f;
      return new (b("Promise"))(function (b, g) {
        function j() {
          var f = new Image();
          f.onload = function () {
            c("NetworkStatus").reportSuccess(), b();
          };
          f.onerror = function () {
            var a = e <= h;
            a ? c("setTimeout")(j, i) : (c("NetworkStatus").reportError(), g());
          };
          e++;
          d();
          f.src = a;
        }
        c("NetworkStatus").isOnline()
          ? j()
          : (f = c("NetworkStatus").onChange(function (a) {
              a = a.online;
              a && (j(), f.remove());
            }));
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "currentVCTraces",
  [],
  function (a, b, c, d, e, f) {
    var g = null,
      h = null,
      i = new Map();
    function a() {
      return new Map(i);
    }
    function b(a, b) {
      i.set(a, b);
    }
    function c(a) {
      i["delete"](a);
    }
    function d() {
      return g;
    }
    function e(a) {
      g = a;
    }
    function j() {
      return h;
    }
    function k(a) {
      h = a;
    }
    f.getCurrentVCTraces = a;
    f.addVCTrace = b;
    f.removeVCTrace = c;
    f.getCurrentNavigationVCTrace = d;
    f.setCurrentNavigationVCTrace = e;
    f.getLastNavigationVCReport = j;
    f.setLastNavigationVCReport = k;
  },
  66
);
__d(
  "VisualCompletionUtil",
  [
    "ImageDownloadTracker",
    "ResourceTimingAPI",
    "VisualCompletionConstants",
    "addAnnotations",
    "currentVCTraces",
    "performance",
    "performanceNavigationStart",
    "performanceNowSinceAppStart",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = /url\(.*(http.*)\)/gi;
    function i(a) {
      return (a.right - a.left) * (a.bottom - a.top);
    }
    function j(a, b) {
      return {
        bottom: Math.max(Math.min(a.bottom, b.bottom), b.top),
        left: Math.min(Math.max(a.left, b.left), b.right),
        right: Math.max(Math.min(a.right, b.right), b.left),
        top: Math.min(Math.max(a.top, b.top), b.bottom),
      };
    }
    function k(a) {
      return { height: window.innerHeight, width: window.innerWidth };
    }
    function a(a, b) {
      if (typeof a.getBoundingClientRect !== "function") return !1;
      var c = k(b);
      a = a.getBoundingClientRect();
      var d = a.bottom,
        e = a.left,
        f = a.right;
      a = a.top;
      d = i(
        j(
          { bottom: d, left: e, right: f, top: a },
          { bottom: c.height, left: 0, right: c.width, top: -l(b).scrollY }
        )
      );
      return d > 0;
    }
    function l(a) {
      var b;
      a = (a = window.scrollX) != null ? a : 0;
      b = (b = window.scrollY) != null ? b : 0;
      return { scrollX: a, scrollY: b };
    }
    function b(a, b) {
      var c = 0;
      a = a;
      while (a && a.offsetParent && typeof a.offsetTop === "number")
        (c += a.offsetTop), (a = a.offsetParent);
      if (
        a &&
        a.offsetParent == null &&
        typeof a.getBoundingClientRect === "function"
      ) {
        var d = a.getBoundingClientRect();
        d = d.top;
        d >= 0 ? (c += d) : a === document.body && (c -= b.initialScrollY);
      }
      return c;
    }
    function e(a) {
      return a.split("#")[0];
    }
    function m(a) {
      if (a == null || a === "") return !1;
      a = a.replace(/ /g, "");
      return (
        a.indexOf("display:none") >= 0 ||
        a.indexOf("visibility:hidden") >= 0 ||
        a.indexOf("content-visibility:hidden") >= 0
      );
    }
    function n(a) {
      a = a;
      while (a) {
        if (
          (typeof a.getAttribute === "function" &&
            m(a.getAttribute("style"))) ||
          (typeof a.hasAttribute === "function" && a.hasAttribute("hidden"))
        )
          return !0;
        a = a.parentElement;
      }
      return !1;
    }
    function o(a, b) {
      if (n(a)) return !0;
      var d = a;
      while (d) {
        if (b.mutationRoots.has(d)) return !1;
        if (typeof d.getAttribute === "function") {
          var e = d.getAttribute(c("VisualCompletionConstants").ATTRIBUTE_NAME);
          if (e === c("VisualCompletionConstants").IGNORE) return !0;
          if (d !== a && e === c("VisualCompletionConstants").IGNORE_DYNAMIC) {
            b.excludeElement(a);
            return !0;
          }
        }
        d = d.parentElement;
      }
      return !1;
    }
    function p(a, b, c) {
      if (
        G(b) &&
        !o(b, a) &&
        b.textContent != null &&
        b.parentElement != null
      ) {
        a = b.parentElement;
        if (F(a) && a.tagName !== "SCRIPT" && a.tagName !== "STYLE") {
          b = b.textContent;
          typeof b === "string" && (b = b.trim());
          if (b !== "")
            if (c != null && c.trim() === b) return null;
            else return a;
        }
      }
      return null;
    }
    function f(a, b) {
      var c = [];
      Array.from(a).forEach(function (a) {
        if (
          a.target.nodeType !== Node.ELEMENT_NODE &&
          a.target.nodeType !== Node.TEXT_NODE
        )
          return;
        var d = a.target;
        if (a.type === "childList" && a.addedNodes && a.addedNodes.length)
          Array.from(a.addedNodes).forEach(function (a) {
            a = a;
            if (o(a, b)) return;
            if (q(a)) {
              x(b.mutationSeq, a, "imgLoad", b);
              return;
            } else typeof a.querySelectorAll === "function" && w(b.mutationSeq, a, b);
            if (a.nodeType === Node.ELEMENT_NODE) c.push([a, "mutationAdd"]);
            else if (
              b.config.observeTextMutation &&
              a.nodeType === Node.TEXT_NODE
            ) {
              a = p(b, a);
              a != null && c.push([a, "mutationTextAdd"]);
            }
          });
        else if (a.type === "attributes" && !o(d, b))
          if (a.attributeName === "hidden")
            d.hasAttribute("hidden") || c.push([d, "mutationHiddenAttribute"]);
          else if (a.attributeName === "style") {
            var e = d.getAttribute("style"),
              f = a.oldValue;
            m(f) && !m(e) && c.push([d, "mutationStyleAttribute"]);
          } else
            ((E(d) === "image" && a.attributeName === "href") ||
              (E(d) === "IMG" && a.attributeName === "src")) &&
              x(b.mutationSeq, d, "mutationImageAttribute", b);
        else if (
          b.config.observeTextMutation &&
          a.type === "characterData" &&
          d.nodeType === Node.TEXT_NODE
        ) {
          f = p(b, d, a.oldValue);
          f != null && c.push([f, "mutationTextUpdate"]);
        }
      });
      return c;
    }
    function q(a) {
      return E(a) === "IMG" || E(a) === "image";
    }
    function r(a) {
      return E(a) === "picture";
    }
    function s(a) {
      return q(a) || r(a);
    }
    function t(a) {
      if (typeof window.getComputedStyle !== "function") return null;
      a = window.getComputedStyle(a);
      var b = a["background-image"];
      if (a.visibility !== "hidden" && b && b !== "none") {
        h.lastIndex = 0;
        a = h.exec(b);
        if (a && a.length > 1) return a[1].replace('"', "");
      }
      return null;
    }
    function u(a) {
      if (a.reported) return;
      var b = c("performanceNowSinceAppStart")();
      a.checkViewport();
      a.mutationRoots.forEach(function (b) {
        if (b && typeof b.querySelectorAll === "function") {
          b = b.querySelectorAll("div,i,span,li");
          Array.prototype.forEach.call(b, function (b) {
            if (
              b.textContent ||
              b.children.length ||
              a.cssBgElements.has(b) ||
              o(b, a) ||
              !a.inViewport(b)
            )
              return;
            var c = t(b);
            a.bgCheckCount++;
            if (c == null) return;
            c = {
              element: b,
              url: c,
              resourceTiming: d("ResourceTimingAPI").getResourceTiming(c),
            };
            a.cssBgElements.set(b, c);
          });
        }
      });
      a.cssBgScanOverhead = c("performanceNowSinceAppStart")() - b;
    }
    function v(a, b) {
      if (
        typeof a.getAttribute === "function" &&
        a.getAttribute(c("VisualCompletionConstants").ATTRIBUTE_NAME) ===
          c("VisualCompletionConstants").LOADING_STATE
      )
        b.waitLoadingState(a);
      else if (typeof a.querySelectorAll === "function") {
        a = a.querySelectorAll(
          "[" +
            c("VisualCompletionConstants").ATTRIBUTE_NAME +
            "=" +
            c("VisualCompletionConstants").LOADING_STATE +
            "]"
        );
        Array.from(a).forEach(function (a) {
          b.waitLoadingState(a);
        });
      }
    }
    function w(a, b, c) {
      b = b.querySelectorAll("img, image");
      Array.from(b).forEach(function (b) {
        if (o(b, c)) return;
        x(a, b, "imgLoad", c);
      });
    }
    function x(a, b, d, e) {
      if (b.complete) {
        b.getAttribute(c("VisualCompletionConstants").ATTRIBUTE_NAME) ===
          c("VisualCompletionConstants").MEDIA_VC_IMAGE &&
          e.scheduleIntersectionObserver(
            a,
            b,
            d,
            c("performanceNowSinceAppStart")()
          );
        return;
      }
      var f = b.currentSrc || b.src;
      if (E(b) === "image" && typeof b.getAttribute === "function") {
        var g = b.getAttribute("xlink:href");
        g != null && (f = g);
      }
      if (f == null || f === "" || f.indexOf("http") !== 0) return;
      var h = function () {
          e.imageDone(b);
        },
        i = function () {
          e.imageWait(b);
        };
      if (b.getAttribute("loading") === "lazy") {
        g = y(a, b, d, h, e);
        var j = g.loadHandler,
          k = g.errorHandler;
        e.scheduleElementVisibleObserver(
          b,
          function () {
            if (e.reported || b.complete) return;
            i();
            b.addEventListener("load", j);
            b.addEventListener("error", k);
          },
          { executeOnce: !0, cleanAfterReport: !0 }
        );
      } else if (e.config.use_image_download_tracker === !0)
        c("ImageDownloadTracker")(f, i)
          .then(function () {
            var f = c("performanceNowSinceAppStart")();
            e.scheduleIntersectionObserver(a, b, d, f);
            h();
          })
          ["catch"](function () {
            return h();
          });
      else {
        g = y(a, b, d, h, e);
        f = g.loadHandler;
        g = g.errorHandler;
        i();
        b.addEventListener("load", f);
        b.addEventListener("error", g);
      }
    }
    function y(a, b, d, e, f) {
      var g = function g() {
          var i = c("performanceNowSinceAppStart")();
          f.scheduleIntersectionObserver(a, b, d, i);
          e();
          b.removeEventListener("load", g);
          b.removeEventListener("error", h);
        },
        h = function a() {
          e(),
            b.removeEventListener("load", g),
            b.removeEventListener("error", a);
        };
      return { loadHandler: g, errorHandler: h };
    }
    function z(a, b) {
      return (
        typeof a.getAttribute === "function" &&
        a.getAttribute(c("VisualCompletionConstants").ATTRIBUTE_NAME) === b
      );
    }
    function A(a) {
      var b = function () {
        (a.scrolled = !0),
          a.markerPoints.has("scroll_start") ||
            a.addMarkerPoint(
              "scroll_start",
              c("performanceNowSinceAppStart")()
            );
      };
      try {
        window.addEventListener("scroll", b, { passive: !0 }),
          a.onComplete(function () {
            window.removeEventListener("scroll", b);
          });
      } catch (a) {
        if (a.message !== "can't access dead object") throw a;
      }
    }
    function B(a, b) {
      a instanceof HTMLImageElement &&
        ((b.naturalWidth = a.naturalWidth),
        (b.naturalHeight = a.naturalHeight));
    }
    function C(a, b) {
      typeof window.devicePixelRatio === "number" &&
        c("addAnnotations")(a.annotations, {
          double: { devicePixelRatio: window.devicePixelRatio },
        });
      a.navSequence === 1 &&
        c("performance") &&
        c("performance").timing &&
        c("performance").timing.responseStart &&
        a.markerPoints.set("TTFB", {
          timestamp:
            c("performance").timing.responseStart -
            c("performanceNavigationStart")(),
        });
      if (b.interactionType === "INITIAL_LOAD") {
        a =
          c("performance") == null
            ? void 0
            : c("performance").getEntriesByType == null
            ? void 0
            : c("performance").getEntriesByType("paint");
        a &&
          a.forEach(function (a) {
            a.name === "first-contentful-paint" &&
              b.addFirstMarkerPoint("FCP", a.startTime);
          });
      }
    }
    var D = {
      attributeFilter: ["hidden", "style", "href", "src"],
      attributeOldValue: !0,
      attributes: !0,
      characterData: !0,
      childList: !0,
      subtree: !0,
    };
    function E(a) {
      return (a = a.tagName) != null ? a : "";
    }
    function F(a) {
      return a.nodeType === Node.ELEMENT_NODE;
    }
    function G(a) {
      return a.nodeType === Node.TEXT_NODE;
    }
    function H(a) {
      var b = [],
        c = d("currentVCTraces").getCurrentVCTraces();
      c.forEach(function (c) {
        var d = a;
        while (d != null) {
          if (d instanceof HTMLElement && c.mutationRoots.has(d)) {
            b.push(c);
            break;
          }
          d = d.parentElement;
        }
      });
      return b;
    }
    function I(a) {
      var b = [],
        c = H(a);
      c.forEach(function (c) {
        b.push(c.waitLoadingState(a));
      });
      return b;
    }
    function J(a) {
      return {
        onError: function () {},
        onLoad: function () {},
        unmountCallback: function () {},
      };
    }
    g.getPixels = i;
    g.getRectIntersection = j;
    g.getViewportSize = k;
    g.isInAboveTheFold = a;
    g.getScrollPosition = l;
    g.offsetTop = b;
    g.trimHash = e;
    g.checkInvisibleStyle = m;
    g.checkInvisibleStyleElement = n;
    g.shouldIgnoreMutation = o;
    g.getParentElementForTextNodeChange = p;
    g.extractMutationElements = f;
    g.isImage = q;
    g.isPicture = r;
    g.useCustomTracking = s;
    g.getStyleBackground = t;
    g.scanCssBgElements = u;
    g.checkLoadingStates = v;
    g.trackAllChildImages = w;
    g.trackImage = x;
    g.getImageLoadHandlers = y;
    g.checkDOMElementAttributeValue = z;
    g.setupScrollHandler = A;
    g.getImageNaturalSize = B;
    g.addPlatformMetaData = C;
    g.mutationObserverConfig = D;
    g.getTagName = E;
    g.isElementNode = F;
    g.isTextNode = G;
    g.findVCTraces = H;
    g.trackLoadingState = I;
    g.trackImageLoad = J;
  },
  98
);
__d(
  "WebAPIs",
  ["VisibilityAPI"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    c = [];
    e =
      "IntersectionObserver" in window &&
      "IntersectionObserverEntry" in window &&
      "intersectionRatio" in window.IntersectionObserverEntry.prototype
        ? window.IntersectionObserver
        : null;
    function a(a) {
      return a.isIntersecting != null
        ? a.isIntersecting
        : a.intersectionRatio > 0 ||
            (a.intersectionRect &&
              (a.intersectionRect.height > 0 || a.intersectionRect.width > 0));
    }
    e == null && c.push("IntersectionObserver");
    f = window.MutationObserver || window.WebKitMutationObserver;
    f == null && c.push("MutationObserver");
    d("VisibilityAPI").canUseVisibilityAPI || c.push("VisibilityAPI");
    d = window.requestAnimationFrame;
    d == null && c.push("requestAnimationFrame");
    var h = window.cancelAnimationFrame;
    d == null && c.push("cancelAnimationFrame");
    function b(a) {
      window.addEventListener("beforeunload", a);
      return {
        remove: function () {
          try {
            window.removeEventListener("beforeunload", a);
          } catch (a) {
            if (a.message !== "can't access dead object") throw a;
          }
        },
      };
    }
    g.unavailableAPIs = c;
    g.IntersectionObserver = e;
    g.intersectionObserverEntryIsIntersecting = a;
    g.MutationObserver = f;
    g.requestAnimationFrame = d;
    g.cancelAnimationFrame = h;
    g.onBeforeUnload = b;
  },
  98
);
__d(
  "VisualCompletionLogger",
  [
    "CLS",
    "LCP",
    "ResourceDownloadLogger",
    "ResourceTimingAPI",
    "VisibilityState",
    "VisualCompletionConstants",
    "VisualCompletionTraceObserver",
    "VisualCompletionUtil",
    "WebAPIs",
    "addAnnotations",
    "performanceNowSinceAppStart",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 4,
      i = "manualVCPointCandidate",
      j = 1;
    function k() {
      return { bottom: 0, left: 0, right: 0, top: 0 };
    }
    function l(a) {
      return { bottom: a.bottom, left: a.left, right: a.right, top: a.top };
    }
    a = (function () {
      function a(a, b, e, f, g) {
        (this.bgCheckCount = 0),
          (this.$6 = 0),
          (this.$7 = 0),
          (this.cssBgScanOverhead = 0),
          (this.initialScrollY = 0),
          (this.scrolledVC = 0),
          (this.reported = !1),
          (this.measureOriginalViewport = !0),
          (this.mutationRoots = new Set()),
          (this.mutatedElementCount = 0),
          (this.config = g),
          (this.$3 = new Map()),
          (this.$4 = new Map()),
          (this.$1 = []),
          (this.$2 = []),
          (this.cssBgElements = new Map()),
          (this.$8 = []),
          (this.$9 = new Set()),
          (this.startTime = a),
          (this.$5 = { height: 0, width: 0 }),
          (this.initialScrollY =
            f === "INITIAL_LOAD"
              ? 0
              : d("VisualCompletionUtil").getScrollPosition(this).scrollY),
          (this.$10 = this.initialScrollY),
          (this.currentScrollY = this.initialScrollY),
          (this.navSequence = b),
          (this.traceID = e),
          (this.markerPoints = new Map()),
          (this.stateLog = new Map()),
          (this.annotations = {
            string: {},
            int: {},
            double: {},
            bool: {},
            string_array: {},
            int_array: {},
            double_array: {},
            bool_array: {},
          }),
          (this.tagSet = new Map()),
          (this.navDone = !1),
          (this.interactionType = f),
          (this.scrolled = !1),
          (this.$11 = d("CLS").getCLSCallback()),
          f === "INITIAL_LOAD" && (this.$12 = d("LCP").getLCPCallback()),
          c("VisualCompletionTraceObserver").emitStart(f);
      }
      var b = a.prototype;
      b.addAnnotation = function (a, b) {
        var d;
        c("addAnnotations")(this.annotations, {
          string: ((d = {}), (d[a] = b), d),
        });
      };
      b.addAnnotationInt = function (a, b) {
        var d;
        c("addAnnotations")(this.annotations, {
          int: ((d = {}), (d[a] = b), d),
        });
      };
      b.addAnnotationDouble = function (a, b) {
        var d;
        c("addAnnotations")(this.annotations, {
          double: ((d = {}), (d[a] = b), d),
        });
      };
      b.addAnnotationBoolean = function (a, b) {
        var d;
        c("addAnnotations")(this.annotations, {
          bool: ((d = {}), (d[a] = b), d),
        });
      };
      b.addAnnotationIntArray = function (a, b) {
        var d;
        c("addAnnotations")(this.annotations, {
          int_array: ((d = {}), (d[a] = b), d),
        });
      };
      b.addAnnotationDoubleArray = function (a, b) {
        var d;
        c("addAnnotations")(this.annotations, {
          double_array: ((d = {}), (d[a] = b), d),
        });
      };
      b.addAnnotationStringArray = function (a, b) {
        var d;
        c("addAnnotations")(this.annotations, {
          string_array: ((d = {}), (d[a] = b), d),
        });
      };
      b.addAnnotationBooleanArray = function (a, b) {
        var d;
        c("addAnnotations")(this.annotations, {
          bool_array: ((d = {}), (d[a] = b), d),
        });
      };
      b.addFirstMarkerPoint = function (a, b, c) {
        c === void 0 && (c = {});
        var d = this.markerPoints.get(a);
        b >= this.startTime &&
          (!d || d.timestamp > b) &&
          this.markerPoints.set(a, { data: c, timestamp: b });
      };
      b.addMarkerPoint = function (a, b, c) {
        c === void 0 && (c = {}),
          b >= this.startTime &&
            this.markerPoints.set(a, { data: c, timestamp: b });
      };
      b.addVCPointCandidate = function (a, b) {
        b === void 0 && (b = {}), this.addMarkerPoint(i, a, b);
      };
      b.addVisualElement = function (a, b, c, e, f) {
        this.scrolled &&
          ((this.currentScrollY = d("VisualCompletionUtil").getScrollPosition(
            this
          ).scrollY),
          (this.scrolled = !1));
        a = {
          mutationSeq: a,
          element: b,
          timestamp: e,
          mutationType: c,
          scrollY: this.currentScrollY,
          visible: f,
        };
        d("VisualCompletionUtil").getImageNaturalSize(b, a);
        this.$8.push(a);
      };
      b.trackPagelet = function (a, b, c, d, e) {
        this.$4.set(a, {
          data: {},
          element: a,
          mutationSeq: 0,
          name: b,
          pageletTypeName: e,
          points: { hydration: c - this.startTime },
          vcCallback: d,
        });
      };
      b.addTag = function (a, b) {
        this.tagSet.has(a) || this.tagSet.set(a, new Set());
        a = this.tagSet.get(a);
        a && a.add(b);
      };
      b.checkViewport = function () {
        this.$5 = d("VisualCompletionUtil").getViewportSize(this);
      };
      b.calculate = function (a) {
        var b = this;
        a === void 0 && (a = !1);
        this.checkViewport();
        var e = c("performanceNowSinceAppStart")();
        this.$7 = 0;
        this.initTree();
        !a &&
          d("ResourceTimingAPI").canUseResourceTimingAPI() &&
          this.getBackgroundImages();
        this.calculatePaintedPixels();
        var f = {
          annotations: this.annotations,
          cssBgScanOverhead: this.cssBgScanOverhead,
          bgChecked: this.bgCheckCount,
          bgNum: 0,
          bgPixels: 0,
          vcCalculationOverhead: 0,
          compNum: 0,
          compPixels: 0,
          cssBgElements: Array.from(this.cssBgElements.values()),
          elements: this.$2,
          finalScrollY: this.$10,
          imgNum: 0,
          imgPixels: 0,
          initialScrollY: this.initialScrollY,
          interactionType: this.interactionType,
          markerPoints: this.markerPoints,
          navComplete: c("performanceNowSinceAppStart")(),
          navSequence: this.navSequence,
          pagelets: Array.from(this.$4.values()),
          paintedPixels: this.$7,
          scrollY: d("VisualCompletionUtil").getScrollPosition(this).scrollY,
          scrolledVC: this.scrolledVC,
          speedIndex: 0,
          startTime: this.startTime,
          tagSet: this.tagSet,
          totalPixels: this.$6,
          traceId: this.traceID,
          tracePolicy: this.tracePolicy,
          stateLog: this.stateLog,
          vcWithoutImage: 0,
          viewport: this.$5,
          visuallyComplete: 0,
        };
        c("addAnnotations")(this.annotations, {
          int: {
            mutationRootCount: this.mutationRoots.size,
            mutatedElementCount: this.mutatedElementCount,
            visualChangeRecordCount: this.$8.length,
            paintedElementCount: this.$2.length,
          },
        });
        this.$2.length &&
          d("WebAPIs").unavailableAPIs.length === 0 &&
          (this.addMarkerPoint("FP", this.$2[this.$2.length - 1].timestamp),
          this.$2.forEach(function (a) {
            var c = a.element;
            if (!c) return;
            var e = a.pagelet;
            if (f.vcWithoutImage === 0 && a.type === "component") {
              var g = {
                height: a.rectangle.bottom - a.rectangle.top,
                mutationType: a.mutationType,
                tagName: d("VisualCompletionUtil").getTagName(c),
                type: a.type,
                width: a.rectangle.right - a.rectangle.left,
              };
              e && (g.pagelet = e.name);
              f.vcWithoutImage = a.latency;
              f.markerPoints.set("vcWithoutImage", {
                data: g,
                element: c,
                timestamp: a.latency + b.startTime,
              });
            }
            if (f.visuallyComplete === 0) {
              g = {
                height: a.rectangle.bottom - a.rectangle.top,
                mutationType: a.mutationType,
                tagName: d("VisualCompletionUtil").getTagName(c),
                type: a.type,
                width: a.rectangle.right - a.rectangle.left,
              };
              e && (g.pagelet = e.name);
              f.visuallyComplete = a.latency;
              f.markerPoints.set("visuallyComplete", {
                data: g,
                element: c,
                timestamp: a.latency + b.startTime,
              });
              f.scrollY = a.scrollY;
            }
            f.speedIndex += (a.pixels / b.$7) * a.latency;
            switch (a.type) {
              case "component":
                f.compNum++;
                f.compPixels += a.pixels;
                break;
              case "img":
                f.imgNum++;
                f.imgPixels += a.pixels;
                break;
              case "bg":
                f.bgNum++;
                f.bgPixels += a.pixels;
                break;
            }
          }));
        this.logPagelets();
        this.logPixelProgress();
        a &&
          ((f.visuallyComplete = f.vcWithoutImage =
            c("performanceNowSinceAppStart")() - this.startTime),
          f.markerPoints.set("visuallyComplete", {
            data: {},
            timestamp: f.visuallyComplete + this.startTime,
          }),
          f.markerPoints.set("vcWithoutImage", {
            data: {},
            timestamp: f.vcWithoutImage + this.startTime,
          }));
        a = c("performanceNowSinceAppStart")();
        f.vcCalculationOverhead = a - e;
        this.setupMetaData(f);
        this.logCssBgElementsMetaData();
        this.reported = !0;
        e = c("performanceNowSinceAppStart")() - a;
        c("addAnnotations")(f.annotations, {
          double: {
            vcMetaDataLoggingLatency: e,
            vcTotalLoggingOverhead:
              e + f.cssBgScanOverhead + f.vcCalculationOverhead,
          },
        });
        return f;
      };
      b.cleanupPaintedElements = function () {
        var a = new Set(),
          b = [].concat(this.$2);
        while (b.length > 0) {
          var c = b.pop();
          if (a.has(c)) continue;
          a.add(c);
          delete c.element;
          b.push.apply(b, c.children);
        }
      };
      b.tearDown = function () {
        this.$3.clear(),
          (this.$1 = []),
          (this.$8 = []),
          this.$9.clear(),
          this.mutationRoots.clear(),
          this.config.retain_element_reference ||
            (this.cleanupPaintedElements(),
            this.cssBgElements.forEach(function (a) {
              delete a.element;
            }),
            this.$4.forEach(function (a) {
              delete a.element;
            })),
          this.$4.clear(),
          this.markerPoints.forEach(function (a) {
            delete a.element;
          }),
          this.cssBgElements.clear();
      };
      b.findPagelet = function (a) {
        a = a;
        while (a) {
          if (this.$4.has(a)) return this.$4.get(a);
          a = a.parentElement;
        }
        return null;
      };
      b.findParent = function (a) {
        a = a.parentElement;
        while (a) {
          if (this.$3.has(a)) return this.$3.get(a);
          a = a.parentElement;
        }
        return null;
      };
      b.checkExcluded = function (a) {
        a = a;
        while (a) {
          if (this.$9.has(a)) return !0;
          else if (this.$3.has(a) || this.mutationRoots.has(a)) return !1;
          else if (
            d("VisualCompletionUtil").checkDOMElementAttributeValue(
              a,
              c("VisualCompletionConstants").IGNORE
            )
          )
            return !0;
          a = a.parentElement;
        }
        return !1;
      };
      b.getBackgroundImages = function () {
        var a = this;
        this.cssBgElements.forEach(function (b) {
          if (b.element) {
            var c,
              e = b.element,
              f = a.findParent(e);
            if (!f) return;
            var g = d("VisualCompletionUtil").offsetTop(e, a),
              h = a.getRelativeBoundingClientRect(
                e,
                a.measureOriginalViewport ? g : void 0
              );
            h = d("VisualCompletionUtil").getRectIntersection(h, f.rectangle);
            var i = d("VisualCompletionUtil").getPixels(h);
            if (i === 0 || (a.measureOriginalViewport && g > a.$5.height))
              return;
            ((c = b.resourceTiming) == null ? void 0 : c.responseEnd) == null &&
              (b.resourceTiming = d("ResourceTimingAPI").getResourceTiming(
                b.url
              ));
            if (
              ((c = b.resourceTiming) == null ? void 0 : c.responseEnd) != null
            ) {
              c = b.resourceTiming;
              b = c.responseEnd;
              var k = a.findPagelet(e);
              if (c.startTime >= a.startTime && b > f.timestamp) {
                c = {
                  children: [],
                  element: e,
                  hadLateMutationExpected: !1,
                  hadLateMutationUnexpected: !1,
                  latency: b - a.startTime,
                  mutationSeq: f.mutationSeq,
                  mutationType: "bg",
                  offsetTop: g,
                  pagelet: k,
                  parent: f,
                  pixels: i,
                  rectangle: h,
                  scrollY: f.scrollY,
                  timestamp: b,
                  type: "bg",
                  veid: String(j++),
                };
                f.children.push(c);
                a.$3.set(e, c);
                a.$2.push(c);
              }
            }
          }
        });
      };
      b.getRelativeBoundingClientRect = function (a, b) {
        var c = k();
        if (typeof a.getBoundingClientRect !== "function") return c;
        c = l(a.getBoundingClientRect());
        return {
          bottom: b != null ? b + (c.bottom - c.top) : c.bottom,
          left: c.left,
          right: c.right,
          top: b != null ? b : c.top,
        };
      };
      b.findFirstVisibleChild = function (a) {
        var b = this,
          c = [a];
        a = function () {
          var a = [],
            e = 0,
            f = void 0;
          c.forEach(function (c) {
            if (typeof c.getBoundingClientRect !== "function") return;
            var g = l(c.getBoundingClientRect()),
              h = d("VisualCompletionUtil").getPixels(g);
            if (
              h > 0 &&
              (g.bottom <= 0 ||
                g.right <= 0 ||
                g.left >= b.$5.width ||
                g.top >= b.$5.height)
            )
              return;
            h > e && !b.checkExcluded(c) && ((e = h), (f = c));
            c.children != null && (a = a.concat(Array.from(c.children)));
          });
          if (e > 0 && f) return { v: f };
          c = a;
        };
        while (c && c.length) {
          var e = a();
          if (typeof e === "object") return e.v;
        }
        return null;
      };
      b.getRectangle = function (a, b) {
        a = this.findFirstVisibleChild(a);
        if (a == null) return k();
        a = this.getRelativeBoundingClientRect(a);
        var c = a.bottom,
          e = a.left,
          f = a.right;
        a = a.top;
        c = { bottom: c, left: e, right: f, top: a };
        return d("VisualCompletionUtil").getRectIntersection(c, b);
      };
      b.excludeElement = function (a) {
        this.$9.add(a);
      };
      b.initTree = function () {
        var a = this,
          b = {
            bottom: this.$5.height,
            left: 0,
            right: this.$5.width,
            top: -this.initialScrollY,
          };
        this.$8 = this.$8.sort(function (a, b) {
          return a.timestamp - b.timestamp;
        });
        var e = 0,
          f = 0;
        this.$8.forEach(function (g) {
          var i = g.element,
            k = g.mutationSeq,
            l = g.mutationType,
            m = g.naturalHeight,
            n = g.naturalWidth,
            o = g.scrollY,
            p = g.timestamp;
          g = g.visible;
          if (
            d("VisualCompletionUtil").checkDOMElementAttributeValue(
              i,
              c("VisualCompletionConstants").MEDIA_VC_IMAGE
            ) &&
            g === !0 &&
            m != null &&
            n != null
          ) {
            g = m * n;
            var q = Number(g < e * h);
            n = {
              ignored: q,
              resolution: g,
              mutationType: l,
              naturalWidth: n,
              naturalHeight: m,
            };
            e > 0 && (n.ratio = g / e);
            a.addMarkerPoint("mediaVCImage_" + f++, p, n);
            if (q) return;
            else a.addMarkerPoint("ImageMediaVC", p), (e = g);
          }
          m = a.findFirstVisibleChild(i);
          if (m == null) return;
          n = d("VisualCompletionUtil").offsetTop(m, a);
          q = a.getRelativeBoundingClientRect(
            m,
            a.measureOriginalViewport ? n : void 0
          );
          g = d("VisualCompletionUtil").getRectIntersection(q, b);
          if (a.inAboveTheFold(m)) {
            p - a.startTime > a.scrolledVC &&
              ((a.scrolledVC = p - a.startTime), (a.$10 = o));
            if (a.measureOriginalViewport && n > a.$5.height) return;
            i = a.findPagelet(m);
            q = {
              children: [],
              element: m,
              hadLateMutationExpected: !1,
              hadLateMutationUnexpected: !1,
              latency: p - a.startTime,
              mutationSeq: k,
              mutationType: l,
              offsetTop: n,
              pagelet: i,
              parent: null,
              pixels: d("VisualCompletionUtil").getPixels(g),
              rectangle: g,
              scrollY: o,
              timestamp: p,
              type:
                l === "imgLoad" || l === "mutationImageAttribute"
                  ? "img"
                  : "component",
              veid: String(j++),
            };
            a.$3.set(m, q);
          }
        });
        this.$3.forEach(function (b) {
          var c = b.element;
          if (c) {
            c = a.findParent(c);
            c
              ? (b.type !== "component" && (b.scrollY = c.scrollY),
                c.children.push(b),
                (b.parent = c))
              : a.$1.push(b);
          }
        });
        this.$3.forEach(function (b, c) {
          var d = b.parent;
          while (d) {
            if (b.timestamp < d.timestamp) {
              a.$3["delete"](c);
              return;
            }
            d = d.parent;
          }
          a.$2.push(b);
        });
      };
      b.logPixelProgress = function () {
        var a = this,
          b = new Map([
            ["vc98", 0.02],
            ["vc95", 0.05],
          ]),
          c = 0,
          d = 0,
          e = function (e) {
            var f = a.$2[e];
            c += f.pixels;
            if (b.size === 0) return "break";
            b.forEach(function (b, d) {
              !a.markerPoints.has(d) &&
                c / a.$7 >= b &&
                a.addMarkerPoint(d, f.latency + a.startTime);
            });
            f.type === "component" &&
              ((d += f.pixels),
              f.children.forEach(function (a) {
                a.type !== "component" && (d += a.pixels);
              }),
              b.forEach(function (c, e) {
                !a.markerPoints.has(e + "WithoutImage") &&
                  d / a.$7 >= c &&
                  (a.addMarkerPoint(
                    e + "WithoutImage",
                    f.latency + a.startTime
                  ),
                  b["delete"](e));
              }));
          };
        for (var f = 0; f < this.$2.length; f++) {
          var g = e(f);
          if (g === "break") break;
        }
      };
      b.logPagelets = function () {
        var a = this;
        this.$4.forEach(function (b, c) {
          if (!a.inViewport(c)) {
            b.vcCallback != null && b.vcCallback(null, null, b.data);
            a.$4["delete"](c);
            return;
          }
          c = a.$3.has(c) ? a.$3.get(c) : a.findParent(c);
          if (c) {
            var d = c.latency + a.startTime;
            b.points.firstPaint = d;
            b.points.visuallyComplete = d;
            b.points.vcWithoutImage = d;
            b.mutationSeq = c.mutationSeq;
          }
        });
        this.$2.forEach(function (b) {
          var c = b.pagelet;
          while (c != null) {
            var d,
              e = b.latency + a.startTime;
            c.points.visuallyComplete = Math.max(
              (d = c.points.visuallyComplete) != null ? d : 0,
              e
            );
            if (b.type === "component") {
              c.points.vcWithoutImage = Math.max(
                (d = c.points.vcWithoutImage) != null ? d : 0,
                e
              );
            }
            c =
              ((d = c.element) == null ? void 0 : d.parentElement) != null
                ? a.findPagelet(c.element.parentElement)
                : null;
          }
        });
        this.$4.forEach(function (b) {
          b.points.visuallyComplete != null &&
            b.pageletTypeName != null &&
            b.pageletTypeName !== "" &&
            a.markerPoints.set(b.pageletTypeName + "VC", {
              timestamp: b.points.visuallyComplete,
            }),
            b.points.vcWithoutImage != null &&
              a.markerPoints.set("VC_" + b.name, {
                data: b.data,
                timestamp: b.points.vcWithoutImage,
              }),
            b.vcCallback != null &&
              b.points.visuallyComplete != null &&
              b.points.vcWithoutImage != null &&
              b.vcCallback(
                b.points.visuallyComplete,
                b.points.vcWithoutImage,
                b.data
              ),
            a.config.retain_element_reference || delete b.element;
        });
      };
      b.calculatePaintedPixels = function () {
        var a = this;
        this.$2 = this.$2.sort(function (a, b) {
          return b.latency - a.latency;
        });
        this.$2.forEach(function (b) {
          var c = b.pixels,
            e = b.parent;
          while (e)
            (b.rectangle = d("VisualCompletionUtil").getRectIntersection(
              b.rectangle,
              e.rectangle
            )),
              (b.pixels = d("VisualCompletionUtil").getPixels(b.rectangle)),
              (c = Math.min(c, b.pixels, e.pixels)),
              (e = e.parent);
          b.pixels = c;
          e = b.parent;
          while (e) (e.pixels -= c), (e = e.parent);
          a.$7 += c;
        });
        this.$6 = this.$7;
      };
      b.inAboveTheFold = function (a) {
        var b = d("VisualCompletionUtil").getViewportSize(this);
        a = d("VisualCompletionUtil").getPixels(
          this.getRectangle(a, {
            bottom: b.height,
            left: 0,
            right: b.width,
            top: -d("VisualCompletionUtil").getScrollPosition(this).scrollY,
          })
        );
        return a > 0;
      };
      b.inOriginalViewport = function (a) {
        return (
          this.inAboveTheFold(a) &&
          d("VisualCompletionUtil").offsetTop(a, this) <= this.$5.height
        );
      };
      b.inViewport = function (a) {
        return this.measureOriginalViewport
          ? this.inOriginalViewport(a)
          : this.inAboveTheFold(a);
      };
      b.setInitialScrollY = function (a) {
        (this.initialScrollY = a), (this.currentScrollY = a);
      };
      b.setTracePolicy = function (a) {
        this.tracePolicy = a;
      };
      b.setupMetaData = function (a) {
        var b = this,
          e = this.markerPoints.get(i);
        e &&
          e.timestamp > a.visuallyComplete + a.startTime &&
          ((a.visuallyComplete = e.timestamp - a.startTime),
          this.markerPoints.set("visuallyComplete", e),
          c("addAnnotations")(a.annotations, { int: { isVCOverriden: 1 } }));
        a.tracePolicy != null &&
          a.tracePolicy !== "" &&
          c("addAnnotations")(a.annotations, {
            string: { tracePolicy: a.tracePolicy },
          });
        c("addAnnotations")(a.annotations, {
          string: { interactionId: a.traceId },
          int: {
            height: a.viewport.height,
            width: a.viewport.width,
            scrollY: a.scrollY,
          },
        });
        d("VisualCompletionUtil").addPlatformMetaData(a, this);
        c("addAnnotations")(a.annotations, {
          double: {
            vcCalculationOverhead: a.vcCalculationOverhead,
            cssBgScanOverhead: a.cssBgScanOverhead,
          },
          int: {
            finalScrollY: a.finalScrollY,
            initialScrollY: a.initialScrollY,
          },
        });
        a.markerPoints.set("logVC", { timestamp: a.navComplete });
        a.speedIndex > 0 &&
          a.markerPoints.set("speedIndex", {
            timestamp: a.speedIndex + a.startTime,
          });
        a.elements.length &&
          this.measureOriginalViewport &&
          a.scrolledVC > 0 &&
          a.markerPoints.set("scrolledVC", {
            timestamp: a.scrolledVC + a.startTime,
          });
        e = d("VisibilityState").getHiddenSpans(
          a.startTime,
          a.visuallyComplete + a.startTime
        );
        e.length > 0 && this.addMarkerPoint("backgrounded", e[0].start);
        c("addAnnotations")(a.annotations, {
          int: {
            hidden: Number(
              d("VisibilityState").wasHidden(
                a.startTime,
                a.visuallyComplete + a.startTime
              )
            ),
          },
        });
        e = c("ResourceDownloadLogger")(
          a.startTime,
          a.startTime + a.visuallyComplete
        );
        e.forEach(function (b, d) {
          var e;
          c("addAnnotations")(a.annotations, {
            int: ((e = {}), (e[d] = b), e),
          });
        });
        d("WebAPIs").unavailableAPIs.forEach(function (a) {
          b.addTag("unavailableAPIs", a);
        });
        if (this.$11) {
          e = this.$11();
          c("addAnnotations")(a.annotations, { double: { CLS: e } });
        }
        if (this.$12) {
          e = this.$12();
          e && this.addMarkerPoint("LCP", e.timestamp);
        }
      };
      b.logCssBgElementsMetaData = function () {
        var a = 0;
        this.cssBgElements.forEach(function (b) {
          ((b = b.resourceTiming) == null ? void 0 : b.responseEnd) != null &&
            a++;
        });
        c("addAnnotations")(this.annotations, {
          int: {
            cssBgElementCount: this.cssBgElements.size,
            cssBgTimingCount: a,
          },
        });
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "timeSinceAppStart",
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      return a;
    }
    f["default"] = a;
  },
  66
);
__d(
  "VisualCompletionTracing",
  [
    "ResourceTimingAPI",
    "VisibilityAPI",
    "VisibilityState",
    "VisualCompletionLogger",
    "VisualCompletionTraceObserver",
    "VisualCompletionUtil",
    "WebAPIs",
    "addAnnotations",
    "currentVCTraces",
    "foregroundRequestAnimationFrame",
    "performanceNowSinceAppStart",
    "timeSinceAppStart",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = new Set();
    a = !1;
    !a &&
      d("VisibilityAPI").canUseVisibilityAPI &&
      d("VisibilityState").subscribe(function (a, b) {
        b &&
          d("currentVCTraces")
            .getCurrentVCTraces()
            .forEach(function (a) {
              a.pendingMutations.forEach(function (b, c) {
                a.addVisualElement(
                  b.mutationSeq,
                  c,
                  b.mutationType,
                  b.displayTimestamp
                ),
                  a.intersectionObserver && a.intersectionObserver.unobserve(c),
                  a.unlock(b.lockId);
              }),
                a.pendingMutations.clear();
            });
      });
    b = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, e, f, g, i) {
        var j;
        j = a.call(this, b, e, f, g, i) || this;
        j.pendingLocks = new Map();
        j.pendingImages = new Map();
        j.$VisualCompletionTracing1 = new Map();
        j.$VisualCompletionTracing2 = null;
        j.loadingStateObserver = null;
        j.$VisualCompletionTracing3 = [];
        j.pendingLoadingElements = new Map();
        j.$VisualCompletionTracing4 = 0;
        j.$VisualCompletionTracing5 = [];
        j.$VisualCompletionTracing6 = [];
        j.mutationSeq = 0;
        j.mutationObserver = null;
        j.intersectionObserver = null;
        j.pendingMutations = new Map();
        j.loggingScheduled = !1;
        j.$VisualCompletionTracing7 = new Map();
        j.intersectionObserverCallback = function (a) {
          Array.prototype.forEach.call(a, function (a) {
            var b = j.pendingMutations.get(a.target);
            b &&
              (j.addVisualElement(
                b.mutationSeq,
                a.target,
                b.mutationType,
                c("timeSinceAppStart")(a.time),
                d("WebAPIs").intersectionObserverEntryIsIntersecting(a)
              ),
              j.intersectionObserver != null &&
                j.intersectionObserver.unobserve(a.target),
              j.unlock(b.lockId),
              j.pendingMutations["delete"](a.target));
          });
        };
        j.mutationRecordHandler = function (a) {
          j.mutationSeq++;
          a = d("VisualCompletionUtil").extractMutationElements(
            a,
            babelHelpers.assertThisInitialized(j)
          );
          j.trackElements(a, j.mutationSeq);
        };
        j.loadingStateObserverCallback = function (a) {
          Array.from(a).forEach(function (a) {
            d("WebAPIs").intersectionObserverEntryIsIntersecting(a)
              ? j.loadingElementAdded(a.target, c("timeSinceAppStart")(a.time))
              : j.loadingElementRemoved(
                  a.target,
                  c("timeSinceAppStart")(a.time)
                );
          });
        };
        j.elementVisibilityCallback = function (a) {
          Array.from(a).forEach(function (a) {
            if (!d("WebAPIs").intersectionObserverEntryIsIntersecting(a))
              return;
            a = a.target;
            var b = j.$VisualCompletionTracing7.get(a);
            if (b == null) return;
            b.callback();
            b.executeOnce && j.$VisualCompletionTracing7["delete"](a);
          });
        };
        d("WebAPIs").MutationObserver &&
          (j.mutationObserver = new (d("WebAPIs").MutationObserver)(
            j.mutationRecordHandler
          ));
        d("WebAPIs").IntersectionObserver &&
          ((j.loadingStateObserver = new (d("WebAPIs").IntersectionObserver)(
            j.loadingStateObserverCallback
          )),
          (j.intersectionObserver = new (d("WebAPIs").IntersectionObserver)(
            j.intersectionObserverCallback
          )),
          (j.$VisualCompletionTracing2 = new (d(
            "WebAPIs"
          ).IntersectionObserver)(j.elementVisibilityCallback)));
        d("currentVCTraces").addVCTrace(
          f,
          babelHelpers.assertThisInitialized(j)
        );
        g === "INTERACTION"
          ? (j.measureOriginalViewport = !1)
          : (d("currentVCTraces").setCurrentNavigationVCTrace(
              babelHelpers.assertThisInitialized(j)
            ),
            (j.measureOriginalViewport = !0),
            i.measureOriginalViewportOnNavigation != null &&
              (j.measureOriginalViewport =
                i.measureOriginalViewportOnNavigation),
            h.forEach(function (a) {
              j.observeMutation(a);
            }));
        d("VisualCompletionUtil").setupScrollHandler(
          babelHelpers.assertThisInitialized(j)
        );
        return j;
      }
      var e = b.prototype;
      e.addMutationRoot = function (a) {
        if (this.reported || this.checkDuplicatedMutationRoot(a))
          return function () {};
        this.mutationSeq++;
        this.trackElements([[a, "mutationRoot"]], this.mutationSeq);
        return this.observeMutation(a);
      };
      e.dumpLocks = function () {
        return [
          this.pendingLocks,
          this.pendingLoadingElements,
          this.pendingImages,
        ];
      };
      e.lock = function (a) {
        var b = this;
        this.pendingLocks.set(a, c("performanceNowSinceAppStart")());
        return function () {
          b.unlock(a);
        };
      };
      e.imageDone = function (a) {
        var b = this.pendingImages.get(a);
        if (b == null) return;
        this.stateLog.set("imgLoad_" + this.$VisualCompletionTracing4++, [
          b,
          c("performanceNowSinceAppStart")(),
        ]);
        this.pendingImages["delete"](a);
        this.attemptMeasurement();
      };
      e.imageWait = function (a) {
        if (this.reported) return;
        this.pendingImages.set(a, c("performanceNowSinceAppStart")());
      };
      e.loadingElementRemoved = function (a, b) {
        var d = this.pendingLoadingElements.get(a);
        d != null &&
          (this.stateLog.set(
            "loadingState_" + this.$VisualCompletionTracing4++,
            [d, c("performanceNowSinceAppStart")()]
          ),
          this.pendingLoadingElements["delete"](a),
          this.addMarkerPoint("loadingState_end", b),
          this.attemptMeasurement());
      };
      e.loadingElementAdded = function (a, b) {
        if (this.reported) return;
        this.addFirstMarkerPoint("loadingState_start", b);
        this.pendingLoadingElements.set(a, c("performanceNowSinceAppStart")());
      };
      e.waitLoadingState = function (a) {
        var b = this;
        if (this.reported) return function () {};
        var e = this.$VisualCompletionTracing1.get(a);
        if (e)
          return function () {
            e(), b.loadingElementRemoved(a, c("performanceNowSinceAppStart")());
          };
        if (d("VisualCompletionUtil").shouldIgnoreMutation(a, this))
          return function () {};
        this.loadingStateObserver && this.loadingStateObserver.observe(a);
        ((d("VisibilityAPI").canUseVisibilityAPI &&
          !d("VisibilityAPI").isVisibilityHidden()) ||
          d("VisualCompletionUtil").isInAboveTheFold(a, this)) &&
          this.loadingElementAdded(a, c("performanceNowSinceAppStart")());
        var f = function () {
          b.loadingStateObserver && b.loadingStateObserver.unobserve(a),
            b.$VisualCompletionTracing1["delete"](a);
        };
        this.$VisualCompletionTracing1.set(a, f);
        return function () {
          f(), b.loadingElementRemoved(a, c("performanceNowSinceAppStart")());
        };
      };
      e.trackImage = function (a, b, c) {
        d("VisualCompletionUtil").trackImage(a, b, c, this);
      };
      e.unlock = function (a) {
        var b = this.pendingLocks.get(a);
        if (b == null) return;
        this.pendingLocks["delete"](a);
        this.stateLog.set("Lock(" + a + ")", [
          b,
          c("performanceNowSinceAppStart")(),
        ]);
        this.attemptMeasurement();
      };
      e.checkDuplicatedMutationRoot = function (a) {
        a = a;
        while (a != null) {
          if (this.mutationRoots.has(a)) return !0;
          a = a.parentElement;
        }
        return !1;
      };
      e.observeMutation = function (a) {
        var b = this;
        if (this.reported || this.checkDuplicatedMutationRoot(a))
          return function () {};
        d("VisualCompletionUtil").isElementNode(a) &&
          this.mutationObserver &&
          this.mutationObserver.observe(
            a,
            d("VisualCompletionUtil").mutationObserverConfig
          );
        this.mutationRoots.add(a);
        return function () {
          b.mutationRoots["delete"](a);
        };
      };
      e.registerNavigationMutationRoot = function (a) {
        if (this.reported || this.checkDuplicatedMutationRoot(a))
          return function () {};
        h.add(a);
        return function () {
          h["delete"](a);
        };
      };
      e.scheduleIntersectionObserver = function (a, b, e, f) {
        var g = this;
        if (this.reported) return;
        this.mutatedElementCount++;
        if (
          d("VisibilityAPI").canUseVisibilityAPI &&
          d("VisibilityAPI").isVisibilityHidden()
        )
          this.addVisualElement(a, b, e, f);
        else if (d("WebAPIs").IntersectionObserver) {
          var h = this.pendingMutations.get(b);
          h &&
            (this.intersectionObserver &&
              this.intersectionObserver.unobserve(b),
            this.pendingMutations["delete"](b),
            this.pendingLocks["delete"](h.lockId));
          h = e + "_paint_" + this.$VisualCompletionTracing4++;
          this.intersectionObserver && this.intersectionObserver.observe(b);
          this.lock(h);
          this.pendingMutations.set(b, {
            displayTimestamp: f,
            lockId: h,
            mutationType: e,
            mutationSeq: a,
          });
        } else {
          var i = e + "_paint_" + this.$VisualCompletionTracing4++;
          this.lock(i);
          d("foregroundRequestAnimationFrame").foregroundRequestAnimationFrame(
            function () {
              g.addVisualElement(a, b, e, c("performanceNowSinceAppStart")()),
                g.unlock(i);
            }
          );
        }
      };
      e.scheduleElementVisibleObserver = function (a, b, c) {
        var e = c.executeOnce;
        e = e === void 0 ? !0 : e;
        c = c.cleanAfterReport;
        c = c === void 0 ? !0 : c;
        if (this.reported) return;
        if (d("WebAPIs").IntersectionObserver) {
          var f = this.$VisualCompletionTracing7.get(a);
          f &&
            this.$VisualCompletionTracing2 &&
            this.$VisualCompletionTracing2.unobserve(a);
          this.$VisualCompletionTracing7.set(a, {
            executeOnce: e,
            callback: b,
            cleanAfterReport: c,
          });
          this.$VisualCompletionTracing2 &&
            this.$VisualCompletionTracing2.observe(a);
        } else return;
      };
      e.trackElements = function (a, b) {
        var e = this;
        if (this.reported) return;
        var f = [];
        a.forEach(function (a) {
          var b = a[0];
          d("VisualCompletionUtil").isElementNode(b) &&
            !d("VisualCompletionUtil").useCustomTracking(b) &&
            f.push(a);
        });
        var g = c("performanceNowSinceAppStart")();
        f.forEach(function (a) {
          var c = a[0];
          a = a[1];
          d("VisualCompletionUtil").checkLoadingStates(c, e);
          e.scheduleIntersectionObserver(b, c, a, g);
        });
        var h = d("currentVCTraces").getCurrentNavigationVCTrace();
        this.interactionType === "INTERACTION" &&
          h != null &&
          !h.reported &&
          a.forEach(function (a) {
            a = a[0];
            h == null ? void 0 : h.excludeElement(a);
          });
      };
      e.onBeforeComplete = function (a) {
        if (this.reported) return;
        this.$VisualCompletionTracing5.push(a);
      };
      e.onComplete = function (a) {
        if (this.reported) return;
        this.$VisualCompletionTracing6.push(a);
      };
      e.attemptMeasurement = function (a) {
        var b = this;
        a === void 0 && (a = !1);
        if (
          !a &&
          (this.loggingScheduled ||
            this.reported ||
            this.pendingLocks.size > 0 ||
            this.pendingLoadingElements.size > 0 ||
            this.pendingImages.size > 0)
        )
          return;
        this.loggingScheduled = !0;
        var e = function () {
            b.mutationObserver && b.mutationObserver.disconnect();
            b.$VisualCompletionTracing1.forEach(function (a) {
              a();
            });
            b.loadingStateObserver && b.loadingStateObserver.disconnect();
            b.$VisualCompletionTracing1.clear();
            b.$VisualCompletionTracing3.forEach(function (a) {
              a && a.disconnect();
            });
            d("currentVCTraces").removeVCTrace(b.traceID);
            b.intersectionObserver && b.intersectionObserver.disconnect();
            b.pendingMutations.clear();
            !a &&
              d("ResourceTimingAPI").canUseResourceTimingAPI() &&
              d("VisualCompletionUtil").scanCssBgElements(b);
            var e = b.calculate(a);
            b.$VisualCompletionTracing5.forEach(function (a) {
              a(e);
            });
            b.$VisualCompletionTracing5 = [];
            c("VisualCompletionTraceObserver").emit(e);
            b.$VisualCompletionTracing6.forEach(function (a) {
              a(e);
            });
            b.$VisualCompletionTracing6 = [];
            b.$VisualCompletionTracing2 &&
              b.$VisualCompletionTracing2.disconnect();
            b.$VisualCompletionTracing7.clear();
            b.tearDown();
          },
          f =
            this.config.defer_expensive_calculation && !a
              ? this.config.defer_expensive_calculation
              : function (a) {
                  return a();
                };
        f(e);
      };
      e.forceMeasurement = function () {
        var a = this;
        if (this.reported) return;
        this.pendingLocks.size > 0 &&
          (c("addAnnotations")(this.annotations, {
            int: { incompleteLockCount: this.pendingLocks.size },
          }),
          this.pendingLocks.forEach(function (b, d) {
            a.addTag("incompleteLocks", d),
              a.stateLog.set("incomplete_" + d, [
                b,
                c("performanceNowSinceAppStart")(),
              ]);
          }));
        this.pendingLoadingElements.size > 0 &&
          (c("addAnnotations")(this.annotations, {
            int: {
              incompleteLoadingElementsCount: this.pendingLoadingElements.size,
            },
          }),
          this.pendingLoadingElements.forEach(function (b) {
            a.stateLog.set(
              "incomplete_loadingState_" + a.$VisualCompletionTracing4++,
              [b, c("performanceNowSinceAppStart")()]
            );
          }));
        this.pendingImages.size > 0 &&
          (c("addAnnotations")(this.annotations, {
            int: { incompleteImageCount: this.pendingImages.size },
          }),
          this.pendingImages.forEach(function (b) {
            a.stateLog.set(
              "incomplete_imgLoad_" + a.$VisualCompletionTracing4++,
              [b, c("performanceNowSinceAppStart")()]
            );
          }));
        this.pendingLocks.clear();
        this.pendingLoadingElements.clear();
        this.pendingImages.clear();
        this.attemptMeasurement(!0);
      };
      e.tearDown = function () {
        a.prototype.tearDown.call(this);
        for (
          var b = this.$VisualCompletionTracing7.entries(),
            c = Array.isArray(b),
            d = 0,
            b = c
              ? b
              : b[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var e;
          if (c) {
            if (d >= b.length) break;
            e = b[d++];
          } else {
            d = b.next();
            if (d.done) break;
            e = d.value;
          }
          e = e;
          var f = e[0];
          e = e[1];
          e.cleanAfterReport && this.$VisualCompletionTracing7["delete"](f);
        }
      };
      return b;
    })(c("VisualCompletionLogger"));
    g["default"] = b;
  },
  98
);
__d(
  "vc-tracker",
  [
    "VisibilityAPI",
    "VisibilityState",
    "VisualCompletionAttributes",
    "VisualCompletionConstants",
    "VisualCompletionTraceObserver",
    "VisualCompletionTracing",
    "VisualCompletionUtil",
    "currentVCTraces",
    "performanceAbsoluteNow",
    "performanceNavigationStart",
    "performanceNowSinceAppStart",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      findVCTraces: d("VisualCompletionUtil").findVCTraces,
      getCurrentVCTraces: d("currentVCTraces").getCurrentVCTraces,
      getCurrentNavigationVCTrace:
        d("currentVCTraces").getCurrentNavigationVCTrace,
      getLastNavigationVCReport: d("currentVCTraces").getLastNavigationVCReport,
      setCurrentNavigationVCTrace:
        d("currentVCTraces").setCurrentNavigationVCTrace,
      setLastNavigationVCReport: d("currentVCTraces").setLastNavigationVCReport,
      performanceAbsoluteNow: c("performanceAbsoluteNow"),
      performanceNavigationStart: c("performanceNavigationStart"),
      performanceNow: c("performanceNowSinceAppStart"),
      trackLoadingState: d("VisualCompletionUtil").trackLoadingState,
      trackImageLoad: d("VisualCompletionUtil").trackImageLoad,
      VisibilityState: {
        canUseVisibilityAPI: d("VisibilityAPI").canUseVisibilityAPI,
        firstHiddenTime: d("VisibilityState").firstHiddenTime,
        subscribe: d("VisibilityState").subscribe,
        wasHidden: d("VisibilityState").wasHidden,
        totalHiddenTime: d("VisibilityState").totalHiddenTime,
      },
      VisualCompletionAttributes: c("VisualCompletionAttributes"),
      VisualCompletionConstants: c("VisualCompletionConstants"),
      VisualCompletionTracing: c("VisualCompletionTracing"),
      VisualCompletionTraceObserver: c("VisualCompletionTraceObserver"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "LateMutationUtilities",
  ["addAnnotations", "vc-tracker"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, c, d) {
      h(c, d) && (j(c, d), m(a, b, c), o(c), p(c));
    }
    function h(a, b) {
      a = a.interactionType === "INITIAL_LOAD";
      b = Object.prototype.hasOwnProperty.call(b.markerPoints, "ssr_shown");
      return a && b;
    }
    function i(a, b, d) {
      b = b.getReactComponentStackFromDOMElement;
      var e = !1;
      for (var f = d.elements.length - 1; f >= 0; f--) {
        var g = d.elements[f];
        if (
          a.logLateMutationReactStack &&
          b &&
          g.element &&
          (g.hadLateMutationExpected || g.hadLateMutationUnexpected)
        ) {
          var h = b(g.element);
          if (h != null) {
            var i = h.indexOf("HeroPagelet");
            i >= 0 && h.splice(i);
            !e &&
              g.hadLateMutationUnexpected &&
              (c("addAnnotations")(d.annotations, {
                string: { lateMutationStack: h.join(",") },
              }),
              (e = !0));
            g.reactStack = h;
          }
        }
      }
    }
    function j(a, b) {
      var c = null;
      a.pagelets.forEach(function (a) {
        a.name === "root" && (c = a.mutationSeq);
      });
      a.elements.forEach(function (a) {
        var d = a.pagelet;
        d != null &&
          c != null &&
          a.mutationSeq > c &&
          a.type === "component" &&
          (k(a, b)
            ? ((d.data.hadLateMutationExpected = 1),
              (a.hadLateMutationExpected = !0))
            : ((d.data.hadLateMutationUnexpected = 1),
              (a.hadLateMutationUnexpected = !0)));
      });
    }
    function k(a, b) {
      return l(a, b);
    }
    function l(a, b) {
      a = a.element;
      while (a) {
        if (
          a.getAttribute(
            c("vc-tracker").VisualCompletionConstants.ATTRIBUTE_NAME
          ) ===
            c("vc-tracker").VisualCompletionConstants.IGNORE_LATE_MUTATION ||
          b.lateMutationIgnoreElements.has(a)
        )
          return !0;
        a = a.parentElement;
      }
      return !1;
    }
    function m(a, b, d) {
      i(a, b, d);
      a = 10;
      b = 0;
      var e = 0,
        f = 0;
      for (var g = d.elements.length - 1; g >= 0; g--) {
        var h = d.elements[g];
        (h.hadLateMutationExpected || h.hadLateMutationUnexpected) &&
          ((e += h.hadLateMutationExpected ? 1 : 0),
          (f += h.hadLateMutationUnexpected ? 1 : 0),
          (b = h.hadLateMutationExpected && e + f >= a ? 1 : 0));
      }
      c("addAnnotations")(d.annotations, {
        int: { lmCountExpected: e, lmCountUnexpected: f },
        bool: {
          hadLateMutationExpected: e > 0,
          hadLateMutationUnexpected: f > 0,
        },
      });
      h = a - f - b;
      g = [];
      var j;
      b = !1;
      var k = 1;
      e = 1;
      f = 1;
      for (var l = d.elements.length - 1; l >= 0; l--) {
        var m = d.elements[l];
        if (m.hadLateMutationUnexpected || m.hadLateMutationExpected) {
          var o = {
            hadLateMutationExpected: m.hadLateMutationExpected,
            hadLateMutationUnexpected: m.hadLateMutationUnexpected,
            mutationType: m.mutationType,
            type: m.type,
            height: m.rectangle.bottom - m.rectangle.top,
            width: m.rectangle.right - m.rectangle.left,
          };
          m.element && (o.tagName = m.element.tagName);
          m.pagelet && (o.pagelet = m.pagelet.name);
          !b &&
            m.hadLateMutationUnexpected &&
            ((o.reactStack = m.reactStack), (b = !0));
          j = {
            markerPointData: o,
            markerPointTitle: n(o, m.hadLateMutationUnexpected ? f : e),
            element: m,
            timestamp: m.latency,
          };
          (e <= h || m.hadLateMutationUnexpected) &&
            k < a &&
            (m.hadLateMutationUnexpected ? f++ : e++, g.push(j), k++);
        }
      }
      j && k === a && g.push(j);
      o = g.length;
      if (o > 1) {
        m = g[o - 1];
        m.markerPointData.reactStack = m.element.reactStack;
      }
      g.forEach(function (a) {
        return d.markerPoints.set(a.markerPointTitle, {
          data: a.markerPointData,
          timestamp: a.timestamp,
        });
      });
    }
    function n(a, b) {
      return (
        "late_mutation/" +
        (a.hadLateMutationUnexpected ? "unexpected" : "expected") +
        "_" +
        b
      );
    }
    function o(a) {
      var b = a.pagelets.reduce(function (a, b) {
        return "firstPaint" in b.points ? Math.min(a, b.points.firstPaint) : a;
      }, Number.MAX_SAFE_INTEGER);
      b !== Number.MAX_SAFE_INTEGER &&
        c("addAnnotations")(a.annotations, {
          int: { progressiveRenderCost: a.vcWithoutImage - b },
        });
    }
    function p(a) {
      var b = a.pagelets.reduce(function (a, b) {
          return "firstPaint" in b.points && b.data.lateMutation
            ? Math.min(a, b.points.firstPaint)
            : a;
        }, Number.MAX_SAFE_INTEGER),
        d = a.pagelets.reduce(function (a, b) {
          return "vcWithoutImage" in b.points && b.data.lateMutation
            ? Math.max(a, b.points.vcWithoutImage)
            : a;
        }, Number.MIN_SAFE_INTEGER);
      b !== Number.MAX_SAFE_INTEGER &&
        d !== Number.MIN_SAFE_INTEGER &&
        c("addAnnotations")(a.annotations, {
          int: { SsrPageletLmCost: d - b },
        });
    }
    g.logLateMutationData = a;
    g.logLateMutationMarkerPoints = m;
  },
  98
);
__d(
  "MemoryUtils",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function g() {
      return window.performance && window.performance.memory;
    }
    function a() {
      return (
        window.performance &&
        typeof window.performance.measureUserAgentSpecificMemory === "function"
      );
    }
    function b() {
      if (g()) {
        typeof window.gc === "function" && window.gc();
        var a = window.performance.memory;
        return { usedJSHeapSize: a.usedJSHeapSize };
      }
      return { usedJSHeapSize: null };
    }
    f.isMemoryAPISupported = g;
    f.isMeasureMemoryOriginTrialSupported = a;
    f.getCurrentMemory = b;
  },
  66
);
__d(
  "NetInfo",
  ["NetworkStatus", "Promise"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = new Map();
    a = {
      isConnected: {
        addEventListener: function (a, b) {
          (a = h.get(b)) == null ? void 0 : a.remove();
          var d = c("NetworkStatus").onChange(function (a) {
            b(a.online);
          });
          h.set(b, d);
          return {
            remove: function () {
              d.remove(), h["delete"](b);
            },
          };
        },
        removeEventListener: function (a, b) {
          (a = h.get(b)) == null ? void 0 : a.remove();
          h["delete"](b);
        },
        fetch: function () {
          return b("Promise").resolve(c("NetworkStatus").isOnline());
        },
      },
    };
    d = a;
    g["default"] = d;
  },
  98
);
__d(
  "getVisualCompletionDefaultConfig",
  ["JSScheduler", "gkx"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      return {
        defer_expensive_calculation: function (a) {
          d("JSScheduler").scheduleLoggingPriCallback(a);
        },
        observeTextMutation: !1,
        retain_element_reference:
          c("gkx")("950768") || c("gkx")("1293035") || c("gkx")("1537962"),
        use_image_download_tracker: c("gkx")("6017"),
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "VisualCompletionAdapter",
  [
    "QPLEvent",
    "getVisualCompletionDefaultConfig",
    "interaction-tracing-metrics",
    "performanceNowSinceAppStart",
    "vc-tracker",
  ],
  function (a, b, c, d, e, f, g) {
    var h = new Map(),
      i = 4;
    function a(a, b) {
      a = d("interaction-tracing-metrics").InteractionTracingMetricsCore.get(a);
      a == null
        ? void 0
        : (a = a.vcTracker) == null
        ? void 0
        : a.observeMutation(b);
    }
    function b(a, b, e) {
      var f,
        g = ((f = h.get(a)) != null ? f : 0) + 1,
        j = null;
      h.set(a, g);
      var k = c("vc-tracker").getCurrentNavigationVCTrace();
      if (k != null) {
        if (g >= i) return function () {};
        j = k.traceID;
        k.addMarkerPoint(
          a + "_" + g + "_start",
          c("performanceNowSinceAppStart")(),
          { interactionId: b, qplEvent: d("QPLEvent").getMarkerId(e) }
        );
      }
      return function () {
        k != null &&
          k.traceID === j &&
          k.addMarkerPoint(
            a + "_" + g + "_end",
            c("performanceNowSinceAppStart")()
          );
      };
    }
    function e(a, b, d, e, f) {
      d = new a.VisualCompletionTracing(
        d,
        f,
        b,
        e,
        c("getVisualCompletionDefaultConfig")()
      );
      d.onComplete(function (b) {
        a.setLastNavigationVCReport(b);
      });
      a.setLastNavigationVCReport(null);
      a.setCurrentNavigationVCTrace(d);
      h.clear();
      return d;
    }
    function f(a, b, d, e) {
      return new a.VisualCompletionTracing(
        d,
        0,
        b,
        e,
        c("getVisualCompletionDefaultConfig")()
      );
    }
    g.observeMutation = a;
    g.markOtherInteractionSubspanToNavigationVC = b;
    g.traceNavigationVC = e;
    g.traceInteractionVC = f;
  },
  98
);
__d(
  "OneTraceCore",
  ["addAnnotations"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = null,
      i = null,
      j = new Map(),
      k = {
        "trace-start": new Set(),
        "trace-end": new Set(),
        "trace-end-before-logging": new Set(),
      },
      l = 1,
      m = null;
    function a(a, b, c, d) {
      var e = l++,
        f = {
          traceID: a,
          tracePolicy: b,
          traceType: c,
          instanceKey: e,
          status: "START",
          startTime: d,
          endTime: null,
          annotations: {
            string: {},
            int: {},
            double: {},
            bool: {},
            string_array: {},
            int_array: {},
            double_array: {},
            bool_array: {},
          },
          markerPoints: {},
        };
      j.set(a, f);
      k["trace-start"].forEach(function (a) {
        return a(f);
      });
      c === "INITIAL_LOAD" || c === "NAVIGATION"
        ? (h = f)
        : c === "INTERACTION" && (i = f);
      return f;
    }
    function b(a, b) {
      a = j.get(a);
      a && (a.tracePolicy = b);
    }
    function d(a) {
      m = a;
    }
    function e(a, b, d) {
      var e = j.get(a);
      if (e) {
        var f = n(),
          g = o();
        c("addAnnotations")(e.annotations, {
          string: {
            tracePolicy: e.tracePolicy,
            currentRouteTracePolicy: f == null ? void 0 : f.tracePolicy,
            recentInteractionTracePolicy: g == null ? void 0 : g.tracePolicy,
            lastNavigationTracePolicy: m,
          },
        });
        e.endTime = b;
        e.status = d;
        j["delete"](a);
        k["trace-end-before-logging"].forEach(function (a) {
          return a(e);
        });
        k["trace-end"].forEach(function (a) {
          return a(e);
        });
      }
      return e;
    }
    function f(a, b) {
      k[a].add(b);
      return function () {
        k[a]["delete"](b);
      };
    }
    function n() {
      return h;
    }
    function o() {
      return i;
    }
    e = {
      currentTraces: j,
      endTrace: e,
      subscribe: f,
      getLastNavigation: n,
      setLastNavigationTracePolicy: d,
      setTracePolicy: b,
      startTrace: a,
    };
    g["default"] = e;
  },
  98
);
__d(
  "ImagePerfLogger",
  [
    "OneTraceCore",
    "VisibilityState",
    "addAnnotations",
    "performance",
    "uuidv4",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      a =
        c("performance") &&
        c("performance").getEntriesByName &&
        c("performance").getEntriesByName(a);
      return a && a[0];
    }
    function i(a) {
      a = a.match(/\.(\w+)(\?|$)/);
      if (a && a.length > 1) return a[1];
      else return "";
    }
    function a(a) {
      var b,
        e = a.elementTiming;
      if (!e) return;
      var f = e.url,
        g = a.commitTime,
        j = e.renderTime,
        k = f != null ? h(f) : null;
      typeof (k == null ? void 0 : k.startTime) === "number" &&
        (g = Math.min(g, k.startTime));
      typeof (k == null ? void 0 : k.responseEnd) === "number" &&
        (j = Math.max(j, k.responseEnd));
      var l = c("uuidv4")(),
        m = c("OneTraceCore").startTrace(
          l,
          (b =
            (b = c("OneTraceCore").getLastNavigation()) == null
              ? void 0
              : b.tracePolicy) != null
            ? b
            : "",
          "IMAGE",
          g
        );
      if (
        typeof ((b = a.element) == null ? void 0 : b.getAttribute) ===
        "function"
      ) {
        b = a.element.getAttribute("data-imgperflogname");
        b != null && b !== "" && a.annotationString.set("imageName", b);
      }
      if (e.loadTime != null) {
        b = e.loadTime;
        a.points.set("loadTime", b);
        j = Math.max(j, b);
      }
      if (e.renderTime != null) {
        b = e.renderTime;
        a.points.set("paintTime", b);
        j = Math.max(j, b);
      }
      b = f != null ? i(f) : null;
      b != null && b !== "" && a.annotationString.set("fileExt", b);
      a.annotationInt.set(
        "hidden",
        Number(d("VisibilityState").wasHidden(g, j))
      );
      e.intersectionRect != null &&
        (a.annotationInt.set("naturalHeight", e.naturalHeight),
        a.annotationInt.set("naturalWidth", e.naturalWidth),
        a.annotationInt.set("height", e.intersectionRect.height),
        a.annotationInt.set("width", e.intersectionRect.width));
      a.element != null &&
        (a.annotationInt.set("viewWidth", a.element.clientWidth),
        a.annotationInt.set("viewHeight", a.element.clientHeight));
      a.annotationString.set("identifier", e.identifier);
      k != null &&
        ([
          "connectEnd",
          "connectStart",
          "domainLookupEnd",
          "domainLookupStart",
          "fetchStart",
          "redirectEnd",
          "redirectStart",
          "requestStart",
          "responseEnd",
          "responseStart",
          "secureConnectionStart",
          "startTime",
          "workerStart",
        ].forEach(function (a) {
          k != null &&
            typeof k[a] === "number" &&
            k[a] >= g &&
            (m.markerPoints[a] = { timeSinceStart: k[a] });
        }),
        ["decodedBodySize", "encodedBodySize", "transferSize"].forEach(
          function (b) {
            k != null &&
              typeof k[b] === "number" &&
              a.annotationInt.set(b, k[b]);
          }
        ),
        k != null &&
          typeof k.nextHopProtocol === "string" &&
          a.annotationString.set("nextHopProtocol", k.nextHopProtocol));
      b = f != null ? f.match(/[?&]cb=([^&]+).*$/) : null;
      b && b.length > 1 && a.annotationString.set("cbParameter", b[1]);
      c("addAnnotations")(m.annotations, {
        string: Object.fromEntries(a.annotationString),
        int: Object.fromEntries(a.annotationInt),
      });
      a.points.forEach(function (a, b) {
        m.markerPoints[b] = { timeSinceStart: a };
      });
      c("OneTraceCore").endTrace(l, j, "SUCCESS");
    }
    g.logImagePerf = a;
  },
  98
);
__d(
  "ImagePerfTracker",
  ["ImagePerfLogger", "OneTraceCore", "setTimeoutAcrossTransitions"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 6e4,
      i = new Map(),
      j =
        typeof ((e = window.PerformanceObserver) == null
          ? void 0
          : (f = e.supportedEntryTypes) == null
          ? void 0
          : f.includes) === "function" &&
        window.PerformanceObserver.supportedEntryTypes.includes("element"),
      k = !1,
      l = null;
    function a() {
      if (k) return;
      k = !0;
      if (!j) return;
      typeof WeakSet === "function" &&
        c("OneTraceCore").subscribe("trace-start", function (a) {
          (a.traceType === "INITIAL_LOAD" || a.traceType === "NAVIGATION") &&
            (l = new WeakSet());
        });
      var a = new window.PerformanceObserver(function (a) {
        a = a.getEntries();
        a.forEach(function (a) {
          var b = a.element;
          if (b) {
            b = i.get(b);
            b && ((b.elementTiming = a), n(b));
          }
        });
      });
      a.observe({ buffered: !0, type: "element" });
    }
    function b(a, b, d, e) {
      a = a;
      if (!j || !k) return;
      if (!a.hasAttribute("elementtiming")) return;
      var f = i.get(a);
      if (f && f.url === d) return;
      if ((f = l) == null ? void 0 : f.has(a)) return;
      var g = {
        annotationInt: new Map(),
        annotationString: new Map(),
        setTimeoutID: null,
        commitTime: b,
        element: a,
        points: new Map(),
        url: d,
      };
      Object.keys(e).forEach(function (a) {
        var b = e[a];
        typeof b === "string"
          ? g.annotationString.set(a, b)
          : typeof b === "number" && g.annotationInt.set(a, b);
      });
      g.points.set("commitTime", b);
      g.annotationString.set(
        "tracePolicy",
        (d =
          (f = c("OneTraceCore").getLastNavigation()) == null
            ? void 0
            : f.tracePolicy) != null
          ? d
          : ""
      );
      i.set(a, g);
      g.setTimeoutID = c("setTimeoutAcrossTransitions")(function () {
        m(g);
      }, h);
    }
    function m(a) {
      a.setTimeoutID != null &&
        (clearTimeout(a.setTimeoutID), (a.setTimeoutID = null)),
        i["delete"](a.element);
    }
    function n(a) {
      if (a.elementTiming != null && a.elementTiming.loadTime >= a.commitTime) {
        var b;
        (b = l) == null ? void 0 : b.add(a.element);
        d("ImagePerfLogger").logImagePerf(a);
        m(a);
      }
    }
    g.init = a;
    g.trackImagePerf = b;
  },
  98
);
__d(
  "LongtaskObserver",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g =
        typeof ((c = window.PerformanceObserver) == null
          ? void 0
          : (d = c.supportedEntryTypes) == null
          ? void 0
          : d.includes) === "function" &&
        window.PerformanceObserver.supportedEntryTypes.includes("longtask"),
      h = new Set(),
      i = !1;
    function a() {
      if (!i) {
        if (g) {
          var a = new window.PerformanceObserver(function (a) {
            a = a.getEntries();
            a.forEach(function (a) {
              h.forEach(function (b) {
                b(a);
              });
            });
          });
          a.observe({ buffered: !0, type: "longtask" });
        }
        i = !0;
      }
    }
    function b(a) {
      if (g) {
        h.add(a);
        return function () {
          h["delete"](a);
        };
      } else return function () {};
    }
    f.canUseLongTasksAPI = g;
    f.init = a;
    f.subscribe = b;
  },
  66
);
__d(
  "ResponsivenessTracker",
  [
    "LongtaskObserver",
    "OneTraceCore",
    "VisibilityState",
    "WebAPIs",
    "addAnnotations",
    "performanceNowSinceAppStart",
    "uuidv4",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 100,
      i = 3,
      j = ["click", "keyup"],
      k = !1,
      l = 1,
      m =
        typeof ((b = window.PerformanceObserver) == null
          ? void 0
          : (e = b.supportedEntryTypes) == null
          ? void 0
          : e.includes) === "function" &&
        window.PerformanceObserver.supportedEntryTypes.includes("event");
    function n(a) {
      var b = new Set();
      c("OneTraceCore").currentTraces.forEach(function (c) {
        c.traceID !== a.traceID &&
          c.traceType !== "RESPONSIVENESS" &&
          b.add(c.traceType);
      });
      b.size > 0 &&
        c("addAnnotations")(a.annotations, {
          string_array: { currentTraceTypes: Array.from(b).sort() },
        });
    }
    var o = null;
    function p(a, b) {
      if (o) {
        var d = o,
          e = d.metrics.annotations;
        d.navigationMetrics.endTime != null &&
          (d.metrics.markerPoints.navigationEnd = {
            timeSinceStart: d.navigationMetrics.endTime,
          });
        for (var f in d.longtaskStat) {
          var g,
            h = d.longtaskStat[f];
          c("addAnnotations")(e, {
            int:
              ((g = {}),
              (g[f + "Count"] = h.count),
              (g[f + "Total"] = h.total),
              (g[f + "Max"] = h.max),
              (g[f + "Avg"] = h.count > 0 ? h.total / h.count : 0),
              g),
          });
        }
        c("addAnnotations")(e, {
          int: { ST200: d.ST200, ST500: d.ST500, ST1000: d.ST1000 },
          string: { exitAction: a },
        });
        d.metrics.tracePolicy = d.navigationMetrics.tracePolicy;
        c("OneTraceCore").endTrace(d.metrics.traceID, b, "SUCCESS");
      }
    }
    function q(a, b, c, d) {
      if (o) {
        var e = o,
          f = e.longtaskStat[a];
        f.count++;
        f.total += c;
        f.max = Math.max(f.max, c);
        var g = null;
        f.count === d
          ? (g = a + "_{n}")
          : f.count < d && (g = a + "_" + f.count);
        g != null &&
          ((e.metrics.markerPoints[g + "_start"] = { timeSinceStart: b }),
          (e.metrics.markerPoints[g + "_end"] = { timeSinceStart: b + c }));
      }
    }
    var r = null;
    function s(a, b) {
      if (r) {
        var d = r;
        d &&
          (o = {
            metrics: c("OneTraceCore").startTrace(
              c("uuidv4")(),
              a,
              "RESPONSIVENESS",
              b
            ),
            navigationMetrics: d,
            longtaskStat: {
              inputDelay: { count: 0, total: 0, max: 0 },
              longtask: { count: 0, total: 0, max: 0 },
            },
            ST200: 0,
            ST500: 0,
            ST1000: 0,
          });
      }
    }
    function a(a) {
      if (!k) {
        var b;
        k = !0;
        if (!m || !d("LongtaskObserver").canUseLongTasksAPI) return;
        var e = (b = a.Responsiveness.overrideDelayThreshold) != null ? b : h,
          f = (b = a.Responsiveness.overrideMaxSubspans) != null ? b : i;
        d("LongtaskObserver").subscribe(function (b) {
          var d;
          if (b.duration < e) return;
          q("longtask", b.startTime, b.duration, f);
          if (l > a.Responsiveness.INSTANCE_COUNT_LIMIT) return;
          d = c("OneTraceCore").startTrace(
            c("uuidv4")(),
            (d = c("OneTraceCore").getLastNavigation()) == null
              ? void 0
              : d.tracePolicy,
            "LONGTASK",
            b.startTime
          );
          c("addAnnotations")(d.annotations, { int: { instanceNum: l++ } });
          n(d);
          c("OneTraceCore").endTrace(
            d.traceID,
            b.startTime + b.duration,
            "SUCCESS"
          );
        });
        if (m) {
          var g = new Set(
            (b = a.Responsiveness.overrideDelayedEventTypeFilter) != null
              ? b
              : j
          );
          b = new window.PerformanceObserver(function (b) {
            b.getEntries().forEach(function (b) {
              if (!g.has(b.name)) return;
              var h = b.processingStart - b.startTime;
              if (h >= e) {
                h = c("OneTraceCore").startTrace(
                  c("uuidv4")(),
                  (h = c("OneTraceCore").getLastNavigation()) == null
                    ? void 0
                    : h.tracePolicy,
                  "INPUT_DELAY",
                  b.startTime
                );
                var i = b.processingStart - b.startTime;
                c("addAnnotations")(h.annotations, {
                  int: {
                    hidden: Number(
                      d("VisibilityState").wasHidden(
                        b.startTime,
                        b.processingStart
                      )
                    ),
                  },
                  string: { inputEventType: b.name },
                });
                n(h);
                if (
                  a.Responsiveness.getReactComponentStackFromDOMElement !=
                    null &&
                  b.target != null
                ) {
                  var j = a.Responsiveness.getReactComponentStackFromDOMElement,
                    k = b.target;
                  j = j(k);
                  if (j != null) {
                    k = j.indexOf("HeroPagelet");
                    k >= 0 && j.splice(k);
                    c("addAnnotations")(h.annotations, {
                      string_array: { reactStack: j },
                    });
                  }
                }
                c("OneTraceCore").endTrace(
                  h.traceID,
                  b.processingStart,
                  "SUCCESS"
                );
                q("inputDelay", b.startTime, i, f);
                o != null &&
                  i >= 200 &&
                  ((o.ST200 += i),
                  i >= 500 && ((o.ST500 += i), i >= 1e3 && (o.ST1000 += i)));
              }
            });
          });
          b.observe({ buffered: !0, type: "event" });
        }
        c("OneTraceCore").currentTraces.forEach(function (a) {
          a.traceType === "INITIAL_LOAD" &&
            ((r = a), s(a.tracePolicy, a.startTime));
        });
        c("OneTraceCore").subscribe("trace-start", function (a) {
          (a.traceType === "INITIAL_LOAD" || a.traceType === "NAVIGATION") &&
            (o != null && p("navigation", a.startTime),
            (r = a),
            s(a.tracePolicy, a.startTime));
        });
        d("VisibilityState").subscribe(function (a, b) {
          if (b) p("VisibilityState", a);
          else {
            b =
              (b = c("OneTraceCore").getLastNavigation()) == null
                ? void 0
                : b.tracePolicy;
            a = a;
            s(b, a);
          }
        });
        d("WebAPIs").onBeforeUnload(function () {
          p("unload", c("performanceNowSinceAppStart")());
        });
      }
    }
    g.init = a;
  },
  98
);
__d(
  "setTimeoutCometInternals",
  ["JSScheduler"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = new Map(),
      i = 0;
    function a(a) {
      if (a != null) {
        var b = h.get(a);
        b !== void 0 &&
          (h["delete"](a),
          d("JSScheduler").cancelDelayedCallback_DO_NOT_USE(b));
      }
    }
    function b(a) {
      if (a != null) {
        var b = h.get(a);
        b !== void 0 &&
          (h["delete"](a),
          d("JSScheduler").cancelDelayedCallback_DO_NOT_USE(b));
      }
    }
    function c(a, b, c) {
      for (
        var e = arguments.length, f = new Array(e > 3 ? e - 3 : 0), g = 3;
        g < e;
        g++
      )
        f[g - 3] = arguments[g];
      var j = i;
      i += 1;
      if (typeof b !== "function") return j;
      var k = function e() {
          var g = d("JSScheduler").scheduleDelayedCallback_DO_NOT_USE(a, c, e);
          h.set(j, g);
          b.apply(void 0, f);
        },
        l = d("JSScheduler").scheduleDelayedCallback_DO_NOT_USE(a, c, k);
      h.set(j, l);
      return j;
    }
    function e(a, b, c) {
      for (
        var e = arguments.length, f = new Array(e > 3 ? e - 3 : 0), g = 3;
        g < e;
        g++
      )
        f[g - 3] = arguments[g];
      var j = i;
      i += 1;
      if (typeof b !== "function") return j;
      var k = d("JSScheduler").scheduleDelayedCallback_DO_NOT_USE(
        a,
        c,
        function () {
          h["delete"](j), b.apply(void 0, f);
        }
      );
      h.set(j, k);
      return j;
    }
    g.clearInterval_DO_NOT_USE = a;
    g.clearTimeout_DO_NOT_USE = b;
    g.setIntervalAtPriority_DO_NOT_USE = c;
    g.setTimeoutAtPriority_DO_NOT_USE = e;
  },
  98
);
__d(
  "setTimeoutCometLoggingPri",
  ["JSScheduler", "setTimeoutCometInternals"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      for (
        var c = arguments.length, e = new Array(c > 2 ? c - 2 : 0), f = 2;
        f < c;
        f++
      )
        e[f - 2] = arguments[f];
      return d(
        "setTimeoutCometInternals"
      ).setTimeoutAtPriority_DO_NOT_USE.apply(
        d("setTimeoutCometInternals"),
        [d("JSScheduler").priorities.unstable_Low, a, b].concat(e)
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "ScrollPerfTracker",
  [
    "LongtaskObserver",
    "OneTraceCore",
    "addAnnotations",
    "clearTimeout",
    "performanceNowSinceAppStart",
    "setTimeoutCometLoggingPri",
    "uuidv4",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = new Map(),
      i = "data-scrolltracepolicy",
      j = 200,
      k = 500,
      l = !1;
    function a(a) {
      if (!l) {
        a = function (a) {
          var b = h.get(a.target);
          b ||
            ((a.target === window.document ||
              (a.target instanceof Element &&
                typeof a.target.getAttribute === "function" &&
                a.target.getAttribute(i) != null)) &&
              (b = m(a)));
          b &&
            ((b.metrics.markerPoints.lastScrollEvent = {
              timeSinceStart: a.timeStamp,
            }),
            b.scrollEventCount++,
            b.debounceTimeoutID != null &&
              c("clearTimeout")(b.debounceTimeoutID),
            (b.debounceTimeoutID = c("setTimeoutCometLoggingPri")(
              n,
              k,
              b,
              a.target
            )));
        };
        d("LongtaskObserver").canUseLongTasksAPI &&
          window.addEventListener("scroll", a, { capture: !0, passive: !0 });
        l = !0;
      }
    }
    function m(a) {
      var b = c("OneTraceCore").getLastNavigation(),
        e = a.timeStamp,
        f = c("uuidv4")(),
        g = b == null ? void 0 : b.tracePolicy,
        j =
          a.target instanceof Element &&
          typeof a.target.getAttribute === "function"
            ? a.target.getAttribute(i)
            : null;
      j = c("OneTraceCore").startTrace(f, (f = j) != null ? f : g, "SCROLL", e);
      var k = {
        longtasks: [],
        scrollEventCount: 0,
        metrics: j,
        unsubscribeLongtaskObserver: d("LongtaskObserver").subscribe(function (
          a
        ) {
          k.longtasks.push(a);
        }),
      };
      c("addAnnotations")(j.annotations, {
        int: { isNavigationPending: Number(!b || b.endTime == null) },
        string: { traceType: "SCROLL" },
      });
      j.markerPoints.firstScrollEvent = { timeSinceStart: e };
      j.markerPoints.handlerStart = {
        timeSinceStart: c("performanceNowSinceAppStart")(),
      };
      (b == null ? void 0 : b.endTime) != null &&
        c("addAnnotations")(j.annotations, {
          int: { timeSinceLastNavigation: e - b.endTime },
        });
      h.set(a.target, k);
      return k;
    }
    function n(a, b) {
      var d = c("performanceNowSinceAppStart")(),
        e = a.metrics;
      e.endTime = d;
      c("addAnnotations")(e.annotations, {
        int: {
          scrollDuration: d - e.startTime,
          scrollEventCount: a.scrollEventCount,
          longtaskCount: a.longtasks.length,
        },
      });
      var f = 0;
      if (a.longtasks.length > 0) {
        var g = 0,
          i = 0;
        a.longtasks.forEach(function (a) {
          a.duration >= j && i++,
            a.startTime < e.startTime
              ? (f += a.duration - e.startTime + a.startTime)
              : (f += a.duration),
            a.duration > g && (g = a.duration);
        });
        c("addAnnotations")(e.annotations, {
          int: {
            largeLongtaskCount: i,
            maxLongtaskDuration: g,
            avgLongtaskDuration: f / a.longtasks.length,
          },
        });
      }
      c("addAnnotations")(e.annotations, { int: { totalLongtaskDuration: f } });
      a.unsubscribeLongtaskObserver();
      h["delete"](b);
      c("OneTraceCore").endTrace(e.traceID, d, "SUCCESS");
    }
    function b(a, b) {
      b === void 0 && (b = c("performanceNowSinceAppStart")());
      var e = c("OneTraceCore").getLastNavigation();
      if (!e || e.endTime == null) return function () {};
      var f = [],
        g = c("OneTraceCore").startTrace(c("uuidv4")(), a, "SCROLL", b);
      c("addAnnotations")(g.annotations, {
        int: { isNavigationPending: 0 },
        string: { traceType: "SCROLL" },
      });
      var h = d("LongtaskObserver").subscribe(function (a) {
        f.push(a);
      });
      return function () {
        var a = c("performanceNowSinceAppStart")();
        h();
        g.endTime = a;
        c("addAnnotations")(g.annotations, {
          int: { scrollDuration: a - g.startTime, longtaskCount: f.length },
        });
        if (f.length > 0) {
          var b = 0,
            d = 0,
            e = 0;
          f.forEach(function (a) {
            a.duration >= j && e++,
              a.startTime < g.startTime
                ? (b += a.duration - g.startTime + a.startTime)
                : (b += a.duration),
              a.duration > d && (d = a.duration);
          });
          c("addAnnotations")(g.annotations, {
            int: {
              largeLongtaskCount: e,
              maxLongtaskDuration: d,
              avgLongtaskDuration: b / f.length,
              totalLongtaskDuration: b,
            },
          });
        }
        c("OneTraceCore").endTrace(g.traceID, a, "SUCCESS");
      };
    }
    g.SCROLL_PERF_ATTRIBUTE_NAME = i;
    g.init = a;
    g.customScrollTracker = b;
  },
  98
);
__d(
  "TypingPerfMetric",
  [
    "WebAPIs",
    "clearTimeout",
    "performanceNowSinceAppStart",
    "setTimeoutAcrossTransitions",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 2e3;
    function i(a) {
      if (a.code === "Space" && a.ctrlKey && a.metaKey) return !0;
      return a.code === "Period" && a.getModifierState("OS") ? !0 : !1;
    }
    function a(a, b, d) {
      var e = null,
        f = 0,
        g = 0,
        i = 0,
        j = 0,
        l = [],
        m = null,
        n = function () {
          f !== 0 &&
            d({
              allTimes: l,
              averageTimeToRender: g,
              keypresses: f,
              max: i,
              min: j,
            }),
            (f = 0),
            (g = 0),
            (i = 0),
            (j = 0),
            (l = []);
        },
        o = function () {
          (e = null), n();
        },
        p = k(a, function (d) {
          d = d.timestamps;
          e == null
            ? ((e = a), b && b())
            : e !== a &&
              (n(),
              m != null && (c("clearTimeout")(m), (m = null)),
              (e = a),
              b && b());
          d = d.finalRAF - d.keydown;
          d > 0 &&
            (f++,
            l.push(d),
            (g = (g * (f - 1) + d) / f),
            d > i && (i = d),
            (d < j || j === 0) && (j = d));
          m != null && c("clearTimeout")(m);
          m = c("setTimeoutAcrossTransitions")(o, h);
        });
      return function () {
        p(), n(), m != null && (c("clearTimeout")(m), (m = null)), (e = null);
      };
    }
    var j = { lastRequestedAnimationFrame: null };
    function k(a, b) {
      var e = 20,
        f = new Float64Array(e),
        g = new Float64Array(e),
        h = new Float64Array(e),
        k = -1,
        l = -1,
        m = 0,
        n = !1,
        o = function (a) {
          (k = a.timeStamp),
            (l = c("performanceNowSinceAppStart")()),
            (n = i(a));
        },
        p = function () {
          n = !0;
        },
        q = function () {
          n = !0;
        };
      a.addEventListener("keydown", o);
      a.addEventListener("paste", p);
      a.addEventListener("cut", q);
      var r = !1,
        s = new MutationObserver(function (i) {
          if (n) {
            n = !1;
            k = -1;
            l = -1;
            return;
          }
          if (m >= e) {
            k = -1;
            l = -1;
            return;
          }
          var o = c("performanceNowSinceAppStart")(),
            p = !1;
          for (
            var i = i,
              q = Array.isArray(i),
              s = 0,
              i = q
                ? i
                : i[
                    typeof Symbol === "function"
                      ? Symbol.iterator
                      : "@@iterator"
                  ]();
            ;

          ) {
            var t;
            if (q) {
              if (s >= i.length) break;
              t = i[s++];
            } else {
              s = i.next();
              if (s.done) break;
              t = s.value;
            }
            t = t;
            t =
              t.type === "characterData" ||
              (t.type === "childList" && t.addedNodes.length !== 0) ||
              (t.type === "attributes" &&
                t.target.nodeName === "INPUT" &&
                t.attributeName === "value");
            if (!t || k === -1 || p) continue;
            f[m] = k;
            g[m] = l;
            h[m] = o;
            k = -1;
            l = -1;
            m++;
            p = !0;
            if (r) return;
            j.lastRequestedAnimationFrame = d("WebAPIs").requestAnimationFrame(
              function (c) {
                r = !1;
                var e = h[0];
                if (c - e < 0)
                  j.lastRequestedAnimationFrame = d(
                    "WebAPIs"
                  ).requestAnimationFrame(function (e) {
                    for (var i = 0; i < m; i++) {
                      var c = f[i],
                        d = h[i];
                      b({
                        delta: e - c,
                        element: a,
                        firedOnSecondRAF: !0,
                        mutations: m,
                        timestamps: { finalRAF: e, keydown: c, mutation: d },
                      });
                      f[i] = 0;
                      g[i] = 0;
                      h[i] = 0;
                    }
                    m = 0;
                  });
                else {
                  for (e = 0; e < m; e++) {
                    var i = f[e],
                      k = h[e];
                    b({
                      delta: c - i,
                      element: a,
                      firedOnSecondRAF: !0,
                      mutations: m,
                      timestamps: { finalRAF: c, keydown: i, mutation: k },
                    });
                    f[e] = 0;
                    g[e] = 0;
                    h[e] = 0;
                  }
                  m = 0;
                }
              }
            );
            r = !0;
          }
        });
      s.observe(a, {
        attributeFilter: ["value"],
        attributes: !0,
        characterData: !0,
        childList: !0,
        subtree: !0,
      });
      return function () {
        s.disconnect();
        a.removeEventListener("keydown", o);
        a.removeEventListener("paste", p);
        a.removeEventListener("cut", q);
        var b = j.lastRequestedAnimationFrame;
        b != null && d("WebAPIs").cancelAnimationFrame(b);
      };
    }
    g.measureAverageTypingPerformance = a;
  },
  98
);
__d(
  "TypingPerfMetric.experimental",
  [
    "clearTimeout",
    "performanceNowSinceAppStart",
    "setTimeoutAcrossTransitions",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 2e3,
      i = new Set([
        "insertText",
        "insertCompositionText",
        "insertFromComposition",
        "insertLineBreak",
        "insertParagraph",
        "deleteCompositionText",
        "deleteContentBackward",
        "deleteByComposition",
        "deleteContent",
        "deleteContentForward",
        "deleteWordBackward",
        "deleteWordForward",
        "deleteHardLineBackward",
        "deleteSoftLineBackward",
        "deleteHardLineForward",
        "deleteSoftLineForward",
      ]);
    function a(a, b, d) {
      var e = null,
        f = 0,
        g = 0,
        i = 0,
        j = 0,
        l = [],
        m = null,
        n = function () {
          f !== 0 &&
            d({
              allTimes: l,
              averageTimeToRender: g,
              keypresses: f,
              max: i,
              min: j,
            }),
            (f = 0),
            (g = 0),
            (i = 0),
            (j = 0),
            (l = []);
        },
        o = function () {
          (e = null), n();
        },
        p = k(a, function (d) {
          e == null
            ? ((e = a), b && b())
            : e !== a &&
              (n(),
              m != null && (c("clearTimeout")(m), (m = null)),
              (e = a),
              b && b()),
            d > 0 &&
              (f++,
              l.push(d),
              (g = (g * (f - 1) + d) / f),
              d > i && (i = d),
              (d < j || j === 0) && (j = d)),
            m != null && c("clearTimeout")(m),
            (m = c("setTimeoutAcrossTransitions")(o, h));
        });
      return function () {
        p(), n(), m != null && (c("clearTimeout")(m), (m = null)), (e = null);
      };
    }
    var j = { lastSetTimeout: null };
    function k(a, b) {
      var d = !1,
        e = function () {
          var a = c("performanceNowSinceAppStart")();
          j.lastSetTimeout = window.setTimeout(function () {
            if (d) {
              d = !1;
              return;
            }
            var e = c("performanceNowSinceAppStart")();
            b(e - a);
          }, 0);
        },
        f = function (a) {
          if (!i.has(a.inputType) || d) {
            d = !1;
            return;
          }
          e();
        },
        g = function (a) {
          a = a.keyCode;
          (a === 8 || a === 13) && e();
        },
        h = function () {
          d = !0;
        },
        k = function () {
          d = !0;
        };
      a.addEventListener("keydown", g, !0);
      a.addEventListener("beforeinput", f, !0);
      a.addEventListener("paste", h, !0);
      a.addEventListener("cut", k, !0);
      return function () {
        a.removeEventListener("keydown", g, !0);
        a.removeEventListener("beforeinput", f, !0);
        a.removeEventListener("paste", h, !0);
        a.removeEventListener("cut", k, !0);
        var b = j.lastSetTimeout;
        b != null && c("clearTimeout")(b);
      };
    }
    g.measureAverageTypingPerformance = a;
  },
  98
);
__d(
  "TypingPerfTracker",
  [
    "OneTraceCore",
    "TypingPerfMetric",
    "TypingPerfMetric.experimental",
    "WebAPIs",
    "addAnnotations",
    "performanceNowSinceAppStart",
    "uuidv4",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = null;
    function i(a) {
      var b;
      return (b = (b = h) == null ? void 0 : b.has(a)) != null ? b : !1;
    }
    var j = !1,
      k =
        d("WebAPIs").requestAnimationFrame != null &&
        d("WebAPIs").cancelAnimationFrame != null;
    function a() {
      j || (typeof WeakMap === "function" && (h = new WeakMap()), (j = !0));
    }
    function b(a, b, e, f, g) {
      g =
        g === !0
          ? d("TypingPerfMetric").measureAverageTypingPerformance
          : d("TypingPerfMetric.experimental").measureAverageTypingPerformance;
      if (h == null || !j || !k) return function () {};
      a !== e && e != null && i(e) && l(e);
      if (i(a)) return function () {};
      var m = null,
        n = g(
          a,
          function () {
            var a = c("uuidv4")();
            m = c("OneTraceCore").startTrace(
              a,
              b,
              "TYPING",
              c("performanceNowSinceAppStart")()
            );
            a =
              (a = c("OneTraceCore").getLastNavigation()) == null
                ? void 0
                : a.tracePolicy;
            c("addAnnotations")(m.annotations, {
              string: { routeTracePolicy: a, identifier: b },
            });
          },
          function (a) {
            var b = a.allTimes,
              d = a.averageTimeToRender,
              e = a.keypresses,
              g = a.max;
            a = a.min;
            if (m) {
              var h = m,
                i = 0;
              b.forEach(function (a) {
                a < 50 && i++;
              });
              if (f)
                for (b in f)
                  if (typeof f[b] === "string") {
                    var j;
                    c("addAnnotations")(h.annotations, {
                      string: ((j = {}), (j[b] = f[b]), j),
                    });
                  } else if (typeof f[b] === "number") {
                    c("addAnnotations")(h.annotations, {
                      int: ((j = {}), (j[b] = f[b]), j),
                    });
                  }
              c("addAnnotations")(h.annotations, {
                double: {
                  averageTimeToRender: d,
                  keypresses: e,
                  keypressesBelow50ms: i,
                  max: g,
                  min: a,
                },
              });
              c("OneTraceCore").endTrace(
                h.traceID,
                c("performanceNowSinceAppStart")(),
                "SUCCESS"
              );
            }
          }
        );
      e = function () {
        var b;
        n();
        (b = h) == null ? void 0 : b["delete"](a);
      };
      (g = h) == null ? void 0 : g.set(a, e);
      return e;
    }
    function l(a) {
      if (h == null) return;
      a = h.get(a);
      a && a();
    }
    g.init = a;
    g.trackTypingPerf = b;
    g.unregisterTypingPerf = l;
  },
  98
);
__d(
  "OneTraceSetup",
  [
    "ImagePerfTracker",
    "LongtaskObserver",
    "ResponsivenessTracker",
    "ScrollPerfTracker",
    "TypingPerfTracker",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = null;
    function a(a) {
      h == null &&
        ((h = Object.freeze(a)),
        (h.Scroll.enableTracking || h.Responsiveness.enableTracking) &&
          d("LongtaskObserver").init(),
        h.Scroll.enableTracking && d("ScrollPerfTracker").init(h),
        h.Responsiveness.enableTracking && d("ResponsivenessTracker").init(h),
        h.Image.enableTracking && d("ImagePerfTracker").init(),
        h.Typing.enableTracking && d("TypingPerfTracker").init());
    }
    g.setup = a;
  },
  98
);
__d(
  "one-trace",
  [
    "ImagePerfTracker",
    "OneTraceCore",
    "OneTraceSetup",
    "ScrollPerfTracker",
    "TypingPerfTracker",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = babelHelpers["extends"]({}, c("OneTraceCore"), {
      setup: d("OneTraceSetup").setup,
      trackImagePerf: d("ImagePerfTracker").trackImagePerf,
      customScrollTracker: d("ScrollPerfTracker").customScrollTracker,
      unregisterTypingPerf: d("TypingPerfTracker").unregisterTypingPerf,
      trackTypingPerf: d("TypingPerfTracker").trackTypingPerf,
      SCROLL_PERF_ATTRIBUTE_NAME:
        d("ScrollPerfTracker").SCROLL_PERF_ATTRIBUTE_NAME,
    });
    g["default"] = a;
  },
  98
);
__d(
  "InteractionTracingCore",
  [
    "HeroTracingDebugTracing",
    "InteractionCloning",
    "InteractionTracingLogger",
    "InteractionTracingUserTimingUtils",
    "JSScheduler",
    "LateMutationUtilities",
    "MemoryUtils",
    "NetInfo",
    "Promise",
    "VisibilityState",
    "VisualCompletionAdapter",
    "WebAPIs",
    "addAnnotations",
    "clearTimeout",
    "hero-tracing",
    "hero-tracing-placeholder",
    "interaction-tracing-metrics",
    "one-trace",
    "performanceNavigationStart",
    "performanceNowSinceAppStart",
    "regeneratorRuntime",
    "setTimeoutAcrossTransitions",
    "uuidv4",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "InteractionTracingLogging",
      i = c("performanceNavigationStart")(),
      j = new Set(),
      k,
      l = null,
      m = 0,
      n = new Set(),
      o = 1;
    c("one-trace").subscribe("trace-end-before-logging", function (a) {
      if (a.traceType === "LONGTASK" || a.traceType === "INPUT_DELAY") {
        var b = a.traceType;
        j.forEach(function (e) {
          var f = d(
            "interaction-tracing-metrics"
          ).InteractionTracingMetricsCore.get(e.getTraceId());
          if (f) {
            d(
              "interaction-tracing-metrics"
            ).InteractionTracingMetricsCore.addSubspan(
              e.getTraceId(),
              b,
              b,
              Math.max(a.startTime, f.start),
              (e = a.endTime) != null ? e : c("performanceNowSinceAppStart")(),
              {}
            );
            if (f.type != null) {
              var g;
              e = f.type;
              g =
                (g =
                  (g = a.annotations.string_array) == null
                    ? void 0
                    : g.affectedInteractions) != null
                  ? g
                  : [];
              c("addAnnotations")(a.annotations, {
                string_array: {
                  affectedInteractions: g.concat([
                    e + "(" + ((g = f.tracePolicy) != null ? g : "") + ")",
                  ]),
                },
              });
            }
          }
        });
      }
    });
    function p(a) {
      if (typeof window.qpl_tag === "function") {
        a.tagSet.CometTags || (a.tagSet.CometTags = new Set());
        var b = a.tagSet.CometTags;
        a = window.qpl_tag();
        a &&
          a.length &&
          a.forEach(function (a) {
            a &&
              a.length &&
              a.forEach(function (a) {
                b.add(a);
              });
          });
      }
    }
    function q(a, b, c, e, f) {
      var g = d("VisibilityState").getHiddenSpans(b, c);
      d(
        "interaction-tracing-metrics"
      ).InteractionTracingMetricsCore.addHiddenTiming(a, g);
      g.length > 0 &&
        d(
          "interaction-tracing-metrics"
        ).InteractionTracingMetricsCore.addMarkerPoint(
          a,
          "backgrounded",
          "AppTiming",
          g[0].start
        );
      ((a = e.annotations["int"]) == null ? void 0 : a.hidden) === void 0 &&
        f.addAnnotationInt(
          "hidden",
          Number(d("VisibilityState").wasHidden(b, c))
        );
    }
    function r(a, b) {
      var e;
      e = (e = b.completed) != null ? e : c("performanceNowSinceAppStart")();
      var f = b.markerPoints.visuallyComplete
          ? b.markerPoints.visuallyComplete.timestamp
          : e,
        g = [],
        h = null;
      a.forEach(function (a) {
        !a.isOnline
          ? ((h = a.timestamp), h < f && (b.wasOffline = !0))
          : h != null && (g.push({ end: a.timestamp, start: h }), (h = null));
      });
      h != null && g.push({ end: e, start: h });
      d(
        "interaction-tracing-metrics"
      ).InteractionTracingMetricsCore.addOfflineTiming(b.traceId, g);
    }
    function s(a, b, d) {
      var e;
      d.interactionClass &&
        b.addAnnotation("interactionClass", d.interactionClass);
      var f = d.start;
      e = (e = d.completed) != null ? e : c("performanceNowSinceAppStart")();
      q(d.traceId, f, e, d, b);
      b.addAnnotationInt("navStartOffset", d.start);
      if (a.getMetadata) {
        var g = a.getMetadata();
        Object.keys(g).forEach(function (a) {
          var c = g[a];
          typeof c === "string"
            ? b.addAnnotation(a, c)
            : typeof c === "number" && b.addAnnotationInt(a, c);
        });
      }
      a.pkgCohort != null && b.addAnnotation("pkg_cohort", a.pkgCohort);
    }
    function t(a) {
      var b = d("hero-tracing-placeholder").HeroPendingPlaceholderTracker.dump(
        a.traceId
      );
      d(
        "interaction-tracing-metrics"
      ).InteractionTracingMetricsCore.addHeroPendingPlaceholders(a.traceId, b);
      b.forEach(function (b) {
        var e;
        d("interaction-tracing-metrics").InteractionTracingMetricsCore.addTag(
          a.traceId,
          "pendingPlaceholder",
          [b.pageletStack[b.pageletStack.length - 1], b.description]
            .filter(Boolean)
            .join(":")
        );
        d(
          "interaction-tracing-metrics"
        ).InteractionTracingMetricsCore.addSubspan(
          a.traceId,
          b.description,
          "HeroTracing",
          b.startTime,
          (e = a.completed) != null ? e : c("performanceNowSinceAppStart")(),
          {
            spanType: "IncompletePlaceholder",
            pageletStack: (e = b.pageletStack) != null ? e : [],
          }
        );
      });
    }
    function u(a, b, c) {
      var d = b.getReactComponentStackFromDOMElement;
      d &&
        a.logVCReactStack &&
        c.onBeforeComplete(function (a) {
          a &&
            ["vcWithoutImage", "visuallyComplete"].forEach(function (b) {
              b = a.markerPoints.get(b);
              if (b && b.element) {
                var c = d(b.element);
                if (c != null) {
                  var e = c.indexOf("HeroPagelet");
                  e >= 0 && c.splice(e);
                  e = b.data || {};
                  e.reactStack = c;
                  b.data = e;
                }
              }
            });
        });
    }
    function v(a, b, c, e) {
      c.onBeforeComplete(function (c) {
        if (!c) return;
        d("LateMutationUtilities").logLateMutationData(a, b, c, e);
      });
    }
    function w(a, b) {
      var c;
      (c = a.vcTracker) == null
        ? void 0
        : c.onComplete(function (c) {
            if (c) {
              a.vcStateLog = c.stateLog;
              a.hasVcReport = !0;
              for (var d in c.annotations)
                for (var e in c.annotations[d])
                  a.annotations[d][e] = c.annotations[d][e];
              c.markerPoints.forEach(function (b, c) {
                var d = b.data;
                b = b.timestamp;
                a.markerPoints[c] = {
                  data: d,
                  timestamp: b,
                  type: "VisualCompletion",
                };
              });
              c.tagSet.forEach(function (a, c) {
                a.forEach(function (a) {
                  b.addTag(c, a);
                });
              });
            }
          });
    }
    function x(a) {
      a = a.replace(/\d{4,}/, "");
      return a;
    }
    var y = 0,
      z = new Map(),
      A = {
        checkRevisit: function (a) {
          return a == null ? !1 : n.has(a);
        },
        checkAndMarkRevisit: function (a) {
          var b = A.checkRevisit(a);
          a != null && n.add(a);
          return b;
        },
        clone: function (a, b, d) {
          return c("InteractionCloning").clone(a, b, d, o++);
        },
        getNextInstanceKey: function () {
          return o++;
        },
        getCurrentTabTracePolicy: function () {
          var a;
          return (a = l) != null ? a : "comet.app";
        },
        setCurrentTabTracePolicy: function (a) {
          l = a;
        },
        onStartInteraction: function (a) {
          var b = y++;
          z.set(b, a);
          return function () {
            z["delete"](b);
          };
        },
        startInteraction: function (a, b) {
          b === void 0 && (b = function () {});
          var c = d(
            "hero-tracing"
          ).HeroLogger.genHeroInteractionUUIDAndMarkStart(a.interactionID);
          return A.trace(
            a.cfg,
            a.deps,
            a.qplEvent,
            b,
            a.interactionClass,
            a.traceType,
            a.tracePolicy,
            c,
            a.startTime,
            a.eventQueueTime,
            a.debugName
          );
        },
        trace: (function (a) {
          function b(b, c, d, e, f, g, h, i, j, k, l) {
            return a.apply(this, arguments);
          }
          b.toString = function () {
            return a.toString();
          };
          return b;
        })(function (a, e, f, g, n, q, y, A, B, C, D) {
          A === void 0 && (A = c("uuidv4")());
          C === void 0 && (C = null);
          var E =
              (B = B) != null
                ? B
                : q === "INITIAL_LOAD"
                ? 0
                : c("performanceNowSinceAppStart")(),
            F = [],
            G = l,
            H = o++,
            I = y != null ? x(y) : null,
            J = a.enableMemoryLogging
              ? d("MemoryUtils").getCurrentMemory().usedJSHeapSize
              : null;
          k ||
            (k = d("WebAPIs").onBeforeUnload(function () {
              j.forEach(function (a) {
                var b;
                ((b = a.getTrace()) == null
                  ? void 0
                  : (b = b.annotations["int"]) == null
                  ? void 0
                  : b.success_on_unload) === 1
                  ? a.forceCompleteTrace()
                  : a.cancelTrace("unload", !0);
              }),
                k && k.remove(),
                (k = null);
            }));
          function K(a, c) {
            var d;
            return b("regeneratorRuntime").async(
              function (f) {
                while (1)
                  switch ((f.prev = f.next)) {
                    case 0:
                      if (!(R != null)) {
                        f.next = 5;
                        break;
                      }
                      if (!(Y.length > 0)) {
                        f.next = 4;
                        break;
                      }
                      f.next = 4;
                      return b("regeneratorRuntime").awrap(b("Promise").all(Y));
                    case 4:
                      (d = e.WebLoom) == null
                        ? void 0
                        : d.endTraceForInteraction(a, c);
                    case 5:
                    case "end":
                      return f.stop();
                  }
              },
              null,
              this
            );
          }
          var L = new Set([h]);
          function M(a) {
            a === void 0 && (a = !1);
            var b = d(
              "interaction-tracing-metrics"
            ).InteractionTracingMetricsCore.get(A);
            if (!b || !j.has(N)) return;
            b.completed == null &&
              (b.completed = c("performanceNowSinceAppStart")());
            t(b);
            var e = [].concat(U);
            U.length = 0;
            e.forEach(function (a) {
              a(b, !0);
            });
            a
              ? P(b, !0)
              : c("JSScheduler").scheduleLoggingPriCallback(function () {
                  P(b, !0);
                });
          }
          var N = {
              addGlobalMetadata: function (a, b) {
                d(
                  "interaction-tracing-metrics"
                ).InteractionTracingMetricsCore.addGlobalMetadata(A, a, b);
              },
              addLoomTraceEndDependency: function (a) {
                Y.push(a);
              },
              addMarkerPoint: function (a, b, e, f) {
                e === void 0 && (e = c("performanceNowSinceAppStart")()),
                  d(
                    "interaction-tracing-metrics"
                  ).InteractionTracingMetricsCore.addMarkerPoint(A, a, b, e, f);
              },
              addSubspan: function (a, b, c, e, f) {
                d(
                  "interaction-tracing-metrics"
                ).InteractionTracingMetricsCore.addSubspan(
                  A,
                  a,
                  b,
                  c,
                  e,
                  f || {}
                );
              },
              addMetadata: function (a, b) {
                d(
                  "interaction-tracing-metrics"
                ).InteractionTracingMetricsCore.addMetadata(A, a, b);
              },
              addAnnotation: function (a, b) {
                d(
                  "interaction-tracing-metrics"
                ).InteractionTracingMetricsCore.addAnnotation(A, a, b);
              },
              addAnnotationInt: function (a, b) {
                d(
                  "interaction-tracing-metrics"
                ).InteractionTracingMetricsCore.addAnnotationInt(A, a, b);
              },
              addAnnotationDouble: function (a, b) {
                d(
                  "interaction-tracing-metrics"
                ).InteractionTracingMetricsCore.addAnnotationDouble(A, a, b);
              },
              addAnnotationBoolean: function (a, b) {
                d(
                  "interaction-tracing-metrics"
                ).InteractionTracingMetricsCore.addAnnotationBoolean(A, a, b);
              },
              addAnnotationStringArray: function (a, b) {
                d(
                  "interaction-tracing-metrics"
                ).InteractionTracingMetricsCore.addAnnotationStringArray(
                  A,
                  a,
                  b
                );
              },
              addAnnotationIntArray: function (a, b) {
                d(
                  "interaction-tracing-metrics"
                ).InteractionTracingMetricsCore.addAnnotationIntArray(A, a, b);
              },
              addAnnotationDoubleArray: function (a, b) {
                d(
                  "interaction-tracing-metrics"
                ).InteractionTracingMetricsCore.addAnnotationDoubleArray(
                  A,
                  a,
                  b
                );
              },
              addAnnotationBooleanArray: function (a, b) {
                d(
                  "interaction-tracing-metrics"
                ).InteractionTracingMetricsCore.addAnnotationBooleanArray(
                  A,
                  a,
                  b
                );
              },
              addTag: function (a, b) {
                d(
                  "interaction-tracing-metrics"
                ).InteractionTracingMetricsCore.addTag(A, a, b);
              },
              lockInteractionLogging: function (a) {
                L.add(a);
              },
              unlockInteractionLogging: function (a) {
                L.has(a) && (L["delete"](a), L.size === 0 && aa());
              },
              cancelTrace: function (a, b) {
                N.addAnnotation("cancelType", a);
                a = d(
                  "interaction-tracing-metrics"
                ).InteractionTracingMetricsCore.get(A);
                if (!a || !j.has(N)) return;
                a.wasCanceled = !0;
                M(b);
              },
              forceCompleteTrace: function () {
                M(!0);
              },
              getConfigAndDependencies: function () {
                return { cfg: a, deps: e };
              },
              getTrace: function () {
                return d(
                  "interaction-tracing-metrics"
                ).InteractionTracingMetricsCore.get(A);
              },
              getTraceId: function () {
                return A;
              },
              markTraceAsSuccessOnUnload: function () {
                N.addAnnotationInt("success_on_unload", 1);
              },
              observeMutation: function (a) {
                e.VCTracker &&
                  d("VisualCompletionAdapter").observeMutation(A, a);
              },
              onComplete: function (a) {
                T.push(a);
              },
              onCompleteSync: function (a) {
                U.push(a);
              },
              onLog: function (a) {
                V.push(a);
              },
              onBeforeLog: function (a) {
                W.push(a);
              },
              onVcMetricsComplete: function (a) {
                X.push(a);
              },
              setTracePolicy: function (b) {
                if (b == null) return;
                b = x(b);
                c("one-trace").setTracePolicy(A, b);
                I = b;
                N.addAnnotation("tracePolicy", I);
                if (R == null && a.disableLoomTrace !== !0) {
                  b =
                    (b = e.WebLoom) == null
                      ? void 0
                      : b.maybeStartTraceForInteraction(A, n, f, I, E);
                  R = b == null ? void 0 : b.traceReferenceId;
                  S = b == null ? void 0 : b.loomProviders;
                }
                b = d(
                  "interaction-tracing-metrics"
                ).InteractionTracingMetricsCore.get(A);
                b &&
                  ((b.tracePolicy = I),
                  b.vcTracker && b.vcTracker.setTracePolicy(I));
              },
              setInstanceIdentifier: function (a) {},
              getInstanceKey: function () {
                return H;
              },
              failTrace: function (a, b) {
                N.addMetadata("isError", 1),
                  N.addMetadata("errorComponent", a),
                  b && N.forceCompleteTrace();
              },
            },
            aa = function () {
              var b;
              if (!j.has(N)) return;
              var g = $;
              c("clearTimeout")(ca);
              ba.remove();
              j["delete"](N);
              r(F, g);
              (b = e.HeroBootloadPerfStore) == null
                ? void 0
                : b.addStaticResourcesStats(g);
              b = [].concat(W);
              W.length = 0;
              b.forEach(function (a) {
                a(g);
              });
              b = d("InteractionTracingLogger").getTraceStatus(g);
              var h = d("InteractionTracingLogger").logQPL(a, e, f, b, g, H);
              g.qplAction = h;
              g.traceStatus = b;
              g.debugName = D;
              b = [].concat(V);
              V.length = 0;
              b.forEach(function (a) {
                a(g, d("InteractionTracingLogger").getTraceStatus(g));
              });
              delete g.vcTracker;
              g.lateMutationIgnoreElements.clear();
              K(g, h);
              d("InteractionTracingUserTimingUtils").markInteraction(e, g, q);
              setTimeout(function () {
                d("interaction-tracing-metrics").InteractionTracingMetricsCore[
                  "delete"
                ](A);
              }, 30 * 6e4);
            };
          function O(a) {
            a
              ? L.forEach(function (a) {
                  N.unlockInteractionLogging(a);
                })
              : N.unlockInteractionLogging(h);
          }
          var P = function (b, c) {
            var f;
            if (!j.has(N)) return;
            N.addAnnotationInt("startTimestamp", E + i);
            p(b);
            N.addAnnotation(
              "tracePolicy",
              (f = I) != null ? f : a.defaultTracePolicy
            );
            G != null && N.addAnnotation("referrer", G);
            N.addAnnotation("interactionId", A);
            if (J != null) {
              f = d("MemoryUtils").getCurrentMemory().usedJSHeapSize;
              f != null &&
                (N.addAnnotationInt("usedJSHeapSizeStart", J),
                N.addAnnotationInt("usedJSHeapSizeEnd", f));
            }
            s(a, N, b);
            e.VCTracker && Z != null && Z();
            f = [].concat(T);
            T.length = 0;
            f.forEach(function (a) {
              a(b, c);
            });
            R != null && N.addAnnotation("loomRefId", R);
            S != null &&
              S.forEach(function (a) {
                return N.addTag("loomProviders", a);
              });
            f = b.vcTracker;
            f && !b.hasVcReport
              ? (f.onComplete(function () {
                  O(c);
                }),
                c && f.forceMeasurement())
              : O(c);
          };
          function Q(a, b) {
            b === void 0 && (b = c("performanceNowSinceAppStart")()),
              F.push({ isOnline: a, timestamp: b });
          }
          c("NetInfo")
            .isConnected.fetch()
            .then(function (a) {
              q === "INITIAL_LOAD"
                ? c("NetInfo")
                    .isConnected.fetch()
                    .then(function (a) {
                      a || Q(a);
                    })
                    ["catch"]()
                : a || Q(a);
            })
            ["catch"]();
          var ba = c("NetInfo").isConnected.addEventListener(
              "connectionChange",
              function (a) {
                Q(a);
              }
            ),
            R,
            S;
          if (I != null && a.disableLoomTrace !== !0) {
            y =
              (B = e.WebLoom) == null
                ? void 0
                : B.maybeStartTraceForInteraction(A, n, f, I, E);
            R = y == null ? void 0 : y.traceReferenceId;
            S = y == null ? void 0 : y.loomProviders;
          }
          d("InteractionTracingLogger").initQPL(a, e, f, E, H, {
            qplMarkerType: a.qplMarkerType,
          });
          var T = [],
            U = [],
            V = [],
            W = [],
            X = [],
            Y = [],
            Z = null;
          e.VCTracker &&
            (Z = d(
              "VisualCompletionAdapter"
            ).markOtherInteractionSubspanToNavigationVC(q, A, f));
          c("one-trace").startTrace(A, I, q, E);
          N.onLog(function (a, b) {
            c("one-trace").endTrace(
              A,
              (b = a.completed) != null
                ? b
                : c("performanceNowSinceAppStart")(),
              d("InteractionTracingLogger").getTraceStatus(a)
            );
          });
          var ca = c("setTimeoutAcrossTransitions")(function () {
            N.cancelTrace("timeout", !1);
          }, a.timeout);
          if (a.cancelOnBackground === !0) {
            var da = d("VisibilityState").subscribe(function (a, b) {
              b && N.cancelTrace("background", !0);
            });
            N.onCompleteSync(function () {
              da();
            });
          }
          B = function (a, b) {
            var d;
            b === void 0 && (b = !1);
            if (!j.has(N)) return;
            e.VCTracker &&
              ((d = a.vcTracker) == null
                ? void 0
                : d.unlock(
                    e.VCTracker.VisualCompletionConstants
                      .INTERACTION_TRACING_HOLD
                  ));
            a.completed == null &&
              (a.completed = c("performanceNowSinceAppStart")());
            d = [].concat(U);
            U.length = 0;
            d.forEach(function (b) {
              b(a);
            });
            if (
              a.type === "INITIAL_LOAD" &&
              ((d = window) == null
                ? void 0
                : (d = d.document) == null
                ? void 0
                : d.readyState) === "loading"
            ) {
              var f;
              d = function d() {
                var e;
                c("JSScheduler").scheduleLoggingPriCallback(function () {
                  P(a, b);
                });
                (e = window) == null
                  ? void 0
                  : (e = e.document) == null
                  ? void 0
                  : e.removeEventListener("DOMContentLoaded", d);
              };
              (f = window) == null
                ? void 0
                : (f = f.document) == null
                ? void 0
                : f.addEventListener("DOMContentLoaded", d);
            } else
              c("JSScheduler").scheduleLoggingPriCallback(function () {
                P(a, b);
              });
          };
          var $ = d(
            "interaction-tracing-metrics"
          ).InteractionTracingMetricsCore.addTracedInteraction(A, E, B);
          d(
            "interaction-tracing-metrics"
          ).InteractionTracingMetricsCore.setInteractionType(A, n, q, f);
          switch (q) {
            case "INITIAL_LOAD":
              N.addAnnotationInt("navSequence", ++m);
              if (e.VCTracker) {
                y = d("VisualCompletionAdapter").traceNavigationVC(
                  e.VCTracker,
                  A,
                  0,
                  "INITIAL_LOAD",
                  m
                );
                $ && ($.vcTracker = y);
                a.useDocumentBodyForVCRoot === !0 &&
                  window.document != null &&
                  (y.observeMutation(window.document.body),
                  y.registerNavigationMutationRoot(window.document.body));
              }
              break;
            case "NAVIGATION":
              N.addAnnotationInt("navSequence", ++m);
              j.forEach(function (c) {
                var b = d(
                  "interaction-tracing-metrics"
                ).InteractionTracingMetricsCore.get(c.getTraceId());
                if (
                  !a.navigationCancelsInteractions &&
                  b &&
                  b.type === "INTERACTION"
                )
                  return;
                c.cancelTrace("navigation", !1);
              });
              if (e.VCTracker) {
                B = d("VisualCompletionAdapter").traceNavigationVC(
                  e.VCTracker,
                  A,
                  E,
                  "NAVIGATION",
                  m
                );
                $ && ($.vcTracker = B);
                a.useDocumentBodyForVCRoot === !0 &&
                  window.document != null &&
                  (B.observeMutation(window.document.body),
                  B.registerNavigationMutationRoot(window.document.body));
              }
              break;
            case "INTERACTION":
              if (e.VCTracker) {
                y = d("VisualCompletionAdapter").traceInteractionVC(
                  e.VCTracker,
                  A,
                  E,
                  q
                );
                $ && ($.vcTracker = y);
              }
              break;
          }
          j.add(N);
          d("HeroTracingDebugTracing").addHeroDebugging(N, a, function () {
            return R != null;
          });
          N.onCompleteSync(function (a) {
            var b;
            d(
              "interaction-tracing-metrics"
            ).InteractionTracingMetricsCore.addMarkerPoint(
              a.traceId,
              "HeroTrace_end",
              "AppTiming",
              (b = a.completed) != null ? b : c("performanceNowSinceAppStart")()
            );
            d("hero-tracing").HeroLogger.cleanupHeroInteraction(a.traceId);
          });
          a.heroNestedRootsFix && N.addAnnotationInt("heroNestedRootsFix", 1);
          I != null && N.setTracePolicy(I);
          if ($ && $.vcTracker) {
            B = $.vcTracker;
            e.VCTracker &&
              B.lock(
                e.VCTracker.VisualCompletionConstants.INTERACTION_TRACING_HOLD
              );
            u(a, e, B);
            v(a, e, B, $);
            B.onComplete(function (a) {
              var b = [].concat(X);
              X.length = 0;
              a &&
                b.forEach(function (b) {
                  b($, a);
                });
            });
            w($, N);
            a.setupVcTracker && a.setupVcTracker(B);
          }
          g(N);
          z.forEach(function (a) {
            return a(N);
          });
          if (C != null) {
            y = E;
            d(
              "interaction-tracing-metrics"
            ).InteractionTracingMetricsCore.addSubspan(
              A,
              "EventQueued",
              "DOMEventTiming",
              y,
              y + C,
              {}
            );
          }
          return A;
        }),
        getPendingInteractions: function () {
          return new Set(j);
        },
      };
    a = A;
    g["default"] = a;
  },
  98
);
__d(
  "NavigationTracingUtils",
  ["interaction-tracing-metrics", "performance", "performanceNavigationStart"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = c("performanceNavigationStart")();
    function a(a) {
      var b,
        e = (c("performance") == null ? void 0 : c("performance").timing) || {};
      b =
        (c("performance") == null
          ? void 0
          : (b = c("performance").navigation) == null
          ? void 0
          : b.redirectCount) || 0;
      d(
        "interaction-tracing-metrics"
      ).InteractionTracingMetricsCore.addAnnotationInt(a, "redirectCount", b);
      b =
        typeof c("performance").getEntriesByType === "function"
          ? c("performance").getEntriesByType("navigation")[0]
          : null;
      (b == null ? void 0 : b.nextHopProtocol) &&
        d(
          "interaction-tracing-metrics"
        ).InteractionTracingMetricsCore.addAnnotation(
          a,
          "httpProtocol",
          b.nextHopProtocol
        );
      (b == null ? void 0 : b.type)
        ? d(
            "interaction-tracing-metrics"
          ).InteractionTracingMetricsCore.addAnnotation(
            a,
            "navigationType",
            b.type
          )
        : ((b = c("performance").navigation) == null ? void 0 : b.type) !=
            null &&
          d(
            "interaction-tracing-metrics"
          ).InteractionTracingMetricsCore.addAnnotation(
            a,
            "navigationType",
            c("performance").navigation.type
          );
      for (b in e)
        typeof e[b] === "number" &&
          e[b] >= h &&
          d(
            "interaction-tracing-metrics"
          ).InteractionTracingMetricsCore.addMarkerPoint(
            a,
            b,
            "NavigationTiming",
            e[b] - h
          );
      d(
        "interaction-tracing-metrics"
      ).InteractionTracingMetricsCore.addAnnotationInt(
        a,
        "documentDOMElementCount",
        document.getElementsByTagName("*").length
      );
    }
    function b(a) {
      var b = document.referrer;
      if (typeof b === "string") {
        b = /^\w+:\/\/[^\/]+/.exec(b);
        b &&
          b[0] &&
          d(
            "interaction-tracing-metrics"
          ).InteractionTracingMetricsCore.addAnnotation(a, "referrer", b[0]);
      }
    }
    g.addNavigationTiming = a;
    g.addReferrer = b;
  },
  98
);
__d(
  "NavigationTracingCore",
  [
    "InteractionTracingCore",
    "NavigationTracingUtils",
    "interaction-tracing-metrics",
    "performanceNowSinceAppStart",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a, b) {
      if (b != null) {
        c("InteractionTracingCore").setCurrentTabTracePolicy(b);
        b = c("InteractionTracingCore").checkAndMarkRevisit(b);
        d(
          "interaction-tracing-metrics"
        ).InteractionTracingMetricsCore.addAnnotationInt(
          a,
          "revisit",
          Number(b)
        );
      }
    }
    function i(a, b) {
      if (b != null) {
        b = c("InteractionTracingCore").checkAndMarkRevisit(b);
        d(
          "interaction-tracing-metrics"
        ).InteractionTracingMetricsCore.addAnnotationInt(
          a,
          "instance_revisit",
          Number(b)
        );
      }
    }
    function a(a, b) {
      var e,
        f =
          (e = a.traceStartTime) != null
            ? e
            : c("performanceNowSinceAppStart")();
      return c("InteractionTracingCore").startInteraction(a, function (c) {
        var e = c.getTraceId();
        h(e, a.tracePolicy);
        i(e, a.instanceIdentifier);
        c.setTracePolicy(a.tracePolicy);
        c.addMarkerPoint("traceStart", "AppTiming", f);
        c.onComplete(function (a) {
          d("NavigationTracingUtils").addNavigationTiming(e),
            d("NavigationTracingUtils").addReferrer(e);
        });
        b && b(c);
      });
    }
    function b(a, b) {
      return c("InteractionTracingCore").startInteraction(a, function (c) {
        try {
          var e = c.getTraceId(),
            f = a.tracePolicy;
          h(e, a.tracePolicy);
          c.onComplete(function (a) {
            d("NavigationTracingUtils").addNavigationTiming(e);
          });
          var g = babelHelpers["extends"]({}, c, {
            setTracePolicy: function (a) {
              if (f == null) {
                a = a;
                h(e, a);
                a != null && c.setTracePolicy(a);
              }
            },
            setInstanceIdentifier: function (a) {
              i(e, a);
            },
          });
          b && b(g);
        } catch (a) {
          if (a.message !== "can't access dead object") throw a;
        }
      });
    }
    e = { traceInitialLoad: a, traceNavigation: b };
    g["default"] = e;
  },
  98
);
__d(
  "interaction-tracing",
  [
    "InteractionCloning",
    "InteractionTracingCore",
    "InteractionTracingLogger",
    "NavigationTracingCore",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      InteractionTracingCore: c("InteractionTracingCore"),
      InteractionCloning: c("InteractionCloning"),
      NavigationTracing: c("NavigationTracingCore"),
      getTraceStatus: d("InteractionTracingLogger").getTraceStatus,
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "CometHeroLogging",
  ["hero-tracing"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = d("hero-tracing").HeroLogger;
  },
  98
);
__d(
  "CometHideLayerOnEscape.react",
  ["fbt", "CometComponentWithKeyCommands.react", "CometKeys", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = d("react").useMemo;
    function a(a) {
      var b = a.children,
        d = a.debugName;
      d = d === void 0 ? "ModalLayer" : d;
      var e = a.onHide;
      a = j(
        function () {
          return [
            {
              command: { key: c("CometKeys").ESCAPE },
              description: h._("Fermer"),
              handler: e,
              triggerFromInputs: !0,
              triggerOnRepeats: !1,
            },
          ];
        },
        [e]
      );
      return i.jsx(c("CometComponentWithKeyCommands.react"), {
        commandConfigs: a,
        debugName: d,
        isWrapperFocusable: !0,
        children: b,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometMenuContext",
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
  "CometPlaceholder.react",
  ["react", "useCometPlaceholderImpl"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    function a(a) {
      return c("useCometPlaceholderImpl")(a);
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useCometPrerendererImpl",
  ["emptyFunction", "react", "useCometPreloader"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    var h = a.useCallback,
      i = a.useState;
    b = function (a, b, d, e, f) {
      var g = i(!1),
        j = g[0],
        k = g[1];
      g = i(!1);
      var l = g[0],
        m = g[1];
      g = c("useCometPreloader")(a, d, e, f);
      var n = g[0],
        o = g[1],
        p = g[2],
        q = g[3];
      d = h(
        function (b) {
          var c = function () {
              a === "tooltip" && k(!0);
            },
            d = function () {
              a === "button_aggressive" && k(!0);
            };
          n(b, c, d);
        },
        [n, a]
      );
      e = h(
        function () {
          o(), k(!1);
        },
        [o]
      );
      f = h(
        function (b) {
          p(b), (a === "button" || a === "button_aggressive") && k(!0);
        },
        [p, a]
      );
      g = h(
        function (a) {
          q(a), m(a);
        },
        [q]
      );
      if (a == null)
        return [
          { isVisible: b, shouldPrerender: !1 },
          c("emptyFunction"),
          c("emptyFunction"),
          c("emptyFunction"),
          c("emptyFunction"),
        ];
      b = { isVisible: b, shouldPrerender: j || l };
      return [b, d, e, f, g];
    };
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "useCometPrerenderer",
  ["useCometPrerendererImpl"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("useCometPrerendererImpl");
  },
  98
);
__d(
  "pointerEventDistance",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = 1,
      h = 5;
    function i(a, b, c, d) {
      return Math.sqrt(Math.pow(d - b, 2) + Math.pow(c - a, 2));
    }
    function j(a, b) {
      return i(a.clientX, a.clientY, b.clientX, b.clientY);
    }
    function a(a, b) {
      var c = b.pointerType === "touch" || b.pointerType === "pen" ? h : g;
      a = j(a, b);
      return a <= c;
    }
    f.isWithinThreshold = a;
  },
  66
);
__d(
  "useOnOutsideClick",
  [
    "HiddenSubtreePassiveContext",
    "pointerEventDistance",
    "react",
    "setTimeout",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useContext,
      i = b.useEffect,
      j = b.useRef;
    function a(a, b) {
      var e = j(null),
        f = h(c("HiddenSubtreePassiveContext")),
        g = j(null);
      i(
        function () {
          var h = e.current;
          if (a === null || h == null) return;
          var i = b || {},
            j = i.isTargetEligible;
          i = i.triggerOutsideClickOnDrag;
          var k = i === void 0 ? !1 : i;
          function l(a) {
            return a instanceof Node && !h.contains(a) && (j == null || j(a));
          }
          function m(a) {
            if (a.isPrimary) {
              var b = l(a.target);
              b && (g.current = a);
            }
          }
          function n(b) {
            var c = l(b.target);
            if (g.current != null && c && b.isPrimary) {
              c = d("pointerEventDistance").isWithinThreshold(g.current, b);
              (c || k) && a(b);
            }
            g.current = null;
          }
          function o(b) {
            l(b.target) && a(b);
          }
          var p = "PointerEvent" in window,
            q = !1;
          function r() {
            q ||
              (p
                ? (document.addEventListener("pointerup", n),
                  document.addEventListener("pointerdown", m))
                : document.addEventListener("click", o)),
              (q = !0);
          }
          function s() {
            q &&
              (p
                ? (document.removeEventListener("pointerup", n),
                  document.removeEventListener("pointerdown", m))
                : document.removeEventListener("click", o)),
              (q = !1);
          }
          i = f.getCurrentState();
          i.hiddenOrBackgrounded || r();
          var t = f.subscribeToChanges(function (a) {
            a.hiddenOrBackgrounded
              ? c("setTimeout")(function () {
                  s();
                }, 0)
              : r();
          });
          return function () {
            t.remove(), s();
          };
        },
        [a, f, b]
      );
      return e;
    }
    g["default"] = a;
  },
  98
);
__d(
  "BasePopoverTrigger.react",
  [
    "BaseButtonPopoverContext",
    "BaseContextualLayer.react",
    "BasePopoverLayerVisibility.react",
    "BaseScrollableAreaContext",
    "CometErrorBoundary.react",
    "CometEventTimings",
    "CometHeroInteractionContextPassthrough.react",
    "CometHeroInteractionWithDiv.react",
    "CometHeroLogging",
    "CometHideLayerOnEscape.react",
    "CometMenuContext",
    "CometPlaceholder.react",
    "cr:1791018",
    "cr:1802022",
    "cr:1802023",
    "gkx",
    "react",
    "useCometPrerenderer",
    "useMergeRefs",
    "useOnOutsideClick",
    "useVisibilityObserver",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    e = d("react");
    var i = e.useCallback,
      j = e.useContext,
      k = e.useImperativeHandle,
      l = e.useLayoutEffect,
      m = e.useMemo,
      n = e.useRef,
      o = e.useState,
      p = c("gkx")("8058");
    function q(a) {
      var b = a.content;
      a = a.fallback;
      return h.jsx(c("CometPlaceholder.react"), {
        fallback: (a = a) != null ? a : null,
        children: b,
      });
    }
    q.displayName = q.name + " [from " + f.id + "]";
    function r(a) {
      var b = a.contextualLayerRef;
      l(
        function () {
          var a = b.current;
          a && a.reposition({ autoflip: !0 });
        },
        [b]
      );
      return null;
    }
    function a(a) {
      var e = a.children,
        f = a.doNotCloseOnOutsideClick,
        g = f === void 0 ? !1 : f,
        s = a.fallback;
      f = a.imperativeRef;
      var t = a.interactionTracker,
        u = a.onHighIntentPreload,
        v = a.onLayerDetached,
        w = a.onVisibilityChange,
        x = a.popover,
        y = a.popoverRenderer,
        z = y === void 0 ? q : y,
        A = a.popoverPreloadResource,
        B = a.popoverProps;
      y = a.popoverType;
      var C = y === void 0 ? "dialog" : y;
      y = a.preloadTrigger;
      a.tracePolicy;
      var D = a.visibleOnLoad,
        E = D === void 0 ? !1 : D,
        F = a.triggerOutsideClickOnDrag,
        G = babelHelpers.objectWithoutPropertiesLoose(a, [
          "children",
          "doNotCloseOnOutsideClick",
          "fallback",
          "imperativeRef",
          "interactionTracker",
          "onHighIntentPreload",
          "onLayerDetached",
          "onVisibilityChange",
          "popover",
          "popoverRenderer",
          "popoverPreloadResource",
          "popoverProps",
          "popoverType",
          "preloadTrigger",
          "tracePolicy",
          "visibleOnLoad",
          "triggerOutsideClickOnDrag",
        ]),
        H = n(!1);
      D = o(!1);
      var I = D[0],
        J = D[1];
      a = o(null);
      var K = a[0],
        L = a[1],
        M = n(null),
        N = n(null),
        O = i(
          function (a) {
            J(a), w && w(a);
          },
          [w]
        ),
        P = i(
          function () {
            O(!1), L(null), (N.current = null);
          },
          [O]
        ),
        Q = i(
          function (a) {
            if (!I)
              if (t == null) O(!0);
              else {
                a = d("CometEventTimings").getCurrentQueueTime(
                  a == null ? void 0 : a.timeStamp
                );
                var b = a[0];
                a = a[1];
                t(
                  function (a) {
                    (N.current = a),
                      O(!0),
                      L(
                        c(
                          "CometHeroLogging"
                        ).genHeroInteractionUUIDAndMarkStart(a.getTraceId())
                      );
                  },
                  b,
                  a
                );
              }
          },
          [I, t, O]
        );
      k(
        f,
        function () {
          return {
            hide: function () {
              P();
            },
            show: function () {
              Q();
            },
          };
        },
        [Q, P]
      );
      D = i(
        function (a) {
          b("cr:1791018") &&
            a != null &&
            K != null &&
            b("cr:1791018").addMutationRootForTraceId(K, a);
        },
        [K]
      );
      var R = n(null);
      a = c("useCometPrerenderer")(y, I, A, u);
      f = a[0];
      y = a[1];
      u = a[2];
      var S = a[3];
      a = a[4];
      l(
        function () {
          E === !0 && H.current === !1 && ((H.current = !0), Q());
        },
        [Q, E]
      );
      var T = j(c("BaseScrollableAreaContext")),
        U = c("useVisibilityObserver")({
          onHidden: i(
            function (a) {
              a = a.hiddenReason;
              if (a === "COMPONENT_UNMOUNTED") return;
              a = T[T.length - 1];
              a != null && P();
            },
            [P, T]
          ),
        }),
        V = m(
          function () {
            switch (C) {
              case "menu":
                return { expanded: I, haspopup: "menu" };
              case "dialog":
              default:
                return null;
            }
          },
          [I, C]
        ),
        W = i(
          function (a) {
            (M.current = a != null ? a : null), U(a);
          },
          [U]
        ),
        X = function () {
          var a = N.current,
            b = a == null ? void 0 : a.getTrace();
          if (a == null || b == null) return;
          b = b.traceStatus;
          if (b != null && b !== "START") return;
          b = !0;
          a.cancelTrace("close_popover", b);
        },
        Y = i(
          function () {
            g || (p && X(), P());
          },
          [g, P]
        );
      Y = c("useOnOutsideClick")(
        I ? Y : null,
        m(
          function () {
            return {
              isTargetEligible: function (a) {
                var b = M.current;
                return b != null ? !b.contains(a) : !0;
              },
              triggerOutsideClickOnDrag: F,
            };
          },
          [F]
        )
      );
      var Z = i(
          function (a) {
            I ? P() : Q(a);
          },
          [I, P, Q]
        ),
        $ = c("useMergeRefs")(Y, D),
        aa = m(
          function () {
            return { onClose: P };
          },
          [P]
        ),
        ba = C === "menu";
      return h.jsxs(h.Fragment, {
        children: [
          h.jsx(c("BaseButtonPopoverContext").Provider, {
            value: V,
            children: e(W, Z, P, y, u, S, a, I),
          }),
          h.jsx(c("CometErrorBoundary.react"), {
            children: h.jsx(b("cr:1802022"), {
              prerenderingProps: f,
              children: function (a) {
                return h.createElement(
                  c("BaseContextualLayer.react"),
                  babelHelpers["extends"]({}, a, G, {
                    containFocus: !0,
                    contextRef: M,
                    customContainer: b("cr:1802023"),
                    imperativeRef: R,
                    key: "popover",
                    onEscapeFocusRegion: ba ? P : void 0,
                    ref: $,
                  }),
                  h.jsx(c("CometHideLayerOnEscape.react"), {
                    onHide: P,
                    children: h.jsx(c("CometMenuContext").Provider, {
                      value: aa,
                      children: h.jsx(
                        c("CometHeroInteractionContextPassthrough.react"),
                        {
                          clear: !0,
                          children: h.jsx(
                            c("CometHeroInteractionWithDiv.react"),
                            {
                              interactionDesc:
                                "popover_" +
                                (A != null ? A.getModuleId() : "Unknown"),
                              interactionUUID: K,
                              children: h.jsx(
                                c("BasePopoverLayerVisibility.react"),
                                {
                                  onLayerDetached: v,
                                  children: z({
                                    content: h.jsxs(h.Fragment, {
                                      children: [
                                        h.jsx(r, { contextualLayerRef: R }),
                                        h.jsx(
                                          x,
                                          babelHelpers["extends"]({}, B, {
                                            onClose: P,
                                          })
                                        ),
                                      ],
                                    }),
                                    fallback: h.jsxs(h.Fragment, {
                                      children: [
                                        h.jsx(r, { contextualLayerRef: R }),
                                        s,
                                      ],
                                    }),
                                  }),
                                }
                              ),
                            }
                          ),
                        }
                      ),
                    }),
                  })
                );
              },
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
  "CometLink.react",
  [
    "BaseLink.react",
    "CometDangerouslySuppressInteractiveElementsContext",
    "CometTextContext",
    "CometTextTypography",
    "isCometRouterUrl",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useContext,
      j = {
        disabled: {
          color: "x1dntmbh",
          ":hover_textDecoration": "x1lku1pv",
          $$css: !0,
        },
        root: {
          color: "x1heor9g",
          ":hover_textDecoration": "xt0b8zv",
          $$css: !0,
        },
      },
      k = {
        blueLink: { color: "x1fey0fg", $$css: !0 },
        disabled: { color: "x1dntmbh", $$css: !0 },
        highlight: { color: "x1qq9wsj", $$css: !0 },
        negative: { color: "x1a1m0xk", $$css: !0 },
        positive: { color: "x6u5lvz", $$css: !0 },
        primary: { color: "xzsf02u", $$css: !0 },
        secondary: { color: "xi81zsa", $$css: !0 },
        tertiary: { color: "x12scifz", $$css: !0 },
        white: { color: "x14ctfv", $$css: !0 },
      },
      l = {
        bold: { fontWeight: "x1xlr1w8", $$css: !0 },
        medium: { fontWeight: "xk50ysn", $$css: !0 },
        normal: { fontWeight: "xo1l8bm", $$css: !0 },
        semibold: { fontWeight: "x1s688f", $$css: !0 },
      },
      m = {
        block: { display: "x1lliihq", $$css: !0 },
        "inline-block": { display: "x1rg5ohu", $$css: !0 },
      };
    function a(a, b) {
      var d = a.color,
        e = a.disabled;
      e = e === void 0 ? !1 : e;
      var f = a.display;
      f = f === void 0 ? "inline" : f;
      var g = a.fbclid,
        p = a.href,
        q = a.lynxMode,
        r = a.role,
        s = a.target,
        t = a.weight,
        u = a.xstyle,
        v = babelHelpers.objectWithoutPropertiesLoose(a, [
          "color",
          "disabled",
          "display",
          "fbclid",
          "href",
          "lynxMode",
          "role",
          "target",
          "weight",
          "xstyle",
        ]),
        w = i(c("CometTextContext")),
        x = i(c("CometDangerouslySuppressInteractiveElementsContext")),
        y =
          s === "_blank" ||
          (s == null && p != null && p !== "#" && !c("isCometRouterUrl")(p));
      d = (d = d) != null ? d : w != null ? n(w.type, y) : "inherit";
      t = (t = t) != null ? t : w != null ? o(w.type, y) : "inherit";
      w = r == null && (p == null || p === "#") ? "button" : r;
      return x
        ? h.jsx("span", {
            className: c("stylex")([
              d !== "inherit" && k[d],
              t !== "inherit" && l[t],
              e && j.disabled,
              f !== "inline" && m[f],
            ]),
            ref: b,
            children: a.children,
          })
        : h.jsx(
            c("BaseLink.react"),
            babelHelpers["extends"]({}, v, {
              disabled: e,
              display: "inline",
              fbclid: g,
              href: p,
              lynxMode: q,
              ref: b,
              role: w,
              target: y ? "_blank" : s,
              xstyle: [
                j.root,
                d !== "inherit" && k[d],
                t !== "inherit" && l[t],
                e && j.disabled,
                f !== "inline" && m[f],
                u,
              ],
            })
          );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function n(a, b) {
      switch (a) {
        case "headline3":
        case "headline4":
        case "body1":
        case "body2":
        case "body3":
        case "body4":
          return b ? "blueLink" : "primary";
        case "meta1":
        case "meta2":
        case "meta3":
        case "meta4":
          return b ? "blueLink" : "inherit";
        default:
          return "inherit";
      }
    }
    function o(a, b) {
      if (!b) {
        b = p(a);
        return c("CometTextTypography")[b].fontWeight;
      }
      return "inherit";
    }
    function p(a) {
      switch (a) {
        case "headline3":
          return "headlineEmphasized3";
        case "headline4":
          return "headlineEmphasized4";
        case "body1":
          return "bodyLink1";
        case "body2":
          return "bodyLink2";
        case "body3":
          return "bodyLink3";
        case "body4":
          return "bodyLink4";
        default:
          return a;
      }
    }
    b = h.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "CometMenuItemBaseRoleContext",
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
  "CometSeparatorMenuItem.react",
  ["CometMenuItemBaseRoleContext", "react", "stylex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useContext,
      j = {
        separator: {
          borderTop: "x1n2xptk",
          marginTop: "x1gslohp",
          marginEnd: "xktsk01",
          marginBottom: "x12nagc",
          marginStart: "x1d52u69",
          $$css: !0,
        },
      };
    function a(a, b) {
      a = a.xstyle;
      var d = i(c("CometMenuItemBaseRoleContext"));
      return h.jsx("div", {
        className: c("stylex")([j.separator, a]),
        ref: b,
        role: d === "menuitem" ? "separator" : "presentation",
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "CometHeroInteractionImpl.react",
  ["hero-tracing", "react", "stylex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a, b) {
      var e = a.htmlAttributes,
        f = a.pageletAriaProps,
        g = a.xstyle;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "htmlAttributes",
        "pageletAriaProps",
        "xstyle",
      ]);
      return h.jsx(
        d("hero-tracing").HeroInteraction,
        babelHelpers["extends"](
          {
            htmlAttributes: babelHelpers["extends"]({}, f, {
              className: c("stylex")(g),
              onMouseLeave: e == null ? void 0 : e.onMouseLeave,
              style: e == null ? void 0 : e.style,
            }),
            ref: b,
          },
          a
        )
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    a.displayName = "CometHeroInteraction";
    b = h.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "ChatReliabilityEvents",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      ERROR: "error",
      CHANNEL_DISCONNECT: "channel_disconnect",
      CHANNEL_CONNECT: "channel_connect",
      CHANNEL_INIT: "channel_init",
      CHANNEL_NOCONFIG: "channel_noconfig",
      CHANNEL_HISTORY_INVALID: "channel_history_invalid",
      CHANNEL_STALLED: "channel_stalled",
      MESSAGE_RECEIVED: "msg_received",
      MESSAGE_SEND_START: "msg_send_start",
      THREAD_INFO_ENDPOINT_FATAL: "thread_info_fatal",
      DFF_ENDPOINT_FATAL: "invalidate_global_state_fatal",
      DFF_DELTA_INIT: "dff_initiated_by_delta",
      DFF_HOLE_INIT: "dff_initiated_by_hole",
      FETCHING_MANY_MESSAGES: "fetching_many_messages",
      THREAD_INFO_MISSING: "thread_info_missing",
      SET_THREAD_ID_MAP: "set_thread_id_map",
      DELETE_THREAD: "delete_thread",
      PROCESS_DELTA: "process_delta",
      RTI_SESSION: "chatproxy_rti_session",
      ON_INVALID_HISTORY: "chatproxy_on_invalid_history",
      GET_DEBUG_PRESENCE: "chatproxy_get_debug_presence",
    });
    f["default"] = a;
  },
  66
);
__d(
  "ChatReliabilityInstrumentation",
  ["ChatReliabilityEvents", "ChatReliabilityTypedLogger", "gkx"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = function (a, b) {
      if (!c("gkx")("678576")) return;
      new (c("ChatReliabilityTypedLogger"))().setEvent(a).setEventData(b).log();
    };
    function a(a) {
      h(c("ChatReliabilityEvents").ERROR, a);
    }
    function b(a) {
      h(c("ChatReliabilityEvents").CHANNEL_DISCONNECT, a);
    }
    function d(a) {
      h(c("ChatReliabilityEvents").CHANNEL_CONNECT, a);
    }
    function e(a) {
      h(c("ChatReliabilityEvents").CHANNEL_HISTORY_INVALID, a);
    }
    function f(a) {
      h(c("ChatReliabilityEvents").MESSAGE_RECEIVED, a);
    }
    function i(a) {
      h(c("ChatReliabilityEvents").MESSAGE_SEND_START, a);
    }
    function j(a) {
      h(c("ChatReliabilityEvents").CHANNEL_STALLED, a);
    }
    function k(a) {
      h(c("ChatReliabilityEvents").CHANNEL_INIT, a);
    }
    function l(a) {
      h(c("ChatReliabilityEvents").CHANNEL_NOCONFIG, a);
    }
    function m(a) {
      h(c("ChatReliabilityEvents").DFF_DELTA_INIT, a);
    }
    function n(a) {
      h(c("ChatReliabilityEvents").DFF_HOLE_INIT, a);
    }
    function o(a) {
      h(c("ChatReliabilityEvents").FETCHING_MANY_MESSAGES, a);
    }
    function p(a) {
      h(c("ChatReliabilityEvents").PROCESS_DELTA, a);
    }
    function q(a) {
      h(c("ChatReliabilityEvents").THREAD_INFO_MISSING, a);
    }
    function r(a) {
      h(c("ChatReliabilityEvents").SET_THREAD_ID_MAP, a);
    }
    function s(a) {
      h(c("ChatReliabilityEvents").DELETE_THREAD, a);
    }
    function t(a) {
      h(a);
    }
    g.logERROR = a;
    g.logCHANNEL_DISCONNECT = b;
    g.logCHANNEL_CONNECT = d;
    g.logCHANNEL_HISTORY_INVALID = e;
    g.logMESSAGE_RECEIVED = f;
    g.logMESSAGE_SEND_START = i;
    g.logCHANNEL_STALLED = j;
    g.logCHANNEL_INIT = k;
    g.logCHANNEL_NOCONFIG = l;
    g.logDFF_DELTA_INIT = m;
    g.logDFF_HOLE_INIT = n;
    g.logFETCHING_MANY_MESSAGES = o;
    g.logPROCESS_DELTA = p;
    g.logTHREAD_INFO_MISSING = q;
    g.logSET_THREAD_ID_MAP = r;
    g.logDELETE_THREAD = s;
    g.logCHATPROXY_EVENT = t;
  },
  98
);
__d(
  "MercuryFilters.bs",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = "draft",
      h = "folders",
      i = "recent",
      j = "unread";
    function a(a) {
      return [j, g];
    }
    function b(a) {
      return a === j || a === g || a === h || a === i ? !0 : !1;
    }
    c = "all";
    d = "groups";
    e = "named";
    var k = "unnamed",
      l = "WORK_UNSYNCED_CHAT",
      m = "WORKROOMS_ONLY";
    f.all = c;
    f.draft = g;
    f.folders = h;
    f.recent = i;
    f.unread = j;
    f.groups = d;
    f.named = e;
    f.unnamed = k;
    f.unsyncedChat = l;
    f.getSupportedFilters = a;
    f.isSupportedFilter = b;
    f.workroomsOnly = m;
  },
  null
);
__d(
  "MercuryMessagingLightswitch",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      guard: function (a) {
        return;
      },
      shouldRun: function () {
        return !1;
      },
    };
    b = a;
    f["default"] = b;
  },
  66
);
__d(
  "CallbackManagerController",
  ["ErrorGuard"],
  function (a, b, c, d, e, f) {
    var g;
    a = (function () {
      function a(a) {
        (this.$2 = []), (this.$1 = [void 0]), (this.$3 = a);
      }
      var c = a.prototype;
      c.executeOrEnqueue = function (a, b, c) {
        c = Boolean(c) ? c : {};
        var d = this.$4(b, a, c);
        if (d) return 0;
        this.$1.push({ fn: b, request: a, options: c });
        d = this.$1.length - 1;
        this.$2.push(d);
        return d;
      };
      c.unsubscribe = function (a) {
        delete this.$1[a];
      };
      c.reset = function () {
        this.$1 = [];
      };
      c.getRequest = function (a) {
        return this.$1[a];
      };
      c.runPossibleCallbacks = function (a) {
        var b = this,
          c = this.$2;
        this.$2 = [];
        var d = [];
        c.forEach(function (c) {
          var e = b.$1[c];
          if (!e) return;
          e = b.$3(e.request, babelHelpers["extends"]({}, e.options, a));
          e ? d.push({ args: e, id: c }) : b.$2.push(c);
        });
        d.forEach(function (a) {
          var c = a.args;
          a = a.id;
          var d = b.$1[a];
          if (!d) return;
          delete b.$1[a];
          b.$5(d.fn, c, d.request);
        });
      };
      c.$4 = function (a, b, c) {
        c = this.$3(b, c);
        c && this.$5(a, c, b);
        return !!c;
      };
      c.$5 = function (a, c, d) {
        d = { ids: d };
        (g || (g = b("ErrorGuard"))).applyWithGuard(a, d, c);
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "KeyedCallbackManager",
  ["CallbackManagerController", "FBLogger"],
  function (a, b, c, d, e, f) {
    a = (function () {
      function a() {
        (this.$2 = {}),
          (this.$1 = new (b("CallbackManagerController"))(this.$3.bind(this)));
      }
      var c = a.prototype;
      c.executeOrEnqueue = function (a, c) {
        if (!(a instanceof Array)) {
          var d = a,
            e = c;
          a = [a];
          c = function (a) {
            e(a[d]);
          };
        }
        a = a.filter(function (a) {
          var c = a !== null && a !== void 0;
          c ||
            b("FBLogger")("KeyedCallbackManager").mustfix(
              "KeyedCallbackManager.executeOrEnqueue: key %s is invalid",
              JSON.stringify(a)
            );
          return c;
        });
        return this.$1.executeOrEnqueue(a, c);
      };
      c.unsubscribe = function (a) {
        this.$1.unsubscribe(a);
      };
      c.reset = function () {
        this.$1.reset(), (this.$2 = {});
      };
      c.getUnavailableResources = function (a) {
        var b = this;
        a = this.$1.getRequest(a);
        var c = [];
        a &&
          (c = a.request.filter(function (a) {
            return !b.$2[a];
          }));
        return c;
      };
      c.getUnavailableResourcesFromRequest = function (a) {
        var b = this;
        a = Array.isArray(a) ? a : [a];
        return a.filter(function (a) {
          if (a !== null && a !== void 0) return !b.$2[a];
        });
      };
      c.addResourcesAndExecute = function (a) {
        Object.assign(this.$2, a), this.$1.runPossibleCallbacks();
      };
      c.setResource = function (a, b) {
        (this.$2[a] = b), this.$1.runPossibleCallbacks();
      };
      c.getResource = function (a) {
        return this.$2[a];
      };
      c.getAllResources = function () {
        return this.$2;
      };
      c.dumpResources = function () {
        var a = this,
          b = {};
        Object.keys(this.$2).forEach(function (c) {
          var d = a.$2[c];
          typeof d === "object" && (d = babelHelpers["extends"]({}, d));
          b[c] = d;
        });
        return b;
      };
      c.$3 = function (a) {
        var b = {};
        for (var c = 0; c < a.length; c++) {
          var d = a[c],
            e = this.$2[d];
          if (typeof e === "undefined") return !1;
          b[d] = e;
        }
        return [b];
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "resolveImmediate",
  ["Promise"],
  function (a, b, c, d, e, f) {
    var g = b("Promise").resolve();
    function a(a) {
      g.then(a)["catch"](h);
    }
    function h(a) {
      setTimeout(function () {
        throw a;
      }, 0);
    }
    f["default"] = a;
  },
  66
);
__d(
  "AbstractTextInput.react",
  ["cx", "AbstractTextField.react", "mergeRefs", "react"],
  function (a, b, c, d, e, f, g, h) {
    var i = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, d;
        for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
          f[g] = arguments[g];
        return (
          ((b = d = a.call.apply(a, [this].concat(f)) || this),
          (d.$2 = function (a) {
            var b = d.props.inputRef;
            d.$1 = a;
            c("mergeRefs")(b)((b = a) != null ? b : null);
          }),
          b) || babelHelpers.assertThisInitialized(d)
        );
      }
      var d = b.prototype;
      d.render = function () {
        var a = this.props;
        a.inputRef;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["inputRef"]);
        return i.jsx(
          c("AbstractTextField.react"),
          babelHelpers["extends"]({}, a, {
            children: i.jsx("input", {
              className: ((a = this.props.noDefaultStyling) != null ? a : !1)
                ? null
                : "_58al",
              onClick: this.props.onClick,
              onMouseDown: this.props.onMouseDown,
              onKeyUp: this.props.onKeyUp,
              onKeyDown: this.props.onKeyDown,
              onPaste: this.props.onPaste,
              size: this.props.size,
              tabIndex: this.props.tabIndex,
              type: this.props.type,
              ref: this.$2,
            }),
          })
        );
      };
      d.focusInput = function () {
        this.$1 && this.$1.focus();
      };
      d.blurInput = function () {
        this.$1 && this.$1.blur();
      };
      d.selectInput = function () {
        this.$1 && this.$1.select();
      };
      d.getTextFieldDOM = function () {
        return this.$1;
      };
      d.getValue = function () {
        return this.$1 ? this.$1.value : "";
      };
      return b;
    })(i.Component);
    a.defaultProps = { type: "text" };
    g["default"] = a;
  },
  98
);
__d(
  "FlexLayout.react",
  ["cx", "joinClasses", "react"],
  function (a, b, c, d, e, f, g, h) {
    var i = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var d = b.prototype;
      d.render = function () {
        var a = this,
          c = this.props,
          d = c.align,
          e = c.children,
          f = c.containerRef,
          g = c.direction,
          h = c.justify,
          j = c.style,
          k = c.wrap,
          l = c.onMouseEnter;
        c = c.onMouseLeave;
        var m = null;
        Object.keys(this.props).forEach(function (b) {
          (b === "className" || b === "className_DO_NOT_USE") &&
            (m = a.props[b]);
        });
        return i.jsx(
          "div",
          babelHelpers["extends"](
            {},
            b.flexLayout({ align: d, direction: g, justify: h, wrap: k }, m),
            {
              "data-testid": void 0,
              ref: f,
              style: j,
              onMouseEnter: l,
              onMouseLeave: c,
              children: e,
            }
          )
        );
      };
      b.flexLayout = function (a, d) {
        a = a !== void 0 ? a : {};
        var e = a.align,
          f = a.direction,
          g = a.justify;
        a = a.wrap;
        e === void 0 && (e = b.defaultProps.align);
        f === void 0 && (f = b.defaultProps.direction);
        g === void 0 && (g = b.defaultProps.justify);
        a === void 0 && (a = b.defaultProps.wrap);
        return {
          className: c("joinClasses")(
            d,
            "_3qn7" +
              (g === "start" ? " _61-0" : "") +
              (g === "center" ? " _61-1" : "") +
              (g === "end" ? " _61-2" : "") +
              (g === "all" ? " _61-3" : "") +
              (g === "around" ? " _6twk" : "") +
              (g === "evenly" ? " _6twl" : "") +
              (f === "vertical" ? " _2fyh" : "") +
              (f === "horizontal" ? " _2fyi" : "") +
              (f === "vertical-reverse" ? " _6xqp" : "") +
              (f === "horizontal-reverse" ? " _6xqq" : "") +
              (e === "start" ? " _3qnf" : "") +
              (e === "center" ? " _3qng" : "") +
              (e === "end" ? " _3qnu" : "") +
              (e === "stretch" ? " _1a9e" : "") +
              (e === "baseline" ? " _7is_" : "") +
              (a === "wrap" ? " _4tau" : "") +
              (a === "wrap-reverse" ? " _4tav" : "")
          ),
        };
      };
      return b;
    })(i.Component);
    a.defaultProps = {
      align: "start",
      direction: "horizontal",
      justify: "start",
      wrap: "nowrap",
    };
    g["default"] = a;
  },
  98
);
__d(
  "GraphqlLiveQueryEventFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("getFalcoLogPolicy_DO_NOT_USE")("1743656");
    b = d("FalcoLoggerInternal").create("graphql_live_query_event", a);
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "Qe2JsExposureFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("getFalcoLogPolicy_DO_NOT_USE")("1837559");
    b = d("FalcoLoggerInternal").create("qe2_js_exposure", a);
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "MNCommerceCallToActionType",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      OPEN_NATIVE: 1,
      OPEN_URL: 2,
      POSTBACK: 4,
      ACCOUNT_LINK: 5,
      SHARE: 7,
      PAYMENT: 8,
      FACEBOOK_REPORT_A_PROBLEM: 9,
      NAVIGATION: 11,
      EXTENSIBLE_SHARE: 12,
      OPEN_PAGE_ABOUT: 14,
      OPEN_BRANDED_CAMERA: 15,
      OPEN_THREAD: 16,
      OPEN_MARKETPLACE_PROFILE_REPORT: 17,
      OPEN_DIRECT_SEND_VIEW: 18,
      OPEN_BIZ_INBOX_FORM: 33,
      BOOKING: 19,
      BOOKING_ADD_TO_CALENDAR: 20,
      BOOKING_CONFIRM: 47,
      BOOKING_RESCHEDULE: 48,
      BOOKING_DECLINE: 57,
      BOOKING_VIEW_DETAILS: 58,
      BOOKING_IG_USER_ADD_DETAILS: 63,
      BOOKING_IG_USER_VIEW_DETAILS: 64,
      BOOKING_IG_USER_VIEW_DETAILS_APPOINTMENT_CANCELLED: 65,
      BOOKING_IG_BUSINESS_VIEW_APPOINTMENT_DETAILS: 66,
      ACCOUNT_UNLINK: 21,
      RATE_SELLER: 22,
      ROOMS_SPEAKEASY_INVITE: 23,
      ROOMS_SPEAKEASY_INTERESTED: 24,
      ROOMS_SPEAKEASY_EDIT: 25,
      ROOMS_SPEAKEASY_UNDO: 26,
      ROOMS_SPEAKEASY_CALLBACK: 27,
      ROOMS_SPEAKEASY_COPY_LINK: 32,
      ROOMS_SPEAKEASY_JOIN_WITHOUT_VIDEO: 34,
      ROOMS_SPEAKEASY_JOIN_FROM_PORTAL: 36,
      FB_LOGIN: 28,
      FEEDBACK_SEND: 29,
      SHOPS_PDP: 30,
      OPEN_SHOPS_PRODUCT_VARIANT_PICKER: 43,
      REQUEST_ORDER: 60,
      MERCHANT_CONFIRM_ORDER: 61,
      OFFERS_VIEW_DETAILS: 62,
      OFFERS_BUY_NOW: 67,
      VIEW_MESSENGER_CATALOG: 68,
      OPEN_RICH_WIDGET: 69,
      OPEN_DIALOG: 31,
      RTC_NEW_AUDIO_DEFAULT: 45,
      RTC_NEW_VIDEO_DEFAULT: 35,
      RTC_NEW_VIDEO_FROM_FB_SHARE: 38,
      RTC_NEW_VIDEO_FROM_FB_VIDEO_SHARE: 40,
      RTC_NEW_VIDEO_FROM_COWATCH_SHARE: 42,
      DISABLED: 44,
      CUSTOMER_INFORMATION: 46,
      RTC_ENDED_AUDIO: 49,
      RTC_ENDED_VIDEO: 50,
      RTC_MISSED_AUDIO: 51,
      RTC_MISSED_VIDEO: 52,
      RTC_MISSED_GROUP_AUDIO: 53,
      RTC_MISSED_GROUP_VIDEO: 54,
      RTC_AUDIO: 55,
      RTC_VIDEO: 56,
      IGD_WEB_POST_SHARE: 59,
      P2M_3PP_CHECKOUT: 72,
      BIO_BUYER_PAYMENT: 73,
      BIO_MARK_AS_PAID: 74,
      IG_BIO_SEND_MESSAGE: 75,
      SUBSCRIPTION_PRESELECT: 10,
      OPEN_REACT_NATIVE_MINI_APP: 13,
      OPEN_CANCEL_RIDE_MUTATION: 3,
      MANAGE_MESSAGES: 6,
      GROUP_CHAT_COMMERCE_VIEW_DETAILS: 70,
      WATCH_SHARING: 71,
      PARTNERSHIP_ADS_COPY_CODE: 76,
      OTP_VERIFICATION: 77,
    });
    f["default"] = a;
  },
  66
);
__d(
  "PaymentModulesClient",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      DONATION_P4P: "donation_p4p",
      MOR_DONATIONS: "mor_donations",
      PPGF_DONATION: "ppgf_donation",
      DONATION_P4C: "donation_p4c",
      INSTANT_EXPERIENCES: "instant_experiences",
      BUSINESS_PLATFORM_COMMERCE: "business_platform_commerce",
      MESSENGER_OMNIM: "messenger_omnim",
      MESSENGER_PLATFORM: "messenger_platform",
      PAGES_COMMERCE: "pages_commerce",
      MESSAGING_COMMERCE: "messaging_commerce",
      SHIPPING_LABEL: "shipping_label",
      SYNCHRONOUS_COMPONENT_FLOW: "synchronous_component_flow",
      PAGES_SOLUTION: "pages_solution",
      CHECKOUT_EXPERIENCES: "checkout_experiences",
      C2C_CHECKOUT_EXPERIENCES: "c2c_checkout_experiences",
      MOBILE_TOP_UP: "mobile_top_up",
      MOCK: "mock",
      ADVERTISER_SUBSCRIPTION: "advertiser_subscription",
      NMOR_FB_BROWSER_PAY: "fb_browser_payment",
      P2M_MESSENGER: "p2m_messenger",
    });
    f["default"] = a;
  },
  66
);
__d(
  "XBizSuiteControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/latest/{?*rest}",
      Object.freeze({
        boosted_auto_open: !1,
        auto_open_saved_replies: !1,
        auto_open_order_tip: !1,
        auto_open_promote: !1,
        launch_notifications: !1,
        launch_onboarding: !1,
        partnership_messages: !1,
      }),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "XCookiesPolicyControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")("/policies/cookies/", Object.freeze({}), void 0);
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "EmojiStaticConfig",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      checksumBase: 317426846,
      fileExt: ".png",
      supportedSizes: {
        16: "DP16",
        18: "DP18",
        20: "DP20",
        24: "DP24",
        28: "DP28",
        30: "DP30",
        32: "DP32",
        56: "DP56",
        64: "DP64",
        72: "DP72",
        96: "DP96",
        112: "DP112",
        128: "DP128",
        256: "DP256",
      },
      types: {
        COMPOSITE: "c",
        EMOJI_3: "t",
        FBEMOJI: "f",
        FB_EMOJI_EXTENDED: "e",
        MESSENGER: "z",
        UNICODE: "u",
      },
      sizeMap: {
        dp16: 16,
        dp18: 18,
        dp20: 20,
        dp24: 24,
        dp28: 28,
        dp30: 30,
        dp32: 32,
        dp36: 36,
        dp56: 56,
        dp64: 64,
        dp72: 72,
        dp96: 96,
        dp112: 112,
        dp128: 128,
        dp256: 256,
        xsmall: 16,
        small: 32,
        medium: 64,
        large: 128,
      },
    });
    f["default"] = a;
  },
  66
);
__d(
  "requestIdleCallback",
  ["cr:694370"],
  function (a, b, c, d, e, f, g) {
    g["default"] = b("cr:694370");
  },
  98
);
__d(
  "requestIdleCallbackBlue",
  ["TimeSlice", "TimerStorage", "requestIdleCallbackAcrossTransitions"],
  function (a, b, c, d, e, f, g) {
    function b(b, d) {
      var e;
      function f(a) {
        c("TimerStorage").unset(c("TimerStorage").IDLE_CALLBACK, e), b(a);
      }
      c("TimeSlice").copyGuardForWrapper(b, f);
      e = c("requestIdleCallbackAcrossTransitions").call(a, f, d);
      c("TimerStorage").set(c("TimerStorage").IDLE_CALLBACK, e);
      return e;
    }
    g["default"] = b;
  },
  98
);
__d(
  "QE2Logger",
  ["Qe2JsExposureFalcoEvent"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = {};
    function a(a, b) {
      B(a, (a = b) != null ? a : "", 9);
    }
    function b(a, b) {
      B(a, (a = b) != null ? a : "", 9, !0);
    }
    function d(a) {
      B(a, "", 4);
    }
    function e(a) {
      B(a, "", 32);
    }
    function f(a) {
      B(a, "", 32, !0);
    }
    function i(a) {
      B(a, "", 54);
    }
    function j(a, b) {
      B(a, b, 3);
    }
    function k(a) {
      B(a, "", 5);
    }
    function l(a) {
      B(a, "", 5, !0);
    }
    function m(a) {
      B(a, "", 31);
    }
    function n(a) {
      B(a, "", 98);
    }
    function o(a, b) {
      B(a, b, 7);
    }
    function p(a, b) {
      B(a, b, 55);
    }
    function q(a, b) {
      B(a, b, 17);
    }
    function r(a, b) {
      B(a, b, 25);
    }
    function s(a, b) {
      B(a, b, 8);
    }
    function t(a, b) {
      B(a, b, 22);
    }
    function u(a, b) {
      B(a, b, 27);
    }
    function v(a, b) {
      B(a, b, 0);
    }
    function w(a, b) {
      B(a, (a = b) != null ? a : "", 89);
    }
    function x(a, b) {
      B(a, b, 60);
    }
    function y(a, b) {
      B(a, b, 90);
    }
    function z(a, b, c) {
      B(a, b, c);
    }
    function A(a, b, c) {
      B(a, b, c, !0);
    }
    function B(a, b, d, e) {
      var f = a + "|" + b;
      if (h[f]) return;
      e === !0
        ? c("Qe2JsExposureFalcoEvent").logImmediately(function () {
            return { universe: a, unit_id: b, unit_type: d };
          })
        : c("Qe2JsExposureFalcoEvent").log(function () {
            return { universe: a, unit_id: b, unit_type: d };
          });
      h[f] = !0;
    }
    g.logExposureForUser = a;
    g.logExposureForUserImmediately = b;
    g.logExposureForIGDjangoUser = d;
    g.logExposureForIGUser = e;
    g.logExposureForIGUserImmediately = f;
    g.logExposureForIGWebCookie = i;
    g.logExposureForEmail = j;
    g.logExposureForDatr = k;
    g.logExposureForDatrImmediately = l;
    g.logExposureForOculusLoggedOut = m;
    g.logExposureForOculusLoggedOutCookieID = n;
    g.logExposureForPage = o;
    g.logExposureForPaymentAccountID = p;
    g.logExposureForBusiness = q;
    g.logExposureForGroup = r;
    g.logExposureForPhoneNumber = s;
    g.logExposureForScimCompanyID = t;
    g.logExposureForAnalyticsEntityID = u;
    g.logExposureForAdAccountID = v;
    g.logExposureForActingAccount = w;
    g.logExposureForMixedUserAndPage = x;
    g.logExposureForCommerceMerchantSettings = y;
    g.logExposure = z;
    g.logExposureImmediately = A;
  },
  98
);
__d(
  "react-relay/relay-hooks/useMutation",
  [
    "react",
    "react-relay/relay-hooks/useIsMountedRef",
    "react-relay/relay-hooks/useRelayEnvironment",
    "relay-runtime",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g;
    c = g || b("react");
    var h = b("relay-runtime").commitMutation,
      i = c.useState,
      j = c.useEffect,
      k = c.useRef,
      l = c.useCallback;
    function a(a, c) {
      c === void 0 && (c = h);
      var d = b("react-relay/relay-hooks/useRelayEnvironment")(),
        e = b("react-relay/relay-hooks/useIsMountedRef")(),
        f = k(d),
        g = k(a),
        m = k(new Set()),
        n = i(!1),
        o = n[0],
        p = n[1],
        q = l(
          function (b) {
            f.current === d &&
              g.current === a &&
              (m.current["delete"](b), e.current && p(m.current.size > 0));
          },
          [d, e, a]
        );
      j(
        function () {
          (f.current !== d || g.current !== a) &&
            ((m.current = new Set()),
            e.current && p(!1),
            (f.current = d),
            (g.current = a));
        },
        [d, e, a]
      );
      n = l(
        function (b) {
          e.current && p(!0);
          var f = c(
            d,
            babelHelpers["extends"]({}, b, {
              mutation: a,
              onCompleted: function (a, c) {
                q(f), b.onCompleted == null ? void 0 : b.onCompleted(a, c);
              },
              onError: function (a) {
                q(f), b.onError == null ? void 0 : b.onError(a);
              },
              onUnsubscribe: function () {
                q(f), b.onUnsubscribe == null ? void 0 : b.onUnsubscribe();
              },
              onNext: function () {
                b.onNext == null ? void 0 : b.onNext();
              },
            })
          );
          m.current.add(f);
          return f;
        },
        [q, c, d, e, a]
      );
      return [n, o];
    }
    e.exports = a;
  },
  null
);
__d(
  "useFBMutation",
  [
    "RelayFBMutations",
    "enqueueMutation",
    "react-relay/relay-hooks/useMutation",
    "relay-runtime/mutations/commitMutation",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    c = b("enqueueMutation").enqueueMutation;
    var g = b("RelayFBMutations").addFBisms(
        b("relay-runtime/mutations/commitMutation")
      ),
      h = b("RelayFBMutations").addFBisms(c);
    function a(a, c) {
      return b("react-relay/relay-hooks/useMutation")(
        a,
        c === "enqueue" ? h : g
      );
    }
    e.exports = a;
  },
  null
);
__d(
  "useFBMutation__TEMPORARY",
  ["useFBMutation"],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, c) {
      return b("useFBMutation")(a, c);
    }
    e.exports = a;
  },
  null
);
__d(
  "RelayFBResponseCache",
  ["RelayRuntime"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("RelayRuntime").QueryResponseCache;
    c = 10;
    d = 5 * 60 * 1e3;
    e.exports = new a({ size: c, ttl: d });
  },
  null
);
__d(
  "react-relay/relay-hooks/useSubscription",
  ["react", "react-relay/relay-hooks/useRelayEnvironment", "relay-runtime"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g;
    c = g || b("react");
    var h = c.useEffect,
      i = b("relay-runtime").requestSubscription;
    function a(a, c) {
      var d = (c = c) != null ? c : i,
        e = b("react-relay/relay-hooks/useRelayEnvironment")();
      h(
        function () {
          var b = d(e, a);
          b = b.dispose;
          return b;
        },
        [e, a, d]
      );
    }
    e.exports = a;
  },
  null
);
__d(
  "useFBSubscription",
  [
    "RelayFBSubscription",
    "react-relay/relay-hooks/useSubscription",
    "relay-runtime/subscription/requestSubscription",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b("RelayFBSubscription").addFBisms(
      b("relay-runtime/subscription/requestSubscription")
    );
    function a(a) {
      return b("react-relay/relay-hooks/useSubscription")(a, g);
    }
    e.exports = a;
  },
  null
);
__d(
  "react-relay/relay-hooks/EntryPointContainer.react",
  [
    "react",
    "react-relay/relay-hooks/ProfilerContext",
    "react-relay/relay-hooks/useRelayEnvironment",
    "warning",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h = g || (g = b("react"));
    c = g;
    var i = c.useContext,
      j = c.useEffect;
    function a(a) {
      var c = a.entryPointReference;
      a = a.props;
      b("warning")(
        c.isDisposed === !1,
        "<EntryPointContainer>: Expected entryPointReference to not be disposed yet. This is because disposing the entrypoint marks it for future garbage collection, and as such may no longer be present in the Relay store. In the future, this will become a hard error."
      );
      var d = c.getComponent,
        e = c.queries,
        f = c.entryPoints,
        g = c.extraProps,
        k = c.rootModuleID;
      c = d();
      var l = i(b("react-relay/relay-hooks/ProfilerContext")),
        m = b("react-relay/relay-hooks/useRelayEnvironment")();
      j(
        function () {
          m.__log({
            name: "entrypoint.root.consume",
            profilerContext: l,
            rootModuleID: k,
          });
        },
        [m, l, k]
      );
      return h.jsx(c, { entryPoints: f, extraProps: g, props: a, queries: e });
    }
    a.displayName = a.name + " [from " + e.id + "]";
    e.exports = a;
  },
  null
);
__d(
  "react-relay/relay-hooks/FragmentResource",
  [
    "invariant",
    "Promise",
    "react-relay/relay-hooks/LRUCache",
    "react-relay/relay-hooks/QueryResource",
    "react-relay/relay-hooks/SuspenseResource",
    "relay-runtime",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = b(
      "react-relay/relay-hooks/QueryResource"
    ).getQueryResourceForEnvironment;
    d = (c = b("relay-runtime")).__internal;
    var i = d.fetchQuery,
      j = d.getPromiseForActiveRequest,
      k = c.RelayFeatureFlags,
      l = c.createOperationDescriptor,
      m = c.getFragmentIdentifier,
      n = c.getPendingOperationsForFragment,
      o = c.getSelector,
      p = c.getVariablesFromFragment,
      q = c.handlePotentialSnapshotErrors,
      r = c.isPromise,
      s = c.recycleNodesInto;
    f = typeof WeakMap === "function";
    var t = 1e6,
      u = Object.freeze([]);
    function v(a) {
      return Array.isArray(a)
        ? a.some(function (a) {
            return a.isMissingData;
          })
        : a.isMissingData;
    }
    function w(a) {
      return Array.isArray(a)
        ? a.some(function (a) {
            return (
              ((a = (a = a.missingClientEdges) == null ? void 0 : a.length) !=
              null
                ? a
                : 0) > 0
            );
          })
        : ((a = (a = a.missingClientEdges) == null ? void 0 : a.length) != null
            ? a
            : 0) > 0;
    }
    function x(a) {
      return Array.isArray(a)
        ? a
            .map(function (a) {
              return a.missingLiveResolverFields;
            })
            .filter(Boolean)
            .flat()
        : a.missingLiveResolverFields;
    }
    function y(a, b) {
      Array.isArray(a) ? a.forEach(b) : b(a);
    }
    function z(a, b, c) {
      return Array.isArray(b)
        ? {
            cacheKey: a,
            snapshot: b,
            data: b.map(function (a) {
              return a.data;
            }),
            isMissingData: v(b),
            storeEpoch: c,
          }
        : {
            cacheKey: a,
            snapshot: b,
            data: b.data,
            isMissingData: v(b),
            storeEpoch: c,
          };
    }
    var A = (function () {
        function a(a) {
          (this.$1 = new Map()), (this.$2 = new Map()), (this.$3 = a);
        }
        var c = a.prototype;
        c.get = function (a) {
          return (a = (a = this.$1.get(a)) == null ? void 0 : a[0]) != null
            ? a
            : void 0;
        };
        c.recordQueryResults = function (a, c) {
          var d = this,
            e = this.$1.get(a);
          if (!e) {
            var f = new (b("react-relay/relay-hooks/SuspenseResource"))(
              function () {
                return d.$4(a);
              }
            );
            this.$1.set(a, [c, f]);
            f.temporaryRetain(this.$3);
          } else {
            var g = e[0];
            f = e[1];
            c.forEach(function (a) {
              g.push(a);
            });
            f.temporaryRetain(this.$3);
          }
        };
        c.$4 = function (a) {
          var b,
            c = this;
          b = ((b = this.$2.get(a)) != null ? b : 0) + 1;
          this.$2.set(a, b);
          return {
            dispose: function () {
              var b;
              b = ((b = c.$2.get(a)) != null ? b : 0) - 1;
              b > 0 ? c.$2.set(a, b) : (c.$2["delete"](a), c.$1["delete"](a));
            },
          };
        };
        return a;
      })(),
      B = (function () {
        function a(a) {
          (this.$1 = a),
            (this.$2 = b("react-relay/relay-hooks/LRUCache").create(t)),
            k.ENABLE_CLIENT_EDGES && (this.$3 = new A(a));
        }
        var c = a.prototype;
        c.read = function (a, b, c, d) {
          return this.readWithIdentifier(a, b, m(a, b), c, d);
        };
        c.readWithIdentifier = function (a, c, d, e, f) {
          var i,
            l = this,
            m,
            n = this.$1;
          if (c == null)
            return {
              cacheKey: d,
              data: null,
              isMissingData: !1,
              snapshot: null,
              storeEpoch: 0,
            };
          var p = n.getStore().getEpoch();
          if (
            (a == null
              ? void 0
              : (i = a.metadata) == null
              ? void 0
              : i.plural) === !0
          ) {
            Array.isArray(c) ||
              g(
                0,
                13793,
                f != null ? " for key `" + f + "`" : "",
                a.name,
                typeof c,
                a.name
              );
            if (c.length === 0)
              return {
                cacheKey: d,
                data: u,
                isMissingData: !1,
                snapshot: u,
                storeEpoch: p,
              };
          }
          i = this.$2.get(d);
          if (i != null) {
            var q;
            if (i.kind === "pending" && r(i.promise)) {
              n.__log({
                name: "suspense.fragment",
                data: i.result.data,
                fragment: a,
                isRelayHooks: !0,
                isMissingData: i.result.isMissingData,
                isPromiseCached: !0,
                pendingOperations: i.pendingOperations,
              });
              throw i.promise;
            }
            if (
              i.kind === "done" &&
              i.result.snapshot &&
              !((q = x(i.result.snapshot)) == null ? void 0 : q.length)
            ) {
              this.$4(i.result.snapshot);
              i.result.isMissingData &&
                n.__log({
                  name: "fragmentresource.missing_data",
                  data: i.result.data,
                  fragment: a,
                  isRelayHooks: !0,
                  cached: !0,
                });
              return i.result;
            }
          }
          q = o(a, c);
          q != null ||
            g(
              0,
              37286,
              a.name,
              a.name,
              e,
              a.name,
              f == null ? "a fragment reference" : "the `" + f + "`",
              e
            );
          f = null;
          e = null;
          k.ENABLE_RELAY_OPERATION_TRACKER_SUSPENSE &&
          i != null &&
          i.kind === "missing"
            ? ((f = i.result), (e = i.snapshot))
            : ((e =
                q.kind === "PluralReaderSelector"
                  ? q.selectors.map(function (a) {
                      return n.lookup(a);
                    })
                  : n.lookup(q)),
              (f = z(d, e, p)));
          if (!f.isMissingData) {
            this.$4(e);
            this.$2.set(d, { kind: "done", result: f });
            return f;
          }
          var s = null;
          if (
            k.ENABLE_CLIENT_EDGES &&
            ((i = a.metadata) == null ? void 0 : i.hasClientEdges) === !0 &&
            w(e)
          ) {
            s = [];
            var t = h(this.$1),
              v = [];
            y(e, function (b) {
              (b = b.missingClientEdges) == null
                ? void 0
                : b.forEach(function (b) {
                    var d = b.request;
                    b = b.clientEdgeDestinationID;
                    d = l.$5(t, a, c, d, b);
                    b = d.queryResult;
                    d = d.requestDescriptor;
                    v.push(b);
                    (b = s) == null ? void 0 : b.push(d);
                  });
            });
            this.$3 != null || g(0, 56147);
            this.$3.recordQueryResults(d, v);
          }
          i = [];
          k.ENABLE_CLIENT_EDGES &&
            s &&
            (i = s
              .map(function (a) {
                return j(l.$1, a);
              })
              .filter(Boolean));
          q =
            q.kind === "PluralReaderSelector" ? q.selectors[0].owner : q.owner;
          q = this.$6(d, a, q, f);
          var A = q == null ? void 0 : q.promise;
          m =
            (m =
              (m = x(e)) == null
                ? void 0
                : m.map(function (a) {
                    a = a.liveStateID;
                    var b = n.getStore();
                    return b.getLiveResolverPromise(a);
                  })) != null
              ? m
              : [];
          if (i.length || m.length || r(A)) {
            n.__log({
              name: "suspense.fragment",
              data: f.data,
              fragment: a,
              isRelayHooks: !0,
              isPromiseCached: !1,
              isMissingData: f.isMissingData,
              pendingOperations: [].concat(
                (q = q == null ? void 0 : q.pendingOperations) != null ? q : [],
                (q = s) != null ? q : []
              ),
            });
            q = [];
            i.length > 0 && (q = q.concat(i));
            m.length > 0 && (q = q.concat(m));
            if (q.length > 0) {
              A && q.push(A);
              throw b("Promise").all(q);
            }
            if (A) throw A;
          }
          k.ENABLE_RELAY_OPERATION_TRACKER_SUSPENSE &&
            f.isMissingData &&
            this.$2.set(d, { kind: "done", result: f });
          this.$4(e);
          n.__log({
            name: "fragmentresource.missing_data",
            data: f.data,
            fragment: a,
            isRelayHooks: !0,
            cached: !1,
          });
          return z(d, e, p);
        };
        c.$5 = function (a, b, c, d, e) {
          b = p(b, c);
          c = babelHelpers["extends"]({}, b, { id: e });
          b = l(d, c, {});
          e = i(this.$1, b);
          d = a.prepare(b, e);
          return { requestDescriptor: b.request, queryResult: d };
        };
        c.$4 = function (a) {
          var b = this;
          Array.isArray(a)
            ? a.forEach(function (a) {
                q(b.$1, a.missingRequiredFields, a.relayResolverErrors);
              })
            : q(this.$1, a.missingRequiredFields, a.relayResolverErrors);
        };
        c.readSpec = function (a, b, c) {
          var d = {};
          for (var e in a) d[e] = this.read(a[e], b[e], c, e);
          return d;
        };
        c.subscribe = function (a, b) {
          var c = this,
            d = this.$1,
            e = a.cacheKey,
            f = a.snapshot;
          if (!f) return { dispose: function () {} };
          a = this.checkMissedUpdates(a);
          var i = a[0],
            j = a[1];
          i && b();
          var l = [];
          Array.isArray(f)
            ? (Array.isArray(j) || g(0, 18208),
              j.forEach(function (a, f) {
                l.push(
                  d.subscribe(a, function (a) {
                    var g = d.getStore().getEpoch();
                    c.$7(e, j, a, f, g);
                    b();
                  })
                );
              }))
            : ((j != null && !Array.isArray(j)) || g(0, 18209),
              l.push(
                d.subscribe(j, function (a) {
                  var f = d.getStore().getEpoch(),
                    g = z(e, a, f);
                  k.ENABLE_RELAY_OPERATION_TRACKER_SUSPENSE && g.isMissingData
                    ? c.$2.set(e, { kind: "missing", result: g, snapshot: a })
                    : c.$2.set(e, { kind: "done", result: z(e, a, f) });
                  b();
                })
              ));
          if (k.ENABLE_CLIENT_EDGES) {
            f =
              (i = (a = this.$3) == null ? void 0 : a.get(e)) != null
                ? i
                : void 0;
            if (f == null ? void 0 : f.length) {
              var m = h(this.$1);
              f.forEach(function (a) {
                l.push(m.retain(a));
              });
            }
          }
          return {
            dispose: function () {
              l.forEach(function (a) {
                return a.dispose();
              }),
                c.$2["delete"](e);
            },
          };
        };
        c.subscribeSpec = function (a, b) {
          var c = this,
            d = Object.keys(a).map(function (d) {
              return c.subscribe(a[d], b);
            });
          return {
            dispose: function () {
              d.forEach(function (a) {
                a.dispose();
              });
            },
          };
        };
        c.checkMissedUpdates = function (a) {
          var b = this.$1,
            c = a.snapshot;
          if (!c) return [!1, null];
          var d = null;
          d = b.getStore().getEpoch();
          if (a.storeEpoch === d) return [!1, a.snapshot];
          a = a.cacheKey;
          if (Array.isArray(c)) {
            var e = !1,
              f = [];
            c.forEach(function (c, d) {
              var g = b.lookup(c.selector);
              c = c.data;
              var a = g.data;
              a = s(c, a);
              a !== c &&
                ((g = babelHelpers["extends"]({}, g, { data: a })), (e = !0));
              f[d] = g;
            });
            if (e) {
              var g = z(a, f, d);
              k.ENABLE_RELAY_OPERATION_TRACKER_SUSPENSE && g.isMissingData
                ? this.$2.set(a, { kind: "missing", result: g, snapshot: f })
                : this.$2.set(a, { kind: "done", result: g });
            }
            return [e, f];
          }
          g = b.lookup(c.selector);
          c = c.data;
          var h = g.data;
          h = s(c, h);
          g = {
            data: h,
            isMissingData: g.isMissingData,
            missingClientEdges: g.missingClientEdges,
            missingLiveResolverFields: g.missingLiveResolverFields,
            seenRecords: g.seenRecords,
            selector: g.selector,
            missingRequiredFields: g.missingRequiredFields,
            relayResolverErrors: g.relayResolverErrors,
          };
          if (h !== c) {
            d = z(a, g, d);
            k.ENABLE_RELAY_OPERATION_TRACKER_SUSPENSE && d.isMissingData
              ? this.$2.set(a, { kind: "missing", result: d, snapshot: g })
              : this.$2.set(a, { kind: "done", result: d });
          }
          return [h !== c, g];
        };
        c.checkMissedUpdatesSpec = function (a) {
          var b = this;
          return Object.keys(a).some(function (c) {
            return b.checkMissedUpdates(a[c])[0];
          });
        };
        c.$6 = function (a, b, c, d) {
          var e = this;
          b = n(this.$1, b, c);
          if (b == null) return null;
          c = b.promise;
          b = b.pendingOperations;
          var f = c
            .then(function () {
              e.$2["delete"](a);
            })
            ["catch"](function (b) {
              e.$2["delete"](a);
            });
          f.displayName = c.displayName;
          this.$2.set(a, {
            kind: "pending",
            pendingOperations: b,
            promise: f,
            result: d,
          });
          return { promise: f, pendingOperations: b };
        };
        c.$7 = function (a, b, c, d, e) {
          var f = this.$2.get(a);
          if (r(f)) {
            C(c.selector.node.name);
            return;
          }
          f = f == null ? void 0 : (f = f.result) == null ? void 0 : f.snapshot;
          if (f && !Array.isArray(f)) {
            C(c.selector.node.name);
            return;
          }
          f = f ? [].concat(f) : [].concat(b);
          f[d] = c;
          b = z(a, f, e);
          k.ENABLE_RELAY_OPERATION_TRACKER_SUSPENSE && b.isMissingData
            ? this.$2.set(a, { kind: "missing", result: b, snapshot: f })
            : this.$2.set(a, { kind: "done", result: b });
        };
        return a;
      })();
    function C(a) {
      g(0, 20347, a);
    }
    function D(a) {
      return new B(a);
    }
    var E = f ? new WeakMap() : new Map();
    function a(a) {
      var b = E.get(a);
      if (b) return b;
      b = D(a);
      E.set(a, b);
      return b;
    }
    e.exports = {
      createFragmentResource: D,
      getFragmentResourceForEnvironment: a,
    };
  },
  null
);
__d(
  "react-relay/relay-hooks/RelayEnvironmentProvider",
  ["react", "react-relay/ReactRelayContext"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h = g || b("react"),
      i = h.useMemo;
    function a(a) {
      var c = a.children,
        d = a.environment,
        e = a.getEnvironmentForActor;
      a = i(
        function () {
          return { environment: d, getEnvironmentForActor: e };
        },
        [d, e]
      );
      return h.jsx(b("react-relay/ReactRelayContext").Provider, {
        value: a,
        children: c,
      });
    }
    a.displayName = a.name + " [from " + e.id + "]";
    e.exports = a;
  },
  null
);
__d(
  "react-relay/relay-hooks/loadEntryPoint",
  ["react-relay/relay-hooks/loadQuery"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b("react-relay/relay-hooks/loadQuery").loadQuery;
    function h(a, b, c) {
      var d = null;
      b.root.getModuleIfRequired() == null && (d = b.root.load());
      c = b.getPreloadProps(c);
      var e = c.queries,
        f = c.entryPoints;
      c = c.extraProps;
      var i = {},
        j = {};
      if (e != null) {
        var k = Object.keys(e);
        k.forEach(function (b) {
          var c = e[b],
            d = c.environmentProviderOptions,
            f = c.options,
            h = c.parameters;
          c = c.variables;
          var j = a.getEnvironment(d);
          i[b] = g(
            j,
            h,
            c,
            {
              fetchPolicy: f == null ? void 0 : f.fetchPolicy,
              networkCacheConfig: f == null ? void 0 : f.networkCacheConfig,
              __nameForWarning: "loadEntryPoint",
            },
            d
          );
        });
      }
      if (f != null) {
        k = Object.keys(f);
        k.forEach(function (b) {
          var c = f[b];
          if (c == null) return;
          var d = c.entryPoint;
          c = c.entryPointParams;
          j[b] = h(a, d, c);
        });
      }
      var l = !1;
      return {
        dispose: function () {
          if (l) return;
          i != null &&
            Object.values(i).forEach(function (a) {
              a = a.dispose;
              a();
            });
          j != null &&
            Object.values(j).forEach(function (a) {
              a = a.dispose;
              a();
            });
          l = !0;
        },
        entryPoints: j,
        extraProps: (k = c) != null ? k : null,
        getComponent: function () {
          var a = b.root.getModuleIfRequired();
          if (a == null) {
            var c;
            d = (c = d) != null ? c : b.root.load();
            throw d;
          }
          c = a["default"] != null ? a["default"] : a;
          return c;
        },
        get isDisposed() {
          return l;
        },
        queries: i,
        rootModuleID: b.root.getModuleId(),
      };
    }
    e.exports = h;
  },
  null
);
__d(
  "react-relay/relay-hooks/preloadQuery_DEPRECATED",
  ["relay-runtime"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = (c = b("relay-runtime")).Observable,
      h = c.PreloadableQueryRegistry,
      i = c.ReplaySubject,
      j = c.createOperationDescriptor,
      k = c.getRequest,
      l = c.getRequestIdentifier,
      m = 30 * 1e3;
    d = typeof WeakMap === "function";
    var n = "store-or-network",
      o = d ? new WeakMap() : new Map();
    function a(a, b, c, d, e) {
      var f = o.get(a);
      f == null && ((f = new Map()), o.set(a, f));
      var h = f,
        i = p(a, h, b, c, d);
      f =
        i.kind === "network"
          ? g.create(function (e) {
              var f;
              if (h.get(i.cacheKey) == null) {
                var g = p(a, h, b, c, d);
                g.kind === "network" && (f = g.subject.subscribe(e));
              } else f = i.subject.subscribe(e);
              return function () {
                var b;
                (b = f) == null ? void 0 : b.unsubscribe();
                if (a.isServer()) return;
                setTimeout(function () {
                  i != null && q(h, i);
                }, m);
              };
            })
          : null;
      return {
        kind: "PreloadedQuery_DEPRECATED",
        environment: a,
        environmentProviderOptions: e,
        fetchKey: i.fetchKey,
        fetchPolicy: i.fetchPolicy,
        networkCacheConfig: d == null ? void 0 : d.networkCacheConfig,
        id: i.id,
        name: i.name,
        source: f,
        variables: c,
        status: i.status,
      };
    }
    function p(a, b, c, d, e) {
      var f, g;
      if (c.kind === "PreloadableConcreteRequest") {
        var o = c;
        o = o.params;
        g = o.id != null ? h.get(o.id) : null;
      } else (g = k(c)), (o = g.params);
      c = a.getNetwork();
      f = (f = e == null ? void 0 : e.fetchPolicy) != null ? f : n;
      var p = e == null ? void 0 : e.fetchKey;
      e = babelHelpers["extends"](
        { force: !0 },
        e == null ? void 0 : e.networkCacheConfig
      );
      var r = "" + l(o, d) + (p != null ? "-" + p : ""),
        s = b.get(r),
        t =
          f === n && g != null && g != null
            ? a.check(j(g, d, e))
            : { status: "missing" },
        u;
      if (t.status === "available" && g != null) {
        u =
          s && s.kind === "cache"
            ? s
            : {
                cacheKey: r,
                fetchKey: p,
                fetchPolicy: f,
                kind: "cache",
                id: o.id,
                name: o.name,
                status: {
                  cacheConfig: e,
                  source: "cache",
                  fetchTime:
                    (g = t == null ? void 0 : t.fetchTime) != null ? g : null,
                },
              };
        !a.isServer() &&
          s == null &&
          setTimeout(function () {
            u != null && q(b, u);
          }, m);
      } else if (s == null || s.kind !== "network") {
        t = c.execute(o, d, e, null);
        var v = new i();
        u = {
          cacheKey: r,
          fetchKey: p,
          fetchPolicy: f,
          kind: "network",
          id: o.id,
          name: o.name,
          status: { cacheConfig: e, source: "network", fetchTime: null },
          subject: v,
          subscription: t["finally"](function () {
            if (a.isServer()) return;
            setTimeout(function () {
              u != null && q(b, u);
            }, m);
          }).subscribe({
            complete: function () {
              v.complete();
            },
            error: function (a) {
              v.error(a);
            },
            next: function (a) {
              v.next(a);
            },
          }),
        };
      } else u = s;
      b.set(r, u);
      return u;
    }
    function q(a, b) {
      var c = a.get(b.cacheKey);
      c != null &&
        c === b &&
        (c.kind === "network" && c.subscription.unsubscribe(),
        a["delete"](c.cacheKey));
    }
    e.exports = a;
  },
  null
);
__d(
  "react-relay/relay-hooks/prepareEntryPoint_DEPRECATED",
  ["react-relay/relay-hooks/preloadQuery_DEPRECATED"],
  function (a, b, c, d, e, f) {
    "use strict";
    function g(a, c, d) {
      c.root.getModuleIfRequired() == null && c.root.load();
      c = c.getPreloadProps(d);
      var e = c.queries,
        f = c.entryPoints,
        h = {},
        i = {};
      if (e != null) {
        d = Object.keys(e);
        d.forEach(function (c) {
          var d = e[c],
            f = d.environmentProviderOptions,
            g = d.options,
            i = d.parameters;
          d = d.variables;
          var j = a.getEnvironment(f);
          h[c] = b("react-relay/relay-hooks/preloadQuery_DEPRECATED")(
            j,
            i,
            d,
            g,
            f
          );
        });
      }
      if (f != null) {
        c = Object.keys(f);
        c.forEach(function (b) {
          var c = f[b];
          if (c == null) return;
          var d = c.entryPoint;
          c = c.entryPointParams;
          i[b] = g(a, d, c);
        });
      }
    }
    e.exports = g;
  },
  null
);
__d(
  "react-relay/relay-hooks/useFragmentNode",
  [
    "react",
    "react-relay/relay-hooks/FragmentResource",
    "react-relay/relay-hooks/useRelayEnvironment",
    "react-relay/relay-hooks/useUnsafeRef_DEPRECATED",
    "relay-runtime",
    "warning",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h = b(
        "react-relay/relay-hooks/FragmentResource"
      ).getFragmentResourceForEnvironment;
    c = g || (g = b("react"));
    var i = c.useEffect,
      j = c.useState,
      k = b("relay-runtime").RelayFeatureFlags,
      l = b("relay-runtime").getFragmentIdentifier;
    function a(a, c, d) {
      var e = b("react-relay/relay-hooks/useRelayEnvironment")(),
        f = h(e),
        g = b("react-relay/relay-hooks/useUnsafeRef_DEPRECATED")(!1),
        m = j(0),
        n = m[1];
      m = l(a, c);
      var o = f.readWithIdentifier(a, c, m, d),
        p = b("react-relay/relay-hooks/useUnsafeRef_DEPRECATED")(!0);
      function q() {
        p.current = !0;
        var a = f.checkMissedUpdates(o)[0];
        a && s();
      }
      function r() {
        p.current = !1;
      }
      function s() {
        if (g.current === !1 || p.current === !1) return;
        n(function (a) {
          return a + 1;
        });
      }
      i(
        function () {
          g.current = !0;
          var a = f.subscribe(o, s);
          return function () {
            (g.current = !1), a.dispose();
          };
        },
        [e, m]
      );
      (k.LOG_MISSING_RECORDS_IN_PROD || 0) &&
        c != null &&
        (o.data === void 0 ||
          (Array.isArray(o.data) &&
            o.data.length > 0 &&
            o.data.every(function (a) {
              return a === void 0;
            }))) &&
        b("warning")(
          !1,
          "Relay: Expected to have been able to read non-null data for fragment `%s` declared in `%s`, since fragment reference was non-null. Make sure that that `%s`'s parent isn't holding on to and/or passing a fragment reference for data that has been deleted.",
          a.name,
          d,
          d
        );
      return { data: o.data, disableStoreUpdates: r, enableStoreUpdates: q };
    }
    e.exports = a;
  },
  null
);
__d(
  "react-relay/relay-hooks/useLazyLoadQueryNode",
  [
    "react",
    "react-relay/relay-hooks/ProfilerContext",
    "react-relay/relay-hooks/QueryResource",
    "react-relay/relay-hooks/useFetchTrackingRef",
    "react-relay/relay-hooks/useFragmentNode",
    "react-relay/relay-hooks/useRelayEnvironment",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h = b("react-relay/relay-hooks/QueryResource").getQueryCacheIdentifier,
      i = b(
        "react-relay/relay-hooks/QueryResource"
      ).getQueryResourceForEnvironment;
    c = g || (g = b("react"));
    var j = c.useContext,
      k = c.useEffect,
      l = c.useState,
      m = c.useRef;
    function a(a) {
      var c = a.query,
        d = a.componentDisplayName,
        e = a.fetchObservable,
        f = a.fetchPolicy,
        g = a.fetchKey,
        n = a.renderPolicy;
      a = b("react-relay/relay-hooks/useRelayEnvironment")();
      var o = j(b("react-relay/relay-hooks/ProfilerContext")),
        p = i(a),
        q = l(0),
        r = q[0],
        s = q[1];
      q = b("react-relay/relay-hooks/useFetchTrackingRef")();
      var t = q.startFetch,
        u = q.completeFetch;
      r = r + "-" + ((q = g) != null ? q : "");
      var v = h(a, c, f, n, r),
        w = o.wrapPrepareQueryResource(function () {
          return p.prepareWithIdentifier(
            v,
            c,
            e,
            f,
            n,
            { start: t, complete: u, error: u },
            o
          );
        }),
        x = m(!1);
      k(function () {
        return function () {
          x.current = !0;
        };
      }, []);
      k(
        function () {
          if (x.current === !0) {
            x.current = !1;
            s(function (a) {
              return a + 1;
            });
            return;
          }
          var a = p.retain(w, o);
          return function () {
            a.dispose();
          };
        },
        [a, v]
      );
      k(function () {
        p.releaseTemporaryRetain(w);
      });
      g = w.fragmentNode;
      q = w.fragmentRef;
      r = b("react-relay/relay-hooks/useFragmentNode")(g, q, d);
      a = r.data;
      return a;
    }
    e.exports = a;
  },
  null
);
__d(
  "react-relay/relay-hooks/useMemoVariables",
  ["areEqual", "react"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g, h;
    c = g || b("react");
    var i = c.useState;
    function a(a) {
      var c = i(a),
        d = c[0];
      c = c[1];
      if ((h || (h = b("areEqual")))(a, d)) return d;
      else {
        c(a);
        return a;
      }
    }
    e.exports = a;
  },
  null
);
__d(
  "react-relay/relay-hooks/useMemoOperationDescriptor",
  ["react", "react-relay/relay-hooks/useMemoVariables", "relay-runtime"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g;
    c = g || b("react");
    var h = b("relay-runtime").createOperationDescriptor,
      i = b("relay-runtime").getRequest,
      j = c.useMemo;
    function a(a, c, d) {
      var e = b("react-relay/relay-hooks/useMemoVariables")(c),
        f = b("react-relay/relay-hooks/useMemoVariables")(d || {});
      return j(
        function () {
          return h(i(a), e, f);
        },
        [a, e, f]
      );
    }
    e.exports = a;
  },
  null
);
__d(
  "react-relay/relay-hooks/useLazyLoadQuery",
  [
    "react-relay/relay-hooks/loadQuery",
    "react-relay/relay-hooks/useLazyLoadQueryNode",
    "react-relay/relay-hooks/useMemoOperationDescriptor",
    "react-relay/relay-hooks/useRelayEnvironment",
    "relay-runtime",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b("react-relay/relay-hooks/loadQuery").useTrackLoadQueryInRender,
      h = b("relay-runtime").__internal.fetchQuery;
    function a(a, c, d) {
      g();
      var e = b("react-relay/relay-hooks/useRelayEnvironment")();
      a = b("react-relay/relay-hooks/useMemoOperationDescriptor")(
        a,
        c,
        d && d.networkCacheConfig ? d.networkCacheConfig : { force: !0 }
      );
      c = b("react-relay/relay-hooks/useLazyLoadQueryNode")({
        componentDisplayName: "useLazyLoadQuery()",
        fetchKey: d == null ? void 0 : d.fetchKey,
        fetchObservable: h(e, a),
        fetchPolicy: d == null ? void 0 : d.fetchPolicy,
        query: a,
        renderPolicy: d == null ? void 0 : d.UNSTABLE_renderPolicy,
      });
      return c;
    }
    e.exports = a;
  },
  null
);
__d(
  "react-relay/relay-hooks/useClientQuery",
  ["react-relay/relay-hooks/useLazyLoadQuery"],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, c, d) {
      a = a;
      return b("react-relay/relay-hooks/useLazyLoadQuery")(
        a,
        c,
        babelHelpers["extends"]({}, d, { fetchPolicy: "store-only" })
      );
    }
    e.exports = a;
  },
  null
);
__d(
  "react-relay/relay-hooks/useEntryPointLoader",
  [
    "react",
    "react-relay/relay-hooks/loadEntryPoint",
    "react-relay/relay-hooks/loadQuery",
    "react-relay/relay-hooks/useIsMountedRef",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h = b("react-relay/relay-hooks/loadQuery").useTrackLoadQueryInRender;
    c = g || (g = b("react"));
    var i = c.useCallback,
      j = c.useEffect,
      k = c.useRef,
      l = c.useState,
      m = { kind: "NullEntryPointReference" };
    function a(a, c, d) {
      var e;
      h();
      e =
        (e =
          d == null
            ? void 0
            : (e = d.TEST_ONLY__initialEntryPointData) == null
            ? void 0
            : e.entryPointReference) != null
          ? e
          : m;
      d =
        (d =
          d == null
            ? void 0
            : (d = d.TEST_ONLY__initialEntryPointData) == null
            ? void 0
            : d.entryPointParams) != null
          ? d
          : null;
      var f = b("react-relay/relay-hooks/useIsMountedRef")(),
        g = k(new Set([e]));
      e = l(e);
      var n = e[0],
        o = e[1];
      e = l(d);
      var p = e[0],
        q = e[1];
      d = i(
        function () {
          if (f.current) {
            var a = { kind: "NullEntryPointReference" };
            g.current.add(a);
            o(a);
          }
        },
        [o, f]
      );
      var r = i(
          function (d) {
            if (f.current) {
              var e = b("react-relay/relay-hooks/loadEntryPoint")(a, c, d);
              g.current.add(e);
              o(e);
              q(d);
            }
          },
          [a, c, o, f]
        ),
        s = k(!1);
      j(function () {
        return function () {
          s.current = !0;
        };
      }, []);
      j(
        function () {
          if (s.current === !0) {
            s.current = !1;
            n.kind !== "NullEntryPointReference" && p != null && r(p);
            return;
          }
          var a = g.current;
          if (f.current)
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
              var e;
              if (c) {
                if (d >= b.length) break;
                e = b[d++];
              } else {
                d = b.next();
                if (d.done) break;
                e = d.value;
              }
              e = e;
              if (e === n) break;
              a["delete"](e);
              e.kind !== "NullEntryPointReference" && e.dispose();
            }
        },
        [n, p, r, f]
      );
      j(function () {
        return function () {
          for (
            var a = g.current,
              b = Array.isArray(a),
              c = 0,
              a = b
                ? a
                : a[
                    typeof Symbol === "function"
                      ? Symbol.iterator
                      : "@@iterator"
                  ]();
            ;

          ) {
            var d;
            if (b) {
              if (c >= a.length) break;
              d = a[c++];
            } else {
              c = a.next();
              if (c.done) break;
              d = c.value;
            }
            d = d;
            d.kind !== "NullEntryPointReference" && d.dispose();
          }
        };
      }, []);
      return [n.kind === "NullEntryPointReference" ? null : n, r, d];
    }
    e.exports = a;
  },
  null
);
__d(
  "react-relay/relay-hooks/useFragment",
  [
    "react",
    "react-relay/relay-hooks/HooksImplementation",
    "react-relay/relay-hooks/loadQuery",
    "react-relay/relay-hooks/useFragmentNode",
    "react-relay/relay-hooks/useStaticFragmentNodeWarning",
    "relay-runtime",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h = b("react-relay/relay-hooks/loadQuery").useTrackLoadQueryInRender;
    c = g || (g = b("react"));
    d = c.useDebugValue;
    var i = b("relay-runtime").getFragment;
    function j(a, c) {
      h();
      a = i(a);
      b("react-relay/relay-hooks/useStaticFragmentNodeWarning")(
        a,
        "first argument of useFragment()"
      );
      a = b("react-relay/relay-hooks/useFragmentNode")(a, c, "useFragment()");
      c = a.data;
      return c;
    }
    function a(a, c) {
      var d = b("react-relay/relay-hooks/HooksImplementation").get();
      if (d) return d.useFragment(a, c);
      else return j(a, c);
    }
    e.exports = a;
  },
  null
);
__d(
  "react-relay/relay-hooks/useRefetchableFragmentNode",
  [
    "invariant",
    "react",
    "react-relay/relay-hooks/FragmentResource",
    "react-relay/relay-hooks/ProfilerContext",
    "react-relay/relay-hooks/QueryResource",
    "react-relay/relay-hooks/useFragmentNode",
    "react-relay/relay-hooks/useIsMountedRef",
    "react-relay/relay-hooks/useQueryLoader",
    "react-relay/relay-hooks/useRelayEnvironment",
    "relay-runtime",
    "warning",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = b(
        "react-relay/relay-hooks/FragmentResource"
      ).getFragmentResourceForEnvironment,
      j = b(
        "react-relay/relay-hooks/QueryResource"
      ).getQueryResourceForEnvironment;
    c = h || (h = b("react"));
    var k = c.useCallback,
      l = c.useContext,
      m = c.useReducer,
      n = b("relay-runtime").__internal.fetchQuery,
      o = b("relay-runtime").createOperationDescriptor,
      p = b("relay-runtime").getFragmentIdentifier,
      q = b("relay-runtime").getRefetchMetadata,
      r = b("relay-runtime").getSelector,
      s = b("relay-runtime").getValueAtPath;
    function t(a, b) {
      switch (b.type) {
        case "refetch":
          var c;
          return babelHelpers["extends"]({}, a, {
            fetchPolicy: b.fetchPolicy,
            mirroredEnvironment:
              (c = b.refetchEnvironment) != null ? c : a.mirroredEnvironment,
            onComplete: b.onComplete,
            refetchEnvironment: b.refetchEnvironment,
            refetchQuery: b.refetchQuery,
            renderPolicy: b.renderPolicy,
          });
        case "reset":
          return {
            fetchPolicy: void 0,
            mirroredEnvironment: b.environment,
            mirroredFragmentIdentifier: b.fragmentIdentifier,
            onComplete: void 0,
            refetchQuery: null,
            renderPolicy: void 0,
          };
        default:
          b.type;
          throw new Error("useRefetchableFragmentNode: Unexpected action type");
      }
    }
    function a(a, c, d) {
      var e = b("react-relay/relay-hooks/useRelayEnvironment")(),
        f = q(a, d),
        h = f.refetchableRequest;
      f = f.fragmentRefPathInResponse;
      var k = p(a, c),
        o = m(t, {
          fetchPolicy: void 0,
          mirroredEnvironment: e,
          mirroredFragmentIdentifier: k,
          onComplete: void 0,
          refetchEnvironment: null,
          refetchQuery: null,
          renderPolicy: void 0,
        }),
        r = o[0];
      o = o[1];
      var v = r.fetchPolicy,
        w = r.mirroredEnvironment,
        x = r.mirroredFragmentIdentifier,
        y = r.onComplete,
        z = r.refetchEnvironment,
        A = r.refetchQuery,
        B = r.renderPolicy;
      z = (r = z) != null ? r : e;
      var C = j(z);
      r = i(z);
      var D = l(b("react-relay/relay-hooks/ProfilerContext"));
      e = z !== w || k !== x;
      w = b("react-relay/relay-hooks/useQueryLoader")(h);
      var E = w[0];
      x = w[1];
      w = w[2];
      var F = c,
        G = q(a, d);
      G = G.identifierInfo;
      if (e) o({ type: "reset", environment: z, fragmentIdentifier: k }), w();
      else if (A != null && E != null) {
        var H,
          I = function (a) {
            y && y((a = a) != null ? a : null);
          },
          J = E.source != null ? E.source : n(z, A);
        e = D.wrapPrepareQueryResource(function () {
          return C.prepare(
            A,
            J,
            v,
            B,
            {
              error: I,
              complete: function () {
                I();
              },
            },
            E.fetchKey,
            D
          );
        });
        z = r.read(e.fragmentNode, e.fragmentRef, d).data;
        z != null || g(0, 13942);
        r = s(z, f);
        F = r;
      }
      e = b("react-relay/relay-hooks/useFragmentNode")(a, F, d);
      z = e.data;
      r = e.disableStoreUpdates;
      e = e.enableStoreUpdates;
      d = u(d, o, w, z, k, a, f, G, x, c, h);
      return {
        fragmentData: z,
        fragmentRef: F,
        refetch: d,
        disableStoreUpdates: r,
        enableStoreUpdates: e,
      };
    }
    function u(a, c, d, e, f, g, h, i, j, l, m) {
      var n = b("react-relay/relay-hooks/useIsMountedRef")(),
        p =
          (i == null ? void 0 : i.identifierField) != null &&
          e != null &&
          typeof e === "object"
            ? e[i.identifierField]
            : null;
      return k(
        function (e, f) {
          if (n.current !== !0) {
            b("warning")(
              !1,
              "Relay: Unexpected call to `refetch` on unmounted component for fragment `%s` in `%s`. It looks like some instances of your component are still trying to fetch data but they already unmounted. Please make sure you clear all timers, intervals, async calls, etc that may trigger a fetch.",
              g.name,
              a
            );
            return { dispose: function () {} };
          }
          l == null &&
            b("warning")(
              !1,
              "Relay: Unexpected call to `refetch` while using a null fragment ref for fragment `%s` in `%s`. When calling `refetch`, we expect initial fragment data to be non-null. Please make sure you're passing a valid fragment ref to `%s` before calling `refetch`, or make sure you pass all required variables to `refetch`.",
              g.name,
              a,
              a
            );
          var h = f == null ? void 0 : f.__environment,
            k = f == null ? void 0 : f.fetchPolicy,
            q = f == null ? void 0 : f.UNSTABLE_renderPolicy;
          f = f == null ? void 0 : f.onComplete;
          var s = r(g, l),
            t,
            u;
          if (s == null) (t = {}), (u = {});
          else if (s.kind === "PluralReaderSelector") {
            var v;
            t =
              (v = (v = s.selectors[0]) == null ? void 0 : v.owner.variables) !=
              null
                ? v
                : {};
            u =
              (v = (v = s.selectors[0]) == null ? void 0 : v.variables) != null
                ? v
                : {};
          } else (t = s.owner.variables), (u = s.variables);
          v = babelHelpers["extends"]({}, t, u, e);
          i != null &&
            !Object.prototype.hasOwnProperty.call(
              e,
              i.identifierQueryVariableName
            ) &&
            (typeof p !== "string" &&
              b("warning")(
                !1,
                "Relay: Expected result to have a string  `%s` in order to refetch, got `%s`.",
                i.identifierField,
                p
              ),
            (v[i.identifierQueryVariableName] = p));
          s = o(m, v, { force: !0 });
          j(s.request.variables, {
            fetchPolicy: k,
            __environment: h,
            __nameForWarning: "refetch",
          });
          c({
            type: "refetch",
            fetchPolicy: k,
            onComplete: f,
            refetchEnvironment: h,
            refetchQuery: s,
            renderPolicy: q,
          });
          return { dispose: d };
        },
        [f, c, d, p, j]
      );
    }
    var v;
    e.exports = a;
  },
  null
);
__d(
  "react-relay/relay-hooks/usePaginationFragment",
  [
    "react",
    "react-relay/relay-hooks/HooksImplementation",
    "react-relay/relay-hooks/useLoadMoreFunction",
    "react-relay/relay-hooks/useRefetchableFragmentNode",
    "react-relay/relay-hooks/useStaticFragmentNodeWarning",
    "relay-runtime",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g;
    c = g || b("react");
    var h = c.useCallback;
    d = c.useDebugValue;
    var i = c.useState,
      j = b("relay-runtime").getFragment,
      k = b("relay-runtime").getFragmentIdentifier,
      l = b("relay-runtime").getPaginationMetadata;
    function m(a, c) {
      a = j(a);
      b("react-relay/relay-hooks/useStaticFragmentNodeWarning")(
        a,
        "first argument of usePaginationFragment()"
      );
      var d = "usePaginationFragment()",
        e = l(a, d),
        f = e.connectionPathInFragmentData,
        g = e.paginationRequest;
      e = e.paginationMetadata;
      c = b("react-relay/relay-hooks/useRefetchableFragmentNode")(a, c, d);
      var i = c.fragmentData,
        m = c.fragmentRef,
        o = c.refetch;
      c = k(a, m);
      var p = n({
          componentDisplayName: d,
          connectionPathInFragmentData: f,
          direction: "backward",
          fragmentData: i,
          fragmentIdentifier: c,
          fragmentNode: a,
          fragmentRef: m,
          paginationMetadata: e,
          paginationRequest: g,
        }),
        q = p[0],
        r = p[1],
        s = p[2],
        t = p[3];
      p = n({
        componentDisplayName: d,
        connectionPathInFragmentData: f,
        direction: "forward",
        fragmentData: i,
        fragmentIdentifier: c,
        fragmentNode: a,
        fragmentRef: m,
        paginationMetadata: e,
        paginationRequest: g,
      });
      d = p[0];
      f = p[1];
      c = p[2];
      var u = p[3];
      a = h(
        function (a, b) {
          u();
          t();
          return o(
            a,
            babelHelpers["extends"]({}, b, { __environment: void 0 })
          );
        },
        [u, t, o]
      );
      return {
        data: i,
        loadNext: d,
        loadPrevious: q,
        hasNext: f,
        hasPrevious: r,
        isLoadingNext: c,
        isLoadingPrevious: s,
        refetch: a,
      };
    }
    function n(a) {
      var c = i(!1),
        d = c[0],
        e = c[1];
      c = {
        start: function () {
          return e(!0);
        },
        complete: function () {
          return e(!1);
        },
        error: function () {
          return e(!1);
        },
      };
      var f = function () {
        return e(!1);
      };
      a = b("react-relay/relay-hooks/useLoadMoreFunction")(
        babelHelpers["extends"]({}, a, { observer: c, onReset: f })
      );
      c = a[0];
      f = a[1];
      a = a[2];
      return [c, f, d, a];
    }
    function a(a, c) {
      var d = b("react-relay/relay-hooks/HooksImplementation").get();
      if (d) return d.usePaginationFragment(a, c);
      else return m(a, c);
    }
    e.exports = a;
  },
  null
);
__d(
  "react-relay/relay-hooks/usePreloadedQuery",
  [
    "invariant",
    "react",
    "react-relay/relay-hooks/loadQuery",
    "react-relay/relay-hooks/useLazyLoadQueryNode",
    "react-relay/relay-hooks/useMemoOperationDescriptor",
    "react-relay/relay-hooks/useRelayEnvironment",
    "relay-runtime",
    "warning",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = b("react-relay/relay-hooks/loadQuery").useTrackLoadQueryInRender;
    c = h || (h = b("react"));
    d = c.useDebugValue;
    f = b("relay-runtime").__internal;
    var j = f.fetchQueryDeduped,
      k = f.fetchQuery;
    function a(a, c, d) {
      i();
      var e = b("react-relay/relay-hooks/useRelayEnvironment")(),
        f = c.fetchKey,
        h = c.fetchPolicy,
        l = c.source,
        m = c.variables,
        n = c.networkCacheConfig,
        o = b("react-relay/relay-hooks/useMemoOperationDescriptor")(a, m, n);
      if (c.kind === "PreloadedQuery_DEPRECATED")
        o.request.node.params.name === c.name ||
          g(0, 15566, o.request.node.params.name, c.name),
          (a = {
            componentDisplayName: "usePreloadedQuery()",
            fetchKey: f,
            fetchObservable: j(e, o.request.identifier, function () {
              if (e === c.environment && l != null)
                return e.executeWithSource({ operation: o, source: l });
              else return e.execute({ operation: o });
            }),
            fetchPolicy: h,
            query: o,
            renderPolicy: d == null ? void 0 : d.UNSTABLE_renderPolicy,
          });
      else {
        b("warning")(
          c.isDisposed === !1,
          "usePreloadedQuery(): Expected preloadedQuery to not be disposed yet. This is because disposing the query marks it for future garbage collection, and as such query results may no longer be present in the Relay store. In the future, this will become a hard error."
        );
        m = k(e, o);
        l != null && e === c.environment
          ? (n = l.ifEmpty(m))
          : e !== c.environment
          ? (b("warning")(
              !1,
              "usePreloadedQuery(): usePreloadedQuery was passed a preloaded query that was created with a different environment than the one that is currently in context. In the future, this will become a hard error."
            ),
            (n = m))
          : (n = m);
        a = {
          componentDisplayName: "usePreloadedQuery()",
          fetchObservable: n,
          fetchKey: f,
          fetchPolicy: h,
          query: o,
          renderPolicy: d == null ? void 0 : d.UNSTABLE_renderPolicy,
        };
      }
      m = b("react-relay/relay-hooks/useLazyLoadQueryNode")(a);
      return m;
    }
    e.exports = a;
  },
  null
);
__d(
  "react-relay/relay-hooks/useRefetchableFragment",
  [
    "react",
    "react-relay/relay-hooks/HooksImplementation",
    "react-relay/relay-hooks/useRefetchableFragmentNode",
    "react-relay/relay-hooks/useStaticFragmentNodeWarning",
    "relay-runtime",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g;
    c = g || b("react");
    d = c.useDebugValue;
    var h = b("relay-runtime").getFragment;
    function i(a, c) {
      a = h(a);
      b("react-relay/relay-hooks/useStaticFragmentNodeWarning")(
        a,
        "first argument of useRefetchableFragment()"
      );
      a = b("react-relay/relay-hooks/useRefetchableFragmentNode")(
        a,
        c,
        "useRefetchableFragment()"
      );
      c = a.fragmentData;
      a = a.refetch;
      return [c, a];
    }
    function a(a, c) {
      var d = b("react-relay/relay-hooks/HooksImplementation").get();
      if (d) return d.useRefetchableFragment(a, c);
      else return i(a, c);
    }
    e.exports = a;
  },
  null
);
__d(
  "react-relay/relay-hooks/useSubscribeToInvalidationState",
  ["react", "react-relay/relay-hooks/useRelayEnvironment"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g;
    c = g || b("react");
    var h = c.useEffect,
      i = c.useRef;
    function a(a, c) {
      var d = b("react-relay/relay-hooks/useRelayEnvironment")(),
        e = i(null),
        f = Array.from(a).sort().join("");
      h(
        function () {
          var b = d.getStore(),
            f = b.lookupInvalidationState(a),
            g = b.subscribeToInvalidationState(f, c);
          e.current = g;
          return function () {
            return g.dispose();
          };
        },
        [f, c, d]
      );
      return {
        dispose: function () {
          e.current != null && e.current.dispose();
        },
      };
    }
    e.exports = a;
  },
  null
);
__d(
  "RelayHooks",
  [
    "RelayFBEnvironmentActorID",
    "configureRelayForWWW",
    "react-relay/relay-hooks/EntryPointContainer.react",
    "react-relay/relay-hooks/RelayEnvironmentProvider",
    "react-relay/relay-hooks/loadEntryPoint",
    "react-relay/relay-hooks/loadQuery",
    "react-relay/relay-hooks/preloadQuery_DEPRECATED",
    "react-relay/relay-hooks/prepareEntryPoint_DEPRECATED",
    "react-relay/relay-hooks/useClientQuery",
    "react-relay/relay-hooks/useEntryPointLoader",
    "react-relay/relay-hooks/useFragment",
    "react-relay/relay-hooks/useLazyLoadQuery",
    "react-relay/relay-hooks/usePaginationFragment",
    "react-relay/relay-hooks/usePreloadedQuery",
    "react-relay/relay-hooks/useQueryLoader",
    "react-relay/relay-hooks/useRefetchableFragment",
    "react-relay/relay-hooks/useRelayEnvironment",
    "react-relay/relay-hooks/useSubscribeToInvalidationState",
    "relay-runtime",
    "relay-runtime/query/PreloadableQueryRegistry",
    "useFBMutation__TEMPORARY",
    "useFBSubscription",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("RelayFBEnvironmentActorID").useActorID;
    c = b("react-relay/relay-hooks/loadQuery").loadQuery;
    d = b("relay-runtime").fetchQuery;
    f = b("relay-runtime").graphql;
    var g = b("relay-runtime").readInlineData;
    b("configureRelayForWWW")();
    e.exports = {
      EntryPointContainer: b(
        "react-relay/relay-hooks/EntryPointContainer.react"
      ),
      PreloadableQueryRegistry: b(
        "relay-runtime/query/PreloadableQueryRegistry"
      ),
      RelayEnvironmentProvider: b(
        "react-relay/relay-hooks/RelayEnvironmentProvider"
      ),
      fetchQuery: d,
      graphql: f,
      loadQuery: c,
      loadEntryPoint: b("react-relay/relay-hooks/loadEntryPoint"),
      preloadQuery_DEPRECATED: b(
        "react-relay/relay-hooks/preloadQuery_DEPRECATED"
      ),
      prepareEntryPoint_DEPRECATED: b(
        "react-relay/relay-hooks/prepareEntryPoint_DEPRECATED"
      ),
      readInlineData: g,
      useActorID: a,
      useClientQuery: b("react-relay/relay-hooks/useClientQuery"),
      useFragment: b("react-relay/relay-hooks/useFragment"),
      useLazyLoadQuery: b("react-relay/relay-hooks/useLazyLoadQuery"),
      useEntryPointLoader: b("react-relay/relay-hooks/useEntryPointLoader"),
      useQueryLoader: b("react-relay/relay-hooks/useQueryLoader"),
      usePaginationFragment: b("react-relay/relay-hooks/usePaginationFragment"),
      useMutation: b("useFBMutation__TEMPORARY"),
      useMutation__TEMPORARY: b("useFBMutation__TEMPORARY"),
      usePreloadedQuery: b("react-relay/relay-hooks/usePreloadedQuery"),
      useRefetchableFragment: b(
        "react-relay/relay-hooks/useRefetchableFragment"
      ),
      useRelayEnvironment: b("react-relay/relay-hooks/useRelayEnvironment"),
      useSubscribeToInvalidationState: b(
        "react-relay/relay-hooks/useSubscribeToInvalidationState"
      ),
      useSubscription: b("useFBSubscription"),
    };
  },
  null
);
__d(
  "LiveQueryEventsLoggingResolver",
  [
    "GraphqlLiveQueryEventFalcoEvent",
    "Random",
    "RealtimeFrameworksCounterFalcoEvent",
    "gkx",
  ],
  function (a, b, c, d, e, f, g) {
    var h = "default",
      i = "without_sampling";
    function a() {
      if (c("gkx")("1133447"))
        return {
          force_log_context: i,
          sampling_rate: 1,
          client_has_ods_usecase_counters: !0,
        };
      else if (d("Random").coinflip(1e4))
        return {
          force_log_context: h,
          sampling_rate: 1e4,
          client_has_ods_usecase_counters: !0,
        };
    }
    function b(a, b, d, e, f, g, h, i) {
      g != null &&
        g.sampling_rate != null &&
        c("GraphqlLiveQueryEventFalcoEvent").log(function () {
          return {
            event: a,
            event_source: "web",
            event_reason: b,
            config_id: e,
            doc_id_str: d,
            force_log_context: g.force_log_context,
            logging_sampling_rate: g.sampling_rate,
            live_query_request_id: f,
            error_info: h,
            initial_response_latency_ms: i,
          };
        }),
        c("RealtimeFrameworksCounterFalcoEvent").log(function () {
          return {
            event: a,
            event_detail: b,
            use_case: e,
            use_case_type: "live_query",
          };
        });
    }
    g.tempResolveLoggingContext = a;
    g.logEvent = b;
  },
  98
);
__d(
  "makeGraphQLLiveQueryRequest",
  ["RealtimeGraphQLRequest"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "FBLQ";
    function a(a) {
      var b = a.doc_id,
        d = a.variables,
        e = a.is_intern,
        f = a.graphiql_impersonation,
        g = a.resumption_group_name,
        i = a.enable_canonical_naming,
        j = a.instrumentation_data,
        k = a.config_id,
        l = a.live_query_request_id,
        m = a.actor_id,
        n = a.access_token,
        o = a.logging_context,
        p = a.last_response_digest;
      a = a.priming_token;
      var q = h + ":" + k;
      b = {
        method: q,
        doc_id: b,
        body: { variables: (q = d) != null ? q : {} },
      };
      e != null && (b = babelHelpers["extends"]({}, b, { is_intern: e }));
      d = { config_id: k, live_query_request_id: l };
      p != null &&
        (d = babelHelpers["extends"]({}, d, { last_response_digest: p }));
      m != null && (d = babelHelpers["extends"]({}, d, { actor_id: m }));
      a != null && (d = babelHelpers["extends"]({}, d, { priming_token: a }));
      o != null && (d = babelHelpers["extends"]({}, d, { logging_context: o }));
      n != null && (d = babelHelpers["extends"]({}, d, { access_token: n }));
      f != null &&
        (d = babelHelpers["extends"]({}, d, { graphiql_impersonation: f }));
      i === !0 &&
        (d = babelHelpers["extends"]({}, d, { enable_canonical_naming: !0 }));
      g != null &&
        (d = babelHelpers["extends"]({}, d, { resumption_group_name: g }));
      b = babelHelpers["extends"]({}, b, { extra_headers: d });
      j != null &&
        (b = babelHelpers["extends"]({}, b, { instrumentation_data: j }));
      return new (c("RealtimeGraphQLRequest"))(b);
    }
    f.exports = a;
  },
  34
);
__d(
  "liveQueryFetch",
  [
    "invariant",
    "LiveQueryEventsLoggingResolver",
    "LiveQueryWebRelayKillList",
    "RelayGraphQLRequestUtils",
    "RelayRuntime",
    "makeGraphQLLiveQueryRequest",
    "nullthrows",
    "promiseDone",
    "uuidv4",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = b("RelayRuntime").Observable,
      i = b("RelayRuntime").RelayError;
    function a(a, c, d) {
      if (!l() || k(d.config_id))
        return h.create(function (a) {
          a.complete();
          return;
        });
      var e = Date.now(),
        f = 0;
      a.id != null || g(0, 13279);
      var m = j();
      a.metadata.live != null &&
        (typeof a.metadata.live.live_query_request_id === "string" &&
          (m = a.metadata.live.live_query_request_id),
        typeof a.metadata.live.timeStamp === "number" &&
          (e = a.metadata.live.timeStamp));
      var n = {
        doc_id: b("nullthrows")(a.id),
        config_id: d.config_id,
        actor_id: d.actor_id,
        variables: c,
        live_query_request_id: m,
      };
      d.access_token !== "" &&
        (n = babelHelpers["extends"]({}, n, { access_token: d.access_token }));
      var o = b("LiveQueryEventsLoggingResolver").tempResolveLoggingContext();
      o != null &&
        ((o = babelHelpers["extends"]({}, o, {
          client_send_request_timestamp: e,
        })),
        (n = babelHelpers["extends"]({}, n, { logging_context: o })));
      return h.create(function (a) {
        var c = b("makeGraphQLLiveQueryRequest")(n)
          .onResponse(function (c) {
            var d = Date.now(),
              h;
            try {
              (h = b("RelayGraphQLRequestUtils").parsePayload(c)),
                typeof h === "object" || g(0, 12937);
            } catch (c) {
              b("LiveQueryEventsLoggingResolver").logEvent(
                "client_update",
                "error_parsing_response",
                n.doc_id,
                n.config_id,
                m,
                o,
                c.message
              );
              return a.error(c);
            }
            if (!("errors" in h) && !("data" in h)) {
              b("LiveQueryEventsLoggingResolver").logEvent(
                "client_update",
                "error_empty_response",
                n.doc_id,
                n.config_id,
                m,
                o,
                "Parsed network response is empty"
              );
              return a.error(
                i.createWarning(
                  "EmptyResponseError",
                  "Parsed network response is empty"
                )
              );
            }
            if (h.errors)
              for (
                var c = h.errors,
                  j = Array.isArray(c),
                  k = 0,
                  c = j
                    ? c
                    : c[
                        typeof Symbol === "function"
                          ? Symbol.iterator
                          : "@@iterator"
                      ]();
                ;

              ) {
                var l;
                if (j) {
                  if (k >= c.length) break;
                  l = c[k++];
                } else {
                  k = c.next();
                  if (k.done) break;
                  l = k.value;
                }
                l = l;
                if (l.severity === "CRITICAL") {
                  l = b("RelayGraphQLRequestUtils").createErrorFromPayload(l);
                  b("LiveQueryEventsLoggingResolver").logEvent(
                    "client_update",
                    "error_in_response",
                    n.doc_id,
                    n.config_id,
                    m,
                    o,
                    l.message
                  );
                  return a.error(l);
                }
              }
            f == 0
              ? b("LiveQueryEventsLoggingResolver").logEvent(
                  "client_update",
                  "live_query_initial",
                  n.doc_id,
                  n.config_id,
                  m,
                  o,
                  null,
                  d - e
                )
              : b("LiveQueryEventsLoggingResolver").logEvent(
                  "client_update",
                  "regular_response_update",
                  n.doc_id,
                  n.config_id,
                  m,
                  o
                );
            f += 1;
            a.closed || a.next(h);
          })
          .onError(function (a) {
            b("LiveQueryEventsLoggingResolver").logEvent(
              "client_update",
              "error_received",
              n.doc_id,
              n.config_id,
              m,
              o,
              a.message
            );
          })
          .onActive(function () {
            b("LiveQueryEventsLoggingResolver").logEvent(
              "client_subscribe",
              "initial_subscribe_request",
              n.doc_id,
              n.config_id,
              m,
              o
            );
          })
          .onPause(function (a, c) {
            b("LiveQueryEventsLoggingResolver").logEvent(
              "client_unsubscribe",
              "subscription_paused",
              n.doc_id,
              n.config_id,
              m,
              o
            );
          })
          .onResume(function (a) {
            b("LiveQueryEventsLoggingResolver").logEvent(
              "client_subscribe",
              "subscription_resumed",
              n.doc_id,
              n.config_id,
              m,
              o
            );
          })
          .send();
        return function () {
          b("promiseDone")(c, function (a) {
            a.cancel(),
              b("LiveQueryEventsLoggingResolver").logEvent(
                "client_unsubscribe",
                "regular_unsubscribe",
                n.doc_id,
                n.config_id,
                m,
                o
              );
          });
        };
      });
    }
    function j() {
      return b("uuidv4")();
    }
    function k(a) {
      for (
        var c = b("LiveQueryWebRelayKillList").liveQueryWebRelayKillList,
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
        if (a === f) return !0;
      }
      return !1;
    }
    function l() {
      return "WebSocket" in window;
    }
    e.exports = a;
  },
  null
);
__d(
  "liveQueryFetchWithWWWInitial",
  [
    "invariant",
    "LiveQueryEventsLoggingResolver",
    "LiveQueryWebRelayKillList",
    "RelayGraphQLRequestUtils",
    "RelayRuntime",
    "makeGraphQLLiveQueryRequest",
    "nullthrows",
    "promiseDone",
    "uuidv4",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    function a(a, b, e, f) {
      if (!k() || j(e.config_id)) return f;
      var g = Date.now();
      a.id != null || h(0, 13279);
      var l = i();
      a.metadata.live != null &&
        (typeof a.metadata.live.live_query_request_id === "string" &&
          (l = a.metadata.live.live_query_request_id),
        typeof a.metadata.live.timeStamp === "number" &&
          (g = a.metadata.live.timeStamp));
      var m = {
        doc_id: c("nullthrows")(a.id),
        config_id: e.config_id,
        actor_id: e.actor_id,
        variables: b,
        live_query_request_id: l,
      };
      e.access_token !== "" &&
        (m = babelHelpers["extends"]({}, m, { access_token: e.access_token }));
      var n = d("LiveQueryEventsLoggingResolver").tempResolveLoggingContext();
      n != null && (m = babelHelpers["extends"]({}, m, { logging_context: n }));
      return d("RelayRuntime").Observable.create(function (a) {
        var b = !1,
          e = null;
        f.subscribe({
          next: function (c) {
            var e = Date.now();
            if (c.extensions != null && c.extensions.is_final === !0) {
              d("LiveQueryEventsLoggingResolver").logEvent(
                "client_update",
                "www_initials_is_final",
                m.doc_id,
                m.config_id,
                l,
                n,
                null,
                e - g
              );
              if (c.extensions != null && c.extensions.live_query != null) {
                e = c.extensions.live_query;
                typeof e.priming_token === "string" &&
                  (m = babelHelpers["extends"]({}, m, {
                    priming_token: e.priming_token,
                  }));
                typeof e.response_digest === "string" &&
                  (m = babelHelpers["extends"]({}, m, {
                    last_response_digest: e.response_digest,
                  }));
                typeof e.disable === "boolean" && (b = e.disable);
              }
            }
            a.next(c);
          },
          error: function (b) {
            a.error(b);
          },
          complete: function () {
            if (b) {
              a.complete();
              return function () {};
            }
            e = c("makeGraphQLLiveQueryRequest")(m)
              .onResponse(function (b) {
                var e;
                try {
                  (e = c("RelayGraphQLRequestUtils").parsePayload(b)),
                    typeof e === "object" || h(0, 12937);
                } catch (b) {
                  d("LiveQueryEventsLoggingResolver").logEvent(
                    "client_update",
                    "error_parsing_response",
                    m.doc_id,
                    m.config_id,
                    l,
                    n,
                    b.message
                  );
                  return a.error(b);
                }
                if (!("errors" in e) && !("data" in e)) {
                  d("LiveQueryEventsLoggingResolver").logEvent(
                    "client_update",
                    "error_empty_response",
                    m.doc_id,
                    m.config_id,
                    l,
                    n,
                    "Parsed network response is empty"
                  );
                  return a.error(
                    d("RelayRuntime").RelayError.createWarning(
                      "EmptyResponseError",
                      "Parsed network response is empty"
                    )
                  );
                }
                if (e.errors)
                  for (
                    var b = e.errors,
                      f = Array.isArray(b),
                      g = 0,
                      b = f
                        ? b
                        : b[
                            typeof Symbol === "function"
                              ? Symbol.iterator
                              : "@@iterator"
                          ]();
                    ;

                  ) {
                    var i;
                    if (f) {
                      if (g >= b.length) break;
                      i = b[g++];
                    } else {
                      g = b.next();
                      if (g.done) break;
                      i = g.value;
                    }
                    i = i;
                    if (i.severity === "CRITICAL") {
                      i = c("RelayGraphQLRequestUtils").createErrorFromPayload(
                        i
                      );
                      d("LiveQueryEventsLoggingResolver").logEvent(
                        "client_update",
                        "error_in_response",
                        m.doc_id,
                        m.config_id,
                        l,
                        n,
                        i.message
                      );
                      return a.error(i);
                    }
                  }
                d("LiveQueryEventsLoggingResolver").logEvent(
                  "client_update",
                  "regular_response_update",
                  m.doc_id,
                  m.config_id,
                  l,
                  n
                );
                a.closed || a.next(e);
              })
              .onError(function (a) {
                d("LiveQueryEventsLoggingResolver").logEvent(
                  "client_update",
                  "error_received",
                  m.doc_id,
                  m.config_id,
                  l,
                  n,
                  a.message
                );
              })
              .onActive(function () {
                d("LiveQueryEventsLoggingResolver").logEvent(
                  "client_subscribe",
                  "initial_subscribe_request",
                  m.doc_id,
                  m.config_id,
                  l,
                  n
                );
              })
              .onPause(function (a, b) {
                d("LiveQueryEventsLoggingResolver").logEvent(
                  "client_unsubscribe",
                  "subscription_paused",
                  m.doc_id,
                  m.config_id,
                  l,
                  n
                );
              })
              .onResume(function (a) {
                d("LiveQueryEventsLoggingResolver").logEvent(
                  "client_subscribe",
                  "subscription_resumed",
                  m.doc_id,
                  m.config_id,
                  l,
                  n
                );
              })
              .send();
          },
        });
        return function () {
          e != null &&
            c("promiseDone")(e, function (a) {
              a.cancel(),
                d("LiveQueryEventsLoggingResolver").logEvent(
                  "client_unsubscribe",
                  "regular_unsubscribe",
                  m.doc_id,
                  m.config_id,
                  l,
                  n
                );
            });
        };
      });
    }
    function i() {
      return c("uuidv4")();
    }
    function j(a) {
      for (
        var b = c("LiveQueryWebRelayKillList").liveQueryWebRelayKillList,
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
        if (a === f) return !0;
      }
      return !1;
    }
    function k() {
      return "WebSocket" in window;
    }
    g["default"] = a;
  },
  98
);
__d(
  "getByPath",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b, c) {
      a = a;
      for (var d = 0; d < b.length; d++) {
        var e = b[d];
        if (a && typeof a !== "string" && typeof a !== "number" && e in a)
          a = a[e];
        else return c;
      }
      return a;
    }
    f["default"] = a;
  },
  66
);
__d(
  "MessengerWebEventsFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("getFalcoLogPolicy_DO_NOT_USE")("230");
    b = d("FalcoLoggerInternal").create("messenger_web_events", a);
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "MessagingThreadType",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      COMMUNITY_FOLDER: 17,
      COMMUNITY_GROUP: 18,
      COMMUNITY_GROUP_UNJOINED: 19,
      COMMUNITY_CHANNEL_CATEGORY: 20,
      COMMUNITY_PRIVATE_HIDDEN_JOINED_THREAD: 21,
      COMMUNITY_PRIVATE_HIDDEN_UNJOINED_THREAD: 22,
      COMMUNITY_BROADCAST_JOINED_THREAD: 23,
      COMMUNITY_BROADCAST_UNJOINED_THREAD: 24,
      COMMUNITY_GROUP_INVITED_UNJOINED: 25,
      COMMUNITY_SUB_THREAD: 26,
      DISCOVERABLE_PUBLIC_CHAT: 150,
      DISCOVERABLE_PUBLIC_CHAT_UNJOINED: 151,
      DISCOVERABLE_PUBLIC_BROADCAST_CHAT: 152,
      DISCOVERABLE_PUBLIC_BROADCAST_CHAT_UNJOINED: 153,
      DISCOVERABLE_PUBLIC_CHAT_V2: 154,
      DISCOVERABLE_PUBLIC_CHAT_V2_UNJOINED: 155,
      ONE_TO_ONE: 1,
      GROUP: 2,
      ROOM: 3,
      MONTAGE: 4,
      MARKETPLACE: 5,
      FOLDER: 6,
      TINCAN_ONE_TO_ONE: 7,
      TINCAN_GROUP_DISAPPEARING: 8,
      CARRIER_MESSAGING_ONE_TO_ONE: 10,
      CARRIER_MESSAGING_GROUP: 11,
      TINCAN_ONE_TO_ONE_DISAPPEARING: 13,
      PAGE_FOLLOW_UP: 14,
      SECURE_MESSAGE_OVER_WA_ONE_TO_ONE: 15,
      SECURE_MESSAGE_OVER_WA_GROUP: 16,
      PINNED: 101,
      LWG: 102,
      XAC_GROUP: 200,
      AI_BOT: 201,
    });
    f["default"] = a;
  },
  66
);
__d(
  "HiddenSubtreeContextProvider.react",
  [
    "HiddenSubtreeContext",
    "HiddenSubtreePassiveContext",
    "react",
    "removeFromArray",
    "useUnsafeRef_DEPRECATED",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
      j = b.useContext,
      k = b.useEffect,
      l = b.useLayoutEffect,
      m = b.useMemo,
      n = b.useRef;
    function o(a, b) {
      return a.backgrounded === b.backgrounded && a.hidden === b.hidden;
    }
    function p(a, b) {
      var c = a.backgrounded || b.backgrounded;
      a = a.hidden || b.hidden;
      return {
        backgrounded: c,
        hidden: a,
        hiddenOrBackgrounded: c || a,
        hiddenOrBackgrounded_FIXME: c || a,
      };
    }
    function a(a) {
      var b = a.children,
        d = a.ignoreParent,
        e = a.isBackgrounded,
        f = e === void 0 ? !1 : e,
        g = a.isHidden;
      e = j(c("HiddenSubtreeContext"));
      var q = j(c("HiddenSubtreePassiveContext")),
        r = m(
          function () {
            return {
              backgrounded: f,
              hidden: g,
              hiddenOrBackgrounded: f || g,
              hiddenOrBackgrounded_FIXME: f || g,
            };
          },
          [f, g]
        ),
        s = c("useUnsafeRef_DEPRECATED")(r),
        t = n(null),
        u = n([]),
        v = i(
          function () {
            var a = d === !0 ? s.current : p(s.current, q.getCurrentState());
            if (t.current == null || !o(a, t.current)) {
              t.current = a;
              var b = Array.from(u.current);
              b.forEach(function (b) {
                b(a);
              });
            }
          },
          [d, q]
        );
      l(
        function () {
          (s.current = r), v();
        },
        [r, v]
      );
      k(
        function () {
          if (d !== !0) {
            var a = q.subscribeToChanges(v);
            return function () {
              return a.remove();
            };
          }
        },
        [d, v, q]
      );
      a = m(
        function () {
          return {
            getCurrentState: function () {
              return d === !0 ? s.current : p(s.current, q.getCurrentState());
            },
            subscribeToChanges: function (a) {
              var b = u.current;
              b.push(a);
              return {
                remove: function () {
                  c("removeFromArray")(b, a);
                },
              };
            },
          };
        },
        [q, d]
      );
      var w = d === !0 ? r : p(r, e);
      e = m(
        function () {
          return {
            backgrounded: w.backgrounded,
            hidden: w.hidden,
            hiddenOrBackgrounded: w.backgrounded || w.hidden,
            hiddenOrBackgrounded_FIXME: w.backgrounded || w.hidden,
          };
        },
        [w.backgrounded, w.hidden]
      );
      return h.jsx(c("HiddenSubtreeContext").Provider, {
        value: e,
        children: h.jsx(c("HiddenSubtreePassiveContext").Provider, {
          value: a,
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
  "CometPrerenderer.react",
  ["HiddenSubtreeContextProvider.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.children;
      a = a.prerenderingProps;
      a = a === void 0 ? {} : a;
      var d = a.isVisible;
      d = d === void 0 ? !0 : d;
      a = a.shouldPrerender;
      a = a === void 0 ? !1 : a;
      return d || a
        ? h.jsx(c("HiddenSubtreeContextProvider.react"), {
            isHidden: !d && a,
            children: b({ hidden: !d && a }),
          })
        : null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "memoizeByReference",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = typeof WeakMap === "function";
    function a(a) {
      var b = g ? new WeakMap() : new Map(),
        c = function (c) {
          if (b.has(c)) {
            var d = b.get(c);
            if (d !== void 0) return d[0];
          }
          d = a(c);
          b.set(c, [d]);
          return d;
        };
      return c;
    }
    f["default"] = a;
  },
  66
);
__d(
  "getGraphQLEnumSafe",
  ["flipObject", "memoizeByReference"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      if (b == null) return null;
      a = h(a);
      return !Object.prototype.hasOwnProperty.call(a, b) ? null : a[b];
    }
    var h = c("memoizeByReference")(c("flipObject"));
    g["default"] = a;
  },
  98
);
__d(
  "bs_caml_option",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return a.BS_PRIVATE_NESTED_SOME_NONE !== void 0;
    }
    function g(a) {
      if (a === void 0) return { BS_PRIVATE_NESTED_SOME_NONE: 0 };
      else if (a !== null && a.BS_PRIVATE_NESTED_SOME_NONE !== void 0)
        return {
          BS_PRIVATE_NESTED_SOME_NONE: (a.BS_PRIVATE_NESTED_SOME_NONE + 1) | 0,
        };
      else return a;
    }
    function b(a) {
      if (a == null) return;
      else return g(a);
    }
    function c(a) {
      if (a === void 0) return;
      else return g(a);
    }
    function d(a) {
      if (a === null) return;
      else return g(a);
    }
    function h(a) {
      if (!(a !== null && a.BS_PRIVATE_NESTED_SOME_NONE !== void 0)) return a;
      a = a.BS_PRIVATE_NESTED_SOME_NONE;
      if (a === 0) return;
      else return { BS_PRIVATE_NESTED_SOME_NONE: (a - 1) | 0 };
    }
    function e(a) {
      if (a === void 0) return;
      else return h(a);
    }
    function i(a) {
      if (a !== void 0) return a.VAL;
      else return a;
    }
    f.nullable_to_opt = b;
    f.undefined_to_opt = c;
    f.null_to_opt = d;
    f.valFromOption = h;
    f.some = g;
    f.isNested = a;
    f.option_get = e;
    f.option_unwrap = i;
  },
  null
);
__d(
  "bs_caml_array",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(b, c, a) {
      var d = new Array(a),
        e = 0;
      c = c;
      while (e < a) (d[e] = b[c]), (e = (e + 1) | 0), (c = (c + 1) | 0);
      return d;
    }
    function g(a, b) {
      while (!0) {
        var c = b,
          d = a;
        if (!c) return d;
        b = c.tl;
        a = (c.hd.length + d) | 0;
        continue;
      }
    }
    function h(a, b, c) {
      while (!0) {
        var d = c,
          e = b;
        if (!d) return;
        var f = d.hd,
          g = f.length;
        e = e;
        var h = 0;
        while (h < g) (a[e] = f[h]), (e = (e + 1) | 0), (h = (h + 1) | 0);
        c = d.tl;
        b = e;
        continue;
      }
    }
    function b(a) {
      var b = g(0, a);
      b = new Array(b);
      h(b, 0, a);
      return b;
    }
    function c(a, b, c) {
      if (b < 0 || b >= a.length)
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "index out of bounds",
          Error: new Error(),
        };
      a[b] = c;
    }
    function d(a, b) {
      if (b < 0 || b >= a.length)
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "index out of bounds",
          Error: new Error(),
        };
      return a[b];
    }
    function e(a, b) {
      var c = new Array(a);
      for (var d = 0; d < a; ++d) c[d] = b;
      return c;
    }
    function i(a) {
      var b = new Array(a);
      for (var c = 0; c < a; ++c) b[c] = 0;
      return b;
    }
    function j(b, c, d, e, a) {
      if (e <= c) {
        for (var f = 0; f < a; ++f) d[(f + e) | 0] = b[(f + c) | 0];
        return;
      }
      for (f = (a - 1) | 0; f >= 0; --f) d[(f + e) | 0] = b[(f + c) | 0];
    }
    function k(a) {
      return a.slice(0);
    }
    f.dup = k;
    f.sub = a;
    f.concat = b;
    f.make = e;
    f.make_float = i;
    f.blit = j;
    f.get = d;
    f.set = c;
  },
  null
);
__d(
  "bs_curry",
  ["bs_caml_array"],
  function (a, b, c, d, e, f) {
    "use strict";
    function g(a, c) {
      while (!0) {
        var d = c,
          e = a,
          f = e.length;
        f = f === 0 ? 1 : f;
        var h = d.length;
        h = (f - h) | 0;
        if (h === 0) return e.apply(null, d);
        if (h >= 0)
          return (function (b, a) {
            return function (c) {
              return g(b, a.concat([c]));
            };
          })(e, d);
        c = b("bs_caml_array").sub(d, f, -h | 0);
        a = e.apply(null, b("bs_caml_array").sub(d, 0, f));
        continue;
      }
    }
    function h(a, b) {
      var c = a.length;
      if (c === 1) return a(b);
      else
        switch (c) {
          case 1:
            return a(b);
          case 2:
            return function (c) {
              return a(b, c);
            };
          case 3:
            return function (c, d) {
              return a(b, c, d);
            };
          case 4:
            return function (c, d, e) {
              return a(b, c, d, e);
            };
          case 5:
            return function (c, d, e, f) {
              return a(b, c, d, e, f);
            };
          case 6:
            return function (c, d, e, f, g) {
              return a(b, c, d, e, f, g);
            };
          case 7:
            return function (c, d, e, f, g, h) {
              return a(b, c, d, e, f, g, h);
            };
          default:
            return g(a, [b]);
        }
    }
    function a(a) {
      var b = a.length;
      if (b === 1) return a;
      else
        return function (b) {
          return h(a, b);
        };
    }
    function i(a, b, c) {
      var d = a.length;
      if (d === 2) return a(b, c);
      else
        switch (d) {
          case 1:
            return g(a(b), [c]);
          case 2:
            return a(b, c);
          case 3:
            return function (d) {
              return a(b, c, d);
            };
          case 4:
            return function (d, e) {
              return a(b, c, d, e);
            };
          case 5:
            return function (d, e, f) {
              return a(b, c, d, e, f);
            };
          case 6:
            return function (d, e, f, g) {
              return a(b, c, d, e, f, g);
            };
          case 7:
            return function (d, e, f, g, h) {
              return a(b, c, d, e, f, g, h);
            };
          default:
            return g(a, [b, c]);
        }
    }
    function c(a) {
      var b = a.length;
      if (b === 2) return a;
      else
        return function (b, c) {
          return i(a, b, c);
        };
    }
    function j(a, b, c, d) {
      var e = a.length;
      if (e === 3) return a(b, c, d);
      else
        switch (e) {
          case 1:
            return g(a(b), [c, d]);
          case 2:
            return g(a(b, c), [d]);
          case 3:
            return a(b, c, d);
          case 4:
            return function (e) {
              return a(b, c, d, e);
            };
          case 5:
            return function (e, f) {
              return a(b, c, d, e, f);
            };
          case 6:
            return function (e, f, g) {
              return a(b, c, d, e, f, g);
            };
          case 7:
            return function (e, f, g, h) {
              return a(b, c, d, e, f, g, h);
            };
          default:
            return g(a, [b, c, d]);
        }
    }
    function d(a) {
      var b = a.length;
      if (b === 3) return a;
      else
        return function (b, c, d) {
          return j(a, b, c, d);
        };
    }
    function k(a, b, c, d, e) {
      var f = a.length;
      if (f === 4) return a(b, c, d, e);
      else
        switch (f) {
          case 1:
            return g(a(b), [c, d, e]);
          case 2:
            return g(a(b, c), [d, e]);
          case 3:
            return g(a(b, c, d), [e]);
          case 4:
            return a(b, c, d, e);
          case 5:
            return function (f) {
              return a(b, c, d, e, f);
            };
          case 6:
            return function (f, g) {
              return a(b, c, d, e, f, g);
            };
          case 7:
            return function (f, g, h) {
              return a(b, c, d, e, f, g, h);
            };
          default:
            return g(a, [b, c, d, e]);
        }
    }
    function e(a) {
      var b = a.length;
      if (b === 4) return a;
      else
        return function (b, c, d, e) {
          return k(a, b, c, d, e);
        };
    }
    function l(a, b, c, d, e, f) {
      var h = a.length;
      if (h === 5) return a(b, c, d, e, f);
      else
        switch (h) {
          case 1:
            return g(a(b), [c, d, e, f]);
          case 2:
            return g(a(b, c), [d, e, f]);
          case 3:
            return g(a(b, c, d), [e, f]);
          case 4:
            return g(a(b, c, d, e), [f]);
          case 5:
            return a(b, c, d, e, f);
          case 6:
            return function (g) {
              return a(b, c, d, e, f, g);
            };
          case 7:
            return function (g, h) {
              return a(b, c, d, e, f, g, h);
            };
          default:
            return g(a, [b, c, d, e, f]);
        }
    }
    function m(a) {
      var b = a.length;
      if (b === 5) return a;
      else
        return function (b, c, d, e, f) {
          return l(a, b, c, d, e, f);
        };
    }
    function n(a, b, c, d, e, f, h) {
      var i = a.length;
      if (i === 6) return a(b, c, d, e, f, h);
      else
        switch (i) {
          case 1:
            return g(a(b), [c, d, e, f, h]);
          case 2:
            return g(a(b, c), [d, e, f, h]);
          case 3:
            return g(a(b, c, d), [e, f, h]);
          case 4:
            return g(a(b, c, d, e), [f, h]);
          case 5:
            return g(a(b, c, d, e, f), [h]);
          case 6:
            return a(b, c, d, e, f, h);
          case 7:
            return function (g) {
              return a(b, c, d, e, f, h, g);
            };
          default:
            return g(a, [b, c, d, e, f, h]);
        }
    }
    function o(a) {
      var b = a.length;
      if (b === 6) return a;
      else
        return function (b, c, d, e, f, g) {
          return n(a, b, c, d, e, f, g);
        };
    }
    function p(a, b, c, d, e, f, h, i) {
      var j = a.length;
      if (j === 7) return a(b, c, d, e, f, h, i);
      else
        switch (j) {
          case 1:
            return g(a(b), [c, d, e, f, h, i]);
          case 2:
            return g(a(b, c), [d, e, f, h, i]);
          case 3:
            return g(a(b, c, d), [e, f, h, i]);
          case 4:
            return g(a(b, c, d, e), [f, h, i]);
          case 5:
            return g(a(b, c, d, e, f), [h, i]);
          case 6:
            return g(a(b, c, d, e, f, h), [i]);
          case 7:
            return a(b, c, d, e, f, h, i);
          default:
            return g(a, [b, c, d, e, f, h, i]);
        }
    }
    function q(a) {
      var b = a.length;
      if (b === 7) return a;
      else
        return function (b, c, d, e, f, g, h) {
          return p(a, b, c, d, e, f, g, h);
        };
    }
    function r(a, b, c, d, e, f, h, i, j) {
      var k = a.length;
      if (k === 8) return a(b, c, d, e, f, h, i, j);
      else
        switch (k) {
          case 1:
            return g(a(b), [c, d, e, f, h, i, j]);
          case 2:
            return g(a(b, c), [d, e, f, h, i, j]);
          case 3:
            return g(a(b, c, d), [e, f, h, i, j]);
          case 4:
            return g(a(b, c, d, e), [f, h, i, j]);
          case 5:
            return g(a(b, c, d, e, f), [h, i, j]);
          case 6:
            return g(a(b, c, d, e, f, h), [i, j]);
          case 7:
            return g(a(b, c, d, e, f, h, i), [j]);
          default:
            return g(a, [b, c, d, e, f, h, i, j]);
        }
    }
    function s(a) {
      var b = a.length;
      if (b === 8) return a;
      else
        return function (b, c, d, e, f, g, h, i) {
          return r(a, b, c, d, e, f, g, h, i);
        };
    }
    f.app = g;
    f._1 = h;
    f.__1 = a;
    f._2 = i;
    f.__2 = c;
    f._3 = j;
    f.__3 = d;
    f._4 = k;
    f.__4 = e;
    f._5 = l;
    f.__5 = m;
    f._6 = n;
    f.__6 = o;
    f._7 = p;
    f.__7 = q;
    f._8 = r;
    f.__8 = s;
  },
  null
);
__d(
  "bs_belt_Option",
  ["bs_caml_option", "bs_curry"],
  function (a, b, c, d, e, f) {
    "use strict";
    function g(a, c) {
      if (a !== void 0 && c(b("bs_caml_option").valFromOption(a))) return a;
    }
    function a(a, c) {
      return g(a, b("bs_curry").__1(c));
    }
    function h(a, c) {
      if (a !== void 0) return c(b("bs_caml_option").valFromOption(a));
    }
    function c(a, c) {
      return h(a, b("bs_curry").__1(c));
    }
    function d(a) {
      if (a !== void 0) return b("bs_caml_option").valFromOption(a);
      throw { RE_EXN_ID: "Not_found", Error: new Error() };
    }
    function i(a, c, d) {
      if (a !== void 0) return d(b("bs_caml_option").valFromOption(a));
      else return c;
    }
    function e(a, c, d) {
      return i(a, c, b("bs_curry").__1(d));
    }
    function j(a, c) {
      if (a !== void 0)
        return b("bs_caml_option").some(
          c(b("bs_caml_option").valFromOption(a))
        );
    }
    function k(a, c) {
      return j(a, b("bs_curry").__1(c));
    }
    function l(a, c) {
      if (a !== void 0) return c(b("bs_caml_option").valFromOption(a));
    }
    function m(a, c) {
      return l(a, b("bs_curry").__1(c));
    }
    function n(a, c) {
      if (a !== void 0) return b("bs_caml_option").valFromOption(a);
      else return c;
    }
    function o(a) {
      return a !== void 0;
    }
    function p(a) {
      return a === void 0;
    }
    function q(a, c, d) {
      if (a !== void 0)
        if (c !== void 0)
          return d(
            b("bs_caml_option").valFromOption(a),
            b("bs_caml_option").valFromOption(c)
          );
        else return !1;
      else return c === void 0;
    }
    function r(a, c, d) {
      return q(a, c, b("bs_curry").__2(d));
    }
    function s(a, c, d) {
      if (a !== void 0)
        if (c !== void 0)
          return d(
            b("bs_caml_option").valFromOption(a),
            b("bs_caml_option").valFromOption(c)
          );
        else return 1;
      else if (c !== void 0) return -1;
      else return 0;
    }
    function t(a, c, d) {
      return s(a, c, b("bs_curry").__2(d));
    }
    f.keepU = g;
    f.keep = a;
    f.forEachU = h;
    f.forEach = c;
    f.getExn = d;
    f.mapWithDefaultU = i;
    f.mapWithDefault = e;
    f.mapU = j;
    f.map = k;
    f.flatMapU = l;
    f.flatMap = m;
    f.getWithDefault = n;
    f.isSome = o;
    f.isNone = p;
    f.eqU = q;
    f.eq = r;
    f.cmpU = s;
    f.cmp = t;
  },
  null
);
__d(
  "bs_caml",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      if (a < b) return -1;
      else if (a === b) return 0;
      else return 1;
    }
    function b(a, b) {
      if (a)
        if (b) return 0;
        else return 1;
      else if (b) return -1;
      else return 0;
    }
    function c(a, b) {
      if (a === b) return 0;
      else if (a < b) return -1;
      else if (a > b || a === a) return 1;
      else if (b === b) return -1;
      else return 0;
    }
    function d(a, b) {
      if (a === b) return 0;
      else if (a < b) return -1;
      else return 1;
    }
    function e(a, b) {
      if (a) return b;
      else return a;
    }
    function g(a, b) {
      if (a < b) return a;
      else return b;
    }
    function h(a, b) {
      if (a < b) return a;
      else return b;
    }
    function i(a, b) {
      if (a < b) return a;
      else return b;
    }
    function j(a, b) {
      if (a < b) return a;
      else return b;
    }
    function k(a, b) {
      if (a) return a;
      else return b;
    }
    function l(a, b) {
      if (a > b) return a;
      else return b;
    }
    function m(a, b) {
      if (a > b) return a;
      else return b;
    }
    function n(a, b) {
      if (a > b) return a;
      else return b;
    }
    function o(a, b) {
      if (a > b) return a;
      else return b;
    }
    function p(a, b) {
      if (a[1] === b[1]) return a[0] === b[0];
      else return !1;
    }
    function q(a, b) {
      var c = b[0],
        d = a[0];
      if (d > c) return !0;
      else if (d < c) return !1;
      else return a[1] >= b[1];
    }
    function r(a, b) {
      return !p(a, b);
    }
    function s(a, b) {
      return !q(a, b);
    }
    function t(a, b) {
      if (a[0] > b[0]) return !0;
      else if (a[0] < b[0]) return !1;
      else return a[1] > b[1];
    }
    function u(a, b) {
      return !t(a, b);
    }
    function v(a, b) {
      if (q(a, b)) return b;
      else return a;
    }
    function w(a, b) {
      if (t(a, b)) return a;
      else return b;
    }
    f.caml_int_compare = a;
    f.caml_bool_compare = b;
    f.caml_float_compare = c;
    f.caml_string_compare = d;
    f.caml_bool_min = e;
    f.caml_int_min = g;
    f.caml_float_min = h;
    f.caml_string_min = i;
    f.caml_int32_min = j;
    f.caml_bool_max = k;
    f.caml_int_max = l;
    f.caml_float_max = m;
    f.caml_string_max = n;
    f.caml_int32_max = o;
    f.i64_eq = p;
    f.i64_neq = r;
    f.i64_lt = s;
    f.i64_gt = t;
    f.i64_le = u;
    f.i64_ge = q;
    f.i64_min = v;
    f.i64_max = w;
  },
  null
);
__d(
  "bs_caml_exceptions",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = { contents: 0 };
    function a(a) {
      g.contents = (g.contents + 1) | 0;
      return a + ("/" + g.contents);
    }
    function b(a) {
      if (a == null) return !1;
      else return typeof a.RE_EXN_ID === "string";
    }
    function c(a) {
      return a.RE_EXN_ID;
    }
    f.id = g;
    f.create = a;
    f.caml_is_extension = b;
    f.caml_exn_slot_name = c;
  },
  null
);
__d(
  "bs_caml_int64",
  ["bs_caml"],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      return [b, a >>> 0];
    }
    var g = [-2147483648, 0],
      h = [2147483647, 4294967295],
      i = [0, 1],
      j = [0, 0],
      k = [-1, 4294967295];
    function l(a) {
      return (a & -2147483648) !== 0;
    }
    function m(a) {
      return (a & -2147483648) === 0;
    }
    function c(a) {
      var b = a[1];
      a = a[0];
      b = (b + 1) | 0;
      return [(a + (b === 0 ? 1 : 0)) | 0, b >>> 0];
    }
    function n(a) {
      var b = ((a[1] ^ -1) + 1) | 0;
      return [((a[0] ^ -1) + (b === 0 ? 1 : 0)) | 0, b >>> 0];
    }
    function o(a, b, c) {
      var d = a[1],
        e = (d + b) | 0;
      d = (l(d) && (l(b) || m(e))) || (l(b) && m(e)) ? 1 : 0;
      return [(a[0] + c + d) | 0, e >>> 0];
    }
    function p(a, b) {
      return o(a, b[1], b[0]);
    }
    function d(a, c) {
      if (c !== null) return b("bs_caml").i64_eq(a, c);
      else return !1;
    }
    function e(a, c) {
      if (c !== void 0) return b("bs_caml").i64_eq(a, c);
      else return !1;
    }
    function q(a, c) {
      if (c == null) return !1;
      else return b("bs_caml").i64_eq(a, c);
    }
    function r(a, b, c) {
      b = ((b ^ -1) + 1) >>> 0;
      c = ((c ^ -1) + (b === 0 ? 1 : 0)) | 0;
      return o(a, b, c);
    }
    function s(a, b) {
      return r(a, b[1], b[0]);
    }
    function t(a, b) {
      if (b === 0) return a;
      var c = a[1];
      if (b >= 32) return [c << ((b - 32) | 0), 0];
      else return [(c >>> ((32 - b) | 0)) | (a[0] << b), (c << b) >>> 0];
    }
    function u(a, b) {
      if (b === 0) return a;
      var c = a[0],
        d = (b - 32) | 0;
      if (d === 0) return [0, c >>> 0];
      else if (d > 0) return [0, c >>> d];
      else return [c >>> b, ((c << (-d | 0)) | (a[1] >>> b)) >>> 0];
    }
    function v(a, b) {
      if (b === 0) return a;
      var c = a[0];
      if (b < 32) return [c >> b, ((c << ((32 - b) | 0)) | (a[1] >>> b)) >>> 0];
      else return [c >= 0 ? 0 : -1, (c >> ((b - 32) | 0)) >>> 0];
    }
    function w(a) {
      if (a[0] !== 0) return !1;
      else return a[1] === 0;
    }
    function x(a, b) {
      while (!0) {
        var c = b,
          d = a,
          e,
          f = d[0],
          h = 0,
          i = 0,
          k;
        if (f !== 0) k = 4;
        else {
          if (d[1] === 0) return j;
          k = 4;
        }
        if (k === 4)
          if (c[0] !== 0) i = 3;
          else {
            if (c[1] === 0) return j;
            i = 3;
          }
        i === 3 && (f !== -2147483648 || d[1] !== 0 ? (h = 2) : (e = c[1]));
        if (h === 2) {
          k = c[0];
          i = d[1];
          h = 0;
          k !== -2147483648 || c[1] !== 0 ? (h = 3) : (e = i);
          if (h === 3) {
            h = c[1];
            if (f < 0) {
              if (k >= 0) return n(x(n(d), c));
              b = n(c);
              a = n(d);
              continue;
            }
            if (k < 0) return n(x(d, n(c)));
            d = f >>> 16;
            c = f & 65535;
            f = i >>> 16;
            i = i & 65535;
            var l = k >>> 16;
            k = k & 65535;
            var m = h >>> 16;
            h = h & 65535;
            var o,
              p,
              q,
              r = i * h;
            q = (r >>> 16) + f * h;
            p = q >>> 16;
            q = (q & 65535) + i * m;
            p = p + (q >>> 16) + c * h;
            o = p >>> 16;
            p = (p & 65535) + f * m;
            o = o + (p >>> 16);
            p = (p & 65535) + i * k;
            o = o + (p >>> 16);
            p = p & 65535;
            o = (o + (d * h + c * m + f * k + i * l)) & 65535;
            return [p | (o << 16), ((r & 65535) | ((q & 65535) << 16)) >>> 0];
          }
        }
        if ((e & 1) === 0) return j;
        else return g;
      }
    }
    function y(a, b) {
      return [a[0] ^ b[0], (a[1] ^ b[1]) >>> 0];
    }
    function z(a, b) {
      return [a[0] | b[0], (a[1] | b[1]) >>> 0];
    }
    function A(a, b) {
      return [a[0] & b[0], (a[1] & b[1]) >>> 0];
    }
    function B(a) {
      return a[0] * 4294967296 + a[1];
    }
    function C(a) {
      if (isNaN(a) || !isFinite(a)) return j;
      if (a <= -9223372036854776e3) return g;
      if (a + 1 >= 9223372036854776e3) return h;
      if (a < 0) return n(C(-a));
      var b = (a / 4294967296) | 0;
      a = a % 4294967296 | 0;
      return [b, a >>> 0];
    }
    function D(a) {
      var b = a[0],
        c = b >> 21;
      if (c === 0) return !0;
      else if (c === -1) return !(a[1] === 0 && b === -2097152);
      else return !1;
    }
    function E(a) {
      if (D(a)) return String(B(a));
      if (a[0] < 0)
        if (b("bs_caml").i64_eq(a, g)) return "-9223372036854775808";
        else return "-" + E(n(a));
      var c = C(Math.floor(B(a) / 10)),
        d = c[1],
        e = c[0];
      a = r(r(a, d << 3, (d >>> 29) | (e << 3)), d << 1, (d >>> 31) | (e << 1));
      d = a[1];
      e = a[0];
      if (d === 0 && e === 0) return E(c) + "0";
      if (e < 0) {
        a = ((d ^ -1) + 1) >>> 0;
        e = Math.ceil(a / 10);
        a = 10 * e - a;
        return E(r(c, e | 0, 0)) + String(a | 0);
      }
      e = Math.floor(d / 10);
      a = d - 10 * e;
      return E(o(c, e | 0, 0)) + String(a | 0);
    }
    function F(a, c) {
      while (!0) {
        var d = c,
          e = a,
          f = e[0],
          h = 0,
          l;
        if (d[0] !== 0 || d[1] !== 0) l = 2;
        else throw { RE_EXN_ID: "Division_by_zero", Error: new Error() };
        if (l === 2)
          if (f !== -2147483648)
            if (f !== 0) h = 1;
            else {
              if (e[1] === 0) return j;
              h = 1;
            }
          else if (e[1] !== 0) h = 1;
          else {
            if (b("bs_caml").i64_eq(d, i) || b("bs_caml").i64_eq(d, k))
              return e;
            if (b("bs_caml").i64_eq(d, g)) return i;
            l = v(e, 1);
            l = t(F(l, d), 1);
            var m;
            if (l[0] !== 0) m = 3;
            else {
              if (l[1] === 0)
                if (d[0] < 0) return i;
                else return n(i);
              m = 3;
            }
            if (m === 3) {
              m = s(e, x(d, l));
              return p(l, F(m, d));
            }
          }
        if (h === 1) {
          l = d[0];
          if (l !== -2147483648) m = 2;
          else {
            if (d[1] === 0) return j;
            m = 2;
          }
          if (m === 2) {
            if (f < 0) {
              if (l >= 0) return n(F(n(e), d));
              c = n(d);
              a = n(e);
              continue;
            }
            if (l < 0) return n(F(e, n(d)));
            h = j;
            m = e;
            while (b("bs_caml").i64_ge(m, d)) {
              f = Math.floor(B(m) / B(d));
              l = 1 > f ? 1 : f;
              e = Math.ceil(Math.log(l) / Math.LN2);
              f = e <= 48 ? 1 : Math.pow(2, e - 48);
              e = C(l);
              var o = x(e, d);
              while (o[0] < 0 || b("bs_caml").i64_gt(o, m))
                (l = l - f), (e = C(l)), (o = x(e, d));
              w(e) && (e = i);
              h = p(h, e);
              m = s(m, o);
            }
            return h;
          }
        }
      }
    }
    function G(a, b) {
      return s(a, x(F(a, b), b));
    }
    function H(a, b) {
      var c = F(a, b);
      return [c, s(a, x(c, b))];
    }
    function I(a, b) {
      var c = b[0],
        d = a[0];
      d = d < c ? -1 : d === c ? 0 : 1;
      if (d !== 0) return d;
      c = b[1];
      d = a[1];
      if (d < c) return -1;
      else if (d === c) return 0;
      else return 1;
    }
    function J(a) {
      return [a < 0 ? -1 : 0, a >>> 0];
    }
    function K(a) {
      return a[1] | 0;
    }
    function L(a) {
      var b = a[1];
      a = a[0];
      var c = function (a) {
        return (a >>> 0).toString(16);
      };
      if (a === 0 && b === 0) return "0";
      if (b === 0) return c(a) + "00000000";
      if (a === 0) return c(b);
      b = c(b);
      var d = (8 - b.length) | 0;
      if (d <= 0) return c(a) + b;
      else return c(a) + ("0".repeat(d) + b);
    }
    function M(a) {
      return [2147483647 & a[0], a[1]];
    }
    function N(a) {
      return (function (a, b) {
        return new Float64Array(new Int32Array([a, b]).buffer)[0];
      })(a[1], a[0]);
    }
    function O(a) {
      a = (function (a) {
        return new Int32Array(new Float64Array([a]).buffer);
      })(a);
      return [a[1], a[0] >>> 0];
    }
    f.mk = a;
    f.succ = c;
    f.min_int = g;
    f.max_int = h;
    f.one = i;
    f.zero = j;
    f.neg_one = k;
    f.of_int32 = J;
    f.to_int32 = K;
    f.add = p;
    f.neg = n;
    f.sub = s;
    f.lsl_ = t;
    f.lsr_ = u;
    f.asr_ = v;
    f.is_zero = w;
    f.mul = x;
    f.xor = y;
    f.or_ = z;
    f.and_ = A;
    f.equal_null = d;
    f.equal_undefined = e;
    f.equal_nullable = q;
    f.to_float = B;
    f.of_float = C;
    f.div = F;
    f.mod_ = G;
    f.compare = I;
    f.float_of_bits = N;
    f.bits_of_float = O;
    f.div_mod = H;
    f.to_hex = L;
    f.discard_sign = M;
    f.to_string = E;
  },
  null
);
__d(
  "bs_caml_format",
  ["bs_caml", "bs_caml_int64"],
  function (a, b, c, d, e, f) {
    "use strict";
    function g(a) {
      if (a >= 65)
        if (a >= 97)
          if (a >= 123) return -1;
          else return (a - 87) | 0;
        else if (a >= 91) return -1;
        else return (a - 55) | 0;
      else if (a > 57 || a < 48) return -1;
      else return (a - 48) | 0;
    }
    function h(a) {
      switch (a) {
        case 0:
          return 8;
        case 1:
          return 16;
        case 2:
          return 10;
        case 3:
          return 2;
      }
    }
    function i(a) {
      var b = 1,
        c = 2,
        d = 0,
        e = a.charCodeAt(d);
      switch (e) {
        case 43:
          d = (d + 1) | 0;
          break;
        case 44:
          break;
        case 45:
          b = -1;
          d = (d + 1) | 0;
          break;
        default:
      }
      if (a[d] === "0") {
        e = a.charCodeAt((d + 1) | 0);
        if (e >= 89)
          if (e >= 111) {
            if (e < 121)
              switch (e) {
                case 111:
                  c = 0;
                  d = (d + 2) | 0;
                  break;
                case 117:
                  d = (d + 2) | 0;
                  break;
                case 112:
                case 113:
                case 114:
                case 115:
                case 116:
                case 118:
                case 119:
                  break;
                case 120:
                  c = 1;
                  d = (d + 2) | 0;
                  break;
              }
          } else e === 98 && ((c = 3), (d = (d + 2) | 0));
        else if (e !== 66) {
          if (e >= 79)
            switch (e) {
              case 79:
                c = 0;
                d = (d + 2) | 0;
                break;
              case 85:
                d = (d + 2) | 0;
                break;
              case 80:
              case 81:
              case 82:
              case 83:
              case 84:
              case 86:
              case 87:
                break;
              case 88:
                c = 1;
                d = (d + 2) | 0;
                break;
            }
        } else (c = 3), (d = (d + 2) | 0);
      }
      return [d, b, c];
    }
    function a(a) {
      var b = i(a),
        c = b[0],
        d = h(b[2]),
        e = 4294967295,
        f = a.length,
        j = c < f ? a.charCodeAt(c) : 0;
      j = g(j);
      if (j < 0 || j >= d)
        throw { RE_EXN_ID: "Failure", _1: "int_of_string", Error: new Error() };
      var k = function (b, c) {
        while (!0) {
          var h = c,
            i = b;
          if (h === f) return i;
          var j = a.charCodeAt(h);
          if (j === 95) {
            c = (h + 1) | 0;
            continue;
          }
          j = g(j);
          if (j < 0 || j >= d)
            throw {
              RE_EXN_ID: "Failure",
              _1: "int_of_string",
              Error: new Error(),
            };
          i = d * i + j;
          if (i > e)
            throw {
              RE_EXN_ID: "Failure",
              _1: "int_of_string",
              Error: new Error(),
            };
          c = (h + 1) | 0;
          b = i;
          continue;
        }
      };
      b = b[1] * k(j, (c + 1) | 0);
      k = b | 0;
      if (d === 10 && b !== k)
        throw { RE_EXN_ID: "Failure", _1: "int_of_string", Error: new Error() };
      return k;
    }
    function c(a) {
      var c = i(a),
        d = c[2],
        e = c[0],
        f = b("bs_caml_int64").of_int32(h(d));
      c = b("bs_caml_int64").of_int32(c[1]);
      var j;
      switch (d) {
        case 0:
          j = [536870911, 4294967295];
          break;
        case 1:
          j = [268435455, 4294967295];
          break;
        case 2:
          j = [429496729, 2576980377];
          break;
        case 3:
          j = b("bs_caml_int64").max_int;
          break;
      }
      var k = a.length;
      d = e < k ? a.charCodeAt(e) : 0;
      d = b("bs_caml_int64").of_int32(g(d));
      if (
        b("bs_caml").i64_lt(d, b("bs_caml_int64").zero) ||
        b("bs_caml").i64_ge(d, f)
      )
        throw {
          RE_EXN_ID: "Failure",
          _1: "int64_of_string",
          Error: new Error(),
        };
      var l = function (c, d) {
        while (!0) {
          var e = d,
            h = c;
          if (e === k) return h;
          var i = a.charCodeAt(e);
          if (i === 95) {
            d = (e + 1) | 0;
            continue;
          }
          i = b("bs_caml_int64").of_int32(g(i));
          if (
            b("bs_caml").i64_lt(i, b("bs_caml_int64").zero) ||
            b("bs_caml").i64_ge(i, f) ||
            b("bs_caml").i64_gt(h, j)
          )
            throw {
              RE_EXN_ID: "Failure",
              _1: "int64_of_string",
              Error: new Error(),
            };
          h = b("bs_caml_int64").add(b("bs_caml_int64").mul(f, h), i);
          d = (e + 1) | 0;
          c = h;
          continue;
        }
      };
      c = b("bs_caml_int64").mul(c, l(d, (e + 1) | 0));
      l = b("bs_caml_int64").or_(c, b("bs_caml_int64").zero);
      if (b("bs_caml").i64_eq(f, [0, 10]) && b("bs_caml").i64_neq(c, l))
        throw {
          RE_EXN_ID: "Failure",
          _1: "int64_of_string",
          Error: new Error(),
        };
      return l;
    }
    function j(a) {
      switch (a) {
        case 0:
          return 8;
        case 1:
          return 16;
        case 2:
          return 10;
      }
    }
    function k(a) {
      if (
        (a >= 65 && a <= 90) ||
        (a >= 192 && a <= 214) ||
        (a >= 216 && a <= 222)
      )
        return (a + 32) | 0;
      else return a;
    }
    function l(a) {
      var b = a.length;
      if (b > 31)
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "format_int: format too long",
          Error: new Error(),
        };
      var c = {
          justify: "+",
          signstyle: "-",
          filter: " ",
          alternate: !1,
          base: 2,
          signedconv: !1,
          width: 0,
          uppercase: !1,
          sign: 1,
          prec: -1,
          conv: "f",
        },
        d = 0;
      while (!0) {
        var e = d;
        if (e >= b) return c;
        var f = a.charCodeAt(e),
          g = 0;
        if (f >= 69)
          if (f >= 88)
            if (f >= 121) g = 1;
            else
              switch (f) {
                case 88:
                  c.base = 1;
                  c.uppercase = !0;
                  d = (e + 1) | 0;
                  continue;
                case 101:
                case 102:
                case 103:
                  g = 5;
                  break;
                case 100:
                case 105:
                  g = 4;
                  break;
                case 111:
                  c.base = 0;
                  d = (e + 1) | 0;
                  continue;
                case 117:
                  c.base = 2;
                  d = (e + 1) | 0;
                  continue;
                case 89:
                case 90:
                case 91:
                case 92:
                case 93:
                case 94:
                case 95:
                case 96:
                case 97:
                case 98:
                case 99:
                case 104:
                case 106:
                case 107:
                case 108:
                case 109:
                case 110:
                case 112:
                case 113:
                case 114:
                case 115:
                case 116:
                case 118:
                case 119:
                  g = 1;
                  break;
                case 120:
                  c.base = 1;
                  d = (e + 1) | 0;
                  continue;
              }
          else if (f >= 72) g = 1;
          else {
            c.signedconv = !0;
            c.uppercase = !0;
            c.conv = String.fromCharCode(k(f));
            d = (e + 1) | 0;
            continue;
          }
        else
          switch (f) {
            case 35:
              c.alternate = !0;
              d = (e + 1) | 0;
              continue;
            case 32:
            case 43:
              g = 2;
              break;
            case 45:
              c.justify = "-";
              d = (e + 1) | 0;
              continue;
            case 46:
              c.prec = 0;
              var h = (e + 1) | 0;
              while (
                (function (b) {
                  return function () {
                    var c = (a.charCodeAt(b) - 48) | 0;
                    return c >= 0 && c <= 9;
                  };
                })(h)()
              )
                (c.prec =
                  (((Math.imul(c.prec, 10) + a.charCodeAt(h)) | 0) - 48) | 0),
                  (h = (h + 1) | 0);
              d = h;
              continue;
            case 33:
            case 34:
            case 36:
            case 37:
            case 38:
            case 39:
            case 40:
            case 41:
            case 42:
            case 44:
            case 47:
              g = 1;
              break;
            case 48:
              c.filter = "0";
              d = (e + 1) | 0;
              continue;
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
              g = 3;
              break;
            default:
              g = 1;
          }
        switch (g) {
          case 1:
            d = (e + 1) | 0;
            continue;
          case 2:
            c.signstyle = String.fromCharCode(f);
            d = (e + 1) | 0;
            continue;
          case 3:
            c.width = 0;
            h = e;
            while (
              (function (b) {
                return function () {
                  var c = (a.charCodeAt(b) - 48) | 0;
                  return c >= 0 && c <= 9;
                };
              })(h)()
            )
              (c.width =
                (((Math.imul(c.width, 10) + a.charCodeAt(h)) | 0) - 48) | 0),
                (h = (h + 1) | 0);
            d = h;
            continue;
          case 4:
            c.signedconv = !0;
            c.base = 2;
            d = (e + 1) | 0;
            continue;
          case 5:
            c.signedconv = !0;
            c.conv = String.fromCharCode(f);
            d = (e + 1) | 0;
            continue;
        }
      }
    }
    function m(a, b) {
      var c = a.justify,
        d = a.signstyle,
        e = a.filter,
        f = a.alternate,
        g = a.base,
        h = a.signedconv,
        i = a.width,
        j = a.uppercase;
      a = a.sign;
      var k = b.length;
      h && (a < 0 || d !== "-") && (k = (k + 1) | 0);
      f && (g === 0 ? (k = (k + 1) | 0) : g === 1 && (k = (k + 2) | 0));
      var l = "";
      if (c === "+" && e === " ") for (var m = k; m < i; ++m) l = l + e;
      h && (a < 0 ? (l = l + "-") : d !== "-" && (l = l + d));
      f && g === 0 && (l = l + "0");
      f && g === 1 && (l = l + "0x");
      if (c === "+" && e === "0") for (m = k; m < i; ++m) l = l + e;
      l = j ? l + b.toUpperCase() : l + b;
      if (c === "-") for (h = k; h < i; ++h) l = l + " ";
      return l;
    }
    function d(a, b) {
      if (a === "%d") return String(b);
      a = l(a);
      b = b < 0 ? (a.signedconv ? ((a.sign = -1), -b >>> 0) : b >>> 0) : b;
      b = b.toString(j(a.base));
      if (a.prec >= 0) {
        a.filter = " ";
        var c = (a.prec - b.length) | 0;
        c > 0 && (b = "0".repeat(c) + b);
      }
      return m(a, b);
    }
    function n(a) {
      if (!b("bs_caml").i64_lt(a, b("bs_caml_int64").zero))
        return b("bs_caml_int64").to_string(a);
      var c = [0, 10];
      a = b("bs_caml_int64").discard_sign(a);
      a = b("bs_caml_int64").div_mod(a, c);
      c = b("bs_caml_int64").div_mod(b("bs_caml_int64").add([0, 8], a[1]), c);
      a = b("bs_caml_int64").add(
        b("bs_caml_int64").add([214748364, 3435973836], a[0]),
        c[0]
      );
      return (
        b("bs_caml_int64").to_string(a) +
        "0123456789"[b("bs_caml_int64").to_int32(c[1])]
      );
    }
    function o(a) {
      var c = "",
        d = [0, 8],
        e = "01234567";
      if (b("bs_caml").i64_lt(a, b("bs_caml_int64").zero)) {
        var f,
          g = (f = b("bs_caml_int64")).discard_sign(a);
        g = f.div_mod(g, d);
        var h = f.add([268435456, 0], g[0]);
        g = g[1];
        c = e[f.to_int32(g)] + c;
        while (b("bs_caml").i64_neq(h, b("bs_caml_int64").zero)) {
          f = b("bs_caml_int64").div_mod(h, d);
          h = f[0];
          g = f[1];
          c = e[b("bs_caml_int64").to_int32(g)] + c;
        }
      } else {
        f = b("bs_caml_int64").div_mod(a, d);
        g = f[0];
        h = f[1];
        c = e[b("bs_caml_int64").to_int32(h)] + c;
        while (b("bs_caml").i64_neq(g, b("bs_caml_int64").zero)) {
          a = b("bs_caml_int64").div_mod(g, d);
          g = a[0];
          h = a[1];
          c = e[b("bs_caml_int64").to_int32(h)] + c;
        }
      }
      return c;
    }
    function e(a, c) {
      if (a === "%d") return b("bs_caml_int64").to_string(c);
      a = l(a);
      c =
        a.signedconv && b("bs_caml").i64_lt(c, b("bs_caml_int64").zero)
          ? ((a.sign = -1), b("bs_caml_int64").neg(c))
          : c;
      var d = a.base,
        e;
      switch (d) {
        case 0:
          e = o(c);
          break;
        case 1:
          e = b("bs_caml_int64").to_hex(c);
          break;
        case 2:
          e = n(c);
          break;
      }
      if (a.prec >= 0) {
        a.filter = " ";
        d = (a.prec - e.length) | 0;
        c = d > 0 ? "0".repeat(d) + e : e;
      } else c = e;
      return m(a, c);
    }
    function p(a, b) {
      a = l(a);
      var c = a.prec < 0 ? 6 : a.prec,
        d = b < 0 ? ((a.sign = -1), -b) : b;
      b = "";
      if (isNaN(d)) (b = "nan"), (a.filter = " ");
      else if (isFinite(d)) {
        var e = a.conv;
        switch (e) {
          case "e":
            b = d.toExponential(c);
            e = b.length;
            b[(e - 3) | 0] === "e" &&
              (b = b.slice(0, (e - 1) | 0) + ("0" + b.slice((e - 1) | 0)));
            break;
          case "f":
            b = d.toFixed(c);
            break;
          case "g":
            var f = c !== 0 ? c : 1;
            b = d.toExponential((f - 1) | 0);
            e = b.indexOf("e");
            c = Number(b.slice((e + 1) | 0)) | 0;
            if (c < -4 || d >= 1e21 || d.toFixed().length > f) {
              var g = (e - 1) | 0;
              while (b[g] === "0") g = (g - 1) | 0;
              b[g] === "." && (g = (g - 1) | 0);
              b = b.slice(0, (g + 1) | 0) + b.slice(e);
              g = b.length;
              b[(g - 3) | 0] === "e" &&
                (b = b.slice(0, (g - 1) | 0) + ("0" + b.slice((g - 1) | 0)));
            } else {
              var h = f;
              if (c < 0) (h = (h - ((c + 1) | 0)) | 0), (b = d.toFixed(h));
              else
                while (
                  (function () {
                    b = d.toFixed(h);
                    return b.length > ((f + 1) | 0);
                  })()
                )
                  h = (h - 1) | 0;
              if (h !== 0) {
                e = (b.length - 1) | 0;
                while (b[e] === "0") e = (e - 1) | 0;
                b[e] === "." && (e = (e - 1) | 0);
                b = b.slice(0, (e + 1) | 0);
              }
            }
            break;
          default:
        }
      } else (b = "inf"), (a.filter = " ");
      return m(a, b);
    }
    var q = function (a, b, c) {
        if (!isFinite(a))
          return isNaN(a) ? "nan" : a > 0 ? "infinity" : "-infinity";
        var d = a == 0 && 1 / a == -Infinity ? 1 : a >= 0 ? 0 : 1;
        d && (a = -a);
        var e = 0;
        if (!(a == 0))
          if (a < 1) while (a < 1 && e > -1022) (a *= 2), e--;
          else while (a >= 2) (a /= 2), e++;
        var f = e < 0 ? "" : "+",
          g = "";
        if (d) g = "-";
        else
          switch (c) {
            case 43:
              g = "+";
              break;
            case 32:
              g = " ";
              break;
            default:
              break;
          }
        if (b >= 0 && b < 13) {
          d = Math.pow(2, b * 4);
          a = Math.round(a * d) / d;
        }
        c = a.toString(16);
        if (b >= 0) {
          d = c.indexOf(".");
          if (d < 0) c += "." + "0".repeat(b);
          else {
            a = d + 1 + b;
            c.length < a
              ? (c += "0".repeat(a - c.length))
              : (c = c.substr(0, a));
          }
        }
        return g + "0x" + c + "p" + f + e.toString(10);
      },
      r = function (a, b) {
        var c = +a;
        if (a.length > 0 && c === c) return c;
        a = a.replace(/_/g, "");
        c = +a;
        if ((a.length > 0 && c === c) || /^[+-]?nan$/i.test(a)) return c;
        var d = /^ *([+-]?)0x([0-9a-f]+)\.?([0-9a-f]*)p([+-]?[0-9]+)/i.exec(a);
        if (d) {
          var e = d[3].replace(/0+$/, ""),
            f = parseInt(d[1] + d[2] + e, 16);
          d = (d[4] | 0) - 4 * e.length;
          c = f * Math.pow(2, d);
          return c;
        }
        if (/^\+?inf(inity)?$/i.test(a)) return Infinity;
        if (/^-inf(inity)?$/i.test(a)) return -Infinity;
        throw b;
      };
    function s(a) {
      return r(a, { RE_EXN_ID: "Failure", _1: "float_of_string" });
    }
    var t = d,
      u = d,
      v = a,
      w = a;
    f.caml_format_float = p;
    f.caml_hexstring_of_float = q;
    f.caml_format_int = d;
    f.caml_nativeint_format = t;
    f.caml_int32_format = u;
    f.caml_float_of_string = s;
    f.caml_int64_format = e;
    f.caml_int_of_string = a;
    f.caml_int32_of_string = v;
    f.caml_int64_of_string = c;
    f.caml_nativeint_of_string = w;
  },
  null
);
__d(
  "bs_caml_js_exceptions",
  ["bs_caml_exceptions", "bs_caml_option"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b("bs_caml_exceptions").create("Caml_js_exceptions.Error");
    function a(a) {
      if (b("bs_caml_exceptions").caml_is_extension(a)) return a;
      else return { RE_EXN_ID: g, _1: a };
    }
    function c(a) {
      if (a.RE_EXN_ID === g) return b("bs_caml_option").some(a._1);
    }
    f.$$Error = g;
    f.internalToOCamlException = a;
    f.caml_as_js_exn = c;
  },
  null
);
