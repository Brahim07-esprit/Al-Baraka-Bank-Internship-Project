/*FB_PKG_DELIM*/

__d(
  "Newline.react",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = "br";
    f["default"] = a;
  },
  66
);
__d(
  "LiveTimer",
  [
    "csx",
    "cx",
    "fbt",
    "CSS",
    "DOM",
    "ODS",
    "Run",
    "ServerTime",
    "TimeSlice",
    "clearTimeout",
    "gkx",
    "killswitch",
    "setTimeout",
    "setTimeoutAcrossTransitions",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    var j = 1e3,
      k = 60,
      l = 3600;
    a = 43200;
    var m = 86400,
      n = 60,
      o = 24,
      p = 7,
      q = 365,
      r = 6e4,
      s = function (a) {
        a.text === "" && (a.text = null);
        return a;
      },
      t = [],
      u = null,
      v = !0,
      w = {
        restart: function (a) {
          b("ServerTime").update(a * 1e3), this.updateTimeStamps();
        },
        registerLiveTimestamp: function (a) {
          if (!b("killswitch")("GHL_LIVE_TIMER_SERVER_REGISTERED_TIMESTAMP")) {
            t.length === 0 &&
              (w.delayUpdatingServerRegisteredLiveTimestamps(),
              w.cleanupServerRegisteredLiveTimestampsOnLeave());
            var c = "";
            if (b("gkx")("837029")) {
              var d = w.render(a.serverTime, a.time, a.size);
              c = d != null ? String(d.text) : "";
            }
            t.push(babelHelpers["extends"]({}, a, { initialText: c }));
          }
        },
        delayUpdatingServerRegisteredLiveTimestamps: function () {
          (v = !0),
            b("setTimeout")(function () {
              (v = !1), w.startLoop(0);
            }, 30 * j);
        },
        cleanupServerRegisteredLiveTimestampsOnLeave: function () {
          u != null &&
            (u = b("Run").onLeave(function () {
              (t.length = 0), (u = null);
            }));
        },
        getApproximateServerTime: function () {
          return b("ServerTime").get();
        },
        getServerTimeOffset: function () {
          return -1 * b("ServerTime").getSkew();
        },
        updateTimeStamps: function () {
          (this.timestamps = b("DOM").scry(
            document.body,
            "abbr.livetimestamp"
          )),
            this.startLoop(r);
        },
        addTimeStamps: function (a) {
          if (!a) return;
          this.timestamps = this.timestamps || [];
          if (
            b("DOM").isNodeOfType(a, "abbr") &&
            b("CSS").hasClass(a, "livetimestamp")
          )
            this.timestamps.push(a);
          else {
            a = b("DOM").scry(a, "abbr.livetimestamp");
            for (var c = 0; c < a.length; ++c) this.timestamps.push(a[c]);
          }
          this.startLoop(0);
        },
        removeTimestamp: function (a) {
          if (!this.timestamps || !a) return;
          a = this.timestamps.indexOf(a);
          a > -1 && this.timestamps.splice(a, 1);
        },
        startLoop: function (a) {
          this.stop(), this.createTimeout(a);
        },
        createTimeout: function (a) {
          var c = this;
          this.timeout = b("setTimeoutAcrossTransitions")(
            b("TimeSlice").guard(
              function () {
                c.loop();
              },
              "LiveTimer.loop",
              { propagationType: b("TimeSlice").PropagationType.EXECUTION }
            ),
            a
          );
        },
        stop: function () {
          b("clearTimeout")(this.timeout);
        },
        loop: function (a) {
          var c = this;
          a && this.updateTimeStamps();
          var d = Math.floor(b("ServerTime").get() / j),
            e = -1;
          this.timestamps &&
            this.timestamps.forEach(function (a) {
              var f = a.getAttribute("data-utime"),
                g = a.getAttribute("data-shorten"),
                h = a.getAttribute("data-minimize");
              g = c.renderRelativeTime(d, f, g, h);
              if (g.text) {
                h = b("DOM").scry(a, ".timestampContent")[0];
                h == null
                  ? b("DOM").setContent(
                      a,
                      b("DOM").create(
                        "span",
                        { class: "timestampContent" },
                        g.text
                      )
                    )
                  : h.textContent !== g.text.toString() &&
                    (h.textContent = g.text);
                h = c.renderRelativeTime(d, f, !1, !1, !0);
                h.text && b("DOM").setAttributes(a, { "aria-label": h.text });
              }
              g.next != -1 && (g.next < e || e == -1) && (e = g.next);
            });
          !b("killswitch")("GHL_LIVE_TIMER_SERVER_REGISTERED_TIMESTAMP") &&
            !v &&
            t.forEach(function (a) {
              var f = c.render(d, a.time, a.size);
              f.next != -1 && (f.next < e || e == -1) && (e = f.next);
              if (b("gkx")("837029")) {
                var g = String(f.text) === a.initialText;
                b("ODS").bumpEntityKey(
                  2966,
                  "feed_ads",
                  "LiveTimer.smart_update_" + String(g)
                );
                if (g) return;
              }
              b("DOM").setContent(a.ref, f.text);
            });
          if (e != -1) {
            a = Math.max(r, e * j);
            this.createTimeout(a);
          }
        },
        renderRelativeTime: function (a, b, c, d, e) {
          var f = { text: "", next: -1 };
          if (a - b > m && !e) return f;
          e = a - b;
          a = Math.floor(e / k);
          b = Math.floor(a / n);
          var g = Math.floor(b / o),
            h = Math.floor(g / p),
            j = Math.floor(g / q);
          if (a < 1) {
            d
              ? ((f.text = i._("1 min")), (f.next = 20 - (e % 20)))
              : c
              ? ((f.text = i._("\u00c0 l\u2019instant")),
                (f.next = 20 - (e % 20)))
              : ((f.text = i._("il y a quelques secondes")),
                (f.next = k - (e % k)));
            return f;
          }
          if (b < 1) {
            d
              ? (f.text = i._({ "*": "{number} min" }, [
                  i._param("number", a, [0]),
                ]))
              : c && a == 1
              ? (f.text = i._("1 min"))
              : c
              ? (f.text = i._({ "*": "{number} min" }, [
                  i._param("number", a, [0]),
                ]))
              : (f.text = i._(
                  {
                    "*": "Il y a {number} minutes",
                    4: "Il y a {number} minute",
                    _1: "il y a environ une minute",
                  },
                  [i._plural(a, "number")]
                ));
            f.next = k - (e % k);
            return f;
          }
          b < 11 && (f.next = l - (e % l));
          if (b < 24) {
            d
              ? (f.text = i._({ "*": "{number} h" }, [
                  i._param("number", b, [0]),
                ]))
              : c && b == 1
              ? (f.text = i._("1 h"))
              : c
              ? (f.text = i._({ "*": "{number} h" }, [
                  i._param("number", b, [0]),
                ]))
              : (f.text = i._(
                  {
                    "*": "Il y a {number} heures",
                    _1: "il y a environ une heure",
                  },
                  [i._plural(b, "number")]
                ));
            return f;
          }
          if (g < 7) {
            d
              ? (f.text = i._({ "*": "{number} j" }, [
                  i._param("number", g, [0]),
                ]))
              : (f.text =
                  g === 1
                    ? i._("il y a 1 jour")
                    : i._({ "*": "il y a {number} jours" }, [
                        i._param("number", g, [0]),
                      ]));
            return f;
          }
          if (g >= 7 && g < 365) {
            d
              ? (f.text = i._({ "*": "{number} sem" }, [
                  i._param("number", h, [0]),
                ]))
              : (f.text =
                  h === 1
                    ? i._("il y a une semaine")
                    : i._({ "*": "il y a {number} semaines" }, [
                        i._param("number", h, [0]),
                      ]));
            return f;
          }
          d
            ? (f.text = i._({ "*": "{number} ans", 4: "{number} an" }, [
                i._param("number", j, [0]),
              ]))
            : (f.text =
                j === 1
                  ? i._("il y a un an")
                  : i._({ "*": "Il y a {number} ans" }, [
                      i._param("number", j, [0]),
                    ]));
          return f;
        },
        renderRelativeTimeToServer: function (a, c, d, e) {
          return this.renderRelativeTime(
            Math.floor(b("ServerTime").get() / j),
            a,
            c,
            d,
            e
          );
        },
        render: function (a, b, c, d) {
          d === void 0 && (d = !1);
          return s(
            w.renderRelativeTime(a, b, c === "short", c === "minimal", d)
          );
        },
        renderNow: function (a, b, c) {
          c === void 0 && (c = !1);
          return s(
            w.renderRelativeTimeToServer(a, b === "short", b === "minimal", c)
          );
        },
        CONSTS: {
          MS_IN_SEC: j,
          SEC_IN_MIN: k,
          SEC_IN_HOUR: l,
          SEC_IN_12_HOUR: a,
          SEC_IN_24_HOUR: m,
          MIN_IN_HOUR: n,
          HEARTBEAT: r,
        },
      };
    e.exports = w;
  },
  null
);
__d(
  "fbs",
  ["fbt", "invariant", "FbtHooks", "FbtPureStringResult"],
  function (a, b, c, d, e, f, g, h) {
    var i;
    a = babelHelpers["extends"]({}, g, {
      _param: function (a, c, d) {
        typeof c === "string" ||
          c instanceof b("FbtPureStringResult") ||
          h(0, 11709, c, typeof c);
        return g._param(a, c, d);
      },
      _plural: function (a, c, d) {
        d == null ||
          typeof d === "string" ||
          d instanceof b("FbtPureStringResult") ||
          h(0, 47119, d, typeof d);
        return g._plural(a, c, d);
      },
      _wrapContent: function (a, c, d, e) {
        a = typeof a === "string" ? [a] : a;
        var f = (i || (i = b("FbtHooks"))).getErrorListener({
          hash: d,
          translation: c,
        });
        return i.getFbsResult({
          contents: a,
          errorListener: f,
          extraOptions: e,
          patternHash: d,
          patternString: c,
        });
      },
    });
    e.exports = a;
  },
  null
);
__d(
  "formatNumber",
  ["fbs", "intlNumUtils"],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, c) {
      return b("intlNumUtils").formatNumber(a, c);
    }
    function g(a, c) {
      return b("fbs")._({ "*": "{number}+" }, [
        b("fbs")._param(
          "number",
          b("intlNumUtils").formatNumberWithThousandDelimiters(a, c),
          [0, a]
        ),
      ]);
    }
    function h(a, c) {
      return b("fbs")._({ "*": "\u003C{number}" }, [
        b("fbs")._param(
          "number",
          b("intlNumUtils").formatNumberWithThousandDelimiters(a, c),
          [0, a]
        ),
      ]);
    }
    function c(a, c, d) {
      return a > c
        ? g(c, d)
        : b("intlNumUtils").formatNumberWithThousandDelimiters(a, d);
    }
    function d(a, c, d) {
      return a < c
        ? h(c, d)
        : b("intlNumUtils").formatNumberWithThousandDelimiters(a, d);
    }
    a.withThousandDelimiters =
      b("intlNumUtils").formatNumberWithThousandDelimiters;
    a.withMaxLimit = c;
    a.withMinLimit = d;
    e.exports = a;
  },
  null
);
