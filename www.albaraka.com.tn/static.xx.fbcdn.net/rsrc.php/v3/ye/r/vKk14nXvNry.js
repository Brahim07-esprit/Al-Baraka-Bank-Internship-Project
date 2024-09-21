/*FB_PKG_DELIM*/

__d(
  "OneTraceQPLLogger",
  ["QuickPerformanceLogger", "performanceNavigationStart", "performanceNow"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = {
        CANCEL: 4,
        ERROR: 87,
        FAIL: 3,
        OFFLINE: 160,
        START: 1,
        SUCCESS: 2,
        TIMEOUT: 113,
      },
      i = c("performanceNavigationStart")();
    function a(a, b) {
      if (a == null) return;
      c("QuickPerformanceLogger").markerStart(
        a,
        b.instanceKey,
        b.startTime + i
      );
    }
    function b(a, b) {
      if (a == null) return;
      c("QuickPerformanceLogger").markerAnnotate(a, b.annotations, {
        instanceKey: b.instanceKey,
      });
      for (var d in b.markerPoints)
        c("QuickPerformanceLogger").markerPoint(a, d, {
          data: b.markerPoints[d].data,
          instanceKey: b.instanceKey,
          timestamp: b.markerPoints[d].timeSinceStart + i,
        });
      d = h[b.status];
      c("QuickPerformanceLogger").markerEnd(
        a,
        d,
        b.instanceKey,
        ((a = b.endTime) != null ? a : c("performanceNow")()) + i
      );
    }
    g.qplActionMap = h;
    g.initQPL = a;
    g.logQPL = b;
  },
  98
);
__d(
  "InteractionTracingConfigDefault",
  ["OneTraceQPLLogger", "SiteData", "gkx", "performanceNavigationStart"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = 6e4;
    b = new Set([
      "AppTiming",
      "TierFlush",
      "NavigationTiming",
      "VisualCompletion",
      "TestMetrics",
      "ServerTimings",
    ]);
    e = {
      appStart: c("performanceNavigationStart")(),
      defaultTracePolicy: "default",
      enableMemoryLogging: c("gkx")("1475"),
      logLateMutationReactStack: c("gkx")("1914427"),
      logVCReactStack: c("gkx")("1778371"),
      heroLatePlaceholderDetection: c("gkx")("5840"),
      heroDebugTracing: c("gkx")("4639"),
      pkgCohort: c("SiteData").pkg_cohort,
      timeout: a,
      qplActionMap: d("OneTraceQPLLogger").qplActionMap,
      useDocumentBodyForVCRoot: !0,
      navigationCancelsInteractions: !1,
      heroNestedRootsFix: c("gkx")("4180"),
      qplPointFilterRegex: /^((server_)?adp_|Relay_)/,
      allowedQPLPointTypes: b,
    };
    g.DEFAULT_TRACING_CONFIG = e;
  },
  98
);
__d(
  "JSSPStatsTypedLogger",
  ["Banzai", "GeneratedLoggerUtils"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a() {
        this.$1 = {};
      }
      var c = a.prototype;
      c.log = function () {
        b("GeneratedLoggerUtils").log(
          "logger:JSSPStatsLoggerConfig",
          this.$1,
          b("Banzai").BASIC
        );
      };
      c.logVital = function () {
        b("GeneratedLoggerUtils").log(
          "logger:JSSPStatsLoggerConfig",
          this.$1,
          b("Banzai").VITAL
        );
      };
      c.logImmediately = function () {
        b("GeneratedLoggerUtils").log("logger:JSSPStatsLoggerConfig", this.$1, {
          signal: !0,
        });
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
      c.setBootUpTime = function (a) {
        this.$1.boot_up_time = a;
        return this;
      };
      c.setShutDownTime = function (a) {
        this.$1.shut_down_time = a;
        return this;
      };
      c.setTime = function (a) {
        this.$1.time = a;
        return this;
      };
      c.setTraceSize = function (a) {
        this.$1.trace_size = a;
        return this;
      };
      c.setWeight = function (a) {
        this.$1.weight = a;
        return this;
      };
      return a;
    })();
    c = {
      boot_up_time: !0,
      shut_down_time: !0,
      time: !0,
      trace_size: !0,
      weight: !0,
    };
    e.exports = a;
  },
  null
);
__d(
  "JSSelfProfiler",
  ["FBLogger", "JSSPStatsTypedLogger", "SiteData", "asyncToGeneratorRuntime"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a, b) {
        (this.$1 = a), (this.$5 = b), (this.$4 = !1);
      }
      a.startRecording = function (b, d) {
        if (!a.isSupported()) {
          var e = new Error("JS Self Profiling is not supported");
          e.stack;
          throw e;
        }
        e = performance.now();
        try {
          d = new Profiler({ sampleInterval: b, maxBufferSize: d });
          e = performance.now() - e;
          d = new a(d, b);
          d.setStartUpTime(e);
          return d;
        } catch (a) {
          c("FBLogger")("JSSelfProfiler")
            .catching(a)
            .warn("Could not initialize profiler");
        }
        return null;
      };
      var d = a.prototype;
      d.stopRecording = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (this.$4) {
            var a = new Error(
              "The profiling has stopped before stopRecording() is called"
            );
            a.stack;
            throw a;
          }
          a = performance.now();
          var b = yield this.$1.stop();
          this.$3 = performance.now() - a;
          b.resources = b.resources.map(function (a) {
            return a.startsWith("data:") ? "inline JavaScript" : a;
          });
          b.frames.forEach(function (a) {
            a.resourceId != null &&
              c("SiteData").push_phase === "dev" &&
              (a.name = "");
          });
          a = {
            trace: b,
            stats: {
              timeOrigin: performance.timeOrigin,
              requestedSampleInterval: this.$5,
              actualSampleInterval: this.$1.sampleInterval,
            },
          };
          this.$6 = JSON.stringify(b).length;
          this.$4 = !0;
          return a;
        });
        function d() {
          return a.apply(this, arguments);
        }
        return d;
      })();
      d.setStartUpTime = function (a) {
        this.$2 = a;
      };
      d.logStats = function () {
        if (this.$2 == null) {
          c("FBLogger")("JSSelfProfiler").warn(
            "JSSP start up time is null/undefined"
          );
          return;
        }
        if (this.$3 == null) {
          c("FBLogger")("JSSelfProfiler").warn(
            "JSSP shut down time is null/undefined"
          );
          return;
        }
        new (c("JSSPStatsTypedLogger"))()
          .setBootUpTime(this.$2)
          .setShutDownTime(this.$3)
          .setTraceSize(this.$6)
          .log();
      };
      a.isSupported = function () {
        return (
          window.performance != null &&
          typeof window.Profiler === "function" &&
          performance.timeOrigin != null
        );
      };
      a.setIsHeaderSent = function () {
        a.isHeaderSent = !0;
      };
      return a;
    })();
    a.isHeaderSent = !1;
    g["default"] = a;
  },
  98
);
__d(
  "JSSelfProfilerLoomProvider",
  ["JSSelfProfiler", "JSSelfProfilerConfig", "asyncToGeneratorRuntime"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = (function () {
      function a(a) {
        this.$1 = a;
        a = c("JSSelfProfilerConfig").SAMPLE_INTERVAL;
        var b = c("JSSelfProfilerConfig").MAX_BUFFER_SIZE;
        this.$2 = c("JSSelfProfiler").startRecording(a, b);
      }
      var d = a.prototype;
      d.loomTraceWillEnd = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var a = this.$1,
            b = this.$2;
          if (a != null && b != null) {
            a.jsSelfProfilerData = yield b.stopRecording();
            b.logStats();
            return;
          }
          this.$1 = null;
          this.$2 = null;
        });
        function c() {
          return a.apply(this, arguments);
        }
        return c;
      })();
      return a;
    })();
    a = {
      loomProviderId: "JSSelfProfiler",
      isSupported: function () {
        return c("JSSelfProfiler").isSupported();
      },
      getInstance: function (a) {
        return new h(a);
      },
    };
    g["default"] = a;
  },
  98
);
__d(
  "InteractionTracing",
  [
    "Env",
    "InteractionTracingConfigDefault",
    "InteractionTracingMetrics",
    "JSSelfProfilerLoomProvider",
    "JSSelfProfilerTrackedInteractions",
    "WebSession",
    "cr:70",
    "interaction-tracing",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      var e = a.cfg,
        f = babelHelpers.objectWithoutPropertiesLoose(a, ["cfg"]);
      if (c("Env").jssp_header_sent && c("Env").jssp_targeting_enabled) {
        var g = c("JSSelfProfilerTrackedInteractions").interactions;
        if (g) {
          g = !!g.find(function (b) {
            return b.tracePolicy === a.tracePolicy && b.action === a.traceType;
          });
          if (g) {
            (g = b("cr:70").WebLoom) == null
              ? void 0
              : g.addProvider(c("JSSelfProfilerLoomProvider"));
          }
        }
      }
      return babelHelpers["extends"]({}, f, {
        cfg: babelHelpers["extends"](
          {},
          d("InteractionTracingConfigDefault").DEFAULT_TRACING_CONFIG,
          e
        ),
        deps: b("cr:70"),
      });
    }
    a = babelHelpers["extends"](
      {},
      c("interaction-tracing").InteractionTracingCore,
      {
        transformStartMetadata: h,
        startInteraction: function (a, b) {
          return c(
            "interaction-tracing"
          ).InteractionTracingCore.startInteraction(h(a), b);
        },
        trace: (function (a) {
          function b(b, c, d, e, f, g, h, i, j) {
            return a.apply(this, arguments);
          }
          b.toString = function () {
            return a.toString();
          };
          return b;
        })(function (a, e, f, g, h, i, j, k, l) {
          l = c("interaction-tracing").InteractionTracingCore.trace(
            babelHelpers["extends"](
              {},
              d("InteractionTracingConfigDefault").DEFAULT_TRACING_CONFIG,
              l
            ),
            b("cr:70"),
            a,
            e,
            f,
            g,
            h,
            i,
            j,
            k
          );
          a = d("WebSession").getSessionId();
          a != null &&
            c("InteractionTracingMetrics").addMetadata(l, "websession_id", a);
          return l;
        }),
        navigation: c("interaction-tracing").NavigationTracing,
        getTraceStatus: c("interaction-tracing").getTraceStatus,
      }
    );
    g["default"] = a;
  },
  98
);
__d(
  "CometTailLoadLogger",
  [
    "InteractionTracing",
    "QuickPerformanceLogger",
    "SiteData",
    "VisibilityListener",
    "performanceNavigationStart",
    "qpl",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 0,
      i = c("performanceNavigationStart")(),
      j = new Map(),
      k = new Map(),
      l = new Map(),
      m = new Set();
    function a() {
      j.clear(), k.clear(), l.clear(), m.clear();
    }
    function n(a, b, d) {
      h++;
      c("QuickPerformanceLogger").markerStart(
        c("qpl")._(588713587, "4750"),
        h,
        d + i,
        { trackedForLoss: !0 }
      );
      d = a + "_" + b;
      l.set(d, h);
    }
    function b(a, b) {
      k.set(a, b);
    }
    function e(a, b, c) {
      a = a + "_" + b;
      j.set(a, c);
    }
    function f(a, b, e, f) {
      var g = a + "_" + b,
        h = 0,
        o = k.get(a) || e,
        p = j.get(g);
      p != null && ((h = p), j["delete"](g));
      p = l.get(g);
      p == null && (n(a, b, o), (p = l.get(g)));
      o = d("VisibilityListener").getHiddenTime(
        o + c("performanceNavigationStart")(),
        e + c("performanceNavigationStart")()
      );
      c("QuickPerformanceLogger").markerAnnotate(
        c("qpl")._(588713587, "4750"),
        {
          int: {
            client_revision: c("SiteData").client_revision,
            hidden: Number(o != null && o > 0),
            interruptedConsumption: h,
            position: b,
          },
          string: {
            client_push_phase: c("SiteData").push_phase,
            pageletName: a,
            tracePolicy: c("InteractionTracing").getCurrentTabTracePolicy(),
          },
        },
        { instanceKey: p }
      );
      c("QuickPerformanceLogger").markerEnd(
        c("qpl")._(588713587, "4750"),
        f,
        p,
        e + i
      );
      m.add(g);
      l["delete"](g);
    }
    g.alreadyFinishedMarkerKeys = m;
    g.reset = a;
    g.startTailLoadTracing = n;
    g.setTailLoadStartTime = b;
    g.reportInterruptedConsumption = e;
    g.endTailloadTracing = f;
  },
  98
);
__d(
  "ResourceTimingStore",
  ["performance"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 4e3,
      i = 3e3,
      j = new Map(),
      k = !1;
    function l() {
      var a = Array.from(j.entries());
      j = new Map(a.slice(-i));
    }
    function m(a) {
      var b = a.indexOf("#");
      return b === -1 ? a : a.slice(0, b);
    }
    function n(a) {
      for (
        var a = a,
          b = Array.isArray(a),
          c = 0,
          a = b
            ? a
            : a[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
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
        if (!(d instanceof PerformanceResourceTiming)) continue;
        var e = "";
        try {
          e = new URL(d.name).pathname;
        } catch (a) {}
        if (!/\.(css|js)$/.test(e)) continue;
        e = d;
        if (
          !(
            e != null &&
            typeof e === "object" &&
            typeof e.encodedBodySize === "number" &&
            typeof e.decodedBodySize === "number" &&
            typeof e.transferSize === "number"
          )
        )
          continue;
        j.set(m(d.name), e);
      }
      j.size > h && l();
    }
    function o(a) {
      n(a.getEntries());
    }
    function p() {
      if (k) return;
      k = !0;
      var a;
      if (typeof PerformanceObserver !== "undefined") {
        a = new PerformanceObserver(o);
        try {
          a.observe({ buffered: !0, type: "resource" });
        } catch (a) {}
      }
      typeof c("performance").getEntriesByType === "function" &&
        n(c("performance").getEntriesByType("resource"));
    }
    function a(a) {
      p();
      return j.get(m(a));
    }
    g.init = p;
    g.getEntryForURL = a;
  },
  98
);
__d(
  "filterMap",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      var c = new Map();
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
        var g = f[0];
        f = f[1];
        b(f, g) && c.set(g, f);
      }
      return c;
    }
    f["default"] = a;
  },
  66
);
__d(
  "HeroBootloadPerfStore",
  [
    "BootloaderEvents",
    "InteractionTracingMetrics",
    "ResourceTimingStore",
    "filterMap",
    "gkx",
    "performanceNavigationStart",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = ["encodedBodySize", "transferSize", "totalCount", "cacheCount"],
      i = ["t1", "t2", "t3"],
      j = ["untiered"],
      k = ["js", "css"],
      l = new Map();
    d("BootloaderEvents").onBootload(function (a) {
      a.components.forEach(function (b) {
        l.set(b, a);
      });
    });
    function m(a) {
      try {
        return new URL(a).pathname;
      } catch (a) {
        return "[invalid url]";
      }
    }
    function n(a, b) {
      if (b == null) {
        a.missingData++;
        return;
      }
      a.urls && a.urls.add(b.name);
      a.encodedBodySize += b.encodedBodySize;
      a.decodedBodySize += b.decodedBodySize;
      a.transferSize += b.transferSize;
      a.totalCount += 1;
      b.transferSize === 0 && (a.cacheCount += 1);
    }
    function o(a) {
      return a.src.indexOf("data") === 0;
    }
    function p(a, b, e) {
      var f = new Map();
      function g(a) {
        var b;
        b =
          (b = f.get(a)) != null
            ? b
            : {
                cacheCount: 0,
                decodedBodySize: 0,
                encodedBodySize: 0,
                missingData: 0,
                totalCount: 0,
                transferSize: 0,
                urls: c("gkx")("1924645") ? new Set() : null,
              };
        f.set(a, b);
        return b;
      }
      function h(a, c) {
        var f = d("ResourceTimingStore").getEntryForURL(c.src);
        n(g("used_" + c.type), f);
        n(g("used_" + a), f);
        n(g("used_" + a + "_" + c.type), f);
        f != null &&
          f.responseEnd >= b &&
          f.responseEnd <= e &&
          (n(g("downloaded_" + a), f),
          n(g("downloaded_" + c.type), f),
          n(g("downloaded_" + a + "_" + c.type), f));
      }
      function i(a, b) {
        (a.decodedBodySize += b.length), (a.totalCount += 1);
      }
      function j(a, b) {
        i(g("inline_" + a), b.src),
          i(g("inline_" + b.type), b.src),
          i(g("inline_" + a + "_" + b.type), b.src);
      }
      var k = function () {
        if (m) {
          if (p >= l.length) return "break";
          q = l[p++];
        } else {
          p = l.next();
          if (p.done) return "break";
          q = p.value;
        }
        var a = q,
          b = a[0];
        a = a[1];
        a.forEach(function (a, c) {
          if (!(a.type === "css" || a.type === "js")) return;
          o(a) ? j(b, a) : h(b, a);
        });
      };
      for (
        var l = a,
          m = Array.isArray(l),
          p = 0,
          l = m
            ? l
            : l[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        var q;
        a = k();
        if (a === "break") break;
      }
      return f;
    }
    function q(a, b, c) {
      var d;
      d = (d = a.get(b)) != null ? d : new Map();
      a.set(b, d);
      for (
        a = c,
          b = Array.isArray(a),
          c = 0,
          a = b
            ? a
            : a[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        var e;
        if (b) {
          if (c >= a.length) break;
          e = a[c++];
        } else {
          c = a.next();
          if (c.done) break;
          e = c.value;
        }
        e = e;
        (e.type === "css" || e.type === "js") && d.set(e.src, e);
      }
    }
    function r(a, b, d, e) {
      d = p(d, a, b);
      a = {};
      for (
        var b = e,
          e = Array.isArray(b),
          f = 0,
          b = e
            ? b
            : b[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        var g;
        if (e) {
          if (f >= b.length) break;
          g = b[f++];
        } else {
          f = b.next();
          if (f.done) break;
          g = f.value;
        }
        g = g;
        for (
          var i = k,
            j = Array.isArray(i),
            l = 0,
            i = j
              ? i
              : i[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var n;
          if (j) {
            if (l >= i.length) break;
            n = i[l++];
          } else {
            l = i.next();
            if (l.done) break;
            n = l.value;
          }
          n = n;
          var o = "downloaded_" + g + "_" + n;
          for (var q = 0; q < h.length; q++) {
            var r,
              s = h[q];
            a[o + "_" + s] =
              (r = (r = d.get(o)) == null ? void 0 : r[s]) != null ? r : 0;
          }
          if (c("gkx")("1924645")) {
            a[o + "_urls"] = Array.from(
              (r = (s = d.get(o)) == null ? void 0 : s.urls) != null ? r : []
            ).map(m);
          }
          q = "inline_" + g + "_" + n;
          a[q + "_decodedBodySize"] =
            (s = (o = d.get(q)) == null ? void 0 : o.decodedBodySize) != null
              ? s
              : 0;
        }
      }
      return a;
    }
    function s(a, b, d, e) {
      var f = p(b, a.start, (b = a.completed) != null ? b : a.start);
      [].concat(k, e).forEach(function (b) {
        var e = f.get("downloaded_" + b);
        for (var g = 0; g < h.length; g++) {
          var i = h[g];
          c("InteractionTracingMetrics").addMetadata(
            a.traceId,
            d + "_downloaded_" + b + "_" + i,
            (i = e == null ? void 0 : e[i]) != null ? i : 0
          );
        }
        i = f.get("inline_" + b);
        c("InteractionTracingMetrics").addMetadata(
          a.traceId,
          d + "_inline_" + b + "_decodedBodySize",
          (g = i == null ? void 0 : i.decodedBodySize) != null ? g : 0
        );
      });
    }
    function t(a) {
      var b = new Map();
      a.heroRelay.forEach(function (e) {
        var f = e.pageletStack;
        e = e.queries;
        for (
          var e = e,
            g = Array.isArray(e),
            h = 0,
            e = g
              ? e
              : e[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var i;
          if (g) {
            if (h >= e.length) break;
            i = e[h++];
          } else {
            h = e.next();
            if (h.done) break;
            i = h.value;
          }
          i = i;
          var k = i.hasteResponseLogEvents;
          for (
            var k = k,
              l = Array.isArray(k),
              m = 0,
              k = l
                ? k
                : k[
                    typeof Symbol === "function"
                      ? Symbol.iterator
                      : "@@iterator"
                  ]();
            ;

          ) {
            var n, o;
            if (l) {
              if (m >= k.length) break;
              o = k[m++];
            } else {
              m = k.next();
              if (m.done) break;
              o = m.value;
            }
            o = o;
            var p = o.startTime - c("performanceNavigationStart")(),
              s = o.logTime - c("performanceNavigationStart")();
            if (s < a.start || p > ((n = a.completed) != null ? n : Infinity))
              return;
            n = d("BootloaderEvents").flattenResourceMapSet(o.rsrcs);
            o = new Map();
            q(b, "untiered", n.values());
            q(o, "untiered", n.values());
            n = r(p, s, o, j);
            c("InteractionTracingMetrics").addSubspan(
              a.traceId,
              "Relay3D: " + i.name,
              "HeroTracing",
              Math.max(a.start, p),
              Math.min((o = a.completed) != null ? o : Infinity, s),
              babelHelpers["extends"](
                {},
                {
                  pagelet: f[f.length - 1],
                  pageletStack: f,
                  spanType: "Relay3D",
                },
                n,
                {
                  full_duration: (s - p) / 1e3,
                  is_preloaded: i.isPreloaded === !0,
                }
              )
            );
          }
        }
      });
      s(a, b, "relay3d", j);
    }
    function u(a) {
      var b;
      b = Array.from(
        new Set(
          (b = []).concat.apply(
            b,
            a.heroBootloads.map(function (a) {
              return a.moduleIDs;
            })
          )
        )
      );
      var e = new Map(),
        f = new Map();
      b.forEach(function (a) {
        var b = l.get(a);
        b && f.set(a, b);
      });
      for (
        var b = f.values(),
          g = Array.isArray(b),
          h = 0,
          b = g
            ? b
            : b[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        var j;
        if (g) {
          if (h >= b.length) break;
          j = b[h++];
        } else {
          h = b.next();
          if (h.done) break;
          j = h.value;
        }
        j = j;
        q(
          e,
          "t1",
          d("BootloaderEvents").flattenResourceMapSet(j.tierOne).values()
        );
        q(
          e,
          "t2",
          d("BootloaderEvents").flattenResourceMapSet(j.tierTwo).values()
        );
        q(
          e,
          "t3",
          d("BootloaderEvents").flattenResourceMapSet(j.tierThree).values()
        );
      }
      s(a, e, "bootload", i);
      a.heroBootloads.forEach(function (b) {
        var c = b.moduleIDs;
        b = b.pageletStack;
        c = new Set(
          c
            .map(function (a) {
              return l.get(a);
            })
            .filter(Boolean)
        );
        v(a, c, b, "Bootload");
      });
      if (c("gkx")("8594")) {
        var k = a.heroBootloads
          .map(function (a) {
            a = a.moduleIDs;
            return a;
          })
          .flat();
        j = c("filterMap")(l, function (a, b) {
          return !k.includes(b);
        });
        v(a, j, [], "BootloadOutside");
      }
    }
    function v(a, b, e, f) {
      b.forEach(function (b) {
        if (b.callbackEnd - c("performanceNavigationStart")() < a.start) return;
        var g = new Map();
        q(
          g,
          "t1",
          d("BootloaderEvents").flattenResourceMapSet(b.tierOne).values()
        );
        q(
          g,
          "t2",
          d("BootloaderEvents").flattenResourceMapSet(b.tierTwo).values()
        );
        q(
          g,
          "t3",
          d("BootloaderEvents").flattenResourceMapSet(b.tierThree).values()
        );
        g = r(
          b.startTime - c("performanceNavigationStart")(),
          b.callbackEnd - c("performanceNavigationStart")(),
          g,
          i
        );
        var h = f + ": " + b.components.join(),
          j = f === "Bootload" ? "HeroTracing" : "BootloadOutside";
        c("InteractionTracingMetrics").addSubspan(
          a.traceId,
          h,
          j,
          Math.max(a.start, b.startTime - c("performanceNavigationStart")()),
          Math.min(
            (h = a.completed) != null ? h : Infinity,
            b.callbackStart - c("performanceNavigationStart")()
          ),
          babelHelpers["extends"](
            {},
            {
              bootloadComponents: b.components,
              bootloadRef: b.ref,
              pagelet: e[e.length - 1],
              pageletStack: e,
              spanType: f,
            },
            g
          )
        );
      });
    }
    function a(a) {
      d("ResourceTimingStore").init(), u(a), t(a);
    }
    g.addStaticResourcesStats = a;
  },
  98
);
__d(
  "WebLoomBanzaiTransport",
  ["Banzai"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      post: function (a, b) {
        c("Banzai").post("loom_trace", a, {
          callback: b.onComplete,
          delay: b.isHighPri ? c("Banzai").VITAL_WAIT : c("Banzai").BASIC_WAIT,
        });
      },
      flush: function (a, b) {
        c("Banzai").flush(a, b);
      },
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "WebLoomStaticResourceFileTypes",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = {
      js: "js",
      css: "css",
      wasm: "wasm",
      woff: "woff",
      woff2: "woff2",
      otf: "otf",
      eot: "eot",
      ttf: "ttf",
    };
    function a(a) {
      return Object.prototype.hasOwnProperty.call(g, a);
    }
    f.WebLoomStaticResourceFileTypes = g;
    f.isStaticResourceFileType = a;
  },
  66
);
__d(
  "sanitizeURIStringForLoom",
  ["WebLoomStaticResourceFileTypes"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = new Map(),
      i = 0,
      j = /(\d{4,})/gm,
      k = /([a-f0-9]{8,})/gm;
    function l(a) {
      a = a.replace(j, "{N}");
      return a.replace(k, "{N}");
    }
    function m(a) {
      a = a.getPath();
      var b = a.lastIndexOf(".");
      return b === -1 ? "" : a.substring(b + 1);
    }
    function n() {
      return i++;
    }
    function o(a) {
      if (a.getProtocol() !== "http" && a.getProtocol() !== "https") return !1;
      var b = Number(a.getPort());
      if (!!b && b !== 80 && b !== 443) return !1;
      return a.isSubdomainOfDomain("fbcdn.net") ? !0 : !1;
    }
    function p(a, b) {
      b = new b.URI(a);
      a = m(b);
      b.setQueryString("");
      b.setFragment("");
      if (a === "" || a === "php" || a === "ico") {
        var c = l(b.getPath());
        c !== b.getPath() && b.setPath(c + "/sanitized-" + n());
      } else
        d("WebLoomStaticResourceFileTypes").isStaticResourceFileType(a) ||
          b.setPath("/sanitized" + (o(b) ? "-cdn" : "") + "-" + n() + "." + a);
      return b.toString();
    }
    function a(a, b) {
      if (b.isBrowser("IE")) return "";
      h.has(a) || h.set(a, p(a, b));
      return h.get(a) || "";
    }
    g["default"] = a;
  },
  98
);
__d(
  "InteractionTracingLoomProvider",
  ["interaction-tracing-metrics", "sanitizeURIStringForLoom"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      return a.substr(0, 7) === "http://" || a.substr(0, 8) === "https://"
        ? !0
        : !1;
    }
    var i = (function () {
      var b = a.prototype;
      b.$4 = function (a) {
        return this.$3.sanitizeURIs && h(a)
          ? c("sanitizeURIStringForLoom")(a, this.$2)
          : a;
      };
      b.$5 = function (a, b) {
        var c = this.$1;
        if (!c) return;
        c.buffer.addEvent(a, b + this.$3.appStart);
      };
      b.$6 = function (a, b) {
        var c = this,
          d = a.subSpans,
          e = function (e) {
            d[e].forEach(function (d, f) {
              f = {
                blockName: e + "_" + f,
                blockType: d.type,
                execUnitName: e,
                traceId: b,
                traceType: a.type,
              };
              c.$5(
                babelHelpers["extends"]({ type: "INTERACTION_TRACE_START" }, f),
                d.start
              );
              c.$5(
                babelHelpers["extends"](
                  { blockAnnotations: d.data, type: "INTERACTION_TRACE_END" },
                  f
                ),
                d.end
              );
            });
          };
        for (var f in d) e(f);
      };
      b.$7 = function (a, b) {
        var c = a.payloadResources;
        for (var d in c) {
          var e = c[d],
            f = this.$4(d),
            g = {
              blockName: f,
              blockType: "PayloadResources",
              execUnitName: e.initiator,
              traceId: b,
              traceType: a.type,
            };
          this.$5(
            babelHelpers["extends"]({ type: "INTERACTION_TRACE_START" }, g),
            e.start
          );
          this.$5(
            {
              blockName: f,
              execUnitName: e.initiator,
              pointAnnotations: {},
              pointName: "requestStart",
              traceId: b,
              type: "INTERACTION_TRACE_POINT",
            },
            e.requestStart
          );
          this.$5(
            babelHelpers["extends"](
              {
                blockAnnotations: {
                  refs: e.refs.join(","),
                  transferSize: e.transferSize,
                  url: this.$4(e.url),
                },
                type: "INTERACTION_TRACE_END",
              },
              g
            ),
            e.end
          );
        }
      };
      b.$8 = function (a, b) {
        var c = a.imagePreloaderTimings;
        for (var d in c) {
          var e = c[d],
            f = this.$4(d),
            g = {
              blockName: f,
              blockType: "ImagePreloaders",
              execUnitName: e.playloadName,
              traceId: b,
              traceType: a.type,
            };
          this.$5(
            babelHelpers["extends"]({ type: "INTERACTION_TRACE_START" }, g),
            e.start
          );
          this.$5(
            {
              blockName: f,
              execUnitName: e.playloadName,
              pointAnnotations: {},
              pointName: "requestStart",
              traceId: b,
              type: "INTERACTION_TRACE_POINT",
            },
            e.requestStart
          );
          this.$5(
            babelHelpers["extends"](
              { blockAnnotations: { url: f }, type: "INTERACTION_TRACE_END" },
              g
            ),
            e.end
          );
        }
      };
      b.$9 = function (a, b) {
        var c = this,
          d = a.payloadTimings,
          e = function (e) {
            var f = d[e];
            if (f.start == null || f.end == null) return { v: void 0 };
            var g = {
              blockName: e,
              blockType: f.payloadType,
              execUnitName: e,
              traceId: b,
              traceType: a.type,
            };
            c.$5(
              babelHelpers["extends"]({ type: "INTERACTION_TRACE_START" }, g),
              f.start
            );
            Object.keys(f.points).forEach(function (a) {
              c.$5(
                {
                  blockName: e,
                  execUnitName: e,
                  pointAnnotations: {},
                  pointName: a,
                  traceId: b,
                  type: "INTERACTION_TRACE_POINT",
                },
                f.points[a]
              );
            });
            var h = babelHelpers["extends"]({}, f.data);
            for (var i in f.pkgStat) {
              var j = f.pkgStat[i];
              for (var k in j) h[i + "_" + k] = j[k];
            }
            c.$5(
              babelHelpers["extends"](
                { blockAnnotations: h, type: "INTERACTION_TRACE_END" },
                g
              ),
              f.end
            );
          };
        for (var f in d) {
          var g = e(f);
          if (typeof g === "object") return g.v;
        }
      };
      b.$10 = function (a, b) {
        var c = a.markerPoints;
        for (var d in c) {
          var e = c[d],
            f = e.timestamp,
            g = e.type;
          g = {
            blockName: d,
            blockType: g,
            execUnitName: d,
            traceId: b,
            traceType: a.type,
          };
          this.$5(
            babelHelpers["extends"]({ type: "INTERACTION_TRACE_START" }, g),
            f
          );
          this.$5(
            babelHelpers["extends"](
              { blockAnnotations: e.data || {}, type: "INTERACTION_TRACE_END" },
              g
            ),
            f
          );
        }
      };
      b.$11 = function (a, b) {
        var c = a.requireDeferreds;
        for (var d in c) {
          var e = c[d],
            f = {
              blockName: d,
              blockType: "RequireDeferreds",
              execUnitName: d,
              traceId: b,
              traceType: a.type,
            },
            g = e.end;
          if (g == null) continue;
          this.$5(
            babelHelpers["extends"]({ type: "INTERACTION_TRACE_START" }, f),
            e.start
          );
          this.$5(
            babelHelpers["extends"](
              {
                blockAnnotations: {
                  alreadyRequired: Boolean(e.alreadyRequired),
                },
                type: "INTERACTION_TRACE_END",
              },
              f
            ),
            g
          );
        }
      };
      b.$12 = function (a, b, c, d) {
        for (var e = 0; e < d.length; e++) {
          var f = {
            blockName: a + "_" + e,
            blockType: a,
            execUnitName: a + "_" + e,
            traceId: c,
            traceType: b.type,
          };
          this.$5(
            babelHelpers["extends"]({ type: "INTERACTION_TRACE_START" }, f),
            d[e].start
          );
          this.$5(
            babelHelpers["extends"](
              { blockAnnotations: {}, type: "INTERACTION_TRACE_END" },
              f
            ),
            d[e].end
          );
        }
      };
      b.$13 = function (a) {
        var b = this;
        a.vcStateLog != null &&
          a.vcStateLog.forEach(function (c, d) {
            var e = c[0];
            c = c[1];
            d = {
              blockName: d,
              blockType: "VCState",
              execUnitName: "VCState",
              traceId: a.traceId,
              traceType: a.type,
            };
            b.$5(
              babelHelpers["extends"]({ type: "INTERACTION_TRACE_START" }, d),
              e
            );
            b.$5(
              babelHelpers["extends"](
                { blockAnnotations: {}, type: "INTERACTION_TRACE_END" },
                d
              ),
              c
            );
          });
      };
      b.$14 = function (a) {
        var b = this;
        a.factoryTimings.forEach(function (c) {
          var d = {
            blockName: c.name,
            blockType: "Factories",
            execUnitName: "Factories",
            traceId: a.traceId,
            traceType: a.type,
          };
          b.$5(
            babelHelpers["extends"]({ type: "INTERACTION_TRACE_START" }, d),
            c.start
          );
          b.$5(
            babelHelpers["extends"](
              { blockAnnotations: {}, type: "INTERACTION_TRACE_END" },
              d
            ),
            c.end
          );
        });
      };
      function a(a, b, c) {
        (this.$1 = a), (this.$2 = b), (this.$3 = c);
      }
      b.loomTraceWillEnd = function () {
        var a = this,
          b = this.$1;
        if (!b) return;
        var c = d(
            "interaction-tracing-metrics"
          ).InteractionTracingMetricsCore.dump(),
          e = [];
        if (
          b.triggerInfo.type === "INTERACTION" &&
          b.triggerInfo.interaction_id != null
        )
          e.push(b.triggerInfo.interaction_id);
        else
          for (var f in c) {
            var g = c[f];
            g = g.completed != null ? this.$3.appStart + g.completed : null;
            (g == null || g > b.startTime) && e.push(f);
          }
        e.forEach(function (b) {
          var d = c[b];
          a.$6(d, b);
          a.$10(d, b);
          a.$11(d, b);
          a.$7(d, b);
          a.$8(d, b);
          a.$9(d, b);
          a.$12("hidden", d, b, d.hiddenTimings);
          a.$12("offline", d, b, d.offlineTimings);
          a.$14(d);
          a.$13(d);
        });
      };
      return a;
    })();
    a = {
      getInstance: function (a, b, c) {
        return new i(a, b, c);
      },
      isSupported: function () {
        return !0;
      },
      loomProviderId: "InteractionTracing",
    };
    g["default"] = a;
  },
  98
);
__d(
  "QPLLoomProvider",
  ["QPLEvent"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = (function () {
      function a(a, b) {
        var c = this;
        this.$2 = {};
        this.$1 = b.QuickPerformanceLogger.addListener({
          onMarkerStart: function (b, e, f) {
            b = d("QPLEvent").getMarkerId(b);
            f >= a.startTime &&
              a.buffer.addEvent(
                { type: "QPL_START", markerId: b, instanceKey: e },
                f
              );
            c.$2[b] || (c.$2[b] = {});
            c.$2[b][e] = f;
          },
          onMarkerEnd: function (b, c, e, f) {
            c = d("QPLEvent").getMarkerId(c);
            f >= a.startTime &&
              a.buffer.addEvent(
                { type: "QPL_END", action: b, markerId: c, instanceKey: e },
                f
              );
          },
          onMarkerPoint: function (b, c, e, f, g) {
            b = d("QPLEvent").getMarkerId(b);
            if (g >= a.startTime) {
              a.buffer.addEvent(
                {
                  type: "QPL_POINT",
                  markerId: b,
                  instanceKey: c,
                  name: e,
                  data:
                    f == null
                      ? void 0
                      : (b = f.string) == null
                      ? void 0
                      : b.__key,
                },
                g
              );
            }
          },
          onAnnotation: function (b, e, f, g) {
            b = d("QPLEvent").getMarkerId(b);
            var h = c.$2[b];
            h = h == null ? void 0 : h[e];
            h != null &&
              h >= a.startTime &&
              a.buffer.addEvent(
                {
                  type: "QPL_ANNOTATION",
                  markerId: b,
                  instanceKey: e,
                  annotationKey: f,
                  annotationValue: g,
                },
                h
              );
          },
        });
      }
      var b = a.prototype;
      b.loomTraceWillEnd = function () {
        this.$1.dispose();
      };
      return a;
    })();
    a = {
      loomProviderId: "QPL",
      isSupported: function () {
        return !0;
      },
      getInstance: function (a, b) {
        return new h(a, b);
      },
    };
    g["default"] = a;
  },
  98
);
__d(
  "ResourceTimingLoomProvider",
  ["clamp", "performanceNowSinceAppStart", "sanitizeURIStringForLoom"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a, b) {
      b = b.substring(b.lastIndexOf(".") + 1);
      if (b == "js" || b == "css") return b;
      else if (a == "img" || b == "png" || b == "jpg" || b == "ico")
        return "img";
      else return a;
    }
    var i = (function () {
      a.isSupported = function () {
        return (
          window.performance &&
          window.performance.getEntriesByType &&
          window.performance.timing &&
          window.performance.timing.navigationStart
        );
      };
      function a(a, b, c) {
        (this.$1 = a), (this.$2 = b), (this.$3 = c);
      }
      var b = a.prototype;
      b.$4 = function (a) {
        var b = this,
          d = a.entry,
          e = a.resourceName,
          f = a.resourceId,
          g = a.resourceType,
          h = a.startTime,
          i = a.endTime,
          j = this.$1;
        if (j != null) {
          a = d;
          j.buffer.addEvent(
            {
              type: "RESOURCE_TIMING_START",
              resourceType: g,
              resourceId: f,
              resourceName: e,
              encodedSize:
                a != null && typeof a.encodedBodySize === "number"
                  ? a.encodedBodySize
                  : 0,
              decodedSize:
                a != null && typeof a.decodedBodySize === "number"
                  ? a.decodedBodySize
                  : 0,
              transferSize:
                a != null && typeof a.transferSize === "number"
                  ? a.transferSize
                  : 0,
            },
            h
          );
          e = function (a, d) {
            d = d + b.$3.appStart;
            j.buffer.addEvent(
              {
                type: "RESOURCE_TIMING_POINT",
                resourceType: g,
                resourceId: f,
                pointName: a,
              },
              c("clamp")(d, h, i)
            );
          };
          e("requestStart", d.requestStart);
          e("responseStart", d.responseStart);
          j.buffer.addEvent(
            { type: "RESOURCE_TIMING_END", resourceType: g, resourceId: f },
            i
          );
        }
      };
      b.$5 = function (a) {
        if (this.$3.sanitizeURIs)
          return c("sanitizeURIStringForLoom")(a, this.$2);
        var b = a.indexOf("?");
        return b == -1 ? a : a.substring(0, b);
      };
      b.loomTraceWillEnd = function () {
        var a = this,
          b = this.$1;
        if (b != null) {
          var d = b.startTime,
            e = c("performanceNowSinceAppStart")() + this.$3.appStart;
          window.performance
            .getEntriesByType("resource")
            .filter(function (b) {
              return (
                b.startTime < b.responseEnd &&
                b.startTime + a.$3.appStart >= d &&
                b.responseEnd + a.$3.appStart <= e
              );
            })
            .forEach(function (f, c) {
              var d = f.startTime + a.$3.appStart,
                e = f.responseEnd + a.$3.appStart,
                g = a.$5(f.name),
                b = h(f.initiatorType, g);
              a.$4({
                entry: f,
                resourceName: g,
                resourceId: c,
                resourceType: b,
                startTime: d,
                endTime: e,
              });
            });
          b = window.performance.getEntriesByType("navigation")[0];
          b =
            typeof PerformanceNavigationTiming !== "undefined" &&
            b instanceof PerformanceNavigationTiming
              ? b
              : null;
          if (
            b != null &&
            (b.responseEnd === 0 || b.responseEnd + this.$3.appStart >= d)
          ) {
            var f = "document",
              g = -1,
              i = d > this.$3.appStart ? d : this.$3.appStart,
              j = b.responseEnd === 0 ? e : b.responseEnd + this.$3.appStart;
            this.$4({
              entry: b,
              resourceName: this.$5(location.href),
              resourceId: g,
              resourceType: f,
              startTime: i,
              endTime: j,
            });
          }
        }
        this.$1 = null;
      };
      return a;
    })();
    a = {
      loomProviderId: "ResourceTiming",
      isSupported: function () {
        return i.isSupported();
      },
      getInstance: function (a, b, c) {
        return new i(a, b, c);
      },
    };
    g["default"] = a;
  },
  98
);
__d(
  "VisualCompletionLoomProvider",
  ["vc-tracker"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = (function () {
      a.isSupported = function () {
        return !0;
      };
      function a(a, b, d) {
        var e = this;
        this.$3 = function (a) {
          var b = e.$1;
          if (
            b != null &&
            a != null &&
            a.startTime + e.$2.appStart >= b.startTime
          ) {
            var c = new Map();
            a.elements.forEach(function (a) {
              var b;
              c.set(
                a.timestamp,
                ((b = c.get(a.timestamp)) != null ? b : 0) + a.pixels
              );
            });
            Array.from(c.entries())
              .sort(function (a, b) {
                return a[0] - b[0];
              })
              .reduce(function (c, d) {
                var f = d[0];
                d = d[1];
                c = c + d;
                b.buffer.addEvent(
                  {
                    progress: c / a.paintedPixels,
                    type: "VISUAL_COMPLETION_PROGRESS",
                  },
                  f + e.$2.appStart
                );
                return c;
              }, 0);
            e.$4(
              b,
              a,
              a.elements.filter(function (a) {
                return a.parent == null;
              }),
              0
            );
          }
        };
        this.$1 = a;
        c("vc-tracker").VisualCompletionTraceObserver.subscribe(this.$3);
        this.$2 = d;
      }
      var b = a.prototype;
      b.$4 = function (a, b, c, d, e) {
        var f = this;
        e === void 0 && (e = null);
        c.slice()
          .sort(function (a, b) {
            return a.timestamp - b.timestamp;
          })
          .forEach(function (c) {
            var g = c.rectangle,
              h =
                c.type === "component" || e == null
                  ? c.timestamp
                  : Math.max(c.timestamp, e.timestamp);
            a.buffer.addEvent(
              {
                depth: d,
                elementType: c.type,
                height: Math.floor(g.bottom - g.top),
                mutationType: c.mutationType,
                lateMutationType: c.hadLateMutationUnexpected
                  ? "unexpected"
                  : c.hadLateMutationExpected
                  ? "expected"
                  : void 0,
                type: "VISUAL_COMPLETION_RECT",
                width: Math.floor(g.right - g.left),
                x: Math.floor(g.left),
                y: Math.floor(g.top),
              },
              h + f.$2.appStart
            );
            c.children.length && f.$4(a, b, c.children, d + 1, c);
          });
      };
      b.loomTraceWillEnd = function () {
        c("vc-tracker").VisualCompletionTraceObserver.unsubscribe(this.$3),
          (this.$1 = null);
      };
      return a;
    })();
    a = {
      getInstance: function (a, b, c) {
        return new h(a, b, c);
      },
      isSupported: function () {
        return h.isSupported();
      },
      loomProviderId: "VisualCompletion",
    };
    g["default"] = a;
  },
  98
);
__d(
  "WebLoomEventBuffer",
  ["performanceNowSinceAppStart"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a() {
        this.$1 = [];
      }
      var b = a.prototype;
      b.addEvent = function (a, b) {
        this.$1.push({
          event: a,
          timestamp: (a = b) != null ? a : c("performanceNowSinceAppStart")(),
        });
      };
      b.flushEvents = function () {
        return this.$1;
      };
      return a;
    })();
    g.WebLoomEventBuffer = a;
  },
  98
);
__d(
  "WebLoomSampling",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b, c, d) {
      b =
        b === "QPL"
          ? a.samplingConfig.adaptive_config.qpl
          : a.samplingConfig.adaptive_config.interactions;
      a = d != null ? c + "." + d : "" + c;
      d = b.events[a];
      if (d != null) return d;
      d = (a = b.modules[(c >> 16) & 65535]) != null ? a : 0;
      return d;
    }
    f.getSampleRate = a;
  },
  66
);
__d(
  "WebLoomSerializer",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function g() {
      return !window.Uint8Array || !window.btoa ? !1 : !0;
    }
    function a(a, b, c, d) {
      c = c.flushEvents();
      if (!g()) return null;
      var e = b.start_time_us,
        f = b.end_time_us,
        h = e / 1e3,
        i = f / 1e3;
      if (d != null) {
        var j = h - d.stats.timeOrigin,
          k = i - d.stats.timeOrigin;
        d.trace.samples = d.trace.samples.filter(function (a) {
          return a.timestamp >= j && a.timestamp <= k;
        });
      }
      var l = JSON.stringify(b) + "\n{}\n" + JSON.stringify(d || null) + "\n",
        m = 0;
      c.forEach(function (a) {
        var b = Math.round(a.timestamp * 1e3);
        if (b < e || b > f) return;
        var c = b - m;
        m = b;
        b = a.event;
        a = [c, b.type];
        switch (b.type) {
          case "QPL_ANNOTATION":
            a.push(b.markerId);
            a.push(b.instanceKey);
            a.push(b.annotationKey);
            a.push(b.annotationValue);
            break;
          case "QPL_START":
            a.push(b.markerId);
            a.push(b.instanceKey);
            break;
          case "QPL_END":
            a.push(b.markerId);
            a.push(b.instanceKey);
            a.push(b.action);
            break;
          case "QPL_POINT":
            a.push(b.markerId);
            a.push(b.instanceKey);
            a.push(b.name);
            b.data != null && a.push(b.data);
            break;
          case "RESOURCE_TIMING_START":
            a.push(b.resourceType);
            a.push(b.resourceId);
            a.push(b.resourceName);
            a.push(b.encodedSize);
            a.push(b.decodedSize);
            a.push(b.transferSize);
            break;
          case "RESOURCE_TIMING_END":
            a.push(b.resourceType);
            a.push(b.resourceId);
            break;
          case "RESOURCE_TIMING_POINT":
            a.push(b.resourceType);
            a.push(b.resourceId);
            a.push(b.pointName);
            break;
          case "INTERACTION_TRACE_START":
            a.push(b.traceId);
            a.push(b.execUnitName);
            a.push(b.blockName);
            a.push(b.blockType);
            a.push(b.traceType);
            break;
          case "INTERACTION_TRACE_END":
            a.push(b.traceId);
            a.push(b.execUnitName);
            a.push(b.blockName);
            a.push(b.blockType);
            a.push(b.traceType);
            a.push(b.blockAnnotations);
            break;
          case "INTERACTION_TRACE_POINT":
            a.push(b.traceId);
            a.push(b.execUnitName);
            a.push(b.blockName);
            a.push(b.pointName);
            a.push(b.pointAnnotations);
            break;
          case "VISUAL_COMPLETION_RECT":
            a.push(b.elementType);
            a.push(b.depth);
            a.push(b.x);
            a.push(b.y);
            a.push(b.width);
            a.push(b.height);
            a.push(b.mutationType);
            a.push(b.lateMutationType);
            break;
          case "VISUAL_COMPLETION_PROGRESS":
            a.push(b.progress);
            break;
          case "JS_SCHEDULER_QUEUE":
            a.push(b.priority);
            a.push(b.queueSize);
            break;
        }
        l += JSON.stringify(a) + "\n";
      });
      return a.compressStringToSnappy(l);
    }
    f.isSupported = g;
    f.serialize = a;
  },
  66
);
__d(
  "WebLoomCore",
  [
    "InteractionTracingLoomProvider",
    "Promise",
    "QPLEvent",
    "QPLLoomProvider",
    "ResourceTimingLoomProvider",
    "VisualCompletionLoomProvider",
    "WebLoomEventBuffer",
    "WebLoomSampling",
    "WebLoomSerializer",
    "addAnnotations",
    "mapObject",
    "one-trace",
    "performanceNowSinceAppStart",
    "recoverableViolation",
    "regeneratorRuntime",
    "uuidv4",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = new Set(["InteractionTracing"]);
    a = (function () {
      function a(a, b) {
        (this.$1 = a),
          (this.$2 = b),
          (this.$7 = [
            c("InteractionTracingLoomProvider"),
            c("VisualCompletionLoomProvider"),
            c("ResourceTimingLoomProvider"),
            c("QPLLoomProvider"),
          ]),
          (this.$5 = new Set(
            this.$7.map(function (a) {
              return a.loomProviderId;
            })
          )),
          (this.$6 = new Set(
            this.$7.map(function (a) {
              return a.loomProviderId;
            })
          )),
          (this.$3 = new Map()),
          (this.$4 = new Map()),
          (this.$8 = d("WebLoomSerializer").isSupported()),
          (this.$9 = !1),
          (this.$10 = 1),
          (this.$11 = new Map()),
          (this.$12 = c("uuidv4")()),
          (this.$13 = 1);
      }
      var e = a.prototype;
      e.getNextSequenceNumber = function () {
        var a = this.$13;
        this.$13++;
        return a;
      };
      e.getSessionId = function () {
        return this.$12;
      };
      e.getActiveTraces = function () {
        return this.$3;
      };
      e.addProvider = function (a, b) {
        b === void 0 && (b = !0),
          this.$6.has(a.loomProviderId) ||
            (this.$7.push(a), this.$6.add(a.loomProviderId)),
          b && !this.$5.has(a.loomProviderId) && this.$5.add(a.loomProviderId);
      };
      e.addStatusListener = function (a) {
        var b = this,
          c = this.$10++;
        this.$11.set(c, a);
        return {
          dispose: function () {
            b.$11["delete"](c);
          },
        };
      };
      e.maybeStartTraceForInteraction = function (a, b, c, e, f) {
        c = d("QPLEvent").getMarkerId(c);
        var g = d("WebLoomSampling").getSampleRate(
          this.$1,
          "INTERACTION",
          c,
          e
        );
        if (!this.$2.Random.coinflip(g)) return null;
        f = f + this.$1.appStart;
        b = {
          interaction_class: b,
          interaction_id: a,
          qpl_marker_id: "" + c,
          sample_rate: g,
          trace_policy: e,
          type: "INTERACTION",
        };
        return this.startTrace(a, b, f, this.$1.useLiteTracing ? h : void 0);
      };
      e.endTraceForInteraction = function (a, b, d) {
        var e = a.traceId,
          f = babelHelpers["extends"]({}, null);
        for (var g in a.annotations)
          for (var h in a.annotations[g]) f[h] = a.annotations[g][h];
        f.qpl_action = b;
        h = c("mapObject")(a.tagSet, function (a) {
          return Array.from(a);
        });
        g = a.completed;
        b =
          (b = a.markerPoints.visuallyComplete) == null ? void 0 : b.timestamp;
        a = (a = a.markerPoints.logVC) == null ? void 0 : a.timestamp;
        a = Math.max(
          (g = g) != null ? g : 0,
          (g = b) != null ? g : 0,
          (b = a) != null ? b : 0,
          (g = d) != null ? g : 0
        );
        b = a > 0 ? a : c("performanceNowSinceAppStart")();
        d = b + this.$1.appStart;
        return this.endTrace(e, d, f, h);
      };
      e.startTrace = function (a, b, e, f) {
        var g = this;
        f === void 0 && (f = this.$5);
        if (!this.$8) return null;
        if (this.$3.has(a)) {
          c("recoverableViolation")(
            "Already running trace for triggerId: " + a,
            "web_loom"
          );
          return null;
        }
        var h = this.$13++,
          i = {
            buffer: new (d("WebLoomEventBuffer").WebLoomEventBuffer)(),
            triggerId: a,
            triggerInfo: b,
            startTime: e,
            sequenceNumber: h,
          },
          j = new Set(),
          k = [];
        this.$7.forEach(function (a) {
          f.has(a.loomProviderId) &&
            a.isSupported() &&
            (k.push(a.getInstance(i, g.$2, g.$1)), j.add(a.loomProviderId));
        });
        var l = "STARTED";
        this.$3.set(a, {
          traceContext: i,
          providerInstances: k,
          status: l,
          startURI: window.location.href,
        });
        this.$11.forEach(function (a) {
          return a(i, l);
        });
        var m = this.$12 + "_" + h;
        c("one-trace") &&
          (this.$14 = c("one-trace").subscribe("trace-start", function (a) {
            (a.traceType === "LONGTASK" || a.traceType === "INPUT_DELAY") &&
              c("addAnnotations")(a.annotations, {
                string: { loomRefId: m },
                string_array: { loomProviders: Array.from(j) },
              });
          }));
        return { traceReferenceId: m, loomProviders: j };
      };
      e.endTrace = function (a, e, f, g) {
        var h = this,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q;
        return b("regeneratorRuntime").async(
          function (r) {
            while (1)
              switch ((r.prev = r.next)) {
                case 0:
                  i = this.$3.get(a);
                  if (i) {
                    r.next = 4;
                    break;
                  }
                  c("recoverableViolation")(
                    "No trace running for triggerId: " + a,
                    "web_loom"
                  );
                  return r.abrupt("return", !1);
                case 4:
                  j = i.traceContext.sequenceNumber;
                  this.$3["delete"](a);
                  this.$4.set(j, i);
                  this.$15(i, "END_PENDING");
                  k = [];
                  i.providerInstances.forEach(function (a) {
                    a = a.loomTraceWillEnd();
                    a && k.push(a);
                  });
                  this.$14 && this.$14();
                  l = window.location.href;
                  r.prev = 12;
                  r.next = 15;
                  return b("regeneratorRuntime").awrap(b("Promise").all(k));
                case 15:
                  m = this.$1.perfXData;
                  n = i.traceContext.triggerInfo;
                  o = {
                    app_id: this.$1.appId,
                    start_time_us: Math.round(i.traceContext.startTime * 1e3),
                    end_time_us: Math.round(e * 1e3),
                    trigger_id: i.traceContext.triggerId,
                    trigger_info: n,
                    trigger_metadata: f,
                    trigger_metadata_sets: g,
                    client_push_phase: m.client_push_phase,
                    device_num_cores: m.num_cores,
                    device_ram_bytes:
                      m.ram_gb != null ? m.ram_gb * 1073741824 : null,
                    is_rtl: m.isRTL,
                    locale: m.locale,
                    network_effective_connection_type:
                      m.effective_connection_type,
                    network_downlink_bps:
                      m.downlink_megabits != null &&
                      m.downlink_megabits * 1e6 < 1e20
                        ? m.downlink_megabits * 1e6
                        : null,
                    network_rtt_ms: m.rtt_ms,
                    client_rev: this.$1.clientRev,
                    server_rev: this.$1.serverRev,
                    spin_mode: this.$1.spinMode,
                    start_uri: i.startURI,
                    end_uri: l,
                  };
                  p = d("WebLoomSerializer").serialize(
                    this.$2,
                    o,
                    i.traceContext.buffer,
                    i.traceContext.jsSelfProfilerData
                  );
                  p != null
                    ? ((q = {
                        trace: p,
                        session_id: this.$12,
                        sequence_number: i.traceContext.sequenceNumber,
                        qpl_marker_id: n.qpl_marker_id,
                        trace_policy: n.trace_policy,
                        sample_rate: n.sample_rate,
                      }),
                      this.$2.Transport.post(q, {
                        onComplete: function () {
                          h.$15(i, "COMPLETE"), h.$4["delete"](j);
                        },
                        isHighPri: this.$9,
                      }),
                      this.$15(i, "UPLOAD_PENDING"))
                    : (this.$15(i, "COMPLETE"), this.$4["delete"](j));
                  r.next = 26;
                  break;
                case 22:
                  (r.prev = 22),
                    (r.t0 = r["catch"](12)),
                    this.$15(i, "ERROR"),
                    this.$4["delete"](j);
                case 26:
                  return r.abrupt("return", !0);
                case 27:
                case "end":
                  return r.stop();
              }
          },
          null,
          this,
          [[12, 22]]
        );
      };
      e.flush = function (a) {
        var b = this,
          c = new Set(),
          d = new Set();
        this.$4.forEach(function (a) {
          a.status === "END_PENDING"
            ? c.add(a.traceContext.sequenceNumber)
            : a.status === "UPLOAD_PENDING" &&
              d.add(a.traceContext.sequenceNumber);
        });
        if (c.size > 0)
          var e = this.addStatusListener(function (d) {
            c["delete"](d.sequenceNumber),
              c.size === 0 && (b.$2.Transport.flush(a, a), e.dispose());
          });
        else d.size > 0 ? this.$2.Transport.flush(a, a) : a && a();
      };
      e.setIsDevToolsConnected = function (a) {
        this.$9 = a;
      };
      e.$15 = function (a, b) {
        (a.status = b),
          this.$11.forEach(function (b) {
            return b(a.traceContext, a.status);
          });
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "web-loom",
  ["WebLoomCore"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g.WebLoomCore = c("WebLoomCore");
  },
  98
);
__d(
  "WebLoom",
  [
    "CurrentUser",
    "Env",
    "PerfXSharedFields",
    "QuickPerformanceLogger",
    "Random",
    "SiteData",
    "SnappyCompressUtil",
    "URI",
    "UserAgent",
    "WebLoomBanzaiTransport",
    "WebLoomConfig",
    "cr:1094133",
    "cr:955714",
    "gkx",
    "performanceNavigationStart",
    "web-loom",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      QuickPerformanceLogger: c("QuickPerformanceLogger"),
      Random: c("Random"),
      Transport: c("WebLoomBanzaiTransport"),
      URI: c("URI"),
      isBrowser: c("UserAgent").isBrowser,
      compressStringToSnappy: c("SnappyCompressUtil").compressStringToSnappy,
    };
    e = {
      appStart: c("performanceNavigationStart")(),
      appId: c("CurrentUser").getAppID(),
      sanitizeURIs: c("gkx")("1787898"),
      samplingConfig: c("WebLoomConfig"),
      clientRev: c("SiteData").client_revision,
      serverRev: c("SiteData").server_revision,
      spinMode: c("SiteData").spin,
      useLiteTracing: c("gkx")("4240"),
      perfXData: c("PerfXSharedFields").getCommonData(),
    };
    f = new (d("web-loom").WebLoomCore)(e, a);
    b("cr:1094133") && f.addProvider(b("cr:1094133"));
    b("cr:955714") &&
      c("Env").jssp_header_sent &&
      f.addProvider(b("cr:955714"));
    d = f;
    g["default"] = d;
  },
  98
);
__d(
  "getReactComponentStackFromDOMElement_THIS_CAN_BREAK",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function g(a) {
      var b = Object.keys(a).find(function (a) {
        return a.startsWith("__reactFiber$");
      });
      return b == null ? null : a[b];
    }
    function h(a) {
      var b;
      b = (b = a.displayName) != null ? b : a.name;
      if (b == null) return null;
      a = b.match(/.*\[from (.*)\.react\]/);
      return (a && a[1]) || b;
    }
    function a(a) {
      try {
        var b = [];
        a = g(a);
        while (a) {
          var c = a.type;
          if (c == null || typeof c === "string") {
            a = a["return"];
            continue;
          }
          var d = h(c);
          d == null && c.render != null && (d = h(c.render));
          d != null && d !== "" && b.push(d);
          a = a["return"];
        }
        return b;
      } catch (a) {
        return null;
      }
    }
    f["default"] = a;
  },
  66
);
__d(
  "FBInteractionTracingDependencies",
  [
    "HeroBootloadPerfStore",
    "QuickPerformanceLogger",
    "WebLoom",
    "cr:3976",
    "cr:449",
    "getReactComponentStackFromDOMElement_THIS_CAN_BREAK",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getReactComponentStackFromDOMElement: c(
        "getReactComponentStackFromDOMElement_THIS_CAN_BREAK"
      ),
      HeroBootloadPerfStore: {
        addStaticResourcesStats: d("HeroBootloadPerfStore")
          .addStaticResourcesStats,
      },
      QuickPerformanceLogger: c("QuickPerformanceLogger"),
      UserTimingUtils: b("cr:3976"),
      VCTracker: b("cr:449"),
      WebLoom: c("WebLoom"),
    };
    g["default"] = a;
  },
  98
);
