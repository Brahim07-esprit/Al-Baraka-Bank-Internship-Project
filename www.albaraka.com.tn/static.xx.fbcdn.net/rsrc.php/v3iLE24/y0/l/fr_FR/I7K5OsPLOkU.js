/*FB_PKG_DELIM*/

__d(
  "FBEmojiAliases",
  [],
  function (a, b, c, d, e, f) {
    e.exports = {};
  },
  null
);
__d(
  "MessengerEmojiConfig",
  [],
  function (a, b, c, d, e, f) {
    e.exports = { emoji_colors: [0, 127995, 127996, 127997, 127998, 127999] };
  },
  null
);
__d(
  "MessengerPlatformClientTypedLogger",
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
          "logger:MessengerPlatformClientLoggerConfig",
          this.$1,
          b("Banzai").BASIC,
          a
        );
      };
      c.logVital = function (a) {
        b("GeneratedLoggerUtils").log(
          "logger:MessengerPlatformClientLoggerConfig",
          this.$1,
          b("Banzai").VITAL,
          a
        );
      };
      c.logImmediately = function (a) {
        b("GeneratedLoggerUtils").log(
          "logger:MessengerPlatformClientLoggerConfig",
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
      c.setAppID = function (a) {
        this.$1.appid = a;
        return this;
      };
      c.setAppversion = function (a) {
        this.$1.appversion = a;
        return this;
      };
      c.setClientUserID = function (a) {
        this.$1.client_userid = a;
        return this;
      };
      c.setClienttime = function (a) {
        this.$1.clienttime = a;
        return this;
      };
      c.setCountry = function (a) {
        this.$1.country = a;
        return this;
      };
      c.setDeviceid = function (a) {
        this.$1.deviceid = a;
        return this;
      };
      c.setExtraClientData = function (a) {
        this.$1.extra_client_data = a;
        return this;
      };
      c.setIsemployee = function (a) {
        this.$1.isemployee = a;
        return this;
      };
      c.setLoggingToken = function (a) {
        this.$1.logging_token = a;
        return this;
      };
      c.setName = function (a) {
        this.$1.name = a;
        return this;
      };
      c.setRawclienttime = function (a) {
        this.$1.rawclienttime = a;
        return this;
      };
      c.setSessionid = function (a) {
        this.$1.sessionid = a;
        return this;
      };
      c.setThreadID = function (a) {
        this.$1.thread_id = a;
        return this;
      };
      return a;
    })();
    c = {
      appid: !0,
      appversion: !0,
      client_userid: !0,
      clienttime: !0,
      country: !0,
      deviceid: !0,
      extra_client_data: !0,
      isemployee: !0,
      logging_token: !0,
      name: !0,
      rawclienttime: !0,
      sessionid: !0,
      thread_id: !0,
    };
    f["default"] = a;
  },
  66
);
__d(
  "MessengerUserProfileLocationUtilsQuery_facebookRelayOperation",
  [],
  function (a, b, c, d, e, f) {
    e.exports = "5227786023908613";
  },
  null
);
__d(
  "MessengerUserProfileLocationUtilsQuery.graphql",
  ["MessengerUserProfileLocationUtilsQuery_facebookRelayOperation"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
        alias: null,
        args: null,
        concreteType: "StreetAddress",
        kind: "LinkedField",
        name: "address",
        plural: !1,
        selections: [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "postal_code",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "region",
            storageKey: null,
          },
        ],
        storageKey: null,
      };
      return {
        fragment: {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "MessengerUserProfileLocationUtilsQuery",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "Viewer",
              kind: "LinkedField",
              name: "viewer",
              plural: !1,
              selections: [
                {
                  alias: "user",
                  args: null,
                  concreteType: "User",
                  kind: "LinkedField",
                  name: "account_user",
                  plural: !1,
                  selections: [a],
                  storageKey: null,
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
          argumentDefinitions: [],
          kind: "Operation",
          name: "MessengerUserProfileLocationUtilsQuery",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "Viewer",
              kind: "LinkedField",
              name: "viewer",
              plural: !1,
              selections: [
                {
                  alias: "user",
                  args: null,
                  concreteType: "User",
                  kind: "LinkedField",
                  name: "account_user",
                  plural: !1,
                  selections: [
                    a,
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
              storageKey: null,
            },
          ],
        },
        params: {
          id: b(
            "MessengerUserProfileLocationUtilsQuery_facebookRelayOperation"
          ),
          metadata: {},
          name: "MessengerUserProfileLocationUtilsQuery",
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
  "GraphQLMessengerPlatformCtaPostHandlingMutation_facebookRelayOperation",
  [],
  function (a, b, c, d, e, f) {
    e.exports = "4973572169363354";
  },
  null
);
__d(
  "GraphQLMessengerPlatformCtaPostHandlingMutation.graphql",
  ["GraphQLMessengerPlatformCtaPostHandlingMutation_facebookRelayOperation"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        c = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType: "MessengerPlatformCtaPostHandlingResponsePayload",
            kind: "LinkedField",
            name: "messenger_platform_cta_post_handling",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "client_mutation_id",
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
          name: "GraphQLMessengerPlatformCtaPostHandlingMutation",
          selections: c,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "GraphQLMessengerPlatformCtaPostHandlingMutation",
          selections: c,
        },
        params: {
          id: b(
            "GraphQLMessengerPlatformCtaPostHandlingMutation_facebookRelayOperation"
          ),
          metadata: {},
          name: "GraphQLMessengerPlatformCtaPostHandlingMutation",
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
  "ChatPluginSendMessageMutation_facebookRelayOperation",
  [],
  function (a, b, c, d, e, f) {
    e.exports = "5738331446270649";
  },
  null
);
__d(
  "ChatPluginSendMessageMutation.graphql",
  ["ChatPluginSendMessageMutation_facebookRelayOperation"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        c = [{ kind: "Variable", name: "data", variableName: "input" }],
        d = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "client_mutation_id",
          storageKey: null,
        },
        e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "timestamp_precise",
          storageKey: null,
        },
        f = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "message_id",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "ChatPluginSendMessageMutation",
          selections: [
            {
              alias: null,
              args: c,
              concreteType: "ChatPluginSendMessageResponsePayload",
              kind: "LinkedField",
              name: "chat_plugin_send_message",
              plural: !1,
              selections: [
                d,
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "message",
                  plural: !1,
                  selections: [e, f],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "ChatPluginSendMessageMutation",
          selections: [
            {
              alias: null,
              args: c,
              concreteType: "ChatPluginSendMessageResponsePayload",
              kind: "LinkedField",
              name: "chat_plugin_send_message",
              plural: !1,
              selections: [
                d,
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "message",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "__typename",
                      storageKey: null,
                    },
                    e,
                    f,
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
              storageKey: null,
            },
          ],
        },
        params: {
          id: b("ChatPluginSendMessageMutation_facebookRelayOperation"),
          metadata: {},
          name: "ChatPluginSendMessageMutation",
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
  "LiveChatPluginUserContactQuery_facebookRelayOperation",
  [],
  function (a, b, c, d, e, f) {
    e.exports = "5310216082322887";
  },
  null
);
__d(
  "LiveChatPluginUserContactQuery.graphql",
  ["LiveChatPluginUserContactQuery_facebookRelayOperation"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          alias: null,
          args: null,
          concreteType: "Phone",
          kind: "LinkedField",
          name: "all_phones",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "is_preferred",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "PhoneNumber",
              kind: "LinkedField",
              name: "phone_number",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "universal_number",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        c = {
          alias: null,
          args: null,
          concreteType: "Email",
          kind: "LinkedField",
          name: "all_emails",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "display_email",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "is_primary",
              storageKey: null,
            },
          ],
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "LiveChatPluginUserContactQuery",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "Viewer",
              kind: "LinkedField",
              name: "viewer",
              plural: !1,
              selections: [
                {
                  alias: "user",
                  args: null,
                  concreteType: "User",
                  kind: "LinkedField",
                  name: "account_user",
                  plural: !1,
                  selections: [a],
                  storageKey: null,
                },
                c,
              ],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "LiveChatPluginUserContactQuery",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "Viewer",
              kind: "LinkedField",
              name: "viewer",
              plural: !1,
              selections: [
                {
                  alias: "user",
                  args: null,
                  concreteType: "User",
                  kind: "LinkedField",
                  name: "account_user",
                  plural: !1,
                  selections: [
                    a,
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
                c,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: b("LiveChatPluginUserContactQuery_facebookRelayOperation"),
          metadata: {},
          name: "LiveChatPluginUserContactQuery",
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
  "LivechatPluginGuestMessageThreadQueryContainerQuery_facebookRelayOperation",
  [],
  function (a, b, c, d, e, f) {
    e.exports = "6102896066457398";
  },
  null
);
__d(
  "LivechatPluginGuestMessageThreadQueryContainerQuery.graphql",
  [
    "LivechatPluginGuestMessageThreadQueryContainerQuery_facebookRelayOperation",
  ],
  function (a, aa, b, c, d, e) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "data" }],
        b = [{ kind: "Variable", name: "data", variableName: "data" }],
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "folder",
          storageKey: null,
        },
        d = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "unread_count",
          storageKey: null,
        },
        e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "messages_count",
          storageKey: null,
        },
        f = {
          alias: "last_read_receipt",
          args: [{ kind: "Literal", name: "last", value: 1 }],
          concreteType: "MessagingReadReceiptsOfThreadConnection",
          kind: "LinkedField",
          name: "read_receipts",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "MessagingReadReceipt",
              kind: "LinkedField",
              name: "nodes",
              plural: !0,
              selections: [
                {
                  alias: "action",
                  args: null,
                  kind: "ScalarField",
                  name: "timestamp_precise",
                  storageKey: null,
                },
                {
                  alias: "watermark",
                  args: null,
                  kind: "ScalarField",
                  name: "timestamp_precise",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: "read_receipts(last:1)",
        },
        g = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        h = {
          alias: null,
          args: null,
          concreteType: "MessagingParticipant",
          kind: "LinkedField",
          name: "message_sender",
          plural: !1,
          selections: [
            g,
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "email",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "message_id",
          storageKey: null,
        },
        j = {
          alias: null,
          args: null,
          concreteType: "MessageSourceData",
          kind: "LinkedField",
          name: "message_source_data",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "message_source",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        k = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "tags_list",
          storageKey: null,
        },
        l = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "offline_threading_id",
          storageKey: null,
        },
        m = {
          alias: null,
          args: null,
          concreteType: "MessageThreadKey",
          kind: "LinkedField",
          name: "message_thread_key",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "thread_fbid",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "other_user_id",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "timestamp_precise",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "platform_xmd_encoded",
          storageKey: null,
        },
        p = {
          alias: null,
          args: null,
          concreteType: "MessageReaction",
          kind: "LinkedField",
          name: "message_reactions",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "reaction",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        q = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_sponsored",
          storageKey: null,
        },
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_user_generated",
          storageKey: null,
        },
        s = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "snippet",
          storageKey: null,
        },
        t = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "extensible_message_admin_text_type",
              storageKey: null,
            },
            s,
          ],
          type: "GenericAdminTextMessage",
          abstractKey: null,
        },
        u = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "text",
            storageKey: null,
          },
        ],
        v = {
          alias: null,
          args: null,
          concreteType: "TextWithEntities",
          kind: "LinkedField",
          name: "message",
          plural: !1,
          selections: u,
          storageKey: null,
        },
        w = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "url",
          storageKey: null,
        },
        x = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "file_type",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "filename",
              storageKey: null,
            },
            w,
          ],
          type: "MessageFile",
          abstractKey: null,
        },
        y = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "uri",
          storageKey: null,
        },
        z = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "height",
          storageKey: null,
        },
        A = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "width",
          storageKey: null,
        },
        B = {
          alias: null,
          args: null,
          concreteType: "Image",
          kind: "LinkedField",
          name: "image",
          plural: !1,
          selections: [y, z, A],
          storageKey: null,
        },
        C = {
          kind: "InlineFragment",
          selections: [B, w],
          type: "MessageImage",
          abstractKey: null,
        },
        D = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "legacy_attachment_id",
          storageKey: null,
        },
        E = {
          alias: null,
          args: null,
          concreteType: "Vect2",
          kind: "LinkedField",
          name: "original_dimensions",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "x",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "y",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        F = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "playable_url",
          storageKey: null,
        };
      B = {
        kind: "InlineFragment",
        selections: [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "video_type",
            storageKey: null,
          },
          D,
          E,
          F,
          w,
          B,
        ],
        type: "MessageVideo",
        abstractKey: null,
      };
      var G = [z, y, A];
      D = {
        kind: "InlineFragment",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "Image",
            kind: "LinkedField",
            name: "animated_image",
            plural: !1,
            selections: G,
            storageKey: null,
          },
          D,
          E,
          F,
          w,
          {
            alias: null,
            args: null,
            concreteType: "Image",
            kind: "LinkedField",
            name: "image",
            plural: !1,
            selections: G,
            storageKey: null,
          },
        ],
        type: "MessageAnimatedImage",
        abstractKey: null,
      };
      E = [g];
      G = [
        { kind: "Literal", name: "height", value: 240 },
        { kind: "Literal", name: "width", value: 240 },
      ];
      var H = [y],
        I = [
          { kind: "Literal", name: "height", value: 120 },
          { kind: "Literal", name: "width", value: 120 },
        ];
      I = {
        alias: null,
        args: null,
        concreteType: "Sticker",
        kind: "LinkedField",
        name: "sticker",
        plural: !1,
        selections: [
          g,
          {
            alias: null,
            args: null,
            concreteType: "StickerPack",
            kind: "LinkedField",
            name: "pack",
            plural: !1,
            selections: E,
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "label",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "frame_count",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "frame_rate",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "frames_per_row",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "frames_per_column",
            storageKey: null,
          },
          {
            alias: "sprite_image_2x",
            args: G,
            concreteType: "Image",
            kind: "LinkedField",
            name: "sprite_image",
            plural: !1,
            selections: H,
            storageKey: "sprite_image(height:240,width:240)",
          },
          {
            alias: null,
            args: I,
            concreteType: "Image",
            kind: "LinkedField",
            name: "sprite_image",
            plural: !1,
            selections: H,
            storageKey: "sprite_image(height:120,width:120)",
          },
          {
            alias: null,
            args: I,
            concreteType: "Image",
            kind: "LinkedField",
            name: "padded_sprite_image",
            plural: !1,
            selections: H,
            storageKey: "padded_sprite_image(height:120,width:120)",
          },
          {
            alias: "padded_sprite_image_2x",
            args: G,
            concreteType: "Image",
            kind: "LinkedField",
            name: "padded_sprite_image",
            plural: !1,
            selections: H,
            storageKey: "padded_sprite_image(height:240,width:240)",
          },
          w,
          z,
          A,
        ],
        storageKey: null,
      };
      G = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "unread",
        storageKey: null,
      };
      H = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "action_url",
        storageKey: null,
      };
      var J = [
        H,
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "target_id",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "title",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "type",
          storageKey: null,
        },
      ];
      J = {
        alias: null,
        args: null,
        concreteType: "MessengerGenericXMATemplateExtraFields",
        kind: "LinkedField",
        name: "messenger_generic_xma_template_extra_info",
        plural: !1,
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "MessengerGenericXMATemplateCTA",
            kind: "LinkedField",
            name: "cta1",
            plural: !1,
            selections: J,
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "MessengerGenericXMATemplateCTA",
            kind: "LinkedField",
            name: "cta2",
            plural: !1,
            selections: J,
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "MessengerGenericXMATemplateCTA",
            kind: "LinkedField",
            name: "cta3",
            plural: !1,
            selections: J,
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "MessengerGenericXMATemplateCTA",
            kind: "LinkedField",
            name: "default_cta",
            plural: !1,
            selections: J,
            storageKey: null,
          },
        ],
        storageKey: null,
      };
      var K = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "deduplication_key",
          storageKey: null,
        },
        L = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "style_list",
          storageKey: null,
        },
        M = {
          alias: null,
          args: null,
          concreteType: "TextWithEntities",
          kind: "LinkedField",
          name: "source",
          plural: !1,
          selections: u,
          storageKey: null,
        };
      y = [y, A, z];
      var N = {
        alias: null,
        args: null,
        concreteType: "Image",
        kind: "LinkedField",
        name: "image",
        plural: !1,
        selections: y,
        storageKey: null,
      };
      y = {
        alias: null,
        args: null,
        concreteType: "Image",
        kind: "LinkedField",
        name: "animated_image",
        plural: !1,
        selections: y,
        storageKey: null,
      };
      var O = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_playable",
          storageKey: null,
        },
        P = {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "media",
          plural: !1,
          selections: [N, y, O],
          storageKey: null,
        },
        Q = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "subtitle",
          storageKey: null,
        },
        R = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "template_type",
          storageKey: null,
        },
        S = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "image_width",
          storageKey: null,
        };
      H = [
        g,
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "page_id",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_disabled",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_mutable_by_server",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "cta_render_style",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "action_open_type",
          storageKey: null,
        },
        H,
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "action_title",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "logging_token",
          storageKey: null,
        },
      ];
      var T = {
        alias: null,
        args: null,
        concreteType: "MessengerCallToAction",
        kind: "LinkedField",
        name: "call_to_actions",
        plural: !0,
        selections: H,
        storageKey: null,
      };
      H = {
        alias: null,
        args: null,
        concreteType: "MessengerCallToAction",
        kind: "LinkedField",
        name: "default_action",
        plural: !1,
        selections: H,
        storageKey: null,
      };
      F = {
        kind: "InlineFragment",
        selections: [F, z, A, g],
        type: "Video",
        abstractKey: null,
      };
      z = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "description",
        storageKey: null,
      };
      A = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "image_url",
        storageKey: null,
      };
      var U = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        V = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "first_metaline",
          storageKey: null,
        },
        W = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "second_metaline",
          storageKey: null,
        },
        X = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "third_metaline",
          storageKey: null,
        },
        Y = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "image_aspect_ratio",
          storageKey: null,
        },
        ba = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "target_url",
          storageKey: null,
        },
        ca = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "source_name",
          storageKey: null,
        };
      u = {
        alias: null,
        args: null,
        concreteType: "TextWithEntities",
        kind: "LinkedField",
        name: "title_with_entities",
        plural: !1,
        selections: u,
        storageKey: null,
      };
      var Z = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        $ = {
          kind: "InlineFragment",
          selections: E,
          type: "Node",
          abstractKey: "__isNode",
        },
        da = {
          kind: "InlineFragment",
          selections: E,
          type: "DynamicFeedAdAttachmentMedia",
          abstractKey: null,
        },
        ea = {
          kind: "InlineFragment",
          selections: E,
          type: "GenericAttachmentMedia",
          abstractKey: null,
        },
        fa = {
          kind: "InlineFragment",
          selections: E,
          type: "MontageImage",
          abstractKey: null,
        },
        ga = {
          kind: "InlineFragment",
          selections: E,
          type: "MontageVideo",
          abstractKey: null,
        };
      N = {
        alias: null,
        args: null,
        concreteType: null,
        kind: "LinkedField",
        name: "media",
        plural: !1,
        selections: [Z, N, y, O, $, da, ea, fa, ga],
        storageKey: null,
      };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "LivechatPluginGuestMessageThreadQueryContainerQuery",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "MessageThread",
              kind: "LinkedField",
              name: "guest_message_thread",
              plural: !1,
              selections: [
                c,
                d,
                e,
                f,
                {
                  alias: null,
                  args: null,
                  concreteType: "MessagesOfThreadConnection",
                  kind: "LinkedField",
                  name: "messages",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "nodes",
                      plural: !0,
                      selections: [
                        h,
                        i,
                        j,
                        k,
                        l,
                        m,
                        n,
                        o,
                        p,
                        q,
                        r,
                        t,
                        {
                          kind: "InlineFragment",
                          selections: [
                            v,
                            {
                              alias: null,
                              args: null,
                              concreteType: null,
                              kind: "LinkedField",
                              name: "blob_attachments",
                              plural: !0,
                              selections: [x, C, B, D],
                              storageKey: null,
                            },
                            I,
                            G,
                            {
                              alias: null,
                              args: null,
                              concreteType: "ExtensibleMessageAttachment",
                              kind: "LinkedField",
                              name: "extensible_attachment",
                              plural: !1,
                              selections: [
                                g,
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "StoryAttachment",
                                  kind: "LinkedField",
                                  name: "story_attachment",
                                  plural: !1,
                                  selections: [
                                    J,
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "StoryAttachment",
                                      kind: "LinkedField",
                                      name: "subattachments",
                                      plural: !0,
                                      selections: [
                                        K,
                                        L,
                                        M,
                                        P,
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: null,
                                          kind: "LinkedField",
                                          name: "target",
                                          plural: !1,
                                          selections: E,
                                          storageKey: null,
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                    K,
                                    L,
                                    M,
                                    P,
                                    Q,
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: null,
                                      kind: "LinkedField",
                                      name: "target",
                                      plural: !1,
                                      selections: [
                                        g,
                                        {
                                          kind: "InlineFragment",
                                          selections: [
                                            R,
                                            w,
                                            S,
                                            s,
                                            T,
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType:
                                                "MessengerBusinessMessageItemsConnection",
                                              kind: "LinkedField",
                                              name: "business_items",
                                              plural: !1,
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "MessengerRetailItem",
                                                  kind: "LinkedField",
                                                  name: "nodes",
                                                  plural: !0,
                                                  selections: [
                                                    T,
                                                    H,
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType: null,
                                                      kind: "LinkedField",
                                                      name: "media_blob_attachments",
                                                      plural: !0,
                                                      selections: [F],
                                                      storageKey: null,
                                                    },
                                                    z,
                                                    A,
                                                    U,
                                                    V,
                                                    W,
                                                    X,
                                                    g,
                                                    Y,
                                                    ba,
                                                    ca,
                                                  ],
                                                  storageKey: null,
                                                },
                                              ],
                                              storageKey: null,
                                            },
                                          ],
                                          type: "MessengerBusinessMessage",
                                          abstractKey: null,
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                    u,
                                  ],
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          type: "UserMessage",
                          abstractKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
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
          argumentDefinitions: a,
          kind: "Operation",
          name: "LivechatPluginGuestMessageThreadQueryContainerQuery",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "MessageThread",
              kind: "LinkedField",
              name: "guest_message_thread",
              plural: !1,
              selections: [
                c,
                d,
                e,
                f,
                {
                  alias: null,
                  args: null,
                  concreteType: "MessagesOfThreadConnection",
                  kind: "LinkedField",
                  name: "messages",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "nodes",
                      plural: !0,
                      selections: [
                        Z,
                        h,
                        i,
                        j,
                        k,
                        l,
                        m,
                        n,
                        o,
                        p,
                        q,
                        r,
                        g,
                        t,
                        {
                          kind: "InlineFragment",
                          selections: [
                            v,
                            {
                              alias: null,
                              args: null,
                              concreteType: null,
                              kind: "LinkedField",
                              name: "blob_attachments",
                              plural: !0,
                              selections: [Z, x, C, B, D, $],
                              storageKey: null,
                            },
                            I,
                            G,
                            {
                              alias: null,
                              args: null,
                              concreteType: "ExtensibleMessageAttachment",
                              kind: "LinkedField",
                              name: "extensible_attachment",
                              plural: !1,
                              selections: [
                                g,
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "StoryAttachment",
                                  kind: "LinkedField",
                                  name: "story_attachment",
                                  plural: !1,
                                  selections: [
                                    J,
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "StoryAttachment",
                                      kind: "LinkedField",
                                      name: "subattachments",
                                      plural: !0,
                                      selections: [
                                        K,
                                        L,
                                        M,
                                        N,
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: null,
                                          kind: "LinkedField",
                                          name: "target",
                                          plural: !1,
                                          selections: [Z, g],
                                          storageKey: null,
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                    K,
                                    L,
                                    M,
                                    N,
                                    Q,
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: null,
                                      kind: "LinkedField",
                                      name: "target",
                                      plural: !1,
                                      selections: [
                                        Z,
                                        g,
                                        {
                                          kind: "InlineFragment",
                                          selections: [
                                            R,
                                            w,
                                            S,
                                            s,
                                            T,
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType:
                                                "MessengerBusinessMessageItemsConnection",
                                              kind: "LinkedField",
                                              name: "business_items",
                                              plural: !1,
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  concreteType:
                                                    "MessengerRetailItem",
                                                  kind: "LinkedField",
                                                  name: "nodes",
                                                  plural: !0,
                                                  selections: [
                                                    T,
                                                    H,
                                                    {
                                                      alias: null,
                                                      args: null,
                                                      concreteType: null,
                                                      kind: "LinkedField",
                                                      name: "media_blob_attachments",
                                                      plural: !0,
                                                      selections: [
                                                        Z,
                                                        F,
                                                        $,
                                                        da,
                                                        ea,
                                                        fa,
                                                        ga,
                                                      ],
                                                      storageKey: null,
                                                    },
                                                    z,
                                                    A,
                                                    U,
                                                    V,
                                                    W,
                                                    X,
                                                    g,
                                                    Y,
                                                    ba,
                                                    ca,
                                                  ],
                                                  storageKey: null,
                                                },
                                              ],
                                              storageKey: null,
                                            },
                                          ],
                                          type: "MessengerBusinessMessage",
                                          abstractKey: null,
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                    u,
                                  ],
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          type: "UserMessage",
                          abstractKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                g,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: aa(
            "LivechatPluginGuestMessageThreadQueryContainerQuery_facebookRelayOperation"
          ),
          metadata: {},
          name: "LivechatPluginGuestMessageThreadQueryContainerQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    d.exports = a;
  },
  null
);
__d(
  "FBCarouselArrow.react",
  [
    "cx",
    "ix",
    "xuiglyph",
    "CenteredContainer.react",
    "Image.react",
    "Locale",
    "joinClasses",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i, j) {
    var k = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
          f[g] = arguments[g];
        return (
          ((b = c = a.call.apply(a, [this].concat(f)) || this),
          (c.$1 = function () {
            var a = i("88862"),
              b = i("88874");
            if (d("Locale").isRTL()) {
              var e = [b, a];
              a = e[0];
              b = e[1];
            }
            return c.props.direction === "forward" ? b : a;
          }),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      var e = b.prototype;
      e.render = function () {
        var a = c("joinClasses")(
            this.props.className,
            "_10sf" +
              (this.props.fullBleed ? " _5x5-" : "") +
              (this.props.direction === "forward" ? " _5x5_" : "") +
              (this.props.direction === "backward" ? " _5x60" : "")
          ),
          b = this.props;
        b.fullBleed;
        b = babelHelpers.objectWithoutPropertiesLoose(b, ["fullBleed"]);
        return k.jsx(
          "div",
          babelHelpers["extends"]({}, b, {
            className: a,
            children: k.jsx(c("CenteredContainer.react"), {
              className: "_5x6d",
              vertical: !0,
              children: k.jsx(c("Image.react"), {
                className: "_3-8w",
                src: this.$1(),
              }),
            }),
          })
        );
      };
      return b;
    })(k.Component);
    g["default"] = a;
  },
  98
);
__d(
  "AdsArrowedContainer.react",
  [
    "fbt",
    "invariant",
    "FBCarouselArrow.react",
    "FBOverlayBase.react",
    "FBOverlayContainer.react",
    "FBOverlayElement.react",
    "Link.react",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = { marginTopArrow: { marginTop: "xw7yly9", $$css: !0 } };
    function a(a) {
      var b = a.children,
        d = a.className,
        e = a.onDecrement,
        g = a.onIncrement,
        l = a.isArrowCentered,
        m = l === void 0 ? !1 : l;
      l = a.isLeftArrowOverlappingContent;
      var n = l === void 0 ? !0 : l;
      function o(a) {
        var b, d;
        switch (a) {
          case "left":
            b = e !== null;
            d = e;
            break;
          case "right":
            b = g !== null;
            d = g;
            break;
          default:
            i(0, 6086, a);
        }
        return !b
          ? null
          : j.jsx(c("Link.react"), {
              "aria-label":
                a === "left"
                  ? h._("revenir en arri\u00e8re")
                  : h._("Naviguer vers l\u2019avant"),
              className: c("stylex")(!m && k.marginTopArrow),
              onClick: d,
              children: j.jsx(c("FBCarouselArrow.react"), {
                direction: a === "left" ? "backward" : "forward",
                fullBleed: a === "left" && n,
              }),
            });
      }
      o.displayName = o.name + " [from " + f.id + "]";
      function p(a, b) {
        if (b != null)
          if (m)
            return j.jsx(c("FBOverlayElement.react"), {
              horizontal: a,
              vertical: "middle",
              children: b,
            });
          else
            return j.jsx(c("FBOverlayElement.react"), {
              horizontal: a,
              children: b,
            });
        return null;
      }
      p.displayName = p.name + " [from " + f.id + "]";
      a = o("left");
      l = o("right");
      o = p(n ? "left" : "leftOfChild", a);
      a = p("right", l);
      p = {
        children: b,
        className: d,
        onDecrement: e,
        onIncrement: g,
        isArrowCentered: m,
        isLeftArrowOverlappingContent: n,
      };
      p.isArrowCentered;
      p.onDecrement;
      p.onIncrement;
      p.isLeftArrowOverlappingContent;
      l = babelHelpers.objectWithoutPropertiesLoose(p, [
        "isArrowCentered",
        "onDecrement",
        "onIncrement",
        "isLeftArrowOverlappingContent",
      ]);
      return j.jsxs(
        c("FBOverlayContainer.react"),
        babelHelpers["extends"]({}, l, {
          children: [j.jsx(c("FBOverlayBase.react"), { children: b }), o, a],
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "AdsCarousel.react",
  [
    "cx",
    "FlexLayout.react",
    "Locale",
    "ResponsiveBlock.react",
    "clamp",
    "emptyFunction",
    "joinClasses",
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
          (c.state = { computedOffset: 0 }),
          (c.outerRef = i.createRef()),
          (c.innerRef = i.createRef()),
          (c.childrenRefs = []),
          (c.$5 = function (a, b) {
            c.$1(c.props.index);
          }),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      var e = b.prototype;
      e.componentDidMount = function () {
        this.$1(this.props.index);
      };
      e.componentDidUpdate = function () {
        this.$1(this.props.index);
      };
      e.$1 = function (a) {
        if (!this.outerRef.current) return;
        if (
          !(this.outerRef.current instanceof HTMLElement) ||
          !(this.innerRef.current instanceof HTMLElement)
        )
          return;
        var b = this.outerRef.current.offsetWidth,
          d = this.innerRef.current.offsetWidth;
        d = Math.max(d - b, 0);
        b = 0;
        for (var e = 0; e < a && b < d; e++) {
          var f = this.$2(e);
          f && (b += f.offsetWidth);
        }
        b = c("clamp")(b, 0, d);
        if (b !== this.state.computedOffset)
          this.setState({ computedOffset: b });
        else {
          f = this.props.onUpdated;
          f && f(this.$3());
        }
      };
      e.$4 = function (a) {
        var b = 0;
        for (var c = 0; c < a; c++) {
          var d = this.$2(c);
          d && (b += d.offsetWidth);
        }
        return b;
      };
      e.$2 = function (a) {
        a = (a = this.childrenRefs[a]) == null ? void 0 : a.current;
        return a instanceof HTMLElement ? a : null;
      };
      e.render = function () {
        var a = this,
          b = this.props,
          e = b.itemsFillHeight,
          f = b.className,
          g = b.children;
        b.onUpdated;
        b = babelHelpers.objectWithoutPropertiesLoose(b, [
          "itemsFillHeight",
          "className",
          "children",
          "onUpdated",
        ]);
        this.childrenRefs = Array(i.Children.toArray(g).length)
          .fill(1)
          .map(function () {
            return i.createRef();
          });
        g = i.Children.map(g, function (b, c) {
          return i.jsx(
            "div",
            { className: "_2zgz", ref: a.childrenRefs[c], children: b },
            c
          );
        });
        var h = null;
        if (this.state.computedOffset) {
          var j = String(-this.state.computedOffset) + "px";
          h = d("Locale").isRTL() ? { right: j } : { left: j };
        }
        return i.jsx(c("ResponsiveBlock.react"), {
          onResize: this.$5,
          children: i.jsx(
            "div",
            babelHelpers["extends"]({}, b, {
              className: c("joinClasses")(f, "_a28"),
              ref: this.outerRef,
              children: i.jsx("div", {
                className: "_a2e",
                ref: this.innerRef,
                style: h,
                children: e
                  ? i.jsx(c("FlexLayout.react"), {
                      align: "stretch",
                      direction: "horizontal",
                      children: g,
                    })
                  : g,
              }),
            })
          ),
        });
      };
      e.$3 = function () {
        var a = this.outerRef,
          b = this.state.computedOffset;
        a.current instanceof HTMLElement && (b += a.current.offsetWidth);
        a = this.$4(this.props.index);
        var c = 0,
          e = this.props.index,
          f = null;
        while ((f = this.$2(e++)))
          if (d("Locale").isRTL())
            if (a + f.offsetWidth <= b) c++, (a += f.offsetWidth);
            else break;
          else if (f.offsetLeft + f.offsetWidth <= b) c++;
          else break;
        return c;
      };
      return b;
    })(i.Component);
    a.defaultProps = { onUpdated: c("emptyFunction"), itemsFillHeight: !1 };
    g["default"] = a;
  },
  98
);
__d(
  "AdsArrowedCarouselEnhanced.react",
  ["AdsArrowedContainer.react", "AdsCarousel.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
          e[f] = arguments[f];
        return (
          ((b = c = a.call.apply(a, [this].concat(e)) || this),
          (c.state = { firstVisibleIndex: 0, visibleChildrenCount: 0 }),
          (c.$5 = function () {
            var a = c.$4();
            c.setState({ firstVisibleIndex: c.state.firstVisibleIndex - a });
          }),
          (c.$6 = function () {
            var a = c.$3();
            c.setState({ firstVisibleIndex: c.state.firstVisibleIndex + a });
          }),
          (c.$7 = function (a) {
            c.setState({ visibleChildrenCount: a });
          }),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      var d = b.prototype;
      d.componentDidUpdate = function (a, b) {
        if (!this.props.currentSelectedShouldVisible) return;
        a = this.props.currentSelectedIndex;
        if (this.$1(a)) this.setState({ firstVisibleIndex: a });
        else if (this.$2(a)) {
          var c = b.firstVisibleIndex + b.visibleChildrenCount - 1;
          a = a - c;
          this.setState({ firstVisibleIndex: b.firstVisibleIndex + a });
        }
      };
      d.$1 = function (a) {
        return a < this.state.firstVisibleIndex;
      };
      d.$2 = function (a) {
        var b =
          this.state.firstVisibleIndex + this.state.visibleChildrenCount - 1;
        return a > b;
      };
      d.render = function () {
        var a = this.$3(),
          b = this.$4();
        return h.jsx(c("AdsArrowedContainer.react"), {
          className: this.props.className,
          isArrowCentered: !0,
          isLeftArrowOverlappingContent:
            this.props.isLeftArrowOverlappingContent != null
              ? this.props.isLeftArrowOverlappingContent
              : !0,
          onDecrement: b ? this.$5 : null,
          onIncrement: a ? this.$6 : null,
          children: h.jsx(c("AdsCarousel.react"), {
            index: this.state.firstVisibleIndex,
            onUpdated: this.$7,
            children: this.props.children,
          }),
        });
      };
      d.$3 = function () {
        var a = this.state.visibleChildrenCount;
        a =
          h.Children.count(this.props.children) -
          this.state.firstVisibleIndex -
          a;
        return a <= 0 ? 0 : Math.min(a, this.props.maxChangeAmount || 1);
      };
      d.$4 = function () {
        return Math.min(
          this.state.firstVisibleIndex,
          this.props.maxChangeAmount || 1
        );
      };
      return b;
    })(h.PureComponent);
    a.defaultProps = {
      currentSelectedIndex: 0,
      currentSelectedShouldVisible: !1,
      maxChangeAmount: 1,
    };
    g["default"] = a;
  },
  98
);
__d(
  "MWChatVideoPlayerControls.react",
  [
    "VideoPlayerControlsContainerOverlay.react",
    "VideoPlayerControlsGroups.react",
    "VideoPlayerFullscreenControl.react",
    "VideoPlayerHooks",
    "VideoPlayerPlaybackControl.react",
    "VideoPlayerPlaybackTimer.react",
    "VideoPlayerScrubber.react",
    "VideoPlayerVolumeControl.react",
    "react",
    "useVideoPlayerBigPlayButtonOverlay",
    "useVideoPlayerDefaultControlsVisibility",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function i(a) {
      return h.jsx("span", {
        className: "x12y6twl x1g0ag68",
        children: a.children,
      });
    }
    i.displayName = i.name + " [from " + f.id + "]";
    function a(a) {
      var b = c("useVideoPlayerDefaultControlsVisibility")(),
        e = b.isControlsVisible;
      b = b.onUserInteraction;
      var f = d("VideoPlayerHooks").usePaused();
      f = c("useVideoPlayerBigPlayButtonOverlay")({ forceVisible: f });
      var g = f.bigPlayButtonElement;
      f = f.bigPlayButtonIsVisible;
      var j = d("VideoPlayerHooks").useIsFullscreen();
      e = e && !f;
      f = h.jsx(c("VideoPlayerControlsContainerOverlay.react"), {
        isVisible: e,
        children: j
          ? h.jsxs(h.Fragment, {
              children: [
                h.jsxs(d("VideoPlayerControlsGroups.react").Contracted, {
                  children: [
                    h.jsx(c("VideoPlayerPlaybackControl.react"), {}),
                    h.jsx(c("VideoPlayerPlaybackTimer.react"), {}),
                  ],
                }),
                h.jsx(d("VideoPlayerControlsGroups.react").Expanded, {
                  children: h.jsx(c("VideoPlayerScrubber.react"), {
                    onUserInteraction: b,
                  }),
                }),
                h.jsxs(d("VideoPlayerControlsGroups.react").Contracted, {
                  children: [
                    h.jsx(c("VideoPlayerFullscreenControl.react"), {
                      onUserInteraction: b,
                    }),
                    h.jsx(c("VideoPlayerVolumeControl.react"), {
                      onUserInteraction: b,
                    }),
                  ],
                }),
              ],
            })
          : h.jsxs(h.Fragment, {
              children: [
                h.jsx(d("VideoPlayerControlsGroups.react").Contracted, {
                  children: h.jsx(i, {
                    children: h.jsx(c("VideoPlayerPlaybackControl.react"), {}),
                  }),
                }),
                h.jsx(d("VideoPlayerControlsGroups.react").Expanded, {
                  children: h.jsx(c("VideoPlayerScrubber.react"), {
                    onUserInteraction: b,
                  }),
                }),
                h.jsxs(d("VideoPlayerControlsGroups.react").Contracted, {
                  children: [
                    a.hideExpandButton
                      ? null
                      : h.jsx(i, {
                          children: h.jsx(
                            c("VideoPlayerFullscreenControl.react"),
                            { onUserInteraction: b }
                          ),
                        }),
                    h.jsx(i, {
                      children: h.jsx(c("VideoPlayerVolumeControl.react"), {
                        onUserInteraction: b,
                      }),
                    }),
                  ],
                }),
              ],
            }),
      });
      return h.jsxs(h.Fragment, { children: [g, f] });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "MWVideoPlayerControllerContext.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({ ref: { current: null } });
    g["default"] = b;
  },
  98
);
__d(
  "VideoPlayerX.react",
  [
    "VideoPlayerErrorBoundary.react",
    "VideoPlayerXImpl.react",
    "defaultErrorBoundaryFallback",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.doNotRenderErrorBoundaryIUnderstandIMustProvideMyOwn;
      b = b === void 0 ? !1 : b;
      var d = a.errorBoundaryFallback;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "doNotRenderErrorBoundaryIUnderstandIMustProvideMyOwn",
        "errorBoundaryFallback",
      ]);
      a = h.jsx(
        c("VideoPlayerXImpl.react"),
        babelHelpers["extends"](
          { VideoPlayerShakaPerformanceLoggerClass: null },
          a
        )
      );
      return b
        ? a
        : h.jsx(c("VideoPlayerErrorBoundary.react"), {
            description: "VideoPlayerX",
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
  "MWChatVideoPlayer.react",
  [
    "CometProductAttribution",
    "GraphQLVideoAutoplayGatingResult",
    "MWChatVideoAutoplaySettingContext",
    "MWChatVideoPlayerControls.react",
    "MWVideoPlayerControllerContext.react",
    "VideoPlayerDefaultControls.react",
    "VideoPlayerHooks",
    "VideoPlayerProgressiveImplementationData",
    "VideoPlayerProgressiveImplementationV2.react",
    "VideoPlayerSurface.react",
    "VideoPlayerX.react",
    "computeAspectRatio",
    "getVideoPlayerAutoplayProps",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useContext,
      j = b.useEffect,
      k = {
        link_context: null,
        rootName: "MWChatMediaRoot.react",
        tap_point: "unexpected",
        tracePolicy: "comet.sharedmediaviewer.media",
        trackingNodes: null,
      },
      l = function (a, b) {
        switch (a) {
          case "mwchat":
            return h.jsx(c("MWChatVideoPlayerControls.react"), {
              hideExpandButton: b === !0,
            });
          case "default":
            return h.jsx(c("VideoPlayerDefaultControls.react"), {});
          case "none":
            return null;
          default:
            return null;
        }
      };
    function m(a) {
      a = a.children;
      var b = d("VideoPlayerHooks").useController(),
        e = i(c("MWVideoPlayerControllerContext.react"));
      j(
        function () {
          e.ref.current = b;
          return function () {
            e.ref.current = null;
          };
        },
        [e, b]
      );
      return a;
    }
    m.displayName = m.name + " [from " + f.id + "]";
    function a(a) {
      var b = a.autoPlaySetting,
        e = a.controls,
        f = a.fbid,
        g = a.hdSrc,
        i = a.hideExpandButton,
        j = a.initialForceHD,
        n = a.originalHeight,
        o = a.originalWidth,
        p = a.sdSrc,
        q = a.startTimestamp;
      a = a.volumeSetting;
      j = d(
        "VideoPlayerProgressiveImplementationData"
      ).makeProgressiveImplementationData({
        hdSrc: g,
        hdSrcPreferred: (g = j) != null ? g : !1,
        isExternalMedia: !1,
        sdSrc: p,
      });
      g = d(
        "MWChatVideoAutoplaySettingContext"
      ).useMWChatVideoAutoplaySetting();
      if (j instanceof Error) return null;
      p = [
        {
          Component: c("VideoPlayerProgressiveImplementationV2.react"),
          data: j,
          typename: "VideoPlayerProgressiveImplementation",
        },
      ];
      j = c("getVideoPlayerAutoplayProps")(
        d(
          "GraphQLVideoAutoplayGatingResult"
        ).makeGraphQLVideoAutoplayGatingResult(
          "unknown",
          b != null ? b : g,
          !0
        ),
        "respect_user_settings",
        null
      );
      b = c("computeAspectRatio")(o, n);
      return h.createElement(
        c("VideoPlayerX.react"),
        babelHelpers["extends"]({}, j, {
          implementations: p,
          key: f,
          loopCount: -1,
          playerOriginOverride: "messaging",
          portalingEnabled: !1,
          productAttribution: {
            v2: [d("CometProductAttribution").getProductAttributionEntryV2(k)],
          },
          startTimestamp: q,
          subOrigin: "messenger_thread",
          videoFBID: f,
          videoPixelsAspectRatio: b,
          volumeSetting: a,
        }),
        h.jsx(c("VideoPlayerSurface.react"), {
          children: h.jsx(m, { children: l(e, i) }),
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "MessengerHotlikeEmoji.bs",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = "f0000";
    function a(a) {
      return a === g;
    }
    f.hotlike_key = g;
    f.isMessengerHotlike = a;
  },
  66
);
__d(
  "Utf16",
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      switch (a.length) {
        case 1:
          return a.charCodeAt(0);
        case 2:
          return (
            65536 |
            ((a.charCodeAt(0) - 55296) * 1024) |
            (a.charCodeAt(1) - 56320)
          );
        default:
          return null;
      }
    }
    function b(a) {
      if (a < 65536) return String.fromCharCode(a);
      else
        return (
          String.fromCharCode(55296 + ((a - 65536) >> 10)) +
          String.fromCharCode(56320 + (a % 1024))
        );
    }
    f.decode = a;
    f.encode = b;
  },
  66
);
__d(
  "messengerIterateEmoji",
  ["MessengerSupportedEmoji", "ifRequired"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, e, f) {
      var g = String(a);
      while (g) {
        a = c("ifRequired")(
          "MessengerSupportedEmojiUtils",
          function (a) {
            return a.getEmojiMatchObj(g);
          },
          function () {
            return d("MessengerSupportedEmoji").getEmojiMatchObj(g);
          }
        );
        if (a) {
          var h = a.offset + a.length,
            i = g.substr(0, a.is_supported ? a.offset : h);
          e(i);
          a.is_supported && b(a.emoji_str, a.emoji_key, f);
          i = g.substr(h);
          g = i;
        } else break;
      }
      e(g);
    }
    g["default"] = a;
  },
  98
);
__d(
  "messengerIterateEmoticons",
  ["EmoticonEmojiList"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, c, e) {
      var f, g, h;
      a = String(a);
      while (a) {
        g = d("EmoticonEmojiList").regexp.exec(a);
        if (g)
          (f = g.index + g[1].length),
            (h = a.substr(0, f)),
            (g = g[2]),
            (f = a.substr(f + g.length)),
            c(h),
            b(g, d("EmoticonEmojiList").names[g], e),
            (a = f);
        else break;
      }
      c(a);
    }
    g["default"] = a;
  },
  98
);
__d(
  "MessengerTextWithEmoticons.react",
  [
    "cx",
    "fbt",
    "BaseTextWithDecoration.react",
    "EmojiImageURL",
    "EmoticonEmojiList",
    "FBEmojiResource",
    "Image.react",
    "MessengerHotlikeEmoji.bs",
    "isStringNullOrEmpty",
    "messengerIterateEmoji",
    "messengerIterateEmoticons",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function k(a, b, e, f, g) {
      var h = f === !0 ? 128 : 16;
      g =
        g != null
          ? g
          : !a && !d("MessengerHotlikeEmoji.bs").isMessengerHotlike(e)
          ? new (c("FBEmojiResource"))(e).getImageURL(h)
          : d("EmojiImageURL").getMessengerURL(e, h);
      a = f === !0 ? "_1ift _5m3a" : "_1ift _2560";
      return j.jsx(c("Image.react"), { alt: b, className: a, src: g });
    }
    k.displayName = k.name + " [from " + f.id + "]";
    function l(a, b, e) {
      var f = e === !0 ? 128 : 16,
        g = d("EmoticonEmojiList").emote2emojis[b],
        h = g
          ? d("MessengerHotlikeEmoji.bs").isMessengerHotlike(g)
            ? d("EmojiImageURL").getMessengerURL(g, f)
            : new (c("FBEmojiResource"))(g).getImageURL(f)
          : null;
      if (!c("isStringNullOrEmpty")(h)) {
        g = String.fromCodePoint(parseInt(g, f));
        f = e === !0 ? "_1ift _5m3a" : "_1ift _2560";
        return j.jsx(c("Image.react"), { alt: g, className: f, src: h });
      }
      e = i._("\u00e9motic\u00f4ne {emoticonName}", [
        i._param("emoticonName", b),
      ]);
      return j.jsx("span", { "aria-label": e, children: a });
    }
    l.displayName = l.name + " [from " + f.id + "]";
    function m(a, b, c) {
      return function (d, e, f) {
        var g = function (c, d, a) {
          e(b(c, d, a));
        };
        a(String(d), g, f, c);
      };
    }
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var d = b.prototype;
      d.shouldComponentUpdate = function (a) {
        return a.text !== this.props.text;
      };
      d.render = function () {
        var a = this,
          b = [
            m(
              c("messengerIterateEmoji"),
              function (b, c, d, e) {
                return k(!!a.props.forceMessengerEmoji, b, c, d, e);
              },
              this.props.customSize
            ),
            m(c("messengerIterateEmoticons"), l, this.props.customSize),
          ];
        return j.jsx(
          c("BaseTextWithDecoration.react"),
          babelHelpers["extends"]({}, this.props, {
            text: this.props.text,
            decorators: b,
          })
        );
      };
      return b;
    })(j.Component);
    a.renderEmoji = k;
    g["default"] = a;
  },
  98
);
__d(
  "MessengerTextWithEntities.react",
  [
    "BaseTextWithEntities.react",
    "Link.react",
    "MessengerTextWithEmoticons.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function i(a) {
      return a.replace(/<3\b|&hearts;/g, "\u2665");
    }
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, d;
        for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
          f[g] = arguments[g];
        return (
          ((b = d = a.call.apply(a, [this].concat(f)) || this),
          (d.$1 = function (a) {
            if (d.props.renderEmoticons || d.props.renderEmoji)
              return h.jsx(c("MessengerTextWithEmoticons.react"), {
                text: a,
                customSize: d.props.customSize,
                renderEmoticons: d.props.renderEmoticons,
                renderEmoji: d.props.renderEmoji,
              });
            else return i(a);
          }),
          (d.$2 = function (a, b) {
            if (d.props.interpolator) return d.props.interpolator(a, b);
            else return h.jsx(c("Link.react"), { href: b.entity, children: a });
          }),
          b) || babelHelpers.assertThisInitialized(d)
        );
      }
      var d = b.prototype;
      d.render = function () {
        return h.jsx(
          c("BaseTextWithEntities.react"),
          babelHelpers["extends"]({}, this.props, {
            aggregatedRanges: this.props.aggregatedRanges,
            imageRanges: this.props.imageRanges,
            metaRanges: this.props.metaRanges,
            rangeRenderer: this.$2,
            ranges: this.props.ranges,
            text: this.props.text,
            textRenderer: this.$1,
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
  "MessengerScrollableArea.react",
  [
    "cx",
    "ScrollableArea.react",
    "Style",
    "UserAgent",
    "clearImmediate",
    "gkx",
    "joinClasses",
    "react",
    "setImmediate",
    "throttle",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = 20,
      k = c("gkx")("1094116");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b) {
        var d;
        d = a.call(this, b) || this;
        d.$1 = !1;
        d.$2 = null;
        d.$5 = function () {
          if (d.$1) {
            var a;
            d.props.onScroll && (a = d.props).onScroll.apply(a, arguments);
          }
        };
        d.$6 = function () {
          if (!c("UserAgent").isBrowser("IE")) return;
          if (k) return;
          if (!d.refs || !d.$4.current) return;
          var a = d.$4.current.refs.wrap,
            b = d.$4.current.refs.body;
          if (!b || !a) return;
          a = a.offsetWidth - a.clientWidth;
          a > 0 && c("Style").set(b, "margin-right", -a + "px");
        };
        d.$3 = c("throttle")(d.$5, 50);
        d.$4 = i.createRef();
        return d;
      }
      var d = b.prototype;
      d.componentDidMount = function () {
        (this.$2 = c("setImmediate")(this.$6)), (this.$1 = !0);
      };
      d.componentWillUnmount = function () {
        c("clearImmediate")(this.$2), (this.$1 = !1);
      };
      d.render = function () {
        var a = this.props.needsFastScrollHandler ? this.$5 : this.$3;
        return i.jsx(c("ScrollableArea.react"), {
          className: c("joinClasses")("_5f0v", this.props.className),
          height: this.props.height,
          onClick: this.props.onClick,
          onScroll: a,
          persistent: !0,
          ref: this.$4,
          shadow: !1,
          tabIndex: this.props.tabIndex,
          width: this.props.width,
          children: this.props.children,
        });
      };
      d.getArea = function () {
        if (this.$4.current) return this.$4.current.getArea();
      };
      d.scrollToBottom = function (a) {
        var b = this.getArea();
        b && this.scrollToPosition(b.getScrollHeight(), !!a);
      };
      d.scrollToTop = function (a) {
        var b = this.getArea();
        b && b.scrollToTop(!!a);
      };
      d.scrollToPosition = function (a, b, c) {
        b === void 0 && (b = !1);
        c === void 0 && (c = {});
        var d = this.getArea();
        if (!d) return;
        d.setScrollTop(a, b, c);
      };
      d.isScrolledToBottom = function () {
        return this.isScrolledToBottomWithHeight(0);
      };
      d.isScrolledToBottomWithHeight = function (a) {
        var b = this.getArea();
        return !b
          ? !1
          : b.getScrollTop() + b.getClientHeight() + a >=
              b.getScrollHeight() - j;
      };
      d.isScrolledToTop = function () {
        var a = this.getArea();
        return !a ? !0 : a.getScrollTop() <= j;
      };
      d.getScrollTop = function () {
        var a = this.getArea();
        return !a ? 0 : a.getScrollTop();
      };
      return b;
    })(i.Component);
    g["default"] = a;
  },
  98
);
__d(
  "EmojiFormat.bs",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function g(a) {
      return a.split("_").map(function (a) {
        return parseInt(a, 16);
      });
    }
    function a(a) {
      return a
        .map(function (a) {
          return a.toString(16);
        })
        .join("_");
    }
    function h(a) {
      return a
        .map(function (a) {
          return String.fromCodePoint(a);
        })
        .join("");
    }
    function b(a) {
      return h(g(a));
    }
    f.codeStringToCodeArray = g;
    f.codeArrayToCodeString = a;
    f.codeArrayToUnicode = h;
    f.codeStringToUnicode = b;
  },
  66
);
__d(
  "MessengerDateBreak.bs",
  ["cx", "FBLogger", "formatDate", "joinClasses", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.date;
      a = a.className;
      a = a !== void 0 ? a : "";
      try {
        var d = {
          future: "g:ia",
          older: "m/d/Y g:ia",
          thisYear: "M jS, g:ia",
          today: "g:ia",
          withinWeek: "D g:ia",
        };
        b = c("formatDate")(b, d);
        return i.jsx("h4", {
          className: c("joinClasses")(a, "_497p _2lpt"),
          children: i.jsx("time", { className: "_3oh-", children: b }),
        });
      } catch (a) {
        c("FBLogger")("messaging").mustfix(
          "invalid timestamp: Js.Date.getTime(date)"
        );
        return null;
      }
    }
    b = i.memo(a, function (a, b) {
      return a.date.getTime() === b.date.getTime();
    });
    g.make = b;
  },
  98
);
__d(
  "MessengerDeliveryReceipt.bs",
  ["bs_belt_MapString", "bs_belt_Option"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      return c("bs_belt_Option").getWithDefault(
        c("bs_belt_MapString").get(a, b),
        0
      );
    }
    g.getDeliveryTimeOfThread = a;
  },
  98
);
__d(
  "SkinToneEmoji.bs",
  ["EmojiFormat.bs", "MessengerEmojiConfig", "bs_caml_array"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      switch (a) {
        case "1f385":
        case "1f3c3":
        case "1f3c4":
        case "1f3ca":
        case "1f3cb":
        case "1f442":
        case "1f443":
        case "1f446":
        case "1f447":
        case "1f448":
        case "1f449":
        case "1f44a":
        case "1f44b":
        case "1f44c":
        case "1f44d":
        case "1f44e":
        case "1f44f":
        case "1f450":
        case "1f466":
        case "1f467":
        case "1f468":
        case "1f469":
        case "1f46e":
        case "1f470":
        case "1f471":
        case "1f472":
        case "1f473":
        case "1f474":
        case "1f475":
        case "1f476":
        case "1f477":
        case "1f478":
        case "1f47c":
        case "1f481":
        case "1f482":
        case "1f483":
        case "1f485":
        case "1f486":
        case "1f487":
        case "1f4aa":
        case "1f575":
        case "1f590":
        case "1f595":
        case "1f596":
        case "1f645":
        case "1f646":
        case "1f647":
        case "1f64b":
        case "1f64c":
        case "1f64d":
        case "1f64e":
        case "1f64f":
        case "1f6a3":
        case "1f6b4":
        case "1f6b5":
        case "1f6b6":
        case "1f6c0":
        case "1f918":
        case "261d":
        case "26f9":
        case "270a":
        case "270b":
        case "270c":
        case "270d":
          return !0;
        default:
          return !1;
      }
    }
    function i(a) {
      if (c("bs_caml_array").get(a, (a.length - 1) | 0) === 65039)
        return c("bs_caml_array").get(a, (a.length - 1) | 0);
      else return 0;
    }
    function j(a) {
      if (c("bs_caml_array").get(a, (a.length - 1) | 0) === 65039) return a;
      a = a.slice(0);
      return a.concat([65039]);
    }
    function k(a) {
      if (i(a) === 0) return a;
      else return a.slice(0, (a.length - 1) | 0);
    }
    function l(a) {
      var b = c("MessengerEmojiConfig").emoji_colors;
      b = b.filter(function (b) {
        return b === a;
      });
      return b.length !== 0;
    }
    function m(a) {
      a = k(a);
      if (a.length <= 1 || !l(c("bs_caml_array").get(a, (a.length - 1) | 0)))
        return 0;
      else return c("bs_caml_array").get(a, (a.length - 1) | 0);
    }
    function n(a) {
      var b = i(a),
        c = b === 0 ? m(a) : m(a.slice(0, (a.length - 1) | 0));
      if (c !== 0)
        if (b === 0) return a.slice(0, (a.length - 1) | 0);
        else return j(a.slice(0, (a.length - 2) | 0));
      else return a;
    }
    function a(a, b) {
      if (b === 0) return a;
      var c = i(a),
        d = c === 0 ? a.slice(0) : a.slice(0, (a.length - 1) | 0),
        e = m(d);
      if (e !== 0) return a;
      e = d.concat([b]);
      if (c === 0) return e;
      else return e.concat([c]);
    }
    function b(a) {
      return n(k(a));
    }
    function e(a) {
      return h(d("EmojiFormat.bs").codeArrayToCodeString(n(k(a))));
    }
    f = 65039;
    g.emoji = h;
    g.getEmojiModifier = i;
    g.addEmojiModifier = j;
    g.removeEmojiModifier = k;
    g.isToneModifier = l;
    g.getTone = m;
    g.removeTone = n;
    g.applyTone = a;
    g.removeAllModifiers = b;
    g.hasVariations = e;
    g.emoji_modifier_code = f;
  },
  98
);
__d(
  "MessengerEmojiTransitionMapping.bs",
  ["EmojiFormat.bs", "SkinToneEmoji.bs", "bs_caml_array"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      switch (a) {
        case "1f3c3":
        case "1f3c4":
        case "1f3ca":
        case "1f3cb":
        case "1f3cc":
        case "1f46e":
        case "1f46f":
        case "1f471":
        case "1f473":
        case "1f477":
        case "1f481":
        case "1f482":
        case "1f486":
        case "1f487":
        case "1f575":
        case "1f645":
        case "1f646":
        case "1f647":
        case "1f64b":
        case "1f64d":
        case "1f64e":
        case "1f6a3":
        case "1f6b4":
        case "1f6b5":
        case "1f6b6":
        case "26f9":
          return !0;
        default:
          return !1;
      }
    }
    function i(a) {
      if (c("bs_caml_array").get(a, (a.length - 1) | 0) === 65039)
        return c("bs_caml_array").get(a, (a.length - 1) | 0);
      else return 0;
    }
    function j(a) {
      if (c("bs_caml_array").get(a, (a.length - 1) | 0) === 65039) return a;
      a = a.slice(0);
      return a.concat([65039]);
    }
    function k(a) {
      if (i(a) === 0) return a;
      else return a.slice(0, (a.length - 1) | 0);
    }
    function l(a) {
      if (a === 9792) return !0;
      else return a === 9794;
    }
    function m(a) {
      a = k(a);
      if (a.length <= 1 || !l(c("bs_caml_array").get(a, (a.length - 1) | 0)))
        return 0;
      else return c("bs_caml_array").get(a, (a.length - 1) | 0);
    }
    function n(a) {
      var b = i(a),
        c = b === 0 ? m(a) : m(a.slice(0, (a.length - 1) | 0));
      if (c !== 0)
        if (b === 0) return a.slice(0, (a.length - 2) | 0);
        else return j(a.slice(0, (a.length - 3) | 0));
      else return a;
    }
    function o(a, b) {
      if (b === 0) return a;
      var c = i(a),
        d = c === 0 ? a.slice(0) : a.slice(0, (a.length - 1) | 0),
        e = m(d);
      if (e !== 0) return a;
      e = d.concat([8205, b]);
      if (c === 0) return e;
      else return e.concat([c]);
    }
    function a(a) {
      return o(a, 9792);
    }
    function b(a) {
      return n(d("SkinToneEmoji.bs").removeTone(a));
    }
    function e(a) {
      return h(
        d("EmojiFormat.bs").codeArrayToCodeString(
          n(d("SkinToneEmoji.bs").removeTone(a))
        )
      );
    }
    function f(a) {
      a = d("EmojiFormat.bs").codeArrayToCodeString(
        n(d("SkinToneEmoji.bs").removeTone(a))
      );
      switch (a) {
        case "1f46a":
        case "1f48f":
        case "1f491":
          return !0;
        default:
          return !1;
      }
    }
    var p = 65039,
      q = 9792,
      r = 9794,
      s = 8205;
    g.emoji = h;
    g.getEmojiModifier = i;
    g.addEmojiModifier = j;
    g.removeEmojiModifier = k;
    g.isGenderModifier = l;
    g.getGender = m;
    g.removeGender = n;
    g.applyGender = o;
    g.makeFemale = a;
    g.removeAllModifiers = b;
    g.hasGender = e;
    g.isBlacklisted = f;
    g.emoji_modifier_code = p;
    g.gender_female = q;
    g.gender_male = r;
    g.zero_join = s;
  },
  98
);
__d(
  "EmojiOnlyMessage.react",
  [
    "cx",
    "EmojiImageURL",
    "EmojiLikeConstants",
    "FBEmojiResource",
    "Image.react",
    "MessengerHotlikeEmoji.bs",
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
      var e = b.prototype;
      e.render = function () {
        var a = "_1ift _1ifu",
          b = 0,
          e = this.props.contents.map(function (e) {
            b++;
            var f = e.emojiKey;
            if (f) {
              f = d("MessengerHotlikeEmoji.bs").isMessengerHotlike(f)
                ? d("EmojiImageURL").getMessengerURL(
                    f,
                    d("EmojiLikeConstants").sizeMap.dp32
                  )
                : new (c("FBEmojiResource"))(f).getImageURL(
                    d("EmojiLikeConstants").sizeMap.dp32
                  );
              return i.jsx(
                c("Image.react"),
                { alt: e.text, className: a, src: f },
                b
              );
            } else return i.jsx("span", { children: e.text }, b);
          });
        return i.jsx("div", { tabIndex: "0", children: e });
      };
      return b;
    })(i.Component);
    g["default"] = a;
  },
  98
);
__d(
  "LinkCTAXMATAsyncLink.react",
  ["AsyncRequest", "GeoLink.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, d;
        for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
          f[g] = arguments[g];
        return (
          ((b = d = a.call.apply(a, [this].concat(f)) || this),
          (d.onClick = function () {
            new (c("AsyncRequest"))()
              .setURI(d.props.uri)
              .setMethod("POST")
              .send();
          }),
          b) || babelHelpers.assertThisInitialized(d)
        );
      }
      var d = b.prototype;
      d.render = function () {
        return h.jsx(c("GeoLink.react"), {
          onClick: this.onClick,
          children: this.props.text,
        });
      };
      return b;
    })(h.Component);
    g["default"] = a;
  },
  98
);
__d(
  "MessengerSupportedEmojiUtils",
  [
    "cx",
    "EmojiImageURL",
    "EmojiLikeConstants",
    "EmojiRenderer",
    "EmoticonEmojiList",
    "FBEmojiAliases",
    "FBEmojiResource",
    "Image.react",
    "MessengerEmojiTransitionMapping.bs",
    "MessengerHotlikeEmoji.bs",
    "MessengerSupportedEmoji",
    "SupportedEmoji3",
    "SupportedFacebookEmoji",
    "Utf16",
    "joinClasses",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = /_fe0f/g,
      k = new RegExp("(\r\n|[ \r\n]|\\s)");
    function l(a) {
      if (!a) return null;
      var b = null,
        e = u(a);
      if (e.length === 1 && e[0].length === a.length) {
        a = e[0].emoji.map(function (a) {
          return d("Utf16").decode(a);
        });
        b = a
          .map(function (a) {
            return a.toString(16);
          })
          .join("_")
          .replace(j, "");
      }
      if (b) {
        e = c("FBEmojiAliases")[b];
        e && (b = e.replace(j, ""));
      }
      return m(b) ? b : null;
    }
    function a(a) {
      return !!l(a);
    }
    function m(a) {
      if (!a) return !1;
      if (!d("MessengerHotlikeEmoji.bs").isMessengerHotlike(a)) {
        var b = (function (a) {
          var b = c("FBEmojiAliases")[a];
          return b ? b.replace(j, "") : a;
        })(a);
        return !!c("SupportedFacebookEmoji")[b] || !!c("SupportedEmoji3")[b];
      }
      return !!d("MessengerSupportedEmoji").emoji[a];
    }
    function b(a) {
      return !!(a && d("MessengerSupportedEmoji").emoji[a]);
    }
    function e(a) {
      if (!a) return null;
      var b = u(a);
      if (b.length === 1 && b[0].length === a.length) {
        a = b[0].emoji.map(function (a) {
          return d("Utf16").decode(a);
        });
        b = a
          .map(function (a) {
            return a.toString(16);
          })
          .join("_")
          .replace(j, "");
        if (m(b)) return a;
      }
      return null;
    }
    function f(a) {
      a = a
        .map(function (a) {
          return a.toString(16);
        })
        .join("_")
        .replace(j, "");
      var b = c("FBEmojiAliases")[a];
      return b ? b.replace(j, "") : a;
    }
    function n() {
      var a,
        b = d("EmojiLikeConstants").size;
      return (
        (a = {}),
        (a[b.XSMALL] = "_2560"),
        (a[b.SMALL] = "_1ifu"),
        (a[b.MEDIUM] = "_19_r"),
        (a[b.LARGE] = "_19_s"),
        a
      );
    }
    function o(a) {
      a = u(a, 1);
      if (a.length !== 1) return null;
      var b = a[0].emoji,
        c = a[0].emoji.map(function (a) {
          return d("Utf16").decode(a);
        });
      d("MessengerEmojiTransitionMapping.bs").hasGender(c) &&
        !d("MessengerEmojiTransitionMapping.bs").getGender(c) &&
        (c = d("MessengerEmojiTransitionMapping.bs").makeFemale(c));
      c = c
        .map(function (a) {
          return a.toString(16);
        })
        .join("_")
        .replace(j, "");
      return {
        emoji_key: c,
        emoji_str: b.join(""),
        is_supported: m(c),
        offset: a[0].offset,
        length: a[0].length,
      };
    }
    function h(a, b) {
      if (!a) return null;
      a = l(a);
      if (!a) return null;
      var e = n();
      b = v(b);
      d("EmojiLikeConstants").sizeMap[b] ||
        (b = d("EmojiLikeConstants").size.XSMALL);
      e = c("joinClasses")(e[b], "_1ift");
      b = d("EmojiLikeConstants").sizeMap[b];
      b = d("MessengerHotlikeEmoji.bs").isMessengerHotlike(a)
        ? d("EmojiImageURL").getMessengerURL(a, b)
        : new (c("FBEmojiResource"))(a).getImageURL(b);
      return b == null
        ? null
        : {
            emoji: i.jsx(c("Image.react"), { className: e, src: b }),
            emoji_key: a,
            url: b,
          };
    }
    function p(a, b) {
      if (!a) return null;
      a = l(a, !0);
      if (!a) return null;
      var e = n();
      b = v(b);
      var f =
        b === d("EmojiLikeConstants").size.MEDIUM
          ? d("EmojiLikeConstants").size.LARGE
          : b;
      d("EmojiLikeConstants").sizeMap[b] ||
        (b = d("EmojiLikeConstants").size.XSMALL);
      e = c("joinClasses")(e[b], "_1ift");
      b = d("EmojiLikeConstants").sizeMap[f];
      f = d("MessengerHotlikeEmoji.bs").isMessengerHotlike(a)
        ? d("EmojiImageURL").getMessengerURL(a, b)
        : new (c("FBEmojiResource"))(a).getImageURL(b);
      return f == null
        ? null
        : {
            emoji: i.jsx(c("Image.react"), { className: e, src: f }),
            emoji_key: a,
            url: f,
          };
    }
    function q(a, b) {
      if (!a) return null;
      a = l(a);
      if (!a) return null;
      var e = n();
      b = v(b);
      var f =
        b === d("EmojiLikeConstants").size.MEDIUM
          ? d("EmojiLikeConstants").size.LARGE
          : b;
      d("EmojiLikeConstants").sizeMap[b] ||
        (b = d("EmojiLikeConstants").size.XSMALL);
      e = c("joinClasses")(e[b], "_1ift");
      b = d("EmojiLikeConstants").sizeMap[f];
      f = d("MessengerHotlikeEmoji.bs").isMessengerHotlike(a)
        ? d("EmojiImageURL").getMessengerURL(a, b)
        : new (c("FBEmojiResource"))(a).getImageURL(b);
      return f == null
        ? null
        : {
            emoji: i.jsx(c("Image.react"), { className: e, src: f }),
            emoji_key: a,
            url: f,
          };
    }
    function r(a) {
      a = a || "";
      var b = [],
        c = function (a) {
          var c = k.exec(a),
            d = "";
          while (c && c.length && c.index === 0)
            (d += c[0]), (a = a.replace(k, "")), (c = k.exec(a));
          d.length > 0 && b.push({ text: d });
          return a;
        };
      while (!0) {
        a = c(a);
        var e = d("EmoticonEmojiList").noncapturingRegexp.exec(a);
        if (e && e.index === 0) {
          var f = d("EmoticonEmojiList").names[e[1]];
          f = d("EmoticonEmojiList").emote2emojis[f];
          b.push({ emojiKey: f, text: e[1] });
          a = a.replace(e[1], "");
        } else break;
      }
      while (a.length > 0 && a.trim().length > 0) {
        a = c(a);
        f = o(a);
        if (f && f.is_supported)
          b.push({ emojiKey: f.emoji_key, text: f.emoji_str }),
            (a = a.replace(f.emoji_str, ""));
        else return null;
      }
      return b;
    }
    function s(a, b) {
      a = a.replace(j, "");
      b = v(b);
      if (!d("MessengerHotlikeEmoji.bs").isMessengerHotlike(a)) {
        var e = c("FBEmojiAliases")[a];
        e && (a = e.replace(j, ""));
        return !m(a)
          ? null
          : new (c("FBEmojiResource"))(a).getImageURL(
              d("EmojiLikeConstants").sizeMap[b]
            );
      }
      return !d("MessengerSupportedEmoji").emoji[a]
        ? null
        : d("EmojiImageURL").getMessengerURL(
            a,
            d("EmojiLikeConstants").sizeMap[b]
          );
    }
    function t(a) {
      return u(a, 1).length === 1;
    }
    function u(a, b) {
      return d("EmojiRenderer").parse(a, b);
    }
    function v(a) {
      return d("EmojiLikeConstants").sizeMapTransfer[a] || a;
    }
    g.getSupportedEmojiKey = l;
    g.isSupportedEmoji = a;
    g.isSupportedEmojiKey = m;
    g.isMessengerSupportedEmojiKey = b;
    g.getSupportedEmojiCodesArray = e;
    g.getEmojiKeyFromCodes = f;
    g.getClassSizeMap = n;
    g.getEmojiMatchObj = o;
    g.getNewEmojiData = h;
    g.getHotLikeEmojiDataTransition = p;
    g.getHotLikeEmojiData = q;
    g.getEmojiOnlyContents = r;
    g.getUrl = s;
    g.containsEmoji = t;
    g.parse = u;
    g.transferSize = v;
  },
  98
);
__d(
  "MercuryShareAttachmentRenderLocations",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = "chat",
      h = "chat_preview",
      i = "ufi_composer",
      j = "messenger",
      k = "pages_inbox";
    function a() {
      return [g, h, i, j, k];
    }
    function b(a) {
      return a === h;
    }
    f.CHAT = g;
    f.CHAT_PREVIEW = h;
    f.COMPOSER = i;
    f.MESSENGER = j;
    f.PAGES_INBOX = k;
    f.getValues = a;
    f.isPreview = b;
  },
  66
);
__d(
  "MercuryMessageStore",
  [
    "CurrentUser",
    "LogHistory",
    "MercuryAPIArgsSource",
    "MercuryDispatcher",
    "MercuryMessagingLightswitch",
    "MercuryThreadInformer",
    "MercuryThreadlistConstants",
    "MessengerState.bs",
    "SubscriptionsHandler",
    "mixInEventEmitter",
    "setImmediate",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("LogHistory").getInstance("mercury_message_store");
    a = (function () {
      function a(a, b, e, f) {
        var g = this;
        this.$5 = a;
        this.$1 = e || c("CurrentUser").getID();
        this.$2 = 1;
        this.$8 = f;
        this.$3 = b || d("MercuryThreadlistConstants").RECENT_MESSAGES_LIMIT;
        this.$6 = e
          ? c("MercuryThreadInformer").getForFBID(e)
          : c("MercuryThreadInformer").get();
        this.$7 = e
          ? c("MercuryDispatcher").getForFBID(e)
          : c("MercuryDispatcher").get();
        this.$4 = new (c("SubscriptionsHandler"))();
        this.$4.addSubscriptions(
          this.$6.subscribe("messages-received", function (a, b) {
            return g.$9(b);
          }),
          this.$6.subscribe("messages-updated", function (a, b) {
            return b[g.$5] && g.$10(b[g.$5]);
          }),
          this.$6.subscribe("messages-deleted", function (a, b) {
            return b[g.$5] && g.$11(b[g.$5]);
          }),
          this.$6.subscribe("messages-reordered", function (a, b) {
            return b[g.$5] && g.$12();
          }),
          this.$6.subscribe("thread-invalidated", function (a, b) {
            return b[g.$5] && g.$13();
          }),
          this.$7.subscribe("thread-error", function (a, b) {
            a =
              b == null
                ? void 0
                : (a = b.request_data) == null
                ? void 0
                : (a = a.messages) == null
                ? void 0
                : a.user_ids;
            if (!a) return;
            a = Object.keys(a).some(function (a) {
              return g.$5.indexOf(a) > -1;
            });
            a && g.$14(b);
          })
        );
        var i = this.$15();
        c("MercuryMessagingLightswitch").guard(function () {
          h.debug(
            "constructed",
            JSON.stringify({ threadID: g.$5, messageCount: i })
          );
        });
        i < this.$3
          ? this.$16()
          : c("setImmediate")(function () {
              g.$12();
            });
      }
      var b = a.prototype;
      b.destroy = function () {
        var a = this;
        this.$4 && this.$4.release();
        this.removeAllListeners();
        c("MercuryMessagingLightswitch").guard(function () {
          h.debug("destroyed", JSON.stringify({ threadID: a.$5 }));
        });
      };
      b.subscribe = function (a) {
        return this.addRetroactiveListener("updated", a);
      };
      b.fetchMoreMessages = function () {
        if (this.hasFetchedAll()) return !1;
        this.$16();
        return !0;
      };
      b.hasFetchedAll = function () {
        return (
          d("MessengerState.bs").hasLoadedAllMessages(this.$1, this.$5) ||
          d("MessengerState.bs").isNewEmptyLocalThread(this.$1, this.$5)
        );
      };
      b.$15 = function () {
        return d("MessengerState.bs").getCurrentlyLoadedMessages(
          this.$1,
          this.$5
        ).length;
      };
      b.willBeCachedFetch = function () {
        return d("MessengerState.bs").hasLoadedNMessages(
          this.$1,
          this.$5,
          this.$3 + this.$15()
        );
      };
      b.$16 = function () {
        var a = this,
          b = this.$3,
          e = c("MercuryAPIArgsSource").MERCURY;
        this.$8 != null && (e = this.$8);
        d("MessengerState.bs").getThreadMessagesRange(
          this.$1,
          this.$5,
          this.$15(),
          b,
          this.$17.bind(this),
          null,
          e
        );
        this.$2 < 10 && (this.$2 += 1);
        this.willBeCachedFetch() &&
          c("setImmediate")(function () {
            a.$12();
          });
      };
      b.$17 = function (b) {
        var d = this;
        c("MercuryMessagingLightswitch").guard(function () {
          h.debug(
            "fetch_messages",
            JSON.stringify({
              threadID: d.$5,
              fetchedMessagesCount: (b && b.length) || 0,
              messageCount: d.$15(),
            })
          );
        });
        b && !b.length && !this.$15() && this.$18(a.THREAD_IS_EMPTY);
      };
      b.$9 = function (b) {
        var c = [];
        b = b[this.$5];
        b &&
          b.length &&
          (c = c.concat(
            b.filter(function (a) {
              return !!a;
            })
          ));
        c.length && this.$18(a.MESSAGES_RECEIVED);
      };
      b.$10 = function (b) {
        this.$18(a.MESSAGES_CHANGED);
      };
      b.$11 = function (b) {
        this.$18(a.MESSAGES_DELETED, b);
      };
      b.$12 = function () {
        this.$18(a.MESSAGES_REORDERED);
      };
      b.$14 = function (b) {
        b = b == null ? void 0 : b.error_actions[0];
        this.$18(a.MESSAGES_ERROR, null, b);
      };
      b.$13 = function () {
        (this.$2 = 1), this.$16();
      };
      b.$18 = function (a, b, c) {
        var e = d("MessengerState.bs").getCurrentlyLoadedMessages(
          this.$1,
          this.$5
        );
        this.releaseHeldEventType("updated");
        this.emitAndHold("updated", {
          messages: e,
          deletedMessages: b,
          eventType: a,
          error: c,
        });
      };
      return a;
    })();
    Object.assign(a, {
      MESSAGES_FETCHED: "fetched",
      MESSAGES_CHANGED: "changed",
      MESSAGES_RECEIVED: "received",
      MESSAGES_REORDERED: "reordered",
      MESSAGES_DELETED: "deleted",
      THREAD_IS_EMPTY: "thread-is-empty",
      MESSAGES_ERROR: "thread-error",
    });
    c("mixInEventEmitter")(a, { updated: !0 });
    g["default"] = a;
  },
  98
);
__d(
  "MercurySyncNewMessageTransformer",
  [
    "FBIDCheck",
    "IrisProtocolMessageLifetime",
    "MercuryIDs",
    "MercuryMessageCustomizations",
    "MercuryProfileRanges",
    "MessageThreadReadState",
    "MessageThreadReadStateEffect",
    "MessageUnsendabilityStatus.bs",
    "MessengerRealtimeAttachmentTransformer.bs",
    "PageCommItemStatus",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b("MessageThreadReadStateEffect").extractThreadStateEffectFromDelta,
      h = function (a) {
        var b = {};
        try {
          b = JSON.parse(a);
        } catch (a) {}
        return b;
      };
    function a(a, c) {
      var d = parseInt(c.messageMetadata.timestamp, 10),
        e = c.messageMetadata.skipBumpThread,
        f = g(a, c),
        i =
          f === b("MessageThreadReadState").MARK_UNREAD &&
          a !== c.messageMetadata.actorFbId.toString(),
        j = c.messageMetadata.messageId,
        k = [];
      c.attachments &&
        (k = c.attachments.map(function (c) {
          var d;
          c.mercury ? (d = c.mercury) : (d = h(c.mercuryJSON));
          if (!d) return null;
          c = d.extensible_attachment;
          var e = d.blob_attachment;
          d = d.sticker_attachment;
          if (!c && !e && !d) return null;
          var f = b("FBIDCheck").isUser_deprecated(a);
          c
            ? (c = b("MessengerRealtimeAttachmentTransformer.bs").transform(
                a,
                { extensible_attachment: c },
                j,
                f
              ))
            : e
            ? (c = b("MessengerRealtimeAttachmentTransformer.bs").transform(
                a,
                { blob_attachments: [e] },
                j,
                f
              ))
            : (c = b("MessengerRealtimeAttachmentTransformer.bs").transform(
                a,
                { sticker: d },
                j,
                f
              ));
          return c.length > 0 ? c[0] : null;
        }));
      var l = !b("FBIDCheck").isUser_deprecated(a);
      k = k.filter(Boolean);
      var m = c.messageMetadata.tags ? c.messageMetadata.tags[0] : void 0,
        n = null;
      if (c.data && c.data.adminSignatureCreatorID) {
        var o = c.data;
        n = {
          creatorID: o.adminSignatureCreatorID || null,
          creatorName: o.adminSignatureCreatorName || null,
          creatorType: o.adminSignatureCreatorType || null,
          labelType: o.adminSignatureLabelType || null,
          pageID: o.adminSignaturePageID || null,
          profileURI: o.adminSignatureProfileURI || null,
        };
      }
      return {
        message_id: j,
        threading_id: null,
        offline_threading_id: c.messageMetadata.offlineThreadingId,
        author: b("MercuryIDs").getParticipantIDFromUserID(
          c.messageMetadata.actorFbId
        ),
        author_email: c.messageMetadata.actorFbId + "@facebook.com",
        ephemeral_ttl_mode: c.ttl ? b("IrisProtocolMessageLifetime")[c.ttl] : 0,
        timestamp: d,
        is_unread: i,
        is_filtered_content: !1,
        is_filtered_content_bh: !1,
        is_filtered_content_account: !1,
        is_filtered_content_quasar: !1,
        is_filtered_content_invalid_app: !1,
        source: m,
        tags: c.messageMetadata.tags,
        is_spoof_warning: !1,
        folder: null,
        thread_fbid: c.messageMetadata.threadKey.threadFbId,
        other_user_fbid: c.messageMetadata.threadKey.otherUserFbId,
        body: c.body !== void 0 ? c.body : "",
        html_body: null,
        subject: null,
        has_attachment: k.length > 0,
        attachments: k,
        ranges: void 0,
        thread_id: null,
        action_type: "ma-type:user-generated-message",
        is_from_iris: !0,
        is_sponsored:
          !!(c.data && c.data.is_sponsored && c.data.is_sponsored === "true") ||
          !!(
            c.untypedData &&
            c.untypedData.is_sponsored &&
            c.untypedData.is_sponsored === "true"
          ),
        commerce_message_type: c.data ? c.data.commerce_message_type : null,
        customizations:
          c.data && c.data.customization
            ? b("MercuryMessageCustomizations").parseCustomizations(
                c.data.customization
              )
            : null,
        platform_xmd:
          c.data && c.data.platform_xmd ? c.data.platform_xmd : null,
        profile_ranges: b("MercuryProfileRanges").extractFromDelta(c),
        message_source:
          c.data && c.data.message_source_data
            ? h(c.data.message_source_data).message_source
            : null,
        skip_bump_thread: e,
        thread_read_state_effect: f,
        montage_reply_data:
          c.data && c.data.montage_reply_data
            ? h(c.data.montage_reply_data)
            : null,
        meta_ranges:
          c.data && c.data.meta_ranges ? h(c.data.meta_ranges) : null,
        creator_info: n,
        comm_status: l ? b("PageCommItemStatus").TODO : null,
        message_unsendability_status: b(
          "MessageUnsendabilityStatus.bs"
        ).fromNullableString(c.messageMetadata.unsendType),
      };
    }
    e.exports = { transform: a };
  },
  null
);
__d(
  "MercuryAttachmentLayoutTypeHelper",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      var b;
      return (
        (a == null
          ? void 0
          : (b = a.xma_layout_info) == null
          ? void 0
          : b.layout_type) === "ADMIN" ||
        (a == null
          ? void 0
          : (b = a.share) == null
          ? void 0
          : (a = b.xma_layout_info) == null
          ? void 0
          : a.layout_type) === "ADMIN"
      );
    }
    f.isAdminType = a;
  },
  66
);
__d(
  "MessengerLightweightActionUtils",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function g(a) {
      return !!(
        a &&
        a.attach_type === "share" &&
        a.share &&
        a.share.target &&
        a.share.target.lwa_type
      );
    }
    function a(a) {
      a = a == null ? void 0 : a.attachments;
      return !!(a && a.length === 1 && g(a[0]));
    }
    function b(a) {
      return a.attachments[0].share.title;
    }
    function c(a) {
      return a[0].share.title;
    }
    f.isLWAAttachment = g;
    f.isLWAMessage = a;
    f.getCollapsedLWAText = b;
    f.getLWASnippetText = c;
  },
  66
);
__d(
  "MercuryMessageGroup",
  [
    "MercuryAttachmentLayoutTypeHelper",
    "MercuryShareAttachmentRenderLocations",
    "MercuryThreadlistConstants",
    "MessengerLightweightActionUtils",
    "MessengerMessage.bs",
    "enumerate",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = {
      calculateMessageGroups: function (a, c) {
        var d = [],
          e = null,
          f = { value: null };
        a = b("enumerate")(a);
        var h;
        while (!(h = a.next()).done) {
          var i = g.canAppendMessageToLastGroup(f.value, h.value, c);
          i || ((e = []), d.push(e));
          e.push(h.value);
          f = h;
        }
        return d;
      },
      canAppendMessageToLastGroup: function (a, c, d) {
        var e = b("MercuryThreadlistConstants").GROUPING_THRESHOLD;
        if (
          !a ||
          h(a, d) ||
          h(c, d) ||
          a.author != c.author ||
          a.timestamp < c.timestamp - e ||
          a.is_spoof_warning !== c.is_spoof_warning ||
          a.page_admin_notes ||
          c.replied_to_message ||
          c.is_forwarded
        )
          return !1;
        d = b("MessengerMessage.bs").getPersona(a);
        e = b("MessengerMessage.bs").getPersona(c);
        return !d && !e ? !0 : d === null || e === null ? !1 : d.id === e.id;
      },
    };
    function h(a, c) {
      var d = a.has_attachment;
      d &&
        (c === b("MercuryShareAttachmentRenderLocations").MESSENGER ||
          c === b("MercuryShareAttachmentRenderLocations").CHAT) &&
        (d = i(a));
      return !!(
        b("MessengerLightweightActionUtils").isLWAMessage(a) ||
        a.action_type == "ma-type:log-message" ||
        d ||
        a.html_body ||
        (a.body &&
          a.body.length >
            b("MercuryThreadlistConstants").MAX_CHARS_BEFORE_BREAK)
      );
    }
    function i(a) {
      a = a.attachments[0];
      return (
        !a ||
        a.attach_type === "sticker" ||
        a.attach_type === "animated_image" ||
        b("MercuryAttachmentLayoutTypeHelper").isAdminType(a)
      );
    }
    e.exports = g;
  },
  null
);
__d(
  "MessengerUserProfileLocationUtils",
  [
    "invariant",
    "MessengerUserProfileLocationUtilsQuery.graphql",
    "RelayFBEnvironment",
    "RelayHooks",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i;
    function j() {
      return d("RelayHooks")
        .fetchQuery(
          c("RelayFBEnvironment"),
          i !== void 0
            ? i
            : (i = b("MessengerUserProfileLocationUtilsQuery.graphql")),
          {}
        )
        .toPromise();
    }
    function a() {
      return j().then(function (a) {
        var b = null,
          c = null;
        a =
          a == null
            ? void 0
            : (a = a.viewer) == null
            ? void 0
            : (a = a.user) == null
            ? void 0
            : a.address;
        a !== null &&
          ((b =
            (a == null ? void 0 : a.region) === ""
              ? null
              : a == null
              ? void 0
              : a.region),
          (c =
            (a == null ? void 0 : a.postal_code) === ""
              ? null
              : a == null
              ? void 0
              : a.postal_code));
        if (b !== null && c !== null) return { region: b, postal_code: c };
        else h(0, 54437);
      });
    }
    g.FetchMessengerUserRegionAndPostalCode = a;
  },
  98
);
__d(
  "XMNCommerceCTAPostProcessController",
  ["XController"],
  function (a, b, c, d, e, f) {
    e.exports = b("XController").create("/messages/commerce/cta/postprocess/", {
      cta_id: { type: "String", required: !0 },
      message_id: { type: "String" },
    });
  },
  null
);
__d(
  "MNCommerceCTAProcessor",
  [
    "AsyncRequest",
    "CurrentUser",
    "GraphQLMessengerPlatformCtaPostHandlingMutation.graphql",
    "MessengerPlatformClientTypedLogger",
    "PopupWindow",
    "WebGraphQLMutationHelper",
    "XMNCommerceCTAPostProcessController",
    "nullthrows",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a() {}
      var b = a.prototype;
      b.process = function (a, b) {
        b === void 0 && (b = null);
        var e = d("PopupWindow").open("", 500, 1024);
        a = c("XMNCommerceCTAPostProcessController")
          .getURIBuilder()
          .setString("cta_id", a)
          .setString("message_id", b)
          .getURI();
        new (c("AsyncRequest"))()
          .setURI(a)
          .setMethod("POST")
          .setHandler(function (a) {
            return (e.location = a.payload);
          })
          .send();
      };
      b.postHandle = function (a, b) {
        a = d("WebGraphQLMutationHelper").getMutationURI(
          c("nullthrows")(
            c("GraphQLMessengerPlatformCtaPostHandlingMutation.graphql").params
              .id
          ),
          { cta_id: a, message_id: b }
        );
        new (c("AsyncRequest"))().setURI(a).send();
      };
      b.logCTAClick = function (a) {
        var b, d;
        d = (d = a) != null ? d.logging_token : d;
        var e = d ? JSON.parse(d).click_source : "UNKNOWN";
        e = {
          action_id: (b = a) != null ? b.id : b,
          action_type: (b = a) != null ? b.action_type : b,
          action_url:
            ((b = a) != null ? b.action_url : b) ||
            ((b = a) != null ? b.action_link : b),
          click_source: e,
          page_id: (b = a) != null ? b.page_id : b,
        };
        new (c("MessengerPlatformClientTypedLogger"))()
          .setClientUserID(c("CurrentUser").getID())
          .setName("did_tap_call_to_action")
          .setExtraClientData(JSON.stringify(e))
          .setLoggingToken(d)
          .log();
      };
      return a;
    })();
    b = new a();
    g["default"] = b;
  },
  98
);
__d(
  "ManageNotificationMessagesUserActionType",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      STOP_MESSAGES: 0,
      RESUME_MESSAGES: 1,
      REPORT: 2,
      MUTE: 3,
      EDIT_TOPIC: 4,
    });
    f["default"] = a;
  },
  66
);
__d(
  "MessagingPluginReEngagementAdminTextManageButtonDropDownMenu.react",
  [
    "cx",
    "ChatPluginTestId",
    "LiveChatPluginFbts",
    "MPNDropdownMenu",
    "MPNDropdownMenuItem",
    "ManageNotificationMessagesUserActionType",
    "MessagingPluginContext",
    "MessagingPluginThreadActions",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = d("react").useContext,
      k = function () {};
    function a(a) {
      a = j(c("MessagingPluginContext"));
      var b = a.state,
        e = a.dispatchAction,
        f = b.isMuted,
        g = b.pageID,
        h = b.locale,
        l = b.refParam;
      a = function () {
        var a;
        d("MessagingPluginThreadActions").muteOrUnmutePage(
          g,
          (a = f) != null ? a : !1
        );
        e({ type: "MUTE_CONVERSATION", isMuted: !f });
      };
      return i.jsxs(c("MPNDropdownMenu"), {
        className: "_acdz",
        children: [
          i.jsx(c("MPNDropdownMenuItem"), {
            classNameString: "_acd-",
            onClick: function () {
              d(
                "MessagingPluginThreadActions"
              ).handleReEngagementNotificationMessagesUserActions(
                g,
                c("ManageNotificationMessagesUserActionType").STOP_MESSAGES,
                l
              );
            },
            primaryText:
              d(
                "LiveChatPluginFbts"
              ).RE_ENGAGEMENT_STOP_MESSAGES_BUTTON_TEXT.toString(),
            "data-testid": void 0,
          }),
          i.jsx(c("MPNDropdownMenuItem"), {
            classNameString: "_acd-",
            onClick: a,
            primaryText: d("LiveChatPluginFbts").getMuteConversationButtonText(
              (b = f) != null ? b : !1
            ),
          }),
          i.jsx(c("MPNDropdownMenuItem"), {
            classNameString: "_acd-",
            onClick: function () {
              d("MessagingPluginThreadActions").openFRXPrompt(
                g,
                h,
                "business_notification_message_report_button"
              );
            },
            primaryText: d("LiveChatPluginFbts").getOpenFRXButtonText(),
          }),
          i.jsx(c("MPNDropdownMenuItem"), {
            classNameString: "_acd-",
            onClick: k,
            primaryText:
              d(
                "LiveChatPluginFbts"
              ).RE_ENGAGEMENT_CANCEL_BUTTON_TEXT.toString(),
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
  "LiveChatPluginTypingIndicator.react",
  [
    "cx",
    "Image.react",
    "MercuryTypingAnimation_DEPRECATED.react",
    "MessagingPluginContext",
    "PrivacyTransparentOverlay.react",
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
        return this.props.pageIsTyping
          ? i.jsxs("div", {
              className: "_4xkn clearfix",
              children: [
                i.jsx("div", {
                  className: "profilePictureColumn",
                  children: i.jsx(c("PrivacyTransparentOverlay.react"), {
                    children: i.jsx(c("Image.react"), {
                      className: "profilePicture",
                      src: this.context.state.pageProfilePictureUri,
                    }),
                  }),
                }),
                i.jsx("div", {
                  className: "messages",
                  children: i.jsx("div", {
                    className: "_4xko _13y8",
                    children: i.jsx(
                      c("MercuryTypingAnimation_DEPRECATED.react"),
                      {}
                    ),
                  }),
                }),
              ],
            })
          : null;
      };
      return b;
    })(i.Component);
    a.contextType = c("MessagingPluginContext");
    g["default"] = a;
  },
  98
);
__d(
  "ChatPluginMessengerErrorMessageIconSVG.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var c = b.prototype;
      c.render = function () {
        return h.jsx("div", {
          children: h.jsx("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            children: h.jsx("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM6.79164 3.74931C6.76887 3.06617 7.31648 2.5 8 2.5C8.68352 2.5 9.23113 3.06617 9.20836 3.74931L9.03222 9.03331C9.01426 9.57233 8.57209 10 8.03278 10H7.96722C7.42791 10 6.98574 9.57233 6.96778 9.03331L6.79164 3.74931ZM9.25 12.25C9.25 12.9404 8.69036 13.5 8 13.5C7.30964 13.5 6.75 12.9404 6.75 12.25C6.75 11.5596 7.30964 11 8 11C8.69036 11 9.25 11.5596 9.25 12.25Z",
              fill: "#FF3A33",
            }),
          }),
        });
      };
      return b;
    })(h.Component);
    g["default"] = a;
  },
  98
);
__d(
  "MPNAdminTextOptInAgainButton.react",
  [
    "ChatPluginTestId",
    "LiveChatPluginFbts",
    "ManageNotificationMessagesUserActionType",
    "MessagingPluginContext",
    "MessagingPluginThreadActions",
    "ShimButton.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useContext;
    function a(a) {
      a = i(c("MessagingPluginContext"));
      a = a.state;
      var b = a.pageID,
        e = a.refParam;
      return h.jsx(c("ShimButton.react"), {
        className: "x6s0dn4 x1mqxbix x1ypdohk xt0psk2 x1pg5gke x2b8uid",
        onClick: function () {
          d(
            "MessagingPluginThreadActions"
          ).handleReEngagementNotificationMessagesUserActions(
            b,
            c("ManageNotificationMessagesUserActionType").RESUME_MESSAGES,
            e
          );
        },
        "data-testid": void 0,
        children:
          d(
            "LiveChatPluginFbts"
          ).RE_ENGAGEMENT_OPT_IN_AGAIN_BUTTON_TEXT.toString(),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "MPNAdminTextOptOutButton.react",
  ["cx", "ChatPluginTestId", "LiveChatPluginFbts", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a() {
      return i.jsx("div", {
        className: "collapsedLink",
        "data-testid": void 0,
        children:
          d("LiveChatPluginFbts").RE_ENGAGEMENT_OPT_OUT_BUTTON_TEXT.toString(),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "LiveChatPluginFileAttachment.react",
  ["cx", "Link.react", "MPNFileAttachmentIconSVG.react", "react"],
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
        return i.jsxs("div", {
          className: "_6d5w",
          "data-testid": void 0,
          children: [
            i.jsx("div", {
              className: "_6d5y",
              children: i.jsx(c("MPNFileAttachmentIconSVG.react"), {}),
            }),
            i.jsx(c("Link.react"), {
              className: "_6d5x",
              target: "_blank",
              href: this.props.attachment.url,
              children: this.props.attachment.name,
            }),
          ],
        });
      };
      return b;
    })(i.PureComponent);
    g["default"] = a;
  },
  98
);
__d(
  "LiveChatPluginLinkShareAttachment.react",
  [
    "cx",
    "CssBackgroundImage.react",
    "LineClamp.react",
    "Link.react",
    "MessagingPluginContext",
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
        return i.jsxs(c("Link.react"), {
          className: "_6bxn",
          href: this.props.uri,
          target: "_blank",
          children: [
            this.$1(),
            i.jsxs("div", {
              className: "_a178",
              children: [this.$2(), this.$3(), this.$4()],
            }),
          ],
        });
      };
      d.$1 = function () {
        return this.props.image != null
          ? i.jsx(c("CssBackgroundImage.react"), {
              backgroundPosition: "center center",
              className: "_6j0r",
              height: "150px",
              imageURI: this.props.image,
              width: "100%",
            })
          : null;
      };
      d.$2 = function () {
        return this.props.title != null
          ? i.jsx("div", {
              className: "_6bxo",
              children: i.jsx(c("LineClamp.react"), {
                lines: 2,
                children: this.props.title,
              }),
            })
          : null;
      };
      d.$3 = function () {
        return this.props.description != null
          ? i.jsx("div", {
              className: "_6bxp",
              children: i.jsx(c("LineClamp.react"), {
                lines: 2,
                children: this.props.description,
              }),
            })
          : null;
      };
      d.$4 = function () {
        return this.props.source != null
          ? i.jsx("div", { className: "_6bxq", children: this.props.source })
          : null;
      };
      return b;
    })(i.Component);
    a.contextType = c("MessagingPluginContext");
    g["default"] = a;
  },
  98
);
__d(
  "MPNFallbackAttachment.react",
  [
    "cx",
    "fbt",
    "CssBackgroundImage.react",
    "Link.react",
    "LiveChatPluginLoggerUtil",
    "MPNIdentity",
    "MessagingPluginContext",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
          f[g] = arguments[g];
        return (
          ((b = c = a.call.apply(a, [this].concat(f)) || this),
          (c.$4 = function () {
            var a = c.context.state.pageID,
              b = d("MPNIdentity").MPNIdentity.currentUserID(),
              e = d("MPNIdentity").MPNIdentity.currentUserState();
            d("LiveChatPluginLoggerUtil").logActionFromNewUI(
              "in_thread_action",
              b,
              a,
              e === d("MPNIdentity").MPNIdentityState.FB
                ? "logged_in_chat_tab"
                : "guest_chat_tab",
              {
                action_type: "customer_chat_attachment_fallback_clicked",
                xma_type: c.props.style,
              }
            );
          }),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      var e = b.prototype;
      e.componentDidMount = function () {
        var a = this.context.state.pageID,
          b = d("MPNIdentity").MPNIdentity.currentUserID(),
          c = d("MPNIdentity").MPNIdentity.currentUserState();
        d("LiveChatPluginLoggerUtil").logActionFromNewUI(
          "in_thread_action",
          b,
          a,
          c === d("MPNIdentity").MPNIdentityState.FB
            ? "logged_in_chat_tab"
            : "guest_chat_tab",
          {
            action_type: "customer_chat_attachment_fallback_impression",
            xma_type: this.props.style,
          }
        );
      };
      e.render = function () {
        var a = this.context.state.accessToken;
        if (a)
          return j.jsxs("div", {
            className: "_6bxn",
            children: [
              this.$1(),
              j.jsx("div", { className: "_a178", children: this.$2() }),
            ],
          });
        else
          return j.jsxs("div", {
            className: "_6bxn",
            children: [
              this.$1(),
              j.jsxs("div", {
                className: "_a178",
                children: [this.$2(), this.$3()],
              }),
            ],
          });
      };
      e.$1 = function () {
        return this.props.image != null
          ? j.jsx(c("CssBackgroundImage.react"), {
              backgroundPosition: "center center",
              className: "_6j0r",
              height: "150px",
              imageURI: this.props.image,
              width: "100%",
            })
          : null;
      };
      e.$2 = function () {
        return this.props.title != null
          ? j.jsx("div", { className: "_6bxo", children: this.props.title })
          : null;
      };
      e.$3 = function () {
        return j.jsx("div", {
          className: "_6bxp",
          children: i._("{=m0} dans Messenger", [
            i._implicitParam(
              "=m0",
              j.jsx(c("Link.react"), {
                onClick: this.$4,
                href: "https://m.me/" + this.context.state.pageID,
                target: "_blank",
                children: i._("Afficher le message complet"),
              })
            ),
          ]),
        });
      };
      return b;
    })(j.PureComponent);
    a.contextType = c("MessagingPluginContext");
    g["default"] = a;
  },
  98
);
__d(
  "ChatPluginTemplateConverter",
  ["URI", "nullthrows"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a, b) {
      a = b
        ? (b = a) != null
          ? b.target
          : b
        : (b = a) != null
        ? (b = b.share) != null
          ? (b = b.target) != null
            ? (b = b.items) != null
              ? b[0]
              : b
            : b
          : b
        : b;
      return !a || !a.name
        ? null
        : {
            title: a.name,
            subtitle:
              (b = a) != null
                ? (b = b.metalines) != null
                  ? b.metaline_1
                  : b
                : b,
            default_action:
              (b = a) != null
                ? (b = b.default_action) != null
                  ? b.action_link
                  : b
                : b,
            image_url: a.thumb_url
              ? a.thumb_url
              : (b = a) != null
              ? (b = b.media_blob_attachments) != null
                ? (b = b[0]) != null
                  ? (b = b.image) != null
                    ? b.uri
                    : b
                  : b
                : b
              : b,
            image_aspect_ratio: a.image_aspect_ratio,
            ctas: a.call_to_actions,
          };
    }
    function i(a) {
      var b;
      if (!a) return null;
      b = (b = a) != null ? b.messenger_generic_xma_template_extra_info : b;
      var c = [];
      for (var d = 1; d < 4; d++) {
        var e,
          f = "cta" + d;
        if (!b || !((e = b) != null ? e[f] : e)) break;
        c.push(b[f]);
      }
      return {
        title: a.title,
        subtitle: a.description,
        default_action:
          b == null
            ? void 0
            : (e = b.default_cta) == null
            ? void 0
            : e.action_url,
        image_url: (f = a.media) == null ? void 0 : f.image,
        image_aspect_ratio: null,
        ctas: c,
      };
    }
    function a(a) {
      a = (a = a) != null ? ((a = a.share) != null ? a.subattachments : a) : a;
      return !a || a.length === 0
        ? []
        : a
            .map(function (a) {
              var b;
              b = (b = a) != null ? ((b = b.style_list) != null ? b[0] : b) : b;
              return b == "messenger_generic_template" ? i(a) : h(a, !0);
            })
            .filter(function (a) {
              return a;
            });
    }
    function b(a) {
      var b, d;
      d =
        (d = a) != null
          ? (d = d.share) != null
            ? (d = d.target) != null
              ? (d = d.items) != null
                ? d[0]
                : d
              : d
            : d
          : d;
      if (!d) return null;
      b =
        (b = d) != null
          ? (b = b.media_blob_attachments) != null
            ? (b = b[0]) != null
              ? b.large_preview
              : b
            : b
          : b;
      if (b)
        return {
          image_url: b.uri,
          height: b.height,
          width: b.width,
          playable: !1,
          ctas: d.call_to_actions,
        };
      b =
        (b = d) != null
          ? (b = b.media_blob_attachments) != null
            ? (b = b[0]) != null
              ? b.playable_url
              : b
            : b
          : b;
      if (!b) return null;
      d = c("nullthrows")(
        (d = d) != null
          ? (d = d.media_blob_attachments) != null
            ? d[0]
            : d
          : d
      );
      var e,
        f,
        g = null;
      d.__typename === "MessageVideo"
        ? ((e = d.original_dimensions.x), (f = d.original_dimensions.y))
        : ((e = d.width), (f = d.height), (g = !0));
      return {
        image_url: null,
        height: f,
        width: e,
        playable: !0,
        playable_url: b,
        source_id: d.legacy_attachment_id ? d.legacy_attachment_id : d.id,
        is_share: (f = g) != null ? f : !1,
        page_id: (e = a.metadata) == null ? void 0 : e.pageid,
        ctas: [],
      };
    }
    function d(a) {
      var b;
      if (!((b = a.share) == null ? void 0 : b.media)) return null;
      b = c("nullthrows")(a.share.media);
      a =
        (a = a) != null
          ? (a = a.share) != null
            ? a.messenger_generic_xma_template_extra_info
            : a
          : a;
      var d = [];
      for (var e = 1; e < 4; e++) {
        var f,
          g = "cta" + e;
        if (!a || !((f = a) != null ? f[g] : f)) break;
        d.push(a[g]);
      }
      if (b.playable && b.source) {
        f = new (c("URI"))(b.source).getQueryData();
        return {
          image_url: null,
          height: (g = b.image_size) == null ? void 0 : g.height,
          width: (a = b.image_size) == null ? void 0 : a.width,
          playable: b.playable,
          playable_url: b.source,
          source_id: f.entity_id,
          is_share: !1,
          ctas: d,
        };
      }
      if (b.image) {
        return {
          image_url: b.image,
          height: (e = b.image_size) == null ? void 0 : e.height,
          width: (g = b.image_size) == null ? void 0 : g.width,
          playable: !1,
          ctas: d,
        };
      }
      return null;
    }
    g.convertLegacySchemaToGenericTemplate = h;
    g.convertLightspeedSchemaToGenericTemplate = i;
    g.convertSchemaToHScroll = a;
    g.convertLegacySchemaToMediaTemplate = b;
    g.convertLightspeedSchemaToMediaTemplate = d;
  },
  98
);
__d(
  "MPNCallToAction.react",
  [
    "cx",
    "fbt",
    "BootloaderResource",
    "JSResource",
    "Link.react",
    "LiveChatPluginLoggerUtil",
    "MNCommerceCTAProcessor",
    "MPNConstants",
    "MPNIdentity",
    "MercuryIDs",
    "MessagingPluginContext",
    "PopupWindow",
    "ShimButton.react",
    "Tooltip.react",
    "gkx",
    "isNullish",
    "joinClasses",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = "https://www.facebook.com/plugins/chat/transcript";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c) {
        var e;
        e = a.call(this, b, c) || this;
        e.$6 = function () {
          e.$12("customer_chat_open_url_cta_clicked");
        };
        e.$1 = d("MercuryIDs").getThreadIDFromUserID(e.context.state.pageID);
        e.$2 = d("LiveChatPluginLoggerUtil").getAttributionTags();
        e.$3 =
          d("MPNIdentity").MPNIdentity.currentUserState() ===
          d("MPNIdentity").MPNIdentityState.FB;
        return e;
      }
      var e = b.prototype;
      e.render = function () {
        var a,
          b = this,
          e = this.props,
          f = e.callToAction,
          g = e.messageID;
        e =
          (e = (e = f.action_type) != null ? e : f.action_open_type) != null
            ? e
            : f.type;
        a = (a = f.action_title) != null ? a : f.title;
        if (e == null || a == null) return null;
        var h = null;
        switch (e) {
          case 2:
          case "xma_web_url":
            var i = (e = f.action_link) != null ? e : f.action_url;
            e = i != null ? i.includes(k) : !1;
            e
              ? (h = this.$4(a, function () {
                  b.$5(i);
                }))
              : (h = this.$4(a, this.$6, i));
            break;
          case 31:
            h = this.$4(a, function () {
              b.$5(f.action_link);
            });
            break;
          case 4:
          case "xma_postback":
            h = this.$4(a, function () {
              b.$7(f);
            });
            break;
          case 1:
            e =
              (e = f) != null
                ? (e = e.webview_metadata) != null
                  ? e.messenger_extensions
                  : e
                : e;
            if (e != null) {
              e =
                (e = f) != null
                  ? (e = e.webview_metadata) != null
                    ? e.fallback_url
                    : e
                  : e;
              h = this.$4(a, this.$6, e != null ? e : f.action_link);
            } else h = this.$8(a);
            break;
          case 5:
          case "xma_account_link":
            h = this.$4(a, function () {
              b.$9(f, g);
            });
            break;
          case 29:
            d("BootloaderResource").preload(
              c("JSResource")("ChatPluginCufeeModal.react").__setRef(
                "MPNCallToAction.react"
              )
            );
            h = c("gkx")("2784")
              ? this.$10(a, function () {
                  b.context.dispatchAction({
                    type: "SHOW_CUFEE_MODAL",
                    showCufeeModal: d("MPNConstants").MPNVisibility.NOT_HIDDEN,
                  }),
                    b.$11();
                })
              : this.$8(a);
            break;
          default:
            h = this.$8(a);
        }
        return j.jsx("div", {
          style: { width: (e = this.props.width) != null ? e : null },
          className: c("joinClasses")("_991a _a17l", this.props.className),
          children: h,
        });
      };
      e.$4 = function (a, b, d) {
        var e = c("isNullish")(d) ? c("ShimButton.react") : c("Link.react");
        return j.jsx(e, {
          className: "_a17m",
          "data-testid": void 0,
          href: d,
          onClick: b,
          target: "_blank",
          children: a,
        });
      };
      e.$10 = function (a, b) {
        return j.jsx(c("Link.react"), {
          className: "_a17m",
          style: { color: this.context.state.threadCSSColor },
          onClick: b,
          children: a,
        });
      };
      e.$8 = function (a) {
        return j.jsx("div", {
          className: "_a17m _6ir6",
          children: j.jsx(c("Tooltip.react"), {
            tooltip: i._(
              "Pour utiliser cette fonctionnalit\u00e9, utilisez l\u2019app Messenger."
            ),
            children: a,
          }),
        });
      };
      e.$9 = function (a, b) {
        var d;
        c("MNCommerceCTAProcessor").process(
          (d = (d = a.id) != null ? d : a.target_id) != null ? d : "",
          b
        );
        this.$12("customer_chat_account_link_cta_clicked");
      };
      e.$5 = function (a) {
        d("PopupWindow").open(a, 420, 450),
          this.$12("customer_chat_open_dialog_cta_clicked");
      };
      e.$7 = function (a) {
        var b = d("MPNIdentity").MPNIdentity.currentUserState(),
          c = this.context.state.refererUri;
        if (
          b !== d("MPNIdentity").MPNIdentityState.GUEST &&
          b !== d("MPNIdentity").MPNIdentityState.FB
        )
          return;
        else {
          var e;
          b = this.context.state.messageStore;
          b = b.sendQueue;
          if (!b) return;
          b.enqueueAndSend(
            (e = (e = a.action_title) != null ? e : a.title) != null ? e : "",
            this.$3,
            c,
            b.makePlatformTokenForPostbackCTA(
              (c = (e = a.id) != null ? e : a.target_id) != null ? c : ""
            )
          );
        }
        this.$12("customer_chat_postback_clicked");
      };
      e.$12 = function (a) {
        var b = this.context.state.pageID;
        d("LiveChatPluginLoggerUtil").logActionFromNewUI(
          "in_thread_action",
          d("MPNIdentity").MPNIdentity.currentUserID(),
          b,
          d("MPNIdentity").MPNIdentity.currentUserState() ===
            d("MPNIdentity").MPNIdentityState.FB
            ? "logged_in_chat_tab"
            : "guest_chat_tab",
          { action_type: a }
        );
      };
      e.$11 = function () {
        var a = this.props.callToAction.cta_data;
        a = {
          first_screen:
            a == null
              ? void 0
              : a.feedback_form_first_screen.feedback_questions[0],
          privacy_policy: a == null ? void 0 : a.feedback_form_privacy_policy,
          form_state: a == null ? void 0 : a.feedback_form_state,
          form_id: a == null ? void 0 : a.feedback_form_id,
        };
        this.props.setFeedback == null ? void 0 : this.props.setFeedback(a);
      };
      return b;
    })(j.PureComponent);
    a.contextType = c("MessagingPluginContext");
    g["default"] = a;
  },
  98
);
__d(
  "MPNButtonTemplate.react",
  ["cx", "MPNCallToAction.react", "MessagingPluginContext", "react"],
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
        var a;
        a =
          (a = this.props.attachment) != null
            ? (a = a.share) != null
              ? (a = a.target) != null
                ? a.call_to_actions
                : a
              : a
            : a;
        var b = this.props.messageID;
        if (!a || a.length === 0) return null;
        a = a.map(function (a, d) {
          return i.jsx(
            c("MPNCallToAction.react"),
            {
              callToAction: a,
              className: d === 0 ? "_6isd" : "",
              messageID: b,
            },
            a.id
          );
        });
        return i.jsx("div", { className: "_6b7s _a17n", children: a });
      };
      return b;
    })(i.PureComponent);
    a.contextType = c("MessagingPluginContext");
    g["default"] = a;
  },
  98
);
__d(
  "MPNGenericTemplate.react",
  [
    "cx",
    "CssBackgroundImage.react",
    "LineClamp.react",
    "Link.react",
    "MPNCallToAction.react",
    "MessagingPluginContext",
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
        return !this.props.template
          ? null
          : i.jsxs("div", {
              className: "_6j2i",
              children: [
                this.$1(),
                i.jsxs("div", {
                  className: "_a17j",
                  children: [this.$2(), this.$3()],
                }),
              ],
            });
      };
      d.$4 = function (a) {
        var b;
        b = (b = this.props.template) == null ? void 0 : b.default_action;
        return b && a
          ? i.jsx(c("Link.react"), {
              href: b,
              target: "_blank",
              className: "_9v_v _9v_w",
              children: a,
            })
          : a;
      };
      d.$1 = function () {
        var a, b;
        a = (a = this.props.template) == null ? void 0 : a.image_url;
        b = this.props.imageAspectRatio
          ? this.props.imageAspectRatio
          : (b = this.props.template) == null
          ? void 0
          : b.image_aspect_ratio;
        var d = this.context.state.windowSize === "compact";
        b = b === 1 ? 260 : 150;
        d && (b *= 0.77333);
        d =
          a || this.props.hasImage
            ? i.jsx(c("CssBackgroundImage.react"), {
                backgroundPosition: "center center",
                className: "_6j0s",
                height: b + "px",
                imageURI: a,
                width: "100%",
              })
            : null;
        return this.$4(d);
      };
      d.$2 = function () {
        var a = i.jsxs("div", {
          className: "_a178",
          children: [this.$5(), this.$6()],
        });
        return this.$4(a);
      };
      d.$5 = function () {
        var a;
        a = (a = this.props.template) == null ? void 0 : a.title;
        return a
          ? i.jsx(c("LineClamp.react"), {
              className: "_6j0t _a17a",
              lines: 3,
              children: a,
            })
          : null;
      };
      d.$6 = function () {
        var a;
        a = (a = this.props.template) == null ? void 0 : a.subtitle;
        return a ? i.jsx("div", { className: "_a17k", children: a }) : null;
      };
      d.$3 = function () {
        var a,
          b = this;
        a = (a = this.props.template) == null ? void 0 : a.ctas;
        var d = this.props.messageID;
        if (!a || a.length === 0) return null;
        var e = a.map(function (a, e) {
          return i.jsx(
            c("MPNCallToAction.react"),
            { callToAction: a, messageID: d, setFeedback: b.props.setFeedback },
            e
          );
        });
        if (this.props.maxNumCTAs && this.props.maxNumCTAs > a.length) {
          var f = [];
          for (var g = 0; g < this.props.maxNumCTAs - a.length; g++)
            f.push(
              i.jsx(
                "div",
                { className: "_6j0z _a17l _a17m", children: "\xa0" },
                g
              )
            );
          e = f.concat(e);
        }
        return e;
      };
      return b;
    })(i.PureComponent);
    a.contextType = c("MessagingPluginContext");
    g["default"] = a;
  },
  98
);
__d(
  "MPNHScrollTemplate.react",
  [
    "cx",
    "AdsArrowedCarouselEnhanced.react",
    "MPNGenericTemplate.react",
    "MessagingPluginContext",
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
        return i.jsx(c("AdsArrowedCarouselEnhanced.react"), {
          isLeftArrowOverlappingContent: !1,
          children: this.$1(),
        });
      };
      d.$1 = function () {
        var a = this.props.messageID,
          b = !1,
          d = 0,
          e = 1.91;
        this.props.templates.forEach(function (a) {
          a.ctas && a.ctas.length > d && (d = a.ctas.length),
            a.image_url != null && a.image_url.length > 0 && (b = !0),
            a.image_aspect_ratio === 1 && (e = 1);
        });
        return this.props.templates.map(function (f, g) {
          return i.jsx(
            "div",
            {
              className: "_a17o",
              children: i.jsx(c("MPNGenericTemplate.react"), {
                template: f,
                messageID: a,
                hasImage: b,
                imageAspectRatio: e,
                maxNumCTAs: d,
              }),
            },
            g
          );
        });
      };
      return b;
    })(i.Component);
    a.contextType = c("MessagingPluginContext");
    g["default"] = a;
  },
  98
);
__d(
  "MPNMediaTemplate.react",
  [
    "cx",
    "Image.react",
    "MPNCallToAction.react",
    "MWChatVideoPlayer.react",
    "MessengerSpinner.react",
    "VideoAutoplayManagerX.react",
    "nullthrows",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = 360,
      k = 290,
      l = 100;
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var d = b.prototype;
      d.render = function () {
        if (!this.props.template) return null;
        var a = c("nullthrows")(this.props.template);
        return i.jsxs("div", {
          className: "_3cn0",
          children: [this.$1(a), this.$2(a)],
        });
      };
      d.$1 = function (a) {
        if (a.playable) {
          if (!a.playable_url) return null;
          var b = this.$3(a);
          return this.$4(a, b);
        }
        if (!a.image_url) return null;
        b = this.$5({ height: a.height, width: a.width });
        return i.jsx(c("Image.react"), {
          className: "_2k7y",
          height: b.y,
          width: b.x,
          src: a.image_url,
        });
      };
      d.$3 = function (a) {
        return {
          legacy_attachment_id: a.source_id,
          original_dimensions: this.$5({ height: a.height, width: a.width }),
          start_muted: !0,
          no_fullscreen: !0,
          hide_controls_on_finish: !0,
          url: a.playable_url,
          is_share: a.is_share,
        };
      };
      d.$4 = function (a, b) {
        if (b == null) return null;
        a = i.jsx(c("VideoAutoplayManagerX.react"), {
          children: i.jsx(c("MWChatVideoPlayer.react"), {
            controls: "mwchat",
            fbid: b.fbid,
            originalHeight: b.original_dimensions.y,
            originalWidth: b.original_dimensions.x,
            sdSrc: b.url,
          }),
        });
        return i.jsx(i.Suspense, {
          fallback: i.jsx("div", {
            style: {
              width: b.original_dimensions.x,
              height: b.original_dimensions.y,
            },
            children: i.jsx("div", {
              className: "spinner",
              children: i.jsx(c("MessengerSpinner.react"), {
                color: "blue",
                size: c("MessengerSpinner.react").medium_size,
              }),
            }),
          }),
          children: a,
        });
      };
      d.$5 = function (a) {
        var b = a.width;
        a = a.height;
        var c = 1;
        c = Math.min(c, Math.min(k / b, j / a));
        c = Math.max(c, l / b);
        b = Math.round(b * c);
        a = Math.round(a * c);
        return { x: b, y: a };
      };
      d.$2 = function (a) {
        if (!a.ctas || a.ctas.length === 0) return null;
        var b = this.props.messageID,
          d = this.$5({ height: a.height, width: a.width });
        return a.ctas.map(function (a, e) {
          return i.jsx(
            c("MPNCallToAction.react"),
            {
              width: d.x,
              callToAction: a,
              className: e === 0 ? "_6isd" : "",
              messageID: b,
            },
            a.id
          );
        });
      };
      return b;
    })(i.PureComponent);
    g["default"] = a;
  },
  98
);
__d(
  "MPNTemplateRenderer.react",
  [
    "ChatPluginTemplateConverter",
    "MPNButtonTemplate.react",
    "MPNFallbackAttachment.react",
    "MPNGenericTemplate.react",
    "MPNHScrollTemplate.react",
    "MPNMediaTemplate.react",
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
      e.render = function () {
        var a, b;
        b =
          (b = this.props.attachment) != null
            ? (b = b.share) != null
              ? (b = b.style_list) != null
                ? b[0]
                : b
              : b
            : b;
        var e = this.props.messageID;
        switch (b) {
          case "h_scroll":
            return h.jsx(c("MPNHScrollTemplate.react"), {
              templates: d(
                "ChatPluginTemplateConverter"
              ).convertSchemaToHScroll(this.props.attachment),
              messageID: e,
            });
          case "business_message_items":
            a =
              (a = this.props.attachment) != null
                ? (a = a.share) != null
                  ? (a = a.target) != null
                    ? a.call_to_actions
                    : a
                  : a
                : a;
            if (a && a.length > 0)
              return h.jsx(c("MPNButtonTemplate.react"), {
                attachment: this.props.attachment,
                messageID: e,
              });
            else
              return h.jsx(c("MPNGenericTemplate.react"), {
                template: d(
                  "ChatPluginTemplateConverter"
                ).convertLegacySchemaToGenericTemplate(
                  this.props.attachment,
                  !1
                ),
                messageID: e,
                setFeedback: this.props.setFeedback,
              });
          case "messenger_platform_media_attachment":
            return h.jsx(c("MPNMediaTemplate.react"), {
              template: d(
                "ChatPluginTemplateConverter"
              ).convertLegacySchemaToMediaTemplate(this.props.attachment),
              messageID: e,
            });
          case "messenger_generic_template":
            return (
              (a = this.props.attachment.share) == null
                ? void 0
                : (a = a.media) == null
                ? void 0
                : a.playable
            )
              ? h.jsx(c("MPNMediaTemplate.react"), {
                  template: d(
                    "ChatPluginTemplateConverter"
                  ).convertLightspeedSchemaToMediaTemplate(
                    this.props.attachment
                  ),
                  messageID: e,
                })
              : h.jsx(c("MPNGenericTemplate.react"), {
                  template: d(
                    "ChatPluginTemplateConverter"
                  ).convertLightspeedSchemaToGenericTemplate(
                    this.props.attachment.share
                  ),
                  messageID: e,
                });
          default:
            e =
              (a = this.props.attachment) != null
                ? (a = a.share) != null
                  ? (a = a.media) != null
                    ? a.image
                    : a
                  : a
                : a;
            a =
              (a = this.props.attachment) != null
                ? (a = a.share) != null
                  ? a.title
                  : a
                : a;
            return h.jsx(c("MPNFallbackAttachment.react"), {
              style: b,
              image: e,
              title: a,
            });
        }
      };
      return b;
    })(h.PureComponent);
    g["default"] = a;
  },
  98
);
__d(
  "XChatPluginStickerController",
  ["XController"],
  function (a, b, c, d, e, f) {
    e.exports = b("XController").create("/plugins/chat/sticker/", {
      sticker_id: { type: "Int", required: !0 },
      access_token: { type: "String" },
    });
  },
  null
);
__d(
  "XStickerAssetController",
  ["XController"],
  function (a, b, c, d, e, f) {
    e.exports = b("XController").create("/stickers/asset/", {
      sticker_id: { type: "Int", required: !0 },
      image_type: {
        type: "Enum",
        defaultValue: "BestEffortImage",
        enumType: 1,
      },
    });
  },
  null
);
__d(
  "MPNAttachmentRenderer.react",
  [
    "cx",
    "Image.react",
    "LiveChatPluginFileAttachment.react",
    "LiveChatPluginLinkShareAttachment.react",
    "MPNE2ETestUtils",
    "MPNFallbackAttachment.react",
    "MPNTemplateRenderer.react",
    "MWChatVideoPlayer.react",
    "MercuryAttachment",
    "MessagingPluginContext",
    "MessengerSpinner.react",
    "ShimButton.react",
    "Sticker.react",
    "StickerConstants",
    "URI",
    "VideoAutoplayManagerX.react",
    "XChatPluginStickerController",
    "XStickerAssetController",
    "guid",
    "isLinkshimURI",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = 360,
      k = 290;
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var e = b.prototype;
      e.render = function () {
        var a = this;
        return d("MercuryAttachment")
          .get(this.props.message)
          .filter(function (a) {
            return a === Object(a);
          })
          .map(function (b) {
            var d = null;
            switch (b.attach_type) {
              case "animated_image":
              case "photo":
                d = a.$1(b);
                break;
              case "sticker":
                d = a.$2(b);
                break;
              case "video":
                d = a.$3(b);
                break;
              case "share":
                d = a.$4(b);
                break;
              case "file":
                return a.$5(b);
              default:
                var e;
                e = (e = b) != null ? ((e = e.media) != null ? e.image : e) : e;
                d = i.jsx(c("MPNFallbackAttachment.react"), {
                  style: b.attach_type,
                  image: e,
                  title: b.title,
                });
                break;
            }
            e =
              (b == null
                ? void 0
                : (e = b.share) == null
                ? void 0
                : e.style_list[0]) === "h_scroll";
            return i.jsx(
              "div",
              { className: "_a179" + (e ? " _a42w" : ""), children: d },
              a.$6(b)
            );
          });
      };
      e.$1 = function (a) {
        return i.jsx(c("Image.react"), {
          className: "_2k7y",
          onClick: this.props.onMessageClick,
          src: a.large_preview_url || a.preview_url,
        });
      };
      e.$2 = function (a) {
        a = a.metadata;
        if (!a) return null;
        var b = this.context.state.shouldUseAccessTokenAuth
          ? c("XChatPluginStickerController")
              .getURIBuilder()
              .setInt("sticker_id", a.stickerID)
              .setString("access_token", this.context.state.loggedInAccessToken)
              .getURI()
              .toString()
          : c("XStickerAssetController")
              .getURIBuilder()
              .setInt("sticker_id", a.stickerID)
              .getURI()
              .toString();
        return i.jsx(c("ShimButton.react"), {
          onClick: this.props.onMessageClick,
          children: i.jsx(c("Sticker.react"), {
            accessibilityLabel: a.accessibilityLabel,
            animationTrigger: "load_and_hover",
            customColor: this.context.state.threadCSSColor,
            frameCount: a.frameCount || 1,
            frameRate: a.frameRate || c("StickerConstants").DEFAULT_FRAME_RATE,
            framesPerCol: a.framesPerCol || 1,
            framesPerRow: a.framesPerRow || 1,
            paddedSpriteURI: a.paddedSpriteURI,
            sourceHeight: a.height,
            sourceURI: b,
            sourceWidth: a.width,
            stickerID: a.stickerID.toString(),
            spriteURI: a.spriteURI,
          }),
        });
      };
      e.$3 = function (a) {
        a = this.$7(a);
        if (a == null) return null;
        var b = i.jsx(c("VideoAutoplayManagerX.react"), {
          children: i.jsx(c("MWChatVideoPlayer.react"), {
            controls: "mwchat",
            fbid: a.fbid,
            originalHeight: a.original_dimensions.y,
            originalWidth: a.original_dimensions.x,
            sdSrc: a.url,
          }),
        });
        return i.jsx(i.Suspense, {
          fallback: i.jsx("div", {
            style: {
              width: a.original_dimensions.x,
              height: a.original_dimensions.y,
            },
            children: i.jsx("div", {
              className: "spinner",
              children: i.jsx(c("MessengerSpinner.react"), {
                color: "blue",
                size: c("MessengerSpinner.react").medium_size,
              }),
            }),
          }),
          children: i.jsx("div", { "data-testid": void 0, children: b }),
        });
      };
      e.$4 = function (a) {
        var b,
          d,
          e,
          f = this.$8();
        e = (e = a) != null ? ((e = e.share) != null ? e.uri : e) : e;
        b = (b = this.props.message) == null ? void 0 : b.message_id;
        d = a == null ? void 0 : (d = a.share) == null ? void 0 : d.style_list;
        var g = "fallback";
        d != null && d.length > 0 && (g = d[0]);
        d =
          f != null ||
          g == "business_message_items" ||
          g == "messenger_generic_template" ||
          g == "h_scroll";
        if (d)
          return i.jsx(c("MPNTemplateRenderer.react"), {
            attachment: a,
            messageID: b,
            setFeedback: this.props.setFeedback,
          });
        else if (e && c("isLinkshimURI")(new (c("URI"))(e))) {
          var h;
          d = (f = a) != null ? ((f = f.share) != null ? f.description : f) : f;
          f =
            (b = a) != null
              ? (b = b.share) != null
                ? (b = b.media) != null
                  ? b.image
                  : b
                : b
              : b;
          b = (b = a) != null ? ((b = b.share) != null ? b.source : b) : b;
          h = (h = a) != null ? ((h = h.share) != null ? h.title : h) : h;
          return i.jsx(c("LiveChatPluginLinkShareAttachment.react"), {
            description: d,
            image: f,
            source: b,
            title: h,
            uri: e,
          });
        } else {
          f =
            (d = a) != null
              ? (d = d.share) != null
                ? (d = d.media) != null
                  ? d.image
                  : d
                : d
              : d;
          h = (b = a) != null ? ((b = b.share) != null ? b.title : b) : b;
          return i.jsx(c("MPNFallbackAttachment.react"), {
            style: g,
            image: f,
            title: h,
          });
        }
      };
      e.$5 = function (a) {
        return i.jsx(
          c("ShimButton.react"),
          {
            className: "_a179",
            onClick: this.props.onMessageClick,
            style: { border: "none" },
            children: i.jsx("div", {
              className: "_46jp",
              children: i.jsx(
                c("LiveChatPluginFileAttachment.react"),
                { attachment: a, isFromViewer: this.props.isFromViewer },
                "file:" + a.url
              ),
            }),
          },
          this.$6(a)
        );
      };
      e.$6 = function (a) {
        if (a.deduplication_key) return a.deduplication_key;
        if (a.metadata && a.metadata.fbid) return a.metadata.fbid;
        return a.upload_id ? a.upload_id : c("guid")();
      };
      e.$7 = function (a) {
        var b, c;
        if (!a.metadata) return null;
        c =
          ((c = a) != null
            ? (c = c.metadata) != null
              ? (c = c.dimensions) != null
                ? c.width
                : c
              : c
            : c) || k;
        b =
          ((b = a) != null
            ? (b = b.metadata) != null
              ? (b = b.dimensions) != null
                ? b.height
                : b
              : b
            : b) || j;
        c = c / b;
        b = {
          x: c >= 1 ? k : Math.round(j * c),
          y: c >= 1 ? Math.round(k / c) : j,
        };
        return {
          legacy_attachment_id: a.metadata.fbid,
          original_dimensions: b,
          start_muted: !0,
          no_fullscreen: !0,
          hide_controls_on_finish: !0,
          url: a.url,
        };
      };
      e.$8 = function () {
        try {
          var a = this.props.message.platform_xmd;
          if (a) {
            a = JSON.parse(a);
            if (a) return a;
          }
        } catch (a) {}
        return null;
      };
      return b;
    })(i.PureComponent);
    a.contextType = c("MessagingPluginContext");
    g["default"] = a;
  },
  98
);
__d(
  "MPNQuickReplyContainer.react",
  ["cx", "MPNConstants", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.layout;
      a = a.children;
      b = b === d("MPNConstants").MPNQuickReplyLayout.HORIZONTAL;
      return i.jsx("div", {
        className: (b ? "_9k7q" : "") + (b ? "" : " _9k7r"),
        children: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "MPNQuickReplyPill.react",
  ["cx", "ShimButton.react", "Tooltip.react", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.children,
        d = a.onClick,
        e = a.disabled;
      a = a.tooltip;
      e = i.jsx(c("ShimButton.react"), {
        "data-testid": void 0,
        className: "_9k7s" + (e ? " _9k7t" : ""),
        onClick: d,
        children: b,
      });
      return a !== void 0
        ? i.jsx(c("Tooltip.react"), { tooltip: a, children: e })
        : e;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "MPNIcebreakers.react",
  [
    "LiveChatPluginLoggerUtil",
    "MPNConstants",
    "MPNIdentity",
    "MPNQuickReplyContainer.react",
    "MPNQuickReplyPill.react",
    "MessagingPluginContext",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useContext,
      j = b.useEffect;
    function a(a) {
      a = i(c("MessagingPluginContext")).state;
      var b = a.icebreakers,
        e = a.icebreakerCtas,
        f = a.pageID,
        g = a.messageStore,
        k = a.refererUri;
      j(
        function () {
          b != null &&
            b.length > 0 &&
            d("LiveChatPluginLoggerUtil").logImpressionUsingFalco_UnsafeFor3PD(
              f,
              "icebreakers",
              null,
              null,
              null,
              null,
              d("MPNIdentity").MPNIdentity.currentUserID()
            );
        },
        [f, b]
      );
      if (!b) return null;
      var l = function (a) {
          var b = d("MPNIdentity").MPNIdentity.currentUserID();
          if (b == null) return;
          b = d("MPNIdentity").MPNIdentity.currentUserState();
          var c = b === d("MPNIdentity").MPNIdentityState.FB;
          if (
            b !== d("MPNIdentity").MPNIdentityState.GUEST &&
            b !== d("MPNIdentity").MPNIdentityState.FB
          )
            return;
          else {
            if (!g || !g.sendQueue) return;
            b = g.sendQueue;
            if (!b) return;
            b.enqueueAndSend(
              a.title,
              c,
              k,
              b.makePlatformTokenForPostbackCTA(a.id)
            );
          }
          n();
        },
        m = function (a) {
          var b = d("MPNIdentity").MPNIdentity.currentUserID();
          if (b == null) return;
          b = d("MPNIdentity").MPNIdentity.currentUserState();
          var c = b === d("MPNIdentity").MPNIdentityState.FB;
          if (
            b !== d("MPNIdentity").MPNIdentityState.GUEST &&
            b !== d("MPNIdentity").MPNIdentityState.FB
          )
            return;
          else {
            if (!g || !g.sendQueue) return;
            b = g.sendQueue;
            if (!b) return;
            b.enqueueAndSend(a, c, k);
          }
          n();
        },
        n = function () {
          var a = d("MPNIdentity").MPNIdentity.currentUserID();
          if (a == null) return;
          var b = d("MPNIdentity").MPNIdentity.currentUserState();
          b === d("MPNIdentity").MPNIdentityState.GUEST
            ? d("LiveChatPluginLoggerUtil").logActionUsingFalco(
                a,
                f,
                "guest_chat_tab",
                "message_send",
                null,
                null,
                null,
                "true"
              )
            : d("LiveChatPluginLoggerUtil").logActionUsingFalco(
                a,
                f,
                "logged_in_chat_tab",
                "message_send",
                null,
                null,
                null,
                "true"
              );
        };
      e != null && e.length > 0
        ? (a = e.map(function (a, b) {
            return h.jsx(
              c("MPNQuickReplyPill.react"),
              {
                onClick: function () {
                  return l(a);
                },
                children: a.title,
              },
              b
            );
          }))
        : (a = b.map(function (a, b) {
            return h.jsx(
              c("MPNQuickReplyPill.react"),
              {
                onClick: function () {
                  return m(a.message);
                },
                children: a.message,
              },
              a.messageKey + b
            );
          }));
      return h.jsx(c("MPNQuickReplyContainer.react"), {
        layout: d("MPNConstants").MPNQuickReplyLayout.VERTICAL,
        children: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "MPNIcebreakersGroup.react",
  ["MPNIcebreakers.react", "MPNIdentity", "MessagingPluginContext", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useContext;
    function a(a) {
      var b = a.threadID,
        e = a.messages,
        f = a.store;
      i(c("MessagingPluginContext")).state.hasAutomation;
      a = function () {
        var a = d("MPNIdentity").MPNIdentity.currentUserState();
        a === d("MPNIdentity").MPNIdentityState.FB
          ? (a = f != null && f.hasFetchedAll() && e.size === 0)
          : (a =
              f != null &&
              f.hasFetchedAll() &&
              ((e.size === 1 &&
                e.get(0).action_type === "ma-type:log-message") ||
                e.size === 0));
        return a;
      };
      a = a();
      return a ? h.jsx(c("MPNIcebreakers.react"), { threadID: b }) : null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "MPNLogMessage.react",
  [
    "cx",
    "BasePopoverTrigger.react",
    "ChatPluginTestId",
    "CometPressable.react",
    "Link.react",
    "LinkCTAXMATAsyncLink.react",
    "MPNAdminTextOptInAgainButton.react",
    "MPNAdminTextOptOutButton.react",
    "ManageNotificationMessagesUserActionType",
    "MessagingPluginReEngagementAdminTextManageButtonDropDownMenu.react",
    "MessengerTextWithEntities.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b;
      b =
        (b = a.message) != null
          ? (b = b.log_message_data) != null
            ? b.message_type
            : b
          : b;
      var d = null;
      switch (b) {
        case "link_cta":
          if (
            a.message.log_message_data != null &&
            a.message.log_message_data.untypedData !== null
          ) {
            b = a.message.log_message_data.untypedData;
            var e = b.primary_text
                ? b.primary_text
                : b.link_cta_xmat_primary_text,
              f = b.primary_text ? b.cta_text : b.link_cta_xmat_cta_text;
            if (b.www_is_async_url) {
              var g = b.async_url;
              d = i.jsxs("div", {
                children: [
                  e,
                  " ",
                  i.jsx(c("LinkCTAXMATAsyncLink.react"), { text: f, uri: g }),
                ],
              });
            } else {
              g = b.primary_text ? b.cta_url : b.link_cta_xmat_cta_url;
              d = i.jsxs("div", {
                children: [
                  e,
                  " ",
                  i.jsx(c("Link.react"), { href: g, children: f }),
                ],
              });
            }
          } else d = null;
          break;
        case "notification_messages":
          if (
            a.message.log_message_data != null &&
            a.message.log_message_data.untypedData !== null
          ) {
            b = i.jsx(c("MessengerTextWithEntities.react"), {
              renderEmoji: !0,
              renderEmoticons: !0,
              text: a.message.log_message_body,
            });
            e = a.message.log_message_data.untypedData;
            if (
              e.user_action_type === "RESUME_MESSAGES" ||
              e.user_action_type ===
                String(
                  c("ManageNotificationMessagesUserActionType").RESUME_MESSAGES
                )
            )
              return i.jsxs("div", {
                className: "logMessage",
                "data-testid": void 0,
                children: [
                  b,
                  " ",
                  i.jsx(c("BasePopoverTrigger.react"), {
                    popover: c(
                      "MessagingPluginReEngagementAdminTextManageButtonDropDownMenu.react"
                    ),
                    popoverProps: { tokenEntIdString: e.token_ent_id_string },
                    children: function (a, b) {
                      return i.jsx("div", {
                        ref: a,
                        className: "xt0psk2",
                        children: i.jsx(c("CometPressable.react"), {
                          onPress: b,
                          children: i.jsx(
                            c("MPNAdminTextOptOutButton.react"),
                            {}
                          ),
                        }),
                      });
                    },
                  }),
                ],
              });
            else if (
              e.user_action_type === "STOP_MESSAGES" ||
              e.user_action_type ===
                String(
                  c("ManageNotificationMessagesUserActionType").STOP_MESSAGES
                )
            )
              return i.jsxs("div", {
                className: "logMessage",
                "data-testid": void 0,
                children: [
                  b,
                  " ",
                  i.jsx("div", {
                    className: "xt0psk2",
                    children: i.jsx(c("MPNAdminTextOptInAgainButton.react"), {
                      tokenEntIdString: e.token_ent_id_string,
                    }),
                  }),
                ],
              });
            else return i.jsx("div", { className: "logMessage", children: b });
          }
          break;
        default:
          d = i.jsx(c("MessengerTextWithEntities.react"), {
            renderEmoji: !0,
            renderEmoticons: !0,
            text: a.message.log_message_body,
          });
      }
      return i.jsx("div", { className: "logMessage", children: d });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "MPNMessageAttachment.react",
  ["cx", "MPNAttachmentRenderer.react", "MessengerHotLikeSVGReact.bs", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.message,
        e = a.isFromViewer,
        f = a.backgroundColor,
        g = a.onMessageClick,
        h = a.setFeedback;
      a = function () {
        return b.is_like_preview
          ? i.jsx("div", {
              className: "_8gn6 _8gn7",
              children: i.jsx(
                d("MessengerHotLikeSVGReact.bs").MessengerHotLikeSVGReact,
                { color: f }
              ),
            })
          : i.jsx(c("MPNAttachmentRenderer.react"), {
              backgroundColor: f,
              isFromViewer: e,
              message: b,
              onMessageClick: g,
              setFeedback: h,
            });
      };
      var j = null;
      if (b.has_attachment || b.attachments.length > 0) {
        a = a();
        a &&
          (j = i.jsx(
            "div",
            {
              className:
                "_4xko _2k7w" + (e ? "" : " _4xkr") + (e ? " _4xks" : ""),
              children: a,
            },
            "a:" + b.message_id
          ));
      }
      return j;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "MPNMessageBubble.react",
  [
    "cx",
    "EmojiOnlyMessage.react",
    "MessengerSupportedEmojiUtils",
    "MessengerTextWithEntities.react",
    "ShimButton.react",
    "UnicodeUtils",
    "getURLRanges",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.message,
        e = a.isFromViewer,
        g = a.backgroundColor,
        h = a.emojis;
      a = a.onMessageClick;
      var j = function (a) {
        return d("MessengerSupportedEmojiUtils").isSupportedEmojiKey(a);
      };
      function k(a) {
        var b = d("UnicodeUtils").strlen(a),
          e = c("getURLRanges")(a).filter(function (a) {
            return a != null;
          });
        e = e
          .filter(function (a) {
            return a.offset >= 0 && a.offset + a.length <= b;
          })
          .map(function (a) {
            return babelHelpers["extends"]({}, a, { offset: a.offset });
          });
        return i.jsx(c("MessengerTextWithEntities.react"), {
          isSupportedEmoji: j,
          ranges: e,
          renderEmoji: !0,
          renderEmoticons: !0,
          text: a,
        });
      }
      k.displayName = k.name + " [from " + f.id + "]";
      var l = null;
      h && h.length > 0
        ? (l = i.jsx(c("EmojiOnlyMessage.react"), { contents: h }))
        : b.body && (l = k(b.body));
      return l
        ? i.jsx(
            c("ShimButton.react"),
            {
              className:
                "_4xko" +
                (h ? " _gb1" : "") +
                (e ? "" : " _4xkr") +
                (e ? " _4xks" : ""),
              onClick: a,
              style: { backgroundColor: g },
              tabIndex: "0",
              children: l,
            },
            "t:" + b.message_id
          )
        : null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "MPNMessageDeliveryState.react",
  ["cx", "fbt", "MercuryMessageDeliveryState", "react"],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function a(a) {
      var b = a.deliveryState,
        d = a.deliveryStateTitle,
        e = a.isFromViewer,
        f = a.showDeliveryState,
        g = a.showErrorMessage;
      a = a.threadCSSColor;
      if (
        !e ||
        !f ||
        b === c("MercuryMessageDeliveryState").UNKNOWN ||
        g ||
        b === c("MercuryMessageDeliveryState").ERROR
      )
        return null;
      e = {};
      (b === c("MercuryMessageDeliveryState").SENT ||
        b === c("MercuryMessageDeliveryState").SENDING ||
        b === c("MercuryMessageDeliveryState").DELIVERED) &&
        (e.color = a);
      return j.jsx("span", {
        className:
          "_21c6" +
          (b === c("MercuryMessageDeliveryState").SENDING ? " _4f-a" : "") +
          (b === c("MercuryMessageDeliveryState").SENT ? " _4f-b" : "") +
          (b === c("MercuryMessageDeliveryState").DELIVERED ? " _21c8" : ""),
        style: e,
        title: d,
        children: j.jsx("i", {
          "aria-label": d,
          "aria-roledescription": i._("Ic\u00f4ne Statut"),
          className:
            b !== c("MercuryMessageDeliveryState").SENDING ? "_21c7" : "",
          role: "img",
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "MPNMessageErrorMessage.react",
  [
    "cx",
    "fbt",
    "ChatPluginMessengerErrorMessageIconSVG.react",
    "LiveChatPluginConstants",
    "MercuryMessageDeliveryState",
    "Text.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function a(a) {
      var b = a.connectionState,
        e = a.deliveryState,
        f = a.deliveryStateTitle,
        g = a.isFromViewer,
        h = a.setShowErrorMessage;
      a = a.showErrorMessage;
      if (!g) return null;
      g = a;
      e === c("MercuryMessageDeliveryState").ERROR ||
      (e === c("MercuryMessageDeliveryState").SENDING &&
        b !==
          d("LiveChatPluginConstants").MQTTGatewayConnectionState.CONNECTED &&
        !navigator.userAgent.includes("Firefox"))
        ? (h(!0), (g = !0))
        : e !== c("MercuryMessageDeliveryState").ERROR &&
          a &&
          (h(!1), (g = !1));
      return j.jsxs(c("Text.react"), {
        className: "_6934" + (g ? "" : " noDisplay"),
        onClick: function () {},
        children: [
          i._("Ce message n\u2019a pas \u00e9t\u00e9 envoy\u00e9."),
          j.jsx("span", {
            className: "_21c6 error",
            title: f,
            children: j.jsx(
              c("ChatPluginMessengerErrorMessageIconSVG.react"),
              {}
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
  "MPNMessageSeenHead.react",
  [
    "cx",
    "fbt",
    "Image.react",
    "MercuryTimestamp",
    "MessagingPluginContext",
    "MessengerMessage.bs",
    "isStringNullOrEmpty",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = d("react").useContext;
    function a(a) {
      var b = a.showSeenHead,
        e = a.message;
      a = a.readReceipt;
      var f = k(c("MessagingPluginContext"));
      f = f.state;
      var g = f.pageName;
      f = f.pageProfilePictureUri;
      var h = !c("isStringNullOrEmpty")(f);
      if (
        d("MessengerMessage.bs").isSending(e) ||
        d("MessengerMessage.bs").hasError(e) ||
        !h ||
        !b ||
        a == null
      )
        return null;
      e = a.action / 1e3;
      h = Object.keys(a).length
        ? i._("Vu par {full name} \u00e0 {seen time}", [
            i._param("full name", g),
            i._param("seen time", d("MercuryTimestamp").getPreciseTimestamp(e)),
          ])
        : i._("Vu par {full name}", [i._param("full name", g)]);
      return j.jsx("span", {
        className: "_21c4",
        children: j.jsx(c("Image.react"), {
          alt: h,
          className: "_21c5",
          src: f,
          title: h,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "MPNMessageState.react",
  [
    "cx",
    "fbt",
    "MercuryMessageDeliveryState",
    "MercuryTimestamp",
    "Text.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function a(a) {
      var b = a.deliveryState,
        e = a.deliveryStateTitle,
        f = a.isFromViewer,
        g = a.lastMessageID,
        h = a.message,
        k = a.readReceipt,
        l = a.showSeenHead,
        m = a.showSentAndSeenHead;
      a = a.showTimestamp;
      if (!a || b === c("MercuryMessageDeliveryState").ERROR) return null;
      a =
        !m ||
        k == null ||
        (m && (!f || (h.timestamp < k.action && g !== h.message_id)));
      b = m && l && f && g !== null;
      h = e;
      a
        ? (h = i._("Vu"))
        : b &&
          (h =
            k != null
              ? i._("{=m0}{seen time}", [
                  i._param(
                    "seen time",
                    d("MercuryTimestamp").getPreciseTimestamp(k.action)
                  ),
                  i._implicitParam(
                    "=m0",
                    j.jsx(c("Text.react"), {
                      style: { fontWeight: "800", paddingRight: "3px" },
                      children: i._("Vu"),
                    })
                  ),
                ])
              : null);
      return j.jsx(c("Text.react"), {
        className: "_9w6e" + (f ? " _9w6f" : "") + (f ? "" : " _9w6g"),
        children: h,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "MPNMessage.react",
  [
    "cssVar",
    "cx",
    "Arbiter",
    "LiveChatPluginConstants",
    "LiveChatPluginFbts",
    "LiveChatPluginLoggerUtil",
    "MPNIdentity",
    "MPNMessageAttachment.react",
    "MPNMessageBubble.react",
    "MPNMessageDeliveryState.react",
    "MPNMessageErrorMessage.react",
    "MPNMessageSeenHead.react",
    "MPNMessageState.react",
    "MessagingPluginContext",
    "MessengerDateBreak.bs",
    "MessengerMessage.bs",
    "MessengerSupportedEmojiUtils",
    "ReactDOM",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, e;
        for (var f = arguments.length, g = new Array(f), h = 0; h < f; h++)
          g[h] = arguments[h];
        return (
          ((b = e = a.call.apply(a, [this].concat(g)) || this),
          (e.state = { emojis: null, showTimestamp: !1 }),
          (e.$1 = !1),
          (e.$5 = function () {
            var a = e.context.state,
              b = a.guestID;
            a = a.pageID;
            if (e.props.message.message_id == "welcome_message") return;
            e.setState(function (a) {
              a = !a.showTimestamp;
              e.props.showTimestampHandler(
                a && e.props.isLastMessageInGroup && !e.props.isFromViewer
              );
              a &&
                c("Arbiter").inform(
                  d("LiveChatPluginConstants").CLOSE_TIMESTAMPS
                );
              return { showTimestamp: a };
            });
            d("LiveChatPluginLoggerUtil").logActionFromNewUI(
              "in_thread_action",
              b,
              a,
              d("MPNIdentity").MPNIdentity.currentUserState() ===
                d("MPNIdentity").MPNIdentityState.FB
                ? "logged_in_chat_tab"
                : "guest_chat_tab",
              { action_type: "customer_chat_message_bubble_clicked" }
            );
          }),
          (e.$6 = function (a) {
            e.$1 = a;
          }),
          b) || babelHelpers.assertThisInitialized(e)
        );
      }
      var e = b.prototype;
      e.componentDidMount = function () {
        var a = this;
        if (this.props.message.body) {
          var b = d("MessengerSupportedEmojiUtils").getEmojiOnlyContents(
            this.props.message.body
          );
          this.setState({ emojis: b });
        }
        this.$2 = c("Arbiter").subscribe(
          d("LiveChatPluginConstants").CLOSE_TIMESTAMPS,
          function (b) {
            a.state.showTimestamp &&
              (a.setState({ showTimestamp: !1 }),
              a.props.isLastMessageInGroup &&
                !a.props.isFromViewer &&
                a.props.showTimestampHandler(!1));
          }
        );
      };
      e.componentDidUpdate = function () {
        if (this.state.showTimestamp) {
          var a = d("ReactDOM").findDOMNode(this);
          a instanceof HTMLElement &&
            this.props.scrollIntoView(a, this.props.dateBreakPreceeds);
        }
      };
      e.componentWillUnmount = function () {
        c("Arbiter").unsubscribe(this.$2);
      };
      e.render = function () {
        var a = this.props,
          b = a.connectionState,
          e = a.isFromViewer,
          f = a.lastMessageID,
          g = a.message,
          h = a.readReceipt,
          i = a.showDeliveryState;
        a = a.showSentAndSeenHead;
        if (g.is_filtered_content) return null;
        var k = d("MessengerMessage.bs").getDeliveryState(
            this.props.message,
            this.props.deliveryTimestamp
          ),
          l = d("LiveChatPluginFbts").getDeliveryStateTitle(k),
          m = "transparent";
        !this.state.emojis && e
          ? (m = this.context.state.threadCSSColor)
          : !this.state.emojis && !e && (m = "rgba(0, 0, 0, 0.06)");
        var n = this.$3();
        return j.jsxs("div", {
          className: "_21c3",
          children: [
            this.$4(),
            j.jsxs("div", {
              className: "clearfix _2a0-",
              children: [
                j.jsx(c("MPNMessageBubble.react"), {
                  message: g,
                  isFromViewer: e,
                  backgroundColor: m,
                  emojis: this.state.emojis,
                  onMessageClick: this.$5,
                }),
                j.jsx(c("MPNMessageAttachment.react"), {
                  message: g,
                  isFromViewer: e,
                  backgroundColor: m,
                  onMessageClick: this.$5,
                  setFeedback: this.props.setFeedback,
                }),
                j.jsx(c("MPNMessageSeenHead.react"), {
                  showSeenHead: n,
                  message: g,
                  readReceipt: h,
                }),
                j.jsx(c("MPNMessageErrorMessage.react"), {
                  connectionState: b,
                  deliveryState: k,
                  deliveryStateTitle: l,
                  isFromViewer: e,
                  setShowErrorMessage: this.$6,
                  showErrorMessage: this.$1,
                }),
                j.jsx(c("MPNMessageDeliveryState.react"), {
                  deliveryState: k,
                  deliveryStateTitle: l,
                  isFromViewer: e,
                  showDeliveryState: i,
                  showErrorMessage: this.$1,
                  threadCSSColor: this.context.state.threadCSSColor,
                }),
              ],
            }),
            j.jsx(c("MPNMessageState.react"), {
              deliveryState: k,
              deliveryStateTitle: l,
              isFromViewer: e,
              lastMessageID: f,
              message: g,
              readReceipt: h,
              showSeenHead: n,
              showSentAndSeenHead: a,
              showTimestamp: this.state.showTimestamp,
            }),
          ],
        });
      };
      e.$4 = function () {
        return !this.state.showTimestamp || this.props.dateBreakPreceeds
          ? null
          : j.jsx(d("MessengerDateBreak.bs").make, {
              className: "datebreak",
              date: new Date(this.props.message.timestamp),
            });
      };
      e.$3 = function () {
        var a = this.props,
          b = a.message,
          c = a.isFromViewer,
          d = a.isLastMessageInGroup,
          e = a.lastReadTimestamp,
          f = a.showSentAndSeenHead;
        a = a.nextMessageTimestamp;
        if (!f) return !1;
        if (
          c &&
          !(
            (e === Infinity && d && a === Infinity) ||
            e === b.timestamp ||
            (e > b.timestamp && e < a)
          )
        )
          return !1;
        else if (!c && e !== b.timestamp) return !1;
        return !0;
      };
      return b;
    })(j.PureComponent);
    a.contextType = c("MessagingPluginContext");
    g["default"] = a;
  },
  98
);
__d(
  "MPNMessageGroup.react",
  [
    "cx",
    "fbt",
    "MPNMessage.react",
    "MessagingPluginContext",
    "MessagingPluginMobileProfilePicture.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
          e[f] = arguments[f];
        return (
          ((b = c = a.call.apply(a, [this].concat(e)) || this),
          (c.state = { showTimestamp: !1 }),
          (c.$2 = function (a) {
            if (c.props.isFromViewer) return;
            c.setState({ showTimestamp: a });
          }),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      var d = b.prototype;
      d.render = function () {
        var a,
          b = this;
        a = this.props.isFromViewer
          ? null
          : j.jsx("div", {
              className: "profilePictureColumn",
              style: { bottom: this.state.showTimestamp ? "15px" : "0px" },
              children: j.jsx(c("MessagingPluginMobileProfilePicture.react"), {
                personaProfilePictureUri:
                  (a = this.props.persona) == null
                    ? void 0
                    : a.profile_picture_url,
                className: "profilePicture",
                disableStatusIndicator: !0,
              }),
            });
        var d = this.props.messages.map(function (a, d) {
          return j.jsx(
            c("MPNMessage.react"),
            {
              connectionState: b.props.connectionState,
              dateBreakPreceeds: b.props.dateBreakPreceeds && d === 0,
              deliveryTimestamp: b.props.deliveryTimestamp,
              isFromViewer: b.props.isFromViewer,
              isLastMessageInGroup: d === b.props.messages.length - 1,
              lastMessageID: b.props.lastMessageID,
              lastReadTimestamp: b.props.lastReadTimestamp,
              message: a,
              nextMessageTimestamp: b.$1(d),
              readReceipt: b.props.readReceipt,
              scrollIntoView: b.props.scrollIntoView,
              showDeliveryState: a.timestamp > b.props.lastReadTimestamp,
              showSentAndSeenHead:
                b.props.nextGroupTimestamp >= b.props.lastReadTimestamp,
              showTimestampHandler: b.$2,
              attachmentDidUpdate: a.attachments.length > 0,
              setFeedback: b.props.setFeedback,
            },
            a.message_id
          );
        });
        return j.jsxs("div", {
          className: "_4xkn clearfix",
          children: [
            a,
            j.jsxs("div", {
              className: "messages",
              children: [this.$3(), j.jsx("div", { children: d })],
            }),
          ],
        });
      };
      d.$3 = function () {
        var a = this.context.state.pageName;
        if (this.props.persona != null) {
          a = i._("{persona name} de {page name}", [
            i._param("persona name", this.props.persona.name),
            i._param("page name", a),
          ]);
          var b = a.toString();
          return j.jsx("div", {
            "aria-label": b,
            className: "_9e1n",
            children: a,
          });
        }
        return null;
      };
      d.$1 = function (a) {
        return a < this.props.messages.length - 1
          ? this.props.messages[a + 1].timestamp
          : this.props.nextGroupTimestamp;
      };
      return b;
    })(j.PureComponent);
    a.contextType = c("MessagingPluginContext");
    g["default"] = a;
  },
  98
);
__d(
  "MPNMessageList.react",
  [
    "cx",
    "MPNIdentity",
    "MPNLogMessage.react",
    "MPNMessageGroup.react",
    "MPNMessageListDataHelper",
    "MercuryIDs",
    "MercuryMessageGroup",
    "MessagingPluginContext",
    "MessengerDateBreak.bs",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = 1e3 * 60 * 60;
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
          f[g] = arguments[g];
        return (
          ((b = c = a.call.apply(a, [this].concat(f)) || this),
          (c.state = {
            messageGroups: d("MercuryMessageGroup").calculateMessageGroups(
              c.props.messages
            ),
          }),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      var e = b.prototype;
      e.UNSAFE_componentWillReceiveProps = function (a) {
        a.messages !== this.props.messages &&
          this.setState({
            messageGroups: d("MercuryMessageGroup").calculateMessageGroups(
              a.messages
            ),
          });
      };
      e.render = function () {
        var a = d("MPNIdentity").MPNIdentity.currentUserID();
        if (a == null) return null;
        var b = [],
          e = this.state.messageGroups,
          f = this.props.readReceipt,
          g = f ? f.watermark : 0,
          h = this.props.messages.last()
            ? this.props.messages.last().message_id
            : null;
        for (var k = 0; k < e.length; k++) {
          var l = k > 0 ? e[k - 1] : null;
          l = l ? l[l.length - 1] : null;
          var m = e[k],
            n = m[0],
            o = m[m.length - 1],
            p = !1;
          (!l || n.timestamp - l.timestamp > j) &&
            (b.push(
              i.jsx(
                d("MessengerDateBreak.bs").make,
                { className: "datebreak", date: new Date(n.timestamp) },
                "db:" + n.message_id
              )
            ),
            (p = !0));
          if (n.action_type === "ma-type:log-message") {
            m.filter(function (a) {
              return (
                a.log_message_type !== "log:error-msg" && a.log_message_body
              );
            }).map(function (a) {
              return b.push(
                i.jsx(
                  c("MPNLogMessage.react"),
                  { message: a },
                  "mg:" + a.message_id
                )
              );
            });
            continue;
          }
          l = d("MPNMessageListDataHelper").getNextTimestamp(e, k);
          var q = d("MPNMessageListDataHelper").receiptInRange(f, m, l),
            r = d("MPNMessageListDataHelper").getLastReadTimestamp(g, o),
            s = d("MPNMessageListDataHelper").getOptimizedDeliveryTimestamp(
              o,
              this.props.deliveryTimestamp
            );
          o = d("MPNMessageListDataHelper").getPersona(o);
          var t = n.author === d("MercuryIDs").getParticipantIDFromUserID(a);
          b.push(
            i.jsx(
              c("MPNMessageGroup.react"),
              {
                persona: o,
                connectionState: this.props.connectionState,
                dateBreakPreceeds: p,
                deliveryTimestamp: s,
                isFromViewer: t,
                lastMessageID: h,
                lastReadTimestamp: r,
                messages: m,
                nextGroupTimestamp: l,
                readReceipt: q ? f : null,
                scrollIntoView: this.props.scrollIntoView,
                setFeedback: this.props.setFeedback,
              },
              "mg:" + n.message_id
            )
          );
        }
        return b;
      };
      return b;
    })(i.PureComponent);
    a.contextType = c("MessagingPluginContext");
    g["default"] = a;
  },
  98
);
__d(
  "MPNQuickReplies.react",
  [
    "cx",
    "fbt",
    "Image.react",
    "LiveChatPluginLoggerUtil",
    "MPNConstants",
    "MPNIdentity",
    "MPNQuickReplyContainer.react",
    "MPNQuickReplyPill.react",
    "MessagingPluginContext",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c) {
        b = a.call(this, b, c) || this;
        c = d("MPNIdentity").MPNIdentity.currentUserID();
        b.$1 =
          d("MPNIdentity").MPNIdentity.currentUserState() ===
            d("MPNIdentity").MPNIdentityState.FB && !!c;
        if (
          b.context.state.hasActiveAutomation &&
          b.props.quickReplies.length > 0
        ) {
          c = b.props.quickReplies.map(function (a) {
            return a.title;
          });
          d("LiveChatPluginLoggerUtil").logNewImpressionEvents_UnsafeFor3PD(
            "automation_faq_impression",
            b.context.state.pageID,
            b.context.state.accessToken
              ? "guest_chat_tab"
              : "logged_in_chat_tab",
            { faq_titles: JSON.stringify(c) }
          );
        }
        return b;
      }
      var e = b.prototype;
      e.render = function () {
        var a = this,
          b = this.props.quickReplies.map(function (b, e) {
            var f = b.content_type;
            switch (f) {
              case d("MPNConstants").MPNQuickReplyContentType.TEXT:
                f = b.image_url
                  ? j.jsx(c("Image.react"), {
                      className: "_95s6",
                      src: b.image_url,
                    })
                  : null;
                return j.jsxs(
                  c("MPNQuickReplyPill.react"),
                  {
                    onClick: function () {
                      a.$2(b, b.title, e);
                    },
                    children: [f, b.title],
                  },
                  e
                );
              case d("MPNConstants").MPNQuickReplyContentType.USER_EMAIL:
              case d("MPNConstants").MPNQuickReplyContentType.USER_PHONE_NUMBER:
              case d("MPNConstants").MPNQuickReplyContentType.USER_STATE:
              case d("MPNConstants").MPNQuickReplyContentType.USER_ZIP_CODE:
                return a.$3(b, e);
              default:
                return j.jsx(
                  c("MPNQuickReplyPill.react"),
                  {
                    disabled: !0,
                    tooltip: i._(
                      "Pour utiliser cette fonctionnalit\u00e9, utilisez l\u2019app Messenger."
                    ),
                    children: b.title,
                  },
                  e
                );
            }
          }),
          e =
            this.props.type === "horizontal"
              ? d("MPNConstants").MPNQuickReplyLayout.HORIZONTAL
              : d("MPNConstants").MPNQuickReplyLayout.VERTICAL;
        return j.jsx(c("MPNQuickReplyContainer.react"), {
          layout: e,
          children: b,
        });
      };
      e.$2 = function (a, b, c) {
        var e = this.context.state,
          f = e.pageID,
          g = e.accessToken,
          h = e.messageStore,
          i = e.hasActiveAutomation;
        e = e.refererUri;
        var j = d("MPNIdentity").MPNIdentity.currentUserState(),
          k = d("MPNIdentity").MPNIdentity.currentUserID();
        if (
          j !== d("MPNIdentity").MPNIdentityState.GUEST &&
          j !== d("MPNIdentity").MPNIdentityState.FB
        )
          return;
        else {
          j = h.sendQueue;
          if (!j) return;
          j.enqueueAndSend(b, this.$1, e, j.makePlatformTokenForQuickReply(a));
        }
        d("LiveChatPluginLoggerUtil").logActionFromNewUI(
          "in_thread_action",
          k,
          f,
          g ? "guest_chat_tab" : "logged_in_chat_tab",
          { action_type: "customer_chat_quick_reply_clicked" }
        );
        i &&
          d("LiveChatPluginLoggerUtil").logActionFromNewUI(
            "automation_faq_sent",
            k,
            f,
            g ? "guest_chat_tab" : "logged_in_chat_tab",
            { faq_index: c.toString(), faq_title: b }
          );
      };
      e.$3 = function (a, b) {
        var e = this,
          f = null;
        switch (a.content_type) {
          case d("MPNConstants").MPNQuickReplyContentType.USER_EMAIL:
            f = this.props.viewerEmail;
            a.payload = f;
            break;
          case d("MPNConstants").MPNQuickReplyContentType.USER_PHONE_NUMBER:
            f = this.props.viewerPhone;
            a.payload = f;
            break;
          case d("MPNConstants").MPNQuickReplyContentType.USER_STATE:
            f = this.props.viewerState;
            a.payload = f;
            break;
          case d("MPNConstants").MPNQuickReplyContentType.USER_ZIP_CODE:
            f = this.props.viewerZipCode;
            a.payload = f;
            break;
          default:
            break;
        }
        if (!f) return null;
        else
          return j.jsx(
            c("MPNQuickReplyPill.react"),
            {
              onClick: function () {
                e.$2(a, String(f), b);
              },
              children: f,
            },
            b
          );
      };
      return b;
    })(j.PureComponent);
    a.defaultProps = { type: "horizontal" };
    a.contextType = c("MessagingPluginContext");
    g["default"] = a;
  },
  98
);
__d(
  "LiveChatPluginUserContactQuery",
  [
    "LiveChatPluginLoggerUtil",
    "LiveChatPluginUserContactQuery.graphql",
    "RelayFBEnvironment",
    "RelayModern",
    "promiseDone",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h !== void 0 ? h : (h = b("LiveChatPluginUserContactQuery.graphql"));
    a = function (a, b) {
      c("promiseDone")(
        d("RelayModern").fetchQuery(c("RelayFBEnvironment"), i, {}),
        function (b) {
          var c;
          c =
            b == null
              ? void 0
              : (c = b.viewer) == null
              ? void 0
              : (c = c.user) == null
              ? void 0
              : c.all_phones;
          var d = c
            ? c.find(function (a) {
                return a.is_preferred;
              })
            : null;
          !d && c && c[0] && (d = c[0]);
          b =
            b == null ? void 0 : (c = b.viewer) == null ? void 0 : c.all_emails;
          c = b
            ? b.find(function (a) {
                return a.is_primary;
              })
            : null;
          !c && b && b[0] && (c = b[0]);
          a({
            phone:
              (b =
                (b = d) == null
                  ? void 0
                  : (d = b.phone_number) == null
                  ? void 0
                  : d.universal_number) != null
                ? b
                : "",
            email:
              (b = (d = c) == null ? void 0 : d.display_email) != null ? b : "",
          });
        },
        function (a) {
          d("LiveChatPluginLoggerUtil").logNewImpressionEvents_UnsafeFor3PD(
            "live_chat_user_contact_fetch_failed",
            b,
            null,
            null,
            JSON.stringify(
              babelHelpers["extends"](
                {},
                d("LiveChatPluginLoggerUtil").getErrorData(a)
              )
            )
          );
        }
      );
    };
    g.fetch = a;
  },
  98
);
__d(
  "MPNQuickRepliesGroup.react",
  [
    "LiveChatPluginUserContactQuery",
    "MPNConstants",
    "MPNMessageListDataHelper",
    "MPNQuickReplies.react",
    "MessagingPluginContext",
    "MessengerUserProfileLocationUtils",
    "promiseDone",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
          e[f] = arguments[f];
        return (
          ((b = c = a.call.apply(a, [this].concat(e)) || this),
          (c.state = {
            viewerEmail: null,
            viewerPhone: null,
            viewerState: null,
            viewerZipCode: null,
          }),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      var e = b.prototype;
      e.componentDidUpdate = function () {
        var a = this.$1();
        if (a) {
          var b = !1,
            c = !1;
          a.data.forEach(function (a) {
            a.content_type ===
              d("MPNConstants").MPNQuickReplyContentType.USER_EMAIL ||
            a.content_type ===
              d("MPNConstants").MPNQuickReplyContentType.USER_PHONE_NUMBER
              ? (b = !0)
              : (a.content_type ===
                  d("MPNConstants").MPNQuickReplyContentType.USER_STATE ||
                  a.content_type ===
                    d("MPNConstants").MPNQuickReplyContentType.USER_ZIP_CODE) &&
                (c = !0);
          });
          b && this.$2();
          c && this.$3();
        }
      };
      e.render = function () {
        var a = this.$1();
        return !a
          ? null
          : h.jsx(c("MPNQuickReplies.react"), {
              quickReplies: a.data,
              type: a.type,
              viewerEmail: this.state.viewerEmail,
              viewerPhone: this.state.viewerPhone,
              viewerState: this.state.viewerState,
              viewerZipCode: this.state.viewerZipCode,
            });
      };
      e.$1 = function () {
        var a = this.props,
          b = a.messages;
        a = a.userID;
        b = d("MPNMessageListDataHelper").maybeFetchMessagePlatformXMD(b, a);
        if (b && b.quick_replies && b.quick_replies.length > 0) {
          return {
            data: b.quick_replies,
            type: (a = b.quick_reply_type) != null ? a : "horizontal",
          };
        }
        return null;
      };
      e.$2 = function () {
        var a = this;
        if (this.state.viewerEmail !== null && this.state.viewerPhone !== null)
          return;
        d("LiveChatPluginUserContactQuery").fetch(function (b) {
          a.setState({ viewerEmail: b.email, viewerPhone: b.phone });
        }, this.context.state.pageID);
      };
      e.$3 = function () {
        var a = this;
        if (
          this.state.viewerState !== null &&
          this.state.viewerZipCode !== null
        )
          return;
        c("promiseDone")(
          d(
            "MessengerUserProfileLocationUtils"
          ).FetchMessengerUserRegionAndPostalCode(),
          function (b) {
            var c = b == null ? void 0 : b.region;
            b = b == null ? void 0 : b.postal_code;
            a.setState({ viewerState: c, viewerZipCode: b });
          }
        );
      };
      return b;
    })(h.PureComponent);
    a.contextType = c("MessagingPluginContext");
    g["default"] = a;
  },
  98
);
__d(
  "LivechatPluginGuestMessageThreadQueryContainer.react",
  [
    "Arbiter",
    "LiveChatPluginConstants",
    "LiveChatPluginLoggerUtil",
    "LivechatPluginGuestMessageThreadQueryContainerQuery.graphql",
    "RelayModern",
    "getLiveChatPluginGuestUserRelayEnvironment",
    "promiseDone",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j =
        h !== void 0
          ? h
          : (h = b(
              "LivechatPluginGuestMessageThreadQueryContainerQuery.graphql"
            ));
    function a(a, b, e) {
      c("promiseDone")(
        d("RelayModern").fetchQuery(
          c("getLiveChatPluginGuestUserRelayEnvironment")(a),
          j,
          { data: { page_id: b } },
          { force: !0 }
        ),
        function (a) {
          e(a);
        },
        function (a) {
          d("LiveChatPluginLoggerUtil").logNewImpressionEvents_UnsafeFor3PD(
            "customer_chat_guest_message_list_fetch_failed",
            b,
            null,
            null,
            JSON.stringify({ error: a })
          );
        }
      );
    }
    function e(a) {
      var b = a.isLoggedIn,
        e = a.pageID;
      return i.jsx(d("RelayModern").QueryRenderer, {
        environment: c("getLiveChatPluginGuestUserRelayEnvironment")(b),
        query: j,
        cacheConfig: { force: !0 },
        variables: { data: { page_id: e } },
        render: function (a) {
          var b = a.error;
          a = a.props;
          if (b) {
            d("LiveChatPluginLoggerUtil").logNewImpressionEvents_UnsafeFor3PD(
              "customer_chat_guest_message_list_fetch_failed",
              e,
              null,
              null,
              JSON.stringify({ error: b })
            );
            return;
          }
          c("Arbiter").inform(
            d("LiveChatPluginConstants").UPDATE_MESSAGE_LIST,
            a
          );
          return i.jsx("div", {});
        },
      });
    }
    e.displayName = e.name + " [from " + f.id + "]";
    g.LivechatPluginGuestMessageThreadQueryFetchOnce = a;
    g.LivechatPluginGuestMessageThreadQueryContainer = e;
  },
  98
);
__d(
  "MercurySyncReadReceiptTransformer",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      var b = {
          watermark: parseInt(a.watermarkTimestampMs, 10),
          action: parseInt(a.actionTimestampMs, 10),
        },
        c = a.threadKey.otherUserFbId || a.actorFbId;
      a = a.threadKey.otherUserFbId || a.threadKey.threadFbId;
      var d = { roger: {} };
      d.roger[a] = {};
      d.roger[a][c] = b;
      return d;
    }
    f.transform = a;
  },
  66
);
__d(
  "MessagingPluginGraphQLUtils",
  [
    "MNCommerceCallToActionType",
    "MessengerAttachmentTransformer.bs",
    "immutable",
  ],
  function (a, b, c, d, e, f, g) {
    function a(a) {
      if (a == null) return null;
      return a.guest_message_thread != null &&
        a.guest_message_thread.messages != null
        ? c("immutable")
            .List(a.guest_message_thread.messages.nodes)
            .map(function (b) {
              return {
                action_type:
                  b.extensible_message_admin_text_type != null
                    ? "ma-type:log-message"
                    : "ma-type:user-generated-message",
                has_attachment: h(b),
                attachments: k(b),
                author: u(b.message_sender),
                author_email: b.message_sender && b.message_sender.email,
                body: b.message && b.message.text,
                folder: a.guest_message_thread && a.guest_message_thread.folder,
                is_filtered_content: !1,
                is_sponsored: b.is_sponsored,
                thread_id:
                  b.message_thread_key && b.message_thread_key.other_user_id,
                thread_fbid:
                  b.message_thread_key && b.message_thread_key.thread_fbid,
                message_id: b.message_id,
                timestamp: Number(b.timestamp_precise),
                platform_xmd: b.platform_xmd_encoded,
                source: b.tags_list,
                is_unread: b.unread,
                offline_threading_id: b.offline_threading_id,
                log_message_body: b.snippet,
              };
            })
        : null;
    }
    function b(a, b, c) {
      return a.map(function (a) {
        return {
          action_type: "ma-type:send-message",
          attachments: [],
          author: "fbid:" + b,
          author_email: b + "@facebook.com",
          body: a.body,
          folder: "INBOX",
          has_attachment: !1,
          is_filtered_content: !1,
          is_sponsored: !1,
          thread_id: c,
          thread_fbid: null,
          message_id: a.otid,
          timestamp: a.timestamp,
          source: [],
          is_unread: !1,
          offline_threading_id: a.otid,
          status: a.state,
        };
      });
    }
    function e(a) {
      var b;
      if (a == null) return null;
      if (
        ((b = a.guest_message_thread) == null
          ? void 0
          : (b = b.last_read_receipt) == null
          ? void 0
          : b.nodes) != null &&
        ((b = a.guest_message_thread) == null
          ? void 0
          : (b = b.last_read_receipt) == null
          ? void 0
          : (b = b.nodes) == null
          ? void 0
          : b.length) > 0
      ) {
        b = a.guest_message_thread.last_read_receipt.nodes[0];
        return { action: Number(b.action), watermark: Number(b.watermark) };
      }
      return null;
    }
    function f(a) {
      return a == null
        ? void 0
        : (a = a.guest_message_thread) == null
        ? void 0
        : a.unread_count;
    }
    function h(a) {
      return i(a.blob_attachments) || j(a.extensible_attachment);
    }
    function i(a) {
      return a !== null;
    }
    function j(a) {
      return a != null;
    }
    function k(a) {
      return l(a.blob_attachments).concat(m(a)).concat(n(a));
    }
    function l(a) {
      return !a
        ? []
        : a.map(function (a) {
            if (a.video_type != null)
              return {
                app_attribution: null,
                attach_type: "video",
                blurred_image_uri: null,
                icon_type: "attach:video",
                large_preview_url: a.image.uri,
                large_preview_height: null,
                large_preview_width: null,
                name: null,
                photo_encodings: [],
                preview_height: null,
                preview_url: null,
                preview_width: null,
                rel: "async",
                share: null,
                thumbnail_url: a.playable_url,
                url: a.playable_url,
                metadata: {
                  fbid: a.legacy_attachment_id,
                  dimensions: {
                    width: a.original_dimensions.x,
                    height: a.original_dimensions.y,
                  },
                },
              };
            else if (a.file_type != null)
              return {
                app_attribution: null,
                attach_type: "file",
                blurred_image_uri: null,
                icon_type: "attach:file",
                large_preview_url: null,
                large_preview_height: null,
                large_preview_width: null,
                metadata: null,
                name: a.filename,
                photo_encodings: [],
                preview_height: null,
                preview_url: null,
                preview_width: null,
                rel: "async",
                share: null,
                thumbnail_url: null,
                url: a.url,
              };
            else if (a.animated_image != null)
              return {
                app_attribution: null,
                attach_type: "animated_image",
                blurred_image_uri: null,
                icon_type: "attach:animated_image",
                large_preview_url: a.animated_image.uri,
                large_preview_height: a.animated_image.height,
                large_preview_width: a.animated_image.width,
                name: null,
                photo_encodings: [],
                preview_height: null,
                preview_url: null,
                preview_width: null,
                rel: "async",
                share: null,
                thumbnail_url: a.playable_url,
                url: a.image.uri,
                metadata: {
                  fbid: a.legacy_attachment_id,
                  dimensions: {
                    width: a.original_dimensions.x,
                    height: a.original_dimensions.y,
                  },
                },
              };
            else {
              var b;
              return {
                app_attribution: null,
                attach_type: "photo",
                blurred_image_uri: null,
                icon_type: "attach:image",
                large_preview_url: (b = a.image) == null ? void 0 : b.uri,
                large_preview_height: (b = a.image) == null ? void 0 : b.height,
                large_preview_width: (b = a.image) == null ? void 0 : b.width,
                metadata: null,
                name: null,
                photo_encodings: [],
                preview_height: null,
                preview_url: null,
                preview_width: null,
                rel: "async",
                share: null,
                thumbnail_url: null,
                url: null,
              };
            }
          });
    }
    function m(a) {
      var b,
        c = a.extensible_attachment;
      if (!c) return [];
      c = c.story_attachment;
      var d = c.target;
      return [
        {
          app_attribution: null,
          attach_type: "share",
          blurred_image_uri: null,
          icon_type: null,
          large_preview_url: null,
          large_preview_height: null,
          large_preview_width: null,
          metadata: null,
          name: null,
          photo_encodings: [],
          preview_height: null,
          preview_url: null,
          preview_width: null,
          rel: "async",
          thumbnail_url: null,
          url: null,
          share: {
            action_links: [],
            deduplication_key: c.deduplication_key,
            media: {
              animated_image:
                (b = c.media) == null
                  ? void 0
                  : (b = b.animated_image) == null
                  ? void 0
                  : b.uri,
              animated_image_size: {
                height:
                  (b = c.media) == null
                    ? void 0
                    : (b = b.animated_image) == null
                    ? void 0
                    : b.height,
                width:
                  (b = c.media) == null
                    ? void 0
                    : (b = b.animated_image) == null
                    ? void 0
                    : b.width,
              },
              image:
                (b = c.media) == null
                  ? void 0
                  : (b = b.image) == null
                  ? void 0
                  : b.uri,
              image_size: {
                height:
                  (b = c.media) == null
                    ? void 0
                    : (b = b.image) == null
                    ? void 0
                    : b.height,
                width:
                  (b = c.media) == null
                    ? void 0
                    : (b = b.image) == null
                    ? void 0
                    : b.width,
              },
              playable: (b = c.media) == null ? void 0 : b.is_playable,
            },
            messenger_ctas: [],
            properties: {},
            share_id: a.message_id,
            source: (b = c.source) == null ? void 0 : b.text,
            style_list: c.style_list,
            subattachments: o(c),
            target: {
              call_to_actions:
                (b =
                  d == null
                    ? void 0
                    : (a = d.call_to_actions) == null
                    ? void 0
                    : a.map(function (a) {
                        return t(a);
                      })) != null
                  ? b
                  : [],
              items: q(d),
              message: d == null ? void 0 : d.snippet,
            },
            title:
              (b = (a = c.title_with_entities) == null ? void 0 : a.text) !=
              null
                ? b
                : p(d),
            description: c.subtitle,
            uri: d == null ? void 0 : d.url,
            messenger_generic_xma_template_extra_info:
              c.messenger_generic_xma_template_extra_info,
          },
        },
      ];
    }
    function n(a) {
      a = a.sticker;
      return a == null
        ? []
        : [d("MessengerAttachmentTransformer.bs").getStickerPayload(a)];
    }
    function o(a) {
      if (!a || !a.target) return [];
      if (!a.subattachments) return [];
      var b = q(a.target);
      return a.subattachments.map(function (a, c) {
        var d;
        return {
          action_links: [],
          deduplication_key: a.deduplication_key,
          media: {
            animated_image:
              (d = a.media) == null
                ? void 0
                : (d = d.animated_image) == null
                ? void 0
                : d.uri,
            animated_image_size: {
              height:
                (d = a.media) == null
                  ? void 0
                  : (d = d.animated_image) == null
                  ? void 0
                  : d.height,
              width:
                (d = a.media) == null
                  ? void 0
                  : (d = d.animated_image) == null
                  ? void 0
                  : d.width,
            },
            image:
              (d = a.media) == null
                ? void 0
                : (d = d.image) == null
                ? void 0
                : d.uri,
            image_size: {
              height:
                (d = a.media) == null
                  ? void 0
                  : (d = d.image) == null
                  ? void 0
                  : d.height,
              width:
                (d = a.media) == null
                  ? void 0
                  : (d = d.image) == null
                  ? void 0
                  : d.width,
            },
            playable: (d = a.media) == null ? void 0 : d.is_playable,
          },
          messenger_ctas: [],
          properties: {},
          source: a.source.text,
          style_list: a.style_list,
          target: b[c],
        };
      });
    }
    function p(a) {
      a = a == null ? void 0 : a.business_items;
      if (!a || !a.nodes) return "";
      var b = "";
      for (var c = 0; c < a.nodes.length - 1; c++)
        b = b + a.nodes[c].name + ", ";
      a.nodes[a.nodes.length - 1] && (b += a.nodes[a.nodes.length - 1].name);
      return b;
    }
    function q(a) {
      a = a == null ? void 0 : a.business_items;
      return !a || !a.nodes
        ? []
        : a.nodes.map(function (a) {
            return r(a);
          });
    }
    function r(a) {
      return !a
        ? null
        : {
            call_to_actions: a.call_to_actions.map(function (a) {
              return t(a);
            }),
            default_action: t(a.default_action),
            desc: a.description,
            id: a.id,
            image_aspect_ratio: a.image_aspect_ratio,
            item_url: a.target_url,
            media_blob_attachments: a.media_blob_attachments.map(function (a) {
              return s(a);
            }),
            metalines: {
              metaline_1: a.first_metaline,
              metaline_2: a.second_metaline,
              metaline_3: a.third_metaline,
            },
            name: a.name,
            source: a.source_name,
            text: "",
            thumb_url: a.image_url,
            title: a.name,
          };
    }
    function s(a) {
      return !a
        ? null
        : {
            playable_url: a.playable_url,
            height: a.height,
            width: a.width,
            id: a.id,
          };
    }
    function t(a) {
      return !a
        ? null
        : {
            action_link: a.action_url,
            action_type: c("MNCommerceCallToActionType")[a.action_open_type],
            action_open_type: a.action_open_type,
            action_objects: [{}],
            id: a.id,
            is_disabled: a.is_disabled,
            is_mutable_by_server: a.is_mutable_by_server,
            logging_token: a.logging_token,
            page_id: a.page_id,
            payment_metadata: null,
            render_style: a.cta_render_style,
            should_show_user_confirmation: !1,
            title: a.action_title,
            webview_metadata: null,
          };
    }
    function u(a) {
      return a != null && a.id != null ? "fbid:" + a.id : "";
    }
    g.getMercuryPayloadFromGraphQLResponse = a;
    g.getMercuryPayloadFromOptimisticMessage = b;
    g.getLatestReadReceiptFromGraphQLResponse = e;
    g.getGuestThreadUnreadCount = f;
    g._hasAttachments = h;
    g._hasBlobAttachments = i;
    g._hasXMA = j;
    g._getAttachments = k;
    g._getBlobAttachments = l;
    g._getXMAFromMessageNode = m;
    g._buildSubattachmentsFromParentStory = o;
    g._getTargetTitleFromGraphQLTarget = p;
    g._getTargetItemsFromGraphQLTarget = q;
    g._getMercuryBusinessItemFromGraphQL = r;
    g._getMediaBlobAttachmentFromGraphQL = s;
    g._getMercuryCallToActionFromGraphQL = t;
    g._getAuthorFbid = u;
  },
  98
);
__d(
  "MessagingPluginPendingMessageState",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = 0;
    b = 1;
    c = 4;
    f.SENDING = a;
    f.SENT = b;
    f.FAILED = c;
  },
  66
);
__d(
  "ChatPluginSendMessage",
  [
    "ChatPluginSendMessageMutation.graphql",
    "RelayModern",
    "getLiveChatPluginGuestUserRelayEnvironment",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    function a(a, e, f) {
      d("RelayModern").commitMutation(
        c("getLiveChatPluginGuestUserRelayEnvironment")(a),
        {
          mutation:
            h !== void 0 ? h : (h = b("ChatPluginSendMessageMutation.graphql")),
          variables: e,
          onCompleted: f && f.onSuccess,
          onError: f && f.onFailure,
        }
      );
    }
    g.commit = a;
  },
  98
);
__d(
  "XMNMessagingPluginActiveSessionController",
  ["XController"],
  function (a, b, c, d, e, f) {
    e.exports = b("XController").create(
      "/plugin/customer_chat/active_session/",
      {
        page_id: { type: "FBID", required: !0 },
        is_guest_user: { type: "Bool", defaultValue: !1 },
        access_token: { type: "String" },
        referer_uri: { type: "String" },
      }
    );
  },
  null
);
__d(
  "MessagingPluginSendQueue",
  [
    "$InternalEnum",
    "AsyncRequest",
    "ChatPluginSendMessage",
    "CurrentUser",
    "LiveChatPluginLoggerUtil",
    "MPNIdentity",
    "MPNStorage",
    "MessagingPluginPendingMessageState",
    "Random",
    "XMNMessagingPluginActiveSessionController",
    "immutable",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = b("$InternalEnum")({
      TEXT: "text",
      POSTBACK: "postback",
      QUICK_REPLY: "quick_reply",
    });
    a = (function () {
      function a(a, b, d, e) {
        this.isSending = !1;
        this.pageID = a;
        this.userID = b;
        this.sessionKey = d;
        this.pendingMessages = c("immutable").List();
        this.serverPartialMessages = c("immutable").List();
        this.failedMessages = c("immutable").List();
        this.updateMessageStoreCallback = e;
        this.requestID = (a = c("MPNStorage").getRequestID()) != null ? a : "";
      }
      var b = a.prototype;
      b.getOptimisticMessages = function () {
        return this.pendingMessages
          .concat(this.failedMessages)
          .concat(this.serverPartialMessages)
          .sort(function (a, b) {
            return a.timestamp - b.timestamp;
          });
      };
      b.confirmServerPartialMessages = function (a) {
        this.serverPartialMessages = this.serverPartialMessages.filter(
          function (b) {
            var c = a.find(function (a) {
              return a.otid === b.otid;
            });
            return !c;
          }
        );
      };
      b.makePlatformTokenForPostbackCTA = function (a) {
        var b;
        return JSON.stringify(
          ((b = {}),
          (b[h.POSTBACK] = {
            cta_id: a,
            prev_message_id: null,
            force_handle: !0,
            ref: null,
          }),
          b)
        );
      };
      b.makePlatformTokenForQuickReply = function (a) {
        var b;
        return JSON.stringify(
          ((b = {}), (b[h.QUICK_REPLY] = { payload: a.payload }), b)
        );
      };
      b.canQueueMessage = function (a, b, c) {
        var e = d("MPNIdentity").MPNIdentity.currentUserState();
        if (
          e !== d("MPNIdentity").MPNIdentityState.FB &&
          e !== d("MPNIdentity").MPNIdentityState.GUEST
        )
          return !1;
        if (b) return !1;
        return a.trim().length > 0 || (c && Object.keys(c).length > 0)
          ? !0
          : !1;
      };
      b.prepareAttachmentsForMessage = function (a, b, c, e) {
        if (
          d("MPNIdentity").MPNIdentity.currentUserState() ===
          d("MPNIdentity").MPNIdentityState.GUEST
        )
          return;
        return {
          files: b.length > 0 ? [].concat(b) : void 0,
          gifs: a.length > 0 ? [].concat(a) : void 0,
          images: c.length > 0 ? [].concat(c) : void 0,
          videos: e.length > 0 ? [].concat(e) : void 0,
        };
      };
      b.enqueueAndSend = function (a, b, c, e, f) {
        var g = this.makeOfflineThreadingID();
        this.pendingMessages = this.pendingMessages.push({
          otid: g,
          body: a,
          timestamp: Date.now(),
          platformToken: e,
          state: d("MessagingPluginPendingMessageState").SENDING,
          attachmentIds: f,
        });
        this.updateMessageStoreCallback && this.updateMessageStoreCallback();
        this.isSending || this.sendNext(b, c);
      };
      b.sendNext = function (a, b) {
        if (this.pendingMessages.size === 0) {
          this.isSending = !1;
          return;
        }
        this.isSending = !0;
        var c = this.pendingMessages.first();
        this.performMutation(c, a, b);
      };
      b.performMutation = function (a, b, e) {
        var f = this,
          g = c("CurrentUser").getID() !== "0",
          i = {
            requestID: this.requestID,
            isLoggedIn: g.toString(),
            isLoggedInUserAction: g.toString(),
          };
        g = d("MPNIdentity").MPNIdentity.currentUserState();
        if (
          g !== d("MPNIdentity").MPNIdentityState.FB &&
          g !== d("MPNIdentity").MPNIdentityState.GUEST
        )
          return;
        g = g === d("MPNIdentity").MPNIdentityState.GUEST;
        g = c("XMNMessagingPluginActiveSessionController")
          .getURIBuilder()
          .setFBID("page_id", this.pageID)
          .setBool("is_guest_user", g)
          .setString("access_token", this.sessionKey)
          .setString("referer_uri", e)
          .getURI();
        new (c("AsyncRequest"))()
          .setURI(g)
          .setHandler(function (c) {
            d("ChatPluginSendMessage").commit(
              b,
              {
                input: {
                  client_mutation_id: a.otid,
                  message_text: a.body,
                  platform_token: a.platformToken,
                  page_id: f.pageID,
                  image_attachment_ids:
                    (c = a.attachmentIds) == null ? void 0 : c.images,
                  video_attachment_ids:
                    (c = a.attachmentIds) == null ? void 0 : c.videos,
                  gif_attachment_ids:
                    (c = a.attachmentIds) == null ? void 0 : c.gifs,
                  file_attachment_ids:
                    (c = a.attachmentIds) == null ? void 0 : c.files,
                  logging_extra: JSON.stringify(i),
                },
              },
              {
                onSuccess: function (a) {
                  a = f.pendingMessages.first();
                  f.pendingMessages = f.pendingMessages.slice(1);
                  f.serverPartialMessages = f.serverPartialMessages.push(
                    babelHelpers["extends"]({}, a, {
                      state: d("MessagingPluginPendingMessageState").SENT,
                    })
                  );
                  f.updateMessageStoreCallback &&
                    f.updateMessageStoreCallback();
                  f.sendNext(b, e);
                },
                onFailure: function (c) {
                  var g = h.TEXT;
                  try {
                    if (a.platformToken != null) {
                      var i = JSON.parse(a.platformToken);
                      (i == null ? void 0 : i.postback) != null
                        ? (g = h.POSTBACK)
                        : (i == null ? void 0 : i.quick_reply) != null &&
                          (g = h.QUICK_REPLY);
                    }
                  } catch (a) {}
                  d(
                    "LiveChatPluginLoggerUtil"
                  ).logNewImpressionEvents_UnsafeFor3PD(
                    "customer_chat_guest_message_send_failed",
                    f.pageID,
                    null,
                    null,
                    JSON.stringify({ error: c, message_type: g })
                  );
                  i = f.pendingMessages.first();
                  f.pendingMessages = f.pendingMessages.slice(1);
                  f.failedMessages = f.failedMessages.push(
                    babelHelpers["extends"]({}, i, {
                      state: d("MessagingPluginPendingMessageState").FAILED,
                    })
                  );
                  f.updateMessageStoreCallback &&
                    f.updateMessageStoreCallback();
                  f.sendNext(b, e);
                },
              }
            );
          })
          .send();
      };
      b.makeOfflineThreadingID = function () {
        var a = Date.now(),
          b = d("Random").uint32();
        a = a & 2147483647;
        a = a * Math.pow(2, 21);
        b = (b & 2097151) + a;
        return b.toString();
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "XChatPluginLabelThreadController",
  ["XController"],
  function (a, b, c, d, e, f) {
    e.exports = b("XController").create("/plugin/customer_chat/label_thread/", {
      page_id: { type: "FBID", required: !0 },
      user_id: { type: "FBID", required: !0 },
      access_token: { type: "String" },
    });
  },
  null
);
__d(
  "LiveChatMessageStore",
  [
    "Arbiter",
    "AsyncRequest",
    "LiveChatPluginConstants",
    "LiveChatPluginLoggerUtil",
    "LivechatPluginGuestMessageThreadQueryContainer.react",
    "MercuryIDs",
    "MercuryMessageStore",
    "MercurySyncDeltaTypes",
    "MercurySyncNewMessageTransformer",
    "MercurySyncReadReceiptTransformer",
    "MercuryThreadlistConstants",
    "MessagingPluginGraphQLUtils",
    "MessagingPluginPendingMessageState",
    "MessagingPluginSendQueue",
    "MessengerMQTTConnectionEvents",
    "Sound",
    "SubscriptionsHandler",
    "UserActivity",
    "XChatPluginLabelThreadController",
    "immutable",
    "mixInEventEmitter",
    "setTimeout",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a, b, e, f, g, h) {
        (this.$5 = b || d("LiveChatPluginConstants").LOGGED_IN_CHAT_MODE),
          (this.$4 = a),
          (this.$1 = e),
          (this.$2 = f),
          (this.$7 = c("immutable").List()),
          (this.$8 = c("immutable").List()),
          (this.$10 = null),
          (this.$9 = { action: 0, watermark: 0 }),
          (this.$12 = new Set()),
          (this.$11 = g),
          (this.$13 = h),
          (this.$14 = !1),
          this.$5 === d("LiveChatPluginConstants").LOGGED_IN_CHAT_MODE
            ? this.$15()
            : this.$16();
      }
      var b = a.prototype;
      b.$17 = function (a) {
        var b = d("MercurySyncNewMessageTransformer").transform(this.$1, a);
        a["class"] == c("MercurySyncDeltaTypes").AdminTextMessage &&
          (b = babelHelpers["extends"]({}, b, {
            action_type: "ma-type:log-message",
            log_message_body: a.messageMetadata.adminText,
            log_message_data: {
              message_type: a.type,
              untypedData: a.untypedData,
            },
          }));
        return b;
      };
      b.$18 = function (a) {
        var b = this.$7 || c("immutable").List();
        b = b.push(a);
        var d = new Map();
        b.forEach(function (a) {
          d.set(a.offline_threading_id, a);
        });
        var e = c("immutable").List();
        d.forEach(function (a) {
          e = e.push(a);
        });
        return e;
      };
      b.$15 = function () {
        var a = this;
        this.$6 && this.$6.destroy();
        this.$3 && this.$3.release();
        this.$6 = new (c("MercuryMessageStore"))(this.$4, null, this.$1);
        this.$3 = new (c("SubscriptionsHandler"))();
        if (this.$3 == null || this.$6 == null) return;
        this.$3.addSubscriptions(
          this.$6.subscribe(function (b) {
            var d = c("immutable").List(
                b.messages.sort(function (a, b) {
                  return a.timestamp - b.timestamp;
                })
              ),
              e = a.$7 || c("immutable").List(),
              f = new Map();
            e.forEach(function (a) {
              f.set(a.offline_threading_id, a);
            });
            d.forEach(function (a) {
              f.set(a.offline_threading_id, a);
            });
            var g = c("immutable").List();
            f.forEach(function (a) {
              g = g.push(a);
            });
            a.$7 = g;
            a.$19(b.eventType);
          })
        );
        this.$3.addSubscriptions(
          c("Arbiter").subscribe(
            d("MessengerMQTTConnectionEvents").DELTA_EVENT,
            function (b, e) {
              b = e.obj.delta;
              if (
                b["class"] === c("MercurySyncDeltaTypes").NewMessage ||
                b["class"] === c("MercurySyncDeltaTypes").AdminTextMessage
              ) {
                e = a.$17(b);
                a.$20(e);
                if (
                  !a.$14 &&
                  e.action_type === "ma-type:user-generated-message"
                ) {
                  var f = c("XChatPluginLabelThreadController")
                    .getURIBuilder()
                    .setString("access_token", a.$13)
                    .setFBID("page_id", a.$2)
                    .setFBID("user_id", a.$1)
                    .getURI();
                  new (c("AsyncRequest"))().setURI(f).send();
                  a.$14 = !0;
                }
                a.$7 = a.$18(e);
                a.$19(d("LiveChatPluginConstants").NEW_MESSAGE_UPDATE);
              }
              if (b["class"] === c("MercurySyncDeltaTypes").ReadReceipt) {
                f = d("MercurySyncReadReceiptTransformer").transform(b);
                e = f.roger[a.$2][a.$2];
                a.$9 = e;
              }
            }
          )
        );
        this.$21(!0);
      };
      b.$16 = function () {
        var a = this;
        this.$6 && this.$6.destroy();
        this.$3 && this.$3.release();
        this.$3 = new (c("SubscriptionsHandler"))();
        if (this.$3 == null) return;
        this.$3.addSubscriptions(
          c("Arbiter").subscribe(
            d("MessengerMQTTConnectionEvents").DELTA_EVENT,
            function (b, e) {
              b = e.obj.delta;
              d("LiveChatPluginLoggerUtil").logDelta(
                a.$1,
                a.$2,
                b["class"],
                b.seqID,
                !0
              );
              if (
                b["class"] !== c("MercurySyncDeltaTypes").NewMessage &&
                b["class"] !== c("MercurySyncDeltaTypes").ReadReceipt &&
                b["class"] !== c("MercurySyncDeltaTypes").MarkRead &&
                b["class"] !== c("MercurySyncDeltaTypes").AdminTextMessage
              )
                return;
              a.$22(b);
            }
          )
        );
        this.$21(!1);
      };
      b.$22 = function (a) {
        switch (a["class"]) {
          case c("MercurySyncDeltaTypes").ReadReceipt:
            var b = d("MercurySyncReadReceiptTransformer").transform(a);
            b = b.roger[this.$2][this.$2];
            this.$9 = b;
            break;
          case c("MercurySyncDeltaTypes").MarkRead:
            this.$10 = 0;
            this.$12.clear();
            c("Arbiter").inform(
              d("LiveChatPluginConstants").UNREAD_COUNT_UPDATE,
              0
            );
            break;
          default:
            b = this.$17(a);
            this.$20(b);
            b.author != d("MercuryIDs").getParticipantIDFromUserID(this.$1) &&
              !this.$12.has(b.message_id) &&
              a["class"] === c("MercurySyncDeltaTypes").NewMessage &&
              (this.$10 != null ? (this.$10 += 1) : (this.$10 = 1),
              this.$12.add(b.message_id),
              c("Arbiter").inform(
                d("LiveChatPluginConstants").UNREAD_COUNT_UPDATE,
                this.$10
              ),
              this.$23(b.timestamp));
            if (
              !this.$14 &&
              b.action_type === "ma-type:user-generated-message"
            ) {
              a = c("XChatPluginLabelThreadController")
                .getURIBuilder()
                .setString("access_token", this.$13)
                .setFBID("page_id", this.$2)
                .setFBID("user_id", this.$1)
                .getURI();
              new (c("AsyncRequest"))().setURI(a).send();
              this.$14 = !0;
            }
            a = this.$7 || c("immutable").List();
            a = a.push(b);
            var e = new Map();
            a.forEach(function (a) {
              e.set(a.message_id, a);
            });
            var f = c("immutable").List();
            e.forEach(function (a) {
              f = f.push(a);
            });
            this.$7 = f;
            this.$19(d("LiveChatPluginConstants").NEW_MESSAGE_UPDATE);
            return;
        }
      };
      b.$21 = function (a) {
        var b = this;
        d(
          "LivechatPluginGuestMessageThreadQueryContainer.react"
        ).LivechatPluginGuestMessageThreadQueryFetchOnce(
          a,
          this.$2,
          function (a) {
            var e;
            b.$9 =
              (e = b.$9) != null
                ? e
                : d(
                    "MessagingPluginGraphQLUtils"
                  ).getLatestReadReceiptFromGraphQLResponse(a);
            e = d("MessagingPluginGraphQLUtils").getGuestThreadUnreadCount(a);
            b.$10 === null &&
              e != null &&
              ((b.$10 = e),
              c("Arbiter").inform(
                d("LiveChatPluginConstants").UNREAD_COUNT_UPDATE,
                b.$10
              ));
            e = d(
              "MessagingPluginGraphQLUtils"
            ).getMercuryPayloadFromGraphQLResponse(a);
            e = e || c("immutable").List();
            var f = new Map();
            e = e.concat(b.$7);
            e.forEach(function (a) {
              f.set(a.message_id, a);
            });
            var g = c("immutable").List();
            f.forEach(function (a) {
              !b.$14 &&
                a.action_type === "ma-type:user-generated-message" &&
                (b.$14 = !0),
                b.$20(a),
                (g = g.push(a));
            });
            b.$7 = g;
            c("setTimeout")(function () {
              b.$19(d("LiveChatPluginConstants").INITIAL_FETCH);
            }, 1e3);
          }
        );
      };
      b.getMessageListWithOptimisticMessages = function () {
        var a = this;
        if (!this.sendQueue) return this.$7;
        var b = this.sendQueue.getOptimisticMessages(),
          c = b.filter(function (b) {
            var c = a.$7.find(function (a) {
              return a.offline_threading_id === b.otid;
            });
            return c != null;
          });
        b = b.filter(function (a) {
          var b = c.find(function (b) {
            return b.otid === a.otid;
          });
          return !b;
        });
        this.sendQueue && this.sendQueue.confirmServerPartialMessages(c);
        b = b.map(function (a) {
          return a.state === d("MessagingPluginPendingMessageState").FAILED
            ? a
            : babelHelpers["extends"]({}, a, { timestamp: a.timestamp + 6e5 });
        });
        b = d(
          "MessagingPluginGraphQLUtils"
        ).getMercuryPayloadFromOptimisticMessage(b, this.$1, this.$2);
        return this.$7.concat(b).sort(function (a, b) {
          return a.timestamp - b.timestamp;
        });
      };
      b.setUpGuestMessageSendQueue = function (a) {
        this.sendQueue = new (c("MessagingPluginSendQueue"))(
          this.$2,
          this.$1,
          a,
          this.optimisticSendUpdateCallback.bind(this)
        );
      };
      b.destroy = function () {
        this.$6 && this.$6.destroy(),
          this.$3 && this.$3.release(),
          (this.$7 = c("immutable").List());
      };
      b.subscribe = function (a) {
        return this.addRetroactiveListener("messageUpdate", a);
      };
      b.fetchMoreMessages = function () {
        return this.$5 === d("LiveChatPluginConstants").LOGGED_IN_CHAT_MODE
          ? this.$6 != null && this.$6.fetchMoreMessages()
          : !1;
      };
      b.hasFetchedAll = function () {
        return this.$5 === d("LiveChatPluginConstants").LOGGED_IN_CHAT_MODE
          ? (this.$6 != null && this.$6.hasFetchedAll()) ||
              this.$7.size >=
                d("MercuryThreadlistConstants").RECENT_MESSAGES_LIMIT
          : !0;
      };
      b.optimisticSendUpdateCallback = function () {
        this.$19(d("LiveChatPluginConstants").NEW_MESSAGE_UPDATE);
      };
      b.getLatestReadReceipt = function () {
        return this.$9;
      };
      b.$23 = function (a) {
        if (!c("UserActivity").isOnTab()) {
          var b, e;
          b = (b = this.$11) == null ? void 0 : b.get("sound.notif_ogg_url");
          e = (e = this.$11) == null ? void 0 : e.get("sound.notif_mp3_url");
          b != null && e != null && d("Sound").play([b, e], a, !1);
        }
      };
      b.$20 = function (a) {
        a.timestamp > this.$9.action &&
          a.author != d("MercuryIDs").getParticipantIDFromUserID(this.$1) &&
          ((this.$9.action = a.timestamp), (this.$9.watermark = a.timestamp));
      };
      b.$19 = function (a) {
        var b = this.getMessageListWithOptimisticMessages();
        this.$8 = b;
        this.releaseHeldEventType("messageUpdate");
        this.emitAndHold("messageUpdate", { messages: b, eventType: a });
      };
      return a;
    })();
    c("mixInEventEmitter")(a, { messageUpdate: !0 });
    g["default"] = a;
  },
  98
);
__d(
  "MPNThreadViewActions",
  [
    "DOM",
    "LiveChatPluginFbts",
    "MPNMessageListDataHelper",
    "MPNXDMessageManager",
    "ReactDOM",
    "UserActivity",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      maybeUpdateAutomationState: function (a, b) {
        var c = a.context.state.hasActiveAutomation;
        if (d("MPNMessageListDataHelper").shouldEnterEscalationFlow(b) && c) {
          a.context.dispatchAction({
            type: "TOGGLE_HAS_ACTIVE_AUTOMATION",
            hasActiveAutomation: !1,
          });
          return;
        }
        b = d("MPNMessageListDataHelper").maybeFetchMessagePlatformXMD(
          b,
          a.state.userID
        );
        (b == null ? void 0 : b.message_classification) ===
          "chat_plugin_automation" &&
          !c &&
          a.context.dispatchAction({
            type: "TOGGLE_HAS_ACTIVE_AUTOMATION",
            hasActiveAutomation: !0,
          });
      },
      handleImageLoad: function (a) {
        c("DOM")
          .scry(d("ReactDOM").findDOMNode(a), "img")
          .forEach(function (b) {
            if (b.complete) return;
            var c = Event.listen(b, "load", function () {
              a.scrollToBottom(), c.remove();
            });
          });
      },
      setTabNotification: function (a) {
        a = d("LiveChatPluginFbts").getTabTitle(a).toString();
        c("MPNXDMessageManager").setTabNotification(a);
        c("UserActivity").subscribeOnce(function () {
          c("MPNXDMessageManager").setTabNotification(null);
        });
      },
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "MPNThreadViewSubscriptions",
  [
    "Arbiter",
    "ChatPluginThreadLoadQplLogger",
    "LiveChatPluginConstants",
    "LiveChatPluginLoggerUtil",
    "MPNConstants",
    "MPNIdentity",
    "MPNStorage",
    "MercuryIDs",
    "MessagingPluginGuestUpgradeActions",
    "SubscriptionsHandler",
    "clearTimeout",
    "immutable",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 4e3;
    a = (function () {
      function a(a, b, c) {
        (this.$2 = b), (this.$1 = a), (this.$5 = c);
      }
      var b = a.prototype;
      b.initialize = function () {
        (this.$3 = new (c("SubscriptionsHandler"))()),
          this.$3.addSubscriptions(this.$6(), this.$7(), this.$8());
      };
      b.tearDown = function () {
        var a;
        (a = this.$2) == null ? void 0 : a.destroy();
        (a = this.$3) == null ? void 0 : a.release();
        c("clearTimeout")(this.$4);
      };
      b.$6 = function () {
        var a = this;
        return c("Arbiter").subscribe(
          d("LiveChatPluginConstants").TYPING_UPDATE,
          function (b, c) {
            b = !!c;
            b !== a.$1.state.typing &&
              (a.$1.setState({ typing: b }),
              b &&
                (a.$4 = window.setTimeout(function () {
                  a.$1.setState({ typing: !1 });
                }, 15e3)));
          }
        );
      };
      b.$7 = function () {
        var a = this;
        return c("Arbiter").subscribe(
          d("LiveChatPluginConstants").STATE_UPDATE,
          function (b, d) {
            b = null;
            d !== a.$1.state.connectionState &&
              (a.$1.setState({ connectionState: d }, function () {
                a.$1.handleConnectionStateChange();
              }),
              c("clearTimeout")(b),
              (b = window.setTimeout(function () {
                a.$1.setState({ showConnectionBanner: !0 });
              }, h)));
          }
        );
      };
      b.$8 = function () {
        var a = this;
        return this.$2.subscribe(function (b) {
          a.$1.setState(function (e) {
            var f = c("immutable").List(
              b.messages.sort(function (a, b) {
                return a.timestamp - b.timestamp;
              })
            );
            !a.$1.context.state.threadExists &&
              f.size >= 1 &&
              a.$1.context.dispatchAction({ type: "UPDATE_THREAD_EXISTS" });
            var g = d(
              "MessagingPluginGuestUpgradeActions"
            ).shouldShowUpgradePrompt(a.$5, f, b.eventType, a.$1);
            g !== d("MPNConstants").MPNUpgradePrompt.NOT_SHOWN &&
              g !==
                a.$1.context.state.optimisticStorageState
                  .showUpgradePromptType &&
              (c("MPNStorage").setShowUpgradePrompt(g),
              a.$1.context.dispatchAction({
                type: "UPDATE_UPGRADE_UPSELL_PROMPT",
                upgradeUpsellPrompt: g,
              }));
            g = {};
            f.get(-1) != null &&
              f.get(-1).author != null &&
              c("MercuryIDs").getUserIDFromParticipantID(f.get(-1).author) !==
                d("MPNIdentity").MPNIdentity.currentUserID() &&
              e.typing &&
              (a.$4 && c("clearTimeout")(a.$4), (g.typing = !1));
            e = e.hasLoggedImpression;
            e == !1 &&
              a.$2 != null &&
              a.$2.hasFetchedAll() &&
              (a.$9(), (e = !0));
            return babelHelpers["extends"](
              {
                messages: f,
                readReceipt:
                  (f = a.$2) == null ? void 0 : f.getLatestReadReceipt(),
                shouldShowWelcomeMessage: !0,
                hasLoggedImpression: e,
              },
              g
            );
          });
        });
      };
      b.$9 = function () {
        var a = d("MPNIdentity").MPNIdentity.currentUserID(),
          b = this.$1.context.state,
          c = b.pageID,
          e = b.continueClickTime,
          f = b.pluginMountTime;
        b = b.showUpgradeUpsellPrompt;
        d("ChatPluginThreadLoadQplLogger") == null
          ? void 0
          : d(
              "ChatPluginThreadLoadQplLogger"
            ).logChatPluginThreadLoadModuleEndSuccess();
        d("LiveChatPluginLoggerUtil").logImpressionUsingFalco_UnsafeFor3PD(
          c,
          d("MPNIdentity").MPNIdentity.currentUserState() ===
            d("MPNIdentity").MPNIdentityState.FB
            ? "logged_in_chat_tab"
            : b
            ? "guest_chat_tab_with_upgrade_enabled"
            : "guest_chat_tab",
          (c = e) != null ? c : f,
          null,
          null,
          null,
          a,
          null,
          null,
          { isClickTimeNull: e == null }
        );
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "MessagingPluginDialogConnectionBanner.react",
  ["cx", "fbt", "LiveChatPluginConstants", "MessengerSpinner.react", "react"],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function a(a) {
      var b = a.showConnectionBanner,
        e = a.connectionState;
      a = a.handleConnectionBannerStateChange;
      if (!b || navigator.userAgent.includes("Firefox")) return null;
      b = null;
      switch (e) {
        case d("LiveChatPluginConstants").MQTTGatewayConnectionState.CONNECTED:
          b = null;
          a();
          break;
        case d("LiveChatPluginConstants").MQTTGatewayConnectionState.CONNECTING:
          b = j.jsxs("div", {
            className: "connecting",
            children: [
              j.jsx(c("MessengerSpinner.react"), {
                className: "connectingSpinner",
                color: "grey",
              }),
              i._("Connexion en cours..."),
            ],
          });
          break;
        case d("LiveChatPluginConstants").MQTTGatewayConnectionState
          .DISCONNECTED:
          b = j.jsx("div", {
            className: "disconnected",
            children: i._("No internet connection"),
          });
          break;
      }
      return (
        b &&
        j.jsx("div", { className: "_2oap", children: b }, "connection_banner")
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "MessagingPluginDialogBody.react",
  [
    "cx",
    "Arbiter",
    "LiveChatMessageStore",
    "LiveChatPluginConstants",
    "LiveChatPluginTypingIndicator.react",
    "MPNConstants",
    "MPNIcebreakersGroup.react",
    "MPNIdentity",
    "MPNLocalState",
    "MPNMessageList.react",
    "MPNQuickRepliesGroup.react",
    "MPNStorage",
    "MPNThreadViewActions",
    "MPNThreadViewSubscriptions",
    "MPNXDMessageManager",
    "MercuryIDs",
    "MessagingPluginContext",
    "MessagingPluginDialogConnectionBanner.react",
    "MessagingPluginThreadActions",
    "MessengerDeliveryReceipt.bs",
    "MessengerScrollableArea.react",
    "ReactDOM",
    "clearTimeout",
    "cr:878",
    "immutable",
    "react",
    "setTimeout",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = 35,
      k = 4e3;
    a = (function (a) {
      babelHelpers.inheritsLoose(e, a);
      function e() {
        var b, e;
        for (var f = arguments.length, g = new Array(f), h = 0; h < f; h++)
          g[h] = arguments[h];
        return (
          ((b = e = a.call.apply(a, [this].concat(g)) || this),
          (e.state = {
            connectionState: d("LiveChatPluginConstants")
              .MQTTGatewayConnectionState.CONNECTED,
            messages: c("immutable").List(),
            quickRepliesOffset: 0,
            readReceipt: null,
            showConnectionBanner: !1,
            typing: !1,
            shouldShowWelcomeMessage: !1,
            unreadCount: 0,
            userID: d("MPNIdentity").MPNIdentity.currentUserID(),
            hasLoggedImpression: !1,
          }),
          (e.$2 = !1),
          (e.$3 = 0),
          (e.$4 = 0),
          (e.$7 = ""),
          (e.$9 = null),
          (e.hasShownOneUpgradePrompt = !1),
          (e.hasGuestMessaged = null),
          (e.$15 = function (a, b) {
            var c = e.$13();
            if (!c) return;
            var d = c.getScrollOffsetForElement(a);
            a = d + a.offsetHeight;
            var f = c.getScrollTop(),
              g = f + c.getClientHeight();
            a = a - g;
            if (d <= f) {
              g = b ? Math.max(0, d - 30) : d;
              c.setScrollTop(g, !0);
            } else
              a > -15 && a < 36 && c.setScrollTop(f + Math.abs(a) + 15, !0);
          }),
          b) || babelHelpers.assertThisInitialized(e)
        );
      }
      var f = e.prototype;
      f.componentDidMount = function () {
        var a = this,
          b = this.context.state,
          e = b.pageID,
          f = b.pageName;
        this.$2 = !0;
        this.$7 = d("MercuryIDs").getThreadIDFromUserID(e);
        this.$12();
        this.$9 = c("Arbiter").subscribe(
          d("LiveChatPluginConstants").UNREAD_COUNT_UPDATE,
          function (b, d) {
            a.setState({ unreadCount: d }),
              c("MPNThreadViewActions").setTabNotification(f);
          }
        );
      };
      f.componentWillUnmount = function () {
        var a;
        this.$2 = !1;
        (a = this.$11) == null ? void 0 : a.tearDown();
        this.$9 && c("Arbiter").unsubscribe(this.$9);
        this.$10 && c("clearTimeout")(this.$10);
        this.context.state.hasActiveAutomation &&
          this.context.dispatchAction({
            type: "TOGGLE_HAS_ACTIVE_AUTOMATION",
            hasActiveAutomation: !1,
          });
      };
      f.UNSAFE_componentWillUpdate = function () {
        var a = this.$13();
        a && ((this.$3 = a.getScrollHeight()), (this.$4 = a.getScrollTop()));
      };
      f.componentDidUpdate = function (a, b) {
        var e;
        a = d("MPNIdentity").MPNIdentity.currentUserID();
        (this.state.userID !== a || this.context.state.messageStore == null) &&
          (this.setState({ userID: a }), this.$12());
        c("MPNThreadViewActions").maybeUpdateAutomationState(
          this,
          this.state.messages
        );
        ((e = c("MPNStorage").getFBStorageState()) == null
          ? void 0
          : e.visibility) === d("MPNConstants").MPNVisibility.NOT_HIDDEN &&
          this.state.unreadCount > 0 &&
          (d("MessagingPluginThreadActions").markThreadAsRead(this.context),
          this.setState({ unreadCount: 0 }),
          c("MPNXDMessageManager").setTabNotification(null));
        e = this.$13();
        var f = d("ReactDOM").findDOMNode(this);
        if (!f || !(f instanceof HTMLElement) || a == null) return;
        f = f.clientHeight;
        if (this.$1) {
          var g = d("ReactDOM").findDOMNode(this.$1);
          g &&
            g instanceof HTMLElement &&
            this.state.quickRepliesOffset !== f - g.clientHeight &&
            this.setState({ quickRepliesOffset: f - g.clientHeight });
        }
        if (!e) return;
        f =
          this.state.messages !== b.messages &&
          this.state.messages.last() !== b.messages.last() &&
          !this.state.messages.isEmpty() &&
          this.state.messages.last().author ===
            d("MercuryIDs").getParticipantIDFromUserID(a);
        if (f)
          this.scrollToBottom(),
            c("MPNThreadViewActions").handleImageLoad(this);
        else {
          g = e.getScrollHeight();
          if (g !== this.$3) {
            b = g - this.$3 + this.$4;
            this.$5 && this.$5.scrollToPosition(b);
          } else c("MPNThreadViewActions").handleImageLoad(this);
        }
        if (this.$8) {
          a = d("ReactDOM").findDOMNode(this.$8);
          a instanceof HTMLElement &&
          e.distanceToBottom() <= 1.25 * a.offsetHeight
            ? e.scrollToBottom(!0)
            : a && this.$5 && this.$5.scrollToPosition(this.$4);
        }
      };
      f.render = function () {
        var a = this;
        this.context.state.pageID;
        try {
          var e;
          return i.jsxs(i.Fragment, {
            children: [
              i.jsx(c("MessagingPluginDialogConnectionBanner.react"), {
                showConnectionBanner: this.state.showConnectionBanner,
                connectionState: this.state.connectionState,
                handleConnectionBannerStateChange: function () {
                  return a.setState({ showConnectionBanner: !1 });
                },
              }),
              i.jsx(
                c("MessengerScrollableArea.react"),
                {
                  height: this.$14(),
                  ref: function (b) {
                    a.$5 = b;
                  },
                  tabIndex: 0,
                  children: i.jsxs("div", {
                    ref: function (b) {
                      a.$1 = b;
                    },
                    children: [
                      i.jsx("div", {
                        className: "preventScrollOverflow",
                        children: i.jsxs("div", {
                          className: "conversationContainer",
                          children: [
                            i.jsx(c("MPNMessageList.react"), {
                              connectionState: this.state.connectionState,
                              deliveryTimestamp: d(
                                "MessengerDeliveryReceipt.bs"
                              ).getDeliveryTimeOfThread(
                                this.props.deliveryReceipt,
                                this.$7
                              ),
                              messages: this.state.messages,
                              shouldShowWelcomeMessage:
                                this.state.shouldShowWelcomeMessage,
                              readReceipt:
                                (e = this.state.readReceipt) != null
                                  ? e
                                  : (e = this.$6) == null
                                  ? void 0
                                  : e.getLatestReadReceipt(),
                              scrollIntoView: this.$15,
                              setFeedback: this.props.setFeedback,
                            }),
                            i.jsx(c("LiveChatPluginTypingIndicator.react"), {
                              pageIsTyping: this.state.typing,
                              ref: function (b) {
                                a.$8 = b;
                              },
                            }),
                          ],
                        }),
                      }),
                      i.jsxs("div", {
                        style: {
                          position: "relative",
                          top: Math.max(this.state.quickRepliesOffset, 0),
                        },
                        children: [
                          i.jsx(c("MPNQuickRepliesGroup.react"), {
                            messages: this.state.messages,
                            userID: this.state.userID,
                          }),
                          i.jsx(c("MPNIcebreakersGroup.react"), {
                            threadID: this.$7,
                            messages: this.state.messages,
                            store: this.$6,
                          }),
                        ],
                      }),
                    ],
                  }),
                },
                "scrollable_area"
              ),
            ],
          });
        } catch (a) {
          b("cr:878") == null
            ? void 0
            : b("cr:878").logChatPluginThreadLoadModuleEndFail();
          return null;
        }
      };
      f.$12 = function () {
        var a;
        (a = this.$11) == null ? void 0 : a.tearDown();
        this.setState({ hasLoggedImpression: !1 });
        a = d("MPNIdentity").MPNIdentity.currentUserID();
        if (a == null) return;
        if (
          this.context.state.optimisticStorageState.chatState ==
          d("MPNLocalState").MPNChatState.CHAT_NOT_STARTED
        )
          return;
        var b = this.context,
          e = b.state;
        b = b.dispatchAction;
        var f = d("MPNIdentity").MPNIdentity.currentUserState();
        f =
          f === d("MPNIdentity").MPNIdentityState.FB
            ? d("LiveChatPluginConstants").LOGGED_IN_CHAT_MODE
            : f === d("MPNIdentity").MPNIdentityState.GUEST
            ? d("LiveChatPluginConstants").GUEST_CHAT_MODE
            : d("LiveChatPluginConstants").INVALID_CHAT_MODE;
        e =
          f === d("LiveChatPluginConstants").GUEST_CHAT_MODE
            ? e.accessToken
            : e.loggedInAccessToken;
        a = new (c("LiveChatMessageStore"))(
          this.$7,
          f,
          a,
          this.context.state.pageID,
          this.context.state.soundURLs,
          e
        );
        this.$6 = a;
        b({ type: "SET_UP_MESSAGE_STORE", messageStore: this.$6 });
        a.setUpGuestMessageSendQueue(e);
        this.$11 = new (c("MPNThreadViewSubscriptions"))(this, a, f);
        this.$11.initialize();
      };
      f.$13 = function () {
        return this.$5 && this.$5.getArea();
      };
      f.scrollToBottom = function () {
        this.$5 && this.$5.scrollToBottom();
      };
      f.$16 = function () {
        var a = d("ReactDOM").findDOMNode(this);
        return a && a.parentNode && a.parentNode instanceof HTMLElement
          ? a.parentNode.getBoundingClientRect().height + "px"
          : "100%";
      };
      f.$14 = function () {
        var a;
        !this.context.state.isMobile
          ? (a = "100%")
          : (a =
              (this.props.dialogBodyHeight === -1
                ? this.$16()
                : this.props.dialogBodyHeight) + "px");
        this.state.showConnectionBanner &&
          !navigator.userAgent.includes("Firefox") &&
          (a =
            a === "100%"
              ? "91%"
              : Math.max(parseInt(a, 10) - j, 0).toString() + "px");
        return a;
      };
      f.handleConnectionStateChange = function () {
        var a = this;
        c("setTimeout")(function () {
          a.scrollToBottom();
        }, k);
      };
      return e;
    })(i.PureComponent);
    a.contextType = c("MessagingPluginContext");
    g["default"] = a;
  },
  98
);
