/*FB_PKG_DELIM*/

__d(
  "LocationStoryTypedLogger",
  ["Banzai", "GeneratedLoggerUtils", "nullthrows"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a() {
        this.$1 = {};
      }
      var c = a.prototype;
      c.log = function (a) {
        b("GeneratedLoggerUtils").log(
          "logger:LocationStoryLoggerConfig",
          this.$1,
          b("Banzai").BASIC,
          a
        );
      };
      c.logVital = function (a) {
        b("GeneratedLoggerUtils").log(
          "logger:LocationStoryLoggerConfig",
          this.$1,
          b("Banzai").VITAL,
          a
        );
      };
      c.logImmediately = function (a) {
        b("GeneratedLoggerUtils").log(
          "logger:LocationStoryLoggerConfig",
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
      c.setAnalyticsEvent = function (a) {
        this.$1.analytics_event = a;
        return this;
      };
      c.setAttachedStoryAttachmentType = function (a) {
        this.$1.attached_story_attachment_type = a;
        return this;
      };
      c.setClickDestination = function (a) {
        this.$1.click_destination = a;
        return this;
      };
      c.setClickTarget = function (a) {
        this.$1.click_target = a;
        return this;
      };
      c.setComposerSource = function (a) {
        this.$1.composer_source = a;
        return this;
      };
      c.setCtaType = function (a) {
        this.$1.cta_type = a;
        return this;
      };
      c.setEvent = function (a) {
        this.$1.event = a;
        return this;
      };
      c.setMInterface = function (a) {
        this.$1.m_interface = a;
        return this;
      };
      c.setMessage = function (a) {
        this.$1.message = a;
        return this;
      };
      c.setPlaceID = function (a) {
        this.$1.place_id = a;
        return this;
      };
      c.setStoryAttachmentType = function (a) {
        this.$1.story_attachment_type = a;
        return this;
      };
      c.setStoryAuthorID = function (a) {
        this.$1.story_author_id = a;
        return this;
      };
      c.setStoryID = function (a) {
        this.$1.story_id = a;
        return this;
      };
      c.setTargetID = function (a) {
        this.$1.target_id = a;
        return this;
      };
      c.setTimeToLoad = function (a) {
        this.$1.time_to_load = a;
        return this;
      };
      c.setViewDuration = function (a) {
        this.$1.view_duration = a;
        return this;
      };
      c.updateExtraData = function (a) {
        a = b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));
        b("GeneratedLoggerUtils").checkExtraDataFieldNames(a, g);
        this.$1 = babelHelpers["extends"]({}, this.$1, a);
        return this;
      };
      c.addToExtraData = function (a, b) {
        var c = {};
        c[a] = b;
        return this.updateExtraData(c);
      };
      return a;
    })();
    var g = {
      analytics_event: !0,
      attached_story_attachment_type: !0,
      click_destination: !0,
      click_target: !0,
      composer_source: !0,
      cta_type: !0,
      event: !0,
      m_interface: !0,
      message: !0,
      place_id: !0,
      story_attachment_type: !0,
      story_author_id: !0,
      story_id: !0,
      target_id: !0,
      time_to_load: !0,
      view_duration: !0,
    };
    f["default"] = a;
  },
  66
);
__d(
  "LocalTriggerEventsTypedLogger",
  ["Banzai", "GeneratedLoggerUtils", "nullthrows"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a() {
        this.$1 = {};
      }
      var c = a.prototype;
      c.log = function (a) {
        b("GeneratedLoggerUtils").log(
          "logger:LocalTriggerEventsLoggerConfig",
          this.$1,
          b("Banzai").BASIC,
          a
        );
      };
      c.logVital = function (a) {
        b("GeneratedLoggerUtils").log(
          "logger:LocalTriggerEventsLoggerConfig",
          this.$1,
          b("Banzai").VITAL,
          a
        );
      };
      c.logImmediately = function (a) {
        b("GeneratedLoggerUtils").log(
          "logger:LocalTriggerEventsLoggerConfig",
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
      c.setAttachmentType = function (a) {
        this.$1.attachment_type = a;
        return this;
      };
      c.setAuthorType = function (a) {
        this.$1.author_type = a;
        return this;
      };
      c.setCategoryType = function (a) {
        this.$1.category_type = a;
        return this;
      };
      c.setClickDestination = function (a) {
        this.$1.click_destination = a;
        return this;
      };
      c.setEntryPoint = function (a) {
        this.$1.entry_point = a;
        return this;
      };
      c.setEventName = function (a) {
        this.$1.event_name = a;
        return this;
      };
      c.setExperimentCondition = function (a) {
        this.$1.experiment_condition = a;
        return this;
      };
      c.setExperimentName = function (a) {
        this.$1.experiment_name = a;
        return this;
      };
      c.setMInterface = function (a) {
        this.$1.m_interface = a;
        return this;
      };
      c.setObjectType = function (a) {
        this.$1.object_type = a;
        return this;
      };
      c.setPivotType = function (a) {
        this.$1.pivot_type = a;
        return this;
      };
      c.setPlaceID = function (a) {
        this.$1.place_id = a;
        return this;
      };
      c.setPosition = function (a) {
        this.$1.position = a;
        return this;
      };
      c.setPostID = function (a) {
        this.$1.post_id = a;
        return this;
      };
      c.setPostType = function (a) {
        this.$1.post_type = a;
        return this;
      };
      c.setUnitDeliveryMechanism = function (a) {
        this.$1.unit_delivery_mechanism = a;
        return this;
      };
      c.updateExtraData = function (a) {
        a = b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));
        b("GeneratedLoggerUtils").checkExtraDataFieldNames(a, g);
        this.$1 = babelHelpers["extends"]({}, this.$1, a);
        return this;
      };
      c.addToExtraData = function (a, b) {
        var c = {};
        c[a] = b;
        return this.updateExtraData(c);
      };
      return a;
    })();
    var g = {
      attachment_type: !0,
      author_type: !0,
      category_type: !0,
      click_destination: !0,
      entry_point: !0,
      event_name: !0,
      experiment_condition: !0,
      experiment_name: !0,
      m_interface: !0,
      object_type: !0,
      pivot_type: !0,
      place_id: !0,
      position: !0,
      post_id: !0,
      post_type: !0,
      unit_delivery_mechanism: !0,
    };
    f["default"] = a;
  },
  66
);
__d(
  "OrganicIntakeFormMutationUtilsMaybeTriggerFormMutation_facebookRelayOperation",
  [],
  function (a, b, c, d, e, f) {
    e.exports = "5175519632492283";
  },
  null
);
__d(
  "OrganicIntakeFormMutationUtilsMaybeTriggerFormMutation.graphql",
  [
    "OrganicIntakeFormMutationUtilsMaybeTriggerFormMutation_facebookRelayOperation",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        c = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType: "MaybeTriggerOrganicIntakeFormResponsePayload",
            kind: "LinkedField",
            name: "maybe_trigger_organic_intake_form",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "success_create",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "OrganicIntakeFormMutationUtilsMaybeTriggerFormMutation",
          selections: c,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "OrganicIntakeFormMutationUtilsMaybeTriggerFormMutation",
          selections: c,
        },
        params: {
          id: b(
            "OrganicIntakeFormMutationUtilsMaybeTriggerFormMutation_facebookRelayOperation"
          ),
          metadata: {},
          name: "OrganicIntakeFormMutationUtilsMaybeTriggerFormMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "OrganicIntakeFormMutationUtilsTriggerFormMutation_facebookRelayOperation",
  [],
  function (a, b, c, d, e, f) {
    e.exports = "4625520967558526";
  },
  null
);
__d(
  "OrganicIntakeFormMutationUtilsTriggerFormMutation.graphql",
  ["OrganicIntakeFormMutationUtilsTriggerFormMutation_facebookRelayOperation"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        c = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType: "TriggerOrganicIntakeFormResponsePayload",
            kind: "LinkedField",
            name: "trigger_organic_intake_form",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "success_create",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "OrganicIntakeFormMutationUtilsTriggerFormMutation",
          selections: c,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "OrganicIntakeFormMutationUtilsTriggerFormMutation",
          selections: c,
        },
        params: {
          id: b(
            "OrganicIntakeFormMutationUtilsTriggerFormMutation_facebookRelayOperation"
          ),
          metadata: {},
          name: "OrganicIntakeFormMutationUtilsTriggerFormMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "deepCompare",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function g(a, b) {
      if (a === b) return !0;
      if (!(a instanceof Object) || !(b instanceof Object)) return !1;
      if (a.constructor !== b.constructor) return !1;
      if (Array.isArray(a) && Array.isArray(b)) {
        if (a.length !== b.length) return !1;
        var c = {},
          d = 0;
        for (var e = 0, f = a.length; e < f; e++) {
          var h = d;
          for (var i = 0, j = b.length; i < j && h === d; i++) {
            if (c[i]) continue;
            g(a[e], b[i]) && ((c[i] = !0), d++);
          }
        }
        return d === a.length;
      } else {
        h = a;
        i = b;
        for (j in h) {
          if (!Object.prototype.hasOwnProperty.call(h, j)) continue;
          if (!Object.prototype.hasOwnProperty.call(i, j)) return !1;
          if (h[j] === i[j]) continue;
          if (typeof h[j] !== "object") return !1;
          if (!g(h[j], i[j])) return !1;
        }
        for (j in i)
          if (
            Object.prototype.hasOwnProperty.call(i, j) &&
            !Object.prototype.hasOwnProperty.call(h, j)
          )
            return !1;
      }
      return !0;
    }
    f["default"] = g;
  },
  66
);
__d(
  "BlueBar",
  ["csx", "CSS", "DOMQuery", "Style", "ge"],
  function (a, b, c, d, e, f, g, h) {
    var i = document,
      j = {};
    function k(a) {
      return d("DOMQuery").scry(i, a)[0];
    }
    function l(a, b) {
      return j[a] ? j[a] : (j[a] = k(b));
    }
    function a() {
      (i = c("ge")("blueBarDOMInspector") || document), (j = {});
    }
    function b() {
      var a = n();
      return !a
        ? !1
        : d("CSS").matchesSelector(a, "._5rmj") || c("Style").isFixed(a);
    }
    function m() {
      return l("bar", "div._1s4v");
    }
    function e() {
      return l("navRoot", "div._cx4") || m();
    }
    function n() {
      return l("maybeFixedRoot", "div._26aw");
    }
    function f() {
      return l("maybeFixedRootLoggedOut", "div._1pmx");
    }
    function h() {
      return l("maybeFixedRootLogin", "div._53jh");
    }
    a();
    g.hasFixedBlueBar = b;
    g.getBar = m;
    g.getNavRoot = e;
    g.getMaybeFixedRoot = n;
    g.getLoggedOutRoot = f;
    g.getNewLoggedOutRoot = h;
  },
  98
);
__d(
  "CalendarUtils",
  ["DateStrings", "LocalDate"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a, b, c, d) {
      var e = [],
        f = d.order;
      for (var g = 0; g < f.length; ++g)
        f[g] === "d" ? e.push(a) : f[g] === "m" ? e.push(b) : e.push(c);
      return e.join(d.separator);
    }
    function i(a, b) {
      var c, d, e;
      a = a.split(/[/.,\s-]+/);
      if (a.length < 3) return null;
      for (var f = 0; f < 3; ++f) {
        var g = a.shift();
        if (b[f] === "d") {
          c = parseInt(g, 10);
          if (isNaN(c) || c < 1) return null;
        } else if (b[f] === "m") {
          d = parseInt(g, 10);
          if (isNaN(d) || d < 1 || d > 12) return null;
        } else {
          e = parseInt(g, 10);
          if (e < 100 && e >= 0 && g.length == 2) {
            g = new Date().getFullYear();
            if (Math.abs(g / 100 - e) >= 2) {
              var h = e + Math.floor(g / 100) * 100;
              e = h > g + 4 ? h - 100 : h;
            }
          }
          if (isNaN(e) || e < 1e3) return null;
        }
      }
      if (!c || !d || !e) return null;
      g = new Date(e, d, 0).getDate();
      return isNaN(g) || g < c ? null : { day: c, month: d, year: e };
    }
    function a(a) {
      return h(
        d("DateStrings").getDayPlaceholder(),
        d("DateStrings").getMonthPlaceholder(),
        d("DateStrings").getYearPlaceholder(),
        a
      );
    }
    function b(a, b) {
      return h(a.getDayOfMonth(), a.getMonth(), a.getYear(), b);
    }
    function e(a, b) {
      return h(a.getDate(), a.getMonth() + 1, a.getFullYear(), b);
    }
    function f(a, b) {
      return h(a.getUTCDate(), a.getUTCMonth() + 1, a.getUTCFullYear(), b);
    }
    function j(a, b) {
      a = i(a, b);
      return !a ? !1 : new Date(a.year, a.month - 1, a.day);
    }
    function k(a, b) {
      return h(a.getDayOfMonth(), a.getMonth(), a.getYear(), b);
    }
    function l(a, b) {
      a = i(a, b);
      return a ? new (c("LocalDate"))(a.year, a.month, a.day) : null;
    }
    g.placeholderDateString = a;
    g.dateTimeToString = b;
    g.dateToString = e;
    g.utcDateToString = f;
    g.stringToDate = j;
    g.localDateToString = k;
    g.stringToLocalDate = l;
  },
  98
);
__d(
  "DatePickerRestraints",
  ["invariant"],
  function (a, b, c, d, e, f, g, h) {
    var i = function (a) {
      return a < 10 ? "0" + a : a.toString();
    };
    function a(a) {
      return function (b) {
        return b.getTime() < a.getTime();
      };
    }
    function b(a) {
      return function (b) {
        return b.getTime() >= a.getTime();
      };
    }
    function c(a) {
      return function (b) {
        return b.getTime() > a.getTime();
      };
    }
    function d(a) {
      return function (b) {
        return b.getTime() <= a.getTime();
      };
    }
    function e(a) {
      return function (b) {
        return a.indexOf(b.getUTCDay()) !== -1;
      };
    }
    function f(a) {
      return function (b) {
        return a.indexOf(b.getUTCDay()) === -1;
      };
    }
    function j(a) {
      for (var b = 0; b < a.length; b++) {
        var c = a[b];
        /^[0-9]{2}\/[0-9]{2}$/g.test(c) || h(0, 17351);
      }
      return function (b) {
        var c = i(b.getUTCMonth() + 1);
        b = i(b.getUTCDate());
        return !a.includes(c + "/" + b);
      };
    }
    function k(a, b) {
      var c = a instanceof Date && !isNaN(a.getTime());
      return c && b
        ? b.every(function (b) {
            return b(a);
          })
        : c;
    }
    g.enforceDateIsEarlierThan = a;
    g.enforceDateIsNoEarlierThan = b;
    g.enforceDateIsLaterThan = c;
    g.enforceDateIsNoLaterThan = d;
    g.enforceDayIsIncludedFromWeek = e;
    g.enforceDayIsExcludedFromWeek = f;
    g.enforceSpecificDateIsExcluded = j;
    g.isValidDate = k;
  },
  98
);
__d(
  "InputSelection",
  ["DOM", "Focus"],
  function (a, b, c, d, e, f, g) {
    function a(a) {
      try {
        if (typeof a.selectionStart === "number")
          return { start: a.selectionStart, end: a.selectionEnd };
      } catch (a) {
        return { start: 0, end: 0 };
      }
      if (!document.selection) return { start: 0, end: 0 };
      var b = document.selection.createRange();
      if (b.parentElement() !== a) return { start: 0, end: 0 };
      var d = a.value.length;
      if (c("DOM").isNodeOfType(a, "input"))
        return {
          start: -b.moveStart("character", -d),
          end: -b.moveEnd("character", -d),
        };
      else {
        var e = b.duplicate();
        e.moveToElementText(a);
        e.setEndPoint("StartToEnd", b);
        a = d - e.text.length;
        e.setEndPoint("StartToStart", b);
        return { start: d - e.text.length, end: a };
      }
    }
    function b(a, b, c) {
      b = b;
      c = c;
      c === void 0 && (c = b);
      if (document.selection) {
        if (a.tagName == "TEXTAREA") {
          var e = (a.value.slice(0, b).match(/\r/g) || []).length,
            f = (a.value.slice(b, c).match(/\r/g) || []).length;
          b -= e;
          c -= e + f;
        }
        e = a.createTextRange();
        e.collapse(!0);
        e.moveStart("character", b);
        e.moveEnd("character", c - b);
        e.select();
      } else
        (a.selectionStart = b),
          (a.selectionEnd = Math.min(c, a.value.length)),
          d("Focus").set(a);
    }
    g.get = a;
    g.set = b;
  },
  98
);
__d(
  "UTCUtils",
  ["DateConsts"],
  function (a, b, c, d, e, f, g) {
    var h = -1 * 7 * d("DateConsts").MS_PER_HOUR,
      i = -1 * 8 * d("DateConsts").MS_PER_HOUR;
    function a(a) {
      return Date.UTC(
        a.getFullYear(),
        a.getMonth(),
        a.getDate(),
        a.getHours(),
        a.getMinutes(),
        a.getSeconds(),
        a.getMilliseconds()
      );
    }
    function b(a) {
      return new Date(
        a.getUTCFullYear(),
        a.getUTCMonth(),
        a.getUTCDate(),
        a.getUTCHours(),
        a.getUTCMinutes(),
        a.getUTCSeconds(),
        a.getUTCMilliseconds()
      );
    }
    function j(a) {
      if (a <= 132057e7) return h;
      else if (a <= 133146e7) return i;
      else if (a <= 13520196e5) return h;
      else if (a <= 13629096e5) return i;
      else if (a <= 13834692e5) return h;
      else if (a <= 13943592e5) return i;
      else if (a <= 14149188e5) return h;
      else if (a <= 14258088e5) return i;
      else if (a <= 14463684e5) return h;
      else if (a <= 14578632e5) return i;
      else if (a <= 14784192e5) return h;
      else if (a <= 14893128e5) return i;
      else if (a <= 15098688e5) return h;
      else if (a <= 15207624e5) return i;
      else if (a <= 15413184e5) return h;
      else if (a <= 1552212e6) return i;
      else if (a <= 1572768e6) return h;
      else return i;
    }
    function c(a) {
      a = a || new Date();
      var b = j(+a) / d("DateConsts").MS_PER_HOUR;
      a = a.getTimezoneOffset() / 60;
      return b + a;
    }
    g.dateToUTC = a;
    g.dateToUTCDate = b;
    g.getPacificOffsetAt = j;
    g.offsetFromPacificTime = c;
  },
  98
);
__d(
  "AbstractLinkLynxMode",
  ["FBLynx", "LinkshimHandlerConfig"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      return a
        ? [c("LinkshimHandlerConfig").www_safe_js_mode, null]
        : ["hover", null];
    }
    function b() {
      d("FBLynx").setupDelegation();
    }
    g.getMode = a;
    g.setupDelegation = b;
  },
  98
);
__d(
  "LynxGeneration",
  ["LinkshimHandlerConfig", "URI"],
  function (a, b, c, d, e, f, g) {
    var h = new (c("URI"))(c("LinkshimHandlerConfig").linkshim_path).setDomain(
        c("LinkshimHandlerConfig").linkshim_host
      ),
      i = {
        getShimURI: function () {
          return new (c("URI"))(h);
        },
        getLynxURIProtocol: function (a) {
          return c("LinkshimHandlerConfig").always_use_https
            ? "https"
            : a.getProtocol() === "http"
            ? "http"
            : "https";
        },
        getShimmedHref: function (a, b, d) {
          var e;
          a = new (c("URI"))(a);
          var f = i.getLynxURIProtocol(a);
          a = i
            .getShimURI()
            .setQueryData(
              ((e = {}),
              (e[c("LinkshimHandlerConfig").linkshim_url_param] = a.toString()),
              (e[c("LinkshimHandlerConfig").linkshim_enc_param] = b),
              e)
            )
            .setProtocol(f);
          b = d == null ? void 0 : d.trackingNodes;
          e = d == null ? void 0 : d.callbacks;
          b && b.length && (a = a.addQueryData("__tn__", b.join("")));
          e && e.length && (a = a.addQueryData("c", e));
          return a;
        },
      };
    a = i;
    g["default"] = a;
  },
  98
);
__d(
  "NonFBLinkReferrerProtector",
  ["$", "Event", "LinkshimHandlerConfig", "Parent", "URI", "setTimeout"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h = (g || (g = b("URI"))).goURIOnWindow,
      i = {
        alreadySetup: !1,
        originReferrerPolicyClickWithoutLog: function (a) {
          var c = b("$")("meta_referrer");
          c.content = b("LinkshimHandlerConfig").switched_meta_referrer_policy;
          b("setTimeout")(function () {
            c.content = b("LinkshimHandlerConfig").default_meta_referrer_policy;
          }, 100);
        },
        setupDelegation: function (a) {
          a === void 0 && (a = !1);
          if (document.body == null) {
            if (a) return;
            b("setTimeout")(function () {
              i.setupDelegation(!0);
            }, 100);
            return;
          }
          if (i.alreadySetup) return;
          i.alreadySetup = !0;
          a = function (a) {
            var c = i.getMaybeNonFBLinkReferrerJSMode(a.target);
            if (!c) return;
            var d = c[0];
            c = c[1];
            switch (d) {
              case "origin":
                i.originReferrerPolicyClickWithoutLog(c);
                break;
              case "ie":
                d = new (g || (g = b("URI")))(c.href);
                a.preventDefault();
                h(d, window.open("", c.target), !0);
                break;
            }
          };
          b("Event").listen(document.body, "click", a);
        },
        getMaybeNonFBLinkReferrerJSMode: function (a) {
          a = b("Parent").byAttribute(a, "data-lnfb-mode");
          if (a instanceof HTMLAnchorElement) {
            var c = a.getAttribute("data-lnfb-mode");
            switch (c) {
              case "ie":
              case "origin":
                return [c, a];
              default:
                return null;
            }
          }
          return null;
        },
      };
    e.exports = i;
  },
  null
);
__d(
  "AbstractLink.react",
  [
    "AbstractLinkLynxMode",
    "LynxGeneration",
    "NonFBLinkReferrerProtector",
    "isTruthy",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var e = b.prototype;
      e.componentDidMount = function () {
        this.props.dataLnfbMode !== null
          ? d("NonFBLinkReferrerProtector").setupDelegation()
          : this.props.isLinkshimSupported &&
            d("AbstractLinkLynxMode").setupDelegation();
      };
      e.render = function () {
        var a = this.props,
          b = a.href,
          e = a.linkRef,
          f = a.shimhash,
          g = a.nofollow,
          i = a.noreferrer,
          j = a.rel,
          k = a.isSafeToSkipShim,
          l = a.dataLnfbMode;
        a.isLinkshimSupported;
        a = babelHelpers.objectWithoutPropertiesLoose(a, [
          "href",
          "linkRef",
          "shimhash",
          "nofollow",
          "noreferrer",
          "rel",
          "isSafeToSkipShim",
          "dataLnfbMode",
          "isLinkshimSupported",
        ]);
        var m = b;
        j = j;
        var n = null,
          o = null,
          p = null;
        if (f !== null) {
          m = c("LynxGeneration").getShimmedHref(b, f || "");
          b = d("AbstractLinkLynxMode").getMode(k);
          o = b[0];
          n = b[1];
        }
        g && (j = c("isTruthy")(j) ? j + " nofollow" : "nofollow");
        i && (j = c("isTruthy")(j) ? j + " noreferrer" : "noreferrer");
        c("isTruthy")(l) && (p = l);
        return h.jsx(
          "a",
          babelHelpers["extends"]({}, a, {
            href: m.toString() || null,
            rel: j,
            ref: e,
            "data-sigil": n,
            "data-lynx-mode": o,
            "data-lnfb-mode": p,
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
  "compactArray",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      var b = [];
      for (var c = 0; c < a.length; ++c) {
        var d = a[c];
        d != null && b.push(d);
      }
      return b;
    }
    f["default"] = a;
  },
  66
);
__d(
  "first",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
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
        return d;
      }
      return null;
    }
    f["default"] = a;
  },
  66
);
__d(
  "ClickIDParameterUtils",
  [
    "URI",
    "compactArray",
    "first",
    "isCdnURI",
    "isClickIDBlacklistSVDomainURI",
    "isFacebookSVDomainURI",
    "isFacebookURI",
    "isFbDotComURI",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = new Set(["http", "https"]);
    function i(a) {
      return h.has(a.getProtocol());
    }
    var j = "fbclid";
    b = "doubleclick.net";
    var k =
      ((d = {}),
      (d[b] = [
        {
          extractor: function (a) {
            a = a.getQueryString();
            return a != null && a.startsWith("http") ? new (c("URI"))(a) : null;
          },
          injector: function (a, b, c) {
            b = b.addQueryData(j, c);
            return a.setQueryString(b.toString());
          },
        },
      ]),
      d);
    function l(a) {
      var b = a.getProtocol(),
        c = a.getDomain();
      a = a.getPort();
      return (
        (b !== null && b.length > 0) ||
        (c !== null && c.length > 0) ||
        a !== null
      );
    }
    function m(a) {
      var b = c("first")(
        Object.keys(k).filter(function (b) {
          return a.getDomain().endsWith(b);
        })
      );
      b = b != null ? k[b] : null;
      return b == null
        ? null
        : c("first")(
            c("compactArray")(
              b.map(function (b) {
                var c = b.extractor(a);
                return c == null ? null : { injector: b.injector, uri: c };
              })
            )
          );
    }
    function n(a) {
      return (
        !c("isFacebookURI")(a) &&
        !c("isFacebookSVDomainURI")(a) &&
        !c("isCdnURI")(a) &&
        !c("isFbDotComURI")(a) &&
        l(a) &&
        i(a) &&
        !o(a)
      );
    }
    function o(a) {
      var b = c("isClickIDBlacklistSVDomainURI")(a);
      if (b) return !0;
      b = m(a);
      return b != null ? o(b.uri) : !1;
    }
    function p(a, b) {
      var c = m(a);
      return c != null ? c.injector(a, c.uri, b) : a.addQueryData(j, b);
    }
    function a(a, b) {
      return n(a) ? p(a, b) : a;
    }
    g.QUERY_PARAM = j;
    g.appendClickIDQueryParam = a;
  },
  98
);
__d(
  "Href",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      if (typeof a === "object" && a != null && a.url != null)
        return { type: "legacy", value: a };
      else return { type: "modern", value: a };
    }
    f.getTypedHref = a;
  },
  66
);
__d(
  "Link.react",
  [
    "AbstractLink.react",
    "ClickIDParameterUtils",
    "Href",
    "LinkshimHandlerConfig",
    "Random",
    "URI",
    "isLinkshimURI",
    "isTrustedDestination",
    "killswitch",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function i(a) {
      return a.getDomain().endsWith(".onion");
    }
    var j = /^(#|\/\w)/;
    function k(a) {
      if (j.test(a.toString())) return !1;
      var b = a.getProtocol();
      return b !== "http" && b !== "https" ? !1 : !c("isTrustedDestination")(a);
    }
    function l(a) {
      var b = "#",
        e = null;
      if (a != null) {
        a = d("Href").getTypedHref(a);
        a.type === "legacy"
          ? ((b = a.value.url.toString()),
            (e = a.value.shimhash ? a.value.shimhash.toString() : e))
          : typeof a.value === "string"
          ? a.value !== "" && a.value !== "#" && (b = a.value)
          : (b = a.value.toString());
      }
      return c("URI").isValidURI(b) ? [new (c("URI"))(b), e] : [null, e];
    }
    var m = new RegExp("^(l|lm|h)\\..*$", "i");
    function n(a) {
      if (c("killswitch")("LINK_UPGRADE_UNSHIMMED_JS")) return null;
      if (a.getProtocol() !== "http") return null;
      if (!c("isTrustedDestination")(a)) return null;
      return m.test(a.getDomain()) ? null : a.setProtocol("https");
    }
    function o(a) {
      return a.getProtocol() === "" ||
        (a.getDomain() === "" && a.getPort() === "")
        ? !1
        : !0;
    }
    function p(a) {
      if (!o(a)) return !1;
      var b = c("LinkshimHandlerConfig").current_domain;
      if (b === "") {
        b = "." + b;
        return a.getDomain().endsWith(b);
      }
      return !0;
    }
    function q(a, b) {
      var d = null,
        e = !1;
      a = a !== null && a instanceof c("URI") ? a : new (c("URI"))("#");
      var f = p(a),
        g = f === !0;
      b = b || (f === !0 ? "_blank" : null);
      var h = c("LinkshimHandlerConfig").use_rel_no_referrer && b === "_blank";
      return [a, g, h, b, d, e, f];
    }
    function r(a, b, e, f) {
      if (a !== null && a instanceof c("URI")) {
        if (
          !c("killswitch")("LINK_PARSES_SHIMHASH_FROM_LINKSHIM") &&
          c("isLinkshimURI")(a)
        ) {
          var g =
              a.getQueryData()[c("LinkshimHandlerConfig").linkshim_url_param],
            h = a.getQueryData()[c("LinkshimHandlerConfig").linkshim_enc_param];
          c("URI").isValidURI(g) &&
            ((a = new (c("URI"))(g)), b == null && (b = h));
        }
        g = c("LinkshimHandlerConfig").click_ids;
        if (
          !c("killswitch")("LINKSHIM_ADD_CLICK_ID_PARAM") &&
          g != null &&
          g.length > 0
        ) {
          h = Math.floor(c("Random").random() * g.length);
          g = g[h];
          a = d("ClickIDParameterUtils").appendClickIDQueryParam(a, g);
        }
      } else a = new (c("URI"))("#");
      b == null &&
        k(a) &&
        (b = c("LinkshimHandlerConfig").link_react_default_hash);
      h = n(a);
      h != null && (a = h);
      g = b != null;
      h = e || (b !== null ? "_blank" : null);
      e = !!f;
      c("LinkshimHandlerConfig").onion_always_shim && i(a) && (e = !1);
      f =
        c("LinkshimHandlerConfig").use_rel_no_referrer &&
        b !== null &&
        h === "_blank";
      var j = p(a);
      return [a, g, f, h, b, e, j];
    }
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var d = b.prototype;
      d.render = function () {
        var a = this.props;
        a.allowunsafehref;
        var b = a.s,
          d = a.href,
          e = a.linkRef,
          f = a.target;
        a = babelHelpers.objectWithoutPropertiesLoose(a, [
          "allowunsafehref",
          "s",
          "href",
          "linkRef",
          "target",
        ]);
        d = l(d);
        var g = d[0];
        d = d[1];
        d = c("LinkshimHandlerConfig").is_linkshim_supported
          ? r(g, d, f, b)
          : q(g, f);
        b = d[0];
        g = d[1];
        f = d[2];
        var i = d[3],
          j = d[4],
          k = d[5];
        d = d[6];
        var m = null;
        !c("LinkshimHandlerConfig").is_linkshim_supported &&
          d &&
          (m = c("LinkshimHandlerConfig").non_linkshim_lnfb_mode);
        return h.jsx(
          c("AbstractLink.react"),
          babelHelpers["extends"]({}, a, {
            href: b,
            linkRef: e,
            nofollow: g,
            noreferrer: f,
            shimhash: j,
            target: i,
            isSafeToSkipShim: k,
            dataLnfbMode: m,
            isLinkshimSupported: c("LinkshimHandlerConfig")
              .is_linkshim_supported,
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
  "ReactPropTransfererCore",
  ["emptyFunction", "joinClasses"],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return function (b, c, d) {
        !Object.prototype.hasOwnProperty.call(b, c)
          ? (b[c] = d)
          : (b[c] = a(b[c], d));
      };
    }
    c = a(function (a, b) {
      return babelHelpers["extends"]({}, b, a);
    });
    var g = {
      children: b("emptyFunction"),
      className: a(b("joinClasses")),
      style: c,
    };
    function h(a, b) {
      for (var c in b) {
        if (!Object.prototype.hasOwnProperty.call(b, c)) continue;
        var d = g[c];
        d && Object.prototype.hasOwnProperty.call(g, c)
          ? d(a, c, b[c])
          : Object.prototype.hasOwnProperty.call(a, c) || (a[c] = b[c]);
      }
      return a;
    }
    d = {
      mergeProps: function (a, b) {
        return h(babelHelpers["extends"]({}, a), b);
      },
    };
    e.exports = d;
  },
  null
);
__d(
  "ReactPropTransferer",
  ["ReactPropTransfererCore"],
  function (a, b, c, d, e, f) {
    e.exports = b("ReactPropTransfererCore");
  },
  null
);
__d(
  "cloneWithProps_DEPRECATED",
  ["React", "ReactPropTransferer", "warning"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b("React"),
      h = "children";
    c = !1;
    function a(a, c) {
      c = b("ReactPropTransferer").mergeProps(c, a.props);
      !Object.prototype.hasOwnProperty.call(c, h) &&
        Object.prototype.hasOwnProperty.call(a.props, h) &&
        (c.children = a.props.children);
      return g.createElement(a.type, c);
    }
    e.exports = a;
  },
  null
);
__d(
  "AbstractButton.react",
  [
    "cx",
    "Link.react",
    "cloneWithProps_DEPRECATED",
    "joinClasses",
    "mergeRefs",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    var i = d("react");
    a = d("react").Component;
    b = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
          e[f] = arguments[f];
        return (
          ((b = c = a.call.apply(a, [this].concat(e)) || this),
          (c.$1 = i.createRef()),
          (c.handleLinkClick = function (a) {
            c.props.disabled
              ? a.preventDefault()
              : c.props.onClick && c.props.onClick(a);
          }),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      var d = b.prototype;
      d.focus = function () {
        this.$1.current != null && this.$1.current.focus();
      };
      d.render = function () {
        var a = this.props,
          b = a.depressed,
          d = a.disabled,
          e = a.image,
          f = a.imageRight,
          g = a.label,
          h = a.labelIsHidden,
          j = a.buttonRef;
        a = babelHelpers.objectWithoutPropertiesLoose(a, [
          "depressed",
          "disabled",
          "image",
          "imageRight",
          "label",
          "labelIsHidden",
          "buttonRef",
        ]);
        j = c("mergeRefs")(this.$1, j);
        delete a.shade;
        b = "_42ft" + (d ? " _42fr" : "") + (b ? " _42fs" : "");
        e = e;
        if (e) {
          var k = {};
          g && ((k.alt = ""), h || (k.className = "_3-8_"));
          e = c("cloneWithProps_DEPRECATED")(e, k);
        }
        k = f;
        if (k) {
          f = {};
          g && ((f.alt = ""), h || (f.className = "_3-99"));
          k = c("cloneWithProps_DEPRECATED")(k, f);
        }
        if (this.props.href) {
          f = this.props;
          var l = f.disabled;
          f = f.role;
          f = l && f === "button";
          return i.jsxs(
            c("Link.react"),
            babelHelpers["extends"]({}, a, {
              linkRef: j,
              "aria-disabled": f ? !0 : void 0,
              className: c("joinClasses")(this.props.className, b),
              onClick: this.handleLinkClick,
              tabIndex: l ? -1 : this.props.tabIndex,
              children: [
                e,
                h ? i.jsx("span", { className: "_afhc", children: g }) : g,
                k,
              ],
            })
          );
        } else if (this.props.type && this.props.type !== "submit")
          return i.jsxs(
            "button",
            babelHelpers["extends"]({}, a, {
              ref: j,
              className: c("joinClasses")(this.props.className, b),
              disabled: d,
              type: this.props.type,
              children: [
                e,
                h ? i.jsx("span", { className: "_afhc", children: g }) : g,
                k,
              ],
            })
          );
        else
          return i.jsxs(
            "button",
            babelHelpers["extends"]({}, a, {
              ref: j,
              className: c("joinClasses")(this.props.className, b),
              disabled: d,
              type: "submit",
              value: "1",
              children: [
                e,
                h ? i.jsx("span", { className: "_afhc", children: g }) : g,
                k,
              ],
            })
          );
      };
      return b;
    })(a);
    b.defaultProps = { disabled: !1, depressed: !1, labelIsHidden: !1 };
    f.exports = b;
  },
  34
);
__d(
  "XUIAbstractGlyphButton.react",
  ["cx", "AbstractButton.react", "joinClasses", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var d = b.prototype;
      d.render = function () {
        return i.jsx(
          c("AbstractButton.react"),
          babelHelpers["extends"]({}, this.props, {
            className: c("joinClasses")(this.props.className, "_5upp"),
            label: this.props.label,
          })
        );
      };
      return b;
    })(i.Component);
    g["default"] = a;
  },
  98
);
__d(
  "XUICloseButton.react",
  ["cx", "fbt", "XUIAbstractGlyphButton.react", "joinClasses", "react"],
  function (a, b, c, d, e, f, g, h) {
    var i,
      j = i || b("react");
    a = (function (a) {
      "use strict";
      babelHelpers.inheritsLoose(c, a);
      function c() {
        return a.apply(this, arguments) || this;
      }
      var d = c.prototype;
      d.render = function () {
        var a = this.props.size,
          c = this.props.shade;
        a =
          "_50zy" +
          (a === "small" ? " _50zz" : "") +
          (a === "medium" ? " _50-0" : "") +
          (a === "large" ? " _50-1" : "") +
          (c === "light" ? " _50z_" : "") +
          (c === "dark" ? " _50z-" : "");
        c = this.props.label;
        var d = this.props.title;
        !this.props.title && !this.props.tooltip && (d = c);
        return j.jsx(
          b("XUIAbstractGlyphButton.react"),
          babelHelpers["extends"]({}, this.props, {
            label: c,
            title: d,
            type: this.props.href ? void 0 : this.props.type,
            "data-hover": this.props.tooltip && "tooltip",
            "data-tooltip-alignh": this.props.tooltip && "center",
            "data-tooltip-content": this.props.tooltip,
            className: b("joinClasses")(this.props.className, a),
          })
        );
      };
      return c;
    })(j.Component);
    a.defaultProps = {
      label: h._("Abandonner"),
      size: "medium",
      shade: "dark",
      type: "button",
    };
    e.exports = a;
  },
  null
);
__d(
  "getEventCharCode",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      var b = a.keyCode;
      "charCode" in a
        ? ((a = a.charCode), a === 0 && b === 13 && (a = 13))
        : (a = b);
      return a >= 32 || a === 13 ? a : 0;
    }
    f["default"] = a;
  },
  66
);
__d(
  "shallowEqual",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = Object.prototype.hasOwnProperty;
    function h(a, b) {
      if (a === b) return a !== 0 || b !== 0 || 1 / a === 1 / b;
      else return a !== a && b !== b;
    }
    function a(a, b) {
      if (h(a, b)) return !0;
      if (
        typeof a !== "object" ||
        a === null ||
        typeof b !== "object" ||
        b === null
      )
        return !1;
      var c = Object.keys(a),
        d = Object.keys(b);
      if (c.length !== d.length) return !1;
      for (d = 0; d < c.length; d++)
        if (!g.call(b, c[d]) || !h(a[c[d]], b[c[d]])) return !1;
      return !0;
    }
    f["default"] = a;
  },
  66
);
__d(
  "fbjs/lib/shallowEqual",
  ["shallowEqual"],
  function (a, b, c, d, e, f) {
    "use strict";
    e.exports = b("shallowEqual");
  },
  null
);
__d(
  "shallowCompare",
  ["fbjs/lib/shallowEqual"],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, c, d) {
      return (
        !b("fbjs/lib/shallowEqual")(a.props, c) ||
        !b("fbjs/lib/shallowEqual")(a.state, d)
      );
    }
    f["default"] = a;
  },
  66
);
__d(
  "DatePickerInput_DEPRECATED.react",
  [
    "cx",
    "AbstractTextField.react",
    "CalendarUtils",
    "DateFormatConfig",
    "DatePickerRestraints",
    "InputSelection",
    "Keys",
    "ReactDOM",
    "UTCUtils",
    "XUICloseButton.react",
    "emptyFunction",
    "getEventCharCode",
    "joinClasses",
    "react",
    "shallowCompare",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react").Component;
    var j = /\d/,
      k = {
        order: c("DateFormatConfig").numericDateOrder,
        separator: c("DateFormatConfig").numericDateSeparator,
      };
    function l(a) {
      var b = /[1-9]{1}[0-9]*/g,
        c,
        d = {},
        e = 0;
      while ((c = b.exec(a))) (d[k.order[e]] = c), e++;
      return d;
    }
    function a(a) {
      return a == null
        ? ""
        : d("CalendarUtils").utcDateToString(new Date(a), k);
    }
    e = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b) {
        var e;
        e = a.call(this, b) || this;
        e.onFocus = function (a) {
          e.setState({ focused: !0 }), e.props.onFocus(a);
        };
        e.onChange = function (a) {
          var b;
          a && (typeof a === "string" ? (b = a) : (b = a.target.value));
          if (b || !e.props.allowEmpty) {
            var c = d("CalendarUtils").stringToDate(b, k.order),
              f = !1;
            if (c) {
              f = d("DatePickerRestraints").isValidDate(
                c,
                e.props.dateRestraints
              );
              a = new Date(d("UTCUtils").dateToUTC(c));
              f ? e.props.onChange(a) : e.props.onInvalidDateSelected(a);
            }
          } else e.props.onDateRemoved();
          (!c || !f) && e.setState({ inputValue: b });
        };
        e.onKeyDown = function (a) {
          var b = a.keyCode;
          if (b == c("Keys").RETURN) {
            a.preventDefault();
            e.onBlur(a);
            return;
          }
          if (b === c("Keys").TAB) {
            e.onBlur(a);
            return;
          }
          if (b == c("Keys").UP || b == c("Keys").DOWN) {
            a.preventDefault();
            b = b == c("Keys").UP ? 1 : -1;
            a = a.target;
            var f = d("InputSelection").get(a);
            a = l(a.value);
            var g = new Date(e.props.selectTime);
            for (var h in a) {
              var i = a[h],
                j = i.index + i[0].length;
              if (f.start >= i.index && f.start <= j) {
                switch (h) {
                  case "m":
                    g.setMonth(g.getMonth() + b);
                    break;
                  case "d":
                    g.setDate(g.getDate() + b);
                    break;
                  case "y":
                    g.setFullYear(g.getFullYear() + b);
                    break;
                }
                break;
              }
            }
            d("DatePickerRestraints").isValidDate(g, e.props.dateRestraints) &&
              ((e.$1 = h), e.props.onChange(g));
          }
        };
        e.onKeyUp = function (a) {
          var b = a.keyCode;
          (b == c("Keys").UP || b == c("Keys").DOWN) && a.preventDefault();
          b == c("Keys").ESC && e.onBlur(a);
        };
        e.onKeyPress = function (a) {
          var b = String.fromCharCode(c("getEventCharCode")(a.nativeEvent)),
            d = c("DateFormatConfig").numericDateSeparator;
          if (b === d || j.test(b)) return;
          a.preventDefault();
        };
        e.$3 = function (a) {
          e.props.onDateRemoved(), e.setState({ inputValue: "" });
        };
        e.state = {
          inputValue: e.props.selectTime
            ? e.props.formatter(e.props.selectTime)
            : "",
          focused: !1,
        };
        return e;
      }
      var e = b.prototype;
      e.shouldComponentUpdate = function (a, b) {
        return c("shallowCompare")(this, a, b);
      };
      e.UNSAFE_componentWillReceiveProps = function (a) {
        if (this.props.selectTime || a.selectTime) {
          var b = a.formatter || this.props.formatter;
          this.setState({ inputValue: b(a.selectTime) });
        }
      };
      e.componentDidUpdate = function (a, b) {
        a = this.$1;
        var c = this.$2();
        if (this.state.inputValue && a) {
          var e = l(this.state.inputValue);
          e = e[a];
          d("InputSelection").set(c, e.index, e.index + e[0].length);
        }
        this.$1 = null;
        this.props.selectAllOnFocus &&
          !b.focused &&
          this.state.focused &&
          d("InputSelection").set(c, 0, c.value.length);
      };
      e.$2 = function () {
        var a = d("ReactDOM").findDOMNode(this.refs.inputBox);
        if (a.nodeName === "INPUT") return a;
        else return a.getElementsByTagName("input")[0];
      };
      e.onBlur = function (a) {
        var b = !1;
        !this.props.selectTime && a.target.value.length && (b = !0);
        this.setState(function (a) {
          return { focused: !1, inputValue: b ? "" : a.inputValue };
        });
        this.props.onBlur(a);
      };
      e.$4 = function () {
        var a;
        this.props.clearableTooltip && this.state.inputValue
          ? (a = i.jsx(c("XUICloseButton.react"), {
              className: "_wrm",
              size: "small",
              type: "button",
              tooltip: this.props.clearableTooltip,
              onClick: this.$3,
            }))
          : this.props.icon &&
            (a = i.cloneElement(this.props.icon, {
              className: c("joinClasses")(
                this.props.icon.props.className,
                "_3smn"
              ),
            }));
        var b = { root: "", empty: "" };
        return i.jsx(c("AbstractTextField.react"), {
          leftChild: a,
          classNames: b,
          children: i.jsx("input", { className: "_3smp", type: "text" }),
        });
      };
      e.$5 = function () {
        return i.cloneElement(this.props.input || this.$4(), {
          placeholder: this.props.placeholder,
          value: this.state.inputValue,
          onChange: this.onChange,
          onFocus: this.onFocus,
          onKeyDown: this.onKeyDown,
          onKeyPress: this.onKeyPress,
          onKeyUp: this.onKeyUp,
          disabled: this.props.disabled,
          ref: "inputBox",
        });
      };
      e.render = function () {
        var a = "";
        this.props.selectTime &&
          (a = this.props.utcOutput
            ? this.props.selectTime
            : d("UTCUtils")
                .dateToUTCDate(new Date(this.props.selectTime))
                .getTime());
        var b = c("joinClasses")(this.props.className, "_3smo");
        return i.jsxs("span", {
          className: b,
          children: [
            this.$5(),
            i.jsx("input", { type: "hidden", name: this.props.name, value: a }),
          ],
        });
      };
      return b;
    })(b);
    e.defaultProps = {
      allowEmpty: !0,
      formatter: a,
      onBlur: c("emptyFunction"),
      onChange: c("emptyFunction"),
      onDateRemoved: c("emptyFunction"),
      onFocus: c("emptyFunction"),
      onInvalidDateSelected: c("emptyFunction"),
      placeholder: d("CalendarUtils").placeholderDateString(k),
      selectAllOnFocus: !1,
      utcOutput: !1,
      clearableTooltip: "",
    };
    g["default"] = e;
  },
  98
);
__d(
  "BasicVector",
  [],
  function (a, b, c, d, e, f) {
    a = (function () {
      function a(a, b) {
        (this.x = a), (this.y = b);
      }
      var b = a.prototype;
      b.derive = function (b, c) {
        return new a(b, c);
      };
      b.toString = function () {
        return "(" + this.x + ", " + this.y + ")";
      };
      b.add = function (a, b) {
        b === void 0 && ((b = a.y), (a = a.x));
        a = parseFloat(a);
        b = parseFloat(b);
        return this.derive(this.x + a, this.y + b);
      };
      b.mul = function (a, b) {
        b === void 0 && (b = a);
        return this.derive(this.x * a, this.y * b);
      };
      b.div = function (a, b) {
        b === void 0 && (b = a);
        return this.derive((this.x * 1) / a, (this.y * 1) / b);
      };
      b.sub = function (a, b) {
        if (arguments.length === 1) return this.add(a.mul(-1));
        else return this.add(-a, -b);
      };
      b.distanceTo = function (a) {
        return this.sub(a).magnitude();
      };
      b.magnitude = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
      };
      b.rotate = function (a) {
        return this.derive(
          this.x * Math.cos(a) - this.y * Math.sin(a),
          this.x * Math.sin(a) + this.y * Math.cos(a)
        );
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "getUnboundedScrollPosition",
  ["Scroll"],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      if (a === window) {
        var c;
        return {
          x:
            (c = window.pageXOffset) != null
              ? c
              : b("Scroll").getLeft(document.documentElement),
          y:
            (c = window.pageYOffset) != null
              ? c
              : b("Scroll").getTop(document.documentElement),
        };
      }
      return { x: b("Scroll").getLeft(a), y: b("Scroll").getTop(a) };
    }
    e.exports = a;
  },
  null
);
__d(
  "DOMVector",
  [
    "BasicVector",
    "getDocumentScrollElement",
    "getElementPosition",
    "getUnboundedScrollPosition",
    "getViewportDimensions",
  ],
  function (a, b, c, d, e, f, g) {
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c, d) {
        b = a.call(this, b, c) || this;
        b.domain = d || "pure";
        return b;
      }
      var d = b.prototype;
      d.derive = function (a, c, d) {
        return new b(a, c, d || this.domain);
      };
      d.add = function (c, d) {
        c instanceof b &&
          c.getDomain() !== "pure" &&
          (c = c.convertTo(this.domain));
        return a.prototype.add.call(this, c, d);
      };
      d.convertTo = function (a) {
        if (a != "pure" && a != "viewport" && a != "document")
          return this.derive(0, 0);
        if (a == this.domain) return this.derive(this.x, this.y, this.domain);
        if (a == "pure") return this.derive(this.x, this.y);
        if (this.domain == "pure") return this.derive(0, 0);
        var c = b.getScrollPosition("document"),
          d = this.x,
          e = this.y;
        this.domain == "document"
          ? ((d -= c.x), (e -= c.y))
          : ((d += c.x), (e += c.y));
        return this.derive(d, e, a);
      };
      d.getDomain = function () {
        return this.domain;
      };
      b.from = function (a, c, d) {
        return new b(a, c, d);
      };
      b.getScrollPosition = function (a) {
        a = a || "document";
        var b = c("getUnboundedScrollPosition")(window);
        return this.from(b.x, b.y, "document").convertTo(a);
      };
      b.getElementPosition = function (a, b) {
        b = b || "document";
        a = c("getElementPosition")(a);
        return this.from(a.x, a.y, "viewport").convertTo(b);
      };
      b.getElementDimensions = function (a) {
        return this.from(a.offsetWidth || 0, a.offsetHeight || 0);
      };
      b.getViewportDimensions = function () {
        var a = c("getViewportDimensions")();
        return this.from(a.width, a.height, "viewport");
      };
      b.getLayoutViewportDimensions = function () {
        var a = c("getViewportDimensions").layout();
        return this.from(a.width, a.height, "viewport");
      };
      b.getViewportWithoutScrollbarDimensions = function () {
        var a = c("getViewportDimensions").withoutScrollbars();
        return this.from(a.width, a.height, "viewport");
      };
      b.getDocumentDimensions = function (a) {
        a = c("getDocumentScrollElement")(a);
        return this.from(a.scrollWidth, a.scrollHeight, "document");
      };
      return b;
    })(c("BasicVector"));
    g["default"] = a;
  },
  98
);
__d(
  "Vector",
  ["DOMVector", "Event", "Scroll"],
  function (a, b, c, d, e, f, g) {
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c, d) {
        return a.call(this, parseFloat(b), parseFloat(c), d) || this;
      }
      var e = b.prototype;
      e.derive = function (a, c, d) {
        return new b(a, c, d || this.domain);
      };
      e.setElementPosition = function (a) {
        var b = this.convertTo("document");
        a.style.left = parseInt(b.x, 10) + "px";
        a.style.top = parseInt(b.y, 10) + "px";
        return this;
      };
      e.setElementDimensions = function (a) {
        return this.setElementWidth(a).setElementHeight(a);
      };
      e.setElementWidth = function (a) {
        a.style.width = parseInt(this.x, 10) + "px";
        return this;
      };
      e.setElementHeight = function (a) {
        a.style.height = parseInt(this.y, 10) + "px";
        return this;
      };
      e.scrollElementBy = function (a) {
        a == document.body
          ? window.scrollBy(this.x, this.y)
          : (d("Scroll").setLeft(a, d("Scroll").getLeft(a) + this.x),
            d("Scroll").setTop(a, d("Scroll").getTop(a) + this.y));
        return this;
      };
      b.from = function (a, c, d) {
        return new b(a, c, d);
      };
      b.getEventPosition = function (a, b) {
        b === void 0 && (b = "document");
        a = c("Event").getPosition(a);
        a = this.from(a.x, a.y, "document");
        return a.convertTo(b);
      };
      b.getTouchEventPosition = function (a, b) {
        b === void 0 && (b = "document");
        a = a.touches[0];
        a = this.from(a.pageX, a.pageY, "document");
        return a.convertTo(b);
      };
      b.deserialize = function (a) {
        a = a.split(",");
        return this.from(a[0], a[1]);
      };
      return b;
    })(c("DOMVector"));
    g["default"] = a;
  },
  98
);
__d(
  "DialogPosition",
  ["Vector"],
  function (a, b, c, d, e, f, g) {
    var h = 40,
      i;
    function a(a, b, d, e, f) {
      d === void 0 && (d = null);
      e === void 0 && (e = !1);
      f === void 0 && (f = !1);
      var g = c("Vector").getViewportDimensions(),
        j = !1;
      e && d && (j = d + b > g.y);
      if (d != null && !j) return d;
      if (i) return i;
      e = f
        ? Math.floor((g.y - b) / 2)
        : Math.floor(((g.x + a) * (g.y - b)) / (4 * g.x));
      return Math.max(e, h);
    }
    function b(a) {
      i = a;
    }
    g.calculateTopMargin = a;
    g.setFixedTopMargin = b;
  },
  98
);
__d(
  "flattenArray",
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      var b = [];
      g(a, b);
      return b;
    }
    function g(a, b) {
      var c = a.length,
        d = 0;
      while (c--) {
        var e = a[d++];
        Array.isArray(e) ? g(e, b) : b.push(e);
      }
    }
    f["default"] = a;
  },
  66
);
__d(
  "JSXDOM",
  ["DOM", "FbtResultBase", "flattenArray"],
  function (a, b, c, d, e, f) {
    a = [
      "a",
      "blockquote",
      "br",
      "button",
      "canvas",
      "checkbox",
      "dd",
      "div",
      "dl",
      "dt",
      "em",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "hr",
      "i",
      "iframe",
      "img",
      "input",
      "label",
      "li",
      "option",
      "p",
      "pre",
      "select",
      "span",
      "strong",
      "table",
      "tbody",
      "thead",
      "td",
      "textarea",
      "th",
      "tr",
      "ul",
      "video",
    ];
    var g = {};
    a.forEach(function (a) {
      var c = function (c, d) {
        arguments.length > 2 && (d = Array.prototype.slice.call(arguments, 1));
        !d && c && ((d = c.children), delete c.children);
        d &&
          ((d = Array.isArray(d) ? d : [d]),
          (d = d.map(function (a) {
            return a instanceof b("FbtResultBase") ? a.flattenToArray() : a;
          })),
          (d = b("flattenArray")(d)));
        return b("DOM").create(a, c, d);
      };
      g[a] = c;
    });
    e.exports = g;
  },
  null
);
__d(
  "TabbableElements",
  ["Style"],
  function (a, b, c, d, e, f, g) {
    function h(a) {
      if (a.tabIndex < 0) return !1;
      if (
        a.tabIndex > 0 ||
        (a.tabIndex === 0 && a.getAttribute("tabIndex") !== null)
      )
        return !0;
      var b = a;
      switch (a.tagName) {
        case "A":
          a = b;
          return !!a.href && a.rel != "ignore";
        case "INPUT":
          a = b;
          return a.type != "hidden" && a.type != "file" && !a.disabled;
        case "BUTTON":
        case "SELECT":
        case "TEXTAREA":
          a = b;
          return !a.disabled;
      }
      return !1;
    }
    function i(a) {
      a = a;
      while (
        a &&
        a !== document &&
        c("Style").get(a, "visibility") != "hidden" &&
        c("Style").get(a, "display") != "none"
      )
        a = a.parentNode;
      return a === document;
    }
    function a(a) {
      return Array.from(a.getElementsByTagName("*")).filter(j);
    }
    function b(a) {
      return Array.from(a.getElementsByTagName("*")).find(j);
    }
    function d(a) {
      a = Array.from(a.getElementsByTagName("*"));
      for (var b = a.length - 1; b >= 0; b--) if (j(a[b])) return a[b];
      return null;
    }
    function j(a) {
      return h(a) && i(a);
    }
    function e(a) {
      return i(a);
    }
    g.find = a;
    g.findFirst = b;
    g.findLast = d;
    g.isTabbable = j;
    g.isVisible = e;
  },
  98
);
__d(
  "focusWithinLayer",
  ["DOMQuery", "Focus", "TabbableElements", "getActiveElement"],
  function (a, b, c, d, e, f, g) {
    function a(a, b) {
      var e = d("DOMQuery").scry(a, ".autofocus")[0],
        f = !0;
      if (!e) {
        var g = c("getActiveElement")();
        if (d("DOMQuery").isNodeOfType(g, ["input", "textarea"])) return;
        g = d("TabbableElements").find(a);
        for (var h = 0; h < g.length; h++) {
          var i = g[h];
          if (
            i.tagName !== "A" ||
            i.getAttribute("role") === "button" ||
            i.getAttribute("role") === "menuitem"
          ) {
            e = g[h];
            break;
          }
        }
      } else e.tabIndex !== 0 && (f = !1);
      e
        ? f
          ? d("Focus").set(e, b)
          : d("Focus").setWithoutOutline(e)
        : a.offsetWidth || ((a.tabIndex = -1), d("Focus").setWithoutOutline(a));
    }
    g["default"] = a;
  },
  98
);
__d(
  "LayerAutoFocus",
  ["focusWithinLayer"],
  function (a, b, c, d, e, f, g) {
    a = (function () {
      function a(a) {
        (this._subscription = null),
          (this._layer = a),
          (this._subscription = null);
      }
      var b = a.prototype;
      b.enable = function () {
        this._subscription = this._layer.subscribe(
          "aftershow",
          this._focus.bind(this)
        );
      };
      b.disable = function () {
        this._subscription && this._subscription.unsubscribe(),
          (this._subscription = null);
      };
      b._focus = function () {
        var a = this._layer.getRoot();
        a && c("focusWithinLayer")(a, !0);
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "LayerHideSources",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      BLUR: "blur",
      ESCAPE: "escape",
      LAYER_CANCEL_BUTTON: "layerCancelButton",
      LAYER_HIDE_BUTTON: "layerHideButton",
      TRANSITION: "transition",
    });
    b = a;
    f["default"] = b;
  },
  66
);
__d(
  "LayerButtons",
  ["csx", "Button", "Event", "LayerHideSources", "Parent"],
  function (a, b, c, d, e, f, g) {
    a = (function () {
      "use strict";
      function a(a) {
        this._layer = a;
      }
      var c = a.prototype;
      c.enable = function () {
        this._listener = b("Event").listen(
          this._layer.getRoot(),
          "click",
          this._handle.bind(this)
        );
      };
      c.disable = function () {
        this._listener.remove(), (this._listener = null);
      };
      c._handle = function (a) {
        var c = a.getTarget(),
          d = b("Parent").byClass(c, "layerHide");
        if (d) {
          this._layer.hide(b("LayerHideSources").LAYER_HIDE_BUTTON);
          return;
        }
        d = b("Parent").byClass(c, "layerConfirm");
        if (d) {
          if (this._isButton(d) && !b("Button").isEnabled(d)) return;
          if (this._isInNestedLayer(d)) return;
          this._layer.inform("confirm", d) === !1 && a.prevent();
          return;
        }
        d = b("Parent").byClass(c, "layerCancel");
        if (d) {
          if (this._isButton(d) && !b("Button").isEnabled(d)) return;
          if (this._isInNestedLayer(d)) return;
          this._layer.inform("cancel", d) !== !1 &&
            this._layer.hide(b("LayerHideSources").LAYER_CANCEL_BUTTON);
          a.prevent();
          return;
        }
        d = b("Parent").byClass(c, "layerButton");
        if (d) {
          if (this._isButton(d) && !b("Button").isEnabled(d)) return;
          if (this._isInNestedLayer(d)) return;
          this._layer.inform("button", d) === !1 && a.prevent();
        }
      };
      c._isInNestedLayer = function (a) {
        a = b("Parent").byClass(a, "uiLayer");
        var c = this._layer.getRoot();
        return !!(a && c !== a);
      };
      c._isButton = function (a) {
        return !!(
          b("Parent").byClass(a, "uiButton") ||
          b("Parent").bySelector(a, "._42ft")
        );
      };
      return a;
    })();
    a.prototype._listener = null;
    e.exports = a;
  },
  null
);
__d(
  "LayerFormHooks",
  ["Event"],
  function (a, b, c, d, e, f) {
    a = (function () {
      "use strict";
      function a(a) {
        this._layer = a;
      }
      var c = a.prototype;
      c.enable = function () {
        var a = this._layer.getRoot();
        this._subscriptions = [
          b("Event").listen(a, "submit", this._onSubmit.bind(this)),
          b("Event").listen(a, "success", this._onSuccess.bind(this)),
          b("Event").listen(a, "error", this._onError.bind(this)),
        ];
      };
      c.disable = function () {
        this._subscriptions.forEach(function (a) {
          a.remove();
        }),
          (this._subscriptions = null);
      };
      c._onSubmit = function (a) {
        this._layer.inform("submit", a) === !1 && a.kill();
      };
      c._onSuccess = function (a) {
        this._layer.inform("success", a) === !1 && a.kill();
      };
      c._onError = function (a) {
        var b = a.getData();
        this._layer.inform("error", { response: b.response }) === !1 &&
          a.kill();
      };
      return a;
    })();
    Object.assign(a.prototype, { _subscriptions: null });
    e.exports = a;
  },
  null
);
__d(
  "LayerRefocusOnHide",
  [
    "ContextualThing",
    "DOM",
    "DOMQuery",
    "Focus",
    "Parent",
    "getActiveElement",
    "nullthrows",
  ],
  function (a, b, c, d, e, f, g) {
    a = (function () {
      function a(a) {
        this._layer = a;
      }
      var b = a.prototype;
      b.enable = function () {
        this._subscription = this._layer.subscribe(
          "hide",
          this._handle.bind(this)
        );
      };
      b.disable = function () {
        c("nullthrows")(this._subscription).unsubscribe(),
          (this._subscription = null);
      };
      b._handle = function () {
        var a = c("getActiveElement")();
        if (
          a === document.body ||
          d("DOMQuery").contains(this._layer.getRoot(), a)
        ) {
          a = this._layer.getCausalElement();
          while (a && !a.offsetWidth) {
            var b = d("Parent").byClass(a, "uiToggle");
            if (b && b.offsetWidth) a = c("DOM").scry(b, '[rel="toggle"]')[0];
            else {
              b = d("ContextualThing").getContext(a);
              b ? (a = b) : (a = a.parentNode);
            }
          }
          a && ((a = a), d("Focus").set(a));
        }
      };
      return a;
    })();
    Object.assign(a.prototype, { _subscription: null });
    g["default"] = a;
  },
  98
);
__d(
  "TabIsolation",
  ["Event", "Focus", "Keys", "TabbableElements", "containsNode"],
  function (a, b, c, d, e, f, g) {
    var h = [],
      i = 0;
    a = (function () {
      function a(a) {
        var b = this;
        this.enable = function () {
          b.disable(),
            h.unshift(b.$2),
            (b.$1 = c("Event").listen(
              window,
              "keydown",
              function (a) {
                h[0] === b.$2 && b.$4(a);
              },
              c("Event").Priority.URGENT
            ));
        };
        this.disable = function () {
          if (b.$1) {
            var a = h.indexOf(b.$2);
            a > -1 && h.splice(a, 1);
            b.$1.remove();
            b.$1 = null;
          }
        };
        this.$3 = a;
        this.$1 = null;
        this.$2 = i++;
      }
      var b = a.prototype;
      b.$4 = function (a) {
        if (c("Event").getKeyCode(a) !== c("Keys").TAB) return;
        var b = a.getTarget();
        if (!b) return;
        var e = d("TabbableElements").find(this.$3),
          f = e[0];
        e = e[e.length - 1];
        var g = a.getModifiers();
        g = g.shift;
        g && b === f
          ? (a.preventDefault(), d("Focus").set(e))
          : ((!g && b === e) || !c("containsNode")(this.$3, b)) &&
            (a.preventDefault(), d("Focus").set(f));
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "LayerTabIsolation",
  ["TabIsolation"],
  function (a, b, c, d, e, f, g) {
    a = (function () {
      function a(a) {
        (this._layer = a),
          (this._tabIsolation = null),
          (this._subscriptions = null);
      }
      var b = a.prototype;
      b.enable = function () {
        var a = this._layer.getRoot();
        if (a == null) return;
        a = new (c("TabIsolation"))(a);
        this._tabIsolation = a;
        this._subscriptions = [
          this._layer.subscribe("show", a.enable.bind(a)),
          this._layer.subscribe("hide", a.disable.bind(a)),
        ];
      };
      b.disable = function () {
        while (this._subscriptions && this._subscriptions.length)
          this._subscriptions.pop().unsubscribe();
        this._tabIsolation && this._tabIsolation.disable();
        this._tabIsolation = null;
      };
      return a;
    })();
    Object.assign(a.prototype, { _subscriptions: [] });
    g["default"] = a;
  },
  98
);
__d(
  "Toggler",
  [
    "csx",
    "invariant",
    "$",
    "Arbiter",
    "ArbiterMixin",
    "CSS",
    "ContextualThing",
    "DOM",
    "DataStore",
    "Event",
    "Focus",
    "Keys",
    "Parent",
    "TabbableElements",
    "TimeSlice",
    "createArrayFromMixed",
    "emptyFunction",
    "ge",
    "getContextualParent",
    "getObjectValues",
    "killswitch",
    "mixin",
    "queryThenMutateDOM",
    "setImmediate",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    var j = [],
      k,
      l = !1;
    function m() {
      l ||
        ((l = !0),
        c("setImmediate")(function () {
          l = !1;
        }));
    }
    var n = function () {
        (n = c("emptyFunction")),
          c("Event").listen(
            document.documentElement,
            "click",
            function (a) {
              if (l) return;
              var b = a.getTarget();
              j.forEach(function (a) {
                (a.clickedTarget = b),
                  a.active &&
                    !a.sticky &&
                    !d("ContextualThing").containsIncludingLayers(
                      a.getActive(),
                      b
                    ) &&
                    !a.inTargetFlyout(b) &&
                    a.inActiveDialog() &&
                    !a.isIgnoredByModalLayer(b) &&
                    a.hide();
              });
            },
            c("Event").Priority.URGENT
          );
      },
      o = (function (e) {
        babelHelpers.inheritsLoose(b, e);
        function b() {
          var a;
          a = e.call(this) || this;
          a.active = null;
          a.togglers = {};
          a.setSticky(!1);
          j.push(babelHelpers.assertThisInitialized(a));
          a.subscribe(["show", "hide"], b.inform.bind(b));
          return n() || babelHelpers.assertThisInitialized(a);
        }
        var f = b.prototype;
        f.focusFirstTabbableDescendant = function (a, b) {
          if (!c("killswitch")("TOGGLER_FAST_SHOW")) {
            b.$Toggler2 && b.$Toggler2.cancel();
            var e = null;
            b.$Toggler2 = c("queryThenMutateDOM")(
              function () {
                var b = a.querySelector(".uiToggleFlyout");
                b && (e = d("TabbableElements").findFirst(b) || b);
              },
              function () {
                delete b.$Toggler2,
                  e &&
                    (e.tabIndex == null && (e.tabIndex = -1),
                    d("Focus").setWithoutOutline(e));
              }
            );
          } else {
            var f = a.querySelector(".uiToggleFlyout");
            if (f) {
              f = d("TabbableElements").find(f)[0] || f;
              f.tabIndex == null && (f.tabIndex = -1);
              d("Focus").setWithoutOutline(f);
            }
          }
        };
        f.show = function (a) {
          var b = p(this, a),
            e = b.active;
          if (a !== e) {
            e && b.hide();
            b.active = a;
            d("CSS").addClass(a, "openToggler");
            e = c("DOM").scry(a, 'a[rel="toggle"]');
            e.length > 0 &&
              e[0].getAttribute("data-target") &&
              d("CSS").removeClass(
                c("$")(e[0].getAttribute("data-target")),
                "toggleTargetClosed"
              );
            this.focusFirstTabbableDescendant(a, b);
            e.length > 0 &&
              (c("DOM").appendContent(a, b.getToggler("next")),
              c("DOM").prependContent(a, b.getToggler("prev")));
            c("Event").listen(a, "keydown", function (d) {
              if (c("Event").getKeyCode(d) === c("Keys").ESC && b.isShown()) {
                var e = c("DOM").scry(a, 'a[rel="toggle"]')[0];
                e && e.focus();
                b.hide();
                d.kill();
              }
            });
            a.getAttribute("data-toggle-wc") &&
              (b.__continuation = c("TimeSlice").getGuardedContinuation(
                "Toggler.show inform"
              ));
            b.inform("show", b, "state");
          }
        };
        f.hide = function (a) {
          var b = p(this, a);
          b.$Toggler2 && b.$Toggler2.cancel();
          var e = b.active;
          if (e && (!a || a === e)) {
            d("CSS").removeClass(e, "openToggler");
            a = c("DOM").scry(e, 'a[rel="toggle"]');
            a.length > 0 &&
              a[0].getAttribute("data-target") &&
              d("CSS").addClass(
                c("$")(a[0].getAttribute("data-target")),
                "toggleTargetClosed"
              );
            c("getObjectValues")(b.togglers).forEach(c("DOM").remove);
            e.getAttribute("data-toggle-wc") &&
              (b.__continuation = c("TimeSlice").getGuardedContinuation(
                "Toggler.hide inform"
              ));
            b.inform("hide", b, "state");
            b.active = null;
          }
        };
        f.toggle = function (a) {
          var b = p(this, a);
          b.active === a ? b.hide() : b.show(a);
          m();
        };
        f.getActive = function () {
          return p(this).active;
        };
        f.isShown = function () {
          return (
            p(this).active && d("CSS").hasClass(p(this).active, "openToggler")
          );
        };
        b.isNodeShown = function (a) {
          return d("CSS").hasClass(a, "openToggler");
        };
        f.inTargetFlyout = function (a) {
          var b = q(this.getActive());
          return Boolean(
            b && d("ContextualThing").containsIncludingLayers(b, a)
          );
        };
        f.inActiveDialog = function () {
          var b = a.Dialog && a.Dialog.getCurrent();
          return !b || c("DOM").contains(b.getRoot(), this.getActive());
        };
        f.isIgnoredByModalLayer = function (a) {
          a = !!d("Parent").bySelector(a, "._3qw");
          var b = !!d("Parent").bySelector(this.getActive(), "._3qw");
          return a && !b;
        };
        f.getToggler = function (a) {
          var b = p(this);
          b.togglers[a] ||
            ((b.togglers[a] = c("DOM").create("button", {
              className: "hideToggler",
              onfocus: function () {
                var a = c("DOM").scry(b.active, 'a[rel="toggle"]')[0];
                a && a.focus();
                b.hide();
              },
              style: { right: a === "next" ? "0" : "" },
            })),
            b.togglers[a].setAttribute("type", "button"));
          return this.togglers[a];
        };
        f.setSticky = function (a) {
          var b = p(this);
          a = a !== !1;
          a !== b.sticky &&
            ((b.sticky = a),
            a
              ? b.$Toggler1 && b.$Toggler1.unsubscribe()
              : (b.$Toggler1 = c("Arbiter").subscribe(
                  "pre_page_transition",
                  b.hide.bind(b, null)
                )));
          return b;
        };
        f.setPrePageTransitionCallback = function (a) {
          var b = p(this);
          b.$Toggler1 && b.$Toggler1.unsubscribe();
          b.$Toggler1 = c("Arbiter").subscribe("pre_page_transition", a);
        };
        b.bootstrap = function (a) {
          a = a.parentNode;
          a != null || i(0, 3354);
          var c = b.getInstance(a);
          c != null || i(0, 3355);
          c.toggle(a);
        };
        b.createInstance = function (a) {
          var c = new b().setSticky(!0);
          d("DataStore").set(a, "toggler", c);
          return c;
        };
        b.destroyInstance = function (a) {
          var b = d("DataStore").get(a, "toggler");
          b && b.$Toggler2 && b.$Toggler2.cancel();
          d("DataStore").remove(a, "toggler");
        };
        b.getInstance = function (a) {
          a = a;
          while (a) {
            var e = d("DataStore").get(a, "toggler");
            if (e) return e;
            if (a instanceof Element)
              if (d("CSS").hasClass(a, "uiToggleContext"))
                return b.createInstance(a);
              else if (
                !c("killswitch")("JEWEL_TOGGLER_INSTANCE_FIXES") &&
                d("CSS").hasClass(a, "uiToggleFlyout")
              )
                return b.createInstance(a).setSticky(!1);
            a = c("getContextualParent")(a);
          }
          return (k = k || new b());
        };
        b.listen = function (a, d, e) {
          return b.subscribe(c("createArrayFromMixed")(a), function (a, b) {
            if (b.getActive() === d) {
              if (b.__continuation) {
                var c = b.__continuation;
                delete b.__continuation;
                return c(function () {
                  return e(a, b);
                });
              }
              return e(a, b);
            }
          });
        };
        b.addListener = function (a) {
          var c = a.events,
            d = a.element,
            e = a.handler;
          return b.listen(c, d, function () {
            return e.callback();
          });
        };
        return b;
      })(c("mixin")(c("ArbiterMixin")));
    Object.assign(o, o.prototype, c("ArbiterMixin"));
    Object.assign(o, {
      subscribe: (function (a) {
        return function (b, d) {
          b = c("createArrayFromMixed")(b);
          b.includes("show") &&
            j.forEach(function (a) {
              a.getActive() && setTimeout(d.bind(null, "show", a), 0);
            });
          return a(b, d);
        };
      })(o.subscribe.bind(o)),
    });
    function p(a, b) {
      return a instanceof o ? a : o.getInstance(b);
    }
    function q(a) {
      a = c("DOM").scry(a, 'a[rel="toggle"]');
      return a.length > 0 && a[0].getAttribute("data-target")
        ? c("ge")(a[0].getAttribute("data-target"))
        : null;
    }
    g["default"] = o;
  },
  98
);
__d(
  "LayerTogglerContext",
  ["Toggler"],
  function (a, b, c, d, e, f) {
    a = (function () {
      "use strict";
      function a(a) {
        this._layer = a;
      }
      var c = a.prototype;
      c.enable = function () {
        (this._root = this._layer.getRoot()),
          b("Toggler").createInstance(this._root).setSticky(!1);
      };
      c.disable = function () {
        b("Toggler").destroyInstance(this._root), (this._root = null);
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometVisualCompletionConstants",
  ["VisualCompletionConstants"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("VisualCompletionConstants");
  },
  98
);
__d(
  "ViewportBounds",
  [
    "Arbiter",
    "ArbiterMixin",
    "BlueBar",
    "ExecutionEnvironment",
    "PageEvents",
    "Vector",
    "emptyFunction",
    "removeFromArray",
  ],
  function (a, b, c, d, e, f) {
    var g = { top: [], right: [], bottom: [], left: [] };
    function a(a) {
      return function () {
        return g[a].reduce(function (a, b) {
          return Math.max(a, b.getSize());
        }, 0);
      };
    }
    function c(a, b) {
      return function (c) {
        return new h(a, c, b);
      };
    }
    var h = (function () {
      "use strict";
      function a(a, c, d) {
        d === void 0 && (d = !1),
          (this.getSide = b("emptyFunction").thatReturns(a)),
          (this.getSize = function () {
            return typeof c === "function" ? c() : c;
          }),
          (this.isPersistent = b("emptyFunction").thatReturns(d)),
          g[a].push(this),
          i.inform("change");
      }
      var c = a.prototype;
      c.remove = function () {
        b("removeFromArray")(g[this.getSide()], this), i.inform("change");
      };
      return a;
    })();
    b("Arbiter").subscribe(b("PageEvents").AJAXPIPE_ONUNLOAD, function () {
      ["top", "right", "bottom", "left"].forEach(function (a) {
        a = g[a];
        for (var b = a.length - 1; b >= 0; b--) {
          var c = a[b];
          c.isPersistent() || c.remove();
        }
      });
    });
    var i = babelHelpers["extends"]({}, b("ArbiterMixin"), {
      getTop: a("top"),
      getRight: a("right"),
      getBottom: a("bottom"),
      getLeft: a("left"),
      getElementPosition: function (a) {
        a = b("Vector").getElementPosition(a);
        a.y -= i.getTop();
        return a;
      },
      addTop: c("top"),
      addRight: c("right"),
      addBottom: c("bottom"),
      addLeft: c("left"),
      addPersistentTop: c("top", !0),
      addPersistentRight: c("right", !0),
      addPersistentBottom: c("bottom", !0),
      addPersistentLeft: c("left", !0),
    });
    i.addPersistentTop(function () {
      if (
        b("ExecutionEnvironment").canUseDOM &&
        b("BlueBar").hasFixedBlueBar()
      ) {
        var a = b("BlueBar").getMaybeFixedRoot();
        return a ? a.offsetHeight : 0;
      }
      return 0;
    });
    e.exports = i;
  },
  null
);
__d(
  "isAsyncScrollQuery",
  ["UserAgent"],
  function (a, b, c, d, e, f, g) {
    var h = null;
    function a() {
      h === null &&
        (h =
          c("UserAgent").isPlatform("Mac OS X >= 10.8") &&
          c("UserAgent").isBrowser("Safari >= 6.0"));
      return h;
    }
    g["default"] = a;
  },
  98
);
__d(
  "ScrollAwareDOM",
  [
    "ArbiterMixin",
    "CSS",
    "DOM",
    "DOMDimensions",
    "HTML",
    "Vector",
    "ViewportBounds",
    "getDocumentScrollElement",
    "getElementPosition",
    "getViewportDimensions",
    "isAsyncScrollQuery",
    "isNode",
  ],
  function (a, b, c, d, e, f, g) {
    function a(a, b) {
      return function () {
        var c = arguments;
        k.monitor(arguments[a], function () {
          b.apply(null, c);
        });
      };
    }
    function h(a) {
      a instanceof Array || (a = [a]);
      for (var b = 0; b < a.length; b++) {
        var d = c("HTML").replaceJSONWrapper(a[b]);
        if (d instanceof c("HTML")) return d.getRootNode();
        else if (c("isNode")(d)) return d;
      }
      return null;
    }
    function i(a) {
      return c("getElementPosition")(a).y > c("ViewportBounds").getTop();
    }
    function j(a) {
      a =
        c("getElementPosition")(a).y +
        d("DOMDimensions").getElementDimensions(a).height;
      var b =
        c("getViewportDimensions")().height - c("ViewportBounds").getBottom();
      return a >= b;
    }
    var k = babelHelpers["extends"](
      {
        monitor: function (a, b) {
          if (c("isAsyncScrollQuery")()) return b();
          a = h(a);
          if (a) {
            var d = !!a.offsetParent;
            if (d && (i(a) || j(a))) return b();
            var e = c("Vector").getDocumentDimensions(),
              f = b();
            if (d || (a.offsetParent && !i(a))) {
              d = c("Vector").getDocumentDimensions().sub(e);
              e = { delta: d, target: a };
              k.inform("scroll", e) !== !1 &&
                d.scrollElementBy(c("getDocumentScrollElement")());
            }
            return f;
          } else return b();
        },
        replace: function (a, b) {
          var e = h(b);
          (!e || d("CSS").hasClass(e, "hidden_elem")) && (e = a);
          return k.monitor(e, function () {
            c("DOM").replace(a, b);
          });
        },
        prependContent: a(1, c("DOM").prependContent),
        insertAfter: a(1, c("DOM").insertAfter),
        insertBefore: a(1, c("DOM").insertBefore),
        setContent: a(0, c("DOM").setContent),
        appendContent: a(1, c("DOM").appendContent),
        remove: a(0, c("DOM").remove),
        empty: a(0, c("DOM").empty),
      },
      c("ArbiterMixin")
    );
    b = k;
    g["default"] = b;
  },
  98
);
__d(
  "ModalLayer",
  [
    "csx",
    "cx",
    "Arbiter",
    "ArbiterMixin",
    "CSS",
    "CometVisualCompletionConstants",
    "DOM",
    "DOMDimensions",
    "DOMQuery",
    "DataStore",
    "Event",
    "Scroll",
    "ScrollAwareDOM",
    "Style",
    "UserAgent",
    "Vector",
    "debounceAcrossTransitions",
    "ge",
    "getDocumentScrollElement",
    "isAsyncScrollQuery",
    "removeFromArray",
    "setTimeout",
    "setTimeoutAcrossTransitions",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    var j = [],
      k = null,
      l = null,
      m = null;
    function n() {
      m ||
        (m =
          d("DOMQuery").scry(document.body, "._li")[0] ||
          c("ge")("FB4BResponsiveMain"));
      return m;
    }
    function o(a) {
      var b = { position: c("Vector").getScrollPosition(), listener: void 0 },
        e = a.offsetTop - b.position.y;
      d("CSS").addClass(a, "_31e");
      n().id !== "FB4BResponsiveMain" && c("Style").set(a, "top", e + "px");
      c("Arbiter").inform("reflow");
      b.listener = c("ScrollAwareDOM").subscribe("scroll", function (e, f) {
        if (d("DOMQuery").contains(a, f.target)) {
          e = a.offsetTop - f.delta.y;
          c("Style").set(a, "top", e + "px");
          b.position = b.position.add(f.delta);
          return !1;
        }
        return !0;
      });
      d("DataStore").set(a, "ModalLayerData", b);
    }
    function p(a, b) {
      var e = d("DataStore").get(a, "ModalLayerData");
      if (e) {
        var f = function () {
          d("CSS").removeClass(a, "_31e");
          c("Style").set(a, "top", "");
          if (b) {
            var f = c("getDocumentScrollElement")();
            d("Scroll").setTop(f, e.position.y);
            d("Scroll").getTop(f) !== e.position.y &&
              (d("Scroll").setTop(f, e.position.y + 1),
              d("Scroll").setTop(f, e.position.y));
          }
          c("Arbiter").inform("reflow");
          e.listener.unsubscribe();
          e.listener = null;
          d("DataStore").remove(a, "ModalLayerData");
        };
        if (b && c("isAsyncScrollQuery")()) {
          var g = c("DOM").create("div", { className: "_42w" });
          c("Style").set(g, "height", a.offsetHeight + "px");
          c("DOM").appendContent(document.body, g);
          var h = c("getDocumentScrollElement")();
          d("Scroll").setTop(h, e.position.y);
          b = !1;
          c("setTimeout")(function () {
            f(), c("DOM").remove(g);
          }, 0);
        } else f();
      }
    }
    function q() {
      var a = n();
      a != null && !d("CSS").matchesSelector(a, "._31e") && o(a);
    }
    function r() {
      j.length || p(n(), !0);
    }
    function s() {
      var a = j.length;
      while (a--) {
        var b = j[a],
          c = b.getLayerRoot();
        if (c) {
          t(c, 0);
          b = b.getLayerContentRoot();
          if (b) {
            b =
              b.offsetWidth +
              d("DOMDimensions").measureElementBox(b, "width", !1, !1, !0);
            t(c, b);
          }
        }
      }
    }
    function t(a, b) {
      c("Style").set(a, "min-width", b + (b ? "px" : ""));
    }
    a = (function () {
      function a(a) {
        (this._layer = a), (this._enabled = !1);
      }
      var b = a.prototype;
      b.enable = function () {
        var a = this;
        if (!n()) return;
        this._subscription = this._layer.subscribe(
          ["show", "hide"],
          function (b) {
            b == "show" ? a._addModal() : a._removeModal();
          }
        );
        this._layer.isShown() && this._addModal();
        this._enabled = !0;
      };
      b.disable = function () {
        if (!n()) return;
        this._subscription && this._subscription.unsubscribe();
        this._layer.isShown() && this._removeModal();
        this._enabled = !1;
      };
      b._addModal = function () {
        var b = this.getLayerRoot();
        d("CSS").addClass(b, "_3qw");
        this._wash = c("DOM").create("div", { className: "_3ixn" });
        c("DOM").prependContent(b, this._wash);
        b &&
          this._layer._config.ignoreVC &&
          b.setAttribute(
            c("CometVisualCompletionConstants").ATTRIBUTE_NAME,
            c("CometVisualCompletionConstants").IGNORE
          );
        b = j[j.length - 1];
        b ? o(b.getLayerRoot()) : q();
        b = c("getDocumentScrollElement")();
        d("Scroll").setTop(b, 0);
        if (!j.length) {
          b = c("debounceAcrossTransitions")(s, 100);
          k = c("Event").listen(window, "resize", b);
          l = c("Arbiter").subscribe("reflow", b);
        }
        j.push(this);
        a.inform("show", this);
        c("setTimeout")(s, 0);
      };
      b._removeModal = function () {
        var b = this,
          e = this.getLayerRoot();
        d("CSS").removeClass(e, "_3qw");
        c("DOM").remove(this._wash);
        this._wash = null;
        t(e, 0);
        var f = this === j[j.length - 1];
        c("removeFromArray")(j, this);
        j.length ||
          (k && k.remove(), (k = null), l && l.unsubscribe(), (l = null));
        var g;
        c("UserAgent").isBrowser("Safari") &&
          ((e = c("Event").listen(
            document.documentElement,
            "mousewheel",
            c("Event").prevent
          )),
          (g = e.remove.bind(e)));
        c("setTimeoutAcrossTransitions")(function () {
          var d = j[j.length - 1];
          d
            ? (p(d.getLayerRoot(), f), a.inform("show", d))
            : (r(), a.inform("hide", b));
          j.length && c("setTimeout")(s, 0);
          c("UserAgent").isBrowser("Safari") &&
            c("setTimeout")(function () {
              g();
            }, 0);
        }, 200);
      };
      b.getLayerRoot = function () {
        return this._enabled ? this._layer.getRoot() : null;
      };
      b.getLayerContentRoot = function () {
        return this._enabled ? this._layer.getContentRoot() : null;
      };
      a.getTopmostModalLayer = function () {
        return j[j.length - 1];
      };
      return a;
    })();
    Object.assign(a, c("ArbiterMixin"));
    g["default"] = a;
  },
  98
);
__d(
  "DialogX",
  [
    "cx",
    "fbt",
    "Arbiter",
    "CSS",
    "DOMQuery",
    "DialogPosition",
    "Event",
    "JSXDOM",
    "Layer",
    "LayerAutoFocus",
    "LayerButtons",
    "LayerFormHooks",
    "LayerRefocusOnHide",
    "LayerTabIsolation",
    "LayerTogglerContext",
    "ModalLayer",
    "Style",
    "Vector",
    "debounce",
    "getOrCreateDOMID",
    "goURI",
    "isTruthy",
    "shield",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var e = b.prototype;
      e._configure = function (b, e) {
        var f = this;
        a.prototype._configure.call(this, b, e);
        e = this.getRoot();
        e != null && d("CSS").addClass(e, "_4-hy");
        if (b.autohide)
          var g = this.subscribe("show", function () {
            g.unsubscribe(),
              window.setTimeout(c("shield")(f.hide, f), b.autohide);
          });
        if (b.redirectURI)
          var h = this.subscribe("hide", function () {
            h.unsubscribe();
            var a = b.redirectURI;
            a != null && c("goURI")(a);
          });
        this._fixedTopPosition = b.fixedTopPosition;
        this._ignoreFixedTopInShortViewport = b.ignoreFixedTopInShortViewport;
        this._isVerticallyCentered = b.isVerticallyCentered;
      };
      e._getDefaultBehaviors = function () {
        return a.prototype._getDefaultBehaviors
          .call(this)
          .concat(
            [
              j,
              c("ModalLayer"),
              this._config.autofocus === !1 ? void 0 : c("LayerAutoFocus"),
              c("LayerButtons"),
              c("LayerFormHooks"),
              c("LayerTabIsolation"),
              c("LayerTogglerContext"),
              c("LayerRefocusOnHide"),
            ].filter(c("isTruthy"))
          );
      };
      e._buildWrapper = function (a, b) {
        var e = a.xui ? "_4t2a" : "_t _9l18",
          f = a.xui ? "_59s7 _9l2g" : "_1yv";
        this._innerContent = c("JSXDOM").div(null, b);
        b = { className: f, role: "dialog" };
        if (a.labelledBy) b["aria-labelledby"] = a.labelledBy;
        else if (a.label) b["aria-label"] = a.label;
        else if (a.titleID) b["aria-labelledby"] = a.titleID;
        else if (a.titleClass) {
          f = d("DOMQuery").scry(this._innerContent, a.titleClass);
          if (f.length) {
            f = c("getOrCreateDOMID")(f[0]);
            b["aria-labelledby"] = f;
          } else b["aria-label"] = this._getDefaultLabel();
        } else b["aria-label"] = this._getDefaultLabel();
        f = { className: e };
        a["data-testid"] && (f["data-testid"] = a["data-testid"]);
        this._wrapper = c("JSXDOM").div(
          b,
          c("JSXDOM").div(f, this._innerContent)
        );
        a.width != null && this.setWidth(a.width);
        a.height != null && this.setHeight(a.height);
        return c("JSXDOM").div({ className: "_10" }, this._wrapper);
      };
      e._getDefaultLabel = function () {
        return i._("Contenu de la bo\u00eete de dialogue");
      };
      e.getContentRoot = function () {
        return this._wrapper;
      };
      e.getInnerContent = function () {
        return this._innerContent;
      };
      e.updatePosition = function () {
        var a = c("Vector").getElementDimensions(this._wrapper);
        a = d("DialogPosition").calculateTopMargin(
          a.x,
          a.y,
          this._fixedTopPosition,
          (a = this._ignoreFixedTopInShortViewport) != null ? a : !1,
          (a = this._isVerticallyCentered) != null ? a : !1
        );
        c("Style").set(this._wrapper, "margin-top", a + "px");
        this.inform("update_position", { type: "DialogX", top: a });
        return !0;
      };
      e.setWidth = function (a) {
        if (a === "100%")
          (this._width = void 0), c("Style").set(this._wrapper, "width", "");
        else {
          a = Math.floor(a);
          if (a === this._width) return;
          this._width = a;
          c("Style").set(this._wrapper, "width", a + "px");
        }
      };
      e.getWidth = function () {
        return this._width;
      };
      e.setHeight = function (a) {
        a = Math.floor(a);
        if (a === this._height) return;
        this._height = a;
        c("Style").set(this._wrapper, "height", a + "px");
      };
      e.getFixedTopPosition = function () {
        return this._fixedTopPosition;
      };
      e.shouldIgnoreFixedTopInShortViewport = function () {
        return this._ignoreFixedTopInShortViewport;
      };
      return b;
    })(c("Layer"));
    var j = (function () {
      function a(a) {
        (this._subscription = null), (this._resize = null), (this._layer = a);
      }
      var b = a.prototype;
      b.enable = function () {
        var a = this;
        this._subscription = this._layer.subscribe(
          ["show", "hide"],
          function (b) {
            b === "show"
              ? (a._attach(),
                c("Arbiter").inform("layer_shown", { type: "DialogX" }))
              : (a._detach(),
                c("Arbiter").inform("layer_hidden", { type: "DialogX" }));
          }
        );
      };
      b.disable = function () {
        var a;
        (a = this._subscription) == null ? void 0 : a.unsubscribe();
        this._subscription = null;
        this._resize && this._detach();
      };
      b._attach = function () {
        this._layer.updatePosition(),
          (this._resize = c("Event").listen(
            window,
            "resize",
            c("debounce")(this._layer.updatePosition.bind(this._layer))
          ));
      };
      b._detach = function () {
        var a;
        (a = this._resize) == null ? void 0 : a.remove();
        this._resize = null;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "LayerHideOnBlur",
  ["LayerHideSources", "requestAnimationFrame"],
  function (a, b, c, d, e, f, g) {
    a = (function () {
      function a(a) {
        this._layer = a;
      }
      var b = a.prototype;
      b.enable = function () {
        (this._subscriptions = [
          this._layer.subscribe("show", this._attach.bind(this)),
          this._layer.subscribe("hide", this._detach.bind(this)),
        ]),
          this._layer.isShown() && this._attach();
      };
      b.disable = function () {
        this._detach();
        while (this._subscriptions && this._subscriptions.length)
          this._subscriptions.pop().unsubscribe();
        this._subscriptions = null;
      };
      b._detach = function () {
        this._onBlur && this._onBlur.unsubscribe(), (this._onBlur = null);
      };
      b._attach = function () {
        var a = this;
        this._onBlur = this._layer.subscribe("blur", function () {
          c("requestAnimationFrame")(function () {
            a._layer.hide(c("LayerHideSources").BLUR);
          });
          return !1;
        });
      };
      return a;
    })();
    Object.assign(a.prototype, { _subscriptions: null, _onBlur: null });
    g["default"] = a;
  },
  98
);
__d(
  "LayerHideOnEscape",
  ["Event", "Keys", "LayerHideSources"],
  function (a, b, c, d, e, f, g) {
    a = (function () {
      function a(a) {
        this._layer = a;
      }
      var b = a.prototype;
      b.enable = function () {
        this._subscription = this._layer.subscribe(
          "key",
          this.handle.bind(this)
        );
      };
      b.disable = function () {
        this._subscription != null && this._subscription.unsubscribe(),
          (this._subscription = null);
      };
      b.handle = function (a, b) {
        if (c("Event").getKeyCode(b) === c("Keys").ESC) {
          this._layer.hide(c("LayerHideSources").ESCAPE);
          return !1;
        }
        return void 0;
      };
      return a;
    })();
    Object.assign(a.prototype, { _subscription: null });
    g["default"] = a;
  },
  98
);
__d(
  "AbstractDialog.react",
  ["DialogX", "LayerHideOnBlur", "LayerHideOnEscape", "ReactDOM", "prop-types"],
  function (a, b, c, d, e, f, g) {
    function a(a) {
      return {
        displayName: a.displayName,
        propTypes: {
          behaviors: c("prop-types").object,
          className: c("prop-types").string,
          "data-testid": c("prop-types").string,
          modal: c("prop-types").bool,
          autofocus: c("prop-types").bool,
          autohide: c("prop-types").number,
          width: c("prop-types").oneOfType([
            c("prop-types").number,
            c("prop-types").string,
          ]),
          label: c("prop-types").node,
          labelledBy: c("prop-types").string,
          titleID: c("prop-types").string,
          titleClass: c("prop-types").string,
          causalElement: c("prop-types").object,
          causalElementRef: c("prop-types").func,
          shown: c("prop-types").bool,
          layerHideOnBlur: c("prop-types").bool,
          hideOnEscape: c("prop-types").bool,
          isStrictlyControlled: c("prop-types").bool,
          onHide: c("prop-types").func,
          onToggle: c("prop-types").func,
          fixedTopPosition: c("prop-types").number,
          isVerticallyCentered: c("prop-types").bool,
        },
        createLayer: function (b) {
          var d = this.props.className;
          d = babelHelpers["extends"](
            {
              "data-testid": this.props["data-testid"]
                ? this.props["data-testid"]
                : void 0,
              width: this.props.width,
              xui: !0,
              autofocus: this.props.autofocus,
              autohide: this.props.autohide,
              classNames: d ? d.split(" ") : null,
              label: this.props.label,
              labelledBy: this.props.labelledBy,
              isStrictlyControlled: this.props.isStrictlyControlled,
              isVerticallyCentered: this.props.isVerticallyCentered,
              titleID: this.props.titleID,
              titleClass: this.props.titleClass,
              causalElement: this._getCausalElement(),
              fixedTopPosition: this.props.fixedTopPosition,
            },
            a || {}
          );
          var e = babelHelpers["extends"](
            {},
            a.addedBehaviors,
            this.props.behaviors
          );
          this.props.layerHideOnBlur !== !1 &&
            (e.LayerHideOnBlur = c("LayerHideOnBlur"));
          (this.props.hideOnEscape === !0 ||
            (this.props.hideOnEscape !== !1 && a.hideOnEscape === !0)) &&
            (e.LayerHideOnEscape = c("LayerHideOnEscape"));
          d.addedBehaviors = this.enumerateBehaviors(e);
          e = new (c("DialogX"))(d, b);
          e.conditionShow(this.props.shown);
          return e;
        },
        receiveProps: function (a, b) {
          this.updateBehaviors(b.behaviors, a.behaviors),
            this.layer &&
              (this.layer.setCausalElement(this._getCausalElement()),
              this.layer.conditionShow(a.shown),
              this.layer.setWidth(a.width),
              a.shown && this.layer.updatePosition());
        },
        _getCausalElement: function () {
          var a;
          this.props.causalElementRef
            ? (a = d("ReactDOM").findDOMNode(this.props.causalElementRef()))
            : (a = this.props.causalElement);
          return a;
        },
      };
    }
    g.createSpec = a;
  },
  98
);
__d(
  "ARIA",
  ["DOM", "emptyFunction", "ge", "getOrCreateDOMID", "joinClasses"],
  function (a, b, c, d, e, f, g) {
    var h,
      i,
      j = function () {
        (h = c("ge")("ariaAssertiveAlert")),
          h ||
            ((h = c("DOM").create("div", {
              id: "ariaAssertiveAlert",
              className: c("joinClasses")(
                "accessible_elem",
                "accessible_elem_offset"
              ),
              "aria-live": "assertive",
            })),
            c("DOM").appendContent(document.body, h)),
          (i = c("ge")("ariaPoliteAlert")),
          i ||
            ((i = h.cloneNode(!1)),
            i.setAttribute("id", "ariaPoliteAlert"),
            i.setAttribute("aria-live", "polite"),
            c("DOM").appendContent(document.body, i)),
          (j = c("emptyFunction"));
      };
    function k(a, b) {
      j();
      b = b ? h : i;
      c("DOM").setContent(b, a);
    }
    function a(a) {
      for (
        var b = arguments.length, d = new Array(b > 1 ? b - 1 : 0), e = 1;
        e < b;
        e++
      )
        d[e - 1] = arguments[e];
      var f = d
        .map(function (a) {
          return c("getOrCreateDOMID")(a);
        })
        .join(" ");
      a.setAttribute("aria-controls", f);
    }
    function b(a) {
      for (
        var b = arguments.length, d = new Array(b > 1 ? b - 1 : 0), e = 1;
        e < b;
        e++
      )
        d[e - 1] = arguments[e];
      var f = d
        .map(function (a) {
          return c("getOrCreateDOMID")(a);
        })
        .join(" ");
      a.setAttribute("aria-describedby", f);
    }
    function d(a, b) {
      a.setAttribute("aria-owns", c("getOrCreateDOMID")(b));
    }
    function e(a, b) {
      b = c("getOrCreateDOMID")(b);
      a.setAttribute("aria-controls", b);
      a.setAttribute("aria-haspopup", "true");
      b = a.getAttribute("role") || "";
      b && a.setAttribute("role", b);
    }
    function f(a) {
      k(a, !0);
    }
    function l(a) {
      k(a, !1);
    }
    g.controls = a;
    g.describedBy = b;
    g.owns = d;
    g.setPopup = e;
    g.announce = f;
    g.notify = l;
  },
  98
);
__d(
  "ContextualLayerAlignmentEnum",
  ["keyMirror", "objectValues", "prop-types"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("keyMirror")({ left: null, center: null, right: null });
    b = c("objectValues")(a);
    d = c("prop-types").oneOf(b);
    e = babelHelpers["extends"]({}, a, { values: b, propType: d });
    g["default"] = e;
  },
  98
);
__d(
  "ContextualLayerPositionEnum",
  ["keyMirror", "objectValues", "prop-types"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("keyMirror")({ above: null, below: null, left: null, right: null });
    b = c("objectValues")(a);
    d = c("prop-types").oneOf(b);
    e = babelHelpers["extends"]({}, a, { values: b, propType: d });
    g["default"] = e;
  },
  98
);
__d(
  "Rect",
  ["invariant", "$", "Vector", "react"],
  function (a, b, c, d, e, f, g, h) {
    d("react");
    a = (function () {
      function a(b, d, e, f, g) {
        if (arguments.length === 1) {
          if (b instanceof a) return b;
          if (b instanceof c("Vector"))
            return new a(b.y, b.x, b.y, b.x, b.domain);
          typeof b === "string" && (b = c("$")(b));
          return a.getElementBounds(b);
        }
        (typeof b === "number" &&
          typeof d === "number" &&
          typeof e === "number" &&
          typeof f === "number" &&
          (!g || typeof g === "string")) ||
          h(0, 1087);
        Object.assign(this, { t: b, r: d, b: e, l: f, domain: g || "pure" });
        return this;
      }
      var b = a.prototype;
      b.w = function () {
        return this.r - this.l;
      };
      b.h = function () {
        return this.b - this.t;
      };
      b.getWidth = function () {
        return this.w();
      };
      b.getHeight = function () {
        return this.h();
      };
      b.toString = function () {
        return (
          "((" + this.l + ", " + this.t + "), (" + this.r + ", " + this.b + "))"
        );
      };
      b.contains = function (b) {
        b = new a(b).convertTo(this.domain);
        var c = this;
        return c.l <= b.l && c.r >= b.r && c.t <= b.t && c.b >= b.b;
      };
      b.intersection = function (b) {
        b = b.convertTo(this.domain);
        var c = Math.min(this.b, b.getBottom()),
          d = Math.max(this.l, b.getLeft()),
          e = Math.min(this.r, b.getRight());
        b = Math.max(this.t, b.getTop());
        return c > b && e > d ? new a(b, e, c, d) : null;
      };
      b.isEqualTo = function (a) {
        return (
          this.t === a.t &&
          this.r === a.r &&
          this.b === a.b &&
          this.l === a.l &&
          this.domain === a.domain
        );
      };
      b.add = function (b, d) {
        if (arguments.length == 1) {
          b instanceof a &&
            b.domain != "pure" &&
            (b = b.convertTo(this.domain));
          return b instanceof c("Vector") ? this.add(b.x, b.y) : this;
        }
        var e = parseFloat(b),
          f = parseFloat(d);
        return new a(
          this.t + f,
          this.r + e,
          this.b + f,
          this.l + e,
          this.domain
        );
      };
      b.sub = function (a, b) {
        if (arguments.length == 1 && a instanceof c("Vector"))
          return this.add(a.mul(-1));
        else if (typeof a === "number" && typeof b === "number")
          return this.add(-a, -b);
        return this;
      };
      b.rotateAroundOrigin = function (b) {
        var c = this.getCenter().rotate((b * Math.PI) / 2),
          d = 0;
        b % 2
          ? ((d = this.h()), (b = this.w()))
          : ((d = this.w()), (b = this.h()));
        var e = c.y - b / 2;
        c = c.x - d / 2;
        b = e + b;
        d = c + d;
        return new a(e, d, b, c, this.domain);
      };
      b.boundWithin = function (a) {
        var b = 0,
          c = 0;
        this.l < a.l ? (b = a.l - this.l) : this.r > a.r && (b = a.r - this.r);
        this.t < a.t ? (c = a.t - this.t) : this.b > a.b && (c = a.b - this.b);
        return this.add(b, c);
      };
      b.getCenter = function () {
        return new (c("Vector"))(
          this.l + this.w() / 2,
          this.t + this.h() / 2,
          this.domain
        );
      };
      b.getTop = function () {
        return this.t;
      };
      b.getRight = function () {
        return this.r;
      };
      b.getBottom = function () {
        return this.b;
      };
      b.getLeft = function () {
        return this.l;
      };
      b.getArea = function () {
        return (this.b - this.t) * (this.r - this.l);
      };
      b.getPositionVector = function () {
        return new (c("Vector"))(this.l, this.t, this.domain);
      };
      b.getDimensionVector = function () {
        return new (c("Vector"))(this.w(), this.h(), "pure");
      };
      b.convertTo = function (b) {
        if (this.domain == b) return this;
        if (b == "pure") return new a(this.t, this.r, this.b, this.l, "pure");
        if (this.domain == "pure") return new a(0, 0, 0, 0);
        var d = new (c("Vector"))(this.l, this.t, this.domain).convertTo(b);
        return new a(d.y, d.x + this.w(), d.y + this.h(), d.x, b);
      };
      a.deserialize = function (b) {
        b = b.split(":");
        return new a(
          parseFloat(b[1]),
          parseFloat(b[2]),
          parseFloat(b[3]),
          parseFloat(b[0])
        );
      };
      a.newFromVectors = function (b, c) {
        return new a(b.y, b.x + c.x, b.y + c.y, b.x, b.domain);
      };
      a.getElementBounds = function (b) {
        return a.newFromVectors(
          c("Vector").getElementPosition(b),
          c("Vector").getElementDimensions(b)
        );
      };
      a.getViewportBounds = function () {
        return a.newFromVectors(
          c("Vector").getScrollPosition(),
          c("Vector").getViewportDimensions()
        );
      };
      a.getViewportWithoutScrollbarsBounds = function () {
        return a.newFromVectors(
          c("Vector").getScrollPosition(),
          c("Vector").getViewportWithoutScrollbarDimensions()
        );
      };
      a.minimumBoundingBox = function (b) {
        var c = new a(Infinity, -Infinity, -Infinity, Infinity),
          d;
        for (var e = 0; e < b.length; e++)
          (d = b[e]),
            (c.t = Math.min(c.t, d.t)),
            (c.r = Math.max(c.r, d.r)),
            (c.b = Math.max(c.b, d.b)),
            (c.l = Math.min(c.l, d.l));
        return c;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "SVGChecker",
  [],
  function (a, b, c, d, e, f) {
    e.exports = {
      isSVG: function (a) {
        return !!a.ownerSVGElement || a.tagName.toLowerCase() === "svg";
      },
      isDisplayed: function (a) {
        try {
          a = a.getBBox();
          if (a && (a.height === 0 || a.width === 0)) return !1;
        } catch (a) {
          return !1;
        }
        return !0;
      },
    };
  },
  null
);
__d(
  "getOverlayZIndex",
  ["Style"],
  function (a, b, c, d, e, f, g) {
    function a(a, b, d) {
      d = d === void 0 ? {} : d;
      d = d.includeStaticPosition;
      d = d === void 0 ? !1 : d;
      b = b;
      a = a;
      b = b || document.body;
      var e = [];
      while (a && a !== b) e.push(a), (a = a.parentNode);
      if (a !== b) return 0;
      for (a = e.length - 1; a >= 0; a--) {
        b = e[a];
        if (d === !0 || c("Style").get(b, "position") != "static") {
          b = parseInt(c("Style").get(b, "z-index"), 10);
          if (!isNaN(b)) return b;
        }
      }
      return 0;
    }
    g["default"] = a;
  },
  98
);
__d(
  "getOwnObjectValues",
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      return Object.keys(a).map(function (b) {
        return a[b];
      });
    }
    f["default"] = a;
  },
  66
);
__d(
  "ContextualLayer",
  [
    "ARIA",
    "Arbiter",
    "Bootloader",
    "CSS",
    "CometVisualCompletionAttributes",
    "ContextualLayerAlignmentEnum",
    "ContextualLayerPositionEnum",
    "ContextualThing",
    "DOM",
    "DataStore",
    "Event",
    "Layer",
    "Locale",
    "Parent",
    "Rect",
    "SVGChecker",
    "Scroll",
    "Style",
    "Vector",
    "containsNode",
    "cr:971473",
    "debounce",
    "emptyFunction",
    "getOffsetParent",
    "getOrCreateDOMID",
    "getOverlayZIndex",
    "getOwnObjectValues",
    "gkx",
    "isElementNode",
    "killswitch",
    "removeFromArray",
    "throttle",
  ],
  function (a, b, c, d, e, f) {
    function g(a) {
      return (
        a.getPosition() === "left" ||
        (a.isVertical() && a.getAlignment() === "right")
      );
    }
    a = (function (a) {
      "use strict";
      babelHelpers.inheritsLoose(c, a);
      function c() {
        return a.apply(this, arguments) || this;
      }
      var d = c.prototype;
      d._configure = function (b, c) {
        b.dialogRole !== "dialog" && (this._dialogRole = b.dialogRole),
          b.shouldSetARIAProperties === !1 &&
            (this._shouldSetARIAProperties = b.shouldSetARIAProperties),
          b.label && (this._label = b.label),
          b.labelledBy && (this._labelledBy = b.labelledBy),
          a.prototype._configure.call(this, b, c),
          b.context
            ? this.setContext(b.context)
            : b.contextID
            ? this._setContextID(b.contextID)
            : b.contextSelector &&
              (this._setContextSelector(b.contextSelector),
              this._setARIAProperties()),
          this.setPosition(b.position),
          this.setAlignment(b.alignment),
          this.setOffsetX(b.offsetX),
          this.setOffsetY(b.offsetY),
          this.setArrowDimensions(b.arrowDimensions),
          (this._content = c);
      };
      d._getDefaultBehaviors = function () {
        var d = c.getDefaultBehaviorsAsObject();
        return a.prototype._getDefaultBehaviors
          .call(this)
          .concat(b("getOwnObjectValues")(d));
      };
      d._buildWrapper = function (a, c) {
        this._contentWrapper = b("DOM").create(
          "div",
          { className: "uiContextualLayer" },
          c
        );
        this._dialogRole &&
          this._contentWrapper.setAttribute("role", this._dialogRole);
        this._labelledBy
          ? this._contentWrapper.setAttribute(
              "aria-labelledby",
              this._labelledBy
            )
          : this._label &&
            this._contentWrapper.setAttribute("aria-label", this._label);
        this._dialogRole === "alert" &&
          this._contentWrapper.setAttribute("aria-atomic", "true");
        return b("DOM").create(
          "div",
          babelHelpers["extends"](
            {
              className: "uiContextualLayerPositioner",
              "data-testid": a["data-testid"],
            },
            a.excludeFromHeroVC
              ? b("CometVisualCompletionAttributes").IGNORE
              : {}
          ),
          this._contentWrapper
        );
      };
      d.getInsertParent = function () {
        var c = this._insertParent;
        if (!c) {
          var d = this.getContext();
          d && (c = b("Parent").byClass(d, "uiContextualLayerParent"));
        }
        return c || a.prototype.getInsertParent.call(this);
      };
      d.setContent = function (a) {
        this._content = a;
        b("DOM").setContent(this._contentWrapper, this._content);
        this._shown && this._updatePosition();
        return this;
      };
      d.setContext = function (a) {
        return this.setContextWithBounds(a, null);
      };
      d.setContextWithBounds = function (a, c) {
        if (
          this._contextNode === a &&
          c &&
          this._contextBounds &&
          c.isEqualTo(this._contextBounds)
        )
          return this;
        this._contextNode = a;
        var d =
          c &&
          this._contextBounds &&
          c.t === this._contextBounds.t &&
          c.r === this._contextBounds.r &&
          c.b === this._contextBounds.b &&
          c.l === this._contextBounds.l;
        if (d) return this;
        this._contextBounds = c || null;
        this._contextSelector = "#" + b("getOrCreateDOMID")(a);
        this._contextScrollParent = null;
        this._shown &&
          (b("ContextualThing").register(this.getRoot(), this._contextNode),
          this._updatePosition());
        this._setParentSubscription();
        this._setARIAProperties();
        return this;
      };
      d.shouldSetARIAProperties = function (a) {
        this._shouldSetARIAProperties = a;
        return this;
      };
      d._setARIAProperties = function () {
        var a = this;
        if (!this._shouldSetARIAProperties) return this;
        this._dialogRole === "dialog"
          ? b("ARIA").setPopup(this.getCausalElement(), this.getRoot())
          : this._dialogRole === "region" &&
            b("Bootloader").loadModules(
              ["ContextualLayerInlineTabOrder"],
              function (b) {
                a.hasBehavior(b) || a.enableBehavior(b);
              },
              "ContextualLayer"
            );
        return this;
      };
      d._setContextID = function (a) {
        (this._contextSelector = "#" + a), (this._contextNode = null);
      };
      d._setContextSelector = function (a) {
        (this._contextSelector = a), (this._contextNode = null);
      };
      d.getCausalElement = function () {
        return a.prototype.getCausalElement.call(this) || this.getContext();
      };
      d._setParentSubscription = function () {
        var a = this.getContext(),
          c = null;
        while (a != null) {
          c = b("DataStore").get(a, "layer");
          if (c && typeof c === "object") break;
          a = a.parentNode;
        }
        if (c === this._parentLayer) return;
        this._parentLayer &&
          this._parentSubscription &&
          (this._parentLayer.unsubscribe(this._parentSubscription),
          (this._parentSubscription = null));
        c &&
          (this._parentSubscription = c.subscribe(
            "hide",
            this.hide.bind(this)
          ));
        this._parentLayer = c;
      };
      d.setPosition = function (a) {
        this.getOrientation().setDefaultPosition(a) &&
          this._shown &&
          this._updatePosition();
        return this;
      };
      d.setAlignment = function (a) {
        this.getOrientation().setDefaultAlignment(a) &&
          this._shown &&
          this._updatePosition();
        return this;
      };
      d.setOffsetX = function (a) {
        this.getOrientation().setDefaultOffsetX(a) &&
          this._shown &&
          this._updatePosition();
        return this;
      };
      d.setArrowDimensions = function (a) {
        a &&
          this.getOrientation().setArrowOffset(a.offset) &&
          this._shown &&
          this._updatePosition();
        return this;
      };
      d.setOffsetY = function (a) {
        this.getOrientation().setDefaultOffsetY(a) &&
          this._shown &&
          this._updatePosition();
        return this;
      };
      d.getPosition = function () {
        return this.getOrientation().getPosition();
      };
      d.getOrientation = function () {
        this._orientation || (this._orientation = new k());
        return this._orientation;
      };
      d.getContentRoot = function () {
        return this._contentWrapper;
      };
      d.getContent = function () {
        return this._content;
      };
      d.getContext = function () {
        var a;
        !this._contextNode &&
          this._contextSelector &&
          (this._contextNode = b("DOM").find(document, this._contextSelector));
        return (a = this._contextNode) != null ? a : null;
      };
      d.getContextBounds = function (a) {
        if (this._contextBounds) return this._contextBounds.convertTo(a);
        var c = this.getContext();
        return b("Rect").newFromVectors(
          b("Vector").getElementPosition(c, a),
          b("Vector").getElementDimensions(c)
        );
      };
      d.getContextScrollParent = function () {
        !this._contextScrollParent
          ? (this._contextScrollParent = b("Style").getScrollParent(
              this.getContext()
            ))
          : b("isElementNode")(this._contextScrollParent) &&
            !b("containsNode")(
              document.documentElement,
              this._contextScrollParent
            ) &&
            (this._contextScrollParent = b("Style").getScrollParent(
              this.getContext()
            ));
        return this._contextScrollParent;
      };
      d.setInsertParent = function (b) {
        this._insertScrollParent = null;
        return a.prototype.setInsertParent.call(this, b);
      };
      d.getInsertScrollParent = function () {
        this._insertScrollParent ||
          (this._insertScrollParent = b("Style").getScrollParent(
            this.getInsertParent()
          ));
        return this._insertScrollParent;
      };
      d.show = function () {
        var c = this;
        if (this._shown) return this;
        a.prototype.show.call(this);
        b("Arbiter").inform("contextualLayer/toggle", {
          show: !0,
          contentRoot: this.getRoot(),
        });
        if (this._shown) {
          if (!this.getContext()) return this;
          b("ContextualThing").register(this.getRoot(), this.getContext());
          h.push(this);
          this._resizeListener =
            this._resizeListener ||
            b("Event").listen(
              window,
              "resize",
              b("throttle")(function () {
                c._shown && c.updatePosition();
              })
            );
        }
        return this;
      };
      d.finishHide = function () {
        b("removeFromArray")(h, this);
        this._resizeListener && this._resizeListener.remove();
        this._resizeListener = null;
        this._insertScrollParent = null;
        b("Arbiter").inform("contextualLayer/toggle", {
          show: !1,
          contentRoot: this.getRoot(),
        });
        return a.prototype.finishHide.call(this);
      };
      d.isFixed = function () {
        return (
          b("Style").isFixed(this.getContext()) &&
          !b("Style").isFixed(this.getInsertParent())
        );
      };
      d.updatePosition = function () {
        var a = this.getContext();
        if (!a) return !1;
        var c = this.isFixed();
        if (
          !c &&
          !(
            a.offsetParent ||
            (b("SVGChecker").isSVG(a) && b("SVGChecker").isDisplayed(a))
          )
        )
          return !1;
        var d = this.getRoot();
        if (d == null || this._contentWrapper == null) return !1;
        var e = !b("killswitch")("CONTEXTUAL_POSITIONING_MOBILE_FIX"),
          f = e
            ? b("Vector").getLayoutViewportDimensions().x
            : b("Vector").getViewportDimensions().x;
        b("Style").set(d, "width", f + "px");
        var h = this.getOrientation();
        this.inform("adjust", h.reset());
        if (!h.isValid()) return !1;
        this._updateWrapperPosition(h);
        this._updateWrapperClass(h);
        b("CSS").conditionClass(d, "uiContextualLayerPositionerFixed", c);
        var i = c ? "viewport" : "document",
          j = c ? document.documentElement : b("getOffsetParent")(d);
        if (c && e) (c = new (b("Vector"))(0, 0)), (e = f);
        else if (j === document.documentElement)
          (c = new (b("Vector"))(0, 0)),
            (e = document.documentElement.clientWidth);
        else if (!d.offsetParent) return !1;
        else
          (c = b("Vector").getElementPosition(j, i)),
            (e = j.offsetWidth),
            j !== document.body &&
              (c = c.sub(
                new (b("Vector"))(b("Scroll").getLeft(j), b("Scroll").getTop(j))
              ));
        f = this.getContextBounds(i);
        j = f.l - c.x;
        i = f.t - c.y;
        c = f.h();
        var k = f.w(),
          l = b("Locale").isRTL();
        h.getPosition() === "below" && (i += c);
        (h.getPosition() === "right" ||
          (h.isVertical() && h.getAlignment() === "right")) != l && (j += k);
        b("gkx")("3212") &&
          !h.isVertical() &&
          h.getAlignment() === "center" &&
          (i += f.h() / 2 - this.getContentRoot().offsetHeight / 2);
        c = h.getOffsetX();
        h.isVertical() &&
          h.getAlignment() === "center" &&
          (c += (k - this.getContentRoot().offsetWidth) / 2);
        l && (c *= -1);
        f = "left";
        k = Math.floor(j + c);
        g(h) !== l && ((f = "right"), (k = e - k));
        b("Style").set(d, f, k + "px");
        b("Style").set(d, f === "left" ? "right" : "left", "");
        j = this.getInsertScrollParent();
        c = 0;
        j !== window
          ? ((l = j.clientWidth), (c = b("Vector").getElementPosition(j).x))
          : (l = document.documentElement.clientWidth);
        e = b("Vector").getElementPosition(d).x - c;
        k = 0;
        j = window.devicePixelRatio !== Math.round(window.devicePixelRatio);
        k = j ? 1 : 0;
        b("gkx")("1908135") && (k = 1);
        f === "left" && l - e > 0
          ? b("Style").set(d, "width", l - e - k + "px")
          : f === "right" && e + d.offsetWidth > 0
          ? b("Style").set(d, "width", e + d.offsetWidth - k + "px")
          : b("Style").set(d, "width", "");
        b("Style").set(d, "top", i + h.getOffsetY() + "px");
        c = b("getOverlayZIndex")(a, this.getInsertParent());
        b("Style").set(d, "z-index", c > 200 ? c : "");
        this.inform("reposition", h);
        return !0;
      };
      d._updatePosition = function () {
        var a = this;
        if (this._debouncedUpdatePosition) {
          this._debouncedUpdatePosition();
          return;
        }
        this._debouncedUpdatePosition = b("debounce")(function () {
          a._shown && a.updatePosition(), delete a._debouncedUpdatePosition;
        });
        return this.updatePosition();
      };
      d._updateWrapperPosition = function (a) {
        var c = a.getPosition() === "above";
        b("Style").set(this._contentWrapper, "bottom", c ? "0" : null);
        c = b("Locale").isRTL() ? "left" : "right";
        a = g(a);
        b("Style").set(this._contentWrapper, c, a ? "0" : null);
      };
      d._updateWrapperClass = function (a) {
        a = a.getClassName();
        if (a === this._orientationClass) return;
        this._orientationClass &&
          b("CSS").removeClass(this._contentWrapper, this._orientationClass);
        this._orientationClass = a;
        b("CSS").addClass(this._contentWrapper, a);
      };
      d.simulateOrientation = function (a, c) {
        a = a.getClassName();
        if (a === this._orientationClass) return c();
        else {
          this._orientationClass &&
            b("CSS").removeClass(this._contentWrapper, this._orientationClass);
          b("CSS").addClass(this._contentWrapper, a);
          c = c();
          b("CSS").removeClass(this._contentWrapper, a);
          this._orientationClass &&
            b("CSS").addClass(this._contentWrapper, this._orientationClass);
          return c;
        }
      };
      d.destroy = function () {
        a.prototype.destroy.call(this);
        this._contentWrapper = null;
        this._content = null;
        return this;
      };
      d.getArrowDimensions = function () {
        return this._config.arrowDimensions || { offset: 0, length: 0 };
      };
      c.getDefaultBehaviorsAsObject = function () {
        return b("cr:971473") == null
          ? {}
          : { LayerHideOnTransition: b("cr:971473") };
      };
      return c;
    })(b("Layer"));
    var h = [];
    b("Arbiter").subscribe("reflow", function () {
      h.forEach(function (a) {
        a.updatePosition() === !1 && a.hide();
      });
    });
    Object.assign(a.prototype, {
      _contentWrapper: null,
      _content: null,
      _contextNode: null,
      _contextBounds: null,
      _contextSelector: null,
      _dialogRole: "dialog",
      _label: null,
      _labelledBy: [],
      _parentLayer: null,
      _parentSubscription: null,
      _orientation: null,
      _orientationClass: null,
      _shouldSetARIAProperties: !0,
    });
    var i = b("emptyFunction").thatReturnsArgument,
      j = b("emptyFunction").thatReturnsArgument,
      k = (function () {
        "use strict";
        function a() {
          (this._default = {
            _position: "above",
            _alignment: "left",
            _offsetX: 0,
            _offsetY: 0,
            _valid: !0,
            _preferMoreContentShownRect: !1,
          }),
            this.reset();
        }
        var b = a.prototype;
        b.setPosition = function (a) {
          this._position = i(a);
          return this;
        };
        b.setAlignment = function (a) {
          this._alignment = j(a);
          return this;
        };
        b.getOppositePosition = function () {
          return a.OPPOSITE[this.getPosition()];
        };
        b.invalidate = function () {
          this._valid = !1;
          return this;
        };
        b.getPosition = function () {
          return this._position || "above";
        };
        b.getAlignment = function () {
          return this._alignment || "left";
        };
        b.getOffsetX = function () {
          var a = this._offsetX || 0;
          !this.isVertical()
            ? this._default._position !== this._position && (a *= -1)
            : this._default._alignment !== this._alignment && (a *= -1);
          return a;
        };
        b.getOffsetY = function () {
          var a = this._offsetY || 0;
          this.isVertical() &&
            this._default._position !== this._position &&
            (a *= -1);
          return a;
        };
        b.getClassName = function () {
          var a = this.getAlignment(),
            b = this.getPosition();
          if (b === "below")
            if (a === "left") return "uiContextualLayerBelowLeft";
            else if (a === "right") return "uiContextualLayerBelowRight";
            else return "uiContextualLayerBelowCenter";
          else if (b === "above")
            if (a === "left") return "uiContextualLayerAboveLeft";
            else if (a === "right") return "uiContextualLayerAboveRight";
            else return "uiContextualLayerAboveCenter";
          else if (b === "left") return "uiContextualLayerLeft";
          else return "uiContextualLayerRight";
        };
        b.isValid = function () {
          return this._valid;
        };
        b.isVertical = function () {
          return (
            this.getPosition() === "above" || this.getPosition() === "below"
          );
        };
        b.reset = function () {
          Object.assign(this, this._default);
          return this;
        };
        b.setDefaultPosition = function (a) {
          var b = this._default._position;
          this._default._position = i(a);
          return b !== a;
        };
        b.setDefaultAlignment = function (a) {
          var b = this._default._alignment;
          this._default._alignment = j(a);
          return b !== a;
        };
        b.setDefaultOffsetX = function (a) {
          var b = this._default._offsetX;
          this._default._offsetX = a;
          return b !== a;
        };
        b.setArrowOffset = function (a) {
          var b = this._default._arrowOffset;
          this._default._arrowOffset = a;
          return b !== a;
        };
        b.getArrowOffset = function () {
          return this._default._arrowOffset || 0;
        };
        b.setDefaultOffsetY = function (a) {
          var b = this._default._offsetY;
          this._default._offsetY = a;
          return b !== a;
        };
        b.setPreferMoreContentShownRect = function (a) {
          var b = this._default._preferMoreContentShownRect;
          this._default._preferMoreContentShownRect = a;
          return b !== a;
        };
        b.getPreferMoreContentShownRect = function () {
          return this._default._preferMoreContentShownRect;
        };
        return a;
      })();
    k.OPPOSITE = {
      above: "below",
      below: "above",
      left: "right",
      right: "left",
    };
    e.exports = a;
  },
  null
);
__d(
  "ReactBrowserEventEmitter_DO_NOT_USE",
  ["ReactDOM"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("ReactDOM").__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    e.exports = a.ReactBrowserEventEmitter;
  },
  null
);
__d(
  "ReactLayerCommon",
  [
    "invariant",
    "React",
    "ReactDOMComet",
    "SubscriptionsHandler",
    "cr:1487782",
    "emptyFunction",
    "warning",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React"),
      i = function (a) {
        a.isPropagationStopped = b("emptyFunction").thatReturnsTrue;
      },
      j = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.apply(this, arguments) || this;
        }
        var c = a.prototype;
        c.render = function () {
          return h.jsx("div", {
            onClick: i,
            onBlur: i,
            onDoubleClick: i,
            onFocus: i,
            onKeyDown: i,
            onKeyPress: i,
            onKeyUp: i,
            onMouseDown: i,
            onMouseMove: i,
            onMouseUp: i,
            children: this.props.children,
          });
        };
        return a;
      })(h.Component),
      k = {
        makeInitialSubscriptions: function (a, c) {
          var d = new (b("SubscriptionsHandler"))();
          c.onToggle &&
            (k.layerSubscribe(a, d, "show", function () {
              return c.onToggle(!0);
            }),
            k.layerSubscribe(a, d, "hide", function () {
              return c.onToggle(!1);
            }));
          c.onBlur &&
            k.layerSubscribe(a, d, "blur", function (a, b) {
              return c.onBlur(b);
            });
          c.onHide &&
            k.layerSubscribe(a, d, "runhide", function (a, b) {
              return c.includeHideSource ? c.onHide(b) : c.onHide();
            });
          return d;
        },
        layerSubscribe: function (a, c, d, e) {
          var f = a.subscribe || a.addListener;
          c.addSubscriptions(
            f.call(a, d, function (a, c) {
              if (b("cr:1487782") == null) e(a, c);
              else {
                var d = b("cr:1487782").isEnabled();
                d && e(a, c);
              }
            })
          );
        },
        render: function (a, c) {
          a = b("ReactDOMComet").createPortal(h.jsx(j, { children: a }), c);
          a === void 0 &&
            b("ReactDOMComet").createPortal._isMockFunction &&
            (a = null);
          return a;
        },
        diffBehaviors: function (a, b, c) {
          var d;
          for (d in a) a[d] && !b[d] && c.disableBehavior(a[d]);
          for (d in b) {
            var e = a[d],
              f = b[d];
            if (e && f) {
              e === f || g(0, 120, d);
              continue;
            }
            e && c.disableBehavior(e);
            f && c.enableBehavior(f);
          }
        },
      };
    e.exports = k;
  },
  null
);
__d(
  "emptyObject",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {};
    b = a;
    f["default"] = b;
  },
  66
);
__d(
  "fbjs/lib/emptyObject",
  ["emptyObject"],
  function (a, b, c, d, e, f) {
    "use strict";
    e.exports = b("emptyObject");
  },
  null
);
__d(
  "object-assign",
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.assign;
  },
  null
);
__d(
  "create-react-class/factory",
  [
    "fbjs/lib/emptyObject",
    "fbjs/lib/invariant",
    "fbjs/lib/warning",
    "object-assign",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = "mixins";
    function h(a) {
      return a;
    }
    c = {};
    function a(a, c, d) {
      var e = [],
        f = {
          mixins: "DEFINE_MANY",
          statics: "DEFINE_MANY",
          propTypes: "DEFINE_MANY",
          contextTypes: "DEFINE_MANY",
          childContextTypes: "DEFINE_MANY",
          getDefaultProps: "DEFINE_MANY_MERGED",
          getInitialState: "DEFINE_MANY_MERGED",
          getChildContext: "DEFINE_MANY_MERGED",
          render: "DEFINE_ONCE",
          componentWillMount: "DEFINE_MANY",
          componentDidMount: "DEFINE_MANY",
          componentWillReceiveProps: "DEFINE_MANY",
          shouldComponentUpdate: "DEFINE_ONCE",
          componentWillUpdate: "DEFINE_MANY",
          componentDidUpdate: "DEFINE_MANY",
          componentWillUnmount: "DEFINE_MANY",
          UNSAFE_componentWillMount: "DEFINE_MANY",
          UNSAFE_componentWillReceiveProps: "DEFINE_MANY",
          UNSAFE_componentWillUpdate: "DEFINE_MANY",
          updateComponent: "OVERRIDE_BASE",
        },
        i = { getDerivedStateFromProps: "DEFINE_MANY_MERGED" },
        j = {
          displayName: function (a, b) {
            a.displayName = b;
          },
          mixins: function (a, b) {
            if (b) for (var c = 0; c < b.length; c++) m(a, b[c]);
          },
          childContextTypes: function (a, c) {
            a.childContextTypes = b("object-assign")(
              {},
              a.childContextTypes,
              c
            );
          },
          contextTypes: function (a, c) {
            a.contextTypes = b("object-assign")({}, a.contextTypes, c);
          },
          getDefaultProps: function (a, b) {
            a.getDefaultProps
              ? (a.getDefaultProps = p(a.getDefaultProps, b))
              : (a.getDefaultProps = b);
          },
          propTypes: function (a, c) {
            a.propTypes = b("object-assign")({}, a.propTypes, c);
          },
          statics: function (a, b) {
            n(a, b);
          },
          autobind: function () {},
        };
      function k(a, b, c) {
        for (a in b) Object.prototype.hasOwnProperty.call(b, a);
      }
      function l(a, c) {
        var d = Object.prototype.hasOwnProperty.call(f, c) ? f[c] : null;
        Object.prototype.hasOwnProperty.call(v, c) &&
          b("fbjs/lib/invariant")(
            d === "OVERRIDE_BASE",
            "ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",
            c
          );
        a &&
          b("fbjs/lib/invariant")(
            d === "DEFINE_MANY" || d === "DEFINE_MANY_MERGED",
            "ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",
            c
          );
      }
      function m(a, d) {
        if (!d) return;
        b("fbjs/lib/invariant")(
          typeof d !== "function",
          "ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."
        );
        b("fbjs/lib/invariant")(
          !c(d),
          "ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object."
        );
        var e = a.prototype,
          h = e.__reactAutoBindPairs;
        Object.prototype.hasOwnProperty.call(d, g) && j.mixins(a, d.mixins);
        for (var i in d) {
          if (!Object.prototype.hasOwnProperty.call(d, i)) continue;
          if (i === g) continue;
          var k = d[i],
            m = Object.prototype.hasOwnProperty.call(e, i);
          l(m, i);
          if (Object.prototype.hasOwnProperty.call(j, i)) j[i](a, k);
          else {
            var n = Object.prototype.hasOwnProperty.call(f, i),
              o = typeof k === "function";
            o = o && !n && !m && d.autobind !== !1;
            if (o) h.push(i, k), (e[i] = k);
            else if (m) {
              o = f[i];
              b("fbjs/lib/invariant")(
                n && (o === "DEFINE_MANY_MERGED" || o === "DEFINE_MANY"),
                "ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",
                o,
                i
              );
              o === "DEFINE_MANY_MERGED"
                ? (e[i] = p(e[i], k))
                : o === "DEFINE_MANY" && (e[i] = q(e[i], k));
            } else e[i] = k;
          }
        }
      }
      function n(a, c) {
        if (!c) return;
        for (var d in c) {
          var e = c[d];
          if (!Object.prototype.hasOwnProperty.call(c, d)) continue;
          var f = d in j;
          b("fbjs/lib/invariant")(
            !f,
            'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',
            d
          );
          f = d in a;
          if (f) {
            f = Object.prototype.hasOwnProperty.call(i, d) ? i[d] : null;
            b("fbjs/lib/invariant")(
              f === "DEFINE_MANY_MERGED",
              "ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",
              d
            );
            a[d] = p(a[d], e);
            return;
          }
          a[d] = e;
        }
      }
      function o(a, c) {
        b("fbjs/lib/invariant")(
          a && c && typeof a === "object" && typeof c === "object",
          "mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects."
        );
        for (var d in c)
          Object.prototype.hasOwnProperty.call(c, d) &&
            (b("fbjs/lib/invariant")(
              a[d] === void 0,
              "mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",
              d
            ),
            (a[d] = c[d]));
        return a;
      }
      function p(a, b) {
        return function () {
          var c = a.apply(this, arguments),
            d = b.apply(this, arguments);
          if (c == null) return d;
          else if (d == null) return c;
          var e = {};
          o(e, c);
          o(e, d);
          return e;
        };
      }
      function q(a, b) {
        return function () {
          a.apply(this, arguments), b.apply(this, arguments);
        };
      }
      function r(a, b) {
        b = b.bind(a);
        return b;
      }
      function s(a) {
        var b = a.__reactAutoBindPairs;
        for (var c = 0; c < b.length; c += 2) {
          var d = b[c],
            e = b[c + 1];
          a[d] = r(a, e);
        }
      }
      var t = {
          componentDidMount: function () {
            this.__isMounted = !0;
          },
        },
        u = {
          componentWillUnmount: function () {
            this.__isMounted = !1;
          },
        },
        v = {
          replaceState: function (a, b) {
            this.updater.enqueueReplaceState(this, a, b);
          },
          isMounted: function () {
            return !!this.__isMounted;
          },
        },
        w = function () {};
      b("object-assign")(w.prototype, a.prototype, v);
      function k(a) {
        var c = h(function (a, e, f) {
          this.__reactAutoBindPairs.length && s(this);
          this.props = a;
          this.context = e;
          this.refs = b("fbjs/lib/emptyObject");
          this.updater = f || d;
          this.state = null;
          a = this.getInitialState ? this.getInitialState() : null;
          b("fbjs/lib/invariant")(
            typeof a === "object" && !Array.isArray(a),
            "%s.getInitialState(): must return an object or null",
            c.displayName || "ReactCompositeComponent"
          );
          this.state = a;
        });
        c.prototype = new w();
        c.prototype.constructor = c;
        c.prototype.__reactAutoBindPairs = [];
        e.forEach(m.bind(null, c));
        m(c, t);
        m(c, a);
        m(c, u);
        c.getDefaultProps && (c.defaultProps = c.getDefaultProps());
        b("fbjs/lib/invariant")(
          c.prototype.render,
          "createClass(...): Class specification must implement a `render` method."
        );
        for (a in f) c.prototype[a] || (c.prototype[a] = null);
        return c;
      }
      return k;
    }
    e.exports = a;
  },
  null
);
__d(
  "create-react-class",
  ["create-react-class/factory", "react"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g;
    a = g || b("react");
    if (typeof a === "undefined")
      throw Error(
        "create-react-class could not find the React object. If you are using script tags, make sure that React is being loaded before create-react-class."
      );
    c = new a.Component().updater;
    e.exports = b("create-react-class/factory")(
      a.Component,
      a.isValidElement,
      c
    );
  },
  null
);
__d(
  "createReactClass_DEPRECATED",
  ["create-react-class"],
  function (a, b, c, d, e, f) {
    "use strict";
    e.exports = b("create-react-class");
  },
  null
);
__d(
  "ReactLayer",
  [
    "invariant",
    "ExecutionEnvironment",
    "React",
    "ReactLayerCommon",
    "createReactClass_DEPRECATED",
    "emptyFunction",
    "getObjectValues",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b("React");
    var h = {
      componentDidMount: function () {
        (this.layer = this.createLayer(this._layerContainer)),
          this.layer || g(0, 2397),
          (this.layerSubscriptions = b(
            "ReactLayerCommon"
          ).makeInitialSubscriptions(this.layer, this.props)),
          this._resetBehaviors();
      },
      componentDidUpdate: function (a) {
        this.receiveProps(this.props, a);
      },
      componentWillUnmount: function () {
        this.layerSubscriptions &&
          (this.layerSubscriptions.release(), (this.layerSubscriptions = null)),
          this.layer && (this.layer.destroy(), (this.layer = null));
      },
      _createLayerContainer: function () {
        this._layerContainer == null &&
          (this._layerContainer = document.createElement("div"));
      },
      render: function () {
        if (!b("ExecutionEnvironment").canUseDOM) return null;
        this._createLayerContainer();
        return b("ReactLayerCommon").render(
          this.props.children,
          this._layerContainer
        );
      },
      enumerateBehaviors: function (a) {
        a = this.getEffectiveBehaviors(a);
        return b("getObjectValues")(a).filter(
          b("emptyFunction").thatReturnsArgument
        );
      },
      _resetBehaviors: function () {
        this._diffBehaviors({}, this.props.behaviors);
      },
      updateBehaviors: function (a, b) {
        this._diffBehaviors(a, b);
      },
      _diffBehaviors: function (a, c) {
        (a = this.getEffectiveBehaviors(a)),
          (c = this.getEffectiveBehaviors(c)),
          b("ReactLayerCommon").diffBehaviors(a, c, this.layer);
      },
      getEffectiveBehaviors: function (a) {
        return !this.getDefaultEnabledBehaviors
          ? a || {}
          : babelHelpers["extends"]({}, this.getDefaultEnabledBehaviors(), a);
      },
      layerSubscribe: function (a, c) {
        b("ReactLayerCommon").layerSubscribe(
          this.layer,
          this.layerSubscriptions,
          a,
          c
        );
      },
    };
    a = {
      createClass: function (a) {
        return b("createReactClass_DEPRECATED")({ mixins: [h, a] });
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "ContextualLayer.react",
  [
    "ContextualLayer",
    "ReactBrowserEventEmitter_DO_NOT_USE",
    "ReactDOM",
    "ReactLayer",
    "Style",
    "prop-types",
    "react",
    "warning",
  ],
  function (a, b, c, d, e, f) {
    var g,
      h = g || b("react");
    a = b("ReactLayer").createClass({
      propTypes: {
        contextRef: b("prop-types").func,
        excludeFromHeroVC: b("prop-types").bool,
        context: function (a, b, c) {
          if ((a.context == null) == (a.contextRef == null))
            return new Error(
              "Exactly one of `context` or `contextRef` must be set on `" +
                (c + "`.")
            );
          a = a[b];
          if (a != null) {
            if (typeof a !== "object")
              return new Error(
                "Invalid `" +
                  b +
                  "` supplied to `" +
                  c +
                  "`, expected a React component."
              );
            if (h.isValidElement(a))
              return new Error(
                "Invalid `" +
                  b +
                  "` supplied to `" +
                  c +
                  "`, expected a React component instance. You're passing a React descriptor."
              );
          }
        },
      },
      immutableProps: { modal: null },
      createLayer: function (a) {
        var c = this,
          d = this._getContextNode(),
          e = {
            context: d,
            contextBounds: this.props.contextBounds,
            "data-testid": this.props["data-testid"],
            position: this.props.position,
            alignment: this.props.alignment,
            offsetX: this.props.offsetX,
            offsetY: this.props.offsetY,
            addedBehaviors: this.enumerateBehaviors(this.props.behaviors),
            shouldSetARIAProperties: this.props.shouldSetARIAProperties,
            isStrictlyControlled: this.props.isStrictlyControlled,
            excludeFromHeroVC: this.props.excludeFromHeroVC,
          };
        e = new (b("ContextualLayer"))(e, a);
        this._node = a;
        this._matchContextSize(this.props);
        this.props.contextBounds &&
          e.setContextWithBounds(d, this.props.contextBounds);
        this._resizeSubscription = e.subscribe("resize", function (a, d) {
          a = b("ReactBrowserEventEmitter_DO_NOT_USE").isEnabled();
          a && c.props.onResize && c.props.onResize(d);
        });
        e.conditionShow(this.props.shown);
        return e;
      },
      componentWillUnmount: function () {
        this._resizeSubscription &&
          (this._resizeSubscription.unsubscribe(),
          (this._resizeSubscription = null));
      },
      receiveProps: function (a, b) {
        this.updateBehaviors(b.behaviors, a.behaviors);
        b = this._getContextNode();
        a.contextBounds
          ? this.layer.setContextWithBounds(b, a.contextBounds)
          : this.layer.setContext(b);
        this._matchContextSize(a);
        this.layer.setPosition(a.position);
        this.layer.setAlignment(a.alignment);
        this.layer.setOffsetX(a.offsetX);
        this.layer.setOffsetY(a.offsetY);
        this.layer.conditionShow(a.shown);
      },
      getDefaultEnabledBehaviors: function () {
        return b("ContextualLayer").getDefaultBehaviorsAsObject();
      },
      _getContextNode: function () {
        var a;
        this.props.context
          ? (a = this.props.context)
          : this.props.contextRef && (a = this.props.contextRef());
        a != null && a.nodeType !== 1 && (a = b("ReactDOM").findDOMNode(a));
        return a;
      },
      _matchContextSize: function (a) {
        var c = this._node,
          d = this._getContextNode();
        a.containerWidthMatchContext &&
          b("Style").set(c, "width", d.offsetWidth + "px");
        a.containerHeightMatchContext &&
          b("Style").set(c, "height", d.offsetHeight + "px");
      },
    });
    e.exports = a;
  },
  null
);
__d(
  "AccessibleLayer",
  ["fbt", "DOM", "Event", "Focus"],
  function (a, b, c, d, e, f, g) {
    a = (function () {
      "use strict";
      function a(a) {
        (this._layer = a), (this._listener = null);
      }
      var c = a.prototype;
      c.enable = function () {
        (this._afterShowSubscription = this._layer.subscribe(
          "aftershow",
          this._onAfterShow.bind(this)
        )),
          (this._afterHideSubscription = this._layer.subscribe(
            "hide",
            this._onAfterHide.bind(this)
          ));
      };
      c.disable = function () {
        this._listener && this._listener.remove(),
          this._afterShowSubscription.unsubscribe(),
          (this._listener = this._afterShowSubscription = null);
      };
      c._closeListener = function (a) {
        a = this._layer.getCausalElement();
        a &&
          (a.tabIndex == null
            ? ((a.tabIndex = -1), b("Focus").setWithoutOutline(a))
            : b("Focus").set(a));
        this._layer.hide();
      };
      c._setupCloseButton = function () {
        var a = this._layer.getContentRoot();
        if (
          b("DOM").scry(a, '[role="dialog"]').length <= 0 &&
          (b("DOM").scry(a, '[role="listbox"]').length > 0 ||
            b("DOM").scry(a, '[role="menu"]').length > 0)
        )
          return;
        var c = b("DOM").scry(a, ".layer_close_elem")[0];
        c ||
          ((c = b("DOM").create(
            "a",
            {
              className: "accessible_elem layer_close_elem",
              href: "#",
              role: "button",
            },
            [g._("Fermer la fen\u00eatre et revenir")]
          )),
          b("DOM").appendContent(a, c));
        this._listener = b("Event").listen(
          c,
          "click",
          this._closeListener.bind(this)
        );
      };
      c._onAfterShow = function () {
        this._listener || this._setupCloseButton();
      };
      c._onAfterHide = function () {
        this._listener && this._listener.remove(), (this._listener = null);
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "ContextualDialogARIA",
  ["DOM", "getOrCreateDOMID"],
  function (a, b, c, d, e, f) {
    a = (function () {
      "use strict";
      function a(a) {
        this._layer = a;
      }
      var c = a.prototype;
      c.enable = function () {
        this._subscription = this._layer.subscribe(
          "beforeshow",
          this._addAriaAttribute.bind(this)
        );
      };
      c.disable = function () {
        this._subscription.unsubscribe(), (this._subscription = null);
      };
      c._addAriaAttribute = function () {
        var a = this._layer.getCausalElement();
        if (!a) return;
        var c = b("DOM").scry(this._layer.getRoot(), ".accessible_elem");
        c.length &&
          a.setAttribute("aria-describedby", b("getOrCreateDOMID")(c[0]));
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "abstractMethod",
  ["invariant"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    function a(a, b) {
      h(0, 1537, a, b);
    }
    g["default"] = a;
  },
  98
);
__d(
  "AbstractContextualDialogArrowBehavior",
  ["cx", "CSS", "DOM", "Locale", "Style", "Vector", "abstractMethod"],
  function (a, b, c, d, e, f, g) {
    var h = { bottom: "_53ik", top: "_53il", right: "_53im", left: "_53in" },
      i = { above: "bottom", below: "top", left: "right", right: "left" };
    a = (function () {
      "use strict";
      function a(a) {
        this.__layer = this._layer = a;
      }
      var c = a.prototype;
      c.enable = function () {
        this._subscription = this._layer.subscribe(
          ["adjust", "reposition"],
          this._handle.bind(this)
        );
      };
      c.disable = function () {
        this._subscription.unsubscribe(), (this._subscription = null);
      };
      c.__getArrow = function () {
        return b("abstractMethod")(
          "AbstractContextualDialogArrowBehavior",
          "__getArrow"
        );
      };
      c._handle = function (a, b) {
        a === "adjust" ? this._repositionArrow(b) : this._repositionRoot(b);
      };
      c._repositionRoot = function (a) {
        var c = a.getAlignment();
        if (c == "center") return;
        var d = this._layer.getRoot(),
          e = this._layer.getContext();
        a = a.isVertical();
        var f = this._layer.getArrowDimensions(),
          g = f.offset;
        f = f.length;
        e = b("Vector").getElementDimensions(e);
        e = a ? e.x : e.y;
        if (e >= f + g * 2) return;
        f = f / 2 + g;
        g = e / 2;
        e = parseInt(f - g, 10);
        if (a) {
          f = null;
          c == "left"
            ? (f = b("Locale").isRTL() ? "right" : "left")
            : (f = b("Locale").isRTL() ? "left" : "right");
          g = parseInt(b("Style").get(d, f), 10);
          b("Style").set(d, f, g - e + "px");
        } else {
          a = parseInt(b("Style").get(d, "top"), 10);
          b("Style").set(d, "top", a - e + "px");
        }
      };
      c._repositionArrow = function (c) {
        var d = this._layer.getContentRoot(),
          e = c.getPosition(),
          f = i[e];
        for (var g in h) b("CSS").conditionClass(d, h[g], f === g);
        if (e == "none") return;
        this._arrow || (this._arrow = this.__getArrow());
        b("DOM").contains(d, this._arrow) ||
          b("DOM").appendContent(d, this._arrow);
        b("Style").set(this._arrow, "top", "");
        b("Style").set(this._arrow, "left", "");
        b("Style").set(this._arrow, "right", "");
        b("Style").set(this._arrow, "margin", "");
        f = a.getOffsetPercent(c);
        g = a.getOffset(c, f, this._layer);
        e = a.getOffsetSide(c);
        b("Style").set(this._arrow, e, f + "%");
        b("Style").set(this._arrow, "margin-" + e, g + "px");
      };
      a.getOffsetPercent = function (a) {
        var b = a.getAlignment();
        a = a.getPosition();
        if (a == "above" || a == "below")
          if (b == "center") return 50;
          else if (b == "right") return 100;
        return 0;
      };
      a.getOffsetSide = function (a) {
        a = a.isVertical();
        return a ? (b("Locale").isRTL() ? "right" : "left") : "top";
      };
      a.getOffset = function (a, b, c) {
        c = c.getArrowDimensions();
        var d = c.offset;
        c = c.length;
        a = a.getAlignment();
        d = a == "center" ? 0 : d;
        d += (c * b) / 100;
        a != "left" && (d *= -1);
        return d;
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "ContextualDialogArrow",
  ["cx", "AbstractContextualDialogArrowBehavior", "CSS", "JSXDOM"],
  function (a, b, c, d, e, f, g, h) {
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var e = b.prototype;
      e.__getArrow = function () {
        return c("JSXDOM").i({ className: "_53io" });
      };
      e.enable = function () {
        a.prototype.enable.call(this);
        var b = this.__layer.getContentRoot();
        d("CSS").addClass(b, "_5v-0");
      };
      e.disable = function () {
        a.prototype.disable.call(this);
        var b = this.__layer.getContentRoot();
        d("CSS").removeClass(b, "_5v-0");
      };
      return b;
    })(c("AbstractContextualDialogArrowBehavior"));
    g["default"] = a;
  },
  98
);
__d(
  "ContextualDialogDefaultTheme",
  ["cx"],
  function (a, b, c, d, e, f, g, h) {
    a = "_53ip";
    b = { offset: 15, length: 16 };
    g.wrapperClassName = a;
    g.arrowDimensions = b;
  },
  98
);
__d(
  "ContextualDialogFitInViewport_PUSHSAFE",
  ["Style", "Vector"],
  function (a, b, c, d, e, f) {
    var g = 50,
      h = 10;
    a = (function () {
      "use strict";
      function a(a) {
        (this._layer = a),
          (this._contentHeight = null),
          (this._contextY = null);
      }
      var c = a.prototype;
      c.enable = function () {
        var a = this,
          b = this._layer.getArrowDimensions();
        this._arrowOffset = b.offset;
        b = b.length;
        this._arrowBuffer = this._arrowOffset + b;
        this._subscription = this._layer.subscribe(
          ["reposition"],
          function (b, c) {
            if (!a._layer.isFixed() || c.isVertical()) return;
            a._adjustPosition();
          }
        );
      };
      c.disable = function () {
        this._subscription.unsubscribe(), (this._subscription = null);
      };
      c._getContentHeight = function () {
        return b("Vector").getElementDimensions(this._layer._contentWrapper).y;
      };
      c._getContextY = function () {
        return b("Vector").getElementPosition(
          this._layer.getContext(),
          "viewport"
        ).y;
      };
      c._adjustPosition = function () {
        var a = this._getContextY(),
          c = this._getContentHeight();
        if (a === this._contextY && c === this._contentHeight) return;
        this._contextY = a;
        this._contentHeight = c;
        var d = b("Vector").getViewportDimensions().y;
        d = Math.min(
          Math.max(0, a + c + h - d),
          Math.max(0, a - g),
          c - this._arrowOffset - this._arrowBuffer
        );
        b("Style").set(this._layer.getContent(), "top", -d + "px");
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "LayerBounds",
  [
    "Locale",
    "Rect",
    "ViewportBounds",
    "containsNode",
    "ge",
    "getOverlayZIndex",
  ],
  function (a, b, c, d, e, f) {
    a = {
      getViewportRectForContext: function (a) {
        var c = b("ge")("globalContainer");
        c = (c && b("containsNode")(c, a)) || b("getOverlayZIndex")(a) < 300;
        a = b("Rect").getViewportWithoutScrollbarsBounds();
        c &&
          ((a.t += b("ViewportBounds").getTop()),
          b("Locale").isRTL()
            ? ((a.r -= b("ViewportBounds").getLeft()),
              (a.l += b("ViewportBounds").getRight()))
            : ((a.r -= b("ViewportBounds").getRight()),
              (a.l += b("ViewportBounds").getLeft())));
        return a;
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "ContextualLayerDimensions",
  ["LayerBounds", "Locale", "Rect", "Vector"],
  function (a, b, c, d, e, f) {
    a = {
      getViewportRect: function (a) {
        return b("LayerBounds").getViewportRectForContext(a.getContext());
      },
      getLayerRect: function (a, c) {
        var d = a.getContextBounds("viewport"),
          e = a.simulateOrientation(c, function () {
            return b("Vector").getElementDimensions(a.getContentRoot());
          }),
          f = d.t + c.getOffsetY();
        c.getPosition() === "above"
          ? (f -= e.y)
          : c.getPosition() === "below" && (f += d.b - d.t);
        var g = d.l + c.getOffsetX();
        d = d.r - d.l;
        if (c.isVertical()) {
          var h = c.getAlignment();
          h === "center"
            ? (g += (d - e.x) / 2)
            : (h === "right") !== b("Locale").isRTL()
            ? (g += d - e.x + c.getArrowOffset())
            : (g -= c.getArrowOffset());
        } else
          (c.getPosition() === "right") !== b("Locale").isRTL()
            ? (g += d)
            : (g -= e.x);
        return new (b("Rect"))(f, g + e.x, f + e.y, g, "viewport");
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "AbstractContextualDialogKeepInViewportBehavior",
  [
    "ContextualLayerDimensions",
    "Event",
    "Vector",
    "abstractMethod",
    "throttle",
  ],
  function (a, b, c, d, e, f) {
    a = (function () {
      "use strict";
      function a(a) {
        (this._layer = a),
          (this._listeners = []),
          (this._subscription = null),
          (this._minimumTop = null);
      }
      var c = a.prototype;
      c.enable = function () {
        var a = this,
          b = this._layer.getArrowDimensions();
        this._arrowOffset = b.offset;
        b = b.length;
        this._arrowBuffer = this._arrowOffset + b;
        this._subscription = this._layer.subscribe(
          ["show", "hide", "reposition"],
          function (b, c) {
            if (a._layer.isFixed()) return;
            b == "reposition"
              ? (a._calculateMinimumTop(c), a._adjustForScroll())
              : b == "show"
              ? (a._attachScroll(), a._adjustForScroll())
              : a._detachScroll();
          }
        );
        this._layer.isShown() && this._attachScroll();
      };
      c.disable = function () {
        this._layer.isShown() && this._detachScroll(),
          this._subscription.unsubscribe(),
          (this._subscription = null);
      };
      c.__adjustForScroll = function (a, c) {
        return b("abstractMethod")(
          "AbstractContextualDialogArrowBehavior",
          "__adjustForScroll"
        );
      };
      c._attachScroll = function () {
        var a = b("throttle")(this._adjustForScroll.bind(this)),
          c = this._layer.getContextScrollParent() || window;
        this._listeners = [
          b("Event").listen(c, "scroll", a),
          b("Event").listen(window, "resize", a),
        ];
      };
      c._detachScroll = function () {
        while (this._listeners.length) this._listeners.pop().remove();
        this._listeners = [];
      };
      c._getContentHeight = function () {
        return !this._layer._contentWrapper
          ? 0
          : b("Vector").getElementDimensions(this._layer._contentWrapper).y;
      };
      c._getContextY = function () {
        return b("Vector").getElementPosition(this._layer.getContext()).y;
      };
      c._calculateMinimumTop = function (a) {
        if (a.isVertical()) return;
        this._minimumTop =
          this._getContextY() -
          (this._getContentHeight() - this._arrowBuffer) +
          a.getOffsetY();
      };
      c._adjustForScroll = function () {
        var a = this._layer.getOrientation(),
          c = this._layer.getContent();
        if (a.isVertical() || !c) return;
        a = b("ContextualLayerDimensions").getViewportRect(this._layer);
        c = a.b - this._minimumTop;
        if (c < 0) return;
        a = this._getContentHeight();
        var d = a - (this._arrowBuffer + this._arrowOffset);
        d = Math.max(0, Math.min(d, d - (c - a)));
        this.__adjustForScroll(this._layer, d);
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "ContextualDialogKeepInViewport",
  ["AbstractContextualDialogKeepInViewportBehavior", "Style"],
  function (a, b, c, d, e, f) {
    a = (function (a) {
      "use strict";
      babelHelpers.inheritsLoose(c, a);
      function c() {
        return a.apply(this, arguments) || this;
      }
      var d = c.prototype;
      d.__adjustForScroll = function (a, c) {
        a = a.getContent();
        b("Style").set(a, "top", -c + "px");
      };
      return c;
    })(b("AbstractContextualDialogKeepInViewportBehavior"));
    e.exports = a;
  },
  null
);
__d(
  "LayerMouseHooks",
  ["Arbiter", "ContextualThing", "Event", "Layer"],
  function (a, b, c, d, e, f) {
    var g = new (b("Arbiter"))();
    a = (function () {
      "use strict";
      function a(a) {
        (this._layer = a),
          (this._subscriptions = []),
          (this._currentlyActive = !1);
      }
      var c = a.prototype;
      c.enable = function () {
        var a = this;
        this._subscriptions = [
          g.subscribe("mouseenter", this._handleActive.bind(this)),
          g.subscribe("mouseleave", this._handleInactive.bind(this)),
          this._layer.subscribe("hide", function () {
            a._currentlyActive = !1;
          }),
        ];
      };
      c.disable = function () {
        while (this._subscriptions.length)
          this._subscriptions.pop().unsubscribe();
        this._subscriptions = [];
        this._currentlyActive = !1;
      };
      c._handleActive = function (a, b) {
        !this._currentlyActive &&
          this._isNodeWithinStack(b) &&
          (this._layer.inform("mouseenter", b), (this._currentlyActive = !0));
      };
      c._handleInactive = function (a, b) {
        this._currentlyActive &&
          (!b || !this._isNodeWithinStack(b)) &&
          (this._layer.inform("mouseleave", b), (this._currentlyActive = !1));
      };
      c._isNodeWithinStack = function (a) {
        return b("ContextualThing").containsIncludingLayers(
          this._layer.getContentRoot(),
          a
        );
      };
      return a;
    })();
    b("Layer").subscribe("show", function (a, c) {
      var d = c.getContentRoot(),
        e = [
          b("Event").listen(d, "mouseenter", function () {
            g.inform("mouseenter", d);
          }),
          b("Event").listen(d, "mouseleave", function (a) {
            g.inform("mouseleave", a.getRelatedTarget());
          }),
        ],
        f = c.subscribe("hide", function () {
          while (e.length) e.pop().remove();
          f.unsubscribe();
          e = f = null;
        });
    });
    e.exports = a;
  },
  null
);
__d(
  "ContextualDialog",
  [
    "csx",
    "cx",
    "invariant",
    "AccessibleLayer",
    "CSS",
    "ContextualDialogARIA",
    "ContextualDialogArrow",
    "ContextualDialogDefaultTheme",
    "ContextualDialogFitInViewport_PUSHSAFE",
    "ContextualDialogKeepInViewport",
    "ContextualLayer",
    "DOM",
    "Event",
    "JSXDOM",
    "LayerButtons",
    "LayerFormHooks",
    "LayerMouseHooks",
    "LayerRefocusOnHide",
    "Style",
    "cr:971473",
    "removeFromArray",
    "shield",
  ],
  function (a, b, c, d, e, f, g, h, i, j) {
    var k = 0,
      l = 300;
    a = (function (a) {
      babelHelpers.inheritsLoose(e, a);
      function e(b, c) {
        b = a.call(this, b, c) || this;
        b._footer = null;
        return b;
      }
      var f = e.prototype;
      f._configure = function (b, e) {
        Object.assign(b, b.theme || d("ContextualDialogDefaultTheme"));
        var f = b.arrowBehavior || c("ContextualDialogArrow");
        b.addedBehaviors = b.addedBehaviors || [];
        b.addedBehaviors.push(f);
        a.prototype._configure.call(this, b, e);
        this._footer = c("DOM").scry(e, "div._572u")[0];
        this._footer &&
          (this._footer.children.length === 1 &&
          this._footer.children[0].nodeName === "DIV" &&
          this._footer.children[0].children.length === 0
            ? this._footer.parentNode.removeChild(this._footer)
            : d("CSS").addClass(this.getContentRoot(), "_kc"));
        b.hoverContext &&
          this._registerHoverHandlers(
            b.hoverContext,
            b.hoverShowDelay,
            b.hoverHideDelay
          );
      };
      f._registerHoverHandlers = function (a, b, d) {
        var e = this,
          f = b,
          g = d;
        f == null && (f = k);
        g == null && (g = l);
        var h, i;
        b = function (a) {
          window.clearTimeout(i),
            (h = window.setTimeout(c("shield")(e.show, e), f));
        };
        d = function (a) {
          if (e._isHoverLocked()) return;
          window.clearTimeout(h);
          i = window.setTimeout(e.hide.bind(e), g);
        };
        var j = c("Event").listen(a, "mouseenter", b),
          m = c("Event").listen(a, "mouseleave", d),
          n = this.subscribe("mouseenter", b),
          o = this.subscribe("mouseleave", d);
        this.subscribe("destroy", function () {
          window.clearTimeout(i),
            window.clearTimeout(h),
            j.remove(),
            m.remove(),
            n.unsubscribe(),
            o.unsubscribe();
        });
      };
      f._getDefaultBehaviors = function () {
        var d = a.prototype._getDefaultBehaviors.call(this);
        b("cr:971473") != null && c("removeFromArray")(d, b("cr:971473"));
        return d.concat([
          c("AccessibleLayer"),
          c("LayerRefocusOnHide"),
          c("ContextualDialogKeepInViewport"),
          c("ContextualDialogFitInViewport_PUSHSAFE"),
          c("LayerButtons"),
          c("LayerFormHooks"),
          c("LayerMouseHooks"),
          c("ContextualDialogARIA"),
        ]);
      };
      f._buildWrapper = function (b, e) {
        this._innerWrapper = c("JSXDOM").div(null, e);
        var f = a.prototype._buildWrapper.call(this, b, this._innerWrapper);
        if (b.wrapperClassName) {
          var g = b.wrapperClassName.split(/\s+/);
          for (
            var g = g,
              h = Array.isArray(g),
              i = 0,
              g = h
                ? g
                : g[
                    typeof Symbol === "function"
                      ? Symbol.iterator
                      : "@@iterator"
                  ]();
            ;

          ) {
            var k;
            if (h) {
              if (i >= g.length) break;
              k = g[i++];
            } else {
              i = g.next();
              if (i.done) break;
              k = i.value;
            }
            k = k;
            d("CSS").addClass(f, k);
          }
        }
        this.replaceEntireLayerContents(e);
        this.getContent() === e || j(0, 5783);
        this.setWidth(b.width);
        return f;
      };
      f.getContentRoot = function () {
        !this._innerWrapper && j(0, 5784);
        return this._innerWrapper;
      };
      f.setContent = function (a) {
        j(0, 5785);
      };
      f.replaceEntireLayerContents = function (a) {
        (this._content = null),
          c("DOM").empty(this.getContentRoot()),
          this.setInnerContent(a);
      };
      f.setInnerContent = function (a) {
        d("CSS").addClass(a, "_53ij"),
          this.getContent()
            ? c("DOM").replace(this.getContent(), a)
            : c("DOM").appendContent(this.getContentRoot(), a),
          (this._content = a),
          this.isShown() && this.updatePosition();
      };
      f.setWidth = function (a) {
        c("Style").set(
          this.getContentRoot(),
          "width",
          a ? Math.floor(a) + "px" : ""
        );
        return this;
      };
      f.getFooter = function () {
        return this._footer;
      };
      f.lockHover = function () {
        this._hoverLocked = !0;
        return this;
      };
      f.unlockHover = function () {
        this._hoverLocked = !1;
        return this;
      };
      f._isHoverLocked = function () {
        return !!this._hoverLocked;
      };
      e.setContext = function (a, b) {
        a.setContext(b);
      };
      return e;
    })(c("ContextualLayer"));
    g["default"] = a;
  },
  98
);
__d(
  "ReactAbstractContextualDialog",
  [
    "ContextualDialog",
    "ContextualDialogArrow",
    "ContextualDialogKeepInViewport",
    "LayerAutoFocus",
    "LayerHideOnBlur",
    "LayerHideOnEscape",
    "LayerRefocusOnHide",
    "ReactDOM",
    "prop-types",
  ],
  function (a, b, c, d, e, f) {
    a = {
      createSpec: function (a) {
        var c;
        return {
          displayName: a.displayName,
          propTypes: {
            position: (c = b("prop-types")).oneOf([
              "above",
              "below",
              "left",
              "right",
            ]),
            alignment: c.oneOf(["left", "center", "right"]),
            offsetX: c.number,
            offsetY: c.number,
            width: c.number,
            autoFocus: c.bool,
            focusContextOnHide: c.bool,
            arrowBehavior: c.func,
            behaviors: c.object,
            shown: c.bool,
            context: c.object,
            contextRef: c.func,
            dialogRole: c.oneOf(["dialog", "region", "alert"]),
            hoverContext: c.object,
            hoverContextRef: c.func,
            hoverShowDelay: c.number,
            hoverHideDelay: c.number,
            hideOnBlur: c.bool,
            hideOnEscape: c.bool,
            insertParent: c.object,
            keepInViewport: c.bool,
            label: c.node,
            labelledBy: c.string,
            onBeforeHide: c.func,
            onToggle: c.func,
            hasActionableContext: c.bool,
            "data-testid": c.string,
          },
          immutableProps: { modal: null },
          createLayer: function (c) {
            var d =
                this.props.context ||
                b("ReactDOM").findDOMNode(this.props.contextRef()),
              e =
                this.props.hoverContext ||
                (this.props.hoverContextRef &&
                  b("ReactDOM").findDOMNode(this.props.hoverContextRef()));
            this.isHoverContextSet = e != null;
            e = babelHelpers["extends"](
              {
                context: d,
                hoverContext: e,
                hoverShowDelay: this.props.hoverShowDelay,
                hoverHideDelay: this.props.hoverHideDelay,
                position: this.props.position,
                alignment: this.props.alignment,
                offsetX: this.props.offsetX,
                offsetY: this.props.offsetY,
                width: this.props.width,
                dialogRole: this.props.dialogRole,
                label: this.props.label,
                labelledBy: this.props.labelledBy,
                shouldSetARIAProperties: !this.props.hasActionableContext,
                arrowBehavior:
                  this.props.arrowBehavior || b("ContextualDialogArrow"),
                addedBehaviors: this.enumerateBehaviors(this.props.behaviors),
                "data-testid": this.props["data-testid"],
              },
              a || {}
            );
            e = new (b("ContextualDialog"))(e, c);
            this.props.contextBounds &&
              e.setContextWithBounds(d, this.props.contextBounds);
            this.props.autoFocus !== !1 &&
              e.enableBehavior(b("LayerAutoFocus"));
            this.props.hideOnBlur === !0 &&
              e.enableBehavior(b("LayerHideOnBlur"));
            this.props.hideOnEscape === !0 &&
              e.enableBehavior(b("LayerHideOnEscape"));
            this.props.focusContextOnHide === !1 &&
              e.disableBehavior(b("LayerRefocusOnHide"));
            this.props.keepInViewport === !1 &&
              e.disableBehavior(b("ContextualDialogKeepInViewport"));
            this.props.onBeforeHide &&
              (this._onBeforeHideSubscription = e.subscribe(
                "beforehide",
                this.props.onBeforeHide
              ));
            this.props.insertParent &&
              e.setInsertParent(this.props.insertParent);
            e.conditionShow(this.props.shown);
            return e;
          },
          receiveProps: function (a, c) {
            this.updateBehaviors(c.behaviors, a.behaviors);
            var d =
              a.context ||
              (a.contextRef && b("ReactDOM").findDOMNode(a.contextRef()));
            d &&
              (a.contextBounds
                ? this.layer.setContextWithBounds(d, a.contextBounds)
                : this.layer.setContext(d));
            c.hideOnEscape !== a.hideOnEscape &&
              (a.hideOnEscape
                ? this.layer.enableBehavior(b("LayerHideOnEscape"))
                : this.layer.disableBehavior(b("LayerHideOnEscape")));
            c.onBeforeHide !== a.onBeforeHide &&
              (this.layer.unsubscribe(this._onBeforeHideSubscription),
              (this._onBeforeHideSubscription = this.layer.subscribe(
                "beforehide",
                a.onBeforeHide
              )));
            this.layer
              .setPosition(a.position)
              .setAlignment(a.alignment)
              .setOffsetX(a.offsetX)
              .setOffsetY(a.offsetY)
              .setWidth(a.width);
            (!this.isHoverContextSet || a.shown !== void 0) &&
              this.layer.conditionShow(a.shown);
          },
        };
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "AbstractPopoverButton.react",
  ["cx", "URI", "joinClasses", "react"],
  function (a, b, c, d, e, f, g, h) {
    var i = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var d = b.prototype;
      d.render = function () {
        var a = this.props.config,
          b = {},
          d = a.defaultMaxWidth;
        this.props.maxwidth !== void 0 && (d = this.props.maxwidth);
        d &&
          (b.style = babelHelpers["extends"]({}, a.button.props.style, {
            maxWidth: d + "px",
          }));
        this.props.image &&
          (b.image = i.jsx("span", {
            className: "_-xe _3-8_",
            children: this.props.image,
          }));
        this.props.label &&
          ((b.labelIsHidden = this.props.labelIsHidden),
          (b.label = i.jsx("span", {
            className: "_55pe",
            children: this.props.label,
          })));
        this.props.haschevron &&
          (b.imageRight = i.jsx("span", {
            className: "_4o_3",
            children: a.chevron,
          }));
        b.className = c("joinClasses")(a.button.props.className, "_2agf _4o_4");
        b.href = new (c("URI"))("#");
        b["aria-haspopup"] = !0;
        b.role = "button";
        return i.cloneElement(a.button, b);
      };
      return b;
    })(i.Component);
    a.defaultProps = { haschevron: !0 };
    g["default"] = a;
  },
  98
);
__d(
  "InlineBlock.react",
  ["cx", "joinClasses", "react"],
  function (a, b, c, d, e, f, g) {
    var h,
      i = h || b("react"),
      j = { baseline: null, bottom: "_6d", middle: "_6b", top: "_6e" };
    a = (function (a) {
      "use strict";
      babelHelpers.inheritsLoose(c, a);
      function c() {
        return a.apply(this, arguments) || this;
      }
      var d = c.prototype;
      d.render = function () {
        var a = this.props,
          c = a.alignv,
          d = a.height,
          e = a.fullWidth,
          f = a.rootRef;
        a = babelHelpers.objectWithoutPropertiesLoose(a, [
          "alignv",
          "height",
          "fullWidth",
          "rootRef",
        ]);
        c = j[c];
        e = "_6a" + (e ? " _5u5j" : "");
        var g = b("joinClasses")(e, c);
        if (d != null) {
          c = i.jsx("div", {
            className: b("joinClasses")("_6a", c),
            style: { height: d + "px" },
          });
          return i.jsxs(
            "div",
            babelHelpers["extends"]({ ref: f }, a, {
              className: b("joinClasses")(this.props.className, e),
              height: null,
              children: [
                c,
                i.jsx("div", { className: g, children: this.props.children }),
              ],
            })
          );
        } else
          return i.jsx(
            "div",
            babelHelpers["extends"]({ ref: f }, a, {
              className: b("joinClasses")(this.props.className, g),
              children: this.props.children,
            })
          );
      };
      return c;
    })(i.Component);
    a.defaultProps = { alignv: "baseline", fullWidth: !1 };
    e.exports = a;
  },
  null
);
__d(
  "ContextualLayerHideOnScroll",
  ["Event", "setTimeout"],
  function (a, b, c, d, e, f, g) {
    a = (function () {
      function a(a) {
        this._layer = a;
      }
      var b = a.prototype;
      b.enable = function () {
        this._subscriptions = [
          this._layer.subscribe(
            "contextchange",
            this._handleContextChange.bind(this)
          ),
          this._layer.subscribe("show", this.attach.bind(this)),
          this._layer.subscribe("hide", this.detach.bind(this)),
        ];
      };
      b.disable = function () {
        while (this._subscriptions.length)
          this._subscriptions.pop().unsubscribe();
        this.detach();
      };
      b.attach = function () {
        var a = this;
        if (this._listener) return;
        var b = this._layer.getContextScrollParent();
        if (b === window) return;
        c("setTimeout")(function () {
          a._listener = c("Event").listen(b, "scroll", function () {
            a._layer.hide();
          });
        });
      };
      b.detach = function () {
        this._listener && this._listener.remove(), (this._listener = null);
      };
      b._handleContextChange = function () {
        this.detach(), this._layer.isShown() && this.attach();
      };
      return a;
    })();
    Object.assign(a.prototype, { _subscriptions: [] });
    g["default"] = a;
  },
  98
);
__d(
  "curry",
  ["bind"],
  function (a, b, c, d, e, f, g) {
    a = c("bind")(null, c("bind"), null);
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "ParameterizedPopover",
  [
    "invariant",
    "ArbiterMixin",
    "CSS",
    "DataStore",
    "Event",
    "Focus",
    "KeyStatus",
    "Keys",
    "LayerHideOnEscape",
    "SubscriptionsHandler",
    "Toggler",
    "curry",
    "mixin",
  ],
  function (a, b, c, d, e, f, g) {
    b("Toggler").subscribe(["show", "hide"], function (a, c) {
      c = c.getActive();
      c != null || g(0, 4839);
      c = b("DataStore").get(c, "Popover");
      c && (a === "show" ? c.showLayer() : c.hideLayer());
    });
    a = (function (a) {
      "use strict";
      babelHelpers.inheritsLoose(c, a);
      function c(b, c, d, e) {
        var f;
        f = a.call(this) || this;
        typeof b === "string" && typeof c === "string"
          ? window.setTimeout(function () {
              var a = document.getElementById(b),
                g = document.getElementById(c);
              f.construct(a, g, d, e);
            })
          : f.construct(b, c, d, e);
        return f;
      }
      var d = c.prototype;
      d.construct = function (a, c, d, e) {
        (this._root = a),
          (this._triggerElem = c),
          (this._behaviors = d),
          (this._config = e || {}),
          (this._disabled = !!this._config.disabled),
          (this._listeners = new (b("SubscriptionsHandler"))()),
          this._disabled ||
            ((c.nodeName !== "A" ||
              c.rel == null ||
              c.rel.indexOf("toggle") < 0) &&
              this._setupClickListener(),
            this._setupKeyListener(),
            this._setupFocusListener(),
            this._setupBlurListener()),
          c.setAttribute("role", "button"),
          b("DataStore").set(a, "Popover", this),
          b("Toggler").getActive() === a && this.showLayer();
      };
      d.ensureInit = function () {
        this._layer || this._init();
      };
      d.showLayer = function () {
        if (this._disabled) return;
        this.ensureInit();
        this._layer.show();
        b("Toggler").show(this._root);
        b("CSS").addClass(this._root, "selected");
        this.inform("show");
      };
      d.getContentRoot = function () {
        return this._root;
      };
      d.getLayer = function () {
        this.ensureInit();
        return this._layer;
      };
      d.hideLayer = function () {
        this.ensureInit(), this._layer.hide();
      };
      d.isShown = function () {
        return this._layer && this._layer.isShown();
      };
      d.setLayerContent = function (a) {
        this.ensureInit(), this._layer.setContent && this._layer.setContent(a);
      };
      d._init = function () {
        var a = this._config.layer;
        a.enableBehaviors([b("LayerHideOnEscape")]);
        b("Toggler").createInstance(a.getRoot()).setSticky(!1);
        a.subscribe("hide", this._onLayerHide.bind(this));
        this._behaviors && a.enableBehaviors(this._behaviors);
        this._layer = a;
        this.inform("init", null, "persistent");
      };
      d._onLayerHide = function () {
        b("Toggler").hide(this._root),
          b("CSS").removeClass(this._root, "selected"),
          this.inform("hide"),
          b("KeyStatus").getKeyDownCode() === b("Keys").ESC &&
            b("Focus").set(this._triggerElem);
      };
      d.enable = function () {
        if (!this._disabled) return;
        this._listeners.engage();
        this._setupClickListener();
        this._setupKeyListener();
        this._setupFocusListener();
        this._setupBlurListener();
        this._disabled = !1;
      };
      d.disable = function () {
        if (this._disabled) return;
        this.isShown() && this.hideLayer();
        this._listeners.release();
        this._triggerElem.getAttribute("rel") === "toggle" &&
          this._triggerElem.removeAttribute("rel");
        this._disabled = !0;
      };
      d._setupClickListener = function () {
        this._listeners.addSubscriptions(
          b("Event").listen(
            this._triggerElem,
            "click",
            b("curry")(b("Toggler").bootstrap, this._triggerElem)
          )
        );
      };
      d._setupKeyListener = function () {
        this._listeners.addSubscriptions(
          b("Event").listen(
            this._triggerElem,
            "keydown",
            this._handleKeyEvent.bind(this)
          )
        );
      };
      d._setupFocusListener = function () {
        this._listeners.addSubscriptions(
          b("Event").listen(
            this._triggerElem,
            "focus",
            this._handleFocusEvent.bind(this)
          )
        );
      };
      d._setupBlurListener = function () {
        this._listeners.addSubscriptions(
          b("Event").listen(
            this._triggerElem,
            "blur",
            this._handleBlurEvent.bind(this)
          )
        );
      };
      d._handleKeyEvent = function (a) {
        if (a.getModifiers().any) return;
        var c = b("Event").getKeyCode(a);
        switch (c) {
          case b("Keys").DOWN:
          case b("Keys").UP:
            if (this._config.disableArrowKeyActivation) return;
            this.isShown() || b("Toggler").bootstrap(this._triggerElem);
            break;
          case b("Keys").RETURN:
            if (!this._config.enableActivationOnEnter) return;
            this.isShown() || b("Toggler").bootstrap(this._triggerElem);
            break;
          case b("Keys").SPACE:
            b("Toggler").bootstrap(this._triggerElem);
            break;
          default:
            return;
        }
        a.prevent();
      };
      d._handleFocusEvent = function (a) {
        b("CSS").addClass(this._root, "focused");
      };
      d._handleBlurEvent = function (a) {
        b("CSS").removeClass(this._root, "focused");
      };
      d.destroy = function () {
        this.disable(), b("DataStore").remove(this._root, "Popover");
      };
      return c;
    })(b("mixin")(b("ArbiterMixin")));
    Object.assign(a.prototype, { _layer: null });
    e.exports = a;
  },
  null
);
__d(
  "Popover",
  [
    "ContextualLayer",
    "ContextualLayerHideOnScroll",
    "DOM",
    "ParameterizedPopover",
  ],
  function (a, b, c, d, e, f, g) {
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var d = b.prototype;
      d._init = function () {
        var b = new (c("ContextualLayer"))(
          {
            context: this._triggerElem,
            position: "below",
            arrowDimensions: { offset: 12, length: 16 },
            "data-testid": this._config["data-testid"],
          },
          c("DOM").create("div")
        );
        this._config.shouldDisableHideOnScroll ||
          b.enableBehaviors([c("ContextualLayerHideOnScroll")]);
        this._config.layer = b;
        this._config.alignh && b.setAlignment(this._config.alignh);
        this._config.layer_content && b.setContent(this._config.layer_content);
        this._config.position && b.setPosition(this._config.position);
        this._config.arrowDimensions &&
          b.setArrowDimensions(this._config.arrowDimensions);
        a.prototype._init.call(this);
      };
      d.destroy = function () {
        a.prototype.destroy.call(this), this._layer && this._layer.destroy();
      };
      return b;
    })(c("ParameterizedPopover"));
    g["default"] = a;
  },
  98
);
__d(
  "PopoverMenu",
  [
    "ARIA",
    "ArbiterMixin",
    "BehaviorsMixin",
    "Event",
    "Focus",
    "KeyStatus",
    "Keys",
    "SubscriptionsHandler",
    "VirtualCursorStatus",
    "mixin",
    "setTimeout",
  ],
  function (a, b, c, d, e, f, g) {
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, e, f, g) {
        var h;
        h = a.call(this) || this;
        h._popover = b;
        h._triggerElem = e;
        h._getInitialMenu =
          typeof f !== "function"
            ? function () {
                return f;
              }
            : f;
        h._subscriptions = new (c("SubscriptionsHandler"))();
        h._subscriptions.addSubscriptions(
          b.subscribe(
            "init",
            h._onLayerInit.bind(babelHelpers.assertThisInitialized(h))
          ),
          b.subscribe(
            "show",
            h._onPopoverShow.bind(babelHelpers.assertThisInitialized(h))
          ),
          b.subscribe(
            "hide",
            h._onPopoverHide.bind(babelHelpers.assertThisInitialized(h))
          ),
          c("Event").listen(
            h._triggerElem,
            "keydown",
            h._handleKeyEventOnTrigger.bind(
              babelHelpers.assertThisInitialized(h)
            )
          ),
          d("VirtualCursorStatus").add(
            h._triggerElem,
            h._checkInitialFocus.bind(babelHelpers.assertThisInitialized(h))
          )
        );
        g && h.enableBehaviors(g);
        return h;
      }
      var e = b.prototype;
      e.getContentRoot = function () {
        return this._popover.getContentRoot();
      };
      e.setMenu = function (a) {
        this._menu && this._menu !== a && this._menu.destroy();
        this._menu = a;
        var b = a.getRoot();
        this._popover.setLayerContent(b);
        a.subscribe("done", this._onMenuDone.bind(this));
        this._popoverShown && this._menu.onShow();
        d("ARIA").controls(this._triggerElem, b);
        this.inform("setMenu", null, "persistent");
      };
      e.setInitialFocus = function (a, b) {
        b && a.focusAnItem();
      };
      e.getPopover = function () {
        return this._popover;
      };
      e.getTriggerElem = function () {
        return this._triggerElem;
      };
      e.getInitialMenu = function () {
        return this._getInitialMenu();
      };
      e.getMenu = function () {
        return this._menu;
      };
      e._onLayerInit = function () {
        this._menu || this.setMenu(this._getInitialMenu()),
          this._popover
            .getLayer()
            .subscribe("key", this._handleKeyEvent.bind(this));
      };
      e._onPopoverShow = function () {
        this._menu && this._menu.onShow(),
          this._checkInitialFocus(),
          (this._popoverShown = !0);
      };
      e._checkInitialFocus = function () {
        var a =
          d("KeyStatus").isKeyDown() ||
          d("VirtualCursorStatus").isVirtualCursorTriggered();
        this._menu && this.setInitialFocus(this._menu, a);
      };
      e._onPopoverHide = function () {
        this._menu && this._menu.onHide(), (this._popoverShown = !1);
      };
      e._handleKeyEvent = function (a, b) {
        if (b.target === this._triggerElem) return;
        a = c("Event").getKeyCode(b);
        if (a === c("Keys").TAB) {
          this._popover.hideLayer();
          d("Focus").set(this._triggerElem);
          return;
        }
        if (b.getModifiers().any) return;
        switch (a) {
          case c("Keys").RETURN:
            this.getMenu().getFocusedItem() ||
              this.inform("returnWithoutFocusedItem");
            return;
          default:
            if (a === c("Keys").SPACE && b.target.type === "file") return;
            this._menu.handleKeydown(a, b) === !1 &&
              (this._menu.blur(), this._menu.handleKeydown(a, b));
            break;
        }
        b.prevent();
      };
      e._handleKeyEventOnTrigger = function (a) {
        if (this._isTypeaheadActivationDisabled) return;
        var b = c("Event").getKeyCode(a),
          e = String.fromCharCode(b).toLowerCase();
        /^\w$/.test(e) &&
          (this._popover.showLayer(),
          this._menu.blur(),
          this._menu.handleKeydown(b, a) === !1 &&
            (this._popover.hideLayer(), d("Focus").set(this._triggerElem)));
      };
      e.disableTypeaheadActivation = function () {
        this._isTypeaheadActivationDisabled = !0;
      };
      e.enableTypeaheadActivation = function () {
        this._isTypeaheadActivationDisabled = !1;
      };
      e._onMenuDone = function (a) {
        var b = this;
        c("setTimeout")(function () {
          b._popover.hideLayer(), d("Focus").set(b._triggerElem);
        }, 0);
      };
      e.enable = function () {
        this._popover.enable();
      };
      e.disable = function () {
        this._popover.disable();
      };
      e.destroy = function () {
        this._subscriptions.release(),
          this._popover.destroy(),
          this._getInitialMenu().destroy(),
          this._menu && this._menu.destroy();
      };
      return b;
    })(c("mixin")(c("ArbiterMixin"), c("BehaviorsMixin")));
    Object.assign(a.prototype, { _popoverShown: !1 });
    g["default"] = a;
  },
  98
);
__d(
  "PopoverMenu.react",
  [
    "cx",
    "CSS",
    "InlineBlock.react",
    "Popover",
    "PopoverMenu",
    "SubscriptionsHandler",
    "areEqual",
    "clearImmediate",
    "joinClasses",
    "react",
    "setImmediate",
  ],
  function (a, b, c, d, e, f, g, h) {
    var i = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
          e[f] = arguments[f];
        return (
          ((b = c = a.call.apply(a, [this].concat(e)) || this),
          (c.$3 = null),
          (c.$5 = !1),
          (c.$6 = i.createRef()),
          (c.$9 = function () {
            c.$3 && (c.$3.release(), (c.$3 = null)),
              c.$2.setMenu(c.$7(c.props.menu)),
              c.$8();
          }),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      b.getFirstChild = function (a) {
        a = a.children;
        return Array.isArray(a) ? a[0] : a;
      };
      b.getButtonSize = function (a) {
        a = b.getFirstChild(a);
        return a != null && a.props.size != null ? a.props.size : "medium";
      };
      var e = b.prototype;
      e.componentDidMount = function () {
        var a = this.$6.current,
          b = a == null ? void 0 : a.firstChild;
        b != null &&
          (d("CSS").addClass(b, "_p"),
          (this.$1 = new (c("Popover"))(a, b, this.props.layerBehaviors, {
            alignh: this.props.alignh,
            position: this.props.position,
            disabled: this.props.disabled,
            arrowDimensions: { offset: 0, length: 0 },
            disableArrowKeyActivation: this.props.disableArrowKeyActivation,
            enableActivationOnEnter: this.props.enableActivationOnEnter,
            "data-testid": this.props["data-testid"],
            shouldDisableHideOnScroll: this.props.shouldDisableHideOnScroll,
          })),
          (this.$2 = new (c("PopoverMenu"))(
            this.$1,
            b,
            this.$7(this.props.menu),
            this.props.behaviors
          )),
          (this.$5 = !1));
        this.$8();
      };
      e.componentDidUpdate = function (a) {
        c("areEqual")(a.menu, this.props.menu) ||
          (c("clearImmediate")(this.$4),
          (this.$4 = c("setImmediate")(this.$9)));
        this.props.alignh !== a.alignh &&
          this.$2.getPopover().getLayer().setAlignment(this.props.alignh);
        this.props.disabled !== a.disabled &&
          (this.props.disabled ? this.$2.disable() : this.$2.enable());
        if (this.props.position !== a.position) {
          a = this.$1.getLayer();
          a.setPosition(this.props.position);
        }
      };
      e.$8 = function () {
        this.props.onReturnWithoutFocusedItem &&
          this.$3 &&
          this.$2 &&
          this.$3.addSubscriptions(
            this.$2.subscribe(
              "returnWithoutFocusedItem",
              this.props.onReturnWithoutFocusedItem
            )
          );
      };
      e.render = function () {
        var a = i.Children.map(this.props.children, function (a, b) {
            if (b === 0)
              return i.cloneElement(a, {
                className: c("joinClasses")(a.props.className, "_p"),
              });
            else return a;
          }),
          b = babelHelpers["extends"]({}, this.props);
        delete b.onShow;
        delete b.onHide;
        delete b.alignh;
        delete b.position;
        delete b.layerBehaviors;
        delete b.behaviors;
        delete b.menu;
        delete b.disabled;
        delete b.disableArrowKeyActivation;
        delete b.enableActivationOnEnter;
        delete b.shouldDisableHideOnScroll;
        return i.jsx(
          c("InlineBlock.react"),
          babelHelpers["extends"]({}, b, {
            className: c("joinClasses")(this.props.className, "uiPopover"),
            rootRef: this.$6,
            disabled: null,
            children: a,
          })
        );
      };
      e.componentWillUnmount = function () {
        if (this.$5) return;
        c("clearImmediate")(this.$4);
        this.hidePopover();
        this.$3 && (this.$3.release(), (this.$3 = null));
        this.$2 && this.$2.destroy();
        this.$5 = !0;
      };
      e.$7 = function (a) {
        var b = a.props;
        a = new a.type(b);
        this.$3 = new (c("SubscriptionsHandler"))();
        b.onItemClick &&
          this.$3.addSubscriptions(a.subscribe("itemclick", b.onItemClick));
        b.onItemFocus &&
          this.$3.addSubscriptions(a.subscribe("focus", b.onItemFocus));
        b.onItemBlur &&
          this.$3.addSubscriptions(a.subscribe("blur", b.onItemBlur));
        b.onChange &&
          this.$3.addSubscriptions(a.subscribe("change", b.onChange));
        this.props.onShow &&
          this.$3.addSubscriptions(
            this.$1.subscribe("show", this.props.onShow)
          );
        this.props.onHide &&
          this.$3.addSubscriptions(
            this.$1.subscribe("hide", this.props.onHide)
          );
        return a;
      };
      e.getMenu = function () {
        return this.$2.getMenu();
      };
      e.isShown = function () {
        return !!(this.$1 && this.$1.isShown());
      };
      e.showPopover = function (a) {
        this.$1.showLayer();
        if (a) {
          var b = this.$2.getMenu();
          b.blur();
          b.focusAnItem(a);
        }
      };
      e.hidePopover = function () {
        var a = this.$1;
        a && a.isShown() && a.hideLayer();
      };
      e.getFocusedItem = function () {
        var a = this.$2.getMenu();
        return a.getFocusedItem();
      };
      return b;
    })(i.Component);
    a.defaultProps = { alignv: "middle", shouldDisableHideOnScroll: !1 };
    g["default"] = a;
  },
  98
);
__d(
  "PopoverMenuInterface",
  ["ArbiterMixin", "emptyFunction", "mixin"],
  function (a, b, c, d, e, f) {
    a = (function (a) {
      "use strict";
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var c = b.prototype;
      c.done = function () {
        this.inform("done");
      };
      return b;
    })(b("mixin")(b("ArbiterMixin")));
    Object.assign(a.prototype, {
      getRoot: (c = b("emptyFunction")),
      onShow: c,
      onHide: c,
      focusAnItem: c.thatReturnsFalse,
      blur: c,
      handleKeydown: c.thatReturnsFalse,
      destroy: c,
    });
    e.exports = a;
  },
  null
);
__d(
  "CSSFade",
  [
    "cx",
    "invariant",
    "CSS",
    "DataStore",
    "Event",
    "Style",
    "requestAnimationFrameAcrossTransitions",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = "css-fade-animation",
      j = "css-show-animation",
      k = "CSSFade_hide",
      l = "CSSFade_show";
    a = document.createElement("div").animate !== void 0;
    var m = { cancel: function () {} };
    function n(a, c) {
      a != null || h(0, 5875);
      a = b("DataStore").get(a, c);
      a && a.cancel();
      return a;
    }
    function o(a, b, c) {
      a =
        ((a = a) != null ? ((a = a.style) != null ? a.animation : a) : a) || "";
      b = b + "s " + c;
      a.length > 5 && (b = a.slice(0, -1) + (", " + b));
      return b;
    }
    function p(a, b) {
      a =
        ((a = a) != null ? ((a = a.style) != null ? a.animation : a) : a) || "";
      a = a.split(",");
      var c = a.findIndex(function (a) {
        return a.indexOf(b) > -1;
      });
      c !== -1 && a.splice(c, 1);
      return a.join(",");
    }
    c = {
      show: function (a, c) {
        c === void 0 && (c = {});
        var d = c.duration != null ? c.duration / 1e3 : 0.3;
        n(a, i);
        n(a, j);
        b("CSS").removeClass(a, c.invisible ? "invisible_elem" : "hidden_elem");
        b("requestAnimationFrameAcrossTransitions")(function () {
          a.style.animation = o(a, d, l);
        });
        var e = b("Event").listen(a, "animationend", function () {
            c.callback && c.callback(), (a.style.animation = p(a, l));
          }),
          f = {
            cancel: function () {
              (a.style.animation = p(a, l)),
                e.remove(),
                (f.cancel = function () {});
            },
          };
        b("DataStore").set(a, j, f);
        return f;
      },
      hide: function (a, c) {
        c === void 0 && (c = {});
        var d = function () {
          b("CSS").addClass(a, c.invisible ? "invisible_elem" : "hidden_elem"),
            c.callback && c.callback(),
            (a.style.animation = p(a, k));
        };
        if (c.simple) {
          d();
          return m;
        }
        var e = c.duration != null ? c.duration / 1e3 : 0.3;
        n(a, j);
        n(a, i);
        b("requestAnimationFrameAcrossTransitions")(function () {
          a.style.animation = o(a, e, k);
        });
        var f = b("Event").listen(a, "animationend", d),
          g = {
            cancel: function () {
              (a.style.animation = p(a, k)),
                f.remove(),
                (g.cancel = function () {});
            },
          };
        b("DataStore").set(a, i, g);
        return g;
      },
    };
    d = {
      show: function (a, c) {
        c === void 0 && (c = {});
        var d = c.duration != null ? c.duration : 300;
        n(a, i);
        n(a, j);
        b("CSS").removeClass(a, c.invisible ? "invisible_elem" : "hidden_elem");
        b("Style").set(a, "opacity", "1");
        var e = c.peekStateFade ? "0.6" : "0";
        e = a.animate([{ opacity: e }, { opacity: "1.0" }], { duration: d });
        c.callback && (e.onfinish = c.callback);
        b("DataStore").set(a, j, e);
        return e;
      },
      hide: function (a, c) {
        c === void 0 && (c = {});
        var d = c.duration != null ? c.duration : 300;
        n(a, j);
        if (c.simple === !0) {
          b("CSS").addClass(a, c.invisible ? "invisible_elem" : "hidden_elem");
          return m;
        } else {
          n(a, i);
          b("Style").set(a, "opacity", "0");
          var e = c.peekStateFade ? "0.4" : "0";
          e = a.animate([{ opacity: "1.0" }, { opacity: e }], { duration: d });
          e.onfinish = function () {
            b("CSS").addClass(
              a,
              c.invisible ? "invisible_elem" : "hidden_elem"
            ),
              c.callback && c.callback();
          };
          b("DataStore").set(a, i, e);
          return e;
        }
      },
    };
    e.exports = a ? d : c;
  },
  null
);
__d(
  "DOMScroll",
  [
    "Arbiter",
    "DOM",
    "DOMQuery",
    "Vector",
    "ViewportBounds",
    "emptyFunction",
    "ge",
    "isAsyncScrollQuery",
    "nullthrows",
    "requireDeferred",
  ],
  function (a, b, c, d, e, f) {
    var g = b("requireDeferred")("Animation").__setRef("DOMScroll"),
      h = {
        SCROLL: "dom-scroll",
        _scrolling: !1,
        _scrollingFinishedTimeout: null,
        getScrollState: function () {
          var a = b("Vector").getViewportDimensions(),
            c = b("Vector").getDocumentDimensions(),
            d = c.x > a.x;
          c = c.y > a.y;
          d += 0;
          c += 0;
          return new (b("Vector"))(d, c);
        },
        _scrollbarSize: null,
        _initScrollbarSize: function () {
          var a = b("DOM").create("p");
          a.style.width = "100%";
          a.style.height = "200px";
          var c = b("DOM").create("div");
          c.style.position = "absolute";
          c.style.top = "0px";
          c.style.left = "0px";
          c.style.visibility = "hidden";
          c.style.width = "200px";
          c.style.height = "150px";
          c.style.overflow = "hidden";
          c.appendChild(a);
          b("nullthrows")(document.body).appendChild(c);
          var d = a.offsetWidth;
          c.style.overflow = "scroll";
          a = a.offsetWidth;
          d == a && (a = c.clientWidth);
          b("nullthrows")(document.body).removeChild(c);
          h._scrollbarSize = d - a;
        },
        getScrollbarSize: function () {
          h._scrollbarSize === null && h._initScrollbarSize();
          return b("nullthrows")(h._scrollbarSize);
        },
        scrollTo: function (a, c, d, e, f, i) {
          var j,
            k = 0;
          c == null || c === !0
            ? (k = 750)
            : typeof c === "number"
            ? (k = c)
            : parseInt(c, 10) && (k = parseInt(c, 10));
          b("isAsyncScrollQuery")() && (k = 0);
          if (a instanceof b("Vector")) c = a;
          else {
            var l = b("Vector").getScrollPosition().x;
            a = b("Vector").getElementPosition(b("ge")(a)).y;
            c = new (b("Vector"))(l, a, "document");
            e || (c.y -= b("ViewportBounds").getTop() / (d ? 2 : 1));
          }
          d
            ? (c.y -= b("Vector").getViewportDimensions().y / 2)
            : e && ((c.y -= b("Vector").getViewportDimensions().y), (c.y += e));
          f && (c.y -= f);
          c = c.convertTo("document");
          if (k)
            if (
              "scrollBehavior" in
                b("nullthrows")(document.documentElement).style &&
              k === 750 &&
              !i
            )
              try {
                window.scrollTo({ left: c.x, top: c.y, behavior: "smooth" });
              } catch (a) {
                window.scrollTo(c.x, c.y);
              }
            else {
              l = g.getModuleIfRequired();
              if (l != null) {
                h._setScrollingForDuration(k);
                var m = new l(b("nullthrows")(document.body))
                  .to("scrollTop", c.y)
                  .to("scrollLeft", c.x)
                  .ease(l.ease.end)
                  .duration(k)
                  .ondone(i)
                  .go();
                j = function () {
                  m.stop();
                };
              } else window.scrollTo(c.x, c.y), i && i();
            }
          else window.scrollTo(c.x, c.y), i && i();
          b("Arbiter").inform(h.SCROLL);
          return j || b("emptyFunction");
        },
        scrollToID: function (a) {
          h.scrollTo(a);
        },
        ensureVisible: function (a, c, d, e, f) {
          var g = b("Vector").getScrollPosition().x;
          a = h._getBounds(a, c, d);
          c = a[0];
          d = a[1];
          var i = a[2];
          a = a[3];
          i < c
            ? h.scrollTo(new (b("Vector"))(g, i, "document"), e, !1, 0, 0, f)
            : a > d
            ? i - (a - d) < c
              ? h.scrollTo(new (b("Vector"))(g, i, "document"), e, !1, 0, 0, f)
              : h.scrollTo(new (b("Vector"))(g, a, "document"), e, !1, 1, 0, f)
            : f && f();
        },
        isCurrentlyVisible: function (a, b, c) {
          a = h._getBounds(a, b, c);
          b = a[0];
          c = a[1];
          var d = a[2];
          a = a[3];
          return d >= b && a <= c;
        },
        _getBounds: function (a, c, d) {
          d == null && (d = 10);
          a = b("ge")(a);
          c && (a = b("DOMQuery").find(a, c));
          c = b("Vector").getScrollPosition().y;
          var e = c + b("Vector").getViewportDimensions().y,
            f = b("Vector").getElementPosition(a).y;
          a = f + b("Vector").getElementDimensions(a).y;
          f -= b("ViewportBounds").getTop();
          f -= d;
          a += d;
          return [c, e, f, a];
        },
        scrollToTop: function (a) {
          var c = b("Vector").getScrollPosition();
          h.scrollTo(new (b("Vector"))(c.x, 0, "document"), a !== !1);
        },
        currentlyScrolling: function () {
          return h._scrolling;
        },
        _setScrollingForDuration: function (a) {
          (h._scrolling = !0),
            h._scrollingFinishedTimeout &&
              (clearTimeout(h._scrollingFinishedTimeout),
              (h._scrollingFinishedTimeout = null)),
            (h._scrollingFinishedTimeout = setTimeout(function () {
              (h._scrolling = !1), (h._scrollingFinishedTimeout = null);
            }, a));
        },
      };
    e.exports = h;
  },
  null
);
__d(
  "SimpleDrag",
  [
    "ArbiterMixin",
    "Event",
    "SubscriptionsHandler",
    "UserAgent_DEPRECATED",
    "Vector",
    "emptyFunction",
  ],
  function (a, b, c, d, e, f) {
    function a(a) {
      (this.minDragDistance = 0),
        (this._subscriptions = new (b("SubscriptionsHandler"))()),
        this._subscriptions.addSubscriptions(
          b("Event").listen(a, "mousedown", this._start.bind(this))
        );
    }
    Object.assign(a.prototype, b("ArbiterMixin"), {
      setMinDragDistance: function (a) {
        this.minDragDistance = a;
      },
      destroy: function () {
        this._subscriptions.release();
      },
      _start: function (a) {
        var c = this,
          d = !1,
          e = !0,
          f = null;
        this.inform("mousedown", a) && (e = !1);
        if (this.minDragDistance) f = b("Vector").getEventPosition(a);
        else {
          d = !0;
          var g = this.inform("start", a);
          if (g === !0) e = !1;
          else if (g === !1) {
            d = !1;
            return;
          }
        }
        g =
          b("UserAgent_DEPRECATED").ie() < 9
            ? document.documentElement
            : window;
        var h = b("Event").listen(g, {
          selectstart: e ? b("Event").prevent : b("emptyFunction"),
          mousemove: function (a) {
            if (!d) {
              var e = b("Vector").getEventPosition(a);
              if (f.distanceTo(e) < c.minDragDistance) return;
              d = !0;
              if (c.inform("start", a) === !1) {
                d = !1;
                return;
              }
            }
            c.inform("update", a);
          },
          mouseup: function (a) {
            for (var b in h) h[b].remove();
            d ? c.inform("end", a) : c.inform("click", a);
          },
        });
        e && a.prevent();
      },
    });
    e.exports = a;
  },
  null
);
__d(
  "firstx",
  ["invariant"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    function a(a) {
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
        return d;
      }
      h(0, 1145);
    }
    g["default"] = a;
  },
  98
);
__d(
  "getScrollableAreaContainingNode",
  ["DataStore", "Parent"],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      a = b("Parent").byClass(a, "uiScrollableArea");
      return a ? b("DataStore").get(a, "ScrollableArea") : null;
    }
    e.exports = a;
  },
  null
);
__d(
  "ScrollableArea",
  [
    "ArbiterMixin",
    "BrowserSupport",
    "CSS",
    "CSSFade",
    "DOM",
    "DOMScroll",
    "DataStore",
    "Deferred",
    "Event",
    "FocusEvent",
    "Run",
    "Scroll",
    "SimpleDrag",
    "Style",
    "SubscriptionsHandler",
    "TimeSlice",
    "UserAgent_DEPRECATED",
    "Vector",
    "clearTimeout",
    "createCancelableFunction",
    "emptyFunction",
    "firstx",
    "getScrollableAreaContainingNode",
    "mixin",
    "promiseDone",
    "queryThenMutateDOM",
    "requireDeferred",
    "setTimeoutAcrossTransitions",
    "throttle",
  ],
  function (a, b, c, d, e, f) {
    var g = b("requireDeferred")("Animation").__setRef("ScrollableArea"),
      h = 12;
    a = (function (a) {
      "use strict";
      babelHelpers.inheritsLoose(c, a);
      function c(c, d) {
        var e;
        e = a.call(this) || this;
        e.adjustGripper = function () {
          var a = function () {
            b("queryThenMutateDOM")(
              function () {
                return e._needsGripper();
              },
              function (a) {
                a &&
                  (b("Style").set(
                    e._gripper,
                    "height",
                    e._gripperHeight + "px"
                  ),
                  e._slideGripper());
              }
            ),
              e._throttledShowGripperAndShadows();
          };
          a = b("TimeSlice").guard(a, "ScrollableArea adjustGripper", {
            propagationType: b("TimeSlice").PropagationType.ORPHAN,
          });
          a();
          return babelHelpers.assertThisInitialized(e);
        };
        e._computeHeights = function () {
          (e._containerHeight = e._elem.clientHeight),
            (e._contentHeight = e._content.offsetHeight),
            (e._trackHeight = e._track.offsetHeight),
            (e._gripperHeight = Math.max(
              (e._containerHeight / e._contentHeight) * e._trackHeight,
              h
            ));
        };
        e._showGripperAndShadows = function () {
          b("queryThenMutateDOM")(
            function () {
              return {
                needsGripper: e._needsGripper(),
                top: b("Scroll").getTop(e._wrap) > 0,
                isScrolledToBottom: e.isScrolledToBottom(),
              };
            },
            function (a) {
              var c = a.needsGripper,
                d = a.top;
              a = a.isScrolledToBottom;
              b("CSS").conditionShow(e._gripper, c);
              b("CSS").conditionClass(e._elem, "contentBefore", d);
              b("CSS").conditionClass(e._elem, "contentAfter", !a);
            }
          );
        };
        e._respondMouseMove = function () {
          if (!e._mouseOver || e._isFocussed) return;
          var a = e._options.fade !== !1,
            c = e._mousePos,
            d = b("Vector").getElementPosition(e._track).x,
            f = b("Vector").getElementDimensions(e._track).x;
          d = Math.abs(d + f / 2 - c.x);
          f = b("BrowserSupport").hasPointerEvents() && d <= 10;
          f && !e._trackIsHovered
            ? ((e._trackIsHovered = !0),
              b("CSS").addClass(e._elem, "uiScrollableAreaTrackOver"),
              e.throttledAdjustGripper())
            : !f &&
              e._trackIsHovered &&
              ((e._trackIsHovered = !1),
              b("CSS").removeClass(e._elem, "uiScrollableAreaTrackOver"));
          a &&
            (d < 25
              ? e.showScrollbar({ hideAfterDelay: !1 })
              : !e._options.no_fade_on_hover &&
                !e._isFocussed &&
                e.hideScrollbar({ hideAfterDelay: !0, shouldFade: !0 }));
        };
        if (!c) return babelHelpers.assertThisInitialized(e);
        d = d || {};
        e._elem = c;
        e._wrap = b("firstx")(b("DOM").scry(c, "div.uiScrollableAreaWrap"));
        e._body = b("firstx")(
          b("DOM").scry(e._wrap, "div.uiScrollableAreaBody")
        );
        e._content = b("firstx")(
          b("DOM").scry(e._body, "div.uiScrollableAreaContent")
        );
        e._track = b("firstx")(b("DOM").scry(c, "div.uiScrollableAreaTrack"));
        e._trackIsHovered = !1;
        e._isFocussed = !1;
        e._gripper = b("firstx")(
          b("DOM").scry(e._track, "div.uiScrollableAreaGripper")
        );
        e._options = d;
        e._throttledComputeHeights = b("throttle").withBlocking(
          e._computeHeights,
          250,
          babelHelpers.assertThisInitialized(e)
        );
        e.throttledAdjustGripper = b("throttle").withBlocking(
          e.adjustGripper,
          250,
          babelHelpers.assertThisInitialized(e)
        );
        e.throttledAdjustGripper = b("TimeSlice").guard(
          e.throttledAdjustGripper,
          "ScrollableArea throttledAdjustGripper",
          { propagationType: b("TimeSlice").PropagationType.ORPHAN }
        );
        e._throttledShowGripperAndShadows = b("throttle").withBlocking(
          e._showGripperAndShadows,
          250,
          babelHelpers.assertThisInitialized(e)
        );
        e._throttledRespondMouseMove = b("throttle")(
          e._respondMouseMove,
          250,
          babelHelpers.assertThisInitialized(e)
        );
        b("setTimeoutAcrossTransitions")(
          e.adjustGripper.bind(babelHelpers.assertThisInitialized(e)),
          0
        );
        e._listeners = new (b("SubscriptionsHandler"))();
        e._listeners.addSubscriptions(
          b("Event").listen(
            e._wrap,
            "scroll",
            e._handleScroll.bind(babelHelpers.assertThisInitialized(e))
          ),
          b("Event").listen(
            c,
            "mousemove",
            e._handleMouseMove.bind(babelHelpers.assertThisInitialized(e))
          ),
          b("Event").listen(
            e._track,
            "click",
            e._handleClickOnTrack.bind(babelHelpers.assertThisInitialized(e))
          )
        );
        b("BrowserSupport").hasPointerEvents() &&
          e._listeners.addSubscriptions(
            b("Event").listen(
              c,
              "mousedown",
              e._handleClickOnTrack.bind(babelHelpers.assertThisInitialized(e))
            )
          );
        if (d.fade !== !1) {
          var f;
          (f = e._listeners).addSubscriptions.apply(
            f,
            [
              b("Event").listen(
                c,
                "mouseenter",
                e._handleMouseEnter.bind(babelHelpers.assertThisInitialized(e))
              ),
              b("Event").listen(
                c,
                "mouseleave",
                e._handleMouseLeave.bind(babelHelpers.assertThisInitialized(e))
              ),
            ].concat(e._attachFocusListeners(e._wrap))
          );
        } else
          b("BrowserSupport").hasPointerEvents() &&
            e._listeners.addSubscriptions(
              b("Event").listen(c, "mouseleave", function () {
                e._isFocussed ||
                  ((e._trackIsHovered = !1),
                  b("CSS").removeClass(c, "uiScrollableAreaTrackOver"));
              })
            );
        (b("UserAgent_DEPRECATED").webkit() ||
          b("UserAgent_DEPRECATED").chrome()) &&
          e._listeners.addSubscriptions(
            b("Event").listen(c, "mousedown", function () {
              var a = b("Event").listen(window, "mouseup", function () {
                b("Scroll").getLeft(c) && b("Scroll").setLeft(c, 0), a.remove();
              });
            })
          );
        e._drag = e.initDrag();
        b("DataStore").set(
          e._elem,
          "ScrollableArea",
          babelHelpers.assertThisInitialized(e)
        );
        d.persistent ||
          ((e._destroy = b("createCancelableFunction")(
            e._destroy.bind(babelHelpers.assertThisInitialized(e))
          )),
          d.runtime_site_is_comet || b("Run").onLeave(e._destroy));
        d.shadow !== !1 &&
          b("CSS").addClass(e._elem, "uiScrollableAreaWithShadow");
        return e;
      }
      var d = c.prototype;
      d.getContentHeight = function () {
        return this._contentHeight;
      };
      d.getElement = function () {
        return this._elem;
      };
      d.initDrag = function () {
        var a = this,
          c = b("BrowserSupport").hasPointerEvents(),
          d = new (b("SimpleDrag"))(c ? this._elem : this._gripper);
        d.subscribe("start", function (e, f) {
          if (!((f.which && f.which === 1) || (f.button && f.button === 1)))
            return !1;
          e = b("Vector").getEventPosition(f, "viewport");
          if (c) {
            var g = a._gripper.getBoundingClientRect();
            if (e.x < g.left || e.x > g.right || e.y < g.top || e.y > g.bottom)
              return !1;
          }
          f.stopPropagation();
          a.inform("grip_start");
          var h = e.y,
            i = a._gripper.offsetTop;
          b("CSS").addClass(a._elem, "uiScrollableAreaDragging");
          var j = d.subscribe("update", function (c, d) {
              c = b("Vector").getEventPosition(d, "viewport").y - h;
              a._throttledComputeHeights();
              d = a._contentHeight - a._containerHeight;
              c = i + c;
              var e = a._trackHeight - a._gripperHeight;
              c = Math.max(Math.min(c, e), 0);
              c = (c / e) * d;
              b("Scroll").setTop(a._wrap, c);
            }),
            k = d.subscribe("end", function () {
              d.unsubscribe(j),
                d.unsubscribe(k),
                b("CSS").removeClass(a._elem, "uiScrollableAreaDragging"),
                a.inform("grip_end");
            });
          return void 0;
        });
        return d;
      };
      d._attachFocusListeners = function (a) {
        var c = this,
          d = {
            runtime_site_is_comet: Boolean(this._options.runtime_site_is_comet),
          },
          e;
        return [
          b("FocusEvent").listen(
            a,
            function (a) {
              e && (e.reject(), (e = null)),
                a
                  ? ((e = new (b("Deferred"))()),
                    b("promiseDone")(
                      e.getPromise(),
                      function () {
                        (c._isFocussed = !0),
                          (c._trackIsHovered = !0),
                          b("queryThenMutateDOM")(null, function () {
                            b("CSS").addClass(
                              c._elem,
                              "uiScrollableAreaTrackOver"
                            );
                          }),
                          c.showScrollbar({ hideAfterDelay: !1 }),
                          (e = null);
                      },
                      function () {
                        e = null;
                      }
                    ))
                  : ((c._isFocussed = !1),
                    c._mouseOver
                      ? c._respondMouseMove()
                      : (b("queryThenMutateDOM")(null, function () {
                          b("CSS").removeClass(
                            c._elem,
                            "uiScrollableAreaTrackOver"
                          );
                        }),
                        c.hideScrollbar({
                          hideAfterDelay: !1,
                          shouldFade: !1,
                        })));
            },
            d
          ),
          b("Event").listen(document.documentElement, "keyup", function (a) {
            e && e.resolve();
          }),
        ];
      };
      d._needsGripper = function () {
        this._throttledComputeHeights();
        return this._gripperHeight < this._trackHeight;
      };
      d._slideGripper = function () {
        var a = this;
        b("queryThenMutateDOM")(
          function () {
            return (
              (b("Scroll").getTop(a._wrap) /
                (a._contentHeight - a._containerHeight)) *
              (a._trackHeight - a._gripperHeight)
            );
          },
          function (c) {
            b("Style").set(a._gripper, "top", c + "px");
          }
        );
      };
      d.destroy = function () {
        this._destroy(), this._destroy.cancel && this._destroy.cancel();
      };
      d._destroy = function () {
        this._listeners && this._listeners.release(),
          this._elem && b("DataStore").remove(this._elem, "ScrollableArea"),
          this._drag && this._drag.destroy();
      };
      d._handleClickOnTrack = function (a) {
        var c = b("Vector").getEventPosition(a, "viewport"),
          d = this._gripper.getBoundingClientRect();
        c.x < d.right &&
          c.x > d.left &&
          (c.y < d.top
            ? this.setScrollTop(this.getScrollTop() - this._elem.clientHeight)
            : c.y > d.bottom &&
              this.setScrollTop(this.getScrollTop() + this._elem.clientHeight),
          a.kill());
      };
      d._handleMouseMove = function (a) {
        var c = this._options.fade !== !1;
        (b("BrowserSupport").hasPointerEvents() || c) &&
          ((this._mousePos = b("Vector").getEventPosition(a)),
          this._throttledRespondMouseMove());
      };
      d._handleScroll = function (a) {
        this._needsGripper() && this._slideGripper(),
          this.throttledAdjustGripper(),
          this._options.fade !== !1 &&
            !this._isFocussed &&
            this.showScrollbar({ hideAfterDelay: !0 }),
          this.inform("scroll");
      };
      d._handleMouseLeave = function (a) {
        (this._mouseOver = !1),
          (this._mousePos = b("Vector").getEventPosition(a)),
          this._isFocussed ||
            this.hideScrollbar({ hideAfterDelay: !0, shouldFade: !0 });
      };
      d._handleMouseEnter = function (a) {
        (this._mouseOver = !0),
          (this._mousePos = b("Vector").getEventPosition(a)),
          this._isFocussed || this.showScrollbar({ hideAfterDelay: !0 });
      };
      d.hideScrollbar = function (a) {
        var c = this,
          d = a.hideAfterDelay,
          e = a.shouldFade;
        if (this._hideTimeout || !this._scrollbarVisible) return this;
        var f = function () {
          (c._scrollbarVisible = !1),
            b("CSSFade").hide(c._track, {
              simple: !e,
              invisible: b("CSS").hasClass(c._track, "invisible_elem"),
            });
        };
        d
          ? (this._hideTimeout = b("setTimeoutAcrossTransitions")(function () {
              (c._hideTimeout = null), f();
            }, 750))
          : f();
        return this;
      };
      d.pageDown = function (a, b) {
        this._scrollPage(1, a, b);
      };
      d.pageUp = function (a, b) {
        this._scrollPage(-1, a, b);
      };
      d._scrollPage = function (a, b, c) {
        a = a * this._containerHeight;
        var d = this.getScrollHeight() - this._containerHeight;
        d = Math.max(0, Math.min(d, this.getScrollTop() + a));
        this.setScrollTop(d, b, c);
      };
      d.resize = function () {
        this._body.style.width && (this._body.style.width = "");
        var a = b("DOMScroll").getScrollbarSize();
        a > 0 && b("Style").set(this._body, "margin-right", -a + "px");
        return this;
      };
      d.showScrollbar = function (a) {
        var c = this,
          d = a.hideAfterDelay;
        this._hideTimeout &&
          (b("clearTimeout")(this._hideTimeout), (this._hideTimeout = null));
        if (this._scrollbarVisible) return this;
        this._scrollbarVisible = !0;
        b("queryThenMutateDOM")(null, function () {
          b("CSSFade").show(c._track, {
            duration: 0,
            invisible: b("CSS").hasClass(c._track, "invisible_elem"),
          }),
            c.throttledAdjustGripper(),
            d &&
              c.hideScrollbar({
                hideAfterDelay: !0,
                shouldFade: !c._options.no_fade_on_hover,
              });
        });
        return this;
      };
      d.distanceToBottom = function () {
        this._computeHeights();
        var a = Math.round(b("Scroll").getTop(this._wrap));
        return this._contentHeight - (a + this._containerHeight);
      };
      d.isScrolledToBottom = function () {
        return this.distanceToBottom() <= 0;
      };
      d.isScrolledToTop = function () {
        return b("Scroll").getTop(this._wrap) === 0;
      };
      d.scrollToBottom = function (a, b) {
        this.setScrollTop(this._wrap.scrollHeight, a, b);
      };
      d.scrollToTop = function (a, b) {
        this.setScrollTop(0, a, b);
      };
      d.scrollIntoView = function (a, c, d) {
        var e = this._wrap.clientHeight,
          f = a.offsetHeight,
          g = b("Scroll").getTop(this._wrap),
          h = g + e;
        a = this.getScrollOffsetForElement(a);
        var i = a + f;
        if (a < g || e < f) return this.setScrollTop(a, c, { callback: d });
        else if (i > h)
          return this.setScrollTop(g + (i - h), c, { callback: d });
        d && d();
        return b("emptyFunction");
      };
      d.getScrollOffsetForElement = function (a) {
        var b = 0;
        while (a != null && a !== this._wrap)
          (b += a.offsetTop), (a = a.offsetParent);
        return b;
      };
      d.scrollElemToTop = function (a, b, c) {
        this.setScrollTop(a.offsetTop, b, { callback: c });
      };
      d.poke = function () {
        var a,
          c = (a = b("Scroll")).getTop(this._wrap);
        a.setTop(this._wrap, a.getTop(this._wrap) + 1);
        a.setTop(this._wrap, a.getTop(this._wrap) - 1);
        a.setTop(this._wrap, c);
        if (this._isFocussed) return this;
        else return this.showScrollbar({ hideAfterDelay: !1 });
      };
      d.getClientHeight = function () {
        return this._wrap.clientHeight;
      };
      d.getScrollTop = function () {
        return b("Scroll").getTop(this._wrap);
      };
      d.getScrollHeight = function () {
        return this._wrap.scrollHeight;
      };
      d.setScrollTop = function (a, b, c) {
        c === void 0 && (c = {});
        var d;
        if (b !== !1) {
          b = g.getModuleIfRequired();
          b != null
            ? (d = this._animatedSetScrollTop(b, a, c))
            : this._simpleSetScrollTop(a, c);
        } else this._simpleSetScrollTop(a, c);
        return function () {
          d && d.stop(), (d = null);
        };
      };
      d._simpleSetScrollTop = function (a, c) {
        b("Scroll").setTop(this._wrap, a), c.callback && c.callback();
      };
      d._animatedSetScrollTop = function (a, b, c) {
        this._scrollTopAnimation && this._scrollTopAnimation.stop();
        var d = c.duration || 250,
          e = c.ease || a.ease.end;
        this._scrollTopAnimation = new a(this._wrap)
          .to("scrollTop", b)
          .ease(e)
          .duration(d)
          .ondone(c.callback)
          .go();
        return this._scrollTopAnimation;
      };
      c.renderDOM = function () {
        var a,
          c = (a = b("DOM")).create("div", {
            className: "uiScrollableAreaContent",
          }),
          d = a.create("div", { className: "uiScrollableAreaBody" }, c),
          e = a.create(
            "div",
            { className: "uiScrollableAreaWrap scrollable" },
            d
          );
        a = a.create("div", { className: "uiScrollableArea native" }, e);
        return { root: a, wrap: e, body: d, content: c };
      };
      c.fromNative = function (a, d) {
        if (
          !b("CSS").hasClass(a, "uiScrollableArea") ||
          !b("CSS").hasClass(a, "native")
        )
          return void 0;
        d = d || {};
        b("CSS").removeClass(a, "native");
        var e = b("DOM").create(
          "div",
          { className: "uiScrollableAreaTrack" },
          b("DOM").create("div", { className: "uiScrollableAreaGripper" })
        );
        d.fade !== !1
          ? (b("CSS").addClass(a, "fade"), b("CSS").addClass(e, "hidden_elem"))
          : b("CSS").addClass(a, "nofade");
        d.tabIndex != null
          ? (b("DOM").setAttributes(e, { tabIndex: d.tabIndex }),
            b("DOM").prependContent(a, e))
          : b("DOM").appendContent(a, e);
        e = new c(a, d);
        e.resize();
        return e;
      };
      c.getInstance = function (a) {
        return b("getScrollableAreaContainingNode")(a);
      };
      c.poke = function (a) {
        a = c.getInstance(a);
        a && a.poke();
      };
      return c;
    })(b("mixin")(b("ArbiterMixin")));
    e.exports = a;
  },
  null
);
__d(
  "Menu",
  [
    "cx",
    "BehaviorsMixin",
    "CSS",
    "DOM",
    "DataStore",
    "Event",
    "Keys",
    "Parent",
    "PopoverMenuInterface",
    "ScrollableArea",
    "Style",
    "SubscriptionsHandler",
    "UserAgent",
    "debounce",
  ],
  function (a, b, c, d, e, f, g, h) {
    var i = 500;
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(d, e) {
        var f;
        f = a.call(this) || this;
        f._items = [];
        f._keysSoFar = "";
        f._items = d.map(b.buildItemFromData);
        f._config = e || {};
        f._theme = e.theme || {};
        f._subscriptions = new (c("SubscriptionsHandler"))();
        f._clearKeysSoFarAfterDelay = c("debounce")(function () {
          f._keysSoFar = "";
        }, i);
        return f;
      }
      b.buildItemFromData = function (a) {
        if (a.ctor) return new a.ctor(a);
        else return new a.type(a.props);
      };
      var e = b.prototype;
      e.addItem = function (a) {
        this._addItem(a);
      };
      e.addItemBefore = function (a, b) {
        this._addItem(a, b, !1);
      };
      e.addItemAfter = function (a, b) {
        this._addItem(a, b, !0);
      };
      e._addItem = function (a, b, c) {
        var d = this._items.indexOf(a);
        if (d >= 0) {
          var e = c ? -1 : 1;
          if (this._items[d + e] == b) return;
          this._items.splice(d, 1);
        }
        if (b) {
          d = this._items.indexOf(b);
          if (d < 0)
            throw new Error("reference item must already be in the menu");
          c && d++;
          this._items.splice(d, 0, a);
        } else this._items.push(a);
        this._root && this._insertItem(a, b, c);
      };
      e.removeItem = function (a) {
        var b = this._items.indexOf(a);
        if (b < 0) return;
        this._items.splice(b, 1);
        this._root && c("DOM").remove(a.getRoot());
      };
      e.forEachItem = function (a) {
        this._items.forEach(a);
      };
      e.getFocusedItem = function () {
        return this._focused;
      };
      e.getItemAt = function (a) {
        return this._items[a] || null;
      };
      e.getRoot = function () {
        this._root || this._render();
        return this._root;
      };
      e.onShow = function () {
        this._config.maxheight &&
          (!this._scrollableArea
            ? (this._scrollableArea = c("ScrollableArea").fromNative(
                this._scrollableElems.root,
                { fade: !0 }
              ))
            : this._scrollableArea.resize()),
          this.inform("show");
      };
      e.onHide = function () {
        this.blur(), this.inform("hide");
      };
      e.focusAnItem = function (a) {
        return this._attemptFocus(a || 0, 1);
      };
      e.blur = function () {
        if (this._focused) {
          var a = this._focused;
          this._focused.blur();
          this._focused = null;
          this.inform("blur", { item: a });
        }
      };
      e.handleKeydown = function (a, b) {
        if (!this._items.length) return !1;
        var d = this._items.indexOf(this._focused);
        switch (a) {
          case c("Keys").UP:
          case c("Keys").DOWN:
            var e = a === c("Keys").UP,
              f = e ? -1 : 1;
            e = e ? this._items.length - 1 : 0;
            return d === -1
              ? this._attemptFocus(e, f)
              : this._attemptFocus(d + f, f);
          case c("Keys").HOME:
            return this._attemptFocus(0, 1);
          case c("Keys").END:
            return this._attemptFocus(this._items.length - 1, -1);
          case c("Keys").SPACE:
            if (this._items.indexOf(this._focused) !== -1) {
              this._handleItemClick(this._focused, b);
              return !0;
            }
            return !1;
          case c("Keys").RIGHT:
          case c("Keys").LEFT:
          case c("Keys").INSERT:
          case c("Keys").DELETE:
            return !1;
          default:
            e = this._findItemToFocus(a, d);
            return !!(e && this._focusItem(e));
        }
      };
      e._findItemToFocus = function (a, b) {
        a = String.fromCharCode(a).toLowerCase();
        this._keysSoFar ||
          ((this._searchIndex = b),
          (this._itemToFocus = this._focused || this._items[0]));
        this._keysSoFar += a;
        this._clearKeysSoFarAfterDelay();
        b = this._findMatchInRange(this._searchIndex + 1, this._items.length);
        b || (b = this._findMatchInRange(0, this._searchIndex));
        this._itemToFocus = b || this._itemToFocus;
        return this._itemToFocus;
      };
      e._findMatchInRange = function (a, b) {
        for (a = a; a < b; a++) {
          var c = this._items[a].getLabel();
          if (c && c.toString().toLowerCase().indexOf(this._keysSoFar) === 0)
            return this._items[a];
        }
        return null;
      };
      e._render = function () {
        var a = this;
        this._ul = c("DOM").create("ul", { className: "_54nf" });
        this._ul.setAttribute("role", "menu");
        this._items.forEach(function (b) {
          a._insertItem(b, null);
        });
        this._subscriptions.addSubscriptions(
          c("Event").listen(this._ul, "click", this._handleClick.bind(this)),
          c("Event").listen(
            this._ul,
            "mouseover",
            this._handleMouseOver.bind(this)
          ),
          c("Event").listen(
            this._ul,
            "mouseout",
            this._handleMouseOut.bind(this)
          )
        );
        var b = this._ul;
        this._config.maxheight &&
          ((this._scrollableElems = c("ScrollableArea").renderDOM()),
          c("DOM").setContent(this._scrollableElems.content, this._ul),
          (b = this._scrollableElems.root),
          c("Style").set(
            this._scrollableElems.wrap,
            "max-height",
            this._config.maxheight + "px"
          ));
        var d =
          "_54nq" +
          (this._config.className ? " " + this._config.className : "") +
          (this._theme.className ? " " + this._theme.className : "");
        this._root = c("DOM").create(
          "div",
          { className: d },
          c("DOM").create("div", { className: "_54ng" }, b)
        );
        this._config.id && this._root.setAttribute("id", this._config.id);
        this._config.testid &&
          this._root.setAttribute("data-testid", this._config.testid);
        this._config.behaviors && this.enableBehaviors(this._config.behaviors);
        this.inform("rendered", this._root);
      };
      e._needsDefaultBehavior = function (a) {
        if (a.isDefaultRequested && a.isDefaultRequested()) {
          a = d("Parent").byTag(a.getTarget(), "a");
          a = a && a.getAttribute("href");
          return a && a[0] !== "#";
        }
        return !1;
      };
      e._handleClick = function (a) {
        if (a.getTarget() === this._ul && c("UserAgent").isBrowser("IE")) {
          a.stop();
          return;
        }
        if (!this._needsDefaultBehavior(a)) {
          var b = this._getItemInstance(a.getTarget());
          if (b) return this._handleItemClick(b, a);
        }
      };
      e._handleItemClick = function (a, b) {
        this.inform("itemclick", { item: a, event: b });
        a.shouldCloseOnClick() && a.hasAction() && this.done();
        return a.handleClick(b);
      };
      e._handleMouseOver = function (a) {
        a = this._getItemInstance(a.getTarget());
        a && this._focusItem(a, !0);
      };
      e._handleMouseOut = function (a) {
        a = this._getItemInstance(a.getTarget());
        a && this._focused === a && this.blur();
      };
      e._insertItem = function (a, b, e) {
        var f = a.getRoot();
        d("CSS").addClass(f, "__MenuItem");
        d("DataStore").set(f, "MenuItem", a);
        if (b) {
          a = e ? c("DOM").insertAfter : c("DOM").insertBefore;
          a(b.getRoot(), f);
        } else c("DOM").appendContent(this._ul, f);
      };
      e._attemptFocus = function (a, b) {
        var c = this._items.length;
        if ((a < 0 || a >= c) && !this._focused) return !1;
        a = (c + (a % c)) % c;
        c = this.getItemAt(a);
        return c === this._focused || this._focusItem(c)
          ? !0
          : this._attemptFocus(a + b, b);
      };
      e._focusItem = function (a, b) {
        if (a && a.focus(b) !== !1) {
          this._focused !== a &&
            (this.blur(),
            (this._focused = a),
            this.inform("focus", { item: a, from_mouse_over: b }));
          return !0;
        }
        return !1;
      };
      e._getItemInstance = function (a) {
        a = d("Parent").byClass(a, "__MenuItem");
        return a ? d("DataStore").get(a, "MenuItem") : null;
      };
      e.destroy = function () {
        this._items.forEach(function (a) {
          var b = a.getRoot(!0);
          b && (d("DataStore").remove(b, "MenuItem"), a.destroy());
        }),
          this._subscriptions.release(),
          this.destroyBehaviors();
      };
      return b;
    })(c("PopoverMenuInterface"));
    Object.assign(a.prototype, c("BehaviorsMixin"), {
      _focused: null,
      _root: null,
    });
    g["default"] = a;
  },
  98
);
__d(
  "MenuItemInterface",
  ["emptyFunction", "react"],
  function (a, b, c, d, e, f) {
    var g;
    a = g || b("react");
    c = (function (a) {
      "use strict";
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var c = b.prototype;
      c.getRoot = function (a) {
        !this._root && !a && (this._root = this.render());
        return this._root;
      };
      return b;
    })(a.Component);
    Object.assign(c.prototype, {
      _root: null,
      render: b("emptyFunction"),
      getAccessKey: b("emptyFunction"),
      getLabel: b("emptyFunction"),
      hasAction: b("emptyFunction").thatReturnsFalse,
      focus: b("emptyFunction").thatReturnsFalse,
      blur: b("emptyFunction").thatReturnsFalse,
      onShow: b("emptyFunction").thatReturnsFalse,
      handleClick: b("emptyFunction").thatReturnsFalse,
      shouldCloseOnClick: b("emptyFunction").thatReturnsTrue,
      destroy: b("emptyFunction"),
    });
    e.exports = c;
  },
  null
);
__d(
  "MenuItemBase",
  ["cx", "DOM", "HTML", "MenuItemInterface"],
  function (a, b, c, d, e, f, g, h) {
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b) {
        var c;
        c = a.call(this) || this;
        c._ARIARole = "menuitem";
        c._data = babelHelpers["extends"]({}, b);
        return c;
      }
      var d = b.prototype;
      d.render = function () {
        var a = "_54ni";
        this._data.className && (a += " " + this._data.className);
        a = { className: a, role: "presentation", "data-testid": void 0 };
        Object.assign(a, this.__getAttributesFromData());
        delete a["data-testid"];
        return c("DOM").create("li", a, this._renderItemContent());
      };
      d._renderItemContent = function () {
        return c("HTML")(this._data.markup).getNodes();
      };
      d.__getAttributesFromData = function () {
        var a = {};
        for (var b in this._data)
          (b.indexOf("data-") === 0 || b.indexOf("aria-") === 0) &&
            (a[b] = this._data[b]);
        return a;
      };
      return b;
    })(c("MenuItemInterface"));
    g["default"] = a;
  },
  98
);
__d(
  "MenuItem",
  [
    "cx",
    "CSS",
    "DOM",
    "MenuItemBase",
    "ReactDOMComet",
    "emptyFunction",
    "joinClasses",
    "react",
    "setTimeout",
  ],
  function (a, b, c, d, e, f, g) {
    var h,
      i = h || b("react"),
      j = ["href", "rel", "ajaxify", "target", "accesskey"];
    function k(a, c) {
      var d = {};
      j.forEach(function (a) {
        c[a] && (d[a] = c[a]);
      });
      b("DOM").setAttributes(a, d);
    }
    function l(a) {
      j.forEach(function (b) {
        a.removeAttribute(b);
      });
    }
    a = (function (a) {
      "use strict";
      babelHelpers.inheritsLoose(c, a);
      function c(b) {
        b = a.call(this, b) || this;
        b._disabled = !!b._data.disabled;
        b._onclickHandler = b._data.onclick || b._data.onClick;
        return b;
      }
      var d = c.prototype;
      d.getValue = function () {
        return this._data.value;
      };
      d.getLabel = function () {
        return this._data.label;
      };
      d.getLink = function () {
        return this._data.href;
      };
      d.getAccessKey = function () {
        var a = this.getLabel();
        return a && a.charAt(0);
      };
      d.focus = function (a) {
        if (
          this.isDisabled() ||
          !this._root.offsetParent ||
          !this.hasAction() ||
          this.isHoverDisabled()
        )
          return !1;
        b("CSS").addClass(this._root, "_54ne");
        b("CSS").addClass(this._root, "selected");
        a || this._anchor.focus();
      };
      d.blur = function () {
        b("CSS").removeClass(this._root, "_54ne"),
          b("CSS").removeClass(this._root, "selected");
      };
      d.handleClick = function (a) {
        if (this.isDisabled()) return !1;
        return typeof this._onclickHandler === "function"
          ? this._onclickHandler(a)
          : !0;
      };
      d.setOnClickHandler = function (a) {
        this._onclickHandler = a;
      };
      d._renderItemContent = function () {
        var a = this;
        this._anchor = b("DOM").create(
          this._data.renderas === "label" ? "label" : "a",
          { className: "_54nc" + (this._data.icon ? " _54nu" : "") }
        );
        if (this._data.children) {
          var c = null;
          this._data.icon &&
            (c = i.cloneElement(this._data.icon, {
              className: b("joinClasses")(
                this._data.icon.props.className,
                "mrs"
              ),
            }));
          var d = i.jsx(i.Suspense, {
            fallback: null,
            children: i.jsxs("span", {
              children: [
                c,
                i.jsx("span", {
                  className: "_54nh",
                  children: this._data.children,
                }),
              ],
            }),
          });
          this._reactRoot = b("ReactDOMComet").createRoot(this._anchor);
          b("ReactDOMComet").flushSync(function () {
            a._reactRoot.render(d);
          });
          this._data.label = this._anchor.innerText || this._anchor.textContent;
        } else {
          c = b("DOM").create(
            "span",
            null,
            b("DOM").create(
              "span",
              { className: "_54nh" },
              this._data.markup || this._data.label
            )
          );
          this._data.icon && b("DOM").prependContent(c, this._data.icon);
          b("DOM").setContent(this._anchor, c);
        }
        this._data.href || (this._data.href = "#");
        this.isDisabled() || k(this._anchor, this._data);
        b("DOM").setAttributes(this._anchor, this.__getAttributesFromData());
        this._anchor.setAttribute("role", this._ARIARole);
        c = this._data.title;
        c && this._anchor.setAttribute("title", c);
        return this._anchor;
      };
      d.isDisabled = function () {
        return this._disabled;
      };
      d.isHoverDisabled = function () {
        return this._data.hoverdisabled;
      };
      d.enable = function () {
        this._root &&
          (k(this._anchor, this._data),
          b("CSS").removeClass(this._root, "_5arm")),
          (this._disabled = !1);
      };
      d.disable = function () {
        this._root && (l(this._anchor), b("CSS").addClass(this._root, "_5arm")),
          (this._disabled = !0);
      };
      d.render = function () {
        var c = a.prototype.render.call(this);
        this._disabled && b("CSS").addClass(c, "_5arm");
        return c;
      };
      d.destroy = function () {
        if (this._reactRoot != null) {
          var a = this._reactRoot;
          this._reactRoot = null;
          b("setTimeout")(function () {
            a.unmount();
          }, 0);
        }
      };
      return c;
    })(b("MenuItemBase"));
    Object.assign(a.prototype, {
      hasAction: b("emptyFunction").thatReturnsTrue,
    });
    e.exports = a;
  },
  null
);
__d(
  "MenuItemNoAction",
  ["MenuItem"],
  function (a, b, c, d, e, f, g) {
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var c = b.prototype;
      c.hasAction = function () {
        return !1;
      };
      return b;
    })(c("MenuItem"));
    g["default"] = a;
  },
  98
);
__d(
  "MenuSelectableItem",
  ["cx", "CSS", "DOM", "MenuItem"],
  function (a, b, c, d, e, f, g, h) {
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b) {
        b = a.call(this, b) || this;
        b._selected = !1;
        b._ARIARole = "menuitemcheckbox";
        b._selected = !!b._data.selected;
        return b;
      }
      var e = b.prototype;
      e.getIcon = function () {
        return this._data.icon;
      };
      e.setIcon = function (a) {
        c("DOM").replace(this._data.icon, a), (this._data.icon = a);
      };
      e.isSelected = function () {
        return this._selected;
      };
      e.select = function () {
        if (this.isDisabled()) return !1;
        d("CSS").addClass(this._root, "_54nd");
        this._anchor.setAttribute("aria-checked", "true");
        this._selected = !0;
      };
      e.deselect = function () {
        d("CSS").removeClass(this._root, "_54nd"),
          this._anchor.setAttribute("aria-checked", "false"),
          (this._selected = !1);
      };
      e.render = function () {
        var b = a.prototype.render.call(this);
        this._data.selected &&
          (d("CSS").addClass(b, "_54nd"),
          this._anchor.setAttribute("aria-checked", "true"));
        return b;
      };
      return b;
    })(c("MenuItem"));
    g["default"] = a;
  },
  98
);
__d(
  "MenuTheme",
  ["cx"],
  function (a, b, c, d, e, f, g, h) {
    a = "_569t";
    g.className = a;
  },
  98
);
__d(
  "SelectableMenuUtils",
  [],
  function (a, b, c, d, e, f) {
    a = {
      doesItemSupportSelect: function (a) {
        return g(a);
      },
      isSelected: function (a) {
        return g(a) && a.isSelected();
      },
    };
    function g(a) {
      return a.select && a.deselect && a.isSelected;
    }
    e.exports = a;
  },
  null
);
__d(
  "SelectableMenu",
  ["Menu", "SelectableMenuUtils", "createArrayFromMixed"],
  function (a, b, c, d, e, f) {
    a = (function (a) {
      "use strict";
      babelHelpers.inheritsLoose(c, a);
      function c() {
        return a.apply(this, arguments) || this;
      }
      var d = c.prototype;
      d.focusAnItem = function () {
        for (var c = 0; c < this._items.length; c++)
          if (
            b("SelectableMenuUtils").isSelected(this._items[c]) &&
            this._focusItem(this._items[c]) !== !1
          )
            return !0;
        return a.prototype.focusAnItem.call(this);
      };
      d.setValue = function (a) {
        this._root || this._render();
        var c = b("createArrayFromMixed")(a);
        this._items.forEach(function (a) {
          b("SelectableMenuUtils").doesItemSupportSelect(a) &&
            (c.includes(a.getValue())
              ? a.select()
              : b("SelectableMenuUtils").isSelected(a) && a.deselect());
        });
        this.inform("change", this.getSelection());
      };
      d._handleItemClick = function (c, d) {
        if (!b("SelectableMenuUtils").doesItemSupportSelect(c))
          return a.prototype._handleItemClick.call(this, c, d);
        var e = this.inform("itemclick", { item: c, event: d });
        if (e) return;
        if (this._config.multiple) {
          e = b("SelectableMenuUtils").isSelected(c)
            ? c.deselect()
            : c.select();
          e !== !1 && this.inform("change", this.getSelection());
          this._config.closeOnSelectWithMultiple && this.done();
        } else
          b("SelectableMenuUtils").isSelected(c) ||
            (c.select() !== !1 &&
              (this._items.forEach(function (a) {
                b("SelectableMenuUtils").isSelected(a) &&
                  a !== c &&
                  a.deselect();
              }),
              this.inform("change", this.getSelection()))),
            this.done();
        return c.handleClick(d);
      };
      d.getSelection = function () {
        var a = [];
        this._items.forEach(function (c) {
          b("SelectableMenuUtils").isSelected(c) &&
            a.push({ label: c.getLabel(), value: c.getValue(), item: c });
        });
        this._config.multiple || (a = a[0]);
        return a;
      };
      return c;
    })(b("Menu"));
    e.exports = a;
  },
  null
);
__d(
  "ReactMenu",
  [
    "cx",
    "Menu",
    "MenuItem",
    "MenuItemNoAction",
    "MenuSelectableItem",
    "MenuTheme",
    "SelectableMenu",
    "joinClasses",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    var i = d("react");
    function j(a) {
      var b = [];
      i.Children.forEach(a, function (a) {
        a && b.push(a);
      });
      return b;
    }
    function a(a) {
      a != null && ((a.isReactLegacyFactory = {}), (a.type = a));
    }
    b = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c) {
        c = babelHelpers["extends"](
          {
            theme: d("MenuTheme"),
            maxheight: b ? b.maxheight : null,
            className: b ? b.className : null,
            testid: b ? b["data-testid"] : null,
          },
          c
        );
        return a.call(this, j(b.children), c) || this;
      }
      return b;
    })(c("Menu"));
    a(b);
    e = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, e) {
        e = babelHelpers["extends"](
          {
            className: c("joinClasses")("_57di", b ? b.className : null),
            theme: d("MenuTheme"),
            multiple: b && b.multiple,
            closeOnSelectWithMultiple: b && b.closeOnSelectWithMultiple,
            maxheight: b ? b.maxheight : null,
            testid: b ? b["data-testid"] : null,
          },
          e
        );
        return a.call(this, j(b.children), e) || this;
      }
      return b;
    })(c("SelectableMenu"));
    a(e);
    b.SelectableMenu = e;
    a(c("MenuItem"));
    b.Item = c("MenuItem");
    b.ItemNoAction = c("MenuItemNoAction");
    a(c("MenuSelectableItem"));
    b.SelectableItem = c("MenuSelectableItem");
    g["default"] = b;
  },
  98
);
__d(
  "ContextualLayerAutoFlip",
  [
    "ContextualLayerAlignmentEnum",
    "ContextualLayerDimensions",
    "DOMDimensions",
    "Rect",
    "Vector",
    "getDocumentScrollElement",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a, b) {
      b = new (c("Rect"))(b).convertTo(a.domain);
      var d = Math.max(a.l, b.l);
      a = Math.min(a.r, b.r);
      return Math.max(a - d, 0);
    }
    a = (function () {
      function a(a) {
        this._layer = a;
      }
      var b = a.prototype;
      b.enable = function () {
        (this._subscription = this._layer.subscribe(
          "adjust",
          this._adjustOrientation.bind(this)
        )),
          this._layer.isShown() && this._layer.updatePosition();
      };
      b.disable = function () {
        this._subscription &&
          (this._subscription.unsubscribe(), (this._subscription = null)),
          this._layer.isShown() && this._layer.updatePosition();
      };
      b._adjustOrientation = function (a, b) {
        a = this.getValidPositions(b);
        if (!a.length) {
          b.invalidate();
          return;
        }
        var e = d("ContextualLayerDimensions").getViewportRect(this._layer),
          f = this._getValidAlignments(b),
          g,
          i,
          j;
        for (g = 0; g < f.length; g++) {
          b.setAlignment(f[g]);
          for (i = 0; i < a.length; i++) {
            b.setPosition(a[i]);
            j = d("ContextualLayerDimensions").getLayerRect(this._layer, b);
            if (e.contains(j)) return;
          }
        }
        var k = -1;
        if (b.getPreferMoreContentShownRect()) {
          var l = d("DOMDimensions").getDocumentDimensions(),
            m = new (c("Rect"))(e).convertTo("document"),
            n = 99999;
          for (i = 0; i < a.length; i++) {
            b.setPosition(a[i]);
            j = d("ContextualLayerDimensions").getLayerRect(this._layer, b);
            var o = new (c("Rect"))(j).convertTo("document");
            if (o.l >= 0 && o.r <= l.width && o.t >= 43 && o.b <= l.height) {
              var p = m.l - o.l,
                q = o.r - m.r,
                r = m.t - o.t;
              o = o.b - m.b;
              p =
                (p > 0 ? p : 0) +
                (q > 0 ? q : 0) +
                (r > 0 ? r : 0) +
                (o > 0 ? o : 0);
              p < n && ((k = i), (n = p));
            }
          }
        }
        this.__setBestPosition(k, b, a);
        q = 0;
        r = 0;
        for (g = 0; g < f.length; g++)
          b.setAlignment(f[g]),
            (j = d("ContextualLayerDimensions").getLayerRect(this._layer, b)),
            (o = h(e, j)),
            o > r && ((r = o), (q = g));
        b.setAlignment(f[q]);
      };
      b.__setBestPosition = function (a, b, c) {
        a >= 0
          ? b.setPosition(c[a])
          : b.setPosition(c.includes("below") ? "below" : c[0]);
      };
      b.getValidPositions = function (a) {
        var b = [a.getPosition(), a.getOppositePosition()],
          d = this._layer.getContextScrollParent();
        if (d === window || d === c("getDocumentScrollElement")()) return b;
        var e = this._layer.getContext(),
          f = c("Vector").getElementPosition(d, "viewport").y,
          g = c("Vector").getElementPosition(e, "viewport").y;
        if (a.isVertical())
          return b.filter(function (a) {
            if (a === "above") return g >= f;
            else {
              a = f + d.offsetHeight;
              var b = g + e.offsetHeight;
              return b <= a;
            }
          });
        else {
          a = f + d.offsetHeight;
          if (g >= f && g + e.offsetHeight <= a) return b;
          else return [];
        }
      };
      b._getValidAlignments = function (a) {
        var b = Array.from(c("ContextualLayerAlignmentEnum").values);
        a = a.getAlignment();
        var d = b.indexOf(a);
        d > 0 && (b.splice(d, 1), b.unshift(a));
        return b;
      };
      return a;
    })();
    Object.assign(a.prototype, { _subscription: null });
    g["default"] = a;
  },
  98
);
__d(
  "PopoverMenuContextMinWidth",
  ["cx", "CSS", "Style", "shield"],
  function (a, b, c, d, e, f, g, h) {
    a = (function () {
      function a(a) {
        var b = this;
        this._onSetMenu = function () {
          b._menu = b._popoverMenu.getMenu();
          b._showSubscription = b._popover.subscribe(
            "show",
            c("shield")(b._updateWidth, b)
          );
          var a = b._updateWidth.bind(b);
          b._menuSubscription = b._menu.subscribe(
            ["change", "resize"],
            function () {
              window.setTimeout(a, 0);
            }
          );
          b._updateWidth();
        };
        this._popoverMenu = a;
        this._popover = a.getPopover();
      }
      var b = a.prototype;
      b.enable = function () {
        this._setMenuSubscription = this._popoverMenu.subscribe(
          "setMenu",
          c("shield")(this._onSetMenu, this)
        );
      };
      b.disable = function () {
        this._setMenuSubscription.unsubscribe(),
          (this._setMenuSubscription = null),
          this._showSubscription &&
            (this._showSubscription.unsubscribe(),
            (this._showSubscription = null)),
          this._menuSubscription &&
            (this._menuSubscription.unsubscribe(),
            (this._menuSubscription = null));
      };
      b._updateWidth = function () {
        var a = this._menu.getRoot(),
          b = this._popoverMenu.getTriggerElem();
        b = b.offsetWidth;
        c("Style").set(a, "min-width", b + "px");
        d("CSS").conditionClass(a, "_575s", b >= a.offsetWidth);
      };
      return a;
    })();
    Object.assign(a.prototype, {
      _setMenuSubscription: null,
      _showSubscription: null,
      _menuSubscription: null,
    });
    g["default"] = a;
  },
  98
);
__d(
  "PopoverMenuOverlappingBorder",
  ["cx", "CSS", "DOM", "Style", "shield"],
  function (a, b, c, d, e, f, g) {
    a = (function () {
      "use strict";
      function a(a) {
        (this._popoverMenu = a),
          (this._popover = a.getPopover()),
          (this._triggerElem = a.getTriggerElem());
      }
      var c = a.prototype;
      c.enable = function () {
        this._setMenuSubscription = this._popoverMenu.subscribe(
          "setMenu",
          b("shield")(this._onSetMenu, this)
        );
      };
      c.disable = function () {
        this._popoverMenu.unsubscribe(this._setMenuSubscription),
          (this._setMenuSubscription = null),
          this._removeBorderSubscriptions(),
          this._removeShortBorder();
      };
      c._onSetMenu = function () {
        this._removeBorderSubscriptions();
        this._menu = this._popoverMenu.getMenu();
        this._renderShortBorder(this._menu.getRoot());
        this._showSubscription = this._popover.subscribe(
          "show",
          b("shield")(this._updateBorder, this)
        );
        var a = this._updateBorder.bind(this);
        this._menuSubscription = this._menu.subscribe(
          ["change", "resize"],
          function () {
            setTimeout(a, 0);
          }
        );
        this._updateBorder();
      };
      c._updateBorder = function () {
        var a = this._menu.getRoot(),
          c = this._triggerElem.offsetWidth;
        a = Math.max(a.offsetWidth - c, 0);
        b("Style").set(this._shortBorder, "width", a + "px");
      };
      c._renderShortBorder = function (a) {
        (this._shortBorder = b("DOM").create("div", { className: "_54hx" })),
          b("DOM").appendContent(a, this._shortBorder),
          b("CSS").addClass(a, "_54hy");
      };
      c._removeShortBorder = function () {
        this._shortBorder &&
          (b("DOM").remove(this._shortBorder),
          (this._shortBorder = null),
          b("CSS").removeClass(this._popoverMenu.getMenu().getRoot(), "_54hy"));
      };
      c._removeBorderSubscriptions = function () {
        this._showSubscription &&
          (this._popover.unsubscribe(this._showSubscription),
          (this._showSubscription = null)),
          this._menuSubscription &&
            (this._menu.unsubscribe(this._menuSubscription),
            (this._menuSubscription = null));
      };
      return a;
    })();
    Object.assign(a.prototype, {
      _shortBorder: null,
      _setMenuSubscription: null,
      _showSubscription: null,
      _menuSubscription: null,
    });
    e.exports = a;
  },
  null
);
__d(
  "ReactSelectorUtils",
  ["deepCompare", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a, b, d) {
      d === void 0 && (d = !1);
      var e;
      d = h.Children.map(a, function (a) {
        if (a) {
          var d = c("deepCompare")(a.props.value, b);
          a = h.cloneElement(a, { selected: d });
          d && (e = a);
          return a;
        }
      });
      return { items: d, selectedItem: e };
    }
    function b(a, b, c) {
      c === void 0 && (c = !1);
      var d = [];
      c = a;
      b &&
        (c = h.Children.map(a, function (a) {
          if (a) {
            var c = b.some(function (b) {
              return b === a.props.value;
            });
            a = h.cloneElement(a, { selected: c });
            c && d.push(a);
            return a;
          }
        }));
      return { items: c, selectedItems: d };
    }
    g.processMenuItems = a;
    g.processMultiMenuItems = b;
  },
  98
);
__d(
  "intlList",
  ["fbt", "invariant", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i;
    a = i || b("react");
    var j = { AND: "AND", NONE: "NONE", OR: "OR" },
      k = { BULLET: "BULLET", COMMA: "COMMA", SEMICOLON: "SEMICOLON" };
    c = function (a, b, c) {
      var d = a.length;
      if (d === 0) return "";
      else if (d === 1) return a[0];
      var e = a[d - 1],
        f = a[0];
      for (var h = 1; h < d - 1; ++h)
        switch (c) {
          case k.SEMICOLON:
            f = g._("{previous items}\u00a0; {following items}", [
              g._param("previous items", f),
              g._param("following items", a[h]),
            ]);
            break;
          case k.BULLET:
            f = g._("{previous items} \u2022 {following items}", [
              g._param("previous items", f),
              g._param("following items", a[h]),
            ]);
            break;
          default:
            f = g._("{previous items}, {following items}", [
              g._param("previous items", f),
              g._param("following items", a[h]),
            ]);
        }
      return l(f, e, b || j.AND, c || k.COMMA);
    };
    function l(a, b, c, d) {
      switch (c) {
        case j.AND:
          return g._("{list of items} et {last item}", [
            g._param("list of items", a),
            g._param("last item", b),
          ]);
        case j.OR:
          return g._("{list of items} ou {last item}", [
            g._param("list of items", a),
            g._param("last item", b),
          ]);
        case j.NONE:
          switch (d) {
            case k.SEMICOLON:
              return g._("{previous items}\u00a0; {last item}", [
                g._param("previous items", a),
                g._param("last item", b),
              ]);
            case k.BULLET:
              return g._("{list of items} \u2022 {last item}", [
                g._param("list of items", a),
                g._param("last item", b),
              ]);
            default:
              return g._("{list of items}, {last item}", [
                g._param("list of items", a),
                g._param("last item", b),
              ]);
          }
        default:
          h(0, 568, c);
      }
    }
    c.DELIMITERS = k;
    c.CONJUNCTIONS = j;
    e.exports = c;
  },
  null
);
__d(
  "AbstractSelector.react",
  [
    "cx",
    "invariant",
    "ContextualLayerAutoFlip",
    "InlineBlock.react",
    "PopoverMenu.react",
    "PopoverMenuContextMinWidth",
    "PopoverMenuOverlappingBorder",
    "ReactSelectorUtils",
    "intlList",
    "joinClasses",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    var i,
      j = i || b("react");
    a = (function (a) {
      "use strict";
      babelHelpers.inheritsLoose(c, a);
      function c() {
        var b, c;
        for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
          e[f] = arguments[f];
        return (
          ((b = c = a.call.apply(a, [this].concat(e)) || this),
          (c.$1 = !1),
          (c.$2 = j.createRef()),
          (c.state = {
            value:
              c.props.value != null
                ? c.props.value
                : c.props.defaultValue != null
                ? c.props.defaultValue
                : c.props.initialValue,
            multiple: c.props.multiple,
          }),
          (c.onChange = function (a, b) {
            if (c.$3) return;
            if (c.props.value == null) {
              c.props.multiple
                ? (a = b.map(function (a) {
                    return a.value;
                  }))
                : (a = b.value);
              c.setState({ value: a });
            } else c.setMenuValue(c.props.value);
            c.props.onChange && c.props.onChange(b);
          }),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      var d = c.prototype;
      d.setMenuValue = function (a) {
        this.$2.current || h(0, 1741),
          (this.$3 = !0),
          this.$2.current.getMenu().setValue(a),
          (this.$3 = !1);
      };
      c.getDerivedStateFromProps = function (a, b) {
        if (a.value != null) return { value: a.value };
        else if (a.multiple !== b.multiple)
          return {
            value: a.multiple ? [b.value] : b.value[0],
            multiple: a.multiple,
          };
        return null;
      };
      d.render = function () {
        var a = this.props.config,
          c = this.props.multiple
            ? b("ReactSelectorUtils").processMultiMenuItems(
                this.props.children,
                this.state.value
              )
            : b("ReactSelectorUtils").processMenuItems(
                this.props.children,
                this.state.value
              ),
          d = j.cloneElement(a.menu, {
            children: c.items,
            className: b("joinClasses")("_575t", a.menu.props.className),
            maxheight: this.props.maxheight,
            onChange: this.onChange,
          }),
          e = "",
          f = null;
        if (!this.props.multiple) {
          var g = c.selectedItem;
          g
            ? ((e = g.props.label || g.props.children),
              g.props.icon && (f = j.cloneElement(g.props.icon, {})))
            : (e =
                this.props.defaultLabel !== void 0
                  ? this.props.defaultLabel
                  : "Select an option");
        } else {
          g = c.selectedItems;
          !g || !g.length
            ? (e =
                this.props.defaultLabel !== void 0
                  ? this.props.defaultLabel
                  : "Select options")
            : (e = b("intlList")(
                g.map(function (a) {
                  return a.props.children;
                }),
                b("intlList").CONJUNCTIONS.NONE
              ));
        }
        c = { label: e, disabled: this.props.disabled };
        f && (c.image = f);
        g = j.cloneElement(a.button, c);
        e = [b("ContextualLayerAutoFlip")];
        a.layerBehaviors && (e = e.concat(a.layerBehaviors));
        f = [b("PopoverMenuContextMinWidth")];
        this.props.overlappingborder &&
          f.push(b("PopoverMenuOverlappingBorder"));
        c = null;
        if (this.props.multiple) {
          var h = this.props.name + "[]",
            i;
          this.state.value &&
            (i = this.state.value.map(function (a) {
              return j.jsx("input", { type: "hidden", name: h, value: a }, a);
            }));
          c = j.jsx("div", { children: i });
        } else
          c = j.jsx("input", {
            type: "hidden",
            name: this.props.name,
            value: this.state.value,
          });
        return j.jsxs(
          b("InlineBlock.react"),
          babelHelpers["extends"]({}, this.props, {
            alignv: "middle",
            name: null,
            children: [
              j.jsx(b("PopoverMenu.react"), {
                alignh: this.props.alignh,
                behaviors: f,
                disabled: this.props.disabled,
                layerBehaviors: e,
                menu: d,
                position: this.props.position,
                onReturnWithoutFocusedItem:
                  this.props.onReturnWithoutFocusedItem,
                onHide: this.props.onHide,
                onShow: this.props.onShow,
                ref: this.$2,
                children: g,
              }),
              c,
            ],
          })
        );
      };
      d.componentDidMount = function () {
        this.$1 = !0;
      };
      d.componentWillUnmount = function () {
        this.$1 = !1;
      };
      d.showMenu = function () {
        this.$1 || h(0, 1742),
          this.$2.current != null && this.$2.current.showPopover();
      };
      d.showAndFocusMenu = function () {
        this.$1 || h(0, 1743),
          this.$2.current != null && this.$2.current.showPopover(!0);
      };
      d.hideMenu = function () {
        this.$1 || h(0, 1744),
          this.$2.current != null && this.$2.current.hidePopover();
      };
      return c;
    })(j.Component);
    a.propTypes = {};
    e.exports = a;
  },
  null
);
__d(
  "XUIButton.react",
  ["cx", "AbstractButton.react", "XUISpinner.react", "joinClasses", "react"],
  function (a, b, c, d, e, f, g, h) {
    var i = d("react");
    a = "medium";
    b = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
          e[f] = arguments[f];
        return (
          ((b = c = a.call.apply(a, [this].concat(e)) || this),
          (c.$1 = i.createRef()),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      var d = b.prototype;
      d.focus = function () {
        this.$1.current != null && this.$1.current.focus();
      };
      d.render = function () {
        var a = this.props,
          b = a.borderShade,
          d = a.loading,
          e = a.size,
          f = a.suppressed,
          g = a.use,
          h = a.buttonRef;
        a = babelHelpers.objectWithoutPropertiesLoose(a, [
          "borderShade",
          "loading",
          "size",
          "suppressed",
          "use",
          "buttonRef",
        ]);
        e =
          "_4jy0" +
          (e === "small" ? " _517i" : "") +
          (e === "medium" ? " _4jy3" : "") +
          (e === "large" ? " _4jy4" : "") +
          (e === "xlarge" ? " _4jy5" : "") +
          (e === "xxlarge" ? " _4jy6" : "") +
          (g === "default" ? " _517h" : "") +
          (g === "confirm" ? " _4jy1" : "") +
          (g === "special" ? " _4jy2" : "") +
          (g === "caution" ? " _9w8q" : "") +
          (b === "light" ? " _51sy" : "") +
          (b === "dark" ? " _9c6" : "") +
          (f ? " _59pe" : "") +
          (g === "confirm" || g === "special" || g === "caution"
            ? " selected"
            : "");
        return i.jsx(
          c("AbstractButton.react"),
          babelHelpers["extends"]({}, a, {
            label: d ? i.jsx(c("XUISpinner.react"), {}) : this.props.label,
            className: c("joinClasses")(this.props.className, e),
            ref: this.$1,
            buttonRef: h,
            disabled: !!this.props.disabled,
          })
        );
      };
      return b;
    })(i.Component);
    b.defaultProps = {
      use: "default",
      size: a,
      borderShade: "light",
      suppressed: !1,
    };
    g["default"] = b;
  },
  98
);
__d(
  "List.react",
  ["cx", "joinClasses", "react"],
  function (a, b, c, d, e, f, g) {
    var h,
      i = h || b("react");
    a = (function (a) {
      "use strict";
      babelHelpers.inheritsLoose(c, a);
      function c() {
        return a.apply(this, arguments) || this;
      }
      var d = c.prototype;
      d.render = function () {
        var a = this.props,
          c = a.className,
          d = a.border,
          e = a.direction,
          f = a.spacing,
          g = a.valign,
          h = a.edgepadding;
        a = babelHelpers.objectWithoutPropertiesLoose(a, [
          "className",
          "border",
          "direction",
          "spacing",
          "valign",
          "edgepadding",
        ]);
        e === "vertical" && (g = null);
        e =
          (e === "vertical" ? "_4kg" : "") +
          (e === "horizontal" ? " _4ki" : "") +
          (g === "top" ? " _509-" : "") +
          (g === "middle" ? " _509_" : "") +
          (g === "bottom" ? " _50a0" : "");
        var j;
        (f !== "none" || d !== "none") &&
          (j =
            (d === "none" ? "_6-i" : "") +
            (d === "light" ? " _4ks" : "") +
            (d === "medium" ? " _4kt" : "") +
            (d === "dark" ? " _4ku" : ""));
        var k;
        f !== "none" &&
          (k =
            (h ? "" : "_6-h") +
            (f === "small" ? " _704" : "") +
            (f === "medium" ? " _6-j" : "") +
            (f === "large" ? " _703" : ""));
        c = b("joinClasses")(c, "uiList", e, j, k);
        return i.jsx("ul", babelHelpers["extends"]({ className: c }, a));
      };
      return c;
    })(i.Component);
    a.defaultProps = {
      border: "medium",
      spacing: "medium",
      direction: "vertical",
      valign: "top",
      edgepadding: !1,
    };
    e.exports = a;
  },
  null
);
__d(
  "AbstractCalendar_DEPRECATED.react",
  [
    "DateConsts",
    "DateFormatConfig",
    "List.react",
    "emptyFunction",
    "joinClasses",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    var h = d("react"),
      i = 7,
      j = 6,
      k = "start",
      l = "mid",
      m = "end",
      n = "only";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
          e[f] = arguments[f];
        return (
          ((b = c = a.call.apply(a, [this].concat(e)) || this),
          (c.selectDate = function (a) {
            var b = !c.isDateSelected(a) || c.props.allowDuplicateSelection;
            c.isDateValid(a) && b && c.props.onSelectDateChange(a);
          }),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      b.normalizeDate = function (a) {
        return new Date(
          Date.UTC(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate())
        );
      };
      b.normalizeTime = function (a) {
        return b.normalizeDate(new Date(a)).getTime();
      };
      var d = b.prototype;
      d.$1 = function (a, c) {
        return (
          a &&
          c &&
          a instanceof Date &&
          c instanceof Date &&
          b.normalizeDate(a).getTime() === b.normalizeDate(c).getTime()
        );
      };
      d.isDateSelected = function (a) {
        return this.$1(
          a,
          this.props.selectTime ? new Date(this.props.selectTime) : null
        );
      };
      d.isDateHighlighted = function (a) {
        var b = this;
        return (
          this.props.highlightedTimes &&
          this.props.highlightedTimes.some(function (c) {
            return b.$1(a, new Date(c));
          })
        );
      };
      d.isDateValid = function (a) {
        return this.props.dateRestraints
          ? this.props.dateRestraints.every(function (b) {
              return b(a);
            })
          : !0;
      };
      d.render = function () {
        var a = this,
          d = new Date(this.props.focusTime),
          e = b.normalizeDate(d);
        e.setUTCDate(1);
        var f = c("DateFormatConfig").weekStart,
          g =
            this.props.selectTime !== null &&
            b.normalizeTime(this.props.selectTime),
          p = null,
          q = null;
        this.props.rangeSelectTime !== null &&
          (p = b.normalizeTime(this.props.rangeSelectTime));
        if (g && p) {
          var r = Math.min(g, p);
          g = Math.max(g, p);
          q = { minTime: r, maxTime: g, hasDuration: r < g };
        }
        p = [];
        r = [];
        g = (e.getUTCDay() + 6 - f) % 7;
        for (var s = 0; s < g; ++s)
          r.push(h.jsx("span", { className: this.props.classNames.spacer }, s));
        g = this.props.interactive ? this.selectDate : c("emptyFunction");
        while (e.getUTCMonth() == d.getUTCMonth()) {
          s = e.getTime();
          var t = new Date(s);
          e.setUTCDate(e.getUTCDate() + 1);
          var u = e.getUTCMonth() > t.getUTCMonth(),
            v = (r.length + 1) % 7,
            w = v == 1 || t.getUTCDate() == 1;
          v = v === 0 || u;
          u = null;
          var x = null;
          q &&
            (s > q.minTime && s < q.maxTime
              ? (u = l)
              : s == q.minTime
              ? (u = k)
              : s == q.maxTime && (u = m),
            !q.hasDuration
              ? (x = n)
              : v
              ? (x = w || u == k ? n : m)
              : w
              ? (x = u == m ? n : k)
              : (x = l));
          r.push(
            h.jsx(
              o,
              {
                date: t,
                onSelect: g,
                valid: this.isDateValid(t),
                selected: this.isDateSelected(t),
                highlighted: this.isDateHighlighted(t),
                rangePosition: u,
                rowPosition: x,
                dayInnerFormatter: this.props.dayInnerFormatter,
                dayClassNames: this.props.dayClassNames,
                dayInnerClassNames: this.props.dayInnerClassNames,
              },
              t
            )
          );
          v && (p.push(r), (r = []));
        }
        r.length && p.push(r);
        if (!this.props.allowVariableRowCount)
          for (s = p.length; s < j; ++s)
            p.push(
              h.jsx("span", { className: this.props.classNames.spacer }, s)
            );
        p = p.map(function (b, c) {
          return h.jsx(
            "div",
            { className: a.props.classNames.row, children: b },
            c
          );
        });
        w = [];
        for (u = 0; u < i; ++u)
          w.push(
            h.jsx(
              "li",
              {
                className: this.props.classNames.dayName,
                style: this.props.dayNameStyle,
                children: c("DateFormatConfig").shortDayNames[(f + u) % 7],
              },
              u
            )
          );
        return h.jsxs(
          "div",
          babelHelpers["extends"]({}, this.props, {
            className: c("joinClasses")(
              this.props.classNames.root,
              this.props.interactive ? this.props.classNames.interactive : null
            ),
            children: [
              h.jsx(c("List.react"), {
                className: this.props.classNames.dayNames,
                border: "none",
                direction: "horizontal",
                spacing: "none",
                children: w,
              }),
              h.jsx("div", {
                className: this.props.classNames.monthViewDayGrid,
                children: p,
              }),
            ],
          })
        );
      };
      return b;
    })(h.Component);
    a.defaultProps = {
      allowDuplicateSelection: !1,
      allowVariableRowCount: !0,
      classNames: {},
      dayClassNames: {},
      dayInnerClassNames: {},
      interactive: !0,
      rangeSelectTime: null,
    };
    var o = (function (b) {
      babelHelpers.inheritsLoose(a, b);
      function a() {
        var a, c;
        for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
          e[f] = arguments[f];
        return (
          ((a = c = b.call.apply(b, [this].concat(e)) || this),
          (c.$2 = function () {
            if (!c.props.valid) return;
            c.props.onSelect(c.props.date);
          }),
          a) || babelHelpers.assertThisInitialized(c)
        );
      }
      var e = a.prototype;
      e.$1 = function (a) {
        return c("joinClasses").apply(
          this,
          Object.keys(a).filter(function (b) {
            return a[b];
          })
        );
      };
      e.render = function () {
        var a,
          b = this.props,
          c = b.rowPosition,
          e = b.rangePosition,
          f = b.dayClassNames,
          g = b.dayInnerClassNames,
          i = e == k || (e == l && c == k),
          j = e == m || (e == l && c == m);
        c = c == n;
        var o = e == k || e == m;
        e =
          ((a = {}),
          (a[f.day] = !0),
          (a[f.dayInRange] = e),
          (a[f.dayRangeEndpoint] = o),
          (a[f.dayRangeLeft] = i),
          (a[f.dayRangeOnly] = c),
          (a[f.dayRangeRight] = j),
          (a[f.dayValid] = b.valid),
          a);
        if (f.dayWeekend) {
          o = b.date.getUTCDay();
          i =
            o === d("DateConsts").DAYS.SATURDAY ||
            o === d("DateConsts").DAYS.SUNDAY;
          e[f.dayWeekend] = i;
        }
        j =
          ((c = {}),
          (c[g.dayInner] = !0),
          (c[g.dayInnerSelected] = b.selected),
          (c[g.dayInnerHighlighted] = b.highlighted),
          c);
        a = {};
        b.dayInnerFormatter &&
          (a = b.dayInnerFormatter(b.date, {
            highlighted: b.highlighted,
            rangePosition: b.rangePosition !== null,
            selected: b.selected,
            valid: b.valid,
          }));
        return h.jsx(
          "a",
          babelHelpers["extends"]({}, this.props, {
            className: this.$1(e),
            href: "#",
            onClick: this.$2,
            style: a,
            children: h.jsx("span", {
              className: this.$1(j),
              "data-testid": void 0,
              children: this.props.date.getUTCDate(),
            }),
          })
        );
      };
      return a;
    })(h.Component);
    g["default"] = a;
  },
  98
);
__d(
  "XUICalendar.react",
  ["cx", "AbstractCalendar_DEPRECATED.react", "react"],
  function (a, b, c, d, e, f, g, h) {
    var i = d("react");
    function a(a) {
      this.defaultProps = {
        interactive: !0,
        rangeSelectTime: null,
        allowVariableRowCount: !0,
        allowDuplicateSelection: !1,
      };
      a = babelHelpers["extends"]({}, this.defaultProps, a);
      var b = {
        classNames: {
          dayName: "_5c69",
          dayNames: "_5c6g _50f8",
          interactive: "_5hpw",
          monthViewDayGrid: "_5c6h clearfix",
          root: "_5c6a",
          row: "_5hpv clearfix",
          spacer: "_5c68",
        },
        dayClassNames: {
          day: "_5c66",
          dayInRange: "_5hpy",
          dayRangeEndpoint: "_2od-",
          dayRangeLeft: "_5hpz",
          dayRangeOnly: "_5hp_",
          dayRangeRight: "_5hp-",
          dayValid: "_5hpx",
        },
        dayInnerClassNames: {
          dayInner: "_5hq1",
          dayInnerHighlighted: "_5xur",
          dayInnerSelected: "_5hq2",
        },
      };
      return i.jsx(
        c("AbstractCalendar_DEPRECATED.react"),
        babelHelpers["extends"]({}, a, b)
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    a.normalizeDate = c("AbstractCalendar_DEPRECATED.react").normalizeDate;
    g["default"] = a;
  },
  98
);
__d(
  "AbstractCalendarPager_DEPRECATED.react",
  ["fbt", "DatePickerRestraints", "formatDate", "react", "uniqueID"],
  function (a, b, c, d, e, f, g, h) {
    var i = d("react");
    a = d("react").Component;
    b = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, d;
        for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
          f[g] = arguments[g];
        return (
          ((b = d = a.call.apply(a, [this].concat(f)) || this),
          (d.onPagerPrev = function () {
            d.pageByMonthDelta(-1);
          }),
          (d.onPagerNext = function () {
            d.pageByMonthDelta(1);
          }),
          (d.$3 = function (a) {
            var b = new Date(a.focusTime);
            return i.jsx(
              "h2",
              {
                className: d.props.classNames.monthHeader,
                id: a.headerId,
                children: h._("{month} {year}", [
                  h._param(
                    "month",
                    i.jsx("span", {
                      className: d.props.classNames.month,
                      children: c("formatDate")(b, "F", {
                        skipPatternLocalization: !0,
                        utc: !0,
                      }),
                    })
                  ),
                  h._param(
                    "year",
                    i.jsx("span", {
                      className: d.props.classNames.year,
                      children: b.getUTCFullYear(),
                    })
                  ),
                ]),
              },
              a.key
            );
          }),
          (d.$6 = function (a) {
            var b = d.props;
            return i.cloneElement(b.calendar, {
              "aria-labelledby": a.headerId,
              allowDuplicateSelection: b.allowDuplicateSelection,
              allowVariableRowCount: b.allowVariableRowCount,
              dateRestraints: b.dateRestraints,
              dayInnerFormatter: b.dayInnerFormatter,
              focusTime: a.focusTime,
              highlightedTimes: b.highlightedTimes,
              key: a.key,
              onFocusDateChange: b.onFocusDateChange,
              onSelectDateChange: b.onSelectDateChange,
              rangeSelectTime: b.rangeSelectTime,
              selectTime: b.selectTime,
            });
          }),
          b) || babelHelpers.assertThisInitialized(d)
        );
      }
      var e = b.prototype;
      e.pageByMonthDelta = function (a) {
        var b = new Date(this.props.focusTime);
        b.setUTCDate(1);
        b.setUTCMonth(b.getUTCMonth() + a);
        this.props.onFocusDateChange(b);
      };
      e.canPageByMonthDelta = function (a) {
        if (!this.props.limitPagerToRestraints) return !0;
        var b = new Date(this.props.focusTime),
          c = b.getUTCMonth();
        b.setUTCDate(1);
        b.setUTCMonth(c + a);
        return this.$1(b);
      };
      e.$1 = function (a) {
        var b = a.getUTCMonth();
        a = new Date(a);
        while (a.getUTCMonth() === b) {
          if (this.$2(a)) return !0;
          a.setUTCDate(a.getUTCDate() + 1);
        }
        return !1;
      };
      e.$2 = function (a) {
        return d("DatePickerRestraints").isValidDate(
          a,
          this.props.dateRestraints
        );
      };
      e.canPagePrev = function () {
        return this.canPageByMonthDelta(-1);
      };
      e.canPageNext = function () {
        return this.canPageByMonthDelta(1);
      };
      e.$4 = function () {
        return i.cloneElement(this.props.leftButton, {
          disabled: !this.canPagePrev(),
          onClick: this.onPagerPrev,
          title: h._("Mois pr\u00e9c\u00e9dent"),
        });
      };
      e.$5 = function () {
        return i.cloneElement(this.props.rightButton, {
          disabled: !this.canPageNext(),
          onClick: this.onPagerNext,
          title: h._("Mois suivant"),
        });
      };
      e.$7 = function () {
        var a = [];
        for (var b = 0; b < this.props.count; b++) {
          var d = this.$8(b);
          a.push({ focusTime: d, headerId: c("uniqueID")(), key: String(d) });
        }
        return a;
      };
      e.$8 = function (a) {
        var b = new Date(this.props.focusTime);
        b.setUTCDate(1);
        b.setUTCMonth(b.getUTCMonth() + a);
        return b.getTime();
      };
      e.render = function () {
        var a = this.$7();
        return i.jsxs(
          "div",
          babelHelpers["extends"]({}, this.props, {
            "data-count": this.props.count,
            children: [
              i.jsxs("div", {
                className: this.props.classNames.header,
                children: [a.map(this.$3, this), this.$4(), this.$5()],
              }),
              i.jsx("div", {
                className: this.props.classNames.main,
                children: a.map(this.$6, this),
              }),
            ],
          })
        );
      };
      return b;
    })(a);
    b.defaultProps = { classNames: {}, count: 1, allowVariableRowCount: !1 };
    g["default"] = b;
  },
  98
);
__d(
  "xuiglyph",
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      throw new Error("xuiglyph: Unexpected xuiglyph call.");
    }
    f["default"] = a;
  },
  66
);
__d(
  "XUIMonthPagerCalendar.react",
  [
    "cx",
    "ix",
    "xuiglyph",
    "AbstractCalendarPager_DEPRECATED.react",
    "Image.react",
    "XUICalendar.react",
    "joinClasses",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i, j) {
    var k = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var d = b.prototype;
      d.render = function () {
        var a = k.jsx(l, {
            className: "_5hps _5hpt",
            glyphDisabled: i("89959"),
            glyphEnabled: i("89956"),
          }),
          b = k.jsx(l, {
            className: "_5hps _5hpu",
            glyphDisabled: i("89971"),
            glyphEnabled: i("89968"),
          });
        return k.jsx(
          c("AbstractCalendarPager_DEPRECATED.react"),
          babelHelpers["extends"]({}, this.props, {
            className: c("joinClasses")("_5hpp", this.props.className),
            classNames: { header: "_5hpq", monthHeader: "_5hpr _c24" },
            leftButton: a,
            rightButton: b,
          })
        );
      };
      return b;
    })(k.Component);
    a.defaultProps = {
      classNames: {},
      calendar: k.jsx(c("XUICalendar.react"), {}),
    };
    function l(a) {
      var b = a.disabled ? a.glyphDisabled : a.glyphEnabled;
      return k.jsx(
        "button",
        babelHelpers["extends"]({}, a, {
          type: "button",
          children: k.jsx(c("Image.react"), { src: b }),
        })
      );
    }
    l.displayName = l.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "XUIBlock",
  ["cx", "prop-types"],
  function (a, b, c, d, e, f, g, h) {
    d = {
      background: c("prop-types").oneOf([
        "base-wash",
        "light-wash",
        "white",
        "highlight",
        "transparent",
      ]),
    };
    function a() {
      return { background: "transparent" };
    }
    function b(a) {
      return (
        (a.background === "base-wash" ? "_4-u5" : "") +
        (a.background === "light-wash" ? " _57d8" : "") +
        (a.background === "white" ? " _4-u8" : "") +
        (a.background === "highlight" ? " _4-u7" : "")
      );
    }
    g.propTypes = d;
    g.getDefaultProps = a;
    g.getBackgroundClass = b;
  },
  98
);
__d(
  "XUICard.react",
  ["cx", "XUIBlock", "joinClasses", "react"],
  function (a, b, c, d, e, f, g, h) {
    var i = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var e = b.prototype;
      e.render = function () {
        var a = this.props;
        a.background;
        var b = a.children,
          e = a.className;
        a = babelHelpers.objectWithoutPropertiesLoose(a, [
          "background",
          "children",
          "className",
        ]);
        e = c("joinClasses")(
          e,
          "_4-u2",
          d("XUIBlock").getBackgroundClass(this.props)
        );
        return i.jsx(
          "div",
          babelHelpers["extends"]({}, a, { className: e, children: b })
        );
      };
      return b;
    })(i.Component);
    a.defaultProps = babelHelpers["extends"](
      {},
      d("XUIBlock").getDefaultProps(),
      { background: "white" }
    );
    g["default"] = a;
  },
  98
);
__d(
  "ContextualLayerUpdateOnScroll",
  ["Event"],
  function (a, b, c, d, e, f, g) {
    a = (function () {
      function a(a) {
        this._layer = a;
      }
      var b = a.prototype;
      b.enable = function () {
        this._subscriptions = [
          this._layer.subscribe("show", this._attachScrollListener.bind(this)),
          this._layer.subscribe("hide", this._removeScrollListener.bind(this)),
        ];
      };
      b.disable = function () {
        while (this._subscriptions.length)
          this._subscriptions.pop().unsubscribe();
      };
      b._attachScrollListener = function () {
        var a = this,
          b = this._layer.getContextScrollParent(),
          d = this._layer.getInsertScrollParent();
        if (this._listener != null || b === d) return;
        this._listener = c("Event").listen(b, "scroll", function () {
          a._layer.updatePosition();
        });
      };
      b._removeScrollListener = function () {
        this._listener && this._listener.remove(), (this._listener = null);
      };
      return a;
    })();
    Object.assign(a.prototype, { _subscriptions: [] });
    g["default"] = a;
  },
  98
);
__d(
  "ReactFragment",
  ["React", "fbjs/lib/emptyFunction", "fbjs/lib/invariant", "fbjs/lib/warning"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b("React"),
      h =
        (typeof Symbol === "function" &&
          Symbol["for"] &&
          Symbol["for"]("react.element")) ||
        60103,
      i = ".",
      j = ":";
    c = !1;
    var k =
        typeof Symbol === "function" &&
        (typeof Symbol === "function" ? Symbol.iterator : "@@iterator"),
      l = "@@iterator";
    function m(a) {
      a = a && ((k && a[k]) || a[l]);
      if (typeof a === "function") return a;
    }
    function n(a) {
      var b = /[=:]/g,
        c = { "=": "=0", ":": "=2" };
      a = ("" + a).replace(b, function (a) {
        return c[a];
      });
      return "$" + a;
    }
    function o(a, b) {
      return a && typeof a === "object" && a.key != null
        ? n(a.key)
        : b.toString(36);
    }
    function p(a, c, d, e) {
      var f = typeof a;
      (f === "undefined" || f === "boolean") && (a = null);
      if (
        a === null ||
        f === "string" ||
        f === "number" ||
        (f === "object" && a.$$typeof === h)
      ) {
        d(e, a, c === "" ? i + o(a, 0) : c);
        return 1;
      }
      var g,
        k,
        l = 0;
      c = c === "" ? i : c + j;
      if (Array.isArray(a))
        for (var n = 0; n < a.length; n++)
          (g = a[n]), (k = c + o(g, n)), (l += p(g, k, d, e));
      else {
        n = m(a);
        if (n) {
          n = n.call(a);
          var q,
            r = 0;
          while (!(q = n.next()).done)
            (g = q.value), (k = c + o(g, r++)), (l += p(g, k, d, e));
        } else if (f === "object") {
          q = "";
          k = "" + a;
          b("fbjs/lib/invariant")(
            0,
            4786,
            k === "[object Object]"
              ? "object with keys {" + Object.keys(a).join(", ") + "}"
              : k,
            q
          );
        }
      }
      return l;
    }
    function q(a, b, c) {
      return a == null ? 0 : p(a, "", b, c);
    }
    var r = /\/+/g;
    function s(a) {
      return ("" + a).replace(r, "$&/");
    }
    function t(a, b) {
      return g.cloneElement(
        a,
        { key: b },
        a.props !== void 0 ? a.props.children : void 0
      );
    }
    var u = 10,
      v = w,
      w = function (a) {
        var b = this;
        if (b.instancePool.length) {
          var c = b.instancePool.pop();
          b.call(c, a);
          return c;
        } else return new b(a);
      };
    d = function (a, b) {
      a = a;
      a.instancePool = [];
      a.getPooled = b || v;
      a.poolSize || (a.poolSize = u);
      a.release = x;
      return a;
    };
    var x = function (a) {
      var c = this;
      a instanceof c || b("fbjs/lib/invariant")(0, 4787);
      a.destructor();
      c.instancePool.length < c.poolSize && c.instancePool.push(a);
    };
    f = function (a, b, c, d) {
      var e = this;
      if (e.instancePool.length) {
        var f = e.instancePool.pop();
        e.call(f, a, b, c, d);
        return f;
      } else return new e(a, b, c, d);
    };
    function y(a, b, c, d) {
      (this.result = a),
        (this.keyPrefix = b),
        (this.func = c),
        (this.context = d),
        (this.count = 0);
    }
    y.prototype.destructor = function () {
      (this.result = null),
        (this.keyPrefix = null),
        (this.func = null),
        (this.context = null),
        (this.count = 0);
    };
    d(y, f);
    function z(a, c, d) {
      var e = a.result,
        f = a.keyPrefix,
        h = a.func,
        i = a.context;
      h = h.call(i, c, a.count++);
      Array.isArray(h)
        ? A(h, e, d, b("fbjs/lib/emptyFunction").thatReturnsArgument)
        : h != null &&
          (g.isValidElement(h) &&
            (h = t(
              h,
              f + (h.key && (!c || c.key !== h.key) ? s(h.key) + "/" : "") + d
            )),
          e.push(h));
    }
    function A(a, b, c, d, e) {
      var f = "";
      c != null && (f = s(c) + "/");
      c = y.getPooled(b, f, d, e);
      q(a, z, c);
      y.release(c);
    }
    c = /^\d+$/;
    d = !1;
    function a(a) {
      if (typeof a !== "object" || !a || Array.isArray(a)) {
        b("fbjs/lib/warning")(
          !1,
          "ReactFragment.create only accepts a single object. Got: %s",
          a
        );
        return a;
      }
      if (g.isValidElement(a)) {
        b("fbjs/lib/warning")(
          !1,
          "ReactFragment.create does not accept a ReactElement without a wrapper object."
        );
        return a;
      }
      a.nodeType !== 1 || b("fbjs/lib/invariant")(0, 4788);
      var c = [];
      for (var d in a)
        A(a[d], c, d, b("fbjs/lib/emptyFunction").thatReturnsArgument);
      return c;
    }
    f = { create: a };
    e.exports = f;
  },
  null
);
__d(
  "ReactLayeredComponentMixin_DEPRECATED",
  ["ExecutionEnvironment", "ReactDOM", "ReactFragment", "gkx", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a() {
      if (c("gkx")("258")) return;
      c("ExecutionEnvironment").canUseDOM &&
        (this._layersContainer = document.createElement("div"));
    }
    function b() {
      c("gkx")("258") &&
        c("ExecutionEnvironment").canUseDOM &&
        (this._layersContainer = document.createElement("div")),
        this._renderLayersIntoContainer();
    }
    function e() {
      this._renderLayersIntoContainer();
    }
    function i() {
      d("ReactDOM").unmountComponentAtNode(this._layersContainer, f.id);
    }
    function j() {
      var a = this.renderLayers();
      a &&
        !Array.isArray(a) &&
        !h.isValidElement(a) &&
        (a = d("ReactFragment").create(a));
      d("ReactDOM").unstable_renderSubtreeIntoContainer(
        this,
        h.jsx("div", { children: a }),
        this._layersContainer
      );
    }
    g.UNSAFE_componentWillMount = a;
    g.componentDidMount = b;
    g.componentDidUpdate = e;
    g.componentWillUnmount = i;
    g._renderLayersIntoContainer = j;
  },
  98
);
__d(
  "XUIDatePicker.react",
  [
    "cx",
    "invariant",
    "ix",
    "CalendarUtils",
    "ContextualLayer.react",
    "ContextualLayerAutoFlip",
    "ContextualLayerUpdateOnScroll",
    "DateFormatConfig",
    "DatePickerInput_DEPRECATED.react",
    "DatePickerRestraints",
    "Image.react",
    "LayerTogglerContext",
    "ReactDOM",
    "ReactLayeredComponentMixin_DEPRECATED",
    "Toggler",
    "UTCUtils",
    "XUICalendar.react",
    "XUICard.react",
    "XUIMonthPagerCalendar.react",
    "createReactClass_DEPRECATED",
    "emptyFunction",
    "joinClasses",
    "prop-types",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    var j,
      k = j || b("react"),
      l = {
        ContextualLayerAutoFlip: b("ContextualLayerAutoFlip"),
        ContextualLayerUpdateOnScroll: b("ContextualLayerUpdateOnScroll"),
        LayerTogglerContext: b("LayerTogglerContext"),
      },
      m = {
        order: b("DateFormatConfig").numericDateOrder,
        separator: b("DateFormatConfig").numericDateSeparator,
      };
    function n(a) {
      var c = new Date();
      if (a) c.setTime(a);
      else {
        a = b("UTCUtils").dateToUTC(c);
        c.setTime(a);
      }
      return b("XUICalendar.react").normalizeDate(c).getTime();
    }
    function o(a) {
      var b = /^\d{4}-\d{2}-\d{2}$/.test(a);
      b || h(0, 153);
      b = Date.parse(a);
      b || h(0, 154, a);
      return b;
    }
    function p(a) {
      !a.initialDate || !a.initialTime || h(0, 155);
      return a.initialDate ? o(a.initialDate) : a.initialTime;
    }
    function q(a) {
      !a.earliestDate || !a.earliestTime || h(0, 156);
      return a.earliestDate
        ? o(a.earliestDate)
        : a.earliestTime
        ? a.earliestTime * 1e3
        : null;
    }
    function r(a) {
      !a.latestDate || !a.latestTime || h(0, 157);
      return a.latestDate
        ? o(a.latestDate)
        : a.latestTime
        ? a.latestTime * 1e3
        : null;
    }
    function s(a, b) {
      var c = p(a);
      !b && a.initialFocusTime && (c = a.initialFocusTime);
      return n(c);
    }
    a = b("createReactClass_DEPRECATED")({
      displayName: "XUIDatePicker",
      mixins: [b("ReactLayeredComponentMixin_DEPRECATED")],
      propTypes: {
        name: b("prop-types").string,
        initialDate: b("prop-types").string,
        initialTime: b("prop-types").number,
        initialFocusTime: b("prop-types").number,
        allowDuplicateSelection: b("prop-types").bool,
        shouldSetDefaultDate: b("prop-types").bool,
        earliestDate: b("prop-types").string,
        earliestTime: b("prop-types").number,
        latestDate: b("prop-types").string,
        latestTime: b("prop-types").number,
        dateRestraints: b("prop-types").array,
        highlightedTimes: b("prop-types").array,
        onCalendarSelectDateChange: b("prop-types").func,
        onInvalidDateSelected: b("prop-types").func,
        onDateRemoved: b("prop-types").func,
        allowEmpty: b("prop-types").bool,
        icon: b("prop-types").element,
        placeholder: b("prop-types").string,
        dayInnerFormatter: b("prop-types").func,
        calendar: b("prop-types").func,
        calendarProps: b("prop-types").object,
        behaviors: b("prop-types").object,
        onHideCalendar: b("prop-types").func,
        onInputFocus: b("prop-types").func,
        utcOutput: b("prop-types").bool,
        includedDays: b("prop-types").array,
      },
      getDefaultProps: function () {
        var a;
        return {
          shouldSetDefaultDate: !0,
          allowDuplicateSelection: !1,
          onCalendarSelectDateChange: (a = b("emptyFunction")),
          onInvalidDateSelected: a,
          onDateRemoved: a,
          placeholder: b("CalendarUtils").placeholderDateString(m),
          calendar: b("XUIMonthPagerCalendar.react"),
          icon: k.jsx(b("Image.react"), { src: i("27445") }),
          onHideCalendar: a,
          onInputFocus: a,
          utcOutput: !1,
          includedDays: [],
        };
      },
      togglerSub: null,
      getInitialState: function () {
        return babelHelpers["extends"]({}, this._calculateState(this.props), {
          showLayer: !1,
        });
      },
      UNSAFE_componentWillReceiveProps: function (a) {
        this.setState(this._calculateState(a, this.props));
      },
      _calculateState: function (a, b) {
        var c = p(a);
        if (b) {
          var d = p(b);
          if (d === c && a.shouldSetDefaultDate === b.shouldSetDefaultDate)
            return {};
        }
        d = n(c);
        b = { selectTime: a.shouldSetDefaultDate || c ? d : null };
        (!this.state ||
          !this.state.selectTime ||
          d !== this.state.selectTime) &&
          (b.focusTime = s(a, this.state));
        return b;
      },
      componentWillUnmount: function () {
        this.removeSubscriptions();
      },
      removeSubscriptions: function () {
        this.togglerSub && this.togglerSub.unsubscribe(),
          (this.togglerSub = null);
      },
      renderLayers: function () {
        var a = this;
        if (!this.state.showLayer) return {};
        var c = this.props.calendar;
        return {
          layer: k.jsx(b("ContextualLayer.react"), {
            contextRef: function () {
              return a.refs.inputBox;
            },
            position: "below",
            offsetY: 3,
            behaviors: this._getBehaviors(),
            shown: this.state.showLayer,
            shouldSetARIAProperties: !1,
            children: k.jsx(b("XUICard.react"), {
              className: "_5c6i",
              children: k.jsx(
                c,
                babelHelpers["extends"]({}, this.props.calendarProps, {
                  highlightedTimes: this.props.highlightedTimes,
                  dateRestraints: this._getDateRestraintsFromProps(this.props),
                  focusTime: this.state.focusTime,
                  selectTime: this.state.selectTime,
                  onFocusDateChange: this.onCalendarFocusDateChange,
                  onSelectDateChange: function (c) {
                    b("ReactDOM").findDOMNode(a.refs.inputBox).focus(),
                      a.onCalendarSelectDateChange(c),
                      a._hide();
                  },
                  allowDuplicateSelection: this.props.allowDuplicateSelection,
                  dayInnerFormatter: this.props.dayInnerFormatter,
                })
              ),
            }),
          }),
        };
      },
      _getBehaviors: function () {
        return babelHelpers["extends"]({}, l, this.props.behaviors);
      },
      _hide: function () {
        b("Toggler").hide(b("ReactDOM").findDOMNode(this));
      },
      onCalendarFocusDateChange: function (a) {
        this.setState({ focusTime: a.getTime() });
      },
      onCalendarSelectDateChange: function (a) {
        this.setState({ focusTime: a.getTime(), selectTime: a.getTime() }),
          this.props.onCalendarSelectDateChange(a);
      },
      onDateRemoved: function () {
        this.setState({ selectTime: null }), this.props.onDateRemoved();
      },
      onInvalidDateSelected: function (a) {
        this.setState({ selectTime: null }),
          this.props.onInvalidDateSelected(a);
      },
      onTogglerShowOrHide: function (a, c) {
        c.active === b("ReactDOM").findDOMNode(this) &&
          (a == "show"
            ? this.setState({ showLayer: !0 })
            : (this.removeSubscriptions(),
              this.setState({ showLayer: !1 }),
              this.props.onHideCalendar()));
      },
      onInputFocus: function () {
        this.removeSubscriptions(),
          (this.togglerSub = b("Toggler").subscribe(
            ["show", "hide"],
            this.onTogglerShowOrHide
          )),
          b("Toggler").show(b("ReactDOM").findDOMNode(this)),
          this.props.onInputFocus();
      },
      _getDateRestraintsFromProps: function (a) {
        if (a.dateRestraints) return a.dateRestraints;
        var c = [],
          d = q(a);
        d &&
          c.push(
            b("DatePickerRestraints").enforceDateIsNoEarlierThan(new Date(d))
          );
        d = r(a);
        d &&
          c.push(
            b("DatePickerRestraints").enforceDateIsNoLaterThan(new Date(d))
          );
        a.includedDays.length &&
          c.push(
            b("DatePickerRestraints").enforceDayIsIncludedFromWeek(
              a.includedDays
            )
          );
        return c;
      },
      render: function () {
        return k.jsx(
          b("DatePickerInput_DEPRECATED.react"),
          babelHelpers["extends"]({}, this.props, {
            className: b("joinClasses")(this.props.className, "_5c6j"),
            dateRestraints: this._getDateRestraintsFromProps(this.props),
            icon: this.props.icon,
            name: this.props.name,
            onBlur: this._hide,
            onChange: this.onCalendarSelectDateChange,
            onDateRemoved: this.onDateRemoved,
            onFocus: this.onInputFocus,
            onInvalidDateSelected: this.onInvalidDateSelected,
            placeholder: this.props.placeholder,
            ref: "inputBox",
            selectTime: this.state.selectTime,
            utcOutput: this.props.utcOutput,
          })
        );
      },
    });
    e.exports = a;
  },
  null
);
__d(
  "ContextualDialogXUITheme",
  ["cx"],
  function (a, b, c, d, e, f, g, h) {
    a = "_53ii";
    b = { offset: 12, length: 16 };
    g.wrapperClassName = a;
    g.arrowDimensions = b;
  },
  98
);
__d(
  "XUIContextualDialogBody.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    var h = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var c = b.prototype;
      c.render = function () {
        return h.jsx("div", {
          className: this.props.className,
          children: this.props.children,
        });
      };
      return b;
    })(h.Component);
    g["default"] = a;
  },
  98
);
__d(
  "XUIOverlayFooter.react",
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
        return i.jsx(
          "div",
          babelHelpers["extends"]({}, this.props, {
            className: c("joinClasses")(
              this.props.className,
              "_5lnf uiOverlayFooter"
            ),
            children: this.props.children,
          })
        );
      };
      return b;
    })(i.Component);
    g["default"] = a;
  },
  98
);
__d(
  "XUIContextualDialogFooter.react",
  ["cx", "XUIOverlayFooter.react", "joinClasses", "react"],
  function (a, b, c, d, e, f, g, h) {
    var i = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var d = b.prototype;
      d.render = function () {
        return i.jsx(c("XUIOverlayFooter.react"), {
          className: c("joinClasses")(this.props.className, "_572u"),
          children: this.props.children,
        });
      };
      return b;
    })(i.Component);
    g["default"] = a;
  },
  98
);
__d(
  "XUIContextualDialogTitle.react",
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
        var a = this.props.use;
        a = c("joinClasses")(
          "_47lu" +
            (a === "primary" ? " _47lv" : "") +
            (a === "secondary" ? " _47mc" : ""),
          this.props.className
        );
        return i.jsx("h3", {
          className: a,
          id: this.props.id,
          children: this.props.children,
        });
      };
      return b;
    })(i.Component);
    a.defaultProps = { use: "primary" };
    g["default"] = a;
  },
  98
);
__d(
  "XUIContextualDialog.react",
  [
    "cx",
    "fbt",
    "ContextualDialogXUITheme",
    "ReactAbstractContextualDialog",
    "ReactLayer",
    "XUIContextualDialogBody.react",
    "XUIContextualDialogFooter.react",
    "XUIContextualDialogTitle.react",
    "joinClasses",
    "react",
    "uniqueID",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    var j = d("react"),
      k = d("ReactLayer").createClass(
        d("ReactAbstractContextualDialog").createSpec({
          displayName: "ReactXUIContextualDialog",
          theme: d("ContextualDialogXUITheme"),
        })
      );
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b;
        b = a.call(this) || this;
        b.$2 = j.createRef();
        b.updatePosition = function () {
          var a;
          (a = b.$2.current) == null
            ? void 0
            : (a = a.layer) == null
            ? void 0
            : a.updatePosition == null
            ? void 0
            : a.updatePosition();
        };
        b.$1 = b.$1 || c("uniqueID")();
        return b;
      }
      var d = b.prototype;
      d.$3 = function () {
        return this.$4(c("XUIContextualDialogBody.react"));
      };
      d.$5 = function () {
        return this.$4(c("XUIContextualDialogTitle.react"));
      };
      d.$6 = function () {
        return this.$4(c("XUIContextualDialogFooter.react"));
      };
      d.$4 = function (a) {
        var b = null;
        j.Children.forEach(this.props.children, function (c) {
          !b && c && c.type === a && (b = c);
        });
        return b;
      };
      d.$7 = function () {
        return i._("Contenu de la bo\u00eete de dialogue");
      };
      d.render = function () {
        var a = this.props.children,
          b = this.$3(),
          d = this.$5(),
          e = {};
        this.props.labelledBy
          ? (e.labelledBy = this.props.labelledBy)
          : this.props.label
          ? (e.label = this.props.label)
          : d
          ? ((d = j.cloneElement(d, { id: this.$1 })), (e.labelledBy = this.$1))
          : (e.label = this.$7());
        b &&
          (a = j.jsxs("div", {
            className: c("joinClasses")(this.props.className, "_53iv"),
            children: [d, b],
          }));
        return j.jsxs(
          k,
          babelHelpers["extends"]({}, this.props, e, {
            ref: this.$2,
            children: [a, b ? this.$6() : null],
          })
        );
      };
      return b;
    })(j.Component);
    a.WIDTH = { NORMAL: 312, WIDE: 400 };
    a.defaultProps = {
      dialogRole: "dialog",
      hasActionableContext: !1,
      hideOnEscape: !0,
    };
    g["default"] = a;
  },
  98
);
__d(
  "XUIDialogButton.react",
  ["cx", "XUIButton.react", "joinClasses", "react"],
  function (a, b, c, d, e, f, g, h) {
    var i = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var d = b.prototype;
      d.render = function () {
        var a = this.props.action,
          b =
            (a === "confirm" ? "layerConfirm" : "") +
            (a === "cancel" ? " layerCancel" : "") +
            (a === "button" ? " layerButton" : ""),
          d = this.props.href;
        a === "cancel"
          ? (d = "#")
          : a === "button" && (d == null || d === "") && (d = "#");
        return i.jsx(
          c("XUIButton.react"),
          babelHelpers["extends"]({}, this.props, {
            className: c("joinClasses")(this.props.className, b),
            href: d,
            role: "button",
          })
        );
      };
      return b;
    })(i.Component);
    g["default"] = a;
  },
  98
);
__d(
  "XUIDialogCancelButton.react",
  ["fbt", "XUIDialogButton.react", "react"],
  function (a, b, c, d, e, f, g, h) {
    var i = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var d = b.prototype;
      d.render = function () {
        return i.jsx(
          c("XUIDialogButton.react"),
          babelHelpers["extends"]({}, this.props, {
            action: "cancel",
            label: h._("Annuler"),
          })
        );
      };
      return b;
    })(i.Component);
    g["default"] = a;
  },
  98
);
__d(
  "XUIDialogConfirmButton.react",
  ["fbt", "XUIDialogButton.react", "react"],
  function (a, b, c, d, e, f, g, h) {
    var i = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var d = b.prototype;
      d.render = function () {
        return i.jsx(
          c("XUIDialogButton.react"),
          babelHelpers["extends"]({}, this.props, {
            action: "confirm",
            label: h._("Confirmer"),
          })
        );
      };
      return b;
    })(i.Component);
    g["default"] = a;
  },
  98
);
__d(
  "LayerFadeOnShow",
  ["Bootloader", "Run", "emptyFunction", "ifRequired"],
  function (a, b, c, d, e, f, g) {
    a = (function () {
      function a(a) {
        (this._layer = a),
          d("Run").onAfterLoad(function () {
            c("Bootloader").loadModules(
              ["CSSFade"],
              c("emptyFunction"),
              "LayerFadeOnShow"
            );
          });
      }
      var b = a.prototype;
      b.enable = function () {
        this._subscriptions = [
          this._layer.subscribe("show", this._animate.bind(this)),
        ];
      };
      b.disable = function () {
        if (this._subscriptions) {
          while (this._subscriptions.length)
            this._subscriptions.pop().unsubscribe();
          this._subscriptions = null;
        }
      };
      b._getDuration = function () {
        return 100;
      };
      b._animate = function () {
        var a = this,
          b = this._layer.getRoot();
        c("ifRequired")(
          "CSSFade",
          function (c) {
            c.show(b, { duration: a._getDuration() });
          },
          function () {}
        );
      };
      a.forDuration = function (b) {
        var d = (function (b) {
          babelHelpers.inheritsLoose(a, b);
          function a() {
            return b.apply(this, arguments) || this;
          }
          return a;
        })(a);
        d.prototype._getDuration = c("emptyFunction").thatReturns(b);
        return d;
      };
      return a;
    })();
    Object.assign(a.prototype, { _subscriptions: null });
    g["default"] = a;
  },
  98
);
__d(
  "XUIDialog.react",
  ["csx", "AbstractDialog.react", "LayerFadeOnShow", "ReactLayer"],
  function (a, b, c, d, e, f, g) {
    a = b("ReactLayer").createClass(
      b("AbstractDialog.react").createSpec({
        displayName: "XUIDialog",
        addedBehaviors: { LayerFadeOnShow: b("LayerFadeOnShow") },
        titleClass: "._52c9",
        hideOnEscape: !0,
      })
    );
    e.exports = a;
  },
  null
);
__d(
  "XUIText.react",
  ["cx", "joinClasses", "react"],
  function (a, b, c, d, e, f, g) {
    var h,
      i = h || b("react");
    a = (function (a) {
      "use strict";
      babelHelpers.inheritsLoose(c, a);
      function c() {
        return a.apply(this, arguments) || this;
      }
      var d = c.prototype;
      d.getAriaLevel = function (a, b) {
        if (a === "header1") return 1;
        else if (a === "header2") return 2;
        else if (a === "header3") return 3;
        else if (a === "header4") return 4;
        return b;
      };
      d.render = function () {
        var a = this.props,
          c = a.color,
          d = a.palette,
          e = a.type,
          f = a.size,
          g = a.weight,
          h = a.display,
          j = a.headingLevel,
          k = a.children;
        a = babelHelpers.objectWithoutPropertiesLoose(a, [
          "color",
          "palette",
          "type",
          "size",
          "weight",
          "display",
          "headingLevel",
          "children",
        ]);
        e =
          (e === "serif" ? "_5s6c" : "") +
          (f === "small" ? " _50f3" : "") +
          (f === "medium" ? " _50f4" : "") +
          (f === "large" ? " _50f5" : "") +
          (f === "xlarge" || f === "xlarge_DEPRECATED" ? " _50f6" : "") +
          (g === "bold" ? " _50f7" : "") +
          (g === "normal" ? " _5kx5" : "") +
          (f === "display" ? " _2iei" : "") +
          (f === "header1" ? " _2iej" : "") +
          (f === "header2" ? " _2iek" : "") +
          (f === "header3" ? " _2iel" : "") +
          (f === "header4" ? " _2iem" : "") +
          (f === "body1" ? " _2ien" : "") +
          (f === "body2" ? " _2ieo" : "") +
          (f === "body3" ? " _2iep" : "") +
          (f === "meta1" ? " _2ieq" : "") +
          (c === "blueLink" ? " _rzx" : "") +
          (c === "white" ? " _2ier" : "") +
          (c === "highlight" ? " _1hk0" : "") +
          (c === "positive" ? " _2iet" : "") +
          (c === "negative" ? " _2ieu" : "") +
          (d !== "dark" && c === "placeholder" ? " _rzy" : "") +
          (d !== "dark" && c === "primary" ? " _2iev" : "") +
          (d !== "dark" && c === "secondary" ? " _2iex" : "") +
          (d !== "dark" && c === "disabled" ? " _2iey" : "") +
          (d === "dark" && c === "primary" ? " _2iez" : "") +
          (d === "dark" && c === "secondary" ? " _2ie-" : "") +
          (d === "dark" && c === "disabled" ? " _2ie_" : "");
        g = this.getAriaLevel(f, j);
        g !== void 0 &&
          g !== null &&
          (a = babelHelpers["extends"]({}, a, {
            role: "heading",
            "aria-level": "" + g,
          }));
        return h === "block"
          ? i.jsx(
              "div",
              babelHelpers["extends"]({}, a, {
                className: b("joinClasses")(this.props.className, e),
                children: k,
              })
            )
          : i.jsx(
              "span",
              babelHelpers["extends"]({}, a, {
                className: b("joinClasses")(this.props.className, e),
                children: k,
              })
            );
      };
      return c;
    })(i.Component);
    a.defaultProps = {
      type: "inherit",
      size: "inherit",
      weight: "inherit",
      display: "inline",
    };
    e.exports = a;
  },
  null
);
__d(
  "XUIDialogBody.react",
  ["cx", "XUIText.react", "joinClasses", "react"],
  function (a, b, c, d, e, f, g, h) {
    var i = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var d = b.prototype;
      d.render = function () {
        var a = "_4-i2" + (this.props.useCustomPadding ? "" : " _pig");
        return i.jsx(
          c("XUIText.react"),
          babelHelpers["extends"]({}, this.props, {
            className: c("joinClasses")(this.props.className, a),
            display: "block",
            size: this.props.fontSize,
            children: this.props.children,
          })
        );
      };
      return b;
    })(i.Component);
    a.defaultProps = { fontSize: "medium" };
    g["default"] = a;
  },
  98
);
__d(
  "LeftRight.react",
  ["cx", "invariant", "joinClasses", "react"],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var d = b.prototype;
      d.getChildrenArr = function () {
        var a = [];
        j.Children.forEach(this.props.children, function (b) {
          return a.push(b);
        });
        return a;
      };
      d.render = function () {
        var a = this.getChildrenArr();
        a.length === 1 || a.length === 2 || i(0, 5615);
        var d = this.props.direction || b.DIRECTION.both,
          e = d === b.DIRECTION.both,
          f = e || d === b.DIRECTION.left ? "_ohe lfloat" : "";
        e = e || d === b.DIRECTION.right ? "_ohf rfloat" : "";
        f = j.jsx("div", { className: f, children: a[0] }, "left");
        e =
          a.length < 2
            ? null
            : j.jsx("div", { className: e, children: a[1] }, "right");
        a = d === b.DIRECTION.right && e ? [e, f] : [f, e];
        d = this.props;
        f = d.root;
        e = babelHelpers.objectWithoutPropertiesLoose(d, ["root"]);
        return j.jsx(
          "div",
          babelHelpers["extends"]({}, e, {
            ref: f,
            className: c("joinClasses")(this.props.className, "clearfix"),
            children: a,
          })
        );
      };
      return b;
    })(j.Component);
    a.DIRECTION = { left: "left", right: "right", both: "both" };
    g["default"] = a;
  },
  98
);
__d(
  "XUIDialogFooter.react",
  [
    "cx",
    "LeftRight.react",
    "XUIOverlayFooter.react",
    "XUIText.react",
    "joinClasses",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    var i = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var d = b.prototype;
      d.render = function () {
        var a = "_5a8u" + (this.props.fullBleedBorder ? " _27qq" : ""),
          b = this.props,
          d = b.children,
          e = b.leftContent;
        b = babelHelpers.objectWithoutPropertiesLoose(b, [
          "children",
          "leftContent",
        ]);
        return i.jsx(
          c("XUIOverlayFooter.react"),
          babelHelpers["extends"]({}, b, {
            className: c("joinClasses")(this.props.className, a),
            children: i.jsx(c("XUIText.react"), {
              display: "block",
              fontSize: this.props.fontSize,
              children: i.jsxs(c("LeftRight.react"), {
                children: [
                  i.jsx("div", { children: e }),
                  i.jsx("div", { children: d }),
                ],
              }),
            }),
          })
        );
      };
      return b;
    })(i.Component);
    a.defaultProps = { fontSize: "medium" };
    g["default"] = a;
  },
  98
);
__d(
  "XUIDialogTitle.react",
  [
    "cx",
    "fbt",
    "LeftRight.react",
    "XUICloseButton.react",
    "joinClasses",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    var j = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var d = b.prototype;
      d.render = function () {
        var a = null,
          b = this.props,
          d = b.closeButtonText,
          e = b.showCloseButton,
          f = b.closeButtonSize,
          g = b.closeButtonClassName;
        b = babelHelpers.objectWithoutPropertiesLoose(b, [
          "closeButtonText",
          "showCloseButton",
          "closeButtonSize",
          "closeButtonClassName",
        ]);
        e &&
          (a = j.jsx(c("XUICloseButton.react"), {
            size: f,
            "data-testid": void 0,
            label: d,
            className: c("joinClasses")(g, "layerCancel _51-t _9l15"),
            onClick: this.props.onCloseClick,
          }));
        f = j.Children.toArray(this.props.children);
        return j.jsx(
          "div",
          babelHelpers["extends"]({}, b, {
            className: c("joinClasses")(
              this.props.className,
              "_4-i0 _9l16" + (e ? " _2gb3" : "")
            ),
            children: j.jsxs(c("LeftRight.react"), {
              children: [
                j.jsx("h3", {
                  className: "_52c9 _9l17",
                  "data-hover": "tooltip",
                  "data-tooltip-display": "overflow",
                  children: f[0],
                }),
                j.jsxs("div", {
                  className: "_51-u",
                  children: [f.slice(1), a],
                }),
              ],
            }),
          })
        );
      };
      return b;
    })(j.Component);
    a.defaultProps = {
      closeButtonText: i._("Fermer"),
      showCloseButton: !0,
      closeButtonSize: "medium",
    };
    g["default"] = a;
  },
  98
);
__d(
  "XUIMenuTheme",
  ["cx"],
  function (a, b, c, d, e, f, g) {
    e.exports = { className: "_558b" };
  },
  null
);
__d(
  "XUIMenuWithSquareCorner",
  ["cx", "CSS"],
  function (a, b, c, d, e, f, g, h) {
    a = (function () {
      function a(a) {
        this.$1 = a;
      }
      var b = a.prototype;
      b.enable = function () {
        d("CSS").addClass(this.$1.getRoot(), "_2n_z");
      };
      b.disable = function () {
        d("CSS").removeClass(this.$1.getRoot(), "_2n_z");
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "ReactXUIMenu",
  ["ReactMenu", "XUIMenuTheme", "XUIMenuWithSquareCorner"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      (a.isReactLegacyFactory = {}), (a.type = a);
    }
    b = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b) {
        var e = { behaviors: void 0, theme: d("XUIMenuTheme") };
        (!b || b.withsquarecorner !== !1) &&
          (e.behaviors = [c("XUIMenuWithSquareCorner")]);
        return a.call(this, b, e) || this;
      }
      return b;
    })(c("ReactMenu"));
    a(b);
    e = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b) {
        var e = { behaviors: void 0, theme: d("XUIMenuTheme") };
        (!b || b.withsquarecorner !== !1) &&
          (e.behaviors = [c("XUIMenuWithSquareCorner")]);
        return a.call(this, b, e) || this;
      }
      return b;
    })(c("ReactMenu").SelectableMenu);
    a(e);
    b.SelectableMenu = e;
    b.Item = c("ReactMenu").Item;
    b.SelectableItem = c("ReactMenu").SelectableItem;
    g["default"] = b;
  },
  98
);
__d(
  "XUIPopoverButton.react",
  [
    "cx",
    "ix",
    "AbstractPopoverButton.react",
    "Image.react",
    "XUIButton.react",
    "joinClasses",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    var j = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var d = b.prototype;
      d.render = function () {
        var a = this.props.size || "medium",
          b = "_55pi",
          d = this.props,
          e = d.theme,
          f = d.use,
          g = d.chevron,
          h = d.maxwidth,
          k = d.image,
          l = d.label,
          m = d.labelIsHidden,
          n = d.haschevron;
        d = babelHelpers.objectWithoutPropertiesLoose(d, [
          "theme",
          "use",
          "chevron",
          "maxwidth",
          "image",
          "label",
          "labelIsHidden",
          "haschevron",
        ]);
        e === "dark" &&
          (b = c("joinClasses")(
            b,
            (f !== "special" ? "_5vto" : "") +
              (a === "small" ? " _55_o" : "") +
              (a === "medium" ? " _55_p" : "") +
              (a === "large" ? " _55_q" : "") +
              (a === "xlarge" ? " _55_r" : "") +
              (a === "xxlarge" ? " _55_s" : "")
          ));
        if (!g) {
          e =
            e === "dark" || f === "confirm" || f === "special"
              ? i("101301")
              : i("101305");
          g = j.jsx(c("Image.react"), { src: e });
        }
        e = {
          button: j.jsx(
            c("XUIButton.react"),
            babelHelpers["extends"]({}, d, {
              use: f,
              className: c("joinClasses")(this.props.className, b),
              size: a,
            })
          ),
          chevron: g,
          chevronWidth: 14,
          defaultMaxWidth: h || 200,
        };
        return j.jsx(c("AbstractPopoverButton.react"), {
          config: e,
          haschevron: n,
          image: k,
          label: l,
          labelIsHidden: m,
          maxwidth: h,
        });
      };
      return b;
    })(j.Component);
    g["default"] = a;
  },
  98
);
__d(
  "ContextualLayerPositionClassOnContext",
  ["cx", "CSS"],
  function (a, b, c, d, e, f, g) {
    a = (function () {
      "use strict";
      function a(a) {
        this._layer = a;
      }
      var c = a.prototype;
      c.enable = function () {
        (this._subscription = this._layer.subscribe(
          "reposition",
          this._updateClassName.bind(this)
        )),
          this._layer.isShown() && this._updateClassName();
      };
      c.disable = function () {
        this._subscription.unsubscribe(),
          (this._subscription = null),
          this._prevClassName &&
            (b("CSS").removeClass(
              this._layer.getContext(),
              this._prevClassName
            ),
            (this._prevClassName = null));
      };
      c._updateClassName = function (a, c) {
        a = this._layer.getContext();
        c = h(c);
        if (this._prevClassName) {
          if (this._prevClassName === c) return;
          b("CSS").removeClass(a, this._prevClassName);
        }
        b("CSS").addClass(a, c);
        this._prevClassName = c;
      };
      return a;
    })();
    function h(a) {
      var b = a.getAlignment();
      a = a.getPosition();
      if (a === "below")
        if (b === "left") return "_nk";
        else if (b === "right") return "_nl";
        else return "_nm";
      else if (a === "above")
        if (b === "left") return "_nn";
        else if (b === "right") return "_no";
        else return "_np";
      else if (a === "left") return "_nq";
      else return "_nr";
    }
    Object.assign(a.prototype, { _subscription: null, _prevClassName: null });
    e.exports = a;
  },
  null
);
__d(
  "XUISelectorButton.react",
  ["invariant", "XUIPopoverButton.react", "react"],
  function (a, b, c, d, e, f, g, h) {
    var i = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var d = b.prototype;
      d.render = function () {
        this.props.theme == null || h(0, 5092);
        return i.jsx(
          c("XUIPopoverButton.react"),
          babelHelpers["extends"]({}, this.props, { theme: "dark" })
        );
      };
      return b;
    })(i.Component);
    g["default"] = a;
  },
  98
);
__d(
  "XUISelector.react",
  [
    "AbstractSelector.react",
    "ContextualLayerPositionClassOnContext",
    "ReactXUIMenu",
    "XUISelectorButton.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    var h = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      b.getButtonSize = function (a) {
        return a.size || "medium";
      };
      var d = b.prototype;
      d.render = function () {
        var a,
          b = [];
        this.props.children != null &&
          h.Children.forEach(this.props.children, function (a) {
            a && b.push(a);
          });
        this.props.customButton
          ? (a = this.props.customButton)
          : b[0] && b[0].type === c("XUISelectorButton.react")
          ? ((a = b[0]), (b = b.slice(1)))
          : (a = h.jsx(c("XUISelectorButton.react"), {
              ref: "button",
              haschevron: this.props.haschevron,
              disabled: this.props.disabled,
              use: this.props.use,
              size: this.props.size,
              suppressed: this.props.suppressed,
              maxwidth: this.props.maxwidth,
            }));
        a = {
          button: a,
          menu: h.jsx(c("ReactXUIMenu").SelectableMenu, {
            maxheight: this.props.maxheight,
            multiple: this.props.multiple,
          }),
          layerBehaviors: this.props.layerBehaviors.concat([
            c("ContextualLayerPositionClassOnContext"),
          ]),
        };
        return h.jsx(
          c("AbstractSelector.react"),
          babelHelpers["extends"]({}, this.props, {
            ref: "abstractSelector",
            config: a,
            maxheight: this.props.maxheight,
            children: b,
          })
        );
      };
      d.showMenu = function () {
        this.refs.abstractSelector.showMenu();
      };
      d.showAndFocusMenu = function () {
        this.refs.abstractSelector.showAndFocusMenu();
      };
      d.hideMenu = function () {
        this.refs.abstractSelector.hideMenu();
      };
      return b;
    })(h.Component);
    a.Option = c("ReactXUIMenu").SelectableItem;
    a.defaultProps = { haschevron: !0, layerBehaviors: [], multiple: !1 };
    g["default"] = a;
  },
  98
);
__d(
  "PagesButton.react",
  ["cx", "AbstractButton.react", "joinClasses", "react"],
  function (a, b, c, d, e, f, g, h) {
    var i = d("react"),
      j = "accentblue",
      k = "medium";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      b.getButtonColor = function (a) {
        return a.color || j;
      };
      var d = b.prototype;
      d.render = function () {
        var a = b.getButtonColor(this.props),
          d = this.props.size || k,
          e = this.props.disabled,
          f = this.props.fill;
        d = c("joinClasses")(
          "_2-sm _1olk" +
            (d === "small" ? " _xa8" : "") +
            (d === "medium" ? " _xa9" : "") +
            (d === "large" ? " _xaf" : "") +
            (!e && a === "accentblue" ? " _xag" : "") +
            (!e && a === "fbblue" ? " _xah" : "") +
            (!e && a === "gray" ? " _42q9" : "") +
            (!e && a === "green" ? " _xai" : "") +
            (e ? " _xaj" : "") +
            (f ? " _xak" : "") +
            (f ? "" : " _xal") +
            (this.props.slim ? " _4t_j" : "")
        );
        return i.jsx(
          c("AbstractButton.react"),
          babelHelpers["extends"]({}, this.props, {
            className: c("joinClasses")(this.props.className, d),
            label: this.props.label,
          })
        );
      };
      return b;
    })(i.Component);
    a.defaultProps = { color: j, size: k, disabled: !1, fill: !1, slim: !1 };
    g["default"] = a;
  },
  98
);
__d(
  "FantaDispatcher",
  ["ExplicitRegistrationDispatcher"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      return b;
    })(c("ExplicitRegistrationDispatcher"));
    b = new a({ strict: !1 });
    g["default"] = b;
  },
  98
);
__d(
  "WebMessengerThreadPermalinks",
  [
    "MercuryIDs",
    "MessagingTag",
    "MessengerURIConstants",
    "URI",
    "WWWBase",
    "requireWeak",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, e) {
      var f = "";
      d("MercuryIDs").isCanonical(a)
        ? (f = d("MercuryIDs").tokenize(a).value)
        : c("requireWeak")("MercuryThreadIDMap", function (b) {
            f = b.get().getServerIDFromClientIDNow(a);
          });
      e = h(f || "", e);
      b && b(e);
    }
    function h(a, b) {
      var d = new (c("URI"))(c("WWWBase").uri),
        e = c("MessengerURIConstants").FACEBOOK_PREFIX;
      if (b)
        switch (b) {
          case c("MessagingTag").OTHER:
            e += "/filtered";
            break;
          case c("MessagingTag").PENDING:
            e += "/requests";
            break;
          case c("MessagingTag").INBOX:
            break;
          default:
            e += "/" + b;
            break;
        }
      d.setPath(e + c("MessengerURIConstants").THREAD_PREFIX + a);
      return d.toString();
    }
    function b(a, b) {
      var d = new (c("URI"))(c("WWWBase").uri),
        e = c("MessengerURIConstants").FACEBOOK_PREFIX;
      d.setPath(i(e, b) + "/t/" + a);
      return d.toString();
    }
    function i(a, b) {
      b && b != c("MessagingTag").INBOX && (a += "/" + b);
      return a;
    }
    g.getThreadURI = a;
    g.getThreadURIFromServerID = h;
    g.getThreadURIFromUserID = b;
  },
  98
);
__d(
  "FantaTabActions",
  [
    "Bootloader",
    "CurrentUser",
    "Env",
    "FBIDCheck",
    "FantaDispatcher",
    "MercuryIDs",
    "MessengerURIConstants",
    "URI",
    "WebMessengerThreadPermalinks",
    "WorkplaceChatHelper",
    "goURI",
    "ifRequired",
    "keyMirror",
    "setTimeout",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = c("keyMirror")({
      BLUR_TAB: null,
      CLEAR_PAGE_INDICATOR_DESCRIPTION: null,
      CLOSE_ALL_TABS: null,
      CLOSE_AND_TAB_NEXT: null,
      CLOSE_TAB: null,
      DELETE_TAB: null,
      FOCUS_NEXT_TAB: null,
      FOCUS_PREVIOUS_TAB: null,
      FOCUS_TAB: null,
      HIGHLIGHT_NEW_MESSAGE: null,
      HOVERED_TAB: null,
      JUMP_TO_MESSAGE: null,
      LOAD_FROM_DATA: null,
      MINIMIZE_ALL_TABS: null,
      MINIMIZE_TAB: null,
      OPEN_TAB_WITH_INTERSTITIAL_DATA: null,
      OPEN_TAB: null,
      OPT_IN_OPEN_TAB_WITH_BLOCKEES: null,
      CLOSE_GROUP_ENTRANCE_WARNING_DIALOG: null,
      REPLACE_TAB: null,
      SCROLL_BOTTOM_CHANGED: null,
      SET_ALLOWED_RAISED_TABS: null,
      SET_MESSAGE_COUNT: null,
      SET_PAGE_INDICATOR_DESCRIPTION: null,
      SET_PERMANENT_URI: null,
      SHOW_UNSEEN_MESSAGES: null,
      UNHIGHLIGHT_NEW_MESSAGE: null,
      UNHOVERED_TAB: null,
      UNMINIMIZE_TAB: null,
      WIPE_JUMP_TO_MESSAGE: null,
      CREATE_NEW_NAMED_GROUP_CHAT: null,
    });
    function i(a, b) {
      var e = a
        ? new (c("URI"))(
            d("WebMessengerThreadPermalinks").getThreadURIFromServerID(a)
          )
        : new (c("URI"))(c("MessengerURIConstants").COMPOSE_SUBPATH);
      c("ifRequired")(
        "BusinessURI.brands",
        function (a) {
          return c("goURI")(a(e));
        },
        function () {
          return c("setTimeout")(function () {
            j(a, b);
          }, 100);
        }
      );
    }
    function a(a, b, c) {
      j(a, b, c, !0);
    }
    function j(a, b, e, f, g) {
      if (c("Env").isCQuick) {
        var j = d("MercuryIDs").getUserIDFromThreadID(a);
        c("Bootloader").loadModules(
          ["BlueCompatRouter"],
          function (a) {
            j != null && a.startChat(j, !d("FBIDCheck").isUser_deprecated(j));
          },
          "FantaTabActions"
        );
        return;
      }
      if (c("CurrentUser").isWorkUser()) {
        var l = c("ifRequired")(
          "WorkGalahadChat_DEPRECATED",
          function (b) {
            b.openThreadFromThreadID(a);
            return !0;
          },
          function () {
            return !1;
          }
        );
        if (l) return;
      }
      c("ifRequired")("FantaTabsEagerBootloader", function (a) {
        return a.bootload();
      });
      M(function () {
        c("FantaDispatcher").dispatch({
          type: h.OPEN_TAB,
          tabID: a,
          entryPoint: b,
          defaultText: e,
          isNewMessageTab: f,
          defaultPreview: g,
        }),
          c("ifRequired")(
            "FantaTabsReactApp",
            function (c) {
              k(a, b);
            },
            function () {
              k(a, b, function () {
                return i(a, b);
              });
            }
          );
      });
    }
    function b(a, b, d) {
      M(function () {
        c("FantaDispatcher").dispatch({
          type: h.OPEN_TAB_WITH_INTERSTITIAL_DATA,
          tabID: a,
          interstitialData: b,
          entryPoint: d,
        }),
          c("ifRequired")(
            "FantaTabsReactApp",
            function (c) {
              l(a, b, d);
            },
            function () {
              l(a, b, d);
            }
          );
      });
    }
    function k(a, b, d) {
      c("ifRequired")(
        "FantaTabsSlimApp",
        function (d) {
          c("ifRequired")(
            "FantaAppStore",
            function () {},
            function () {
              d.getPumpedUp(function () {
                c("FantaDispatcher").dispatch({
                  type: h.OPEN_TAB,
                  tabID: a,
                  entryPoint: b,
                });
              });
            }
          );
        },
        function () {
          return d && d(a);
        }
      );
    }
    function l(a, b, d) {
      c("ifRequired")("FantaTabsSlimApp", function (e) {
        c("ifRequired")(
          "FantaAppStore",
          function () {},
          function () {
            e.getPumpedUp(function () {
              c("FantaDispatcher").dispatch({
                type: h.OPEN_TAB_WITH_INTERSTITIAL_DATA,
                tabID: a,
                interstitialData: b,
                entryPoint: d,
              });
            });
          }
        );
      });
    }
    function e(a, b) {
      c("FantaDispatcher").dispatch({
        type: h.REPLACE_TAB,
        tabID: a,
        newTabID: b,
      });
    }
    function f(a) {
      c("FantaDispatcher").dispatch({ type: h.MINIMIZE_TAB, tabID: a });
    }
    function m() {
      c("FantaDispatcher").dispatch({ type: h.MINIMIZE_ALL_TABS });
    }
    function n(a) {
      c("FantaDispatcher").dispatch({ type: h.UNMINIMIZE_TAB, tabID: a });
    }
    function o(a) {
      c("FantaDispatcher").dispatch({
        type: h.OPT_IN_OPEN_TAB_WITH_BLOCKEES,
        tabID: a,
      });
    }
    function p(a) {
      c("FantaDispatcher").dispatch({
        type: h.CLOSE_GROUP_ENTRANCE_WARNING_DIALOG,
        tabID: a,
      });
    }
    function q(a) {
      c("FantaDispatcher").dispatch({ type: h.CLOSE_TAB, tabID: a });
    }
    function r() {
      c("FantaDispatcher").dispatch({ type: h.CLOSE_ALL_TABS });
    }
    function s(a) {
      c("FantaDispatcher").dispatch({ type: h.CLOSE_AND_TAB_NEXT, tabID: a });
    }
    function t(a) {
      c("FantaDispatcher").dispatch({ type: h.DELETE_TAB, tabID: a });
    }
    function u(a) {
      c("FantaDispatcher").dispatch({ type: h.FOCUS_TAB, tabID: a });
    }
    function v(a) {
      c("FantaDispatcher").dispatch({ type: h.BLUR_TAB, tabID: a });
    }
    function w(a) {
      c("FantaDispatcher").dispatch({ type: h.HOVERED_TAB, tabID: a });
    }
    function x(a) {
      c("FantaDispatcher").dispatch({ type: h.UNHOVERED_TAB, tabID: a });
    }
    function y(a) {
      c("FantaDispatcher").dispatch({
        type: h.HIGHLIGHT_NEW_MESSAGE,
        tabId: a,
      });
    }
    function z(a) {
      c("FantaDispatcher").dispatch({
        type: h.UNHIGHLIGHT_NEW_MESSAGE,
        tabId: a,
      });
    }
    function A(a) {
      c("FantaDispatcher").dispatch({
        type: h.SET_ALLOWED_RAISED_TABS,
        allowedRaisedTabs: a,
      });
    }
    function B(a) {
      if (d("WorkplaceChatHelper").suppressChatIfActiveOnDesktop()) return;
      M(function () {
        a &&
          c("FantaDispatcher").dispatch({ type: h.LOAD_FROM_DATA, tabData: a });
      });
    }
    function C(a) {
      c("FantaDispatcher").dispatch({ type: h.FOCUS_NEXT_TAB, event: a });
    }
    function D(a) {
      c("FantaDispatcher").dispatch({ type: h.FOCUS_PREVIOUS_TAB, event: a });
    }
    function E(b, d, a) {
      c("FantaDispatcher").dispatch({
        type: h.SCROLL_BOTTOM_CHANGED,
        isScrolledToBottom: d,
        tabID: b,
        showUnseenMessages: a,
      });
    }
    function F(a, b) {
      c("FantaDispatcher").dispatch({
        type: h.JUMP_TO_MESSAGE,
        mid: b,
        tabID: a,
      });
    }
    function G(a) {
      c("FantaDispatcher").dispatch({ type: h.WIPE_JUMP_TO_MESSAGE, tabID: a });
    }
    function H(a, b) {
      c("FantaDispatcher").dispatch({
        type: h.SET_PAGE_INDICATOR_DESCRIPTION,
        tabID: a,
        description: b,
      });
    }
    function I(a) {
      c("FantaDispatcher").dispatch({
        type: h.CLEAR_PAGE_INDICATOR_DESCRIPTION,
        tabID: a,
      });
    }
    function J(a) {
      c("FantaDispatcher").dispatch({ type: h.SHOW_UNSEEN_MESSAGES, tabID: a });
    }
    function K(a, b) {
      c("FantaDispatcher").dispatch({
        type: h.SET_PERMANENT_URI,
        tabID: a,
        uri: b,
      });
    }
    function L(a, b) {
      c("FantaDispatcher").dispatch({
        type: h.CREATE_NEW_NAMED_GROUP_CHAT,
        tabID: a,
        tokens: b,
      });
    }
    function M(a) {
      c("ifRequired")(
        "FantaReducersGetMessages",
        function () {
          a();
        },
        function () {
          c("ifRequired")(
            "FantaAppStore",
            function (b) {
              c("Bootloader").loadModules(
                ["FantaReducersGetMessages"],
                function (c) {
                  b.addReducers(c), a();
                },
                "FantaTabActions"
              );
            },
            function () {
              a();
            }
          );
        }
      );
    }
    g.Types = h;
    g.openNewMessageTab = a;
    g.openTab = j;
    g.openInterstitialTab = b;
    g._tryLoadSlimApp = k;
    g._tryLoadSlimAppWithInterstitialData = l;
    g.replaceTab = e;
    g.minimizeTab = f;
    g.minimizeAllTabs = m;
    g.unminimizeTab = n;
    g.optInOpenTabWithBlockees = o;
    g.closeGroupEntranceWarningDialog = p;
    g.closeTab = q;
    g.closeAllTabs = r;
    g.closeAndTabNext = s;
    g.deleteTab = t;
    g.focusTab = u;
    g.blurTab = v;
    g.hoveredTab = w;
    g.unhoveredTab = x;
    g.highlightNewMessage = y;
    g.unhighlightNewMessage = z;
    g.setAllowedRaisedTabs = A;
    g.loadFromData = B;
    g.focusNextTab = C;
    g.focusPreviousTab = D;
    g.scrollBottomChanged = E;
    g.jumpToMessage = F;
    g.wipeJumpToMessage = G;
    g.setPageIndicatorDescription = H;
    g.clearPageIndicatorDescription = I;
    g.showUnseenMessages = J;
    g.setPermanentUri = K;
    g.createNewNamedGroupChat = L;
    g.dispatchOrBootloadGetMessages = M;
  },
  98
);
__d(
  "XReferer",
  ["Base64", "Cookie", "FBJSON", "URI", "setTimeoutAcrossTransitions"],
  function (a, b, c, d, e, f, g) {
    function a(a, b, d) {
      if (!d) {
        c("Cookie").set("x-referer", "");
        return;
      }
      a != null && (a = i(a));
      b != null && (b = i(b));
      var e = window.location.pathname + window.location.search;
      d = c("URI").getRequestURI();
      var f = d.getSubdomain();
      b != null && h(b, e, f);
      a != null &&
        c("setTimeoutAcrossTransitions")(function () {
          a != null && h(a, e, f);
        }, 0);
    }
    function h(a, b, e) {
      a = { r: a, h: b, s: e };
      b = c("Base64").encode(d("FBJSON").stringify(a));
      c("Cookie").set("x-referer", b);
    }
    function i(a) {
      var b = 1024;
      a && a.length > b && (a = a.substring(0, b) + "...");
      return a;
    }
    g.update = a;
    g._setCookie = h;
    g.truncatePath = i;
  },
  98
);
__d(
  "goOrReplace",
  ["Env", "URI", "isFacebookURI"],
  function (a, b, c, d, e, f, g) {
    function a(a, b, d) {
      b = new (c("URI"))(b);
      c("Env").isCQuick &&
        c("isFacebookURI")(b) &&
        b.addQueryData({
          cquick: c("Env").iframeKey,
          cquick_token: c("Env").iframeToken,
          ctarget: c("Env").iframeTarget,
        });
      b = b.toString();
      d ? a.replace(b) : a.href == b ? a.reload() : (a.href = b);
    }
    g["default"] = a;
  },
  98
);
__d(
  "HistoryManager",
  [
    "Env",
    "Event",
    "SprinkleConfig",
    "URI",
    "UserAgent_DEPRECATED",
    "XReferer",
    "emptyFunction",
    "goOrReplace",
    "isInIframe",
    "setIntervalAcrossTransitions",
  ],
  function (a, b, c, d, e, f) {
    var g,
      h,
      i = {
        history: null,
        current: 0,
        fragment: null,
        isInitialized: function () {
          return !!i._initialized;
        },
        init: function () {
          if (
            !(g || (g = b("Env"))).ALLOW_TRANSITION_IN_IFRAME &&
            b("isInIframe")()
          )
            return;
          if (i._initialized) return i;
          var a = new (h || (h = b("URI")))(window.location.href),
            c = a.getFragment() || "";
          c.charAt(0) === "!" && ((c = c.substr(1)), a.setFragment(c));
          Object.assign(i, {
            _initialized: !0,
            fragment: c,
            orig_fragment: c,
            history: [a],
            callbacks: [],
            lastChanged: Date.now(),
            canonical: new h("#"),
            user: 0,
            enabled: !0,
            debug: b("emptyFunction"),
          });
          if (window.history && window.history.pushState) {
            this.lastURI = document.URL;
            c = new (h || (h = b("URI")))(this.lastURI);
            a = c.getQueryData();
            a.__md__ = void 0;
            a.__xts__ = void 0;
            a.fb_dtsg_ag = void 0;
            a[b("SprinkleConfig").param_name] = void 0;
            this.lastURI = c.setQueryData(a).toString();
            try {
              window.history.state
                ? window.history.replaceState(
                    window.history.state,
                    null,
                    this.lastURI
                  )
                : window.history.replaceState(this.lastURI, null, this.lastURI);
            } catch (a) {
              if (!(a.number === -2147467259)) throw a;
            }
            b("Event").listen(window, "popstate", function (a) {
              var c = a && a.state && typeof a.state === "string";
              c &&
                i.lastURI != a.state &&
                ((i.lastURI = document.URL),
                (i.lastChanged = Date.now()),
                i.notify(
                  new (h || (h = b("URI")))(a.state)
                    .getUnqualifiedURI()
                    .toString()
                ));
            });
            (b("UserAgent_DEPRECATED").webkit() < 534 ||
              b("UserAgent_DEPRECATED").chrome() <= 13) &&
              (b("setIntervalAcrossTransitions")(i.checkURI, 42),
              i._updateRefererURI(this.lastURI));
            return i;
          }
          i._updateRefererURI(h.getRequestURI(!1));
          if (
            b("UserAgent_DEPRECATED").webkit() < 500 ||
            b("UserAgent_DEPRECATED").firefox() < 2
          ) {
            i.enabled = !1;
            return i;
          }
          "onhashchange" in window
            ? b("Event").listen(window, "hashchange", function () {
                window.setTimeout(i.checkURI.bind(i), 0);
              })
            : b("setIntervalAcrossTransitions")(i.checkURI, 42);
          return i;
        },
        registerURIHandler: function (a) {
          i.callbacks.push(a);
          return i;
        },
        setCanonicalLocation: function (a) {
          i.canonical = new (h || (h = b("URI")))(a);
          return i;
        },
        notify: function (a) {
          a == i.orig_fragment && (a = i.canonical.getFragment());
          for (var b = 0; b < i.callbacks.length; b++)
            try {
              if (i.callbacks[b](a)) return !0;
            } catch (a) {}
          return !1;
        },
        checkURI: function () {
          if (Date.now() - i.lastChanged < 400) return;
          if (window.history && window.history.pushState) {
            var a = new (h || (h = b("URI")))(document.URL)
                .removeQueryData("ref")
                .toString(),
              c = new h(i.lastURI).removeQueryData("ref").toString();
            a != c &&
              ((i.lastChanged = Date.now()),
              (i.lastURI = a),
              b("UserAgent_DEPRECATED").webkit() < 534 &&
                i._updateRefererURI(a),
              i.notify(
                new (h || (h = b("URI")))(a).getUnqualifiedURI().toString()
              ));
            return;
          }
          if (
            b("UserAgent_DEPRECATED").webkit() &&
            window.history.length == 200
          ) {
            i.warned || (i.warned = !0);
            return;
          }
          c = new (h || (h = b("URI")))(window.location.href).getFragment();
          c.charAt(0) == "!" && (c = c.substr(1));
          c = c.replace(/%23/g, "#");
          if (c != i.fragment.replace(/%23/g, "#")) {
            i.debug(
              [
                c,
                " vs ",
                i.fragment,
                "whl: ",
                window.history.length,
                "QHL: ",
                i.history.length,
              ].join(" ")
            );
            for (a = i.history.length - 1; a >= 0; --a)
              if (i.history[a].getFragment().replace(/%23/g, "#") == c) break;
            ++i.user;
            a >= 0 ? i.go(a - i.current) : i.go("#" + c);
            --i.user;
          }
        },
        _updateRefererURI: function (a) {
          a instanceof (h || (h = b("URI"))) && (a = a.toString()),
            b("XReferer").update(a, null, !0);
        },
        go: function (a, c, d) {
          if (window.history && window.history.pushState) {
            c || typeof a === "number";
            var e = new (h || (h = b("URI")))(a)
              .removeQueryData([
                "ref",
                "messaging_source",
                "ajaxpipe_fetch_stream",
                "fb_dtsg_ag",
                b("SprinkleConfig").param_name,
              ])
              .toString();
            i.lastChanged = Date.now();
            this.lastURI = e;
            d
              ? window.history.replaceState(a, null, e)
              : window.history.pushState(a, null, e);
            b("UserAgent_DEPRECATED").webkit() < 534 && i._updateRefererURI(a);
            return !1;
          }
          i.debug("go: " + a);
          c === void 0 && (c = !0);
          if (!i.enabled && !c) return !1;
          if (typeof a === "number") {
            if (!a) return !1;
            e = a + i.current;
            var f = Math.max(0, Math.min(i.history.length - 1, e));
            i.current = f;
            e = i.history[f].getFragment() || i.orig_fragment;
            e = new (h || (h = b("URI")))(e)
              .removeQueryData("ref")
              .getUnqualifiedURI()
              .toString();
            i.fragment = e;
            i.lastChanged = Date.now();
            i.user ||
              b("goOrReplace")(
                window.location,
                window.location.href.split("#")[0] + "#!" + e,
                d
              );
            c && i.notify(e);
            i._updateRefererURI(e);
            return !1;
          }
          a = new (h || (h = b("URI")))(a);
          a.getDomain() ==
            new (h || (h = b("URI")))(window.location.href).getDomain() &&
            (a = new (h || (h = b("URI")))("#" + a.getUnqualifiedURI()));
          f = i.history[i.current].getFragment();
          e = a.getFragment();
          if (
            e == f ||
            (f == i.orig_fragment && e == i.canonical.getFragment())
          ) {
            c && i.notify(e);
            i._updateRefererURI(e);
            return !1;
          }
          d && i.current--;
          f = i.history.length - i.current - 1;
          i.history.splice(i.current + 1, f);
          i.history.push(new h(a));
          return i.go(1, c, d);
        },
        getCurrentFragment: function () {
          var a = (h || (h = b("URI"))).getRequestURI(!1).getFragment();
          return a == i.orig_fragment ? i.canonical.getFragment() : a;
        },
      };
    e.exports = i;
  },
  null
);
__d(
  "LinkController",
  ["DataStore", "Event", "Parent", "removeFromArray", "trackReferrer"],
  function (a, b, c, d, e, f, g) {
    var h = "@@LinkController",
      i = [],
      j = [];
    function a(a) {
      i.push(a);
      return {
        remove: function () {
          return c("removeFromArray")(i, a);
        },
      };
    }
    function b(a) {
      j.push(a);
      return {
        remove: function () {
          return c("removeFromArray")(j, a);
        },
      };
    }
    function e(a) {
      a = a.getTarget();
      var b = d("Parent").byTag(a, "a");
      if (!(b instanceof HTMLAnchorElement)) return;
      var e = l(b);
      if (
        e == null ||
        e.trim() === "" ||
        n(a) ||
        d("DataStore").get(b, h) ||
        e.endsWith("#")
      )
        return;
      a = c("Event").listen(b, "click", function (a) {
        c("trackReferrer")(b, e),
          !b.rel && (!b.target || b.target === "_self") && !m(a) && k(b, a);
      });
      d("DataStore").set(b, h, a);
    }
    function k(a, b) {
      i.concat(j).every(function (c) {
        if (c(a, b) === !1) {
          b.prevent();
          return !1;
        }
        return !0;
      });
    }
    function l(a) {
      if (a && !a.rel) {
        a = a.getAttribute("href");
        if (a != null) {
          var b = a.match(/^(\w+):/);
          if (!b || b[1].match(/^http/i)) return a;
        }
      }
      return null;
    }
    function m(a) {
      return a.getModifiers().any || (a.which != null && a.which !== 1);
    }
    function n(a) {
      return a.nodeName === "INPUT" && a.type === "file";
    }
    c("Event").listen(
      document.documentElement,
      "mousedown",
      e,
      c("Event").Priority.URGENT
    );
    c("Event").listen(
      document.documentElement,
      "keydown",
      e,
      c("Event").Priority.URGENT
    );
    g.registerHandler = a;
    g.registerFallbackHandler = b;
  },
  98
);
__d(
  "PageTransitionPriorities",
  [],
  function (a, b, c, d, e, f) {
    a = 5;
    b = a + 1;
    c = b + 1;
    f.DEFAULT = a;
    f.LEFT_NAV = b;
    f.SOCIAL_SEARCH_DIALOG = c;
  },
  66
);
__d(
  "computeRelativeURI",
  ["URI", "isEmpty", "isFacebookURI"],
  function (a, b, c, d, e, f, g) {
    function h(a, b) {
      if (!b) return a;
      if (b.charAt(0) == "/") return b;
      var c = a.split("/").slice(0, -1);
      c[0] !== "";
      b.split("/").forEach(function (a) {
        a === "." ||
          (a === ".." ? c.length > 1 && (c = c.slice(0, -1)) : c.push(a));
      });
      return c.join("/");
    }
    function a(a, b) {
      var d = new (c("URI"))(),
        e = new (c("URI"))(a),
        f = new (c("URI"))(b);
      if (f.getDomain() && !c("isFacebookURI")(f)) return b;
      var g = e;
      a = ["Protocol", "Domain", "Port", "Path", "QueryData", "Fragment"];
      a.forEach(function (a) {
        var b = a === "Path" && g === e;
        b && d.setPath(h(e.getPath(), f.getPath()));
        c("isEmpty")(f["get" + a]()) || (g = f);
        b || d["set" + a](g["get" + a]());
      });
      return d;
    }
    g["default"] = a;
  },
  98
);
__d(
  "getReferrerURI",
  ["ErrorGuard", "URI", "isFacebookURI"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function b() {
      if (a.PageTransitions && a.PageTransitions.isInitialized())
        return a.PageTransitions.getReferrerURI();
      else {
        var b = c("ErrorGuard").applyWithGuard(
          function (a) {
            return c("URI").tryParseURI(a);
          },
          null,
          [document.referrer]
        );
        return b && c("isFacebookURI")(b) ? b : null;
      }
    }
    g["default"] = b;
  },
  98
);
__d(
  "PageTransitionsRegistrar",
  [
    "invariant",
    "DOMQuery",
    "Form",
    "LinkController",
    "PageTransitionPriorities",
    "Parent",
    "URI",
    "computeRelativeURI",
    "getReferrerURI",
    "goURI",
    "requireDeferred",
    "setTimeout",
    "setTimeoutAcrossTransitions",
  ],
  function (a, b, c, d, e, f, g, h) {
    var i = c("requireDeferred")("PageTransitions").__setRef(
      "PageTransitionsRegistrar"
    );
    c("setTimeout")(function () {
      i.onReady(function (a) {
        a && a._init && a._init();
      });
    }, 0);
    var j = [],
      k = [];
    e = {
      DELAY_HISTORY: "delay_history_PTR",
      registerHandler: function (a, b) {
        a != null || h(0, 5202),
          (b = b || d("PageTransitionPriorities").DEFAULT),
          j[b] || (j[b] = []),
          j[b].push(a);
      },
      removeHandler: function (a, b) {
        b = b || d("PageTransitionPriorities").DEFAULT;
        var c = -1;
        j[b] && (c = j[b].indexOf(a));
        c > -1 && j[b].splice(c, 1);
      },
      registerCompletionCallback: function (a) {
        k.push(a);
      },
      getMostRecentURI: n,
      getReferrerURI: c("getReferrerURI"),
      _getTransitionHandlers: function () {
        return j;
      },
      _getCompletionCallbacks: function () {
        return k;
      },
      _resetCompletionCallbacks: function () {
        k = [];
      },
      __onClick: e,
      __onSubmit: f,
    };
    var l = null;
    function b(a) {
      (l = a),
        c("setTimeoutAcrossTransitions")(function () {
          l = null;
        }, 0);
    }
    function e(a) {
      if (l) {
        if (!a.isDefaultPrevented()) {
          m(l);
          var b = l.getAttribute("href");
          b && c("goURI")(b);
        }
        a.kill();
      }
    }
    function m(a) {
      var b = a.getAttribute("href") || "",
        d = c("computeRelativeURI")(
          n().getQualifiedURI().toString(),
          b
        ).toString();
      b != d && a.setAttribute("href", d);
    }
    function f(a, b) {
      b = b;
      var e = a.getTarget();
      if (
        d("Form").getAttribute(e, "rel") ||
        d("Form").getAttribute(e, "target")
      )
        return;
      var f = new (c("URI"))(d("Form").getAttribute(e, "action"));
      f = c("computeRelativeURI")(n().toString(), f.toString());
      e.setAttribute("action", f.toString());
      if (
        (d("Form").getAttribute(e, "method") || "GET").toUpperCase() == "GET"
      ) {
        e = d("Form").serialize(e);
        b &&
          ((d("DOMQuery").isNodeOfType(b, "input") && b.type === "submit") ||
            (b = d("Parent").byTag(b, "button"))) &&
          b.name &&
          (e[b.name] = b.value);
        typeof f === "string" && (f = new (c("URI"))(f));
        c("goURI")(f.addQueryData(e));
        a.kill();
      }
    }
    d("LinkController").registerFallbackHandler(b);
    function n() {
      if (a.PageTransitions && a.PageTransitions.isInitialized())
        return a.PageTransitions.getMostRecentURI();
      else {
        var b = c("URI").getRequestURI(!1);
        b = b.getUnqualifiedURI();
        var d = new (c("URI"))(b).setFragment(""),
          e = b.getFragment();
        e.charAt(0) === "!" && d.toString() === e.substr(1) && (b = d);
        return b;
      }
    }
    f = e;
    g["default"] = f;
  },
  98
);
__d(
  "escapeJSQuotes",
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      return typeof a === "undefined" || a == null || !a.valueOf()
        ? ""
        : a
            .toString()
            .replace(/\\/g, "\\\\")
            .replace(/\n/g, "\\n")
            .replace(/\r/g, "\\r")
            .replace(/\"/g, "\\x22")
            .replace(/\'/g, "\\'")
            .replace(/</g, "\\x3c")
            .replace(/>/g, "\\x3e")
            .replace(/&/g, "\\x26");
    }
    f["default"] = a;
  },
  66
);
__d(
  "PageTransitionsBlue",
  [
    "fbt",
    "invariant",
    "Arbiter",
    "BlueCompatBroker",
    "BlueCompatRouter",
    "Bootloader",
    "DOMQuery",
    "DOMScroll",
    "Env",
    "ErrorGuard",
    "Event",
    "FbtResultBase",
    "HistoryManager",
    "LayerHideOnEscape",
    "PageHooks",
    "PageTransitionsConfig",
    "PageTransitionsRegistrar",
    "ScriptPath",
    "URI",
    "Vector",
    "areEqual",
    "clickRefAction",
    "escapeJSQuotes",
    "ge",
    "gkx",
    "goOrReplace",
    "isFacebookURI",
    "isInIframe",
    "react",
    "setTimeout",
    "uriIsRelativePath",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    var j = d("react"),
      k = [
        "cquick",
        "ctarget",
        "cquick_token",
        "mh_",
        "killabyte",
        "tfc_",
        "tfi_",
      ],
      l = {};
    function m(a, b) {
      a && (l[a.getUnqualifiedURI().toString()] = b);
    }
    function n(a) {
      return l[a.getUnqualifiedURI().toString()];
    }
    function o(a) {
      delete l[a.getUnqualifiedURI().toString()];
    }
    function p() {
      var a = {};
      window.location.search
        .slice(1)
        .split("&")
        .forEach(function (b) {
          b = b.split("=");
          var c = b[0];
          b = b[1];
          b = b === void 0 ? null : b;
          k.some(function (a) {
            return c.startsWith(a);
          }) && (a[c] = b);
        });
      return a;
    }
    var q = null,
      r = !1,
      s = new (c("URI"))(""),
      t = null,
      u = new (c("URI"))(),
      v = null,
      w = !1,
      x = !1,
      y = !1,
      z = {
        isInitialized: function () {
          return r;
        },
        init: function () {
          z._init();
        },
        _init: function () {
          if (c("isInIframe")()) return !1;
          if (r) return !0;
          var a = c("PageTransitionsRegistrar").getMostRecentURI();
          q = a;
          s = a;
          t = null;
          u = a;
          var b = c("ErrorGuard").applyWithGuard(
            function (a) {
              return c("URI").tryParseURI(a);
            },
            null,
            [document.referrer]
          );
          v = document.referrer && b && c("isFacebookURI")(b) ? b : null;
          r = !0;
          b = c("URI").getRequestURI(!1);
          b.getFragment().startsWith("/")
            ? (b = b.getFragment())
            : (b = a.toString());
          c("HistoryManager")
            .init()
            .setCanonicalLocation("#" + b)
            .registerURIHandler(z._historyManagerHandler);
          c("Event").listen(window, "scroll", function () {
            w || m(q, c("Vector").getScrollPosition());
          });
          return !0;
        },
        registerHandler: c("PageTransitionsRegistrar").registerHandler,
        removeHandler: c("PageTransitionsRegistrar").removeHandler,
        getCurrentURI: function (a) {
          a === void 0 && (a = !1);
          z._init();
          return !q && !a ? new (c("URI"))(s) : new (c("URI"))(q);
        },
        isTransitioning: function () {
          z._init();
          return !q;
        },
        getNextURI: function () {
          z._init();
          return u;
        },
        getNextReferrerURI: function () {
          z._init();
          return t;
        },
        getReferrerURI: function () {
          z._init();
          return v;
        },
        getMostRecentURI: function () {
          z._init();
          return new (c("URI"))(s);
        },
        go: function (a, b) {
          b === void 0 && (b = !1);
          if (c("BlueCompatRouter").goFragment(a)) {
            var d = new (c("URI"))(a);
            if (z.restoreScrollPosition(d)) {
              q = s = d;
              return;
            }
          }
          if (c("BlueCompatRouter").go(a, b)) return;
          z.goBase(a, b);
        },
        goBase: function (a, b) {
          b === void 0 && (b = !1);
          z._init();
          var d = p(),
            e = new (c("URI"))(a)
              .removeQueryData("quickling")
              .addQueryData(d)
              .getQualifiedURI();
          o(e);
          b ||
            c("clickRefAction")(
              "uri",
              { href: e.toString() },
              null,
              "INDIRECT"
            );
          z._loadPage(e, b, function (a) {
            a
              ? c("HistoryManager").go(e.toString(), !1, b)
              : c("goOrReplace")(window.location, e, b);
          });
        },
        _historyManagerHandler: function (a) {
          if (a.charAt(0) != "/") return !1;
          c("clickRefAction")("h", { href: a });
          d("ScriptPath").getClickPointInfo() ||
            d("ScriptPath").setClickPointInfo({ click: "back" });
          z._loadPage(new (c("URI"))(a), !0, function (b) {
            b || c("goOrReplace")(window.location, a, !0);
          });
          return !0;
        },
        _loadPage: function (a, b, e) {
          if (
            new (c("URI"))(a).getFragment() &&
            c("areEqual")(
              new (c("URI"))(a).setFragment("").getQualifiedURI(),
              new (c("URI"))(q).setFragment("").getQualifiedURI()
            )
          ) {
            c("Arbiter").inform("pre_page_fragment_transition", {
              from: new (c("URI"))(q).getFragment(),
              to: new (c("URI"))(a).getFragment(),
            });
            if (z.restoreScrollPosition(a)) {
              q = s = a;
              c("Arbiter").inform("page_fragment_transition", {
                fragment: new (c("URI"))(a).getFragment(),
              });
              e == null ? void 0 : e(!0);
              return;
            }
          }
          var f;
          q && (f = n(q));
          var g = function () {
              f && q && m(q, f);
              t = z.getMostRecentURI();
              q = null;
              u = a;
              f && d("DOMScroll").scrollTo(f, !1);
              w = !0;
              var g = z._handleTransition(a, b);
              e &&
                (g === c("PageTransitionsRegistrar").DELAY_HISTORY
                  ? c("setTimeout")(function () {
                      return e && e(g);
                    }, 0)
                  : e(g));
            },
            h = u;
          u = a;
          var i = c("PageHooks").runHooks("onbeforeleavehooks");
          u = h;
          i ? z._warnBeforeLeaving(i, g) : g();
        },
        _handleTransition: function (b, d) {
          window.onbeforeleavehooks = void 0;
          if (x || (!b.isSameOrigin() && !c("uriIsRelativePath")(b))) return !1;
          var e =
            c("PageTransitionsConfig").reloadOnBootloadError &&
            z._hasBootloadErrors();
          if (e) return !1;
          var f;
          e = a.AsyncRequest;
          e && (f = e.getLastID());
          c("Arbiter").inform("pre_page_transition", {
            from: z.getMostRecentURI(),
            to: b,
          });
          e = c("PageTransitionsRegistrar")._getTransitionHandlers();
          for (var g = e.length - 1; g >= 0; --g) {
            var h = e[g];
            if (!h) continue;
            for (var i = h.length - 1; i >= 0; --i) {
              var j = h[i](b, d);
              if (
                j === !0 ||
                j === c("PageTransitionsRegistrar").DELAY_HISTORY
              ) {
                var k = { sender: z, uri: b, id: f };
                try {
                  c("Arbiter").inform("page_transition", k);
                } catch (a) {}
                return j;
              } else h.splice(i, 1);
            }
          }
          return !1;
        },
        disableTransitions: function () {
          x = !0;
        },
        disableScrollAnimation: function () {
          y = !0;
        },
        _hasBootloadErrors: function () {
          return c("Bootloader").getErrorCount() > 0;
        },
        unifyURI: function () {
          z._init(), (q = s = u), (v = t);
        },
        transitionComplete: function (a) {
          a === void 0 && (a = !1);
          z._init();
          w = !1;
          z._executeCompletionCallbacks();
          z.unifyURI();
          a || (q && z.restoreScrollPosition(q));
          try {
            document.activeElement &&
              document.activeElement.nodeName === "A" &&
              document.activeElement.blur();
          } catch (a) {}
        },
        _executeCompletionCallbacks: function () {
          var a = c("PageTransitionsRegistrar")._getCompletionCallbacks();
          a.length > 0 &&
            (c("PageTransitionsRegistrar")._resetCompletionCallbacks(),
            a.forEach(function (a) {
              return a();
            }));
        },
        registerCompletionCallback: c("PageTransitionsRegistrar")
          .registerCompletionCallback,
        rewriteCurrentURI: function (a, b) {
          z._init();
          var d = c("PageTransitionsRegistrar")._getTransitionHandlers(),
            e = d.length || 1,
            f = !1;
          c("PageTransitionsRegistrar").registerHandler(function () {
            if (
              a &&
              a.toString() ==
                z.getMostRecentURI().getUnqualifiedURI().toString()
            ) {
              z.transitionComplete();
              return !0;
            }
            f = !0;
          }, e);
          z.go(b, !0);
          (d.length === e + 1 && d[e].length === (f ? 0 : 1)) || i(0, 1302);
          d.length = e;
        },
        _warnBeforeLeaving: function (a, b) {
          c("Bootloader").loadModules(
            [
              "DialogX",
              "XUIDialogTitle.react",
              "XUIDialogBody.react",
              "XUIDialogButton.react",
              "XUIDialogFooter.react",
              "XUIGrayText.react",
            ],
            function (d, e, f, g, i, k) {
              var l =
                typeof a === "string" ||
                a instanceof String ||
                a instanceof c("FbtResultBase")
                  ? {
                      body: a,
                      highlightStay: !1,
                      leaveButtonText: h._("Quitter cette page"),
                      showCloseButton: !1,
                      stayButtonText: h._("Rester sur cette page"),
                      title: h._("Quitter la page\u00a0?"),
                    }
                  : a;
              e = j.jsx(e, {
                showCloseButton: l.showCloseButton,
                children: l.title,
              });
              g = l.highlightStay
                ? [
                    j.jsx(
                      g,
                      { action: "confirm", label: l.leaveButtonText },
                      "confirm"
                    ),
                    j.jsx(
                      g,
                      {
                        action: "cancel",
                        use: "confirm",
                        label: l.stayButtonText,
                        className: "autofocus",
                      },
                      "cancel"
                    ),
                  ]
                : [
                    j.jsx(
                      g,
                      { action: "cancel", label: l.stayButtonText },
                      "cancel"
                    ),
                    j.jsx(
                      g,
                      {
                        action: "confirm",
                        use: "confirm",
                        label: l.leaveButtonText,
                        className: "autofocus",
                      },
                      "confirm"
                    ),
                  ];
              var m = new d(
                { width: 450, addedBehaviors: [c("LayerHideOnEscape")] },
                j.jsxs("div", {
                  children: [
                    e,
                    j.jsx(f, {
                      children: j.jsx(k, {
                        shade: "medium",
                        size: "medium",
                        children: l.body,
                      }),
                    }),
                    j.jsx(i, { children: g }),
                  ],
                })
              );
              m.subscribe("confirm", function () {
                m.hide(), b();
              });
              m.show();
            },
            "PageTransitionsBlue"
          );
        },
        restoreScrollPosition: function (a) {
          var b = n(a);
          if (b) {
            d("DOMScroll").scrollTo(b, !1);
            return !0;
          }
          function e(a) {
            if (!a) return null;
            var b = "a[name='" + c("escapeJSQuotes")(a) + "']";
            return d("DOMQuery").scry(document.body, b)[0] || c("ge")(a);
          }
          b = e(new (c("URI"))(a).getFragment());
          if (b) {
            e = !y;
            d("DOMScroll").scrollTo(b, e);
            return !0;
          }
          return !1;
        },
      };
    !c("gkx")("524") &&
      c("Env").isCQuick &&
      (d("BlueCompatBroker").init(),
      d("BlueCompatBroker").register("transitionpage", function (b) {
        b = new (c("URI"))(
          d("BlueCompatBroker").getMessageEventString(b, "uri")
        );
        var e = new (c("URI"))(window.location.href);
        b.removeQueryData("ctarget");
        e.removeQueryData("ctarget");
        if (e.toString() === b.toString()) return;
        e = a.AsyncRequest;
        e && e.ignoreUpdate();
        z.goBase(b, !1);
      }));
    b = z;
    a.PageTransitions = z;
    g["default"] = b;
  },
  98
);
__d(
  "CustomCTALogger",
  ["Banzai"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      logVital: function (a) {
        b("Banzai").post("page_custom_cta_logger", a, b("Banzai").VITAL);
      },
      log: function (a) {
        b("Banzai").post("page_custom_cta_logger", a);
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "PageCallToActionRef",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      NONE: "None",
      MOBILE_PAGE_PRESENCE_CALL_TO_ACTION:
        "mobile_page_presence_call_to_action",
      COVER_PHOTO_SURFACE: "coverPhoto",
      HOVER_CARD_SURFACE: "hoverCard",
      PAGE_PLUGIN_SURFACE: "pagePlugin",
      ADMIN_MENU_TEST_LINK: "adminMenuTestLink",
      PAGE_PRESENCE_LHS_CARD: "pagePresenceLhsCard",
      SEARCH_ENTITY_CARD: "searchEntityCard",
      PROSERVICES_SEARCH_ENTITY_CARD: "proservices_search_entity_card",
      FEED_STORY: "feed_story",
      FEED_STORY_SEARCH: "feed_story_search",
      FEED_STORY_ATTACHMENT: "feed_story_attachment",
      PAGES_SAVED_SECTION: "pages_saved_section",
      PAGES_SHARE_ATTACHMENT: "pages_share_attachment",
      PAGES_MINUTIAE_ATTACHMENT: "pages_minutiae_attachment",
      PAGES_ACTIONS_UNIT_SURFACE: "pages_actions_unit",
      PAGES_ACTION_BAR_CHANNEL: "pages_action_bar_channel",
      PAGES_COVER_AREA_SURFACE: "pages_cover_area_surface",
      PAGES_SERVICES_SURFACE: "pages_services_surface",
      PAGE_ONBOARDING_FLOW: "page_onboarding_flow",
      PAGE_SETTING: "page_setting",
      PAGE_WA_RESOURCES_HUB: "page_wa_resources_hub",
      CTA_HOVER_CARD_SURFACE: "ctaHoverCard",
      DYNAMIC_HOVER_CARD_SURFACE: "dynamicHoverCard",
      PAGES_EDIT_PAGE_SURFACE: "pages_edit_page_surface",
      UNIFIED_INBOX_WA_ONBOARDING: "unified_inbox_wa_onboarding",
      CITY_HUB_SOCIAL_MODULE: "city_hub_social_module",
      CITY_HUB_LOCAL_MODULE: "city_hub_local_module",
      CITY_HUB_CATEGORY_MODULE: "city_hub_category_module",
      CITY_HUB_PYML_MODULE: "city_hub_pyml_module",
      BIZ_INFO_CENTER: "biz_info_center",
      UNOWNED_PAGE_COVER: "unowned_page_cover",
      SERP_TOP: "serp_top",
      SERP_PAGES: "serp_pages",
      SERP_PLACES: "serp_places",
      LED_FEED_UNIT: "led_feed_unit",
      FEED_PAGE_ATTACHMENT: "feed_page_attachment",
      GROUPS_RHC: "groups_rhc",
      EVENT_PERMALINK: "event_permalink",
      SERVICES_INCENTIVE_PAGE_SURFACE: "services_incentive_page_surface",
      SERVICES_HIGH_CONFIDENCE_MODULE: "services_high_confidence_module",
      SERVICES_SEO_PAGES: "services_seo_pages",
      INCENTIVE_ADMIN_JOURNEY_ADD_CTA: "incentive_admin_journey_add_cta",
    });
    f["default"] = a;
  },
  66
);
__d(
  "PageCallToActionButton.react",
  [
    "cx",
    "PageCallToActionRef",
    "PagesButton.react",
    "XUIButton.react",
    "joinClasses",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var d = b.prototype;
      d.render = function () {
        var a = this.props.className,
          b = this.props.icon,
          d = this.props.label,
          e = this.props.testID;
        if (!d) return null;
        if (this.$1())
          return i.jsx("div", {
            className: a,
            "data-hovercard": this.props.hovercardURL,
            "data-testid": void 0,
            onClick: this.props.onClick,
            onMouseEnter: this.props.onMouseEnter,
            onMouseLeave: this.props.onMouseLeave,
            ref: this.props.ref,
            role: "button",
            tabIndex: "0",
            children: d,
          });
        if (this.$2()) {
          return i.jsx(c("PagesButton.react"), {
            className: a,
            color: "fbblue",
            "data-hovercard": this.props.hovercardURL,
            "data-testid": void 0,
            disabled:
              (e = (e = this.props) == null ? void 0 : e.disabled) != null
                ? e
                : !1,
            fill: !0,
            image: this.props.displayIconInPagesButton
              ? this.props.icon
              : void 0,
            label: d,
            onClick: this.props.onClick,
            onMouseEnter: this.props.onMouseEnter,
            onMouseLeave: this.props.onMouseLeave,
            ref: this.props.ref,
            slim:
              this.props.surface ===
              c("PageCallToActionRef").PAGES_ACTIONS_UNIT_SURFACE,
          });
        }
        this.$3()
          ? (a = c("joinClasses")("_4jy3 _51sy", a))
          : this.props.surface === c("PageCallToActionRef").LED_FEED_UNIT
          ? (a = c("joinClasses")("_4jy4 _51sy", a))
          : this.props.surface ===
              c("PageCallToActionRef").PAGES_ACTION_BAR_CHANNEL &&
            this.props.label === "Start Order"
          ? (a = c("joinClasses")("_4jy4", a))
          : this.$4() || (a = c("joinClasses")("_4jy4 _9c6", a));
        if (
          this.props.surface === c("PageCallToActionRef").UNOWNED_PAGE_COVER
        ) {
          a = c("joinClasses")("_2hqv", a);
          return i.jsx(c("XUIButton.react"), {
            className: a,
            "data-hovercard": this.props.hovercardURL,
            "data-testid": void 0,
            label: d,
            onClick: this.props.onClick,
            onMouseEnter: this.props.onMouseEnter,
            onMouseLeave: this.props.onMouseLeave,
            ref: this.props.ref,
            use: "confirm",
          });
        }
        this.props.surface ===
          c("PageCallToActionRef").PAGES_COVER_AREA_SURFACE && (b = null);
        if (this.props.surface === c("PageCallToActionRef").GROUPS_RHC) {
          a = c("joinClasses")("_39y5", a);
          return i.jsx(c("XUIButton.react"), {
            className: a,
            "data-hovercard": this.props.hovercardURL,
            "data-testid": void 0,
            image: b,
            label: d,
            onClick: this.props.onClick,
            onMouseEnter: this.props.onMouseEnter,
            onMouseLeave: this.props.onMouseLeave,
            ref: this.props.ref,
            use: "confirm",
          });
        }
        return i.jsx(c("XUIButton.react"), {
          className: a ? a : "",
          "data-hovercard": this.props.hovercardURL,
          "data-testid": void 0,
          image: b,
          label: d,
          onClick: this.props.onClick,
          onMouseEnter: this.props.onMouseEnter,
          onMouseLeave: this.props.onMouseLeave,
          ref: this.props.ref,
          size: "large",
        });
      };
      d.$4 = function () {
        return new Set([
          c("PageCallToActionRef").PAGES_ACTION_BAR_CHANNEL,
          c("PageCallToActionRef").PAGES_COVER_AREA_SURFACE,
          c("PageCallToActionRef").GROUPS_RHC,
        ]).has(this.props.surface);
      };
      d.$3 = function () {
        return new Set([
          c("PageCallToActionRef").FEED_STORY_SEARCH,
          c("PageCallToActionRef").FEED_STORY_ATTACHMENT,
          c("PageCallToActionRef").HOVER_CARD_SURFACE,
          c("PageCallToActionRef").PAGE_PLUGIN_SURFACE,
          c("PageCallToActionRef").SERVICES_SEO_PAGES,
          c("PageCallToActionRef").SEARCH_ENTITY_CARD,
          c("PageCallToActionRef").PAGES_SAVED_SECTION,
          c("PageCallToActionRef").PAGES_SHARE_ATTACHMENT,
          c("PageCallToActionRef").PAGES_MINUTIAE_ATTACHMENT,
        ]).has(this.props.surface);
      };
      d.$1 = function () {
        return new Set([c("PageCallToActionRef").ADMIN_MENU_TEST_LINK]).has(
          this.props.surface
        );
      };
      d.$2 = function () {
        return new Set([
          c("PageCallToActionRef").PAGE_PRESENCE_LHS_CARD,
          c("PageCallToActionRef").PAGES_ACTIONS_UNIT_SURFACE,
          c("PageCallToActionRef").DYNAMIC_HOVER_CARD_SURFACE,
        ]).has(this.props.surface);
      };
      return b;
    })(i.Component);
    g["default"] = a;
  },
  98
);
__d(
  "PageCallToActionButtonActionTypes",
  ["keyMirrorRecursive"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("keyMirrorRecursive")({
      DISABLE_AUTO_OPEN: "",
      SET_LOADING_MODE: "",
      UNIT_DATA_LOADED: "",
    });
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "ExplicitRegistrationReactDispatcher",
  ["ExplicitRegistrationDispatcher", "ReactDOMComet"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var c = b.prototype;
      c.dispatch = function (b) {
        var c = this;
        d("ReactDOMComet").unstable_batchedUpdates(function () {
          a.prototype.dispatch.call(c, b);
        });
      };
      return b;
    })(c("ExplicitRegistrationDispatcher"));
    g["default"] = a;
  },
  98
);
__d(
  "PageCallToActionDispatcher",
  ["ExplicitRegistrationReactDispatcher"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = new (c("ExplicitRegistrationReactDispatcher"))({ strict: !0 });
    g["default"] = a;
  },
  98
);
__d(
  "PageCallToActionButtonActions",
  ["PageCallToActionButtonActionTypes", "PageCallToActionDispatcher"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      c("PageCallToActionDispatcher").dispatch({
        type: c("PageCallToActionButtonActionTypes").DISABLE_AUTO_OPEN,
        ctaID: a,
      });
    }
    function b(a, b) {
      c("PageCallToActionDispatcher").dispatch({
        type: c("PageCallToActionButtonActionTypes").SET_LOADING_MODE,
        ctaID: a,
        data: { loading: b },
      });
    }
    function d(a, b) {
      c("PageCallToActionDispatcher").dispatch({
        type: c("PageCallToActionButtonActionTypes").UNIT_DATA_LOADED,
        ctaID: a,
        data: babelHelpers["extends"]({}, b),
      });
    }
    g.disableAutoOpen = a;
    g.setLoadingMode = b;
    g.setUnitData = d;
  },
  98
);
__d(
  "fbglyph",
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      throw new Error(
        "fbglyph(" + JSON.stringify(a) + "): Unexpected fbglyph reference."
      );
    }
    f["default"] = a;
  },
  66
);
__d(
  "PageCallToActionIcon",
  ["ix"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = { SMALL: "16", MEDIUM: "20" };
    function a(a, b) {
      b === void 0 && (b = i.SMALL);
      switch (a) {
        case "BOOK_APPOINTMENT":
          return b === i.MEDIUM ? h("142071") : h("122846");
        case "BOOK_NOW":
          return b === i.MEDIUM ? h("141741") : h("122516");
        case "BUY_TICKETS":
          return b === i.MEDIUM ? h("142887") : h("123662");
        case "CALL_NOW":
          return b === i.MEDIUM ? h("142589") : h("123364");
        case "CONTACT_US":
          return b === i.MEDIUM ? h("142068") : h("122843");
        case "DONATE_NOW":
          return b === i.MEDIUM ? h("142329") : h("123104");
        case "EMAIL":
          return b === i.MEDIUM ? h("142068") : h("122843");
        case "GET_DIRECTIONS":
          return b === i.MEDIUM ? h("142032") : h("122807");
        case "GET_OFFER":
          return b === i.MEDIUM ? h("142537") : h("123312");
        case "GET_EVENT_TICKETS":
          return b === i.MEDIUM ? h("142887") : h("123662");
        case "LEARN_MORE":
          return b === i.MEDIUM ? h("142362") : h("123137");
        case "LISTEN":
          return b === i.MEDIUM ? h("142506") : h("123281");
        case "MAKE_RESERVATION":
          return b === i.MEDIUM ? h("141741") : h("122516");
        case "MESSAGE":
          return b === i.MEDIUM ? h("142472") : h("123247");
        case "OPEN_APP":
          return b === i.MEDIUM ? h("141517") : h("122292");
        case "ORDER_NOW":
          return b === i.MEDIUM ? h("142172") : h("122947");
        case "PLAY_MUSIC":
          return b === i.MEDIUM ? h("142506") : h("123281");
        case "PLAY_NOW":
          return b === i.MEDIUM ? h("142246") : h("123021");
        case "REQUEST_QUOTE":
          return b === i.MEDIUM ? h("142670") : h("123445");
        case "REQUEST_APPOINTMENT":
          return b === i.MEDIUM ? h("141741") : h("122516");
        case "SHOP_NOW":
          return b === i.MEDIUM ? h("142794") : h("123569");
        case "SIGN_UP":
          return b === i.MEDIUM ? h("142575") : h("123350");
        case "WATCH_NOW":
          return b === i.MEDIUM ? h("142967") : h("123742");
        case "WOODHENGE_SUPPORT":
          return h("206913");
      }
      return null;
    }
    g.get = a;
  },
  98
);
__d(
  "OrganicIntakeFormMutationUtils",
  [
    "OrganicIntakeFormMutationUtilsMaybeTriggerFormMutation.graphql",
    "OrganicIntakeFormMutationUtilsTriggerFormMutation.graphql",
    "Promise",
    "RelayFBEnvironment",
    "RelayModern",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j =
        h !== void 0
          ? h
          : (h = b(
              "OrganicIntakeFormMutationUtilsTriggerFormMutation.graphql"
            )),
      k =
        i !== void 0
          ? i
          : (i = b(
              "OrganicIntakeFormMutationUtilsMaybeTriggerFormMutation.graphql"
            ));
    function a(a, e, f) {
      return new (b("Promise"))(function (a, b) {
        d("RelayModern").commitMutation(c("RelayFBEnvironment"), {
          mutation: j,
          variables: { input: { page_id: e, referrer_ui_component: f } },
          onCompleted: function (c, d) {
            d ? b() : a();
          },
        });
      });
    }
    function e(a, e) {
      return new (b("Promise"))(function (a, b) {
        d("RelayModern").commitMutation(c("RelayFBEnvironment"), {
          mutation: k,
          variables: {
            input: { page_id: e, referrer_ui_component: "message" },
          },
          onCompleted: function (c, d) {
            d ? b() : a();
          },
        });
      });
    }
    g.triggerOrganicIntakeForm = a;
    g.maybeTriggerOrganicIntakeForm = e;
  },
  98
);
__d(
  "LayoutColumn.react",
  ["cx", "joinClasses", "react"],
  function (a, b, c, d, e, f, g, h) {
    var i = d("react");
    function a(a, b) {
      var d = a.className,
        e = a.children;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "className",
        "children",
      ]);
      return i.jsx(
        "div",
        babelHelpers["extends"]({ ref: b }, a, {
          className: c("joinClasses")(d, "_4bl7"),
          children: e,
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = i.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "LayoutFillColumn.react",
  ["cx", "joinClasses", "react"],
  function (a, b, c, d, e, f, g, h) {
    var i = d("react");
    function a(a, b) {
      var d = a.className,
        e = a.children;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "className",
        "children",
      ]);
      return i.jsx(
        "div",
        babelHelpers["extends"]({ ref: b }, a, {
          className: c("joinClasses")(d, "_4bl9"),
          children: e,
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = i.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "Layout.react",
  [
    "cx",
    "LayoutColumn.react",
    "LayoutFillColumn.react",
    "joinClasses",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    var i = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var d = b.prototype;
      d.render = function () {
        var a = !1,
          d = !1,
          e = this.props,
          f = e.children,
          g = e.className;
        e = babelHelpers.objectWithoutPropertiesLoose(e, [
          "children",
          "className",
        ]);
        i.Children.forEach(f, function (c) {
          if (!c) return;
          c.type === b.FillColumn ? (d = !0) : d && (a = !0);
        });
        return i.jsx(
          "div",
          babelHelpers["extends"]({}, e, {
            className: c("joinClasses")(g, a ? "_5aj7" : "clearfix _ikh"),
            children: f,
          })
        );
      };
      return b;
    })(i.Component);
    a.Column = c("LayoutColumn.react");
    a.FillColumn = c("LayoutFillColumn.react");
    g["default"] = a;
  },
  98
);
__d(
  "PagesLoggerEventEnum",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      CLICK: "click",
      CREATE: "create",
      DELETE: "delete",
      DRAG: "drag",
      HOVER: "hover",
      IMPRESSION: "impression",
      RECEIVE_REQUEST: "receive_request",
      RECEIVE_RESPONSE: "receive_response",
      SAVE: "save",
      SCROLL: "scroll",
      SEND_REQUEST: "send_request",
      SEND_RESPONSE: "send_response",
      UNSAVE: "unsave",
      UPDATE: "update",
    });
    f["default"] = a;
  },
  66
);
__d(
  "PagesTypedLogger",
  ["Banzai", "GeneratedLoggerUtils", "nullthrows"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a() {
        this.$1 = {};
      }
      var c = a.prototype;
      c.log = function (a) {
        b("GeneratedLoggerUtils").log(
          "logger:PagesLoggerConfig",
          this.$1,
          b("Banzai").BASIC,
          a
        );
      };
      c.logVital = function (a) {
        b("GeneratedLoggerUtils").log(
          "logger:PagesLoggerConfig",
          this.$1,
          b("Banzai").VITAL,
          a
        );
      };
      c.logImmediately = function (a) {
        b("GeneratedLoggerUtils").log(
          "logger:PagesLoggerConfig",
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
      c.setConnectionClass = function (a) {
        this.$1.connection_class = a;
        return this;
      };
      c.setEvent = function (a) {
        this.$1.event = a;
        return this;
      };
      c.setEventLocation = function (a) {
        this.$1.event_location = a;
        return this;
      };
      c.setEventTarget = function (a) {
        this.$1.event_target = a;
        return this;
      };
      c.setLogSource = function (a) {
        this.$1.log_source = a;
        return this;
      };
      c.setNavAttributionIDV2Key = function (a) {
        this.$1.nav_attribution_id_v2_key = a;
        return this;
      };
      c.setPageID = function (a) {
        this.$1.page_id = a;
        return this;
      };
      c.setRawClientTime = function (a) {
        this.$1.raw_client_time = a;
        return this;
      };
      c.setSessionid = function (a) {
        this.$1.sessionid = a;
        return this;
      };
      c.setTags = function (a) {
        this.$1.tags = b("GeneratedLoggerUtils").serializeVector(a);
        return this;
      };
      c.updateExtraData = function (a) {
        a = b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));
        b("GeneratedLoggerUtils").checkExtraDataFieldNames(a, g);
        this.$1 = babelHelpers["extends"]({}, this.$1, a);
        return this;
      };
      c.addToExtraData = function (a, b) {
        var c = {};
        c[a] = b;
        return this.updateExtraData(c);
      };
      return a;
    })();
    var g = {
      connection_class: !0,
      event: !0,
      event_location: !0,
      event_target: !0,
      log_source: !0,
      nav_attribution_id_v2_key: !0,
      page_id: !0,
      raw_client_time: !0,
      sessionid: !0,
      tags: !0,
    };
    f["default"] = a;
  },
  66
);
__d(
  "PagesLogger",
  ["PagesLoggerEventEnum", "PagesTypedLogger"],
  function (a, b, c, d, e, f) {
    var g = "extra_data_",
      h = {
        log: function (a, c, d, e, f, h) {
          e === void 0 && (e = null);
          f === void 0 && (f = []);
          var i = {},
            j = h || {};
          Object.keys(j || {}).forEach(function (a) {
            var b = j[a];
            (b instanceof Array || b instanceof Object) &&
              (b = JSON.stringify(b));
            i[g + a] = b;
          });
          new (b("PagesTypedLogger"))()
            .setPageID(a)
            .setEvent(c)
            .setEventTarget(d)
            .setEventLocation(e)
            .setLogSource("pages_logger")
            .setTags(f)
            .updateExtraData(i)
            .log();
        },
        registerLogOnClick: function (a, c, d, e, f, g) {
          e === void 0 && (e = null),
            f === void 0 && (f = []),
            g === void 0 && (g = {}),
            a.addEventListener("click", function () {
              h.log(c, b("PagesLoggerEventEnum").CLICK, d, e, f, g);
            });
        },
      };
    e.exports = h;
  },
  null
);
__d(
  "PagesLoggerEventTargetEnum",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      ABOUT_TAB: "about_tab",
      ACCEPT_INLINE_PAGE_INVITE: "accept_inline_page_invite",
      ACTOR_FRAMEWORK: "actor_framework",
      ADMIN_ADS_MANAGER: "admin_ads_manager",
      ADMIN_BLOOD_DONATIONS: "admin_blood_donations",
      ADMIN_BONUSES: "admin_bonuses",
      ADMIN_CHECKINS: "admin_checkins",
      ADMIN_CONSUMPTION_FEED: "admin_consumption_feed",
      ADMIN_EVENTS: "admin_events",
      ADMIN_GROUPS: "admin_groups",
      ADMIN_INSIGHTS: "admin_insights",
      ADMIN_INVENTORY: "admin_inventory",
      ADMIN_JOBS: "admin_jobs",
      ADMIN_JOURNEY_CARD: "admin_journey_card",
      ADMIN_LIVE_SHOPPING: "admin_live_shopping",
      ADMIN_MENTIONS: "admin_mentions",
      ADMIN_MESSAGE_CARD: "admin_message_card",
      ADMIN_MESSAGES: "admin_messages",
      ADMIN_MONETIZATION: "admin_monetization",
      ADMIN_NEWS_FEED: "admin_news_feed",
      ADMIN_OFFERS: "admin_offers",
      ADMIN_ORDERS: "admin_orders",
      ADMIN_PAGE_INBOX_SURFACE: "admin_page_inbox_surface",
      ADMIN_PAGE_SWITCHER: "admin_page_switcher",
      ADMIN_PERMALINK_VIEW: "admin_permalink_view",
      ADMIN_REVIEWS: "admin_reviews",
      ADMIN_REWARDS: "admin_rewards",
      ADMIN_SHARES: "admin_shares",
      ADMIN_SHOPS: "admin_shops",
      ADMIN_TAB: "admin_tab",
      ADS_CTA: "ads_cta",
      ADS_OPTION: "ads_option",
      APPOINTMENT_CALENDAR: "appointment_calendar",
      BIZAPP_HOME_HEADER: "bizapp_home_header",
      BIZAPP_TAB: "bizapp_tab",
      BIZWEB_TAB_ITEM: "bizweb_tab_item",
      BUSINESS_FYI: "business_fyi",
      CHAT_EXTENSION: "chat_extension",
      CHOOSE_CTA_LIST_BUTTON: "choose_cta_list_button",
      COMMENT_MESSAGE_BUTTON: "comment_message_button",
      COMPOSER_BUTTON: "composer_button",
      COMPOSER_CARD: "composer_card",
      CONFIRM_APPLY_PAGE_TEMPLATE_BUTTON: "confirm_apply_page_template_button",
      CONTENT_CARD: "content_card",
      CONTENT_CARD_FOOTER: "content_card_footer",
      CONTENT_CARD_HEADER_LINK: "content_card_header_link",
      CONTENT_LIST_VIEW: "content_list_view",
      CONTENT_OPTIMIZER: "content_optimizer",
      CREATE_ALBUM: "create_album",
      CREATE_PAGE: "create_page",
      CREATE_PAGE_BUTTON: "create_page_button",
      DECLINE_INLINE_PAGE_INVITE: "decline_inline_page_invite",
      EDIT_BUTTON: "edit_button",
      EDIT_PAGE_INFO: "edit_page_info",
      EDIT_PAGE_INFO_WHATSAPP_TAB: "edit_page_info_whatsapp_tab",
      EDIT_PAGE_TEMPLATE_ROW: "edit_page_template_row",
      EDIT_SETTINGS: "edit_settings",
      FACEBOOK_WIFI: "facebook_wifi",
      FAN_INVITE_EMAIL: "fan_invite_email",
      FAN_SUBSCRIPTION_SETTINGS: "fan_subscription_settings",
      FAQ_TAB: "faq_tab",
      FEED_CTA: "feed_cta",
      FEED_PAGE_ATTACHMENT: "feed_page_attachment",
      FEED_PAGE_COMMENT_ATTACHMENT: "feed_page_comment_attachment",
      FILTER_MESSAGES_BUTTON: "filter_messages_button",
      FILTER_ROW_ITEM: "filter_row_item",
      FOLLOW_UP_MESSAGE: "follow_up_message",
      FOOD_DRINK_COMPOSER_INTERCEPT: "food_drink_composer_intercept",
      GET_NOTIFICATION: "get_notification",
      GIFT_CARD_COMPOSER_SPROUT: "gift_card_composer_sprout",
      GIFT_CARD_POST_ATTACHMENT: "gift_card_post_attachment",
      INTERESTED_BUTTON: "interested_button",
      INVITE_FRIENDS_LIKE_PAGE: "invite_friends_like_page",
      LAUNCHPAD_MORE_BUTTON: "launchpad_more_button",
      LAUNCHPOINT_CARD: "launchpoint_card",
      LAUNCHPOINT_HEADER: "launchpoint_header",
      LAUNCHPOINT_HIGHLIGHT_V2: "launchpoint_highlight_v2",
      LAUNCHPOINT_MORE_BUTTON: "launchpoint_more_button",
      LEAVE_ADMIN_SURFACE: "leave_admin_surface",
      LOAD_ADMIN_SURFACE: "load_admin_surface",
      MAKE_POST: "make_post",
      MESSAGE_FANTA_TAB_CLOSE: "message_fanta_tab_close",
      MESSAGES_VIEW_INBOX: "messages_view_inbox",
      MESSENGER_ABOUT_BUTTON: "messenger_about_button",
      MESSENGER_ATTACHMENT: "messenger_attachment",
      MESSENGER_LOCAL_PLACE_PICKER: "messenger_local_place_picker",
      MESSENGER_LOCAL_PLACE_PICKER_RESULT_ROW:
        "messenger_local_place_picker_result_row",
      MESSENGER_LOCAL_PLACE_PICKER_SEARCH_RESULTS:
        "messenger_local_place_picker_search_results",
      MESSENGER_LOCAL_PLACE_PICKER_SHARE: "messenger_local_place_picker_share",
      MESSENGER_ONE_CLICK_MESSAGE_BUTTON: "messenger_one_click_message_button",
      MESSENGER_ONE_CLICK_MESSAGE_SETTING:
        "messenger_one_click_message_setting",
      MESSENGER_PAGE_NOTIFICATION_TOGGLE: "messenger_page_notification_toggle",
      MESSENGER_PAGE_PROFILE_SHARE_BUTTON:
        "messenger_page_profile_share_button",
      MESSENGER_URL_BUTTON: "messenger_url_button",
      MORE_BUTTON: "more_button",
      MORE_SHARE_OPTIONS: "more_share_options",
      MOVIE_SHOWTIMES_CARD: "movie_showtimes_card",
      MSITE_MESSAGE_BUBBLE: "msite_message_bubble",
      MSITE_SERVICES_THREAD_INTENT_CTA: "msite_services_thread_intent_cta",
      MULTI_ADMIN_ASSIGNMENT: "multi_admin_assignment",
      NEW_ACTION_PROMOTION: "new_action_promotion",
      NOTIFICATION_MUTE: "notification_mute",
      NT_PAGE_ADMIN_TIPS: "nt_page_admin_tips",
      NT_PAGE_ADMIN_TIPS_XOUT: "nt_page_admin_tips_xout",
      ONE_CLICK_SUBSRIBE: "one_click_subsribe",
      OPEN_CAMERA: "open_camera",
      OPEN_PAGE_COMMERCE_TAP: "open_page_commerce_tap",
      ORDERS_HELP: "orders_help",
      PAGE_ABOUT_CARD: "page_about_card",
      PAGE_ACTION_YOU_MAY_TAKE: "page_action_you_may_take",
      PAGE_ACTIONS: "page_actions",
      PAGE_ADD_CHILD_LOCATION: "page_add_child_location",
      PAGE_ADDITIONAL_PROFILE_TRANSITION_CARD:
        "page_additional_profile_transition_card",
      PAGE_ADMIN_STOREFRONT_POSTER: "page_admin_storefront_poster",
      PAGE_ADMIN_UPDATES: "page_admin_updates",
      PAGE_ADMIN_WHATSAPP_UPSELL_BOTTOMSHEET:
        "page_admin_whatsapp_upsell_bottomsheet",
      PAGE_BOOST_POST: "page_boost_post",
      PAGE_CARD_SEE_ALL: "page_card_see_all",
      PAGE_CHECKIN: "page_checkin",
      PAGE_COMPONENT_BASED_HEADER: "page_component_based_header",
      PAGE_CONTACT_INFO_H_SCROLL: "page_contact_info_h_scroll",
      PAGE_COPY_LINK: "page_copy_link",
      PAGE_COVER: "page_cover",
      PAGE_COVER_COLLAGE: "page_cover_collage",
      PAGE_COVER_CTA_BUTTON: "page_cover_cta_button",
      PAGE_COVER_DESCRIPTION: "page_cover_description",
      PAGE_COVER_SLIDESHOW: "page_cover_slideshow",
      PAGE_DEEPLINK_REDIRECT: "page_deeplink_redirect",
      PAGE_DELIVERY_AND_PICKUP_REDIRECT: "page_delivery_and_pickup_redirect",
      PAGE_DISCOVER_SUGGESTED_PAGE: "page_discover_suggested_page",
      PAGE_DYNAMIC_SHORTCUT: "page_dynamic_shortcut",
      PAGE_EDIT: "page_edit",
      PAGE_EMAIL: "page_email",
      PAGE_EVENT: "page_event",
      PAGE_FACEBOOK_STORY: "page_facebook_story",
      PAGE_FAN_UPSELL_BOTTOMSHEET: "page_fan_upsell_bottomsheet",
      PAGE_FOLLOW: "page_follow",
      PAGE_FOLLOW_MENU: "page_follow_menu",
      PAGE_GET_DIRECTIONS: "page_get_directions",
      PAGE_GROUP: "page_group",
      PAGE_HIGHLIGHTS_CARD: "page_highlights_card",
      PAGE_HIGHLIGHTS_POST: "page_highlights_post",
      PAGE_INSIGHT: "page_insight",
      PAGE_INSTAGRAM_BUSINESS: "page_instagram_business",
      PAGE_INTEGRITY_ENTRYPOINT: "page_integrity_entrypoint",
      PAGE_JOB: "page_job",
      PAGE_LAUNCHPAD: "page_launchpad",
      PAGE_LAUNCHPAD_ACTIONS: "page_launchpad_actions",
      PAGE_LAUNCHPAD_MORE_DRAWER: "page_launchpad_more_drawer",
      PAGE_LIKE: "page_like",
      PAGE_LIKE_CHAINING_CARD: "page_like_chaining_card",
      PAGE_LIKE_INVITE: "page_like_invite",
      PAGE_LOCATIONS_CARD: "page_locations_card",
      PAGE_LOCATIONS_MAP: "page_locations_map",
      PAGE_MANAGEMENT_INVITE: "page_management_invite",
      PAGE_MAP: "page_map",
      PAGE_MEDIA_CARD: "page_media_card",
      PAGE_MEDIA_FILTER: "page_media_filter",
      PAGE_MEDIA_GALLERY: "page_media_gallery",
      PAGE_MEDIA_GALLERY_SEE_ALL_OVERLAY: "page_media_gallery_see_all_overlay",
      PAGE_MEDIA_GALLERY_SEE_ALL_PILL: "page_media_gallery_see_all_pill",
      PAGE_MENU: "page_menu",
      PAGE_MENU_CATEGORY: "page_menu_category",
      PAGE_MENU_DISCLAIMER: "page_menu_disclaimer",
      PAGE_MENU_ITEM: "page_menu_item",
      PAGE_MENU_ITEM_LIKE_BUTTON: "page_menu_item_like_button",
      PAGE_MENU_TAB: "page_menu_tab",
      PAGE_MESSAGE: "page_message",
      PAGE_MESSAGE_PROMPT: "page_message_prompt",
      PAGE_META_INFO_HSCROLL: "page_meta_info_hscroll",
      PAGE_NAV_BAR_MORE_BUTTON: "page_nav_bar_more_button",
      PAGE_NOTES_CARD: "page_notes_card",
      PAGE_NOTES_TAB: "page_notes_tab",
      PAGE_NOTIFICATION: "page_notification",
      PAGE_OFFER: "page_offer",
      PAGE_OPEN_HOURS: "page_open_hours",
      PAGE_PERSONA: "page_persona",
      PAGE_PHONE: "page_phone",
      PAGE_PHOTO: "page_photo",
      PAGE_PHOTOS_CARD: "page_photos_card",
      PAGE_PINTEREST: "page_pinterest",
      PAGE_PROFILE: "page_profile",
      PAGE_PROFILE_PHOTO: "page_profile_photo",
      PAGE_PROFILE_TAB_ORDER: "page_profile_tab_order",
      PAGE_PROMOTE: "page_promote",
      PAGE_PROMOTIONS_TAB: "page_promotions_tab",
      PAGE_QUALITY: "page_quality",
      PAGE_RECENT_POST: "page_recent_post",
      PAGE_RECURRING_NOTIFICATIONS_OPT_IN:
        "page_recurring_notifications_opt_in",
      PAGE_REQUEST_TIME_BOOST: "page_request_time_boost",
      PAGE_RESERVATION_LINK: "page_reservation_link",
      PAGE_RESURRECTION_FLOW_REASON: "page_resurrection_flow_reason",
      PAGE_RESURRECTION_FLOW_TIP: "page_resurrection_flow_tip",
      PAGE_REVIEW: "page_review",
      PAGE_SAVE: "page_save",
      PAGE_SCRAPED_HOTEL: "page_scraped_hotel",
      PAGE_SERVICES: "page_services",
      PAGE_SETTINGS: "page_settings",
      PAGE_SETTINGS_MESSAGING_TAB: "page_settings_messaging_tab",
      PAGE_SETTINGS_TAB_LIST: "page_settings_tab_list",
      PAGE_SETTINGS_WHATSAPP_TAB: "page_settings_whatsapp_tab",
      PAGE_SHARE: "page_share",
      PAGE_SHOP_CARD: "page_shop_card",
      PAGE_SHOP_CARD_SEE_ALL: "page_shop_card_see_all",
      PAGE_SHOP_COLLECTION_CARD: "page_shop_collection_card",
      PAGE_SHOP_COLLECTION_CARD_SEE_ALL: "page_shop_collection_card_see_all",
      PAGE_SHOP_SEARCH_APPLY: "page_shop_search_apply",
      PAGE_SHOP_SEARCH_INPUT_BOX: "page_shop_search_input_box",
      PAGE_SHOP_SEARCH_PILL: "page_shop_search_pill",
      PAGE_SHOP_SEARCH_RESET: "page_shop_search_reset",
      PAGE_SHOP_SINGLE_COLUMN_CARD: "page_shop_single_column_card",
      PAGE_SHOP_SINGLE_COLUMN_TOGGLE: "page_shop_single_column_toggle",
      PAGE_STORY: "page_story",
      PAGE_STORY_CREATE: "page_story_create",
      PAGE_STORY_DELETE: "page_story_delete",
      PAGE_STORY_FINISH_DRAFT: "page_story_finish_draft",
      PAGE_STORY_PUBLISH: "page_story_publish",
      PAGE_STORY_SAVE_DRAFT: "page_story_save_draft",
      PAGE_SUGGESTED_ACTIONS: "page_suggested_actions",
      PAGE_SURFACE_IAB_BAR: "page_surface_iab_bar",
      PAGE_TAB_BAR: "page_tab_bar",
      PAGE_TEMPLATE: "page_template",
      PAGE_TEMPLATE_ALARM_CLOCK: "page_template_alarm_clock",
      PAGE_TEMPLATE_NUX_TOUR: "page_template_nux_tour",
      PAGE_THIS_WEEK_CARD: "page_this_week_card",
      PAGE_TRANSPARENCY_PAGE_ACTIVE_ADS_TAB:
        "page_transparency_page_active_ads_tab",
      PAGE_TRANSPARENCY_PAGE_INFO_TAB: "page_transparency_page_info_tab",
      PAGE_TRANSPARENCY_VIEW: "page_transparency_view",
      PAGE_TWITTER: "page_twitter",
      PAGE_UNLIKE: "page_unlike",
      PAGE_UNSAVE: "page_unsave",
      PAGE_UPDATE_CARD: "page_update_card",
      PAGE_VENUE_EVENT_ABOUT: "page_venue_event_about",
      PAGE_VIDEO: "page_video",
      PAGE_VIDEOS_CARD: "page_videos_card",
      PAGE_WEBSITE: "page_website",
      PAGE_WHATSAPP: "page_whatsapp",
      PAGE_WHATSAPP_ONBOARD_BOTTOMSHEET: "page_whatsapp_onboard_bottomsheet",
      PAGE_YOUTUBE: "page_youtube",
      PAGES_COVER_VIDEO: "pages_cover_video",
      PAGES_PRIMARY_CTA_BUTTON: "pages_primary_cta_button",
      PAGES_SECONDARY_CTA_BUTTON: "pages_secondary_cta_button",
      PAY_WITH_FACEBOOK: "pay_with_facebook",
      PENDING_PAGE_INVITES_NT_SCREEN_PYML:
        "pending_page_invites_nt_screen_pyml",
      PHOTO_ALBUM: "photo_album",
      PLACE_CLAIM: "place_claim",
      PMA_CONTEXT_ROWS: "pma_context_rows",
      PMA_RESPONSIVENESS_TIPS_CARD: "pma_responsiveness_tips_card",
      PMA_TAB: "pma_tab",
      POST_SHARE: "post_share",
      PRIVATE_REPLY_UPSELL_COMMENT_ATTACHMENT_BUBBLE:
        "private_reply_upsell_comment_attachment_bubble",
      PRODASH: "prodash",
      PRODUCT_QUESTION: "product_question",
      PRODUCT_QUESTION_AND_ANSWER_ITEM_DETAIL:
        "product_question_and_answer_item_detail",
      PRODUCT_QUESTION_AND_ANSWER_UNIT: "product_question_and_answer_unit",
      PROMOTE_ACTION_BUTTON: "promote_action_button",
      PROVISION_TEMPLATE: "provision_template",
      PUBLISH_PHOTO: "publish_photo",
      PYMB_UNIT: "pymb_unit",
      QUESTION_TRIGGERED_CONVO_UPSELL_ATTACHMENT_BUBBLE:
        "question_triggered_convo_upsell_attachment_bubble",
      RECOMMEND: "recommend",
      REPORT: "report",
      RESPONSIVENESS_CARD: "responsiveness_card",
      SAVE_BUTTON: "save_button",
      SEARCH_CTAS: "search_ctas",
      SEARCH_PAGE: "search_page",
      SEARCH_QUALIFIER_TAB_LINK: "search_qualifier_tab_link",
      SEARCH_SUGGESTION: "search_suggestion",
      SEARCH_SUGGESTION_SEE_MORE: "search_suggestion_see_more",
      SEE_ALL_CARD: "see_all_card",
      SEE_MORE_TAP: "see_more_tap",
      SERVICES_APPOINTMENT_INTERSTITIAL: "services_appointment_interstitial",
      SERVICES_COMPOSER_INTERCEPT: "services_composer_intercept",
      SERVICES_EDUCATION_VIDEO_POST: "services_education_video_post",
      SERVICES_MESSENGER_MARK_READ_UNREAD:
        "services_messenger_mark_read_unread",
      SET_UP_WHATSAPP_NUMBER_BUTTON: "set_up_whatsapp_number_button",
      SHARE_PAGE_TO_MESSENGER: "share_page_to_messenger",
      SHARE_PAGE_TO_WHATSAPP: "share_page_to_whatsapp",
      SHOP_INSIGHTS_CARD: "shop_insights_card",
      SHOP_INSIGHTS_CARD_DATE_PICKER: "shop_insights_card_date_picker",
      SHOP_INSIGHTS_CARD_SHOP_METRICS: "shop_insights_card_shop_metrics",
      SHOP_INSIGHTS_CARD_TOP_PRODUCT: "shop_insights_card_top_product",
      SHOP_ITEM_TAP: "shop_item_tap",
      SHOP_TAB: "shop_tab",
      SIMILAR_NEARBY_PLACES_SEE_ALL: "similar_nearby_places_see_all",
      SIMILAR_NEARBY_PLACES_UNIT: "similar_nearby_places_unit",
      SOCIAL_CONTEXT: "social_context",
      STRUCTURED_REPORT: "structured_report",
      SUBMIT_TALENT_SHOW_AUDITION: "submit_talent_show_audition",
      SUGGEST_EDITS: "suggest_edits",
      TAPPED_OPEN_STORE: "tapped_open_store",
      UNFOCUSED_ADMINED_PAGE: "unfocused_admined_page",
      UNIFIED_INBOX: "unified_inbox",
      UNINTERESTED_BUTTON: "uninterested_button",
      UNPUBLISHED_PAGE_BOTTOM_SHEET: "unpublished_page_bottom_sheet",
      VIEW_ACTIVITY_FEED: "view_activity_feed",
      VIEW_ADMIN_SURFACE: "view_admin_surface",
      VIEW_ADS: "view_ads",
      VIEW_AS_PUBLIC: "view_as_public",
      VIEW_NOTIFICATIONS_PAGE: "view_notifications_page",
      VIEW_PAGE_BUTTON: "view_page_button",
      VISITOR_PHOTOS_ENTRYPOINT: "visitor_photos_entrypoint",
      VISITOR_PHOTOS_VIEW: "visitor_photos_view",
      WATCH_BRANDING_CARD: "watch_branding_card",
      WATCH_SHOW_EPISODE: "watch_show_episode",
      WELCOME_CARD: "welcome_card",
    });
    f["default"] = a;
  },
  66
);
__d(
  "PagesLoggerTBLMigrationUtil",
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      if (a === null || a === void 0) return null;
      switch (a) {
        case "BOOK_APPOINTMENT":
          return "legacy_cta_book_appointment";
        case "BOOK_NOW":
          return "legacy_cta_book_now";
        case "BUY_TICKETS":
          return "legacy_cta_buy_tickets";
        case "CALL_NOW":
          return "legacy_cta_call_now";
        case "CHARITY_DONATE":
          return "legacy_cta_charity_donate";
        case "CONTACT_US":
          return "legacy_cta_contact_us";
        case "DONATE_NOW":
          return "legacy_cta_donate_now";
        case "EMAIL":
          return "legacy_cta_email";
        case "GET_DIRECTIONS":
          return "legacy_cta_get_directions";
        case "GET_OFFER":
          return "legacy_cta_get_offer";
        case "GET_OFFER_VIEW":
          return "legacy_cta_get_offer_view";
        case "LEARN_MORE":
          return "legacy_cta_learn_more";
        case "LISTEN":
          return "legacy_cta_listen";
        case "MAKE_RESERVATION":
          return "legacy_cta_make_reservation";
        case "MESSAGE":
          return "legacy_cta_message";
        case "":
          return "legacy_cta_add_button";
        case "OPEN_APP":
          return "legacy_cta_open_app";
        case "ORDER_NOW":
          return "legacy_cta_order_now";
        case "PLAY_NOW":
          return "legacy_cta_play_now";
        case "READ_ARTICLES":
          return "legacy_cta_read_articles";
        case "REQUEST_APPOINTMENT":
          return "legacy_cta_request_appointment";
        case "REQUEST_QUOTE":
          return "legacy_cta_request_quote";
        case "SHOP_NOW":
          return "legacy_cta_shop_now";
        case "SIGN_UP":
          return "legacy_cta_sign_up";
        case "VIDEO_CALL":
          return "legacy_cta_video_call";
        case "VISIT_GROUP":
          return "legacy_cta_visit_group";
        case "WATCH_NOW":
          return "legacy_cta_watch_now";
        case "WHATSAPP_MESSAGE":
          return "legacy_cta_whatsapp_message";
        case "PLAY_MUSIC":
          return "legacy_cta_play_music";
        case "GET_EVENT_TICKETS":
          return "legacy_cta_get_event_tickets";
        case "SHOP_ON_FACEBOOK":
          return "legacy_cta_shop_on_facebook";
        case "LOCAL_DEV_PLATFORM":
          return "legacy_cta_local_dev_platform";
        case "INTERESTED":
          return "legacy_cta_interested";
      }
      return null;
    }
    f.convertCTAToActionType = a;
  },
  66
);
__d(
  "PagesPageActionClickFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("getFalcoLogPolicy_DO_NOT_USE")("1744141");
    b = d("FalcoLoggerInternal").create("pages_page_action_click", a);
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "PageCallToActionHovercard.react",
  [
    "cx",
    "fbt",
    "CustomCTALogger",
    "Image.react",
    "Layout.react",
    "Link.react",
    "PageCallToActionRef",
    "PagesLogger",
    "PagesLoggerEventEnum",
    "PagesLoggerEventTargetEnum",
    "PagesLoggerTBLMigrationUtil",
    "PagesPageActionClickFalcoEvent",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = i || b("react"),
      k = b("Layout.react").Column,
      l = b("Layout.react").FillColumn;
    a = (function (a) {
      babelHelpers.inheritsLoose(c, a);
      function c() {
        var c, d;
        for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
          f[g] = arguments[g];
        return (
          ((c = d = a.call.apply(a, [this].concat(f)) || this),
          (d.$1 = function () {
            b("PagesLogger").log(
              d.props.pageID,
              b("PagesLoggerEventEnum").CLICK,
              b("PagesLoggerEventTargetEnum").PAGES_PRIMARY_CTA_BUTTON,
              b("PageCallToActionRef").CTA_HOVER_CARD_SURFACE,
              null,
              {
                cta_type: d.props.cctaType,
                cta_id: d.props.cctaID,
                cta_target_url: d.props.url,
              }
            );
            b("CustomCTALogger").log({
              ccta_id: d.props.cctaID,
              ccta_type: d.props.cctaType,
              event_type: "custom_cta_click_viewer_unit",
              surface: b("PageCallToActionRef").CTA_HOVER_CARD_SURFACE,
              target_url: d.props.displayUrl,
            });
            var a = d.props.pageID,
              c = b("PagesLoggerTBLMigrationUtil").convertCTAToActionType(
                d.props.cctaType
              );
            a != null &&
              c !== null &&
              b("PagesPageActionClickFalcoEvent").log(function () {
                return {
                  event_location: "page__legacy_cta_button",
                  page_id: d.props.pageID,
                  referrer: null,
                  event_data: {
                    action_id: d.props.cctaID,
                    action_type: c,
                    is_primary: !0,
                  },
                };
              });
          }),
          c) || babelHelpers.assertThisInitialized(d)
        );
      }
      var d = c.prototype;
      d.render = function () {
        return j.jsx(b("Link.react"), {
          className: "_18tn",
          href: this.props.redirectUrl,
          onClick: this.$1,
          target: "_blank",
          type: "dark",
          children: j.jsx("div", {
            className: "_18tq",
            children: j.jsxs(b("Layout.react"), {
              children: [
                j.jsx(k, {
                  className: "_18tt",
                  children: j.jsx(b("Image.react"), {
                    height: 124,
                    src: this.props.imageSrc,
                    width: 124,
                  }),
                }),
                j.jsxs(l, {
                  className: "_18tu",
                  children: [
                    j.jsx("div", {
                      className: "_18to",
                      children: this.props.title,
                    }),
                    j.jsx("div", {
                      className: "_18tr",
                      children: this.props.description,
                    }),
                    j.jsx("div", {
                      className: "_18ts",
                      children: h._(
                        "En cliquant, vous irez sur une URL externe\u00a0: {url name}",
                        [
                          h._param(
                            "url name",
                            j.jsx("div", { children: this.props.displayUrl })
                          ),
                        ]
                      ),
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      };
      return c;
    })(j.Component);
    e.exports = a;
  },
  null
);
__d(
  "CctaLabels",
  ["fbt", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    d = d("react");
    var i = h._("Site web"),
      j = h._("iPhone"),
      k = h._("Android"),
      l = "SHOW_FLYOUT",
      m = h._("Tester bouton"),
      n = h._("Modifier le bouton"),
      o = h._("Supprimer le bouton"),
      p = h._("Demandes de contact"),
      q = h._("Choisissez un bouton"),
      r = h._("Site web"),
      s = h._("Application"),
      t = h._("PARAM\u00c8TRES ANDROID"),
      u = h._("R\u00c9GLAGES IOS"),
      v = h._("Choisissez o\u00f9 rediriger les gens sur Android"),
      w = h._(
        "Maintenant que vous avez ajout\u00e9 ce bouton \u00e0 votre Page Facebook, vous pouvez en faire la promotion."
      ),
      x = h._("Ajouter un bouton \u00e0 votre Page"),
      y = h._("Site web"),
      z = h._("Exemple\u00a0: {url}", [
        h._param("url", "http://www.mywebsite.com"),
      ]),
      A = h._("Configurer un lien vers une app\u00a0?"),
      B = h._(
        "Les visiteurs qui utilisent iOS seront redirig\u00e9s vers le site web ci-dessus."
      ),
      C = h._(
        "Les visiteurs qui utilisent Android seront redirig\u00e9s vers le site web ci-dessus."
      ),
      D = h._(
        "Les visiteurs qui utilisent iOS seront envoy\u00e9s vers le lien entr\u00e9 ci-dessous."
      ),
      E = h._(
        "Les visiteurs qui utilisent Android seront envoy\u00e9s vers le lien entr\u00e9 ci-dessous."
      ),
      F = h._("Choisissez o\u00f9 rediriger les gens sur iOS"),
      G = h._("Lien profond d\u2019application iOS"),
      H = h._("Lien profond d\u2019application Android"),
      I = h._("Lien vers un site web ou l\u2019App Store"),
      J = h._("Lien vers un site web ou le Play Store"),
      K = h._(
        "Si vous le voulez, vous pouvez d\u00e9finir des liens profonds vers votre app pour les utilisateurs iOS ou Android. Ne le faites que si vous avez une app vers laquelle vous voulez diriger les visiteurs."
      ),
      L = h._(
        "Ajoutez un bouton sur votre Page qui redirige les gens directement vers votre site web ou votre app."
      ),
      M = h._("Modifier la promotion"),
      N = h._("Afficher la promotion"),
      O = h._("Promouvoir"),
      P = h._("Pas maintenant"),
      Q = h._("En savoir plus"),
      R = h._("Lien profond"),
      S = h._(
        "Nous ouvrirons l\u2019application s\u00e9lectionn\u00e9e ci-dessus si elle est install\u00e9e"
      ),
      T = h._(
        "Les personnes qui n\u2019ont pas votre app seront envoy\u00e9s ici."
      ),
      U = h._("Nom du package"),
      V = h._("Ajoutez le nom de package android de votre app."),
      W = h._(
        "Envoyez les gens vers un endroit sp\u00e9cifique de votre app, par exemple une page de produit."
      ),
      X = h._(
        "Nous ouvrirons l\u2019application s\u00e9lectionn\u00e9e ci-dessus si elle est install\u00e9e"
      ),
      Y = h._(
        "Nous utiliserons le nom du package de l\u2019app s\u00e9lectionn\u00e9e"
      ),
      Z = h._(
        "Voulez-vous vraiment supprimer ce bouton de votre Page Facebook\u00a0?"
      );
    d = h._(
      "Cela supprimera le bouton Obtenir un devis de votre Page. {new_line} Vos questions automatiques seront \u00e9galement d\u00e9sactiv\u00e9es et ne seront pas envoy\u00e9es aux personnes qui vous envoient des messages.",
      [h._param("new_line", d.jsx("div", { children: d.jsx("br", {}) }))]
    );
    var $ = h._("Ajouter un bouton"),
      aa = h._(
        "Ajoutez un bouton pour encourager les visiteurs \u00e0 interagir avec votre Page, par exemple pour acheter ou s\u2019inscrire."
      ),
      ba = h._(
        "Terminez de configurer votre bouton pour que les gens puissent effectuer cette action \u00e0 partir de votre Page."
      ),
      ca = h._(
        "Le changement du bouton mettra fin \u00e0 votre publicit\u00e9"
      ),
      da = h._("Impossible de changer le bouton actuellement"),
      ea = h._("Num\u00e9ro de t\u00e9l\u00e9phone"),
      fa = h._("Adresse e-mail"),
      ga = h._("Exemple\u00a0: 8005550199"),
      ha = h._("Ajouter une adresse e-mail"),
      ia = h._("Date\u00a0:"),
      ja = h._("Heure\u00a0:"),
      ka = h._("Taille du groupe\u00a0:"),
      la = h._("Quelles informations voulez-vous recueillir\u00a0?"),
      ma = h._(
        "Du texte qui explique que ces coordonn\u00e9es expireront 90 jours apr\u00e8s leur envoi."
      ),
      na = h._("Ajouter un lien vers votre politique de confidentialit\u00e9."),
      oa = h._(
        "Des explications sur votre politique de confidentialit\u00e9 et pourquoi elle est requise. Dites pourquoi elle est importante."
      ),
      pa = h._("Num\u00e9ro de t\u00e9l\u00e9phone et e-mail"),
      qa = h._("Num\u00e9ro de t\u00e9l\u00e9phone"),
      ra = h._("Adresse mail"),
      sa = h._(
        "Cette fonction est con\u00e7ue pour vous permettre de r\u00e9pondre aux requ\u00eates entrantes des individus. Certains types de contact peuvent n\u00e9cessiter des approbations suppl\u00e9mentaires requises par la loi de votre pays. Vous reconnaissez qu\u2019il vous appartient d\u2019obtenir ces approbations et de vous conformer \u00e0 nos"
      ),
      ta = h._("Envoyer des personnes vers une app ou un site web"),
      ua = h._("Ajouter un commentaire"),
      va = h._("Entrez votre nom"),
      wa = h._("Entrez votre e-mail"),
      xa = h._("Num\u00e9ro de t\u00e9l\u00e9phone"),
      ya = h._("OK"),
      za = h._("Oui"),
      Aa = h._("Non"),
      Ba = h._(
        "En cr\u00e9ant ce bouton call-to-action, vous certifiez que les deux affirmations suivantes sont vraies et exactes\u00a0:"
      ),
      Ca = h._(
        "Votre organisation est une organisation \u00e0 but non lucratif telle que d\u00e9finie par les lois en vigueur dans votre juridiction. Les organisations sises aux \u00c9tats-Unis doivent \u00eatre organis\u00e9es et op\u00e9rationnelles conform\u00e9ment \u00e0 la section 501 (c)(3) du code des revenus internes am\u00e9ricains, m\u00eame si vous n\u2019avez pas encore pos\u00e9 votre candidature."
      ),
      Da = h._(
        "Votre organisation n\u2019intervient ni directement ni indirectement dans aucune campagne politique pour ou contre un candidat \u00e0 une charge publique."
      ),
      Ea = h._("Marqu\u00e9 comme r\u00e9pondu"),
      Fa = h._("Bannir de la Page"),
      Ga = h._("Le bouton Acheter redirigera vers la boutique de votre Page."),
      Ha = h._(
        "Voir les offres renverra vers la section Offres de votre Page."
      ),
      Ia = h._(
        "Permettez aux gens de demander un rendez-vous sans quitter votre Page."
      ),
      Ja = h._("Facilitez l\u2019achat de billets sur votre Page."),
      Ka = h._(
        "La fonctionnalit\u00e9 Obtenir des billets renverra vers la section \u00c9v\u00e8nements de votre Page."
      ),
      La = h._(
        "Faire un don permet \u00e0 vos abonn\u00e9s de faire un don \u00e0 votre organisation directement sur Facebook."
      ),
      Ma = h._("Traitement de la vid\u00e9o..."),
      Na = h._("Aper\u00e7u"),
      Oa = h._("Importation de la vid\u00e9o..."),
      Pa = h._("Pr\u00e9paration de la vid\u00e9o..."),
      Qa = h._("Marquer comme termin\u00e9"),
      Ra = h._("Marquer comme incomplet"),
      Sa = h._("Organique"),
      Ta = h._("Pay\u00e9"),
      Ua = h._("Clics cette semaine"),
      Va = h._("Modifier le bouton sur les Pages de lieu");
    function a(a) {
      return h._("Supprimer le bouton {Page button label}", [
        h._param("Page button label", a),
      ]);
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function b(a) {
      return h._("Faire la promotion du bouton {Page button label}", [
        h._param("Page button label", a),
      ]);
    }
    b.displayName = b.name + " [from " + f.id + "]";
    function c(a) {
      return h._("Modifier le bouton {CTA label}", [h._param("CTA label", a)]);
    }
    c.displayName = c.name + " [from " + f.id + "]";
    function e(a) {
      return h._("Se d\u00e9connecter de l\u2019application ({app id})", [
        h._param("app id", a),
      ]);
    }
    e.displayName = e.name + " [from " + f.id + "]";
    g.WEBSITE_LABEL = i;
    g.IPHONE_LABEL = j;
    g.ANDROID_LABEL = k;
    g.SHOW_FLYOUT = l;
    g.TEST_LABEL = m;
    g.EDIT_LABEL = n;
    g.DELETE_LABEL = o;
    g.CONTACT_US_REQUEST_LABEL = p;
    g.CTA_SELECTOR = q;
    g.SELECTOR_OPTION_WEBSITE = r;
    g.SELECTOR_OPTION_APP = s;
    g.ANDROID_SECTION = t;
    g.IOS_SECTION = u;
    g.ANDROID_SECTION_TITLE = v;
    g.CREATE_SUCCESS_DIALOG_BODY = w;
    g.CREATE_CALL_TO_ACTION_WEBSITE = x;
    g.WEB_LINK_INPUT_LABEL = y;
    g.WEB_LINK_INPUT_PLACEHOLDER = z;
    g.APP_TOGGLE_LABEL = A;
    g.IOS_WEBSITE_DESTINATION_TOOLTIP = B;
    g.ANDROID_WEBSITE_DESTINATION_TOOLTIP = C;
    g.IOS_APP_DESTINATION_TOOLTIP = D;
    g.ANDROID_APP_DESTINATION_TOOLTIP = E;
    g.IOS_SECTION_TITLE = F;
    g.IOS_APP_LINK_INPUT_LABEL = G;
    g.ANDROID_APP_LINK_INPUT_LABEL = H;
    g.IOS_BACKUP_INPUT_LABEL = I;
    g.ANDROID_BACKUP_INPUT_LABEL = J;
    g.APP_LINK_NOTICE = K;
    g.CREATE_DIALOG_BODY_MESSAGE = L;
    g.EDIT_PROMOTION_LABEL = M;
    g.VIEW_PROMOTION_LABEL = N;
    g.PROMOTE_LABEL = O;
    g.NOT_NOW = P;
    g.DEEPLINK_LEARN_MORE_LABEL = Q;
    g.DEEP_LINK_INPUT_LABEL = R;
    g.CREATE_IPHONE_DEEP_LINK_TEXT = S;
    g.CREATE_DIALOG_BACKUP_LINK_MESSAGE = T;
    g.PACKAGE_NAME_LABEL = U;
    g.CREATE_DIALOG_PACKAGE_NAME_MESSAGE_ANDROID = V;
    g.CREATE_DIALOG_APPLINK_MESSAGE = W;
    g.CREATE_ANDROID_DEEP_LINK_TEXT = X;
    g.CREATE_ANDROID_PACKAGE_NAME_TEXT = Y;
    g.DELETE_DIALOG_MESSAGE = Z;
    g.DELETE_GET_QUOTE_CTA_MESSAGE = d;
    g.CREATE_LABEL = $;
    g.CREATE_TOOLTIP = aa;
    g.CREATE_TOOLTIP_FOR_UNCONFIGURED_STATE = ba;
    g.UPDATE_DURING_PROMOTION_DIALOG_TITLE = ca;
    g.CANNOT_UPDATE_DURING_PROMOTION_DIALOG_TITLE = da;
    g.ENTER_PHONE_LABEL = ea;
    g.ENTER_EMAIL_ADDRESS_LABEL = fa;
    g.ENTER_PHONE_PLACEHOLDER = ga;
    g.ENTER_EMAIL_ADDRESS_PLACEHOLDER = ha;
    g.DATE_PICKER_TEXT = ia;
    g.TIME_PICKER_TEXT = ja;
    g.PARTY_PICKER_TEXT = ka;
    g.PHONE_EMAIL_PREFERENCE_SELECTOR_SECTION_TITLE = la;
    g.PHONE_EMAIL_PREFERENCE_SELECTOR_SECTION_DESCRIPTION = ma;
    g.CONTACT_US_PRIVACY_LINK_SECTION_TITLE = na;
    g.CONTACT_US_PRIVACY_LINK_SECTION_DESCRIPTION = oa;
    g.PHONE_EMAIL_PREFERENCE_PHONE_AND_EMAIL_LABEL = pa;
    g.PHONE_EMAIL_PREFERENCE_PHONE_ONLY_LABEL = qa;
    g.PHONE_EMAIL_PREFERENCE_EMAIL_ONLY_LABEL = ra;
    g.CONTACT_US_TERM_BODY_MESSAGE = sa;
    g.WEBSITE_DESTINATION_TYPE_TOGGLE_LABEL = ta;
    g.CONTACT_US_REASON_INPUT_PLACEHOLDER = ua;
    g.CONTACT_US_NAME_INPUT_PLACEHOLDER = va;
    g.CONTACT_US_EMAIL_INPUT_PLACEHOLDER = wa;
    g.CONTACT_US_PHONE_INPUT_PLACEHOLDER = xa;
    g.CONTACT_US_INFO_SUBMIT_CONFIRMATION_LABEL = ya;
    g.YES_LABEL = za;
    g.NO_LABEL = Aa;
    g.DONATE_NOW_LEGAL_CONTENT_ONE = Ba;
    g.DONATE_NOW_LEGAL_CONTENT_TWO = Ca;
    g.DONATE_NOW_LEGAL_CONTENT_THREE = Da;
    g.MARK_AS_RESPONDED_LABEL = Ea;
    g.BAN_FROM_PAGE = Fa;
    g.STORE_FRONT_DESCRIPTION = Ga;
    g.OFFER_DESCRIPTION = Ha;
    g.REQUEST_APPOINTMENT_DESCRIPTION = Ia;
    g.BUY_TICKETS_DESCRIPTION = Ja;
    g.GET_EVENTS_TICKETS_DESCRIPTION = Ka;
    g.CHARITY_DONATE_DESCRIPTION = La;
    g.NATIVE_VIDEO_POSTING = Ma;
    g.NATIVE_VIDEO_PREVIEW_LABEL = Na;
    g.NATIVE_VIDEO_UPLOADING = Oa;
    g.NATIVE_VIDEO_UPLOAD_FINISHED = Pa;
    g.MARK_AS_COMPLETE_LABEL = Qa;
    g.MARK_AS_INCOMPLETE_LABEL = Ra;
    g.LEGEND_KEY_ORGANIC = Sa;
    g.LEGEND_KEY_PAID = Ta;
    g.THIS_WEEK_CLICK_LABEL = Ua;
    g.CTA_PROPAGATION_SETTING = Va;
    g.getDeleteCTALabel = a;
    g.getPromoteCTALabel = b;
    g.getEditCTALabel = c;
    g.getDisconnectLabel = e;
  },
  98
);
__d(
  "PageCallToActionOpenTableDialog.react",
  [
    "cx",
    "fbt",
    "AsyncRequest",
    "CctaLabels",
    "LayerHideOnBlur",
    "ThisControllerNoLongerExists",
    "XUIButton.react",
    "XUIDatePicker.react",
    "XUIDialog.react",
    "XUIDialogBody.react",
    "XUIDialogCancelButton.react",
    "XUIDialogConfirmButton.react",
    "XUIDialogFooter.react",
    "XUISelector.react",
    "formatDate",
    "prop-types",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = i || b("react"),
      k = b("XUISelector.react").Option,
      l = 20,
      m = 1e3,
      n = 30,
      o = 60,
      p = 48;
    a = (function (a) {
      babelHelpers.inheritsLoose(c, a);
      function c() {
        var c, d;
        for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
          f[g] = arguments[g];
        return (
          ((c = d = a.call.apply(a, [this].concat(f)) || this),
          (d.state = {
            availableTimes: [],
            chosenTimestamp: 0,
            partySize: 1,
            selectedDate: d.props.openTableSpecs.startTimestamp * m,
            selectedTime: 0,
          }),
          (d.$2 = function (a) {
            d.setState({ selectedDate: a.getTime() }),
              d.$3(a.getTime(), d.state.selectedTime, d.state.partySize);
          }),
          (d.$4 = function (a) {
            d.setState({ selectedTime: a.value }),
              d.$3(d.state.selectedDate, a.value, d.state.partySize);
          }),
          (d.$5 = function (a) {
            d.setState({ partySize: a.value }),
              d.$3(d.state.selectedDate, d.state.selectedTime, a.value);
          }),
          (d.$7 = function () {
            var a = d.state.selectedDate + d.state.selectedTime,
              c = b("formatDate")(new Date(a), "m/d/y", { utc: !0 });
            a = b("formatDate")(new Date(a), "g:i A", { utc: !0 });
            return { printDate: c, printTime: a };
          }),
          (d.$8 = function () {
            return j.jsxs("div", {
              children: [
                b("CctaLabels").DATE_PICKER_TEXT,
                j.jsx("span", {
                  className: "plm",
                  children: j.jsx(b("XUIDatePicker.react"), {
                    earliestTime: d.props.openTableSpecs.startTimestamp,
                    initialTime: d.state.selectedDate,
                    onCalendarSelectDateChange: d.$2,
                  }),
                }),
              ],
            });
          }),
          c) || babelHelpers.assertThisInitialized(d)
        );
      }
      var d = c.prototype;
      d.$1 = function () {
        this.props.onCancel(),
          this.setState({
            availableTimes: [],
            partySize: 1,
            selectedDate: this.props.openTableSpecs.startTimestamp * m,
            selectedTime: 0,
          });
      };
      d.$6 = function (a) {
        this.setState({ chosenTimestamp: a });
        a = b("ThisControllerNoLongerExists").__DEADURI__("dc0e6424");
        new (b("AsyncRequest"))().setURI(a).send();
      };
      d.$3 = function (a, c, d) {
        var e = this;
        a + c;
        d = b("ThisControllerNoLongerExists").__DEADURI__("caflbi8vi");
        new (b("AsyncRequest"))()
          .setURI(d)
          .setHandler(function (a) {
            e.setState({ availableTimes: a.payload });
          })
          .send();
      };
      d.$9 = function () {
        var a = [],
          c = new Date();
        c.setSeconds(0);
        for (var d = 0; d < p; d++) {
          d % 2
            ? (c.setHours((d - 1) / 2), c.setMinutes(30))
            : (c.setHours(d / 2), c.setMinutes(0));
          var e = d * o * n * m;
          a.push(
            j.jsx(k, { value: e, children: b("formatDate")(c, "g:i A") }, e)
          );
        }
        return j.jsxs("div", {
          children: [
            b("CctaLabels").TIME_PICKER_TEXT,
            j.jsx("span", {
              className: "plm",
              children: j.jsx(b("XUISelector.react"), {
                className: "_5vu1",
                onChange: this.$4,
                value: this.state.selectedTime,
                children: a,
              }),
            }),
          ],
        });
      };
      d.$10 = function () {
        var a = [];
        for (var c = 1; c <= l; c++)
          a.push(j.jsx(k, { value: c, children: c }, c));
        return j.jsxs("div", {
          children: [
            b("CctaLabels").PARTY_PICKER_TEXT,
            j.jsx("span", {
              className: "plm",
              children: j.jsx(b("XUISelector.react"), {
                className: "_5vu1",
                onChange: this.$5,
                value: this.state.partySize,
                children: a,
              }),
            }),
          ],
        });
      };
      d.$11 = function () {
        var a = this,
          c = j.jsx("div", {}),
          d = this.$7(),
          e = [],
          f = [];
        this.state.availableTimes.length ||
          (c = j.jsx("div", {
            children: h._("Aucune table ne correspond \u00e0 votre recherche"),
          }));
        for (var g = 0; g < this.state.availableTimes.length; g++) f.push(g);
        e = f.map(function (c) {
          return j.jsx(
            b("XUIButton.react"),
            {
              label: b("formatDate")(
                new Date(a.state.availableTimes[c] * m),
                "g:i A",
                { utc: !0 }
              ),
              onClick: function () {
                return a.$6(a.state.availableTimes[c]);
              },
            },
            c
          );
        });
        return j.jsxs("span", {
          children: [
            j.jsx("div", {
              children: h._(
                "Tableau pour {party size for reservation}, {date for reservation} vers {time for reservations}",
                [
                  h._param("party size for reservation", this.state.partySize),
                  h._param("date for reservation", d.printDate),
                  h._param("time for reservations", d.printTime),
                ]
              ),
            }),
            c,
            e,
          ],
        });
      };
      d.render = function () {
        return j.jsxs(b("XUIDialog.react"), {
          behaviors: { LayerHideOnBlur: b("LayerHideOnBlur") },
          shown: !0,
          width: 400,
          children: [
            j.jsxs(b("XUIDialogBody.react"), {
              children: [this.$11(), this.$8(), this.$9(), this.$10()],
            }),
            j.jsxs(b("XUIDialogFooter.react"), {
              children: [
                j.jsx(b("XUIDialogCancelButton.react"), {
                  onClick: this.onCancel,
                }),
                j.jsx(b("XUIDialogConfirmButton.react"), {}),
              ],
            }),
          ],
        });
      };
      return c;
    })(j.Component);
    a.propTypes = {
      onCancel: b("prop-types").func.isRequired,
      openTableSpecs: b("prop-types").object.isRequired,
      pageID: b("prop-types").string.isRequired,
    };
    e.exports = a;
  },
  null
);
__d(
  "DeferredComponent.react",
  ["createCancelableFunction", "react"],
  function (a, b, c, d, e, f) {
    var g,
      h = g || b("react");
    a = (function (a) {
      "use strict";
      babelHelpers.inheritsLoose(c, a);
      function c(b, c) {
        var d;
        d = a.call(this, b, c) || this;
        d.cancelableModulesLoaded = function () {};
        d.$1 = function (a) {
          d.setState({ ComponentClass: a }, function () {
            d.props.onComponentLoad && d.props.onComponentLoad(a);
          });
        };
        var e = null;
        function f(a) {
          e = a;
        }
        d.props.deferredComponent(f);
        d.state = { ComponentClass: e };
        return d;
      }
      var d = c.prototype;
      d.componentDidMount = function () {
        (this.cancelableModulesLoaded = b("createCancelableFunction")(this.$1)),
          this.props.deferredComponent(this.cancelableModulesLoaded);
      };
      d.componentWillUnmount = function () {
        this.cancelableModulesLoaded.cancel();
      };
      d.render = function () {
        var a = this.state.ComponentClass;
        if (!a || this.props.deferredForcePlaceholder)
          return this.props.deferredPlaceholder;
        var b = this.props;
        b.deferredPlaceholder;
        b.deferredComponent;
        b.onComponentLoad;
        b.deferredForcePlaceholder;
        b = babelHelpers.objectWithoutPropertiesLoose(b, [
          "deferredPlaceholder",
          "deferredComponent",
          "onComponentLoad",
          "deferredForcePlaceholder",
        ]);
        return h.jsx(a, babelHelpers["extends"]({}, b));
      };
      return c;
    })(h.Component);
    e.exports = a;
  },
  null
);
__d(
  "PerfHelperUtils",
  [
    "cx",
    "DeferredComponent.react",
    "JSResource",
    "joinClasses",
    "promiseDone",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.apply(this, arguments) || this;
        }
        var d = a.prototype;
        d.render = function () {
          var a = this.props,
            b = a.tooltip;
          a = a.className;
          return i.jsx("div", {
            className:
              "_28hn" +
              (this.props.color === "red" ? " _4ez8" : "") +
              (this.props.color === "green" ? " _28ho" : ""),
            children: i.jsx(c("DeferredComponent.react"), {
              deferredPlaceholder: i.jsx("div", {}),
              deferredComponent: function (a) {
                c("promiseDone")(
                  c("JSResource")("Tooltip.react")
                    .__setRef("PerfHelperUtils")
                    .load(),
                  a
                );
              },
              className: c("joinClasses")("_5_my", a),
              tooltip: b,
              children: this.props.children,
            }),
          });
        };
        return a;
      })(i.PureComponent);
    function a(a) {
      return i.jsx(j, {
        color: "red",
        tooltip:
          "This bootloaded component has a red border\n          because " +
          a.moduleId +
          "\n          took over " +
          a.timeLimitSecs +
          " seconds (" +
          a.timeSpentSecs +
          "s) to load",
        children: a.children,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.BorderedComponent = j;
    g.SlowBootloadBorder = a;
  },
  98
);
__d(
  "ShowWaitTimeAreasMode",
  ["URI"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = !!new (c("URI"))(window.location.href).getQueryData().showwaitareas;
    function a() {
      h = !1;
    }
    function b() {
      h = !0;
    }
    function d() {
      return h;
    }
    g.disable = a;
    g.enable = b;
    g.isEnabled = d;
  },
  98
);
__d(
  "LoadingMarkerArea.react",
  [
    "cx",
    "PerfHelperUtils",
    "ShowWaitTimeAreasMode",
    "WaitTimeContext",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = d("react").useMemo;
    function k(a) {
      var b = a.name;
      a = a.children;
      return i.jsx(d("PerfHelperUtils").BorderedComponent, {
        color: "green",
        tooltip: b,
        className: "_68qf",
        children: a,
      });
    }
    k.displayName = k.name + " [from " + f.id + "]";
    function a(a) {
      var b = a.name,
        e = a.owner;
      a = a.children;
      var f = j(
        function () {
          return { waitTimeAreaName: b, waitTimeAreaOwner: e };
        },
        [b, e]
      );
      return !d("ShowWaitTimeAreasMode").isEnabled()
        ? i.jsx(c("WaitTimeContext").Provider, { value: f, children: a })
        : i.jsx(c("WaitTimeContext").Provider, {
            value: f,
            children: i.jsx(k, { name: b, children: a || null }),
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PageContentTabSuccessDialog.react",
  [
    "cx",
    "ix",
    "Image.react",
    "XUIDialog.react",
    "XUIDialogBody.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var d = b.prototype;
      d.render = function () {
        return j.jsx(c("XUIDialog.react"), {
          layerFadeOnShow: !0,
          layerHideOnBlur: !1,
          shown: !0,
          width: 344,
          children: j.jsxs(c("XUIDialogBody.react"), {
            className: "_--l",
            children: [
              j.jsx(c("Image.react"), { className: "_--n", src: i("101769") }),
              j.jsx("div", {
                className: "_--o",
                children: this.props.successLabel,
              }),
            ],
          }),
        });
      };
      return b;
    })(j.Component);
    g["default"] = a;
  },
  98
);
__d(
  "PageContentTabLoadingDialog",
  [
    "cx",
    "LoadingMarkerArea.react",
    "PageContentTabSuccessDialog.react",
    "PageContentTabSuccessDialogTimer",
    "ReactDOM",
    "XUIDialog.react",
    "XUIDialogBody.react",
    "XUISpinner.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.apply(this, arguments) || this;
        }
        var d = a.prototype;
        d.render = function () {
          return i.jsx(c("LoadingMarkerArea.react"), {
            name: "PageContentTabLoadingDialog",
            owner: "pages_publishing",
            children: i.jsx(c("XUIDialog.react"), {
              layerHideOnBlur: !1,
              shown: !0,
              width: 300,
              children: i.jsx(c("XUIDialogBody.react"), {
                className: "_5xp9",
                children: i.jsx(c("XUISpinner.react"), {
                  background: "light",
                  className: "_5xpe",
                  size: "large",
                }),
              }),
            }),
          });
        };
        return a;
      })(i.Component);
    function a() {
      this._container || (this._container = document.createElement("div")),
        d("ReactDOM").render(
          i.jsx(j, {}),
          this._container,
          "PageContentTabLoadingDialog.js"
        );
    }
    function b() {
      if (!this._container) return;
      this.destroy();
    }
    function e(a, b) {
      if (!this._container) return;
      d("ReactDOM").render(
        i.jsx(c("PageContentTabSuccessDialog.react"), { successLabel: a }),
        this._container,
        "PageContentTabLoadingDialog.js"
      );
      setTimeout(
        this.destroy.bind(this),
        b ? b : c("PageContentTabSuccessDialogTimer").TIME_IN_MS
      );
    }
    function h() {
      d("ReactDOM").unmountComponentAtNode(this._container, f.id),
        (this._container = null);
    }
    g.show = a;
    g.hide = b;
    g.hideWithSuccessMessage = e;
    g.destroy = h;
  },
  98
);
__d(
  "ServicesBookNowCTASubtype",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      BOOKER: "booker",
      BOOKING_BUG: "booking_bug",
      EXTERNAL_LINK: "external_link",
      FACEBOOK_APPOINTMENT: "facebook_appointment",
      FRONT_DESK: "front_desk",
      FUTURE_PARTNER_REQUEST: "future_partner_request",
      GOOGLE_CALENDAR: "google_calendar",
      HOME_ADVISOR: "home_advisor",
      LOCAL_DEV_PLATFORM: "local_dev_platform",
      MYTIME: "mytime",
      MICROSOFT_BOOKINGS: "microsoft_bookings",
      MINDBODY: "mindbody",
      SETSTER: "setster",
      SIMPLY_BOOK_ME: "simply_book_me",
      REQUEST_TIME: "request_time",
    });
    f["default"] = a;
  },
  66
);
__d(
  "ServicesEventsFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("getFalcoLogPolicy_DO_NOT_USE")("216");
    b = d("FalcoLoggerInternal").create("services_events", a);
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "ServicesEventsLoggingHelper",
  ["Banzai", "BanzaiLogger"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a() {
        this.$1 = {};
      }
      var b = a.prototype;
      b.log = function () {
        c("BanzaiLogger").log("ServicesEventsLoggerConfig", this.$1);
      };
      b.logVital = function () {
        c("BanzaiLogger")
          .create(c("Banzai").VITAL)
          .log("ServicesEventsLoggerConfig", this.$1);
      };
      b.setEvent = function (a) {
        this.$1.name = a;
        return this;
      };
      b.setPageID = function (a) {
        this.$1.page_id = a;
        return this;
      };
      b.setClientTime = function (a) {
        this.$1.client_time = a;
        return this;
      };
      b.setConsumerID = function (a) {
        this.$1.consumer_id = a;
        return this;
      };
      b.setAdditionalData = function (a) {
        this.$1.additional_data_prep = a;
        return this;
      };
      b.setErrorMessage = function (a) {
        this.$1.error_message = a;
        return this;
      };
      b.setErrorTrace = function (a) {
        this.$1.error_trace = a;
        return this;
      };
      b.setReferrerUIComponent = function (a) {
        this.$1.referrer_ui_component = a;
        return this;
      };
      b.setReferrerUISurface = function (a) {
        this.$1.referrer_ui_surface = a;
        return this;
      };
      b.setRequestID = function (a) {
        this.$1.request_id = a;
        return this;
      };
      b.setServicesFlowType = function (a) {
        this.$1.services_flow_type = a;
        return this;
      };
      b.setSessionID = function (a) {
        this.$1.session_id = a;
        return this;
      };
      b.setUIComponent = function (a) {
        this.$1.ui_component = a;
        return this;
      };
      b.setUISurface = function (a) {
        this.$1.ui_surface = a;
        return this;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "ServicesEventsLogger",
  [
    "CurrentUser",
    "ServicesEventsFalcoEvent",
    "ServicesEventsLoggingHelper",
    "md5",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 2147483647;
    function a(a, b, d, e, f, g, h, i, j, k) {
      h !== null &&
        (j = babelHelpers["extends"]({}, j, { need_admin_approval: h }));
      i !== null &&
        (j = babelHelpers["extends"]({}, j, { is_duration_varies: i }));
      h = new (c("ServicesEventsLoggingHelper"))()
        .setPageID(d)
        .setSessionID(b)
        .setServicesFlowType(a)
        .setEvent(e)
        .setReferrerUIComponent(f)
        .setReferrerUISurface(g)
        .setAdditionalData(j);
      k ? h.logVital() : h.log();
    }
    function b(a, b, d, e, f, g) {
      var h, i, j, k;
      d &&
        ((h = d.uiComponent),
        (i = d.uiSurface),
        (j = d.referrerUIComponent),
        (k = d.referrerUISurface));
      d = new (c("ServicesEventsLoggingHelper"))()
        .setPageID(a)
        .setEvent(b)
        .setRequestID(g)
        .setAdditionalData(e)
        .setUIComponent(h)
        .setUISurface(i)
        .setReferrerUIComponent(j)
        .setReferrerUISurface(k)
        .setServicesFlowType(f)
        .setConsumerID(e == null ? void 0 : e.consumer_id);
      d.log();
    }
    function d(a, b, d, e, f, g) {
      var h, i, j, k;
      d &&
        ((h = d.uiComponent),
        (i = d.uiSurface),
        (j = d.referrerUIComponent),
        (k = d.referrerUISurface));
      c("ServicesEventsFalcoEvent").log(function () {
        return {
          page_id: a,
          name: b,
          request_id: g,
          additional_data_prep: e,
          ui_component: h,
          ui_surface: i,
          referrer_ui_component: j,
          referrer_ui_surface: k,
          services_flow_type: f,
          consumer_id: e == null ? void 0 : e.consumer_id,
        };
      });
    }
    function e() {
      return c("md5")(
        [
          c("CurrentUser").getID(),
          Math.floor(Date.now() / 1e3),
          Math.random() * h,
        ].join(":")
      );
    }
    g.logBookingFlow = a;
    g.log = b;
    g.logWithFalco = d;
    g.generateSessionID = e;
  },
  98
);
__d(
  "ServicesOpenMessageThread",
  ["FantaTabActions", "MercuryIDs"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      a = d("MercuryIDs").getThreadIDFromUserID(a);
      d("FantaTabActions").openTab(a);
    }
    g.openTab = a;
  },
  98
);
__d(
  "XCctaViewerClickButtonController",
  ["XController"],
  function (a, b, c, d, e, f) {
    e.exports = b("XController").create("/ccta/viewer_click_button/", {
      page_id: { type: "FBID", required: !0 },
    });
  },
  null
);
__d(
  "XLoginController",
  ["XController"],
  function (a, b, c, d, e, f) {
    e.exports = b("XController").create("/login/", {
      privacy_mutation_token: { type: "String" },
      email: { type: "String" },
      cuid: { type: "String" },
      app_id: { type: "Int" },
      api_key: { type: "String" },
      auth_token: { type: "String" },
      first_attempt: { type: "Exists", defaultValue: !1 },
      social_plugin: { type: "String" },
      signed_next: { type: "Bool", defaultValue: !1 },
      next: { type: "String" },
      li: { type: "String" },
      lhsrc: { type: "String" },
      dcode: { type: "Int" },
      profile_sharer_id: { type: "Int" },
      ref: { type: "String" },
      try_number: { type: "Int" },
      one_time_password: { type: "Bool", defaultValue: !1 },
      device_id: { type: "String" },
      ig_cp_login: { type: "Bool", defaultValue: !1 },
      pl_dbl: { type: "Bool", defaultValue: !1 },
      notif_src: { type: "String" },
      sk: { type: "String" },
      partial_uri: { type: "String" },
      contact_point: { type: "String" },
      layout: { type: "String" },
      next_uri: { type: "String" },
      dyiRequest: { type: "Bool", defaultValue: !1 },
      v: { type: "String" },
      return_session: { type: "String" },
      cancel: { type: "String" },
      cancel_url: { type: "String" },
      social_plugin_action: { type: "String" },
      page_id: { type: "String" },
      rcount: { type: "Int" },
      e: { type: "Int" },
      deact: { type: "String" },
      deact_messaging: { type: "Bool", defaultValue: !1 },
      user_wants_http: { type: "Bool", defaultValue: !1 },
      fbconnect: { type: "Exists", defaultValue: !1 },
      canvas: { type: "Exists", defaultValue: !1 },
      offline_access: { type: "Exists", defaultValue: !1 },
      skip_api_login: { type: "Bool", defaultValue: !1 },
      no_next_msg: { type: "Exists", defaultValue: !1 },
      _fb_noscript: { type: "Exists", defaultValue: !1 },
      nothacked: { type: "Bool", defaultValue: !1 },
      isprivate: { type: "Bool", defaultValue: !1 },
      fw2x: { type: "Bool", defaultValue: !1 },
      uc_qa: { type: "Exists", defaultValue: !1 },
      fl: { type: "Exists", defaultValue: !1 },
      show_profileshare_nativebanner: { type: "Exists", defaultValue: !1 },
      crst: { type: "Bool", defaultValue: !1 },
      from_contact_claiming: { type: "Bool", defaultValue: !1 },
      login_try_number: { type: "Int" },
      kid_directed_site: { type: "Bool", defaultValue: !1 },
      signup_uri: { type: "String" },
      sign_up: { type: "String" },
      rs: { type: "Enum", enumType: 0 },
      delete_account: { type: "String" },
      rid: { type: "Int" },
      lrs: { type: "Enum", enumType: 0 },
      lrid: { type: "Int" },
      greeting_text: { type: "String" },
      ref_param: { type: "String" },
      request_id: { type: "String" },
      chat_plugin_upgrade: { type: "Bool", defaultValue: !1 },
      re_engagement_opt_in: { type: "Bool", defaultValue: !1 },
      guest_access_token: { type: "String" },
      referer_uri: { type: "String" },
      switch_user: { type: "String" },
      guest_id: { type: "String" },
      prompt_type: { type: "String" },
      ps_nf_cuid: { type: "String" },
      campaign_id: { type: "Int" },
      session_id: { type: "String" },
      hide_upsell: { type: "Bool", defaultValue: !1 },
      hide_language_selector: { type: "Bool", defaultValue: !1 },
      hide_registration: { type: "Bool", defaultValue: !1 },
      shbl: { type: "Bool", defaultValue: !1 },
      src: { type: "String" },
      lara_cancel: { type: "Bool", defaultValue: !1 },
      fb_iaw_itp: { type: "Int" },
      nfx_context: { type: "String" },
      show_accounts_center_content: { type: "Bool", defaultValue: !1 },
      funnel_id: { type: "String" },
      is_two_steps_login: { type: "Bool", defaultValue: !1 },
      one_step_redir: { type: "Bool", defaultValue: !1 },
      login_from_aymh: { type: "Bool", defaultValue: !1 },
      in_checkpoint_fix_flow: { type: "Bool", defaultValue: !1 },
    });
  },
  null
);
__d(
  "XPagesCallToActionRedirectController",
  ["XController"],
  function (a, b, c, d, e, f) {
    e.exports = b("XController").create("/pages/call_to_action/redirect/", {
      cta_id: { type: "FBID", required: !0 },
    });
  },
  null
);
__d(
  "XPagesCallToActionSendToMobileController",
  ["XController"],
  function (a, b, c, d, e, f) {
    e.exports = b("XController").create(
      "/pages/call_to_action/send_to_mobile/",
      {
        action: { type: "String", required: !0 },
        cta_id: { type: "FBID", required: !0 },
      }
    );
  },
  null
);
__d(
  "XPagesCallToActionValidateController",
  ["XController"],
  function (a, b, c, d, e, f) {
    e.exports = b("XController").create("/pages/call_to_action/validate/", {
      ccta_id: { type: "Int", required: !0 },
      field: { type: "Enum", required: !0, enumType: 1 },
      field_value: { type: "String" },
    });
  },
  null
);
__d(
  "XPagesPlatformFirstPartyCTABootstrapController",
  ["XController"],
  function (a, b, c, d, e, f) {
    e.exports = b("XController").create("/iw/{id}/", {
      __asyncDialog: { type: "Int" },
      id: { type: "FBID", defaultValue: "244258209243064" },
      cta_id: { type: "FBID", defaultValue: "244258209243064" },
      referrer: { type: "Enum", defaultValue: "page", enumType: 1 },
      initial_input: { type: "String" },
      from_food_drink_service_provider: { type: "Bool", defaultValue: !1 },
    });
  },
  null
);
__d(
  "XServicesInstantBookingDialogController",
  ["XController"],
  function (a, b, c, d, e, f) {
    e.exports = b("XController").create(
      "/services_vertical/instant_booking/dialog/",
      {
        page_id: { type: "FBID", required: !0 },
        referrer: { type: "Enum", required: !0, enumType: 1 },
        referral_offer_id: { type: "FBID" },
        referrer_surface: { type: "Enum", enumType: 1 },
        prior_referrer: { type: "Enum", enumType: 1 },
        prior_referrer_surface: { type: "Enum", enumType: 1 },
        redirect_uri: { type: "String" },
        required_contact_info: { type: "EnumSet", enumType: null },
        service_duration: { type: "Int" },
        service_id: { type: "FBID" },
        service_name: { type: "String" },
        start_time: { type: "Int" },
        selected_date: { type: "Int" },
        user_id: { type: "String" },
        visible_contact_info: { type: "EnumVector", enumType: { member: 1 } },
        webhook_payload: { type: "String" },
        __asyncDialog: { type: "Int" },
      }
    );
  },
  null
);
__d(
  "PageCallToActionViewerUnitMixin",
  [
    "cx",
    "fbt",
    "invariant",
    "ix",
    "AsyncRequest",
    "Bootloader",
    "CustomCTALogger",
    "CustomCallToActionTypes",
    "DOM",
    "FBLogger",
    "LayerHideOnBlur",
    "LayerHideOnEscape",
    "OrganicIntakeFormMutationUtils",
    "PageCallToActionHovercard.react",
    "PageCallToActionOpenTableDialog.react",
    "PageCallToActionRef",
    "PageContentTabLoadingDialog",
    "PageTransitions",
    "ReactDOM",
    "ReactLayeredComponentMixin_DEPRECATED",
    "ServicesBookNowCTASubtype",
    "ServicesEventsLogger",
    "ServicesOpenMessageThread",
    "ThisControllerNoLongerExists",
    "URI",
    "XCctaViewerClickButtonController",
    "XLoginController",
    "XPagesCallToActionRedirectController",
    "XPagesCallToActionSendToMobileController",
    "XPagesCallToActionValidateController",
    "XPagesPlatformFirstPartyCTABootstrapController",
    "XServicesInstantBookingDialogController",
    "XUIContextualDialog.react",
    "XUIContextualDialogBody.react",
    "XUIDialog.react",
    "XUIDialogBody.react",
    "XUIDialogButton.react",
    "XUIDialogCancelButton.react",
    "XUIDialogFooter.react",
    "XUIDialogTitle.react",
    "XUISpinner.react",
    "XUIText.react",
    "goURI",
    "isFacebookURI",
    "prop-types",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i, j) {
    "use strict";
    var k,
      l,
      m = k || b("react"),
      n = b("CustomCallToActionTypes").TYPES,
      o = 3e3,
      p = 240,
      q = j("122578");
    a = {
      mixins: [b("ReactLayeredComponentMixin_DEPRECATED")],
      propTypes: {
        callToActionType: b("prop-types").string.isRequired,
        cctaID: b("prop-types").string.isRequired,
        foodAndDrinkLoggingParams: b("prop-types").object,
        pageName: b("prop-types").string.isRequired,
        redirect: b("prop-types").bool.isRequired,
        url: b("prop-types").string.isRequired,
      },
      getInitialState: function () {
        return {
          buttonLabel: null,
          callNowPrompt: null,
          showConfirmDialog: !1,
          showOpenTableDialog: !1,
          autoOpened: !1,
        };
      },
      renderLayers: function () {
        return !this.props.confirmDialog
          ? {}
          : {
              confirmDialog: m.jsxs(b("XUIDialog.react"), {
                onToggle: this._onConfirmDialogToggle,
                shown: this.state.showConfirmDialog,
                width: 335,
                children: [
                  m.jsx(b("XUIDialogTitle.react"), {
                    children: this.props.confirmDialog.title,
                  }),
                  m.jsxs(b("XUIDialogBody.react"), {
                    children: [
                      m.jsx("div", {
                        children: m.jsx(b("XUIText.react"), {
                          size: "xlarge_DEPRECATED",
                          children: this.props.confirmDialog.message,
                        }),
                      }),
                      m.jsx("p", {}),
                      m.jsx("div", {
                        children: m.jsx(b("XUIText.react"), {
                          size: "meta1",
                          children: this.props.confirmDialog.subMessage,
                        }),
                      }),
                    ],
                  }),
                  m.jsxs(b("XUIDialogFooter.react"), {
                    children: [
                      m.jsx(b("XUIDialogCancelButton.react"), {}),
                      m.jsx(b("XUIDialogButton.react"), {
                        action: "button",
                        label: this.props.confirmDialog.confirmButtonLabel
                          ? this.props.confirmDialog.confirmButtonLabel
                          : h._("Continuer"),
                        onClick: this._executeCallToAction,
                        use: "confirm",
                      }),
                    ],
                  }),
                ],
              }),
            };
      },
      _onClick: function () {
        this.props.confirmDialog
          ? this.setState({ showConfirmDialog: !0 })
          : (this._onToggleOpenTable(), this._executeCallToAction());
      },
      _onMouseEnter: function () {
        if (
          this.props.callToActionType === n.CALL_NOW &&
          this.props.surface !== b("PageCallToActionRef").ADMIN_MENU_TEST_LINK
        )
          this._showCallNowPrompt();
        else if (
          this.props.hovercardSpecs &&
          this.props.hovercardSpecs.exp === "hover"
        )
          this._renderHovercard();
        else return;
        b("CustomCTALogger").log({
          ccta_id: this.props.cctaID,
          ccta_type: this.props.callToActionType,
          event_type: "custom_cta_hover_viewer_unit",
          page_id: this.props.pageID,
          surface: this.props.surface,
          target_url: this.props.url,
          presence_cta: this.props.isPresenceCTA,
          ref: this.props.referrer,
        });
      },
      _onMouseLeave: function () {
        this.props.callToActionType === n.CALL_NOW &&
          this.props.surface !==
            b("PageCallToActionRef").ADMIN_MENU_TEST_LINK &&
          this._renderCallNowDialog(null);
      },
      _renderHovercard: function () {
        var a = this;
        this._dialogAnchor || (this._dialogAnchor = b("DOM").create("div"));
        b("ReactDOM").render(
          m.jsx(b("XUIContextualDialog.react"), {
            alignment: "center",
            behaviors: {
              LayerHideOnBlur: b("LayerHideOnBlur"),
              LayerHideOnEscape: b("LayerHideOnEscape"),
            },
            contextRef: function () {
              return a.getViewerButtonRef();
            },
            position: "above",
            shown: !0,
            children: m.jsx("div", {
              className: "_3mrx",
              children: m.jsx(b("PageCallToActionHovercard.react"), {
                cctaID: this.props.cctaID,
                cctaType: this.props.callToActionType,
                description: this.props.hovercardSpecs.description,
                displayUrl: this.props.hovercardSpecs.displayUrl,
                imageSrc: this.props.hovercardSpecs.imageSrc,
                redirectUrl: this.props.url,
                title: this.props.hovercardSpecs.title,
              }),
            }),
          }),
          this._dialogAnchor,
          "PageCallToActionViewerUnitMixin.js"
        );
      },
      _showCallNowPrompt: function () {
        var a = this;
        this.state.callNowPrompt
          ? this._renderCallNowDialog(this.state.callNowPrompt)
          : this._sendToMobile("prompt", function (b) {
              a.setState(
                {
                  callNowPrompt: m.jsxs("div", {
                    children: [
                      b.payload.text,
                      m.jsx("br", {}),
                      b.payload.subtext,
                    ],
                  }),
                },
                function () {
                  a._renderCallNowDialog(a.state.callNowPrompt);
                }
              );
            });
      },
      _sendToMobile: function (a, c) {
        this._renderCallNowDialog(m.jsx(b("XUISpinner.react"), {}));
        a = b("XPagesCallToActionSendToMobileController")
          .getURIBuilder()
          .setFBID("cta_id", this.props.cctaID)
          .setString("action", a)
          .getURI();
        new (b("AsyncRequest"))(a).setHandler(c).send();
      },
      _renderCallNowDialog: function (a) {
        var c = this;
        this._phoneCallAnchor ||
          (this._phoneCallAnchor = b("DOM").create("div"));
        b("ReactDOM").render(
          m.jsx(b("XUIContextualDialog.react"), {
            alignment: "center",
            behaviors: {
              LayerHideOnBlur: b("LayerHideOnBlur"),
              LayerHideOnEscape: b("LayerHideOnEscape"),
            },
            contextRef: function () {
              return c.getViewerButtonRef();
            },
            position: "below",
            shown: !!a,
            width: p,
            children: m.jsx(b("XUIContextualDialogBody.react"), {
              children: m.jsx("div", { className: "_2m80", children: a }),
            }),
          }),
          this._phoneCallAnchor,
          "PageCallToActionViewerUnitMixin.js"
        );
      },
      _redirectLoggedOutUserToLoginPage: function (a) {
        this.props.userID === "0" &&
          b("goURI")(
            b("XLoginController").getURIBuilder().setString("next", a).getURI()
          );
      },
      _onToggleOpenTable: function () {
        this.setState({ showOpenTableDialog: !this.state.showOpenTableDialog });
      },
      _onConfirmDialogToggle: function (a) {
        this.setState({ showConfirmDialog: a });
      },
      _renderInstantBooking: function () {
        var a = b("XServicesInstantBookingDialogController")
          .getURIBuilder()
          .setFBID("page_id", this.props.pageID)
          .setEnum("referrer", "page_cta")
          .setEnum("referrer_surface", "page")
          .getURI();
        new (b("AsyncRequest"))(a).send();
      },
      _renderComponentFlow: function () {
        !this.state.autoOpened &&
          this.props.shouldAutoOpen &&
          this.setState({ autoOpened: !0 });
        var a = this.props.pagesPlatformAppSpec;
        a = a || {};
        var c = a.food_drink_multiple_provider,
          d = a.is_web_app;
        a = a.url;
        if (c)
          return void new (b("AsyncRequest"))(
            b("ThisControllerNoLongerExists")
              .__DEADURI__("0esnp78ce")
              .toString()
          ).send();
        else if (a)
          if (d) return void window.open(a);
          else
            return void new (b("AsyncRequest"))(
              new (l || (l = b("URI")))(a).toString()
            ).send();
        else
          return void new (b("AsyncRequest"))(
            b("XPagesPlatformFirstPartyCTABootstrapController")
              .getURIBuilder()
              .setFBID("id", this.props.cctaID)
              .setEnum("referrer", this._getComponentFlowReferrer())
              .getURI()
              .toString()
          ).send();
      },
      _getComponentFlowReferrer: function () {
        switch (this.props.surface) {
          case b("PageCallToActionRef").FEED_STORY_ATTACHMENT:
            return "feed_story_attachment";
          case b("PageCallToActionRef").PAGES_SAVED_SECTION:
            return "pages_saved_section";
          case b("PageCallToActionRef").PAGES_SHARE_ATTACHMENT:
            return "pages_share_attachment";
          case b("PageCallToActionRef").PAGES_MINUTIAE_ATTACHMENT:
            return "pages_minutiae_attachment";
          case b("PageCallToActionRef").HOVER_CARD_SURFACE:
            return "hover_card_surface";
          case b("PageCallToActionRef").SEARCH_ENTITY_CARD:
            return "search";
          case b("PageCallToActionRef").LED_FEED_UNIT:
            return "led_pivot_cards";
          default:
            return "unknown";
        }
      },
      _openChatTab: function () {
        var a = this,
          c = this.props.entrypoint;
        if (c === void 0)
          switch (this.props.surface) {
            case b("PageCallToActionRef").ADMIN_MENU_TEST_LINK:
              c = "fb_page:admin_test_link";
              break;
            default:
              c = "fb_page:fb_page_cta_" + this.props.surface;
              break;
          }
        b("Bootloader").loadModules(
          ["ChatOpenTabEventLogger", "FantaTabActions", "MercuryIDs"],
          function (b, d, e) {
            var f = a.props.pageID;
            e = e.getThreadIDFromUserID(f);
            d.openTab(e, [c]);
            b.logUserClickOpen(a.props.referrer, f);
          },
          "PageCallToActionViewerUnitMixin"
        );
      },
      _openInternalFlow: function () {
        this._redirectLoggedOutUserToLoginPage(this.props.pageUrl),
          b("PageContentTabLoadingDialog").show(),
          new (b("AsyncRequest"))(this.props.url)
            .setFinallyHandler(function (a) {
              b("PageContentTabLoadingDialog").hide();
            })
            .send();
      },
      _executeCallToAction: function () {
        var a = this;
        this.setState({ showConfirmDialog: !1 });
        switch (this.props.destinationType) {
          case "MESSENGER":
            this._openChatTab();
            break;
          case "BECOME_SUPPORTER":
            if (this.props.isSupporterOfPage === !0) {
              b("goURI")(this.props.url);
              return;
            }
            new (b("AsyncRequest"))()
              .setURI(this.props.url)
              .setMethod("POST")
              .send();
            break;
          case "BECOME_A_VOLUNTEER":
            new (b("AsyncRequest"))()
              .setURI(this.props.url)
              .setMethod("POST")
              .send();
            break;
          case "DONATE":
            this._openInternalFlow();
            break;
          case "LEAD_GEN":
            this.props.callToActionType === n.CONTACT_US &&
              (this._redirectLoggedOutUserToLoginPage(this.props.pageUrl),
              this._renderComponentFlow());
            break;
          case "WEBSITE":
            if (this.props.userID !== "0") {
              var c = b("XCctaViewerClickButtonController")
                .getURIBuilder()
                .setFBID("page_id", this.props.pageID)
                .getURI();
              new (b("AsyncRequest"))().setURI(c).send();
            }
            if (this.props.redirect) {
              c = b("XPagesCallToActionRedirectController")
                .getURIBuilder()
                .setFBID("cta_id", this.props.cctaID)
                .getURI();
              new (b("AsyncRequest"))().setURI(c).setMethod("POST").send();
            } else {
              b("isFacebookURI")(new (l || (l = b("URI")))(this.props.url)) ||
                i(0, 4747, this.props.url);
              this.props.hovercardSpecs &&
              this.props.hovercardSpecs.exp === "click"
                ? this._renderHovercard()
                : window.open(this.props.url);
              if (this.props.userID !== "0") {
                c = b("XPagesCallToActionValidateController")
                  .getURIBuilder()
                  .setInt("ccta_id", this.props.cctaID)
                  .setEnum("field", "web_uri")
                  .setString("field_value", this.props.url)
                  .getURI();
                new (b("AsyncRequest"))()
                  .setURI(c)
                  .setErrorHandler(function (a) {
                    b("FBLogger")("pages")
                      .catching(a.toError())
                      .warn("Error sending async request for CTA validation");
                  })
                  .send();
              }
            }
            break;
          case "NATIVE_VIDEO":
            c = this.props.url.match(/videos\/([0-9]*)\//);
            c = (c && c[1]) || null;
            c || i(0, 4748);
            b("Bootloader").loadModules(
              ["TahoeController"],
              function (c) {
                return c.openFromVideoLink(
                  new (l || (l = b("URI")))(a.props.url),
                  {
                    caller: "channel_view_from_page_call_to_action",
                    channelID: a.props.pageID,
                  }
                );
              },
              "PageCallToActionViewerUnitMixin"
            );
            break;
          case "MINI_SHOP":
          case "OFFER":
          case "STORE_FRONT":
          case "EVENT_TICKET":
            b("PageTransitions").go(this.props.url, !0);
            break;
          case "OPEN_TABLE":
            this._dialogAnchor || (this._dialogAnchor = b("DOM").create("div"));
            this.state.showOpenTableDialog &&
              b("ReactDOM").render(
                m.jsx(b("PageCallToActionOpenTableDialog.react"), {
                  onCancel: this._onToggleOpenTable,
                  openTableSpecs: this.props.openTableSpecs,
                  pageID: this.props.pageID,
                }),
                this._dialogAnchor,
                "PageCallToActionViewerUnitMixin.js"
              );
            break;
          case "PHONE_CALL":
            this._sendToMobile("send", function (b) {
              a._renderCallNowDialog(
                m.jsxs("div", {
                  children: [
                    b.payload.text,
                    m.jsx("br", {}),
                    b.payload.subtext,
                  ],
                })
              );
              b = b.payload.label;
              b &&
                (a.setState({ buttonLabel: b.toString(), buttonIcon: q }),
                window.setTimeout(function () {
                  a.setState({ buttonLabel: null, buttonIcon: null }),
                    a._renderCallNowDialog(null);
                }, o));
            });
            break;
          case "EMAIL":
            window.open(this.props.url);
            break;
          case "GROUP":
            b("goURI")(this.props.url);
            break;
          case "SHOP_ON_FACEBOOK":
            b("goURI")(this.props.url);
            break;
          case "WHATSAPP_MESSAGE":
            window.open(this.props.url);
            break;
          case "VIDEO_CALL":
            b("Bootloader").loadModules(
              ["FBRTCCore"],
              function (b) {
                b.startOutgoingCall(
                  a.props.pageID,
                  "meeting_room_page_profile",
                  !1,
                  !0
                );
              },
              "PageCallToActionViewerUnitMixin"
            );
            break;
          case "FIRST_PARTY":
            c = this.props;
            var d = c.bookNowCTASubtype,
              e = c.getQuoteCTASubtype;
            c = c.url;
            var f = b("ServicesBookNowCTASubtype").FACEBOOK_APPOINTMENT,
              g = b("ServicesBookNowCTASubtype").GOOGLE_CALENDAR,
              h = b("ServicesBookNowCTASubtype").REQUEST_TIME;
            if ([f, g, h].includes(d)) new (b("AsyncRequest"))(c).send();
            else if (e === "lead_gen")
              new (b("AsyncRequest"))().setURI(c).send();
            else if (e === "organic_intake_form") {
              f = {
                referrerUIComponent: "get_quote_page_cta",
                referrerUISurface: "page",
              };
              b("ServicesEventsLogger").log(
                this.props.pageID,
                "services_organic_intake_form_consumer_cta_click",
                f
              );
              b("ServicesOpenMessageThread").openTab(
                this.props.pageID.toString()
              );
              b("OrganicIntakeFormMutationUtils").triggerOrganicIntakeForm(
                this.props.userID,
                this.props.pageID,
                "get_quote_page_cta"
              );
            } else this._renderComponentFlow();
            break;
          case "INSTANT_BOOKING":
            this._renderInstantBooking();
            break;
          case "CANVAS":
            break;
        }
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "ServicesFBAppointmentsUtils",
  ["DateStrings", "PageCallToActionRef"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      a = (a + 1) % 7;
      return d("DateStrings").getWeekdayName(a);
    }
    function b(a) {
      switch (a) {
        case c("PageCallToActionRef").PAGES_ACTIONS_UNIT_SURFACE:
        case c("PageCallToActionRef").UNOWNED_PAGE_COVER:
        case c("PageCallToActionRef").PAGES_ACTION_BAR_CHANNEL:
          return "page";
        case c("PageCallToActionRef").SEARCH_ENTITY_CARD:
          return "search";
      }
      return null;
    }
    function e(a) {
      switch (a) {
        case c("PageCallToActionRef").PAGES_ACTIONS_UNIT_SURFACE:
        case c("PageCallToActionRef").UNOWNED_PAGE_COVER:
        case c("PageCallToActionRef").PAGES_ACTION_BAR_CHANNEL:
        case c("PageCallToActionRef").SEARCH_ENTITY_CARD:
          return "primary_cta";
      }
      return null;
    }
    g.getWeekdayName = a;
    g.getCTAReferrerSurface = b;
    g.getCTAReferrer = e;
  },
  98
);
__d(
  "XMessengerDotComMainController",
  ["XController"],
  function (a, b, c, d, e, f) {
    e.exports = b("XController").create("/t/{?thread_key}/", {
      thread_key: { type: "String" },
      folder_key: { type: "String" },
      mid: { type: "String" },
      ref: { type: "String" },
      text: { type: "String" },
      messaging_source: { type: "Enum", enumType: 1 },
      source: { type: "Enum", enumType: 1 },
      source_id: { type: "String" },
      subchannel: { type: "String" },
      redirect_source: { type: "Enum", enumType: 1 },
      recurring_notification: { type: "Bool", defaultValue: !1 },
      cadence: { type: "String" },
      topic: { type: "String" },
      app_id: { type: "FBID" },
      link_hash: { type: "String" },
      mm_user_ref: { type: "String" },
    });
  },
  null
);
__d(
  "CustomCTAViewerUnit.react",
  [
    "cx",
    "ix",
    "CustomCTALogger",
    "CustomCallToActionTypes",
    "Image.react",
    "LocalTriggerEventsTypedLogger",
    "LocationStoryTypedLogger",
    "PageCallToActionButton.react",
    "PageCallToActionButtonActions",
    "PageCallToActionIcon",
    "PageCallToActionRef",
    "PageCallToActionViewerUnitMixin",
    "PagesLogger",
    "PagesLoggerEventEnum",
    "PagesLoggerEventTargetEnum",
    "PagesLoggerTBLMigrationUtil",
    "PagesPageActionClickFalcoEvent",
    "ServicesEventsLogger",
    "ServicesFBAppointmentsUtils",
    "XMessengerDotComMainController",
    "createReactClass_DEPRECATED",
    "goURI",
    "prop-types",
    "react",
    "setImmediate",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = b("CustomCallToActionTypes").LABELS,
      k = b("CustomCallToActionTypes").TYPES,
      l = i || (i = b("react")),
      m = 16,
      n = 28;
    a = b("createReactClass_DEPRECATED")({
      displayName: "CustomCTAViewerUnit",
      mixins: [b("PageCallToActionViewerUnitMixin")],
      propTypes: {
        ctaButtonIcon: b("prop-types").string,
        buttonLabel: b("prop-types").string,
        className: b("prop-types").string,
        contactUsSpecs: b("prop-types").object.isRequired,
        entrypoint: b("prop-types").string,
        hovercardSpecs: b("prop-types").object,
        iconName: b("prop-types").string,
        openTableSpecs: b("prop-types").object.isRequired,
        pageID: b("prop-types").string.isRequired,
        pageUrl: b("prop-types").string,
        refButton: b("prop-types").object,
        referrer: b("prop-types").string,
        shouldAutoOpen: b("prop-types").bool,
        storyID: b("prop-types").string,
        surface: b("prop-types").string.isRequired,
        userID: b("prop-types").string.isRequired,
        foodAndDrinkLoggingParams: b("prop-types").object,
        servicesLoggingParams: b("prop-types").object,
        ctaIconAsset: b("prop-types").string,
        isSupporterOfPage: b("prop-types").bool,
      },
      componentDidMount: function () {
        var a = this;
        this.props.shouldAutoOpen &&
          [
            "DONATE",
            "FIRST_PARTY",
            "LEAD_GEN",
            "MESSENGER",
            "NATIVE_VIDEO",
          ].indexOf(this.props.destinationType) >= 0 &&
          (this.onButtonClick(),
          b("setImmediate")(function () {
            b("PageCallToActionButtonActions").disableAutoOpen(a.props.cctaID);
          }));
        b("CustomCTALogger").log({
          ccta_id: this.props.cctaID,
          ccta_type: this.props.callToActionType,
          event_type: "custom_cta_show_viewer_unit",
          page_id: this.props.pageID,
          surface: this.props.surface,
          target_url: this.props.url,
          story_id: this.props.storyID,
        });
        (this.props.callToActionType === k.BOOK_NOW ||
          this.props.callToActionType === k.REQUEST_QUOTE) &&
          this.logServicesCTAImpression();
      },
      logServicesCTAImpression: function () {
        var a = this.props,
          c = a.pageID,
          d = a.surface;
        a = a.servicesLoggingParams;
        var e = b("ServicesFBAppointmentsUtils").getCTAReferrer(d);
        d = b("ServicesFBAppointmentsUtils").getCTAReferrerSurface(d);
        if (!e || !d) return;
        a = a || {};
        var f = a.priorReferrer,
          g = a.priorReferrerSurface;
        a = a.externalReferrerURI;
        f = {
          referrer: e,
          referrer_surface: d,
          prior_referrer: f,
          prior_referrer_surface: g,
        };
        a && (f = babelHelpers["extends"]({}, f, { external_referrer_uri: a }));
        g = { referrerUIComponent: e, referrerUISurface: d };
        a =
          this.props.callToActionType === k.BOOK_NOW
            ? "book_now_cta_impression"
            : "services_organic_intake_form_consumer_cta_impression";
        b("ServicesEventsLogger").log(c, a, g, f);
      },
      onButtonClick: function () {
        var a,
          c = this;
        this._onClick();
        var d = "custom_cta_click_viewer_unit";
        this.props.hovercardSpecs &&
          this.props.hovercardSpecs.exp === "click" &&
          this.props.surface !==
            b("PageCallToActionRef").CTA_HOVER_CARD_SURFACE &&
          (d = "custom_cta_hover_viewer_unit");
        b("PagesLogger").log(
          this.props.pageID,
          b("PagesLoggerEventEnum").CLICK,
          b("PagesLoggerEventTargetEnum").PAGES_PRIMARY_CTA_BUTTON,
          this.props.surface,
          null,
          {
            cta_type: this.props.callToActionType,
            cta_id: this.props.cctaID,
            cta_target_url: this.props.url,
            cta_web_destination_type:
              (a = this.props.ctaWebDestinationType) != null ? a : null,
          }
        );
        b("CustomCTALogger").log({
          ccta_id: this.props.cctaID,
          ccta_type: this.props.callToActionType,
          event_type: d,
          page_id: this.props.pageID,
          surface: this.props.surface,
          target_url: this.props.url,
          ref: this.props.referrer,
          story_id: this.props.storyID,
        });
        a = this.props.pageID;
        var e = b("PagesLoggerTBLMigrationUtil").convertCTAToActionType(
          this.props.callToActionType
        );
        a != null &&
          e !== null &&
          b("PagesPageActionClickFalcoEvent").log(function () {
            return {
              event_location: "page__legacy_cta_button",
              page_id: c.props.pageID,
              referrer: null,
              event_data: {
                action_id: c.props.cctaID,
                action_type: e,
                is_primary: !0,
              },
            };
          });
        this.props.surface === b("PageCallToActionRef").FEED_STORY_ATTACHMENT &&
          this.logButtonClickToLocationStoryTable();
        this.props.surface === b("PageCallToActionRef").LED_FEED_UNIT &&
          this.logButtonClickToLocalTriggerEventsTable();
        this.props.callToActionType === k.WOODHENGE_SUPPORT &&
          this.props.destinationType === "BECOME_SUPPORTER" &&
          this.props.url != null &&
          b("goURI")(this.props.url);
        if (
          this.props.callToActionType === k.MESSAGE &&
          (this.props.surface ===
            b("PageCallToActionRef").PAGE_PLUGIN_SURFACE ||
            this.props.surface === b("PageCallToActionRef").SERVICES_SEO_PAGES)
        ) {
          d = b("XMessengerDotComMainController")
            .getURIBuilder()
            .setString("thread_key", this.props.pageID)
            .setEnum("messaging_source", "source:pages:page_plugin_message")
            .getURI()
            .setDomain("www.messenger.com")
            .setProtocol("https");
          window.open(d, "_blank");
        }
      },
      logButtonClickToLocationStoryTable: function () {
        new (b("LocationStoryTypedLogger"))()
          .setStoryID(parseInt(this.props.storyID, 10))
          .setPlaceID(parseInt(this.props.pageID, 10))
          .setAnalyticsEvent("checkin_cta_tap")
          .setEvent("checkin_cta_tap")
          .setCtaType(this.props.callToActionType)
          .log();
      },
      logButtonClickToLocalTriggerEventsTable: function () {
        new (b("LocalTriggerEventsTypedLogger"))()
          .setEventName(this.props.eventName)
          .setPivotType(this.props.unitType)
          .setObjectType(this.props.objectType)
          .setPlaceID(this.props.pageID)
          .setAttachmentType(this.props.attachmentType)
          .setPostType(this.props.postType)
          .setAuthorType(this.props.authorType)
          .setEntryPoint(this.props.entryPoint)
          .setExperimentName(this.props.experimentName)
          .setExperimentCondition(this.props.experimentCondition)
          .setPostID(this.props.postID)
          .setPosition(this.props.position)
          .updateExtraData(this.props.extraData)
          .log();
      },
      getViewerButtonRef: function () {
        if (!this.props.refButton) return this.refs.CTAViewerButton;
        else return this.props.refButton;
      },
      render: function () {
        var a = this.props,
          c = a.callToActionType;
        a = a.ctaIconAsset;
        c = c;
        var d = c ? j[c] : null;
        d = this.state.buttonLabel || this.props.buttonLabel || d;
        if (!d) return null;
        var e = null,
          f =
            this.props.iconName &&
            this.props.surface ===
              b("PageCallToActionRef").PAGES_ACTIONS_UNIT_SURFACE;
        f
          ? (this.props.iconName === "app-messenger"
              ? (e = h("481156"))
              : this.props.iconName === "app-whatsapp"
              ? (e = h("482855"))
              : this.props.iconName === "app-work-chat" && (e = h("701301")),
            e !== null &&
              (d = l.jsx("span", { className: "_45ky", children: d })))
          : (e = c ? b("PageCallToActionIcon").get(c) : null);
        c =
          (c =
            (c = (c = a) != null ? c : this.state.buttonIcon) != null
              ? c
              : this.props.buttonIcon) != null
            ? c
            : e;
        e = a != null ? { height: m, width: m } : null;
        a = l.jsx(b("Image.react"), babelHelpers["extends"]({}, e, { src: c }));
        this.props.ctaButtonIcon === "play" &&
          ((a = l.jsx(b("Image.react"), {
            className: "ctaButtonIcon",
            src: h("497829"),
          })),
          (d = l.jsx("span", { className: "blueButtonLabel", children: d })),
          (f = !0));
        this.props.surface ===
          b("PageCallToActionRef").PAGES_ACTIONS_UNIT_SURFACE &&
          a === null &&
          (d = l.jsx("span", { className: "_1m46", children: d }));
        a != null && d.length > n && (a = null);
        return l.jsx(b("PageCallToActionButton.react"), {
          className: this.props.className,
          displayIconInPagesButton: f,
          icon: a,
          label: d,
          onClick: this.onButtonClick,
          onMouseEnter: this._onMouseEnter,
          onMouseLeave: this._onMouseLeave,
          ref: "CTAViewerButton",
          surface: this.props.surface,
        });
      },
    });
    e.exports = a;
  },
  null
);
__d(
  "FluxContainerNameUtils",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      if (a && b)
        try {
          Object.defineProperty(a, "name", { value: b });
        } catch (a) {}
      return a;
    }
    f.nameContainer = a;
  },
  66
);
__d(
  "expectationViolation",
  [
    "ErrorNormalizeUtils",
    "ExecutionEnvironment",
    "FBLogger",
    "cr:840411",
    "emptyFunction",
    "sprintf",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d = c("emptyFunction");
    function a(a) {
      var b;
      for (
        var d = arguments.length, e = new Array(d > 1 ? d - 1 : 0), f = 1;
        f < d;
        f++
      )
        e[f - 1] = arguments[f];
      (b = c("FBLogger")(
        "expectation_violation"
      ).blameToPreviousFrame()).warn.apply(b, [a].concat(e));
    }
    a.setHandler = b;
    function b(a) {
      d = a;
    }
    g["default"] = a;
  },
  98
);
__d(
  "getUniformDispatcher",
  ["invariant"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    function a(a) {
      (a && a.length) || h(0, 18238);
      a = a[0].getDispatcher();
      return a;
    }
    g["default"] = a;
  },
  98
);
__d(
  "isNullish",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return a === void 0 || a === null;
    }
    f["default"] = a;
  },
  66
);
__d(
  "shallowArrayEqual",
  ["isNullish"],
  function (a, b, c, d, e, f, g) {
    function a(a, b) {
      if (a === b) return !0;
      if (c("isNullish")(a) || c("isNullish")(b) || a.length !== b.length)
        return !1;
      for (var d = 0, e = a.length; d < e; d++) if (a[d] !== b[d]) return !1;
      return !0;
    }
    g["default"] = a;
  },
  98
);
__d(
  "FluxContainerSubscriptions",
  [
    "expectationViolation",
    "getUniformDispatcher",
    "nullthrows",
    "shallowArrayEqual",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a) {
        (this.$1 = []), (this.$4 = a != null ? a : this.constructor.name);
      }
      var b = a.prototype;
      b.setStores = function (a) {
        var b = this;
        if (this.$3 && c("shallowArrayEqual")(this.$3, a)) return;
        this.$3 = a;
        this.$7();
        this.$8();
        if (a.length === 0) {
          c("expectationViolation")(
            "there should be at least 1 store in a flux subscription"
          );
          return;
        }
        var d = !1,
          e = [],
          f = function () {
            d &&
              (b.$1.forEach(function (a) {
                return a();
              }),
              (d = !1));
          },
          g = c("getUniformDispatcher")(a);
        e = function () {
          if (g.registerContainer != null)
            b.$6 = g.registerContainer(function (a) {
              f();
            }, b.$4);
          else {
            var c = a.map(function (a) {
              return a.getDispatchToken();
            });
            b.$6 = g.register(
              function (a) {
                g.waitFor(c), f();
              },
              b.$4,
              null,
              b.$4
            );
          }
          g.explicitlyRegisterStore && g.explicitlyRegisterStore(b);
        };
        this.$2 = a.map(function (a) {
          return a.addListener(function () {
            d = !0;
          });
        });
        e();
        this.$5 = g;
      };
      b.addListener = function (a) {
        this.$1.push(a);
      };
      b.reset = function () {
        this.$7(), this.$8(), this.$9(), this.$10();
      };
      b.$7 = function () {
        this.$2 &&
          (this.$2.forEach(function (a) {
            return a.remove();
          }),
          (this.$2 = null));
      };
      b.$8 = function () {
        this.$5 && this.$6 != null && this.$5.unregister(this.$6),
          (this.$5 = null),
          (this.$6 = null);
      };
      b.$10 = function () {
        this.$3 = null;
      };
      b.$9 = function () {
        this.$1 = [];
      };
      b.getDispatchToken = function () {
        return c("nullthrows")(this.$6, "dispatchToken must be set");
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "FluxContainer",
  [
    "FBLogger",
    "FluxContainerNameUtils",
    "FluxContainerSubscriptions",
    "cr:1609",
    "err",
    "gkx",
    "react",
    "setImmediate",
    "shallowEqual",
    "warning",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.Component,
      i = b.PureComponent,
      j = {
        pure: !0,
        pureProps: !1,
        withProps: !1,
        withContext: !1,
        withCallback: !1,
      };
    function k(a, b) {
      var e = babelHelpers["extends"]({}, j, b || {}),
        f,
        g = function (b, c, d, f, g) {
          b = e.withProps ? d : void 0;
          d = e.withContext ? f : void 0;
          f = e.withCallback ? g : void 0;
          g = a.calculateState(c, b, d, f);
          return g;
        },
        h = function (b, c) {
          b = e.withProps ? b : void 0;
          c = e.withContext ? c : void 0;
          return a.getStores(b, c);
        };
      b = (function (a) {
        babelHelpers.inheritsLoose(b, a);
        function b(b, d) {
          var e;
          e = a.call(this, b, d) || this;
          f || (f = e.constructor);
          e.$BasicContainer1 = new (c("FluxContainerSubscriptions"))(
            f.displayName || f.name
          );
          e.$BasicContainer3 = function () {
            e.setState(function (a, b) {
              b = g(
                babelHelpers.assertThisInitialized(e),
                a,
                b,
                e.context,
                e.$BasicContainer4
              );
              return c("shallowEqual")(a, b) ? null : b;
            });
          };
          var h = e.$BasicContainer3;
          e.$BasicContainer4 = function () {
            return h == null ? void 0 : h();
          };
          e.$BasicContainer4.isRevoked = !1;
          e.$BasicContainer4.revoke = function () {
            (e.$BasicContainer4.isRevoked = !0), (h = null);
          };
          c("gkx")("4708") && e.$BasicContainer4.revoke();
          e.$BasicContainer2 = !1;
          c("gkx")("4708") ||
            (e.$BasicContainer5(b, d), (e.$BasicContainer2 = !0));
          b = g(
            babelHelpers.assertThisInitialized(e),
            void 0,
            b,
            d,
            e.$BasicContainer4
          );
          e.state = babelHelpers["extends"]({}, e.state || {}, b);
          return e;
        }
        var d = b.prototype;
        d.UNSAFE_componentWillMount = function () {
          a.prototype.UNSAFE_componentWillMount &&
            (a.prototype.UNSAFE_componentWillMount.call(this),
            c("gkx")("4708") && this.$BasicContainer3());
        };
        d.UNSAFE_componentWillReceiveProps = function (b, d) {
          var f = this;
          a.prototype.UNSAFE_componentWillReceiveProps &&
            a.prototype.UNSAFE_componentWillReceiveProps.call(this, b, d);
          var i =
              !e.withProps || (e.pureProps && c("shallowEqual")(b, this.props)),
            j =
              !e.withContext ||
              (e.pureProps && c("shallowEqual")(d, this.context));
          if (j && i) return;
          j = h(b, d);
          j.length > 0 && this.$BasicContainer1.setStores(j);
          this.setState(function (a) {
            return g(f, a, b, d, f.$BasicContainer4);
          });
        };
        d.componentDidMount = function () {
          var b = this;
          a.prototype.componentDidMount &&
            a.prototype.componentDidMount.call(this);
          if (this.$BasicContainer4.isRevoked === !0) {
            var c = this.$BasicContainer3;
            this.$BasicContainer4 = function () {
              return c == null ? void 0 : c();
            };
            this.$BasicContainer4.isRevoked = !1;
            this.$BasicContainer4.revoke = function () {
              (b.$BasicContainer4.isRevoked = !0), (c = null);
            };
          }
          this.$BasicContainer2 ||
            (this.$BasicContainer5(this.props, this.context),
            this.$BasicContainer3(),
            (this.$BasicContainer2 = !0));
        };
        d.componentWillUnmount = function () {
          a.prototype.componentWillUnmount &&
            a.prototype.componentWillUnmount.call(this),
            this.$BasicContainer1.reset(),
            (this.$BasicContainer2 = !1),
            this.$BasicContainer4.revoke();
        };
        d.$BasicContainer5 = function (a, b) {
          var c = this;
          a = h(a, b);
          a.length > 0 &&
            (this.$BasicContainer1.setStores(a),
            this.$BasicContainer1.addListener(function () {
              c.setState(function (a, d) {
                return g(c, a, d, b);
              });
            }));
        };
        return b;
      })(a);
      b = e.pure && !(a.prototype instanceof i) ? l(b) : b;
      d("FluxContainerNameUtils").nameContainer(
        b,
        e.name || a.displayName || a.name
      );
      return b;
    }
    function l(a) {
      a = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          var a, c;
          for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
            e[f] = arguments[f];
          return (
            ((a = c = b.call.apply(b, [this].concat(e)) || this),
            (c.isPureFluxContainer = !0),
            a) || babelHelpers.assertThisInitialized(c)
          );
        }
        var d = a.prototype;
        d.shouldComponentUpdate = function (a, b) {
          return (
            !c("shallowEqual")(this.props, a) ||
            !c("shallowEqual")(this.state, b)
          );
        };
        return a;
      })(a);
      return a;
    }
    function a(a, b, c, d) {
      var e = (function (e) {
        babelHelpers.inheritsLoose(d, e);
        function d() {
          return e.apply(this, arguments) || this;
        }
        d.getStores = (function (b) {
          function a(a, c) {
            return b.apply(this, arguments);
          }
          a.toString = function () {
            return b.toString();
          };
          return a;
        })(function (a, c) {
          return b(a, c);
        });
        d.calculateState = (function (b) {
          function a(a, c, d, e) {
            return b.apply(this, arguments);
          }
          a.toString = function () {
            return b.toString();
          };
          return a;
        })(function (a, b, d, e) {
          return c(a, b, d, e);
        });
        var f = d.prototype;
        f.render = function () {
          return a(this.state);
        };
        return d;
      })(h);
      return k(e, d);
    }
    e = { create: k, createFunctional: a };
    g["default"] = e;
  },
  98
);
__d(
  "FluxStoreInstrumentation",
  ["invariant"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = null;
    function a(a) {
      i == null || h(0, 2260), (i = a);
    }
    function b(a) {
      return i ? i.emitChange(a) : null;
    }
    g.inject = a;
    g.onEmitChange = b;
  },
  98
);
__d(
  "FluxStoreOnDispatchInstrumentation",
  ["SimpleHook"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = new (d("SimpleHook").SimpleHook)();
    g["default"] = a;
  },
  98
);
__d(
  "concatArrays",
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      var b;
      return (b = []).concat.apply(b, a);
    }
    f["default"] = a;
  },
  66
);
__d(
  "distinctArray",
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      if (a == null) return [];
      if (Array.isArray(a)) {
        var b = a.length;
        if (b <= 200) {
          var c = [];
          for (var d = 0; d < b; d++) {
            var e = a[d];
            c.indexOf(e) === -1 && c.push(e);
          }
          return c;
        }
      }
      return Array.from(new Set(a).values());
    }
    f["default"] = a;
  },
  66
);
__d(
  "FluxStore",
  [
    "invariant",
    "EventEmitter",
    "FluxStoreInstrumentation",
    "FluxStoreOnDispatchInstrumentation",
    "__debug",
    "concatArrays",
    "distinctArray",
    "performanceAbsoluteNow",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i;
    a = (function () {
      function a(a) {
        (this.__className = this.constructor.name),
          (this.__moduleID = this.constructor.__moduleID),
          (this.__changed = !1),
          (this.__changeEvent = "change"),
          (this.__dispatcher = a),
          (this.__emitter = new (c("EventEmitter"))()),
          (this.$3 = !1),
          this.__registerDispatcherCallback(a);
      }
      var b = a.prototype;
      b.__registerDispatcherCallback = function (a) {
        var b = this;
        this.$2 = a.register(
          function (a) {
            return b.__invokeOnDispatch(a);
          },
          this.__getIDForDispatcher(),
          this,
          this.__moduleID
        );
      };
      b.addListener = function (a) {
        return this.__emitter.addListener(this.__changeEvent, a);
      };
      b.getActionTypes = function () {
        if (!this.$1) {
          var a = this.__getActionTypes();
          if (a != null) {
            var b = this.getDependencyStores();
            if (b.length > 0) {
              var d = !1;
              b = c("concatArrays")(
                b
                  .map(function (a) {
                    a = a && a.getActionTypes ? a.getActionTypes() : null;
                    a == null && (d = !0);
                    return a;
                  })
                  .filter(Boolean)
              );
              d ? (a = null) : (a = c("distinctArray")(a.concat(b)));
            }
          }
          this.$1 = a;
        }
        return this.$1;
      };
      b.getDispatcher = function () {
        return this.__dispatcher;
      };
      b.getDispatchToken = function () {
        return this.$2;
      };
      b.getDependencyDispatchTokens = function () {
        this.$5 ||
          (this.$5 = this.getDependencyStores().map(function (a) {
            return a && a.getDispatchToken && a.getDispatchToken();
          }));
        return this.$5;
      };
      b.getDependencyStores = function () {
        this.$4 || (this.$4 = c("distinctArray")(this.__getDependencyStores()));
        return this.$4;
      };
      b.addStoreDependency = function (a) {
        var b = this.__dispatcher.registerDependency;
        b && b(this.getDispatchToken(), a.getDispatchToken());
      };
      b.hasChanged = function () {
        this.__dispatcher.isDispatching() || h(0, 1147, this.__className);
        return this.__changed;
      };
      b.__setAsUnchanged = function () {
        this.__changed = !1;
      };
      b.__emitChange = function () {
        this.__dispatcher.isDispatching() || h(0, 1148, this.__className);
        if (this.__changed) return;
        d("FluxStoreInstrumentation").onEmitChange(
          this.__moduleID != null ? this.__moduleID : "unknown"
        );
        this.__changed = !0;
      };
      b.__invokeOnDispatch = function (a) {
        this.__changed = !1;
        var b = c("FluxStoreOnDispatchInstrumentation").hasCallback()
          ? c("performanceAbsoluteNow")()
          : null;
        this.__onDispatch(a);
        if (b != null) {
          c("FluxStoreOnDispatchInstrumentation").call(
            (a = this.__moduleID) != null ? a : "unknown",
            c("performanceAbsoluteNow")() - b
          );
        }
        this.__inform();
      };
      b.__inform = function (a) {
        this.$3 = this.__changed || this.$3;
        var b =
          this.__dispatcher.shouldAllowInforms == null ||
          this.__dispatcher.shouldAllowInforms();
        b &&
          this.$3 &&
          ((this.$3 = !1), this.__emitter.emit(a || this.__changeEvent));
      };
      b.__onDispatch = function (a) {
        h(0, 1149, this.__className);
      };
      b.__getActionTypes = function () {
        return null;
      };
      b.__getDependencyStores = function () {
        return [];
      };
      b.__getIDForDispatcher = function () {
        return this.__className;
      };
      return a;
    })();
    a;
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "TypedFluxStore",
  ["FluxStore"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("FluxStore");
  },
  98
);
__d(
  "FluxReduceStore",
  ["invariant", "TypedFluxStore", "abstractMethod"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b) {
        b = a.call(this, b) || this;
        b.$FluxReduceStore1 = b.getInitialState();
        return b;
      }
      var d = b.prototype;
      d.getState = function () {
        return this.$FluxReduceStore1;
      };
      d.getInitialState = function () {
        return c("abstractMethod")("FluxReduceStore", "getInitialState");
      };
      d.reduce = function (a, b) {
        return c("abstractMethod")("FluxReduceStore", "reduce");
      };
      d.areEqual = function (a, b) {
        return a === b;
      };
      d.__invokeOnDispatch = function (a, b) {
        b === void 0 && (b = !0);
        this.__changed = !1;
        var c = this.$FluxReduceStore1;
        a = this.reduce(c, a);
        a !== void 0 || h(0, 2189, this.constructor.name);
        this.areEqual(c, a) ||
          ((this.$FluxReduceStore1 = a), this.__emitChange());
        b && this.__inform();
      };
      d.__setState = function (a) {
        this.$FluxReduceStore1 = a;
      };
      return b;
    })(c("TypedFluxStore"));
    a.__moduleID = f.id;
    g["default"] = a;
  },
  98
);
__d(
  "FluxMapStore",
  ["invariant", "FluxReduceStore", "immutable"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var d = b.prototype;
      d.getInitialState = function () {
        return c("immutable").Map();
      };
      d.at = function (a) {
        this.has(a) || h(0, 465, a);
        return this.get(a);
      };
      d.has = function (a) {
        return this.getState().has(a);
      };
      d.get = function (a) {
        return this.getState().get(a);
      };
      d.getAll = function (a, b) {
        var d = this,
          e = c("immutable").Set(a),
          f = b || c("immutable").Map();
        return f.withMutations(function (a) {
          for (
            var b = f,
              c = Array.isArray(b),
              g = 0,
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
              if (g >= b.length) break;
              h = b[g++];
            } else {
              g = b.next();
              if (g.done) break;
              h = g.value;
            }
            h = h;
            h = h[0];
            (!e.has(h) || !d.has(h)) && a["delete"](h);
          }
          for (
            h = e,
              g = Array.isArray(h),
              c = 0,
              h = g
                ? h
                : h[
                    typeof Symbol === "function"
                      ? Symbol.iterator
                      : "@@iterator"
                  ]();
            ;

          ) {
            if (g) {
              if (c >= h.length) break;
              b = h[c++];
            } else {
              c = h.next();
              if (c.done) break;
              b = c.value;
            }
            b = b;
            d.has(b) && a.set(b, d.at(b));
          }
        });
      };
      return b;
    })(c("FluxReduceStore"));
    a.__moduleID = f.id;
    g["default"] = a;
  },
  98
);
__d(
  "PageCallToActionButtonDataStore",
  [
    "FluxMapStore",
    "PageCallToActionButtonActionTypes",
    "PageCallToActionDispatcher",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, d;
        for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
          f[g] = arguments[g];
        return (
          ((b = d = a.call.apply(a, [this].concat(f)) || this),
          (d.reduce = function (a, b) {
            var e = b.ctaID;
            switch (b.type) {
              case c("PageCallToActionButtonActionTypes").DISABLE_AUTO_OPEN:
                if (!d.has(e)) break;
                var f = d.at(e),
                  g = f.unitData;
                if (!g) break;
                g.shouldAutoOpen = !1;
                f.unitData = g;
                return a.set(e, f);
              case c("PageCallToActionButtonActionTypes").SET_LOADING_MODE:
                g = { loading: b.data.loading, unitData: null };
                d.has(e) && ((g = d.at(e)), (g.loading = !1));
                return a.set(e, g);
              case c("PageCallToActionButtonActionTypes").UNIT_DATA_LOADED:
                return a.set(e, babelHelpers["extends"]({}, b.data));
              default:
                break;
            }
            return a;
          }),
          b) || babelHelpers.assertThisInitialized(d)
        );
      }
      return b;
    })(c("FluxMapStore"));
    a.__moduleID = f.id;
    b = new a(c("PageCallToActionDispatcher"));
    g["default"] = b;
  },
  98
);
__d(
  "CctaBaseDataLoader",
  ["AsyncRequest", "Promise"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a() {}
      var d = a.prototype;
      d.__getPromise = function (a, d) {
        return new (b("Promise"))(function (b, e) {
          new (c("AsyncRequest"))()
            .setURI(a)
            .setData(d)
            .setHandler(function (a) {
              a && a.payload
                ? b(a.payload)
                : e({
                    error: "no payload in response",
                    description: "no payload in response",
                    summary: "no payload in response",
                  });
            })
            .setAllowCrossPageTransition(!0)
            .setErrorHandler(function (a) {
              return e({
                error: a.error,
                description: a.errorDescription,
                summary: a.errorSummary,
              });
            })
            .send();
        });
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "XPagesCallToActionFetchDialogDataController",
  ["XController"],
  function (a, b, c, d, e, f) {
    e.exports = b("XController").create(
      "/pages/call_to_action/fetch_dialog_data/",
      {
        id: { type: "FBID", required: !0 },
        surface: { type: "Enum", required: !0, enumType: 1 },
        unit_type: { type: "Enum", enumType: 1 },
        cta_type: { type: "String" },
      }
    );
  },
  null
);
__d(
  "PageCallToActionDialogDataLoader",
  ["CctaBaseDataLoader", "XPagesCallToActionFetchDialogDataController"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var d = b.prototype;
      d.promiseData = function (a, b, d, e, f) {
        f === void 0 && (f = {});
        return this.__getPromise(
          c("XPagesCallToActionFetchDialogDataController")
            .getURIBuilder()
            .setString("cta_type", e)
            .setFBID("id", a)
            .setEnum("surface", d)
            .setEnum("unit_type", b)
            .getURI()
            .addQueryData(f),
          {}
        );
      };
      return b;
    })(c("CctaBaseDataLoader"));
    b = new a();
    d = b;
    g["default"] = d;
  },
  98
);
__d(
  "PageCallToActionUnitBase.react",
  [
    "Arbiter",
    "CustomCallToActionTypes",
    "Image.react",
    "PageCallToActionButton.react",
    "PageCallToActionIcon",
    "XUISpinner.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var e = b.prototype;
      e.componentDidMount = function () {
        this.needToFetchData() && this.fetchData();
      };
      e.getCTAOrPageID = function () {
        return this.state.cta && this.state.cta.id
          ? this.state.cta.id
          : this.state.page && this.state.page.id;
      };
      e.getTestID = function () {
        return null;
      };
      e.calculateButtonData = function (a) {
        var b = a.cta && a.cta.type,
          e = a.cta && a.cta.label;
        if (!b) return null;
        var f = b && d("PageCallToActionIcon").get(b);
        f && (f = h.jsx(c("Image.react"), { src: f }));
        e = e || (b && c("CustomCallToActionTypes").LABELS[b]);
        return !e
          ? null
          : {
              entrypoint: a.entrypoint,
              className: a.className || void 0,
              color: a.cta && a.cta.type && !a.cta.id ? "fbblue" : null,
              icon: f || void 0,
              label: e,
              onClick: this.onClick.bind(this, b),
              onMouseEnter: this.onMouseEnter.bind(this),
              onMouseLeave: this.onMouseLeave.bind(this),
              surface: a.surface,
              testID: this.getTestID(),
            };
      };
      e.onClick = function (a) {
        a === "REQUEST_QUOTE" &&
          c("Arbiter").inform(
            "pages/click_cta_in_logout/show_login_dialog",
            {}
          );
      };
      e.onMouseEnter = function () {
        this.needToFetchData() && this.fetchData();
      };
      e.onMouseLeave = function () {};
      e.renderButton = function () {
        var a = this.calculateButtonData(this.props);
        return h.jsx(
          c("PageCallToActionButton.react"),
          babelHelpers["extends"]({}, a)
        );
      };
      e.renderUnit = function () {
        return null;
      };
      e.render = function () {
        var a = this.renderUnit();
        a || (a = this.renderButton());
        !a && this.state.loading && (a = h.jsx(c("XUISpinner.react"), {}));
        return a;
      };
      return b;
    })(h.Component);
    g["default"] = a;
  },
  98
);
__d(
  "PageCTAViewerUnitContainer.react",
  [
    "CustomCTAViewerUnit.react",
    "FluxContainer",
    "PageCallToActionButtonActions",
    "PageCallToActionButtonDataStore",
    "PageCallToActionDialogDataLoader",
    "PageCallToActionDispatcher",
    "PageCallToActionUnitBase.react",
    "Tooltip.react",
    "promiseDone",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      b.getStores = function () {
        return [c("PageCallToActionButtonDataStore")];
      };
      b.calculateState = function (a, b) {
        a ||
          (a = {
            className: b.className,
            cta: b.cta,
            entrypoint: b.entrypoint,
            loading: !1,
            page: b.page,
            surface: b.surface,
            unitData: b.unitData,
          });
        b = b.cta;
        if (!b) return a;
        b = b.id;
        if (!b || !c("PageCallToActionButtonDataStore").has(b)) return a;
        b = c("PageCallToActionButtonDataStore").at(b);
        return b.unitData
          ? babelHelpers["extends"]({}, a, { unitData: b.unitData })
          : a;
      };
      var e = b.prototype;
      e.UNSAFE_componentWillMount = function () {
        c("PageCallToActionDispatcher").explicitlyRegisterStores([
          c("PageCallToActionButtonDataStore"),
        ]);
      };
      e.fetchData = function () {
        var a = this.getCTAOrPageID();
        if (!a || this.state.loading || this.state.unitData) return;
        d("PageCallToActionButtonActions").setLoadingMode(a, !0);
        c("promiseDone")(
          c("PageCallToActionDialogDataLoader").promiseData(
            a,
            "VIEWER",
            this.props.surface,
            void 0,
            this.props.foodAndDrinkExtraProps || {}
          ),
          function (b) {
            d("PageCallToActionButtonActions").setUnitData(a, {
              loading: !1,
              unitData: babelHelpers["extends"]({}, b),
            });
          },
          function (b) {
            d("PageCallToActionButtonActions").setLoadingMode(a, !1);
          }
        );
      };
      e.needToFetchData = function () {
        return !this.state.unitData;
      };
      e.renderUnit = function () {
        if (!this.state.unitData) return null;
        var a = h.jsx(
          c("CustomCTAViewerUnit.react"),
          babelHelpers["extends"](
            {},
            this.props.extraProps,
            this.state.unitData,
            {
              className: this.props.className,
              ctaButtonIcon: this.props.ctaButtonIcon,
              ctaWebDestinationType: this.props.ctaWebDestinationType,
              entrypoint: this.props.entrypoint,
              surface: this.props.surface,
            }
          )
        );
        return this.state.unitData.tooltipText
          ? h.jsx(c("Tooltip.react"), {
              display: "block",
              tooltip: this.state.unitData.tooltipText,
              children: a,
            })
          : a;
      };
      e.getTestID = function () {
        return "ccta_viewer_unit_testid";
      };
      return b;
    })(c("PageCallToActionUnitBase.react"));
    b = c("FluxContainer").create(a, { withProps: !0 });
    g["default"] = b;
  },
  98
);
__d(
  "LayerHideOnTransition",
  ["LayerHideSources", "PageTransitionsRegistrar"],
  function (a, b, c, d, e, f, g) {
    a = (function () {
      function a(a) {
        var b = this;
        this._handler = function (a) {
          b._enabled &&
            b.isTransitionRelevant(a) &&
            b._layer.hide(c("LayerHideSources").TRANSITION),
            b._subscribe();
        };
        this._layer = a;
      }
      var b = a.prototype;
      b.enable = function () {
        (this._enabled = !0),
          this._subscribed || setTimeout(this._subscribe.bind(this), 0);
      };
      b.disable = function () {
        (this._enabled = !1),
          c("PageTransitionsRegistrar").removeHandler(this._handler);
      };
      b.isTransitionRelevant = function (a) {
        return !0;
      };
      b._subscribe = function () {
        c("PageTransitionsRegistrar").registerHandler(this._handler),
          (this._subscribed = !0);
      };
      return a;
    })();
    Object.assign(a.prototype, { _enabled: !1, _subscribed: !1 });
    g["default"] = a;
  },
  98
);
