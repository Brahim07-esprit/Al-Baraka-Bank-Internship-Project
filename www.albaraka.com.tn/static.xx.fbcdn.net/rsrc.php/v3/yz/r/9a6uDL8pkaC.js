/*FB_PKG_DELIM*/

__d(
  "react-relay/relay-hooks/react-cache/readFragmentInternal_REACT_CACHE",
  [
    "invariant",
    "react-relay/relay-hooks/QueryResource",
    "relay-runtime",
    "warning",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = b(
        "react-relay/relay-hooks/QueryResource"
      ).getQueryResourceForEnvironment,
      i = (c = b("relay-runtime")).__internal.fetchQuery,
      j = c.RelayFeatureFlags,
      k = c.createOperationDescriptor,
      l = c.getPendingOperationsForFragment,
      m = c.getSelector,
      n = c.getVariablesFromFragment,
      o = c.handlePotentialSnapshotErrors;
    function p(a) {
      if (a.kind === "bailout") return !1;
      else if (a.kind === "singular") return a.snapshot.isMissingData;
      else
        return a.snapshots.some(function (a) {
          return a.isMissingData;
        });
    }
    function q(a) {
      if (a.kind === "bailout") return null;
      else if (a.kind === "singular") {
        var b;
        return (b = a.snapshot.missingClientEdges) != null ? b : null;
      } else {
        b = null;
        for (
          var a = a.snapshots,
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
          if (e.missingClientEdges) {
            var f;
            b = (f = b) != null ? f : [];
            for (
              var f = e.missingClientEdges,
                e = Array.isArray(f),
                g = 0,
                f = e
                  ? f
                  : f[
                      typeof Symbol === "function"
                        ? Symbol.iterator
                        : "@@iterator"
                    ]();
              ;

            ) {
              var h;
              if (e) {
                if (g >= f.length) break;
                h = f[g++];
              } else {
                g = f.next();
                if (g.done) break;
                h = g.value;
              }
              h = h;
              b.push(h);
            }
          }
        }
        return b;
      }
    }
    function r(a, b) {
      if (b.kind === "singular")
        o(a, b.snapshot.missingRequiredFields, b.snapshot.relayResolverErrors);
      else if (b.kind === "plural")
        for (
          var b = b.snapshots,
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
          o(a, e.missingRequiredFields, e.relayResolverErrors);
        }
    }
    function s(a, b, c, d, e) {
      b = n(b, c);
      c = babelHelpers["extends"]({}, b, { id: d.clientEdgeDestinationID });
      b = k(d.request, c, e == null ? void 0 : e.networkCacheConfig);
      d = h(a);
      return d.prepare(b, i(a, b), e == null ? void 0 : e.fetchPolicy);
    }
    function t(a, b) {
      if (b == null) return { kind: "bailout" };
      else if (b.kind === "PluralReaderSelector")
        if (b.selectors.length === 0) return { kind: "bailout" };
        else
          return {
            kind: "plural",
            snapshots: b.selectors.map(function (b) {
              return a.lookup(b);
            }),
            epoch: a.getStore().getEpoch(),
          };
      else
        return {
          kind: "singular",
          snapshot: a.lookup(b),
          epoch: a.getStore().getEpoch(),
        };
    }
    function a(a, c, d, e, f, h) {
      var i,
        k,
        n = m(c, d);
      i =
        (c == null ? void 0 : (i = c.metadata) == null ? void 0 : i.plural) ===
        !0;
      i
        ? d == null ||
          Array.isArray(d) ||
          g(
            0,
            13793,
            h != null ? " for key `" + h + "`" : "",
            c.name,
            typeof d,
            c.name
          )
        : Array.isArray(d) &&
          g(
            0,
            57387,
            h != null ? " for key `" + h + "`" : "",
            c.name,
            typeof d,
            c.name
          );
      d == null ||
        (i && Array.isArray(d) && d.length === 0) ||
        n != null ||
        g(
          0,
          37286,
          c.name,
          c.name,
          e,
          c.name,
          h == null ? "a fragment reference" : "the `" + h + "`",
          e
        );
      h = t(a, n);
      var o = null;
      if (((k = c.metadata) == null ? void 0 : k.hasClientEdges) === !0) {
        k = q(h);
        if (k == null ? void 0 : k.length) {
          o = [];
          for (
            var k = k,
              u = Array.isArray(k),
              v = 0,
              k = u
                ? k
                : k[
                    typeof Symbol === "function"
                      ? Symbol.iterator
                      : "@@iterator"
                  ]();
            ;

          ) {
            var w;
            if (u) {
              if (v >= k.length) break;
              w = k[v++];
            } else {
              v = k.next();
              if (v.done) break;
              w = v.value;
            }
            w = w;
            o.push(s(a, c, d, w, f));
          }
        }
      }
      if (p(h)) {
        n != null || g(0, 57388);
        w = n.kind === "PluralReaderSelector" ? n.selectors[0].owner : n.owner;
        v = l(a, c, w);
        if (v) throw v.promise;
        r(a, h);
      }
      h.kind === "bailout"
        ? (u = i ? [] : null)
        : h.kind === "singular"
        ? (u = h.snapshot.data)
        : (u = h.snapshots.map(function (a) {
            return a.data;
          }));
      (j.LOG_MISSING_RECORDS_IN_PROD || 0) &&
        d != null &&
        (u === void 0 ||
          (Array.isArray(u) &&
            u.length > 0 &&
            u.every(function (a) {
              return a === void 0;
            }))) &&
        b("warning")(
          !1,
          "Relay: Expected to have been able to read non-null data for fragment `%s` declared in `%s`, since fragment reference was non-null. Make sure that that `%s`'s parent isn't holding on to and/or passing a fragment reference for data that has been deleted.",
          c.name,
          e,
          e
        );
      return { data: u, clientEdgeQueries: o };
    }
    e.exports = a;
  },
  null
);
__d(
  "react-relay/relay-hooks/react-cache/useFragmentInternal_REACT_CACHE",
  [
    "invariant",
    "Promise",
    "react",
    "react-relay/relay-hooks/QueryResource",
    "react-relay/relay-hooks/useRelayEnvironment",
    "relay-runtime",
    "warning",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = b(
        "react-relay/relay-hooks/QueryResource"
      ).getQueryResourceForEnvironment;
    c = h || (h = b("react"));
    d = c.useDebugValue;
    var j = c.useEffect,
      k = c.useMemo,
      l = c.useRef,
      m = c.useState,
      n = b("relay-runtime").__internal.fetchQuery,
      o = b("relay-runtime").RelayFeatureFlags,
      p = b("relay-runtime").areEqualSelectors,
      q = b("relay-runtime").createOperationDescriptor,
      r = b("relay-runtime").getPendingOperationsForFragment,
      s = b("relay-runtime").getSelector,
      t = b("relay-runtime").getVariablesFromFragment,
      u = b("relay-runtime").handlePotentialSnapshotErrors,
      v = b("relay-runtime").recycleNodesInto;
    function w(a) {
      if (a.kind === "bailout") return !1;
      else if (a.kind === "singular") return a.snapshot.isMissingData;
      else
        return a.snapshots.some(function (a) {
          return a.isMissingData;
        });
    }
    function x(a) {
      if (a.kind === "bailout") return null;
      else if (a.kind === "singular") {
        var b;
        return (b = a.snapshot.missingClientEdges) != null ? b : null;
      } else {
        b = null;
        for (
          var a = a.snapshots,
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
          if (e.missingClientEdges) {
            var f;
            b = (f = b) != null ? f : [];
            for (
              var f = e.missingClientEdges,
                e = Array.isArray(f),
                g = 0,
                f = e
                  ? f
                  : f[
                      typeof Symbol === "function"
                        ? Symbol.iterator
                        : "@@iterator"
                    ]();
              ;

            ) {
              var h;
              if (e) {
                if (g >= f.length) break;
                h = f[g++];
              } else {
                g = f.next();
                if (g.done) break;
                h = g.value;
              }
              h = h;
              b.push(h);
            }
          }
        }
        return b;
      }
    }
    function y(a) {
      if (a.kind === "bailout") return null;
      else if (a.kind === "singular") {
        var b;
        return (b = a.snapshot.missingLiveResolverFields) != null ? b : null;
      } else {
        b = null;
        for (
          var a = a.snapshots,
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
          if (e.missingLiveResolverFields) {
            var f;
            b = (f = b) != null ? f : [];
            for (
              var f = e.missingLiveResolverFields,
                e = Array.isArray(f),
                g = 0,
                f = e
                  ? f
                  : f[
                      typeof Symbol === "function"
                        ? Symbol.iterator
                        : "@@iterator"
                    ]();
              ;

            ) {
              var h;
              if (e) {
                if (g >= f.length) break;
                h = f[g++];
              } else {
                g = f.next();
                if (g.done) break;
                h = g.value;
              }
              h = h;
              b.push(h);
            }
          }
        }
        return b;
      }
    }
    function z(a, b) {
      if (b.kind === "singular")
        u(a, b.snapshot.missingRequiredFields, b.snapshot.relayResolverErrors);
      else if (b.kind === "plural")
        for (
          var b = b.snapshots,
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
          u(a, e.missingRequiredFields, e.relayResolverErrors);
        }
    }
    function A(a, b) {
      if (b.kind === "bailout") return null;
      var c = a.getStore().getEpoch();
      if (c === b.epoch) return null;
      if (b.kind === "singular") {
        var d = a.lookup(b.snapshot.selector),
          e = v(b.snapshot.data, d.data);
        d = {
          data: e,
          isMissingData: d.isMissingData,
          missingClientEdges: d.missingClientEdges,
          missingLiveResolverFields: d.missingLiveResolverFields,
          seenRecords: d.seenRecords,
          selector: d.selector,
          missingRequiredFields: d.missingRequiredFields,
          relayResolverErrors: d.relayResolverErrors,
        };
        return [
          e !== b.snapshot.data,
          { kind: "singular", snapshot: d, epoch: c },
        ];
      } else {
        e = !1;
        d = [];
        for (var f = 0; f < b.snapshots.length; f++) {
          var h = b.snapshots[f],
            i = a.lookup(h.selector),
            j = v(h.data, i.data);
          i = {
            data: j,
            isMissingData: i.isMissingData,
            missingClientEdges: i.missingClientEdges,
            missingLiveResolverFields: i.missingLiveResolverFields,
            seenRecords: i.seenRecords,
            selector: i.selector,
            missingRequiredFields: i.missingRequiredFields,
            relayResolverErrors: i.relayResolverErrors,
          };
          j !== h.data && (e = !0);
          d.push(i);
        }
        d.length === b.snapshots.length || g(0, 61222);
        return [e, { kind: "plural", snapshots: d, epoch: c }];
      }
    }
    function B(a, b, c, d, e) {
      b = t(b, c);
      c = babelHelpers["extends"]({}, b, { id: d.clientEdgeDestinationID });
      b = q(d.request, c, e == null ? void 0 : e.networkCacheConfig);
      d = i(a);
      return d.prepare(b, n(a, b), e == null ? void 0 : e.fetchPolicy);
    }
    function C(a, b, c) {
      if (b.kind === "bailout") return function () {};
      else if (b.kind === "singular") {
        var d = a.subscribe(b.snapshot, function (b) {
          c(function (c) {
            return c.kind !== "singular" || c.snapshot.selector !== b.selector
              ? c
              : {
                  kind: "singular",
                  snapshot: b,
                  epoch: a.getStore().getEpoch(),
                };
          });
        });
        return function () {
          d.dispose();
        };
      } else {
        var e = b.snapshots.map(function (b, d) {
          return a.subscribe(b, function (b) {
            c(function (c) {
              var e;
              if (
                c.kind !== "plural" ||
                ((e = c.snapshots[d]) == null ? void 0 : e.selector) !==
                  b.selector
              )
                return c;
              e = [].concat(c.snapshots);
              e[d] = b;
              return {
                kind: "plural",
                snapshots: e,
                epoch: a.getStore().getEpoch(),
              };
            });
          });
        });
        return function () {
          for (
            var a = e,
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
            d.dispose();
          }
        };
      }
    }
    function D(a, b) {
      if (b == null) return { kind: "bailout" };
      else if (b.kind === "PluralReaderSelector")
        return {
          kind: "plural",
          snapshots: b.selectors.map(function (b) {
            return a.lookup(b);
          }),
          epoch: a.getStore().getEpoch(),
        };
      else
        return {
          kind: "singular",
          snapshot: a.lookup(b),
          epoch: a.getStore().getEpoch(),
        };
    }
    function a(a, c, d, e, f) {
      var h,
        n = k(
          function () {
            return s(a, c);
          },
          [a, c]
        );
      h =
        (a == null ? void 0 : (h = a.metadata) == null ? void 0 : h.plural) ===
        !0;
      h
        ? c == null ||
          Array.isArray(c) ||
          g(
            0,
            13793,
            f != null ? " for key `" + f + "`" : "",
            a.name,
            typeof c,
            a.name
          )
        : Array.isArray(c) &&
          g(
            0,
            57387,
            f != null ? " for key `" + f + "`" : "",
            a.name,
            typeof c,
            a.name
          );
      c == null ||
        (h && Array.isArray(c) && c.length === 0) ||
        n != null ||
        g(
          0,
          37286,
          a.name,
          a.name,
          d,
          a.name,
          f == null ? "a fragment reference" : "the `" + f + "`",
          d
        );
      var q = b("react-relay/relay-hooks/useRelayEnvironment")();
      f = m(function () {
        return D(q, n);
      });
      var t = f[0],
        u = f[1],
        v = t;
      f = m(v);
      t = f[0];
      f = f[1];
      var E = t;
      t = m(n);
      var F = t[0];
      t = t[1];
      var G = m(q),
        H = G[0];
      G = G[1];
      if (!p(n, F) || q !== H) {
        t(n);
        G(q);
        F = D(q, n);
        u(F);
        f(F);
        v = F;
        E = F;
      }
      var I = l(!1);
      j(
        function () {
          I.current = n;
        },
        [n]
      );
      if (((H = a.metadata) == null ? void 0 : H.hasClientEdges) === !0) {
        var J = k(
          function () {
            var d = x(v),
              b;
            if (d == null ? void 0 : d.length) {
              b = [];
              for (
                var d = d,
                  f = Array.isArray(d),
                  g = 0,
                  d = f
                    ? d
                    : d[
                        typeof Symbol === "function"
                          ? Symbol.iterator
                          : "@@iterator"
                      ]();
                ;

              ) {
                var h;
                if (f) {
                  if (g >= d.length) break;
                  h = d[g++];
                } else {
                  g = d.next();
                  if (g.done) break;
                  h = g.value;
                }
                h = h;
                b.push(B(q, a, c, h, e));
              }
            }
            return b;
          },
          [v, q, a, c, e]
        );
        j(
          function () {
            var a = i(q);
            if (J == null ? void 0 : J.length) {
              var b = [];
              for (
                var c = J,
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
                b.push(a.retain(f));
              }
              return function () {
                for (var a = 0; a < b.length; a++) {
                  var c = b[a];
                  c.dispose();
                }
              };
            }
          },
          [q, J]
        );
      }
      if (w(v)) {
        t = y(v);
        if (t != null && t.length > 0)
          throw b("Promise").all(
            t.map(function (a) {
              a = a.liveStateID;
              return q.getStore().getLiveResolverPromise(a);
            })
          );
        if (!I.current || !p(I.current, n)) {
          n != null || g(0, 57388);
          G =
            n.kind === "PluralReaderSelector" ? n.selectors[0].owner : n.owner;
          f = r(q, a, G);
          if (f) throw f.promise;
        }
      }
      z(q, v);
      j(
        function () {
          var a = E,
            b = A(q, E);
          if (b !== null) {
            var c = b[0];
            b = b[1];
            c && u(b);
            a = b;
          }
          return C(q, a, u);
        },
        [q, E]
      );
      if (h) {
        var K = c == null;
        F = k(
          function () {
            if (v.kind === "bailout") return K ? null : [];
            else {
              v.kind === "plural" || g(0, 61167);
              return v.snapshots.map(function (a) {
                return a.data;
              });
            }
          },
          [v, K]
        );
      } else
        v.kind === "bailout"
          ? (F = null)
          : (v.kind === "singular" || g(0, 61166), (F = v.snapshot.data));
      (o.LOG_MISSING_RECORDS_IN_PROD || 0) &&
        c != null &&
        (F === void 0 ||
          (Array.isArray(F) &&
            F.length > 0 &&
            F.every(function (a) {
              return a === void 0;
            }))) &&
        b("warning")(
          !1,
          "Relay: Expected to have been able to read non-null data for fragment `%s` declared in `%s`, since fragment reference was non-null. Make sure that that `%s`'s parent isn't holding on to and/or passing a fragment reference for data that has been deleted.",
          a.name,
          d,
          d
        );
      return F;
    }
    e.exports = a;
  },
  null
);
__d(
  "react-relay/relay-hooks/react-cache/useFragment_REACT_CACHE",
  [
    "react",
    "react-relay/relay-hooks/loadQuery",
    "react-relay/relay-hooks/react-cache/useFragmentInternal_REACT_CACHE",
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
    function a(a, c) {
      h();
      a = i(a);
      a = b(
        "react-relay/relay-hooks/react-cache/useFragmentInternal_REACT_CACHE"
      )(a, c, "useFragment()");
      return a;
    }
    e.exports = a;
  },
  null
);
__d(
  "react-relay/relay-hooks/react-cache/useRefetchableFragmentInternal_REACT_CACHE",
  [
    "invariant",
    "react",
    "react-relay/relay-hooks/ProfilerContext",
    "react-relay/relay-hooks/QueryResource",
    "react-relay/relay-hooks/react-cache/readFragmentInternal_REACT_CACHE",
    "react-relay/relay-hooks/react-cache/useFragmentInternal_REACT_CACHE",
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
        "react-relay/relay-hooks/QueryResource"
      ).getQueryResourceForEnvironment;
    c = h || (h = b("react"));
    var j = c.useCallback,
      k = c.useContext,
      l = c.useReducer,
      m = b("relay-runtime").__internal.fetchQuery,
      n = b("relay-runtime").createOperationDescriptor,
      o = b("relay-runtime").getFragmentIdentifier,
      p = b("relay-runtime").getRefetchMetadata,
      q = b("relay-runtime").getSelector,
      r = b("relay-runtime").getValueAtPath;
    function s(a, b) {
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
        f = p(a, d),
        h = f.refetchableRequest,
        j = f.fragmentRefPathInResponse;
      f = f.identifierInfo;
      var n = o(a, c),
        q = l(s, {
          fetchPolicy: void 0,
          mirroredEnvironment: e,
          mirroredFragmentIdentifier: n,
          onComplete: void 0,
          refetchEnvironment: null,
          refetchQuery: null,
          renderPolicy: void 0,
        }),
        u = q[0];
      q = q[1];
      var v = u.fetchPolicy,
        w = u.mirroredEnvironment,
        x = u.mirroredFragmentIdentifier,
        y = u.onComplete,
        z = u.refetchEnvironment,
        A = u.refetchQuery,
        B = u.renderPolicy;
      z = (u = z) != null ? u : e;
      var C = i(z),
        D = k(b("react-relay/relay-hooks/ProfilerContext"));
      u = z !== w || n !== x;
      e = b("react-relay/relay-hooks/useQueryLoader")(h);
      var E = e[0];
      w = e[1];
      x = e[2];
      e = c;
      if (u) q({ type: "reset", environment: z, fragmentIdentifier: n }), x();
      else if (A != null && E != null) {
        var F,
          G = function (a) {
            y && y((a = a) != null ? a : null);
          },
          H = E.source != null ? E.source : m(z, A);
        u = D.wrapPrepareQueryResource(function () {
          return C.prepare(
            A,
            H,
            v,
            B,
            {
              error: G,
              complete: function () {
                G();
              },
            },
            E.fetchKey,
            D
          );
        });
        z = b(
          "react-relay/relay-hooks/react-cache/readFragmentInternal_REACT_CACHE"
        )(z, u.fragmentNode, u.fragmentRef, d).data;
        z != null || g(0, 13942);
        u = r(z, j);
        e = u;
      }
      z = b(
        "react-relay/relay-hooks/react-cache/useFragmentInternal_REACT_CACHE"
      )(a, e, d);
      u = t(d, q, x, z, n, a, j, f, w, c, h);
      return { fragmentData: z, fragmentRef: e, refetch: u };
    }
    function t(a, c, d, e, f, g, h, i, k, l, m) {
      var o = b("react-relay/relay-hooks/useIsMountedRef")(),
        p =
          (i == null ? void 0 : i.identifierField) != null &&
          e != null &&
          typeof e === "object"
            ? e[i.identifierField]
            : null;
      return j(
        function (e, f) {
          if (o.current !== !0) {
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
            j = f == null ? void 0 : f.fetchPolicy,
            r = f == null ? void 0 : f.UNSTABLE_renderPolicy;
          f = f == null ? void 0 : f.onComplete;
          var s = q(g, l),
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
          s = n(m, v, { force: !0 });
          k(s.request.variables, {
            fetchPolicy: j,
            __environment: h,
            __nameForWarning: "refetch",
          });
          c({
            type: "refetch",
            fetchPolicy: j,
            onComplete: f,
            refetchEnvironment: h,
            refetchQuery: s,
            renderPolicy: r,
          });
          return { dispose: d };
        },
        [f, c, d, p, k]
      );
    }
    var u;
    e.exports = a;
  },
  null
);
__d(
  "react-relay/relay-hooks/react-cache/usePaginationFragment_REACT_CACHE",
  [
    "react",
    "react-relay/relay-hooks/react-cache/useRefetchableFragmentInternal_REACT_CACHE",
    "react-relay/relay-hooks/useLoadMoreFunction",
    "react-relay/relay-hooks/useRelayEnvironment",
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
    function a(a, c) {
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
      c = b(
        "react-relay/relay-hooks/react-cache/useRefetchableFragmentInternal_REACT_CACHE"
      )(a, c, d);
      var i = c.fragmentData,
        n = c.fragmentRef,
        o = c.refetch;
      c = k(a, n);
      var p = m({
          componentDisplayName: d,
          connectionPathInFragmentData: f,
          direction: "backward",
          fragmentData: i,
          fragmentIdentifier: c,
          fragmentNode: a,
          fragmentRef: n,
          paginationMetadata: e,
          paginationRequest: g,
        }),
        q = p[0],
        r = p[1],
        s = p[2],
        t = p[3];
      p = m({
        componentDisplayName: d,
        connectionPathInFragmentData: f,
        direction: "forward",
        fragmentData: i,
        fragmentIdentifier: c,
        fragmentNode: a,
        fragmentRef: n,
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
    function m(a) {
      var c = b("react-relay/relay-hooks/useRelayEnvironment")(),
        d = i(!1),
        e = d[0],
        f = d[1],
        g = function (a) {
          var b;
          b = (b = c.getScheduler()) == null ? void 0 : b.schedule;
          b
            ? b(function () {
                f(a);
              })
            : f(a);
        };
      d = {
        start: function () {
          return g(!0);
        },
        complete: function () {
          return g(!1);
        },
        error: function () {
          return g(!1);
        },
      };
      var h = function () {
        return g(!1);
      };
      a = b("react-relay/relay-hooks/useLoadMoreFunction")(
        babelHelpers["extends"]({}, a, { observer: d, onReset: h })
      );
      d = a[0];
      h = a[1];
      a = a[2];
      return [d, h, e, a];
    }
    e.exports = a;
  },
  null
);
__d(
  "react-relay/relay-hooks/react-cache/useRefetchableFragment_REACT_CACHE",
  [
    "react",
    "react-relay/relay-hooks/react-cache/useRefetchableFragmentInternal_REACT_CACHE",
    "react-relay/relay-hooks/useStaticFragmentNodeWarning",
    "relay-runtime",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g;
    c = g || b("react");
    d = c.useDebugValue;
    var h = b("relay-runtime").getFragment;
    function a(a, c) {
      a = h(a);
      b("react-relay/relay-hooks/useStaticFragmentNodeWarning")(
        a,
        "first argument of useRefetchableFragment()"
      );
      a = b(
        "react-relay/relay-hooks/react-cache/useRefetchableFragmentInternal_REACT_CACHE"
      )(a, c, "useRefetchableFragment()");
      c = a.fragmentData;
      a = a.refetch;
      return [c, a];
    }
    e.exports = a;
  },
  null
);
__d(
  "RelayFBReactCacheImplementation",
  [
    "react-relay/relay-hooks/HooksImplementation",
    "react-relay/relay-hooks/react-cache/useFragment_REACT_CACHE",
    "react-relay/relay-hooks/react-cache/usePaginationFragment_REACT_CACHE",
    "react-relay/relay-hooks/react-cache/useRefetchableFragment_REACT_CACHE",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b("react-relay/relay-hooks/react-cache/useFragment_REACT_CACHE");
    function a() {
      b("react-relay/relay-hooks/HooksImplementation").inject({
        useFragment: g,
        usePaginationFragment: b(
          "react-relay/relay-hooks/react-cache/usePaginationFragment_REACT_CACHE"
        ),
        useRefetchableFragment: b(
          "react-relay/relay-hooks/react-cache/useRefetchableFragment_REACT_CACHE"
        ),
      });
    }
    c = { inject: a };
    f["default"] = c;
  },
  66
);
