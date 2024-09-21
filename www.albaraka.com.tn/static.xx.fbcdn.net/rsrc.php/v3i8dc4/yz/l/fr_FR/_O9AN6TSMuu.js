/*FB_PKG_DELIM*/

__d(
  "ProfileCometProfileLink_actor.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "ProfileCometProfileLink_actor",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        {
          kind: "InlineFragment",
          selections: [
            {
              alias: "profile_url",
              args: null,
              kind: "ScalarField",
              name: "url",
              storageKey: null,
            },
          ],
          type: "Entity",
          abstractKey: "__isEntity",
        },
      ],
      type: "Actor",
      abstractKey: "__isActor",
    };
    e.exports = a;
  },
  null
);
__d(
  "VideoPlayerCometFeedThumbnail_video.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "VideoPlayerCometFeedThumbnail_video",
      selections: [
        {
          alias: "thumbnailImage",
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
      ],
      type: "Video",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "WorkCometActorLinkWithHovercardQuery_facebookRelayOperation",
  [],
  function (a, b, c, d, e, f) {
    e.exports = "5664305150328550";
  },
  null
);
__d(
  "WorkCometActorLinkWithHovercardQuery.graphql",
  ["WorkCometActorLinkWithHovercardQuery_facebookRelayOperation"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "id" }],
        c = [{ kind: "Variable", name: "id", variableName: "id" }],
        d = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        e = [
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
            kind: "ScalarField",
            name: "url",
            storageKey: null,
          },
        ],
        f = {
          kind: "InlineFragment",
          selections: e,
          type: "Group",
          abstractKey: null,
        },
        g = {
          kind: "InlineFragment",
          selections: e,
          type: "Page",
          abstractKey: null,
        },
        h = {
          kind: "InlineFragment",
          selections: e,
          type: "User",
          abstractKey: null,
        };
      e = {
        kind: "InlineFragment",
        selections: e,
        type: "XFBWorkroomsBaseUser",
        abstractKey: "__isXFBWorkroomsBaseUser",
      };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "WorkCometActorLinkWithHovercardQuery",
          selections: [
            {
              alias: null,
              args: c,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [d, f, g, h, e],
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
          name: "WorkCometActorLinkWithHovercardQuery",
          selections: [
            {
              alias: null,
              args: c,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                d,
                f,
                g,
                h,
                e,
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
          id: b("WorkCometActorLinkWithHovercardQuery_facebookRelayOperation"),
          metadata: {},
          name: "WorkCometActorLinkWithHovercardQuery",
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
  "GroupsGeminiKnowledgeViewCollectionDialogQuery_facebookRelayOperation",
  [],
  function (a, b, c, d, e, f) {
    e.exports = "6275534555849234";
  },
  null
);
__d(
  "GroupsGeminiKnowledgeViewCollectionDialogQuery$Parameters",
  ["GroupsGeminiKnowledgeViewCollectionDialogQuery_facebookRelayOperation"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: b(
          "GroupsGeminiKnowledgeViewCollectionDialogQuery_facebookRelayOperation"
        ),
        metadata: {},
        name: "GroupsGeminiKnowledgeViewCollectionDialogQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "WorkKnowledgeCoverPageBaseCollectionCardContent_collection.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
        alias: null,
        args: null,
        concreteType: "KnowledgeNoteCoverPhotoMetadata",
        kind: "LinkedField",
        name: "cover_photo_metadata",
        plural: !1,
        selections: [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "src",
            storageKey: null,
          },
        ],
        storageKey: null,
      };
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "WorkKnowledgeCoverPageBaseCollectionCardContent_collection",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "WorkKnowledgeVisualSetting",
            kind: "LinkedField",
            name: "visual_setting",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "hexcolor",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "WorkKnowledgeDocument",
            kind: "LinkedField",
            name: "home_page_document",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "latest_published_version",
                plural: !1,
                selections: [
                  {
                    kind: "InlineFragment",
                    selections: [a],
                    type: "WorkKnowledgeDocumentVersion",
                    abstractKey: null,
                  },
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
              a,
            ],
            storageKey: null,
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "WorkKnowledgeTopicIconUnitContainer",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "WorkKnowledgeCoverPageCollectionCardContentBody_collection",
          },
        ],
        type: "XFBWorkKnowledgeBaseCollection",
        abstractKey: "__isXFBWorkKnowledgeBaseCollection",
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "WorkKnowledgeCoverPageCollectionCardBody_collection.graphql",
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
        name: "WorkKnowledgeCoverPageCollectionCardBody_collection",
        selections: [
          a,
          {
            alias: null,
            args: null,
            concreteType: "WorkKnowledgeCollectionChildrenKnowledgeConnection",
            kind: "LinkedField",
            name: "children_knowledge",
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
                  a,
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "WorkKnowledgeHomeCategoryCardGuideLink_collection",
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: "WorkKnowledgeCollection",
        abstractKey: null,
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "WorkKnowledgeCoverPageCollectionCardContainer_collection.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "WorkKnowledgeCoverPageCollectionCardContainer_collection",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "WorkKnowledgeCoverPageCollectionCardHeaderContainer_header",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "WorkKnowledgeCoverPageCollectionCardBody_collection",
        },
      ],
      type: "WorkKnowledgeCollection",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "WorkKnowledgeCoverPageCollectionCardContentBody_collection.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "WorkKnowledgeCoverPageCollectionCardContentBody_collection",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "collection_title",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "collection_content",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "WorkKnowledgeAudience",
          kind: "LinkedField",
          name: "effective_read_audience",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "knowledge_audience_type",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "XFBWorkKnowledgeBaseCollection",
      abstractKey: "__isXFBWorkKnowledgeBaseCollection",
    };
    e.exports = a;
  },
  null
);
__d(
  "WorkKnowledgeCoverPageCollectionCardHeaderContainer_header.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "WorkKnowledgeCoverPageCollectionCardHeaderContainer_header",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "WorkKnowledgeTopicIconUnitContainer",
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
          kind: "ScalarField",
          name: "id_or_alias",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "collection_title",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "status",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "level",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "WorkKnowledgeCollectionChildrenKnowledgeConnection",
          kind: "LinkedField",
          name: "children_knowledge",
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
          ],
          storageKey: null,
        },
      ],
      type: "WorkKnowledgeCollection",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "WorkKnowledgeCoverPageCollectionCard_collection.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "WorkKnowledgeCoverPageCollectionCard_collection",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "id_or_alias",
              storageKey: null,
            },
          ],
          type: "WorkKnowledgeCollection",
          abstractKey: null,
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "WorkKnowledgeCoverPageBaseCollectionCardContent_collection",
        },
      ],
      type: "XFBWorkKnowledgeBaseCollection",
      abstractKey: "__isXFBWorkKnowledgeBaseCollection",
    };
    e.exports = a;
  },
  null
);
__d(
  "WorkKnowledgeCoverPageCollectionsQuery_facebookRelayOperation",
  [],
  function (a, b, c, d, e, f) {
    e.exports = "5825828310855674";
  },
  null
);
__d(
  "WorkKnowledgeCoverPageCollectionsQuery.graphql",
  ["WorkKnowledgeCoverPageCollectionsQuery_facebookRelayOperation"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "ids" }],
        c = [{ kind: "Variable", name: "ids", variableName: "ids" }],
        d = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        f = {
          alias: null,
          args: null,
          concreteType: "KnowledgeNoteCoverPhotoMetadata",
          kind: "LinkedField",
          name: "cover_photo_metadata",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "src",
              storageKey: null,
            },
            e,
          ],
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "WorkKnowledgeCoverPageCollectionsQuery",
          selections: [
            {
              alias: null,
              args: c,
              concreteType: "WorkKnowledgeBaseCollectionsConnection",
              kind: "LinkedField",
              name: "work_knowledge_base_collections",
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
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "WorkKnowledgeCoverPageCollectionCard_collection",
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
          name: "WorkKnowledgeCoverPageCollectionsQuery",
          selections: [
            {
              alias: null,
              args: c,
              concreteType: "WorkKnowledgeBaseCollectionsConnection",
              kind: "LinkedField",
              name: "work_knowledge_base_collections",
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
                    d,
                    {
                      kind: "TypeDiscriminator",
                      abstractKey: "__isXFBWorkKnowledgeBaseCollection",
                    },
                    e,
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "id_or_alias",
                          storageKey: null,
                        },
                      ],
                      type: "WorkKnowledgeCollection",
                      abstractKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "WorkKnowledgeVisualSetting",
                      kind: "LinkedField",
                      name: "visual_setting",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "hexcolor",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "icon",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "WorkKnowledgeDocument",
                      kind: "LinkedField",
                      name: "home_page_document",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: null,
                          kind: "LinkedField",
                          name: "latest_published_version",
                          plural: !1,
                          selections: [
                            {
                              kind: "InlineFragment",
                              selections: [f],
                              type: "WorkKnowledgeDocumentVersion",
                              abstractKey: null,
                            },
                            d,
                            e,
                          ],
                          storageKey: null,
                        },
                        f,
                        e,
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "collection_title",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "collection_content",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "WorkKnowledgeAudience",
                      kind: "LinkedField",
                      name: "effective_read_audience",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "knowledge_audience_type",
                          storageKey: null,
                        },
                        e,
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
        },
        params: {
          id: b(
            "WorkKnowledgeCoverPageCollectionsQuery_facebookRelayOperation"
          ),
          metadata: {},
          name: "WorkKnowledgeCoverPageCollectionsQuery",
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
  "WorkKnowledgeCoverPageSubcategoriesListQuery_facebookRelayOperation",
  [],
  function (a, b, c, d, e, f) {
    e.exports = "6560513900653883";
  },
  null
);
__d(
  "WorkKnowledgeCoverPageSubcategoriesListQuery.graphql",
  ["WorkKnowledgeCoverPageSubcategoriesListQuery_facebookRelayOperation"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [
          { defaultValue: null, kind: "LocalArgument", name: "knowledge_id" },
        ],
        c = [{ kind: "Variable", name: "id", variableName: "knowledge_id" }],
        d = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        f = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id_or_alias",
          storageKey: null,
        },
        g = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "collection_title",
          storageKey: null,
        },
        h = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "status",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "WorkKnowledgeCoverPageSubcategoriesListQuery",
          selections: [
            {
              alias: null,
              args: c,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType:
                        "WorkKnowledgeCollectionChildrenKnowledgeConnection",
                      kind: "LinkedField",
                      name: "children_knowledge",
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
                            d,
                            {
                              args: null,
                              kind: "FragmentSpread",
                              name: "WorkKnowledgeCoverPageCollectionCardContainer_collection",
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  type: "WorkKnowledgeCollection",
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
          argumentDefinitions: a,
          kind: "Operation",
          name: "WorkKnowledgeCoverPageSubcategoriesListQuery",
          selections: [
            {
              alias: null,
              args: c,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                e,
                d,
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType:
                        "WorkKnowledgeCollectionChildrenKnowledgeConnection",
                      kind: "LinkedField",
                      name: "children_knowledge",
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
                            e,
                            d,
                            {
                              kind: "InlineFragment",
                              selections: [
                                f,
                                g,
                                h,
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "level",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType:
                                    "WorkKnowledgeCollectionChildrenKnowledgeConnection",
                                  kind: "LinkedField",
                                  name: "children_knowledge",
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
                                        e,
                                        d,
                                        {
                                          kind: "TypeDiscriminator",
                                          abstractKey:
                                            "__isXFBWorkKnowledgeBaseCollection",
                                        },
                                        g,
                                        h,
                                        {
                                          kind: "InlineFragment",
                                          selections: [f],
                                          type: "WorkKnowledgeCollection",
                                          abstractKey: null,
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                  ],
                                  storageKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType:
                                        "WorkKnowledgeVisualSetting",
                                      kind: "LinkedField",
                                      name: "visual_setting",
                                      plural: !1,
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          kind: "ScalarField",
                                          name: "icon",
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          kind: "ScalarField",
                                          name: "hexcolor",
                                          storageKey: null,
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                  ],
                                  type: "XFBWorkKnowledgeBaseCollection",
                                  abstractKey:
                                    "__isXFBWorkKnowledgeBaseCollection",
                                },
                              ],
                              type: "WorkKnowledgeCollection",
                              abstractKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  type: "WorkKnowledgeCollection",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: b(
            "WorkKnowledgeCoverPageSubcategoriesListQuery_facebookRelayOperation"
          ),
          metadata: {},
          name: "WorkKnowledgeCoverPageSubcategoriesListQuery",
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
  "WorkKnowledgeEmbeddedImage_image$normalization.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "SplitOperation",
      metadata: {},
      name: "WorkKnowledgeEmbeddedImage_image$normalization",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "WorkKnowledgePhotoData",
          kind: "LinkedField",
          name: "data",
          plural: !1,
          selections: [
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
              kind: "ScalarField",
              name: "height",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "width",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
    };
    e.exports = a;
  },
  null
);
__d(
  "WorkKnowledgeEmbeddedImage_image.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "WorkKnowledgeEmbeddedImage_image",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "WorkKnowledgePhotoData",
          kind: "LinkedField",
          name: "data",
          plural: !1,
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "WorkKnowledgePreloadedImage_data",
            },
          ],
          storageKey: null,
        },
      ],
      type: "WorkKnowledgeEmbeddedImage",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "WorkKnowledgeGeminiXMLRenderer_components.graphql",
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
        b = [a];
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "WorkKnowledgeGeminiXMLRenderer_components",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "live_components",
            plural: !0,
            selections: [
              {
                kind: "InlineFragment",
                selections: [
                  a,
                  {
                    args: null,
                    documentName: "WorkKnowledgeGeminiXMLRenderer_components",
                    fragmentName: "WorkKnowledgeEmbeddedImage_image",
                    fragmentPropName: "image",
                    kind: "ModuleImport",
                  },
                ],
                type: "WorkKnowledgeEmbeddedImage",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  a,
                  {
                    args: null,
                    documentName: "WorkKnowledgeGeminiXMLRenderer_components",
                    fragmentName: "WorkKnowledgeLiveEmbeddedMedia_media",
                    fragmentPropName: "media",
                    kind: "ModuleImport",
                  },
                ],
                type: "WorkKnowledgeEmbeddedMedia",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "mention",
                    plural: !1,
                    selections: b,
                    storageKey: null,
                  },
                  {
                    args: null,
                    documentName: "WorkKnowledgeGeminiXMLRenderer_components",
                    fragmentName: "WorkKnowledgeEmbeddedMention_mention",
                    fragmentPropName: "mention",
                    kind: "ModuleImport",
                  },
                ],
                type: "WorkKnowledgeEmbeddedMention",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "Video",
                    kind: "LinkedField",
                    name: "video",
                    plural: !1,
                    selections: b,
                    storageKey: null,
                  },
                  {
                    args: null,
                    documentName: "WorkKnowledgeGeminiXMLRenderer_components",
                    fragmentName: "WorkKnowledgeEmbeddedVideo_video",
                    fragmentPropName: "video",
                    kind: "ModuleImport",
                  },
                ],
                type: "WorkKnowledgeEmbeddedVideo",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  a,
                  {
                    args: null,
                    documentName: "WorkKnowledgeGeminiXMLRenderer_components",
                    fragmentName: "WorkKnowledgeEmbeddedUnidashWidget_widget",
                    fragmentPropName: "widget",
                    kind: "ModuleImport",
                  },
                ],
                type: "WorkKnowledgeDataWidget",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "number",
                    storageKey: null,
                  },
                  {
                    args: null,
                    documentName: "WorkKnowledgeGeminiXMLRenderer_components",
                    fragmentName: "WorkKnowledgeTask_task",
                    fragmentPropName: "task",
                    kind: "ModuleImport",
                  },
                ],
                type: "WorkKnowledgeTask",
                abstractKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: "KnowledgeDocument",
        abstractKey: "__isKnowledgeDocument",
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "WorkKnowledgePreloadedImage_data.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "WorkKnowledgePreloadedImage_data",
      selections: [
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
          kind: "ScalarField",
          name: "height",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "width",
          storageKey: null,
        },
      ],
      type: "WorkKnowledgePhotoData",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "WorkKnowledgePreloadedMedia_data.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "WorkKnowledgePreloadedMedia_data",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "embedded_media_url",
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
          name: "video_id",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "width",
          storageKey: null,
        },
      ],
      type: "WorkKnowledgeEmbeddedMediaData",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "WorkKnowledgeResourceFileLinkQueryWrapperQuery_facebookRelayOperation",
  [],
  function (a, b, c, d, e, f) {
    e.exports = "4787362761392816";
  },
  null
);
__d(
  "WorkKnowledgeResourceFileLinkQueryWrapperQuery.graphql",
  ["WorkKnowledgeResourceFileLinkQueryWrapperQuery_facebookRelayOperation"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "file_id" }],
        c = [{ kind: "Variable", name: "id", variableName: "file_id" }],
        d = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "preview_pdf_url",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "WorkKnowledgeResourceFileLinkQueryWrapperQuery",
          selections: [
            {
              alias: null,
              args: c,
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
                      name: "WorkKnowledgeResourceFileLink_file",
                    },
                  ],
                  type: "WorkKnowledgeCommonFiles",
                  abstractKey: "__isWorkKnowledgeCommonFiles",
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
          name: "WorkKnowledgeResourceFileLinkQueryWrapperQuery",
          selections: [
            {
              alias: null,
              args: c,
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
                d,
                {
                  kind: "InlineFragment",
                  selections: [
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
                      name: "knowledge_file_size",
                      storageKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "WorkKnowledgeFileRevision",
                          kind: "LinkedField",
                          name: "current_revision",
                          plural: !1,
                          selections: [e, d],
                          storageKey: null,
                        },
                      ],
                      type: "WorkKnowledgeFile",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "AppContent",
                          kind: "LinkedField",
                          name: "app_content",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "content_uri",
                              storageKey: null,
                            },
                            e,
                            d,
                          ],
                          storageKey: null,
                        },
                      ],
                      type: "WorkKnowledgeAppContent",
                      abstractKey: null,
                    },
                  ],
                  type: "WorkKnowledgeCommonFiles",
                  abstractKey: "__isWorkKnowledgeCommonFiles",
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: b(
            "WorkKnowledgeResourceFileLinkQueryWrapperQuery_facebookRelayOperation"
          ),
          metadata: {},
          name: "WorkKnowledgeResourceFileLinkQueryWrapperQuery",
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
  "WorkKnowledgeResourceFileLink_file.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "preview_pdf_url",
        storageKey: null,
      };
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "WorkKnowledgeResourceFileLink_file",
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
            name: "uri",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "knowledge_file_size",
            storageKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "WorkKnowledgeFileRevision",
                kind: "LinkedField",
                name: "current_revision",
                plural: !1,
                selections: [a],
                storageKey: null,
              },
            ],
            type: "WorkKnowledgeFile",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "AppContent",
                kind: "LinkedField",
                name: "app_content",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "content_uri",
                    storageKey: null,
                  },
                  a,
                ],
                storageKey: null,
              },
            ],
            type: "WorkKnowledgeAppContent",
            abstractKey: null,
          },
        ],
        type: "WorkKnowledgeCommonFiles",
        abstractKey: "__isWorkKnowledgeCommonFiles",
      };
    })();
    e.exports = a;
  },
  null
);
__d(
  "WorkKnowledgeTopicIconUnitContainer.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "WorkKnowledgeTopicIconUnitContainer",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "WorkKnowledgeVisualSetting",
          kind: "LinkedField",
          name: "visual_setting",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "icon",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "hexcolor",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "XFBWorkKnowledgeBaseCollection",
      abstractKey: "__isXFBWorkKnowledgeBaseCollection",
    };
    e.exports = a;
  },
  null
);
__d(
  "WorkKnowledgeGeminiEmbeddedMediaQuery_facebookRelayOperation",
  [],
  function (a, b, c, d, e, f) {
    e.exports = "7094824520588385";
  },
  null
);
__d(
  "WorkKnowledgeGeminiEmbeddedMediaQuery.graphql",
  ["WorkKnowledgeGeminiEmbeddedMediaQuery_facebookRelayOperation"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "url" }],
        c = [{ kind: "Variable", name: "url", variableName: "url" }];
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "WorkKnowledgeGeminiEmbeddedMediaQuery",
          selections: [
            {
              alias: null,
              args: c,
              concreteType: "WorkKnowledgeEmbeddedMediaData",
              kind: "LinkedField",
              name: "work_knowledge_embedded_media_data",
              plural: !1,
              selections: [
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "WorkKnowledgePreloadedMedia_data",
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
          name: "WorkKnowledgeGeminiEmbeddedMediaQuery",
          selections: [
            {
              alias: null,
              args: c,
              concreteType: "WorkKnowledgeEmbeddedMediaData",
              kind: "LinkedField",
              name: "work_knowledge_embedded_media_data",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "embedded_media_url",
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
                  name: "video_id",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "width",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: b("WorkKnowledgeGeminiEmbeddedMediaQuery_facebookRelayOperation"),
          metadata: {},
          name: "WorkKnowledgeGeminiEmbeddedMediaQuery",
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
  "WorkKnowledgeGeminiMentionQuery_facebookRelayOperation",
  [],
  function (a, b, c, d, e, f) {
    e.exports = "5083761951718322";
  },
  null
);
__d(
  "WorkKnowledgeGeminiMentionQuery.graphql",
  ["WorkKnowledgeGeminiMentionQuery_facebookRelayOperation"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "id" }],
        c = [{ kind: "Variable", name: "id", variableName: "id" }],
        d = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_anonymous",
          storageKey: null,
        },
        e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "WorkKnowledgeGeminiMentionQuery",
          selections: [
            {
              alias: null,
              args: c,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "WorkKnowledgePreloadedMention_data",
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: c,
              concreteType: "User",
              kind: "LinkedField",
              name: "user",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "ScimCompanyUser",
                  kind: "LinkedField",
                  name: "scim_company_user",
                  plural: !1,
                  selections: [d],
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
          name: "WorkKnowledgeGeminiMentionQuery",
          selections: [
            {
              alias: null,
              args: c,
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
                e,
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          alias: "profile_url",
                          args: null,
                          kind: "ScalarField",
                          name: "url",
                          storageKey: null,
                        },
                      ],
                      type: "Entity",
                      abstractKey: "__isEntity",
                    },
                  ],
                  type: "Actor",
                  abstractKey: "__isActor",
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: c,
              concreteType: "User",
              kind: "LinkedField",
              name: "user",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "ScimCompanyUser",
                  kind: "LinkedField",
                  name: "scim_company_user",
                  plural: !1,
                  selections: [d, e],
                  storageKey: null,
                },
                e,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: b("WorkKnowledgeGeminiMentionQuery_facebookRelayOperation"),
          metadata: {},
          name: "WorkKnowledgeGeminiMentionQuery",
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
  "WorkKnowledgeGeminiPaletteImageQuery_facebookRelayOperation",
  [],
  function (a, b, c, d, e, f) {
    e.exports = "5050427201685261";
  },
  null
);
__d(
  "WorkKnowledgeGeminiPaletteImageQuery.graphql",
  ["WorkKnowledgeGeminiPaletteImageQuery_facebookRelayOperation"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = { defaultValue: null, kind: "LocalArgument", name: "image_id" },
        c = { defaultValue: null, kind: "LocalArgument", name: "provider" },
        d = [
          { kind: "Variable", name: "image_id", variableName: "image_id" },
          { kind: "Variable", name: "provider", variableName: "provider" },
        ];
      return {
        fragment: {
          argumentDefinitions: [a, c],
          kind: "Fragment",
          metadata: null,
          name: "WorkKnowledgeGeminiPaletteImageQuery",
          selections: [
            {
              alias: null,
              args: d,
              concreteType: "WorkKnowledgePhotoData",
              kind: "LinkedField",
              name: "work_knowledge_image_data",
              plural: !1,
              selections: [
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "WorkKnowledgePreloadedImage_data",
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
          argumentDefinitions: [c, a],
          kind: "Operation",
          name: "WorkKnowledgeGeminiPaletteImageQuery",
          selections: [
            {
              alias: null,
              args: d,
              concreteType: "WorkKnowledgePhotoData",
              kind: "LinkedField",
              name: "work_knowledge_image_data",
              plural: !1,
              selections: [
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
                  kind: "ScalarField",
                  name: "height",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "width",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: b("WorkKnowledgeGeminiPaletteImageQuery_facebookRelayOperation"),
          metadata: {},
          name: "WorkKnowledgeGeminiPaletteImageQuery",
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
  "WorkKnowledgeGeminiVideoQuery_facebookRelayOperation",
  [],
  function (a, b, c, d, e, f) {
    e.exports = "6075590902551566";
  },
  null
);
__d(
  "WorkKnowledgeGeminiVideoQuery.graphql",
  [
    "VideoPlayerRelay_video$normalization.graphql",
    "WorkKnowledgeGeminiVideoQuery_facebookRelayOperation",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "id" }],
        c = [{ kind: "Variable", name: "id", variableName: "id" }],
        d = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        f = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "captions_url",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "WorkKnowledgeGeminiVideoQuery",
          selections: [
            {
              alias: null,
              args: c,
              concreteType: "Video",
              kind: "LinkedField",
              name: "video",
              plural: !1,
              selections: [
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "WorkKnowledgePreloadedVideo_video",
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
          name: "WorkKnowledgeGeminiVideoQuery",
          selections: [
            {
              alias: null,
              args: c,
              concreteType: "Video",
              kind: "LinkedField",
              name: "video",
              plural: !1,
              selections: [
                {
                  args: null,
                  fragment: b("VideoPlayerRelay_video$normalization.graphql"),
                  kind: "FragmentSpread",
                },
                d,
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
                  selections: [
                    e,
                    d,
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
                  ],
                  storageKey: null,
                },
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
                {
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
                    d,
                  ],
                  storageKey: null,
                },
                {
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
                      fragmentName:
                        "VideoPlayerSettingsMenuLatencyPaneToggle_video",
                      fragmentPropName: "video",
                      kind: "ModuleImport",
                    },
                    d,
                  ],
                  storageKey: null,
                },
                f,
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
                    f,
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
                    d,
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
                    d,
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
                    d,
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
                    d,
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "video_player_scrubber_base_content_renderer",
                  plural: !1,
                  selections: [
                    e,
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
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "video_player_scrubber_preview_renderer",
                  plural: !1,
                  selections: [
                    e,
                    {
                      kind: "InlineFragment",
                      selections: [
                        {
                          args: null,
                          documentName: "VideoPlayerScrubberPreview_video",
                          fragmentName:
                            "VideoPlayerScrubberChapterPreview_video",
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
                          fragmentName:
                            "VideoPlayerScrubberDefaultPreview_video",
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
                    d,
                  ],
                  storageKey: null,
                },
                {
                  alias: "thumbnailImage",
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
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: b("WorkKnowledgeGeminiVideoQuery_facebookRelayOperation"),
          metadata: {},
          name: "WorkKnowledgeGeminiVideoQuery",
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
  "WorkKnowledgePreloadedMention_data.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "WorkKnowledgePreloadedMention_data",
      selections: [
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
          name: "ProfileCometProfileLink_actor",
        },
      ],
      type: "Actor",
      abstractKey: "__isActor",
    };
    e.exports = a;
  },
  null
);
__d(
  "WorkKnowledgePreloadedVideo_video.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "WorkKnowledgePreloadedVideo_video",
      selections: [
        { args: null, kind: "FragmentSpread", name: "VideoPlayerRelay_video" },
        {
          args: null,
          kind: "FragmentSpread",
          name: "VideoPlayerDefaultControls_video",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "VideoPlayerCometFeedThumbnail_video",
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
  "WorkKnowledgeHomeCategoryCardGuideLink_collection.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "WorkKnowledgeHomeCategoryCardGuideLink_collection",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "collection_title",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "status",
          storageKey: null,
        },
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null,
          },
          action: "THROW",
          path: "id",
        },
        {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "id_or_alias",
              storageKey: null,
            },
          ],
          type: "WorkKnowledgeCollection",
          abstractKey: null,
        },
      ],
      type: "XFBWorkKnowledgeBaseCollection",
      abstractKey: "__isXFBWorkKnowledgeBaseCollection",
    };
    e.exports = a;
  },
  null
);
__d(
  "WorkKnowledgesStackedChannelQuery_facebookRelayOperation",
  [],
  function (a, b, c, d, e, f) {
    e.exports = "6354952621262815";
  },
  null
);
__d(
  "WorkKnowledgesStackedChannelQuery$Parameters",
  ["WorkKnowledgesStackedChannelQuery_facebookRelayOperation"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      kind: "PreloadableConcreteRequest",
      params: {
        id: b("WorkKnowledgesStackedChannelQuery_facebookRelayOperation"),
        metadata: {},
        name: "WorkKnowledgesStackedChannelQuery",
        operationKind: "query",
        text: null,
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "KnowledgeNotePostAttachmentContent_components.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "KnowledgeNotePostAttachmentContent_components",
      selections: [
        {
          args: null,
          kind: "FragmentSpread",
          name: "WorkKnowledgeGeminiXMLRenderer_components",
        },
      ],
      type: "KnowledgeDocument",
      abstractKey: "__isKnowledgeDocument",
    };
    e.exports = a;
  },
  null
);
__d(
  "KnowledgeNotePostAttachmentQuery.graphql",
  ["relay-runtime"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "id" }],
        b = [{ kind: "Variable", name: "id", variableName: "id" }],
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        d = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: "Fragment",
          metadata: null,
          name: "KnowledgeNotePostAttachmentQuery",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "KnowledgeNote",
              kind: "LinkedField",
              name: "fetch__KnowledgeNote",
              plural: !1,
              selections: [
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "KnowledgeNotePostAttachmentContent_components",
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
          name: "KnowledgeNotePostAttachmentQuery",
          selections: [
            {
              alias: null,
              args: b,
              concreteType: "KnowledgeNote",
              kind: "LinkedField",
              name: "fetch__KnowledgeNote",
              plural: !1,
              selections: [
                c,
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "live_components",
                      plural: !0,
                      selections: [
                        d,
                        {
                          kind: "InlineFragment",
                          selections: [
                            c,
                            {
                              args: null,
                              documentName:
                                "WorkKnowledgeGeminiXMLRenderer_components",
                              fragmentName: "WorkKnowledgeEmbeddedImage_image",
                              fragmentPropName: "image",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "WorkKnowledgeEmbeddedImage",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            c,
                            {
                              args: null,
                              documentName:
                                "WorkKnowledgeGeminiXMLRenderer_components",
                              fragmentName:
                                "WorkKnowledgeLiveEmbeddedMedia_media",
                              fragmentPropName: "media",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "WorkKnowledgeEmbeddedMedia",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: null,
                              kind: "LinkedField",
                              name: "mention",
                              plural: !1,
                              selections: [d, c],
                              storageKey: null,
                            },
                            {
                              args: null,
                              documentName:
                                "WorkKnowledgeGeminiXMLRenderer_components",
                              fragmentName:
                                "WorkKnowledgeEmbeddedMention_mention",
                              fragmentPropName: "mention",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "WorkKnowledgeEmbeddedMention",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "Video",
                              kind: "LinkedField",
                              name: "video",
                              plural: !1,
                              selections: [c],
                              storageKey: null,
                            },
                            {
                              args: null,
                              documentName:
                                "WorkKnowledgeGeminiXMLRenderer_components",
                              fragmentName: "WorkKnowledgeEmbeddedVideo_video",
                              fragmentPropName: "video",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "WorkKnowledgeEmbeddedVideo",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            c,
                            {
                              args: null,
                              documentName:
                                "WorkKnowledgeGeminiXMLRenderer_components",
                              fragmentName:
                                "WorkKnowledgeEmbeddedUnidashWidget_widget",
                              fragmentPropName: "widget",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "WorkKnowledgeDataWidget",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "number",
                              storageKey: null,
                            },
                            {
                              args: null,
                              documentName:
                                "WorkKnowledgeGeminiXMLRenderer_components",
                              fragmentName: "WorkKnowledgeTask_task",
                              fragmentPropName: "task",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "WorkKnowledgeTask",
                          abstractKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  type: "KnowledgeDocument",
                  abstractKey: "__isKnowledgeDocument",
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "6560578807388122",
          metadata: {},
          name: "KnowledgeNotePostAttachmentQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    b("relay-runtime").PreloadableQueryRegistry.set(a.params.id, a);
    e.exports = a;
  },
  null
);
__d(
  "BaseHScrollConstants",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = 1600;
    b = 10;
    f.MAX_CONTAINER_WIDTH = a;
    f.WIGGLE_ROOM = b;
  },
  66
);
__d(
  "smoothScrollTo",
  ["ExecutionEnvironment", "UserAgent"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = c("UserAgent").isBrowser("Firefox");
    b =
      c("ExecutionEnvironment").canUseDOM &&
      window.matchMedia("(prefers-reduced-motion: reduce)");
    var i = b && b.matches,
      j =
        c("ExecutionEnvironment").canUseDOM &&
        document.documentElement != null &&
        "scrollBehavior" in document.documentElement.style,
      k = new WeakMap();
    function a(a, b) {
      var c = b.left;
      c = c === void 0 ? 0 : c;
      b = b.top;
      b = b === void 0 ? 0 : b;
      h &&
        !k.get(a) &&
        c !== 0 &&
        ((a.scrollLeft += c / Math.abs(c)), k.set(a, !0));
      j
        ? a.scrollTo({ behavior: i ? "auto" : "smooth", left: c, top: b })
        : a.scrollTo(c, b);
    }
    g["default"] = a;
  },
  98
);
__d(
  "useContainerBreakpoints",
  ["$InternalEnum", "gkx", "react", "useResizeObserver"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    f = d("react");
    var h = f.useCallback,
      i = f.useState,
      j = b("$InternalEnum")({
        BiggerContainerSmallerChild: 0,
        BiggerContainerBiggerChild: 1,
      });
    function k(a, b) {
      var c = a[0],
        d = c.maxContainerWidth;
      c = c.width;
      a = a.slice(1);
      if (d === Infinity || a.length === 0) return c;
      switch (b) {
        case j.BiggerContainerSmallerChild:
          var e = "calc((" + d + "px - 100%) * 9999)",
            f = k(a, b);
          typeof f === "number" &&
            (f = "min(" + f + "px, (100% - " + (d + 0.1) + "px) * 9999)");
          return "max(" + f + ", min(" + c + ", " + e + "))";
        case j.BiggerContainerBiggerChild:
          f = "calc((100% - " + d + "px) * 9999)";
          e = k(a, b);
          return "min(" + e + ", max(" + c + ", " + f + "))";
      }
    }
    function a(a, b) {
      b = i(null);
      var d = b[0],
        e = b[1];
      b = h(
        function (b) {
          b = b.width;
          var c;
          for (
            var d = a,
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
            if (b > h.maxContainerWidth) continue;
            c = h.width;
            break;
          }
          e(c);
        },
        [a]
      );
      b = c("useResizeObserver")(b);
      return [b, d];
    }
    function e(a, b) {
      a = k(a, b);
      return [void 0, a];
    }
    d = c("gkx")("1549702") ? e : a;
    g.BreakpointRelationship = j;
    g.useContainerBreakpoints = d;
  },
  98
);
__d(
  "useEventHandler",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useLayoutEffect,
      j = b.useRef;
    function a(a) {
      var b = j(a);
      i(
        function () {
          b.current = a;
        },
        [a]
      );
      return h(function () {
        b.current.apply(b, arguments);
      }, []);
    }
    g["default"] = a;
  },
  98
);
__d(
  "BaseHScroll.react",
  [
    "BaseHScrollConstants",
    "BaseScrollableArea.react",
    "BaseView.react",
    "FocusInertRegion.react",
    "HiddenSubtreePassiveContext",
    "Locale",
    "UserAgent",
    "emptyFunction",
    "react",
    "smoothScrollTo",
    "stylex",
    "useBaseHScrollFakeCards",
    "useContainerBreakpoints",
    "useEventHandler",
    "useMergeRefs",
    "useUnsafeRef_DEPRECATED",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    e = d("react");
    var i = e.useCallback,
      j = e.useContext,
      k = e.useLayoutEffect,
      l = e.useMemo,
      m = e.useRef,
      n = e.useState,
      o = d("Locale").isRTL();
    e =
      c("UserAgent").isBrowser("Safari < 14") ||
      c("UserAgent").isBrowser("Mobile Safari < 14");
    var p = c("UserAgent").isBrowser("Chrome"),
      q = c("UserAgent").isBrowser("IE") || c("UserAgent").isBrowser("Edge"),
      aa = o && e,
      r = h.createContext(null);
    function a(a) {
      var b = a.accessibilityLabel,
        e = a.buttonWrapperStyle,
        f = a.cardWidth,
        g = a.containerXStyle;
      g = g === void 0 ? t.containerPaddingDefault : g;
      var p = a.outerContainerXStyle,
        u = a.scrollViewXStyle,
        ba = a.scrollContainerXStyle,
        v = a.disableScrolling;
      v = v === void 0 ? !1 : v;
      var w = a.gap,
        x = w === void 0 ? 0 : w;
      w = a.hideArrows;
      w = w === void 0 ? !1 : w;
      var y = a.initialScrollToIndex,
        z = a.initialScrollSmoothing,
        A = z === void 0 ? !1 : z;
      z = a.isButtonInward;
      z = z === void 0 ? !1 : z;
      var B = a.maxContentWindowWidth,
        ca = a.nextButton,
        C = a.peekWidth,
        da = a.prevButton,
        D = a.onPressNext,
        ea = D === void 0 ? c("emptyFunction") : D;
      D = a.onPressPrev;
      var fa = D === void 0 ? c("emptyFunction") : D;
      D = a.peek;
      var E = D === void 0 ? !1 : D;
      D = a.peekPaddingStart;
      var F = a.peekPaddingEnd,
        G = a.testid,
        H = babelHelpers.objectWithoutPropertiesLoose(a, [
          "accessibilityLabel",
          "buttonWrapperStyle",
          "cardWidth",
          "containerXStyle",
          "outerContainerXStyle",
          "scrollViewXStyle",
          "scrollContainerXStyle",
          "disableScrolling",
          "gap",
          "hideArrows",
          "initialScrollToIndex",
          "initialScrollSmoothing",
          "isButtonInward",
          "maxContentWindowWidth",
          "nextButton",
          "peekWidth",
          "prevButton",
          "onPressNext",
          "onPressPrev",
          "peek",
          "peekPaddingStart",
          "peekPaddingEnd",
          "testid",
        ]);
      G = B != null && E && F != null && D != null;
      var I = f.type === "responsive" ? f.minWidth : f.width;
      a = l(
        function () {
          var a = [];
          if (f.type === "fixed")
            a.push({ maxContainerWidth: Infinity, width: I + "px" });
          else if (E && B != null) {
            var b = C * 2,
              c = 2 * I + x + b,
              e = 1;
            while (c < B + b) {
              var g = e <= 1 || x === 0 ? 0 : (e - 1) * x;
              g = g + b;
              g = g === 0 ? "100%" : "(100% - " + g + "px)";
              a.push({
                maxContainerWidth: c,
                width: "calc(" + g + " / " + e + ")",
              });
              c += x + I;
              e++;
            }
            g = e <= 1 || x === 0 ? 0 : (e - 1) * x;
            c = g + b;
            c = c === 0 ? "100%" : "(100% - " + c + "px)";
            a.push({
              maxContainerWidth: B + b,
              width: "calc(" + c + " / " + e + ")",
            });
            a.push({ maxContainerWidth: Infinity, width: (B - g) / e });
          } else {
            b = E ? C * 2 : 0;
            c = 2 * I + x + b;
            g = 1;
            while (c < d("BaseHScrollConstants").MAX_CONTAINER_WIDTH) {
              e = g <= 1 || x === 0 ? 0 : (g - 1) * x;
              e = e + b;
              e = e === 0 ? "100%" : "(100% - " + e + "px)";
              a.push({
                maxContainerWidth: c,
                width: "calc(" + e + " / " + g + ")",
              });
              c += x + I;
              g++;
            }
            e = g <= 1 || x === 0 ? 0 : (g - 1) * x;
            c = e + b;
            e = c === 0 ? "100%" : "(100% - " + c + "px)";
            a.push({
              maxContainerWidth: Infinity,
              width: "calc(" + e + " / " + g + ")",
            });
          }
          return a;
        },
        [f.type, E, B, I, C, x]
      );
      a = d("useContainerBreakpoints").useContainerBreakpoints(
        a,
        d("useContainerBreakpoints").BreakpointRelationship
          .BiggerContainerSmallerChild
      );
      var J = a[0],
        K = a[1];
      a = l(
        function () {
          if (E && B != null)
            return [
              { maxContainerWidth: B + C * 2, width: C },
              {
                maxContainerWidth: Infinity,
                width: "calc((100% - " + B + "px) / 2)",
              },
            ];
          return E
            ? [{ maxContainerWidth: Infinity, width: C }]
            : [{ maxContainerWidth: Infinity, width: 0 }];
        },
        [B, E, C]
      );
      a = d("useContainerBreakpoints").useContainerBreakpoints(
        a,
        d("useContainerBreakpoints").BreakpointRelationship
          .BiggerContainerBiggerChild
      );
      var L = a[0];
      a = a[1];
      a =
        B != null && typeof a === "string" && a.includes("min(")
          ? "max(" + C + "px, (100% - " + B + "px) / 2)"
          : a;
      var M = c("useUnsafeRef_DEPRECATED")(null),
        N = h.Children.count(H.children),
        O = n(H.isCircular ? !1 : !o),
        P = O[0],
        Q = O[1];
      O = n(H.isCircular ? !1 : o);
      var R = O[0],
        S = O[1],
        T = m(!1);
      k(function () {
        var a;
        a = (a = M.current) == null ? void 0 : a.getDOMNode();
        if (a == null) return;
        if (o) {
          var b = a.clientWidth,
            c = a.scrollLeft;
          a = a.scrollWidth;
          c > 50 && c > a - b - 50 && (T.current = !0);
        }
      }, []);
      var U = c("useEventHandler")(function () {
        var a;
        a = (a = M.current) == null ? void 0 : a.getDOMNode();
        if (a == null) return;
        var b = a.getBoundingClientRect();
        b = b.width;
        var c = a.scrollLeft,
          d = a.scrollWidth;
        if (!H.isCircular)
          o && !q
            ? T.current
              ? (Q(c > d - b - x), S(c < x))
              : (Q(c > -x), S(c < -d + b + x))
            : (Q(c < x), S(c > d - b - x));
        else {
          c = Z.current(a);
          d = c.childCards;
          if (d == null || d[0] == null) return;
          ha({ isRTL: o, isRTLScrollFromMaxScroll: T, scrollRef: M });
        }
      });
      O = c("useBaseHScrollFakeCards")({
        children: H.isCircular ? H.children : [],
        fakeCardXStyle: H.isCircular ? H.fakeCardXStyle : null,
        gap: x,
        isCircular: (O = H.isCircular) != null ? O : !1,
        minWidth: I,
        onResize: U,
        peek: E,
        peekWidth: C,
      });
      var V = O[0],
        ga = O[1],
        W = O[2],
        ha = O[3];
      O = c("useMergeRefs")(J, L, W);
      var ia = j(c("HiddenSubtreePassiveContext"));
      k(
        function () {
          var a = ia.subscribeToChanges(function (a) {
            a.hidden || U();
          });
          return function () {
            return a.remove();
          };
        },
        [ia, U]
      );
      k(
        function () {
          U();
        },
        [N, U]
      );
      var X = m(x);
      k(
        function () {
          X.current = x;
        },
        [x]
      );
      var Y = i(
          function (a) {
            var b = a.getBoundingClientRect(),
              c =
                B != null
                  ? Math.min(b.width - (E ? 2 * C : 0), B)
                  : E
                  ? b.width - 2 * C
                  : b.width,
              d = (b.width - c) / 2,
              e = b.left + d;
            b = b.right - d;
            d = Array.from(a.children[0].children).filter(function (a) {
              return a.tagName === "DIV";
            });
            return {
              childCards: d,
              containerLeft: e,
              containerRight: b,
              containerWidth: c,
            };
          },
          [B, E, C]
        ),
        Z = m(Y);
      k(
        function () {
          Z.current = Y;
        },
        [Y]
      );
      var $ = ((J = V) != null ? J : []).length;
      k(
        function () {
          var a;
          if (y == null && $ === 0) return;
          var b = (a = M.current) == null ? void 0 : a.getDOMNode();
          if (b == null) return;
          a = Z.current(b);
          a = a.childCards;
          var d = 0;
          if (y != null)
            for (var e = 0; e < Math.min(y, a.length); e++)
              d += a[e].getBoundingClientRect().width + X.current;
          if ($ !== 0) {
            e = y == null ? 0 : y;
            for (var f = e; f < Math.min(e + $, a.length); f++)
              d += a[f].getBoundingClientRect().width + X.current;
          }
          f = function (a) {
            A ? c("smoothScrollTo")(b, { left: a }) : b.scrollTo(a, 0);
          };
          if (o && !q)
            if (T.current) {
              a = b.scrollWidth - b.getBoundingClientRect().width;
              f(a - d);
            } else f(-d);
          else f(d);
        },
        [y, A, $]
      );
      L = function () {
        var a;
        a = (a = M.current) == null ? void 0 : a.getDOMNode();
        if (a == null) return;
        var b = Y(a),
          e = b.childCards,
          f = b.containerLeft;
        b = b.containerRight;
        var g;
        for (
          var h = o ? 0 : e.length - 1;
          o ? h < e.length : h >= 0;
          o ? h++ : h--
        ) {
          var i = e[h].getBoundingClientRect();
          if (i.left <= f - d("BaseHScrollConstants").WIGGLE_ROOM) {
            g = i;
            break;
          }
        }
        if (g == null) return;
        i = g.right - b;
        i !== 0 &&
          (o && q
            ? c("smoothScrollTo")(a, { left: a.scrollLeft - i })
            : c("smoothScrollTo")(a, { left: a.scrollLeft + i }),
          fa());
      };
      W = function () {
        var a;
        a = (a = M.current) == null ? void 0 : a.getDOMNode();
        if (a == null) return;
        var b = Y(a),
          e = b.childCards,
          f = b.containerLeft;
        b = b.containerRight;
        var g;
        for (
          var h = o ? e.length - 1 : 0;
          o ? h >= 0 : h < e.length;
          o ? h-- : h++
        ) {
          var i = e[h].getBoundingClientRect();
          if (i.right >= b + d("BaseHScrollConstants").WIGGLE_ROOM) {
            g = i;
            break;
          }
        }
        if (g == null) return;
        i = g.left - f;
        i !== 0 &&
          (o && q
            ? c("smoothScrollTo")(a, { left: a.scrollLeft - i })
            : c("smoothScrollTo")(a, { left: a.scrollLeft + i }),
          ea());
      };
      J = l(
        function () {
          return K != null ? { gap: x, width: K } : null;
        },
        [K, x]
      );
      s(M, N);
      return h.jsxs(c("BaseView.react"), {
        ref: O,
        testid: void 0,
        xstyle: p,
        children: [
          h.jsx("div", {
            "aria-hidden": w || !!P,
            className: c("stylex")(t.buttonWrapper, (w || !!P) && t.hidden, e),
            style: o
              ? {
                  right: a != null && !G ? a : E ? C : 0,
                  transform:
                    "translate(calc(" +
                    (!E && z ? 0 : 50) +
                    "% + " +
                    (E ? x / 2 : 0) +
                    "px), -50%)",
                }
              : {
                  left: a != null && !G ? a : E ? C : 0,
                  transform:
                    "translate(calc(-" +
                    (!E && z ? 0 : 50) +
                    "% - " +
                    (E ? x / 2 : 0) +
                    "px), -50%)",
                },
            suppressHydrationWarning: !H.isCircular,
            children: da(o ? W : L, !!P),
          }),
          h.jsx(c("BaseView.react"), {
            "aria-label": b,
            role: b != null ? "region" : void 0,
            xstyle: [t.scrollContainer, g, ba],
            children: h.jsxs(c("BaseScrollableArea.react"), {
              hideScrollbar: !0,
              horizontal: !0,
              onScroll: U,
              ref: M,
              style: { scrollPadding: a },
              vertical: !1,
              xstyle: [
                t.scrollView,
                !aa && t.scrollViewSnap,
                v && t.scrollViewNoScroll,
                u,
              ],
              children: [
                E &&
                  B != null &&
                  D == null &&
                  h.jsx("span", {
                    style: {
                      flexShrink: 0,
                      minWidth: C,
                      width: "calc((100% - " + B + "px) / 2)",
                    },
                  }),
                E &&
                  (D != null || B == null) &&
                  h.jsx("span", {
                    style: { minWidth: (N = D) != null ? N : C },
                  }),
                h.jsxs(r.Provider, { value: J, children: [V, H.children, ga] }),
                E &&
                  B != null &&
                  F == null &&
                  h.jsx("span", {
                    style: {
                      flexShrink: 0,
                      minWidth: C,
                      width: "calc((100% - " + B + "px) / 2)",
                    },
                  }),
                E &&
                  (F != null || B == null) &&
                  h.jsx("span", {
                    style: { minWidth: (O = F) != null ? O : C },
                  }),
              ],
            }),
          }),
          h.jsx("div", {
            "aria-hidden": w || !!R,
            className: c("stylex")(t.buttonWrapper, (w || !!R) && t.hidden, e),
            style: o
              ? {
                  left: a != null && !G ? a : E ? C : 0,
                  transform:
                    "translate(calc(-" +
                    (!E && z ? 0 : 50) +
                    "% - " +
                    (E ? x / 2 : 0) +
                    "px), -50%)",
                }
              : {
                  right: a != null && !G ? a : E ? C : 0,
                  transform:
                    "translate(calc(" +
                    (!E && z ? 0 : 50) +
                    "% + " +
                    (E ? x / 2 : 0) +
                    "px), -50%)",
                },
            suppressHydrationWarning: !H.isCircular,
            children: ca(o ? L : W, !!R),
          }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function b(a) {
      var b = a["aria-hidden"];
      b = b === void 0 ? !1 : b;
      var d = a.children,
        e = a.expanding;
      e = e === void 0 ? !1 : e;
      var f = a.role,
        g = a.type;
      g = g === void 0 ? "default" : g;
      a = a.xstyle;
      var i = j(r);
      if (i == null) return null;
      var k = i.gap;
      i = i.width;
      g = {
        flexBasis:
          g === "custom"
            ? void 0
            : g === "doubleWidth"
            ? "calc((" + i + ") * 2 + " + k + "px)"
            : i,
      };
      return h.jsx(c("FocusInertRegion.react"), {
        disabled: !b,
        children: h.jsx("div", {
          "aria-hidden": b,
          className: c("stylex")(
            t.card,
            o && t.cardRTL,
            u[k],
            e && t.cardExpanding,
            a
          ),
          role: f,
          style: g,
          children: d,
        }),
      });
    }
    b.displayName = b.name + " [from " + f.id + "]";
    var s = function (a, b) {};
    p &&
      (s = function (a, b) {
        var d = c("useUnsafeRef_DEPRECATED")(null);
        k(
          function () {
            var b,
              c = d.current;
            b = (b = a.current) == null ? void 0 : b.getDOMNode();
            c != null && b != null && (b.scrollLeft = c);
          },
          [b, a]
        );
        b = (b = a.current) == null ? void 0 : b.getDOMNode();
        b != null && (d.current = b.scrollLeft);
      });
    var t = {
        buttonWrapper: {
          opacity: "x1hc1fzr",
          position: "x10l6tqk",
          top: "xwa60dl",
          transitionDuration: "x1d8287x",
          transitionProperty: "x19991ni",
          transitionTimingFunction: "xwji4o3",
          zIndex: "x1vjfegm",
          $$css: !0,
        },
        card: {
          flexGrow: "x1c4vz4f",
          flexShrink: "x2lah0s",
          minWidth: "xeuugli",
          scrollSnapAlign: "x1bhewko",
          $$css: !0,
        },
        cardExpanding: { display: "x78zum5", $$css: !0 },
        cardRTL: { scrollSnapAlign: "x83psoy", $$css: !0 },
        containerPaddingDefault: {
          paddingBottom: "xwib8y2",
          paddingTop: "x1y1aw1k",
          $$css: !0,
        },
        hidden: { opacity: "xg01cxk", pointerEvents: "x47corl", $$css: !0 },
        scrollContainer: {
          marginBottom: "x1wsgfga",
          marginTop: "x9otpla",
          $$css: !0,
        },
        scrollView: {
          boxSizing: "x9f619",
          marginBottom: "xat24cr",
          paddingBottom: "xwib8y2",
          paddingTop: "x1y1aw1k",
          scrollbarWidth: "x1rohswg",
          $$css: !0,
        },
        scrollViewNoScroll: {
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        scrollViewSnap: { scrollSnapType: "xhfbhpw", $$css: !0 },
      },
      u = {
        0: { marginEnd: "x11i5rnm", $$css: !0 },
        4: {
          marginEnd: "xw3qccf",
          ":last-of-type_marginEnd": "xnqqybz",
          $$css: !0,
        },
        8: {
          marginEnd: "x1emribx",
          ":last-of-type_marginEnd": "xnqqybz",
          $$css: !0,
        },
        12: {
          marginEnd: "xq8finb",
          ":last-of-type_marginEnd": "xnqqybz",
          $$css: !0,
        },
        16: {
          marginEnd: "xktsk01",
          ":last-of-type_marginEnd": "xnqqybz",
          $$css: !0,
        },
      };
    g.HScrollContainer = a;
    g.HScrollChild = b;
  },
  98
);
__d(
  "useBaseHScrollFakeCards",
  [
    "BaseHScroll.react",
    "BaseHScrollConstants",
    "UserAgent",
    "react",
    "useEventHandler",
    "useResizeObserver",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useState;
    function a(a) {
      var b = a.children,
        e = a.fakeCardXStyle,
        f = a.gap,
        g = a.isCircular,
        j = a.minWidth,
        k = a.onResize,
        l = a.peek,
        m = a.peekWidth;
      a = i(0);
      var n = a[0],
        o = a[1];
      a = c("useEventHandler")(function (a) {
        a = a.width;
        a = Math.min(a, d("BaseHScrollConstants").MAX_CONTAINER_WIDTH);
        var c = l ? m * 2 : 0;
        if (g) {
          a = Math.floor((a - c + f) / (j + f));
          b.length < a ? o(0) : o(a);
        }
        k();
      });
      a = c("useResizeObserver")(a);
      var p = n !== 0 ? b.slice(-n) : [];
      n = b.slice(0, n);
      p = g
        ? p.map(function (a, b) {
            return h.createElement(
              d("BaseHScroll.react").HScrollChild,
              babelHelpers["extends"]({}, a.props, {
                "aria-hidden": !0,
                key: "head-" + b,
                xstyle: [a.props.xstyle, e],
              })
            );
          })
        : null;
      n = g
        ? n.map(function (a, b) {
            return h.createElement(
              d("BaseHScroll.react").HScrollChild,
              babelHelpers["extends"]({}, a.props, {
                "aria-hidden": !0,
                key: "tail-" + b,
                xstyle: [a.props.xstyle, e],
              })
            );
          })
        : null;
      var q = function (a) {
        var b = a.isRTL,
          e = a.isRTLScrollFromMaxScroll;
        a = a.scrollRef;
        var g = (a = a.current) == null ? void 0 : a.getDOMNode();
        if (g != null) {
          var h =
            c("UserAgent").isBrowser("IE") || c("UserAgent").isBrowser("Edge");
          a = g.offsetWidth;
          var i = g.scrollLeft,
            j = g.scrollWidth,
            k = 0,
            n = b ? -(j - a) : j - a,
            o = function (a) {
              var c = function (a) {
                g.scrollTo == null ? void 0 : g.scrollTo(a, 0);
              };
              if (b && !h)
                if (e.current) {
                  var d = g.scrollWidth - g.getBoundingClientRect().width;
                  c(d - a);
                } else c(-a);
              else c(a);
            },
            p = l ? m * 2 : 0,
            q = d("BaseHScrollConstants").WIGGLE_ROOM / 2;
          if (i >= k - q && i <= k + q) {
            k = j - 2 * a + p - f;
            o(k);
          }
          if (i >= n - q && i <= n + q) {
            j = a - p + f;
            o(j);
          }
        }
      };
      return [p, n, a, q];
    }
    g["default"] = a;
  },
  98
);
__d(
  "BaseBlueModal.react",
  [
    "BaseHeadingContext",
    "BasePortal.react",
    "CometContextualLayerAnchorRoot.react",
    "FocusRegion.react",
    "Layer",
    "LayerTabIsolation",
    "ModalLayer",
    "focusScopeQueries",
    "react",
    "useStable",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useLayoutEffect;
    function a(a) {
      a = a.children;
      var b = c("useStable")(function () {
        return document.createElement("div");
      });
      i(
        function () {
          var a = new (c("Layer"))(
            { addedBehaviors: [c("ModalLayer"), c("LayerTabIsolation")] },
            b
          );
          a.show();
          return function () {
            a.destroy();
          };
        },
        [b]
      );
      return h.jsx(c("BasePortal.react"), {
        target: b,
        children: h.jsx(c("BaseHeadingContext").Provider, {
          value: 1,
          children: h.jsx("div", {
            className: "x78zum5 xdt5ytf xg6iff7 x1n2onr6",
            children: h.jsx(c("CometContextualLayerAnchorRoot.react"), {
              children: h.jsx(d("FocusRegion.react").FocusRegion, {
                autoFocusQuery:
                  d("focusScopeQueries").headerFirstTabbableSecondScopeQuery,
                autoRestoreFocus: !0,
                containFocusQuery: d("focusScopeQueries").tabbableScopeQuery,
                recoverFocusQuery:
                  d("focusScopeQueries").headerFirstTabbableSecondScopeQuery,
                children: a,
              }),
            }),
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
  "ChevronLeftFilled24.svg.react",
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
              h.jsx("path", {
                d: "M14.791 5.207 8 12l6.793 6.793a1 1 0 1 1-1.415 1.414l-7.5-7.5a1 1 0 0 1 0-1.414l7.5-7.5a1 1 0 1 1 1.415 1.414z",
              }),
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
  "ChevronRightFilled24.svg.react",
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
              h.jsx("path", {
                d: "M9.209 5.207 16 12l-6.791 6.793a1 1 0 1 0 1.415 1.414l7.5-7.5a1 1 0 0 0 0-1.414l-7.5-7.5a1 1 0 1 0-1.415 1.414z",
              }),
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
  "CometHScroll.react",
  [
    "fbt",
    "BaseHScroll.react",
    "ChevronLeftFilled24.svg.react",
    "ChevronRightFilled24.svg.react",
    "CometCircleButton.react",
    "CometTrackingNodeProvider.react",
    "Locale",
    "SVGIcon",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = d("react").useCallback,
      k = h._("Articles suivants"),
      l = h._("Articles pr\u00e9c\u00e9dents"),
      m = d("Locale").isRTL(),
      n = 44;
    function a(a) {
      var b = a.nextButtonLabel,
        e = b === void 0 ? k : b;
      b = a.prevButtonLabel;
      var f = b === void 0 ? l : b;
      b = a.reduceArrowSize;
      var g = b === void 0 ? !1 : b;
      b = babelHelpers.objectWithoutPropertiesLoose(a, [
        "nextButtonLabel",
        "prevButtonLabel",
        "reduceArrowSize",
      ]);
      a = j(
        function (a, b) {
          return i.jsx(c("CometTrackingNodeProvider.react"), {
            trackingNode: 419,
            children: i.jsx(c("CometCircleButton.react"), {
              color: "secondary",
              disabled: b,
              icon: d("SVGIcon").svgIcon(
                m
                  ? c("ChevronRightFilled24.svg.react")
                  : c("ChevronLeftFilled24.svg.react")
              ),
              label: f,
              onPress: a,
              size: g ? 40 : 48,
              testid: void 0,
              type: "overlay-raised",
            }),
          });
        },
        [f, g]
      );
      var h = j(
        function (a, b) {
          return i.jsx(c("CometTrackingNodeProvider.react"), {
            trackingNode: 420,
            children: i.jsx(c("CometCircleButton.react"), {
              color: "secondary",
              disabled: b,
              icon: d("SVGIcon").svgIcon(
                m
                  ? c("ChevronLeftFilled24.svg.react")
                  : c("ChevronRightFilled24.svg.react")
              ),
              label: e,
              onPress: a,
              size: g ? 40 : 48,
              testid: void 0,
              type: "overlay-raised",
            }),
          });
        },
        [e, g]
      );
      return i.jsx(
        d("BaseHScroll.react").HScrollContainer,
        babelHelpers["extends"]({}, b, {
          nextButton: h,
          peekWidth: n,
          prevButton: a,
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.Container = a;
    g.Child = d("BaseHScroll.react").HScrollChild;
  },
  98
);
__d(
  "CometObjectFitContainerNext.react",
  ["CometAspectRatioContainer.react", "UserAgent", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        absoluteCenter: {
          left: "x1nrll8i",
          position: "x10l6tqk",
          top: "xwa60dl",
          transform: "x11lhmoz",
          $$css: !0,
        },
        hideOverflow: {
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
      };
    function a(a) {
      var b = a.children,
        d = a.containerAspectRatio,
        e = a.containerChildrenBefore;
      e = e === void 0 ? null : e;
      var f = a.containerChildrenAfter;
      f = f === void 0 ? null : f;
      var g = a.contentAspectRatio,
        j = a.focus;
      j = j === void 0 ? { x: 0.5, y: 0.5 } : j;
      var k = a.mode;
      k = k === void 0 ? "cover" : k;
      a = a.showOverflow;
      a = a === void 0 ? !1 : a;
      var l = c("UserAgent").isBrowser("Firefox < 53");
      l = l ? { minHeight: "100%" } : {};
      if (d > g)
        if (k === "cover")
          return h.jsxs(c("CometAspectRatioContainer.react"), {
            aspectRatio: d,
            xstyle: !a && i.hideOverflow,
            children: [
              e,
              h.jsx(c("CometAspectRatioContainer.react"), {
                aspectRatio: g,
                style: babelHelpers["extends"]({}, l, {
                  left: j.x * 100 + "%",
                  position: "absolute",
                  top: j.y * 100 + "%",
                  transform:
                    "translate(" + j.x * -100 + "%, " + j.y * -100 + "%)",
                }),
                xstyle: !a && i.hideOverflow,
                children: b,
              }),
              f,
            ],
          });
        else
          return h.jsxs(c("CometAspectRatioContainer.react"), {
            aspectRatio: d,
            xstyle: !a && i.hideOverflow,
            children: [
              e,
              h.jsx("div", {
                className: "x1nrll8i x10l6tqk xwa60dl x11lhmoz",
                style: { width: (100 * g) / d + "%" },
                children: h.jsx(c("CometAspectRatioContainer.react"), {
                  aspectRatio: g,
                  xstyle: !a && i.hideOverflow,
                  children: b,
                }),
              }),
              f,
            ],
          });
      else if (k === "cover")
        return h.jsxs(c("CometAspectRatioContainer.react"), {
          aspectRatio: d,
          xstyle: !a && i.hideOverflow,
          children: [
            e,
            h.jsx("div", {
              style: {
                left: j.x * 100 + "%",
                position: "absolute",
                top: j.y * 100 + "%",
                transform:
                  "translate(" + j.x * -100 + "%, " + j.y * -100 + "%)",
                width: (100 * g) / d + "%",
              },
              children: h.jsx(c("CometAspectRatioContainer.react"), {
                aspectRatio: g,
                xstyle: !a && i.hideOverflow,
                children: b,
              }),
            }),
            f,
          ],
        });
      else
        return h.jsxs(c("CometAspectRatioContainer.react"), {
          aspectRatio: d,
          xstyle: !a && i.hideOverflow,
          children: [
            e,
            h.jsx(c("CometAspectRatioContainer.react"), {
              aspectRatio: g,
              xstyle: [i.absoluteCenter, !a && i.hideOverflow],
              children: b,
            }),
            f,
          ],
        });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useGetTextDirectionAttribute",
  ["getTextDirectionAttribute", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useMemo;
    function a(a) {
      return h(
        function () {
          return c("getTextDirectionAttribute")(a);
        },
        [a]
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometHovercardLinkContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({ isRenderedInHovercard: !1 });
    c = b;
    g["default"] = c;
  },
  98
);
__d(
  "useShowHovercardsOnClick",
  ["CometHovercardSettingsContext", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useContext;
    function a() {
      var a = h(c("CometHovercardSettingsContext"));
      a = a.hovercardInteractionPreference;
      return a === 3;
    }
    g["default"] = a;
  },
  98
);
__d(
  "CometFeedGifOverlay.react",
  [
    "fbt",
    "ix",
    "CometImage.react",
    "CometPressable.react",
    "react",
    "stylex",
    "unrecoverableViolation",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = {
        gifButton: {
          appearance: "xjyslct",
          backgroundColor: "xjbqb8w",
          borderTopStyle: "x13fuv20",
          borderEndStyle: "xu3j5b3",
          borderBottomStyle: "x1q0q8m5",
          borderStartStyle: "x26u7qi",
          borderTopWidth: "x972fbf",
          borderEndWidth: "xcfux6l",
          borderBottomWidth: "x1qhh985",
          borderStartWidth: "xm0m39n",
          boxSizing: "x9f619",
          color: "x5muytz",
          display: "x1lliihq",
          height: "x5yr21d",
          marginTop: "xdj266r",
          marginEnd: "x11i5rnm",
          marginBottom: "xat24cr",
          marginStart: "x1mh8g0r",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          paddingTop: "xexx8yu",
          paddingEnd: "x4uap5",
          paddingBottom: "x18d9i69",
          paddingStart: "xkhd6sd",
          position: "x1n2onr6",
          textAlign: "x16tdsg8",
          width: "xh8yej3",
          zIndex: "x1ja2u2z",
          $$css: !0,
        },
        gifIcon: {
          borderTopStartRadius: "x14yjl9h",
          borderTopEndRadius: "xudhj91",
          borderBottomEndRadius: "x18nykt9",
          borderBottomStartRadius: "xww2gxu",
          boxSizing: "x9f619",
          cursor: "x1ypdohk",
          height: "xy75621",
          left: "x1nrll8i",
          position: "x10l6tqk",
          top: "xwa60dl",
          transform: "x11lhmoz",
          width: "xni59qk",
          $$css: !0,
        },
        gifIconImage: {
          boxSizing: "x9f619",
          left: "x1nrll8i",
          position: "x10l6tqk",
          top: "xwa60dl",
          transform: "x1t2qqyw",
          $$css: !0,
        },
        gifIconImageHidden: {
          transform: "xkm0npi",
          transitionProperty: "x11xpdln",
          transitionTimingFunction: "xz4gly6",
          $$css: !0,
        },
        hideTransition1: { transitionDuration: "x13dflua", $$css: !0 },
        hideTransition2: { transitionDuration: "x1d8287x", $$css: !0 },
        hideTransition3: { transitionDuration: "x1wsgiic", $$css: !0 },
      };
    function a(a) {
      var b = a.isPaused,
        d = a.isPlayable,
        e = a.label,
        f = a.linkProps;
      a = a.onPress;
      if (d) {
        if (b == null || a == null)
          throw c("unrecoverableViolation")(
            "isPaused and onPress cannot be nullish if the component is playable in CometFeedGifOverlay",
            "comet_feed"
          );
      } else if (f == null || e == null)
        throw c("unrecoverableViolation")(
          "linkProps or label cannot be nullish if the component is not playable in CometFeedGifOverlay",
          "comet_feed"
        );
      return d
        ? j.jsx(c("CometPressable.react"), {
            display: "inline",
            label:
              b === !0 ? h._("Lire le GIF") : h._("Mettre en pause le GIF"),
            linkProps: f,
            onPress: a,
            overlayDisabled: !0,
            xstyle: k.gifButton,
            children: j.jsxs("i", {
              className:
                "x14yjl9h xudhj91 x18nykt9 xww2gxu x9f619 x1ypdohk xy75621 x1nrll8i x10l6tqk xwa60dl x11lhmoz xni59qk",
              children: [
                j.jsx("span", {
                  className: c("stylex")(
                    k.gifIconImage,
                    b === !1 && k.gifIconImageHidden,
                    b === !1 && k.hideTransition3
                  ),
                  children: j.jsx(c("CometImage.react"), { src: i("99378") }),
                }),
                j.jsx("span", {
                  className: c("stylex")(
                    k.gifIconImage,
                    b === !1 && k.gifIconImageHidden,
                    b === !1 && k.hideTransition2
                  ),
                  children: j.jsx(c("CometImage.react"), { src: i("99379") }),
                }),
                j.jsx("span", {
                  className: c("stylex")(
                    k.gifIconImage,
                    b === !1 && k.gifIconImageHidden,
                    b === !1 && k.hideTransition1
                  ),
                  children: j.jsx(c("CometImage.react"), { src: i("99380") }),
                }),
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
  "groupColorRGB",
  ["FBLogger"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = /^#?([a-fA-F\d])([a-fA-F\d])([a-fA-F\d])$/i,
      i = /^#?([a-fA-F\d]{2})([a-fA-F\d]{2})([a-fA-F\d]{2})$/i;
    function a(a, b, c, d) {
      d === void 0 && (d = !1);
      d = d ? "#" : "";
      return d + j(a) + j(b) + j(c);
    }
    function b(a, b, c, d, e) {
      e === void 0 && (e = !1);
      e = e ? "#" : "";
      return e + j(a) + j(b) + j(c) + j(d);
    }
    function j(a) {
      a = a.toString(16);
      return a.length === 1 ? "0" + a : a;
    }
    var k = function (a) {
      a = a.replace(h, function (a, b, c, d) {
        return b + b + c + c + d + d;
      });
      a = i.exec(a);
      return !a
        ? null
        : [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16), 1];
    };
    function d(a) {
      a = k(a);
      if (a == null)
        throw c("FBLogger")("group_color").mustfixThrow(
          "formatted hexcode must not be null"
        );
      return { b: a[2], g: a[1], r: a[0] };
    }
    g.rgbToHex = a;
    g.rgbaToHex = b;
    g.hexToRGBA = k;
    g.hexToRgb = d;
  },
  98
);
__d(
  "groupColorHSL",
  ["groupColorRGB"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    c = 95;
    function h(a) {
      var b = a.r / 255,
        c = a.g / 255;
      a = a.b / 255;
      var d = Math.max(b, c, a),
        e = Math.min(b, c, a),
        f = (d + e) / 2,
        g = 0,
        h = 0;
      if (d !== e) {
        var i = d - e;
        h = f > 0.5 ? i / (2 - d - e) : i / (d + e);
        switch (d) {
          case b:
            g = (c - a) / i + (c < a ? 6 : 0);
            break;
          case c:
            g = (a - b) / i + 2;
            break;
          case a:
            g = (b - c) / i + 4;
            break;
        }
        g /= 6;
      }
      return {
        h: Math.floor(g * 360),
        l: Math.floor(f * 100),
        s: Math.floor(h * 100),
      };
    }
    function a(a, b) {
      b === void 0 && (b = !1);
      var c = a.h,
        d = a.s,
        e = a.l / 100,
        f = (d * Math.min(e, 1 - e)) / 100;
      a = function (a) {
        a = (a + c / 30) % 12;
        a = e - f * Math.max(Math.min(a - 3, 9 - a, 1), -1);
        return Math.round(255 * a)
          .toString(16)
          .padStart(2, "0");
      };
      d = b ? "#" : "";
      return d + ("" + a(0) + a(8) + a(4));
    }
    function b(a) {
      a = d("groupColorRGB").hexToRgb(a);
      return h(a);
    }
    g.LIGHTNESS_LIMIT = c;
    g.rgbToHsl = h;
    g.hslToHex = a;
    g.hexToHsl = b;
  },
  98
);
__d(
  "ProfileCometProfileLink.react",
  [
    "CometDangerouslySuppressInteractiveElementsContext",
    "CometHovercardLinkContext",
    "CometLink.react",
    "CometRelay",
    "ProfileCometLinkContext",
    "ProfileCometProfileLink_actor.graphql",
    "cr:1408565",
    "react",
    "recoverableViolation",
    "useShowHovercardsOnClick",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = d("react").useContext;
    function a(a, e) {
      var f = a.actor,
        g = a.children,
        k = a.navigationSource,
        l = a.traceParams;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "actor",
        "children",
        "navigationSource",
        "traceParams",
      ]);
      f = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("ProfileCometProfileLink_actor.graphql")),
        f
      );
      var m = c("useShowHovercardsOnClick")(),
        n = j(c("CometHovercardLinkContext"));
      n = n.isRenderedInHovercard;
      var o = j(c("ProfileCometLinkContext"));
      o = o.groupID;
      if (f.id == null)
        return c("recoverableViolation")("Missing id for actor", "comet_ui");
      o =
        o != null && b("cr:1408565")
          ? b("cr:1408565").buildURL({ group_idorvanity: o, member_id: f.id })
          : f.profile_url;
      return i.jsx(
        c("CometDangerouslySuppressInteractiveElementsContext").Provider,
        {
          value: n === !1 && m,
          children: i.jsx(
            c("CometLink.react"),
            babelHelpers["extends"](
              {
                href: o,
                ref: e,
                traceParams: babelHelpers["extends"]({}, l, {
                  navigation_source: k,
                }),
              },
              a,
              { children: g }
            )
          ),
        }
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = i.forwardRef(a);
    g["default"] = e;
  },
  98
);
__d(
  "CometUFIAnimatedImageAttachmentGIFOverlay.react",
  [
    "CometFeedGifOverlay.react",
    "VideoPlayerHooks",
    "react",
    "useDebouncedValue",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useCallback;
    function a(a) {
      var b = d("VideoPlayerHooks").useController();
      a = d("VideoPlayerHooks").usePaused();
      var e = d("VideoPlayerHooks").usePlaying();
      e = c("useDebouncedValue")(e, 5);
      var f = a && !e;
      a = i(
        function () {
          f ? b.play("user_initiated") : b.pause("user_initiated");
        },
        [f, b]
      );
      return h.jsx(c("CometFeedGifOverlay.react"), {
        isPaused: f,
        isPlayable: !0,
        onPress: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoPlayerWithThumbnail.react",
  [
    "CometImage.react",
    "CometVisualCompletionAttributes",
    "VideoPlayerHooks",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useEffect,
      j = b.useState,
      k = {
        root: {
          alignItems: "x6s0dn4",
          bottom: "x1ey2m1c",
          boxSizing: "x9f619",
          display: "x78zum5",
          end: "xds687c",
          justifyContent: "xl56j7k",
          position: "x10l6tqk",
          start: "x17qophe",
          top: "x13vifvy",
          $$css: !0,
        },
        thumbnail: { height: "x5yr21d", width: "x14atkfc", $$css: !0 },
      };
    function a(a) {
      var b = a.onLoad,
        e = a.src;
      a = a.thumbnailStyle;
      var f = d("VideoPlayerHooks").useVideoPlaybackEnded(),
        g = d("VideoPlayerHooks").usePaused(),
        l = j(!1),
        m = l[0],
        n = l[1];
      i(
        function () {
          g || n(!0);
        },
        [g]
      );
      return !f && m
        ? null
        : h.jsx(
            "div",
            babelHelpers["extends"](
              {
                className:
                  "x6s0dn4 x1ey2m1c x9f619 x78zum5 xds687c xl56j7k x10l6tqk x17qophe x13vifvy",
              },
              c("CometVisualCompletionAttributes").IGNORE,
              {
                children: h.jsx(c("CometImage.react"), {
                  onLoad: b,
                  src: e,
                  xstyle: [k.thumbnail, a],
                }),
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
  "VideoPlayerCometFeedThumbnail.react",
  [
    "CometRelay",
    "VideoPlayerCometFeedThumbnail_video.graphql",
    "VideoPlayerWithThumbnail.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      a = a.video;
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("VideoPlayerCometFeedThumbnail_video.graphql")),
        a
      );
      a = a == null ? void 0 : (a = a.thumbnailImage) == null ? void 0 : a.uri;
      return a == null
        ? null
        : i.jsx(c("VideoPlayerWithThumbnail.react"), { src: a });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "useVideoPlayerClickToPauseInteraction",
  ["fbt", "VideoPlayerHooks", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react").useCallback;
    function a() {
      var a = d("VideoPlayerHooks").usePlaying(),
        b = d("VideoPlayerHooks").useController(),
        c = d("VideoPlayerHooks").useIsLive(),
        e = i(
          function () {
            b.pause("user_initiated");
          },
          [b]
        );
      a = a && !c;
      return a
        ? {
            ariaLabel: h._("Mettre la vid\u00e9o en pause"),
            handler: e,
            overlayLabel: "",
          }
        : null;
    }
    g["default"] = a;
  },
  98
);
__d(
  "useVideoPlayerClickToPlayInteraction",
  ["fbt", "VideoPlayerHooks", "react", "useFeedClickEventHandler"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react").useCallback;
    function a(a) {
      a = a === void 0 ? {} : a;
      var b = a.shouldUnmute;
      a = d("VideoPlayerHooks").usePaused();
      var e = d("VideoPlayerHooks").useController(),
        f = d("VideoPlayerHooks").useLastMuteReason(),
        g = i(
          function () {
            e.play("user_initiated"),
              b === !0 &&
                f !== "user_initiated" &&
                e.setMuted(!1, "product_initiated");
          },
          [e, f, b]
        );
      g = c("useFeedClickEventHandler")(g);
      a = a;
      return a
        ? { ariaLabel: h._("Lire la vid\u00e9o"), handler: g, overlayLabel: "" }
        : null;
    }
    g["default"] = a;
  },
  98
);
__d(
  "useVideoPlayerCometTahoeMouseInteractions",
  [
    "VideoPlayerHooks",
    "useVideoPlayerClickToPauseInteraction",
    "useVideoPlayerClickToPlayInteraction",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      a = a === void 0 ? {} : a;
      a = a.shouldUnmuteOnPlay;
      var b = d("VideoPlayerHooks").useEnded(),
        e = d("VideoPlayerHooks").usePlaying();
      a = c("useVideoPlayerClickToPlayInteraction")({ shouldUnmute: a });
      var f = c("useVideoPlayerClickToPauseInteraction")();
      e = e ? f : a;
      return b ? null : e;
    }
    g["default"] = a;
  },
  98
);
__d(
  "ChannelGeminiFocusableTable.react",
  ["FocusTable.react", "focusScopeQueries"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("FocusTable.react").createFocusTable(
      d("focusScopeQueries").tabbableScopeQuery
    );
    b = a[0];
    c = a[1];
    e = a[2];
    g.ChannelGeminiFocusableTable = b;
    g.WorkGalahadChannelFocusableTableRow = c;
    g.WorkGalahadChannelFocusableTableCell = e;
    g.WorkGalahadChannelFocusableScopeQuery =
      d("focusScopeQueries").tabbableScopeQuery;
  },
  98
);
__d(
  "WorkCometInteractiveElementContext.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({ hovered: !1, focused: !1, pressed: !1 });
    g["default"] = b;
  },
  98
);
__d(
  "WorkGalahadHoverHelper",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useState;
    function a(a) {
      var b = i(!1),
        c = b[0],
        d = b[1];
      b = h(
        function () {
          a && a(), d(!0);
        },
        [a]
      );
      var e = h(function () {
        return d(!1);
      }, []);
      return [c, { onMouseEnter: b, onMouseLeave: e }];
    }
    g.useHover = a;
  },
  98
);
__d(
  "useFocusState",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
      i = b.useState;
    function a(a, b) {
      var c = i(!1),
        d = c[0],
        e = c[1];
      c = h(
        function (b) {
          e(!0), a && a(b);
        },
        [a]
      );
      var f = h(
        function (a) {
          e(!1), b && b(a);
        },
        [b]
      );
      return [d, c, f];
    }
    g["default"] = a;
  },
  98
);
__d(
  "useHoverAndFocusState",
  ["WorkGalahadHoverHelper", "useFocusState"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      var a = d("WorkGalahadHoverHelper").useHover(),
        b = a[0];
      a = a[1];
      var e = c("useFocusState")(),
        f = e[0],
        g = e[1];
      e = e[2];
      return {
        hovered: b,
        focused: f,
        onHoverIn: a.onMouseEnter,
        onHoverOut: a.onMouseLeave,
        onFocusIn: g,
        onFocusOut: e,
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "WorkGalahadUIChannelItem.react",
  [
    "BaseFocusRing.react",
    "ChannelGeminiFocusableTable.react",
    "CometPressable.react",
    "CometPressableOverlay.react",
    "Locale",
    "TetraTextPairing.react",
    "URI",
    "WorkCometInteractiveElementContext.react",
    "cr:130",
    "emptyFunction",
    "gkx",
    "react",
    "stylex",
    "useCometPreloader",
    "useHoverAndFocusState",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    e = d("react");
    var i = e.useCallback,
      j = e.useMemo,
      k = e.useState,
      l =
        (e =
          b("cr:130") == null
            ? void 0
            : b("cr:130").useGalileoNavDrawerContext) != null
          ? e
          : c("emptyFunction"),
      m = c("gkx")("875"),
      n = {
        root: {
          boxSizing: "x9f619",
          position: "x1n2onr6",
          flexGrow: "x1iyjqo2",
          flexShrink: "xs83m0k",
          minHeight: "x2lwn1j",
          minWidth: "xeuugli",
          display: "x78zum5",
          justifyContent: "x1nhvcw1",
          alignItems: "x6s0dn4",
          flexDirection: "x1q0g3np",
          borderTop: "x76ihet",
          borderEnd: "xwmqs3e",
          borderBottom: "x112ta8",
          borderStart: "xxxdfa6",
          paddingEnd: "x1pi30zi",
          $$css: !0,
        },
        selected: { backgroundColor: "x1qq8qej", $$css: !0 },
        contentContainer: {
          borderTopStyle: "x13fuv20",
          borderStartStyle: "x26u7qi",
          borderEndStyle: "xu3j5b3",
          borderBottomStyle: "x1q0q8m5",
          borderTopWidth: "x972fbf",
          borderStartWidth: "xm0m39n",
          borderEndWidth: "xcfux6l",
          borderBottomWidth: "x1qhh985",
          boxSizing: "x9f619",
          display: "x78zum5",
          flexGrow: "x1iyjqo2",
          flexShrink: "xs83m0k",
          marginTop: "xdj266r",
          marginEnd: "x11i5rnm",
          marginBottom: "xat24cr",
          marginStart: "x1mh8g0r",
          minHeight: "x2lwn1j",
          minWidth: "xeuugli",
          paddingTop: "xexx8yu",
          paddingEnd: "x4uap5",
          paddingBottom: "x18d9i69",
          paddingStart: "xkhd6sd",
          position: "x1n2onr6",
          zIndex: "x1ja2u2z",
          justifyContent: "x1nhvcw1",
          alignItems: "x6s0dn4",
          flexDirection: "x1q0g3np",
          $$css: !0,
        },
        content: {
          borderTopStyle: "x13fuv20",
          borderStartStyle: "x26u7qi",
          borderEndStyle: "xu3j5b3",
          borderBottomStyle: "x1q0q8m5",
          borderTopWidth: "x972fbf",
          borderStartWidth: "xm0m39n",
          borderEndWidth: "xcfux6l",
          borderBottomWidth: "x1qhh985",
          boxSizing: "x9f619",
          display: "x78zum5",
          flexGrow: "x1iyjqo2",
          flexShrink: "xs83m0k",
          marginTop: "xdj266r",
          marginEnd: "x11i5rnm",
          marginBottom: "xat24cr",
          marginStart: "x1mh8g0r",
          minHeight: "x2lwn1j",
          minWidth: "xeuugli",
          paddingTop: "xexx8yu",
          paddingEnd: "x4uap5",
          paddingBottom: "x18d9i69",
          paddingStart: "xkhd6sd",
          position: "x1n2onr6",
          zIndex: "x1ja2u2z",
          justifyContent: "x1nhvcw1",
          alignItems: "x6s0dn4",
          flexDirection: "x1q0g3np",
          outline: "x1a2a7pz",
          ":hover_textDecoration": "x1lku1pv",
          $$css: !0,
        },
        textPairing: {
          flexGrow: "x1iyjqo2",
          flexBasis: "x1r8uery",
          minWidth: "xeuugli",
          paddingTop: "x1y1aw1k",
          paddingBottom: "xwib8y2",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          textOverflow: "xlyipyv",
          $$css: !0,
        },
        addOnPrimary: {
          borderTopStyle: "x13fuv20",
          borderStartStyle: "x26u7qi",
          borderEndStyle: "xu3j5b3",
          borderBottomStyle: "x1q0q8m5",
          borderTopWidth: "x972fbf",
          borderStartWidth: "xm0m39n",
          borderEndWidth: "xcfux6l",
          borderBottomWidth: "x1qhh985",
          boxSizing: "x9f619",
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          flexShrink: "xs83m0k",
          justifyContent: "x1qughib",
          marginStart: "x1mh8g0r",
          minHeight: "x2lwn1j",
          minWidth: "xeuugli",
          paddingTop: "xexx8yu",
          paddingEnd: "x4uap5",
          paddingBottom: "x18d9i69",
          paddingStart: "xkhd6sd",
          zIndex: "x1ja2u2z",
          alignItems: "x6s0dn4",
          flexGrow: "x1c4vz4f",
          marginBottom: "x12nagc",
          marginEnd: "xq8finb",
          marginTop: "x1gslohp",
          position: "x1n2onr6",
          $$css: !0,
        },
        addOnPrimaryDrawer: {
          marginBottom: "x1e56ztr",
          marginTop: "x1xmf6yo",
          $$css: !0,
        },
        addOnSecondary: {
          borderTopStyle: "x13fuv20",
          borderStartStyle: "x26u7qi",
          borderEndStyle: "xu3j5b3",
          borderBottomStyle: "x1q0q8m5",
          borderTopWidth: "x972fbf",
          borderStartWidth: "xm0m39n",
          borderEndWidth: "xcfux6l",
          borderBottomWidth: "x1qhh985",
          boxSizing: "x9f619",
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          flexShrink: "xs83m0k",
          marginTop: "xdj266r",
          marginEnd: "x11i5rnm",
          marginBottom: "xat24cr",
          marginStart: "x1mh8g0r",
          minHeight: "x2lwn1j",
          minWidth: "xeuugli",
          paddingTop: "xexx8yu",
          paddingEnd: "x4uap5",
          paddingBottom: "x18d9i69",
          paddingStart: "xkhd6sd",
          zIndex: "x1ja2u2z",
          position: "x10l6tqk",
          start: "xyzs4uy",
          top: "x13vifvy",
          bottom: "x1ey2m1c",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          flexGrow: "x1c4vz4f",
          $$css: !0,
        },
        addOnSecondaryOffset: { transform: "xuuh30", $$css: !0 },
        addOnSecondaryOffsetRTL: { transform: "xitnhlw", $$css: !0 },
        indentationLevel1: { paddingStart: "x1swvt13", $$css: !0 },
        indentationLevel2: { paddingStart: "x14gfdix", $$css: !0 },
        indentationLevel3: { paddingStart: "xyxze6z", $$css: !0 },
        addOnTertiary: {
          borderTopStyle: "x13fuv20",
          borderStartStyle: "x26u7qi",
          borderEndStyle: "xu3j5b3",
          borderBottomStyle: "x1q0q8m5",
          borderTopWidth: "x972fbf",
          borderStartWidth: "xm0m39n",
          borderEndWidth: "xcfux6l",
          borderBottomWidth: "x1qhh985",
          boxSizing: "x9f619",
          display: "x78zum5",
          marginTop: "xdj266r",
          marginEnd: "x11i5rnm",
          marginBottom: "xat24cr",
          minHeight: "x2lwn1j",
          paddingTop: "xexx8yu",
          paddingEnd: "x4uap5",
          paddingBottom: "x18d9i69",
          paddingStart: "xkhd6sd",
          position: "x1n2onr6",
          zIndex: "x1ja2u2z",
          flexGrow: "x1c4vz4f",
          flexShrink: "x2lah0s",
          minWidth: "x15x72sd",
          alignItems: "x6s0dn4",
          justifyContent: "x13a6bvl",
          flexDirection: "x1q0g3np",
          marginStart: "x1i64zmx",
          $$css: !0,
        },
      };
    function o(a) {
      a = a.indentationLevel;
      if (a === 1) return n.indentationLevel1;
      else if (a === 2) return n.indentationLevel2;
      else if (a === 3) return n.indentationLevel3;
    }
    function a(a, b) {
      var e = a.addOnPrimary,
        f = a.addOnSecondary,
        g = a.addOnTertiary,
        p = a.disabled,
        q = p === void 0 ? !1 : p;
      p = a.emphasized;
      p = p === void 0 ? !1 : p;
      var r = a.selected,
        s = r === void 0 ? !1 : r;
      r = a.indentationLevel;
      var t = r === void 0 ? 2 : r;
      r = a.linkProps;
      r = r === void 0 ? {} : r;
      var u = r.url,
        v = babelHelpers.objectWithoutPropertiesLoose(r, ["url"]);
      r = a.body;
      var w = a.bodyColor,
        x = a.bodyLineLimit;
      x = x === void 0 ? 1 : x;
      var y = a.headline,
        z = a.headlineAddOn,
        A = a.headlineColor,
        B = a.headlineLineLimit;
      B = B === void 0 ? 1 : B;
      var C = a.meta,
        D = a.metaColor,
        E = a.metaLineLimit,
        F = a.metaLocation,
        G = a.onPress,
        H = a.onPressIn,
        I = a.onHoverIn,
        J = a.onHoverOut,
        K = a.onFocusIn,
        L = a.onFocusOut,
        M = a.isSemanticListItem,
        N = M === void 0 ? !0 : M;
      M = a.testid;
      var O = a.wrapperRef,
        P = a.onPreload,
        aa = a.focusableRole,
        ba = a.role,
        ca = babelHelpers.objectWithoutPropertiesLoose(a, [
          "addOnPrimary",
          "addOnSecondary",
          "addOnTertiary",
          "disabled",
          "emphasized",
          "selected",
          "indentationLevel",
          "linkProps",
          "body",
          "bodyColor",
          "bodyLineLimit",
          "headline",
          "headlineAddOn",
          "headlineColor",
          "headlineLineLimit",
          "meta",
          "metaColor",
          "metaLineLimit",
          "metaLocation",
          "onPress",
          "onPressIn",
          "onHoverIn",
          "onHoverOut",
          "onFocusIn",
          "onFocusOut",
          "isSemanticListItem",
          "testid",
          "wrapperRef",
          "onPreload",
          "focusableRole",
          "role",
        ]);
      M = k(!1);
      var Q = M[0],
        R = M[1];
      a = c("useHoverAndFocusState")();
      var S = a.focused,
        T = a.hovered,
        U = a.onFocusIn,
        V = a.onFocusOut,
        da = a.onHoverIn,
        ea = a.onHoverOut;
      M = l();
      a = j(
        function () {
          return { hovered: T, focused: S, pressed: Q };
        },
        [T, S, Q]
      );
      var W = i(
        function () {
          P && m && P();
        },
        [P]
      );
      W = c("useCometPreloader")("button_aggressive", void 0, W);
      var X = W[0],
        Y = W[1],
        fa = i(
          function (a) {
            X(a), I && I(a);
          },
          [I, X]
        ),
        ga = i(
          function (a) {
            Y(), J && J(a);
          },
          [J, Y]
        ),
        ha = i(
          function (a) {
            U(a), K && K(a);
          },
          [K, U]
        ),
        ia = i(
          function (a) {
            V(a), L && L(a);
          },
          [L, V]
        ),
        ja = i(
          function (a) {
            R(!0), H && H(a);
          },
          [H]
        ),
        ka = i(function () {
          return R(!1);
        }, []),
        Z = h.jsxs(h.Fragment, {
          children: [
            e != null &&
              h.jsx("div", {
                className: c("stylex")(
                  n.addOnPrimary,
                  (M == null ? void 0 : M.isWithinDrawer) &&
                    n.addOnPrimaryDrawer
                ),
                children: e,
              }),
            h.jsx("div", {
              "data-testid": void 0,
              className:
                "x1iyjqo2 x1r8uery xeuugli x1y1aw1k xwib8y2 x6ikm8r x10wlt62 xlyipyv",
              children: h.jsx(c("TetraTextPairing.react"), {
                body: r,
                bodyColor: w,
                bodyLineLimit: x,
                headline: y,
                headlineAddOn: z,
                headlineColor: A,
                headlineLineLimit: B,
                level: 4,
                meta: C,
                metaColor: D,
                metaLineLimit: E,
                metaLocation: F,
                reduceEmphasis: p === !1,
              }),
            }),
          ],
        }),
        la = N ? "li" : "div",
        $ = G || u != null;
      return h.jsx(
        d("ChannelGeminiFocusableTable.react")
          .WorkGalahadChannelFocusableTableRow,
        {
          children: h.jsx(
            c("WorkCometInteractiveElementContext.react").Provider,
            {
              value: a,
              children: h.jsx(c("BaseFocusRing.react"), {
                children: function (a) {
                  var e;
                  return h.jsxs(la, {
                    ref: O,
                    role: (e = ba) != null ? e : $ && N ? "row" : void 0,
                    onMouseEnter: da,
                    onMouseLeave: ea,
                    className: c("stylex")(
                      n.root,
                      o({ indentationLevel: t }),
                      S && a,
                      s && n.selected
                    ),
                    children: [
                      $ &&
                        h.jsx(c("CometPressableOverlay.react"), {
                          focusVisible: S,
                          hovered: T,
                          pressed: Q,
                        }),
                      $
                        ? h.jsx(
                            d("ChannelGeminiFocusableTable.react")
                              .WorkGalahadChannelFocusableTableCell,
                            {
                              children: h.jsx("div", {
                                className:
                                  "x13fuv20 x26u7qi xu3j5b3 x1q0q8m5 x972fbf xm0m39n xcfux6l x1qhh985 x9f619 x78zum5 x1iyjqo2 xs83m0k xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x1ja2u2z x1nhvcw1 x6s0dn4 x1q0g3np",
                                role:
                                  (e = aa) != null
                                    ? e
                                    : N
                                    ? "gridcell"
                                    : void 0,
                                children: h.jsx(
                                  c("CometPressable.react"),
                                  babelHelpers["extends"](
                                    { testid: void 0 },
                                    ca,
                                    {
                                      display: "block",
                                      disabled: q,
                                      linkProps: u
                                        ? babelHelpers["extends"]({}, v, {
                                            url: c("URI").normalize(u),
                                            prefetchQueries: m,
                                          })
                                        : void 0,
                                      onHoverIn: fa,
                                      onHoverOut: ga,
                                      onFocusIn: ha,
                                      onFocusOut: ia,
                                      onPress: G,
                                      onPressIn: ja,
                                      onPressOut: ka,
                                      overlayDisabled: !0,
                                      ref: b,
                                      suppressFocusRing: !0,
                                      xstyle: n.content,
                                      children: Z,
                                    }
                                  )
                                ),
                              }),
                            }
                          )
                        : h.jsx("div", {
                            className:
                              "x13fuv20 x26u7qi xu3j5b3 x1q0q8m5 x972fbf xm0m39n xcfux6l x1qhh985 x9f619 x78zum5 x1iyjqo2 xs83m0k xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x1ja2u2z x1nhvcw1 x6s0dn4 x1q0g3np x1a2a7pz x1lku1pv",
                            children: Z,
                          }),
                      f != null &&
                        h.jsx("div", {
                          className: c("stylex")(
                            n.addOnSecondary,
                            d("Locale").isRTL()
                              ? n.addOnSecondaryOffsetRTL
                              : n.addOnSecondaryOffset
                          ),
                          children: f,
                        }),
                      g != null &&
                        h.jsx("div", {
                          className:
                            "x13fuv20 x26u7qi xu3j5b3 x1q0q8m5 x972fbf xm0m39n xcfux6l x1qhh985 x9f619 x78zum5 xdj266r x11i5rnm xat24cr x2lwn1j xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x1ja2u2z x1c4vz4f x2lah0s x15x72sd x6s0dn4 x13a6bvl x1q0g3np x1i64zmx",
                          children: g,
                        }),
                    ],
                  });
                },
              }),
            }
          ),
        }
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b;
  },
  98
);
__d(
  "ChannelGeminiItemChromeList.react",
  [
    "BaseLoadingStateElement.react",
    "CometGlimmer.react",
    "WorkGalahadUIChannelItem.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        line: {
          borderTopStartRadius: "xyi19xy",
          borderTopEndRadius: "x1ccrb07",
          borderBottomEndRadius: "xtf3nb5",
          borderBottomStartRadius: "x1pc53ja",
          display: "x1lliihq",
          height: "x1kpxq89",
          marginTop: "xr9ek0c",
          marginEnd: "x11i5rnm",
          marginBottom: "xjpr12u",
          marginStart: "x1mh8g0r",
          $$css: !0,
        },
        smallLine: { height: "x170jfvy", $$css: !0 },
        longLine: { width: "x1q3o2qw", $$css: !0 },
        shortLine: { width: "xz84dc7", $$css: !0 },
        shortestLine: { width: "x1f1nlb9", $$css: !0 },
        headerChrome: {
          marginBottom: "x1e56ztr",
          marginTop: "x1xmf6yo",
          paddingStart: "xbbxn1n",
          paddingEnd: "xxbr6pl",
          display: "x78zum5",
          justifyContent: "x1qughib",
          alignItems: "x6s0dn4",
          $$css: !0,
        },
        flexColumn: {
          display: "x78zum5",
          justifyContent: "x1nhvcw1",
          alignItems: "x1cy8zhl",
          flexDirection: "xdt5ytf",
          $$css: !0,
        },
        smallIcon: { height: "xxk0z11", width: "xvy4d1p", $$css: !0 },
        icon: { height: "xc9qbxq", width: "x14qfxbe", $$css: !0 },
        largeIcon: { height: "xsdox4t", width: "x1useyqa", $$css: !0 },
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
      };
    function j(a) {
      var b = a.index,
        d = a.isIndented;
      d = d === void 0 ? !1 : d;
      var e = a.isNested;
      e = e === void 0 ? !1 : e;
      var f = a.roundIcon;
      f = f === void 0 ? !1 : f;
      var g = a.size;
      g = g === void 0 ? "medium" : g;
      a = a.textType;
      a = a === void 0 ? "single" : a;
      return h.jsx("div", {
        children: h.jsx(c("WorkGalahadUIChannelItem.react"), {
          isSemanticListItem: !1,
          headline: h.jsxs(h.Fragment, {
            children: [
              h.jsx("div", {
                style: { width: "100%" },
                className: "x78zum5 x1nhvcw1 x1cy8zhl xdt5ytf",
                children: h.jsx(c("CometGlimmer.react"), {
                  xstyle: [i.line, i.longLine, g === "small" && i.smallLine],
                  index: b,
                }),
              }),
              a === "multi"
                ? h.jsxs(h.Fragment, {
                    children: [
                      h.jsx(c("CometGlimmer.react"), {
                        xstyle: [
                          i.line,
                          i.shortLine,
                          g === "small" && i.smallLine,
                        ],
                        index: b,
                      }),
                      h.jsx(c("CometGlimmer.react"), {
                        xstyle: [
                          i.line,
                          i.shortestLine,
                          g === "small" && i.smallLine,
                        ],
                        index: b,
                      }),
                    ],
                  })
                : null,
            ],
          }),
          meta:
            a === "subtitled"
              ? h.jsx(c("CometGlimmer.react"), {
                  xstyle: [i.line, i.shortLine, g === "small" && i.smallLine],
                  index: b,
                })
              : void 0,
          addOnPrimary: e
            ? void 0
            : h.jsx(c("CometGlimmer.react"), {
                xstyle: [
                  g === "medium" && i.icon,
                  g === "small" && i.smallIcon,
                  g === "large" && i.largeIcon,
                  f && i.circle,
                  !f && i.roundedRect,
                ],
                index: b,
              }),
          indentationLevel: d ? 2 : 1,
        }),
      });
    }
    j.displayName = j.name + " [from " + f.id + "]";
    function k(a) {
      a = a.initialIndex;
      a = a === void 0 ? 0 : a;
      return h.jsx("div", {
        className: "x1e56ztr x1xmf6yo xbbxn1n xxbr6pl x78zum5 x1qughib x6s0dn4",
        children: h.jsx(c("CometGlimmer.react"), {
          xstyle: [i.line, i.shortLine],
          index: a,
        }),
      });
    }
    k.displayName = k.name + " [from " + f.id + "]";
    function a(a) {
      var b = a.amount,
        d = a.initialIndex;
      d = d === void 0 ? 0 : d;
      var e = a.type;
      a = a.withHeader;
      a = a === void 0 ? !1 : a;
      var f;
      switch (e) {
        case "groups":
        case "teams":
          f = { isIndented: !0 };
          break;
        case "people":
          f = { roundIcon: !0, isIndented: !0 };
          break;
        case "notifications":
          f = {
            textType: "multi",
            roundIcon: !0,
            size: "large",
            isIndented: !0,
          };
          break;
        case "minimall":
          f = { textType: "multi", roundIcon: !0, isIndented: !0 };
          break;
        case "inlineMinimall":
          f = {
            textType: "multi",
            roundIcon: !0,
            isNested: !0,
            isIndented: !0,
          };
          break;
        case "search":
          f = { textType: "subtitled" };
          break;
        case "chats":
          f = { roundIcon: !0, size: "large", isIndented: !0 };
          break;
        case "quick-chat":
          f = { roundIcon: !0, size: "small" };
          break;
        case "dense-chats":
          f = { roundIcon: !0, size: "small", isIndented: !0 };
          break;
        case "message-search":
          f = { textType: "subtitled", roundIcon: !0 };
          break;
        default:
          e;
      }
      e = [];
      for (var g = 0; g < b; g++)
        e.push(h.jsx(j, babelHelpers["extends"]({ index: g + d }, f), g));
      return h.jsxs(c("BaseLoadingStateElement.react"), {
        children: [a ? h.jsx(k, { initialIndex: d }) : null, e],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "WorkCometActorHovercard.react",
  ["ActorHovercard.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsx(c("ActorHovercard.react"), babelHelpers["extends"]({}, a));
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "WorkroomsUtils",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return (
        a === "XFBWorkroomsUser" ||
        a === "XFBWorkroomsManagedUser" ||
        a === "XFBWorkroomsEphemeralGuestUser"
      );
    }
    function b(a) {
      return a === "XFBWorkroomsManagedUser";
    }
    function c(a) {
      return a === "XFBWorkroomsUnclaimedManagedUser";
    }
    function d(a) {
      return a === null ? babelHelpers["extends"]({}, null) : a;
    }
    f.isWorkroomsUserType = a;
    f.isWorkroomsManagedUserType = b;
    f.isWorkroomsUnclaimedManagedUserType = c;
    f.maybeSpread = d;
  },
  66
);
__d(
  "WorkCometActorLinkWithHovercard.react",
  [
    "CometLink.react",
    "FBLogger",
    "RelayHooks",
    "WorkCometActorHovercard.react",
    "WorkCometActorLinkWithHovercardQuery.graphql",
    "WorkroomsUtils",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e = a.actorID,
        f = a.color,
        g = a.hovercardAlign,
        k = a.hovercardPosition,
        l = a.target;
      a = a.weight;
      var m = d("RelayHooks").useLazyLoadQuery(
        h !== void 0
          ? h
          : (h = b("WorkCometActorLinkWithHovercardQuery.graphql")),
        { id: e }
      );
      m = m.node;
      if (m == null) {
        c("FBLogger")("wig_profile_link").mustfix(
          "WorkCometActorLinkWithHovercard " + e + " not found.",
          "work_wig"
        );
        return null;
      }
      if (
        m.__typename !== "User" &&
        m.__typename !== "Group" &&
        m.__typename !== "Page" &&
        !d("WorkroomsUtils").isWorkroomsUserType(m.__typename)
      ) {
        c("FBLogger")("wig_profile_link").mustfix(
          "ID " +
            e +
            " is not recognized as one of the supported types. Supported types: User, Page, Group, XFBWorkroomsBaseUser"
        );
        return null;
      }
      var n = m.name;
      m = m.url;
      e = {
        actorID: e,
        color: f,
        hovercardAlign: g,
        hovercardPosition: k,
        weight: a,
      };
      return i.jsx(
        j,
        babelHelpers["extends"]({ href: m, target: l }, e, {
          children: i.jsx(i.Fragment, { children: n }),
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function j(a) {
      var b = a.actorID,
        d = a.children,
        e = a.color,
        f = a.hovercardAlign,
        g = a.hovercardPosition,
        h = a.href,
        j = a.target,
        k = a.weight;
      return i.jsx(c("WorkCometActorHovercard.react"), {
        actorID: b,
        align: f,
        display: "inline",
        position: g,
        children: function (a) {
          return i.jsx(c("CometLink.react"), {
            color: e,
            href: h,
            ref: a,
            target: j,
            weight: k,
            children: d,
          });
        },
      });
    }
    j.displayName = j.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "GroupsGeminiKnowledgeViewCollectionDialog.entrypoint",
  [
    "GroupsGeminiKnowledgeViewCollectionDialogQuery$Parameters",
    "JSResourceForInteraction",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        return {
          queries: {
            root: {
              parameters: b(
                "GroupsGeminiKnowledgeViewCollectionDialogQuery$Parameters"
              ),
              variables: babelHelpers["extends"]({}, a),
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "GroupsGeminiKnowledgeViewCollectionDialog.react"
      ).__setRef("GroupsGeminiKnowledgeViewCollectionDialog.entrypoint"),
    };
    g["default"] = a;
  },
  98
);
__d(
  "HelpdeskChatOverlayConstants",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = "/helpdesk/self_service/article/";
    f.KL_ARTICLE_IFRAME_ENDPOINT = a;
  },
  66
);
__d(
  "WorkKnowledgeContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({ knowledge_id: null });
    c = b;
    g["default"] = c;
  },
  98
);
__d(
  "WorkKnowledgeHoverContainer.react",
  ["WorkGalahadHoverHelper", "react", "stylex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        container: { width: "xh8yej3", $$css: !0 },
        expanding: {
          flexBasis: "x1r8uery",
          flexGrow: "x1iyjqo2",
          flexShrink: "xs83m0k",
          $$css: !0,
        },
      };
    function a(a) {
      var b = a.children;
      a = a.expanding;
      a = a === void 0 ? !1 : a;
      var e = d("WorkGalahadHoverHelper").useHover(),
        f = e[0];
      e = e[1];
      var g = e.onMouseEnter;
      e = e.onMouseLeave;
      return h.jsx("div", {
        className: c("stylex")(a && i.expanding, i.container),
        onMouseEnter: g,
        onMouseLeave: e,
        children: b(f),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "WorkKnowledgeGeminiXMLStyleContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = { paragraphStyles: void 0, textStyles: void 0, diffHighlight: void 0 };
    c = a.createContext(b);
    g["default"] = c;
  },
  98
);
__d(
  "WorkKnowledgeGeminiXMLStyleContextProvider.react",
  ["WorkKnowledgeGeminiXMLStyleContext", "mergeDeep", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useContext,
      j = b.useMemo;
    function a(a) {
      var b = a.children,
        d = a.value,
        e = i(c("WorkKnowledgeGeminiXMLStyleContext"));
      a = j(
        function () {
          return c("mergeDeep")(e, d);
        },
        [e, d]
      );
      return h.jsx(c("WorkKnowledgeGeminiXMLStyleContext").Provider, {
        value: a,
        children: b,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "WorkKnowledgeAudienceIconAndNameUtils",
  ["fbt", "ix", "CurrentCommunity", "err", "fbicon"],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    function a(a, b) {
      switch (b) {
        case 12:
          return j(a);
        case 16:
          return k(a);
        default:
          throw c("err")("unsupported icon size");
      }
    }
    function j(a) {
      switch (a) {
        case "ADMINS_ONLY":
          return d("fbicon")._(i("497243"), 12);
        case "GROUPS":
          return d("fbicon")._(i("573122"), 12);
        case "ALL_EMPLOYEES":
          return d("fbicon")._(i("497084"), 12);
        case "PROFILE_FIELDS":
          return d("fbicon")._(i("705375"), 12);
        case "USERS":
          return d("fbicon")._(i("588044"), 12);
        case "MIXED":
          return d("fbicon")._(i("573122"), 12);
        case "INHERIT":
          return d("fbicon")._(i("510494"), 12);
        case "ADMIN_PEOPLE_SET":
          return d("fbicon")._(i("510494"), 12);
        default:
          throw c("err")("unsupported audience type");
      }
    }
    function k(a) {
      switch (a) {
        case "ADMINS_ONLY":
          return d("fbicon")._(i("497244"), 16);
        case "GROUPS":
          return d("fbicon")._(i("510946"), 16);
        case "ALL_EMPLOYEES":
          return d("fbicon")._(i("497086"), 16);
        case "PROFILE_FIELDS":
          return d("fbicon")._(i("705376"), 16);
        case "USERS":
          return d("fbicon")._(i("496905"), 16);
        case "MIXED":
          return d("fbicon")._(i("510946"), 16);
        case "INHERIT":
          return d("fbicon")._(i("483865"), 16);
        case "ADMIN_PEOPLE_SET":
          return d("fbicon")._(i("483865"), 16);
        default:
          throw c("err")("unsupported audience type");
      }
    }
    function b(a) {
      switch (a) {
        case "ADMINS_ONLY":
          return h._("Administrateurs uniquement");
        case "GROUPS":
          return h._("Groupes s\u00e9lectionn\u00e9s");
        case "ALL_EMPLOYEES":
          return c("CurrentCommunity").getName();
        case "PROFILE_FIELDS":
          return h._("Crit\u00e8re s\u00e9lectionn\u00e9");
        case "USERS":
          return h._("Personnes s\u00e9lectionn\u00e9es");
        case "MIXED":
          return h._("Personnes et groupes s\u00e9lectionn\u00e9s");
        case "INHERIT":
          return h._(
            "Inviter les m\u00eames personnes que dans la cat\u00e9gorie parent"
          );
        case "ADMIN_PEOPLE_SET":
          return h._("Invite people based on people set");
        default:
          throw c("err")("unsupported audience type");
      }
    }
    g.getAudienceTypeIcon = a;
    g.getAudienceTypeName = b;
  },
  98
);
__d(
  "WorkKnowledgeCoverPageCollectionCardContentBody.react",
  [
    "CometRelay",
    "CometTooltip.react",
    "TetraIcon.react",
    "TetraTextPairing.react",
    "WorkKnowledgeAudienceIconAndNameUtils",
    "WorkKnowledgeCoverPageCollectionCardContentBody_collection.graphql",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e,
        f = d("CometRelay").useFragment(
          h !== void 0
            ? h
            : (h = b(
                "WorkKnowledgeCoverPageCollectionCardContentBody_collection.graphql"
              )),
          a.listRef
        );
      e =
        f == null
          ? void 0
          : (e = f.effective_read_audience) == null
          ? void 0
          : e.knowledge_audience_type;
      a =
        a.showAudience &&
        e &&
        i.jsx(c("CometTooltip.react"), {
          align: "middle",
          delayMs: 100,
          forceInlineDisplay: !0,
          position: "above",
          tooltip: d(
            "WorkKnowledgeAudienceIconAndNameUtils"
          ).getAudienceTypeName(e),
          children: i.jsx(c("TetraIcon.react"), {
            color: "tertiary",
            icon: d(
              "WorkKnowledgeAudienceIconAndNameUtils"
            ).getAudienceTypeIcon(e, 12),
          }),
        });
      return i.jsx("div", {
        className: "x6ikm8r x10wlt62 xx6bls6",
        children: i.jsx("div", {
          className: "x889kno x1a8lsjc x1ye3gou xn6708d",
          children: i.jsx(c("TetraTextPairing.react"), {
            body: f.collection_content,
            bodyLineLimit: 2,
            headline: f == null ? void 0 : f.collection_title,
            headlineLineLimit: 2,
            level: 4,
            meta: a,
            metaLineLimit: 1,
            metaLocation: "above",
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
  "WorkKnowledgeCoverPageCollectionCardContentLayout.react",
  ["CometCard.react", "react", "stylex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        card: { height: "x1p19avt", $$css: !0 },
        cardContent: {
          height: "x1p19avt",
          position: "x1n2onr6",
          backgroundColor: "x9bbmet",
          $$css: !0,
        },
        cardActions: {
          position: "x10l6tqk",
          height: "xlup9mm",
          width: "x1kky2od",
          top: "xndqk7f",
          end: "xlr8s2x",
          paddingTop: "x1y1aw1k",
          paddingEnd: "x1sxyh0",
          paddingBottom: "xwib8y2",
          paddingStart: "xurb0ha",
          borderTopStartRadius: "xfh8nwu",
          borderTopEndRadius: "xoqspk4",
          borderBottomEndRadius: "x12v9rci",
          borderBottomStartRadius: "x138vmkv",
          zIndex: "x1vjfegm",
          backgroundColor: "x1vtvx1t",
          $$css: !0,
        },
        headerContainer: { display: "x78zum5", height: "x7kvr32", $$css: !0 },
      };
    function a(a) {
      return h.jsx("div", {
        className: c("stylex")(i.card, a.xstyle),
        children: h.jsx(c("CometCard.react"), {
          dropShadow: 1,
          children: h.jsxs("div", {
            className: "x1p19avt x1n2onr6 x9bbmet",
            children: [
              h.jsxs("div", {
                className: c("stylex")(i.headerContainer, a.xstyle),
                style: a.colorStyle,
                children: [
                  a.actionButton &&
                    h.jsx("div", {
                      className:
                        "x10l6tqk xlup9mm x1kky2od xndqk7f xlr8s2x x1y1aw1k x1sxyh0 xwib8y2 xurb0ha xfh8nwu xoqspk4 x12v9rci x138vmkv x1vjfegm x1vtvx1t",
                      children: a.actionButton,
                    }),
                  a.header,
                ],
              }),
              a.bodyContent,
            ],
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
  "WorkKnowledgeCoverPageCollectionCardImage.react",
  ["BaseImage.react", "react", "stylex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        image: {
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          flexGrow: "x1iyjqo2",
          $$css: !0,
        },
        imageContent: { width: "xh8yej3", objectFit: "xl1xv1r", $$css: !0 },
      };
    function a(a) {
      return h.jsx("div", {
        className: c("stylex")(i.image, a.xstyle),
        children: h.jsx(c("BaseImage.react"), {
          src: a.photoSource,
          style: { height: 114 },
          xstyle: i.imageContent,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "WorkKnowledgeTypeDefs",
  ["$InternalEnum"],
  function (a, b, c, d, e, f) {
    "use strict";
    c = b("$InternalEnum").Mirrored([
      "XL_SOLID",
      "L_SOLID",
      "L_NONE",
      "WIDE_SOLID",
      "M_SOLID",
      "S_SOLID",
      "XS_HOLLOW",
    ]);
    function a(a, b) {
      switch (a) {
        case "CANCELING":
        case "DEFAULT":
          return b === "PUBLISHED" ? "PUBLISHED" : "DRAFT";
        case "SAVING":
          return b === "PUBLISHED" ? "PUBLISHING_UPDATES" : "SAVING_DRAFT";
        case "SAVING_DRAFT":
          return "SAVING_DRAFT";
        default:
          return a;
      }
    }
    f.UnitStyle = c;
    f.getPublicationStatus = a;
  },
  66
);
__d(
  "WorkKnowledgeNavUnitStyles",
  ["WorkKnowledgeTypeDefs", "err"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a) {
        this.$1 = a;
      }
      a.forCreationPreview = function () {
        return new a(d("WorkKnowledgeTypeDefs").UnitStyle.M_SOLID);
      };
      a.forCategoryHeader = function () {
        return new a(d("WorkKnowledgeTypeDefs").UnitStyle.L_SOLID);
      };
      a.forCoverpageSubCategoryCardHeader = function () {
        return new a(d("WorkKnowledgeTypeDefs").UnitStyle.S_SOLID);
      };
      a.forCoverpageSubSubCategoryCardHeader = function () {
        return new a(d("WorkKnowledgeTypeDefs").UnitStyle.XS_HOLLOW);
      };
      a.forHomepageCategoryCardHeader = function () {
        return new a(d("WorkKnowledgeTypeDefs").UnitStyle.M_SOLID);
      };
      a.forComposerView = function () {
        return new a(d("WorkKnowledgeTypeDefs").UnitStyle.M_SOLID);
      };
      a.forSERP = function () {
        return new a(d("WorkKnowledgeTypeDefs").UnitStyle.XL_SOLID);
      };
      a.forNewSERP = function () {
        return new a(d("WorkKnowledgeTypeDefs").UnitStyle.M_SOLID);
      };
      a.forSelector = function () {
        return new a(d("WorkKnowledgeTypeDefs").UnitStyle.WIDE_SOLID);
      };
      a.fromLevel = function (b) {
        switch (b) {
          case 1:
            return new a(d("WorkKnowledgeTypeDefs").UnitStyle.M_SOLID);
          case 2:
            return new a(d("WorkKnowledgeTypeDefs").UnitStyle.S_SOLID);
          default:
            return new a(d("WorkKnowledgeTypeDefs").UnitStyle.XS_HOLLOW);
        }
      };
      var b = a.prototype;
      b.allowsIcon = function () {
        switch (this.$1) {
          case d("WorkKnowledgeTypeDefs").UnitStyle.XL_SOLID:
          case d("WorkKnowledgeTypeDefs").UnitStyle.L_SOLID:
          case d("WorkKnowledgeTypeDefs").UnitStyle.L_NONE:
          case d("WorkKnowledgeTypeDefs").UnitStyle.M_SOLID:
            return !0;
          default:
            return !1;
        }
      };
      b.getSize = function () {
        switch (this.$1) {
          case d("WorkKnowledgeTypeDefs").UnitStyle.XL_SOLID:
            return 74;
          case d("WorkKnowledgeTypeDefs").UnitStyle.L_SOLID:
          case d("WorkKnowledgeTypeDefs").UnitStyle.L_NONE:
            return 52;
          case d("WorkKnowledgeTypeDefs").UnitStyle.M_SOLID:
            return 36;
          case d("WorkKnowledgeTypeDefs").UnitStyle.S_SOLID:
            return 24;
          case d("WorkKnowledgeTypeDefs").UnitStyle.XS_HOLLOW:
            return 16;
          case d("WorkKnowledgeTypeDefs").UnitStyle.WIDE_SOLID:
            throw c("err")("unsupported style");
        }
      };
      b.getSizeStyle = function () {
        if (this.$1 === d("WorkKnowledgeTypeDefs").UnitStyle.WIDE_SOLID)
          return { height: 44, width: 44 };
        var a = this.getSize();
        return { height: a, width: a };
      };
      b.$2 = function () {
        switch (this.$1) {
          case d("WorkKnowledgeTypeDefs").UnitStyle.XL_SOLID:
          case d("WorkKnowledgeTypeDefs").UnitStyle.L_SOLID:
          case d("WorkKnowledgeTypeDefs").UnitStyle.L_NONE:
          case d("WorkKnowledgeTypeDefs").UnitStyle.M_SOLID:
          case d("WorkKnowledgeTypeDefs").UnitStyle.WIDE_SOLID:
            return null;
          case d("WorkKnowledgeTypeDefs").UnitStyle.S_SOLID:
            return 4;
          case d("WorkKnowledgeTypeDefs").UnitStyle.XS_HOLLOW:
            return 8;
        }
      };
      b.getOuterPaddingStyle = function () {
        var a = this.$2();
        return a == null ? {} : { paddingTop: a, paddingBottom: a };
      };
      b.getColorStyle = function (a) {
        switch (this.$1) {
          case d("WorkKnowledgeTypeDefs").UnitStyle.XL_SOLID:
          case d("WorkKnowledgeTypeDefs").UnitStyle.L_SOLID:
          case d("WorkKnowledgeTypeDefs").UnitStyle.M_SOLID:
          case d("WorkKnowledgeTypeDefs").UnitStyle.S_SOLID:
          case d("WorkKnowledgeTypeDefs").UnitStyle.WIDE_SOLID:
            return { backgroundColor: a };
          case d("WorkKnowledgeTypeDefs").UnitStyle.XS_HOLLOW:
            return {
              boxSizing: "border-box",
              border: "3px solid " + a,
              borderRadius: 6,
            };
          case d("WorkKnowledgeTypeDefs").UnitStyle.L_NONE:
            return { backgroundColor: void 0 };
        }
      };
      b.getIconSize = function () {
        switch (this.$1) {
          case d("WorkKnowledgeTypeDefs").UnitStyle.L_SOLID:
          case d("WorkKnowledgeTypeDefs").UnitStyle.L_NONE:
            return "24";
          default:
            return "16";
        }
      };
      b.getIconColor = function () {
        switch (this.$1) {
          case d("WorkKnowledgeTypeDefs").UnitStyle.WIDE_SOLID:
            return "black";
          default:
            return "white";
        }
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "WorkKnowledgeUtils",
  ["cssVar", "fbt", "err", "isStringNullOrEmpty"],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    function a(a) {
      switch (a) {
        case 1:
          return 2;
        case 2:
          return 3;
        case 3:
          return 4;
        case 4:
          return 5;
        default:
          throw c("err")("unsupported indentation level.");
      }
    }
    function b(a) {
      switch (a) {
        case 2:
          return 1;
        case 3:
          return 2;
        case 4:
          return 3;
        case 5:
          return 4;
        default:
          throw c("err")("unsupported indentation level.");
      }
    }
    function d(a) {
      switch (a) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          return a;
        default:
          throw c("err")("unsupported indentation level : %s", a);
      }
    }
    var j = 5,
      k = 50,
      l = 800,
      m = 150,
      n = 1e3,
      o = "65676BFF",
      p = "BADGE",
      q = "#8d8b8a",
      r = "#bcbab8",
      s = 3;
    function e(a) {
      var b = i._("Bienvenue dans la biblioth\u00e8que de connaissances");
      return c("isStringNullOrEmpty")(a) ? b : a;
    }
    function f(a) {
      var b = i._(
        "Trouvez des informations utiles sur l\u2019entreprise en un seul et m\u00eame endroit"
      );
      return c("isStringNullOrEmpty")(a) ? b : a;
    }
    function h(a) {
      return i._(
        { "*": "{number} sous-cat\u00e9gories", _1: "1 sous-cat\u00e9gorie" },
        [i._plural(a, "number")]
      );
    }
    function t(a) {
      return a
        ? i._("R\u00e9duire")
        : i._("Voir toutes les sous-cat\u00e9gories");
    }
    function u(a) {
      a = a != null ? a.split(/<.*?>/).join(" ") : "";
      return a.split(/\s+/g).filter(function (a) {
        return a.length > 0;
      }).length;
    }
    var v = i._("Vos sous-cat\u00e9gories");
    function w(a) {
      return i._(
        "Vous pouvez entrer jusqu\u2019\u00e0 {max_character_limit}\u00a0caract\u00e8res.",
        [i._param("max_character_limit", a)]
      );
    }
    g.getNextIndentLevel = a;
    g.getPreviousIndentLevel = b;
    g.getLevelTyped = d;
    g.MAX_HIERARCHY_LEVEL = j;
    g.TITLE_MAX_LENGTH = k;
    g.DESC_MAX_LENGTH = l;
    g.FILE_NAME_LIMIT_LENGTH = m;
    g.FILE_DESC_LIMIT_LENGTH = n;
    g.DEFAULT_ICON_BACKGROUND_COLOR = o;
    g.DEFAULT_ICON = p;
    g.DEFAULT_COLOR = q;
    g.DEFAULT_COLOR_DARKER = r;
    g.FILTERED_FEATURED_BUNDLES_COUNT = s;
    g.getHomeTitle = e;
    g.getHomeSubTitle = f;
    g.getSubcategoriesCount = h;
    g.getChevronLabel = t;
    g.getWordCount = u;
    g.fosteredSubcategoryRootBreadCrumbName = v;
    g.charLimitReachedMessage = w;
  },
  98
);
__d(
  "WorkKnowledgeStyleUtils",
  ["WorkKnowledgeUtils", "groupColorHSL"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      if (a != null) {
        var b = d("groupColorHSL").hexToHsl(a.slice(0, -2));
        b = b.h;
        return {
          backgroundImage:
            "linear-gradient(#" + a + ", hsl(" + b + ", 100%, 40%))",
        };
      }
      return {
        backgroundImage:
          "linear-gradient(" +
          d("WorkKnowledgeUtils").DEFAULT_COLOR +
          "," +
          d("WorkKnowledgeUtils").DEFAULT_COLOR_DARKER +
          ")",
      };
    }
    g.getGradientColorStyle = a;
  },
  98
);
__d(
  "WorkKnowledgeIconSet",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      AIRPLANE: "AIRPLANE",
      PROFILE_CIRCLE: "PROFILE_CIRCLE",
      SCALE: "SCALE",
      HEART: "HEART",
      BUILDING_CITY: "BUILDING_CITY",
      PRIVACY: "PRIVACY",
      RIBBON: "RIBBON",
      DIAGNOSED: "DIAGNOSED",
      BACKPACK: "BACKPACK",
      COIN_STACK: "COIN_STACK",
      BADGE: "BADGE",
      READING_GLASSES: "READING_GLASSES",
      RUNNING: "RUNNING",
      MENTORSHIP: "MENTORSHIP",
      DOCUMENTS: "DOCUMENTS",
      PIN_LOCAL_BUSINESS: "PIN_LOCAL_BUSINESS",
      TROPHY: "TROPHY",
      STAR: "STAR",
      FOUNDED: "FOUNDED",
      QUESTION_CIRCLE: "QUESTION_CIRCLE",
      FLASH_DEFAULT: "FLASH_DEFAULT",
      COMPASS: "COMPASS",
      BADGE_CHECKMARK: "BADGE_CHECKMARK",
      ROCKET: "ROCKET",
      ARMCHAIR: "ARMCHAIR",
      HEALTH: "HEALTH",
      VOLUNTEER: "VOLUNTEER",
      TOOTH: "TOOTH",
      FAMILY: "FAMILY",
      MORTAR_BOARD: "MORTAR_BOARD",
    });
    f["default"] = a;
  },
  66
);
__d(
  "WorkKnowledgeIconMapping",
  ["fbt", "ix", "fbicon", "nullthrows"],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = new Map([
        ["AIRPLANE", d("fbicon")._(i("562416"), 16)],
        ["PROFILE_CIRCLE", d("fbicon")._(i("486580"), 16)],
        ["SCALE", d("fbicon")._(i("566270"), 16)],
        ["HEART", d("fbicon")._(i("722857"), 16)],
        ["BUILDING_CITY", d("fbicon")._(i("497086"), 16)],
        ["PRIVACY", d("fbicon")._(i("497244"), 16)],
        ["RIBBON", d("fbicon")._(i("642550"), 16)],
        ["DIAGNOSED", d("fbicon")._(i("487069"), 16)],
        ["BACKPACK", d("fbicon")._(i("932069"), 16)],
        ["COIN_STACK", d("fbicon")._(i("688897"), 16)],
        ["BADGE", d("fbicon")._(i("496905"), 16)],
        ["READING_GLASSES", d("fbicon")._(i("923823"), 16)],
        ["RUNNING", d("fbicon")._(i("572408"), 16)],
        ["MENTORSHIP", d("fbicon")._(i("926281"), 16)],
        ["DOCUMENTS", d("fbicon")._(i("620422"), 16)],
        ["PIN_LOCAL_BUSINESS", d("fbicon")._(i("646946"), 16)],
        ["TROPHY", d("fbicon")._(i("688941"), 16)],
        ["STAR", d("fbicon")._(i("479324"), 16)],
        ["FOUNDED", d("fbicon")._(i("834046"), 16)],
        ["QUESTION_CIRCLE", d("fbicon")._(i("496949"), 16)],
        ["FLASH_DEFAULT", d("fbicon")._(i("487615"), 16)],
        ["COMPASS", d("fbicon")._(i("1083849"), 16)],
        ["BADGE_CHECKMARK", d("fbicon")._(i("478211"), 16)],
        ["ROCKET", d("fbicon")._(i("485307"), 16)],
        ["ARMCHAIR", d("fbicon")._(i("802126"), 16)],
        ["HEALTH", d("fbicon")._(i("549487"), 16)],
        ["VOLUNTEER", d("fbicon")._(i("923867"), 16)],
        ["TOOTH", d("fbicon")._(i("1135141"), 16)],
        ["FAMILY", d("fbicon")._(i("719008"), 16)],
        ["MORTAR_BOARD", d("fbicon")._(i("481934"), 16)],
      ]),
      k = new Map([
        ["AIRPLANE", d("fbicon")._(i("658655"), 24)],
        ["PROFILE_CIRCLE", d("fbicon")._(i("486582"), 24)],
        ["SCALE", d("fbicon")._(i("566272"), 24)],
        ["HEART", d("fbicon")._(i("722861"), 24)],
        ["BUILDING_CITY", d("fbicon")._(i("497090"), 24)],
        ["PRIVACY", d("fbicon")._(i("497246"), 24)],
        ["RIBBON", d("fbicon")._(i("642552"), 24)],
        ["DIAGNOSED", d("fbicon")._(i("574184"), 24)],
        ["BACKPACK", d("fbicon")._(i("932071"), 24)],
        ["COIN_STACK", d("fbicon")._(i("688899"), 24)],
        ["BADGE", d("fbicon")._(i("496908"), 24)],
        ["READING_GLASSES", d("fbicon")._(i("820965"), 24)],
        ["RUNNING", d("fbicon")._(i("572412"), 24)],
        ["MENTORSHIP", d("fbicon")._(i("926282"), 24)],
        ["DOCUMENTS", d("fbicon")._(i("711261"), 24)],
        ["PIN_LOCAL_BUSINESS", d("fbicon")._(i("778955"), 24)],
        ["TROPHY", d("fbicon")._(i("688943"), 24)],
        ["STAR", d("fbicon")._(i("479330"), 24)],
        ["FOUNDED", d("fbicon")._(i("624934"), 24)],
        ["QUESTION_CIRCLE", d("fbicon")._(i("496953"), 24)],
        ["FLASH_DEFAULT", d("fbicon")._(i("487617"), 24)],
        ["COMPASS", d("fbicon")._(i("788361"), 24)],
        ["BADGE_CHECKMARK", d("fbicon")._(i("478215"), 24)],
        ["ROCKET", d("fbicon")._(i("485309"), 24)],
        ["ARMCHAIR", d("fbicon")._(i("802132"), 24)],
        ["HEALTH", d("fbicon")._(i("549489"), 24)],
        ["VOLUNTEER", d("fbicon")._(i("780978"), 24)],
        ["TOOTH", d("fbicon")._(i("1135143"), 24)],
        ["FAMILY", d("fbicon")._(i("719010"), 24)],
        ["MORTAR_BOARD", d("fbicon")._(i("481936"), 24)],
      ]);
    f = [
      "AIRPLANE",
      "PROFILE_CIRCLE",
      "SCALE",
      "HEART",
      "BUILDING_CITY",
      "PRIVACY",
      "RIBBON",
      "DIAGNOSED",
      "BACKPACK",
      "COIN_STACK",
      "BADGE",
      "READING_GLASSES",
      "RUNNING",
      "MENTORSHIP",
      "DOCUMENTS",
      "PIN_LOCAL_BUSINESS",
      "TROPHY",
      "STAR",
      "FOUNDED",
      "QUESTION_CIRCLE",
      "FLASH_DEFAULT",
      "COMPASS",
      "BADGE_CHECKMARK",
      "ROCKET",
      "ARMCHAIR",
      "HEALTH",
      "VOLUNTEER",
      "TOOTH",
      "FAMILY",
      "MORTAR_BOARD",
    ];
    var l = new Map([
      ["AIRPLANE", h._("ic\u00f4ne\u00a0: avion")],
      ["PROFILE_CIRCLE", h._("ic\u00f4ne\u00a0: profil dans un cercle")],
      ["SCALE", h._("ic\u00f4ne\u00a0: balance")],
      ["HEART", h._("ic\u00f4ne\u00a0: c\u0153ur")],
      ["BUILDING_CITY", h._("ic\u00f4ne\u00a0: b\u00e2timents de ville")],
      ["PRIVACY", h._("ic\u00f4ne\u00a0: confidentialit\u00e9")],
      ["RIBBON", h._("ic\u00f4ne\u00a0: ruban")],
      ["DIAGNOSED", h._("ic\u00f4ne\u00a0: diagnostiqu\u00e9")],
      ["BACKPACK", h._("ic\u00f4ne\u00a0: sac \u00e0 dos")],
      ["COIN_STACK", h._("ic\u00f4ne\u00a0: pile de pi\u00e8ces")],
      ["BADGE", h._("ic\u00f4ne\u00a0: badge")],
      ["READING_GLASSES", h._("ic\u00f4ne\u00a0: lunettes de lecture")],
      ["RUNNING", h._("ic\u00f4ne\u00a0: course")],
      ["MENTORSHIP", h._("ic\u00f4ne\u00a0: mentorat")],
      ["DOCUMENTS", h._("ic\u00f4ne\u00a0: documents")],
      [
        "PIN_LOCAL_BUSINESS",
        h._("ic\u00f4ne\u00a0: localisation entreprise locale"),
      ],
      ["TROPHY", h._("ic\u00f4ne\u00a0: troph\u00e9e")],
      ["STAR", h._("ic\u00f4ne\u00a0: \u00e9toile")],
      ["FOUNDED", h._("ic\u00f4ne\u00a0: trouv\u00e9")],
      ["QUESTION_CIRCLE", h._("ic\u00f4ne\u00a0: question dans un cercle")],
      ["FLASH_DEFAULT", h._("ic\u00f4ne\u00a0: flash par d\u00e9faut")],
      ["COMPASS", h._("ic\u00f4ne\u00a0: boussole")],
      ["BADGE_CHECKMARK", h._("ic\u00f4ne\u00a0: badge avec coche")],
      ["ROCKET", h._("ic\u00f4ne\u00a0: fus\u00e9e")],
      ["ARMCHAIR", h._("ic\u00f4ne\u00a0: fauteuil")],
      ["HEALTH", h._("ic\u00f4ne\u00a0: sant\u00e9")],
      ["VOLUNTEER", h._("ic\u00f4ne\u00a0: volontaire")],
      ["TOOTH", h._("ic\u00f4ne\u00a0: dent")],
      ["FAMILY", h._("ic\u00f4ne\u00a0: famille")],
      ["MORTAR_BOARD", h._("ic\u00f4ne\u00a0: mortier")],
    ]);
    function a(a) {
      return c("nullthrows")(j.get(a));
    }
    function b(a) {
      return c("nullthrows")(k.get(a));
    }
    function e(a) {
      return c("nullthrows")(l.get(a));
    }
    g.WorkKnowledgeIconValues = f;
    g.getIconFromEnum = a;
    g.getBigIconFromEnum = b;
    g.getIconLabelFromEnum = e;
  },
  98
);
__d(
  "WorkKnowledgeTopicIconFromEnum.react",
  ["CometIcon.react", "WorkKnowledgeIconMapping", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.icon;
      a = a.unitStyle;
      return b == null
        ? null
        : h.jsx(c("CometIcon.react"), {
            color: a.getIconColor(),
            icon:
              a.getIconSize() === "24"
                ? d("WorkKnowledgeIconMapping").getBigIconFromEnum(b)
                : d("WorkKnowledgeIconMapping").getIconFromEnum(b),
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "WorkKnowledgeTopicIconUnitNonInteractive.react",
  [
    "ix",
    "CometIcon.react",
    "CometTooltip.react",
    "IconSource",
    "WorkKnowledgeUtils",
    "nullthrows",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.children,
        e = a.color,
        f = a.disabled,
        g = a.disabledTooltipLabel;
      a = a.unitStyle;
      e = (e = e) != null ? e : d("WorkKnowledgeUtils").DEFAULT_COLOR;
      e = a.getColorStyle(c("nullthrows")(e));
      e = babelHelpers["extends"]({}, e, a.getSizeStyle());
      e = i.jsx("div", {
        className:
          "xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x1afcbsf x78zum5 xl56j7k x6s0dn4",
        style: e,
        children: b,
      });
      b = new (c("IconSource"))("FB", h("1444916"), 12);
      return i.jsx("div", {
        style: babelHelpers["extends"]({}, a.getOuterPaddingStyle(), {
          position: "relative",
        }),
        children:
          f === !0
            ? i.jsxs(c("CometTooltip.react"), {
                tooltip: g,
                children: [
                  i.jsx("div", {
                    className:
                      "x10l6tqk xds687c x1v9usgg x6jxa94 x78zum5 xl56j7k x1qiirwl x14hiurz x14yjl9h xudhj91 x18nykt9 xww2gxu x13ulji7 xthkp6w x1qzcsu4 x1mlwos6 x1nn3v0j xg83lxy x1120s5i x1h0ha7o",
                    children: i.jsx(c("CometIcon.react"), {
                      color: "primary",
                      icon: b,
                      size: 8,
                    }),
                  }),
                  e,
                ],
              })
            : e,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "WorkKnowledgeTopicIconUnit.react",
  [
    "cssVar",
    "WorkKnowledgeTopicIconFromEnum.react",
    "WorkKnowledgeTopicIconUnitNonInteractive.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.hexcolor,
        d = a.icon,
        e = a.defaultColor;
      e = e === void 0 ? "#F7F8FA" : e;
      a = a.unitStyle;
      e = e;
      b != null && (e = "#" + b);
      return i.jsx(c("WorkKnowledgeTopicIconUnitNonInteractive.react"), {
        color: e,
        unitStyle: a,
        children: i.jsx(c("WorkKnowledgeTopicIconFromEnum.react"), {
          icon: d,
          unitStyle: a,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "WorkKnowledgeTopicIconUnitContainer.react",
  [
    "CometRelay",
    "WorkKnowledgeNavUnitStyles",
    "WorkKnowledgeTopicIconUnit.react",
    "WorkKnowledgeTopicIconUnitContainer.graphql",
    "WorkKnowledgeTypeDefs",
    "WorkKnowledgeUtils",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = { unpublished: { opacity: "xbyyjgo", $$css: !0 } };
    function a(a) {
      var e,
        f = d("CometRelay").useFragment(
          h !== void 0
            ? h
            : (h = b("WorkKnowledgeTopicIconUnitContainer.graphql")),
          a.collectionRef
        );
      e =
        (e = a.unitStyle) != null
          ? e
          : new (c("WorkKnowledgeNavUnitStyles"))(
              d("WorkKnowledgeTypeDefs").UnitStyle.M_SOLID
            );
      f = f == null ? void 0 : f.visual_setting;
      var g =
        f != null
          ? f == null
            ? void 0
            : f.icon
          : d("WorkKnowledgeUtils").DEFAULT_ICON;
      f =
        (f == null ? void 0 : f.hexcolor) != null
          ? f.hexcolor
          : d("WorkKnowledgeUtils").DEFAULT_ICON_BACKGROUND_COLOR;
      var k = e.allowsIcon();
      return i.jsx("div", {
        className: c("stylex")(Boolean(a.grayedOut) && j.unpublished),
        children: i.jsx(c("WorkKnowledgeTopicIconUnit.react"), {
          hexcolor: f,
          icon: k ? g : void 0,
          unitStyle: e,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "WorkKnowledgeCoverPageBaseCollectionCardContent.react",
  [
    "CometRelay",
    "WorkKnowledgeCoverPageBaseCollectionCardContent_collection.graphql",
    "WorkKnowledgeCoverPageCollectionCardContentBody.react",
    "WorkKnowledgeCoverPageCollectionCardContentLayout.react",
    "WorkKnowledgeCoverPageCollectionCardImage.react",
    "WorkKnowledgeNavUnitStyles",
    "WorkKnowledgeStyleUtils",
    "WorkKnowledgeTopicIconUnitContainer.react",
    "WorkKnowledgeTypeDefs",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = {
        icon: {
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          flexGrow: "x1iyjqo2",
          $$css: !0,
        },
        unpublished: { opacity: "xbyyjgo", $$css: !0 },
      };
    function a(a) {
      var e,
        f = d("CometRelay").useFragment(
          h !== void 0
            ? h
            : (h = b(
                "WorkKnowledgeCoverPageBaseCollectionCardContent_collection.graphql"
              )),
          a.collection
        );
      e =
        (e =
          f == null
            ? void 0
            : (e = f.home_page_document) == null
            ? void 0
            : (e = e.latest_published_version) == null
            ? void 0
            : (e = e.cover_photo_metadata) == null
            ? void 0
            : e.src) != null
          ? e
          : f == null
          ? void 0
          : (e = f.home_page_document) == null
          ? void 0
          : (e = e.cover_photo_metadata) == null
          ? void 0
          : e.src;
      var g;
      if (e == null) {
        var k;
        k = (k = f.visual_setting) == null ? void 0 : k.hexcolor;
        g = d("WorkKnowledgeStyleUtils").getGradientColorStyle(k);
      }
      k =
        e != null
          ? i.jsx(c("WorkKnowledgeCoverPageCollectionCardImage.react"), {
              photoSource: e,
              xstyle: a.xstyle,
            })
          : i.jsx("div", {
              className: "x78zum5 x6s0dn4 xl56j7k x1iyjqo2",
              children: i.jsx(c("WorkKnowledgeTopicIconUnitContainer.react"), {
                collectionRef: f,
                unitStyle: new (c("WorkKnowledgeNavUnitStyles"))(
                  d("WorkKnowledgeTypeDefs").UnitStyle.L_NONE
                ),
              }),
            });
      return i.jsx("div", {
        className: c("stylex")(
          (f == null
            ? void 0
            : (e = f.home_page_document) == null
            ? void 0
            : e.latest_published_version) === null && j.unpublished
        ),
        children: i.jsx(
          c("WorkKnowledgeCoverPageCollectionCardContentLayout.react"),
          {
            actionButton: a.actionButton,
            bodyContent: i.jsx(
              c("WorkKnowledgeCoverPageCollectionCardContentBody.react"),
              { listRef: f, showAudience: a.showAudience === !0 }
            ),
            colorStyle: g,
            header: k,
            xstyle: a.xstyle,
          }
        ),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "WorkGalahadBeeperDispatcher",
  ["ExplicitRegistrationDispatcher"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
          e[f] = arguments[f];
        return (
          ((b = c = a.call.apply(a, [this].concat(e)) || this),
          (c.dispatch = c.dispatch.bind(babelHelpers.assertThisInitialized(c))),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      return b;
    })(c("ExplicitRegistrationDispatcher"));
    b = new a({ strict: !0 });
    g["default"] = b;
  },
  98
);
__d(
  "WorkGalahadBeeperStore",
  [
    "FluxReduceStore",
    "NotificationBeeperConst",
    "WorkGalahadBeeperDispatcher",
    "filterObject",
    "mapObject",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, e;
        for (var f = arguments.length, g = new Array(f), h = 0; h < f; h++)
          g[h] = arguments[h];
        return (
          ((b = e = a.call.apply(a, [this].concat(g)) || this),
          (e.reduce = function (a, b) {
            var f;
            switch (b.type) {
              case "galahad/beeper_hide":
                return e.$WorkGalahadBeeperStore3(a);
              case "galahad/beeper_add":
                var g = a.fading
                  ? d("NotificationBeeperConst").BeepStates.PENDING
                  : d("NotificationBeeperConst").BeepStates.READY_TO_HIDE;
                return babelHelpers["extends"]({}, a, {
                  beeps: babelHelpers["extends"](
                    {},
                    a.beeps,
                    ((f = {}),
                    (f[b.beep.id] = e.$WorkGalahadBeeperStore1(b.beep, g)),
                    f)
                  ),
                });
              case "galahad/beeper_xout":
                g = a.beeps[b.beeperID];
                return g == null
                  ? a
                  : babelHelpers["extends"]({}, a, {
                      beeps: babelHelpers["extends"](
                        {},
                        a.beeps,
                        ((f = {}),
                        (f[b.beeperID] = e.$WorkGalahadBeeperStore2(g)),
                        f)
                      ),
                    });
              case "galahad/beeper_finish_hide":
                return e.$WorkGalahadBeeperStore5(
                  e.$WorkGalahadBeeperStore4(a)
                );
              case "galahad/beeper_mouse_enter":
                return babelHelpers["extends"](
                  {},
                  e.$WorkGalahadBeeperStore5(a),
                  { hovering: !0, fading: !1 }
                );
              case "galahad/beeper_mouse_leave":
                return babelHelpers["extends"]({}, a, { hovering: !1 });
              case "galahad/beepers_clear":
                return babelHelpers["extends"]({}, a, {
                  beeps: c("filterObject")(a.beeps, function (a) {
                    return a.type !== "default";
                  }),
                });
              case "galahad/chat_beepers_clear":
                return babelHelpers["extends"]({}, a, {
                  beeps: c("filterObject")(a.beeps, function (a) {
                    return a.type !== "chat";
                  }),
                });
              case "galahad/all_beepers_clear":
                return babelHelpers["extends"]({}, a, { beeps: {} });
              default:
                return a;
            }
          }),
          b) || babelHelpers.assertThisInitialized(e)
        );
      }
      var e = b.prototype;
      e.getInitialState = function () {
        return { beeps: {}, fading: !1, hovering: !1 };
      };
      e.$WorkGalahadBeeperStore1 = function (a, b) {
        return a.type === "default"
          ? babelHelpers["extends"]({}, a, { state: b })
          : babelHelpers["extends"]({}, a, { state: b });
      };
      e.$WorkGalahadBeeperStore2 = function (a) {
        return a.type === "default"
          ? babelHelpers["extends"]({}, a, { xouted: !0 })
          : babelHelpers["extends"]({}, a, { xouted: !0 });
      };
      e.$WorkGalahadBeeperStore3 = function (a) {
        var b = this;
        return babelHelpers["extends"]({}, a, {
          beeps: c("mapObject")(a.beeps, function (a) {
            return a.state ===
              d("NotificationBeeperConst").BeepStates.READY_TO_HIDE
              ? b.$WorkGalahadBeeperStore1(
                  a,
                  d("NotificationBeeperConst").BeepStates.FADING_OUT
                )
              : a;
          }),
          fading: !0,
        });
      };
      e.$WorkGalahadBeeperStore4 = function (a) {
        return !a.fading
          ? a
          : babelHelpers["extends"]({}, a, {
              beeps: c("filterObject")(a.beeps, function (a) {
                return (
                  a.state !== d("NotificationBeeperConst").BeepStates.FADING_OUT
                );
              }),
              fading: !1,
            });
      };
      e.$WorkGalahadBeeperStore5 = function (a) {
        var b = this;
        return babelHelpers["extends"]({}, a, {
          beeps: c("mapObject")(a.beeps, function (a) {
            return a.state === d("NotificationBeeperConst").BeepStates.PENDING
              ? b.$WorkGalahadBeeperStore1(
                  a,
                  d("NotificationBeeperConst").BeepStates.READY_TO_HIDE
                )
              : a;
          }),
        });
      };
      e.getRenderedBeeps = function () {
        return c("filterObject")(this.getState().beeps, function (a) {
          return (
            a.state === d("NotificationBeeperConst").BeepStates.READY_TO_HIDE
          );
        });
      };
      e.getChatBeeps = function () {
        return c("filterObject")(
          c("mapObject")(this.getState().beeps, function (a) {
            return a.type === "chat" && a.xouted !== !0 ? a : null;
          }),
          Boolean
        );
      };
      e.getBeeps = function () {
        return c("filterObject")(
          c("mapObject")(this.getState().beeps, function (a) {
            return a.type === "default" && a.xouted !== !0 ? a : null;
          }),
          Boolean
        );
      };
      return b;
    })(c("FluxReduceStore"));
    a.__moduleID = f.id;
    b = new a(c("WorkGalahadBeeperDispatcher"));
    g["default"] = b;
  },
  98
);
__d(
  "WorkGalahadBeeperActions",
  [
    "NotificationBeeperConst",
    "NotificationSound",
    "WorkGalahadBeeperDispatcher",
    "WorkGalahadBeeperStore",
    "clearTimeout",
    "forEachObject",
    "setImmediateAcrossTransitions",
    "setTimeoutAcrossTransitions",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = null,
      j = !1;
    a = function (a) {
      a.shouldPlaySound &&
        c("setImmediateAcrossTransitions")(function () {
          p(a.id);
        }),
        c("WorkGalahadBeeperDispatcher").dispatch({
          type: "galahad/beeper_add",
          beep: a,
        });
    };
    b = function (a) {
      c("WorkGalahadBeeperDispatcher").dispatch({
        type: "galahad/beeper_xout",
        beeperID: a,
      });
    };
    var k = function () {
        c("WorkGalahadBeeperDispatcher").dispatch({
          type: "galahad/beeper_finish_hide",
        });
      },
      l = function () {
        c("WorkGalahadBeeperDispatcher").dispatch({
          type: "galahad/beeper_hide",
        }),
          c("setTimeoutAcrossTransitions")(
            k,
            d("NotificationBeeperConst").FADE_OUT_LENGTH
          );
      },
      m = function (a) {
        h && c("clearTimeout")(h),
          (h = c("setTimeoutAcrossTransitions")(
            l,
            a != null ? a : d("NotificationBeeperConst").IDLE_DELAY
          ));
      };
    e = function () {
      h && c("clearTimeout")(h),
        c("setImmediateAcrossTransitions")(function () {
          c("WorkGalahadBeeperDispatcher").dispatch({
            type: "galahad/beeper_mouse_enter",
          });
          var a = c("WorkGalahadBeeperStore").getRenderedBeeps();
          c("forEachObject")(a, function (a) {
            return a.onSeen && a.onSeen();
          });
        });
    };
    f = function () {
      m(d("NotificationBeeperConst").ACTIVE_DELAY_LONG),
        c("setImmediateAcrossTransitions")(function () {
          c("WorkGalahadBeeperDispatcher").dispatch({
            type: "galahad/beeper_mouse_leave",
          });
        });
    };
    var n = function (a) {
        j = a;
      },
      o = function (a) {
        i = new (c("NotificationSound"))(a);
      },
      p = function (a) {
        return j && i != null ? i.play(a) : !1;
      },
      q = function () {
        c("WorkGalahadBeeperDispatcher").dispatch({
          type: "galahad/beepers_clear",
        });
      },
      r = function () {
        c("WorkGalahadBeeperDispatcher").dispatch({
          type: "galahad/chat_beepers_clear",
        });
      },
      s = function () {
        c("WorkGalahadBeeperDispatcher").dispatch({
          type: "galahad/all_beepers_clear",
        });
      },
      t = function (a) {
        a === "notifications" ? q() : a === "chats" && r();
      };
    g.addBeeper = a;
    g.xoutBeeper = b;
    g.waitHide = m;
    g.onMouseEnter = e;
    g.onMouseLeave = f;
    g.setSoundEnabled = n;
    g.setSoundPath = o;
    g.playSound = p;
    g.clearAllNotificationBeeps = q;
    g.clearAllChatBeeps = r;
    g.clearAllBeeps = s;
    g.clearBeepsForTabID = t;
  },
  98
);
__d(
  "WorkGalahadDispatcher",
  ["ExplicitRegistrationDispatcher"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
          e[f] = arguments[f];
        return (
          ((b = c = a.call.apply(a, [this].concat(e)) || this),
          (c.dispatch = c.dispatch.bind(babelHelpers.assertThisInitialized(c))),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      return b;
    })(c("ExplicitRegistrationDispatcher"));
    b = new a({ strict: !0 });
    g["default"] = b;
  },
  98
);
__d(
  "WorkGalahadLocalUISettingsDispatcher",
  ["ExplicitRegistrationDispatcher"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
          e[f] = arguments[f];
        return (
          ((b = c = a.call.apply(a, [this].concat(e)) || this),
          (c.dispatch = c.dispatch.bind(babelHelpers.assertThisInitialized(c))),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      return b;
    })(c("ExplicitRegistrationDispatcher"));
    b = new a({ strict: !0 });
    g["default"] = b;
  },
  98
);
__d(
  "WorkGalahadLocalUISettingsActions",
  ["WorkGalahadLocalUISettingsDispatcher"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "notifications/set_filter",
      i = "notifications/toggle_show_unread",
      j = "notifications/set_priority_badge_count_only";
    function a(a) {
      c("WorkGalahadLocalUISettingsDispatcher").dispatch({
        type: h,
        filter: a,
      });
    }
    function b() {
      c("WorkGalahadLocalUISettingsDispatcher").dispatch({ type: i });
    }
    function d(a) {
      c("WorkGalahadLocalUISettingsDispatcher").dispatch({
        type: j,
        isPriorityBadgeCountOnly: a,
      });
    }
    g.ActionSetFilterType = h;
    g.ActionToggleShowUnreadType = i;
    g.ActionSetPriorityBadgeCountOnlyType = j;
    g.setNotificationsFilter = a;
    g.toggleShowUnread = b;
    g.setPriorityBadgeCountOnly = d;
  },
  98
);
__d(
  "WorkNotificationsFilters",
  ["$InternalEnum"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("$InternalEnum").Mirrored([
      "ALL",
      "UNREAD",
      "PRIORITY",
      "CONVERSATIONS",
      "PINNED_GROUPS",
      "MULTI_COMPANY_GROUPS",
      "ALL_V2",
      "PRIORITY_V2",
      "WP4M_PRIORITY",
      "WP4M_MORE",
      "WP4M_ALL",
    ]);
    c = a;
    f["default"] = c;
  },
  66
);
__d(
  "getWorkSupportedNotificationFilters",
  ["WorkNotificationsFilters", "gkx"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      if (c("gkx")("1703310")) return h();
      if (c("gkx")("3948"))
        return [
          c("WorkNotificationsFilters").PRIORITY_V2,
          c("WorkNotificationsFilters").ALL_V2,
        ];
      if (c("gkx")("6004"))
        return [
          c("WorkNotificationsFilters").WP4M_PRIORITY,
          c("WorkNotificationsFilters").WP4M_MORE,
          c("WorkNotificationsFilters").WP4M_ALL,
          c("WorkNotificationsFilters").CONVERSATIONS,
          c("WorkNotificationsFilters").PINNED_GROUPS,
        ];
      a = (
        a
          ? [
              c("WorkNotificationsFilters").ALL,
              c("WorkNotificationsFilters").UNREAD,
              c("WorkNotificationsFilters").CONVERSATIONS,
              c("WorkNotificationsFilters").PINNED_GROUPS,
              c("WorkNotificationsFilters").PRIORITY,
            ]
          : [
              c("WorkNotificationsFilters").ALL,
              c("WorkNotificationsFilters").UNREAD,
            ]
      ).filter(Boolean);
      return a;
    }
    function h() {
      var a = [
        c("WorkNotificationsFilters").ALL,
        c("WorkNotificationsFilters").UNREAD,
      ];
      c("gkx")("2273") || a.push(c("WorkNotificationsFilters").CONVERSATIONS);
      return a;
    }
    g["default"] = a;
  },
  98
);
__d(
  "WorkGalahadLocalUISettingsStore",
  [
    "FluxReduceStore",
    "WorkGalahadLocalUISettingsActions",
    "WorkGalahadLocalUISettingsDispatcher",
    "WorkGalahadLocalUISettingsHelper",
    "WorkNotificationsFilters",
    "getWorkSupportedNotificationFilters",
    "gkx",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var e = b.prototype;
      e.getInitialState = function () {
        return {
          notifications: {
            filter: d(
              "WorkGalahadLocalUISettingsHelper"
            ).getNotificationsFilterFromStorage(),
            priorityBadgeCountOnly: d(
              "WorkGalahadLocalUISettingsHelper"
            ).getNotificationsPriorityBadgeCountOnlyFromStorage(),
            showUnread: d(
              "WorkGalahadLocalUISettingsHelper"
            ).getNotificationsShowUnreadFromStorge(),
          },
        };
      };
      e.reduce = function (a, b) {
        switch (b.type) {
          case d("WorkGalahadLocalUISettingsActions").ActionSetFilterType:
            d(
              "WorkGalahadLocalUISettingsHelper"
            ).saveNotificationsFilterToStorage(b.filter);
            return babelHelpers["extends"]({}, a, {
              notifications: babelHelpers["extends"]({}, a.notifications, {
                filter: b.filter,
              }),
            });
          case d("WorkGalahadLocalUISettingsActions")
            .ActionToggleShowUnreadType:
            var c = !a.notifications.showUnread;
            d(
              "WorkGalahadLocalUISettingsHelper"
            ).saveNotificationsShowUnreadToStorge(c);
            return babelHelpers["extends"]({}, a, {
              notifications: babelHelpers["extends"]({}, a.notifications, {
                showUnread: c,
              }),
            });
          case d("WorkGalahadLocalUISettingsActions")
            .ActionSetPriorityBadgeCountOnlyType:
            d(
              "WorkGalahadLocalUISettingsHelper"
            ).saveNotificationsPriorityBadgeCountOnlyFromStorage(
              b.isPriorityBadgeCountOnly
            );
            return babelHelpers["extends"]({}, a, {
              notifications: babelHelpers["extends"]({}, a.notifications, {
                priorityBadgeCountOnly: b.isPriorityBadgeCountOnly,
              }),
            });
          default:
            return a;
        }
      };
      e.getNotificationsFilter = function () {
        var a = this.getState().notifications.filter,
          b = c("getWorkSupportedNotificationFilters")(!0);
        if (c("gkx")("3948") || c("gkx")("6004")) {
          if (!b.includes(a)) return b[0];
        } else if (!c("WorkNotificationsFilters").isValid(a))
          return c("WorkNotificationsFilters").ALL;
        return a;
      };
      e.getNotificationsShowUnread = function () {
        return this.getState().notifications.showUnread;
      };
      e.getNotificationsPriorityBadgeCountOnly = function () {
        return this.getState().notifications.priorityBadgeCountOnly;
      };
      return b;
    })(c("FluxReduceStore"));
    a.__moduleID = f.id;
    b = new a(c("WorkGalahadLocalUISettingsDispatcher"));
    g["default"] = b;
  },
  98
);
__d(
  "FluxHooks",
  [
    "FluxContainerSubscriptions",
    "react",
    "shallowEqual",
    "useSubscriptionValue",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    e = d("react");
    var h = e.useCallback,
      i = e.useEffect,
      j = e.useRef,
      k = e.useState;
    function a(a, b, d) {
      d = h(
        function (d) {
          var e = b(a);
          return d != null && c("shallowEqual")(d, e) ? d : e;
        },
        [a, b]
      );
      var e = h(
        function (b) {
          var c = a.addListener(b);
          return function () {
            return c.remove();
          };
        },
        [a]
      );
      return c("useSubscriptionValue")({ getCurrentValue: d, subscribe: e });
    }
    function b(a, b, d, e) {
      e === void 0 && (e = c("shallowEqual"));
      var f = h(function (b) {
          var c = a(b);
          return b != null && e(b, c) ? b : c;
        }, d),
        g = h(function (a) {
          if (b.length === 0) return function () {};
          var d = new (c("FluxContainerSubscriptions"))("useCalculateState");
          d.setStores(b);
          d.addListener(a);
          return function () {
            return d.reset();
          };
        }, b);
      d = k(function () {
        return f();
      });
      var l = d[0],
        m = d[1];
      d = function () {
        m(f);
      };
      var n = j(d);
      n.current = d;
      var o = k(function () {
          return f;
        }),
        p = o[0];
      o = o[1];
      p !== f &&
        (o(function () {
          return f;
        }),
        d());
      i(
        function () {
          var a = !1,
            b = function () {
              a || n.current();
            },
            c = g(b);
          n.current();
          return function () {
            (a = !0), c();
          };
        },
        [n, g]
      );
      return [l, m];
    }
    g.useFluxStore = a;
    g.useCalculateState = b;
  },
  98
);
__d(
  "WorkGalahadLocalUISettingsHelper",
  [
    "FluxHooks",
    "MercuryFilters.bs",
    "WebStorage",
    "WorkGalahadLocalUISettingsActions",
    "WorkGalahadLocalUISettingsStore",
    "WorkNotificationsFilters",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback,
      i = "galahadNotificationFilter",
      j = "geminiNotificationsShowUnread",
      k = "geminiNotificationsPriorityBadgeCountOnly",
      l = "galahadChatsFilter";
    function m() {
      return c("WorkGalahadLocalUISettingsStore").getNotificationsFilter();
    }
    function n() {
      return c(
        "WorkGalahadLocalUISettingsStore"
      ).getNotificationsPriorityBadgeCountOnly();
    }
    function a() {
      var a = d("FluxHooks").useFluxStore(
        c("WorkGalahadLocalUISettingsStore"),
        m
      );
      return [
        a,
        function (a) {
          d("WorkGalahadLocalUISettingsActions").setNotificationsFilter(a);
        },
      ];
    }
    function o() {
      return c("WorkGalahadLocalUISettingsStore").getNotificationsShowUnread();
    }
    function b() {
      var a = d("FluxHooks").useFluxStore(
          c("WorkGalahadLocalUISettingsStore"),
          o
        ),
        b = h(function () {
          d("WorkGalahadLocalUISettingsActions").toggleShowUnread();
        }, []);
      return { toggleShowUnread: b, showUnread: a };
    }
    function e() {
      var a = c("WebStorage").getLocalStorageForRead();
      if (a) {
        a = a.getItem(i);
        if (a != null) {
          a = c("WorkNotificationsFilters").cast(a);
          if (a) return a;
        }
      }
      return c("WorkNotificationsFilters").ALL;
    }
    function f(a) {
      c("WebStorage").setItemGuarded(c("WebStorage").getLocalStorage(), i, a);
    }
    function p() {
      var a = c("WebStorage").getLocalStorageForRead();
      if (a) {
        a = a.getItem(j);
        return a === "true";
      }
      return !1;
    }
    function q(a) {
      c("WebStorage").setItemGuarded(
        c("WebStorage").getLocalStorage(),
        j,
        String(a)
      );
    }
    function r() {
      var a = c("WebStorage").getLocalStorageForRead();
      if (a) {
        a = a.getItem(k);
        return a === "true";
      }
      return !0;
    }
    function s(a) {
      c("WebStorage").setItemGuarded(
        c("WebStorage").getLocalStorage(),
        k,
        String(a)
      );
    }
    function t() {
      var a = d("FluxHooks").useFluxStore(
        c("WorkGalahadLocalUISettingsStore"),
        n
      );
      return [
        a,
        function (a) {
          d("WorkGalahadLocalUISettingsActions").setPriorityBadgeCountOnly(a);
        },
      ];
    }
    function u() {
      var a = c("WebStorage").getLocalStorageForRead();
      if (a) {
        a = a.getItem(l);
        if (a != null && d("MercuryFilters.bs").isSupportedFilter(a)) return a;
      }
      return d("MercuryFilters.bs").all;
    }
    function v(a) {
      c("WebStorage").setItemGuarded(c("WebStorage").getLocalStorage(), l, a);
    }
    g.useNotificationFilterState = a;
    g.useGeminiNotificationShowUnread = b;
    g.getNotificationsFilterFromStorage = e;
    g.saveNotificationsFilterToStorage = f;
    g.getNotificationsShowUnreadFromStorge = p;
    g.saveNotificationsShowUnreadToStorge = q;
    g.getNotificationsPriorityBadgeCountOnlyFromStorage = r;
    g.saveNotificationsPriorityBadgeCountOnlyFromStorage = s;
    g.useNotificationsPriorityBadgeCountOnlyState = t;
    g.getChatsFilterFromStorage = u;
    g.saveChatsFilterToStorage = v;
  },
  98
);
__d(
  "WorkGalahadNavActions",
  [
    "QPLUserFlow",
    "QPLUtils",
    "URI",
    "WorkGalahadBeeperActions",
    "WorkGalahadDispatcher",
    "WorkGalahadLocalUISettingsHelper",
    "qpl",
    "setImmediateAcrossTransitions",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b = a.appTabID,
        d = a.entityKey;
      a = a.uri;
      typeof a === "string" &&
        a.endsWith("?tab=security") &&
        c("QPLUserFlow").start(c("qpl")._(54263819, "5173"));
      c("WorkGalahadDispatcher").dispatch({
        type: "nav/markPendingTransition",
        appTabID: b,
        entityKey: d,
        uri: new (c("URI"))(a).getPath(),
      });
    }
    function b(a) {
      c("WorkGalahadDispatcher").dispatch({
        type: "nav/setActiveEntityKey",
        entityKey: a,
      });
    }
    function e(a) {
      a === "notifications" &&
        c("QPLUserFlow").start(c("qpl")._(57344005, "4959"), {
          instanceKey: d("QPLUtils").deriveInstanceKey(
            d(
              "WorkGalahadLocalUISettingsHelper"
            ).getNotificationsFilterFromStorage()
          ),
          annotations: { string: { reason: "TAB_CHANGED" } },
        }),
        c("WorkGalahadDispatcher").dispatch({
          type: "nav/selectAppTabID",
          appTabID: a,
        }),
        d("WorkGalahadBeeperActions").clearBeepsForTabID(a);
    }
    function f(a) {
      c("WorkGalahadDispatcher").dispatch({
        type: "nav/pushStackedChannel",
        stackedChannelData: a,
      });
    }
    function h(a) {
      c("setImmediateAcrossTransitions")(function () {
        c("WorkGalahadDispatcher").dispatch({
          type: "nav/replaceStackedChannel",
          stackedChannelData: a,
        });
      });
    }
    function i() {
      c("WorkGalahadDispatcher").dispatch({
        type: "nav/dismissStackedChannel",
      });
    }
    function j() {
      c("WorkGalahadDispatcher").dispatch({
        type: "nav/allowChannelAutoFocus",
      });
    }
    function k() {
      c("WorkGalahadDispatcher").dispatch({
        type: "nav/dismissAllStackedChannels",
      });
    }
    function l(a) {
      c("WorkGalahadDispatcher").dispatch({
        type: "nav/startLoading",
        uri: new (c("URI"))(a).getPath(),
      });
    }
    function m() {
      c("WorkGalahadDispatcher").dispatch({ type: "nav/stopLoading" });
    }
    function n(a) {
      c("WorkGalahadDispatcher").dispatch({
        type: "nav/showPublicContentBanner",
        html: a,
      });
    }
    function o() {
      c("WorkGalahadDispatcher").dispatch({
        type: "nav/hidePublicContentBanner",
      });
    }
    g.markPendingTransition = a;
    g.setActiveEntityKey = b;
    g.selectAppTabID = e;
    g.pushStackedChannel = f;
    g.replaceStackedChannel = h;
    g.dismissStackedChannel = i;
    g.allowChannelAutoFocus = j;
    g.dismissAllStackedChannels = k;
    g.startLoading = l;
    g.stopLoading = m;
    g.showPublicContentBanner = n;
    g.hidePublicContentBanner = o;
  },
  98
);
__d(
  "WorkKnowledgeEventFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("getFalcoLogPolicy_DO_NOT_USE")("805");
    b = d("FalcoLoggerInternal").create("work_knowledge_event", a);
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "XCometWorkKnowledgeBundlesControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/work/knowledge/collections/{?bundle_id}/",
      Object.freeze({}),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "XCometWorkKnowledgeWithAliasControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/work/knowledge/{?collection_id_or_alias}/{?mode}/",
      Object.freeze({}),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "XHelpdeskWorkplaceKLArticleControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/helpdesk/self_service/article/",
      Object.freeze({}),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "GeminiStackedChannelType",
  ["$InternalEnum"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("$InternalEnum").Mirrored([
      "GROUPS",
      "SUBCOMMUNITY",
      "KNOWLEDGES",
      "KNOWLEDGE_ROOT_COLLECTION",
      "KNOWLEDGE_GHOST_CATEGORY",
      "KNOWLEDGE_PRELOADED_CONTENT_CATEGORY",
      "MESSAGE_SEARCH_RESULTS",
      "MESSAGE_SEARCH_ADVANCED",
      "DATA_INTERCHANGE",
      "SEARCH",
      "WORKSTREAM",
      "RECRUITING",
      "MESSAGE_SEARCH",
      "SAFETY_CHECK",
      "CASE_CONNECT",
      "EVENTS",
      "CONTENT_MANAGER",
    ]);
    c = a;
    f["default"] = c;
  },
  66
);
__d(
  "WorkGalahadKnowledgesStackedChannel.entrypoint",
  ["JSResourceForInteraction", "WorkKnowledgesStackedChannelQuery$Parameters"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      getPreloadProps: function (a) {
        return {
          queries: {
            queryReference: {
              parameters: c("WorkKnowledgesStackedChannelQuery$Parameters"),
              variables: { nuxID: 9761, passSubcategoryPermissionsGK: !0 },
            },
          },
        };
      },
      root: c("JSResourceForInteraction")(
        "WorkKnowledgesStackedChannel.react"
      ).__setRef("WorkGalahadKnowledgesStackedChannel.entrypoint"),
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "getGeminiStackedChannelData",
  [
    "CometRelay",
    "CometRelayEnvironmentFactory",
    "createCometRelayBaseEntryPointEnvironmentProvider",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    function a(a) {
      var b;
      return {
        entrypointComponent: d("CometRelay").loadEntryPoint(
          c("createCometRelayBaseEntryPointEnvironmentProvider")(
            d("CometRelayEnvironmentFactory").CometRelayEnvironmentFactory
          ),
          a.entrypoint,
          a.preloadParams
        ),
        extraData: (b = a.extraData) != null ? b : null,
        placeholder: a.placeholder,
        props: (b = a.props) != null ? b : {},
        title: a.title,
        type: a.type,
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "getGeminiKnowledgesStackedChannelData",
  [
    "fbt",
    "ChannelGeminiItemChromeList.react",
    "GeminiStackedChannelType",
    "WorkGalahadKnowledgesStackedChannel.entrypoint",
    "getGeminiStackedChannelData",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a() {
      return c("getGeminiStackedChannelData")({
        entrypoint: c("WorkGalahadKnowledgesStackedChannel.entrypoint"),
        placeholder: i.jsx(c("ChannelGeminiItemChromeList.react"), {
          amount: 10,
          type: "groups",
        }),
        preloadParams: {},
        title: h._("Biblioth\u00e8que de connaissances"),
        type: c("GeminiStackedChannelType").KNOWLEDGES,
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "WorkKnowledgeUrls",
  [
    "ConstUriUtils",
    "HelpdeskChatOverlayConstants",
    "WorkGalahadNavActions",
    "WorkKnowledgeEventFalcoEvent",
    "XCometWorkKnowledgeBundlesControllerRouteBuilder",
    "XCometWorkKnowledgeWithAliasControllerRouteBuilder",
    "XHelpdeskWorkplaceKLArticleControllerRouteBuilder",
    "err",
    "getGeminiKnowledgesStackedChannelData",
    "goForceFullPageRedirectTo",
    "useCometRouterDispatcher",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a, b) {
      if (
        (b == null ? void 0 : b.pathname) ===
        d("HelpdeskChatOverlayConstants").KL_ARTICLE_IFRAME_ENDPOINT
      ) {
        var e = {};
        a != null && (e.article_id = a);
        e = c("XHelpdeskWorkplaceKLArticleControllerRouteBuilder").buildUri(e);
      } else {
        var f = {};
        a != null && (f.collection_id_or_alias = a);
        (b == null ? void 0 : b.enterEditMode) === !0 && (f.mode = "edit");
        e = c("XCometWorkKnowledgeWithAliasControllerRouteBuilder").buildUri(f);
      }
      if ((b == null ? void 0 : b.absoluteUrl) === !0) {
        return (a = e.getQualifiedUri()) != null ? a : e;
      }
      return e;
    }
    function i(a) {
      a = c("XCometWorkKnowledgeBundlesControllerRouteBuilder").buildURL({
        bundle_id: (a = a) != null ? a : void 0,
      });
      return (
        ((a = d("ConstUriUtils").getUri(a)) == null
          ? void 0
          : (a = a.getQualifiedUri()) == null
          ? void 0
          : a.toString()) || ""
      );
    }
    function a() {
      var a = c("useCometRouterDispatcher")();
      return function (b, d) {
        b = h(b, { enterEditMode: d == null ? void 0 : d.enterEditMode });
        var e = {};
        (d == null ? void 0 : d.versionId) != null &&
          (e.versionId = d.versionId);
        if (a != null)
          (d == null ? void 0 : d.force) === !0
            ? c("goForceFullPageRedirectTo")(b.toString())
            : a.go(b.toString(), {
                passthroughProps: e,
                onNavigate: d == null ? void 0 : d.onNavigate,
                force: (d == null ? void 0 : d.skipUnloadHooks) === !0,
              });
        else throw c("err")("Missing comet router dispatcher.");
      };
    }
    function b() {
      var a = c("useCometRouterDispatcher")();
      return function (b) {
        b = i(b);
        if (a != null) a.go(b, {});
        else throw c("err")("Missing comet router dispatcher.");
      };
    }
    function e(a, b, d, e) {
      c("WorkKnowledgeEventFalcoEvent").log(function () {
        return {
          event: e,
          knowledge_id: a,
          extra_data: { knowledge_level: b.toString(), nav_item: d },
        };
      });
    }
    function f() {
      d("WorkGalahadNavActions").pushStackedChannel(
        c("getGeminiKnowledgesStackedChannelData")()
      );
    }
    g.getKnowledgeUrl = h;
    g.getBundleUrl = i;
    g.useRedirectToKnowledge = a;
    g.useRedirectToBundles = b;
    g.logNavItemActions = e;
    g.pushKnowledgeStackedChannel = f;
  },
  98
);
__d(
  "WorkKnowledgeCoverPageCollectionCard.react",
  [
    "fbt",
    "ix",
    "CometIcon.react",
    "CometPressable.react",
    "CometRelay",
    "CometRouteURL",
    "WorkKnowledgeCoverPageBaseCollectionCardContent.react",
    "WorkKnowledgeCoverPageCollectionCard_collection.graphql",
    "WorkKnowledgeUrls",
    "fbicon",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react"),
      l = {
        borderRadius8: {
          borderTopStartRadius: "x1lq5wgf",
          borderTopEndRadius: "xgqcy7u",
          borderBottomEndRadius: "x30kzoy",
          borderBottomStartRadius: "x9jhf4c",
          $$css: !0,
        },
        cardWidth: { width: "xc5o50y", $$css: !0 },
      };
    function a(a) {
      var e = d("CometRouteURL").useRouteURLPath(),
        f = d("CometRelay").useFragment(
          j !== void 0
            ? j
            : (j = b(
                "WorkKnowledgeCoverPageCollectionCard_collection.graphql"
              )),
          a.collectionRef
        );
      e =
        (f == null ? void 0 : f.id) != null
          ? d("WorkKnowledgeUrls")
              .getKnowledgeUrl(f.id_or_alias, { pathname: e })
              .toString()
          : null;
      var g =
        a.onDelete != null
          ? k.jsx(c("CometPressable.react"), {
              "aria-label": h._("Supprimer"),
              onPress: function () {
                a.onDelete && a.onDelete();
              },
              overlayDisabled: !0,
              children: k.jsx(c("CometIcon.react"), {
                color: "primary",
                icon: d("fbicon")._(i("478232"), 16),
              }),
            })
          : void 0;
      g = k.jsx(c("WorkKnowledgeCoverPageBaseCollectionCardContent.react"), {
        actionButton: g,
        collection: f,
        xstyle: l.cardWidth,
      });
      return a.isPressable
        ? k.jsx(c("CometPressable.react"), {
            linkProps: { url: e },
            xstyle: l.borderRadius8,
            children: g,
          })
        : g;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "WorkKnowledgeDivider.react",
  ["react", "stylex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        horizontalLine: {
          height: "xjm9jq1",
          width: "xh8yej3",
          backgroundColor: "x14nfmen",
          $$css: !0,
        },
      };
    function a(a) {
      return h.jsx("div", {
        className: c("stylex")([i.horizontalLine, a.xstyle]),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "WorkKnowledgeHomeLink.react",
  [
    "CometLink.react",
    "QPLUserFlow",
    "QPLUtils",
    "WorkKnowledgeUrls",
    "qpl",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = { link: { display: "x78zum5", $$css: !0 } };
    function a(a) {
      var b = a.children,
        e = a.displayInPopup,
        f = a.id,
        g = a.isHighlighted;
      g = g === void 0 ? !1 : g;
      var j = a.level,
        k = a.onFocusChange,
        l = a.testid;
      l = a.url;
      var m;
      e == null &&
        (m = function () {
          var a;
          c("QPLUserFlow").start(c("qpl")._(559101881, "2840"), {
            annotations: { string: { location: "card" } },
            instanceKey: d("QPLUtils").deriveInstanceKey(f),
          });
          d("WorkKnowledgeUrls").logNavItemActions(
            (a = f) != null ? a : "",
            j,
            "knowledge",
            "click_collection_from_homepage"
          );
        });
      return h.jsx(c("CometLink.react"), {
        color: g ? "highlight" : "primary",
        href: l,
        onClick: e,
        onFocusChange: k,
        onPressStart: m,
        testid: void 0,
        xstyle: i.link,
        children: b,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "WorkKnowledgeHomeCategoryCardGuideLink.react",
  [
    "CometRelay",
    "CometRow.react",
    "CometRowItem.react",
    "GroupsGeminiKnowledgeViewCollectionDialog.entrypoint",
    "TetraText.react",
    "WorkCometInteractiveElementContext.react",
    "WorkKnowledgeHomeCategoryCardGuideLink_collection.graphql",
    "WorkKnowledgeHomeLink.react",
    "WorkKnowledgeUrls",
    "react",
    "useCometEntryPointDialog",
    "useHoverAndFocusState",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = d("react").useMemo;
    function a(a) {
      var e,
        f = d("CometRelay").useFragment(
          h !== void 0
            ? h
            : (h = b(
                "WorkKnowledgeHomeCategoryCardGuideLink_collection.graphql"
              )),
          a.collectionRef
        ),
        g = c("useHoverAndFocusState")(),
        k = g.focused,
        l = g.hovered,
        m = g.onFocusIn,
        n = g.onFocusOut,
        o = g.onHoverIn;
      g = g.onHoverOut;
      var p = j(
          function () {
            return { hovered: l, focused: k, pressed: !1 };
          },
          [l, k]
        ),
        q = (f == null ? void 0 : f.status) === "PUBLISHED",
        r = f == null ? void 0 : f.id,
        s = f == null ? void 0 : f.collection_title,
        t,
        u = c("useCometEntryPointDialog")(
          c("GroupsGeminiKnowledgeViewCollectionDialog.entrypoint"),
          { knowledge_id: r }
        ),
        v = u[0],
        w;
      a.displayInPopup === !0
        ? (t = function () {
            return v({});
          })
        : (w = d("WorkKnowledgeUrls")
            .getKnowledgeUrl(f.id_or_alias)
            .toString());
      return s != null
        ? i.jsx(c("WorkCometInteractiveElementContext.react").Provider, {
            value: p,
            children: i.jsx("div", {
              onMouseEnter: o,
              onMouseLeave: g,
              children: i.jsxs(c("CometRow.react"), {
                paddingHorizontal: 0,
                role: a.role,
                spacing: 8,
                verticalAlign: "center",
                children: [
                  i.jsx(c("CometRowItem.react"), {
                    expanding: !0,
                    role: "cell",
                    children: i.jsx(c("WorkKnowledgeHomeLink.react"), {
                      displayInPopup: t,
                      id: r,
                      level: 2,
                      onFocusChange: function (a) {
                        return a ? m() : n();
                      },
                      testid: void 0,
                      url: w,
                      children: i.jsx(c("TetraText.react"), {
                        color: q ? "primary" : "tertiary",
                        numberOfLines: 1,
                        testid: void 0,
                        type: "body3",
                        children: s,
                      }),
                    }),
                  }),
                  a.addOn != null
                    ? i.jsx(c("CometRowItem.react"), {
                        role: "listitem",
                        children: a.addOn,
                      })
                    : null,
                ],
              }),
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
  "WorkKnowledgeHomeCategoryCardSeeMoreFooter.react",
  [
    "fbt",
    "CometLink.react",
    "CometRow.react",
    "CometRowItem.react",
    "TetraText.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      return i.jsx(c("CometLink.react"), {
        color: "highlight",
        onClick: a.onPress,
        children: i.jsx(c("CometRow.react"), {
          align: "justify",
          paddingHorizontal: 0,
          verticalAlign: "center",
          children: i.jsx(c("CometRowItem.react"), {
            children: i.jsx(c("TetraText.react"), {
              color: "highlight",
              type: "body3",
              children: a.expanded ? h._("Voir moins") : h._("Afficher plus"),
            }),
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
  "WorkKnowledgeCoverPageCollectionCardBody.react",
  [
    "CometRelay",
    "ErrorBoundary.react",
    "WorkKnowledgeCoverPageCollectionCardBody_collection.graphql",
    "WorkKnowledgeDivider.react",
    "WorkKnowledgeHomeCategoryCardGuideLink.react",
    "WorkKnowledgeHomeCategoryCardSeeMoreFooter.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = d("react").useState,
      k = 4;
    function a(a) {
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b(
              "WorkKnowledgeCoverPageCollectionCardBody_collection.graphql"
            )),
        a.listRef
      );
      var e = j(!1),
        f = e[0],
        g = e[1];
      a =
        a == null
          ? void 0
          : (e = a.children_knowledge) == null
          ? void 0
          : e.nodes;
      if (a == null) return null;
      if (a.length === 0) return null;
      e = a.length > k;
      e && (a = f ? a : a.slice(0, k));
      return i.jsxs("div", {
        className: "x1l90r2v",
        children: [
          i.jsx(c("WorkKnowledgeDivider.react"), {}),
          i.jsx("div", {
            className: "x1iyjqo2 x12nagc",
            role: "list",
            children: a.map(function (a) {
              return i.jsx(
                c("ErrorBoundary.react"),
                {
                  children: i.jsx(
                    c("WorkKnowledgeHomeCategoryCardGuideLink.react"),
                    { collectionRef: a, displayInPopup: !1 }
                  ),
                },
                a.id
              );
            }),
          }),
          e &&
            i.jsx(c("WorkKnowledgeHomeCategoryCardSeeMoreFooter.react"), {
              expanded: f,
              onPress: function () {
                g(!f);
              },
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
  "WorkKnowledgeCoverPageCollectionCardHeader.react",
  [
    "fbt",
    "CometLink.react",
    "CometRow.react",
    "CometRowItem.react",
    "TetraText.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = {
        link: { display: "x1lliihq", $$css: !0 },
        subcategoriesCount: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          paddingStart: "x12wi22r",
          paddingBottom: "x1l90r2v",
          $$css: !0,
        },
      };
    function a(a) {
      return i.jsxs(i.Fragment, {
        children: [
          i.jsx(c("CometLink.react"), {
            href: a.url,
            xstyle: j.link,
            children: i.jsxs(c("CometRow.react"), {
              paddingHorizontal: 0,
              paddingTop: 16,
              verticalAlign: "center",
              children: [
                i.jsx(c("CometRowItem.react"), { children: a.icon }),
                i.jsx(c("CometRowItem.react"), {
                  expanding: !0,
                  children: i.jsx(c("TetraText.react"), {
                    color: "primary",
                    numberOfLines: 1,
                    type: "headline3",
                    children: a.title,
                  }),
                }),
              ],
            }),
          }),
          i.jsx("div", {
            className: "x78zum5 xdt5ytf x12wi22r x1l90r2v",
            children:
              a.subcategoriesCount != null &&
              a.subcategoriesCount > 0 &&
              i.jsx(c("TetraText.react"), {
                numberOfLines: 1,
                type: "meta3",
                children: h._(
                  {
                    "*": "{number} sous-cat\u00e9gories",
                    _1: "Une sous-cat\u00e9gorie",
                  },
                  [h._plural(a.subcategoriesCount, "number")]
                ),
              }),
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
  "WorkKnowledgeCoverPageCollectionCardHeaderContainer.react",
  [
    "CometRelay",
    "WorkKnowledgeCoverPageCollectionCardHeader.react",
    "WorkKnowledgeCoverPageCollectionCardHeaderContainer_header.graphql",
    "WorkKnowledgeNavUnitStyles",
    "WorkKnowledgeTopicIconUnitContainer.react",
    "WorkKnowledgeUrls",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e, f;
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b(
              "WorkKnowledgeCoverPageCollectionCardHeaderContainer_header.graphql"
            )),
        a.headerRef
      );
      var g = a == null ? void 0 : a.id;
      g =
        g != null
          ? d("WorkKnowledgeUrls")
              .getKnowledgeUrl(a == null ? void 0 : a.id_or_alias)
              .toString()
          : null;
      e = (e = a == null ? void 0 : a.level) != null ? e : 1;
      var j = a == null ? void 0 : a.collection_title,
        k = (a == null ? void 0 : a.status) === "PUBLISHED";
      f =
        a == null
          ? void 0
          : (f = a.children_knowledge) == null
          ? void 0
          : f.nodes;
      var l = null;
      f != null && (l = f.length);
      return i.jsx(c("WorkKnowledgeCoverPageCollectionCardHeader.react"), {
        icon: i.jsx(c("WorkKnowledgeTopicIconUnitContainer.react"), {
          collectionRef: a,
          grayedOut: !k,
          unitStyle:
            e <= 2
              ? c(
                  "WorkKnowledgeNavUnitStyles"
                ).forCoverpageSubCategoryCardHeader()
              : c(
                  "WorkKnowledgeNavUnitStyles"
                ).forCoverpageSubSubCategoryCardHeader(),
        }),
        subcategoriesCount: l,
        title: j,
        url: g,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "WorkKnowledgeCoverPageSubcategoryCard.react",
  ["CometCard.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsx("div", {
        className: "x1y1aw1k xx6bls6",
        children: h.jsx(c("CometCard.react"), {
          dropShadow: 1,
          children: h.jsx("div", {
            className: "x78zum5 xdt5ytf x9bbmet x1swvt13 x1pi30zi",
            children: a.children,
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
  "WorkKnowledgeCoverPageCollectionCardContainer.react",
  [
    "CometRelay",
    "WorkKnowledgeCoverPageCollectionCardBody.react",
    "WorkKnowledgeCoverPageCollectionCardContainer_collection.graphql",
    "WorkKnowledgeCoverPageCollectionCardHeaderContainer.react",
    "WorkKnowledgeCoverPageSubcategoryCard.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b(
              "WorkKnowledgeCoverPageCollectionCardContainer_collection.graphql"
            )),
        a.categoryRef
      );
      return i.jsxs(c("WorkKnowledgeCoverPageSubcategoryCard.react"), {
        children: [
          i.jsx(
            c("WorkKnowledgeCoverPageCollectionCardHeaderContainer.react"),
            { headerRef: a }
          ),
          i.jsx(c("WorkKnowledgeCoverPageCollectionCardBody.react"), {
            listRef: a,
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
  "WorkKnowledgeDiffHighlightMediaWrapper.react",
  [
    "ix",
    "CometIcon.react",
    "WorkKnowledgeGeminiXMLStyleContext",
    "fbicon",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = d("react").useContext,
      k = {
        container: { position: "x1n2onr6", $$css: !0 },
        overlay: {
          backgroundColor: "x1tun0q4",
          position: "x10l6tqk",
          top: "x13vifvy",
          width: "xh8yej3",
          height: "x5yr21d",
          $$css: !0,
        },
        cross: {
          position: "x10l6tqk",
          start: "xtzzx4i",
          top: "xwa60dl",
          transform: "x11lhmoz",
          $$css: !0,
        },
        addedBorder: {
          borderTop: "x1db9yw4",
          borderEnd: "xgzkv4k",
          borderBottom: "xsdkbry",
          borderStart: "xnbnn4i",
          $$css: !0,
        },
        deletedBorder: {
          borderTop: "x1puirbq",
          borderEnd: "x13xbq70",
          borderBottom: "x1nlp8eg",
          borderStart: "xbcxw7w",
          $$css: !0,
        },
        opaque: { opacity: "xuzhngd", $$css: !0 },
      };
    function a(a) {
      var b = a.children;
      a = a.xstyle;
      var e = j(c("WorkKnowledgeGeminiXMLStyleContext"));
      e = e.diffHighlight;
      switch (e) {
        case "added":
          return i.jsx("div", {
            className: c("stylex")(k.addedBorder, a),
            children: b,
          });
        case "deleted":
          return i.jsxs("div", {
            className: c("stylex")(k.container, a),
            children: [
              i.jsx("div", {
                className: "x1tun0q4 x10l6tqk x13vifvy xh8yej3 x5yr21d",
              }),
              i.jsx("div", {
                className: "x10l6tqk xtzzx4i xwa60dl x11lhmoz",
                children: i.jsx(c("CometIcon.react"), {
                  color: "white",
                  icon: d("fbicon")._(h("1190337"), 32),
                }),
              }),
              i.jsx("div", {
                className: "x1puirbq x13xbq70 x1nlp8eg xbcxw7w xuzhngd",
                children: b,
              }),
            ],
          });
        default:
          return i.jsx(i.Fragment, { children: b });
      }
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "WorkKnowledgeCoverPageCollections.react",
  [
    "fbt",
    "CometGlimmer.react",
    "CometHScroll.react",
    "CometPlaceholder.react",
    "CometRelay",
    "TetraText.react",
    "WorkKnowledgeCoverPageCollectionCard.react",
    "WorkKnowledgeCoverPageCollectionsQuery.graphql",
    "WorkKnowledgeDiffHighlightMediaWrapper.react",
    "WorkKnowledgeDivider.react",
    "filterNulls",
    "isStringNullOrEmpty",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react"),
      k = 607,
      l = 3,
      m = 218,
      n = {
        root: {
          width: "xh8yej3",
          display: "x78zum5",
          flexWrap: "x1a02dak",
          overflowX: "x14aock7",
          $$css: !0,
        },
        cometHscroll: {
          boxSizing: "x9f619",
          paddingEnd: "x4uap5",
          paddingStart: "xkhd6sd",
          width: "xh8yej3",
          justifyContent: "x1qughib",
          marginTop: "xr9ek0c",
          $$css: !0,
        },
        cards: {
          paddingTop: "x889kno",
          display: "x78zum5",
          marginStart: "xbmpl8g",
          $$css: !0,
        },
        card: { marginStart: "x1mnrxsn", marginEnd: "x1w0mnb", $$css: !0 },
        sectionHeader: { marginBottom: "xyorhqc", $$css: !0 },
        horizontalLine: { marginBottom: "x1c436fg", $$css: !0 },
        glimmerPadding: {
          marginEnd: "xq8finb",
          height: "x1p19avt",
          width: "xc5o50y",
          borderTopStartRadius: "x1lq5wgf",
          borderTopEndRadius: "xgqcy7u",
          borderBottomEndRadius: "x30kzoy",
          borderBottomStartRadius: "x9jhf4c",
          $$css: !0,
        },
        glimmers: {
          display: "x78zum5",
          alignContent: "xcdzlcm",
          marginStart: "x12mruv9",
          marginTop: "x1xmf6yo",
          $$css: !0,
        },
      };
    function o(a) {
      a = a.amount;
      var b = [];
      for (var d = 0; d < a && d < l; d++)
        b.push(
          j.jsx(
            c("CometGlimmer.react"),
            { index: d, xstyle: n.glimmerPadding },
            d
          )
        );
      return j.jsx("div", {
        className: "x78zum5 xcdzlcm x12mruv9 x1xmf6yo",
        children: b,
      });
    }
    o.displayName = o.name + " [from " + f.id + "]";
    function a(a) {
      var e = c("filterNulls")(
        Array.from(a.childNodes).map(function (a) {
          if (a instanceof Element) return a.getAttribute("knowledgeid");
        })
      );
      e = d("CometRelay").useLazyLoadQuery(
        i !== void 0
          ? i
          : (i = b("WorkKnowledgeCoverPageCollectionsQuery.graphql")),
        { ids: e },
        { fetchPolicy: "store-and-network" }
      );
      e = c("filterNulls")(
        (e == null
          ? void 0
          : (e = e.work_knowledge_base_collections) == null
          ? void 0
          : e.nodes) || []
      );
      var f = null;
      if (e.length > 0) {
        var g = e.map(function (a) {
          return j.jsx(c("WorkKnowledgeCoverPageCollectionCard.react"), {
            collectionRef: a,
            isPressable: !0,
          });
        });
        if (g.length <= l) {
          var p = g.map(function (a, b) {
            return j.jsx(
              "div",
              { className: "x1mnrxsn x1w0mnb", children: a },
              b
            );
          });
          f = j.jsx("div", {
            className: "x889kno x78zum5 xbmpl8g",
            children: p,
          });
        } else {
          p = g.map(function (a, b) {
            return j.jsx(
              d("CometHScroll.react").Child,
              {
                children: j.jsx("div", {
                  className: "x1mnrxsn x1w0mnb",
                  children: a,
                }),
              },
              b
            );
          });
          f = j.jsx("div", {
            className: "x9f619 x4uap5 xkhd6sd xh8yej3 x1qughib xr9ek0c",
            children: j.jsx(d("CometHScroll.react").Container, {
              accessibilityLabel: h._(
                "Contenu \u00e0 la une de la biblioth\u00e8que de connaissances"
              ),
              cardWidth: { type: "fixed", width: m },
              gap: 4,
              initialScrollToIndex: 0,
              maxContentWindowWidth: k,
              children: p,
            }),
          });
        }
      }
      return j.jsx(c("WorkKnowledgeDiffHighlightMediaWrapper.react"), {
        children: j.jsxs("div", {
          children: [
            !c("isStringNullOrEmpty")(a.title) &&
              j.jsxs(j.Fragment, {
                children: [
                  j.jsx("div", {
                    className: "xyorhqc",
                    children: j.jsx(c("TetraText.react"), {
                      type: "headlineEmphasized2",
                      children: a.title,
                    }),
                  }),
                  j.jsx(c("WorkKnowledgeDivider.react"), {
                    xstyle: n.horizontalLine,
                  }),
                ],
              }),
            f != null &&
              j.jsx("div", {
                className: "xh8yej3 x78zum5 x1a02dak x14aock7",
                children: j.jsx(c("CometPlaceholder.react"), {
                  fallback: j.jsx(o, { amount: e.length }),
                  children: f,
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
  "WorkKnowledgeCoverPageSubcategoriesListWrapper.react",
  [
    "CometGlimmer.react",
    "CometPlaceholder.react",
    "deferredLoadComponent",
    "react",
    "requireDeferredForDisplay",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = c("deferredLoadComponent")(
        c("requireDeferredForDisplay")(
          "WorkKnowledgeCoverPageSubcategoriesList.react"
        ).__setRef("WorkKnowledgeCoverPageSubcategoriesListWrapper.react")
      ),
      j = {
        glimmerPadding: {
          height: "x1peatla",
          borderTopStartRadius: "x1lq5wgf",
          borderTopEndRadius: "xgqcy7u",
          borderBottomEndRadius: "x30kzoy",
          borderBottomStartRadius: "x9jhf4c",
          marginBottom: "x1chd833",
          $$css: !0,
        },
        glimmers: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          marginTop: "x1xmf6yo",
          $$css: !0,
        },
      };
    function k(a) {
      a = a.amount;
      var b = [];
      for (var d = 0; d < a; d++)
        b.push(
          h.jsx(
            c("CometGlimmer.react"),
            { index: d, xstyle: j.glimmerPadding },
            d
          )
        );
      return h.jsx("div", {
        className: "x78zum5 xdt5ytf x1xmf6yo",
        children: b,
      });
    }
    k.displayName = k.name + " [from " + f.id + "]";
    function a(a) {
      return h.jsx(c("CometPlaceholder.react"), {
        fallback: h.jsx(k, { amount: a.childrenIds.length }),
        children: h.jsx(i, {
          childrenIds: a.childrenIds,
          knowledgeID: a.knowledgeID,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "WorkKnowledgeCoverPageSubcategories.react",
  [
    "TetraText.react",
    "WorkKnowledgeContext",
    "WorkKnowledgeCoverPageSubcategoriesListWrapper.react",
    "WorkKnowledgeDiffHighlightMediaWrapper.react",
    "WorkKnowledgeDivider.react",
    "filterNulls",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useContext,
      j = {
        root: {
          width: "xh8yej3",
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          flexWrap: "x1a02dak",
          marginTop: "xjv05ge",
          $$css: !0,
        },
        horizontalLine: { marginBottom: "x1c436fg", $$css: !0 },
        sectionHeader: { marginBottom: "xyorhqc", $$css: !0 },
      };
    function a(a) {
      var b = i(c("WorkKnowledgeContext"));
      b = b.knowledge_id;
      if (b == null) return null;
      var d = c("filterNulls")(
        Array.from(a.childNodes).map(function (a) {
          if (a instanceof Element) return a.getAttribute("knowledgeid");
        })
      );
      d = h.jsx(c("WorkKnowledgeCoverPageSubcategoriesListWrapper.react"), {
        childrenIds: c("filterNulls")(d),
        knowledgeID: b,
      });
      b =
        a.title != null
          ? h.jsxs(h.Fragment, {
              children: [
                h.jsx("div", {
                  className: "xyorhqc",
                  children: h.jsx(c("TetraText.react"), {
                    type: "headlineEmphasized2",
                    children: a.title,
                  }),
                }),
                h.jsx(c("WorkKnowledgeDivider.react"), {
                  xstyle: j.horizontalLine,
                }),
              ],
            })
          : null;
      return h.jsx(c("WorkKnowledgeDiffHighlightMediaWrapper.react"), {
        children: h.jsxs("div", {
          className: "xh8yej3 x78zum5 xdt5ytf x1a02dak xjv05ge",
          children: [b, d],
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "WorkKnowledgeCoverPageSubcategoriesList.react",
  [
    "CometRelay",
    "WorkKnowledgeCoverPageCollectionCardContainer.react",
    "WorkKnowledgeCoverPageSubcategoriesListQuery.graphql",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e = d("CometRelay").useLazyLoadQuery(
        h !== void 0
          ? h
          : (h = b("WorkKnowledgeCoverPageSubcategoriesListQuery.graphql")),
        { knowledge_id: a.knowledgeID },
        { fetchPolicy: "store-and-network" }
      );
      e = e.node;
      e =
        e == null
          ? void 0
          : (e = e.children_knowledge) == null
          ? void 0
          : e.nodes;
      if (e == null) return null;
      e = e.filter(function (b) {
        return (
          a.childrenIds.findIndex(function (a) {
            return a === b.id;
          }) > -1
        );
      });
      e = e.map(function (a) {
        return i.jsx(
          c("WorkKnowledgeCoverPageCollectionCardContainer.react"),
          { categoryRef: a },
          a.id
        );
      });
      return i.jsx(i.Fragment, { children: e });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "WorkKnowledgeCoverPageCollectionDummyCard.react",
  [
    "TetraText.react",
    "WorkKnowledgeCoverPageCollectionCardContentLayout.react",
    "WorkKnowledgeCoverPageCollectionCardImage.react",
    "WorkKnowledgeNavUnitStyles",
    "WorkKnowledgeStyleUtils",
    "WorkKnowledgeTopicIconUnit.react",
    "WorkKnowledgeTypeDefs",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        marginBottom2: { marginBottom: "xjpr12u", $$css: !0 },
        container: {
          bottom: "xbfrwjf",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          paddingTop: "xz9dl7a",
          paddingBottom: "xx6bls6",
          $$css: !0,
        },
        text: { marginStart: "x1d52u69", marginEnd: "xktsk01", $$css: !0 },
        title: { paddingBottom: "xsag5q8", $$css: !0 },
        cardWidth: { width: "xc5o50y", $$css: !0 },
        icon: {
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          flexGrow: "x1iyjqo2",
          $$css: !0,
        },
      },
      j = "A87CFFFF";
    function a(a) {
      var b = h.jsx(c("TetraText.react"), {
          numberOfLines: 1,
          type: "headlineEmphasized3",
          children: a.title,
        }),
        e = h.jsx("div", {
          className: "xjpr12u",
          children: h.jsx(c("TetraText.react"), {
            numberOfLines: 2,
            type: "meta4",
            children: a.subtitle,
          }),
        });
      b = h.jsx("div", {
        children: h.jsx("div", {
          className: "xbfrwjf x6ikm8r x10wlt62 xz9dl7a xx6bls6",
          children: h.jsxs("div", {
            className: "x1d52u69 xktsk01",
            children: [
              h.jsx("div", { className: "xsag5q8", children: b }),
              h.jsx("div", { children: e }),
            ],
          }),
        }),
      });
      e =
        a.photoSource != null
          ? h.jsx(c("WorkKnowledgeCoverPageCollectionCardImage.react"), {
              photoSource: a.photoSource,
            })
          : h.jsx("div", {
              className: "x78zum5 x6s0dn4 xl56j7k x1iyjqo2",
              children: h.jsx(c("WorkKnowledgeTopicIconUnit.react"), {
                hexcolor: j,
                icon: "SCALE",
                unitStyle: new (c("WorkKnowledgeNavUnitStyles"))(
                  d("WorkKnowledgeTypeDefs").UnitStyle.L_NONE
                ),
              }),
            });
      return h.jsx(
        c("WorkKnowledgeCoverPageCollectionCardContentLayout.react"),
        {
          bodyContent: b,
          colorStyle: d("WorkKnowledgeStyleUtils").getGradientColorStyle(j),
          header: e,
          xstyle: i.cardWidth,
        }
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "WorkKnowledgeCoverPageDummyCollections.react",
  [
    "fbt",
    "TetraText.react",
    "WorkKnowledgeCoverPageCollectionDummyCard.react",
    "WorkKnowledgeDivider.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = {
        root: {
          width: "xh8yej3",
          display: "x78zum5",
          flexWrap: "x1a02dak",
          $$css: !0,
        },
        cards: {
          paddingTop: "x889kno",
          marginStart: "xbmpl8g",
          display: "x78zum5",
          width: "xh8yej3",
          alignItems: "x6s0dn4",
          $$css: !0,
        },
        card: { marginStart: "x1mnrxsn", marginEnd: "x1w0mnb", $$css: !0 },
        sectionHeader: { marginBottom: "xyorhqc", $$css: !0 },
        horizontalLine: { marginBottom: "x1c436fg", $$css: !0 },
      },
      k = [
        {
          title: h._("At work"),
          subtitle: h._(
            "Here you can read about what it should be like working for our company."
          ),
          photoSource:
            "/images/work_knowledge/highlight_collection_photo_1b.jpg",
        },
        {
          title: h._("Company vision"),
          subtitle: h._("Here you can read about the vision of our company."),
          photoSource:
            "/images/work_knowledge/highlight_collection_photo_2b.jpg",
        },
        {
          title: h._("Benefits"),
          subtitle: h._(
            "Working for our company means you get to enjoy many benefits."
          ),
          photoSource: null,
        },
      ];
    function a() {
      return i.jsxs("div", {
        children: [
          i.jsx("div", {
            className: "xyorhqc",
            children: i.jsx(c("TetraText.react"), {
              type: "headlineEmphasized2",
              children: h._("\u00c0 la une"),
            }),
          }),
          i.jsx(c("WorkKnowledgeDivider.react"), { xstyle: j.horizontalLine }),
          i.jsx("div", {
            className: "xh8yej3 x78zum5 x1a02dak",
            children: i.jsx("div", {
              className: "x889kno xbmpl8g x78zum5 xh8yej3 x6s0dn4",
              children: k.map(function (a, b) {
                return i.jsx(
                  "div",
                  {
                    className: "x1mnrxsn x1w0mnb",
                    children: i.jsx(
                      c("WorkKnowledgeCoverPageCollectionDummyCard.react"),
                      {
                        photoSource: a.photoSource,
                        subtitle: a.subtitle,
                        title: a.title,
                      }
                    ),
                  },
                  b
                );
              }),
            }),
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
  "WorkKnowledgeCoverPageDummySubcategories.react",
  [
    "fbt",
    "CometRow.react",
    "CometRowItem.react",
    "TetraText.react",
    "WorkKnowledgeCoverPageCollectionCardHeader.react",
    "WorkKnowledgeCoverPageSubcategoryCard.react",
    "WorkKnowledgeDivider.react",
    "WorkKnowledgeNavUnitStyles",
    "WorkKnowledgeTopicIconUnit.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = {
        root: {
          width: "xh8yej3",
          display: "x78zum5",
          flexWrap: "x1a02dak",
          marginTop: "xjv05ge",
          $$css: !0,
        },
        list: { width: "x1q541hq", marginTop: "x1xmf6yo", $$css: !0 },
        container: { paddingBottom: "x1l90r2v", $$css: !0 },
        body: {
          paddingTop: "xyamay9",
          flexGrow: "x1iyjqo2",
          marginBottom: "x12nagc",
          $$css: !0,
        },
        hr: { borderBottom: "x15uvora", marginBottom: "xh3wvx0", $$css: !0 },
        sectionHeader: { marginBottom: "xyorhqc", $$css: !0 },
        horizontalLine: { marginBottom: "xyorhqc", $$css: !0 },
      },
      k = [
        {
          title: h._("At work"),
          subcategoriesTitles: [
            h._("Be successful"),
            h._("Shared resources"),
            h._("Work life balance"),
          ],
        },
        {
          title: h._("Company vision"),
          subcategoriesTitles: [
            h._("What is our vision"),
            h._("Why it is important"),
            h._("How to take action on it all"),
          ],
        },
        {
          title: h._("Benefits"),
          subcategoriesTitles: [h._("Salary"), h._("Pension"), h._("Time off")],
        },
      ];
    function l(a) {
      var b = a.hexcolor,
        d = a.subcategoriesTitles;
      a = a.title;
      return i.jsxs(c("WorkKnowledgeCoverPageSubcategoryCard.react"), {
        children: [
          i.jsx(c("WorkKnowledgeCoverPageCollectionCardHeader.react"), {
            icon: i.jsx(c("WorkKnowledgeTopicIconUnit.react"), {
              hexcolor: b,
              icon: void 0,
              unitStyle: c(
                "WorkKnowledgeNavUnitStyles"
              ).forCoverpageSubCategoryCardHeader(),
            }),
            subcategoriesCount: d.length,
            title: a,
            url: void 0,
          }),
          i.jsxs("div", {
            className: "x1l90r2v",
            children: [
              i.jsx("div", { className: "x15uvora xh3wvx0" }),
              i.jsx("div", {
                className: "xyamay9 x1iyjqo2 x12nagc",
                role: "list",
                children: i.jsx("div", {
                  role: "listitem",
                  children: d.map(function (a, b) {
                    return i.jsx(
                      c("CometRow.react"),
                      {
                        paddingHorizontal: 0,
                        spacing: 8,
                        verticalAlign: "center",
                        children: i.jsx(c("CometRowItem.react"), {
                          expanding: !0,
                          children: i.jsx(c("TetraText.react"), {
                            color: "primary",
                            numberOfLines: 1,
                            type: "body3",
                            children: a,
                          }),
                        }),
                      },
                      b
                    );
                  }),
                }),
              }),
            ],
          }),
        ],
      });
    }
    l.displayName = l.name + " [from " + f.id + "]";
    function a() {
      var a = i.jsx("div", {
        className: "xyorhqc",
        children: i.jsx(c("TetraText.react"), {
          type: "headlineEmphasized2",
          children: h._("Sous-cat\u00e9gories"),
        }),
      });
      return i.jsxs("div", {
        className: "xh8yej3 x78zum5 x1a02dak xjv05ge",
        children: [
          a,
          i.jsx(c("WorkKnowledgeDivider.react"), { xstyle: j.horizontalLine }),
          i.jsx(c("CometRow.react"), {
            align: "center",
            paddingHorizontal: 0,
            paddingVertical: 0,
            children: i.jsx(c("CometRowItem.react"), {
              children: i.jsx("div", {
                className: "x1q541hq x1xmf6yo",
                children: k.map(function (a, b) {
                  return i.jsx(
                    l,
                    {
                      hexcolor: "A87CFFFF",
                      subcategoriesTitles: a.subcategoriesTitles,
                      title: a.title,
                    },
                    b
                  );
                }),
              }),
            }),
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
  "WorkKnowledgeDiffHighlightedText.react",
  ["WorkKnowledgeGeminiXMLStyleContextProvider.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.children;
      a = a.type;
      switch (a) {
        case "added":
          return h.jsx(c("WorkKnowledgeGeminiXMLStyleContextProvider.react"), {
            value: {
              textStyles: { backgroundColor: "var(--positive-background)" },
            },
            children: b,
          });
        case "deleted":
          return h.jsx(c("WorkKnowledgeGeminiXMLStyleContextProvider.react"), {
            value: {
              textStyles: {
                color: "var(--secondary-text)",
                textDecoration: "line-through",
              },
            },
            children: b,
          });
        default:
          return b;
      }
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "KnowledgeNoteEventType",
  ["$InternalEnum"],
  function (a, b, c, d, e, f) {
    a = b("$InternalEnum")({
      OPEN: "OPEN",
      ENTER_FROM: "ENTER_FROM",
      PERMISSION: "PERMISSION",
      POST: "POST",
      TOOLBAR: "TOOLBAR",
      CREATE_NOTE: "CREATE_NOTE",
      CREATE_TEMPLATE: "CREATE_TEMPLATE",
      DELETE: "DELETE",
      DUPLICATE: "DUPLICATE",
      REPORT: "REPORT",
      NUX_DIALOG: "NUX_DIALOG",
      IMPRESSION: "IMPRESSION",
      PARSE_DOCUMENT: "PARSE_DOCUMENT",
      SEND_NOTIFICATION: "SEND_NOTIFICATION",
      CHANGE_SUBSCRIPTION: "CHANGE_SUBSCRIPTION",
      INLINE_ANNOTATION: "INLINE_ANNOTATION",
      TOGGLE_LINK_SHARING: "TOGGLE_LINK_SHARING",
      EXPAND_IMAGE: "EXPAND_IMAGE",
      COMPONENT_PICKER: "COMPONENT_PICKER",
      TOGGLE_COMMENTS_LOCATION: "TOGGLE_COMMENT_LOCATION",
      SHARE_TO_ROOM: "SHARE_TO_ROOM",
      LAST_HOPE: "LAST_HOPE",
      ARCHIVE_NOTE: "ARCHIVE_NOTE",
      ARCHIVE_NOTE_CLIENT_ERROR: "ARCHIVE_NOTE_CLIENT_ERROR",
      AUTO_ARCHIVE_NOTE: "AUTO_ARCHIVE_NOTE",
      CANCEL_ARCHIVE_NOTE: "CANCEL_ARCHIVE_NOTE",
      CANCEL_UNARCHIVE_NOTE: "CANCEL_UNARCHIVE_NOTE",
      CLICK_ON_WHY_IS_THIS_NOTE_ARCHIVED: "CLICK_ON_WHY_IS_THIS_NOTE_ARCHIVED",
      OPEN_ARCHIVE_MODAL: "OPEN_ARCHIVE_MODAL",
      OPEN_UNARCHIVE_MODAL: "OPEN_UNARCHIVE_MODAL",
      UNARCHIVE_NOTE: "UNARCHIVE_NOTE",
      UNARCHIVE_NOTE_CLIENT_ERROR: "UNARCHIVE_NOTE_CLIENT_ERROR",
      VIEW_ARCHIVED_NOTE: "VIEW_ARCHIVED_NOTE",
    });
    c = a;
    f["default"] = c;
  },
  66
);
__d(
  "KnowledgeNotesFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("getFalcoLogPolicy_DO_NOT_USE")("1743707");
    b = d("FalcoLoggerInternal").create("knowledge_notes", a);
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "KnowledgeNoteLogUtils",
  ["Actor", "KnowledgeNotesFalcoEvent", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useEffect;
    function i(a, b, d, e, f) {
      c("KnowledgeNotesFalcoEvent").log(function () {
        return {
          event: a,
          sub_event: b,
          user_id: e,
          note_id: d,
          target_type: null,
          target_id: null,
          extra_data: f,
        };
      });
    }
    function a(a, b, c, d, e, f) {
      i("INLINE_ANNOTATION", a, b, c, {
        inline_comment_thread_ent_id: (a = d) != null ? a : "",
        inline_comment_thread_id: (b = e) != null ? b : "",
        surface: (c = f) != null ? c : "",
      });
    }
    function b(a, b, c, d) {
      i("COMPONENT_PICKER", a, b, c, {
        component_name: (a = d) != null ? a : "",
      });
    }
    function e(a, b, c) {
      var e = d("Actor").useActor(),
        f = e[0];
      h(
        function () {
          i("OPEN", a, b, f, c);
        },
        [f, b, a, c]
      );
    }
    g.logEvent = i;
    g.logInlineAnnotationsEvent = a;
    g.logInlineComponentPickerEvent = b;
    g.useLogOnOpen = e;
  },
  98
);
__d(
  "WorkKnowledgeHyperlinkImage.react",
  [
    "ix",
    "CometCard.react",
    "CometIcon.react",
    "CometLink.react",
    "CometRow.react",
    "CometRowItem.react",
    "FocusWithinHandler.react",
    "TetraText.react",
    "WorkKnowledgeContext",
    "WorkKnowledgeEventFalcoEvent",
    "fbicon",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useContext,
      k = b.useState,
      l = {
        linkImageContainer: { position: "x1n2onr6", $$css: !0 },
        linkWrapper: {
          position: "x10l6tqk",
          maxWidth: "xqx5mla",
          bottom: "x1ey2m1c",
          transform: "x1weeur4",
          $$css: !0,
        },
        linkCard: {
          paddingTop: "xz9dl7a",
          paddingEnd: "xn6708d",
          paddingBottom: "xsag5q8",
          paddingStart: "x1ye3gou",
          $$css: !0,
        },
      };
    function a(a) {
      var b = a.image,
        e = a.link;
      a = k(!1);
      var f = a[0],
        g = a[1];
      a = j(c("WorkKnowledgeContext"));
      var m = a.knowledge_id,
        n = function () {
          c("WorkKnowledgeEventFalcoEvent").log(function () {
            return {
              event: "link_open",
              knowledge_id: m,
              extra_data: { source: "image" },
            };
          });
        };
      return i.jsx(c("FocusWithinHandler.react"), {
        children: function (a, j) {
          return i.jsxs("div", {
            className: "x1n2onr6",
            onMouseEnter: function () {
              return g(!0);
            },
            onMouseLeave: function () {
              return g(!1);
            },
            children: [
              b,
              ((a && j) || f) &&
                i.jsx("div", {
                  className: "x10l6tqk xqx5mla x1ey2m1c x1weeur4",
                  children: i.jsx(c("CometCard.react"), {
                    background: "white",
                    border: "inset",
                    dropShadow: 1,
                    xstyle: l.linkCard,
                    children: i.jsx(c("CometLink.react"), {
                      href: e,
                      onClick: n,
                      children: i.jsxs(c("CometRow.react"), {
                        paddingHorizontal: 0,
                        paddingVertical: 0,
                        verticalAlign: "center",
                        children: [
                          i.jsx(c("CometRowItem.react"), {
                            children: i.jsx(c("CometIcon.react"), {
                              color: "blueLink",
                              icon: d("fbicon")._(h("509930"), 16),
                            }),
                          }),
                          i.jsx(c("CometRowItem.react"), {
                            children: i.jsx(c("TetraText.react"), {
                              color: "highlight",
                              numberOfLines: 1,
                              type: "bodyLink3",
                              children: e,
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
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
  "WorkKnowledgePreloadedImage.react",
  [
    "fbt",
    "Actor",
    "BaseImage.react",
    "CometColumn.react",
    "CometColumnItem.react",
    "CometLink.react",
    "CometPressable.react",
    "CometRelay",
    "KnowledgeNoteLogUtils",
    "WorkKnowledgeDiffHighlightMediaWrapper.react",
    "WorkKnowledgeHyperlinkImage.react",
    "WorkKnowledgePreloadedImage_data.graphql",
    "react",
    "requireDeferred",
    "useCometDeferredDialog",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react"),
      k = d("react").useCallback,
      l = c("requireDeferred")(
        "UnifiedEditorExpandedImageDialog.react"
      ).__setRef("WorkKnowledgePreloadedImage.react"),
      m = {
        imageContent: { width: "xh8yej3", display: "x78zum5", $$css: !0 },
        imageWrapper: { "@media print_breakInside": "x13spgsm", $$css: !0 },
      };
    function n(a) {
      if (a === "right") return "end";
      return a === "left" ? "start" : "center";
    }
    var o =
      i !== void 0 ? i : (i = b("WorkKnowledgePreloadedImage_data.graphql"));
    function a(a) {
      var b = a.alt,
        e = a.halign,
        f = a.height,
        g = a.link,
        i = a.node,
        p = a.openLinkOnClick;
      a = a.width;
      i = d("CometRelay").useFragment(o, i);
      var q = i == null ? void 0 : i.url,
        r = d("Actor").useActor(),
        s = r[0],
        t = c("useCometDeferredDialog")(l, function () {
          return j.jsx(j.Fragment, {});
        });
      r = k(
        function () {
          q != null &&
            (t({ imageUri: q }),
            d("KnowledgeNoteLogUtils").logEvent("EXPAND_IMAGE", null, null, s));
        },
        [s, t, q]
      );
      if (q == null) return null;
      b = {
        alt: (b = b) != null ? b : h._("image"),
        src: q,
        style: {
          maxHeight: f != null ? f + "px" : null,
          maxWidth: a != null ? a + "px" : i == null ? void 0 : i.width,
        },
        xstyle: m.imageContent,
      };
      f =
        g != null && p != null
          ? j.jsx(c("CometLink.react"), {
              href: g,
              children: j.jsx(
                c("BaseImage.react"),
                babelHelpers["extends"]({}, b)
              ),
            })
          : j.jsx(c("CometPressable.react"), {
              "aria-label": b.alt,
              onPress: r,
              children: j.jsx(
                c("BaseImage.react"),
                babelHelpers["extends"]({}, b)
              ),
            });
      return j.jsx(c("CometColumn.react"), {
        align: n(e),
        verticalAlign: "center",
        xstyle: m.imageWrapper,
        children: j.jsx(c("CometColumnItem.react"), {
          children: j.jsx(c("WorkKnowledgeDiffHighlightMediaWrapper.react"), {
            children:
              g != null && p == null
                ? j.jsx(c("WorkKnowledgeHyperlinkImage.react"), {
                    image: f,
                    link: g,
                  })
                : f,
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
  "WorkKnowledgeEmbeddedImage.react",
  [
    "CometRelay",
    "WorkKnowledgeEmbeddedImage_image.graphql",
    "WorkKnowledgePreloadedImage.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j =
        h !== void 0 ? h : (h = b("WorkKnowledgeEmbeddedImage_image.graphql"));
    function a(a) {
      var b = a.image;
      a = babelHelpers.objectWithoutPropertiesLoose(a, ["image"]);
      b = d("CometRelay").useFragment(j, b);
      return i.jsx(
        c("WorkKnowledgePreloadedImage.react"),
        babelHelpers["extends"]({ node: b == null ? void 0 : b.data }, a)
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "WorkKnowledgeGeminiActionItemView.react",
  [
    "fbt",
    "ix",
    "CometIcon.react",
    "TetraText.react",
    "WorkCometActorLinkWithHovercard.react",
    "fbicon",
    "isStringNullOrEmpty",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function a(a) {
      var b = a.checkedBy;
      a = a.children;
      var e = !c("isStringNullOrEmpty")(b);
      return j.jsxs("div", {
        className: "x78zum5 x18d9i69 xz9dl7a xurb0ha",
        children: [
          j.jsx("div", {
            className: "x1c4vz4f xs83m0k xh6eg0u",
            children: j.jsx(c("CometIcon.react"), {
              color: "secondary",
              icon: e
                ? d("fbicon")._(i("484757"), 20)
                : d("fbicon")._(i("659288"), 20),
            }),
          }),
          j.jsxs("div", {
            className: "x1iyjqo2 x16n37ib x1gslohp",
            children: [
              j.jsx(c("TetraText.react"), { type: "body3", children: a }),
              !c("isStringNullOrEmpty")(b) &&
                j.jsx("div", {
                  className: "x1gslohp",
                  children: j.jsx(c("TetraText.react"), {
                    type: "meta4",
                    children: h._("Coch\u00e9e par {person's name}", [
                      h._param(
                        "person's name",
                        j.jsx(c("WorkCometActorLinkWithHovercard.react"), {
                          actorID: b,
                        })
                      ),
                    ]),
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
  "WorkKnowledgeInsightsEventFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("getFalcoLogPolicy_DO_NOT_USE")("2569");
    b = d("FalcoLoggerInternal").create("work_knowledge_insights_event", a);
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "WorkKnowledgeGeminiInlineLink.react",
  [
    "CometLink.react",
    "WorkKnowledgeContext",
    "WorkKnowledgeEventFalcoEvent",
    "WorkKnowledgeInsightsEventFalcoEvent",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useContext;
    function a(a) {
      var b = a.children;
      a = a.href;
      var d = i(c("WorkKnowledgeContext")),
        e = d.knowledge_id;
      return h.jsx(c("CometLink.react"), {
        color: "highlight",
        href: a,
        onPressStart:
          e != null
            ? function () {
                c("WorkKnowledgeEventFalcoEvent").log(function () {
                  return {
                    event: "link_open",
                    knowledge_id: e,
                    extra_data: { source: "text" },
                  };
                }),
                  c("WorkKnowledgeInsightsEventFalcoEvent").log(function () {
                    return { entity_event: "LINK_CLICKED", knowledge_id: e };
                  }),
                  c("WorkKnowledgeInsightsEventFalcoEvent").log(function () {
                    return { entity_event: "KL_LINK_CLICKED", knowledge_id: e };
                  });
              }
            : void 0,
        weight: "normal",
        children: b,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "WorkKnowledgeBodyText.react",
  ["WorkKnowledgeGeminiXMLStyleContextProvider.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useMemo;
    function a(a) {
      var b = a.children,
        d = a.color;
      a = a.textAlign;
      var e = i(
        function () {
          return d !== null ? { paragraphStyles: { color: d } } : null;
        },
        [d]
      );
      return h.jsx("span", {
        style: { textAlign: a },
        children:
          e != null
            ? h.jsx(c("WorkKnowledgeGeminiXMLStyleContextProvider.react"), {
                value: e,
                children: b,
              })
            : b,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "WorkKnowledgeGeminiCode.react",
  ["react", "stylex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        codeWrapper: {
          backgroundColor: "x443n21",
          fontFamily: "xhluuyv",
          fontSize: "x1pg5gke",
          marginTop: "xdj266r",
          marginBottom: "xat24cr",
          lineHeight: "x1u5lrna",
          paddingStart: "x1ye3gou",
          whiteSpace: "x126k92a",
          $$css: !0,
        },
      };
    function a(a) {
      var b = i.codeWrapper;
      return h.jsx("pre", {
        className: c("stylex")(b),
        dir: a.dir,
        children: h.jsx("code", { className: "xzsf02u", children: a.children }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "StaticContainer.react",
  ["React"],
  function (a, b, c, d, e, f, g) {
    var h = d("React");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var c = b.prototype;
      c.shouldComponentUpdate = function (a) {
        return !!a.shouldUpdate;
      };
      c.render = function () {
        var a = this.props.children;
        return a === null || a === !1 ? null : h.Children.only(a);
      };
      return b;
    })(h.Component);
    g["default"] = a;
  },
  98
);
__d(
  "ControlledRefererIFrame.react",
  [
    "ControlledReferer",
    "ControlledRefererIFrameConfig",
    "SecurePostMessage",
    "StaticContainer.react",
    "TrustedTypesNoOpPolicy_DO_NOT_USE",
    "URI",
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
      e.mountFrameRef = function (a) {
        this.frame = a;
      };
      e.updateFrame = function () {
        var a = this,
          b = this.frame;
        if (!b) return;
        this.props.onBeforeFrameRender &&
          this.props.onBeforeFrameRender(this.props);
        d("ControlledReferer").shouldUseFacebookReferer(b, function () {
          var e = b.contentWindow.document;
          e.body.innerHTML = c("TrustedTypesNoOpPolicy_DO_NOT_USE").createHTML(
            '\n        <form method="GET" id="theform"></form>\n        ' +
              d("ControlledRefererIFrameConfig").additional_markup +
              "\n      "
          );
          var f = new (c("URI"))(a.props.src).qualify(),
            g = e.getElementById("theform");
          g.action = f.toString();
          f = f.getQueryData();
          for (var h in f)
            if (Object.prototype.hasOwnProperty.call(f, h)) {
              var i = e.createElement("input");
              i.name = h;
              i.setAttribute("value", f[h]);
              i.autocomplete = "off";
              i.type = "hidden";
              g.appendChild(i);
            }
          i =
            '\n        <iframe\n          frameborder="0"\n          width="1"\n          height="1"\n          onload="document.getElementById(\'theform\').submit()"\n        />\n      ';
          if (c("isTruthy")(a.props.useTrustedHtml)) {
            g = c("TrustedTypesNoOpPolicy_DO_NOT_USE").createHTML(
              e.body.innerHTML + i
            );
            a.props.onFrameRender && a.props.onFrameRender(a.props);
            e.body.innerHTML = g;
          } else e.body.innerHTML += i;
          a.props.onFrameRender && a.props.onFrameRender(a.props);
        });
      };
      e.componentDidMount = function () {
        this.updateFrame();
      };
      e.componentDidUpdate = function (a) {
        a.src !== this.props.src && this.updateFrame();
      };
      e.UNSAFE_componentWillReceiveProps = function (a) {
        var b = this.frame;
        b &&
          (a.width !== this.props.width || a.height !== this.props.height) &&
          (a.width != null && (b.width = "" + a.width),
          a.height != null && (b.height = "" + a.height));
      };
      e.render = function () {
        var a = this,
          b = this.props;
        b.src;
        b.onFrameRender;
        b.onBeforeFrameRender;
        b.useTrustedHtml;
        b = babelHelpers.objectWithoutPropertiesLoose(b, [
          "src",
          "onFrameRender",
          "onBeforeFrameRender",
          "useTrustedHtml",
        ]);
        return h.jsx(c("StaticContainer.react"), {
          children: h.jsx(
            "iframe",
            babelHelpers["extends"]({}, b, {
              ref: function (b) {
                return a.mountFrameRef(b);
              },
            })
          ),
        });
      };
      e.postMessage = function (a, b) {
        this.frame &&
          c("SecurePostMessage").sendMessageToSpecificOrigin(
            this.frame.contentWindow,
            a,
            b
          );
      };
      return b;
    })(h.PureComponent);
    g["default"] = a;
  },
  98
);
__d(
  "WorkKnowledgeEmbeddedMedia.react",
  [
    "CometObjectFitContainerNext.react",
    "ControlledRefererIFrame.react",
    "CookieConsent",
    "WorkKnowledgeDiffHighlightMediaWrapper.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = 16 / 9;
    function a(a) {
      var b = a.height,
        d = a.url;
      a = a.width;
      a = b != null && a != null ? a / b : i;
      b = a < 1;
      var e = h.jsx("div", { className: "xh8yej3 x5yr21d" });
      return h.jsx("div", {
        className:
          "x13fuv20 x26u7qi xu3j5b3 x1q0q8m5 x972fbf xm0m39n xcfux6l x1qhh985 x9f619 x78zum5 xdt5ytf x1iyjqo2 xs83m0k x1qughib xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x1ja2u2z x6s0dn4",
        children:
          c("CookieConsent").hasConsent(2) &&
          h.jsx(c("WorkKnowledgeDiffHighlightMediaWrapper.react"), {
            children: h.jsx("div", {
              className: "xh8yej3 x5yr21d xrlsmeg",
              children: h.jsx(c("CometObjectFitContainerNext.react"), {
                containerAspectRatio: b ? 1 : a,
                containerChildrenBefore: e,
                contentAspectRatio: a,
                mode: "contain",
                showOverflow: !0,
                children: h.jsx(c("ControlledRefererIFrame.react"), {
                  allowFullScreen: !0,
                  className: "xh8yej3 x5yr21d",
                  frameBorder: 0,
                  src: d,
                }),
              }),
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
  "WorkKnowledgeVideoPlaceholder.react",
  ["WorkKnowledgeDiffHighlightMediaWrapper.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        videoWidth: { width: "xh8yej3", maxWidth: "xrlsmeg", $$css: !0 },
        placeholder: {
          width: "xh8yej3",
          height: "x5yr21d",
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          borderTop: "x1759mt3",
          borderEnd: "xorpymj",
          borderBottom: "x14igqft",
          borderStart: "x1ph8d",
          backgroundColor: "x1b9h4xk",
          position: "x10l6tqk",
          top: "x13vifvy",
          paddingTop: "xexx8yu",
          paddingEnd: "x1sxyh0",
          paddingBottom: "x18d9i69",
          paddingStart: "xurb0ha",
          boxSizing: "x9f619",
          $$css: !0,
        },
        aspectRatioWrapper: {
          paddingTop: "xrg5d16",
          position: "x1n2onr6",
          $$css: !0,
        },
        centerWrapper: {
          borderTopStyle: "x13fuv20",
          borderStartStyle: "x26u7qi",
          borderEndStyle: "xu3j5b3",
          borderBottomStyle: "x1q0q8m5",
          borderTopWidth: "x972fbf",
          borderStartWidth: "xm0m39n",
          borderEndWidth: "xcfux6l",
          borderBottomWidth: "x1qhh985",
          boxSizing: "x9f619",
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          flexGrow: "x1iyjqo2",
          flexShrink: "xs83m0k",
          justifyContent: "x1qughib",
          marginTop: "xdj266r",
          marginEnd: "x11i5rnm",
          marginBottom: "xat24cr",
          marginStart: "x1mh8g0r",
          minHeight: "x2lwn1j",
          minWidth: "xeuugli",
          paddingTop: "xexx8yu",
          paddingEnd: "x4uap5",
          paddingBottom: "x18d9i69",
          paddingStart: "xkhd6sd",
          position: "x1n2onr6",
          zIndex: "x1ja2u2z",
          alignItems: "x6s0dn4",
          width: "xh8yej3",
          $$css: !0,
        },
      };
    function a(a) {
      a = a.children;
      return h.jsx("div", {
        className:
          "x13fuv20 x26u7qi xu3j5b3 x1q0q8m5 x972fbf xm0m39n xcfux6l x1qhh985 x9f619 x78zum5 xdt5ytf x1iyjqo2 xs83m0k x1qughib xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x1ja2u2z x6s0dn4 xh8yej3",
        children: h.jsx(c("WorkKnowledgeDiffHighlightMediaWrapper.react"), {
          xstyle: i.videoWidth,
          children: h.jsx("div", {
            className: "xrg5d16 x1n2onr6 xh8yej3 xrlsmeg",
            children: h.jsx("div", {
              className:
                "xh8yej3 x5yr21d x78zum5 x6s0dn4 xl56j7k x1759mt3 xorpymj x14igqft x1ph8d x1b9h4xk x10l6tqk x13vifvy xexx8yu x1sxyh0 x18d9i69 xurb0ha x9f619",
              children: a,
            }),
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
  "WorkKnowledgeVideoError.react",
  ["fbt", "TetraText.react", "WorkKnowledgeVideoPlaceholder.react", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      return i.jsx(c("WorkKnowledgeVideoPlaceholder.react"), {
        children: i.jsx(c("TetraText.react"), {
          color: "secondary",
          type: "headlineEmphasized3",
          children: h._("Cette vid\u00e9o est indisponible actuellement."),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "WorkKnowledgePreloadedVideo.react",
  [
    "CometRelay",
    "CometUFIAnimatedImageAttachmentGIFOverlay.react",
    "VideoAutoplayLocalScopeProvider.react",
    "VideoPlayerAutoplayRulesProvider",
    "VideoPlayerCometFeedThumbnail.react",
    "VideoPlayerDefaultControls.react",
    "VideoPlayerInteractionOverlay.react",
    "VideoPlayerRelay.react",
    "VideoPlayerSurface.react",
    "WorkKnowledgeDiffHighlightMediaWrapper.react",
    "WorkKnowledgePreloadedVideo_video.graphql",
    "WorkKnowledgeVideoError.react",
    "react",
    "useVideoPlayerCometTahoeMouseInteractions",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = d("VideoPlayerAutoplayRulesProvider").provideAutoplayRules(
        "work_knowledge"
      ),
      k = d("VideoPlayerAutoplayRulesProvider").provideAutoplayRules("gif");
    function l(a) {
      var b = a.isGif;
      a = a.video;
      var e = c("useVideoPlayerCometTahoeMouseInteractions")({
        shouldUnmuteOnPlay: !b,
      });
      return i.jsxs(c("VideoPlayerSurface.react"), {
        children: [
          !b && i.jsx(c("VideoPlayerCometFeedThumbnail.react"), { video: a }),
          !b && i.jsx(c("VideoPlayerDefaultControls.react"), {}),
          !b && e != null
            ? i.jsx(
                d("VideoPlayerInteractionOverlay.react")
                  .VideoPlayerInteractionOverlay,
                { pressInteraction: e }
              )
            : null,
          b && i.jsx(c("CometUFIAnimatedImageAttachmentGIFOverlay.react"), {}),
        ],
      });
    }
    l.displayName = l.name + " [from " + f.id + "]";
    function a(a) {
      var e = a.isGif;
      a = a.node;
      a = d("CometRelay").useFragment(
        h !== void 0 ? h : (h = b("WorkKnowledgePreloadedVideo_video.graphql")),
        a
      );
      return a == null
        ? i.jsx(c("WorkKnowledgeVideoError.react"), {})
        : i.jsx("div", {
            className:
              "x13fuv20 x26u7qi xu3j5b3 x1q0q8m5 x972fbf xm0m39n xcfux6l x1qhh985 x9f619 x78zum5 xdt5ytf x1iyjqo2 xs83m0k x1qughib x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x1ja2u2z x6s0dn4 xg87l8a x11i5rnm x1iymm2a x1mh8g0r",
            children: i.jsx("div", {
              className: "xh8yej3",
              children: i.jsx(
                c("WorkKnowledgeDiffHighlightMediaWrapper.react"),
                {
                  children: i.jsx(c("VideoAutoplayLocalScopeProvider.react"), {
                    autoplayLocalRules: e ? k : j,
                    children: i.jsx(c("VideoPlayerRelay.react"), {
                      canAutoplay: e
                        ? "dangerously_always_autoplay"
                        : "do_not_autoplay",
                      errorBoundaryFallback: function (a) {
                        return i.jsx(c("WorkKnowledgeVideoError.react"), {});
                      },
                      loopCount: e ? -1 : 0,
                      portalingEnabled: !1,
                      subOrigin: e
                        ? "animated_image_share"
                        : "ufi_comment_attachment",
                      video: a,
                      children: i.jsx(l, { isGif: e, video: a }),
                    }),
                  }),
                }
              ),
            }),
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "WorkKnowledgeGeminiVideo.react",
  [
    "CometRelay",
    "WorkKnowledgeGeminiVideoQuery.graphql",
    "WorkKnowledgePreloadedVideo.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e = a.isGif;
      a = a.videoID;
      a = d("CometRelay").useLazyLoadQuery(
        h !== void 0 ? h : (h = b("WorkKnowledgeGeminiVideoQuery.graphql")),
        { id: a }
      );
      a = a.video;
      return i.jsx(c("WorkKnowledgePreloadedVideo.react"), {
        isGif: e,
        node: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "WorkKnowledgePreloadedMedia.react",
  [
    "CometRelay",
    "WorkKnowledgeEmbeddedMedia.react",
    "WorkKnowledgeGeminiVideo.react",
    "WorkKnowledgePreloadedMedia_data.graphql",
    "WorkKnowledgeVideoError.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j =
        h !== void 0 ? h : (h = b("WorkKnowledgePreloadedMedia_data.graphql"));
    function a(a) {
      a = a.node;
      a = d("CometRelay").useFragment(j, a);
      var b = i.jsx(c("WorkKnowledgeVideoError.react"), {});
      (a == null ? void 0 : a.video_id) != null
        ? (b = i.jsx(c("WorkKnowledgeGeminiVideo.react"), {
            isGif: !1,
            videoID: a.video_id,
          }))
        : (a == null ? void 0 : a.embedded_media_url) != null &&
          (b = i.jsx(c("WorkKnowledgeEmbeddedMedia.react"), {
            height: a.height,
            url: a.embedded_media_url,
            width: a.width,
          }));
      return b;
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "WorkKnowledgeGeminiEmbeddedMedia.react",
  [
    "CometRelay",
    "WorkKnowledgeGeminiEmbeddedMediaQuery.graphql",
    "WorkKnowledgePreloadedMedia.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      a = d("CometRelay").useLazyLoadQuery(
        h !== void 0
          ? h
          : (h = b("WorkKnowledgeGeminiEmbeddedMediaQuery.graphql")),
        { url: a.url }
      );
      a = a.work_knowledge_embedded_media_data;
      return i.jsx(c("WorkKnowledgePreloadedMedia.react"), { node: a });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "WorkKnowledgePreloadedMention.react",
  [
    "ActorHovercard.react",
    "CometRelay",
    "ProfileCometProfileLink.react",
    "WorkKnowledgePreloadedMention_data.graphql",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e = a.children;
      a = a.node;
      a = d("CometRelay").useFragment(
        h !== void 0
          ? h
          : (h = b("WorkKnowledgePreloadedMention_data.graphql")),
        a
      );
      return a == null
        ? i.jsx("span", { children: e })
        : i.jsx(c("ProfileCometProfileLink.react"), {
            actor: a,
            navigationSource: "work_knowledge_mention",
            testid: void 0,
            children:
              a.id != null
                ? i.jsx(c("ActorHovercard.react"), {
                    actorID: a.id,
                    display: "inline",
                    children: function (a) {
                      return i.jsx("span", {
                        className: "x117nqv4",
                        ref: a,
                        children: e,
                      });
                    },
                  })
                : i.jsx("span", { className: "x117nqv4", children: e }),
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "WorkKnowledgeGeminiMention.react",
  [
    "CometRelay",
    "WorkKnowledgeGeminiMentionQuery.graphql",
    "WorkKnowledgePreloadedMention.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e = d("CometRelay").useLazyLoadQuery(
          h !== void 0 ? h : (h = b("WorkKnowledgeGeminiMentionQuery.graphql")),
          { id: a.actorID }
        ),
        f = e.node;
      e = e.user;
      return (e == null
        ? void 0
        : (e = e.scim_company_user) == null
        ? void 0
        : e.is_anonymous) === !0
        ? i.jsx("span", { children: a.children })
        : i.jsx(c("WorkKnowledgePreloadedMention.react"), {
            node: f,
            children: a.children,
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "WorkKnowledgeTextElement.react",
  ["WorkKnowledgeGeminiXMLStyleContext", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useContext;
    function a(a) {
      a = a.children;
      var b = i(c("WorkKnowledgeGeminiXMLStyleContext"));
      b = b.textStyles;
      return h.jsx("span", { style: b, children: a });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "WorkKnowledgeGeminiNote.react",
  [
    "TetraText.react",
    "WorkKnowledgeGeminiXMLStyleContext",
    "WorkKnowledgeTextElement.react",
    "isStringNullOrEmpty",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = d("react").useContext,
      j = {
        note: {
          backgroundColor: "x1hr4nm9",
          paddingTop: "x1p5oq8j",
          paddingEnd: "xxbr6pl",
          paddingBottom: "xwxc41k",
          paddingStart: "xbbxn1n",
          borderTopStartRadius: "x1lcm9me",
          borderTopEndRadius: "x1yr5g0i",
          borderBottomEndRadius: "xrt01vj",
          borderBottomStartRadius: "x10y3i5r",
          marginTop: "xg87l8a",
          marginEnd: "x11i5rnm",
          marginBottom: "x1iymm2a",
          marginStart: "x1mh8g0r",
          $$css: !0,
        },
        negativeTopMargin: { marginTop: "xwya9rg", $$css: !0 },
        added: {
          borderTop: "x1db9yw4",
          borderEnd: "xgzkv4k",
          borderBottom: "xsdkbry",
          borderStart: "xnbnn4i",
          $$css: !0,
        },
        deleted: {
          borderTop: "x1puirbq",
          borderEnd: "x13xbq70",
          borderBottom: "x1nlp8eg",
          borderStart: "xbcxw7w",
          opacity: "xbyyjgo",
          $$css: !0,
        },
      };
    function k(a) {
      a = a.children;
      var b = i(c("WorkKnowledgeGeminiXMLStyleContext"));
      b = b.diffHighlight;
      switch (b) {
        case "added":
          return h.jsx("div", {
            className:
              "x1hr4nm9 x1p5oq8j xxbr6pl xwxc41k xbbxn1n x1lcm9me x1yr5g0i xrt01vj x10y3i5r xg87l8a x11i5rnm x1iymm2a x1mh8g0r x1db9yw4 xgzkv4k xsdkbry xnbnn4i",
            children: a,
          });
        case "deleted":
          return h.jsx("div", {
            className:
              "x1hr4nm9 x1p5oq8j xxbr6pl xwxc41k xbbxn1n x1lcm9me x1yr5g0i xrt01vj x10y3i5r xg87l8a x11i5rnm x1iymm2a x1mh8g0r x1puirbq x13xbq70 x1nlp8eg xbcxw7w xbyyjgo",
            children: a,
          });
        default:
          return h.jsx("div", {
            className:
              "x1hr4nm9 x1p5oq8j xxbr6pl xwxc41k xbbxn1n x1lcm9me x1yr5g0i xrt01vj x10y3i5r xg87l8a x11i5rnm x1iymm2a x1mh8g0r",
            children: a,
          });
      }
    }
    k.displayName = k.name + " [from " + f.id + "]";
    function a(a) {
      var b = a.title;
      return h.jsxs(k, {
        children: [
          h.jsx(c("TetraText.react"), {
            type: "headlineEmphasized3",
            children: h.jsx(c("WorkKnowledgeTextElement.react"), {
              children: b,
            }),
          }),
          h.jsx("div", {
            className: c("stylex")(
              c("isStringNullOrEmpty")(b) && j.negativeTopMargin
            ),
            children: a.children,
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
  "WorkKnowledgeGeminiPaletteImage.react",
  [
    "CometRelay",
    "WorkKnowledgeGeminiPaletteImageQuery.graphql",
    "WorkKnowledgePreloadedImage.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e = d("CometRelay").useLazyLoadQuery(
        h !== void 0
          ? h
          : (h = b("WorkKnowledgeGeminiPaletteImageQuery.graphql")),
        { provider: a.provider, image_id: a.mediaID }
      );
      e = e.work_knowledge_image_data;
      return i.jsx(c("WorkKnowledgePreloadedImage.react"), {
        alt: a.alt,
        halign: a.halign,
        height: a.height,
        link: a.link,
        node: e,
        openLinkOnClick: a.openLinkOnClick,
        width: a.width,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "WorkKnowledgeGeminiPaletteThemeProvider.react",
  ["cx", "react", "unrecoverableViolation"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.children;
      a = a.theme;
      var d = null;
      switch (a) {
        case "work-knowledge":
          d = "_8emu";
          break;
        default:
          throw c("unrecoverableViolation")(
            "unsupported theme",
            "work_knowledge"
          );
      }
      return i.jsx("div", { className: d, children: b });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "WorkKnowledgeReorderableContext.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(!1);
    c = b;
    g["default"] = c;
  },
  98
);
__d(
  "WorkKnowledgeResourceLinkContainer.react",
  [
    "fbt",
    "ix",
    "CometColumn.react",
    "CometColumnItem.react",
    "CometDeferredPopoverTrigger.react",
    "CometIcon.react",
    "CometLink.react",
    "CometPressable.react",
    "CometRow.react",
    "CometRowItem.react",
    "CometTooltip.react",
    "TetraText.react",
    "WorkKnowledgeContext",
    "WorkKnowledgeEventFalcoEvent",
    "WorkKnowledgeHoverContainer.react",
    "WorkKnowledgeInsightsEventFalcoEvent",
    "WorkKnowledgeReorderableContext.react",
    "fbicon",
    "react",
    "requireDeferred",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = d("react").useContext,
      l = c("requireDeferred")("CometMenu.react").__setRef(
        "WorkKnowledgeResourceLinkContainer.react"
      ),
      m = {
        link: { ":hover_textDecoration": "x1lku1pv", $$css: !0 },
        menu: {
          borderTopStyle: "x13fuv20",
          borderStartStyle: "x26u7qi",
          borderEndStyle: "xu3j5b3",
          borderBottomStyle: "x1q0q8m5",
          borderTopWidth: "x972fbf",
          borderStartWidth: "xm0m39n",
          borderEndWidth: "xcfux6l",
          borderBottomWidth: "x1qhh985",
          boxSizing: "x9f619",
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          flexGrow: "x1iyjqo2",
          justifyContent: "x1qughib",
          marginTop: "xdj266r",
          marginEnd: "x11i5rnm",
          marginBottom: "xat24cr",
          marginStart: "x1mh8g0r",
          minHeight: "x2lwn1j",
          minWidth: "xeuugli",
          paddingEnd: "x4uap5",
          paddingBottom: "x18d9i69",
          paddingStart: "xkhd6sd",
          position: "x1n2onr6",
          zIndex: "x1ja2u2z",
          paddingTop: "x1nn3v0j",
          flexShrink: "x2lah0s",
          width: "xvy4d1p",
          alignItems: "xuk3077",
          $$css: !0,
        },
      };
    function a(a) {
      var b = a.edit,
        e = b === void 0 ? !1 : b,
        f = babelHelpers.objectWithoutPropertiesLoose(a, ["edit"]);
      b = f.icon;
      var g = f.items;
      a = k(c("WorkKnowledgeReorderableContext.react"));
      var n = k(c("WorkKnowledgeContext")),
        o = n.knowledge_id,
        p =
          (n = f.onPressIn) != null
            ? n
            : function () {
                c("WorkKnowledgeEventFalcoEvent").log(function () {
                  return { event: "resource_link_open", knowledge_id: o };
                }),
                  o != null &&
                    c("WorkKnowledgeInsightsEventFalcoEvent").log(function () {
                      return {
                        entity_event: "KL_RESOURCE_LINK_CLICKED",
                        knowledge_id: o,
                      };
                    });
              },
        q = j.jsx(c("CometDeferredPopoverTrigger.react"), {
          align: "end",
          popoverProps: { children: g, withArrow: !0 },
          popoverResource: l,
          position: "below",
          children: function (a, b) {
            return j.jsx(c("CometPressable.react"), {
              label: h._("Ouvrir le menu du lien"),
              onPress: b,
              ref: a,
              children: j.jsx(c("CometIcon.react"), {
                color: "secondary",
                icon: d("fbicon")._(i("484386"), 16),
                size: 20,
              }),
            });
          },
        }),
        r = j.jsxs(c("CometRow.react"), {
          paddingHorizontal: 0,
          paddingTop: 0,
          spacingVertical: 0,
          children: [
            a &&
              j.jsx(c("CometRowItem.react"), {
                children: j.jsx(c("CometIcon.react"), {
                  color: "tertiary",
                  icon: d("fbicon")._(i("606966"), 16),
                }),
              }),
            j.jsx(c("CometRowItem.react"), { children: b }),
            j.jsx(c("CometRowItem.react"), {
              children: j.jsxs(c("CometColumn.react"), {
                spacing: 8,
                children: [
                  j.jsx(c("CometColumnItem.react"), {
                    children: j.jsx(c("TetraText.react"), {
                      color: "highlight",
                      type: "body2",
                      children: f.name,
                    }),
                  }),
                  f.description != null &&
                    j.jsx(c("CometColumnItem.react"), {
                      children: j.jsx(c("TetraText.react"), {
                        type: "meta4",
                        children: f.description,
                      }),
                    }),
                ],
              }),
            }),
          ],
        });
      return j.jsx(c("WorkKnowledgeHoverContainer.react"), {
        expanding: !0,
        children: function (a) {
          return j.jsxs(c("CometRow.react"), {
            paddingHorizontal: 0,
            paddingVertical: 12,
            spacingVertical: 0,
            children: [
              j.jsx(c("CometRowItem.react"), {
                children: e
                  ? j.jsx(c("CometTooltip.react"), {
                      align: "start",
                      tooltip: h._("Faites glisser pour r\u00e9organiser"),
                      children: r,
                    })
                  : j.jsx(c("CometLink.react"), {
                      href: f.href,
                      onPressStart: p,
                      xstyle: m.link,
                      children: r,
                    }),
              }),
              j.jsx(c("CometRowItem.react"), {
                children:
                  g != null &&
                  g.length > 0 &&
                  j.jsx("div", {
                    className:
                      "x13fuv20 x26u7qi xu3j5b3 x1q0q8m5 x972fbf xm0m39n xcfux6l x1qhh985 x9f619 x78zum5 xdt5ytf x1iyjqo2 x1qughib xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x4uap5 x18d9i69 xkhd6sd x1n2onr6 x1ja2u2z x1nn3v0j x2lah0s xvy4d1p xuk3077",
                    children: a && q,
                  }),
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
  "XCometWorkPDFViewerControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/work/file_viewer/{file_id}/",
      Object.freeze({}),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "WorkKnowledgeResourceFileLink.react",
  [
    "fbt",
    "ix",
    "CometIcon.react",
    "CometMenuItem.react",
    "CometRelay",
    "WorkKnowledgeContext",
    "WorkKnowledgeEventFalcoEvent",
    "WorkKnowledgeInsightsEventFalcoEvent",
    "WorkKnowledgeResourceFileLink_file.graphql",
    "WorkKnowledgeResourceLinkContainer.react",
    "XCometWorkPDFViewerControllerRouteBuilder",
    "fbicon",
    "nullthrows",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k = d("react"),
      l = d("react").useContext;
    function a(a) {
      var e = a.edit,
        f = l(c("WorkKnowledgeContext")),
        g = f.knowledge_id,
        m = d("CometRelay").useFragment(
          j !== void 0
            ? j
            : (j = b("WorkKnowledgeResourceFileLink_file.graphql")),
          a.file
        ),
        n = {
          file_size:
            m.knowledge_file_size !== null ? m.knowledge_file_size : void 0,
        };
      f =
        m.current_revision != null &&
        m.current_revision.preview_pdf_url != null;
      var o = m.app_content != null && m.app_content.preview_pdf_url != null,
        p = f || o;
      f = c("XCometWorkPDFViewerControllerRouteBuilder").buildURL({
        surface: "KNOWLEDGE_BASE",
        file_id: c("nullthrows")(m.id),
      });
      o = m.app_content ? c("nullthrows")(m.app_content.content_uri) : m.uri;
      var q = function () {
          c("WorkKnowledgeEventFalcoEvent").log(function () {
            return {
              event: "file_download",
              object_id: m.id,
              knowledge_id: g,
              extra_data: n,
            };
          }),
            g != null &&
              (c("WorkKnowledgeInsightsEventFalcoEvent").log(function () {
                return { entity_event: "FILE_DOWNLOADED", knowledge_id: g };
              }),
              c("WorkKnowledgeInsightsEventFalcoEvent").log(function () {
                return { entity_event: "KL_FILE_DOWNLOADED", knowledge_id: g };
              }));
        },
        r = function () {
          p
            ? c("WorkKnowledgeEventFalcoEvent").log(function () {
                return {
                  event: "file_preview",
                  object_id: m.id,
                  knowledge_id: g,
                  extra_data: n,
                };
              })
            : q();
        },
        s = [];
      p &&
        s.push(
          k.jsx(
            c("CometMenuItem.react"),
            {
              href: f,
              icon: d("fbicon")._(i("491231"), 20),
              onPressIn: r,
              primaryText: h._("Aper\u00e7u"),
            },
            "preview"
          )
        );
      o != null &&
        s.push(
          k.jsx(
            c("CometMenuItem.react"),
            {
              href: o,
              icon: d("fbicon")._(i("489719"), 20),
              onPressIn: q,
              primaryText: h._("T\u00e9l\u00e9charger"),
              target: "_blank",
            },
            "link"
          )
        );
      e != null &&
        (s.push(
          k.jsx(
            c("CometMenuItem.react"),
            {
              icon: d("fbicon")._(i("477831"), 20),
              onClick: e.onEditStart,
              primaryText: h._("Modifier"),
            },
            "edit"
          )
        ),
        s.push(
          k.jsx(
            c("CometMenuItem.react"),
            {
              icon: d("fbicon")._(i("483829"), 20),
              onClick: e.onDelete,
              primaryText: h._("Supprimer"),
            },
            "delete"
          )
        ));
      return k.jsx(c("WorkKnowledgeResourceLinkContainer.react"), {
        description: a.description,
        edit: e != null,
        href: p ? f : o,
        icon: k.jsx(c("CometIcon.react"), {
          color: "highlight",
          icon: d("fbicon")._(i("489713"), 20),
        }),
        items: s,
        name: a.name,
        onPressIn: r,
        popOverlabel: "File options menu",
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "WorkKnowledgeResourceFileLinkQueryWrapper.react",
  [
    "CometRelay",
    "WorkKnowledgeResourceFileLink.react",
    "WorkKnowledgeResourceFileLinkQueryWrapperQuery.graphql",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e = d("CometRelay").useLazyLoadQuery(
        h !== void 0
          ? h
          : (h = b("WorkKnowledgeResourceFileLinkQueryWrapperQuery.graphql")),
        { file_id: a.fileID }
      );
      e = e.node;
      return e == null
        ? null
        : i.jsx(c("WorkKnowledgeResourceFileLink.react"), {
            description: a.description,
            edit: a.edit,
            file: e,
            name: a.name,
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "WorkKnowledgeResourcePlaceholderFile.react",
  [
    "fbt",
    "ix",
    "CometIcon.react",
    "CometMenuItem.react",
    "WorkKnowledgeResourceLinkContainer.react",
    "fbicon",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function a(a) {
      var b = a.edit,
        e = [];
      b != null &&
        e.push(
          j.jsx(
            c("CometMenuItem.react"),
            {
              icon: d("fbicon")._(i("483829"), 20),
              onClick: b.onDelete,
              primaryText: h._("Supprimer"),
            },
            "delete"
          )
        );
      return j.jsx(c("WorkKnowledgeResourceLinkContainer.react"), {
        edit: b != null,
        href: null,
        icon: j.jsx(c("CometIcon.react"), {
          color: "highlight",
          icon: d("fbicon")._(i("489713"), 20),
        }),
        items: e,
        name: a.name,
        popOverlabel: "File options menu",
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "WorkKnowledgeGeminiResourceFileLink.react",
  [
    "CometPlaceholder.react",
    "WorkKnowledgeResourceFileLinkQueryWrapper.react",
    "WorkKnowledgeResourcePlaceholderFile.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsx(c("CometPlaceholder.react"), {
        fallback: null,
        children: a.placeholderMode
          ? h.jsx(c("WorkKnowledgeResourcePlaceholderFile.react"), {
              name: a.name,
            })
          : h.jsx(c("WorkKnowledgeResourceFileLinkQueryWrapper.react"), {
              description: a.description,
              fileID: a.fileID,
              name: a.name,
            }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "WorkKnowledgeGeminiResourceSection.react",
  [
    "TetraText.react",
    "WorkKnowledgeDivider.react",
    "WorkKnowledgeTextElement.react",
    "isStringNullOrEmpty",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        resourceSection: {
          marginTop: "x1coevs8",
          marginEnd: "x11i5rnm",
          marginBottom: "xui9b5u",
          marginStart: "x1mh8g0r",
          $$css: !0,
        },
        resourceSectionHeader: { marginBottom: "xyorhqc", $$css: !0 },
        horizontalLine: { marginBottom: "x1hq5gj4", $$css: !0 },
      };
    function a(a) {
      var b = a.title;
      return h.jsx("div", {
        className: "x1coevs8 x11i5rnm xui9b5u x1mh8g0r",
        children: c("isStringNullOrEmpty")(b)
          ? a.children
          : h.jsxs(h.Fragment, {
              children: [
                h.jsx("div", {
                  className: "xyorhqc",
                  children: h.jsx(c("TetraText.react"), {
                    type: "headlineEmphasized2",
                    children: h.jsx(c("WorkKnowledgeTextElement.react"), {
                      children: b,
                    }),
                  }),
                }),
                h.jsx(c("WorkKnowledgeDivider.react"), {
                  xstyle: i.horizontalLine,
                }),
                a.children,
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
  "WorkKnowledgeGeminiTable.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      a = a.children;
      a = h.Children.toArray(a).filter(function (a) {
        return (
          (a == null
            ? void 0
            : (a = a.props) == null
            ? void 0
            : (a = a.domElement) == null
            ? void 0
            : a.localName) === "table-row"
        );
      });
      return h.jsx("div", {
        className:
          "x78zum5 xdt5ytf xeq5yr9 x193iq5w x1n2xptk x1rr5fae xqui205 xod5an3 xw2csxc",
        children: a,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "WorkKnowledgeGeminiTableCell.react",
  ["WorkKnowledgeGeminiXMLStyleContextProvider.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.children,
        d = a.width == null ? "100" : a.width;
      d = {
        width: parseInt(d, 10),
        backgroundColor: a.isHeader ? "var(--comment-background)" : "inherit",
      };
      return h.jsx("div", {
        className: "xkbpzyx x1y1aw1k x1sxyh0 xwib8y2 xurb0ha x2lah0s",
        style: d,
        children: h.jsx(c("WorkKnowledgeGeminiXMLStyleContextProvider.react"), {
          value: {
            textStyles: {
              fontSize: "15px",
              fontWeight: a.isHeader ? 700 : "inherit",
            },
            paragraphStyles: { marginTop: 0 },
          },
          children: b,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "WorkKnowledgeGeminiTableRow.react",
  ["WorkKnowledgeGeminiXMLStyleContextProvider.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.header === "true";
      return b
        ? h.jsx(c("WorkKnowledgeGeminiXMLStyleContextProvider.react"), {
            value: { textStyles: { fontWeight: 700 } },
            children: h.jsx("div", { className: i(b), children: a.children }),
          })
        : h.jsx("div", { className: i(b), children: a.children });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function i(a) {
      var b = ["x78zum5 xdppsyt xeq5yr9"];
      a && b.push("xmjcpbm");
      return b.join(" ");
    }
    g["default"] = a;
  },
  98
);
__d(
  "WorkKnowledgeResourceLink.react",
  [
    "fbt",
    "ix",
    "CometIcon.react",
    "CometMenuItem.react",
    "WorkKnowledgeResourceLinkContainer.react",
    "fbicon",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function a(a) {
      var b = a.description,
        e = a.edit,
        f = a.href;
      a = a.name;
      var g =
        e != null
          ? [
              j.jsx(
                c("CometMenuItem.react"),
                {
                  href: f,
                  icon: d("fbicon")._(i("509934"), 20),
                  primaryText: h._("Ouvrir le fichier"),
                  target: "_blank",
                },
                "link"
              ),
              j.jsx(
                c("CometMenuItem.react"),
                {
                  icon: d("fbicon")._(i("477831"), 20),
                  onClick: e.onEditStart,
                  primaryText: h._("Modifier le lien"),
                },
                "edit"
              ),
              j.jsx(
                c("CometMenuItem.react"),
                {
                  icon: d("fbicon")._(i("483829"), 20),
                  onClick: e.onDelete,
                  primaryText: h._("Supprimer"),
                },
                "delete"
              ),
            ]
          : [];
      return j.jsx(c("WorkKnowledgeResourceLinkContainer.react"), {
        description: b,
        edit: e != null,
        href: f,
        icon: j.jsx(c("CometIcon.react"), {
          color: "highlight",
          icon: d("fbicon")._(i("509931"), 20),
        }),
        items: g,
        name: a,
        popOverlabel: "Link options menu",
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "WorkKnowledgeResourcesTitle.react",
  ["TetraText.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsx("div", {
        className: "xqui205 x1yztbdb",
        children: h.jsx(c("TetraText.react"), {
          color: "secondary",
          type: "headlineEmphasized4",
          children: a.title,
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "WorkKnowledgeVideoLoadingPlaceholder.react",
  [
    "CometProgressRingIndeterminate.react",
    "WorkKnowledgeVideoPlaceholder.react",
    "hero-tracing-placeholder",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a() {
      return h.jsxs(c("WorkKnowledgeVideoPlaceholder.react"), {
        children: [
          h.jsx(d("hero-tracing-placeholder").HeroHoldTrigger, { hold: !0 }),
          h.jsx("div", {
            align: "center",
            children: h.jsx(c("CometProgressRingIndeterminate.react"), {
              color: "blue",
              size: 24,
            }),
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
  "WorkKnowledgeVideoProcessingMonitor",
  ["AsyncRequest", "DateConsts", "clearInterval", "react", "setInterval"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useEffect,
      i = b.useState;
    function j(a) {
      var b = a.onComplete,
        d = a.onError,
        e = a.onNotReady;
      a = a.videoID;
      new (c("AsyncRequest"))()
        .setURI("/ajax/video/encode/feedback/ping/")
        .setData({ video_id: a })
        .setHandler(function (a) {
          a = a.getPayload();
          a.is_ready
            ? b && b()
            : a.is_ready === !1
            ? e && e(a.video_status_type)
            : a.error && d && d();
        })
        .send();
    }
    var k = (function () {
      function a(a) {
        this.$1 = a;
      }
      var b = a.prototype;
      b.subscribe = function (a, b) {
        var e = this;
        this.$3();
        this.$2 = c("setInterval")(function () {
          j({
            videoID: e.$1,
            onComplete: function () {
              e.$3(), a();
            },
            onError: function () {
              e.$3(), b();
            },
          });
        }, d("DateConsts").MS_PER_SEC);
      };
      b.unsubscribe = function () {
        this.$3();
      };
      b.$3 = function () {
        c("clearInterval")(this.$2);
      };
      return a;
    })();
    function a(a) {
      var b = i("initial"),
        c = b[0],
        d = b[1];
      h(function () {
        var b = new k(a),
          c = function () {
            b.unsubscribe(), d("ready");
          },
          e = function () {
            d("error"), b.unsubscribe();
          },
          f = function (a) {
            a === 8
              ? (d("error"), b.unsubscribe())
              : (d("processing"), b.subscribe(c, e));
          },
          g = function () {
            d("ready");
          };
        j({ videoID: a, onComplete: g, onNotReady: f });
        return function () {
          b.unsubscribe();
        };
      });
      return c;
    }
    g.encodingPingRequest = j;
    g.useVideoProcessingStatus = a;
  },
  98
);
__d(
  "WorkKnowledgeVideoProcessingPlaceholder.react",
  [
    "fbt",
    "TetraText.react",
    "WorkKnowledgeVideoPlaceholder.react",
    "hero-tracing-placeholder",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a() {
      return i.jsxs(c("WorkKnowledgeVideoPlaceholder.react"), {
        children: [
          i.jsx(d("hero-tracing-placeholder").HeroHoldTrigger, { hold: !0 }),
          i.jsx(c("TetraText.react"), {
            color: "secondary",
            type: "headlineEmphasized3",
            children: h._("La vid\u00e9o est en cours de traitement\u2026"),
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
  "WorkKnowledgeVideo.react",
  [
    "CometPlaceholder.react",
    "WorkKnowledgeGeminiVideo.react",
    "WorkKnowledgeVideoError.react",
    "WorkKnowledgeVideoLoadingPlaceholder.react",
    "WorkKnowledgeVideoProcessingMonitor",
    "WorkKnowledgeVideoProcessingPlaceholder.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = d("WorkKnowledgeVideoProcessingMonitor").useVideoProcessingStatus(
        a.videoID
      );
      switch (b) {
        case "initial":
          return h.jsx(c("WorkKnowledgeVideoLoadingPlaceholder.react"), {});
        case "processing":
          return h.jsx(c("WorkKnowledgeVideoProcessingPlaceholder.react"), {});
        case "ready":
          return h.jsx(c("CometPlaceholder.react"), {
            fallback: h.jsx(
              c("WorkKnowledgeVideoLoadingPlaceholder.react"),
              {}
            ),
            children: h.jsx(
              c("WorkKnowledgeGeminiVideo.react"),
              babelHelpers["extends"]({}, a)
            ),
          });
        default:
          return h.jsx(c("WorkKnowledgeVideoError.react"), {});
      }
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "WorkKnowledgeGeminiXMLRenderer.react",
  [
    "CometDOMOnlyBoundary.react",
    "CometGlimmer.react",
    "CometRelay",
    "FBLogger",
    "Locale",
    "TetraText.react",
    "TrustedTypesNoOpPolicy_DO_NOT_USE",
    "WorkKnowledgeBodyText.react",
    "WorkKnowledgeCoverPageCollections.react",
    "WorkKnowledgeCoverPageDummyCollections.react",
    "WorkKnowledgeCoverPageDummySubcategories.react",
    "WorkKnowledgeCoverPageSubcategories.react",
    "WorkKnowledgeDiffHighlightedText.react",
    "WorkKnowledgeGeminiActionItemView.react",
    "WorkKnowledgeGeminiCode.react",
    "WorkKnowledgeGeminiEmbeddedMedia.react",
    "WorkKnowledgeGeminiInlineLink.react",
    "WorkKnowledgeGeminiMention.react",
    "WorkKnowledgeGeminiNote.react",
    "WorkKnowledgeGeminiPaletteImage.react",
    "WorkKnowledgeGeminiPaletteThemeProvider.react",
    "WorkKnowledgeGeminiResourceFileLink.react",
    "WorkKnowledgeGeminiResourceSection.react",
    "WorkKnowledgeGeminiTable.react",
    "WorkKnowledgeGeminiTableCell.react",
    "WorkKnowledgeGeminiTableRow.react",
    "WorkKnowledgeGeminiXMLRenderer_components.graphql",
    "WorkKnowledgeGeminiXMLStyleContext",
    "WorkKnowledgeGeminiXMLStyleContextProvider.react",
    "WorkKnowledgeResourceLink.react",
    "WorkKnowledgeResourcesTitle.react",
    "WorkKnowledgeTextElement.react",
    "WorkKnowledgeVideo.react",
    "WorkKnowledgeVideoError.react",
    "react",
    "stylex",
    "unrecoverableViolation",
    "useGetTextDirectionAttribute",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = d("react").useContext,
      k = d("Locale").isRTL(),
      l = {
        glimmerStyle: {
          height: "x1qx5ct2",
          marginBottom: "x1e56ztr",
          $$css: !0,
        },
        section: { marginTop: "xg87l8a", $$css: !0 },
        bulleted0: {
          listStyleType: "xtaz4m5",
          marginStart: "x540dpk",
          $$css: !0,
        },
        bulleted1: {
          listStyleType: "xrylv2j",
          marginStart: "x540dpk",
          $$css: !0,
        },
        bulleted2: {
          listStyleType: "x152237o",
          marginStart: "x540dpk",
          $$css: !0,
        },
        numbered0: { listStyleType: "x3yw8vx", $$css: !0 },
        numbered1: { listStyleType: "x1rrqm6h", $$css: !0 },
        numbered2: { listStyleType: "x19k9dhg", $$css: !0 },
        lineHeight: { lineHeight: "x1qodse3", $$css: !0 },
      };
    function m() {
      return i.jsxs("div", {
        children: [
          i.jsx(c("CometGlimmer.react"), { index: 0, xstyle: l.glimmerStyle }),
          i.jsx(c("CometGlimmer.react"), { index: 1, xstyle: l.glimmerStyle }),
          i.jsx(c("CometGlimmer.react"), { index: 2, xstyle: l.glimmerStyle }),
        ],
      });
    }
    m.displayName = m.name + " [from " + f.id + "]";
    function n(a) {
      a = a.getAttribute("diff-highlight");
      switch (a) {
        case "added":
          return "added";
        case "deleted":
          return "deleted";
        default:
          return null;
      }
    }
    function o(a) {
      var b = a.domElement,
        d = a.listLevel;
      a = a.preloaded;
      d = i.jsx(p, { domElement: b, listLevel: d, preloaded: a });
      a = n(b);
      return a == null
        ? d
        : i.jsx(c("WorkKnowledgeGeminiXMLStyleContextProvider.react"), {
            value: { diffHighlight: a },
            children: i.jsx(c("WorkKnowledgeDiffHighlightedText.react"), {
              type: a,
              children: d,
            }),
          });
    }
    o.displayName = o.name + " [from " + f.id + "]";
    function p(a) {
      var b,
        e = a.domElement,
        f = a.listLevel;
      a = a.preloaded;
      var g = j(c("WorkKnowledgeGeminiXMLStyleContext"));
      g = g.paragraphStyles;
      var h = [];
      b = c("useGetTextDirectionAttribute")(
        (b = e.textContent) != null ? b : ""
      );
      for (var m = 0; m < e.childNodes.length; m++) {
        var n = e.childNodes.item(m);
        if (n instanceof Element) {
          var p = f;
          (n.localName === "ul" || n.localName === "ol") &&
            (p = p !== void 0 ? p + 1 : 0);
          h.push(i.jsx(o, { domElement: n, listLevel: p, preloaded: a }, m));
        } else
          n instanceof Comment ||
            (n.textContent.includes("\n") && n.textContent.trim() === "") ||
            h.push(
              i.jsx(
                c("WorkKnowledgeTextElement.react"),
                { children: n.textContent },
                m
              )
            );
      }
      var q = null;
      e.prefix != null && (q = e.lookupNamespaceURI(e.prefix));
      p = function () {
        if (q !== "palette-work-knowledge-toolkit")
          throw c("unrecoverableViolation")(
            "incorrect toolkit",
            "work_knowledge"
          );
      };
      n = function () {
        if (q !== "corex-toolkit")
          throw c("unrecoverableViolation")(
            "incorrect toolkit",
            "work_knowledge"
          );
      };
      switch (e.localName) {
        case "added-content":
          return i.jsx(c("WorkKnowledgeDiffHighlightedText.react"), {
            type: "added",
            children: h,
          });
        case "deleted-content":
          return i.jsx(c("WorkKnowledgeDiffHighlightedText.react"), {
            type: "deleted",
            children: h,
          });
        case "palette":
          return i.jsx("div", { children: h });
        case "theme-provider":
          return i.jsx(c("TetraText.react"), {
            type: "body2",
            children: i.jsx(
              c("WorkKnowledgeGeminiPaletteThemeProvider.react"),
              { theme: e.getAttribute("theme"), children: h }
            ),
          });
        case "rich-text-block":
          return i.jsx(c("WorkKnowledgeBodyText.react"), {
            color: e.getAttribute("fontcolor"),
            textAlign: e.getAttribute("textalign"),
            children: h,
          });
        case "image":
          var r = e.getAttribute("mediaid");
          if (r != null) {
            m =
              a == null
                ? void 0
                : (m = a.live_components) == null
                ? void 0
                : m.find(function (a) {
                    return a.id === "embedded-" + r;
                  });
            if (m != null)
              return i.jsxs("div", {
                className: "xg87l8a",
                children: [
                  i.jsx(d("CometRelay").MatchContainer, {
                    match: m,
                    props: {
                      alt: e.getAttribute("alt"),
                      halign: e.getAttribute("halign"),
                      height: e.getAttribute("imageheight"),
                      width: e.getAttribute("imagewidth"),
                      link: e.getAttribute("link"),
                      openLinkOnClick: e.getAttribute("openLinkOnClick"),
                    },
                  }),
                  h,
                ],
              });
            else if (c("WorkKnowledgeGeminiPaletteImage.react") != null) {
              m = e.getAttribute("provider");
              if (m !== "WORK_KNOWLEDGE" && m !== "CMS")
                throw c("unrecoverableViolation")(
                  "only support WORK_KNOWLEDGE or CMS provider.",
                  "work_knowledge"
                );
              return m == null || r == null
                ? i.jsx(i.Fragment, {})
                : i.jsxs("div", {
                    className: "xg87l8a",
                    children: [
                      i.jsx(c("WorkKnowledgeGeminiPaletteImage.react"), {
                        alt: e.getAttribute("alt"),
                        halign: e.getAttribute("halign"),
                        height: e.getAttribute("imageheight"),
                        link: e.getAttribute("link"),
                        mediaID: r,
                        openLinkOnClick: e.getAttribute("openLinkOnClick"),
                        provider: m,
                        width: e.getAttribute("imagewidth"),
                      }),
                      h,
                    ],
                  });
            }
          }
        case "image-caption":
          return i.jsx(i.Fragment, { children: h });
        case "mention":
          var s = e.getAttribute("entityID");
          if (s == null) return i.jsx(i.Fragment, {});
          m =
            a == null
              ? void 0
              : (m = a.live_components) == null
              ? void 0
              : m.find(function (a) {
                  return ((a = a.mention) == null ? void 0 : a.id) === s;
                });
          if (m != null)
            return i.jsx(d("CometRelay").MatchContainer, {
              match: m,
              props: { children: h },
            });
          else if (c("WorkKnowledgeGeminiMention.react") != null)
            return i.jsx(c("WorkKnowledgeGeminiMention.react"), {
              actorID: s,
              children: h,
            });
        case "a":
          return i.jsx(c("WorkKnowledgeGeminiInlineLink.react"), {
            href: e.getAttribute("href"),
            children: h,
          });
        case "p":
          return h.length === 0
            ? i.jsx("p", { children: " " })
            : i.jsx("p", {
                className: "x1qodse3",
                dir: b,
                style: g,
                children: h,
              });
        case "b":
          return i.jsx("b", { children: h });
        case "i":
          return i.jsx("i", { children: h });
        case "u":
          return i.jsx("u", { children: h });
        case "s":
          return i.jsx("s", { children: h });
        case "h1":
          return h.length === 0
            ? i.jsx("br", {})
            : i.jsx(c("TetraText.react"), {
                isSemanticHeading: !0,
                type: "headlineEmphasized1",
                children: h,
              });
        case "h2":
          return h.length === 0
            ? i.jsx("br", {})
            : i.jsx(c("TetraText.react"), {
                isSemanticHeading: !0,
                type: "headlineEmphasized2",
                children: h,
              });
        case "h3":
          return h.length === 0
            ? i.jsx("br", {})
            : i.jsx(c("TetraText.react"), {
                isSemanticHeading: !0,
                type: "headlineEmphasized3",
                children: h,
              });
        case "br":
          return i.jsx("br", {});
        case "ul":
          return i.jsx("ul", {
            className: c("stylex")(
              f === 0 ? l.bulleted0 : f === 1 ? l.bulleted1 : l.bulleted2
            ),
            children: h,
          });
        case "ol":
          return i.jsx("ol", {
            className: c("stylex")(
              f === 0 ? l.numbered0 : f === 1 ? l.numbered1 : l.numbered2
            ),
            dir: b,
            children: h,
          });
        case "code":
          h.length === 0 && h.push(i.jsx("span", { children: " " }, 0));
          return i.jsx(c("WorkKnowledgeGeminiCode.react"), {
            dir: b,
            children: h,
          });
        case "inline-code":
          return i.jsx("code", { children: h });
        case "li":
          return i.jsx("li", { className: "x1qodse3", children: h });
        case "inline-annotation":
          return i.jsx("span", { children: h });
        case "multi":
          return i.jsx(i.Fragment, { children: h });
        case "resource-section":
          p();
          return i.jsx("div", {
            className: "xg87l8a",
            children: i.jsx(c("WorkKnowledgeGeminiResourceSection.react"), {
              title: e.getAttribute("title"),
              children: h,
            }),
          });
        case "resource-file":
          p();
          m = e.getAttribute("fileid");
          g = e.getAttribute("filename");
          return m == null || g == null
            ? i.jsx(i.Fragment, {})
            : i.jsx(c("WorkKnowledgeGeminiResourceFileLink.react"), {
                description: e.getAttribute("description"),
                fileID: m,
                name: g,
                placeholderMode: e.getAttribute("dummymode") === "true",
              });
        case "resource-link":
          p();
          f = e.getAttribute("href");
          b = e.getAttribute("name");
          return f == null || b == null
            ? i.jsx(i.Fragment, {})
            : i.jsx(c("WorkKnowledgeResourceLink.react"), {
                description: e.getAttribute("description"),
                href: f,
                name: b,
              });
        case "note":
          p();
          return i.jsx("div", {
            className: "xg87l8a",
            children: i.jsx(c("WorkKnowledgeGeminiNote.react"), {
              title: e.getAttribute("title"),
              children: h,
            }),
          });
        case "embedded-media":
          p();
          var t = e.getAttribute("url");
          if (t == null) return i.jsx(i.Fragment, {});
          g =
            a == null
              ? void 0
              : (m = a.live_components) == null
              ? void 0
              : m.find(function (a) {
                  return a.id === t;
                });
          return i.jsx("div", {
            className: "xg87l8a",
            children:
              g != null
                ? i.jsx(d("CometRelay").MatchContainer, { match: g })
                : c("WorkKnowledgeGeminiEmbeddedMedia.react") != null &&
                  i.jsx(c("WorkKnowledgeGeminiEmbeddedMedia.react"), {
                    url: t,
                  }),
          });
        case "video":
          p();
          var u = e.getAttribute("videoid");
          if (u == null) return i.jsx(c("WorkKnowledgeVideoError.react"), {});
          b =
            a == null
              ? void 0
              : (f = a.live_components) == null
              ? void 0
              : f.find(function (a) {
                  return ((a = a.video) == null ? void 0 : a.id) === u;
                });
          return i.jsx("div", {
            className: "xg87l8a",
            children:
              b != null
                ? i.jsx(d("CometRelay").MatchContainer, {
                    match: b,
                    props: { isGif: e.getAttribute("isgif") === "true" },
                  })
                : c("WorkKnowledgeVideo.react") &&
                  i.jsx(c("WorkKnowledgeVideo.react"), {
                    isGif: e.getAttribute("isgif") === "true",
                    videoID: u,
                  }),
          });
        case "table":
          n();
          return i.jsx(c("WorkKnowledgeGeminiTable.react"), { children: h });
        case "table-row":
          n();
          return i.jsx(c("WorkKnowledgeGeminiTableRow.react"), {
            header: e.getAttribute("header"),
            children: h,
          });
        case "table-cell":
          n();
          m = e.getAttribute("header") === "true";
          g = e.getAttribute("width");
          return i.jsx(c("WorkKnowledgeGeminiTableCell.react"), {
            isHeader: m,
            width: g,
            children: h,
          });
        case "highlight-section":
          p();
          f = e.getAttribute("title");
          return i.jsx("div", {
            className: "xg87l8a",
            dir: k ? "rtl" : void 0,
            children: i.jsx(c("WorkKnowledgeCoverPageCollections.react"), {
              childNodes: e.childNodes,
              title: f,
            }),
          });
        case "dummy-highlight-section":
          p();
          return i.jsx("div", {
            className: "xg87l8a",
            dir: k ? "rtl" : void 0,
            children: i.jsx(
              c("WorkKnowledgeCoverPageDummyCollections.react"),
              {}
            ),
          });
        case "highlight-subcategories-section":
          p();
          b = e.getAttribute("title");
          return i.jsx("div", {
            className: "xg87l8a",
            dir: k ? "rtl" : void 0,
            children: i.jsx(c("WorkKnowledgeCoverPageSubcategories.react"), {
              childNodes: e.childNodes,
              title: b,
            }),
          });
        case "dummy-highlight-subcategories-section":
          p();
          return i.jsx("div", {
            className: "xg87l8a",
            dir: k ? "rtl" : void 0,
            children: i.jsx(
              c("WorkKnowledgeCoverPageDummySubcategories.react"),
              {}
            ),
          });
        case "action-item":
          return i.jsx(c("WorkKnowledgeGeminiActionItemView.react"), {
            checkedBy: e.getAttribute("checkedBy"),
            children: h,
          });
        case "resources-title":
          p();
          return i.jsx(c("WorkKnowledgeResourcesTitle.react"), {
            title: (n = e.getAttribute("title")) != null ? n : "",
          });
        case "data-widget":
          var v = e.getAttribute("widgetID");
          g =
            a == null
              ? void 0
              : (m = a.live_components) == null
              ? void 0
              : m.find(function (a) {
                  return (a == null ? void 0 : a.id) === v;
                });
          return i.jsx(d("CometRelay").MatchContainer, {
            match: g,
            props: {
              subtitle: e.getAttribute("subtitle"),
              title: e.getAttribute("title"),
            },
          });
        case "task":
          var w = parseInt(e.getAttribute("number"), 10);
          b =
            a == null
              ? void 0
              : (f = a.live_components) == null
              ? void 0
              : f.find(function (a) {
                  return (a == null ? void 0 : a.number) === w;
                });
          return i.jsx(d("CometRelay").MatchContainer, { match: b, props: {} });
        default:
          c("FBLogger")("work_knowledge").mustfix(
            "unsupported node type " + e.nodeName
          );
          return i.jsx(i.Fragment, { children: h });
      }
    }
    p.displayName = p.name + " [from " + f.id + "]";
    var q =
      h !== void 0
        ? h
        : (h = b("WorkKnowledgeGeminiXMLRenderer_components.graphql"));
    function r(a) {
      var b = a.className,
        e = a.node;
      a = a.xml;
      var f = new DOMParser();
      f = f.parseFromString(
        c("TrustedTypesNoOpPolicy_DO_NOT_USE").createHTML(a),
        "text/xml"
      );
      a = f.firstChild;
      if (!(a instanceof Element))
        throw c("unrecoverableViolation")(
          "root should be Element type",
          "work_knowledge"
        );
      f = d("CometRelay").useFragment(q, e);
      return i.jsx("div", {
        className: b,
        "data-testid": void 0,
        style: { whiteSpace: "pre-wrap" },
        children: i.jsx(o, { domElement: a, preloaded: f }),
      });
    }
    r.displayName = r.name + " [from " + f.id + "]";
    function a(a) {
      var b = a.className,
        d = a.node;
      a = a.xml;
      return i.jsx(c("CometDOMOnlyBoundary.react"), {
        fallback: i.jsx(m, {}),
        children: i.jsx(r, { className: b, node: d, xml: a }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "KnowledgeNoteBackgroundImage.react",
  ["CssBackgroundImage.react", "react", "stylex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      return h.jsx(c("CssBackgroundImage.react"), {
        backgroundPosition: "0 " + a.yOffset + "%",
        className: c("stylex")(a.xStyle),
        imageURI: a.imageURI,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "KnowledgeNotePostAttachmentContentEditors.react",
  [
    "fbt",
    "CometRow.react",
    "CometRowItem.react",
    "TetraOverlappingFacepileUnstyled.react",
    "TetraText.react",
    "WorkCometActorHovercard.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a) {
      var b = a.editAudience,
        d = a.owner;
      if (!d) return i.jsx(i.Fragment, {});
      a = b != null ? b.users : [];
      var e = {},
        f = [];
      [d].concat(a).forEach(function (a) {
        if (e[a.id]) return;
        e[a.id] = a;
        f.push(a);
      });
      b = f.map(function (a) {
        return {
          alt: a.name,
          source: { uri: (a = a.profilePicURI) != null ? a : "" },
        };
      });
      a = i.jsx(c("WorkCometActorHovercard.react"), {
        actorID: d.id,
        display: "inline",
        position: "below",
        children: function (a) {
          return i.jsx("div", {
            ref: a,
            children: i.jsx(c("TetraText.react"), {
              type: "meta2",
              children: d.name,
            }),
          });
        },
      });
      a =
        f.length === 1
          ? i.jsx(c("CometRow.react"), {
              paddingHorizontal: 0,
              paddingTop: 0,
              spacing: 0,
              children: i.jsx(c("CometRowItem.react"), { children: a }),
            })
          : i.jsxs(c("CometRow.react"), {
              paddingHorizontal: 0,
              paddingTop: 0,
              spacing: 4,
              children: [
                i.jsx(c("CometRowItem.react"), { children: a }),
                i.jsx(c("CometRowItem.react"), {
                  children: i.jsx(c("TetraText.react"), {
                    numberOfLines: 1,
                    type: "meta3",
                    children: h._("et"),
                  }),
                }),
                i.jsx(c("CometRowItem.react"), {
                  children: i.jsx(c("TetraText.react"), {
                    numberOfLines: 1,
                    type: "meta2",
                    children: h._(
                      { "*": "{number} autres personnes", _1: "1 autre" },
                      [h._plural(f.length - 1, "number")]
                    ),
                  }),
                }),
              ],
            });
      return i.jsxs(c("CometRow.react"), {
        align: "start",
        paddingHorizontal: 0,
        paddingTop: 0,
        spacing: 4,
        verticalAlign: "center",
        wrap: "forward",
        children: [
          i.jsx(c("CometRowItem.react"), {
            children: i.jsx("div", {
              className: "xcjnwoz",
              children: i.jsx(c("TetraOverlappingFacepileUnstyled.react"), {
                count: f.length,
                items: b,
                onPress: function () {},
                size: 24,
              }),
            }),
          }),
          i.jsx(c("CometRowItem.react"), {
            children: i.jsxs(c("CometRow.react"), {
              paddingHorizontal: 0,
              paddingTop: 0,
              spacing: 4,
              verticalAlign: "center",
              children: [
                i.jsx(c("CometRowItem.react"), { children: " " }),
                i.jsx(c("CometRowItem.react"), { children: a }),
              ],
            }),
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
  "XCometNotesPermalinkController",
  ["XController"],
  function (a, b, c, d, e, f) {
    e.exports = b("XController").create(
      "/notes/{?author}/{?slug}/{note_id}/{?mode}/",
      {
        note_id: { type: "FBID" },
        author: { type: "String" },
        slug: { type: "String" },
        qid: { type: "String" },
        mf_story_key: { type: "String" },
        _ft_: { type: "String" },
        mode: { type: "String" },
        comment_id: { type: "FBID" },
        reply_comment_id: { type: "FBID" },
      }
    );
  },
  null
);
__d(
  "KnowledgeNotePostAttachmentContentWrapper.react",
  [
    "fbt",
    "Actor",
    "CometPressable.react",
    "IsInternSite",
    "KnowledgeNoteBackgroundImage.react",
    "KnowledgeNoteLogUtils",
    "KnowledgeNotePostAttachmentContentEditors.react",
    "TetraText.react",
    "TextWithEmoticons.react",
    "XCometNotesPermalinkController",
    "react",
    "stylex",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = d("react").useCallback,
      k = {
        pressable: { width: "xh8yej3", $$css: !0 },
        content: {
          paddingTop: "x1cnzs8",
          paddingEnd: "xc73u3c",
          paddingBottom: "xx6bls6",
          paddingStart: "x5ib6vp",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        subtitle: {
          marginTop: "xw7yly9",
          marginBottom: "xod5an3",
          maxHeight: "x1hkcv85",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        audienceList: { marginTop: "xw7yly9", $$css: !0 },
        background: {
          backgroundSize: "x18d0r48",
          height: "x18dl8mb",
          flexGrow: "x1iyjqo2",
          borderTopStartRadius: "x1lq5wgf",
          borderTopEndRadius: "xgqcy7u",
          borderBottomEndRadius: "x5pf9jr",
          borderBottomStartRadius: "xo71vjh",
          $$css: !0,
        },
      };
    function a(a) {
      var b = a.children,
        e = a.coverPhotoMetadata,
        f = a.editAudience,
        g = a.innerXstyle,
        l = a.noteID,
        m = a.owner,
        n = a.title;
      a = a.xstyle;
      var o = d("Actor").useActor(),
        p = o[0];
      o = j(
        function () {
          d("KnowledgeNoteLogUtils").logEvent(
            "ENTER_FROM",
            "POST_ATTACHMENT",
            l,
            p
          );
        },
        [l, p]
      );
      return i.jsx("div", {
        className: c("stylex")(a),
        children: i.jsxs(c("CometPressable.react"), {
          hideHoverOverlay: !0,
          linkProps: {
            url: c("IsInternSite").is_intern_site
              ? c("XCometNotesPermalinkController")
                  .getURIBuilder()
                  .setParams({ note_id: l })
                  .getURI()
                  .setDomain("fb.workplace.com")
                  .setProtocol("https")
                  .toString()
              : c("XCometNotesPermalinkController")
                  .getURIBuilder()
                  .setParams({ note_id: l })
                  .getURI()
                  .toString(),
          },
          onPress: o,
          xstyle: [k.pressable, g],
          children: [
            e == null || (e == null ? void 0 : e.src) == null
              ? null
              : i.jsx(c("KnowledgeNoteBackgroundImage.react"), {
                  imageURI: e == null ? void 0 : e.src,
                  xStyle: k.background,
                  yOffset: e.yOffset,
                }),
            i.jsxs("div", {
              className: "x1cnzs8 xc73u3c xx6bls6 x5ib6vp x6ikm8r x10wlt62",
              children: [
                i.jsx(c("TetraText.react"), {
                  type: "headlineEmphasized1",
                  children: i.jsx(c("TextWithEmoticons.react"), {
                    renderEmoji: !0,
                    renderEmoticons: !0,
                    text: n,
                  }),
                }),
                i.jsx("div", {
                  className: "xw7yly9",
                  children: i.jsx(
                    c("KnowledgeNotePostAttachmentContentEditors.react"),
                    { editAudience: f, owner: m }
                  ),
                }),
                i.jsx("div", {
                  className: "xw7yly9 xod5an3 x1hkcv85 x6ikm8r x10wlt62",
                  children: b,
                }),
                i.jsx(c("TetraText.react"), {
                  color: "blueLink",
                  type: "body4",
                  children: h._("Voir plus"),
                }),
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
  "WorkGalahadCenteredProgressIndicator.react",
  ["CometProgressIndicator.react", "react", "stylex"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        root: {
          borderTopStyle: "x13fuv20",
          borderStartStyle: "x26u7qi",
          borderEndStyle: "xu3j5b3",
          borderBottomStyle: "x1q0q8m5",
          borderTopWidth: "x972fbf",
          borderStartWidth: "xm0m39n",
          borderEndWidth: "xcfux6l",
          borderBottomWidth: "x1qhh985",
          boxSizing: "x9f619",
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          flexGrow: "x1iyjqo2",
          flexShrink: "xs83m0k",
          marginTop: "xdj266r",
          marginEnd: "x11i5rnm",
          marginBottom: "xat24cr",
          marginStart: "x1mh8g0r",
          minHeight: "x2lwn1j",
          minWidth: "xeuugli",
          paddingTop: "xexx8yu",
          paddingEnd: "x4uap5",
          paddingBottom: "x18d9i69",
          paddingStart: "xkhd6sd",
          position: "x1n2onr6",
          zIndex: "x1ja2u2z",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          width: "xh8yej3",
          $$css: !0,
        },
      };
    function a(a) {
      return h.jsx("div", {
        className: c("stylex")([i.root, a.xstyle]),
        children: h.jsx(c("CometProgressIndicator.react"), {}),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "KnowledgeNotePostAttachmentContent.react",
  [
    "fbt",
    "CometPlaceholder.react",
    "IsInternSite",
    "KnowledgeNotePostAttachmentContentWrapper.react",
    "KnowledgeNotePostAttachmentContent_components.graphql",
    "RelayHooks",
    "TetraText.react",
    "WorkGalahadCenteredProgressIndicator.react",
    "deferredLoadComponent",
    "gkx",
    "react",
    "requireDeferredForDisplay",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react"),
      k = c("deferredLoadComponent")(
        c("requireDeferredForDisplay")(
          "WorkKnowledgeGeminiXMLRenderer.react"
        ).__setRef("KnowledgeNotePostAttachmentContent.react")
      ),
      l = c("deferredLoadComponent")(
        c("requireDeferredForDisplay")("CMSXMLRenderer.react").__setRef(
          "KnowledgeNotePostAttachmentContent.react"
        )
      );
    function a(a) {
      var e = a.coverPhotoMetadata,
        f = a.editAudience,
        g = a.innerXstyle,
        m = a.node,
        n = a.noteID,
        o = a.owner,
        p = a.title,
        q = a.xml;
      a = a.xstyle;
      m = d("RelayHooks").useFragment(
        i !== void 0
          ? i
          : (i = b("KnowledgeNotePostAttachmentContent_components.graphql")),
        m
      );
      var r = null;
      q != null &&
        (c("gkx")("1217157") || c("IsInternSite").is_intern_site
          ? (r = j.jsx(k, { node: m, xml: q }))
          : (r = j.jsx(c("CometPlaceholder.react"), {
              fallback: null,
              children: j.jsx(l, {
                content: q,
                onError: function () {
                  return j.jsx(c("TetraText.react"), {
                    type: "body3",
                    children: h._("Impossible de charger l\u2019aper\u00e7u."),
                  });
                },
                onLoading: j.jsx(
                  c("WorkGalahadCenteredProgressIndicator.react"),
                  {}
                ),
                refObjID: n,
                refObjType: "KNOWLEDGE_NOTE",
              }),
            })));
      return j.jsx(c("KnowledgeNotePostAttachmentContentWrapper.react"), {
        coverPhotoMetadata: e,
        editAudience: f,
        innerXstyle: g,
        noteID: n,
        owner: o,
        title: p,
        xstyle: a,
        children: r,
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "FBRelayRoot",
  [
    "CurrentUser",
    "FBLogger",
    "ReactRenderer",
    "RelayFBEnvironment",
    "RelayModern",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a, b) {
      return function (c, d) {
        return i(a, c, d, b);
      };
    }
    function i(a, b, e, f) {
      return h.jsx(d("RelayModern").QueryRenderer, {
        environment: c("RelayFBEnvironment"),
        query: f,
        render: function (d) {
          var e = d.error;
          if (e != null) {
            c("FBLogger")("ServerCallables")
              .catching(e)
              .mustfix(
                "Preloaded query failed. Relay root couldn't be rendered"
              );
            if (c("CurrentUser").isEmployee()) throw e;
            return null;
          }
          return h.createElement(
            a,
            babelHelpers["extends"]({}, b, { data: d.props })
          );
        },
        variables: e == null ? {} : e,
      });
    }
    i.displayName = i.name + " [from " + f.id + "]";
    function b(a) {
      var b = a.builder,
        c = a.props,
        e = a.placeholderElement,
        f = a.preloader,
        g = a.queryVariables;
      a = a.bigPipeContext;
      return d("ReactRenderer").constructAndRenderElementIntoComment_DO_NOT_USE(
        {
          elementInitial: b(c, g),
          placeholderElement: e,
          acrossTransitions: !1,
          clobberSiblings: !1,
          preloader: f,
          bigPipeContext: a,
          concurrentRootOptions: null,
        },
        "FBRelayRoot.js"
      );
    }
    g.createRootContainer = a;
    g.constructAndRenderRelayRootIntoComment_DO_NOT_USE = b;
  },
  98
);
__d(
  "KnowledgeNotePostAttachment.react",
  [
    "Actor",
    "CurrentUser",
    "FBRelayRoot",
    "KnowledgeNotePostAttachmentContent.react",
    "KnowledgeNotePostAttachmentQuery.graphql",
    "RelayFBEnvironment",
    "RelayHooks",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react"),
      j = {
        root: {
          borderTopColor: "x8cjs6t",
          borderEndColor: "x1ch86jh",
          borderBottomColor: "x80vd3b",
          borderStartColor: "xckqwgs",
          borderTop: "x166x1oz",
          borderEnd: "x1wnghzk",
          borderBottom: "x1d1r0jw",
          borderStart: "x3h82mt",
          borderTopStartRadius: "x1lq5wgf",
          borderTopEndRadius: "xgqcy7u",
          borderBottomEndRadius: "x30kzoy",
          borderBottomStartRadius: "x9jhf4c",
          $$css: !0,
        },
        innerStyle: { minHeight: "x1tjbqro", $$css: !0 },
      };
    function a(a) {
      a.content;
      var b = a.data,
        e = a.isOnProfile;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "content",
        "data",
        "isOnProfile",
      ]);
      return i.jsx(d("Actor").ActorProvider, {
        initialActorID: c("CurrentUser").getID(),
        children: i.jsx(d("RelayHooks").RelayEnvironmentProvider, {
          environment: c("RelayFBEnvironment"),
          children: i.jsx(
            c("KnowledgeNotePostAttachmentContent.react"),
            babelHelpers["extends"]({}, a, {
              node: b.fetch__KnowledgeNote,
              innerXstyle: e === !0 ? j.innerStyle : null,
              xstyle: j.root,
            })
          ),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = d("FBRelayRoot").createRootContainer(
      a,
      h !== void 0 ? h : (h = b("KnowledgeNotePostAttachmentQuery.graphql"))
    );
    g["default"] = e;
  },
  98
);
__d(
  "XCMSWSYWIYGFragmentRenderController",
  ["XController"],
  function (a, b, c, d, e, f) {
    e.exports = b("XController").create("/cms_wysiwyg/fragment/render/", {});
  },
  null
);
__d(
  "CMSXMLRenderer.react",
  [
    "AsyncRequest",
    "FlexLayout.react",
    "LoadObject",
    "ServerHTML.react",
    "XCMSWSYWIYGFragmentRenderController",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(d, a);
      function d() {
        var b, d;
        for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
          f[g] = arguments[g];
        return (
          ((b = d = a.call.apply(a, [this].concat(f)) || this),
          (d.state = { renderedContent: c("LoadObject").empty() }),
          (d.$5 = function (a) {
            if (a === null || d.props.scaleConfig == null) return;
            d.$2 = a;
            var b = d.props.scaleConfig.width,
              c = d.props.scaleConfig.height,
              e =
                a == null
                  ? void 0
                  : (a = a.elementRef) == null
                  ? void 0
                  : a.current;
            if (!(e instanceof HTMLElement)) return;
            a = e.querySelectorAll("img");
            a.length === 0 && d.$4(e, b, c);
            a.forEach(function (a) {
              a instanceof HTMLImageElement &&
                (a.onload = function () {
                  d.$4(e, b, c);
                });
            });
          }),
          b) || babelHelpers.assertThisInitialized(d)
        );
      }
      var e = d.prototype;
      e.$3 = (function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var a = this;
          this.setState(function (a) {
            return { renderedContent: a.renderedContent.loading() };
          });
          var b = null,
            d = this.props.content;
          if (typeof d !== "string")
            try {
              b = yield d();
            } catch (a) {
              this.setState(function (b) {
                return { renderedContent: b.renderedContent.setError(a) };
              });
              return;
            }
          else b = d;
          d = c("XCMSWSYWIYGFragmentRenderController").getURIBuilder().getURI();
          this.$1 != null && (this.$1.abort(), (this.$1 = null));
          this.$1 = new (c("AsyncRequest"))()
            .setURI(d)
            .setMethod("POST")
            .setData({
              content: b,
              use_direct_rendering: !0,
              obj_ref_id: this.props.refObjID,
              obj_ref_type: this.props.refObjType,
            })
            .setHandler(function (b) {
              var c = b.payload;
              a.setState(function (a) {
                return {
                  renderedContent: a.renderedContent
                    .setValue(c.xhp)
                    .removeError()
                    .done(),
                };
              });
            })
            .setErrorHandler(function (b) {
              a.setState(function (a) {
                return {
                  renderedContent: a.renderedContent.setError(
                    new Error(b.getErrorDescriptionString())
                  ),
                };
              });
            })
            .setFinallyHandler(function () {
              a.setState(function (a) {
                return { renderedContent: a.renderedContent.done() };
              });
            });
          this.$1.send();
        });
        function d() {
          return a.apply(this, arguments);
        }
        return d;
      })();
      e.componentWillUnmount = function () {
        this.$1 != null && (this.$1.abort(), (this.$1 = null));
      };
      e.componentDidMount = function () {
        this.$3();
      };
      e.componentDidUpdate = function (a) {
        a.content !== this.props.content && this.$3();
      };
      e.$4 = function (a, b, c) {
        var d = a.clientWidth,
          e = a.clientHeight;
        if (d <= b && e <= c) return;
        a.style.transformOrigin = "left top";
        b = b / d;
        d = c / e;
        c = Math.min(b, d);
        a.style.transform = "scale(" + c + ")";
      };
      e.render = function () {
        var a = this,
          b = this.props,
          d = b.className,
          e = b.onLoading,
          f = b.onError;
        return this.state.renderedContent.match({
          loading: function () {
            return h.jsx(c("FlexLayout.react"), {
              className_DO_NOT_USE: d,
              align: "center",
              justify: "center",
              children: e,
            });
          },
          error: function (a) {
            return h.jsx(c("FlexLayout.react"), {
              className_DO_NOT_USE: d,
              align: "center",
              justify: "center",
              children: f(a),
            });
          },
          loaded: function (b) {
            return a.props.scaleConfig != null
              ? h.jsx(c("ServerHTML.react"), {
                  className: d,
                  blob: b,
                  "data-testid": void 0,
                  ref: a.$5,
                })
              : h.jsx(c("ServerHTML.react"), {
                  className: d,
                  blob: b,
                  "data-testid": void 0,
                });
          },
        });
      };
      return d;
    })(h.Component);
    g["default"] = a;
  },
  98
);
__d(
  "QPLAddBlueRequestHeaders",
  ["Arbiter", "QuickPerformanceLogger"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      c("Arbiter").subscribe("AsyncRequest/will_send", function (a, b) {
        a = b.request;
        b = c("QuickPerformanceLogger").getActiveMarkerIds({ type: 2 });
        b.length > 0 &&
          a.setRequestHeader("X-FB-QPL-Active-Flows", b.sort().join(","));
      });
    }
    g["default"] = a;
  },
  98
);
