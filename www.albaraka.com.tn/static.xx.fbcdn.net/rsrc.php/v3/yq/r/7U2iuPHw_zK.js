/*FB_PKG_DELIM*/

("use strict");
(function () {
  var a =
    (typeof globalThis !== "undefined" && globalThis) ||
    (typeof self !== "undefined" && self) ||
    (typeof global !== "undefined" && global);
  if (typeof a.AbortController !== "undefined") return;
  var b = (function () {
      function a() {
        this.__listeners = new Map();
      }
      a.prototype = Object.create(Object.prototype);
      a.prototype.addEventListener = function (a, b, c) {
        if (arguments.length < 2)
          throw new TypeError(
            "TypeError: Failed to execute 'addEventListener' on 'CustomEventTarget': 2 arguments required, but only " +
              arguments.length +
              " present."
          );
        var d = this.__listeners,
          e = a.toString();
        d.has(e) || d.set(e, new Map());
        var f = d.get(e);
        f.has(b) || f.set(b, c);
      };
      a.prototype.removeEventListener = function (a, b, c) {
        if (arguments.length < 2)
          throw new TypeError(
            "TypeError: Failed to execute 'addEventListener' on 'CustomEventTarget': 2 arguments required, but only " +
              arguments.length +
              " present."
          );
        var d = this.__listeners,
          e = a.toString();
        if (d.has(e)) {
          var f = d.get(e);
          f.has(b) && f["delete"](b);
        }
      };
      a.prototype.dispatchEvent = function (a) {
        if (!(a instanceof Event))
          throw new TypeError(
            "Failed to execute 'dispatchEvent' on 'CustomEventTarget': parameter 1 is not of type 'Event'."
          );
        var b = a.type,
          c = this.__listeners;
        c = c.get(b);
        if (c)
          for (
            var b = c.entries(),
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
            var g = f[0];
            f = f[1];
            try {
              typeof g === "function"
                ? g.call(this, a)
                : g && typeof g.handleEvent === "function" && g.handleEvent(a);
            } catch (a) {
              setTimeout(function () {
                throw a;
              });
            }
            f && f.once && c["delete"](g);
          }
        return !0;
      };
      return a;
    })(),
    c = {};
  a.AbortSignal = (function () {
    function a(a) {
      if (a !== c) throw new TypeError("Illegal constructor.");
      b.call(this);
      this._aborted = !1;
    }
    a.prototype = Object.create(b.prototype);
    a.prototype.constructor = a;
    Object.defineProperty(a.prototype, "onabort", {
      get: function () {
        return this._onabort;
      },
      set: function (a) {
        var b = this._onabort;
        b && this.removeEventListener("abort", b);
        this._onabort = a;
        this.addEventListener("abort", a);
      },
    });
    Object.defineProperty(a.prototype, "aborted", {
      get: function () {
        return this._aborted;
      },
    });
    return a;
  })();
  a.AbortController = (function () {
    function a() {
      this._signal = new AbortSignal(c);
    }
    a.prototype = Object.create(Object.prototype);
    Object.defineProperty(a.prototype, "signal", {
      get: function () {
        return this._signal;
      },
    });
    a.prototype.abort = function () {
      var a = this.signal;
      a.aborted || ((a._aborted = !0), a.dispatchEvent(new Event("abort")));
    };
    return a;
  })();
})();

("use strict");
(function () {
  if (!Array.prototype.flat) {
    var a = function b(a) {
      return a < 1
        ? Array.prototype.slice.call(this)
        : Array.prototype.reduce.call(
            this,
            function (c, d) {
              Array.isArray(d) ? c.push.apply(c, b.call(d, a - 1)) : c.push(d);
              return c;
            },
            []
          );
    };
    Array.prototype.flat = function () {
      return a.call(this, isNaN(arguments[0]) ? 1 : Number(arguments[0]));
    };
  }
  if (!Array.prototype.flatMap) {
    var b = function (a, b) {
      var c = [];
      if (typeof b !== "function")
        throw new TypeError("Callback function must be callable.");
      for (var d = 0; d < a.length; d++) {
        var e = b.call(a, a[d], d, a);
        Array.isArray(e) ? c.push.apply(c, e) : c.push(e);
      }
      return c;
    };
    Array.prototype.flatMap = function (a) {
      var c = arguments[1] || this;
      return b(c, a);
    };
  }
})();

(function () {
  "use strict";
  var a = Array.prototype.indexOf;
  Array.prototype.includes ||
    (Array.prototype.includes = function (d) {
      "use strict";
      if (d !== void 0 && Array.isArray(this) && !Number.isNaN(d))
        return a.apply(this, arguments) !== -1;
      var e = Object(this),
        f = e.length ? b(e.length) : 0;
      if (f === 0) return !1;
      var g = arguments.length > 1 ? c(arguments[1]) : 0,
        h = g < 0 ? Math.max(f + g, 0) : g,
        i = Number.isNaN(d);
      while (h < f) {
        var j = e[h];
        if (j === d || (i && Number.isNaN(j))) return !0;
        h++;
      }
      return !1;
    });
  function b(a) {
    return Math.min(Math.max(c(a), 0), Number.MAX_SAFE_INTEGER);
  }
  function c(a) {
    a = Number(a);
    return Number.isFinite(a) && a !== 0 ? d(a) * Math.floor(Math.abs(a)) : a;
  }
  function d(a) {
    return a >= 0 ? 1 : -1;
  }
  if (!Array.prototype.values) {
    var e = typeof Symbol === "function" ? Symbol.iterator : "@@iterator",
      f = (function () {
        function a(a) {
          this.$1 = void 0;
          this.$2 = 0;
          if (a == null)
            throw new TypeError("Cannot convert undefined or null to object");
          this.$1 = Object(a);
        }
        var b = a.prototype;
        b.next = function () {
          if (this.$1 == null || this.$2 >= this.$1.length) {
            this.$1 = void 0;
            return { value: void 0, done: !0 };
          }
          var a = this.$1[this.$2];
          this.$2++;
          return { value: a, done: !1 };
        };
        b[e] = function () {
          return this;
        };
        return a;
      })();
    Array.prototype.values = function () {
      return new f(this);
    };
  }
  Array.prototype[
    typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
  ] ||
    (Array.prototype[
      typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
    ] = Array.prototype.values);
})();
(function (a) {
  var b = {},
    c = function (a, b) {
      if (!a && !b) return null;
      var c = {};
      typeof a !== "undefined" && (c.type = a);
      typeof b !== "undefined" && (c.signature = b);
      return c;
    },
    d = function (a, b) {
      return c(
        a && /^[A-Z]/.test(a) ? a : void 0,
        b && ((b.params && b.params.length) || b.returns)
          ? "function(" +
              (b.params
                ? b.params
                    .map(function (a) {
                      return /\?/.test(a) ? "?" + a.replace("?", "") : a;
                    })
                    .join(",")
                : "") +
              ")" +
              (b.returns ? ":" + b.returns : "")
          : void 0
      );
    },
    e = function (a, b, c) {
      return a;
    },
    f = function (a, b, c) {
      "sourcemeta" in __transform_includes && (a.__SMmeta = b);
      if ("typechecks" in __transform_includes) {
        b = d(b ? b.name : void 0, c);
        b && __w(a, b);
      }
      return a;
    },
    g = function (a, b, c) {
      return c.apply(a, b);
    },
    h = function (a, b, c, d) {
      d && d.params && __t.apply(a, d.params);
      c = c.apply(a, b);
      d && d.returns && __t([c, d.returns]);
      return c;
    };
  h = function (a, c, d, e, f) {
    if (f) {
      f.callId ||
        (f.callId = f.module + ":" + (f.line || 0) + ":" + (f.column || 0));
      e = f.callId;
      b[e] = (b[e] || 0) + 1;
    }
    return d.apply(a, c);
  };
  typeof __transform_includes === "undefined"
    ? ((a.__annotator = e), (a.__bodyWrapper = g))
    : ((a.__annotator = f),
      "codeusage" in __transform_includes
        ? ((a.__annotator = e),
          (a.__bodyWrapper = h),
          (a.__bodyWrapper.getCodeUsage = function () {
            return b;
          }),
          (a.__bodyWrapper.clearCodeUsage = function () {
            b = {};
          }))
        : "typechecks" in __transform_includes
        ? (a.__bodyWrapper = g)
        : (a.__bodyWrapper = g));
})(
  typeof globalThis !== "undefined"
    ? globalThis
    : typeof global !== "undefined"
    ? global
    : typeof window !== "undefined"
    ? window
    : typeof this !== "undefined"
    ? this
    : typeof self !== "undefined"
    ? self
    : {}
);
(function (a) {
  (a.__t = function (a) {
    return a[0];
  }),
    (a.__w = function (a) {
      return a;
    });
})(
  typeof globalThis !== "undefined"
    ? globalThis
    : typeof global !== "undefined"
    ? global
    : typeof window !== "undefined"
    ? window
    : typeof this !== "undefined"
    ? this
    : typeof self !== "undefined"
    ? self
    : {}
);
(self.__DEV__ = self.__DEV__ || 0), (self.emptyFunction = function () {});

(function (a, b) {
  var c = "keys",
    d = "values",
    e = "entries",
    f = (function () {
      var a = h(Array),
        b;
      a ||
        (b = (function () {
          "use strict";
          function a(a, b) {
            (this.$1 = a), (this.$2 = b), (this.$3 = 0);
          }
          var b = a.prototype;
          b.next = function () {
            if (this.$1 == null) return { value: void 0, done: !0 };
            var a = this.$1,
              b = this.$1.length,
              f = this.$3,
              g = this.$2;
            if (f >= b) {
              this.$1 = void 0;
              return { value: void 0, done: !0 };
            }
            this.$3 = f + 1;
            if (g === c) return { value: f, done: !1 };
            else if (g === d) return { value: a[f], done: !1 };
            else if (g === e) return { value: [f, a[f]], done: !1 };
          };
          b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
            function () {
              return this;
            };
          return a;
        })());
      return {
        keys: a
          ? function (a) {
              return a.keys();
            }
          : function (a) {
              return new b(a, c);
            },
        values: a
          ? function (a) {
              return a.values();
            }
          : function (a) {
              return new b(a, d);
            },
        entries: a
          ? function (a) {
              return a.entries();
            }
          : function (a) {
              return new b(a, e);
            },
      };
    })(),
    g = (function () {
      var a = h(String),
        b;
      a ||
        (b = (function () {
          "use strict";
          function a(a) {
            (this.$1 = a), (this.$2 = 0);
          }
          var b = a.prototype;
          b.next = function () {
            if (this.$1 == null) return { value: void 0, done: !0 };
            var a = this.$2,
              b = this.$1,
              c = b.length;
            if (a >= c) {
              this.$1 = void 0;
              return { value: void 0, done: !0 };
            }
            var d = b.charCodeAt(a);
            if (d < 55296 || d > 56319 || a + 1 === c) d = b[a];
            else {
              c = b.charCodeAt(a + 1);
              c < 56320 || c > 57343 ? (d = b[a]) : (d = b[a] + b[a + 1]);
            }
            this.$2 = a + d.length;
            return { value: d, done: !1 };
          };
          b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
            function () {
              return this;
            };
          return a;
        })());
      return {
        keys: function () {
          throw TypeError("Strings default iterator doesn't implement keys.");
        },
        values: a
          ? function (a) {
              return a[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
            }
          : function (a) {
              return new b(a);
            },
        entries: function () {
          throw TypeError(
            "Strings default iterator doesn't implement entries."
          );
        },
      };
    })();
  function h(a) {
    return (
      typeof a.prototype[
        typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
      ] === "function" &&
      typeof a.prototype.values === "function" &&
      typeof a.prototype.keys === "function" &&
      typeof a.prototype.entries === "function"
    );
  }
  var i = (function () {
      "use strict";
      function a(a, b) {
        (this.$1 = a), (this.$2 = b), (this.$3 = Object.keys(a)), (this.$4 = 0);
      }
      var b = a.prototype;
      b.next = function () {
        var a = this.$3.length,
          b = this.$4,
          f = this.$2,
          g = this.$3[b];
        if (b >= a) {
          this.$1 = void 0;
          return { value: void 0, done: !0 };
        }
        this.$4 = b + 1;
        if (f === c) return { value: g, done: !1 };
        else if (f === d) return { value: this.$1[g], done: !1 };
        else if (f === e) return { value: [g, this.$1[g]], done: !1 };
      };
      b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
        function () {
          return this;
        };
      return a;
    })(),
    j = {
      keys: function (a) {
        return new i(a, c);
      },
      values: function (a) {
        return new i(a, d);
      },
      entries: function (a) {
        return new i(a, e);
      },
    };
  function k(a, b) {
    if (typeof a === "string") return g[b || d](a);
    else if (Array.isArray(a)) return f[b || d](a);
    else if (a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"])
      return a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
    else return j[b || e](a);
  }
  Object.assign(k, {
    KIND_KEYS: c,
    KIND_VALUES: d,
    KIND_ENTRIES: e,
    keys: function (a) {
      return k(a, c);
    },
    values: function (a) {
      return k(a, d);
    },
    entries: function (a) {
      return k(a, e);
    },
    generic: j.entries,
  });
  a.FB_enumerate = k;
})(
  typeof global === "object"
    ? global
    : typeof this === "object"
    ? this
    : typeof window === "object"
    ? window
    : typeof self === "object"
    ? self
    : {}
);

("use strict");
(function () {
  if (typeof Element === "undefined" || Element.prototype.scroll) return;
  function a(a, b) {
    b === void 0 && (b = !1);
    if (a.length === 0) return;
    var c = a[0],
      d = a[1];
    c = Number(c) || 0;
    d = Number(d) || 0;
    if (a.length === 1) {
      a = a[0];
      if (a == null) return;
      c = a.left;
      d = a.top;
      c !== void 0 && (c = Number(c) || 0);
      d !== void 0 && (d = Number(d) || 0);
    }
    c !== void 0 && (this.scrollLeft = (b ? this.scrollLeft : 0) + c);
    d !== void 0 && (this.scrollTop = (b ? this.scrollTop : 0) + d);
  }
  Element.prototype.scroll = Element.prototype.scrollTo = function () {
    a.call(this, arguments);
  };
  Element.prototype.scrollBy = function () {
    a.call(this, arguments, !0);
  };
})();

(function () {
  function a() {
    if (typeof JSON !== "object" || typeof JSON.stringify !== "function")
      return !1;
    if (typeof navigator === "undefined" || !navigator.userAgent) return !0;
    var a = navigator.userAgent;
    if (a.indexOf("Firefox/") > -1)
      return !(parseInt(a.match(/Firefox\/([0-9]+)/)[1], 10) >= 62);
    else if (a.indexOf("Edg/") > -1)
      return !(parseInt(a.match(/Edg\/([0-9]+)/)[1], 10) >= 79);
    else if (a.indexOf("Chrome/") > -1)
      return !(parseInt(a.match(/Chrome\/([0-9]+)/)[1], 10) >= 66);
    else if (a.indexOf("CriOS/") > -1)
      return !(parseInt(a.match(/CriOS\/([0-9]+)/)[1], 10) >= 66);
    else if (a.indexOf("Safari/") > -1 && a.indexOf("Version/") > -1)
      return !(parseInt(a.match(/Version\/([0-9]+)/)[1], 10) >= 12);
    return !0;
  }
  function b() {
    return JSON.stringify(["\u2028\u2029"]) === '["\\u2028\\u2029"]';
  }
  a() &&
    !b() &&
    (JSON.stringify = (function (a) {
      var b = /\u2028/g,
        c = /\u2029/g;
      return function (d, e, f) {
        d = a.call(this, d, e, f);
        d &&
          (-1 < d.indexOf("\u2028") && (d = d.replace(b, "\\u2028")),
          -1 < d.indexOf("\u2029") && (d = d.replace(c, "\\u2029")));
        return d;
      };
    })(JSON.stringify));
})();

(function () {
  var a = Object.prototype.hasOwnProperty;
  Object.entries = function (b) {
    if (b == null) throw new TypeError("Object.entries called on non-object");
    var c = [];
    for (var d in b) a.call(b, d) && c.push([d, b[d]]);
    return c;
  };
  typeof Object.fromEntries !== "function" &&
    (Object.fromEntries = function (a) {
      var b = {};
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
        var f = e[0];
        e = e[1];
        b[f] = e;
      }
      return b;
    });
  Object.values = function (b) {
    if (b == null) throw new TypeError("Object.values called on non-object");
    var c = [];
    for (var d in b) a.call(b, d) && c.push(b[d]);
    return c;
  };
})();

(function (a) {
  a.__m = function (a, b) {
    a.__SMmeta = b;
    return a;
  };
})(
  typeof globalThis !== "undefined"
    ? globalThis
    : typeof global !== "undefined"
    ? global
    : typeof window !== "undefined"
    ? window
    : typeof this !== "undefined"
    ? this
    : typeof self !== "undefined"
    ? self
    : {}
);

String.prototype.contains ||
  (String.prototype.contains = String.prototype.includes);
String.prototype.padStart ||
  (String.prototype.padStart = function (a, b) {
    a = a >> 0;
    b = String(b || " ");
    if (this.length > a) return String(this);
    else {
      a = a - this.length;
      a > b.length && (b += b.repeat(a / b.length));
      return b.slice(0, a) + String(this);
    }
  }),
  String.prototype.padEnd ||
    (String.prototype.padEnd = function (a, b) {
      a = a >> 0;
      b = String(b || " ");
      if (this.length > a) return String(this);
      else {
        a = a - this.length;
        a > b.length && (b += b.repeat(a / b.length));
        return String(this) + b.slice(0, a);
      }
    });
if (!String.prototype.matchAll) {
  var MAX_CALLS_TO_EXEC = 250;
  String.prototype.matchAll = function (a) {
    if (!a.global)
      throw new TypeError(
        "String.prototype.matchAll called with a non-global RegExp argument"
      );
    var b = String(this),
      c = [],
      d,
      e = 0;
    while ((d = a.exec(b)) && e++ < MAX_CALLS_TO_EXEC) c.push(d);
    return c;
  };
}
String.prototype.trimLeft ||
  (String.prototype.trimLeft = function () {
    return this.replace(/^\s+/, "");
  }),
  String.prototype.trimRight ||
    (String.prototype.trimRight = function () {
      return this.replace(/\s+$/, "");
    });

("use strict");
(function (a) {
  function a() {
    if (typeof URL !== "function") return !1;
    if (
      typeof URL.createObjectURL !== "function" ||
      typeof URL.revokeObjectURL !== "function"
    )
      return !1;
    return typeof File !== "function" || typeof Blob !== "function" ? !1 : !0;
  }
  if (!a()) return;
  var b = {},
    c = URL.createObjectURL,
    d = URL.revokeObjectURL;
  URL.createObjectURL = function (a) {
    var d = null,
      e = 0;
    a instanceof File
      ? ((d = "File"), (e = a.size))
      : a instanceof Blob
      ? ((d = "Blob"), (e = a.size))
      : typeof MediaSource === "function" &&
        a instanceof MediaSource &&
        ((d = "MediaSource"), (e = 0));
    a = c.call(URL, a);
    d !== null && (b[a] = { type: d, size: e });
    return a;
  };
  URL.revokeObjectURL = function (a) {
    d.call(URL, a), delete b[a];
  };
  URL._fbRegisteredObjectURL = function () {
    return Object.values(b);
  };
})(this);
(function (a) {
  var b = (a.babelHelpers = {}),
    c = Object.prototype.hasOwnProperty;
  typeof Symbol !== "undefined" &&
    !(typeof Symbol === "function"
      ? Symbol.asyncIterator
      : "@@asyncIterator") &&
    (Symbol.asyncIterator = Symbol("Symbol.asyncIterator"));
  function d(a) {
    this.wrapped = a;
  }
  function e(a) {
    var b, c;
    function e(a, d) {
      return new Promise(function (e, g) {
        e = { key: a, arg: d, resolve: e, reject: g, next: null };
        c ? (c = c.next = e) : ((b = c = e), f(a, d));
      });
    }
    function f(b, c) {
      try {
        var e = a[b](c);
        c = e.value;
        var h = c instanceof d;
        Promise.resolve(h ? c.wrapped : c).then(
          function (a) {
            if (h) {
              f(b === "return" ? "return" : "next", a);
              return;
            }
            g(e.done ? "return" : "normal", a);
          },
          function (a) {
            f("throw", a);
          }
        );
      } catch (a) {
        g("throw", a);
      }
    }
    function g(a, d) {
      switch (a) {
        case "return":
          b.resolve({ value: d, done: !0 });
          break;
        case "throw":
          b.reject(d);
          break;
        default:
          b.resolve({ value: d, done: !1 });
          break;
      }
      b = b.next;
      b ? f(b.key, b.arg) : (c = null);
    }
    this._invoke = e;
    typeof a["return"] !== "function" && (this["return"] = void 0);
  }
  typeof Symbol === "function" &&
    (typeof Symbol === "function" ? Symbol.asyncIterator : "@@asyncIterator") &&
    (e.prototype[
      typeof Symbol === "function" ? Symbol.asyncIterator : "@@asyncIterator"
    ] = function () {
      return this;
    });
  e.prototype.next = function (a) {
    return this._invoke("next", a);
  };
  e.prototype["throw"] = function (a) {
    return this._invoke("throw", a);
  };
  e.prototype["return"] = function (a) {
    return this._invoke("return", a);
  };
  b.createClass = (function () {
    function a(a, b) {
      for (var c = 0; c < b.length; c++) {
        var d = b[c];
        d.enumerable = d.enumerable || !1;
        d.configurable = !0;
        "value" in d && (d.writable = !0);
        Object.defineProperty(a, d.key, d);
      }
    }
    return function (b, c, d) {
      c && a(b.prototype, c);
      d && a(b, d);
      return b;
    };
  })();
  b.inheritsLoose = function (a, b) {
    Object.assign(a, b);
    a.prototype = Object.create(b && b.prototype);
    a.prototype.constructor = a;
    a.__superConstructor__ = b;
    return b;
  };
  b.wrapNativeSuper = function (a) {
    var c = typeof Map === "function" ? new Map() : void 0;
    b.wrapNativeSuper = function (a) {
      if (a === null) return null;
      if (typeof a !== "function")
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      if (c !== void 0) {
        if (c.has(a)) return c.get(a);
        c.set(a, d);
      }
      b.inheritsLoose(d, a);
      function d() {
        a.apply(this, arguments);
      }
      return d;
    };
    return b.wrapNativeSuper(a);
  };
  b.assertThisInitialized = function (a) {
    if (a === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return a;
  };
  b._extends = Object.assign;
  b["extends"] = b._extends;
  b.construct = function (a, b) {
    return new (Function.prototype.bind.apply(a, [null].concat(b)))();
  };
  b.objectWithoutPropertiesLoose = function (a, b) {
    var d = {};
    for (var e in a) {
      if (!c.call(a, e) || b.indexOf(e) >= 0) continue;
      d[e] = a[e];
    }
    return d;
  };
  b.taggedTemplateLiteralLoose = function (a, b) {
    b || (b = a.slice(0));
    a.raw = b;
    return a;
  };
  b.bind = Function.prototype.bind;
  b.wrapAsyncGenerator = function (a) {
    return function () {
      return new e(a.apply(this, arguments));
    };
  };
  b.awaitAsyncGenerator = function (a) {
    return new d(a);
  };
  b.asyncIterator = function (a) {
    var b;
    if (typeof Symbol !== "undefined") {
      if (
        typeof Symbol === "function" ? Symbol.asyncIterator : "@@asyncIterator"
      ) {
        b = a[Symbol.asyncIterator];
        if (b != null) return b.call(a);
      }
      if (typeof Symbol === "function" ? Symbol.iterator : "@@iterator") {
        b = a[Symbol.iterator];
        if (b != null) return b.call(a);
      }
    }
    throw new TypeError("Object is not async iterable");
  };
  b.asyncGeneratorDelegate = function (a, b) {
    var c = {},
      d = !1;
    function e(c, e) {
      d = !0;
      e = new Promise(function (b) {
        b(a[c](e));
      });
      return { done: !1, value: b(e) };
    }
    typeof Symbol === "function" &&
      (typeof Symbol === "function" ? Symbol.iterator : "@@iterator") &&
      (c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
        function () {
          return this;
        });
    c.next = function (a) {
      if (d) {
        d = !1;
        return a;
      }
      return e("next", a);
    };
    typeof a["throw"] === "function" &&
      (c["throw"] = function (a) {
        if (d) {
          d = !1;
          throw a;
        }
        return e("throw", a);
      });
    typeof a["return"] === "function" &&
      (c["return"] = function (a) {
        if (d) {
          d = !1;
          return a;
        }
        return e("return", a);
      });
    return c;
  };
})(typeof global === "undefined" ? self : global);

(function (a) {
  var b = {},
    c = [
      "global",
      "require",
      "requireDynamic",
      "requireLazy",
      "module",
      "exports",
    ],
    d = [
      "global",
      "require",
      "importDefault",
      "importNamespace",
      "requireLazy",
      "module",
      "exports",
    ],
    e = 1,
    f = 32,
    g = 64,
    h = {},
    i = Object.prototype.hasOwnProperty;
  function j(e, h) {
    if (!i.call(b, e)) {
      if (h) return null;
      throw new Error("Module " + e + " has not been defined");
    }
    h = b[e];
    if (h.resolved) return h;
    e = h.special;
    var j = h.factory.length,
      n = e & f ? d.concat(h.deps) : c.concat(h.deps),
      o = [],
      p;
    for (var q = 0; q < j; q++) {
      switch (n[q]) {
        case "module":
          p = h;
          break;
        case "exports":
          p = h.exports;
          break;
        case "global":
          p = a;
          break;
        case "require":
          p = k;
          break;
        case "requireDynamic":
          p = null;
          break;
        case "requireLazy":
          p = null;
          break;
        case "importDefault":
          p = l;
          break;
        case "importNamespace":
          p = m;
          break;
        default:
          typeof n[q] === "string" && (p = k.call(null, n[q]));
      }
      o.push(p);
    }
    n = h.factory.apply(a, o);
    n && (h.exports = n);
    e & g
      ? h.exports != null &&
        i.call(h.exports, "default") &&
        (h.defaultExport = h.exports["default"])
      : (h.defaultExport = h.exports);
    h.resolved = !0;
    return h;
  }
  function k(a, b) {
    a = j(a, b);
    if (a) return a.defaultExport !== h ? a.defaultExport : a.exports;
  }
  function l(a) {
    a = j(a);
    if (a) return a.defaultExport !== h ? a.defaultExport : null;
  }
  function m(a) {
    a = j(a);
    if (a) return a.exports;
  }
  function n(a, c, d, f) {
    typeof d === "function"
      ? ((b[a] = {
          factory: d,
          deps: c,
          defaultExport: h,
          exports: {},
          special: f || 0,
          resolved: !1,
        }),
        f != null && f & e && k.call(null, a))
      : (b[a] = { defaultExport: d, exports: d, resolved: !0 });
  }
  a.__d = n;
  a.require = k;
  a.importDefault = l;
  a.importNamespace = m;
  a.$RefreshReg$ = function () {};
  a.$RefreshSig$ = function () {
    return function (a) {
      return a;
    };
  };
})(this);
(function (a) {
  var b = a.performance;
  b &&
    b.setResourceTimingBufferSize &&
    (b.setResourceTimingBufferSize(1e5),
    (b.onresourcetimingbufferfull = function () {
      a.__isresourcetimingbufferfull = !0;
    }),
    (b.setResourceTimingBufferSize = function () {}));
})(
  typeof this === "object"
    ? this
    : typeof global === "object"
    ? global
    : typeof window === "object"
    ? window
    : typeof self === "object"
    ? self
    : {}
);

__d(
  "Promise",
  [],
  function (a, b, c, d, e, f) {
    e.exports = Promise;
  },
  null
);
__d(
  "asyncToGeneratorRuntime",
  ["Promise"],
  function (a, b, c, d, e, f) {
    "use strict";
    function g(a, c, d, e, f, g, h) {
      try {
        var i = a[g](h),
          j = i.value;
      } catch (a) {
        d(a);
        return;
      }
      i.done ? c(j) : b("Promise").resolve(j).then(e, f);
    }
    function a(a) {
      return function () {
        var c = this,
          d = arguments;
        return new (b("Promise"))(function (b, e) {
          var f = a.apply(c, d);
          function h(a) {
            g(f, b, e, h, i, "next", a);
          }
          function i(a) {
            g(f, b, e, h, i, "throw", a);
          }
          h(void 0);
        });
      };
    }
    f.asyncToGenerator = a;
  },
  66
);
__d(
  "regeneratorRuntime",
  ["Promise"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = Object.prototype.hasOwnProperty,
      h =
        (typeof Symbol === "function" &&
          (typeof Symbol === "function" ? Symbol.iterator : "@@iterator")) ||
        "@@iterator",
      i = e.exports;
    function j(a, b, c, d) {
      b = Object.create((b || q).prototype);
      d = new z(d || []);
      b._invoke = w(a, c, d);
      return b;
    }
    i.wrap = j;
    function k(a, b, c) {
      try {
        return { type: "normal", arg: a.call(b, c) };
      } catch (a) {
        return { type: "throw", arg: a };
      }
    }
    var l = "suspendedStart",
      m = "suspendedYield",
      n = "executing",
      o = "completed",
      p = {};
    function q() {}
    function r() {}
    function s() {}
    var t = (s.prototype = q.prototype);
    r.prototype = t.constructor = s;
    s.constructor = r;
    r.displayName = "GeneratorFunction";
    function a(a) {
      ["next", "throw", "return"].forEach(function (b) {
        a[b] = function (a) {
          return this._invoke(b, a);
        };
      });
    }
    i.isGeneratorFunction = function (a) {
      a = typeof a === "function" && a.constructor;
      return a
        ? a === r || (a.displayName || a.name) === "GeneratorFunction"
        : !1;
    };
    i.mark = function (a) {
      Object.setPrototypeOf ? Object.setPrototypeOf(a, s) : Object.assign(a, s);
      a.prototype = Object.create(t);
      return a;
    };
    i.awrap = function (a) {
      return new u(a);
    };
    function u(a) {
      this.arg = a;
    }
    function v(a) {
      function c(c, f) {
        var g = a[c](f);
        c = g.value;
        return c instanceof u
          ? b("Promise").resolve(c.arg).then(d, e)
          : b("Promise")
              .resolve(c)
              .then(function (a) {
                g.value = a;
                return g;
              });
      }
      typeof process === "object" &&
        process.domain &&
        (c = process.domain.bind(c));
      var d = c.bind(a, "next"),
        e = c.bind(a, "throw");
      c.bind(a, "return");
      var f;
      function g(a, d) {
        var e = f
          ? f.then(function () {
              return c(a, d);
            })
          : new (b("Promise"))(function (b) {
              b(c(a, d));
            });
        f = e["catch"](function (a) {});
        return e;
      }
      this._invoke = g;
    }
    a(v.prototype);
    i.async = function (a, b, c, d) {
      var e = new v(j(a, b, c, d));
      return i.isGeneratorFunction(b)
        ? e
        : e.next().then(function (a) {
            return a.done ? a.value : e.next();
          });
    };
    function w(a, b, c) {
      var d = l;
      return function (e, f) {
        if (d === n) throw new Error("Generator is already running");
        if (d === o) {
          if (e === "throw") throw f;
          return B();
        }
        while (!0) {
          var g = c.delegate;
          if (g) {
            if (e === "return" || (e === "throw" && g.iterator[e] === void 0)) {
              c.delegate = null;
              var h = g.iterator["return"];
              if (h) {
                h = k(h, g.iterator, f);
                if (h.type === "throw") {
                  e = "throw";
                  f = h.arg;
                  continue;
                }
              }
              if (e === "return") continue;
            }
            h = k(g.iterator[e], g.iterator, f);
            if (h.type === "throw") {
              c.delegate = null;
              e = "throw";
              f = h.arg;
              continue;
            }
            e = "next";
            f = void 0;
            var i = h.arg;
            if (i.done) (c[g.resultName] = i.value), (c.next = g.nextLoc);
            else {
              d = m;
              return i;
            }
            c.delegate = null;
          }
          if (e === "next") d === m ? (c.sent = f) : (c.sent = void 0);
          else if (e === "throw") {
            if (d === l) {
              d = o;
              throw f;
            }
            c.dispatchException(f) && ((e = "next"), (f = void 0));
          } else e === "return" && c.abrupt("return", f);
          d = n;
          h = k(a, b, c);
          if (h.type === "normal") {
            d = c.done ? o : m;
            var i = { value: h.arg, done: c.done };
            if (h.arg === p) c.delegate && e === "next" && (f = void 0);
            else return i;
          } else h.type === "throw" && ((d = o), (e = "throw"), (f = h.arg));
        }
      };
    }
    a(t);
    t[h] = function () {
      return this;
    };
    t.toString = function () {
      return "[object Generator]";
    };
    function x(a) {
      var b = { tryLoc: a[0] };
      1 in a && (b.catchLoc = a[1]);
      2 in a && ((b.finallyLoc = a[2]), (b.afterLoc = a[3]));
      this.tryEntries.push(b);
    }
    function y(a) {
      var b = a.completion || {};
      b.type = "normal";
      delete b.arg;
      a.completion = b;
    }
    function z(a) {
      (this.tryEntries = [{ tryLoc: "root" }]),
        a.forEach(x, this),
        this.reset(!0);
    }
    i.keys = function (a) {
      var b = [];
      for (var c in a) b.push(c);
      b.reverse();
      return function c() {
        while (b.length) {
          var d = b.pop();
          if (d in a) {
            c.value = d;
            c.done = !1;
            return c;
          }
        }
        c.done = !0;
        return c;
      };
    };
    function A(a) {
      if (a) {
        var b = a[h];
        if (b) return b.call(a);
        if (typeof a.next === "function") return a;
        if (!isNaN(a.length)) {
          var c = -1;
          b = function b() {
            while (++c < a.length)
              if (g.call(a, c)) {
                b.value = a[c];
                b.done = !1;
                return b;
              }
            b.value = void 0;
            b.done = !0;
            return b;
          };
          return (b.next = b);
        }
      }
      return { next: B };
    }
    i.values = A;
    function B() {
      return { value: void 0, done: !0 };
    }
    z.prototype = {
      constructor: z,
      reset: function (a) {
        this.prev = 0;
        this.next = 0;
        this.sent = void 0;
        this.done = !1;
        this.delegate = null;
        this.tryEntries.forEach(y);
        if (!a)
          for (a in this)
            a.charAt(0) === "t" &&
              g.call(this, a) &&
              !isNaN(+a.slice(1)) &&
              (this[a] = void 0);
      },
      stop: function () {
        this.done = !0;
        var a = this.tryEntries[0];
        a = a.completion;
        if (a.type === "throw") throw a.arg;
        return this.rval;
      },
      dispatchException: function (a) {
        if (this.done) throw a;
        var b = this;
        function c(c, d) {
          f.type = "throw";
          f.arg = a;
          b.next = c;
          return !!d;
        }
        for (var d = this.tryEntries.length - 1; d >= 0; --d) {
          var e = this.tryEntries[d],
            f = e.completion;
          if (e.tryLoc === "root") return c("end");
          if (e.tryLoc <= this.prev) {
            var h = g.call(e, "catchLoc"),
              i = g.call(e, "finallyLoc");
            if (h && i) {
              if (this.prev < e.catchLoc) return c(e.catchLoc, !0);
              else if (this.prev < e.finallyLoc) return c(e.finallyLoc);
            } else if (h) {
              if (this.prev < e.catchLoc) return c(e.catchLoc, !0);
            } else if (i) {
              if (this.prev < e.finallyLoc) return c(e.finallyLoc);
            } else throw new Error("try statement without catch or finally");
          }
        }
      },
      abrupt: function (a, b) {
        for (var c = this.tryEntries.length - 1; c >= 0; --c) {
          var d = this.tryEntries[c];
          if (
            d.tryLoc <= this.prev &&
            g.call(d, "finallyLoc") &&
            this.prev < d.finallyLoc
          ) {
            var e = d;
            break;
          }
        }
        e &&
          (a === "break" || a === "continue") &&
          e.tryLoc <= b &&
          b <= e.finallyLoc &&
          (e = null);
        d = e ? e.completion : {};
        d.type = a;
        d.arg = b;
        e ? (this.next = e.finallyLoc) : this.complete(d);
        return p;
      },
      complete: function (a, b) {
        if (a.type === "throw") throw a.arg;
        a.type === "break" || a.type === "continue"
          ? (this.next = a.arg)
          : a.type === "return"
          ? ((this.rval = a.arg), (this.next = "end"))
          : a.type === "normal" && b && (this.next = b);
      },
      finish: function (a) {
        for (var b = this.tryEntries.length - 1; b >= 0; --b) {
          var c = this.tryEntries[b];
          if (c.finallyLoc === a) {
            this.complete(c.completion, c.afterLoc);
            y(c);
            return p;
          }
        }
      },
      catch: function (a) {
        for (var b = this.tryEntries.length - 1; b >= 0; --b) {
          var c = this.tryEntries[b];
          if (c.tryLoc === a) {
            var d = c.completion;
            if (d.type === "throw") {
              var e = d.arg;
              y(c);
            }
            return e;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function (a, b, c) {
        this.delegate = { iterator: A(a), resultName: b, nextLoc: c };
        return p;
      },
    };
  },
  null
);
__d(
  "ServiceWorkerAsyncStorage",
  ["Promise", "asyncToGeneratorRuntime"],
  function (a, b, c, d, e, f) {
    var g = 1,
      h = "data",
      i = self.indexedDB.open("ServiceWorkerAsyncStorage", g),
      j = new (b("Promise"))(function (a, b) {
        (i.onerror = b),
          (i.onsuccess = function (b) {
            a(b.target.result);
          });
      });
    i.onupgradeneeded = function (a) {
      a = a.currentTarget.result;
      if (a.objectStoreNames && a.objectStoreNames.contains(h)) return;
      a.createObjectStore(h);
    };
    function k(a) {
      return new (b("Promise"))(function (b, c) {
        (a.onsuccess = function () {
          b(a.result);
        }),
          (a.onerror = c);
      });
    }
    function a(a, b) {
      return l.apply(this, arguments);
    }
    function l() {
      l = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b) {
        var c = yield j;
        c = c.transaction(h, "readwrite");
        c = c.objectStore(h).put(b, a);
        yield k(c);
      });
      return l.apply(this, arguments);
    }
    function c(a) {
      return m.apply(this, arguments);
    }
    function m() {
      m = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        var b = yield j;
        b = b.transaction(h, "readonly");
        b = b.objectStore(h).get(a);
        return yield k(b);
      });
      return m.apply(this, arguments);
    }
    function d(a, b, c) {
      return n.apply(this, arguments);
    }
    function n() {
      n = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b, c) {
        var d = yield j;
        d = d.transaction(h, "readonly");
        d = d.objectStore(h).getAll(self.IDBKeyRange.bound(a, b), c);
        return yield k(d);
      });
      return n.apply(this, arguments);
    }
    function e(a) {
      return o.apply(this, arguments);
    }
    function o() {
      o = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        var b = yield j;
        b = b.transaction(h, "readwrite");
        b = b.objectStore(h)["delete"](a);
        yield k(b);
      });
      return o.apply(this, arguments);
    }
    function p(a) {
      return q.apply(this, arguments);
    }
    function q() {
      q = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        var c = yield j,
          d = c.transaction(h, "readwrite");
        yield new (b("Promise"))(function (b, c) {
          var e = d.objectStore(h).openCursor();
          e.onsuccess = function (c) {
            c = c.target.result;
            c ? (a(c.key) && c["delete"](), c["continue"]()) : b();
          };
          e.onerror = function (a) {
            c(a.currentTarget.error);
          };
        });
      });
      return q.apply(this, arguments);
    }
    function r() {
      return s.apply(this, arguments);
    }
    function s() {
      s = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        var a = yield j,
          c = a.transaction(a.objectStoreNames, "readwrite"),
          d = [];
        for (var e = 0; e < a.objectStoreNames.length; e++)
          d.push(k(c.objectStore(a.objectStoreNames[e]).clear()));
        yield b("Promise").all(d);
      });
      return s.apply(this, arguments);
    }
    f.setItem = a;
    f.getItem = c;
    f.getAllItemWithKeyRange = d;
    f.removeItem = e;
    f.removeAllItemWithPredicate = p;
    f.purge = r;
  },
  66
);
__d(
  "RouteLoadsLogging",
  ["ServiceWorkerAsyncStorage", "asyncToGeneratorRuntime"],
  function (a, b, c, d, e, f, g) {
    var h = "RouteLoadCounts",
      i = null;
    function j() {
      return k.apply(this, arguments);
    }
    function k() {
      k = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        if (i === null) return;
        d("ServiceWorkerAsyncStorage").setItem(h, i);
      });
      return k.apply(this, arguments);
    }
    function a() {
      return l.apply(this, arguments);
    }
    function l() {
      l = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        (i = {}), yield j();
      });
      return l.apply(this, arguments);
    }
    function c(a) {
      return m.apply(this, arguments);
    }
    function m() {
      m = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        if (i === null) {
          var b = yield d("ServiceWorkerAsyncStorage").getItem(h);
          !b || typeof b !== "object" ? (i = {}) : (i = b);
        }
        !i[a] || typeof i[a] !== "number" ? (i[a] = 1) : i[a]++;
        yield j();
      });
      return m.apply(this, arguments);
    }
    function e(a) {
      return i && i[a] && typeof i[a] === "number" ? i[a] : 0;
    }
    g.activateRouteLoadsLogging = a;
    g.logCompletionForRoute = c;
    g.getLoadCountForRoute = e;
  },
  98
);
__d(
  "performance",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    b = a.performance || a.msPerformance || a.webkitPerformance || {};
    c = b;
    f["default"] = c;
  },
  66
);
__d(
  "performanceNow",
  ["performance"],
  function (a, b, c, d, e, f, g) {
    if (c("performance").now)
      b = function () {
        return c("performance").now();
      };
    else {
      d = a._cstart;
      e = Date.now();
      var h = typeof d === "number" && d < e ? d : e,
        i = 0;
      b = function () {
        var a = Date.now(),
          b = a - h;
        b < i && ((h -= i - b), (b = a - h));
        i = b;
        return b;
      };
    }
    f = b;
    g["default"] = f;
  },
  98
);
__d(
  "performanceNowSinceAppStart",
  ["performanceNow"],
  function (a, b, c, d, e, f, g) {
    g["default"] = c("performanceNow");
  },
  98
);
__d(
  "removeFromArray",
  [],
  function (a, b, c, d, e, f) {
    function a(a, b) {
      b = a.indexOf(b);
      b !== -1 && a.splice(b, 1);
    }
    f["default"] = a;
  },
  66
);
__d(
  "fb-error",
  ["performanceNowSinceAppStart", "removeFromArray"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = {
      PREVIOUS_FILE: 1,
      PREVIOUS_FRAME: 2,
      PREVIOUS_DIR: 3,
      FORCED_KEY: 4,
    };
    function h(b) {
      var a = new Error(b);
      if (a.stack === void 0)
        try {
          throw a;
        } catch (a) {}
      a.messageFormat = b;
      for (
        var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), e = 1;
        e < c;
        e++
      )
        d[e - 1] = arguments[e];
      a.messageParams = d.map(function (a) {
        return String(a);
      });
      a.taalOpcodes = [g.PREVIOUS_FRAME];
      return a;
    }
    var i = !1,
      j = {
        errorListener: function (b) {
          var c = a.console,
            d = c[b.type] ? b.type : "error";
          if (b.type === "fatal" || (d === "error" && !i)) {
            d = b.message;
            c.error(
              "ErrorUtils caught an error:\n\n" +
                d +
                "\n\nSubsequent non-fatal errors won't be logged; see https://fburl.com/debugjs."
            );
            i = !0;
          }
        },
      },
      k = { access_token: null },
      l = 6,
      m = 6e4,
      n = 10 * m,
      o = new Map(),
      p = 0;
    function q() {
      var a = b("performanceNowSinceAppStart")();
      if (a > p + m) {
        var c = a - n;
        for (
          var d = o,
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
          g.lastAccessed < c && o["delete"](h);
        }
        p = a;
      }
    }
    function r(a) {
      q();
      var c = b("performanceNowSinceAppStart")(),
        d = o.get(a);
      if (d == null) {
        o.set(a, { dropped: 0, logged: [c], lastAccessed: c });
        return 1;
      }
      a = d.dropped;
      var e = d.logged;
      d.lastAccessed = c;
      while (e[0] < c - m) e.shift();
      if (e.length < l) {
        d.dropped = 0;
        e.push(c);
        return a + 1;
      } else {
        d.dropped++;
        return null;
      }
    }
    var s = {
        shouldLog: function (a) {
          return r(a.hash);
        },
      },
      t = "RE_EXN_ID";
    function u(a) {
      var b = null;
      a == null || typeof a !== "object"
        ? (b = h("Non-object thrown: %s", String(a)))
        : Object.prototype.hasOwnProperty.call(a, t)
        ? (b = h("Rescript exception thrown: %s", JSON.stringify(a)))
        : typeof (a === null || a === void 0 ? void 0 : a.then) === "function"
        ? (b = h("Promise thrown: %s", JSON.stringify(a)))
        : typeof a.message !== "string"
        ? (b = h(
            "Non-error thrown: %s, keys: %s",
            String(a),
            JSON.stringify(Object.keys(a).sort())
          ))
        : a.messageFormat != null && typeof a.messageFormat !== "string"
        ? (b = h(
            "Error with non-string messageFormat thrown: %s, %s, keys: %s",
            String(a.message),
            String(a),
            JSON.stringify(Object.keys(a).sort())
          ))
        : Object.isExtensible &&
          !Object.isExtensible(a) &&
          (b = h("Non-extensible thrown: %s", String(a.message)));
      if (b != null) {
        b.taalOpcodes = b.taalOpcodes || [];
        b.taalOpcodes.push(g.PREVIOUS_FRAME);
        return b;
      }
      return a;
    }
    var aa =
        typeof window === "undefined" ? "<self.onerror>" : "<window.onerror>",
      v;
    function ba(a) {
      var b = a.error != null ? u(a.error) : h(a.message || "");
      b.fileName == null && a.filename != null && (b.fileName = a.filename);
      b.line == null && a.lineno != null && (b.line = a.lineno);
      b.column == null && a.colno != null && (b.column = a.colno);
      b.guardList = [aa];
      b.loggingSource = "ONERROR";
      (a = v) === null || a === void 0 ? void 0 : a.reportError(b);
    }
    var w = {
        setup: function (b) {
          if (typeof a.addEventListener !== "function") return;
          if (v != null) return;
          v = b;
          a.addEventListener("error", ba);
        },
      },
      x = [],
      y = {
        pushGuard: function (a) {
          x.unshift(a);
        },
        popGuard: function () {
          x.shift();
        },
        inGuard: function () {
          return x.length !== 0;
        },
        cloneGuardList: function () {
          return x.map(function (a) {
            return a.name;
          });
        },
        findDeferredSource: function () {
          for (var a = 0; a < x.length; a++) {
            var b = x[a];
            if (b.deferredSource != null) return b.deferredSource;
          }
        },
      };
    function ca(a) {
      if (a.type != null) return a.type;
      if (a.loggingSource == "GUARDED" || a.loggingSource == "ERROR_BOUNDARY")
        return "fatal";
      if (a.name == "SyntaxError") return "fatal";
      if (
        a.loggingSource == "ONERROR" &&
        a.message.indexOf("ResizeObserver loop") >= 0
      )
        return "warn";
      return a.stack != null && a.stack.indexOf("chrome-extension://") >= 0
        ? "warn"
        : "error";
    }
    var z = [],
      A = (function () {
        function a() {
          this.metadata = [].concat(z);
        }
        var b = a.prototype;
        b.addEntries = function () {
          var a;
          (a = this.metadata).push.apply(a, arguments);
          return this;
        };
        b.addEntry = function (a, b, c) {
          this.metadata.push([a, b, c]);
          return this;
        };
        b.isEmpty = function () {
          return this.metadata.length === 0;
        };
        b.clearEntries = function () {
          this.metadata = [];
        };
        b.format = function () {
          var a = [];
          this.metadata.forEach(function (b) {
            if (b && b.length) {
              b = b
                .map(function (a) {
                  return a != null ? String(a).replace(/:/g, "_") : "";
                })
                .join(":");
              a.push(b);
            }
          });
          return a;
        };
        b.getAll = function () {
          return this.metadata;
        };
        a.addGlobalMetadata = function (a, b, c) {
          z.push([a, b, c]);
        };
        a.getGlobalMetadata = function () {
          return z;
        };
        a.unsetGlobalMetadata = function (a, b) {
          z = z.filter(function (c) {
            return !(Array.isArray(c) && c[0] === a && c[1] === b);
          });
        };
        return a;
      })(),
      B = { debug: 1, info: 2, warn: 3, error: 4, fatal: 5 };
    function c(a, b) {
      if (Object.isFrozen(a)) return;
      b.type && (!a.type || B[a.type] > B[b.type]) && (a.type = b.type);
      var c = b.metadata;
      if (c != null) {
        var d;
        d = (d = a.metadata) !== null && d !== void 0 ? d : new A();
        c != null && d.addEntries.apply(d, c.getAll());
        a.metadata = d;
      }
      b.project != null && (a.project = b.project);
      b.errorName != null && (a.errorName = b.errorName);
      b.componentStack != null && (a.componentStack = b.componentStack);
      b.deferredSource != null && (a.deferredSource = b.deferredSource);
      b.blameModule != null && (a.blameModule = b.blameModule);
      b.loggingSource != null && (a.loggingSource = b.loggingSource);
      d = (c = a.messageFormat) !== null && c !== void 0 ? c : a.message;
      c = (c = a.messageParams) !== null && c !== void 0 ? c : [];
      if (d !== b.messageFormat && b.messageFormat != null) {
        var e;
        d += " [Caught in: " + b.messageFormat + "]";
        c.push.apply(
          c,
          (e = b.messageParams) !== null && e !== void 0 ? e : []
        );
      }
      a.messageFormat = d;
      a.messageParams = c;
      e = b.forcedKey;
      d = a.forcedKey;
      c =
        e != null && d != null
          ? e + "_" + d
          : e !== null && e !== void 0
          ? e
          : d;
      a.forcedKey = c;
    }
    function d(a) {
      var b;
      return da(
        (b = a.messageFormat) !== null && b !== void 0 ? b : a.message,
        a.messageParams || []
      );
    }
    function da(a, b) {
      var c = 0;
      a = String(a);
      a = a.replace(/%s/g, function () {
        return c < b.length ? b[c++] : "NOPARAM";
      });
      c < b.length && (a += " PARAMS" + JSON.stringify(b.slice(c)));
      return a;
    }
    function f(a) {
      return (a !== null && a !== void 0 ? a : []).map(function (a) {
        return String(a);
      });
    }
    var C = { aggregateError: c, toReadableMessage: d, toStringParams: f },
      ea = 5,
      D = [];
    function E(a) {
      D.push(a), D.length > ea && D.shift();
    }
    function F(a) {
      var b = a.getAllResponseHeaders();
      if (b != null && b.indexOf("X-FB-Debug") >= 0) {
        b = a.getResponseHeader("X-FB-Debug");
        b && E(b);
      }
    }
    function fa() {
      return D;
    }
    var G = { add: E, addFromXHR: F, getAll: fa },
      ga = "abcdefghijklmnopqrstuvwxyz012345";
    function H() {
      var a = 0;
      for (var b = arguments.length, c = new Array(b), d = 0; d < b; d++)
        c[d] = arguments[d];
      for (var e = 0; e < c.length; e++) {
        var f = c[e];
        if (f != null) {
          var g = f.length;
          for (var h = 0; h < g; h++) a = (a << 5) - a + f.charCodeAt(h);
        }
      }
      var i = "";
      for (var j = 0; j < 6; j++) (i = ga.charAt(a & 31) + i), (a >>= 5);
      return i;
    }
    var I = [
        /\(([^\s\)\()]+):(\d+):(\d+)\)$/,
        /@([^\s\)\()]+):(\d+):(\d+)$/,
        /^([^\s\)\()]+):(\d+):(\d+)$/,
        /^at ([^\s\)\()]+):(\d+):(\d+)$/,
      ],
      ha = /^\w+:\s.*?\n/g;
    Error.stackTraceLimit != null &&
      Error.stackTraceLimit < 80 &&
      (Error.stackTraceLimit = 80);
    function ia(a) {
      var b = a.name,
        c = a.message;
      a = a.stack;
      if (a == null) return null;
      if (b != null && c != null && c !== "") {
        var d = b + ": " + c + "\n";
        if (a.startsWith(d)) return a.substr(d.length);
        if (a === b + ": " + c) return null;
      }
      if (b != null) {
        d = b + "\n";
        if (a.startsWith(d)) return a.substr(d.length);
      }
      if (c != null && c !== "") {
        b = ": " + c + "\n";
        d = a.indexOf(b);
        c = a.substring(0, d);
        if (/^\w+$/.test(c)) return a.substring(d + b.length);
      }
      return a.replace(ha, "");
    }
    function J(a) {
      a = a.trim();
      var b;
      a;
      var c, d, e;
      if (a.includes("charset=utf-8;base64,")) b = "<inlined-file>";
      else {
        var f;
        for (var g = 0; g < I.length; g++) {
          var h = I[g];
          f = a.match(h);
          if (f != null) break;
        }
        f != null && f.length === 4
          ? ((c = f[1]),
            (d = parseInt(f[2], 10)),
            (e = parseInt(f[3], 10)),
            (b = a.substring(0, a.length - f[0].length)))
          : (b = a);
        b = b.replace(/^at /, "").trim();
      }
      h = { identifier: b, script: c, line: d, column: e };
      h.text = K(h);
      return h;
    }
    function ja(a) {
      return a == null || a === "" ? [] : a.split(/\n\n/)[0].split("\n").map(J);
    }
    function ka(a) {
      a = ia(a);
      return ja(a);
    }
    function la(a) {
      if (a == null || a === "") return null;
      a = a.split("\n");
      a.splice(0, 1);
      return a.map(function (a) {
        return a.trim();
      });
    }
    function K(a) {
      var b = a.identifier,
        c = a.script,
        d = a.line;
      a = a.column;
      b = "    at " + (b !== null && b !== void 0 ? b : "<unknown>");
      c != null &&
        d != null &&
        a != null &&
        (b += " (" + c + ":" + d + ":" + a + ")");
      return b;
    }
    function L(c) {
      var d,
        e,
        f,
        h,
        i,
        j,
        k = ka(c);
      d = (d = c.taalOpcodes) !== null && d !== void 0 ? d : [];
      var l = c.framesToPop;
      if (l != null) {
        l = Math.min(l, k.length);
        while (l-- > 0) d.unshift(g.PREVIOUS_FRAME);
      }
      l = (l = c.messageFormat) !== null && l !== void 0 ? l : c.message;
      e = ((e = c.messageParams) !== null && e !== void 0 ? e : []).map(
        function (a) {
          return String(a);
        }
      );
      var m = la(c.componentStack),
        n = m == null ? null : m.map(J),
        o = c.metadata ? c.metadata.format() : new A().format();
      o.length === 0 && (o = void 0);
      var p = k
        .map(function (a) {
          return a.text;
        })
        .join("\n");
      f = (f = c.errorName) !== null && f !== void 0 ? f : c.name;
      var q = ca(c),
        r = c.loggingSource,
        s = c.project;
      h = (h = c.lineNumber) !== null && h !== void 0 ? h : c.line;
      i = (i = c.columnNumber) !== null && i !== void 0 ? i : c.column;
      j = (j = c.fileName) !== null && j !== void 0 ? j : c.sourceURL;
      var t = k.length > 0;
      t && h == null && (h = k[0].line);
      t && i == null && (i = k[0].column);
      t && j == null && (j = k[0].script);
      n = {
        blameModule: c.blameModule,
        column: i == null ? null : String(i),
        clientTime: Math.floor(Date.now() / 1e3),
        componentStackFrames: n,
        deferredSource: c.deferredSource != null ? L(c.deferredSource) : null,
        extra: (t = c.extra) !== null && t !== void 0 ? t : {},
        fbtrace_id: c.fbtrace_id,
        guardList: (i = c.guardList) !== null && i !== void 0 ? i : [],
        hash: H(f, p, q, s, r),
        isNormalizedError: !0,
        line: h == null ? null : String(h),
        loggingSource: r,
        message: C.toReadableMessage(c),
        messageFormat: l,
        messageParams: e,
        metadata: o,
        name: f,
        page_time: Math.floor(b("performanceNowSinceAppStart")()),
        project: s,
        reactComponentStack: m,
        script: j,
        serverHash: c.serverHash,
        stack: p,
        stackFrames: k,
        type: q,
        xFBDebug: G.getAll(),
      };
      c.forcedKey != null && (n.forcedKey = c.forcedKey);
      d.length > 0 && (n.taalOpcodes = d);
      t = a.location;
      t && (n.windowLocationURL = t.href);
      for (i in n) n[i] == null && delete n[i];
      return n;
    }
    function ma(a) {
      return a != null && typeof a === "object" && a.isNormalizedError === !0
        ? a
        : null;
    }
    var M = { formatStackFrame: K, normalizeError: L, ifNormalizedError: ma },
      na = "<global.react>",
      N = [],
      O = [],
      P = 50,
      Q = !1,
      R = {
        history: O,
        addListener: function (a, b) {
          b === void 0 && (b = !1),
            N.push(a),
            b ||
              O.forEach(function (b) {
                return a(
                  b,
                  (b = b.loggingSource) !== null && b !== void 0
                    ? b
                    : "DEPRECATED"
                );
              });
        },
        unshiftListener: function (a) {
          N.unshift(a);
        },
        removeListener: function (a) {
          b("removeFromArray")(N, a);
        },
        reportError: function (a) {
          a = M.normalizeError(a);
          R.reportNormalizedError(a);
        },
        reportNormalizedError: function (b) {
          if (Q) return !1;
          var a = y.cloneGuardList();
          b.componentStackFrames && a.unshift(na);
          a.length > 0 && (b.guardList = a);
          if (b.deferredSource == null) {
            a = y.findDeferredSource();
            a != null && (b.deferredSource = M.normalizeError(a));
          }
          O.length > P && O.splice(P / 2, 1);
          O.push(b);
          Q = !0;
          for (a = 0; a < N.length; a++)
            try {
              var c;
              N[a](
                b,
                (c = b.loggingSource) !== null && c !== void 0
                  ? c
                  : "DEPRECATED"
              );
            } catch (a) {}
          Q = !1;
          return !0;
        },
      };
    R.addListener(j.errorListener);
    var oa = "<anonymous guard>",
      S = !1,
      T = {
        applyWithGuard: function (a, b, c, d) {
          y.pushGuard({
            name:
              ((d === null || d === void 0 ? void 0 : d.name) != null
                ? d.name
                : null) ||
              (a.name ? "func_name:" + a.name : null) ||
              oa,
            deferredSource:
              d === null || d === void 0 ? void 0 : d.deferredSource,
          });
          if (S)
            try {
              return a.apply(b, c);
            } finally {
              y.popGuard();
            }
          try {
            return Function.prototype.apply.call(a, b, c);
          } catch (h) {
            try {
              b =
                d !== null && d !== void 0
                  ? d
                  : babelHelpers["extends"]({}, null);
              var e = b.deferredSource,
                f = b.onError;
              b = b.onNormalizedError;
              var g = u(h);
              e = {
                deferredSource: e,
                loggingSource: "GUARDED",
                project:
                  (e = d === null || d === void 0 ? void 0 : d.project) !==
                    null && e !== void 0
                    ? e
                    : "ErrorGuard",
                type: d === null || d === void 0 ? void 0 : d.errorType,
              };
              C.aggregateError(g, e);
              d = M.normalizeError(g);
              g == null &&
                a &&
                ((d.extra[a.toString().substring(0, 100)] = "function"),
                c != null &&
                  c.length &&
                  (d.extra[Array.from(c).toString().substring(0, 100)] =
                    "args"));
              d.guardList = y.cloneGuardList();
              f && f(g);
              b && b(d);
              R.reportNormalizedError(d);
            } catch (a) {}
          } finally {
            y.popGuard();
          }
        },
        guard: function (a, b) {
          function c() {
            for (var c = arguments.length, d = new Array(c), e = 0; e < c; e++)
              d[e] = arguments[e];
            return T.applyWithGuard(a, this, d, b);
          }
          a.__SMmeta && (c.__SMmeta = a.__SMmeta);
          return c;
        },
        inGuard: function () {
          return y.inGuard();
        },
        skipGuardGlobal: function (a) {
          S = a;
        },
      },
      U = 1024,
      V = [],
      W = 0;
    function X(a) {
      return String(a);
    }
    function Y(a) {
      return a == null ? null : String(a);
    }
    function pa(a, b) {
      var c = {};
      b &&
        b.forEach(function (a) {
          c[a] = !0;
        });
      Object.keys(a).forEach(function (b) {
        a[b] ? (c[b] = !0) : c[b] && delete c[b];
      });
      return Object.keys(c);
    }
    function Z(a) {
      return (a !== null && a !== void 0 ? a : []).map(function (a) {
        return {
          column: Y(a.column),
          identifier: a.identifier,
          line: Y(a.line),
          script: a.script,
        };
      });
    }
    function qa(a) {
      a = String(a);
      return a.length > U ? a.substring(0, U - 3) + "..." : a;
    }
    function ra(a, b) {
      var c;
      c = {
        appId: Y(b.appId),
        cavalry_lid: b.cavalry_lid,
        access_token: k.access_token,
        ancestor_hash: a.hash,
        bundle_variant:
          (c = b.bundle_variant) !== null && c !== void 0 ? c : null,
        clientTime: X(a.clientTime),
        column: a.column,
        componentStackFrames: Z(a.componentStackFrames),
        events: a.events,
        extra: pa(a.extra, b.extra),
        forcedKey: a.forcedKey,
        frontend_env: (c = b.frontend_env) !== null && c !== void 0 ? c : null,
        guardList: a.guardList,
        line: a.line,
        loggingFramework: b.loggingFramework,
        messageFormat: qa(a.messageFormat),
        messageParams: a.messageParams.map(qa),
        name: a.name,
        sample_weight: Y(b.sample_weight),
        script: a.script,
        site_category: b.site_category,
        stackFrames: Z(a.stackFrames),
        type: a.type,
        page_time: Y(a.page_time),
        project: a.project,
        push_phase: b.push_phase,
        report_source: b.report_source,
        report_source_ref: b.report_source_ref,
        rollout_hash: (c = b.rollout_hash) !== null && c !== void 0 ? c : null,
        script_path: b.script_path,
        server_revision: Y(b.server_revision),
        spin: Y(b.spin),
        svn_rev: String(b.client_revision),
        additional_client_revisions: Array.from(
          (c = b.additional_client_revisions) !== null && c !== void 0 ? c : []
        ).map(X),
        taalOpcodes:
          a.taalOpcodes == null
            ? null
            : a.taalOpcodes.map(function (a) {
                return a;
              }),
        web_session_id: b.web_session_id,
        version: "3",
        xFBDebug: a.xFBDebug,
      };
      b = a.blameModule;
      var d = a.deferredSource;
      b != null && (c.blameModule = String(b));
      d &&
        d.stackFrames &&
        (c.deferredSource = { stackFrames: Z(d.stackFrames) });
      a.metadata && (c.metadata = a.metadata);
      a.loadingUrls && (c.loadingUrls = a.loadingUrls);
      a.serverHash != null && (c.serverHash = a.serverHash);
      a.windowLocationURL != null &&
        (c.windowLocationURL = a.windowLocationURL);
      a.loggingSource != null && (c.loggingSource = a.loggingSource);
      return c;
    }
    function sa(a, b, c) {
      var d;
      W++;
      if (b.sample_weight === 0) return !1;
      var e = s.shouldLog(a);
      if (e == null) return !1;
      if (
        (d = b.projectBlocklist) !== null &&
        d !== void 0 &&
        d.includes(a.project)
      )
        return !1;
      d = ra(a, b);
      Object.assign(d, {
        ancestors: V.slice(),
        clientWeight: X(e),
        page_position: X(W),
      });
      V.length < 15 && V.push(a.hash);
      c(d);
      return !0;
    }
    var ta = { createErrorPayload: ra, postError: sa },
      $ = null,
      ua = !1;
    function va(a) {
      if ($ == null) return;
      var b = $,
        c = a.reason,
        d;
      if (
        c != null &&
        typeof c === "object" &&
        (c.name == null ||
          c.name === "" ||
          c.message == null ||
          c.message === "")
      )
        try {
          (d = h("UnhandledRejection: %s", JSON.stringify(c))),
            (d.loggingSource = "ONUNHANDLEDREJECTION");
        } catch (a) {
          (d = h(
            "UnhandledRejection: (circular) %s",
            Object.keys(c).join(",")
          )),
            (d.loggingSource = "ONUNHANDLEDREJECTION");
        }
      else
        (d = u(c)),
          d.loggingSource || (d.loggingSource = "ONUNHANDLEDREJECTION");
      try {
        c = a.promise;
        d.stack =
          String(d.stack || "") +
          (c != null && typeof c.settledStack === "string"
            ? "\n(<promise_settled_stack_below>)\n" + c.settledStack
            : "") +
          (c != null && typeof c.createdStack === "string"
            ? "\n(<promise_created_stack_below>)\n" + c.createdStack
            : "");
      } catch (a) {}
      b.reportError(d);
      a.preventDefault();
    }
    function wa(b) {
      ($ = b),
        typeof a.addEventListener === "function" &&
          !ua &&
          ((ua = !0), a.addEventListener("unhandledrejection", va));
    }
    var xa = { onunhandledrejection: va, setup: wa };
    c = {
      preSetup: function (a) {
        (a == null || a.ignoreOnError !== !0) && w.setup(R),
          (a == null || a.ignoreOnUnahndledRejection !== !0) && xa.setup(R);
      },
      setup: function (a, b) {
        R.addListener(function (c) {
          ta.postError(c, a, b);
        });
      },
    };
    var ya = (function () {
      function a(a) {
        (this.project = a),
          (this.events = []),
          (this.metadata = new A()),
          (this.taalOpcodes = []);
      }
      var b = a.prototype;
      b.$1 = function (b, c) {
        var d = String(c),
          e = this.events,
          f = this.project,
          h = this.metadata,
          i = this.blameModule,
          j = this.forcedKey,
          k = this.error,
          l;
        for (
          var m = arguments.length, n = new Array(m > 2 ? m - 2 : 0), o = 2;
          o < m;
          o++
        )
          n[o - 2] = arguments[o];
        if (this.normalizedError) {
          var p = {
            message:
              this.normalizedError.messageFormat + " [Caught in: " + d + "]",
            params: [].concat(this.normalizedError.messageParams, n),
            forcedKey: j,
          };
          l = babelHelpers["extends"]({}, this.normalizedError, {
            message: p.message,
            messageFormat: p.message,
            messageParams: C.toStringParams(p.params),
            project: f,
            type: b,
            loggingSource: "FBLOGGER",
          });
        } else if (k)
          this.taalOpcodes.length > 0 &&
            new a("fblogger")
              .blameToPreviousFrame()
              .blameToPreviousFrame()
              .warn("Blame helpers do not work with catching"),
            C.aggregateError(k, {
              messageFormat: d,
              messageParams: C.toStringParams(n),
              errorName: k.name,
              forcedKey: j,
              project: f,
              type: b,
              loggingSource: "FBLOGGER",
            }),
            (l = M.normalizeError(k));
        else {
          k = new Error(d);
          if (k.stack === void 0)
            try {
              throw k;
            } catch (a) {}
          k.messageFormat = d;
          k.messageParams = C.toStringParams(n);
          k.blameModule = i;
          k.forcedKey = j;
          k.project = f;
          k.type = b;
          k.loggingSource = "FBLOGGER";
          k.taalOpcodes = [g.PREVIOUS_FRAME, g.PREVIOUS_FRAME].concat(
            this.taalOpcodes
          );
          l = M.normalizeError(k);
          l.name = "FBLogger";
        }
        if (!h.isEmpty())
          if (l.metadata == null) l.metadata = h.format();
          else {
            var q = l.metadata.concat(h.format()),
              r = new Set(q);
            l.metadata = Array.from(r.values());
          }
        if (e.length > 0)
          if (l.events != null) {
            var s;
            (s = l.events).push.apply(s, e);
          } else l.events = e;
        R.reportNormalizedError(l);
        return k;
      };
      b.fatal = function (a) {
        for (
          var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
          d < b;
          d++
        )
          c[d - 1] = arguments[d];
        this.$1.apply(this, ["fatal", a].concat(c));
      };
      b.mustfix = function (a) {
        for (
          var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
          d < b;
          d++
        )
          c[d - 1] = arguments[d];
        this.$1.apply(this, ["error", a].concat(c));
      };
      b.warn = function (a) {
        for (
          var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
          d < b;
          d++
        )
          c[d - 1] = arguments[d];
        this.$1.apply(this, ["warn", a].concat(c));
      };
      b.info = function (a) {
        for (
          var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
          d < b;
          d++
        )
          c[d - 1] = arguments[d];
        this.$1.apply(this, ["info", a].concat(c));
      };
      b.debug = function (a) {};
      b.mustfixThrow = function (a) {
        for (
          var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
          d < b;
          d++
        )
          c[d - 1] = arguments[d];
        var e = this.$1.apply(this, ["error", a].concat(c));
        e ||
          ((e = h("mustfixThrow does not support catchingNormalizedError")),
          (e.taalOpcodes = e.taalOpcodes || []),
          e.taalOpcodes.push(g.PREVIOUS_FRAME));
        try {
          e.message = C.toReadableMessage(e);
        } catch (a) {}
        throw e;
      };
      b.catching = function (b) {
        !(b instanceof Error)
          ? new a("fblogger")
              .blameToPreviousFrame()
              .warn("Catching non-Error object is not supported")
          : (this.error = b);
        return this;
      };
      b.catchingNormalizedError = function (a) {
        this.normalizedError = a;
        return this;
      };
      b.event = function (a) {
        this.events.push(a);
        return this;
      };
      b.blameToModule = function (a) {
        this.blameModule = a;
        return this;
      };
      b.blameToPreviousFile = function () {
        this.taalOpcodes.push(g.PREVIOUS_FILE);
        return this;
      };
      b.blameToPreviousFrame = function () {
        this.taalOpcodes.push(g.PREVIOUS_FRAME);
        return this;
      };
      b.blameToPreviousDirectory = function () {
        this.taalOpcodes.push(g.PREVIOUS_DIR);
        return this;
      };
      b.addToCategoryKey = function (a) {
        this.forcedKey = a;
        return this;
      };
      b.addMetadata = function (a, b, c) {
        this.metadata.addEntry(a, b, c);
        return this;
      };
      return a;
    })();
    d = function (a, b) {
      var c = new ya(a);
      return b != null ? c.event(a + "." + b) : c;
    };
    d.addGlobalMetadata = function (a, b, c) {
      A.addGlobalMetadata(a, b, c);
    };
    f = {
      blameToPreviousFile: function (a) {
        var b;
        a.taalOpcodes = (b = a.taalOpcodes) !== null && b !== void 0 ? b : [];
        a.taalOpcodes.push(g.PREVIOUS_FILE);
        return a;
      },
      blameToPreviousFrame: function (a) {
        var b;
        a.taalOpcodes = (b = a.taalOpcodes) !== null && b !== void 0 ? b : [];
        a.taalOpcodes.push(g.PREVIOUS_FRAME);
        return a;
      },
      blameToPreviousDirectory: function (a) {
        var b;
        a.taalOpcodes = (b = a.taalOpcodes) !== null && b !== void 0 ? b : [];
        a.taalOpcodes.push(g.PREVIOUS_DIR);
        return a;
      },
    };
    F = {
      err: h,
      ErrorBrowserConsole: j,
      ErrorDynamicData: k,
      ErrorFilter: s,
      ErrorGlobalEventHandler: w,
      ErrorGuard: T,
      ErrorGuardState: y,
      ErrorMetadata: A,
      ErrorNormalizeUtils: M,
      ErrorPoster: ta,
      ErrorPubSub: R,
      ErrorSerializer: C,
      ErrorSetup: c,
      ErrorXFBDebug: G,
      FBLogger: d,
      getErrorSafe: u,
      getSimpleHash: H,
      TAAL: f,
      TAALOpcode: g,
    };
    e.exports = F;
  },
  null
);
__d(
  "FBLogger",
  ["fb-error"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("fb-error").FBLogger;
  },
  98
);
__d(
  "ServiceWorkerEventLogger",
  ["FBLogger"],
  function (a, b, c, d, e, f, g) {
    var h = 1e3,
      i = [],
      j = 0,
      k = 0;
    function l(a) {
      var b = "[" + new Date().toISOString() + "]  ";
      i[k % h] = b + a;
      k++;
      while (k - j > h) j++;
    }
    function a(a) {
      l("[ERROR] " + a), c("FBLogger")("serviceworker").mustfix(a);
    }
    function b() {
      var a = k % h,
        b = k % h;
      if (a <= b) {
        b = i.slice(b);
        a = i.slice(0, a);
        return b.concat(a);
      }
      return i.slice(j, k);
    }
    g.log = l;
    g.error = a;
    g.dump = b;
  },
  98
);
__d(
  "ServiceWorkerCacheStorage",
  ["Promise", "ServiceWorkerEventLogger", "asyncToGeneratorRuntime"],
  function (a, b, c, d, e, f, g) {
    var h = "sw-cache",
      i = "installing-sw-cache",
      j = "rsrc-cache",
      k = "/sw/cache/canary/file.html",
      l = caches.open(j),
      m = !1;
    function n() {
      return o.apply(this, arguments);
    }
    function o() {
      o = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        var a = yield caches.keys(),
          c = [],
          d = new RegExp("^" + i + "(.*)$");
        for (a of a) {
          var e = d.exec(a);
          if ((!e || !e[1]) && a !== h) continue;
          c.push(caches["delete"](a));
        }
        yield b("Promise").all(c);
      });
      return o.apply(this, arguments);
    }
    function p() {
      return q.apply(this, arguments);
    }
    function q() {
      q = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        var a = yield caches.keys();
        yield b("Promise").all(
          a.map(
            (function () {
              var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (
                a
              ) {
                yield caches["delete"](a);
              });
              return function (b) {
                return a.apply(this, arguments);
              };
            })()
          )
        );
        return yield caches.open(j);
      });
      return q.apply(this, arguments);
    }
    function r() {
      return s.apply(this, arguments);
    }
    function s() {
      s = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        var a = yield l;
        a = yield a.keys();
        var b = new Map();
        a.forEach(function (a) {
          if (a.url === self.registration.scope.slice(0, -1) + k) return;
          b.set(a.url, a);
        });
        return b;
      });
      return s.apply(this, arguments);
    }
    function a() {
      return t.apply(this, arguments);
    }
    function t() {
      t = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        d("ServiceWorkerEventLogger").log("Clearing cache"),
          (m = !0),
          (l = p()),
          yield l,
          (m = !1);
      });
      return t.apply(this, arguments);
    }
    function u(a) {
      return v.apply(this, arguments);
    }
    function v() {
      v = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        d("ServiceWorkerEventLogger").log(
          "Adding request to cache: " +
            (typeof a === "string" || a instanceof URL ? a.toString() : a.url)
        );
        var b = yield l;
        yield b.add(a);
      });
      return v.apply(this, arguments);
    }
    function c(a) {
      return w.apply(this, arguments);
    }
    function w() {
      w = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        a = new Request(a, {
          mode: "same-origin",
          credentials: "same-origin",
          redirect: "manual",
        });
        return yield u(a);
      });
      return w.apply(this, arguments);
    }
    function e(a) {
      return x.apply(this, arguments);
    }
    function x() {
      x = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        var b = yield l;
        yield b.addAll(a);
      });
      return x.apply(this, arguments);
    }
    function y(a, b) {
      return z.apply(this, arguments);
    }
    function z() {
      z = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b) {
        d("ServiceWorkerEventLogger").log(
          "Putting response into cache: " +
            (typeof a === "string" || a instanceof URL ? a.toString() : a.url)
        );
        var c = yield l;
        yield c.put(a, b);
      });
      return z.apply(this, arguments);
    }
    function A(a, b) {
      return B.apply(this, arguments);
    }
    function B() {
      B = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b) {
        var c = yield l;
        return yield c.match(a, b);
      });
      return B.apply(this, arguments);
    }
    function f(a, b) {
      return C.apply(this, arguments);
    }
    function C() {
      C = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, c) {
        var e = yield r(),
          f = [];
        for (a of Object.values(a)) {
          var g = c(a);
          typeof g === "string" && !e.has(g) && f.push(g);
        }
        var h = yield l;
        yield b("Promise").all(
          f.map(
            (function () {
              var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (
                a
              ) {
                try {
                  yield h.add(a);
                } catch (b) {
                  d("ServiceWorkerEventLogger").error(
                    "Failed adding request to cache: " +
                      (typeof a === "string" || a instanceof URL
                        ? a.toString()
                        : a.url)
                  );
                  throw b;
                }
              });
              return function (b) {
                return a.apply(this, arguments);
              };
            })()
          )
        );
      });
      return C.apply(this, arguments);
    }
    function D() {
      return E.apply(this, arguments);
    }
    function E() {
      E = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        yield y(k, new Response(""));
      });
      return E.apply(this, arguments);
    }
    function F() {
      return G.apply(this, arguments);
    }
    function G() {
      G = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        yield n();
      });
      return G.apply(this, arguments);
    }
    function H(a) {
      return I.apply(this, arguments);
    }
    function I() {
      I = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        var c = yield b("Promise").all([r(), l]),
          d = c[0];
        c = c[1];
        var e = [];
        for (d of d) {
          var f = d[0],
            g = d[1];
          !a[f] && g !== k && e.push(c["delete"](g));
        }
        yield b("Promise").all(e);
      });
      return I.apply(this, arguments);
    }
    function J() {
      return m;
    }
    function K() {
      return L.apply(this, arguments);
    }
    function L() {
      L = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        var a = yield A(new Request(k));
        return !!a;
      });
      return L.apply(this, arguments);
    }
    function M() {
      return r();
    }
    g.clearCache = a;
    g.add = u;
    g.addAsNavigate = c;
    g.addAll = e;
    g.put = y;
    g.match = A;
    g.installAllNotInCache = f;
    g.completeCacheInstall = D;
    g.activateCache = F;
    g.purgeCacheExceptFor = H;
    g.isCacheClearing = J;
    g.hasCacheCanary = K;
    g.getKeysForLoggingOnly = M;
  },
  98
);
__d(
  "Random",
  [],
  function (a, b, c, d, e, f) {
    var g = 4294967296;
    function h() {
      var a = new Uint32Array(1);
      return self.crypto.getRandomValues(a)[0] / g;
    }
    function a() {
      return Math.floor(h() * g);
    }
    f.random = h;
    f.uint32 = a;
  },
  66
);
__d(
  "Env",
  [],
  function (a, b, c, d, e, f) {
    b = {
      ajaxpipe_token: null,
      compat_iframe_token: null,
      iframeKey: "",
      iframeTarget: "",
      iframeToken: "",
      isCQuick: !1,
      jssp_header_sent: !1,
      jssp_targeting_enabled: !1,
      start: Date.now(),
      nocatch: !1,
      useTrustedTypes: !1,
      isTrustedTypesReportOnly: !1,
      enableDefaultTrustedTypesPolicy: !1,
      ig_server_override: "",
      barcelona_server_override: "",
      ig_mqtt_wss_endpoint: "",
      ig_mqtt_polling_endpoint: "",
      scheduledCSSJSScheduler: !1,
    };
    a.Env && Object.assign(b, a.Env);
    a.Env = b;
    c = b;
    f["default"] = c;
  },
  66
);
__d(
  "fb-error-lite",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = {
      PREVIOUS_FILE: 1,
      PREVIOUS_FRAME: 2,
      PREVIOUS_DIR: 3,
      FORCED_KEY: 4,
    };
    function a(a) {
      var b = new Error(a);
      if (b.stack === void 0)
        try {
          throw b;
        } catch (a) {}
      b.messageFormat = a;
      for (
        var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), e = 1;
        e < c;
        e++
      )
        d[e - 1] = arguments[e];
      b.messageParams = d.map(function (a) {
        return String(a);
      });
      b.taalOpcodes = [g.PREVIOUS_FRAME];
      return b;
    }
    b = { err: a, TAALOpcode: g };
    f["default"] = b;
  },
  66
);
__d(
  "sprintf",
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      for (
        var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
        d < b;
        d++
      )
        c[d - 1] = arguments[d];
      var e = 0;
      return a.replace(/%s/g, function () {
        return String(c[e++]);
      });
    }
    f["default"] = a;
  },
  66
);
__d(
  "invariant",
  ["Env", "fb-error-lite", "sprintf"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      if (!a) {
        var d = b;
        for (
          var e = arguments.length, f = new Array(e > 2 ? e - 2 : 0), g = 2;
          g < e;
          g++
        )
          f[g - 2] = arguments[g];
        if (typeof d === "number") {
          var i = h(d, f),
            j = i.message,
            k = i.decoderLink;
          d = j;
          f.unshift(k);
        } else if (d === void 0) {
          d = "Invariant: ";
          for (var l = 0; l < f.length; l++) d += "%s,";
        }
        var m = d,
          n = new Error(m);
        n.name = "Invariant Violation";
        n.messageFormat = d;
        n.messageParams = f.map(function (a) {
          return String(a);
        });
        n.taalOpcodes = [c("fb-error-lite").TAALOpcode.PREVIOUS_FRAME];
        n.stack;
        throw n;
      }
    }
    function h(a, b) {
      var d = "Minified invariant #" + a + "; %s";
      b.length > 0 &&
        (d +=
          " Params: " +
          b
            .map(function (a) {
              return "%s";
            })
            .join(", "));
      a =
        c("Env").show_invariant_decoder === !0
          ? "visit " + i(a, b) + " to see the full message."
          : "";
      return { message: d, decoderLink: a };
    }
    function i(a, b) {
      a = "https://www.internalfb.com/intern/invariant/" + a + "/";
      b.length > 0 &&
        (a +=
          "?" +
          b
            .map(function (a, b) {
              return "args[" + b + "]=" + encodeURIComponent(String(a));
            })
            .join("&"));
      return a;
    }
    g["default"] = a;
  },
  98
);
__d(
  "ServiceWorkerMessage",
  ["invariant"],
  function (a, b, c, d, e, f, g, h) {
    var i = {};
    self.addEventListener("message", function (a) {
      var b = a.data;
      b.command &&
        i[b.command] &&
        i[b.command]({
          data: b.data || {},
          source: a.source,
          respond: function (b, c) {
            (a.ports && a.ports[0]) || h(0, 1812),
              a.ports[0].postMessage({ command: b, data: c });
          },
        });
    });
    a = (function () {
      function a(a, b, c) {
        (this.$1 = a), (this.$2 = b), (this.$3 = c);
      }
      var b = a.prototype;
      b.sendTo = function (a) {
        var b = new MessageChannel();
        if (this.$3) {
          var c = this.$3;
          b.port1.onmessage = function (a) {
            a = a;
            c(a);
          };
        }
        var d = babelHelpers["extends"]({}, this.$2, { command: this.$1 });
        a.postMessage(d, [b.port2]);
      };
      a.addCommandHandler = function (a, b) {
        i[a] && h(0, 12339, a);
        i[a] = b;
        var c = !1;
        return {
          remove: function () {
            c && h(0, 1814), (i[a] = null), (c = !0);
          },
        };
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "str2rstr",
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      var b = "",
        c,
        d;
      for (var e = 0; e < a.length; e++)
        (c = a.charCodeAt(e)),
          (d = e + 1 < a.length ? a.charCodeAt(e + 1) : 0),
          55296 <= c &&
            c <= 56319 &&
            56320 <= d &&
            d <= 57343 &&
            ((c = 65536 + ((c & 1023) << 10) + (d & 1023)), e++),
          c <= 127
            ? (b += String.fromCharCode(c))
            : c <= 2047
            ? (b += String.fromCharCode(192 | ((c >>> 6) & 31), 128 | (c & 63)))
            : c <= 65535
            ? (b += String.fromCharCode(
                224 | ((c >>> 12) & 15),
                128 | ((c >>> 6) & 63),
                128 | (c & 63)
              ))
            : c <= 2097151 &&
              (b += String.fromCharCode(
                240 | ((c >>> 18) & 7),
                128 | ((c >>> 12) & 63),
                128 | ((c >>> 6) & 63),
                128 | (c & 63)
              ));
      return b;
    }
    f["default"] = a;
  },
  66
);
__d(
  "md5",
  ["str2rstr"],
  function (a, b, c, d, e, f, g) {
    function h(a, b) {
      var c = a[0],
        d = a[1],
        e = a[2],
        f = a[3];
      c = j(c, d, e, f, b[0], 7, -680876936);
      f = j(f, c, d, e, b[1], 12, -389564586);
      e = j(e, f, c, d, b[2], 17, 606105819);
      d = j(d, e, f, c, b[3], 22, -1044525330);
      c = j(c, d, e, f, b[4], 7, -176418897);
      f = j(f, c, d, e, b[5], 12, 1200080426);
      e = j(e, f, c, d, b[6], 17, -1473231341);
      d = j(d, e, f, c, b[7], 22, -45705983);
      c = j(c, d, e, f, b[8], 7, 1770035416);
      f = j(f, c, d, e, b[9], 12, -1958414417);
      e = j(e, f, c, d, b[10], 17, -42063);
      d = j(d, e, f, c, b[11], 22, -1990404162);
      c = j(c, d, e, f, b[12], 7, 1804603682);
      f = j(f, c, d, e, b[13], 12, -40341101);
      e = j(e, f, c, d, b[14], 17, -1502002290);
      d = j(d, e, f, c, b[15], 22, 1236535329);
      c = k(c, d, e, f, b[1], 5, -165796510);
      f = k(f, c, d, e, b[6], 9, -1069501632);
      e = k(e, f, c, d, b[11], 14, 643717713);
      d = k(d, e, f, c, b[0], 20, -373897302);
      c = k(c, d, e, f, b[5], 5, -701558691);
      f = k(f, c, d, e, b[10], 9, 38016083);
      e = k(e, f, c, d, b[15], 14, -660478335);
      d = k(d, e, f, c, b[4], 20, -405537848);
      c = k(c, d, e, f, b[9], 5, 568446438);
      f = k(f, c, d, e, b[14], 9, -1019803690);
      e = k(e, f, c, d, b[3], 14, -187363961);
      d = k(d, e, f, c, b[8], 20, 1163531501);
      c = k(c, d, e, f, b[13], 5, -1444681467);
      f = k(f, c, d, e, b[2], 9, -51403784);
      e = k(e, f, c, d, b[7], 14, 1735328473);
      d = k(d, e, f, c, b[12], 20, -1926607734);
      c = l(c, d, e, f, b[5], 4, -378558);
      f = l(f, c, d, e, b[8], 11, -2022574463);
      e = l(e, f, c, d, b[11], 16, 1839030562);
      d = l(d, e, f, c, b[14], 23, -35309556);
      c = l(c, d, e, f, b[1], 4, -1530992060);
      f = l(f, c, d, e, b[4], 11, 1272893353);
      e = l(e, f, c, d, b[7], 16, -155497632);
      d = l(d, e, f, c, b[10], 23, -1094730640);
      c = l(c, d, e, f, b[13], 4, 681279174);
      f = l(f, c, d, e, b[0], 11, -358537222);
      e = l(e, f, c, d, b[3], 16, -722521979);
      d = l(d, e, f, c, b[6], 23, 76029189);
      c = l(c, d, e, f, b[9], 4, -640364487);
      f = l(f, c, d, e, b[12], 11, -421815835);
      e = l(e, f, c, d, b[15], 16, 530742520);
      d = l(d, e, f, c, b[2], 23, -995338651);
      c = m(c, d, e, f, b[0], 6, -198630844);
      f = m(f, c, d, e, b[7], 10, 1126891415);
      e = m(e, f, c, d, b[14], 15, -1416354905);
      d = m(d, e, f, c, b[5], 21, -57434055);
      c = m(c, d, e, f, b[12], 6, 1700485571);
      f = m(f, c, d, e, b[3], 10, -1894986606);
      e = m(e, f, c, d, b[10], 15, -1051523);
      d = m(d, e, f, c, b[1], 21, -2054922799);
      c = m(c, d, e, f, b[8], 6, 1873313359);
      f = m(f, c, d, e, b[15], 10, -30611744);
      e = m(e, f, c, d, b[6], 15, -1560198380);
      d = m(d, e, f, c, b[13], 21, 1309151649);
      c = m(c, d, e, f, b[4], 6, -145523070);
      f = m(f, c, d, e, b[11], 10, -1120210379);
      e = m(e, f, c, d, b[2], 15, 718787259);
      d = m(d, e, f, c, b[9], 21, -343485551);
      a[0] = s(c, a[0]);
      a[1] = s(d, a[1]);
      a[2] = s(e, a[2]);
      a[3] = s(f, a[3]);
    }
    function i(a, b, c, d, e, f) {
      b = s(s(b, a), s(d, f));
      return s((b << e) | (b >>> (32 - e)), c);
    }
    function j(a, b, c, d, e, f, g) {
      return i((b & c) | (~b & d), a, b, e, f, g);
    }
    function k(a, b, c, d, e, f, g) {
      return i((b & d) | (c & ~d), a, b, e, f, g);
    }
    function l(a, b, c, d, e, f, g) {
      return i(b ^ c ^ d, a, b, e, f, g);
    }
    function m(a, b, c, d, e, f, g) {
      return i(c ^ (b | ~d), a, b, e, f, g);
    }
    function n(a) {
      var b = a.length,
        c = [1732584193, -271733879, -1732584194, 271733878],
        d;
      for (d = 64; d <= a.length; d += 64) h(c, o(a.substring(d - 64, d)));
      a = a.substring(d - 64);
      var e = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      for (d = 0; d < a.length; d++)
        e[d >> 2] |= a.charCodeAt(d) << ((d & 3) << 3);
      e[d >> 2] |= 128 << ((d & 3) << 3);
      if (d > 55) {
        h(c, e);
        for (d = 0; d < 16; d++) e[d] = 0;
      }
      e[14] = b * 8;
      h(c, e);
      return c;
    }
    function o(a) {
      var b = [],
        c = 0;
      while (c < 64)
        b[c >> 2] =
          a.charCodeAt(c++) |
          (a.charCodeAt(c++) << 8) |
          (a.charCodeAt(c++) << 16) |
          (a.charCodeAt(c++) << 24);
      return b;
    }
    var p = "0123456789abcdef".split("");
    function q(a) {
      var b = "",
        c = 0;
      for (; c < 4; c++)
        b += p[(a >> ((c << 3) + 4)) & 15] + p[(a >> (c << 3)) & 15];
      return b;
    }
    function r(a) {
      var b = [];
      for (var c = 0; c < a.length; c++) b[c] = q(a[c]);
      return b.join("");
    }
    var s = function (a, b) {
      return (a + b) & 4294967295;
    };
    function a(a) {
      if (a == null) return null;
      a = a;
      for (var b = 0; b < a.length; b++)
        if (a[b] > "\x7f") {
          a = c("str2rstr")(a);
          break;
        }
      return r(n(a));
    }
    a("hello") != "5d41402abc4b2a76b9719d911017c592" &&
      (s = function (a, b) {
        var c = (a & 65535) + (b & 65535);
        a = (a >> 16) + (b >> 16) + (c >> 16);
        return (a << 16) | (c & 65535);
      });
    g["default"] = a;
  },
  98
);
__d(
  "ServiceWorkerServerData",
  ["md5"],
  function (a, b, c, d, e, f, g) {
    function h(a, b, c) {
      if (self.__swData[a] && self.__swData[a][b] !== void 0)
        return self.__swData[a][b];
      c === void 0 && (c = null);
      return c;
    }
    function a(a, b) {
      var c = h(a, b);
      if (typeof c === "string") return c;
      throw new Error(
        'Server data "' +
          a +
          "." +
          b +
          '" was expected to be a ' +
          ('string, instead it had a value of "' + String(c) + '"')
      );
    }
    function b() {
      return c("md5")(JSON.stringify(self.__swData));
    }
    g.getData = h;
    g.getString = a;
    g.getDataHash = b;
  },
  98
);
__d(
  "ServiceWorkerClientID",
  [
    "invariant",
    "Promise",
    "Random",
    "RouteLoadsLogging",
    "ServiceWorkerMessage",
    "ServiceWorkerServerData",
    "asyncToGeneratorRuntime",
  ],
  function (a, b, c, d, e, f, g, h) {
    var i = new Map(),
      j = d("Random").uint32();
    function k(a, b) {
      return l.apply(this, arguments);
    }
    function l() {
      l = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, e) {
        return new (b("Promise"))(function (b) {
          c("ServiceWorkerMessage").addCommandHandler(a, function (a) {
            a = a.source;
            b(a.id);
            d("RouteLoadsLogging").logCompletionForRoute(e);
          });
        });
      });
      return l.apply(this, arguments);
    }
    function a(a) {
      var b = "r" + j++;
      i.set(b, k(b, a));
      return b;
    }
    function e(a) {
      i.has(a) || h(0, 12325, a);
      var b = d("ServiceWorkerServerData").getString(
        "ClientIDInformer",
        "code"
      );
      return (
        "<script>" +
        b +
        ("window.__ServiceWorkerClientIDInformer.post('" + a + "');") +
        "</script>"
      );
    }
    function f(a) {
      return m.apply(this, arguments);
    }
    function m() {
      m = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        return i.get(a);
      });
      return m.apply(this, arguments);
    }
    g.generateRequestID = a;
    g.getClientIDInformerCode = e;
    g.getClientID = f;
  },
  98
);
__d(
  "ServiceWorkerConslidatedHeader",
  ["ServiceWorkerServerData"],
  function (a, b, c, d, e, f, g) {
    function a() {
      return d("ServiceWorkerServerData").getString(
        "ConsolidatedHeader",
        "header_name"
      );
    }
    function b(a) {
      var b = d("ServiceWorkerServerData").getData(
        "ConsolidatedHeader",
        "key_names",
        {}
      );
      if (!b || typeof b !== "object" || !b[a])
        throw new Error("missing key name!");
      return String(b[a]);
    }
    g.getHeaderName = a;
    g.getKey = b;
  },
  98
);
__d(
  "ServiceWorkerVersion",
  ["ServiceWorkerServerData"],
  function (a, b, c, d, e, f, g) {
    function h() {
      return Number(
        d("ServiceWorkerServerData").getData("SiteData", "revision", -1)
      );
    }
    function a() {
      return String(h()) + ":" + d("ServiceWorkerServerData").getDataHash();
    }
    function b(a, b) {
      b = b.includeCurrent;
      a = /^([0-9]*):[a-f0-9]{32}$/.exec(a);
      return !a || !a[1] ? !1 : b ? Number(a[1]) <= h() : Number(a[1]) < h();
    }
    g.getCurrentRev = h;
    g.getInstanceKey = a;
    g.isInstanceKeyFromEarlier = b;
  },
  98
);
__d(
  "ServiceWorkerPreload",
  [
    "Promise",
    "ServiceWorkerAsyncStorage",
    "ServiceWorkerConslidatedHeader",
    "ServiceWorkerServerData",
    "ServiceWorkerVersion",
    "asyncToGeneratorRuntime",
  ],
  function (a, b, c, d, e, f, g) {
    var h = "preload_queue",
      i = {};
    function j() {
      return k.apply(this, arguments);
    }
    function k() {
      k = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        var a = yield self.registration.navigationPreload.getState();
        a.enabled ||
          (yield self.registration.navigationPreload.enable(),
          (a = yield self.registration.navigationPreload.getState()));
        return a;
      });
      return k.apply(this, arguments);
    }
    function l() {
      return !!self.registration.navigationPreload;
    }
    function a() {
      return m.apply(this, arguments);
    }
    function m() {
      m = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        if (!self.registration.navigationPreload) return !1;
        var a = yield self.registration.navigationPreload.getState();
        return a && a.enabled;
      });
      return m.apply(this, arguments);
    }
    function c(a) {
      return n.apply(this, arguments);
    }
    function n() {
      n = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        for (a of Object.entries(a)) {
          var b = a[0],
            c = a[1];
          i[b] = c;
        }
        yield d("ServiceWorkerAsyncStorage").setItem(
          h + d("ServiceWorkerVersion").getInstanceKey(),
          i
        );
      });
      return n.apply(this, arguments);
    }
    function e() {
      return o.apply(this, arguments);
    }
    function o() {
      o = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        if (!l()) {
          yield t();
          return;
        }
        yield j();
        yield p();
      });
      return o.apply(this, arguments);
    }
    function f() {
      r({});
    }
    function p() {
      return q.apply(this, arguments);
    }
    function q() {
      q = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        var a = yield d("ServiceWorkerAsyncStorage").getItem(
          h + d("ServiceWorkerVersion").getInstanceKey()
        );
        (!a || typeof a !== "object") && (a = {});
        var c = new RegExp("^" + h + "(.*)$");
        yield b("Promise").all([
          r(a),
          d("ServiceWorkerAsyncStorage").removeAllItemWithPredicate(function (
            a
          ) {
            a = c.exec(a);
            return !a || !a[1]
              ? !1
              : d("ServiceWorkerVersion").isInstanceKeyFromEarlier(a[1], {
                  includeCurrent: !0,
                });
          }),
        ]);
      });
      return q.apply(this, arguments);
    }
    function r(a) {
      return s.apply(this, arguments);
    }
    function s() {
      s = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        if (!l()) {
          yield t();
          return;
        }
        var b = d("ServiceWorkerConslidatedHeader").getKey("SW_SVN"),
          c = d("ServiceWorkerVersion").getCurrentRev();
        a[b] = c;
        b = d("ServiceWorkerConslidatedHeader").getKey(
          "SW_SPLASH_SCREEN_ENABLED"
        );
        c = d("ServiceWorkerServerData").getData(
          "SplashScreenData",
          "splash_screen_enabled",
          !1
        );
        c && (a[b] = 1);
        c = d("ServiceWorkerConslidatedHeader").getKey("SW_SITE_TYPE");
        b = d("ServiceWorkerServerData").getData("SiteData", "siteType");
        typeof b === "string" && (a[c] = b);
        yield self.registration.navigationPreload.setHeaderValue(
          JSON.stringify(a)
        );
      });
      return s.apply(this, arguments);
    }
    function t() {
      return u.apply(this, arguments);
    }
    function u() {
      u = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        self.registration.navigationPreload &&
          (yield self.registration.navigationPreload.disable());
      });
      return u.apply(this, arguments);
    }
    function v() {
      return d("ServiceWorkerServerData").getString(
        "PreloadData",
        "responseHeaderName"
      );
    }
    g.isEnabled = l;
    g.isRegistered = a;
    g.queueToHeaderToStorageForActivate = c;
    g.activate = e;
    g.clearFetchRouteHeader = f;
    g._activateHeaderFromStorage = p;
    g._setHeader = r;
    g.disable = t;
    g.getResponseHeaderName = v;
  },
  98
);
__d(
  "TimingAnnotations",
  [],
  function (a, b, c, d, e, f) {
    a = (function () {
      function a() {}
      var b = a.prototype;
      b.addStringAnnotation = function (a, b) {
        return this;
      };
      b.addSetAnnotation = function (a, b) {
        return this;
      };
      b.addSetElement = function (a, b) {
        return this;
      };
      b.registerOnBeforeSend = function (a) {
        return this;
      };
      b.addVectorAnnotation = function (a, b) {
        return this;
      };
      b.addVectorElement = function (a, b) {
        return this;
      };
      return a;
    })();
    b = (function () {
      function a() {
        (this.$1 = null), (this.$2 = null), (this.$3 = null), (this.$4 = []);
      }
      var b = a.prototype;
      b.addStringAnnotation = function (a, b) {
        this.$2 = this.$2 || new Map();
        this.$2.set(a, b);
        return this;
      };
      b.addSetAnnotation = function (a, b) {
        var c = this.$1 || new Map(),
          d = c.get(a) || new Set();
        b.forEach(function (a) {
          return d.add(a);
        });
        c.set(a, d);
        this.$1 = c;
        return this;
      };
      b.addSetElement = function (a, b) {
        var c = this.$1 || new Map(),
          d = c.get(a) || new Set();
        d.add(b);
        c.set(a, d);
        this.$1 = c;
        return this;
      };
      b.addVectorAnnotation = function (a, b) {
        this.$3 = this.$3 || new Map();
        this.$3.set(a, b);
        return this;
      };
      b.addVectorElement = function (a, b) {
        var c = (this.$3 = this.$3 || new Map()),
          d = this.$3.get(a) || [];
        d.push(b);
        c.set(a, d);
        return this;
      };
      b.registerOnBeforeSend = function (a) {
        this.$4.push(a);
        return this;
      };
      b.prepareToSend = function () {
        var a = this;
        this.$4.forEach(function (b) {
          return b(a);
        });
        this.$4 = [];
        var b = {};
        if (this.$1 != null)
          for (
            var c = this.$1,
              d = Array.isArray(c),
              e = 0,
              c = d
                ? c
                : c[
                    typeof Symbol === "function"
                      ? Symbol.iterator
                      : "@@iterator"
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
            var g = f[0];
            f = f[1];
            b[g] = Array.from(f.values());
          }
        g = {};
        if (this.$2 != null)
          for (
            f = this.$2,
              e = Array.isArray(f),
              d = 0,
              f = e
                ? f
                : f[
                    typeof Symbol === "function"
                      ? Symbol.iterator
                      : "@@iterator"
                  ]();
            ;

          ) {
            if (e) {
              if (d >= f.length) break;
              c = f[d++];
            } else {
              d = f.next();
              if (d.done) break;
              c = d.value;
            }
            c = c;
            var h = c[0];
            c = c[1];
            g[h] = c;
          }
        h = {};
        if (this.$3 != null)
          for (
            c = this.$3,
              d = Array.isArray(c),
              e = 0,
              c = d
                ? c
                : c[
                    typeof Symbol === "function"
                      ? Symbol.iterator
                      : "@@iterator"
                  ]();
            ;

          ) {
            if (d) {
              if (e >= c.length) break;
              f = c[e++];
            } else {
              e = c.next();
              if (e.done) break;
              f = e.value;
            }
            f = f;
            var i = f[0];
            f = f[1];
            h[i] = f;
          }
        return { setProps: b, stringProps: g, vectorProps: h };
      };
      a.combine = function (a, b) {
        var c;
        a != null && b != null
          ? ((a.stringProps = babelHelpers["extends"](
              {},
              b.stringProps,
              a.stringProps
            )),
            (a.setProps = babelHelpers["extends"]({}, b.setProps, a.setProps)),
            (c = a))
          : a != null
          ? (c = a)
          : b != null && (c = b);
        return c;
      };
      return a;
    })();
    b.EmptyTimingAnnotations = a;
    b.EmptyTraceTimingAnnotations = a;
    b.TraceTimingAnnotations = b;
    f["default"] = b;
  },
  66
);
__d(
  "ServiceWorkerProfilerTypes",
  [],
  function (a, b, c, d, e, f, g) {
    a = {
      START: "start",
      PARSED: "parsed",
      INITIALIZED: "init",
      FIRST_EVENT: "firstEvent",
      ACTIVATE_START: "activate_start",
      RESOURCE_CACHE_ACTIVATE_START: "resource_cache_activate_start",
      RESOURCE_CACHE_ACTIVATE_END: "resource_cache_activate_end",
      ACTIVATE_END: "activate_end",
    };
    b = {
      FETCH_START: "start",
      ROUTE_CONFIG_CACHE_LOOKUP_START: "routeLookupStart",
      ROUTE_CONFIG_CACHE_LOOKUP_END: "routeLookupEnd",
      BEGIN_RESPONSE: "beginResponse",
      CACHE_FLUSH: "cacheFlush",
      RESOURCE_CACHE_FETCH_START: "resourceCacheFetchStart",
      RESOURCE_CACHE_FETCH_END: "resourceCacheFetchEnd",
      NETWORK_REQUEST_START: "requestStart",
      NETWORK_REQUEST_END: "requestEnd",
      NETWORK_RESPONSE_START: "responseStart",
      NETWORK_RESPONSE_END: "responseEnd",
      FETCH_END: "end",
    };
    g.WorkerTiming = a;
    g.FetchTiming = b;
  },
  98
);
__d(
  "performanceSWStart",
  [],
  function (a, b, c, d, e, f) {
    var g = Date.now() - self.performance.now();
    function a() {
      return g;
    }
    f["default"] = a;
  },
  66
);
__d(
  "performanceAbsoluteNow",
  ["performanceSWStart"],
  function (a, b, c, d, e, f) {
    if (self.performance && self.performance.now) {
      var g = b("performanceSWStart")();
      a = function () {
        return self.performance.now() + g;
      };
    } else
      a = function () {
        return Date.now();
      };
    e.exports = a;
  },
  null
);
__d(
  "clearTimeout",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = self.clearTimeout;
    f["default"] = a;
  },
  66
);
__d(
  "setTimeout",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = self.setTimeout;
    f["default"] = a;
  },
  66
);
__d(
  "promiseWithTimeout",
  ["Promise", "clearTimeout", "regeneratorRuntime", "setTimeout"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = (function () {
      var d = a.prototype;
      d.$3 = function (a) {
        var d;
        return b("regeneratorRuntime").async(
          function (e) {
            while (1)
              switch ((e.prev = e.next)) {
                case 0:
                  e.next = 2;
                  return b("regeneratorRuntime").awrap(a);
                case 2:
                  d = e.sent;
                  this.$1 && (c("clearTimeout")(this.$1), (this.$1 = null));
                  return e.abrupt("return", d);
                case 5:
                case "end":
                  return e.stop();
              }
          },
          null,
          this
        );
      };
      function a(a, d) {
        var e = this;
        this.$2 = new (b("Promise"))(function (b, f) {
          var g = !1;
          e.$1 = c("setTimeout")(function () {
            if (g) return;
            g = !0;
            (d.rejectOnTimeout ? f : b)();
          }, d.timeout);
          e.$3(a)
            .then(function (a) {
              if (g) return;
              g = !0;
              b(a);
            })
            ["catch"](function (a) {
              if (g) return;
              g = !0;
              f(a);
            });
        });
      }
      d.getPromise = function () {
        return this.$2;
      };
      return a;
    })();
    function a(a, b) {
      return new h(a, b).getPromise();
    }
    g["default"] = a;
  },
  98
);
__d(
  "ServiceWorkerRequestTimings",
  [
    "Promise",
    "TimingAnnotations",
    "performanceAbsoluteNow",
    "promiseWithTimeout",
  ],
  function (a, b, c, d, e, f, g) {
    a = (function () {
      function a() {
        var a = this;
        this.$2 = new Map();
        this.$1 = new (c("TimingAnnotations"))();
        this.$3 = new (b("Promise"))(function (b, c) {
          (a.$4 = b), (a.$5 = c);
        });
        this.$6 = new (b("Promise"))(function (b, c) {
          (a.$7 = b), (a.$8 = c);
        });
      }
      var d = a.prototype;
      d.getLoggingFinishedPromise = function () {
        return this.$3;
      };
      d.inform = function (a) {
        var b = {
          ts: c("performanceAbsoluteNow")(),
          annotations: new (c("TimingAnnotations"))(),
        };
        this.$2.set(a, b);
        return b.annotations;
      };
      d.complete = function () {
        this.$4(this);
      };
      d.loggingRead = function () {
        this.$7();
      };
      d.getLoggingReadPromise = function () {
        return c("promiseWithTimeout")(this.$6, { timeout: 3e5 });
      };
      d.abort = function () {
        this.$5();
      };
      d.getEvents = function () {
        return this.$2;
      };
      d.getAnnotations = function () {
        return this.$1;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "genClientWindows",
  ["asyncToGeneratorRuntime"],
  function (a, b, c, d, e, f) {
    function a(a) {
      return g.apply(this, arguments);
    }
    function g() {
      g = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        a = a === void 0 ? {} : a;
        var b = a.includeUncontrolled,
          c = a.focusedCheck;
        a = yield self.clients.matchAll({
          type: "window",
          includeUncontrolled: !!b,
        });
        return a.filter(function (a) {
          return (
            a.frameType === "top-level" &&
            (!c || (a.focused && a.visibilityState === "visible")) &&
            a.focus
          );
        });
      });
      return g.apply(this, arguments);
    }
    f["default"] = a;
  },
  66
);
__d(
  "promiseDone",
  [],
  function (a, b, c, d, e, f) {
    function a(a, b, c) {
      var d = arguments.length > 1 ? a.then(b, c) : a;
      d.then(null, function (a) {
        setTimeout(function () {
          throw a;
        }, 0);
      });
    }
    f["default"] = a;
  },
  66
);
__d(
  "Artillery4SW",
  [
    "invariant",
    "Promise",
    "RouteLoadsLogging",
    "ServiceWorkerCacheStorage",
    "ServiceWorkerClientID",
    "ServiceWorkerMessage",
    "ServiceWorkerPreload",
    "ServiceWorkerProfilerTypes",
    "ServiceWorkerRequestTimings",
    "ServiceWorkerResourceCacheResourceFetchEvent",
    "ServiceWorkerRouteConfigStorage",
    "TimingAnnotations",
    "asyncToGeneratorRuntime",
    "genClientWindows",
    "performanceAbsoluteNow",
    "performanceSWStart",
    "promiseDone",
  ],
  function (a, b, c, d, e, f, g, h) {
    var i = new Map(),
      j = new Map(),
      k = new Map(),
      l = 30,
      m = [];
    function n(a) {
      var b = {};
      a.forEach(function (a, c) {
        b[c] = { ts: a.ts, annotations: a.annotations.prepareToSend() };
      });
      return b;
    }
    c("ServiceWorkerMessage").addCommandHandler(
      "asw-pageTraceDataRequest",
      (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
          var e = a.source,
            f = a.respond;
          a = a.data;
          var g = k.get(e.id),
            h = null;
          g && (h = yield g.getLoggingFinishedPromise());
          var j = m.map(function (a) {
            return {
              timings: n(a.getEvents()),
              annotations: a.getAnnotations().prepareToSend(),
            };
          });
          m = [];
          var l = yield b("Promise").all([
              d("ServiceWorkerCacheStorage").hasCacheCanary(),
              c("genClientWindows")(),
              d("ServiceWorkerPreload").isRegistered(),
            ]),
            o = l[0],
            p = l[1];
          l = l[2];
          var q = new (c("TimingAnnotations"))();
          q.addStringAnnotation("hasSWCache", o ? "true" : "false");
          q.addStringAnnotation("controlledWindows", String(p.length));
          q.addStringAnnotation("navPreloadRegistered", String(l));
          q.addStringAnnotation(
            "navPreloadEnabled",
            String(d("ServiceWorkerPreload").isEnabled())
          );
          q.addStringAnnotation(
            "swFetchRouteHome",
            String(
              d("ServiceWorkerRouteConfigStorage").getRouteConfigState(
                "HomePage"
              )
            )
          );
          o = d("ServiceWorkerRouteConfigStorage").getRouteConfigAge(
            "HomePage"
          );
          o && q.addStringAnnotation("swAgeRouteHome", String(o));
          q.addStringAnnotation(
            "swLoadCountRouteHome",
            String(d("RouteLoadsLogging").getLoadCountForRoute("HomePage"))
          );
          p = d(
            "ServiceWorkerResourceCacheResourceFetchEvent"
          ).getPercentSuccess(e.id);
          if (a && a.fullSWEFLog) {
            l = yield d(
              "ServiceWorkerResourceCacheResourceFetchEvent"
            ).getFullCacheHitData(e.id);
            l && q.addStringAnnotation("fullCacheHitData", l);
          } else d("ServiceWorkerResourceCacheResourceFetchEvent").clearFullCacheHitData(e.id);
          p !== null && q.addStringAnnotation("efRSRCSuccess", String(p));
          o = {
            workerTimings: n(i),
            fetchTimings: h != null ? n(h.getEvents()) : {},
            resourceFetchTimings: j,
            annotations: q.prepareToSend(),
          };
          f("trace", { workerPerf: o });
          g && g.loggingRead();
          k["delete"](e.id);
        });
        return function (b) {
          return a.apply(this, arguments);
        };
      })()
    );
    function o(a, b) {
      return p.apply(this, arguments);
    }
    function p() {
      p = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b) {
        a = yield d("ServiceWorkerClientID").getClientID(a);
        k.set(a, b);
      });
      return p.apply(this, arguments);
    }
    function q(a) {
      a == null && (a = c("performanceAbsoluteNow")());
      return { ts: a, annotations: new (c("TimingAnnotations"))() };
    }
    function r(a, b) {
      i.has(a) && h(0, 471, a);
      b = q(b);
      i.set(a, b);
      return b;
    }
    function a() {
      r(
        d("ServiceWorkerProfilerTypes").WorkerTiming.START,
        c("performanceSWStart")()
      ),
        r(d("ServiceWorkerProfilerTypes").WorkerTiming.PARSED);
    }
    function e() {
      r(d("ServiceWorkerProfilerTypes").WorkerTiming.INITIALIZED);
    }
    function f() {
      r(d("ServiceWorkerProfilerTypes").WorkerTiming.ACTIVATE_START);
    }
    function s() {
      r(d("ServiceWorkerProfilerTypes").WorkerTiming.ACTIVATE_END);
    }
    function t() {
      r(
        d("ServiceWorkerProfilerTypes").WorkerTiming
          .RESOURCE_CACHE_ACTIVATE_START
      );
    }
    function u() {
      r(
        d("ServiceWorkerProfilerTypes").WorkerTiming.RESOURCE_CACHE_ACTIVATE_END
      );
    }
    function v(a) {
      i.has(d("ServiceWorkerProfilerTypes").WorkerTiming.FIRST_EVENT) ||
        r(
          d("ServiceWorkerProfilerTypes").WorkerTiming.FIRST_EVENT,
          null
        ).annotations.addStringAnnotation("event", a);
    }
    function w(a, b) {
      E(a, "resource").inform(b);
    }
    function x(a, b) {
      E(a, "navigate").inform(b);
    }
    function y(a) {
      E(a, "navigate").complete();
    }
    function z(a) {
      return E(a, "navigate").getLoggingReadPromise();
    }
    function A(a) {
      a = E(a, "resource");
      a.inform(d("ServiceWorkerProfilerTypes").FetchTiming.FETCH_END);
      a.complete();
    }
    function B(a) {
      return E(a, "resource").getLoggingReadPromise();
    }
    function C(a, b, c) {
      a = j.get(a);
      a && a.getAnnotations().addStringAnnotation(b, c);
    }
    function D(a, b) {
      if (j.has(a)) return;
      var d = new (c("ServiceWorkerRequestTimings"))();
      j.set(a, d);
      c("promiseDone")(
        d.getLoggingFinishedPromise().then(function () {
          return j["delete"](a);
        })
      );
      b === "navigate"
        ? o(a, d)
        : c("promiseDone")(
            d.getLoggingFinishedPromise().then(function (a) {
              m.length === l && m.shift(), m.push(a);
            }),
            function () {
              d.loggingRead();
            }
          );
    }
    function E(a, b) {
      D(a, b);
      b = j.get(a);
      b != null || h(0, 472);
      return b;
    }
    g._makePoint = q;
    g._informOnlyOnce = r;
    g.informParsed = a;
    g.informInitialized = e;
    g.informActivateStart = f;
    g.informActivateEnd = s;
    g.informResourceCacheActivateStart = t;
    g.informResourceCacheActivateEnd = u;
    g.informEventOccurred = v;
    g.informResourceRequestEvent = w;
    g.informNavigateRequestEvent = x;
    g.informNavigateRequestCompleted = y;
    g.waitForNavigateRequestLogging = z;
    g.informResourceRequestCompleted = A;
    g.waitForResourceRequestLogging = B;
    g.addStringAnnotationToRequest = C;
    g._maybeInitializeRequest = D;
    g.getRequestPerf = E;
  },
  98
);
__d(
  "ServiceWorkerBase",
  [
    "Artillery4SW",
    "Promise",
    "ServiceWorkerAsyncStorage",
    "ServiceWorkerCacheStorage",
    "ServiceWorkerPreload",
    "ServiceWorkerServerData",
    "asyncToGeneratorRuntime",
  ],
  function (a, b, c, d, e, f, g) {
    var h = new Map(),
      i = !1;
    function j() {
      var a = d("ServiceWorkerServerData").getData(
        "SiteData",
        "expire_time",
        null
      );
      if (typeof a !== "number") return !1;
      if (Date.now() > a) {
        self.registration.update();
        return !0;
      }
      return !1;
    }
    function k(a) {
      var b = a.type.toLowerCase();
      d("Artillery4SW").informEventOccurred(b);
      b = h.get(b);
      b && b(a);
    }
    function l() {
      return m.apply(this, arguments);
    }
    function m() {
      m = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        var a =
          self.registration.active ||
          self.registration.waiting ||
          self.registration.installing;
        a && a.scriptURL && (yield fetch(new Request(a.scriptURL)));
      });
      return m.apply(this, arguments);
    }
    function n() {
      return o.apply(this, arguments);
    }
    function o() {
      o = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        p("fetch");
        i = !0;
        if (self.registration.pushManager) {
          var a = yield self.registration.pushManager.getSubscription();
          a && (yield a.unsubscribe());
        }
        yield b("Promise").all([
          d("ServiceWorkerAsyncStorage").purge(),
          d("ServiceWorkerCacheStorage").clearCache(),
          d("ServiceWorkerPreload").disable(),
        ]);
        yield registration.unregister();
      });
      return o.apply(this, arguments);
    }
    function a(a, b) {
      a = a.toLowerCase();
      if (a === "fetch" && (j() || i)) return;
      if (h.has(a)) throw new Error("Listener already set for event " + a);
      h.set(a, b);
      self.addEventListener(a, k);
    }
    function p(a) {
      h.has(a) && (self.removeEventListener(a, k), h["delete"](a));
    }
    function c() {
      return q.apply(this, arguments);
    }
    function q() {
      q = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        yield b("Promise").all([l(), n()]);
      });
      return q.apply(this, arguments);
    }
    function e() {
      return r.apply(this, arguments);
    }
    function r() {
      r = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        yield l();
      });
      return r.apply(this, arguments);
    }
    function f() {
      return i;
    }
    function s() {
      return t.apply(this, arguments);
    }
    function t() {
      t = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        if (!self.registration.update) return !1;
        yield l();
        self.registration.update();
        return !0;
      });
      return t.apply(this, arguments);
    }
    g.setEventListener = a;
    g.unsetEventListener = p;
    g.genUnregisterSelf = c;
    g.clearSWFileCache = e;
    g.isDisabled = f;
    g.attemptSWUpdate = s;
  },
  98
);
__d(
  "ServiceWorkerResourceCacheResourceFetchEvent",
  [
    "Artillery4SW",
    "Promise",
    "Random",
    "ServiceWorkerCacheStorage",
    "ServiceWorkerProfilerTypes",
    "asyncToGeneratorRuntime",
    "promiseDone",
  ],
  function (a, b, c, d, e, f, g) {
    var h = d("Random").uint32(),
      i = {},
      j = {},
      k = {};
    function l(a, b, c, d) {
      return m.apply(this, arguments);
    }
    function m() {
      m = b("asyncToGeneratorRuntime").asyncToGenerator(function* (b, e, f, g) {
        var h;
        try {
          d("Artillery4SW").informResourceRequestEvent(
            g,
            d("ServiceWorkerProfilerTypes").FetchTiming
              .RESOURCE_CACHE_FETCH_START
          ),
            (h = yield d("ServiceWorkerCacheStorage").match(b)),
            d("Artillery4SW").informResourceRequestEvent(
              g,
              d("ServiceWorkerProfilerTypes").FetchTiming
                .RESOURCE_CACHE_FETCH_END
            );
        } catch (a) {}
        f &&
          (j[f] || (j[f] = 0),
          h
            ? (n(f, b instanceof Request ? b.url : b, "loaded_from_cache"),
              j[f]++)
            : n(f, b instanceof Request ? b.url : b, "not_loaded_from_cache"));
        h ||
          (d("Artillery4SW").informResourceRequestEvent(
            g,
            d("ServiceWorkerProfilerTypes").FetchTiming.NETWORK_REQUEST_START
          ),
          (h = a.fetch(e)),
          c("promiseDone")(
            h.then(function () {
              return d("Artillery4SW").informResourceRequestEvent(
                g,
                d("ServiceWorkerProfilerTypes").FetchTiming.NETWORK_REQUEST_END
              );
            })
          ));
        return h;
      });
      return m.apply(this, arguments);
    }
    function n(a, b, c) {
      k[a] || (k[a] = {}), (k[a][b.toString()] = c);
    }
    function o(a, b, c, e) {
      b && n(b, a, "opening_from_cache");
      return {
        response: l(a.toString(), c, b, e),
        waitUntil: d("Artillery4SW").waitForResourceRequestLogging(e),
      };
    }
    function e(a) {
      var e = "r" + h++;
      d("Artillery4SW").informResourceRequestEvent(
        e,
        d("ServiceWorkerProfilerTypes").FetchTiming.FETCH_START
      );
      d("Artillery4SW").addStringAnnotationToRequest(
        e,
        "resource_uri",
        a.request.url
      );
      var f = new URL(a.request.url);
      d("Artillery4SW").addStringAnnotationToRequest(
        e,
        "resource_name",
        f.pathname.substr(f.pathname.lastIndexOf("/"))
      );
      if (f.hash !== "#sw-c") return null;
      i[a.clientId] || (i[a.clientId] = 0);
      i[a.clientId]++;
      f.hash = "";
      if (d("ServiceWorkerCacheStorage").isCacheClearing()) {
        n(a.clientId, f, "cache_clearing");
        d("Artillery4SW").informResourceRequestCompleted(e);
        return null;
      }
      f = o(f, a.clientId, a.request, e);
      if (f) {
        a = b("Promise").resolve();
        f.response instanceof b("Promise") && (a = f.response);
        c("promiseDone")(
          a.then(function () {
            return d("Artillery4SW").informResourceRequestCompleted(e);
          })
        );
      }
      return f;
    }
    function f(a) {
      if (!i[a]) return null;
      var b = j[a] || 0;
      delete j[a];
      var c = i[a];
      delete i[a];
      return b / c;
    }
    function p(a) {
      return q.apply(this, arguments);
    }
    function q() {
      q = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        var b = yield d("ServiceWorkerCacheStorage").getKeysForLoggingOnly();
        for (b of b.keys())
          k[a] || (k[a] = {}), k[a][b] || (k[a][b] = "in_cache_but_not_used");
        if (!k[a]) return "";
        b = JSON.stringify(k[a]);
        delete k[a];
        return b;
      });
      return q.apply(this, arguments);
    }
    function r(a) {
      delete k[a];
    }
    g.fetch = e;
    g.getPercentSuccess = f;
    g.getFullCacheHitData = p;
    g.clearFullCacheHitData = r;
  },
  98
);
__d(
  "ServiceWorkerRouteConfigStorage",
  [
    "Promise",
    "ServiceWorkerAsyncStorage",
    "ServiceWorkerBase",
    "ServiceWorkerPreload",
    "ServiceWorkerServerData",
    "ServiceWorkerVersion",
    "asyncToGeneratorRuntime",
  ],
  function (a, b, c, d, e, f, g) {
    var h = "route_configs",
      i = "routes_to_save",
      j = new Map(),
      k = new Map(),
      l = [];
    function m(a, b) {
      a = h + ":" + a;
      b && (a += ":installing:" + d("ServiceWorkerVersion").getInstanceKey());
      return a;
    }
    function n() {
      return o.apply(this, arguments);
    }
    function o() {
      o = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        yield d("ServiceWorkerAsyncStorage").setItem(
          "" + i + d("ServiceWorkerVersion").getInstanceKey(),
          l
        );
      });
      return o.apply(this, arguments);
    }
    function p(a, b) {
      return q.apply(this, arguments);
    }
    function q() {
      q = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b) {
        var c = null;
        try {
          c = yield d("ServiceWorkerAsyncStorage").getItem(m(a, b));
        } catch (a) {}
        return c;
      });
      return q.apply(this, arguments);
    }
    function r(a, b, c) {
      return s.apply(this, arguments);
    }
    function s() {
      s = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b, c) {
        yield d("ServiceWorkerAsyncStorage").setItem(m(a, c), b);
      });
      return s.apply(this, arguments);
    }
    function t(a, b) {
      return u.apply(this, arguments);
    }
    function u() {
      u = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b) {
        yield d("ServiceWorkerAsyncStorage").removeItem(m(a, b));
      });
      return u.apply(this, arguments);
    }
    function v(a) {
      return w.apply(this, arguments);
    }
    function w() {
      w = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        var c = yield p(a, !0);
        if (!c) return;
        yield b("Promise").all([t(a, !0), r(a, c, !1)]);
      });
      return w.apply(this, arguments);
    }
    function a(a) {
      return x.apply(this, arguments);
    }
    function x() {
      x = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        yield b("Promise").all(
          a.map(function (a) {
            return E(a);
          })
        );
      });
      return x.apply(this, arguments);
    }
    function c(a, b) {
      return y.apply(this, arguments);
    }
    function y() {
      y = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, c) {
        j.set(a, c);
        l.push(a);
        a = [r(a, c, !0), n()];
        d("ServiceWorkerPreload").isEnabled() &&
          a.push(
            d("ServiceWorkerPreload").queueToHeaderToStorageForActivate(
              c.fetchHeader
            )
          );
        yield b("Promise").all(a);
      });
      return y.apply(this, arguments);
    }
    function e() {
      return z.apply(this, arguments);
    }
    function z() {
      z = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        var a = [],
          c = d("ServiceWorkerVersion").getInstanceKey();
        c = yield d("ServiceWorkerAsyncStorage").getItem("" + i + c);
        if (!Array.isArray(c))
          throw new Error(
            "Invalid routes storage format. Expected an Array got " + typeof c
          );
        for (c of c) typeof c === "string" && a.push(v(c));
        yield b("Promise").all(a);
        var e = new RegExp("^" + i + "(.*)$"),
          f = new RegExp("^" + h + ":[a-zA-Z0-9]*:installing:(.*)");
        yield d("ServiceWorkerAsyncStorage").removeAllItemWithPredicate(
          function (a) {
            var b = e.exec(a);
            if (b && b[1])
              return d("ServiceWorkerVersion").isInstanceKeyFromEarlier(b[1], {
                includeCurrent: !0,
              });
            b = f.exec(a);
            return b && b[1]
              ? d("ServiceWorkerVersion").isInstanceKeyFromEarlier(b[1], {
                  includeCurrent: !0,
                })
              : !1;
          }
        );
      });
      return z.apply(this, arguments);
    }
    function f(a) {
      return A.apply(this, arguments);
    }
    function A() {
      A = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        d("ServiceWorkerPreload").isEnabled() &&
          d("ServiceWorkerPreload").clearFetchRouteHeader(),
          d("ServiceWorkerBase").attemptSWUpdate(),
          j["delete"](a),
          yield t(a, !1);
      });
      return A.apply(this, arguments);
    }
    function B(a) {
      return j.has(a) ? j.get(a) : void 0;
    }
    function C(a) {
      if (k.has(a)) return "FETCHING";
      return j.has(a) ? "ACTIVE" : "DEACTIVATED";
    }
    function D(a) {
      a = j.get(a);
      if (!a) return null;
      var b = d("ServiceWorkerServerData").getData(
        "SRPinningData",
        "pinning_ttl",
        0
      );
      return !b || !a.expireAfter
        ? null
        : Date.now() - (Number(a.expireAfter) - Number(b) * 1e3);
    }
    function E(a) {
      return F.apply(this, arguments);
    }
    function F() {
      F = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        if (k.has(a)) {
          yield k.get(a);
          return B(a);
        }
        var b = p(a, !1);
        k.set(a, b);
        b = yield b;
        b && j.set(a, b);
        k["delete"](a);
        return b;
      });
      return F.apply(this, arguments);
    }
    g.initRoutes = a;
    g.installConfigForRoute = c;
    g.activateRoutes = e;
    g.clearConfigForRoute = f;
    g.getConfigForRoute = B;
    g.getRouteConfigState = C;
    g.getRouteConfigAge = D;
    g.genConfigForRoute = E;
  },
  98
);
__d(
  "BrowserPushCommands",
  [],
  function (a, b, c, d, e, f) {
    a = "browser_push_ack";
    b = "browser_push_redirect";
    c = "browser_push_window_visible";
    d = "should_reuse_m_dot_com_tab";
    e = "should_reuse_m_dot_com_tab_response";
    a = {
      ACK: a,
      REDIRECT: b,
      WINDOW_VISIBLE: c,
      SHOULD_REUSE_M_DOT_COM_TAB: d,
      SHOULD_REUSE_M_DOT_COM_TAB_RESPONSE: e,
    };
    f["default"] = a;
  },
  66
);
__d(
  "err",
  ["fb-error"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("fb-error").err;
  },
  98
);
__d(
  "MessengerNotificationReader",
  ["FBLogger", "Promise", "ServiceWorkerServerData", "err"],
  function (a, b, c, d, e, f, g) {
    var h = null,
      i = !1,
      j = "mw_notifications_db",
      k = "users_mute";
    function a(a) {
      if (a == null || typeof a !== "number") return;
      try {
        var b = a.toString(),
          d = self.indexedDB.open(j);
        d.onupgradeneeded = function () {
          var a = d.result,
            c = a.createObjectStore(k, { keyPath: "userId" });
          c.transaction.oncomplete = function (c) {
            c = a.transaction(k, "readwrite").objectStore(k);
            c = c.add({ userId: b, isMuted: 0 });
            c.onsuccess = function () {};
          };
        };
        d.onsuccess = function () {
          h = d.result;
        };
        d.onerror = function (a) {
          c("FBLogger")("service_worker")
            .catching(a)
            .mustfix("Failed to create db");
        };
      } catch (a) {
        c("FBLogger")("service_worker")
          .catching(a)
          .mustfix("Failed to create DB");
      }
    }
    function e() {
      var a = d("ServiceWorkerServerData").getData(
        "SiteData",
        "current_user",
        0
      );
      if (a == null || typeof a !== "number")
        return b("Promise").reject(c("err")("Cannot get logged in user."));
      var e = a.toString();
      return new (b("Promise"))(function (a, b) {
        if (h !== null) {
          var d = h.transaction([k]);
          d = d.objectStore(k);
          var f = d.get(e);
          f.onerror = function (a) {
            b(c("err"));
          };
          f.onsuccess = function (b) {
            b = Date.now();
            f.result != null ? a(f.result.isMuted > b) : a(i);
          };
        } else a(i);
      });
    }
    g.checkIsMuted = e;
    g.openDB = a;
  },
  98
);
__d(
  "ErrorPubSub",
  ["fb-error"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("fb-error").ErrorPubSub;
  },
  98
);
__d(
  "ServiceWorkerCacheResponse",
  ["ServiceWorkerServerData"],
  function (a, b, c, d, e, f, g) {
    function a() {
      return d("ServiceWorkerServerData").getData(
        "CacheResponseTypes",
        "response_types",
        {}
      );
    }
    function b() {
      return d("ServiceWorkerServerData").getString(
        "CacheResponseTypes",
        "response_header"
      );
    }
    g.getResponseTypes = a;
    g.getResponseHeaderName = b;
  },
  98
);
__d(
  "ServiceWorkerClientChromeConfig",
  ["ServiceWorkerBase", "ServiceWorkerServerData"],
  function (a, b, c, d, e, f, g) {
    function h() {
      var a = d("ServiceWorkerServerData").getData(
        "QuickExperimentData",
        "type",
        "off"
      );
      return a === "client_chrome" && !d("ServiceWorkerBase").isDisabled();
    }
    function a(a) {
      return h() && typeof a.cachedClientChromeData !== "string";
    }
    g.isEnabled = h;
    g.hasInvalidCache = a;
  },
  98
);
__d(
  "MaybeSymbol",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    b = a.Symbol ? a.Symbol : null;
    c = b;
    f["default"] = c;
  },
  66
);
__d(
  "URLSearchParams",
  ["MaybeSymbol"],
  function (a, b, c, d, e, f, g) {
    var h = /\+/g,
      i = /[!\'()*]/g,
      j = /%20/g,
      k = c("MaybeSymbol") ? c("MaybeSymbol").iterator : null;
    function l(a) {
      return encodeURIComponent(a)
        .replace(j, "+")
        .replace(i, function (a) {
          return "%" + a.charCodeAt(0).toString(16);
        });
    }
    function m(a) {
      return decodeURIComponent((a = a) != null ? a : "").replace(h, " ");
    }
    function n(a) {
      var b = a.slice(0),
        c = {
          next: function () {
            var a = b.length,
              c = b.shift();
            return { done: c === void 0 && a <= 0, value: c };
          },
        };
      k &&
        (c[k] = function () {
          return c;
        });
      return c;
    }
    a = (function () {
      function a(a) {
        a === void 0 && (a = "");
        a = a;
        a[0] === "?" && (a = a.substr(1));
        this.$1 = a.length
          ? a.split("&").map(function (a) {
              a = a.split("=");
              var b = a[0];
              a = a[1];
              return [m(b), m(a)];
            })
          : [];
      }
      var b = a.prototype;
      b.append = function (a, b) {
        this.$1.push([a, String(b)]);
      };
      b["delete"] = function (a) {
        for (var b = 0; b < this.$1.length; b++)
          this.$1[b][0] === a && (this.$1.splice(b, 1), b--);
      };
      b.entries = function () {
        if (k) return this.$1[k]();
        var a = this.$1.slice(0);
        return n(a);
      };
      b.get = function (a) {
        for (var b = 0, c = this.$1.length; b < c; b++)
          if (this.$1[b][0] === a) return this.$1[b][1];
        return null;
      };
      b.getAll = function (a) {
        var b = [];
        for (var c = 0, d = this.$1.length; c < d; c++)
          this.$1[c][0] === a && b.push(this.$1[c][1]);
        return b;
      };
      b.has = function (a) {
        for (var b = 0, c = this.$1.length; b < c; b++)
          if (this.$1[b][0] === a) return !0;
        return !1;
      };
      b.keys = function () {
        var a = this.$1.map(function (a) {
          var b = a[0];
          a[1];
          return b;
        });
        return k ? a[k]() : n(a);
      };
      b.set = function (a, b) {
        var c = !1;
        for (var d = 0; d < this.$1.length; d++)
          this.$1[d][0] === a &&
            (c
              ? (this.$1.splice(d, 1), d--)
              : ((this.$1[d][1] = String(b)), (c = !0)));
        c || this.$1.push([a, String(b)]);
      };
      b.toString = function () {
        return this.$1
          .map(function (a) {
            var b = a[0];
            a = a[1];
            return l(b) + "=" + l(a);
          })
          .join("&");
      };
      b.values = function () {
        var a = this.$1.map(function (a) {
          a[0];
          a = a[1];
          return a;
        });
        return k ? a[k]() : n(a);
      };
      b[k] = function () {
        return this.entries();
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "URL",
  ["URLSearchParams"],
  function (a, b, c, d, e, f) {
    a = URL.prototype;
    c = Object.getOwnPropertyDescriptor(a, "searchParams");
    var g = Object.getOwnPropertyDescriptor(a, "search"),
      h = Object.getOwnPropertyDescriptor(a, "href");
    function i(a, c) {
      var d = function (d, e) {
          b("URLSearchParams").prototype.append.call(c, d, e);
          d = c.toString();
          a.search = d.length ? "?" + d : "";
        },
        e = function (d) {
          b("URLSearchParams").prototype["delete"].call(c, d);
          d = c.toString();
          a.search = d.length ? "?" + d : "";
        },
        f = function (d, e) {
          b("URLSearchParams").prototype.set.call(c, d, e);
          d = c.toString();
          a.search = d.length ? "?" + d : "";
        };
      c.append = d;
      c["delete"] = e;
      c.set = f;
      Object.defineProperty(a, "_usp", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: c,
      });
    }
    c ||
      Object.defineProperties(a, {
        searchParams: {
          get: function () {
            this._usp ||
              i(this, new (b("URLSearchParams"))(this.search.substr(1)));
            return this._usp;
          },
          set: function (a) {
            i(this, a);
          },
        },
        href: {
          get: function () {
            return h.get.call(this);
          },
          set: function (a) {
            h.set.call(this, a),
              this._usp && b("URLSearchParams").call(this._usp, this.search);
          },
        },
        search: {
          get: function () {
            return g.get.call(this);
          },
          set: function (a) {
            g.set.call(this, a),
              this._usp && b("URLSearchParams").call(this._usp, this.search);
          },
        },
      });
    e.exports = URL;
  },
  null
);
__d(
  "ServiceWorkerRoutes",
  ["ServiceWorkerServerData", "URL"],
  function (a, b, c, d, e, f, g) {
    function a(a) {
      var b = d("ServiceWorkerServerData").getData("SWRoutes", "routes", {}),
        e = d("ServiceWorkerServerData").getData("SWRoutes", "globalLists", {
          whitelist: [],
          blacklist: [],
        });
      if (!e || typeof e !== "object" || !e.blacklist || !e.whitelist)
        return null;
      var f = e.blacklist;
      e = e.whitelist;
      if (!Array.isArray(e) || !Array.isArray(f)) return null;
      a = new (c("URL"))(a.url);
      for (
        var f = f.entries(),
          g = Array.isArray(f),
          h = 0,
          f = g
            ? f
            : f[
                typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
              ]();
        ;

      ) {
        var i;
        if (g) {
          if (h >= f.length) break;
          i = f[h++];
        } else {
          h = f.next();
          if (h.done) break;
          i = h.value;
        }
        i = i;
        i[0];
        i = i[1];
        if (a.searchParams.has(i)) return null;
      }
      i = Object.entries(b);
      for (h = 0; h < i.length; h++) {
        g = i[h];
        f = g[0];
        b = g[1];
        if (
          b &&
          b.regex &&
          typeof b.regex === "string" &&
          new RegExp(b.regex).test(a.pathname)
        ) {
          g = [];
          b.whitelisted_params &&
            Array.isArray(b.whitelisted_params) &&
            (g = b.whitelisted_params);
          for (
            var b = a.searchParams.keys(),
              j = Array.isArray(b),
              k = 0,
              b = j
                ? b
                : b[
                    typeof Symbol === "function"
                      ? Symbol.iterator
                      : "@@iterator"
                  ]();
            ;

          ) {
            var l;
            if (j) {
              if (k >= b.length) break;
              l = b[k++];
            } else {
              k = b.next();
              if (k.done) break;
              l = k.value;
            }
            l = l;
            if (!e.includes(l) && !g.includes(l)) return null;
          }
          return f;
        }
      }
      return null;
    }
    function b(a) {
      var b = d("ServiceWorkerServerData").getData("SWRoutes", "routes", {});
      return b &&
        typeof b === "object" &&
        b[a] &&
        b[a].cache_path &&
        typeof b[a].cache_path === "string"
        ? b[a].cache_path
        : null;
    }
    function e() {
      return d("ServiceWorkerServerData").getString(
        "SWRoutes",
        "routeVersions"
      );
    }
    function f(a) {
      a = new (c("URL"))(a.url);
      var b = d("ServiceWorkerServerData").getData(
        "SWRoutes",
        "bypassParams",
        null
      );
      if (!b || !Array.isArray(b)) return !1;
      for (
        var a = a.searchParams.keys(),
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
        if (b.includes(g)) return !0;
      }
      return !1;
    }
    function h(a) {
      var b = d("ServiceWorkerServerData").getData(
          "EarlyResponseData",
          "headersToKeepFromResponse",
          []
        ),
        c = {};
      Array.isArray(b) &&
        b.length !== 0 &&
        b.forEach(function (b) {
          if (typeof b === "string") {
            var d = a.get(b) || a.get(b.toLowerCase());
            c[b] = d;
          }
        });
      return c;
    }
    g.getNameForRequest = a;
    g.getInstallPathForName = b;
    g.getRoutesKey = e;
    g.shouldBypassFetch = f;
    g.getHeadersToKeepFromResponse = h;
  },
  98
);
__d(
  "ServiceWorkerRouter",
  [
    "ServiceWorkerCacheResponse",
    "ServiceWorkerClientChromeConfig",
    "ServiceWorkerClientID",
    "ServiceWorkerConslidatedHeader",
    "ServiceWorkerRouteConfigStorage",
    "ServiceWorkerRoutes",
    "ServiceWorkerServerData",
    "ServiceWorkerVersion",
    "asyncToGeneratorRuntime",
  ],
  function (a, b, c, d, e, f, g) {
    function h(a) {
      return i.apply(this, arguments);
    }
    function i() {
      i = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        var b = yield d("ServiceWorkerRouteConfigStorage").genConfigForRoute(
          a.name
        );
        b && (a = babelHelpers["extends"]({}, a, b));
        return a;
      });
      return i.apply(this, arguments);
    }
    function j(a, b) {
      var c = d("ServiceWorkerRoutes").getNameForRequest(a);
      if (!c) return null;
      var e = d("ServiceWorkerRouteConfigStorage").getRouteConfigState(c);
      if (e === "DEACTIVATED") return null;
      e = {
        id: d("ServiceWorkerClientID").generateRequestID(c),
        name: c,
        request: a,
        expireAfter: null,
        versionKey: null,
        cachedEFPageContent: null,
        cachedClientChromeData: null,
      };
      b && (e.preloadResponse = b);
      a = d("ServiceWorkerRouteConfigStorage").getConfigForRoute(c);
      if (a === void 0) {
        b = d("ServiceWorkerServerData").getData(
          "QuickExperimentData",
          "type",
          "off"
        );
        if (
          b === "simple_ef_only_await_cache" ||
          b === "client_chrome" ||
          b === "mtouch_splash_screen_with_resources"
        ) {
          e.fullRouteConfigPromise = h(e);
          return e;
        }
      }
      return a ? babelHelpers["extends"]({}, e, a) : e;
    }
    function a(a) {
      return k.apply(this, arguments);
    }
    function k() {
      k = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        a === void 0 && (a = !0);
        if (
          a &&
          self.serviceWorker &&
          self.serviceWorker.state &&
          self.serviceWorker.state === "activating"
        )
          return;
        a = d("ServiceWorkerServerData").getData("SWRoutes", "routes");
        var b = [];
        a !== null &&
          typeof a == "object" &&
          Object.keys(a).forEach(function (a) {
            typeof a === "string" && b.push(a);
          });
        yield d("ServiceWorkerRouteConfigStorage").initRoutes(b);
      });
      return k.apply(this, arguments);
    }
    function l(a) {
      var b = d("ServiceWorkerRoutes").getInstallPathForName(a);
      if (!b) return null;
      b = new Request(self.registration.scope + b);
      return {
        id: d("ServiceWorkerClientID").generateRequestID(a),
        name: a,
        request: b,
        expireAfter: null,
        versionKey: null,
        cachedEFPageContent: null,
        cachedClientChromeData: null,
      };
    }
    function c(a) {
      return j(a.request, a.preloadResponse);
    }
    function e(a) {
      var b = a.versionKey;
      b && d("ServiceWorkerRouteConfigStorage").clearConfigForRoute(a.name);
    }
    function f(a, b, c) {
      return m.apply(this, arguments);
    }
    function m() {
      m = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b, c) {
        var e = {},
          f = d("ServiceWorkerServerData").getData(
            "SRPinningData",
            "enabled",
            !1
          ),
          g = d("ServiceWorkerServerData").getString("SiteData", "fbRevHeader"),
          h = d("ServiceWorkerServerData").getString(
            "SiteData",
            "fbDynSpinExpHeader"
          ),
          i = d("ServiceWorkerServerData").getString("SiteData", "nonceHeader"),
          j = d("ServiceWorkerServerData").getString(
            "SiteData",
            "liteVersionHeader"
          );
        g = b.get(g);
        h = b.get(h);
        i = b.get(i);
        j = b.get(j);
        var k = null;
        if (f) {
          f = d("ServiceWorkerServerData").getData(
            "SRPinningData",
            "pinning_ttl",
            0
          );
          g &&
            (e[d("ServiceWorkerConslidatedHeader").getKey("SW_SR_PINNING")] =
              g);
          h &&
            ((e[
              d("ServiceWorkerConslidatedHeader").getKey(
                "SW_SR_PINNING_DYN_REQ"
              )
            ] = h),
            (e[
              d("ServiceWorkerConslidatedHeader").getKey(
                "SW_SR_PINNING_EXPECTED_TTL"
              )
            ] = f));
          i && (e[d("ServiceWorkerConslidatedHeader").getKey("SW_NONCE")] = i);
          j &&
            (e[
              d("ServiceWorkerConslidatedHeader").getKey("SW_BUNDLE_VERSION")
            ] = j);
          k = Date.now() + Number(f) * 1e3;
        }
        h = d("ServiceWorkerCacheResponse").getResponseTypes();
        i = h.EF_ONLY;
        c.clientChromeData &&
          d("ServiceWorkerClientChromeConfig").isEnabled() &&
          ((i = h.DYNAMIC),
          (e[
            d("ServiceWorkerConslidatedHeader").getKey(
              "CLIENT_CHROME_DYNAMIC_METADATA"
            )
          ] = c.clientChromeData));
        e[d("ServiceWorkerConslidatedHeader").getKey("SW_PARTIAL_CACHE")] = i;
        e[d("ServiceWorkerConslidatedHeader").getKey("SW_SVN")] = d(
          "ServiceWorkerVersion"
        ).getCurrentRev();
        e[d("ServiceWorkerConslidatedHeader").getKey("SW_ROUTES")] = d(
          "ServiceWorkerRoutes"
        ).getRoutesKey();
        j = d("ServiceWorkerRoutes").getHeadersToKeepFromResponse(b);
        f = d("ServiceWorkerServerData").getString(
          "SiteData",
          "siteTypeHeader"
        );
        h = b.get(f);
        d("ServiceWorkerRouteConfigStorage").installConfigForRoute(a, {
          expireAfter: k,
          versionKey: g,
          cachedEFPageContent: c.content,
          cachedClientChromeData: c.clientChromeData || null,
          fetchHeader: e,
          responseHeaders: j,
          siteType: h,
        });
      });
      return m.apply(this, arguments);
    }
    function n() {
      return o.apply(this, arguments);
    }
    function o() {
      o = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        yield d("ServiceWorkerRouteConfigStorage").activateRoutes();
      });
      return o.apply(this, arguments);
    }
    function p() {
      var a = d("ServiceWorkerServerData").getData("SWRoutes", "routes", {}),
        b = {},
        c = [];
      if (a !== null && typeof a === "object") {
        var e = Object.keys(a);
        for (var f = 0; f < e.length; f++) {
          var g = e[f],
            h = a[g],
            i = l(g);
          if (!i) continue;
          h !== null &&
          typeof h === "object" &&
          typeof h.base_route === "string"
            ? c.push({ baseRoute: h.base_route, routeConfig: i })
            : (b[g] = i);
        }
        c.forEach(function (a) {
          var c = a.baseRoute;
          a = a.routeConfig;
          c = b[c];
          c &&
            (c.similarRouteConfigs = [a].concat(c.similarRouteConfigs || []));
        });
      }
      return b;
    }
    g.init = a;
    g.initConfigForInstall = l;
    g.initConfigForFetchEvent = c;
    g.markRouteConfigCacheAsInvalid = e;
    g.installRouteConfigCache = f;
    g.activateRoutes = n;
    g.getRouteConfigsForInstall = p;
  },
  98
);
__d(
  "ServiceWorkerActivateEvent",
  [
    "Artillery4SW",
    "ErrorPubSub",
    "Promise",
    "ServiceWorkerAsyncStorage",
    "ServiceWorkerBase",
    "ServiceWorkerPreload",
    "ServiceWorkerRouter",
    "ServiceWorkerServerData",
    "asyncToGeneratorRuntime",
  ],
  function (a, b, c, d, e, f, g) {
    var h = "current_user_id",
      i = [];
    function j() {
      return k.apply(this, arguments);
    }
    function k() {
      k = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        if (!self.clients.matchAll) return !1;
        var a = yield self.clients.matchAll({ type: "window" });
        return a.some(function (a) {
          return a.url.includes("ref=homescreenpwa");
        });
      });
      return k.apply(this, arguments);
    }
    function l(a) {
      return m.apply(this, arguments);
    }
    function m() {
      m = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        a = yield d("ServiceWorkerAsyncStorage").getItem(h);
        var c = d("ServiceWorkerServerData").getData(
            "SiteData",
            "current_user",
            0
          ),
          e = d("ServiceWorkerServerData").getData(
            "MLoggedOutPush",
            "enabled",
            0
          );
        if (!e && a != null && a !== c) {
          if (
            a === 0 &&
            (yield j()) &&
            d("ServiceWorkerBase").attemptSWUpdate()
          )
            return;
          d("ServiceWorkerBase").genUnregisterSelf();
          return;
        }
        e = [
          d("ServiceWorkerAsyncStorage").setItem(h, c),
          d("ServiceWorkerPreload").activate(),
        ];
        yield b("Promise").all(e);
        yield b("Promise").all(
          i.map(function (a) {
            return a();
          })
        );
        yield self.clients.claim();
      });
      return m.apply(this, arguments);
    }
    function a(a) {
      return n.apply(this, arguments);
    }
    function n() {
      n = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        try {
          d("Artillery4SW").informActivateStart(),
            yield l(a),
            yield d("ServiceWorkerRouter").init(!1);
        } catch (a) {
          d("ServiceWorkerBase").genUnregisterSelf(),
            c("ErrorPubSub").reportError(a);
        }
        d("Artillery4SW").informActivateEnd();
      });
      return n.apply(this, arguments);
    }
    function e(a) {
      i.push(a);
    }
    g.handleEvent = a;
    g.addUpgradeFunction = e;
  },
  98
);
__d(
  "DTSG",
  ["ServiceWorkerRequest", "asyncToGeneratorRuntime"],
  function (a, b, c, d, e, f, g) {
    var h = "/ajax/dtsg/?__a=true",
      i;
    function j() {
      i = null;
    }
    function c() {
      return k.apply(this, arguments);
    }
    function k() {
      k = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        if (i) return i;
        var b = new Request(h, { credentials: "include", method: "GET" });
        b = yield d("ServiceWorkerRequest").genJsonFromUri(b);
        b &&
          (a.setTimeout(j, (b.payload.valid_for - 60) * 1e3),
          (i = b.payload.token));
        return i || "";
      });
      return k.apply(this, arguments);
    }
    function e(a) {
      i = a;
    }
    g.genGetToken = c;
    g.setToken = e;
  },
  98
);
__d(
  "CollectionUtils",
  [],
  function (a, b, c, d, e, f) {
    function g(a) {
      var b = {};
      for (
        var a = a.entries(),
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
        var f = e[0];
        e = e[1];
        if (typeof f !== "string" && typeof f !== "number")
          throw new Error("Cannot convert map to object. Bad key given.");
        e instanceof Map
          ? (b[f] = g(e))
          : e instanceof Set
          ? (b[f] = h(e))
          : (b[f] = e);
      }
      return b;
    }
    function h(a) {
      var b = [];
      for (
        var a = a.values(),
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
        e instanceof Map
          ? b.push(g(e))
          : e instanceof Set
          ? b.push(h(e))
          : b.push(e);
      }
      return b;
    }
    f.mapToObject = g;
    f.setToArray = h;
  },
  66
);
__d(
  "ServiceWorkerRequest",
  ["CollectionUtils", "DTSG", "asyncToGeneratorRuntime"],
  function (a, b, c, d, e, f, g) {
    function h(a, b) {
      return i.apply(this, arguments);
    }
    function i() {
      i = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b) {
        a = new Request(a, { credentials: "include", method: "POST", body: b });
        return yield o(a);
      });
      return i.apply(this, arguments);
    }
    function j(a, b) {
      return k.apply(this, arguments);
    }
    function k() {
      k = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b) {
        var c = new FormData();
        for (b of b.entries()) {
          var e = b[0],
            f = b[1];
          if (typeof f === "string") {
            c.append(e, f);
            continue;
          } else
            f instanceof Map
              ? (f = d("CollectionUtils").mapToObject(f))
              : f instanceof Set && (f = d("CollectionUtils").setToArray(f));
          c.append(e, JSON.stringify(f));
        }
        return h(a, c);
      });
      return k.apply(this, arguments);
    }
    function l(a) {
      var b = [];
      a = m(a);
      for (var c in a)
        if (Object.prototype.hasOwnProperty.call(a, c)) {
          var d = n(c);
          a[c] === void 0 ? b.push(d) : b.push(d + "=" + n(a[c]));
        }
      return b.join("&");
    }
    function m(a, b, c) {
      c === void 0 && (c = {});
      b = b || "";
      if (a == null) c[b] = void 0;
      else if (a instanceof Map)
        for (var d of a.entries()) {
          var e = d[0],
            f = d[1];
          f !== void 0 && m(f, b ? b + "[" + e + "]" : e, c);
        }
      else c[b] = a;
      return c;
    }
    function n(a) {
      return encodeURIComponent(a).replace(/%5D/g, "]").replace(/%5B/g, "[");
    }
    function o(a) {
      return p.apply(this, arguments);
    }
    function p() {
      p = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        a = yield r(a);
        a = yield a.text();
        a = a.substring(9);
        return JSON.parse(a);
      });
      return p.apply(this, arguments);
    }
    function c(a, b) {
      return q.apply(this, arguments);
    }
    function q() {
      q = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b) {
        b = l(b);
        return yield o(a + "?" + b);
      });
      return q.apply(this, arguments);
    }
    function r(a) {
      return s.apply(this, arguments);
    }
    function s() {
      s = b("asyncToGeneratorRuntime").asyncToGenerator(function* (b) {
        b =
          b instanceof Request ? b : new Request(b, { credentials: "include" });
        var c = yield a.fetch(b);
        if (c.status !== 200)
          throw new Error(b.url + " failed with response code: " + c.status);
        return c;
      });
      return s.apply(this, arguments);
    }
    function e(a) {
      return t.apply(this, arguments);
    }
    function t() {
      t = b("asyncToGeneratorRuntime").asyncToGenerator(function* (b) {
        return a.fetch(b, { credentials: "include", keepalive: !0 });
      });
      return t.apply(this, arguments);
    }
    function f(a, b) {
      return u.apply(this, arguments);
    }
    function u() {
      u = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b) {
        var c = yield d("DTSG").genGetToken();
        b.set("fb_dtsg", c);
        return yield j(a, b);
      });
      return u.apply(this, arguments);
    }
    function v(a, b) {
      return w.apply(this, arguments);
    }
    function w() {
      w = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b) {
        var c = yield d("DTSG").genGetToken();
        b.append("fb_dtsg", c);
        return yield h(a, b);
      });
      return w.apply(this, arguments);
    }
    g.genJsonFromUri = o;
    g.genSendDataToUri = c;
    g.genFetchUri = r;
    g.genFetchUriBeacon = e;
    g.fetchCSRFTokenAndPostData = f;
    g.fetchCSRFTokenAndPostFormData = v;
  },
  98
);
__d(
  "ServiceWorkerBackgroundRequests",
  [
    "ServiceWorkerAsyncStorage",
    "ServiceWorkerRequest",
    "ServiceWorkerSyncEvent",
    "asyncToGeneratorRuntime",
  ],
  function (a, b, c, d, e, f, g) {
    var h = "failed_requests",
      i = 10,
      j = null,
      k = [],
      l = !1;
    function m() {
      return n.apply(this, arguments);
    }
    function n() {
      n = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        if (!j) {
          var a = yield d("ServiceWorkerAsyncStorage").getItem(h);
          j || (j = a && typeof a === "object" ? a : new Map());
        }
        return p(j);
      });
      return n.apply(this, arguments);
    }
    function o(a) {
      if (!j) return;
      j["delete"](a.requestId);
      j.set(a.requestId, a);
      if (j.size > i) {
        a = j.keys().next().value;
        a && j["delete"](a);
      }
    }
    function p(a) {
      var b = Date.now() / 1e3;
      for (var c of a.entries()) {
        var d = c[0],
          e = c[1];
        e.timestamp + e.ttl < b && a["delete"](d);
      }
      return a;
    }
    function q(a) {
      return r.apply(this, arguments);
    }
    function r() {
      r = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        if ((l && !a) || !j) return;
        for (var b of k)
          b.type === "ADD" && b.request
            ? o(b.request)
            : b.type === "REMOVE"
            ? j["delete"](b.requestId)
            : b.type === "DECREMENT" && s(b.requestId);
        k = [];
        p(j);
        a && (l = !1);
        j.size > 0 && d("ServiceWorkerSyncEvent").registerBackgroundRequests();
        yield d("ServiceWorkerAsyncStorage").setItem(h, j);
      });
      return r.apply(this, arguments);
    }
    function s(a) {
      return t.apply(this, arguments);
    }
    function t() {
      t = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        if (!j) return;
        var b = j.get(a);
        b && b.maxRetry && ((b.maxRetry -= 1), j.set(a, b));
      });
      return t.apply(this, arguments);
    }
    function u(a) {
      return v.apply(this, arguments);
    }
    function v() {
      v = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        a.request.credentials = "same-origin";
        var b = a.uri;
        a.addMetadataParams && (b = w(b));
        b = new Request(b, a.request);
        yield d("ServiceWorkerRequest").genFetchUri(b);
      });
      return v.apply(this, arguments);
    }
    function w(a) {
      var b = [];
      x(b, "current_client_time", Date.now());
      var c = navigator.connection;
      c &&
        (x(b, "current_network_type", c.type),
        x(b, "current_effective_network_type", c.effectiveType),
        x(b, "current_rtt", c.rtt),
        c.downlink && x(b, "current_downlink", Math.round(c.downlink * 1e3)));
      return a + b.join("");
    }
    function x(a, b, c) {
      c && a.push("&" + b + "=" + c);
    }
    function a(a) {
      return y.apply(this, arguments);
    }
    function y() {
      y = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        j = yield m();
        a = a.data;
        a &&
          a.requestId &&
          a.timestamp &&
          a.ttl &&
          (k.push({ type: "ADD", requestId: a.requestId, request: a }), q(!1));
      });
      return y.apply(this, arguments);
    }
    function c() {
      return z.apply(this, arguments);
    }
    function z() {
      z = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        if (l) return;
        l = !0;
        j = yield m();
        for (var a of j.entries()) {
          var b = a[0],
            c = a[1];
          try {
            yield u(c);
          } catch (a) {
            if (c.maxRetry) {
              k.push({ type: "DECREMENT", requestId: b });
              continue;
            }
          }
          k.push({ type: "REMOVE", requestId: b });
        }
        yield q(!0);
      });
      return z.apply(this, arguments);
    }
    function e() {
      return A.apply(this, arguments);
    }
    function A() {
      A = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        return j;
      });
      return A.apply(this, arguments);
    }
    g.handleBackgroundRequestMessage = a;
    g.handleBackgroundSyncEvent = c;
    g.getLoggedRequestsForTestingOnly = e;
  },
  98
);
__d(
  "ServiceWorkerSyncEvent",
  ["ServiceWorkerBackgroundRequests", "asyncToGeneratorRuntime"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "background_requests";
    function a() {
      self.registration.sync.register(h);
    }
    function c(a) {
      return i.apply(this, arguments);
    }
    function i() {
      i = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        a = a.tag;
        a === h &&
          d("ServiceWorkerBackgroundRequests").handleBackgroundSyncEvent();
      });
      return i.apply(this, arguments);
    }
    g.registerBackgroundRequests = a;
    g.handleEvent = c;
  },
  98
);
__d(
  "ErrorGuard",
  ["fb-error"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("fb-error").ErrorGuard;
  },
  98
);
__d(
  "ErrorSetup",
  ["fb-error"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("fb-error").ErrorSetup;
  },
  98
);
__d(
  "BanzaiAdapter",
  ["ServiceWorkerRequest", "asyncToGeneratorRuntime"],
  function (a, b, c, d, e, f, g) {
    var h = "/a/bz",
      i = {},
      j = {
        MAX_SIZE: 1e4,
        MAX_WAIT: 6e4,
        MIN_WAIT: 1e3,
        RESTORE_WAIT: 1e3,
        blacklist: [],
        gks: {},
        disabled: !1,
        known_routes: [],
        should_drop_unknown_routes: !1,
        should_log_unknown_routes: !1,
      };
    function a() {
      return "snappy";
    }
    var k = !0;
    function l(a) {
      return h;
    }
    function c() {
      return {
        store: function (a) {},
        restore: function (a) {},
        flush: function (a) {},
      };
    }
    function e() {
      return null;
    }
    function f(a) {
      (i[a] || []).forEach(function (a) {
        a();
      });
    }
    function m(a, b) {
      i[a] || (i[a] = []), i[a].push(b);
    }
    function n(a, b) {
      return a;
    }
    function o() {}
    function p(a, b, c, d) {
      return q.apply(this, arguments);
    }
    function q() {
      q = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b, c, e) {
        e = l(!1);
        try {
          yield d("ServiceWorkerRequest").fetchCSRFTokenAndPostFormData(e, a),
            b();
        } catch (a) {
          c();
        }
      });
      return q.apply(this, arguments);
    }
    function r() {
      return navigator.onLine;
    }
    function s(a) {}
    function t(a) {}
    function u(a) {}
    function v(a) {
      return a;
    }
    function w() {
      return !0;
    }
    function x(a) {}
    g.config = j;
    g.preferredCompressionMethod = a;
    g.useBeacon = k;
    g.getEndPointUrl = l;
    g.getStorage = c;
    g.getTopLevel = e;
    g.inform = f;
    g.subscribe = m;
    g.wrapInTimeSlice = n;
    g.cleanup = o;
    g.send = p;
    g.readyToSend = r;
    g.setHooks = s;
    g.setUnloadHook = t;
    g.onUnload = u;
    g.prepWadForTransit = v;
    g.isOkToSendViaBeacon = w;
    g.queueRequest = x;
  },
  98
);
/**
 * License: https://www.facebook.com/legal/license/WRsJ32R7YJG/
 */
__d(
  "SnappyCompress",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function g() {
      return typeof process === "object" &&
        typeof process.versions === "object" &&
        typeof process.versions.node !== "undefined"
        ? !0
        : !1;
    }
    function h(a) {
      return a instanceof Uint8Array && (!g() || !Buffer.isBuffer(a));
    }
    function i(a) {
      return a instanceof ArrayBuffer;
    }
    function j(a) {
      return !g() ? !1 : Buffer.isBuffer(a);
    }
    var k =
      "Argument compressed must be type of ArrayBuffer, Buffer, or Uint8Array";
    function a(a) {
      if (!h(a) && !i(a) && !j(a)) throw new TypeError(k);
      var b = !1,
        c = !1;
      h(a) ? (b = !0) : i(a) && ((c = !0), (a = new Uint8Array(a)));
      a = new A(a);
      var d = a.readUncompressedLength();
      if (d === -1) throw new Error("Invalid Snappy bitstream");
      if (b) {
        b = new Uint8Array(d);
        if (!a.uncompressToBuffer(b))
          throw new Error("Invalid Snappy bitstream");
      } else if (c) {
        b = new ArrayBuffer(d);
        c = new Uint8Array(b);
        if (!a.uncompressToBuffer(c))
          throw new Error("Invalid Snappy bitstream");
      } else {
        b = Buffer.alloc(d);
        if (!a.uncompressToBuffer(b))
          throw new Error("Invalid Snappy bitstream");
      }
      return b;
    }
    function b(a) {
      if (!h(a) && !i(a) && !j(a)) throw new TypeError(k);
      var b = !1,
        c = !1;
      h(a) ? (b = !0) : i(a) && ((c = !0), (a = new Uint8Array(a)));
      a = new x(a);
      var d = a.maxCompressedLength(),
        e,
        f,
        g;
      b
        ? ((e = new Uint8Array(d)), (g = a.compressToBuffer(e)))
        : c
        ? ((e = new ArrayBuffer(d)),
          (f = new Uint8Array(e)),
          (g = a.compressToBuffer(f)))
        : ((e = Buffer.alloc(d)), (g = a.compressToBuffer(e)));
      if (!e.slice) {
        f = new Uint8Array(Array.prototype.slice.call(e, 0, g));
        if (b) return f;
        else if (c) return f.buffer;
        else throw new Error("not implemented");
      }
      return e.slice(0, g);
    }
    c = 16;
    var l = 1 << c,
      m = 14,
      n = new Array(m + 1);
    function o(a, b) {
      return (a * 506832829) >>> b;
    }
    function p(a, b) {
      return a[b] + (a[b + 1] << 8) + (a[b + 2] << 16) + (a[b + 3] << 24);
    }
    function q(a, b, c) {
      return (
        a[b] === a[c] &&
        a[b + 1] === a[c + 1] &&
        a[b + 2] === a[c + 2] &&
        a[b + 3] === a[c + 3]
      );
    }
    function r(a, b, c, d, e) {
      var f;
      for (f = 0; f < e; f++) c[d + f] = a[b + f];
    }
    function s(a, b, c, d, e) {
      c <= 60
        ? ((d[e] = (c - 1) << 2), (e += 1))
        : c < 256
        ? ((d[e] = 60 << 2), (d[e + 1] = c - 1), (e += 2))
        : ((d[e] = 61 << 2),
          (d[e + 1] = (c - 1) & 255),
          (d[e + 2] = (c - 1) >>> 8),
          (e += 3));
      r(a, b, d, e, c);
      return e + c;
    }
    function t(a, b, c, d) {
      if (d < 12 && c < 2048) {
        a[b] = 1 + ((d - 4) << 2) + ((c >>> 8) << 5);
        a[b + 1] = c & 255;
        return b + 2;
      } else {
        a[b] = 2 + ((d - 1) << 2);
        a[b + 1] = c & 255;
        a[b + 2] = c >>> 8;
        return b + 3;
      }
    }
    function u(a, b, c, d) {
      while (d >= 68) (b = t(a, b, c, 64)), (d -= 64);
      d > 64 && ((b = t(a, b, c, 60)), (d -= 60));
      return t(a, b, c, d);
    }
    function v(a, b, c, d, e) {
      var f = 1;
      while (1 << f <= c && f <= m) f += 1;
      f -= 1;
      var g = 32 - f;
      typeof n[f] === "undefined" && (n[f] = new Uint16Array(1 << f));
      f = n[f];
      var h;
      for (h = 0; h < f.length; h++) f[h] = 0;
      h = b + c;
      var i = b,
        j = b,
        k,
        l,
        r,
        t,
        v,
        w = !0,
        x = 15;
      if (c >= x) {
        c = h - x;
        b += 1;
        x = o(p(a, b), g);
        while (w) {
          t = 32;
          l = b;
          do {
            b = l;
            k = x;
            v = t >>> 5;
            t += 1;
            l = b + v;
            if (b > c) {
              w = !1;
              break;
            }
            x = o(p(a, l), g);
            r = i + f[k];
            f[k] = b - i;
          } while (!q(a, b, r));
          if (!w) break;
          e = s(a, j, b - j, d, e);
          do {
            v = b;
            k = 4;
            while (b + k < h && a[b + k] === a[r + k]) k += 1;
            b += k;
            l = v - r;
            e = u(d, e, l, k);
            j = b;
            if (b >= c) {
              w = !1;
              break;
            }
            t = o(p(a, b - 1), g);
            f[t] = b - 1 - i;
            v = o(p(a, b), g);
            r = i + f[v];
            f[v] = b - i;
          } while (q(a, b, r));
          if (!w) break;
          b += 1;
          x = o(p(a, b), g);
        }
      }
      j < h && (e = s(a, j, h - j, d, e));
      return e;
    }
    function w(a, b, c) {
      do (b[c] = a & 127), (a = a >>> 7), a > 0 && (b[c] += 128), (c += 1);
      while (a > 0);
      return c;
    }
    function x(a) {
      this.array = a;
    }
    x.prototype.maxCompressedLength = function () {
      var a = this.array.length;
      return 32 + a + Math.floor(a / 6);
    };
    x.prototype.compressToBuffer = function (a) {
      var b = this.array,
        c = b.length,
        d = 0,
        e = 0,
        f;
      e = w(c, a, e);
      while (d < c) (f = Math.min(c - d, l)), (e = v(b, d, f, a, e)), (d += f);
      return e;
    };
    var y = [0, 255, 65535, 16777215, 4294967295];
    function r(a, b, c, d, e) {
      var f;
      for (f = 0; f < e; f++) c[d + f] = a[b + f];
    }
    function z(a, b, c, d) {
      var e;
      for (e = 0; e < d; e++) a[b + e] = a[b - c + e];
    }
    function A(a) {
      (this.array = a), (this.pos = 0);
    }
    A.prototype.readUncompressedLength = function () {
      var a = 0,
        b = 0,
        c,
        d;
      while (b < 32 && this.pos < this.array.length) {
        c = this.array[this.pos];
        this.pos += 1;
        d = c & 127;
        if ((d << b) >>> b !== d) return -1;
        a |= d << b;
        if (c < 128) return a;
        b += 7;
      }
      return -1;
    };
    A.prototype.uncompressToBuffer = function (a) {
      var b = this.array,
        c = b.length,
        d = this.pos,
        e = 0,
        f,
        g,
        h,
        i;
      while (d < b.length) {
        f = b[d];
        d += 1;
        if ((f & 3) === 0) {
          g = (f >>> 2) + 1;
          if (g > 60) {
            if (d + 3 >= c) return !1;
            h = g - 60;
            g = b[d] + (b[d + 1] << 8) + (b[d + 2] << 16) + (b[d + 3] << 24);
            g = (g & y[h]) + 1;
            d += h;
          }
          if (d + g > c) return !1;
          r(b, d, a, e, g);
          d += g;
          e += g;
        } else {
          switch (f & 3) {
            case 1:
              g = ((f >>> 2) & 7) + 4;
              i = b[d] + ((f >>> 5) << 8);
              d += 1;
              break;
            case 2:
              if (d + 1 >= c) return !1;
              g = (f >>> 2) + 1;
              i = b[d] + (b[d + 1] << 8);
              d += 2;
              break;
            case 3:
              if (d + 3 >= c) return !1;
              g = (f >>> 2) + 1;
              i = b[d] + (b[d + 1] << 8) + (b[d + 2] << 16) + (b[d + 3] << 24);
              d += 4;
              break;
            default:
              break;
          }
          if (i === 0 || i > e) return !1;
          z(a, e, i, g);
          e += g;
        }
      }
      return !0;
    };
    e.exports.uncompress = a;
    e.exports.compress = b;
  },
  null
);
__d(
  "SnappyCompressUtil",
  ["SnappyCompress"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = {
      compressUint8ArrayToSnappy: function (c) {
        if (c == null) return null;
        var d = null;
        try {
          d = b("SnappyCompress").compress(c);
        } catch (a) {
          return null;
        }
        c = "";
        for (var e = 0; e < d.length; e++) c += String.fromCharCode(d[e]);
        return a.btoa(c);
      },
      compressStringToSnappy: function (b) {
        if (a.Uint8Array === void 0 || a.btoa === void 0) return null;
        var c = new a.Uint8Array(b.length);
        for (var d = 0; d < b.length; d++) {
          var e = b.charCodeAt(d);
          if (e > 127) return null;
          c[d] = e;
        }
        return g.compressUint8ArrayToSnappy(c);
      },
      compressStringToSnappyBinary: function (c) {
        if (a.Uint8Array === void 0) return null;
        var d = null;
        if (a.TextEncoder !== void 0) d = new TextEncoder().encode(c);
        else {
          d = new a.Uint8Array(c.length);
          for (var e = 0; e < c.length; e++) {
            var f = c.charCodeAt(e);
            if (f > 127) return null;
            d[e] = f;
          }
        }
        f = null;
        try {
          f = b("SnappyCompress").compress(d);
        } catch (a) {
          return null;
        }
        return f;
      },
    };
    e.exports = g;
  },
  null
);
__d(
  "once",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      var b = g(a);
      for (var c in a)
        Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
      return b;
    }
    function g(a) {
      var b = a,
        c;
      a = function () {
        if (b) {
          for (var a = arguments.length, d = new Array(a), e = 0; e < a; e++)
            d[e] = arguments[e];
          c = b.apply(this, d);
          b = null;
        }
        return c;
      };
      return a;
    }
    f["default"] = a;
  },
  66
);
__d(
  "BanzaiCompressionUtils",
  ["FBLogger", "Promise", "SnappyCompressUtil", "once", "performanceNow"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h = b("once")(function () {
        if (a.CompressionStream == null) return !1;
        if (a.Response == null) return !1;
        try {
          new a.CompressionStream("deflate");
        } catch (a) {
          return !1;
        }
        return !0;
      }),
      i = {
        compressWad: function (a, c) {
          if (a.needs_compression !== !0) {
            delete a.needs_compression;
            return;
          }
          if (c === "deflate") {
            i.compressWad(a, "snappy");
            return;
          }
          var d = (g || (g = b("performanceNow")))(),
            e = JSON.stringify(a.posts),
            f;
          switch (c) {
            case "snappy":
              f = b("SnappyCompressUtil").compressStringToSnappyBinary(e);
              break;
            case "snappy_base64":
              f = b("SnappyCompressUtil").compressStringToSnappy(e);
              break;
            default:
              break;
          }
          f != null && f.length < e.length
            ? ((a.posts = f),
              (a.compression = c),
              (a.snappy_ms = Math.ceil((g || (g = b("performanceNow")))() - d)),
              a.snappy_ms < 0 &&
                b("FBLogger")("BanzaiCompressionUtils").warn(
                  "Expected positive snappy_ms but got %s",
                  a.snappy_ms
                ))
            : (a.compression = "");
          delete a.needs_compression;
        },
        compressWadAsync: function (c, d) {
          if (d !== "deflate") {
            i.compressWad(c, "snappy");
            return b("Promise").resolve();
          }
          if (!h()) return i.compressWadAsync(c, "snappy");
          var e = (g || (g = b("performanceNow")))(),
            f = JSON.stringify(c.posts),
            j = new Response(f).body;
          if (!j) {
            c.compression = "";
            delete c.needs_compression;
            return b("Promise").resolve();
          }
          j = j.pipeThrough(new a.CompressionStream("deflate"));
          return new Response(j)
            .arrayBuffer()
            .then(function (a) {
              a.byteLength < f.length
                ? ((c.posts = new Uint8Array(a)),
                  (c.compression = d),
                  (c.snappy_ms = Math.ceil(
                    (g || (g = b("performanceNow")))() - e
                  )),
                  c.snappy_ms < 0 &&
                    b("FBLogger")("BanzaiCompressionUtils").warn(
                      "Expected positive snappy_ms but got %s",
                      c.snappy_ms
                    ))
                : (c.compression = ""),
                delete c.needs_compression;
            })
            ["catch"](function () {
              (c.compression = ""), delete c.needs_compression;
            });
        },
        outOfBandsPosts: function (a) {
          var b = 0,
            c = {};
          for (var d = 0; d < a.length; d++) {
            var e = a[d],
              f = e.compression === "snappy" || e.compression === "deflate";
            if (f) {
              f = new Blob([e.posts], { type: "application/octet-stream" });
              e.posts = String(b);
              c["post_" + String(b)] = f;
              b++;
            }
          }
          return c;
        },
      };
    e.exports = i;
  },
  null
);
__d(
  "BanzaiConsts",
  [],
  function (a, b, c, d, e, f) {
    a = {
      SEND: "Banzai:SEND",
      OK: "Banzai:OK",
      ERROR: "Banzai:ERROR",
      SHUTDOWN: "Banzai:SHUTDOWN",
      BASIC: "basic",
      VITAL: "vital",
      BASIC_WAIT: 6e4,
      BASIC_WAIT_COMET: 2e3,
      VITAL_WAIT: 1e3,
      BATCH_SIZE_LIMIT: 64e3,
      EXPIRY: 864e5,
      BATCH_TIMEOUT: 1e4,
      LAST_STORAGE_FLUSH: "banzai:last_storage_flush",
      STORAGE_FLUSH_INTERVAL: 12 * 60 * 6e4,
      POST_READY: 0,
      POST_INFLIGHT: 1,
      POST_SENT: 2,
    };
    b = a;
    f["default"] = b;
  },
  66
);
__d(
  "SimpleHook",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a() {
        (this.__callbacks = []), (this.call = this.$2);
      }
      var b = a.prototype;
      b.hasCallback = function (a) {
        var b = this.__callbacks;
        return (
          b.length > 0 &&
          (a == null ||
            b.some(function (b) {
              return b === a || b.$1 === a;
            }))
        );
      };
      b.add = function (a, b) {
        var c = this,
          d;
        if ((b == null ? void 0 : b.once) === !0) {
          b = function () {
            c.remove(d), a.apply(null, arguments);
          };
          b.$1 = a;
          d = b;
        } else d = a;
        this.__callbacks.push(d);
        return d;
      };
      b.removeLast = function () {
        return this.__callbacks.pop();
      };
      b.remove = function (a) {
        return this.removeIf(function (b) {
          return b === a;
        });
      };
      b.removeIf = function (a) {
        var b = this.__callbacks;
        this.__callbacks = b.filter(function (b) {
          return !a(b);
        });
        return b.length > this.__callbacks.length;
      };
      b.clear = function () {
        this.__callbacks = [];
      };
      b.$2 = function () {
        var a = this.__callbacks;
        for (var b = 0, c = a.length; b < c; ++b) {
          var d = a[b];
          d.apply(null, arguments);
        }
      };
      return a;
    })();
    f.SimpleHook = a;
  },
  66
);
__d(
  "BanzaiLazyQueue",
  ["SimpleHook"],
  function (a, b, c, d, e, f, g) {
    var h = [],
      i = new (d("SimpleHook").SimpleHook)();
    a = {
      onQueue: i,
      queuePost: function (a, b, c) {
        h.push([a, b, c]), i.call(a, b, c);
      },
      flushQueue: function () {
        var a = h;
        h = [];
        return a;
      },
    };
    f.exports = a;
  },
  34
);
__d(
  "CurrentUser",
  [],
  function (a, b, c, d, e, f) {
    a = {
      getID: function () {
        return "0";
      },
      getAccountID: function () {
        return "0";
      },
      getPossiblyNonFacebookUserID: function () {
        return "0";
      },
      getEmployeeWorkUserID: function () {
        return "0";
      },
      getName: function () {
        return "";
      },
      getShortName: function () {
        return "";
      },
      isLoggedIn: function () {
        return !1;
      },
      isLoggedInNow: function () {
        return !1;
      },
      isEmployee: function () {
        return !1;
      },
      isTestUser: function () {
        return !1;
      },
      hasWorkUser: function () {
        return !1;
      },
      isWorkUser: function () {
        return !1;
      },
      isGray: function () {
        return !1;
      },
      isUnderage: function () {
        return !1;
      },
      isMessengerOnlyUser: function () {
        return !1;
      },
      isDeactivatedAllowedOnMessenger: function () {
        return !1;
      },
      getAppID: function () {
        return "0";
      },
    };
    b = a;
    f["default"] = b;
  },
  66
);
__d(
  "WebSession",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {}
    function b() {
      return "000000:000000:000000";
    }
    function c() {
      return "0";
    }
    f.extend = a;
    f.getId = b;
    f.getPageId_DO_NOT_USE = c;
  },
  66
);
__d(
  "BanzaiUtils",
  [
    "BanzaiConsts",
    "CurrentUser",
    "FBLogger",
    "WebSession",
    "performanceAbsoluteNow",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h,
      i = {
        canSend: function (a) {
          return (
            a[2] >=
            (g || (g = b("performanceAbsoluteNow")))() -
              (h || (h = b("BanzaiConsts"))).EXPIRY
          );
        },
        filterPost: function (a, c, d, e) {
          if (e.overlimit) return !0;
          if (
            !e.sendMinimumOnePost &&
            a[4] + e.currentSize >
              (h || (h = b("BanzaiConsts"))).BATCH_SIZE_LIMIT
          )
            return !0;
          var f = a.__meta;
          if (
            (f.status != null &&
              f.status >= (h || (h = b("BanzaiConsts"))).POST_SENT) ||
            !i.canSend(a)
          )
            return !1;
          if (
            f.status != null &&
            f.status >= (h || (h = b("BanzaiConsts"))).POST_INFLIGHT
          )
            return !0;
          var g = f.compress != null ? f.compress : !0,
            j =
              (f.webSessionId != null ? f.webSessionId : "null") +
              (f.userID != null ? f.userID : "null") +
              (f.appID != null ? f.appID : "null") +
              (g ? "compress" : ""),
            k = e.wadMap.get(j);
          k ||
            ((k = {
              app_id: f.appID,
              needs_compression: g,
              posts: [],
              user: f.userID,
              webSessionId: f.webSessionId,
            }),
            e.wadMap.set(j, k),
            c.push(k));
          f.status = (h || (h = b("BanzaiConsts"))).POST_INFLIGHT;
          Array.isArray(k.posts)
            ? k.posts.push(a)
            : b("FBLogger")("banzai").mustfix(
                "Posts were a string instead of array"
              );
          d.push(a);
          e.currentSize += a[4];
          e.currentSize >= (h || (h = b("BanzaiConsts"))).BATCH_SIZE_LIMIT &&
            (e.overlimit = !0);
          return e.keepRetryable && Boolean(f.retry);
        },
        resetPostStatus: function (a) {
          a.__meta.status = (h || (h = b("BanzaiConsts"))).POST_READY;
        },
        retryPost: function (a, c, d) {
          var e = a;
          e.__meta.status = (h || (h = b("BanzaiConsts"))).POST_READY;
          e[3] = (e[3] || 0) + 1;
          e.__meta.retry !== !0 && c >= 400 && c < 600 && d.push(a);
        },
        wrapData: function (a, c, d, e, f) {
          d = [
            a,
            c,
            d,
            0,
            (a = f) != null ? a : c ? JSON.stringify(c).length : 0,
          ];
          d.__meta = {
            appID: b("CurrentUser").getAppID(),
            retry: e === !0,
            status: (h || (h = b("BanzaiConsts"))).POST_READY,
            userID: b("CurrentUser").getPossiblyNonFacebookUserID(),
            webSessionId: b("WebSession").getId(),
          };
          return d;
        },
      };
    e.exports = i;
  },
  null
);
__d(
  "ExecutionEnvironment",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    b = !!(a !== void 0 && a.document && a.document.createElement);
    c = typeof WorkerGlobalScope === "function";
    d = {
      canUseDOM: b,
      canUseEventListeners: b && !!(a.addEventListener || a.attachEvent),
      canUseViewport: b && !!window.screen,
      canUseWorkers: typeof Worker !== "undefined",
      isInBrowser: b || c,
      isInWorker: c,
    };
    e = d;
    f["default"] = e;
  },
  66
);
__d(
  "NavigationMetrics",
  [],
  function (a, b, c, d, e, f) {
    var g = {
      NAVIGATION_DONE: "NAVIGATION_DONE",
      EVENT_OCCURRED: "EVENT_OCCURRED",
    };
    function a(a, b, c, d, e, f, g) {}
    function b(a, b, c, d, e, f, g) {}
    function c(a, b, c) {}
    function d(a, b, c) {}
    function e(a, b, c) {}
    function h(a) {}
    function i() {}
    function j() {}
    function k(a) {}
    var l = function (a, b, c) {};
    function m(a) {
      return;
    }
    function n() {
      throw new Error("getFullPageLoadLid is not implemented on this site");
    }
    f.Events = g;
    f.emit = a;
    f.emitAndHold = b;
    f.addListener = c;
    f.once = d;
    f.addRetroactiveListener = e;
    f.listeners = h;
    f.removeAllListeners = i;
    f.removeCurrentListener = j;
    f.releaseHeldEventType = k;
    f.postPagelet = l;
    f.setPage = m;
    f.getFullPageLoadLid = n;
  },
  66
);
__d(
  "SetIdleTimeoutAcrossTransitions",
  ["clearTimeout", "setTimeout"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      return c("setTimeout")(a, b);
    }
    function b(a) {
      c("clearTimeout")(a);
    }
    g.start = a;
    g.clear = b;
  },
  98
);
__d(
  "Visibility",
  ["invariant"],
  function (a, b, c, d, e, f, g, h) {
    function a() {
      return !1;
    }
    function b(a, b) {
      h(0, 3683);
    }
    c = "hidden";
    d = "visible";
    g.isSupported = a;
    g.addListener = b;
    g.HIDDEN = c;
    g.VISIBLE = d;
  },
  98
);
__d(
  "BanzaiBase",
  [
    "BanzaiAdapter",
    "BanzaiCompressionUtils",
    "BanzaiConsts",
    "BanzaiLazyQueue",
    "BanzaiUtils",
    "CurrentUser",
    "ErrorGuard",
    "ExecutionEnvironment",
    "FBLogger",
    "NavigationMetrics",
    "SetIdleTimeoutAcrossTransitions",
    "Visibility",
    "WebSession",
    "performanceAbsoluteNow",
  ],
  function (a, b, c, d, e, f) {
    var g,
      h,
      i,
      j,
      k,
      l = [],
      m = null,
      n = {
        _clearPostBuffer: function () {
          l = [];
        },
        _flushLazyQueue: function () {
          b("BanzaiLazyQueue")
            .flushQueue()
            .forEach(function (a) {
              return n.post.apply(n, a);
            });
        },
        _gatherWadsAndPostsFromBuffer: function (a, c, d, e, f) {
          var g = {
            currentSize: 0,
            keepRetryable: d,
            overlimit: !1,
            sendMinimumOnePost: f,
            wadMap: new Map(),
          };
          d = e.filter(function (d, e) {
            return b("BanzaiUtils").filterPost(d, a, c, g);
          });
          g.overlimit && d.length && n._schedule(0);
          return d;
        },
        _getEventTime: function () {
          return (g || (g = b("performanceAbsoluteNow")))();
        },
        _getWebSessionId: function () {
          return b("WebSession").getId();
        },
        _getPostBuffer: function () {
          return l;
        },
        _getUserId: function () {
          return b("CurrentUser").getPossiblyNonFacebookUserID();
        },
        _getAppId: function () {
          return b("CurrentUser").getAppID();
        },
        _initialize: function () {
          b("ExecutionEnvironment").canUseDOM &&
            (n.adapter.useBeacon && b("Visibility").isSupported()
              ? (b("Visibility").addListener(
                  b("Visibility").HIDDEN,
                  function () {
                    n._getPostBuffer().length > 0 &&
                      (n._tryToSendViaBeacon() || n._store(!1));
                  }
                ),
                n.isEnabled("enable_client_logging_clear_on_visible") &&
                  b("Visibility").addListener(
                    b("Visibility").VISIBLE,
                    function () {
                      n._tryToSendViaBeacon() || n._restore(!1);
                    }
                  ))
              : n.adapter.setHooks(n),
            n.adapter.setUnloadHook(n),
            b("NavigationMetrics").addListener(
              b("NavigationMetrics").Events.NAVIGATION_DONE,
              function (a, c) {
                if (c.pageType !== "normal") return;
                n._restore(!1);
                b("NavigationMetrics").removeCurrentListener();
              }
            ));
        },
        _sendBeacon: function (b, c) {
          return a.navigator.sendBeacon(b, c);
        },
        _prepForTransit: function (a) {
          var c = new FormData();
          c.append("ts", String(Date.now()));
          var d = b("BanzaiCompressionUtils").outOfBandsPosts(a);
          Object.keys(d).forEach(function (a) {
            c.append(a, d[a]);
          });
          c.append("q", JSON.stringify(a));
          return c;
        },
        _prepWadForTransit: function (a) {
          b("BanzaiCompressionUtils").compressWad(
            a,
            b("BanzaiAdapter").preferredCompressionMethod()
          );
        },
        _processCallbacksAndSendViaBeacon: function () {
          var a = [],
            c = [],
            d = [];
          n._gatherWadsAndPostsFromBuffer(c, d, !0, a, !1);
          if (c.length > 0) {
            c[0].send_method = "beacon";
            c.map(n._prepWadForTransit);
            d = n._prepForTransit(c);
            a = b("BanzaiAdapter").getEndPointUrl(!0);
            c = n._sendBeacon(a, d);
            c || b("FBLogger")("banzai").warn("Error sending beacon");
          }
        },
        _restore: function (a) {
          a = b("BanzaiAdapter").getStorage();
          var c = function (a) {
            l.push(a);
          };
          (h || (h = b("ErrorGuard"))).applyWithGuard(a.restore, a, [c]);
          n._schedule(
            b("BanzaiAdapter").config.RESTORE_WAIT ||
              (i || (i = b("BanzaiConsts"))).VITAL_WAIT
          );
        },
        _schedule: function (a) {
          var c = n._getEventTime() + a;
          if (!k || c < k) {
            k = c;
            b("SetIdleTimeoutAcrossTransitions").clear(j);
            j = b("SetIdleTimeoutAcrossTransitions").start(
              b("BanzaiAdapter").wrapInTimeSlice(
                n._sendWithCallbacks,
                "Banzai.send"
              ),
              a
            );
            return !0;
          }
          return !1;
        },
        _sendWithCallbacks: function (a, c) {
          k = null;
          n._schedule(n.BASIC.delay);
          if (!b("BanzaiAdapter").readyToSend()) {
            c && c();
            return;
          }
          if (n.isEnabled("flush_storage_periodically")) {
            var d = b("BanzaiAdapter").getStorage(),
              e = function () {
                n._restore(!1);
              };
            (h || (h = b("ErrorGuard"))).applyWithGuard(d.flush, d, [e]);
          }
          b("BanzaiAdapter").inform((i || (i = b("BanzaiConsts"))).SEND);
          d = [];
          var f = [];
          l = n._gatherWadsAndPostsFromBuffer(d, f, !0, l, !0);
          if (d.length <= 0) {
            b("BanzaiAdapter").inform((i || (i = b("BanzaiConsts"))).OK);
            a && a();
            return;
          }
          d[0].trigger = m;
          m = null;
          d[0].send_method = "ajax";
          d.map(n._prepWadForTransit);
          b("BanzaiAdapter").send(
            n._prepForTransit(d),
            function () {
              f.forEach(function (a) {
                a = a;
                a.__meta.status = (i || (i = b("BanzaiConsts"))).POST_SENT;
                a.__meta.callback && a.__meta.callback();
              }),
                a && a();
            },
            function (a) {
              f.forEach(function (c) {
                b("BanzaiUtils").retryPost(c, a, l);
              }),
                c && c();
            }
          );
        },
        _store: function (a) {
          a = b("BanzaiAdapter").getStorage();
          (h || (h = b("ErrorGuard"))).applyWithGuard(a.store, a, [l]);
        },
        _testState: function () {
          return { postBuffer: l, triggerRoute: m };
        },
        _tryToSendViaBeacon: function () {
          if (
            !(
              navigator &&
              navigator.sendBeacon &&
              b("BanzaiAdapter").isOkToSendViaBeacon()
            )
          )
            return !1;
          var a = [],
            c = [];
          l = n._gatherWadsAndPostsFromBuffer(a, c, !1, l, !1);
          if (a.length <= 0) return !1;
          a[0].send_method = "beacon";
          a.map(n._prepWadForTransit);
          a = n._prepForTransit(a);
          var d = b("BanzaiAdapter").getEndPointUrl(!0);
          d = n._sendBeacon(d, a);
          if (!d) {
            c.forEach(function (a) {
              l.push(a);
            });
            return !1;
          }
          return !0;
        },
        _unload: function () {
          if (b("BanzaiAdapter").config.disabled) return;
          n._flushLazyQueue();
          navigator &&
            navigator.sendBeacon &&
            b("BanzaiAdapter").isOkToSendViaBeacon() &&
            n._processCallbacksAndSendViaBeacon();
          b("BanzaiAdapter").cleanup();
          b("BanzaiAdapter").inform((i || (i = b("BanzaiConsts"))).SHUTDOWN);
          l.length > 0 &&
            (!n.adapter.useBeacon || !n._tryToSendViaBeacon()) &&
            n._store(!1);
        },
        BASIC: {
          delay:
            b("BanzaiAdapter").config.MAX_WAIT ||
            (i || (i = b("BanzaiConsts"))).BASIC_WAIT,
        },
        BASIC_WAIT: (i || (i = b("BanzaiConsts"))).BASIC_WAIT,
        ERROR: i.ERROR,
        OK: i.OK,
        SEND: i.SEND,
        SHUTDOWN: i.SHUTDOWN,
        VITAL: {
          delay:
            b("BanzaiAdapter").config.MIN_WAIT ||
            (i || (i = b("BanzaiConsts"))).VITAL_WAIT,
        },
        VITAL_WAIT: i.VITAL_WAIT,
        adapter: b("BanzaiAdapter"),
        canUseNavigatorBeacon: function () {
          return Boolean(
            navigator &&
              navigator.sendBeacon &&
              b("BanzaiAdapter").isOkToSendViaBeacon()
          );
        },
        flush: function (a, c) {
          b("SetIdleTimeoutAcrossTransitions").clear(j),
            n._sendWithCallbacks(a, c);
        },
        isEnabled: function (a) {
          return Boolean(
            b("BanzaiAdapter").config.gks &&
              b("BanzaiAdapter").config.gks[a] &&
              !b("BanzaiAdapter").config.disabled
          );
        },
        post: function (a, c, d) {
          a ||
            b("FBLogger")("banzai").mustfix(
              "Banzai.post called without specifying a route"
            );
          n._flushLazyQueue();
          var e = a.split(":");
          if (
            (b("BanzaiAdapter").config.known_routes || []).indexOf(e[0]) === -1
          ) {
            b("BanzaiAdapter").config.should_log_unknown_routes === !0 &&
              b("FBLogger")("banzai")
                .blameToPreviousFrame()
                .mustfix(
                  "Attempted to post to invalid Banzai route '" +
                    a +
                    "'. This call site should be cleaned up."
                );
            if (b("BanzaiAdapter").config.should_drop_unknown_routes === !0)
              return;
          }
          var f = "";
          try {
            var g;
            f = (g = JSON.stringify(c)) != null ? g : "";
          } catch (c) {
            b("FBLogger")("banzai")
              .catching(c)
              .addToCategoryKey(a)
              .mustfix("Could not JSON.stringify banzai data for route %s", a);
            return;
          }
          var h = d == null ? void 0 : d.retry;
          if (b("BanzaiAdapter").config.disabled) return;
          if (
            !b("ExecutionEnvironment").canUseDOM &&
            !b("ExecutionEnvironment").isInWorker
          )
            return;
          var j = n.adapter.getTopLevel();
          if (j) {
            var k;
            try {
              k = j.require("Banzai");
            } catch (a) {
              k = null;
            }
            if (k) {
              k.post.apply(k, arguments);
              return;
            }
          }
          var o = b("BanzaiAdapter").config.blacklist;
          if (
            o &&
            o.indexOf &&
            typeof o.indexOf == "function" &&
            o.indexOf(a) != -1
          )
            return;
          var p = f.length,
            q = b("BanzaiUtils").wrapData(a, c, n._getEventTime(), h, p),
            r = q;
          (d == null ? void 0 : d.callback) &&
            (r.__meta.callback = d == null ? void 0 : d.callback);
          (d == null ? void 0 : d.compress) != null &&
            (r.__meta.compress = d == null ? void 0 : d.compress);
          var s = d == null ? void 0 : d.delay;
          s == null && (s = (i || (i = b("BanzaiConsts"))).BASIC_WAIT);
          if (d == null ? void 0 : d.signal) {
            r.__meta.status = (i || (i = b("BanzaiConsts"))).POST_INFLIGHT;
            var t = [
              {
                user: n._getUserId(),
                webSessionId: n._getWebSessionId(),
                app_id: n._getAppId(),
                posts: [q],
                trigger: a,
              },
            ];
            b("BanzaiAdapter").send(
              n._prepForTransit(t),
              function () {
                (r.__meta.status = (i || (i = b("BanzaiConsts"))).POST_SENT),
                  r.__meta.callback && r.__meta.callback();
              },
              function (a) {
                b("BanzaiUtils").retryPost(q, a, l);
              },
              !0
            );
            if (!h) return;
          }
          l.push(q);
          (n._schedule(s) || !m) && (m = a);
        },
        subscribe: b("BanzaiAdapter").subscribe,
      };
    n._initialize();
    e.exports = n;
  },
  null
);
__d(
  "Banzai",
  ["BanzaiBase"],
  function (a, b, c, d, e, f, g) {
    g["default"] = c("BanzaiBase");
  },
  98
);
__d(
  "ErrorTransport",
  ["Banzai"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      c("Banzai").post("js_error_logging", a);
    }
    g.log = a;
  },
  98
);
__d(
  "ServiceWorkerQuietError",
  [],
  function (a, b, c, d, e, f) {
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b) {
        var c;
        c = a.call(this, b) || this;
        c.name = "ServiceWorkerQuietError";
        c.message = b;
        return c;
      }
      return b;
    })(babelHelpers.wrapNativeSuper(Error));
    f["default"] = a;
  },
  66
);
__d(
  "getErrorSafe",
  ["fb-error"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("fb-error").getErrorSafe;
  },
  98
);
__d(
  "ServiceWorkerErrorLogging",
  [
    "Env",
    "ErrorGuard",
    "ErrorPubSub",
    "ErrorSetup",
    "ErrorTransport",
    "ServiceWorkerQuietError",
    "ServiceWorkerServerData",
    "ServiceWorkerVersion",
    "getErrorSafe",
  ],
  function (a, b, c, d, e, f, g) {
    function a() {
      c("ErrorGuard").skipGuardGlobal(c("Env").nocatch);
      var a = d("ServiceWorkerServerData").getData(
        "SiteData",
        "log_errors",
        !0
      );
      a = Boolean(a) ? 1 : 0;
      c("ErrorSetup").setup(
        {
          client_revision: d("ServiceWorkerVersion").getCurrentRev(),
          loggingFramework: "service_worker",
          sample_weight: a,
          site_category: "service-worker",
        },
        d("ErrorTransport").log
      );
      self.addEventListener("unhandledrejection", function (a) {
        a = a.reason;
        a instanceof c("ServiceWorkerQuietError") ||
          c("ErrorPubSub").reportError(c("getErrorSafe")(a));
      });
    }
    function b() {
      return c("ErrorPubSub").history;
    }
    c("ErrorSetup").preSetup();
    g.init = a;
    g.getHistory = b;
  },
  98
);
__d(
  "ForcedNavigateToRequest",
  ["Promise", "Random", "URL"],
  function (a, b, c, d, e, f, g) {
    var h = new Map(),
      i = d("Random").uint32();
    function j(a, b, d) {
      h.set(String(i), b);
      b = new (c("URL"))(a);
      b.searchParams.append("sw_fnr_id", i + "");
      b.searchParams.append("fnr_t", d + "");
      i++;
      return b.toString();
    }
    function a(a, b, c) {
      if (!c.navigate)
        throw new Error(
          "client.navigate is not in this version of the browser"
        );
      a = j(a, b, 0);
      c.navigate(a);
    }
    function e(a, c) {
      if (!h.has(c)) return void 0;
      a = h.get(c);
      if (a) {
        h.set(c, null);
        return {
          response: b("Promise").resolve(a),
          waitUntil: b("Promise").resolve(),
        };
      }
      return null;
    }
    g.enqueueResponse = j;
    g.forceNavigate = a;
    g.responseToFetch = e;
  },
  98
);
__d(
  "ServiceWorkerFetchPage",
  [
    "Artillery4SW",
    "FBLogger",
    "ServiceWorkerBase",
    "ServiceWorkerConslidatedHeader",
    "ServiceWorkerEventLogger",
    "ServiceWorkerPreload",
    "ServiceWorkerProfilerTypes",
    "ServiceWorkerRoutes",
    "ServiceWorkerServerData",
    "ServiceWorkerVersion",
    "asyncToGeneratorRuntime",
  ],
  function (a, b, c, d, e, f, g) {
    function h(a) {
      return new Request(a, {
        mode: "same-origin",
        credentials: "same-origin",
        redirect: "manual",
      });
    }
    function i(a) {
      var b = d("ServiceWorkerServerData").getData(
        "ResourceCacheData",
        "failReasonsToString",
        {}
      );
      return b && Array.isArray(b) && b[a] && typeof b[a] === "string"
        ? b[a]
        : "MISSING_VALID_REASON";
    }
    function j(a, b) {
      return k.apply(this, arguments);
    }
    function k() {
      k = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b) {
        if (
          !a.ok &&
          !(b.redirectAllowed && a.type === "opaqueredirect") &&
          a.status !== 404
        ) {
          var c;
          a.type === "opaqueredirect"
            ? (c = t("RESPONSE_OF_REDIRECT"))
            : a.status === 500
            ? (c = t("RESPONSE_WITH_ERROR"))
            : (c = t("RESPONSE_NOT_OK"));
          return { failReason: c, response: null };
        }
        c = d("ServiceWorkerServerData").getString(
          "SiteData",
          "disableSWHeader"
        );
        if (a.headers.has(c)) {
          d("ServiceWorkerBase").genUnregisterSelf();
          d("ServiceWorkerEventLogger").error(
            "Got disable header, unregistering"
          );
          return {
            failReason: t("RESPONSE_HAS_DISABLE_HEADER"),
            response: null,
          };
        }
        c = d("ServiceWorkerServerData").getString("SiteData", "fbRevHeader");
        if (!b.skipRevCheck && !a.headers.has(c)) {
          b.hasCacheContent &&
            (d("ServiceWorkerBase").genUnregisterSelf(),
            d("ServiceWorkerEventLogger").error(
              "FB rev header missing, unregistering"
            ));
          return { failReason: t("RESPONSE_HEADER_MISSING"), response: null };
        }
        if (b.checkSiteType) {
          c = d("ServiceWorkerServerData").getString(
            "SiteData",
            "siteTypeHeader"
          );
          var e = d("ServiceWorkerServerData").getData("SiteData", "siteType");
          c = a.headers.get(c);
          if (e && e !== c) {
            d("ServiceWorkerBase").genUnregisterSelf();
            return { failReason: t("SITE_MISMATCH"), response: null };
          }
        }
        if (b.cachedNonce) {
          e = d("ServiceWorkerServerData").getString("SiteData", "nonceHeader");
          c = a.headers.get(e);
          if (c !== b.cachedNonce)
            return { failReason: t("NONCE_MISMATCH"), response: null };
        }
        return { failReason: null, response: a };
      });
      return k.apply(this, arguments);
    }
    function l(a, b) {
      return m.apply(this, arguments);
    }
    function m() {
      m = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b) {
        if (!d("ServiceWorkerPreload").isEnabled() || !a)
          return { response: null, failReason: t("PRELOAD_NOT_ENABLED") };
        var e = null;
        try {
          e = yield a;
        } catch (a) {
          c("FBLogger")("service_worker")
            .catching(a)
            .mustfix("Failed to preload page");
          return { response: null, failReason: t("PRELOAD_ERROR_THROWN") };
        }
        if (!e) {
          c("FBLogger")("service_worker").warn(
            "Got no response when preloading page"
          );
          return { response: null, failReason: t("PRELOAD_NO_RESPONSE") };
        }
        return yield j(e, b);
      });
      return m.apply(this, arguments);
    }
    function e(a, b) {
      return n.apply(this, arguments);
    }
    function n() {
      n = b("asyncToGeneratorRuntime").asyncToGenerator(function* (b, c) {
        b = h(b.request.url);
        var e = {},
          f = d("ServiceWorkerVersion").getCurrentRev();
        e[d("ServiceWorkerConslidatedHeader").getKey("SW_SVN")] = f;
        e[d("ServiceWorkerConslidatedHeader").getKey("SW_BACKGROUND_WORK")] = 1;
        e[d("ServiceWorkerConslidatedHeader").getKey("SW_PARTIAL_CACHE")] = c;
        e[d("ServiceWorkerConslidatedHeader").getKey("SW_ROUTES")] = d(
          "ServiceWorkerRoutes"
        ).getRoutesKey();
        b.headers.set(
          d("ServiceWorkerConslidatedHeader").getHeaderName(),
          JSON.stringify(e)
        );
        f = yield a.fetch(b);
        c = yield j(f, {});
        c.failReason &&
          d("ServiceWorkerEventLogger").log(
            "fetchCacheResponse fail reason: " + i(c.failReason)
          );
        return c.response;
      });
      return n.apply(this, arguments);
    }
    function f(a) {
      return o.apply(this, arguments);
    }
    function o() {
      o = b("asyncToGeneratorRuntime").asyncToGenerator(function* (b) {
        var c = h(b.request.url);
        c.headers.set(
          d("ServiceWorkerConslidatedHeader").getHeaderName(),
          JSON.stringify(b.fetchHeader)
        );
        d("Artillery4SW").informNavigateRequestEvent(
          b.id,
          d("ServiceWorkerProfilerTypes").FetchTiming.NETWORK_REQUEST_START
        );
        c = yield a.fetch(c);
        d("Artillery4SW").informNavigateRequestEvent(
          b.id,
          d("ServiceWorkerProfilerTypes").FetchTiming.NETWORK_RESPONSE_START
        );
        c = yield j(c, { hasCacheContent: !!b.cachedEFPageContent });
        c.failReason &&
          d("ServiceWorkerEventLogger").log(
            "fetchDynamicResponse fail reason: " + i(c.failReason)
          );
        return c;
      });
      return o.apply(this, arguments);
    }
    function p(a) {
      return q.apply(this, arguments);
    }
    function q() {
      q = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        a = yield l(a.preloadResponse, {
          hasCacheContent: !!a.cachedEFPageContent,
        });
        a.failReason &&
          d("ServiceWorkerEventLogger").log(
            "extractPreloadResponse fail reason: " + i(a.failReason)
          );
        return a;
      });
      return q.apply(this, arguments);
    }
    function r(a, b) {
      return s.apply(this, arguments);
    }
    function s() {
      s = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b) {
        a = yield l(a, {
          skipRevCheck: !0,
          redirectAllowed: b.redirectAllowed,
        });
        a.failReason &&
          d("ServiceWorkerEventLogger").log(
            "extractNoCachePreloadResponse fail reason: " + i(a.failReason)
          );
        return a;
      });
      return s.apply(this, arguments);
    }
    function t(a) {
      var b = d("ServiceWorkerServerData").getData(
        "ResourceCacheData",
        "failReasons",
        {}
      );
      return b && typeof b === "object" && b[a] && typeof b[a] === "number"
        ? b[a]
        : 0;
    }
    function u(a, b) {
      return v.apply(this, arguments);
    }
    function v() {
      v = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b) {
        b = yield j(a, b);
        if (b.failReason !== null)
          return {
            response: null,
            failReason: b.failReason,
            failReasonText: i(Number(b.failReason)),
          };
        else return { response: a, failReason: null, failReasonText: null };
      });
      return v.apply(this, arguments);
    }
    g.fetchCacheResponseForInstall = e;
    g.fetchDynamicResponse = f;
    g.extractPreloadResponse = p;
    g.extractNoCachePreloadResponse = r;
    g.getFailReason = t;
    g.verifyOrFailServerResponse = u;
  },
  98
);
__d(
  "ServiceWorkerNavPreload",
  [
    "ForcedNavigateToRequest",
    "ServiceWorkerCacheResponse",
    "ServiceWorkerEventLogger",
    "ServiceWorkerFetchPage",
    "asyncToGeneratorRuntime",
  ],
  function (a, b, c, d, e, f, g) {
    function h(a, b) {
      a = d("ForcedNavigateToRequest").enqueueResponse(a.request.url, null, b);
      return new Response("", { status: 307, headers: { Location: a } });
    }
    function i(a) {
      return j.apply(this, arguments);
    }
    function j() {
      j = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        var b = yield d("ServiceWorkerFetchPage").extractNoCachePreloadResponse(
          a.preloadResponse,
          { redirectAllowed: !0 }
        );
        if (!b.response) {
          d("ServiceWorkerEventLogger").log(
            "NAV PRELOAD: No response, refresh page"
          );
          return { response: h(a, b.failReason ? b.failReason : 0) };
        }
        b = b.response;
        var c = d("ServiceWorkerCacheResponse").getResponseTypes();
        c = c.NO_CACHE;
        var e = d("ServiceWorkerCacheResponse").getResponseHeaderName();
        e = b.headers.get(e);
        if (e && e !== String(c)) {
          d("ServiceWorkerEventLogger").log(
            'NAV PRELOAD: Invalid response type, refresh page: "' + e + '"'
          );
          return {
            response: h(
              a,
              d("ServiceWorkerFetchPage").getFailReason(
                "PRELOADNAV_INVALID_RESPONSE_TYPE"
              )
            ),
          };
        }
        return { response: b };
      });
      return j.apply(this, arguments);
    }
    function a(a) {
      return !a.preloadResponse ? null : i(a);
    }
    g.fetchHandler = a;
  },
  98
);
__d(
  "ServiceWorkerFetchEvent",
  [
    "ForcedNavigateToRequest",
    "Promise",
    "ServiceWorkerEventLogger",
    "ServiceWorkerNavPreload",
    "ServiceWorkerPreload",
    "ServiceWorkerRoutes",
    "URL",
    "asyncToGeneratorRuntime",
  ],
  function (a, b, c, d, e, f, g) {
    var h = null,
      i = null;
    function j(a) {
      return k.apply(this, arguments);
    }
    function k() {
      k = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        a = yield a;
        return a.response instanceof b("Promise")
          ? yield a.response
          : a.response;
      });
      return k.apply(this, arguments);
    }
    function l(a) {
      return m.apply(this, arguments);
    }
    function m() {
      m = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        a = yield a;
        a.waitUntil && (yield a.waitUntil);
      });
      return m.apply(this, arguments);
    }
    function n(a, c) {
      c instanceof b("Promise")
        ? (a.respondWith(j(c)), a.waitUntil(l(c)))
        : (a.respondWith(c.response), c.waitUntil && a.waitUntil(c.waitUntil));
    }
    function a() {
      return !!(h || i);
    }
    function e(a) {
      if (d("ServiceWorkerRoutes").shouldBypassFetch(a.request)) return;
      var b = null,
        e = new (c("URL"))(a.request.url);
      if (e.searchParams.has("sw_fnr_id")) {
        d("ServiceWorkerEventLogger").log("Loading custom redirect from cache");
        b = d("ForcedNavigateToRequest").responseToFetch(
          a,
          e.searchParams.get("sw_fnr_id")
        );
        if (b) {
          n(a, b);
          return;
        }
        if (b === null) return;
      }
      if (a.request.mode === "navigate") {
        if (a.request.method !== "GET") return;
        h && (b = h(a));
        !b &&
          a.preloadResponse &&
          d("ServiceWorkerPreload").isEnabled() &&
          (b = d("ServiceWorkerNavPreload").fetchHandler(a));
      } else i && (b = i(a));
      if (b) {
        n(a, b);
        return;
      }
    }
    function f(a) {
      if (h) throw new Error("Navigate fetch handler already registered.");
      h = a;
    }
    function o(a) {
      if (i) throw new Error("Resource fetch handler already registered.");
      i = a;
    }
    g.hasFetchHandler = a;
    g.handleEvent = e;
    g.setNavigateFetchHandler = f;
    g.setResourceFetchHandler = o;
  },
  98
);
__d(
  "ServiceWorkerInstallEvent",
  [
    "Promise",
    "ServiceWorkerAsyncStorage",
    "ServiceWorkerEventLogger",
    "ServiceWorkerMessage",
    "ServiceWorkerQuietError",
    "ServiceWorkerVersion",
    "asyncToGeneratorRuntime",
    "genClientWindows",
    "promiseDone",
  ],
  function (a, b, c, d, e, f, g) {
    var h = "sw_version",
      i = [];
    function a(a) {
      return j.apply(this, arguments);
    }
    function j() {
      j = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        a = yield d("ServiceWorkerAsyncStorage").getItem(h);
        a = a && typeof a.version === "number" ? a.version : -2;
        var e = d("ServiceWorkerVersion").getCurrentRev();
        if (a > e)
          throw new (c("ServiceWorkerQuietError"))(
            "Service workers can only progress forward."
          );
        yield d("ServiceWorkerAsyncStorage").setItem(h, { version: e });
        d("ServiceWorkerEventLogger").log("Installing version " + e);
        try {
          yield b("Promise").all(
            i.map(function (a) {
              return a();
            })
          );
        } catch (a) {
          c("promiseDone")(
            c("genClientWindows")({ includeUncontrolled: !0 }),
            function (b) {
              for (var d = 0; d < b.length; d++) {
                var e = new (c("ServiceWorkerMessage"))(
                  "ServiceWorkerInstallError"
                );
                e.sendTo(b[d]);
              }
              throw a;
            }
          );
        }
        self.skipWaiting();
      });
      return j.apply(this, arguments);
    }
    function e(a) {
      i.push(a);
    }
    g.handleEvent = a;
    g.addInstallFunction = e;
  },
  98
);
__d(
  "ServiceWorkerNavigateFetchEvent",
  ["ServiceWorkerEventLogger"],
  function (a, b, c, d, e, f, g) {
    var h = [];
    function a(a) {
      for (var b = 0; b < h.length; b++)
        if (h[b].canHandle(a)) {
          d("ServiceWorkerEventLogger").log("SW: fetch event intercepted");
          return h[b].fetch(a);
        }
      return null;
    }
    function b(a) {
      h.push(a);
    }
    function c() {
      return h.length > 0;
    }
    g.fetch = a;
    g.register = b;
    g.hasHandlers = c;
  },
  98
);
__d(
  "CommunityMessagingPushEventUtils",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = Object.freeze({
      MESSENGER_COMMUNITY_ADMIN_DIRECT_INVITE_GENERIC:
        "messenger_community_admin_direct_invite_generic",
      MESSENGER_COMMUNITY_AUDIO_ROOM_GENERIC:
        "messenger_community_audio_room_generic",
      MESSENGER_COMMUNITY_BROADCAST_CHAT_FIRST_MESSAGE:
        "messenger_community_broadcast_chat_first_message",
      MESSENGER_COMMUNITY_CHAT: "messenger_community_chat",
      MESSENGER_COMMUNITY_CHAT_ADMIN: "messenger_community_chat:ADMIN",
      MESSENGER_COMMUNITY_CHAT_ALL: "messenger_community_chat:ALL",
      MESSENGER_COMMUNITY_CHAT_CREATION: "messenger_community_channel_creation",
      MESSENGER_COMMUNITY_CHAT_DYNAMIC_BATCH:
        "messenger_community_chat_dynamic:BATCH",
      MESSENGER_COMMUNITY_CHAT_DYNAMIC_PREVIEW:
        "messenger_community_chat_dynamic:PREVIEW",
      MESSENGER_COMMUNITY_CHAT_FRIEND: "messenger_community_chat:FRIEND",
      MESSENGER_COMMUNITY_CHAT_JOIN_REQUEST_APPROVED:
        "messenger_community_chat_join_request_approved",
      MESSENGER_COMMUNITY_CHAT_MENTIONS_AND_REPLIES:
        "messenger_community_chat_mentions_and_replies",
      MESSENGER_COMMUNITY_DIGEST: "messenger_community_digest",
      MESSENGER_COMMUNITY_EPHEMERAL_STATUS_BADGE_EARNED:
        "messenger_community_ephemeral_status_badge_earned",
      MESSENGER_COMMUNITY_GIF: "messenger_community_gif_attachment",
      MESSENGER_COMMUNITY_LEVEL_DIRECT_INVITE:
        "messenger_community_level_direct_invite_v2",
      MESSENGER_COMMUNITY_MEMBER_CHAT_APPROVED:
        "messenger_community_member_chat_approved",
      MESSENGER_COMMUNITY_MEMBER_REQUEST: "messenger_community_member_request",
      MESSENGER_COMMUNITY_OR_CHANNEL_INVITE_LINK:
        "msgr_cm_and_channel_invite_link_join",
      MESSENGER_COMMUNITY_PAGE_CHANNEL_CREATION:
        "messenger_community_page_channel_creation",
      MESSENGER_COMMUNITY_PAGE_CHAT: "messenger_community_page_chat",
      MESSENGER_COMMUNITY_PAGE_DIRECT_INVITE:
        "messenger_community_page_direct_invite",
      MESSENGER_COMMUNITY_PHOTO: "messenger_community_photo",
      MESSENGER_COMMUNITY_REACTION: "messenger_community_reaction",
      MESSENGER_COMMUNITY_RECALL_MESSAGE: "messenger_community_recall_message",
      MESSENGER_COMMUNITY_RECALL_MESSAGE_EXTRA:
        "messenger_community_recall_message_extra",
      MESSENGER_COMMUNITY_STICKER: "messenger_community_sticker_attachment",
      MESSENGER_COMMUNITY_VIDEO: "messenger_community_video",
      MESSENGER_COMMUNITY_VOICE_MESSAGE: "messenger_community_voice_message",
      MESSENGER_COMMUNITY_DEFAULT_GENERAL_CHAT:
        "messenger_community_default_general_chat",
    });
    function h(a) {
      var b = g;
      switch (a) {
        case b.MESSENGER_COMMUNITY_CHAT:
        case b.MESSENGER_COMMUNITY_CHAT_MENTIONS_AND_REPLIES:
          return !0;
      }
      return !1;
    }
    function a(a) {
      return Object.values(g).includes(a);
    }
    function b(a) {
      return h(a);
    }
    f.isPushTypeCMMessengerType = a;
    f.shouldShowCMNotification = b;
  },
  66
);
__d(
  "getHostname",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a() {
      var a;
      return (a = self) == null
        ? void 0
        : (a = a.location) == null
        ? void 0
        : a.hostname;
    }
    f["default"] = a;
  },
  66
);
__d(
  "IsMessenger",
  ["FBLogger", "getHostname"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = /(^|\.)messenger\.com$/;
    function a() {
      var a;
      try {
        a = c("getHostname")();
      } catch (a) {
        c("FBLogger")("service_worker")
          .catching(a)
          .mustfix("Failed to get service workers hostname");
      }
      return a != null ? h.test(a) : !1;
    }
    g.isMessenger = a;
  },
  98
);
__d(
  "genClientWindow",
  ["asyncToGeneratorRuntime", "genClientWindows"],
  function (a, b, c, d, e, f, g) {
    function a(a) {
      return h.apply(this, arguments);
    }
    function h() {
      h = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        a === void 0 && (a = {});
        a = yield c("genClientWindows")(a);
        for (var b of a) if (b.visibilityState === "visible") return b;
        return (b = a[0]) != null ? b : null;
      });
      return h.apply(this, arguments);
    }
    g["default"] = a;
  },
  98
);
__d(
  "ServiceWorkerNotificationClickEvent",
  [
    "BrowserPushCommands",
    "CommunityMessagingPushEventUtils",
    "FBLogger",
    "IsMessenger",
    "Promise",
    "ServiceWorkerMessage",
    "ServiceWorkerRequest",
    "asyncToGeneratorRuntime",
    "clearTimeout",
    "genClientWindow",
    "setTimeout",
  ],
  function (a, b, c, d, e, f, g) {
    var h = 800;
    function i(a, b) {
      var c,
        d = new URL(b.url);
      if (a.startsWith("/")) {
        c = new URL(a, d);
        var e = new URLSearchParams(d.search),
          f = new URLSearchParams(c.search);
        for (e of e) {
          var g = e[0],
            h = e[1];
          /^qe\[.+\]$/.test(g) && f.set(g, h);
        }
        c.search = f.toString();
      } else c = new URL(a);
      g = d.pathname.replace(/\/$/, "");
      h = c.pathname.replace(/\/$/, "");
      if (g === h) return;
      return b.navigate(c.toString());
    }
    function j(a) {
      return k.apply(this, arguments);
    }
    function k() {
      k = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        var b = yield c("genClientWindow")({ includeUncontrolled: !0 });
        if (b)
          if (d("IsMessenger").isMessenger()) {
            var e = yield q(b);
            if (e) {
              b.focused || (yield b.focus());
              try {
                yield i(a, b);
                return;
              } catch (b) {
                c("FBLogger")("service_worker")
                  .catching(b)
                  .mustfix("Failed to navigate client to %s", a);
              }
            }
          } else {
            e = yield r(b, a);
            if (e) {
              b.focus();
              return;
            }
          }
        yield l(a);
      });
      return k.apply(this, arguments);
    }
    function l(a) {
      return m.apply(this, arguments);
    }
    function m() {
      m = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        a = yield self.clients.openWindow(a);
        if (a && a.focus)
          try {
            yield a.focus();
          } catch (a) {}
      });
      return m.apply(this, arguments);
    }
    function n(a, d) {
      return new (b("Promise"))(function (b) {
        return c("setTimeout")(function () {
          return b(a);
        }, d);
      });
    }
    function o(a) {
      return new (b("Promise"))(function (b) {
        var d = new (c("ServiceWorkerMessage"))(
          c("BrowserPushCommands").SHOULD_REUSE_M_DOT_COM_TAB,
          null,
          function (a) {
            a = a.data;
            if (a == null || typeof a !== "object") return;
            var d = a.command;
            a = a.value;
            d ===
              c("BrowserPushCommands").SHOULD_REUSE_M_DOT_COM_TAB_RESPONSE &&
              b(!!a);
          }
        );
        d.sendTo(a);
      });
    }
    var p = 1e3;
    function q(a) {
      return b("Promise").race([n(!1, p), o(a)]);
    }
    function r(a, d) {
      var e = -1;
      return new (b("Promise"))(function (b, f) {
        e = c("setTimeout")(function () {
          b(!1);
        }, h);
        f = new (c("ServiceWorkerMessage"))(
          c("BrowserPushCommands").REDIRECT,
          { uri: d },
          function (a) {
            if (a.origin !== "") return;
            a = a.data;
            if (a == null || typeof a !== "object") return;
            var d = a.command;
            a = a.success;
            d === c("BrowserPushCommands").ACK && b(!!a);
          }
        );
        f.sendTo(a);
      })["finally"](function () {
        c("clearTimeout")(e);
      });
    }
    function s(a, b) {
      for (b of b) {
        var c = b.action,
          e = b.url,
          f = b.ping;
        if (c !== a || e == null) continue;
        return f != null && f ? d("ServiceWorkerRequest").genFetchUri(e) : j(e);
      }
    }
    function t(a) {
      var b,
        c,
        e = "/";
      b = (b = (b = a.data) == null ? void 0 : b.uri) != null ? b : "/";
      var f = /\/?fbid=(\d+)/;
      if (b == null) return e;
      c = (c = a.data) == null ? void 0 : c.type;
      if (
        typeof c === "string" &&
        d("CommunityMessagingPushEventUtils").isPushTypeCMMessengerType(c)
      ) {
        a = (c = a.data) == null ? void 0 : c.params;
        if (typeof a !== "object" || a == null) return e;
        c = a.c_i;
        a = a.tid;
        return c == null || a == null
          ? e
          : d("IsMessenger").isMessenger()
          ? "/c/" + c + "/t/" + a
          : "messages/c/" + c + "/t/" + a;
      }
      if (d("IsMessenger").isMessenger()) {
        c = b.match(f);
        return c != null && c.length > 1 ? "/t/" + c[1] : e;
      }
      return b;
    }
    function a(a) {
      var c = a.notification;
      if (!c) return b("Promise").resolve();
      c == null ? void 0 : c.close();
      var d = a.action;
      if (!d) {
        d = t(c);
        return j(String(d));
      }
      c = [].concat(
        c == null ? void 0 : (d = c.data) == null ? void 0 : d.actions
      );
      return s(String(a.action), c);
    }
    g.handleEvent = a;
  },
  98
);
__d(
  "ServiceWorkerNotificationCloseEvent",
  [
    "ServiceWorkerRequest",
    "ServiceWorkerServerData",
    "asyncToGeneratorRuntime",
  ],
  function (a, b, c, d, e, f, g) {
    var h = "/notifications/client/push/dismiss/";
    function a(a) {
      return i.apply(this, arguments);
    }
    function i() {
      i = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        var b = new Map();
        b.set(
          "appid",
          d("ServiceWorkerServerData").getData(
            "GenericNotificationData",
            "appid",
            0
          )
        );
        if (a.notification && a.notification.data) {
          a = a.notification.data;
          Object.prototype.hasOwnProperty.call(a, "id") &&
            b.set("notif_id", a.id);
          Object.prototype.hasOwnProperty.call(a, "ndid") &&
            b.set("ndid", a.ndid);
          Object.prototype.hasOwnProperty.call(a, "notif_type") &&
            b.set("notif_type", a.notif_type);
        }
        d("ServiceWorkerRequest").genSendDataToUri(h, b);
      });
      return i.apply(this, arguments);
    }
    g.handleEvent = a;
  },
  98
);
__d(
  "uuidv4",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a() {
      var a;
      a =
        (a = self) == null
          ? void 0
          : (a = a.crypto) == null
          ? void 0
          : a.randomUUID;
      return typeof a === "function"
        ? self.crypto.randomUUID()
        : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (a) {
            var b = (Math.random() * 16) | 0;
            a = a === "x" ? b : (b & 3) | 8;
            return a.toString(16);
          });
    }
    f["default"] = a;
  },
  66
);
__d(
  "ServiceWorkerPaymentHandler",
  [
    "FBLogger",
    "Promise",
    "ServiceWorkerMessage",
    "ServiceWorkerServerData",
    "uuidv4",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = function () {
        var a = this;
        this.promise = new (b("Promise"))(function (b, c) {
          (a.resolve = b), (a.reject = c);
        });
      },
      i = null;
    function a(a) {
      if (!a.respondWith) return !1;
      var b = d("ServiceWorkerServerData").getData(
        "BrowserPaymentHandler",
        "enabled",
        !1
      );
      if (b !== !0) {
        a.respondWith(!1);
        return !1;
      }
      a.methodData[0].data ||
        c("FBLogger")("canmakepayment").info("use default data");
      a.respondWith(!0);
      return !0;
    }
    function e(a) {
      var b,
        d,
        e,
        f = new h();
      b = (b = a.methodData[0].data) == null ? void 0 : b.payeeID;
      d = (d = a.paymentRequestId) != null ? d : c("uuidv4")();
      var g =
        ((e = { amount: a.total.value, currency: a.total.currency }),
        (e["display_items[Items from " + a.topOrigin + "]"] = a.total.value),
        (e.merchant_domain = a.topOrigin),
        (e.payment_request_id = d),
        (e.supported_method = a.methodData[0].supportedMethods),
        (e.num_method_data = a.methodData.length),
        (e.payee_id = b),
        e);
      d =
        self.location.origin +
        "/payments/browserpay?" +
        Object.keys(g)
          .filter(function (a) {
            return g[a] != null;
          })
          .map(function (a) {
            return encodeURIComponent(a) + "=" + encodeURIComponent(g[a]);
          })
          .join("&");
      a.respondWith &&
        (a.respondWith(f.promise),
        a.openWindow(d)["catch"](function (a) {
          f.reject(a);
        }));
      i !== null && i.remove();
      i = c("ServiceWorkerMessage").addCommandHandler(
        "payment_response_ready",
        function (a) {
          a.data == null
            ? f &&
              f.reject("payment fail message is retrieved from checkout module")
            : f && f.resolve(a.data);
        }
      );
    }
    g.handleCanMakePaymentEvent = a;
    g.handlePaymentRequestEvent = e;
  },
  98
);
__d(
  "ServiceWorkerPeriodicSyncEvent",
  ["ServiceWorkerWidgetEvent", "asyncToGeneratorRuntime"],
  function (a, b, c, d, e, f, g) {
    function a(a, b) {
      return self.registration.periodicSync.getTags().then(function (c) {
        if (!c.includes(a)) {
          self.registration.periodicSync.register(a, { minInterval: b });
          return !0;
        }
        return !1;
      });
    }
    function c(a) {
      self.registration.periodicSync.unregister(a);
    }
    function e(a) {
      return h.apply(this, arguments);
    }
    function h() {
      h = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        a = (a = a.tag) != null ? a : "";
        if (a.includes("widget"))
          return d("ServiceWorkerWidgetEvent").syncWidget(a);
      });
      return h.apply(this, arguments);
    }
    g.registerTagIfDoesntExist = a;
    g.unregisterTag = c;
    g.handleEvent = e;
  },
  98
);
__d(
  "AdaptiveCardTemplates",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      return (
        '{\n    "type": "Container",\n    "$when": "${$host.widgetSize==\\"' +
        b +
        '\\"}",\n    "spacing": "' +
        (b === "small" ? "small" : "medium") +
        '",\n    "items": [\n      {\n        "type": "Container",\n        "items": [\n            {\n                "type": "ColumnSet",\n                "columns": [\n                    {\n                        "type": "Column",\n                        "items": [\n                            {\n                                "type": "Image",\n                                "url": "${imageUrl}",\n                                "width": "' +
        (b === "small" ? "50px" : "55px") +
        '",\n                                "height": "' +
        (b === "small" ? "50px" : "55px") +
        '",\n                                "style": "Person"\n                            }\n                        ],\n                        "width": "auto",\n                        "verticalContentAlignment": "Center"\n                    },\n                    {\n                        "type": "Column",\n                        "items": [\n                            {\n                                "type": "TextBlock",\n                                "wrap": true,\n                                "text": "${message}",\n                                "maxLines": ' +
        (b !== "large" ? 2 : 3) +
        ',\n                                "size": "' +
        (b === "small" ? "small" : "default") +
        '}"\n                            },\n                            {\n                                "type": "TextBlock",\n                                "text": "\u25cf ${ago}",\n                                "color": "Accent",\n                                "spacing": "None",\n                                "size": "' +
        (b === "small" ? "small" : "default") +
        '}"\n                            }\n                        ],\n                        "width": "stretch"\n                    }\n                ]\n            }\n        ],\n        "selectAction": {\n          "type": "Action.Execute",\n          "verb": "notificationClick",\n          "data": {\n              "url": "${launchUrl}",\n              "tracking": "${tracking}"\n          }\n        },\n        "$data": "${notifications}",\n        "$when": "${$index < ' +
        a +
        '}"\n      }\n    ]\n  }'
      );
    }
    function g() {
      return '{\n    "type": "Container",\n    "items": [\n        {\n            "type": "ColumnSet",\n            "columns": [\n                {\n                    "type": "Column",\n                    "items": [\n                        {\n                            "type": "TextBlock",\n                            "text": "${topNotifications}",\n                            "size": "medium",\n                            "height": "stretch"\n                        }\n                    ],\n                    "width": 80\n                },\n                {\n                  "type": "Column",\n                  "items": [\n                      {\n                          "type": "TextBlock",\n                          "text": "${seeAll}",\n                          "size": "small",\n                          "color": "Accent"\n                      }\n                  ],\n                  "horizontalAlignment": "Right",\n                  "verticalContentAlignment": "Bottom",\n                  "selectAction": {\n                    "type": "Action.Execute",\n                    "verb": "openNotificationsPage"\n                  }\n                }\n            ],\n            "spacing": "None"\n        }\n    ]\n  }';
    }
    d =
      '{\n    "type": "AdaptiveCard",\n    "body": [\n        ' +
      g() +
      ",\n        " +
      a(1, "small") +
      ",\n        " +
      a(3, "medium") +
      ",\n        " +
      a(4, "large") +
      '\n    ],\n    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",\n    "version": "1.6"\n}\n';
    function h(a) {
      return (
        '{\n    "type": "Container",\n    "verticalContentAlignment": "center",\n    "$when": "${$host.widgetSize==\\"' +
        a +
        '\\"}",\n    "height": "stretch",\n    "items": [\n      {\n        "type": "TextBlock",\n        "size": "Medium",\n        "weight": "Bolder",\n        "text": "${caughtup_header}",\n        "horizontalAlignment": "Center",\n        "wrap": true\n      }\n        ' +
        (a !== "small"
          ? ',{\n          "type": "TextBlock",\n          "text": "${caughtup_description}",\n          "wrap": true,\n          "horizontalAlignment": "Center"\n      }'
          : "") +
        "\n    ]\n  }"
      );
    }
    function b(a) {
      return (
        '{\n    "type": "AdaptiveCard",\n    "body": [\n        ' +
        (a != null ? g() + "," : "") +
        "\n        " +
        h("small") +
        ",\n        " +
        h("medium") +
        ",\n        " +
        h("large") +
        '\n    ],\n    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",\n    "version": "1.6"\n  }'
      );
    }
    function c(a) {
      return (
        '{\n    "type": "Container",\n    "verticalContentAlignment": "center",\n    "$when": "${$host.widgetSize==\\"' +
        a +
        '\\"}",\n    "height": "stretch",\n    "items": [\n      {\n        "type": "TextBlock",\n        "size": "Medium",\n        "weight": "Bolder",\n        "text": "${login_header}",\n        "horizontalAlignment": "Center"\n      },\n        ' +
        (a !== "small"
          ? '{\n          "type": "TextBlock",\n          "text": "${login_description}",\n          "wrap": true,\n          "horizontalAlignment": "Center"\n      },'
          : "") +
        '\n        {\n          "type": "ActionSet",\n          "actions": [\n              {\n                "type": "Action.OpenUrl",\n                "title": "${login_button}",\n                "url": "https://www.facebook.com/?ref=homescreenpwa"\n              }\n          ],\n          "horizontalAlignment": "Center"\n      }\n    ]\n  }'
      );
    }
    e =
      '{\n  "type": "AdaptiveCard",\n  "body": [\n    ' +
      c("small") +
      ",\n    " +
      c("medium") +
      ",\n    " +
      c("large") +
      '\n  ],\n  "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",\n  "version": "1.5"\n}';
    f.NOTIFICATION_TEMPLATE = d;
    f.getNoNotificationsTemplate = b;
    f.LOGGED_OUT_TEMPLATE = e;
  },
  66
);
__d(
  "FBWidgetEvents",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      WIDGET_REFRESH_STARTED: "widget_refresh_started",
      WIDGET_REFRESH_ENDED: "widget_refresh_ended",
      WIDGET_TAPPED: "widget_tapped",
      WIDGET_INSTALL: "widget_install",
      WIDGET_UNINSTALL: "widget_uninstall",
      WIDGET_IMPRESSION: "widget_impression",
      WIDGET_SERVER_LOAD: "widget_server_load",
      WIDGET_HEARTBEAT: "widget_heartbeat",
    };
    b = a;
    f["default"] = b;
  },
  66
);
__d(
  "ServiceWorkerWidgetEvent",
  [
    "AdaptiveCardTemplates",
    "FBLogger",
    "FBWidgetEvents",
    "ServiceWorkerPeriodicSyncEvent",
    "ServiceWorkerRequest",
    "asyncToGeneratorRuntime",
    "genClientWindows",
  ],
  function (a, b, c, d, e, f, g) {
    var h = "2023-05-04",
      i = "/notifications/widgets/browser/client",
      j = "/notifications/widgets/browser/action",
      k = "/notifications/widgets/browser/text?version=" + h,
      l = "fb_widget",
      m = self.widgets,
      n = self.clients,
      o = !1;
    function a(a) {
      return p.apply(this, arguments);
    }
    function p() {
      p = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        var b = a.widget;
        switch (a.action) {
          case "widget-install":
            return q(a);
          case "widget-uninstall":
            L(b);
            return;
          case "notificationClick":
            return F(a);
          case "openNotificationsPage":
            return D();
          case "widget-resume":
          case "refresh":
            return z(b);
        }
      });
      return p.apply(this, arguments);
    }
    function e(a) {
      switch ((a = a.data) == null ? void 0 : a.command) {
        case "updateWidget":
          return x();
      }
    }
    function q(a) {
      return r.apply(this, arguments);
    }
    function r() {
      r = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        O(c("FBWidgetEvents").WIDGET_INSTALL);
        a = a.widget;
        yield z(a);
        yield K(a);
      });
      return r.apply(this, arguments);
    }
    function f(a) {
      return s.apply(this, arguments);
    }
    function s() {
      s = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        O(c("FBWidgetEvents").WIDGET_UNINSTALL);
        a = a.widget;
        yield L(a);
      });
      return s.apply(this, arguments);
    }
    function t() {
      return u.apply(this, arguments);
    }
    function u() {
      u = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        var a = yield d("ServiceWorkerRequest").genJsonFromUri(k);
        yield m.getByTag(l).then(function (b) {
          var c = {
            template: d("AdaptiveCardTemplates").LOGGED_OUT_TEMPLATE,
            data: JSON.stringify(a),
          };
          m.updateByTag(b.definition.tag, c);
        });
      });
      return u.apply(this, arguments);
    }
    function v(a) {
      return w.apply(this, arguments);
    }
    function w() {
      w = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        a = a.widget;
        yield z(a);
      });
      return w.apply(this, arguments);
    }
    function x() {
      return y.apply(this, arguments);
    }
    function y() {
      y = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        yield M(l);
      });
      return y.apply(this, arguments);
    }
    function z(a) {
      return A.apply(this, arguments);
    }
    function A() {
      A = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        try {
          yield B(a);
        } catch (a) {
          c("FBLogger")("widget_service_worker", "www_widget_logged_out")
            .catching(a)
            .info("User is logged out"),
            yield t();
        }
      });
      return A.apply(this, arguments);
    }
    function B(a) {
      return C.apply(this, arguments);
    }
    function C() {
      C = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        var b;
        if (o) return;
        o = !0;
        var e = {};
        try {
          O(c("FBWidgetEvents").WIDGET_REFRESH_STARTED), (e = yield J());
        } catch (a) {
          c("FBLogger")(
            "widget_service_worker",
            "www_widget_failed_notif_fetch"
          ).mustfix("Failed to fetch top notifications");
          throw a;
        } finally {
          o = !1;
        }
        b = ((b = e.widget_notifications) != null ? b : []).map(function (a) {
          a = a.notif;
          return {
            message: a.body.text,
            imageUrl: a.notif_image.uri,
            ago: a.creation_time_with_relative_text.relative_timestamp_text,
            launchUrl: a.permalink_uri,
            tracking: a.tracking,
          };
        });
        var f = e.header_text;
        e = e.see_all_text;
        if (b.length) {
          var g = {
            template: d("AdaptiveCardTemplates").NOTIFICATION_TEMPLATE,
            data: JSON.stringify({
              notifications: b,
              topNotifications: f || "",
              seeAll: e || "",
            }),
          };
          yield m.updateByTag(a.definition.tag, g);
        } else {
          g = yield d("ServiceWorkerRequest").genJsonFromUri(k);
          g.topNotifications = f || "";
          g.seeAll = e || "";
          e = {
            template: d("AdaptiveCardTemplates").getNoNotificationsTemplate(f),
            data: JSON.stringify(g),
          };
          yield m.updateByTag(a.definition.tag, e);
        }
        O(c("FBWidgetEvents").WIDGET_REFRESH_ENDED, null, {
          num_elements: b.length,
        });
      });
      return C.apply(this, arguments);
    }
    function D() {
      return E.apply(this, arguments);
    }
    function E() {
      E = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        yield H("https://www.facebook.com/notifications");
      });
      return E.apply(this, arguments);
    }
    function F(a) {
      return G.apply(this, arguments);
    }
    function G() {
      G = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        var b;
        b = a == null ? void 0 : (b = a.data) == null ? void 0 : b.json();
        var d = b == null ? void 0 : b.url;
        if (d == null) {
          c("FBLogger")(
            "widget_service_worker",
            "www_widget_nav_url_null"
          ).mustfix("Notif navigation URL is null");
          return;
        }
        yield H(d);
        d = b == null ? void 0 : b.tracking;
        d == null
          ? c("FBLogger")(
              "widget_service_worker",
              "www_widget_client_tracking_null"
            ).mustfix("Notif tracking string is null")
          : O(c("FBWidgetEvents").WIDGET_TAPPED, d);
        yield z(a.widget);
      });
      return G.apply(this, arguments);
    }
    function H(a) {
      return I.apply(this, arguments);
    }
    function I() {
      I = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        try {
          var b = yield c("genClientWindows")({ includeUncontrolled: !0 });
          b.length === 1 && b[0]
            ? yield b[0].focus().then(function (b) {
                return b.navigate(a);
              })
            : yield n.openWindow(a).then(function (a) {
                return a ? a.focus() : null;
              });
        } catch (a) {
          c("FBLogger")(
            "widget_service_worker",
            "www_widget_client_failed_openwindow"
          )
            .catching(a)
            .mustfix("Notif navigation URL failed to open window");
          throw a;
        }
      });
      return I.apply(this, arguments);
    }
    function J(a, b, c) {
      a === void 0 && (a = 5);
      b === void 0 && (b = "");
      c === void 0 && (c = 50);
      a = "?first=" + a + "&image_size=" + c + "&after=" + b + "&version=" + h;
      return d("ServiceWorkerRequest").genJsonFromUri(i + a);
    }
    function K(a) {
      "update" in a.definition &&
        d("ServiceWorkerPeriodicSyncEvent").registerTagIfDoesntExist(
          a.definition.tag,
          a.definition.update
        );
      return;
    }
    function L(a) {
      a.instances.length === 1 &&
        "update" in a.definition &&
        d("ServiceWorkerPeriodicSyncEvent").unregisterTag(a.definition.tag);
      return;
    }
    function M(a) {
      return N.apply(this, arguments);
    }
    function N() {
      N = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        if (m == null) return;
        yield m.getByTag(a).then(function (a) {
          var b = a == null ? void 0 : a.instances;
          (b == null ? void 0 : b.length) && z(a);
        });
      });
      return N.apply(this, arguments);
    }
    function O(a, b, c) {
      return P.apply(this, arguments);
    }
    function P() {
      P = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b, e) {
        var f = new Map();
        f.set("event", a);
        f.set(
          "extra_data",
          JSON.stringify(
            babelHelpers["extends"]({}, e, { service_worker_version: h })
          )
        );
        b != null && f.set("tracking", b);
        yield d("ServiceWorkerRequest")
          .fetchCSRFTokenAndPostData(j, f)
          .then(function (b) {
            return c("FBLogger")(
              "widget_service_worker",
              "www_widget_logged_event." + a
            ).info("Logged widget event %s", a);
          })
          ["catch"](function (b) {
            return c("FBLogger")(
              "widget_service_worker",
              "www_widget_failed_log_event." + a
            )
              .catching(b)
              .mustfix("Failed to log widget event %s", a);
          });
      });
      return P.apply(this, arguments);
    }
    g.handleEvent = a;
    g.handleWebEvent = e;
    g.handleInstall = q;
    g.handleUninstall = f;
    g.renderLoginScreen = t;
    g.handleResume = v;
    g.updateAllWidgets = x;
    g.syncWidget = M;
  },
  98
);
__d(
  "ServiceWorkerPushNavigateCache",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = 60 * 60 * 1e3,
      h = new Map(),
      i = {},
      j = {
        get: function (a) {
          return h.get(a);
        },
        set: function (a, b, c) {
          c === void 0 && (c = g),
            h.set(a, b),
            (i[a] = setTimeout(function () {
              j["delete"](a);
            }, c));
        },
        delete: function (a) {
          h["delete"](a), clearTimeout(i[a]), delete i[a];
        },
        has: function (a) {
          return h.has(a);
        },
      };
    e.exports = j;
  },
  null
);
__d(
  "ServiceWorkerPushEvent",
  [
    "CommunityMessagingPushEventUtils",
    "DTSG",
    "FBLogger",
    "IsMessenger",
    "MessengerNotificationReader",
    "Promise",
    "ServiceWorkerAsyncStorage",
    "ServiceWorkerBase",
    "ServiceWorkerPushNavigateCache",
    "ServiceWorkerRequest",
    "ServiceWorkerServerData",
    "asyncToGeneratorRuntime",
    "err",
    "genClientWindow",
    "promiseDone",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "/notifications/client/push/fetch?",
      i = "/notifications/client/push/event",
      j = "/notifications/client/push/delivered",
      k = "/notifications/client/push/not_displayed",
      l = "/notifications/client/push/badge",
      m = "last_time",
      n = 25e3,
      o = "generic_notif_count",
      p = "logged_out_push",
      q = "bump_event",
      r = "mids_visible",
      s = 0,
      t = null,
      u = [];
    function v(a, b) {
      return w.apply(this, arguments);
    }
    function w() {
      w = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b) {
        if (u[a]) return;
        u[a] = !0;
        yield D(
          "n",
          x(),
          d("ServiceWorkerServerData").getData(
            "GenericNotificationData",
            "dir",
            "ltr"
          ),
          b
        );
        z();
      });
      return w.apply(this, arguments);
    }
    function x() {
      return {
        title: d("ServiceWorkerServerData").getData(
          "GenericNotificationData",
          "title",
          "Facebook"
        ),
        message: d("ServiceWorkerServerData").getData(
          "GenericNotificationData",
          "message",
          "You have new notifications."
        ),
        pic: d("ServiceWorkerServerData").getData(
          "GenericNotificationData",
          "pic",
          "https://www.facebook.com/images/icons-large/fb-xl.png"
        ),
        uri: d("ServiceWorkerServerData").getData(
          "GenericNotificationData",
          "uri",
          "/notifications"
        ),
        badge: d("ServiceWorkerServerData").getData(
          "GenericNotificationData",
          "badge"
        ),
      };
    }
    function y() {
      return {
        title: d("ServiceWorkerServerData").getData(
          "GenericNotificationData",
          "title",
          "Messenger"
        ),
        message: d("ServiceWorkerServerData").getData(
          "GenericNotificationData",
          "message",
          "You have new notifications."
        ),
        pic: d("ServiceWorkerServerData").getData(
          "GenericNotificationData",
          "pic",
          "https://facebook.com/images/mercury/clients/messenger/rtc/messenger-blurple_logo.png"
        ),
        uri: d("ServiceWorkerServerData").getData(
          "GenericNotificationData",
          "uri",
          "/notifications"
        ),
        badge: d("ServiceWorkerServerData").getData(
          "GenericNotificationData",
          "badge"
        ),
      };
    }
    function z() {
      return A.apply(this, arguments);
    }
    function A() {
      A = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        var a = yield d("ServiceWorkerAsyncStorage").getItem(m);
        (!a || !a.generic_notif || !Number.isInteger(a.generic_notif)) &&
          (a = { last_sync: null, generic_notif: 0 });
        if (typeof a !== "object" || a === null) return;
        a.generic_notif++;
        d("ServiceWorkerAsyncStorage").setItem(m, a);
      });
      return A.apply(this, arguments);
    }
    function B(a) {
      return C.apply(this, arguments);
    }
    function C() {
      C = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        try {
          var b = new Request(a.uri, { credentials: "include" });
          b.headers.append("skip_impression_logging", "1");
          b = yield d("ServiceWorkerRequest").genFetchUri(b);
          var e = yield b.text();
          d("ServiceWorkerPushNavigateCache").set(b.url, e);
        } catch (b) {
          c("FBLogger")("service_worker")
            .catching(b)
            .mustfix("Failed to prefetch " + a.uri);
        }
      });
      return C.apply(this, arguments);
    }
    function D(a, b, c, d) {
      return E.apply(this, arguments);
    }
    function E() {
      E = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b, c, e) {
        b.prefetch && (yield B(b));
        var f = b.timestamp || Date.now();
        f.toString().length === 10 && (f *= 1e3);
        var g = d("ServiceWorkerServerData").getData(
            "MPushWorkerExperementationData",
            "use_default_badge",
            !1
          ),
          h = b.badge;
        g &&
          !h &&
          (h = d("ServiceWorkerServerData").getData(
            "MPushWorkerExperementationData",
            "default_badge",
            h
          ));
        return self.registration.showNotification(b.title, {
          actions: b.actions,
          body: b.message,
          icon: b.pic,
          badge: h,
          tag: a,
          dir: c,
          data: babelHelpers["extends"]({}, b, {
            timestamp: e,
            uri: b.uri,
            actions: b.actions,
            id: b.id || "",
            mid: b.mid || "",
            ndid: b.ndid || "",
            notif_type: b.notif_type || "",
          }),
          timestamp: f,
          renotify: !0,
        });
      });
      return E.apply(this, arguments);
    }
    function F(a) {
      var b = a.endpoint;
      "subscriptionId" in a &&
        !new RegExp("/" + a.subscriptionId + "$").test(b) &&
        (b += "/" + a.subscriptionId);
      return b;
    }
    function G(a) {
      return H.apply(this, arguments);
    }
    function H() {
      H = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        if (!a) throw c("err")("push subscription not found");
        a = h + "push_endpoint=" + encodeURIComponent(F(a)) + "&";
        var b = yield d("ServiceWorkerAsyncStorage").getItem(m),
          e = null;
        b && b.last_sync && (e = b.last_sync);
        e && (a = a + m + "=" + encodeURIComponent(e) + "&");
        b &&
          b.generic_notif &&
          (a = a + o + "=" + encodeURIComponent(b.generic_notif) + "&");
        e = d("ServiceWorkerServerData").getData("MLoggedOutPush", "enabled");
        e && (a = a + p + "=1&");
        if (self.registration.getNotifications) {
          b = yield self.registration.getNotifications();
          b.filter(function (a) {
            return a.data && a.data.mid;
          });
          e = b.map(function (a) {
            return a.data.mid;
          });
          e &&
            e.length > 0 &&
            (a = a + r + "=" + encodeURIComponent(e.join(",")) + "&");
        }
        Z() && (a = a + q + "=true&");
        return a;
      });
      return H.apply(this, arguments);
    }
    function I(a, b, c) {
      return J.apply(this, arguments);
    }
    function J() {
      J = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, e, f) {
        if (u[e]) return;
        if (a.unregister && a.unregister === !0) {
          yield d("ServiceWorkerBase").genUnregisterSelf();
          return;
        }
        if (!a.notifs || !Object.keys(a.notifs).length) {
          yield v(e, f.timeStamp);
          return;
        }
        u[e] = !0;
        e = { last_sync: a.time, generic_notif: 0 };
        d("ServiceWorkerAsyncStorage").setItem(m, e);
        e = a.dir;
        var g = [],
          h = null;
        for (var i in a.notifs)
          g.push(D(i, a.notifs[i], e, f.timeStamp)),
            a.notifs[i].update_token_params &&
              (h = a.notifs[i].update_token_params);
        yield b("Promise").race(g);
        h && c("promiseDone")(M(h));
      });
      return J.apply(this, arguments);
    }
    function K(a) {
      return L.apply(this, arguments);
    }
    function L() {
      L = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        if (self.registration.getNotifications) {
          var b = yield self.registration.getNotifications();
          b.map(function (b) {
            b.close &&
              b.data &&
              b.data.mid &&
              a.includes(b.data.mid) &&
              b.close();
          });
        }
      });
      return L.apply(this, arguments);
    }
    function M(a) {
      return N.apply(this, arguments);
    }
    function N() {
      N = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        var b = new Map();
        b.set("appid", a.data.appid).set("push_endpoint", a.data.push_endpoint);
        d("DTSG").setToken(a.csrf_token);
        yield d("ServiceWorkerRequest")
          .fetchCSRFTokenAndPostData(a.uri, b)
          ["catch"](function (b) {
            c("FBLogger")("service_worker")
              .catching(b)
              .warn(
                "failed to update token timestamp for " + a.data.push_endpoint
              );
          });
      });
      return N.apply(this, arguments);
    }
    function O(a, b) {
      return P.apply(this, arguments);
    }
    function P() {
      P = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, d) {
        var e = new (b("Promise"))(function (b, e) {
          self.setTimeout(function () {
            c("promiseDone")(v(d, a.timeStamp), b, e);
          }, n),
            c("promiseDone")(
              c("genClientWindow")({ focusedCheck: !0 }),
              function (f) {
                if (f) {
                  u[d] = !0;
                  b();
                  W(a, k);
                  return;
                }
                R();
                if (a.data && a.data.json) {
                  f = a.data.json();
                  if (f && f.type) {
                    U(a, f, d)
                      .then(b)
                      ["catch"](function (f) {
                        c("FBLogger")("service_worker")
                          .catching(f)
                          .mustfix(
                            "Failed to display notification. Showing backup instead"
                          ),
                          v(d, a.timeStamp).then(b)["catch"](e);
                      });
                    return;
                  }
                }
                Q(b, e, a, d);
              }
            );
        });
        yield e;
        s++;
        t = null;
      });
      return P.apply(this, arguments);
    }
    function Q(a, b, c, e) {
      self.registration.pushManager
        .getSubscription()
        .then(G)
        .then(d("ServiceWorkerRequest").genJsonFromUri)
        .then(function (a) {
          a.mids_to_remove && a.mids_to_remove.length && K(a.mids_to_remove);
          return I(a, e, c);
        })
        .then(a)
        ["catch"](function () {
          v(e, c.timeStamp).then(a)["catch"](b);
        });
    }
    function R() {
      var a = d("ServiceWorkerServerData").getData("WebAppBadge", "enabled");
      if (!a) return;
      self.registration.pushManager
        .getSubscription()
        .then(function (a) {
          a = l + "?push_endpoint=" + encodeURIComponent(F(a));
          return d("ServiceWorkerRequest").genJsonFromUri(a);
        })
        .then(function (a) {
          a = a.badge_count;
          navigator.setAppBadge && navigator.setAppBadge(a);
        })
        ["catch"](function (a) {
          c("FBLogger")("service_worker")
            .catching(a)
            .warn("failed to update app badge");
        });
    }
    function S(a) {
      return T.apply(this, arguments);
    }
    function T() {
      T = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        try {
          var b = yield d("MessengerNotificationReader").checkIsMuted();
          if (b) return !1;
          b = a.type;
          if (typeof b !== "string") return !1;
          return d(
            "CommunityMessagingPushEventUtils"
          ).isPushTypeCMMessengerType(b)
            ? d("CommunityMessagingPushEventUtils").shouldShowCMNotification(b)
            : b === "msg";
        } catch (a) {
          return !1;
        }
      });
      return T.apply(this, arguments);
    }
    function U(a, b, c) {
      return V.apply(this, arguments);
    }
    function V() {
      V = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b, c) {
        var e;
        d("IsMessenger").isMessenger() ? (e = y()) : (e = x());
        var f = d("ServiceWorkerServerData").getData(
            "GenericNotificationData",
            "use_notif_id_as_tag",
            !1
          ),
          g = "n";
        b.type && b.type === "messenger_remove_message" && (yield K([b.n]));
        f
          ? (b.i || b.t) && (g = b.i ? b.i : b.t)
          : b.type && (g = b.type === "msg" ? "m" : "n");
        u[c] = !0;
        f = yield S(b);
        c = !d("IsMessenger").isMessenger();
        if (c || f) {
          yield D(
            g,
            babelHelpers["extends"]({}, b, {
              title: b.title ? b.title : e.title,
              message: b.message ? b.message : e.message,
              actions: b.actions ? b.actions : [],
              pic: (f = (c = b.ppu) != null ? c : b.pic) != null ? f : e.pic,
              uri: b.href ? b.href : e.uri,
              ndid: b.d ? b.d : null,
              notif_type: b.type ? b.type : null,
              id: (c = (g = b.i) != null ? g : b.t) != null ? c : null,
              timestamp: b.time ? b.time : a.timeStamp,
              badge: b.badge,
              mid: b.n,
            }),
            d("ServiceWorkerServerData").getData(
              "GenericNotificationData",
              "dir",
              "ltr"
            ),
            a.timeStamp
          );
          W(a, j);
        }
      });
      return V.apply(this, arguments);
    }
    function W(a, b) {
      return X.apply(this, arguments);
    }
    function X() {
      X = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b) {
        var c = new Map();
        c.set(
          "appid",
          d("ServiceWorkerServerData").getData(
            "GenericNotificationData",
            "appid",
            0
          )
        );
        c.set("client_time", Date.now());
        if (a.data && a.data.json) {
          a = a.data.json();
          Object.prototype.hasOwnProperty.call(a, "i") &&
            c.set("notif_id", a.i);
          Object.prototype.hasOwnProperty.call(a, "d") && c.set("ndid", a.d);
          Object.prototype.hasOwnProperty.call(a, "type") &&
            c.set("notif_type", a.type);
          if (a.params) {
            a = a.params;
            Object.prototype.hasOwnProperty.call(a, "a") &&
              c.set("actor_id", a.a);
            Object.prototype.hasOwnProperty.call(a, "u") &&
              c.set("recipient_id", a.u);
            Object.prototype.hasOwnProperty.call(a, "ei") &&
              c.set("event_id", a.ei);
            Object.prototype.hasOwnProperty.call(a, "ori") &&
              c.set("asset_id", a.ori);
          }
        }
        Z() && c.set(q, !0);
        a = yield d("ServiceWorkerRequest").genSendDataToUri(b, c);
        a.unregister &&
          a.unregister === !0 &&
          (yield d("ServiceWorkerBase").genUnregisterSelf());
      });
      return X.apply(this, arguments);
    }
    function aa(a, b) {
      return Y.apply(this, arguments);
    }
    function Y() {
      Y = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b) {
        if (self.registration.getNotifications) {
          var c = yield self.registration.getNotifications();
          c.map(function (c) {
            c.close &&
              ((!a && !b) ||
                (c.tag === a &&
                  c.data &&
                  c.data.timestamp &&
                  c.data.timestamp === b)) &&
              c.close();
          });
        }
      });
      return Y.apply(this, arguments);
    }
    function Z() {
      return !!d("ServiceWorkerServerData").getData(
        "GenericNotificationData",
        "should_log_event_lifecycle",
        !1
      );
    }
    function ba() {
      Z() && c("promiseDone")(d("ServiceWorkerRequest").genFetchUriBeacon(i));
    }
    function a(a) {
      ba();
      t === null && ((u[s] = !1), (t = O(a, s)));
      return t;
    }
    function e(a) {
      return $.apply(this, arguments);
    }
    function $() {
      $ = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        if (t !== null) {
          yield t;
          a = yield c("genClientWindow")({ focusedCheck: !0 });
          if (!a) return;
        }
        yield aa();
      });
      return $.apply(this, arguments);
    }
    function f(a) {
      return d("ServiceWorkerPushNavigateCache").has(a);
    }
    function ca(a) {
      try {
        var b = d("ServiceWorkerPushNavigateCache").get(a);
        d("ServiceWorkerPushNavigateCache")["delete"](a);
        return b;
      } catch (b) {
        c("FBLogger")("service_worker")
          .catching(b)
          .mustfix("Failed to get cache for " + a);
      }
      return null;
    }
    g.handleEvent = a;
    g.genWindowBecameVisible = e;
    g.hasCachedResponse = f;
    g.getAndRemoveCachedResponse = ca;
  },
  98
);
__d(
  "ServiceWorkerPushNavigateFetchEvent",
  [
    "Artillery4SW",
    "ServiceWorkerEventLogger",
    "ServiceWorkerProfilerTypes",
    "ServiceWorkerPushEvent",
    "ServiceWorkerServerData",
  ],
  function (a, b, c, d, e, f, g) {
    var h = "push",
      i = "text/html; charset=utf-8";
    function a(a) {
      if (!j(a)) return null;
      d("ServiceWorkerEventLogger").log("SW PUSH: fetch event intercepted");
      var b = d("ServiceWorkerServerData").getData(
        "EarlyResponseData",
        "requestHeaders",
        {}
      );
      d("Artillery4SW").informNavigateRequestEvent(
        h,
        d("ServiceWorkerProfilerTypes").FetchTiming.BEGIN_RESPONSE
      );
      b = b;
      b["content-type"] = i;
      a = d("ServiceWorkerPushEvent").getAndRemoveCachedResponse(a.request.url);
      return !a
        ? null
        : {
            response: new Response(a, { headers: b }),
            waitUntil: d("Artillery4SW").waitForNavigateRequestLogging(h),
          };
    }
    function j(a) {
      return !!d("ServiceWorkerPushEvent").hasCachedResponse(a.request.url);
    }
    g.fetch = a;
    g.canHandle = j;
  },
  98
);
__d(
  "ServiceWorkerResourceCacheActivateEvent",
  [
    "Artillery4SW",
    "Promise",
    "RouteLoadsLogging",
    "ServiceWorkerAsyncStorage",
    "ServiceWorkerCacheStorage",
    "ServiceWorkerRouter",
    "ServiceWorkerVersion",
    "asyncToGeneratorRuntime",
  ],
  function (a, b, c, d, e, f, g) {
    function a() {
      return h.apply(this, arguments);
    }
    function h() {
      h = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        d("Artillery4SW").informResourceCacheActivateStart();
        var a = {},
          c = yield d("ServiceWorkerAsyncStorage").getItem(
            "rsrc_to_save" + d("ServiceWorkerVersion").getInstanceKey()
          );
        if (c)
          for (c of Object.values(c))
            for (var e of Object.values(c))
              e && typeof e.src === "string" && (a[e.src] = !0);
        a[registration.scope] = !0;
        yield b("Promise").all([
          d("ServiceWorkerCacheStorage").purgeCacheExceptFor(a),
          d("ServiceWorkerAsyncStorage").removeAllItemWithPredicate(function (
            a
          ) {
            a = /rsrc_to_save(.*)/.exec(a);
            return !a || !a[1]
              ? !1
              : d("ServiceWorkerVersion").isInstanceKeyFromEarlier(a[1], {
                  includeCurrent: !0,
                });
          }),
          d("ServiceWorkerRouter").activateRoutes(),
          d("ServiceWorkerCacheStorage").activateCache(),
          d("RouteLoadsLogging").activateRouteLoadsLogging(),
        ]);
        d("Artillery4SW").informResourceCacheActivateEnd();
      });
      return h.apply(this, arguments);
    }
    g.activate = a;
  },
  98
);
__d(
  "ServiceWorkerResponseSWOnlyFilter",
  ["ServiceWorkerServerData"],
  function (a, b, c, d, e, f, g) {
    function a(a) {
      var b = d("ServiceWorkerServerData").getString(
          "ResourceCacheData",
          "sw_cache_only_mark_start"
        ),
        c = d("ServiceWorkerServerData").getString(
          "ResourceCacheData",
          "sw_cache_only_mark_end"
        ),
        e = a.indexOf(b);
      while (e !== -1) {
        var f = a.indexOf(c);
        if (f !== -1)
          a =
            a.substring(0, e) +
            a.substring(e + b.length, f) +
            a.substring(f + c.length);
        else break;
        e = a.indexOf(b);
      }
      return a;
    }
    g.applyFilter = a;
  },
  98
);
__d(
  "StreamBlockReader",
  ["Promise", "regeneratorRuntime"],
  function (a, b, c, d, e, f) {
    a = (function () {
      function a(a) {
        var c = this;
        if (!a.getReader)
          throw new Error("No getReader method found on given object");
        this.$3 = a.getReader();
        this.$1 = "";
        this.$2 = null;
        this.$4 = !1;
        this.$5 = "utf-8";
        this.$6 = "";
        this.$9 = !1;
        this.$8 = function () {
          return b("Promise").reject(
            "Sorry, you are somehow using this too early."
          );
        };
        this.$7 = new (b("Promise"))(function (a, b) {
          c.$8 = a;
        });
      }
      var c = a.prototype;
      c.changeEncoding = function (a) {
        if (this.$2)
          throw new Error("Decoder already in use, encoding cannot be changed");
        this.$5 = a;
      };
      c.$10 = function () {
        if (!self.TextDecoder)
          throw new Error("TextDecoder is not supported here");
        this.$2 || (this.$2 = new self.TextDecoder(this.$5));
        return this.$2;
      };
      c.$11 = function () {
        if (this.$9)
          throw new Error("Something else is already reading from this reader");
        this.$9 = !0;
      };
      c.$12 = function () {
        this.$9 = !1;
      };
      c.isDone = function () {
        return this.$4;
      };
      c.$13 = function () {
        var a, c, d, e;
        return b("regeneratorRuntime").async(
          function (f) {
            while (1)
              switch ((f.prev = f.next)) {
                case 0:
                  if (!(this.$6 !== "")) {
                    f.next = 4;
                    break;
                  }
                  a = this.$6;
                  this.$6 = "";
                  return f.abrupt("return", a);
                case 4:
                  if (!this.isDone()) {
                    f.next = 6;
                    break;
                  }
                  throw new Error("You cannot read from a stream that is done");
                case 6:
                  f.next = 8;
                  return b("regeneratorRuntime").awrap(this.$3.read());
                case 8:
                  c = f.sent;
                  d = c.done;
                  e = c.value;
                  this.$4 = d;
                  d && this.$8();
                  return f.abrupt(
                    "return",
                    e ? this.$10().decode(e, { stream: !d }) : ""
                  );
                case 14:
                case "end":
                  return f.stop();
              }
          },
          null,
          this
        );
      };
      c.readNextBlock = function () {
        var a;
        return b("regeneratorRuntime").async(
          function (b) {
            while (1)
              switch ((b.prev = b.next)) {
                case 0:
                  this.$11();
                  a = this.$13();
                  this.$12();
                  return b.abrupt("return", a);
                case 4:
                case "end":
                  return b.stop();
              }
          },
          null,
          this
        );
      };
      c.readUntilStringOrEnd = function (a) {
        return b("regeneratorRuntime").async(
          function (c) {
            while (1)
              switch ((c.prev = c.next)) {
                case 0:
                  c.next = 2;
                  return b("regeneratorRuntime").awrap(
                    this.readUntilOneOfStringOrEnd_DO_NOT_USE([a])
                  );
                case 2:
                  return c.abrupt("return", c.sent);
                case 3:
                case "end":
                  return c.stop();
              }
          },
          null,
          this
        );
      };
      c.readUntilStringOrThrow = function (a) {
        var c, d, e;
        return b("regeneratorRuntime").async(
          function (f) {
            while (1)
              switch ((f.prev = f.next)) {
                case 0:
                  if (a) {
                    f.next = 2;
                    break;
                  }
                  throw new Error("cannot read empty string");
                case 2:
                  this.$11(), (c = ""), (d = 0);
                case 5:
                  if (this.isDone()) {
                    f.next = 23;
                    break;
                  }
                  f.t0 = c;
                  f.next = 9;
                  return b("regeneratorRuntime").awrap(this.$13());
                case 9:
                  c = f.t0 += f.sent;
                  if (!(c.length < a.length)) {
                    f.next = 12;
                    break;
                  }
                  return f.abrupt("continue", 5);
                case 12:
                  e = c.substring(d).indexOf(a);
                  if (!(e !== -1)) {
                    f.next = 20;
                    break;
                  }
                  e += d;
                  this.$6 = c.substring(e + a.length);
                  this.$12();
                  return f.abrupt("return", c.substring(0, e));
                case 20:
                  d = c.length - a.length + 1;
                case 21:
                  f.next = 5;
                  break;
                case 23:
                  this.$6 = c;
                  this.$12();
                  throw new Error("Breakpoint not found");
                case 26:
                case "end":
                  return f.stop();
              }
          },
          null,
          this
        );
      };
      c.readUntilOneOfStringOrEnd_DO_NOT_USE = function (a) {
        var c, d, e, f;
        return b("regeneratorRuntime").async(
          function (g) {
            while (1)
              switch ((g.prev = g.next)) {
                case 0:
                  this.$11(), (c = "");
                case 2:
                  if (this.isDone()) {
                    g.next = 20;
                    break;
                  }
                  g.t0 = c;
                  g.next = 6;
                  return b("regeneratorRuntime").awrap(this.$13());
                case 6:
                  (c = g.t0 += g.sent), (d = 0);
                case 8:
                  if (!(d < a.length)) {
                    g.next = 18;
                    break;
                  }
                  e = a[d];
                  f = c.indexOf(e);
                  if (!(f !== -1)) {
                    g.next = 15;
                    break;
                  }
                  this.$6 = c.substring(f + e.length);
                  this.$12();
                  return g.abrupt("return", c.substring(0, f));
                case 15:
                  d++;
                  g.next = 8;
                  break;
                case 18:
                  g.next = 2;
                  break;
                case 20:
                  this.$12();
                  return g.abrupt("return", c);
                case 22:
                case "end":
                  return g.stop();
              }
          },
          null,
          this
        );
      };
      c.waitUntilDone = function () {
        return b("regeneratorRuntime").async(
          function (a) {
            while (1)
              switch ((a.prev = a.next)) {
                case 0:
                  return a.abrupt("return", this.$7);
                case 1:
                case "end":
                  return a.stop();
              }
          },
          null,
          this
        );
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "ServiceWorkerExtractCacheContentFromPage",
  [
    "ServiceWorkerResponseSWOnlyFilter",
    "ServiceWorkerServerData",
    "StreamBlockReader",
    "asyncToGeneratorRuntime",
  ],
  function (a, b, c, d, e, f, g) {
    function a(a) {
      return h.apply(this, arguments);
    }
    function h() {
      h = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        a = a.body;
        if (!a) return null;
        a = new (c("StreamBlockReader"))(a);
        var b = d("ServiceWorkerServerData").getString(
          "ResourceCacheData",
          "cacheable_section_end"
        );
        a = yield a.readUntilStringOrThrow(b);
        return d("ServiceWorkerResponseSWOnlyFilter").applyFilter(a);
      });
      return h.apply(this, arguments);
    }
    g.processResponse = a;
  },
  98
);
__d(
  "ServiceWorkerExtractResourcesFromPage",
  [
    "Promise",
    "ServiceWorkerServerData",
    "StreamBlockReader",
    "asyncToGeneratorRuntime",
  ],
  function (a, b, c, d, e, f, g) {
    function h() {
      var a = d("ServiceWorkerServerData").getString(
          "ResourceCacheData",
          "rsrc_payload_earlyflush"
        ),
        b = d("ServiceWorkerServerData").getString(
          "ResourceCacheData",
          "rsrc_payload_start"
        );
      return a + b;
    }
    function a(a, b) {
      return i.apply(this, arguments);
    }
    function i() {
      i = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, e) {
        var f = [],
          g = [];
        a = a.body;
        if (!a) return [];
        a = new (c("StreamBlockReader"))(a);
        var i = h(),
          j = d("ServiceWorkerServerData").getString(
            "ResourceCacheData",
            "rsrc_payload_end"
          );
        while (!a.isDone()) {
          yield a.readUntilStringOrEnd(String(i));
          var k = yield a.readUntilStringOrEnd(String(j));
          if (a.isDone()) continue;
          try {
            k.startsWith("/*") &&
              k.endsWith("*/") &&
              (k = k.substr(2, k.length - 4));
            k = JSON.parse(k);
            f.push(k);
            g.push(e(k));
          } catch (a) {
            continue;
          }
        }
        yield b("Promise").all(g);
        return f;
      });
      return i.apply(this, arguments);
    }
    g.processResponse = a;
  },
  98
);
__d(
  "ServiceWorkerResourceCacheInstallRoute",
  [
    "Promise",
    "ServiceWorkerAsyncStorage",
    "ServiceWorkerCacheResponse",
    "ServiceWorkerCacheStorage",
    "ServiceWorkerClientChromeConfig",
    "ServiceWorkerEventLogger",
    "ServiceWorkerExtractCacheContentFromPage",
    "ServiceWorkerExtractResourcesFromPage",
    "ServiceWorkerFetchPage",
    "ServiceWorkerResponseSWOnlyFilter",
    "ServiceWorkerRouter",
    "ServiceWorkerServerData",
    "ServiceWorkerVersion",
    "asyncToGeneratorRuntime",
  ],
  function (a, b, c, d, e, f, g) {
    var h = /^http/;
    function i(a) {
      return j.apply(this, arguments);
    }
    function j() {
      j = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        a = yield d("ServiceWorkerExtractResourcesFromPage").processResponse(
          a,
          function (a) {
            return d("ServiceWorkerCacheStorage").installAllNotInCache(
              a,
              function (a) {
                return h.test(a.src) ? a.src : null;
              }
            );
          }
        );
        if (a) {
          var c = d("ServiceWorkerVersion").getInstanceKey();
          yield b("Promise").all([
            d("ServiceWorkerAsyncStorage").setItem("rsrc_to_save" + c, a),
            d("ServiceWorkerCacheStorage").completeCacheInstall(),
          ]);
          d("ServiceWorkerEventLogger").log(
            "INSTALL: Saved resources to cache"
          );
        }
      });
      return j.apply(this, arguments);
    }
    function k(a, b) {
      return l.apply(this, arguments);
    }
    function l() {
      l = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, c) {
        var e = yield d(
          "ServiceWorkerExtractCacheContentFromPage"
        ).processResponse(a);
        if (e) {
          var f = new TextEncoder(),
            g = (function () {
              var c = b("asyncToGeneratorRuntime").asyncToGenerator(function* (
                b
              ) {
                yield d("ServiceWorkerRouter").installRouteConfigCache(
                  b.name,
                  a.headers,
                  { content: f.encode(e) }
                );
              });
              return function (a) {
                return c.apply(this, arguments);
              };
            })();
          c = [c].concat(c.similarRouteConfigs || []);
          c = c.map(g);
          yield b("Promise").all(c);
          d("ServiceWorkerEventLogger").log(
            "INSTALL: Saved cached content to RouteConfig"
          );
        }
      });
      return l.apply(this, arguments);
    }
    function m(a, b) {
      return n.apply(this, arguments);
    }
    function n() {
      n = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b) {
        var c = yield a.text(),
          e = d("ServiceWorkerServerData").getString(
            "ResourceCacheData",
            "client_chrome_dynamic_metadata_start"
          ),
          f = d("ServiceWorkerServerData").getString(
            "ResourceCacheData",
            "client_chrome_dynamic_metadata_end"
          ),
          g = c.indexOf(e);
        f = c.indexOf(f, g);
        if (g === -1 || f === -1)
          throw new Error(
            "INSTALL: Could not extract metadata from cache content"
          );
        g = c.substring(g + e.length, f);
        c = d("ServiceWorkerResponseSWOnlyFilter").applyFilter(c);
        e = new TextEncoder();
        yield d("ServiceWorkerRouter").installRouteConfigCache(
          b.name,
          a.headers,
          { content: e.encode(c), clientChromeData: g }
        );
        d("ServiceWorkerEventLogger").log(
          "INSTALL: Saved cached content to RouteConfig"
        );
      });
      return n.apply(this, arguments);
    }
    function a(a) {
      return o.apply(this, arguments);
    }
    function o() {
      o = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        var c = d("ServiceWorkerCacheResponse").getResponseTypes(),
          e = d("ServiceWorkerClientChromeConfig").isEnabled();
        c = e ? c.CACHE : c.EF_ONLY;
        c = yield d("ServiceWorkerFetchPage").fetchCacheResponseForInstall(
          a,
          c
        );
        if (!c)
          throw new Error("INSTALL: fetch cache content gave invalid response");
        d("ServiceWorkerEventLogger").log("INSTALL: fetched cache content");
        if (e) {
          d("ServiceWorkerEventLogger").log("INSTALL: Client chrome install");
          e = c.clone();
          yield b("Promise").all([i(e), m(c, a)]);
          return;
        }
        e = c.clone();
        yield b("Promise").all([i(e), k(c, a)]);
      });
      return o.apply(this, arguments);
    }
    g.install = a;
  },
  98
);
__d(
  "ServiceWorkerResourceCacheInstallEvent",
  [
    "Promise",
    "ServiceWorkerEventLogger",
    "ServiceWorkerResourceCacheInstallRoute",
    "ServiceWorkerRouter",
    "asyncToGeneratorRuntime",
  ],
  function (a, b, c, d, e, f, g) {
    function a() {
      return h.apply(this, arguments);
    }
    function h() {
      h = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        yield d("ServiceWorkerRouter").init();
        var a = d("ServiceWorkerRouter").getRouteConfigsForInstall();
        yield b("Promise").all(
          Object.keys(a).map(
            (function () {
              var c = b("asyncToGeneratorRuntime").asyncToGenerator(function* (
                b
              ) {
                d("ServiceWorkerEventLogger").log(
                  "INSTALL: Installing route '" + b + "'"
                ),
                  yield d("ServiceWorkerResourceCacheInstallRoute").install(
                    a[b]
                  );
              });
              return function (a) {
                return c.apply(this, arguments);
              };
            })()
          )
        );
      });
      return h.apply(this, arguments);
    }
    g.install = a;
  },
  98
);
__d(
  "ServiceWorkerResourceCacheNavigateFetchRoute",
  [
    "invariant",
    "Artillery4SW",
    "ForcedNavigateToRequest",
    "ServiceWorkerCacheResponse",
    "ServiceWorkerClientChromeConfig",
    "ServiceWorkerClientID",
    "ServiceWorkerEventLogger",
    "ServiceWorkerFetchPage",
    "ServiceWorkerPreload",
    "ServiceWorkerProfilerTypes",
    "ServiceWorkerRouter",
    "ServiceWorkerServerData",
    "asyncToGeneratorRuntime",
  ],
  function (a, b, c, d, e, f, g, h) {
    var i = "<style>body {visibility: visible !important}</style>",
      j = 30;
    function k(a) {
      return l.apply(this, arguments);
    }
    function l() {
      l = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        try {
          return yield a;
        } catch (a) {}
        return {
          response: null,
          failReason: d("ServiceWorkerFetchPage").getFailReason(
            "PAGE_RESPONSE_ERROR"
          ),
        };
      });
      return l.apply(this, arguments);
    }
    function m(a) {
      var b = d("ServiceWorkerServerData").getString(
        "SRPinningData",
        "spin_exp_override_header"
      );
      return Boolean(a.headers.get(b));
    }
    function n(a, b) {
      if (!m(b))
        return d("ServiceWorkerFetchPage").getFailReason(
          "SPIN_OVERRIDE_MISSING"
        );
      a = d("ServiceWorkerCacheResponse").getResponseTypes();
      a = a.NO_CACHE;
      var c = d("ServiceWorkerCacheResponse").getResponseHeaderName();
      b = b.headers.get(c);
      return b && b !== String(a)
        ? d("ServiceWorkerFetchPage").getFailReason(
            "SPIN_OVERRIDE_WRONG_RESPONSE_TYPE"
          )
        : 0;
    }
    function o(a, b) {
      if (m(b))
        return d("ServiceWorkerFetchPage").getFailReason("SPIN_OVERRIDE");
      var c = a.versionKey;
      if (!c)
        return d("ServiceWorkerFetchPage").getFailReason(
          "NAVFETCHROUTE_NO_VERSION"
        );
      var e = d("ServiceWorkerServerData").getString("SiteData", "fbRevHeader");
      e = b.headers.get(e);
      if (c !== e) {
        d("ServiceWorkerRouter").markRouteConfigCacheAsInvalid(a);
        d("ServiceWorkerEventLogger").log(
          "FETCH NAV: Version mismatch, cache cleared. " +
            ('Client Version: "' + c + '", Server Version: "' + e + '"')
        );
        return d("ServiceWorkerFetchPage").getFailReason(
          "NAVFETCHROUTE_VER_MISTMATCH"
        );
      }
      c = d("ServiceWorkerCacheResponse").getResponseTypes();
      e = d("ServiceWorkerClientChromeConfig").isEnabled()
        ? c.DYNAMIC
        : c.EF_ONLY;
      c = d("ServiceWorkerCacheResponse").getResponseHeaderName();
      b = b.headers.get(c);
      if (b !== String(e)) {
        d("ServiceWorkerRouter").markRouteConfigCacheAsInvalid(a);
        d("ServiceWorkerEventLogger").log(
          "FETCH NAV: Response typed mismatch, cache cleared. " +
            ('Expected: "' + e + '", Server gave: "' + b + '"')
        );
        return d("ServiceWorkerFetchPage").getFailReason(
          "NAVFETCHROUTE_RSP_MISTMATCH"
        );
      }
      return 0;
    }
    function p(a, c) {
      a = a.request;
      var e = d("ForcedNavigateToRequest").enqueueResponse(a.url, null, c);
      return b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        return {
          value:
            '<script>window.location = "' +
            encodeURI(e) +
            '";</script></body></html>',
          done: !0,
        };
      });
    }
    function q(a) {
      a.request;
      var c = d("ServiceWorkerServerData").getString(
          "SRPinningData",
          "network_error_js"
        ),
        e = d("ServiceWorkerServerData").getString(
          "SRPinningData",
          "network_error_markup"
        ),
        f = d("ServiceWorkerServerData").getString(
          "SRPinningData",
          "network_error_replace"
        );
      return b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        return {
          value:
            "<script>" +
            c +
            "serviceWorkerNetworkError('" +
            f +
            "'," +
            ("'" + e + "');</script></body></html>"),
          done: !0,
        };
      });
    }
    function r(a, b, c) {
      var e = d("ServiceWorkerServerData").getData(
        "SRPinningData",
        "enabled",
        !1
      );
      return e && d("ServiceWorkerClientChromeConfig").isEnabled() && b
        ? q(a)
        : p(a, c);
    }
    function s(a, b) {
      return t.apply(this, arguments);
    }
    function t() {
      t = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, c) {
        a = c.body;
        a || h(0, 296);
        var d = a.getReader(),
          e = new self.TextDecoder("utf-8");
        return b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var a = yield d.read(),
            b = a.done;
          a = a.value;
          return { done: b, value: a ? e.decode(a, { stream: !b }) : "" };
        });
      });
      return t.apply(this, arguments);
    }
    function u(a, b) {
      return v.apply(this, arguments);
    }
    function v() {
      v = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, c) {
        c = c.body;
        c || h(0, 296);
        var e = c.getReader(),
          f = new self.TextDecoder("utf-8");
        c = d("ServiceWorkerServerData").getString(
          "ResourceCacheData",
          "cacheable_section_end"
        );
        var g = c.length,
          i = "";
        while (!0) {
          var k = yield e.read(),
            l = k.done;
          k = k.value;
          if (k) {
            i += f.decode(k, { stream: !l });
            k = i.indexOf(c);
            if (k >= 0) {
              i = i.substr(k + g);
              break;
            }
          }
          if (l) {
            d("ServiceWorkerEventLogger").log(
              "FETCH NAV: Force refresh, cut token not found in response"
            );
            return p(
              a,
              d("ServiceWorkerFetchPage").getFailReason("NO_CUT_TOKEN")
            );
          }
          k = i.length - g + 1;
          k > j && (i = i.substr(k));
        }
        return b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (i) {
            var b = { done: !1, value: i };
            i = "";
            return b;
          }
          b = yield e.read();
          var a = b.done;
          b = b.value;
          return { done: a, value: b ? f.decode(b, { stream: !a }) : "" };
        });
      });
      return v.apply(this, arguments);
    }
    function w(a, b) {
      return x.apply(this, arguments);
    }
    function x() {
      x = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, c) {
        c = yield k(c);
        if (!c.response) {
          d("ServiceWorkerEventLogger").log(
            "FETCH NAV: Force refresh, network issue"
          );
          return r(a, !0, c.failReason || 0);
        }
        var e = c.response;
        c = yield o(a, e);
        if (c !== 0) {
          d("ServiceWorkerEventLogger").log(
            "FETCH NAV: Force refresh, bad server response"
          );
          return r(a, !1, c);
        }
        var f = !1,
          g;
        return b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (!f) {
            f = !0;
            return { value: i, done: !1 };
          }
          g ||
            (d("ServiceWorkerClientChromeConfig").isEnabled()
              ? (g = yield s(a, e))
              : (g = yield u(a, e)));
          return yield g();
        });
      });
      return x.apply(this, arguments);
    }
    function y(a, b) {
      return z.apply(this, arguments);
    }
    function z() {
      z = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, c) {
        c = yield k(c);
        var e = c.response;
        if (!e) {
          d("ServiceWorkerEventLogger").log(
            "FETCH NAV: Force refresh, network issue"
          );
          return r(a, !0, c.failReason || 0);
        }
        c = yield n(a, e);
        if (c !== 0) {
          d("ServiceWorkerEventLogger").log(
            "FETCH NAV: Force refresh, bad server response"
          );
          return r(a, !1, c);
        }
        var f;
        return b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          f || (f = yield s(a, e));
          return yield f();
        });
      });
      return z.apply(this, arguments);
    }
    function A(a) {
      return B.apply(this, arguments);
    }
    function B() {
      B = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        return d("ServiceWorkerPreload").isEnabled() && a.preloadResponse
          ? yield d("ServiceWorkerFetchPage").extractPreloadResponse(a)
          : yield d("ServiceWorkerFetchPage").fetchDynamicResponse(a);
      });
      return B.apply(this, arguments);
    }
    function C(a) {
      return d("ServiceWorkerPreload").isEnabled() && a.preloadResponse
        ? d("ServiceWorkerFetchPage").extractNoCachePreloadResponse(
            a.preloadResponse,
            { redirectAllowed: !1 }
          )
        : null;
    }
    function D(a, c) {
      var e = a.id,
        f = new TextEncoder(),
        g = { stream: !0 },
        h;
      return (function () {
        var i = b("asyncToGeneratorRuntime").asyncToGenerator(function* (b) {
          h || (h = yield y(a, c));
          var i = yield h(),
            j = i.done;
          i = i.value;
          i && b.enqueue(f.encode(i, g));
          j &&
            (d("Artillery4SW").informNavigateRequestEvent(
              e,
              d("ServiceWorkerProfilerTypes").FetchTiming.NETWORK_RESPONSE_END
            ),
            b.close(),
            d("Artillery4SW").informNavigateRequestCompleted(e));
        });
        return function (a) {
          return i.apply(this, arguments);
        };
      })();
    }
    function E(a, c) {
      var e = a.id,
        f = new TextEncoder(),
        g = { stream: !0 },
        h = !1,
        i;
      return (function () {
        var j = b("asyncToGeneratorRuntime").asyncToGenerator(function* (b) {
          if (!h) {
            d("Artillery4SW").informNavigateRequestEvent(
              e,
              d("ServiceWorkerProfilerTypes").FetchTiming.CACHE_FLUSH
            );
            b.enqueue(a.cachedEFPageContent);
            b.enqueue(
              f.encode(d("ServiceWorkerClientID").getClientIDInformerCode(e), g)
            );
            h = !0;
            return;
          }
          i || (i = yield w(a, c));
          var j = yield i(),
            k = j.done;
          j = j.value;
          j && b.enqueue(f.encode(j, g));
          k &&
            (d("Artillery4SW").informNavigateRequestEvent(
              e,
              d("ServiceWorkerProfilerTypes").FetchTiming.NETWORK_RESPONSE_END
            ),
            b.close(),
            d("Artillery4SW").informNavigateRequestCompleted(e));
        });
        return function (a) {
          return j.apply(this, arguments);
        };
      })();
    }
    function a(a) {
      if (!a.versionKey || !a.cachedEFPageContent) return null;
      var b = a.expireAfter;
      if (typeof b === "number" && Date.now() > b) {
        d("ServiceWorkerRouter").markRouteConfigCacheAsInvalid(a);
        d("ServiceWorkerEventLogger").log(
          "FETCH NAV: Cache has expired, cache cleared."
        );
        b = C(a);
        if (b) {
          d("ServiceWorkerEventLogger").log(
            "FETCH NAV: Attempting to repond with sent preload."
          );
          return D(a, b);
        } else return null;
      } else if (d("ServiceWorkerClientChromeConfig").hasInvalidCache(a))
        return null;
      b = A(a);
      return E(a, b);
    }
    g.createRouteStream = a;
  },
  98
);
__d(
  "ServiceWorkerResponseStream",
  ["Artillery4SW", "ServiceWorkerProfilerTypes", "ServiceWorkerServerData"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, c) {
      d("Artillery4SW").informNavigateRequestEvent(
        a,
        d("ServiceWorkerProfilerTypes").FetchTiming.BEGIN_RESPONSE
      );
      b = new self.ReadableStream({ pull: b });
      var e = d("ServiceWorkerServerData").getData(
          "EarlyResponseData",
          "requestHeaders",
          {}
        ),
        f = e;
      c &&
        Object.keys(c).forEach(function (a) {
          var b = a.toLowerCase();
          f[b] ? (f[b] = c[a]) : (f[a] = c[a]);
        });
      return {
        response: new Response(b, { headers: f }),
        waitUntil: d("Artillery4SW").waitForNavigateRequestLogging(a),
      };
    }
    g.createResponseStream = a;
  },
  98
);
__d(
  "ServiceWorkerResourceCacheNavigateFetchEvent",
  [
    "Artillery4SW",
    "ForcedNavigateToRequest",
    "ServiceWorkerCacheStorage",
    "ServiceWorkerEventLogger",
    "ServiceWorkerFetchPage",
    "ServiceWorkerProfilerTypes",
    "ServiceWorkerResourceCacheNavigateFetchRoute",
    "ServiceWorkerResponseStream",
    "ServiceWorkerRouter",
    "asyncToGeneratorRuntime",
  ],
  function (a, b, c, d, e, f, g) {
    function h(a, c, e) {
      var f = !1,
        g = null,
        h,
        i = !1,
        j = (function () {
          var j = b("asyncToGeneratorRuntime").asyncToGenerator(function* (b) {
            f ||
              (d("Artillery4SW").informNavigateRequestEvent(
                a,
                d("ServiceWorkerProfilerTypes").FetchTiming
                  .ROUTE_CONFIG_CACHE_LOOKUP_START
              ),
              (g = yield c),
              d("Artillery4SW").informNavigateRequestEvent(
                a,
                d("ServiceWorkerProfilerTypes").FetchTiming
                  .ROUTE_CONFIG_CACHE_LOOKUP_END
              ),
              (f = !0));
            g &&
              !i &&
              ((h = d(
                "ServiceWorkerResourceCacheNavigateFetchRoute"
              ).createRouteStream(g)),
              (i = !0));
            if (h) {
              var j = h(b);
              if (j) return yield j;
              else return void 0;
            } else {
              j = d("ForcedNavigateToRequest").enqueueResponse(
                e,
                null,
                d("ServiceWorkerFetchPage").getFailReason(
                  "FAILURE_TO_READ_ROUTE"
                )
              );
              var k = new TextEncoder();
              b.enqueue(
                k.encode(
                  "<html><head>" +
                    ('<meta http-equiv="refresh" content="0; url=' +
                      j +
                      '" />') +
                    "</head></html>"
                )
              );
              b.close();
              k = d("Artillery4SW").getRequestPerf(a, "navigate");
              k.loggingRead();
              return void 0;
            }
          });
          return function (a) {
            return j.apply(this, arguments);
          };
        })();
      return d("ServiceWorkerResponseStream").createResponseStream(a, j);
    }
    function a(a) {
      var b = d("ServiceWorkerRouter").initConfigForFetchEvent(a);
      if (b) {
        if (d("ServiceWorkerCacheStorage").isCacheClearing()) return null;
        var c = b.id;
        d("Artillery4SW").informNavigateRequestEvent(
          c,
          d("ServiceWorkerProfilerTypes").FetchTiming.FETCH_START
        );
        d("ServiceWorkerEventLogger").log(
          "FETCH NAV: Respond to route '" + b.name + "'"
        );
        var e = b.fullRouteConfigPromise;
        if (e) {
          d("ServiceWorkerEventLogger").log("FETCH NAV: Access route cache");
          return h(c, e, a.request.url);
        }
        e = d("ServiceWorkerResourceCacheNavigateFetchRoute").createRouteStream(
          b
        );
        a = babelHelpers["extends"](
          {},
          (b == null ? void 0 : b.responseHeaders) || {}
        );
        if (e)
          return d("ServiceWorkerResponseStream").createResponseStream(c, e, a);
      }
      return null;
    }
    g.fetch = a;
  },
  98
);
__d(
  "ServiceWorkerSplashNavigateFetchEvent",
  [
    "invariant",
    "ForcedNavigateToRequest",
    "ServiceWorkerBase",
    "ServiceWorkerCacheResponse",
    "ServiceWorkerCacheStorage",
    "ServiceWorkerConslidatedHeader",
    "ServiceWorkerEventLogger",
    "ServiceWorkerFetchPage",
    "ServiceWorkerPreload",
    "ServiceWorkerResponseStream",
    "ServiceWorkerRouter",
    "ServiceWorkerRoutes",
    "ServiceWorkerServerData",
    "ServiceWorkerVersion",
    "asyncToGeneratorRuntime",
  ],
  function (a, b, c, d, e, f, g, h) {
    function i(a) {
      return j.apply(this, arguments);
    }
    function j() {
      j = b("asyncToGeneratorRuntime").asyncToGenerator(function* (b) {
        if (b.preloadResponse && d("ServiceWorkerPreload").isEnabled()) {
          d("ServiceWorkerEventLogger").log(
            "SW SPLASH: using navigation preload request"
          );
          var c = yield b.preloadResponse;
          if (c) return c;
        }
        d("ServiceWorkerEventLogger").log(
          "SW SPLASH: issuing fallback request"
        );
        c = new Request(b.request.url, {
          mode: "same-origin",
          credentials: "same-origin",
          redirect: "manual",
        });
        b = {};
        b[d("ServiceWorkerConslidatedHeader").getKey("SW_SVN")] = d(
          "ServiceWorkerVersion"
        ).getCurrentRev();
        b[d("ServiceWorkerConslidatedHeader").getKey("SW_PARTIAL_CACHE")] = d(
          "ServiceWorkerCacheResponse"
        ).getResponseTypes().CACHE;
        b[d("ServiceWorkerConslidatedHeader").getKey("SW_ROUTES")] = d(
          "ServiceWorkerRoutes"
        ).getRoutesKey();
        b[d("ServiceWorkerConslidatedHeader").getKey("SW_SKIP_REV_CHECK")] = 1;
        b[
          d("ServiceWorkerConslidatedHeader").getKey("SW_SPLASH_SCREEN_ENABLED")
        ] = 1;
        var e = d("ServiceWorkerConslidatedHeader").getKey("SW_SITE_TYPE"),
          f = d("ServiceWorkerServerData").getData(
            "SiteData",
            "siteType",
            null
          );
        f !== null && (b[e] = f);
        c.headers.set(
          d("ServiceWorkerConslidatedHeader").getHeaderName(),
          JSON.stringify(b)
        );
        return a.fetch(c);
      });
      return j.apply(this, arguments);
    }
    function c() {
      var a = new TextEncoder(),
        b = d("ServiceWorkerServerData").getString("SplashScreenData", "html");
      return a.encode(b);
    }
    var k = c();
    function l(a) {
      if (!a || !a["Content-Security-Policy"]) return "";
      a = a["Content-Security-Policy"].match(/nonce-(.*?)(\'|\")/);
      return a && a[1] ? a[1] : "";
    }
    function m(a, b) {
      var c = new TextEncoder();
      b = l(b == null ? void 0 : b.responseHeaders);
      b = b !== "" ? ' nonce="' + b + '"' : "";
      b =
        "\n    <script" +
        b +
        '>window.location = "' +
        encodeURI(a) +
        '";</script>\n    </head>\n    </html>';
      return c.encode(b);
    }
    function n(a, b, c, e) {
      d("ServiceWorkerEventLogger").log(
        "SW SPLASH: invalid response, reason: " + String(e)
      );
      d("ServiceWorkerEventLogger").log("SW SPLASH: reload with FNR");
      b = d("ForcedNavigateToRequest").enqueueResponse(b, null, Number(e));
      a.enqueue(m(b, c));
      a.close();
    }
    function o(a) {
      a === void 0 && (a = null);
      var b = d("ServiceWorkerServerData").getData("SiteData", "siteType");
      return b !== null && a !== null && b !== a;
    }
    function p(a) {
      a = a == null ? void 0 : a.fetchHeader;
      if (a) {
        var b = d("ServiceWorkerConslidatedHeader").getKey("SW_NONCE");
        return a[b];
      }
      return null;
    }
    function q(a) {
      return r.apply(this, arguments);
    }
    function r() {
      r = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        if (!a || d("ServiceWorkerCacheStorage").isCacheClearing())
          return { cachedEFPageContent: null, contentSiteType: null };
        var b = null;
        a.fullRouteConfigPromise && (b = yield a.fullRouteConfigPromise);
        b = b || a;
        a = b.siteType;
        var c = b.cachedEFPageContent;
        c = c === void 0 ? null : c;
        var e = b.expireAfter;
        e = e === void 0 ? null : e;
        if (typeof e === "number" && Date.now() > e) {
          d("ServiceWorkerRouter").markRouteConfigCacheAsInvalid(b);
          return { cachedEFPageContent: null, contentSiteType: a };
        }
        return { cachedEFPageContent: c, contentSiteType: a };
      });
      return r.apply(this, arguments);
    }
    function s(a, c, e) {
      var f,
        g,
        i = !1;
      return (function () {
        var j = b("asyncToGeneratorRuntime").asyncToGenerator(function* (b) {
          if (!i) {
            d("ServiceWorkerEventLogger").log(
              "SW SPLASH: flushing splash markup"
            );
            b.enqueue(k);
            var j = yield q(e),
              l = j.cachedEFPageContent;
            j = j.contentSiteType;
            if (o(j)) {
              j = d("ServiceWorkerFetchPage").getFailReason(
                "SITE_MISMATCH_ON_CACHE"
              );
              d("ServiceWorkerBase").genUnregisterSelf();
              n(b, c.url, e, j);
              return;
            }
            l !== null && b.enqueue(l);
            i = !0;
          }
          if (!f) {
            d("ServiceWorkerEventLogger").log(
              "SW SPLASH: waiting for initial network response"
            );
            f = yield a;
            d("ServiceWorkerEventLogger").log(
              "SW SPLASH: received initial network response"
            );
            j = yield d("ServiceWorkerFetchPage").verifyOrFailServerResponse(
              f,
              { hasCacheContent: !0, checkSiteType: !0, cachedNonce: p(e) }
            );
            l = j.failReason;
            if (l !== null) {
              n(b, c.url, e, l);
              return;
            }
          }
          f.body || h(0, 296);
          g ||
            ((g = f.body.getReader()),
            d("ServiceWorkerEventLogger").log(
              "SW SPLASH: start reading response body"
            ));
          j = yield g.read();
          l = j.done;
          j = j.value;
          j && b.enqueue(j);
          l &&
            (d("ServiceWorkerEventLogger").log(
              "SW SPLASH: finished reading response body"
            ),
            b.close());
        });
        function l(a) {
          return j.apply(this, arguments);
        }
        return l;
      })();
    }
    function e(a) {
      if (!t(a)) return null;
      d("ServiceWorkerEventLogger").log("SW SPLASH: fetch event intercepted");
      var b = i(a),
        c = d("ServiceWorkerRouter").initConfigForFetchEvent(a);
      b = s(b, a.request, c);
      return d("ServiceWorkerResponseStream").createResponseStream(
        "splash",
        b,
        c == null ? void 0 : c.responseHeaders
      );
    }
    function t(a) {
      a = d("ServiceWorkerRoutes").getNameForRequest(a.request);
      return a === "HomePage" || a === "ExtendedWblt";
    }
    g.fetch = e;
    g.canHandle = t;
  },
  98
);
__d(
  "FacebookServiceWorker",
  [
    "Artillery4SW",
    "BrowserPushCommands",
    "FBLogger",
    "MessengerNotificationReader",
    "ServiceWorkerActivateEvent",
    "ServiceWorkerBackgroundRequests",
    "ServiceWorkerBase",
    "ServiceWorkerErrorLogging",
    "ServiceWorkerFetchEvent",
    "ServiceWorkerInstallEvent",
    "ServiceWorkerMessage",
    "ServiceWorkerNavigateFetchEvent",
    "ServiceWorkerNotificationClickEvent",
    "ServiceWorkerNotificationCloseEvent",
    "ServiceWorkerPaymentHandler",
    "ServiceWorkerPeriodicSyncEvent",
    "ServiceWorkerPreload",
    "ServiceWorkerPushEvent",
    "ServiceWorkerPushNavigateFetchEvent",
    "ServiceWorkerResourceCacheActivateEvent",
    "ServiceWorkerResourceCacheInstallEvent",
    "ServiceWorkerResourceCacheNavigateFetchEvent",
    "ServiceWorkerResourceCacheResourceFetchEvent",
    "ServiceWorkerRouter",
    "ServiceWorkerServerData",
    "ServiceWorkerSplashNavigateFetchEvent",
    "ServiceWorkerSyncEvent",
    "ServiceWorkerWidgetEvent",
    "asyncToGeneratorRuntime",
  ],
  function (a, b, c, d, e, f) {
    var g = {
      init: function () {
        b("ServiceWorkerErrorLogging").init();
        g.register();
        var a = b("ServiceWorkerServerData").getData(
          "GenericNotificationData",
          "enabled",
          !1
        );
        a && g.registerPushNotifications();
        a = b("ServiceWorkerServerData").getData(
          "BrowserPaymentHandler",
          "enabled",
          !1
        );
        a && g.registerPaymentHandler();
        a = b("ServiceWorkerServerData").getData(
          "MPushPrefetch",
          "enabled",
          !1
        );
        a && g.registerPushNavigateCache();
        a = b("ServiceWorkerServerData").getData(
          "QuickExperimentData",
          "enabled",
          !1
        );
        a && g.registerQuickExperiments();
        a = b("ServiceWorkerServerData").getData(
          "BackgroundRequestsData",
          "register_listener",
          !1
        );
        a && g.registerBackgroundRequests();
        a = b("ServiceWorkerServerData").getData(
          "WidgetServerData",
          "enabled",
          !1
        );
        a && g.registerWidgets();
        a =
          b("ServiceWorkerServerData").getData(
            "MAddToHomescreen",
            "force_fetch_registration",
            !1
          ) ||
          b("ServiceWorkerServerData").getData(
            "WebAddToHomescreen",
            "force_fetch_registration",
            !1
          ) ||
          b("ServiceWorkerServerData").getData(
            "WorkplaceAddToHomescreen",
            "force_fetch_registration",
            !1
          );
        b("ServiceWorkerNavigateFetchEvent").hasHandlers() &&
          b("ServiceWorkerFetchEvent").setNavigateFetchHandler(
            b("ServiceWorkerNavigateFetchEvent").fetch
          );
        b("ServiceWorkerPreload").isEnabled() &&
          (b("ServiceWorkerFetchEvent").hasFetchHandler() || a) &&
          b("ServiceWorkerBase").setEventListener("fetch", function (a) {
            b("ServiceWorkerFetchEvent").handleEvent(a);
          });
      },
      register: function () {
        var a;
        b("ServiceWorkerBase").setEventListener("activate", function (a) {
          a.waitUntil(b("ServiceWorkerActivateEvent").handleEvent(a));
          a = b("ServiceWorkerServerData").getData(
            "WidgetServerData",
            "enabled",
            !1
          );
          a && b("ServiceWorkerWidgetEvent").updateAllWidgets();
        });
        b("ServiceWorkerBase").setEventListener("install", function (a) {
          a.waitUntil(b("ServiceWorkerInstallEvent").handleEvent(a));
        });
        (a = b("ServiceWorkerMessage")).addCommandHandler(
          "login",
          b("ServiceWorkerBase").genUnregisterSelf
        );
        var c = b("ServiceWorkerServerData").getData(
            "MLoggedOutPush",
            "enabled"
          ),
          d = (function () {
            var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var a = b("ServiceWorkerServerData").getData(
                "WidgetServerData",
                "enabled",
                !1
              );
              a && (yield b("ServiceWorkerWidgetEvent").renderLoginScreen());
              c
                ? yield b("ServiceWorkerBase").clearSWFileCache()
                : yield b("ServiceWorkerBase").genUnregisterSelf();
            });
            return function () {
              return a.apply(this, arguments);
            };
          })();
        a.addCommandHandler("logout", d);
        a.addCommandHandler(
          "unregister",
          (function () {
            var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (
              a
            ) {
              a = a.respond;
              yield b("ServiceWorkerBase").genUnregisterSelf();
              a("done", null);
            });
            return function (b) {
              return a.apply(this, arguments);
            };
          })()
        );
        a.addCommandHandler("errordump", function (a) {
          a = a.respond;
          a("errordump", {
            history: b("ServiceWorkerErrorLogging").getHistory(),
          });
        });
      },
      registerPaymentHandler: function () {
        if (!self.registration) return;
        self.registration.paymentManager &&
          (b("ServiceWorkerBase").setEventListener(
            "canmakepayment",
            function (a) {
              b("ServiceWorkerPaymentHandler").handleCanMakePaymentEvent(a);
            }
          ),
          b("ServiceWorkerBase").setEventListener(
            "paymentrequest",
            function (a) {
              b("ServiceWorkerPaymentHandler").handlePaymentRequestEvent(a);
            }
          ));
      },
      registerPushNotifications: function () {
        try {
          var a = b("ServiceWorkerServerData").getData(
            "SiteData",
            "current_user",
            0
          );
          b("MessengerNotificationReader").openDB(a);
        } catch (a) {
          b("FBLogger")("service_worker")
            .catching(a)
            .mustfix("Failed to create db");
        }
        b("ServiceWorkerBase").setEventListener("push", function (a) {
          a.waitUntil(b("ServiceWorkerPushEvent").handleEvent(a));
          a = b("ServiceWorkerServerData").getData(
            "WidgetServerData",
            "enabled",
            !1
          );
          a && b("ServiceWorkerWidgetEvent").updateAllWidgets();
        });
        b("ServiceWorkerBase").setEventListener(
          "notificationclick",
          function (a) {
            a.waitUntil(
              b("ServiceWorkerNotificationClickEvent").handleEvent(a)
            );
          }
        );
        b("ServiceWorkerBase").setEventListener(
          "notificationclose",
          function (a) {
            a.waitUntil(
              b("ServiceWorkerNotificationCloseEvent").handleEvent(a)
            );
          }
        );
        b("ServiceWorkerMessage").addCommandHandler(
          b("BrowserPushCommands").WINDOW_VISIBLE,
          b("ServiceWorkerPushEvent").genWindowBecameVisible
        );
      },
      registerWidgets: function () {
        var a;
        (a = b("ServiceWorkerBase")).setEventListener(
          "widgetinstall",
          function (a) {
            a.waitUntil(b("ServiceWorkerWidgetEvent").handleInstall(a));
          }
        );
        a.setEventListener("widgetuninstall", function (a) {
          a.waitUntil(b("ServiceWorkerWidgetEvent").handleUninstall(a));
        });
        a.setEventListener("widgetresume", function (a) {
          a.waitUntil(b("ServiceWorkerWidgetEvent").handleResume(a));
        });
        a.setEventListener("widgetclick", function (a) {
          a.waitUntil(b("ServiceWorkerWidgetEvent").handleEvent(a));
        });
        a.setEventListener("periodicsync", function (a) {
          a.waitUntil(b("ServiceWorkerPeriodicSyncEvent").handleEvent(a));
        });
        a.setEventListener("message", function (a) {
          a.waitUntil(b("ServiceWorkerWidgetEvent").handleWebEvent(a));
        });
      },
      registerBackgroundRequests: function () {
        b("ServiceWorkerMessage").addCommandHandler(
          "backgroundRequest",
          b("ServiceWorkerBackgroundRequests").handleBackgroundRequestMessage
        ),
          b("ServiceWorkerBase").setEventListener("sync", function (a) {
            a.waitUntil(b("ServiceWorkerSyncEvent").handleEvent(a));
          });
      },
      registerResourceCache: function (a) {
        a === void 0 && (a = !1),
          b("ServiceWorkerRouter").init(),
          b("ServiceWorkerInstallEvent").addInstallFunction(
            b("ServiceWorkerResourceCacheInstallEvent").install
          ),
          b("ServiceWorkerFetchEvent").setResourceFetchHandler(
            b("ServiceWorkerResourceCacheResourceFetchEvent").fetch
          ),
          a ||
            b("ServiceWorkerFetchEvent").setNavigateFetchHandler(
              b("ServiceWorkerResourceCacheNavigateFetchEvent").fetch
            ),
          b("ServiceWorkerActivateEvent").addUpgradeFunction(
            b("ServiceWorkerResourceCacheActivateEvent").activate
          );
      },
      registerSplashScreenCache: function () {
        b("ServiceWorkerNavigateFetchEvent").register(
          b("ServiceWorkerSplashNavigateFetchEvent")
        );
      },
      registerPushNavigateCache: function () {
        b("ServiceWorkerNavigateFetchEvent").register(
          b("ServiceWorkerPushNavigateFetchEvent")
        );
      },
      registerQuickExperiments: function () {
        var a = b("ServiceWorkerServerData").getData(
          "QuickExperimentData",
          "type",
          "off"
        );
        switch (a) {
          case "simple_ef_only_await_cache":
          case "client_chrome":
            g.registerResourceCache();
            break;
          case "mtouch_splash_screen":
            g.registerSplashScreenCache();
            break;
          case "mtouch_splash_screen_with_resources":
            g.registerResourceCache(!0);
            g.registerSplashScreenCache();
            break;
          case "off":
          default:
            break;
        }
      },
    };
    b("Artillery4SW").informParsed();
    g.init();
    b("Artillery4SW").informInitialized();
    e.exports = void 0;
  },
  null
);
__d(
  "legacy:facebook-service-worker",
  ["FacebookServiceWorker"],
  function (a, b, c, d, e, f) {
    a.FacebookServiceWorker = b("FacebookServiceWorker");
  },
  3
);
