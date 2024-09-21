/*FB_PKG_DELIM*/

__d(
  "ConnectedTVTypedLogger",
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
          "logger:ConnectedTVLoggerConfig",
          this.$1,
          b("Banzai").BASIC,
          a
        );
      };
      c.logVital = function (a) {
        b("GeneratedLoggerUtils").log(
          "logger:ConnectedTVLoggerConfig",
          this.$1,
          b("Banzai").VITAL,
          a
        );
      };
      c.logImmediately = function (a) {
        b("GeneratedLoggerUtils").log(
          "logger:ConnectedTVLoggerConfig",
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
      c.setAccessToken = function (a) {
        this.$1.access_token = a;
        return this;
      };
      c.setActionMethod = function (a) {
        this.$1.action_method = a;
        return this;
      };
      c.setActionSurface = function (a) {
        this.$1.action_surface = a;
        return this;
      };
      c.setActionTarget = function (a) {
        this.$1.action_target = a;
        return this;
      };
      c.setAudioOnly = function (a) {
        this.$1.audio_only = a;
        return this;
      };
      c.setCampaignID = function (a) {
        this.$1.campaign_id = a;
        return this;
      };
      c.setCastActivityName = function (a) {
        this.$1.cast_activity_name = a;
        return this;
      };
      c.setCastClientAppID = function (a) {
        this.$1.cast_client_app_id = a;
        return this;
      };
      c.setCastClientAppVersion = function (a) {
        this.$1.cast_client_app_version = a;
        return this;
      };
      c.setCastClientSeqNum = function (a) {
        this.$1.cast_client_seq_num = a;
        return this;
      };
      c.setCastClientTimeMs = function (a) {
        this.$1.cast_client_time_ms = a;
        return this;
      };
      c.setCastDeviceCount = function (a) {
        this.$1.cast_device_count = a;
        return this;
      };
      c.setCastSessionID = function (a) {
        this.$1.cast_session_id = a;
        return this;
      };
      c.setCastingDeviceType = function (a) {
        this.$1.casting_device_type = a;
        return this;
      };
      c.setChainingDepthLevel = function (a) {
        this.$1.chaining_depth_level = a;
        return this;
      };
      c.setClientSessionStartTimeMs = function (a) {
        this.$1.client_session_start_time_ms = a;
        return this;
      };
      c.setClientVideoBandwidth = function (a) {
        this.$1.client_video_bandwidth = a;
        return this;
      };
      c.setConsumptionSurface = function (a) {
        this.$1.consumption_surface = a;
        return this;
      };
      c.setDeviceUniqueID = function (a) {
        this.$1.device_unique_id = a;
        return this;
      };
      c.setDiscoverySessionID = function (a) {
        this.$1.discovery_session_id = a;
        return this;
      };
      c.setDurationMs = function (a) {
        this.$1.duration_ms = a;
        return this;
      };
      c.setErrorDetails = function (a) {
        this.$1.error_details = a;
        return this;
      };
      c.setErrorMessage = function (a) {
        this.$1.error_message = a;
        return this;
      };
      c.setEvent = function (a) {
        this.$1.event = a;
        return this;
      };
      c.setEventDescription = function (a) {
        this.$1.event_description = a;
        return this;
      };
      c.setExperience = function (a) {
        this.$1.experience = a;
        return this;
      };
      c.setExperienceView = function (a) {
        this.$1.experience_view = a;
        return this;
      };
      c.setExternalLogID = function (a) {
        this.$1.external_log_id = a;
        return this;
      };
      c.setExternalLogType = function (a) {
        this.$1.external_log_type = a;
        return this;
      };
      c.setFetchTime = function (a) {
        this.$1.fetch_time = a;
        return this;
      };
      c.setGraphqlQueryName = function (a) {
        this.$1.graphql_query_name = a;
        return this;
      };
      c.setInitialCast = function (a) {
        this.$1.initial_cast = a;
        return this;
      };
      c.setInitialLogin = function (a) {
        this.$1.initial_login = a;
        return this;
      };
      c.setIsAppVisible = function (a) {
        this.$1.is_app_visible = a;
        return this;
      };
      c.setIsBroadcast = function (a) {
        this.$1.is_broadcast = a;
        return this;
      };
      c.setIsFirstLoadAfterInstall = function (a) {
        this.$1.is_first_load_after_install = a;
        return this;
      };
      c.setIsGoogleCastBg = function (a) {
        this.$1.is_google_cast_bg = a;
        return this;
      };
      c.setIsShowVideo = function (a) {
        this.$1.is_show_video = a;
        return this;
      };
      c.setIsUsingSeedUser = function (a) {
        this.$1.is_using_seed_user = a;
        return this;
      };
      c.setLaserTier = function (a) {
        this.$1.laser_tier = a;
        return this;
      };
      c.setManufacturer = function (a) {
        this.$1.manufacturer = a;
        return this;
      };
      c.setMemorySize = function (a) {
        this.$1.memory_size = a;
        return this;
      };
      c.setMinCountNumFetched = function (a) {
        this.$1.min_count_num_fetched = a;
        return this;
      };
      c.setModelName = function (a) {
        this.$1.model_name = a;
        return this;
      };
      c.setMostRecentSenderUserAgent = function (a) {
        this.$1.most_recent_sender_user_agent = a;
        return this;
      };
      c.setNumDynamicSections = function (a) {
        this.$1.num_dynamic_sections = a;
        return this;
      };
      c.setOsVersion = function (a) {
        this.$1.os_version = a;
        return this;
      };
      c.setOwnerID = function (a) {
        this.$1.owner_id = a;
        return this;
      };
      c.setOwnerType = function (a) {
        this.$1.owner_type = a;
        return this;
      };
      c.setPerfTimeMs = function (a) {
        this.$1.perf_time_ms = a;
        return this;
      };
      c.setPersonalizedDynamicOrder = function (a) {
        this.$1.personalized_dynamic_order = a;
        return this;
      };
      c.setPlaybackIsLiveStreaming = function (a) {
        this.$1.playback_is_live_streaming = a;
        return this;
      };
      c.setPlayerFormat = function (a) {
        this.$1.player_format = a;
        return this;
      };
      c.setPlayerOrigin = function (a) {
        this.$1.player_origin = a;
        return this;
      };
      c.setPlayerSuborigin = function (a) {
        this.$1.player_suborigin = a;
        return this;
      };
      c.setPlayerVersion = function (a) {
        this.$1.player_version = a;
        return this;
      };
      c.setPositionInChannel = function (a) {
        this.$1.position_in_channel = a;
        return this;
      };
      c.setPreviousState = function (a) {
        this.$1.previous_state = a;
        return this;
      };
      c.setPreviousTvSessionID = function (a) {
        this.$1.previous_tv_session_id = a;
        return this;
      };
      c.setProjection = function (a) {
        this.$1.projection = a;
        return this;
      };
      c.setReason = function (a) {
        this.$1.reason = a;
        return this;
      };
      c.setReferer = function (a) {
        this.$1.referer = a;
        return this;
      };
      c.setRetryCount = function (a) {
        this.$1.retry_count = a;
        return this;
      };
      c.setSectionTypeOverride = function (a) {
        this.$1.section_type_override = a;
        return this;
      };
      c.setSelectedIndex = function (a) {
        this.$1.selected_index = a;
        return this;
      };
      c.setSessionFailureCode = function (a) {
        this.$1.session_failure_code = a;
        return this;
      };
      c.setSessionFailureDescription = function (a) {
        this.$1.session_failure_description = a;
        return this;
      };
      c.setShowVideoType = function (a) {
        this.$1.show_video_type = a;
        return this;
      };
      c.setStallCount = function (a) {
        this.$1.stall_count = a;
        return this;
      };
      c.setStallTimeForStartMs = function (a) {
        this.$1.stall_time_for_start_ms = a;
        return this;
      };
      c.setStallTimeMs = function (a) {
        this.$1.stall_time_ms = a;
        return this;
      };
      c.setStoryID = function (a) {
        this.$1.story_id = a;
        return this;
      };
      c.setStreamingFormat = function (a) {
        this.$1.streaming_format = a;
        return this;
      };
      c.setSurveyData = function (a) {
        this.$1.survey_data = b("GeneratedLoggerUtils").serializeMap(a);
        return this;
      };
      c.setTabType = function (a) {
        this.$1.tab_type = a;
        return this;
      };
      c.setTapComponent = function (a) {
        this.$1.tap_component = a;
        return this;
      };
      c.setThirdPartyAppID = function (a) {
        this.$1.third_party_app_id = a;
        return this;
      };
      c.setTimeSinceDiscoveryStart = function (a) {
        this.$1.time_since_discovery_start = a;
        return this;
      };
      c.setTimeSinceDisplayed = function (a) {
        this.$1.time_since_displayed = a;
        return this;
      };
      c.setTvAppVersion = function (a) {
        this.$1.tv_app_version = a;
        return this;
      };
      c.setTvOsVersion = function (a) {
        this.$1.tv_os_version = a;
        return this;
      };
      c.setTvPlayerInstanceKey = function (a) {
        this.$1.tv_player_instance_key = a;
        return this;
      };
      c.setTvPlayerVersion = function (a) {
        this.$1.tv_player_version = a;
        return this;
      };
      c.setTvSeqNum = function (a) {
        this.$1.tv_seq_num = a;
        return this;
      };
      c.setTvSessionID = function (a) {
        this.$1.tv_session_id = a;
        return this;
      };
      c.setTvTimeMs = function (a) {
        this.$1.tv_time_ms = a;
        return this;
      };
      c.setTvWebClientRevision = function (a) {
        this.$1.tv_web_client_revision = a;
        return this;
      };
      c.setUserSessionID = function (a) {
        this.$1.user_session_id = a;
        return this;
      };
      c.setVideoChannelID = function (a) {
        this.$1.video_channel_id = a;
        return this;
      };
      c.setVideoIDOverride = function (a) {
        this.$1.video_id_override = a;
        return this;
      };
      c.setViewCount = function (a) {
        this.$1.view_count = a;
        return this;
      };
      c.setViewCount100 = function (a) {
        this.$1.view_count_100 = a;
        return this;
      };
      c.setViewCount10s = function (a) {
        this.$1.view_count_10s = a;
        return this;
      };
      c.setViewCount15s = function (a) {
        this.$1.view_count_15s = a;
        return this;
      };
      c.setViewCount30s = function (a) {
        this.$1.view_count_30s = a;
        return this;
      };
      c.setViewCount75 = function (a) {
        this.$1.view_count_75 = a;
        return this;
      };
      c.setViewCount95 = function (a) {
        this.$1.view_count_95 = a;
        return this;
      };
      c.setViewportDuration = function (a) {
        this.$1.viewport_duration = a;
        return this;
      };
      c.setVoiceOverEnabled = function (a) {
        this.$1.voice_over_enabled = a;
        return this;
      };
      c.setWatchTimeChannelMs = function (a) {
        this.$1.watch_time_channel_ms = a;
        return this;
      };
      c.setWatchTimeFullScreenMs = function (a) {
        this.$1.watch_time_full_screen_ms = a;
        return this;
      };
      c.setWatchTimeInlineMs = function (a) {
        this.$1.watch_time_inline_ms = a;
        return this;
      };
      c.setWatchTimeMs = function (a) {
        this.$1.watch_time_ms = a;
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
      access_token: !0,
      action_method: !0,
      action_surface: !0,
      action_target: !0,
      audio_only: !0,
      campaign_id: !0,
      cast_activity_name: !0,
      cast_client_app_id: !0,
      cast_client_app_version: !0,
      cast_client_seq_num: !0,
      cast_client_time_ms: !0,
      cast_device_count: !0,
      cast_session_id: !0,
      casting_device_type: !0,
      chaining_depth_level: !0,
      client_session_start_time_ms: !0,
      client_video_bandwidth: !0,
      consumption_surface: !0,
      device_unique_id: !0,
      discovery_session_id: !0,
      duration_ms: !0,
      error_details: !0,
      error_message: !0,
      event: !0,
      event_description: !0,
      experience: !0,
      experience_view: !0,
      external_log_id: !0,
      external_log_type: !0,
      fetch_time: !0,
      graphql_query_name: !0,
      initial_cast: !0,
      initial_login: !0,
      is_app_visible: !0,
      is_broadcast: !0,
      is_first_load_after_install: !0,
      is_google_cast_bg: !0,
      is_show_video: !0,
      is_using_seed_user: !0,
      laser_tier: !0,
      manufacturer: !0,
      memory_size: !0,
      min_count_num_fetched: !0,
      model_name: !0,
      most_recent_sender_user_agent: !0,
      num_dynamic_sections: !0,
      os_version: !0,
      owner_id: !0,
      owner_type: !0,
      perf_time_ms: !0,
      personalized_dynamic_order: !0,
      playback_is_live_streaming: !0,
      player_format: !0,
      player_origin: !0,
      player_suborigin: !0,
      player_version: !0,
      position_in_channel: !0,
      previous_state: !0,
      previous_tv_session_id: !0,
      projection: !0,
      reason: !0,
      referer: !0,
      retry_count: !0,
      section_type_override: !0,
      selected_index: !0,
      session_failure_code: !0,
      session_failure_description: !0,
      show_video_type: !0,
      stall_count: !0,
      stall_time_for_start_ms: !0,
      stall_time_ms: !0,
      story_id: !0,
      streaming_format: !0,
      survey_data: !0,
      tab_type: !0,
      tap_component: !0,
      third_party_app_id: !0,
      time_since_discovery_start: !0,
      time_since_displayed: !0,
      tv_app_version: !0,
      tv_os_version: !0,
      tv_player_instance_key: !0,
      tv_player_version: !0,
      tv_seq_num: !0,
      tv_session_id: !0,
      tv_time_ms: !0,
      tv_web_client_revision: !0,
      user_session_id: !0,
      video_channel_id: !0,
      video_id_override: !0,
      view_count: !0,
      view_count_100: !0,
      view_count_10s: !0,
      view_count_15s: !0,
      view_count_30s: !0,
      view_count_75: !0,
      view_count_95: !0,
      viewport_duration: !0,
      voice_over_enabled: !0,
      watch_time_channel_ms: !0,
      watch_time_full_screen_ms: !0,
      watch_time_inline_ms: !0,
      watch_time_ms: !0,
    };
    f["default"] = a;
  },
  66
);
__d(
  "TrustedTypesChromecastScriptURLPolicy",
  ["TrustedTypes", "err"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = [
      "pkedcjkdefgpdelpbcmbmeomcjbeemfm",
      "hfaagokkkhdbgiakmmlclaapfelnkoah",
      "fmfcbgogabcbclcofgocippekhfcmgfj",
      "enhhojjnijigcajfphajepfemndkmdlo",
    ];
    function i(a) {
      var b = h.join("|");
      b = new RegExp(
        "^chrome-extension://(?:null|" + b + ")/cast_sender\\.js$"
      );
      return b.test(a);
    }
    a = {
      createScriptURL: function (a) {
        if (i(a)) return a;
        throw c("err")(
          "Violated policy TrustedTypesChromecastScriptURLPolicy: " +
            a +
            " is not a Chromecast extension URI."
        );
      },
    };
    b = c("TrustedTypes").createPolicy("chromecast-extension-uri", a);
    d = b;
    g["default"] = d;
  },
  98
);
__d(
  "ChromecastAPI",
  [
    "Promise",
    "TrustedTypesChromecastScriptURLPolicy",
    "asyncToGeneratorRuntime",
  ],
  function (a, b, c, d, e, f, g) {
    var h = [
        "pkedcjkdefgpdelpbcmbmeomcjbeemfm",
        "hfaagokkkhdbgiakmmlclaapfelnkoah",
        "fmfcbgogabcbclcofgocippekhfcmgfj",
        "enhhojjnijigcajfphajepfemndkmdlo",
      ],
      i = null;
    d = {};
    e = d;
    d.getSenderAPI = function () {
      if (i) return i;
      if (!a.chrome) {
        i = b("Promise").reject(new Error("Browser not supported"));
        return i;
      }
      if (a.chrome.cast && a.chrome.cast.isAvailable) {
        i = b("Promise").resolve(a.chrome.cast);
        return i;
      }
      i = b("Promise")
        .resolve()
        .then(function () {
          return j();
        })
        .then(function (d) {
          return new (b("Promise"))(function (b, e) {
            a.chrome.cast = a.chrome.cast || {};
            a.chrome.cast.extensionId = d;
            a.__onGCastApiAvailable = function (c, d) {
              d ? e(d) : b(a.chrome.cast);
            };
            var f = document.createElement("script");
            f.onerror = e;
            f.src = c("TrustedTypesChromecastScriptURLPolicy").createScriptURL(
              n(d)
            );
            (document.head || document.documentElement).appendChild(f);
          });
        });
      return i;
    };
    function j() {
      return k.apply(this, arguments);
    }
    function k() {
      k = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        for (var a = 0; a < h.length; a++) {
          var b = h[a],
            c = yield l(b);
          if (c) return b;
        }
        return null;
      });
      return k.apply(this, arguments);
    }
    function l(a) {
      return m.apply(this, arguments);
    }
    function m() {
      m = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        return new (b("Promise"))(function (b, c) {
          c = n(a);
          var d = new XMLHttpRequest();
          d.onreadystatechange = function () {
            d.readyState === 4 && b(d.status === 200);
          };
          d.onerror = function () {
            b(!1);
          };
          d.open("GET", c, !0);
          d.send();
        });
      });
      return m.apply(this, arguments);
    }
    function n(a) {
      return "chrome-extension://" + a + "/cast_sender.js";
    }
    g["default"] = e;
  },
  98
);
__d(
  "ChromecastScannerEnum",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      INIT: "init",
      CAST: "cast",
      ERROR: "error",
      NEW_SESSION: "new_session",
      RECEIVER_STATUS_CHANGED: "receiver_status_changed",
      SESSION_REQUESTED: "session_requested",
      SESSION_CANCELLED: "session_cancelled",
      SESSION_STARTED: "session_started",
      SESSION_DISCONNECTING: "session_disconnecting",
      SESSION_DISCONNECTED: "session_disconnected",
    });
    f["default"] = a;
  },
  66
);
__d(
  "ChromecastSessionEnum",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      ERROR: "error",
      DISCONNECTING: "disconnecting",
      DISCONNECTED: "disconnected",
      VIDEO_LOADING: "video_loading",
      VIDEO_LOADED: "video_loaded",
      VIDEO_PLAYING: "video_playing",
      VIDEO_PAUSED: "video_paused",
      VIDEO_SEEK: "video_seek",
    });
    f["default"] = a;
  },
  66
);
__d(
  "ChromecastSession",
  [
    "invariant",
    "ChromecastAPI",
    "ChromecastSessionEnum",
    "EventEmitter",
    "Promise",
    "asyncToGeneratorRuntime",
  ],
  function (a, b, c, d, e, f, g, h) {
    a = (function (a) {
      babelHelpers.inheritsLoose(d, a);
      function d(b, c, d) {
        var e;
        e = a.call(this) || this;
        e.$ChromecastSession1 = b;
        e.$ChromecastSession2 = e.$ChromecastSession5.bind(
          babelHelpers.assertThisInitialized(e)
        );
        e.$ChromecastSession3 = c;
        e.$ChromecastSession4 = d;
        d.addMessageListener(e.$ChromecastSession3, e.$ChromecastSession2);
        return e;
      }
      var e = d.prototype;
      e.destroy = function () {
        var a = this.$ChromecastSession4;
        a &&
          a.removeMessageListener(
            this.$ChromecastSession3,
            this.$ChromecastSession2
          );
        this.removeAllListeners();
      };
      e.isCasting = function () {
        return !!this.$ChromecastSession4;
      };
      e.isPlaying = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var a = yield c("ChromecastAPI").getSenderAPI();
          return !!(
            this.$ChromecastSession4 &&
            this.$ChromecastSession4.media &&
            this.$ChromecastSession4.media[0] &&
            this.$ChromecastSession4.media[0].playerState ===
              a.media.PlayerState.PLAYING
          );
        });
        function d() {
          return a.apply(this, arguments);
        }
        return d;
      })();
      e.hasMedia = function () {
        return !!(
          this.$ChromecastSession4 &&
          this.$ChromecastSession4.media &&
          this.$ChromecastSession4.media[0]
        );
      };
      e.disconnect = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var a = this;
          this.emit(c("ChromecastSessionEnum").DISCONNECTING);
          try {
            yield new (b("Promise"))(function (b, c) {
              a.$ChromecastSession4 ? a.$ChromecastSession4.stop(b, c) : b();
            });
          } catch (a) {
            this.emit(c("ChromecastSessionEnum").ERROR, a);
            throw a;
          } finally {
            (this.$ChromecastSession4 = null),
              this.emit(c("ChromecastSessionEnum").DISCONNECTED),
              this.removeAllListeners();
          }
        });
        function d() {
          return a.apply(this, arguments);
        }
        return d;
      })();
      e.loadVideo = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (
          a,
          d,
          e
        ) {
          var f = this;
          try {
            var g = yield c("ChromecastAPI").getSenderAPI(),
              i = this.$ChromecastSession4;
            d || (d = "video/mp4");
            yield new (b("Promise"))(function (b, j) {
              i || h(0, 4266);
              f.emit(c("ChromecastSessionEnum").VIDEO_LOADING);
              var k = new g.media.MediaInfo(a, d);
              k.streamType = g.media.StreamType.BUFFERED;
              k = new g.media.LoadRequest(k);
              k.autoplay = !0;
              e && (k.currentTime = e);
              i.loadMedia(
                k,
                function (a) {
                  var d = function d() {
                    a.removeUpdateListener(d),
                      f.emit(c("ChromecastSessionEnum").VIDEO_LOADED),
                      b();
                  };
                  a.addUpdateListener(d);
                },
                j
              );
            });
            this.emit(c("ChromecastSessionEnum").VIDEO_PLAYING);
          } catch (a) {
            this.emit(c("ChromecastSessionEnum").ERROR, a);
            throw a;
          }
        });
        function d(b, c, d) {
          return a.apply(this, arguments);
        }
        return d;
      })();
      e.playVideo = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var a = yield c("ChromecastAPI").getSenderAPI(),
              d = this.$ChromecastSession4;
            yield new (b("Promise"))(function (b, c) {
              d || h(0, 4267);
              (d.media && d.media[0]) || h(0, 4268);
              var e = new a.media.PlayRequest();
              d.media[0].play(e, b, c);
            });
            this.emit(c("ChromecastSessionEnum").VIDEO_PLAYING);
          } catch (a) {
            this.emit(c("ChromecastSessionEnum").ERROR, a);
            throw a;
          }
        });
        function d() {
          return a.apply(this, arguments);
        }
        return d;
      })();
      e.pauseVideo = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var a = yield c("ChromecastAPI").getSenderAPI(),
              d = this.$ChromecastSession4;
            yield new (b("Promise"))(function (b, c) {
              d || h(0, 4269);
              (d.media && d.media[0]) || h(0, 4270);
              var e = new a.media.PauseRequest();
              d.media[0].pause(e, b, c);
            });
            this.emit(c("ChromecastSessionEnum").VIDEO_PAUSED);
          } catch (a) {
            this.emit(c("ChromecastSessionEnum").ERROR, a);
            throw a;
          }
        });
        function d() {
          return a.apply(this, arguments);
        }
        return d;
      })();
      e.seekVideo = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
          try {
            var d = yield c("ChromecastAPI").getSenderAPI(),
              e = this.$ChromecastSession4;
            yield new (b("Promise"))(function (b, c) {
              e || h(0, 4271);
              (e.media && e.media[0]) || h(0, 4272);
              var f = new d.media.SeekRequest();
              f.currentTime = a;
              e.media[0].seek(f, b, c);
            });
            this.emit(c("ChromecastSessionEnum").VIDEO_PLAYING);
          } catch (a) {
            this.emit(c("ChromecastSessionEnum").ERROR, a);
            throw a;
          }
        });
        function d(b) {
          return a.apply(this, arguments);
        }
        return d;
      })();
      e.getVolume = function () {
        var a = this.$ChromecastSession6();
        return a ? a.level : null;
      };
      e.setVolume = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
          try {
            var d = this.$ChromecastSession4;
            yield new (b("Promise"))(function (b, c) {
              d || h(0, 4273), d.setReceiverVolumeLevel(a, b, c);
            });
          } catch (a) {
            this.emit(c("ChromecastSessionEnum").ERROR, a);
            throw a;
          }
        });
        function d(b) {
          return a.apply(this, arguments);
        }
        return d;
      })();
      e.isMuted = function () {
        var a = this.$ChromecastSession6();
        return a ? a.muted : null;
      };
      e.mute = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield this.$ChromecastSession7(!0);
        });
        function c() {
          return a.apply(this, arguments);
        }
        return c;
      })();
      e.unmute = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield this.$ChromecastSession7(!1);
        });
        function c() {
          return a.apply(this, arguments);
        }
        return c;
      })();
      e.sendMessage = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
          var d = this;
          try {
            yield new (b("Promise"))(function (b, c) {
              var e = d.$ChromecastSession4;
              e || h(0, 4274);
              e.sendMessage(d.$ChromecastSession3, a, b, c);
            });
          } catch (a) {
            this.emit(c("ChromecastSessionEnum").ERROR, a);
            throw a;
          }
        });
        function d(b) {
          return a.apply(this, arguments);
        }
        return d;
      })();
      e.$ChromecastSession6 = function () {
        return (
          this.$ChromecastSession4 &&
          this.$ChromecastSession4.receiver &&
          this.$ChromecastSession4.receiver.volume
        );
      };
      e.$ChromecastSession7 = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
          try {
            var d = this.$ChromecastSession4;
            yield new (b("Promise"))(function (b, c) {
              d || h(0, 4275), d.setReceiverMuted(a, b, c);
            });
          } catch (a) {
            this.emit(c("ChromecastSessionEnum").ERROR, a);
            throw a;
          }
        });
        function d(b) {
          return a.apply(this, arguments);
        }
        return d;
      })();
      e.getVideoTime = function () {
        var a = null,
          b = this.$ChromecastSession4 && this.$ChromecastSession4.media[0];
        b && (a = b.getEstimatedTime());
        return a;
      };
      e.$ChromecastSession5 = function (a, b) {
        a === this.$ChromecastSession3
          ? this.emit("message", b)
          : this.emit("invalid_message", { namespace: a, message: b });
      };
      return d;
    })(c("EventEmitter"));
    g["default"] = a;
  },
  98
);
__d(
  "ChromecastScanner",
  [
    "ChromecastAPI",
    "ChromecastScannerEnum",
    "ChromecastSession",
    "ChromecastSessionEnum",
    "ConnectedTVTypedLogger",
    "EventEmitter",
    "Promise",
    "asyncToGeneratorRuntime",
    "emptyFunction",
    "performanceAbsoluteNow",
  ],
  function (a, b, c, d, e, f, g) {
    var h = 3 * 60 * 1e3;
    a = (function (a) {
      babelHelpers.inheritsLoose(d, a);
      d.getInstance = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (
          a,
          b,
          c
        ) {
          a = new d(a, b, c);
          yield a.ready();
          return a;
        });
        function c(b, c, d) {
          return a.apply(this, arguments);
        }
        return c;
      })();
      function d(b, c, d) {
        var e;
        e = a.call(this) || this;
        e.$ChromecastScanner1 = b || null;
        e.$ChromecastScanner2 = c || null;
        e.$ChromecastScanner3 = d || !1;
        e.$ChromecastScanner6 = !1;
        e.$ChromecastScanner4 = !1;
        e.$ChromecastScanner5 = !1;
        e.$ChromecastScanner7 = new Set();
        e.$ChromecastScanner8 = e.$ChromecastScanner9();
        return e;
      }
      var e = d.prototype;
      e.$ChromecastScanner9 = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var a = yield c("ChromecastAPI").getSenderAPI();
          this.$ChromecastScanner5 = !0;
          this.$ChromecastScanner5 &&
            this.$ChromecastScanner1 === null &&
            (this.$ChromecastScanner1 = a.media.DEFAULT_MEDIA_RECEIVER_APP_ID);
          try {
            yield this.$ChromecastScanner10(),
              this.emit(c("ChromecastScannerEnum").INIT),
              this.$ChromecastScanner3 && (yield this.scanForReceivers());
          } catch (a) {
            this.emit(c("ChromecastScannerEnum").ERROR, a);
            throw a;
          }
        });
        function d() {
          return a.apply(this, arguments);
        }
        return d;
      })();
      e.ready = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield this.$ChromecastScanner8;
        });
        function c() {
          return a.apply(this, arguments);
        }
        return c;
      })();
      e.destroy = function () {
        this.removeAllListeners(),
          this.$ChromecastScanner7.forEach(function (a) {
            return a.destroy();
          });
      };
      e.hasSupport = function () {
        return this.$ChromecastScanner5;
      };
      e.hasFoundReceiver = function () {
        return this.$ChromecastScanner6;
      };
      e.scanForReceivers = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var a = this;
          if (this.$ChromecastScanner4) return;
          this.$ChromecastScanner4 = !0;
          var d = yield c("ChromecastAPI").getSenderAPI(),
            e = new (b("Promise"))(function (b, e) {
              var f = function (b) {
                  b = a.$ChromecastScanner11(b);
                  a.emit(c("ChromecastScannerEnum").SESSION_STARTED, b);
                },
                g = function (e) {
                  (a.$ChromecastScanner6 =
                    e === d.ReceiverAvailability.AVAILABLE),
                    a.emit(c("ChromecastScannerEnum").RECEIVER_STATUS_CHANGED, {
                      foundReceiver: a.$ChromecastScanner6,
                    }),
                    b();
                };
              f = new d.ApiConfig(
                new d.SessionRequest(a.$ChromecastScanner1),
                f,
                g,
                d.AutoJoinPolicy.ORIGIN_SCOPED,
                d.DefaultActionPolicy.CAST_THIS_TAB
              );
              d.initialize(f, c("emptyFunction"), e);
            });
          e = e["catch"](function (b) {
            a.$ChromecastScanner4 = !1;
            a.emit(c("ChromecastScannerEnum").ERROR, b);
            throw b;
          });
          yield e;
        });
        function d() {
          return a.apply(this, arguments);
        }
        return d;
      })();
      e.getSession = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var a = this;
          if (!this.$ChromecastScanner6) throw new Error("No receivers found");
          this.emit(c("ChromecastScannerEnum").SESSION_REQUESTED);
          var b = this.$ChromecastScanner12();
          b["catch"](function (b) {
            a.emit(c("ChromecastScannerEnum").SESSION_CANCELLED);
            a.emit(c("ChromecastScannerEnum").SESSION_DISCONNECTED);
            throw b;
          });
          b = yield b;
          b = this.$ChromecastScanner11(b);
          this.$ChromecastScanner7.add(b);
          this.emit(c("ChromecastScannerEnum").SESSION_STARTED, b);
          return b;
        });
        function d() {
          return a.apply(this, arguments);
        }
        return d;
      })();
      e.$ChromecastScanner12 = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var a = this,
            d = yield c("ChromecastAPI").getSenderAPI();
          return yield new (b("Promise"))(function (b, e) {
            new (c("ConnectedTVTypedLogger"))()
              .setEvent("sender_session_requested")
              .log();
            var f = c("performanceAbsoluteNow")(),
              g = new d.SessionRequest(
                a.$ChromecastScanner1,
                [d.Capability.VIDEO_OUT, d.Capability.AUDIO_OUT],
                h
              );
            d.requestSession(
              function (a) {
                new (c("ConnectedTVTypedLogger"))()
                  .setEvent("sender_session_started")
                  .setPerfTimeMs(Math.floor(c("performanceAbsoluteNow")() - f))
                  .log();
                return b(a);
              },
              function (a) {
                new (c("ConnectedTVTypedLogger"))()
                  .setEvent("sender_session_failed")
                  .setSessionFailureCode(a.code)
                  .setSessionFailureDescription(a.description)
                  .setPerfTimeMs(Math.floor(c("performanceAbsoluteNow")() - f))
                  .log();
                return e(a);
              },
              g
            );
          });
        });
        function d() {
          return a.apply(this, arguments);
        }
        return d;
      })();
      e.$ChromecastScanner11 = function (a) {
        var b = this,
          d = new (c("ChromecastSession"))(
            this.$ChromecastScanner1 || "",
            this.$ChromecastScanner2 || "",
            a
          );
        d.addListener(c("ChromecastSessionEnum").DISCONNECTING, function () {
          b.emit(c("ChromecastScannerEnum").SESSION_DISCONNECTING, d);
        });
        d.addListener(c("ChromecastSessionEnum").DISCONNECTED, function () {
          b.emit(c("ChromecastScannerEnum").SESSION_DISCONNECTED, d),
            b.$ChromecastScanner7["delete"](d);
        });
        d.addListener(c("ChromecastSessionEnum").ERROR, function (a) {
          b.emit(c("ChromecastScannerEnum").ERROR, a);
        });
        return d;
      };
      e.$ChromecastScanner10 = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var a = this,
            b = yield c("ChromecastAPI").getSenderAPI();
          b.addReceiverActionListener(function (d, e) {
            switch (e) {
              case b.ReceiverAction.CAST:
                a.emit(c("ChromecastScannerEnum").CAST, d);
                break;
              case b.ReceiverAction.STOP:
                a.$ChromecastScanner7.forEach(function (a) {
                  return a.disconnect();
                });
                break;
            }
          });
        });
        function d() {
          return a.apply(this, arguments);
        }
        return d;
      })();
      return d;
    })(c("EventEmitter"));
    g["default"] = a;
  },
  98
);
__d(
  "VideoEndScreenWithActions.react",
  [
    "cx",
    "CSS",
    "CenteredContainer.react",
    "List.react",
    "SubscriptionsHandler",
    "VideoReshareLink.react",
    "VideoWatchAgainLink.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
          e[f] = arguments[f];
        return (
          ((b = c = a.call.apply(a, [this].concat(e)) || this),
          (c.state = {
            playerState: "",
            isInTahoe: c.props.vpc.getSource() === "tahoe",
          }),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      var e = b.prototype;
      e.componentDidMount = function () {
        var a = this;
        this.$1 = new (c("SubscriptionsHandler"))();
        this.$1.addSubscriptions(
          this.props.vpc.addListener("stateChange", function () {
            return a.setState({ playerState: a.props.vpc.getState() });
          })
        );
        this.$1.addSubscriptions(
          this.props.vpc.addListener("TahoeController/exitTahoe", function () {
            a.setState({ isInTahoe: !1 });
          })
        );
        this.$1.addSubscriptions(
          this.props.vpc.addListener("TahoeController/enterTahoe", function () {
            a.setState({ isInTahoe: !0 });
          })
        );
      };
      e.render = function () {
        var a = this.props.vpc;
        if (
          !a ||
          a.getSource() !== "inline" ||
          this.state.isInTahoe ||
          this.state.playerState === "destroyed"
        )
          return null;
        a = a.getRootNode();
        if (this.state.playerState !== "finished") {
          d("CSS").addClass(a, "_2a_0");
          return null;
        }
        d("CSS").removeClass(a, "_2a_0");
        return i.jsx(c("CenteredContainer.react"), {
          className: "_2a_1",
          fullHeight: !0,
          vertical: !0,
          children: i.jsxs(c("List.react"), {
            border: "none",
            className:
              this.state.playerState !== "finished" ? "hidden_elem" : "",
            children: [
              i.jsx("li", {
                className: "_2a_2",
                children: i.jsx(c("VideoWatchAgainLink.react"), {
                  vpc: this.props.vpc,
                }),
              }),
              this.props.shareURI
                ? i.jsx("li", {
                    className: "_2a_2",
                    children: i.jsx(c("VideoReshareLink.react"), {
                      shareURI: this.props.shareURI,
                    }),
                  })
                : null,
            ],
          }),
        });
      };
      e.componentWillUnmount = function () {
        this.$1.release();
      };
      return b;
    })(i.Component);
    g["default"] = a;
  },
  98
);
__d(
  "CastingExperienceManager",
  [
    "invariant",
    "ChromecastConfig",
    "ChromecastScanner",
    "ChromecastScannerEnum",
    "EventEmitter",
    "Promise",
    "Random",
    "SubscriptionsHandler",
    "WebStorage",
    "asyncToGeneratorRuntime",
    "promiseDone",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = c("WebStorage").getLocalStorage(),
      j = null;
    a = (function (a) {
      babelHelpers.inheritsLoose(e, a);
      function e() {
        var b;
        b = a.call(this) || this;
        b.$CastingExperienceManager5 = new (c("ChromecastScanner"))(
          c("ChromecastConfig").APP_ID,
          c("ChromecastConfig").NAMESPACE,
          c("ChromecastConfig").AUTO_SCAN
        );
        b.$CastingExperienceManager2 = null;
        b.$CastingExperienceManager1 = !1;
        b.$CastingExperienceManager4 = 0;
        b.$CastingExperienceManager7 = null;
        b.$CastingExperienceManager10 = new Map();
        var d = new (c("SubscriptionsHandler"))();
        d.addSubscriptions(
          b.$CastingExperienceManager5.addListener(
            c("ChromecastScannerEnum").RECEIVER_STATUS_CHANGED,
            function (a) {
              return b.$CastingExperienceManager11(a);
            }
          ),
          b.$CastingExperienceManager5.addListener(
            c("ChromecastScannerEnum").SESSION_DISCONNECTED,
            function () {
              return b.$CastingExperienceManager12();
            }
          ),
          b.$CastingExperienceManager5.addListener(
            c("ChromecastScannerEnum").SESSION_STARTED,
            function (a) {
              return b.$CastingExperienceManager13(a);
            }
          ),
          b.$CastingExperienceManager5.addListener(
            c("ChromecastScannerEnum").SESSION_DISCONNECTED,
            function () {
              return b.$CastingExperienceManager14();
            }
          ),
          b.$CastingExperienceManager5.addListener(
            c("ChromecastScannerEnum").ERROR,
            function (a) {
              return b.$CastingExperienceManager15(a);
            }
          )
        );
        b.$CastingExperienceManager8 = b.$CastingExperienceManager5.ready();
        c("promiseDone")(
          b.$CastingExperienceManager8.then(
            function () {
              (b.$CastingExperienceManager2 = !0),
                (b.$CastingExperienceManager1 = !0),
                b.emit(e.READY);
            },
            function (a) {
              (b.$CastingExperienceManager2 = !1),
                d.release(),
                b.emit(e.NOT_SUPPORTED, a);
            }
          )
        );
        return b;
      }
      e.getInstance = function () {
        j || (j = new e());
        return j;
      };
      var f = e.prototype;
      f.ready = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield this.$CastingExperienceManager8;
        });
        function c() {
          return a.apply(this, arguments);
        }
        return c;
      })();
      f.getLastError = function () {
        return this.$CastingExperienceManager3;
      };
      f.hasSupport = function () {
        return this.$CastingExperienceManager2;
      };
      f.hasFoundReceiver = function () {
        return this.$CastingExperienceManager5.hasFoundReceiver();
      };
      f.getSession = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield this.ready();
          if (this.$CastingExperienceManager6)
            return this.$CastingExperienceManager6;
          this.$CastingExperienceManager9 ||
            (this.$CastingExperienceManager9 =
              this.$CastingExperienceManager16());
          var a = null;
          try {
            a = yield this.$CastingExperienceManager9;
          } catch (a) {
            this.emit(e.ERROR, a);
            throw a;
          } finally {
            this.$CastingExperienceManager9 = null;
          }
          return a;
        });
        function c() {
          return a.apply(this, arguments);
        }
        return c;
      })();
      f.$CastingExperienceManager16 = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var a = yield this.$CastingExperienceManager5.getSession();
          this.$CastingExperienceManager6 ||
            (this.$CastingExperienceManager6 = a);
          return this.$CastingExperienceManager6;
        });
        function c() {
          return a.apply(this, arguments);
        }
        return c;
      })();
      f.isRequestingSession = function () {
        return !!this.$CastingExperienceManager9;
      };
      f.getSessionKey = function () {
        var a = null;
        i && (a = i.getItem("CastingSessionKey"));
        a ||
          ((a = d("Random").uint32().toString(16)),
          i && i.setItem("CastingSessionKey", a));
        return a;
      };
      f.isCasting = function (a) {
        var b =
          !!this.$CastingExperienceManager6 &&
          this.$CastingExperienceManager6.isCasting();
        b &&
          a &&
          (b =
            !!this.$CastingExperienceManager7 &&
            this.$CastingExperienceManager7.indexOf(a) >= 0);
        return b;
      };
      f.startCasting = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (
          a,
          b,
          d
        ) {
          if (!this.isCasting(a)) {
            c("ChromecastConfig").VERSION_LAUNCH_MESSAGE && d
              ? (b = yield this.sendVersionLaunch(a, b, d))
              : (b = yield this.sendLaunch(a));
            d = b;
            a = d.target;
            this.$CastingExperienceManager7 = a;
          }
        });
        function d(b, c, d) {
          return a.apply(this, arguments);
        }
        return d;
      })();
      f.stopCasting = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (this.isCasting()) {
            var a = yield this.getSession();
            yield a.disconnect();
          }
          this.$CastingExperienceManager17();
        });
        function c() {
          return a.apply(this, arguments);
        }
        return c;
      })();
      f.$CastingExperienceManager17 = function () {
        (this.$CastingExperienceManager6 = null),
          (this.$CastingExperienceManager7 = null);
      };
      f.getTarget = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (!this.$CastingExperienceManager7) {
            yield this.getSession();
            var a = yield this.sendVersion();
            a = a.currently_running_experience;
            if (!a) throw new Error("Session has no target");
            this.$CastingExperienceManager7 = a;
          }
          return this.$CastingExperienceManager7;
        });
        function c() {
          return a.apply(this, arguments);
        }
        return c;
      })();
      f.setVolume = function (a) {
        this.isCasting() &&
          this.$CastingExperienceManager6 &&
          this.$CastingExperienceManager6.setVolume(a);
      };
      f.mute = function () {
        this.isCasting() &&
          this.$CastingExperienceManager6 &&
          this.$CastingExperienceManager6.mute();
      };
      f.unmute = function () {
        this.isCasting() &&
          this.$CastingExperienceManager6 &&
          this.$CastingExperienceManager6.unmute();
      };
      f.isFeedbackEnabled = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var a = yield this.getExperienceState();
          a = a.feedback_disabled;
          return !!a;
        });
        function c() {
          return a.apply(this, arguments);
        }
        return c;
      })();
      f.setFeedbackEnabled = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
          if (!this.isCasting()) return;
          a = a ? "turn_on_feedback" : "turn_off_feedback";
          yield this.sendCommand(a);
        });
        function c(b) {
          return a.apply(this, arguments);
        }
        return c;
      })();
      f.sendMessage = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (
          a,
          b,
          c
        ) {
          var d = yield this.getSession();
          d || h(0, 4274);
          a = {
            target: a,
            type: b,
            data: c,
            num: (this.$CastingExperienceManager4 += 2),
            timestamp: Date.now(),
          };
          yield d.sendMessage(a);
          return { msgNum: a.num };
        });
        function c(b, c, d) {
          return a.apply(this, arguments);
        }
        return c;
      })();
      f.receiveMessage = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
          var c = yield this.getSession();
          c || h(0, 4763);
          return new (b("Promise"))(function (b, d) {
            var e = c.addListener("message", function (c) {
              try {
                c = JSON.parse(c);
                var f = !a || a(c);
                f && (e.remove(), b(c));
              } catch (a) {
                e.remove(), d(a);
              }
            });
          });
        });
        function c(b) {
          return a.apply(this, arguments);
        }
        return c;
      })();
      f.sendVersion = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var a = this.getSessionKey();
          a = yield this.sendMessage("version", "version_request", {
            version: e.VERSION,
            client_cast_session: a,
          });
          var b = a.msgNum;
          a = yield this.receiveMessage(function (a) {
            return a.response_num === b;
          });
          a.type === "version_response" || h(0, 12335);
          a.data || h(0, 4765);
          return a.data;
        });
        function c() {
          return a.apply(this, arguments);
        }
        return c;
      })();
      f.sendLaunch = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
          a = yield this.sendMessage("experience", "launch", { name: a });
          var b = a.msgNum;
          a = yield this.receiveMessage(function (a) {
            return a.response_num === b;
          });
          a.type === "launch_response" || h(0, 12333);
          return a.data;
        });
        function c(b) {
          return a.apply(this, arguments);
        }
        return c;
      })();
      f.sendVersionLaunch = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (
          a,
          b,
          c
        ) {
          var d = this.getSessionKey();
          d = yield this.sendMessage("version_launch", "version_launch", {
            version: e.VERSION,
            client_cast_session: d,
            name: a,
            params: b,
            payload: c,
          });
          var f = d.msgNum;
          a = yield this.receiveMessage(function (a) {
            return a.response_num === f;
          });
          a.type === "version_launch_response" || h(0, 4767);
          return a.data;
        });
        function c(b, c, d) {
          return a.apply(this, arguments);
        }
        return c;
      })();
      f.sendCommand = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (
          a,
          b,
          c
        ) {
          var d = yield this.getTarget();
          d = yield this.sendMessage(d, "experience_command", {
            cmd: a,
            params: b,
            payload: c,
          });
          var f = d.msgNum;
          b = yield this.receiveMessage(function (a) {
            return a.response_num === f;
          });
          b.type === "command_result" || h(0, 12332);
          a === "stop_showing_photo" && this.emit(e.STOP_VIEW);
          return b.data;
        });
        function c(b, c, d) {
          return a.apply(this, arguments);
        }
        return c;
      })();
      f.getExperienceState = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
          var b = this,
            d = a || "",
            e = this.$CastingExperienceManager10.get(d);
          if (!e) {
            e = this.$CastingExperienceManager18(a);
            this.$CastingExperienceManager10.set(d, e);
            a = function () {
              return b.$CastingExperienceManager10["delete"](d);
            };
            c("promiseDone")(e.then(a, a));
          }
          return e;
        });
        function d(b) {
          return a.apply(this, arguments);
        }
        return d;
      })();
      f.$CastingExperienceManager18 = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
          a || (a = yield this.getTarget());
          a = yield this.sendMessage(a, "get_experience_state", {});
          var b = a.msgNum;
          a = yield this.receiveMessage(function (a) {
            return a.response_num === b;
          });
          a.type === "experience_state" || h(0, 12334);
          return a.data;
        });
        function c(b) {
          return a.apply(this, arguments);
        }
        return c;
      })();
      f.$CastingExperienceManager11 = function (a) {
        a = a.foundReceiver;
        this.emit(e.RECEIVER_STATUS_CHANGED, !!a);
      };
      f.$CastingExperienceManager12 = function () {
        this.$CastingExperienceManager17(), this.emit(e.RECEIVER_DISCONNECTED);
      };
      f.$CastingExperienceManager13 = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
          var b = this;
          this.$CastingExperienceManager6 = a;
          var c = "extension";
          this.$CastingExperienceManager9 && (c = "site");
          var d = yield this.sendVersion(),
            f = d.success;
          d = d.currently_running_experience;
          if (!f) throw new Error("Failed to sync versions with session");
          d && (this.$CastingExperienceManager7 = d);
          this.emit(e.SESSION_STARTED, {
            session: a,
            source: c,
            success: f,
            target: this.$CastingExperienceManager7,
          });
          a.addListener("message", function (a) {
            try {
              a = JSON.parse(a);
              b.$CastingExperienceManager19(a);
            } catch (a) {
              b.emit(e.ERROR, a);
            }
          });
        });
        function c(b) {
          return a.apply(this, arguments);
        }
        return c;
      })();
      f.$CastingExperienceManager14 = function () {
        var a = this.$CastingExperienceManager6;
        this.$CastingExperienceManager17();
        this.emit(e.SESSION_DISCONNECTED, a);
      };
      f.$CastingExperienceManager19 = function (a) {
        this.emit(e.SESSION_MESSAGE, a),
          a.type === "experience_ended" &&
            ((this.$CastingExperienceManager7 = null),
            this.emit(e.EXPERIENCE_ENDED));
      };
      f.$CastingExperienceManager15 = function (a) {
        (this.$CastingExperienceManager3 = a), this.emit(e.ERROR, a);
      };
      return e;
    })(c("EventEmitter"));
    a.VERSION = "1.2.0";
    a.RECEIVER_STATUS_CHANGED = "receiverstatuschanged";
    a.RECEIVER_DISCONNECTED = "receiverdisconnected";
    a.SESSION_STARTED = "sessionstarted";
    a.SESSION_MESSAGE = "sessionmessage";
    a.SESSION_DISCONNECTED = "sessiondisconnected";
    a.EXPERIENCE_ENDED = "experienceended";
    a.ERROR = "error";
    a.NOT_SUPPORTED = "notsupported";
    a.READY = "ready";
    a.STOP_VIEW = "stopview";
    g["default"] = a;
  },
  98
);
__d(
  "StreamingReactionsTrayEvents",
  [],
  function (a, b, c, d, e, f) {
    a = "streamingReactionsTray/AddReactionAnimate";
    b = "streamingReactionsTray/HideChannelViewDetails";
    c = "streamingReactionsTray/ShowChannelViewDetails";
    d = "streamingReactionsTray/UpdateSurface";
    e = "streamingReactionsTray/ResizeChannelViewWindow";
    var g = "streamingReactionsTray/ReactionStateChange",
      h = "streamingReactionsTray/FireworksAnimating",
      i = "streamingReactionsTray/DisableReactions",
      j = "streamingReactionsTray/EnableReactions";
    f.AddReactionAnimate = a;
    f.HideChannelViewDetails = b;
    f.ShowChannelViewDetails = c;
    f.UpdateSurface = d;
    f.ResizeChannelViewWindow = e;
    f.ReactionStateChange = g;
    f.FireworksAnimating = h;
    f.DisableReactions = i;
    f.EnableReactions = j;
  },
  66
);
__d(
  "VideoCastingComponent",
  [
    "cx",
    "Arbiter",
    "AsyncRequest",
    "CSS",
    "CastingExperienceManager",
    "ChromecastConfig",
    "Promise",
    "ScriptPath",
    "StreamingReactionsTrayEvents",
    "SubscriptionsHandler",
    "ThisControllerNoLongerExists",
    "asyncToGeneratorRuntime",
    "collectDataAttributes",
    "promiseDone",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = (function () {
      function a(a, b) {
        var e = this;
        this.$1 = c("ChromecastConfig").EXPERIENCE_NAME;
        this.$2 = c("CastingExperienceManager").getInstance();
        this.$3 = a;
        this.$4 = !1;
        this.$5 = !1;
        this.$6 = !1;
        this.$7 = null;
        this.$9 = null;
        this.$12 = null;
        this.$8 = b;
        this.$10 = new (c("SubscriptionsHandler"))();
        d("CSS").addClass(this.$3.getVideoNode(), "_1_d1");
        a.registerOption("casting", "isSupported", function () {
          return e.$2.hasSupport();
        });
        a.registerOption("casting", "hasFoundReceiver", function () {
          return e.$2.hasFoundReceiver();
        });
        a.registerOption(
          "casting",
          "isCasting",
          function () {
            return e.$4;
          },
          function (a) {
            return c("promiseDone")(e.$13(a));
          }
        );
        a.registerOption(
          "casting",
          "isPlaying",
          function () {
            return e.$6;
          },
          function (a) {
            return c("promiseDone")(e.$14(a));
          }
        );
        a.registerOption("casting", "lastError", function () {
          return e.$2.getLastError();
        });
        this.$10.addSubscriptions(
          this.$2.addListener(
            c("CastingExperienceManager").RECEIVER_STATUS_CHANGED,
            function (a) {
              return c("promiseDone")(e.$15(a));
            }
          ),
          this.$2.addListener(
            c("CastingExperienceManager").RECEIVER_DISCONNECTED,
            function () {
              return c("promiseDone")(e.$16());
            }
          ),
          this.$2.addListener(
            c("CastingExperienceManager").SESSION_DISCONNECTED,
            function () {
              return c("promiseDone")(e.$16());
            }
          ),
          this.$2.addListener(
            c("CastingExperienceManager").EXPERIENCE_ENDED,
            function () {
              return c("promiseDone")(e.$16());
            }
          ),
          this.$2.addListener(
            c("CastingExperienceManager").NOT_SUPPORTED,
            function () {
              return c("promiseDone")(e.$17());
            }
          ),
          this.$2.addListener(c("CastingExperienceManager").READY, function () {
            return c("promiseDone")(e.$18());
          }),
          this.$2.addListener(
            c("CastingExperienceManager").SESSION_MESSAGE,
            function (a) {
              return c("promiseDone")(e.$19(a));
            }
          ),
          this.$2.addListener(
            c("CastingExperienceManager").ERROR,
            function (a) {
              return c("promiseDone")(e.$20(a));
            }
          ),
          this.$3.addListener("seekEnd", function (a) {
            a = a.position;
            e.$3.isLiveVideo() || c("promiseDone")(e.$21(a));
          }),
          this.$3.addListener("muteVideo", function () {
            c("promiseDone")(e.$22());
          }),
          this.$3.addListener("unmuteVideo", function () {
            c("promiseDone")(e.$23());
          }),
          this.$3.addListener("changeVolume", function (a) {
            a = a.volume;
            c("promiseDone")(e.$24(a));
          }),
          this.$3.addListener("stateChange", function () {
            e.$3.isState("destroyed") && e.destroy(),
              e.$3.isState("playing") && c("promiseDone")(e.$25());
          }),
          c("Arbiter").subscribe(
            d("StreamingReactionsTrayEvents").HideChannelViewDetails,
            function () {
              return c("promiseDone")(e.$26(!0));
            }
          ),
          c("Arbiter").subscribe(
            d("StreamingReactionsTrayEvents").ShowChannelViewDetails,
            function () {
              return c("promiseDone")(e.$26(!1));
            }
          )
        );
      }
      var e = a.prototype;
      e.destroy = function () {
        this.$10.release();
      };
      e.$27 = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          this.$7 || (this.$7 = this.$28());
          return yield this.$7;
        });
        function c() {
          return a.apply(this, arguments);
        }
        return c;
      })();
      e.$28 = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var a = d("ThisControllerNoLongerExists").__DEADURI__("o0vbvk3w9"),
            e = this.$29();
          return yield new (b("Promise"))(function (b, d) {
            new (c("AsyncRequest"))()
              .setURI(a)
              .setMethod("POST")
              .setData(e)
              .setErrorHandler(function (a) {
                return d(new Error(a.errorDescription));
              })
              .setHandler(function (a) {
                return b(a.getPayload());
              })
              .send();
          });
        });
        function e() {
          return a.apply(this, arguments);
        }
        return e;
      })();
      e.$29 = function () {
        var a = babelHelpers["extends"]({}, this.$8, {
            video_id: this.$3.getVideoID(),
            is_ad: this.$3.isAd(),
            script_path: d("ScriptPath").getScriptPath(),
          }),
          b = this.$3.getVideoChannelID();
        b && (a.video_channel_id = b);
        b = this.$3.getPlayerOrigin();
        b && (a.player_origin = b);
        b = this.$3.getPlayerSuborigin();
        b && (a.player_suborigin = b);
        b = c("collectDataAttributes")(this.$3.getRootNode(), ["ft"]);
        b && b.ft && (a.tracking_codes = [JSON.stringify(b.ft)]);
        return a;
      };
      e.$13 = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
          this.$3.logEvent("chromecast_button_clicked");
          if (a) {
            this.$4 = !0;
            this.$3.emit("casting/castingStateChange", this.$4);
            this.$3.isState("playing") && this.$3.pause("user_initiated");
            try {
              yield this.$30();
            } catch (a) {
              (this.$4 = !1),
                this.$3.emit("casting/castingStateChange", this.$4);
            }
          } else (this.$4 = !1), this.$3.emit("casting/castingStateChange", this.$4), yield this.$31();
        });
        function c(b) {
          return a.apply(this, arguments);
        }
        return c;
      })();
      e.$30 = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          this.$3.pause("user_initiated");
          var a = this.$3.getCurrentTimePosition();
          this.$12 = a;
          var d = this.$27(),
            e = this.$2.isCasting(this.$1);
          if (!e)
            if (c("ChromecastConfig").VERSION_LAUNCH_MESSAGE) {
              var f = yield b("Promise").all([d, this.$2.getSession()]);
              f = f[0];
              yield this.$32(!0);
              yield this.$2.startCasting(this.$1, { position: a }, f);
            } else yield this.$2.startCasting(this.$1);
          yield this.$32(!0);
          f = yield this.$2.getSession();
          var g = f.getVolume();
          !f.isMuted() && g && (this.$3.unmute(), this.$3.setVolume(g));
          if (!e && c("ChromecastConfig").VERSION_LAUNCH_MESSAGE) return;
          f = yield this.$33();
          g = !!f.playing_video_id;
          e = this.$9 && f.playing_video_id === this.$9;
          if (!g || !e) {
            f = yield d;
            yield this.$34(f);
          }
          if (!g || e) {
            d = yield this.$35(a);
            this.$9 = d.reference_id;
          } else {
            this.$9 = null;
            yield this.$36();
            f = yield this.$37(a);
            this.$9 = f.reference_id;
          }
        });
        function d() {
          return a.apply(this, arguments);
        }
        return d;
      })();
      e.$31 = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          this.$6 && (yield this.$38(), (this.$6 = !1)), yield this.$39();
        });
        function c() {
          return a.apply(this, arguments);
        }
        return c;
      })();
      e.$14 = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
          a ? yield this.$35() : yield this.$40(),
            (this.$6 = a),
            this.$3.emit("casting/playStateChange", this.$6);
        });
        function c(b) {
          return a.apply(this, arguments);
        }
        return c;
      })();
      e.$32 = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
          d("CSS").conditionClass(this.$3.getVideoNode(), "_1_d3", a);
        });
        function c(b) {
          return a.apply(this, arguments);
        }
        return c;
      })();
      e.$41 = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
          typeof a !== "number" && (a = this.$12), this.$3.seek(a);
        });
        function c(b) {
          return a.apply(this, arguments);
        }
        return c;
      })();
      e.$26 = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
          yield this.$2.setFeedbackEnabled(!a), (this.$5 = a);
        });
        function c(b) {
          return a.apply(this, arguments);
        }
        return c;
      })();
      e.$39 = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          this.$6 &&
            ((this.$6 = !1), this.$3.emit("casting/playStateChange", this.$6)),
            this.$4 &&
              ((this.$4 = !1),
              this.$3.emit("casting/castingStateChange", this.$4)),
            typeof this.$12 === "number" && (yield this.$41()),
            yield this.$32(!1);
        });
        function c() {
          return a.apply(this, arguments);
        }
        return c;
      })();
      e.$19 = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
          this.$4 && a.type === "status_update" && (yield this.$42(a.data));
        });
        function c(b) {
          return a.apply(this, arguments);
        }
        return c;
      })();
      e.$42 = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
          if (this.$9 && this.$9 !== a.reference_id) {
            yield this.$39();
            return;
          }
          var b = a.state === "play";
          b !== this.$6 &&
            ((this.$6 = b), this.$3.emit("casting/playStateChange", this.$6));
          a.position > 0 &&
            ((this.$12 = a.position),
            this.$3.emit("casting/updateStatus", { position: a.position }));
        });
        function c(b) {
          return a.apply(this, arguments);
        }
        return c;
      })();
      e.$21 = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
          if (!this.$4) return;
          yield this.$37(a);
          this.$6 || (yield this.$14(!0));
        });
        function c(b) {
          return a.apply(this, arguments);
        }
        return c;
      })();
      e.$24 = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
          if (!this.$4) return;
          this.$2.setVolume(a);
        });
        function c(b) {
          return a.apply(this, arguments);
        }
        return c;
      })();
      e.$22 = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (!this.$4) return;
          this.$2.mute();
        });
        function c() {
          return a.apply(this, arguments);
        }
        return c;
      })();
      e.$23 = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (!this.$4) return;
          this.$2.unmute();
        });
        function c() {
          return a.apply(this, arguments);
        }
        return c;
      })();
      e.$15 = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
          var b;
          this.$3.logEvent(
            "chromecast_availability_checked",
            ((b = {
              player: this.$3.getPlayerVersion(),
              cast_button_visible: a,
              connection: null,
              raw_client_time: Date.now() / 1e3,
            }),
            (b.chromecast_receiver_available = a),
            b)
          );
          this.$3.emit("casting/receiverStateChange", a);
        });
        function c(b) {
          return a.apply(this, arguments);
        }
        return c;
      })();
      e.$16 = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield this.$39();
        });
        function c() {
          return a.apply(this, arguments);
        }
        return c;
      })();
      e.$18 = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          this.$3.emit("casting/supportStateChange");
        });
        function c() {
          return a.apply(this, arguments);
        }
        return c;
      })();
      e.$17 = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          this.$3.logEvent("chromecast_not_supported"),
            this.$3.emit("casting/notSupported");
        });
        function c() {
          return a.apply(this, arguments);
        }
        return c;
      })();
      e.$25 = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          this.$4 &&
            (this.$3.pause("user_initiated"),
            this.$6 ? yield this.$40() : yield this.$35());
        });
        function c() {
          return a.apply(this, arguments);
        }
        return c;
      })();
      e.$34 = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
          return yield this.$2.sendCommand(
            "next_video",
            { feedback_disabled: this.$5 },
            a
          );
        });
        function c(b) {
          return a.apply(this, arguments);
        }
        return c;
      })();
      e.$35 = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
          return yield this.$2.sendCommand("play_video", { position: a });
        });
        function c(b) {
          return a.apply(this, arguments);
        }
        return c;
      })();
      e.$40 = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return yield this.$2.sendCommand("pause_video");
        });
        function c() {
          return a.apply(this, arguments);
        }
        return c;
      })();
      e.$37 = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
          return yield this.$2.sendCommand("seek_video", { position: a });
        });
        function c(b) {
          return a.apply(this, arguments);
        }
        return c;
      })();
      e.$36 = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return yield this.$2.sendCommand("skip_video");
        });
        function c() {
          return a.apply(this, arguments);
        }
        return c;
      })();
      e.$38 = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return yield this.$2.sendCommand("stop_video");
        });
        function c() {
          return a.apply(this, arguments);
        }
        return c;
      })();
      e.$33 = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var a = yield this.$2.getExperienceState();
          return a.experience_specific_state;
        });
        function c() {
          return a.apply(this, arguments);
        }
        return c;
      })();
      e.$20 = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
          (this.$11 = a), this.$3.emit("casting/error", a);
        });
        function c(b) {
          return a.apply(this, arguments);
        }
        return c;
      })();
      return a;
    })();
    g["default"] = a;
  },
  98
);
