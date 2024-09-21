/*FB_PKG_DELIM*/

__d(
  "VideoPlayerRelay_video$normalization.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "id",
        storageKey: null,
      };
      return {
        argumentDefinitions: [
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "VideoPlayerRelay_video$playerOrigin",
          },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "VideoPlayerRelay_video$playerSuborigin",
          },
        ],
        kind: "SplitOperation",
        metadata: {},
        name: "VideoPlayerRelay_video$normalization",
        selections: [
          a,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "animated_image_caption",
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
            name: "broadcaster_origin",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "broadcast_id",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "broadcast_status",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_live_streaming",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_live_trace_enabled",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_looping",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_video_broadcast",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_podcast_video",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "loop_count",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_spherical",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_spherical_enabled",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "unsupported_browser_message",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "MusicVideoMetadata",
            kind: "LinkedField",
            name: "pmv_metadata",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "__typename",
                storageKey: null,
              },
              a,
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "LatencySensitiveConfig",
            kind: "LinkedField",
            name: "latency_sensitive_config",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "broadcast_latency_sensitivity",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "LivePlaybackInstrumentationConfigParams",
            kind: "LinkedField",
            name: "live_playback_instrumentation_configs",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_client_triggered_trace_enabled",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_ncsr",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "permalink_url",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "captions_url",
            storageKey: null,
          },
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "player_origin",
                variableName: "VideoPlayerRelay_video$playerOrigin",
              },
              {
                kind: "Variable",
                name: "player_suborigin",
                variableName: "VideoPlayerRelay_video$playerSuborigin",
              },
            ],
            kind: "ScalarField",
            name: "dash_prefetch_experimental",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "VideoCaptionLocale",
            kind: "LinkedField",
            name: "video_available_captions_locales",
            plural: !0,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "localized_creation_method",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "video_status_type",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "can_use_oz",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "dash_manifest",
            storageKey: null,
          },
          {
            alias: "dash_manifest_url",
            args: [
              {
                kind: "Literal",
                name: "scrubbing_preference",
                value: "MPEG_DASH",
              },
            ],
            kind: "ScalarField",
            name: "playable_url",
            storageKey: 'playable_url(scrubbing_preference:"MPEG_DASH")',
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "min_quality_preference",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "audio_user_preferred_language",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_rss_podcast_video",
            storageKey: null,
          },
          {
            alias: "browser_native_sd_url",
            args: null,
            kind: "ScalarField",
            name: "playable_url",
            storageKey: null,
          },
          {
            alias: "browser_native_hd_url",
            args: [{ kind: "Literal", name: "quality", value: "HD" }],
            kind: "ScalarField",
            name: "playable_url",
            storageKey: 'playable_url(quality:"HD")',
          },
          {
            alias: null,
            args: null,
            concreteType: "SphericalVideoFallbackUrls",
            kind: "LinkedField",
            name: "spherical_video_fallback_urls",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "hd",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "sd",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_gaming_video",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_latency_menu_enabled",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "fbls_tier",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_latency_sensitive_broadcast",
            storageKey: null,
          },
          {
            kind: "ClientExtension",
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "selected_latency_setting",
                storageKey: null,
              },
            ],
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "comet_video_player_static_config",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "comet_video_player_context_sensitive_config",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "VideoPlayerShakaPerformanceLoggerInit",
            kind: "LinkedField",
            name: "video_player_shaka_performance_logger_init",
            plural: !1,
            selections: [
              {
                args: null,
                documentName:
                  "useVideoPlayerShakaPerformanceLoggerRelayImpl_video",
                fragmentName:
                  "useVideoPlayerShakaPerformanceLoggerRelayImpl_init",
                fragmentPropName: "init",
                kind: "ModuleImport",
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "video_player_shaka_performance_logger_should_sample",
            storageKey: null,
          },
          {
            alias: "video_player_shaka_performance_logger_init2",
            args: null,
            concreteType: "VideoPlayerShakaPerformanceLoggerInit",
            kind: "LinkedField",
            name: "video_player_shaka_performance_logger_init",
            plural: !1,
            selections: [
              {
                args: null,
                documentName:
                  "useVideoPlayerShakaPerformanceLoggerBuilder_video",
                fragmentName:
                  "useVideoPlayerShakaPerformanceLoggerBuilder_init",
                fragmentPropName: "init",
                kind: "ModuleImport",
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "per_session_sampling_rate",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "autoplay_gating_result",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "viewer_autoplay_setting",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "can_autoplay",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "drm_info",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "VideoP2PSettings",
            kind: "LinkedField",
            name: "p2p_settings",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "ticket",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "VideoP2PSettingsConfig",
                kind: "LinkedField",
                name: "config",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "delay_p2p_until_play",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "disable_hivejava_for_livevc",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "VideoHiveCommunityInfo",
                kind: "LinkedField",
                name: "community_info",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "community_id",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "community_name",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "VideoHiveInitializationOptions",
                kind: "LinkedField",
                name: "hive_initialization_options",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "VideoHiveInitializationOptionHiveJava",
                    kind: "LinkedField",
                    name: "hive_java",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "min_version",
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "hive_tech_order",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "debug_level",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "AudioSettings",
            kind: "LinkedField",
            name: "audio_settings",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "video_volume_setting",
                storageKey: null,
              },
              a,
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "CaptionsSettings",
            kind: "LinkedField",
            name: "captions_settings",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "always_show_captions",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "captions_background_color",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "captions_background_opacity",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "captions_text_color",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "captions_text_size",
                storageKey: null,
              },
              a,
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "VideoBroadcastLowLatencyConfig",
            kind: "LinkedField",
            name: "broadcast_low_latency_config",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "ll_desired_latency_ms",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "ll_latency_tolerance_ms",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "audio_availability",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "VideoMutedSegment",
            kind: "LinkedField",
            name: "muted_segments",
            plural: !0,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "mute_start_time_in_sec",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "mute_end_time_in_sec",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "SphericalVideoRenderer",
            kind: "LinkedField",
            name: "spherical_video_renderer",
            plural: !1,
            selections: [
              {
                args: null,
                documentName: "VideoPlayerRelay_video_spherical_video_renderer",
                fragmentName:
                  "VideoPlayerSphericalRelay_sphericalVideoRenderer",
                fragmentPropName: "sphericalVideoRenderer",
                kind: "ModuleImport",
              },
            ],
            storageKey: null,
          },
          {
            if: null,
            kind: "Defer",
            label:
              "VideoPlayerRelay_video$defer$InstreamVideoAdBreaksPlayer_video",
            selections: [
              a,
              {
                alias: null,
                args: null,
                concreteType: "InstreamExtraConfig",
                kind: "LinkedField",
                name: "instream_extra_config",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "instream_halo_delay_time_seconds",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "InstreamVideoAdBreaks",
                kind: "LinkedField",
                name: "instream_video_ad_breaks_comet",
                plural: !1,
                selections: [
                  {
                    args: null,
                    documentName:
                      "InstreamVideoAdBreaksPlayer_video_instream_video_ad_breaks_comet",
                    fragmentName: "InstreamVideoAdBreaksPlayerImpl_adBreaks",
                    fragmentPropName: "adBreaks",
                    kind: "ModuleImport",
                  },
                ],
                storageKey: null,
              },
            ],
          },
          {
            alias: null,
            args: null,
            concreteType: "VideoThumbnail",
            kind: "LinkedField",
            name: "preferred_thumbnail",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "Image",
                kind: "LinkedField",
                name: "image",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "uri",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "image_preview_payload",
                storageKey: null,
              },
              a,
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "VideoIMFData",
            kind: "LinkedField",
            name: "video_imf_data",
            plural: !1,
            selections: [
              {
                args: null,
                documentName: "useVideoPlayerIMFFromVideoMetadataRelay_video",
                fragmentName:
                  "useVideoPlayerIMFFromVideoMetadataRelay_video_imf_data",
                fragmentPropName: "video_imf_data",
                kind: "ModuleImport",
              },
            ],
            storageKey: null,
          },
        ],
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometFocusGroupFirstLetterNavigation",
  ["isStringNullOrEmpty", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    var h = a.useEffect,
      i = a.useState,
      j = function (a) {
        return a.slice(0, 1).toLowerCase();
      };
    b = function (a) {
      var b = i(void 0),
        d = b[0],
        e = b[1];
      h(
        function () {
          var b;
          b =
            a == null ? void 0 : (b = a.current) == null ? void 0 : b.innerText;
          c("isStringNullOrEmpty")(b) || e(j(b));
        },
        [a]
      );
      return d;
    };
    e = function (a) {
      if (a.type === "PRINT_CHAR") {
        a.event.stopPropagation();
        var b = a.event.key.toLowerCase();
        b = a.getItemByTag(b);
        b != null && a.focusItem(b);
      }
    };
    g.getFirstLetterNavigationTag = j;
    g.useFirstLetterNavigationTag = b;
    g.handleFirstLetterNavigation = e;
  },
  98
);
__d(
  "BaseHovercardTriggerWrapper.react",
  ["react", "stylex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        displayInline: { display: "xt0psk2", $$css: !0 },
        displayInlineBlock: { display: "x1rg5ohu", $$css: !0 },
      };
    function a(a) {
      var b = a.display;
      a = babelHelpers.objectWithoutPropertiesLoose(a, ["display"]);
      return b === "inline"
        ? h.jsx(
            "span",
            babelHelpers["extends"]({}, a, { className: "xt0psk2" })
          )
        : h.jsx(
            "div",
            babelHelpers["extends"]({}, a, {
              className: c("stylex")(
                b === "inline-block" && i.displayInlineBlock
              ),
            })
          );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useBaseHovercardTrigger",
  [
    "BaseContextualLayer.react",
    "BaseHovercardTriggerWrapper.react",
    "CometErrorBoundary.react",
    "CometHeroInteractionContextPassthrough.react",
    "CometPlaceholder.react",
    "FocusInertRegion.react",
    "FocusWithinHandler.react",
    "HiddenSubtreeContextProvider.react",
    "focusScopeQueries",
    "react",
    "stylex",
    "useCometDisplayTimingTrackerForInteraction",
    "useCometPrerenderer",
    "useDelayedState",
    "useFadeEffect",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
      j = b.useEffect,
      k = b.useRef,
      l = b.useState,
      m = 300,
      n = 50,
      o = {
        disablePointerEvents: { pointerEvents: "x47corl", $$css: !0 },
        hovercard: {
          opacity: "xg01cxk",
          transitionDuration: "x1ebt8du",
          transitionProperty: "x19991ni",
          transitionTimingFunction: "x1dhq9h",
          $$css: !0,
        },
        hovercardVisible: {
          opacity: "x1hc1fzr",
          transitionDuration: "xhb22t3",
          transitionTimingFunction: "xls3em1",
          $$css: !0,
        },
      };
    function a(a) {
      var b = a.children,
        e = a.display,
        f = a.fallback,
        g = a.onLoadEntryPoint,
        p = a.onVisibilityChange,
        q = babelHelpers.objectWithoutPropertiesLoose(a, [
          "children",
          "display",
          "fallback",
          "onLoadEntryPoint",
          "onVisibilityChange",
        ]);
      a = c("useDelayedState")(!1);
      var r = a[0],
        s = a[1];
      a = l(!1);
      var t = a[0],
        u = a[1];
      a = l(!1);
      var v = a[0],
        w = a[1];
      a = l(!1);
      var x = a[0],
        y = a[1];
      a = l(!1);
      var z = a[0],
        A = a[1],
        B = x && z && !v,
        C = k(null),
        D = k(null),
        E = c("useCometDisplayTimingTrackerForInteraction")("HoverCard"),
        F = i(
          function () {
            s(!1), u(!1), w(!0);
          },
          [s]
        ),
        G = i(
          function (a) {
            a.key === "Escape" && F();
          },
          [F]
        ),
        H = r || t || B,
        I = k(H);
      j(
        function () {
          I.current !== H && p && p(H), (I.current = H);
        },
        [H, p]
      );
      a = c("useFadeEffect")(H);
      var J = a[0],
        K = a[1],
        L = a[2];
      x = c("useCometPrerenderer")("tooltip", H);
      z = x[0].shouldPrerender;
      var M = z === void 0 ? !1 : z,
        N = x[1],
        O = x[2],
        P = i(
          function () {
            g && g();
          },
          [g]
        ),
        Q = function (a) {
          r || (s(!0, m), P()), !B && !t && N(a);
        },
        R = function () {
          s(!1, n), O();
        },
        S = function () {
          u(!1);
        },
        T = function () {
          u(!1);
        },
        U = function () {
          t || (u(!0), P());
        },
        V = function () {
          w(!1), P();
        };
      v = function (a) {
        return h.jsxs(c("BaseHovercardTriggerWrapper.react"), {
          display: e,
          onKeyDown: G,
          onMouseEnter: Q,
          onMouseLeave: R,
          onTouchCancel: S,
          onTouchEnd: T,
          onTouchStart: U,
          children: [
            h.jsx(c("FocusWithinHandler.react"), {
              onFocusChange: y,
              onFocusVisibleChange: A,
              onFocusWithin: V,
              children: b(C),
            }),
            (B || t || M || J) &&
              h.jsx(c("CometHeroInteractionContextPassthrough.react"), {
                clear: !0,
                children: h.jsx(c("CometErrorBoundary.react"), {
                  children: h.jsx(c("CometPlaceholder.react"), {
                    fallback: null,
                    children: h.jsx(
                      c("BaseContextualLayer.react"),
                      babelHelpers["extends"](
                        {
                          align: "middle",
                          contextRef: C,
                          hidden: !H && M,
                          imperativeRef: D,
                          ref: E,
                          xstyle: !H && J ? o.disablePointerEvents : void 0,
                        },
                        q,
                        {
                          children: h.jsx(
                            c("HiddenSubtreeContextProvider.react"),
                            {
                              isHidden: !H && M,
                              children: h.jsx("div", {
                                className: c("stylex")(
                                  o.hovercard,
                                  K && o.hovercardVisible
                                ),
                                ref: L,
                                children: h.jsx(c("FocusInertRegion.react"), {
                                  focusQuery:
                                    d("focusScopeQueries").tabbableScopeQuery,
                                  children:
                                    f != null
                                      ? h.jsx(c("CometPlaceholder.react"), {
                                          fallback: f,
                                          children: a,
                                        })
                                      : a,
                                }),
                              }),
                            }
                          ),
                        }
                      )
                    ),
                  }),
                }),
              }),
          ],
        });
      };
      return [v, F];
    }
    g["default"] = a;
  },
  98
);
__d(
  "BaseHovercardTrigger.react",
  [
    "BaseHovercardTriggerWrapper.react",
    "BaseSuppressHovercards",
    "CometHovercardSettingsContext",
    "CometRelay",
    "react",
    "useBaseHovercardTrigger",
    "useCometRelayEntrypointContextualEnvironmentProvider",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
      j = b.useContext,
      k = b.useRef,
      l = {};
    function m(a) {
      var b = a.popoverEntryPoint,
        e = a.popoverOtherProps;
      e = e === void 0 ? l : e;
      var f = a.popoverProps;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "popoverEntryPoint",
        "popoverOtherProps",
        "popoverProps",
      ]);
      var g = c("useCometRelayEntrypointContextualEnvironmentProvider")();
      g = d("CometRelay").useEntryPointLoader(g, b);
      b = g[0];
      var j = g[1];
      g = i(
        function () {
          j(f);
        },
        [j, f]
      );
      a = c("useBaseHovercardTrigger")(
        babelHelpers["extends"]({}, a, { onLoadEntryPoint: g })
      );
      g = a[0];
      return g(
        h.jsx(h.Fragment, {
          children:
            b != null &&
            h.jsx(d("CometRelay").EntryPointContainer, {
              entryPointReference: b,
              props: e,
            }),
        })
      );
    }
    m.displayName = m.name + " [from " + f.id + "]";
    function a(a) {
      var b = j(c("CometHovercardSettingsContext"));
      b = b.hovercardInteractionPreference;
      b = d("BaseSuppressHovercards").useIsHovercardSuppressed() || b === 1;
      var e = k(null);
      return b
        ? h.jsx(c("BaseHovercardTriggerWrapper.react"), {
            display: a.display,
            children: a.children(e),
          })
        : h.jsx(m, babelHelpers["extends"]({}, a));
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometEmoji.react",
  ["CometImage.react", "FBEmojiResource", "react", "stylex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        root: {
          display: "x3nfvp2",
          fontStyle: "x1j61x8r",
          fontWeight: "x1fcty0u",
          marginTop: "xdj266r",
          marginEnd: "xhhsvwb",
          marginBottom: "xat24cr",
          marginStart: "xgzva0m",
          verticalAlign: "xxymvpz",
          $$css: !0,
        },
        size128: { height: "x1nbnut7", width: "x2pejg6", $$css: !0 },
        size16: { height: "xlup9mm", width: "x1kky2od", $$css: !0 },
        size18: { height: "xmix8c7", width: "x1xp8n7a", $$css: !0 },
        size20: { height: "x1qx5ct2", width: "xw4jnvo", $$css: !0 },
        size24: { height: "xxk0z11", width: "xvy4d1p", $$css: !0 },
        size28: { height: "x1fgtraw", width: "xgd8bvy", $$css: !0 },
        size30: { height: "x1gnnpzl", width: "x1849jeq", $$css: !0 },
        size32: { height: "x10w6t97", width: "x1td3qas", $$css: !0 },
        size56: { height: "xnnlda6", width: "x15yg21f", $$css: !0 },
      };
    function a(a) {
      var b = a.emoji,
        d = a.resource,
        e = a.size;
      e = e === void 0 ? 16 : e;
      a = a.testid;
      a = d || c("FBEmojiResource").fromCodepoints(b);
      d = a != null ? a.getImageURL(e) : null;
      a = b.join("");
      return d == null
        ? h.jsx("span", {
            className:
              "x3nfvp2 x1j61x8r x1fcty0u xdj266r xhhsvwb xat24cr xgzva0m xxymvpz",
            children: a,
          })
        : h.jsx("span", {
            className: c("stylex")(
              i.root,
              e === 16 && i.size16,
              e === 18 && i.size18,
              e === 20 && i.size20,
              e === 24 && i.size24,
              e === 28 && i.size28,
              e === 30 && i.size30,
              e === 32 && i.size32,
              e === 56 && i.size56,
              e === 128 && i.size128
            ),
            "data-testid": void 0,
            children: h.jsx(c("CometImage.react"), {
              alt: a,
              height: e,
              src: d,
              width: e,
            }),
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometHovercardTrigger.react",
  ["BaseHovercardTrigger.react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("BaseHovercardTrigger.react");
  },
  98
);
__d(
  "focusKeyboardEventPropagation",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return a._stopFocusKeyboardPropagation === !0;
    }
    function b(a) {
      a._stopFocusKeyboardPropagation = !0;
    }
    f.hasFocusKeyboardEventPropagationStopped = a;
    f.stopFocusKeyboardEventPropagation = b;
  },
  66
);
__d(
  "FocusGroup.react",
  [
    "FocusManager",
    "Locale",
    "ReactFocusEvent.react",
    "ReactKeyboardEvent.react",
    "focusKeyboardEventPropagation",
    "gkx",
    "react",
    "setElementCanTab",
  ],
  function (a, b, c, d, e, f, g) {
    var h = d("react");
    b = d("react");
    var i = b.useContext,
      j = b.useMemo,
      k = b.useRef,
      l = 5;
    function m(a) {
      return a.length === 1;
    }
    function n(a, b, c, e) {
      d("focusKeyboardEventPropagation").stopFocusKeyboardEventPropagation(c);
      b = b.DO_NOT_USE_queryFirstNode(a);
      b !== null &&
        (document.activeElement != null &&
          d("setElementCanTab").setElementCanTab(document.activeElement, !1),
        d("setElementCanTab").setElementCanTab(b, !0),
        d("FocusManager").focusElement(b, { preventScroll: e }),
        c.preventDefault());
    }
    function o(a, b, c, d, e, f) {
      b = b.onNavigate;
      if (b && d) {
        var g = !1,
          h = p(d, e);
        e = {
          currentIndex: h,
          event: c,
          focusItem: function (a, b) {
            a = a.scopeRef.current;
            a && n(b || f, a, c);
          },
          getItem: function (a) {
            return t(d, a);
          },
          getItemByTag: function (a) {
            var b = d.length,
              c = h + 1;
            while (!0) {
              if (c === h) return null;
              if (c > b - 1) {
                c = 0;
                continue;
              }
              var e = d[c];
              if (e) {
                var f = e.disabled,
                  g = e.scopeRef,
                  i = e.tag;
                g = g.current;
                if (g && f !== !0 && i === a) return e;
              }
              c++;
            }
            return null;
          },
          preventDefault: function () {
            g = !0;
          },
          type: a,
        };
        b(e);
        if (g) return !0;
      }
      return !1;
    }
    function p(a, b) {
      for (var c = 0; c < a.length; c++) {
        var d = a[c];
        if (d && d.scopeRef.current === b) return c;
      }
      return -1;
    }
    function q(a, b, c) {
      var d = a.scopeRef.current;
      if (d === null) return null;
      if (c !== null) {
        d = p(c, b);
        b = a.wrap;
        a = u(c, d - 1);
        return !a && b === !0 ? u(c, c.length - 1) : a;
      }
      return null;
    }
    function r(a, b, c) {
      var d = a.scopeRef.current;
      if (d === null) return null;
      if (c.length > 0) {
        d = p(c, b);
        b = a.wrap;
        a = s(c, d + 1);
        return !a && b === !0 ? s(c, 0) : a;
      }
      return null;
    }
    function s(a, b) {
      var d = a.length;
      if (b > d) return null;
      b = b;
      while (b < d) {
        var e = a[b];
        if (c("gkx")("5403")) {
          if (e !== null) return e.scopeRef.current;
        } else if (e !== null && e.disabled !== !0) return e.scopeRef.current;
        b++;
      }
      return null;
    }
    function t(a, b) {
      b = b;
      while (b >= 0) {
        var d = a[b];
        if (c("gkx")("5403")) {
          if (d !== null) return d;
        } else if (d !== null && d.disabled !== !0) return d;
        b--;
      }
      return null;
    }
    function u(a, b) {
      a = t(a, b);
      return a ? a.scopeRef.current : null;
    }
    function v(a) {
      var b = a.altKey,
        c = a.ctrlKey,
        d = a.metaKey;
      a = a.shiftKey;
      return b === !0 || c === !0 || d === !0 || a === !0;
    }
    function a(a) {
      var b = h.unstable_Scope,
        c = h.createContext(null),
        e = h.createContext(null);
      function g(e) {
        var f = e.children,
          g = e.orientation,
          i = e.wrap,
          m = e.tabScopeQuery,
          n = e.allowModifiers,
          o = e.preventScrollOnFocus,
          p = o === void 0 ? !1 : o;
        o = e.pageJumpSize;
        var q = o === void 0 ? l : o,
          r = e.onNavigate,
          s = k(null);
        o = j(
          function () {
            return {
              scopeRef: s,
              orientation: g,
              wrap: i,
              tabScopeQuery: m,
              allowModifiers: n,
              pageJumpSize: q,
              preventScrollOnFocus: p,
              onNavigate: r,
            };
          },
          [g, i, m, n, q, p, r]
        );
        var u = k(!1);
        e = d("ReactFocusEvent.react").useFocusWithin(
          s,
          j(
            function () {
              return {
                onFocusWithin: function (b) {
                  u.current ||
                    ((u.current = !0),
                    s.current &&
                      a &&
                      (t(s.current, a),
                      d("setElementCanTab").setElementCanTab(b.target, !0)));
                },
              };
            },
            [u]
          )
        );
        return h.jsx(c.Provider, {
          value: o,
          children: h.jsx(b, { ref: e, children: f }),
        });
      }
      g.displayName = g.name + " [from " + f.id + "]";
      function t(a, b) {
        var c = document.activeElement;
        a = a.DO_NOT_USE_queryAllNodes(b);
        if (a !== null)
          for (b = 0; b < a.length; b++) {
            var e = a[b];
            e !== c
              ? d("setElementCanTab").setElementCanTab(e, !1)
              : d("setElementCanTab").setElementCanTab(e, !0);
          }
      }
      function w(f) {
        var g = f.children,
          l = f.disabled;
        f = f.tag;
        var w = k(null),
          x = i(c);
        d("ReactKeyboardEvent.react").useKeyboard(
          w,
          j(
            function () {
              return {
                onKeyDown: function (b) {
                  if (
                    d(
                      "focusKeyboardEventPropagation"
                    ).hasFocusKeyboardEventPropagationStopped(b)
                  )
                    return;
                  var c = w.current;
                  if (c !== null && x !== null) {
                    var f =
                        x.orientation === "vertical" ||
                        x.orientation === "both",
                      g =
                        x.orientation === "horizontal" ||
                        x.orientation === "both",
                      h = x.scopeRef.current,
                      i = b.key,
                      j = x.preventScrollOnFocus;
                    if (i === "Tab" && h !== null) {
                      var k = x.tabScopeQuery;
                      if (k) {
                        if (x.onNavigate) {
                          var l = h.getChildContextValues(e);
                          if (o("TAB", x, b, l, c, k)) return;
                        }
                        t(h, k);
                      }
                      return;
                    }
                    if (v(b)) {
                      l = x.allowModifiers;
                      if (l !== !0) return;
                    }
                    if (h === null) return;
                    k = i;
                    d("Locale").isRTL() &&
                      (i === "ArrowRight"
                        ? (k = "ArrowLeft")
                        : i === "ArrowLeft" && (k = "ArrowRight"));
                    switch (k) {
                      case "Home":
                        l = h.getChildContextValues(e);
                        if (o("HOME", x, b, l, c, a)) return;
                        k = s(l, 0);
                        if (k) {
                          n(a, k, b, j);
                          return;
                        }
                        break;
                      case "End":
                        l = h.getChildContextValues(e);
                        if (o("END", x, b, l, c, a)) return;
                        k = u(l, l.length - 1);
                        if (k) {
                          n(a, k, b, j);
                          return;
                        }
                        break;
                      case "PageUp":
                        l = h.getChildContextValues(e);
                        if (o("PAGE_UP", x, b, l, c, a)) return;
                        k = x.pageJumpSize;
                        var y = p(l, c);
                        l = s(l, Math.max(0, y - k));
                        if (l) {
                          n(a, l, b, j);
                          return;
                        }
                        break;
                      case "PageDown":
                        y = h.getChildContextValues(e);
                        if (o("PAGE_DOWN", x, b, y, c, a)) return;
                        k = x.pageJumpSize;
                        l = p(y, c);
                        y = u(y, Math.min(y.length - 1, l + k));
                        if (y) {
                          n(a, y, b, j);
                          return;
                        }
                        break;
                      case "ArrowUp":
                        if (f) {
                          l = h.getChildContextValues(e);
                          if (o("PREV_ITEM", x, b, l, c, a)) return;
                          k = b.metaKey || b.ctrlKey ? s(l, 0) : q(x, c, l);
                          if (k) {
                            n(a, k, b, j);
                            return;
                          }
                        }
                        break;
                      case "ArrowDown":
                        if (f) {
                          y = h.getChildContextValues(e);
                          if (o("NEXT_ITEM", x, b, y, c, a)) return;
                          l =
                            b.metaKey || b.ctrlKey
                              ? u(y, y.length - 1)
                              : r(x, c, y);
                          if (l) {
                            n(a, l, b, j);
                            return;
                          }
                        }
                        break;
                      case "ArrowLeft":
                        if (g) {
                          k = h.getChildContextValues(e);
                          if (o("PREV_ITEM", x, b, k, c, a)) return;
                          f = b.metaKey || b.ctrlKey ? s(k, 0) : q(x, c, k);
                          if (f) {
                            n(a, f, b, j);
                            return;
                          }
                        }
                        break;
                      case "ArrowRight":
                        if (g) {
                          y = h.getChildContextValues(e);
                          if (o("NEXT_ITEM", x, b, y, c, a)) return;
                          l =
                            b.metaKey || b.ctrlKey
                              ? u(y, y.length - 1)
                              : r(x, c, y);
                          l && n(a, l, b, j);
                        }
                        break;
                      default:
                        if (m(i) && x.onNavigate) {
                          k = h.getChildContextValues(e);
                          o("PRINT_CHAR", x, b, k, c, a);
                        }
                    }
                  }
                },
              };
            },
            [x]
          )
        );
        var y = d("ReactFocusEvent.react").useFocusWithin(
          w,
          j(
            function () {
              return {
                onFocusWithin: function (b) {
                  if (a != null) {
                    var c;
                    c =
                      (c = w.current) == null
                        ? void 0
                        : c.DO_NOT_USE_queryFirstNode(a);
                    b = b.target === c;
                    if (b && c && !d("setElementCanTab").canElementTab(c)) {
                      b = x == null ? void 0 : x.scopeRef.current;
                      b && t(b, a);
                    }
                  }
                },
              };
            },
            [x == null ? void 0 : x.scopeRef]
          )
        );
        l = { scopeRef: w, disabled: l, tag: f };
        return h.jsx(e.Provider, {
          value: l,
          children: h.jsx(b, { ref: y, children: g }),
        });
      }
      w.displayName = w.name + " [from " + f.id + "]";
      return [g, w];
    }
    g.createFocusGroup = a;
  },
  98
);
__d(
  "CometMenuFocusGroup",
  [
    "fbt",
    "CometComponentWithKeyCommands.react",
    "CometKeys",
    "FocusGroup.react",
    "focusScopeQueries",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("FocusGroup.react").createFocusGroup(
      d("focusScopeQueries").tabbableScopeQuery
    );
    var j = b[0];
    e = b[1];
    function a(a) {
      var b = [
        {
          command: { key: c("CometKeys").UP },
          description: h._("\u00c9l\u00e9ment pr\u00e9c\u00e9dent"),
          handler: function () {},
        },
        {
          command: { key: c("CometKeys").DOWN },
          description: h._("\u00c9l\u00e9ment suivant"),
          handler: function () {},
        },
      ];
      return i.jsx(c("CometComponentWithKeyCommands.react"), {
        commandConfigs: b,
        children: i.jsx(j, babelHelpers["extends"]({}, a)),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    d = { FocusGroup: a, FocusItem: e };
    g["default"] = d;
  },
  98
);
__d(
  "CometHovercardGroupContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({ groupID: void 0 });
    c = b;
    g["default"] = c;
  },
  98
);
__d(
  "ActorHovercardContext",
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
  "useActorHovercardContext",
  ["ActorHovercardContext", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useContext;
    function a() {
      var a = h(c("ActorHovercardContext"));
      return (a = a) != null ? a : "DEFAULT";
    }
    g["default"] = a;
  },
  98
);
__d(
  "ActorHovercard.react",
  [
    "CometDangerouslySuppressInteractiveElementsContext",
    "CometEntryPointPopoverTrigger.react",
    "CometHovercardGroupContext",
    "CometHovercardQueryRenderer.entrypoint",
    "CometHovercardSettingsContext",
    "CometHovercardTrigger.react",
    "CometPopoverLoadingState.react",
    "CometPressable.react",
    "react",
    "useActorHovercardContext",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useContext,
      j = b.useRef,
      k = {
        displayBlock: { display: "x1lliihq", $$css: !0 },
        displayInline: { display: "xt0psk2", $$css: !0 },
        displayInlineBlock: { display: "x1rg5ohu", $$css: !0 },
        fitContent: { height: "xg7h5cd", $$css: !0 },
      };
    function a(a) {
      var b = a.actorID,
        d = a.align;
      d = d === void 0 ? "middle" : d;
      var e = a.children,
        f = a.display,
        g = a.position;
      g = g === void 0 ? "above" : g;
      var l = a.showHovercardOnClick;
      l = l === void 0 ? !1 : l;
      var m = a.stopClickPropagation,
        n = m === void 0 ? !1 : m,
        o = babelHelpers.objectWithoutPropertiesLoose(a, [
          "actorID",
          "align",
          "children",
          "display",
          "position",
          "showHovercardOnClick",
          "stopClickPropagation",
        ]);
      m = c("useActorHovercardContext")();
      a = i(c("CometHovercardGroupContext"));
      a = a.groupID;
      var p = i(c("CometHovercardSettingsContext"));
      p = p.hovercardInteractionPreference;
      l = l || p === 3;
      p = "WWW_COMET_HOVERCARD";
      m === "CIVIC_POST" && (p = "WWW_COMET_CIVIC_PROFILE_HOVERCARD");
      var q = j(null);
      return l
        ? h.jsx(c("CometEntryPointPopoverTrigger.react"), {
            align: d,
            entryPointParams: {
              actionBarRenderLocation: p,
              context: m,
              entityID: b,
              groupID: a,
            },
            fallback: h.jsx(c("CometPopoverLoadingState.react"), {}),
            otherProps: {},
            popoverEntryPoint: c("CometHovercardQueryRenderer.entrypoint"),
            position: g,
            stopClickPropagation: n,
            children: function (a, b, d, g, i, j, l, m) {
              return h.jsx(
                c("CometDangerouslySuppressInteractiveElementsContext")
                  .Provider,
                {
                  value: !1,
                  children: h.jsx(
                    c("CometPressable.react"),
                    babelHelpers["extends"]({}, o, {
                      "aria-expanded": m ? m : void 0,
                      display: "inline",
                      onPress: function (a) {
                        n === !0 && a.stopPropagation(), b(a);
                      },
                      overlayDisabled: !0,
                      ref: a,
                      role: "button",
                      xstyle: [
                        k.fitContent,
                        f === "inline"
                          ? k.displayInline
                          : f === "inline-block"
                          ? k.displayInlineBlock
                          : k.displayBlock,
                      ],
                      children: h.jsx(
                        c("CometDangerouslySuppressInteractiveElementsContext")
                          .Provider,
                        { value: !0, children: e(q) }
                      ),
                    })
                  ),
                }
              );
            },
          })
        : h.jsx(c("CometHovercardTrigger.react"), {
            align: d,
            display: f,
            popoverEntryPoint: c("CometHovercardQueryRenderer.entrypoint"),
            popoverProps: {
              actionBarRenderLocation: p,
              context: m,
              entityID: b,
              groupID: a,
            },
            position: g,
            stopClickPropagation: n,
            children: e,
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useRelayClientStateWithLocalStorage",
  ["CometRelay", "FBLogger", "WebStorage", "react", "useStable"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useEffect,
      j = new Set();
    function a(a, b, e, f) {
      var g = j.has(b),
        k = d("CometRelay").useRelayEnvironment(),
        l = c("useStable")(c("WebStorage").getLocalStorage),
        m = c("useStable")(function () {
          if (g || l == null) return f;
          var a = l.getItem(b);
          try {
            return a == null || a === "" ? f : JSON.parse(a);
          } catch (a) {
            return f;
          }
        }),
        n = h(
          function (c) {
            d("CometRelay").commitLocalUpdate(k, function (d) {
              d = d.get(a);
              if (d == null) return;
              if (d.getValue(e) === c) return;
              d.setValue(c, e);
              j.add(b);
            });
          },
          [k, e, a, b]
        );
      i(
        function () {
          if (l == null) return;
          if (!g) return;
          var a = JSON.stringify(f);
          if (a == null) return;
          try {
            l.setItem(b, a);
          } catch (b) {
            b != null && typeof b === "object" && b.code === 22 && l.clear();
            a = c("FBLogger")("use_local_storage");
            b instanceof Error && (a = a.catching(b));
            a.mustfix("Cannot save to local storage.");
          }
        },
        [b, g, l, f]
      );
      return [g ? f : m, n];
    }
    g.useRelayClientStateWithLocalStorage = a;
  },
  98
);
__d(
  "useFeedClickEventHandler",
  ["react", "useStoryClickEventLogger"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;
    function a(a, b) {
      var d = c("useStoryClickEventLogger")();
      return h(
        function (c) {
          a && a(c);
          var e = c.type;
          if (
            e === "click" ||
            e === "contextmenu" ||
            (e === "mousedown" &&
              typeof c.button === "number" &&
              (c.button === 1 || c.button === 2)) ||
            (e === "keydown" && (c.key === "Enter" || c.key === " "))
          ) {
            e = typeof c.button === "number" ? c.button : 0;
            d(c.timeStamp, e, b);
          }
        },
        [a, d, b]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometNotificationsRootContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = { isNotificationsRoute: !1, source: null };
    c = a.createContext(b);
    g["default"] = c;
  },
  98
);
__d(
  "ProfileCometLinkContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({ groupID: null });
    g["default"] = b;
  },
  98
);
__d(
  "useVideoPlayerControllerSubscription",
  ["VideoPlayerHooks", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useEffect,
      i = b.useLayoutEffect,
      j = b.useRef,
      k = b.useState;
    function a(a) {
      var b = d("VideoPlayerHooks").useController(),
        c = k(function () {
          return a(b, null);
        }),
        e = c[0],
        f = c[1],
        g = j(a);
      i(
        function () {
          g.current = a;
        },
        [a]
      );
      h(
        function () {
          f(function (a) {
            return g.current(b, a);
          });
          var a = b.subscribe(function () {
            f(function (a) {
              return g.current(b, a);
            });
          });
          return function () {
            a.remove();
          };
        },
        [b]
      );
      return e;
    }
    g["default"] = a;
  },
  98
);
__d(
  "useAudioAvailabilityAtPlayhead",
  [
    "VideoPlayerAudioAvailabilityInfo",
    "VideoPlayerHooks",
    "useVideoPlayerControllerSubscription",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      var a = d("VideoPlayerHooks").useAudioAvailabilityInfo();
      function b(b, c) {
        b = b.getPlayheadPosition();
        b = d(
          "VideoPlayerAudioAvailabilityInfo"
        ).makeVideoPlayerAudioAvailabilityAtPlayheadInfo(a, {
          playheadPosition: b,
        });
        return c != null &&
          c.isPlayheadWithinMutedSegment === b.isPlayheadWithinMutedSegment &&
          c.isSilentAtPlayhead === b.isSilentAtPlayhead &&
          c.volumeControlState === b.volumeControlState
          ? c
          : b;
      }
      return c("useVideoPlayerControllerSubscription")(b);
    }
    g["default"] = a;
  },
  98
);
__d(
  "CastingStateHooks",
  ["CastingContext", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useContext;
    function a() {
      var a = h(d("CastingContext").CastingStateContext);
      return (a == null ? void 0 : a.receiverIsConnected) || !1;
    }
    function i() {
      var a = s();
      return a == null ? null : a.currentVideoID;
    }
    function b() {
      var a = i();
      return a != null;
    }
    function c() {
      var a = s();
      return a == null ? 0 : a.currentPosition || 0;
    }
    function e() {
      var a = s();
      return a == null ? 0 : a.currentDuration || 0;
    }
    function f() {
      var a = s();
      if (a == null) return !1;
      a = a.currentPlaybackState;
      return a === "play" || a === "seeking";
    }
    function j() {
      var a = s();
      if (a == null) return !1;
      a = a.currentPlaybackState;
      return a === "paused";
    }
    function k() {
      var a = s();
      if (a == null) return !1;
      a = a.currentPlaybackState;
      return a === "ended";
    }
    function l() {
      var a = h(d("CastingContext").CastingStateContext);
      return a == null || !a.receiverIsConnected
        ? !1
        : a.receiverIsMuted === !0;
    }
    function m() {
      var a = h(d("CastingContext").CastingStateContext);
      return a == null || !a.receiverIsConnected ? 0 : a.receiverVolume || 0;
    }
    function n() {
      var a = h(d("CastingContext").CastingStateContext);
      return a == null || !a.receiverIsConnected
        ? null
        : a.receiverFriendlyName;
    }
    function o() {
      var a = t();
      return a == null ? !1 : !0;
    }
    function p() {
      var a = u();
      return a == null ? !1 : a.currentPlaybackState === "paused";
    }
    function q() {
      var a = u();
      return a == null ? !1 : a.currentPlaybackState === "play";
    }
    function r() {
      var a = u();
      return a == null ? null : a.currentAssetID;
    }
    function s() {
      var a = h(d("CastingContext").CastingStateContext),
        b = h(d("CastingContext").CastingExperienceStateContext);
      if (a == null || !a.receiverIsConnected) return null;
      return (b == null ? void 0 : b.type) !== "video_channel" ? null : b;
    }
    function t() {
      var a = h(d("CastingContext").CastingStateContext),
        b = h(d("CastingContext").CastingExperienceStateContext);
      if (a == null || !a.receiverIsConnected) return null;
      return (b == null ? void 0 : b.type) !== "photo" ? null : b;
    }
    function u() {
      var a = h(d("CastingContext").CastingStateContext),
        b = h(d("CastingContext").CastingExperienceStateContext);
      if (a == null || !a.receiverIsConnected) return null;
      return (b == null ? void 0 : b.type) !== "photo_album" ? null : b;
    }
    g.useIsCastingConnected = a;
    g.useCastingVideoID = i;
    g.useIsCastingAnyVideo = b;
    g.useCastingCurrentTime = c;
    g.useCastingDuration = e;
    g.useCastingIsPlaying = f;
    g.useCastingIsPaused = j;
    g.useCastingIsEnded = k;
    g.useCastingIsMuted = l;
    g.useCastingVolume = m;
    g.useCastingReceiverFriendlyName = n;
    g.useIsCastingPhotoExperience = o;
    g.useCastingIsAlbumPaused = p;
    g.useCastingIsAlbumPlaying = q;
    g.useCastingAlbumAssetID = r;
  },
  98
);
__d(
  "VideoPlayerInteractionOverlay.react",
  [
    "VideoPlayerHooks",
    "createVideoStateHook",
    "performanceNow",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useCallback,
      j = {
        hiddenCursor: { cursor: "xjfk50j", $$css: !0 },
        pointer: { cursor: "x1ypdohk", $$css: !0 },
        root: {
          bottom: "x1ey2m1c",
          boxSizing: "x9f619",
          end: "xds687c",
          position: "x10l6tqk",
          start: "x17qophe",
          top: "x13vifvy",
          $$css: !0,
        },
      };
    b = d("createVideoStateHook").createVideoStateHook(null);
    var k = b.setterHook;
    e = b.valueHook;
    function a(a, b) {
      var e = a.children,
        f = a.pressInteraction,
        g = a.style;
      a = a.xstyle;
      var l = k(),
        m = i(
          function (a) {
            a.preventDefault(),
              l({
                left: a.clientX,
                time: c("performanceNow")(),
                top: a.clientY,
              });
          },
          [l]
        ),
        n = f == null ? void 0 : f.handler,
        o = f == null ? void 0 : f.onPressStart,
        p = f == null ? void 0 : f.onMouseEnter;
      f = f == null ? void 0 : f.onMouseLeave;
      var q = d("VideoPlayerHooks").useIsFullscreen(),
        r = d("VideoPlayerHooks").useIsMouseIdle();
      return h.jsx("div", {
        className: c("stylex")(
          j.root,
          !!n && j.pointer,
          q && r && j.hiddenCursor,
          a
        ),
        onClick: n,
        onContextMenu: m,
        onMouseEnter: p,
        onMouseLeave: f,
        onPointerDown: o,
        ref: b,
        role: "presentation",
        style: g,
        children: e,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    f = e;
    g.VideoPlayerInteractionOverlay = b;
    g.useLastRightClick = f;
  },
  98
);
__d(
  "VideoPlayerPlayButton.react",
  ["fbt", "ix", "CometImage.react", "CometPressable.react", "react", "stylex"],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = {
        playIcon: {
          borderTopStartRadius: "x14yjl9h",
          borderTopEndRadius: "xudhj91",
          borderBottomEndRadius: "x18nykt9",
          borderBottomStartRadius: "xww2gxu",
          cursor: "x1ypdohk",
          height: "xy75621",
          marginTop: "xafmxuu",
          marginEnd: "x11i5rnm",
          marginBottom: "xat24cr",
          marginStart: "x4mskuk",
          opacity: "x1hc1fzr",
          position: "x10l6tqk",
          start: "xtzzx4i",
          top: "xwa60dl",
          width: "xni59qk",
          $$css: !0,
        },
        playIconHidden: {
          opacity: "xg01cxk",
          visibility: "xlshs6z",
          $$css: !0,
        },
      };
    function a(a) {
      var b = a.isVisible;
      a = a.onClick;
      var d = j.jsx(c("CometImage.react"), { src: i("352839") });
      a =
        a != null
          ? j.jsx(c("CometPressable.react"), {
              display: "inline",
              label: h._("Lire la vid\u00e9o"),
              onPress: a,
              overlayDisabled: !0,
              children: d,
            })
          : d;
      return j.jsx("i", {
        className: c("stylex")(k.playIcon, !b && k.playIconHidden),
        children: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerSmallPlayButton.react",
  ["fbt", "CometImage.react", "CometPressable.react", "react", "stylex"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = {
        playIcon: {
          borderTopStartRadius: "x14yjl9h",
          borderTopEndRadius: "xudhj91",
          borderBottomEndRadius: "x18nykt9",
          borderBottomStartRadius: "xww2gxu",
          cursor: "x1ypdohk",
          height: "xsdox4t",
          marginTop: "xs9mwh0",
          marginEnd: "x11i5rnm",
          marginBottom: "xat24cr",
          marginStart: "x10ndw75",
          opacity: "x1hc1fzr",
          position: "x10l6tqk",
          start: "xtzzx4i",
          top: "xwa60dl",
          width: "x1useyqa",
          $$css: !0,
        },
        playIconHidden: {
          opacity: "xg01cxk",
          visibility: "xlshs6z",
          $$css: !0,
        },
      };
    function a(a) {
      var b = a.isVisible;
      a = a.onClick;
      var d = i.jsx(c("CometImage.react"), {
        src: "/images/video/play_48dp.png",
      });
      a =
        a != null
          ? i.jsx(c("CometPressable.react"), {
              display: "inline",
              label: h._("Lire la vid\u00e9o"),
              onPress: a,
              overlayDisabled: !0,
              children: d,
            })
          : d;
      return i.jsx("i", {
        className: c("stylex")(j.playIcon, !b && j.playIconHidden),
        children: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerControlsHiddenContext",
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
  "VideoPlayerControlIcon.react",
  [
    "BaseFocusRing.react",
    "BaseTooltip.react",
    "CometPressable.react",
    "CometTooltipImpl.react",
    "TetraIcon.react",
    "VideoPlayerControlsHiddenContext",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useContext,
      j = {
        default: {
          backgroundColor: "xjbqb8w",
          borderTop: "x76ihet",
          borderEnd: "xwmqs3e",
          borderBottom: "x112ta8",
          borderStart: "xxxdfa6",
          cursor: "x1ypdohk",
          display: "x1rg5ohu",
          height: "x1qx5ct2",
          marginTop: "x1k70j0n",
          marginEnd: "x1w0mnb",
          marginBottom: "xzueoph",
          marginStart: "x1mnrxsn",
          opacity: "x1iy03kw",
          outline: "x1a2a7pz",
          paddingTop: "xexx8yu",
          paddingEnd: "x4uap5",
          paddingBottom: "x18d9i69",
          paddingStart: "xkhd6sd",
          ":hover_opacity": "x1o7uuvo",
          $$css: !0,
        },
        disabled: {
          cursor: "xt0e3qv",
          opacity: "xbyyjgo",
          ":hover_opacity": "xj34u2y",
          $$css: !0,
        },
        dropShadow: { filter: "x1qo4wvw", $$css: !0 },
        tooltipWrapperInner: {
          alignItems: "xuk3077",
          display: "x78zum5",
          width: "x14atkfc",
          $$css: !0,
        },
        tooltipWrapperOuter: {
          alignItems: "xuk3077",
          display: "x78zum5",
          width: "x14atkfc",
          $$css: !0,
        },
      };
    function k(a) {
      var b = a.children,
        d = a.tooltipOffsetY;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "children",
        "tooltipOffsetY",
      ]);
      d = Math.min(0, (d = d) != null ? d : 0);
      return h.jsx("span", {
        className: "xuk3077 x78zum5 x14atkfc",
        style: { marginTop: d },
        children: h.jsx(
          c("BaseTooltip.react"),
          babelHelpers["extends"]({}, a, {
            children: h.jsx("span", {
              className: "xuk3077 x78zum5 x14atkfc",
              style: { paddingTop: -d },
              children: b,
            }),
          })
        ),
      });
    }
    k.displayName = k.name + " [from " + f.id + "]";
    function a(a) {
      var b = a.color,
        d = b === void 0 ? "white" : b,
        e = a.disabled,
        f = a.icon,
        g = a.label;
      b = a.tooltip;
      b = b === void 0 ? null : b;
      var l = a.tooltipAlign;
      l = l === void 0 ? "start" : l;
      var m = a.tooltipImpl,
        n = a.tooltipOffsetY,
        o = babelHelpers.objectWithoutPropertiesLoose(a, [
          "color",
          "disabled",
          "icon",
          "label",
          "tooltip",
          "tooltipAlign",
          "tooltipImpl",
          "tooltipOffsetY",
        ]),
        p = i(c("VideoPlayerControlsHiddenContext"));
      return h.jsx(k, {
        align: l,
        position: "above",
        tooltip: b,
        tooltipImpl: (a = m) != null ? a : c("CometTooltipImpl.react"),
        tooltipOffsetY: n,
        children: h.jsx(c("BaseFocusRing.react"), {
          children: function (a) {
            return h.jsx(
              c("CometPressable.react"),
              babelHelpers["extends"]({}, o, {
                disabled: e,
                display: "inline",
                label: g,
                overlayDisabled: !0,
                testid: void 0,
                xstyle: [
                  j["default"],
                  e === !0 && j.disabled,
                  a,
                  p === !0 && j.dropShadow,
                ],
                children: h.jsx(c("TetraIcon.react"), { color: d, icon: f }),
              })
            );
          },
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerControlsBottomRowAddOnContext",
  ["react", "useStable"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    d = d("react");
    var i = d.useContext,
      j = d.useEffect,
      k = d.useState,
      l = h.createContext(null);
    function a(a) {
      a = a.children;
      var b = c("useStable")(function () {
        var a = null,
          b = null,
          c = null;
        return {
          getBottomRowAddOn: function () {
            return b;
          },
          initialize: function (d) {
            c = function (a) {
              (b = a), d(a);
            };
            if (a == null) return;
            c(a);
            a = null;
          },
          setBottomRowAddOn: function (b) {
            if (c == null) {
              a = b;
              return;
            }
            c(b);
          },
        };
      });
      return h.jsx(l.Provider, { value: b, children: a });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function b(a) {
      var b = i(l);
      a = k(a);
      var c = a[0],
        d = a[1];
      j(
        function () {
          if (b == null) return;
          b.initialize(d);
        },
        [b]
      );
      return c;
    }
    b.displayName = b.name + " [from " + f.id + "]";
    function e(a) {
      var b = i(l);
      j(
        function () {
          if (b == null) return;
          b.setBottomRowAddOn(a);
        },
        [a, b]
      );
    }
    g.VideoPlayerControlsBottomRowAddOnContext = l;
    g.VideoPlayerControlsBottomRowAddOnContextProvider = a;
    g.useVideoPlayerControlsBottomRowAddOn = b;
    g.useSetVideoPlayerControlsBottomRowAddOn = e;
  },
  98
);
__d(
  "VideoPlayerDefaultControlsProperties",
  ["$InternalEnum"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("$InternalEnum").Mirrored([
      "SAME_AS_OTHER_CONTROLS",
      "SEPARATE_FROM_OTHER_CONTROLS",
    ]);
    c = b("$InternalEnum")({
      VIDEO_CAPTIONS_MENU: "video_captions_menu",
      VIDEO_SETTINGS_MENU: "video_settings_menu",
    });
    f.MutedButtonVisibility = a;
    f.VideoMenuType = c;
  },
  66
);
__d(
  "VideoPlayerUserInteractionCounter",
  ["react", "unrecoverableViolation", "usePrevious"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    e = d("react");
    var h = e.useCallback,
      i = e.useEffect,
      j = e.useRef,
      k = e.useState;
    function a(a, b, d) {
      var e = j(a);
      i(
        function () {
          if (a !== e.current)
            throw c("unrecoverableViolation")(
              "User interaction name should not change between renders ('" +
                e.current +
                "' -> '" +
                a +
                "').",
              "comet_video_player"
            );
        },
        [a]
      );
      var f = j(d);
      i(
        function () {
          f.current = d;
        },
        [d]
      );
      var g = c("usePrevious")(b),
        h = j(!1);
      i(
        function () {
          var a = e.current,
            c = f.current;
          c &&
            (g === null || b !== g) &&
            (b
              ? ((h.current = !0), c({ name: a, type: "started" }))
              : g !== null &&
                ((h.current = !1), c({ name: a, type: "ended" })));
        },
        [b, g]
      );
      i(function () {
        var a = e.current,
          b = f.current;
        return function () {
          b && h.current && b({ name: a, type: "ended" });
        };
      }, []);
    }
    function b() {
      var a = j(new Set()),
        b = k(0),
        c = b[0],
        d = b[1];
      b = h(function (b) {
        var c = a.current;
        b.type === "started" || b.type === "happening"
          ? (c.add(b.name), d(c.size))
          : b.type === "ended" && (c["delete"](b.name), d(c.size));
      }, []);
      return { ongoingInteractionsCount: c, onUserInteraction: b };
    }
    g.useVideoPlayerUserInteraction = a;
    g.useVideoPlayerUserInteractionCounter = b;
  },
  98
);
__d(
  "useSelectedLatencySetting",
  ["useRelayClientStateWithLocalStorage"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h =
      "_video_LiveVideoLatencyMenuContextProvider_selected_latency_setting";
    function i(a) {
      if (a == null) return null;
      switch (a) {
        case "low":
        case "normal":
          return a;
        default:
          return null;
      }
    }
    function a(a, b) {
      b = d(
        "useRelayClientStateWithLocalStorage"
      ).useRelayClientStateWithLocalStorage(
        a,
        h,
        "selected_latency_setting",
        (a = i(b)) != null ? a : "normal"
      );
      a = b[0];
      b = b[1];
      return [a, b];
    }
    g["default"] = a;
  },
  98
);
__d(
  "useVideoPlayerHasStartedPlayingAtLeastOnce",
  ["VideoPlayerHooks", "createVideoStateHook", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useEffect;
    b = d("createVideoStateHook").createVideoStateHook(null);
    var i = b.stateHook;
    function a() {
      var a = i(!1),
        b = a[0],
        c = a[1],
        e = d("VideoPlayerHooks").usePlaying();
      h(
        function () {
          e && c(!0);
        },
        [e, c]
      );
      return b;
    }
    g["default"] = a;
  },
  98
);
__d(
  "useVideoPlayerBigPlayButtonOverlay",
  [
    "VideoPlayerHooks",
    "VideoPlayerPlayButton.react",
    "VideoPlayerSmallPlayButton.react",
    "react",
    "useVideoPlayerHasStartedPlayingAtLeastOnce",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useCallback;
    function a(a) {
      a = a === void 0 ? {} : a;
      var b = a.buttonSize;
      b = b === void 0 ? "large" : b;
      var e = a.forceVisible,
        f = a.overrideInteraction,
        g = a.shouldUnmute;
      a = c("useVideoPlayerHasStartedPlayingAtLeastOnce")();
      var j = d("VideoPlayerHooks").usePaused(),
        k = d("VideoPlayerHooks").useLastMuteReason(),
        l = d("VideoPlayerHooks").useController(),
        m = i(
          function () {
            l.play("user_initiated"),
              g === !0 &&
                k !== "user_initiated" &&
                l.setMuted(!1, "product_initiated");
          },
          [l, k, g]
        );
      f = f != null ? f.handler : m;
      m = e === !0 || e === !1 ? e : !a && j;
      e =
        b === "small"
          ? h.jsx(c("VideoPlayerSmallPlayButton.react"), {
              isVisible: m,
              onClick: f,
            })
          : h.jsx(c("VideoPlayerPlayButton.react"), {
              isVisible: m,
              onClick: f,
            });
      return { bigPlayButtonElement: e, bigPlayButtonIsVisible: m };
    }
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerInstreamAdsStateHooks",
  ["createVideoStateHook"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("createVideoStateHook").createVideoStateHook(),
      i = h.stateHook,
      j = h.valueHook,
      k = [];
    function a() {
      return i(k);
    }
    function b() {
      return j(k);
    }
    h = d("createVideoStateHook").createVideoStateHook();
    var l = h.stateHook,
      m = h.valueHook,
      n = null;
    function c() {
      return l(n);
    }
    function e() {
      return m(n);
    }
    h = d("createVideoStateHook").createVideoStateHook();
    var o = h.setterHook,
      p = h.valueHook,
      q = !0;
    function f() {
      return o(q);
    }
    function r() {
      return p(q);
    }
    h = d("createVideoStateHook").createVideoStateHook();
    var s = h.stateHook,
      t = h.valueHook,
      u = "INIT";
    function v() {
      return s(u);
    }
    function w() {
      return t(u);
    }
    h = d("createVideoStateHook").createVideoStateHook();
    var x = h.stateHook,
      y = h.valueHook,
      z = !0;
    function A() {
      return x(z);
    }
    function B() {
      return y(z);
    }
    h = d("createVideoStateHook").createVideoStateHook();
    var C = h.stateHook,
      D = h.valueHook,
      E = null;
    function F() {
      return C(E);
    }
    function G() {
      return D(E);
    }
    h = d("createVideoStateHook").createVideoStateHook();
    var H = h.stateHook,
      I = h.valueHook,
      J = null;
    function K() {
      return H(J);
    }
    function L() {
      return I(J);
    }
    h = d("createVideoStateHook").createVideoStateHook();
    var M = h.stateHook,
      N = h.valueHook,
      O = null;
    function P() {
      return M(O);
    }
    function Q() {
      return N(O);
    }
    h = d("createVideoStateHook").createVideoStateHook();
    var R = h.stateHook,
      S = h.valueHook,
      T = null;
    function U() {
      return R(T);
    }
    function aa() {
      return S(T);
    }
    h = d("createVideoStateHook").createVideoStateHook();
    var ba = h.stateHook,
      ca = h.valueHook,
      V = null;
    function da() {
      return ba(V);
    }
    function ea() {
      return ca(V);
    }
    h = d("createVideoStateHook").createVideoStateHook();
    var fa = h.stateHook,
      ga = h.valueHook,
      W = 0;
    function ha() {
      return fa(W);
    }
    function ia() {
      return ga(W);
    }
    h = d("createVideoStateHook").createVideoStateHook();
    var ja = h.stateHook,
      ka = h.valueHook,
      X = !1;
    function la() {
      return ja(X);
    }
    function ma() {
      return ka(X);
    }
    h = d("createVideoStateHook").createVideoStateHook();
    var na = h.stateHook,
      oa = h.valueHook,
      Y = !1;
    function pa() {
      return na(Y);
    }
    function qa() {
      return oa(Y);
    }
    h = d("createVideoStateHook").createVideoStateHook();
    var ra = h.stateHook,
      sa = h.valueHook,
      Z = null;
    function ta() {
      return ra(Z);
    }
    function ua() {
      return sa(Z);
    }
    h = d("createVideoStateHook").createVideoStateHook();
    var va = h.stateHook,
      wa = h.valueHook,
      $ = null;
    function xa() {
      return va($);
    }
    function ya() {
      return wa($);
    }
    function za() {
      var a = w();
      return (
        a === "STARTING_INDICATOR" ||
        a === "START" ||
        a === "START_AD" ||
        a === "PLAY_NI_VIDEO"
      );
    }
    g.useInstreamAdsMidRollsState = a;
    g.useInstreamAdsMidRollsValue = b;
    g.useInstreamAdsPostRollState = c;
    g.useInstreamAdsPostRollValue = e;
    g.useInstreamAdsPostRollEndedOrSkippedStateSetter = f;
    g.useInstreamAdsPostRollEndedOrSkippedStateValue = r;
    g.useInstreamAdsState = v;
    g.useInstreamAdsStateValue = w;
    g.useInstreamAdsIsEmptyState = A;
    g.useInstreamAdsIsEmptyStateValue = B;
    g.useInstreamAdsCurrentInsertionState = F;
    g.useInstreamAdsCurrentInsertionStateValue = G;
    g.useStartIndicatorBeginningTimeState = K;
    g.useStartIndicatorBeginningTimeStateValue = L;
    g.useAdBreaksTimeOffsetBeginningState = P;
    g.useAdBreaksTimeOffsetBeginningStateValue = Q;
    g.useInstreamAdsExtraFieldsState = U;
    g.useInstreamAdsExtraFieldsStateValue = aa;
    g.useInstreamAdsHideAdBehaviorState = da;
    g.useInstreamAdsHideAdBehaviorStateValue = ea;
    g.useUnifiedSchedulerLastFetchTimeState = ha;
    g.useUnifiedSchedulerLastFetchTimeStateValue = ia;
    g.useWaitingForAdFetchState = la;
    g.useWaitingForAdFetchStateValue = ma;
    g.useInstreamAdsHasCTAState = pa;
    g.useInstreamAdsHasCTAStateValue = qa;
    g.useInstreamAdsFeedContextCardState = ta;
    g.useInstreamAdsFeedContextCardStateValue = ua;
    g.useInstreamAdsFullScreenContextCardState = xa;
    g.useInstreamAdsFullScreenContextCardStateValue = ya;
    g.useInstreamAdsIsStart = za;
  },
  98
);
__d(
  "CometVideoPictureInPictureManagerContext",
  ["gkx", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    e = d("react").createContext;
    f = e({
      openPipPlayer: function () {},
      setController: function () {},
      setPipPortableVideoID: function () {},
    });
    d = e({
      hasNextChainedVideo: !1,
      isPipEnabled: !1,
      setHasNextChainedVideo: function () {},
      setSkippedFromPipPlayer: function () {},
      skippedFromPipPlayer: !1,
    });
    function a() {
      return c("gkx")("3610");
    }
    function b() {
      return !1;
    }
    g.CometVideoPictureInPictureManagerAPIContext = f;
    g.CometVideoPictureInPictureManagerContext = d;
    g.isInPictureInPictureExp = a;
    g.isInPictureInPictureExpControlGroup = b;
  },
  98
);
__d(
  "CometRouteRenderType",
  ["CometRouterRenderTypeContext", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useContext;
    function a() {
      var a = h(c("CometRouterRenderTypeContext"));
      return a === "pushView";
    }
    function b() {
      var a = h(c("CometRouterRenderTypeContext"));
      return a === "hosted";
    }
    function e() {
      var a = h(c("CometRouterRenderTypeContext"));
      return a === "main";
    }
    g.useIsPushView = a;
    g.useIsHosted = b;
    g.useIsMain = e;
  },
  98
);
__d(
  "useCometRouteTracePolicy",
  ["CometRouterRouteTracePolicyContext", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useContext,
      i = "comet.app";
    function a() {
      var a;
      return (a = h(c("CometRouterRouteTracePolicyContext"))) != null ? a : i;
    }
    g["default"] = a;
  },
  98
);
__d(
  "usePlayerOriginRouteTracePolicy",
  [
    "CometNotificationsRootContext",
    "CometRouteRenderType",
    "react",
    "useCometRouteTracePolicy",
    "useCometRouterState",
    "useParentRoute",
    "useRoutePassthroughProps",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useContext;
    function a() {
      var a = h(c("CometNotificationsRootContext"));
      a = a.isNotificationsRoute;
      var b = c("useCometRouteTracePolicy")(),
        e = d("CometRouteRenderType").useIsPushView(),
        f = c("useParentRoute")(),
        g = c("useCometRouterState")(),
        i = c("useRoutePassthroughProps")();
      if ((i == null ? void 0 : i.isARLTW) === !0) return "comet.watch.arltw";
      i = b === "comet.videos.tahoe";
      var j = b === "comet.stories.viewer",
        k = b === "comet.reels.home";
      if (e) {
        if (i) return "unknown";
        if (j) return b;
        if (k && (f == null ? void 0 : f.tracePolicy) == null && g != null) {
          e = g.main;
          j = g.pushViewStack;
          k = j && j.length > 1 ? j[j.length - 2] : e;
          g = k.route;
          return (j = g.tracePolicy) != null ? j : b;
        }
      }
      return a && !i
        ? b
        : (e = f == null ? void 0 : f.tracePolicy) != null
        ? e
        : b;
    }
    g["default"] = a;
  },
  98
);
__d(
  "AsyncTypedRequest",
  ["AsyncRequest"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b) {
        b = a.call(this, b) || this;
        b.setReplaceTransportMarkers();
        return b;
      }
      var c = b.prototype;
      c.promisePayload = function (b) {
        return a.prototype.promisePayload.call(this, b);
      };
      c.setPayloadHandler = function (b) {
        a.prototype.setPayloadHandler.call(this, b);
        return this;
      };
      return b;
    })(c("AsyncRequest"));
    g["default"] = a;
  },
  98
);
__d(
  "XCometContextualProfileControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/groups/{group_idorvanity}/user/{member_id}/",
      Object.freeze({}),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
