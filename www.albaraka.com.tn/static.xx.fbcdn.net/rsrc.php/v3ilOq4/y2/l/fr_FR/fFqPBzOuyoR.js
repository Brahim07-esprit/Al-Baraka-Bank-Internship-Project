/*FB_PKG_DELIM*/

__d(
  "usePremiumMusicVideoInterruptionSubscription_facebookRelayOperation",
  [],
  function (a, b, c, d, e, f) {
    e.exports = "5597508366945721";
  },
  null
);
__d(
  "usePremiumMusicVideoInterruptionSubscription.graphql",
  ["usePremiumMusicVideoInterruptionSubscription_facebookRelayOperation"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        c = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType:
              "PremiumMusicVideoInterruptionSubscribeResponsePayload",
            kind: "LinkedField",
            name: "premium_music_video_interruption_subscribe",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "disable_autoplay",
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
          name: "usePremiumMusicVideoInterruptionSubscription",
          selections: c,
          type: "Subscription",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "usePremiumMusicVideoInterruptionSubscription",
          selections: c,
        },
        params: {
          id: b(
            "usePremiumMusicVideoInterruptionSubscription_facebookRelayOperation"
          ),
          metadata: {
            subscriptionName: "premium_music_video_interruption_subscribe",
          },
          name: "usePremiumMusicVideoInterruptionSubscription",
          operationKind: "subscription",
          text: null,
        },
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "VideoPlayerRelayFragmentRefetchQuery_facebookRelayOperation",
  [],
  function (a, b, c, d, e, f) {
    e.exports = "7195062830510352";
  },
  null
);
__d(
  "VideoPlayerRelayFragmentRefetchQuery.graphql",
  [
    "VideoPlayerRelay_video$normalization.graphql",
    "VideoPlayerRelayFragmentRefetchQuery_facebookRelayOperation",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = { defaultValue: null, kind: "LocalArgument", name: "id" },
        c = { defaultValue: null, kind: "LocalArgument", name: "playerOrigin" },
        d = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "playerSuborigin",
        },
        e = [{ kind: "Variable", name: "id", variableName: "id" }];
      return {
        fragment: {
          argumentDefinitions: [a, c, d],
          kind: "Fragment",
          metadata: null,
          name: "VideoPlayerRelayFragmentRefetchQuery",
          selections: [
            {
              alias: null,
              args: e,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                {
                  args: [
                    {
                      kind: "Variable",
                      name: "playerOrigin",
                      variableName: "playerOrigin",
                    },
                    {
                      kind: "Variable",
                      name: "playerSuborigin",
                      variableName: "playerSuborigin",
                    },
                  ],
                  kind: "FragmentSpread",
                  name: "VideoPlayerRelay_video",
                },
              ],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [c, d, a],
          kind: "Operation",
          name: "VideoPlayerRelayFragmentRefetchQuery",
          selections: [
            {
              alias: null,
              args: e,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "__typename",
                  storageKey: null,
                },
                {
                  args: [
                    {
                      kind: "Variable",
                      name: "VideoPlayerRelay_video$playerOrigin",
                      variableName: "playerOrigin",
                    },
                    {
                      kind: "Variable",
                      name: "VideoPlayerRelay_video$playerSuborigin",
                      variableName: "playerSuborigin",
                    },
                  ],
                  fragment: b("VideoPlayerRelay_video$normalization.graphql"),
                  kind: "FragmentSpread",
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "id",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: b("VideoPlayerRelayFragmentRefetchQuery_facebookRelayOperation"),
          metadata: {},
          name: "VideoPlayerRelayFragmentRefetchQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "VideoPlayerRelay_video.graphql",
  ["VideoPlayerRelayFragmentRefetchQuery.graphql"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [
        { defaultValue: null, kind: "LocalArgument", name: "playerOrigin" },
        { defaultValue: null, kind: "LocalArgument", name: "playerSuborigin" },
      ],
      kind: "Fragment",
      metadata: {
        refetch: {
          connection: null,
          fragmentPathInResult: ["node"],
          operation: b("VideoPlayerRelayFragmentRefetchQuery.graphql"),
          identifierInfo: {
            identifierField: "id",
            identifierQueryVariableName: "id",
          },
        },
      },
      name: "VideoPlayerRelay_video",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
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
              variableName: "playerOrigin",
            },
            {
              kind: "Variable",
              name: "player_suborigin",
              variableName: "playerSuborigin",
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
          args: null,
          kind: "FragmentSpread",
          name: "useVideoPlayerVideoStatusRelay_video",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "useVideoImplementationsParamsRelayImpl_video",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "useVideoPlayerShakaConfig_video",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "useResolvedVideoPlayerConfigs_video",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "useVideoPlayerShakaPerformanceLoggerRelayImpl_video",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "useVideoPlayerShakaPerformanceLoggerBuilder_video",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "useGraphQLVideoAutoplayGatingResult_video",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "useGraphQLVideoDRMInfo_video",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "useGraphQLVideoP2PSettings_video",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "useVideoPlayerAudioSettings_video",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "useVideoPlayerCaptionsSettings_video",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "useVideoPlayerLiveLatencyKnobSettings_video",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "useVideoPlayerAudioAvailabilityInfoRelay_video",
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
              fragmentName: "VideoPlayerSphericalRelay_sphericalVideoRenderer",
              fragmentPropName: "sphericalVideoRenderer",
              kind: "ModuleImport",
            },
          ],
          storageKey: null,
        },
        {
          kind: "Defer",
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "InstreamVideoAdBreaksPlayer_video",
            },
          ],
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "VideoPlayerVideoIsCastingCover_video",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "useVideoPlayerIMFFromVideoMetadataRelay_video",
        },
      ],
      type: "Video",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "useVideoPlayerAudioSettings_video.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "useVideoPlayerAudioSettings_video",
      selections: [
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
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "audio_user_preferred_language",
          storageKey: null,
        },
      ],
      type: "Video",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "useVideoPlayerAudioAvailabilityInfoRelay_video.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "useVideoPlayerAudioAvailabilityInfoRelay_video",
      selections: [
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
      ],
      type: "Video",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "useGraphQLVideoAutoplayGatingResult_video.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "useGraphQLVideoAutoplayGatingResult_video",
      selections: [
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
      ],
      type: "Video",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "VideoPlayerDefaultControls_video.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "VideoPlayerDefaultControls_video",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "VideoPlayerDefaultControlsImplLive_video",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "VideoPlayerDefaultControlsImplNotLive_video",
        },
      ],
      type: "Video",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "useGraphQLVideoDRMInfo_video.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "useGraphQLVideoDRMInfo_video",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "drm_info",
          storageKey: null,
        },
      ],
      type: "Video",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "useVideoPlayerIMFFromVideoMetadataRelay_video.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "useVideoPlayerIMFFromVideoMetadataRelay_video",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
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
      type: "Video",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "useVideoPlayerIMFFromVideoMetadataRelay_video_imf_data.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "useVideoPlayerIMFFromVideoMetadataRelay_video_imf_data",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "spec_inline_json",
          storageKey: null,
        },
      ],
      type: "VideoIMFData",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "InstreamVideoAdBreaksPlayer_video.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "InstreamVideoAdBreaksPlayer_video",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
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
      type: "Video",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "useVideoPlayerShakaPerformanceLoggerBuilder_init.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "useVideoPlayerShakaPerformanceLoggerBuilder_init",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
      ],
      type: "VideoPlayerShakaPerformanceLoggerInit",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "useVideoPlayerShakaPerformanceLoggerBuilder_video.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "useVideoPlayerShakaPerformanceLoggerBuilder_video",
      selections: [
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
              documentName: "useVideoPlayerShakaPerformanceLoggerBuilder_video",
              fragmentName: "useVideoPlayerShakaPerformanceLoggerBuilder_init",
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
      ],
      type: "Video",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "useVideoPlayerShakaPerformanceLoggerRelayImpl_init.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "useVideoPlayerShakaPerformanceLoggerRelayImpl_init",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
      ],
      type: "VideoPlayerShakaPerformanceLoggerInit",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "useVideoPlayerShakaPerformanceLoggerRelayImpl_video.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "useVideoPlayerShakaPerformanceLoggerRelayImpl_video",
      selections: [
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
      ],
      type: "Video",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "useGraphQLVideoP2PSettings_video.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "useGraphQLVideoP2PSettings_video",
      selections: [
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
      ],
      type: "Video",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "useVideoImplementationsParamsRelayImpl_video.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "useVideoImplementationsParamsRelayImpl_video",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
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
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_spherical",
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
      ],
      type: "Video",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "useVideoPlayerCaptionsSettings_video.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "useVideoPlayerCaptionsSettings_video",
      selections: [
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
          ],
          storageKey: null,
        },
      ],
      type: "Video",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "useVideoPlayerLiveLatencyKnobSettings_video.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "useVideoPlayerLiveLatencyKnobSettings_video",
      selections: [
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
      ],
      type: "Video",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "useVideoPlayerShakaConfig_video.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "useVideoPlayerShakaConfig_video",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
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
          name: "is_live_streaming",
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
      ],
      type: "Video",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "BaseAspectRatioContainer.react",
  ["react", "stylex", "unrecoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.aspectRatio,
        d = a.children,
        e = a.contentStyle,
        f = a.style,
        g = a.testid;
      g = a.xstyle;
      if (b <= 0)
        throw c("unrecoverableViolation")(
          "Aspect ratio must be a non-zero, positive number: " + b,
          "comet_ui"
        );
      return h.jsx("div", {
        className: c("stylex")(i.container, g),
        "data-testid": void 0,
        style: babelHelpers["extends"]({}, f, { paddingTop: 100 / b + "%" }),
        children:
          d != null &&
          h.jsx("div", { className: c("stylex")(i.content, e), children: d }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    var i = {
      container: {
        height: "xqtp20y",
        position: "x1n2onr6",
        width: "xh8yej3",
        $$css: !0,
      },
      content: {
        alignItems: "x1qjc9v5",
        borderBottomStyle: "x1q0q8m5",
        borderBottomWidth: "x1qhh985",
        borderEndStyle: "xu3j5b3",
        borderEndWidth: "xcfux6l",
        borderStartStyle: "x26u7qi",
        borderStartWidth: "xm0m39n",
        borderTopStyle: "x13fuv20",
        borderTopWidth: "x972fbf",
        bottom: "x1ey2m1c",
        boxSizing: "x9f619",
        display: "x78zum5",
        end: "xds687c",
        flexDirection: "xdt5ytf",
        flexGrow: "x1iyjqo2",
        flexShrink: "xs83m0k",
        justifyContent: "x1qughib",
        marginBottom: "xat24cr",
        marginEnd: "x11i5rnm",
        marginStart: "x1mh8g0r",
        marginTop: "xdj266r",
        minHeight: "x2lwn1j",
        minWidth: "xeuugli",
        paddingBottom: "x18d9i69",
        paddingEnd: "x4uap5",
        paddingStart: "xkhd6sd",
        paddingTop: "xexx8yu",
        position: "x10l6tqk",
        start: "x17qophe",
        top: "x13vifvy",
        zIndex: "x1ja2u2z",
        $$css: !0,
      },
    };
    g["default"] = a;
  },
  98
);
__d(
  "BaseContainerQueryElement.react",
  ["react", "stylex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        root: {
          boxSizing: "x9f619",
          flexShrink: "x2lah0s",
          position: "x1n2onr6",
          $$css: !0,
        },
      };
    function a(a, b) {
      var d = a.breakpoint,
        e = a.inverseToContainer;
      e = e === void 0 ? !1 : e;
      var f = a.maxWidth,
        g = a.minWidth,
        j = a.xstyle;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "breakpoint",
        "inverseToContainer",
        "maxWidth",
        "minWidth",
        "xstyle",
      ]);
      d = d - 0.1;
      return h.jsx(
        "div",
        babelHelpers["extends"]({}, a, {
          className: c("stylex")(i.root, j),
          ref: b,
          style: {
            maxWidth: f,
            minWidth: g,
            width: e
              ? "calc((" + d + "px - 100%) * 9999)"
              : "calc((100% - " + d + "px) * 9999)",
          },
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "CometAspectRatioContainer.react",
  ["BaseAspectRatioContainer.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react"), (g["default"] = c("BaseAspectRatioContainer.react"));
  },
  98
);
__d(
  "Dots3HorizontalFilled24.svg.react",
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
              h.jsx("circle", { cx: 12, cy: 12, r: 2.5 }),
              h.jsx("circle", { cx: 19.5, cy: 12, r: 2.5 }),
              h.jsx("circle", { cx: 4.5, cy: 12, r: 2.5 }),
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
  "CometOverlappingFacepile.react",
  [
    "fbt",
    "BaseContainerQueryElement.react",
    "CometComponentWithKeyCommands.react",
    "CometIcon.react",
    "CometKeys",
    "CometPressable.react",
    "CometProfilePhoto.react",
    "CometTooltip.react",
    "CometVisualCompletionAttributes",
    "Dots3HorizontalFilled24.svg.react",
    "FocusGroup.react",
    "ReactDOMComet",
    "SVGIcon",
    "TetraText.react",
    "focusScopeQueries",
    "gkx",
    "react",
    "stylex",
    "useCometUniqueID",
    "useIntersectionObserver",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useCallback,
      k = b.useRef,
      l = b.useState;
    e = d("FocusGroup.react").createFocusGroup(
      d("focusScopeQueries").tabbableScopeQuery
    );
    var m = e[0],
      n = e[1],
      o = -4,
      p = {
        item: { marginBottom: "xieb3on", position: "x1n2onr6", $$css: !0 },
        items: {
          display: "x78zum5",
          flexDirection: "x1q0g3np",
          flexShrink: "x2lah0s",
          flexWrap: "x1a02dak",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          position: "x1n2onr6",
          $$css: !0,
        },
        itemWithoutMargin: { position: "x1n2onr6", $$css: !0 },
        itemWithSpacing: { marginStart: "x139jcc6", $$css: !0 },
        overflow16: { height: "xlup9mm", width: "x1kky2od", $$css: !0 },
        overflow16Child: {
          alignItems: "x6s0dn4",
          display: "x78zum5",
          justifyContent: "xl56j7k",
          marginStart: "xbmpl8g",
          $$css: !0,
        },
        overflow16Frame: {
          marginStart: "x1mnrxsn",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          width: "x1fsd2vl",
          $$css: !0,
        },
        overflow24: { height: "xxk0z11", width: "xvy4d1p", $$css: !0 },
        overflow32: { height: "x10w6t97", width: "x1td3qas", $$css: !0 },
        overflow36: { height: "xc9qbxq", width: "x14qfxbe", $$css: !0 },
        overflow40: { height: "x1vqgdyp", width: "x100vrsf", $$css: !0 },
        overflow48: { height: "xsdox4t", width: "x1useyqa", $$css: !0 },
        overflowItem: {
          alignItems: "x6s0dn4",
          borderTopStartRadius: "x14yjl9h",
          borderTopEndRadius: "xudhj91",
          borderBottomEndRadius: "x18nykt9",
          borderBottomStartRadius: "xww2gxu",
          display: "x78zum5",
          flexShrink: "x2lah0s",
          justifyContent: "xl56j7k",
          pointerEvents: "x71s49j",
          $$css: !0,
        },
        overflowItemBg: { fill: "x1wnuiir", $$css: !0 },
        overflowItemContainer: {
          bottom: "x1ey2m1c",
          boxSizing: "x9f619",
          display: "x78zum5",
          end: "xds687c",
          flexDirection: "x1q0g3np",
          pointerEvents: "x47corl",
          position: "x10l6tqk",
          start: "x17qophe",
          top: "x13vifvy",
          $$css: !0,
        },
        overflowItemOverlay: {
          fill: "x1wnuiir",
          opacity: "xg01cxk",
          transitionDuration: "x1ebt8du",
          transitionProperty: "x19991ni",
          transitionTimingFunction: "x1dhq9h",
          $$css: !0,
        },
        overflowItemOverlayHovered: {
          fill: "x4bmajx",
          opacity: "x1hc1fzr",
          transitionDuration: "x1mq3mr6",
          $$css: !0,
        },
        overflowItemOverlayPressed: {
          fill: "x1tgjyoi",
          opacity: "x1hc1fzr",
          transitionDuration: "x1mq3mr6",
          $$css: !0,
        },
        overflowItemSVG: {
          bottom: "x1ey2m1c",
          end: "xds687c",
          position: "x10l6tqk",
          start: "x17qophe",
          top: "x13vifvy",
          $$css: !0,
        },
        root: { display: "x78zum5", flexDirection: "xdt5ytf", $$css: !0 },
        rootInline: {
          alignItems: "x6s0dn4",
          flexDirection: "x1q0g3np",
          $$css: !0,
        },
        text: {
          display: "x78zum5",
          flexDirection: "x1q0g3np",
          paddingTop: "xz9dl7a",
          $$css: !0,
        },
        textInline: {
          flexBasis: "x1r8uery",
          flexGrow: "x1iyjqo2",
          paddingStart: "x1e558r4",
          paddingTop: "xexx8yu",
          $$css: !0,
        },
        wrapper: {
          paddingEnd: "xn6708d",
          paddingStart: "x1swvt13",
          paddingTop: "xyamay9",
          $$css: !0,
        },
      },
      q = {
        16: { minWidth: "x1fns5xo", $$css: !0 },
        24: { minWidth: "x4m7ku4", $$css: !0 },
        32: { minWidth: "xwrg52n", $$css: !0 },
        36: { minWidth: "xktpd3l", $$css: !0 },
        40: { minWidth: "x1c7vg25", $$css: !0 },
        48: { minWidth: "x1wc95rx", $$css: !0 },
      },
      r = {
        center: { alignItems: "x6s0dn4", $$css: !0 },
        end: { alignItems: "xuk3077", $$css: !0 },
        start: { alignItems: "x1cy8zhl", $$css: !0 },
      },
      s = {
        center: { justifyContent: "xl56j7k", $$css: !0 },
        end: { justifyContent: "x13a6bvl", $$css: !0 },
        start: { justifyContent: "x1nhvcw1", $$css: !0 },
      };
    function a(a) {
      var b = a.align;
      b = b === void 0 ? "start" : b;
      var e = a.items,
        f = a.isOverlapping;
      f === void 0 ? !0 : f;
      f = a.isTextInline;
      f = f === void 0 ? !1 : f;
      var g = a.count,
        j = g === void 0 ? e.length : g;
      g = a.ellipsisTooltip;
      var l = a.linkProps,
        x = a.onPress,
        y = a.screenReaderLabel,
        z = a.size,
        A = a.testid;
      A = a.testOnly_pressed;
      var B = A === void 0 ? !1 : A;
      A = a.text;
      var C = a.disableMarginOnItems,
        D = C === void 0 ? !1 : C;
      C = a.withWrapper;
      var E = o,
        F = Math.min(j, e.length, f ? 3 : Infinity),
        G = k(null);
      a = [
        {
          command: { key: c("CometKeys").LEFT },
          description: h._("\u00c9l\u00e9ment pr\u00e9c\u00e9dent"),
          handler: function () {},
        },
        {
          command: { key: c("CometKeys").RIGHT },
          description: h._("\u00c9l\u00e9ment suivant"),
          handler: function () {},
        },
      ];
      e = i.jsxs(
        "div",
        babelHelpers["extends"](
          {
            className:
              "x78zum5 x1q0g3np x2lah0s x1a02dak x6ikm8r x10wlt62 x1n2onr6",
            ref: G,
            role: "row",
            style: { height: z },
          },
          c("CometVisualCompletionAttributes").IGNORE_DYNAMIC,
          {
            children: [
              e.slice(0, F).map(function (a, b) {
                var d = a.containerComponent,
                  e = a.linkProps,
                  f = a.onPress,
                  g = a.testOnly_pressed;
                a = babelHelpers.objectWithoutPropertiesLoose(a, [
                  "containerComponent",
                  "linkProps",
                  "onPress",
                  "testOnly_pressed",
                ]);
                return i.jsxs(
                  i.Fragment,
                  {
                    children: [
                      i.jsx(c("BaseContainerQueryElement.react"), {
                        breakpoint: (b + 1) * (z + E) - E,
                        inverseToContainer: !0,
                        maxWidth: "100%",
                        minWidth: 0,
                      }),
                      i.jsx(
                        t,
                        babelHelpers["extends"]({}, a, {
                          Container: d,
                          FocusItemComponent: y != null ? void 0 : n,
                          divClassName: c("stylex")(
                            D ? p.itemWithoutMargin : p.item,
                            b > 0 && p.itemWithSpacing
                          ),
                          isOverlapped: b > 0,
                          linkProps: e,
                          onPress: f,
                          parentRef: G,
                          role: "cell",
                          shape: "circle",
                          size: z,
                          testOnly_pressed: g,
                          testid: void 0,
                        })
                      ),
                    ],
                  },
                  b
                );
              }),
              i.jsxs("div", {
                className:
                  "x1ey2m1c x9f619 x78zum5 xds687c x1q0g3np x47corl x10l6tqk x17qophe x13vifvy",
                children: [
                  e
                    .slice(0, Math.min(e.length, F < j ? F : j))
                    .map(function (a, b) {
                      return b === 0 && j > 1
                        ? null
                        : i.jsx(
                            c("BaseContainerQueryElement.react"),
                            {
                              breakpoint: (b + 1) * (z + E) - E,
                              maxWidth: b === j - 1 ? "100%" : z + E,
                              minWidth: 0,
                            },
                            "overflowPusher" + b
                          );
                    }),
                  i.jsx(v, {
                    FocusItemComponent: y != null ? void 0 : n,
                    "aria-label": h._("Lien pour voir tous les profils"),
                    count: j,
                    ellipsisTooltip: g,
                    linkProps: l,
                    onPress: x,
                    overlayDisabled: !0,
                    parentRef: G,
                    size: z,
                    spacing: E,
                    testid: void 0,
                    xstyle: [
                      p.overflowItem,
                      z === 16 && p.overflow16,
                      z === 24 && p.overflow24,
                      z === 32 && p.overflow32,
                      z === 36 && p.overflow36,
                      z === 40 && p.overflow40,
                      z === 48 && p.overflow48,
                    ],
                    children: function (a) {
                      var b = a.hovered;
                      a = a.pressed;
                      return i.jsxs(i.Fragment, {
                        children: [
                          i.jsx(w, {
                            hovered: b,
                            isOverlapped: F > 1,
                            pressed: a || B,
                            size: z,
                          }),
                          z === 16
                            ? i.jsx("div", {
                                className: "x1mnrxsn x6ikm8r x10wlt62 x1fsd2vl",
                                children: i.jsx("div", {
                                  className: "x6s0dn4 x78zum5 xl56j7k xbmpl8g",
                                  children: i.jsx(c("CometIcon.react"), {
                                    color: "white",
                                    icon: d("SVGIcon").svgIcon(
                                      c("Dots3HorizontalFilled24.svg.react")
                                    ),
                                    size: u(z),
                                  }),
                                }),
                              })
                            : i.jsx(c("CometIcon.react"), {
                                color: "white",
                                icon: d("SVGIcon").svgIcon(
                                  c("Dots3HorizontalFilled24.svg.react")
                                ),
                                size: u(z),
                              }),
                        ],
                      });
                    },
                  }),
                ],
              }),
            ],
          }
        )
      );
      g = f ? s : r;
      l = q[z];
      x = i.jsxs("div", {
        "aria-label": y,
        className: c("stylex")(p.root, f && p.rootInline, g[b]),
        "data-testid": void 0,
        role: y == null ? "grid" : "img",
        children: [
          y != null
            ? i.jsx("div", {
                "aria-hidden": !0,
                className: c("stylex")(f && F >= 3 && l),
                children: e,
              })
            : i.jsx(c("CometComponentWithKeyCommands.react"), {
                commandConfigs: a,
                xstyle: f && F >= 3 && l,
                children: i.jsx(m, {
                  orientation: "horizontal",
                  tabScopeQuery: d("focusScopeQueries").tabbableScopeQuery,
                  wrap: !0,
                  children: e,
                }),
              }),
          A != null &&
            i.jsx("div", {
              "aria-hidden": y != null ? !0 : void 0,
              className: c("stylex")(p.text, f && p.textInline, g[b]),
              children: i.jsx(c("TetraText.react"), {
                color: "secondary",
                type: "body3",
                children: A,
              }),
            }),
        ],
      });
      return C
        ? i.jsx("div", { className: "xn6708d x1swvt13 xyamay9", children: x })
        : x;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function t(a) {
      var b = a.Container,
        e = a.FocusItemComponent,
        f = a.divClassName,
        g = a.parentRef,
        h = babelHelpers.objectWithoutPropertiesLoose(a, [
          "Container",
          "FocusItemComponent",
          "divClassName",
          "parentRef",
        ]);
      a = l(!1);
      var k = a[0],
        m = a[1];
      a = j(function (a) {
        a = a.intersectionRatio;
        var b = a < 0.5;
        (!c("gkx")("2333") || b !== k) &&
          d("ReactDOMComet").flushSync(function () {
            m(b);
          });
      }, []);
      a = c("useIntersectionObserver")(a, {
        root: function () {
          var a;
          return (a = g.current) != null ? a : null;
        },
        threshold: 0.5,
      });
      b = b
        ? i.jsx(b, {
            children: function (a) {
              return i.jsx(
                c("CometProfilePhoto.react"),
                babelHelpers["extends"]({}, h, { overlayDisabled: !0, ref: a })
              );
            },
          })
        : i.jsx(
            c("CometProfilePhoto.react"),
            babelHelpers["extends"]({}, h, { overlayDisabled: !0 })
          );
      return i.jsx("div", {
        className: f,
        ref: a,
        role: "cell",
        children: e != null ? i.jsx(e, { disabled: k, children: b }) : b,
      });
    }
    t.displayName = t.name + " [from " + f.id + "]";
    function u(a) {
      switch (a) {
        case 36:
        case 32:
          return 16;
        case 40:
        case 48:
          return 24;
        default:
          return 12;
      }
    }
    function v(a) {
      var b = a.FocusItemComponent;
      a.count;
      var e = a.ellipsisTooltip,
        f = a.parentRef,
        g = a.size,
        h = a.spacing;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "FocusItemComponent",
        "count",
        "ellipsisTooltip",
        "parentRef",
        "size",
        "spacing",
      ]);
      var k = l(!1),
        m = k[0],
        n = k[1];
      k = l(null);
      var o = k[0],
        p = k[1];
      k = j(function (a) {
        var b = a.intersectionRatio;
        d("ReactDOMComet").flushSync(function () {
          n(b < 0.5);
        });
      }, []);
      k = c("useIntersectionObserver")(k, {
        root: function () {
          var a;
          return (a = f.current) != null ? a : null;
        },
        threshold: 0.5,
      });
      var q = function (a) {
        if (!a) return;
        a = f.current;
        if (!a) return;
        a = a.getBoundingClientRect();
        a = a.width;
        a = Math.floor((a + h) / (g + h));
        p(a - 1);
      };
      a = i.jsx(
        c("CometPressable.react"),
        babelHelpers["extends"]({}, a, { ref: k, role: "cell" })
      );
      e &&
        (a = i.jsx(c("CometTooltip.react"), {
          align: "middle",
          onVisibilityChange: q,
          position: "below",
          tooltip: o != null ? e(o) : "",
          children: a,
        }));
      return b != null
        ? i.jsxs(b, { disabled: m, children: [" ", a, " "] })
        : a;
    }
    v.displayName = v.name + " [from " + f.id + "]";
    function w(a) {
      var b = a.hovered,
        d = a.isOverlapped,
        e = a.pressed;
      a = a.size;
      var f = c("useCometUniqueID")();
      return i.jsxs("svg", {
        className: "x1ey2m1c xds687c x10l6tqk x17qophe x13vifvy",
        height: a,
        viewBox: "0 0 " + a + " " + a,
        width: a,
        children: [
          d &&
            i.jsxs("mask", {
              id: f,
              suppressHydrationWarning: !0,
              children: [
                i.jsx("circle", {
                  cx: a / 2,
                  cy: a / 2,
                  fill: "white",
                  r: a / 2,
                }),
                i.jsx("circle", {
                  cx: -a / 2 + 4,
                  cy: a / 2,
                  fill: "black",
                  r: a / 2 + 2,
                }),
              ],
            }),
          i.jsx(
            "circle",
            babelHelpers["extends"](
              {
                className: "x1wnuiir",
                cx: a / 2,
                cy: a / 2,
                r: a / 2,
                role: "cell",
                suppressHydrationWarning: !0,
              },
              d ? { mask: "url(#" + f + ")" } : null
            )
          ),
          i.jsx(
            "circle",
            babelHelpers["extends"](
              {
                className: c("stylex")(
                  p.overflowItemOverlay,
                  b && p.overflowItemOverlayHovered,
                  e && p.overflowItemOverlayPressed
                ),
                cx: a / 2,
                cy: a / 2,
                r: a / 2,
                role: "cell",
                suppressHydrationWarning: !0,
              },
              d ? { mask: "url(#" + f + ")" } : null
            )
          ),
        ],
      });
    }
    w.displayName = w.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "TetraOverlappingFacepileUnstyled.react",
  ["CometOverlappingFacepile.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsx(
        c("CometOverlappingFacepile.react"),
        babelHelpers["extends"]({}, a)
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometMenuItemHighlightContext",
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
  "CometTextWithIcon.react",
  ["BaseView.react", "CometNonBreakingSpace.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        icon: {
          alignItems: "x6s0dn4",
          display: "x3nfvp2",
          verticalAlign: "xxymvpz",
          $$css: !0,
        },
        iconContainer: { display: "xt0psk2", whiteSpace: "xuxw1ft", $$css: !0 },
      };
    function a(a) {
      var b = a.children,
        d = a.iconAfter,
        e = a.iconBefore,
        f = a.iconOverrideVerticalStyle,
        g = a.observeDirectionality;
      g = g === void 0 ? !1 : g;
      a = a.spacing;
      a = a === void 0 ? 0.5 : a;
      e = h.jsxs(h.Fragment, {
        children: [
          e != null &&
            h.jsxs(c("BaseView.react"), {
              xstyle: i.iconContainer,
              children: [
                h.jsx(c("BaseView.react"), {
                  xstyle: babelHelpers["extends"]({}, i.icon, f),
                  children: e,
                }),
                h.jsx(c("CometNonBreakingSpace.react"), { size: a }),
              ],
            }),
          b,
          d != null &&
            h.jsxs(c("BaseView.react"), {
              xstyle: i.iconContainer,
              children: [
                h.jsx(c("CometNonBreakingSpace.react"), { size: a }),
                h.jsx(c("BaseView.react"), {
                  xstyle: babelHelpers["extends"]({}, i.icon, f),
                  children: d,
                }),
              ],
            }),
        ],
      });
      return g ? h.jsx("span", { dir: "auto", children: e }) : e;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometMenuItemBase.react",
  [
    "BaseFocusRing.react",
    "CometFocusGroupFirstLetterNavigation",
    "CometMenuContext",
    "CometMenuFocusGroup",
    "CometMenuItemBaseRoleContext",
    "CometMenuItemHighlightContext",
    "CometNonBreakingSpace.react",
    "CometPressable.react",
    "CometPressableOverlay.react",
    "CometTextWithIcon.react",
    "TetraText.react",
    "TetraTextPairing.react",
    "gkx",
    "mergeRefs",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
      j = b.useContext,
      k = b.useEffect,
      l = b.useMemo,
      m = b.useRef,
      n = {
        aux: { marginStart: "x16n37ib", $$css: !0 },
        content: {
          alignItems: "x6s0dn4",
          display: "x78zum5",
          flexDirection: "x1q0g3np",
          flexGrow: "x1iyjqo2",
          justifyContent: "x1qughib",
          minWidth: "xeuugli",
          $$css: !0,
        },
        disabled: { cursor: "x1h6gzvc", $$css: !0 },
        extraHorizontalPadding: {
          paddingStart: "xurb0ha",
          paddingEnd: "x1sxyh0",
          $$css: !0,
        },
        listItem: {
          alignItems: "x6s0dn4",
          appearance: "xjyslct",
          boxSizing: "x9f619",
          cursor: "x1ypdohk",
          display: "x78zum5",
          flexDirection: "x1q0g3np",
          flexShrink: "x2lah0s",
          marginStart: "xnqzcj9",
          marginEnd: "x1gh759c",
          marginTop: "xdj266r",
          marginBottom: "xat24cr",
          paddingStart: "x1344otq",
          paddingEnd: "x1de53dj",
          paddingTop: "xz9dl7a",
          paddingBottom: "xsag5q8",
          position: "x1n2onr6",
          textAlign: "x16tdsg8",
          zIndex: "x1ja2u2z",
          $$css: !0,
        },
        listItemAlignedCenter: { alignItems: "x6s0dn4", $$css: !0 },
        listItemWithIcon: {
          paddingTop: "x1y1aw1k",
          paddingBottom: "xwib8y2",
          $$css: !0,
        },
      },
      o = c("gkx")("1721477") || c("gkx")("1459");
    function a(a, b) {
      var e = a.alignCenter;
      e = e === void 0 ? !1 : e;
      var f = a.autoScrollOnLoad;
      f = f === void 0 ? !1 : f;
      var g = a.aux,
        p = a.badge,
        q = a.bodyColor,
        r = a.bodyText,
        s = a.disabled,
        t = s === void 0 ? !1 : s;
      s = a.download;
      var u = a.href,
        v = a.iconNode,
        w = a.id,
        x = a.isIconAnImage,
        y = a.onClick,
        z = a.onFocusIn,
        A = a.onFocusOut,
        B = a.onHoverIn,
        C = a.onHoverOut,
        D = a.onPressIn,
        E = a.overlayRadius,
        F = E === void 0 ? 4 : E;
      E = a.passthroughProps;
      var G = a.prefetchQueriesOnHover,
        H = a.preventClosingMenuOnSelect;
      H = H === void 0 ? !1 : H;
      var I = a.preventLocalNavigation,
        J = a.primaryColor,
        K = a.primaryText,
        L = a.role,
        M = a.routeTarget,
        N = a.secondaryColor,
        O = a.secondaryText,
        P = a.target,
        Q = a.testid;
      Q = a.traceParams;
      var R = a.visuallyFocused,
        S = R === void 0 ? !1 : R;
      R = babelHelpers.objectWithoutPropertiesLoose(a, [
        "alignCenter",
        "autoScrollOnLoad",
        "aux",
        "badge",
        "bodyColor",
        "bodyText",
        "disabled",
        "download",
        "href",
        "iconNode",
        "id",
        "isIconAnImage",
        "onClick",
        "onFocusIn",
        "onFocusOut",
        "onHoverIn",
        "onHoverOut",
        "onPressIn",
        "overlayRadius",
        "passthroughProps",
        "prefetchQueriesOnHover",
        "preventClosingMenuOnSelect",
        "preventLocalNavigation",
        "primaryColor",
        "primaryText",
        "role",
        "routeTarget",
        "secondaryColor",
        "secondaryText",
        "target",
        "testid",
        "traceParams",
        "visuallyFocused",
      ]);
      var T = m(null);
      a = j(c("CometMenuContext"));
      var U = H !== !0 && a ? a.onClose : null;
      H =
        u != null || M != null || P != null
          ? {
              download: s,
              passthroughProps: E,
              prefetchQueriesOnHover: G,
              preventLocalNavigation: I,
              routeTarget: M,
              target: P,
              traceParams: Q,
              url: u,
            }
          : void 0;
      a = i(
        function (a) {
          U != null && U(), y && y(a);
        },
        [y, U]
      );
      s = j(c("CometMenuItemBaseRoleContext"));
      I = (G = (E = L) != null ? E : s) != null ? G : void 0;
      var V = m(f);
      k(function () {
        var a = T.current;
        V.current &&
          a != null &&
          ((V.current = !1), a.scrollIntoView({ block: "nearest" }));
      }, []);
      var W = m(S);
      k(
        function () {
          var a = T.current;
          !W.current &&
            S &&
            a != null &&
            a.scrollIntoView({ block: "nearest" });
        },
        [S]
      );
      var X = m(null);
      M = d("CometFocusGroupFirstLetterNavigation").useFirstLetterNavigationTag(
        X
      );
      P = l(
        function () {
          return c("mergeRefs")(b, T);
        },
        [b]
      );
      var Y =
        p != null
          ? typeof p === "number"
            ? h.jsxs(h.Fragment, {
                children: [
                  K,
                  h.jsx(c("CometNonBreakingSpace.react"), { size: 0.5 }),
                  h.jsx(c("TetraText.react"), {
                    color: t ? "disabled" : J,
                    type: "body4",
                    children: p,
                  }),
                ],
              })
            : h.jsx(c("CometTextWithIcon.react"), { iconAfter: p, children: K })
          : K;
      return h.jsx(c("CometMenuFocusGroup").FocusItem, {
        disabled: t,
        tag: M,
        children: h.jsx(
          c("CometPressable.react"),
          babelHelpers["extends"]({}, R, {
            disabled: t,
            display: "inline",
            id: w,
            linkProps: H,
            onFocusIn: z,
            onFocusOut: A,
            onHoverIn: B,
            onHoverOut: C,
            onPress: a,
            onPressIn: D,
            overlayDisabled: !0,
            ref: P,
            role: I,
            suppressFocusRing: !0,
            testid: void 0,
            xstyle: [
              n.listItem,
              e && n.listItemAlignedCenter,
              v != null && n.listItemWithIcon,
              t && n.disabled,
              !o && S && c("BaseFocusRing.react").focusRingXStyle,
            ],
            children: function (a) {
              var b = a.focused,
                d = a.focusVisible,
                e = a.hovered;
              a = a.pressed;
              return h.jsxs(c("CometMenuItemHighlightContext").Provider, {
                value: (b && d) || e,
                children: [
                  v,
                  h.jsxs("div", {
                    className: c("stylex")(
                      n.content,
                      ((b = x) != null ? b : !1) && n.extraHorizontalPadding
                    ),
                    children: [
                      h.jsx(c("TetraTextPairing.react"), {
                        body: r,
                        bodyColor: t ? "disabled" : q,
                        headline: Y,
                        headlineColor: t ? "disabled" : J,
                        headlineRef: X,
                        level: 4,
                        meta: O,
                        metaColor: t ? "disabled" : N,
                        reduceEmphasis: !0,
                      }),
                      g != null &&
                        h.jsx("div", { className: "x16n37ib", children: g }),
                    ],
                  }),
                  h.jsx(c("CometPressableOverlay.react"), {
                    focusVisible: d || S,
                    hovered: e,
                    pressed: a,
                    radius: F,
                    showFocusRing: !0,
                  }),
                ],
              });
            },
          })
        ),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = h.forwardRef(a);
    g["default"] = e;
  },
  98
);
__d(
  "CometMenuItemIcon.react",
  [
    "CometEmoji.react",
    "CometIcon.react",
    "CometImage.react",
    "IconSource",
    "ImageIconSource",
    "SVGIcon",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useMemo,
      j = {
        circle: {
          borderTopStartRadius: "x14yjl9h",
          borderTopEndRadius: "xudhj91",
          borderBottomEndRadius: "x18nykt9",
          borderBottomStartRadius: "xww2gxu",
          $$css: !0,
        },
        contained: {
          backgroundColor: "x1qhmfi1",
          borderTopStartRadius: "x14yjl9h",
          borderTopEndRadius: "xudhj91",
          borderBottomEndRadius: "x18nykt9",
          borderBottomStartRadius: "xww2gxu",
          height: "xvnh2x",
          minWidth: "x1g0q3yh",
          $$css: !0,
        },
        iconRelativeContainer: { position: "x1n2onr6", $$css: !0 },
        inset: {
          boxShadow: "xlg9a9y",
          position: "x10l6tqk",
          start: "x17qophe",
          top: "x13vifvy",
          $$css: !0,
        },
        root: {
          alignItems: "x6s0dn4",
          alignSelf: "xoi2r2e",
          display: "x78zum5",
          justifyContent: "xl56j7k",
          marginEnd: "xq8finb",
          $$css: !0,
        },
        roundedRect: {
          borderTopStartRadius: "x1lq5wgf",
          borderTopEndRadius: "xgqcy7u",
          borderBottomEndRadius: "x30kzoy",
          borderBottomStartRadius: "x9jhf4c",
          $$css: !0,
        },
      };
    function a(a) {
      var b = a.disabled,
        e = a.emojiSize,
        f = e === void 0 ? 20 : e,
        g = a.icon,
        k = a.iconColor;
      e = a.iconCssSelectorId;
      var l = a.iconSize,
        m = l === void 0 ? 20 : l;
      l = a.use;
      var n = l === void 0 ? "normal" : l;
      a = i(
        function () {
          if (g instanceof c("IconSource")) {
            var a;
            return h.jsx(c("CometIcon.react"), {
              color: (a = k) != null ? a : "primary",
              disabled: b,
              icon: g,
            });
          }
          if (g instanceof c("ImageIconSource"))
            return h.jsx(c("CometIcon.react"), { disabled: b, icon: g });
          if (g instanceof d("SVGIcon").SVGIcon) {
            return h.jsx(c("CometIcon.react"), {
              color: (a = k) != null ? a : "primary",
              disabled: b,
              icon: g,
              size: m,
            });
          }
          if (g instanceof d("SVGIcon").LegacySVGIcon) {
            return h.jsx(c("CometIcon.react"), {
              color: (a = k) != null ? a : "primary",
              disabled: b,
              icon: g,
              size: m,
            });
          }
          if (g instanceof d("SVGIcon").EmojiIcon)
            return h.jsx(c("CometEmoji.react"), {
              emoji: g.codepoints,
              size: f,
            });
          if (
            typeof g === "object" &&
            typeof g !== "function" &&
            !g._isSVG &&
            g.src !== null
          ) {
            a = n === "contained" ? 36 : 20;
            return h.jsxs("div", {
              className: "x1n2onr6",
              children: [
                h.jsx(c("CometImage.react"), {
                  height: a,
                  src: g.src,
                  width: a,
                  xstyle: [
                    g.style === "circle" && j.circle,
                    g.style === "roundedRect" && j.roundedRect,
                  ],
                }),
                g.style !== "square"
                  ? h.jsx("div", {
                      className: c("stylex")(
                        g.style === "circle" && j.circle,
                        j.inset,
                        g.style === "roundedRect" && j.roundedRect
                      ),
                      style: { height: a, width: a },
                    })
                  : null,
              ],
            });
          }
          return h.jsx(c("CometIcon.react"), {
            color: (a = k) != null ? a : "secondary",
            disabled: b,
            icon: g,
          });
        },
        [b, f, g, k, m, n]
      );
      return h.jsx("div", {
        className: c("stylex")([
          j.root,
          (n === "contained" || n === "contained_small_icon") && j.contained,
        ]),
        id: e,
        children: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.memo(a);
    g["default"] = b;
  },
  98
);
__d(
  "CometMenuItem.react",
  [
    "CometBadge.react",
    "CometIcon.react",
    "CometMenuItemBase.react",
    "CometMenuItemIcon.react",
    "CometProfilePhoto.react",
    "TetraTextPairing.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a, b) {
      var d = a.auxItem,
        e = a.emojiSize,
        f = a.icon,
        g = a.iconColor,
        i = a.iconCssSelectorId,
        j = a.iconSize,
        k = a.iconStyle;
      k = k === void 0 ? "normal" : k;
      var l = a.image,
        m = a.overlayRadius;
      m = m === void 0 ? 4 : m;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "auxItem",
        "emojiSize",
        "icon",
        "iconColor",
        "iconCssSelectorId",
        "iconSize",
        "iconStyle",
        "image",
        "overlayRadius",
      ]);
      var n = null;
      if (d != null)
        switch (d.type) {
          case "text":
            n = h.jsx(c("TetraTextPairing.react"), {
              level: 3,
              meta: d.auxText,
            });
            break;
          case "badge":
            n = h.jsx(c("CometBadge.react"), { color: d.color });
            break;
          case "icon":
            n = h.jsx(c("CometIcon.react"), { color: d.color, icon: d.icon });
            break;
          case "numberedBadge":
            n = d.badge;
            break;
        }
      return h.jsx(
        c("CometMenuItemBase.react"),
        babelHelpers["extends"]({}, a, {
          alignCenter: !0,
          aux: n,
          iconNode:
            f != null
              ? h.jsx(c("CometMenuItemIcon.react"), {
                  disabled: a.disabled,
                  emojiSize: e,
                  icon: f,
                  iconColor: g,
                  iconCssSelectorId: i,
                  iconSize: j,
                  use: k,
                })
              : l != null
              ? h.jsx(c("CometProfilePhoto.react"), {
                  addOn: l.addOn,
                  shape: l.shape,
                  size: l.size,
                  source: l.source,
                })
              : null,
          isIconAnImage: f == null && l != null,
          overlayRadius: m,
          ref: b,
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "CometProgressIndicator.react",
  ["BaseLoadingStateElement.react", "react", "stylex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        animateDot: {
          animationDuration: "x1c74tu6",
          animationIterationCount: "xa4qsjk",
          animationName: "xwp40e0",
          animationTimingFunction: "x147wac7",
          opacity: "xllgmg",
          transform: "x13kylt9",
          $$css: !0,
        },
        animationDelay300: { animationDelay: "x1x1c4bx", $$css: !0 },
        animationDelay600: { animationDelay: "x1nrwgbl", $$css: !0 },
        root: { display: "x78zum5", flexDirection: "x1q0g3np", $$css: !0 },
      },
      j = {
        default: {
          borderTopStartRadius: "x1lcm9me",
          borderTopEndRadius: "x1yr5g0i",
          borderBottomEndRadius: "xrt01vj",
          borderBottomStartRadius: "x10y3i5r",
          height: "xdk7pt",
          marginEnd: "xfs2ol5",
          marginStart: "x12mruv9",
          width: "x1xc55vz",
          $$css: !0,
        },
        small: {
          borderTopStartRadius: "xm3z3ea",
          borderTopEndRadius: "x1x8b98j",
          borderBottomEndRadius: "x131883w",
          borderBottomStartRadius: "x16mih1h",
          height: "xqu0tyb",
          marginEnd: "xhhsvwb",
          marginStart: "xgzva0m",
          width: "x51ohtg",
          $$css: !0,
        },
      },
      k = {
        media: { backgroundColor: "x14hiurz", $$css: !0 },
        primary: { backgroundColor: "xn25soc", $$css: !0 },
      };
    function a(a) {
      var b = a.disableLoadingStateTracker,
        d = a.overrideBGColorContext;
      d = d === void 0 ? "primary" : d;
      a = a.size;
      a = a === void 0 ? "default" : a;
      a = [i.animateDot, j[a], k[d]];
      return h.jsxs(c("BaseLoadingStateElement.react"), {
        disableLoadingStateTracker: b,
        xstyle: i.root,
        children: [
          h.jsx("div", { className: c("stylex")(a) }),
          h.jsx("div", {
            className: c("stylex").apply(
              void 0,
              a.concat([i.animationDelay300])
            ),
          }),
          h.jsx("div", {
            className: c("stylex").apply(
              void 0,
              a.concat([i.animationDelay600])
            ),
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
  "useStatesInMap",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useEffect,
      i = b.useRef,
      j = b.useState;
    function a(a, b) {
      var c = i(a),
        d = i({}),
        e = j(b),
        f = e[0],
        g = e[1];
      h(
        function () {
          if (c.current !== a) {
            var e;
            c.current = a;
            g((e = d.current[a]) != null ? e : b);
          }
        },
        [d, g, c, a, b]
      );
      h(
        function () {
          d.current[a] = f;
        },
        [f, a]
      );
      return [f, g];
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometWarningScreenContext",
  ["react", "useStatesInMap"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    d = d("react");
    var i = d.createContext,
      j = d.useCallback,
      k = d.useContext,
      l = d.useMemo,
      m = i({
        makeContentVisibleDespiteOverlay: function () {},
        overlaySettings: {
          additionalRequiredHeight: 0,
          isContentVisibleDespiteOverlay: null,
          isOnFeedMedia: !1,
          overlayExists: !1,
          overlayShown: !1,
          parentRenderInstructions: "CLIP_TO_MEDIA",
          videoController: null,
        },
        setAdditionalRequiredHeight: function () {},
        setIsOnFeedMedia: function () {},
        setOverlayExists: function () {},
        setParentRenderInstructions: function () {},
        showOverlay: function () {},
      });
    function a(a) {
      var b = a.children,
        d = a.identifier,
        e = a.isOnFeedMedia,
        f = a.overlayExists,
        g = a.overlayShownOverride;
      a = a.videoController;
      e = c("useStatesInMap")(d, {
        additionalRequiredHeight: 0,
        isContentVisibleDespiteOverlay: null,
        isOnFeedMedia: e,
        overlayExists: f,
        overlayShown: (d = g) != null ? d : f,
        parentRenderInstructions: "CLIP_TO_MEDIA",
        videoController: a,
      });
      var i = e[0],
        k = e[1],
        n = j(
          function (a) {
            k(function (b) {
              return babelHelpers["extends"]({}, b, { overlayShown: a });
            });
          },
          [k]
        ),
        o = j(
          function (a) {
            k(function (b) {
              return babelHelpers["extends"]({}, b, {
                isContentVisibleDespiteOverlay: a,
              });
            });
          },
          [k]
        ),
        p = j(
          function (a) {
            k(function (b) {
              return babelHelpers["extends"]({}, b, { overlayExists: a });
            });
          },
          [k]
        ),
        q = j(
          function (a) {
            k(function (b) {
              return babelHelpers["extends"]({}, b, { isOnFeedMedia: a });
            });
          },
          [k]
        ),
        r = j(
          function (a) {
            k(function (b) {
              return babelHelpers["extends"]({}, b, {
                additionalRequiredHeight: a,
              });
            });
          },
          [k]
        ),
        s = j(
          function (a) {
            k(function (b) {
              return babelHelpers["extends"]({}, b, {
                parentRenderInstructions: a,
              });
            });
          },
          [k]
        );
      g = l(
        function () {
          return {
            makeContentVisibleDespiteOverlay: o,
            overlaySettings: i,
            setAdditionalRequiredHeight: r,
            setIsOnFeedMedia: q,
            setOverlayExists: p,
            setParentRenderInstructions: s,
            showOverlay: n,
          };
        },
        [i, r, n, o, p, s, q]
      );
      return h.jsx(m.Provider, { value: g, children: b });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function b() {
      var a = k(m);
      a = a.overlaySettings;
      return a.overlayExists;
    }
    function e() {
      var a = k(m);
      a = a.overlaySettings;
      return a.videoController;
    }
    function n() {
      var a = k(m);
      a = a.overlaySettings;
      return a.overlayShown;
    }
    function o() {
      var a = k(m);
      a = a.overlaySettings;
      return a.isOnFeedMedia;
    }
    function p() {
      var a = k(m);
      a = a.overlaySettings;
      return a.isContentVisibleDespiteOverlay;
    }
    function q() {
      var a = n(),
        b = p();
      return !a ? !0 : b;
    }
    function r() {
      var a = k(m);
      a = a.overlaySettings;
      return a.additionalRequiredHeight;
    }
    function s() {
      var a = k(m);
      a = a.overlaySettings;
      return a.parentRenderInstructions;
    }
    function t() {
      var a = k(m);
      a = a.showOverlay;
      return a;
    }
    function u() {
      var a = k(m);
      a = a.makeContentVisibleDespiteOverlay;
      return a;
    }
    function v() {
      var a = k(m);
      a = a.setOverlayExists;
      return a;
    }
    function w() {
      var a = k(m);
      a = a.setIsOnFeedMedia;
      return a;
    }
    function x() {
      var a = k(m);
      a = a.setAdditionalRequiredHeight;
      return a;
    }
    function y() {
      var a = k(m);
      a = a.setParentRenderInstructions;
      return a;
    }
    g.CometWarningScreenContextProvider = a;
    g.useHasOverlay = b;
    g.useHasVideoController = e;
    g.useIsOverlayShown = n;
    g.useIsOnFeedMedia = o;
    g.useIsContentVisibleDespiteOverlay = p;
    g.useIsContentVisible = q;
    g.useAdditionalRequiredHeight = r;
    g.useParentRenderInstructions = s;
    g.useShowOverlay = t;
    g.useMakeContentVisibleDespiteOverlay = u;
    g.useSetOverlayExists = v;
    g.useSetIsOnFeedMedia = w;
    g.useSetAdditionalRequiredHeight = x;
    g.useSetParentRenderInstructions = y;
  },
  98
);
__d(
  "CappedListItemContext",
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
  "usePremiumMusicVideoInterruptionSubscription",
  [
    "CometRelay",
    "react",
    "usePremiumMusicVideoInterruptionSubscription.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react").useEffect,
      j =
        h !== void 0
          ? h
          : (h = b("usePremiumMusicVideoInterruptionSubscription.graphql"));
    function a(a) {
      var b = d("CometRelay").useRelayEnvironment();
      i(
        function () {
          if (a == null) return;
          var c = d("CometRelay").requestSubscription(b, {
            subscription: j,
            variables: { input: { user_id: a } },
          });
          return function () {
            c.dispose();
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
  "useSEOLoggedOutWebCrawler",
  ["gkx"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      return c("gkx")("1779508");
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometFullScreen",
  ["Promise"],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      var c =
        a.requestFullscreen ||
        a.mozRequestFullScreen ||
        a.msRequestFullscreen ||
        a.webkitRequestFullscreen;
      return typeof c === "function" ? c.call(a) : b("Promise").reject();
    }
    function c() {
      var a =
        document.exitFullscreen ||
        document.mozCancelFullScreen ||
        document.msExitFullscreen ||
        document.webkitExitFullscreen;
      return typeof a === "function" ? a.call(document) : b("Promise").reject();
    }
    function d() {
      return (
        (document.webkitFullscreenEnabled === !0 ||
          document.mozFullScreenEnabled === !0 ||
          document.msFullscreenEnabled === !0 ||
          document.fullscreenEnabled === !0) &&
        (typeof document.webkitExitFullscreen === "function" ||
          typeof document.mozCancelFullScreen === "function" ||
          typeof document.msExitFullscreen === "function" ||
          typeof document.exitFullscreen === "function")
      );
    }
    function g() {
      return (
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.msFullscreenElement ||
        document.mozFullScreenElement ||
        null
      );
    }
    function e() {
      return g() != null;
    }
    function h() {
      return [
        "webkitfullscreenchange",
        "mozfullscreenchange",
        "MSFullscreenChange",
        "fullscreenchange",
      ];
    }
    function i(a) {
      var b = window.document,
        c = !1,
        d = !0;
      h().forEach(function (e) {
        b.addEventListener(e, a, { capture: c, passive: d });
      });
      return function () {
        h().forEach(function (d) {
          b.removeEventListener(d, a, c);
        });
      };
    }
    f.requestFullScreen = a;
    f.exitFullScreen = c;
    f.isSupported = d;
    f.getFullScreenElement = g;
    f.isFullScreen = e;
    f.getFullScreenChangeEventNames = h;
    f.subscribeToFullScreenChangeEvent = i;
  },
  66
);
__d(
  "getTextDirectionAttribute",
  ["cr:1080422"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var c = "auto";
      b("cr:1080422") != null &&
        window != null &&
        (c = b("cr:1080422").isDirectionRTL(a) ? "rtl" : "ltr");
      return c;
    }
    g["default"] = a;
  },
  98
);
__d(
  "OzOneSemanticHandlerUtils",
  ["ConstUriUtils", "qex", "recoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a, b, c) {
      b != null && b.indexOf("+RE") >= 0 && a.retry(), c != null && c();
    }
    function a(a, b) {
      var d = b.error;
      d = d.getExtra();
      var e = d.code;
      d = d.headers;
      var f = null;
      e == null &&
        c("recoverableViolation")(
          "A ONE Semantic error response must have an error code.",
          "comet_video_player"
        );
      d == null &&
        c("recoverableViolation")(
          "A ONE Semantic error response must contain response Headers.",
          "comet_video_player"
        );
      if (d != null) {
        d = d.get("x-fb-one-variant");
        f = (d = d) != null ? d : null;
      }
      d = JSON.parse(a.getString("network_retry_intervals_json", "{}"));
      a = d[e];
      switch (e) {
        case "410":
          b.endStream();
          break;
        case "404":
          h(b, f, function () {
            b.retry({ behavior: "recover_failed_request" });
          });
          break;
        case "429":
          b.retry(a);
          break;
        case "403":
        default:
      }
    }
    function i(a) {
      if (a != null) {
        a = parseInt(a, 10);
        if (3 > 0) return !isNaN(a) && a > 0 && a <= 3;
      }
      return !1;
    }
    function j(a, b) {
      if (a != null && b != null) {
        a = parseInt(a, 10);
        b = parseInt(b, 10);
        return !isNaN(a) && !isNaN(b) && a > 0 && a <= b;
      }
      return !1;
    }
    function k(a) {
      if (a != null) {
        a = d("ConstUriUtils").getUri(a);
        if (a) {
          a = a.getQueryParam("os_param");
          return a ? String(a).toString() : null;
        }
      }
      return null;
    }
    function l(a, b) {
      var d = a != null;
      return i(b) || ((d || !!c("qex")._("1636")) && j(b, a));
    }
    function b(a) {
      var b = a.getExtra();
      b = b.headers;
      b = m(b);
      a = a.getExtra();
      var d = a.code;
      a = a.url;
      if (b != null && d == null) {
        c("recoverableViolation")(
          "A ONE Semantic error response must have an error code.",
          "comet_video_player"
        );
        return !1;
      }
      d = k(a);
      return l(d, b);
    }
    function m(a) {
      if (a) {
        a = a.get("x-fb-one");
        if (a != null) return parseInt(a, 10) > 0 ? a : null;
      }
      return null;
    }
    function e(a, b, c) {
      var d = null,
        e = null;
      b != null && ((d = k(b)), d != null && a.setOneReqWave(parseInt(d, 10)));
      b = c == null ? void 0 : c.headers;
      b && ((e = m(b)), e != null && a.setOneResWave(parseInt(e, 10)));
      a.setOneObserved(l(d, e));
    }
    g.maybeRetryForVariant = h;
    g.evaluateOneSemanticsResponse = a;
    g.isOneSemanticsForcedForResponseWave = i;
    g.isOneSemanticsEnabledForWave = j;
    g.getOneSemanticRequestWave = k;
    g.shouldRespondWithOneSemantics = b;
    g.getOneSemanticResponseWave = m;
    g.setOneSemanticFetchStreamLoggingAttributes = e;
  },
  98
);
__d(
  "OzOneSemanticHandler",
  [
    "OzOneSemanticHandlerUtils",
    "handleOzManifestFetchErrorEvent",
    "handleOzStreamErrorEvent",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      var e = b.error;
      d("OzOneSemanticHandlerUtils").shouldRespondWithOneSemantics(e)
        ? d("OzOneSemanticHandlerUtils").evaluateOneSemanticsResponse(a, b)
        : c("handleOzManifestFetchErrorEvent")(a, b);
    }
    function b(a, b) {
      var e = b.error;
      d("OzOneSemanticHandlerUtils").shouldRespondWithOneSemantics(e)
        ? d("OzOneSemanticHandlerUtils").evaluateOneSemanticsResponse(a, b)
        : c("handleOzStreamErrorEvent")(a, b);
    }
    g.handleManifestFetchErrorEvent = a;
    g.handleStreamErrorEvent = b;
  },
  98
);
__d(
  "useEventCallbackOn",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useEffect;
    function a(a, b, c) {
      h(
        function () {
          a.addEventListener(b, c);
          return function () {
            a.removeEventListener(b, c);
          };
        },
        [a, b, c]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useIsBackgrounded",
  ["emptyFunction", "react", "useEventCallbackOn"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    f = d("react");
    var h = f.useCallback,
      i = f.useState;
    function b() {
      var b = a.document;
      if (typeof b.hidden !== "undefined") return "visibilitychange";
      else if (typeof b.mozHidden !== "undefined") return "mozvisibilitychange";
      else if (typeof b.msHidden !== "undefined") return "msvisibilitychange";
      else if (typeof b.webkitHidden !== "undefined")
        return "webkitvisibilitychange";
      return "visibilitychange";
    }
    function j() {
      var b = a.document;
      if (typeof b.hidden !== "undefined") return b.hidden;
      else if (typeof b.mozHidden !== "undefined") return b.mozHidden;
      else if (typeof b.msHidden !== "undefined") return b.msHidden;
      else if (typeof b.webkitHidden !== "undefined") return b.webkitHidden;
      return !1;
    }
    var k = b();
    function l(b) {
      var c = a.document.hasFocus ? a.document.hasFocus() : !0,
        d = j();
      return d || (b ? !1 : !c);
    }
    function m() {
      return j();
    }
    function e(b) {
      var d = (b == null ? void 0 : b.noPauseOnBlurOrFocus) === !0,
        e = i(function () {
          return l(d);
        }),
        f = e[0],
        g = e[1];
      e = i(function () {
        return m();
      });
      var j = e[0],
        n = e[1],
        o = !!b && b.scrollTerminatesHiddenOrBlurred === !0;
      e = h(
        function () {
          g(l(d)), n(m());
        },
        [g, d]
      );
      b = e;
      var p = h(
        function () {
          var a = l(d);
          a && o && f && g(!1);
        },
        [f, d, o]
      );
      d && (b = c("emptyFunction"));
      c("useEventCallbackOn")(a.window, "blur", b);
      c("useEventCallbackOn")(a.window, "focus", b);
      c("useEventCallbackOn")(a.document, k, e);
      c("useEventCallbackOn")(a.window, "scroll", p);
      return { isDocumentHidden: j, isDocumentHiddenOrBlurred: f };
    }
    g["default"] = e;
  },
  98
);
__d(
  "OzCDNSignedQueryParams",
  ["ConstUriUtils"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a() {
        this.$1 = {};
      }
      var b = a.prototype;
      b.$2 = function (a, b, c) {
        this.$1[a] == null && (this.$1[a] = {}), (this.$1[a][b] = c);
      };
      b.get = function (a) {
        a = this.$1[a];
        return a == null ? null : a;
      };
      b.update = function (a) {
        a = d("ConstUriUtils").getUri(a);
        if (a != null) {
          var b = a.getQueryParams();
          a = a.getDomain() + a.getPath();
          var c = b.get("oe");
          c != null && this.$2(a, "oe", String(b.get("oe")));
          b.get("oh") != null && this.$2(a, "oh", String(b.get("oh")));
        }
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerViewabilityProvider.react",
  ["VideoPlayerViewabilityContexts", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.children,
        c = a.isDesktopPictureInPicture,
        e = a.isFullscreen;
      a = a.videoPlayerPassiveViewabilityInfo;
      return h.jsx(
        d("VideoPlayerViewabilityContexts")
          .VideoPlayerPassiveViewabilityInfoContext.Provider,
        {
          value: a,
          children: h.jsx(
            d("VideoPlayerViewabilityContexts")
              .VideoPlayerDesktopPictureInPictureContext.Provider,
            {
              value: c,
              children: h.jsx(
                d("VideoPlayerViewabilityContexts").VideoPlayerFullscreenContext
                  .Provider,
                { value: e, children: b }
              ),
            }
          ),
        }
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useBlockCappedListItemWhenPlayingVideo",
  ["CappedListItemContext", "err", "gkx", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useContext,
      i = b.useEffect;
    e = !1;
    function a(a, b) {
      var d =
        (b = h(c("CappedListItemContext"))) == null
          ? void 0
          : b.registerBlocker;
      i(
        function () {
          if (!d) return;
          var b = null,
            c = null,
            e = function () {
              var e = a.getCurrentState().playing;
              if (e !== b) {
                b = e;
                c && (c(), (c = null));
                if (e) {
                  e = "playing_video";
                  var f;
                  c = d({ reason: e, source: f });
                }
              }
            };
          e();
          var f = a.subscribe(e);
          return function () {
            f.remove(), c && (c(), (c = null));
          };
        },
        [a, d]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "wrapWithContextProviders",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a, b) {
      return b.reduceRight(function (a, b) {
        return b(a);
      }, a);
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function b(a, b) {
      return function (c) {
        return h.jsx(a.Provider, { value: b, children: c });
      };
    }
    g.wrapWithContextProviders = a;
    g.makeRenderProviderFn = b;
  },
  98
);
__d(
  "VideoPlayerComponentContainer.react",
  [
    "CometVisualCompletionAttributes",
    "VideoPlayerContexts",
    "VideoPlayerHooks",
    "VideoPlayerViewabilityProvider.react",
    "clearTimeout",
    "cr:1269159",
    "react",
    "setTimeout",
    "stylex",
    "useBlockCappedListItemWhenPlayingVideo",
    "wrapWithContextProviders",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    e = d("react");
    var i = e.useCallback,
      j = e.useEffect,
      k = e.useRef,
      l = e.useState,
      m = {
        default: {
          height: "x5yr21d",
          position: "x10l6tqk",
          top: "x13vifvy",
          width: "xh8yej3",
          $$css: !0,
        },
        hiddenCursor: { cursor: "xjfk50j", $$css: !0 },
      };
    function n(a) {
      var b = k(a);
      j(
        function () {
          b.current = a;
        },
        [a]
      );
      var d = l(!1),
        e = d[0],
        f = d[1];
      d = l(function () {
        var a = null;
        return {
          cleanup: function () {
            a && a();
          },
          pingNotIdle: function () {
            a && a();
            f(!1);
            var d = c("setTimeout")(function () {
              f(!0);
            }, b.current);
            a = function () {
              c("clearTimeout")(d), (a = null);
            };
          },
        };
      });
      d = d[0];
      var g = d.cleanup;
      d = d.pingNotIdle;
      j(
        function () {
          return g;
        },
        [g]
      );
      return { isIdle: e, pingNotIdle: d };
    }
    function o() {
      var a = l(!1),
        b = a[0],
        c = a[1];
      a = 3e3;
      a = n(a);
      var d = a.isIdle,
        e = a.pingNotIdle;
      a = i(
        function () {
          c(!0), e();
        },
        [e]
      );
      var f = i(
          function () {
            c(!1), e();
          },
          [e]
        ),
        g = i(
          function () {
            c(!0), e();
          },
          [e]
        ),
        h = i(
          function () {
            e();
          },
          [e]
        ),
        j = i(
          function () {
            e();
          },
          [e]
        );
      return {
        isHovering: b,
        isIdle: d,
        onMouseDown: h,
        onMouseEnter: a,
        onMouseLeave: f,
        onMouseMove: g,
        onMouseUp: j,
      };
    }
    function p(a) {
      var b = o(),
        e = b.isHovering,
        f = b.isIdle,
        g = b.onMouseDown,
        i = b.onMouseEnter,
        j = b.onMouseLeave,
        k = b.onMouseMove;
      b = b.onMouseUp;
      var l = d("VideoPlayerHooks").useIsFullscreen();
      return h.jsx(
        "div",
        babelHelpers["extends"](
          { className: c("stylex")(m["default"], l && f && m.hiddenCursor) },
          c("CometVisualCompletionAttributes").IGNORE,
          {
            onMouseDown: g,
            onMouseEnter: i,
            onMouseLeave: j,
            onMouseMove: k,
            onMouseUp: b,
            children: h.jsx(
              d("VideoPlayerContexts").VideoPlayerMouseHoverContext.Provider,
              {
                value: e,
                children: h.jsx(
                  d("VideoPlayerContexts").VideoPlayerMouseIdleContext.Provider,
                  { value: f, children: a.children }
                ),
              }
            ),
          }
        )
      );
    }
    p.displayName = p.name + " [from " + f.id + "]";
    function a(a) {
      var e = a.children;
      a = babelHelpers.objectWithoutPropertiesLoose(a, ["children"]);
      var f = a.adClientToken,
        g = a.audioAvailabilityInfo,
        i = a.autoplayGatingResult,
        j = a.broadcastStatus,
        k = a.canAutoplay,
        l = a.controller,
        m = a.dimensions,
        n = a.initialTracePolicy,
        o = a.instanceKey,
        q = a.isDesktopPictureInPicture,
        r = a.isFullscreen,
        s = a.isNCSR,
        t = a.isPremiumMusicVideo,
        u = a.lastMuteReason,
        v = a.lastPauseReason,
        w = a.lastPlayReason,
        x = a.videoFBID,
        y = a.videoPixelsAspectRatio,
        z = a.videoPlayerPassiveViewabilityInfo,
        A = a.videoState,
        B = a.volumeSetting,
        C = A.activeCaptions,
        D = A.activeEmsgBoxes,
        E = A.availableAudioTracks,
        F = A.availableVideoQualities,
        G = A.bufferEnd,
        H = A.captionDisplayStyle,
        I = A.captionsLoaded,
        J = A.captionsVisible,
        K = A.currentAudioTrackID,
        L = A.currentVideoQuality,
        M = A.duration,
        N = A.ended,
        O = A.error,
        P = A.inbandCaptionsAutogenerated,
        Q = A.inPlayStalling,
        R = A.isAbrEnabled,
        S = A.isExternalMedia,
        T = A.isLiveRewindActive,
        U = A.lastPlayedTimeMs,
        V = A.latencyLevel,
        W = A.loopCount,
        X = A.loopCurrent,
        Y = A.muted,
        Z = A.paused,
        $ = A.playerImplementationName,
        aa = A.playing,
        ba = A.seekableRanges,
        ca = A.seeking,
        da = A.selectedAudioTrackID,
        ea = A.selectedVideoQuality,
        fa = A.stalling,
        ga = A.streamInterrupted,
        ha = A.targetPlaybackRate,
        ia = A.targetVideoQuality,
        ja = A.volume;
      A = A.watchTimeMs;
      e = h.jsx(p, { children: e });
      b("cr:1269159")(o, {
        controller: l,
        coreVideoStates: a,
        videoPlayerPassiveViewabilityInfo: z,
      });
      e = d("wrapWithContextProviders").wrapWithContextProviders(e, [
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").VideoFBIDContext,
          x
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").StallingContext,
          fa
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").PlayingContext,
          aa
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").InPlayStallingContext,
          Q
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").BufferEndContext,
          G
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").LastMuteReasonContext,
          u
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").LastPlayReasonContext,
          w
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").LastPauseReasonContext,
          v
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").PausedContext,
          Z
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").CurrentAudioTrackIDContext,
          K
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").CurrentVideoQualityContext,
          L
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").MutedContext,
          Y
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").SelectedAudioTrackIDContext,
          da
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").VolumeContext,
          ja
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").SelectedVideoQualityContext,
          ea
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").SeekingContext,
          ca
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").DurationContext,
          M
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").EndedContext,
          N
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").ErrorContext,
          O
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").DimensionsContext,
          m || null
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").InstanceKeyContext,
          o
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").ControllerContext,
          l
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").AvailableAudioTracksContext,
          E
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").AvailableVideoQualitiesContext,
          F
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").PlayerImplementationNameContext,
          $
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").IsAbrEnabledContext,
          R
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").TargetVideoQualityContext,
          ia
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").PlaybackRateContext,
          ha
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").CanAutoplayContext,
          k
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").VolumeSettingContext,
          B
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").AutoplayGatingResultContext,
          i
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").BroadcastStatusContext,
          j
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").LoopCountContext,
          W
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").LoopCurrentContext,
          X
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").AdClientTokenContext,
          f
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").ActiveCaptionsContext,
          C
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").CaptionsVisibleContext,
          J
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").CaptionDisplayStyleContext,
          H
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").CaptionsLoadedContext,
          I
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").InbandCaptionsAutogeneratedContext,
          P
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").StreamInterruptedContext,
          ga
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").WatchTimeContext,
          A
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").LastPlayedTimeContext,
          U
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").SeekableRangesContext,
          ba
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").LatencyLevelContext,
          V
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").IsLiveRewindActiveContext,
          T
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").AudioAvailabilityInfoContext,
          g
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").IsNCSRContext,
          s
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").IsPremiumMusicVideoContext,
          t
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").InitialTracePolicyContext,
          n
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").ActiveEmsgBoxesContext,
          D
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").IsExternalMediaContext,
          S
        ),
        d("wrapWithContextProviders").makeRenderProviderFn(
          d("VideoPlayerContexts").VideoPixelsAspectRatioContext,
          (a = y) != null ? a : null
        ),
        function (a) {
          return h.jsx(c("VideoPlayerViewabilityProvider.react"), {
            isDesktopPictureInPicture: q,
            isFullscreen: r,
            videoPlayerPassiveViewabilityInfo: z,
            children: a,
          });
        },
      ]);
      c("useBlockCappedListItemWhenPlayingVideo")(l, o);
      return h.jsx("div", {
        "data-instancekey": o,
        "data-testid": void 0,
        children: e,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = h.memo(a);
    g["default"] = e;
  },
  98
);
__d(
  "GlobalVideoPortsID",
  ["cometUniqueID", "unrecoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      return "id-pv-" + c("cometUniqueID")();
    }
    function b(a) {
      if (typeof a === "string") {
        var b = "id-pv-";
        if (a.indexOf(b) === 0 && a.length > b.length) return a;
        else
          throw c("unrecoverableViolation")(
            'Expected a GlobalVideoPortsVideoID, got a string that does not look like it: "' +
              a +
              '"',
            "comet_video_player"
          );
      } else return null;
    }
    function d() {
      return "id-pp-" + c("cometUniqueID")();
    }
    g.makeVideoID = a;
    g.ensureVideoID = b;
    g.makePlaceID = d;
  },
  98
);
__d(
  "VideoPlayerFullscreenController",
  ["CometFullScreen", "removeFromArray", "unrecoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      return (
        a.current != null &&
        d("CometFullScreen").getFullScreenElement() === a.current
      );
    }
    function a(a) {
      var b = [];
      function e() {
        b.forEach(function (a) {
          a();
        });
      }
      var f = null;
      return {
        getIsFullscreen: function () {
          return h(a);
        },
        requestSetIsFullscreen: function (b, e) {
          var f = a.current;
          if (f == null)
            throw c("unrecoverableViolation")(
              "Requested full screen while the element is not present",
              "comet_video_player"
            );
          d("CometFullScreen").isSupported()
            ? b !== h(a) &&
              (b === !0
                ? d("CometFullScreen").requestFullScreen(f)
                : b === !1 && d("CometFullScreen").exitFullScreen())
            : b && e != null && typeof e.webkitEnterFullScreen === "function"
            ? e.webkitEnterFullScreen()
            : !b &&
              e != null &&
              typeof e.webkitExitFullScreen === "function" &&
              e.webkitExitFullscreen();
        },
        subscribe: function (a) {
          b.length === 0 &&
            f == null &&
            (f = d("CometFullScreen").subscribeToFullScreenChangeEvent(e));
          b.push(a);
          return {
            remove: function () {
              c("removeFromArray")(b, a),
                b.length === 0 && f != null && (f(), (f = null));
            },
          };
        },
      };
    }
    g.createFullscreenController = a;
  },
  98
);
__d(
  "VideoPlayerPortalingPlaceState",
  [
    "GlobalVideoPortsContexts",
    "GlobalVideoPortsID",
    "gkx",
    "react",
    "usePrevious",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useEffect,
      i = b.useState;
    e = function (a, b) {
      var e = c("usePrevious")(a);
      h(
        function () {
          a !== e &&
            e !== null &&
            e &&
            !a &&
            b(d("GlobalVideoPortsID").makeVideoID());
        },
        [a, e, b]
      );
    };
    f = function (a, b) {
      var c = i(null),
        e = c[0];
      c = c[1];
      a !== e &&
        (e !== null && e && !a && b(d("GlobalVideoPortsID").makeVideoID()),
        c(a));
    };
    var j = c("gkx")("1375802") ? f : e;
    function a(a) {
      var b = a.portalingEnabled;
      a = a.portalingFromVideoID;
      var c = d("GlobalVideoPortsContexts").useGlobalVideoPortsLoader(),
        e = d("GlobalVideoPortsContexts").useGlobalVideoPortsManager(),
        f = d("GlobalVideoPortsContexts").useGlobalVideoPortsState(),
        g = e != null && f != null,
        k = (g || c != null) && (b || a != null),
        l = i(function () {
          return d("GlobalVideoPortsID").makePlaceID();
        });
      l = l[0];
      var m = i(function () {
          return d("GlobalVideoPortsID").makeVideoID();
        }),
        n = m[0];
      m = m[1];
      b = k && b && a != null;
      a = b && a != null ? a : n;
      j(b, m);
      h(
        function () {
          k && !g && c && c();
        },
        [g, k, c]
      );
      return {
        canBecomePortableLater: k,
        currentVideoID: a,
        globalVideoPortsManager: e,
        globalVideoPortsState: f,
        thisPlaceID: l,
      };
    }
    g.useRegenerateUniqueVideoID_exportedForTest = j;
    g.useVideoPlayerPortalingPlaceState = a;
  },
  98
);
__d(
  "VideoPlayerPortalingPlaceWithPortaling.react",
  [
    "BaseContextualLayerAnchorRootContext",
    "CoreVideoPlayerFitParentContainer.react",
    "GlobalVideoPortsRenderers.react",
    "getOwnObjectValues",
    "killswitch",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useContext,
      j = b.useEffect,
      k = b.useRef,
      l = b.useState;
    function a(a) {
      var b = a.coreVideoPlayerMetaData,
        e = a.currentPlaceID,
        f = a.currentVideoID,
        g = a.fullscreenController,
        m = a.globalVideoPortsManager,
        n = a.globalVideoPortsState_DEPRECATED,
        o = a.implementations,
        p = a.isFullscreen,
        q = a.portablePlaceMetaData,
        r = a.previousPlaceMetaData,
        s = a.renderComponents,
        t = a.renderPlaceholder,
        u = a.thisPlaceID,
        v = a.trackingDataEncrypted,
        w = a.trackingNodes,
        x = a.viewportMarginsForViewability;
      a = l(function () {
        return d(
          "CoreVideoPlayerFitParentContainer.react"
        ).createFitParentContainerDiv({ debugRole: null });
      });
      var y = a[0],
        z = k(null);
      j(function () {
        m.addOrUpdatePlace({
          coreVideoPlayerMetaData: b,
          fullscreenController: g,
          implementations: o,
          injectCoreVideoStatesRef: z,
          isFullscreen: p,
          portablePlaceContainer: y,
          portablePlaceID: u,
          portablePlaceMetaData: q,
          portableVideoID: f,
          renderComponents: s,
          renderPlaceholder: t,
          trackingDataEncrypted: v,
          trackingNodes: w,
          viewportMarginsForViewability: x,
        });
      }, [].concat(
        c("getOwnObjectValues")(b),
        [f, g, p, m, y],
        c("getOwnObjectValues")(q || {}),
        [s, t, u, v, w, x]
      ));
      j(
        function () {
          return function () {
            m.removePlace({ portablePlaceID: u });
          };
        },
        [m, u]
      );
      a = i(c("BaseContextualLayerAnchorRootContext"));
      var A = k(null);
      return h.jsxs(c("BaseContextualLayerAnchorRootContext").Provider, {
        value:
          p && !c("killswitch")("WORKPLACE_VIDEO_FULLSCREEN_CONTEXT_LAYER_ROOT")
            ? A
            : a,
        children: [
          h.jsx(
            d("CoreVideoPlayerFitParentContainer.react")
              .CoreVideoPlayerFitParentDOMContainer,
            { debugRole: null, domElement: y },
            u
          ),
          h.jsx(
            d("GlobalVideoPortsRenderers.react")
              .GlobalVideoPortsVideoComponentsRenderer,
            {
              currentPlaceID:
                n != null
                  ? (a =
                      (a = m.getCurrentPlaceStateForVideo(n, f)) == null
                        ? void 0
                        : a.portablePlaceID) != null
                    ? a
                    : null
                  : e,
              currentVideoID: f,
              injectCoreVideoStatesRef: z,
              previousPlaceMetaData:
                n != null
                  ? (e =
                      (a = m.getPortableVideoState(n, f)) == null
                        ? void 0
                        : a.previousPlaceMetaData) != null
                    ? e
                    : null
                  : r,
              renderComponents: s,
              thisPlaceID: u,
            }
          ),
          h.jsx("div", { ref: A }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerPortalingPlace.react",
  [
    "BaseViewportMarginsContext",
    "CometTrackingCodeContext",
    "CometTrackingNodesContext",
    "CoreVideoPlayer.react",
    "CoreVideoPlayerFitParentContainer.react",
    "GlobalVideoPortsID",
    "GlobalVideoPortsRenderers.react",
    "VideoPlayerFullscreenController",
    "VideoPlayerPortalingPlaceInfoProvider.react",
    "VideoPlayerPortalingPlaceState",
    "VideoPlayerPortalingPlaceWithPortaling.react",
    "react",
    "recoverableViolation",
    "useStable",
    "useUnsafeRef_DEPRECATED",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useContext,
      j = b.useEffect,
      k = b.useState,
      l = { bottom: 0, left: 0, right: 0, top: 0 },
      m = h.forwardRef(function (a, b) {
        var c = a.children,
          e = a.debugRole;
        a = a.testid;
        return h.jsx(
          d("CoreVideoPlayerFitParentContainer.react")
            .CoreVideoPlayerFitParentContainer,
          { debugRole: e, ref: b, testid: void 0, children: c }
        );
      });
    function a(a) {
      var b = a.implementations,
        e = a.portalingEnabled,
        f = a.portalingFromVideoID,
        g = a.portalingPlaceMetaData,
        n = a.renderComponents,
        o = a.renderPlaceholder;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "implementations",
        "portalingEnabled",
        "portalingFromVideoID",
        "portalingPlaceMetaData",
        "renderComponents",
        "renderPlaceholder",
      ]);
      j(function () {
        return function () {};
      }, []);
      var p = f != null ? d("GlobalVideoPortsID").ensureVideoID(f) : null;
      f != null &&
        p == null &&
        c("recoverableViolation")(
          "The provided portalingFromVideoID (" +
            String(f) +
            ") does not look like such an ID. The video player will not use portaling until a valid ID is provided",
          "comet_video_player"
        );
      f = d("VideoPlayerPortalingPlaceState").useVideoPlayerPortalingPlaceState(
        { portalingEnabled: e, portalingFromVideoID: p }
      );
      e = f.canBecomePortableLater;
      p = f.currentVideoID;
      var q = f.globalVideoPortsManager,
        r = f.globalVideoPortsState;
      f = f.thisPlaceID;
      var s = i(c("BaseViewportMarginsContext")),
        t = c("useUnsafeRef_DEPRECATED")(null),
        u = c("useStable")(function () {
          return d(
            "VideoPlayerFullscreenController"
          ).createFullscreenController(t);
        }),
        v = k(u.getIsFullscreen()),
        w = v[0],
        x = v[1];
      j(
        function () {
          var a = u.subscribe(function () {
            var a = u.getIsFullscreen();
            x(a);
          });
          x(u.getIsFullscreen());
          return function () {
            a.remove();
          };
        },
        [u, x]
      );
      v = i(c("CometTrackingNodesContext"));
      v = v.join("");
      var y = i(c("CometTrackingCodeContext"));
      y = (y = y.encrypted_tracking[0]) != null ? y : "";
      s = w ? l : s;
      var z =
        "comet-video-player-place" +
        (a.videoFBID != null ? "-vid-" + a.videoFBID : "");
      if (!e)
        return h.jsx(m, {
          debugRole: null,
          ref: t,
          testid: void 0,
          children: h.jsx(
            d("VideoPlayerPortalingPlaceInfoProvider.react")
              .VideoPlayerPortalingPlaceInfoProvider,
            {
              currentPlaceID: f,
              currentVideoID: p,
              portalingEnabled: !1,
              previousPlaceMetaData: null,
              thisPlaceID: f,
              children: h.jsx(
                c("CoreVideoPlayer.react"),
                babelHelpers["extends"]({}, a, {
                  fullscreenController: u,
                  implementations: b,
                  isFullscreen: w,
                  renderWithCoreVideoStates: n,
                  trackingDataEncrypted: y,
                  trackingNodes: v,
                  viewportMarginsForViewability: s,
                })
              ),
            }
          ),
        });
      if (q && r) {
        return h.jsx(m, {
          debugRole: null,
          ref: t,
          testid: void 0,
          children: h.jsx(c("VideoPlayerPortalingPlaceWithPortaling.react"), {
            coreVideoPlayerMetaData: a,
            currentPlaceID:
              (e =
                (z = q.getCurrentPlaceStateForVideo(r, p)) == null
                  ? void 0
                  : z.portablePlaceID) != null
                ? e
                : null,
            currentVideoID: p,
            fullscreenController: u,
            globalVideoPortsManager: q,
            globalVideoPortsState_DEPRECATED: null,
            implementations: b,
            isFullscreen: w,
            portablePlaceMetaData: g,
            previousPlaceMetaData:
              (e =
                (z = q.getPortableVideoState(r, p)) == null
                  ? void 0
                  : z.previousPlaceMetaData) != null
                ? e
                : null,
            renderComponents: n,
            renderPlaceholder: o,
            thisPlaceID: f,
            trackingDataEncrypted: y,
            trackingNodes: v,
            viewportMarginsForViewability: s,
          }),
        });
      } else {
        return h.jsx(m, {
          debugRole: null,
          ref: t,
          testid: void 0,
          children: h.jsx(
            d("GlobalVideoPortsRenderers.react")
              .GlobalVideoPortsPlaceholderRenderer,
            {
              currentPlaceID: null,
              currentVideoID: p,
              previousPlaceMetaData: null,
              renderPlaceholder: o,
              thisPlaceID: f,
              videoPixelsAspectRatio:
                (b = a.videoPixelsAspectRatio) != null ? b : null,
            }
          ),
        });
      }
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerTracePolicyContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = d("react").useContext;
    c = { initialTracePolicy: null, routeTracePolicy: null };
    var i = b.createContext(c);
    function a() {
      return h(i);
    }
    g.VideoPlayerTracePolicyContext = i;
    g.useVideoPlayerTracePolicy = a;
  },
  98
);
__d(
  "VideoPlayerTracePolicyProvider.react",
  ["VideoPlayerTracePolicyContext", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useEffect,
      j = b.useState;
    function a(a) {
      var b = a.children,
        c = a.initialTracePolicy,
        e = a.routeTracePolicy;
      a = j(c);
      var f = a[0],
        g = a[1];
      a = j(e);
      var k = a[0],
        l = a[1];
      i(
        function () {
          f !== c && g(c), k !== e && l(e);
        },
        [c, e, f, k]
      );
      return h.jsx(
        d("VideoPlayerTracePolicyContext").VideoPlayerTracePolicyContext
          .Provider,
        { value: { initialTracePolicy: f, routeTracePolicy: k }, children: b }
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CoreVideoPlayerWithComponents.react",
  [
    "VideoPlayerComponentContainer.react",
    "VideoPlayerPortalingPlace.react",
    "VideoPlayerTracePolicyProvider.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useCallback;
    function a(a) {
      var b = a.children,
        d = a.implementations,
        e = a.portalingEnabled,
        f = a.portalingFromVideoID,
        g = a.portalingPlaceMetaData,
        j = a.portalingRenderPlaceholder;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "children",
        "implementations",
        "portalingEnabled",
        "portalingFromVideoID",
        "portalingPlaceMetaData",
        "portalingRenderPlaceholder",
      ]);
      var k = i(
        function (a) {
          return h.jsx(
            c("VideoPlayerComponentContainer.react"),
            babelHelpers["extends"]({}, a, { children: b })
          );
        },
        [b]
      );
      return h.jsx(c("VideoPlayerTracePolicyProvider.react"), {
        initialTracePolicy: a.initialTracePolicy,
        routeTracePolicy: a.routeTracePolicy,
        children: h.jsx(
          c("VideoPlayerPortalingPlace.react"),
          babelHelpers["extends"]({}, a, {
            implementations: d,
            portalingEnabled: e,
            portalingFromVideoID: f,
            portalingPlaceMetaData: g,
            renderComponents: k,
            renderPlaceholder: j,
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
  "VideoPlayerErrorBoundary.react",
  ["FBLogger", "getErrorSafe", "oz-player/utils/OzError", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
          e[f] = arguments[f];
        return (
          ((b = c = a.call.apply(a, [this].concat(e)) || this),
          (c.state = { error: null }),
          (c.suppressReactDefaultErrorLogging = !0),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      b.getDerivedStateFromError = function (a) {
        return { error: c("getErrorSafe")(a) };
      };
      var d = b.prototype;
      d.componentDidCatch = function (a, b) {
        b = b.componentStack;
        var d = c("getErrorSafe")(a);
        d.componentStack = b;
        b = this.props;
        var e = b.description,
          f = b.onError;
        b = b.project;
        a =
          a instanceof c("oz-player/utils/OzError")
            ? a.getType()
            : a != null && typeof a.name === "string"
            ? a.name
            : d.name;
        d.name = a;
        a = "VideoPlayerErrorBoundary caught an " + a;
        e != null && (a = a + " (" + e + ")");
        e = [
          "OZ_NETWORK",
          "BUFFERING_TIMEOUT",
          "MEDIA_ERR_DECODE",
          "OZ_NETWORK_REQUEST_STREAM_RETRY_HANDLER_ERROR",
        ];
        var g = [
          "Network failure:",
          "Network failure.",
          "HTTP error.",
          "Bad URL timestamp",
          "URL signature expired",
          "No license for com.widevine.alpha",
        ];
        e =
          e.every(function (a) {
            return d.name !== a;
          }) &&
          g.every(function (a) {
            return !d.message.startsWith(a);
          });
        g = c("FBLogger")(b == null ? "comet_video_player" : b).catching(d);
        [
          "OZ_DRM_MANAGER",
          "OZ_JAVASCRIPT_NATIVE",
          "OZ_INITIALIZATION",
        ].includes(d.name) && (g = g.addToCategoryKey(d.message));
        e ? g.fatal(a) : g.warn(a);
        f != null && f(d);
      };
      d.render = function () {
        var a = this.props,
          b = a.children;
        a = a.fallback;
        var c = this.state.error;
        return c ? (typeof a === "function" ? a(c) : a) : b;
      };
      return b;
    })(a.PureComponent);
    g["default"] = b;
  },
  98
);
__d(
  "InstreamVideoAdBreaksPlayer.react",
  [
    "CometPlaceholder.react",
    "CometRelay",
    "InstreamVideoAdBreaksPlayer_video.graphql",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e = a.playerFormat,
        f = a.subOrigin;
      a = a.video;
      a = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("InstreamVideoAdBreaksPlayer_video.graphql")),
        a
      );
      var g = a.id,
        j = a.instream_extra_config;
      a = a.instream_video_ad_breaks_comet;
      return i.jsx(c("CometPlaceholder.react"), {
        fallback: null,
        children: i.jsx(d("CometRelay").MatchContainer, {
          match: a,
          props: {
            instreamExtraConfig: {
              instreamHaloDelayTimeSeconds:
                j == null ? void 0 : j.instream_halo_delay_time_seconds,
            },
            instreamVideoAdBreaksComet: a,
            playerFormat: e,
            subOrigin: f,
            videoFBID: g,
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
  "VideoPlayerFallbackLearnMoreLink.react",
  ["fbt", "CometLink.react", "TetraText.react", "gkx", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      a = c("gkx")("1224637")
        ? "/help/work/1876956335887765/i-cant-view-or-play-videos-on-workplace"
        : "https://www.facebook.com/help/396404120401278/list";
      return i.jsx(c("TetraText.react"), {
        color: "primaryOnMedia",
        type: "headlineEmphasized3",
        children: i.jsx(c("CometLink.react"), {
          href: a,
          children: h._("En savoir plus"),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerFallbackCoverImplWithoutRetry.react",
  [
    "TetraText.react",
    "VideoPlayerFallbackLearnMoreLink.react",
    "cr:1672302",
    "cr:4149",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var d = a.debugError,
        e = a.message,
        f = a.showDebugWithoutError;
      f = f === void 0 ? !0 : f;
      a = a.showLearnMoreLink;
      a = a === void 0 ? !0 : a;
      return h.jsx("div", {
        className:
          "x6s0dn4 xatbrnm x9f619 x78zum5 x5yr21d xl56j7k x6ikm8r x10wlt62 x889kno x1iji9kk x1a8lsjc x1sln4lm xh8yej3",
        children: h.jsxs("div", {
          className: "x6s0dn4 x78zum5 xdt5ytf x3es6ox",
          children: [
            h.jsx("div", {
              className: "x6s0dn4 x78zum5 xdt5ytf x193iq5w",
              children: h.jsx(c("TetraText.react"), {
                align: "center",
                color: "primaryOnMedia",
                type: "bodyLink3",
                children: e,
              }),
            }),
            a &&
              h.jsx("div", {
                className: "x6s0dn4 x78zum5 xdt5ytf xw7yly9 x193iq5w",
                children: h.jsx(
                  c("VideoPlayerFallbackLearnMoreLink.react"),
                  {}
                ),
              }),
            (d != null || f) &&
              h.jsxs(h.Fragment, {
                children: [
                  b("cr:4149") ? h.jsx(b("cr:4149"), { error: d }) : null,
                  b("cr:1672302") ? h.jsx(b("cr:1672302"), { error: d }) : null,
                ],
              }),
          ],
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerFallbackCover.react",
  ["fbt", "VideoPlayerFallbackCoverImplWithoutRetry.react", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b;
      b =
        (b = a.message) != null
          ? b
          : h._(
              "Nous rencontrons des probl\u00e8mes pour lire cette vid\u00e9o."
            );
      return i.jsx(c("VideoPlayerFallbackCoverImplWithoutRetry.react"), {
        debugError: a.debugError,
        message: b,
        showDebugWithoutError: a.showDebugWithoutError,
        showLearnMoreLink: a.showLearnMoreLink,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerUnsupportedBrowserMessageFallback.react",
  [
    "ErrorMetadata",
    "FBLogger",
    "VideoPlayerFallbackCover.react",
    "err",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useEffect,
      j = b.useMemo,
      k = b.useRef;
    function a(a, b) {
      var d = j(
          function () {
            if (a != null) {
              var d,
                e = c("err")(
                  "Cannot play video: Unsupported browser message from server: %s",
                  a
                );
              e.name = "VideoPlayerUnsupportedBrowserMessageFromServer";
              d = (d = e.metadata) != null ? d : new (c("ErrorMetadata"))();
              e.metadata = d;
              d.addEntry("COMET_VIDEO", "VIDEO_ID", b);
              return e;
            }
            return null;
          },
          [a, b]
        ),
        e = k(!1);
      i(
        function () {
          if (d != null && !e.current) {
            var a;
            e.current = !0;
            (a = c("FBLogger")("comet_video_player").catching(d)).warn.apply(
              a,
              [(a = d.messageFormat) != null ? a : ""].concat(
                (a = d.messageParams) != null ? a : []
              )
            );
          }
        },
        [d, b]
      );
      return a != null
        ? h.jsx(c("VideoPlayerFallbackCover.react"), {
            debugError: d,
            message: a,
          })
        : null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.useVideoPlayerUnsupportedBrowserMessageFallback = a;
  },
  98
);
__d(
  "CometAudioManagerHooks",
  ["CometAudioManagerContexts", "react", "recoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useContext;
    function a() {
      var a = h(d("CometAudioManagerContexts").AudioApiContext);
      return a;
    }
    g.useAudioApi = a;
  },
  98
);
__d(
  "makeAudioSymbol",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      return b + "::" + a;
    }
    f["default"] = a;
  },
  66
);
__d(
  "CoreVideoPlayerAudioClient.react",
  [
    "CometAudioManagerContexts",
    "CometAudioManagerHooks",
    "CometThrottle",
    "VideoPlayerHooks",
    "VideoPlayerPortalingPlaceInfoProvider.react",
    "createVideoStateHook",
    "gkx",
    "makeAudioSymbol",
    "react",
    "useCometUniqueID",
    "usePrevious",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    b = d("react");
    var h = b.useContext,
      i = b.useEffect,
      j = b.useMemo,
      k = b.useRef,
      l = b.useState;
    e = d("createVideoStateHook").createVideoStateHook();
    var m = e.valueHook;
    function a() {
      var a = c("gkx")("2011"),
        b = m({ isVolumeInitialized: !1 }),
        e = c("useCometUniqueID")(),
        f = d("VideoPlayerHooks").useInstanceKey(),
        g = j(
          function () {
            return c("makeAudioSymbol")(e, f);
          },
          [e, f]
        ),
        n = d("CometAudioManagerHooks").useAudioApi(),
        o = k(n);
      i(
        function () {
          o.current = n;
        },
        [n]
      );
      var p = d("VideoPlayerHooks").useController(),
        q = 200,
        r = d("VideoPlayerHooks").useLastPlayReason(),
        s = d("VideoPlayerHooks").useLastMuteReason(),
        t = d("VideoPlayerHooks").useMuted();
      q = c("CometThrottle")(d("VideoPlayerHooks").useVolume, q, {
        trailing: !0,
      });
      var u = q(),
        v = c("usePrevious")(u),
        w = d("VideoPlayerHooks").usePaused(),
        x = h(d("CometAudioManagerContexts").CometAudioLocalScopeContext),
        y = h(d("CometAudioManagerContexts").CometAudioGroupContext),
        z = d(
          "VideoPlayerPortalingPlaceInfoProvider.react"
        ).useVideoPlayerPortalingPlaceInfo(),
        A = d("VideoPlayerHooks").useVolumeSetting(),
        B = j(
          function () {
            return (
              (y == null ? void 0 : y.groupID) ||
              d("CometAudioManagerContexts").makeAudioGroupID()
            );
          },
          [y == null ? void 0 : y.groupID]
        );
      q = l(!0);
      var C = q[0];
      q = q[1];
      var D = j(
        function () {
          return {
            audioLocalScope: x,
            controller: p,
            groupID: B,
            instanceKey: f,
            lastMuteReason: s,
            lastPlayReason: r,
            muted: t,
            paused: w,
            previousVolume: v,
            symbol: g,
            videoPlayerPortalingPlaceInfo: z,
            volume: u,
          };
        },
        [x, p, B, f, s, r, t, w, v, g, z, u]
      );
      i(
        function () {
          a
            ? A != null &&
              b.isVolumeInitialized !== !0 &&
              (p.setVolume(A), (b.isVolumeInitialized = !0))
            : A != null && p.setVolume(A);
        },
        [p, b, a, A]
      );
      q = y || { allowSound: C, groupID: B, setAllowSound: q };
      var E = k(q);
      i(
        function () {
          n && n.register(D, E.current);
          return function () {
            n && n.unregister(g, B);
          };
        },
        [n, D, B, g]
      );
      i(
        function () {
          n && n.update(D);
        },
        [n, D]
      );
      i(
        function () {
          !C && o.current && p.setMuted(!0, "audio_manager_initiated");
        },
        [C, o, p]
      );
      return null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerAutoplayHooks",
  ["VideoPlayerAutoplayContexts", "react", "unrecoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useContext;
    function a() {
      var a = h(d("VideoPlayerAutoplayContexts").AutoplayApiContext);
      if (a == null)
        throw c("unrecoverableViolation")(
          "Empty AutoplayApiContext. Are you rendering useAutoplayApi outside of VideoAutoplayManagerX?",
          "comet_video_player"
        );
      return a;
    }
    function b() {
      return h(d("VideoPlayerAutoplayContexts").VideoAutoplayLocalScopeContext);
    }
    g.useAutoplayApi = a;
    g.useVideoAutoplayLocalScope = b;
  },
  98
);
__d(
  "VideoPlayerDebugAutoplayAPI",
  ["cr:1453865", "emptyFunction"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d =
      (a = b("cr:1453865")) != null
        ? a
        : {
            useVideoPlayerDebugAPI: c("emptyFunction").thatReturns(null),
            useVideoPlayerDebugAPIDefinition: c("emptyFunction"),
            useVideoPlayerDebugInfo: c("emptyFunction").thatReturns(null),
          };
    g["default"] = d;
  },
  98
);
__d(
  "evaluateVideoAutoplayDefaultAllowRule",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a() {
      return "ALLOW";
    }
    a.displayName = "evaluateVideoAutoplayDefaultRule";
    f["default"] = a;
  },
  66
);
__d(
  "makeSelectedAutoplayVideoSymbol",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      return b + "::" + a;
    }
    f["default"] = a;
  },
  66
);
__d(
  "AutoplayRulesEngine",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = -2,
      h = -1;
    a = (function () {
      function a(a) {
        (this.$1 = g), (this.$2 = a);
      }
      var b = a.prototype;
      b.evaluateAutoplay = function (a, b) {
        b = b();
        var c = h;
        if (a)
          for (var d = 0; d < this.$2.length; d++) {
            var e = this.$2[d](a);
            if (e !== "SKIP") {
              b = e;
              c = d;
              break;
            }
          }
        this.$1 = c;
        return b;
      };
      b.getIndexOfLastWinningRule = function () {
        return this.$1;
      };
      b.getRules = function () {
        return this.$2;
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "useAutoplayRulesEngine",
  ["AutoplayRulesEngine", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useEffect,
      i = b.useRef,
      j = b.useState;
    function a(a) {
      var b = i(a),
        d = j(function () {
          return new (c("AutoplayRulesEngine"))(a);
        }),
        e = d[0],
        f = d[1];
      h(
        function () {
          b.current !== a &&
            f(function () {
              return new (c("AutoplayRulesEngine"))(a);
            });
        },
        [a]
      );
      h(
        function () {
          b.current = e.getRules();
        },
        [e]
      );
      return e;
    }
    g["default"] = a;
  },
  98
);
__d(
  "useConcurrentAutoplayManagementAPI",
  ["react", "removeFromArray", "useCometUniqueID"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useState;
    function a() {
      return c("useCometUniqueID")();
    }
    function i() {
      var a = [];
      return {
        isControllingComponent: function (b) {
          var c = a.length;
          return a[c - 1] === b;
        },
        registerControllingComponent: function (b) {
          c("removeFromArray")(a, b), a.push(b);
        },
        unregisterControllingComponent: function (b) {
          var d = a.length;
          d > 1 && c("removeFromArray")(a, b);
          return d > 1;
        },
      };
    }
    function b() {
      var a = h(function () {
        return i();
      });
      a = a[0];
      return a;
    }
    g.useAutoplayControlID = a;
    g.createConcurrentAutoplayManagementAPI = i;
    g.useConcurrentAutoplayManagementAPI = b;
  },
  98
);
__d(
  "VideoPlayerViewabilityHooks",
  ["VideoPlayerHooks"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    (g.useVideoPlayerExtendedPassiveViewabilityInfo =
      d("VideoPlayerHooks").useVideoPlayerExtendedPassiveViewabilityInfo),
      (g.useVideoPlayerPassiveViewabilityInfo =
        d("VideoPlayerHooks").useVideoPlayerPassiveViewabilityInfo),
      (g.useVideoPlayerViewabilityInfo =
        d("VideoPlayerHooks").useVideoPlayerViewabilityInfo);
  },
  98
);
__d(
  "useVideoPlayerBandwidthEstimate",
  [
    "VideoPlayerOzWWWGlobalConfig",
    "oz-player/networks/OzBandwidthEstimator",
    "react",
    "useInterval",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useState,
      i = 5e3;
    function a() {
      var a = function () {
          return c("oz-player/networks/OzBandwidthEstimator").getBandwidth(
            c("VideoPlayerOzWWWGlobalConfig")
          );
        },
        b = h(a()),
        d = b[0],
        e = b[1];
      c("useInterval")(function () {
        return e(a());
      }, i);
      return d;
    }
    g["default"] = a;
  },
  98
);
__d(
  "useVideoAutoplayState",
  [
    "HiddenSubtreePassiveContext",
    "VideoPlayerHooks",
    "VideoPlayerShakaGlobalConfig",
    "VideoPlayerViewabilityHooks",
    "react",
    "useIsBackgrounded",
    "useVideoPlayerBandwidthEstimate",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.startTransition,
      i = b.useContext,
      j = b.useEffect,
      k = b.useMemo,
      l = b.useRef,
      m = b.useState;
    function a(a) {
      var b = d("VideoPlayerHooks").useAdClientToken(),
        e = d("VideoPlayerHooks").useAutoplayGatingResult(),
        f = d("VideoPlayerHooks").useBroadcastStatus(),
        g = d("VideoPlayerHooks").useEnded(),
        n = d("VideoPlayerHooks").useIsExternalMedia(),
        o = d("VideoPlayerHooks").useIsFrozenPassive(),
        p = d("VideoPlayerHooks").useLastPauseReason(),
        q = d("VideoPlayerHooks").useLastPlayReason(),
        r = d("VideoPlayerHooks").useMuted(),
        s = d("VideoPlayerHooks").usePaused(),
        t = i(c("HiddenSubtreePassiveContext")),
        u = !b;
      a =
        (a == null ? void 0 : a.noPauseOnBlurOrFocus) === !0 ||
        d("VideoPlayerShakaGlobalConfig").getBool(
          "comet_www_no_pause_on_blur_or_focus_events",
          !1
        );
      a = c("useIsBackgrounded")({
        noPauseOnBlurOrFocus: a,
        scrollTerminatesHiddenOrBlurred: u,
      });
      var v = a.isDocumentHidden,
        w = a.isDocumentHiddenOrBlurred,
        x = c("useVideoPlayerBandwidthEstimate")(),
        y = d(
          "VideoPlayerViewabilityHooks"
        ).useVideoPlayerPassiveViewabilityInfo(),
        z = d(
          "VideoPlayerViewabilityHooks"
        ).useVideoPlayerExtendedPassiveViewabilityInfo();
      u = m(t.getCurrentState().backgrounded);
      var A = u[0],
        B = u[1];
      a = m(t.getCurrentState().hidden);
      var C = a[0],
        D = a[1];
      j(
        function () {
          var a = function () {
              h(function () {
                var a = t.getCurrentState();
                D(a.hidden);
                B(a.backgrounded);
              });
            },
            b = t.subscribeToChanges(a);
          a();
          return function () {
            b.remove();
          };
        },
        [t, B, D]
      );
      u = m(function () {
        return o.getCurrentState();
      });
      var E = u[0],
        F = u[1];
      j(
        function () {
          var a = o.subscribeToChanges(function (a) {
              F(a);
            }),
            b = o.getCurrentState();
          F(b);
          return function () {
            a.remove();
          };
        },
        [o, F]
      );
      var G = k(
        function () {
          return {
            adClientToken: b,
            autoplayGatingResult: e,
            bandwidthEstimate: x,
            broadcastStatus: f,
            controllerIsFrozen: E,
            currentSubtreeIsBackgrounded: A,
            currentSubtreeIsHidden: C,
            ended: g,
            hiddenSubtreePassive: t,
            isDocumentHidden: v,
            isDocumentHiddenOrBlurred: w,
            isExternalMedia: n,
            isFrozenPassive: o,
            lastPauseReason: p,
            lastPlayReason: q,
            muted: r,
            paused: s,
            videoPlayerExtendedPassiveViewabilityInfo: z,
            videoPlayerPassiveViewabilityInfo: y,
          };
        },
        [b, e, x, f, E, A, C, g, t, v, w, n, o, p, q, r, s, z, y]
      );
      a = m(G);
      var H = a[0],
        I = a[1],
        J = l(H);
      j(
        function () {
          J.current = H;
        },
        [H]
      );
      j(
        function () {
          var a = !1;
          for (var b in G)
            if (
              Object.prototype.hasOwnProperty.call(G, b) &&
              G[b] !== J.current[b]
            ) {
              a = !0;
              break;
            }
          a && I(G);
        },
        [G, I]
      );
      return H;
    }
    g["default"] = a;
  },
  98
);
__d(
  "CoreVideoPlayerAutoplayClient.react",
  [
    "CoreVideoPlayerAutoplayClientUtils",
    "HiddenSubtreePassiveContext",
    "VideoPlayerAutoplayHooks",
    "VideoPlayerDebugAutoplayAPI",
    "VideoPlayerHooks",
    "VideoPlayerViewabilityConstants",
    "WwwCometVideoAutoplayFalcoEvent",
    "evaluateVideoAutoplayDefaultAllowRule",
    "evaluateVideoAutoplayDefaultIgnoreRule",
    "makeSelectedAutoplayVideoSymbol",
    "react",
    "useAutoplayRulesEngine",
    "useCometUniqueID",
    "useConcurrentAutoplayManagementAPI",
    "useVideoAutoplayState",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    b = d("react");
    var h = b.useCallback,
      i = b.useContext,
      j = b.useEffect,
      k = b.useMemo,
      l = b.useRef,
      m = b.useState;
    function a() {
      var a = c("useCometUniqueID")(),
        b = d("VideoPlayerHooks").useCanAutoplay(),
        e = d("VideoPlayerHooks").useInstanceKey(),
        f = k(
          function () {
            return c("makeSelectedAutoplayVideoSymbol")(a, e);
          },
          [a, e]
        ),
        g = l(f);
      j(
        function () {
          g.current = f;
        },
        [f]
      );
      var n = i(c("HiddenSubtreePassiveContext")),
        o = d("VideoPlayerHooks").useController(),
        p = l(!1),
        q = d("useConcurrentAutoplayManagementAPI").useAutoplayControlID();
      j(
        function () {
          d("CoreVideoPlayerAutoplayClientUtils").log(
            g.current,
            "[ASSUME CONTROL] " + q
          ),
            o.registerControllingComponent(q);
        },
        [o, q]
      );
      var r = d("VideoPlayerHooks").useVideoPlayerPassiveViewabilityInfo(),
        s = o.getCurrentState();
      s = s.paused;
      var t = l(s),
        u = d("VideoPlayerAutoplayHooks").useVideoAutoplayLocalScope(),
        v = l(u);
      j(
        function () {
          v.current = u;
        },
        [u]
      );
      var w = h(
          function () {
            var a = o.getCurrentState(),
              b = a.lastPlayReason;
            a = a.paused;
            var d = t.current;
            t.current = a;
            var e = r == null ? void 0 : r.getCurrent();
            if (e) {
              e = e.visiblePercentage;
              a = !a && a !== d;
              d =
                e <
                  c("VideoPlayerViewabilityConstants")
                    .DEFAULT_VIEWABILITY_PERCENTAGE_FOR_PAUSE && e > 0;
              v.current.disableScrollBeforePlayWhenOffscreen !== !0 &&
                a &&
                b === "user_initiated" &&
                d &&
                (p.current = !0);
            }
          },
          [o, r]
        ),
        x = l(w);
      j(
        function () {
          x.current = w;
        },
        [w]
      );
      j(
        function () {
          var a = o.subscribe(function () {
            w();
          });
          return function () {
            a.remove();
          };
        },
        [o, w]
      );
      var y = c("useVideoAutoplayState")({
          noPauseOnBlurOrFocus: u.noPauseOnBlurOrFocus,
        }),
        z = c("useAutoplayRulesEngine")(u.autoplayLocalRules),
        A =
          b === "allow"
            ? c("evaluateVideoAutoplayDefaultAllowRule")
            : c("evaluateVideoAutoplayDefaultIgnoreRule");
      s = m(function () {
        return A;
      });
      var B = s[0],
        C = s[1];
      s = m(null);
      var D = s[0],
        E = s[1];
      s = m(function () {
        return z.evaluateAutoplay(y, A);
      });
      var F = s[0],
        G = s[1];
      s = m(null);
      var H = s[0],
        I = s[1],
        J = l(F),
        K = d("VideoPlayerAutoplayHooks").useAutoplayApi(),
        L = l(K);
      j(
        function () {
          L.current = K;
        },
        [K]
      );
      var M = b !== "dangerously_disable_autoplay_management";
      j(
        function () {
          K.register(f, e, u, o, n, M);
          c("WwwCometVideoAutoplayFalcoEvent").log(function () {
            return {
              autoplay_event_name: "register",
              autoplay_scope_id: v.current.autoplayScopeID,
              event_creation_time: Date.now(),
              initiator: g.current,
              initiator_type: "autoplay_component",
              selected_autoplay_video_symbol: K.getAutoplayManagerDebugInfo(
                v.current
              ).selectedAutoplayVideoSymbol,
              target: g.current,
              target_current_autoplay_decision: J.current,
            };
          });
          return function () {
            K.unregister(f),
              c("WwwCometVideoAutoplayFalcoEvent").log(function () {
                return {
                  autoplay_event_name: "unregister",
                  autoplay_scope_id: v.current.autoplayScopeID,
                  event_creation_time: Date.now(),
                  initiator: g.current,
                  initiator_type: "autoplay_component",
                  selected_autoplay_video_symbol: K.getAutoplayManagerDebugInfo(
                    v.current
                  ).selectedAutoplayVideoSymbol,
                  target: g.current,
                  target_current_autoplay_decision: J.current,
                };
              });
          };
        },
        [K, u, o, n, e, M, f]
      );
      j(
        function () {
          var a = function () {
              var b = z.evaluateAutoplay(y, A);
              J.current = b;
              var e = z.getRules(),
                h = z.getIndexOfLastWinningRule(),
                a = h >= 0 ? e[h] : A;
              e = r && r.getCurrent();
              h = o.getCurrentState();
              h = h.paused;
              (H === null || H !== b) && (G(b), I(b));
              if (b === "PAUSE" && !h && o.isControllingComponent(q)) {
                h = !0;
                x.current();
                if (p.current) {
                  p.current = !1;
                  var i = e == null ? void 0 : e.positionToViewport;
                  i && o.scrollIntoView(i.top < 0);
                  h = !1;
                }
                if (h) {
                  i = "[PAUSE] via short-circuit on " + a.name + ".";
                  d("CoreVideoPlayerAutoplayClientUtils").log(g.current, i);
                  o.pause("autoplay_initiated");
                  c("WwwCometVideoAutoplayFalcoEvent").log(function () {
                    return {
                      autoplay_event_name: "pause",
                      autoplay_scope_id: v.current.autoplayScopeID,
                      event_creation_time: Date.now(),
                      initiator: g.current,
                      initiator_type: "autoplay_component",
                      selected_autoplay_video_symbol:
                        K.getAutoplayManagerDebugInfo(v.current)
                          .selectedAutoplayVideoSymbol,
                      target: g.current,
                      target_current_autoplay_decision: b,
                    };
                  });
                }
              }
              (D === null || D !== a) &&
                (C(function () {
                  return a;
                }),
                E(function () {
                  return a;
                }),
                c("WwwCometVideoAutoplayFalcoEvent").log(function () {
                  return {
                    autoplay_event_name: "rule_changed",
                    autoplay_scope_id: v.current.autoplayScopeID,
                    event_creation_time: Date.now(),
                    initiator: g.current,
                    initiator_type: "autoplay_component",
                    selected_autoplay_video_symbol:
                      K.getAutoplayManagerDebugInfo(v.current)
                        .selectedAutoplayVideoSymbol,
                    target: g.current,
                    target_current_autoplay_decision: b,
                  };
                }));
              d("CoreVideoPlayerAutoplayClientUtils").log(
                g.current,
                "[DECISION: " + b + "] from " + a.name
              );
              e && K.update(f, b, e);
            },
            b = n.subscribeToChanges(function (a) {
              n.getCurrentState().hidden || n.getCurrentState().backgrounded
                ? o.isControllingComponent(q) ||
                  o.unregisterControllingComponent(q)
                : o.registerControllingComponent(q);
            }),
            e = r
              ? r.subscribe(function () {
                  n.getCurrentState().hidden || n.getCurrentState().backgrounded
                    ? o.isControllingComponent(q) ||
                      o.unregisterControllingComponent(q)
                    : o.registerControllingComponent(q),
                    a();
                })
              : null;
          a();
          return function () {
            b.remove(), e && e.remove();
          };
        },
        [K, q, z, o, A, n, D, H, C, G, E, I, f, y, r]
      );
      j(
        function () {
          var a = o.isControllingComponent(q),
            b = o.getCurrentState();
          b = b.paused;
          d("CoreVideoPlayerAutoplayClientUtils").componentShouldPause(
            F,
            J.current,
            b,
            a
          ) &&
            (d("CoreVideoPlayerAutoplayClientUtils").log(
              g.current,
              "[PAUSE] the video for " + F
            ),
            o.pause("autoplay_initiated"),
            c("WwwCometVideoAutoplayFalcoEvent").log(function () {
              return {
                autoplay_event_name: "pause",
                autoplay_scope_id: v.current.autoplayScopeID,
                event_creation_time: Date.now(),
                initiator: g.current,
                initiator_type: "autoplay_component",
                selected_autoplay_video_symbol:
                  L.current.getAutoplayManagerDebugInfo(v.current)
                    .selectedAutoplayVideoSymbol,
                target: g.current,
                target_current_autoplay_decision: F,
              };
            }));
        },
        [F, o, q]
      );
      j(
        function () {
          return function () {
            d("CoreVideoPlayerAutoplayClientUtils").log(
              g.current,
              "[RELEASE CONTROL] " + q
            ),
              o.unregisterControllingComponent(q);
          };
        },
        [o, q]
      );
      c("VideoPlayerDebugAutoplayAPI").useVideoPlayerDebugAPIDefinition({
        applicableRule: B,
        autoplayApiRef: L,
        autoplayDecision: F,
        autoplayLocalScope: u,
        symbol: f,
      });
      return null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerCaptionsAreaDeferred.react",
  ["deferredLoadComponent", "react", "requireDeferredForDisplay"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    a = c("deferredLoadComponent")(
      c("requireDeferredForDisplay")("VideoPlayerCaptionsArea.react").__setRef(
        "VideoPlayerCaptionsAreaDeferred.react"
      )
    );
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerIMFMetadataContext",
  ["react", "unrecoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = d("react").useContext,
      i = { imfExpectedFromEmsg: !1, specInlineJson: null },
      j = b.createContext(i);
    j.displayName = "VideoPlayerIMFMetadataContext";
    e = j.Provider;
    function a() {
      var a = h(j);
      if (a === i)
        throw c("unrecoverableViolation")(
          "useVideoPlayerIMFMetadata is not called from a component nested under VideoPlayerRelay/VideoPlayerX.",
          "comet_video_player"
        );
      return a;
    }
    g.VideoPlayerIMFMetadataContextProvider = e;
    g.useVideoPlayerIMFMetadataFromContext = a;
  },
  98
);
__d(
  "VideoPlayerWebSessionExtender.react",
  ["VideoPlayerHooks", "WebSessionExtender", "react", "useCometUniqueID"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useEffect;
    function a() {
      var a = d("VideoPlayerHooks").usePlaying(),
        b = c("useCometUniqueID")();
      h(
        function () {
          if (a) {
            d("WebSessionExtender").subscribe(b, "video");
            return function () {
              d("WebSessionExtender").unsubscribe(b);
            };
          }
        },
        [a, b]
      );
      return null;
    }
    g["default"] = a;
  },
  98
);
__d(
  "useVideoPlayerDefaultLoadingIndicatorsLogic",
  ["VideoPlayerHooks"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      var a = d("VideoPlayerHooks").useStalling(),
        b = d("VideoPlayerHooks").useStreamInterrupted(),
        c = d("VideoPlayerHooks").useIsLiveRewindActive();
      b = b && !c;
      c = a;
      a = b ? "live_video_interrupted_overlay" : c ? "spinner" : "none";
      return {
        liveVideoInterruptedOverlayVisible: b,
        loadingIndicatorType: a,
        spinnerVisible: c,
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "useVideoPlayerDefaultLoadingIndicators",
  [
    "CometPlaceholder.react",
    "deferredLoadComponent",
    "gkx",
    "once",
    "react",
    "requireDeferred",
    "requireDeferredForDisplay",
    "useVideoPlayerDefaultLoadingIndicatorsLogic",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = c("deferredLoadComponent")(
        c("requireDeferredForDisplay")("VideoPlayerSpinner.react").__setRef(
          "useVideoPlayerDefaultLoadingIndicators"
        )
      ),
      j = c("deferredLoadComponent")(
        c("requireDeferred")(
          "VideoPlayerWithLiveVideoInterruptedOverlay.react"
        ).__setRef("useVideoPlayerDefaultLoadingIndicators")
      ),
      k = c("once")(function () {
        return c("gkx")("5900")
          ? null
          : h.jsx(c("CometPlaceholder.react"), {
              fallback: null,
              children: h.jsx(j, {}),
            });
      });
    function a() {
      var a = c("useVideoPlayerDefaultLoadingIndicatorsLogic")(),
        b = a.loadingIndicatorType;
      a = a.spinnerVisible;
      a = h.jsx(i, { isVisible: a });
      var d = null;
      switch (b) {
        case "spinner":
          d = a;
          break;
        case "live_video_interrupted_overlay":
          d = k();
          break;
        case "none":
        default:
          d = a;
      }
      return { loadingIndicatorElement: d, loadingIndicatorType: b };
    }
    g["default"] = a;
  },
  98
);
__d(
  "XVideoUnifiedCVCControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")("/video/unified_cvc/", Object.freeze({}), void 0);
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "UnifiedVideoCVCSubscription",
  [
    "CVCv3DisabledPlayerOrigins",
    "CVCv3DisabledPlayerSubOrigins",
    "CVCv3SubscriptionHelper",
    "DateConsts",
    "XVideoUnifiedCVCControllerRouteBuilder",
    "clearTimeout",
    "cometAsyncFetch",
    "gkx",
    "promiseDone",
    "setTimeout",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = Object.values(c("CVCv3DisabledPlayerOrigins")),
      i = Object.values(c("CVCv3DisabledPlayerSubOrigins")),
      j = 10;
    a = (function () {
      function a(a, b, d, e, f, g) {
        var j = this;
        this.$1 = new (c("CVCv3SubscriptionHelper"))(a, b, d);
        this.$5 = f;
        this.$6 = null;
        this.$9 = null;
        this.$10 = !this.$1.isValidSubscription();
        this.$3 = null;
        this.$2 = null;
        a = b != null ? h.includes(b) : !1;
        f = d != null ? i.includes(d) : !1;
        !a &&
          !f &&
          ((this.$3 = e),
          (this.$11 = g),
          (this.$4 = e.subscribe(function () {
            if (j.$3 == null) {
              j.$1.logDebugInfo("empty_video_controller");
              return;
            }
            var a = j.$3.getCurrentState();
            a.playing ? j.$12(a) : j.$13();
          })));
      }
      var b = a.prototype;
      b.$12 = function (a) {
        if (this.$3 == null) {
          this.$1.logDebugInfo("empty_video_controller");
          return;
        }
        var b = !1;
        b || (b = this.$5 ? !0 : c("gkx")("1124976"));
        if (!b) {
          this.$1.logDebugInfo("ineligible_to_comet_cvc");
          return;
        }
        if (a.playing) {
          if (this.$2 == null) {
            b = this.$3.getPlayheadPosition();
            b >= 0 && (this.$2 = b);
          }
        } else this.$2 = null;
        this.$14(0);
      };
      b.stopUnifiedCVC = function () {
        this.$13();
      };
      b.destroy = function () {
        this.$13(),
          this.$4 != null && this.$4.remove(),
          (this.$4 = null),
          (this.$3 = null);
      };
      b.$13 = function () {
        c("clearTimeout")(this.$8),
          c("clearTimeout")(this.$7),
          (this.$8 = null),
          (this.$7 = null),
          (this.$2 = null),
          this.$1.clearAnyPreviousContext(),
          (this.$9 = null);
      };
      b.$15 = function () {
        c("clearTimeout")(this.$7), (this.$7 = null);
      };
      b.$16 = function () {
        (this.$9 = null), this.$15(), this.$14(0);
      };
      b.$14 = function (a) {
        var b = this;
        if (this.$3 == null || this.$8 != null || this.$9 != null || this.$10)
          return;
        this.$8 = c("setTimeout")(function () {
          b.$8 = null;
          var a = b.$17();
          if (a == null) {
            b.$1.logDebugInfo("empty_request");
            return;
          }
          b.$9 = a;
          var e = Date.now(),
            f = !1;
          c("promiseDone")(
            a,
            function (c) {
              if (a !== b.$9) return;
              b.$9 = null;
              if (c != null) {
                c = b.$1.processUnifiedResponse(c);
                b.$18(c, e);
              } else b.$1.logHttpResponseBad("null payload", Date.now() - e);
            },
            function (a) {
              (f = !0),
                b.$1.logHttpRequestFailure(
                  a != null ? JSON.stringify(a) : null,
                  Date.now() - e
                );
            }
          );
          b.$7 = c("setTimeout")(function () {
            f || b.$1.logHttpRequestTimeout(Date.now() - e), b.$16();
          }, j * d("DateConsts").MS_PER_SEC);
        }, a);
      };
      b.$18 = function (a, b) {
        this.$15();
        b = Date.now() - b;
        a.d != null
          ? (this.$1.logHttpRequestSuccess(b),
            this.$11 != null && this.$11(a.d))
          : this.$1.logHttpResponseBad("no data field", b);
        if (a.a != null) {
          b = a.a.t;
          switch (b) {
            case "p":
              b = a.a.pi;
              b == null && (b = j);
              this.$14(b * d("DateConsts").MS_PER_SEC);
              break;
            case "s":
              this.$10 = !0;
              break;
          }
        }
      };
      b.$17 = function () {
        var a = this.$19();
        if (a == null) return null;
        a = { d: JSON.stringify(a) };
        return c("cometAsyncFetch")(
          c("XVideoUnifiedCVCControllerRouteBuilder").buildURL({}),
          { data: a, method: "POST" }
        );
      };
      b.$19 = function () {
        if (this.$3 == null) return null;
        var a = {};
        this.$6 != null && (a.lc = this.$6);
        this.$5 && (a.ls = !0);
        var b = 0,
          c = 0;
        this.$2 != null && ((b = this.$2), (c = this.$3.getPlayheadPosition()));
        var d = this.$3.getCurrentState();
        b = this.$1.makeUnifiedVideoCVCUpdate(b, c, this.$20(d), d.muted, a);
        return b;
      };
      b.$20 = function (a) {
        if (a.playing || a.seeking) return "playing";
        else if (a.ended) return "ended";
        else if (a.paused) return "paused";
        else return "unknown";
      };
      b.testing_setLastStartPosition = function (a) {
        this.$2 = a;
      };
      b.testing_makeUnifiedStateUpdate = function () {
        return this.$19();
      };
      b.testing_handleUnifiedResponse = function (a) {
        return this.$18(a, Date.now());
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "getPlayerFormatForLogData",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      a = a.isFullscreen;
      return a === !0 ? "full_screen" : b != null ? b : "inline";
    }
    f["default"] = a;
  },
  66
);
__d(
  "useVideoPlayerUnifiedCVCProvider",
  [
    "CvcV3HttpEventFalcoEvent",
    "UnifiedVideoCVCSubscription",
    "VideoPlayerHooks",
    "createVideoStateHook",
    "getPlayerFormatForLogData",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useEffect;
    b = d("createVideoStateHook").createVideoStateHook(null);
    var i = b.setterHook;
    e = d("createVideoStateHook").createVideoStateHook(null);
    var j = e.setterHook;
    f = e.valueHook;
    function a(a) {
      var b = a.disableSubscription,
        e = a.playerFormat,
        f = a.subOrigin,
        g = a.videoFBID,
        k = d("VideoPlayerHooks").useIsLive(),
        l = d("VideoPlayerHooks").useIsFullscreen(),
        m = d("VideoPlayerHooks").useIsDesktopPictureInPicture(),
        n = d("VideoPlayerHooks").useController(),
        o = i(),
        p = j();
      h(
        function () {
          if (b === !0) {
            c("CvcV3HttpEventFalcoEvent").log(function () {
              return { countable_id: g, name: "disable_subscription" };
            });
            return;
          }
          var a = new (c("UnifiedVideoCVCSubscription"))(
            g,
            c("getPlayerFormatForLogData")(
              { isDesktopPictureInPicture: m, isFullscreen: l },
              e
            ),
            f,
            n,
            k,
            function (a) {
              p(a);
            }
          );
          o(a);
          return function () {
            a.destroy();
          };
        },
        [m, l, k, b, e, p, o, f, n, g]
      );
    }
    b = f;
    g.useVideoPlayerUnifiedCVCProvider = a;
    g.useVideoPlayerUnifiedCVCData = b;
  },
  98
);
__d(
  "VideoPlayerXImplSurface.react",
  [
    "CoreVideoPlayerAudioClient.react",
    "CoreVideoPlayerAutoplayClient.react",
    "VideoPlayerCaptionsAreaDeferred.react",
    "VideoPlayerIMFMetadataContext",
    "VideoPlayerInteractionOverlay.react",
    "VideoPlayerWebSessionExtender.react",
    "cr:1954434",
    "cr:99",
    "gkx",
    "react",
    "useVideoPlayerDefaultLoadingIndicators",
    "useVideoPlayerUnifiedCVCProvider",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var e = a.children,
        f = a.disableCVCSubscription,
        g = a.disableLoadingIndicator;
      g = g === void 0 ? !1 : g;
      var i = a.disableLogging,
        j = a.instreamVideoAdBreaksPlayer,
        k = a.playerFormat,
        l = a.subOrigin,
        m = a.videoFBID,
        n = a.videoPlayerIMFFromVideoMetadata;
      a = a.videoPlayerSpherical;
      d("useVideoPlayerUnifiedCVCProvider").useVideoPlayerUnifiedCVCProvider({
        disableSubscription: i === !0 || f,
        playerFormat: k,
        subOrigin: l,
        videoFBID: m,
      });
      i = c("useVideoPlayerDefaultLoadingIndicators")();
      f = i.loadingIndicatorElement;
      return h.jsxs(
        d("VideoPlayerIMFMetadataContext")
          .VideoPlayerIMFMetadataContextProvider,
        {
          value: (k = n) != null ? k : null,
          children: [
            a,
            g ? null : f,
            c("gkx")("1586633")
              ? h.jsx(
                  d("VideoPlayerInteractionOverlay.react")
                    .VideoPlayerInteractionOverlay,
                  {}
                )
              : null,
            h.jsxs(c("VideoPlayerCaptionsAreaDeferred.react"), {
              children: [e, j],
            }),
            h.jsx(c("CoreVideoPlayerAutoplayClient.react"), {}),
            h.jsx(c("CoreVideoPlayerAudioClient.react"), {}),
            b("cr:1954434") ? h.jsx(b("cr:1954434"), {}) : null,
            b("cr:99") ? h.jsx(b("cr:99"), { subOrigin: l }) : null,
            h.jsx(c("VideoPlayerWebSessionExtender.react"), {}),
          ],
        }
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "normalizeVideoPlayerLoopCount",
  ["unrecoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, d) {
      b === void 0 && (b = null);
      d === void 0 && (d = null);
      if (a == null) {
        var e;
        d = ((e = b) != null ? e : !1) ? ((e = d) != null ? e : 0) : 0;
        d === -1
          ? (e = -1)
          : d < 0 || !Number.isFinite(d) || Math.floor(d) !== d
          ? (e = 0)
          : d === 0 && b === !0
          ? (e = -1)
          : (e = d);
      } else if (a === -1 || a === Number.POSITIVE_INFINITY) e = -1;
      else if (a < 0 || !Number.isFinite(a) || Math.floor(a) !== a)
        throw c("unrecoverableViolation")(
          "Invalid loopingCount: " + a,
          "comet_video_player"
        );
      else e = a;
      return e;
    }
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerXImpl.react",
  [
    "CoreVideoPlayerWithComponents.react",
    "VideoPlayerXImplSurface.react",
    "normalizeVideoPlayerLoopCount",
    "react",
    "usePlayerOriginRouteTracePolicy",
    "useRouteProductAttribution",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.children,
        d = a.disableCVCSubscription;
      d = d === void 0 ? !1 : d;
      var e = a.disableLoadingIndicator,
        f = a.disableLogging,
        g = a.implementations,
        i = a.instreamVideoAdBreaksPlayer,
        j = a.portalingEnabled,
        k = a.portalingFromVideoID,
        l = a.portalingPlaceMetaData,
        m = a.portalingRenderPlaceholder,
        n = a.videoPlayerIMFFromVideoMetadata,
        o = a.videoPlayerSpherical;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "children",
        "disableCVCSubscription",
        "disableLoadingIndicator",
        "disableLogging",
        "implementations",
        "instreamVideoAdBreaksPlayer",
        "portalingEnabled",
        "portalingFromVideoID",
        "portalingPlaceMetaData",
        "portalingRenderPlaceholder",
        "videoPlayerIMFFromVideoMetadata",
        "videoPlayerSpherical",
      ]);
      var p = c("usePlayerOriginRouteTracePolicy")(),
        q = c("useRouteProductAttribution")();
      q || (q = a.productAttribution);
      var r = a.loopCount,
        s = a.playerFormat,
        t = a.subOrigin,
        u = a.videoFBID;
      r = c("normalizeVideoPlayerLoopCount")(r);
      return h.jsx(
        c("CoreVideoPlayerWithComponents.react"),
        babelHelpers["extends"]({}, a, {
          disableLogging: f,
          implementations: g,
          loopCount: r,
          portalingEnabled: j,
          portalingFromVideoID: k,
          portalingPlaceMetaData: l,
          portalingRenderPlaceholder: m,
          productAttribution: q,
          routeTracePolicy: p,
          children: h.jsx(c("VideoPlayerXImplSurface.react"), {
            children: b,
            disableCVCSubscription: d,
            disableLoadingIndicator: e,
            disableLogging: f,
            instreamVideoAdBreaksPlayer: i,
            playerFormat: s,
            subOrigin: t,
            videoFBID: u,
            videoPlayerIMFFromVideoMetadata: n,
            videoPlayerSpherical: o,
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
  "VideoPlayerXImplRelayWrapper.react",
  ["VideoPlayerXImpl.react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("VideoPlayerXImpl.react");
  },
  98
);
__d(
  "LatencySensitiveType",
  ["$InternalEnum"],
  function (a, b, c, d, e, f) {
    a = b("$InternalEnum")({ NORMAL: 0, LOW: 1, ULTRA_LOW: 2 });
    c = a;
    f["default"] = c;
  },
  66
);
__d(
  "XFBLatencySensitiveTypeUtils.facebook",
  ["$InternalEnumUtils", "LatencySensitiveType"],
  function (a, b, c, d, e, f, g) {
    a = d("$InternalEnumUtils").createToJSEnum(c("LatencySensitiveType"));
    b = d("$InternalEnumUtils").createFromJSEnum(c("LatencySensitiveType"));
    g.toJSEnum = a;
    g.fromJSEnum = b;
  },
  98
);
__d(
  "computeAspectRatio",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      return a != null && b != null && a !== 0 && b !== 0 ? a / b : null;
    }
    f["default"] = a;
  },
  66
);
__d(
  "defaultErrorBoundaryFallback",
  ["fbt", "VideoPlayerFallbackCover.react", "gkx", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function j(a) {
      return (
        c("gkx")("1792489") &&
        a.message.toLowerCase().indexOf("audio_renderer_error") >= 0
      );
    }
    function k(a) {
      return (
        c("gkx")("4281") && a.message.indexOf("DEVICE_CERTIFICATE_REVOKED") >= 0
      );
    }
    function l(a) {
      return (
        c("gkx")("1076") &&
        (a.name.indexOf("VideoImplementationsDashManifestUnsupportedCodecs") >=
          0 ||
          a.name.indexOf("VideoImplementationsMediaSourceUnsupported") >= 0)
      );
    }
    function a(a) {
      var b = null;
      j(a)
        ? (b = h._(
            "Erreur de moteur de rendu audio\u00a0: Veuillez red\u00e9marrer votre ordinateur."
          ))
        : k(a)
        ? (b = h._(
            "Cette vid\u00e9o est prot\u00e9g\u00e9e par DRM, mais le certificat de votre appareil semble \u00eatre r\u00e9voqu\u00e9. Assurez-vous que votre navigateur est \u00e0 jour, puis r\u00e9essayez."
          ))
        : l(a) &&
          (b = h._(
            "This video cannot be played in the browser, operating system, or hardware you're using."
          ));
      return i.jsx(c("VideoPlayerFallbackCover.react"), {
        debugError: a,
        message: b,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "getVideoPlayerAutoplayProps",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b, c) {
      b = b != null ? b : "respect_user_settings";
      var d = b === "dangerously_always_autoplay";
      c = c != null ? c : "unknown";
      var e = a.autoplaySetting || "default_autoplay",
        f = e === "off";
      d = d || (b === "respect_user_settings" && !f && a.canAutoplay);
      f = b === "do_not_autoplay" ? c : a.autoplayGatingResult;
      c = d
        ? "allow"
        : b === "dangerously_disable_autoplay_management"
        ? "dangerously_disable_autoplay_management"
        : "deny";
      return { autoplayGatingResult: f, autoplaySetting: e, canAutoplay: c };
    }
    f["default"] = a;
  },
  66
);
__d(
  "GraphQLVideoAutoplayGatingResult",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b, c) {
      a = a != null ? a : "unknown";
      b = b ? b : null;
      return {
        autoplayGatingResult: a,
        autoplaySetting: b,
        canAutoplay: c != null ? c : !1,
      };
    }
    f.makeGraphQLVideoAutoplayGatingResult = a;
  },
  66
);
__d(
  "useGraphQLVideoAutoplayGatingResult",
  [
    "CometRelay",
    "GraphQLVideoAutoplayGatingResult",
    "useGraphQLVideoAutoplayGatingResult_video.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    function a(a) {
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("useGraphQLVideoAutoplayGatingResult_video.graphql")),
        a
      );
      return d(
        "GraphQLVideoAutoplayGatingResult"
      ).makeGraphQLVideoAutoplayGatingResult(
        a.autoplay_gating_result,
        a.viewer_autoplay_setting,
        a.can_autoplay
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "GraphQLVideoDRMInfo",
  ["isEmptyObject"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b = a.fairplay_cert,
        d = a.graph_api_video_license_uri,
        e = a.video_license_uri_map;
      a = a.widevine_cert;
      d = {
        fairplayCert: b,
        graphApiVideoLicenseUri: (b = d) != null ? b : null,
        videoLicenseUriMap: e,
        widevineCert: a,
      };
      return d.graphApiVideoLicenseUri === null &&
        c("isEmptyObject")(d.videoLicenseUriMap)
        ? null
        : d;
    }
    g.makeGraphQLVideoDRMInfo = a;
  },
  98
);
__d(
  "useGraphQLVideoDRMInfo",
  [
    "CometRelay",
    "GraphQLVideoDRMInfo",
    "react",
    "useGraphQLVideoDRMInfo_video.graphql",
    "useUnsafeRef_DEPRECATED",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react").useRef;
    function j(a) {
      if (a != null) {
        a = k(a);
        return d("GraphQLVideoDRMInfo").makeGraphQLVideoDRMInfo(a);
      }
      return null;
    }
    function k(a) {
      a = JSON.parse(a) || {};
      var b = a.fairplay_cert,
        c = a.graph_api_video_license_uri,
        d = a.video_license_uri_map;
      a = a.widevine_cert;
      return {
        fairplay_cert: b,
        graph_api_video_license_uri: c,
        video_license_uri_map: d,
        widevine_cert: a,
      };
    }
    function a(a) {
      a = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("useGraphQLVideoDRMInfo_video.graphql")),
        a
      );
      var e = i(null),
        f = j(a.drm_info),
        g = c("useUnsafeRef_DEPRECATED")(null);
      e.current !== a.drm_info && ((e.current = a.drm_info), (g.current = f));
      return g.current;
    }
    g["default"] = a;
  },
  98
);
__d(
  "GraphQLVideoP2PSettings",
  ["$InternalEnum"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b("$InternalEnum").Mirrored(["HiveJava", "HiveJS", "StatsJS"]);
    function a(a) {
      return (a = g.cast(a)) != null ? a : null;
    }
    f.HiveTechOrder = g;
    f.hiveTechOrderOrNull = a;
  },
  66
);
__d(
  "useGraphQLVideoP2PSettings",
  [
    "CometRelay",
    "GraphQLVideoP2PSettings",
    "recoverableViolation",
    "useGraphQLVideoP2PSettings_video.graphql",
    "useUnsafeRef_DEPRECATED",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    function i(a) {
      var b = null;
      if (a) {
        var e, f, g, h, i;
        e = {
          delay_p2p_until_play:
            (e = (e = a.config) == null ? void 0 : e.delay_p2p_until_play) !=
            null
              ? e
              : !1,
          disable_hivejava_for_livevc:
            (e =
              (e = a.config) == null
                ? void 0
                : e.disable_hivejava_for_livevc) != null
              ? e
              : !1,
        };
        var j = a.ticket,
          k = a.community_info;
        f =
          (f = a.hive_initialization_options) == null ? void 0 : f.debug_level;
        g =
          (g =
            (g = a.hive_initialization_options) == null
              ? void 0
              : g.hive_tech_order
                  .map(function (a) {
                    var b = d("GraphQLVideoP2PSettings").hiveTechOrderOrNull(a);
                    b == null &&
                      a != null &&
                      c("recoverableViolation")(
                        "Invalid hive tech order: '" + a + "'",
                        "comet_video_player"
                      );
                    return b;
                  })
                  .filter(Boolean)) != null
            ? g
            : [];
        h =
          (h = a.hive_initialization_options) == null
            ? void 0
            : (h = h.hive_java) == null
            ? void 0
            : h.min_version;
        i = ((i = a.hive_initialization_options) == null ? void 0 : i.hive_java)
          ? { minVersion: h }
          : null;
        h = a.hive_initialization_options
          ? { HiveJava: i, debugLevel: f, hiveTechOrder: g }
          : null;
        f = {
          communityId:
            (a = k == null ? void 0 : k.community_id) != null
              ? a
              : "unknowncustomer",
          communityName:
            (i = k == null ? void 0 : k.community_name) != null
              ? i
              : "Unknown Customer",
        };
        b = {
          community_info: f,
          config: e,
          hive_initialization_options: h,
          ticket: j,
        };
      }
      return b;
    }
    function a(a) {
      a = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("useGraphQLVideoP2PSettings_video.graphql")),
        a
      );
      var e = c("useUnsafeRef_DEPRECATED")(null),
        f = c("useUnsafeRef_DEPRECATED")(null);
      a = i((a = a.p2p_settings) != null ? a : null);
      var g = JSON.stringify(a);
      if (e.current !== g) {
        e.current = (e = g) != null ? e : null;
        f.current = (g = a) != null ? g : null;
      }
      return f.current;
    }
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerOzImplementationData",
  ["err", "getAvailableMimeCodecsFromDashManifest"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b = a.canUseOz,
        d = a.dashManifestUrl,
        e = a.dashManifestUrlOverride_DO_NOT_USE,
        f = a.dashManifestXmlString,
        g = a.experimentationConfig,
        h = a.initialAudioUserPreferredLanguage;
      a = a.minQualityPreference;
      if (b !== !0) {
        b = c("err")("The DASH player is not available for this video");
        b.name = "VideoImplementationsDashPlayerUnavailable";
        return b;
      }
      b = e != null ? null : f == null || f === "" ? null : f;
      f = e != null ? e : d == null || d === "" ? null : d;
      if (b == null && f == null) {
        e = c("err")("video has no manifest and no manifest URL");
        e.name = "VideoImplementationsNoManifestOrURL";
        return e;
      }
      if (!window.MediaSource) {
        d = c("err")("MediaSource is unsupported");
        d.name = "VideoImplementationsMediaSourceUnsupported";
        return d;
      }
      if (b != null) {
        e = c("getAvailableMimeCodecsFromDashManifest")(b).filter(function (a) {
          return a.isRequiredForPlayback;
        });
        d = e.filter(function (a) {
          return !a.isTypeSupported;
        });
        if (d.length > 0) {
          d = c("err")(
            "%s out of %s codecs in DASH manifest required for playback are unsupported: %s",
            String(d.length),
            String(e.length),
            e
              .map(function (a) {
                return (
                  a.mimeType +
                  "/" +
                  a.codecs +
                  "=" +
                  (a.isTypeSupported ? "yes" : "no")
                );
              })
              .join(", ")
          );
          d.name = "VideoImplementationsDashManifestUnsupportedCodecs";
          return d;
        }
      }
      return {
        experimentationConfig: g,
        initialAudioUserPreferredLanguage: (e = h) != null ? e : null,
        manifest: b,
        manifestUrl: f,
        minQualityPreference: (d = a) != null ? d : null,
        seoWebCrawlerLookasideUrl: f,
      };
    }
    g.makeOzImplementationData = a;
  },
  98
);
__d(
  "MediaPlaybackCompoundEventStateMachineLogger",
  ["emptyFunction", "gkx"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 0.5;
    b = c("emptyFunction");
    d = c("emptyFunction");
    e = c("emptyFunction");
    function i() {
      return {
        canLogPausedOrFinishedPlaying: !1,
        canLogPlayingEvent: !0,
        hasLoggedStartedPlaying: !1,
        hasPendingRequestedPlaying: !1,
        isLoggingScrubbingSequence: !1,
        lastLoggedCaptionState: null,
        lastLoggedFullscreenState: !1,
        lastLoggedSoundOnState: null,
        shouldIgnoreDomPause: !1,
        shouldIgnoreDomPlay: !1,
        shouldLogRequestedPlayingForScrub: !1,
      };
    }
    function a(a) {
      var b = {},
        d = a.initialLoggingMetaData;
      d;
      var e = [],
        f = i();
      function g(a) {
        var b,
          c = a.eventType,
          g = a.snaplOverrides,
          h = a.state;
        a = a.tags;
        var i = null,
          j = null,
          k =
            (a == null ? void 0 : a.fullscreen) != null
              ? a == null
                ? void 0
                : a.fullscreen
              : f.lastLoggedFullscreenState,
          l =
            (a == null ? void 0 : a.captions_displayed) != null
              ? a == null
                ? void 0
                : a.captions_displayed
              : f.lastLoggedCaptionState,
          m =
            (a == null ? void 0 : a.player_sound_on) != null
              ? a == null
                ? void 0
                : a.player_sound_on
              : f.lastLoggedSoundOnState;
        b = (b = d.coreVideoPlayerMetaData.videoFBID) != null ? b : "-1";
        var n =
          d.coreVideoPlayerMetaData.adClientToken == null ? "organic" : "paid";
        b = {
          current_watching_module: "",
          media_id: b,
          player_origin: d.coreVideoPlayerMetaData.playerOriginOverride,
          player_suborigin: d.coreVideoPlayerMetaData.subOrigin,
          tracking_type: n,
        };
        n = "";
        (g == null ? void 0 : g.video_time_position) != null
          ? (n = Math.round(g.video_time_position * 1e3).toString())
          : h.uncontrolledState.videoElementPlayheadPosition != null &&
            (n = Math.round(
              h.uncontrolledState.videoElementPlayheadPosition * 1e3
            ).toString());
        g = {
          client_time_ms: Date.now().toString(),
          event_name: c,
          media_time_ms: n,
          tag_metadata: {
            captions_displayed: a == null ? void 0 : a.captions_displayed,
            fullscreen: a == null ? void 0 : a.fullscreen,
            player_sound_on: a == null ? void 0 : a.player_sound_on,
          },
        };
        h = {
          client_high_res_packaging_time_ms: i,
          event: g,
          operational_metadata: j,
          required_metadata: b,
        };
        e.push(h);
        f.lastLoggedSoundOnState = m;
        f.lastLoggedFullscreenState = k;
        f.lastLoggedCaptionState = l;
      }
      function j(a) {
        d;
        if (a.type === "notify_logging_metadata_change") {
          a = a.payload.loggingMetaData;
          d = a;
        }
      }
      function k(a, c, d) {
        if (
          a.controlledState.playbackState !== c.controlledState.playbackState &&
          c.controlledState.playbackState === "ended" &&
          f.canLogPausedOrFinishedPlaying
        ) {
          g({ eventType: "completed", state: c });
          f.canLogPausedOrFinishedPlaying = !1;
          return b;
        } else return b;
      }
      function l(a, c) {
        g({ eventType: "requested_playing", snaplOverrides: c, state: a });
        f.hasPendingRequestedPlaying = !0;
        f.canLogPausedOrFinishedPlaying = !0;
        return b;
      }
      function m(a) {
        if (!f.canLogPausedOrFinishedPlaying) return b;
        else if (f.hasPendingRequestedPlaying) {
          n(a);
          f.canLogPausedOrFinishedPlaying = !1;
          f.hasPendingRequestedPlaying = !1;
          return b;
        } else {
          g({ eventType: "paused", state: a });
          f.canLogPausedOrFinishedPlaying = !1;
          f.hasPendingRequestedPlaying = !1;
          return b;
        }
      }
      function n(a) {
        g({ eventType: "cancelled", state: a });
        return b;
      }
      function o(a, c, d) {
        if (
          d.type === "dom_event_play_promise_rejected" &&
          f.hasPendingRequestedPlaying
        ) {
          a = d.payload.playPromiseRejectionReason;
          if (a != null && a.name === "NotAllowedError") {
            n(c);
            return b;
          } else return b;
        } else return b;
      }
      function p(a, c, d) {
        if (
          (d.type === "controller_play_requested" ||
            (d.type === "dom_event_play" && !f.shouldIgnoreDomPlay)) &&
          a.controlledState.playbackState !== c.controlledState.playbackState
        ) {
          l(c);
          return b;
        } else return b;
      }
      function q(a, c, d) {
        var e = c.controlledState.playbackState,
          g = a.controlledState.playbackState;
        if (
          d.type === "controller_scrub_begin_requested" &&
          !a.controlledState.scrubbing &&
          e !== "paused" &&
          e !== "ended"
        ) {
          m(c);
          f.isLoggingScrubbingSequence = !0;
          return b;
        } else if (
          !a.controlledState.seeking &&
          c.controlledState.seeking &&
          !f.isLoggingScrubbingSequence &&
          e !== "paused" &&
          e !== "ended" &&
          !f.hasPendingRequestedPlaying
        ) {
          m(c);
          f.shouldLogRequestedPlayingForScrub = !0;
          return b;
        } else if (
          d.type === "controller_scrub_end_requested" &&
          a.controlledState.scrubbing &&
          e !== "paused" &&
          e !== "ended"
        ) {
          l(c, { video_time_position: d.payload.seekTargetPosition });
          return b;
        } else if (a.controlledState.seeking && !c.controlledState.seeking) {
          d = c.uncontrolledState.videoElementPlayheadPosition;
          a = a.controlledState.implementationSeekSourcePosition;
          a != null &&
            d != null &&
            Math.abs(a - d) > h &&
            (f.shouldLogRequestedPlayingForScrub &&
              e !== "paused" &&
              e !== "ended" &&
              l(c),
            (f.isLoggingScrubbingSequence = !1),
            (f.shouldLogRequestedPlayingForScrub = !1),
            g !== "paused" && g !== "ended" && (f.canLogPlayingEvent = !0));
          return b;
        } else return b;
      }
      function r(a, c, d) {
        if (
          a.controlledState.playbackState === "stalling" &&
          c.controlledState.playbackState === "playing" &&
          f.canLogPlayingEvent
        ) {
          g({
            eventType: f.hasLoggedStartedPlaying
              ? "unpaused"
              : "started_playing",
            state: c,
          });
          f.hasLoggedStartedPlaying = !0;
          f.canLogPlayingEvent = !1;
          f.hasPendingRequestedPlaying = !1;
          return b;
        } else return b;
      }
      function s(a, c, d) {
        if (
          (d.type === "controller_pause_requested" ||
            (d.type === "dom_event_pause" && !f.shouldIgnoreDomPause)) &&
          a.controlledState.playbackState !== c.controlledState.playbackState
        ) {
          m(c);
          return b;
        } else return b;
      }
      function t(a, d, e) {
        a = d.controlledState.playbackState;
        if (a !== "paused" && a !== "ended") {
          c("gkx")("1469813") &&
          e.type === "implementation_video_node_unmounted"
            ? m(d)
            : (e.type === "implementation_unmounted" ||
                e.type === "implementation_engine_destroy_requested") &&
              m(d);
          return b;
        } else return b;
      }
      function u(a, c, d) {
        if (d.type !== "notify_fullscreen_changed") return b;
        a = f.lastLoggedFullscreenState;
        d = c.uncontrolledState.isFullscreen;
        if (a !== !0 && d === !0) {
          x(c, !0);
          return b;
        } else if (a === !0 && d === !1) {
          x(c, !1);
          return b;
        } else return b;
      }
      function v(a, c, d) {
        if (
          d.type !== "controller_muted_requested" &&
          d.type !== "controller_volume_requested"
        )
          return b;
        a = c.controlledState.muted;
        d = c.controlledState.volume;
        a = !(a || d === 0);
        d = f.lastLoggedSoundOnState;
        if (d !== !0 && a === !0) {
          g({
            eventType: "tags_changed",
            state: c,
            tags: { player_sound_on: !0 },
          });
          return b;
        } else if (d !== !1 && a === !1) {
          g({
            eventType: "tags_changed",
            state: c,
            tags: { player_sound_on: !1 },
          });
          return b;
        } else return b;
      }
      function w(a, c, d) {
        if (d.type !== "controller_set_captions_visible_requested") return b;
        a = f.lastLoggedCaptionState;
        d = c.controlledState.captionsVisible;
        if (a !== !0 && d === !0) {
          g({
            eventType: "tags_changed",
            state: c,
            tags: { captions_displayed: !0 },
          });
          return b;
        } else if (a !== !1 && d === !1) {
          g({
            eventType: "tags_changed",
            state: c,
            tags: { captions_displayed: !1 },
          });
          return b;
        } else return b;
      }
      function x(a, b) {
        g({ eventType: "tags_changed", state: a, tags: { fullscreen: b } });
      }
      return {
        consumeLoggerEvents: function () {
          return e.length > 0 ? e.splice(0) : [];
        },
        handleStateMachine: function (a, b, c) {
          j(c);
          var d = b.controlledState.playbackState,
            e = [u, o, p, q, r, k, s, v, t, w];
          e.forEach(function (d) {
            d(a, b, c);
          });
          (d === "paused" || d === "ended") && (f.canLogPlayingEvent = !0);
          c.type === "controller_pause_requested" &&
            (f.shouldIgnoreDomPause = !0);
          c.type === "controller_play_requested" &&
            (f.shouldIgnoreDomPlay = !0);
          c.type === "dom_event_pause" && (f.shouldIgnoreDomPause = !1);
          c.type === "dom_event_play" && (f.shouldIgnoreDomPlay = !1);
        },
      };
    }
    g.createMediaPlaybackCompoundEventStateMachineLogger = a;
  },
  98
);
__d(
  "VideoPlayerWwwLogger",
  ["VideoPlayerWwwFalcoEvent"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      var b,
        c =
          a.logData.live_trace_stream_id !== null &&
          a.logData.live_trace_stream_type !== null;
      return {
        access_token: a.logData.access_token,
        ad_client_token: a.logData.ad_client_token,
        attribution_id: a.logData.attribution_id,
        attribution_id_v2: a.logData.attribution_id_v2,
        attribution_id_v2_root: a.logData.attribution_id_v2_root,
        audio_only: a.logData.audio_only,
        audio_representation_id: a.logData.audio_representation_id,
        autoplay_eligible: a.logData.autoplay_eligible,
        autoplay_failure_reasons: a.logData.autoplay_failure_reasons,
        autoplay_setting: a.logData.autoplay_setting,
        available_qualities: a.logData.available_qualities,
        broadcaster_origin: a.logData.broadcaster_origin,
        browser_tab_id: a.logData.browser_tab_id,
        caption_state: a.logData.caption_state,
        cast_client_app_id: a.logData.cast_client_app_id,
        client_latency_setting: a.logData.client_latency_setting,
        current_playback_speed: a.logData.current_playback_speed,
        current_viewability_percentage: Number(
          a.logData.current_viewability_percentage
        ),
        current_volume: a.logData.current_volume,
        dash_perf_logging_enabled: a.logData.dash_perf_logging_enabled,
        data_connection_quality: a.logData.data_connection_quality,
        debug_reason: a.logData.debug_reason,
        device_id: a.logData.device_id,
        device_type: a.logData.device_type,
        dropped_frame_count: Number(a.logData.dropped_frame_count),
        error: a.logData.error,
        error_code: a.logData.error_code,
        error_description: a.logData.error_description,
        error_domain: a.logData.error_domain,
        error_type: a.logData.error_type,
        error_user_info: a.logData.error_user_info,
        event_name: a.eventType,
        event_seq_num: a.logData.event_seq_num,
        external_log_id: a.logData.external_log_id,
        external_log_type: a.logData.external_log_id,
        fb_manifest_identifier: a.logData.fb_manifest_identifier,
        feed_aggregation_type: a.logData.feed_aggregation_type,
        feed_position: a.logData.feed_position,
        frame_events: a.logData.frame_events,
        ft: a.logData.ft,
        imf_emsg_id: a.logData.imf_emsg_id,
        imf_event_type: a.logData.imf_event_type,
        imf_topic: a.logData.imf_topic,
        interrupt_count:
          a.logData.interrupt_count !== null
            ? Number(a.logData.interrupt_count)
            : null,
        interrupt_time: Number(a.logData.interrupt_time),
        is_abr_enabled: a.logData.is_abr_enabled,
        is_fbms: a.logData.is_fbms,
        is_live_preview: (b = a.logData.is_live_preview) != null ? b : !1,
        is_live_video_rewound: a.logData.is_live_video_rewound,
        is_p2p_playback: a.logData.is_p2p_playback,
        is_pip: a.logData.is_pip,
        is_predictive_playback: a.logData.is_predictive_playback,
        is_sound_on: a.logData.is_sound_on,
        is_stalling: a.logData.is_stalling,
        is_templated_manifest: a.logData.is_templated_manifest,
        last_viewability_percentage: Number(
          a.logData.last_viewability_percentage
        ),
        live_trace_source_id: a.logData.live_trace_source_id,
        live_trace_stream_id: c ? a.logData.live_trace_stream_id : null,
        live_trace_stream_type: c ? a.logData.live_trace_stream_type : null,
        mpd_validation_errors: a.logData.mpd_validation_errors,
        network_connected: a.logData.network_connected,
        next_representation_id: a.logData.next_representation_id,
        notification_id: a.logData.notification_id,
        notification_medium: a.logData.notification_medium,
        offset_ms:
          a.logData.offset_ms != null ? String(a.logData.offset_ms) : null,
        permalink_share_id: a.logData.permalink_share_id,
        playback_caption_format: a.logData.playback_caption_format,
        playback_caption_locale: a.logData.playback_caption_locale,
        playback_duration: a.logData.playback_duration,
        playback_is_broadcast: a.logData.playback_is_broadcast,
        playback_is_drm: a.logData.playback_is_drm,
        playback_is_live_streaming: a.logData.playback_is_live_streaming,
        player_format: a.logData.player_format,
        player_instance_key: a.logData.player_instance_key,
        player_mode: a.logData.player_mode,
        player_origin: a.logData.player_origin,
        player_state: a.logData.player_state,
        player_suborigin: a.logData.player_suborigin,
        player_version: a.logData.player_version,
        reaction_video_channel_type: a.logData.reaction_video_channel_type,
        representation_id: a.logData.representation_id,
        resource_url: a.logData.resource_url,
        routeTracePolicy: a.routeTracePolicy,
        seq_num: a.logData.seq_num,
        source: a.source_VPL_LOGGING_HACK,
        source_VPL_LOGGING_HACK: a.logData.source_VPL_LOGGING_HACK,
        stall_count: Number(a.logData.stall_count),
        stall_count_200_ms: Number(a.logData.stall_count_200_ms),
        stall_time: Number(a.logData.stall_time),
        state: a.logData.state,
        streaming_format: a.logData.streaming_format,
        time_ms: a.logData.time_ms,
        total_frame_count: Number(a.logData.total_frame_count),
        tracking_data_encrypted: a.logData.tracking_data_encrypted,
        tracking_nodes: a.logData.tracking_nodes,
        tv_session_id: a.logData.tv_session_id,
        v2_heart_beat: a.logData.v2_heart_beat,
        video_bandwidth: a.logData.video_bandwidth,
        video_buffer_end_position: a.logData.video_buffer_end_position,
        video_chaining_depth_level: a.logData.video_chaining_depth_level,
        video_chaining_parent_video_id:
          a.logData.video_chaining_parent_video_id,
        video_chaining_session_id: a.logData.video_chaining_session_id,
        video_channel_id: a.logData.video_channel_id,
        video_id: a.logData.video_id,
        video_last_start_time_position:
          a.logData.video_last_start_time_position,
        video_play_reason: a.logData.video_play_reason,
        video_player_height: Number(a.logData.video_player_height),
        video_player_width: Number(a.logData.video_player_width),
        video_time_position: a.logData.video_time_position,
        vpts: a.logData.vpts,
        web_client_revision: a.logData.web_client_revision,
      };
    }
    a = {
      logComet: function (a) {
        c("VideoPlayerWwwFalcoEvent").log(function () {
          return h(a);
        });
      },
      logCometImmediately: function (a) {
        c("VideoPlayerWwwFalcoEvent").logImmediately(function () {
          return h(a);
        });
      },
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "VideoPlayerBanzaiLogFlusher",
  ["VideoPlayerWwwLogger", "emptyFunction", "gkx"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("emptyFunction");
    b = (function () {
      function a(a) {
        this.$1 = a;
      }
      var b = a.prototype;
      b.flushLogs = function () {
        var a = this.$1.consumeLoggerEvents();
        a.forEach(function (a) {
          var b = {
            event: a.eventType,
            logData: a.logData,
            routeTracePolicy: a.routeTracePolicy,
            source: a.source_VPL_LOGGING_HACK,
          };
          if (a.source_VPL_LOGGING_HACK === "animated_image_share") return;
          b = (b = a.logData) == null ? void 0 : b.ad_client_token;
          b != null
            ? c("VideoPlayerWwwLogger").logCometImmediately(a)
            : c("VideoPlayerWwwLogger").logComet(a);
        });
      };
      b.discardLogsWithoutFlushing = function () {
        var a = this.$1.consumeLoggerEvents();
      };
      return a;
    })();
    g["default"] = b;
  },
  98
);
__d(
  "VideoPlayerCaptionsController",
  ["JSResourceForInteraction", "recoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = c("JSResourceForInteraction")(
        "VideoPlayerHTML5ApiCea608State"
      ).__setRef("VideoPlayerCaptionsController"),
      i = c("JSResourceForInteraction")(
        "VideoPlayerHTML5ApiWebVttState"
      ).__setRef("VideoPlayerCaptionsController");
    function a(a) {
      var b = a.captionsUrl,
        d = a.inbandCaptionsExpected,
        e = a.onCaptionsLoaded,
        f = null,
        g = null,
        j = null,
        k = null;
      function l(a) {
        var b = i
          .load()
          .then(function (c) {
            if (b !== j) return;
            f = new c({
              captionsDisplay: null,
              onCaptionsLoaded: e,
              onReady: function (b) {
                b.loadFromUrl(a);
              },
            });
          })
          ["catch"](function (a) {
            if (b !== j) return;
            c("recoverableViolation")(
              "Failed to load the VideoPlayerHTML5ApiWebVttState module: " +
                a.message,
              "comet_video_player"
            );
          });
        return b;
      }
      function m() {
        var a = h
          .load()
          .then(function (b) {
            if (a !== k) return;
            g = new b({
              captionsDisplay: null,
              onCaptionsLoaded: e,
              onReady: function (a) {
                a.processQueue();
              },
            });
          })
          ["catch"](function (b) {
            if (a !== k) return;
            c("recoverableViolation")(
              "Failed to load the VideoPlayerHTML5ApiCea608State module: " +
                b.message,
              "comet_video_player"
            );
          });
        return a;
      }
      b != null ? (j = l(b)) : d === !0 && (k = m());
      return {
        destroy: function () {
          f && (f.destroy(), (f = null)),
            g && (g.destroy(), (g = null)),
            j && (j = null),
            k && (k = null);
        },
        getCaptionFormat: function () {
          return f ? "webvtt" : g ? "cea608" : null;
        },
        handleCea608BytesReceived: function (a) {
          g && g.enqueueBytes(a);
        },
        handleTimeUpdate: function (a) {
          if (f) {
            var b;
            f.source && f.source.handleTimeUpdate(a);
            return (b =
              (b = f) == null ? void 0 : b.getCurrentScreenRepresentation()) !=
              null
              ? b
              : null;
          } else if (g) {
            g.source && g.source.handleTimeUpdate(a);
            return (a =
              (b = g) == null ? void 0 : b.getCurrentScreenRepresentation()) !=
              null
              ? a
              : null;
          }
          return null;
        },
        updateCaptionsUrl: function (a) {
          f && (f.destroy(), (f = null)), a != null && (j = l(a));
        },
        updateInbandCaptionsExpected: function (a) {
          g && (g.destroy(), (g = null)), a && (k = m());
        },
      };
    }
    g.createCaptionsController = a;
  },
  98
);
__d(
  "VideoPlayerImplementationReactVideoElement.react",
  ["gkx", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.alt,
        d = a.implementationExposedState,
        e = a.poster,
        f = a.seoWebCrawlerVideoTracks,
        g = a.src,
        i = a.videoElementCallbacks,
        j = a.videoElementPreloadDisabled,
        k = a.videoElementRefCallback;
      a = a.videoPixelsFit;
      var l = d.hasPlayEverBeenRequested;
      d = d.isExternalMedia;
      l = d && !l ? null : g;
      g =
        d && c("gkx")("2449")
          ? babelHelpers["extends"]({ crossOrigin: "anonymous" }, i)
          : babelHelpers["extends"]({}, i);
      return h.jsx(
        "video",
        babelHelpers["extends"](
          {
            "aria-label": (d = b) != null ? d : void 0,
            className: "x1lliihq x5yr21d xh8yej3",
            controls: !1,
            muted: !0,
            playsInline: !0,
            preload: j === !0 ? "none" : void 0,
          },
          g,
          {
            poster: e,
            ref: k,
            src: l,
            style: a ? { objectFit: a.objectFit } : void 0,
            children: f,
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
  "VideoPlayerEmsgForStateMachine",
  ["deepEquals"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a, b) {
      var c;
      return [a.type, a.emsgScheme, (c = a.emsgId) != null ? c : ""]
        .concat(
          b
            ? [
                (c = a.emsgStartTimeInSec) != null ? c : "",
                (b = a.emsgDurationInSec) != null ? b : "",
              ]
            : []
        )
        .join(":");
    }
    function i(a, b) {
      a.set(h(b, !0), b);
      return a;
    }
    function a(a, b) {
      return b.reduce(i, new Map(a));
    }
    function b(a, b, d) {
      a =
        b == null
          ? []
          : Array.from(a.values())
              .filter(function (a) {
                var c = a.emsgStartTimeInSec;
                a = a.emsgDurationInSec || 0;
                return c != null && b >= c && b < c + a;
              })
              .sort(function (a, b) {
                return (
                  (a.emsgStartTimeInSec || 0) - (b.emsgStartTimeInSec || 0)
                );
              });
      a = Array.from(
        a
          .reduce(function (a, b) {
            a.set(h(b, !1), b);
            return a;
          }, new Map())
          .values()
      );
      return c("deepEquals")(d, a) ? d : a;
    }
    g.makeEmsgBoxDedupKey = h;
    g.makeUpdatedAllEmsgBoxes = a;
    g.makeUpdatedActiveEmsgBoxes = b;
  },
  98
);
__d(
  "VideoPlayerImplementationErrorNormalization",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      var b = a.getType();
      switch (b) {
        case "OZ_NETWORK":
          b =
            (b = (b = a.getExtra()) == null ? void 0 : b.code) != null
              ? b
              : "0";
          b = parseInt(b, 10);
          return b < 100 || b > 599 ? "NetworkError" : "HTTPError";
        case "OZ_SOURCE_BUFFER_QUOTA_EXCEEDED":
          a = (b = a.getExtra()) == null ? void 0 : b.mimeType;
          if (a != null && a.indexOf("video") > -1) return "VideoDecodeError";
          else if (a != null && a.indexOf("audio") > -1)
            return "AudioDecodeError";
          else return "GenericDecodeError";
      }
      return null;
    }
    function b(a) {
      switch (a) {
        case "MEDIA_ERR_NETWORK":
          return "NetworkError";
        case "MEDIA_ERR_ABORTED":
        case "MEDIA_ERR_DECODE":
        case "MEDIA_ERR_SRC_NOT_SUPPORTED":
        case "MEDIA_ERR_UNKNOWN":
          return "GenericDecodeError";
        case "OZ_REPRESENTATION_PARSER":
        case "OZ_XML_PARSER":
          return "ManifestParseError";
        case "BUFFERING_TIMEOUT":
        case "OZ_DRM_MANAGER":
        case "OZ_INITIALIZATION":
        case "OZ_JAVASCRIPT_NATIVE":
        case "OZ_SOURCE_BUFFER":
        case "OZ_STREAM_APPEND_QUOTA_EXCEEDED_HANDLER_ERROR":
        case "OZ_NETWORK_REQUEST_STREAM_RETRY_HANDLER_ERROR":
          return "RuntimeError";
      }
      return null;
    }
    f.getVideoPlayerNormalizedErrorTypeFromOzError = a;
    f.getErrorTypeFromErrorName = b;
  },
  66
);
__d(
  "VideoPlayerImplementationErrors",
  [
    "NetworkStatus",
    "VideoPlayerImplementationErrorNormalization",
    "getErrorMessageFromMediaErrorCode",
    "getErrorNameFromMediaErrorCode",
    "gkx",
    "oz-player/utils/OzError",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = {
      BUFFERING_TIMEOUT_INPLAY: "30000",
      BUFFERING_TIMEOUT_INPLAY_NO_NETWORK: "30001",
      BUFFERING_TIMEOUT_LIVEREWIND_INPLAY: "30010",
      BUFFERING_TIMEOUT_LIVEREWIND_INPLAY_NO_NETWORK: "30011",
      BUFFERING_TIMEOUT_LIVEREWIND_START: "30012",
      BUFFERING_TIMEOUT_LIVEREWIND_START_NO_NETWORK: "30013",
      BUFFERING_TIMEOUT_START: "30002",
      BUFFERING_TIMEOUT_START_NO_NETWORK: "30003",
    };
    function a(a) {
      var b = a.errorLocation,
        d = a.hostCallError,
        e = a.videoElementError,
        f = a.videoElementNetworkState;
      a = a.videoElementReadyState;
      var g = e == null ? void 0 : e.code,
        h = d != null && typeof d.message === "string" ? d.message : null;
      h == null && (h = e == null ? void 0 : e.message);
      h == null && g != null && (h = c("getErrorMessageFromMediaErrorCode")(g));
      return {
        createdTimestamp: Date.now(),
        errorDescription:
          ((e = h) != null ? e : "Empty error") +
          ("; code: " + ((h = g) != null ? h : "undefined")) +
          ("; readyState: " + a) +
          ("; networkState: " + f),
        errorLocation: b,
        errorName: c("getErrorNameFromMediaErrorCode")(g),
        originalError: d,
      };
    }
    function b(a, b) {
      return a == null
        ? {
            createdTimestamp: Date.now(),
            errorDescription: "Empty rejection reason from video play()",
            errorLocation: b,
            errorName: "PlayRejectedError",
          }
        : {
            createdTimestamp: Date.now(),
            errorCode:
              typeof a.code === "string"
                ? a.code
                : typeof a.code === "number"
                ? String(a.code)
                : void 0,
            errorDescription:
              typeof a.message === "string" ? a.message : String(a),
            errorLocation: b,
            errorName:
              typeof a.name === "string" ? a.name : "PlayRejectedError",
          };
    }
    function e(a, b, d, e, f) {
      var g,
        i = (function () {
          if (f)
            if (e === "in_play" && c("NetworkStatus").isOnline())
              return h.BUFFERING_TIMEOUT_LIVEREWIND_INPLAY;
            else if (e === "in_play" && !c("NetworkStatus").isOnline())
              return h.BUFFERING_TIMEOUT_LIVEREWIND_INPLAY_NO_NETWORK;
            else if (e === "start/unpause" && c("NetworkStatus").isOnline())
              return h.BUFFERING_TIMEOUT_LIVEREWIND_START;
            else if (e === "start/unpause" && !c("NetworkStatus").isOnline())
              return h.BUFFERING_TIMEOUT_LIVEREWIND_START_NO_NETWORK;
            else return 0;
          else if (e === "in_play" && c("NetworkStatus").isOnline())
            return h.BUFFERING_TIMEOUT_INPLAY;
          else if (e === "in_play" && !c("NetworkStatus").isOnline())
            return h.BUFFERING_TIMEOUT_INPLAY_NO_NETWORK;
          else if (e === "start/unpause" && c("NetworkStatus").isOnline())
            return h.BUFFERING_TIMEOUT_START;
          else if (e === "start/unpause" && !c("NetworkStatus").isOnline())
            return h.BUFFERING_TIMEOUT_START_NO_NETWORK;
          else return 0;
        })();
      g = {
        message: String((g = b == null ? void 0 : b.message) != null ? g : ""),
        name: String(
          (g = b == null ? void 0 : b.name) != null ? g : "UnknownError"
        ),
        stack: String((b == null ? void 0 : b.stack) || new Error().stack),
      };
      return {
        createdTimestamp: Date.now(),
        errorCode: String(i),
        errorDescription: g.name + " " + g.message,
        errorLocation: d,
        errorName: a,
        stack: g.stack,
        url: null,
      };
    }
    function i(a, b, d, e) {
      var f;
      e === void 0 && (e = null);
      f = {
        message: String((f = b == null ? void 0 : b.message) != null ? f : ""),
        name: String(
          (f = b == null ? void 0 : b.name) != null ? f : "UnknownError"
        ),
        stack: String((b == null ? void 0 : b.stack) || new Error().stack),
      };
      return {
        createdTimestamp: Date.now(),
        errorCode: null,
        errorDescription: f.name + " " + f.message,
        errorLocation: d,
        errorName: a,
        stack: f.stack,
        url: e != null && c("gkx")("1526990") ? e : null,
      };
    }
    function f(a, b) {
      if (a instanceof c("oz-player/utils/OzError")) {
        var e = a,
          f = e.getExtra();
        return {
          createdTimestamp: Date.now(),
          errorCode: f.code,
          errorDescription: e.getDescription(),
          errorLocation: b,
          errorName: e.getType(),
          errorType: d(
            "VideoPlayerImplementationErrorNormalization"
          ).getVideoPlayerNormalizedErrorTypeFromOzError(e),
          stack: e.stack,
          url: f.url,
        };
      } else return i("OZ_JAVASCRIPT_NATIVE", a, b);
    }
    function j(a, b) {
      a = a.message;
      var c = "The video node set its error property to a MediaError",
        d = a.split(": ");
      d.length > 1 && ((a = d.shift()), (c = d.join(": ")));
      return {
        createdTimestamp: Date.now(),
        errorDescription: c,
        errorLocation: b,
        errorName: a,
        errorType: "GenericDecodeError",
      };
    }
    g.createVideoPlayerErrorFromHTMLVideoElementError = a;
    g.createVideoPlayerErrorFromVideoElementPlayPromiseRejectionReason = b;
    g.createVideoPlayerBufferingErrorFromGenericError = e;
    g.createVideoPlayerErrorFromGenericError = i;
    g.createVideoPlayerErrorFromOzImplementationError = f;
    g.createVideoPlayerErrorFromVideoNodeError = j;
  },
  98
);
__d(
  "VideoPlayerODS",
  ["ODS", "Random"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = function (a, b, c) {
      d("Random").coinflip(c) && d("ODS").bumpEntityKey(2079, a, b, c);
    };
    g.bumpEntityKey = a;
  },
  98
);
__d(
  "VideoPlayerImplementationStateMachine",
  [
    "VideoPlayerEmsgForStateMachine",
    "VideoPlayerImplementationErrors",
    "VideoPlayerODS",
    "gkx",
    "recoverableViolation",
    "shallowEqual",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      var b = a.bufferingDetected,
        c = a.seeking;
      a = a.waitingForDomPlaying;
      return !b && !c && !a;
    }
    function i(a) {
      var b = a.bufferingDetected,
        d = a.prevPlaybackState,
        e = a.seeking;
      a = a.waitingForDomPlaying;
      b = h({ bufferingDetected: b, seeking: e, waitingForDomPlaying: a });
      e = d;
      switch (d) {
        case "stalling":
          e = b ? "playing" : "stalling";
          break;
        case "ended":
        case "paused":
        case "playing":
          break;
        default:
          d;
          c("recoverableViolation")(
            "unexpected playbackState: " + d,
            "comet_video_player"
          );
          break;
      }
      return e;
    }
    function j(a) {
      return (
        (a.loopCount > 0 && a.loopCurrent < a.loopCount) || a.loopCount === -1
      );
    }
    function k(a, b, e) {
      switch (e.type) {
        case "host_call_pause":
        case "host_call_play":
        case "host_call_set_current_time":
        case "host_call_set_volume":
        case "host_call_set_muted":
        case "host_call_set_playback_rate":
        case "host_call_set_video_quality":
        case "host_call_set_latency_level":
          return babelHelpers["extends"]({}, a, {
            hostCallQueue: a.hostCallQueue.concat([e]),
          });
        case "controller_set_latency_level_requested":
        case "implementation_set_latency_level_requested":
          return babelHelpers["extends"]({}, a, {
            latencyLevel: e.payload.latencyLevel,
            ullIneligibilityReason: e.payload.ullIneligibilityReason,
          });
        case "controller_override_player_format":
          return babelHelpers["extends"]({}, a, {
            overriddenPlayerFormat: a.playerFormat,
            playerFormat: e.payload.playerFormat,
          });
        case "controller_set_player_format":
          return babelHelpers["extends"]({}, a, {
            playerFormat: e.payload.playerFormat,
          });
        case "dom_event_ended":
          return babelHelpers["extends"]({}, a, {
            playbackState: "ended",
            waitingForDomPlaying: !1,
          });
        case "dom_event_pause":
          if (a.playbackState === "ended") return a;
          if (b.videoElementEnded === !0)
            return babelHelpers["extends"]({}, a, {
              playbackState: "ended",
              waitingForDomPlaying: !1,
            });
          return a.playbackState === "paused"
            ? a
            : babelHelpers["extends"]({}, a, {
                playbackState: "paused",
                waitingForDomPlaying: !1,
              });
        case "dom_event_play":
          var f = a.playbackState,
            g = f;
          switch (f) {
            case "playing":
            case "stalling":
            case "ended":
            case "paused":
              g = "stalling";
              break;
            default:
              f;
              c("recoverableViolation")(
                "unexpected playbackState: " + f,
                "comet_video_player"
              );
              break;
          }
          f = !0;
          return babelHelpers["extends"]({}, a, {
            playbackState: g,
            waitingForDomPlaying: f,
          });
        case "dom_event_playing":
          g = a.bufferingDetected;
          f = a.seeking;
          var h = !1,
            k = a.playbackState;
          return babelHelpers["extends"]({}, a, {
            playbackState: i({
              bufferingDetected: g,
              prevPlaybackState: k,
              seeking: f,
              waitingForDomPlaying: h,
            }),
            waitingForDomPlaying: h,
          });
        case "dom_event_timeupdate":
          g = d("VideoPlayerEmsgForStateMachine").makeUpdatedActiveEmsgBoxes(
            a.allEmsgBoxes,
            b.videoElementPlayheadPosition,
            a.activeEmsgBoxes
          );
          if (a.waitingForDomTimeUpdateAfterSeeked) {
            k = a.bufferingDetected;
            f = a.seeking;
            h = !1;
            var l = a.playbackState;
            return babelHelpers["extends"]({}, a, {
              activeEmsgBoxes: g,
              playbackState: i({
                bufferingDetected: k,
                prevPlaybackState: l,
                seeking: f,
                waitingForDomPlaying: h,
              }),
              waitingForDomPlaying: h,
              waitingForDomTimeUpdateAfterSeeked: !1,
            });
          }
          return babelHelpers["extends"]({}, a, { activeEmsgBoxes: g });
        case "dom_event_seeking":
          k = a.playbackState;
          l = k;
          switch (k) {
            case "paused":
            case "ended":
              break;
            case "stalling":
            case "playing":
              l = "stalling";
              break;
            default:
              k,
                c("recoverableViolation")(
                  "unexpected playbackState: " + k,
                  "comet_video_player"
                );
          }
          return babelHelpers["extends"]({}, a, {
            playbackState: l,
            seeking: !0,
            waitingForDomPlaying: !0,
          });
        case "dom_event_seeked":
          f = a.bufferingDetected;
          h = a.waitingForDomPlaying;
          g = !1;
          k = a.playbackState;
          return babelHelpers["extends"]({}, a, {
            implementationSeekSourcePosition: null,
            playbackState: i({
              bufferingDetected: f,
              prevPlaybackState: k,
              seeking: g,
              waitingForDomPlaying: h,
            }),
            seeking: g,
            waitingForDomTimeUpdateAfterSeeked: !0,
          });
        case "dom_event_error":
          e.payload.videoElementError == null &&
            d("VideoPlayerODS").bumpEntityKey(
              "comet_video_player",
              "dom_event_error.error_is_nullish",
              14
            );
          return babelHelpers["extends"]({}, a, {
            playbackState: "paused",
            waitingForDomPlaying: !1,
          });
        case "dom_event_play_promise_created":
          return babelHelpers["extends"]({}, a, {
            hostCallPlayIDLast: e.payload.hostCallPlayID,
          });
        case "dom_event_play_promise_resolved":
          return a.hostCallPlayIDLast !== e.payload.hostCallPlayID
            ? a
            : babelHelpers["extends"]({}, a, { hostCallPlayIDLast: null });
        case "dom_event_play_promise_rejected":
          return a.hostCallPlayIDLast !== e.payload.hostCallPlayID
            ? a
            : babelHelpers["extends"]({}, a, {
                hostCallPlayIDLast: null,
                playbackState:
                  a.playbackState === "stalling" ? "paused" : a.playbackState,
                waitingForDomPlaying: !1,
              });
        case "implementation_host_call_queue_flushed":
          return babelHelpers["extends"]({}, a, { hostCallQueue: [] });
        case "implementation_host_call_failed":
          l = d(
            "VideoPlayerImplementationErrors"
          ).createVideoPlayerErrorFromHTMLVideoElementError({
            errorLocation: e.payload.errorLocation,
            hostCallError: e.payload.hostCallError,
            videoElementError: e.payload.videoElementError,
            videoElementNetworkState: e.payload.videoElementNetworkState,
            videoElementReadyState: e.payload.videoElementReadyState,
          });
          return babelHelpers["extends"]({}, a, {
            error: l,
            playbackState: "paused",
            waitingForDomPlaying: !1,
          });
        case "implementation_mounted":
          return babelHelpers["extends"]({}, a, {
            mountState: "mounted_onscreen",
          });
        case "implementation_unmounted":
          return babelHelpers["extends"]({}, a, { mountState: "unmounted" });
        case "implementation_onscreen":
          return babelHelpers["extends"]({}, a, {
            mountState: "mounted_onscreen",
          });
        case "implementation_offscreen":
          return babelHelpers["extends"]({}, a, {
            mountState: "mounted_offscreen",
          });
        case "implementation_video_node_unmounted":
          return babelHelpers["extends"]({}, a, { hostCallPlayIDLast: null });
        case "implementation_engine_initialized":
          k = (f = e.payload.streamingFormat) != null ? f : a.streamingFormat;
          return babelHelpers["extends"]({}, a, {
            availableAudioTracks: e.payload.availableAudioTracks,
            availableQualities: e.payload.availableQualities,
            selectedAudioTrackID: e.payload.selectedAudioTrackID,
            selectedVideoQuality: e.payload.selectedVideoQuality,
            streamingFormat: k,
            targetVideoQuality: e.payload.targetVideoQuality,
            videoProjection: e.payload.videoProjection,
          });
        case "implementation_engine_representation_blocked":
          return babelHelpers["extends"]({}, a, {
            availableQualities: e.payload.availableQualities,
          });
        case "implementation_engine_destroyed":
          return babelHelpers["extends"]({}, a, { hostCallPlayIDLast: null });
        case "implementation_fatal_error":
          return babelHelpers["extends"]({}, a, {
            error: e.payload.fatalError,
            hostCallPlayIDLast: null,
            playbackState: "paused",
            waitingForDomPlaying: !1,
          });
        case "implementation_seek_requested":
          return babelHelpers["extends"]({}, a, {
            implementationSeekSourcePosition: e.payload.seekSourcePosition,
          });
        case "representation_changed":
          return babelHelpers["extends"]({}, a, {
            targetVideoQuality: e.payload.targetVideoQuality,
          });
        case "controller_pause_requested":
          return a.playbackState === "ended"
            ? a
            : babelHelpers["extends"]({}, a, {
                lastPausedTimeMs: Date.now(),
                lastPauseReason: e.payload.reason,
                lastPlayedTimeMs: 0,
                playbackState: "paused",
                waitingForDomPlaying: !1,
                watchTimeMs:
                  a.lastPlayedTimeMs > 0
                    ? a.watchTimeMs + (Date.now() - a.lastPlayedTimeMs)
                    : a.watchTimeMs,
              });
        case "controller_play_requested":
          return a.playbackState !== "paused" && a.playbackState !== "ended"
            ? a
            : babelHelpers["extends"]({}, a, {
                hasPlayEverBeenRequested: !0,
                lastPlayedTimeMs:
                  a.lastPlayedTimeMs === 0 ? Date.now() : a.lastPlayedTimeMs,
                lastPlayReason: e.payload.reason,
                loopCurrent: j(a)
                  ? e.payload.reason === "loop_initiated"
                    ? a.loopCurrent + 1
                    : a.loopCurrent
                  : 0,
                playbackState: "stalling",
                waitingForDomPlaying: !0,
              });
        case "controller_seek_requested":
          return babelHelpers["extends"]({}, a, {
            implementationSeekSourcePosition:
              (h = b.videoElementPlayheadPosition) != null
                ? h
                : a.implementationSeekSourcePosition,
            seeking: !0,
            seekTargetPosition: e.payload.seekTargetPosition,
          });
        case "controller_audio_track_requested":
          return babelHelpers["extends"]({}, a, {
            selectedAudioTrackID: e.payload.selectedAudioTrackID,
          });
        case "controller_quality_requested":
          return babelHelpers["extends"]({}, a, {
            selectedVideoQuality: e.payload.selectedVideoQuality,
          });
        case "controller_set_caption_display_style_requested":
          return babelHelpers["extends"]({}, a, {
            captionDisplayStyle: e.payload.captionDisplayStyle,
          });
        case "controller_set_picture_in_picture_state_requested":
          return babelHelpers["extends"]({}, a, {
            isDesktopPictureInPicture: e.payload.isInPictureInPictureMode,
          });
        case "controller_set_caption_format_requested":
          return babelHelpers["extends"]({}, a, {
            captionFormat: e.payload.captionFormat,
          });
        case "controller_set_playback_rate":
          return babelHelpers["extends"]({}, a, {
            targetPlaybackRate: e.payload.playbackRate,
          });
        case "controller_muted_requested":
          return babelHelpers["extends"]({}, a, {
            lastMuteReason: e.payload.reason,
            muted: e.payload.muted,
          });
        case "controller_volume_requested":
          return babelHelpers["extends"]({}, a, { volume: e.payload.volume });
        case "controller_scrub_begin_requested":
          return a.scrubbing
            ? a
            : babelHelpers["extends"]({}, a, {
                scrubbing: !0,
                seekTargetPosition: null,
              });
        case "controller_scrub_end_requested":
          return !a.scrubbing
            ? a
            : babelHelpers["extends"]({}, a, {
                implementationSeekSourcePosition:
                  (g = b.videoElementPlayheadPosition) != null
                    ? g
                    : a.implementationSeekSourcePosition,
                scrubbing: !1,
                seeking: e.payload.seekTargetPosition != null,
                seekTargetPosition: e.payload.seekTargetPosition,
              });
        case "buffering_begin_requested":
          l = a.playbackState;
          f = l;
          switch (l) {
            case "paused":
            case "ended":
              break;
            case "playing":
            case "stalling":
              f = "stalling";
              break;
            default:
              l;
              c("recoverableViolation")(
                "unexpected playbackState: " + l,
                "comet_video_player"
              );
              break;
          }
          k = e.payload.bufferingType;
          return babelHelpers["extends"]({}, a, {
            bufferingDetected: !0,
            lastBufferingType: k,
            playbackState: f,
          });
        case "buffering_end_requested":
          h = a.seeking;
          g = a.waitingForDomPlaying;
          l = !1;
          k = a.playbackState;
          return babelHelpers["extends"]({}, a, {
            bufferingDetected: l,
            playbackState: i({
              bufferingDetected: l,
              prevPlaybackState: k,
              seeking: h,
              waitingForDomPlaying: g,
            }),
          });
        case "controller_set_captions_visible_requested":
          f = e.payload.captionsVisible;
          return a.captionsVisible === f
            ? a
            : babelHelpers["extends"]({}, a, {
                activeCaptions: f ? a.activeCaptions : null,
                captionsLocale: f ? a.captionsLocale : null,
                captionsVisible: f,
              });
        case "controller_set_active_captions_requested":
          l = e.payload.activeCaptions;
          h = (k = l == null ? void 0 : l.rows) != null ? k : [];
          g = e.payload.captionsLocale;
          f = a.activeCaptions;
          var m = (k = f == null ? void 0 : f.rows) != null ? k : [];
          return m.length === h.length &&
            h.every(function (a, b) {
              return m[b] === a;
            })
            ? a
            : babelHelpers["extends"]({}, a, {
                activeCaptions: l,
                captionsLocale: g,
              });
        case "captions_loaded":
          return babelHelpers["extends"]({}, a, {
            activeCaptions: a.activeCaptions,
            captionsLoaded: !0,
          });
        case "captions_unloaded":
          return babelHelpers["extends"]({}, a, {
            activeCaptions: null,
            captionsLoaded: !1,
            captionsLocale: null,
          });
        case "inband_captions_autogenerated_changed":
          f = e.payload.inbandCaptionsAutogenerated;
          return a.inbandCaptionsAutogenerated === f
            ? a
            : babelHelpers["extends"]({}, a, {
                inbandCaptionsAutogenerated: f,
              });
        case "stream_ended":
          return babelHelpers["extends"]({}, a, { streamEnded: !0 });
        case "stream_gone_before_start":
          return babelHelpers["extends"]({}, a, {
            playbackState: "ended",
            streamEnded: !0,
            waitingForDomPlaying: !1,
          });
        case "stream_interrupted":
          return babelHelpers["extends"]({}, a, { streamInterrupted: !0 });
        case "stream_resumed":
          return babelHelpers["extends"]({}, a, { streamInterrupted: !1 });
        case "seekable_ranges_changed":
          k = e.payload.seekableRanges;
          return babelHelpers["extends"]({}, a, { seekableRanges: k });
        case "controller_set_is_live_rewind_active_requested":
          h = e.payload.isLiveRewindActive;
          return babelHelpers["extends"]({}, a, { isLiveRewindActive: h });
        case "loop_count_change_requested":
          l = e.payload.loopCount;
          return l === a.loopCount
            ? a
            : babelHelpers["extends"]({}, a, { loopCount: l, loopCurrent: 0 });
        case "player_dimensions_changed":
          g = e.payload.dimensions;
          f = g.height;
          k = g.width;
          return k === a.dimensions.width && f === a.dimensions.height
            ? a
            : babelHelpers["extends"]({}, a, {
                dimensions: { height: f, width: k },
              });
        case "emsg_boxes_parsed":
          h = d("VideoPlayerEmsgForStateMachine").makeUpdatedAllEmsgBoxes(
            a.allEmsgBoxes,
            e.payload.emsgBoxes
          );
          l = d("VideoPlayerEmsgForStateMachine").makeUpdatedActiveEmsgBoxes(
            h,
            b.videoElementPlayheadPosition,
            a.activeEmsgBoxes
          );
          return babelHelpers["extends"]({}, a, {
            activeEmsgBoxes: l,
            allEmsgBoxes: h,
          });
        case "register_emsg_observer":
          g = new Set(a.emsgObserverTokens);
          g.add(e.payload.token);
          return babelHelpers["extends"]({}, a, { emsgObserverTokens: g });
        case "unregister_emsg_observer":
          f = new Set(a.emsgObserverTokens);
          f["delete"](e.payload.token);
          return babelHelpers["extends"]({}, a, { emsgObserverTokens: f });
        default:
          return a;
      }
    }
    function l(a, b, d) {
      var e = b.type !== "dom_seeking";
      e = e ? d : a.uncontrolledState;
      d = !c("shallowEqual")(e, a.uncontrolledState);
      b = k(a.controlledState, e, b);
      var f = !c("shallowEqual")(b, a.controlledState);
      return d || f
        ? babelHelpers["extends"]({}, a, {
            controlledState: f ? b : a.controlledState,
            uncontrolledState: d ? e : a.uncontrolledState,
          })
        : a;
    }
    var m, n;
    function o(a) {
      var b = a.collectUncontrolledState,
        d = a.debugLogId;
      d = a.initialState;
      var e = a.onDispatched,
        f = a.onFatalError,
        g = d,
        h = g,
        i = 0,
        j = !1,
        k = !1,
        m = !0,
        n = !0;
      return {
        dispatch: function (a) {
          if (!n) return;
          var d = null,
            g = null;
          try {
            ++i;
            if (i >= 10)
              if (!j) {
                j = !0;
                throw c("unrecoverableViolation")(
                  "Video player state machine loop detected",
                  "comet_video_player"
                );
              } else return;
            var o = h.uncontrolledState;
            if (m)
              try {
                o = b();
              } catch (a) {
                (m = !1), (g = a);
              }
            var p = h;
            o = l(p, a, o);
            h = o;
            e(p, o, a);
          } catch (a) {
            (n = !1), (d = a);
          } finally {
            if (!k && (d != null || g != null)) {
              k = !0;
              try {
                f((p = d) != null ? p : g);
              } catch (a) {}
            }
            --i;
          }
        },
        getCurrentState: function () {
          return h;
        },
        getInitialState: function () {
          return g;
        },
      };
    }
    var p, q;
    function a(a) {
      var b = a.collectUncontrolledState,
        c = a.debugLogId,
        d = a.initialState,
        e = a.onFatalError,
        f = a.stateTransitionHandlers;
      function g(a, b, c) {
        try {
          var d = !0,
            e = 0;
          while (d && e < f.length) {
            var g = f[e];
            d = g(a, b, c);
            ++e;
          }
        } finally {
        }
      }
      return o({
        collectUncontrolledState: b,
        debugLogId: c,
        initialState: d,
        onDispatched: g,
        onFatalError: e,
      });
    }
    function b(a, b) {
      function c() {}
      function d(a) {
        return a;
      }
      function e(c) {
        return function (e) {
          var f = d(e.currentTarget);
          b(f, ["reactEvent(" + e.type + ")"]);
          a.dispatch(c);
        };
      }
      function f(c) {
        return function (e) {
          var f = d(e.currentTarget);
          b(f, ["reactEvent(" + e.type + ")"]);
          a.dispatch(c(e, f));
        };
      }
      return {
        onAbort: c,
        onCanPlay: c,
        onCanPlayThrough: c,
        onDurationChange: e({ type: "dom_event_durationchange" }),
        onEmptied: c,
        onEncrypted: c,
        onEnded: e({ type: "dom_event_ended" }),
        onError: f(function (a, b) {
          return {
            payload: {
              videoElementError: b.error,
              videoElementNetworkState: b.networkState,
              videoElementReadyState: b.readyState,
            },
            type: "dom_event_error",
          };
        }),
        onLoadedData: c,
        onLoadedMetadata: c,
        onLoadStart: c,
        onPause: e({ type: "dom_event_pause" }),
        onPlay: e({ type: "dom_event_play" }),
        onPlaying: f(function (a) {
          return {
            payload: { domEventPerfTimestamp: a.timeStamp },
            type: "dom_event_playing",
          };
        }),
        onProgress: e({ type: "dom_event_progress" }),
        onRateChange: e({ type: "dom_event_ratechange" }),
        onSeeked: e({ type: "dom_event_seeked" }),
        onSeeking: e({ type: "dom_event_seeking" }),
        onStalled: c,
        onSuspend: c,
        onTimeUpdate: e({ type: "dom_event_timeupdate" }),
        onVolumeChange: e({ type: "dom_event_volumechange" }),
        onWaiting: e({ type: "dom_event_waiting" }),
      };
    }
    g.createVideoPlayerImplementationStateMachine = o;
    g.createVideoPlayerImplementationStateMachineWithStateTransitionHandlers =
      a;
    g.createReactVideoElementCallbacksForStateMachine = b;
  },
  98
);
__d(
  "VideoPlayerImplementationStateMachineHostCallQueue",
  ["cometUniqueID", "emptyFunction", "gkx", "promiseDone"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = c("emptyFunction");
    function h() {
      return "id-vpdom-" + c("cometUniqueID")();
    }
    function i(a) {
      var b = a.engineExtrasAPI,
        d = a.hostCall,
        e = a.machine;
      a = a.videoElementAPI;
      switch (d.type) {
        case "host_call_play":
          var f = a.play();
          f &&
            (e.dispatch({
              payload: { hostCallPlayID: d.payload.hostCallID },
              type: "dom_event_play_promise_created",
            }),
            c("promiseDone")(
              f.then(
                function () {
                  e.dispatch({
                    payload: { hostCallPlayID: d.payload.hostCallID },
                    type: "dom_event_play_promise_resolved",
                  });
                },
                function (a) {
                  e.dispatch({
                    payload: {
                      hostCallPlayID: d.payload.hostCallID,
                      playPromiseRejectionReason: a,
                    },
                    type: "dom_event_play_promise_rejected",
                  });
                }
              )
            ));
          break;
        case "host_call_pause":
          a.pause();
          break;
        case "host_call_set_playback_rate":
          a.setPlaybackRate(d.payload.playbackRate);
          break;
        case "host_call_set_muted":
          a.setMuted(d.payload.muted);
          break;
        case "host_call_set_volume":
          a.setVolume(d.payload.volume);
          break;
        case "host_call_set_current_time":
          a.setPlayheadPosition(d.payload.currentTime);
          break;
        case "host_call_set_audio_track":
          b.setUserSelectedAudioTrackID(d.payload.selectedAudioTrackID);
          break;
        case "host_call_set_video_quality":
          b.setUserSelectedVideoQuality(d.payload.selectedVideoQuality);
          break;
        case "host_call_set_latency_level":
          b.setLatencyLevel(d.payload.latencyLevel);
          break;
        case "host_call_picture_in_picture":
          a.requestPictureInPicture();
          break;
        case "host_call_exit_picture_in_picture":
          a.exitPictureInPicture();
          break;
        default:
          d.type;
          return !1;
      }
      return !0;
    }
    function j(a) {
      var b = a.engineExtrasAPI,
        c = a.hostCall,
        d = a.machine;
      a = a.videoElementAPI;
      if (!a || !b) d.dispatch(c);
      else {
        var e = !1;
        try {
          e = i({
            engineExtrasAPI: b,
            hostCall: c,
            machine: d,
            videoElementAPI: a,
          });
        } catch (b) {
          d.dispatch({
            payload: {
              errorLocation: "apply_host_call_catch",
              hostCall: c,
              hostCallError: b,
              videoElementError: a.getError(),
              videoElementNetworkState: a.getNetworkState(),
              videoElementReadyState: a.getReadyState(),
            },
            type: "implementation_host_call_failed",
          });
        }
        e &&
          d.dispatch({
            payload: { hostCall: c },
            type: "implementation_host_call_applied",
          });
      }
    }
    function k(a) {
      var b = [];
      function c() {
        b = b.filter(function (a) {
          return a.type !== "host_call_play" && a.type !== "host_call_pause";
        });
      }
      function d(a) {
        b = b.filter(function (b) {
          return b.type !== a;
        });
      }
      a.forEach(function (a) {
        switch (a.type) {
          case "host_call_play":
            c();
            break;
          case "host_call_pause":
            c();
            break;
          case "host_call_set_playback_rate":
            d(a.type);
            break;
          case "host_call_set_muted":
            d(a.type);
            break;
          case "host_call_set_volume":
            d(a.type);
            break;
          case "host_call_set_current_time":
            d(a.type);
            break;
          case "host_call_set_audio_track":
            d(a.type);
            break;
          case "host_call_set_video_quality":
            d(a.type);
            break;
          case "host_call_set_latency_level":
            d(a.type);
            break;
          case "host_call_picture_in_picture":
            d(a.type);
            break;
          case "host_call_exit_picture_in_picture":
            d(a.type);
            break;
          default:
            a.type;
        }
        b = b.concat([a]);
      });
      return b;
    }
    function a(a) {
      var b = a.engineExtrasAPI,
        c = a.machine,
        d = a.reason,
        e = a.state,
        f = a.videoElementAPI;
      a = [
        {
          payload: {
            hostCallID: h(),
            reason: d,
            volume: e.controlledState.volume,
          },
          type: "host_call_set_volume",
        },
        {
          payload: {
            hostCallID: h(),
            muted: e.controlledState.muted,
            reason: d,
          },
          type: "host_call_set_muted",
        },
        {
          payload: {
            hostCallID: h(),
            reason: d,
            selectedVideoQuality: e.controlledState.selectedVideoQuality,
          },
          type: "host_call_set_video_quality",
        },
        {
          payload: {
            hostCallID: h(),
            reason: d,
            selectedAudioTrackID: e.controlledState.selectedAudioTrackID,
          },
          type: "host_call_set_audio_track",
        },
      ];
      d = k(e.controlledState.hostCallQueue.concat(a));
      d.forEach(function (a) {
        j({ engineExtrasAPI: b, hostCall: a, machine: c, videoElementAPI: f });
      });
      c.dispatch({
        payload: { hostCallsFlushed: d },
        type: "implementation_host_call_queue_flushed",
      });
    }
    g.makeHostCallID = h;
    g.applyOrQueueHostCall = j;
    g.flushHostCallQueue = a;
  },
  98
);
__d(
  "VideoPlayerMutedStateChange",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      var b = a.currMuted,
        c = a.currVolume,
        d = a.prevMuted;
      a = a.prevVolume;
      b = b || c === 0;
      c = d || a === 0;
      if (c === b) return null;
      return b ? "muted" : "unmuted";
    }
    f.getVideoPlayerMutedStateChange = a;
  },
  66
);
__d(
  "VideoPlayerImplementationStateMachineLogger",
  [
    "CometProductAttribution",
    "NetworkStatus",
    "PlaybackSpeedExperiments",
    "SiteData",
    "VideoMimeTypes",
    "VideoPlayerConnectionQuality",
    "VideoPlayerImplementationErrorNormalization",
    "VideoPlayerLoggerPlayerStates",
    "VideoPlayerMutedStateChange",
    "VideoPlayerStateBasedLoggingEvents",
    "emptyFunction",
    "getPlayerFormatForLogData",
    "getVideoBrowserTabId",
    "gkx",
    "mapObject",
    "performanceAbsoluteNow",
    "qex",
    "recoverableViolation",
    "removeFromArray",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 6e4,
      i = 0.5,
      j = (b = c("qex")._("1675")) != null ? b : 0,
      k = 1e3,
      l = null,
      m = function (a) {
        var b;
        l = (b = l) != null ? b : document.createElement("video");
        return !("canPlayType" in l) ? "" : l.canPlayType(a);
      };
    e = c("emptyFunction");
    f = c("emptyFunction");
    b = c("emptyFunction");
    e = c("emptyFunction");
    var n =
      (f = d("PlaybackSpeedExperiments").enablePlaybackSpeedLogging()) != null
        ? f
        : !1;
    function o() {
      return {
        canLogPausedOrFinishedPlaying: !1,
        canLogPlayingEvent: !0,
        debugSubscribers: [],
        dontLogPauseOnUnpausedSeeking: !1,
        errorRecoveryAttemptState: {
          currentRecoverableError: null,
          eventsLogged: 0,
          repeatCount: 0,
        },
        hasLoggedStallData: !1,
        hasLoggedStartedPlaying: !1,
        hasPausedOnce: !1,
        hasPendingRequestedPlaying: !1,
        initialSuborigin: void 0,
        inPlayStallCount200ms: 0,
        interruptCount: 0,
        interruptDuration: 0,
        interruptEndTimestamp: 0,
        interruptStartTimestamp: 0,
        isLoggingScrubbingSequence: !1,
        lastLoggedError: null,
        lastLoggedFullscreenState: !1,
        lastLoggedPlaybackSpeed: null,
        lastLoggedViewabilityPercentage: void 0,
        lastStartTimePosition: null,
        lastTrackedRepresentation: null,
        nextHeartbeatTime: null,
        nextPlayedThreeSecondsPlayheadPosition: null,
        sequenceNumber: 0,
        shouldIgnoreDomPause: !1,
        shouldIgnoreDomPlay: !1,
        shouldLogRequestedPlayingForScrub: !1,
        stallCount: 0,
        stallCount200ms: 0,
        stallCountTotal: 0,
        stallDuration: 0,
        stallDurationTotal: 0,
        stallStartTimestamp: 0,
        startStallCountTotal: 0,
        startStallDurationTotal: 0,
        vplEventSequenceNumber: 0,
      };
    }
    function p(a, b) {
      return b === "muted" ||
        b === "unmuted" ||
        b === "started_playing" ||
        b === "caption_change" ||
        b === "unpaused"
        ? a.controlledState.captionsVisible
          ? "on"
          : "off"
        : void 0;
    }
    function a(a) {
      var b = new Map(),
        e = a.initialLoggingMetaData,
        f = e,
        g = [],
        l = o(),
        q = new Set(
          c("VideoPlayerStateBasedLoggingEvents").StateBasedLoggingEventNames
        );
      function r(a) {
        l.debugSubscribers.push(a);
        return function () {
          c("removeFromArray")(l.debugSubscribers, a);
        };
      }
      function s(a) {
        l.debugSubscribers.forEach(function (b) {
          return b(a);
        });
      }
      function t(a) {
        var b = l.stallStartTimestamp;
        if (b > 0) {
          l.stallCount += 1;
          l.stallCountTotal += 1;
          l.hasPendingRequestedPlaying && (l.startStallCountTotal += 1);
          a = a - b;
          b = a > 200;
          l.stallDurationTotal += a;
          l.stallDuration += a;
          l.stallCount200ms += b ? 1 : 0;
          l.inPlayStallCount200ms += b && !l.hasPendingRequestedPlaying ? 1 : 0;
          l.hasPendingRequestedPlaying && (l.startStallDurationTotal += a);
        }
      }
      function u(a, b) {
        a =
          a.uncontrolledState.videoElementPlayheadPosition == null
            ? null
            : a.uncontrolledState.videoElementPlayheadPosition;
        var c = null;
        switch (b) {
          case "paused":
          case "cancelled_requested_playing":
          case "finished_playing":
          case "heart_beat":
          case "playback_speed_changed":
          case "representation_ended":
            c = l.lastStartTimePosition;
            break;
          case "scrubbed":
            c = a;
            break;
          default:
            break;
        }
        switch (b) {
          case "paused":
          case "cancelled_requested_playing":
          case "finished_playing":
          case "scrubbed":
            l.lastStartTimePosition = null;
            break;
          case "started_playing":
          case "unpaused":
          case "heart_beat":
          case "playback_speed_changed":
          case "representation_ended":
            l.lastStartTimePosition = a;
            break;
          default:
            break;
        }
        return { video_last_start_time_position: c };
      }
      function v(a, b) {
        var c = b.uncontrolledState.clockTimestamp;
        a = a.controlledState.streamInterrupted;
        b = b.controlledState.streamInterrupted;
        !a && b
          ? (l.interruptStartTimestamp = c)
          : a &&
            !b &&
            l.interruptStartTimestamp > 0 &&
            ((l.interruptEndTimestamp = c),
            (l.interruptCount += 1),
            (l.interruptDuration +=
              l.interruptEndTimestamp - l.interruptStartTimestamp));
      }
      function w(a, b, c) {
        var d = b.uncontrolledState.clockTimestamp;
        a = a.controlledState.playbackState;
        var e = b.controlledState.playbackState;
        a !== "stalling" &&
          e === "stalling" &&
          (s("stall_start"), (l.stallStartTimestamp = d));
        if (a === "stalling" && e !== "stalling") {
          d = 0;
          (c.type === "dom_event_playing" ||
            c.type === "buffering_end_requested") &&
            c.payload.domEventPerfTimestamp != null &&
            (d = Math.max(
              b.uncontrolledState.perfTimestamp -
                c.payload.domEventPerfTimestamp,
              0
            ));
          t(b.uncontrolledState.clockTimestamp - d);
          l.stallStartTimestamp = 0;
          s("stall_end");
        }
      }
      function x(a, b, c) {
        a = b.uncontrolledState;
        b = a.videoElementPlayheadPosition;
        switch (c) {
          case "unpaused":
          case "started_playing":
            l.nextPlayedThreeSecondsPlayheadPosition =
              ((a = b) != null ? a : 0) + 3;
            break;
          case "paused":
          case "finished_playing":
            l.nextPlayedThreeSecondsPlayheadPosition = null;
            break;
          default:
            break;
        }
      }
      function y(a, b, c) {
        if (l.interruptCount > 0 && l.interruptDuration > 0) {
          a = {
            interrupt_count: l.interruptCount,
            interrupt_time: l.interruptDuration,
          };
          l.interruptCount = 0;
          l.interruptDuration = 0;
          l.interruptStartTimestamp = 0;
          l.interruptEndTimestamp = 0;
          return a;
        }
        return { interrupt_count: null, interrupt_time: null };
      }
      function z(a, b, c) {
        var d = {
            stall_count: null,
            stall_count_200_ms: null,
            stall_time: null,
          },
          e = b.uncontrolledState.clockTimestamp,
          f = function () {
            var a = {
              stall_count: l.stallCount,
              stall_count_200_ms: l.stallCount200ms,
              stall_time: l.stallDuration,
            };
            l.stallCount = 0;
            l.stallCount200ms = 0;
            l.stallDuration = 0;
            l.stallStartTimestamp = 0;
            return a;
          };
        a = a.controlledState.playbackState;
        var g = b.controlledState.playbackState;
        a !== "stalling" && g === "stalling" && (l.stallStartTimestamp = e);
        switch (c) {
          case "started_playing":
          case "unpaused":
          case "finished_playing":
          case "paused":
          case "cancelled_requested_playing":
          case "playback_speed_changed":
          case "representation_ended":
            t(b.uncontrolledState.clockTimestamp);
            d = f();
            break;
          case "heart_beat":
            b.controlledState.playbackState !== "stalling" &&
              (t(b.uncontrolledState.clockTimestamp), (d = f()));
            break;
          default:
            break;
        }
        return d;
      }
      function A(a, b, c) {
        a =
          b.controlledState.playbackState === "paused" &&
          a.controlledState.playbackState === "stalling";
        return c > 0 && (b.controlledState.playbackState === "stalling" || a);
      }
      function B(a, b) {
        a = a.current;
        var c = null;
        switch (b) {
          case "finished_playing":
          case "paused":
          case "heart_beat":
            a && (c = a.getAndFlushTracedFrames());
            return c != null ? JSON.stringify(c) : null;
          default:
            return null;
        }
      }
      function C(a) {
        a = a.controlledState.playbackState;
        switch (a) {
          case "playing":
          case "stalling":
            return "playing";
          case "paused":
            return "paused";
          case "ended":
            return "finished";
          default:
            a;
            return "unknown";
        }
      }
      function D(a) {
        switch (a) {
          case "normal":
            return "normal";
          case "low":
            return "low";
          case "ultra-low":
            return "ultra_low";
          default:
            return null;
        }
      }
      function E() {
        return {
          state: l.hasLoggedStartedPlaying
            ? c("VideoPlayerLoggerPlayerStates").UNPAUSED
            : c("VideoPlayerLoggerPlayerStates").STARTED,
        };
      }
      function F(a) {
        if (
          c("gkx")("2714") &&
          (a == null ? void 0 : a.v2) &&
          (a == null ? void 0 : a.v2.length) > 0
        ) {
          var b = a == null ? void 0 : a.v2;
          b = b[b.length - 1];
          return [b["class"], b.module]
            .map(d("CometProductAttribution").filterEntryValue)
            .join(":");
        }
        return (a =
          a == null
            ? void 0
            : (b = a.v2) == null
            ? void 0
            : b
                .map(function (a) {
                  return [a["class"], a.module]
                    .map(d("CometProductAttribution").filterEntryValue)
                    .join(":");
                })
                .join(";")) != null
          ? a
          : "";
      }
      function G(f) {
        var h,
          i = f.eventType,
          j = f.logDataOverrides,
          k = f.prevState,
          m = f.state;
        f = u(m, i);
        f = f.video_last_start_time_position;
        var o = z(k, m, i),
          r = o.stall_count,
          s = o.stall_count_200_ms;
        o = o.stall_time;
        var t = y(k, m, i),
          v = t.interrupt_count;
        t = t.interrupt_time;
        var w = B(a.videoLiveTraceRef, i),
          E = [],
          G =
            a.initialLoggingMetaData.coreVideoPlayerMetaData
              .autoplayGatingResult;
        G && E.push(G);
        G =
          i === "entered_fs"
            ? !0
            : i === "exited_fs"
            ? !1
            : l.lastLoggedFullscreenState;
        h = c("getPlayerFormatForLogData")(
          {
            isDesktopPictureInPicture:
              (h = m.controlledState.isDesktopPictureInPicture) != null
                ? h
                : !1,
            isFullscreen: G,
          },
          e.coreVideoPlayerMetaData.playerFormat
        );
        var H = m.uncontrolledState.viewabilityPercentage,
          I = Boolean(m.uncontrolledState.isFBIsLiveTemplated),
          J = Boolean(m.uncontrolledState.isFBWasLive),
          K = m.uncontrolledState.videoElementPlaybackRate;
        K = K == null || K === 0 ? l.lastLoggedPlaybackSpeed : K;
        var L = a.initialLoggingMetaData.productAttribution;
        if (h === "watch_scroll" && L && L.v2) {
          var M,
            N = {
              0: babelHelpers["extends"]({}, L["0"]),
              v2: [babelHelpers["extends"]({}, L.v2[0])],
            };
          M =
            (M = e.productAttribution) == null
              ? void 0
              : (M = M.v2) == null
              ? void 0
              : M[0];
          if (M) {
            var O = N.v2[0];
            O["class"] = M["class"];
            O.scope_id = M.scope_id;
            O.ts = M.ts;
          }
          L = N;
        }
        O = null;
        M = null;
        O =
          L != null
            ? d("CometProductAttribution").minifyProductAttributionV2(L)
            : null;
        M = L != null ? F(L) : null;
        N = A(k, m, (N = o) != null ? N : 0);
        M = {
          access_token: a.initialLoggingMetaData.accessToken,
          ad_client_token: e.coreVideoPlayerMetaData.adClientToken,
          attribution_id:
            L != null && Object.prototype.hasOwnProperty.call(L, "0")
              ? JSON.stringify({ 0: L["0"] })
              : null,
          attribution_id_v2: O,
          attribution_id_v2_root: M,
          audio_only: e.coreVideoPlayerMetaData.audioOnly,
          audio_representation_id: m.uncontrolledState.audioRepresentationID,
          autoplay_eligible:
            a.initialLoggingMetaData.coreVideoPlayerMetaData.canAutoplay ===
            "allow",
          autoplay_failure_reasons: JSON.stringify(E),
          autoplay_setting:
            a.initialLoggingMetaData.coreVideoPlayerMetaData.autoplaySetting,
          available_qualities: m.controlledState.availableQualities.length,
          broadcaster_origin:
            a.initialLoggingMetaData.coreVideoPlayerMetaData.broadcasterOrigin,
          browser_tab_id: c("getVideoBrowserTabId")(),
          caption_state: p(m, i),
          client_latency_setting: D(m.controlledState.latencyLevel),
          current_playback_speed: n ? K : null,
          current_viewability_percentage: H,
          dash_perf_logging_enabled:
            e.coreVideoPlayerMetaData.VideoPlayerShakaPerformanceLoggerClass !=
              null &&
            e.coreVideoPlayerMetaData.VideoPlayerShakaPerformanceLoggerClass.isEnabled(),
          data_connection_quality: d("VideoPlayerConnectionQuality").evaluate(
            function () {
              return m.uncontrolledState.estimatedBandwidth;
            }
          ),
          dropped_frame_count:
            m.uncontrolledState.videoElementDroppedFrameCount,
          external_log_id: e.coreVideoPlayerMetaData.externalLogID,
          external_log_type: e.coreVideoPlayerMetaData.externalLogType,
          fb_manifest_identifier: m.uncontrolledState.manifestIdentifier,
          frame_events: w,
          interrupt_count: v,
          interrupt_time: t,
          is_abr_enabled: m.isAbrEnabled,
          is_fbms: m.uncontrolledState.isFBMS,
          is_live_video_rewound: m.controlledState.isLiveRewindActive,
          is_pip: m.controlledState.isDesktopPictureInPicture,
          is_predictive_playback: m.uncontrolledState.isPredictiveDash,
          is_sound_on: !m.controlledState.muted,
          is_stalling: N,
          is_templated_manifest: I || J,
          last_viewability_percentage: l.lastLoggedViewabilityPercentage,
          mpd_validation_errors: m.uncontrolledState.mpdValidationErrors,
          network_connected: m.uncontrolledState.networkConnected,
          playback_caption_format: m.controlledState.captionFormat,
          playback_caption_locale: m.controlledState.captionsLocale,
          playback_duration: m.uncontrolledState.videoElementDuration,
          playback_is_broadcast:
            a.initialLoggingMetaData.coreVideoPlayerMetaData.isVideoBroadcast,
          playback_is_drm: Boolean(
            a.initialLoggingMetaData.coreVideoPlayerMetaData.graphQLVideoDRMInfo
          ),
          playback_is_live_streaming:
            a.initialLoggingMetaData.coreVideoPlayerMetaData.isLiveStreaming,
          player_format: h,
          player_instance_key: e.instanceKey,
          player_origin: e.coreVideoPlayerMetaData.playerOriginOverride,
          player_state: C(m),
          player_suborigin: e.coreVideoPlayerMetaData.subOrigin,
          player_version: m.playerVersion,
          representation_id: m.uncontrolledState.videoRepresentationID,
          source_VPL_LOGGING_HACK:
            e.coreVideoPlayerMetaData.source_VPL_LOGGING_HACK,
          stall_count: r,
          stall_count_200_ms: s,
          stall_time: o,
          streaming_format: m.controlledState.streamingFormat,
          total_frame_count: m.uncontrolledState.videoElementTotalFrameCount,
          tracking_data_encrypted:
            a.initialLoggingMetaData.trackingDataEncrypted,
          tracking_nodes: a.initialLoggingMetaData.trackingNodes,
          v2_heart_beat: c("gkx")("1434599") && i === "heart_beat" ? !0 : null,
          video_bandwidth: m.uncontrolledState.estimatedBandwidth,
          video_buffer_end_position:
            m.uncontrolledState.videoElementLastBufferEndPosition,
          video_id: e.coreVideoPlayerMetaData.videoFBID,
          video_last_start_time_position: f,
          video_play_reason: m.controlledState.lastPlayReason,
          video_player_height: (L = e.dimensions) == null ? void 0 : L.height,
          video_player_width: (O = e.dimensions) == null ? void 0 : O.width,
          video_time_position: m.uncontrolledState.videoElementPlayheadPosition,
          web_client_revision: c("SiteData").client_revision,
        };
        E =
          c("gkx")("1286") && i === "error_recovery_attempt"
            ? null
            : q.has(i)
            ? ++l.sequenceNumber
            : null;
        w = {
          event_seq_num: ++l.vplEventSequenceNumber,
          seq_num: E,
          time_ms: Date.now(),
          vpts: c("performanceAbsoluteNow")(),
        };
        var P = {};
        b.forEach(function (a, b) {
          P[b] = a;
        });
        v = e.coreVideoPlayerMetaData.additionalLogData;
        t = babelHelpers["extends"]({}, v, P);
        N = babelHelpers["extends"]({}, t, M, j, w);
        J =
          (I = l.initialSuborigin) != null
            ? I
            : e.coreVideoPlayerMetaData.subOrigin;
        r = (h = N.source_VPL_LOGGING_HACK) != null ? h : J;
        o =
          (s = e.coreVideoPlayerMetaData.initialTracePolicy) != null
            ? s
            : e.coreVideoPlayerMetaData.routeTracePolicy;
        f = {
          eventType: i,
          logData: N,
          routeTracePolicy: o,
          source_VPL_LOGGING_HACK: r,
        };
        g.push(f);
        x(k, m, i);
        l.initialSuborigin == null && J != null && (l.initialSuborigin = J);
        l.lastLoggedFullscreenState = G;
        l.lastLoggedPlaybackSpeed = K;
        i === "viewability_changed" && (l.lastLoggedViewabilityPercentage = H);
      }
      var H = {};
      function I(a, b, c) {
        G({
          eventType: "requested_playing",
          logDataOverrides: babelHelpers["extends"]({}, c, E()),
          prevState: a,
          state: b,
        });
        l.hasPendingRequestedPlaying = !0;
        l.canLogPausedOrFinishedPlaying = !0;
        return H;
      }
      function J(a, b, c) {
        if (!l.canLogPausedOrFinishedPlaying) return H;
        else if (l.hasPendingRequestedPlaying) {
          K(a, b, c);
          l.canLogPausedOrFinishedPlaying = !1;
          l.hasPendingRequestedPlaying = !1;
          return H;
        } else {
          G({
            eventType: "paused",
            logDataOverrides: babelHelpers["extends"]({}, c, {
              error_user_info: JSON.stringify({
                is_document_hidden: b.uncontrolledState.isDocumentHidden,
              }),
            }),
            prevState: a,
            state: b,
          });
          l.canLogPausedOrFinishedPlaying = !1;
          l.hasPendingRequestedPlaying = !1;
          return H;
        }
      }
      function K(a, b, c) {
        var d = b.uncontrolledState.liveTraceContext;
        c = babelHelpers["extends"]({}, c, E(), {
          live_trace_source_id: d ? d.sourceId : void 0,
          live_trace_stream_id: d ? d.streamId : void 0,
          live_trace_stream_type: d ? d.streamType : void 0,
        });
        G({
          eventType: "cancelled_requested_playing",
          logDataOverrides: c,
          prevState: a,
          state: b,
        });
        return H;
      }
      function L(a, b, c) {
        if (
          c.type === "dom_event_play_promise_rejected" &&
          c.payload.hostCallPlayID === a.controlledState.hostCallPlayIDLast &&
          b.controlledState.hostCallPlayIDLast == null &&
          l.hasPendingRequestedPlaying
        ) {
          c = c.payload.playPromiseRejectionReason;
          if (c != null && c.name === "NotAllowedError") {
            K(a, b, { debug_reason: "not_allowed" });
            return H;
          } else if (c != null && c.name === "AbortError") {
            K(a, b, { debug_reason: "aborted" });
            return H;
          } else return H;
        } else return H;
      }
      function M(a, b, c) {
        if (
          (c.type === "controller_play_requested" ||
            (c.type === "dom_event_play" && !l.shouldIgnoreDomPlay)) &&
          a.controlledState.playbackState !== b.controlledState.playbackState
        ) {
          c = b.uncontrolledState.liveTraceContext;
          c = c
            ? {
                live_trace_source_id: c.sourceId,
                live_trace_stream_id: c.streamId,
                live_trace_stream_type: c.streamType,
              }
            : null;
          I(a, b, c);
          return H;
        } else return H;
      }
      function N(a, b, c) {
        if (
          a.controlledState.playbackState === "stalling" &&
          b.controlledState.playbackState === "playing" &&
          l.canLogPlayingEvent
        ) {
          c = b.uncontrolledState.liveTraceContext;
          c = c
            ? {
                live_trace_source_id: c.sourceId,
                live_trace_stream_id: c.streamId,
                live_trace_stream_type: c.streamType,
              }
            : null;
          G({
            eventType: l.hasLoggedStartedPlaying
              ? "unpaused"
              : "started_playing",
            logDataOverrides: c,
            prevState: a,
            state: b,
          });
          l.hasLoggedStartedPlaying = !0;
          l.canLogPlayingEvent = !1;
          l.hasPendingRequestedPlaying = !1;
          return H;
        } else return H;
      }
      function O(a, b, d) {
        var e = b.controlledState.playbackState,
          f = a.controlledState.playbackState;
        if (
          d.type === "controller_scrub_begin_requested" &&
          !a.controlledState.scrubbing &&
          e !== "paused" &&
          e !== "ended"
        ) {
          J(a, b);
          l.isLoggingScrubbingSequence = !0;
          return H;
        } else if (
          !a.controlledState.seeking &&
          b.controlledState.seeking &&
          !l.isLoggingScrubbingSequence &&
          e !== "paused" &&
          e !== "ended" &&
          !l.hasPendingRequestedPlaying
        ) {
          J(a, b);
          l.shouldLogRequestedPlayingForScrub = !0;
          return H;
        } else if (
          d.type === "controller_scrub_end_requested" &&
          a.controlledState.scrubbing &&
          e !== "paused" &&
          e !== "ended"
        ) {
          I(a, b, { video_time_position: d.payload.seekTargetPosition });
          return H;
        } else if (a.controlledState.seeking && !b.controlledState.seeking) {
          d = b.uncontrolledState.videoElementPlayheadPosition;
          var g = a.controlledState.implementationSeekSourcePosition;
          (!c("gkx")("1482680") ||
            (g != null && d != null && Math.abs(g - d) > i)) &&
            (l.shouldLogRequestedPlayingForScrub &&
              e !== "paused" &&
              e !== "ended" &&
              I(a, b),
            G({ eventType: "scrubbed", prevState: a, state: b }),
            (l.isLoggingScrubbingSequence = !1),
            (l.shouldLogRequestedPlayingForScrub = !1),
            f !== "paused" && f !== "ended" && (l.canLogPlayingEvent = !0));
          return H;
        } else return H;
      }
      function P(a, b, c) {
        if (
          a.controlledState.playbackState !== b.controlledState.playbackState &&
          b.controlledState.playbackState === "ended" &&
          l.canLogPausedOrFinishedPlaying
        ) {
          G({ eventType: "finished_playing", prevState: a, state: b });
          l.canLogPausedOrFinishedPlaying = !1;
          return H;
        } else return H;
      }
      function Q(a, b, c) {
        if (
          (c.type === "controller_pause_requested" ||
            (c.type === "dom_event_pause" && !l.shouldIgnoreDomPause)) &&
          a.controlledState.playbackState !== b.controlledState.playbackState
        ) {
          J(a, b, { debug_reason: "paused" });
          return H;
        } else return H;
      }
      function R(a, b, d) {
        var e = b.controlledState.playbackState;
        if (e !== "paused" && e !== "ended") {
          c("gkx")("1469813") &&
          d.type === "implementation_video_node_unmounted"
            ? J(a, a, { debug_reason: "unloaded" })
            : (d.type === "implementation_unmounted" ||
                d.type === "implementation_engine_destroy_requested") &&
              J(a, b, { debug_reason: "unloaded" });
          return H;
        } else return H;
      }
      function S(a, b, c) {
        if (c.type === "implementation_engine_representation_blocked") {
          c = c.payload.blockedRepresentationID;
          G({
            eventType: "video_playback_fallback",
            logDataOverrides: { representation_id: c },
            prevState: a,
            state: b,
          });
        }
        return H;
      }
      function T(a, b, e) {
        e = b.controlledState.muted;
        var f = b.controlledState.volume,
          g = a.controlledState.muted,
          h = a.controlledState.volume;
        e = d("VideoPlayerMutedStateChange").getVideoPlayerMutedStateChange({
          currMuted: e,
          currVolume: f,
          prevMuted: g,
          prevVolume: h,
        });
        g = { current_volume: Math.round(f * 100) };
        switch (e) {
          case "muted":
            G({
              eventType: "muted",
              logDataOverrides: g,
              prevState: a,
              state: b,
            });
            return H;
          case "unmuted":
            G({
              eventType: "unmuted",
              logDataOverrides: g,
              prevState: a,
              state: b,
            });
            return H;
          case null:
            if (h < f) {
              G({
                eventType: "volume_increase",
                logDataOverrides: g,
                prevState: a,
                state: b,
              });
              return H;
            } else if (h > f) {
              G({
                eventType: "volume_decrease",
                logDataOverrides: g,
                prevState: a,
                state: b,
              });
              return H;
            } else return H;
          default:
            e;
            c("recoverableViolation")(
              'Unexpected mutedStateChange "' + e + '"',
              "comet_video_player"
            );
            return H;
        }
      }
      function U(a, b, c) {
        c = b.uncontrolledState.videoRepresentationID;
        var d = l.lastTrackedRepresentation,
          e = b.controlledState.playbackState,
          f = b.controlledState.seeking;
        if (!f && e !== "paused" && e !== "ended" && d != null && d !== c) {
          G({
            eventType: "representation_ended",
            logDataOverrides: {
              next_representation_id: c,
              representation_id: d,
            },
            prevState: a,
            state: b,
          });
          l.lastTrackedRepresentation = c;
          s("quality_change");
          return H;
        } else if (d == null && d !== c) {
          l.lastTrackedRepresentation = c;
          return H;
        } else return H;
      }
      function V(a, b) {
        var d = a.controlledState.error;
        return {
          currentVideo: {
            audioStreamId: a.uncontrolledState.audioRepresentationID,
            dashAudioFormat: void 0,
            hasHD: void 0,
            hasRateLimit: void 0,
            hasSubtitles: a.controlledState.captionsLoaded,
            isDrm: Boolean(e.coreVideoPlayerMetaData.graphQLVideoDRMInfo),
            isHD: void 0,
            isLiveStream: e.coreVideoPlayerMetaData.isLiveStreaming,
            isRateLimited: void 0,
            liveManifestUrl: void 0,
            projection: void 0,
            resourceUrl: void 0,
            streamId: a.uncontrolledState.videoRepresentationID,
            streamType: a.controlledState.streamingFormat,
            tagHD: void 0,
            tagSD: void 0,
            videoID: e.coreVideoPlayerMetaData.videoFBID,
          },
          player: {
            canPlayType: c("mapObject")(c("VideoMimeTypes"), m),
            dimensions: e.dimensions
              ? { height: e.dimensions.height, width: e.dimensions.width }
              : null,
            droppedFrames: a.uncontrolledState.videoElementDroppedFrameCount,
            initializationTime: void 0,
            initializationTimestamp: void 0,
            inPlayStallCount: void 0,
            inPlayStallTime: void 0,
            interruptCount: void 0,
            interruptTime: void 0,
            lastError: d,
            loggedError: l.lastLoggedError,
            stack: d == null ? void 0 : d.stack,
            stallCount: l.stallCount,
            stallTime: l.stallDuration,
            state: C(a),
            totalFrames: a.uncontrolledState.videoElementTotalFrameCount,
            version: a.playerVersion,
            videoSource: void 0,
            viewabilityPercentage: a.uncontrolledState.viewabilityPercentage,
          },
          playerStateMachine: { action: b, state: a },
        };
      }
      function W(a, b, c) {
        var e = b.controlledState.error;
        if (e != null && e !== l.lastLoggedError && e.errorCode !== "410") {
          var f = e.errorDescription,
            g = e.errorName,
            h = e.errorType,
            i = e.url,
            j = e.errorCode == null || e.errorCode === "" ? g : e.errorCode;
          c = V(b, c);
          G({
            eventType: "error",
            logDataOverrides: babelHelpers["extends"]({}, E(), {
              error: g,
              error_code: j,
              error_description: f,
              error_domain: g,
              error_type:
                (j = h) != null
                  ? j
                  : d(
                      "VideoPlayerImplementationErrorNormalization"
                    ).getErrorTypeFromErrorName(g),
              error_user_info: JSON.stringify(c),
              resource_url: i,
            }),
            prevState: a,
            state: b,
          });
          l.lastLoggedError = e;
        }
        return H;
      }
      function X(a, b) {
        var c = l.errorRecoveryAttemptState.currentRecoverableError;
        if (c != null) {
          var d = c.errorCode,
            e = c.errorDescription,
            f = c.errorName,
            g = c.errorType;
          c = c.url;
          l.errorRecoveryAttemptState.eventsLogged++;
          l.errorRecoveryAttemptState.repeatCount = 0;
          G({
            eventType: "error_recovery_attempt",
            logDataOverrides: {
              error: f,
              error_code: d,
              error_description: e,
              error_domain: f,
              error_type: g,
              resource_url: c,
            },
            prevState: a,
            state: b,
          });
        }
        return H;
      }
      function Y(a, b, d) {
        if (
          d.type === "error_recovery_attempt" &&
          l.errorRecoveryAttemptState.eventsLogged < k
        ) {
          var e = l.errorRecoveryAttemptState.currentRecoverableError;
          d = d.payload.recoverableError;
          if (
            c("gkx")("1541") &&
            d != null &&
            d.errorName === "OZ_NETWORK" &&
            !c("NetworkStatus").isOnline()
          )
            return H;
          l.errorRecoveryAttemptState.currentRecoverableError = d;
          e == null ||
          e.errorName !== d.errorName ||
          e.errorCode !== d.errorCode
            ? X(a, b)
            : (l.errorRecoveryAttemptState.repeatCount++,
              l.errorRecoveryAttemptState.repeatCount > j && X(a, b));
        }
        return H;
      }
      function Z(a, b, c) {
        if (!n) return H;
        var d = b.uncontrolledState.videoElementPlaybackRate;
        c.type === "dom_event_ratechange" &&
          l.lastLoggedPlaybackSpeed != null &&
          d !== 0 &&
          d !== l.lastLoggedPlaybackSpeed &&
          G({ eventType: "playback_speed_changed", prevState: a, state: b });
        return H;
      }
      function aa(a, b, c) {
        c = b.controlledState.playbackState;
        c === "paused" || c === "ended"
          ? (l.nextHeartbeatTime = null)
          : c !== "stalling" &&
            l.nextHeartbeatTime == null &&
            (l.nextHeartbeatTime = Date.now() + h);
        var d = l.nextHeartbeatTime;
        if (d != null) {
          var e = Date.now();
          e >= d &&
            (c !== "stalling" &&
              G({ eventType: "heart_beat", prevState: a, state: b }),
            (l.nextHeartbeatTime = e + h));
        }
        return H;
      }
      function ba(a, b, c) {
        if (c.type === "implementation_mounted") {
          G({ eventType: "player_loaded", prevState: a, state: b });
          return H;
        } else return H;
      }
      function $(a, b, c) {
        G({
          eventType: c ? "entered_fs" : "exited_fs",
          prevState: a,
          state: b,
        });
      }
      function ca(a, b, c) {
        var d = e.coreVideoPlayerMetaData.playerFormat;
        (f.coreVideoPlayerMetaData.playerFormat !== d ||
          c.type === "controller_override_player_format") &&
          G({ eventType: "player_format_changed", prevState: a, state: b });
        return H;
      }
      function da(a, b, c) {
        if (c.type === "dom_event_timeupdate") {
          c = l.nextPlayedThreeSecondsPlayheadPosition;
          if (c != null) {
            var d = b.uncontrolledState;
            d = d.videoElementPlayheadPosition;
            d != null &&
              c <= d &&
              (G({
                eventType: "played_for_three_seconds",
                prevState: a,
                state: b,
              }),
              (l.nextPlayedThreeSecondsPlayheadPosition = null));
          }
        }
        return H;
      }
      function ea(a, b, c) {
        if (c.type !== "notify_fullscreen_changed") return H;
        c = l.lastLoggedFullscreenState;
        var d = b.uncontrolledState.isFullscreen;
        if (c !== !0 && d === !0) {
          $(a, b, d);
          return H;
        } else if (c === !0 && d === !1) {
          $(a, b, d);
          return H;
        } else return H;
      }
      function fa(a, b, d) {
        d = e.coreVideoPlayerMetaData.adClientToken;
        if ((d == null || d === "") && c("gkx")("1401747")) return H;
        d = b.controlledState.playbackState;
        var f = l.lastLoggedViewabilityPercentage,
          g = b.uncontrolledState.viewabilityPercentage;
        if (d !== "paused" && d !== "ended" && f != null && f !== g) {
          G({ eventType: "viewability_changed", prevState: a, state: b });
          return H;
        } else return H;
      }
      function ga(a, b, c) {
        if (c.type === "controller_set_captions_visible_requested") {
          G({ eventType: "caption_change", prevState: a, state: b });
          return H;
        } else return H;
      }
      function ha(a) {
        f = e;
        if (a.type === "notify_logging_metadata_change") {
          a = a.payload.loggingMetaData;
          e = a;
        }
      }
      return {
        addDebugSubscriber: function (a) {
          return r(a);
        },
        consumeLoggerEvents: function () {
          var a = g.splice(0);
          return a;
        },
        getLoggerState: function () {
          return l;
        },
        handleStateMachine: function (a, b, c) {
          ha(c);
          var d = b.controlledState.playbackState;
          w(a, b, c);
          v(a, b);
          var e = [
            ca,
            ea,
            fa,
            L,
            M,
            O,
            N,
            P,
            Q,
            S,
            T,
            R,
            ba,
            ga,
            U,
            W,
            Y,
            aa,
            Z,
            da,
          ];
          e.forEach(function (d) {
            d(a, b, c);
          });
          (d === "paused" || d === "ended") && (l.canLogPlayingEvent = !0);
          c.type === "controller_pause_requested" &&
            ((l.hasPausedOnce = !0), (l.shouldIgnoreDomPause = !0));
          c.type === "controller_play_requested" &&
            ((l.hasPausedOnce = !0), (l.shouldIgnoreDomPlay = !0));
          c.type === "dom_event_pause" && (l.shouldIgnoreDomPause = !1);
          c.type === "dom_event_play" &&
            ((l.shouldIgnoreDomPlay = !1),
            (l.lastLoggedViewabilityPercentage =
              b.uncontrolledState.viewabilityPercentage));
        },
        logVPLEvent: function (a) {
          var b = a.eventType,
            c = a.logDataOverrides;
          a = a.state;
          G({ eventType: b, logDataOverrides: c, prevState: a, state: a });
        },
        setAdditionalLogData: function (a, c) {
          b.set(a, c);
        },
      };
    }
    g.HEARTBEAT_INTERVAL = h;
    g.createVideoPlayerImplementationStateMachineLogger = a;
  },
  98
);
__d(
  "convertToViewabilityPercentage",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      if (a >= 0.99) return 100;
      else if (a >= 0.75) return 75;
      else if (a >= 0.5) return 50;
      else if (a >= 0.25) return 25;
      else if (a >= 0) return 0;
      else return -2;
    }
    f["default"] = a;
  },
  66
);
__d(
  "VideoPlayerImplementationStateMachineStateUncontrolledState",
  ["NetworkStatus", "convertToViewabilityPercentage", "gkx", "performance"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b = a.engineExtrasAPI,
        d = a.fullscreenControllerRef,
        e = a.videoElementAPI,
        f = a.videoLiveTraceRef;
      a = a.videoPlayerPassiveViewabilityInfoRef;
      f = f.current;
      var g = Date.now(),
        h =
          typeof c("performance").now === "function"
            ? c("performance").now()
            : 0;
      if (e == null) {
        var i;
        return {
          audioRepresentationID: void 0,
          clockTimestamp: g,
          currentPlayingAudioTrackID: void 0,
          currentPlayingVideoQuality: void 0,
          estimatedBandwidth: void 0,
          isDocumentHidden: document.hidden,
          isDRM: void 0,
          isFBIsLiveTemplated: void 0,
          isFBMS: void 0,
          isFBWasLive: void 0,
          isFullscreen: d.current ? d.current.getIsFullscreen() : void 0,
          isPredictiveDash: void 0,
          liveTraceContext: f
            ? (i = f.getLiveTraceContext()) != null
              ? i
              : void 0
            : void 0,
          manifestIdentifier: void 0,
          mpdValidationErrors: void 0,
          networkConnected: void 0,
          perfTimestamp: h,
          videoElementDebugCurrentSrc: void 0,
          videoElementDebugSrc: void 0,
          videoElementDroppedFrameCount: void 0,
          videoElementDuration: void 0,
          videoElementEnded: void 0,
          videoElementError: void 0,
          videoElementLastBufferEndPosition: void 0,
          videoElementMuted: void 0,
          videoElementNetworkState: void 0,
          videoElementPaused: void 0,
          videoElementPlaybackRate: void 0,
          videoElementPlayheadPosition: void 0,
          videoElementReadyState: void 0,
          videoElementTotalFrameCount: void 0,
          videoElementVolume: void 0,
          videoRepresentationID: void 0,
          viewabilityPercentage: void 0,
        };
      }
      i = e.getPlayheadPosition();
      a = a && a.current;
      a = a && a.getCurrent();
      return {
        audioRepresentationID: b ? b.getAudioRepresentationIDAtTime(i) : void 0,
        clockTimestamp: g,
        currentPlayingAudioTrackID: b
          ? b.getCurrentPlayingAudioTrackID()
          : void 0,
        currentPlayingVideoQuality: b
          ? b.getCurrentPlayingVideoQuality()
          : void 0,
        estimatedBandwidth: b ? b.getEstimatedBandwidth() : void 0,
        isDocumentHidden: document.hidden,
        isDRM: b ? b.isDrm() : void 0,
        isFBIsLiveTemplated: b ? b.isFBIsLiveTemplated() : void 0,
        isFBMS: b ? b.isFBMS() : void 0,
        isFBWasLive: b ? b.isFBWasLive() : void 0,
        isFullscreen: d.current ? d.current.getIsFullscreen() : void 0,
        isPredictiveDash: b ? b.isPredictiveDash() : void 0,
        liveTraceContext: f
          ? (g = f.getLiveTraceContext()) != null
            ? g
            : void 0
          : void 0,
        manifestIdentifier: b ? b.getManifestIdentifier() : void 0,
        mpdValidationErrors: b ? b.getMpdValidationErrors() : void 0,
        networkConnected: c("NetworkStatus").isOnline(),
        perfTimestamp: h,
        videoElementDebugCurrentSrc: c("gkx")("1526990")
          ? (d = e.getUnderlyingVideoElement()) == null
            ? void 0
            : d.currentSrc
          : void 0,
        videoElementDebugSrc: c("gkx")("1526990")
          ? (f = e.getUnderlyingVideoElement()) == null
            ? void 0
            : f.src
          : void 0,
        videoElementDroppedFrameCount: e.getDroppedFrameCount(),
        videoElementDuration: e.getDuration(),
        videoElementEnded: e.getEnded(),
        videoElementError: e.getError(),
        videoElementLastBufferEndPosition: e.getLastBufferEndPosition(),
        videoElementMuted: e.getMuted(),
        videoElementNetworkState: e.getNetworkState(),
        videoElementPaused: e.getPaused(),
        videoElementPlaybackRate: e.getPlaybackRate(),
        videoElementPlayheadPosition: i,
        videoElementReadyState: e.getReadyState(),
        videoElementTotalFrameCount: e.getTotalFrameCount(),
        videoElementVolume: e.getVolume(),
        videoRepresentationID: b ? b.getVideoRepresentationIDAtTime(i) : void 0,
        viewabilityPercentage: a
          ? c("convertToViewabilityPercentage")(a.visiblePercentage)
          : void 0,
      };
    }
    g.createVideoPlayerImplementationStateMachineStateUncontrolledState = a;
  },
  98
);
__d(
  "VideoPlayerImplementationStateMachineState",
  ["VideoPlayerImplementationStateMachineStateUncontrolledState"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b = a.alwaysShowCaptions,
        c = a.areCaptionsAutogenerated,
        e = a.captionDisplayStyle,
        f = a.dimensions,
        g = a.isAbrEnabled,
        h = a.playerImplementationName,
        i = a.playerVersion;
      a = a.streamingFormat;
      var j = !0,
        k = 1,
        l = d(
          "VideoPlayerImplementationStateMachineStateUncontrolledState"
        ).createVideoPlayerImplementationStateMachineStateUncontrolledState({
          engineExtrasAPI: null,
          fullscreenControllerRef: { current: null },
          videoElementAPI: null,
          videoLiveTraceRef: { current: null },
          videoPlayerPassiveViewabilityInfoRef: { current: null },
        });
      return {
        controlledState: {
          activeCaptions: null,
          activeEmsgBoxes: [],
          allEmsgBoxes: new Map(),
          availableAudioTracks: [],
          availableQualities: [],
          bufferingDetected: !1,
          captionDisplayStyle: e,
          captionFormat: null,
          captionsLoaded: !1,
          captionsLocale: null,
          captionsVisible: b,
          dimensions: f,
          emsgObserverTokens: new Set(),
          error: null,
          hasPlayEverBeenRequested: !1,
          hostCallPlayIDLast: null,
          hostCallQueue: [],
          implementationSeekSourcePosition: null,
          inbandCaptionsAutogenerated: c,
          isDesktopPictureInPicture: !1,
          isLiveRewindActive: !1,
          lastBufferingType: null,
          lastMuteReason: null,
          lastPausedTimeMs: 0,
          lastPauseReason: null,
          lastPlayedTimeMs: 0,
          lastPlayReason: null,
          latencyLevel: "normal",
          loopCount: 0,
          loopCurrent: 0,
          mountState: "before_mounted",
          muted: j,
          overriddenPlayerFormat: "unknown",
          playbackState: "paused",
          playerFormat: "unknown",
          scrubbing: !1,
          seekableRanges: null,
          seeking: !1,
          seekTargetPosition: null,
          selectedAudioTrackID: null,
          selectedVideoQuality: "notselected",
          streamEnded: !1,
          streamingFormat: a,
          streamInterrupted: !1,
          targetPlaybackRate: 1,
          targetVideoQuality: "",
          ullIneligibilityReason: null,
          videoProjection: null,
          volume: k,
          waitingForDomPlaying: !1,
          waitingForDomTimeUpdateAfterSeeked: !1,
          watchTimeMs: 0,
        },
        isAbrEnabled: g,
        playerImplementationName: h,
        playerVersion: i,
        uncontrolledState: l,
      };
    }
    g.createVideoPlayerImplementationStateMachineInitialState = a;
  },
  98
);
__d(
  "VideoPlayerImplementationEngineAPI",
  [
    "CometEventListener",
    "CometVideoPictureInPictureManagerContext",
    "CurrentUser",
    "ErrorMetadata",
    "FBLogger",
    "MediaPlaybackCompoundEventStateMachineLogger",
    "PlaybackSpeedExperiments",
    "RunComet",
    "SubscriptionsHandler",
    "VideoLiveTrace",
    "VideoPlayerBanzaiLogFlusher",
    "VideoPlayerCaptionsController",
    "VideoPlayerImplementationReactVideoElement.react",
    "VideoPlayerImplementationStateMachine",
    "VideoPlayerImplementationStateMachineHostCallQueue",
    "VideoPlayerImplementationStateMachineLogger",
    "VideoPlayerImplementationStateMachineState",
    "VideoPlayerImplementationStateMachineStateUncontrolledState",
    "VideoPlayerVideoPixelsFitContext",
    "clearTimeout",
    "cr:4081",
    "cr:4596",
    "cr:506",
    "cr:683059",
    "deepEquals",
    "err",
    "gkx",
    "justknobx",
    "qex",
    "react",
    "recoverableViolation",
    "removeFromArray",
    "setTimeout",
    "unrecoverableViolation",
    "useConcurrentAutoplayManagementAPI",
    "useSEOLoggedOutWebCrawler",
    "useStable",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    f = d("react");
    var i = f.useEffect,
      j = f.useRef,
      k = f.useState,
      l = (function () {
        function a(a) {
          var b = a.pauseRequestCallbacks,
            c = a.playRequestCallbacks,
            d = a.scrubBeginRequestCallbacks;
          a = a.scrubEndRequestCallbacks;
          this.$1 = c;
          this.$2 = b;
          this.$3 = d;
          this.$4 = a;
        }
        var b = a.prototype;
        b.playRequest = function (a) {
          var b = this;
          this.$1.push(a);
          return function () {
            c("removeFromArray")(b.$1, a);
          };
        };
        b.pauseRequest = function (a) {
          var b = this;
          this.$2.push(a);
          return function () {
            c("removeFromArray")(b.$2, a);
          };
        };
        b.scrubBeginRequest = function (a) {
          var b = this;
          this.$3.push(a);
          return function () {
            c("removeFromArray")(b.$3, a);
          };
        };
        b.scrubEndRequest = function (a) {
          var b = this;
          this.$4.push(a);
          return function () {
            c("removeFromArray")(b.$4, a);
          };
        };
        return a;
      })();
    function m(a) {
      var b = a.concurrentAutoplayManagementAPI,
        d = a.debugAPI,
        e = a.exitPictureInPictureImpl,
        f = a.fullscreenControllerRef,
        g = a.getCurrentExposedState,
        h = a.getCurrentIsDesktopPictureInPicture,
        i = a.getCurrentIsFullscreen,
        j = a.getCurrentLiveRewindPlayheadPosition,
        k = a.getCurrentPlayheadPosition,
        m = a.internal_getCurrentStateMachineState,
        n = a.loggerAPI,
        o = a.overridePlayerFormatImpl,
        p = a.pauseImpl,
        q = a.playImpl,
        r = a.registerEmsgObserverImpl,
        s = a.requestPictureInPictureImpl,
        t = a.scrubBeginImpl,
        u = a.scrubEndImpl,
        v = a.seekImpl,
        w = a.selectAudioTrackIDImpl,
        x = a.selectVideoQualityImpl,
        y = a.setCaptionsDisplayStyleImpl,
        z = a.setCaptionsUrlImpl,
        A = a.setCaptionsVisibleImpl,
        B = a.setIsLiveRewindActiveImpl,
        C = a.setLatencyLevelImpl,
        D = a.setMutedImpl,
        E = a.setPictureInPictureStateImpl,
        F = a.setPlaybackRateImpl,
        G = a.setVolumeImpl,
        H = a.subscribers,
        I = a.unregisterEmsgObserverImpl,
        J = a.videoElementAPIRef,
        K = new Set(),
        L = !1,
        M = null,
        N = [],
        O = [],
        P = [],
        Q = [],
        R = new l({
          pauseRequestCallbacks: O,
          playRequestCallbacks: N,
          scrubBeginRequestCallbacks: P,
          scrubEndRequestCallbacks: Q,
        }),
        S = {
          freeze: function () {
            if (!g().paused)
              throw c("unrecoverableViolation")(
                "Video player must be paused before the controller freeze",
                "comet_video_player"
              );
            var a = {};
            try {
              var b = !1;
              K.size === 0 &&
                ((b = !0),
                (M = {
                  exposedState: g(),
                  isFullscreen: i(),
                  liveRewindPlayheadPosition: j(),
                  playheadPosition: k(),
                  stateMachineState: m(),
                }));
              K.add(a);
              b &&
                ((L = !0),
                H.forEach(function (a) {
                  a();
                }));
            } finally {
              L = !1;
            }
            return a;
          },
          isFrozen: function () {
            return M != null;
          },
          unfreeze: function (a) {
            if (!K.has(a))
              throw c("unrecoverableViolation")(
                "Video player controller unfreeze token not found",
                "comet_video_player"
              );
            K["delete"](a);
            K.size === 0 &&
              ((M = null),
              H.forEach(function (a) {
                a();
              }));
          },
        },
        T = babelHelpers["extends"]({}, b, S, n, {
          debugAPI: d,
          exitPictureInPicture: function () {
            if (S.isFrozen()) return;
            e();
          },
          getCurrentState: function () {
            return M != null ? M.exposedState : g();
          },
          getIsDesktopPictureInPicture: function () {
            return M != null ? M.isFullscreen : h();
          },
          getIsFullscreen: function () {
            return M != null ? M.isFullscreen : i();
          },
          getLiveRewindPlayheadPosition: function () {
            return M != null ? M.liveRewindPlayheadPosition : j();
          },
          getPlayheadPosition: function () {
            return M != null ? M.playheadPosition : k();
          },
          internal_getStateMachineState: function () {
            return M != null ? M.stateMachineState : m();
          },
          internal_getVideoElement: function () {
            var a = J.current;
            if (a != null) {
              a = a.getUnderlyingVideoElement();
              return a;
            }
            return null;
          },
          internal_getVideoPixelsDimensions: function () {
            var a = J.current;
            return (a = a == null ? void 0 : a.getVideoPixelsDimensions()) !=
              null
              ? a
              : null;
          },
          observeOn: function () {
            return R;
          },
          overridePlayerFormat: function (a) {
            if (S.isFrozen()) return;
            o(a);
          },
          pause: function (a) {
            if (S.isFrozen()) return;
            O.forEach(function (b) {
              return b(a);
            });
            p(a);
          },
          play: function (a) {
            if (S.isFrozen()) return;
            N.forEach(function (b) {
              return b(a);
            });
            q(a);
          },
          registerEmsgObserver: function () {
            var a = {};
            r(a);
            return a;
          },
          requestPictureInPicture: function () {
            if (S.isFrozen()) return;
            s();
          },
          requestSetIsFullscreen: function (a) {
            if (S.isFrozen()) return;
            var b = f.current;
            if (b) {
              var c = T.internal_getVideoElement();
              b.requestSetIsFullscreen(a, c);
            }
          },
          scrollIntoView: function (a) {
            var b = T.internal_getVideoElement();
            b && b.scrollIntoView(a);
          },
          scrubBegin: function () {
            if (S.isFrozen()) return;
            P.forEach(function (a) {
              return a();
            });
            t();
          },
          scrubEnd: function (a) {
            if (S.isFrozen()) return;
            Q.forEach(function (b) {
              return b(a);
            });
            u(a);
          },
          seek: function (a) {
            if (S.isFrozen()) return;
            v(a);
          },
          selectAudioTrackID: function (a) {
            if (S.isFrozen()) return;
            w(a);
          },
          selectVideoQuality: function (a) {
            if (S.isFrozen()) return;
            x(a);
          },
          setCaptionsDisplayStyle: function (a) {
            if (S.isFrozen()) return;
            y(a);
          },
          setCaptionsUrl: function (a) {
            if (S.isFrozen()) return;
            z(a);
          },
          setCaptionsVisible: function (a) {
            if (S.isFrozen()) return;
            A(a);
          },
          setIsLiveRewindActive: function (a) {
            if (S.isFrozen()) return;
            B(a);
          },
          setLatencyLevel: function (a) {
            if (S.isFrozen()) return;
            C(a);
          },
          setMuted: function (a, b) {
            if (S.isFrozen()) return;
            D(a, b);
          },
          setPictureInPictureState: function (a) {
            if (S.isFrozen()) return;
            E(a);
          },
          setPlaybackRate: function (a) {
            if (S.isFrozen()) return;
            F(a);
          },
          setVolume: function (a) {
            if (S.isFrozen()) return;
            G(a);
          },
          subscribe: function (a) {
            var b = function () {
                if (S.isFrozen() && !L) return;
                a();
              },
              d = f.current,
              e = d ? d.subscribe(b) : null;
            H.push(b);
            return {
              remove: function () {
                e && e.remove(), c("removeFromArray")(H, b);
              },
            };
          },
          unregisterEmsgObserver: function (a) {
            I(a);
          },
          videoElementAPIRef: J,
        });
      return T;
    }
    function n(a) {
      var b = a.concurrentAutoplayManagementAPI,
        d = a.createExposedState,
        e = a.debugAPI,
        f = a.fullscreenControllerRef,
        g = a.logger,
        h = a.machine,
        i = a.subscribers,
        j = a.videoElementAPIRef;
      a = {
        logVPLEvent_DO_NOT_USE: function (a, b) {
          g.logVPLEvent({
            eventType: a,
            logDataOverrides: b,
            state: h.getCurrentState(),
          });
        },
        setAdditionalLogData: function (a, b) {
          g.setAdditionalLogData(a, b);
        },
      };
      return m({
        concurrentAutoplayManagementAPI: b,
        debugAPI: e,
        exitPictureInPictureImpl: function () {
          h.dispatch({ type: "controller_picture_in_picture_exit_requested" });
        },
        fullscreenControllerRef: f,
        getCurrentExposedState: function () {
          return d(h.getCurrentState());
        },
        getCurrentIsDesktopPictureInPicture: function () {
          var a;
          return (a =
            h.getCurrentState().controlledState.isDesktopPictureInPicture) !=
            null
            ? a
            : !1;
        },
        getCurrentIsFullscreen: function () {
          var a = f.current;
          return a ? a.getIsFullscreen() : !1;
        },
        getCurrentLiveRewindPlayheadPosition: function () {
          var a = h.getCurrentState();
          a = a.controlledState;
          var b = a.isLiveRewindActive,
            c = a.seekableRanges;
          a = a.seekTargetPosition;
          if (!b || a == null) return null;
          c = (b = c == null ? void 0 : c.end(0)) != null ? b : 0;
          return a - c;
        },
        getCurrentPlayheadPosition: function () {
          var a,
            b = 0;
          return (a =
            (a = c("gkx")("3464")
              ? (a = j.current) == null
                ? void 0
                : a.getPlayheadPosition()
              : void 0) != null
              ? a
              : h.getCurrentState().uncontrolledState
                  .videoElementPlayheadPosition) != null
            ? a
            : b;
        },
        internal_getCurrentStateMachineState: function () {
          return h.getCurrentState();
        },
        loggerAPI: a,
        overridePlayerFormatImpl: function (a) {
          h.dispatch({
            payload: { playerFormat: a },
            type: "controller_override_player_format",
          });
        },
        pauseImpl: function (a) {
          h.dispatch({
            payload: { reason: a },
            type: "controller_pause_requested",
          });
        },
        playImpl: function (a) {
          h.dispatch({
            payload: { reason: a },
            type: "controller_play_requested",
          });
        },
        registerEmsgObserverImpl: function (a) {
          h.dispatch({ payload: { token: a }, type: "register_emsg_observer" });
        },
        requestPictureInPictureImpl: function () {
          h.dispatch({ type: "controller_picture_in_picture_requested" });
        },
        scrubBeginImpl: function () {
          h.dispatch({ type: "controller_scrub_begin_requested" });
        },
        scrubEndImpl: function (a) {
          h.dispatch({
            payload: { seekTargetPosition: a },
            type: "controller_scrub_end_requested",
          });
        },
        seekImpl: function (a) {
          h.dispatch({
            payload: { seekTargetPosition: a },
            type: "controller_seek_requested",
          });
        },
        selectAudioTrackIDImpl: function (a) {
          h.dispatch({
            payload: { selectedAudioTrackID: a },
            type: "controller_audio_track_requested",
          });
        },
        selectVideoQualityImpl: function (a) {
          h.dispatch({
            payload: { selectedVideoQuality: a },
            type: "controller_quality_requested",
          });
        },
        setCaptionsDisplayStyleImpl: function (a) {
          h.dispatch({
            payload: { captionDisplayStyle: a },
            type: "controller_set_caption_display_style_requested",
          });
        },
        setCaptionsUrlImpl: function (a) {
          h.dispatch({
            payload: { captionsUrl: a },
            type: "controller_set_captions_url_requested",
          });
        },
        setCaptionsVisibleImpl: function (a) {
          h.dispatch({
            payload: { captionsVisible: a },
            type: "controller_set_captions_visible_requested",
          });
        },
        setIsLiveRewindActiveImpl: function (a) {
          h.dispatch({
            payload: { isLiveRewindActive: a },
            type: "controller_set_is_live_rewind_active_requested",
          });
        },
        setLatencyLevelImpl: function (a) {
          h.dispatch({
            payload: { latencyLevel: a },
            type: "controller_set_latency_level_requested",
          });
        },
        setMutedImpl: function (a, b) {
          h.dispatch({
            payload: { muted: a, reason: b },
            type: "controller_muted_requested",
          });
        },
        setPictureInPictureStateImpl: function (a) {
          h.dispatch({
            payload: { isInPictureInPictureMode: a },
            type: "controller_set_picture_in_picture_state_requested",
          });
        },
        setPlaybackRateImpl: function (a) {
          h.dispatch({
            payload: { playbackRate: a },
            type: "controller_set_playback_rate",
          });
        },
        setVolumeImpl: function (a) {
          h.dispatch({
            payload: { volume: a },
            type: "controller_volume_requested",
          });
        },
        subscribers: i,
        unregisterEmsgObserverImpl: function (a) {
          h.dispatch({
            payload: { token: a },
            type: "unregister_emsg_observer",
          });
        },
        videoElementAPIRef: j,
      });
    }
    function o(a) {
      a = a.current;
      if (a == null)
        throw c("unrecoverableViolation")(
          "Attempted to access VideoElementAPI while it is not available.",
          "comet_video_player"
        );
      return a;
    }
    function p(a) {
      var c = a.alwaysShowCaptions,
        e = a.areCaptionsAutogenerated,
        f = a.captionDisplayStyle,
        g = a.captionsControllerRef,
        h = a.debugLogId,
        i = a.dimensions,
        j = a.engineExtrasAPI,
        k = a.engineMetadata,
        l = a.fullscreenControllerRef,
        m = a.handleFatalError,
        n = a.handleStateMachine,
        p = a.videoElementAPIRef,
        r = a.videoLiveTraceRef,
        s = a.videoPlayerPassiveViewabilityInfoRef;
      function t(a) {
        d(
          "VideoPlayerImplementationStateMachineHostCallQueue"
        ).applyOrQueueHostCall({
          engineExtrasAPI: j,
          hostCall: a,
          machine: v,
          videoElementAPI: p.current,
        });
      }
      var u = null;
      a = [
        function (a, c, d) {
          b("cr:683059") &&
          d.type === "implementation_host_call_applied" &&
          d.payload.hostCall.type === "host_call_play" &&
          c.controlledState.lastPlayReason === "autoplay_initiated"
            ? b("cr:683059").addFirstMarkerPoint("firstVideoAutoplayStalling")
            : b("cr:683059") &&
              c.controlledState.playbackState !==
                a.controlledState.playbackState &&
              c.controlledState.playbackState === "playing" &&
              c.controlledState.lastPlayReason === "autoplay_initiated" &&
              b("cr:683059").addFirstMarkerPoint("firstVideoAutoplayPlaying");
          return !0;
        },
        function (a, b, c) {
          n(a, b, c);
          return !0;
        },
        function (a, b, c) {
          return !0;
        },
        function (a, b, c) {
          if (
            (a.controlledState.bufferingDetected === !1 &&
              b.controlledState.bufferingDetected === !0) ||
            (a.controlledState.bufferingDetected === !0 &&
              b.controlledState.bufferingDetected === !1)
          )
            if (b.controlledState.bufferingDetected) {
              a =
                (c = b.controlledState.lastBufferingType) != null
                  ? c
                  : "in_play";
              c = j.getPerfLoggerProvider();
              u = c
                ? c
                    .getOperationLogger("buffering")
                    .setState("buffering")
                    .setType(a)
                    .start()
                : null;
            } else
              !b.controlledState.bufferingDetected &&
                u != null &&
                (u.log(), (u = null));
          return !0;
        },
        function (a, b, c) {
          return c.type !== "implementation_engine_destroy_requested" ? !0 : !1;
        },
        function (a, b, c) {
          if (c.type !== "implementation_engine_initialized") return !0;
          a = o(p);
          c = c.type;
          d(
            "VideoPlayerImplementationStateMachineHostCallQueue"
          ).flushHostCallQueue({
            engineExtrasAPI: j,
            machine: v,
            reason: c,
            state: b,
            videoElementAPI: a,
          });
          return !1;
        },
        function (a, b, c) {
          if (c.type !== "dom_event_ended") return !0;
          a = b.controlledState;
          ((a.loopCount > 0 && a.loopCurrent < a.loopCount) ||
            a.loopCount === -1) &&
            v.dispatch({
              payload: { reason: "loop_initiated" },
              type: "controller_play_requested",
            });
          return !1;
        },
        function (a, b, c) {
          if (c.type !== "controller_pause_requested") return !0;
          a = b.controlledState.playbackState;
          if (a !== "paused") return !1;
          t({
            payload: {
              hostCallID: d(
                "VideoPlayerImplementationStateMachineHostCallQueue"
              ).makeHostCallID(),
              reason: c.type,
            },
            type: "host_call_pause",
          });
          return !1;
        },
        function (a, b, c) {
          if (c.type !== "controller_play_requested") return !0;
          a = b.controlledState.playbackState;
          if (a !== "stalling") return !1;
          t({
            payload: {
              hostCallID: d(
                "VideoPlayerImplementationStateMachineHostCallQueue"
              ).makeHostCallID(),
              reason: c.type,
            },
            type: "host_call_play",
          });
          return !1;
        },
        function (a, b, c) {
          if (c.type !== "controller_seek_requested") return !0;
          a = b.controlledState;
          b = a.seeking;
          a = a.seekTargetPosition;
          b &&
            a != null &&
            t({
              payload: {
                currentTime: a,
                hostCallID: d(
                  "VideoPlayerImplementationStateMachineHostCallQueue"
                ).makeHostCallID(),
                reason: c.type,
              },
              type: "host_call_set_current_time",
            });
          return !1;
        },
        function (a, b, c) {
          if (c.type !== "controller_muted_requested") return !0;
          a = b.controlledState.muted;
          if (a !== c.payload.muted) return !1;
          t({
            payload: {
              hostCallID: d(
                "VideoPlayerImplementationStateMachineHostCallQueue"
              ).makeHostCallID(),
              muted: a,
              reason: c.type,
            },
            type: "host_call_set_muted",
          });
          return !1;
        },
        function (a, b, c) {
          if (c.type !== "controller_scrub_begin_requested") return !0;
          t({
            payload: {
              hostCallID: d(
                "VideoPlayerImplementationStateMachineHostCallQueue"
              ).makeHostCallID(),
              playbackRate: 0,
              reason: c.type,
            },
            type: "host_call_set_playback_rate",
          });
          return !1;
        },
        function (a, b, c) {
          if (c.type !== "controller_scrub_end_requested") return !0;
          a = b.controlledState;
          b = a.seeking;
          var e = a.seekTargetPosition;
          a = a.targetPlaybackRate;
          b && e != null
            ? (t({
                payload: {
                  hostCallID: d(
                    "VideoPlayerImplementationStateMachineHostCallQueue"
                  ).makeHostCallID(),
                  playbackRate: a,
                  reason: c.type + ":seek",
                },
                type: "host_call_set_playback_rate",
              }),
              t({
                payload: {
                  currentTime: e,
                  hostCallID: d(
                    "VideoPlayerImplementationStateMachineHostCallQueue"
                  ).makeHostCallID(),
                  reason: c.type + ":seek",
                },
                type: "host_call_set_current_time",
              }))
            : t({
                payload: {
                  hostCallID: d(
                    "VideoPlayerImplementationStateMachineHostCallQueue"
                  ).makeHostCallID(),
                  playbackRate: a,
                  reason: c.type + ":cancel",
                },
                type: "host_call_set_playback_rate",
              });
          return !1;
        },
        function (a, b, c) {
          if (c.type !== "buffering_begin_requested") return !0;
          t({
            payload: {
              hostCallID: d(
                "VideoPlayerImplementationStateMachineHostCallQueue"
              ).makeHostCallID(),
              playbackRate: 0,
              reason: c.type,
            },
            type: "host_call_set_playback_rate",
          });
          return !1;
        },
        function (a, b, c) {
          if (c.type !== "controller_set_playback_rate") return !0;
          t({
            payload: {
              hostCallID: d(
                "VideoPlayerImplementationStateMachineHostCallQueue"
              ).makeHostCallID(),
              playbackRate: c.payload.playbackRate,
              reason: c.type,
            },
            type: "host_call_set_playback_rate",
          });
          return !1;
        },
        function (a, b, c) {
          if (c.type !== "buffering_end_requested") return !0;
          t({
            payload: {
              hostCallID: d(
                "VideoPlayerImplementationStateMachineHostCallQueue"
              ).makeHostCallID(),
              playbackRate: b.controlledState.targetPlaybackRate,
              reason: c.type,
            },
            type: "host_call_set_playback_rate",
          });
          return !1;
        },
        function (a, b, c) {
          if (c.type !== "controller_volume_requested") return !0;
          t({
            payload: {
              hostCallID: d(
                "VideoPlayerImplementationStateMachineHostCallQueue"
              ).makeHostCallID(),
              reason: c.type,
              volume: b.controlledState.volume,
            },
            type: "host_call_set_volume",
          });
          return !1;
        },
        function (a, b, c) {
          if (c.type !== "controller_audio_track_requested") return !0;
          t({
            payload: {
              hostCallID: d(
                "VideoPlayerImplementationStateMachineHostCallQueue"
              ).makeHostCallID(),
              reason: c.type,
              selectedAudioTrackID: b.controlledState.selectedAudioTrackID,
            },
            type: "host_call_set_audio_track",
          });
          return !1;
        },
        function (a, b, c) {
          if (c.type !== "controller_quality_requested") return !0;
          t({
            payload: {
              hostCallID: d(
                "VideoPlayerImplementationStateMachineHostCallQueue"
              ).makeHostCallID(),
              reason: c.type,
              selectedVideoQuality: b.controlledState.selectedVideoQuality,
            },
            type: "host_call_set_video_quality",
          });
          return !1;
        },
        function (a, b, c) {
          if (
            !(
              c.type === "controller_set_latency_level_requested" ||
              c.type === "implementation_set_latency_level_requested"
            )
          )
            return !0;
          t({
            payload: {
              hostCallID: d(
                "VideoPlayerImplementationStateMachineHostCallQueue"
              ).makeHostCallID(),
              latencyLevel: c.payload.latencyLevel,
              reason: c.type,
            },
            type: "host_call_set_latency_level",
          });
          return !1;
        },
        function (a, b, c) {
          if (
            !(c.type === "dom_event_timeupdate" || c.type === "captions_loaded")
          )
            return !0;
          c = g.current;
          var e = b.controlledState.captionsVisible,
            f = p.current;
          f = f ? f.getPlayheadPosition() : 0;
          if (
            d("PlaybackSpeedExperiments").enableCometPlaybackSpeedControl() &&
            b.controlledState.isLiveRewindActive
          ) {
            var h = b.controlledState.seekableRanges;
            h = h != null ? ((h = h.end(h.length() - 1)) != null ? h : 0) : 0;
            f >= h &&
              v.dispatch({
                payload: { isLiveRewindActive: !1 },
                type: "controller_set_is_live_rewind_active_requested",
              });
          }
          if (
            !j.getRepresentationCaptionsExpectedFromManifest() &&
            c &&
            e &&
            b.controlledState.captionsLoaded
          ) {
            h = c.handleTimeUpdate(f);
            e = c.getCaptionFormat();
            b = a.controlledState.activeCaptions;
            c = a.controlledState.captionFormat;
            e !== c &&
              v.dispatch({
                payload: { captionFormat: e },
                type: "controller_set_caption_format_requested",
              });
            q(b, h) &&
              v.dispatch({
                payload: { activeCaptions: h, captionsLocale: null },
                type: "controller_set_active_captions_requested",
              });
          }
          a = r.current;
          a != null && a.onUpdateStatus({ position: f });
          return !1;
        },
        function (a, b, c) {
          if (c.type !== "cea608_bytes_received") return !0;
          a = g.current;
          if (a) {
            b = c.payload;
            c = b.timescale;
            b = b.videoBytes;
            a.handleCea608BytesReceived({ timescale: c, videoBytes: b });
          }
          return !1;
        },
        function (a, b, c) {
          if (c.type !== "controller_set_captions_url_requested") return !0;
          a = g.current;
          if (a) {
            b = c.payload.captionsUrl;
            a.updateCaptionsUrl(b);
          }
          return !1;
        },
        function (a, b, c) {
          if (c.type !== "controller_set_is_live_rewind_active_requested")
            return !0;
          j.setEnableLiveheadCatchup(!c.payload.isLiveRewindActive);
          !!d("PlaybackSpeedExperiments").enableCometPlaybackSpeedControl() &&
            !c.payload.isLiveRewindActive &&
            v.dispatch({
              payload: { playbackRate: 1 },
              type: "controller_set_playback_rate",
            });
          return !1;
        },
        function (a, b, c) {
          if (c.type !== "controller_picture_in_picture_requested") return !0;
          t({
            payload: {
              hostCallID: d(
                "VideoPlayerImplementationStateMachineHostCallQueue"
              ).makeHostCallID(),
              reason: c.type,
            },
            type: "host_call_picture_in_picture",
          });
          return !1;
        },
        function (a, b, c) {
          if (c.type !== "controller_picture_in_picture_exit_requested")
            return !0;
          t({
            payload: {
              hostCallID: d(
                "VideoPlayerImplementationStateMachineHostCallQueue"
              ).makeHostCallID(),
              reason: c.type,
            },
            type: "host_call_exit_picture_in_picture",
          });
          return !1;
        },
      ];
      var v = d(
        "VideoPlayerImplementationStateMachine"
      ).createVideoPlayerImplementationStateMachineWithStateTransitionHandlers({
        collectUncontrolledState: function () {
          var a = p.current;
          return d(
            "VideoPlayerImplementationStateMachineStateUncontrolledState"
          ).createVideoPlayerImplementationStateMachineStateUncontrolledState({
            engineExtrasAPI: j,
            fullscreenControllerRef: l,
            videoElementAPI: a,
            videoLiveTraceRef: r,
            videoPlayerPassiveViewabilityInfoRef: s,
          });
        },
        debugLogId: h,
        initialState: d(
          "VideoPlayerImplementationStateMachineState"
        ).createVideoPlayerImplementationStateMachineInitialState({
          alwaysShowCaptions: c,
          areCaptionsAutogenerated: e,
          captionDisplayStyle: f,
          dimensions: i,
          isAbrEnabled: k.isAbrEnabled,
          playerImplementationName: k.playerImplementationName,
          playerVersion: k.playerVersion,
          streamingFormat: k.streamingFormat,
        }),
        onFatalError: m,
        stateTransitionHandlers: a,
      });
      return v;
    }
    function q(a, b) {
      if (a === null && b === null) return !1;
      if (a === null || b === null) return !0;
      var c = (b = b.rows) != null ? b : [];
      a = (b = a.rows) != null ? b : [];
      return (
        a.length !== c.length ||
        a.some(function (a, b) {
          return a !== c[b];
        })
      );
    }
    function r(a, b, c, d) {
      a !== b.current &&
        (c.current && (c.current.remove(), (c.current = null)),
        (b.current = a)),
        b.current &&
          !c.current &&
          (c.current = b.current.subscribe(function () {
            d.dispatch({ type: "notify_fullscreen_changed" });
          }));
    }
    function s(a, b, c, d) {
      a !== b.current &&
        (c.current && (c.current.remove(), (c.current = null)),
        (b.current = a)),
        b.current &&
          !c.current &&
          (c.current = b.current.subscribe(function () {
            d.dispatch({ type: "notify_viewability_changed" });
          }));
    }
    function t(a) {
      var b = a.engineMetadata;
      a = a.state;
      var c = a.controlledState,
        d = c.activeCaptions,
        e = c.activeEmsgBoxes,
        f = c.availableAudioTracks,
        g = c.availableQualities,
        h = c.captionDisplayStyle,
        i = c.captionsLoaded,
        j = c.captionsVisible,
        k = c.error,
        l = c.hasPlayEverBeenRequested,
        m = c.implementationSeekSourcePosition,
        n = c.inbandCaptionsAutogenerated,
        o = c.isDesktopPictureInPicture,
        p = c.isLiveRewindActive,
        q = c.lastMuteReason,
        r = c.lastPauseReason,
        s = c.lastPlayedTimeMs,
        t = c.lastPlayReason,
        u = c.latencyLevel,
        v = c.loopCount,
        w = c.loopCurrent,
        x = c.muted,
        y = c.overriddenPlayerFormat,
        z = c.playbackState,
        A = c.seekableRanges,
        B = c.seeking,
        C = c.seekTargetPosition,
        D = c.selectedAudioTrackID,
        E = c.selectedVideoQuality,
        F = c.streamInterrupted,
        G = c.targetPlaybackRate,
        H = c.targetVideoQuality,
        I = c.ullIneligibilityReason,
        J = c.videoProjection,
        K = c.volume;
      c = c.watchTimeMs;
      var L = a.uncontrolledState,
        M = L.currentPlayingAudioTrackID,
        N = L.currentPlayingVideoQuality,
        O = L.isDRM,
        P = L.isFullscreen,
        Q = L.videoElementDuration,
        R = L.videoElementLastBufferEndPosition;
      L = L.videoRepresentationID;
      var S = z === "ended",
        T = z === "paused" || S,
        U = z === "playing",
        V = z === "inPlayStalling";
      z = z === "stalling" || V;
      i = {
        activeCaptions: d,
        activeEmsgBoxes: e,
        availableAudioTracks: f,
        availableVideoQualities: g,
        bufferEnd: (d = R) != null ? d : 0,
        captionDisplayStyle: h,
        captionsLoaded: i,
        captionsVisible: j,
        currentAudioTrackID: (e = M) != null ? e : null,
        currentVideoQuality: (f = N) != null ? f : "",
        duration: (g = Q) != null ? g : 0,
        ended: S,
        error: k,
        hasPlayEverBeenRequested: l,
        inbandCaptionsAutogenerated: n,
        inPlayStalling: V,
        isAbrEnabled: b.isAbrEnabled,
        isDesktopPictureInPicture: (R = o) != null ? R : !1,
        isDRM: (d = O) != null ? d : null,
        isExternalMedia: b.isExternalMedia,
        isFullscreen: (h = P) != null ? h : !1,
        isLiveRewindActive: p,
        lastMuteReason: q,
        lastPauseReason: r,
        lastPlayedTimeMs: s,
        lastPlayReason: t,
        latencyLevel: u,
        loopCount: v,
        loopCurrent: w,
        muted: x,
        overriddenPlayerFormat: y,
        paused: T,
        playerImplementationName: a.playerImplementationName,
        playerVersion: a.playerVersion,
        playing: U,
        seekableRanges: A,
        seeking: B,
        seekSourcePosition: m,
        seekTargetPosition: C,
        selectedAudioTrackID: D,
        selectedVideoQuality: E,
        stalling: z,
        streamInterrupted: F,
        targetPlaybackRate: G,
        targetVideoQuality: H,
        ullIneligibilityReason: I,
        videoProjection: J,
        videoRepresentationID: L,
        volume: K,
        watchTimeMs: c,
      };
      return i;
    }
    function a(a) {
      var e = a.checkInDOM,
        f = a.createDebugAPI,
        g = a.createVideoPlayerError,
        h = a.debugLog,
        i = a.debugLogId,
        j = a.destroyEngineParts,
        k = a.engineExtrasAPI,
        l = a.engineMetadata,
        m = a.handleFatalError,
        o = a.handleVideoElementMounted,
        q = a.handleVideoElementUnmounted,
        u = a.handleVideoInfoChange,
        v = a.initialProps,
        w = a.setExposedStateInReact,
        x = v.loggingMetaData.instanceKey;
      h = v.loggingMetaData.coreVideoPlayerMetaData;
      a = h.broadcastId;
      var y = h.isLiveStreaming;
      h = h.isLiveTraceEnabled;
      var z = {
          current:
            Boolean(y) && Boolean(h) && a != null
              ? new (c("VideoLiveTrace"))(a, x, c("CurrentUser").getAccountID())
              : null,
        },
        A = d(
          "VideoPlayerImplementationStateMachineLogger"
        ).createVideoPlayerImplementationStateMachineLogger({
          debugLogId: i,
          initialLoggingMetaData: v.loggingMetaData,
          videoLiveTraceRef: z,
        }),
        B = b("cr:4081")
          ? d(
              "MediaPlaybackCompoundEventStateMachineLogger"
            ).createMediaPlaybackCompoundEventStateMachineLogger({
              debugLogId: i,
              initialLoggingMetaData: v.loggingMetaData,
            })
          : null,
        C = b("cr:4081") && B ? new (b("cr:4081"))(B) : null,
        D = new (c("VideoPlayerBanzaiLogFlusher"))(A),
        E = {
          current: (y = v.videoPlayerPassiveViewabilityInfo) != null ? y : null,
        },
        F = { current: (h = v.fullscreenController) != null ? h : null },
        G = { current: null };
      a = d(
        "useConcurrentAutoplayManagementAPI"
      ).createConcurrentAutoplayManagementAPI();
      var H = [],
        I = function () {
          H.forEach(function (a) {
            a();
          }),
            v.disableLogging
              ? (D.discardLogsWithoutFlushing(),
                b("cr:4081") &&
                  (C == null ? void 0 : C.discardLogsWithoutFlushing()))
              : (D.flushLogs(), C == null ? void 0 : C.flushLogs());
        },
        J = { current: v.onExposedStateChanged },
        K = { current: null },
        L = null,
        M = {
          current: {
            inbandCaptionsAutogeneratedFromManifest: !1,
            inbandCaptionsExpectedFromManifest: !1,
            inbandCaptionsExpectedFromProps: v.inbandCaptionsExpected,
            representationCaptionsExpectedFromManifest: !1,
            sideLoadCaptionsExpectedFromProps: v.sideLoadCaptionsExpected,
            sideLoadCaptionsUrlFromProps:
              (y = v.captionsUrl) != null ? y : null,
          },
        },
        N = { current: null },
        O = { current: null },
        P = new (c("SubscriptionsHandler"))(),
        Q = new (c("SubscriptionsHandler"))(),
        R = "before_mounted";
      function S(a) {
        if (c("gkx")("2617"))
          return (
            a.controlledState.mountState === "mounted_onscreen" ||
            a.controlledState.mountState === "mounted_offscreen"
          );
        else return R === "mounted";
      }
      var T = { current: null },
        U = function (a) {
          a = t({ engineMetadata: l, state: a });
          return a;
        },
        V = { current: null },
        W = { current: null },
        aa = function (a) {
          if (S(a)) {
            if (a === V.current) return;
            var b = U(a);
            if (W.current != null && c("deepEquals")(W.current, b)) return;
            V.current = a;
            W.current = b;
            w(b);
            a = J.current;
            a &&
              a({
                implementationController: na,
                implementationExposedState: b,
              });
          }
        };
      h = function (a, b, c) {
        A.handleStateMachine(a, b, c),
          B == null ? void 0 : B.handleStateMachine(a, b, c),
          aa(b),
          I();
      };
      var X = function (a, b) {};
      y = function (a) {
        X(a, "state_machine_fatal_error");
      };
      var Y = p({
          alwaysShowCaptions: Boolean(v.alwaysShowCaptions),
          areCaptionsAutogenerated: Boolean(v.areCaptionsAutogenerated),
          captionDisplayStyle: v.captionDisplayStyle,
          captionsControllerRef: G,
          debugLogId: i,
          dimensions: v.dimensions,
          engineExtrasAPI: k,
          engineMetadata: l,
          fullscreenControllerRef: F,
          handleFatalError: y,
          handleStateMachine: h,
          videoElementAPIRef: T,
          videoLiveTraceRef: z,
          videoPlayerPassiveViewabilityInfoRef: E,
        }),
        ba = !1,
        Z = function (a) {
          var b = K.current != null,
            d = T.current != null;
          P.release();
          Y.dispatch({
            payload: {
              reason: a,
              videoElementAPIExisted: d,
              videoElementExisted: b,
            },
            type: "implementation_engine_destroy_requested",
          });
          try {
            ba || ((ba = !0), j(["destroyEngine(" + a + ")"]));
          } catch (g) {
            try {
              var e = c("FBLogger")("comet_video_player").catching(g),
                f = v.videoFBID;
              f != null && (e = e.addMetadata("COMET_VIDEO", "VIDEO_ID", f));
              e = e.addMetadata(
                "COMET_VIDEO",
                "VIDEO_IMPLEMENTATION_DEBUG_DATA",
                JSON.stringify({
                  destroy_reason: a,
                  player_instance_key: x,
                  player_version: l.playerVersion,
                  video_element_api_existed: d,
                  video_element_existed: b,
                })
              );
              e.warn("Error thrown by destroyEngineParts: %s", g.message);
            } catch (a) {}
          }
          f = G.current;
          f != null &&
            (Y.getCurrentState().controlledState.captionsLoaded &&
              Y.dispatch({ type: "captions_unloaded" }),
            (G.current = null),
            f.destroy());
          r(null, F, N, Y);
          s(null, E, O, Y);
          Y.dispatch({
            payload: {
              reason: a,
              videoElementAPIExisted: d,
              videoElementExisted: b,
            },
            type: "implementation_engine_destroyed",
          });
        };
      X = function (a, b) {
        a = g(a, b);
        Y.dispatch({
          payload: { fatalError: a },
          type: "implementation_fatal_error",
        });
        Z("implementation_fatal_error");
        m(a);
      };
      function ca(a) {
        return (
          a.sideLoadCaptionsExpectedFromProps &&
          a.sideLoadCaptionsUrlFromProps !== null
        );
      }
      function da(a) {
        return (
          a.inbandCaptionsExpectedFromProps &&
          ((a = a.inbandCaptionsExpectedFromManifest) != null ? a : !1)
        );
      }
      function ea(a) {
        return (a = a.inbandCaptionsAutogeneratedFromManifest) != null ? a : !1;
      }
      var fa = function (a) {
          var b = ca(a),
            c = da(a),
            e = ea(a),
            f = G.current;
          e !== ea(M.current) &&
            Y.dispatch({
              payload: { inbandCaptionsAutogenerated: e },
              type: "inband_captions_autogenerated_changed",
            });
          f != null
            ? c !== da(M.current) &&
              (f.updateInbandCaptionsExpected(c),
              !c &&
                Y.getCurrentState().controlledState.captionsLoaded &&
                Y.dispatch({ type: "captions_unloaded" }))
            : (b || c) &&
              f == null &&
              (G.current = d(
                "VideoPlayerCaptionsController"
              ).createCaptionsController({
                captionsUrl: b ? a.sideLoadCaptionsUrlFromProps : null,
                inbandCaptionsExpected: c,
                onCaptionsLoaded: function () {
                  Y.getCurrentState().controlledState.captionsLoaded ||
                    Y.dispatch({ type: "captions_loaded" });
                },
              }));
          M.current = a;
        },
        ga = function (a) {
          k != null &&
            a &&
            a.width > 0 &&
            a.height > 0 &&
            (k.setDimensions(a),
            Y.dispatch({
              payload: { dimensions: { height: a.height, width: a.width } },
              type: "player_dimensions_changed",
            }));
        },
        ha = function (a) {
          a !== Y.getCurrentState().controlledState.loopCount &&
            Y.dispatch({
              payload: { loopCount: a },
              type: "loop_count_change_requested",
            });
        },
        ia = function (a) {
          "srcObject" in a && (a.srcObject = null),
            a.removeAttribute("src"),
            Q.release(),
            Q.engage();
        },
        ja = function (a, e) {
          if (K.current === a) return;
          a != null &&
            K.current != null &&
            K.current !== a &&
            c("recoverableViolation")(
              "The video element was recreated",
              "comet_video_player"
            );
          L != null && L();
          var f = K.current;
          f && ia(f);
          K.current = a;
          b("cr:506") != null && a != null && (L = b("cr:506")(a, i));
          a != null &&
            Q.addSubscriptions(
              c("CometEventListener").listen(
                a,
                "enterpictureinpicture",
                function () {
                  var a = d(
                    "CometVideoPictureInPictureManagerContext"
                  ).isInPictureInPictureExp();
                  a &&
                    Y.dispatch({
                      payload: { isInPictureInPictureMode: !0 },
                      type: "controller_set_picture_in_picture_state_requested",
                    });
                }
              ),
              c("CometEventListener").listen(
                a,
                "leavepictureinpicture",
                function () {
                  var a = d(
                    "CometVideoPictureInPictureManagerContext"
                  ).isInPictureInPictureExp();
                  a &&
                    Y.dispatch({
                      payload: { isInPictureInPictureMode: !1 },
                      type: "controller_set_picture_in_picture_state_requested",
                    });
                }
              )
            );
          K.current != null
            ? (Y.dispatch({ type: "implementation_video_node_mounted" }),
              o([].concat(e, ["handleVideoElement(non-null)"])))
            : (Y.dispatch({ type: "implementation_video_node_unmounted" }),
              q([].concat(e, ["handleVideoElement(null)"])));
        };
      y = v.loggingMetaData.instanceKey;
      h = function (a) {
        var b;
        J.current = a.onExposedStateChanged;
        if (!S(Y.getCurrentState())) return;
        r((b = a.fullscreenController) != null ? b : null, F, N, Y);
        s(
          (b = a.videoPlayerPassiveViewabilityInfo) != null ? b : null,
          E,
          O,
          Y
        );
        if (!u(a)) {
          b = {
            inbandCaptionsAutogeneratedFromManifest:
              M.current.inbandCaptionsAutogeneratedFromManifest,
            inbandCaptionsExpectedFromManifest:
              M.current.inbandCaptionsExpectedFromManifest,
            inbandCaptionsExpectedFromProps: a.inbandCaptionsExpected,
            representationCaptionsExpectedFromManifest:
              M.current.representationCaptionsExpectedFromManifest,
            sideLoadCaptionsExpectedFromProps: a.sideLoadCaptionsExpected,
            sideLoadCaptionsUrlFromProps:
              (b = a.captionsUrl) != null ? b : null,
          };
          fa(b);
          ga(a.dimensions);
          ha((b = a.loopCount) != null ? b : 0);
        }
        Y.dispatch({
          payload: { loggingMetaData: a.loggingMetaData },
          type: "notify_logging_metadata_change",
        });
      };
      var $ = null;
      y = function () {
        var a = Y.getCurrentState().controlledState.mountState;
        switch (a) {
          case "before_mounted":
            P.addSubscriptions(
              d("RunComet").onUnload(function () {
                Z("page_unload");
              })
            );
            Y.dispatch({ type: "implementation_mounted" });
            o(["handleReactEffectInit(before_mounted)"]);
            break;
          case "mounted_onscreen":
            break;
          case "mounted_offscreen":
            c("clearTimeout")($);
            $ = null;
            Y.dispatch({ type: "implementation_onscreen" });
            break;
          case "unmounted":
            break;
          default:
            a;
        }
      };
      var ka = function () {
          var a = function a() {
              c("clearTimeout")($);
              $ = null;
              if (
                Y.getCurrentState().controlledState.mountState === "unmounted"
              )
                return;
              var b = e();
              !b
                ? (Y.dispatch({
                    payload: { reason: "react_effect_cleanup" },
                    type: "implementation_unmounted",
                  }),
                  Z("implementation_unmounted:react_effect_cleanup"))
                : ($ = c("setTimeout")(a, 1e3));
            },
            b = Y.getCurrentState().controlledState.mountState;
          switch (b) {
            case "before_mounted":
              break;
            case "mounted_onscreen":
              Y.dispatch({ type: "implementation_offscreen" });
              a();
              break;
            case "mounted_offscreen":
              a();
              break;
            case "unmounted":
              break;
          }
        },
        la = function () {
          S(Y.getCurrentState()) ||
            ((R = "mounted"),
            P.addSubscriptions(
              d("RunComet").onUnload(function () {
                Z("page_unload");
              })
            ),
            Y.dispatch({ type: "implementation_mounted" }),
            o(["handleReactMount"]));
        },
        ma = function () {
          S(Y.getCurrentState()) &&
            ((R = "unmounted"),
            Y.dispatch({
              payload: { reason: "react_effect_cleanup" },
              type: "implementation_unmounted",
            }),
            Z("implementation_unmounted:react_effect_cleanup"));
        },
        na = n({
          concurrentAutoplayManagementAPI: a,
          createExposedState: U,
          debugAPI: f({
            getVideoElementAPI: function () {
              return T.current;
            },
            logger: A,
          }),
          fullscreenControllerRef: F,
          logger: A,
          machine: Y,
          subscribers: H,
          videoElementAPIRef: T,
        });
      a = d(
        "VideoPlayerImplementationStateMachine"
      ).createReactVideoElementCallbacksForStateMachine(Y, ja);
      f = U(Y.getInitialState());
      ka = {
        handleReactEffectCleanup: c("gkx")("2617") ? ka : ma,
        handleReactEffectInit: c("gkx")("2617") ? y : la,
        handleReactPropsChanged: h,
        implementationController: na,
        initialExposedState: f,
        logFlusher: D,
        machine: Y,
        notifySubscribers: I,
        videoElementCallbacks: a,
        videoElementRefCallback: function (a) {
          ja(a, ["videoElementRefCallback"]);
        },
      };
      return {
        engine: ka,
        getCaptionsInfo: function () {
          return M.current;
        },
        getVideoElement: function () {
          return K.current;
        },
        getVideoLiveTrace: function () {
          return z.current;
        },
        handleCaptionsInfoChange: fa,
        handleFatalImplementationError: X,
        logger: A,
        machine: Y,
        videoElementAPIRef: T,
      };
    }
    function u(a, b) {
      var d,
        e = c("err")(a.errorName + ": " + a.errorDescription);
      e.name = a.errorName;
      e.errorName = a.errorName;
      e.type = "error";
      a.stack != null && a.stack !== "" && (e.stack = a.stack);
      var f = new (c("ErrorMetadata"))();
      f.addEntries(
        ["COMET_VIDEO", "ERROR_LOCATION", a.errorLocation],
        ["COMET_VIDEO", "ERROR_CODE", (d = a.errorCode) != null ? d : ""],
        ["COMET_VIDEO", "ERROR_URL", (d = a.url) != null ? d : ""]
      );
      b != null && f.addEntry("COMET_VIDEO", "VIDEO_ID", b);
      d = a.originalError;
      d != null &&
        (typeof d === "string"
          ? f.addEntry("COMET_VIDEO", "ORIGINAL_ERROR", d)
          : d instanceof Error &&
            d.message != null &&
            f.addEntry("COMET_VIDEO", "ORIGINAL_ERROR", d.message));
      e.metadata = f;
      return e;
    }
    function e(a, d) {
      var e = k(null),
        f = e[0],
        g = e[1];
      e = k(null);
      var l = e[0],
        m = e[1];
      e = a.wrapVideoPixels_EXPERIMENTAL;
      var n = j(a),
        o = j(d),
        p = j(null),
        q = c("useStable")(function () {
          return o.current({
            checkInDOM: function () {
              var a = document.body,
                b = p.current;
              return a != null && b != null && a.contains(b);
            },
            debugLogId: String(n.current.loggingMetaData.instanceKey),
            handleFatalError: function (a) {
              m(a);
            },
            initialProps: n.current,
            setExposedStateInReact: g,
          });
        });
      f = (d = f) != null ? d : q.initialExposedState;
      d = (d = f.error) != null ? d : l;
      if (d != null) {
        if (c("justknobx")._("1328"))
          throw c("unrecoverableViolation")(
            d.errorName + ": " + d.errorDescription,
            "comet_video_player",
            {
              error:
                d.originalError instanceof Error ? d.originalError : void 0,
            }
          );
        l = a.VideoPlayerShakaPerformanceLoggerClass;
        l && (c("gkx")("2007883") || c("qex")._("1655")) && l.flushQueuedLogs();
        throw u(d, n.current.videoFBID);
      }
      i(
        function () {
          q.handleReactEffectInit();
          return function () {
            q.handleReactEffectCleanup();
          };
        },
        [q]
      );
      var r = j(null);
      i(function () {
        a !== r.current && q.handleReactPropsChanged(a), (r.current = a);
      });
      l = c("useSEOLoggedOutWebCrawler")();
      d = a.renderVideoPixelsFit ? a.renderVideoPixelsFit(f) : null;
      l = h.jsx(c("VideoPlayerImplementationReactVideoElement.react"), {
        alt: a.alt,
        implementationExposedState: f,
        poster: a.poster,
        seoWebCrawlerVideoTracks:
          l && a.seoWebCrawlerVideoTracks != null
            ? a.seoWebCrawlerVideoTracks
            : null,
        src: l ? a.seoWebCrawlerLookasideUrl : null,
        videoElementCallbacks: l ? null : q.videoElementCallbacks,
        videoElementPreloadDisabled: a.preloadForProgressiveDisabled,
        videoElementRefCallback: l ? null : q.videoElementRefCallback,
        videoPixelsFit: d,
      });
      var s = a.renderWithExposedState({
        implementationController: q.implementationController,
        implementationExposedState: f,
      });
      e = h.jsxs(h.Fragment, {
        children: [
          c("gkx")("2617")
            ? h.jsx("div", { ref: p, style: { display: "none" } })
            : null,
          b("cr:4596") != null &&
            f.isDRM === !0 &&
            h.jsx(b("cr:4596"), { controller: q.implementationController }),
          e ? e(l) : l,
          h.jsx(c("VideoPlayerVideoPixelsFitContext").Provider, {
            value: d,
            children: s,
          }),
        ],
      });
      return {
        engine: q,
        exposedState: f,
        reactVideoComponents: s,
        reactVideoFrame: l,
        reactVideoFrameAndComponents: e,
      };
    }
    g.internal_createVideoPlayerImplementationControllerImpl = m;
    g.internal_createVideoPlayerImplementationEngineStateMachineWithEffects = p;
    g.internal_createVideoPlayerImplementationExposedStateFromStateMachineState =
      t;
    g.createVideoPlayerImplementationEngine = a;
    g.internal_makeExpandedErrorFromVideoPlayerError = u;
    g.useVideoPlayerImplementationEngine = e;
  },
  98
);
__d(
  "VideoPlayerImplementationEngineVideoElementAPI",
  ["Promise", "VideoPlaybackQuality", "VideoPlayerOzWWWGlobalConfig"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      return isNaN(a) ? 0 : a;
    }
    function i(a) {
      return h(a.duration);
    }
    function j(a) {
      a = a.buffered;
      return a.length > 0 ? a.end(a.length - 1) : 0;
    }
    function k(a) {
      return h(a.currentTime);
    }
    function l(a) {
      return a.buffered.length === 0 ? 0 : a.buffered.start(0);
    }
    function a(a, e) {
      var f = e !== !0,
        g = null,
        h = function (b) {
          f
            ? b == null || b === ""
              ? a.removeAttribute("src")
              : a.setAttribute("src", b)
            : (g = b);
        };
      return {
        exitPictureInPicture: function () {
          window.document.exitPictureInPicture();
        },
        getCanPlayPromise: function () {
          return new (b("Promise"))(function (b, c) {
            a.readyState === 4
              ? b()
              : a.addEventListener("canplay", function () {
                  return b();
                });
          });
        },
        getDOMLoadedMetadataPromise: function () {
          return new (b("Promise"))(function (b, c) {
            a.addEventListener("loadedmetadata", function () {
              return b();
            });
          });
        },
        getDroppedFrameCount: function () {
          return d("VideoPlaybackQuality").getDroppedFrames(a);
        },
        getDuration: function () {
          return i(a);
        },
        getEnded: function () {
          return a.ended;
        },
        getError: function () {
          return a.error;
        },
        getLastBufferEndPosition: function () {
          return j(a);
        },
        getMuted: function () {
          return a.muted;
        },
        getNetworkState: function () {
          return a.networkState;
        },
        getPaused: function () {
          return a.paused;
        },
        getPlaybackRate: function () {
          return a.playbackRate;
        },
        getPlayheadPosition: function () {
          return k(a);
        },
        getReadyState: function () {
          return a.readyState;
        },
        getTotalFrameCount: function () {
          return d("VideoPlaybackQuality").getTotalFrames(a);
        },
        getUnderlyingVideoElement: function () {
          return a;
        },
        getVideoPixelsDimensions: function () {
          if (a.readyState < a.HAVE_CURRENT_DATA) return null;
          var b = a.videoWidth,
            c = a.videoHeight;
          if (b <= 0 || c <= 0) return null;
          var d = a.offsetWidth,
            e = a.offsetHeight;
          if (d <= 0 || e <= 0) return null;
          b = b / c;
          c = d / e;
          c > b ? (d = e * b) : (e = d / b);
          return { height: e, width: d };
        },
        getVolume: function () {
          return a.volume;
        },
        pause: function () {
          a.pause();
        },
        play: function () {
          f || ((f = !0), h(g), (g = null));
          var c = a.play();
          c =
            c && typeof c.then === "function" ? b("Promise").resolve(c) : null;
          return c;
        },
        requestPictureInPicture: function () {
          typeof a.requestPictureInPicture === "function" &&
            a.requestPictureInPicture();
        },
        setDuration: function (b) {
          a.duration = b;
        },
        setMuted: function (b) {
          a.muted = b;
        },
        setPlaybackRate: function (b) {
          a.playbackRate = b;
        },
        setPlayheadPosition: function (b) {
          var d = b;
          if (b === 0) {
            b = c("VideoPlayerOzWWWGlobalConfig").getNumber(
              "clamp_seek_to_first_buffer_range_epsilon",
              0
            );
            if (b > 0) {
              var e = l(a);
              e > 0 && e <= b && (d = e);
            }
          }
          a.currentTime = d;
        },
        setSrc: h,
        setVolume: function (b) {
          a.volume = b;
        },
      };
    }
    g.getDurationFromVideoElement = i;
    g.getLastBufferEndPositionFromVideoElement = j;
    g.getPlayheadPositionFromVideoElement = k;
    g.createVideoPlayerImplementationEngineVideoElementAPI = a;
  },
  98
);
__d(
  "VideoPlayerImplementationLoadSequenceManager",
  ["setTimeout"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a() {
        (this.$1 = []), (this.$2 = []);
      }
      var b = a.prototype;
      b.schedule = function (a, b, d) {
        var e = this,
          f = {
            load: d,
            maximumBlockTimeMs: a.getNumber("load_sequence_max_delay_ms", 0),
            sequence: b,
          },
          g = a.getNumber("load_sequence_only_prioritize_first_count", 0);
        g > 0
          ? (d = !this.$2.find(function (a) {
              return a.sequence < g;
            }))
          : (d = !this.$2.find(function (a) {
              return a.sequence < b;
            }));
        d
          ? this.$3(f)
          : (this.$1.push(f),
            c("setTimeout")(function () {
              return e.$4(f);
            }, f.maximumBlockTimeMs));
        return function () {
          return e.$5(f);
        };
      };
      b.$4 = function (a) {
        var b = this.$1.find(function (b) {
          return b === a;
        });
        b &&
          ((this.$1 = this.$1.filter(function (b) {
            return b !== a;
          })),
          this.$3(b));
      };
      b.$3 = function (a) {
        var b = this;
        this.$2.push(a);
        a.load()
          .then(function () {
            return b.$6(a);
          })
          ["catch"](function (c) {
            b.$6(a);
            throw c;
          });
        c("setTimeout")(function () {
          return b.$6(a);
        }, a.maximumBlockTimeMs);
      };
      b.$7 = function () {
        var a = this,
          b = Math.min.apply(
            Math,
            this.$1.map(function (a) {
              return a.sequence;
            })
          ),
          c = this.$1.filter(function (a) {
            return a.sequence === b;
          });
        c.forEach(function (b) {
          return a.$4(b);
        });
      };
      b.$5 = function (a) {
        this.$1 = this.$1.filter(function (b) {
          return b !== a;
        });
      };
      b.$6 = function (a) {
        if (
          !this.$2.find(function (b) {
            return b === a;
          })
        )
          return;
        this.$2 = this.$2.filter(function (b) {
          return b !== a;
        });
        var b = !!this.$2.find(function (b) {
          return b.sequence === a.sequence;
        });
        b && this.$7();
      };
      return a;
    })();
    b = new a();
    d = b;
    g["default"] = d;
  },
  98
);
__d(
  "handleVideoPlayerLatencyLevelChange",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b, c, d) {
      if (a && b && c) {
        var e = a.getAllContexts().latency_level;
        c = [];
        try {
          c = JSON.parse(
            a.getString("seek_on_latency_level_change_allowed", "[]")
          );
        } catch (a) {}
        c = c.some(function (a) {
          return a.length === 2 && a[0] === e && a[1] === d;
        });
        a.setContext("latency_level", d);
        if (!c) return;
        c = b.getDuration();
        c =
          c != null
            ? c + a.getNumber("live_initial_playback_position", 0)
            : null;
        c != null && b.setPlayheadPosition(c);
      }
    }
    f["default"] = a;
  },
  66
);
__d(
  "VideoPlayerOzImplementationEngineExtrasAPI",
  [
    "VideoPlayerOzWWWGlobalConfig",
    "emptyFunction",
    "gkx",
    "handleVideoPlayerLatencyLevelChange",
    "oz-player/networks/OzBandwidthEstimator",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = c("emptyFunction");
    function h(a) {
      return a.getSelectedVideoQuality();
    }
    function i(a) {
      a = a.getCurrentPlayingAudioTrackID();
      return a == null ? null : a;
    }
    function j(a) {
      a = a.getCurrentVideoRepresentation();
      return a == null ? "" : a.getDisplayLabel();
    }
    function k(a) {
      a = a.getIsVideoQualityAdaptationEnabled()
        ? "auto"
        : a.getSelectedVideoQuality();
      return a;
    }
    function l(a) {
      return a.getSelectedAudioTrackID();
    }
    function m(a) {
      return (a =
        (a = a.getMpd()) == null ? void 0 : a.getCustomField("fbProjection")) !=
        null
        ? a
        : null;
    }
    function n(a, b) {
      var c = k(a);
      if (b === "notselected" || b === c) return !1;
      else if (b === "auto") {
        a.enableVideoQualityAdaptation();
        return !0;
      } else if (b !== a.getSelectedVideoQuality()) {
        c = b;
        a.switchToVideoQuality(c);
        return !0;
      } else return !1;
    }
    function o(a, b) {
      var c = l(a);
      if (b === null || b === c) return !1;
      else {
        c = b;
        a.switchToAudioTrack(c);
        return !0;
      }
    }
    function a(a) {
      var b = a.getConfig,
        d = a.getOzPlayer,
        e = a.getVideoElementAPI;
      a = {
        getApproximateFBLSToPlayerDisplayLatency: function () {
          var a;
          return (a =
            (a = d()) == null
              ? void 0
              : a.getApproximateFBLSToPlayerDisplayLatency()) != null
            ? a
            : null;
        },
        getAudioRepresentationIDAtTime: function (a) {
          var b;
          b = (b = d()) == null ? void 0 : b.getAudioRepresentationIDAtTime(a);
          return (a = b) != null ? a : null;
        },
        getAvailableAudioTracks: function () {
          var a;
          a = (a = d()) == null ? void 0 : a.getAudioTracks();
          if (!a) return [];
          a = a.map(function (a) {
            return {
              displayLabel: a.displayLabel,
              id: a.id,
              lang: a.lang,
              role: a.role,
            };
          });
          return a;
        },
        getAvailableVideoQualities: function () {
          var a;
          return (a = (a = d()) == null ? void 0 : a.getVideoQualities()) !=
            null
            ? a
            : [];
        },
        getCurrentAudioRepresentation: function () {
          var a;
          return (a =
            (a = d()) == null ? void 0 : a.getCurrentAudioRepresentation()) !=
            null
            ? a
            : null;
        },
        getCurrentPlayingAudioTrackID: function () {
          var a = d();
          return a ? i(a) : null;
        },
        getCurrentPlayingVideoQuality: function () {
          var a = d();
          return a ? j(a) : "";
        },
        getCurrentTargetVideoQuality: function () {
          var a = d();
          return a ? h(a) : "";
        },
        getCurrentVideoRepresentation: function () {
          var a;
          return (a =
            (a = d()) == null ? void 0 : a.getCurrentVideoRepresentation()) !=
            null
            ? a
            : null;
        },
        getEstimatedBandwidth: function () {
          return c("oz-player/networks/OzBandwidthEstimator").getBandwidth(
            c("VideoPlayerOzWWWGlobalConfig")
          );
        },
        getInbandCaptionsAutogeneratedFromManifest: function () {
          var a;
          a = (a = d()) == null ? void 0 : a.getMpd();
          return Boolean(
            a == null
              ? void 0
              : a.getCustomField("hasInbandCaptionsFromUsingASRCaptions")
          );
        },
        getInbandCaptionsExpectedFromManifest: function () {
          var a;
          a = (a = d()) == null ? void 0 : a.getMpd();
          return (
            Boolean(
              a == null
                ? void 0
                : a.getCustomField("hasInbandCaptionsFromUsingASRCaptions")
            ) ||
            Boolean(
              a == null
                ? void 0
                : a.getCustomField("hasInbandCaptionsFromAccessibility")
            )
          );
        },
        getManifestIdentifier: function () {
          var a;
          a =
            (a = d()) == null
              ? void 0
              : (a = a.getMpd()) == null
              ? void 0
              : a.getCustomField("fbManifestIdentifier");
          return a != null ? String(a) : null;
        },
        getMpdValidationErrors: function () {
          var a;
          a =
            (a = d()) == null
              ? void 0
              : (a = a.getMpd()) == null
              ? void 0
              : a.getCustomField("validationErrors");
          return a != null ? String(a) : null;
        },
        getPerfLoggerProvider: function () {
          var a = d();
          return a ? a.getPerfLoggerProvider() : null;
        },
        getRepresentationCaptionsExpectedFromManifest: function () {
          var a;
          a = (a = d()) == null ? void 0 : a.getMpd();
          return Boolean(
            a == null
              ? void 0
              : a.getCustomField("hasVTTRepresentationCaptions")
          );
        },
        getStreamType: function () {
          return "dash";
        },
        getUserSelectedAudioTrackID: function () {
          var a = d();
          return a ? l(a) : null;
        },
        getUserSelectedVideoQuality: function () {
          var a = d();
          return a ? k(a) : "";
        },
        getVideoProjectionType: function () {
          var a = d();
          return a != null ? m(a) : null;
        },
        getVideoRepresentationIDAtTime: function (a) {
          var b;
          b = (b = d()) == null ? void 0 : b.getVideoRepresentationIDAtTime(a);
          return (a = b) != null ? a : null;
        },
        getVideoRepresentations: function () {
          var a;
          return (a =
            (a = d()) == null
              ? void 0
              : (a = a.getMpd()) == null
              ? void 0
              : a.getVideoRepresentations()) != null
            ? a
            : null;
        },
        isDrm: function () {
          var a;
          return Boolean((a = d()) == null ? void 0 : a.isDrm());
        },
        isFBIsLiveTemplated: function () {
          var a;
          a = (a = d()) == null ? void 0 : a.getMpd();
          return Boolean(
            a == null ? void 0 : a.getCustomField("isLiveTemplated")
          );
        },
        isFBMS: function () {
          var a;
          a = (a = d()) == null ? void 0 : a.getMpd();
          return Boolean(a == null ? void 0 : a.getCustomField("isFBMS"));
        },
        isFBWasLive: function () {
          var a;
          a = (a = d()) == null ? void 0 : a.getMpd();
          return Boolean(a == null ? void 0 : a.getCustomField("isFBWasLive"));
        },
        isPredictiveDash: function () {
          var a;
          a =
            (a =
              (a = d()) == null
                ? void 0
                : (a = a.getMpd()) == null
                ? void 0
                : a.getVideoRepresentations()[0]) != null
              ? a
              : null;
          return a !== null && a.canPredict();
        },
        setDimensions: function (a) {},
        setEnableLiveheadCatchup: function (a) {
          var b = d();
          b != null && b.setEnableLiveheadCatchup(a);
        },
        setLatencyLevel: function (a) {
          c("handleVideoPlayerLatencyLevelChange")(b(), e(), d(), a);
        },
        setUserSelectedAudioTrackID: function (a) {
          var b = d();
          b != null && o(b, a);
        },
        setUserSelectedVideoQuality: function (a) {
          var b = d();
          b != null && n(b, a);
        },
      };
      return a;
    }
    g.createVideoPlayerOzImplementationEngineExtrasAPI = a;
  },
  98
);
__d(
  "OzBufferVTTCaptionsVisibleStrategy",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a) {
        this.$1 = a;
      }
      var b = a.prototype;
      b.isActive = function () {
        return !this.$1();
      };
      b.getBufferTarget = function () {
        return 0;
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "OzSystemicRiskABRManager",
  [
    "MosUtils",
    "OzSystemicRiskUtils",
    "oz-player/networks/OzBandwidthEstimator",
    "oz-player/utils/OzAbrUtils",
    "oz-player/utils/OzBufferingUtils",
    "oz-player/utils/OzPlaybackRestrictionsUtils",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 6e4,
      i = 2e3,
      j = {
        BANDWIDTH: "br",
        BUFFER: "vb",
        ENCODING: "er",
        LOW_MOS: "lm",
        MULTIPLIER: "m",
        PREVIOUS_MOS: "pm",
        PREVIOUS_RESOLUTION: "pr",
      };
    a = (function () {
      function a(a, b, c, d, e, f, g, h) {
        (this.$11 = !1),
          (this.$1 = a),
          (this.$2 = b),
          (this.$3 = c),
          (this.$4 = d),
          (this.$5 = e),
          (this.$7 = f),
          (this.$8 = g),
          (this.$9 = h);
      }
      var b = a.prototype;
      b.setSourceBuffer = function (a) {
        this.$6 = a;
      };
      b.updateRepresentations = function (a) {
        var b = this;
        this.$3 = a;
        a = this.$3.find(function (a) {
          return a.getDisplayLabel() === b.$2.getDisplayLabel();
        });
        this.$2 = (a = a) != null ? a : this.$3[0];
      };
      b.getBestRepresentation = function (a) {
        var b = this.$1.getLegacyConfig(),
          e = d(
            "oz-player/utils/OzBufferingUtils"
          ).getBufferAheadFromPlaybackStates(this.$6, this.$5),
          f = this.$5.getDuration();
        f = isNaN(f) ? h : f;
        if (this.$3.length === 0) {
          this.$10 = "no available representations";
          return this.$2;
        }
        var g = this.$5.getCurrentTime();
        f = this.$9 === "static" ? (f - g) * 1e3 : h;
        g = this.$8();
        a = b.getBool("systemic_risk_use_fetch_range_duration", !1)
          ? this.$12(a)
          : i;
        var j = b.getBool("use_bandwidth_estimate_from_headers_in_abr", !1)
          ? c(
              "oz-player/networks/OzBandwidthEstimator"
            ).getBandwidthDiagnosticsFromHeaders(b)
          : c(
              "oz-player/networks/OzBandwidthEstimator"
            ).getBandwidthDiagnostics(b);
        if (j == null) {
          this.$10 = "missing bandwidth diagnostics";
          return this.$2;
        }
        var k = this.$13(this.$3).sort(function (a, b) {
            return a.getBandwidth() - b.getBandwidth();
          }),
          l = null,
          m = null,
          n = null;
        for (var o = 0; o < k.length; o++) {
          var p = k[Math.max(o - 1, 0)],
            q = this.$14(p, g);
          p = Math.min(p.getHeight(), p.getWidth());
          m = d("OzSystemicRiskUtils").getRiskFactorsForRepresentation({
            bandwidthDiagnostics: j,
            bitrate: k[o].getBandwidth(),
            bufferAhead: e,
            config: this.$1.getLegacyConfig(),
            hasMadeInitialDecision: this.$11,
            initialRiskFactor: b.getNumber(
              "systemic_risk_abr_initial_risk_factor",
              1
            ),
            lowMosResolution: b.getNumber(
              "systemic_risk_abr_low_mos_resolution",
              0
            ),
            minWatchableMos: b.getNumber(
              "systemic_risk_abr_min_watchable_mos",
              0
            ),
            previousMos: q,
            previousResolution: p,
            remainingVideoDurationMs: f,
            segmentFetchRangeDurationMs: a,
          });
          q = m;
          p = q.multiplier;
          if (isNaN(p)) {
            n = m;
            l = this.$2;
            break;
          }
          q = d("OzSystemicRiskUtils").isEffectiveBitrateBelowBandwidthEstimate(
            k[o].getBandwidth(),
            m.multiplier,
            a,
            j
          );
          if (q) (n = m), (l = k[o]);
          else break;
        }
        l == null
          ? (this.$2 =
              b.getBool("respect_playback_restrictions_in_abr_fallback", !1) &&
              k.length > 0
                ? k[0]
                : this.$3[0])
          : (this.$2 = l);
        this.$15((p = n) != null ? p : m, {
          isSystemicRiskABREnabled: b.getBool("use_systemic_risk_abr", !1),
          noRepresentationSelected: l == null,
          representationCount: k.length,
        });
        this.$11 || (this.$11 = !0);
        return this.$2;
      };
      b.$12 = function (a) {
        var b = i;
        if (a != null && a.length > 0) {
          var c = a[0].getTimeRange().startTime;
          a = a[a.length - 1].getTimeRange().endTime;
          a - c > 0 && (b = (a - c) * 1e3);
        }
        return b;
      };
      b.$14 = function (a, b) {
        a = a.getCustomField("playbackResolutionMos");
        a = d("MosUtils").parsePlaybackMos(String(a));
        return a != null
          ? d("MosUtils").getMosValue(
              a,
              d("MosUtils").getQualityLabel(b.width, b.height)
            )
          : null;
      };
      b.$13 = function (a) {
        var b = this;
        if (
          !this.$1
            .getLegacyConfig()
            .getBool("systemic_risk_abr_apply_representation_restrictions", !1)
        )
          return a;
        var c = this.$1
            .getLegacyConfig()
            .getBool("exclude_large_representations_after_restrictions", !1),
          e = a;
        a = function () {
          e = d("oz-player/utils/OzAbrUtils").excludeLargeRepresentations(
            b.$1,
            e,
            b.$8(),
            b.$7
          );
        };
        var f = function () {
          e = d(
            "oz-player/utils/OzPlaybackRestrictionsUtils"
          ).applyVideoPlaybackRestrictions(b.$1, b.$4, b.$8(), e);
        };
        c || (a(), f());
        c && (f(), a());
        return e;
      };
      b.$15 = function (a, b) {
        if (a == null) return;
        var c = b.isSystemicRiskABREnabled,
          d = b.noRepresentationSelected;
        b = b.representationCount;
        this.$10 = [
          [j.LOW_MOS, a.lowMos],
          [j.ENCODING, a.encoding],
          [j.BANDWIDTH, a.bandwidth],
          [j.MULTIPLIER, a.multiplier],
          [j.BUFFER, a.buffer],
          [j.PREVIOUS_MOS, a.previousMos],
          [j.PREVIOUS_RESOLUTION, a.previousResolution],
        ].reduce(function (a, b) {
          var c = b[1],
            d = "";
          switch (typeof c) {
            case "number":
              d = c.toFixed(1);
              break;
            case "boolean":
              d = c ? "1" : "0";
              break;
            default:
              d = "null";
          }
          return a + (b[0] + ": " + d + ";");
        }, "");
        c || (this.$10 += "disabled;");
        d && (this.$10 += "none-selected-of-" + b + ";");
      };
      b.getLastEvaluationReason = function () {
        return this.$10;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerOzImplementationEnginePartsImplUtils",
  [
    "OzSystemicRiskABRManager",
    "OzWidevineDrmProvider",
    "gkx",
    "justknobx",
    "oz-player/networks/OzBandwidthEstimator",
    "oz-player/strategies/OzBufferingDetector",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = /(livestream-)?lookaside\.(facebook|workplace)\.com$/;
    function a(a) {
      return h.test(a.getDomain());
    }
    function b(a, b, d, e, f, g) {
      if (f.current != null) return;
      var h = !0,
        i = function () {
          if (h) return !1;
          var a = f.current !== j;
          return a && c("gkx")("1508440") ? !0 : !1;
        },
        j = new (c("oz-player/strategies/OzBufferingDetector"))(
          a,
          d,
          function () {
            var a = e.getCurrentState();
            a = a.controlledState;
            return a.streamEnded ? b.getDuration() : Infinity;
          }
        );
      f.current = j;
      h = !1;
      a = function (a) {
        if (i()) return;
        if (c("gkx")("1235655")) return;
        e.dispatch({
          payload: { bufferingType: a },
          type: "buffering_begin_requested",
        });
        a = d.getNumber("ull_fallback_stall_count", 0);
        if (a > 0) {
          var b = g.getLoggerState().stallCountTotal;
          d.getBool("fix_ull_fallback_stall_count", !1) &&
            (b = g.getLoggerState().inPlayStallCount200ms);
          e.getCurrentState().controlledState.latencyLevel === "ultra-low" &&
            b > a &&
            e.dispatch({
              payload: { latencyLevel: "low", ullIneligibilityReason: null },
              type: "implementation_set_latency_level_requested",
            });
        }
      };
      var k = function (a) {
        if (i()) return;
        e.dispatch({
          payload: { domEventPerfTimestamp: a.domEventPerfTimestamp },
          type: "buffering_end_requested",
        });
      };
      j.addListener("enterBuffering", a);
      j.addListener("leaveBuffering", k);
    }
    function d(a) {
      var b = a.accessToken,
        d = a.graphQLVideoDRMInfo;
      a = a.videoFBID;
      var e = [];
      if (d && a != null) {
        var f = c("justknobx")._("717") ? null : d.widevineCert;
        e.push(
          new (c("OzWidevineDrmProvider"))(
            a,
            d.graphApiVideoLicenseUri,
            d.videoLicenseUriMap,
            b,
            (a = f) != null ? a : null
          )
        );
      }
      return e;
    }
    function e(a) {
      var b = a.VideoPlayerShakaPerformanceLoggerClass,
        c = a.accessToken,
        d = a.disableLogging,
        e = a.getApproximateFBLSToPlayerDisplayLatency,
        f = a.getBandwidthEstimate,
        g = a.getPlayerDimensions,
        h = a.getPlayerFormat,
        i = a.playbackIsLiveStreaming,
        j = a.playerInstanceCount,
        k = a.playerInstanceKey,
        l = a.playerSuborigin,
        m = a.playerVersion,
        n = a.videoElement,
        o = a.videoFBID;
      a = a.videoPlayerShakaPerformanceLoggerBuilder;
      if (d || (!a && (!b || !b.shouldInitialize()))) return [];
      c = {
        accessToken: c,
        getApproximateFBLSToPlayerDisplayLatency: e,
        getBandwidthEstimate: f,
        getPlayerDimensions: g,
        getPlayerFormat: h,
        isLive: i,
        isServableViaFbms: !1,
        playerInstanceCount: j,
        playerOrigin: null,
        playerSuborigin: l,
        playerVersion: m,
        representationId: null,
        uniqueID: k,
        video: n,
        videoID: (d = o) != null ? d : "",
      };
      return a != null ? [a.build(c)] : b ? [new b(c)] : [];
    }
    function f(a, b) {
      return b > 0
        ? (b / 1e3) * -1
        : a.getNumber("live_initial_playback_position", 0);
    }
    function i(a, b, c) {
      return b > 0 && c > 0
        ? (b + c) / 1e3
        : a.getNumber("livehead_fall_behind_block_threshold", 0);
    }
    function j(a, b) {
      return b > 0
        ? b / 2 / 1e3
        : a.getNumber("live_time_range_block_margin", 0);
    }
    function k() {
      return function (a, b, d, e, f, g, h, i) {
        return a.getLegacyConfig().getBool("use_systemic_risk_abr", !1)
          ? new (c("OzSystemicRiskABRManager"))(a, b, d, e, f, g, h, i)
          : null;
      };
    }
    function l(a, b) {
      var d = b.experimentationConfig,
        e = b.getCurrentVideoRepresentation,
        f = b.getOzCDNSignedQueryParams,
        g = b.isClientTriggeredTraceEnabled,
        h = b.playbackIsLiveStreaming,
        i = b.playbackSessionId;
      b = b.shouldRefresh403;
      var j = a.getQueryData(),
        k;
      if (h) {
        k = {};
        if (d.getBool("server_side_abr_send_client_estimates", !1)) {
          var l = c(
            "oz-player/networks/OzBandwidthEstimator"
          ).getBandwidthDiagnostics(d);
          l &&
            (k = babelHelpers["extends"]({}, k, {
              _nc_bwe: String(l.bandwidthEstimate),
              _nc_bwe_std: String(l.bandwidthStandardDeviation),
              _nc_ttfb: String(l.timeToFirstByteMsEstimate),
              _nc_ttfb_std: String(l.timeToFirstByteMsStandardDeviation),
            }));
          l = e();
          l &&
            (k = babelHelpers["extends"]({}, k, {
              _nc_abr_bitrate: String(l.getBandwidth()),
              _nc_abr_qlabel: l.getDisplayLabel(),
            }));
        }
        c("gkx")("2047") &&
          (k = babelHelpers["extends"]({}, k, {
            _nc_wclk: "1",
            _nc_wclk_ms: "1",
          }));
      }
      h &&
        c("gkx")("1998922") &&
        (k = babelHelpers["extends"]({}, k, { _nc_nc: "1" }));
      e = d.getNumber("live_video_chunk_duration", 0);
      l = d.getBool("use_bandwidth_estimate_from_headers_in_abr", !1);
      d = l
        ? c(
            "oz-player/networks/OzBandwidthEstimator"
          ).hasRecentBandwidthEstimateFromHeader()
        : !1;
      h &&
        e > 0 &&
        d &&
        (k = babelHelpers["extends"]({}, k, { chk_dur: e.toString(10) }));
      c("gkx")("1836350") &&
        j.uss != null &&
        j.odm != null &&
        (k = babelHelpers["extends"]({}, k, { manual_redirect: "1" }));
      g && (k = babelHelpers["extends"]({}, k, { _nc_psid: i }));
      if (b) {
        l = f();
        if (l != null) {
          h = a.getDomain() + a.getPath();
          d = l.get(h);
          if (d != null)
            for (e in d) {
              k = babelHelpers["extends"]({}, k, ((j = {}), (j[e] = d[e]), j));
            }
        }
      }
      return k;
    }
    g.checkShouldIncludeCredentials = a;
    g.createOzBufferingDetector = b;
    g.createOzDrmProviders = d;
    g.createOzPerfLoggerProviders = e;
    g.calculateInitialPlaybackPositionForDynamicMpd = f;
    g.calculateLiveheadFallBehindBlockThreshold = i;
    g.calculateLiveheadFallBehindBlockMargin = j;
    g.getVideoAbrManagerFactory = k;
    g.getCustomRequestParametersForURI = l;
  },
  98
);
__d(
  "VideoPlayerOzImplementationEnginePartsImplFunction",
  [
    "CometThrottle",
    "ConstUriUtils",
    "Deferred",
    "FBLogger",
    "JSResourceForInteraction",
    "NetworkStatus",
    "OzActiveActiveFailoverNetworkRequestStreamHandler",
    "OzBufferVTTCaptionsVisibleStrategy",
    "OzCDNSignedQueryParams",
    "OzCustomParsers",
    "OzCustomRepresentationParsers",
    "OzOneSemanticHandler",
    "OzOneSemanticHandlerUtils",
    "OzPredictedSegmentTimelineParser",
    "OzVideoLiveTraceNetworkRequestStreamHandler",
    "Promise",
    "QE2Logger",
    "TimeRanges",
    "VideoPlayerConnectionQuality",
    "VideoPlayerImplementationErrors",
    "VideoPlayerOzImplementationEnginePartsImplUtils",
    "clearTimeout",
    "cr:1836099",
    "cr:1871597",
    "cr:1947728",
    "cr:1993377",
    "getErrorSafe",
    "getOzPlaybackRestrictions",
    "gkx",
    "md5",
    "oz-player/configs/OzConfigUtils",
    "oz-player/networks/OzBandwidthEstimator",
    "oz-player/networks/OzClockSyncNetworkRequestStreamHandler",
    "setTimeout",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = c("JSResourceForInteraction")("VideoPlayerEmsg").__setRef(
        "VideoPlayerOzImplementationEnginePartsImplFunction"
      ),
      i = 1e4,
      j = null,
      k = null;
    b("cr:1836099") &&
      ((j = b("cr:1836099").getHiveConfig()), (k = b("cr:1836099").HiveOz));
    function a(a) {
      var e,
        f = a.OzPlayerClass,
        g = a.callChain,
        l = a.destroyOzPlayerPartsRef,
        m = a.engineDebugAPI,
        n = a.engineExtrasAPI,
        o = a.getCaptionsInfo,
        aa = a.getLatencyLevelManager,
        p = a.getVideoLiveTrace,
        q = a.handleCaptionsInfoChange,
        ba = a.handleFatalImplementationError,
        r = a.hivePluginRef,
        s = a.initialProps,
        t = a.logger,
        u = a.machine,
        v = a.overrideOzRequestImplementationRef,
        w = a.ozBufferingDetectorRef,
        x = a.ozPlayerRef,
        y = a.p2pSessionLoggerRef,
        z = a.playerVersion,
        A = a.resolvedVideoInfo,
        B = a.videoElement,
        C = { current: !1 },
        D = { current: null },
        E = { current: null };
      l.current = function (a) {
        var b = w.current;
        b && ((w.current = null), b.destroy());
        b = x.current;
        if (b) {
          m && m.handleOzPlayerChanged(null);
          x.current = null;
          try {
            b.destroy([].concat(a, ["destroyOzPlayerParts"]).join(":"));
          } catch (a) {
            c("FBLogger")("comet_video_player")
              .catching(a)
              .mustfix("Error in ozPlayer.destroy: %s", String(a));
          }
        }
        b = D.current;
        b && ((D.current = null), b());
        E.current && (E.current = null);
        Z();
        r.current && (r.current = null);
        y.current && (y.current = null);
        v.current && (v.current = null);
      };
      a = A.accessToken;
      l = A.audioOnly;
      var F = A.experimentationConfig,
        G = A.graphQLVideoDRMInfo,
        H = A.graphQLVideoP2PSettings,
        I = A.manifestUrl,
        ca = A.manifestXmlStringResolved,
        da = A.minQualityPreference,
        ea = A.ozPrefetchCache,
        J = A.videoFBID,
        K = s.disableLogging ? null : A.VideoPlayerShakaPerformanceLoggerClass,
        L = Boolean(s.loggingMetaData.coreVideoPlayerMetaData.isLiveStreaming),
        M = Boolean((e = s.isClientTriggeredTraceEnabled) != null ? e : !1),
        N = function (a) {
          return n.getEstimatedBandwidth();
        };
      e = function () {
        return n.getApproximateFBLSToPlayerDisplayLatency();
      };
      var fa = function () {
          F.setContext(
            "connection_quality",
            d("VideoPlayerConnectionQuality").evaluate(function () {
              return N(L);
            })
          );
        },
        O = function () {
          var a = F.getNumber(
            "connection_quality_context_throttle_frequency",
            0
          );
          if (a === 0) return null;
          var b = c("CometThrottle")(fa, a),
            d = c("oz-player/networks/OzBandwidthEstimator").addListener(
              "bandwidth_sampled",
              b
            );
          return function () {
            d.remove(), b.cancel();
          };
        };
      D.current = O();
      O = d(
        "VideoPlayerOzImplementationEnginePartsImplUtils"
      ).createOzDrmProviders({
        accessToken: a,
        graphQLVideoDRMInfo: G,
        videoFBID: J,
      });
      G = function () {
        return u.getCurrentState().controlledState.captionsVisible;
      };
      var P = [];
      F.getBool("use_vtt_captions_visible_buffer_strategy", !0) &&
        P.push(new (c("OzBufferVTTCaptionsVisibleStrategy"))(G));
      G = function () {
        return u.getCurrentState().controlledState.dimensions;
      };
      var Q = function () {
        return u.getCurrentState().controlledState.playerFormat;
      };
      a = d(
        "VideoPlayerOzImplementationEnginePartsImplUtils"
      ).createOzPerfLoggerProviders({
        VideoPlayerShakaPerformanceLoggerClass: K,
        accessToken: a,
        disableLogging: s.disableLogging,
        getApproximateFBLSToPlayerDisplayLatency: e,
        getBandwidthEstimate: N,
        getPlayerDimensions: G,
        getPlayerFormat: Q,
        playbackIsLiveStreaming: L,
        playerInstanceCount:
          s.loggingMetaData.playerImplementationInstanceCountRef.current,
        playerInstanceKey: s.loggingMetaData.instanceKey,
        playerSuborigin: s.loggingMetaData.coreVideoPlayerMetaData.subOrigin,
        playerVersion: z,
        videoElement: B,
        videoFBID: J,
        videoPlayerShakaPerformanceLoggerBuilder:
          A.videoPlayerShakaPerformanceLoggerBuilder,
      });
      E.current == null && (E.current = new (c("OzCDNSignedQueryParams"))());
      if (H && J != null) {
        e = H.community_info;
        Q = H.config;
        z = H.hive_initialization_options;
        A = y.current =
          (A = y.current) != null
            ? A
            : b("cr:1871597")
            ? new (b("cr:1871597"))(J, e)
            : null;
        try {
          if (!r.current) {
            A && A.logEnableP2P();
            e = function (a) {
              y.current && y.current.logHiveError(a);
            };
            var R = function (b) {
                var a = x.current;
                a && a.injectExternalDebugEvent("P2PTech", b.tech);
                y.current && y.current.logSessionActive(b.tech);
              },
              S = function (b) {
                var a = x.current;
                a && a.injectExternalDebugEvent("P2PStats", b);
                y.current && y.current.setCurrentHiveStats(b);
              },
              T = function (a) {
                a = a.state;
                var b = u.getCurrentState();
                b = b.controlledState;
                b = b.playbackState;
                if (r.current && a === "CLOSED") {
                  Z();
                  a = x.current;
                  a &&
                    b !== "ended" &&
                    (C.current && I != null
                      ? a.updatePlayerRunTimeConfig({ manifestUrl: I })
                      : a.load(I));
                }
              };
            S = {
              HiveJava: {},
              HiveJS: {
                maximumTrimming: { dash: void 0, hls: void 0 },
                renderStatsCallback: S,
              },
              debugLevel: "off",
              hiveTechOrder: ["HiveJS", "StatsJS", "HiveJava"],
              onActiveSession: R,
              onError: e,
              onSessionStateChange: T,
              telemetryId: A ? A.getSessionID() : 0,
            };
            R = F.getNumber("hive_maximum_trimming_seconds", 0);
            R > 0 && (S.HiveJS.maximumTrimming = { dash: R, hls: R });
            if (z) {
              e = z.HiveJava;
              T = z.debugLevel;
              R = z.hiveTechOrder;
              S.hiveTechOrder = R.slice();
              S.HiveJava = e ? { minVersion: e.minVersion } : {};
              S.debugLevel = (z = T) != null ? z : S.debugLevel;
            }
            c("gkx")("2047688") &&
              (S = babelHelpers["extends"]({}, S, {
                testId: "fb_video_player_p2p_jest_e2e",
              }));
            if (
              Q.disable_hivejava_for_livevc === !0 &&
              I != null &&
              I.startsWith("https://livestream-lookaside")
            ) {
              R = S.hiveTechOrder.indexOf("HiveJava");
              R >= 0 && S.hiveTechOrder.splice(R, 1);
            }
            if (j) j.SensitiveInfo.restrictedConnectivityInfo = !0;
            else
              throw c("unrecoverableViolation")(
                "HiveConfig does not exist",
                "comet_video_player"
              );
            if (k) r.current = new k(S);
            else
              throw c("unrecoverableViolation")(
                "HiveOz does not exist",
                "comet_video_player"
              );
            if (r.current) {
              if (!b("cr:1947728"))
                throw c("unrecoverableViolation")(
                  "OzConfigurableRequestImplementation does not exist",
                  "comet_video_player"
                );
              v.current = b("cr:1947728")(
                r.current.getRequestImplementation(),
                {
                  inferResponseStatusIsOK: c("gkx")("3951"),
                  inferResponseStatusIsOk2xx: c("gkx")("277"),
                }
              );
            }
          }
        } catch (a) {
          A && A.logError(a), Z();
        }
      }
      e = [
        new (c("OzVideoLiveTraceNetworkRequestStreamHandler"))(function (
          a,
          b,
          c
        ) {
          var d = p();
          d != null && d.handleHeadersAndBody(a, b, c);
        },
        F.getBool("live_trace_parse_emsg", !1)),
        new (c("oz-player/networks/OzClockSyncNetworkRequestStreamHandler"))(),
      ];
      c("OzActiveActiveFailoverNetworkRequestStreamHandler") &&
        e.push(
          new (c("OzActiveActiveFailoverNetworkRequestStreamHandler"))(
            function (b, c) {
              var a = x.current,
                e = b.headers;
              if (a && e) {
                e = parseInt(e.get("x-fb-video-replica"), 10);
                t.logVPLEvent({
                  eventType: "replica_switch",
                  logDataOverrides: {
                    error_code: b.status.toString(),
                    error_user_info: JSON.stringify({
                      failover_response_code: b.status.toString(),
                      replica: e,
                      url: c,
                    }),
                  },
                  state: u.getCurrentState(),
                });
                b = a.getMpdUrl();
                if (b != null) {
                  c = d("ConstUriUtils").getUri(b);
                  if (c) {
                    b = c.addQueryParam("replica", e);
                    b &&
                      (Z(),
                      a.updatePlayerRunTimeConfig({
                        manifestUrl: b.toString(),
                        resetStreamAnchor: !0,
                      }));
                  }
                }
              }
            }
          )
        );
      var U = s.expiredVideoUrlRefreshHandler,
        ga = s.loggingMetaData.instanceKey;
      T = c("gkx")("221");
      z = c("gkx")("1836350") || c("gkx")("1993562");
      var V = L ? T : z;
      F.getBool("log_exposure_on_oz_initialization", !1) &&
        d("QE2Logger").logExposureForUser("www_videos_html5_mpeg_dash");
      Q = {
        audioOnly: (Q = l) != null ? Q : !1,
        bufferEndLimit: s.bufferEndLimit != null ? s.bufferEndLimit : null,
        bufferingDetector: (R = w.current) != null ? R : void 0,
        config: d("oz-player/configs/OzConfigUtils").provideConfigWithDefaults(
          F
        ),
        configureCustomRequestParametersForSegment: function (a) {
          var b = null;
          if (L && M) {
            var d = a.getByteRange();
            d = d
              ? d.startByte + ", " + (d.endByte != null ? d.endByte : "null")
              : "null";
            a = c("md5")(a.getURI().toString() + d);
            b = (d = b) != null ? d : {};
            a != null && (b = babelHelpers["extends"]({}, b, { _nc_tsid: a }));
            b = babelHelpers["extends"]({}, b, { _nc_e2e: "live" });
          }
          return b;
        },
        customParsers: d("OzCustomParsers").createOzCustomParser(),
        customRepresentationParsers: d(
          "OzCustomRepresentationParsers"
        ).createOzCustomRepresentationParsers({ ozConfig: F }),
        customSegmentTimelineParser: F.getBool("enable_predictive_dash", !1)
          ? new (c("OzPredictedSegmentTimelineParser"))()
          : void 0,
        customVTTBufferTargetStrategies: P,
        debugCreateInitiator: []
          .concat(g, ["proceedWithOzPlayerCreation"])
          .join(":"),
        drmProviders: O,
        getCustomRequestParametersForURI: function (a) {
          return d(
            "VideoPlayerOzImplementationEnginePartsImplUtils"
          ).getCustomRequestParametersForURI(a, {
            experimentationConfig: F,
            getCurrentVideoRepresentation: function () {
              var a = x.current;
              return a == null ? void 0 : a.getCurrentVideoRepresentation();
            },
            getOzCDNSignedQueryParams: function () {
              return E.current;
            },
            isClientTriggeredTraceEnabled: M,
            playbackIsLiveStreaming: L,
            playbackSessionId: ga,
            shouldRefresh403: V,
          });
        },
        getOverrideOzRequestImplementation: function () {
          return v.current;
        },
        getShouldIncludeCredentials: F.getBool(
          "use_oz_credentials_provider",
          !1
        )
          ? d("VideoPlayerOzImplementationEnginePartsImplUtils")
              .checkShouldIncludeCredentials
          : null,
        getUserSelectedPlaybackRate: function () {
          return u.getCurrentState().controlledState.targetPlaybackRate;
        },
        getVideoDimensions: G,
        initialPlaybackPositionForDynamicMpd: d(
          "VideoPlayerOzImplementationEnginePartsImplUtils"
        ).calculateInitialPlaybackPositionForDynamicMpd(
          F,
          (S = s.initialDesiredLatencyMs) != null ? S : 0
        ),
        initialRepresentationIDs:
          (A = s.initialRepresentationIds) != null ? A : [],
        isClientTriggeredTraceEnabled: M,
        liveheadFallBehindBlockMargin: d(
          "VideoPlayerOzImplementationEnginePartsImplUtils"
        ).calculateLiveheadFallBehindBlockMargin(
          F,
          (T = s.initialDesiredLatencyMs) != null ? T : 0
        ),
        liveheadFallBehindBlockThreshold: d(
          "VideoPlayerOzImplementationEnginePartsImplUtils"
        ).calculateLiveheadFallBehindBlockThreshold(
          F,
          (z = s.initialDesiredLatencyMs) != null ? z : 0,
          (l = s.initialLatencyToleranceMs) != null ? l : 0
        ),
        loggerConfig: {
          isOzDevConsoleEnabled: c("gkx")("722076"),
          observedOperationLoggers: [],
          perfLoggerProviders: a,
        },
        mpdUrl: I,
        networkRequestStreamHandlers: e,
        networkRequestStreamRetryHandler: V
          ? function (a, d, e) {
              var f = a.headers,
                g = f == null ? void 0 : f.get("x-fb-url-refresh"),
                h = E.current;
              if (a.status === 403 && h != null) {
                t.logVPLEvent({
                  eventType: "video_cdn_url_expired",
                  logDataOverrides: {
                    error_user_info: JSON.stringify({ expired_url: e }),
                  },
                  state: u.getCurrentState(),
                });
                var i =
                  g != null && b("cr:1993377") != null
                    ? {
                        name: "refreshShortExpiryVideoUrl",
                        promise: b("cr:1993377")(g),
                      }
                    : U != null
                    ? { name: "expiredVideoUrlRefreshHandler", promise: U(e) }
                    : null;
                if (i != null)
                  return i.promise
                    .then(function (a) {
                      var b;
                      b = (b = a.refreshedUrl) != null ? b : null;
                      a = (a = a.reason) != null ? a : null;
                      if (b != null && (c("gkx")("5837") ? b !== "" : !0)) {
                        t.logVPLEvent({
                          eventType: "video_cdn_url_refreshed",
                          logDataOverrides: {
                            error_user_info: JSON.stringify({
                              refresh_handler: i.name,
                              refreshed_url: b,
                            }),
                          },
                          state: u.getCurrentState(),
                        });
                        h.update(b);
                        return d(b);
                      } else {
                        throw c("unrecoverableViolation")(
                          i.name +
                            " refreshedUrl is " +
                            (b === "" ? "an empty string" : "null") +
                            ", reason: " +
                            ((b = a) != null ? b : "null"),
                          "comet_video_player"
                        );
                      }
                    })
                    ["catch"](function (a) {
                      a = c("gkx")("5837") ? c("getErrorSafe")(a) : a;
                      t.logVPLEvent({
                        eventType: "video_cdn_url_refresh_error",
                        logDataOverrides: {
                          error_description: a.message,
                          error_user_info: JSON.stringify({
                            expired_url: e,
                            refresh_handler: i.name,
                            refresh_url: g,
                          }),
                        },
                        state: u.getCurrentState(),
                      });
                      throw a;
                    });
              }
              return b("Promise").resolve(a);
            }
          : null,
        prefetchCache: F.getBool("use_prefetch_cache", !1) ? ea : null,
        rawMpdXml: r.current ? void 0 : ca,
        seekHandler: c("gkx")("1482680")
          ? function (a) {
              var b = B.currentTime;
              u.dispatch({
                payload: { seekSourcePosition: b },
                type: "implementation_seek_requested",
              });
              B.currentTime = a;
            }
          : null,
        setCustomFetchStreamLoggingAttributes: function (a, b, e) {
          a.setIsOnline(c("NetworkStatus").isOnline());
          var f = e == null ? void 0 : e.headers;
          if (f)
            try {
              a.setProxyStatusHeader(f.get("proxy-status")),
                a.setDynamicStatusHeader(f.get("x-fb-dynamic-status"));
            } catch (a) {}
          d(
            "OzOneSemanticHandlerUtils"
          ).setOneSemanticFetchStreamLoggingAttributes(a, b, e);
        },
        startTimeStamp: F.getBool("fix_start_timestamp", !1)
          ? s.startTimestamp
          : 0,
        videoAbrManagerFactory: d(
          "VideoPlayerOzImplementationEnginePartsImplUtils"
        ).getVideoAbrManagerFactory(),
        videoNode: B,
        videoPlaybackRestrictions: c("getOzPlaybackRestrictions")(da, F),
      };
      var W = new f(Q);
      x.current = W;
      w.current &&
        w.current.attachPerfLoggerProvider(W.getPerfLoggerProvider());
      R = s.loggingMetaData.playerImplementationInstanceCountRef;
      R.current++;
      W.onError(function (a) {
        K && K.flushQueuedLogs(), ba(a, "oz_player_error");
      });
      W.addListener("switchVideoRepresentation", function () {
        u.dispatch({
          payload: { targetVideoQuality: n.getCurrentTargetVideoQuality() },
          type: "representation_changed",
        });
      });
      var ha = function (a) {
        if (F.getBool("enable_error_recovery_attempt_logging", !1)) {
          a = d(
            "VideoPlayerImplementationErrors"
          ).createVideoPlayerErrorFromOzImplementationError(
            a,
            "oz_player_stream_error_retry"
          );
          u.dispatch({
            payload: { recoverableError: a },
            type: "error_recovery_attempt",
          });
        }
      };
      W.addListener("manifestFetchError", function (a) {
        d("OzOneSemanticHandler").handleManifestFetchErrorEvent(F, a);
      });
      W.addListener("manifestFetchErrorRetry", function (a) {
        ha(a);
      });
      W.addListener("streamError", function (a) {
        return d("OzOneSemanticHandler").handleStreamErrorEvent(F, a);
      });
      W.addListener("streamErrorRetry", function (a) {
        var b;
        (((b = a.getExtra()) == null ? void 0 : b.mimeType) !== "application" ||
          F.getBool("enable_era_logging_for_application_stream", !0)) &&
          ha(a);
      });
      W.addListener("streamInterruptAt", function () {
        u.dispatch({ type: "stream_interrupted" });
      });
      W.addListener("streamResumedAt", function () {
        u.dispatch({ type: "stream_resumed" });
      });
      W.addListener("streamGoneBeforeStart", function () {
        Z(), u.dispatch({ type: "stream_gone_before_start" });
      });
      W.addListener("streamEnd", function () {
        Z(), u.dispatch({ type: "stream_ended" });
      });
      W.addListener("videoNodeErrorRetry", function (a) {
        if (F.getBool("enable_error_recovery_attempt_logging", !1)) {
          a = d(
            "VideoPlayerImplementationErrors"
          ).createVideoPlayerErrorFromVideoNodeError(
            a,
            "oz_player_stream_error_retry"
          );
          u.dispatch({
            payload: { recoverableError: a },
            type: "error_recovery_attempt",
          });
        }
      });
      W.addListener("enterBuffering", function (a) {
        if (c("gkx")("1235655")) return;
        u.dispatch({
          payload: { bufferingType: a },
          type: "buffering_begin_requested",
        });
      });
      W.addListener("leaveBuffering", function (a) {
        u.dispatch({
          payload: { domEventPerfTimestamp: a.domEventPerfTimestamp },
          type: "buffering_end_requested",
        });
      });
      m && m.handleOzPlayerChanged(W);
      var ia = function () {
          var a = o();
          a = {
            inbandCaptionsAutogeneratedFromManifest:
              n.getInbandCaptionsAutogeneratedFromManifest(),
            inbandCaptionsExpectedFromManifest:
              n.getInbandCaptionsExpectedFromManifest(),
            inbandCaptionsExpectedFromProps:
              a == null ? void 0 : a.inbandCaptionsExpectedFromProps,
            representationCaptionsExpectedFromManifest:
              n.getRepresentationCaptionsExpectedFromManifest(),
            sideLoadCaptionsExpectedFromProps:
              a == null ? void 0 : a.sideLoadCaptionsExpectedFromProps,
            sideLoadCaptionsUrlFromProps:
              a == null ? void 0 : a.sideLoadCaptionsUrlFromProps,
          };
          var b = u.getCurrentState();
          b = b.controlledState;
          (a.inbandCaptionsExpectedFromManifest !== b.captionsLoaded ||
            a.inbandCaptionsAutogeneratedFromManifest !==
              b.inbandCaptionsAutogenerated) &&
            q(a);
        },
        ja = function (a, b) {
          a = a.getCustomField("timescale");
          a = typeof a === "number" ? a : 0;
          u.dispatch({
            payload: { timescale: a, videoBytes: b },
            type: "cea608_bytes_received",
          });
        },
        ka = function () {
          var a = n.getVideoRepresentations();
          if (a != null && a.length > 0) {
            a = a[0].getTimeRanges();
            if (a != null && a.length > 0) {
              var b = a[0].startTime;
              a = Math.max(
                a[a.length - 1].endTime -
                  F.getNumber("live_rewind_seek_to_live_delta", 8),
                b
              );
              u.dispatch({
                payload: {
                  seekableRanges: new (c("TimeRanges"))([
                    { endTime: a, startTime: b },
                  ]),
                },
                type: "seekable_ranges_changed",
              });
            }
          }
        },
        la = function () {
          var a = W.getMpd();
          if (!a) return;
          a = a.getCustomField("loapStreamType");
          var b = p();
          typeof a === "number" && b != null && b.setStreamType(a);
        },
        X = function (a) {
          if (a != null) {
            a = d("ConstUriUtils").getUri(a);
            if (a) {
              a = a.getQueryParam("lvp");
              return a === "1";
            }
          }
          return !1;
        },
        ma = function (a) {
          var b = function () {
            ka(), ia(), la();
          };
          a.addListener("updated", b);
          b();
          var d = [],
            e = function (a) {
              t.logVPLEvent({
                eventType: "imf",
                logDataOverrides: a,
                state: u.getCurrentState(),
              });
            },
            f = function (a, b, c) {
              a = a.parseEmsgBoxesFromMP4Segment;
              a = a(c, J, b.getID(), B.currentTime, e);
              a.length > 0 &&
                u.dispatch({
                  payload: { emsgBoxes: a },
                  type: "emsg_boxes_parsed",
                });
            },
            g = function (a) {
              var b = d.shift();
              while (b) f.apply(void 0, [a].concat(b)), (b = d.shift());
            };
          W.updatePlayerRunTimeConfig({
            audioStreamDataHandler: function () {
              var a = u.getCurrentState();
              if (a.controlledState.emsgObserverTokens.size > 0) {
                var b = h.getModuleIfRequireable();
                for (
                  var e = arguments.length, i = new Array(e), j = 0;
                  j < e;
                  j++
                )
                  i[j] = arguments[j];
                b != null
                  ? (g(b), f.apply(void 0, [b].concat(i)))
                  : (d.push(i),
                    h
                      .load()
                      .then(function (a) {
                        g(a);
                      })
                      ["catch"](function (a) {
                        c("FBLogger")("comet_video_player")
                          .catching(c("getErrorSafe")(a))
                          .warn("Failed to load VideoPlayerEmsg"),
                          (d.length = 0);
                      }));
              }
            },
            videoStreamDataHandler: ja,
          });
          if (n.isPredictiveDash()) {
            F.setContext("streaming_implementation", "pdash");
            a = aa();
            a && a.maybeUpdateLatencyLevel();
          }
          b = o();
          q({
            inbandCaptionsAutogeneratedFromManifest:
              n.getInbandCaptionsAutogeneratedFromManifest(),
            inbandCaptionsExpectedFromManifest:
              n.getInbandCaptionsExpectedFromManifest(),
            inbandCaptionsExpectedFromProps:
              b == null ? void 0 : b.inbandCaptionsExpectedFromProps,
            representationCaptionsExpectedFromManifest:
              n.getRepresentationCaptionsExpectedFromManifest(),
            sideLoadCaptionsExpectedFromProps:
              b == null ? void 0 : b.sideLoadCaptionsExpectedFromProps,
            sideLoadCaptionsUrlFromProps:
              b == null ? void 0 : b.sideLoadCaptionsUrlFromProps,
          });
        };
      W.addListener("vttCaptionsUpdated", function (a, b) {
        var c = "webvtt",
          d = u.getCurrentState().controlledState.captionFormat;
        c !== d &&
          u.dispatch({
            payload: { captionFormat: c },
            type: "controller_set_caption_format_requested",
          });
        u.dispatch({
          payload: { activeCaptions: a, captionsLocale: b },
          type: "controller_set_active_captions_requested",
        });
      });
      W.addListener("mpdParsed", function (a) {
        n.isPredictiveDash() &&
          F.setContext("streaming_implementation", "pdash");
      });
      c("gkx")("6295")
        ? (W.addListener("mpdReady", function (a) {
            (C.current = !0), ma(a);
          }),
          W.addListener("initialized", function () {
            var a;
            u.dispatch({
              payload: {
                availableAudioTracks: n.getAvailableAudioTracks(),
                availableQualities: n.getAvailableVideoQualities(),
                selectedAudioTrackID: n.getUserSelectedAudioTrackID(),
                selectedVideoQuality: n.getUserSelectedVideoQuality(),
                targetVideoQuality: n.getCurrentTargetVideoQuality(),
                videoProjection:
                  (a = n.getVideoProjectionType()) != null ? a : null,
              },
              type: "implementation_engine_initialized",
            });
          }))
        : W.addListener("mpdReady", function (a) {
            C.current = !0;
            ma(a);
            u.dispatch({
              payload: {
                availableAudioTracks: n.getAvailableAudioTracks(),
                availableQualities: n.getAvailableVideoQualities(),
                selectedAudioTrackID: n.getUserSelectedAudioTrackID(),
                selectedVideoQuality: n.getUserSelectedVideoQuality(),
                targetVideoQuality: n.getCurrentTargetVideoQuality(),
                videoProjection:
                  (a = n.getVideoProjectionType()) != null ? a : null,
              },
              type: "implementation_engine_initialized",
            });
          });
      W.addListener("representationBlocked", function (a) {
        u.dispatch({
          payload: {
            availableAudioTracks: n.getAvailableAudioTracks(),
            availableQualities: n.getAvailableVideoQualities(),
            blockedRepresentationID: a,
          },
          type: "implementation_engine_representation_blocked",
        });
      });
      var Y = null;
      function Z() {
        c("clearTimeout")(Y);
        var a = r.current,
          b = y.current;
        if (a != null) {
          r.current = null;
          y.current = null;
          v.current = null;
          try {
            a && a.closeHiveSession(), b && b.logEndSession();
          } catch (a) {
            b && b.logHiveError(a);
          }
        }
      }
      P = r.current;
      g = H == null ? void 0 : H.ticket;
      if (I != null && H && P && g != null) {
        O = W.getPerfLoggerProvider();
        O && O.setIsP2pPlayback(!0);
        G = I.substring(I.indexOf("?"));
        S = P.initSession(g + G, W, B);
        var $ = new (c("Deferred"))();
        i > 0 &&
          (Y = c("setTimeout")(function () {
            $.reject(
              new Error("Hive initialization timed out after " + i + "ms")
            );
          }, i));
        S.then(function (a) {
          $.resolve(a);
        })["catch"](function (a) {
          $.reject(a);
        });
        $.getPromise()
          .then(function (a) {
            c("clearTimeout")(Y);
            var b = a.manifest;
            a = a.tech;
            var d = y.current;
            b !== I && d && d.logManifestMismatch(b, I);
            d && d.logSessionInit(a, b);
            t.setAdditionalLogData("is_p2p_playback", !0);
            t.setAdditionalLogData("is_live_preview", X(b));
            W.load(b);
          })
          ["catch"](function (a) {
            c("clearTimeout")(Y);
            var b = y.current;
            b && b.logError(a);
            Z();
            t.setAdditionalLogData("is_live_preview", X(I));
            W.load(I);
          });
      } else
        t.setAdditionalLogData("is_p2p_playback", !1),
          t.setAdditionalLogData("is_live_preview", X(I)),
          W.load(I);
    }
    g.proceedWithOzPlayerCreation = a;
  },
  98
);
__d(
  "VideoPlayerOzImplementationLatencyLevelManager",
  ["qex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a, b, c) {
        (this.$2 = "normal"),
          (this.$4 = null),
          (this.$1 = a),
          (this.$3 = b),
          (this.$6 = c);
      }
      var b = a.prototype;
      b.updatePlayerFormat = function (a) {
        this.$4 !== a && ((this.$4 = a), this.maybeUpdateLatencyLevel());
      };
      b.updateBroadcastLatencySensitivity = function (a) {
        this.$5 !== a && ((this.$5 = a), this.maybeUpdateLatencyLevel());
      };
      b.maybeUpdateLatencyLevel = function () {
        var a = this.$7(this.$5);
        a !== this.$2 &&
          ((this.$2 = a),
          this.$1.getBool("set_latency_context_immediately", !1) &&
            this.$1.setContext("latency_level", a),
          this.$3.dispatch({
            payload: { latencyLevel: a, ullIneligibilityReason: this.$8() },
            type: "implementation_set_latency_level_requested",
          }));
      };
      b.$8 = function () {
        var a = this.$1.getNumber("ultra_low_latency_bandwidth_threshold", 0),
          b = this.$6.getEstimatedBandwidth();
        if (b !== null && a > 0 && b < a) return "low_bandwidth_estimate";
        a = (b = c("qex")._("1342")) != null ? b : !1;
        return a ? "disabled_by_experiment" : null;
      };
      b.$7 = function (a) {
        if (a == null) return "normal";
        switch (a) {
          case 1:
            return "low";
          case 2:
            return this.$8() !== null
              ? this.$1.getBool("fall_back_to_low_latency_in_ull", !1)
                ? "low"
                : "normal"
              : "ultra-low";
          case 0:
            return "normal";
        }
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerOzPlayerModuleLoaderDeferredForDisplay",
  ["requireDeferredForDisplay"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = c("requireDeferredForDisplay")("oz-player").__setRef(
      "VideoPlayerOzPlayerModuleLoaderDeferredForDisplay"
    );
    function a() {
      return {
        getModuleIfRequireable: function () {
          return h.getModuleIfRequireable() || null;
        },
        load: function () {
          return h.load();
        },
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerOzImplementationEngine",
  [
    "CometDASHPrefetchCacheManager",
    "VideoPlayerImplementationEngineAPI",
    "VideoPlayerImplementationEngineVideoElementAPI",
    "VideoPlayerImplementationErrors",
    "VideoPlayerImplementationLoadSequenceManager",
    "VideoPlayerODS",
    "VideoPlayerOzImplementationEngineExtrasAPI",
    "VideoPlayerOzImplementationEnginePartsImplFunction",
    "VideoPlayerOzImplementationEnginePartsImplUtils",
    "VideoPlayerOzImplementationLatencyLevelManager",
    "VideoPlayerOzPlayerModuleLoaderDeferredForDisplay",
    "cr:1473549",
    "emptyFunction",
    "gkx",
    "promiseDone",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    e = !1;
    var h = c("emptyFunction");
    function a(a) {
      var e = a.checkInDOM,
        f = a.debugLogId,
        g = a.handleFatalError,
        i = a.initialProps;
      a = a.setExposedStateInReact;
      var j = { current: null },
        k = { current: null },
        l = { current: null },
        m = { current: null },
        n = { current: null },
        o = { current: null },
        p = { current: null },
        q = { current: null },
        r = { current: null },
        s = { current: null },
        t = { current: null },
        u = { current: null },
        v = { current: null };
      function w() {
        var a;
        return (a = p.current) != null ? a : null;
      }
      function x() {
        var a;
        return (a = o.current) != null ? a : null;
      }
      function y() {
        var a;
        return (a =
          (a = k.current) == null ? void 0 : a.experimentationConfig) != null
          ? a
          : null;
      }
      function z() {
        var a;
        return (a = Y.current) != null ? a : null;
      }
      function A() {
        var a;
        return (a = v.current) != null ? a : null;
      }
      var B;
      b("cr:1473549") && (B = new (b("cr:1473549"))());
      var C = "comet_oz",
        D = function (a, b) {
          return b.manifestXmlStringInitial !== null
            ? a.manifestXmlStringInitial !== b.manifestXmlStringInitial
            : a.manifestUrl !== b.manifestUrl;
        },
        E = function (a, b) {
          return a.videoFBID !== b.videoFBID;
        },
        F = function (a, b) {
          return a.playerFormat !== b.playerFormat;
        },
        G = function (a) {
          return a.getBool("use_full_player_if_cached", !1) &&
            c("VideoPlayerOzPlayerModuleLoaderDeferredForDisplay")
            ? c(
                "VideoPlayerOzPlayerModuleLoaderDeferredForDisplay"
              )().getModuleIfRequireable()
            : null;
        },
        H = function (a, b, c) {
          b != null
            ? (k.current = babelHelpers["extends"]({}, a, {
                manifestXmlStringResolved: b,
              }))
            : (k.current = a),
            X.dispatch({
              type: "implementation_engine_oz_manifest_downloading",
            }),
            (n.current = G(a.experimentationConfig)),
            L(n.current, [].concat(c, ["proceedWithOzManifestDownloading"]));
        },
        I = function (a) {
          var b,
            e,
            f = a.manifestUrl,
            g = a.manifest,
            h = null;
          c("CometDASHPrefetchCacheManager") &&
            a.videoFBID != null &&
            (h = c("CometDASHPrefetchCacheManager").get(a.videoFBID));
          b = {
            VideoPlayerShakaPerformanceLoggerClass:
              a.VideoPlayerShakaPerformanceLoggerClass,
            accessToken: a.loggingMetaData.accessToken,
            audioOnly: a.audioOnly,
            experimentationConfig: a.experimentationConfig,
            graphQLVideoDRMInfo: a.graphQLVideoDRMInfo,
            graphQLVideoP2PSettings: a.graphQLVideoP2PSettings,
            initialAudioUserPreferredLanguage:
              a.initialAudioUserPreferredLanguage,
            manifestUrl: (b = f) != null ? b : null,
            manifestXmlStringInitial: (b = g) != null ? b : null,
            minQualityPreference: a.minQualityPreference,
            ozPrefetchCache: h,
            playerFormat:
              a.loggingMetaData.coreVideoPlayerMetaData.playerFormat,
            videoFBID: a.videoFBID,
            videoPlayerShakaPerformanceLoggerBuilder:
              a.videoPlayerShakaPerformanceLoggerBuilder,
          };
          h = j.current;
          v.current == null &&
            (v.current = new (c(
              "VideoPlayerOzImplementationLatencyLevelManager"
            ))(a.experimentationConfig, X, Q));
          b.playerFormat != null &&
            (h == null || F(b, h)) &&
            X.dispatch({
              payload: { playerFormat: b.playerFormat },
              type: "controller_set_player_format",
            });
          v.current.updatePlayerFormat(
            (e = a.loggingMetaData.coreVideoPlayerMetaData.playerFormat) != null
              ? e
              : null
          );
          (e = v.current) == null
            ? void 0
            : e.updateBroadcastLatencySensitivity(
                a.broadcastLatencySensitivity
              );
          e = !1;
          if (h == null) e = !0;
          else if (h != null && !E(b, h) && D(b, h)) {
            a = 14;
            d("VideoPlayerODS").bumpEntityKey(
              "OzImplementation",
              "manifest_reloaded",
              a
            );
            e = !1;
          } else if (h != null && E(b, h))
            throw c("unrecoverableViolation")(
              "videoFBID changed after player initialization",
              "comet_video_player"
            );
          if (!e) return !1;
          f = b.manifestUrl;
          g = b.manifestXmlStringInitial;
          if (g == null && f == null)
            throw c("unrecoverableViolation")(
              "Empty manifestXmlStringInitial and manifestUrl",
              "comet_video_player"
            );
          j.current = b;
          H(b, g, [
            "handleVideoInfoChangeForOzImplementation",
            "downloadManifestInOz",
          ]);
          return !0;
        },
        J = function (a, b) {
          var d = function (c) {
              if (m.current !== a) return;
              n.current = c;
              L(c, [].concat(b, ["handleOzPlayerModuleLoadSuccess"]));
            },
            e = function (b) {
              if (m.current !== a) return;
              V(b, "oz_player_module_load_failed");
            };
          m.current = a;
          c("promiseDone")(a, d, e);
        },
        K = function (a) {
          a = d(
            "VideoPlayerImplementationEngineVideoElementAPI"
          ).createVideoPlayerImplementationEngineVideoElementAPI(a);
          Y.current = a;
          return a;
        },
        L = function (a, b) {
          var e = S(),
            f = k.current;
          if (e == null || f == null) return;
          var g = K(e),
            h = f.experimentationConfig;
          a
            ? M(
                a,
                e,
                g,
                f,
                [].concat(b, [
                  "proceedWithResolvedVideoInfo",
                  "OzPlayerModuleFromRef",
                ])
              )
            : c("VideoPlayerOzPlayerModuleLoaderDeferredForDisplay")
            ? (h.getBool(
                "instantiate_buffering_detector_before_quick_starter",
                !1
              ) &&
                d(
                  "VideoPlayerOzImplementationEnginePartsImplUtils"
                ).createOzBufferingDetector(
                  e,
                  g,
                  f.experimentationConfig,
                  X,
                  p,
                  W
                ),
              J(
                c("VideoPlayerOzPlayerModuleLoaderDeferredForDisplay")().load(),
                [].concat(b, [
                  "proceedWithResolvedVideoInfo",
                  "VideoPlayerOzPlayerModuleLoaderAsync",
                ])
              ))
            : V(
                new Error("Neither of OzPlayerModuleLoader is available."),
                "oz_player_module_loaders_missing"
              );
        },
        M = function (a, b, e, f, g) {
          try {
            var h = {
              OzPlayerClass: a,
              callChain: [].concat(g, [
                "proceedWithResolvedVideoInfoAndOzPlayerModuleSync",
              ]),
              destroyOzPlayerPartsRef: u,
              engineDebugAPI: B,
              engineExtrasAPI: Q,
              getCaptionsInfo: R,
              getLatencyLevelManager: A,
              getVideoLiveTrace: T,
              handleCaptionsInfoChange: U,
              handleFatalImplementationError: V,
              initialProps: i,
              logger: W,
              machine: X,
              ozBufferingDetectorRef: p,
              playerVersion: C,
              resolvedVideoInfo: f,
              videoElement: b,
            };
            a = y();
            g = i.loadSequence;
            a && a.getNumber("load_sequence_max_delay_ms", 0) > 0 && g != null
              ? (t.current = c(
                  "VideoPlayerImplementationLoadSequenceManager"
                ).schedule(a, g, function () {
                  d(
                    "VideoPlayerOzImplementationEnginePartsImplFunction"
                  ).proceedWithOzPlayerCreation(
                    babelHelpers["extends"]({}, h, {
                      hivePluginRef: q,
                      overrideOzRequestImplementationRef: s,
                      ozPlayerRef: o,
                      p2pSessionLoggerRef: r,
                    })
                  );
                  return e.getCanPlayPromise();
                }))
              : d(
                  "VideoPlayerOzImplementationEnginePartsImplFunction"
                ).proceedWithOzPlayerCreation(
                  babelHelpers["extends"]({}, h, {
                    hivePluginRef: q,
                    overrideOzRequestImplementationRef: s,
                    ozPlayerRef: o,
                    p2pSessionLoggerRef: r,
                  })
                );
            l.current = f;
          } catch (a) {
            V(a, "oz_player_create_exception");
          }
        };
      function N(a) {
        var b = u.current;
        b != null && ((u.current = null), b(a));
        t.current != null && (t.current(), (t.current = null));
      }
      function O() {
        return;
      }
      function P() {
        (m.current = null), (n.current = null);
      }
      var Q = d(
        "VideoPlayerOzImplementationEngineExtrasAPI"
      ).createVideoPlayerOzImplementationEngineExtrasAPI({
        getConfig: y,
        getOzPlayer: x,
        getVideoElementAPI: z,
      });
      z = d(
        "VideoPlayerImplementationEngineAPI"
      ).createVideoPlayerImplementationEngine({
        checkInDOM: e,
        createDebugAPI: function (b) {
          var a = b.getVideoElementAPI;
          b = b.logger;
          return B
            ? B.createDebugAPI({
                engineExtrasAPI: Q,
                getConfig: function () {
                  var a;
                  return (a =
                    (a = l.current) == null
                      ? void 0
                      : a.experimentationConfig) != null
                    ? a
                    : null;
                },
                getManifest: function () {
                  var a;
                  return (a =
                    (a = l.current) == null
                      ? void 0
                      : a.manifestXmlStringResolved) != null
                    ? a
                    : null;
                },
                getManifestUrl: function () {
                  var a;
                  return (a =
                    (a = l.current) == null ? void 0 : a.manifestUrl) != null
                    ? a
                    : null;
                },
                getOzBufferingDetector: w,
                getOzPlayer: x,
                getVideoElementAPI: a,
                logger: b,
              })
            : null;
        },
        createVideoPlayerError: d("VideoPlayerImplementationErrors")
          .createVideoPlayerErrorFromOzImplementationError,
        debugLog: h,
        debugLogId: f,
        destroyEngineParts: function (a) {
          N([].concat(a, ["destroyEngineParts"])), O(), P();
        },
        engineExtrasAPI: Q,
        engineMetadata: {
          isAbrEnabled: !0,
          isExternalMedia: !1,
          playerImplementationName: "oz_v2",
          playerVersion: C,
          streamingFormat: "dash",
        },
        handleFatalError: g,
        handleVideoElementMounted: function (a) {
          var b = S();
          L(n.current, [].concat(a, ["handleVideoElementMounted"]));
        },
        handleVideoElementUnmounted: function (a) {
          c("gkx")("1380112") &&
            N([].concat(a, ["handleVideoElementUnmounted"]));
        },
        handleVideoInfoChange: I,
        initialProps: i,
        setExposedStateInReact: a,
      });
      e = z.engine;
      var R = z.getCaptionsInfo,
        S = z.getVideoElement,
        T = z.getVideoLiveTrace,
        U = z.handleCaptionsInfoChange,
        V = z.handleFatalImplementationError,
        W = z.logger,
        X = z.machine,
        Y = z.videoElementAPIRef;
      return e;
    }
    g.createVideoPlayerOzImplementationEngine = a;
  },
  98
);
__d(
  "VideoPlayerOzImplementationV2.react",
  [
    "VideoPlayerImplementationEngineAPI",
    "VideoPlayerOzImplementationEngine",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    function a(a) {
      a = d(
        "VideoPlayerImplementationEngineAPI"
      ).useVideoPlayerImplementationEngine(
        a,
        d("VideoPlayerOzImplementationEngine")
          .createVideoPlayerOzImplementationEngine
      );
      a = a.reactVideoFrameAndComponents;
      return a;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerProgressiveImplementationData",
  ["err"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      return /\.mpd(\?|$)/.test(a);
    }
    function a(a) {
      var b = a.hdSrc,
        d = a.hdSrcPreferred,
        e = a.isExternalMedia;
      a = a.sdSrc;
      if (b == null && a == null) {
        var f = c("err")(
          "both HD and SD browser-native URLs are not available"
        );
        f.name = "VideoImplementationsNoBrowserNativeURLs";
        return f;
      }
      if (a == null) {
        f = c("err")("browser-native SD URL is not available");
        f.name = "VideoImplementationsNoBrowserNativeSDURL";
        return f;
      }
      f = h(a);
      var g = b != null && h(b);
      if (f || g) {
        f = c("err")("HD or SD browser-native URL points to a DASH manifest");
        f.name = "VideoImplementationsBrowserNativeURLsPointToDASH";
        return f;
      }
      return {
        hdSrc: b,
        hdSrcPreferred: d,
        isExternalMedia: e === !0,
        sdSrc: a,
      };
    }
    g.makeProgressiveImplementationData = a;
  },
  98
);
__d(
  "VideoPlayerProgressiveImplementationEngineExtrasAPI",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function g(a) {
      return a !== null && a.indexOf(".m3u8") !== -1;
    }
    function a(a) {
      var b = a.getPlayingVideoInfo;
      a = a.setUserSelectedVideoQuality;
      return {
        getApproximateFBLSToPlayerDisplayLatency: function () {
          return null;
        },
        getAudioRepresentationIDAtTime: function (a) {
          return null;
        },
        getAvailableAudioTracks: function () {
          var a;
          return (a = (a = b()) == null ? void 0 : a.availableAudioTracks) !=
            null
            ? a
            : [];
        },
        getAvailableVideoQualities: function () {
          var a;
          return (a = (a = b()) == null ? void 0 : a.availableQualities) != null
            ? a
            : [];
        },
        getCurrentAudioRepresentation: function () {
          return null;
        },
        getCurrentPlayingAudioTrackID: function () {
          var a;
          return (a = (a = b()) == null ? void 0 : a.playingAudioTrackID) !=
            null
            ? a
            : null;
        },
        getCurrentPlayingVideoQuality: function () {
          var a;
          return (a = (a = b()) == null ? void 0 : a.targetQuality) != null
            ? a
            : "";
        },
        getCurrentTargetVideoQuality: function () {
          var a;
          return (a = (a = b()) == null ? void 0 : a.targetQuality) != null
            ? a
            : "";
        },
        getCurrentVideoRepresentation: function () {
          return null;
        },
        getEstimatedBandwidth: function () {
          return null;
        },
        getInbandCaptionsAutogeneratedFromManifest: function () {
          return !1;
        },
        getInbandCaptionsExpectedFromManifest: function () {
          return !1;
        },
        getManifestIdentifier: function () {
          return null;
        },
        getMpdValidationErrors: function () {
          return null;
        },
        getPerfLoggerProvider: function () {
          return null;
        },
        getRepresentationCaptionsExpectedFromManifest: function () {
          return !1;
        },
        getStreamType: function () {
          var a = b();
          return a == null
            ? "progressive"
            : g(a.hdSrc) || g(a.sdSrc)
            ? "hls"
            : "progressive";
        },
        getUserSelectedAudioTrackID: function () {
          return null;
        },
        getUserSelectedVideoQuality: function () {
          var a;
          return (a = (a = b()) == null ? void 0 : a.selectedQuality) != null
            ? a
            : "notselected";
        },
        getVideoProjectionType: function () {
          return "cubemap";
        },
        getVideoRepresentationIDAtTime: function (a) {
          return "oep_hd";
        },
        getVideoRepresentations: function () {
          return null;
        },
        isDrm: function () {
          var a;
          return ((a = b()) == null ? void 0 : a.graphQLVideoDRMInfo) != null;
        },
        isFBIsLiveTemplated: function () {
          return !1;
        },
        isFBMS: function () {
          return !1;
        },
        isFBWasLive: function () {
          return !1;
        },
        isPredictiveDash: function () {
          return !1;
        },
        setDimensions: function (a) {},
        setEnableLiveheadCatchup: function () {},
        setLatencyLevel: function () {},
        setUserSelectedAudioTrackID: function () {},
        setUserSelectedVideoQuality: a,
      };
    }
    f.createVideoPlayerProgressiveImplementationEngineExtrasAPI = a;
  },
  66
);
__d(
  "VideoPlayerProgressiveImplementationEngineUtils",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = "hd",
      h = "sd";
    function a(a) {
      var b = [];
      a.sdSrc != null && b.push(h);
      a.hdSrc != null && b.push(g);
      var c = [],
        d = a.hdSrcPreferred && a.hdSrc != null ? g : h;
      return babelHelpers["extends"]({}, a, {
        availableAudioTracks: c,
        availableQualities: b,
        playingAudioTrackID: null,
        playingQuality: null,
        playingSrc: null,
        selectedQuality: d,
        targetQuality: d,
        targetSrc: null,
      });
    }
    function b(a, b) {
      var c = a.hdSrc,
        d = a.sdSrc,
        e,
        f;
      b === "notselected" || b === "auto"
        ? ((e = d != null ? h : c != null ? g : h),
          (f = d != null ? d : c != null ? c : null))
        : b === g && c != null
        ? ((e = g), (f = c))
        : b === h && d != null
        ? ((e = h), (f = d))
        : ((e = h), (f = null));
      f === "" && (f = null);
      return babelHelpers["extends"]({}, a, {
        selectedQuality: b,
        targetQuality: e,
        targetSrc: f,
      });
    }
    function c(a, b, c) {
      return babelHelpers["extends"]({}, a, {
        playingQuality: b,
        playingSrc: c,
      });
    }
    f.createResolvedVideoInfoProgressive = a;
    f.updatePlayingVideoInfoProgressiveWithUserSelectedQuality = b;
    f.updatePlayingVideoInfoProgressiveWithCurrentPlayingQuality = c;
  },
  66
);
__d(
  "VideoPlayerProgressiveImplementationEngine",
  [
    "UserAgent",
    "VideoPlayerImplementationEngineAPI",
    "VideoPlayerImplementationEngineVideoElementAPI",
    "VideoPlayerImplementationErrors",
    "VideoPlayerODS",
    "VideoPlayerProgressiveImplementationEngineExtrasAPI",
    "VideoPlayerProgressiveImplementationEngineUtils",
    "cr:1473550",
    "cr:1680308",
    "emptyFunction",
    "err",
    "gkx",
    "promiseDone",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = c("emptyFunction");
    function i(a, b, c) {
      return d(
        "VideoPlayerImplementationErrors"
      ).createVideoPlayerErrorFromGenericError(
        "PROGRESSIVE_JAVASCRIPT_NATIVE",
        a,
        b,
        c
      );
    }
    function a(a) {
      var e = a.checkInDOM,
        f = a.debugLogId,
        g = a.handleFatalError,
        j = a.initialProps;
      a = a.setExposedStateInReact;
      var k = { current: null },
        l = { current: null },
        m = { current: null },
        n = { current: null },
        o = function () {
          var a = u(),
            e = l.current;
          if (a == null || e == null) return;
          c("gkx")("6737") &&
            a.addEventListener("error", function () {
              w(a.error, "progressive_implementation_error");
            });
          try {
            var f = e.audioOnly,
              g = e.graphQLVideoDRMInfo,
              h = e.videoFBID;
            f === !0 && (a.style.display = "none");
            f = g ? ((f = g.fairplayCert) != null ? f : null) : null;
            if (b("cr:1680308") && g && f != null && h != null) {
              n.current = b("cr:1680308").newIfSupported(
                f,
                a,
                h,
                g.videoLicenseUriMap
              );
              if (n.current == null) {
                f = c("err")("Fairplay not supported");
                w(f, "progressive_player_fairplay_handler_missing");
              } else
                n.current.addListener("error", function (a) {
                  a = c("err")(a.error);
                  w(a, "progressive_player_fairplay_handler_error");
                });
            }
            var i = d(
              "VideoPlayerImplementationEngineVideoElementAPI"
            ).createVideoPlayerImplementationEngineVideoElementAPI(
              a,
              j.isExternalMedia
            );
            y.current = i;
            m.current = e;
            h = t();
            v({
              inbandCaptionsAutogeneratedFromManifest:
                r.getInbandCaptionsAutogeneratedFromManifest(),
              inbandCaptionsExpectedFromManifest:
                r.getInbandCaptionsExpectedFromManifest(),
              inbandCaptionsExpectedFromProps:
                h == null ? void 0 : h.inbandCaptionsExpectedFromProps,
              representationCaptionsExpectedFromManifest:
                r.getRepresentationCaptionsExpectedFromManifest(),
              sideLoadCaptionsExpectedFromProps:
                h == null ? void 0 : h.sideLoadCaptionsExpectedFromProps,
              sideLoadCaptionsUrlFromProps:
                h == null ? void 0 : h.sideLoadCaptionsUrlFromProps,
            });
            x.dispatch({
              payload: {
                availableAudioTracks: r.getAvailableAudioTracks(),
                availableQualities: r.getAvailableVideoQualities(),
                selectedAudioTrackID: r.getUserSelectedAudioTrackID(),
                selectedVideoQuality: r.getUserSelectedVideoQuality(),
                streamingFormat: r.getStreamType(),
                targetVideoQuality: r.getCurrentTargetVideoQuality(),
                videoProjection: r.getVideoProjectionType(),
              },
              type: "implementation_engine_initialized",
            });
            g = function () {
              i.setPlayheadPosition(j.startTimestamp);
            };
            c("UserAgent").isBrowser("IE11")
              ? c("promiseDone")(i.getDOMLoadedMetadataPromise().then(g))
              : g();
          } catch (a) {
            w(a, "progressive_player_create_exception");
          }
        },
        p = function (a, b) {
          if (b == null) return !0;
          else if (a.videoFBID !== b.videoFBID) {
            var c = 14;
            d("VideoPlayerODS").bumpEntityKey(
              "comet_video_player",
              "ProgressiveImplementation.video_fbid_changed",
              c
            );
            return !1;
          } else if (a.hdSrc !== b.hdSrc || a.sdSrc !== b.sdSrc) {
            c = 14;
            d("VideoPlayerODS").bumpEntityKey(
              "comet_video_player",
              "ProgressiveImplementation.src_changed",
              c
            );
            return !1;
          } else return !1;
        },
        q = function (a) {
          var b;
          b = {
            audioOnly: a.audioOnly,
            graphQLVideoDRMInfo: (b = a.graphQLVideoDRMInfo) != null ? b : null,
            hdSrc: a.hdSrc === "" ? null : (b = a.hdSrc) != null ? b : null,
            hdSrcPreferred: a.hdSrcPreferred,
            sdSrc: a.sdSrc === "" ? null : (b = a.sdSrc) != null ? b : null,
            videoFBID: a.videoFBID,
          };
          if (!p(b, k.current)) return !1;
          if (b.hdSrc == null && b.sdSrc == null)
            throw c("unrecoverableViolation")(
              "Empty hdSrc and sdSrc",
              "comet_video_player"
            );
          k.current = b;
          l.current = d(
            "VideoPlayerProgressiveImplementationEngineUtils"
          ).createResolvedVideoInfoProgressive(b);
          o();
          return !0;
        },
        r = d(
          "VideoPlayerProgressiveImplementationEngineExtrasAPI"
        ).createVideoPlayerProgressiveImplementationEngineExtrasAPI({
          getPlayingVideoInfo: function () {
            return m.current;
          },
          setUserSelectedVideoQuality: function (a) {
            var b = m.current;
            if (!b)
              throw c("unrecoverableViolation")(
                "Attempt to switch quality when playingVideoInfo does not exist",
                "comet_video_player"
              );
            var e = y.current;
            if (!e)
              throw c("unrecoverableViolation")(
                "Attempt to switch quality when videoElementAPI does not exist",
                "comet_video_player"
              );
            m.current = d(
              "VideoPlayerProgressiveImplementationEngineUtils"
            ).updatePlayingVideoInfoProgressiveWithUserSelectedQuality(b, a);
            b = m.current.targetSrc;
            e.setSrc(b);
            if (b != null) {
              b =
                (a =
                  x.getCurrentState().uncontrolledState
                    .videoElementPlayheadPosition) != null
                  ? a
                  : 0;
              b > 0 && e.setPlayheadPosition(b);
              x.getCurrentState().controlledState.playbackState === "playing" &&
                e.play();
              x.dispatch({
                payload: {
                  targetVideoQuality: r.getCurrentTargetVideoQuality(),
                },
                type: "representation_changed",
              });
            }
          },
        }),
        s = function () {
          n.current && (n.current.destroy(), (n.current = null));
        };
      e = d(
        "VideoPlayerImplementationEngineAPI"
      ).createVideoPlayerImplementationEngine({
        checkInDOM: e,
        createDebugAPI: function (a) {
          var c = a.getVideoElementAPI;
          a = a.logger;
          return b("cr:1473550")
            ? b("cr:1473550").createVideoPlayerImplementationDebugAPI({
                engineExtrasAPI: r,
                getVideoElementAPI: c,
                logger: a,
              })
            : null;
        },
        createVideoPlayerError: function (a, b) {
          return i(a, b, (a = m.current) == null ? void 0 : a.targetSrc);
        },
        debugLog: h,
        debugLogId: f,
        destroyEngineParts: function () {
          s();
        },
        engineExtrasAPI: r,
        engineMetadata: {
          isAbrEnabled: !1,
          isExternalMedia: j.isExternalMedia,
          playerImplementationName: "progressive_v2",
          playerVersion: "comet_progressive",
          streamingFormat: "progressive",
        },
        handleFatalError: g,
        handleVideoElementMounted: o,
        handleVideoElementUnmounted: function () {},
        handleVideoInfoChange: q,
        initialProps: j,
        setExposedStateInReact: a,
      });
      f = e.engine;
      var t = e.getCaptionsInfo,
        u = e.getVideoElement,
        v = e.handleCaptionsInfoChange,
        w = e.handleFatalImplementationError,
        x = e.machine,
        y = e.videoElementAPIRef;
      return f;
    }
    g.createVideoPlayerProgressiveImplementationEngine = a;
  },
  98
);
__d(
  "VideoPlayerProgressiveImplementationV2.react",
  [
    "VideoPlayerImplementationEngineAPI",
    "VideoPlayerProgressiveImplementationEngine",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    function a(a) {
      a = d(
        "VideoPlayerImplementationEngineAPI"
      ).useVideoPlayerImplementationEngine(
        a,
        d("VideoPlayerProgressiveImplementationEngine")
          .createVideoPlayerProgressiveImplementationEngine
      );
      a = a.reactVideoFrameAndComponents;
      return a;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "prepareVideoPlayerImplementations",
  [
    "ErrorMetadata",
    "ErrorSerializer",
    "VideoPlayerOzImplementationData",
    "VideoPlayerOzImplementationV2.react",
    "VideoPlayerOzWWWConfig",
    "VideoPlayerProgressiveImplementationData",
    "VideoPlayerProgressiveImplementationV2.react",
    "VideoPlayerShakaConfig",
    "err",
    "gkx",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b = a.browserNativeHdUrl,
        e = a.browserNativeSdUrl,
        f = a.canUseOz,
        g = a.dashManifestUrl,
        h = a.dashManifestUrlOverride_DO_NOT_USE,
        i = a.dashManifestXmlString,
        j = a.initialAudioUserPreferredLanguage,
        k = a.isExternalMedia,
        l = a.isSpherical,
        m = a.minQualityPreference,
        n = a.minQualityPreferenceOverrideFromProductSurface,
        o = a.preferBrowserNativeImplementation,
        p = a.sphericalVideoFallbackHdUrl,
        q = a.sphericalVideoFallbackSdUrl,
        r = a.videoFBID;
      a = a.videoPlayerShakaConfig;
      var s = [],
        t = [];
      if (o !== !0) {
        f = d("VideoPlayerOzImplementationData").makeOzImplementationData({
          canUseOz: f,
          dashManifestUrl: g,
          dashManifestUrlOverride_DO_NOT_USE: h,
          dashManifestXmlString: i,
          experimentationConfig: new (c("VideoPlayerOzWWWConfig"))(
            (o = a) != null ? o : new (c("VideoPlayerShakaConfig"))()
          ),
          initialAudioUserPreferredLanguage: j,
          minQualityPreference: m,
        });
        f instanceof Error
          ? t.push(f)
          : s.push({
              Component: c("VideoPlayerOzImplementationV2.react"),
              data: f,
              typename: "VideoPlayerOzImplementation",
            });
      }
      h = (g = n) != null ? g : m;
      o = d(
        "VideoPlayerProgressiveImplementationData"
      ).makeProgressiveImplementationData({
        hdSrc: l === !0 ? ((i = p) != null ? i : b) : b,
        hdSrcPreferred: c("gkx")("1129") || h === "HD" || h === "UHD",
        isExternalMedia: k,
        sdSrc: l === !0 ? ((a = q) != null ? a : e) : e,
      });
      o instanceof Error
        ? t.push(o)
        : s.push({
            Component: c("VideoPlayerProgressiveImplementationV2.react"),
            data: o,
            typename: "VideoPlayerProgressiveImplementation",
          });
      if (s.length === 0) {
        j = c("err")(
          "Cannot play video: " +
            (t
              .map(function (a) {
                return c("ErrorSerializer").toReadableMessage(a);
              })
              .join("; ") || "Unknown error")
        );
        j.name =
          (f = t
            .map(function (a) {
              return a.name;
            })
            .join("_")) != null
            ? f
            : "VideoImplementationsUnknownError";
        j.project = "comet_video_player";
        g = (n = j.metadata) != null ? n : new (c("ErrorMetadata"))();
        j.metadata = g;
        r != null && g.addEntry("COMET_VIDEO", "VIDEO_ID", String(r));
        throw j;
      }
      return s;
    }
    g["default"] = a;
  },
  98
);
__d(
  "useVideoImplementationsParamsRelayImpl",
  [
    "CometRelay",
    "react",
    "useVideoImplementationsParamsRelayImpl_video.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react").useMemo;
    function a(a, c) {
      var e = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("useVideoImplementationsParamsRelayImpl_video.graphql")),
        a
      );
      return i(
        function () {
          var a;
          return {
            browserNativeHdUrl: e.browser_native_hd_url,
            browserNativeSdUrl: e.browser_native_sd_url,
            canUseOz: e.can_use_oz,
            dashManifestUrl: e.dash_manifest_url,
            dashManifestUrlOverride_DO_NOT_USE:
              c.dashManifestUrlOverride_DO_NOT_USE,
            dashManifestXmlString: e.dash_manifest,
            initialAudioUserPreferredLanguage: e.audio_user_preferred_language,
            isExternalMedia: e.is_rss_podcast_video,
            isSpherical: e.is_spherical,
            minQualityPreference: e.min_quality_preference,
            minQualityPreferenceOverrideFromProductSurface:
              c.minQualityPreferenceOverrideFromProductSurface,
            preferBrowserNativeImplementation:
              c.preferBrowserNativeImplementation,
            sphericalVideoFallbackHdUrl:
              (a = e.spherical_video_fallback_urls) == null ? void 0 : a.hd,
            sphericalVideoFallbackSdUrl:
              (a = e.spherical_video_fallback_urls) == null ? void 0 : a.sd,
            videoFBID: e.id,
            videoPlayerShakaConfig: c.videoPlayerShakaConfig,
          };
        },
        [
          c.dashManifestUrlOverride_DO_NOT_USE,
          c.minQualityPreferenceOverrideFromProductSurface,
          c.preferBrowserNativeImplementation,
          c.videoPlayerShakaConfig,
          e.audio_user_preferred_language,
          e.browser_native_hd_url,
          e.browser_native_sd_url,
          e.can_use_oz,
          e.dash_manifest,
          e.dash_manifest_url,
          e.id,
          e.is_rss_podcast_video,
          e.is_spherical,
          e.min_quality_preference,
          (a = e.spherical_video_fallback_urls) == null ? void 0 : a.hd,
          (a = e.spherical_video_fallback_urls) == null ? void 0 : a.sd,
        ]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useVideoImplementationsRelayImpl",
  [
    "prepareVideoPlayerImplementations",
    "react",
    "useVideoImplementationsParamsRelayImpl",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useMemo;
    function a(a, b) {
      var d = c("useVideoImplementationsParamsRelayImpl")(a, b);
      return h(
        function () {
          return c("prepareVideoPlayerImplementations")(d);
        },
        [d]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useVideoImplementationsRelay",
  ["useVideoImplementationsRelayImpl"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("useVideoImplementationsRelayImpl");
  },
  98
);
__d(
  "useVideoPlayerAudioAvailabilityInfoRelay",
  [
    "CometRelay",
    "VideoPlayerAudioAvailabilityInfo",
    "react",
    "useVideoPlayerAudioAvailabilityInfoRelay_video.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react").useMemo;
    function a(a) {
      var c = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("useVideoPlayerAudioAvailabilityInfoRelay_video.graphql")),
        a
      );
      return i(
        function () {
          return d(
            "VideoPlayerAudioAvailabilityInfo"
          ).makeVideoPlayerAudioAvailabilityInfo({
            audioAvailability: c.audio_availability,
            mutedSegmentsUnsanitized:
              c.muted_segments == null
                ? []
                : c.muted_segments.map(function (a) {
                    return {
                      muteEndTimeInSec: a.mute_end_time_in_sec,
                      muteStartTimeInSec: a.mute_start_time_in_sec,
                    };
                  }),
          });
        },
        [c.audio_availability, c.muted_segments]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "AudioSettingsVolumeSetting",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({ DEFAULT: "default", QUIET: "quiet" });
    f["default"] = a;
  },
  66
);
__d(
  "useVideoPlayerAudioSettings",
  [
    "AudioSettingsVolumeSetting",
    "CometRelay",
    "react",
    "useVideoPlayerAudioSettings_video.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react").useMemo,
      j = 1;
    e = 0.5;
    var k = null,
      l = new Map([
        ["default", j],
        ["quiet", e],
      ]);
    function a(a) {
      var e;
      a = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("useVideoPlayerAudioSettings_video.graphql")),
        a
      );
      e = (e = a.audio_settings) == null ? void 0 : e.video_volume_setting;
      var f = "DEFAULT";
      switch (e) {
        case "DEFAULT":
        case "QUIET":
          f = e;
          break;
        default:
          break;
      }
      e = c("AudioSettingsVolumeSetting")[f];
      var g = (f = l.get(e)) != null ? f : j,
        m = (e = a.audio_user_preferred_language) != null ? e : k;
      return i(
        function () {
          return { audioUserPreferredLanguage: m, preferredVolumeSetting: g };
        },
        [g, m]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useVideoPlayerCaptionsSettings",
  ["CometRelay", "useVideoPlayerCaptionsSettings_video.graphql"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = "DEFAULT",
      j = "BLACK",
      k = "WHITE",
      l = "DEFAULT";
    function a(a) {
      var c;
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("useVideoPlayerCaptionsSettings_video.graphql")),
        a
      );
      return {
        alwaysShowCaptions:
          (c =
            (c = a.captions_settings) == null
              ? void 0
              : c.always_show_captions) != null
            ? c
            : !1,
        captionDisplayStyle: {
          captionsBackgroundColor:
            (c =
              (c = a.captions_settings) == null
                ? void 0
                : c.captions_background_color) != null
              ? c
              : j,
          captionsBackgroundOpacity:
            (c =
              (c = a.captions_settings) == null
                ? void 0
                : c.captions_background_opacity) != null
              ? c
              : i,
          captionsTextColor:
            (c =
              (c = a.captions_settings) == null
                ? void 0
                : c.captions_text_color) != null
              ? c
              : k,
          captionsTextSize:
            (a =
              (c = a.captions_settings) == null
                ? void 0
                : c.captions_text_size) != null
              ? a
              : l,
        },
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "useVideoPlayerIMFFromVideoMetadata",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useDebugValue,
      i = b.useMemo;
    function a(a) {
      var b = a.isVideoBroadcast,
        c = a.specInlineJson;
      a.videoID;
      var d = b === !0;
      a = i(
        function () {
          return { imfExpectedFromEmsg: d, specInlineJson: c };
        },
        [d, c]
      );
      h({ useVideoPlayerIMFFromVideoMetadata: a });
      return a;
    }
    g["default"] = a;
  },
  98
);
__d(
  "useVideoPlayerIMFFromVideoMetadataRelay",
  [
    "CometRelay",
    "useVideoPlayerIMFFromVideoMetadata",
    "useVideoPlayerIMFFromVideoMetadataRelay_video.graphql",
    "useVideoPlayerIMFFromVideoMetadataRelay_video_imf_data.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i;
    function a(a) {
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("useVideoPlayerIMFFromVideoMetadataRelay_video.graphql")),
        a
      );
      var e = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b(
              "useVideoPlayerIMFFromVideoMetadataRelay_video_imf_data.graphql"
            )),
        a.video_imf_data
      );
      return c("useVideoPlayerIMFFromVideoMetadata")({
        isVideoBroadcast: a.is_video_broadcast,
        specInlineJson: e == null ? void 0 : e.spec_inline_json,
        videoID: a.id,
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "useVideoPlayerLiveLatencyKnobSettings",
  ["CometRelay", "useVideoPlayerLiveLatencyKnobSettings_video.graphql"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    function a(a) {
      var c;
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("useVideoPlayerLiveLatencyKnobSettings_video.graphql")),
        a
      );
      return {
        desiredLatencyMs:
          (c =
            (c = a.broadcast_low_latency_config) == null
              ? void 0
              : c.ll_desired_latency_ms) != null
            ? c
            : 0,
        latencyToleranceMs:
          (a =
            (c = a.broadcast_low_latency_config) == null
              ? void 0
              : c.ll_latency_tolerance_ms) != null
            ? a
            : 0,
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "useVideoPlayerShakaPerformanceLoggerBuilder",
  [
    "CometRelay",
    "useVideoPlayerShakaPerformanceLoggerBuilder_init.graphql",
    "useVideoPlayerShakaPerformanceLoggerBuilder_video.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i;
    h !== void 0
      ? h
      : (h = b("useVideoPlayerShakaPerformanceLoggerBuilder_init.graphql"));
    function a(a) {
      a = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b(
              "useVideoPlayerShakaPerformanceLoggerBuilder_video.graphql"
            )),
        a
      );
      var c = a.video_player_shaka_performance_logger_init2
        ? d("CometRelay").ModuleResource.read(
            a.video_player_shaka_performance_logger_init2
          )
        : null;
      a =
        (a = a.video_player_shaka_performance_logger_init2) == null
          ? void 0
          : a.per_session_sampling_rate;
      return c != null && a != null ? new c({ perSessionSampleRate: a }) : null;
    }
    g["default"] = a;
  },
  98
);
__d(
  "useVideoPlayerShakaPerformanceLoggerRelayImpl",
  [
    "CometRelay",
    "useVideoPlayerShakaPerformanceLoggerRelayImpl_init.graphql",
    "useVideoPlayerShakaPerformanceLoggerRelayImpl_video.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i;
    h !== void 0
      ? h
      : (h = b("useVideoPlayerShakaPerformanceLoggerRelayImpl_init.graphql"));
    function a(a) {
      a = d("CometRelay").useFragment(
        i !== void 0
          ? i
          : (i = b(
              "useVideoPlayerShakaPerformanceLoggerRelayImpl_video.graphql"
            )),
        a
      );
      var c = a.video_player_shaka_performance_logger_init
        ? d("CometRelay").ModuleResource.read(
            a.video_player_shaka_performance_logger_init
          )
        : null;
      c != null &&
        a.video_player_shaka_performance_logger_should_sample === !0 &&
        c.forceShouldSample();
      return c;
    }
    g["default"] = a;
  },
  98
);
__d(
  "useVideoPlayerShakaPerformanceLoggerRelay",
  ["useVideoPlayerShakaPerformanceLoggerRelayImpl"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("useVideoPlayerShakaPerformanceLoggerRelayImpl");
  },
  98
);
__d(
  "VideoPlayerRelay.react",
  [
    "CastingStateHooks",
    "CometPlaceholder.react",
    "CometRelay",
    "CometTrackingNodeProvider.react",
    "CurrentUser",
    "ErrorMetadata",
    "InstreamVideoAdBreaksPlayer.react",
    "JSResourceForInteraction",
    "VideoPlayerErrorBoundary.react",
    "VideoPlayerRelay_video.graphql",
    "VideoPlayerUnsupportedBrowserMessageFallback.react",
    "VideoPlayerXImplRelayWrapper.react",
    "XFBLatencySensitiveTypeUtils.facebook",
    "computeAspectRatio",
    "cr:1701936",
    "cr:4844",
    "cr:759",
    "defaultErrorBoundaryFallback",
    "deferredLoadComponent",
    "emptyFunction",
    "err",
    "getVideoPlayerAutoplayProps",
    "gkx",
    "lazyLoadComponent",
    "normalizeVideoPlayerLoopCount",
    "react",
    "requireDeferredForDisplay",
    "useGraphQLVideoAutoplayGatingResult",
    "useGraphQLVideoDRMInfo",
    "useGraphQLVideoP2PSettings",
    "usePremiumMusicVideoInterruptionSubscription",
    "useVideoImplementationsRelay",
    "useVideoPlayerAudioAvailabilityInfoRelay",
    "useVideoPlayerAudioSettings",
    "useVideoPlayerCaptionsSettings",
    "useVideoPlayerIMFFromVideoMetadataRelay",
    "useVideoPlayerLiveLatencyKnobSettings",
    "useVideoPlayerShakaPerformanceLoggerBuilder",
    "useVideoPlayerShakaPerformanceLoggerRelay",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    e = d("react");
    var j = e.useCallback,
      k = e.useTransition,
      l = (e = b("cr:4844")) != null ? e : c("emptyFunction"),
      m = (e = b("cr:759")) != null ? e : c("emptyFunction"),
      n = c("gkx")("5128"),
      o = c("gkx")("5194"),
      p = c("deferredLoadComponent")(
        c("requireDeferredForDisplay")(
          "VideoPlayerSphericalFallbackCover.react"
        ).__setRef("VideoPlayerRelay.react")
      ),
      q = c("lazyLoadComponent")(
        c("JSResourceForInteraction")(
          "VideoPlayerVideoIsCastingCover.react"
        ).__setRef("VideoPlayerRelay.react")
      );
    function r(a) {
      var c = a.video;
      a = babelHelpers.objectWithoutPropertiesLoose(a, ["video"]);
      c = d("CometRelay").useRefetchableFragment(
        h !== void 0 ? h : (h = b("VideoPlayerRelay_video.graphql")),
        c
      );
      var e = c[0],
        f = c[1];
      c = k();
      c[0];
      var g = c[1];
      c = j(
        function () {
          g(function () {
            f({}, { fetchPolicy: "network-only" });
          });
        },
        [f]
      );
      c = l(e, c);
      if (
        c != null &&
        c.fallback != null &&
        (a.disableVideoStatusFallbackIf == null
          ? void 0
          : a.disableVideoStatusFallbackIf(c.videoStatus)) !== !0
      ) {
        return (c = c.fallback) != null ? c : i.jsx(i.Fragment, {});
      }
      return i.jsx(s, babelHelpers["extends"]({}, a, { video: e }));
    }
    r.displayName = r.name + " [from " + f.id + "]";
    function s(a) {
      var e,
        f,
        g = a.accessToken,
        h = a.adClientToken,
        j = a.additionalLogData,
        k = a.audioOnly,
        l = a.autoplayGatingResult,
        r = a.bufferEndLimit,
        s = a.canAutoplay,
        t = a.children,
        u = a.disableCVCSubscription;
      u = u === void 0 ? !1 : u;
      var v = a.disableLoadingIndicator;
      v = v === void 0 ? !1 : v;
      var w = a.disableLogging,
        x = a.externalLogID,
        y = a.externalLogType,
        z = a.forceProgressive_EXPERIMENTAL;
      z = z === void 0 ? !1 : z;
      var A = a.graphQLVideoDRMInfo,
        B = a.initialForceHD;
      B = B === void 0 ? !1 : B;
      var C = a.initialTracePolicy,
        D = a.loadSequence,
        E = a.loopCount,
        F = a.manifestURL_DO_NOT_USE,
        G = a.playerFormat;
      G = G === void 0 ? "inline" : G;
      var H = a.playerOriginOverride,
        I = a.portalingEnabled,
        J = a.portalingFromVideoID,
        K = a.portalingPlaceMetaData,
        L = a.portalingRenderPlaceholder,
        M = a.poster,
        N = a.productAttribution,
        aa = a.renderVideoPixelsFit,
        ba = a.seoWebCrawlerVideoTracks,
        ca = a.source_VPL_LOGGING_HACK,
        da = a.startTimestamp,
        O = a.subOrigin,
        P = a.video,
        Q = a.volumeSetting;
      a = a.wrapVideoPixels_EXPERIMENTAL;
      var R = P.id;
      if (R == null || R === "") {
        var S = c("err")(
          "Cannot play video: Invalid video ID: %s",
          R === "" ? "an empty string" : String(R)
        );
        S.name = "VideoPlayerInvalidVideoID";
        S.project = "comet_video_player";
        throw S;
      }
      c("usePremiumMusicVideoInterruptionSubscription")(
        c("CurrentUser").getID()
      );
      S = P.dash_prefetch_experimental;
      e =
        ((e = P.video_available_captions_locales) != null ? e : []).find(
          function (a) {
            a = a.localized_creation_method;
            return a != null;
          }
        ) != null;
      f = d("XFBLatencySensitiveTypeUtils.facebook").toJSEnum(
        (f = P.latency_sensitive_config) == null
          ? void 0
          : f.broadcast_latency_sensitivity
      );
      var T = b("cr:1701936")(P, { adClientToken: h }),
        ea = m(R),
        fa = c("useGraphQLVideoP2PSettings")(P),
        U = c("useGraphQLVideoDRMInfo")(P);
      U = (A = A) != null ? A : U;
      A = !!(U && U.fairplayCert !== null);
      z =
        z === !0 ||
        A ||
        (n && !!P.is_live_streaming) ||
        (o && typeof MediaSource === "undefined");
      A = c("useVideoImplementationsRelay")(P, {
        dashManifestUrlOverride_DO_NOT_USE: F,
        minQualityPreferenceOverrideFromProductSurface: B ? "HD" : null,
        preferBrowserNativeImplementation: z,
        videoPlayerShakaConfig: T,
      });
      F = c("useVideoPlayerCaptionsSettings")(P);
      B = c("useVideoPlayerAudioSettings")(P);
      z = c("useVideoPlayerLiveLatencyKnobSettings")(P);
      T = z.desiredLatencyMs;
      z = z.latencyToleranceMs;
      var ga = c("useVideoPlayerAudioAvailabilityInfoRelay")(P),
        V = c("useGraphQLVideoAutoplayGatingResult")(P);
      V = c("getVideoPlayerAutoplayProps")(V, s, l);
      s = c("useVideoPlayerShakaPerformanceLoggerRelay")(P);
      l = c("useVideoPlayerShakaPerformanceLoggerBuilder")(P);
      var ha = c("useVideoPlayerIMFFromVideoMetadataRelay")(P),
        ia = i.jsx(c("CometPlaceholder.react"), {
          fallback: null,
          children: i.jsx(c("InstreamVideoAdBreaksPlayer.react"), {
            playerFormat: G,
            subOrigin: O,
            video: P,
          }),
        }),
        W = d("CastingStateHooks").useCastingVideoID(),
        X = d(
          "VideoPlayerUnsupportedBrowserMessageFallback.react"
        ).useVideoPlayerUnsupportedBrowserMessageFallback(
          P.unsupported_browser_message,
          R
        );
      if (X != null) return X;
      X = P.permalink_url;
      var Y = P.spherical_video_renderer;
      Y = Y
        ? i.jsx(d("CometRelay").MatchContainer, {
            match: Y,
            props: {
              playerFormat: G,
              sphericalVideoRenderer: Y,
              subOrigin: O,
              videoTahoeUrl: X,
            },
          })
        : null;
      X = P.is_spherical;
      var Z = P.is_spherical_enabled,
        $ = P.permalink_url;
      if (X === !0 && Z !== !0) {
        if ($ == null || $ === "") {
          X = c("err")(
            "Cannot play video: Empty permalink URL for a spherical video"
          );
          X.name = "VideoPlayerSphericalEmptyPermalinkURL";
          X.project = "comet_video_player";
          Z = (Z = X.metadata) != null ? Z : new (c("ErrorMetadata"))();
          Z.addEntry("COMET_VIDEO", "VIDEO_ID", R);
          X.metadata = Z;
          throw X;
        }
        return i.jsx(p, { videoTahoeUrl: $ });
      }
      if (W != null && W === R)
        return i.jsx(c("CometPlaceholder.react"), {
          fallback: null,
          children: i.jsx(q, { video: P }),
        });
      $ =
        (X =
          (Z = P.live_playback_instrumentation_configs) == null
            ? void 0
            : Z.is_client_triggered_trace_enabled) != null
          ? X
          : !1;
      W = c("normalizeVideoPlayerLoopCount")(E, P.is_looping, P.loop_count);
      Z = c("computeAspectRatio")(P.width, P.height);
      return i.jsx(
        c("VideoPlayerXImplRelayWrapper.react"),
        {
          VideoPlayerShakaPerformanceLoggerClass: s,
          accessToken: g,
          adClientToken: h,
          additionalLogData: j,
          alt: c("gkx")("1924962") ? P.animated_image_caption : void 0,
          alwaysShowCaptions: F.alwaysShowCaptions,
          areCaptionsAutogenerated: e,
          audioAvailabilityInfo: ga,
          audioOnly: P.is_podcast_video === !0 || k,
          autoplayGatingResult: V.autoplayGatingResult,
          autoplaySetting: V.autoplaySetting,
          broadcastId: P.broadcast_id,
          broadcastLatencySensitivity: f,
          broadcastStatus: P.broadcast_status,
          broadcasterOrigin: P.broadcaster_origin,
          bufferEndLimit: r,
          canAutoplay: V.canAutoplay,
          captionDisplayStyle: F.captionDisplayStyle,
          captionsUrl: P.captions_url,
          children: t,
          desiredLatencyMs: T,
          disableCVCSubscription: u,
          disableLoadingIndicator: v,
          disableLogging: w,
          expiredVideoUrlRefreshHandler: ea,
          externalLogID: x,
          externalLogType: y,
          graphQLVideoDRMInfo: U,
          graphQLVideoP2PSettings: fa,
          implementations: A,
          initialRepresentationIds: S,
          initialTracePolicy: C,
          instreamVideoAdBreaksPlayer: ia,
          isClientTriggeredTraceEnabled: $,
          isLiveStreaming: P.is_live_streaming,
          isLiveTraceEnabled: P.is_live_trace_enabled,
          isNCSR: P.is_ncsr,
          isPremiumMusicVideo: P.pmv_metadata != null,
          isVideoBroadcast: P.is_video_broadcast,
          latencyToleranceMs: z,
          loadSequence: D,
          loopCount: W,
          playerFormat: G,
          playerOriginOverride: H,
          portalingEnabled: I,
          portalingFromVideoID: J,
          portalingPlaceMetaData: K,
          portalingRenderPlaceholder: L,
          poster: M,
          productAttribution: N,
          renderVideoPixelsFit: aa,
          seoWebCrawlerVideoTracks: ba,
          source_VPL_LOGGING_HACK: ca,
          startTimestamp: da,
          subOrigin: O,
          videoFBID: R,
          videoPixelsAspectRatio: Z,
          videoPlayerIMFFromVideoMetadata: ha,
          videoPlayerShakaPerformanceLoggerBuilder: l,
          videoPlayerSpherical: Y,
          volumeSetting: Q !== void 0 ? Q : B.preferredVolumeSetting,
          wrapVideoPixels_EXPERIMENTAL: a,
        },
        R
      );
    }
    s.displayName = s.name + " [from " + f.id + "]";
    function a(a) {
      var b = a.doNotRenderErrorBoundaryIUnderstandIMustProvideMyOwn;
      b = b === void 0 ? !1 : b;
      var d = a.errorBoundaryFallback;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "doNotRenderErrorBoundaryIUnderstandIMustProvideMyOwn",
        "errorBoundaryFallback",
      ]);
      a = i.jsx(c("CometTrackingNodeProvider.react"), {
        trackingNode: 13,
        children: i.jsx(r, babelHelpers["extends"]({}, a)),
      });
      return b
        ? a
        : i.jsx(c("VideoPlayerErrorBoundary.react"), {
            description: "VideoPlayerRelayBoundary",
            fallback: (b = d) != null ? b : c("defaultErrorBoundaryFallback"),
            children: a,
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerCaptionsDisplayConfigContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({
      liveCaptionsTextAlignment: null,
      textSizeMapping: null,
    });
    g["default"] = b;
  },
  98
);
__d(
  "VideoPlayerCaptionsDisplay.react",
  [
    "VideoPlayerCaptionsDisplayConfigContext",
    "VideoPlayerControlsBottomRowAddOnContext",
    "VideoPlayerHooks",
    "react",
    "recoverableViolation",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useContext,
      j = {
        captionsCenterAlign: {
          justifyContent: "xl56j7k",
          textAlign: "x2b8uid",
          $$css: !0,
        },
        captionsContainer: {
          bottom: "xfqi8uc",
          boxSizing: "x9f619",
          display: "x78zum5",
          justifyContent: "xl56j7k",
          position: "x10l6tqk",
          textAlign: "x2b8uid",
          transitionDuration: "xu6gjpd",
          transitionProperty: "x11xpdln",
          transitionTimingFunction: "x1r7x56h",
          width: "xh8yej3",
          $$css: !0,
        },
        captionsDefault: {
          backgroundColor: "x18l40ae",
          color: "x14ctfv",
          fontSize: "x1lkfr7t",
          fontWeight: "xk50ysn",
          lineHeight: "x37zpob",
          marginTop: "xdj266r",
          marginEnd: "xv81d3b",
          marginBottom: "xat24cr",
          marginStart: "x5jn1jc",
          paddingTop: "xulzisn",
          paddingEnd: "x1msn8f2",
          paddingBottom: "x1uwfbks",
          paddingStart: "x1qobr7z",
          $$css: !0,
        },
        captionsLeftAlign: {
          justifyContent: "x1nhvcw1",
          textAlign: "x1yc453h",
          $$css: !0,
        },
        captionsRightAlign: {
          justifyContent: "x13a6bvl",
          textAlign: "xp4054r",
          $$css: !0,
        },
      },
      k = {
        BIG: "25px",
        BIGGER: "30px",
        BIGGEST: "34px",
        DEFAULT: "17px",
        MEDIUM: "21px",
        SMALL: "13px",
        SMALLEST: "8px",
      },
      l = { DARK: 0.75, DEFAULT: 0.45, LIGHT: 0.25, OPAQUE: 1, TRANSPARENT: 0 },
      m = {
        BLACK: "20, 22, 26",
        BLUE: "0, 0, 255",
        CYAN: "0, 255, 255",
        GREEN: "0, 255, 0",
        MAGENTA: "255, 0, 255",
        RED: "255, 0, 0",
        WHITE: "255, 255, 255",
        YELLOW: "255, 255, 0",
      };
    function n(a) {
      switch (a) {
        case "center":
          return j.captionsCenterAlign;
        case "left":
          return j.captionsLeftAlign;
        case "right":
          return j.captionsRightAlign;
        default:
          c("recoverableViolation")(
            "Unsupported captions text alignment: " + a,
            "comet_video_player"
          );
      }
    }
    function o(a, b, c) {
      var d = {},
        e = a.captionsBackgroundColor,
        f = a.captionsBackgroundOpacity,
        g = a.captionsTextColor;
      a = a.captionsTextSize;
      if (e !== null) {
        f = f !== null ? l[f] : 1;
        d.backgroundColor = "rgba(" + m[e] + "," + f + ")";
      }
      g !== null && (d.color = "rgba(" + m[g] + ")");
      a !== null &&
        (d.fontSize = b != null ? babelHelpers["extends"]({}, k, b)[a] : k[a]);
      c && (d.marginBottom = 35);
      return d;
    }
    function a(a) {
      var b = a.activeCaptions,
        e = a.adjustments;
      a = a.captionDisplayStyle;
      var f = b == null ? void 0 : b.rows,
        g = i(c("VideoPlayerCaptionsDisplayConfigContext")),
        k = g.liveCaptionsTextAlignment;
      g = g.textSizeMapping;
      var l = i(
        d("VideoPlayerControlsBottomRowAddOnContext")
          .VideoPlayerControlsBottomRowAddOnContext
      );
      l = (l == null ? void 0 : l.getBottomRowAddOn()) != null;
      var m = {};
      a && (m = o(a, g, l));
      a = d("VideoPlayerHooks").useIsLive();
      b =
        (l =
          b == null
            ? void 0
            : (g = b.styles) == null
            ? void 0
            : g.textAlignment) != null
          ? l
          : "center";
      if (f != null && f.length > 0) {
        g = f
          .map(function (a) {
            return a.trim();
          })
          .filter(function (a) {
            return !!a;
          });
        return g.length > 0
          ? h.jsx("div", {
              className: c("stylex")(
                j.captionsContainer,
                n(a ? ((l = k) != null ? l : b) : b)
              ),
              style: {
                paddingLeft: e.left,
                paddingRight: e.right,
                transform: "translateY(" + -e.bottom + "px)",
              },
              children: h.jsx("div", {
                className:
                  "x18l40ae x14ctfv x1lkfr7t xk50ysn x37zpob xdj266r xv81d3b xat24cr x5jn1jc xulzisn x1msn8f2 x1uwfbks x1qobr7z",
                style: m,
                children: g.map(function (a, b) {
                  return h.jsxs("span", { children: [a, h.jsx("br", {})] }, b);
                }),
              }),
            })
          : null;
      }
      return null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.memo(a);
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "useVideoPlayerCaptionsDisplayAdjustments",
  ["VideoPlayerHooks", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useMemo;
    function a() {
      var a = d("VideoPlayerHooks").useVideoPlayerCaptionsReservations();
      return h(
        function () {
          var b = { bottom: 0, left: 0, right: 0, top: 0 };
          a.length > 0 &&
            a.forEach(function (a) {
              b[a.location] += a.size;
            });
          return b;
        },
        [a]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerCaptions.react",
  [
    "VideoPlayerCaptionsDisplay.react",
    "VideoPlayerHooks",
    "react",
    "useVideoPlayerCaptionsDisplayAdjustments",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a() {
      var a = d("VideoPlayerHooks").useActiveCaptions(),
        b = c("useVideoPlayerCaptionsDisplayAdjustments")(),
        e = d("VideoPlayerHooks").useCaptionDisplayStyle();
      return h.jsx(c("VideoPlayerCaptionsDisplay.react"), {
        activeCaptions: a,
        adjustments: b,
        captionDisplayStyle: e,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerCaptionsArea.react",
  [
    "VideoPlayerCaptions.react",
    "VideoPlayerContexts",
    "VideoPlayerHooks",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useReducer,
      j = b.useState;
    function k(a, b) {
      switch (b.type) {
        case "reserve":
          return a.concat(b.reservation);
        case "release":
          return a.filter(function (a) {
            return a !== b.reservation;
          });
        default:
          return a;
      }
    }
    function a(a) {
      a = a.children;
      var b = i(k, []),
        e = b[0],
        f = b[1];
      b = j({
        release: function (a) {
          f({ reservation: a, type: "release" });
        },
        reserve: function (a) {
          f({ reservation: a, type: "reserve" });
          return a;
        },
      });
      b = b[0];
      var g = d("VideoPlayerHooks").useCaptionsVisible();
      return h.jsx(
        d("VideoPlayerContexts").VideoPlayerCaptionsReservationActionsContext
          .Provider,
        {
          value: b,
          children: h.jsxs(
            d("VideoPlayerContexts").VideoPlayerCaptionsReservationsContext
              .Provider,
            {
              value: e,
              children: [
                g ? h.jsx(c("VideoPlayerCaptions.react"), {}) : null,
                a,
              ],
            }
          ),
        }
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerSphericalMediaGyroOverlay.react",
  ["fbt", "react", "stylex"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = {
        gyroAnimate: { opacity: "x1hc1fzr", $$css: !0 },
        gyroEquator: {
          backgroundColor: "x1ahlmzr",
          borderTop: "xdo4eo8",
          borderEnd: "x104e7ho",
          borderBottom: "x146gacn",
          borderStart: "x1q9b8am",
          borderTopStartRadius: "x14yjl9h",
          borderTopEndRadius: "xudhj91",
          borderBottomEndRadius: "x18nykt9",
          borderBottomStartRadius: "xww2gxu",
          height: "x10c73hc",
          position: "x10l6tqk",
          top: "xwa60dl",
          transform: "x1cb1t30",
          width: "x1u78mur",
          willChange: "x5uqrmk",
          $$css: !0,
        },
        gyroEquatorAnimation: { animationName: "xxoll9x", $$css: !0 },
        gyroInfinite: {
          animationDelay: "x1x1c4bx",
          animationDuration: "x1c74tu6",
          animationIterationCount: "xa4qsjk",
          $$css: !0,
        },
        gyroInner: {
          borderTop: "xb2d7b1",
          borderEnd: "xo26eqo",
          borderBottom: "xmk2xwg",
          borderStart: "x8nt7p6",
          borderTopStartRadius: "x14yjl9h",
          borderTopEndRadius: "xudhj91",
          borderBottomEndRadius: "x18nykt9",
          borderBottomStartRadius: "xww2gxu",
          height: "xng8ra",
          position: "x10l6tqk",
          start: "xit27t2",
          top: "xndqk7f",
          transform: "x7p49u4",
          transformStyle: "x1oyok0e",
          width: "x1247r65",
          $$css: !0,
        },
        gyroInnerAnimation: { animationName: "x1xwhoib", $$css: !0 },
        gyroMeridian: {
          borderTop: "xdo4eo8",
          borderEnd: "x104e7ho",
          borderBottom: "x146gacn",
          borderStart: "x1q9b8am",
          borderTopStartRadius: "x14yjl9h",
          borderTopEndRadius: "xudhj91",
          borderBottomEndRadius: "x18nykt9",
          borderBottomStartRadius: "xww2gxu",
          height: "xwa7hi",
          position: "x10l6tqk",
          start: "xtzzx4i",
          transform: "xuuh30",
          width: "xnhpnai",
          willChange: "x13w7htt",
          $$css: !0,
        },
        gyroMeridianAnimation: {
          animationName: "x3zwtg",
          animationTimingFunction: "x1esw782",
          $$css: !0,
        },
        gyroOuter: {
          backgroundColor: "xatbrnm",
          borderTopStartRadius: "x14yjl9h",
          borderTopEndRadius: "xudhj91",
          borderBottomEndRadius: "x18nykt9",
          borderBottomStartRadius: "xww2gxu",
          borderTopWidth: "x972fbf",
          borderEndWidth: "xcfux6l",
          borderBottomWidth: "x1qhh985",
          borderStartWidth: "xm0m39n",
          height: "xy75621",
          opacity: "x1hc1fzr",
          position: "x10l6tqk",
          start: "xtzzx4i",
          top: "xwa60dl",
          transform: "xnrv1ok",
          width: "xni59qk",
          $$css: !0,
        },
        gyroRoot: {
          backgroundColor: "xal61yo",
          height: "x5yr21d",
          opacity: "xg01cxk",
          position: "x10l6tqk",
          start: "xtzzx4i",
          top: "xwa60dl",
          transform: "x11lhmoz",
          transformStyle: "x1oyok0e",
          transitionDuration: "xippbsu",
          transitionProperty: "x19991ni",
          transitionTimingFunction: "xl405pv",
          width: "xh8yej3",
          zIndex: "x1vjfegm",
          $$css: !0,
        },
        gyroText: {
          borderTopWidth: "x972fbf",
          borderEndWidth: "xcfux6l",
          borderBottomWidth: "x1qhh985",
          borderStartWidth: "xm0m39n",
          color: "x14ctfv",
          fontFamily: "xjb2p0i",
          fontSize: "x1f6kntn",
          height: "xng8ra",
          lineHeight: "x1wus3qs",
          position: "x10l6tqk",
          start: "xtzzx4i",
          textAlign: "x2b8uid",
          transform: "xuuh30",
          width: "xnhpnai",
          $$css: !0,
        },
        gyroTextShell: {
          borderTopStartRadius: "x14yjl9h",
          borderTopEndRadius: "xudhj91",
          borderBottomEndRadius: "x18nykt9",
          borderBottomStartRadius: "xww2gxu",
          borderTopWidth: "x972fbf",
          borderEndWidth: "xcfux6l",
          borderBottomWidth: "x1qhh985",
          borderStartWidth: "xm0m39n",
          height: "xng8ra",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          position: "x10l6tqk",
          start: "xtzzx4i",
          top: "x1atx4j1",
          transform: "xuuh30",
          whiteSpace: "xuxw1ft",
          width: "xnhpnai",
          willChange: "x5uqrmk",
          $$css: !0,
        },
        gyroTextShellAnimation: { animationName: "xi294cv", $$css: !0 },
      };
    function a(a) {
      a = a.isActive;
      return i.jsx("div", {
        className: c("stylex")(j.gyroRoot, a && j.gyroAnimate),
        children: i.jsxs("div", {
          className:
            "xatbrnm x14yjl9h xudhj91 x18nykt9 xww2gxu x972fbf xcfux6l x1qhh985 xm0m39n xy75621 x1hc1fzr x10l6tqk xtzzx4i xwa60dl xnrv1ok xni59qk",
          children: [
            i.jsxs("div", {
              className:
                "x1x1c4bx x1c74tu6 xa4qsjk xb2d7b1 xo26eqo xmk2xwg x8nt7p6 x14yjl9h xudhj91 x18nykt9 xww2gxu xng8ra x10l6tqk xit27t2 xndqk7f x7p49u4 x1oyok0e x1247r65 x1xwhoib",
              children: [
                i.jsx("div", {
                  className:
                    "x1x1c4bx x1c74tu6 xa4qsjk xdo4eo8 x104e7ho x146gacn x1q9b8am x14yjl9h xudhj91 x18nykt9 xww2gxu xwa7hi x10l6tqk xtzzx4i xuuh30 xnhpnai x13w7htt x3zwtg x1esw782",
                }),
                i.jsx("div", {
                  className:
                    "x1x1c4bx x1c74tu6 xa4qsjk x1ahlmzr xdo4eo8 x104e7ho x146gacn x1q9b8am x14yjl9h xudhj91 x18nykt9 xww2gxu x10c73hc x10l6tqk xwa60dl x1cb1t30 x1u78mur x5uqrmk xxoll9x",
                }),
              ],
            }),
            i.jsx("div", {
              className:
                "x1x1c4bx x1c74tu6 xa4qsjk x14yjl9h xudhj91 x18nykt9 xww2gxu x972fbf xcfux6l x1qhh985 xm0m39n xng8ra x6ikm8r x10wlt62 x10l6tqk xtzzx4i x1atx4j1 xuuh30 xuxw1ft xnhpnai x5uqrmk xi294cv",
              children: h._("{=m0}", [
                h._implicitParam(
                  "=m0",
                  i.jsx("span", {
                    className:
                      "x972fbf xcfux6l x1qhh985 xm0m39n x14ctfv xjb2p0i x1f6kntn xng8ra x1wus3qs x10l6tqk xtzzx4i x2b8uid xuuh30 xnhpnai",
                    children: h._("360"),
                  })
                ),
              ]),
            }),
          ],
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerSphericalFallbackCover.react",
  [
    "fbt",
    "TetraText.react",
    "VideoPlayerSphericalMediaGyroOverlay.react",
    "react",
    "unrecoverableViolation",
    "useCometRouterDispatcher",
    "useFeedClickEventHandler",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = d("react").useState;
    function a(a) {
      var b = a.videoTahoeUrl,
        d = c("useCometRouterDispatcher")();
      a = j(!1);
      var e = a[0],
        f = a[1];
      if (d == null)
        throw c("unrecoverableViolation")(
          "Missing CometRouterDispatcher",
          "comet_video_player"
        );
      a = c("useFeedClickEventHandler")(function () {
        d.go(b, {});
      });
      return i.jsxs("div", {
        className:
          "x6s0dn4 x1ey2m1c x9f619 x1ypdohk x78zum5 xds687c xdt5ytf x13a6bvl x10l6tqk x17qophe x13vifvy",
        onClick: a,
        onMouseEnter: function () {
          return f(!0);
        },
        onMouseLeave: function () {
          return f(!1);
        },
        role: "link",
        tabIndex: 0,
        children: [
          i.jsx(c("VideoPlayerSphericalMediaGyroOverlay.react"), {
            isActive: !0,
          }),
          i.jsx("div", {
            className: "xwajptj x1n2onr6",
            children: e
              ? i.jsx(c("TetraText.react"), {
                  color: "primaryOnMedia",
                  type: "bodyLink3",
                  children: h._("Cliquez pour \u00e9largir"),
                })
              : null,
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
  "VideoPlayerSpinner.react",
  ["CometLoadingAnimation.react", "react", "stylex", "useDebouncedValue"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = 36,
      j = {
        spinner: {
          height: "xc9qbxq",
          opacity: "x1hc1fzr",
          position: "x10l6tqk",
          start: "xtzzx4i",
          top: "xwa60dl",
          transform: "x11lhmoz",
          transitionDelay: "x5w5eug",
          transitionDuration: "x13dflua",
          transitionProperty: "x19991ni",
          transitionTimingFunction: "xl405pv",
          width: "x14qfxbe",
          $$css: !0,
        },
        spinnerHidden: {
          opacity: "xg01cxk",
          transitionDelay: "x2p8vrm",
          transitionDuration: "x13dflua",
          transitionProperty: "x1jl3cmp",
          transitionTimingFunction: "xl405pv",
          visibility: "xlshs6z",
          $$css: !0,
        },
      };
    function a(a) {
      a = a.isVisible;
      var b = c("useDebouncedValue")(a, a ? 200 : 500);
      return h.jsx("div", {
        className: c("stylex")(j.spinner, !a && j.spinnerHidden),
        children: h.jsx(c("CometLoadingAnimation.react"), {
          animationPaused: !b,
          size: i,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerSurface.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var c = b.prototype;
      c.render = function () {
        return this.props.children != null ? this.props.children : null;
      };
      return b;
    })(a.PureComponent);
    g["default"] = b;
  },
  98
);
__d(
  "VideoPlayerFullscreenControl.react",
  [
    "fbt",
    "ix",
    "VideoPlayerControlIcon.react",
    "VideoPlayerHooks",
    "fbicon",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function a(a) {
      var b = a.onPress,
        e = a.onUserInteraction,
        f = a.shouldUnmute,
        g = d("VideoPlayerHooks").useController(),
        k = d("VideoPlayerHooks").useIsFullscreen(),
        l = d("VideoPlayerHooks").useLastMuteReason();
      a = k
        ? h._("Quitter le mode plein \u00e9cran")
        : h._("Passer en mode plein \u00e9cran");
      var m = function () {
        b && b(),
          g.requestSetIsFullscreen(!k),
          f === !0 &&
            l !== "user_initiated" &&
            g.setMuted(!1, "product_initiated"),
          e && e({ name: "video_fullscreen_button", type: "happened" });
      };
      return j.jsx(c("VideoPlayerControlIcon.react"), {
        icon: k
          ? d("fbicon")._(i("517758"), 20)
          : d("fbicon")._(i("517763"), 20),
        label: a,
        onPress: m,
        tooltip: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useVideoPlayerDefaultControlsVisibility",
  [
    "VideoPlayerHooks",
    "VideoPlayerInstreamAdsStateHooks",
    "VideoPlayerUserInteractionCounter",
    "clearTimeout",
    "react",
    "setTimeout",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useEffect,
      i = b.useState,
      j = 5e3;
    function a(a) {
      a = a === void 0 ? {} : a;
      var b = a.forceVisible,
        e = a.forceVisibleOnMount;
      a.isInteracting;
      a = d(
        "VideoPlayerUserInteractionCounter"
      ).useVideoPlayerUserInteractionCounter();
      var f = a.ongoingInteractionsCount;
      a = a.onUserInteraction;
      var g = d("VideoPlayerHooks").useEnded(),
        k = d("VideoPlayerHooks").useIsHovering(),
        l = d("VideoPlayerHooks").usePaused(),
        m = d("VideoPlayerHooks").useIsMouseIdle(),
        n = d("VideoPlayerHooks").useVideoPlaybackEnded(),
        o = d("VideoPlayerInstreamAdsStateHooks").useInstreamAdsIsStart();
      d("VideoPlayerUserInteractionCounter").useVideoPlayerUserInteraction(
        "video_pointer_active",
        k && !m,
        a
      );
      k = i(e === !0);
      var p = k[0],
        q = k[1];
      h(
        function () {
          if (!l && p) {
            var a = c("setTimeout")(function () {
              q(!1);
            }, j);
            return function () {
              c("clearTimeout")(a);
            };
          }
        },
        [p, l]
      );
      b === !0 || b === !1
        ? (m = b)
        : o
        ? (m = !1)
        : f > 0 || p
        ? (m = !0)
        : l
        ? (m = g ? n : !0)
        : (m = !1);
      return { isControlsVisible: m, onUserInteraction: a };
    }
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerDefaultControls.react",
  [
    "CometPlaceholder.react",
    "CometRelay",
    "CometWarningScreenContext",
    "VideoPlayerDefaultControlsProperties",
    "VideoPlayerDefaultControls_video.graphql",
    "VideoPlayerFullscreenControl.react",
    "VideoPlayerHooks",
    "cr:1875194",
    "deferredLoadComponent",
    "emptyFunction",
    "react",
    "requireDeferred",
    "useVideoPlayerBigPlayButtonOverlay",
    "useVideoPlayerDefaultControlsVisibility",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = (e = b("cr:1875194")) != null ? e : c("emptyFunction"),
      k = c("deferredLoadComponent")(
        c("requireDeferred")(
          "VideoPlayerDefaultControlsImplLive.react"
        ).__setRef("VideoPlayerDefaultControls.react")
      ),
      l = c("deferredLoadComponent")(
        c("requireDeferred")(
          "VideoPlayerDefaultControlsImplNotLive.react"
        ).__setRef("VideoPlayerDefaultControls.react")
      );
    function a(a) {
      var e,
        f = a.forceVisible,
        g = a.forceVisibleOnMount,
        m = a.mutedButtonVisibility,
        n = a.pictureInPictureControl,
        o = a.renderExpandControl,
        p = a.shouldRenderBigPlayButton,
        q = a.shouldRenderCaptionsControl,
        r = a.shouldRenderCostreamControl,
        s = a.shouldRenderExpandSidePanelControl,
        t = a.shouldRenderLivePauseControl,
        u = a.shouldRenderModeratorControl,
        v = a.shouldRenderQuietModeControl,
        w = a.shouldRenderWatchAndScrollControl,
        x = a.shouldUnmuteForBigPlayButton,
        y = a.skipControl,
        z = a.subOrigin,
        A = a.video;
      a = a.videoTahoeUrl;
      A = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("VideoPlayerDefaultControls_video.graphql")),
        A
      );
      e =
        (e = d("CometWarningScreenContext").useIsContentVisible()) != null
          ? e
          : !1;
      var B = j();
      B = B != null ? B.isSilentAtPlayhead : !1;
      var C = d("VideoPlayerHooks").useMuted(),
        D = d("VideoPlayerHooks").useIsLive();
      g = c("useVideoPlayerDefaultControlsVisibility")({
        forceVisible: f,
        forceVisibleOnMount: g,
      });
      var E = g.isControlsVisible;
      g = g.onUserInteraction;
      p = c("useVideoPlayerBigPlayButtonOverlay")({
        forceVisible: p != null ? p : f === !1 ? !1 : void 0,
        shouldUnmute: x,
      });
      f = p.bigPlayButtonElement;
      x = p.bigPlayButtonIsVisible;
      p = E && !x && e;
      E =
        m ===
        d("VideoPlayerDefaultControlsProperties").MutedButtonVisibility
          .SAME_AS_OTHER_CONTROLS
          ? p
          : (C || p || B) && !x;
      e =
        o != null
          ? o({ onUserInteraction: g })
          : i.jsx(c("VideoPlayerFullscreenControl.react"), {
              onUserInteraction: g,
            });
      m = D
        ? i.jsx(k, {
            expandControl: e,
            isControlsVisible: p,
            isVolumeControlVisible: E,
            onUserInteraction: g,
            pictureInPictureControl: n,
            shouldRenderCaptionsControl: q,
            shouldRenderCostreamControl: r,
            shouldRenderExpandSidePanelControl: s,
            shouldRenderModeratorControl: u,
            shouldRenderPauseControl: t,
            shouldRenderQuietModeControl: v,
            shouldRenderWatchAndScrollControl: w,
            subOrigin: z,
            video: A,
            videoTahoeUrl: a,
          })
        : i.jsx(l, {
            expandControl: e,
            isControlsVisible: p,
            isVolumeControlVisible: E,
            onUserInteraction: g,
            pictureInPictureControl: n,
            shouldRenderCaptionsControl: q,
            shouldRenderExpandSidePanelControl: s,
            shouldRenderQuietModeControl: v,
            shouldRenderWatchAndScrollControl: w,
            skipControl: y,
            subOrigin: z,
            video: A,
            videoTahoeUrl: a,
          });
      return i.jsxs(i.Fragment, {
        children: [
          f,
          i.jsx(c("CometPlaceholder.react"), { fallback: null, children: m }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useVideoPlayerShakaConfig",
  [
    "CometRelay",
    "VideoPlayerConnectionQuality",
    "VideoPlayerOzWWWGlobalConfig",
    "VideoPlayerShakaConfig",
    "oz-player/networks/OzBandwidthEstimator",
    "react",
    "useSelectedLatencySetting",
    "useVideoPlayerShakaConfig_video.graphql",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    e = d("react");
    var i = e.useEffect,
      j = e.useState;
    function a(a, e) {
      e = e.adClientToken;
      var f = d("CometRelay").useFragment(
          h !== void 0 ? h : (h = b("useVideoPlayerShakaConfig_video.graphql")),
          a
        ),
        g = e != null,
        k = f.is_spherical === !0,
        l = f.is_gaming_video === !0;
      e = c("useSelectedLatencySetting")(
        (a = f.id) != null ? a : "null",
        f.selected_latency_setting
      );
      var m = e[0];
      a = j(function () {
        var a;
        return new (c("VideoPlayerShakaConfig"))({
          connection_quality: d("VideoPlayerConnectionQuality").evaluate(
            function () {
              return c("oz-player/networks/OzBandwidthEstimator").getBandwidth(
                c("VideoPlayerOzWWWGlobalConfig")
              );
            }
          ),
          content_category: l ? "gaming" : "general",
          fbls_tier: ((a = f.fbls_tier) == null ? void 0 : a.startsWith("user"))
            ? "user"
            : "general",
          is_ad: g,
          is_latency_sensitive_broadcast:
            f.is_latency_sensitive_broadcast === !0,
          is_live: f.is_live_streaming === !0,
          is_spherical: k,
          latency_level: f.is_latency_menu_enabled === !0 ? m : "normal",
          player_format: "inline",
          servable_via_fmbs: !1,
          streaming_implementation: "default",
        });
      });
      var n = a[0];
      i(
        function () {
          n.setContext("is_ad", g);
        },
        [n, g]
      );
      i(
        function () {
          n.setContext("is_spherical", k);
        },
        [n, k]
      );
      return n;
    }
    g["default"] = a;
  },
  98
);
__d(
  "FocusTableUtils",
  [
    "FocusManager",
    "filterNulls",
    "focusKeyboardEventPropagation",
    "focusScopeQueries",
    "setElementCanTab",
  ],
  function (a, b, c, d, e, f, g) {
    function a(a) {
      return a.length === 1;
    }
    function h(a) {
      return a instanceof HTMLElement || a instanceof SVGElement;
    }
    function i(a, b) {
      var d,
        e = b instanceof HTMLElement && b.id !== "" ? b.id : null,
        f = new Set(
          b instanceof HTMLElement
            ? c("filterNulls")(
                [].concat(
                  ((d = b.getAttribute("aria-labelledby")) != null
                    ? d
                    : ""
                  ).split(" "),
                  ((d = b.getAttribute("aria-describedby")) != null
                    ? d
                    : ""
                  ).split(" "),
                  ((d = b.getAttribute("aria-owns")) != null ? d : "").split(
                    " "
                  ),
                  [b.getAttribute("aria-errormessage")]
                )
              ).filter(function (a) {
                return a !== "";
              })
            : []
        );
      d = document.createTreeWalker(
        a,
        NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT,
        {
          acceptNode: function (a) {
            if (a === b) return NodeFilter.FILTER_REJECT;
            if (a.nodeType === Node.TEXT_NODE && a.textContent.trim() === "")
              return NodeFilter.FILTER_REJECT;
            if (h(a) && f.has(a.id)) return NodeFilter.FILTER_REJECT;
            if (h(a) && a.getAttribute("aria-hidden") === "true")
              return NodeFilter.FILTER_REJECT;
            if (
              a instanceof HTMLLabelElement &&
              (a.htmlFor === e || a.contains(b))
            )
              return NodeFilter.FILTER_REJECT;
            if (a.hasChildNodes()) return NodeFilter.FILTER_SKIP;
            return h(a) &&
              a.getAttribute("aria-label") == null &&
              a.getAttribute("aria-labelledby") == null &&
              a.getAttribute("aria-describedby") == null &&
              a.getAttribute("alt") == null &&
              a.getAttribute("title") == null
              ? NodeFilter.FILTER_REJECT
              : NodeFilter.FILTER_ACCEPT;
          },
        }
      );
      var g = d.currentNode;
      while (g === a) g = d.nextNode();
      return g != null;
    }
    var j = new Set(["button", "checkbox", "radio", "reset", "submit"]),
      k = new Set(["checkbox", "link", "switch", "radio", "button"]),
      l = new Set(["a", "button"]);
    function m(a) {
      var b = a.getAttribute("role"),
        c = a.tagName.toLowerCase(),
        d = a instanceof HTMLInputElement ? a.type : null;
      if (a instanceof HTMLInputElement && j.has(d)) return !0;
      return k.has(b) || l.has(c) ? !0 : !1;
    }
    function n(a) {
      var b = [];
      a = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, {
        acceptNode: function (a) {
          return a instanceof HTMLElement && m(a)
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
        },
      });
      var c = a.nextNode();
      while (c) b.push(c), (c = a.nextNode());
      return b;
    }
    function o(a, b) {
      if (!b) return null;
      b = a.DO_NOT_USE_queryFirstNode(
        d("focusScopeQueries").tableCellScopeQuery
      );
      if (b == null) return null;
      a = n(b);
      a = (a = a) != null ? a : [];
      var c = a[0];
      a = a.slice(1);
      if (c != null && a.length === 0 && !i(b, c)) return c;
    }
    function p(a, b, c) {
      if (b) {
        var e = b.scopeRef.current;
        if (e !== null) {
          var f;
          f = o(e, (f = b.allowWithinCellNavigation) != null ? f : !1);
          a =
            (f = (f = f) != null ? f : e.DO_NOT_USE_queryFirstNode(a)) != null
              ? f
              : b.focusStaticCells === !0
              ? e.DO_NOT_USE_queryFirstNode(
                  d("focusScopeQueries").tableCellScopeQuery
                )
              : null;
          a !== null &&
            (document.activeElement != null &&
              d("setElementCanTab").setElementCanTab(
                document.activeElement,
                !1,
                b.focusStaticCells
              ),
            d("setElementCanTab").setElementCanTab(a, !0, b.focusStaticCells),
            d("FocusManager").focusElement(a),
            c != null &&
              (c.preventDefault(),
              d(
                "focusKeyboardEventPropagation"
              ).stopFocusKeyboardEventPropagation(c)));
        }
      }
    }
    function b(a, b, c) {
      if (b != null) {
        b = b.DO_NOT_USE_queryFirstNode(a);
        b !== null &&
          (d("setElementCanTab").setElementCanTab(b, !0),
          d("FocusManager").focusElement(b),
          c.preventDefault(),
          d("focusKeyboardEventPropagation").stopFocusKeyboardEventPropagation(
            c
          ));
      }
    }
    function q(a, b, c, d, e) {
      d = d[c];
      c = s(d, e);
      var f = 0,
        g,
        h,
        i;
      do {
        g = b - f;
        if (g >= 0) {
          i = r(d, g, e, a);
          if (i) return i;
        }
        h = b + f;
        if (h <= c) {
          i = r(d, h, e, a);
          if (i) return i;
        }
        f++;
      } while (g >= 0 && h <= c);
      return null;
    }
    function e(a, b, c, d, e, f, g, h) {
      var i = b.onNavigate;
      if (i) {
        var j = !1;
        e = v(e, d, h);
        var k = e[1];
        e = x(b, d, g);
        var l = e[0],
          m = e[1];
        if (l === null) return !1;
        b = {
          currentCellIndex: k,
          currentRowIndex: m,
          event: c,
          focusCell: function (a, b) {
            p(b || f, a, c);
          },
          getCell: function (a, b) {
            a = l[a];
            return a != null ? r(a, b, h) : null;
          },
          getCellByTag: function (a) {
            var b = q(a, k, m, l, h);
            if (b) return b;
            var c = l.length,
              d = m + 1;
            while (!0) {
              if (d === m) return null;
              if (d > c - 1) {
                d = 0;
                continue;
              }
              b = q(a, k, d, l, h);
              if (b) return b;
              d++;
            }
            return null;
          },
          preventDefault: function () {
            j = !0;
          },
          type: a,
        };
        i(b);
        if (j) return !0;
      }
      return !1;
    }
    function r(a, b, c, d) {
      a = a.getChildContextValues(c).filter(function (a) {
        return a != null && (d === void 0 || a.tag === d);
      });
      c = 0;
      for (var e = 0; e < a.length; e++) {
        var f = a[e];
        if (f) {
          c += (f && f.colSpan) || 1;
          if (c > b) return f;
        }
      }
      return null;
    }
    function f(a, b, c, d, e) {
      c = r(b, c, d);
      if (c !== null) {
        p(a, c, e);
        return;
      }
      c = b.getChildContextValues(d).filter(Boolean);
      c.length > 0 && p(a, c[c.length - 1], e);
    }
    function s(a, b) {
      b = (a = a.getChildContextValues(b).filter(Boolean)) != null ? a : [];
      a = 0;
      for (var c = 0; c < b.length; c++) {
        var d = b[c];
        d = d && ((d = d.colSpan) != null ? d : 1);
        a += d;
      }
      return a;
    }
    function t(a, b) {
      var c = 0;
      for (var d = 0; d < a.length; d++) {
        var e = a[d];
        if (e === null) continue;
        if (e.scopeRef.current === b) return [d, d + c];
        e = e.colSpan;
        typeof e === "number" && (c += e - 1);
      }
      return [-1, -1];
    }
    function u(a, b) {
      return a.getChildContextValues(b).filter(Boolean);
    }
    function v(a, b, c) {
      b = u(b, c);
      if (b.length > 0) {
        c = t(b, a);
        a = c[0];
        c = c[1];
        return [b, a, c];
      }
      return [null, -1, -1];
    }
    function w(a, b, c) {
      if (a) {
        a = a.scopeRef.current;
        if (a !== null) {
          a = a.getChildContextValues(b);
          b = [];
          for (var d = 0; d < a.length; d++) {
            var e = a[d];
            if (e) {
              var f;
              f = (f = e.scopeRef) == null ? void 0 : f.current;
              e = (e = c == null ? void 0 : c(e)) != null ? e : !0;
              f && e && b.push(f);
            }
          }
          return b;
        }
      }
      return null;
    }
    function x(a, b, c, d) {
      a = w(a, c, d);
      if (b && a && a.length > 0) {
        c = a.indexOf(b);
        return [a, c];
      }
      return [null, -1];
    }
    function y(a) {
      var b = a.altKey,
        c = a.ctrlKey,
        d = a.metaKey;
      a = a.shiftKey;
      return b === !0 || c === !0 || d === !0 || a === !0;
    }
    g.isPrintableCharacter = a;
    g.hasUnassociatedLeafNodes = i;
    g.isArrowKeyLessOperationElement = m;
    g.getCellSingleInteractiveContentNode = o;
    g.focusCell = p;
    g.focusRow = b;
    g.checkRowForMatch = q;
    g.handleOnNavigateBehavior = e;
    g.getCellByColumnIndex = r;
    g.focusCellByColumnIndex = f;
    g.getLength = s;
    g.getCellIndexes = t;
    g.getRowCells = u;
    g.getRowCellsWithIndexes = v;
    g.getRows = w;
    g.getRowsWithIndex = x;
    g.hasModifierKey = y;
  },
  98
);
__d(
  "FocusTable.react",
  [
    "FocusManager",
    "FocusTableUtils",
    "Locale",
    "ReactFocusEvent.react",
    "ReactKeyboardEvent.react",
    "focusKeyboardEventPropagation",
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
    function a(a) {
      var b = h.unstable_Scope,
        c = h.createContext(null),
        e = h.createContext(null),
        g = h.createContext(null);
      function n(e) {
        var f = e.children,
          g = e.wrapX,
          i = e.wrapY,
          m = e.wrapXToNextLine,
          n = e.tabScopeQuery,
          o = e.allowModifiers,
          q = e.pageJumpSize,
          r = q === void 0 ? l : q,
          s = e.onNavigate,
          t = e.disabled,
          u = e.withinCellTabScopeQuery;
        q = e.focusStaticCells;
        var v = q === void 0 ? !1 : q,
          w = k(null);
        e = j(
          function () {
            return {
              scopeRef: w,
              wrapXToNextLine: m,
              wrapX: g,
              wrapY: i,
              tabScopeQuery: n,
              allowModifiers: o,
              pageJumpSize: r,
              onNavigate: s,
              disabled: t,
              withinCellTabScopeQuery: u,
              focusStaticCells: v,
            };
          },
          [m, g, i, n, o, r, s, t, u, v]
        );
        var x = k(!1);
        q = d("ReactFocusEvent.react").useFocusWithin(
          w,
          j(
            function () {
              return {
                onFocusWithin: function (b) {
                  x.current ||
                    ((x.current = !0),
                    w.current &&
                      a &&
                      (p(w.current, a, !1),
                      d("setElementCanTab").setElementCanTab(b.target, !0, v)));
                },
              };
            },
            [x, v]
          )
        );
        return h.jsx(c.Provider, {
          value: e,
          children: h.jsx(b, { ref: q, children: f }),
        });
      }
      n.displayName = n.name + " [from " + f.id + "]";
      function o(a) {
        a = a.children;
        var c = k(null),
          d = j(function () {
            return { scopeRef: c };
          }, []);
        return h.jsx(e.Provider, {
          value: d,
          children: h.jsx(b, { ref: c, children: a }),
        });
      }
      o.displayName = o.name + " [from " + f.id + "]";
      function p(a, b, c) {
        a = a.DO_NOT_USE_queryAllNodes(b);
        if (a != null)
          for (b = 0; b < a.length; b++) {
            var e = a[b];
            d("setElementCanTab").setElementCanTab(e, c);
          }
      }
      function q(f) {
        var l = f.children,
          n = f.colSpan,
          o = f.tag,
          q = i(c),
          r = (f = i(e)) == null ? void 0 : f.scopeRef,
          s = k(null),
          t = k(!1),
          u = (q == null ? void 0 : q.withinCellTabScopeQuery) != null,
          v = q == null ? void 0 : q.focusStaticCells;
        d("ReactKeyboardEvent.react").useKeyboard(
          s,
          j(
            function () {
              return {
                onKeyDown: function (b) {
                  if (q && q.disabled === !0) return;
                  if (
                    d(
                      "focusKeyboardEventPropagation"
                    ).hasFocusKeyboardEventPropagationStopped(b)
                  )
                    return;
                  var c = s.current;
                  if (c === null || q === null) return;
                  if (r == null) return;
                  var f = r.current;
                  if (f === null) return;
                  var h = b.key,
                    i =
                      u &&
                      d("FocusTableUtils").getCellSingleInteractiveContentNode(
                        c,
                        u
                      ) == null,
                    j = t.current;
                  if (h === "Tab" && q) {
                    var k = q.tabScopeQuery,
                      l = q.scopeRef.current;
                    if (k && l) {
                      if (
                        d("FocusTableUtils").handleOnNavigateBehavior(
                          "TAB",
                          q,
                          b,
                          f,
                          c,
                          k,
                          e,
                          g
                        )
                      )
                        return;
                      var n = q.withinCellTabScopeQuery;
                      j && n != null
                        ? b.shiftKey
                          ? d("FocusManager").focusPreviousContained(
                              n,
                              c,
                              b,
                              !0
                            )
                          : d("FocusManager").focusNextContained(n, c, b, !0)
                        : (p(l, k, !1),
                          document.activeElement != null &&
                            d("setElementCanTab").setElementCanTab(
                              document.activeElement,
                              !0,
                              v
                            ));
                    }
                    return;
                  }
                  n = b.ctrlKey || b.metaKey;
                  l = h;
                  d("Locale").isRTL() &&
                    (h === "ArrowRight"
                      ? (l = "ArrowLeft")
                      : h === "ArrowLeft" && (l = "ArrowRight"));
                  switch (l) {
                    case "Home":
                      if (
                        d("FocusTableUtils").handleOnNavigateBehavior(
                          "HOME",
                          q,
                          b,
                          f,
                          c,
                          a,
                          e,
                          g
                        )
                      )
                        return;
                      if (j) return;
                      k = d("FocusTableUtils").getRowCellsWithIndexes(c, f, g);
                      l = k[0];
                      k = k[1];
                      var o = d("FocusTableUtils").getRowsWithIndex(q, f, e),
                        w = o[0];
                      o = o[1];
                      if (l !== null && w !== null)
                        if (n) {
                          if (o !== 0 || k !== 0) {
                            l = w[0];
                            d("FocusTableUtils").focusCellByColumnIndex(
                              a,
                              l,
                              0,
                              g,
                              b
                            );
                          }
                        } else if (k !== 0) {
                          l = w[o];
                          d("FocusTableUtils").focusCellByColumnIndex(
                            a,
                            l,
                            0,
                            g,
                            b
                          );
                        }
                      return;
                    case "End":
                      if (
                        d("FocusTableUtils").handleOnNavigateBehavior(
                          "END",
                          q,
                          b,
                          f,
                          c,
                          a,
                          e,
                          g
                        )
                      )
                        return;
                      if (j) return;
                      k = d("FocusTableUtils").getRowCellsWithIndexes(c, f, g);
                      w = k[0];
                      o = k[1];
                      l = d("FocusTableUtils").getRowsWithIndex(q, f, e);
                      k = l[0];
                      l = l[1];
                      if (w !== null && k !== null)
                        if (n) {
                          if (l !== k.length - 1 || o !== w.length - 1) {
                            l = k[k.length - 1];
                            k = l.getChildContextValues(g).filter(Boolean);
                            k.length > 0 &&
                              d("FocusTableUtils").focusCell(
                                a,
                                k[k.length - 1],
                                b
                              );
                          }
                        } else
                          o !== w[w.length - 1] &&
                            d("FocusTableUtils").focusCell(
                              a,
                              w[w.length - 1],
                              b
                            );
                      return;
                    case "ArrowUp":
                      if (m(b, q)) return;
                      if (
                        d("FocusTableUtils").handleOnNavigateBehavior(
                          "PREV_ROW",
                          q,
                          b,
                          f,
                          c,
                          a,
                          e,
                          g
                        )
                      )
                        return;
                      if (j) return;
                      l = d("FocusTableUtils").getRowCellsWithIndexes(c, f, g);
                      k = l[0];
                      o = l[2];
                      if (k !== null && q) {
                        w = d("FocusTableUtils").getRowsWithIndex(q, f, e);
                        l = w[0];
                        k = w[1];
                        if (l !== null)
                          if (k === 0) {
                            w = q.wrapY;
                            if (w === !0 && !n) {
                              w = l[l.length - 1];
                              d("FocusTableUtils").focusCellByColumnIndex(
                                a,
                                w,
                                o,
                                g,
                                b
                              );
                            }
                          } else if (n) {
                            w = l[0];
                            d("FocusTableUtils").focusCellByColumnIndex(
                              a,
                              w,
                              o,
                              g,
                              b
                            );
                          } else {
                            w = l[k - 1];
                            d("FocusTableUtils").focusCellByColumnIndex(
                              a,
                              w,
                              o,
                              g,
                              b
                            );
                          }
                      }
                      return;
                    case "PageUp":
                      if (
                        d("FocusTableUtils").handleOnNavigateBehavior(
                          "PAGE_UP",
                          q,
                          b,
                          f,
                          c,
                          a,
                          e,
                          g
                        )
                      )
                        return;
                      if (j) return;
                      l = d("FocusTableUtils").getRowCellsWithIndexes(c, f, g);
                      k = l[0];
                      w = l[2];
                      o = d("FocusTableUtils").getRowsWithIndex(q, f, e);
                      l = o[0];
                      o = o[1];
                      if (k !== null && l !== null && q && o !== 0) {
                        k = q.pageJumpSize;
                        l = l[Math.max(0, o - k)];
                        d("FocusTableUtils").focusCellByColumnIndex(
                          a,
                          l,
                          w,
                          g,
                          b
                        );
                      }
                      return;
                    case "ArrowDown":
                      if (m(b, q)) return;
                      if (
                        d("FocusTableUtils").handleOnNavigateBehavior(
                          "NEXT_ROW",
                          q,
                          b,
                          f,
                          c,
                          a,
                          e,
                          g
                        )
                      )
                        return;
                      if (j) return;
                      o = d("FocusTableUtils").getRowCellsWithIndexes(c, f, g);
                      k = o[0];
                      l = o[2];
                      w = d("FocusTableUtils").getRowsWithIndex(q, f, e);
                      o = w[0];
                      w = w[1];
                      if (k !== null && o !== null && q && w !== -1)
                        if (w === o.length - 1) {
                          k = q.wrapY;
                          if (k === !0 && !n) {
                            k = o[0];
                            d("FocusTableUtils").focusCellByColumnIndex(
                              a,
                              k,
                              l,
                              g,
                              b
                            );
                          }
                        } else if (n) {
                          k = o[o.length - 1];
                          d("FocusTableUtils").focusCellByColumnIndex(
                            a,
                            k,
                            l,
                            g,
                            b
                          );
                        } else {
                          n = o[w + 1];
                          d("FocusTableUtils").focusCellByColumnIndex(
                            a,
                            n,
                            l,
                            g,
                            b
                          );
                        }
                      return;
                    case "PageDown":
                      if (
                        d("FocusTableUtils").handleOnNavigateBehavior(
                          "PAGE_DOWN",
                          q,
                          b,
                          f,
                          c,
                          a,
                          e,
                          g
                        )
                      )
                        return;
                      if (j) return;
                      k = d("FocusTableUtils").getRowCellsWithIndexes(c, f, g);
                      o = k[0];
                      w = k[2];
                      n = d("FocusTableUtils").getRowsWithIndex(q, f, e);
                      l = n[0];
                      k = n[1];
                      if (o !== null && l !== null && q && k !== l.length - 1) {
                        n = q.pageJumpSize;
                        o = l[Math.min(l.length - 1, k + n)];
                        d("FocusTableUtils").focusCellByColumnIndex(
                          a,
                          o,
                          w,
                          g,
                          b
                        );
                      }
                      return;
                    case "ArrowLeft":
                      if (m(b, q)) return;
                      if (
                        d("FocusTableUtils").handleOnNavigateBehavior(
                          "PREV_CELL",
                          q,
                          b,
                          f,
                          c,
                          a,
                          e,
                          g
                        )
                      )
                        return;
                      if (j) return;
                      l = d("FocusTableUtils").getRowCellsWithIndexes(c, f, g);
                      k = l[0];
                      n = l[1];
                      o = d("FocusTableUtils").getRowsWithIndex(q, f, e);
                      w = o[0];
                      l = o[1];
                      if (k !== null && w !== null && q)
                        if (n > 0)
                          d("FocusTableUtils").focusCell(a, k[n - 1], b);
                        else if (n === 0) {
                          o = q.wrapX;
                          n = q.wrapXToNextLine;
                          o === !0
                            ? d("FocusTableUtils").focusCell(
                                a,
                                k[k.length - 1],
                                b
                              )
                            : n === !0 &&
                              w[l - 1] &&
                              d("FocusTableUtils").focusCellByColumnIndex(
                                a,
                                w[l - 1],
                                d("FocusTableUtils").getLength(w[l - 1], g),
                                g,
                                b
                              );
                        }
                      return;
                    case "ArrowRight":
                      if (m(b, q)) return;
                      if (
                        d("FocusTableUtils").handleOnNavigateBehavior(
                          "NEXT_CELL",
                          q,
                          b,
                          f,
                          c,
                          a,
                          e,
                          g
                        )
                      )
                        return;
                      if (j) return;
                      o = d("FocusTableUtils").getRowCellsWithIndexes(c, f, g);
                      k = o[0];
                      n = o[1];
                      w = d("FocusTableUtils").getRowsWithIndex(q, f, e);
                      l = w[0];
                      o = w[1];
                      if (k !== null && l !== null && q && n !== -1)
                        if (n === k.length - 1) {
                          w = q.wrapX;
                          var x = q.wrapXToNextLine;
                          w === !0
                            ? d("FocusTableUtils").focusCell(a, k[0], b)
                            : x === !0 &&
                              l[o + 1] &&
                              d("FocusTableUtils").focusCellByColumnIndex(
                                a,
                                l[o + 1],
                                0,
                                g,
                                b
                              );
                        } else d("FocusTableUtils").focusCell(a, k[n + 1], b);
                      return;
                    case "Enter":
                      if (!i || j) return;
                      if (
                        d("FocusTableUtils").handleOnNavigateBehavior(
                          "ENTER",
                          q,
                          b,
                          f,
                          c,
                          a,
                          e,
                          g
                        )
                      )
                        return;
                      w = q == null ? void 0 : q.withinCellTabScopeQuery;
                      if (w) {
                        x = c.DO_NOT_USE_queryFirstNode(w);
                        x != null &&
                          ((t.current = !0),
                          p(c, w, !0),
                          d("FocusManager").focusElement(x));
                      }
                      return;
                    case "Escape":
                      if (!i || !j) return;
                      if (
                        d("FocusTableUtils").handleOnNavigateBehavior(
                          "ESC",
                          q,
                          b,
                          f,
                          c,
                          a,
                          e,
                          g
                        )
                      )
                        return;
                      l = q == null ? void 0 : q.tabScopeQuery;
                      if (l) {
                        t.current = !1;
                        o = c.DO_NOT_USE_queryAllNodes(l);
                        if (o !== null)
                          for (k = 0; k < o.length; k++) {
                            n = o[k];
                            d("setElementCanTab").setElementCanTab(n, !1, v);
                          }
                        d("FocusTableUtils").focusCell(l, { scopeRef: s }, b);
                      }
                      return;
                    default:
                      d("FocusTableUtils").isPrintableCharacter(h) &&
                        d("FocusTableUtils").handleOnNavigateBehavior(
                          "PRINT_CHAR",
                          q,
                          b,
                          f,
                          c,
                          a,
                          e,
                          g
                        );
                  }
                },
              };
            },
            [r, q, u]
          )
        );
        var w = j(
            function () {
              return {
                scopeRef: s,
                colSpan: n,
                tag: o,
                allowWithinCellNavigation: u,
                focusStaticCells: v,
              };
            },
            [n, u, o, v]
          ),
          x = q == null ? void 0 : q.tabScopeQuery;
        f = d("ReactFocusEvent.react").useFocusWithin(
          s,
          j(
            function () {
              return {
                onFocusWithin: function (b) {
                  if (a != null) {
                    var c;
                    c =
                      (c = s.current) == null
                        ? void 0
                        : c.DO_NOT_USE_queryFirstNode(a);
                    var e = b.target === c;
                    if (e && c && !d("setElementCanTab").canElementTab(c)) {
                      e = q == null ? void 0 : q.scopeRef.current;
                      e && p(e, a, !1);
                      d("setElementCanTab").setElementCanTab(c, !0, v);
                    }
                  }
                  if (x != null) {
                    c =
                      (e = s.current) == null
                        ? void 0
                        : e.DO_NOT_USE_queryFirstNode(x);
                    e = b.target === c;
                    var f = w.allowWithinCellNavigation === !0;
                    e && f && d("FocusTableUtils").focusCell(x, w);
                    c != null &&
                      !e &&
                      f &&
                      b.target instanceof HTMLElement &&
                      !d("FocusTableUtils").isArrowKeyLessOperationElement(
                        b.target
                      ) &&
                      (t.current = !0);
                  }
                },
                onBlurWithin: function () {
                  t.current = !1;
                },
              };
            },
            [x, w, q == null ? void 0 : q.scopeRef]
          )
        );
        return h.jsx(g.Provider, {
          value: w,
          children: h.jsx(b, { ref: f, children: l }),
        });
      }
      q.displayName = q.name + " [from " + f.id + "]";
      return [n, o, q];
    }
    function m(a, b) {
      if (d("FocusTableUtils").hasModifierKey(a) && b) {
        a = b.allowModifiers;
        if (a !== !0) return !0;
      }
    }
    g.createFocusTable = a;
  },
  98
);
