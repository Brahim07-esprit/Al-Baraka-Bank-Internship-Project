/*FB_PKG_DELIM*/

__d(
  "CometNewsFeedVPVDStore_newsFeedEdge.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "InlineDataFragment",
      name: "CometNewsFeedVPVDStore_newsFeedEdge",
    };
    e.exports = a;
  },
  null
);
__d(
  "VideoHomeDurationThumbnailOverlay_video.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "VideoHomeDurationThumbnailOverlay_video",
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
          name: "broadcast_status",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "has_viewer_watched_show_video",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "playable_duration",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_spherical",
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
  "VideoHomeInlineEndScreenImplQuery_facebookRelayOperation",
  [],
  function (a, b, c, d, e, f) {
    e.exports = "6317261928354532";
  },
  null
);
__d(
  "VideoHomeInlineEndScreenImplQuery.graphql",
  ["VideoHomeInlineEndScreenImplQuery_facebookRelayOperation"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = { defaultValue: null, kind: "LocalArgument", name: "caller" },
        c = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "entry_channel_id",
        },
        d = { defaultValue: null, kind: "LocalArgument", name: "entry_point" },
        e = { defaultValue: null, kind: "LocalArgument", name: "id" },
        f = [{ kind: "Variable", name: "id", variableName: "id" }],
        g = { kind: "Variable", name: "caller", variableName: "caller" },
        h = {
          kind: "Variable",
          name: "entry_channel_id",
          variableName: "entry_channel_id",
        },
        i = {
          kind: "Variable",
          name: "entry_point",
          variableName: "entry_point",
        },
        j = { kind: "Variable", name: "exclude_video", variableName: "id" },
        k = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        l = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        m = [l],
        n = {
          kind: "InlineFragment",
          selections: m,
          type: "Node",
          abstractKey: "__isNode",
        },
        o = {
          alias: null,
          args: null,
          concreteType: "StoryAttachment",
          kind: "LinkedField",
          name: "attachments",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: "LinkedField",
              name: "media",
              plural: !1,
              selections: [
                k,
                {
                  kind: "InlineFragment",
                  selections: [
                    l,
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
                      name: "has_viewer_watched_show_video",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "playable_duration",
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
                      args: [
                        { kind: "Literal", name: "height", value: 354 },
                        { kind: "Literal", name: "width", value: 627 },
                      ],
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
                      storageKey: "image(height:354,width:627)",
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "owner",
                      plural: !1,
                      selections: [
                        k,
                        l,
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "name",
                          storageKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "uri_token",
                              storageKey: null,
                            },
                          ],
                          type: "VideoOwner",
                          abstractKey: "__isVideoOwner",
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "title_with_fallback",
                      storageKey: null,
                    },
                  ],
                  type: "Video",
                  abstractKey: null,
                },
                n,
                {
                  kind: "InlineFragment",
                  selections: m,
                  type: "DynamicFeedAdAttachmentMedia",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: m,
                  type: "GenericAttachmentMedia",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: m,
                  type: "MontageImage",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: m,
                  type: "MontageVideo",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [a, c, d, e],
          kind: "Fragment",
          metadata: null,
          name: "VideoHomeInlineEndScreenImplQuery",
          selections: [
            {
              alias: "video",
              args: f,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: [g, h, i, j],
                      kind: "FragmentSpread",
                      name: "VideoHomeInlineEndScreenRow_video",
                    },
                  ],
                  type: "Video",
                  abstractKey: null,
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
          argumentDefinitions: [a, e, c, d],
          kind: "Operation",
          name: "VideoHomeInlineEndScreenImplQuery",
          selections: [
            {
              alias: "video",
              args: f,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                k,
                l,
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: null,
                      args: [h, i],
                      concreteType: null,
                      kind: "LinkedField",
                      name: "video_channel",
                      plural: !1,
                      selections: [
                        k,
                        {
                          alias: null,
                          args: [
                            g,
                            j,
                            { kind: "Literal", name: "first", value: 3 },
                          ],
                          concreteType: "VideoChannelFeedConnection",
                          kind: "LinkedField",
                          name: "video_channel_feed",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "VideoChannelFeedEdge",
                              kind: "LinkedField",
                              name: "edges",
                              plural: !0,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: null,
                                  kind: "LinkedField",
                                  name: "node",
                                  plural: !1,
                                  selections: [
                                    k,
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          kind: "ScalarField",
                                          name: "encrypted_tracking",
                                          storageKey: null,
                                        },
                                        o,
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: "Story",
                                          kind: "LinkedField",
                                          name: "attached_story",
                                          plural: !1,
                                          selections: [o, l],
                                          storageKey: null,
                                        },
                                      ],
                                      type: "Story",
                                      abstractKey: null,
                                    },
                                    n,
                                    {
                                      kind: "InlineFragment",
                                      selections: m,
                                      type: "CommunityTabNewJoinFeedUnit",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: m,
                                      type: "CommunityTabTrendingPOGFeedUnit",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: m,
                                      type: "FBShortsMidCardFeedUnit",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: m,
                                      type: "XFBDummyReelsInWatchIFU",
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
                        l,
                      ],
                      storageKey: null,
                    },
                  ],
                  type: "Video",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: b("VideoHomeInlineEndScreenImplQuery_facebookRelayOperation"),
          metadata: {},
          name: "VideoHomeInlineEndScreenImplQuery",
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
  "VideoHomeInlineEndScreenRowItem_story.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "VideoHomeInlineEndScreenRowItem_story",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "encrypted_tracking",
          storageKey: null,
        },
      ],
      type: "Story",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "VideoHomeInlineEndScreenRowItem_video.graphql",
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
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "VideoHomeInlineEndScreenRowItem_video",
        selections: [
          {
            args: null,
            kind: "FragmentSpread",
            name: "VideoHomeDurationThumbnailOverlay_video",
          },
          a,
          {
            alias: null,
            args: [
              { kind: "Literal", name: "height", value: 354 },
              { kind: "Literal", name: "width", value: 627 },
            ],
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
            storageKey: "image(height:354,width:627)",
          },
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "owner",
            plural: !1,
            selections: [
              a,
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "name",
                storageKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "uri_token",
                    storageKey: null,
                  },
                ],
                type: "VideoOwner",
                abstractKey: "__isVideoOwner",
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "title_with_fallback",
            storageKey: null,
          },
        ],
        type: "Video",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "VideoHomeInlineEndScreenRow_video.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
        alias: null,
        args: null,
        concreteType: "StoryAttachment",
        kind: "LinkedField",
        name: "attachments",
        plural: !0,
        selections: [
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "media",
            plural: !1,
            selections: [
              {
                kind: "InlineFragment",
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "__typename",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "id",
                    storageKey: null,
                  },
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "VideoHomeInlineEndScreenRowItem_video",
                  },
                ],
                type: "Video",
                abstractKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        storageKey: null,
      };
      return {
        argumentDefinitions: [
          { defaultValue: null, kind: "LocalArgument", name: "caller" },
          { defaultValue: 3, kind: "LocalArgument", name: "count" },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "entry_channel_id",
          },
          { defaultValue: null, kind: "LocalArgument", name: "entry_point" },
          { defaultValue: null, kind: "LocalArgument", name: "exclude_video" },
        ],
        kind: "Fragment",
        metadata: null,
        name: "VideoHomeInlineEndScreenRow_video",
        selections: [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "entry_channel_id",
                variableName: "entry_channel_id",
              },
              {
                kind: "Variable",
                name: "entry_point",
                variableName: "entry_point",
              },
            ],
            concreteType: null,
            kind: "LinkedField",
            name: "video_channel",
            plural: !1,
            selections: [
              {
                alias: null,
                args: [
                  { kind: "Variable", name: "caller", variableName: "caller" },
                  {
                    kind: "Variable",
                    name: "exclude_video",
                    variableName: "exclude_video",
                  },
                  { kind: "Variable", name: "first", variableName: "count" },
                ],
                concreteType: "VideoChannelFeedConnection",
                kind: "LinkedField",
                name: "video_channel_feed",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "VideoChannelFeedEdge",
                    kind: "LinkedField",
                    name: "edges",
                    plural: !0,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: "LinkedField",
                        name: "node",
                        plural: !1,
                        selections: [
                          {
                            kind: "InlineFragment",
                            selections: [
                              {
                                args: null,
                                kind: "FragmentSpread",
                                name: "VideoHomeInlineEndScreenRowItem_story",
                              },
                              a,
                              {
                                alias: null,
                                args: null,
                                concreteType: "Story",
                                kind: "LinkedField",
                                name: "attached_story",
                                plural: !1,
                                selections: [a],
                                storageKey: null,
                              },
                            ],
                            type: "Story",
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
            storageKey: null,
          },
        ],
        type: "Video",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "VideoHomeInlinePauseScreenImplQuery_facebookRelayOperation",
  [],
  function (a, b, c, d, e, f) {
    e.exports = "6599280416758837";
  },
  null
);
__d(
  "VideoHomeInlinePauseScreenImplQuery.graphql",
  ["VideoHomeInlinePauseScreenImplQuery_facebookRelayOperation"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = { defaultValue: null, kind: "LocalArgument", name: "caller" },
        c = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "entry_channel_id",
        },
        d = { defaultValue: null, kind: "LocalArgument", name: "entry_point" },
        e = { defaultValue: null, kind: "LocalArgument", name: "id" },
        f = [{ kind: "Variable", name: "id", variableName: "id" }],
        g = { kind: "Variable", name: "caller", variableName: "caller" },
        h = {
          kind: "Variable",
          name: "entry_channel_id",
          variableName: "entry_channel_id",
        },
        i = {
          kind: "Variable",
          name: "entry_point",
          variableName: "entry_point",
        },
        j = { kind: "Variable", name: "exclude_video", variableName: "id" },
        k = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        l = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        m = [l],
        n = {
          kind: "InlineFragment",
          selections: m,
          type: "Node",
          abstractKey: "__isNode",
        },
        o = {
          alias: null,
          args: null,
          concreteType: "StoryAttachment",
          kind: "LinkedField",
          name: "attachments",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: "LinkedField",
              name: "media",
              plural: !1,
              selections: [
                k,
                {
                  kind: "InlineFragment",
                  selections: [
                    l,
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
                      name: "has_viewer_watched_show_video",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "playable_duration",
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
                      args: [
                        { kind: "Literal", name: "height", value: 354 },
                        { kind: "Literal", name: "width", value: 627 },
                      ],
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
                      storageKey: "image(height:354,width:627)",
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "owner",
                      plural: !1,
                      selections: [
                        k,
                        l,
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "name",
                          storageKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "uri_token",
                              storageKey: null,
                            },
                          ],
                          type: "VideoOwner",
                          abstractKey: "__isVideoOwner",
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "title_with_fallback",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "is_live_streaming",
                      storageKey: null,
                    },
                  ],
                  type: "Video",
                  abstractKey: null,
                },
                n,
                {
                  kind: "InlineFragment",
                  selections: m,
                  type: "DynamicFeedAdAttachmentMedia",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: m,
                  type: "GenericAttachmentMedia",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: m,
                  type: "MontageImage",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: m,
                  type: "MontageVideo",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [a, c, d, e],
          kind: "Fragment",
          metadata: null,
          name: "VideoHomeInlinePauseScreenImplQuery",
          selections: [
            {
              alias: "video",
              args: f,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      args: [g, h, i, j],
                      kind: "FragmentSpread",
                      name: "VideoHomeInlinePauseScreenRow_video",
                    },
                  ],
                  type: "Video",
                  abstractKey: null,
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
          argumentDefinitions: [a, e, c, d],
          kind: "Operation",
          name: "VideoHomeInlinePauseScreenImplQuery",
          selections: [
            {
              alias: "video",
              args: f,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                k,
                l,
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: null,
                      args: [h, i],
                      concreteType: null,
                      kind: "LinkedField",
                      name: "video_channel",
                      plural: !1,
                      selections: [
                        k,
                        {
                          alias: null,
                          args: [
                            g,
                            j,
                            { kind: "Literal", name: "first", value: 3 },
                          ],
                          concreteType: "VideoChannelFeedConnection",
                          kind: "LinkedField",
                          name: "video_channel_feed",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "VideoChannelFeedEdge",
                              kind: "LinkedField",
                              name: "edges",
                              plural: !0,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: null,
                                  kind: "LinkedField",
                                  name: "node",
                                  plural: !1,
                                  selections: [
                                    k,
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          kind: "ScalarField",
                                          name: "encrypted_tracking",
                                          storageKey: null,
                                        },
                                        o,
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: "Story",
                                          kind: "LinkedField",
                                          name: "attached_story",
                                          plural: !1,
                                          selections: [o, l],
                                          storageKey: null,
                                        },
                                      ],
                                      type: "Story",
                                      abstractKey: null,
                                    },
                                    n,
                                    {
                                      kind: "InlineFragment",
                                      selections: m,
                                      type: "CommunityTabNewJoinFeedUnit",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: m,
                                      type: "CommunityTabTrendingPOGFeedUnit",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: m,
                                      type: "FBShortsMidCardFeedUnit",
                                      abstractKey: null,
                                    },
                                    {
                                      kind: "InlineFragment",
                                      selections: m,
                                      type: "XFBDummyReelsInWatchIFU",
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
                        l,
                      ],
                      storageKey: null,
                    },
                  ],
                  type: "Video",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: b("VideoHomeInlinePauseScreenImplQuery_facebookRelayOperation"),
          metadata: {},
          name: "VideoHomeInlinePauseScreenImplQuery",
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
  "VideoHomeInlinePauseScreenRowItem_story.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "VideoHomeInlinePauseScreenRowItem_story",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "encrypted_tracking",
          storageKey: null,
        },
      ],
      type: "Story",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "VideoHomeInlinePauseScreenRowItem_video.graphql",
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
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "VideoHomeInlinePauseScreenRowItem_video",
        selections: [
          {
            args: null,
            kind: "FragmentSpread",
            name: "VideoHomeDurationThumbnailOverlay_video",
          },
          a,
          {
            alias: null,
            args: [
              { kind: "Literal", name: "height", value: 354 },
              { kind: "Literal", name: "width", value: 627 },
            ],
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
            storageKey: "image(height:354,width:627)",
          },
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "owner",
            plural: !1,
            selections: [
              a,
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "name",
                storageKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "uri_token",
                    storageKey: null,
                  },
                ],
                type: "VideoOwner",
                abstractKey: "__isVideoOwner",
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "title_with_fallback",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_live_streaming",
            storageKey: null,
          },
        ],
        type: "Video",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "VideoHomeInlinePauseScreenRow_video.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
        alias: null,
        args: null,
        concreteType: "StoryAttachment",
        kind: "LinkedField",
        name: "attachments",
        plural: !0,
        selections: [
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "media",
            plural: !1,
            selections: [
              {
                kind: "InlineFragment",
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "__typename",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "id",
                    storageKey: null,
                  },
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "VideoHomeInlinePauseScreenRowItem_video",
                  },
                ],
                type: "Video",
                abstractKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        storageKey: null,
      };
      return {
        argumentDefinitions: [
          { defaultValue: null, kind: "LocalArgument", name: "caller" },
          { defaultValue: 3, kind: "LocalArgument", name: "count" },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "entry_channel_id",
          },
          { defaultValue: null, kind: "LocalArgument", name: "entry_point" },
          { defaultValue: null, kind: "LocalArgument", name: "exclude_video" },
        ],
        kind: "Fragment",
        metadata: null,
        name: "VideoHomeInlinePauseScreenRow_video",
        selections: [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "entry_channel_id",
                variableName: "entry_channel_id",
              },
              {
                kind: "Variable",
                name: "entry_point",
                variableName: "entry_point",
              },
            ],
            concreteType: null,
            kind: "LinkedField",
            name: "video_channel",
            plural: !1,
            selections: [
              {
                alias: null,
                args: [
                  { kind: "Variable", name: "caller", variableName: "caller" },
                  {
                    kind: "Variable",
                    name: "exclude_video",
                    variableName: "exclude_video",
                  },
                  { kind: "Variable", name: "first", variableName: "count" },
                ],
                concreteType: "VideoChannelFeedConnection",
                kind: "LinkedField",
                name: "video_channel_feed",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "VideoChannelFeedEdge",
                    kind: "LinkedField",
                    name: "edges",
                    plural: !0,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: "LinkedField",
                        name: "node",
                        plural: !1,
                        selections: [
                          {
                            kind: "InlineFragment",
                            selections: [
                              {
                                args: null,
                                kind: "FragmentSpread",
                                name: "VideoHomeInlinePauseScreenRowItem_story",
                              },
                              a,
                              {
                                alias: null,
                                args: null,
                                concreteType: "Story",
                                kind: "LinkedField",
                                name: "attached_story",
                                plural: !1,
                                selections: [a],
                                storageKey: null,
                              },
                            ],
                            type: "Story",
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
            storageKey: null,
          },
        ],
        type: "Video",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "CometInteractionSourceContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(10);
    g["default"] = b;
  },
  98
);
__d(
  "CometRelayQueryProfiler",
  ["emptyFunction", "interaction-tracing", "performanceNow", "relay-runtime"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a, b) {
      if (!b) return c("emptyFunction");
      var d = c("performanceNow")();
      return function (a) {
        var e = {
          is_preloaded: b.usedPrefetcher,
          usedCache: b.usedCache,
          usedPrefetcher: b.usedPrefetcher,
        };
        a && (e.error = a.message);
        c("interaction-tracing")
          .InteractionTracingCore.getPendingInteractions()
          .forEach(function (a) {
            a.addSubspan(
              "Relay_" + b.queryName,
              "RelayQuery",
              d,
              c("performanceNow")(),
              babelHelpers["extends"]({}, e, {
                full_duration: (c("performanceNow")() - d) / 1e3,
              })
            );
          });
      };
    }
    var i = !1;
    function a() {
      if (i) return;
      d("relay-runtime").RelayProfiler.attachProfileHandler(
        "fetchRelayQuery",
        h
      );
      i = !0;
    }
    g.install = a;
  },
  98
);
__d(
  "RelayFBCometMutations",
  ["recoverableViolation", "relay-runtime", "warning"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 1;
    function a(a) {
      return function (b, e) {
        var f = e.variables.input || {},
          g = f.actor_id,
          i = f.client_mutation_id;
        f = babelHelpers.objectWithoutPropertiesLoose(f, [
          "actor_id",
          "client_mutation_id",
        ]);
        c("warning")(
          i == null,
          "RelayFBCometMutations: Found `client_mutation_id` in mutation input`. In the Facebook context, `client_mutation_id` and `actor_id` are added automatically."
        );
        var j;
        b.options != null &&
        b.options.actorID != null &&
        typeof b.options.actorID === "string"
          ? (j = b.options.actorID)
          : c("recoverableViolation")(
              "RelayFBCometMutations: Expected a non-nullable string actorID to be set on the Relay environment. https://fburl.com/wiki/m19zmtlh",
              "relay"
            );
        if (g != null && g !== j) {
          var k = d("relay-runtime").getRequest(e.mutation);
          k = k.params.name;
          c("recoverableViolation")(
            'You passed an actor_id parameter "' +
              g +
              '" to mutation "' +
              k +
              '", but the parameter was overridden by the actor_id "' +
              ((k = j) != null ? k : "") +
              '" defined in the ActorContext that wraps your React tree. Update your code to avoid passing the actor_id parameter to your mutation.',
            "relay"
          );
          j = g;
        }
        g = babelHelpers["extends"]({}, e.variables, {
          input: babelHelpers["extends"]({}, f, {
            actor_id: j,
            client_mutation_id: (k = i) != null ? k : "" + h++,
          }),
        });
        return a(b, {
          configs: e.configs,
          mutation: e.mutation,
          onCompleted: e.onCompleted,
          onError: e.onError,
          optimisticResponse: e.optimisticResponse,
          optimisticUpdater: e.optimisticUpdater,
          updater: e.updater,
          uploadables: e.uploadables,
          variables: g,
        });
      };
    }
    g.addFBisms = a;
  },
  98
);
__d(
  "react-relay/relay-hooks/MatchContainer",
  ["react"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g,
      h = g || b("react"),
      i = h.useMemo;
    function a(a) {
      var b = a.fallback,
        c = a.loader,
        d = a.match;
      a = a.props;
      if (d != null && typeof d !== "object")
        throw new Error(
          "MatchContainer: Expected `match` value to be an object or null/undefined."
        );
      d = (d = d) != null ? d : {};
      var e = d.__id,
        f = d.__fragments,
        g = d.__fragmentOwner,
        j = d.__fragmentPropName;
      d = d.__module_component;
      if (
        (g != null && typeof g !== "object") ||
        (j != null && typeof j !== "string") ||
        (f != null && typeof f !== "object") ||
        (e != null && typeof e !== "string")
      )
        throw new Error(
          "MatchContainer: Invalid 'match' value, expected an object that has a '...SomeFragment' spread."
        );
      c = d != null ? c(d) : null;
      d = i(
        function () {
          if (j != null && e != null && f != null) {
            var a = {};
            a[j] = { __id: e, __fragments: f, __fragmentOwner: g };
            return a;
          }
          return null;
        },
        [e, f, g, j]
      );
      if (c != null && d != null)
        return h.jsx(c, babelHelpers["extends"]({}, a, d));
      else {
        return (c = b) != null ? c : null;
      }
    }
    a.displayName = a.name + " [from " + e.id + "]";
    e.exports = a;
  },
  null
);
__d(
  "RelayFBMatchContainer",
  ["RelayFBModuleLoader", "react", "react-relay/relay-hooks/MatchContainer"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.fallback,
        e = a.match;
      a = a.props;
      return h.jsx(c("react-relay/relay-hooks/MatchContainer"), {
        fallback: b,
        loader: d("RelayFBModuleLoader").read,
        match: e,
        props: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "RelayFBModuleResource",
  ["Promise", "RelayFBModuleLoader", "isPromise", "unrecoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = {};
    function i(a) {
      if (a === null || typeof a !== "object")
        throw c("unrecoverableViolation")(
          "ModuleResource.read(): Expected `match` value to be an object.",
          "relay"
        );
      a = a.__module_component;
      return a == null ? null : d("RelayFBModuleLoader").read(a);
    }
    function a(a) {
      var d = [],
        e = [];
      for (var f = 0; f < a.length; f++)
        try {
          var g = i(a[f]);
          d.push(g);
        } catch (a) {
          if (c("isPromise")(a)) e.push(a);
          else throw a;
        }
      if (e.length > 0) {
        g = a.map(function (a, b) {
          return (a = j(a)) != null ? a : "UNKNOWN_" + b;
        });
        var k = g.join(":");
        f = h[k];
        f == null &&
          (f = h[k] =
            b("Promise")
              .all(e)
              ["finally"](function () {
                delete h[k];
              }));
        throw f;
      }
      return d;
    }
    function j(a) {
      if (a === null || typeof a !== "object")
        throw c("unrecoverableViolation")(
          "ModuleResource.getModuleId(): Expected `match` value to be an object.",
          "relay"
        );
      a = a.__module_component;
      if (a == null) return null;
      a = d("RelayFBModuleLoader").getModuleReference(a);
      return a.getModuleId();
    }
    g.read = i;
    g.readAll = a;
    g.getModuleId = j;
  },
  98
);
__d(
  "useFragmentNodes_DEPRECATED",
  [
    "mapObject",
    "react",
    "react-relay/relay-hooks/FragmentResource",
    "react-relay/relay-hooks/useRelayEnvironment",
    "relay-runtime",
    "useUnsafeRef_DEPRECATED",
    "warning",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useEffect,
      i = b.useRef,
      j = b.useState;
    function a(a, b, e) {
      var f = c("react-relay/relay-hooks/useRelayEnvironment")(),
        g = d(
          "react-relay/relay-hooks/FragmentResource"
        ).getFragmentResourceForEnvironment(f),
        m = i(!1),
        n = j(0),
        o = n[1];
      n = l(a, b);
      var p = c("useUnsafeRef_DEPRECATED")(0),
        q = c("useUnsafeRef_DEPRECATED")(0);
      f = k(f);
      n = k(n);
      f = f || n;
      n = j(b);
      var r = n[0];
      n = n[1];
      var s = Object.keys(b).filter(function (b) {
          return !Object.prototype.hasOwnProperty.call(a, b);
        }),
        t = s.some(function (a) {
          return r[a] !== b[a];
        });
      s = s.some(function (a) {
        return !d("relay-runtime").isScalarAndEqual(r[a], b[a]);
      });
      s = f || s;
      s && q.current++;
      f && p.current++;
      t && n(b);
      var u = g.readSpec(a, b, e),
        v = i(!0);
      function w() {
        v.current = !0;
        var a = g.checkMissedUpdatesSpec(u);
        a && y();
      }
      function x() {
        v.current = !1;
      }
      function y() {
        var a;
        if (m.current === !1 || v.current === !1) return;
        q.current = ((a = q.current) != null ? a : 0) + 1;
        o(function (a) {
          return a + 1;
        });
      }
      h(
        function () {
          m.current = !0;
          var a = g.subscribeSpec(u, y);
          return function () {
            (m.current = !1), a.dispose();
          };
        },
        [p.current]
      );
      s = c("mapObject")(u, function (a, b) {
        return a.data;
      });
      return {
        data: s,
        disableStoreUpdates: x,
        enableStoreUpdates: w,
        shouldUpdateGeneration: q.current,
      };
    }
    function k(a) {
      var b = j(a),
        c = b[0];
      b = b[1];
      c = c !== a;
      c && b(a);
      return c;
    }
    function l(a, b) {
      return JSON.stringify(
        d("relay-runtime").stableCopy(
          c("mapObject")(a, function (a, c) {
            c = b[c];
            return d("relay-runtime").getFragmentIdentifier(a, c);
          })
        )
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "createSuspenseFragmentContainer_DEPRECATED",
  [
    "mapObject",
    "react",
    "react-relay/assertFragmentMap",
    "react-relay/relay-hooks/useRelayEnvironment",
    "relay-runtime",
    "useFragmentNodes_DEPRECATED",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useMemo;
    function a(a, b) {
      var e = a.displayName || a.name || "Unknown",
        f = "RelaySuspenseFragmentContainer(" + e + ")";
      c("react-relay/assertFragmentMap")(e, b);
      e = b;
      var g = c("mapObject")(e, d("relay-runtime").getFragment);
      function j(b, d) {
        var e = c("react-relay/relay-hooks/useRelayEnvironment")(),
          j = i(
            function () {
              return { environment: e };
            },
            [e]
          ),
          k = c("useFragmentNodes_DEPRECATED")(g, b, f),
          l = k.data;
        k = k.shouldUpdateGeneration;
        return i(
          function () {
            var c;
            return h.jsx(
              a,
              babelHelpers["extends"]({}, b, l, {
                ref: (c = b.componentRef) != null ? c : d,
                relay: j,
              })
            );
          },
          [k, d]
        );
      }
      j.displayName = f;
      b = h.forwardRef(j);
      return b;
    }
    g["default"] = a;
  },
  98
);
__d(
  "createSuspensePaginationContainer_DEPRECATED",
  [
    "areEqual",
    "createSuspenseFragmentContainer_DEPRECATED",
    "forEachObject",
    "mapObject",
    "react",
    "react-relay/relay-hooks/useRelayEnvironment",
    "relay-runtime",
    "unrecoverableViolation",
    "warning",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
      j = b.useEffect,
      k = b.useMemo,
      l = b.useReducer,
      m = b.useRef,
      n = "forward";
    function a(a, b, e) {
      var f = a.displayName || a.name || "Unknown",
        g = c("mapObject")(b, d("relay-runtime").getFragment),
        h = r(g),
        i = d("relay-runtime").getRequest(e.query);
      h = p(a, f, h.direction, s(h), e.getVariables);
      h = c("createSuspenseFragmentContainer_DEPRECATED")(h, b);
      return o(a, f, g, e.getFragmentRefsFromResponse, i, h);
    }
    function o(a, b, e, f, g, k) {
      var n = "RelaySuspensePaginationContainer(" + b + ")";
      a = function (a, b) {
        var o = c("react-relay/relay-hooks/useRelayEnvironment")(),
          p = {};
        c("forEachObject")(e, function (b, c) {
          b = d("relay-runtime").getSelector(b, a[c]);
          b =
            b != null && b.kind === "PluralReaderSelector"
              ? (c =
                  (c = b.selectors[0]) == null ? void 0 : c.owner.variables) !=
                null
                ? c
                : {}
              : (c = b == null ? void 0 : b.owner.variables) != null
              ? c
              : {};
          p = babelHelpers["extends"]({}, p, b);
        });
        var r = d("relay-runtime").getDataIDsFromObject(e, a),
          s = l(q, {
            dataIDs: r,
            mirroredEnvironment: o,
            mirroredParentVariables: p,
            refetchFragmentRefs: {},
            refetchVariables: null,
          }),
          t = s[0],
          u = s[1],
          v = m(!1),
          w = m(null),
          x = function () {
            w.current && (w.current.dispose(), (w.current = null));
          };
        j(function () {
          return function () {
            (v.current = !0), x();
          };
        }, []);
        (o !== t.mirroredEnvironment ||
          !c("areEqual")(p, t.mirroredParentVariables) ||
          !c("areEqual")(t.dataIDs, r)) &&
          (x(),
          u({ dataIDs: r, environment: o, parentVariables: p, type: "reset" }));
        s = i(
          function (a, b) {
            if (v.current === !0) {
              c("warning")(
                !1,
                "Relay: Unexpected fetch on unmounted component `%s`. It looks like some instances of your container still trying to fetch data but they already unmounted. Please make sure you clear all timers, intervals, async calls, etc that may trigger a fetch.",
                n
              );
              return null;
            }
            a = d("relay-runtime").__internal.getOperationVariables(
              g.operation,
              g.params.providedVariables,
              a
            );
            var e = b && b.force ? { force: !0 } : {},
              h = d("relay-runtime").createOperationDescriptor(g, a, e),
              i = null,
              j = o.retain(h),
              k = {
                dispose: function () {
                  var a = i;
                  i = null;
                  a && a.unsubscribe();
                  j.dispose();
                },
              };
            e = function () {
              var a = {
                complete: function () {
                  x(),
                    u({ type: "complete" }),
                    b && b.onComplete && b.onComplete(null);
                },
                error: (function (a) {
                  function b(b) {
                    return a.apply(this, arguments);
                  }
                  b.toString = function () {
                    return a.toString();
                  };
                  return b;
                })(function (a) {
                  x(),
                    u({ type: "abort" }),
                    b && b.onComplete && b.onComplete(a);
                }),
                next: function () {
                  var a = o.lookup(h.fragment);
                  u({ fragmentRefs: f(a.data), type: "next" });
                },
                unsubscribe: function () {
                  if (v.current === !0) return;
                  x();
                  u({ type: "abort" });
                },
              };
              i = d("relay-runtime").__internal.fetchQuery(o, h).subscribe(a);
              return k;
            };
            x();
            w.current = e();
            u({ refetchVariables: a, type: "fetch" });
            return k;
          },
          [o]
        );
        return h.jsx(
          k,
          babelHelpers["extends"]({}, a, t.refetchFragmentRefs, {
            forwardedRef: b,
            isLoading: w.current != null,
            parentVariables: (r = t.refetchVariables) != null ? r : p,
            refetch: s,
          })
        );
      };
      a.displayName = n;
      b = h.forwardRef(a);
      return b;
    }
    function p(a, b, e, f, g) {
      return function (j) {
        var l,
          m = j.forwardedRef,
          o = j.isLoading,
          p = j.parentVariables,
          q = j.refetch;
        j.relay;
        var r = babelHelpers.objectWithoutPropertiesLoose(j, [
            "forwardedRef",
            "isLoading",
            "parentVariables",
            "refetch",
            "relay",
          ]),
          s = c("react-relay/relay-hooks/useRelayEnvironment")();
        j = f(r);
        var u = t(b, e, j),
          v = i(
            function (a, b) {
              if (u == null || !u.hasMore) {
                b && b.onComplete && b.onComplete(null);
                return null;
              }
              var f = d("relay-runtime").ConnectionInterface.get(),
                h = f.END_CURSOR;
              f = f.START_CURSOR;
              var i = u.cursor;
              c("warning")(
                i,
                "Relay: Cannot `loadMore` without valid `%s` (got `%s`)",
                e === n ? h : f,
                i
              );
              return q(g(r, { count: a, cursor: i }, p), b);
            },
            [u, q, r, p]
          ),
          w = i(
            function (a, b, c) {
              return q(
                g(
                  r,
                  { count: a, cursor: null },
                  babelHelpers["extends"]({}, p, b || {})
                ),
                babelHelpers["extends"]({}, c, { force: !0 })
              );
            },
            [q, r, p]
          ),
          x = !!(u && u.hasMore && u.cursor);
        j = k(
          function () {
            return {
              environment: s,
              hasMore: x,
              isLoading: o,
              loadMore: v,
              refetchConnection: w,
            };
          },
          [s, x, o, v, w]
        );
        return h.jsx(
          a,
          babelHelpers["extends"]({}, r, {
            ref: (l = r.componentRef) != null ? l : m,
            relay: j,
          })
        );
      };
    }
    function q(a, b) {
      var c;
      switch (b.type) {
        case "reset":
          c = {
            dataIDs: b.dataIDs,
            mirroredEnvironment: b.environment,
            mirroredParentVariables: b.parentVariables,
            refetchFragmentRefs: {},
            refetchVariables: null,
          };
          break;
        case "fetch":
          c = babelHelpers["extends"]({}, a, {
            refetchVariables: b.refetchVariables,
          });
          break;
        case "abort":
          c = babelHelpers["extends"]({}, a);
          break;
        case "next":
          c = babelHelpers["extends"]({}, a, {
            refetchFragmentRefs: b.fragmentRefs,
          });
          break;
        case "complete":
        default:
          c = babelHelpers["extends"]({}, a);
          break;
      }
      return c;
    }
    function r(a) {
      var b = null;
      for (var d in a) {
        var e = a[d];
        e = e && e.metadata && e.metadata.connection;
        if (e != null) {
          if (!Array.isArray(e))
            throw c("unrecoverableViolation")(
              "SuspensePaginationContainer: Expected metadata to be array, got " +
                ("`" + typeof e + "` instead."),
              "relay"
            );
          if (e.length !== 1)
            throw c("unrecoverableViolation")(
              "SuspensePaginationContainer: Only a single @connection is " +
                ("supported, `" + d + "` has " + e.length + "."),
              "relay"
            );
          if (b)
            throw c("unrecoverableViolation")(
              "SuspensePaginationContainer: Only a single fragment with @connection is supported.",
              "relay"
            );
          b = babelHelpers["extends"]({}, e[0], { fragmentName: d });
        }
      }
      if (b === null)
        throw c("unrecoverableViolation")(
          "SuspensePaginationContainer: A @connection directive must be present.",
          "relay"
        );
      return b;
    }
    function s(a) {
      var b = a.path;
      if (!b)
        throw c("unrecoverableViolation")(
          "SuspensePaginationContainer: Unable to synthesize a getConnectionFromProps function.",
          "relay"
        );
      return function (c) {
        c = c[a.fragmentName];
        for (var d = 0; d < b.length; d++) {
          if (!c || typeof c !== "object") return null;
          c = c[b[d]];
        }
        return c;
      };
    }
    function t(a, b, e) {
      if (e == null) return null;
      var f = d("relay-runtime").ConnectionInterface.get(),
        g = f.EDGES,
        h = f.END_CURSOR,
        i = f.HAS_NEXT_PAGE,
        j = f.HAS_PREV_PAGE,
        k = f.PAGE_INFO;
      f = f.START_CURSOR;
      if (typeof e !== "object")
        throw c("unrecoverableViolation")(
          "SuspensePaginationContainer: Expected `getConnectionFromProps()` in " +
            ("`" + a + "` to return `null` or a plain object with ") +
            (g + " and " + k + " properties, got `" + e + "`."),
          "relay"
        );
      var l = e[g];
      e = e[k];
      if (l == null || e == null) return null;
      if (!Array.isArray(l))
        throw c("unrecoverableViolation")(
          "SuspensePaginationContainer: Expected `getConnectionFromProps()` in " +
            ("`" + a + "` to return an object with " + g + ": Array, got ") +
            ("`" + l + "`."),
          "relay"
        );
      if (typeof e !== "object")
        throw c("unrecoverableViolation")(
          "SuspensePaginationContainer: Expected `getConnectionFromProps()` in " +
            ("`" + a + "` to return an object with " + k + ": Object, ") +
            ("got `" + e + "`."),
          "relay"
        );
      g = b === n ? e[i] : e[j];
      e = b === n ? e[h] : e[f];
      if (typeof g !== "boolean" || (l.length !== 0 && e === void 0)) {
        c("warning")(
          !1,
          "Relay: Cannot paginate without %s fields in `%s`. Be sure to fetch %s (got `%s`) and %s (got `%s`).",
          k,
          a,
          b === n ? i : j,
          g,
          b === n ? h : f,
          e
        );
        return null;
      }
      return { cursor: e, edgeCount: l.length, hasMore: g };
    }
    g["default"] = a;
  },
  98
);
__d(
  "createSuspenseQueryRenderer_DEPRECATED",
  [
    "react",
    "react-relay/ReactRelayContext",
    "react-relay/relay-hooks/useLazyLoadQueryNode",
    "react-relay/relay-hooks/useMemoOperationDescriptor",
    "react-relay/relay-hooks/useRelayEnvironment",
    "relay-runtime",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useMemo;
    function a(a) {
      var b = d("relay-runtime").getRequest(a),
        e = "RelaySuspenseQueryRenderer(" + b.params.name + ")";
      function g(b) {
        var f = b.UNSTABLE_renderPolicy,
          g = b.children,
          k = b.fetchKey,
          l = b.fetchPolicy;
        b = b.variables;
        var m = c("react-relay/relay-hooks/useRelayEnvironment")();
        b = c("react-relay/relay-hooks/useMemoOperationDescriptor")(a, b, {
          force: !0,
        });
        var n = i(
            function () {
              return j(m);
            },
            [m]
          ),
          o = c("react-relay/relay-hooks/useLazyLoadQueryNode")({
            componentDisplayName: e,
            fetchKey: k,
            fetchObservable: d("relay-runtime").__internal.fetchQuery(m, b),
            fetchPolicy: l,
            query: b,
            renderPolicy: f,
          });
        return h.jsx(c("react-relay/ReactRelayContext").Provider, {
          value: n,
          children: i(
            function () {
              return g(o);
            },
            [g, o]
          ),
        });
      }
      g.displayName = g.name + " [from " + f.id + "]";
      g.displayName = e;
      return g;
    }
    function j(a) {
      return { environment: a };
    }
    g["default"] = a;
  },
  98
);
__d(
  "isRelayFBLocalEnvironment",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return a.options != null && a.options.isLocal === !0 ? !0 : !1;
    }
    f["default"] = a;
  },
  66
);
__d(
  "react-relay/relay-hooks/useBlockingPaginationFragment",
  [
    "invariant",
    "Promise",
    "react",
    "react-relay/relay-hooks/useLoadMoreFunction",
    "react-relay/relay-hooks/useRefetchableFragmentNode",
    "react-relay/relay-hooks/useStaticFragmentNodeWarning",
    "relay-runtime",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    c = h || b("react");
    var i = c.useCallback,
      j = c.useEffect,
      k = c.useRef,
      l = c.useState,
      m = b("relay-runtime").getFragment,
      n = b("relay-runtime").getFragmentIdentifier,
      o = b("relay-runtime").getPaginationMetadata;
    function a(a, c, d) {
      d === void 0 && (d = "useBlockingPaginationFragment()");
      a = m(a);
      b("react-relay/relay-hooks/useStaticFragmentNodeWarning")(
        a,
        "first argument of " + d
      );
      var e = o(a, d),
        f = e.connectionPathInFragmentData,
        h = e.paginationRequest,
        j = e.paginationMetadata;
      e = e.stream;
      e === !1 || g(0, 18372);
      e = b("react-relay/relay-hooks/useRefetchableFragmentNode")(a, c, d);
      c = e.fragmentData;
      var k = e.fragmentRef,
        l = e.refetch,
        q = e.disableStoreUpdates;
      e = e.enableStoreUpdates;
      var r = n(a, k),
        s = p({
          componentDisplayName: d,
          connectionPathInFragmentData: f,
          direction: "backward",
          disableStoreUpdates: q,
          enableStoreUpdates: e,
          fragmentData: c,
          fragmentIdentifier: r,
          fragmentNode: a,
          fragmentRef: k,
          paginationMetadata: j,
          paginationRequest: h,
        }),
        t = s[0],
        u = s[1],
        v = s[2];
      s = p({
        componentDisplayName: d,
        connectionPathInFragmentData: f,
        direction: "forward",
        disableStoreUpdates: q,
        enableStoreUpdates: e,
        fragmentData: c,
        fragmentIdentifier: r,
        fragmentNode: a,
        fragmentRef: k,
        paginationMetadata: j,
        paginationRequest: h,
      });
      d = s[0];
      f = s[1];
      var w = s[2];
      q = i(
        function (a, b) {
          w();
          v();
          return l(
            a,
            babelHelpers["extends"]({}, b, { __environment: void 0 })
          );
        },
        [w, v, l]
      );
      return {
        data: c,
        loadNext: d,
        loadPrevious: t,
        hasNext: f,
        hasPrevious: u,
        refetch: q,
      };
    }
    function p(a) {
      var c = a.disableStoreUpdates,
        d = a.enableStoreUpdates;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "disableStoreUpdates",
        "enableStoreUpdates",
      ]);
      var e = l(null),
        f = e[0],
        g = e[1],
        h = k(null),
        i = k(null),
        m = function () {
          i.current != null && (i.current(), (i.current = null));
        };
      e = function () {
        m();
      };
      var n = {
        complete: m,
        start: function () {
          c();
          var a = new (b("Promise"))(function (a) {
            i.current = function () {
              (h.current = null), a();
            };
          });
          h.current = a;
          g(a);
        },
        next: m,
        error: m,
      };
      a = b("react-relay/relay-hooks/useLoadMoreFunction")(
        babelHelpers["extends"]({}, a, { observer: n, onReset: e })
      );
      n = a[0];
      e = a[1];
      a = a[2];
      if (f != null && f === h.current) throw f;
      j(
        function () {
          f !== h.current && d();
        },
        [f]
      );
      return [n, e, a];
    }
    e.exports = a;
  },
  null
);
__d(
  "react-relay/relay-hooks/useIsParentQueryActive",
  [
    "react-relay/relay-hooks/useIsOperationNodeActive",
    "react-relay/relay-hooks/useStaticFragmentNodeWarning",
    "relay-runtime",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = b("relay-runtime").getFragment;
    function a(a, c) {
      a = g(a);
      b("react-relay/relay-hooks/useStaticFragmentNodeWarning")(
        a,
        "first argument of useIsParentQueryActive()"
      );
      return b("react-relay/relay-hooks/useIsOperationNodeActive")(a, c);
    }
    e.exports = a;
  },
  null
);
__d(
  "CometRelay",
  [
    "CometRelayQueryProfiler",
    "RelayFBCometMutations",
    "RelayFBEnvironmentActorID",
    "RelayFBMatchContainer",
    "RelayFBModuleResource",
    "RelayFBSubscription",
    "configureRelayForWWW",
    "createSuspenseFragmentContainer_DEPRECATED",
    "createSuspensePaginationContainer_DEPRECATED",
    "createSuspenseQueryRenderer_DEPRECATED",
    "enqueueMutation",
    "isRelayFBLocalEnvironment",
    "react",
    "react-relay/relay-hooks/EntryPointContainer.react",
    "react-relay/relay-hooks/ProfilerContext",
    "react-relay/relay-hooks/RelayEnvironmentProvider",
    "react-relay/relay-hooks/loadEntryPoint",
    "react-relay/relay-hooks/loadQuery",
    "react-relay/relay-hooks/useBlockingPaginationFragment",
    "react-relay/relay-hooks/useEntryPointLoader",
    "react-relay/relay-hooks/useFragment",
    "react-relay/relay-hooks/useIsParentQueryActive",
    "react-relay/relay-hooks/useLazyLoadQuery",
    "react-relay/relay-hooks/usePaginationFragment",
    "react-relay/relay-hooks/usePreloadedQuery",
    "react-relay/relay-hooks/useQueryLoader",
    "react-relay/relay-hooks/useRefetchableFragment",
    "react-relay/relay-hooks/useRelayEnvironment",
    "react-relay/relay-hooks/useSubscribeToInvalidationState",
    "relay-runtime",
    "useFBMutation__TEMPORARY",
    "useFBSubscription",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    a = c("RelayFBSubscription").addFBisms(
      d("relay-runtime").requestSubscription
    );
    c("configureRelayForWWW")();
    d("CometRelayQueryProfiler").install();
    f.exports = {
      ConnectionHandler: d("relay-runtime").ConnectionHandler,
      EntryPointContainer: c(
        "react-relay/relay-hooks/EntryPointContainer.react"
      ),
      MatchContainer: c("RelayFBMatchContainer"),
      ModuleResource: {
        getModuleId: d("RelayFBModuleResource").getModuleId,
        read: d("RelayFBModuleResource").read,
        readAll: d("RelayFBModuleResource").readAll,
      },
      MutationTypes: d("relay-runtime").MutationTypes,
      ProfilerContext: c("react-relay/relay-hooks/ProfilerContext"),
      RangeOperations: d("relay-runtime").RangeOperations,
      RelayEnvironmentProvider: c(
        "react-relay/relay-hooks/RelayEnvironmentProvider"
      ),
      RelayFeatureFlags: d("relay-runtime").RelayFeatureFlags,
      VIEWER_ID: d("relay-runtime").VIEWER_ID,
      applyOptimisticMutation: d("relay-runtime").applyOptimisticMutation,
      commitLocalUpdate: d("relay-runtime").commitLocalUpdate,
      commitMutation: d("RelayFBCometMutations").addFBisms(
        d("relay-runtime").commitMutation
      ),
      commitMutation__TEMPORARY: d("RelayFBCometMutations").addFBisms(
        d("relay-runtime").commitMutation
      ),
      createPayloadFor3DField: d("relay-runtime").createPayloadFor3DField,
      createSuspenseFragmentContainer_DEPRECATED: c(
        "createSuspenseFragmentContainer_DEPRECATED"
      ),
      createSuspensePaginationContainer_DEPRECATED: c(
        "createSuspensePaginationContainer_DEPRECATED"
      ),
      createSuspenseQueryRenderer_DEPRECATED: c(
        "createSuspenseQueryRenderer_DEPRECATED"
      ),
      enqueueMutation: d("RelayFBCometMutations").addFBisms(
        d("enqueueMutation").enqueueMutation
      ),
      fetchQuery: d("relay-runtime").fetchQuery,
      generateUniqueClientID: d("relay-runtime").generateUniqueClientID,
      getActorID: d("RelayFBEnvironmentActorID").getActorID,
      graphql: d("relay-runtime").graphql,
      isLocalEnvironment: c("isRelayFBLocalEnvironment"),
      loadEntryPoint: c("react-relay/relay-hooks/loadEntryPoint"),
      loadQuery: d("react-relay/relay-hooks/loadQuery").loadQuery,
      readInlineData: d("relay-runtime").readInlineData,
      requestSubscription: a,
      useBlockingPaginationFragment: c(
        "react-relay/relay-hooks/useBlockingPaginationFragment"
      ),
      useEntryPointLoader: c("react-relay/relay-hooks/useEntryPointLoader"),
      useFragment: c("react-relay/relay-hooks/useFragment"),
      useIsParentQueryActive: c(
        "react-relay/relay-hooks/useIsParentQueryActive"
      ),
      useLazyLoadQuery: c("react-relay/relay-hooks/useLazyLoadQuery"),
      useMutation: c("useFBMutation__TEMPORARY"),
      useMutation__TEMPORARY: c("useFBMutation__TEMPORARY"),
      usePaginationFragment: c("react-relay/relay-hooks/usePaginationFragment"),
      usePreloadedQuery: c("react-relay/relay-hooks/usePreloadedQuery"),
      useQueryLoader: c("react-relay/relay-hooks/useQueryLoader"),
      useRefetchableFragment: c(
        "react-relay/relay-hooks/useRefetchableFragment"
      ),
      useRelayEnvironment: function () {
        return c("react-relay/relay-hooks/useRelayEnvironment")();
      },
      useSubscribeToInvalidationState: c(
        "react-relay/relay-hooks/useSubscribeToInvalidationState"
      ),
      useSubscription: c("useFBSubscription"),
    };
  },
  34
);
__d(
  "CometNewsFeedVPVDStore",
  [
    "CircularBuffer",
    "CometNewsFeedVPVDStore_newsFeedEdge.graphql",
    "CometRelay",
    "emptyFunction",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = d("react"),
      k = j.useCallback,
      l = j.useContext,
      m = new (c("CircularBuffer"))(5);
    function a() {
      return m.read();
    }
    j = function () {
      var a = new (c("CircularBuffer"))(50);
      return {
        readRecentVPVDs: function () {
          var b = a.read();
          a.clear();
          return b;
        },
        writeRecentVPVD: function (c, e) {
          var f = d("CometRelay").readInlineData(
            h !== void 0
              ? h
              : (h = b("CometNewsFeedVPVDStore_newsFeedEdge.graphql")),
            c
          );
          if (
            !m
              .read()
              .includes((c = f.feed_backend_data) == null ? void 0 : c.vsid)
          ) {
            m.write((c = f.feed_backend_data) == null ? void 0 : c.vsid);
          }
          c = a.read().find(function (a) {
            var b;
            a = a.vsid;
            return (
              (f == null
                ? void 0
                : (b = f.feed_backend_data) == null
                ? void 0
                : b.vsid) === a
            );
          });
          if (c) return;
          a.write({
            evt: "vpv",
            fetch_tracking:
              f == null
                ? void 0
                : (c = f.feed_backend_data) == null
                ? void 0
                : c.should_recent_vpv_fetch_tracking_data,
            original_qid:
              f == null
                ? void 0
                : (c = f.feed_backend_data) == null
                ? void 0
                : c.original_qid,
            qid:
              f == null
                ? void 0
                : (c = f.feed_backend_data) == null
                ? void 0
                : c.qid,
            timestamp: e,
            vsid:
              f == null
                ? void 0
                : (c = f.feed_backend_data) == null
                ? void 0
                : c.vsid,
            vspos:
              f == null
                ? void 0
                : (e = f.feed_backend_data) == null
                ? void 0
                : e.vspos,
          });
        },
      };
    };
    var n = i.createContext(),
      o = i.createContext(c("emptyFunction"));
    function e(a) {
      var b = a.children,
        c = a.newsFeedEdge,
        d = l(n);
      a = k(
        function (a) {
          d && d.writeRecentVPVD(c, a);
        },
        [c, d]
      );
      return i.jsx(o.Provider, { value: a, children: b });
    }
    e.displayName = e.name + " [from " + f.id + "]";
    f = n.Provider;
    g.readRecentViewstateIDs = a;
    g.createStore = j;
    g.LoggerContext = o;
    g.LoggerProvider = e;
    g.StoreProvider = f;
  },
  98
);
__d(
  "UFI2UserActivityIdleTimeout",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = 3e4;
    f["default"] = a;
  },
  66
);
__d(
  "CometUserActivityMonitor",
  [
    "ErrorGuard",
    "ExecutionEnvironment",
    "SubscriptionsHandler",
    "UFI2UserActivityIdleTimeout",
    "UserActivity",
    "Visibility",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = [],
      i = !1,
      j =
        c("ExecutionEnvironment").canUseDOM &&
        c("UserActivity").isOnTab() &&
        c("UserActivity").isActive(c("UFI2UserActivityIdleTimeout"))
          ? "ACTIVE"
          : "INACTIVE",
      k = [],
      l;
    function m(a) {
      i = !0;
      k.push.apply(k, h);
      var b = function () {
        var b = k.shift();
        c("ErrorGuard").applyWithGuard(
          function () {
            return b(a);
          },
          null,
          [],
          { name: "CometUserActivityMonitor" }
        );
      };
      while (k.length) b();
      i = !1;
    }
    function n(a) {
      var b = j;
      j = a;
      b !== a && m(a);
    }
    function a() {
      return j;
    }
    d = function () {
      l == null &&
        ((l = new (c("SubscriptionsHandler"))()),
        l.addSubscriptions(
          c("UserActivity").subscribe(function (a, b) {
            a = b.event;
            if (
              /^mouse(enter|leave|move|over|out)$/.test(a.type) &&
              c("UserActivity").isOnTab() === !1
            )
              return;
            n("ACTIVE");
          }),
          (function () {
            var a = function () {
              n("INACTIVE");
            };
            window.addEventListener("blur", a, { passive: !0 });
            return {
              remove: function () {
                return window.removeEventListener(a, { passive: !0 });
              },
            };
          })(),
          c("Visibility").addListener(c("Visibility").HIDDEN, function () {
            n("INACTIVE");
          })
        ));
    };
    function b(a) {
      h.push(a);
      i && k.push(a);
      var b = !1;
      return {
        remove: function () {
          if (b) return;
          var c = h.indexOf(a);
          c !== -1 && h.splice(c, 1);
          if (i) {
            c = k.indexOf(a);
            c !== -1 && k.splice(c, 1);
          }
          b = !0;
        },
      };
    }
    c("ExecutionEnvironment").canUseDOM && d();
    g.getActivityState = a;
    g.init = d;
    g.subscribe = b;
  },
  98
);
__d(
  "CometVPVDUserActivityMonitor",
  ["CometUserActivityMonitor"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      isUserActive: function () {
        return d("CometUserActivityMonitor").getActivityState() === "ACTIVE";
      },
      subscribe: function (a) {
        var b = d("CometUserActivityMonitor").subscribe(function (b) {
          b = b === "ACTIVE";
          a && a(b);
        });
        return function () {
          b && b.remove();
        };
      },
    };
    g["default"] = a;
  },
  98
);
__d(
  "MerlinUnifiedProtocolEventFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("getFalcoLogPolicy_DO_NOT_USE")("1886750");
    b = d("FalcoLoggerInternal").create("merlin_unified_protocol_event", a);
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "FBMerlinImpressionManager",
  ["$InternalEnum", "MerlinUnifiedProtocolEventFalcoEvent", "gkx"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "fb_unknown",
      i = new Set([78]),
      j = new Map([
        [78, "fb_search"],
        [0, "fb_newsfeed"],
      ]),
      k = b("$InternalEnum").Mirrored(["Enter", "Exit", "Update"]),
      l = {};
    function a(a) {
      return (a === 0 && c("gkx")("1912400")) || m(a) ? !0 : !1;
    }
    function d(a) {
      return a === 0 && c("gkx")("2002672");
    }
    function m(a) {
      return a == null ? !1 : i.has(a);
    }
    function e(a, b, c, d, e) {
      a = { itemId: c, status: k.Enter, time: a };
      n(a, d, e);
      a = { itemId: c, status: k.Exit, time: b };
      n(a, d, e);
    }
    function n(a, b, c) {
      var d = a.itemId,
        e = l[d];
      e == null && (e = { entries: [], itemId: d });
      l[d] = q(e, a);
      o(d) && (p(d, b, c), delete l[d]);
    }
    function o(a) {
      if (l[a] == null) return !1;
      a = l[a].entries;
      if (a.length === 0) return !1;
      a = a[a.length - 1];
      return a.exit !== 0;
    }
    function p(a, b, d) {
      if (l[a] == null) return;
      var e = l[a].entries.map(function (a) {
          return { enter_ts: a.enter.toString(), exit_ts: a.exit.toString() };
        }),
        f = j.get(b);
      c("MerlinUnifiedProtocolEventFalcoEvent").log(function () {
        var b;
        return {
          element_visibility_absolute_ts: { min_visible_px: e },
          entity_id: a,
          origin: (b = f) != null ? b : h,
          payload: {
            placeholder_payload: (b = JSON.stringify(d)) != null ? b : "{}",
          },
        };
      });
    }
    function q(a, b) {
      var c = { entries: [], itemId: b.itemId };
      switch (b.status) {
        case k.Enter:
          c = r(a, b);
          break;
        case k.Exit:
          c = s(a, b);
          break;
        case k.Update:
          break;
      }
      return c;
    }
    function r(a, b) {
      b = { enter: b.time, exit: 0 };
      return babelHelpers["extends"]({}, a, { entries: a.entries.concat(b) });
    }
    function s(a, b) {
      var c = [].concat(a.entries),
        d = c[c.length - 1];
      if (d == null) return a;
      if (d.enter !== 0 && d.exit === 0) {
        d = { enter: d.enter, exit: b.time };
        c[c.length - 1] = d;
      }
      return babelHelpers["extends"]({}, a, { entries: c });
    }
    f = {
      FBMerlinImpressionStatus: k,
      FBMerlinMergeVPVData: q,
      isMerlinVPVOnlySources: m,
      logWithEnterAndExitTimestamps: e,
      merlinShouldDoubleLog: d,
      merlinShouldLog: a,
    };
    g["default"] = f;
  },
  98
);
__d(
  "isIntersectionObserverEntryVPVDVisible",
  ["intersectionObserverEntryIsIntersecting"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 200,
      i = { height: 0 };
    function a(a, b) {
      b === void 0 && (b = h);
      var d = c("intersectionObserverEntryIsIntersecting")(a);
      if (d === !1) return !1;
      d = a.boundingClientRect;
      var e = a.intersectionRect,
        f = a.rootBounds;
      d = d || i;
      e = e || i;
      f = f || i;
      return (
        e.height >= b ||
        e.height >= f.height / 2 ||
        e.height === d.height ||
        a.intersectionRatio > 0.95
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "vpvdConstants",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = 250;
    b = 200;
    f.DEFAULT_MIN_VISIBLE_TIME_MS = a;
    f.DEFAULT_MIN_VISIBLE_PX = b;
  },
  66
);
__d(
  "useVPVDImpression",
  [
    "CometVPVDUserActivityMonitor",
    "cr:921407",
    "isIntersectionObserverEntryVPVDVisible",
    "react",
    "useVisibilityObserver",
    "vpvdConstants",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback;
    function a(a) {
      var e = a.isLite,
        f = a.minVisiblePx;
      f = f === void 0 ? d("vpvdConstants").DEFAULT_MIN_VISIBLE_PX : f;
      var g = a.minVisibleTimeMs,
        i = g === void 0 ? d("vpvdConstants").DEFAULT_MIN_VISIBLE_TIME_MS : g,
        j = a.onVPVDEnd;
      g = a.onVPVDStart;
      a = b("cr:921407")();
      var k = a[0];
      a = a[1];
      var l = h(
          function (a) {
            if (a.visibleDuration < i) return;
            j(a);
          },
          [i, j]
        ),
        m = e === !0 ? 1 : f;
      f = h(
        function (a) {
          return c("isIntersectionObserverEntryVPVDVisible")(a, m);
        },
        [m]
      );
      e = e === !0 ? null : { thresholdOverride: "EXPENSIVE" };
      f = babelHelpers["extends"](
        {
          activityMonitorOverride: c("CometVPVDUserActivityMonitor"),
          isEntryInViewport: f,
        },
        e
      );
      e = c("useVisibilityObserver")({
        onHidden: l,
        onVisibilityDurationUpdated: a,
        onVisible: g,
        options: f,
      });
      return [e, k];
    }
    g["default"] = a;
  },
  98
);
__d(
  "BaseRowContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({ columns: 1, wrap: "none" });
    g["default"] = b;
  },
  98
);
__d(
  "BaseView.react",
  ["LegacyHidden", "react", "stylex", "testID"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        hidden: { display: "x1s85apg", $$css: !0 },
        root: {
          boxSizing: "x9f619",
          position: "x1n2onr6",
          zIndex: "x1ja2u2z",
          $$css: !0,
        },
      };
    function a(a, b) {
      var d = a.children,
        e = a.suppressHydrationWarning,
        f = a.testid,
        g = a.xstyle;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "children",
        "suppressHydrationWarning",
        "testid",
        "xstyle",
      ]);
      var j = a.hidden === !0;
      return h.jsx(c("LegacyHidden"), {
        htmlAttributes: babelHelpers["extends"]({}, a, c("testID")(f), {
          className: c("stylex")(i.root, g, j && i.hidden),
        }),
        mode: j ? "hidden" : "visible",
        ref: b,
        suppressHydrationWarning: e,
        children: d,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "BaseRow.react",
  ["BaseRowContext", "BaseView.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useMemo,
      j = {
        expanding: {
          flexBasis: "x1r8uery",
          flexGrow: "x1iyjqo2",
          flexShrink: "xs83m0k",
          minWidth: "xeuugli",
          $$css: !0,
        },
        row: { display: "x78zum5", flexShrink: "x2lah0s", $$css: !0 },
      },
      k = {
        center: { justifyContent: "xl56j7k", $$css: !0 },
        end: { justifyContent: "x13a6bvl", $$css: !0 },
        justify: { justifyContent: "x1qughib", $$css: !0 },
        start: { justifyContent: "x1nhvcw1", $$css: !0 },
      },
      l = {
        bottom: { alignItems: "xuk3077", $$css: !0 },
        center: { alignItems: "x6s0dn4", $$css: !0 },
        stretch: { alignItems: "x1qjc9v5", $$css: !0 },
        top: { alignItems: "x1cy8zhl", $$css: !0 },
      },
      m = {
        backward: { flexDirection: "x15zctf7", $$css: !0 },
        forward: { flexDirection: "x1q0g3np", $$css: !0 },
      },
      n = {
        backward: { flexWrap: "x8hhl5t", $$css: !0 },
        forward: { flexWrap: "x1a02dak", $$css: !0 },
        none: { flexWrap: "xozqiw3", $$css: !0 },
      },
      o = { end: "start", start: "end" };
    function a(a, b) {
      var d = a.align;
      d = d === void 0 ? "justify" : d;
      var e = a.children,
        f = a.columns,
        g = f === void 0 ? 0 : f;
      f = a.direction;
      f = f === void 0 ? "forward" : f;
      var p = a.expanding;
      p = p === void 0 ? !1 : p;
      var q = a.verticalAlign;
      q = q === void 0 ? "stretch" : q;
      var r = a.wrap,
        s = r === void 0 ? "none" : r;
      r = a.xstyle;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "align",
        "children",
        "columns",
        "direction",
        "expanding",
        "verticalAlign",
        "wrap",
        "xstyle",
      ]);
      var t = i(
        function () {
          return { columns: g, wrap: s };
        },
        [g, s]
      );
      return h.jsx(
        c("BaseView.react"),
        babelHelpers["extends"]({}, a, {
          ref: b,
          xstyle: [
            j.row,
            p && j.expanding,
            k[f === "backward" && (d === "start" || d === "end") ? o[d] : d],
            l[q],
            n[s],
            m[f],
            r,
          ],
          children: h.jsx(c("BaseRowContext").Provider, {
            value: t,
            children: e,
          }),
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
  "BaseRowItem.react",
  ["BaseRowContext", "BaseView.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useContext,
      j = {
        expanding: {
          flexBasis: "x1r8uery",
          flexGrow: "x1iyjqo2",
          flexShrink: "xs83m0k",
          $$css: !0,
        },
        expandingWithWrap: { flexBasis: "x1l7klhg", $$css: !0 },
        item: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          flexShrink: "x2lah0s",
          maxWidth: "x193iq5w",
          minWidth: "xeuugli",
          $$css: !0,
        },
        item_DEPRECATED: {
          maxWidth: "x193iq5w",
          minWidth: "xeuugli",
          $$css: !0,
        },
      },
      k = {
        1: { flexBasis: "x1l7klhg", $$css: !0 },
        2: { flexBasis: "x4pfjvb", $$css: !0 },
        3: { flexBasis: "x1upgvki", $$css: !0 },
        4: { flexBasis: "xhnlq4v", $$css: !0 },
        5: { flexBasis: "x15foiic", $$css: !0 },
        6: { flexBasis: "xd8mu38", $$css: !0 },
        7: { flexBasis: "xjtu8lc", $$css: !0 },
        8: { flexBasis: "xvuwby9", $$css: !0 },
        9: { flexBasis: "x1m2iiog", $$css: !0 },
        10: { flexBasis: "x3cfelu", $$css: !0 },
      },
      l = {
        bottom: { alignSelf: "xpvyfi4", $$css: !0 },
        center: { alignSelf: "xamitd3", $$css: !0 },
        stretch: { alignSelf: "xkh2ocl", $$css: !0 },
        top: { alignSelf: "xqcrz7y", $$css: !0 },
      };
    function a(a, b) {
      var d = a.expanding;
      d = d === void 0 ? !1 : d;
      var e = a.useDeprecatedStyles;
      e = e === void 0 ? !1 : e;
      var f = a.verticalAlign,
        g = a.xstyle;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "expanding",
        "useDeprecatedStyles",
        "verticalAlign",
        "xstyle",
      ]);
      var m = i(c("BaseRowContext")),
        n = m.columns;
      m = m.wrap;
      return h.jsx(
        c("BaseView.react"),
        babelHelpers["extends"]({}, a, {
          ref: b,
          xstyle: [
            e ? j.item_DEPRECATED : j.item,
            d && j.expanding,
            d && m !== "none" && j.expandingWithWrap,
            n > 0 && k[n],
            f != null && l[f],
            g,
          ],
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
  "CometHeadlineWithAddOn.react",
  [
    "BaseRow.react",
    "BaseRowItem.react",
    "Locale",
    "TetraText.react",
    "gkx",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        addOn: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          justifyContent: "xl56j7k",
          marginStart: "x1i64zmx",
          $$css: !0,
        },
        nonBreakingSpace: {
          visibility: "xlshs6z",
          width: "xnalus7",
          $$css: !0,
        },
        textFlexFixForIE: { flexBasis: "xdl72j9", $$css: !0 },
      },
      j = {
        ltr: { direction: "xzt5al7", $$css: !0 },
        rtl: { direction: "xzyj77d", $$css: !0 },
      },
      k = c("gkx")("1299319");
    function a(a, b) {
      var e = a.addOn,
        f = a.children,
        g = a.color,
        l = a.headlineRef,
        m = a.isPrimaryHeading,
        n = a.isSemanticHeading,
        o = a.numberOfLines,
        p = a.truncationTooltip;
      a = a.type;
      return h.jsx(c("TetraText.react"), {
        isSemanticHeading: !1,
        ref: b,
        type: a,
        children: h.jsxs(c("BaseRow.react"), {
          verticalAlign: "center",
          xstyle: j[d("Locale").isRTL() ? "rtl" : "ltr"],
          children: [
            h.jsx(c("BaseRowItem.react"), {
              expanding: !0,
              xstyle: k && i.textFlexFixForIE,
              children: h.jsx(c("TetraText.react"), {
                color: g,
                isPrimaryHeading: m,
                isSemanticHeading: n,
                numberOfLines: o,
                ref: l,
                truncationTooltip: p,
                type: a,
                children: f,
              }),
            }),
            h.jsx(c("BaseRowItem.react"), {
              verticalAlign: "top",
              xstyle: i.addOn,
              children: h.jsxs(c("BaseRow.react"), {
                verticalAlign: "center",
                children: [
                  h.jsx(c("BaseRowItem.react"), {
                    xstyle: i.nonBreakingSpace,
                    children: "\xa0",
                  }),
                  h.jsx(c("BaseRowItem.react"), {
                    children: h.jsx(c("BaseRow.react"), { children: e }),
                  }),
                ],
              }),
            }),
          ],
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "getTetraTextHierarchyStyle",
  ["memoizeWithArgs"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("memoizeWithArgs")(
      function (a, b) {
        switch (a) {
          case 1:
            return {
              bodyType: "body1",
              headlineType: "headlineEmphasized1",
              metaType: "meta1",
            };
          case 2:
            return {
              bodyType: "body2",
              headlineType: "headlineEmphasized2",
              metaType: "meta2",
            };
          case 3:
            return {
              bodyType: "body3",
              headlineType: b === !0 ? "headline3" : "headlineEmphasized3",
              metaType: "meta3",
            };
          default:
          case 4:
            return {
              bodyType: "body4",
              headlineType: b === !0 ? "headline4" : "headlineEmphasized4",
              metaType: "meta4",
            };
          case "entityHeader1":
            return {
              bodyType: "body2",
              headlineType: "entityHeaderHeadline1",
              metaType: "entityHeaderMeta1",
            };
          case "entityHeader2":
            return {
              bodyType: "body2",
              headlineType: "entityHeaderHeadline2",
              metaType: "entityHeaderMeta2",
            };
        }
      },
      function (a, b) {
        return String(a) + (b === !0 ? "" : "e");
      }
    );
    g["default"] = a;
  },
  98
);
__d(
  "TetraTextPairing.react",
  [
    "CometHeadlineWithAddOn.react",
    "TetraText.react",
    "getTetraTextHierarchyStyle",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        item: { marginBottom: "xu06os2", marginTop: "x1ok221b", $$css: !0 },
        root: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          marginBottom: "xz62fqu",
          marginTop: "x16ldp7u",
          $$css: !0,
        },
      },
      j = {
        1: { marginBottom: "x11tup63", marginTop: "x16z1lm9", $$css: !0 },
        2: { marginBottom: "x4cne27", marginTop: "xifccgj", $$css: !0 },
        entityHeader1: {
          marginBottom: "x1wsgfga",
          marginTop: "x9otpla",
          $$css: !0,
        },
        entityHeader2: {
          marginBottom: "x1wsgfga",
          marginTop: "x9otpla",
          $$css: !0,
        },
      },
      k = {
        1: { marginBottom: "xwoyzhm", marginTop: "x1rhet7l", $$css: !0 },
        2: { marginBottom: "xzueoph", marginTop: "x1k70j0n", $$css: !0 },
        entityHeader1: {
          marginBottom: "x1e56ztr",
          marginTop: "x1xmf6yo",
          $$css: !0,
        },
        entityHeader2: {
          marginBottom: "x1e56ztr",
          marginTop: "x1xmf6yo",
          $$css: !0,
        },
      };
    function a(a) {
      var b = a.body,
        d = a.bodyColor;
      d = d === void 0 ? "primary" : d;
      var e = a.bodyLineLimit,
        f = a.bodyRef,
        g = a.bodyTruncationTooltip,
        l = a.dir;
      l = l === void 0 ? "auto" : l;
      var m = a.headline,
        n = a.headlineAddOn,
        o = a.headlineColor;
      o = o === void 0 ? "primary" : o;
      var p = a.headlineLineLimit,
        q = a.headlineRef,
        r = a.headlineTruncationTooltip,
        s = a.isPrimaryHeading,
        t = a.isSemanticHeading,
        u = a.level,
        v = a.meta,
        w = a.metaColor;
      w = w === void 0 ? "secondary" : w;
      var x = a.metaLineLimit,
        y = a.metaLocation;
      y = y === void 0 ? "below" : y;
      var z = a.metaRef,
        A = a.metaTruncationTooltip,
        B = a.reduceEmphasis;
      B = B === void 0 ? !1 : B;
      var C = a.testid;
      C = a.textAlign;
      a = C === void 0 ? "start" : C;
      C = c("getTetraTextHierarchyStyle")(u, B);
      B = C.bodyType;
      var D = C.headlineType;
      C = C.metaType;
      var E = c("stylex")(i.item, k[u]);
      n =
        m != null &&
        h.jsx("div", {
          className: E,
          children:
            n != null
              ? h.jsx(c("CometHeadlineWithAddOn.react"), {
                  addOn: n,
                  color: o,
                  headlineRef: q,
                  isPrimaryHeading: s,
                  isSemanticHeading: t,
                  numberOfLines: p,
                  truncationTooltip: r,
                  type: D,
                  children: m,
                })
              : h.jsx(c("TetraText.react"), {
                  align: a,
                  color: o,
                  dir: l,
                  isPrimaryHeading: s,
                  isSemanticHeading: t,
                  numberOfLines: p,
                  ref: q,
                  truncationTooltip: r,
                  type: D,
                  children: m,
                }),
        });
      o =
        v != null &&
        h.jsx("div", {
          className: E,
          children: h.jsx(c("TetraText.react"), {
            align: a,
            color: w,
            dir: l,
            isSemanticHeading: !1,
            numberOfLines: x,
            ref: z,
            truncationTooltip: A,
            type: C,
            children: v,
          }),
        });
      return h.jsxs("div", {
        className: c("stylex")(i.root, j[u]),
        "data-testid": void 0,
        children: [
          y === "above" && o,
          n,
          b != null &&
            h.jsx("div", {
              className: E,
              children: h.jsx(c("TetraText.react"), {
                align: a,
                color: d,
                dir: l,
                isSemanticHeading: !1,
                numberOfLines: e,
                ref: f,
                truncationTooltip: g,
                type: B,
                children: b,
              }),
            }),
          y === "below" && o,
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometFeedUnitStatusListPassiveContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(null);
    g["default"] = b;
  },
  98
);
__d(
  "useNoopDebuggingInfoComponent",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = function () {};
    function a() {
      return [null, g];
    }
    f["default"] = a;
  },
  66
);
__d(
  "WebVpvDurationFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("getFalcoLogPolicy_DO_NOT_USE")("1837580");
    b = d("FalcoLoggerInternal").create("web_vpv_duration", a);
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "useCometFeedUnitGapInfo",
  ["CometFeedUnitStatusListPassiveContext", "react", "recoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useContext,
      j = b.useRef,
      k = function (a) {
        return (
          a === "SPONSORED" ||
          a === "ENGAGEMENT" ||
          a === "FIXED_POSITION" ||
          a === "PROMOTION"
        );
      };
    function a() {
      var a = j(null),
        b = i(c("CometFeedUnitStatusListPassiveContext")),
        d = h(
          function (a) {
            if (b == null) return null;
            if (a < 0) {
              c("recoverableViolation")(
                "computeGapInfoForPosition called with invalid feed position " +
                  a,
                "comet_feed"
              );
              return null;
            }
            var d = b(),
              e = d[a];
            if (e == null) {
              c("recoverableViolation")(
                "feed position " +
                  a +
                  " does not exist in getFeedUnitStatusListPassive (length:" +
                  d.length +
                  ")",
                "comet_feed"
              );
              return null;
            }
            var f = e.category;
            if (!k(f)) return null;
            e = e.minGapType;
            var g = -1,
              h = -1,
              i = -1,
              j = -1;
            for (var l = a - 1; l >= 0; l--) {
              var m,
                n = a - l;
              m = (m = d[l]) == null ? void 0 : m.category;
              switch (m) {
                case "ENGAGEMENT":
                  g = g === -1 ? n : g;
                  break;
                case "FIXED_POSITION":
                  h = h === -1 ? n : h;
                  break;
                case "PROMOTION":
                  i = i === -1 ? n : i;
                  break;
                case "SPONSORED":
                  j = j === -1 ? n : j;
                  break;
              }
              if (g !== -1 && h !== -1 && i !== -1 && j !== -1) break;
            }
            return {
              dist_to_engagement: g,
              dist_to_fixed: h,
              dist_to_promo: i,
              dist_to_sponsored: j,
              dist_to_top: a + 1,
              min_gap_type: e,
              story_category: f,
            };
          },
          [b]
        );
      return h(
        function (b) {
          var c = a.current;
          (b < 0 || c == null || c.dist_to_top !== b + 1) && (a.current = d(b));
          return a.current;
        },
        [d]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "getRouteInfoForCometProductAttributionDispatch",
  ["recoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      if (b != null)
        switch (b) {
          case "rootView":
            return a.main;
          case "hostedView":
            b = a.hosted;
            if (b) return b;
            c("recoverableViolation")(
              "Navigation was dispatched from hostedView, but no hosted route in previous state",
              "comet_infra"
            );
            break;
          case "pushView":
            b = a.pushViewStack;
            if (b && b.length > 0) {
              b = b[b.length - 1];
              b.depth;
              b.key;
              b = babelHelpers.objectWithoutPropertiesLoose(b, [
                "depth",
                "key",
              ]);
              return b;
            }
            c("recoverableViolation")(
              "Navigation was dispatched from pushView, but no push view route in previous state",
              "comet_infra"
            );
            break;
        }
      return a.main;
    }
    g["default"] = a;
  },
  98
);
__d(
  "getTopMostRouteInfo",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      var b = a.hosted,
        c = a.main;
      a = a.pushViewStack;
      if (a && a.length > 0) {
        a = a[a.length - 1];
        a.depth;
        a.key;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["depth", "key"]);
        return a;
      }
      return b ? b : c;
    }
    f["default"] = a;
  },
  66
);
__d(
  "CometProductAttribution",
  [
    "Random",
    "WebSession",
    "decodeTrackingNode",
    "getRouteInfoForCometProductAttributionDispatch",
    "getTopMostRouteInfo",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = function (a) {
        var b = a.bookmark_id,
          c = a.bookmark_type_name,
          e = a.link_context,
          f = a.tap_point;
        a = a.trace_policy;
        return {
          bookmark_id: b,
          bookmark_type_name: c,
          link_context: e,
          session: d("WebSession").getId(),
          subsession: 1,
          tap_point: f,
          timestamp: Date.now(),
          trace_policy: a,
        };
      },
      i = function (a) {
        var b = a.bookmark_id,
          c = a.link_context,
          e = a.rootName,
          f = a.tap_point,
          g = a.tracePolicy;
        a = a.trackingNodes;
        return {
          bookmark_id: b,
          class: e,
          link_context: c,
          module: g,
          scope_id: Math.floor(d("Random").random() * 1e6),
          tap_point: f,
          tracking_nodes: a,
          ts: Date.now(),
        };
      },
      j = function (a) {
        var b = a.productAttributionId;
        a = a.tracePolicy;
        if (typeof b === "string") return b;
        return typeof a === "string" ? "tp-" + a : "missing";
      },
      k = new Set([
        "create_jewel",
        "mega_menu",
        "tap_tabbar",
        "tap_search_bar",
        "tap_bookmark",
        "tap_community_panel_popover",
        "tap_community_panel_shortcuts",
        "topnav-link",
        "logo",
        "via_notification",
      ]),
      l = function (a) {
        return k.has(a);
      };
    a = function (a, b, c, d, e, f) {
      var g;
      f === void 0 && (f = !1);
      g = (g = c == null ? void 0 : c.route) != null ? g : {};
      g = g.tracePolicy;
      b =
        typeof b === "string"
          ? { tap_point: b }
          : b != null
          ? b
          : { tap_point: "unexpected" };
      var k = b.bookmark_id != null ? String(b.bookmark_id) : j(a);
      g = h({
        bookmark_id: k,
        bookmark_type_name:
          (k = b == null ? void 0 : b.bookmark_type_name) != null ? k : "",
        link_context: d,
        tap_point: b.tap_point,
        trace_policy:
          g != null ? g : (k = a.tracePolicy) != null ? k : "missing",
      });
      a.productAttributionId != null &&
        b.bookmark_id != null &&
        a.productAttributionId !== String(b.bookmark_id) &&
        (g = babelHelpers["extends"]({}, g, {
          route_bookmark_id: a.productAttributionId,
        }));
      d = [
        i({
          bookmark_id:
            b.bookmark_id != null
              ? String(b.bookmark_id)
              : a.productAttributionId,
          link_context: d,
          rootName: a.rootView.resource.getModuleId(),
          tap_point: b.tap_point,
          tracePolicy: (k = a.tracePolicy) != null ? k : "missing",
          trackingNodes: null,
        }),
      ];
      if (c != null && !l(b.tap_point))
        if (f && c.productAttribution.v2 != null) {
          a = [].concat(c.productAttribution.v2);
          a[0] = d[0];
          d = a;
        } else {
          k = c.productAttribution.v2;
          if (k != null) {
            b = k[0];
            f = k.slice(1);
            d = [].concat(
              d,
              [
                babelHelpers["extends"]({}, b, {
                  tracking_nodes: (a = e) != null ? a : null,
                }),
              ],
              f
            );
          }
          d.length > 10 && (d = [].concat(d.slice(0, 9), [d[d.length - 1]]));
        }
      return { 0: g, v2: d };
    };
    var m = function (a) {
        return a.replace(/,;/g, "_");
      },
      n = function (a) {
        return (a =
          a == null
            ? void 0
            : (a = a.v2) == null
            ? void 0
            : a
                .map(function (a) {
                  var b;
                  return [
                    a["class"],
                    a.module,
                    a.tap_point,
                    a.ts.toString(),
                    a.scope_id.toString(),
                    (b = a.bookmark_id) != null ? b : "",
                    ((b = a.tracking_nodes) != null ? b : [])
                      .reduce(function (a, b) {
                        b = c("decodeTrackingNode")(b);
                        return b.length === 1 ? a : a.concat(b[1][0]);
                      }, [])
                      .join("#"),
                  ]
                    .map(m)
                    .join();
                })
                .join(";")) != null
          ? a
          : "";
      };
    b = function (a) {
      return a != null
        ? n(
            (a = c("getTopMostRouteInfo")(a())) == null
              ? void 0
              : a.productAttribution
          )
        : null;
    };
    e = function (a, b) {
      if (a == null) return null;
      a =
        (a = c("getTopMostRouteInfo")(a())) == null
          ? void 0
          : a.productAttribution.v2;
      if (a == null) return null;
      a.length !== 0 && (a[0].tracking_nodes = b);
      return n({ v2: a });
    };
    g.getProductAttributionEntry = h;
    g.getProductAttributionEntryV2 = i;
    g.getProductAttributionIdFromRoute = j;
    g.isSpecialTapPoint = l;
    g.getProductAttributionFromRoute = a;
    g.filterEntryValue = m;
    g.minifyProductAttributionV2 = n;
    g.getMinifiedTopMostRouteProductAttribution = b;
    g.minifiedNavigationChainWithTrackingNodes = e;
    g.getRouteInfoForDispatch = c(
      "getRouteInfoForCometProductAttributionDispatch"
    );
  },
  98
);
__d(
  "CometRouteProductAttributionContext",
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
  "useRouteProductAttribution",
  ["CometRouteProductAttributionContext", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useContext;
    function a() {
      return h(c("CometRouteProductAttributionContext"));
    }
    g["default"] = a;
  },
  98
);
__d(
  "useMinifiedProductAttribution",
  ["CometProductAttribution", "useRouteProductAttribution"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      var a = c("useRouteProductAttribution")();
      return a != null
        ? d("CometProductAttribution").minifyProductAttributionV2(a)
        : null;
    }
    g["default"] = a;
  },
  98
);
__d(
  "useStoryVPVDLogger",
  [
    "CometInteractionSourceContext",
    "CometNewsFeedVPVDStore",
    "FBMerlinImpressionManager",
    "Random",
    "WebSession",
    "WebVpvDurationFalcoEvent",
    "gkx",
    "react",
    "requireDeferred",
    "useCometFeedUnitGapInfo",
    "useCurrentRoute",
    "useMinifiedProductAttribution",
    "useVPVDImpression",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useContext,
      j = b.useRef,
      k = c("requireDeferred")("ODS").__setRef("useStoryVPVDLogger"),
      l = function (a, b) {
        var c;
        return babelHelpers["extends"](
          {
            csp: a.position,
            is_agg: a.isAggregated,
            is_self: a.isSelfPost,
            logged_before: a.loggedBefore,
            nav_attribution_id_v2: a.aidv2,
            sid_raw: d("WebSession").getId(),
            source: a.source,
            source_override: a.source_override,
            story_height: a.story_height,
            story_width: a.story_width,
            vpvd_start_timestamp_ms: a.visibleTime,
            vpvd_time_delta_ms:
              a.hiddenTime - ((c = a.visibleTime) != null ? c : 0),
            xt: a.encrypted_tracking,
          },
          b
        );
      },
      m = 1e3;
    function a(a) {
      var b = a.interactionSourceOverride,
        e = a.isAggregated,
        f = e === void 0 ? null : e;
      e = a.isSelfPost;
      var g = e === void 0 ? null : e,
        n = a.position,
        o = a.trackable,
        p = i(c("CometInteractionSourceContext")),
        q = c("useCometFeedUnitGapInfo")();
      e = c("useCurrentRoute")() || {};
      var r = e.tracePolicy,
        s = c("useMinifiedProductAttribution")() || "",
        t = i(d("CometNewsFeedVPVDStore").LoggerContext),
        u = j(null),
        v = j(null),
        w = j(!1);
      a = h(
        function (a) {
          var b = a.entry;
          a = a.visibleTime;
          t(a);
          u.current =
            (a =
              b == null
                ? void 0
                : (a = b.boundingClientRect) == null
                ? void 0
                : a.height) != null
              ? a
              : null;
          v.current =
            (b =
              b == null
                ? void 0
                : (a = b.boundingClientRect) == null
                ? void 0
                : a.width) != null
              ? b
              : null;
        },
        [t]
      );
      e = h(
        function (a) {
          var e,
            h,
            i = a.hiddenTime;
          a = a.visibleTime;
          var j = (e = b) != null ? e : p;
          if (
            !c("FBMerlinImpressionManager").isMerlinVPVOnlySources(j) &&
            j === 10
          ) {
            d("Random").coinflip(m) &&
              k.onReady(function (a) {
                a.bumpEntityKey(
                  3372,
                  "comet.unknown_vpvd_tracepolicy",
                  ((a = r) != null ? a : "empty") + "_" + j,
                  m
                );
              });
            return;
          }
          e = u.current != null ? Math.round(u.current) : null;
          var t = v.current != null ? Math.round(v.current) : null,
            x = q(n),
            y = l(
              {
                aidv2: s,
                encrypted_tracking: (h = o) != null ? h : "",
                hiddenTime: i,
                isAggregated: f,
                isSelfPost: g,
                loggedBefore: w.current,
                position: n,
                source: p,
                source_override: b,
                story_height: e,
                story_width: t,
                visibleTime: a,
              },
              x
            );
          w.current = !0;
          h = c("FBMerlinImpressionManager").merlinShouldLog(j);
          e = c("FBMerlinImpressionManager").isMerlinVPVOnlySources(j);
          t = !h && !e;
          if (h) {
            c("FBMerlinImpressionManager").logWithEnterAndExitTimestamps(
              a,
              i,
              (x = o) != null ? x : "",
              j,
              y
            );
          }
          t &&
            c("WebVpvDurationFalcoEvent").log(function () {
              return { json_data: JSON.stringify(y) };
            });
        },
        [b, p, q, n, s, o, f, g, r]
      );
      return c("useVPVDImpression")({ onVPVDEnd: e, onVPVDStart: a });
    }
    g["default"] = a;
  },
  98
);
__d(
  "formatDurationSeconds",
  ["fbt", "padNumber"],
  function (a, b, c, d, e, f, g, h) {
    function a(a) {
      var b = Math.floor(a / 3600),
        d = Math.floor((a / 60) % 60);
      a = Math.floor(a % 60);
      if (b)
        return h._("{hours}\u00a0: {minutes}\u00a0: {seconds}", [
          h._param("hours", b),
          h._param("minutes", c("padNumber")(d, 2)),
          h._param("seconds", c("padNumber")(a, 2)),
        ]);
      else
        return h._("{minutes}\u00a0:{seconds}", [
          h._param("minutes", d),
          h._param("seconds", c("padNumber")(a, 2)),
        ]);
    }
    g["default"] = a;
  },
  98
);
__d(
  "PluginFollow",
  ["Arbiter", "CSS"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = function (a, b) {
      (this.$1 = a),
        (this.$2 = b),
        c("Arbiter").subscribe("embeddedFollowSuccess", function (c, e) {
          d("CSS").addClass(a, "hidden_elem"),
            d("CSS").removeClass(b, "hidden_elem");
        }),
        c("Arbiter").subscribe("embeddedUnfollowSuccess", function (c, e) {
          d("CSS").removeClass(a, "hidden_elem"),
            d("CSS").addClass(b, "hidden_elem");
        });
    };
    g["default"] = a;
  },
  98
);
__d(
  "VideoHomeDurationThumbnailOverlay.react",
  [
    "cx",
    "fbt",
    "ix",
    "FlexLayout.react",
    "Image.react",
    "RelayModern",
    "VideoBroadcastStatus",
    "VideoHomeDurationThumbnailOverlay_video.graphql",
    "VideoStateDirectory",
    "XUIText.react",
    "formatDurationSeconds",
    "joinClasses",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i, j) {
    var k,
      l = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b) {
        var d;
        d = a.call(this, b) || this;
        d.$1 = function (a) {
          a.watched !== void 0 && d.setState({ watched: a.watched });
        };
        b = d.props.video;
        var e = b && !!b.has_viewer_watched_show_video;
        d.state = { watched: e };
        b &&
          b.id &&
          (d.subscription = c("VideoStateDirectory").addListener(b.id, d.$1));
        return d;
      }
      var d = b.prototype;
      d.render = function () {
        var a = this.props,
          b = a.disableShowWatched;
        a = a.video;
        if (!a) return null;
        if (a.broadcast_status === c("VideoBroadcastStatus").LIVE) return null;
        var d = a.playable_duration || 0,
          e = this.state.watched;
        if (d === 0 && !e) return null;
        !b && e ? (b = i._("VUE")) : (b = c("formatDurationSeconds")(d));
        e = null;
        a.is_spherical &&
          (e = l.jsx(c("Image.react"), {
            className: "__lq",
            src: j("501720"),
          }));
        return l.jsx(c("XUIText.react"), {
          className: c("joinClasses")(this.props.className, "_2dig"),
          weight: "bold",
          style: { fontSize: this.props.fontSize + "px" },
          children: l.jsxs(c("FlexLayout.react"), {
            align: "center",
            children: [e, b],
          }),
        });
      };
      return b;
    })(l.PureComponent);
    a.defaultProps = { fontSize: 12 };
    e = d("RelayModern").createFragmentContainer(a, {
      video:
        k !== void 0
          ? k
          : (k = b("VideoHomeDurationThumbnailOverlay_video.graphql")),
    });
    g["default"] = e;
  },
  98
);
__d(
  "VideoHomePlayButtonThumbnailOverlay.react",
  ["cx", "ix", "Image.react", "joinClasses", "react"],
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
        var a;
        switch (this.props.size) {
          case "24":
            a = i("354763");
            break;
          case "48":
            a = i("101640");
            break;
          case "72":
            a = i("352839");
            break;
        }
        return j.jsx("div", {
          className: c("joinClasses")(this.props.className, "_604-"),
          children: j.jsx(c("Image.react"), { src: a, width: this.props.size }),
        });
      };
      return b;
    })(j.Component);
    g["default"] = a;
  },
  98
);
__d(
  "VideoHomeFollowMutationLogger",
  ["VideoHomeTypedLogger"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      var b = a.event,
        d = a.target,
        e = a.id;
      a = a.playerOrigin;
      a = a === void 0 ? "video_home" : a;
      new (c("VideoHomeTypedLogger"))()
        .setEvent(b)
        .setEventTarget(d)
        .setEventTargetID(e)
        .setPlayerOrigin(a)
        .log();
    }
    function a(a, b) {
      a.addEventListener("click", function () {
        h(b);
      });
    }
    g.logClick = h;
    g.init = a;
  },
  98
);
__d(
  "VideoCopyLink.react",
  [
    "cx",
    "fbt",
    "ix",
    "CenteredContainer.react",
    "Clipboard",
    "Image.react",
    "VideoActionLink.react",
    "clearTimeout",
    "react",
    "setTimeout",
  ],
  function (a, b, c, d, e, f, g, h, i, j) {
    "use strict";
    var k = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, e;
        for (var f = arguments.length, g = new Array(f), h = 0; h < f; h++)
          g[h] = arguments[h];
        return (
          ((b = e = a.call.apply(a, [this].concat(g)) || this),
          (e.state = { linkCopied: !1 }),
          (e.$2 = function () {
            var a = d("Clipboard").copy(e.props.link);
            a &&
              (e.props.onCopy && e.props.onCopy(),
              e.setState({ linkCopied: !0 }),
              (e.$1 = c("setTimeout")(function () {
                e.setState({ linkCopied: !1 });
              }, 3e3)));
          }),
          b) || babelHelpers.assertThisInitialized(e)
        );
      }
      var e = b.prototype;
      e.componentWillUnmount = function () {
        c("clearTimeout")(this.$1);
      };
      e.render = function () {
        return this.state.linkCopied
          ? k.jsxs("div", {
              className: "_2pi9",
              children: [
                k.jsxs("div", {
                  className: "_2a_3",
                  children: [
                    k.jsx("div", { className: "_8k8f" }),
                    k.jsx("div", {
                      className: "_2a_c",
                      children: k.jsx(c("Image.react"), {
                        src: j("512848"),
                        size: "24",
                      }),
                    }),
                  ],
                }),
                k.jsx("div", {
                  className: "_63kv",
                  children: k.jsx(c("CenteredContainer.react"), {
                    horizontal: !1,
                    fullHeight: !0,
                    vertical: !0,
                    children: i._("Lien copi\u00e9"),
                  }),
                }),
              ],
            })
          : k.jsx(c("VideoActionLink.react"), {
              imageSrc: j("533521"),
              onClick: this.$2,
              text: i._("Copier lien"),
            });
      };
      return b;
    })(k.PureComponent);
    g["default"] = a;
  },
  98
);
__d(
  "XGamesVideoHomeController",
  ["XController"],
  function (a, b, c, d, e, f) {
    e.exports = b("XController").create("/gaming/{?vanity}/", {
      video_id: { type: "String" },
      vanity: { type: "String" },
      view: { type: "Enum", enumType: 1 },
      game_id: { type: "FBID" },
      section_id: { type: "String" },
      previous_view: { type: "Enum", enumType: 1 },
      sub_view: { type: "Enum", enumType: 1 },
      external_ref: { type: "Enum", defaultValue: "unknown", enumType: 1 },
      hc_ref: { type: "String" },
      streamer_vanity: { type: "String" },
      follow: { type: "Bool", defaultValue: !1 },
      go_live: { type: "Bool", defaultValue: !1 },
      ref: { type: "Enum", enumType: 1 },
      s: { type: "Enum", enumType: 1 },
      language: { type: "String" },
      q: { type: "String" },
      open_app: { type: "Bool", defaultValue: !1 },
    });
  },
  null
);
__d(
  "XVideoHomeFeedController",
  ["XController"],
  function (a, b, c, d, e, f) {
    e.exports = b("XController").create("/watch/", {
      extid: { type: "String" },
      mibextid: { type: "String" },
      comment_id: { type: "FBID" },
      cursor: { type: "String" },
      ref: { type: "String" },
      t: { type: "Int" },
      v: { type: "String" },
      external_log_id: { type: "String" },
      q: { type: "String" },
      __ft__: { type: "String" },
      page_id: { type: "FBID" },
      is_arltw: { type: "Bool", defaultValue: !1 },
      comments_modal: { type: "Bool", defaultValue: !1 },
    });
  },
  null
);
__d(
  "VideoSuggestionOverlayUtil",
  ["fbt", "XGamesVideoHomeController", "XVideoHomeFeedController"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = function (a, b) {
      if (a === !0 && b === !0)
        return h._("Plus de vid\u00e9os sur Facebook Gaming");
      return b === !0
        ? h._("Plus dans Vid\u00e9o")
        : h._("Plus de vid\u00e9os dans Vid\u00e9o");
    };
    b = function (a, b) {
      if (a === !0 && b === !0)
        return c("XGamesVideoHomeController").getURIBuilder().getURI();
      a = c("XVideoHomeFeedController").getURIBuilder();
      b === !0 && (a = a.setString("ref", "external"));
      return a.getURI();
    };
    g.getHeadline = a;
    g.getHeaderURI = b;
  },
  98
);
__d(
  "VideoHomeInlineEndScreenContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({ isEmbedded: !1, isGaming: !1 });
    c = b;
    g["default"] = c;
  },
  98
);
__d(
  "XVideoHomeShowController",
  ["XController"],
  function (a, b, c, d, e, f) {
    e.exports = b("XController").create("/watch/{?section_id}/", {
      from: { type: "String" },
      section_id: { type: "String" },
      query: { type: "String" },
      video_id: { type: "String" },
      upstream_player_source: { type: "Enum", enumType: 1 },
      start_timestamp_s: { type: "Int" },
      autoplay_expanded: { type: "Bool", defaultValue: !1 },
      __nodl: { type: "Exists", defaultValue: !1 },
      qr: { type: "String" },
      qr_code_id: { type: "FBID" },
      scan_session_id: { type: "String" },
      ref: { type: "String" },
      mt_nav: { type: "Bool", defaultValue: !1 },
      referrer: { type: "String" },
      msite_tab_async: { type: "Bool", defaultValue: !1 },
      _sref_: { type: "Int" },
      _vref_: { type: "Int" },
    });
  },
  null
);
__d(
  "VideoHomeInlineEndScreenRowItem.react",
  [
    "cx",
    "CssBackgroundImage.react",
    "LineClamp.react",
    "Link.react",
    "RelayHooks",
    "VideoHomeDurationThumbnailOverlay.react",
    "VideoHomeInlineEndScreenContext",
    "VideoHomeInlineEndScreenRowItem_story.graphql",
    "VideoHomeInlineEndScreenRowItem_video.graphql",
    "VideoHomePlayButtonThumbnailOverlay.react",
    "VideoHomeTypedLiteLogger",
    "XVideoHomeFeedController",
    "XVideoHomeShowController",
    "joinClasses",
    "react",
    "stylex",
    "useStoryVPVDLogger",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j,
      k = d("react");
    e = d("react");
    var l = e.useCallback,
      m = e.useContext,
      n = e.useState,
      o = {
        duration: {
          pointerEvents: "x47corl",
          position: "x10l6tqk",
          bottom: "xbfrwjf",
          end: "xlr8s2x",
          $$css: !0,
        },
        image: {
          backgroundRepeat: "xiy17q3",
          backgroundSize: "x18d0r48",
          bottom: "x1ey2m1c",
          end: "xds687c",
          position: "x10l6tqk",
          start: "x17qophe",
          top: "x13vifvy",
          $$css: !0,
        },
        link: { color: "xg32yw2", $$css: !0 },
        root: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          flexGrow: "x1iyjqo2",
          flexShrink: "xs83m0k",
          flexBasis: "x1r8uery",
          position: "x1n2onr6",
          $$css: !0,
        },
        ownerName: {
          fontSize: "x6prxxf",
          fontWeight: "x1iikomf",
          marginTop: "xr9ek0c",
          $$css: !0,
        },
        embeddedOwnerName: {
          fontSize: "x1pg5gke",
          fontWeight: "xo1l8bm",
          marginTop: "xr9ek0c",
          $$css: !0,
        },
        playButton: { transition: "xl48mfz", $$css: !0 },
        playButtonHidden: { opacity: "xg01cxk", $$css: !0 },
        sideMargins: {
          marginStart: "x182zwpg",
          marginEnd: "x11jkl0l",
          $$css: !0,
        },
        title: { fontSize: "x6prxxf", fontWeight: "x1s688f", $$css: !0 },
        embeddedTitle: {
          fontSize: "x1pg5gke",
          fontWeight: "x1s688f",
          $$css: !0,
        },
        video: {
          cursor: "x1ypdohk",
          paddingBottom: "x10avn17",
          position: "x1n2onr6",
          $$css: !0,
        },
        videoContainer: {
          marginTop: "x1xmf6yo",
          marginEnd: "x11i5rnm",
          marginBottom: "x1e56ztr",
          marginStart: "x1mh8g0r",
          $$css: !0,
        },
      };
    function a(a) {
      var e = a.position,
        f = a.story;
      a = a.video;
      f = d("RelayHooks").useFragment(
        i !== void 0
          ? i
          : (i = b("VideoHomeInlineEndScreenRowItem_story.graphql")),
        f
      );
      f = f.encrypted_tracking;
      var g = c("useStoryVPVDLogger")({
          trackable: f,
          position: e,
          interactionSourceOverride: 54,
        }),
        h = g[0];
      g = g[1];
      return k.jsx("div", {
        className: c("stylex")(o.root, e === 1 && o.sideMargins),
        ref: h,
        children: k.jsx(p, {
          tracking: f,
          video: a,
          vpvdDebuggingInfoComponent: g,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function p(a) {
      var e,
        f,
        g = a.tracking,
        h = a.vpvdDebuggingInfoComponent;
      a = a.video;
      var i = n(!1),
        p = i[0],
        q = i[1];
      i = l(function () {
        q(!0);
      }, []);
      var r = l(function () {
          q(!1);
        }, []),
        s = d("RelayHooks").useFragment(
          j !== void 0
            ? j
            : (j = b("VideoHomeInlineEndScreenRowItem_video.graphql")),
          a
        );
      a = m(c("VideoHomeInlineEndScreenContext"));
      var t = a.isEmbedded;
      a = (a = s.image) == null ? void 0 : a.uri;
      if (a == null) return null;
      var u = s.title_with_fallback;
      e = (e = s.owner) == null ? void 0 : e.name;
      f = (f = s.owner) == null ? void 0 : f.uri_token;
      var v = c("XVideoHomeFeedController")
        .getURIBuilder()
        .setString("v", s.id);
      v.setString("__ft__", g);
      t === !0 && (v = v.setString("ref", "external"));
      g = v.getURI();
      v = function () {
        c("VideoHomeTypedLiteLogger").log({
          click_point: t === !0 ? "embedded_end_screen" : "inline_end_screen",
          event: "click",
          event_target: "video",
          event_target_id: s.id,
        });
      };
      var w = function () {
          var a;
          c("VideoHomeTypedLiteLogger").log({
            click_point: t === !0 ? "embedded_end_screen" : "inline_end_screen",
            event: "click",
            event_target: "page",
            event_target_id: (a = s.owner) == null ? void 0 : a.id,
          });
        },
        x = t === !0 ? "_blank" : null;
      return k.jsxs(k.Fragment, {
        children: [
          h,
          k.jsx(c("Link.react"), {
            className: c("joinClasses")(
              "x1xmf6yo x11i5rnm x1e56ztr x1mh8g0r",
              "_92bg"
            ),
            href: g,
            onClick: v,
            target: x,
            children: k.jsxs("div", {
              className: "x1ypdohk x10avn17 x1n2onr6",
              onMouseEnter: i,
              onMouseLeave: r,
              children: [
                k.jsx(c("CssBackgroundImage.react"), {
                  backgroundPosition: "center",
                  className:
                    "xiy17q3 x18d0r48 x1ey2m1c xds687c x10l6tqk x17qophe x13vifvy",
                  imageURI: a,
                }),
                k.jsx(c("VideoHomeDurationThumbnailOverlay.react"), {
                  className: "x47corl x10l6tqk xbfrwjf xlr8s2x",
                  video: s,
                }),
                k.jsx(c("VideoHomePlayButtonThumbnailOverlay.react"), {
                  className: c("stylex")(
                    o.playButton,
                    !p && o.playButtonHidden
                  ),
                  size: "48",
                }),
              ],
            }),
          }),
          k.jsx(c("Link.react"), {
            className: c("stylex")(
              o.link,
              t !== !0 && o.title,
              t === !0 && o.embeddedTitle
            ),
            href: g,
            onClick: v,
            target: x,
            children: k.jsx(c("LineClamp.react"), {
              fitHeightToShorterText: !0,
              lineHeight: 17,
              lines: 2,
              children: u,
            }),
          }),
          k.jsx(c("Link.react"), {
            className: c("stylex")(
              o.link,
              t !== !0 && o.ownerName,
              t === !0 && o.embeddedOwnerName
            ),
            href: c("XVideoHomeShowController")
              .getURIBuilder()
              .setString("section_id", f)
              .getURI(),
            onClick: w,
            target: x,
            children: k.jsx(c("LineClamp.react"), {
              fitHeightToShorterText: !0,
              lineHeight: 17,
              lines: 1,
              children: e,
            }),
          }),
        ],
      });
    }
    p.displayName = p.name + " [from " + f.id + "]";
    h = a;
    g["default"] = h;
  },
  98
);
__d(
  "VideoHomeInlineEndScreenRow.react",
  [
    "Link.react",
    "RelayHooks",
    "TetraTextPairing.react",
    "VideoHomeInlineEndScreenContext",
    "VideoHomeInlineEndScreenRowItem.react",
    "VideoHomeInlineEndScreenRow_video.graphql",
    "VideoHomeTypedLiteLogger",
    "VideoSuggestionOverlayUtil",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = d("react").useContext,
      k = {
        link: {
          marginEnd: "xkrivgy",
          ":hover_color": "x10n970z",
          ":hover_textDecoration": "xt0b8zv",
          $$css: !0,
        },
        root: {
          borderBottom: "x1m51msh",
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          flexGrow: "x1iyjqo2",
          justifyContent: "xl56j7k",
          $$css: !0,
        },
        row: {
          display: "x78zum5",
          justifyContent: "x1qughib",
          marginTop: "x1gslohp",
          $$css: !0,
        },
        spacer: { flex: "x12lumcd", $$css: !0 },
        spacerMargins: {
          marginEnd: "x11jkl0l",
          marginStart: "x182zwpg",
          $$css: !0,
        },
      };
    function a(a, e) {
      a.caller;
      a = a.video;
      a = d("RelayHooks").useFragment(
        h !== void 0 ? h : (h = b("VideoHomeInlineEndScreenRow_video.graphql")),
        a
      );
      var f = j(c("VideoHomeInlineEndScreenContext")),
        g = f.isEmbedded;
      f = f.isGaming;
      a =
        (a =
          (a = a.video_channel) == null
            ? void 0
            : (a = a.video_channel_feed) == null
            ? void 0
            : a.edges) != null
          ? a
          : [];
      if (a.length === 0) return null;
      a = a.map(function (a, b) {
        var d;
        d =
          (d = (d = a.node) == null ? void 0 : d.attached_story) != null
            ? d
            : a.node;
        d =
          d == null
            ? void 0
            : (d = d.attachments) == null
            ? void 0
            : (d = d[0]) == null
            ? void 0
            : d.media;
        return a.node == null || d == null || d.__typename !== "Video"
          ? null
          : i.jsx(
              c("VideoHomeInlineEndScreenRowItem.react"),
              { position: b, video: d, story: a.node },
              d.id
            );
      });
      if (a.length === 0) return null;
      var l = a.length;
      a.push(
        Array(3 - l)
          .fill(0)
          .map(function (a, b) {
            return i.jsx(
              "div",
              {
                className: c("stylex")(
                  k.spacer,
                  l === 1 && b === 0 && k.spacerMargins
                ),
              },
              b
            );
          })
      );
      var m = function () {
          c("VideoHomeTypedLiteLogger").log({
            click_point: g === !0 ? "embedded_end_screen" : "inline_end_screen",
            event: "click",
            event_target: "watch",
          });
        },
        n = g === !0 ? "_blank" : null,
        o = d("VideoSuggestionOverlayUtil").getHeadline(f, g);
      return i.jsxs("div", {
        className: "x1m51msh x78zum5 xdt5ytf x1iyjqo2 xl56j7k",
        ref: e,
        children: [
          i.jsx(c("Link.react"), {
            className: "xkrivgy x10n970z xt0b8zv",
            href: d("VideoSuggestionOverlayUtil").getHeaderURI(f, g),
            onClick: m,
            target: n,
            children:
              o != null &&
              i.jsx(c("TetraTextPairing.react"), {
                headline: o,
                headlineColor: "white",
                level: 3,
              }),
          }),
          i.jsx("div", { className: "x78zum5 x1qughib x1gslohp", children: a }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = i.forwardRef(a);
    g["default"] = e;
  },
  98
);
__d(
  "VideoHomeInlineEndScreenImpl.react",
  [
    "RelayFBEnvironment",
    "RelayHooks",
    "VideoCopyLink.react",
    "VideoHomeInlineEndScreenContext",
    "VideoHomeInlineEndScreenImplQuery.graphql",
    "VideoHomeInlineEndScreenRow.react",
    "VideoReshareLink.react",
    "VideoWatchAgainLink.react",
    "XUISpinner.react",
    "react",
    "requireDeferred",
    "stylex",
    "useImpressionLogger",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    e = d("react");
    var j = e.useCallback,
      k = e.useContext,
      l = e.useRef,
      m = c("requireDeferred")("VideoHomeTypedLiteLogger").__setRef(
        "VideoHomeInlineEndScreenImpl.react"
      ),
      n = {
        actionsRow: {
          display: "x78zum5",
          paddingTop: "xyamay9",
          paddingEnd: "x4uap5",
          paddingBottom: "xwib8y2",
          paddingStart: "xkhd6sd",
          textAlign: "x2b8uid",
          $$css: !0,
        },
        actionItem: { flexGrow: "x1iyjqo2", $$css: !0 },
        loading: {
          alignItems: "x6s0dn4",
          display: "x78zum5",
          flexGrow: "x1iyjqo2",
          justifyContent: "xl56j7k",
          $$css: !0,
        },
        showCometOnBlueEndscreenActionRow: {
          display: "x78zum5",
          alignItems: "x6s0dn4",
          $$css: !0,
        },
      };
    function a(a) {
      var b = a.caller,
        e = a.shareURI,
        f = a.videoChannelEntryPoint,
        g = a.videoChannelID,
        h = a.videoURI,
        j = a.visible,
        k = a.vpc;
      a = a.showCometOnBlueEndscreenActionRow;
      a = a === void 0 ? !1 : a;
      return !j
        ? null
        : i.jsx(i.Suspense, {
            fallback: i.jsx("div", {
              className: "x6s0dn4 x78zum5 x1iyjqo2 xl56j7k",
              children: i.jsx(c("XUISpinner.react"), { size: "large" }),
            }),
            children: i.jsx(d("RelayHooks").RelayEnvironmentProvider, {
              environment: c("RelayFBEnvironment"),
              children: i.jsx(o, {
                visible: j,
                caller: b,
                shareURI: e,
                videoChannelEntryPoint: f,
                videoChannelID: g,
                vpc: k,
                videoURI: h,
                showCometOnBlueEndscreenActionRow: a,
              }),
            }),
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function o(a) {
      var e = a.caller,
        f = a.shareURI,
        g = a.videoChannelEntryPoint,
        o = a.videoChannelID,
        p = a.vpc,
        q = a.videoURI;
      a = a.showCometOnBlueEndscreenActionRow;
      a = a === void 0 ? !1 : a;
      var r = k(c("VideoHomeInlineEndScreenContext")),
        s = r.isEmbedded,
        t = l(!1);
      r = j(
        function () {
          if (t.current) return;
          m.onReady(function (a) {
            a.log({
              click_point: "embedded_end_screen",
              event: "click",
              event_target: "copy_link",
            }),
              (t.current = !0);
          });
        },
        [t]
      );
      var u = p.getVideoID(),
        v = l(!1);
      o = d("RelayHooks").useLazyLoadQuery(
        h !== void 0 ? h : (h = b("VideoHomeInlineEndScreenImplQuery.graphql")),
        { caller: e, entry_channel_id: o, entry_point: g, id: u }
      );
      g = j(
        function (a) {
          if (v.current) return;
          a.log({
            event:
              s === !0
                ? "embedded_end_screen_impression"
                : "inline_end_screen_impression",
            event_target: "video",
            event_target_id: u,
          });
          v.current = !0;
        },
        [s, u]
      );
      g = c("useImpressionLogger")(m, g);
      o = o.video;
      g =
        o != null
          ? i.jsx(c("VideoHomeInlineEndScreenRow.react"), {
              ref: g,
              video: o,
              caller: e,
            })
          : null;
      o =
        s === !0
          ? null
          : i.jsxs("div", {
              className: c("stylex")(
                !a && n.actionsRow,
                a && n.showCometOnBlueEndscreenActionRow
              ),
              children: [
                f != null
                  ? i.jsx("div", {
                      className: "x1iyjqo2",
                      children: i.jsx(c("VideoReshareLink.react"), {
                        shareURI: f,
                      }),
                    })
                  : q != null
                  ? i.jsx("div", {
                      className: "x1iyjqo2",
                      children: i.jsx(c("VideoCopyLink.react"), {
                        link: q,
                        onCopy: r,
                      }),
                    })
                  : null,
                a &&
                  i.jsx("div", {
                    className: "x1iyjqo2",
                    children: i.jsx(c("VideoWatchAgainLink.react"), { vpc: p }),
                  }),
              ],
            });
      return i.jsxs(i.Fragment, { children: [g, o] });
    }
    g["default"] = a;
  },
  98
);
__d(
  "VideoHomeInlineEndScreen.react",
  [
    "SubscriptionsHandler",
    "VideoHomeInlineEndScreenContext",
    "VideoHomeInlineEndScreenImpl.react",
    "VideoHomeTypedLiteLogger",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useEffect,
      j = b.useState,
      k = 0.8,
      l = 0,
      m = {
        hidden: { display: "x1s85apg", $$css: !0 },
        root: {
          boxSizing: "x9f619",
          color: "xg32yw2",
          flexDirection: "xdt5ytf",
          height: "x5yr21d",
          justifyContent: "xl56j7k",
          paddingTop: "xz9dl7a",
          paddingEnd: "xn6708d",
          paddingBottom: "xsag5q8",
          paddingStart: "x1ye3gou",
          pointerEvents: "x67bb7w",
          width: "xh8yej3",
          $$css: !0,
        },
        background: { backgroundColor: "xzglsdp", $$css: !0 },
        visible: { display: "x78zum5", $$css: !0 },
      };
    function a(a) {
      var b = a.caller,
        d = a.isEmbedded,
        e = a.isGaming;
      e = e === void 0 ? !1 : e;
      var f = a.shareURI,
        g = a.videoChannelEntryPoint,
        n = a.videoChannelID,
        o = a.videoURI,
        p = a.vpc;
      a = a.showCometOnBlueEndscreenActionRow;
      a = a === void 0 ? !1 : a;
      var q = j(p.getSource() === "tahoe"),
        r = q[0],
        s = q[1];
      q = j("");
      var t = q[0],
        u = q[1];
      q = j(!1);
      var v = q[0],
        w = q[1];
      q = j(!1);
      var x = q[0],
        y = q[1];
      i(function () {
        var a = new (c("SubscriptionsHandler"))();
        a.addSubscriptions(
          p.addListener("stateChange", function () {
            u(p.getState());
          })
        );
        d !== !0 &&
          (a.addSubscriptions(
            p.addListener("TahoeController/exitTahoe", function () {
              s(!1);
            })
          ),
          a.addSubscriptions(
            p.addListener("TahoeController/enterTahoe", function () {
              s(!0);
            })
          ));
        a.addSubscriptions(
          p.addListener("updateStatus", function (a) {
            var b = p.getPlaybackDuration();
            if (b === 0) return;
            b = Math.min(b * k, b - l);
            a.position > b &&
              (w(!0),
              x ||
                (c("VideoHomeTypedLiteLogger").log({
                  event: "video_end_card_fetch",
                }),
                y(!0)));
          })
        );
        return function () {
          a.release();
        };
      });
      return r || t === "destroyed"
        ? null
        : h.jsx(c("VideoHomeInlineEndScreenContext").Provider, {
            value: { isEmbedded: d, isGaming: e },
            children: h.jsx("div", {
              className: c("stylex")(
                d !== !0 && m.background,
                t !== "finished" && m.hidden,
                m.root,
                t === "finished" && m.visible
              ),
              children: h.jsx(c("VideoHomeInlineEndScreenImpl.react"), {
                caller: b,
                shareURI: f,
                videoChannelEntryPoint: g,
                videoChannelID: n,
                videoURI: o,
                visible: v,
                vpc: p,
                showCometOnBlueEndscreenActionRow: a,
              }),
            }),
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoHomeInlinePauseScreenContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({ isEmbedded: !1, isGaming: !1 });
    c = b;
    g["default"] = c;
  },
  98
);
__d(
  "VideoHomeInlinePauseScreenRowItem.react",
  [
    "cx",
    "fbt",
    "CssBackgroundImage.react",
    "LineClamp.react",
    "Link.react",
    "RelayHooks",
    "VideoHomeDurationThumbnailOverlay.react",
    "VideoHomeInlinePauseScreenContext",
    "VideoHomeInlinePauseScreenRowItem_story.graphql",
    "VideoHomeInlinePauseScreenRowItem_video.graphql",
    "VideoHomePlayButtonThumbnailOverlay.react",
    "VideoHomeTypedLiteLogger",
    "XVideoHomeFeedController",
    "XVideoHomeShowController",
    "joinClasses",
    "react",
    "stylex",
    "useStoryVPVDLogger",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k,
      l = d("react");
    e = d("react");
    var m = e.useCallback,
      n = e.useContext,
      o = e.useState,
      p = {
        darkOverlay: {
          backgroundColor: "xo6aett",
          bottom: "x1ey2m1c",
          end: "xds687c",
          position: "x10l6tqk",
          start: "x17qophe",
          top: "x13vifvy",
          $$css: !0,
        },
        duration: {
          bottom: "xbfrwjf",
          end: "xlr8s2x",
          pointerEvents: "x47corl",
          position: "x10l6tqk",
          $$css: !0,
        },
        hidden: { visibility: "xlshs6z", $$css: !0 },
        image: {
          backgroundRepeat: "xiy17q3",
          backgroundSize: "x18d0r48",
          bottom: "x1ey2m1c",
          end: "xds687c",
          position: "x10l6tqk",
          start: "x17qophe",
          top: "x13vifvy",
          borderTopStartRadius: "x1lcm9me",
          borderTopEndRadius: "x1yr5g0i",
          borderBottomEndRadius: "xrt01vj",
          borderBottomStartRadius: "x10y3i5r",
          $$css: !0,
        },
        link: { color: "xg32yw2", $$css: !0 },
        liveBadge: {
          backgroundColor: "x1p0khr9",
          borderTopStartRadius: "xm3z3ea",
          borderTopEndRadius: "x1x8b98j",
          borderBottomEndRadius: "x131883w",
          borderBottomStartRadius: "x16mih1h",
          color: "xg32yw2",
          paddingTop: "x4p5aij",
          paddingEnd: "xsyo7zv",
          paddingBottom: "x1j85h84",
          paddingStart: "x16hj40l",
          $$css: !0,
        },
        liveBadgeContainer: {
          pointerEvents: "x47corl",
          position: "x10l6tqk",
          start: "xr6gfmr",
          top: "xfr5jun",
          $$css: !0,
        },
        root: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          flexGrow: "x1iyjqo2",
          flexShrink: "xs83m0k",
          flexBasis: "x1r8uery",
          position: "x1n2onr6",
          $$css: !0,
        },
        ownerName: {
          fontSize: "x1pg5gke",
          fontWeight: "xo1l8bm",
          marginTop: "xr9ek0c",
          $$css: !0,
        },
        playButton: { transition: "xl48mfz", $$css: !0 },
        playButtonHidden: { opacity: "xg01cxk", $$css: !0 },
        sideMargins: {
          marginStart: "x182zwpg",
          marginEnd: "x11jkl0l",
          $$css: !0,
        },
        title: { fontSize: "x1pg5gke", fontWeight: "x1s688f", $$css: !0 },
        videoContainer: {
          cursor: "x1ypdohk",
          marginTop: "x1xmf6yo",
          paddingBottom: "x10avn17",
          position: "x1n2onr6",
          $$css: !0,
        },
        videoContainerBottomMargin: { marginBottom: "x1e56ztr", $$css: !0 },
        videoInfoOverlay: {
          end: "xlr8s2x",
          position: "x10l6tqk",
          start: "xit27t2",
          top: "xndqk7f",
          $$css: !0,
        },
      };
    function a(a) {
      var e = a.isDismissibleStyle;
      e = e === void 0 ? !1 : e;
      var f = a.playerOrigin,
        g = a.position,
        h = a.story;
      a = a.video;
      h = d("RelayHooks").useFragment(
        j !== void 0
          ? j
          : (j = b("VideoHomeInlinePauseScreenRowItem_story.graphql")),
        h
      );
      h = c("useStoryVPVDLogger")({
        trackable: h == null ? void 0 : h.encrypted_tracking,
        position: g,
        interactionSourceOverride: 54,
      });
      var i = h[0];
      h = h[1];
      return l.jsx("div", {
        className: c("stylex")(p.root, g === 1 && p.sideMargins),
        ref: i,
        children: l.jsx(q, {
          isDismissibleStyle: e,
          playerOrigin: f,
          video: a,
          vpvdDebuggingInfoComponent: h,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function q(a) {
      var e,
        f,
        g,
        h = a.isDismissibleStyle;
      h = h === void 0 ? !1 : h;
      var j = a.playerOrigin,
        q = a.vpvdDebuggingInfoComponent;
      a = a.video;
      var r = o(!1),
        s = r[0],
        t = r[1];
      r = m(function () {
        t(!0);
      }, []);
      var u = m(function () {
          t(!1);
        }, []),
        v = d("RelayHooks").useFragment(
          k !== void 0
            ? k
            : (k = b("VideoHomeInlinePauseScreenRowItem_video.graphql")),
          a
        );
      a = n(c("VideoHomeInlinePauseScreenContext"));
      a = a.isEmbedded;
      e = (e = v.image) == null ? void 0 : e.uri;
      if (e == null) return null;
      var w = v.title_with_fallback;
      f = (f = v.owner) == null ? void 0 : f.name;
      g = (g = v.owner) == null ? void 0 : g.uri_token;
      var x = v == null ? void 0 : v.is_live_streaming,
        y = c("XVideoHomeFeedController").getURIBuilder().setString("v", v.id);
      a === !0 && (y = y.setString("ref", "external"));
      y = y.getURI();
      var z = function () {
          c("VideoHomeTypedLiteLogger").log({
            click_point: "pause_screen",
            event: "click",
            event_target: "video",
            event_target_id: v.id,
            player_origin: j,
          });
        },
        A = function () {
          var a;
          c("VideoHomeTypedLiteLogger").log({
            click_point: "pause_screen",
            event: "click",
            event_target: "page",
            event_target_id: (a = v.owner) == null ? void 0 : a.id,
            player_origin: j,
          });
        };
      a = a === !0 ? "_blank" : null;
      w = l.jsxs(l.Fragment, {
        children: [
          l.jsx(c("Link.react"), {
            className: "xg32yw2 x1pg5gke x1s688f",
            href: y,
            onClick: z,
            target: a,
            children: l.jsx(c("LineClamp.react"), {
              fitHeightToShorterText: !0,
              lineHeight: 17,
              lines: 2,
              children: w,
            }),
          }),
          l.jsx(c("Link.react"), {
            className: "xg32yw2 x1pg5gke xo1l8bm xr9ek0c",
            href: c("XVideoHomeShowController")
              .getURIBuilder()
              .setString("section_id", g)
              .getURI(),
            onClick: A,
            target: a,
            children: l.jsx(c("LineClamp.react"), {
              fitHeightToShorterText: !0,
              lineHeight: 17,
              lines: 1,
              children: f,
            }),
          }),
        ],
      });
      g = i._("EN DIRECT");
      return l.jsxs(l.Fragment, {
        children: [
          q,
          l.jsxs("div", {
            className: c("joinClasses")(
              c("stylex")(p.videoContainer, !h && p.videoContainerBottomMargin),
              "_92bf"
            ),
            onMouseEnter: r,
            onMouseLeave: u,
            children: [
              l.jsx(c("Link.react"), {
                href: y,
                onClick: z,
                target: a,
                children: l.jsx(c("CssBackgroundImage.react"), {
                  backgroundPosition: "center",
                  className:
                    "xiy17q3 x18d0r48 x1ey2m1c xds687c x10l6tqk x17qophe x13vifvy x1lcm9me x1yr5g0i xrt01vj x10y3i5r",
                  imageURI: e,
                }),
              }),
              x === !0 &&
                l.jsx("div", {
                  className: "x47corl x10l6tqk xr6gfmr xfr5jun",
                  children: l.jsx("div", {
                    className:
                      "x1p0khr9 xm3z3ea x1x8b98j x131883w x16mih1h xg32yw2 x4p5aij xsyo7zv x1j85h84 x16hj40l",
                    children: g,
                  }),
                }),
              h
                ? l.jsxs(l.Fragment, {
                    children: [
                      l.jsx(c("Link.react"), {
                        href: y,
                        onClick: z,
                        target: a,
                        children: l.jsx("div", {
                          className: c("stylex")(p.darkOverlay, !s && p.hidden),
                        }),
                      }),
                      l.jsx("div", {
                        className: c("stylex")(
                          p.videoInfoOverlay,
                          !s && p.hidden
                        ),
                        children: w,
                      }),
                    ],
                  })
                : l.jsx(c("Link.react"), {
                    href: y,
                    onClick: z,
                    target: a,
                    children: l.jsx(
                      c("VideoHomePlayButtonThumbnailOverlay.react"),
                      {
                        className: c("stylex")(
                          p.playButton,
                          !s && p.playButtonHidden
                        ),
                        size: "48",
                      }
                    ),
                  }),
              l.jsx(c("VideoHomeDurationThumbnailOverlay.react"), {
                className: c("stylex")(p.duration, h && !s && p.hidden),
                video: v,
              }),
            ],
          }),
          h ? null : w,
        ],
      });
    }
    q.displayName = q.name + " [from " + f.id + "]";
    h = a;
    g["default"] = h;
  },
  98
);
__d(
  "VideoHomeInlinePauseScreenRow.react",
  [
    "fbt",
    "ix",
    "ClickableAreaButton.react",
    "Image.react",
    "Link.react",
    "RelayHooks",
    "TetraTextPairing.react",
    "VideoHomeInlinePauseScreenContext",
    "VideoHomeInlinePauseScreenRowItem.react",
    "VideoHomeInlinePauseScreenRow_video.graphql",
    "VideoHomeTypedLiteLogger",
    "VideoSuggestionOverlayUtil",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react"),
      l = d("react").useContext,
      m = {
        header: { display: "x78zum5", height: "xlup9mm", $$css: !0 },
        crossButton: {
          cursor: "x1ypdohk",
          marginStart: "x16n37ib",
          pointerEvents: "x67bb7w",
          $$css: !0,
        },
        link: {
          ":hover_color": "x10n970z",
          ":hover_textDecoration": "xt0b8zv",
          textShadow: "x108epf8",
          pointerEvents: "x67bb7w",
          $$css: !0,
        },
        linkContainer: { display: "x78zum5", flexGrow: "x1iyjqo2", $$css: !0 },
        root: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          justifyContent: "xl56j7k",
          $$css: !0,
        },
        row: {
          display: "x78zum5",
          justifyContent: "x1qughib",
          marginTop: "x1gslohp",
          pointerEvents: "x67bb7w",
          $$css: !0,
        },
        spacer: { flex: "x12lumcd", $$css: !0 },
        spacerMargins: {
          marginEnd: "x11jkl0l",
          marginStart: "x182zwpg",
          $$css: !0,
        },
      };
    function a(a, e) {
      var f = a.isDismissibleStyle,
        g = f === void 0 ? !1 : f;
      f = a.onPauseScreenDismissed;
      var n = a.playerOrigin;
      a = a.video;
      a = d("RelayHooks").useFragment(
        j !== void 0
          ? j
          : (j = b("VideoHomeInlinePauseScreenRow_video.graphql")),
        a
      );
      var o = l(c("VideoHomeInlinePauseScreenContext")),
        p = o.isEmbedded;
      o = o.isGaming;
      a =
        (a =
          (a = a.video_channel) == null
            ? void 0
            : (a = a.video_channel_feed) == null
            ? void 0
            : a.edges) != null
          ? a
          : [];
      if (a.length === 0) return null;
      a = a.map(function (a, b) {
        var d;
        d =
          (d = (d = a.node) == null ? void 0 : d.attached_story) != null
            ? d
            : a.node;
        d =
          d == null
            ? void 0
            : (d = d.attachments) == null
            ? void 0
            : (d = d[0]) == null
            ? void 0
            : d.media;
        return a.node == null || d == null || d.__typename !== "Video"
          ? null
          : k.jsx(
              c("VideoHomeInlinePauseScreenRowItem.react"),
              {
                isDismissibleStyle: g,
                playerOrigin: n,
                position: b,
                video: d,
                story: a.node,
              },
              d.id
            );
      });
      if (a.length === 0) return null;
      var q = a.length;
      a.push(
        Array(3 - q)
          .fill(0)
          .map(function (a, b) {
            return k.jsx(
              "div",
              {
                className: c("stylex")(
                  m.spacer,
                  q === 1 && b === 0 && m.spacerMargins
                ),
              },
              b
            );
          })
      );
      var r = function () {
          c("VideoHomeTypedLiteLogger").log({
            click_point: "pause_screen",
            event: "click",
            event_target: "watch",
            player_origin: n,
          });
        },
        s = p === !0 ? "_blank" : null;
      return k.jsxs("div", {
        className: "x78zum5 xdt5ytf xl56j7k",
        ref: e,
        children: [
          k.jsxs("div", {
            className: "x78zum5 xlup9mm",
            children: [
              k.jsx("div", {
                className: "x78zum5 x1iyjqo2",
                children: k.jsx(c("Link.react"), {
                  className: "x10n970z xt0b8zv x108epf8 x67bb7w",
                  href: d("VideoSuggestionOverlayUtil").getHeaderURI(o, p),
                  onClick: r,
                  target: s,
                  children: k.jsx(c("TetraTextPairing.react"), {
                    headline: d("VideoSuggestionOverlayUtil").getHeadline(o, p),
                    headlineColor: "white",
                    level: 3,
                  }),
                }),
              }),
              g &&
                f &&
                k.jsx(c("ClickableAreaButton.react"), {
                  onClick: f,
                  label: h._("Cliquez pour fermer l\u2019\u00e9cran de pause"),
                  children: k.jsx("div", {
                    className: "x1ypdohk x16n37ib x67bb7w",
                    children: k.jsx(c("Image.react"), { src: i("480713") }),
                  }),
                }),
            ],
          }),
          k.jsx("div", {
            className: "x78zum5 x1qughib x1gslohp x67bb7w",
            children: a,
          }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = k.forwardRef(a);
    g["default"] = e;
  },
  98
);
__d(
  "VideoHomeInlinePauseScreenRowGlimmer.react",
  [
    "fbt",
    "FBLoadShimmer.react",
    "TetraTextPairing.react",
    "XUISpinner.react",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = {
        root: { display: "x78zum5", flexDirection: "xdt5ytf", $$css: !0 },
        row: { display: "x78zum5", $$css: !0 },
        spinner: { alignSelf: "xamitd3", $$css: !0 },
        text: {
          marginBottom: "x12nagc",
          opacity: "xuzhngd",
          height: "x1kpxq89",
          borderTopStartRadius: "xhk9q7s",
          borderTopEndRadius: "x1otrzb0",
          borderBottomEndRadius: "x1i1ezom",
          borderBottomStartRadius: "x1o6z2jb",
          $$css: !0,
        },
        title: { marginBottom: "xu06os2", marginTop: "x1ok221b", $$css: !0 },
        video: { display: "x78zum5", flexDirection: "xdt5ytf", $$css: !0 },
        videoInfo: { display: "x78zum5", flexDirection: "xdt5ytf", $$css: !0 },
        videoMiddle: {
          marginEnd: "x11jkl0l",
          marginStart: "x182zwpg",
          $$css: !0,
        },
        videoThumbnail: {
          borderTopStartRadius: "x1lcm9me",
          borderTopEndRadius: "x1yr5g0i",
          borderBottomEndRadius: "xrt01vj",
          borderBottomStartRadius: "x10y3i5r",
          height: "xcbkimw",
          marginTop: "x1xmf6yo",
          opacity: "xuzhngd",
          width: "xrostsh",
          $$css: !0,
        },
        videoThumbnailBottomMargin: { marginBottom: "x1e56ztr", $$css: !0 },
      };
    function a(a) {
      var b = a.isDismissibleStyle;
      b = b === void 0 ? !1 : b;
      a = a.isEmbedded;
      a = a === void 0 ? !1 : a;
      if (a === !0)
        return i.jsx("div", {
          className: "xamitd3",
          children: i.jsx(c("XUISpinner.react"), { size: "large" }),
        });
      a =
        !b &&
        i.jsxs("div", {
          className: "x78zum5 xdt5ytf",
          children: [
            i.jsx(c("FBLoadShimmer.react"), {
              className:
                "x12nagc xuzhngd x1kpxq89 xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb",
              width: 150,
            }),
            i.jsx(c("FBLoadShimmer.react"), {
              className:
                "x12nagc xuzhngd x1kpxq89 xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb",
              width: 50,
            }),
          ],
        });
      return i.jsxs("div", {
        className: "x78zum5 xdt5ytf",
        children: [
          i.jsx("div", {
            className: "xu06os2 x1ok221b",
            children: i.jsx(c("TetraTextPairing.react"), {
              headline: h._("Plus de vid\u00e9os dans Vid\u00e9o"),
              headlineColor: "white",
              level: 3,
            }),
          }),
          i.jsxs("div", {
            className: "x78zum5",
            children: [
              i.jsxs("div", {
                className: "x78zum5 xdt5ytf",
                children: [
                  i.jsx(c("FBLoadShimmer.react"), {
                    className: c("stylex")(
                      j.videoThumbnail,
                      !b && j.videoThumbnailBottomMargin
                    ),
                  }),
                  a,
                ],
              }),
              i.jsxs("div", {
                className: "x78zum5 xdt5ytf x11jkl0l x182zwpg",
                children: [
                  i.jsx(c("FBLoadShimmer.react"), {
                    className: c("stylex")(
                      j.videoThumbnail,
                      !b && j.videoThumbnailBottomMargin
                    ),
                  }),
                  a,
                ],
              }),
              i.jsxs("div", {
                className: "x78zum5 xdt5ytf",
                children: [
                  i.jsx(c("FBLoadShimmer.react"), {
                    className: c("stylex")(
                      j.videoThumbnail,
                      !b && j.videoThumbnailBottomMargin
                    ),
                  }),
                  a,
                ],
              }),
            ],
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
  "VideoHomeInlinePauseScreenImpl.react",
  [
    "RelayFBEnvironment",
    "RelayHooks",
    "VideoHomeInlinePauseScreenImplQuery.graphql",
    "VideoHomeInlinePauseScreenRow.react",
    "VideoHomeInlinePauseScreenRowGlimmer.react",
    "react",
    "requireDeferred",
    "stylex",
    "useImpressionLogger",
    "useMinifiedProductAttribution",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    e = d("react");
    var j = e.useCallback,
      k = e.useRef,
      l = c("requireDeferred")("VideoHomeTypedLiteLogger").__setRef(
        "VideoHomeInlinePauseScreenImpl.react"
      ),
      m = {
        root: {
          boxSizing: "x9f619",
          color: "xg32yw2",
          display: "x78zum5",
          height: "x5yr21d",
          paddingTop: "xz9dl7a",
          paddingEnd: "xn6708d",
          paddingBottom: "xsag5q8",
          paddingStart: "x1ye3gou",
          width: "xh8yej3",
          $$css: !0,
        },
        inlineDefaultStyle: {
          backgroundColor: "xzglsdp",
          flexDirection: "xdt5ytf",
          justifyContent: "xl56j7k",
          $$css: !0,
        },
        inlineDismissibleStyle: {
          backgroundImage: "xumo3q3",
          flexDirection: "xdt5ytf",
          justifyContent: "x13a6bvl",
          paddingBottom: "x1rxj1xn",
          $$css: !0,
        },
        embeddedDefaultStyle: {
          flexDirection: "xdt5ytf",
          justifyContent: "xl56j7k",
          $$css: !0,
        },
        embeddedDismissibleStyle: {
          height: "x5yr21d",
          flexDirection: "xdt5ytf",
          justifyContent: "x13a6bvl",
          paddingBottom: "x1rxj1xn",
          $$css: !0,
        },
      };
    function a(a) {
      var b = a.caller,
        e = a.isDismissibleStyle;
      e = e === void 0 ? !1 : e;
      var f = a.isEmbedded;
      f = f === void 0 ? !1 : f;
      var g = a.onPauseScreenDismissed,
        h = a.playerOrigin,
        j = a.videoChannelEntryPoint,
        k = a.videoChannelID,
        l = a.visible;
      a = a.vpc;
      return !l
        ? null
        : i.jsx("div", {
            className: c("stylex")(
              m.root,
              f && !e && m.embeddedDefaultStyle,
              f && e && m.embeddedDismissibleStyle,
              !f && !e && m.inlineDefaultStyle,
              !f && e && m.inlineDismissibleStyle
            ),
            children: i.jsx(i.Suspense, {
              fallback: i.jsx(c("VideoHomeInlinePauseScreenRowGlimmer.react"), {
                isDismissibleStyle: e,
                isEmbedded: f,
              }),
              children: i.jsx(d("RelayHooks").RelayEnvironmentProvider, {
                environment: c("RelayFBEnvironment"),
                children: i.jsx(n, {
                  caller: b,
                  isDismissibleStyle: e,
                  onPauseScreenDismissed: g,
                  playerOrigin: h,
                  videoChannelEntryPoint: j,
                  videoChannelID: k,
                  visible: l,
                  vpc: a,
                }),
              }),
            }),
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function n(a) {
      var e = a.caller,
        f = a.isDismissibleStyle,
        g = a.onPauseScreenDismissed,
        m = a.playerOrigin,
        n = a.videoChannelEntryPoint,
        o = a.videoChannelID;
      a = a.vpc;
      var p = a.getVideoID(),
        q = k(!1);
      e = d("RelayHooks").useLazyLoadQuery(
        h !== void 0
          ? h
          : (h = b("VideoHomeInlinePauseScreenImplQuery.graphql")),
        { caller: e, entry_channel_id: o, entry_point: n, id: p }
      );
      var r = c("useMinifiedProductAttribution")();
      o = j(
        function (a) {
          if (q.current) return;
          a.log({
            event: "pause_screen_impression",
            event_target: "video",
            event_target_id: p,
            player_origin: m,
            attribution_id_v2: r,
          });
          q.current = !0;
        },
        [m, p]
      );
      n = c("useImpressionLogger")(l, o);
      o = e.video;
      return o == null
        ? null
        : i.jsx(c("VideoHomeInlinePauseScreenRow.react"), {
            isDismissibleStyle: f,
            onPauseScreenDismissed: g,
            playerOrigin: m,
            ref: n,
            video: o,
            vpc: a,
          });
    }
    n.displayName = n.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoHomeInlinePauseScreen.react",
  [
    "SubscriptionsHandler",
    "VideoHomeInlinePauseScreenContext",
    "VideoHomeInlinePauseScreenImpl.react",
    "VideoHomeTypedLiteLogger",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useEffect,
      j = b.useRef,
      k = b.useState,
      l = {
        root: {
          height: "x5yr21d",
          width: "xh8yej3",
          display: "x1s85apg",
          $$css: !0,
        },
        visible: { display: "x78zum5", $$css: !0 },
      };
    function a(a) {
      var b = a.caller,
        d = a.isDismissibleStyle;
      d = d === void 0 ? !1 : d;
      var e = a.isEmbedded,
        f = e === void 0 ? !1 : e,
        g = a.playerOrigin;
      e = a.videoChannelEntryPoint;
      var m = a.videoChannelID,
        n = a.vpc;
      a = k(n.getSource() === "tahoe");
      var o = a[0],
        p = a[1];
      a = k("");
      var q = a[0],
        r = a[1];
      a = k(!1);
      var s = a[0],
        t = a[1],
        u = j(!1),
        v = j(!1),
        w = j(!1);
      i(
        function () {
          w.current = !1;
        },
        [n]
      );
      i(
        function () {
          var a = new (c("SubscriptionsHandler"))(),
            b = function () {
              v.current ||
                (c("VideoHomeTypedLiteLogger").log({
                  event: "video_pause_card_fetch",
                  player_origin: g,
                }),
                (v.current = !0));
            };
          a.addSubscriptions(
            n.addListener("stateChange", function () {
              r(n.getState());
            })
          );
          a.addSubscriptions(
            n.addListener("pauseRequested", function (a) {
              w.current = a === "user_initiated";
            })
          );
          a.addSubscriptions(
            n.addListener("pausePlayback", function () {
              !u.current && w.current ? ((w.current = !1), t(!0), b()) : t(!1);
            })
          );
          f ||
            (a.addSubscriptions(
              n.addListener("TahoeController/exitTahoe", function () {
                p(!1);
              })
            ),
            a.addSubscriptions(
              n.addListener("TahoeController/enterTahoe", function () {
                p(!0);
              })
            ));
          return function () {
            a.release();
          };
        },
        [f, n]
      );
      if (o || q === "destroyed") return null;
      a = function () {
        (u.current = !0),
          t(!1),
          c("VideoHomeTypedLiteLogger").log({
            click_point: "pause_screen",
            event: "hide",
            player_origin: g,
          });
      };
      return h.jsx(c("VideoHomeInlinePauseScreenContext").Provider, {
        value: { isEmbedded: f, isGaming: n.isGaming() },
        children: h.jsx("div", {
          className: c("stylex")(l.root, q === "paused" && l.visible),
          children: h.jsx(c("VideoHomeInlinePauseScreenImpl.react"), {
            caller: b,
            isDismissibleStyle: d,
            isEmbedded: f,
            onPauseScreenDismissed: a,
            playerOrigin: g,
            videoChannelEntryPoint: e,
            videoChannelID: m,
            visible: s,
            vpc: n,
          }),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
