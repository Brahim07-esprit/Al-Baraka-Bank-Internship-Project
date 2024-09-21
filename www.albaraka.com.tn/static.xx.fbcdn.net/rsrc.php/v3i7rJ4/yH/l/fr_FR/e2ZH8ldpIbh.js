/*FB_PKG_DELIM*/

__d(
  "CometDismissFBNuxMutation_facebookRelayOperation",
  [],
  function (a, b, c, d, e, f) {
    e.exports = "4969387046444111";
  },
  null
);
__d(
  "CometDismissFBNuxMutation.graphql",
  ["CometDismissFBNuxMutation_facebookRelayOperation"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          { defaultValue: null, kind: "LocalArgument", name: "nux_id_input" },
        ],
        c = [
          { kind: "Variable", name: "nux_id", variableName: "nux_id_input" },
        ],
        d = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "should_show",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "CometDismissFBNuxMutation",
          selections: [
            {
              alias: null,
              args: c,
              concreteType: null,
              kind: "LinkedField",
              name: "nux_dismiss",
              plural: !1,
              selections: [d],
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
          name: "CometDismissFBNuxMutation",
          selections: [
            {
              alias: null,
              args: c,
              concreteType: null,
              kind: "LinkedField",
              name: "nux_dismiss",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "__typename",
                  storageKey: null,
                },
                d,
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
          id: b("CometDismissFBNuxMutation_facebookRelayOperation"),
          metadata: {},
          name: "CometDismissFBNuxMutation",
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
  "CometLogImpressionFBNuxMutation_facebookRelayOperation",
  [],
  function (a, b, c, d, e, f) {
    e.exports = "5712935945399791";
  },
  null
);
__d(
  "CometLogImpressionFBNuxMutation.graphql",
  ["CometLogImpressionFBNuxMutation_facebookRelayOperation"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "nux_id" }],
        c = [{ kind: "Variable", name: "nux_id", variableName: "nux_id" }],
        d = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "nux_id",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "CometLogImpressionFBNuxMutation",
          selections: [
            {
              alias: null,
              args: c,
              concreteType: null,
              kind: "LinkedField",
              name: "log_nux_view",
              plural: !1,
              selections: [d],
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
          name: "CometLogImpressionFBNuxMutation",
          selections: [
            {
              alias: null,
              args: c,
              concreteType: null,
              kind: "LinkedField",
              name: "log_nux_view",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "__typename",
                  storageKey: null,
                },
                d,
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
          id: b("CometLogImpressionFBNuxMutation_facebookRelayOperation"),
          metadata: {},
          name: "CometLogImpressionFBNuxMutation",
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
  "CometLogImpressionFBNuxMutationWithNoImpressionLimitMutation_facebookRelayOperation",
  [],
  function (a, b, c, d, e, f) {
    e.exports = "8041112739247711";
  },
  null
);
__d(
  "CometLogImpressionFBNuxMutationWithNoImpressionLimitMutation.graphql",
  [
    "CometLogImpressionFBNuxMutationWithNoImpressionLimitMutation_facebookRelayOperation",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "nux_id" }],
        c = [{ kind: "Variable", name: "nux_id", variableName: "nux_id" }],
        d = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "nux_id",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "CometLogImpressionFBNuxMutationWithNoImpressionLimitMutation",
          selections: [
            {
              alias: null,
              args: c,
              concreteType: null,
              kind: "LinkedField",
              name: "log_nux_view_and_increment_view_count",
              plural: !1,
              selections: [d],
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
          name: "CometLogImpressionFBNuxMutationWithNoImpressionLimitMutation",
          selections: [
            {
              alias: null,
              args: c,
              concreteType: null,
              kind: "LinkedField",
              name: "log_nux_view_and_increment_view_count",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "__typename",
                  storageKey: null,
                },
                d,
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
          id: b(
            "CometLogImpressionFBNuxMutationWithNoImpressionLimitMutation_facebookRelayOperation"
          ),
          metadata: {},
          name: "CometLogImpressionFBNuxMutationWithNoImpressionLimitMutation",
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
  "CometProfilePhotoForActor_actor.graphql",
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
        },
        b = [
          { kind: "Variable", name: "height", variableName: "height" },
          { kind: "Variable", name: "scale", variableName: "scale" },
          { kind: "Variable", name: "width", variableName: "width" },
        ],
        c = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "uri",
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
            name: "scale",
            storageKey: null,
          },
        ];
      return {
        argumentDefinitions: [
          {
            defaultValue: !1,
            kind: "LocalArgument",
            name: "allowProfileVideo",
          },
          {
            defaultValue: !0,
            kind: "LocalArgument",
            name: "displayAvailability",
          },
          { defaultValue: null, kind: "LocalArgument", name: "height" },
          {
            defaultValue: !1,
            kind: "LocalArgument",
            name: "isCommerceProfilePhoto",
          },
          {
            defaultValue: !0,
            kind: "LocalArgument",
            name: "linkToUnseenStory",
          },
          { defaultValue: null, kind: "LocalArgument", name: "scale" },
          { defaultValue: null, kind: "LocalArgument", name: "width" },
        ],
        kind: "Fragment",
        metadata: null,
        name: "CometProfilePhotoForActor_actor",
        selections: [
          {
            args: null,
            kind: "FragmentSpread",
            name: "ProfileCometProfileLink_actor",
          },
          {
            args: [
              {
                kind: "Variable",
                name: "enabled",
                variableName: "linkToUnseenStory",
              },
            ],
            kind: "FragmentSpread",
            name: "useActorStoryStatus_actor",
          },
          {
            kind: "InlineFragment",
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "url",
                storageKey: null,
              },
            ],
            type: "Entity",
            abstractKey: "__isEntity",
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "__typename",
            storageKey: null,
          },
          a,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "name",
            storageKey: null,
          },
          {
            alias: null,
            args: b,
            concreteType: "Image",
            kind: "LinkedField",
            name: "profile_picture",
            plural: !1,
            selections: c,
            storageKey: null,
          },
          {
            condition: "displayAvailability",
            kind: "Condition",
            passingValue: !0,
            selections: [
              {
                kind: "InlineFragment",
                selections: [
                  {
                    kind: "ClientExtension",
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "availability",
                        storageKey: null,
                      },
                    ],
                  },
                ],
                type: "User",
                abstractKey: null,
              },
            ],
          },
          {
            condition: "allowProfileVideo",
            kind: "Condition",
            passingValue: !0,
            selections: [
              {
                kind: "InlineFragment",
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "ProfileVideo",
                    kind: "LinkedField",
                    name: "profile_video",
                    plural: !1,
                    selections: [
                      a,
                      {
                        args: null,
                        kind: "FragmentSpread",
                        name: "CometProfileVideoSection_profileVideo",
                      },
                    ],
                    storageKey: null,
                  },
                ],
                type: "Profile",
                abstractKey: "__isProfile",
              },
            ],
          },
          {
            condition: "isCommerceProfilePhoto",
            kind: "Condition",
            passingValue: !0,
            selections: [
              {
                kind: "InlineFragment",
                selections: [
                  {
                    alias: null,
                    args: b,
                    concreteType: "Image",
                    kind: "LinkedField",
                    name: "commerce_profile_picture",
                    plural: !1,
                    selections: c,
                    storageKey: null,
                  },
                ],
                type: "ActorWithCustomizableCommerceProfile",
                abstractKey: "__isActorWithCustomizableCommerceProfile",
              },
            ],
          },
        ],
        type: "Actor",
        abstractKey: "__isActor",
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "useActorStoryStatus_actor.graphql",
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
        },
        b = {
          alias: null,
          args: null,
          concreteType: "Story",
          kind: "LinkedField",
          name: "first_story_to_show",
          plural: !1,
          selections: [
            a,
            {
              alias: null,
              args: null,
              concreteType: "StoryCardSeenState",
              kind: "LinkedField",
              name: "story_card_seen_state",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_seen_by_viewer",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        };
      return {
        argumentDefinitions: [
          { defaultValue: !0, kind: "LocalArgument", name: "enabled" },
        ],
        kind: "Fragment",
        metadata: null,
        name: "useActorStoryStatus_actor",
        selections: [
          {
            condition: "enabled",
            kind: "Condition",
            passingValue: !0,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "__typename",
                storageKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "pages_story_bucket_v2",
                    plural: !1,
                    selections: [a, b],
                    storageKey: null,
                  },
                ],
                type: "Page",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    alias: null,
                    args: [{ kind: "Literal", name: "first", value: 1 }],
                    concreteType: "DirectInboxBroadcastBucketConnection",
                    kind: "LinkedField",
                    name: "story_bucket",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: "DirectMessageThreadBucket",
                        kind: "LinkedField",
                        name: "nodes",
                        plural: !0,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "should_show_close_friend_badge",
                            storageKey: null,
                          },
                          a,
                          b,
                        ],
                        storageKey: null,
                      },
                    ],
                    storageKey: "story_bucket(first:1)",
                  },
                ],
                type: "User",
                abstractKey: null,
              },
            ],
          },
        ],
        type: "Actor",
        abstractKey: "__isActor",
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "useLiveCostreamerTagSubscription_facebookRelayOperation",
  [],
  function (a, b, c, d, e, f) {
    e.exports = "7089377211078031";
  },
  null
);
__d(
  "useLiveCostreamerTagSubscription.graphql",
  [
    "VideoPlayerRelay_video$normalization.graphql",
    "useLiveCostreamerTagSubscription_facebookRelayOperation",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        c = [{ kind: "Variable", name: "data", variableName: "input" }],
        d = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        e = [d],
        f = {
          alias: null,
          args: null,
          concreteType: "Page",
          kind: "LinkedField",
          name: "tagged_page",
          plural: !1,
          selections: [
            d,
            {
              alias: null,
              args: null,
              concreteType: "Video",
              kind: "LinkedField",
              name: "currently_live_video",
              plural: !1,
              selections: e,
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        g = {
          args: null,
          documentName: "useLiveCostreamerTagSubscription",
          fragmentName: "VideoPlayerCostreamingControl_video",
          fragmentPropName: "video",
          kind: "ModuleImport",
        };
      e = {
        alias: null,
        args: null,
        concreteType: "Video",
        kind: "LinkedField",
        name: "video",
        plural: !1,
        selections: [
          d,
          {
            alias: null,
            args: null,
            concreteType: "VideoLiveCostreamingStreamersConnection",
            kind: "LinkedField",
            name: "live_costreaming_streamers",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "Page",
                kind: "LinkedField",
                name: "nodes",
                plural: !0,
                selections: e,
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "count",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        storageKey: null,
      };
      var h = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        i = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "uri",
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "useLiveCostreamerTagSubscription",
          selections: [
            {
              alias: null,
              args: c,
              concreteType: "LiveVideoTagSubscribeResponsePayload",
              kind: "LinkedField",
              name: "live_video_tag_subscribe",
              plural: !1,
              selections: [
                f,
                {
                  alias: null,
                  args: null,
                  concreteType: "Video",
                  kind: "LinkedField",
                  name: "tagged_video",
                  plural: !1,
                  selections: [
                    d,
                    {
                      alias: null,
                      args: null,
                      concreteType: "Video",
                      kind: "LinkedField",
                      name: "if_viewer_can_see_costreaming_tools",
                      plural: !1,
                      selections: [g],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "VideoLiveCostreamingStreamersConnection",
                      kind: "LinkedField",
                      name: "live_costreaming_streamers",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "Page",
                          kind: "LinkedField",
                          name: "nodes",
                          plural: !0,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "Video",
                              kind: "LinkedField",
                              name: "currently_live_video",
                              plural: !1,
                              selections: [
                                {
                                  args: null,
                                  kind: "FragmentSpread",
                                  name: "CometVideoPlayerCostreamingThumbnailRowInner_video",
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
                e,
              ],
              storageKey: null,
            },
          ],
          type: "Subscription",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "useLiveCostreamerTagSubscription",
          selections: [
            {
              alias: null,
              args: c,
              concreteType: "LiveVideoTagSubscribeResponsePayload",
              kind: "LinkedField",
              name: "live_video_tag_subscribe",
              plural: !1,
              selections: [
                f,
                {
                  alias: null,
                  args: null,
                  concreteType: "Video",
                  kind: "LinkedField",
                  name: "tagged_video",
                  plural: !1,
                  selections: [
                    d,
                    {
                      alias: null,
                      args: null,
                      concreteType: "Video",
                      kind: "LinkedField",
                      name: "if_viewer_can_see_costreaming_tools",
                      plural: !1,
                      selections: [g, d],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "VideoLiveCostreamingStreamersConnection",
                      kind: "LinkedField",
                      name: "live_costreaming_streamers",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "Page",
                          kind: "LinkedField",
                          name: "nodes",
                          plural: !0,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "Video",
                              kind: "LinkedField",
                              name: "currently_live_video",
                              plural: !1,
                              selections: [
                                d,
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "url",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: null,
                                  kind: "LinkedField",
                                  name: "video_channel",
                                  plural: !1,
                                  selections: [h, d],
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: null,
                                  kind: "LinkedField",
                                  name: "owner",
                                  plural: !1,
                                  selections: [
                                    h,
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "name",
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "Image",
                                      kind: "LinkedField",
                                      name: "profile_picture",
                                      plural: !1,
                                      selections: i,
                                      storageKey: null,
                                    },
                                    d,
                                  ],
                                  storageKey: null,
                                },
                                {
                                  args: null,
                                  fragment: b(
                                    "VideoPlayerRelay_video$normalization.graphql"
                                  ),
                                  kind: "FragmentSpread",
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
                                      selections: i,
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "image_preview_payload",
                                      storageKey: null,
                                    },
                                    d,
                                  ],
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                            d,
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                e,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: b("useLiveCostreamerTagSubscription_facebookRelayOperation"),
          metadata: { subscriptionName: "live_video_tag_subscribe" },
          name: "useLiveCostreamerTagSubscription",
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
  "LiveVideoLatencyMenuContextProvider_video.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "LiveVideoLatencyMenuContextProvider_video",
      selections: [
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            concreteType: "Video",
            kind: "LinkedField",
            name: "if_viewer_can_use_latency_menu",
            plural: !1,
            selections: [
              {
                args: null,
                documentName:
                  "LiveVideoLatencyMenuContextProvider_video_if_viewer_can_use_latency_menu",
                fragmentName: "VideoPlayerSettingsMenuLatencyPane_video",
                fragmentPropName: "video",
                kind: "ModuleImport",
              },
            ],
            storageKey: null,
          },
          action: "NONE",
          path: "if_viewer_can_use_latency_menu",
        },
        {
          kind: "RequiredField",
          field: {
            alias: "if_viewer_can_use_latency_menu_toggle",
            args: null,
            concreteType: "Video",
            kind: "LinkedField",
            name: "if_viewer_can_use_latency_menu",
            plural: !1,
            selections: [
              {
                args: null,
                documentName:
                  "LiveVideoLatencyMenuContextProvider_video_if_viewer_can_use_latency_menu_toggle",
                fragmentName: "VideoPlayerSettingsMenuLatencyPaneToggle_video",
                fragmentPropName: "video",
                kind: "ModuleImport",
              },
            ],
            storageKey: null,
          },
          action: "NONE",
          path: "if_viewer_can_use_latency_menu_toggle",
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
  "VideoPlayerCaptionsControl_video.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "captions_url",
        storageKey: null,
      };
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "VideoPlayerCaptionsControl_video",
        selections: [
          a,
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
              a,
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "locale",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "localized_language",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "localized_country",
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
  "VideoPlayerCaptionsSettingMutation_facebookRelayOperation",
  [],
  function (a, b, c, d, e, f) {
    e.exports = "6709986205720272";
  },
  null
);
__d(
  "VideoPlayerCaptionsSettingMutation.graphql",
  ["VideoPlayerCaptionsSettingMutation_facebookRelayOperation"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        c = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType: "VideoPlayerCaptionsSettingResponsePayload",
            kind: "LinkedField",
            name: "video_player_captions_setting",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "success",
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
          name: "VideoPlayerCaptionsSettingMutation",
          selections: c,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: a,
          kind: "Operation",
          name: "VideoPlayerCaptionsSettingMutation",
          selections: c,
        },
        params: {
          id: b("VideoPlayerCaptionsSettingMutation_facebookRelayOperation"),
          metadata: {},
          name: "VideoPlayerCaptionsSettingMutation",
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
  "VideoPlayerDefaultControlsImplLive_video.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "VideoPlayerDefaultControlsImplLive_video",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "VideoPlayerLiveVideoControls_video",
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
  "VideoPlayerDefaultControlsImplNotLive_video.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "VideoPlayerDefaultControlsImplNotLive_video",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "VideoPlayerScrubberWithPreview_video",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "VideoPlayerWatchAndScrollControl_video",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "VideoPlayerCaptionsControl_video",
        },
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
          concreteType: "Video",
          kind: "LinkedField",
          name: "if_viewer_can_use_clipping",
          plural: !1,
          selections: [
            {
              args: null,
              documentName:
                "VideoPlayerDefaultControlsImplNotLive_video_if_viewer_can_use_clipping",
              fragmentName: "VideoPlayerClipVideoControl_video",
              fragmentPropName: "video",
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
  "VideoPlayerLiveVideoControls_video.graphql",
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
        name: "VideoPlayerLiveVideoControls_video",
        selections: [
          a,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_clipping_enabled",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "live_rewind_enabled",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "owner",
            plural: !1,
            selections: [a],
            storageKey: null,
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "VideoPlayerWatchAndScrollControl_video",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "LiveVideoLatencyMenuContextProvider_video",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "VideoPlayerCaptionsControl_video",
          },
          {
            alias: null,
            args: null,
            concreteType: "Video",
            kind: "LinkedField",
            name: "if_viewer_can_see_community_moderation_tools",
            plural: !1,
            selections: [
              {
                args: null,
                documentName: "VideoPlayerLiveVideoControls_video",
                fragmentName: "VideoPlayerModeratorControl_video",
                fragmentPropName: "video",
                kind: "ModuleImport",
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "Video",
            kind: "LinkedField",
            name: "if_viewer_can_use_live_rewind",
            plural: !1,
            selections: [
              {
                args: null,
                documentName:
                  "VideoPlayerLiveVideoControls_video_if_viewer_can_use_live_rewind",
                fragmentName: "VideoPlayerLiveRewindControlsGroup_video",
                fragmentPropName: "video",
                kind: "ModuleImport",
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "Video",
            kind: "LinkedField",
            name: "if_viewer_can_use_clipping",
            plural: !1,
            selections: [
              {
                args: null,
                documentName:
                  "VideoPlayerLiveVideoControls_video_if_viewer_can_use_clipping",
                fragmentName: "VideoPlayerClipVideoControl_video",
                fragmentPropName: "video",
                kind: "ModuleImport",
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "Video",
            kind: "LinkedField",
            name: "if_viewer_can_see_costreaming_tools",
            plural: !1,
            selections: [
              {
                args: null,
                documentName:
                  "VideoPlayerLiveVideoControls_video_if_viewer_can_see_costreaming_tools",
                fragmentName: "VideoPlayerCostreamingControl_video",
                fragmentPropName: "video",
                kind: "ModuleImport",
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
  "VideoPlayerScrubberBase_video.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "VideoPlayerScrubberBase_video",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "video_player_scrubber_base_content_renderer",
          plural: !1,
          selections: [
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "VideoPlayerScrubberBase_video",
                  fragmentName:
                    "VideoPlayerScrubberBaseContentSegmented_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "XFBVideoPlayerScrubberBaseContentSegmentedRenderer",
              abstractKey: null,
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
  "VideoPlayerScrubberPreview_video.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "VideoPlayerScrubberPreview_video",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "video_player_scrubber_preview_renderer",
          plural: !1,
          selections: [
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "VideoPlayerScrubberPreview_video",
                  fragmentName: "VideoPlayerScrubberChapterPreview_video",
                  fragmentPropName: "video",
                  kind: "ModuleImport",
                },
              ],
              type: "XFBVideoPlayerScrubberChapterPreviewRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "VideoPlayerScrubberPreview_video",
                  fragmentName: "VideoPlayerScrubberDefaultPreview_video",
                  fragmentPropName: "video",
                  kind: "ModuleImport",
                },
              ],
              type: "XFBVideoPlayerScrubberDefaultPreviewRenderer",
              abstractKey: null,
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
  "VideoPlayerScrubberWithPreview_video.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "VideoPlayerScrubberWithPreview_video",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "VideoPlayerScrubber_video",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "VideoPlayerScrubberPreview_video",
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
  "VideoPlayerScrubber_video.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "VideoPlayerScrubber_video",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "VideoPlayerScrubberBase_video",
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
  "VideoPlayerWatchAndScrollControl_video.graphql",
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
        name: "VideoPlayerWatchAndScrollControl_video",
        selections: [
          a,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "playable_duration_in_ms",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "owner",
            plural: !1,
            selections: [
              {
                kind: "InlineFragment",
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "has_professional_features_for_watch",
                    storageKey: null,
                  },
                ],
                type: "VideoOwner",
                abstractKey: "__isVideoOwner",
              },
              a,
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_huddle",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "url",
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
  "useVideoPlayerWatchAndScrollControlNUXQuery_facebookRelayOperation",
  [],
  function (a, b, c, d, e, f) {
    e.exports = "6471186886305591";
  },
  null
);
__d(
  "useVideoPlayerWatchAndScrollControlNUXQuery.graphql",
  ["useVideoPlayerWatchAndScrollControlNUXQuery_facebookRelayOperation"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ kind: "Literal", name: "nux_id", value: 9347 }],
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "should_show",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "useVideoPlayerWatchAndScrollControlNUXQuery",
          selections: [
            {
              alias: null,
              args: a,
              concreteType: null,
              kind: "LinkedField",
              name: "nux",
              plural: !1,
              selections: [c],
              storageKey: "nux(nux_id:9347)",
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "useVideoPlayerWatchAndScrollControlNUXQuery",
          selections: [
            {
              alias: null,
              args: a,
              concreteType: null,
              kind: "LinkedField",
              name: "nux",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "__typename",
                  storageKey: null,
                },
                c,
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "id",
                  storageKey: null,
                },
              ],
              storageKey: "nux(nux_id:9347)",
            },
          ],
        },
        params: {
          id: b(
            "useVideoPlayerWatchAndScrollControlNUXQuery_facebookRelayOperation"
          ),
          metadata: {},
          name: "useVideoPlayerWatchAndScrollControlNUXQuery",
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
  "CometDensityAwarenessContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = !1;
    c = a.createContext(b);
    g["default"] = c;
  },
  98
);
__d(
  "encodeNUXIDForRelay",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = "NUX_ID:";
    function a(a) {
      return typeof a === "string" && a.startsWith(g)
        ? { nuxID: Number(a.replace(g, "")), relayID: a }
        : { nuxID: Number(a), relayID: g + a };
    }
    f["default"] = a;
  },
  66
);
__d(
  "CometDismissFBNuxMutation",
  ["CometDismissFBNuxMutation.graphql", "CometRelay", "encodeNUXIDForRelay"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h !== void 0 ? h : (h = b("CometDismissFBNuxMutation.graphql"));
    function a(a, b, e, f) {
      b = c("encodeNUXIDForRelay")(b);
      var g = b.nuxID;
      b = b.relayID;
      return d("CometRelay").commitMutation(a, {
        mutation: i,
        onCompleted: e,
        onError: f,
        optimisticResponse: {
          nux_dismiss: { __typename: "NUX", id: b, should_show: !1 },
        },
        variables: { nux_id_input: g },
      });
    }
    g.commit = a;
  },
  98
);
__d(
  "CometLogImpressionFBNuxMutation",
  [
    "CometLogImpressionFBNuxMutation.graphql",
    "CometLogImpressionFBNuxMutationWithNoImpressionLimitMutation.graphql",
    "CometRelay",
    "encodeNUXIDForRelay",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = h !== void 0 ? h : (h = b("CometLogImpressionFBNuxMutation.graphql"));
    function a(a, b, e, f) {
      b = c("encodeNUXIDForRelay")(b);
      b = b.nuxID;
      return d("CometRelay").commitMutation(a, {
        mutation: j,
        onCompleted: e,
        onError: f,
        variables: { nux_id: b },
      });
    }
    var k =
      i !== void 0
        ? i
        : (i = b(
            "CometLogImpressionFBNuxMutationWithNoImpressionLimitMutation.graphql"
          ));
    function e(a, b, e, f) {
      b = c("encodeNUXIDForRelay")(b);
      b = b.nuxID;
      return d("CometRelay").commitMutation(a, {
        mutation: k,
        onCompleted: e,
        onError: f,
        variables: { nux_id: b },
      });
    }
    g.commit = a;
    g.commitNuxWithNoImpressionLimit = e;
  },
  98
);
__d(
  "BaseSwitch.react",
  ["BaseFocusRing.react", "BaseInput.react", "BaseView.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        switch: {
          cursor: "x1ypdohk",
          height: "x5yr21d",
          marginTop: "xdj266r",
          marginEnd: "x11i5rnm",
          marginBottom: "xat24cr",
          marginStart: "x1mh8g0r",
          opacity: "x1w3u9th",
          outline: "x1a2a7pz",
          paddingTop: "xexx8yu",
          paddingEnd: "x4uap5",
          paddingBottom: "x18d9i69",
          paddingStart: "xkhd6sd",
          position: "x10l6tqk",
          start: "x17qophe",
          top: "x13vifvy",
          width: "xh8yej3",
          $$css: !0,
        },
        wrapper: { position: "x1n2onr6", $$css: !0 },
      };
    function a(a, b) {
      var d = a.children,
        e = a.suppressFocusRing,
        f = a.testid,
        g = a.xstyle,
        j = babelHelpers.objectWithoutPropertiesLoose(a, [
          "children",
          "suppressFocusRing",
          "testid",
          "xstyle",
        ]);
      return h.jsx(c("BaseFocusRing.react"), {
        suppressFocusRing: e,
        children: function (a) {
          return h.jsxs(c("BaseView.react"), {
            testid: void 0,
            xstyle: [i.wrapper, a, g],
            children: [
              d,
              h.jsx(
                c("BaseInput.react"),
                babelHelpers["extends"]({}, j, {
                  "aria-checked": (a = j.checked) != null ? a : !1,
                  ref: b,
                  role: "switch",
                  type: "checkbox",
                  xstyle: i["switch"],
                })
              ),
            ],
          });
        },
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.memo(h.forwardRef(a));
    g["default"] = b;
  },
  98
);
__d(
  "BaseStyledSwitch.react",
  [
    "BaseRow.react",
    "BaseRowItem.react",
    "BaseSwitch.react",
    "BaseView.react",
    "Locale",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("Locale").isRTL(),
      j = {
        alignIcon: { alignItems: "x6s0dn4", $$css: !0 },
        background: {
          backgroundColor: "xvs79uf",
          bottom: "x1ey2m1c",
          boxSizing: "x9f619",
          end: "xds687c",
          opacity: "xg01cxk",
          pointerEvents: "x47corl",
          position: "x10l6tqk",
          start: "x17qophe",
          top: "x13vifvy",
          transitionDuration: "x1eub6wo",
          transitionProperty: "x19991ni",
          transitionTimingFunction: "x1d72o",
          $$css: !0,
        },
        backgroundActive: {
          opacity: "x1hc1fzr",
          transitionDuration: "xii2z7h",
          transitionTimingFunction: "x1r7x56h",
          $$css: !0,
        },
        disabled: {
          opacity: "xti2d7y",
          transitionDuration: "xii2z7h",
          transitionTimingFunction: "x1r7x56h",
          $$css: !0,
        },
        innerShadow: {
          borderTopStartRadius: "xhw592a",
          borderTopEndRadius: "xwihvcr",
          borderBottomEndRadius: "x7wuybg",
          borderBottomStartRadius: "xb9tvrk",
          boxShadow: "xzdp66v",
          height: "x1fgtraw",
          width: "xvni27",
          $$css: !0,
        },
        slider: {
          backgroundColor: "x14hiurz",
          borderTopStartRadius: "xyi19xy",
          borderTopEndRadius: "x1ccrb07",
          borderBottomEndRadius: "xtf3nb5",
          borderBottomStartRadius: "x1pc53ja",
          boxShadow: "x3bazc0",
          height: "xxk0z11",
          pointerEvents: "x47corl",
          position: "x10l6tqk",
          start: "xb1c2wi",
          top: "xs7f9wi",
          transitionDuration: "x1eub6wo",
          transitionProperty: "x11xpdln",
          transitionTimingFunction: "x1d72o",
          width: "xvy4d1p",
          $$css: !0,
        },
        sliderActive: {
          transitionDuration: "xii2z7h",
          transitionTimingFunction: "x1r7x56h",
          $$css: !0,
        },
        sliderActiveLeft: { transform: "x92xnlw", $$css: !0 },
        sliderActiveLeftSmall: { transform: "x13gy369", $$css: !0 },
        sliderActiveRight: { transform: "x13t98kf", $$css: !0 },
        sliderActiveRightSmall: { transform: "x13n5tbt", $$css: !0 },
        sliderIconContainer: { height: "x5yr21d", width: "xh8yej3", $$css: !0 },
        sliderSmall: { height: "x1qx5ct2", width: "xw4jnvo", $$css: !0 },
        switch: {
          backgroundColor: "x14nfmen",
          borderTopStartRadius: "xhw592a",
          borderTopEndRadius: "xwihvcr",
          borderBottomEndRadius: "x7wuybg",
          borderBottomStartRadius: "xb9tvrk",
          boxSizing: "x9f619",
          display: "x1rg5ohu",
          height: "x1fgtraw",
          opacity: "x1hc1fzr",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          paddingTop: "xexx8yu",
          paddingEnd: "x4uap5",
          paddingBottom: "x18d9i69",
          paddingStart: "xkhd6sd",
          position: "x1n2onr6",
          transitionDuration: "x1eub6wo",
          transitionProperty: "x19991ni",
          transitionTimingFunction: "x1d72o",
          width: "xvni27",
          $$css: !0,
        },
        switchSmall: {
          borderTopStartRadius: "xyi19xy",
          borderTopEndRadius: "x1ccrb07",
          borderBottomEndRadius: "xtf3nb5",
          borderBottomStartRadius: "x1pc53ja",
          height: "xxk0z11",
          width: "x187nhsf",
          $$css: !0,
        },
      };
    function a(a, b) {
      var d,
        e = a.disabled;
      e = e === void 0 ? !1 : e;
      var f = a.icon,
        g = a.onClick,
        k = a.onValueChange,
        l = a.size;
      l = l === void 0 ? "medium" : l;
      var m = a.suppressFocusRing,
        n = a.tabIndex,
        o = a.testid;
      o = a.value;
      var p = a.xstyle;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "disabled",
        "icon",
        "onClick",
        "onValueChange",
        "size",
        "suppressFocusRing",
        "tabIndex",
        "testid",
        "value",
        "xstyle",
      ]);
      l = l === "small";
      return h.jsx(
        c("BaseSwitch.react"),
        babelHelpers["extends"]({}, a, {
          checked: o,
          disabled: e,
          onClick: g,
          onValueChange: k,
          ref: b,
          suppressFocusRing: m,
          tabIndex: n,
          testid: void 0,
          xstyle: [j["switch"], l && j.switchSmall, e && j.disabled, p],
          children: h.jsxs(c("BaseView.react"), {
            xstyle: [j.innerShadow, l && j.switchSmall, p],
            children: [
              h.jsx(c("BaseView.react"), {
                xstyle: [j.background, o && j.backgroundActive],
              }),
              h.jsx(c("BaseView.react"), {
                xstyle: [
                  j.slider,
                  l && j.sliderSmall,
                  o && j.sliderActive,
                  o &&
                    (i
                      ? [j.sliderActiveLeft, l && j.sliderActiveLeftSmall]
                      : [j.sliderActiveRight, l && j.sliderActiveRightSmall]),
                ],
                children:
                  f == null
                    ? null
                    : h.jsx(c("BaseRow.react"), {
                        align: "center",
                        expanding: !0,
                        verticalAlign: "center",
                        xstyle: j.sliderIconContainer,
                        children: h.jsx(c("BaseRowItem.react"), {
                          expanding: !0,
                          verticalAlign: "center",
                          xstyle: j.alignIcon,
                          children: f,
                        }),
                      }),
              }),
            ],
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
  "BaseTheme.react",
  ["BaseThemeProvider.react", "BaseView.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a, b) {
      var d = a.config,
        e = a.displayMode,
        f = a.style,
        g = a.xstyle,
        i = babelHelpers.objectWithoutPropertiesLoose(a, [
          "config",
          "displayMode",
          "style",
          "xstyle",
        ]);
      return h.jsx(c("BaseThemeProvider.react"), {
        config: d,
        displayMode: e,
        children: function (a, d) {
          return h.jsx(
            c("BaseView.react"),
            babelHelpers["extends"]({}, i, {
              ref: b,
              style: babelHelpers["extends"]({}, d, f),
              xstyle: [a, g],
            })
          );
        },
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "BaseToast.react",
  [
    "BaseInlinePressable.react",
    "BaseTheme.react",
    "BaseView.react",
    "FocusRegion.react",
    "focusScopeQueries",
    "react",
    "useCurrentDisplayMode",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useId,
      j = b.useMemo,
      k = {
        dark: "__fb-dark-mode ",
        light: "__fb-light-mode ",
        type: "CLASSNAMES",
      },
      l = {
        item: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          paddingBottom: "x19yoh24",
          paddingEnd: "xpowjs8",
          paddingStart: "xrxijuk",
          paddingTop: "x6enp1t",
          $$css: !0,
        },
        itemText: { flexGrow: "x1iyjqo2", $$css: !0 },
        link: { wordBreak: "xdnwjd9", $$css: !0 },
        root: {
          alignItems: "x6s0dn4",
          backgroundColor: "x1wkzo03",
          borderTopStartRadius: "x1192kqh",
          borderTopEndRadius: "xjfsc2c",
          borderBottomEndRadius: "xg8fqjl",
          borderBottomStartRadius: "x1kdh5me",
          boxShadow: "xi1c1fh",
          display: "x78zum5",
          flexShrink: "x2lah0s",
          maxWidth: "x1cs6qxi",
          minWidth: "x1hqenl9",
          paddingStart: "xuv3zuj",
          paddingEnd: "xd3owfx",
          paddingTop: "x192rfv7",
          paddingBottom: "x13jxccy",
          $$css: !0,
        },
        rootFullWidth: { width: "xh8yej3", $$css: !0 },
      };
    function a(a) {
      var b = a.action,
        e = a.addOnStart,
        f = a.closeButton,
        g = a.linkWrapper,
        m = a.message,
        n = a.onDismiss,
        o = a.size;
      o = o === void 0 ? "full-width" : o;
      var p = a.testid;
      p = a.toastRef;
      a = a.useInvertedDisplayMode;
      a = a === void 0 ? !0 : a;
      var q = c("useCurrentDisplayMode")();
      q = q === "dark" ? "light" : "dark";
      var r = i(),
        s = j(
          function () {
            if (b != null) return {};
            else return { "aria-atomic": !0, role: "alert" };
          },
          [b]
        );
      e = h.jsxs(h.Fragment, {
        children: [
          e != null &&
            h.jsx(c("BaseView.react"), { xstyle: l.item, children: e }),
          h.jsx(
            c("BaseView.react"),
            babelHelpers["extends"]({ xstyle: [l.item, l.itemText] }, s, {
              children: m({ toastMessageId: r }),
            })
          ),
          b != null &&
            h.jsx(d("FocusRegion.react").FocusRegion, {
              autoFocusQuery: d("focusScopeQueries").tabbableScopeQuery,
              children: h.jsx(c("BaseView.react"), {
                "aria-labelledby": r,
                role: "group",
                xstyle: l.item,
                children:
                  b.element != null
                    ? b.element
                    : b.labelRenderer &&
                      h.jsx(c("BaseInlinePressable.react"), {
                        onPress: function (a) {
                          n(), b.onPress(a);
                        },
                        testid: void 0,
                        xstyle: l.link,
                        children: b.labelRenderer(b.label),
                      }),
              }),
            }),
          f != null &&
            h.jsx(c("BaseView.react"), { xstyle: l.item, children: f }),
        ],
      });
      e = g != null ? g(e) : e;
      return a
        ? h.jsx(c("BaseTheme.react"), {
            config: k,
            displayMode: q,
            ref: p,
            testid: void 0,
            xstyle: [l.root, o === "full-width" && l.rootFullWidth],
            children: e,
          })
        : h.jsx(c("BaseView.react"), {
            ref: p,
            testid: void 0,
            xstyle: [l.root, o === "full-width" && l.rootFullWidth],
            children: e,
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "PagesCometLinkContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({ shouldHostInWatch: !1 });
    g["default"] = b;
  },
  98
);
__d(
  "ProfileCometContextualProfileGating",
  ["gkx"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      var a;
      return (a = c("gkx")("1183591")) != null ? a : !1;
    }
    g.canViewCometContextualProfile = a;
  },
  98
);
__d(
  "RecoverableViolation.react",
  ["react", "recoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useEffect,
      i = b.useRef;
    function a(a) {
      var b = a.errorMessage,
        d = a.errorObject,
        e = a.projectName,
        f = i(!1);
      h(function () {
        f.current || (c("recoverableViolation")(b, e, d), (f.current = !0));
      });
      return null;
    }
    g["default"] = a;
  },
  98
);
__d(
  "XCometStoriesControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/stories/{?bucket_id}/{?card_id}/",
      Object.freeze({ view_single: !1 }),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "XCometVideoHomePlaylistControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")("/watch/{?idorvanity}/", Object.freeze({}), void 0);
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "useActorStoryStatus",
  ["CometRelay", "useActorStoryStatus_actor.graphql"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = { status: "none" };
    function a(a) {
      var c, e, f;
      a = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("useActorStoryStatus_actor.graphql")),
        a
      );
      if (a == null) return i;
      var g;
      switch (a.__typename) {
        case "Page":
          g = a.pages_story_bucket_v2;
          break;
        case "User":
          a = (a = a.story_bucket) == null ? void 0 : a.nodes;
          g = a ? a[0] : null;
          break;
        default:
          return i;
      }
      if (g == null) return i;
      a = g.id;
      c = (c = g.first_story_to_show) == null ? void 0 : c.id;
      if (a == null || c == null) return i;
      e =
        (e = g.first_story_to_show) == null
          ? void 0
          : (e = e.story_card_seen_state) == null
          ? void 0
          : e.is_seen_by_viewer;
      f = (f = g.should_show_close_friend_badge) != null ? f : !1;
      if (e === !1)
        return {
          firstBucketId: a,
          firstCardId: c,
          shouldShowCloseFriendsBadge: f,
          status: "unseen",
        };
      else if (e === !0)
        return {
          firstBucketId: a,
          firstCardId: c,
          shouldShowCloseFriendsBadge: f,
          status: "seen",
        };
      else return i;
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometProfilePhotoForActor.react",
  [
    "ActorHovercard.react",
    "CometProfilePhoto.react",
    "CometProfilePhotoForActor_actor.graphql",
    "CometRelay",
    "PagesCometLinkContext",
    "ProfileCometContextualProfileGating",
    "ProfileCometLinkContext",
    "RecoverableViolation.react",
    "WebPixelRatio",
    "XCometContextualProfileControllerRouteBuilder",
    "XCometStoriesControllerRouteBuilder",
    "XCometVideoHomePlaylistControllerRouteBuilder",
    "react",
    "useActorStoryStatus",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    e = d("react");
    var j = e.useContext,
      k = e.useMemo;
    function a(a) {
      var e = a.actor,
        f = a.addOn,
        g = a.enableStoryStatus,
        l = g === void 0 ? !0 : g;
      a.entrypoint;
      var m = a.linkProps;
      g = a.noHovercard;
      g = g === void 0 ? !1 : g;
      var n = a.noLink,
        o = n === void 0 ? !1 : n,
        p = a.onPress;
      n = a.showHovercardOnClick;
      n = n === void 0 ? !1 : n;
      var q = a.size,
        r = babelHelpers.objectWithoutPropertiesLoose(a, [
          "actor",
          "addOn",
          "enableStoryStatus",
          "entrypoint",
          "linkProps",
          "noHovercard",
          "noLink",
          "onPress",
          "showHovercardOnClick",
          "size",
        ]);
      a = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("CometProfilePhotoForActor_actor.graphql")),
        e
      );
      e =
        (e =
          (e = a.commerce_profile_picture) != null ? e : a.profile_picture) !=
        null
          ? e
          : {};
      var s = a.profile_video != null ? a.profile_video : void 0,
        t = e.height,
        u = e.scale,
        v = e.uri,
        w = e.width,
        x = a.availability;
      e = a.id;
      var y = a.name,
        z = j(c("ProfileCometLinkContext"));
      z = z.groupID;
      var A = j(c("PagesCometLinkContext"));
      A = A.shouldHostInWatch;
      var B = a.url,
        C,
        D = c("useActorStoryStatus")(a),
        E = !1;
      l && D.status !== "none"
        ? ((B = c("XCometStoriesControllerRouteBuilder").buildURL({
            bucket_id: D.firstBucketId,
            card_id: D.firstCardId,
            view_single: !1,
          })),
          (E = D.shouldShowCloseFriendsBadge),
          (C = { target: m == null ? void 0 : m.target, url: B }))
        : z != null &&
          d(
            "ProfileCometContextualProfileGating"
          ).canViewCometContextualProfile() &&
          e != null &&
          a.__typename !== "Group"
        ? ((B = c("XCometContextualProfileControllerRouteBuilder").buildURL({
            group_idorvanity: z,
            member_id: e,
          })),
          (C = { target: m == null ? void 0 : m.target, url: B }))
        : A === !0 &&
          ((B = c("XCometVideoHomePlaylistControllerRouteBuilder").buildURL({
            idorvanity: e,
            tab: "home",
          })),
          (C = { target: m == null ? void 0 : m.target, url: B }));
      var F = k(
        function () {
          var a;
          return {
            addOn:
              (a = f) != null
                ? a
                : x === "ACTIVE"
                ? { type: "availabilityBadge" }
                : void 0,
            "aria-label": (a = y) != null ? a : "",
            linkProps:
              m != null && m.url != null
                ? m
                : o
                ? void 0
                : (a = C) != null
                ? a
                : { target: m == null ? void 0 : m.target, url: B },
            onPress: p,
            profileVideo: s,
            shouldShowCloseFriendsBadge: E,
            size: q,
            source: {
              height: (a = t) != null ? a : q,
              scale: (a = u) != null ? a : d("WebPixelRatio").get(),
              uri: (a = v) != null ? a : "",
              width: (a = w) != null ? a : q,
            },
            storyStatus: l ? D.status : "none",
          };
        },
        [f, x, y, m, o, C, B, p, s, q, t, u, E, v, w, D.status, l]
      );
      if (v == null || e == null || y == null || F.source.uri === "") {
        return i.jsx(c("RecoverableViolation.react"), {
          errorMessage:
            "Missing fields for CometProfilePhotoForActor, id: " +
            ((a = e) != null ? a : "null"),
          projectName: "comet_ui",
        });
      }
      return g
        ? i.jsx(c("CometProfilePhoto.react"), babelHelpers["extends"]({}, r, F))
        : i.jsx(c("ActorHovercard.react"), {
            actorID: e,
            "aria-hidden": r["aria-hidden"],
            showHovercardOnClick: n,
            children: function (a) {
              return i.jsx(
                c("CometProfilePhoto.react"),
                babelHelpers["extends"]({ ref: a }, r, F)
              );
            },
          });
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometProgressSkittleIndeterminate.react",
  ["CometProgressRingIndeterminate.react", "react", "stylex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        36: { height: "xc9qbxq", width: "x14qfxbe", $$css: !0 },
        48: { height: "xsdox4t", width: "x1useyqa", $$css: !0 },
        circle: {
          borderTopStartRadius: "x14yjl9h",
          borderTopEndRadius: "xudhj91",
          borderBottomEndRadius: "x18nykt9",
          borderBottomStartRadius: "xww2gxu",
          $$css: !0,
        },
        gray: { backgroundColor: "x1qhmfi1", $$css: !0 },
        skittle: {
          alignItems: "x6s0dn4",
          borderTopWidth: "x972fbf",
          borderEndWidth: "xcfux6l",
          borderBottomWidth: "x1qhh985",
          borderStartWidth: "xm0m39n",
          boxSizing: "x9f619",
          display: "x3nfvp2",
          justifyContent: "xl56j7k",
          position: "x1n2onr6",
          $$css: !0,
        },
      };
    function a(a) {
      a = a.size;
      a = a === void 0 ? 36 : a;
      return h.jsx("div", {
        className: c("stylex")(i.circle, i.skittle, i.gray, i[a]),
        children: h.jsx(c("CometProgressRingIndeterminate.react"), {
          color: "disabled",
          size: a === 48 ? 32 : 20,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometSkittleEmoji.react",
  ["CometEmoji.react", "EmojiRenderer", "react", "stylex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        circle: {
          borderTopStartRadius: "x14yjl9h",
          borderTopEndRadius: "xudhj91",
          borderBottomEndRadius: "x18nykt9",
          borderBottomStartRadius: "xww2gxu",
          $$css: !0,
        },
        roundedRect: {
          borderTopStartRadius: "x1lq5wgf",
          borderTopEndRadius: "xgqcy7u",
          borderBottomEndRadius: "x30kzoy",
          borderBottomStartRadius: "x9jhf4c",
          $$css: !0,
        },
        skittle: {
          alignItems: "x6s0dn4",
          borderTopWidth: "x972fbf",
          borderEndWidth: "xcfux6l",
          borderBottomWidth: "x1qhh985",
          borderStartWidth: "xm0m39n",
          boxSizing: "x9f619",
          display: "x3nfvp2",
          justifyContent: "xl56j7k",
          position: "x1n2onr6",
          $$css: !0,
        },
      },
      j = {
        accent: { backgroundColor: "xwnonoy", $$css: !0 },
        blue: { backgroundColor: "x11goek", $$css: !0 },
        cherry: { backgroundColor: "x1tzrqqp", $$css: !0 },
        grape: { backgroundColor: "x17f3y5z", $$css: !0 },
        gray: { backgroundColor: "x1qhmfi1", $$css: !0 },
        green: { backgroundColor: "xv9rvxn", $$css: !0 },
        lemon: { backgroundColor: "xacajkf", $$css: !0 },
        lightblue: { backgroundColor: "x1hr4nm9", $$css: !0 },
        lime: { backgroundColor: "xbmc1ew", $$css: !0 },
        pink: { backgroundColor: "x1qrsksh", $$css: !0 },
        red: { backgroundColor: "x1ciooss", $$css: !0 },
        seafoam: { backgroundColor: "x1tw9p8u", $$css: !0 },
        teal: { backgroundColor: "x1emf0wh", $$css: !0 },
        tomato: { backgroundColor: "xqjkjv5", $$css: !0 },
        transparent: { backgroundColor: "xjbqb8w", $$css: !0 },
        white: { backgroundColor: "x14hiurz", $$css: !0 },
      },
      k = {
        24: { height: "xxk0z11", width: "xvy4d1p", $$css: !0 },
        36: { height: "xc9qbxq", width: "x14qfxbe", $$css: !0 },
        40: { height: "x1vqgdyp", width: "x100vrsf", $$css: !0 },
        48: { height: "xsdox4t", width: "x1useyqa", $$css: !0 },
        56: { height: "xnnlda6", width: "x15yg21f", $$css: !0 },
        60: { height: "xng8ra", width: "x1247r65", $$css: !0 },
      };
    function a(a) {
      var b = a.color,
        e = a.emoji,
        f = a.emojiSize,
        g = a.shape;
      g = g === void 0 ? "circle" : g;
      a = a.size;
      var l = d("EmojiRenderer").parse(e);
      return h.jsx("div", {
        className: c("stylex")(
          g === "circle" && i.circle,
          g === "roundedRect" && i.roundedRect,
          i.skittle,
          j[b],
          k[a]
        ),
        children: h.jsx(c("CometEmoji.react"), {
          emoji: l[0] ? l[0].emoji : [e],
          size: f,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "MWJewelThreadFacepile.react",
  [
    "CometProfilePhotoAvailabilityBadge.react",
    "CometProfilePhotoLastActiveTimeBadge.react",
    "CometSSRReplaceContentOnHydrationAndBreakEventReplaying.react",
    "TetraProfilePhoto.react",
    "profilePhotoUtils",
    "react",
    "stylex",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        badge: { position: "x10l6tqk", $$css: !0 },
        badgeWithLastActiveTime: {
          bottom: "x1ey2m1c",
          display: "x78zum5",
          end: "xds687c",
          justifyContent: "x13a6bvl",
          start: "x17qophe",
          $$css: !0,
        },
        primaryPhoto: {
          bottom: "x1ey2m1c",
          position: "x10l6tqk",
          start: "x17qophe",
          $$css: !0,
        },
        root: { position: "x1n2onr6", $$css: !0 },
        secondaryPhoto: {
          end: "xds687c",
          position: "x10l6tqk",
          top: "x13vifvy",
          $$css: !0,
        },
        withCircleBorder: {
          borderTop: "xu3qyrb",
          borderEnd: "x5azwcr",
          borderBottom: "xssttbw",
          borderStart: "xt910rc",
          borderTopStartRadius: "x14yjl9h",
          borderTopEndRadius: "xudhj91",
          borderBottomEndRadius: "x18nykt9",
          borderBottomStartRadius: "xww2gxu",
          $$css: !0,
        },
      },
      j = {
        24: { height: "xxk0z11", width: "xvy4d1p", $$css: !0 },
        36: { height: "xc9qbxq", width: "x14qfxbe", $$css: !0 },
        40: { height: "x1vqgdyp", width: "x100vrsf", $$css: !0 },
        48: { height: "xsdox4t", width: "x1useyqa", $$css: !0 },
        56: { height: "xnnlda6", width: "x15yg21f", $$css: !0 },
        60: { height: "xng8ra", width: "x1247r65", $$css: !0 },
        80: { height: "xwzfr38", width: "x1dmp6jm", $$css: !0 },
      };
    function k(a) {
      switch (a) {
        case 24:
          return 16;
        case 36:
          return 24;
        case 40:
          return 28;
        case 48:
          return 32;
        case 56:
          return 36;
        case 60:
          return 40;
        case 80:
          return 56;
        default:
          a;
      }
      throw c("unrecoverableViolation")(
        "Invalid size passed to MWJewelThreadfacepile",
        "comet_ui"
      );
    }
    function a(a) {
      var b = a.addOn,
        e = a.primaryPhoto,
        f = a.secondaryPhoto;
      a = a.size;
      var g = k(a),
        l = d("profilePhotoUtils").getBadgeSizeAndStrokeWidth(
          a,
          "availabilityBadge"
        );
      l = l[0];
      var m = d("profilePhotoUtils").getBadgePosition(a / 2),
        n = (b == null ? void 0 : b.type) === "lastActiveTimeBadge" && a > 28,
        o = e.withBorder;
      e = babelHelpers.objectWithoutPropertiesLoose(e, ["withBorder"]);
      l =
        (b == null ? void 0 : b.type) === "availabilityBadge"
          ? h.jsx("div", {
              className: "x10l6tqk",
              style: m,
              children: h.jsx(c("CometProfilePhotoAvailabilityBadge.react"), {
                pressed: !1,
                size: l,
              }),
            })
          : (b == null ? void 0 : b.type) === "lastActiveTimeBadge"
          ? h.jsx("div", {
              className: c("stylex")(i.badge, n && i.badgeWithLastActiveTime),
              style: n ? void 0 : m,
              children: h.jsx(c("CometProfilePhotoLastActiveTimeBadge.react"), {
                border: b.border,
                pressed: !1,
                time: b.time,
              }),
            })
          : (b == null ? void 0 : b.type) === "trigger"
          ? h.jsx("div", {
              className: "x10l6tqk x1ey2m1c x78zum5 xds687c x13a6bvl x17qophe",
              children: b.icon,
            })
          : null;
      return h.jsxs("div", {
        className: c("stylex")(i.root, j[String(a)]),
        children: [
          h.jsx("div", {
            className: "xds687c x10l6tqk x13vifvy",
            children: h.jsx(
              c("TetraProfilePhoto.react"),
              babelHelpers["extends"]({}, f, { shape: "circle", size: g })
            ),
          }),
          h.jsx("div", {
            className: c("stylex")(
              i.primaryPhoto,
              o === !0 && i.withCircleBorder
            ),
            children: h.jsx(
              c("TetraProfilePhoto.react"),
              babelHelpers["extends"]({}, e, { shape: "circle", size: g })
            ),
          }),
          h.jsx(
            c("CometSSRReplaceContentOnHydrationAndBreakEventReplaying.react"),
            { children: l }
          ),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometSwitch.react",
  ["BaseStyledSwitch.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        toggle: {
          marginTop: "xdj266r",
          marginEnd: "x11i5rnm",
          marginBottom: "x4vbgl9",
          marginStart: "x1mh8g0r",
          $$css: !0,
        },
      };
    function a(a, b) {
      var d,
        e = a.children,
        f = a.disabled;
      f = f === void 0 ? !1 : f;
      var g = a.size;
      g = g === void 0 ? "medium" : g;
      var j = a.testid;
      j = a.xstyle;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "children",
        "disabled",
        "size",
        "testid",
        "xstyle",
      ]);
      return h.jsx(
        c("BaseStyledSwitch.react"),
        babelHelpers["extends"]({}, a, {
          "aria-label": e,
          disabled: f,
          ref: b,
          size: g,
          testid: void 0,
          xstyle: [i.toggle, j],
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
  "getListCellAddOn.react",
  [
    "fbt",
    "ix",
    "CometIcon.react",
    "CometSwitch.react",
    "Locale",
    "TetraButton.react",
    "fbicon",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = d("Locale").isRTL(),
      l = function (a, b) {
        var e = a.on,
          f = a.onPress,
          g = a.testOnly_pressed;
        a.type;
        var h = babelHelpers.objectWithoutPropertiesLoose(a, [
          "on",
          "onPress",
          "testOnly_pressed",
          "type",
        ]);
        return j.jsx(
          c("CometIcon.react"),
          babelHelpers["extends"]({}, h, {
            "aria-checked": f != null ? e : void 0,
            color: b ? "disabled" : e ? "highlight" : "secondary",
            disabled: b,
            hideHoverOverlay: !0,
            icon: a.on
              ? d("fbicon")._(i("484757"), 20)
              : d("fbicon")._(i("659288"), 20),
            onPress: f,
            role: f != null ? "checkbox" : void 0,
            testOnly_pressed: g,
          })
        );
      },
      m = function (a, b) {
        var e = a.on,
          f = a.onPress,
          g = a.testOnly_pressed;
        a.type;
        a = babelHelpers.objectWithoutPropertiesLoose(a, [
          "on",
          "onPress",
          "testOnly_pressed",
          "type",
        ]);
        return j.jsx(
          c("CometIcon.react"),
          babelHelpers["extends"]({}, a, {
            "aria-checked": f != null ? e : void 0,
            color: b ? "disabled" : e ? "highlight" : "secondary",
            disabled: b,
            hideHoverOverlay: !0,
            icon: e
              ? d("fbicon")._(i("621399"), 20)
              : d("fbicon")._(i("545517"), 20),
            onPress: f,
            role: f != null ? "radio" : void 0,
            testOnly_pressed: g,
          })
        );
      },
      n = function (a, b, e) {
        a.text;
        a.type;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["text", "type"]);
        e === 3
          ? (e = k
              ? d("fbicon")._(i("492521"), 24)
              : d("fbicon")._(i("492575"), 24))
          : (e = k
              ? d("fbicon")._(i("492518"), 20)
              : d("fbicon")._(i("492572"), 20));
        return j.jsx(
          c("CometIcon.react"),
          babelHelpers["extends"]({}, a, {
            color: b ? "disabled" : "secondary",
            disabled: b,
            icon: e,
          })
        );
      },
      o = function (a, b, e) {
        a.children;
        e = a.onPress;
        var f = a.open;
        a.type;
        a = babelHelpers.objectWithoutPropertiesLoose(a, [
          "children",
          "onPress",
          "open",
          "type",
        ]);
        return j.jsx(
          c("CometIcon.react"),
          babelHelpers["extends"]({}, a, {
            color: b ? "disabled" : "secondary",
            disabled: b,
            icon: f
              ? d("fbicon")._(i("505565"), 20)
              : d("fbicon")._(i("492454"), 20),
            onPress: e,
          })
        );
      },
      p = function (a, b) {
        var d = a.color,
          e = a.icon,
          f = a.onHoverIn,
          g = a.onHoverOut,
          h = a.onPress,
          i = a.onPressIn,
          k = a.testOnly_pressed;
        a.type;
        a = babelHelpers.objectWithoutPropertiesLoose(a, [
          "color",
          "icon",
          "onHoverIn",
          "onHoverOut",
          "onPress",
          "onPressIn",
          "testOnly_pressed",
          "type",
        ]);
        d = (d = d) != null ? d : "primary";
        return j.jsx(
          c("CometIcon.react"),
          babelHelpers["extends"]({}, a, {
            color: b ? "disabled" : d,
            disabled: b,
            hideHoverOverlay: !0,
            icon: e,
            onHoverIn: f,
            onHoverOut: g,
            onPress: h,
            onPressIn: i,
            testOnly_pressed: k,
          })
        );
      },
      q = function (a, b) {
        var d = a.labelIsHidden;
        d = d === void 0 ? !1 : d;
        var e = a.type;
        a = babelHelpers.objectWithoutPropertiesLoose(a, [
          "labelIsHidden",
          "type",
        ]);
        e = e === "primary-button" ? "primary" : "secondary";
        return j.createElement(
          c("TetraButton.react"),
          d
            ? babelHelpers["extends"](
                { disabled: b, labelIsHidden: !0, type: e },
                a
              )
            : babelHelpers["extends"]({ disabled: b, type: e }, a)
        );
      },
      r = function (a, b) {
        var d = a.onChange,
          e = a.size;
        a.type;
        var f = a.value;
        a = babelHelpers.objectWithoutPropertiesLoose(a, [
          "onChange",
          "size",
          "type",
          "value",
        ]);
        return j.jsx(
          c("CometSwitch.react"),
          babelHelpers["extends"](
            {
              disabled: b,
              onClick: d != null ? d : function () {},
              size: e,
              tabIndex: -1,
              value: f,
            },
            a,
            {
              children:
                a.disabled === !0
                  ? h._("D\u00e9sactiv\u00e9")
                  : h._("Activ\u00e9"),
            }
          )
        );
      },
      s = function (a, b) {
        var e = a.onPress,
          f = a.type;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["onPress", "type"]);
        return j.jsx(
          c("CometIcon.react"),
          babelHelpers["extends"]({}, a, {
            color: b ? "disabled" : "secondary",
            disabled: b,
            icon:
              f === "more"
                ? d("fbicon")._(i("484391"), 24)
                : d("fbicon")._(i("478237"), 16),
            onPress: e,
          })
        );
      };
    a = function (a, b, c) {
      switch (a.type) {
        case "checkbox":
          return l(a, b);
        case "radio":
          return m(a, b);
        case "disclosure":
          return n(a, b, c);
        case "expander":
          return o(a, b, c);
        case "icon":
          return p(a, b);
        case "primary-button":
          return q(a, b);
        case "secondary-button":
          return q(a, b);
        case "switch":
          return r(a, b);
        case "more":
          return s(a, b);
        case "close":
          return s(a, b);
        case "body":
          return a.addOn;
      }
    };
    g.getEndAddOn = a;
  },
  98
);
__d(
  "CometListCellStrict.react",
  [
    "CometCompositeStructureContext",
    "CometDensityAwarenessContext",
    "CometDensityModeContext",
    "CometFocusGroupContext",
    "CometFocusTableContext",
    "CometIcon.react",
    "CometImageFromIXValueRelayWrapper.react",
    "CometPressable.react",
    "CometProfilePhoto.react",
    "CometProfilePhotoForActor.react",
    "CometProgressSkittleIndeterminate.react",
    "CometSkittleEmoji.react",
    "CometSkittleIcon.react",
    "CometVisualCompletionAttributes",
    "MWJewelThreadFacepile.react",
    "TetraText.react",
    "TetraTextPairing.react",
    "getItemRoleFromCompositeRole",
    "getListCellAddOn.react",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useContext,
      j = {
        addOn: {
          alignItems: "x6s0dn4",
          display: "x78zum5",
          flexDirection: "x1q0g3np",
          $$css: !0,
        },
        addOnWithExpander: { marginEnd: "x1emribx", $$css: !0 },
        addOnWithIcon: { display: "x78zum5", $$css: !0 },
        addOnWithText: { marginStart: "xsgj6o6", $$css: !0 },
        bottomAddOn: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          marginEnd: "x12rz0ws",
          marginStart: "x16hk5td",
          $$css: !0,
        },
        bottomAddOnInner: { maxWidth: "x193iq5w", $$css: !0 },
        bottomAddOnOverrideRow: {
          flexDirection: "x1q0g3np",
          marginEnd: "x11i5rnm",
          marginStart: "x1mh8g0r",
          paddingTop: "x1yrsyyn",
          $$css: !0,
        },
        bottomAddOnWithFacepile: { marginStart: "x169t7cy", $$css: !0 },
        bottomDivider: {
          backgroundColor: "x14nfmen",
          bottom: "x1ey2m1c",
          end: "xds687c",
          height: "xjm9jq1",
          position: "x10l6tqk",
          start: "x17qophe",
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
          boxSizing: "x9f619",
          display: "x78zum5",
          flexBasis: "x1r8uery",
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
          paddingEnd: "x4uap5",
          paddingStart: "xkhd6sd",
          paddingTop: "xz9dl7a",
          paddingBottom: "xsag5q8",
          position: "x1n2onr6",
          zIndex: "x1ja2u2z",
          $$css: !0,
        },
        contentContainer: {
          alignItems: "x6s0dn4",
          alignSelf: "xkh2ocl",
          borderBottomStyle: "x1q0q8m5",
          borderBottomWidth: "x1qhh985",
          borderEndStyle: "xu3j5b3",
          borderEndWidth: "xcfux6l",
          borderStartStyle: "x26u7qi",
          borderStartWidth: "xm0m39n",
          borderTopStyle: "x13fuv20",
          borderTopWidth: "x972fbf",
          boxSizing: "x9f619",
          display: "x78zum5",
          flexDirection: "x1q0g3np",
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
          position: "x1n2onr6",
          zIndex: "x1ja2u2z",
          $$css: !0,
        },
        contentDense: {
          paddingTop: "x1y1aw1k",
          paddingBottom: "xwib8y2",
          $$css: !0,
        },
        contentWithMoreSpacing: {
          paddingTop: "xyamay9",
          paddingBottom: "x1l90r2v",
          $$css: !0,
        },
        contentWithMoreSpacingDense: {
          paddingTop: "xz9dl7a",
          paddingBottom: "xsag5q8",
          $$css: !0,
        },
        disabled: { cursor: "x1h6gzvc", pointerEvents: "x47corl", $$css: !0 },
        endAddOn: {
          marginBottom: "xod5an3",
          marginStart: "x16n37ib",
          marginTop: "x14vqqas",
          position: "x1n2onr6",
          $$css: !0,
        },
        endAddOnCenter: {
          marginBottom: "x1e56ztr",
          marginTop: "x1xmf6yo",
          $$css: !0,
        },
        endAddOnSmall: {
          marginBottom: "x1e56ztr",
          marginStart: "x16n37ib",
          marginTop: "x1xmf6yo",
          position: "x1n2onr6",
          $$css: !0,
        },
        listCellMinHeight: { minHeight: "x1gg8mnh", $$css: !0 },
        pressable: {
          borderTopStartRadius: "x1lq5wgf",
          borderTopEndRadius: "xgqcy7u",
          borderBottomEndRadius: "x30kzoy",
          borderBottomStartRadius: "x9jhf4c",
          display: "x1lliihq",
          $$css: !0,
        },
        responsiveButtons: {
          flexGrow: "x1iyjqo2",
          paddingBottom: "x10b6aqq",
          paddingTop: "x1yrsyyn",
          $$css: !0,
        },
        responsiveContent: {
          alignItems: "x6s0dn4",
          flexDirection: "x1q0g3np",
          flexWrap: "x1a02dak",
          marginBottom: "x4cne27",
          marginTop: "xifccgj",
          $$css: !0,
        },
        responsiveText: {
          boxSizing: "x9f619",
          flexBasis: "x4pfjvb",
          flexGrow: "x1iyjqo2",
          flexShrink: "xs83m0k",
          maxWidth: "x193iq5w",
          minWidth: "x1mkiy5m",
          paddingBottom: "x10b6aqq",
          paddingEnd: "x1pi30zi",
          paddingTop: "x1yrsyyn",
          $$css: !0,
        },
        root: {
          alignItems: "x6s0dn4",
          borderBottomStyle: "x1q0q8m5",
          borderBottomWidth: "x1qhh985",
          borderEndStyle: "xu3j5b3",
          borderEndWidth: "xcfux6l",
          borderStartStyle: "x26u7qi",
          borderStartWidth: "xm0m39n",
          borderTopStyle: "x13fuv20",
          borderTopWidth: "x972fbf",
          boxSizing: "x9f619",
          display: "x78zum5",
          flexDirection: "x1q0g3np",
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
          paddingEnd: "x1sxyh0",
          paddingStart: "xurb0ha",
          paddingTop: "xexx8yu",
          position: "x1n2onr6",
          zIndex: "x1ja2u2z",
          $$css: !0,
        },
        rootWithIncreasedHeight: { minHeight: "x1wiwyrm", $$css: !0 },
        selected: { backgroundColor: "x1av1boa", $$css: !0 },
        selectedWashBackground: { backgroundColor: "xljulmy", $$css: !0 },
        startAddOn: {
          alignSelf: "xqcrz7y",
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          marginEnd: "xq8finb",
          marginTop: "x1xmf6yo",
          marginBottom: "x1e56ztr",
          position: "x1n2onr6",
          $$css: !0,
        },
        startAddOnDense: {
          marginTop: "x1k70j0n",
          marginBottom: "xzueoph",
          $$css: !0,
        },
        startAddOnDensityAware: {
          "@media (max-height: 700px)_marginEnd": "x1ywmky0",
          "@media (max-height: 700px)_marginStart": "xnd27nj",
          "@media (max-height: 700px)_marginTop": "xv2ei83",
          "@media (max-height: 700px)_marginBottom": "x1og3r51",
          "@media (max-height: 700px)_transform": "xv3fwf9",
          $$css: !0,
        },
        textRight: { flexShrink: "x2lah0s", $$css: !0 },
        visualSwitch: { pointerEvents: "x47corl", $$css: !0 },
      },
      k = {
        center: { alignSelf: "xamitd3", $$css: !0 },
        top: { alignSelf: "xqcrz7y", $$css: !0 },
      },
      l = {
        center: { alignSelf: "xamitd3", $$css: !0 },
        top: { alignSelf: "xqcrz7y", $$css: !0 },
      };
    function a(a, b) {
      var d = a.addOnBottom,
        e = a.addOnEnd,
        f = a.addOnEndDisabled,
        g = a.addOnEndRef,
        p = a.addOnEndTestId;
      p = a.addOnEndVerticalAlign;
      p = p === void 0 ? "top" : p;
      var q = a.addOnStart,
        r = a.addOnStartCssSelectionId,
        s = a.addOnStartDisabled,
        t = a.addOnStartOverrideVerticalStyle,
        u = a.addOnStartTestId;
      u = a.addOnStartVerticalAlign;
      u = u === void 0 ? "top" : u;
      var v = a["aria-label"],
        w = a["aria-pressed"],
        x = a.body,
        y = a.bodyColor;
      y = y === void 0 ? "secondary" : y;
      var z = a.bodyLineLimit,
        A = a.contentHorizontalPadding,
        B = a.dataAttributes,
        C = a.describedby,
        D = a.disabled;
      D = D === void 0 ? !1 : D;
      var E = a.emphasized;
      E = E === void 0 ? !1 : E;
      var aa = a.focusable,
        ba = a.hasBottomDivider,
        F = a.headline,
        G = a.headlineAddOn,
        H = a.headlineColor;
      H = H === void 0 ? "primary" : H;
      var I = a.headlineLineLimit,
        J = a.level;
      J = J === void 0 ? 3 : J;
      var K = a.linkProps,
        L = a.meta,
        M = a.metaColor;
      M = M === void 0 ? "tertiary" : M;
      var N = a.metaLineLimit,
        O = a.metaLocation,
        ca = a.onFocusChange,
        da = a.onHoverIn,
        ea = a.onHoverOut,
        P = a.onPress,
        fa = a.onPressIn,
        ga = a.onPressOut,
        Q = a.paddingHorizontal,
        ha = a.role,
        R = a.selected;
      R = R === void 0 ? !1 : R;
      var S = a.selectedBackground,
        T = a.size;
      T = T === void 0 ? "default" : T;
      var U = a.testid;
      U = a.testOnly_pressed;
      a = D;
      var V = P;
      if (P == null && (e == null ? void 0 : e.type) === "switch") {
        var W;
        V = (W = e == null ? void 0 : e.onChange) != null ? W : P;
        a = (W = e == null ? void 0 : e.disabled) != null ? W : D;
      }
      P = i(c("CometDensityModeContext"));
      W = P[0];
      D = i(c("CometDensityAwarenessContext"));
      P = F != null && x == null && L == null;
      var X = F == null && x != null && L == null,
        Y = F == null && x == null && L != null,
        Z =
          (P && I != null && I === 1) ||
          (X && z != null && z === 1) ||
          (Y && N != null && N === 1);
      P =
        (P && I != null && I > 1) ||
        (X && z != null && z > 1) ||
        (Y && N != null && N > 1);
      X =
        e != null &&
        (e.type === "primary-button" ||
          e.type === "secondary-button" ||
          e.type === "body");
      Y = e != null && e.type === "expander";
      p = X || Y ? "center" : p;
      u = Z ? "center" : u;
      var $ = d != null && d.type === "buttons";
      P = q == null && (P || (Z && (X || Y)));
      Z =
        B != null
          ? Object.keys(B).reduce(function (a, b) {
              a != null && b != null && (a["data-" + b] = B[b]);
              return a;
            }, {})
          : null;
      D = h.jsxs("div", {
        className: c("stylex")(
          j.root,
          Y && T !== "small" && j.rootWithIncreasedHeight,
          T !== "small" && j.listCellMinHeight
        ),
        style: A == null ? void 0 : { paddingLeft: A, paddingRight: A },
        children: [
          q != null
            ? h.jsx("div", {
                className: c("stylex")(
                  j.startAddOn,
                  t,
                  k[u],
                  W && j.startAddOnDense,
                  D === !0 && j.startAddOnDensityAware
                ),
                "data-testid": void 0,
                id: r,
                children: h.jsx(m, {
                  addOnStart: q,
                  disabled: (A = s) != null ? A : a,
                }),
              })
            : null,
          h.jsxs("div", {
            className:
              "x6s0dn4 xkh2ocl x1q0q8m5 x1qhh985 xu3j5b3 xcfux6l x26u7qi xm0m39n x13fuv20 x972fbf x9f619 x78zum5 x1q0g3np x1iyjqo2 xs83m0k x1qughib xat24cr x11i5rnm x1mh8g0r xdj266r x2lwn1j xeuugli x18d9i69 x4uap5 xkhd6sd xexx8yu x1n2onr6 x1ja2u2z",
            children: [
              h.jsxs("div", {
                className: c("stylex")(
                  j.content,
                  W && j.contentDense,
                  P && j.contentWithMoreSpacing,
                  P && W && j.contentWithMoreSpacingDense,
                  $ && j.responsiveContent
                ),
                children: [
                  h.jsx("div", {
                    className: c("stylex")($ && j.responsiveText),
                    children: h.jsx(c("TetraTextPairing.react"), {
                      body: x,
                      bodyColor: a ? "disabled" : y,
                      bodyLineLimit: z,
                      headline: F,
                      headlineAddOn: G,
                      headlineColor: a ? "disabled" : H,
                      headlineLineLimit: I,
                      level: J,
                      meta: L,
                      metaColor: a ? "disabled" : M,
                      metaLineLimit: N,
                      metaLocation: O,
                      reduceEmphasis: E === !1,
                    }),
                  }),
                  d != null &&
                    h.jsx("div", {
                      className: c("stylex")(
                        j.bottomAddOn,
                        d.type === "facepile" && j.bottomAddOnWithFacepile,
                        d.type === "override-row" && j.bottomAddOnOverrideRow,
                        $ && j.responsiveButtons
                      ),
                      children: h.jsx("div", {
                        className: "x193iq5w",
                        children: h.jsx(n, { addOnBottom: d }),
                      }),
                    }),
                ],
              }),
              e != null
                ? h.jsx("div", {
                    className: c("stylex")(
                      T !== "small" && j.endAddOn,
                      T === "small" && j.endAddOnSmall,
                      (X || Y) && j.endAddOnCenter,
                      l[p]
                    ),
                    "data-testid": void 0,
                    ref: g,
                    children: h.jsx(o, {
                      addOn: e,
                      disabled: (t = f) != null ? t : a,
                      level: J,
                    }),
                  })
                : null,
              ((u = ba) != null ? u : !1)
                ? h.jsx("div", {
                    className:
                      "x14nfmen x1ey2m1c xds687c xjm9jq1 x10l6tqk x17qophe",
                  })
                : null,
            ],
          }),
        ],
      });
      r =
        e != null &&
        e.type === "expander" &&
        e.open === !0 &&
        e.children != null
          ? e.children
          : null;
      q = void 0;
      s = void 0;
      if (e != null)
        switch (e.type) {
          case "checkbox":
            s = e.on;
            q = "checkbox";
            break;
          case "radio":
            s = e.on;
            q = "radio";
            break;
          case "switch":
            s = e.value;
            q = "switch";
            break;
        }
      A =
        e != null &&
        e.type === "expander" &&
        e.open === !0 &&
        e.children != null;
      P = i(c("CometFocusGroupContext"));
      W = P.FocusItem;
      x = i(c("CometFocusTableContext"));
      y = x.FocusCell;
      z = x.FocusRow;
      F = i(c("CometCompositeStructureContext"));
      G = F.role;
      I = (H = ha) != null ? H : c("getItemRoleFromCompositeRole")(G);
      M = I === "row" && z ? z : (L = W) != null ? L : h.Fragment;
      O = (N = y) != null ? N : h.Fragment;
      return h.jsxs(M, {
        children: [
          h.jsx(
            "div",
            babelHelpers["extends"](
              {},
              c("CometVisualCompletionAttributes").IGNORE_DYNAMIC,
              {
                "aria-selected": I === "option" ? R : void 0,
                role: (E = I) != null ? E : void 0,
                style: {
                  paddingLeft: ($ = Q) != null ? $ : 8,
                  paddingRight: (d = Q) != null ? d : 8,
                },
              },
              Z,
              {
                children: h.jsx(O, {
                  children:
                    V != null || K != null
                      ? h.jsx(c("CometPressable.react"), {
                          "aria-checked": s,
                          "aria-current": R ? "page" : void 0,
                          "aria-describedby": C != null ? C : void 0,
                          "aria-expanded":
                            e != null && e.type === "expander" ? A : void 0,
                          "aria-label": v,
                          "aria-pressed": w,
                          disabled: a,
                          display: "block",
                          focusable: aa,
                          linkProps: K,
                          onFocusChange: ca,
                          onHoverIn: da,
                          onHoverOut: ea,
                          onPress: V,
                          onPressIn: fa,
                          onPressOut: ga,
                          overlayDisabled: R,
                          overlayFocusRingPosition: "inset",
                          ref: b,
                          role: q,
                          testOnly_pressed: U,
                          testid: void 0,
                          xstyle: [
                            j.pressable,
                            R && S !== "none" && j.selected,
                            R && S === "wash" && j.selectedWashBackground,
                            a && j.disabled,
                          ],
                          children: D,
                        })
                      : h.jsx("div", {
                          className: c("stylex")(
                            j.pressable,
                            R && j.selected,
                            R && S === "wash" && j.selectedWashBackground,
                            a && j.disabled
                          ),
                          "data-testid": void 0,
                          ref: b,
                          children: D,
                        }),
                }),
              }
            )
          ),
          r,
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function m(a) {
      var b = a.addOnStart;
      a = a.disabled;
      switch (b.type) {
        case "icon":
          b.type;
          var d = babelHelpers.objectWithoutPropertiesLoose(b, ["type"]);
          return h.jsx(
            c("CometIcon.react"),
            babelHelpers["extends"]({}, d, { disabled: a })
          );
        case "profile-photo":
          b.type;
          d = babelHelpers.objectWithoutPropertiesLoose(b, ["type"]);
          return h.jsx(
            c("CometProfilePhoto.react"),
            babelHelpers["extends"]({}, d)
          );
        case "profile-photo-for-actor":
          b.type;
          d = babelHelpers.objectWithoutPropertiesLoose(b, ["type"]);
          return h.jsx(
            c("CometProfilePhotoForActor.react"),
            babelHelpers["extends"]({}, d)
          );
        case "contained-icon":
          d = b.color;
          d = d === void 0 ? "gray" : d;
          b.type;
          var e = babelHelpers.objectWithoutPropertiesLoose(b, [
            "color",
            "type",
          ]);
          return h.jsx(
            c("CometSkittleIcon.react"),
            babelHelpers["extends"]({ color: d }, e, { disabled: a })
          );
        case "contained-progress-ring-indeterminate":
          return h.jsx(c("CometProgressSkittleIndeterminate.react"), {});
        case "messenger-facepile":
          b.type;
          d = babelHelpers.objectWithoutPropertiesLoose(b, ["type"]);
          return h.jsx(
            c("MWJewelThreadFacepile.react"),
            babelHelpers["extends"]({}, d)
          );
        case "override":
          return b.component;
        case "emoji":
          e = b.color;
          a = e === void 0 ? "gray" : e;
          d = b.emoji;
          e = b.emojiSize;
          e = e === void 0 ? 20 : e;
          var f = b.size;
          f = f === void 0 ? 40 : f;
          return h.jsx(c("CometSkittleEmoji.react"), {
            color: a,
            emoji: d,
            emojiSize: e,
            size: f,
          });
        case "sprite":
          a = b.sprite;
          return h.jsx(c("CometImageFromIXValueRelayWrapper.react"), {
            sprite: a,
          });
        default:
          b.type;
          return null;
      }
    }
    m.displayName = m.name + " [from " + f.id + "]";
    var n = function (a) {
        a = a.addOnBottom;
        switch (a.type) {
          case "facepile":
            return a.facepile;
          default:
            return a.component;
        }
      },
      o = function (a) {
        var b = a.addOn,
          e = a.disabled;
        a = a.level;
        var f = d("getListCellAddOn.react").getEndAddOn(b, e, a),
          g = b.type === "disclosure" && b.text != null ? b.text : null;
        return h.jsxs("div", {
          className: c("stylex")(
            j.addOn,
            b.type === "switch" && j.visualSwitch
          ),
          children: [
            g != null &&
              h.jsx("div", {
                className: "x2lah0s",
                children: h.jsx(c("TetraText.react"), {
                  color: e ? "disabled" : "secondary",
                  numberOfLines: 1,
                  type: a === 3 ? "body2" : "body3",
                  children: g,
                }),
              }),
            h.jsx("div", {
              className: c("stylex")(
                b.type === "expander" && j.addOnWithExpander,
                g != null && j.addOnWithText,
                b.type === "icon" && j.addOnWithIcon
              ),
              children: f,
            }),
          ],
        });
      };
    b = h.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "CometMenuBase.react",
  [
    "fbt",
    "ix",
    "BaseScrollableArea.react",
    "CometErrorBoundary.react",
    "CometFocusGroupFirstLetterNavigation",
    "CometListCellStrict.react",
    "CometMenuFocusGroup",
    "CometMenuItemBaseRoleContext",
    "CometSeparatorMenuItem.react",
    "FocusRegion.react",
    "TetraTextPairing.react",
    "fbicon",
    "focusScopeQueries",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = 145,
      l = {
        listItem: {
          borderTopStartRadius: "x1lcm9me",
          borderTopEndRadius: "x1yr5g0i",
          borderBottomEndRadius: "xrt01vj",
          borderBottomStartRadius: "x10y3i5r",
          display: "x78zum5",
          flexDirection: "x1q0g3np",
          marginTop: "xdj266r",
          marginEnd: "x1emribx",
          marginBottom: "xat24cr",
          marginStart: "x1i64zmx",
          paddingTop: "xz9dl7a",
          paddingEnd: "x1sxyh0",
          paddingBottom: "xsag5q8",
          paddingStart: "xurb0ha",
          $$css: !0,
        },
        root: {
          alignItems: "x1qjc9v5",
          boxSizing: "x9f619",
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          paddingStart: "xkhd6sd",
          paddingEnd: "x4uap5",
          paddingTop: "x1ten1a2",
          paddingBottom: "xz7cn9q",
          $$css: !0,
        },
        sizeFull: { marginEnd: "xzy4u6w", width: "xh8yej3", $$css: !0 },
        sizeNormal: { width: "x168biu4", $$css: !0 },
        sizeSmall: { width: "xi55695", $$css: !0 },
      },
      m = "menu",
      n = { listbox: "option", menu: "menuitem" };
    function a(a) {
      var b = a.children,
        e = a.footer,
        f = a.header,
        g = a.maxHeight,
        o = a.role;
      o = o === void 0 ? m : o;
      a = a.size;
      a = a === void 0 ? "normal" : a;
      var p = 0,
        q = j.Children.toArray(b).map(function (a) {
          if (a == null) return null;
          var b = p++;
          return a.type === c("CometSeparatorMenuItem.react")
            ? a
            : j.jsx(c("CometErrorBoundary.react"), { children: a }, b);
        });
      o = n[o];
      return j.Children.count(b) > 0
        ? j.jsx(c("BaseScrollableArea.react"), {
            horizontal: !1,
            style: g != null ? { maxHeight: Math.max(g, k) } : void 0,
            vertical: !0,
            xstyle: [
              l.root,
              a === "full" && l.sizeFull,
              a === "normal" && l.sizeNormal,
              a === "small" && l.sizeSmall,
            ],
            children: j.jsxs(c("CometMenuItemBaseRoleContext").Provider, {
              value: o,
              children: [
                f != null
                  ? j.jsxs(j.Fragment, {
                      children: [
                        f.onPressBack != null
                          ? j.jsx(c("CometListCellStrict.react"), {
                              addOnStart: {
                                "aria-label": h._("Retour"),
                                icon: d("fbicon")._(i("512665"), 24),
                                onPress: f.onPressBack,
                                type: "icon",
                              },
                              addOnStartVerticalAlign: "center",
                              emphasized: !1,
                              headline: f.title,
                              level: 3,
                              meta: f.meta,
                              paddingHorizontal: 8,
                            })
                          : j.jsx("div", {
                              className: c("stylex")([l.listItem]),
                              children: j.jsx(c("TetraTextPairing.react"), {
                                body: f.body,
                                headline: f.title,
                                level: 3,
                                meta: f.meta,
                                reduceEmphasis: !0,
                              }),
                            }),
                        j.jsx(c("CometSeparatorMenuItem.react"), {}),
                      ],
                    })
                  : null,
                j.jsx(d("FocusRegion.react").FocusRegion, {
                  autoFocusQuery: (f == null ? void 0 : f.onPressBack)
                    ? d("focusScopeQueries").tabbableScopeQuery
                    : null,
                  children: j.jsx(c("CometMenuFocusGroup").FocusGroup, {
                    onNavigate: d("CometFocusGroupFirstLetterNavigation")
                      .handleFirstLetterNavigation,
                    orientation: "vertical",
                    preventScrollOnFocus: !1,
                    tabScopeQuery: d("focusScopeQueries").tabbableScopeQuery,
                    wrap: !0,
                    children: q,
                  }),
                }),
                e != null
                  ? j.jsxs(j.Fragment, {
                      children: [
                        j.jsx(c("CometSeparatorMenuItem.react"), {}),
                        j.jsx("div", {
                          className:
                            "x1lcm9me x1yr5g0i xrt01vj x10y3i5r x78zum5 x1q0g3np xdj266r x1emribx xat24cr x1i64zmx xz9dl7a x1sxyh0 xsag5q8 xurb0ha",
                          children: j.jsx(c("TetraTextPairing.react"), {
                            level: 3,
                            meta: e.text,
                          }),
                        }),
                      ],
                    })
                  : null,
              ],
            }),
          })
        : null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometMenuBaseWithPopover.react",
  [
    "BaseContextualLayerAvailableHeightContext",
    "BaseMultiPageView.react",
    "CometMenuBase.react",
    "CometPopover.react",
    "CometPopoverLoadingStateContent.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useContext,
      j = 15,
      k = "menu";
    function a(a, b) {
      var d = a["aria-labelledby"],
        e = a.children,
        f = a.fallback,
        g = a.id,
        l = a.label,
        m = a.role;
      m = m === void 0 ? k : m;
      var n = a.arrowAlignment,
        o = a.withArrow;
      o = o === void 0 ? !1 : o;
      var p = a.testid;
      p = p === void 0 ? "comet-menu" : p;
      p = a.truncate;
      p = p === void 0 ? !1 : p;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "aria-labelledby",
        "children",
        "fallback",
        "id",
        "label",
        "role",
        "arrowAlignment",
        "withArrow",
        "testid",
        "truncate",
      ]);
      var q = i(c("BaseContextualLayerAvailableHeightContext"));
      o && q != null && (q -= j);
      return h.Children.count(e) > 0
        ? h.jsx(c("CometPopover.react"), {
            arrowAlignment: n,
            id: g,
            label: l,
            labelledby: (n = d) != null ? n : void 0,
            ref: b,
            role: m,
            testid: void 0,
            withArrow: o,
            children: h.jsx(c("BaseMultiPageView.react"), {
              disableAutoFocus: !0,
              disableFocusContainment: !0,
              fallback:
                (g = f) != null
                  ? g
                  : h.jsx(c("CometPopoverLoadingStateContent.react"), {}),
              children: h.jsx(
                c("CometMenuBase.react"),
                babelHelpers["extends"]({}, a, {
                  children: e,
                  maxHeight: p ? ((l = q) != null ? l : 0) : void 0,
                  role: m,
                })
              ),
            }),
          })
        : null;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.memo(h.forwardRef(a));
    g["default"] = b;
  },
  98
);
__d(
  "CometMenu.react",
  ["CometMenuBaseWithPopover.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a, b) {
      return h.jsx(
        c("CometMenuBaseWithPopover.react"),
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
  "CometToast.react",
  [
    "fbt",
    "ix",
    "BaseToast.react",
    "CometCircleButton.react",
    "CometPressable.react",
    "TetraText.react",
    "fbicon",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = d("react").useMemo,
      l = {
        pressable: {
          alignItems: "x6s0dn4",
          display: "x78zum5",
          flexDirection: "x1q0g3np",
          width: "xh8yej3",
          $$css: !0,
        },
      };
    function a(a) {
      var b = a.action,
        e = a.href,
        f = a.icon,
        g = a.impressionLoggingRef,
        m = a.message,
        n = a.onDismiss,
        o = a.supressCloseButton;
      o = o === void 0 ? !1 : o;
      var p = a.target,
        q = a.testid;
      q = q === void 0 ? "Toast" : q;
      q = a.truncateText;
      var r = q === void 0 ? !0 : q,
        s = babelHelpers.objectWithoutPropertiesLoose(a, [
          "action",
          "href",
          "icon",
          "impressionLoggingRef",
          "message",
          "onDismiss",
          "supressCloseButton",
          "target",
          "testid",
          "truncateText",
        ]),
        t = k(
          function () {
            return e != null ? { target: p, url: e } : void 0;
          },
          [e, p]
        );
      return j.jsx(c("BaseToast.react"), {
        action:
          b != null
            ? {
                label: b.label,
                labelRenderer: function (a) {
                  return j.jsx(c("TetraText.react"), {
                    color: "blueLink",
                    numberOfLines: 1,
                    type: "body3",
                    children: a,
                  });
                },
                onPress: b.onPress,
                testid: b.testid,
              }
            : void 0,
        addOnStart: f,
        closeButton:
          o !== !0 &&
          j.jsx(c("CometCircleButton.react"), {
            icon: d("fbicon")._(i("478231"), 12),
            label: h._("Fermer"),
            onPress: n,
            size: 24,
          }),
        linkWrapper:
          s.onPress != null || t != null
            ? function (a) {
                return j.jsx(
                  c("CometPressable.react"),
                  babelHelpers["extends"]({}, s, {
                    expanding: !0,
                    linkProps: t,
                    xstyle: l.pressable,
                    children: a,
                  })
                );
              }
            : void 0,
        message: function (a) {
          a = a.toastMessageId;
          return j.jsx(c("TetraText.react"), {
            color: "primary",
            id: a,
            numberOfLines: r ? 4 : void 0,
            type: "body3",
            children: m,
          });
        },
        onDismiss: n,
        testid: void 0,
        toastRef: g,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useLiveCostreamerTagSubscription.react",
  ["CometRelay", "react", "useLiveCostreamerTagSubscription.graphql", "uuidv4"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react").useMemo;
    function a(a, e, f) {
      var g =
          h !== void 0
            ? h
            : (h = b("useLiveCostreamerTagSubscription.graphql")),
        j = i(
          function () {
            return {
              onNext: f,
              subscription: g,
              updater: function (a) {
                var b;
                a = a.getRootField("live_video_tag_subscribe");
                b =
                  a == null
                    ? void 0
                    : (b = a.getLinkedRecord("tagged_page")) == null
                    ? void 0
                    : b.getLinkedRecord("currently_live_video");
                a = a == null ? void 0 : a.getLinkedRecord("tagged_video");
                b == null &&
                  a != null &&
                  a.setValue(null, "if_viewer_can_see_costreaming_tools");
              },
              variables: {
                input: {
                  client_subscription_id: c("uuidv4")(),
                  tagged_page_id: a,
                  tagged_video_id: e,
                },
              },
            };
          },
          [f, a, g, e]
        );
      d("CometRelay").useSubscription(j);
    }
    g["default"] = a;
  },
  98
);
__d(
  "LiveCostreamerTagSubscription.react",
  ["useLiveCostreamerTagSubscription.react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      c("useLiveCostreamerTagSubscription.react")(
        a.pageID,
        a.videoID,
        a.onNext
      );
      return null;
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometSSREntrypoint",
  ["objectValues", "relay-runtime/util/withProvidedVariables"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      var b,
        d = c("relay-runtime/util/withProvidedVariables")(
          a.variables,
          a.parameters.params.providedVariables
        );
      return {
        actor_id:
          (b =
            (b = a.environmentProviderOptions) == null ? void 0 : b.actorID) !=
          null
            ? b
            : null,
        id: a.parameters.params.id,
        name: a.parameters.params.name,
        ssr_boundary:
          (a =
            (b = a.environmentProviderOptions) == null
              ? void 0
              : b.ssrBoundary) != null
            ? a
            : null,
        variables: d,
      };
    }
    function i(a, b) {
      b = a.getPreloadProps(b);
      var d = b.entryPoints;
      b = b.queries;
      b = (b = b) != null ? b : {};
      var e = c("objectValues")(b).filter(function (a) {
          return a != null;
        }),
        f = [a.root.getModuleId()];
      if (d != null) {
        b = Object.keys(d);
        b.forEach(function (a) {
          a = d[a];
          if (a == null) return;
          var b = a.entryPoint;
          a = a.entryPointParams;
          b = i(b, a);
          e = e.concat(b.queries);
          f = f.concat(b.roots);
        });
      }
      return { queries: e, roots: f };
    }
    function a(a, b) {
      a = i(a, b);
      b = a.queries;
      return b.map(h);
    }
    function b(a) {
      a = a.map(function (a) {
        return i(a.entryPoint, a.entryPointParams);
      });
      return a.map(function (a) {
        var b = a.queries;
        a = a.roots;
        return { quries: b.map(h), roots: a };
      });
    }
    function d(a, b) {
      a = i(a, b);
      b = a.queries;
      a = a.roots;
      return { queries: b.map(h), roots: a };
    }
    function e() {
      throw new Error(
        "This function should not be called. It exists solely for the type-generation"
      );
    }
    function f(a, b) {
      var d;
      a = a.map(function (a) {
        return i(a.entryPoint, a.entryPointParams);
      });
      a = a.map(function (a) {
        var b = a.queries;
        a = a.roots;
        return { queries: b.map(h), roots: a };
      });
      d = c("objectValues")(
        (d = b == null ? void 0 : b.getDisplayQueries()) != null ? d : {}
      )
        .filter(function (a) {
          return a != null;
        })
        .map(h);
      b = c("objectValues")(
        (b = b == null ? void 0 : b.getDeferredQueries()) != null ? b : {}
      )
        .filter(function (a) {
          return a != null;
        })
        .map(h);
      return { appshellQueries: { deferred: b, display: d }, routeObjects: a };
    }
    g.processRootEntryPoint = a;
    g.processRootEntryPoints = b;
    g.processRootEntryPointData = d;
    g.preloadQuery = e;
    g.processServerEntryPoints = f;
  },
  98
);
__d(
  "UnifiedEditorExpandedImageDialog.react",
  [
    "fbt",
    "ix",
    "BaseDialog.react",
    "CometImage.react",
    "TetraCircleButton.react",
    "fbicon",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = {
        anchor: {
          paddingStart: "xurb0ha",
          paddingEnd: "x1sxyh0",
          paddingTop: "xn2ks54",
          paddingBottom: "x161sli9",
          $$css: !0,
        },
        buttonContainer: {
          position: "xixxii4",
          start: "xoie2o3",
          top: "x1tk7jg1",
          $$css: !0,
        },
        image: {
          maxHeight: "xv0t3ls",
          maxWidth: "x12mqc9s",
          objectFit: "x19kjcj4",
          $$css: !0,
        },
      };
    function a(a) {
      var b = a.imageUri;
      a = a.onClose;
      return j.jsxs(c("BaseDialog.react"), {
        anchorXStyle: k.anchor,
        onClose: a,
        children: [
          j.jsx("div", {
            className: "xixxii4 xoie2o3 x1tk7jg1",
            children: j.jsx(c("TetraCircleButton.react"), {
              icon: d("fbicon")._(i("478233"), 20),
              label: h._("Close"),
              onPress: a,
              size: 36,
            }),
          }),
          j.jsx(c("CometImage.react"), { src: b, xstyle: k.image }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "getFormattedTimestamp",
  ["DateConsts"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b = "";
      a = a;
      isNaN(a) ? (a = 0) : a < 0 && ((a *= -1), (b = "-"));
      var c = Math.floor(a / d("DateConsts").SEC_PER_HOUR),
        e = Math.floor(
          (a - c * d("DateConsts").SEC_PER_HOUR) / d("DateConsts").SEC_PER_MIN
        );
      a = Math.round(
        a - c * d("DateConsts").SEC_PER_HOUR - e * d("DateConsts").SEC_PER_MIN
      );
      a === d("DateConsts").SEC_PER_MIN && ((a = 0), e++);
      e === d("DateConsts").MIN_PER_HOUR && ((e = 0), c++);
      a = ("0" + a).slice(-2);
      if (c === 0) return "" + b + e + ":" + a;
      else {
        e = ("0" + e).slice(-2);
        return "" + b + c + ":" + e + ":" + a;
      }
    }
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerSettingsMenuQualityPaneToggle.react",
  [
    "fbt",
    "ix",
    "CometImage.react",
    "CometPressable.react",
    "VideoPlayerSettingsMenu.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = {
        chevronRight: {
          display: "x3nfvp2",
          marginBottom: "xmgb6t1",
          marginStart: "x12mruv9",
          $$css: !0,
        },
        label: { cursor: "x1ypdohk", fontWeight: "x1s688f", $$css: !0 },
        option: {
          alignItems: "x6s0dn4",
          color: "x14ctfv",
          cursor: "x1ypdohk",
          display: "x78zum5",
          flexGrow: "x1bhwmg6",
          justifyContent: "x13a6bvl",
          marginStart: "x1i64zmx",
          minWidth: "x450l9j",
          $$css: !0,
        },
        pressableOption: { width: "xh8yej3", $$css: !0 },
      };
    function a(a) {
      var b = a.selectedVideoQuality,
        e = a.setPane;
      a = a.targetVideoQuality;
      return j.jsxs(c("CometPressable.react"), {
        onPress: function () {
          e(
            d("VideoPlayerSettingsMenu.react").VideoPlayerSettingsMenuPaneType
              .QUALITY
          );
        },
        testid: void 0,
        xstyle: k.pressableOption,
        children: [
          j.jsx("div", {
            className: "x1ypdohk x1s688f",
            children: h._("Qualit\u00e9"),
          }),
          j.jsxs("div", {
            className:
              "x6s0dn4 x14ctfv x1ypdohk x78zum5 x1bhwmg6 x13a6bvl x1i64zmx x450l9j",
            children: [
              b === "notselected"
                ? j.jsx("span", { "data-testid": void 0, children: "\xa0" })
                : b === "auto"
                ? j.jsxs(j.Fragment, {
                    children: [
                      j.jsx("span", {
                        "data-testid": void 0,
                        children: h._("Auto"),
                      }),
                      a != null
                        ? j.jsxs(j.Fragment, {
                            children: [
                              j.jsx("span", { children: "\xa0" }),
                              j.jsx("span", {
                                "data-testid": void 0,
                                children: a,
                              }),
                            ],
                          })
                        : null,
                    ],
                  })
                : j.jsx("span", { "data-testid": void 0, children: b }),
              j.jsx("span", {
                className: "x3nfvp2 xmgb6t1 x12mruv9",
                children: j.jsx(c("CometImage.react"), { src: i("480587") }),
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
  "LiveVideoLatencyMenu.react",
  [
    "fbt",
    "CometRelay",
    "LiveVideoLatencyMenuContextProvider_video.graphql",
    "VideoPlayerHooks",
    "gkx",
    "react",
    "recoverableViolation",
    "useSelectedLatencySetting",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react"),
      k = d("react").useMemo,
      l = h._("Latence"),
      m = c("gkx")("3681")
        ? [o("ultra-low"), o("low"), o("normal")]
        : [o("low"), o("normal")],
      n = j.createContext({
        liveVideoLatencyMenuPaneMatchPointer: null,
        liveVideoLatencyMenuPaneToggleMatchPointer: null,
      });
    function o(a) {
      switch (a) {
        case "low":
          return {
            description: h._("Une exp\u00e9rience presque en temps r\u00e9el."),
            title: h._("Latence faible"),
            value: a,
          };
        case "normal":
          return {
            description: h._(
              "Id\u00e9ale pour les performances et les connexions plus lentes."
            ),
            title: h._("Normale"),
            value: a,
          };
        case "ultra-low":
          return {
            description: h._("Optimal pour les diffusions interactives"),
            title: h._("Ultra faible"),
            value: a,
          };
        default:
          a;
          c("recoverableViolation")(
            "Setting " + a + " is not valid",
            "gaming_video"
          );
          return { description: h._("Erreur"), title: h._("Erreur"), value: a };
      }
    }
    function a(a, b) {
      var e = d("VideoPlayerHooks").useController(),
        f = d("VideoPlayerHooks").useLatencyLevel();
      a = c("useSelectedLatencySetting")(a, b);
      a[0];
      var g = a[1];
      b = o(f);
      a = b.title;
      b = function (a) {
        f !== a && (g(a), e.setLatencyLevel(a));
      };
      return {
        selectedLatencySetting: f,
        selectedLatencySettingTitle: a,
        setSelectedLatencySetting: b,
      };
    }
    var p =
      i !== void 0
        ? i
        : (i = b("LiveVideoLatencyMenuContextProvider_video.graphql"));
    function e(a) {
      var b = a.children;
      a = a.video;
      var c = d("CometRelay").useFragment(p, a);
      a = k(
        function () {
          return c == null
            ? {
                liveVideoLatencyMenuPaneMatchPointer: null,
                liveVideoLatencyMenuPaneToggleMatchPointer: null,
              }
            : {
                liveVideoLatencyMenuPaneMatchPointer:
                  c.if_viewer_can_use_latency_menu,
                liveVideoLatencyMenuPaneToggleMatchPointer:
                  c.if_viewer_can_use_latency_menu_toggle,
              };
        },
        [c]
      );
      return j.jsx(n.Provider, { value: a, children: b });
    }
    e.displayName = e.name + " [from " + f.id + "]";
    g.LATENCY_MENU_TITLE = l;
    g.LATENCY_SETTING_OPTIONS = m;
    g.LiveVideoLatencyMenuContext = n;
    g.getLiveVideoLatencySettingToInfoMapping = o;
    g.useLatencySettingState = a;
    g.LiveVideoLatencyMenuContextProvider = e;
  },
  98
);
__d(
  "VideoPlayerSettingsMenu.react",
  [
    "fbt",
    "$InternalEnum",
    "CometErrorBoundary.react",
    "CometKeys",
    "CometPlaceholder.react",
    "CometRelay",
    "LiveVideoLatencyMenu.react",
    "PlaybackSpeedExperiments",
    "VideoPlayerHooks",
    "VideoPlayerSettingsMenuMainPane.react",
    "VideoPlayerSettingsMenuPlaybackSpeedPane.react",
    "VideoPlayerSettingsMenuQualityPane.react",
    "cr:104",
    "react",
    "recoverableViolation",
    "useLayerKeyCommands",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    e = d("react");
    var j = e.useCallback,
      k = e.useContext,
      l = e.useEffect,
      m = e.useMemo,
      n = e.useRef,
      o = e.useState,
      p = b("$InternalEnum")({
        LATENCY: "latency",
        MAIN: "main",
        PLAYBACK_SPEED: "playbackSpeed",
        QUALITY: "quality",
        AUDIO: "audio",
      });
    function a(a) {
      var e = a.children;
      e = e === void 0 ? null : e;
      var f = a.onClose;
      a = d("VideoPlayerHooks").useCaptionsLoaded();
      var g = d("VideoPlayerHooks").useCaptionsVisible(),
        q = d("VideoPlayerHooks").useSelectedVideoQuality(),
        r = d("VideoPlayerHooks").useSelectedAudioTrackID(),
        s = d("VideoPlayerHooks").useAvailableAudioTracks(),
        t = d("VideoPlayerHooks").useInbandCaptionsAutogenerated(),
        u = d("VideoPlayerHooks").useTargetVideoQuality(),
        v = o(p.MAIN),
        w = v[0],
        x = v[1];
      v = o(g);
      g = v[0];
      v = v[1];
      var y = d("VideoPlayerHooks").usePlaybackRate(),
        z = d("VideoPlayerHooks").useIsLive(),
        A = d("VideoPlayerHooks").useIsLiveRewindActive(),
        B = k(d("LiveVideoLatencyMenu.react").LiveVideoLatencyMenuContext);
      B = B.liveVideoLatencyMenuPaneMatchPointer;
      var C = d("VideoPlayerHooks").useShouldShowPlaybackRateControl();
      C =
        !!d(
          "PlaybackSpeedExperiments"
        ).enableCometPlaybackSpeedControlPublicTest() && C;
      l(
        function () {
          z && !A && w === p.PLAYBACK_SPEED && x(p.MAIN);
        },
        [A, x, z, w]
      );
      l(
        function () {
          s.length <= 1 && x(p.MAIN);
        },
        [s]
      );
      var D = n(null),
        E = n(null),
        F = j(
          function (a) {
            D.current &&
              E.current &&
              a.target instanceof HTMLElement &&
              document.contains(a.target) &&
              !D.current.contains(a.target) &&
              E.current.contains(a.target) &&
              f();
          },
          [f]
        );
      l(
        function () {
          document.addEventListener("click", F);
          return function () {
            document.removeEventListener("click", F);
          };
        },
        [F]
      );
      var G = m(
        function () {
          return [
            {
              command: { key: c("CometKeys").ESCAPE },
              description: h._("Fermer le menu des param\u00e8tres vid\u00e9o"),
              handler: function () {
                f();
              },
            },
          ];
        },
        [f]
      );
      c("useLayerKeyCommands")(G);
      G = s.find(function (a) {
        return a.id === r;
      });
      a = i.jsx(c("VideoPlayerSettingsMenuMainPane.react"), {
        availableAudioTracks: s,
        captionsLoaded: a,
        captionsVisibleOptimistic: g,
        inbandCaptionsAutogenerated: t,
        playbackRate: y,
        selectedAudioTrack: G,
        selectedVideoQuality: q,
        setIsCaptionsVisible: v,
        setPane: x,
        shouldEnablePlaybackRateSupport: C,
        targetVideoQuality: u,
        children: e,
      });
      switch (w) {
        case p.LATENCY:
          if (B == null) {
            c("recoverableViolation")(
              "Latency components should not be null",
              "gaming_video"
            );
            break;
          }
          a = i.jsx(c("CometErrorBoundary.react"), {
            children: i.jsx(c("CometPlaceholder.react"), {
              fallback: null,
              children: i.jsx(d("CometRelay").MatchContainer, {
                match: B,
                props: { setPane: x },
              }),
            }),
          });
          break;
        case p.MAIN:
          break;
        case p.PLAYBACK_SPEED:
          a = i.jsx(c("VideoPlayerSettingsMenuPlaybackSpeedPane.react"), {
            playbackRate: y,
            setPane: x,
          });
          break;
        case p.QUALITY:
          a = i.jsx(c("VideoPlayerSettingsMenuQualityPane.react"), {
            selectedVideoQuality: q,
            setPane: x,
          });
          break;
        case p.AUDIO:
          a = b("cr:104")
            ? i.jsx(b("cr:104"), {
                availableAudioTracks: s,
                selectedAudioTrackID: r,
                setPane: x,
              })
            : null;
          break;
      }
      return i.jsxs(i.Fragment, {
        children: [
          i.jsx("div", { ref: D, children: a }),
          i.jsx("div", {
            className:
              "xjbqb8w x5yr21d xg6iff7 x1g81zrj xixxii4 x17qophe x13vifvy xh8yej3 x8knxv4",
            "data-testid": void 0,
            ref: E,
          }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.VideoPlayerSettingsMenuPaneType = p;
    g.VideoPlayerSettingsMenu = a;
  },
  98
);
__d(
  "VideoPlayerSettingsMenuAudioTrackPaneToggle.react",
  [
    "fbt",
    "ix",
    "CometImage.react",
    "CometPressable.react",
    "VideoPlayerSettingsMenu.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = {
        chevronRight: {
          display: "x3nfvp2",
          marginBottom: "xmgb6t1",
          marginStart: "x12mruv9",
          $$css: !0,
        },
        label: { cursor: "x1ypdohk", fontWeight: "x1s688f", $$css: !0 },
        option: {
          alignItems: "x6s0dn4",
          color: "x14ctfv",
          cursor: "x1ypdohk",
          display: "x78zum5",
          flexGrow: "x1bhwmg6",
          justifyContent: "x13a6bvl",
          marginStart: "x1i64zmx",
          minWidth: "x450l9j",
          $$css: !0,
        },
        pressableOption: { width: "xh8yej3", $$css: !0 },
      };
    function a(a) {
      var b = a.selectedAudioTrack,
        e = a.setPane;
      return j.jsxs(c("CometPressable.react"), {
        onPress: function () {
          e(
            d("VideoPlayerSettingsMenu.react").VideoPlayerSettingsMenuPaneType
              .AUDIO
          );
        },
        testid: void 0,
        xstyle: k.pressableOption,
        children: [
          j.jsx("div", {
            className: "x1ypdohk x1s688f",
            children: h._("Audio"),
          }),
          j.jsxs("div", {
            className:
              "x6s0dn4 x14ctfv x1ypdohk x78zum5 x1bhwmg6 x13a6bvl x1i64zmx x450l9j",
            children: [
              b
                ? j.jsx("span", {
                    "data-testid": void 0,
                    children: b.displayLabel,
                  })
                : j.jsx("span", {
                    "data-testid": void 0,
                    children: h._("Par d\u00e9faut"),
                  }),
              j.jsx("span", {
                className: "x3nfvp2 xmgb6t1 x12mruv9",
                children: j.jsx(c("CometImage.react"), { src: i("480587") }),
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
  "VideoPlayerSettingsMenuMainPane.react",
  [
    "CometErrorBoundary.react",
    "CometPlaceholder.react",
    "CometRelay",
    "FocusRegion.react",
    "LiveVideoLatencyMenu.react",
    "VideoPlayerSettingsMenuAudioTrackPaneToggle.react",
    "VideoPlayerSettingsMenuPlaybackPaneToggle.react",
    "VideoPlayerSettingsMenuQualityPaneToggle.react",
    "focusScopeQueries",
    "gkx",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useContext;
    function a(a) {
      var b = a.availableAudioTracks,
        e = a.children,
        f = a.playbackRate,
        g = a.selectedAudioTrack,
        j = a.selectedVideoQuality,
        k = a.setPane,
        l = a.shouldEnablePlaybackRateSupport;
      a = a.targetVideoQuality;
      var m = i(d("LiveVideoLatencyMenu.react").LiveVideoLatencyMenuContext);
      m = m.liveVideoLatencyMenuPaneToggleMatchPointer;
      b = c("gkx")("3146") && b.length > 1;
      return h.jsx(d("FocusRegion.react").FocusRegion, {
        autoFocusQuery:
          d("focusScopeQueries").headerFirstTabbableSecondScopeQuery,
        recoverFocusQuery:
          d("focusScopeQueries").headerFirstTabbableSecondScopeQuery,
        children: h.jsxs("div", {
          "data-testid": void 0,
          children: [
            h.jsx("div", {
              className: "x14ctfv x78zum5 x1hoihq8 x1lku1pv",
              children: h.jsx(
                c("VideoPlayerSettingsMenuQualityPaneToggle.react"),
                { selectedVideoQuality: j, setPane: k, targetVideoQuality: a }
              ),
            }),
            b &&
              h.jsx("div", {
                className: "x14ctfv x78zum5 x1hoihq8 x1lku1pv",
                children: h.jsx(
                  c("VideoPlayerSettingsMenuAudioTrackPaneToggle.react"),
                  { selectedAudioTrack: g, setPane: k }
                ),
              }),
            h.jsx("div", {
              className: "x14ctfv x78zum5 x1hoihq8 x1lku1pv",
              children: h.jsx(
                c("VideoPlayerSettingsMenuPlaybackPaneToggle.react"),
                {
                  playbackRate: f,
                  setPane: k,
                  shouldEnablePlaybackRateSupport: l,
                }
              ),
            }),
            m != null &&
              h.jsx("div", {
                className: "x14ctfv x78zum5 x1hoihq8 x1lku1pv",
                children: h.jsx(c("CometErrorBoundary.react"), {
                  children: h.jsx(c("CometPlaceholder.react"), {
                    fallback: null,
                    children: h.jsx(d("CometRelay").MatchContainer, {
                      match: m,
                      props: { setPane: k },
                    }),
                  }),
                }),
              }),
            e,
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
  "VideoPlayerSettingsMenuPlaybackPaneToggle.react",
  [
    "fbt",
    "ix",
    "CometImage.react",
    "CometPressable.react",
    "VideoPlayerSettingsMenu.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = {
        chevronRight: {
          display: "x3nfvp2",
          marginBottom: "xmgb6t1",
          marginStart: "x12mruv9",
          $$css: !0,
        },
        label: { cursor: "x1ypdohk", fontWeight: "x1s688f", $$css: !0 },
        option: {
          alignItems: "x6s0dn4",
          color: "x14ctfv",
          cursor: "x1ypdohk",
          display: "x78zum5",
          flexGrow: "x1bhwmg6",
          justifyContent: "x13a6bvl",
          marginStart: "x1i64zmx",
          minWidth: "x450l9j",
          $$css: !0,
        },
        pressableOption: { width: "xh8yej3", $$css: !0 },
      };
    function a(a) {
      var b = a.playbackRate,
        e = a.setPane;
      a = a.shouldEnablePlaybackRateSupport;
      return !a
        ? null
        : j.jsxs(c("CometPressable.react"), {
            onPress: function () {
              e(
                d("VideoPlayerSettingsMenu.react")
                  .VideoPlayerSettingsMenuPaneType.PLAYBACK_SPEED
              );
            },
            testid: void 0,
            xstyle: k.pressableOption,
            children: [
              j.jsx("div", {
                className: "x1ypdohk x1s688f",
                children: h._("Vitesse de lecture"),
              }),
              j.jsxs("div", {
                className:
                  "x6s0dn4 x14ctfv x1ypdohk x78zum5 x1bhwmg6 x13a6bvl x1i64zmx x450l9j",
                children: [
                  j.jsx("span", { "data-testid": void 0, children: b }),
                  j.jsx("span", {
                    className: "x3nfvp2 xmgb6t1 x12mruv9",
                    children: j.jsx(c("CometImage.react"), {
                      src: i("480587"),
                    }),
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
  "VideoPlayerSettingsMenuPlaybackSpeedPane.react",
  [
    "fbt",
    "ix",
    "CometImage.react",
    "CometPressable.react",
    "FocusRegion.react",
    "VideoPlayerHooks",
    "VideoPlayerSettingsMenu.react",
    "focusScopeQueries",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = {
        chevronLeft: {
          display: "x3nfvp2",
          marginBottom: "xmgb6t1",
          marginStart: "x139jcc6",
          $$css: !0,
        },
        menuHeading: {
          alignItems: "x6s0dn4",
          color: "x14ctfv",
          cursor: "x1ypdohk",
          display: "x78zum5",
          fontWeight: "x1s688f",
          ":hover_textDecoration": "x1lku1pv",
          $$css: !0,
        },
        menuLabel: { cursor: "x1ypdohk", display: "x1rg5ohu", $$css: !0 },
        menuOption: {
          marginStart: "x17adc0v",
          marginTop: "x1anpbxc",
          $$css: !0,
        },
        menuOptionRow: {
          color: "x14ctfv",
          display: "x1lliihq",
          minWidth: "xfvyar9",
          outline: "x1a2a7pz",
          paddingTop: "xyqdw3p",
          paddingEnd: "x4uap5",
          paddingBottom: "xg8j3zb",
          paddingStart: "xkhd6sd",
          textAlign: "x1yc453h",
          $$css: !0,
        },
        pressableOption: { width: "xh8yej3", $$css: !0 },
        radio: {
          backgroundColor: "x17j41np",
          borderTopStartRadius: "x1ykpwxx",
          borderTopEndRadius: "x118zf8b",
          borderBottomEndRadius: "xnwxkdh",
          borderBottomStartRadius: "xfocsrx",
          display: "x1rg5ohu",
          marginBottom: "xmgb6t1",
          marginEnd: "xmo9yow",
          paddingTop: "x1yrsyyn",
          paddingEnd: "xsyo7zv",
          paddingBottom: "x10b6aqq",
          paddingStart: "x16hj40l",
          $$css: !0,
        },
        radioDot: {
          backgroundColor: "x14hiurz",
          borderTopStartRadius: "x8u2fvd",
          borderTopEndRadius: "x1ht7hnu",
          borderBottomEndRadius: "x1quq95r",
          borderBottomStartRadius: "x5yzy4c",
          display: "x1rg5ohu",
          height: "xqu0tyb",
          marginStart: "x8182xy",
          marginTop: "x1kgmq87",
          position: "x10l6tqk",
          width: "x51ohtg",
          $$css: !0,
        },
        selectedOption: { fontWeight: "x1s688f", $$css: !0 },
      };
    function a(a) {
      var b = a.playbackRate,
        e = a.setPane,
        f = d("VideoPlayerHooks").useController();
      return j.jsx(d("FocusRegion.react").FocusRegion, {
        autoFocusQuery:
          d("focusScopeQueries").headerFirstTabbableSecondScopeQuery,
        recoverFocusQuery:
          d("focusScopeQueries").headerFirstTabbableSecondScopeQuery,
        children: j.jsxs("div", {
          "data-testid": void 0,
          children: [
            j.jsx("div", {
              className: "x6s0dn4 x14ctfv x1ypdohk x78zum5 x1s688f x1lku1pv",
              children: j.jsxs(c("CometPressable.react"), {
                onPress: function () {
                  return e(
                    d("VideoPlayerSettingsMenu.react")
                      .VideoPlayerSettingsMenuPaneType.MAIN
                  );
                },
                testid: void 0,
                xstyle: k.pressableOption,
                children: [
                  " ",
                  j.jsx("span", {
                    className: "x3nfvp2 xmgb6t1 x139jcc6",
                    children: j.jsx(c("CometImage.react"), {
                      src: i("480579"),
                    }),
                  }),
                  h._("Vitesse de lecture"),
                ],
              }),
            }),
            j.jsx("div", {
              className: "x17adc0v x1anpbxc",
              "data-testid": void 0,
              children: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2].map(function (a) {
                var d = b === a,
                  e = h._(
                    "Configurer la vitesse de lecture sur {playback_rate_option}{is_playback_rate_option_selected}",
                    [
                      h._param("playback_rate_option", a),
                      h._param(
                        "is_playback_rate_option_selected",
                        d ? ", selected" : ""
                      ),
                    ]
                  );
                return j.jsx(
                  "div",
                  {
                    children: j.jsxs(c("CometPressable.react"), {
                      "aria-checked": d,
                      "aria-label": e,
                      onPress: function () {
                        f.setPlaybackRate(a);
                      },
                      testid: void 0,
                      xstyle: k.menuOptionRow,
                      children: [
                        j.jsx("div", {
                          className:
                            "x17j41np x1ykpwxx x118zf8b xnwxkdh xfocsrx x1rg5ohu xmgb6t1 xmo9yow x1yrsyyn xsyo7zv x10b6aqq x16hj40l",
                          children:
                            d &&
                            j.jsx("div", {
                              className:
                                "x14hiurz x8u2fvd x1ht7hnu x1quq95r x5yzy4c x1rg5ohu xqu0tyb x8182xy x1kgmq87 x10l6tqk x51ohtg",
                              "data-testid": void 0,
                            }),
                        }),
                        j.jsx("div", {
                          className: c("stylex")(
                            k.menuLabel,
                            d && k.selectedOption
                          ),
                          "data-testid": void 0,
                          children: a,
                        }),
                      ],
                    }),
                  },
                  a
                );
              }),
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
  "VideoPlayerSettingsMenuQualityPane.react",
  [
    "fbt",
    "ix",
    "CometImage.react",
    "CometPressable.react",
    "FocusRegion.react",
    "VideoPlayerHooks",
    "VideoPlayerSettingsMenu.react",
    "focusScopeQueries",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = {
        chevronLeft: {
          alignItems: "x6s0dn4",
          display: "x3nfvp2",
          marginBottom: "xmgb6t1",
          marginStart: "x139jcc6",
          $$css: !0,
        },
        menuHeading: {
          alignItems: "x6s0dn4",
          color: "x14ctfv",
          cursor: "x1ypdohk",
          display: "x78zum5",
          fontWeight: "x1s688f",
          ":hover_textDecoration": "x1lku1pv",
          $$css: !0,
        },
        menuLabel: { cursor: "x1ypdohk", display: "x1rg5ohu", $$css: !0 },
        menuOption: {
          marginStart: "x17adc0v",
          marginTop: "x1anpbxc",
          $$css: !0,
        },
        menuOptionRow: {
          color: "x14ctfv",
          display: "x1lliihq",
          minWidth: "xfvyar9",
          outline: "x1a2a7pz",
          paddingTop: "xyqdw3p",
          paddingEnd: "x4uap5",
          paddingBottom: "xg8j3zb",
          paddingStart: "xkhd6sd",
          textAlign: "x1yc453h",
          $$css: !0,
        },
        pressableOption: { width: "xh8yej3", $$css: !0 },
        radio: {
          backgroundColor: "xiakxrv",
          borderTopStartRadius: "x1ykpwxx",
          borderTopEndRadius: "x118zf8b",
          borderBottomEndRadius: "xnwxkdh",
          borderBottomStartRadius: "xfocsrx",
          display: "x1rg5ohu",
          marginBottom: "xmgb6t1",
          marginEnd: "xmo9yow",
          paddingTop: "x1yrsyyn",
          paddingEnd: "xsyo7zv",
          paddingBottom: "x10b6aqq",
          paddingStart: "x16hj40l",
          $$css: !0,
        },
        radioDot: {
          backgroundColor: "x14hiurz",
          borderTopStartRadius: "x8u2fvd",
          borderTopEndRadius: "x1ht7hnu",
          borderBottomEndRadius: "x1quq95r",
          borderBottomStartRadius: "x5yzy4c",
          display: "x1rg5ohu",
          height: "xqu0tyb",
          marginStart: "x8182xy",
          marginTop: "x1kgmq87",
          position: "x10l6tqk",
          width: "x51ohtg",
          $$css: !0,
        },
        selectedOption: { fontWeight: "x1s688f", $$css: !0 },
      };
    function a(a) {
      var b = a.selectedVideoQuality,
        e = a.setPane;
      a = d("VideoPlayerHooks").useAvailableVideoQualities();
      var f = d("VideoPlayerHooks").useIsAbrEnabled(),
        g = d("VideoPlayerHooks").useController();
      return j.jsx(d("FocusRegion.react").FocusRegion, {
        autoFocusQuery:
          d("focusScopeQueries").headerFirstTabbableSecondScopeQuery,
        recoverFocusQuery:
          d("focusScopeQueries").headerFirstTabbableSecondScopeQuery,
        children: j.jsxs("div", {
          "data-testid": void 0,
          children: [
            j.jsx("div", {
              className: "x6s0dn4 x14ctfv x1ypdohk x78zum5 x1s688f x1lku1pv",
              children: j.jsxs(c("CometPressable.react"), {
                onPress: function () {
                  return e(
                    d("VideoPlayerSettingsMenu.react")
                      .VideoPlayerSettingsMenuPaneType.MAIN
                  );
                },
                testid: void 0,
                xstyle: k.pressableOption,
                children: [
                  j.jsx("span", {
                    className: "x6s0dn4 x3nfvp2 xmgb6t1 x139jcc6",
                    children: j.jsx(c("CometImage.react"), {
                      src: i("480579"),
                    }),
                  }),
                  h._("Qualit\u00e9"),
                ],
              }),
            }),
            j.jsxs("div", {
              className: "x17adc0v x1anpbxc",
              "data-testid": void 0,
              children: [
                f
                  ? j.jsx(
                      "div",
                      {
                        children: j.jsxs(c("CometPressable.react"), {
                          onPress: function () {
                            g.selectVideoQuality("auto");
                          },
                          testid: void 0,
                          xstyle: k.menuOptionRow,
                          children: [
                            j.jsx("div", {
                              className:
                                "xiakxrv x1ykpwxx x118zf8b xnwxkdh xfocsrx x1rg5ohu xmgb6t1 xmo9yow x1yrsyyn xsyo7zv x10b6aqq x16hj40l",
                              children:
                                b === "auto" &&
                                j.jsx("div", {
                                  className:
                                    "x14hiurz x8u2fvd x1ht7hnu x1quq95r x5yzy4c x1rg5ohu xqu0tyb x8182xy x1kgmq87 x10l6tqk x51ohtg",
                                  "data-testid": void 0,
                                }),
                            }),
                            j.jsx("div", {
                              className: c("stylex")(
                                k.menuLabel,
                                b === "auto" && k.selectedOption
                              ),
                              "data-testid": void 0,
                              children: h._("Auto"),
                            }),
                          ],
                        }),
                      },
                      "auto"
                    )
                  : null,
                a
                  .map(function (a) {
                    var d = b === a;
                    return j.jsx(
                      "div",
                      {
                        children: j.jsxs(c("CometPressable.react"), {
                          onPress: function () {
                            g.selectVideoQuality(a);
                          },
                          testid: void 0,
                          xstyle: k.menuOptionRow,
                          children: [
                            j.jsx("div", {
                              className:
                                "xiakxrv x1ykpwxx x118zf8b xnwxkdh xfocsrx x1rg5ohu xmgb6t1 xmo9yow x1yrsyyn xsyo7zv x10b6aqq x16hj40l",
                              children:
                                d &&
                                j.jsx("div", {
                                  className:
                                    "x14hiurz x8u2fvd x1ht7hnu x1quq95r x5yzy4c x1rg5ohu xqu0tyb x8182xy x1kgmq87 x10l6tqk x51ohtg",
                                  "data-testid": void 0,
                                }),
                            }),
                            j.jsx("div", {
                              className: c("stylex")(
                                k.menuLabel,
                                d && k.selectedOption
                              ),
                              "data-testid": void 0,
                              children: a,
                            }),
                          ],
                        }),
                      },
                      a
                    );
                  })
                  .reverse(),
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
  "VideoControlsContainerFocusedContext",
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
  "VideoPlayerCaptionsMenu.react",
  [
    "fbt",
    "$InternalEnum",
    "CometKeys",
    "VideoPlayerCaptionsMenuCaptionsDisplayMainPane.react",
    "VideoPlayerCaptionsMenuCaptionsDisplayPane.react",
    "VideoPlayerCaptionsMenuMainPane.react",
    "VideoPlayerHooks",
    "react",
    "useLayerKeyCommands",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    e = d("react");
    var j = e.useCallback,
      k = e.useEffect,
      l = e.useMemo,
      m = e.useRef,
      n = e.useState,
      o = b("$InternalEnum")({
        CAPTIONS_BG_COLOR: "captionsBackgroundColor",
        CAPTIONS_BG_OPACITY: "captionsBackgroundOpacity",
        CAPTIONS_DISPLAY_MAIN: "captionsDisplayMain",
        CAPTIONS_TEXT_COLOR: "captionsTextColor",
        CAPTIONS_TEXT_SIZE: "captionsTextSize",
        CAPTIONS_MAIN: "captionsMain",
      });
    function a(a) {
      var b = a.availableCaptionsLocales,
        e = a.captionsListExpanded,
        f = a.children;
      f = f === void 0 ? null : f;
      var g = a.onClose,
        p = a.onPressLog,
        q = a.selectedCaptionsLocale,
        r = a.setCaptionsListExpanded;
      a = a.setSelectedCaptionsLocale;
      var s = d("VideoPlayerHooks").useCaptionDisplayStyle(),
        t = n(o.CAPTIONS_MAIN),
        u = t[0];
      t = t[1];
      var v = m(null),
        w = m(null),
        x = j(
          function (a) {
            v.current &&
              w.current &&
              a.target instanceof HTMLElement &&
              document.contains(a.target) &&
              !v.current.contains(a.target) &&
              w.current.contains(a.target) &&
              g();
          },
          [g]
        );
      k(
        function () {
          document.addEventListener("click", x);
          return function () {
            document.removeEventListener("click", x);
          };
        },
        [x]
      );
      var y = l(
        function () {
          return [
            {
              command: { key: c("CometKeys").ESCAPE },
              description: h._("Fermer le menu des sous-titres"),
              handler: function () {
                g();
              },
            },
          ];
        },
        [g]
      );
      c("useLayerKeyCommands")(y);
      y = i.jsx(
        d("VideoPlayerCaptionsMenuMainPane.react")
          .VideoPlayerCaptionsMenuMainPane,
        {
          availableCaptionsLocales: b,
          captionsListExpanded: e,
          onPressLog: p,
          selectedCaptionsLocale: q,
          setCaptionsListExpanded: r,
          setPane: t,
          setSelectedCaptionsLocale: a,
          children: f,
        }
      );
      switch (u) {
        case o.CAPTIONS_MAIN:
          break;
        case o.CAPTIONS_DISPLAY_MAIN:
          y = i.jsx(
            d("VideoPlayerCaptionsMenuCaptionsDisplayMainPane.react")
              .VideoPlayerCaptionsMenuCaptionsDisplayMainPane,
            { currentCaptionsDisplay: s, onPressLog: p, setPane: t }
          );
          break;
        case o.CAPTIONS_BG_COLOR:
          y = i.jsx(
            d("VideoPlayerCaptionsMenuCaptionsDisplayPane.react")
              .VideoPlayerCaptionsMenuCaptionsDisplayPane,
            {
              captionsDisplayOption: "captionsBackgroundColor",
              currentCaptionsDisplay: s,
              onPressLog: p,
              setPane: t,
            }
          );
          break;
        case o.CAPTIONS_BG_OPACITY:
          y = i.jsx(
            d("VideoPlayerCaptionsMenuCaptionsDisplayPane.react")
              .VideoPlayerCaptionsMenuCaptionsDisplayPane,
            {
              captionsDisplayOption: "captionsBackgroundOpacity",
              currentCaptionsDisplay: s,
              onPressLog: p,
              setPane: t,
            }
          );
          break;
        case o.CAPTIONS_TEXT_SIZE:
          y = i.jsx(
            d("VideoPlayerCaptionsMenuCaptionsDisplayPane.react")
              .VideoPlayerCaptionsMenuCaptionsDisplayPane,
            {
              captionsDisplayOption: "captionsTextSize",
              currentCaptionsDisplay: s,
              setPane: t,
            }
          );
          break;
        case o.CAPTIONS_TEXT_COLOR:
          y = i.jsx(
            d("VideoPlayerCaptionsMenuCaptionsDisplayPane.react")
              .VideoPlayerCaptionsMenuCaptionsDisplayPane,
            {
              captionsDisplayOption: "captionsTextColor",
              currentCaptionsDisplay: s,
              onPressLog: p,
              setPane: t,
            }
          );
          break;
      }
      return i.jsxs(i.Fragment, {
        children: [
          i.jsx("div", { ref: v, children: y }),
          i.jsx("div", {
            className: "x5yr21d xixxii4 x17qophe x13vifvy xh8yej3 x8knxv4",
            "data-testid": void 0,
            ref: w,
          }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.VideoPlayerCaptionsMenuPaneType = o;
    g.VideoPlayerCaptionsMenu = a;
  },
  98
);
__d(
  "VideoPlayerCaptionsMenuCaptionsDisplayMainPane.react",
  [
    "fbt",
    "ix",
    "CometImage.react",
    "CometPressable.react",
    "FocusRegion.react",
    "VideoPlayerCaptionsMenu.react",
    "focusScopeQueries",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = d("react").useCallback,
      l = {
        captionsDisplayLabel: {
          fontSize: "x1nxh6w3",
          fontWeight: "x1s688f",
          marginStart: "x16n37ib",
          $$css: !0,
        },
        chevronLeft: { alignItems: "x6s0dn4", display: "x3nfvp2", $$css: !0 },
        chevronRight: { display: "x1lliihq", $$css: !0 },
        icon: { display: "x1rg5ohu", $$css: !0 },
        menuHeading: {
          alignItems: "x6s0dn4",
          color: "x14ctfv",
          cursor: "x1ypdohk",
          display: "x78zum5",
          fontWeight: "x1s688f",
          ":hover_textDecoration": "x1lku1pv",
          $$css: !0,
        },
        menuOptionLabel: {
          cursor: "x1ypdohk",
          display: "x1rg5ohu",
          fontSize: "x1nxh6w3",
          fontWeight: "x1s688f",
          width: "x1uncgzr",
          $$css: !0,
        },
        menuOptionRow: {
          color: "x14ctfv",
          display: "x1lliihq",
          outline: "x1a2a7pz",
          paddingTop: "x1y1aw1k",
          paddingEnd: "x4uap5",
          paddingBottom: "xwib8y2",
          paddingStart: "xkhd6sd",
          textAlign: "x1yc453h",
          width: "xafpxmx",
          $$css: !0,
        },
        menuOptions: { marginTop: "x1anpbxc", $$css: !0 },
        menuOptionValue: {
          fontSize: "x1nxh6w3",
          fontWeight: "xo1l8bm",
          $$css: !0,
        },
        pressableOption: { width: "xh8yej3", $$css: !0 },
      },
      m = {
        captionsBackgroundColor: {
          Black: "BLACK",
          Blue: "BLUE",
          Cyan: "CYAN",
          Green: "GREEN",
          Magenta: "MAGENTA",
          Red: "RED",
          White: "WHITE",
          Yellow: "YELLOW",
        },
        captionsBackgroundOpacity: {
          "0%": "TRANSPARENT",
          "25%": "LIGHT",
          "45%": "DEFAULT",
          "75%": "DARK",
          "100%": "OPAQUE",
        },
        captionsTextColor: {
          Black: "BLACK",
          Blue: "BLUE",
          Cyan: "CYAN",
          Green: "GREEN",
          Magenta: "MAGENTA",
          Red: "RED",
          White: "WHITE",
          Yellow: "YELLOW",
        },
        captionsTextSize: {
          "(50%)": "SMALLEST",
          "(75%)": "SMALL",
          "(100%)": "DEFAULT",
          "(125%)": "MEDIUM",
          "(150%)": "BIG",
          "(175%)": "BIGGER",
          "(200%)": "BIGGEST",
        },
      },
      n = {
        "Background Color": {
          ftbLabel: h._("Couleur de l\u2019arri\u00e8re-plan"),
          name: "captionsBackgroundColor",
        },
        "Background Opacity": {
          ftbLabel: h._("Opacit\u00e9 de l\u2019arri\u00e8re-plan"),
          name: "captionsBackgroundOpacity",
        },
        "Text Color": {
          ftbLabel: h._("Couleur du texte"),
          name: "captionsTextColor",
        },
        "Text Size": {
          ftbLabel: h._("Taille du texte"),
          name: "captionsTextSize",
        },
      },
      o = {
        Black: h._("Noir"),
        Blue: h._("Bleu"),
        Cyan: h._("Cyan"),
        Green: h._("Vert"),
        Magenta: h._("Magenta"),
        Red: h._("Rouge"),
        White: h._("Blanc"),
        Yellow: h._("Jaune"),
      };
    function p(a) {
      var b = null,
        c = null;
      switch (a) {
        case "(50%)":
          b = h._("Petit");
          c = "X-";
          break;
        case "(75%)":
          b = h._("Petit");
          break;
        case "(125%)":
          b = h._("Grand");
          break;
        case "(150%)":
          b = h._("Grand");
          c = "X-";
          break;
        case "(175%)":
          b = h._("Grand");
          c = "XX-";
          break;
        case "(200%)":
          b = h._("Grand");
          c = "XXX-";
          break;
        case "(100%)":
          b = h._("Moyen");
      }
      return j.jsxs("span", { children: [c != null && c, b, a] });
    }
    p.displayName = p.name + " [from " + f.id + "]";
    var q = {
      captionsBackgroundColor: d("VideoPlayerCaptionsMenu.react")
        .VideoPlayerCaptionsMenuPaneType.CAPTIONS_BG_COLOR,
      captionsBackgroundOpacity: d("VideoPlayerCaptionsMenu.react")
        .VideoPlayerCaptionsMenuPaneType.CAPTIONS_BG_OPACITY,
      captionsTextColor: d("VideoPlayerCaptionsMenu.react")
        .VideoPlayerCaptionsMenuPaneType.CAPTIONS_TEXT_COLOR,
      captionsTextSize: d("VideoPlayerCaptionsMenu.react")
        .VideoPlayerCaptionsMenuPaneType.CAPTIONS_TEXT_SIZE,
    };
    function r(a) {
      var b = a.onPressLog,
        d = a.option,
        e = a.optionVal,
        f = a.setPane,
        g = n[d].name;
      a = k(
        function () {
          f(q[g]), b && b("captions_display_main_menu", d);
        },
        [g, f, d, b]
      );
      var h = null;
      switch (g) {
        case "captionsTextColor":
        case "captionsBackgroundColor":
          h = o[e];
          break;
        default:
          h = e;
          break;
      }
      var m = d.replace(" ", "");
      m = "video-player-captions-menu-captions-display-main-" + m;
      return j.jsxs(c("CometPressable.react"), {
        onPress: a,
        xstyle: l.menuOptionRow,
        children: [
          j.jsxs("div", {
            className: "x1ypdohk x1rg5ohu x1nxh6w3 x1s688f x1uncgzr",
            children: [
              n[d].ftbLabel,
              j.jsx("div", {
                className: "x1nxh6w3 xo1l8bm",
                "data-testid": void 0,
                children: g === "captionsTextSize" ? p(e) : h,
              }),
            ],
          }),
          j.jsx("div", {
            className: "x1rg5ohu",
            children: j.jsx("div", {
              className: "x1lliihq",
              children: j.jsx("div", {
                style: { display: "table-cell" },
                children: j.jsx(c("CometImage.react"), { src: i("480588") }),
              }),
            }),
          }),
        ],
      });
    }
    r.displayName = r.name + " [from " + f.id + "]";
    function a(a) {
      var b = a.currentCaptionsDisplay,
        e = a.onPressLog,
        f = a.setPane;
      a = k(
        function () {
          f(
            d("VideoPlayerCaptionsMenu.react").VideoPlayerCaptionsMenuPaneType
              .CAPTIONS_MAIN
          );
        },
        [f]
      );
      return j.jsxs(d("FocusRegion.react").FocusRegion, {
        autoFocusQuery:
          d("focusScopeQueries").headerFirstTabbableSecondScopeQuery,
        recoverFocusQuery:
          d("focusScopeQueries").headerFirstTabbableSecondScopeQuery,
        children: [
          j.jsx("div", {
            className: "x6s0dn4 x14ctfv x1ypdohk x78zum5 x1s688f x1lku1pv",
            children: j.jsxs(c("CometPressable.react"), {
              onPress: a,
              xstyle: l.pressableOption,
              children: [
                j.jsx("span", {
                  className: "x6s0dn4 x3nfvp2",
                  children: j.jsx(c("CometImage.react"), { src: i("480580") }),
                }),
                j.jsx("span", {
                  className: "x1nxh6w3 x1s688f x16n37ib",
                  children: h._("Options de sous-titres"),
                }),
              ],
            }),
          }),
          j.jsx("div", {
            className: "x1anpbxc",
            "data-testid": void 0,
            children: Object.keys(n).map(function (a) {
              var c = n[a].name,
                d = m[c];
              d = Object.fromEntries(
                Object.entries(d).map(function (a) {
                  var b = a[0];
                  a = a[1];
                  return [a, b];
                })
              );
              d = b != null ? d[b[c]] : "";
              return j.jsx(
                r,
                { onPressLog: e, option: a, optionVal: d, setPane: f },
                a
              );
            }),
          }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.captionsDisplayOptionsMap = m;
    g.colorsFBTMap = o;
    g.getFontSizeDivWithFBTLabel = p;
    g.VideoPlayerCaptionsMenuCaptionsDisplayMainPane = a;
  },
  98
);
__d(
  "VideoPlayerCaptionsSettingMutation",
  ["CometRelay", "VideoPlayerCaptionsSettingMutation.graphql"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i =
        h !== void 0
          ? h
          : (h = b("VideoPlayerCaptionsSettingMutation.graphql"));
    function a(a, b, c) {
      return d("CometRelay").commitMutation(a, {
        mutation: i,
        onCompleted: c && c.onCompleted,
        onError: c && c.onError,
        optimisticResponse: { video_captions_setting: { success: !0 } },
        variables: {
          input: {
            captions_background_color: b.captions_background_color,
            captions_background_opacity: b.captions_background_opacity,
            captions_text_color: b.captions_text_color,
            captions_text_size: b.captions_text_size,
            client_mutation_id: "www_captions_settings",
          },
        },
      });
    }
    g.commit = a;
  },
  98
);
__d(
  "VideoPlayerCaptionsMenuCaptionsDisplayPane.react",
  [
    "fbt",
    "ix",
    "CometImage.react",
    "CometPressable.react",
    "CometRelay",
    "FocusRegion.react",
    "TetraIcon.react",
    "VideoPlayerCaptionsMenu.react",
    "VideoPlayerCaptionsMenuCaptionsDisplayMainPane.react",
    "VideoPlayerCaptionsSettingMutation",
    "VideoPlayerHooks",
    "fbicon",
    "focusScopeQueries",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = d("react").useCallback,
      l = {
        chevronLeft: {
          alignItems: "x6s0dn4",
          display: "x3nfvp2",
          width: "x1849jeq",
          $$css: !0,
        },
        icon: { display: "x1rg5ohu", width: "x1849jeq", $$css: !0 },
        menuHeading: {
          alignItems: "x6s0dn4",
          color: "x14ctfv",
          cursor: "x1ypdohk",
          display: "x78zum5",
          fontSize: "x1nxh6w3",
          fontWeight: "x1s688f",
          ":hover_textDecoration": "x1lku1pv",
          $$css: !0,
        },
        menuLabel: { cursor: "x1ypdohk", display: "x1rg5ohu", $$css: !0 },
        menuOptionRow: {
          color: "x14ctfv",
          display: "x1lliihq",
          outline: "x1a2a7pz",
          paddingTop: "x1y1aw1k",
          paddingEnd: "x4uap5",
          paddingBottom: "xwib8y2",
          paddingStart: "xkhd6sd",
          textAlign: "x1yc453h",
          $$css: !0,
        },
        menuOptions: {
          fontSize: "x1nxh6w3",
          fontWeight: "xo1l8bm",
          marginTop: "x1anpbxc",
          $$css: !0,
        },
        pressableOption: { width: "xh8yej3", $$css: !0 },
      },
      m = {
        captionsBackgroundColor: h._("Couleur de l\u2019arri\u00e8re-plan"),
        captionsBackgroundOpacity: h._(
          "Opacit\u00e9 de l\u2019arri\u00e8re-plan"
        ),
        captionsTextColor: h._("Couleur du texte"),
        captionsTextSize: h._("Taille du texte"),
      },
      n = function (a) {
        return {
          captions_background_color: a.captionsBackgroundColor,
          captions_background_opacity: a.captionsBackgroundOpacity,
          captions_text_color: a.captionsTextColor,
          captions_text_size: a.captionsTextSize,
        };
      };
    function o(a) {
      var b = a.captionsDisplayOption,
        e = a.currentCaptionsDisplay,
        f = a.onPressLog,
        g = a.option,
        h = a.selected,
        m = a.setPane,
        o = d("VideoPlayerHooks").useController();
      a = h;
      var p = d("VideoPlayerCaptionsMenuCaptionsDisplayMainPane.react")
        .captionsDisplayOptionsMap[b];
      h = null;
      switch (b) {
        case "captionsTextColor":
        case "captionsBackgroundColor":
          h = d("VideoPlayerCaptionsMenuCaptionsDisplayMainPane.react")
            .colorsFBTMap[g];
          break;
        default:
          h = g;
      }
      var q = "video-player-captions-menu-captions-display-pane-" + b + "-" + g;
      q = k(
        function () {
          a = !0;
          if (e != null) {
            e[b] = p[g];
            o.setCaptionsDisplayStyle(e);
            var c = n(e);
            d("VideoPlayerCaptionsSettingMutation").commit(r, c);
          }
          m(
            d("VideoPlayerCaptionsMenu.react").VideoPlayerCaptionsMenuPaneType
              .CAPTIONS_DISPLAY_MAIN
          );
          f && f(b);
        },
        [e, p, b, o, g]
      );
      var r = d("CometRelay").useRelayEnvironment();
      return j.jsxs(c("CometPressable.react"), {
        onPress: q,
        testid: void 0,
        xstyle: l.menuOptionRow,
        children: [
          j.jsx("div", {
            className: "x1rg5ohu x1849jeq",
            children:
              a &&
              j.jsx("div", {
                "data-testid": void 0,
                children: j.jsx(c("TetraIcon.react"), {
                  color: "white",
                  icon: d("fbicon")._(i("477813"), 16),
                }),
              }),
          }),
          b === "captionsTextSize"
            ? d(
                "VideoPlayerCaptionsMenuCaptionsDisplayMainPane.react"
              ).getFontSizeDivWithFBTLabel(g)
            : j.jsx("div", { className: "x1ypdohk x1rg5ohu", children: h }),
        ],
      });
    }
    o.displayName = o.name + " [from " + f.id + "]";
    function a(a) {
      var b = a.captionsDisplayOption,
        e = a.currentCaptionsDisplay,
        f = a.onPressLog,
        g = a.setPane;
      a = m[b];
      var h = d("VideoPlayerCaptionsMenuCaptionsDisplayMainPane.react")
          .captionsDisplayOptionsMap[b],
        n = e != null ? e[b] : null,
        p = k(
          function () {
            g(
              d("VideoPlayerCaptionsMenu.react").VideoPlayerCaptionsMenuPaneType
                .CAPTIONS_DISPLAY_MAIN
            );
          },
          [g]
        ),
        q = "video-player-captions-menu-captions-display-pane-" + b;
      return j.jsxs(d("FocusRegion.react").FocusRegion, {
        autoFocusQuery:
          d("focusScopeQueries").headerFirstTabbableSecondScopeQuery,
        recoverFocusQuery:
          d("focusScopeQueries").headerFirstTabbableSecondScopeQuery,
        children: [
          j.jsx("div", {
            className:
              "x6s0dn4 x14ctfv x1ypdohk x78zum5 x1nxh6w3 x1s688f x1lku1pv",
            children: j.jsxs(c("CometPressable.react"), {
              onPress: p,
              testid: void 0,
              xstyle: l.pressableOption,
              children: [
                j.jsx("span", {
                  className: "x6s0dn4 x3nfvp2 x1849jeq",
                  children: j.jsx(c("CometImage.react"), { src: i("480580") }),
                }),
                a,
              ],
            }),
          }),
          j.jsx("div", {
            className: "x1nxh6w3 xo1l8bm x1anpbxc",
            "data-testid": void 0,
            children: Object.keys(h).map(function (a) {
              var c = n === h[a];
              return j.jsx(
                o,
                {
                  captionsDisplayOption: b,
                  currentCaptionsDisplay: e,
                  onPressLog: f,
                  option: a,
                  selected: c,
                  setPane: g,
                },
                a
              );
            }),
          }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.VideoPlayerCaptionsMenuCaptionsDisplayPane = a;
  },
  98
);
__d(
  "VideoPlayerCaptionsMenuMainPane.react",
  [
    "fbt",
    "ix",
    "CometPressable.react",
    "CometScrollableArea.react",
    "FocusRegion.react",
    "TetraIcon.react",
    "VideoPlayerCaptionsMenuTopBar.react",
    "VideoPlayerHooks",
    "fbicon",
    "focusScopeQueries",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = d("react").useEffect,
      l = {
        icon: { display: "x1rg5ohu", width: "xw4jnvo", $$css: !0 },
        menuLabel: {
          cursor: "x1ypdohk",
          display: "x1rg5ohu",
          marginStart: "x17adc0v",
          width: "xzjbwwf",
          $$css: !0,
        },
        menuOptionRow: {
          color: "x14ctfv",
          display: "x1lliihq",
          fontSize: "x1nxh6w3",
          fontWeight: "xo1l8bm",
          minWidth: "xfvyar9",
          outline: "x1a2a7pz",
          paddingTop: "x1y1aw1k",
          paddingEnd: "x4uap5",
          paddingBottom: "xwib8y2",
          paddingStart: "xkhd6sd",
          textAlign: "x1yc453h",
          ":hover_backgroundColor": "xx8nu07",
          $$css: !0,
        },
        menuOptions: {
          marginTop: "x1anpbxc",
          maxHeight: "x15eivr9",
          $$css: !0,
        },
        moreOptionsLabel: {
          cursor: "x1ypdohk",
          display: "x1rg5ohu",
          marginStart: "x1iedhe",
          $$css: !0,
        },
      },
      m = 5;
    function n(a) {
      var b,
        e = a.captions,
        f = a.captionsVisible,
        g = a.controller,
        k = a.focused,
        m = a.onPressLog,
        n = a.setSelectedCaptionsLocale;
      a = d("VideoPlayerHooks").useIsVideoBroadcast();
      a = e.localized_creation_method != null || a;
      b =
        "video-player-captions-menu-language-list-item-" +
        ((b = e.localized_language) != null ? b : "");
      return j.jsxs(c("CometPressable.react"), {
        onPress: function () {
          var a;
          e.locale != null && n(e.locale);
          f || g.setCaptionsVisible(!0);
          e.captions_url != null && g.setCaptionsUrl(e.captions_url);
          m &&
            m(
              "captions_language_selector",
              (a = e.localized_language) != null ? a : ""
            );
        },
        testid: void 0,
        xstyle: l.menuOptionRow,
        children: [
          j.jsx("div", {
            className: "x1rg5ohu xw4jnvo",
            children:
              k &&
              j.jsx("div", {
                "data-testid": void 0,
                children: j.jsx(c("TetraIcon.react"), {
                  color: "white",
                  icon: d("fbicon")._(i("477813"), 16),
                }),
              }),
          }),
          j.jsxs("div", {
            className: "x1ypdohk x1rg5ohu x17adc0v xzjbwwf",
            children: [
              e.localized_language,
              (b = e.localized_country) != null ? b : null,
              !a && h._("(Fourni par l\u2019auteur)"),
            ],
          }),
        ],
      });
    }
    n.displayName = n.name + " [from " + f.id + "]";
    function a(a) {
      var b = a.availableCaptionsLocales,
        e = a.captionsListExpanded,
        f = a.children,
        g = a.onPressLog,
        o = a.selectedCaptionsLocale,
        p = a.setCaptionsListExpanded,
        q = a.setPane,
        r = a.setSelectedCaptionsLocale,
        s = d("VideoPlayerHooks").useController(),
        t = d("VideoPlayerHooks").useCaptionsVisible();
      a = b != null ? b.length : 0;
      k(
        function () {
          t || r("");
        },
        [t, r]
      );
      return b == null
        ? null
        : j.jsx(d("FocusRegion.react").FocusRegion, {
            autoFocusQuery:
              d("focusScopeQueries").headerFirstTabbableSecondScopeQuery,
            recoverFocusQuery:
              d("focusScopeQueries").headerFirstTabbableSecondScopeQuery,
            children: j.jsxs("div", {
              "data-testid": void 0,
              children: [
                j.jsx(c("VideoPlayerCaptionsMenuTopBar.react"), {
                  availableCaptionsLocales: b,
                  onPressLog: g,
                  setPane: q,
                }),
                f,
                j.jsx(c("CometScrollableArea.react"), {
                  hideScrollbar: !0,
                  children: j.jsxs("div", {
                    className: "x1anpbxc x15eivr9",
                    "data-testid": void 0,
                    children: [
                      j.jsxs(c("CometPressable.react"), {
                        onPress: function () {
                          r(""), s.setCaptionsVisible(!1);
                        },
                        xstyle: l.menuOptionRow,
                        children: [
                          j.jsx("div", {
                            className: "x1rg5ohu xw4jnvo",
                            children:
                              o === "" &&
                              j.jsx(c("TetraIcon.react"), {
                                color: "white",
                                icon: d("fbicon")._(i("477813"), 16),
                              }),
                          }),
                          j.jsx("div", {
                            className: "x1ypdohk x1rg5ohu x17adc0v xzjbwwf",
                            children: h._("D\u00e9sactiv\u00e9"),
                          }),
                        ],
                      }),
                      b.slice(0, 4).map(function (a) {
                        var b = a.locale === o;
                        return a.localized_language != null
                          ? j.jsx(
                              n,
                              {
                                captions: a,
                                captionsVisible: t,
                                controller: s,
                                focused: b,
                                onPressLog: g,
                                setSelectedCaptionsLocale: r,
                              },
                              a.locale
                            )
                          : null;
                      }),
                      a >= m &&
                        !e &&
                        j.jsx(c("CometPressable.react"), {
                          onPress: function () {
                            p(!0);
                          },
                          xstyle: l.menuOptionRow,
                          children: j.jsx("div", {
                            className: "x1ypdohk x1rg5ohu x1iedhe",
                            children: h._("Voir plus"),
                          }),
                        }),
                      e &&
                        b.slice(4).map(function (a) {
                          var b = a.locale === o;
                          return a.localized_language != null
                            ? j.jsx(
                                n,
                                {
                                  captions: a,
                                  captionsVisible: t,
                                  controller: s,
                                  focused: b,
                                  setSelectedCaptionsLocale: r,
                                },
                                a.locale
                              )
                            : null;
                        }),
                      e &&
                        j.jsx(c("CometPressable.react"), {
                          onPress: function () {
                            p(!1);
                          },
                          xstyle: l.menuOptionRow,
                          children: j.jsx("div", {
                            className: "x1ypdohk x1rg5ohu x1iedhe",
                            children: h._("Voir moins"),
                          }),
                        }),
                    ],
                  }),
                }),
              ],
            }),
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.VideoPlayerCaptionsMenuMainPane = a;
  },
  98
);
__d(
  "VideoPlayerCaptionsMenuTopBar.react",
  [
    "fbt",
    "ix",
    "CometImage.react",
    "CometPressable.react",
    "VideoPlayerCaptionsMenu.react",
    "VideoPlayerHooks",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = d("react").useCallback,
      l = {
        default: {
          color: "x14ctfv",
          display: "x78zum5",
          minWidth: "x1jzhcrs",
          $$css: !0,
        },
        label: { fontSize: "x1nxh6w3", fontWeight: "x1s688f", $$css: !0 },
        labelAutoGenerated: {
          fontSize: "x1nxh6w3",
          fontStyle: "x1k4tb9n",
          $$css: !0,
        },
        option: {
          alignItems: "x6s0dn4",
          color: "x14ctfv",
          cursor: "x1ypdohk",
          display: "x3nfvp2",
          flexGrow: "x1bhwmg6",
          justifyContent: "x13a6bvl",
          marginStart: "x8zvzrc",
          $$css: !0,
        },
        optionsLabel: {
          display: "x3nfvp2",
          fontWeight: "xo1l8bm",
          marginStart: "x1mnrxsn",
          $$css: !0,
        },
        pressableOption: { width: "xh8yej3", $$css: !0 },
        settingIconRight: { display: "x3nfvp2", $$css: !0 },
      };
    function a(a) {
      var b = a.availableCaptionsLocales,
        e = a.onPressLog,
        f = a.setPane;
      a = k(
        function () {
          f(
            d("VideoPlayerCaptionsMenu.react").VideoPlayerCaptionsMenuPaneType
              .CAPTIONS_DISPLAY_MAIN
          ),
            e && e("captions_main_menu_top_bar");
        },
        [f, e]
      );
      var g = d("VideoPlayerHooks").useIsVideoBroadcast();
      b =
        (b == null
          ? void 0
          : b.some(function (a) {
              return a.localized_creation_method != null;
            })) || g;
      return j.jsxs("div", {
        children: [
          j.jsx("div", {
            className: "x14ctfv x78zum5 x1jzhcrs",
            children: j.jsxs(c("CometPressable.react"), {
              onPress: a,
              testid: void 0,
              xstyle: l.pressableOption,
              children: [
                j.jsx("div", {
                  className: "x1nxh6w3 x1s688f",
                  children: h._("Sous-titres"),
                }),
                j.jsxs("div", {
                  className:
                    "x6s0dn4 x14ctfv x1ypdohk x3nfvp2 x1bhwmg6 x13a6bvl x8zvzrc",
                  children: [
                    j.jsx("span", {
                      className: "x3nfvp2",
                      children: j.jsx(c("CometImage.react"), {
                        src: i("492300"),
                      }),
                    }),
                    j.jsx("div", {
                      className: "x3nfvp2 xo1l8bm x1mnrxsn",
                      children: h._("Options"),
                    }),
                  ],
                }),
              ],
            }),
          }),
          b != null &&
            b &&
            j.jsx("div", {
              className: "x1nxh6w3 x1k4tb9n",
              children: h._("G\u00e9n\u00e9r\u00e9s automatiquement"),
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
  "VideoPlayerLoggingSuboriginContext",
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
  "VideoPlayerCaptionsControl.react",
  [
    "fbt",
    "ix",
    "CometRelay",
    "IntlCurrentLocale",
    "VideoPlayerCaptionsControl_video.graphql",
    "VideoPlayerCaptionsMenu.react",
    "VideoPlayerControlIcon.react",
    "VideoPlayerDefaultControlsProperties",
    "VideoPlayerHooks",
    "VideoPlayerLoggingSuboriginContext",
    "VideoPlayerUserInteractionCounter",
    "fbicon",
    "react",
    "requireDeferred",
    "stylex",
    "useMinifiedProductAttribution",
    "usePlayerOriginRouteTracePolicy",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react");
    e = d("react");
    var l = e.useCallback,
      m = e.useContext,
      n = e.useEffect,
      o = e.useRef,
      p = e.useState,
      q = c("requireDeferred")("VideoHomeTypedLiteLogger").__setRef(
        "VideoPlayerCaptionsControl.react"
      ),
      r = {
        alignToEnd: { right: "x1g75g36", $$css: !0 },
        default: {
          display: "x1rg5ohu",
          marginTop: "x1k70j0n",
          marginEnd: "x1w0mnb",
          marginBottom: "xzueoph",
          marginStart: "x1mnrxsn",
          $$css: !0,
        },
        menu: {
          backgroundColor: "x1av4zun",
          borderTopStartRadius: "x1lcm9me",
          borderTopEndRadius: "x1yr5g0i",
          borderBottomEndRadius: "xrt01vj",
          borderBottomStartRadius: "x10y3i5r",
          bottom: "xacj9c0",
          color: "x14ctfv",
          marginLeft: "x89ytp0",
          maxHeight: "x1hdnelj",
          maxWidth: "xgmxx4u",
          paddingTop: "xyamay9",
          paddingEnd: "x1pi30zi",
          paddingBottom: "x1l90r2v",
          paddingStart: "x1swvt13",
          position: "x10l6tqk",
          right: "xk6ci0l",
          width: "x1602a87",
          $$css: !0,
        },
        menuCompact: { right: "xwjie4w", $$css: !0 },
        positionRelative: {
          position: "x1n2onr6",
          whiteSpace: "xuxw1ft",
          $$css: !0,
        },
      },
      s = "asr",
      t = function (a) {
        return a.length < 2 ? null : a.substr(0, 2);
      };
    function a(a) {
      var e = a.alignMenuToIcon;
      e = e === void 0 ? !1 : e;
      var f = a.captionsVisible,
        g = a.children;
      g = g === void 0 ? null : g;
      var u = a.compactMenu,
        v = a.icon,
        w = a.menuOpened,
        x = a.onMenuOpen,
        y = a.onUserInteraction,
        z = a.setMenuOpened;
      a = a.video;
      var A = h._("Sous-titres");
      d("VideoPlayerUserInteractionCounter").useVideoPlayerUserInteraction(
        "video_captions_menu",
        w ===
          d("VideoPlayerDefaultControlsProperties").VideoMenuType
            .VIDEO_CAPTIONS_MENU,
        y
      );
      y = d("CometRelay").useFragment(
        j !== void 0 ? j : (j = b("VideoPlayerCaptionsControl_video.graphql")),
        a
      );
      var B = d("VideoPlayerHooks").useMuted(),
        C = d("VideoPlayerHooks").useController(),
        D = c("usePlayerOriginRouteTracePolicy")(),
        E = y == null ? void 0 : y.video_available_captions_locales,
        F = y == null ? void 0 : y.captions_url;
      a = p("");
      y = a[0];
      var G = a[1],
        H = o(null),
        I = o(null);
      n(
        function () {
          E == null
            ? void 0
            : E.map(function (a) {
                a.captions_url === F &&
                  a.locale != null &&
                  ((H.current = a.locale), G(a.locale));
              });
        },
        [E, F]
      );
      a = [];
      var J = c("IntlCurrentLocale").code;
      n(
        function () {
          var a;
          H.current !== s &&
          t((a = H.current) != null ? a : "") !== t(J) &&
          I.current === null
            ? (C.setCaptionsVisible(!1), (I.current = !1))
            : B && !f && I.current === null
            ? ((I.current = !0), C.setCaptionsVisible(!0))
            : !B &&
              I.current === !0 &&
              (C.setCaptionsVisible(!1), (I.current = !1));
        },
        [f, C, B, J]
      );
      if (E != null)
        for (
          var K = E,
            L = Array.isArray(K),
            M = 0,
            K = L
              ? K
              : K[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
          ;

        ) {
          var N;
          if (L) {
            if (M >= K.length) break;
            N = K[M++];
          } else {
            M = K.next();
            if (M.done) break;
            N = M.value;
          }
          N = N;
          N = {
            captions_url: N.captions_url,
            locale: N.locale,
            localized_country: N.localized_country,
            localized_creation_method: N.localized_creation_method,
            localized_language: N.localized_language,
          };
          a.push(N);
        }
      a.sort(function (a, b) {
        return ((a = a.localized_language) != null ? a : "") >
          ((a = b.localized_language) != null ? a : "")
          ? 1
          : -1;
      });
      var O =
        w ===
        d("VideoPlayerDefaultControlsProperties").VideoMenuType
          .VIDEO_CAPTIONS_MENU;
      N = p(!1);
      M = N[0];
      L = N[1];
      var P = m(c("VideoPlayerLoggingSuboriginContext")),
        Q = c("useMinifiedProductAttribution")(),
        R = l(
          function (a, b) {
            a === void 0 && (a = null),
              b === void 0 && (b = null),
              q.onReady(function (c) {
                c.log({
                  attribution_id_v2: Q,
                  click_point: a,
                  event: "click",
                  event_target_info: D,
                  event_target_sub_type: b,
                  player_suborigin: P,
                });
              });
          },
          [Q, D, P]
        );
      return k.jsxs("div", {
        className: c("stylex")(r["default"], e === !0 && r.positionRelative),
        "data-testid": void 0,
        children: [
          O &&
            k.jsx("div", {
              className: c("stylex")(
                r.menu,
                u === !0 && r.menuCompact,
                e === !0 && r.alignToEnd
              ),
              children: k.jsx(
                d("VideoPlayerCaptionsMenu.react").VideoPlayerCaptionsMenu,
                {
                  availableCaptionsLocales: a,
                  captionsListExpanded: M,
                  onClose: function () {
                    z != null && z(null);
                  },
                  onPressLog: R,
                  selectedCaptionsLocale: y,
                  setCaptionsListExpanded: L,
                  setSelectedCaptionsLocale: G,
                  children: g,
                }
              ),
            }),
          k.jsx(c("VideoPlayerControlIcon.react"), {
            icon:
              v == null
                ? f
                  ? d("fbicon")._(i("662652"), 20)
                  : d("fbicon")._(i("662655"), 20)
                : v,
            label: A,
            onPress: function () {
              z != null &&
                z(
                  O
                    ? null
                    : d("VideoPlayerDefaultControlsProperties").VideoMenuType
                        .VIDEO_CAPTIONS_MENU
                ),
                !O && x != null && x(),
                R("closed_captions_button");
            },
            tooltip: A,
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
  "VideoPlayerControlsGroups.react",
  [
    "VideoControlsContainerFocusedContext",
    "VideoPlayerControlsHiddenContext",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useContext,
      j = {
        contracted: {
          paddingTop: "xexx8yu",
          paddingEnd: "x1mpkggp",
          paddingBottom: "x18d9i69",
          paddingStart: "x1t2a60a",
          $$css: !0,
        },
        default: {
          alignItems: "x6s0dn4",
          display: "x78zum5",
          flexDirection: "x1q0g3np",
          flexShrink: "x2lah0s",
          flexWrap: "xozqiw3",
          $$css: !0,
        },
        expanded: { flexGrow: "x1iyjqo2", $$css: !0 },
        hidden: { opacity: "x1fmh03i", pointerEvents: "x47corl", $$css: !0 },
        noPaddingEnd: { paddingEnd: "x4uap5", $$css: !0 },
        noPaddingStart: { paddingStart: "xkhd6sd", $$css: !0 },
        visible: { opacity: "x1hc1fzr", $$css: !0 },
      };
    function a(a) {
      var b = a.children,
        d = a.isVisible;
      d = d === void 0 ? !0 : d;
      var e = a.noPaddingEnd;
      e = e === void 0 ? !1 : e;
      a = a.noPaddingStart;
      a = a === void 0 ? !1 : a;
      var f = i(c("VideoControlsContainerFocusedContext"));
      d = d || f;
      f = i(c("VideoPlayerControlsHiddenContext"));
      return h.jsx("div", {
        className: c("stylex")(
          j["default"],
          j.contracted,
          e && j.noPaddingEnd,
          a && j.noPaddingStart,
          d ? j.visible : j.hidden
        ),
        children: h.jsx(c("VideoPlayerControlsHiddenContext").Provider, {
          value: f || !d,
          children: b,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function b(a) {
      var b = a.children;
      a = a.isVisible;
      a = a === void 0 ? !0 : a;
      var d = i(c("VideoControlsContainerFocusedContext"));
      a = a || d;
      d = i(c("VideoPlayerControlsHiddenContext"));
      return h.jsx("div", {
        className: c("stylex")(
          j["default"],
          j.expanded,
          a ? j.visible : j.hidden
        ),
        children: h.jsx(c("VideoPlayerControlsHiddenContext").Provider, {
          value: d || !a,
          children: b,
        }),
      });
    }
    b.displayName = b.name + " [from " + f.id + "]";
    g.Contracted = a;
    g.Expanded = b;
  },
  98
);
__d(
  "VideoPlayerCastControlShim.react",
  [
    "CometPlaceholder.react",
    "VideoPlayerControlsGroups.react",
    "cr:11811",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var e = a.isVisible;
      a = babelHelpers.objectWithoutPropertiesLoose(a, ["isVisible"]);
      return h.jsx(d("VideoPlayerControlsGroups.react").Contracted, {
        isVisible: e,
        noPaddingEnd: !0,
        noPaddingStart: !0,
        children: h.jsx(c("CometPlaceholder.react"), {
          fallback: null,
          children: h.jsx(b("cr:11811"), babelHelpers["extends"]({}, a)),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerCastControlShimImpl.legacy.react",
  ["JSResourceForInteraction", "lazyLoadComponent"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("lazyLoadComponent")(
      c("JSResourceForInteraction")("VideoPlayerCastControl.react").__setRef(
        "VideoPlayerCastControlShimImpl.legacy.react"
      )
    );
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerControlsContainerOverlay.react",
  [
    "CometErrorBoundary.react",
    "FocusWithinHandler.react",
    "VideoControlsContainerFocusedContext",
    "VideoPlayerControlsBottomRowAddOnContext",
    "VideoPlayerControlsHiddenContext",
    "VideoPlayerHooks",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useEffect,
      j = 44,
      k = {
        backgroundGradient: {
          backgroundImage: "x11v4dcs",
          bottom: "x1ey2m1c",
          height: "xn3w4p2",
          position: "x10l6tqk",
          transitionDuration: "x1d8287x",
          transitionProperty: "x6o7n8i",
          transitionTimingFunction: "xl405pv",
          width: "xh8yej3",
          zIndex: "x8knxv4",
          $$css: !0,
        },
        default: {
          bottom: "x1ey2m1c",
          flexDirection: "x1q0g3np",
          position: "x10l6tqk",
          transitionDuration: "x1d8287x",
          transitionProperty: "x6o7n8i",
          transitionTimingFunction: "xl405pv",
          width: "xh8yej3",
          zIndex: "x11uqc5h",
          $$css: !0,
        },
        firstRow: {
          alignItems: "x6s0dn4",
          direction: "xzt5al7",
          display: "x78zum5",
          flexDirection: "x1q0g3np",
          $$css: !0,
        },
        hidden: {
          opacity: "xg01cxk",
          pointerEvents: "x47corl",
          visibility: "xlshs6z",
          $$css: !0,
        },
        visible: { opacity: "x1hc1fzr", $$css: !0 },
      };
    function a(a) {
      var b = a.children,
        e = a.initialBottomRowAddOn;
      e = e === void 0 ? null : e;
      var f = a.isBackgroundVisible,
        g = a.isVisible,
        l = a.xstyle,
        m = d(
          "VideoPlayerControlsBottomRowAddOnContext"
        ).useVideoPlayerControlsBottomRowAddOn(e);
      a = d("VideoPlayerHooks").useVideoPlayerCaptionsReservationActions();
      var n = a.release,
        o = a.reserve;
      i(
        function () {
          if (Boolean(g) || Boolean(f)) {
            var a = o({ location: "bottom", size: j });
            return function () {
              n(a);
            };
          }
        },
        [g, f, o, n]
      );
      var p = f === !1 || g === !1,
        q = f === !0 || g === !0;
      return h.jsx(c("FocusWithinHandler.react"), {
        children: function (a, d) {
          return h.jsx(c("VideoControlsContainerFocusedContext").Provider, {
            value: d,
            children: h.jsxs("div", {
              className: c("stylex")(
                k["default"],
                m == null && k.firstRow,
                g === !1 && k.hidden,
                g === !0 && k.visible
              ),
              "data-testid": void 0,
              children: [
                h.jsx("div", {
                  className: c("stylex")(
                    k.backgroundGradient,
                    p && k.hidden,
                    q && k.visible,
                    l
                  ),
                }),
                h.jsx(c("VideoPlayerControlsHiddenContext").Provider, {
                  value: p,
                  children:
                    m == null
                      ? b
                      : h.jsxs(h.Fragment, {
                          children: [
                            h.jsx("div", {
                              className: "x6s0dn4 xzt5al7 x78zum5 x1q0g3np",
                              children: b,
                            }),
                            h.jsx(c("CometErrorBoundary.react"), {
                              children: m,
                            }),
                          ],
                        }),
                }),
              ],
            }),
          });
        },
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometTahoeCustomVideoAreaContext",
  ["emptyFunction", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useMemo,
      j = b.useState,
      k = h.createContext({
        customVideoAreaHidden: !0,
        setCustomVideoAreaHidden: c("emptyFunction"),
      });
    function a(a) {
      a = a.children;
      var b = j(!0),
        c = b[0],
        d = b[1];
      b = i(
        function () {
          return { customVideoAreaHidden: c, setCustomVideoAreaHidden: d };
        },
        [c, d]
      );
      return h.jsx(k.Provider, { value: b, children: a });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.CometTahoeCustomVideoAreaContext = k;
    g.CometTahoeCustomVideoAreaContextProvider = a;
  },
  98
);
__d(
  "CometTahoeSidePaneContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = {
      rightRailExpanded: !1,
      rightRailHidden: !1,
      setRightRailExpanded: function () {},
      setRightRailHidden: function () {},
    };
    c = a.createContext(b);
    g["default"] = c;
  },
  98
);
__d(
  "VideoPlayerExpandSidePanelControl.react",
  [
    "fbt",
    "ix",
    "CometTahoeSidePaneContext",
    "VideoPlayerControlIcon.react",
    "fbicon",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = d("react").useContext;
    function a() {
      var a = k(c("CometTahoeSidePaneContext")),
        b = a.rightRailExpanded,
        e = a.setRightRailExpanded;
      a = b
        ? h._("R\u00e9duire les commentaires")
        : h._("Agrandir les commentaires");
      return j.jsx("div", {
        className: "x1rg5ohu x1k70j0n x1w0mnb xzueoph x1mnrxsn",
        children: j.jsx(c("VideoPlayerControlIcon.react"), {
          icon: b
            ? d("fbicon")._(i("557039"), 20)
            : d("fbicon")._(i("557052"), 20),
          label: a,
          onPress: function () {
            e(!b);
          },
          tooltip: a,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerJoinOnPortalControl.react",
  ["cr:1795495", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    a = function (a) {
      a = a.isVisible;
      return !a || b("cr:1795495") == null ? null : h.jsx(b("cr:1795495"), {});
    };
    c = a;
    g["default"] = c;
  },
  98
);
__d(
  "VideoPlayerPlaybackControlBase.react",
  [
    "fbt",
    "ix",
    "VideoPlayerControlIcon.react",
    "fbicon",
    "react",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function a(a) {
      var b = a.onPress;
      a = a.playbackIcon;
      var e, f;
      switch (a) {
        case "pause":
          e = h._("Pause");
          f = d("fbicon")._(i("497675"), 20);
          break;
        case "replay":
          e = h._("Relire");
          f = d("fbicon")._(i("534219"), 20);
          break;
        case "play":
          e = h._("Lire");
          f = d("fbicon")._(i("484863"), 20);
          break;
        default:
          a;
          throw c("unrecoverableViolation")(
            "The playback icon is unsupported " + a,
            "comet_video_player"
          );
      }
      return j.jsx(c("VideoPlayerControlIcon.react"), {
        icon: f,
        label: e,
        onPress: b,
        tooltip: e,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerPlaybackControl.react",
  [
    "VideoHomeTypedLiteLogger",
    "VideoPlayerHooks",
    "VideoPlayerPlaybackControlBase.react",
    "react",
    "useFeedClickEventHandler",
    "useMinifiedProductAttribution",
    "useVideoPlayerControllerSubscription",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useEffect;
    function a(a) {
      var b = a.isNPC,
        e = b === void 0 ? !1 : b;
      b = a.unmuteOnPlay;
      var f = b === void 0 ? !1 : b;
      i(
        function () {
          e &&
            c("VideoHomeTypedLiteLogger").log({
              event: "npc_control_playback_button_impression",
            });
        },
        [e]
      );
      a = c("useVideoPlayerControllerSubscription")(function (a, b) {
        var c = a.getCurrentState(),
          d = c.ended,
          e = c.paused,
          f = c.playing,
          g = c.stalling;
        a = a.getPlayheadPosition();
        c = c.duration;
        e = !e && (f || g);
        g = !f && d && a >= c;
        return b != null && b.showPauseButton === e && b.showReplayButton === g
          ? b
          : { showPauseButton: e, showReplayButton: g };
      });
      var g = a.showPauseButton;
      b = a.showReplayButton;
      var j = d("VideoPlayerHooks").useController(),
        k = c("useMinifiedProductAttribution")();
      a = c("useFeedClickEventHandler")(function () {
        e &&
          c("VideoHomeTypedLiteLogger").log({
            attribution_id_v2: k,
            click_point: "npc_control_playback_button",
            event: "click",
            event_target: "video",
          }),
          g
            ? j.pause("user_initiated")
            : (f && j.setMuted(!1, "user_initiated"), j.play("user_initiated"));
      });
      b = g ? "pause" : b ? "replay" : "play";
      return h.jsx(c("VideoPlayerPlaybackControlBase.react"), {
        onPress: a,
        playbackIcon: b,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerQuietModeControl.react",
  [
    "fbt",
    "ix",
    "CometTahoeSidePaneContext",
    "VideoPlayerControlIcon.react",
    "fbicon",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = d("react").useContext;
    function a() {
      var a = k(c("CometTahoeSidePaneContext")),
        b = a.rightRailHidden,
        e = a.setRightRailHidden;
      a = b
        ? h._("Voir les commentaires et r\u00e9actions")
        : h._("Masquer le commentaires et r\u00e9actions");
      return j.jsx("div", {
        className: "x1rg5ohu x1k70j0n x1w0mnb xzueoph x1mnrxsn",
        children: j.jsx(c("VideoPlayerControlIcon.react"), {
          icon: b
            ? d("fbicon")._(i("942218"), 20)
            : d("fbicon")._(i("942221"), 20),
          label: a,
          onPress: function () {
            e(!b);
          },
          tooltip: a,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerSettingsControl.react",
  [
    "fbt",
    "ix",
    "VideoPlayerControlIcon.react",
    "VideoPlayerDefaultControlsProperties",
    "VideoPlayerSettingsMenu.react",
    "VideoPlayerUserInteractionCounter",
    "fbicon",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = d("react").useState,
      l = {
        alignToEnd: { right: "x3m8u43", $$css: !0 },
        default: {
          display: "x1rg5ohu",
          marginTop: "x1k70j0n",
          marginEnd: "x1w0mnb",
          marginBottom: "xzueoph",
          marginStart: "x1mnrxsn",
          $$css: !0,
        },
        menu: {
          backgroundColor: "xjb1437",
          bottom: "xacj9c0",
          color: "x14ctfv",
          marginLeft: "x89ytp0",
          paddingTop: "x889kno",
          paddingEnd: "x1ou2tus",
          paddingBottom: "x1a8lsjc",
          paddingStart: "x1egjynq",
          position: "x10l6tqk",
          right: "x1fwd5yv",
          $$css: !0,
        },
        menuCompact: { right: "xwjie4w", $$css: !0 },
        positionRelative: {
          position: "x1n2onr6",
          whiteSpace: "xuxw1ft",
          $$css: !0,
        },
      };
    a = j.forwardRef(function (a, b) {
      var e = a.alignMenuToIcon;
      e = e === void 0 ? !1 : e;
      var f = a.children;
      f = f === void 0 ? null : f;
      var g = a.compactMenu,
        m = a.icon,
        n = a.menuOpened,
        o = a.onMenuOpen,
        p = a.onUserInteraction,
        q = a.setMenuOpened;
      a = k(!1);
      var r = a[0],
        s = a[1];
      a = h._("Param\u00e8tres");
      var t = q != null;
      d("VideoPlayerUserInteractionCounter").useVideoPlayerUserInteraction(
        "video_settings_menu",
        t
          ? n ===
              d("VideoPlayerDefaultControlsProperties").VideoMenuType
                .VIDEO_SETTINGS_MENU
          : r,
        p
      );
      var u = t
        ? n ===
          d("VideoPlayerDefaultControlsProperties").VideoMenuType
            .VIDEO_SETTINGS_MENU
        : r;
      return j.jsxs("div", {
        className: c("stylex")(l["default"], e === !0 && l.positionRelative),
        ref: b,
        children: [
          u &&
            j.jsx("div", {
              className: c("stylex")(
                l.menu,
                g === !0 && l.menuCompact,
                e === !0 && l.alignToEnd
              ),
              children: j.jsx(
                d("VideoPlayerSettingsMenu.react").VideoPlayerSettingsMenu,
                {
                  onClose: function () {
                    t ? q != null && q(null) : s(!1);
                  },
                  children: f,
                }
              ),
            }),
          j.jsx(c("VideoPlayerControlIcon.react"), {
            icon: m == null ? d("fbicon")._(i("497567"), 20) : m,
            label: a,
            onPress: function () {
              t
                ? q != null &&
                  q(
                    u
                      ? null
                      : d("VideoPlayerDefaultControlsProperties").VideoMenuType
                          .VIDEO_SETTINGS_MENU
                  )
                : s(!r),
                !u && o != null && o();
            },
            tooltip: a,
          }),
        ],
      });
    });
    a.displayName = "VideoPlayerSettingsControl";
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "VideoPlayerVolumeControlBase.react",
  [
    "fbt",
    "ix",
    "FocusWithinHandler.react",
    "VideoPlayerControlIcon.react",
    "fbicon",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = d("react").useState,
      l = 0.33,
      m = 0.66;
    function a(a) {
      var b = a.audioAvailabilityUI,
        e = a.isMuted,
        f = a.onMouseEnter,
        g = a.onMouseLeave,
        n = a.onSetMuted,
        o = a.onUserInteraction,
        p = a.renderVolumeSlider;
      a = a.volume;
      var q = !e && a > 0,
        r;
      b != null && b.shouldShowNullIcon
        ? (r = d("fbicon")._(i("944792"), 20))
        : q
        ? a <= l
          ? (r = d("fbicon")._(i("1104387"), 20))
          : a <= m
          ? (r = d("fbicon")._(i("1104390"), 20))
          : (r = d("fbicon")._(i("564390"), 20))
        : (r = d("fbicon")._(i("564396"), 20));
      q = k(!1);
      var s = q[0],
        t = q[1],
        u = e ? h._("R\u00e9activer") : h._("D\u00e9sactiver le son");
      return j.jsx(c("FocusWithinHandler.react"), {
        children: function (a, d) {
          return j.jsxs("div", {
            className:
              "x1ypdohk x1rg5ohu xhsvlbd xyamay9 xsyo7zv x10b6aqq x16hj40l x1n2onr6",
            onMouseEnter: f,
            onMouseLeave: g,
            children: [
              b != null && b.shouldDisableVolumeControl
                ? null
                : j.jsx("div", {
                    className:
                      "xk7dvq3 x9f619 x1yrsyyn xsyo7zv x10b6aqq x16hj40l x10l6tqk x17qophe xh8yej3",
                    children: p({ focusVisible: d, onVisibilityChange: t }),
                  }),
              j.jsx(c("VideoPlayerControlIcon.react"), {
                icon: r,
                label: u,
                onPress: function () {
                  b && b.onVolumeControlPress(),
                    (b != null && b.shouldDisableVolumeControl) ||
                      n(!e, "user_initiated"),
                    o && o({ name: "video_mute_button", type: "happened" });
                },
                tooltip: b != null ? b.tooltipContent : null,
                tooltipAlign: "end",
                tooltipImpl: b != null ? b.tooltipImpl : null,
                tooltipOffsetY: s ? -80 : 0,
              }),
            ],
          });
        },
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerPointerDrag",
  ["react", "useResizeObserver", "useStable"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    f = d("react");
    var h = f.useEffect,
      i = f.useRef,
      j = f.useState;
    function a() {
      var a = i(null),
        b = i(null),
        d = c("useResizeObserver")(function (c, d) {
          (a.current = d.getBoundingClientRect()), (b.current = d);
        }),
        e = c("useStable")(function () {
          return function () {
            var c = b.current;
            c ? (a.current = c.getBoundingClientRect()) : (a.current = null);
          };
        });
      return { invalidateRootRect: e, rootRectRef: a, rootSizeRefCallback: d };
    }
    function b(a, b) {
      if (b == null) return null;
      var c = Math.max(0, Math.min(b.width, a.clientX - b.left));
      a = Math.max(0, Math.min(b.height, a.clientY - b.top));
      return {
        ratioX: b.width > 0 ? c / b.width : 0,
        ratioY: b.height > 0 ? a / b.height : 0,
      };
    }
    function k(a, b) {
      a = a.changedTouches;
      if (b == null || !a) return null;
      for (var c = 0; c < a.length; ++c) {
        var d = a[c];
        if (d.identifier === b)
          return { clientX: d.clientX, clientY: d.clientY };
      }
      return null;
    }
    function l(a, b) {
      var c = a;
      switch (b.type) {
        case "start":
          c = babelHelpers["extends"]({}, a, {
            clientX: b.clientX,
            clientY: b.clientY,
            dragState: "dragging",
            lastEffect: a.dragState === "idle" ? "start" : a.lastEffect,
          });
          break;
        case "move":
          if (a.dragState !== "dragging") break;
          c = {
            clientX: b.clientX,
            clientY: b.clientY,
            dragState: "dragging",
            lastEffect: a.dragState === "idle" ? "start" : "move",
          };
          break;
        case "end":
          if (a.dragState !== "dragging") break;
          c = {
            clientX: b.clientX,
            clientY: b.clientY,
            dragState: "idle",
            lastEffect: a.dragState === "idle" ? a.lastEffect : "end",
          };
          break;
        case "cancel":
          if (a.dragState !== "dragging") break;
          c = {
            clientX: a.clientX,
            clientY: a.clientY,
            dragState: "idle",
            lastEffect: a.dragState === "idle" ? a.lastEffect : "cancel",
          };
          break;
        default:
          break;
      }
      return c.dragState !== a.dragState ||
        c.lastEffect !== a.lastEffect ||
        c.clientX !== a.clientX ||
        c.clientY !== a.clientY
        ? c
        : a;
    }
    var m = { clientX: 0, clientY: 0, dragState: "idle", lastEffect: null },
      n = function () {
        return window.navigator.userAgent.indexOf("MSIE") >= 0;
      };
    function o(a, b, c) {
      var d = m,
        e = null,
        f = null,
        g = function (b) {
          (d = l(d, b)), a(d);
        },
        h = function (a) {
          g({ clientX: a.clientX, clientY: a.clientY, type: "move" });
          a = b.current.onDragMoveSync;
          a == null ? void 0 : a(d);
        },
        i = function (a) {
          e && e();
          g({ clientX: a.clientX, clientY: a.clientY, type: "end" });
          a = b.current.onDragEndSync;
          a == null ? void 0 : a(d);
        },
        j = function () {
          e && e();
          g({ type: "cancel" });
          var a = b.current.onDragCancelSync;
          a == null ? void 0 : a(d);
        },
        o = function (a) {
          a = k(a, c.current);
          if (a == null) return;
          g({ clientX: a.clientX, clientY: a.clientY, type: "move" });
          a = b.current.onDragMoveSync;
          a == null ? void 0 : a(d);
        },
        p = function (a) {
          a = k(a, c.current);
          if (a == null) return;
          f && f();
          g({ clientX: a.clientX, clientY: a.clientY, type: "end" });
          a = b.current.onDragEndSync;
          a == null ? void 0 : a(d);
        },
        q = p;
      return {
        destroy: function () {
          e && e(), f && f();
        },
        onMouseDown: function (a) {
          n() || a.preventDefault();
          g({ clientX: a.clientX, clientY: a.clientY, type: "start" });
          a = b.current.onDragStartSync;
          a == null ? void 0 : a(d);
          e ||
            (window.addEventListener("mousemove", h),
            window.addEventListener("mouseup", i),
            window.addEventListener("blur", j),
            window.addEventListener("mouseleave", j),
            (e = function () {
              (e = null),
                window.removeEventListener("mousemove", h),
                window.removeEventListener("mouseup", i),
                window.removeEventListener("blur", j),
                window.removeEventListener("mouseleave", j);
            }));
        },
        onTouchStart: function (a) {
          a.preventDefault();
          var e = a.changedTouches[0];
          e != null && (c.current = e.identifier);
          e = k(a, c.current);
          if (e == null) return;
          g({ clientX: e.clientX, clientY: e.clientY, type: "start" });
          a = b.current.onDragStartSync;
          a == null ? void 0 : a(d);
          f ||
            (window.addEventListener("touchmove", o),
            window.addEventListener("touchend", p),
            window.addEventListener("touchcancel", q),
            window.addEventListener("blur", j),
            (f = function () {
              (f = null),
                window.removeEventListener("touchmove", o),
                window.removeEventListener("touchend", p),
                window.removeEventListener("touchcancel", q),
                window.removeEventListener("blur", j);
            }));
        },
      };
    }
    function p(a, b) {
      h(
        function () {
          var c = b.current,
            d = c.onDragCancel,
            e = c.onDragEnd,
            f = c.onDragMove;
          c = c.onDragStart;
          switch (a.lastEffect) {
            case "start":
              c(a);
              return;
            case "move":
              f(a);
              return;
            case "end":
              e(a);
              return;
            case "cancel":
              d(a);
              return;
          }
        },
        [a, b]
      );
    }
    function q(a, b, d) {
      var e = j(m),
        f = e[0],
        g = e[1];
      e = c("useStable")(function () {
        return o(g, a, b);
      });
      var i = e.destroy,
        k = e.onMouseDown;
      e = e.onTouchStart;
      h(
        function () {
          return i;
        },
        [i]
      );
      return {
        dragState: f,
        rootProps: {
          onClick: function (a) {
            a.stopPropagation(), a.preventDefault();
          },
          onMouseDown: k,
          onTouchStart:
            (d == null ? void 0 : d.hasTouchEvents) === !0 ? e : void 0,
        },
      };
    }
    function e(a, b) {
      var c = i(a),
        d = i(null);
      h(
        function () {
          c.current = a;
        },
        [a]
      );
      d = q(c, d, b);
      b = d.dragState;
      d = d.rootProps;
      p(b, c);
      return {
        dragState: b,
        isDragging: b.dragState === "dragging",
        rootProps: d,
      };
    }
    g.usePointerDragResizeObserver = a;
    g.computePointerOffsetRatio = b;
    g.usePointerDrag = e;
  },
  98
);
__d(
  "VideoPlayerSliderNub.react",
  ["react", "stylex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        default: {
          backgroundColor: "x14hiurz",
          borderTop: "xtucvfd",
          borderEnd: "xj0q7ni",
          borderBottom: "x1e4yufr",
          borderStart: "x1sp3icg",
          borderTopStartRadius: "x14yjl9h",
          borderTopEndRadius: "xudhj91",
          borderBottomEndRadius: "x18nykt9",
          borderBottomStartRadius: "xww2gxu",
          boxShadow: "x1nqv1ya",
          display: "x1s85apg",
          height: "xdk7pt",
          marginRight: "x1x862rh",
          marginTop: "x1rdy4ex",
          position: "x10l6tqk",
          right: "x3m8u43",
          width: "x1xc55vz",
          zIndex: "x1vjfegm",
          $$css: !0,
        },
        visible: { display: "x1lliihq", $$css: !0 },
      };
    function a(a) {
      a = a.isVisible;
      return h.jsx("div", {
        className: c("stylex")(i["default"], a && i.visible),
        "data-testid": void 0,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerVolumeSliderBase.react",
  [
    "fbt",
    "CometComponentWithKeyCommands.react",
    "CometKeys",
    "VideoPlayerPointerDrag",
    "VideoPlayerSliderNub.react",
    "VideoPlayerUserInteractionCounter",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useEffect,
      k = b.useMemo,
      l = b.useRef,
      m = b.useState,
      n = {
        nubContainer: {
          bottom: "x1c7jfne",
          left: "x1f4buv5",
          position: "x1n2onr6",
          $$css: !0,
        },
        root: {
          cursor: "x1ypdohk",
          height: "xng8ra",
          opacity: "xg01cxk",
          pointerEvents: "x47corl",
          position: "x1n2onr6",
          transitionDuration: "x1d8287x",
          transitionProperty: "x19991ni",
          transitionTimingFunction: "xl405pv",
          width: "x1td3qas",
          zIndex: "x1ja2u2z",
          $$css: !0,
        },
        rootVisible: {
          opacity: "x1hc1fzr",
          pointerEvents: "x67bb7w",
          $$css: !0,
        },
        sliderBackground: {
          backgroundColor: "x18fn2jl",
          borderTopStartRadius: "x1lcm9me",
          borderTopEndRadius: "x1yr5g0i",
          borderBottomEndRadius: "xrt01vj",
          borderBottomStartRadius: "x10y3i5r",
          bottom: "x1ey2m1c",
          height: "xng8ra",
          position: "x10l6tqk",
          start: "xoyjkpr",
          width: "x1xc55vz",
          $$css: !0,
        },
        sliderForeground: {
          backgroundColor: "x1spa7qu",
          borderTopStartRadius: "x1lcm9me",
          borderTopEndRadius: "x1yr5g0i",
          borderBottomEndRadius: "xrt01vj",
          borderBottomStartRadius: "x10y3i5r",
          bottom: "x1ey2m1c",
          position: "x10l6tqk",
          width: "xh8yej3",
          $$css: !0,
        },
      };
    function a(a) {
      var b = a.isHovering,
        e = a.isMuted,
        f = a.onChangeVolumeDown,
        g = a.onChangeVolumeUp,
        o = a.onSetMuted,
        p = a.onSetVolume,
        q = a.onUserInteraction,
        r = a.onVisibilityChange,
        s = a.volume;
      a = d("VideoPlayerPointerDrag").usePointerDragResizeObserver();
      var t = a.invalidateRootRect,
        u = a.rootRectRef;
      a = a.rootSizeRefCallback;
      var v = l(s),
        w = l(e),
        x = e ? 0 : s,
        y = m(x),
        z = y[0],
        A = y[1],
        B = function (a) {
          a = d("VideoPlayerPointerDrag").computePointerOffsetRatio(
            a,
            u.current
          );
          if (!a) return;
          a = Math.max(0, Math.min(1, 1 - a.ratioY));
          A(a);
          p(a);
          e && o(!1, "user_initiated");
        };
      y = d("VideoPlayerPointerDrag").usePointerDrag({
        onDragCancel: function (a) {
          A(v.current), p(v.current), o(w.current, "user_initiated");
        },
        onDragEnd: function (a) {
          B(a);
        },
        onDragMove: function (a) {
          B(a);
        },
        onDragStart: function (a) {
          t(), (v.current = s), (w.current = e), A(x), B(a);
        },
      });
      var C = y.isDragging;
      y = y.rootProps;
      z = C ? z : x;
      var D = b || C,
        E = l(D);
      j(
        function () {
          E.current !== D && r && r(D), (E.current = D);
        },
        [r, D]
      );
      b = D;
      d("VideoPlayerUserInteractionCounter").useVideoPlayerUserInteraction(
        "video_volume_slider",
        b,
        q
      );
      C = k(
        function () {
          return [
            {
              command: { key: c("CometKeys").UP },
              description: h._("Augmenter le volume"),
              handler: function () {
                g();
              },
            },
            {
              command: { key: c("CometKeys").DOWN },
              description: h._("Diminuer le volume"),
              handler: function () {
                f();
              },
            },
          ];
        },
        [g, f]
      );
      return i.jsx(c("CometComponentWithKeyCommands.react"), {
        commandConfigs: C,
        children: i.jsx(
          "div",
          babelHelpers["extends"]({}, y, {
            "aria-label": h._("Changement du volume"),
            "aria-orientation": "vertical",
            "aria-valuemax": "1",
            "aria-valuemin": "0",
            "aria-valuenow": s,
            className: c("stylex")(n.root, D && n.rootVisible),
            ref: a,
            role: "slider",
            tabIndex: "0",
            children: i.jsx("div", {
              className:
                "x18fn2jl x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ey2m1c xng8ra x10l6tqk xoyjkpr x1xc55vz",
              children: i.jsx("div", {
                className:
                  "x1spa7qu x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1ey2m1c x10l6tqk xh8yej3",
                style: { height: z * 100 + "%" },
                children: i.jsx("div", {
                  className: "x1c7jfne x1f4buv5 x1n2onr6",
                  children: i.jsx(c("VideoPlayerSliderNub.react"), {
                    isVisible: D,
                  }),
                }),
              }),
            }),
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
  "VideoPlayerVolumeSlider.react",
  ["VideoPlayerHooks", "VideoPlayerVolumeSliderBase.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useCallback;
    function a(a) {
      var b = a.isHovering,
        e = a.onUserInteraction;
      a = a.onVisibilityChange;
      var f = d("VideoPlayerHooks").useController(),
        g = d("VideoPlayerHooks").useMuted(),
        j = d("VideoPlayerHooks").useVolume(),
        k = i(
          function (a) {
            f.setVolume(a);
          },
          [f]
        ),
        l = i(
          function (a, b) {
            f.setMuted(a, b);
          },
          [f]
        ),
        m = i(
          function (a) {
            var b = f.getCurrentState();
            a = Math.max(0, Math.min(1, b.volume + a));
            f.setVolume(a);
            a === 0
              ? f.setMuted(!0, "user_initiated")
              : b.muted && f.setMuted(!1, "user_initiated");
          },
          [f]
        ),
        n = i(
          function () {
            m(0.05);
          },
          [m]
        ),
        o = i(
          function () {
            m(-0.05);
          },
          [m]
        );
      return h.jsx(c("VideoPlayerVolumeSliderBase.react"), {
        isHovering: b,
        isMuted: g,
        onChangeVolumeDown: o,
        onChangeVolumeUp: n,
        onSetMuted: l,
        onSetVolume: k,
        onUserInteraction: e,
        onVisibilityChange: a,
        volume: j,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerVolumeControl.react",
  [
    "VideoPlayerHooks",
    "VideoPlayerVolumeControlBase.react",
    "VideoPlayerVolumeSlider.react",
    "cr:1826284",
    "emptyFunction",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    e = d("react");
    var i = e.useCallback,
      j = e.useState,
      k = (e = b("cr:1826284")) != null ? e : c("emptyFunction");
    function a(a) {
      var b = a.onUserInteraction;
      a = j(!1);
      var e = a[0],
        f = a[1],
        g = d("VideoPlayerHooks").useController();
      a = d("VideoPlayerHooks").useMuted();
      var l = d("VideoPlayerHooks").useVolume(),
        m = function () {
          f(!0);
        },
        n = function () {
          f(!1);
        },
        o = i(
          function (a, b) {
            g.setMuted(a, b);
          },
          [g]
        ),
        p = !a && l > 0;
      p = k({ canPlayerProduceSound: p, isHovering: e }) || null;
      return h.jsx(c("VideoPlayerVolumeControlBase.react"), {
        audioAvailabilityUI: p,
        isMuted: a,
        onMouseEnter: m,
        onMouseLeave: n,
        onSetMuted: o,
        onUserInteraction: b,
        renderVolumeSlider: function (a) {
          var d = a.focusVisible;
          a = a.onVisibilityChange;
          return h.jsx(c("VideoPlayerVolumeSlider.react"), {
            isHovering: e || d,
            onUserInteraction: b,
            onVisibilityChange: a,
          });
        },
        volume: l,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometVideoPictureInPictureManager.react",
  [
    "CometSetWatchAndScrollVideoContext",
    "CometVideoPictureInPictureManagerContext",
    "CometWatchAndScrollVideoContext",
    "XCometWatchControllerRouteBuilder",
    "clearTimeout",
    "gkx",
    "react",
    "requireDeferred",
    "setTimeout",
    "useCometRouterDispatcher",
    "useMinifiedProductAttribution",
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
      n = b.useState,
      o = c("requireDeferred")("VideoHomeTypedLiteLogger").__setRef(
        "CometVideoPictureInPictureManager.react"
      ),
      p = c("gkx")("1443572"),
      q = 50;
    e = ["286211568997787", "214604021960500", "108677131037"];
    var r = window.document.pictureInPictureEnabled;
    function a(a) {
      var b = c("useCometRouterDispatcher")(),
        e = a.isPipEnabled,
        f = n(null),
        g = f[0],
        s = f[1];
      f = n(!1);
      var t = f[0],
        u = f[1];
      f = n(!1);
      var v = f[0],
        w = f[1],
        x = m(!1);
      f = i(function (a) {
        x.current = a;
      }, []);
      var y = l(
          function () {
            return {
              hasNextChainedVideo: v,
              isPipEnabled: e,
              setHasNextChainedVideo: w,
              setSkippedFromPipPlayer: u,
              skippedFromPipPlayer: t,
            };
          },
          [t, u, v, w, e]
        ),
        z = n(null),
        A = z[0],
        B = z[1],
        C = j(c("CometWatchAndScrollVideoContext")),
        D = j(c("CometSetWatchAndScrollVideoContext")),
        E = m(null),
        F = m(null),
        G = c("useMinifiedProductAttribution")(),
        H = i(function (a) {
          a === void 0 && (a = null),
            o.onReady(function (b) {
              b.log({ attribution_id_v2: G, click_point: a, event: "click" });
            });
        }, []),
        I = i(
          function () {
            var a = C == null ? void 0 : C.videoID,
              d = C == null ? void 0 : C.videoUrl;
            if (a != null && d != null) {
              var e = C == null ? void 0 : C.routeTracePolicy,
                f = C == null ? void 0 : C.subOrigin;
              d = p
                ? d
                : c("XCometWatchControllerRouteBuilder").buildURL({ v: a });
              b &&
                (b.go(d, {
                  passthroughProps: {
                    portableVideoID: A,
                    portalingRouteTracePolicy: e,
                    portalingSubOrigin: f,
                  },
                }),
                D(null));
            }
          },
          [b, C, A, D]
        ),
        J = i(
          function () {
            g != null &&
              (E.current = c("setTimeout")(function () {
                var a = g.getCurrentState(),
                  b = a.lastPauseReason;
                a = a.paused;
                x.current ||
                  (e && (a === !1 || (a === !0 && b === "product_initiated"))
                    ? (I(), H("control_pip_player_return_to_tab"))
                    : window.document.pictureInPictureElement === null &&
                      (D(null), H("control_pip_player_close")));
              }, q));
          },
          [g, e, I, D, H]
        ),
        K = i(
          function () {
            g != null &&
              (x.current ||
                (window.navigator.mediaSession.setActionHandler("play", null),
                window.navigator.mediaSession.setActionHandler("pause", null),
                window.navigator.mediaSession.setActionHandler(
                  "pause",
                  function () {
                    g.pause("product_initiated");
                  }
                )),
              v ||
                window.navigator.mediaSession.setActionHandler(
                  "nexttrack",
                  null
                ));
          },
          [g, v, H, f]
        ),
        L = i(function (a) {
          a.requestPictureInPicture();
          R(!1);
          a = a.internal_getVideoElement();
          F.current = a == null ? void 0 : a.currentSrc;
        }, []),
        M = i(
          function () {
            if (g != null) {
              var a = g.getIsDesktopPictureInPicture();
              if (a) {
                g.exitPictureInPicture();
                return;
              }
              L(g);
            }
          },
          [L, g]
        ),
        N = i(
          function (a) {
            s(a);
          },
          [s]
        ),
        O = i(
          function (a) {
            a != null && B(a);
          },
          [B]
        );
      z = l(
        function () {
          return {
            openPipPlayer: M,
            setController: N,
            setPipPortableVideoID: O,
          };
        },
        [M, N, O]
      );
      var P = m(!1);
      f = n(!1);
      var Q = f[0],
        R = f[1];
      k(
        function () {
          var a = null;
          if (r && g != null && window.document.pictureInPictureElement) {
            var b = g.internal_getVideoElement();
            b = b == null ? void 0 : b.currentSrc;
            var c = !1,
              d = !1;
            a = g.subscribe(function () {
              var a = g.getCurrentState(),
                b = a.playing;
              a = a.isDesktopPictureInPicture;
              !c && b && P.current && !x.current && ((P.current = !1), R(!0));
              d && !a && J();
              !d && a && K();
              c = b;
              d = a;
            });
            b !== F.current
              ? !Q
                ? (g.play("user_initiated"), (P.current = !0))
                : L(g)
              : e && (K(), (F.current = b));
          }
          return function () {
            a != null && a.remove();
          };
        },
        [L, g, M, v, K, J, e, Q]
      );
      k(function () {
        return function () {
          E.current != null &&
            (c("clearTimeout")(E.current), (E.current = null));
        };
      }, []);
      return h.jsx(
        d("CometVideoPictureInPictureManagerContext")
          .CometVideoPictureInPictureManagerContext.Provider,
        {
          value: y,
          children: h.jsx(
            d("CometVideoPictureInPictureManagerContext")
              .CometVideoPictureInPictureManagerAPIContext.Provider,
            { value: z, children: a.children }
          ),
        }
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.EXCLUDED_PROVIDERS = e;
    g.CometVideoPictureInPictureManager = a;
  },
  98
);
__d(
  "CometWatchAndScrollControlNUXContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = {
      isVideoPlayerWatchAndScrollControlNUXVisible: !1,
      setIsVideoPlayerWatchAndScrollControlNUXVisible: null,
    };
    c = a.createContext(b);
    g["default"] = c;
  },
  98
);
__d(
  "CometWatchAndScrollTriggerContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = {
      isControlShown: !1,
      isTriggerDisabled: !1,
      setIsControlShown: null,
      setIsTriggerDisabled: null,
    };
    c = a.createContext(b);
    g["default"] = c;
  },
  98
);
__d(
  "VideoPlayerWithWatchAndScrollTrigger.react",
  [
    "$InternalEnum",
    "CastingStateHooks",
    "CometWatchAndScrollTriggerContext",
    "CometWatchAndScrollVideoContext",
    "VideoPlayerHooks",
    "react",
    "requireDeferred",
    "useVisibilityObserver",
    "useWatchAndScrollTrigger",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    e = d("react");
    var i = e.useCallback,
      j = e.useContext,
      k = c("requireDeferred")("VideoHomeTypedLiteLogger").__setRef(
        "VideoPlayerWithWatchAndScrollTrigger.react"
      ),
      l = 5,
      m = 30,
      n = b("$InternalEnum")({
        BROADCAST: "broadcast",
        HERO: "hero",
        PAGE_SPOTLIGHT_CARD: "page_spotlight_card",
        TAHOE: "tahoe",
        VOD: "vod",
        WNS_CONTROL: "wns_control",
      });
    function a(a) {
      var b = a.subOrigin,
        e = a.triggerType;
      a = a.videoID;
      var f = j(c("CometWatchAndScrollTriggerContext")),
        g = f.isControlShown;
      f = f.isTriggerDisabled;
      var o = d("VideoPlayerHooks").useController(),
        p = d("useWatchAndScrollTrigger").useWatchAndScrollTrigger(b, e, a),
        q = j(c("CometWatchAndScrollVideoContext")),
        r = d("CastingStateHooks").useIsCastingAnyVideo();
      b = i(
        function (a) {
          if (a.hiddenReason !== "NOT_IN_VIEWPORT") return;
          a = o.getCurrentState();
          var b = a.paused,
            c = !a.muted,
            d = o.getPlayheadPosition();
          a = a.duration;
          var f = l;
          a >= 30 && (f = Math.max(l, Math.min(m, Math.ceil((a * 0) / 100))));
          if (!b && !r && q == null)
            switch (e) {
              case n.HERO:
                p();
                k.onReady(function (a) {
                  a.log({
                    event: "watch_and_scroll_trigger",
                    event_target: "hero",
                  });
                });
                break;
              case n.BROADCAST:
                c &&
                  (p(),
                  k.onReady(function (a) {
                    a.log({
                      event: "watch_and_scroll_trigger",
                      event_target: "newsfeed_live",
                    });
                  }));
                break;
              case n.VOD:
                c &&
                  d >= f &&
                  (p(),
                  k.onReady(function (a) {
                    a.log({
                      event: "watch_and_scroll_trigger",
                      event_target: "newsfeed_vod",
                    });
                  }));
                break;
              default:
                break;
            }
        },
        [o, q, e, p, r]
      );
      a = c("useVisibilityObserver")({ onHidden: b });
      if (!g || f) return null;
      switch (e) {
        case n.HERO:
        case n.BROADCAST:
          return h.jsx("div", { className: "xu1mrb xh8yej3", ref: a });
        case n.VOD:
          return h.jsx("div", { className: "xu1mrb xh8yej3", ref: a });
        default:
          return null;
      }
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.WatchAndScrollTriggerType = n;
    g.VideoPlayerWithWatchAndScrollTrigger = a;
  },
  98
);
__d(
  "useVideoPlayerPortalingPassthroughProps",
  [
    "VideoPlayerPortalingPlaceInfoProvider.react",
    "cr:2889",
    "emptyFunction",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useMemo,
      i = (
        (e = b("cr:2889")) != null
          ? e
          : { useVideoPlayerViewabilityInfo: c("emptyFunction") }
      ).useVideoPlayerViewabilityInfo;
    function a() {
      var a = d(
          "VideoPlayerPortalingPlaceInfoProvider.react"
        ).useVideoPlayerPortalingPlaceInfo(),
        b = a.currentVideoID,
        c = a.thisPlaceID,
        e =
          (a = (a = i()) == null ? void 0 : a.positionToViewport) != null
            ? a
            : null;
      return h(
        function () {
          return {
            portableVideoID: b,
            portalingPlaceID: c,
            positionToViewport: e,
          };
        },
        [b, e]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "useWatchAndScrollTrigger",
  [
    "CometPictureInPictureExpContext",
    "CometSetWatchAndScrollVideoContext",
    "CometWatchAndScrollSoundContext",
    "VideoPlayerHooks",
    "VideoPlayerWithWatchAndScrollTrigger.react",
    "react",
    "recoverableViolation",
    "usePlayerOriginRouteTracePolicy",
    "useVideoPlayerPortalingPassthroughProps",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useContext;
    function a(a, b, e, f) {
      var g = c("useVideoPlayerPortalingPassthroughProps")(),
        j = g.portableVideoID,
        k = g.portalingPlaceID,
        l = c("usePlayerOriginRouteTracePolicy")(),
        m = d("VideoPlayerHooks").useController(),
        n = i(c("CometSetWatchAndScrollVideoContext")),
        o = i(c("CometWatchAndScrollSoundContext")),
        p = i(c("CometPictureInPictureExpContext"));
      return h(
        function () {
          o != null && (o.setMuted(null), o.setVolume(null));
          if (j != null && k != null) {
            var g = p.pictureInPictureExpConfig.isInPictureInPictureExp,
              h =
                p.pictureInPictureExpConfig.isInPictureInPictureExpControlGroup;
            if (
              (g || h) &&
              b !==
                d("VideoPlayerWithWatchAndScrollTrigger.react")
                  .WatchAndScrollTriggerType.WNS_CONTROL
            )
              return;
            n({
              controller: m,
              portableVideoID: j,
              portalingPlaceID: k,
              routeTracePolicy: l,
              sessionStartTime: new Date(),
              sessionTrigger: b,
              subOrigin: a,
              videoID: e,
              videoUrl: f,
            });
          } else
            c("recoverableViolation")(
              "Could not transition to Watch and Scroll player because portableVideoID was null",
              "comet_video_player"
            );
        },
        [
          o,
          j,
          k,
          p.pictureInPictureExpConfig.isInPictureInPictureExp,
          p.pictureInPictureExpConfig.isInPictureInPictureExpControlGroup,
          b,
          n,
          m,
          l,
          a,
          e,
          f,
        ]
      );
    }
    g.useWatchAndScrollTrigger = a;
  },
  98
);
__d(
  "useIsVideoHomePlayerOriginFromTracePolicy",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      var b = [
        "comet.watch.catalog",
        "comet.watch.explore",
        "comet.watch.feed",
        "comet.watch.injection",
        "comet.watch.latest",
        "comet.watch.notifications",
        "comet.watch.playlist",
        "comet.watch.saved",
        "comet.watch.search",
        "comet.watch.sports",
        "comet.watch.live.injection",
        "comet.watch.live",
        "comet.watch.music",
        "comet.watch.lancelet",
      ];
      return b.includes(a);
    }
    f["default"] = a;
  },
  66
);
__d(
  "useVideoPlayerWatchAndScrollControlNUX",
  [
    "fbt",
    "CometRelay",
    "CometWatchAndScrollTriggerContext",
    "react",
    "recoverableViolation",
    "requireDeferred",
    "useCometCallout",
    "useVideoPlayerWatchAndScrollControlNUXQuery.graphql",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i;
    e = d("react");
    var j = e.useCallback,
      k = e.useContext,
      l = e.useEffect,
      m = e.useState,
      n = c("requireDeferred")("CometDismissFBNuxMutation").__setRef(
        "useVideoPlayerWatchAndScrollControlNUX"
      ),
      o = c("requireDeferred")("CometLogImpressionFBNuxMutation").__setRef(
        "useVideoPlayerWatchAndScrollControlNUX"
      ),
      p = { nux: { maxWidth: "xw5ewwj", $$css: !0 } },
      q = 9347,
      r =
        i !== void 0
          ? i
          : (i = b("useVideoPlayerWatchAndScrollControlNUXQuery.graphql"));
    function a(a) {
      var b = k(c("CometWatchAndScrollTriggerContext")),
        e = b.setIsTriggerDisabled;
      b = m(null);
      var f = b[0],
        g = b[1],
        i = d("CometRelay").useRelayEnvironment(),
        s = j(
          function () {
            e != null && e(!0),
              g(!1),
              n.onReady(function (a) {
                a.commit(i, q);
              });
          },
          [i, e]
        );
      l(
        function () {
          if (a && f === null) {
            var b = d("CometRelay")
              .fetchQuery(i, r, { fetchPolicy: "store-or-network" })
              .subscribe({
                next: function (b) {
                  b =
                    (b == null
                      ? void 0
                      : (b = b.nux) == null
                      ? void 0
                      : b.should_show) || !1;
                  g(b);
                  b &&
                    a &&
                    o.onReady(function (a) {
                      a.commit(
                        i,
                        q,
                        function () {},
                        function () {
                          c("recoverableViolation")(
                            "logimpression fb nux mutation failed for video player watch and scroll control.",
                            "watch_www_bug_rotation"
                          );
                        }
                      );
                    });
                },
              });
            return function () {
              b.unsubscribe();
            };
          }
        },
        [i, a, f]
      );
      b = {
        align: "end",
        arrowStyle: "inset",
        disableAutoFlip: !0,
        hasCloseButton: !0,
        label: h._("Continuer \u00e0 regarder tout en parcourant Facebook"),
        onClose: function () {
          s();
        },
        onHide: function () {
          g(!1);
        },
        position: "below",
        type: "accent",
        xstyle: p.nux,
      };
      b = c("useCometCallout")(b, (f === !0 && a) || !1);
      return { handleDismissNUX: s, nuxRef: b, shouldShowNUX: f };
    }
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerWatchAndScrollControl.react",
  [
    "fbt",
    "ix",
    "CastingStateHooks",
    "CometPictureInPictureExpContext",
    "CometRelay",
    "CometRouteRenderType",
    "CometVideoPictureInPictureManager.react",
    "CometVideoPictureInPictureManagerContext",
    "CometWatchAndScrollControlNUXContext",
    "CometWatchAndScrollTriggerContext",
    "JSResourceForInteraction",
    "VideoPlayerControlIcon.react",
    "VideoPlayerHooks",
    "VideoPlayerInstreamAdsStateHooks",
    "VideoPlayerWatchAndScrollControl_video.graphql",
    "VideoPlayerWithWatchAndScrollTrigger.react",
    "emptyFunction",
    "fbicon",
    "gkx",
    "react",
    "requireDeferred",
    "useCometLazyDialog",
    "useCometRouterDispatcher",
    "useCometRouterState",
    "useIsVideoHomePlayerOriginFromTracePolicy",
    "useMinifiedProductAttribution",
    "usePlayerOriginRouteTracePolicy",
    "useVideoPlayerWatchAndScrollControlNUX",
    "useWatchAndScrollTrigger",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react");
    e = d("react");
    var l = e.useCallback,
      m = e.useContext,
      n = e.useEffect,
      o = e.useState,
      p = c("requireDeferred")("VideoHomeTypedLiteLogger").__setRef(
        "VideoPlayerWatchAndScrollControl.react"
      ),
      q = c("JSResourceForInteraction")(
        "CometCastingStopWatchAndScrollDialog.react"
      ).__setRef("VideoPlayerWatchAndScrollControl.react"),
      r = 6e4,
      s = window.document.pictureInPictureEnabled;
    function a(a) {
      var e,
        f = a.subOrigin;
      a = a.video;
      var g = m(c("CometWatchAndScrollTriggerContext")),
        t = g.isControlShown,
        u = g.setIsControlShown;
      g = d("CometRouteRenderType").useIsPushView();
      var v = d("VideoPlayerHooks").useIsFullscreen(),
        w = c("useCometRouterDispatcher")(),
        x = c("useCometRouterState")(),
        y =
          (x = x == null ? void 0 : x.main.route.tabKey) != null
            ? x
            : "undefined";
      x = d("CometRelay").useFragment(
        j !== void 0
          ? j
          : (j = b("VideoPlayerWatchAndScrollControl_video.graphql")),
        a
      );
      var z = x == null ? void 0 : x.id;
      a = (a = x == null ? void 0 : x.playable_duration_in_ms) != null ? a : 0;
      var A = x == null ? void 0 : x.is_huddle,
        B = x == null ? void 0 : x.url;
      n(
        function () {
          u != null && u(!0);
        },
        [u]
      );
      var C = c("usePlayerOriginRouteTracePolicy")(),
        D = c("useIsVideoHomePlayerOriginFromTracePolicy")(C);
      e =
        (x == null
          ? void 0
          : (e = x.owner) == null
          ? void 0
          : e.has_professional_features_for_watch) === !0 &&
        a >= r &&
        t &&
        !D;
      var E = d("VideoPlayerHooks").usePlaying(),
        F = d("VideoPlayerHooks").useController();
      a = F.getPlayheadPosition();
      var G = a >= 10;
      t = o(!1);
      D = t[0];
      var H = t[1];
      a = o(!1);
      var I = a[0],
        J = a[1];
      t = o(!1);
      a = t[0];
      var K = t[1];
      t = d("VideoPlayerInstreamAdsStateHooks").useInstreamAdsStateValue();
      t =
        t === "STARTING_INDICATOR" ||
        t === "PLAY_NI_VIDEO" ||
        t === "START_AD" ||
        t === "PLAY_LONGER_AD";
      var L = c("useMinifiedProductAttribution")();
      n(
        function () {
          E && G && H(!0);
        },
        [G, E]
      );
      var M = d("CastingStateHooks").useIsCastingAnyVideo(),
        N = c("useCometLazyDialog")(q),
        O = N[0];
      N = !t && D && e;
      t = c("useVideoPlayerWatchAndScrollControlNUX")(N);
      var P = t.handleDismissNUX;
      D = t.nuxRef;
      e = t.shouldShowNUX;
      var Q = e === !0 && N;
      t = m(c("CometWatchAndScrollControlNUXContext"));
      var R = t.setIsVideoPlayerWatchAndScrollControlNUXVisible,
        S = m(c("CometPictureInPictureExpContext"));
      n(
        function () {
          R && R(Q);
        },
        [Q, R]
      );
      var T = d("useWatchAndScrollTrigger").useWatchAndScrollTrigger(
          f,
          d("VideoPlayerWithWatchAndScrollTrigger.react")
            .WatchAndScrollTriggerType.WNS_CONTROL,
          z,
          B
        ),
        U = d("VideoPlayerHooks").useIsPremiumMusicVideo(),
        V = x == null ? void 0 : (e = x.owner) == null ? void 0 : e.id;
      N = l(
        function () {
          var a = d(
              "CometVideoPictureInPictureManagerContext"
            ).isInPictureInPictureExp(),
            b = d(
              "CometVideoPictureInPictureManagerContext"
            ).isInPictureInPictureExpControlGroup();
          S.setPictureInPictureExpConfig({
            isInPictureInPictureExp: a,
            isInPictureInPictureExpControlGroup: b,
            isSkipAndChainingDisabled: !1,
          });
          s && a && J(!0);
          a =
            (a || b) &&
            (U ||
              d(
                "CometVideoPictureInPictureManager.react"
              ).EXCLUDED_PROVIDERS.includes(V));
          a && K(!0);
        },
        [U, V, S]
      );
      var W = C === "comet.videos.tahoe",
        X = l(
          function () {
            M && z != null
              ? O(
                  {
                    onClose: c("emptyFunction"),
                    onContinue: T,
                    startingVideoType: "wns",
                  },
                  c("emptyFunction")
                )
              : T();
          },
          [M, T, O, z]
        );
      t = l(
        function () {
          X(),
            I
              ? (p.onReady(function (a) {
                  a.log({
                    attribution_id_v2: L,
                    click_point: "control_picture_in_picture",
                    event: "click",
                    event_target_info: C,
                    player_suborigin: f,
                  });
                }),
                F.requestPictureInPicture())
              : p.onReady(function (a) {
                  a.log({
                    attribution_id_v2: L,
                    click_point: "control_watch_and_scroll",
                    event: "click",
                    event_target_info: y,
                  });
                }),
            Q === !0 && P(),
            w && w.popPushView && w.popPushView();
        },
        [X, I, Q, w, F, L, C, f, y, P]
      );
      var Y = f === "live_producer";
      B = l(
        function () {
          X(),
            I
              ? (p.onReady(function (a) {
                  a.log({
                    attribution_id_v2: L,
                    click_point: "control_picture_in_picture",
                    event: "click",
                    event_target_info: C,
                    player_suborigin: f,
                  });
                }),
                F.requestPictureInPicture())
              : p.onReady(function (a) {
                  a.log({
                    attribution_id_v2: L,
                    click_point: "control_watch_and_scroll",
                    event: "click",
                    event_target_info: y,
                  });
                }),
            Q === !0 && P(),
            v && F.requestSetIsFullscreen(!1),
            w != null && (Y || W) && w.go("/", {});
        },
        [X, I, Q, v, w, Y, W, F, L, C, f, y, P]
      );
      x = g ? t : B;
      c("gkx")("1224637")
        ? (e = h._("Continuer de regarder tout en utilisant Workplace"))
        : A === !0
        ? (e = h._(
            "Continuer \u00e0 \u00e9couter tout en parcourant Facebook."
          ))
        : (e = h._("Continuer \u00e0 regarder tout en parcourant Facebook"));
      I && (e = h._("Passer au mode picture in picture"));
      return a
        ? null
        : k.jsx("div", {
            onMouseEnter: N,
            ref: D,
            children: k.jsx(c("VideoPlayerControlIcon.react"), {
              color: "white",
              icon: d("fbicon")._(i("150489"), 20),
              label: e,
              onPress: x,
              tooltip: Q ? null : e,
            }),
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerLiveVideoControls.react",
  [
    "CometPlaceholder.react",
    "CometRelay",
    "CometTahoeCustomVideoAreaContext",
    "CometTahoeSidePaneContext",
    "CometTrackingNodeProvider.react",
    "LiveCostreamerTagSubscription.react",
    "LiveVideoLatencyMenu.react",
    "PlaybackSpeedExperiments",
    "VideoPlayerCaptionsControl.react",
    "VideoPlayerCastControlShim.react",
    "VideoPlayerControlsBottomRowAddOnContext",
    "VideoPlayerControlsContainerOverlay.react",
    "VideoPlayerControlsGroups.react",
    "VideoPlayerExpandSidePanelControl.react",
    "VideoPlayerHooks",
    "VideoPlayerJoinOnPortalControl.react",
    "VideoPlayerLiveVideoControls_video.graphql",
    "VideoPlayerPlaybackControl.react",
    "VideoPlayerQuietModeControl.react",
    "VideoPlayerSettingsControl.react",
    "VideoPlayerVolumeControl.react",
    "VideoPlayerWatchAndScrollControl.react",
    "cr:1809777",
    "gkx",
    "react",
    "useVideoPlayerBigPlayButtonOverlay",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    e = d("react");
    var j = e.useContext,
      k = e.useState,
      l = d("PlaybackSpeedExperiments").isInCometHeadroomTest()
        ? b("cr:1809777")
        : null,
      m =
        h !== void 0
          ? h
          : (h = b("VideoPlayerLiveVideoControls_video.graphql"));
    function n(a) {
      var b,
        e,
        f = d("CometRelay").useFragment(m, a.video),
        g = d("VideoPlayerHooks").useEnded(),
        h = d("VideoPlayerHooks").useIsFullscreen(),
        n = j(
          d("VideoPlayerControlsBottomRowAddOnContext")
            .VideoPlayerControlsBottomRowAddOnContext
        ),
        o = j(c("CometTahoeSidePaneContext"));
      o = o.rightRailHidden;
      var p = c("useVideoPlayerBigPlayButtonOverlay")();
      p = p.bigPlayButtonIsVisible;
      var q = d("VideoPlayerHooks").useCaptionsLoaded(),
        r = d("VideoPlayerHooks").useCaptionsVisible(),
        s = k(null),
        t = s[0];
      s = s[1];
      var u = j(
        d("CometTahoeCustomVideoAreaContext").CometTahoeCustomVideoAreaContext
      );
      u = u.customVideoAreaHidden;
      if (g) return null;
      g = a.disablePlaybackControls;
      var v = a.expandControl,
        w = a.isControlsVisible,
        x = a.isExpandControlVisible;
      x = x === void 0 ? !1 : x;
      var y = a.isVolumeControlVisible,
        z = a.isWatchAndScrollControlVisible;
      z = z === void 0 ? !1 : z;
      var A = a.onUserInteraction,
        B = a.shouldRenderCaptionsControl;
      B = B === void 0 ? !0 : B;
      var C = a.shouldRenderCostreamControl;
      C = C === void 0 ? !1 : C;
      var D = a.shouldRenderModeratorControl;
      D = D === void 0 ? !1 : D;
      var E = a.subOrigin,
        F = f == null ? void 0 : f.id;
      b = f == null ? void 0 : (b = f.owner) == null ? void 0 : b.id;
      var G = f == null ? void 0 : f.if_viewer_can_see_costreaming_tools,
        H = G != null,
        I = f == null ? void 0 : f.if_viewer_can_use_clipping,
        J = (f == null ? void 0 : f.is_clipping_enabled) === !0,
        K = f == null ? void 0 : f.if_viewer_can_see_community_moderation_tools,
        L = K != null,
        M = f == null ? void 0 : f.if_viewer_can_use_live_rewind;
      e =
        ((e = f == null ? void 0 : f.live_rewind_enabled) != null ? e : !1) &&
        a.shouldHideRewindControls !== !0;
      x = x || w || (g === !0 && !p);
      z = z || w || (g === !0 && !p);
      p = i.jsx(d("VideoPlayerControlsGroups.react").Contracted, {
        isVisible: x,
        noPaddingEnd: !0,
        noPaddingStart: !0,
        children: v,
      });
      x =
        a.shouldRenderWatchAndScrollControl === !0 && E != null && f != null
          ? i.jsx(d("VideoPlayerControlsGroups.react").Contracted, {
              isVisible: z,
              children: i.jsx(c("VideoPlayerWatchAndScrollControl.react"), {
                subOrigin: E,
                video: f,
              }),
            })
          : null;
      v = E === "watch_scroll";
      z = c("gkx")("8487") ? B === !0 : !v;
      return i.jsxs(c("VideoPlayerControlsContainerOverlay.react"), {
        isBackgroundVisible: w,
        isVisible: u,
        children: [
          e
            ? i.jsx(d("CometRelay").MatchContainer, {
                match: M,
                props: {
                  isControlsVisible: w && !g,
                  onUserInteraction: A,
                  video: M,
                },
              })
            : i.jsxs(i.Fragment, {
                children: [
                  Boolean(a.shouldRenderPauseControl)
                    ? i.jsx(d("VideoPlayerControlsGroups.react").Contracted, {
                        isVisible: w && !g,
                        children: i.jsx(
                          c("VideoPlayerPlaybackControl.react"),
                          {}
                        ),
                      })
                    : null,
                  i.jsx(d("VideoPlayerControlsGroups.react").Expanded, {
                    children: i.jsx(i.Fragment, {}),
                  }),
                ],
              }),
          i.jsxs(d("VideoPlayerControlsGroups.react").Contracted, {
            isVisible: w,
            children: [
              b != null &&
                F != null &&
                i.jsx(c("LiveCostreamerTagSubscription.react"), {
                  pageID: b,
                  videoID: F,
                }),
              H &&
                C &&
                F != null &&
                !h &&
                i.jsx(c("CometPlaceholder.react"), {
                  fallback: null,
                  children: i.jsx(d("CometRelay").MatchContainer, {
                    match: G,
                    props: { video: G },
                  }),
                }),
              a.shouldRenderQuietModeControl === !0 &&
                !h &&
                i.jsx(c("VideoPlayerQuietModeControl.react"), {}),
              a.shouldRenderExpandSidePanelControl === !0 &&
                !h &&
                !o &&
                i.jsx(c("VideoPlayerExpandSidePanelControl.react"), {}),
              J &&
                F != null &&
                i.jsx(d("CometRelay").MatchContainer, {
                  match: I,
                  props: { video: I, videoID: F },
                }),
              L && D
                ? i.jsx(c("CometPlaceholder.react"), {
                    fallback: null,
                    children: i.jsx(d("CometRelay").MatchContainer, {
                      match: K,
                      props: { video: K, videoID: F },
                    }),
                  })
                : null,
              g === !0
                ? null
                : i.jsx(c("CometTrackingNodeProvider.react"), {
                    trackingNode: 257,
                    children: i.jsx(
                      d("LiveVideoLatencyMenu.react")
                        .LiveVideoLatencyMenuContextProvider,
                      {
                        video: f,
                        children: i.jsx(c("VideoPlayerSettingsControl.react"), {
                          alignMenuToIcon:
                            (n == null ? void 0 : n.getBottomRowAddOn()) !=
                            null,
                          menuOpened: t,
                          onUserInteraction: A,
                          setMenuOpened: s,
                        }),
                      }
                    ),
                  }),
              l != null
                ? i.jsx(d("VideoPlayerControlsGroups.react").Contracted, {
                    isVisible: w,
                    children: i.jsx(l, { onUserInteraction: A }),
                  })
                : null,
              q && z
                ? i.jsx(d("VideoPlayerControlsGroups.react").Contracted, {
                    isVisible: w,
                    children: i.jsx(c("VideoPlayerCaptionsControl.react"), {
                      alignMenuToIcon:
                        (n == null ? void 0 : n.getBottomRowAddOn()) != null,
                      captionsVisible: r,
                      menuOpened: t,
                      onUserInteraction: A,
                      setMenuOpened: s,
                      video: f,
                    }),
                  })
                : null,
              a.shouldRenderCastControl === !0 && E != null && f != null
                ? i.jsx(c("VideoPlayerCastControlShim.react"), {
                    isVisible: w && !g,
                    subOrigin: E,
                  })
                : null,
            ],
          }),
          p,
          i.jsx(c("VideoPlayerJoinOnPortalControl.react"), { isVisible: w }),
          x,
          i.jsx(d("VideoPlayerControlsGroups.react").Contracted, {
            isVisible: y,
            noPaddingStart: !0,
            children: i.jsx(c("CometTrackingNodeProvider.react"), {
              trackingNode: 114,
              children: i.jsx(c("VideoPlayerVolumeControl.react"), {
                onUserInteraction: A,
              }),
            }),
          }),
        ],
      });
    }
    n.displayName = n.name + " [from " + f.id + "]";
    function a(a) {
      return i.jsx(c("CometPlaceholder.react"), {
        fallback: null,
        children: i.jsx(n, babelHelpers["extends"]({}, a)),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerDefaultControlsImplLive.react",
  [
    "CometRelay",
    "VideoPlayerDefaultControlsImplLive_video.graphql",
    "VideoPlayerLiveVideoControls.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e = a.expandControl,
        f = a.isControlsVisible,
        g = a.isVolumeControlVisible,
        j = a.onUserInteraction,
        k = a.pictureInPictureControl,
        l = a.shouldHideRewindControls,
        m = a.shouldRenderCaptionsControl,
        n = a.shouldRenderCostreamControl,
        o = a.shouldRenderExpandSidePanelControl,
        p = a.shouldRenderModeratorControl,
        q = a.shouldRenderPauseControl,
        r = a.shouldRenderQuietModeControl,
        s = a.shouldRenderWatchAndScrollControl,
        t = a.subOrigin,
        u = a.video;
      a = a.videoTahoeUrl;
      u = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("VideoPlayerDefaultControlsImplLive_video.graphql")),
        u
      );
      return i.jsx(c("VideoPlayerLiveVideoControls.react"), {
        expandControl: e,
        isControlsVisible: f,
        isVolumeControlVisible: g,
        onUserInteraction: j,
        pictureInPictureControl: k,
        shouldHideRewindControls: l,
        shouldRenderCaptionsControl: m,
        shouldRenderCostreamControl: n,
        shouldRenderExpandSidePanelControl: o,
        shouldRenderModeratorControl: p,
        shouldRenderPauseControl: q,
        shouldRenderQuietModeControl: r,
        shouldRenderWatchAndScrollControl: s,
        subOrigin: t,
        video: u,
        videoTahoeUrl: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerLiveRewindControlContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({
      cachedLiveRewindTimestamp: null,
      onLiveRewindControlEvent: function () {},
    });
    g["default"] = b;
  },
  98
);
__d(
  "VideoPlayerPlaybackTimerBase.react",
  ["getFormattedTimestamp", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.currentTime;
      a = a.duration;
      return h.jsxs("div", {
        className:
          "x14ctfv x1rg5ohu x1pg5gke xss6m8b x7h9g57 x1t4t16n x8j4wrb x9hgts1 x2b8uid x27saw0 x3ajldb",
        children: [
          h.jsx("span", {
            className: "x1s688f x15hfatp",
            children: c("getFormattedTimestamp")(b),
          }),
          a != null &&
            h.jsxs(h.Fragment, {
              children: [
                h.jsx("span", { children: " / " }),
                h.jsx("span", { children: c("getFormattedTimestamp")(a) }),
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
  "useLiveRewindUtils",
  [
    "VideoPlayerHooks",
    "VideoPlayerLiveRewindControlContext",
    "react",
    "useVideoPlayerControllerSubscription",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = h.useCallback,
      j = h.useContext,
      k = 10,
      l = 10;
    function a() {
      var a = d("VideoPlayerHooks").useController(),
        b = j(c("VideoPlayerLiveRewindControlContext"));
      return i(
        function () {
          var c = a.getCurrentState().seekableRanges;
          c = c != null ? ((c = c.end(c.length() - 1)) != null ? c : 0) : 0;
          var d = Math.min(a.getPlayheadPosition() + k, c);
          d === c ? (a.setIsLiveRewindActive(!1), a.seek(c)) : a.seek(d);
          b.onLiveRewindControlEvent();
        },
        [b, a]
      );
    }
    function b() {
      var a = d("VideoPlayerHooks").useController(),
        b = j(c("VideoPlayerLiveRewindControlContext"));
      return i(
        function () {
          var c = a.getCurrentState().seekableRanges;
          c = (c = c == null ? void 0 : c.start(0)) != null ? c : 0;
          c = Math.max(a.getPlayheadPosition() - l, c);
          a.seek(c);
          a.setIsLiveRewindActive(!0);
          b.onLiveRewindControlEvent();
        },
        [b, a]
      );
    }
    function e() {
      var a = d("VideoPlayerHooks").useController(),
        b = j(c("VideoPlayerLiveRewindControlContext"));
      return i(
        function () {
          var c = a.getCurrentState().seekableRanges;
          c = c != null ? ((c = c.end(c.length() - 1)) != null ? c : 0) : 0;
          a.seek(c);
          a.play("user_initiated");
          a.setIsLiveRewindActive(!1);
          b.onLiveRewindControlEvent();
        },
        [b, a]
      );
    }
    function f() {
      var a = d("VideoPlayerHooks").useController(),
        b = j(c("VideoPlayerLiveRewindControlContext"));
      return i(
        function () {
          var c = a.getCurrentState().seekableRanges;
          c = (c = c == null ? void 0 : c.start(0)) != null ? c : 0;
          a.seek(c);
          a.setIsLiveRewindActive(!0);
          b.onLiveRewindControlEvent();
        },
        [b, a]
      );
    }
    function m() {
      var a = d("VideoPlayerHooks").useController(),
        b = j(c("VideoPlayerLiveRewindControlContext"));
      return i(
        function () {
          a.play("user_initiated"), b.onLiveRewindControlEvent();
        },
        [b, a]
      );
    }
    function n() {
      var a = d("VideoPlayerHooks").useController(),
        b = j(c("VideoPlayerLiveRewindControlContext"));
      return i(
        function () {
          a.pause("user_initiated"),
            a.setIsLiveRewindActive(!0),
            b.onLiveRewindControlEvent();
        },
        [b, a]
      );
    }
    function o() {
      var a = d("VideoPlayerHooks").useController(),
        b = j(c("VideoPlayerLiveRewindControlContext"));
      return i(
        function () {
          var c = a.getCurrentState().seekableRanges;
          c = (c = c == null ? void 0 : c.start(0)) != null ? c : 0;
          a.seek(c);
          a.setIsLiveRewindActive(!0);
          a.play("user_initiated");
          b.onLiveRewindControlEvent();
        },
        [b, a]
      );
    }
    function p() {
      var a = d("VideoPlayerHooks").useController(),
        b = j(c("VideoPlayerLiveRewindControlContext"));
      return i(
        function (c) {
          var d,
            e = a.getCurrentState().seekableRanges;
          d = (d = e == null ? void 0 : e.start(0)) != null ? d : 0;
          e = e != null ? ((e = e.end(e.length() - 1)) != null ? e : 0) : 0;
          d = Math.min(d + c, e);
          a.scrubEnd(d);
          d === e ? a.setIsLiveRewindActive(!1) : a.setIsLiveRewindActive(!0);
          b.onLiveRewindControlEvent();
        },
        [b, a]
      );
    }
    function q() {
      return c("useVideoPlayerControllerSubscription")(function (a) {
        return (a =
          (a = a.getCurrentState().seekableRanges) == null
            ? void 0
            : a.start(0)) != null
          ? a
          : 0;
      });
    }
    g.useLiveRewindForward = a;
    g.useLiveRewindBack = b;
    g.useLiveRewindLive = e;
    g.useLiveRewindStart = f;
    g.useLiveRewindPlay = m;
    g.useLiveRewindPause = n;
    g.useLiveRewindReplay = o;
    g.useLiveRewindScrub = p;
    g.useLiveRewindSeekableStartTime = q;
  },
  98
);
__d(
  "VideoPlayerPlaybackTimer.react",
  [
    "VideoPlayerHooks",
    "VideoPlayerLiveRewindControlContext",
    "VideoPlayerPlaybackTimerBase.react",
    "gkx",
    "react",
    "useLiveRewindUtils",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useContext;
    e = c("gkx")("1704") ? a : b;
    function j() {
      var a = d("useLiveRewindUtils").useLiveRewindSeekableStartTime(),
        b = d("VideoPlayerHooks").useCurrentTimeThrottled(200),
        e = d("VideoPlayerHooks").useCurrentTimeThrottled(1e3, function (a) {
          var b = a.getCurrentState();
          a = a.getPlayheadPosition();
          return a - b.duration;
        }),
        f = d("VideoPlayerHooks").useIsLiveRewindActive();
      f = f ? e : b - a;
      return h.jsx(c("VideoPlayerPlaybackTimerBase.react"), {
        currentTime: f,
        duration: null,
      });
    }
    j.displayName = j.name + " [from " + f.id + "]";
    function k() {
      var a = d("VideoPlayerHooks").useDuration(),
        b = d("VideoPlayerHooks").useCurrentTimeThrottled(200);
      return h.jsx(c("VideoPlayerPlaybackTimerBase.react"), {
        currentTime: b,
        duration: a,
      });
    }
    k.displayName = k.name + " [from " + f.id + "]";
    function a() {
      var a = d("VideoPlayerHooks").useIsLive();
      if (a) return h.jsx(j, {});
      else return h.jsx(k, {});
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function b() {
      var a = d("VideoPlayerHooks").useIsLive(),
        b = d("VideoPlayerHooks").useDuration(),
        e = d("VideoPlayerHooks").useCurrentTimeThrottled(200),
        f = d("useLiveRewindUtils").useLiveRewindSeekableStartTime(),
        g = i(c("VideoPlayerLiveRewindControlContext"));
      g = g.cachedLiveRewindTimestamp;
      var j = d("VideoPlayerHooks").useIsLiveRewindActive();
      if (a) {
        a = e - f;
        j && g != null && c("gkx")("1657274") && (a = g);
        return h.jsx(c("VideoPlayerPlaybackTimerBase.react"), {
          currentTime: a,
          duration: null,
        });
      }
      return h.jsx(c("VideoPlayerPlaybackTimerBase.react"), {
        currentTime: e,
        duration: b,
      });
    }
    b.displayName = b.name + " [from " + f.id + "]";
    a = e;
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerScrubberBaseContentDefault.react",
  [
    "CometVisualCompletionAttributes",
    "VideoPlayerSliderNub.react",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        liveRewindTimePlayed: { backgroundColor: "xh1tjdi", $$css: !0 },
        liveTimePlayed: { backgroundColor: "x1ciooss", $$css: !0 },
        timelineBackground: {
          backgroundColor: "x1rwy58d",
          borderTopStartRadius: "xm3z3ea",
          borderTopEndRadius: "x1x8b98j",
          borderBottomEndRadius: "x131883w",
          borderBottomStartRadius: "x16mih1h",
          boxShadow: "xpdb0fs",
          height: "xuoj239",
          textShadow: "xd9u3wd",
          userSelect: "x87ps6o",
          $$css: !0,
        },
        timelineBuffered: {
          height: "xuoj239",
          position: "x10l6tqk",
          $$css: !0,
        },
        timelineBufferedBackground: { backgroundColor: "x17j41np", $$css: !0 },
        timelinePlayed: {
          backgroundColor: "x1evw4sf",
          borderTopStartRadius: "xm3z3ea",
          borderTopEndRadius: "x1x8b98j",
          borderBottomEndRadius: "x131883w",
          borderBottomStartRadius: "x16mih1h",
          height: "xuoj239",
          position: "x10l6tqk",
          userSelect: "x87ps6o",
          $$css: !0,
        },
      };
    function a(a) {
      var b = a.bufferedRatio,
        d = a.isLive,
        e = a.isLiveRewindActive,
        f = a.isNubVisible,
        g = a.playedRatio,
        j = a.timelineBackgroundXStyle,
        k = a.timelineBufferedXStyle;
      a = a.timelinePlayedXStyle;
      return h.jsxs("div", {
        className: c("stylex")(i.timelineBackground, j),
        children: [
          h.jsx(
            "div",
            babelHelpers["extends"](
              {
                className: c("stylex")(
                  i.timelineBuffered,
                  !d && i.timelineBufferedBackground,
                  k
                ),
              },
              c("CometVisualCompletionAttributes").IGNORE,
              { style: { width: (100 * b).toFixed(5) + "%" } }
            )
          ),
          h.jsx(
            "div",
            babelHelpers["extends"](
              {
                className: c("stylex")(
                  i.timelinePlayed,
                  d && !e && i.liveTimePlayed,
                  d && e && i.liveRewindTimePlayed,
                  a
                ),
              },
              c("CometVisualCompletionAttributes").IGNORE,
              {
                style: { width: (100 * g).toFixed(5) + "%" },
                children: h.jsx(c("VideoPlayerSliderNub.react"), {
                  isVisible: f,
                }),
              }
            )
          ),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerScrubberBase.react",
  [
    "fbt",
    "CometComponentWithKeyCommands.react",
    "CometKeys",
    "CometRelay",
    "VideoPlayerPointerDrag",
    "VideoPlayerScrubberBaseContentDefault.react",
    "VideoPlayerScrubberBase_video.graphql",
    "VideoPlayerUserInteractionCounter",
    "react",
    "stylex",
    "usePrevious",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    e = d("react");
    var k = e.useCallback,
      l = e.useEffect,
      m = e.useMemo,
      n = e.useState,
      o = {
        root: {
          cursor: "x1ypdohk",
          paddingTop: "x1y1aw1k",
          paddingEnd: "x4uap5",
          paddingBottom: "xwib8y2",
          paddingStart: "xkhd6sd",
          position: "x1n2onr6",
          userSelect: "x87ps6o",
          width: "xh8yej3",
          $$css: !0,
        },
        tooltipContainer: {
          bottom: "xfqi8uc",
          position: "x10l6tqk",
          $$css: !0,
        },
        withoutVerticalPadding: {
          paddingBottom: "x18d9i69",
          paddingTop: "xexx8yu",
          $$css: !0,
        },
      };
    function p(a, b) {
      return Math.min(a > 0 ? b / a : 0, 1);
    }
    function a(a) {
      var e = a.bufferEnd,
        f = a.currentTime,
        g = a.disableKeyCommands,
        q = a.duration,
        r = a.hideNub;
      r = r === void 0 ? !1 : r;
      var s = a.isLive,
        t = a.isLiveRewindActive,
        u = a.keyLeftDescription,
        v = a.keyRightDescription,
        w = a.onScrubCancel,
        x = a.onScrubEnd,
        y = a.onScrubStart,
        z = a.onUserInteraction,
        A = a.playFromBeginningImpl,
        B = a.renderTooltip,
        C = a.skipBackwardImpl,
        D = a.skipForwardImpl,
        E = a.skipToEndImpl,
        F = a.supportsTouch,
        G = a.timelineBackgroundXStyle,
        H = a.timelineBufferedXStyle,
        I = a.timelinePlayedXStyle,
        J = a.video;
      a = a.withoutVerticalPadding;
      a = a === void 0 ? !1 : a;
      J = d("CometRelay").useFragment(
        i !== void 0 ? i : (i = b("VideoPlayerScrubberBase_video.graphql")),
        J
      );
      var K = d("VideoPlayerPointerDrag").usePointerDragResizeObserver(),
        L = K.invalidateRootRect,
        M = K.rootRectRef;
      K = K.rootSizeRefCallback;
      var N = c("usePrevious")(f),
        O = n(!1),
        P = O[0],
        Q = O[1];
      O = n(0);
      var R = O[0],
        S = O[1];
      O = n(!1);
      var T = O[0],
        U = O[1];
      O = n(0);
      var V = O[0],
        W = O[1];
      O = n(null);
      var X = O[0],
        Y = O[1];
      l(
        function () {
          f !== N && U(!1);
        },
        [f, N]
      );
      O = d("VideoPlayerPointerDrag").usePointerDrag(
        {
          onDragCancel: function (a) {
            w();
          },
          onDragEnd: function (a) {
            a = d("VideoPlayerPointerDrag").computePointerOffsetRatio(
              a,
              M.current
            );
            if (!a) {
              w();
              return;
            }
            S(a.ratioX);
            a = a.ratioX * q;
            x(a);
          },
          onDragEndSync: function () {
            U(!0);
          },
          onDragMove: function (a) {
            a = d("VideoPlayerPointerDrag").computePointerOffsetRatio(
              a,
              M.current
            );
            if (!a) return;
            S(a.ratioX);
          },
          onDragStart: function (a) {
            L();
            a = d("VideoPlayerPointerDrag").computePointerOffsetRatio(
              a,
              M.current
            );
            if (!a) return;
            S(a.ratioX);
            y();
          },
        },
        { hasTouchEvents: F === !0 }
      );
      F = O.isDragging;
      O = O.rootProps;
      var Z = k(function () {
          Q(!0);
        }, []),
        aa = k(function () {
          Q(!1);
        }, []),
        ba = k(
          function (a) {
            L();
            if (M.current != null) {
              var b = M.current.left,
                c = M.current.width,
                d = Math.max(0, Math.min(c, a.clientX - b));
              d = c > 0 ? d / c : 0;
              c = Number.isFinite(q) && q > 0 ? q * d : null;
              W(a.clientX - b);
              Y(c);
            }
          },
          [q, L, M]
        ),
        $ = P || F;
      d("VideoPlayerUserInteractionCounter").useVideoPlayerUserInteraction(
        "video_scrubber",
        $,
        z
      );
      $ = P || F || T;
      z = F || T ? R : s && !t ? 1 : p(q, f);
      F = p(q, e);
      T = m(
        function () {
          return g === !0
            ? []
            : [
                {
                  command: { key: c("CometKeys").RIGHT },
                  description: v,
                  handler: D,
                },
                {
                  command: { key: c("CometKeys").LEFT },
                  description: u,
                  handler: C,
                },
                {
                  command: { key: c("CometKeys").HOME },
                  description: h._("Lire depuis le d\u00e9but"),
                  handler: A,
                },
                {
                  command: { key: c("CometKeys").END },
                  description: h._("Passer \u00e0 la fin"),
                  handler: E,
                },
              ];
        },
        [g, v, D, u, C, A, E]
      );
      R = {
        bufferedRatio: F,
        duration: q,
        hoveringPositionSec: X,
        isHovering: P,
        isLive: s,
        isLiveRewindActive: t,
        isNubVisible: !r && $,
        playedRatio: z,
        timelineBackgroundXStyle: G,
        timelineBufferedXStyle: H,
        timelinePlayedXStyle: I,
      };
      return j.jsx(c("CometComponentWithKeyCommands.react"), {
        commandConfigs: T,
        children: j.jsxs(
          "div",
          babelHelpers["extends"]({}, O, {
            "aria-label": h._("Change Position"),
            "aria-orientation": "horizontal",
            "aria-valuemax": q,
            "aria-valuemin": "0",
            "aria-valuenow": f,
            className: c("stylex")(o.root, a && o.withoutVerticalPadding),
            "data-testid": void 0,
            onMouseEnter: Z,
            onMouseLeave: aa,
            onMouseMove: ba,
            ref: K,
            role: "slider",
            tabIndex: "0",
            children: [
              (J == null
                ? void 0
                : J.video_player_scrubber_base_content_renderer) != null
                ? j.jsx(d("CometRelay").MatchContainer, {
                    match:
                      J == null
                        ? void 0
                        : J.video_player_scrubber_base_content_renderer,
                    props: babelHelpers["extends"]({}, R),
                  })
                : j.jsx(
                    c("VideoPlayerScrubberBaseContentDefault.react"),
                    babelHelpers["extends"]({}, R)
                  ),
              B != null &&
                X != null &&
                P &&
                j.jsx("div", {
                  className: "xfqi8uc x10l6tqk",
                  style: { left: V },
                  children: B(X),
                }),
            ],
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
  "VideoPlayerScrubber.react",
  [
    "fbt",
    "CometRelay",
    "VideoPlayerHooks",
    "VideoPlayerScrubberBase.react",
    "VideoPlayerScrubber_video.graphql",
    "react",
    "useLiveRewindUtils",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react"),
      k = d("react").useCallback,
      l = function () {
        return d("VideoPlayerHooks").useCurrentTimeThrottled(200);
      };
    function a(a) {
      var e = a.onUserInteraction,
        f = a.renderTooltip;
      a = a.video;
      a = d("CometRelay").useFragment(
        i !== void 0 ? i : (i = b("VideoPlayerScrubber_video.graphql")),
        a
      );
      var g = l(),
        m = d("VideoPlayerHooks").useDuration(),
        n = d("VideoPlayerHooks").useController(),
        o = d("VideoPlayerHooks").useBufferEnd(),
        p = d("VideoPlayerHooks").useIsLive(),
        q = d("VideoPlayerHooks").useIsLiveRewindActive(),
        r = d("useLiveRewindUtils").useLiveRewindScrub(),
        s = d("useLiveRewindUtils").useLiveRewindForward(),
        t = d("useLiveRewindUtils").useLiveRewindBack(),
        u = d("useLiveRewindUtils").useLiveRewindStart(),
        v = d("useLiveRewindUtils").useLiveRewindLive(),
        w = d("useLiveRewindUtils").useLiveRewindSeekableStartTime();
      p && ((m -= w), (g -= w));
      w = k(
        function () {
          if (p) s();
          else {
            var a = n.getPlayheadPosition() + 5;
            a >= m ? n.seek(m - 0.01) : n.seek(a);
          }
        },
        [n, p, s, m]
      );
      var x = p ? h._("Avancer de 10 secondes") : h._("Avancer de 5 secondes"),
        y = k(
          function () {
            if (p) t();
            else {
              var a = n.getPlayheadPosition() - 5;
              a < 0 ? n.seek(0) : n.seek(a);
            }
          },
          [n, p, t]
        ),
        z = p
          ? h._("Revenir en arri\u00e8re de 10 secondes")
          : h._("Revenir en arri\u00e8re de 5 secondes"),
        A = k(
          function () {
            p ? u() : n.seek(0);
          },
          [n, p, u]
        ),
        B = k(
          function () {
            p ? v() : n.seek(m - 0.01);
          },
          [n, p, v, m]
        ),
        C = k(
          function () {
            n.scrubEnd(null);
          },
          [n]
        ),
        D = k(
          function () {
            n.scrubBegin();
          },
          [n]
        ),
        E = k(
          function (a) {
            !p ? n.scrubEnd(a) : r(a);
          },
          [n, p, r]
        );
      return j.jsx(c("VideoPlayerScrubberBase.react"), {
        bufferEnd: o,
        currentTime: g,
        duration: m,
        isLive: p,
        isLiveRewindActive: q,
        keyLeftDescription: z,
        keyRightDescription: x,
        onScrubCancel: C,
        onScrubEnd: E,
        onScrubStart: D,
        onUserInteraction: e,
        playFromBeginningImpl: A,
        renderTooltip: f,
        skipBackwardImpl: y,
        skipForwardImpl: w,
        skipToEndImpl: B,
        video: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerTimeIndicator.react",
  ["TetraText.react", "formatDurationSeconds", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.shouldCenterSelf;
      a = a.timestampSec;
      var d = b === !0 ? "var(--always-black)" : "var(--always-dark-overlay)";
      d = h.jsx("div", {
        className:
          "x18l40ae x1lcm9me x1yr5g0i xrt01vj x10y3i5r x1wa3icf x123j3cw x1mpkggp xs9asl8 x1t2a60a x10l6tqk xuxw1ft",
        style: { backgroundColor: d },
        children: h.jsx(c("TetraText.react"), {
          color: "primaryOnMedia",
          type: "body4",
          children: c("formatDurationSeconds")(Math.round(a)),
        }),
      });
      return b === !0
        ? h.jsx("div", { className: "x78zum5 xl56j7k x1n2onr6", children: d })
        : d;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerScrubberPreview.react",
  [
    "CometRelay",
    "VideoPlayerScrubberPreview_video.graphql",
    "VideoPlayerTimeIndicator.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e = a.timestampSec;
      a = a.video;
      a = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("VideoPlayerScrubberPreview_video.graphql")),
        a
      );
      return a == null
        ? i.jsx(c("VideoPlayerTimeIndicator.react"), {
            shouldCenterSelf: !0,
            timestampSec: e,
          })
        : i.jsx(d("CometRelay").MatchContainer, {
            match:
              a == null ? void 0 : a.video_player_scrubber_preview_renderer,
            props: { timestampSec: e, video: a },
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerScrubberWithPreview.react",
  [
    "CometRelay",
    "VideoPlayerScrubber.react",
    "VideoPlayerScrubberPreview.react",
    "VideoPlayerScrubberWithPreview_video.graphql",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e = a.onUserInteraction;
      a = a.video;
      var f = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("VideoPlayerScrubberWithPreview_video.graphql")),
        a
      );
      return i.jsx(c("VideoPlayerScrubber.react"), {
        onUserInteraction: e,
        renderTooltip: function (a) {
          return i.jsx(c("VideoPlayerScrubberPreview.react"), {
            timestampSec: a,
            video: f,
          });
        },
        video: f,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerDefaultControlsImplNotLive.react",
  [
    "CometRelay",
    "CometTahoeSidePaneContext",
    "PlaybackSpeedExperiments",
    "VideoPlayerCaptionsControl.react",
    "VideoPlayerControlsBottomRowAddOnContext",
    "VideoPlayerControlsContainerOverlay.react",
    "VideoPlayerControlsGroups.react",
    "VideoPlayerDefaultControlsImplNotLive_video.graphql",
    "VideoPlayerExpandSidePanelControl.react",
    "VideoPlayerHooks",
    "VideoPlayerJoinOnPortalControl.react",
    "VideoPlayerPlaybackControl.react",
    "VideoPlayerPlaybackTimer.react",
    "VideoPlayerQuietModeControl.react",
    "VideoPlayerScrubberWithPreview.react",
    "VideoPlayerSettingsControl.react",
    "VideoPlayerVolumeControl.react",
    "VideoPlayerWatchAndScrollControl.react",
    "cr:1790881",
    "cr:1809777",
    "gkx",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    e = d("react");
    var j = e.useContext,
      k = e.useState,
      l = d("PlaybackSpeedExperiments").isInCometHeadroomTest
        ? b("cr:1790881")
        : null,
      m = d("PlaybackSpeedExperiments").isInCometHeadroomTest
        ? b("cr:1809777")
        : null,
      n = c("gkx")("3610");
    function a(a) {
      var e = a.expandControl,
        f = a.isControlsVisible,
        g = a.isVolumeControlVisible,
        o = a.onUserInteraction,
        p = a.pictureInPictureControl,
        q = a.shouldRenderCaptionsControl;
      q = q === void 0 ? !0 : q;
      var r = a.shouldRenderExpandSidePanelControl;
      r = r === void 0 ? !1 : r;
      var s = a.shouldRenderQuietModeControl;
      s = s === void 0 ? !1 : s;
      var t = a.shouldRenderWatchAndScrollControl,
        u = a.skipControl,
        v = a.subOrigin;
      a = a.video;
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("VideoPlayerDefaultControlsImplNotLive_video.graphql")),
        a
      );
      var w = d("VideoPlayerHooks").useIsFullscreen(),
        x = a == null ? void 0 : a.id,
        y = a == null ? void 0 : a.if_viewer_can_use_clipping,
        z = j(
          d("VideoPlayerControlsBottomRowAddOnContext")
            .VideoPlayerControlsBottomRowAddOnContext
        ),
        A = j(c("CometTahoeSidePaneContext"));
      A = A.rightRailHidden;
      s =
        s === !0 && !w
          ? i.jsx(d("VideoPlayerControlsGroups.react").Contracted, {
              isVisible: f,
              noPaddingEnd: !0,
              children: i.jsx(c("VideoPlayerQuietModeControl.react"), {}),
            })
          : null;
      r =
        r === !0 &&
        !w &&
        !A &&
        i.jsx(d("VideoPlayerControlsGroups.react").Contracted, {
          isVisible: f,
          noPaddingEnd: !0,
          children: i.jsx(c("VideoPlayerExpandSidePanelControl.react"), {}),
        });
      w =
        y != null &&
        x != null &&
        i.jsx(d("VideoPlayerControlsGroups.react").Contracted, {
          isVisible: f,
          noPaddingEnd: !0,
          noPaddingStart: s != null,
          children: i.jsx(d("CometRelay").MatchContainer, {
            match: y,
            props: { video: y, videoID: x },
          }),
        });
      A = k(null);
      y = A[0];
      x = A[1];
      A = i.jsx(d("VideoPlayerControlsGroups.react").Contracted, {
        isVisible: f,
        noPaddingEnd: !0,
        noPaddingStart: s != null || w != null,
        children: i.jsx(c("VideoPlayerSettingsControl.react"), {
          alignMenuToIcon: (z == null ? void 0 : z.getBottomRowAddOn()) != null,
          menuOpened: y,
          onUserInteraction: o,
          setMenuOpened: x,
        }),
      });
      z =
        t === !0 && v != null && a != null
          ? i.jsx(d("VideoPlayerControlsGroups.react").Contracted, {
              isVisible: f,
              children: i.jsx(c("VideoPlayerWatchAndScrollControl.react"), {
                subOrigin: v,
                video: a,
              }),
            })
          : null;
      t = i.jsxs(d("VideoPlayerControlsGroups.react").Contracted, {
        isVisible: f,
        noPaddingEnd: !0,
        children: [
          e,
          i.jsx(c("VideoPlayerJoinOnPortalControl.react"), { isVisible: f }),
        ],
      });
      e =
        m != null
          ? i.jsx(d("VideoPlayerControlsGroups.react").Contracted, {
              isVisible: !0,
              children: i.jsx(m, { onUserInteraction: o }),
            })
          : null;
      g = i.jsx(d("VideoPlayerControlsGroups.react").Contracted, {
        isVisible: m ? !0 : g,
        noPaddingStart: !0,
        children: i.jsx(c("VideoPlayerVolumeControl.react"), {
          onUserInteraction: o,
        }),
      });
      var B = i.jsx(d("VideoPlayerControlsGroups.react").Expanded, {
        isVisible: f,
        children: i.jsx(c("VideoPlayerScrubberWithPreview.react"), {
          onUserInteraction: o,
          video: a,
        }),
      });
      u = i.jsxs(d("VideoPlayerControlsGroups.react").Contracted, {
        isVisible: f,
        children: [
          i.jsx(c("VideoPlayerPlaybackControl.react"), {}),
          u,
          i.jsx(c("VideoPlayerPlaybackTimer.react"), {}),
          l != null
            ? i.jsx(d("VideoPlayerControlsGroups.react").Contracted, {
                isVisible: f,
                children: i.jsx(l, { onUserInteraction: o }),
              })
            : null,
        ],
      });
      v = v === "watch_scroll";
      q = c("gkx")("8487") ? q === !0 : !v;
      var C = d("VideoPlayerHooks").useCaptionsLoaded(),
        D = d("VideoPlayerHooks").useCaptionsVisible();
      C =
        C && !c("gkx")("1745416") && q
          ? i.jsx(d("VideoPlayerControlsGroups.react").Contracted, {
              isVisible: f,
              children: i.jsx(c("VideoPlayerCaptionsControl.react"), {
                captionsVisible: D,
                menuOpened: y,
                onUserInteraction: o,
                setMenuOpened: x,
                video: a,
              }),
            })
          : null;
      q =
        v && n
          ? i.jsx(d("VideoPlayerControlsGroups.react").Contracted, {
              isVisible: f,
              children: p,
            })
          : null;
      return i.jsxs(c("VideoPlayerControlsContainerOverlay.react"), {
        isBackgroundVisible: f,
        children: [u, B, s, r, w, A, C, z, t, q, e, g],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useVideoPlayerVolumeControlAudioAvailabilityUI",
  [
    "fbt",
    "CometTooltipImpl.react",
    "VideoPlayerControlsHiddenContext",
    "clearTimeout",
    "emptyFunction",
    "react",
    "setTimeout",
    "useAudioAvailabilityAtPlayhead",
    "usePrevious",
    "useStable",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useContext,
      k = b.useEffect,
      l = b.useRef,
      m = b.useState,
      n = 3e3;
    function a(a) {
      var b = a.canPlayerProduceSound,
        d = a.isHovering;
      a = c("useAudioAvailabilityAtPlayhead")();
      var e = a.isSilentAtPlayhead;
      a = a.volumeControlState;
      var f = null;
      switch (a) {
        case "VOLUME_SILENT":
          f = h._("La vid\u00e9o n\u2019a pas de son");
          break;
        case "VOLUME_COPYRIGHT_FULL":
          f = h._(
            "Mis en sourdine en raison d\u2019une r\u00e9clamation de droits d\u2019auteur"
          );
          break;
        case "VOLUME_COPYRIGHT_PARTIAL_SILENCED":
          f = h._(
            "Partiellement mis en sourdine en raison d\u2019une r\u00e9clamation de droits d\u2019auteur"
          );
          break;
        case "VOLUME_COPYRIGHT_PARTIAL_NOT_SILENCED":
          break;
        case "VOLUME_DEFAULT":
          break;
        default:
          a;
      }
      var g = c("usePrevious")(e),
        o = m(!1),
        p = o[0],
        q = o[1],
        r = l(c("emptyFunction")),
        s = l(!1);
      o = m(!1);
      var t = o[0],
        u = o[1],
        v = c("useStable")(function () {
          return function (a) {
            (s.current = a), u(a), r.current(a), a || q(!1);
          };
        }),
        w = j(c("VideoPlayerControlsHiddenContext"));
      k(
        function () {
          w
            ? v(!1)
            : f == null
            ? v(!1)
            : d || p
            ? v(!0)
            : e !== g && e && b && v(!0);
        },
        [f, b, w, d, p, e, g, v]
      );
      k(
        function () {
          if (t) {
            var a = c("setTimeout")(function () {
              v(!1);
            }, n);
            return function () {
              c("clearTimeout")(a);
            };
          }
        },
        [t, v]
      );
      o = c("useStable")(function () {
        return function () {
          q(function (a) {
            return !a;
          });
        };
      });
      var x = c("useStable")(function () {
          return function (a) {
            var b = m(!1),
              d = b[0],
              e = b[1];
            k(
              function () {
                r.current = e;
                return function () {
                  r.current = c("emptyFunction");
                };
              },
              [e]
            );
            k(
              function () {
                a.isVisible || v(!1);
              },
              [a.isVisible]
            );
            return i.jsx(
              c("CometTooltipImpl.react"),
              babelHelpers["extends"]({}, a, { isVisible: d })
            );
          };
        }),
        y = a === "VOLUME_COPYRIGHT_FULL" || a === "VOLUME_SILENT",
        z = b ? e : y;
      return f == null
        ? null
        : {
            onVolumeControlPress: o,
            shouldDisableVolumeControl: y,
            shouldShowNullIcon: z,
            tooltipContent: f,
            tooltipImpl: x,
            volumeControlState: a,
          };
    }
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerWithLiveVideoInterruptedOverlay.react",
  [
    "fbt",
    "CometLoadingAnimation.react",
    "TetraTextPairing.react",
    "VideoPlayerHooks",
    "VideoPlayerInteractionOverlay.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a() {
      var a = d("VideoPlayerHooks").useStreamInterrupted(),
        b = d("VideoPlayerHooks").useIsLiveRewindActive();
      return !a || b
        ? null
        : i.jsx(
            d("VideoPlayerInteractionOverlay.react")
              .VideoPlayerInteractionOverlay,
            {
              children: i.jsxs("div", {
                className:
                  "x6s0dn4 x18l40ae x1ey2m1c x9f619 x78zum5 xds687c xdt5ytf xl56j7k x10l6tqk x17qophe x13vifvy",
                children: [
                  i.jsx("div", {
                    children: i.jsx(c("TetraTextPairing.react"), {
                      body: h._(
                        "La diffusion est en attente d\u2019un signal. Elle devrait reprendre rapidement."
                      ),
                      bodyColor: "white",
                      headline: h._("En attente du signal vid\u00e9o"),
                      headlineColor: "white",
                      level: 2,
                      textAlign: "center",
                    }),
                  }),
                  i.jsx("div", {
                    className: "xc9qbxq x1sy10c2 x1n2onr6 x14qfxbe",
                    children: i.jsx(c("CometLoadingAnimation.react"), {
                      size: 36,
                    }),
                  }),
                ],
              }),
            }
          );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometRelayEF",
  [
    "Bootloader",
    "BootloaderEvents",
    "ClientConsistencyEventEmitter",
    "CometSSREntrypoint",
    "cometAsyncFetch",
    "gkx",
    "performanceAbsoluteNow",
    "promiseDone",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = new Map();
    function i(a, b) {
      if (!c("gkx")("1334580")) return;
      a = d("CometSSREntrypoint").processRootEntryPoint(a, b);
      var e = [];
      a.forEach(function (a) {
        a = a.name;
        h.has(a) ||
          (e.push(a),
          d("BootloaderEvents").notifyHasteResponseEFStart("relay_3d", a));
      });
      if (e.length === 0) return;
      var f = c("performanceAbsoluteNow")(),
        g = c("cometAsyncFetch")("/ajax/relay-ef/", {
          data: { queries: e },
          method: "POST",
        }).then(function (a) {
          return {
            fetchPredictionsEnd: c("performanceAbsoluteNow")(),
            fetchPredictionsStart: f,
            payload: a,
          };
        });
      e.forEach(function (a) {
        return h.set(a, g);
      });
    }
    function a(a, b) {
      if (!c("gkx")("1334580")) return;
      var e = c("performanceAbsoluteNow")();
      i(a, b);
      a = d("CometSSREntrypoint").processRootEntryPoint(a, b);
      a.forEach(function (a) {
        var b = a.name,
          f = h.get(b);
        f &&
          f !== !0 &&
          c("promiseDone")(f, function (a) {
            var f = a.fetchPredictionsEnd,
              g = a.fetchPredictionsStart;
            a = a.payload;
            if (a != null && typeof a === "object") {
              var h;
              c("Bootloader").loadPredictedResourceMap(
                a.predictions[b],
                {
                  onLog: function (a) {
                    return d("BootloaderEvents").notifyHasteResponseEF(
                      "relay_3d",
                      b,
                      {
                        fetchPredictionsEnd: f,
                        fetchPredictionsStart: g,
                        fetchRsrcsStart: e,
                        tierOne: a,
                      }
                    );
                  },
                },
                (h = (h = a.consistency) == null ? void 0 : h.rev) != null
                  ? h
                  : null
              );
              a.consistency != null &&
                c("ClientConsistencyEventEmitter").emit(
                  "newEntry",
                  a.consistency
                );
            }
          });
        h.set(a.name, !0);
      });
    }
    b = { fetchPredictedResources: a, fetchPredictions: i };
    g["default"] = b;
  },
  98
);
