/*FB_PKG_DELIM*/

__d(
  "fetchCtvCastPayloadQuery_facebookRelayOperation",
  [],
  function (a, b, c, d, e, f) {
    e.exports = "4867407706706103";
  },
  null
);
__d(
  "fetchCtvCastPayloadQuery.graphql",
  ["fetchCtvCastPayloadQuery_facebookRelayOperation"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "castSessionID",
        },
        c = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "mediaParameters",
        },
        d = { defaultValue: null, kind: "LocalArgument", name: "requestID" },
        e = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "cast_session_id",
                variableName: "castSessionID",
              },
              { kind: "Literal", name: "caster_id", value: 0 },
              {
                kind: "Variable",
                name: "media_parameters_json",
                variableName: "mediaParameters",
              },
              {
                kind: "Literal",
                name: "receiver_app_id",
                value: 1614120985559993,
              },
              {
                kind: "Variable",
                name: "request_id",
                variableName: "requestID",
              },
              { kind: "Literal", name: "uses_secure_connection", value: !0 },
            ],
            kind: "ScalarField",
            name: "ctv_cast_payload",
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: [a, c, d],
          kind: "Fragment",
          metadata: null,
          name: "fetchCtvCastPayloadQuery",
          selections: e,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [a, d, c],
          kind: "Operation",
          name: "fetchCtvCastPayloadQuery",
          selections: e,
        },
        params: {
          id: b("fetchCtvCastPayloadQuery_facebookRelayOperation"),
          metadata: {},
          name: "fetchCtvCastPayloadQuery",
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
  "fetchVideoCastPayloadQuery_facebookRelayOperation",
  [],
  function (a, b, c, d, e, f) {
    e.exports = "4715510405214458";
  },
  null
);
__d(
  "fetchVideoCastPayloadQuery.graphql",
  ["fetchVideoCastPayloadQuery_facebookRelayOperation"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "castSessionID",
        },
        c = { defaultValue: null, kind: "LocalArgument", name: "playerOrigin" },
        d = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "playerSubOrigin",
        },
        e = { defaultValue: null, kind: "LocalArgument", name: "videoID" },
        f = [{ kind: "Variable", name: "id", variableName: "videoID" }],
        g = {
          alias: null,
          args: [
            {
              kind: "Variable",
              name: "cast_session_id",
              variableName: "castSessionID",
            },
            {
              kind: "Variable",
              name: "player_origin",
              variableName: "playerOrigin",
            },
            {
              kind: "Variable",
              name: "player_suborigin",
              variableName: "playerSubOrigin",
            },
          ],
          kind: "ScalarField",
          name: "video_cast_payload",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [a, c, d, e],
          kind: "Fragment",
          metadata: null,
          name: "fetchVideoCastPayloadQuery",
          selections: [
            {
              alias: null,
              args: f,
              concreteType: "Video",
              kind: "LinkedField",
              name: "video",
              plural: !1,
              selections: [g],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [e, c, d, a],
          kind: "Operation",
          name: "fetchVideoCastPayloadQuery",
          selections: [
            {
              alias: null,
              args: f,
              concreteType: "Video",
              kind: "LinkedField",
              name: "video",
              plural: !1,
              selections: [
                g,
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
          id: b("fetchVideoCastPayloadQuery_facebookRelayOperation"),
          metadata: {},
          name: "fetchVideoCastPayloadQuery",
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
  "TetraAccessoryListCell.react",
  ["TetraListCell.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a, b) {
      return h.jsx(
        c("TetraListCell.react"),
        babelHelpers["extends"]({}, a, { ref: b })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "MAWLSVaultingHooks",
  ["ReStoreVaulting"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      onAfterEntriesNext: function (a) {
        var b = a.tableName;
        a = a.value;
        return d("ReStoreVaulting").maybeVaultDbRow(a, b);
      },
      onAfterGet: function (a) {
        var b = a.tableName;
        a = a.value;
        return d("ReStoreVaulting").maybeVaultDbRow(a, b);
      },
      onBeforeAdd: function (a) {
        var b = a.tableName;
        a = a.value;
        return d("ReStoreVaulting").maybeUnvaultDbRow(a, b);
      },
      onBeforeDeleteThenInsert: function (a) {
        var b = a.tableName;
        a = a.value;
        return d("ReStoreVaulting").maybeUnvaultDbRow(a, b);
      },
      onBeforeNotify: function (a) {
        var b = a.newValue,
          c = a.prevValue;
        a = a.tableName;
        return {
          newValue: d("ReStoreVaulting").maybeVaultDbRow(b, a),
          prevValue: d("ReStoreVaulting").maybeVaultDbRow(c, a),
        };
      },
      onBeforePut: function (a) {
        var b = a.tableName;
        a = a.value;
        return d("ReStoreVaulting").maybeUnvaultDbRow(a, b);
      },
      onBeforeUpsert: function (a) {
        var b = a.tableName;
        a = a.value;
        return d("ReStoreVaulting").maybeUnvaultDbRow(a, b);
      },
    };
    g["default"] = a;
  },
  98
);
__d(
  "MAWDropCutoverThreadsTable",
  ["Promise", "ReQL"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var c = d("ReQL").fromTableAscending(a.table("cutover_threads"));
      return d("ReQL")
        .toArrayAsync(c)
        .then(function (c) {
          return c.reduce(function (b, c) {
            return b.then(function () {
              return a
                .table("cutover_threads")
                ["delete"](d("ReQL").key(c.openThreadId));
            });
          }, b("Promise").resolve());
        });
    }
    g.call = a;
  },
  98
);
__d(
  "LSDatabaseProviderType",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return g(a.persistenceTypes);
    }
    function g(a) {
      return a.includes("indexeddb");
    }
    f.isProviderPersisted = a;
    f.hasPersistentType = g;
  },
  66
);
__d(
  "LSStorage",
  ["unrecoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, d, e) {
      a = a.tableNames[b];
      b = a.indexes;
      a = a.primaryKeyIds;
      a = e == null ? a : b[e];
      return a.reduceRight(function (a, b) {
        if (d[b] !== void 0 || e != null) return { hd: d[b], tl: a };
        throw c("unrecoverableViolation")(
          "primary key must be defined on object",
          "messenger_web_product"
        );
      }, 0);
    }
    function b(a, b) {
      while (a !== 0 && b !== 0) {
        if (
          a.hd !== b.hd &&
          !(
            Array.isArray(a.hd) &&
            Array.isArray(b.hd) &&
            a.hd.length === b.hd.length &&
            a.hd.every(function (a, c) {
              return a === b.hd[c];
            })
          )
        )
          return !1;
        a = a.tl;
        b = b.tl;
      }
      return a === 0 && b === 0;
    }
    g.searchKey = a;
    g.areKeysEqual = b;
  },
  98
);
__d(
  "I64MigrationHelper",
  ["I64", "nullthrows"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      return c("nullthrows")(d("I64").cast(a));
    }
    g.cast = a;
  },
  98
);
__d(
  "LSTableDefaults",
  ["I64MigrationHelper"],
  function (a, b, c, d, e, f) {
    e.exports = {
      sync_groups: {
        syncStatus: (a = b("I64MigrationHelper")).cast([0, 0]),
        sendSyncParams: !1,
        minTimeToSyncTimestampMs: a.cast([0, 0]),
        canIgnoreTimestamp: !1,
        priority: a.cast([0, 0]),
        lastSyncRequestTimestampMs: a.cast([0, 0]),
        lastSyncCompletedTimestampMs: a.cast([0, 0]),
        syncChannel: a.cast([0, 1]),
      },
      pending_tasks: {
        enqueueTimestampMs: a.cast([0, 0]),
        firstExecutedTimestampMs: a.cast([0, 0]),
        failureCount: a.cast([0, 0]),
        minTimeToSyncTimestampMs: a.cast([0, 0]),
        pluginType: a.cast([0, 0]),
        priority: a.cast([0, 0]),
      },
      pending_fire_and_forget_tasks: {
        enqueueTimestampMs: a.cast([0, 0]),
        priority: a.cast([0, 0]),
      },
      contacts: {
        isMessengerUser: !1,
        isMemorialized: !1,
        blockedByViewerStatus: a.cast([0, 0]),
        rank: a.cast([0, 0]),
        contactType: a.cast([0, 0]),
        contactTypeExact: a.cast([0, 0]),
        canViewerMessage: !0,
        gender: a.cast([0, 0]),
        authorityLevel: a.cast([0, 0]),
        optimisticBlockedByViewerStatus: a.cast([0, 0]),
        optimisticBlockedByViewerStatusTimestampMs: a.cast([0, 0]),
        contactReachabilityStatusType: a.cast([0, 0]),
        restrictionType: a.cast([0, 0]),
        waConnectStatus: a.cast([0, 0]),
        capabilities2: a.cast([0, 0]),
        isEmployee: !1,
      },
      ig_contact_info: { e2eeEligibility: a.cast([0, 0]) },
      reactions: {
        timestampMs: a.cast([0, 0]),
        authorityLevel: a.cast([0, 0]),
      },
      threads: {
        lastActivityTimestampMs: a.cast([0, 0]),
        lastReadWatermarkTimestampMs: a.cast([0, 0]),
        removeWatermarkTimestampMs: a.cast([0, 0]),
        muteExpireTimeMs: a.cast([0, 0]),
        isAdminSnippet: !1,
        ongoingCallState: a.cast([0, 0]),
        snippetHasEmoji: !1,
        hasPersistentMenu: !1,
        disableComposerInput: !1,
        capabilities: a.cast([0, 0]),
        isCustomThreadPicture: !1,
        isDisappearingMode: !1,
        unreadDisappearingMessageCount: a.cast([0, 0]),
        authorityLevel: a.cast([0, 0]),
        capabilities2: a.cast([0, 0]),
        muteCallsExpireTimeMs: a.cast([0, 0]),
        unsendLimitMs: a.cast([0, 0]),
        threadInvitesEnabled: a.cast([0, 0]),
        threadInvitesEnabledV2: a.cast([0, 0]),
        capabilities3: a.cast([0, 0]),
        muteMentionExpireTimeMs: a.cast([0, 0]),
        isReadReceiptsDisabled: !1,
        readReceiptsDisabledV2: a.cast([0, 0]),
      },
      threads_ranges_v2__generated: {
        minThreadKey: a.cast([0, 0]),
        minLastActivityTimestampMs: a.cast([0, 0]),
        maxThreadKey: a.cast([0, 0]),
        maxLastActivityTimestampMs: a.cast([0, 0]),
        isLoadingBefore: !1,
        isLoadingAfter: !1,
        hasMoreBefore: !1,
        hasMoreAfter: !1,
      },
      messages: {
        timestampMs: a.cast([0, 0]),
        primarySortKey: a.cast([0, 0]),
        secondarySortKey: a.cast([0, 0]),
        isAdminMessage: !1,
        sendStatus: a.cast([0, 0]),
        sendStatusV2: a.cast([0, 0]),
        isUnsent: !1,
        replyStatus: a.cast([0, 0]),
        replyAttachmentType: a.cast([0, 0]),
        hasQuickReplies: !1,
        textHasLinks: !1,
        viewFlags: a.cast([0, 0]),
        displayedContentTypes: a.cast([0, 1]),
        quickReplyType: a.cast([0, 0]),
        authorityLevel: a.cast([0, 0]),
        unsentTimestampMs: a.cast([0, 0]),
        isCollapsed: !1,
        messageRenderingType: a.cast([0, 0]),
      },
      messages_ranges_v2__generated: {
        isLoadingBefore: !1,
        isLoadingAfter: !1,
        hasMoreBefore: !1,
        hasMoreAfter: !1,
      },
      participants: {
        readWatermarkTimestampMs: a.cast([0, 0]),
        deliveredWatermarkTimestampMs: a.cast([0, 0]),
        authorityLevel: a.cast([0, 0]),
        readActionTimestampMs: a.cast([0, 0]),
        groupParticipantJoinState: a.cast([0, 0]),
        threadRoles: a.cast([0, 0]),
      },
      attachments: {
        timestampMs: a.cast([0, 0]),
        attachmentType: a.cast([0, 0]),
        hasMedia: !1,
        isSharable: !1,
        hasXma: !1,
        attachmentIndex: a.cast([0, 0]),
        authorityLevel: a.cast([0, 0]),
      },
      attachments_ranges_v2__generated: {
        mediaGroup: a.cast([0, 0]),
        isLoadingBefore: !1,
        isLoadingAfter: !1,
        hasMoreBefore: !1,
        hasMoreAfter: !1,
      },
      attachment_items: { attachmentIndex: a.cast([0, 0]) },
      group_membership_approval_requests: { authorityLevel: a.cast([0, 0]) },
      admin_message_ctas: { timestampMs: a.cast([0, 0]), showAdChoiceIcon: !1 },
      thread_nullstate: {
        ctaType: a.cast([0, 0]),
        privacyTextCtaType: a.cast([0, 0]),
      },
      messages_status: { timestampMs: a.cast([0, 0]) },
      polls: { pollType: a.cast([0, 0]) },
      poll_options_v2: {
        voteCount: a.cast([0, 0]),
        sortKeyVotingTimestamp: a.cast([0, 0]),
        sortKeyCreationTimestamp: a.cast([0, 0]),
      },
      filtered_threads_ranges_v3__generated: {
        minThreadKey: a.cast([0, 0]),
        minLastActivityTimestampMs: a.cast([0, 0]),
        maxThreadKey: a.cast([0, 0]),
        maxLastActivityTimestampMs: a.cast([0, 0]),
        isLoadingBefore: !1,
        isLoadingAfter: !1,
        hasMoreBefore: !1,
        hasMoreAfter: !1,
        folderName: "inbox",
        secondaryThreadRangeFilter: a.cast([0, 0]),
        threadRangeFilterValue: "",
      },
      community_folders: {
        capabilities: a.cast([0, 0]),
        notificationMutedUntil: a.cast([0, 0]),
        inviteStatus: a.cast([0, 0]),
        capabilities2: a.cast([0, 0]),
        capabilities3: a.cast([0, 0]),
      },
      community_members: {
        source: a.cast([0, 0]),
        adminActions: a.cast([0, 0]),
        contactCapabilities: a.cast([0, 0]),
        channelBadges: a.cast([0, 0]),
        threadRoles: a.cast([0, 0]),
        requestId: "",
      },
      inbox_threads_ranges: {
        minThreadKey: a.cast([0, 0]),
        minLastActivityTimestampMs: a.cast([0, 0]),
        isLoadingBefore: !1,
        hasMoreBefore: !1,
      },
      community_direct_invites_presets: {
        fallbackUrl: "",
        pictureUrlExpirationTimestampMs1: a.cast([0, 0]),
        pictureUrlExpirationTimestampMs2: a.cast([0, 0]),
        presetTypeV2: "ALL_MEMBERS",
      },
      sync_group_threads_ranges: {
        minThreadKey: a.cast([0, 0]),
        minLastActivityTimestampMs: a.cast([0, 0]),
        isLoadingBefore: !1,
        hasMoreBefore: !1,
      },
      community_chat_polls: { pollType: a.cast([0, 0]) },
      community_chat_poll_options: {
        voteCount: a.cast([0, 0]),
        sortKeyVotingTimestamp: a.cast([0, 0]),
        sortKeyCreationTimestamp: a.cast([0, 0]),
      },
      reactions_v2: {
        viewerReactionTimestampMs: a.cast([0, 0]),
        lastUpdatedTimestampMs: a.cast([0, 0]),
      },
      group_invitations_pending: {
        communityJoinRequestStatus: a.cast([0, 0]),
        communityParticipationControlRequestStatus: a.cast([0, 0]),
        communityParticipationControlSetting: a.cast([0, 0]),
      },
      thread_label_mappings: { sortKey: a.cast([0, 0]) },
      inbox_view_state: { value: "" },
      inbox_view_state_v2: { value: "" },
      discoverable_chat_participants: { source: a.cast([0, 0]) },
      roll_calls: {
        viewerHasContributed: !1,
        viewerCanEditPrompt: !1,
        isBlurred: !1,
        canViewWithoutContributing: !1,
      },
      roll_call_contributions_v2: {
        contributorId: a.cast([0, 0]),
        contributionSource: a.cast([0, 0]),
      },
      shared_albums: {
        lastActivityTimestampMs: a.cast([0, 0]),
        contributionCount: a.cast([0, 0]),
      },
      shared_album_contributions: {
        creationTimestampMs: a.cast([0, 0]),
        creatorId: a.cast([0, 0]),
      },
      universal_search_recent_searches: {
        lastAccessedTimestampMs: a.cast([0, 0]),
      },
      cm_search_nullstate_metadata: { score: 0 },
      contact_upload_settings: { authorityLevel: a.cast([0, 0]) },
      presence_settings: {
        isActiveStatusViewable: !1,
        isActiveStatusViewableOnFb: !1,
        isActiveStatusViewableOnMessenger: !1,
        hasConvertedToViewSideSettings: !1,
      },
      video_chat_links_joining: { canAnonymousUsersJoin: a.cast([0, 0]) },
      notification_settings: {
        includeInSwitchAccountBadges: !1,
        mutePageAccountMessageReminder: !1,
      },
      avatar_settings: { enableAvatarHotlike: !1 },
      messaging_privacy_settings: { readReceiptsDisabled: a.cast([0, 0]) },
      rtc_call_events: { isProcessed: !1 },
      transaction_history: { timestampMs: a.cast([0, 0]) },
      thread_themes: {
        isDeprecated: !1,
        iconUrl: "",
        iconUrlFallback: "",
        backgroundUrl: "",
      },
      ranking_scores: { score: a.cast([0, 0]), scoreIndex: a.cast([0, 0]) },
      story_buckets: { pageNum: a.cast([0, 0]), readState: a.cast([0, 0]) },
      stories: { authorityLevel: a.cast([0, 0]) },
      story_viewers: {
        interactionType: a.cast([0, 1]),
        authorityLevel: a.cast([0, 0]),
      },
      story_reactions: { authorityLevel: a.cast([0, 0]) },
      story_ad_unit: { shouldShowAdChoice: !1 },
      story_overlays: { authorityLevel: a.cast([0, 0]) },
      rooms: { notificationMutedUntilMs: a.cast([0, 0]) },
      media_staging: { progress: a.cast([0, 0]) },
      client_messages: {
        textSize: a.cast([0, 0]),
        sendStatus: a.cast([0, 0]),
        isHidden: !1,
        isTombstoned: !1,
        isReplyOnly: !1,
        messageContentType: a.cast([0, 0]),
        messageContentSubtype: a.cast([0, 0]),
        messageSource: a.cast([0, 0]),
        messageCreationType: a.cast([0, 0]),
        messageEphemeralityType: a.cast([0, 0]),
        replyStatus: a.cast([0, 0]),
        replyMessageTextSize: a.cast([0, 0]),
        replyVicinityStatus: a.cast([0, 0]),
        isForwarded: !1,
        isReadonly: !1,
        disabledActionsReason: a.cast([0, 0]),
        shouldPersist: !1,
        shouldHideInSnippet: !1,
      },
      client_participants: {
        isPending: !1,
        capabilities1: a.cast([0, 0]),
        capabilities2: a.cast([0, 0]),
        readActionTsMs: a.cast([0, 0]),
      },
      client_threads: {
        isAdminSnippet: !1,
        isHotlikeSnippet: !1,
        groupMemberAddMode: a.cast([0, 0]),
        capabilities1: a.cast([0, 0]),
        capabilities2: a.cast([0, 0]),
        isHidden: !1,
        isTombstoned: !1,
        isPending: !1,
        isShadowThread: !1,
        pinnedMessagesCount: a.cast([0, 0]),
      },
      data_trace_meta: {
        initTimestampMs: a.cast([0, 0]),
        foregroundTimestampMs: a.cast([0, 0]),
        traceType: a.cast([0, 0]),
        shouldFlush: !1,
      },
      data_trace_addon: { timestampMs: a.cast([0, 0]) },
      secure_encrypted_backups_client_state: {
        authorityLevel: a.cast([0, 0]),
        encryptionVersion: a.cast([0, 0]),
        revisionVersion: a.cast([0, 0]),
      },
      secure_encrypted_backups_epochs: { authorityLevel: a.cast([0, 0]) },
      encrypted_backups: {
        authorityLevel: a.cast([0, 0]),
        hasOtcEligibleDevices: !1,
      },
      secure_encrypted_backups_generated_recovery_code: {
        virtualDeviceType: a.cast([0, 1]),
      },
      encrypted_backups_virtual_devices: {
        virtualDeviceType: a.cast([0, 1]),
        removalStatus: a.cast([0, 1]),
      },
      encrypted_backups_metadata: { authorityLevel: a.cast([0, 0]) },
      cutover_threads: { isMigrated: !1, showOpenMessageHistory: !1 },
      persistent_menu_ctas: { ctaType: "fallback" },
    };
  },
  null
);
__d(
  "MWTabNotifierWhenPDBEnabled",
  ["cr:3107"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:3107");
  },
  98
);
__d(
  "ReStoreUtils",
  ["LSTableDefaults"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    async function a(a) {
      var b = [],
        c = await a.next();
      while (!c.done) b.push(c.value), (c = await a.next());
      return b;
    }
    function b(a, b) {
      var d = c("LSTableDefaults")[b];
      return !d
        ? a
        : Object.keys(d).reduce(function (a, b) {
            Object.prototype.hasOwnProperty.call(a, b) || (a[b] = d[b]);
            return a;
          }, babelHelpers.extends({}, a));
    }
    g.collectIterator = a;
    g.appendDefaultValues = b;
  },
  98
);
__d(
  "ReStoreDefaultValueMigration",
  [
    "LSPlatformLsInitLog",
    "LSTableDefaults",
    "ReStoreDefaultValuesMetadata",
    "ReStoreUtils",
    "asyncToGeneratorRuntime",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a, b) {
      return i.apply(this, arguments);
    }
    function i() {
      i = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b) {
        var c = {};
        b = yield d("ReStoreUtils").collectIterator(
          b
            .table(d("ReStoreDefaultValuesMetadata").defaultValuesTableName)
            .entries(a)
        );
        for (a of b) {
          b = a[0];
          var e = a[1];
          if (b != null) {
            var f;
            b = d("ReStoreDefaultValuesMetadata").tryParseDefaultValuesData(e);
            if (b == null) continue;
            e = b.columns;
            b = b.tableName;
            c[b] = (f = c[b]) != null ? f : new Set();
            for (f of e) c[b].add(f);
          }
        }
        return c;
      });
      return i.apply(this, arguments);
    }
    function j(a, b, c) {
      return k.apply(this, arguments);
    }
    function k() {
      k = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b, d) {
        a = yield h(a, b);
        b = {};
        for (d in d.tableNames) {
          var e = c("LSTableDefaults")[d];
          if (e != null)
            for (var f in e) {
              var g;
              g = (g = a[d]) == null ? void 0 : g.has(f);
              if (!g) {
                b[d] = (g = b[d]) != null ? g : {};
                b[d][f] = e[f];
              }
            }
        }
        return b;
      });
      return k.apply(this, arguments);
    }
    function l(a, b) {
      return m.apply(this, arguments);
    }
    function m() {
      m = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b) {
        for (b in b) {
          var e = Object.keys(c("LSTableDefaults")[b] || {});
          e = { columns: e, tableName: b };
          yield a
            .table(d("ReStoreDefaultValuesMetadata").defaultValuesTableName)
            .put(
              d("ReStoreDefaultValuesMetadata").defaultValuesColumnToValue(e)
            );
        }
      });
      return m.apply(this, arguments);
    }
    function a(a, b) {
      return n.apply(this, arguments);
    }
    function n() {
      n = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b) {
        var c = new WeakMap();
        d("LSPlatformLsInitLog").addPoint("default_values_update_start");
        var e = function (a, b) {
          d("LSPlatformLsInitLog").addPoint(
            "default_values_update_end_failure",
            {
              string: {
                default_values_update_failure_point: b,
                default_values_update_failure_reason: String(a),
              },
            }
          );
        };
        try {
          b = yield j(c, a, b);
          try {
            for (var f in b) {
              var g = a.table(f).entries(c),
                h = yield g.next();
              while (!h.done) {
                var i = babelHelpers["extends"]({}, h.value[1]);
                i = d("ReStoreUtils").appendDefaultValues(i, f);
                yield a.table(f).put(i);
                h = yield g.next();
              }
            }
            yield l(a, b);
            d("LSPlatformLsInitLog").addPoint("default_values_update_end");
          } catch (a) {
            e(a, "setDefaultValues");
          }
        } catch (a) {
          e(a, "findDefaultValuesToUpdate");
        }
      });
      return n.apply(this, arguments);
    }
    g.runMigrationForTableDefaultValuesIfNeeded = a;
  },
  98
);
__d(
  "ReStoreHooks",
  ["PromiseOrValue"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      return {
        afterEntriesNext: a.reduce(
          function (a, b) {
            var c = b.onAfterEntriesNext;
            return c
              ? function (b) {
                  return c({ tableName: b.tableName, value: a(b) });
                }
              : a;
          },
          function (a) {
            a = a.value;
            return a;
          }
        ),
        afterGet: a.reduce(
          function (a, b) {
            var c = b.onAfterGet;
            return c
              ? function (b) {
                  return c({ tableName: b.tableName, value: a(b) });
                }
              : a;
          },
          function (a) {
            a = a.value;
            return a;
          }
        ),
        beforeAdd: a.reduce(
          function (a, b) {
            var c = b.onBeforeAdd;
            return c
              ? function (b) {
                  return d("PromiseOrValue").map(a(b), function (a) {
                    return c(babelHelpers.extends({}, b, { value: a }));
                  });
                }
              : a;
          },
          function (a) {
            a = a.value;
            return a;
          }
        ),
        beforeDeleteThenInsert: a.reduce(
          function (a, b) {
            var c = b.onBeforeDeleteThenInsert;
            return c
              ? function (b) {
                  return d("PromiseOrValue").map(a(b), function (a) {
                    return c(babelHelpers.extends({}, b, { value: a }));
                  });
                }
              : a;
          },
          function (a) {
            a = a.value;
            return a;
          }
        ),
        beforeNotify: a.reduce(
          function (a, b) {
            var c = b.onBeforeNotify;
            return c
              ? function (b) {
                  var d = a(b),
                    e = d.newValue;
                  d = d.prevValue;
                  return c({
                    newValue: e,
                    prevValue: d,
                    tableName: b.tableName,
                  });
                }
              : a;
          },
          function (a) {
            var b = a.newValue;
            a = a.prevValue;
            return { newValue: b, prevValue: a };
          }
        ),
        beforePut: a.reduce(
          function (a, b) {
            var c = b.onBeforePut;
            return c
              ? function (b) {
                  return d("PromiseOrValue").map(a(b), function (a) {
                    return c(babelHelpers.extends({}, b, { value: a }));
                  });
                }
              : a;
          },
          function (a) {
            a = a.value;
            return a;
          }
        ),
        beforeUpsert: a.reduce(
          function (a, b) {
            var c = b.onBeforeUpsert;
            return c
              ? function (b) {
                  return d("PromiseOrValue").map(a(b), function (a) {
                    return c(babelHelpers.extends({}, b, { value: a }));
                  });
                }
              : a;
          },
          function (a) {
            a = a.value;
            return a;
          }
        ),
      };
    }
    g.createHookManager = a;
  },
  98
);
__d(
  "ReStoreIndicesMigration",
  [
    "LSPlatformLsInitLog",
    "ReStoreIndexMetadata",
    "ReStoreUtils",
    "asyncToGeneratorRuntime",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a, b) {
      return i.apply(this, arguments);
    }
    function i() {
      i = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b) {
        var c = {};
        b = yield d("ReStoreUtils").collectIterator(
          b.table(d("ReStoreIndexMetadata").indicesTableName).entries(a)
        );
        for (a of b) {
          b = a[0];
          var e = a[1];
          if (b != null) {
            var f;
            e = d("ReStoreIndexMetadata").tryParseIndexData(e);
            if (e == null) continue;
            var g = e.indexName,
              h = e.tableName;
            c[h] = (f = c[h]) != null ? f : {};
            c[h][g] = { index: e.data, key: b };
          }
        }
        return c;
      });
      return i.apply(this, arguments);
    }
    function j(a, b, c) {
      return k.apply(this, arguments);
    }
    function k() {
      k = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b, c) {
        a = yield h(a, b);
        b = {};
        for (var e in c.tableNames) {
          var f = c.tableNames[e];
          for (var g in f.indexes) {
            var i,
              j = f.indexes[g];
            i = (i = a[e]) == null ? void 0 : i[g];
            if (
              d("ReStoreIndexMetadata").indicesDiffer(
                i == null ? void 0 : i.index,
                j
              )
            ) {
              b[e] = (i = b[e]) != null ? i : {};
              b[e][g] = j;
            }
          }
        }
        i = {};
        for (j in a) {
          g = a[j];
          for (f in g) {
            var k;
            e = g[f];
            k =
              (k = c.tableNames[j]) == null
                ? void 0
                : (k = k.indexes) == null
                ? void 0
                : k[f];
            if (k == null) {
              i[j] = (k = i[j]) != null ? k : {};
              i[j][f] = e;
            }
          }
        }
        return { toRemove: i, toUpdate: b };
      });
      return k.apply(this, arguments);
    }
    function l(a, b) {
      return m.apply(this, arguments);
    }
    function m() {
      m = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b) {
        for (var c in b) {
          var e = b[c];
          for (var f in e) {
            var g = e[f];
            g = { data: g, indexName: f, tableName: c };
            yield a
              .table(d("ReStoreIndexMetadata").indicesTableName)
              .put(d("ReStoreIndexMetadata").indexDataToValue(g));
          }
        }
      });
      return m.apply(this, arguments);
    }
    function n(a, b) {
      return o.apply(this, arguments);
    }
    function o() {
      o = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b) {
        for (var c in b) {
          var e = b[c];
          for (var f in e) {
            var g = e[f].key;
            yield a
              .table(d("ReStoreIndexMetadata").indicesTableName)
              ["delete"](g);
          }
        }
      });
      return o.apply(this, arguments);
    }
    function a(a, c, e) {
      var f = new WeakMap();
      d("LSPlatformLsInitLog").addPoint("index_migration_start");
      var g = function (a, b) {
        d("LSPlatformLsInitLog").addPoint("index_migration_end_failure", {
          string: {
            index_migration_failure_point: b,
            index_migration_failure_reason: String(a),
          },
        });
      };
      return j(f, a, c)
        .then(
          (function () {
            var f = b("asyncToGeneratorRuntime").asyncToGenerator(function* (
              b
            ) {
              var f = b.toRemove;
              b = b.toUpdate;
              var g = Array.from(
                new Set([].concat(Object.keys(b), Object.keys(f)))
              );
              d("LSPlatformLsInitLog").addAnnotations({
                int: { index_migration_rebuild_tables_count: g.length },
                string_array: { index_migration_rebuilt_tables: g },
              });
              for (g of g)
                if (c.tableNames[g] != null) {
                  var h;
                  h = Array.from(
                    new Set(
                      [].concat(
                        Object.keys((h = b[g]) != null ? h : {}),
                        Object.keys((h = f[g]) != null ? h : {})
                      )
                    )
                  );
                  yield e(g, h);
                }
              yield l(a, b);
              yield n(a, f);
              d("LSPlatformLsInitLog").addPoint("index_migration_end");
            });
            return function (a) {
              return f.apply(this, arguments);
            };
          })(),
          function (a) {
            return g(a, "findIndicesToUpdateOrRemove");
          }
        )
        ["catch"](function (a) {
          return g(a, "rebuildIndices");
        });
    }
    g.runMigrationForIndicesIfNeeded = a;
  },
  98
);
__d(
  "ReStorePersistence",
  ["FBLogger", "PromiseOrValue", "isPromise"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = { SENTINEL_DELETED: 1 };
    function i(a, b, c) {
      return (a.has(b) ? a : a.set(b, c())).get(b);
    }
    function j(b) {
      if (b == null) return b;
      var c = Object.getOwnPropertyNames(b),
        a = {},
        d,
        e;
      for (d = 0; d < c.length; d++)
        (e = b[c[d]]), (a[c[d]] = Array.isArray(e) ? [].concat(e) : e);
      return a;
    }
    function k(a, b) {
      b === void 0 && (b = h);
      return a === b;
    }
    function a(a) {
      var b;
      return {
        clearCache: a.clearCache,
        close: a.close,
        createTransaction: function (b) {
          var e = new Map(),
            f = !1;
          function g() {
            if (f)
              throw c("FBLogger")("messenger_web_product").mustfixThrow(
                "Transaction has closed"
              );
          }
          return {
            close: function () {
              f = !0;
            },
            flush: async function (b) {
              b === void 0 && (b = { upgrade: !1 }),
                await a.flush(e, b),
                (f = !0);
            },
            table: function (f) {
              function l(c, d) {
                g();
                var e = n.get(d);
                if (k(e)) return void 0;
                return e !== void 0 ? e : a.get(c, f, d, b);
              }
              function m(c, e) {
                return d("PromiseOrValue").map(l(c, e), function (c) {
                  if (c === void 0) {
                    var d = n.get(e);
                    a.logError == null
                      ? void 0
                      : a.logError(f, b, "dbCorruption", {
                          deletedInThisTxn: k(d) ? "true" : "false",
                          id: JSON.stringify(e) || "",
                        });
                  }
                  return c;
                });
              }
              var n = i(e, f, function () {
                return new Map();
              });
              function o(a, b) {
                return {
                  read: function* (b) {
                    b = l(a, b);
                    return c("isPromise")(b) ? yield b : b;
                  },
                  readExn: function* (b) {
                    b = m(a, b);
                    return c("isPromise")(b) ? yield b : b;
                  },
                  readHeader: function* () {
                    var d = l(a, b);
                    return c("isPromise")(d) ? yield d : d;
                  },
                  remove: function* (a) {
                    g(), n.set(a, h);
                  },
                  removeHeader: function* () {
                    g(), n.set(b, h);
                  },
                  write: function* (a, b) {
                    g(), n.set(a, b);
                  },
                  writeHeader: function* (a) {
                    g(), n.set(b, a);
                  },
                  writeNew: function* (b) {
                    var e = d("PromiseOrValue").map(
                      l(a, "nextId"),
                      function (a) {
                        a === void 0 && (a = 0);
                        n.set("nextId", a + 1);
                        n.set(a, b);
                        return a;
                      }
                    );
                    return c("isPromise")(e) ? yield e : e;
                  },
                };
              }
              return {
                getBPlusTreeStore: o,
                incrementSeed: function (a, b) {
                  return d("PromiseOrValue").map(l(a, "seed"), function (a) {
                    a === void 0 && (a = 0);
                    n.set("seed", Math.max(a, b || 0) + 1);
                    return b === void 0 ? a : b;
                  });
                },
                readData: function* (a, b) {
                  a = l(a, b);
                  return c("isPromise")(a) ? yield a : a;
                },
                readDataExn: function* (a, b) {
                  a = m(a, b);
                  return c("isPromise")(a) ? yield a : a;
                },
                readSeed: function (a) {
                  return d("PromiseOrValue").map(l(a, "seed"), function (a) {
                    a === void 0 && (a = 0);
                    return a;
                  });
                },
                remove: function (a, b) {
                  g(), n.set(b, h);
                },
                writeData: function (a, b, c) {
                  g(), n.set(b, j(c));
                },
                writeNewData: function (a, b) {
                  return d("PromiseOrValue").map(l(a, "nextId"), function (a) {
                    a === void 0 && (a = 0);
                    n.set("nextId", a + 1);
                    n.set(a, j(b));
                    return a;
                  });
                },
              };
            },
            types: a.types,
          };
        },
        logError: a.logError,
        queueCommitWork:
          (b = a.queueCommitWork) != null
            ? b
            : function (a) {
                return a();
              },
        runExclusively: a.runExclusively,
      };
    }
    g.sentinelDeleted = h;
    g.isDeletedValue = k;
    g.createDbStore = a;
  },
  98
);
__d(
  "ReStoreTransactionLock",
  ["isPromise"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a) {
        var b = this;
        this.waitFor = null;
        a != null &&
          (this.waitFor = a.then(function (a) {
            return (b.waitFor = null);
          }));
      }
      var b = a.prototype;
      b.chainPromiseOrValue = function (a) {
        if (this.waitFor != null)
          return this.waitFor.then(function () {
            return a("\ud83d\udd12");
          });
        else return a("\ud83d\udd12");
      };
      return a;
    })();
    b = (function () {
      function a() {
        this.lock = null;
      }
      var b = a.prototype;
      b.chainPromiseOrValue = function (a) {
        var b = this,
          d = this.lock;
        if (d == null) {
          var e = a("\ud83d\udd12");
          if (c("isPromise")(e)) d = e;
          else return e;
        } else
          d = d.then(function () {
            return a("\ud83d\udd12");
          });
        var f = d
          .then(function (a) {
            b.lock === f && (b.lock = null);
            return a;
          })
          .finally(function (a) {
            b.lock === f && (b.lock = null);
            return a;
          });
        this.lock = f;
        return f;
      };
      return a;
    })();
    g.WaitForPromiseLock = a;
    g.ReStoreTransactionLock = b;
  },
  98
);
__d(
  "IntervalList",
  ["FBLogger", "LSDbKeyComparer", "ReQLBounds"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      if (a == null)
        throw c("FBLogger")("messenger_web_product").mustfixThrow(
          "must not be null"
        );
      return a;
    }
    function a(a, b) {
      var c = new Map(),
        e = new Map(),
        f = new Map();
      function g(b, c) {
        return c == null
          ? !0
          : (c.gt !== void 0
              ? a(b, c.gt) > 0
              : c.gte !== void 0
              ? a(b, c.gte) >= 0
              : !0) &&
              (c.lt !== void 0
                ? a(b, c.lt) < 0
                : c.lte !== void 0
                ? a(b, c.lte) <= 0
                : !0);
      }
      function* i(a) {
        var f = a,
          h = { hd: d("LSDbKeyComparer").MAX_KEY, tl: 0 },
          i = 0;
        while (f !== 0 && e.size) {
          i++;
          var j = f,
            k = f.tl;
          f.tl = i < b ? h : 0;
          try {
            var l = e.get(JSON.stringify(a));
            if (l != null) for (l of l) yield l;
          } finally {
            j.tl = k;
          }
          f = j.tl;
        }
        for (l of c.entries()) {
          k = l[0];
          j = l[1];
          c.has(k) && g(a, j) && (yield k);
        }
      }
      function j(a) {
        var b = f.get(a);
        if (b != null) {
          f["delete"](a);
          var d = h(e.get(b));
          d["delete"](a);
          d.size === 0 && e["delete"](b);
        } else c["delete"](a);
      }
      function k(a, g) {
        var h;
        if (
          a &&
          a.gte != null &&
          a.lte != null &&
          (h = JSON.stringify(d("ReQLBounds").nextKey(a.gte, b))) ===
            JSON.stringify(a.lte)
        ) {
          var i = e.get(h);
          i == null && ((i = new Set()), e.set(h, i));
          i.add(g);
          f.set(g, h);
        } else c.set(g, a);
      }
      return { delete: j, findIntersecting: i, set: k };
    }
    g["default"] = a;
  },
  98
);
__d(
  "killswitchMessengerWebPersistedDB",
  ["killswitch"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      return c("killswitch")("MESSENGER_WEB_PERSISTED_DB");
    }
    g.check = a;
  },
  98
);
__d(
  "createReStoreSubscriptionManager",
  [
    "ExecutionEnvironment",
    "FBLogger",
    "IntervalList",
    "LSDatabaseProviderType",
    "LSDbKeyComparer",
    "LSStorage",
    "MWTabNotifierWhenPDBEnabled",
    "Promise",
    "asyncToGeneratorRuntime",
    "gkx",
    "killswitchMessengerWebPersistedDB",
    "nullthrows",
    "promiseDone",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    e = d("react").startTransition;
    var h = c("gkx")("9157")
      ? e
      : function (a) {
          return a();
        };
    function a(a, e, f) {
      var g = d("LSDatabaseProviderType").hasPersistentType(f),
        i = new Map(),
        j = new Map();
      function k(a, b) {
        return d("LSDbKeyComparer").compareValue(a, b) === 0;
      }
      function l(a, b, c, d) {
        a = (a = v.get(a)) != null ? a : [];
        var e = [];
        for (var f = 0; f < b.length; f++) {
          var g = b[f];
          for (var h = 0; h < 32 && g > 0; h++) {
            if (g & 1) {
              var i = a[(f << 5) + h];
              if (!k(c[i], d[i])) {
                e[f] = ((i = e[f]) != null ? i : 0) | (1 << h % 32);
              }
            }
            g = g >>> 1;
          }
        }
        return e;
      }
      function m(a, b) {
        for (var c = 0; c < Math.max(a.length, b.length); c++)
          if ((a[c] & b[c]) !== 0) return !0;
        return !1;
      }
      function n(a, c, d, e, f) {
        var g = Array.from(c(e));
        if (f.operation === "put" && f.prevValue != null) {
          c = (function () {
            var c = f.prevValue,
              h = [];
            for (var i of g) {
              i[0];
              var j = i[1];
              j != null &&
                j.forEach(function (a, b) {
                  h[b] = ((b = h[b]) != null ? b : 0) | a;
                });
            }
            var k = l(a, h, c, f.value);
            return {
              v: b("Promise").all(
                g.map(function (a) {
                  var b = a[0];
                  a = a[1];
                  if (a == null || m(k, a)) return b(e, f, d);
                })
              ),
            };
          })();
          if (typeof c === "object") return c.v;
        }
        return b("Promise").all(
          g.map(function (a) {
            var b = a[0];
            a[1];
            return b(e, f, d);
          })
        );
      }
      function o(b) {
        return c("nullthrows")(
          (i.has(b)
            ? i
            : i.set(b, [
                c("IntervalList")(
                  d("LSDbKeyComparer").compareKey,
                  a.tableNames[b].primaryKeyIds.length
                ),
                new Map(),
              ])
          ).get(b)
        );
      }
      function p(b, e) {
        var f = o(b);
        f[0];
        f = f[1];
        return c("nullthrows")(
          (f.has(e)
            ? f
            : f.set(
                e,
                c("IntervalList")(
                  d("LSDbKeyComparer").compareKey,
                  a.tableNames[b].indexes[e].length
                )
              )
          ).get(e)
        );
      }
      function q(e, f, g, h, i, j) {
        var k = function (a, b) {
            return n(f, e.findIntersecting, j, a, b);
          },
          l = g == null ? void 0 : d("LSStorage").searchKey(a, f, g, i),
          m = h == null ? void 0 : d("LSStorage").searchKey(a, f, h, i);
        if (m == null && l != null)
          return k(l, { operation: "delete", prevValue: g });
        if (l == null && m != null)
          return k(m, { operation: "add", value: c("nullthrows")(h) });
        return l != null && m != null
          ? d("LSDbKeyComparer").compareKey(l, m) === 0
            ? k(l, {
                operation: "put",
                prevValue: g,
                value: c("nullthrows")(h),
              })
            : k(l, { operation: "delete", prevValue: g }).then(function () {
                return k(m, { operation: "add", value: c("nullthrows")(h) });
              })
          : b("Promise").resolve();
      }
      function r(a, c, d, e) {
        var f = o(a),
          g = f[0],
          h = f[1];
        return q(g, a, c, d, null, e).then(function () {
          return b("Promise").all(
            Array.from(h.entries())
              .map(function (b) {
                var f = b[0];
                b = b[1];
                return q(b, a, c, d, f, e);
              })
              .filter(function (a) {
                return a != null;
              })
          );
        });
      }
      function s() {
        h(function () {
          return j.forEach(function (a) {
            return a();
          });
        });
      }
      function t(a, b) {
        function f() {
          var d = new Map();
          try {
            for (var f of a) {
              var g = f[0],
                h = f[1];
              g = JSON.parse(g);
              var i = g[0];
              g[1];
              if (e(b, i)) {
                g = d.get(i) || [];
                d.set(i, [].concat(g, [h]));
              }
            }
          } catch (a) {
            c("FBLogger")("messenger_web_product")
              .catching(a)
              .mustfix("Couldnot format changes to broadcast");
          }
          return Array.from(d);
        }
        if (
          c("ExecutionEnvironment").isInBrowser &&
          !d("killswitchMessengerWebPersistedDB").check() &&
          c("MWTabNotifierWhenPDBEnabled") != null &&
          g
        ) {
          f = f();
          if (f.length === 0) return;
          c("MWTabNotifierWhenPDBEnabled").postMessage(b, f);
        }
      }
      c("ExecutionEnvironment").isInBrowser &&
        !d("killswitchMessengerWebPersistedDB").check() &&
        c("MWTabNotifierWhenPDBEnabled") != null &&
        g &&
        c("MWTabNotifierWhenPDBEnabled").onEventReceive(
          "notifyTableV2",
          function (a) {
            c("promiseDone")(
              b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var b = new WeakMap();
                for (var c of a) {
                  var d = c[0],
                    e = c[1];
                  for (e of e) {
                    var f = e[0],
                      g = e[1];
                    yield r(d, f, g, b);
                  }
                }
                s();
              })()
            );
          }
        );
      var u = new Map(),
        v = new Map();
      function w(a, b) {
        if (b == null) return null;
        var c = u.get(a);
        c == null && ((c = new Map()), u.set(a, c));
        var d = [];
        for (b of b) {
          var e = c.get(b);
          if (e == null) {
            e = c.size;
            c.set(b, e);
            var f = v.get(a);
            f == null && ((f = []), v.set(a, f));
            f.push(b);
          }
          f = e >> 5;
          e = e & 31;
          d[f] = ((f = d[f]) != null ? f : 0) | (1 << e);
        }
        return d;
      }
      return {
        dispose: function () {
          i.clear(), j.clear();
        },
        notifyCommit: s,
        notifyTableAndIndexSubscribers: r,
        notifyTableV2: t,
        subscribeIndex: function (a, c, d, e, f) {
          var g = p(a, c),
            h = !1;
          c = function (a, c, e) {
            return h ? b("Promise").resolve() : d(a, c, e);
          };
          var i = [c, w(a, f)];
          g.set(e, i);
          return function () {
            (h = !0), g["delete"](i);
          };
        },
        subscribeTable: function (a, c, d, e) {
          var f = o(a),
            g = f[0],
            h = !1;
          f = function (a, d, e) {
            return h ? b("Promise").resolve() : c(a, d, e);
          };
          var i = [f, w(a, e)];
          g.set(d, i);
          return function () {
            (h = !0), g["delete"](i);
          };
        },
        subscribeToCommit: function (a) {
          j.set(a, a);
          return function () {
            j["delete"](a);
          };
        },
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "ReStore",
  [
    "BPlusTreeBase",
    "ExecutionEnvironment",
    "FBLogger",
    "I64",
    "LSDatabaseProviderType",
    "LSDbKeyComparer",
    "LSPlatformLsInitLog",
    "LSStorage",
    "LSTableDefaults",
    "MWTabNotifierWhenPDBEnabled",
    "MetaConfig",
    "PromiseOrValue",
    "ReQLBounds",
    "ReStoreDefaultValueMigration",
    "ReStoreDefaultValuesMetadata",
    "ReStoreHooks",
    "ReStoreIndicesMigration",
    "ReStorePersistence",
    "ReStoreTransactionLock",
    "ReStoreUtils",
    "clearTimeout",
    "cr:1088",
    "cr:1242",
    "createReStoreSubscriptionManager",
    "err",
    "hashString",
    "isPromise",
    "killswitchMessengerWebPersistedDB",
    "promiseDone",
    "setImmediate",
    "setTimeout",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    e = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.call(this, "Transaction has finished") || this;
      }
      return b;
    })(babelHelpers.wrapNativeSuper(Error));
    function h(a) {
      a = d("I64").cast(a);
      if (a === void 0)
        throw c("unrecoverableViolation")(
          "Expected int64",
          "messenger_web_product"
        );
      return d("I64").to_float(a);
    }
    function i(a, b) {
      function d(b) {
        if (b.done) return b.value;
        if (!c("isPromise")(b.value))
          throw c("unrecoverableViolation")(
            "expected promise",
            "messenger_web_product"
          );
        return b.value.then(function (b) {
          return d(a.next(b));
        });
      }
      return d(a.next(b));
    }
    function j(a, b) {
      return {
        next: function (c) {
          return b.chainPromiseOrValue(function (b) {
            return a.next(b, c);
          });
        },
      };
    }
    function k(a, b, e) {
      return c("BPlusTreeBase")(
        d("LSDbKeyComparer").compareKey,
        16,
        b.getBPlusTreeStore(a, e == null ? "root" : "index(" + e + ")")
      );
    }
    function l(a, b, c) {
      return (a.has(b) ? a : a.set(b, c())).get(b);
    }
    function a(a, e, f) {
      f === void 0 && (f = []);
      var g = d("ReStorePersistence").createDbStore(a),
        n = c("createReStoreSubscriptionManager")(e, a.shouldSync, a.types),
        o = d("ReStoreHooks").createHookManager(f),
        p = b("LSStorage").searchKey.bind(null, e),
        q = {
          background: { first: null, last: null },
          sync_script: { first: null, last: null },
          ui: { first: null, last: null },
        },
        r = c("hashString")(JSON.stringify(e)),
        s = c("hashString")(JSON.stringify(c("LSTableDefaults")));
      d("LSPlatformLsInitLog").addAnnotations({
        int: { defaultValuesVersion: s, schemaVersion: r },
      });
      d("LSPlatformLsInitLog").addPoint("migration_start");
      var t = new (d("ReStoreTransactionLock").WaitForPromiseLock)(
          g
            .runExclusively(async function () {
              d("LSPlatformLsInitLog").addPoint("migration_execute_start");
              var a = new Map(),
                b = g.createTransaction("readwrite"),
                f = K(b, a),
                h = "schema_version",
                i = "default_value_version";
              if (c("MetaConfig")._("59")) {
                var j, k;
                j =
                  (j = await Promise.resolve(
                    b
                      .table(
                        d("ReStoreDefaultValuesMetadata").schemaVersionTableName
                      )
                      .readData(new WeakMap(), h)
                      .next().value
                  )) == null
                    ? void 0
                    : j.schemaVersion;
                k =
                  (k = await Promise.resolve(
                    b
                      .table(
                        d("ReStoreDefaultValuesMetadata").schemaVersionTableName
                      )
                      .readData(new WeakMap(), i)
                      .next().value
                  )) == null
                    ? void 0
                    : k.defaultValuesVersion;
                j != null &&
                  d("LSPlatformLsInitLog").addAnnotations({
                    int: {
                      storeDefaultValuesVersion: k,
                      storeSchemaVersion: j,
                    },
                  });
                if (j === r && k === s) {
                  b.close();
                  d("LSPlatformLsInitLog").addPoint("migration_skipped");
                  return;
                }
              }
              try {
                await d(
                  "ReStoreDefaultValueMigration"
                ).runMigrationForTableDefaultValuesIfNeeded(f, e);
                await d(
                  "ReStoreIndicesMigration"
                ).runMigrationForIndicesIfNeeded(f, e, function (c, e) {
                  return new (d(
                    "ReStoreTransactionLock"
                  ).ReStoreTransactionLock)().chainPromiseOrValue(function (d) {
                    return J(a, b, new WeakMap(), c, e, d);
                  });
                });
                d("LSPlatformLsInitLog").addPoint("migration_execute_end");
                j = !0;
                c("MetaConfig")._("59") &&
                  (a.size === 0 && (j = !1),
                  b
                    .table(
                      d("ReStoreDefaultValuesMetadata").schemaVersionTableName
                    )
                    .writeData(new WeakMap(), h, { schemaVersion: r }),
                  b
                    .table(
                      d("ReStoreDefaultValuesMetadata").schemaVersionTableName
                    )
                    .writeData(new WeakMap(), i, { defaultValuesVersion: s }));
                await b.flush({ upgrade: j });
              } catch (a) {
                b.close();
                throw a;
              }
              d("LSPlatformLsInitLog").addPoint("migration_end");
            })
            .catch(function (a) {
              d("LSPlatformLsInitLog").addAnnotations({
                string: { migration_error: a.message },
              });
              d("LSPlatformLsInitLog").fail("migration_error");
              throw a;
            })
        ),
        u = new Map();
      async function v(a, b) {
        var c = new WeakMap();
        await g.runExclusively(async function () {
          var d = new Map(),
            e = g.createTransaction("readwrite");
          d = K(e, d);
          for (var f of b) {
            var h = f[0],
              i = f[1];
            if (i == null) {
              var j = p(a, h);
              await d.table(a).delete(j);
            } else await d.table(a).put(i);
            j = o.beforeNotify({ newValue: i, prevValue: h, tableName: a });
            i = j.newValue;
            h = j.prevValue;
            await n.notifyTableAndIndexSubscribers(a, h, i, c);
          }
          try {
            await e.flush({ upgrade: !0 });
          } catch (a) {
            e.close();
            throw a;
          }
        });
      }
      function w(a, b, c, d, e) {
        b = JSON.stringify([b, c]);
        c = a.get(b);
        a.set(b, [c == null ? d : c[0], e]);
      }
      async function x(a, b, c, d, e, f) {
        f = a.table(c);
        a = k(b, f, d);
        d = await i(a.getWithDefault(e, void 0));
        if (d === void 0) return void 0;
        a = await i(f.readDataExn(b, d));
        return o.afterGet({ tableName: c, value: a });
      }
      async function y(a, b, c, d, e, f) {
        a = await x(a, b, c, d, e, f);
        return a === void 0 ? void 0 : p(c, a);
      }
      function z(a, b, c, f, g, h) {
        function j() {
          var m = a.table(c),
            n = k(b, m, f),
            l = n.entries(
              babelHelpers.extends(
                {},
                d("ReQLBounds").extendBounds(
                  h,
                  (f === void 0
                    ? e.tableNames[c].primaryKeyIds
                    : e.tableNames[c].indexes[f]
                  ).length
                ),
                { dir: g }
              )
            );
          return (
            (n = {
              next: function (a, e) {
                return d("PromiseOrValue").map(i(l.next(e)), function (a) {
                  return a.done
                    ? { done: !0 }
                    : d("PromiseOrValue").map(
                        i(m.readDataExn(b, a.value[1])),
                        function (b) {
                          return {
                            done: !1,
                            value: [
                              a.value[0],
                              o.afterEntriesNext({ tableName: c, value: b }),
                            ],
                          };
                        }
                      );
                });
              },
            }),
            (n[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] =
              j),
            n
          );
        }
        return j();
      }
      async function A(a, b, c, f, g, h, i) {
        function j(a, b) {
          var c = [],
            e = a;
          while (e !== 0) c.push(e.hd), (e = e.tl);
          return c.length >= b
            ? a
            : c.reduceRight(
                function (a, b) {
                  return { hd: b, tl: a };
                },
                { hd: d("LSDbKeyComparer").MAX_KEY, tl: 0 }
              );
        }
        if (h != null && d("LSDbKeyComparer").compareKey(g, h) === 0) return;
        f = e.tableNames[f];
        var k = f.cascadeUpdates,
          l = f.primaryKeyIds;
        f = async function (d) {
          var f = d.indexName;
          d = d.tableName;
          var k = e.tableNames[d],
            m = k.indexes;
          k = k.primaryKeyIds;
          var n = f == null ? k : m[f];
          k = { gte: g, lte: j(g, n.length) };
          m = z(b, c, d, f, "asc", k);
          f = [];
          k = await m.next(i);
          while (!k.done) f.push(k.value), (k = await m.next(i));
          for (m of f) {
            m[0];
            k = m[1];
            f = p(d, k);
            if (h === void 0)
              await E(a, b, c, d, f, i), await A(a, b, c, d, f, void 0, i);
            else {
              k = l.reduce(
                function (a, b, c) {
                  b = a[0];
                  a = a[1];
                  if (!a) return [b, a];
                  b[n[c]] = a.hd;
                  return [b, a.tl];
                },
                [babelHelpers.extends({}, k), h]
              )[0];
              await D(a, b, c, d, f, k, i);
              await A(a, b, c, d, f, p(d, k), i);
            }
          }
        };
        for (k of k) await f(k);
      }
      async function B(a, b, f, g) {
        g = e.tableNames[f].autoIncrement;
        if (!g)
          throw c("unrecoverableViolation")(
            "only supported for auto-incrementing tables",
            "messenger_web_product"
          );
        g = await a.table(f).readSeed(b);
        if (g === void 0)
          throw c("unrecoverableViolation")(
            "unexpected undefined autoIncrementSeed",
            "messenger_web_product"
          );
        return d("I64").of_float(g);
      }
      async function C(a, b, c, f, g, j) {
        var l = b.table(f),
          m = k(c, l),
          n = e.tableNames[f];
        if (n.autoIncrement) {
          var o = g[n.primaryKeyIds[0]];
          o = d("I64").of_float(
            await l.incrementSeed(c, o === void 0 ? o : h(o))
          );
          g[n.primaryKeyIds[0]] = o;
        }
        o = p(f, g);
        var q = {},
          r = await i(m.getWithDefault(o, void 0)),
          s,
          t = g;
        r !== void 0
          ? ((s = await i(l.readDataExn(c, r))),
            (q = F(Object.keys(n.indexes), f, s)),
            l.writeData(c, r, t))
          : ((t = d("ReStoreUtils").appendDefaultValues(g, n.name)),
            (r = await l.writeNewData(c, t)),
            await i(m.set(o, r)));
        g = F(Object.keys(n.indexes), f, t);
        for (m of Object.keys(g))
          q[m] !== void 0 &&
            d("LSDbKeyComparer").compareKey(q[m], g[m]) === 0 &&
            (delete g[m], delete q[m]);
        await G(a, b, c, f, g, j);
        await H(b, c, f, r, g);
        for (n of Object.keys(q)) {
          m = k(c, l, n);
          await i(m.delete(q[n]));
        }
        w(a, f, o, s, t);
      }
      async function D(a, b, c, e, f, g, h) {
        var i = p(e, g);
        d("LSStorage").areKeysEqual(f, i) || (await E(a, b, c, e, f, h));
        await C(a, b, c, e, g, h);
      }
      async function E(a, b, c, d, f, g) {
        g = b.table(d);
        b = k(c, g);
        var h = e.tableNames[d],
          j = await i(b.getWithDefault(f, void 0)),
          l;
        if (j !== void 0) {
          l = await i(g.readDataExn(c, j));
          if (Object.keys(h.indexes).length)
            for (h of Object.keys(h.indexes)) {
              var m = p(d, l, h);
              if (m != null) {
                var n = k(c, g, h);
                await i(n.delete(m));
              }
            }
          await i(b.delete(f));
          g.remove(c, j);
          w(a, d, f, l, void 0);
        }
      }
      function F(a, b, c) {
        return a.reduce(function (a, d) {
          var e = p(b, c, d);
          a[d] = e;
          return a;
        }, {});
      }
      async function G(a, b, c, d, e, f) {
        var g = b.table(d),
          h = new Set();
        for (var j of Object.keys(e)) {
          var l = k(c, g, j),
            m = e[j];
          l = await i(l.getWithDefault(m));
          if (l != null && !h.has(l)) {
            m = p(d, await i(g.readDataExn(c, l)));
            await E(a, b, c, d, m, f);
            await A(a, b, c, d, m, void 0, f);
            h.add(l);
          }
        }
      }
      async function H(a, b, c, d, e) {
        a = a.table(c);
        for (c of Object.keys(e)) {
          var f = k(b, a, c),
            g = e[c];
          await i(f.set(g, d));
        }
      }
      async function I(a, b, c, f, g, j) {
        var l = b.table(f),
          m = k(c, l),
          n = e.tableNames[f];
        if (n.autoIncrement) {
          var o = g[n.primaryKeyIds[0]];
          o = d("I64").of_float(
            await l.incrementSeed(c, o === void 0 ? o : h(o))
          );
          g[n.primaryKeyIds[0]] = o;
        }
        o = d("ReStoreUtils").appendDefaultValues(g, n.name);
        g = p(f, o);
        if (g == null)
          throw new Error(
            "Evaluating the object store's key path did not yield a value"
          );
        if (!(await i(m.has(g)))) {
          n = F(Object.keys(n.indexes), f, o);
          await G(a, b, c, f, n, j);
          j = await l.writeNewData(c, o);
          await i(m.set(g, j));
          await H(b, c, f, j, n);
          w(a, f, g, void 0, o);
        }
      }
      async function J(a, b, c, d, f, g) {
        var h = b.table(d),
          j = f.map(function (a) {
            return k(c, h, a);
          });
        for (j of j) await i(j.clear());
        j = f.filter(function (a) {
          var b;
          return (
            ((b = e.tableNames[d]) == null ? void 0 : b.indexes[a]) != null
          );
        });
        if (j.length === 0) return;
        f = k(c, h);
        var l = z(b, c, d, void 0, "asc", void 0),
          m = [],
          n = await l.next(g);
        while (!n.done) m.push(n.value), (n = await l.next(g));
        for (l of m) {
          n = l[0];
          m = l[1];
          m = F(j, d, m);
          await G(a, b, c, d, m, g);
          n = await i(f.get(n));
          await H(b, c, d, n, m);
        }
      }
      function K(a, c, f) {
        var g = new (d("ReStoreTransactionLock").ReStoreTransactionLock)(),
          h = new WeakMap(),
          i = f == null ? void 0 : f.instanceKey,
          k = {
            table: function (f) {
              return {
                add: async function (d) {
                  var e = await o.beforeAdd({
                    tableName: f,
                    transaction: k,
                    value: d,
                  });
                  return g.chainPromiseOrValue(async function (d) {
                    b("cr:1242") == null
                      ? void 0
                      : b("cr:1242").recordLogicalWrite(i),
                      await I(c, a, h, f, e, d);
                  });
                },
                delete: function (d) {
                  return g.chainPromiseOrValue(async function (e) {
                    b("cr:1242") == null
                      ? void 0
                      : b("cr:1242").recordLogicalWrite(i),
                      await E(c, a, h, f, d, e),
                      await A(c, a, h, f, d, void 0, e);
                  });
                },
                deleteThenInsert: async function (e) {
                  var j = await o.beforeDeleteThenInsert({
                    tableName: f,
                    transaction: k,
                    value: d("ReStoreUtils").appendDefaultValues(e, f),
                  });
                  return g.chainPromiseOrValue(async function (d) {
                    b("cr:1242") == null
                      ? void 0
                      : b("cr:1242").recordLogicalWrite(i),
                      await C(c, a, h, f, j, d),
                      await A(c, a, h, f, p(f, j), void 0, d);
                  });
                },
                entries: function (b, c, d) {
                  c === void 0 && (c = "asc");
                  return j(z(a, h, f, void 0, c, d), g);
                },
                get: function (b) {
                  return g.chainPromiseOrValue(function (c) {
                    return x(a, h, f, void 0, b, c);
                  });
                },
                index: function (b) {
                  return {
                    entries: function (c, d, e) {
                      d === void 0 && (d = "asc");
                      return j(z(a, h, f, b, d, e), g);
                    },
                    get: function (c) {
                      return g.chainPromiseOrValue(function (d) {
                        return x(a, h, f, b, c, d);
                      });
                    },
                    getKey: function (c) {
                      return g.chainPromiseOrValue(function (d) {
                        return y(a, h, f, b, c, d);
                      });
                    },
                    keyLength: e.tableNames[f].indexes[b].length,
                  };
                },
                keyLength: e.tableNames[f].primaryKeyIds.length,
                peekNextAutoIncrementId: function () {
                  return g.chainPromiseOrValue(function (b) {
                    return B(a, h, f, b);
                  });
                },
                put: async function (d) {
                  var e = await o.beforePut({
                    tableName: f,
                    transaction: k,
                    value: d,
                  });
                  return g.chainPromiseOrValue(async function (d) {
                    b("cr:1242") == null
                      ? void 0
                      : b("cr:1242").recordLogicalWrite(i),
                      await C(c, a, h, f, e, d);
                  });
                },
                upsert: async function (d, e) {
                  var j = await o.beforeUpsert({
                    tableName: f,
                    transaction: k,
                    value: e,
                  });
                  return g.chainPromiseOrValue(async function (g) {
                    b("cr:1242") == null
                      ? void 0
                      : b("cr:1242").recordLogicalWrite(i),
                      await D(c, a, h, f, d, j, g),
                      await A(c, a, h, f, d, p(f, e), g);
                  });
                },
              };
            },
          };
        return k;
      }
      function L(a, b) {
        return new Promise(function (c, d) {
          q[b].last == null
            ? (q[b].first = q[b].last =
                {
                  value: function () {
                    return a().then(c, d);
                  },
                })
            : (q[b].last = q[b].last.next =
                {
                  value: function () {
                    return a().then(c, d);
                  },
                });
        });
      }
      function M() {
        return g.runExclusively(async function () {
          var a =
            q.ui.first != null
              ? q.ui
              : q.sync_script.first != null
              ? q.sync_script
              : q.background;
          if (a.first == null) {
            c("FBLogger")("messenger_web_product").mustfix(
              "Expected work is missing"
            );
            return;
          }
          var b = a.first;
          a.first === a.last && (a.last = null);
          a.first = a.first.next;
          await b.value();
        });
      }
      async function N(d, e, f) {
        f === void 0 && (f = "background");
        var h,
          i,
          j,
          k,
          l,
          p,
          q =
            b("cr:1242") == null
              ? void 0
              : b("cr:1242").startTracking(a.types, f);
        (c("MetaConfig")._("26") || c("MetaConfig")._("27") || b("cr:1088")) &&
          (h = c("err")("Transaction timeout"));
        b("cr:1088") && (i = Date.now());
        async function e() {
          b("cr:1242") == null ? void 0 : b("cr:1242").mark(q, "execute_start");
          b("cr:1088") && (j = Date.now());
          var a = { ref: void 0 },
            e = new Map(),
            f = g.createTransaction("readwrite"),
            r;
          try {
            var s = K(f, e, { instanceKey: q });
            r = await Promise.race([d(s), m(h, a)]);
            a.ref != null && c("clearTimeout")(a.ref);
            b("cr:1088") && (k = Date.now());
            b("cr:1242") == null ? void 0 : b("cr:1242").mark(q, "execute_end");
            b("cr:1242") == null ? void 0 : b("cr:1242").mark(q, "flush_start");
            await f.flush({ instanceKey: q });
            b("cr:1242") == null ? void 0 : b("cr:1242").mark(q, "flush_end");
          } catch (d) {
            a.ref != null && c("clearTimeout")(a.ref);
            f.close();
            b("cr:1242") == null ? void 0 : b("cr:1242").fail(q);
            throw d;
          }
          b("cr:1088") && (p = Date.now());
          b("cr:1242") == null
            ? void 0
            : b("cr:1242").mark(q, "broadcast_start");
          s = new WeakMap();
          for (a of e) {
            f = a[0];
            var t = a[1],
              u = t[0];
            t = t[1];
            f = JSON.parse(f);
            var v = f[0];
            f[1];
            f = o.beforeNotify({ newValue: t, prevValue: u, tableName: v });
            t = f.newValue;
            u = f.prevValue;
            await n.notifyTableAndIndexSubscribers(v, u, t, s);
          }
          await g.queueCommitWork(function () {
            n.notifyTableV2(e, "notifyTableV2");
            n.notifyTableV2(e, "notifyInMemoryTable");
            return Promise.resolve();
          });
          n.notifyCommit();
          if (b("cr:1088")) {
            l = Date.now();
            f = { broadcast: l, complete: k, flush: p, queue: i, start: j };
            b("cr:1088").recordRestoreTransaction(h, f, { changedKeys: e });
          }
          b("cr:1242") == null ? void 0 : b("cr:1242").mark(q, "broadcast_end");
          b("cr:1242") == null
            ? void 0
            : b("cr:1242").mark(q, "post_commit_start");
          c("setImmediate")(function () {
            b("cr:1242") == null
              ? void 0
              : b("cr:1242").mark(q, "post_commit_end"),
              b("cr:1242") == null ? void 0 : b("cr:1242").end(q);
          });
          return r;
        }
        var r =
          f === "background" && c("MetaConfig")._("39")
            ? new Promise(function (a) {
                return c("setTimeout")(a, 0);
              })
            : Promise.resolve();
        await r;
        r = L(e, f);
        c("promiseDone")(M());
        return r;
      }
      f = d("LSDatabaseProviderType").hasPersistentType(a.types);
      c("ExecutionEnvironment").isInBrowser &&
        !d("killswitchMessengerWebPersistedDB").check() &&
        c("MWTabNotifierWhenPDBEnabled") != null &&
        f &&
        c("MWTabNotifierWhenPDBEnabled").onEventReceive(
          "notifyInMemoryTable",
          function (b) {
            c("promiseDone")(
              (async function () {
                for (var c of b) {
                  var d = c[0],
                    e = c[1];
                  a.shouldApplySync("notifyInMemoryTable", d) &&
                    (await v(d, e));
                }
                n.notifyCommit();
              })()
            );
          }
        );
      return {
        clearCacheIfSupported: function () {
          var a = g;
          a instanceof Object &&
            a.clearCache !== void 0 &&
            a.clearCache instanceof Function &&
            a.clearCache();
        },
        closeDb: function () {
          var a = g;
          a instanceof Object && a.close !== void 0 && a.close();
        },
        getTableData: function () {
          return e;
        },
        persistenceTypes: a.types,
        runInTransaction: N,
        subscribeToCommit: function (a) {
          return n.subscribeToCommit(a);
        },
        subscriptionManager: n,
        table: function (a) {
          return l(u, a, function () {
            var b = new Map();
            return {
              entries: function (b, c, d) {
                c === void 0 && (c = "asc");
                return j(
                  z(g.createTransaction("readonly"), b, a, void 0, c, d),
                  t
                );
              },
              get: function (b, c) {
                c === void 0 && (c = new WeakMap());
                return t.chainPromiseOrValue(function (d) {
                  return x(g.createTransaction("readonly"), c, a, void 0, b, d);
                });
              },
              index: function (c) {
                return l(b, c, function () {
                  return {
                    entries: function (b, d, e) {
                      d === void 0 && (d = "asc");
                      return j(
                        z(g.createTransaction("readonly"), b, a, c, d, e),
                        t
                      );
                    },
                    get: function (b, d) {
                      d === void 0 && (d = new WeakMap());
                      return t.chainPromiseOrValue(function (e) {
                        return x(
                          g.createTransaction("readonly"),
                          d,
                          a,
                          c,
                          b,
                          e
                        );
                      });
                    },
                    getKey: function (b) {
                      return t.chainPromiseOrValue(function (d) {
                        return y(
                          g.createTransaction("readonly"),
                          new WeakMap(),
                          a,
                          c,
                          b,
                          d
                        );
                      });
                    },
                    keyLength: e.tableNames[a].indexes[c].length,
                    subscribe: function (b, f, g) {
                      return n.subscribeIndex(
                        a,
                        c,
                        b,
                        d("ReQLBounds").extendBounds(
                          f,
                          e.tableNames[a].indexes[c]
                        ),
                        g
                      );
                    },
                  };
                });
              },
              keyLength: e.tableNames[a].primaryKeyIds.length,
              peekNextAutoIncrementId: function () {
                return t.chainPromiseOrValue(function (b) {
                  return B(
                    g.createTransaction("readonly"),
                    new WeakMap(),
                    a,
                    b
                  );
                });
              },
              subscribe: function (b, c, f) {
                return n.subscribeTable(
                  a,
                  b,
                  d("ReQLBounds").extendBounds(
                    c,
                    e.tableNames[a].primaryKeyIds.length
                  ),
                  f
                );
              },
            };
          });
        },
      };
    }
    function m(a, b) {
      return c("ExecutionEnvironment").canUseDOM && c("MetaConfig")._("27")
        ? new Promise(function (d, e) {
            var f = 5e3;
            b.ref = c("setTimeout")(function () {
              c("FBLogger")("messenger_web_product")
                .catching(a)
                .blameToPreviousFrame()
                .mustfix(
                  "ReStore transaction took longer than %s ms to execute",
                  f.toString()
                ),
                e(a);
            }, f);
          })
        : new Promise(function () {});
    }
    a.TransactionClosedError = e;
    g.default = a;
  },
  98
);
__d(
  "createReStoreEphemeralPersistence",
  ["FBLogger", "Promise", "ReStorePersistence", "asyncToGeneratorRuntime"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a, b, c) {
      return (a.has(b) ? a : a.set(b, c())).get(b);
    }
    function a() {
      var a = b("Promise").resolve(),
        e = new Map();
      function f(a) {
        return h(e, a, function () {
          return new Map();
        });
      }
      return {
        flush: (function () {
          var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
            a.forEach(function (a, b) {
              var c = f(b);
              a.forEach(function (a, b) {
                d("ReStorePersistence").isDeletedValue(a)
                  ? c["delete"](b)
                  : c.set(b, a);
              });
            });
          });
          function c(b) {
            return a.apply(this, arguments);
          }
          return c;
        })(),
        get: function (a, b, c) {
          a = f(b);
          return a.get(c);
        },
        logError: function (a, b, d, e) {
          if (d === "dbCorruption") {
            throw c("FBLogger")("messenger_web_product").mustfixThrow(
              "Got unexpected undefined in edb, mode: %s, table: %s, id: %s, deletedInThisTxn: %s",
              b,
              a,
              (d = e == null ? void 0 : e.id) != null ? d : "",
              (b = e == null ? void 0 : e.deletedInThisTxn) != null ? b : ""
            );
          }
        },
        queueCommitWork: void 0,
        runExclusively: function (c) {
          return new (b("Promise"))(function (d, e) {
            a = a.then(
              b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                try {
                  d(yield c());
                } catch (a) {
                  e(a);
                }
              })
            );
          });
        },
        shouldApplySync: function () {
          return !1;
        },
        shouldSync: function () {
          return !1;
        },
        types: ["ephemeral"],
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "LSJSInMemoryStorage",
  ["MAWLSVaultingHooks", "ReStore", "createReStoreEphemeralPersistence"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      return c("ReStore")(c("createReStoreEphemeralPersistence")(), a, [
        c("MAWLSVaultingHooks"),
      ]);
    }
    g["default"] = a;
  },
  98
);
__d(
  "MWLSSchemaEphemeral",
  [
    "FBLogger",
    "LSJSInMemoryStorage",
    "LSMetadata",
    "LSPlatformLsInitLog",
    "MAWLSVaultingHooks",
    "MessengerLogHistory",
    "ReStore",
    "asyncToGeneratorRuntime",
    "cr:6693",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("MessengerLogHistory").getInstance("db_init");
    function a() {
      return i.apply(this, arguments);
    }
    function i() {
      i = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        d("LSPlatformLsInitLog").addPoint("init_start");
        var a;
        if (b("cr:6693") != null) {
          try {
            h.debug("Creating EB State DB");
            var e = yield b("cr:6693").makeEBStateDB();
            e != null &&
              (a = c("ReStore")(e, d("LSMetadata").metadata, [
                c("MAWLSVaultingHooks"),
              ]));
          } catch (a) {
            c("FBLogger")("messenger_web_clients")
              .catching(a)
              .mustfix("EBSM failed");
          }
          h.debug("EB State DB inited");
        }
        a == null &&
          (h.debug("Creating EDB"),
          (a = c("LSJSInMemoryStorage")(d("LSMetadata").metadata)),
          h.debug("EDB inited"));
        d("LSPlatformLsInitLog").addPoint("init_end");
        return a;
      });
      return i.apply(this, arguments);
    }
    g.createDB = a;
  },
  98
);
__d(
  "LSPlatformSyncCookie",
  [
    "I64",
    "LSCookie",
    "LSIntEnum",
    "MessengerLogHistory",
    "ReQL",
    "SortedAsyncIterable",
    "isPromise",
    "pageID",
    "promiseDone",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "1",
      i = "0",
      j = d("MessengerLogHistory").getInstance("client_init");
    function a(a) {
      a = d("SortedAsyncIterable").toArray(
        d("ReQL").union(
          d("ReQL")
            .fromTableAscending(a.table("sync_groups"))
            .getKeyRange(d("LSIntEnum").ofNumber(1)),
          d("ReQL")
            .fromTableAscending(a.table("sync_groups"))
            .getKeyRange(d("LSIntEnum").ofNumber(2)),
          d("ReQL")
            .fromTableAscending(a.table("sync_groups"))
            .getKeyRange(d("LSIntEnum").ofNumber(95))
        )
      );
      c("isPromise")(a)
        ? c("promiseDone")(
            a.then(function (a) {
              k(a);
            })
          )
        : k(a);
    }
    function b() {
      var a = d("LSCookie").get();
      j.debug("Updated sync cookie to set syncing=true");
      d("LSCookie").writeCookie(
        babelHelpers["extends"]({}, a, { s: h, u: c("pageID") })
      );
    }
    function k(a) {
      var b = d("LSCookie").get();
      if (b.u !== c("pageID")) return;
      var e = {};
      a.forEach(function (a) {
        a[0];
        a = a[1];
        var b = a.currentCursor;
        a = a.groupId;
        b != null && (e[d("I64").to_string(a)] = b);
      });
      j.debug(
        "Updated sync cookie to set syncing=false, saving latest cursors"
      );
      d("LSCookie").writeCookie(babelHelpers["extends"]({}, b, { c: e, s: i }));
    }
    g.STATUS_NOT_SYNCING = i;
    g.syncBeforeUnload = a;
    g.setSyncing = b;
  },
  98
);
__d(
  "LSCookie",
  [
    "Cookie",
    "CookieCore",
    "CurrentEnvironment",
    "FBLogger",
    "LSPlatformSyncCookie",
    "MqttWebDeviceID",
    "isStringNullOrEmpty",
    "killswitch",
    "pageID",
    "recoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = c("CurrentEnvironment").instagramdotcom ? "igd_ls" : "m_ls",
      i = {
        c: {},
        d: c("MqttWebDeviceID").clientID,
        s: d("LSPlatformSyncCookie").STATUS_NOT_SYNCING,
        u: c("pageID"),
      };
    c("Cookie").clear("m_ls");
    function j(a) {
      if (c("killswitch")("MESSENGER_WEB_PERSISTED_DB")) return;
      a = JSON.stringify(a);
      a != null
        ? d("CookieCore").setWithDomain_FOR_MESSENGER_LS_ONLY(
            h,
            a,
            window.location.hostname
          )
        : c("recoverableViolation")("Failed to serialize Cookie", "messenger");
    }
    function a() {
      c("Cookie").clear(h);
    }
    function b() {
      if (c("killswitch")("MESSENGER_WEB_PERSISTED_DB")) return i;
      var a = c("Cookie").get(h);
      if (!c("isStringNullOrEmpty")(a))
        try {
          a = JSON.parse(a);
          var b = Boolean(a.d) ? a.d : void 0,
            e = Boolean(a.s)
              ? a.s
              : d("LSPlatformSyncCookie").STATUS_NOT_SYNCING;
          a = (a = a.c) != null ? a : {};
          a = { c: a, d: (a = b) != null ? a : i.d, s: e, u: c("pageID") };
          b == null && j(a);
          return a;
        } catch (a) {
          c("FBLogger")(
            "messenger_web_product",
            "LSCookie parsing error"
          ).catching(a);
          j(i);
          return i;
        }
      else {
        j(i);
        return i;
      }
    }
    g.writeCookie = j;
    g.deleteCookie = a;
    g.get = b;
  },
  98
);
__d(
  "MWLSSchemaEphemeralProxy",
  ["MWLSSchemaEphemeral"],
  function (a, b, c, d, e, f) {
    "use strict";
    Object.keys(importNamespace("MWLSSchemaEphemeral")).forEach(function (a) {
      if (a === "default" || a === "__esModule") return;
      f[a] = importNamespace("MWLSSchemaEphemeral")[a];
    });
  },
  null
);
__d(
  "GetLsDatabase",
  [
    "ExecutionEnvironment",
    "FBLogger",
    "LSDefaultSyncGroups",
    "LSPlatformLsInitLog",
    "MAWDropCutoverThreadsTable",
    "MAWLogMultipleTabs",
    "MWLSSchemaEphemeralProxy",
    "MessengerLogHistory",
    "Promise",
    "asyncToGeneratorRuntime",
    "cr:4489",
    "cr:5774",
    "cr:665",
    "cr:7351",
    "cr:757",
    "gkx",
    "qpl",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = (e = b("cr:757")) != null ? e : b("cr:7351"),
      i = c("gkx")("4471") && c("gkx")("4463"),
      j = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var a = d("MessengerLogHistory").getInstance("db_init");
          a.debug("====Creating DB====");
          b("cr:4489") != null &&
            b("cr:665") != null &&
            (a.debug("Vaulting setup started"),
            b("cr:665").setupMainWaLogger(),
            yield b("cr:4489").setupVaultMaterials(),
            b("cr:4489").listenToVaultMaterialsRequest(),
            a.debug("Vaulting setup finished"));
          d("LSPlatformLsInitLog").addPoint("support_check_start");
          var e =
            b("cr:5774").isSupported != null
              ? yield b("cr:5774").isSupported()
              : !1;
          d("LSPlatformLsInitLog").addPoint("support_check_end", {
            bool: { using_pdb: e },
          });
          d("MAWLogMultipleTabs").addAnnotationToQPLEvent(
            c("qpl")._(25305590, "1127")
          );
          e &&
            self.navigator.locks == null &&
            c("FBLogger")("messenger_web_product").mustfix(
              "PDB exposed to people without navigator.locks"
            );
          a.debug("Connecting to DB");
          e = e
            ? yield b("cr:5774").createDB()
            : yield d("MWLSSchemaEphemeralProxy").createDB();
          a.debug("Connecting established");
          yield e.runInTransaction(
            (function () {
              var c = b("asyncToGeneratorRuntime").asyncToGenerator(function* (
                c
              ) {
                var e =
                    i || h == null
                      ? [b("Promise").resolve(), b("Promise").resolve()]
                      : [h.call(c), d("MAWDropCutoverThreadsTable").call(c)],
                  f = e[0];
                e = e[1];
                yield b("Promise").all([f, e]);
                d("LSPlatformLsInitLog").addPoint("success_maw_data_deletion");
                a.debug("Seeding DB");
                yield d("LSDefaultSyncGroups").seedDb(c, void 0);
                a.debug("DB seeded");
              });
              return function (a) {
                return c.apply(this, arguments);
              };
            })(),
            "readwrite",
            "ui"
          );
          a.debug("====DB created====");
          return e;
        });
        return function () {
          return a.apply(this, arguments);
        };
      })(),
      k;
    function a() {
      k == null &&
        (k = c("ExecutionEnvironment").isInBrowser
          ? j()
          : new (b("Promise"))(function () {}));
      return k;
    }
    g.get = a;
  },
  98
);
__d(
  "CastingChromecastAPI",
  [
    "Promise",
    "TrustedTypesChromecastScriptURLPolicy",
    "asyncToGeneratorRuntime",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 3 * 60 * 1e3,
      i = [
        "pkedcjkdefgpdelpbcmbmeomcjbeemfm",
        "hfaagokkkhdbgiakmmlclaapfelnkoah",
        "fmfcbgogabcbclcofgocippekhfcmgfj",
        "enhhojjnijigcajfphajepfemndkmdlo",
      ],
      j = null;
    d = function (a) {
      var c = a.appID,
        d = a.receiverListener,
        e = a.sessionListener;
      return m().then(function (a) {
        var f = new a.ApiConfig(
          new a.SessionRequest(c),
          e,
          d,
          a.AutoJoinPolicy.ORIGIN_SCOPED,
          a.DefaultActionPolicy.CAST_THIS_TAB
        );
        return new (b("Promise"))(function (b, c) {
          a.initialize(f, b, c);
        });
      });
    };
    e = function (a) {
      return m().then(function (b) {
        b.addReceiverActionListener(function (c, d) {
          switch (d) {
            case b.ReceiverAction.CAST:
              a.onCast(c);
              break;
            case b.ReceiverAction.STOP:
              a.onStop();
              break;
          }
        });
      });
    };
    f = function (a) {
      return m().then(function (c) {
        var d = new c.SessionRequest(
          a,
          [c.Capability.VIDEO_OUT, c.Capability.AUDIO_OUT],
          h
        );
        return new (b("Promise"))(function (a, b) {
          c.requestSession(a, b, d);
        });
      });
    };
    var k = function (a) {
        return m().then(function (b) {
          return a === b.ReceiverAvailability.AVAILABLE;
        });
      },
      l = function () {
        return m().then(function (a) {
          return a.media.DEFAULT_MEDIA_RECEIVER_APP_ID;
        });
      },
      m = function () {
        if (j) return j;
        if (!a.chrome) {
          j = b("Promise").reject({
            code: "not_supported",
            description: null,
            details: null,
          });
          return j;
        }
        if (a.chrome.cast && a.chrome.cast.isAvailable) {
          j = b("Promise").resolve(a.chrome.cast);
          return j;
        }
        j = b("Promise")
          .resolve()
          .then(function () {
            return n();
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
              if (d == null) {
                e({
                  code: "extension_not_available",
                  description: null,
                  details: null,
                });
                return;
              } else f.src = c("TrustedTypesChromecastScriptURLPolicy").createScriptURL(q(d));
              var g = document.head || document.documentElement;
              if (g == null) {
                e({
                  code: "extension_no_casting_script",
                  description: null,
                  details: null,
                });
                return;
              }
              g.appendChild(f);
            });
          });
        return j;
      };
    function n() {
      return o.apply(this, arguments);
    }
    function o() {
      o = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        for (var a = 0; a < i.length; a++) {
          var b = i[a],
            c = yield p(b);
          if (c) return b;
        }
        return null;
      });
      return o.apply(this, arguments);
    }
    function p(a) {
      return new (b("Promise"))(function (b, c) {
        c = q(a);
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
    }
    function q(a) {
      return "chrome-extension://" + a + "/cast_sender.js";
    }
    e = {
      addReceiverListener: e,
      getDefaultAppID: l,
      getIsAvailable: k,
      getSession: f,
      initialize: d,
    };
    l = e;
    g["default"] = l;
  },
  98
);
__d(
  "CastingChromecastAPIWrapper",
  ["cr:1885117"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:1885117");
  },
  98
);
__d(
  "CastingChromecastSession",
  ["Promise", "err", "recoverableViolation", "removeFromArray"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a, b, d) {
        var e = this;
        this.$3 = null;
        this.$4 = [];
        this.$5 = [];
        this.$6 = [];
        this.$7 = [];
        this.$8 = [];
        this.$9 = [];
        this.$10 = [];
        this.$11 = [];
        this.$12 = function (a, b) {
          if (a === e.$2) {
            var d = e.$4.slice();
            d.forEach(function (a) {
              a(b);
            });
          } else
            e.$6.slice().forEach(function (b) {
              b(
                c("err")(
                  "Namespace does not match. Expected " +
                    e.$2 +
                    " but received " +
                    a
                ),
                "CastingChromecastSession._onMessageReceived"
              );
            });
        };
        this.$1 = a;
        this.$2 = b;
        this.$3 = d;
        d.addMessageListener(this.$2, this.$12);
      }
      var d = a.prototype;
      d.destroy = function () {
        var a = this.$3;
        a != null &&
          (a.status != null &&
            a.status !== "disconnected" &&
            c("recoverableViolation")(
              "Destroying receiver session that is not disconnected. Status, " +
                a.status,
              "comet_cast_sender"
            ),
          a.removeMessageListener(this.$2, this.$12));
        this.$3 = null;
      };
      d.isCasting = function () {
        return this.$3 != null;
      };
      d.isConnected = function () {
        return this.$3 != null && this.$3.status === "connected";
      };
      d.isDisconnected = function () {
        return this.$3 != null && this.$3.status === "disconnected";
      };
      d.disconnect = function () {
        var a = this;
        this.$5.slice().forEach(function (a) {
          a();
        });
        return new (b("Promise"))(function (b, c) {
          a.$3 != null ? a.$3.stop(b, c) : b();
        })
          ["catch"](function (b) {
            if (a.$3 != null && a.$3.status !== "stopped") {
              a.$6.slice().forEach(function (a) {
                a(b, "CastingChromecastSession.disconnect");
              });
              throw b;
            }
          })
          ["finally"](function () {
            var b = a.$3;
            a.$3 = null;
            b && b.removeMessageListener(a.$2, a.$12);
            a.$7.slice().forEach(function (a) {
              a();
            });
          });
      };
      d.getVolume = function () {
        var a = this.$13();
        return a ? a.level : null;
      };
      d.getFriendlyName = function () {
        return this.$14();
      };
      d.setVolume = function (a) {
        var d = this,
          e = this.$3;
        return new (b("Promise"))(function (b, d) {
          if (e == null) {
            d(c("err")("Cannot set volume without a session"));
            return;
          }
          e.setReceiverVolumeLevel(a, b, d);
        })["catch"](function (a) {
          d.$6.slice().forEach(function (b) {
            b(a, "CastingChromecastSession.setVolume");
          });
          throw a;
        });
      };
      d.isMuted = function () {
        var a = this.$13();
        return a ? a.muted : null;
      };
      d.mute = function () {
        return this.$15(!0);
      };
      d.unmute = function () {
        return this.$15(!1);
      };
      d.sendMessage = function (a) {
        var d = this;
        return new (b("Promise"))(function (b, e) {
          var f = d.$3;
          if (f == null) {
            e(c("err")("The message can not be sent without a session"));
            return;
          }
          f.sendMessage(d.$2, a, b, e);
        })["catch"](function (a) {
          d.$6.slice().forEach(function (b) {
            b(a, "CastingChromecastSession.sendMessage");
          });
          throw a;
        });
      };
      d.$13 = function () {
        var a;
        a =
          (a = this.$3) == null
            ? void 0
            : (a = a.receiver) == null
            ? void 0
            : a.volume;
        return a == null ? null : a;
      };
      d.$14 = function () {
        var a;
        return (
          ((a = this.$3) == null ? void 0 : a.receiver.friendlyName) || null
        );
      };
      d.$15 = function (a) {
        var d = this;
        return new (b("Promise"))(function (b, e) {
          var f = d.$3;
          if (f == null) {
            e(c("err")("The muted state can not be set without a session"));
            return;
          }
          f.setReceiverMuted(a, b, e);
        })["catch"](function (a) {
          d.$6.slice().forEach(function (b) {
            b(a, "CastingChromecastSession._setIsMuted");
          });
          throw a;
        });
      };
      d.onMessage = function (a) {
        var b = this.$4;
        b.push(a);
        return {
          remove: function () {
            c("removeFromArray")(b, a);
          },
        };
      };
      d.onDisconnecting = function (a) {
        var b = this.$5;
        b.push(a);
        return {
          remove: function () {
            c("removeFromArray")(b, a);
          },
        };
      };
      d.onError = function (a) {
        var b = this.$6;
        b.push(a);
        return {
          remove: function () {
            c("removeFromArray")(b, a);
          },
        };
      };
      d.onDisconnected = function (a) {
        var b = this.$7;
        b.push(a);
        return {
          remove: function () {
            c("removeFromArray")(b, a);
          },
        };
      };
      d.onVideoLoading = function (a) {
        var b = this.$8;
        b.push(a);
        return {
          remove: function () {
            c("removeFromArray")(b, a);
          },
        };
      };
      d.onVideoLoaded = function (a) {
        var b = this.$9;
        b.push(a);
        return {
          remove: function () {
            c("removeFromArray")(b, a);
          },
        };
      };
      d.onVideoPlaying = function (a) {
        var b = this.$10;
        b.push(a);
        return {
          remove: function () {
            c("removeFromArray")(b, a);
          },
        };
      };
      d.onVideoPaused = function (a) {
        var b = this.$11;
        b.push(a);
        return {
          remove: function () {
            c("removeFromArray")(b, a);
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
  "CastingErrorUtils",
  ["ErrorMetadata", "err", "getErrorSafe"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      return (
        a != null &&
        typeof a === "object" &&
        typeof a.code === "string" &&
        a.code === b
      );
    }
    function b(a) {
      return a != null && typeof a === "object" && typeof a.code === "string"
        ? c("err")(
            "Chromecast error: %s, keys: %s",
            "cast.ChromecastError",
            JSON.stringify({ code: a.code })
          )
        : c("getErrorSafe")(a);
    }
    function d(a, b) {
      a.metadata == null && (a.metadata = new (c("ErrorMetadata"))());
      var d = a.metadata;
      b = b == null ? void 0 : b.videoID;
      b != null && d.addEntries(["COMET_VIDEO", "VIDEO_ID", b]);
      return a;
    }
    g.isChromecastError = a;
    g.getCastingErrorSafe = b;
    g.appendCastingMetadataToExpandedError = d;
  },
  98
);
__d(
  "ConnectedTvLoggingFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("getFalcoLogPolicy_DO_NOT_USE")("1843753");
    b = d("FalcoLoggerInternal").create("connected_tv_logging", a);
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "CastingChromecastScanner",
  [
    "CastingChromecastAPIWrapper",
    "CastingChromecastSession",
    "CastingErrorUtils",
    "ConnectedTvLoggingFalcoEvent",
    "Promise",
    "err",
    "performanceAbsoluteNow",
    "promiseDone",
    "removeFromArray",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a, b) {
        (this.$6 = null),
          (this.$7 = []),
          (this.$8 = []),
          (this.$9 = []),
          (this.$10 = []),
          (this.$11 = []),
          (this.$12 = []),
          (this.$13 = []),
          (this.$14 = []),
          (this.$15 = []),
          (this.$1 = a),
          (this.$2 = b),
          (this.$4 = !1),
          (this.$3 = !1),
          (this.$5 = new Set());
      }
      var e = a.prototype;
      e.init = function () {
        if (this.$6 != null)
          return b("Promise").reject(
            c("err")("Scanner can only be initialized once.")
          );
        this.$6 = this.$16();
        return this.$6;
      };
      e.ready = function () {
        return this.$6 == null
          ? b("Promise").reject(c("err")("Scanner should be initialized."))
          : this.$6;
      };
      e.hasSupport = function () {
        return this.$3;
      };
      e.hasFoundReceiver = function () {
        return this.$4;
      };
      e.getSession = function () {
        var a = this;
        if (!this.$4)
          return b("Promise").reject(c("err")("No receivers found"));
        this.$13.slice().forEach(function (a) {
          a();
        });
        return this.$17()
          .then(function (b) {
            var c = a.$18(b);
            a.$5.add(c);
            a.$14.slice().forEach(function (a) {
              a(c);
            });
            return c;
          })
          ["catch"](function (b) {
            a.$10.slice().forEach(function (a) {
              a();
            });
            a.$11.slice().forEach(function (a) {
              a();
            });
            throw b;
          });
      };
      e.$16 = function () {
        var a = this;
        this.$3 = !0;
        return this.$19()
          .then(function (b) {
            return a.$20();
          })
          .then(function (b) {
            a.$9.slice().forEach(function (a) {
              a();
            });
          })
          .then(function (b) {
            return a.$21();
          })
          ["catch"](function (b) {
            !d("CastingErrorUtils").isChromecastError(b, "not_supported") &&
              !d("CastingErrorUtils").isChromecastError(
                b,
                "extension_not_available"
              ) &&
              !d("CastingErrorUtils").isChromecastError(
                b,
                "extension_no_casting_script"
              ) &&
              a.$8.slice().forEach(function (a) {
                a(b, "CastingChromecastScanner._init");
              });
            throw b;
          });
      };
      e.$21 = function () {
        var a = this,
          d = this.$1;
        if (d == null)
          return b("Promise").reject(c("err")("App ID is not defined"));
        var e = function (b) {
            var c = a.$18(b);
            a.$14.slice().forEach(function (a) {
              a(c);
            });
          },
          f = function (b) {
            c("promiseDone")(
              c("CastingChromecastAPIWrapper")
                .getIsAvailable(b)
                .then(function (b) {
                  (a.$4 = b),
                    a.$15.slice().forEach(function (b) {
                      b({ foundReceiver: a.$4 });
                    });
                })
            );
          };
        return c("CastingChromecastAPIWrapper")
          .initialize({ appID: d, receiverListener: f, sessionListener: e })
          .then(function () {})
          ["catch"](function (b) {
            a.$8.slice().forEach(function (a) {
              a(b, "CastingChromecastScanner._initializeApi");
            });
            throw b;
          });
      };
      e.$19 = function () {
        var a = this;
        return this.$1 != null
          ? b("Promise").resolve()
          : c("CastingChromecastAPIWrapper")
              .getDefaultAppID()
              .then(function (b) {
                a.$1 = b;
              });
      };
      e.$17 = function () {
        var a = this.$1;
        if (a == null)
          return b("Promise").reject(c("err")("App ID is not defined"));
        var d = c("performanceAbsoluteNow")();
        c("ConnectedTvLoggingFalcoEvent").log(function () {
          return { event: "sender_session_requested" };
        });
        return c("CastingChromecastAPIWrapper")
          .getSession(a)
          .then(function (a) {
            c("ConnectedTvLoggingFalcoEvent").log(function () {
              return {
                event: "sender_session_started",
                perf_time_ms: Math.floor(c("performanceAbsoluteNow")() - d),
              };
            });
            return a;
          })
          ["catch"](function (a) {
            c("ConnectedTvLoggingFalcoEvent").log(function () {
              return {
                event: "sender_session_failed",
                perf_time_ms: Math.floor(c("performanceAbsoluteNow")() - d),
                session_failure_code:
                  typeof a.code === "string" ? a.code : null,
                session_failure_description: a.description,
              };
            });
            throw a;
          });
      };
      e.$18 = function (a) {
        var b = this,
          d = new (c("CastingChromecastSession"))(
            this.$1 || "",
            this.$2 || "",
            a
          ),
          e = d.onDisconnecting(function () {
            b.$12.slice().forEach(function (a) {
              a();
            });
          }),
          f = d.onError(function (a, c) {
            b.$8.slice().forEach(function (b) {
              b(a, c);
            });
          }),
          g = d.onDisconnected(function () {
            b.$11.slice().forEach(function (a) {
              a();
            }),
              b.$5["delete"](d),
              e.remove(),
              f.remove(),
              g.remove();
          });
        return d;
      };
      e.$20 = function () {
        var a = this;
        return c("CastingChromecastAPIWrapper").addReceiverListener({
          onCast: function (b) {
            a.$7.slice().forEach(function (a) {
              a(b);
            });
          },
          onStop: function () {
            a.$5.forEach(function (a) {
              return a.disconnect();
            });
          },
        });
      };
      e.onCast = function (a) {
        var b = this.$7;
        b.push(a);
        return {
          remove: function () {
            c("removeFromArray")(b, a);
          },
        };
      };
      e.onError = function (a) {
        var b = this.$8;
        b.push(a);
        return {
          remove: function () {
            c("removeFromArray")(b, a);
          },
        };
      };
      e.onInit = function (a) {
        var b = this.$9;
        b.push(a);
        return {
          remove: function () {
            c("removeFromArray")(b, a);
          },
        };
      };
      e.onSessionCancelled = function (a) {
        var b = this.$10;
        b.push(a);
        return {
          remove: function () {
            c("removeFromArray")(b, a);
          },
        };
      };
      e.onSessionDisconnected = function (a) {
        var b = this.$11;
        b.push(a);
        return {
          remove: function () {
            c("removeFromArray")(b, a);
          },
        };
      };
      e.onSessionDisconnecting = function (a) {
        var b = this.$12;
        b.push(a);
        return {
          remove: function () {
            c("removeFromArray")(b, a);
          },
        };
      };
      e.onSessionRequested = function (a) {
        var b = this.$13;
        b.push(a);
        return {
          remove: function () {
            c("removeFromArray")(b, a);
          },
        };
      };
      e.onSessionStarted = function (a) {
        var b = this.$14;
        b.push(a);
        return {
          remove: function () {
            c("removeFromArray")(b, a);
          },
        };
      };
      e.onStatusChanged = function (a) {
        var b = this.$15;
        b.push(a);
        return {
          remove: function () {
            c("removeFromArray")(b, a);
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
  "CastingState",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a() {
      return {
        isCastPending: !1,
        receiverExperience: null,
        receiverFriendlyName: null,
        receiverIsConnected: !1,
        receiverIsMuted: null,
        receiverVolume: null,
      };
    }
    function b() {
      return {
        currentDuration: null,
        currentPlaybackState: null,
        currentPosition: null,
        currentVideoID: null,
        type: "video_channel",
      };
    }
    function c() {
      return { type: "photo" };
    }
    function d() {
      return {
        currentAssetID: null,
        currentPlaybackState: null,
        type: "photo_album",
      };
    }
    f.initialCastingState = a;
    f.initialVideoChannelExperienceState = b;
    f.initialPhotoExperienceState = c;
    f.initialPhotoAlbumExperienceState = d;
  },
  66
);
__d(
  "TV2PhotoAlbumReportedState",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return k(JSON.parse(a), m("TV2PhotoAlbumReportedState"));
    }
    function b(a) {
      return JSON.stringify(l(a, m("TV2PhotoAlbumReportedState")), null, 2);
    }
    function g(a, b, c) {
      c === void 0 && (c = "");
      if (c)
        throw Error(
          'Invalid value for key "' +
            c +
            '". Expected type ' +
            JSON.stringify(a) +
            " but got " +
            JSON.stringify(b)
        );
      throw Error(
        "Invalid value " + JSON.stringify(b) + " for type " + JSON.stringify(a)
      );
    }
    function h(a) {
      if (a.jsonToJS === void 0) {
        var b = {};
        a.props.forEach(function (a) {
          return (b[a.json] = { key: a.js, typ: a.typ });
        });
        a.jsonToJS = b;
      }
      return a.jsonToJS;
    }
    function i(a) {
      if (a.jsToJSON === void 0) {
        var b = {};
        a.props.forEach(function (a) {
          return (b[a.js] = { key: a.json, typ: a.typ });
        });
        a.jsToJSON = b;
      }
      return a.jsToJSON;
    }
    function j(a, b, c, d) {
      d === void 0 && (d = "");
      function e(b, a) {
        return typeof b === typeof a ? a : g(b, a, d);
      }
      function f(b, a) {
        var d = b.length;
        for (var e = 0; e < d; e++) {
          var f = b[e];
          try {
            return j(a, f, c);
          } catch (a) {}
        }
        return g(b, a);
      }
      function h(b, a) {
        return b.indexOf(a) !== -1 ? a : g(b, a);
      }
      function i(b, a) {
        return !Array.isArray(a)
          ? g("array", a)
          : a.map(function (a) {
              return j(a, b, c);
            });
      }
      function k(a) {
        if (a === null) return null;
        var b = new Date(a);
        return isNaN(b.valueOf()) ? g("Date", a) : b;
      }
      function l(b, d, a) {
        if (a === null || typeof a !== "object" || Array.isArray(a))
          return g("object", a);
        var e = {};
        Object.getOwnPropertyNames(b).forEach(function (d) {
          var f = b[d];
          d = Object.prototype.hasOwnProperty.call(a, d) ? a[d] : void 0;
          e[f.key] = j(d, f.typ, c, f.key);
        });
        Object.getOwnPropertyNames(a).forEach(function (f) {
          Object.prototype.hasOwnProperty.call(b, f) ||
            (e[f] = j(a[f], d, c, f));
        });
        return e;
      }
      if (b === "any") return a;
      if (b === null) return a === null ? a : g(b, a);
      if (b === !1) return g(b, a);
      while (typeof b === "object" && b.ref !== void 0) b = n[b.ref];
      if (Array.isArray(b)) return h(b, a);
      if (typeof b === "object")
        return Object.prototype.hasOwnProperty.call(b, "unionMembers")
          ? f(b.unionMembers, a)
          : Object.prototype.hasOwnProperty.call(b, "arrayItems")
          ? i(b.arrayItems, a)
          : Object.prototype.hasOwnProperty.call(b, "props")
          ? l(c(b), b.additional, a)
          : g(b, a);
      return b === Date && typeof a !== "number" ? k(a) : e(b, a);
    }
    function k(a, b) {
      return j(a, b, h);
    }
    function l(a, b) {
      return j(a, b, i);
    }
    function c() {
      for (var a = arguments.length, b = new Array(a), c = 0; c < a; c++)
        b[c] = arguments[c];
      return { unionMembers: b };
    }
    function d(a, b) {
      return { props: a, additional: b };
    }
    function m(a) {
      return { ref: a };
    }
    var n = {
      TV2PhotoAlbumReportedState: d(
        [
          {
            json: "media_parameters",
            js: "media_parameters",
            typ: m("MediaParameters"),
          },
          { json: "media_state", js: "media_state", typ: m("MediaState") },
        ],
        "any"
      ),
      MediaParameters: d(
        [{ json: "album_id", js: "album_id", typ: "" }],
        "any"
      ),
      MediaState: d(
        [
          {
            json: "photo_state",
            js: "photo_state",
            typ: c(void 0, m("PhotoMediaState")),
          },
          {
            json: "video_state",
            js: "video_state",
            typ: c(void 0, m("VideoMediaState")),
          },
        ],
        "any"
      ),
      PhotoMediaState: d(
        [
          { json: "duration_ms", js: "duration_ms", typ: 3.14 },
          { json: "photo_id", js: "photo_id", typ: "" },
          {
            json: "photo_playback_state",
            js: "photo_playback_state",
            typ: m("PhotoPlaybackState"),
          },
          { json: "position_ms", js: "position_ms", typ: 3.14 },
        ],
        "any"
      ),
      VideoMediaState: d(
        [
          { json: "duration_ms", js: "duration_ms", typ: 3.14 },
          { json: "position_ms", js: "position_ms", typ: 3.14 },
          { json: "video_id", js: "video_id", typ: "" },
          {
            json: "video_playback_state",
            js: "video_playback_state",
            typ: m("VideoPlaybackState"),
          },
        ],
        "any"
      ),
      PhotoPlaybackState: ["paused", "play"],
      VideoPlaybackState: ["ended", "paused", "play", "seeking", "unknown"],
    };
    e.exports = {
      TV2PhotoAlbumReportedStateToJson: b,
      toTV2PhotoAlbumReportedState: a,
    };
  },
  null
);
__d(
  "TV2UniqueIDs",
  ["guid"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = new Map();
    function i(a) {
      var b;
      b = (b = h.get(a)) != null ? b : 0;
      h.set(a, b + 1);
      return "" + a + b.toString(36);
    }
    function a() {
      return i("id_tv2_vcr_");
    }
    function b() {
      return i("id_tv2_veqe_");
    }
    function d() {
      return i("id_tv2_toast_");
    }
    function e() {
      return i("id_tv2_rvr_");
    }
    function f() {
      return c("guid")();
    }
    g.makeTV2VideoCastRequestID = a;
    g.makeTV2VideoExperienceQueueEntryID = b;
    g.makeTV2ToastID = d;
    g.makeTV2RelatedVideosRequestID = e;
    g.makeTV2ChainingSessionID = f;
  },
  98
);
__d(
  "getTV2QueryStringCheatcodeValue",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function b(b) {
      try {
        b = new RegExp("\\b" + b + "=([^&]*)");
        b = b.exec(a.location.search);
        return !b || b[1] == null ? null : b[1];
      } catch (a) {
        return null;
      }
    }
    f["default"] = b;
  },
  66
);
__d(
  "getTV2QueryStringCheatcode",
  ["getTV2QueryStringCheatcodeValue"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      try {
        return c("getTV2QueryStringCheatcodeValue")(a) === "1";
      } catch (a) {
        return !1;
      }
    }
    g["default"] = a;
  },
  98
);
__d(
  "getTV2DebuggingEnabled",
  ["getTV2QueryStringCheatcode"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      return c("getTV2QueryStringCheatcode")("debugging");
    }
    g["default"] = a;
  },
  98
);
__d(
  "TV2CommsParseUtils",
  [
    "TV2PhotoAlbumReportedState",
    "TV2UniqueIDs",
    "err",
    "getTV2DebuggingEnabled",
    "gkx",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      return a === null
        ? "null"
        : a === ""
        ? "empty string"
        : Array.isArray(a)
        ? "array"
        : typeof a === "object"
        ? "object with keys: " + JSON.stringify(Object.keys(a).sort())
        : typeof a;
    }
    function i(a, b, d) {
      if (typeof a !== "string" || a === "") {
        var e = c("err")(
          "Message parse error: %s expected JSON string, got %s",
          d,
          h(a)
        );
        throw e;
      }
      try {
        e = JSON.parse(a);
        return b(e, d);
      } catch (b) {
        if (
          "messageFormat" in b &&
          typeof b.messageFormat === "string" &&
          "messageParams" in b &&
          Array.isArray(b.messageParams)
        )
          throw b;
        else {
          a = c("err")(
            "Message parse error: %s expected JSON string, got error: %s",
            d,
            b.message
          );
          throw a;
        }
      }
    }
    function j(a, b) {
      if (typeof a !== "object" || a == null) {
        b = c("err")(
          "Message parse error: %s expected object, got %s",
          b,
          h(a)
        );
        throw b;
      }
      return a;
    }
    function b(a, b) {
      if (a == null) return null;
      if (typeof a !== "object" || a == null) {
        b = c("err")(
          "Message parse error: %s expected object, got %s",
          b,
          h(a)
        );
        throw b;
      }
      return a;
    }
    function k(a, b) {
      if (!Array.isArray(a)) {
        b = c("err")("Message parse error: %s expected array, got %s", b, h(a));
        throw b;
      }
      return a;
    }
    function l(a, b) {
      if (!Array.isArray(a)) {
        var d = c("err")(
          "Message parse error: %s expected array, got %s",
          b,
          h(a)
        );
        throw d;
      }
      return a.map(function (a) {
        return n(a, b);
      });
    }
    function m(a, b) {
      if (!Array.isArray(a)) {
        var d = c("err")(
          "Message parse error: %s expected array, got %s",
          b,
          h(a)
        );
        throw d;
      }
      return a.filter(Boolean).map(function (a) {
        return n(a, b);
      });
    }
    function n(a, b) {
      if (typeof a !== "string" || a === "") {
        b = c("err")(
          "Message parse error: %s expected non-empty string, got %s",
          b,
          h(a)
        );
        throw b;
      }
      return a;
    }
    function o(a, b) {
      if (a == null) return null;
      if (typeof a !== "string" || a === "") {
        b = c("err")(
          "Message parse error: %s expected optional non-empty string, got %s",
          b,
          h(a)
        );
        throw b;
      }
      return a;
    }
    function p(a, b) {
      if (a == null) return null;
      if (typeof a !== "string") {
        b = c("err")(
          "Message parse error: %s expected optional string, got %s",
          b,
          h(a)
        );
        throw b;
      }
      return a;
    }
    function q(a, b) {
      if (a == null) return null;
      if (
        !(
          (typeof a === "number" && Number.isFinite(a)) ||
          (typeof a === "string" && a !== "")
        )
      ) {
        b = c("err")(
          "Message parse error: %s expected optional non-empty string or number, got %s",
          b,
          h(a)
        );
        throw b;
      }
      return a;
    }
    function r(a, b) {
      if (typeof a !== "number" || !Number.isFinite(a)) {
        b = c("err")(
          "Message parse error: %s expected finite number, got %s",
          b,
          h(a)
        );
        throw b;
      }
      return a;
    }
    function e(a, b) {
      if (a == null) return null;
      if (typeof a !== "number" || !Number.isFinite(a)) {
        b = c("err")(
          "Message parse error: %s expected optional finite number, got %s",
          b,
          h(a)
        );
        throw b;
      }
      return a;
    }
    function f(a, b) {
      return a === "true" || a === !0;
    }
    function s(a, b, c) {
      c === void 0 && (c = !1);
      return a == null ? c : a === !0;
    }
    function t(a, b) {
      if (typeof a !== "boolean") {
        b = c("err")("Parse error: %s expected boolean, got %s", b, h(a));
        throw b;
      }
      return a;
    }
    function u(a, b) {
      a = a != null ? j(a, b) : null;
      if (a == null) return null;
      var c = n(a.uri, b + ".uri"),
        d = r(a.width, b + ".width");
      a = r(a.height, b + ".height");
      return { height: a, uri: c, width: d };
    }
    function v(a, b) {
      a = a != null ? j(a, b) : null;
      if (a == null) return null;
      a = j(a.image, b + ".image");
      a = n(a.uri, b + ".image.uri");
      return { uri: a };
    }
    function w(a, b) {
      if (a == null) return null;
      a = k(a, b);
      return a.map(function (a, b) {
        return n(a, "[" + b + "]");
      });
    }
    function x(a, b) {
      return i(
        a,
        function (b, a) {
          b = k(b, a);
          return b.map(function (b, c) {
            c = a + "." + c;
            return z(j(b, c), c);
          });
        },
        b
      );
    }
    function y(a, b) {
      return i(
        a,
        function (b, a) {
          return z(j(b, a), a);
        },
        b
      );
    }
    function z(b, e) {
      var f = n(b.access_token, e + ".access_token"),
        g = String(q(b.app_id, e + ".app_id")),
        h = p(b.app_version, e + ".app_version"),
        i = u(b.background_image, e + ".background_image"),
        j = o(b.channel_token, e + ".channel_token"),
        k = o(b.channel_session_id, e + ".channel_session_id"),
        r = p(b.end_cursor, e + ".end_cursor") || null,
        t = s(b.from_next_video_query, e + ".from_next_video_query"),
        x = s(b.is_ad, e + ".is_ad"),
        y = w(
          b.dash_prefetched_representation_ids,
          e + ".dash_prefetched_representation_ids"
        ),
        z = o(b.entry_point, e + ".entry_point"),
        A = o(
          b.player_origin === "" ? null : b.player_origin,
          e + ".player_origin"
        ),
        B = o(
          b.player_suborigin === "" ? null : b.player_suborigin,
          e + ".player_suborigin"
        ),
        C = v(b.preferred_thumbnail, e + ".preferred_thumbnail"),
        D = o(b.video_channel_id, e + ".video_channel_id"),
        E = n(b.root_video_id, e + ".root_video_id"),
        F = c("getTV2DebuggingEnabled")()
          ? /\bvideo_id=([0-9]+)\b/.exec(a.location.search)
          : null;
      F = F && F[1] ? F[1] : n(b.video_id, e + ".video_id");
      var G = c("gkx")("2172") ? m : l;
      G =
        b.tracking_codes != null
          ? G(b.tracking_codes, e + ".tracking_codes")
          : null;
      return {
        accessToken: f,
        appID: g,
        appVersion: h,
        backgroundImage: i,
        chainingEnabled: !1,
        channelSessionID: k,
        channelToken: j,
        dashPrefetchedRepresentationIDs: y,
        endCursor: r,
        entryPoint: z,
        fromNextVideoQuery: t,
        isAd: x,
        playerOrigin: A,
        playerSuborigin: B,
        preferredThumbnail: C,
        rootVideoID: E,
        startTimestamp: 0,
        trackingCodes: G,
        videoCastRequestID: d("TV2UniqueIDs").makeTV2VideoCastRequestID(),
        videoChannelID: D,
        videoID: F,
      };
    }
    function A(a, b) {
      a = j(a, b);
      b = n(a.type, b + ".type");
      switch (b) {
        case "version_response":
          return a;
        case "version_launch_response":
          return a;
        case "experience_state":
          return a;
        case "command_result":
          return a;
        case "duration_change":
          return a;
        case "status_update":
          return a;
        case "experience_status_update":
          return a;
      }
      b = c("err")(
        "Parse error: %s expected response message type, got %s",
        "parseTV2CommsFBAppOutboundMessageFromObject",
        h(a)
      );
      throw b;
    }
    function B(a) {
      return i(a, A, ".");
    }
    function C(a) {
      a = B(a);
      switch (a.type) {
        case "version_response":
        case "version_launch_response":
        case "experience_state":
        case "command_result":
          return a;
      }
      a = c("err")(
        "Parse error: %s expected response message type, got %s",
        "parseCastingReceiverResponseMessageFromJSON",
        h(a)
      );
      throw a;
    }
    function D(a) {
      return d("TV2PhotoAlbumReportedState").toTV2PhotoAlbumReportedState(a);
    }
    g.parseJSONString = i;
    g.parseObject = j;
    g.parseOptionalObject = b;
    g.parseArray = k;
    g.parseStringArray = l;
    g.parseTrackingCodes = m;
    g.parseNonEmptyString = n;
    g.parseOptionalNonEmptyString = o;
    g.parseOptionalString = p;
    g.parseNumber = r;
    g.parseOptionalNumber = e;
    g.parseOptionalStringishBoolean = f;
    g.parseOptionalBoolean = s;
    g.parseBoolean = t;
    g.parseVideoCastingPayloadBackgroundImage = u;
    g.parseVideoCastingPayloadPreferredThumbnail = v;
    g.parseVideoCastingPayloadListJSONAsTV2VideoCastRequestArray = x;
    g.parseVideoCastingPayloadJSONAsTV2VideoCastRequest = y;
    g.parseVideoCastingPayloadAsTV2VideoCastRequest = z;
    g.parseTV2CommsFBAppOutboundMessageFromJSON = B;
    g.parseCastingReceiverResponseMessageFromJSON = C;
    g.parseCastingReceiverPhotoAlbumReportedState = D;
  },
  98
);
__d(
  "fetchCtvCastPayload",
  [
    "CometRelay",
    "err",
    "fetchCtvCastPayloadQuery.graphql",
    "getErrorSafe",
    "guid",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h !== void 0 ? h : (h = b("fetchCtvCastPayloadQuery.graphql"));
    function a(a) {
      var b = a.castSessionID;
      a = a.environment;
      return d("CometRelay")
        .fetchQuery(a, i, {
          castSessionID: b,
          mediaParameters: "{}",
          requestID: c("guid")(),
        })
        .toPromise()
        .then(function (a) {
          if (
            a != null &&
            a.ctv_cast_payload != null &&
            typeof a.ctv_cast_payload === "string"
          )
            return { payload: a.ctv_cast_payload, type: "loaded" };
          else
            return { error: c("err")("Payload was not string"), type: "error" };
        })
        ["catch"](function (a) {
          a = c("getErrorSafe")(a);
          return { error: a, type: "error" };
        });
    }
    function e(a) {
      var b = a.albumID,
        e = a.castSessionID;
      a = a.environment;
      return d("CometRelay")
        .fetchQuery(a, i, {
          castSessionID: e,
          mediaParameters: JSON.stringify({ album_id: b }),
          requestID: c("guid")(),
        })
        .toPromise()
        .then(function (a) {
          if (typeof (a == null ? void 0 : a.ctv_cast_payload) === "string")
            return { payload: a.ctv_cast_payload, type: "loaded" };
          else
            return { error: c("err")("Payload was not string"), type: "error" };
        })
        ["catch"](function (a) {
          a = c("getErrorSafe")(a);
          return { error: a, type: "error" };
        });
    }
    g.fetchPhotoCastPayload = a;
    g.fetchAlbumCastPayload = e;
  },
  98
);
__d(
  "fetchVideoCastPayload",
  ["CometRelay", "err", "fetchVideoCastPayloadQuery.graphql", "getErrorSafe"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h !== void 0 ? h : (h = b("fetchVideoCastPayloadQuery.graphql"));
    function a(a) {
      var b = a.castSessionID,
        e = a.environment,
        f = a.playerOrigin,
        g = a.playerSubOrigin;
      a = a.videoID;
      return d("CometRelay")
        .fetchQuery(e, i, {
          castSessionID: b,
          playerOrigin: f,
          playerSubOrigin: g,
          videoID: a,
        })
        .toPromise()
        .then(function (a) {
          if (
            a == null ||
            a.video == null ||
            a.video.video_cast_payload == null
          )
            return { type: "video_cannot_be_casted" };
          else if (typeof a.video.video_cast_payload === "string")
            return { payload: a.video.video_cast_payload, type: "loaded" };
          else
            return { error: c("err")("Payload was not string"), type: "error" };
        })
        ["catch"](function (a) {
          a = c("getErrorSafe")(a);
          return { error: a, type: "error" };
        });
    }
    g["default"] = a;
  },
  98
);
__d(
  "CastingController",
  [
    "CastingErrorUtils",
    "CastingState",
    "FBLogger",
    "Promise",
    "SubscriptionsHandler",
    "TV2CommsParseUtils",
    "err",
    "fetchCtvCastPayload",
    "fetchVideoCastPayload",
    "getErrorSafe",
    "performanceAbsoluteNow",
    "promiseDone",
    "recoverableViolation",
    "removeFromArray",
    "uuidv4",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = c("FBLogger")("fbtv"),
      i = "PhotoAlbum",
      j = "ChannelVideo",
      k = "Photo";
    a = (function () {
      function a(a, b) {
        var e = this;
        this.$5 = [];
        this.$6 = [];
        this.$7 = [];
        this.$9 = function () {
          var a = d("CastingState").initialCastingState();
          e.$12(a);
          e.$13(null);
        };
        this.$10 = function (a) {
          switch (a.type) {
            case "status_update":
              e.$16(a);
              break;
            case "experience_status_update":
              e.$17(a);
              break;
            default:
              break;
          }
        };
        this.$11 = function (a, b) {
          var f;
          if (d("CastingErrorUtils").isChromecastError(a, "cancel"))
            h.warn(
              "ChromecastError while casting. Received ChromecastError with cancel code."
            );
          else if (((f = e.$2) == null ? void 0 : f.type) === "video_channel") {
            f = (f = e.$2) == null ? void 0 : f.currentVideoID;
            f = d("CastingErrorUtils").appendCastingMetadataToExpandedError(
              d("CastingErrorUtils").getCastingErrorSafe(a),
              babelHelpers["extends"]({}, f != null ? { videoID: f } : {})
            );
            c("recoverableViolation")(
              "Receiver error at " + b + " while playing video channel",
              "comet_cast_sender",
              { error: f }
            );
            c("promiseDone")(e.$4.stopCasting());
          } else {
            f = d("CastingErrorUtils").appendCastingMetadataToExpandedError(
              d("CastingErrorUtils").getCastingErrorSafe(a),
              {}
            );
            a = ((a = e.$2) == null ? void 0 : a.type) || "";
            c("recoverableViolation")(
              "Receiver error at " + b + " while playing in experience " + a,
              "comet_cast_sender",
              { error: f }
            );
            c("promiseDone")(e.$4.stopCasting());
          }
        };
        this.$1 = d("CastingState").initialCastingState();
        this.$2 = null;
        this.$3 = b;
        this.$4 = a;
        this.$8 = new (c("SubscriptionsHandler"))();
        this.$8.addSubscriptions(
          this.$4.onReceiverDisconnected(this.$9),
          this.$4.onSessionDisconnected(this.$9),
          this.$4.onSessionMessage(this.$10),
          this.$4.onError(this.$11)
        );
      }
      var e = a.prototype;
      e.destroy = function () {
        this.$8.release();
      };
      e.getCastingState = function () {
        return this.$1;
      };
      e.getCastingExperienceState = function () {
        return this.$2;
      };
      e.setCastingState = function (a) {
        this.$1 = a;
      };
      e.setCastingExperienceState = function (a) {
        this.$2 = a;
      };
      e.subscribeToCastingStateChange = function (a) {
        var b = this;
        this.$5.push(a);
        return function () {
          c("removeFromArray")(b.$5, a);
        };
      };
      e.subscribeToCastingExperienceStateChange = function (a) {
        var b = this;
        this.$6.push(a);
        return function () {
          c("removeFromArray")(b.$6, a);
        };
      };
      e.subscribeToCastingEvent = function (a) {
        var b = this;
        this.$7.push(a);
        return function () {
          c("removeFromArray")(b.$7, a);
        };
      };
      e.startPlayVideoNow = function (a) {
        var e = this,
          f = a.environment,
          g = a.origin,
          h = a.position,
          i = a.subOrigin,
          k = a.videoID;
        if (this.$1.isCastPending) return;
        this.$12(babelHelpers["extends"]({}, this.$1, { isCastPending: !0 }));
        this.$13(null);
        this.$14({
          data: { type: "cast_requested", videoID: k },
          timestamp: c("performanceAbsoluteNow")(),
        });
        c("promiseDone")(
          b("Promise")
            .all([
              c("fetchVideoCastPayload")({
                castSessionID: this.$3,
                environment: f,
                playerOrigin: g,
                playerSubOrigin: i,
                videoID: k,
              }),
              this.$4.getSession().then(function (a) {
                e.$12(
                  babelHelpers["extends"]({}, e.$1, { receiverIsConnected: !0 })
                );
                return a;
              }),
            ])
            .then(function (a) {
              var f = a[0];
              a[1];
              if (f.type === "video_cannot_be_casted") {
                c("recoverableViolation")(
                  "The video is not eligible to be casted. The cast request is ignored.",
                  "comet_cast_sender",
                  {
                    error: d(
                      "CastingErrorUtils"
                    ).appendCastingMetadataToExpandedError(
                      c("err")("video_cannot_be_casted"),
                      { videoID: k }
                    ),
                  }
                );
                return b("Promise").resolve();
              } else if (f.type === "error") {
                c("recoverableViolation")(
                  "There was a failure retrieving video cast payload. Video failed to play.",
                  "comet_cast_sender",
                  {
                    error: d(
                      "CastingErrorUtils"
                    ).appendCastingMetadataToExpandedError(f.error, {
                      videoID: k,
                    }),
                  }
                );
                return b("Promise").resolve();
              }
              a = e.$4.isCasting(j);
              a
                ? (a = e.$4.playVideoNow({ position: h }, f.payload))
                : (a = e.$4.startCasting(j, { position: h }, f.payload));
              return a.then(function () {
                var a = babelHelpers["extends"]({}, e.$1, e.$15());
                e.$12(a);
                a = d("CastingState").initialVideoChannelExperienceState();
                e.$13(a);
              });
            })
            ["catch"](function (a) {
              e.$14({
                data: { type: "cast_failed", videoID: k },
                timestamp: c("performanceAbsoluteNow")(),
              }),
                d("CastingErrorUtils").isChromecastError(a, "cancel") ||
                  c("recoverableViolation")(
                    "Failed to cast video.",
                    "comet_cast_sender",
                    {
                      error: d(
                        "CastingErrorUtils"
                      ).appendCastingMetadataToExpandedError(
                        c("getErrorSafe")(a),
                        { videoID: k }
                      ),
                    }
                  );
            })
            ["finally"](function () {
              var a = babelHelpers["extends"]({}, e.$1, { isCastPending: !1 });
              e.$12(a);
            })
        );
      };
      e.startPhotoCasting = function (a) {
        var e = this;
        a = a.environment;
        if (this.$1.isCastPending) return;
        this.$12(babelHelpers["extends"]({}, this.$1, { isCastPending: !0 }));
        this.$13(null);
        this.$14({
          data: { type: "photo_cast_requested" },
          timestamp: c("performanceAbsoluteNow")(),
        });
        c("promiseDone")(
          b("Promise")
            .all([
              d("fetchCtvCastPayload").fetchPhotoCastPayload({
                castSessionID: this.$3,
                environment: a,
              }),
              this.$4.getSession().then(function (a) {
                e.$12(
                  babelHelpers["extends"]({}, e.$1, { receiverIsConnected: !0 })
                );
                return a;
              }),
            ])
            .then(function (a) {
              var f = a[0];
              a[1];
              if (f.type === "error") {
                c("recoverableViolation")(
                  "There was a failure retrieving photo cast payload.",
                  "comet_cast_sender",
                  {
                    error: d(
                      "CastingErrorUtils"
                    ).appendCastingMetadataToExpandedError(f.error, {}),
                  }
                );
                return b("Promise").resolve();
              }
              a = e.$4.startCasting(k, {}, f.payload);
              return a.then(function () {
                var a = babelHelpers["extends"]({}, e.$1, e.$15());
                e.$12(a);
                e.$13(d("CastingState").initialPhotoExperienceState());
              });
            })
            ["catch"](function (a) {
              d("CastingErrorUtils").isChromecastError(a, "cancel") ||
                c("recoverableViolation")(
                  "Failed to start photo casting session.",
                  "comet_cast_sender",
                  {
                    error: d(
                      "CastingErrorUtils"
                    ).appendCastingMetadataToExpandedError(
                      c("getErrorSafe")(a),
                      {}
                    ),
                  }
                );
            })
            ["finally"](function () {
              var a = babelHelpers["extends"]({}, e.$1, { isCastPending: !1 });
              e.$12(a);
            })
        );
      };
      e.startAlbumSlideshow = function (a) {
        var e = this,
          f = a.albumID;
        a = a.environment;
        if (this.$1.isCastPending) return;
        this.$12(babelHelpers["extends"]({}, this.$1, { isCastPending: !0 }));
        this.$13(null);
        c("promiseDone")(
          b("Promise")
            .all([
              d("fetchCtvCastPayload").fetchAlbumCastPayload({
                albumID: f,
                castSessionID: this.$3,
                environment: a,
              }),
              this.$4.getSession().then(function (a) {
                e.$12(
                  babelHelpers["extends"]({}, e.$1, { receiverIsConnected: !0 })
                );
                return a;
              }),
            ])
            .then(function (a) {
              var f = a[0];
              a[1];
              if (f.type === "album_cannot_be_casted") {
                c("recoverableViolation")(
                  "The album is not eligible to be casted.",
                  "comet_cast_sender",
                  {
                    error: d(
                      "CastingErrorUtils"
                    ).appendCastingMetadataToExpandedError(
                      c("err")("album_cannot_be_casted"),
                      {}
                    ),
                  }
                );
                return b("Promise").resolve();
              } else if (f.type === "error") {
                c("recoverableViolation")(
                  "There was a failure retrieving album cast payload.",
                  "comet_cast_sender",
                  {
                    error: d(
                      "CastingErrorUtils"
                    ).appendCastingMetadataToExpandedError(f.error, {}),
                  }
                );
                return b("Promise").resolve();
              }
              a = e.$4.startCasting(i, {}, f.payload);
              return a.then(function () {
                var a = babelHelpers["extends"]({}, e.$1, e.$15());
                e.$12(a);
                a = d("CastingState").initialPhotoAlbumExperienceState();
                e.$13(a);
              });
            })
            ["catch"](function (a) {
              d("CastingErrorUtils").isChromecastError(a, "cancel") ||
                c("recoverableViolation")(
                  "Failed to cast album.",
                  "comet_cast_sender",
                  {
                    error: d(
                      "CastingErrorUtils"
                    ).appendCastingMetadataToExpandedError(
                      c("getErrorSafe")(a),
                      {}
                    ),
                  }
                );
            })
            ["finally"](function () {
              var a = babelHelpers["extends"]({}, e.$1, { isCastPending: !1 });
              e.$12(a);
            })
        );
      };
      e.disconnect = function () {
        c("promiseDone")(this.$4.stopCasting());
      };
      e.play = function () {
        c("promiseDone")(this.$4.playVideo());
      };
      e.pause = function () {
        c("promiseDone")(this.$4.pauseVideo());
      };
      e.setVolume = function (a) {
        c("promiseDone")(this.$4.setVolume(a));
      };
      e.mute = function () {
        c("promiseDone")(this.$4.mute());
      };
      e.unmute = function () {
        c("promiseDone")(this.$4.unmute());
      };
      e.seek = function (a) {
        c("promiseDone")(this.$4.seekVideo(a));
      };
      e.showSingleMedia = function (a) {
        var b = null;
        switch (a.type) {
          case "photo":
            b = { photo_id: a.photoID };
            break;
          case "video":
            b = { video_id: a.videoID };
            break;
          default:
            a.type;
            return;
        }
        c("promiseDone")(
          this.$4.showPhoto({ media_parameters: b, request_id: c("uuidv4")() })
        );
      };
      e.playAlbumSlideshow = function () {
        c("promiseDone")(this.$4.playAlbumSlideshow());
      };
      e.pauseAlbumSlideshow = function () {
        c("promiseDone")(this.$4.pauseAlbumSlideshow());
      };
      e.nextPhotoAlbumSlideshow = function () {
        c("promiseDone")(this.$4.nextPhotoAlbumSlideshow());
      };
      e.previousPhotoAlbumSlideshow = function () {
        c("promiseDone")(this.$4.previousPhotoAlbumSlideshow());
      };
      e.$12 = function (a) {
        a !== this.$1 &&
          ((this.$1 = a),
          this.$5.slice().forEach(function (b) {
            b(a);
          }));
      };
      e.$13 = function (a) {
        a !== this.$2 &&
          ((this.$2 = a),
          this.$6.slice().forEach(function (b) {
            b(a);
          }));
      };
      e.$14 = function (a) {
        this.$7.slice().forEach(function (b) {
          b(a);
        });
      };
      e.$16 = function (a) {
        var b = this.$1,
          d = this.$2;
        if (d != null && d.type === "video_channel") {
          var e = a.data.video_id,
            f = this.$4.getVolume() || 0,
            g = this.$4.isMuted() || !1;
          e != null &&
            this.$14({
              data: {
                playbackState: a.data.state,
                playerInfo: (a == null ? void 0 : a.player_info) || null,
                receiverInfo: (a == null ? void 0 : a.receiver_info) || null,
                type: "video_status_update",
                videoID: e,
              },
              timestamp: c("performanceAbsoluteNow")(),
            });
          g = {
            receiverIsConnected: !0,
            receiverIsMuted: g,
            receiverVolume: f,
          };
          if (e == null)
            this.$12(babelHelpers["extends"]({}, b, g)),
              this.$13(
                babelHelpers["extends"]({}, d, {
                  currentDuration: null,
                  currentPlaybackState: null,
                  currentPosition: null,
                  currentVideoID: null,
                })
              );
          else {
            f = babelHelpers["extends"]({}, b, g);
            this.$12(f);
            this.$13(
              babelHelpers["extends"]({}, d, {
                currentDuration:
                  a.data.duration != null ? a.data.duration : d.currentDuration,
                currentPlaybackState: a.data.state,
                currentPosition: a.data.position,
                currentVideoID: e,
              })
            );
          }
        }
      };
      e.$17 = function (a) {
        var b = this.$2;
        if (
          b != null &&
          b.type === "photo_album" &&
          a.data.name === "PhotoAlbum"
        ) {
          var c;
          a = d(
            "TV2CommsParseUtils"
          ).parseCastingReceiverPhotoAlbumReportedState(a.data.payload);
          a = a.media_state;
          c =
            ((c = (c = a.photo_state) == null ? void 0 : c.photo_id) != null
              ? c
              : (c = a.video_state) == null
              ? void 0
              : c.video_id) || null;
          a = this.$18(a);
          this.$13(
            babelHelpers["extends"]({}, b, {
              currentAssetID: c,
              currentPlaybackState: a,
            })
          );
        }
      };
      e.$15 = function () {
        return {
          receiverFriendlyName: this.$4.getFriendlyName() || null,
          receiverIsMuted: this.$4.isMuted() || null,
          receiverVolume: this.$4.getVolume() || 0,
        };
      };
      e.$18 = function (a) {
        if (a.photo_state != null)
          return a.photo_state.photo_playback_state === "play"
            ? "play"
            : "paused";
        else if (a.video_state != null)
          return ["play", "seeking"].includes(
            a.video_state.video_playback_state
          )
            ? "play"
            : "paused";
        else return null;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "CastingEventReporter",
  ["ConnectedTvLoggingFalcoEvent"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a) {
        var b = this;
        this.$4 = function (a) {
          switch (a.data.type) {
            case "cast_requested":
              b.logWithAvailableContext({
                event: "cast_requested",
                video_id_override: a.data.videoID,
              });
              b.$5(a);
              break;
            case "photo_cast_requested":
              b.logWithAvailableContext({ event: "photo_cast_requested" });
              b.$5(a);
              break;
            case "cast_failed":
              b.$5(a);
              break;
            case "video_status_update":
              b.$6(a.data.receiverInfo, a.data.playerInfo);
              b.$5(a);
              break;
            default:
              break;
          }
        };
        this.$1 = null;
        this.$2 = null;
        this.$3 = {
          cast_session_id: a,
          is_google_cast_bg: null,
          third_party_app_id: null,
          tv_os_version: null,
          tv_player_instance_key: null,
          tv_player_version: null,
          tv_session_id: null,
          tv_web_client_revision: null,
        };
      }
      var b = a.prototype;
      b.destroy = function () {
        this.$1 != null && this.$1(), (this.$1 = null);
      };
      b.bindToCastingController = function (a) {
        this.$1 = a.subscribeToCastingEvent(this.$4);
      };
      b.logWithAvailableContext = function (a) {
        var b = this;
        c("ConnectedTvLoggingFalcoEvent").log(function () {
          return babelHelpers["extends"]({}, b.$3, a);
        });
      };
      b.$5 = function (a) {
        var b = a.data;
        switch (b.type) {
          case "cast_requested":
            this.$2 = { data: b, timestamp: a.timestamp };
            break;
          case "cast_failed":
            var c = this.$2;
            this.logWithAvailableContext({
              event: "cast_failed",
              perf_time_ms: Math.floor(
                c != null ? a.timestamp - c.timestamp : 0
              ),
              video_id_override: b.videoID,
            });
            this.$2 = null;
            break;
          case "video_status_update":
            c = this.$2;
            if (c == null) break;
            var d = c.data.videoID;
            b.videoID === d && b.playbackState === "play"
              ? (this.logWithAvailableContext({
                  event: "cast_started",
                  perf_time_ms: Math.floor(a.timestamp - c.timestamp),
                }),
                (this.$2 = null))
              : b.videoID !== d && (this.$2 = null);
            break;
        }
      };
      b.$6 = function (a, b) {
        var c = (a == null ? void 0 : a.third_party_app_id) || null,
          d = (a == null ? void 0 : a.cast_receiver_logger_session_id) || null,
          e = (a == null ? void 0 : a.is_google_cast_bg) || null,
          f = (a == null ? void 0 : a.os_version) || null;
        a = (a == null ? void 0 : a.web_client_revision) || null;
        var g = (b == null ? void 0 : b.player_instance_key) || null;
        b = (b == null ? void 0 : b.player_version) || null;
        this.$3 = babelHelpers["extends"]({}, this.$3, {
          is_google_cast_bg: e,
          third_party_app_id: c,
          tv_os_version: f,
          tv_player_instance_key: g,
          tv_player_version: b,
          tv_session_id: d,
          tv_web_client_revision: a,
        });
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "TV2MessageTypes",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = "urn:x-cast:com.facebook.fb";
    b = "urn:x-cast:com.google.cast.media";
    f.FBAPP_CAST_PROTOCOL_NAMESPACE = a;
    f.GOOGLE_CAST_MEDIA_PROTOCOL_NAMESPACE = b;
  },
  66
);
__d(
  "TV2PhotoShowRequest",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return k(JSON.parse(a), m("TV2PhotoShowRequest"));
    }
    function b(a) {
      return JSON.stringify(l(a, m("TV2PhotoShowRequest")), null, 2);
    }
    function g(a, b, c) {
      c === void 0 && (c = "");
      if (c)
        throw Error(
          'Invalid value for key "' +
            c +
            '". Expected type ' +
            JSON.stringify(a) +
            " but got " +
            JSON.stringify(b)
        );
      throw Error(
        "Invalid value " + JSON.stringify(b) + " for type " + JSON.stringify(a)
      );
    }
    function h(a) {
      if (a.jsonToJS === void 0) {
        var b = {};
        a.props.forEach(function (a) {
          return (b[a.json] = { key: a.js, typ: a.typ });
        });
        a.jsonToJS = b;
      }
      return a.jsonToJS;
    }
    function i(a) {
      if (a.jsToJSON === void 0) {
        var b = {};
        a.props.forEach(function (a) {
          return (b[a.js] = { key: a.json, typ: a.typ });
        });
        a.jsToJSON = b;
      }
      return a.jsToJSON;
    }
    function j(a, b, c, d) {
      d === void 0 && (d = "");
      function e(b, a) {
        return typeof b === typeof a ? a : g(b, a, d);
      }
      function f(b, a) {
        var d = b.length;
        for (var e = 0; e < d; e++) {
          var f = b[e];
          try {
            return j(a, f, c);
          } catch (a) {}
        }
        return g(b, a);
      }
      function h(b, a) {
        return b.indexOf(a) !== -1 ? a : g(b, a);
      }
      function i(b, a) {
        return !Array.isArray(a)
          ? g("array", a)
          : a.map(function (a) {
              return j(a, b, c);
            });
      }
      function k(a) {
        if (a === null) return null;
        var b = new Date(a);
        return isNaN(b.valueOf()) ? g("Date", a) : b;
      }
      function l(b, d, a) {
        if (a === null || typeof a !== "object" || Array.isArray(a))
          return g("object", a);
        var e = {};
        Object.getOwnPropertyNames(b).forEach(function (d) {
          var f = b[d];
          d = Object.prototype.hasOwnProperty.call(a, d) ? a[d] : void 0;
          e[f.key] = j(d, f.typ, c, f.key);
        });
        Object.getOwnPropertyNames(a).forEach(function (f) {
          Object.prototype.hasOwnProperty.call(b, f) ||
            (e[f] = j(a[f], d, c, f));
        });
        return e;
      }
      if (b === "any") return a;
      if (b === null) return a === null ? a : g(b, a);
      if (b === !1) return g(b, a);
      while (typeof b === "object" && b.ref !== void 0) b = n[b.ref];
      if (Array.isArray(b)) return h(b, a);
      if (typeof b === "object")
        return Object.prototype.hasOwnProperty.call(b, "unionMembers")
          ? f(b.unionMembers, a)
          : Object.prototype.hasOwnProperty.call(b, "arrayItems")
          ? i(b.arrayItems, a)
          : Object.prototype.hasOwnProperty.call(b, "props")
          ? l(c(b), b.additional, a)
          : g(b, a);
      return b === Date && typeof a !== "number" ? k(a) : e(b, a);
    }
    function k(a, b) {
      return j(a, b, h);
    }
    function l(a, b) {
      return j(a, b, i);
    }
    function c() {
      for (var a = arguments.length, b = new Array(a), c = 0; c < a; c++)
        b[c] = arguments[c];
      return { unionMembers: b };
    }
    function d(a, b) {
      return { props: a, additional: b };
    }
    function m(a) {
      return { ref: a };
    }
    var n = {
      TV2PhotoShowRequest: d(
        [
          {
            json: "media_parameters",
            js: "media_parameters",
            typ: m("MediaParameters"),
          },
          { json: "request_id", js: "request_id", typ: "" },
        ],
        "any"
      ),
      MediaParameters: d(
        [
          { json: "photo_id", js: "photo_id", typ: c(void 0, "") },
          { json: "video_id", js: "video_id", typ: c(void 0, "") },
        ],
        "any"
      ),
    };
    e.exports = { TV2PhotoShowRequestToJson: b, toTV2PhotoShowRequest: a };
  },
  null
);
__d(
  "CastingReceiverManager",
  [
    "CastingChromecastScanner",
    "Promise",
    "Random",
    "SubscriptionsHandler",
    "TV2CommsParseUtils",
    "TV2MessageTypes",
    "TV2PhotoShowRequest",
    "promiseDone",
    "removeFromArray",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "1.2.0";
    a = (function () {
      function a(a) {
        var b = this;
        this.$5 = null;
        this.$6 = null;
        this.$10 = null;
        this.$11 = [];
        this.$12 = [];
        this.$13 = [];
        this.$14 = [];
        this.$15 = [];
        this.$16 = [];
        this.$17 = [];
        this.$18 = [];
        this.$19 = [];
        this.$4 = new (c("CastingChromecastScanner"))(
          a,
          d("TV2MessageTypes").FBAPP_CAST_PROTOCOL_NAMESPACE
        );
        this.$2 = null;
        this.$1 = !1;
        this.$3 = 0;
        this.$6 = null;
        this.$9 = new Map();
        this.$20 = new (c("SubscriptionsHandler"))();
        this.$20.addSubscriptions(
          this.$4.onStatusChanged(function (a) {
            var c = a.foundReceiver;
            b.$15.slice().forEach(function (a) {
              a(!!c);
            });
          }),
          this.$4.onSessionDisconnected(function () {
            b.$21(),
              b.$14.slice().forEach(function (a) {
                a();
              });
          }),
          this.$4.onSessionStarted(function (a) {
            b.$22(a);
          }),
          this.$4.onError(function (a, c) {
            b.$11.slice().forEach(function (b) {
              b(a, c);
            });
          })
        );
        this.$7 = this.$4.init();
        c("promiseDone")(
          this.$7.then(
            function () {
              (b.$2 = !0),
                (b.$1 = !0),
                b.$13.slice().forEach(function (a) {
                  a();
                });
            },
            function (a) {
              (b.$2 = !1),
                b.$12.slice().forEach(function (b) {
                  b(a);
                });
            }
          )
        );
      }
      var e = a.prototype;
      e.ready = function () {
        return this.$7;
      };
      e.hasSupport = function () {
        return this.$2;
      };
      e.hasFoundReceiver = function () {
        return this.$4.hasFoundReceiver();
      };
      e.isCasting = function (a) {
        var b = !!this.$5 && this.$5.isCasting();
        b && a != null && (b = this.$6 != null && this.$6.indexOf(a) >= 0);
        return b;
      };
      e.getSession = function () {
        var a = this;
        return this.ready()
          .then(function () {
            var b = a.$5;
            b != null && !b.isConnected() && a.$21();
          })
          .then(function () {
            if (a.$5) return a.$5;
            a.$8 || (a.$8 = a.$23());
            return a.$8;
          })
          ["catch"](function (b) {
            a.$11.slice().forEach(function (a) {
              a(b, "CastingReceiverManager.getSession");
            });
            throw b;
          })
          ["finally"](function () {
            a.$8 = null;
          });
      };
      e.startCasting = function (a, b, c) {
        var d = this;
        return this.$24(a, b, c).then(function (a) {
          a.success ? (d.$6 = a.target) : (d.$6 = null);
        });
      };
      e.stopCasting = function () {
        var a = this;
        return !this.isCasting()
          ? b("Promise").resolve()
          : this.ready()
              .then(function () {
                var b = a.$5;
                b != null && b.isDisconnected() && a.$21();
                return a.$5;
              })
              .then(function (a) {
                return a == null ? b("Promise").resolve(null) : a.disconnect();
              })
              .then(function () {
                a.$21();
              });
      };
      e.playVideoNow = function (a, c) {
        return !this.isCasting()
          ? b("Promise").resolve()
          : this.$25(
              "next_video",
              babelHelpers["extends"]({}, a, { auto_advance: !0 }),
              c
            ).then(function () {});
      };
      e.skipToNextVideo = function () {
        return !this.isCasting()
          ? b("Promise").resolve()
          : this.$25("skip_video").then(function () {});
      };
      e.playVideo = function (a) {
        return !this.isCasting()
          ? b("Promise").resolve()
          : this.$25("play_video", { position: a || 0 }).then(function () {});
      };
      e.pauseVideo = function () {
        return !this.isCasting()
          ? b("Promise").resolve()
          : this.$25("pause_video").then(function () {});
      };
      e.seekVideo = function (a) {
        return !this.isCasting()
          ? b("Promise").resolve()
          : this.$25("seek_video", { position: a }).then(function () {});
      };
      e.showPhoto = function (a) {
        return !this.isCasting()
          ? b("Promise").resolve()
          : this.$25(
              "show_photo",
              void 0,
              d("TV2PhotoShowRequest").TV2PhotoShowRequestToJson(a),
              "Photo"
            ).then(function () {});
      };
      e.stopVideo = function () {
        return !this.isCasting()
          ? b("Promise").resolve()
          : this.$25("stop_video").then(function () {});
      };
      e.playAlbumSlideshow = function () {
        return !this.isCasting()
          ? b("Promise").resolve()
          : this.$25("play_photo", void 0, void 0, "PhotoAlbum").then(
              function () {}
            );
      };
      e.pauseAlbumSlideshow = function () {
        return !this.isCasting()
          ? b("Promise").resolve()
          : this.$25("pause_photo", void 0, void 0, "PhotoAlbum").then(
              function () {}
            );
      };
      e.nextPhotoAlbumSlideshow = function () {
        return !this.isCasting()
          ? b("Promise").resolve()
          : this.$25("next_photo", void 0, void 0, "PhotoAlbum").then(
              function () {}
            );
      };
      e.previousPhotoAlbumSlideshow = function () {
        return !this.isCasting()
          ? b("Promise").resolve()
          : this.$25("previous_photo", void 0, void 0, "PhotoAlbum").then(
              function () {}
            );
      };
      e.getFriendlyName = function () {
        return this.$5 == null ? null : this.$5.getFriendlyName();
      };
      e.getVolume = function () {
        return this.$5 == null ? null : this.$5.getVolume();
      };
      e.setVolume = function (a) {
        if (!this.isCasting()) return b("Promise").resolve();
        return this.$5 == null ? b("Promise").resolve() : this.$5.setVolume(a);
      };
      e.isMuted = function () {
        if (!this.isCasting()) return null;
        return this.$5 == null ? null : this.$5.isMuted();
      };
      e.mute = function () {
        if (!this.isCasting()) return b("Promise").resolve();
        return this.$5 == null ? b("Promise").resolve() : this.$5.mute();
      };
      e.unmute = function () {
        if (!this.isCasting()) return b("Promise").resolve();
        return this.$5 == null ? b("Promise").resolve() : this.$5.unmute();
      };
      e.$26 = function () {
        var a = this,
          b = this.$27();
        return this.$28(function (a) {
          return {
            data: { client_cast_session: b, version: h },
            num: a,
            target: "version",
            timestamp: Date.now(),
            type: "version_request",
          };
        })
          .then(function (b) {
            var c = b.messageNum;
            return a.$29(function (a) {
              return a.response_num === c;
            });
          })
          .then(function (a) {
            if (a.type !== "version_response")
              throw c("unrecoverableViolation")(
                'Response message was not a "version_response"',
                "comet_cast_sender"
              );
            if (a.data == null)
              throw c("unrecoverableViolation")(
                "Version response is missing data",
                "comet_cast_sender"
              );
            return a.data;
          });
      };
      e.$24 = function (a, b, d) {
        var e = this,
          f = this.$27();
        return this.$28(function (c) {
          return {
            data: {
              client_cast_session: f,
              name: a,
              params: b,
              payload: d,
              version: h,
            },
            num: c,
            target: "version_launch",
            timestamp: Date.now(),
            type: "version_launch",
          };
        })
          .then(function (a) {
            var b = a.messageNum;
            return e.$29(function (a) {
              return a.response_num === b;
            });
          })
          .then(function (a) {
            if (a.type !== "version_launch_response")
              throw c("unrecoverableViolation")(
                'Response message was not a "version_launch_response"',
                "comet_cast_sender"
              );
            if (a.data == null)
              throw c("unrecoverableViolation")(
                "Version launch response is missing data",
                "comet_cast_sender"
              );
            return a.data;
          });
      };
      e.$30 = function () {
        var a = this;
        return this.$6 != null
          ? b("Promise").resolve(this.$6)
          : this.getSession()
              .then(function (b) {
                return a.$26();
              })
              .then(function (b) {
                var d = null;
                typeof b.currently_running_experience === "object" &&
                  (d = b.currently_running_experience);
                if (d == null)
                  throw c("unrecoverableViolation")(
                    "Session has no target",
                    "comet_cast_sender"
                  );
                a.$6 = d;
                return a.$6;
              });
      };
      e.$27 = function () {
        var a = null;
        localStorage && (a = localStorage.getItem("CastingSessionKey"));
        a == null &&
          ((a = c("Random").uint32().toString(16)),
          localStorage && localStorage.setItem("CastingSessionKey", a));
        return a;
      };
      e.$28 = function (a) {
        var b = (this.$3 += 2);
        return this.getSession()
          .then(function (d) {
            if (d == null)
              throw c("unrecoverableViolation")(
                "The message can not be sent without a session",
                "comet_cast_sender"
              );
            var e = a(b);
            return d.sendMessage(e);
          })
          .then(function () {
            return { messageNum: b };
          });
      };
      e.$29 = function (a) {
        return this.getSession().then(function (e) {
          if (e == null)
            throw c("unrecoverableViolation")(
              "The message cannot be received without a session",
              "comet_cast_sender"
            );
          return new (b("Promise"))(function (b, c) {
            var f = e.onMessage(function (e) {
              try {
                e =
                  d(
                    "TV2CommsParseUtils"
                  ).parseTV2CommsFBAppOutboundMessageFromJSON(e);
                if (
                  e.type === "version_response" ||
                  e.type === "version_launch_response" ||
                  e.type === "experience_state" ||
                  e.type === "command_result"
                ) {
                  var g = !a || a(e);
                  g && (f.remove(), b(e));
                }
              } catch (a) {
                f.remove(), c(a);
              }
            });
          });
        });
      };
      e.$25 = function (a, b, d, e) {
        var f = this;
        return this.$30()
          .then(function (c) {
            return f.$28(function (f) {
              return {
                data: { cmd: a, name: e, params: b, payload: d },
                num: f,
                target: c,
                timestamp: Date.now(),
                type: "experience_command",
              };
            });
          })
          .then(function (a) {
            var b = a.messageNum;
            return f.$29(function (a) {
              return a.response_num === b;
            });
          })
          .then(function (a) {
            if (a.type !== "command_result")
              throw c("unrecoverableViolation")(
                'Response message was not a "command_result"',
                "comet_cast_sender"
              );
            return a.data;
          });
      };
      e.$23 = function () {
        var a = this;
        return this.$4.getSession().then(function (b) {
          a.$5 == null && (a.$5 = b);
          return a.$5;
        });
      };
      e.$22 = function (a) {
        var b = this;
        this.$5 = a;
        var e = "extension";
        this.$8 && (e = "site");
        c("promiseDone")(
          this.$26().then(function (c) {
            var f = c.success;
            if (!f) return;
            var g = null;
            typeof c.currently_running_experience === "object" &&
              (g = c.currently_running_experience);
            g != null && (b.$6 = g);
            b.$18.slice().forEach(function (c) {
              c(a, { session: a, source: e, success: f, target: b.$6 });
            });
            b.$10 = a.onMessage(function (a) {
              try {
                var c =
                  d(
                    "TV2CommsParseUtils"
                  ).parseTV2CommsFBAppOutboundMessageFromJSON(a);
                b.$17.slice().forEach(function (a) {
                  a(c);
                });
              } catch (a) {
                b.$11.slice().forEach(function (b) {
                  b(a, "CastingReceiverManager._onSessionStartedHandler");
                });
              }
            });
          })
        );
      };
      e.$21 = function () {
        this.$10 != null && (this.$10.remove(), (this.$10 = null));
        var a = this.$5;
        a != null && a.destroy();
        this.$5 = null;
        this.$6 = null;
      };
      e.onError = function (a) {
        var b = this.$11;
        b.push(a);
        return {
          remove: function () {
            c("removeFromArray")(b, a);
          },
        };
      };
      e.onExperienceNotSupported = function (a) {
        var b = this.$12;
        b.push(a);
        return {
          remove: function () {
            c("removeFromArray")(b, a);
          },
        };
      };
      e.onExperienceReady = function (a) {
        var b = this.$13;
        b.push(a);
        return {
          remove: function () {
            c("removeFromArray")(b, a);
          },
        };
      };
      e.onReceiverDisconnected = function (a) {
        var b = this.$14;
        b.push(a);
        return {
          remove: function () {
            c("removeFromArray")(b, a);
          },
        };
      };
      e.onReceiverStatusChanged = function (a) {
        var b = this.$15;
        b.push(a);
        return {
          remove: function () {
            c("removeFromArray")(b, a);
          },
        };
      };
      e.onSessionDisconnected = function (a) {
        var b = this.$16;
        b.push(a);
        return {
          remove: function () {
            c("removeFromArray")(b, a);
          },
        };
      };
      e.onSessionMessage = function (a) {
        var b = this.$17;
        b.push(a);
        return {
          remove: function () {
            c("removeFromArray")(b, a);
          },
        };
      };
      e.onSessionStarted = function (a) {
        var b = this.$18;
        b.push(a);
        return {
          remove: function () {
            c("removeFromArray")(b, a);
          },
        };
      };
      e.onStopView = function (a) {
        var b = this.$19;
        b.push(a);
        return {
          remove: function () {
            c("removeFromArray")(b, a);
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
  "CastingControllerHooks",
  [
    "CastingContext",
    "CastingController",
    "CastingEventReporter",
    "CastingReceiverManager",
    "CurrentUser",
    "ExecutionEnvironment",
    "Promise",
    "guid",
    "qex",
    "react",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    f = d("react");
    var h = f.useContext,
      i = f.useEffect,
      j = f.useState,
      k = null,
      l = c("qex")._("1648");
    function m() {
      if (k != null) return k;
      if (l == null)
        throw c("unrecoverableViolation")(
          "Use useIsCastAvailable first to check if casting feature is available in this browser.",
          "comet_cast_sender"
        );
      var a = new (c("CastingReceiverManager"))(l),
        b = c("guid")(),
        d = new (c("CastingController"))(a, b);
      b = new (c("CastingEventReporter"))(b);
      b.bindToCastingController(d);
      k = {
        castingController: d,
        castingEventReporter: b,
        castingReceiverManager: a,
      };
      return k;
    }
    function n() {
      var a = o();
      a = a.castingReceiverManager;
      return a;
    }
    function o() {
      if (c("ExecutionEnvironment").canUseDOM && c("CurrentUser").isLoggedIn())
        return m();
      throw new (b("Promise"))(function () {});
    }
    function p() {
      var a = o();
      a = a.castingController;
      return a;
    }
    function a() {
      var a = n(),
        b = h(d("CastingContext").SetCastingControllerContext),
        c = j(!1),
        e = c[0],
        f = c[1];
      c = j(!1);
      var g = c[0],
        k = c[1];
      i(
        function () {
          var b = a.onExperienceReady(function () {
            f(a.hasSupport() || !1);
          });
          f(a.hasSupport() || !1);
          return function () {
            return b.remove();
          };
        },
        [a]
      );
      i(
        function () {
          var b = a.onReceiverStatusChanged(function () {
            k(a.hasFoundReceiver() || !1);
          });
          k(a.hasFoundReceiver() || !1);
          return function () {
            return b.remove();
          };
        },
        [a]
      );
      if (l == null) return !1;
      if (b == null) return !1;
      if (!e) return !1;
      return !g ? !1 : !0;
    }
    function e() {
      var a = p(),
        b = h(d("CastingContext").SetCastingControllerContext);
      if (b == null)
        throw c("unrecoverableViolation")(
          "Casting has to be initialized inside CastingProvider.",
          "comet_cast_sender"
        );
      i(
        function () {
          b(a);
        },
        [b, a]
      );
    }
    g.useCastingController = p;
    g.useIsCastAvailable = a;
    g.useCastingInitializeIfNecessary = e;
  },
  98
);
__d(
  "VideoPlayerCastControlIcon.react",
  [
    "fbt",
    "ix",
    "CastingControllerHooks",
    "CometRelay",
    "CometWatchAndScrollVideoContext",
    "JSResourceForInteraction",
    "VideoPlayerControlIcon.react",
    "VideoPlayerHooks",
    "emptyFunction",
    "fbicon",
    "react",
    "recoverableViolation",
    "useCometLazyDialog",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    b = d("react");
    var k = b.useCallback,
      l = b.useContext,
      m = c("JSResourceForInteraction")(
        "CometCastingStopWatchAndScrollDialog.react"
      ).__setRef("VideoPlayerCastControlIcon.react");
    function a(a) {
      var b = a.subOrigin;
      d("CastingControllerHooks").useCastingInitializeIfNecessary();
      var e = (a = d("VideoPlayerHooks").useVideoFbid()) != null ? a : "",
        f = d("VideoPlayerHooks").useController(),
        g = d("CometRelay").useRelayEnvironment(),
        n = d("CastingControllerHooks").useCastingController();
      a = l(c("CometWatchAndScrollVideoContext"));
      var o = c("useCometLazyDialog")(m),
        p = o[0],
        q = a == null ? void 0 : a.videoID,
        r = k(
          function () {
            if (e != null) {
              var a = f.getPlayheadPosition();
              n.startPlayVideoNow({
                environment: g,
                origin: "video_home",
                position: a,
                subOrigin: b,
                videoID: e,
              });
            } else
              c("recoverableViolation")(
                "Could not transition to Cast player because videoID was null",
                "comet_video_player"
              );
          },
          [n, g, b, f, e]
        );
      o = k(
        function () {
          q != null
            ? p(
                {
                  onClose: c("emptyFunction"),
                  onContinue: r,
                  startingVideoType: "cast",
                },
                c("emptyFunction")
              )
            : r();
        },
        [p, r, q]
      );
      a = h._("Diffuser la vid\u00e9o sur la TV");
      return j.jsx(c("VideoPlayerControlIcon.react"), {
        color: "white",
        icon: d("fbicon")._(i("788899"), 20),
        label: a,
        onPress: o,
        tooltip: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerCastControl.react",
  ["CastingControllerHooks", "VideoPlayerCastControlIcon.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      a = a.subOrigin;
      var b = d("CastingControllerHooks").useIsCastAvailable();
      return !b
        ? null
        : h.jsx(c("VideoPlayerCastControlIcon.react"), { subOrigin: a });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerCastControlShimImpl.modern.react",
  ["deferredLoadComponent", "react", "requireDeferred"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    a = c("deferredLoadComponent")(
      c("requireDeferred")("VideoPlayerCastControl.react").__setRef(
        "VideoPlayerCastControlShimImpl.modern.react"
      )
    );
    g["default"] = a;
  },
  98
);
