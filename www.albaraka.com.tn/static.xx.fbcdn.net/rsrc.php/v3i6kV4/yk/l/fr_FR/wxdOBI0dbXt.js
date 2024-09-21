/*FB_PKG_DELIM*/

__d(
  "WebBrowserDimensionsTypedLogger",
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
          "logger:WebBrowserDimensionsLoggerConfig",
          this.$1,
          b("Banzai").BASIC,
          a
        );
      };
      c.logVital = function (a) {
        b("GeneratedLoggerUtils").log(
          "logger:WebBrowserDimensionsLoggerConfig",
          this.$1,
          b("Banzai").VITAL,
          a
        );
      };
      c.logImmediately = function (a) {
        b("GeneratedLoggerUtils").log(
          "logger:WebBrowserDimensionsLoggerConfig",
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
      c.setClientHintWidth = function (a) {
        this.$1.client_hint_width = a;
        return this;
      };
      c.setCpuCoresCount = function (a) {
        this.$1.cpu_cores_count = a;
        return this;
      };
      c.setDocumentFontSize = function (a) {
        this.$1.document_font_size = a;
        return this;
      };
      c.setPixelRatio = function (a) {
        this.$1.pixel_ratio = a;
        return this;
      };
      c.setScreenX = function (a) {
        this.$1.screen_x = a;
        return this;
      };
      c.setScreenY = function (a) {
        this.$1.screen_y = a;
        return this;
      };
      c.setServerPixelRatio = function (a) {
        this.$1.server_pixel_ratio = a;
        return this;
      };
      c.setServerViewportX = function (a) {
        this.$1.server_viewport_x = a;
        return this;
      };
      c.setServerViewportY = function (a) {
        this.$1.server_viewport_y = a;
        return this;
      };
      c.setViewportX = function (a) {
        this.$1.viewport_x = a;
        return this;
      };
      c.setViewportY = function (a) {
        this.$1.viewport_y = a;
        return this;
      };
      c.setZoomRatio = function (a) {
        this.$1.zoom_ratio = a;
        return this;
      };
      return a;
    })();
    c = {
      client_hint_width: !0,
      cpu_cores_count: !0,
      document_font_size: !0,
      pixel_ratio: !0,
      screen_x: !0,
      screen_y: !0,
      server_pixel_ratio: !0,
      server_viewport_x: !0,
      server_viewport_y: !0,
      viewport_x: !0,
      viewport_y: !0,
      zoom_ratio: !0,
    };
    f["default"] = a;
  },
  66
);
__d(
  "IGDWebUtils",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return a != null
        ? a === 1217981644879628 ||
            a === 936619743392459 ||
            a === 487152425211411 ||
            a === 1035956773910536
        : !1;
    }
    f.isInstagramWebSupportedApp = a;
  },
  66
);
__d(
  "MWCount.bs",
  ["ODS", "gkx"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {}
    function b(a, b) {
      d("ODS").bumpEntityKey(3185, a, b);
    }
    var h = c("gkx")("1430416") ? b : a;
    function e() {
      return h("fanta.load", "total");
    }
    function f(a) {
      return h("fanta.killed", a);
    }
    function i() {
      return h("fanta.new_message", "process");
    }
    function j() {
      h("fanta.new_message", "process");
      return h("fanta.new_message", "process_new");
    }
    function k() {
      h("fanta.new_message", "process");
      return h("fanta.new_message", "process_log");
    }
    function l() {
      h("fanta.new_message", "process");
      return h("fanta.new_message", "process_messages_received");
    }
    c = { logMessage: k, messagesReceived: l, newMessage: j };
    function m() {
      return h("fanta.new_message", "reject");
    }
    function n() {
      h("fanta.new_message", "reject");
      return h("fanta.new_message", "reject_old");
    }
    function o() {
      h("fanta.new_message", "reject");
      return h("fanta.new_message", "reject_supress");
    }
    b = { old: n, suppress: o };
    function p() {
      return h("fanta.new_message", "lift");
    }
    a = { $$process: i, Process: c, Reject: b, lift: p, reject: m };
    function q() {
      return h("fanta.cookie.lift", "none");
    }
    function r() {
      return h("fanta.cookie.lift", "some");
    }
    function s() {
      h("fanta.cookie.lift", "some");
      return h("fanta.cookie.lift", "one");
    }
    function t() {
      h("fanta.cookie.lift", "some");
      return h("fanta.cookie.lift", "many");
    }
    k = { many: t, none: q, one: s, some: r };
    function u() {
      return h("fanta.cookie.show", "none");
    }
    function v() {
      return h("fanta.cookie.show", "some");
    }
    function w() {
      h("fanta.cookie.show", "some");
      return h("fanta.cookie.show", "one");
    }
    function x() {
      h("fanta.cookie.show", "some");
      return h("fanta.cookie.show", "many");
    }
    l = { many: x, none: u, one: w, some: v };
    j = { Lift: k, Show: l };
    n = { Cookie: j, NewMessage: a, killed: f, load: e };
    function y() {
      return h("mwchat.load", "total");
    }
    function z() {
      return h("mwchat.new_message", "process");
    }
    function A() {
      return h("mwchat.new_message", "reject");
    }
    function B() {
      return h("mwchat.new_message", "lift");
    }
    o = { lift: B, process: z, reject: A };
    function C() {
      return h("mwchat.cookie.lift", "none");
    }
    function D() {
      return h("mwchat.cookie.lift", "some");
    }
    function E() {
      h("mwchat.cookie.lift", "some");
      return h("mwchat.cookie.lift", "one");
    }
    function F() {
      h("mwchat.cookie.lift", "some");
      return h("mwchat.cookie.lift", "many");
    }
    i = { many: F, none: C, one: E, some: D };
    function G() {
      return h("mwchat.cookie.show", "none");
    }
    function H() {
      return h("mwchat.cookie.show", "some");
    }
    function I() {
      h("mwchat.cookie.show", "some");
      return h("mwchat.cookie.show", "one");
    }
    function J() {
      h("mwchat.cookie.show", "some");
      return h("mwchat.cookie.show", "many");
    }
    c = { many: J, none: G, one: I, some: H };
    b = { Lift: i, Show: c };
    p = { Cookie: b, NewMessage: o, load: y };
    g.Blue = n;
    g.Comet = p;
  },
  98
);
__d(
  "ZenonRTWebBrowserFeatureSupport",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a() {
      return (
        typeof window.HTMLCanvasElement === "function" &&
        typeof window.HTMLCanvasElement.prototype.captureStream === "function"
      );
    }
    function b() {
      return g("getSenders");
    }
    function c() {
      return (
        typeof window.RTCRtpSender === "function" &&
        typeof window.RTCRtpSender.prototype.replaceTrack === "function"
      );
    }
    function d() {
      return (
        typeof window.RTCRtpSender === "function" &&
        typeof window.RTCRtpSender.prototype.createEncodedStreams === "function"
      );
    }
    function e() {
      return window.RTCRtpSender && "transform" in RTCRtpSender.prototype;
    }
    function g(a) {
      return typeof RTCPeerConnection.prototype[a] === "function";
    }
    f.isCanvasStreamSupported = a;
    f.isGetSendersSupported = b;
    f.isReplaceTrackSupported = c;
    f.isInsertableStreamsSupported = d;
    f.isInsertableStreamsSupportedInSafari = e;
  },
  66
);
__d(
  "RTWebIncomingRingConfiguration",
  ["UserAgent", "ZenonRTWebBrowserFeatureSupport", "gkx"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      return (
        c("UserAgent").isBrowser("Chrome >= 77") ||
        c("UserAgent").isBrowser("Edge (Chromium Based) >= 79") ||
        c("UserAgent").isBrowser("Opera >= 67") ||
        c("UserAgent").isBrowser("Firefox >= 70") ||
        (c("UserAgent").isBrowser("Safari >= 14.1") && c("gkx")("1451")) ||
        (c("UserAgent").isBrowser("Oculus Browser >= 6") && c("gkx")("1188589"))
      );
    }
    function b() {
      return (
        c("gkx")("5709") &&
        d("ZenonRTWebBrowserFeatureSupport").isInsertableStreamsSupported()
      );
    }
    g.isSupportedClient = a;
    g.isE2EESupportedClient = b;
  },
  98
);
__d(
  "BrowserDimensionsLogger",
  ["SiteData", "WebBrowserDimensionsTypedLogger", "getViewportDimensions"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = null;
    function a(a) {
      var b = i();
      b = new (c("WebBrowserDimensionsTypedLogger"))()
        .setPixelRatio(window.devicePixelRatio || 1)
        .setServerPixelRatio(c("SiteData").pr)
        .setScreenX(window.screen.width)
        .setScreenY(window.screen.height)
        .setViewportX(b.width)
        .setViewportY(b.height)
        .setServerViewportX(a.viewportWidth)
        .setServerViewportY(a.viewportHeight);
      window.navigator &&
        window.navigator.hardwareConcurrency &&
        b.setCpuCoresCount(window.navigator.hardwareConcurrency);
      a.clientHintWidth != null && b.setClientHintWidth(a.clientHintWidth);
      if (window.innerWidth > 0 && window.outerWidth > 0) {
        a = Math.round((window.outerWidth / window.innerWidth) * 100) / 100;
        b.setZoomRatio(a);
      }
      if (window.getComputedStyle && document.documentElement != null) {
        a = window.getComputedStyle(document.documentElement);
        a != null && b.setDocumentFontSize(a.fontSize);
      }
      b.log();
    }
    function i() {
      h === null && (h = c("getViewportDimensions")());
      return h;
    }
    g.init = a;
    g.getInitialViewportDimensions = i;
  },
  98
);
__d(
  "translateKey",
  ["fbt", "invariant"],
  function (a, b, c, d, e, f, g, h, i) {
    var j = {
      alt: h._("alt"),
      enter: h._("entrer"),
      delete: h._("suppr"),
      forward_delete: h._("touche Supprimer"),
      caps_lock: h._("touche Majuscules"),
      shift: h._("Maj"),
      opt: h._("opt"),
      ctrl: h._("ctrl"),
      cmd: h._("cmd"),
      esc: h._("\u00e9chap"),
      tab: h._("tab"),
      up: h._("haut"),
      down: h._("bas"),
      right: h._("droite"),
      left: h._("gauche"),
      page_up: h._("page haut"),
      page_down: h._("page bas"),
      home: h._("accueil"),
      end: h._("fin"),
    };
    function a(a) {
      if (Object.prototype.hasOwnProperty.call(j, a)) return j[a];
      a.length === 1 || i(0, 2507);
      return a;
    }
    g["default"] = a;
  },
  98
);
__d(
  "ArgumentError",
  ["ManagedError"],
  function (a, b, c, d, e, f, g) {
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c) {
        return a.call(this, b, c) || this;
      }
      return b;
    })(c("ManagedError"));
    g["default"] = a;
  },
  98
);
__d(
  "RequestConstants",
  ["errorCode"],
  function (a, b, c, d, e, f, g, h) {
    a = {
      code: 1,
      error_subcode: 1357045,
      message: "unknown error (empty response)",
      type: "http",
      status: 0,
    };
    g.PARSE_ERROR_TEMPLATE = a;
  },
  98
);
__d(
  "sdk.FeatureFunctor",
  [],
  function (a, b, c, d, e, f) {
    function g(a, b, c) {
      if (a.features && b in a.features) {
        a = a.features[b];
        if (typeof a === "object" && typeof a.rate === "number")
          if (a.rate && Math.random() * 100 <= a.rate) return a.value || !0;
          else return a.value ? null : !1;
        else return a;
      }
      return c;
    }
    function a(a) {
      return function () {
        for (var b = arguments.length, c = new Array(b), d = 0; d < b; d++)
          c[d] = arguments[d];
        if (c.length < 2) throw new Error("Default value is required");
        var e = c[0],
          f = c[1];
        return g(a, e, f);
      };
    }
    f.create = a;
  },
  66
);
__d(
  "sdk.feature",
  ["JSSDKConfig", "sdk.FeatureFunctor"],
  function (a, b, c, d, e, f, g) {
    a = d("sdk.FeatureFunctor").create(d("JSSDKConfig"));
    g["default"] = a;
  },
  98
);
__d(
  "sdk.Cookie",
  ["QueryString", "sdk.Runtime", "sdk.Scribe", "sdk.feature"],
  function (a, b, c, d, e, f, g) {
    var h = null,
      i = ["fblo_", "fbsr_", "fbm_"];
    function j(a, b, e, f) {
      if (!i.includes(a)) {
        d("sdk.Scribe").log("jssdk_error", {
          appId: c("sdk.Runtime").getClientID(),
          error: "unknown_cookie_prefix." + a,
        });
        if (c("sdk.feature")("limit_unknown_cookie_setting", !1)) return;
      }
      a = a + c("sdk.Runtime").getClientID();
      f = f ? "; SameSite=None;Secure" : "";
      var g = h !== null && h !== ".";
      g &&
        ((document.cookie = a + "=; expires=Wed, 04 Feb 2004 08:00:00 GMT" + f),
        (document.cookie =
          a +
          "=; expires=Wed, 04 Feb 2004 08:00:00 GMT;domain=" +
          location.hostname +
          f));
      var j = new Date(e).toUTCString();
      document.cookie =
        a +
        "=" +
        b +
        (b && e === 0 ? "" : "; expires=" + j) +
        "; path=/" +
        (g ? "; domain=" + ((a = h) != null ? a : "") : "") +
        f;
    }
    function k(a) {
      a = a + c("sdk.Runtime").getClientID();
      a = new RegExp("\\b" + a + "=([^;]*)\\b");
      a = document.cookie.match(a);
      if (a == null) return null;
      else return a[1];
    }
    function a(a) {
      h = a;
      a = c("QueryString").encode({
        base_domain: h !== null && h !== "." ? h : "",
      });
      var b = new Date();
      b.setFullYear(b.getFullYear() + 1);
      j("fbm_", a, b.getTime(), !0);
    }
    function b() {
      return h;
    }
    function l() {
      var a = k("fbm_");
      if (a != null && h === null) {
        a = c("QueryString").decode(a);
        h = a.base_domain;
        return { base_domain: h };
      }
      return null;
    }
    function e() {
      return k("fbsr_");
    }
    function f(a, b) {
      if (a === "")
        throw new Error(
          "Value passed to Cookie.setSignedRequestCookie was empty."
        );
      j("fbsr_", a, b, !0);
    }
    function m() {
      l(), j("fbsr_", "", 0, !0);
    }
    g.setRaw = j;
    g.getRaw = k;
    g.setDomain = a;
    g.getDomain = b;
    g.loadMeta = l;
    g.loadSignedRequest = e;
    g.setSignedRequestCookie = f;
    g.clearSignedRequestCookie = m;
  },
  98
);
__d(
  "sdk.safelyParseResponse",
  ["errorCode", "nullthrows"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = function (a, b, c, d) {
      return j;
    };
    function a(a, b, d) {
      b === void 0 && (b = null);
      d === void 0 && (d = null);
      try {
        return a === null ? j : JSON.parse(c("nullthrows")(a));
      } catch (c) {
        return i(c, a, b, d);
      }
    }
    var j = {
      error: {
        code: 1,
        error_subcode: 1357046,
        message: "Received Invalid JSON reply.",
        type: "http",
      },
    };
    a.ERROR = j;
    a.setErrorHandler = function (a) {
      i = a;
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "CORSRequest",
  [
    "Log",
    "QueryString",
    "RequestConstants",
    "sdk.Cookie",
    "sdk.safelyParseResponse",
    "wrapFunction",
  ],
  function (a, b, c, d, e, f, g) {
    function h(a, b, d) {
      d === void 0 && (d = { withCredentials: !1 });
      if (!self.XMLHttpRequest) return null;
      var e = new XMLHttpRequest(),
        f = function () {};
      ((d = d) == null ? void 0 : d.withCredentials) &&
        (e.withCredentials = !0);
      if ("withCredentials" in e)
        e.open(a, b, !0),
          e.setRequestHeader(
            "Content-type",
            "application/x-www-form-urlencoded"
          );
      else if (self.XDomainRequest) {
        e = new XDomainRequest();
        try {
          e.open(a, b), (e.onprogress = e.ontimeout = f);
        } catch (a) {
          return null;
        }
      } else return null;
      var g = {
          send: function (a) {
            e.send(a);
          },
        },
        h = c("wrapFunction")(
          function () {
            (h = f), "onload" in g && g.onload(e);
          },
          "entry",
          "XMLHttpRequest:load"
        ),
        i = c("wrapFunction")(
          function () {
            (i = f), "onerror" in g && g.onerror(e);
          },
          "entry",
          "XMLHttpRequest:error"
        );
      e.onload = function () {
        h();
      };
      e.onerror = function () {
        i();
      };
      e.onreadystatechange = function () {
        e.readyState == 4 && (e.status == 200 ? h() : i());
      };
      return g;
    }
    var i = "for (;;);",
      j = i.length;
    function k(a) {
      a.substring(0, j) == i && (a = a.substring(j));
      return a;
    }
    function a(a, b, e, f, g) {
      g === void 0 && (g = { withCredentials: !1 });
      if (
        a.includes("/../") ||
        a.includes("/..\\") ||
        a.includes("\\../") ||
        a.includes("\\..\\")
      ) {
        d("Log").error("CORSRequest.execute(): path traversal is not allowed.");
        return !1;
      }
      try {
        if (self.document) {
          var i = d("sdk.Cookie").getRaw("cppo");
          i &&
            (a = c("QueryString").appendToUrl(
              a,
              c("QueryString").encode({ __cppo: i })
            ));
        }
      } catch (a) {}
      e.suppress_http_code = 1;
      i = c("QueryString").encode(e);
      b != "post" && ((a = c("QueryString").appendToUrl(a, i)), (i = ""));
      e = h(b, a, g);
      if (!e) return !1;
      e.onload = function (b) {
        f(c("sdk.safelyParseResponse")(k(b.responseText), a, b.status));
      };
      e.onerror = function (b) {
        b.responseText
          ? f(c("sdk.safelyParseResponse")(k(b.responseText), a, b.status))
          : f({
              error: babelHelpers["extends"](
                {},
                d("RequestConstants").PARSE_ERROR_TEMPLATE,
                { status: b.status }
              ),
            });
      };
      e.send(i);
      return !0;
    }
    b = { execute: a };
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "flattenObject",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      var b = {};
      for (var c in a)
        if (Object.prototype.hasOwnProperty.call(a, c)) {
          var d = a[c];
          if (d == null) continue;
          else typeof d === "string" ? (b[c] = d) : (b[c] = JSON.stringify(d));
        }
      return b;
    }
    f["default"] = a;
  },
  66
);
__d(
  "sdk.URI",
  ["QueryString", "URIAbstractBase"],
  function (a, b, c, d, e, f, g) {
    var h = /\.facebook\.com$/,
      i = {
        serialize: function (a) {
          return a ? c("QueryString").encode(a) : "";
        },
        deserialize: function (a) {
          return a ? c("QueryString").decode(a) : {};
        },
      };
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b) {
        return a.call(this, b, i) || this;
      }
      var d = b.prototype;
      d.isFacebookURI = function () {
        return h.test(this.getDomain());
      };
      d.valueOf = function () {
        return this.toString();
      };
      b.isValidURI = function (a) {
        return c("URIAbstractBase").isValid(a, i);
      };
      return b;
    })(c("URIAbstractBase"));
    g["default"] = a;
  },
  98
);
__d(
  "ApiClientUtils",
  ["ArgumentError", "Assert", "Log", "flattenObject", "sdk.URI", "sprintf"],
  function (a, b, c, d, e, f, g) {
    var h = { get: !0, post: !0, delete: !0, put: !0 };
    function a(a) {
      var b = a.shift();
      c("Assert").isString(b, "Invalid path");
      !/^https?/.test(b) && b.charAt(0) !== "/" && (b = "/" + b);
      var e,
        f = {};
      try {
        e = new (c("sdk.URI"))(b);
      } catch (a) {
        throw new (c("ArgumentError"))(a.message, a);
      }
      a.forEach(function (a) {
        return (f[typeof a] = a);
      });
      b = (f.string || "get").toLowerCase();
      c("Assert").isTrue(
        Object.prototype.hasOwnProperty.call(h, b),
        c("sprintf")("Invalid method passed to ApiClient: %s", b)
      );
      a = f["function"];
      a || d("Log").warn("No callback passed to the ApiClient");
      f.object && e.addQueryData(c("flattenObject")(f.object));
      var g = e.getQueryData();
      g.method = b;
      return { uri: e, callback: a, params: g };
    }
    g.parseCallDataFromArgs = a;
  },
  98
);
__d(
  "whitelistObjectKeys",
  [],
  function (a, b, c, d, e, f) {
    function a(a, b) {
      var c = {};
      b = Array.isArray(b) ? b : Object.keys(b);
      for (var d = 0; d < b.length; d++)
        typeof a[b[d]] !== "undefined" && (c[b[d]] = a[b[d]]);
      return c;
    }
    f["default"] = a;
  },
  66
);
__d(
  "ApiBatcher",
  [
    "invariant",
    "ApiClientUtils",
    "QueryString",
    "sdk.safelyParseResponse",
    "whitelistObjectKeys",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = 50,
      j = 105440539523;
    a = (function () {
      function a(a, b) {
        (this.$1 = []),
          (this.$2 = []),
          (this.$4 = null),
          (this.executeRequest = a),
          (this.$3 = b);
      }
      var b = a.prototype;
      b.scheduleBatchCall = function () {
        var b = this;
        for (var c = arguments.length, d = new Array(c), e = 0; e < c; e++)
          d[e] = arguments[e];
        var f = a.prepareBatchParams(d),
          g = f.body,
          h = f.callback,
          j = f.method,
          k = f.relative_url,
          l = { method: j, relative_url: k };
        g && (l.body = g);
        this.$1.push(l);
        this.$2.push(h);
        this.$1.length == i
          ? (this.$4 && window.clearTimeout(this.$4), this.$5())
          : this.$4 ||
            (this.$4 = window.setTimeout(function () {
              b.$5();
            }, 0));
      };
      a.prepareBatchParams = function (a, b) {
        b === void 0 && (b = []);
        a = d("ApiClientUtils").parseCallDataFromArgs(a);
        var e = a.uri,
          f = a.callback;
        a = a.params.method;
        var g,
          h = e.removeQueryData("method").toString();
        if (a.toLowerCase() == "post") {
          var i = e.getQueryData();
          g = c("QueryString").encode(i);
          i = c("whitelistObjectKeys")(i, b);
          h = e.setQueryData(i).toString();
        }
        return { body: g, callback: f, method: a, relative_url: h };
      };
      b.$5 = function () {
        this.$1.length > 0 || h(0, 4698);
        this.$1.length === this.$2.length || h(0, 4699);
        var a = this.$1,
          b = this.$2;
        this.$1 = [];
        this.$2 = [];
        this.$4 = null;
        if (a.length === 1) {
          var d = a[0],
            e = b[0],
            f = d.body ? c("QueryString").decode(d.body) : null;
          this.executeRequest(d.relative_url, d.method, f, e);
          return;
        }
        this.executeRequest(
          "/",
          "POST",
          { batch: a, include_headers: !1, batch_app_id: this.$3 || j },
          function (a) {
            Array.isArray(a)
              ? a.forEach(function (a, d) {
                  b[d](c("sdk.safelyParseResponse")(a && a.body));
                })
              : b.forEach(function (a) {
                  return a({ error: { message: "Fatal: batch call failed." } });
                });
          }
        );
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "ApiClient",
  [
    "ApiBatcher",
    "ApiClientUtils",
    "Assert",
    "CORSRequest",
    "Log",
    "ObservableMixin",
    "QueryString",
    "UrlMap",
    "flattenObject",
  ],
  function (a, b, c, d, e, f, g) {
    var h,
      i,
      j,
      k = [],
      l = !1,
      m = 2e3,
      n = {
        fql_query: !0,
        fql_multiquery: !0,
        friends_get: !0,
        notifications_get: !0,
        stream_get: !0,
        users_getinfo: !0,
      },
      o = ["cors"],
      p = 0,
      q = [],
      r = 0,
      s = 0,
      t,
      u = d("Log");
    function v(a, b, d, e) {
      var f = r !== 0 && p >= r;
      if (f) {
        q.push(function () {
          return v(a, b, d, e);
        });
        y.inform("request.queued", a, b, d);
        return;
      }
      p++;
      var g = babelHelpers["extends"]({}, j, d);
      g.pretty = g.pretty || 0;
      g = c("flattenObject")(g);
      f = { cors: c("CORSRequest") };
      var i = {},
        m = g.access_token || h;
      m && (i.access_token = m);
      b !== "get" &&
        k.forEach(function (a) {
          i[a] = g[a];
        });
      m = Object.keys(i);
      m.length > 0 &&
        ((a = c("QueryString").appendToUrl(a, i)), delete g.access_token);
      m = o;
      for (var n = 0; n < m.length; n++) {
        var s = f[m[n]],
          t = babelHelpers["extends"]({}, g);
        if (s.execute(a, b, t, e, { withCredentials: l })) return;
      }
      e({
        error: {
          type: "no-transport",
          message: "Could not find a usable transport for request",
        },
      });
    }
    function w(a, b, c, d, e, f, g, h) {
      if (d.transport && d.transport === "chunked" && h === !1) {
        a(g, !1);
        return;
      }
      g && g.error && y.inform("request.error", b, c, d, g, Date.now() - e, f);
      y.inform("request.complete", b, c, d, g, Date.now() - e, f);
      p--;
      a && a(g);
      h = q.length > 0 && p < r;
      if (h) {
        b = q.shift();
        b();
      }
    }
    function x() {
      for (var a = arguments.length, b = new Array(a), c = 0; c < a; c++)
        b[c] = arguments[c];
      var e = d("ApiClientUtils").parseCallDataFromArgs(b),
        f = e.uri,
        g = e.callback,
        h = e.params,
        i = h.method;
      z(f, i) && (i = "post");
      var j =
          f.getProtocol() && f.getDomain()
            ? f.setQueryData({}).toString()
            : d("UrlMap").resolve("graph_domain") + f.getPath(),
        k = s++;
      "_fb_domain" in h && y.setKeptQueryParams(["_fb_domain"]);
      y.inform("request.prepare", j, h, k);
      v(
        j,
        i == "get" ? "get" : "post",
        h,
        w.bind(null, g, f.getPath(), i, h, Date.now(), k)
      );
    }
    function a() {
      var a;
      t || (t = new (c("ApiBatcher"))(x, i));
      (a = t).scheduleBatchCall.apply(a, arguments);
    }
    function b(a, b) {
      c("Assert").isObject(a);
      c("Assert").isString(a.method, "method missing");
      b || u.warn("No callback passed to the ApiClient");
      var e = a.method.toLowerCase().replace(".", "_");
      a.format = "json-strings";
      a.api_key = i;
      e = e in n ? "api_read" : "api";
      e = d("UrlMap").resolve(e) + "/restserver.php";
      var f = s++;
      b = w.bind(null, b, "/restserver.php", "get", a, Date.now(), f);
      v(e, "get", a, b);
    }
    function e(a) {
      return c("ApiBatcher").prepareBatchParams(a, k);
    }
    var y = Object.assign(new (c("ObservableMixin"))(), {
      setAccessToken: function (a) {
        h &&
          a &&
          h !== a &&
          u.error(
            "You are overriding current access token, that means some other app is expecting different access token and you will probably break things. Please consider passing access_token directly to API parameters instead of overriding the global settings."
          ),
          (h = a);
      },
      setAccessTokenForClientID: function (a, b) {
        h && i && i !== b
          ? u.error(
              "Not overriding access token since it was not initialized by your application."
            )
          : (h = a);
      },
      setWithCredentials: function (a) {
        l = a;
      },
      getWithCredentials: function () {
        return l;
      },
      getClientID: function () {
        return i;
      },
      getAccessToken: function () {
        return h;
      },
      setClientID: function (a) {
        i &&
          i !== a &&
          u.warn(
            "Warning: Two different applications have attempted to set the client ID. Overriding the previously set client ID."
          ),
          (i = a);
      },
      setDefaultParams: function (a) {
        j = a;
      },
      getDefaultParams: function () {
        return j;
      },
      setDefaultTransports: function (a) {
        o = a;
      },
      setLogger: function (a) {
        u = a;
      },
      setMaxConcurrentRequests: function (a) {
        r = a;
      },
      setKeptQueryParams: function (a) {
        k = a;
      },
      getCurrentlyExecutingRequestCount: function () {
        return p;
      },
      getQueuedRequestCount: function () {
        return q.length;
      },
      rest: b,
      graph: x,
      scheduleBatchCall: a,
      prepareBatchParams: e,
    });
    function z(a, b) {
      return a.toString().length > m && b === "get";
    }
    f = y;
    g["default"] = f;
  },
  98
);
__d(
  "AbstractSearchSource",
  ["Promise"],
  function (a, b, c, d, e, f) {
    a = (function () {
      function a() {}
      var c = a.prototype;
      c.bootstrap = function (a) {
        var c = this;
        this.$1 ||
          (this.$1 = new (b("Promise"))(function (a) {
            c.bootstrapImpl(a);
          }));
        return this.$1.then(a);
      };
      c.search = function (a, b, c) {
        this.searchImpl(a, b, c);
      };
      c.bootstrapImpl = function (a) {
        a();
      };
      c.searchImpl = function (a, b, c) {
        throw new Error("Abstract method #searchImpl is not implemented.");
      };
      c.clearBootstrappedData = function () {
        this.$1 = null;
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "SearchSourceQueryStatus",
  [],
  function (a, b, c, d, e, f) {
    a = "ACTIVE";
    b = "COMPLETE";
    f.ACTIVE = a;
    f.COMPLETE = b;
  },
  66
);
__d(
  "SearchSourceCallbackManager",
  ["invariant", "SearchSourceQueryStatus", "createObjectFrom", "nullthrows"],
  function (a, b, c, d, e, f, g, h) {
    a = (function () {
      function a(a) {
        (this.$9 = a.parseFn),
          typeof this.$9 === "function" || h(0, 4065),
          (this.$8 = a.matchFn),
          typeof this.$8 === "function" || h(0, 4066),
          (this.$2 = a.alwaysPrefixMatch || !1),
          (this.$6 = a.indexFn || i),
          (this.$4 = a.exclusions || {}),
          this.reset();
      }
      var b = a.prototype;
      b.search = function (a, b) {
        var c = this.$13(a, b);
        if (c) return 0;
        this.$1.push({ queryString: a, callback: b });
        c = this.$1.length - 1;
        this.$10.push(c);
        return c;
      };
      b.$13 = function (a, b) {
        var c = this,
          e = this.$14(a),
          f = !!this.$5[a];
        if (!e.length) {
          b(
            [],
            a,
            f
              ? d("SearchSourceQueryStatus").COMPLETE
              : d("SearchSourceQueryStatus").ACTIVE
          );
          return f;
        }
        e = e.map(function (a) {
          return c.$3[a];
        });
        b(
          e,
          a,
          f
            ? d("SearchSourceQueryStatus").COMPLETE
            : d("SearchSourceQueryStatus").ACTIVE
        );
        return f;
      };
      b.$15 = function () {
        var a = this.$10;
        this.$10 = [];
        a.forEach(this.$16, this);
      };
      b.$16 = function (a) {
        var b = this.$1[a];
        if (!b) return;
        b = this.$13(b.queryString, b.callback);
        if (b) {
          delete this.$1[a];
          return;
        }
        this.$10.push(a);
      };
      b.reset = function () {
        (this.$3 = {}),
          (this.$12 = {}),
          (this.$7 = {}),
          (this.$11 = {}),
          (this.$5 = {}),
          (this.$10 = []),
          (this.$1 = [void 0]);
      };
      b.addLocalEntries = function (a) {
        var b = this;
        a.forEach(function (a) {
          var c = a.getUniqueID(),
            d = b.$6(a);
          b.$3[c] = a;
          b.$12[c] = d;
          a = b.$9(d);
          a.tokens.forEach(function (a) {
            Object.prototype.hasOwnProperty.call(b.$7, a) || (b.$7[a] = {}),
              (b.$7[a][c] = !0);
          });
        });
        this.$15();
      };
      b.addQueryEntries = function (a, b, e) {
        var f = this;
        e === d("SearchSourceQueryStatus").COMPLETE &&
          this.setQueryStringAsExhausted(b);
        e = this.$14(b);
        var g = this.$9(b).flatValue;
        this.$11[g] = c("createObjectFrom")(e, !0);
        a.forEach(function (a) {
          var b = a.getUniqueID();
          f.$3[b] = a;
          f.$12[b] = f.$6(a);
          f.$11[g][b] = !0;
        });
        this.$15();
      };
      b.unsubscribe = function (a) {
        delete this.$1[a];
      };
      b.removeEntry = function (a) {
        delete this.$3[a];
      };
      b.getAllEntriesMap = function () {
        return this.$3;
      };
      b.setQueryStringAsExhausted = function (a) {
        this.$5[a] = !0;
      };
      b.unsetQueryStringAsExhausted = function (a) {
        delete this.$5[a];
      };
      b.$14 = function (a) {
        var b = this,
          c = this.$17(a, this.$18(a));
        a = this.$17(a, this.$19(a));
        c = c.concat(a);
        var d = {},
          e = [];
        c.forEach(function (a) {
          d[a] == null &&
            b.$3[a] != null &&
            b.$4[a] == null &&
            (e.push(a), (d[a] = !0));
        });
        return e;
      };
      b.$17 = function (a, b) {
        var c = this.$20(a, b),
          d = this.$3;
        function e(a, b) {
          if (c[a] !== c[b]) return c[a] ? -1 : 1;
          a = d[a];
          b = d[b];
          if (a.getOrder() !== b.getOrder()) return a.getOrder() - b.getOrder();
          var e = a.getTitle().length,
            f = b.getTitle().length;
          return e !== f ? e - f : a.getUniqueID() - b.getUniqueID();
        }
        return b.sort(e).slice();
      };
      b.$20 = function (a, b) {
        var c = this,
          d = {};
        b.forEach(function (b) {
          d[b] = c.$8(a, c.$12[b]);
        });
        return d;
      };
      b.$18 = function (a) {
        var b = this,
          d = this.$9(a, this.$2),
          e = this.$2 ? c("nullthrows")(d.sortedTokens) : d.tokens,
          f = e.length,
          g = d.isPrefixQuery ? f - 1 : null,
          h = {},
          i = {},
          j = {};
        d = !1;
        var k = {},
          l = 0;
        e.forEach(function (a, c) {
          if (Object.prototype.hasOwnProperty.call(k, a)) return;
          l++;
          k[a] = !0;
          for (var e in b.$7) {
            var f = e === a && !Object.prototype.hasOwnProperty.call(h, e),
              m = !1;
            f || (m = (b.$2 || g === c) && e.indexOf(a) === 0);
            if (!f && !m) {
              Object.prototype.hasOwnProperty.call(h, e) || (d = !0);
              continue;
            }
            e === a
              ? (Object.prototype.hasOwnProperty.call(i, e) && (d = !0),
                (h[e] = !0))
              : ((Object.prototype.hasOwnProperty.call(h, e) ||
                  Object.prototype.hasOwnProperty.call(i, e)) &&
                  (d = !0),
                (i[e] = !0));
            for (f in b.$7[e])
              (c === 0 ||
                (Object.prototype.hasOwnProperty.call(j, f) &&
                  j[f] == l - 1)) &&
                (j[f] = l);
          }
        });
        e = Object.keys(j).filter(function (a) {
          return j[a] == l;
        });
        (d || l < f) && (e = this.$21(a, e));
        return e;
      };
      b.$19 = function (a) {
        var b = this.$9(a).flatValue,
          c = this.$22(b);
        return Object.prototype.hasOwnProperty.call(this.$11, b)
          ? c
          : this.$21(a, c);
      };
      b.$22 = function (a) {
        var b = 0,
          c = null,
          d = this.$11;
        Object.keys(d).forEach(function (d) {
          ((a.indexOf(d) === 0 && d.length > b) || d === a) &&
            ((b = d.length), (c = d));
        });
        return c != null && Object.prototype.hasOwnProperty.call(d, c)
          ? Object.keys(d[c])
          : [];
      };
      b.$21 = function (a, b) {
        var c = this;
        return b.filter(function (b) {
          return c.$8(a, c.$12[b]);
        });
      };
      return a;
    })();
    function i(a) {
      return [a.getTitle(), a.getKeywordString()].join(" ");
    }
    g["default"] = a;
  },
  98
);
__d(
  "TokenizeUtil",
  ["nullthrows"],
  function (a, b, c, d, e, f, g) {
    var h = /[ ]+/g,
      i = /[^ ]+/g;
    f = new RegExp("[^ " + l() + "]+|" + a(), "g");
    var j = new RegExp(a(), "g"),
      k = 1e3;
    function l() {
      return ".,+*?$|#{}()'\\^\\-\\[\\]\\\\\\/!@%\"~=<>_:;\u30fb\u3001\u3002\u3008-\u3011\u3014-\u301f\uff1a-\uff1f\uff01-\uff0f\uff3b-\uff40\uff5b-\uff65\u2e2e\u061f\u066a-\u066c\u061b\u060c\u060d\ufd3e\ufd3f\u1801\u0964\u104a\u104b\u2010-\u2027\u2030-\u205e\xa1-\xb1\xb4-\xb8\xba\xbb\xbf";
    }
    function a() {
      return "[" + l() + "]";
    }
    var m = {},
      n = {
        a: "\u0430 \xe0 \xe1 \xe2 \xe3 \xe4 \xe5 \u0101",
        b: "\u0431",
        c: "\u0446 \xe7 \u010d",
        d: "\u0434 \xf0 \u010f \u0111",
        e: "\u044d \u0435 \xe8 \xe9 \xea \xeb \u011b \u0113",
        f: "\u0444",
        g: "\u0433 \u011f \u0123",
        h: "\u0445 \u0127",
        i: "\u0438 \xec \xed \xee \xef \u0131 \u012b",
        j: "\u0439",
        k: "\u043a \u0138 \u0137",
        l: "\u043b \u013e \u013a \u0140 \u0142 \u013c",
        m: "\u043c",
        n: "\u043d \xf1 \u0148 \u0149 \u014b \u0146",
        o: "\u043e \xf8 \xf6 \xf5 \xf4 \xf3 \xf2",
        p: "\u043f",
        r: "\u0440 \u0159 \u0155",
        s: "\u0441 \u015f \u0161 \u017f",
        t: "\u0442 \u0165 \u0167 \xfe",
        u: "\u0443 \u044e \xfc \xfb \xfa \xf9 \u016f \u016b",
        v: "\u0432",
        y: "\u044b \xff \xfd",
        z: "\u0437 \u017e",
        ae: "\xe6",
        oe: "\u0153",
        ts: "\u0446",
        ch: "\u0447",
        ij: "\u0133",
        sh: "\u0448",
        ss: "\xdf",
        ya: "\u044f",
      };
    for (var o in n) {
      var p = n[o].split(" ");
      for (var q = 0; q < p.length; q++) m[p[q]] = o;
    }
    function b(a) {
      return a.replace(j, " ");
    }
    function r(a) {
      a = a.toLowerCase();
      var b = "",
        c;
      for (var d = a.length; d--; ) (c = a.charAt(d)), (b = (m[c] || c) + b);
      return b.replace(h, " ");
    }
    function s(a, b) {
      b === void 0 && (b = i);
      var c = [],
        d = b.exec(a);
      while (d) {
        var e = d[0];
        c.push(e);
        d = b.exec(a);
      }
      return c;
    }
    function d(a, b) {
      b === void 0 && (b = i);
      var c = {},
        d = 0;
      return function (e, f) {
        if (!Object.prototype.hasOwnProperty.call(c, e)) {
          d >= k && ((c = {}), (d = 0));
          var g = r(e),
            h = a(g);
          c[e] = {
            value: e,
            flatValue: g,
            tokens: s(h, b),
            isPrefixQuery: !!h && h[h.length - 1] != " ",
          };
          d++;
        }
        f != null &&
          f !== !1 &&
          c[e].sortedTokens === void 0 &&
          ((c[e].sortedTokens = c[e].tokens.slice()),
          c[e].sortedTokens.sort(function (a, b) {
            return b.length - a.length;
          }));
        return c[e];
      };
    }
    var t = d(b),
      u = d(function (a) {
        return a;
      }, f);
    function e(a, b, d) {
      var e = a == "query" || a == "query_punc",
        f = a == "aligned",
        g = a == "query_punc" ? u : t;
      b = g(b, a == "prefix");
      var h = a == "prefix" ? c("nullthrows")(b.sortedTokens) : b.tokens,
        i = g(d).tokens,
        j = {},
        k = b.isPrefixQuery && (e || f) ? h.length - 1 : null;
      g = function (b, c) {
        for (var d = 0; d < i.length; ++d) {
          var g = i[d];
          if (
            !j[d] &&
            (g == b ||
              ((((e || f) && c === k) || a == "prefix") && g.indexOf(b) === 0))
          )
            return (j[d] = !0);
          if (f && !j[d]) return !1;
        }
        return !1;
      };
      return Boolean(h.length && h.every(g));
    }
    p = {
      flatten: r,
      parse: t,
      parseIncludingPunctuations: u,
      getPunctuation: a,
      makeParse: d,
      isExactMatch: e.bind(null, "exact"),
      isQueryMatch: e.bind(null, "query"),
      isQueryMatchIncludingPunctuations: e.bind(null, "query_punc"),
      isAlignedMatch: e.bind(null, "aligned"),
      isPrefixMatch: e.bind(null, "prefix"),
      tokenize: s,
    };
    q = p;
    g["default"] = q;
  },
  98
);
__d(
  "StaticSearchSource",
  ["AbstractSearchSource", "SearchSourceCallbackManager", "TokenizeUtil"],
  function (a, b, c, d, e, f, g) {
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, d, e, f) {
        var g;
        e === void 0 && (e = !0);
        f === void 0 && (f = !0);
        g = a.call(this) || this;
        g.$StaticSearchSource2 = b;
        g.$StaticSearchSource3 = e;
        g.$StaticSearchSource4 = f;
        g.$StaticSearchSource1 = new (c("SearchSourceCallbackManager"))({
          parseFn: c("TokenizeUtil").parse,
          matchFn: c("TokenizeUtil").isQueryMatch,
          indexFn: d,
        });
        g.$StaticSearchSource1.addLocalEntries(g.$StaticSearchSource2);
        return g;
      }
      var d = b.prototype;
      d.searchImpl = function (a, b, c) {
        !a
          ? b(this.$StaticSearchSource4 ? this.$StaticSearchSource2 : [], a)
          : (this.$StaticSearchSource3 &&
              this.$StaticSearchSource1.setQueryStringAsExhausted(a),
            this.$StaticSearchSource1.search(a, b));
      };
      d.getSearchableEntries = function () {
        return this.$StaticSearchSource2;
      };
      return b;
    })(c("AbstractSearchSource"));
    g["default"] = a;
  },
  98
);
__d(
  "BadgeHelper",
  ["cx", "fbt", "DOM", "joinClasses"],
  function (a, b, c, d, e, f, g, h) {
    var i = {
        xsmall: "_5dzz",
        small: "_5dz-",
        medium: "_5dz_",
        large: "_5d-0",
        xlarge: "_5d-1",
      },
      j = {
        bot: "_64nf",
        verified: "_56_f",
        trending: "_1gop",
        topcommenter: "_59t2",
        page_gray_check: "_5n3t",
        page_gray_check_solid: "_6w81",
        work: "_5d62",
        game_blue: "_59c6",
        work_non_coworker: "_2ad7",
        work_official_badge: "_8b0y",
        work_official_badge_gray: "_8b-m",
        interest_community: "_3qcr",
        subscription: "_4fvy",
        inactive_user: "_7xv0",
        multi_company_group: "_9o_f",
      };
    c = h._("Groupe officiel");
    var k = {
      bot: h._("Bot"),
      work_non_coworker: h._("Ne fait pas partie de votre entreprise"),
      work_official_badge: c,
      work_official_badge_gray: c,
    };
    function l(a, c) {
      return b("joinClasses")(i[a], j[c], "_5dzy");
    }
    function m(a) {
      return k[a];
    }
    function a(a, c) {
      a = l(a, c);
      if (a) {
        c = m(c);
        return b("DOM").create(
          "span",
          { className: a },
          c
            ? b("DOM").create("span", { className: "accessible_elem" }, c)
            : null
        );
      }
    }
    e.exports = {
      getClasses: l,
      getAlt: m,
      renderBadge: a,
      sizes: Object.keys(i),
      types: Object.keys(j),
    };
  },
  null
);
__d(
  "Badge.react",
  ["BadgeHelper", "react"],
  function (a, b, c, d, e, f, g) {
    var h = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var c = b.prototype;
      c.render = function () {
        var a = d("BadgeHelper").getAlt(this.props.type);
        a = a
          ? h.jsx("span", { className: "accessible_elem", children: a })
          : null;
        return h.jsx("span", {
          className: d("BadgeHelper").getClasses(
            this.props.size,
            this.props.type
          ),
          children: a,
        });
      };
      return b;
    })(h.Component);
    a.defaultProps = { size: "xsmall", type: "verified" };
    g["default"] = a;
  },
  98
);
__d(
  "getScrollPosition",
  ["getDocumentScrollElement", "getUnboundedScrollPosition"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b = c("getDocumentScrollElement")(a.ownerDocument || a.document);
      a.Window && a instanceof a.Window && (a = b);
      var d = c("getUnboundedScrollPosition")(a);
      b = a === b ? a.ownerDocument.documentElement : a;
      var e = a.scrollWidth - b.clientWidth;
      a = a.scrollHeight - b.clientHeight;
      d.x = Math.max(0, Math.min(d.x, e));
      d.y = Math.max(0, Math.min(d.y, a));
      return d;
    }
    g["default"] = a;
  },
  98
);
__d(
  "serializeFormQueryMap",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function g(a) {
      return [].concat(
        Array.from(a.querySelectorAll("input")),
        Array.from(a.querySelectorAll("select")),
        Array.from(a.querySelectorAll("textarea")),
        Array.from(a.querySelectorAll("button"))
      );
    }
    function h(a, b) {
      g(a).forEach(function (a) {
        if (!a.name || a.disabled) return;
        var c = a.type;
        if (
          c === "submit" ||
          c === "reset" ||
          c === "button" ||
          c === "image" ||
          c === "file"
        )
          return;
        if ((c === "radio" || c === "checkbox") && !a.checked) return;
        if (a.nodeName === "SELECT") {
          for (var d = 0, e = a.options.length; d < e; d++) {
            var f = a.options[d];
            f.selected && b("select", a.name, f.value);
          }
          return;
        }
        b(c, a.name, a.value || "");
      });
    }
    function a(a) {
      var b = {};
      h(a, function (a, c, d) {
        a = b[c];
        Object.prototype.hasOwnProperty.call(b, c)
          ? Array.isArray(a)
            ? a.push(d)
            : (b[c] = [a, d])
          : (b[c] = d);
      });
      return b;
    }
    e.exports = a;
  },
  null
);
__d(
  "flatMapArray",
  [],
  function (a, b, c, d, e, f) {
    var g = Array.prototype.push;
    function a(a, b) {
      var c = [];
      for (var d = 0; d < a.length; d++) {
        var e = b.call(a, a[d], d);
        if (Array.isArray(e)) g.apply(c, e);
        else if (e != null)
          throw new TypeError(
            'flatMapArray: Callback must return an array or null, received "' +
              e.toString() +
              '" instead'
          );
      }
      return c;
    }
    f["default"] = a;
  },
  66
);
__d(
  "FluxLoadObjectStorePrefix",
  [],
  function (a, b, c, d, e, f) {
    a = "FluxLoadObjectStore.START_LOAD.";
    b = a;
    f["default"] = b;
  },
  66
);
__d(
  "FluxLoadObjectStore",
  [
    "invariant",
    "FluxLoadObjectStorePrefix",
    "FluxMapStore",
    "LoadObject",
    "abstractMethod",
    "clearImmediate",
    "immutable",
    "setImmediate",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = 0,
      j = new Set();
    function k(a) {
      var b = a;
      while (j.has(b)) b = "" + a + i++;
      j.add(b);
      return b;
    }
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, d) {
        var e;
        e = a.call(this, b) || this;
        e.$FluxLoadObjectStore5 = new Map();
        e.$FluxLoadObjectStore7 = function () {
          var a = e.$FluxLoadObjectStore2;
          e.$FluxLoadObjectStore2 = c("immutable").OrderedSet();
          c("clearImmediate")(e.$FluxLoadObjectStore3);
          delete e.$FluxLoadObjectStore3;
          e.$FluxLoadObjectStore8(a);
        };
        e.$FluxLoadObjectStore1 = e.getActionTypeStartLoad(d);
        e.$FluxLoadObjectStore2 = c("immutable").OrderedSet();
        e.__load &&
          !e.__loadAll &&
          (e.__loadAll = function (a) {
            for (
              var a = a,
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
              e.__load(d);
            }
          });
        e.__loadAll &&
          !e.__load &&
          (e.__load = function (a) {
            e.__loadAll(c("immutable").List([a]));
          });
        (e.__load && e.__loadAll) || h(0, 4899);
        var f = e.reduce.bind(babelHelpers.assertThisInitialized(e));
        e.reduce = function (a, b) {
          b.action &&
            b.action.type === e.$FluxLoadObjectStore1 &&
            (a = e.__setLoading(a, b.action.keys));
          return f(a, b);
        };
        e.$FluxLoadObjectStore4 = e.__getChunkSize();
        e.$FluxLoadObjectStore4 != null &&
          e.$FluxLoadObjectStore4 <= 0 &&
          (e.$FluxLoadObjectStore4 = void 0);
        return e;
      }
      var d = b.prototype;
      d.getActionTypeStartLoad = function (a) {
        this.$FluxLoadObjectStore1 ||
          (this.$FluxLoadObjectStore1 =
            c("FluxLoadObjectStorePrefix") +
            k(a || this.__moduleID || this.getDispatchToken()));
        return this.$FluxLoadObjectStore1;
      };
      d.reduce = function (a, b) {
        return c("abstractMethod")("FluxLoadObjectStore", "reduce");
      };
      d.__handleMap = function (a, b) {
        var c = this;
        return a.withMutations(function (a) {
          for (
            var d = b,
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
            var h = g[0];
            g = g[1];
            var i = c.getCached(h);
            g instanceof Error
              ? a.set(h, i.setError(g).done())
              : a.set(h, i.setValue(g).done());
          }
        });
      };
      d.__handleOne = function (a, b, c) {
        var d = this.getCached(b);
        if (c instanceof Error) return a.set(b, d.setError(c).done());
        else return a.set(b, d.setValue(c).done());
      };
      d.__setLoading = function (a, b) {
        return this.$FluxLoadObjectStore6(a, b, function (a) {
          return a.loading();
        });
      };
      d.__setUpdating = function (a, b) {
        return this.$FluxLoadObjectStore6(a, b, function (a) {
          return a.updating();
        });
      };
      d.__setUpdatingAndRemoveErrors = function (a, b) {
        return this.$FluxLoadObjectStore6(a, b, function (a) {
          return a.updating().removeError();
        });
      };
      d.__setCreating = function (a, b) {
        return this.$FluxLoadObjectStore6(a, b, function (a) {
          return a.creating();
        });
      };
      d.__setDeleting = function (a, b) {
        return this.$FluxLoadObjectStore6(a, b, function (a) {
          return a.deleting();
        });
      };
      d.__setEmpty = function (a, b) {
        return this.$FluxLoadObjectStore6(a, b, function (a) {
          return a.removeValue().removeOperation().removeError();
        });
      };
      d.__setEmptyAndLoading = function (a, b) {
        return this.$FluxLoadObjectStore6(a, b, function (a) {
          return a.removeValue().removeError().loading();
        });
      };
      d.__getChunkSize = function () {
        return void 0;
      };
      d.__eagerLoadAll = function () {
        return !1;
      };
      d.__isKeyPendingLoad = function (a) {
        return this.$FluxLoadObjectStore2.has(a);
      };
      d.$FluxLoadObjectStore6 = function (a, b, c) {
        var d = this;
        return a.withMutations(function (a) {
          for (
            var e = b,
              f = Array.isArray(e),
              g = 0,
              e = f
                ? e
                : e[
                    typeof Symbol === "function"
                      ? Symbol.iterator
                      : "@@iterator"
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
            var i = d.getCached(h);
            a.set(h, c(i, h));
          }
        });
      };
      d.get = function (a) {
        var b = this.getCached(a);
        if (b.isEmpty()) {
          b = c("immutable").List.of(a);
          this.__queueLoadAll(b);
        }
        return this.getCached(a);
      };
      d.getCached = function (b) {
        return a.prototype.get.call(this, b) || c("LoadObject").empty();
      };
      d.getAll = function (a, b) {
        var c = this;
        return this.__getAllInternal(
          a,
          b,
          function (a) {
            return c.getCached(a);
          },
          "getAll"
        );
      };
      d.__getAllInternal = function (a, b, d, e) {
        var f = Array.from(a).filter(function (a) {
          return d(a).isEmpty();
        });
        if (f.length > 0) {
          f = c("immutable").List(f);
          this.__queueLoadAll(f);
        }
        return this.__getAllCachedInternal(a, b, d, e);
      };
      d.getAllCached = function (a, b) {
        var c = this;
        return this.__getAllCachedInternal(
          a,
          b,
          function (a) {
            return c.getCached(a);
          },
          "getAll"
        );
      };
      d.__getAllCachedInternal = function (a, b, d, e) {
        var f = new Set(a),
          g = b || this.$FluxLoadObjectStore5.get(e) || c("immutable").Map();
        a = g.withMutations(function (a) {
          for (
            var b = g.keys(),
              c = Array.isArray(b),
              e = 0,
              b = c
                ? b
                : b[
                    typeof Symbol === "function"
                      ? Symbol.iterator
                      : "@@iterator"
                  ]();
            ;

          ) {
            var h;
            if (c) {
              if (e >= b.length) break;
              h = b[e++];
            } else {
              e = b.next();
              if (e.done) break;
              h = e.value;
            }
            h = h;
            f.has(h) || a["delete"](h);
          }
          for (
            h = f,
              e = Array.isArray(h),
              c = 0,
              h = e
                ? h
                : h[
                    typeof Symbol === "function"
                      ? Symbol.iterator
                      : "@@iterator"
                  ]();
            ;

          ) {
            if (e) {
              if (c >= h.length) break;
              b = h[c++];
            } else {
              c = h.next();
              if (c.done) break;
              b = c.value;
            }
            b = b;
            a.set(b, d(b));
          }
        });
        this.$FluxLoadObjectStore5.set(e, a);
        return a;
      };
      d.__queueLoadAll = function (a) {
        this.$FluxLoadObjectStore3 ||
          (this.$FluxLoadObjectStore3 = c("setImmediate")(
            this.$FluxLoadObjectStore7
          )),
          (this.$FluxLoadObjectStore2 = this.$FluxLoadObjectStore2.union(a)),
          this.__eagerLoadAll() &&
            this.$FluxLoadObjectStore4 != null &&
            this.$FluxLoadObjectStore2.size >= this.$FluxLoadObjectStore4 &&
            this.$FluxLoadObjectStore7();
      };
      d.$FluxLoadObjectStore8 = function (a) {
        this.__dispatchStartLoadAction(a);
        var b = this.$FluxLoadObjectStore4;
        if (b) {
          var c = [];
          for (
            var d = a,
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
            c.push(g);
            c.length >= b && (this.__loadAll(c), (c = []));
          }
          c.length > 0 && this.__loadAll(c);
        } else this.__loadAll(a);
      };
      d.__dispatchStartLoadAction = function (a) {
        this.getDispatcher().dispatch({
          action: {
            actionType: this.$FluxLoadObjectStore1,
            type: this.$FluxLoadObjectStore1,
            keys: a,
          },
        });
      };
      return b;
    })(c("FluxMapStore"));
    a.__moduleID = f.id;
    g["default"] = a;
  },
  98
);
__d(
  "MediaManagerEventFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("getFalcoLogPolicy_DO_NOT_USE")("308");
    b = d("FalcoLoggerInternal").create("media_manager_event", a);
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "QuickLogActionType",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      START: 1,
      SUCCESS: 2,
      FAIL: 3,
      CANCEL: 4,
      DRAW_COMPLETE: 5,
      ON_RESUME: 6,
      ACTIVITY_CREATED: 7,
      CONSISTENCY_MODEL_UPDATER: 8,
      SEND_MESSAGE: 9,
      SUCCESS_COLD: 10,
      SUCCESS_WARM: 11,
      UI_IDLE: 12,
      PHASE_ONE: 13,
      PHASE_TWO: 14,
      DEQUEUE: 15,
      NETWORK_COMPLETE: 16,
      MEMORY_CACHE_VISIT: 17,
      DISK_CACHE_VISIT: 18,
      CONSISTENCY_UPDATE: 19,
      RETURN_TO_CALLER: 20,
      PHOTO_UPLOAD_COMPLETE: 21,
      USER_NAVIGATION_CANCELLATION: 22,
      DB_FETCH: 23,
      SERVER_FETCH: 24,
      SUCCESS_CACHE: 25,
      SUCCESS_DB: 26,
      SUCCESS_NETWORK: 27,
      SUCCESS_LOCAL_UNSPECIFIED: 28,
      CACHE_UPDATED: 29,
      DB_UPDATED: 30,
      DATA_RECEIVED: 31,
      DRAW_VIEW: 32,
      DATA_EMPTY: 33,
      CACHE_FETCH: 34,
      PREPARE_BEGIN: 35,
      PREPARE_END: 36,
      ASYNC_BEGIN: 37,
      ASYNC_END: 38,
      REMOVE_BEGIN: 39,
      REMOVE_END: 40,
      BROADCAST_DONE: 41,
      ON_RESUME_END: 42,
      ON_ATTACH_END: 43,
      ON_FRAGMENT_CREATE_END: 44,
      ON_CREATE_VIEW_END: 45,
      ON_ACTIVITY_CREATED_END: 46,
      ON_START_END: 47,
      QUEUED: 48,
      IN_PROGRESS: 49,
      INIT: 50,
      UNKNOWN: 51,
      RETRY_AFTER_FAILURE: 52,
      RETRY_AFTER_RECONNECT: 53,
      QUEUEING_BEGIN: 54,
      QUEUEING_SUCCESS: 55,
      QUEUEING_FAIL: 56,
      MESSAGE_UPDATE_START: 57,
      MESSAGE_UPDATE_END: 58,
      PHOTO_CAPTURED: 59,
      MEDIA_PREVIEW_VISIBLE: 60,
      COUNTER: 61,
      INTERACTION_LOAD_TIMELINE_HEADER: 62,
      INTERACTION_LOAD_EVENT_PERMALINK: 63,
      INTERACTION_LOAD_GROUPS_FEED: 64,
      INTERACTION_LOAD_PAGE_HEADER: 65,
      INTERACTION_LOAD_PAGE_HEADER_ADMIN: 66,
      INTERACTION_LOAD_PERMALINK: 67,
      INTERACTION_OPEN_COMPOSER: 68,
      INTERACTION_OPEN_MEDIA_PICKER: 69,
      INTERACTION_OPEN_PHOTO_GALLERY: 70,
      INTERACTION_OPEN_CHECK_IN: 71,
      INTERACTION_LOAD_WEB_VIEW: 72,
      INTENT_MAPPED: 73,
      ACTIVITY_LAUNCHED: 74,
      ACTIVITY_PAUSED: 75,
      ACTIVITY_STARTED: 76,
      ACTIVITY_RESUMED: 77,
      FRAGMENT_CREATED: 78,
      FRAGMENT_RESUMED: 79,
      ACTIVITY_ON_CREATE: 80,
      INTENT_MAPPING_BEGIN: 81,
      FRAGMENT_ON_CREATE: 82,
      FRAGMENT_NEW_INSTANCE: 83,
      MARKER_SWAPPED: 84,
      FRAGMENT_INSTANCE_CREATED: 85,
      PREV_ACTIVITY_PAUSED: 86,
      ERROR: 87,
      METHOD_INVOKE: 88,
      FINALLY: 89,
      PHOTO_DOWNLOAD_COMPLETE: 90,
      MINIPREVIEW_COMPLETE: 91,
      SEARCH_TYPEAHEAD: 92,
      ANIMATION_END: 93,
      UDP_REQUEST_SEND: 94,
      MAIN_COMPLETE: 95,
      INTERRUPTED: 96,
      NETWORK_FAILED: 97,
      NETWORK_RESPONSE: 98,
      EDGE_PROCESSING_BEGIN: 99,
      NEWSFEED_PROCESS_RESPONSE: 100,
      ON_VIEW_CREATED_END: 101,
      DATA_LOAD_START: 102,
      LEGACY_MARKER: 103,
      ACTION_BAR_COMPLETE: 104,
      ABORTED: 105,
      QUERY_READY: 106,
      RTMP_PACKET_RECEIVED: 107,
      REQUESTED_PLAYING: 108,
      RTMP_CONNECTION_REQUESTED: 109,
      RTMP_CONNECTION_RELEASE: 110,
      NEW_START_FOUND: 111,
      MISSED_EVENT: 112,
      TIMEOUT: 113,
      CONTROLLER_INITIATED: 114,
      RTMP_STREAM_PREPARED: 115,
      VIDEO_PLAYING: 116,
      RTMP_CONNECTION_CONNECTED: 117,
      RTMP_CONNECTION_FAILED: 118,
      RTMP_CONNECTION_INTERCEPTED: 119,
      VIDEO_SET_RENDERER_CONTEXT: 120,
      HEADER_DATA_LOADED: 121,
      CARD_DATA_LOADED: 122,
      VIEW_WILL_APPEAR_BEGIN: 123,
      VIEW_DID_LOAD_BEGIN: 124,
      COMPONENTS_DATA_SOURCE_WILL_BEGIN_UPDATES: 125,
      COMPONENTS_DATA_SOURCE_DID_END_UPDATES: 126,
      LOAD_VIEW_BEGIN: 127,
      RTMP_FIRST_KEY_FRAME_RECEIVED: 128,
      MESSENGER_QUEUE_CREATION: 129,
      APP_DID_FINISH_LAUNCHING: 130,
      APP_DID_BECOME_ACTIVE: 131,
      APP_WILL_ENTER_FOREGROUND: 132,
      APP_DID_ENTER_BACKGROUND: 133,
      APP_MAIN: 134,
      MQTT_CONNECTING: 135,
      MQTT_CONNECTED: 136,
      MQTT_DISCONNECTED: 137,
      MESSENGER_DELTA_REQUEST: 138,
      APP_FIRST_VIEW_CONTROLLER: 139,
      MESSENGER_THREAD_LIST_LOADED: 140,
      MESSENGER_THREAD_LIST_DISPLAYED: 141,
      PREV_ACTIVITY_PAUSE: 142,
      ACTIVITY_RESUME: 143,
      ACTIVITY_START: 144,
      BEGIN_START_ACTIVITY: 145,
      END_START_ACTIVITY: 146,
      FILE_SYSTEM_FAIL: 147,
      FORMAT_ERROR: 148,
      PRIVACY_VIOLATION: 149,
      NETWORK_RESPONSE_INITIAL_SCAN: 150,
      POPULATE_CONSISTENCY_MEMORY_CACHE: 151,
      APPLY_OPTIMISTICS: 152,
      APPLY_FINISHED_LIST: 153,
      APPLY_FINISHED_LIST_AGAIN: 154,
      FUTURE_LISTENERS_COMPLETE: 155,
      SERVICE_ON_START_COMMAND: 156,
      WAIT_FOR_BLOCKERS: 157,
      NOTIFY_SUBSCRIBERS: 158,
      FAIL_FILE_TOO_LARGE: 159,
      OFFLINE: 160,
      ASNYC_FAILED: 161,
      ASYNC_FAIL: 162,
      ON_ATTACH_FRAGMENT: 163,
      VIEW_DID_APPEAR_BEGIN: 164,
      DISPLAYED: 165,
      DISPLAYED_ON_SCREEN: 166,
      ASYNC_ACTION_SUCCESS: 167,
      ASYNC_ACTION_FAIL: 168,
      CONNECTIVITY_CHANGED: 169,
      VIDEO_DISPLAYED: 170,
      VIDEO_REQUESTED_PLAYING: 171,
      LOADED_AUDIO_SESSION: 172,
      LOADED_CAMERA_SESSION: 173,
      SUCCESS_OPTIMISTIC: 174,
      OUT_OF_ORDER: 175,
      NOT_READY: 176,
      JSON_PARSE: 177,
      FILE_NOT_FOUND: 178,
      METABOX_COMPLETE: 179,
      CALL_TO_ACTION_COMPLETE: 180,
      HEADER_DRAW_COMPLETE: 181,
      COVER_PHOTO_COMPLETE: 182,
      COMPONENT_WILL_CREATE: 183,
      COMPONENT_DID_CREATE: 184,
      COMPONENT_WILL_LAYOUT: 185,
      COMPONENT_DID_LAYOUT: 186,
      COMPONENT_WILL_MOUNT: 187,
      COMPONENT_DID_MOUNT: 188,
      PRECALCULATE_EDGES: 189,
      UI_THREAD_DEQUEUE: 190,
      CALLBACKS_COMPLETE: 191,
      CALLBACKS_DISPATCHED: 192,
      NETWORK_PARSE_COMPLETE: 193,
      START_LOADING_JS_BUNDLE: 194,
      FINISH_LOADING_JS_BUNDLE: 195,
      START_EXECUTING_JS_BUNDLE: 196,
      FINISH_EXECUTING_JS_BUNDLE: 197,
      START_CALLING_JS_FUNCTION: 198,
      FINISH_CALLING_JS_FUNCTION: 199,
      CREATED_MODEL_FILE: 200,
      DB_SUPPLIER_GET: 201,
      BEGIN_TRANSACTION: 202,
      FILE_FLUSHED: 203,
      OPTIMISTIC_UPDATES_APPLIED: 204,
      FRAGMENT_VISIBLE: 205,
      STALE: 206,
      SUCCESS_GET_MODEL: 207,
      FAIL_GET_MODEL: 208,
      ALREADY_SEEN: 209,
      UNKNOWN_SEEN_STATE: 210,
      CREATED_INTENT: 211,
      INVALID_INTENT: 212,
      SHOW_NOTIFICATION: 213,
      SUCCESS_FETCH_IMAGE: 214,
      FAIL_FETCH_IMAGE: 215,
      DROPPED: 216,
      QUERY_CHUNKS: 217,
      QUERY_ROWS: 218,
      COMPUTE_CHUNKS: 219,
      SCROLL_COMPLETE: 220,
      USE_INSTANCE_STATE: 221,
      USE_ARGUMENTS: 222,
      OFFSCREEN: 223,
      LOG_READ: 224,
      LOG_COMPACTED: 225,
      LOG_WRITER_OPENED: 226,
      TAB_SWITCH: 227,
      EXIT_VIEW_CONTROLLER: 228,
      TAGS_PREPARED: 229,
      VIEW_DID_APPEAR: 230,
      MEDIA_TOO_SMALL: 231,
      ITEM_SELECTED: 232,
      REPOSITIONED: 233,
      PHOTO_UPLOAD_START: 234,
      MEDIA_EDIT: 235,
      MEDIA_EDIT_COMPLETE: 236,
      VIDEO_PAUSE: 237,
      VIDEO_COMPLETE: 238,
      VIDEO_PLAYING_TIMEOUT: 239,
      VIDEO_PLAYING_QPL_TIMEOUT: 240,
      SESSION_OPEN: 241,
      SCHEMA_HASH_MISMATCH: 242,
      OVERRIDES_EXIST: 243,
      DI_DONE: 244,
      FLATBUFFER_SCHEMA_ABSENT: 245,
      SUCCESS_NONEXISTENCE: 246,
      VIDEO_CANCELLED: 247,
      MESSENGER_QUEUE_CREATION_FAILURE: 248,
      MESSENGER_DELTA_REQUEST_FAILURE: 249,
      RETURN_EXCEPTION_TO_CALLER: 250,
      SURFACE_TEXTURE_AVAILABLE: 251,
      NEWS_FEED_FRAGMENT: 252,
      HEADER_CACHE_FETCH_STARTED: 253,
      CHANGESET_ENQUEUED: 258,
      RTC_BROADCAST_INITIALIZED: 259,
      RTC_STREAMING_INITIALIZED: 260,
      RTC_STREAMING_STARTED: 261,
      CAMERA_VIDEO_OUTPUT_SWITCHED: 262,
      RTMP_STREAM_STOPPED: 263,
      LOCATION_FETCH_BEGIN: 264,
      LOCATION_FETCH_SUCCESS: 265,
      LOCATION_FETCH_FAILED: 266,
      FIRST_UPDATE_SUCCESS: 267,
      FIRST_UPDATE_FAILURE: 268,
      RTMP_STREAMING_HANDLED_FRAME: 269,
      RTMP_DVR_HANDLED_FRAME: 274,
      LIVE_RTMP_STREAMING_HANDLED_FRAME: 275,
      LIVE_RTMP_DVR_HANDLED_FRAME: 276,
      PASS_QE_CHECK: 277,
      PASS_AD_CHECK: 278,
      PASS_SAMPLE_RATE_CHECK: 279,
      HAS_VALID_HTML: 280,
      FOUND_IMAGES: 281,
      TIGON_REQUEST_BEGIN: 282,
      TIGON_REQUEST_END: 283,
      TIGON_RESPONSE_BEGIN: 284,
      TIGON_RESPONSE_END: 285,
      TIGON_PARSE_BEGIN: 286,
      TIGON_PARSE_END: 287,
      GRAPHQL_CACHE_FETCH_START: 288,
      GRAPHQL_CACHE_FETCH_END: 289,
      VIDEO_START_STALL: 290,
      VIDEO_END_STALL: 291,
      MERGE_LOCAL_FIELDS: 292,
      LOAD_QUERY_STRING: 293,
      CONFIG_TABLE_SCHEMA_HASH_MISMATCH: 294,
      CONFIG_TABLE_SCHEMA_ABSENT: 295,
      CONFIG_TABLE_MAGIC_MISMATCH: 296,
      OBJSEL_FETCH: 297,
      GO_TO_AD_ACTIVITY: 298,
      SAVE_AD: 299,
      UNSAVE_AD: 300,
      SAVE_MODE: 301,
      GO_AD_ACTIVITY_MODE: 302,
      ACCESSIBILITY_ACTIVATE: 303,
      ACCESSIBILITY_CUSTOM: 304,
      ACCESSIBILITY_MAGIC_TAP: 305,
      FINAL_IMAGE_SET: 306,
      INTERMEDIATE_IMAGE_SET: 307,
      INTERMEDIATE_IMAGE_FAIL: 308,
      INTERMEDIATE_IMAGE_GOOD_ENOUGH_SET: 309,
      APP_BACKGROUND: 310,
      APP_FOREGROUND: 311,
      RECEIVED_HARDWARE_FRAME: 312,
      CAMERA_COMPONENT_MOUNTED: 313,
      MQTT_CONNECTION_ATTEMPTED: 314,
      DELTA_APPLICATION_COMPLETED: 325,
      DELTAS_RECEIVED_AFTER_CONNECT: 326,
      MESSENGER_DAY_UNIT_DISPLAYED: 327,
      DATA_LOAD_END: 328,
      VIEW_DID_BECOME_VISIBLE: 329,
      DELTA_APPLICATION_INTERRUPTED: 330,
      DELTA_BATCH_APPLICATION_COMPLETED: 331,
      MESSAGE_LIST_DID_UPDATE: 332,
      MESSAGE_LIST_WILL_UPDATE: 333,
      SUCCESS_ZERO_WAIT_TIME: 334,
      USER_SCROLLED: 335,
      SPINNER_APPEARED: 336,
      MODEL_ENQUEUED: 337,
      VIEW_MODEL_APPLIED: 338,
      PRESENTED: 339,
      VIEW_DID_BECOME_VISIBLE_END: 340,
      MESSENGER_DELTA_REQUEST_INIT: 341,
      FEED_REQUEST_STARTED: 342,
      FEED_REQUEST_FAILED: 343,
      FEED_REQUEST_SUCCEEDED: 344,
      FEED_LOAD_FROM_DISK_FINISHED: 345,
      STORIES_REQUEST_STARTED: 346,
      STORIES_REQUEST_FAILED: 392,
      STORIES_REQUEST_SUCCEEDED: 393,
      STORIES_LOAD_FROM_DISK_FINISHED: 394,
      USER_INFO_LOADED: 395,
      APP_CREATED: 396,
      INIT_TO_USABLE: 397,
      INIT_TO_NETWORK_CONTENT: 398,
      TOTAL: 399,
      HEAD: 400,
      TAIL: 401,
      INITIAL: 402,
      OTHER: 403,
      ANR_START_DATA_CAPTURE: 404,
      ANR_ENQUEUE: 405,
      NOTIF_NOT_ALERTED: 406,
      NOTIF_DUPLICATE: 407,
      NOTIF_MUTED: 408,
      NOTIF_BUZZED: 409,
      FEED_RESPONSE_PROCESSED: 410,
      STORIES_RESPONSE_PROCESSED: 411,
      APP_DID_FINISH_LAUNCHING_ENDED: 412,
      ASYNC_BEGIN_DB: 413,
      DELTA_APPLICATION_STARTED: 414,
      ASYNC_SUCCESS_DB: 415,
      ASYNC_FAIL_DB: 416,
      ASYNC_BEGIN_SERVER: 417,
      ASYNC_SUCCESS_SERVER: 418,
      ASYNC_FAIL_SERVER: 419,
      LEAVE: 420,
      ASYNC_SUCCESS_DB_NO_DATA: 429,
      ASYNC_FAIL_SERVER_NO_DATA: 430,
      SUCCESS_MEMORY: 431,
      SUCCESS_SERVER: 432,
      FAIL_NO_DATA: 433,
      ACTIVITY_NEW_INTENT: 434,
      GRID_MEDIA_LOADED: 435,
      STORY_TRAY_MEDIA_LOADED: 436,
      INTERACTION_OPEN_QRCODE_SCANNER: 437,
      MEDIA_LOAD_CACHE: 438,
      MEDIA_LOAD_NETWORK: 439,
      COMMENTS_LOAD_START: 440,
      COMMENTS_LOAD_COMPLETE: 441,
      MEDIA_LOAD_START: 442,
      SCROLL_START: 443,
      QRCODE_SCANNER_SCAN_SUCCESS: 444,
      QRCODE_SCANNER_SCAN_FAILURE: 445,
      APP_CREATED_MAIN_PROCESS: 446,
      FINISH_REGISTERING_JS_NATIVE_MODULES: 447,
      NON_ANR: 448,
      FINISH_INITIALIZING_JS_BRIDGE: 449,
      FINISH_INJECTING_JS_HOOKS: 450,
      FINISH_RUNNING_JS_INITIALIZER: 451,
      UI_RESPONSIVE: 452,
      PHASE_ONE_COMPLETE: 453,
      PHASE_TWO_COMPLETE: 454,
      LS_HEADER_START: 455,
      LS_HEADER_LOAD: 456,
      LS_BODY_START: 457,
      LS_BODY_LOAD: 458,
      APP_ONCREATE: 459,
      START_FETCH_IMAGE: 460,
      LOGGED_OUT: 461,
      LS_HEADER_LAYOUT_SUCCESS: 462,
      STARTED_CAPTURE_SESSION: 463,
      CAMERA_VIEW_READY: 464,
      CAMERA_FIRST_FRAME: 465,
      PHOTO_BITMAP_READY: 466,
      END: 467,
      FRAME_RENDERED: 468,
      LS_MAP_LIST_START: 469,
      LS_MAP_LIST_LOADED: 470,
      LS_MAP_LIST_SUCCESS: 471,
      FETCH_THREAD_STARTED: 472,
      FETCH_THREAD_SUCCEEDED: 473,
      FETCH_THREAD_FAILED: 474,
      STRUCTURE_FETCH_COMPLETE: 475,
      FOLLOWED_SHOWS_FETCHED: 476,
      ABANDONED: 477,
      ENTERED: 478,
      LS_FILTER_START: 479,
      LS_FILTER_LOAD: 480,
      LS_FILTER_SUCCESS: 481,
      LS_SEARCH_RESULT_START: 482,
      LS_SEARCH_RESULT_LOAD: 483,
      NETWORK_PARSE_START: 484,
      NETWORK_REQUEST_SENT: 485,
      COMPONENT_DATA_MODEL_UPDATE_START: 486,
      COMPONENT_DATA_MODEL_UPDATE_COMPLETE: 487,
      HIGH_RES_PHOTO_FILE_READY: 488,
      NATIVE_PHOTO_BITMAP_READY: 489,
      REEL_JSON_RECEIVED: 490,
      REEL_MEDIA_RECEIVED: 491,
      STORY_VIEWER_APPEAR: 492,
      FETCH_INBOX_STARTED: 493,
      FETCH_INBOX_SUCCEEDED: 494,
      FETCH_INBOX_FAILED: 495,
      REQUEST_ADDED: 496,
      INIT_QE_START: 497,
      INIT_QE_END: 498,
      MULTIDEX_INSTALLED: 499,
      PREPARE_CAMERA_SESSION: 500,
      START_CAMERA_SESSION: 501,
      DID_START_CAMERA_SESSION: 502,
      FIRST_HARDWARE_FRAME: 503,
      START_RENDERING_FIRST_USER_FRAME: 504,
      FIRST_MEDIA_RENDERED: 505,
      FIRST_CACHED_MEDIA_RENDERED: 506,
      CAMERA_INITIALIZED: 507,
      HTTP_TRANSACTION_STARTED: 508,
      REMOTE_PROCESS: 509,
      PRE_REQUEST_SEND_CALLED: 510,
      BRIDGE_STARTUP_WILL_START: 511,
      BRIDGE_STARTUP_DID_FINISH: 512,
      COVER_PHOTO_LOW_RES: 513,
      COVER_PHOTO_HIGH_RES: 514,
      PROFILE_PIC_LOW_RES: 515,
      PROFILE_PIC_HIGH_RES: 516,
      CONTEXT_ITEMS: 517,
      MEDIA_LOADED: 518,
      STATE_UPDATE: 519,
      ON_SHOW_LOGIN: 520,
      EMPTY_REQUEST: 521,
      METERED_CONNECTION: 522,
      VIDEO_DOWNSTREAM_FORMAT_CHANGED: 523,
      DISABLED: 524,
      NO_METADATA: 525,
      INCOMPLETE_METADATA: 526,
      PHOTO_CAPTURE_READY: 527,
      CAMERA_START_READY: 528,
      DELAY_START: 529,
      DELAY_STOP: 530,
      RANK_START: 531,
      RANK_STOP: 532,
      DB_WRITE_START: 533,
      DB_WRITE_STOP: 534,
      ADD_STORY_TO_UI: 535,
      WEBVIEW_URI_REDIRECTOR_CONSTRUCTION: 536,
      UNINTERRUPTED: 537,
      VIDEO_TOGGLE_FULL_SCREEN: 538,
      CONFIGURE_START: 539,
      CONFIGURE_END: 540,
      BROWSER_OPEN: 541,
      FIRST_DATA_RECEIVED: 542,
      RVP_WILL_LOAD: 543,
      RVP_DID_LOAD: 544,
      CACHE_WRITE_START: 545,
      CACHE_WRITE_SUCCESS: 546,
      CACHE_WRITE_FAIL: 547,
      RVP_WILL_PAUSE: 548,
      RVP_DID_PAUSE: 549,
      RVP_WILL_PLAY: 550,
      RVP_DID_PLAY: 551,
      RVP_WILL_PREPARE: 552,
      RVP_DID_PREPARE: 553,
      RVP_WILL_RELOAD: 554,
      RVP_DID_RELOAD: 555,
      RVP_WILL_CREATE: 556,
      RVP_DID_CREATE: 557,
      RVP_WILL_FINISH_INFLATE: 558,
      RVP_DID_FINISH_INFLATE: 559,
      RVP_WILL_MOUNT: 560,
      RVP_DID_MOUNT: 561,
      START_COMPRESSING_MESSAGE: 562,
      MESSAGE_COMPRESSED: 563,
      START_DECOMPRESSING_MESSAGE: 564,
      MESSAGE_DECOMPRESSED: 565,
      START_SENDING_MESSAGE: 566,
      CAMERA_PREVIEW_FROZEN: 567,
      VC_INIT_START: 569,
      VC_INIT_BEGIN: 570,
      VC_INIT_END: 571,
      VC_VIEW_DID_LOAD_BEGIN: 572,
      VC_VIEW_DID_LOAD_END: 573,
      ROOT_QUERY_START: 574,
      ROOT_QUERY_SUCCESS: 575,
      ROOT_QUERY_FAIL: 576,
      CACHE_INITIALIZED: 577,
      FETCH_BEGIN: 578,
      FETCH_FINISHED: 579,
      PARSING_FINISHED: 580,
      LOAD_VIEW_END: 581,
      LOAD_URL_BEGIN: 582,
      LOAD_URL_END: 583,
      SHOULD_LOAD_URL_BEGIN: 598,
      SHOULD_LOAD_URL_END: 599,
      BLOCKING_RESOURCES_LOADED: 600,
      WEB_PAGE_LOADED: 601,
      JS_TEARDOWN: 603,
      JS_SETUP: 604,
      PREP_STATE: 605,
      PREP_FORMS: 606,
      RUN_FUNCTION: 610,
      LOAD_MODULES: 613,
      VIDEO_READY_TO_PLAY: 614,
      CANCEL_NAVIGATION: 615,
      BEGIN_HANDLE_EVENT: 626,
      END_HANDLE_EVENT: 627,
      BEGIN_PROCESS_EVENT: 628,
      END_PROCESS_EVENT: 629,
      CANCEL_BACKGROUND: 630,
      SC_TRACKER_SETUP_BEGIN: 631,
      SC_TRACKER_SETUP_END: 632,
      PROFILE_TOOLBOX_SETUP_BEGIN: 633,
      PROFILE_TOOLBOX_SETUP_END: 634,
      FEED_TOOLBOX_SETUP_BEGIN: 635,
      FEED_TOOLBOX_SETUP_END: 636,
      SCREEN_PART_RECEIVED: 637,
      RVP_DID_FAIL_AUTOPLAY: 638,
      VIEW_WILL_APPEAR_END: 639,
      VIDEO_RENDERED: 640,
      VIEW_DID_APPEAR_END: 641,
      SHARE_FLOW_LOADED: 642,
      START_DOWNLOAD_FACE_DETECTION_EFFECT: 643,
      APPLY_FACE_DETECTION_EFFECT: 644,
      INTERACTION_SWIPE_UP: 645,
      LOOM_PROVIDER_FAILURE: 646,
      ADS_SELECT_POST_VIEW: 647,
      ADS_SELECT_IMAGE_VIEW: 648,
      ADS_SELECT_BUDGET_VIEW: 649,
      ADS_SELECT_AUDIENCE_VIEW: 650,
      ADS_SELECT_CREATIVE_VIEW: 651,
      VIDEO_FETCH_REQUEST_START: 652,
      VIDEO_FETCH_REQUEST_RECEIVED: 653,
      VIDEO_FETCH_REQUEST_ENTER_NETWORK_QUEUE: 654,
      VIDEO_FETCH_REQUEST_NETWORK_REQUEST_START: 655,
      VIDEO_FETCH_REQUEST_NETWORK_RESPONSE_RECEIVED: 656,
      VIDEO_FETCH_REQUEST_NETWORK_FIRST_BYTE_ARRIVED: 657,
      VIDEO_FETCH_REQUEST_NETWORK_TRANSFER_COMPLETE: 658,
      VIDEO_FETCH_REQUEST_SATISFIED_BY_CACHE: 659,
      VIDEO_FETCH_REQUEST_COMPLETE: 660,
      VIDEO_FETCH_REQUEST_CACHE_CHECK_START: 661,
      VIDEO_FETCH_REQUEST_CACHE_CHECK_END: 662,
      VIDEO_FETCH_REQUEST_DID_ATTACH_TO_NETWORK_REQUEST: 663,
      SELECT_PHOTOS_FAILED_SCORE: 664,
      SELECT_PHOTOS_FAILED_TIMESTAMP: 665,
      INTERACTION_CLICK: 666,
      VIDEO_SCRUBBER_FIRST_THUMBNAIL_SHOWN: 667,
      VIDEO_SCRUBBER_THUMBNAIL_SHOWN: 668,
      COLD_START_BEGIN: 669,
      COLD_START_END: 670,
      COLD_START_LOAD_APP_JS: 671,
      COLD_START_QUERY_SEND: 672,
      COLD_START_APP_SHELL_COMPONENT_DID_MOUNT: 673,
      VIDEO_RECORDING_START_CALLED: 674,
      VIDEO_RECORDING_STOP_CALLED: 675,
      WIKTORK_TEST: 676,
      WIKTORK_TEST_TWO: 677,
      ON_VIDEO_RECORDING_FINISHED: 678,
      MEASURE_IMAGE: 679,
      PDP_RENDER_LOADING: 680,
      PDP_RENDER_FETCHED: 681,
      VIDEO_FETCH_REQUEST_FAILED: 682,
      LOGIN_FLOW_STARTED: 683,
      LOGIN_FLOW_COMPLETED: 684,
      VIDEO_DOWNLOAD_STARTED: 685,
      VIDEO_DOWNLOAD_READY_TO_PLAY: 686,
      VIDEO_DOWNLOAD_FAILED: 687,
      FBLITE_SCREEN_RECEIVED: 688,
      FBLITE_SERVER_START: 689,
      FBLITE_SERVER_END: 690,
      FBLITE_INCOMPLETE: 691,
      BACKGROUND_THREAD: 692,
      MAIN_THREAD: 693,
      BWE_ESTIMATE_COMPLETE: 694,
      WIKTORK_TEST_THREE: 695,
      FBLITE_UNEXPECTED: 696,
      THREAD_ASYNC_BEGIN_SERVER: 697,
      THREAD_ASYNC_SUCCESS_SERVER: 698,
      CARD_ASYNC_BEGIN_SERVER: 699,
      CARD_ASYNC_SUCCESS_SERVER: 700,
      FBLITE_INSTANT_TRANSITION_FAILED: 701,
      BB_TRACE_REQUESTED: 702,
      CANCEL_PSP: 703,
      AGGREGATED: 704,
      UNINSTRUMENTED: 705,
      CANCEL_UNLOAD: 706,
      DOWNLOAD_FAILED: 707,
      UNZIP_FAILED: 708,
      NO_ACTIVE_TRACE: 709,
      LOOM_MMAP_TRACE_NOT_RECOVERED: 710,
      PLUGIN_LOAD_END: 711,
      UNPACKER_CHECK_START: 712,
      PLUGIN_LOAD_START: 713,
      UNPACKER_CHECK_END: 714,
      UNPACKING_END: 715,
      CREATE_UI_MANAGER_MODULE_START: 716,
      CREATE_UI_MANAGER_MODULE_END: 717,
      TEST_NUBBEL: 718,
      CONDITION_NOT_MET: 719,
      FAIL_FALSE_POSITIVE: 720,
      FAIL_FALSE_NEGATIVE: 721,
      APP_CRASH: 722,
      TEST_GINDI: 723,
      TTTT: 724,
      BUG_BASH_ACTION: 725,
      BUG_BASH_TEST: 726,
      INIT_MOBILE_CONFIG: 727,
      SUCCESS_WITH_VC_DISABLED: 1008,
      DELETE_RECORD: 1115,
      NORMAL_SEARCH_LEAVE: 1171,
      UPLOAD_FILE_CANCELLED: 1428,
      SAVE_RECORD: 1492,
      SUCCESS_TEST: 1902,
      APP_EXIT: 2001,
      CREATE_ATTACHMENT: 2266,
      NEW_RECORD_FAILED: 2394,
      START_SEND_MAILBOX_CALL: 2414,
      TOGGLE_MODE: 3077,
      FILE_WRITER_ERROR: 3270,
      SKIP: 3376,
      ACQUIRED: 3377,
      PHILLIP_TEST_ACTION_BLAH: 3391,
      SAVE_RECORD_CANCELLED: 3563,
      NEW_ACCOUNT_CREATED: 3599,
      CURRENCY_CHANGE: 3600,
      SUCCESS_PYTORCH: 3653,
      INITIAL_LOAD: 3921,
      NAVIGATION: 3922,
      CREATE_ATTACHMENT_FAILED: 3955,
      INVALID: 4158,
      CANCEL_ACCOUNT_SWITCH: 4340,
      PAUSED_GROUP: 5218,
      CANNOT_SEE_CHANNEL: 5317,
      DELETED_CHANNEL: 5318,
      DISPLAY_RECORD_FAILED: 6050,
      SAVE_RECORD_FAILED: 6087,
      SET_SOURCE: 6596,
      FRX_FLOW_END: 6646,
      NORMAL_SEARCH: 7381,
      EDIT_RECORD: 7420,
      CREATE_ATTACHMENT_SUCCEEDED: 7618,
      CTWA_REQUEST_NO_WELCOME_MESSAGE: 7809,
      FAIL_VALIDATION: 7952,
      LIGHT_MODE_ENABLED: 8101,
      OPEN_ATTACHMENT_SUCCEEDED: 8213,
      CHANNEL_FULL: 8321,
      UPLOAD_FILE_SUCCEEDED: 8511,
      GENERATE_SHAREABLE_LINK: 8759,
      HORIZON_MM_SERVER_SUCCESS: 8765,
      HORIZON_MM_SERVER_FAIL: 8766,
      SAVE_RECORD_SUCCEEDED: 8902,
      NEW_RECORD_SUCCEEDED: 9099,
      DELETE_RECORD_FAILED: 9234,
      STORY_DELETION_AND_LOAD_SUCCESS: 9280,
      STORY_DELETION_WITH_LOAD_FAIL: 9281,
      UPLOAD_FILE: 9473,
      RESTART: 10086,
      INVALID_ANNOTATE_MISSING_START: 10087,
      INVALID_POINT_MISSING_START: 10088,
      AIS_CTA_CLICK: 10126,
      AIS_CLOSED: 10127,
      AIS_REQUESTED: 10128,
      AIS_IMPRESSION: 10129,
      AIS_DOWNLOAD_SUCCESS: 10130,
      AIS_INSTALL_STARTED: 10131,
      AIS_INSTALL_SUCCESS: 10132,
      AIS_AD_CTA_CLICK: 10133,
      DISPLAY: 10283,
      INVALID_END_MISSING_START: 10294,
      SET_SEARCH_KEYWORD_SUCCEEDED: 10326,
      SET_REGION_SUCCEEDED: 10609,
      NEW_RECORD: 10618,
      ICE_BREAKER_PREVIEW_FAIL: 11079,
      PHILLIP_TEST_FOUR: 11103,
      NEW_RECORD_CANCELLED: 11146,
      TELEMETRY_UNEXPECTED_EVENT: 11289,
      TOGGLE_SEARCH: 11313,
      QPL_END_TO_END: 11445,
      SET_SEARCH_KEYWORD: 11787,
      SET_POWER_SEARCH_FIELD_SUCCEEDED: 11893,
      PROMOTE_AUTH_BUAT_ELIGIBLITY_START: 11927,
      PROMOTE_AUTH_BUAT_ELIGIBLE: 11928,
      PROMOTE_AUTH_BUAT_NOT_ELIGIBLE: 11929,
      PROMOTE_AUTH_FB_ELIGIBLITY_START: 11930,
      PROMOTE_AUTH_BUAT_FETCH_SUCCESS: 11931,
      PROMOTE_AUTH_BUAT_FETCH_FAIL: 11932,
      PROMOTE_AUTH_FB_VALID_THIRD_PARTY_TOKEN_FETCHED: 11933,
      PROMOTE_AUTH_FB_LOGIN_START: 11934,
      PROMOTE_AUTH_FB_LOGIN_SUCCESS: 11935,
      PROMOTE_AUTH_FB_LOGIN_FAIL: 11936,
      PROMOTE_AUTH_SUCCESS: 11937,
      PROMOTE_AUTH_FAIL: 11938,
      SUCCESS_CACHE_NOT_MODIFIED: 11947,
      OPEN__ATTACHMENT: 12040,
      DELETE_RECORD_CONFIRMED: 12147,
      DARK_MODE_ENABLED: 12223,
      SUCCESS_CONTROL: 12434,
      DISPLAY_RECORD: 12456,
      DUMMY: 12524,
      SET_SOURCE_SUCCEEDED: 12560,
      CANCEL_MIXVM_NAVIGATION: 12993,
      PERMISSION_DIALOG_SHOWN: 13061,
      NO_EMAIL_FETCHED: 13062,
      HAVE_EXACTLY_ONE_GMAIL: 13063,
      NUMBER_OF_GMAILS: 13064,
      HAVE_ONE_GMAIL_MATCHED_CP: 13065,
      NO_GMAIL_MATCHED: 13066,
      OAUTH_DIALOG_SHOWN: 13067,
      OAUTH_DIALOG_ACCEPT: 13068,
      OAUTH_DIALOG_DENY: 13069,
      OAUTH_TOKEN_FETCHED: 13070,
      OAUTH_TOKEN_FAILURE: 13071,
      OAUTH_SUCCESS: 13072,
      OAUTH_FAIL_TIMEOUT: 13073,
      OAUTH_FAIL_OTHER: 13074,
      SUCCESS_NOTPRESENTED: 13170,
      REMOVE_ATTACHMENT_CANCELLED: 13176,
      DISPLAY_RECORD_SUCCEEDED: 13246,
      DARK_MODE: 13325,
      SET_REGION: 13504,
      HORIZON_MM_REJECTED: 13513,
      POWER_SEARCH_LEAVE: 13551,
      UPLOAD_FILE_FAILED: 13557,
      LIGHT_MODE: 13744,
      REMOVE_ATTACHMENT: 13825,
      PROCESS_PHOTO: 14030,
      OPEN_ATTACHMENT_FAILED: 14290,
      TOGGELE_SEARCH: 14341,
      LAZAR_TEST: 14397,
      POWER_SEARCH: 14472,
      REMOVE_ATTACHMENT_SUCCEEDED: 14513,
      POWER_SEARCH_ENTERED: 14634,
      PHILLIP_TEST: 14768,
      GENERATE_SHAREABLE_LINK_FAILED: 14817,
      REMOVE_ATTACHMENT_FAILED: 15262,
      SET_POWER_SEARCH_FIELD: 15268,
      GENERATE_SHAREABLE_LINK_SUCCEEDED: 15431,
      DELETE_RECORD_SUCCEEDED: 15465,
      IG_PROMOTE_DEFAULT_AD_ACCOUNT_NULL: 15469,
      IG_PROMOTE_DEFAULT_AD_ACCOUNT_NON_NULL: 15470,
      DISPLAY_RECORD_COLLAPSED: 15554,
      LAZAR_TEST_A: 15579,
      OPEN_ATTACHMENT: 15957,
      NORMAL_SEARCH_ENTERED: 15969,
      REMOVE_ATTACHMENT_CONFIRMED: 16034,
      LAZAR_TEST_B: 16208,
      DELETE_RECORD_CANCELLED: 16296,
      TEST_ACTION_FOR_CALLER_CONTEXT_TWO: 29998,
      GINANDI_TEST: 32339,
    });
    f["default"] = a;
  },
  66
);
__d(
  "XCometPageEventsTabControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/{vanity}/events/",
      Object.freeze({ ref: "" }),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "ClientServiceWorkerMessage",
  [],
  function (a, b, c, d, e, f) {
    a = (function () {
      function a(a, b, c) {
        (this.$1 = a), (this.$2 = b), (this.$3 = c);
      }
      var b = a.prototype;
      b.sendViaController = function () {
        if (!navigator.serviceWorker || !navigator.serviceWorker.controller)
          return;
        var a = new self.MessageChannel();
        this.$3 && (a.port1.onmessage = this.$3);
        navigator.serviceWorker.controller.postMessage(
          { command: this.$1, data: this.$2 },
          [a.port2]
        );
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "ServiceWorkerLoginAndLogout",
  ["ClientServiceWorkerMessage"],
  function (a, b, c, d, e, f) {
    function g(a) {
      new (b("ClientServiceWorkerMessage"))(a, null).sendViaController();
    }
    a = {
      login: function () {
        g("login");
      },
      logout: function () {
        g("logout");
      },
    };
    c = a;
    f["default"] = c;
  },
  66
);
__d(
  "ServiceWorkerRegistration",
  [
    "BrowserPaymentHandlerConfig",
    "ClientServiceWorkerMessage",
    "EventListener",
    "Promise",
    "Run",
    "promiseDone",
  ],
  function (a, b, c, d, e, f) {
    var g = !!navigator.serviceWorker,
      h = {},
      i = { name: "Facebook Pay", method: self.location.origin + "/pay" };
    function j(a) {
      if (!b("BrowserPaymentHandlerConfig").enabled) return;
      (a = a.paymentManager) == null
        ? void 0
        : (a = a.instruments) == null
        ? void 0
        : a.set("Facebook", i);
    }
    function k() {
      var a = navigator.serviceWorker;
      if (!g || !a)
        throw new Error("serviceWorker is not supported in this browser");
      return a;
    }
    var l = {
      isSupported: function () {
        return g;
      },
      registerWorkerIfUnregisteredAfterDD: function (a) {
        b("Run").onAfterLoad(function () {
          l.registerWorkerIfUnregistered(a);
        });
      },
      registerWorkerIfUnregistered: function (a) {
        if (h[a]) return h[a];
        var c = k(),
          d = (h[a] = new (b("Promise"))(function (d, e) {
            b("promiseDone")(l.getWorkerRegistration(a), function (f) {
              if (!f) {
                var g = b("EventListener").listen(
                  window,
                  "message",
                  function (a) {
                    (a == null
                      ? void 0
                      : (a = a.data) == null
                      ? void 0
                      : a.command) === "ServiceWorkerInstallError" && e();
                  }
                );
                b("promiseDone")(
                  b("Promise").resolve(
                    c.register(a, { updateViaCache: "all" })
                  ),
                  function () {
                    g.remove(),
                      b("promiseDone")(b("Promise").resolve(c.ready), d);
                  }
                );
              } else d(f);
            });
          }));
        b("promiseDone")(d, function (b) {
          (h[a] = null), j(b);
        });
        return d;
      },
      unregisterControllingWorker: function () {
        return new (b("Promise"))(function (a, c) {
          c = new (b("ClientServiceWorkerMessage"))(
            "unregister",
            {},
            function () {
              a(!0);
            }
          );
          c.sendViaController();
        });
      },
      getWorkerRegistration: function (a) {
        var b = k();
        return b.getRegistration(a);
      },
      isAWorkerActivated: function () {
        return !navigator.serviceWorker ||
          !navigator.serviceWorker.getRegistration
          ? b("Promise").resolve(!1)
          : navigator.serviceWorker.getRegistration().then(function (a) {
              return !!(a && a.active);
            });
      },
    };
    e.exports = l;
  },
  null
);
__d(
  "ScrollBoundaryContain",
  ["Event", "Scroll", "UserAgent"],
  function (a, b, c, d, e, f) {
    var g = function (a, c) {
        c.deliberateSync = !0;
        if (
          (c.axis !== void 0 && c.axis === c.HORIZONTAL_AXIS) ||
          (c.wheelDeltaX && !c.wheelDeltaY) ||
          (c.deltaX && !c.deltaY)
        )
          return;
        var d = c.wheelDelta || -c.deltaY || -c.detail,
          e = a.scrollHeight,
          f = a.clientHeight;
        if (e > f) {
          c.stopPropagation();
          a = b("Scroll").getTop(a);
          ((d > 0 && a === 0) || (d < 0 && a >= e - f - 1)) &&
            c.preventDefault();
        }
      },
      h = void 0,
      i = function () {
        if (h) return h;
        h = b("UserAgent").isBrowser("Firefox")
          ? "WheelEvent" in window
            ? "wheel"
            : "DOMMouseScroll"
          : "mousewheel";
        return h;
      },
      j = function (a) {
        var c = g.bind(null, a),
          d = i(),
          e,
          f = b("Event").listen(a, "mouseenter", function () {
            e == null && (e = b("Event").listen(a, d, c));
          }),
          h = b("Event").listen(a, "mouseleave", function () {
            e && (e.remove(), (e = null));
          }),
          j = !1;
        return {
          remove: function () {
            if (j) return;
            e && (e.remove(), (e = null));
            f.remove();
            h.remove();
            j = !0;
          },
        };
      },
      k = function (a) {
        (a.deliberateSync = !0),
          this.scrollHeight > this.clientHeight && a.stopPropagation();
      },
      l = function (a) {
        var c = b("Event").listen(a, i(), k, null, { passive: !0 }),
          d = !1;
        return {
          remove: function () {
            if (d) return;
            c.remove();
            d = !0;
          },
        };
      };
    a = {
      applyToElem: function (a) {
        if ("overscrollBehavior" in a.style) {
          a.style.overscrollBehavior = "contain";
          return l(a);
        } else {
          a.style.msScrollChaining !== void 0 &&
            (a.style.msScrollChaining = "none");
          return j(a);
        }
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "XPagesManagerPublishingToolsController",
  ["XController"],
  function (a, b, c, d, e, f) {
    e.exports = b("XController").create("/{page_token}/publishing_tools/", {
      privacy_mutation_token: { type: "String" },
      business_id: { type: "Int" },
      page_token: { type: "String", required: !0 },
      current_page: { type: "Int" },
      section: { type: "String" },
      source: { type: "Enum", enumType: 1 },
      sourceID: { type: "String" },
      refSource: { type: "Enum", enumType: 1 },
      initial_action_data: { type: "StringToStringMap" },
      initial_data: { type: "StringToStringMap" },
      modal: { type: "Enum", enumType: 1 },
    });
  },
  null
);
__d(
  "XPagesManagerSettingsController",
  ["XController"],
  function (a, b, c, d, e, f) {
    e.exports = b("XController").create("/{page_token}/settings/", {
      business_id: { type: "Int" },
      page_token: { type: "String", required: !0 },
      edited: { type: "String" },
      section: { type: "String" },
      tab: { type: "String" },
      change_admin_action: { type: "String" },
      change_admin_uid: { type: "Int" },
      tbid: { type: "Int" },
      fid: { type: "Int" },
      item_id: { type: "Int" },
      ref: { type: "String" },
      shimmed_in_item: { type: "Bool", defaultValue: !1 },
      q: { type: "String" },
      promote_plugin_tab: { type: "Enum", enumType: 1 },
      active_section: { type: "String" },
      on_load_actions: { type: "StringVector" },
      partner_id: { type: "Int" },
      enable: { type: "Enum", enumType: 1 },
      creator_request_id: { type: "Int" },
      show_cc_dialog: { type: "Bool", defaultValue: !1 },
      chat_plugin_step: { type: "Int", defaultValue: 0 },
      country_code: { type: "Enum", enumType: 1 },
      show_sync_dialog: { type: "Bool", defaultValue: !1 },
      job_manager_requester_id: { type: "Int" },
    });
  },
  null
);
