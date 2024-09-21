/*FB_PKG_DELIM*/

__d(
  "LiveVideoViewerTypedLogger",
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
          "logger:LiveVideoViewerLoggerConfig",
          this.$1,
          b("Banzai").BASIC,
          a
        );
      };
      c.logVital = function (a) {
        b("GeneratedLoggerUtils").log(
          "logger:LiveVideoViewerLoggerConfig",
          this.$1,
          b("Banzai").VITAL,
          a
        );
      };
      c.logImmediately = function (a) {
        b("GeneratedLoggerUtils").log(
          "logger:LiveVideoViewerLoggerConfig",
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
      c.setCommentID = function (a) {
        this.$1.comment_id = a;
        return this;
      };
      c.setCommentLocation = function (a) {
        this.$1.comment_location = a;
        return this;
      };
      c.setCommentReplyThreadLength = function (a) {
        this.$1.comment_reply_thread_length = a;
        return this;
      };
      c.setEvent = function (a) {
        this.$1.event = a;
        return this;
      };
      c.setIsCommentBeforeUserJoined = function (a) {
        this.$1.is_comment_before_user_joined = a;
        return this;
      };
      c.setNumHistoricalCommentsLoaded = function (a) {
        this.$1.num_historical_comments_loaded = a;
        return this;
      };
      c.setReplyThreadDurationMs = function (a) {
        this.$1.reply_thread_duration_ms = a;
        return this;
      };
      c.setTargetID = function (a) {
        this.$1.target_id = a;
        return this;
      };
      c.setTotalNumHistoricalComments = function (a) {
        this.$1.total_num_historical_comments = a;
        return this;
      };
      return a;
    })();
    c = {
      comment_id: !0,
      comment_location: !0,
      comment_reply_thread_length: !0,
      event: !0,
      is_comment_before_user_joined: !0,
      num_historical_comments_loaded: !0,
      reply_thread_duration_ms: !0,
      target_id: !0,
      total_num_historical_comments: !0,
    };
    f["default"] = a;
  },
  66
);
__d(
  "UFI2TypingIndicatorImpl_feedback.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "UFI2TypingIndicatorImpl_feedback",
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
          concreteType: "FeedbackTypersConnection",
          kind: "LinkedField",
          name: "feedback_typers",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "other_count",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "subscription_target_id",
          storageKey: null,
        },
      ],
      type: "Feedback",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "UFI2TypingIndicator_feedback.graphql",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      argumentDefinitions: [{ kind: "RootArgument", name: "feedbackSource" }],
      kind: "Fragment",
      metadata: null,
      name: "UFI2TypingIndicator_feedback",
      selections: [
        {
          alias: null,
          args: [
            {
              kind: "Variable",
              name: "feedback_source_integer",
              variableName: "feedbackSource",
            },
          ],
          kind: "ScalarField",
          name: "is_eligible_for_real_time_updates",
          storageKey: null,
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "UFI2TypingIndicatorImpl_feedback",
        },
      ],
      type: "Feedback",
      abstractKey: null,
    };
    e.exports = a;
  },
  null
);
__d(
  "UFI2TypingSubscription_facebookRelayOperation",
  [],
  function (a, b, c, d, e, f) {
    e.exports = "5600593223301846";
  },
  null
);
__d(
  "UFI2TypingSubscription.graphql",
  ["UFI2TypingSubscription_facebookRelayOperation"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        c = [{ kind: "Variable", name: "data", variableName: "input" }],
        d = [
          {
            alias: null,
            args: null,
            concreteType: "Feedback",
            kind: "LinkedField",
            name: "feedback",
            plural: !1,
            selections: [
              {
                args: null,
                kind: "FragmentSpread",
                name: "UFI2TypingIndicatorImpl_feedback",
              },
            ],
            storageKey: null,
          },
        ],
        e = [
          {
            alias: null,
            args: null,
            concreteType: "Feedback",
            kind: "LinkedField",
            name: "feedback",
            plural: !1,
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
                concreteType: "FeedbackTypersConnection",
                kind: "LinkedField",
                name: "feedback_typers",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "other_count",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "subscription_target_id",
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
          name: "UFI2TypingSubscription",
          selections: [
            {
              alias: null,
              args: c,
              concreteType: null,
              kind: "LinkedField",
              name: "feedback_typing_subscribe",
              plural: !1,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: d,
                  type: "FeedbackStartTypingResponsePayload",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: d,
                  type: "FeedbackStopTypingResponsePayload",
                  abstractKey: null,
                },
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
          name: "UFI2TypingSubscription",
          selections: [
            {
              alias: null,
              args: c,
              concreteType: null,
              kind: "LinkedField",
              name: "feedback_typing_subscribe",
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
                  kind: "InlineFragment",
                  selections: e,
                  type: "FeedbackStartTypingResponsePayload",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: e,
                  type: "FeedbackStopTypingResponsePayload",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: b("UFI2TypingSubscription_facebookRelayOperation"),
          metadata: { subscriptionName: "feedback_typing_subscribe" },
          name: "UFI2TypingSubscription",
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
  "dangerouslyBypassDispatchError",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      for (
        var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
        d < b;
        d++
      )
        c[d - 1] = arguments[d];
      setTimeout(function () {
        a.apply(null, c);
      }, 0);
    }
    f["default"] = a;
  },
  66
);
__d(
  "CommentVoteReactionType",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({ NONE: 0, UPVOTE: 1, DOWNVOTE: 2 });
    f["default"] = a;
  },
  66
);
__d(
  "CommentVoteUIVersion",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      NONE: "none",
      INSIDE_BLING_BAR: "inside_bling_bar",
      VERTICAL_ON_THE_SIDE: "vertical_on_the_side",
      COMMUNITY_REPUTATION: "community_reputation",
      COMMUNITY_REPUTATION_INLINE_VOTING: "community_reputation_inline_voting",
      INSIDE_QA_BLING_BAR: "inside_qa_bling_bar",
    });
    f["default"] = a;
  },
  66
);
__d(
  "UFI2FeedbackActionType",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      CHANGE_ACCEPTED_ANSWER: "fa-type:change-accepted-answer",
      COMMENT_LIKE: "fa-type:comment-like",
      COMMENT_REACTION: "fa-type:comment-reaction",
      COMMENT_SET_SPAM: "fa-type:mark-spam",
      COMMENT_KEEP_SPAM: "fa-type:keep_spam",
      COMMENT_VOTE: "fa-type:comment_vote",
      DELETE_COMMENT: "fa-type:delete-comment",
      DELETE_COMMENT_REMOVE_COMMENTER:
        "fa-type:delete_comment_remove_commenter",
      DISABLE_COMMENTS: "fa-type:disable-comments",
      LIVE_DELETE_COMMENT: "fa-type:live-delete-comment",
      LIKE_ACTION: "fa-type:like",
      SUBSCRIBE_ACTION: "fa-type:subscribe",
      SHARE_COUNT_UPDATE_ACTION: "fa-type:share_count_update",
      REMOVE_PREVIEW: "fa-type:remove-preview",
      MARK_COMMENT_SPAM: "fa-type:mark-spam",
      MUTE_MEMBER: "fa-type:mute-member",
      CONFIRM_COMMENT_REMOVAL: "fa-type:confirm-remove",
      TRANSLATE_COMMENT: "fa-type:translate-comment",
      TRANSLATE_ALL: "fa-type:translate-all-comments",
      COMMENT_LIKECOUNT_UPDATE: "fa-type:comment-likecount-update",
      ADD_COMMENT_ACTION: "fa-type:add-comment",
      REACTION: "fa-type:reaction",
      UPDATE_CONSTITUENT_BADGE: "fa-type:comment_update_constituent_title",
      COMMENT_AUTHOR_PIN_CHANGE: "fa-type:comment_author_pin_change",
    });
    f["default"] = a;
  },
  66
);
__d(
  "UFI2FeedbackMode",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      EXPANDED: "expanded",
      NONE: "none",
      NEVER: "never",
      TOGGLE: "toggle",
    });
    f["default"] = a;
  },
  66
);
__d(
  "UFIPaging",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({ TOP: "top", BOTTOM: "bottom", ALL: "all" });
    f["default"] = a;
  },
  66
);
__d(
  "UFIStatus",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      DELETED: "status:deleted",
      SPAM: "status:spam",
      SPAM_DISPLAY: "status:spam-display",
      LIVE_DELETED: "status:live-deleted",
      FAILED_ADD: "status:failed-add",
      FAILED_EDIT: "status:failed-edit",
      PENDING_EDIT: "status:pending-edit",
    });
    f["default"] = a;
  },
  66
);
__d(
  "UFIConstants",
  [
    "CommentVoteReactionType",
    "CommentVoteUIVersion",
    "FeedbackPayloadSourceType",
    "FeedbackSourceType",
    "UFI2FeedbackActionType",
    "UFI2FeedbackMode",
    "UFIPaging",
    "UFIStatus",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    a = 80;
    c = 420;
    d = 3;
    e = 0.6;
    var g = 60,
      h = 1e3,
      i = 60,
      j = 1,
      k = "unavailable_comment_key";
    f.attachmentTruncationLength = a;
    f.UFIActionType = b("UFI2FeedbackActionType");
    f.UFICommentVoteType = b("CommentVoteReactionType");
    f.UFICommentVoteUIVersion = b("CommentVoteUIVersion");
    f.UFIFeedbackMode = b("UFI2FeedbackMode");
    f.UFIFeedbackSourceType = b("FeedbackSourceType");
    f.UFIPayloadSourceType = b("FeedbackPayloadSourceType");
    f.UFIStatus = b("UFIStatus");
    f.UFIPaging = b("UFIPaging");
    f.commentTruncationLength = c;
    f.commentTruncationMaxLines = d;
    f.commentTruncationPercent = e;
    f.commentURLTruncationLength = g;
    f.infiniteScrollRangeForQANDAPermalinks = h;
    f.maxScrollDistanceForAutoScroll = i;
    f.minCommentsForOrderingModeSelector = j;
    f.unavailableCommentKey = k;
  },
  66
);
__d(
  "UFICommentActionType",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      CHANGE_REACTION: "comment_change_reaction",
      CHANGE_REACTION_FAILURE: "comment_change_reaction_failure",
      CHANGE_REACTION_SUCCESS: "comment_change_reaction_success",
      CHANGE_VISIBILITY: "comment_change_visibility",
      CHANGE_VOTE: "comment_change_vote",
      CHANGE_VOTE_FAILURE: "comment_change_vote_failure",
      CHANGE_VOTE_SUCCESS: "comment_change_vote_success",
      EDIT: "comment_edit",
      EMBED: "embed",
      DELETE_COMMENT_AND_REMOVE_COMMENTER:
        "comment_delete_and_commenter_remove",
      DELETE_COMMENT_WITH_FEEDBACK: "comment_delete_with_feedback",
      MANAGE_CONSTITUENT_BADGE: "comment_manage_constituent_badge",
      MOUNTED: "comment_mounted",
      MUTE_MEMBER: "commenter_muted",
      REMOVE: "comment_remove",
      REMOVE_AND_BLOCK: "comment_remove_and_block",
      REMOVE_PREVIEW: "comment_remove_preview",
      TOGGLE_INLINE_BAN: "comment_toggle_inline_ban",
      TOGGLE_INLINE_STREAM_BAN: "comment_toggle_inline_stream_ban",
      TOGGLE_INLINE_SUSPENSION: "comment_toggle_inline_suspension",
      TOGGLE_LIKE: "comment_toggle_like",
      TOGGLE_MARK_AS_SPAM: "comment_toggle_mark_as_spam",
      TOGGLE_KEEP_SPAM: "comment_toggle_keep_spam",
      TOGGLE_APPEAL_SPAM: "comment_toggle_appeal_spam",
      TOGGLE_SECURE_ACCOUNT: "comment_toggle_secure_account",
      TOGGLE_TEXT_DELIGHTS: "comment_toggle_text_delights",
      TRANSLATE: "comment_translate",
      TRANSLATE_ARRAY: "comment_translate_array",
      UNMOUNTED: "comment_unmounted",
      UPDATE_VOTE_COUNT_AND_STATE: "comment_update_vote_count_and_state",
      CHANGE_PIN_BY_AUTHOR: "comment_change_author_pin",
    });
    f["default"] = a;
  },
  66
);
__d(
  "UFIDispatcherBase",
  [
    "invariant",
    "ReactDispatcher_DEPRECATED",
    "UFICommentActionType",
    "dangerouslyBypassDispatchError",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    function i(a, b) {
      return Object.values(b).indexOf(a) >= 0;
    }
    function j(a, b, c) {
      a[b] || h(0, 2123, a.type, b, c);
    }
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var d = b.prototype;
      d.dispatch = function (b) {
        var d = this;
        j(b, "instanceID", "contextArgs.instanceid");
        j(b, "ftentidentifier", "contextArgs.ftentidentifier");
        i(b.type, c("UFICommentActionType")) && j(b, "fbid", "comment.fbid");
        try {
          a.prototype.dispatch.call(this, b);
        } catch (e) {
          c("dangerouslyBypassDispatchError")(function () {
            return a.prototype.dispatch.call(d, b);
          });
        }
      };
      return b;
    })(c("ReactDispatcher_DEPRECATED"));
    b = new a();
    g["default"] = b;
  },
  98
);
__d(
  "UFIRootRegistry",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = {},
      h = {},
      i = {},
      j = [];
    function a(a, b, c, d) {
      (g[a] = d), (h[c] = [].concat(h[c] || [], [b])), (i[b] = c);
    }
    function b(a) {
      j.push(a);
    }
    function c(a) {
      return j.indexOf(a) >= 0;
    }
    function d(a) {
      return h[a] || null;
    }
    function e(a) {
      return i[a] || null;
    }
    function k(a) {
      var b = i[a],
        c = h[b];
      c &&
        c.includes(a) &&
        ((h[b] = c.filter(function (b) {
          return b != a;
        })),
        h[b].length == 0 && delete h[b]);
      delete i[a];
    }
    function l() {
      j.forEach(function (a) {
        return g[a] && g[a]();
      }),
        (g = {}),
        (j = []);
    }
    f.registerController = a;
    f.registerSnowliftID = b;
    f.isSnowliftNode = c;
    f.getInstanceIDFromFTEntIdentifier = d;
    f.getFTEntIdentifierFromInstanceID = e;
    f.cleanupInstance = k;
    f.cleanupSnowliftNodes = l;
  },
  66
);
__d(
  "UFIAddCommentActionType",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      CANCEL: "add_comment_cancel",
      CHANGE_CONTENT: "add_comment_change_content",
      RETRY_SUBMIT: "add_comment_retry_submit",
      SUBMIT_EDIT: "add_comment_submit_edit",
      SUBMIT_NEW: "add_comment_submit_new",
      PIVOT_SEND_MESSAGE: "pivot_send_message",
    });
    f["default"] = a;
  },
  66
);
__d(
  "UFIInstanceActionType",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      CHANGE_VISIBILITY: "story_change_visibility",
      INIT: "instance_init",
      RECEIVED_VOD_COMMENTS: "received_vod_comments",
      REMOVE: "story_remove",
      REQUESTED_VOD_COMMENTS: "requested_vod_comments",
      TOGGLE_AUTO_TRANSLATE_COMMENTS: "toggle_auto_translate_comments",
      TOGGLE_COMMENTS: "story_toggle_comments",
      TOGGLE_COMMERCIAL_BREAK: "story_toggle_commercial_break",
      TRANSLATE_ALL: "translate_all",
      FOUND_VIDEO_PLAYER_CONTROLLER: "found_video_player_controller",
    });
    f["default"] = a;
  },
  66
);
__d(
  "UFIStoryActionType",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      CHANGE_ACCEPTED_ANSWER: "story_change_accepted_answer",
      COMMENTS_ARRIVED: "story_comments_arrived",
      PAGE_IN_COMMENTS: "story_page_in_comments",
      SHOW_REPLIES: "story_show_replies",
      SHOW_COMMENTS: "story_show_comments",
      SPAM_FETCHED: "story_spam_fetched",
      CHANGE_REACTION: "story_change_reaction",
      CHANGE_REACTION_FAILURE: "story_change_reaction_failure",
      CHANGE_REACTION_SUCCESS: "story_change_reaction_success",
      TOGGLE_REPLIES: "story_toggle_replies",
      FRIEND_TYPING: "story_friend_typing",
      SOMEONE_TYPING: "story_someone_typing",
      TYPING_STOPPED: "story_typing_stopped",
      LIVE_PIN_COMMENT: "story_live_pin_comment",
      LIVE_UNPIN_COMMENT: "story_live_unpin_comment",
      SHOW_FACECAST_REPLIES: "story_show_facecast_replies",
      HIDE_FACECAST_REPLIES: "story_hide_facecast_replies",
      ADD_FACECAST_REPLY: "story_add_facecast_reply",
      ADD_FACECAST_REPLIES: "story_add_facecast_replies",
      FACECAST_REPLIES_LOADED: "facecast_replies_loaded",
      SET_COMMENTS_SCROLL_DISTANCE: "set_comments_scroll_distance",
      HANDLE_NEW_COMMENTS: "handle_new_comments",
      HANDLE_NEW_FACECAST_REPLY: "handle_new_facecast_reply",
      SET_COMMENT_REACTIONS_MENU_SHOWN: "set_comment_reactions_menu_shown",
    });
    f["default"] = a;
  },
  66
);
__d(
  "UFIActionTypes",
  [
    "UFIAddCommentActionType",
    "UFICommentActionType",
    "UFIInstanceActionType",
    "UFIStoryActionType",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    (f.INSTANCE = b("UFIInstanceActionType")),
      (f.STORY = b("UFIStoryActionType")),
      (f.ADD_COMMENT = b("UFIAddCommentActionType")),
      (f.COMMENT = b("UFICommentActionType"));
  },
  66
);
__d(
  "UFICommentVoteSyncStore",
  ["FluxReduceStore", "UFIActionTypes", "UFIConstants", "UFIDispatcherBase"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
          f[g] = arguments[g];
        return (
          ((b = c = a.call.apply(a, [this].concat(f)) || this),
          (c.reduce = function (a, b) {
            var e;
            switch (b.type) {
              case d("UFIActionTypes").INSTANCE.INIT:
                var f = b.payload,
                  g = f.feedbacktarget
                    ? f.feedbacktarget
                    : f.feedbacktargets && f.feedbacktargets[0];
                if (!g) return a;
                g = f.comments.reduce(function (a, b) {
                  a[b.fbid] = {
                    voteCount: b.voteCount,
                    voteState: b.voteState,
                  };
                  return a;
                }, {});
                return babelHelpers["extends"]({}, a, g);
              case d("UFIActionTypes").COMMENT.UPDATE_VOTE_COUNT_AND_STATE:
                return babelHelpers["extends"](
                  {},
                  a,
                  ((f = {}),
                  (f[b.fbid] = {
                    voteCount: b.voteCount ? b.voteCount : 0,
                    voteState: b.voteState
                      ? b.voteState
                      : d("UFIConstants").UFICommentVoteType.NONE,
                  }),
                  f)
                );
              case d("UFIActionTypes").COMMENT.CHANGE_VOTE:
                g = c.getOptimisticVoteState(
                  c.getVoteState(b.fbid),
                  b.arrowType
                );
                f = c.getOptimisticVoteCount(b.fbid, g);
                return babelHelpers["extends"](
                  {},
                  a,
                  ((e = {}), (e[b.fbid] = { voteCount: f, voteState: g }), e)
                );
              case d("UFIActionTypes").COMMENT.CHANGE_VOTE_SUCCESS:
              case d("UFIActionTypes").COMMENT.CHANGE_VOTE_FAILURE:
                return babelHelpers["extends"](
                  {},
                  a,
                  ((f = {}),
                  (f[b.fbid] = {
                    voteCount: b.voteCount,
                    voteState: b.voteState,
                  }),
                  f)
                );
              default:
                return a;
            }
          }),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      var c = b.prototype;
      c.getInitialState = function () {
        return {};
      };
      c.getVoteCount = function (a) {
        return !this.getState()[a] ? 0 : this.getState()[a].voteCount;
      };
      c.getVoteState = function (a) {
        return !this.getState()[a]
          ? d("UFIConstants").UFICommentVoteType.NONE
          : this.getState()[a].voteState;
      };
      c.$UFICommentVoteSyncStore1 = function (a) {
        switch (a) {
          case d("UFIConstants").UFICommentVoteType.UPVOTE:
            return 1;
          case d("UFIConstants").UFICommentVoteType.DOWNVOTE:
            return -1;
          case d("UFIConstants").UFICommentVoteType.NONE:
          default:
            return 0;
        }
      };
      c.$UFICommentVoteSyncStore2 = function (a, b) {
        return (
          this.$UFICommentVoteSyncStore1(b) - this.$UFICommentVoteSyncStore1(a)
        );
      };
      c.getOptimisticVoteCount = function (a, b) {
        var c = this.getVoteCount(a);
        a = this.$UFICommentVoteSyncStore2(this.getVoteState(a), b);
        return c + a;
      };
      c.getOptimisticVoteState = function (a, b) {
        return a === b ? d("UFIConstants").UFICommentVoteType.NONE : b;
      };
      return b;
    })(c("FluxReduceStore"));
    a.__moduleID = f.id;
    b = new a(c("UFIDispatcherBase"));
    g["default"] = b;
  },
  98
);
__d(
  "UFIKeyValueStore",
  ["FluxReduceStore", "abstractMethod"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var d = b.prototype;
      d.getInitialState = function () {
        return {};
      };
      d.getValueFor = function (a) {
        return this.getState()[a] || null;
      };
      d.getStateKey = function (a) {
        return a.instanceID;
      };
      d.getStateValue = function (a) {
        return c("abstractMethod")("UFIKeyValueStore", "getStateValue");
      };
      d.reduce = function (a, b) {
        var c = this.getStateKey(b);
        b = this.getStateValue(b);
        if (b !== null) {
          var d;
          return babelHelpers["extends"]({}, a, ((d = {}), (d[c] = b), d));
        }
        return a;
      };
      return b;
    })(c("FluxReduceStore"));
    a.__moduleID = f.id;
    g["default"] = a;
  },
  98
);
__d(
  "UFICommercialBreakStore",
  ["UFIDispatcherBase", "UFIKeyValueStore"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var c = b.prototype;
      c.getValueFor = function (b) {
        return !!a.prototype.getValueFor.call(this, b);
      };
      c.getStateValue = function (a) {
        switch (a.type) {
          case "story_toggle_commercial_break":
            return a.inCommercial;
        }
        return null;
      };
      return b;
    })(c("UFIKeyValueStore"));
    b = new a(c("UFIDispatcherBase"));
    g["default"] = b;
  },
  98
);
__d(
  "UFIComposerIsTypingStore",
  ["UFIDispatcherBase", "UFIKeyValueStore"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var c = b.prototype;
      c.getStateKey = function (a) {
        return a.ftentidentifier;
      };
      c.getStateValue = function (a) {
        switch (a.type) {
          case "add_comment_submit_edit":
            return !1;
          case "add_comment_submit_new":
            return !1;
          case "add_comment_change_content":
            a = a.text.trim().length;
            return a > 0;
        }
        return null;
      };
      return b;
    })(c("UFIKeyValueStore"));
    b = new a(c("UFIDispatcherBase"));
    g["default"] = b;
  },
  98
);
__d(
  "UFIFeedbackStore",
  ["FluxReduceStore", "UFIDispatcherBase"],
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
          (c.reduce = function (a, b) {
            var c;
            switch (b.type) {
              case "instance_init":
                var d = b.payload;
                d = d.feedbacktarget
                  ? d.feedbacktarget
                  : d.feedbacktargets && d.feedbacktargets[0];
                return !d
                  ? a
                  : babelHelpers["extends"](
                      {},
                      a,
                      ((c = {}),
                      (c[b.ftentidentifier] = babelHelpers["extends"](
                        { orderingmodes: [], defaultcommentorderingmode: "" },
                        d
                      )),
                      c)
                    );
            }
            return a;
          }),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      var c = b.prototype;
      c.getInitialState = function () {
        return {};
      };
      return b;
    })(c("FluxReduceStore"));
    a.__moduleID = f.id;
    b = new a(c("UFIDispatcherBase"));
    g["default"] = b;
  },
  98
);
__d(
  "UFIInteractionStore",
  ["UFIDispatcherBase", "UFIKeyValueStore"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var c = b.prototype;
      c.getValueFor = function (b) {
        return !!a.prototype.getValueFor.call(this, b);
      };
      c.getStateValue = function (a) {
        switch (a.type) {
          case "add_comment_change_content":
          case "add_comment_submit_edit":
          case "add_comment_submit_new":
          case "comment_change_reaction":
          case "comment_edit":
          case "comment_remove":
          case "comment_toggle_like":
          case "comment_toggle_mark_as_spam":
          case "comment_translate":
          case "story_toggle_comments":
          case "story_page_in_comments":
          case "story_show_replies":
          case "story_toggle_replies":
            return !0;
        }
        return null;
      };
      return b;
    })(c("UFIKeyValueStore"));
    b = new a(c("UFIDispatcherBase"));
    g["default"] = b;
  },
  98
);
__d(
  "UFILiveTypingStore",
  ["FluxReduceStore", "UFIDispatcherBase"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var c, d;
        for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
          f[g] = arguments[g];
        return (
          ((c = d = a.call.apply(a, [this].concat(f)) || this),
          (d.reduce = function (a, c) {
            var d = b.getNewFeedbackState(c.type);
            if (d !== null) {
              var e;
              a = babelHelpers["extends"](
                {},
                a,
                ((e = {}), (e[c.ftentidentifier] = d), e)
              );
            }
            return a;
          }),
          c) || babelHelpers.assertThisInitialized(d)
        );
      }
      b.getNewFeedbackState = function (a) {
        switch (a) {
          case "story_friend_typing":
          case "story_someone_typing":
            return !0;
          case "story_typing_stopped":
            return !1;
          default:
            return null;
        }
      };
      var c = b.prototype;
      c.getInitialState = function () {
        return {};
      };
      return b;
    })(c("FluxReduceStore"));
    a.__moduleID = f.id;
    b = new a(c("UFIDispatcherBase"));
    g["default"] = b;
  },
  98
);
__d(
  "UFILiveVideoLoggingStore",
  ["FluxReduceStore", "LiveVideoViewerTypedLogger", "UFIDispatcherBase"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, d;
        for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
          f[g] = arguments[g];
        return (
          ((b = d = a.call.apply(a, [this].concat(f)) || this),
          (d.reduce = function (a, b) {
            switch (b.type) {
              case "story_show_facecast_replies":
                var d;
                new (c("LiveVideoViewerTypedLogger"))()
                  .setEvent("opened_reply_thread_from_comment")
                  .setCommentID(b.commentID)
                  .log();
                return babelHelpers["extends"](
                  {},
                  a,
                  ((d = {}),
                  (d[b.instanceID] = {
                    comment_id: b.commentID,
                    time_opened_ms: Date.now(),
                  }),
                  d)
                );
              case "story_hide_facecast_replies":
                if (!b.isExplicit) return a;
                d = a[b.instanceID];
                if (d == null) return a;
                new (c("LiveVideoViewerTypedLogger"))()
                  .setEvent("closed_reply_thread_explicitly")
                  .setCommentID(d.comment_id)
                  .setReplyThreadDurationMs(Date.now() - d.time_opened_ms)
                  .log();
                return babelHelpers["extends"](
                  {},
                  a,
                  ((b = {}), (b[d.comment_id] = null), b)
                );
              default:
                return a;
            }
          }),
          b) || babelHelpers.assertThisInitialized(d)
        );
      }
      var d = b.prototype;
      d.getInitialState = function () {
        return {};
      };
      return b;
    })(c("FluxReduceStore"));
    a.__moduleID = f.id;
    b = new a(c("UFIDispatcherBase"));
    g["default"] = b;
  },
  98
);
__d(
  "UFIOrderingModeStore",
  ["invariant", "FluxReduceStore", "UFIDispatcherBase", "UFIFeedbackStore"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    function i(a, b) {
      return (
        a
          .filter(function (a) {
            return a.selected;
          })
          .map(function (a) {
            return a.value;
          })
          .pop() || b
      );
    }
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, d;
        for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
          f[g] = arguments[g];
        return (
          ((b = d = a.call.apply(a, [this].concat(f)) || this),
          (d.reduce = function (a, b) {
            switch (b.type) {
              case "instance_init":
                if (a.has(b.instanceID)) return a;
                c("UFIDispatcherBase").waitFor([
                  c("UFIFeedbackStore").getDispatchToken(),
                ]);
                var d = c("UFIFeedbackStore").getState()[b.ftentidentifier];
                a = new Map(a);
                return a.set(
                  b.instanceID,
                  i(d.orderingmodes, d.defaultcommentorderingmode)
                );
            }
            return a;
          }),
          b) || babelHelpers.assertThisInitialized(d)
        );
      }
      var d = b.prototype;
      d.getInitialState = function () {
        return new Map();
      };
      d.areEqual = function (a, b) {
        return a === b;
      };
      d.isLiveStreaming = function (a) {
        return this.getState().get(a) == "live_streaming";
      };
      d.isInverted = function (a, b) {
        var d = !1;
        b = c("UFIFeedbackStore").getState()[b];
        if (b) {
          b = b.orderingmodes
            .filter(function (a) {
              return a.selected;
            })
            .pop();
          b && (d = b.isBottomUpVideoCommentSreamingEnabled);
        }
        switch (a) {
          case "recent_activity":
          case "ranked_threaded":
          case "ranked_unfiltered":
          case "live_streaming":
            return !d;
        }
        return !1;
      };
      d.getOrderingMode = function (a) {
        a = this.getState().get(a);
        a !== void 0 || h(0, 2896);
        return a;
      };
      return b;
    })(c("FluxReduceStore"));
    a.__moduleID = f.id;
    b = new a(c("UFIDispatcherBase"));
    g["default"] = b;
  },
  98
);
__d(
  "UFIReactionPendingRequestsStore",
  ["FluxReduceStore", "UFIActionTypes", "UFIDispatcherBase"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      return a + "-comment";
    }
    function i(a) {
      return a + "-story";
    }
    function j(a, b) {
      var c;
      return babelHelpers["extends"](
        {},
        a,
        ((c = {}), (c[b] = (a[b] || 0) + 1), c)
      );
    }
    function k(a, b) {
      var c;
      return babelHelpers["extends"](
        {},
        a,
        ((c = {}), (c[b] = (a[b] || 0) - 1), c)
      );
    }
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
          f[g] = arguments[g];
        return (
          ((b = c = a.call.apply(a, [this].concat(f)) || this),
          (c.reduce = function (a, b) {
            switch (b.type) {
              case d("UFIActionTypes").STORY.CHANGE_REACTION:
                return j(a, i(b.ftentidentifier));
              case d("UFIActionTypes").COMMENT.CHANGE_REACTION:
                return j(a, h(b.fbid));
              case d("UFIActionTypes").STORY.CHANGE_REACTION_SUCCESS:
              case d("UFIActionTypes").STORY.CHANGE_REACTION_FAILURE:
                return k(a, i(b.ftentidentifier));
              case d("UFIActionTypes").COMMENT.CHANGE_REACTION_FAILURE:
              case d("UFIActionTypes").COMMENT.CHANGE_REACTION_SUCCESS:
                return k(a, h(b.fbid));
            }
            return a;
          }),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      var c = b.prototype;
      c.getInitialState = function () {
        return {};
      };
      c.getPendingRequestsForComment = function (a) {
        return this.getState()[h(a)] || 0;
      };
      c.getPendingRequests = function (a) {
        return this.getState()[i(a)] || 0;
      };
      return b;
    })(c("FluxReduceStore"));
    a.__moduleID = f.id;
    b = new a(c("UFIDispatcherBase"));
    g["default"] = b;
  },
  98
);
__d(
  "UFIReactionSyncStore",
  ["FluxReduceStore", "UFIActionTypes", "UFIDispatcherBase"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      return a + "-comment";
    }
    function i(a) {
      return a + "-story";
    }
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
          f[g] = arguments[g];
        return (
          ((b = c = a.call.apply(a, [this].concat(f)) || this),
          (c.reduce = function (a, b) {
            switch (b.type) {
              case d("UFIActionTypes").INSTANCE.INIT:
                var c = b.payload;
                c = c.feedbacktarget
                  ? c.feedbacktarget
                  : c.feedbacktargets && c.feedbacktargets[0];
                if (!c) return a;
                var e = b.payload.comments.reduce(function (a, b) {
                  a[h(b.fbid)] = b.viewerreaction;
                  return a;
                }, {});
                return babelHelpers["extends"](
                  {},
                  a,
                  e,
                  ((e = {}), (e[i(b.ftentidentifier)] = c.viewerreaction), e)
                );
              case d("UFIActionTypes").STORY.CHANGE_REACTION_SUCCESS:
                return babelHelpers["extends"](
                  {},
                  a,
                  ((c = {}), (c[i(b.ftentidentifier)] = b.reactionType), c)
                );
              case d("UFIActionTypes").COMMENT.CHANGE_REACTION_SUCCESS:
                return babelHelpers["extends"](
                  {},
                  a,
                  ((e = {}), (e[h(b.fbid)] = b.reactionType), e)
                );
              default:
                return a;
            }
          }),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      var c = b.prototype;
      c.getInitialState = function () {
        return {};
      };
      c.getLastKnownCommentReaction = function (a) {
        return this.getState()[h(a)];
      };
      c.getLastKnownReaction = function (a) {
        return this.getState()[i(a)];
      };
      return b;
    })(c("FluxReduceStore"));
    a.__moduleID = f.id;
    b = new a(c("UFIDispatcherBase"));
    g["default"] = b;
  },
  98
);
__d(
  "UFIVideoPlayerControllerStore",
  ["FluxReduceStore", "UFIDispatcherBase"],
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
          (c.reduce = function (a, b) {
            switch (b.type) {
              case "found_video_player_controller":
                var c;
                return babelHelpers["extends"](
                  {},
                  a,
                  ((c = {}),
                  (c[b.instanceID] = {
                    videoPlayerController: b.videoPlayerController,
                  }),
                  c)
                );
              default:
                return a;
            }
          }),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      var c = b.prototype;
      c.getInitialState = function () {
        return {};
      };
      c.getVideoPlayerController = function (a) {
        var b;
        return (b = this.getState()) != null
          ? (b = b[a]) != null
            ? b.videoPlayerController
            : b
          : b;
      };
      return b;
    })(c("FluxReduceStore"));
    a.__moduleID = f.id;
    b = new a(c("UFIDispatcherBase"));
    g["default"] = b;
  },
  98
);
__d(
  "UFISharedDispatcher",
  [
    "UFICommentEditIDStore",
    "UFICommentVisibilityStore",
    "UFICommentVoteSyncStore",
    "UFICommercialBreakStore",
    "UFIComposerIsTypingStore",
    "UFIDispatcherBase",
    "UFIFeedbackStore",
    "UFIInteractionStore",
    "UFILivePinnedCommentStore",
    "UFILiveTypingStore",
    "UFILiveVideoLoggingStore",
    "UFILocallyComposedCommentStore",
    "UFIOrderingModeStore",
    "UFIReactionPendingRequestsStore",
    "UFIReactionSyncStore",
    "UFISpamStore",
    "UFIThreadedFacecastCommentsStore",
    "UFIVideoPlayerControllerStore",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b("UFIFeedbackStore"),
      b("UFICommentEditIDStore"),
      b("UFICommentVisibilityStore"),
      b("UFICommentVoteSyncStore"),
      b("UFICommercialBreakStore"),
      b("UFIComposerIsTypingStore"),
      b("UFIFeedbackStore"),
      b("UFIInteractionStore"),
      b("UFILivePinnedCommentStore"),
      b("UFILiveTypingStore"),
      b("UFILocallyComposedCommentStore"),
      b("UFIOrderingModeStore"),
      b("UFIReactionPendingRequestsStore"),
      b("UFIReactionSyncStore"),
      b("UFISpamStore"),
      b("UFIThreadedFacecastCommentsStore"),
      b("UFILiveVideoLoggingStore"),
      b("UFIVideoPlayerControllerStore"),
      (g["default"] = c("UFIDispatcherBase"));
  },
  98
);
__d(
  "UFICentralUpdatesLocalCommentAdapter",
  ["ClientIDs", "UFICentralUpdates", "UFIDispatcherBase"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = {},
      i = ((f = {}), (f[3] = a), (f[12] = b), f);
    function j() {
      return c("UFICentralUpdates").subscribe(
        "update-comments",
        function (a, b) {
          if (b.comments) {
            a = i[b.payloadsource];
            a && b.comments.forEach(a);
          }
        }
      );
    }
    function a(a) {
      if (!d("ClientIDs").isExistingClientID(a.id)) return;
      h[a.id] = a.ufiinstanceid;
      c("UFIDispatcherBase").dispatch({
        type: "CENTRALUPDATES_ADDED_COMMENT",
        instanceID: a.ufiinstanceid,
        ftentidentifier: a.ftentidentifier,
        clientID: a.id,
      });
    }
    function b(a) {
      if (!d("ClientIDs").isExistingClientID(a.clientid)) return;
      var b = h[a.clientid];
      delete h[a.clientid];
      if (!b) return;
      c("UFIDispatcherBase").dispatch({
        type: "CENTRALUPDATES_SAVED_COMMENT",
        instanceID: b,
        ftentidentifier: a.ftentidentifier,
        clientID: a.clientid,
        commentID: a.id,
      });
    }
    var k;
    function e() {
      if (!k) {
        k = j();
        return k;
      }
      return null;
    }
    g.subscribeOnce = e;
  },
  98
);
__d(
  "UFIPagedCommentListImpl",
  [
    "ClientIDs",
    "KeyedCallbackManager",
    "UFICentralUpdates",
    "UFIConstants",
    "UFIFeedbackTargets",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a) {
        var b = this;
        this.actorID = null;
        this.basePermalink = null;
        this.commentPermalinks = Object.create(null);
        this.count = 0;
        this.dataSource = new (c("KeyedCallbackManager"))();
        this.deletedComments = Object.create(null);
        this.deletedCount = 0;
        this.lastRequestedLength = 0;
        this.lastRequestedOffset = 0;
        this.feedbackTargetID = a;
        d("UFIFeedbackTargets").getFeedbackTarget(
          this.feedbackTargetID,
          function (a) {
            (b.actorID = a.actorforpost), (b.basePermalink = a.permalink);
          }
        );
      }
      var b = a.prototype;
      b.setClientHasAll = function (a) {};
      b.addOrUpdateComment = function (a) {
        if (!a) return;
        a.__typename === "local"
          ? this.$1(a.id)
          : this.$2(a.id, a.clientid, a.legacyid);
        c("UFICentralUpdates").didUpdateFeedback(this.feedbackTargetID);
      };
      b.$1 = function (a) {
        this.dataSource.setResource(this.count, a), this.count++;
      };
      b.$2 = function (a, b, c) {
        var e = b && d("ClientIDs").isExistingClientID(b),
          f = this.dataSource.getAllResources(),
          g = {};
        for (var h in f) {
          var i = f[Number(h)];
          g[i] = h;
        }
        if (e && b && b in g) {
          g[a] = g[b];
          i = g[b];
          this.dataSource.setResource(i, a);
        } else !g[a] && b && this.$1(a);
        c &&
          a in g &&
          (this.commentPermalinks[a] = this.buildCommentPermalink(a, c, g[a]));
      };
      b.addCommentIDs = function (a, b, e) {
        var f = {};
        for (var g = 0; g < b; g++)
          f[a + g] = e[g] || d("UFIConstants").unavailableCommentKey;
        this.dataSource.addResourcesAndExecute(f);
        c("UFICentralUpdates").didUpdateFeedback(this.feedbackTargetID);
      };
      b.getComments = function (a, b, c, d) {
        var e = this,
          f = new Array(b).fill().map(function (b, c) {
            return c + a;
          }),
          g = this.dataSource.getUnavailableResourcesFromRequest(f);
        if (g.length) {
          var h = Math.min.apply(Math, g);
          g = Math.max.apply(Math, g);
          var i = h;
          g = g - h + 1;
          (i < this.lastRequestedOffset ||
            i + g > this.lastRequestedOffset + this.lastRequestedLength) &&
            ((this.lastRequestedOffset = i),
            (this.lastRequestedLength = g),
            this.fetchComments(i, g, c));
        } else
          this.dataSource.executeOrEnqueue(f, function (c) {
            return d(e.commentsFromCommentIDs(c, a, b));
          });
      };
      b.getCommentsOrThrow = function (a) {
        var b = this;
        a = [a.getLength(), a.getOffset()];
        var c = a[0],
          d = a[1],
          e = {};
        new Array(c).fill().forEach(function (a, c) {
          a = c + d;
          c = b.dataSource.getResource(a);
          if (!c) throw new Error("Tried to get nonexistent comment");
          e[a] = c;
        });
        return this.commentsFromCommentIDs(e, d, c);
      };
      b.fetchComments = function (a, b, c) {};
      b.commentsFromCommentIDs = function (a, b, c) {
        return {};
      };
      b.reset = function () {
        var a = this.dataSource.getAllResources();
        this.dataSource.reset();
        this.count = 0;
        this.deletedCount = 0;
        this.deletedComments = {};
        this.lastRequestedOffset = 0;
        this.lastRequestedLength = 0;
        return a;
      };
      b.deleteComment = function (a) {
        a in this.deletedComments ||
          ((this.deletedComments[a] = !0), this.deletedCount++);
      };
      b.updateCommentCount = function (a) {
        (this.count = a), (this.deletedCount = 0);
      };
      b.getFeedbackTargetID = function () {
        return this.feedbackTargetID;
      };
      b.getCommentCount = function () {
        return this.count;
      };
      b.getDeletedCount = function () {
        return this.deletedCount;
      };
      b.getDisplayedCommentCount = function () {
        return this.count - this.deletedCount;
      };
      b.getBasePermalink = function () {
        return this.basePermalink;
      };
      b.buildCommentPermalink = function (a, b, c) {
        return null;
      };
      b.getPermalinkForComment = function (a) {
        return this.commentPermalinks[a];
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "UFIReplyCommentListImpl",
  [
    "ActorURI",
    "MercuryServerDispatcher",
    "UFIComments",
    "UFIPagedCommentListImpl",
    "URI",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c, d) {
        b = a.call(this, b) || this;
        b.parentCommentID = c;
        b.containerOrderingMode = d;
        return b;
      }
      var e = b.prototype;
      e.fetchComments = function (a, b, c) {
        a = {
          ft_ent_identifier: this.feedbackTargetID,
          parent_comment_ids: [this.parentCommentID],
          source: null,
          offsets: [a],
          lengths: [b],
          feed_context: c ? c.feedContext : null,
          numpagerclicks: c ? c.numPagerClicks : null,
          containerorderingmode: this.containerOrderingMode,
          translate_all: c ? c.translateAll : null,
        };
        (!c || !c.viewAs) && (a[d("ActorURI").PARAMETER_ACTOR] = this.actorID);
        d("MercuryServerDispatcher").trySend("/ajax/ufi/reply_fetch.php", a);
      };
      e.commentsFromCommentIDs = function (a, b, c) {
        var e = {};
        for (var f = 0; f < c; f++) {
          var g = d("UFIComments").getComment(a[b + f]);
          g && (e[b + f] = g);
        }
        return e;
      };
      e.reset = function () {
        var b = a.prototype.reset.call(this),
          c = {};
        for (var e in b) {
          var f = b[e];
          c[f] = !0;
        }
        d("UFIComments").resetComments(c);
        return b;
      };
      e.getParentCommentID = function () {
        return this.parentCommentID;
      };
      e.buildCommentPermalink = function (a, b, d) {
        if (!this.basePermalink) return null;
        a = this.getParentCommentID().split("_");
        d = b;
        a.length === 2 && (d = a[1]);
        return new (c("URI"))(this.basePermalink)
          .addQueryData({ comment_id: d, reply_comment_id: b })
          .toString();
      };
      return b;
    })(c("UFIPagedCommentListImpl"));
    d("MercuryServerDispatcher").registerEndpoints({
      "/ajax/ufi/reply_fetch.php": {
        mode: d("MercuryServerDispatcher").IMMEDIATE,
      },
    });
    g["default"] = a;
  },
  98
);
__d(
  "UFIToplevelPagedCommentListImpl",
  [
    "ActorURI",
    "MercuryServerDispatcher",
    "UFIComments",
    "UFIOrderingModeStore",
    "UFIPagedCommentListImpl",
    "URI",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c, d) {
        b = a.call(this, b) || this;
        b.clientHasAll = !1;
        b.orderingMode = c;
        b.section = d || "default";
        b.clientHasAll = !1;
        return b;
      }
      var e = b.prototype;
      e.fetchComments = function (a, b, c) {
        a = {
          ft_ent_identifier: this.feedbackTargetID,
          viewas: c && c.viewAs ? c.viewAs + "" : null,
          source: c && c.feedbackSource,
          offset: a,
          length: b,
          orderingmode: this.orderingMode,
          section: this.section,
          direction: c && c.direction,
          feed_context: c ? c.feedContext : null,
          numpagerclicks: c ? c.numPagerClicks : null,
          translate_all: c ? c.translateAll : null,
          clientcommentcount: this.count,
        };
        (this.orderingMode !== "ranked_threaded" ||
          this.orderingMode !== "ranked_unfiltered" ||
          this.orderingMode !== "recent_activity") &&
          delete a.clientcommentcount;
        (!c || !c.viewAs) && (a[d("ActorURI").PARAMETER_ACTOR] = this.actorID);
        c &&
          c.interactionRequestCorrelationID &&
          (a.ircid = c.interactionRequestCorrelationID);
        d("MercuryServerDispatcher").trySend("/ajax/ufi/comment_fetch.php", a);
      };
      e.commentsFromCommentIDs = function (a, b, e) {
        var f = {},
          g = b,
          h = b + e - 1,
          i = c("UFIOrderingModeStore").isInverted(
            this.orderingMode,
            this.feedbackTargetID
          );
        for (var j = 0; j < e; j++) {
          var k = i ? h - j : g + j;
          k = d("UFIComments").getComment(a[k]);
          k && (f[b + j] = k);
        }
        return f;
      };
      e.getOrderingMode = function () {
        return this.orderingMode;
      };
      e.getCommentSection = function () {
        return this.section;
      };
      e.setClientHasAll = function (a) {
        this.clientHasAll = a;
      };
      e.getClientHasAll = function () {
        return this.clientHasAll;
      };
      e.buildCommentPermalink = function (a, b, d) {
        return !this.basePermalink
          ? null
          : new (c("URI"))(this.basePermalink)
              .addQueryData({ comment_id: b })
              .toString();
      };
      return b;
    })(c("UFIPagedCommentListImpl"));
    d("MercuryServerDispatcher").registerEndpoints({
      "/ajax/ufi/comment_fetch.php": {
        mode: d("MercuryServerDispatcher").IMMEDIATE,
      },
    });
    g["default"] = a;
  },
  98
);
__d(
  "UFICentralUpdates",
  [
    "Arbiter",
    "ArbiterMixin",
    "LiveTimer",
    "ODS",
    "ShortProfiles",
    "UFIConstants",
    "UFIUserActions",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d("ODS").setEntitySample("feedback", 1e-4);
    var h = 0,
      i = {},
      j = {},
      k = [];
    function l() {
      if (!h) {
        var a = i,
          b = j;
        i = {};
        j = {};
        Object.keys(a).length && n("feedback-updated", a);
        Object.keys(b).length && n("comments-updated", b);
        k.pop();
      }
    }
    function m() {
      if (k.length) return k[k.length - 1];
      else return d("UFIConstants").UFIPayloadSourceType.UNKNOWN;
    }
    function n(a, b) {
      o.inform(a, { updates: b, payloadSource: m() });
    }
    var o = babelHelpers["extends"]({}, c("ArbiterMixin"), {
      handleUpdateWithUserAction: function (a, b) {
        b.actions.forEach(function (e) {
          a == d("UFIConstants").UFIPayloadSourceType.ENDPOINT_HIDE_COMMENT
            ? Object.prototype.hasOwnProperty.call(e, "commentid") &&
              (c("UFIUserActions").setHideAsSpam(e.commentid, !0, {
                source: 13,
              }),
              c("Arbiter").inform("bulk_actions_hidden", {}))
            : o.handleUpdate(a, b);
        });
      },
      handleUpdate: function (a, b) {
        Object.keys(b).length &&
          o.synchronizeInforms(function () {
            k.push(a);
            var c = babelHelpers["extends"]({ payloadsource: m() }, b);
            c.adjustedRanges && o.inform("update-ranges", c);
            o.inform("update-feedback", c);
            o.inform("update-comment-lists", c);
            o.inform("update-comments", c);
            o.inform("update-actions", c);
            d("ShortProfiles").setMulti(b.profiles || {});
            b.servertime && d("LiveTimer").restart(b.servertime);
          });
      },
      didUpdateFeedback: function (a) {
        (i[a] = !0), l();
      },
      didUpdateComment: function (a) {
        (j[a] = !0), l();
      },
      synchronizeInforms: function (a) {
        h++;
        try {
          a();
        } catch (a) {
          throw a;
        } finally {
          h--, l();
        }
      },
    });
    a = o;
    g["default"] = a;
  },
  98
);
__d(
  "UFICommentAction",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      return {
        type: "bulk_review",
        instanceID: a.instanceid,
        ftentidentifier: a.ftentidentifier,
        fbid: b.fbid,
        comment: b,
      };
    }
    function b(a, b, c, d) {
      return {
        type: "comment_change_reaction",
        instanceID: a.instanceid,
        ftentidentifier: a.ftentidentifier,
        fbid: b.fbid,
        comment: b,
        reactionType: c,
        target: d,
      };
    }
    function c(a, b, c) {
      return {
        type: "comment_change_reaction_success",
        instanceID: a.instanceid,
        ftentidentifier: a.ftentidentifier,
        fbid: b.fbid,
        comment: b,
        reactionType: c,
      };
    }
    function d(a, b, c) {
      return {
        type: "comment_change_reaction_failure",
        instanceID: a.instanceid,
        ftentidentifier: a.ftentidentifier,
        fbid: b.fbid,
        comment: b,
        reactionType: c,
      };
    }
    function e(a, b, c, d, e) {
      return {
        arrowType: e,
        comment: b,
        currentVoteState: d,
        fbid: b.fbid,
        ftentidentifier: a.ftentidentifier,
        instanceID: a.instanceid,
        target: c,
        type: "comment_change_vote",
      };
    }
    function g(a, b, c, d) {
      return {
        comment: b,
        fbid: b.fbid,
        ftentidentifier: a.ftentidentifier,
        instanceID: a.instanceid,
        type: "comment_change_vote_failure",
        voteCount: c,
        voteState: d,
      };
    }
    function h(a, b, c, d) {
      return {
        comment: b,
        fbid: b.fbid,
        ftentidentifier: a.ftentidentifier,
        instanceID: a.instanceid,
        type: "comment_change_vote_success",
        voteCount: c,
        voteState: d,
      };
    }
    function i(a, b, c, d) {
      return {
        fbid: b,
        ftentidentifier: a.ftentidentifier,
        instanceID: a.instanceid,
        type: "comment_update_vote_count_and_state",
        voteCount: c,
        voteState: d,
      };
    }
    function j(a, b) {
      return {
        type: "comment_mounted",
        instanceID: a.instanceid,
        ftentidentifier: a.ftentidentifier,
        fbid: b.comment.fbid,
        renderedComment: b,
        contextArgs: a,
      };
    }
    function k(a, b) {
      return {
        type: "comment_unmounted",
        instanceID: a.instanceid,
        ftentidentifier: a.ftentidentifier,
        fbid: b.comment.fbid,
        renderedComment: b,
        contextArgs: a,
      };
    }
    function l(a, b, c) {
      return {
        type: "comment_change_visibility",
        instanceID: a.instanceid,
        ftentidentifier: a.ftentidentifier,
        fbid: b.comment.fbid,
        renderedComment: b,
        contextArgs: a,
        visibility: c,
      };
    }
    function m(a, b) {
      return {
        type: "comment_edit",
        instanceID: a.instanceid,
        ftentidentifier: a.ftentidentifier,
        fbid: b.fbid,
        comment: b,
      };
    }
    function n(a, b, c, d, e) {
      e === void 0 && (e = !1);
      return {
        type: "comment_remove",
        instanceID: a.instanceid,
        ftentidentifier: a.ftentidentifier,
        fbid: b.fbid,
        comment: b,
        target: c,
        onConfirm: d,
        skipConfirmation: e,
      };
    }
    function o(a, b, c, d) {
      return {
        type: "comment_remove_and_block",
        instanceID: a.instanceid,
        ftentidentifier: a.ftentidentifier,
        fbid: b.fbid,
        comment: b,
        target: c,
        onConfirm: d,
      };
    }
    function p(a, b, c, d) {
      return {
        type: "comment_delete_and_commenter_remove",
        instanceID: a.instanceid,
        ftentidentifier: a.ftentidentifier,
        fbid: b.fbid,
        comment: b,
        target: c,
        onConfirm: d,
      };
    }
    function q(a, b, c, d) {
      return {
        type: "commenter_muted",
        instanceID: a.instanceid,
        ftentidentifier: a.ftentidentifier,
        fbid: b.fbid,
        comment: b,
        target: c,
        onConfirm: d,
      };
    }
    function r(a, b, c) {
      return {
        type: "comment_toggle_text_delights",
        instanceID: a.instanceid,
        ftentidentifier: a.ftentidentifier,
        fbid: b.fbid,
        comment: b,
        target: c,
      };
    }
    function s(a, b, c) {
      return {
        type: "comment_remove_preview",
        instanceID: a.instanceid,
        ftentidentifier: a.ftentidentifier,
        fbid: b.fbid,
        comment: b,
        target: c,
      };
    }
    function t(a, b, c) {
      return {
        type: "comment_toggle_like",
        instanceID: a.instanceid,
        ftentidentifier: a.ftentidentifier,
        fbid: b.fbid,
        comment: b,
        like: !b.hasviewerliked,
        target: c,
      };
    }
    function u(a, b, c) {
      return {
        type: "comment_translate",
        instanceID: a.instanceid,
        ftentidentifier: a.ftentidentifier,
        fbid: b.fbid,
        comment: b,
        trigger: c,
      };
    }
    function v(a, b, c) {
      return {
        type: "comment_toggle_mark_as_spam",
        instanceID: a.instanceid,
        ftentidentifier: a.ftentidentifier,
        fbid: b.fbid,
        comment: b,
        is_spam: !0,
        target: c,
      };
    }
    function w(a, b, c) {
      return {
        type: "comment_toggle_mark_as_spam",
        instanceID: a.instanceid,
        ftentidentifier: a.ftentidentifier,
        fbid: b.fbid,
        comment: b,
        is_spam: !1,
        target: c,
      };
    }
    function x(a, b, c, d) {
      return {
        type: "comment_toggle_inline_ban",
        instanceID: a.instanceid,
        ftentidentifier: a.ftentidentifier,
        fbid: b.fbid,
        comment: b,
        is_banned: !0,
        ownerid: d,
        target: c,
      };
    }
    function y(a, b, c, d) {
      return {
        type: "comment_toggle_inline_ban",
        instanceID: a.instanceid,
        ftentidentifier: a.ftentidentifier,
        fbid: b.fbid,
        comment: b,
        is_banned: !1,
        ownerid: d,
        target: c,
      };
    }
    function z(a, b, c, d) {
      return {
        type: "comment_toggle_inline_stream_ban",
        instanceID: a.instanceid,
        ftentidentifier: a.ftentidentifier,
        fbid: b.fbid,
        comment: b,
        is_banned: !0,
        ownerid: d,
        target: c,
      };
    }
    function A(a, b, c, d) {
      return {
        type: "comment_toggle_inline_stream_ban",
        instanceID: a.instanceid,
        ftentidentifier: a.ftentidentifier,
        fbid: b.fbid,
        comment: b,
        is_banned: !1,
        ownerid: d,
        target: c,
      };
    }
    function B(a, b, c, d, e) {
      return {
        type: "comment_toggle_inline_suspension",
        instanceID: a.instanceid,
        ftentidentifier: a.ftentidentifier,
        fbid: b.fbid,
        comment: b,
        is_suspended: !0,
        suspension_duration_seconds: e,
        ownerid: d,
        target: c,
      };
    }
    function C(a, b, c, d) {
      return {
        type: "comment_toggle_inline_suspension",
        instanceID: a.instanceid,
        ftentidentifier: a.ftentidentifier,
        fbid: b.fbid,
        comment: b,
        is_suspended: !1,
        suspension_duration_seconds: 0,
        ownerid: d,
        target: c,
      };
    }
    function D(a, b) {
      return {
        type: "embed",
        instanceID: a.instanceid,
        ftentidentifier: a.ftentidentifier,
        fbid: b.fbid,
        comment: b,
      };
    }
    function E(a, b, c) {
      return {
        type: "comment_delete_with_feedback",
        instanceID: a.instanceid,
        ftentidentifier: a.ftentidentifier,
        fbid: b.fbid,
        comment: b,
        target: c,
      };
    }
    function F(a, b, c) {
      return {
        comment: b,
        type: "comment_change_author_pin",
        instanceID: a.instanceid,
        ftentidentifier: a.ftentidentifier,
        fbid: b.fbid,
        pinnedByAuthor: c,
      };
    }
    function G(a, b) {
      return {
        type: "comment_manage_constituent_badge",
        instanceID: a.instanceid,
        ftentidentifier: a.ftentidentifier,
        fbid: b.fbid,
        comment: b,
      };
    }
    function H(a, b, c) {
      return {
        type: "comment_toggle_keep_spam",
        instanceID: a.instanceid,
        ftentidentifier: a.ftentidentifier,
        fbid: b.fbid,
        comment: b,
        target: c,
      };
    }
    function I(a, b, c, d) {
      return {
        type: "comment_toggle_appeal_spam",
        instanceID: a.instanceid,
        ftentidentifier: b.fbid,
        fbid: b.fbid,
        comment: b,
        target: c,
        feedback: d,
      };
    }
    function J(a, b, c, d) {
      return {
        type: "comment_toggle_secure_account",
        instanceID: a.instanceid,
        ftentidentifier: b.fbid,
        fbid: b.fbid,
        comment: b,
        target: c,
        feedback: d,
      };
    }
    f.bulkReview = a;
    f.changeReaction = b;
    f.changeReactionSuccess = c;
    f.changeReactionFailure = d;
    f.changeVote = e;
    f.changeVoteFailure = g;
    f.changeVoteSuccess = h;
    f.updateVoteCountAndState = i;
    f.mounted = j;
    f.unmounted = k;
    f.changeVisibility = l;
    f.edit = m;
    f.remove = n;
    f.removeAndBlock = o;
    f.delete_comment_and_remove_commenter = p;
    f.mute_member = q;
    f.toggle_text_delights = r;
    f.removePreview = s;
    f.toggleLike = t;
    f.translate = u;
    f.markAsSpam = v;
    f.markAsNotSpam = w;
    f.inlineBan = x;
    f.undoInlineBan = y;
    f.inlineStreamBan = z;
    f.undoInlineStreamBan = A;
    f.inlineSuspension = B;
    f.undoInlineSuspension = C;
    f.embed = D;
    f.deleteCommentWithFeedback = E;
    f.pinByAuthor = F;
    f.manageConstituentBadge = G;
    f.keepSpam = H;
    f.appealSpam = I;
    f.secureAccount = J;
  },
  66
);
__d(
  "UFICommentVoteUserActions",
  [
    "AsyncRequest",
    "AsyncResponse",
    "ChannelClientID",
    "ClientIDs",
    "ThisControllerNoLongerExists",
    "UFICentralUpdates",
    "UFICommentAction",
    "UFICommentVoteSyncStore",
    "UFIComments",
    "UFIConstants",
    "UFIFeedbackTargets",
    "UFISharedDispatcher",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = null;
    function a(a, b, e, f, g, l) {
      var m = d("UFIComments").getComment(a),
        n = c("UFICommentVoteSyncStore").getVoteCount(b),
        o = c("UFICommentVoteSyncStore").getOptimisticVoteState(f, e),
        p = c("UFICommentVoteSyncStore").getOptimisticVoteCount(b, o);
      if (!m || m.__typename !== "saved" || f === o) return;
      d("UFIFeedbackTargets").getFeedbackTarget(
        m.ftentidentifier,
        function (b) {
          b = k(m, b, p, o);
          c("UFICentralUpdates").handleUpdate(
            d("UFIConstants").UFIPayloadSourceType.USER_ACTION,
            { actions: b }
          );
          h && h.abort();
          b = d("ThisControllerNoLongerExists").__DEADURI__("k0233k87l");
          h = new (c("AsyncRequest"))()
            .setURI(b)
            .setMethod("POST")
            .setData({
              client_id: d("ClientIDs").getNewClientID(),
              comment_id: a,
              ft_ent_identifier: m.ftentidentifier,
              instance_id: g.instanceid,
              legacy_id: m.legacyid,
              new_vote_count: p,
              new_vote_state: o,
              old_vote_count: n,
              old_vote_state: f,
              session_id: d("ChannelClientID").getID(),
              source: g.source,
            })
            .setErrorHandler(function (a) {
              i(a);
            })
            .setHandler(function (a) {
              j(a);
            });
        }
      );
      h && h.send();
    }
    function i(b) {
      var a = b.request;
      if (!a || !a.data) return;
      a = a.data;
      var e = d("UFIComments").getComment(a.comment_id);
      if (!e || e.__typename !== "saved") return;
      var f = a.ft_ent_identifier,
        g = a.instance_id,
        i = a.old_vote_count;
      a = a.old_vote_state;
      if (!f || !g) return;
      c("UFISharedDispatcher").dispatch(
        d("UFICommentAction").changeVoteFailure(
          { instanceid: g, ftentidentifier: f },
          e,
          i,
          a
        )
      );
      c("AsyncResponse").defaultErrorHandler(b);
    }
    function j(a) {
      a = a.request;
      if (!a || !a.data) return;
      a = a.data;
      var b = d("UFIComments").getComment(a.comment_id);
      if (!b || b.__typename !== "saved") return;
      var e = a.ft_ent_identifier,
        f = a.instance_id,
        g = a.new_vote_count;
      a = a.new_vote_state;
      if (!e || !f) return;
      c("UFISharedDispatcher").dispatch(
        d("UFICommentAction").changeVoteSuccess(
          { instanceid: f, ftentidentifier: e },
          b,
          g,
          a
        )
      );
    }
    function k(a, b, c, e) {
      var f = a.id;
      b = [l(a, c, e, f, b.actorforpost)];
      a.voteState !== e &&
        b.push({
          commentID: f,
          actionType: d("UFIConstants").UFIActionType.COMMENT_VOTE,
          voteCount: c,
          voteEnabled: !0,
          voteState: e,
        });
      return b;
    }
    function l(a, b, c, e, f) {
      return {
        actionType: d("UFIConstants").UFIActionType.COMMENT_VOTE,
        commentID: e,
        voteCount: b,
        voteEnabled: a.voteEnabled,
        voteState: c,
      };
    }
    g.changeCommentVote = a;
  },
  98
);
__d(
  "UFIComments",
  [
    "invariant",
    "ClientIDs",
    "ImmutableObject",
    "UFICentralUpdates",
    "UFIConstants",
    "randomInt",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = 5,
      j = {},
      k = {},
      l = {},
      m = {},
      n = {};
    m.shareOnComment = n;
    var o = "DONT_SHOW_SHARE_OPTION";
    function p(a) {
      return a in k ? k[a] : a;
    }
    function q(a, b) {
      a.forEach(function (a) {
        var e = a.ftentidentifier,
          f = d("UFIConstants").UFIPayloadSourceType,
          g = a.clientid,
          h = !1,
          m = babelHelpers["extends"]({}, a);
        if (g) {
          delete m.clientid;
          h = d("ClientIDs").isExistingClientID(g);
          if (h && k[g]) return;
        }
        (b === d("UFIConstants").UFIPayloadSourceType.LIVE_SEND ||
          b === d("UFIConstants").UFIPayloadSourceType.STREAMING) &&
          (m.islive = !0);
        (b === f.ENDPOINT_COMMENT_FETCH || b === f.ENDPOINT_ID_COMMENT_FETCH) &&
          (m.fromfetch = !0);
        h &&
          j[g] &&
          ((m.ufiinstanceid = j[g].ufiinstanceid),
          (m.trackingID = j[g].trackingID),
          (k[g] = a.id),
          (l[a.id] = g),
          (j[a.id] = j[g]),
          delete j[g],
          c("UFICentralUpdates").didUpdateComment(g));
        if (
          b === f.LIVE_SEND ||
          b === d("UFIConstants").UFIPayloadSourceType.STREAMING ||
          b === f.USER_ACTION ||
          b === f.ENDPOINT_ADD_COMMENT ||
          b === f.ENDPOINT_EDIT_COMMENT
        ) {
          m.isunseen = !0;
          if (
            a.body &&
            a.body.text &&
            a.body.text.trim().split(/\s+/).length >= i &&
            (b === f.USER_ACTION || b === f.ENDPOINT_ADD_COMMENT)
          ) {
            h = n[e];
            h !== o && (n[e] = !h || a.id === h || K(a.id) === h ? a.id : o);
          }
        }
        M(a.id, new (c("ImmutableObject"))(m));
        c("UFICentralUpdates").didUpdateComment(a.id);
        c("UFICentralUpdates").didUpdateFeedback(e);
      });
    }
    function r(a, b) {
      for (var c = 0; c < a.length; c++) {
        var e = a[c];
        switch (e.actiontype) {
          case d("UFIConstants").UFIActionType.LIKE_ACTION:
            L(e.entidentifier) &&
              u(
                e.clientid,
                e.entidentifier,
                e.hasviewerliked,
                e.likecount,
                e.reactiondata,
                b
              );
            break;
          case d("UFIConstants").UFIActionType.COMMENT_LIKE:
            u(
              e.clientid,
              e.commentid,
              e.viewerliked,
              e.likecount,
              e.reactiondata,
              b
            );
            break;
          case d("UFIConstants").UFIActionType.MUTE_MEMBER:
            v(e);
            break;
          case d("UFIConstants").UFIActionType.REACTION:
            L(e.entidentifier) && w(e.entidentifier, e);
            break;
          case d("UFIConstants").UFIActionType.COMMENT_REACTION:
            w(e.commentid, e);
            break;
          case d("UFIConstants").UFIActionType.DELETE_COMMENT:
            A(e);
            break;
          case d("UFIConstants").UFIActionType.LIVE_DELETE_COMMENT:
            B(e);
            break;
          case d("UFIConstants").UFIActionType.CHANGE_ACCEPTED_ANSWER:
            C(e);
            break;
          case d("UFIConstants").UFIActionType.REMOVE_PREVIEW:
            D(e);
            break;
          case d("UFIConstants").UFIActionType.COMMENT_SET_SPAM:
            E(e);
            break;
          case d("UFIConstants").UFIActionType.COMMENT_KEEP_SPAM:
            F(e);
            break;
          case d("UFIConstants").UFIActionType.CONFIRM_COMMENT_REMOVAL:
            G(e);
            break;
          case d("UFIConstants").UFIActionType.TRANSLATE_COMMENT:
            y(e);
            break;
          case d("UFIConstants").UFIActionType.COMMENT_LIKECOUNT_UPDATE:
            x(e);
            break;
          case d("UFIConstants").UFIActionType.UPDATE_CONSTITUENT_BADGE:
            I(e);
            break;
          case d("UFIConstants").UFIActionType.COMMENT_VOTE:
            t(e);
            break;
          case d("UFIConstants").UFIActionType.COMMENT_AUTHOR_PIN_CHANGE:
            s(e);
        }
      }
    }
    function s(a) {
      var b = L(a.commentid);
      b && J(b.id, { ispinnedbyauthor: a.ispinnedbyauthor });
    }
    function t(a) {
      var b = L(a.commentID);
      b &&
        J(b.id, {
          voteCount: a.voteCount,
          voteEnabled: a.voteEnabled,
          voteState: a.voteState,
        });
    }
    function u(a, b, e, f, g, h) {
      h = L(b);
      if (h) {
        h = {};
        a = a && d("ClientIDs").isExistingClientID(a);
        a ||
          ((h.hasviewerliked = e),
          (h.likecount = f),
          g &&
            ((h.reactioncount = g.reactioncount),
            (h.reactioncountmap = g.reactioncountmap),
            (h.reactioncountreduced = g.reactioncountreduced),
            (h.viewerreaction = g.viewerreaction)));
        h.likeconfirmhash = c("randomInt")(0, 1024);
        J(b, h);
      }
    }
    function v(a) {
      for (var b in j) {
        var c = j[b];
        if (c.author === a.authorid) {
          c = { ismuted: a.shouldmute };
          J(b, c);
        }
      }
    }
    function w(a, b) {
      var c = L(a);
      if (c) {
        var e = {};
        if (
          b.clientid &&
          d("ClientIDs").isExistingClientID(b.clientid) &&
          b.viewerreaction !== c.viewerreaction
        )
          return;
        e.hasviewerliked = b.hasviewerliked;
        e.likecount = b.likecount;
        e.reactioncount = b.reactioncount;
        e.reactioncountmap = b.reactioncountmap;
        e.reactioncountreduced = b.reactioncountreduced;
        e.viewerreaction = b.viewerreaction;
        J(a, e);
      }
    }
    function x(a) {
      var b = L(a.commentid);
      if (b && a.hasviewerliked === b.hasviewerliked) {
        b = {
          likecount: a.likecount,
          likeconfirmhash: c("randomInt")(0, 1024),
        };
        J(a.commentid, b);
      }
    }
    function y(a) {
      var b = a.commentid,
        c = L(b);
      if (c) {
        c = { translationdata: a.translationdata };
        J(b, c);
      }
    }
    function z(a) {
      return {
        reportLink: a.reportLink,
        commenterIsFOF: a.commenterIsFOF,
        userIsMinor: a.userIsMinor,
        giveFeedbackLink: a.giveFeedbackLink,
        reportOptionsLink: a.reportOptionsLink,
        isBroadcast: a.isBroadcast,
        showStreamBanControls: a.showStreamBanControls,
      };
    }
    function A(a) {
      a = L(a.commentid);
      a && H(a, d("UFIConstants").UFIStatus.DELETED);
    }
    function B(a) {
      a = L(a.commentid);
      a &&
        a.status !== d("UFIConstants").UFIStatus.DELETED &&
        H(a, d("UFIConstants").UFIStatus.LIVE_DELETED);
    }
    function C(a) {
      J(a.commentid, { postacceptedanswer: a.isaccepted ? a.commentid : null });
    }
    function D(a) {
      J(a.commentid, { attachment: null });
    }
    function E(a) {
      var b = L(a.commentid);
      a = a.shouldHideAsSpam ? d("UFIConstants").UFIStatus.SPAM_DISPLAY : null;
      b && H(b, a);
    }
    function F(a) {
      a = L(a.commentid);
      a && J(a.id, { needsApproval: !1, isApproved: !0 });
    }
    function G(a) {
      J(a.commentid, z(a));
    }
    function H(a, b) {
      J(a.id, { priorstatus: a.status, status: b });
    }
    function I(a) {
      var b = L(a.commentid);
      if (b) {
        b = {
          constituentTitle: a.constituentTitle,
          hasConstituentBadge: a.hasConstituentBadge,
        };
        J(a.commentid, b);
      }
    }
    function J(a, b) {
      var d = L(a) || new (c("ImmutableObject"))({});
      M(a, c("ImmutableObject").set(d, b));
      c("UFICentralUpdates").didUpdateComment(d.id);
      c("UFICentralUpdates").didUpdateFeedback(d.ftentidentifier);
    }
    function a(a) {
      return "comment" + (a in l ? l[a] : a);
    }
    function K(a) {
      return a in l ? l[a] : a;
    }
    function L(a) {
      return a === d("UFIConstants").unavailableCommentKey ? null : j[p(a)];
    }
    function M(a, b) {
      b instanceof c("ImmutableObject") || h(0, 11854), (j[p(a)] = b);
    }
    function b(a, b) {
      a.length !== 0 || h(0, 4389), (m[a] = b);
    }
    function e(a) {
      return m[a];
    }
    function f(a) {
      for (a in a) delete j[p(a)];
    }
    function N(a) {
      var b = [];
      for (var c in j) {
        var d = j[c];
        d.author == a && b.push(d);
      }
      return b;
    }
    function O(a) {
      var b = [];
      for (var c in j) {
        var d = j[c];
        d.ftentidentifier == a && b.push(d);
      }
      return b;
    }
    c("UFICentralUpdates").subscribe("update-comments", function (a, b) {
      b.comments && b.comments.length && q(b.comments, b.payloadsource),
        b.privatecomments &&
          b.privatecomments.length &&
          q(b.privatecomments, b.payloadsource),
        b.pinnedcomments &&
          b.pinnedcomments.length &&
          q(b.pinnedcomments, b.payloadsource),
        b.livethreadedcomments &&
          b.livethreadedcomments.length &&
          q(b.livethreadedcomments, b.payloadsource),
        b.authorpinnedcomments &&
          b.authorpinnedcomments.length &&
          q(b.authorpinnedcomments, b.payloadsource);
    });
    c("UFICentralUpdates").subscribe("update-actions", function (a, b) {
      b.actions && b.actions.length && r(b.actions, b.payloadsource);
    });
    g.getRenderKey = a;
    g.getLocalID = K;
    g.getComment = L;
    g.setComment = M;
    g.setCacheVariable = b;
    g.getCacheVariable = e;
    g.resetComments = f;
    g.getCommentsForAuthor = N;
    g.getCommentsForFTEntIdentifier = O;
  },
  102
);
__d(
  "UFIFeedbackTargets",
  ["Bootloader", "KeyedCallbackManager", "UFICentralUpdates"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = new (c("KeyedCallbackManager"))();
    function i(a) {
      var b;
      if (!a) return;
      var d = babelHelpers["extends"]({}, a);
      delete d.commentlist;
      delete d.commentcount;
      c("UFICentralUpdates").didUpdateFeedback(a.entidentifier);
      h.addResourcesAndExecute(((b = {}), (b[a.entidentifier] = d), b));
    }
    function j(a, b) {
      c("Bootloader").loadModules(
        ["UFIFeedbackMutator"],
        function (c) {
          for (var d = 0; d < a.length; d++) {
            var e = a[d];
            e.arecommentsdisabled = !!e.arecommentsdisabled;
            e.cancomment = !!e.cancomment;
            e.hasviewerliked = !!e.hasviewerliked;
            e.hasviewersubscribed = !!e.hasviewersubscribed;
            e.likecount = e.likecount || 0;
            var f = h.getResource(e.entidentifier);
            if (!f) break;
            var g = c.getHandlerForAction(e);
            i(g(f, e, b));
          }
        },
        "UFIFeedbackTargets"
      );
    }
    function a(a, b) {
      return h.executeOrEnqueue(a, b);
    }
    function b(a) {
      return h.getResource(a) || null;
    }
    function d(a) {
      h.unsubscribe(a);
    }
    c("UFICentralUpdates").subscribe("update-feedback", function (a, b) {
      a = b.feedbacktarget
        ? b.feedbacktarget
        : b.feedbacktargets && b.feedbacktargets[0];
      a && i(a);
    });
    c("UFICentralUpdates").subscribe("update-actions", function (a, b) {
      b.actions && b.actions.length && j(b.actions, b.payloadsource);
    });
    g.getFeedbackTarget = a;
    g.getFeedbackTargetIfExists = b;
    g.unsubscribe = d;
  },
  102
);
__d(
  "UFIReactionsUtils",
  [],
  function (a, b, c, d, e, f) {
    function a(a, b, c, d, e) {
      e === void 0 && (e = null);
      b = parseInt(b, 10);
      var f = !!b,
        g = a.reactorids ? a.reactorids.slice(0) : [],
        h = g.indexOf(c),
        i = 0;
      f
        ? h < 0 && (c && g.unshift(c), (i = 1))
        : h > -1 && (g.splice(h, 1), (i = -1));
      h = Math.max(a.reactioncount + i, 0);
      i = a.reactioncountreduced;
      i && !isNaN(i) && (d ? (i = d(h)) : (i = h.toString()));
      d = a.reactioncountmap || {};
      var j = a.reactioncountmapbyid || {},
        k,
        l = a.viewerreaction,
        m = a.viewerreactionid;
      l &&
        d[l] &&
        ((d[l]["default"] = Math.max((d[l]["default"] || 0) - 1, 0)),
        (k = d[l].reduced),
        k && !isNaN(k) && (d[l].reduced = d[l]["default"].toString()));
      m &&
        j[m] &&
        ((j[m]["default"] = Math.max((j[m]["default"] || 0) - 1, 0)),
        (k = j[m].reduced),
        k && !isNaN(k) && (j[m].reduced = j[m]["default"].toString()));
      f &&
        d[b] &&
        ((d[b]["default"] = (d[b]["default"] || 0) + 1),
        (k = d[b].reduced),
        k && !isNaN(k) && (d[b].reduced = d[b]["default"].toString()));
      f &&
        e !== null &&
        (j[e] || (j[e] = {}),
        (j[e]["default"] = (j[e]["default"] || 0) + 1),
        (k = j[e].reduced),
        k && !isNaN(k) && (j[e].reduced = j[e]["default"].toString()));
      m = a.userreactions;
      (!m || Array.isArray(m)) && (m = {});
      c && (f ? (m[c] = b) : delete m[c]);
      k = null;
      if (a.reactionsentences) {
        f = !(l && b);
        k = {
          current: a.reactionsentences[f ? "alternate" : "current"],
          alternate: a.reactionsentences[f ? "current" : "alternate"],
        };
      }
      return {
        reactioncount: h,
        reactioncountmap: d,
        reactioncountmapbyid: j,
        reactioncountreduced: i,
        reactionsentences: k,
        reactorids: g,
        userreactions: m,
        viewerreaction: b,
        viewerreactionid: e,
      };
    }
    function b(a) {
      var b = {};
      if (!a) return b;
      for (var c = 0; c < a.length; c++) {
        var d = a[c],
          e = d.feedback_reaction.key;
        b[e] = {
          default: d.reactors && d.reactors.count,
          reduced: d.reactors && d.reactors.display_count,
        };
      }
      return b;
    }
    f.getReactionData = a;
    f.getReactionCountMapFromSummary = b;
  },
  66
);
__d(
  "UFIStoryAction",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b, c) {
      return {
        type: "story_change_accepted_answer",
        instanceID: a.instanceid,
        ftentidentifier: b.ftentidentifier,
        comment: b,
        doAccept: c,
      };
    }
    function b(a, b, c, d, e, f, g) {
      return {
        type: "story_comments_arrived",
        instanceID: a.instanceid,
        ftentidentifier: a.ftentidentifier,
        section: e,
        newOffset: b,
        newLength: c,
        source: d,
        interactionRequestCorrelationID: f,
        liveVideoCommentPermalinkID: g,
      };
    }
    function c(a, b, c, d, e) {
      return {
        type: "story_page_in_comments",
        instanceID: a.instanceid,
        ftentidentifier: a.ftentidentifier,
        interactionRequestCorrelationID: a.interactionRequestCorrelationID,
        commentID: b,
        direction: c,
        nextRange: d,
        section: e,
      };
    }
    function d(a) {
      return {
        type: "story_show_comments",
        instanceID: a.instanceid,
        ftentidentifier: a.ftentidentifier,
      };
    }
    function e(a, b, c) {
      return {
        type: "story_show_replies",
        instanceID: a.instanceid,
        ftentidentifier: a.ftentidentifier,
        commentID: b,
        initiatorComment: c,
      };
    }
    function g(a, b, c, d) {
      return {
        type: "story_spam_fetched",
        instanceID: a.instanceid,
        ftentidentifier: a.ftentidentifier,
        viewas: b,
        commentIDs: c,
        parentCommentID: d,
      };
    }
    function h(a, b, c, d, e) {
      d === void 0 && (d = null);
      e === void 0 && (e = null);
      return {
        type: "story_change_reaction",
        instanceID: a.instanceid,
        ftentidentifier: a.ftentidentifier,
        contextArgs: a,
        reactionType: b,
        target: c,
        sphericalYaw: d,
        sphericalPitch: e,
      };
    }
    function i(a, b) {
      return {
        type: "story_change_reaction_success",
        instanceID: a.instanceid,
        ftentidentifier: a.ftentidentifier,
        reactionType: b,
      };
    }
    function j(a, b) {
      return {
        type: "story_change_reaction_failure",
        instanceID: a.instanceid,
        ftentidentifier: a.ftentidentifier,
        reactionType: b,
      };
    }
    function k(a, b) {
      return {
        type: "story_toggle_replies",
        instanceID: a.instanceid,
        ftentidentifier: a.ftentidentifier,
        commentID: b,
      };
    }
    function l(a) {
      return {
        type: "story_someone_typing",
        instanceID: a.instanceid,
        ftentidentifier: a.ftentidentifier,
      };
    }
    function m(a) {
      return {
        type: "story_typing_stopped",
        instanceID: a.instanceid,
        ftentidentifier: a.ftentidentifier,
      };
    }
    function n(a, b, c) {
      c === void 0 && (c = null);
      return {
        type: "story_live_pin_comment",
        instanceID: a.instanceid,
        ftentidentifier: a.ftentidentifier,
        commentID: b,
        pinEventID: c,
      };
    }
    function o(a, b) {
      b === void 0 && (b = null);
      return {
        type: "story_live_unpin_comment",
        instanceID: a.instanceid,
        ftentidentifier: a.ftentidentifier,
        commentID: null,
        pinEventID: b,
      };
    }
    function p(a, b) {
      return {
        type: "story_show_facecast_replies",
        instanceID: a.instanceid,
        ftentidentifier: a.ftentidentifier,
        commentID: b,
      };
    }
    function q(a, b) {
      return {
        type: "story_hide_facecast_replies",
        instanceID: a.instanceid,
        ftentidentifier: a.ftentidentifier,
        isExplicit: b,
      };
    }
    function r(a, b) {
      return {
        type: "story_add_facecast_reply",
        instanceID: a.instanceid,
        ftentidentifier: a.ftentidentifier,
        replyCommentID: b,
      };
    }
    function s(a, b) {
      return {
        type: "story_add_facecast_replies",
        instanceID: a.instanceid,
        ftentidentifier: a.ftentidentifier,
        replyCommentIDs: b,
      };
    }
    function t(a, b) {
      return {
        type: "facecast_replies_loaded",
        instanceID: a.instanceid,
        ftentidentifier: a.ftentidentifier,
        commentID: b,
      };
    }
    function u(a, b) {
      return {
        type: "set_comments_scroll_distance",
        instanceID: a.instanceid,
        ftentidentifier: a.ftentidentifier,
        scrollDist: b,
      };
    }
    function v(a, b) {
      return {
        type: "handle_new_comments",
        instanceID: a.instanceid,
        ftentidentifier: a.ftentidentifier,
        numComments: b,
      };
    }
    function w(a, b) {
      return {
        type: "handle_new_facecast_reply",
        instanceID: a.instanceid,
        ftentidentifier: a.ftentidentifier,
        replyCommentID: b,
      };
    }
    function x(a, b) {
      return {
        type: "set_comment_reactions_menu_shown",
        instanceID: a.instanceid,
        ftentidentifier: a.ftentidentifier,
        commentReactionsMenuShown: b,
      };
    }
    f.changeAcceptedAnswer = a;
    f.commentsArrived = b;
    f.pageInComments = c;
    f.showComments = d;
    f.showReplies = e;
    f.spamFetched = g;
    f.changeReaction = h;
    f.changeReactionSuccess = i;
    f.changeReactionFailure = j;
    f.toggleReplies = k;
    f.someoneTyping = l;
    f.typingStopped = m;
    f.pinComment = n;
    f.unpinComment = o;
    f.showFacecastReplies = p;
    f.hideFacecastReplies = q;
    f.addFacecastReply = r;
    f.addFacecastReplies = s;
    f.facecastRepliesLoaded = t;
    f.setCommentsScrollDistance = u;
    f.handleNewComments = v;
    f.handleNewFacecastReply = w;
    f.setCommentReactionsMenuShown = x;
  },
  66
);
__d(
  "UFIUserActionUtils",
  ["Nectar", "TrackingNodes", "collectDataAttributes"],
  function (a, b, c, d, e, f, g) {
    function a(a) {
      if (!a) return { ft: {} };
      var b = { ft: c("collectDataAttributes")(a, ["ft"]).ft };
      if (h(b.ft.tn)) return {};
      d("Nectar").addModuleData(b, a);
      return b;
    }
    function h(a) {
      if (a) {
        a = c("TrackingNodes").parseTrackingNodeString(a);
        for (var b = 0; b < a.length; b++) {
          var d = a[b][0];
          switch (d) {
            case c("TrackingNodes").types.COMMENT:
              return !0;
          }
        }
      }
      return !1;
    }
    g.trackingData = a;
  },
  98
);
__d(
  "UFIVideoPlayerRegistry",
  ["EventEmitter", "ViewportBounds", "destroyOnUnload", "getOrCreateDOMID"],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = new (b("EventEmitter"))(),
      h = new Map(),
      i = new Map(),
      j = new Map(),
      k = new Map(),
      l = new Set(),
      m = new Map();
    b("destroyOnUnload")(function () {
      g.removeAllListeners(),
        h.clear(),
        i.clear(),
        j.clear(),
        k.clear(),
        l.clear();
    });
    function n(a) {
      a = a;
      var b = [];
      while (a) b.unshift(a), (a = a.parentElement);
      return b;
    }
    function o(a, b) {
      var c = n(a);
      a = null;
      var d = null;
      b.forEach(function (b) {
        var e = b[0];
        b = b[1];
        e = n(e);
        for (var f = 0; f < c.length; ++f) {
          if (c[f] !== e[f]) {
            (d === null || f > d) && ((d = f), (a = b));
            break;
          }
          f === c.length - 1 && (d === null || f > d) && ((d = f), (a = b));
        }
      });
      return a;
    }
    function p(a, b) {
      var c = n(a);
      a = null;
      var d = null;
      b.forEach(function (b) {
        var e = b[0];
        b = b[1];
        e = n(e);
        for (var f = 0; f < c.length; ++f)
          if (c[f] !== e[f]) {
            (d === null || f > d) && ((d = f), (a = b));
            break;
          }
      });
      return a;
    }
    var q = {
      registerVideoPlayerController: function (a) {
        var b = a.getVideoID(),
          c = k.get(b);
        c ? c.push(a) : ((c = [a]), k.set(b, c), j["delete"](b));
        l.forEach(function (a) {
          return a();
        });
        a = h.get(b);
        if (!a) return;
        a.forEach(function (a) {
          return q._associateUFIController(a, b);
        });
      },
      addOnRegisterListener: function (a) {
        l.add(a);
      },
      removeOnRegisterListener: function (a) {
        l["delete"](a);
      },
      getAvailableVideoPlayerController: function (a) {
        return i.get(a);
      },
      seekAvailableVideoPlayerController: function (a, b) {
        a = q.getAvailableVideoPlayerController(a);
        if (!a) return;
        ["ready", "playing", "paused", "finished"].includes(a.getState()) &&
          (a.pause("seek_initiated"), a.seek(b), a.play("seek_initiated"));
      },
      scrollToAvailableVideo: function (a) {
        a = q.getAvailableVideoPlayerController(a);
        if (!a) return;
        a = b("ViewportBounds").getElementPosition(a.getRootNode());
        window.scroll(0, a.y);
      },
      setAvailableVideoPlayerControllerSphericalViewport: function (a, b) {
        a = q.getAvailableVideoPlayerController(a);
        if (!a) return;
        a.emit("SphericalVideoViewportTagComment/click", b);
      },
      getAvailableVideoPlayerControllerForElement: function (a, c) {
        if (!a) return null;
        var d = j.get(c) || new Map(),
          e = b("getOrCreateDOMID")(a);
        a = d.get(e) || q.findVideoPlayerControllerForElement(a, c);
        d.set(e, a);
        j.set(c, d);
        return a;
      },
      getAvailableVideoPlayerControllerTimeForElement: function (a, b) {
        if (!a) return null;
        a = q.getAvailableVideoPlayerControllerForElement(a, b);
        if (!a) return null;
        b = a.getCurrentTimePosition();
        return b >= 0 ? Math.floor(b) : null;
      },
      getAvailableVideoPlayerControllerTime: function (a) {
        a = q.getAvailableVideoPlayerController(a);
        if (!a) return null;
        a = a.getCurrentTimePosition();
        return a >= 0 ? Math.floor(a) : null;
      },
      registerUFIController: function (a, b, c) {
        var d = a.getInstanceID(),
          e = a.getFluentContentToken();
        if (!e) return;
        var f = h.get(e);
        f ? f.push(a) : ((f = [a]), h.set(e, f));
        g.addListener(d + "/register", b);
        g.addListener(d + "/unregister", c);
        q._associateUFIController(a, e);
      },
      getAvailableUFIController: function (a) {
        var b = m.get(a);
        if (b) return b;
        var c = h.get(a.getVideoID());
        if (!c) return null;
        c.length === 1
          ? (b = c[0])
          : (b = p(
              a.getRootNode(),
              c.map(function (a) {
                return [a.getRootNode(), a];
              })
            ));
        if (b) {
          c = q.findVideoPlayerControllerForElement(
            b.getRootNode(),
            a.getVideoID()
          );
          if (c !== a) return null;
          m.set(a, b);
        }
        return b;
      },
      findVideoPlayerControllerForElement: function (a, b) {
        b = k.get(b);
        if (!b) return null;
        if (b.length === 1) return b[0];
        return !a
          ? null
          : o(
              a,
              b
                .filter(function (a) {
                  return !a.isState("destroyed");
                })
                .map(function (a) {
                  return [a.getRootNode(), a];
                })
            );
      },
      unregisterVideoPlayerControllerForElement: function (a, b) {
        var c = k.get(b);
        if (!c) return;
        var d = q.findVideoPlayerControllerForElement(a, b);
        if (d == null) return;
        a = c.findIndex(function (a) {
          return a.getRootNode() === d.getRootNode();
        });
        c.splice(a, 1);
        k.set(b, c);
      },
      _associateUFIController: function (a, c) {
        var d = a.getInstanceID();
        a = q.findVideoPlayerControllerForElement(a.getRootNode(), c);
        if (!a || a.isState("destroyed")) return;
        c = i.get(d);
        if (c) {
          if (
            !c.isState("destroyed") &&
            b("getOrCreateDOMID")(c.getRootNode()) ===
              b("getOrCreateDOMID")(a.getRootNode())
          )
            return;
          g.emit(d + "/unregister");
        }
        i.set(d, a);
        g.emit(d + "/register", a);
      },
    };
    e.exports = q;
  },
  null
);
__d(
  "XUFIReactionController",
  ["XController"],
  function (a, b, c, d, e, f) {
    e.exports = b("XController").create("/ufi/reaction/", {
      client_id: { type: "String" },
      ft_ent_identifier: { type: "StringOrPFBID" },
      reaction_type: { type: "Enum", enumType: 0 },
      reaction_id: { type: "String" },
      story_render_location: { type: "Enum", enumType: 1 },
      is_inline: { type: "Bool", defaultValue: !1 },
      is_comment: { type: "Bool", defaultValue: !1 },
      is_permalink: { type: "Bool", defaultValue: !1 },
      action_source: { type: "String" },
      feedback_source: { type: "Int" },
      feedback_referrer: { type: "String" },
      is_sponsored: { type: "Bool", defaultValue: !1 },
      basic_origin_uri: { type: "String" },
      basic_reload: { type: "Exists", defaultValue: !1 },
      bgsync_id: { type: "String" },
      aftercursor: { type: "String" },
      tab: { type: "String" },
      _ft_: { type: "String" },
    });
  },
  null
);
__d(
  "UFIReactionUserActions",
  [
    "ActorURI",
    "AsyncResponse",
    "ChannelClientID",
    "ClientIDs",
    "MercuryServerDispatcher",
    "NumberFormat",
    "QE2Logger",
    "UFICentralUpdates",
    "UFICommentAction",
    "UFIComments",
    "UFIConfig",
    "UFIConstants",
    "UFIFeedbackTargets",
    "UFIReactionPendingRequestsStore",
    "UFIReactionSyncStore",
    "UFIReactionTypes",
    "UFIReactionsUtils",
    "UFISharedDispatcher",
    "UFIStoryAction",
    "UFIUserActionUtils",
    "UFIVideoPlayerRegistry",
    "XUFIReactionController",
    "ifRequired",
    "setImmediate",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, e, f, g, h) {
      g === void 0 && (g = null),
        h === void 0 && (h = null),
        d("UFIFeedbackTargets").getFeedbackTarget(a, function (i) {
          var j = n(i, b);
          c("UFICentralUpdates").handleUpdate(
            d("UFIConstants").UFIPayloadSourceType.USER_ACTION,
            { actions: j }
          );
          j = d("UFIUserActionUtils").trackingData(f);
          var k = {};
          k[d("ActorURI").PARAMETER_ACTOR] = i.actorforpost;
          var l = babelHelpers["extends"](
            {
              client_id: d("ClientIDs").getNewClientID(),
              ft_ent_identifier: a,
              reaction_type: b,
              root_id: e.rootid,
              session_id: d("ChannelClientID").getID(),
              source: e.source,
              feedback_referrer: e.feedbackReferrer,
              instance_id: e.instanceid,
            },
            k,
            j
          );
          if (e.fluentContentToken) {
            i = e.fluentContentToken;
            var m = d(
              "UFIVideoPlayerRegistry"
            ).getAvailableVideoPlayerControllerForElement(f, i);
            m &&
              m.isSpherical() &&
              (l.video_playback_timestamp = d(
                "UFIVideoPlayerRegistry"
              ).getAvailableVideoPlayerControllerTimeForElement(f, i));
            e.isLiveVOD
              ? (l.on_demand_content_time_offset = d(
                  "UFIVideoPlayerRegistry"
                ).getAvailableVideoPlayerControllerTimeForElement(f, i))
              : e.islivestreaming &&
                (l.live_content_time_offset = d(
                  "UFIVideoPlayerRegistry"
                ).getAvailableVideoPlayerControllerTimeForElement(f, i));
            m &&
              m.isSpherical() &&
              c("ifRequired")("SphericalViewportControlStore", function (a) {
                a = a.getOrientation(m.getVideoPlayerID());
                a &&
                  (g !== null && h !== null
                    ? ((l.spherical_yaw = g), (l.spherical_pitch = h))
                    : ((l.spherical_pitch = Math.round(a.pitch)),
                      (l.spherical_yaw = Math.round(a.yaw))));
              });
          }
          d("MercuryServerDispatcher").trySend(
            c("XUFIReactionController").getURIBuilder().getURI(),
            l
          );
        });
    }
    function b(a, b, e, f) {
      var g = d("UFIComments").getComment(a);
      g &&
        g.__typename === "saved" &&
        g.viewerreaction !== b &&
        d("UFIFeedbackTargets").getFeedbackTarget(
          g.ftentidentifier,
          function (a) {
            var e = m(g, a, b);
            c("UFICentralUpdates").handleUpdate(
              d("UFIConstants").UFIPayloadSourceType.USER_ACTION,
              { actions: e }
            );
            e = {};
            e[d("ActorURI").PARAMETER_ACTOR] = a.actorforpost;
          }
        );
    }
    l = {};
    var h = c("XUFIReactionController").getURIBuilder().getURI();
    l[h] = {
      mode: d("MercuryServerDispatcher").IMMEDIATE,
      error_handler: f,
      handler: e,
    };
    d("MercuryServerDispatcher").registerEndpoints(l);
    var i = "feedback_reactions_www_rollback_universe";
    function j() {
      d("QE2Logger").logExposureForUser(i);
    }
    function k(a, b) {
      var e = c("UFIReactionPendingRequestsStore").getPendingRequests(a);
      if (e > 0) return;
      var f = c("UFIReactionSyncStore").getLastKnownReaction(a);
      if (b === f) return;
      d("UFIFeedbackTargets").getFeedbackTarget(a, function (a) {
        a = n(a, f);
        c("UFICentralUpdates").handleUpdate(
          d("UFIConstants").UFIPayloadSourceType.USER_ACTION,
          { actions: a }
        );
      });
    }
    function e(a, b) {
      a = b.data;
      var e = a.ft_ent_identifier,
        f = a.reaction_type;
      c("UFISharedDispatcher").dispatch(
        d("UFIStoryAction").changeReactionSuccess(
          { instanceid: a.instance_id, ftentidentifier: e },
          f
        )
      );
      c("setImmediate")(function () {
        return k(e, f);
      });
    }
    function f(a) {
      var b = a.request.data,
        e = b.ft_ent_identifier,
        f = b.reaction_type;
      j();
      var g = c("UFIConfig").reactionsHasReactionsRollback,
        h = c("UFIConfig").reactionsHasReactionsRetry;
      if (h && !b.retry_attempt) {
        d("MercuryServerDispatcher").trySend(
          c("XUFIReactionController").getURIBuilder().getURI(),
          babelHelpers["extends"]({}, b, { retry_attempt: 1 })
        );
        return;
      }
      c("UFISharedDispatcher").dispatch(
        d("UFIStoryAction").changeReactionFailure(
          { instanceid: b.instance_id, ftentidentifier: e },
          f
        )
      );
      g &&
        c("setImmediate")(function () {
          return k(e, f);
        });
      c("AsyncResponse").defaultErrorHandler(a);
    }
    function l(a, b, e) {
      var f = c("UFIReactionPendingRequestsStore").getPendingRequestsForComment(
        b.fbid
      );
      if (f > 0) return;
      var g = c("UFIReactionSyncStore").getLastKnownCommentReaction(b.fbid);
      if (e === g) return;
      d("UFIFeedbackTargets").getFeedbackTarget(a, function (a) {
        a = m(b, a, g);
        c("UFICentralUpdates").handleUpdate(
          d("UFIConstants").UFIPayloadSourceType.USER_ACTION,
          { actions: a }
        );
      });
    }
    function m(a, b, e) {
      var f = a.id,
        g = [p(a, e, f, b.supportedreactions || [], b.actorforpost)];
      e = e === c("UFIReactionTypes").LIKE;
      if (b.hasviewerliked !== e) {
        b = e ? 1 : -1;
        g.push({
          commentid: f,
          actiontype: d("UFIConstants").UFIActionType.COMMENT_LIKE,
          viewerliked: e,
          likecount: (a.likecount || 0) + b,
        });
      }
      return g;
    }
    function n(a, b) {
      var e = [o(a, b)];
      b = b !== c("UFIReactionTypes").NONE;
      if (a.hasviewerliked !== b) {
        var f = b ? 1 : -1;
        e.push({
          actiontype: d("UFIConstants").UFIActionType.LIKE_ACTION,
          actorid: a.actorforpost,
          hasviewerliked: b,
          likecount: (a.likecount || 0) + f,
          entidentifier: a.entidentifier,
          likesentences: {
            current: a.likesentences.alternate,
            alternate: a.likesentences.current,
          },
        });
      }
      return e;
    }
    function o(a, b) {
      return babelHelpers["extends"](
        {
          actiontype: d("UFIConstants").UFIActionType.REACTION,
          actorid: a.actorforpost,
          entidentifier: a.entidentifier,
        },
        d("UFIReactionsUtils").getReactionData(
          a,
          b,
          a.actorforpost,
          d("NumberFormat").formatInteger
        )
      );
    }
    function p(a, b, c, e, f) {
      var g = {};
      for (var h = 0; h < e.length; h++) {
        var i = e[h],
          j = a.reactioncountmap ? a.reactioncountmap[i] : null;
        g[i] = { default: j ? j["default"] : 0, reduced: j ? j.reduced : "0" };
      }
      i = d("UFIReactionsUtils").getReactionData(
        {
          viewerreaction: a.viewerreaction,
          reactioncount: a.reactioncount,
          reactioncountreduced: a.reactioncountreduced,
          reactioncountmap: g,
          reactorids: a.viewerreaction ? [f] : [],
        },
        b,
        f
      );
      return {
        actiontype: d("UFIConstants").UFIActionType.COMMENT_REACTION,
        commentid: c,
        hasviewerliked: !!b,
        likecount: i.reactioncountmap[1]["default"],
        reactioncount: i.reactioncount,
        reactioncountmap: i.reactioncountmap,
        reactioncountreduced: i.reactioncountreduced,
        viewerreaction: b,
      };
    }
    g.changeReaction = a;
    g.changeCommentReaction = b;
  },
  98
);
__d(
  "UFIReplyCommentList",
  [
    "UFICentralUpdates",
    "UFIComments",
    "UFIConstants",
    "UFIReplyCommentListImpl",
    "getObjectValues",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = {};
    function i(a, b, d) {
      h[b] || (h[b] = {});
      if (!h[b][d]) {
        a = new (c("UFIReplyCommentListImpl"))(a, b, d);
        var e = j(String(b));
        e.length && a.updateCommentCount(e[0].getCommentCount());
        h[b][d] = a;
      }
      return h[b][d];
    }
    function j(a) {
      return c("getObjectValues")(h[a] || {});
    }
    function a(a, b, c, d) {
      a = (h[b] || {})[d];
      if (!a) return;
      a.reset();
      a.actorID = c;
    }
    function k(a) {
      a = d("UFIComments").getComment(a.commentid);
      if (!a) return;
      var b = a.id,
        c = a.parentcommentid;
      if (!c) return;
      a.status !== d("UFIConstants").UFIStatus.DELETED &&
        a.status !== d("UFIConstants").UFIStatus.FAILED_ADD &&
        j(c).forEach(function (a) {
          a.deleteComment(b);
        });
    }
    c("UFICentralUpdates").subscribe("update-actions", function (a, b) {
      if (b.actions && b.actions.length)
        for (a = 0; a < b.actions.length; a++) {
          var c = b.actions[a];
          switch (c.actiontype) {
            case d("UFIConstants").UFIActionType.DELETE_COMMENT:
              k(c);
              break;
          }
        }
    });
    c("UFICentralUpdates").subscribe("update-comment-lists", function (a, b) {
      a = b.commentlists;
      if (a && a.replies && Object.keys(a).length)
        for (b in a.replies) {
          var c = a.replies[b],
            d = c.ftentidentifier,
            e = c.containerorderingmode;
          d = i(String(d), String(b), e);
          d.addCommentIDs(c.range.offset, c.range.length, c.values);
          d.updateCommentCount(c.count);
        }
    });
    c("UFICentralUpdates").subscribe("update-comments", function (a, b) {
      (b.comments || [])
        .concat(b.privatecomments || [])
        .concat(b.authorpinnedcomments || [])
        .forEach(function (a) {
          var b = a.parentcommentid;
          if (!b) return;
          j(String(b)).forEach(function (b) {
            b.addOrUpdateComment(a);
          });
        });
    });
    g.getCommentList = i;
    g.getReplyListsForParentCommentID = j;
    g.resetWithContext = a;
  },
  102
);
__d(
  "UFIThreadedFacecastCommentsStore",
  ["FluxReduceStore", "UFIComments", "UFIDispatcherBase"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
          f[g] = arguments[g];
        return (
          ((b = c = a.call.apply(a, [this].concat(f)) || this),
          (c.reduce = function (a, b) {
            switch (b.type) {
              case "story_show_facecast_replies":
                var e;
                return babelHelpers["extends"](
                  {},
                  a,
                  ((e = {}),
                  (e[b.instanceID] = {
                    comment_id: b.commentID,
                    reply_comment_ids: c.getReplyCommentIDs(b.instanceID),
                    is_loaded: !1,
                  }),
                  e)
                );
              case "story_hide_facecast_replies":
                return babelHelpers["extends"](
                  {},
                  a,
                  ((e = {}),
                  (e[b.instanceID] = {
                    comment_id: null,
                    reply_comment_ids: [],
                    is_loaded: !1,
                  }),
                  e)
                );
              case "story_add_facecast_reply":
                if (c.getCommentID(b.instanceID) === null) return a;
                e = b.replyCommentID;
                var f = c.getReplyCommentIDs(b.instanceID);
                f.indexOf(e) === -1 && ((f = f.slice(0)), f.push(e));
                return babelHelpers["extends"](
                  {},
                  a,
                  ((e = {}),
                  (e[b.instanceID] = {
                    comment_id: c.getCommentID(b.instanceID),
                    reply_comment_ids: f,
                    is_loaded: c.getIsLoaded(b.instanceID),
                  }),
                  e)
                );
              case "story_add_facecast_replies":
                if (c.getCommentID(b.instanceID) === null) return a;
                var g = c.getReplyCommentIDs(b.instanceID);
                f = b.replyCommentIDs.filter(function (a) {
                  return g.indexOf(a) === -1;
                });
                f.length !== 0 && (g = g.concat(f));
                return babelHelpers["extends"](
                  {},
                  a,
                  ((e = {}),
                  (e[b.instanceID] = {
                    comment_id: c.getCommentID(b.instanceID),
                    reply_comment_ids: g,
                    is_loaded: c.getIsLoaded(b.instanceID),
                  }),
                  e)
                );
              case "facecast_replies_loaded":
                f = c.getCommentID(b.instanceID);
                return f !== b.commentID
                  ? a
                  : babelHelpers["extends"](
                      {},
                      a,
                      ((e = {}),
                      (e[b.instanceID] = {
                        comment_id: c.getCommentID(b.instanceID),
                        reply_comment_ids: c.getReplyCommentIDs(b.instanceID),
                        is_loaded: !0,
                      }),
                      e)
                    );
              case "story_comments_arrived":
                if (b.source !== 1 || b.liveVideoCommentPermalinkID == null)
                  return a;
                f = d("UFIComments").getComment(b.liveVideoCommentPermalinkID);
                return f == null
                  ? a
                  : babelHelpers["extends"](
                      {},
                      a,
                      ((e = {}),
                      (e[b.instanceID] = {
                        comment_id: f.parentcommentid || f.id,
                        reply_comment_ids: c.getReplyCommentIDs(b.instanceID),
                        is_loaded: c.getIsLoaded(b.instanceID),
                      }),
                      e)
                    );
              case "CENTRALUPDATES_SAVED_COMMENT":
                f = c.getReplyCommentIDs(b.instanceID);
                if (f.length === 0) return a;
                e = f.indexOf(b.clientID);
                if (e === -1) return a;
                f.slice(0)[e] = b.commentID;
                return babelHelpers["extends"](
                  {},
                  a,
                  ((e = {}),
                  (e[b.instanceID] = {
                    comment_id: c.getCommentID(b.instanceID),
                    reply_comment_ids: f,
                    is_loaded: c.getIsLoaded(b.instanceID),
                  }),
                  e)
                );
              default:
                return a;
            }
          }),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      var c = b.prototype;
      c.getInitialState = function () {
        return {};
      };
      c.getCommentID = function (a) {
        a = this.getState()[a];
        return !a ? null : a.comment_id;
      };
      c.getReplyCommentIDs = function (a) {
        a = this.getState()[a];
        return !a ? [] : a.reply_comment_ids;
      };
      c.getIsLoaded = function (a) {
        a = this.getState()[a];
        return !a ? !1 : a.is_loaded;
      };
      return b;
    })(c("FluxReduceStore"));
    a.__moduleID = f.id;
    b = new a(c("UFIDispatcherBase"));
    g["default"] = b;
  },
  98
);
__d(
  "UFIToplevelPagedCommentList",
  [
    "UFICentralUpdates",
    "UFIComments",
    "UFIConstants",
    "UFIReplyCommentList",
    "UFIToplevelPagedCommentListImpl",
    "UFIToplevelStreamedCommentList",
    "forEachObject",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = {};
    function i(a, b, d) {
      d = d || "default";
      h[a] || (h[a] = {});
      h[a][d] || (h[a][d] = {});
      if (!h[a][d][b]) {
        var e = new (c("UFIToplevelPagedCommentListImpl"))(a, b, d),
          f = j(a, d);
        f.length && e.updateCommentCount(f[0].getCommentCount());
        h[a][d][b] = e;
      }
      return h[a][d][b];
    }
    function a(a) {
      var b = [];
      c("forEachObject")(h[a] || {}, function (a) {
        c("forEachObject")(a, function (a) {
          b.push(a);
        });
      });
      return b;
    }
    function j(a, b) {
      var c = [];
      a = (h[a] || {})[b] || {};
      for (b in a) c.push(a[b]);
      return c;
    }
    function b(a, b) {
      a = j(a, b);
      return a.length ? a[0].getCommentCount() : null;
    }
    function e(a) {
      var b = j(a, "default");
      b = b.length ? b[0].getDisplayedCommentCount() : null;
      a = c("UFIToplevelStreamedCommentList").getAllExistingCommentLists(a);
      a = a.length ? a[0].getDisplayedCommentCount() : null;
      return b === null && a === null ? null : Math.max(b || 0, a || 0);
    }
    function f(a) {
      a = h[a];
      if (!a) return;
      var b = {};
      for (var c in a) {
        var e = a[c];
        for (var f in e) {
          var g = e[f];
          g = g.reset();
          for (var i in g) {
            var j = g[i];
            b[j] = !0;
          }
        }
      }
      d("UFIComments").resetComments(b);
    }
    function k(a, b) {
      var c = h[a];
      if (!c) return;
      var e = {};
      for (var f in c) {
        var g = c[f];
        for (var i in g) {
          var j = g[i];
          j.actorID = b;
          j = j.reset();
          for (var k in j) {
            var l = j[k];
            e[l] = !0;
            d("UFIReplyCommentList").resetWithContext(a, l, b, i);
          }
        }
      }
      d("UFIComments").resetComments(e);
    }
    function l(a) {
      var b = d("UFIComments").getComment(a.commentid);
      if (!b) return;
      var c = b.id,
        e = b.ftentidentifier,
        f = b.parentcommentid;
      if (f) return;
      f = "default";
      (b.privacy_value === 2 || b.privacy_value === 3) &&
        h[e] &&
        h[e].friends &&
        (f = "friends");
      (a.islocal ||
        (b.status !== d("UFIConstants").UFIStatus.DELETED &&
          b.status !== d("UFIConstants").UFIStatus.FAILED_ADD)) &&
        j(e, f).forEach(function (a) {
          a.deleteComment(c);
        });
    }
    function m(a, b) {
      c("forEachObject")(a, function (a, d) {
        c("forEachObject")(a, function (a, c) {
          c = i(d, c, b);
          c.addCommentIDs(a.range.offset, a.range.length, a.values);
          c.setClientHasAll(!!a.clienthasall);
          typeof a.count === "number" &&
            a.count !== c.getCommentCount() &&
            c.updateCommentCount(a.count);
        });
      });
    }
    function n(a, b) {
      a.forEach(function (a) {
        if (a.parentcommentid) return;
        var c = a.ftentidentifier;
        j(c, b).forEach(function (b) {
          b.addOrUpdateComment(a);
        });
      });
    }
    c("UFICentralUpdates").subscribe("update-actions", function (a, b) {
      if (b.actions && b.actions.length)
        for (a = 0; a < b.actions.length; a++) {
          var c = b.actions[a];
          switch (c.actiontype) {
            case d("UFIConstants").UFIActionType.DELETE_COMMENT:
              l(c);
              break;
          }
        }
    });
    c("UFICentralUpdates").subscribe("update-comment-lists", function (a, b) {
      a = b.commentlists;
      b = b.privatecommentlists;
      a && a.comments && m(a.comments, "default");
      b && b.comments && m(b.comments, "friends");
    });
    c("UFICentralUpdates").subscribe("update-comments", function (a, b) {
      a = b.comments;
      var c = b.privatecomments;
      b = b.authorpinnedcomments;
      a && a.length && n(a, "default");
      c && c.length && n(c, "friends");
      b && b.length && n(b, "default");
    });
    c("UFICentralUpdates").subscribe("update-feedback", function (a, b) {
      var c = b.feedbacktarget
        ? b.feedbacktarget
        : b.feedbacktargets && b.feedbacktargets[0];
      if (c) {
        var d = c.entidentifier;
        a = c.defaultcommentorderingmode;
        var e = new Set();
        a && e.add(a);
        c.orderingmodes &&
          c.orderingmodes.forEach(function (a) {
            if (a.value === "live_streaming") return;
            e.add(a.value);
          });
        b = c.privatecommentcount;
        e.forEach(function (a) {
          i(d, a, "default").updateCommentCount(c.commentcount);
        });
        typeof b === "number" &&
          i(d, "toplevel", "friends").updateCommentCount(b);
      }
    });
    g.getCommentList = i;
    g.getAllCommentListsForFeedbackTargetID = a;
    g.getSectionedCommentListsForFeedbackTargetID = j;
    g.getPagedCommentCountForFeedbackTargetID = b;
    g.getDisplayedCommentCountForFeedbackTargetID_UNSAFE = e;
    g.resetCommentListsForFeedbackTargetID = f;
    g.resetCommentListsWithContext = k;
  },
  102
);
__d(
  "UFIRange",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      function a(a, b) {
        a === void 0 && (a = 0),
          b === void 0 && (b = 0),
          (this.offset = a),
          (this.length = b),
          (this.requestedOffset = this.offset),
          (this.requestedLength = this.length);
      }
      var b = a.prototype;
      b.getOffset = function () {
        return this.offset;
      };
      b.getLength = function () {
        return this.length;
      };
      b.getRequestedOffset = function () {
        return this.requestedOffset;
      };
      b.getRequestedLength = function () {
        return this.requestedLength;
      };
      b.updateRequestedRange = function (a, b) {
        this.requestedOffset = a;
        this.requestedLength = b;
        return this;
      };
      b.isLoadingNext = function () {
        var a = this.requestedOffset + this.requestedLength,
          b = this.offset + this.length;
        return a > b;
      };
      b.isLoadingPrev = function () {
        return this.requestedOffset < this.offset;
      };
      a.combine = function (b, c) {
        if (!c) return b;
        var d = Math.min(b.getOffset(), c.getOffset());
        b = Math.max(b.getLength(), c.getLength());
        var e = new a(d, b);
        if (c.getRequestedLength() > 0) {
          var f = Math.min(d, c.getRequestedOffset());
          d = Math.max(d + b, c.getRequestedOffset() + c.getRequestedLength());
          e.updateRequestedRange(f, d - f);
        }
        return e;
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "UFIToplevelStreamedCommentList",
  [
    "invariant",
    "ClientIDs",
    "LiveVideoUFIConfig",
    "UFICentralUpdates",
    "UFIComments",
    "UFIConstants",
    "UFIRange",
    "UFIThreadedFacecastCommentsStore",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = (function () {
      function a(a) {
        (this.feedbackTargetID = a),
          (this.commentIDs = []),
          (this.deletedCount = 0),
          (this.totalCommentCount = 0),
          (this.addedCommentCountForUnseenCounter = 0);
      }
      var b = a.prototype;
      b.getFeedbackTargetID = function () {
        return this.feedbackTargetID;
      };
      b.getClientHasAll = function () {
        return !1;
      };
      b.getActualCommentCount = function () {
        return this.commentIDs.length;
      };
      b.getCommentCount = function () {
        return this.totalCommentCount;
      };
      b.getAddedCommentCountForUnseenCounter = function () {
        return this.addedCommentCountForUnseenCounter;
      };
      b.getDisplayedCommentCount = function () {
        return this.getCommentCount() - this.getDeletedCount();
      };
      b.getDeletedCount = function () {
        return this.deletedCount;
      };
      b.getPermalinkForComment = function (a) {
        return "";
      };
      b.getComments = function (a, b, d, e) {
        e(this.getCommentsOrThrow(new (c("UFIRange"))(a, b), d));
      };
      b.getCommentsOrThrow = function (a, b) {
        a = [a.getLength(), a.getOffset()];
        var c = a[0];
        a = a[1];
        a === 0 || h(0, 2239);
        a = b.streamingOrderReversed;
        b = {};
        for (var e = 0; e < Math.min(c, this.commentIDs.length); ++e) {
          var f = a ? this.commentIDs.length - 1 - e : e;
          f = d("UFIComments").getComment(this.commentIDs[f]);
          f && (b[e] = f);
        }
        return b;
      };
      b.$3 = function () {
        var a = this.commentIDs;
        this.commentIDs = [];
        return a;
      };
      b.hasComment = function (a) {
        for (var b = 0; b < this.commentIDs.length; ++b)
          if (this.commentIDs[b] === a.id) return !0;
        return !1;
      };
      b.addCommentIDs = function (a, b, c) {};
      b.setClientHasAll = function (a) {};
      b.addOrUpdateComment = function (a, b) {
        b === void 0 && (b = null);
        var e = a.clientid;
        if (e && d("ClientIDs").isExistingClientID(e))
          for (var f = 0; f < this.commentIDs.length; ++f)
            this.commentIDs[f] === e && (this.commentIDs[f] = a.id);
        else if (b || a.__typename === "local") {
          if (this.hasComment(a)) return;
          this.commentIDs.push(a.id);
          b !== "on_demand" &&
            !a.isAnnouncement &&
            !a.tipOptionIndex &&
            ((this.totalCommentCount += 1),
            a.__typename !== "local" &&
              (Object.values(
                c("UFIThreadedFacecastCommentsStore").getState() || {}
              )
                .map(function (a) {
                  return (a = a) != null ? a.comment_id : a;
                })
                .includes(a.parentcommentid) ||
                (this.addedCommentCountForUnseenCounter += 1)));
        }
        f = c("LiveVideoUFIConfig").live_video_scrollable_comments;
        this.commentIDs.length > f && this.commentIDs.shift();
        c("UFICentralUpdates").didUpdateFeedback(this.feedbackTargetID);
      };
      b.deleteComment = function (a) {
        this.deletedCount += 1;
        var b = [];
        for (var c = 0; c < this.commentIDs.length; ++c) {
          var e = this.commentIDs[c],
            f = d("UFIComments").getComment(e);
          e !== a &&
            ((f = f) != null ? f.parentcommentid : f) !== a &&
            b.push(e);
        }
        this.commentIDs = b;
      };
      b.updateCommentCount = function (a) {
        (this.totalCommentCount = a), (this.deletedCount = 0);
      };
      a.getCommentList = function (b, c) {
        c === void 0 && (c = a.GLOBAL_ID);
        var d = a.$1.get(b);
        d || ((d = new Map()), a.$1.set(b, d));
        var e = d.get(c);
        e || ((e = new a(b)), d.set(c, e));
        return e;
      };
      a.getExistingCommentList = function (b, c) {
        c === void 0 && (c = a.GLOBAL_ID);
        b = a.$1.get(b);
        return !b ? null : b.get(c);
      };
      a.getAllExistingCommentLists = function (b) {
        b = a.$1.get(b);
        return !b ? [] : Array.from(b.values());
      };
      a.$4 = function (b, c) {
        var d = a.$2.get(b);
        if (d) {
          c.forEach(function (a) {
            d[a] = !0;
          });
          return;
        }
        var e = {};
        c.forEach(function (a) {
          e[a] = !0;
        });
        a.$2.set(b, e);
      };
      a.resetCommentList = function (b, c) {
        c === void 0 && (c = a.GLOBAL_ID);
        c = a.getExistingCommentList(b, c);
        if (!c) return;
        a.$4(b, c.$3());
      };
      a.resetAllCommentLists = function (b) {
        var c = a.getAllExistingCommentLists(b);
        if (c.length === 0) return;
        c.forEach(function (c) {
          a.$4(b, c.$3());
        });
        c = a.$2.get(b);
        c && (a.$2["delete"](b), d("UFIComments").resetComments(c));
      };
      return a;
    })();
    i.GLOBAL_ID = "GLOBAL_ID";
    i.$1 = new Map();
    i.$2 = new Map();
    c("UFICentralUpdates").subscribe("update-actions", function (a, b) {
      if (!b.actions) return;
      b.actions.forEach(function (a) {
        if (a.actiontype !== d("UFIConstants").UFIActionType.DELETE_COMMENT)
          return;
        var b = d("UFIComments").getComment(a.commentid);
        if (!b) return;
        var c = b.id,
          e = b.ftentidentifier,
          f = b.parentcommentid;
        if (f) return;
        (a.islocal ||
          (b.status !== d("UFIConstants").UFIStatus.DELETED &&
            b.status !== d("UFIConstants").UFIStatus.FAILED_ADD)) &&
          i.getAllExistingCommentLists(e).forEach(function (a) {
            return a.deleteComment(c);
          });
      });
    });
    c("UFICentralUpdates").subscribe("update-comments", function (a, b) {
      if (!b.comments) return;
      var c = b.targetufiinstanceid;
      b.comments.forEach(function (a) {
        c
          ? i
              .getCommentList(a.ftentidentifier, c)
              .addOrUpdateComment(a, b.streamingstate)
          : i
              .getAllExistingCommentLists(a.ftentidentifier)
              .forEach(function (c) {
                c.addOrUpdateComment(a, b.streamingstate);
              });
      });
    });
    g["default"] = i;
  },
  102
);
__d(
  "XGroupsMuteMembersController",
  ["XController"],
  function (a, b, c, d, e, f) {
    e.exports = b("XController").create("/groups/mutemember/", {
      group_id: { type: "FBID" },
      user_id: { type: "FBID" },
      mute_duration: { type: "Enum", enumType: 1 },
      source: { type: "Enum", enumType: 1 },
      should_reload: { type: "Bool", defaultValue: !1 },
      mute_reason: { type: "FBID" },
      custom_expiration: { type: "Int" },
      share_feedback: { type: "Bool", defaultValue: !1 },
      selected_rules: { type: "FBIDVector", defaultValue: [] },
      admin_notes: { type: "String", defaultValue: "" },
    });
  },
  null
);
__d(
  "XTownHallController",
  ["XController"],
  function (a, b, c, d, e, f) {
    e.exports = b("XController").create("/townhall/", {
      ref: { type: "Enum", enumType: 1 },
      notif_id: { type: "Int" },
      setting_nux: { type: "Bool", defaultValue: !1 },
      hide_nux: { type: "Bool", defaultValue: !1 },
      new_reps: { type: "Int" },
      tab: { type: "Enum", enumType: 1 },
    });
  },
  null
);
__d(
  "XUFIDeleteCommentAndRemoveCommenterController",
  ["XController"],
  function (a, b, c, d, e, f) {
    e.exports = b("XController").create(
      "/ufi/deletecommentandremovecommenter/",
      {}
    );
  },
  null
);
__d(
  "XUFIDeleteCommentController",
  ["XController"],
  function (a, b, c, d, e, f) {
    e.exports = b("XController").create("/ufi/delete/comment/", {
      privacy_mutation_token: { type: "String" },
    });
  },
  null
);
__d(
  "UFIUserActions",
  [
    "errorCode",
    "fbt",
    "invariant",
    "ActorURI",
    "AsyncResponse",
    "Bootloader",
    "ChannelClientID",
    "ClientIDs",
    "ImmutableObject",
    "MercuryServerDispatcher",
    "ThisControllerNoLongerExists",
    "UFICentralUpdates",
    "UFICommentVoteUserActions",
    "UFIComments",
    "UFIConstants",
    "UFIFeedbackTargets",
    "UFINewCommentsPillUtils",
    "UFIReactionUserActions",
    "UFIStoryAction",
    "UFIToplevelPagedCommentList",
    "UFIToplevelStreamedCommentList",
    "UFIUserActionUtils",
    "UFIVideoPlayerRegistry",
    "UnicodeBidi",
    "XGroupsMuteMembersController",
    "XTownHallController",
    "XUFIDeleteCommentAndRemoveCommenterController",
    "XUFIDeleteCommentController",
    "XUFIHideCommentController",
    "goURI",
    "ifRequired",
  ],
  function (a, b, c, d, e, f, g, h, i, j) {
    "use strict";
    var k = Object.freeze({ BAN: "ban", UNDO_BAN: "undo_ban" }),
      l = {
        changeActor: function (a, b) {
          d("UFIFeedbackTargets").getFeedbackTarget(a, function (e) {
            d("UFIToplevelPagedCommentList").resetCommentListsWithContext(a, b);
            c("UFIToplevelStreamedCommentList").resetAllCommentLists(a);
            c("UFICentralUpdates").inform("actor-changed", { actorID: b });
            e =
              ((e = { from_actor_id: e.actorforpost, ft_ent_identifier: a }),
              (e[d("ActorURI").PARAMETER_ACTOR] = b),
              e);
            var f = d("ThisControllerNoLongerExists").__DEADURI__("fig2g2p6b");
            d("MercuryServerDispatcher").trySend(f, e);
          });
        },
        changeCommentLike: function (a, b, e) {
          var f = d("UFIComments").getComment(a);
          if (f && f.__typename === "saved" && f.hasviewerliked != b) {
            var g = e.target
                ? d("UFIUserActionUtils").trackingData(e.target)
                : {},
              h = b ? 1 : -1;
            h = {
              commentid: a,
              actiontype: d("UFIConstants").UFIActionType.COMMENT_LIKE,
              viewerliked: b,
              likecount: (f.likecount || 0) + h,
            };
            c("UFICentralUpdates").handleUpdate(
              d("UFIConstants").UFIPayloadSourceType.USER_ACTION,
              { actions: [h] }
            );
            d("UFIFeedbackTargets").getFeedbackTarget(
              f.ftentidentifier,
              function (c) {
                var h = {};
                h[d("ActorURI").PARAMETER_ACTOR] = c.actorforpost;
                c = d("ThisControllerNoLongerExists").__DEADURI__("zpbfi6t0b");
                d("MercuryServerDispatcher").trySend(
                  c,
                  babelHelpers["extends"](
                    {
                      comment_id: a,
                      legacy_id: f.legacyid,
                      like_action: b,
                      ft_ent_identifier: f.ftentidentifier,
                      source: e.source,
                      client_id: d("ClientIDs").getNewClientID(),
                      session_id: d("ChannelClientID").getID(),
                    },
                    g,
                    h
                  )
                );
              }
            );
          }
        },
        _getAttachment: function (a) {
          return a;
        },
        _getLocalComment: function (a, b, c, e, f, g) {
          e = d("ClientIDs").getNewClientID();
          var h = d("UnicodeBidi").isDirectionLTR(c) ? "ltr" : "rtl",
            j = l._getAttachment(f.attachedsticker),
            k = f.replyid,
            m = null;
          if (k != null) {
            k = d("UFIComments").getComment(k);
            m = k != null ? k.author : null;
          }
          return {
            __typename: "local",
            ftentidentifier: b,
            body: { text: c, dir: h },
            author: a.actorforpost,
            cancomment: !1,
            clientid: null,
            fbid: null,
            id: e,
            ufiinstanceid: f.ufiinstanceid,
            likecount: 0,
            hasviewerliked: !1,
            parentcommentid: f.replyid,
            parentcommentauthorid: m,
            replycommentparentid: f.replycommentparentid,
            attachment: j,
            photo_comment: f.attachedphoto,
            video_comment: f.attachedvideo,
            file_comment: f.attachedfile,
            timestamp: {
              time: Math.floor(Date.now() / 1e3),
              text: i._("il y a quelques secondes"),
            },
            photoTextTagID: f.photoTextTagID,
            isPhotoTag: f.isPhotoTag,
            photoTagX: f.photoTagX,
            photoTagY: f.photoTagY,
            privacy_value: f.privacyValue,
            videoTimeOffset: g,
            postedLiveState: f.islivestreaming ? "Live" : "OnDemand",
            trackingID: f.trackingID,
            voteEnabled: !1,
            voteCount: 0,
            voteState: d("UFIConstants").UFICommentVoteType.NONE,
          };
        },
        addComment: function (a, b, e, f) {
          d("UFIFeedbackTargets").getFeedbackTarget(a, function (g) {
            var h = l.createComment(a, b, e, f);
            if (!h) return;
            var i = {
              actiontype: d("UFIConstants").UFIActionType.SUBSCRIBE_ACTION,
              actorid: g.actorforpost,
              hasviewersubscribed: !0,
              entidentifier: g.entidentifier,
            };
            g = {
              actiontype: d("UFIConstants").UFIActionType.ADD_COMMENT_ACTION,
              feedbackfbid: g.targetfbid,
            };
            var j = [],
              k = [];
            (h.privacy_value === 2 || h.privacy_value === 3 ? k : j).push(h);
            c("UFICentralUpdates").handleUpdate(
              d("UFIConstants").UFIPayloadSourceType.USER_ACTION,
              { comments: j, privatecomments: k, actions: [i, g] }
            );
            if (
              h.parentcommentid &&
              (f.islivestreaming || f.isLiveVOD) &&
              f.ufiinstanceid != null
            ) {
              j = { ftentidentifier: a, instanceid: f.ufiinstanceid };
              d("UFINewCommentsPillUtils").dispatchNewCommentAction(
                d("UFIStoryAction").handleNewFacecastReply(j, h.id),
                j
              );
            }
          });
        },
        createComment: function (a, b, e, f) {
          var g = d("UFIFeedbackTargets").getFeedbackTargetIfExists(a);
          if (!(g && g.actorforpost)) return null;
          var h = null;
          if (f.isBroadcasterUFI)
            h = c("ifRequired")(
              "LiveVideoBroadcastBroadcastStore",
              function (a) {
                return a.getCurrentBroadcastTime();
              }
            );
          else if (
            f.fluentContentToken &&
            (f.isLiveVOD || f.islivestreaming || f.enableVODCommentTimestamps)
          ) {
            var i =
              d(
                "UFIVideoPlayerRegistry"
              ).getAvailableVideoPlayerControllerTimeForElement(
                f.target,
                f.fluentContentToken
              ) || 0;
            if (f.isLiveVOD || f.islivestreaming) h = i;
            else {
              var j = d(
                "UFIVideoPlayerRegistry"
              ).getAvailableVideoPlayerControllerForElement(
                f.target,
                f.fluentContentToken
              );
              j != null &&
                i > 0 &&
                i < Math.floor(j.getPlaybackDuration()) &&
                (h = i);
            }
          }
          j = l._getLocalComment(g, a, b, e, f, h);
          l._sendCommentToServer(a, g.actorforpost, b, e, f, j.id, h);
          return j;
        },
        _sendCommentToServer: function (a, b, c, e, f, g, h) {
          c = null;
          if (f.reply_fbid) c = f.reply_fbid;
          else if (f.replyid) {
            var i = d("UFIComments").getComment(f.replyid);
            i || j(0, 199);
            c = i.fbid;
          }
          var k;
          i = {};
          f.liveVideoQuickCommentQuality != null &&
            (i = {
              live_video_quick_comment_quality: f.liveVideoQuickCommentQuality,
            });
          var l = {};
          l[d("ActorURI").PARAMETER_ACTOR] = b;
          b = d("ThisControllerNoLongerExists").__DEADURI__("oo2qk5gny");
          d("MercuryServerDispatcher").trySend(
            b,
            babelHelpers["extends"](
              {
                ft_ent_identifier: a,
                comment_text: e,
                source: f.source,
                client_id: g,
                session_id: d("ChannelClientID").getID(),
                reply_fbid: c,
                parent_comment_id: f.parent_comment_id || f.replyid,
                reply_comment_parent_id: f.replycommentparentid,
                rootid: f.rootid,
                clp: k,
                attached_sticker_fbid: f.attachedsticker
                  ? f.attachedsticker.fbid
                  : null,
                attached_photo_fbid: f.attachedphoto
                  ? f.attachedphoto.fbid
                  : null,
                attached_video_fbid: f.attachedvideo
                  ? f.attachedvideo.fbid
                  : null,
                attached_file_fbid: f.attachedfile ? f.attachedfile.fbid : null,
                attached_share_url: f.attachedshareurl,
                feedback_referrer: f.feedbackReferrer,
                feed_context: f.feedcontext,
                video_time_offset: h,
                is_live_streaming: f.islivestreaming,
                is_markdown: f.isMarkdown,
              },
              d("UFIUserActionUtils").trackingData(f.target),
              l,
              {
                photo_text_tag_id: f.photoTextTagID,
                is_photo_tag: f.isPhotoTag,
                photo_fbid: f.photoFBID,
                photo_tag_x: f.photoTagX,
                photo_tag_y: f.photoTagY,
                privacy_value: f.privacyValue,
                delight_ranges: f.delightRanges,
              },
              i
            )
          );
        },
        _hasCommentTextChanged: function (a, b) {
          return !!a.body && a.body.text != b;
        },
        _hasCommentPhotoChanged: function (a, b) {
          return !!(((a || b) && !(a && b)) || (a && b && a.fbid != b.fbid));
        },
        _hasCommentVideoChanged: function (a, b) {
          return !!(((a || b) && !(a && b)) || (a && b && a.fbid != b.fbid));
        },
        _hasCommentFileChanged: function (a, b) {
          return !!(((a || b) && !(a && b)) || (a && b && a.fbid != b.fbid));
        },
        _hasCommentStickerChanged: function (a, b) {
          return !!(
            ((a || b) && !(a && b)) ||
            (a && a.type == "sticker" && b && a.fbid != b.fbid)
          );
        },
        _hasCommentShareURLChanged: function (a, b) {
          if (b) return !0;
          else return Boolean(a && a.type == "share");
        },
        editComment: function (a, b, e, f) {
          var g = d("UFIUserActionUtils").trackingData(f.target),
            h = d("UFIComments").getComment(a);
          if (!h) return;
          a =
            l._hasCommentTextChanged(h, b) ||
            l._hasCommentPhotoChanged(h.photo_comment, f.attachedPhoto) ||
            l._hasCommentStickerChanged(h.attachment, f.attachedSticker) ||
            l._hasCommentVideoChanged(h.video_comment, f.attachedVideo) ||
            l._hasCommentFileChanged(h.file_comment, f.attachedFile) ||
            l._hasCommentShareURLChanged(h.attachment, f.attachedShareURL);
          h = c("ImmutableObject").set(h, {
            status: d("UFIConstants").UFIStatus.PENDING_EDIT,
            body: { text: b },
            editnux: null,
            attachment: f.attachedSticker,
            photo_comment: f.attachedPhoto,
            video_comment: f.attachedVideo,
            file_comment: f.attachedFile,
          });
          a &&
            (h = c("ImmutableObject").set(h, {
              originalTimestamp: h.timestamp.time,
              timestamp: {
                time: Math.floor(Date.now() / 1e3),
                text: i._("il y a quelques secondes"),
              },
            }));
          c("UFICentralUpdates").handleUpdate(
            d("UFIConstants").UFIPayloadSourceType.USER_ACTION,
            { comments: [h] }
          );
          d("UFIFeedbackTargets").getFeedbackTarget(
            h.ftentidentifier,
            function (a) {
              var b = {};
              b[d("ActorURI").PARAMETER_ACTOR] = a.actorforpost;
              a = d("ThisControllerNoLongerExists").__DEADURI__("k2h1bj7qe");
              h &&
                d("MercuryServerDispatcher").trySend(
                  a,
                  babelHelpers["extends"](
                    {
                      ft_ent_identifier: h.ftentidentifier,
                      comment_text: e,
                      source: f.source,
                      comment_id: h.id,
                      parent_comment_id: h.parentcommentid,
                      attached_sticker_fbid: f.attachedSticker
                        ? f.attachedSticker.fbid
                        : 0,
                      attached_photo_fbid: f.attachedPhoto
                        ? f.attachedPhoto.fbid
                        : 0,
                      attached_video_fbid: f.attachedVideo
                        ? f.attachedVideo.fbid
                        : 0,
                      attached_file_fbid: f.attachedFile
                        ? f.attachedFile.fbid
                        : 0,
                      attached_share_url: f.attachedShareURL,
                      is_markdown: f.isMarkdown,
                      delight_ranges: f.delightRanges,
                    },
                    g,
                    b
                  )
                );
            }
          );
        },
        translateComments: function (a, b, c, e) {
          var f = d("ThisControllerNoLongerExists").__DEADURI__("nbd8ptnbg");
          d("MercuryServerDispatcher").trySend(f, {
            ft_ent_identifier: a,
            comment_ids: b,
            source: e.source,
            trigger: c,
          });
        },
        setHideAsSpam: function (a, b, e) {
          var f = d("UFIUserActionUtils").trackingData(e.target),
            g = d("UFIComments").getComment(a),
            h = {
              commentid: a,
              actiontype: d("UFIConstants").UFIActionType.COMMENT_SET_SPAM,
              shouldHideAsSpam: b,
            };
          c("UFICentralUpdates").handleUpdate(
            d("UFIConstants").UFIPayloadSourceType.USER_ACTION,
            { actions: [h] }
          );
          g &&
            d("UFIFeedbackTargets").getFeedbackTarget(
              g.ftentidentifier,
              function (h) {
                var i = {};
                i[d("ActorURI").PARAMETER_ACTOR] = h.actorforpost;
                h = c("XUFIHideCommentController").getURIBuilder().getURI();
                d("MercuryServerDispatcher").trySend(
                  h,
                  babelHelpers["extends"](
                    {
                      comment_id: a,
                      spam_action: b,
                      ft_ent_identifier: g.ftentidentifier,
                      source: e.source,
                    },
                    f,
                    i
                  )
                );
              }
            );
        },
        removeComment: function (a, b, e) {
          var f = d("UFIUserActionUtils").trackingData(b.target),
            g = d("UFIComments").getComment(a);
          a = {
            actiontype: d("UFIConstants").UFIActionType.DELETE_COMMENT,
            commentid: a,
            islocal: !0,
            oneclick: b.oneclick,
          };
          c("UFICentralUpdates").handleUpdate(
            d("UFIConstants").UFIPayloadSourceType.USER_ACTION,
            { actions: [a] }
          );
          g &&
            g.__typename === "saved" &&
            d("UFIFeedbackTargets").getFeedbackTarget(
              g.ftentidentifier,
              function (a) {
                var h = {};
                h[d("ActorURI").PARAMETER_ACTOR] = a.actorforpost;
                a = c("XUFIDeleteCommentController").getURIBuilder().getURI();
                d("MercuryServerDispatcher").trySend(
                  a,
                  babelHelpers["extends"](
                    {
                      comment_id: g.id,
                      comment_legacyid: g.legacyid,
                      ft_ent_identifier: g.ftentidentifier,
                      one_click: b.oneclick,
                      source: b.source,
                      block_author: e,
                      client_id: d("ClientIDs").getNewClientID(),
                    },
                    f,
                    h
                  )
                );
              }
            );
        },
        deleteCommentAndRemoveCommenter: function (a, b, e, f, g, h, i) {
          var j = d("UFIUserActionUtils").trackingData(b.target),
            k = d("UFIComments").getComment(a);
          a = {
            actiontype:
              d("UFIConstants").UFIActionType.DELETE_COMMENT_REMOVE_COMMENTER,
            commentid: a,
            islocal: !0,
            oneclick: b.oneclick,
          };
          c("UFICentralUpdates").handleUpdate(
            d("UFIConstants").UFIPayloadSourceType.USER_ACTION,
            { actions: [a] }
          );
          k &&
            k.__typename === "saved" &&
            d("UFIFeedbackTargets").getFeedbackTarget(
              k.ftentidentifier,
              function (a) {
                var l = {};
                l[d("ActorURI").PARAMETER_ACTOR] = a.actorforpost;
                a = c("XUFIDeleteCommentAndRemoveCommenterController")
                  .getURIBuilder()
                  .getURI();
                d("MercuryServerDispatcher").trySend(
                  a,
                  babelHelpers["extends"](
                    {
                      comment_id: k.id,
                      comment_legacyid: k.legacyid,
                      ft_ent_identifier: k.ftentidentifier,
                      one_click: b.oneclick,
                      source: b.source,
                      delete_posts: e,
                      delete_comments: f,
                      decline_pending_members: g,
                      block_permanently: h,
                      apply_to_other_groups: i,
                      client_id: d("ClientIDs").getNewClientID(),
                    },
                    j,
                    l
                  )
                );
              }
            );
        },
        muteMember: function (a, b, e, f) {
          b = d("UFIComments").getComment(a);
          a = e !== null;
          if (b && b.__typename === "saved") {
            a = {
              authorid: b.author,
              actiontype: d("UFIConstants").UFIActionType.MUTE_MEMBER,
              shouldmute: a,
            };
            c("UFICentralUpdates").handleUpdate(
              d("UFIConstants").UFIPayloadSourceType.USER_ACTION,
              { actions: [a] }
            );
            var g;
            c("Bootloader").loadModules(
              ["GroupMemberActionSource"],
              function (a) {
                g = a.GROUP_COMMENT;
              },
              "UFIUserActions"
            );
            a = c("XGroupsMuteMembersController").getURIBuilder().getURI();
            d("MercuryServerDispatcher").trySend(a, {
              group_id: b.group_id,
              user_id: b.author,
              mute_duration: e,
              custom_expiration: f,
              should_reload: !1,
              source: g,
            });
          }
        },
        toggleTextDelights: function (a, b, c) {
          var e = d("ThisControllerNoLongerExists").__DEADURI__("s3xbblpdp");
          d("MercuryServerDispatcher").trySend(e, {
            comment_id: a.id,
            ft_ent_identifier: a.ftentidentifier,
            should_hide: c,
            parent_comment_id: a.parentcommentid,
            source: b.source,
          });
        },
        banUser: function (a, b, c, e) {
          e = c ? k.BAN : k.UNDO_BAN;
          d("MercuryServerDispatcher").trySend("/ajax/ufi/ban_user.php", {
            page_id: b,
            commenter_id: a.author,
            action: e,
            comment_id: a.id,
            client_side: !0,
            post_only: !1,
          });
        },
        streamBanUser: function (a, b, c, e) {
          e = c ? k.BAN : k.UNDO_BAN;
          d("MercuryServerDispatcher").trySend("/ajax/ufi/ban_user.php", {
            page_id: b,
            commenter_id: a.author,
            action: e,
            comment_id: a.id,
            client_side: !0,
            stream_only: !0,
          });
        },
        suspendUser: function (a, b, c, e, f) {
          f = c ? k.BAN : k.UNDO_BAN;
          d("MercuryServerDispatcher").trySend("/ajax/ufi/ban_user.php", {
            page_id: b,
            commenter_id: a.author,
            action: f,
            comment_id: a.id,
            suspension_duration_seconds: e,
            client_side: !0,
          });
        },
        changeSubscribe: function (a, b, e) {
          d("UFIFeedbackTargets").getFeedbackTarget(a, function (f) {
            var g = d("UFIUserActionUtils").trackingData(e.target);
            if (f.hasviewersubscribed !== b) {
              var h = {
                actiontype: d("UFIConstants").UFIActionType.SUBSCRIBE_ACTION,
                actorid: f.actorforpost,
                hasviewersubscribed: b,
                entidentifier: a,
              };
              c("UFICentralUpdates").handleUpdate(
                d("UFIConstants").UFIPayloadSourceType.USER_ACTION,
                { actions: [h] }
              );
              h = {};
              h[d("ActorURI").PARAMETER_ACTOR] = f.actorforpost;
              d("MercuryServerDispatcher").trySend(
                "/ajax/ufi/subscribe.php",
                babelHelpers["extends"](
                  {
                    subscribe_action: b,
                    ft_ent_identifier: a,
                    source: e.source,
                    client_id: d("ClientIDs").getNewClientID(),
                    rootid: e.rootid,
                    comment_expand_mode: e.commentexpandmode,
                  },
                  g,
                  h
                )
              );
            }
          });
        },
        changeSubscribeWithLogging: function (a, b) {
          d("UFIFeedbackTargets").getFeedbackTarget(a, function (e) {
            if (e.hasviewersubscribed !== b) {
              e = {
                actiontype: d("UFIConstants").UFIActionType.SUBSCRIBE_ACTION,
                actorid: e.actorforpost,
                hasviewersubscribed: b,
                entidentifier: a,
              };
              c("UFICentralUpdates").handleUpdate(
                d("UFIConstants").UFIPayloadSourceType.USER_ACTION,
                { actions: [e] }
              );
              d("MercuryServerDispatcher").trySend(
                "/ajax/litestand/follow_post",
                { follow: b, message_id: a }
              );
            }
          });
        },
        fetchSpamComments: function (a, b, c, e) {
          d("MercuryServerDispatcher").trySend(
            "/ajax/ufi/id_comment_fetch.php",
            {
              ft_ent_identifier: a,
              viewas: e,
              comment_ids: b,
              parent_comment_id: c,
              source: null,
            }
          );
        },
        manageConstituentBadge: function (a) {
          c("goURI")(
            c("XTownHallController")
              .getURIBuilder()
              .setBool("setting_nux", !0)
              .getURI()
          );
        },
        authorPinComment: function (a, b) {
          d("MercuryServerDispatcher").trySend(o, {
            comment_id: a.id,
            ft_ent_identifier: a.ftentidentifier,
            is_pinned_by_author: b,
          });
          var e = {
            commentid: a.id,
            pinnedByAuthor: b,
            actiontype: "comment_change_author_pin",
          };
          a = d("UFIComments").getComment(a.id);
          if (!a) return;
          a = c("ImmutableObject").set(a, { ispinnedbyauthor: b });
          c("UFICentralUpdates").handleUpdate(
            d("UFIConstants").UFIPayloadSourceType.USER_ACTION,
            { comments: [a], actions: [e] }
          );
        },
        removePreview: function (a, b) {
          var e = d("UFIUserActionUtils").trackingData(b.target),
            f = {
              commentid: a.id,
              actiontype: d("UFIConstants").UFIActionType.REMOVE_PREVIEW,
            };
          c("UFICentralUpdates").handleUpdate(
            d("UFIConstants").UFIPayloadSourceType.USER_ACTION,
            { actions: [f] }
          );
          d("MercuryServerDispatcher").trySend(
            "/ajax/ufi/remove_preview.php",
            babelHelpers["extends"](
              {
                comment_id: a.id,
                ft_ent_identifier: a.ftentidentifier,
                source: b.source,
              },
              e
            )
          );
        },
      };
    function a(a) {
      c("AsyncResponse").defaultErrorHandler(a);
    }
    function b(a) {
      var b = a.request.data;
      c("AsyncResponse").defaultErrorHandler(a);
      var e = b.client_id || b.comment_id;
      e = d("UFIComments").getComment(e);
      if (!e) return;
      var f =
        e.status === d("UFIConstants").UFIStatus.PENDING_EDIT
          ? d("UFIConstants").UFIStatus.FAILED_EDIT
          : d("UFIConstants").UFIStatus.FAILED_ADD;
      e = c("ImmutableObject").setDeep(e, {
        status: f,
        allowRetry: m(a),
        body: {
          mentionstext: b.comment_text,
          mentionsphoto: e.photo_comment,
          mentionsvideo: e.video_comment,
          mentionsfile: e.file_comment,
        },
      });
      f = [];
      a = [];
      (e.privacy_value === 2 || e.privacy_value === 3 ? a : f).push(e);
      c("UFICentralUpdates").handleUpdate(
        d("UFIConstants").UFIPayloadSourceType.USER_ACTION,
        { comments: f, privatecomments: a }
      );
    }
    function m(a) {
      var b = a.getError();
      if (a.isBlockedAction()) return !1;
      if (a.silentError) return !0;
      return b === 1357012 || b === 1357006 ? !1 : !0;
    }
    function e(a) {
      a = a.request.data;
      a = a.comment_id;
      a = d("UFIComments").getComment(a);
      if (!a) return;
      a = c("ImmutableObject").set(a, {
        status: a.priorstatus || null,
        priorstatus: void 0,
      });
      c("UFICentralUpdates").handleUpdate(
        d("UFIConstants").UFIPayloadSourceType.USER_ACTION,
        { comments: [a] }
      );
    }
    function f(a) {
      var b = a.request.data,
        e = b.comment_id,
        f = d("UFIComments").getComment(e);
      if (f && b.like_action === f.hasviewerliked) {
        b = f.hasviewerliked ? -1 : 1;
        e = {
          commentid: e,
          actiontype: d("UFIConstants").UFIActionType.COMMENT_LIKE,
          viewerliked: !f.hasviewerliked,
          likecount: (f.likecount || 0) + b,
        };
        c("UFICentralUpdates").handleUpdate(
          d("UFIConstants").UFIPayloadSourceType.USER_ACTION,
          { actions: [e] }
        );
      }
      c("AsyncResponse").defaultErrorHandler(a);
    }
    function h(a) {
      var b = a.request.data,
        e = b.ft_ent_identifier;
      d("UFIFeedbackTargets").getFeedbackTarget(e, function (a) {
        if (a.hasviewerliked === b.like_action) {
          var f = a.hasviewerliked ? -1 : 1;
          f = {
            actiontype: d("UFIConstants").UFIActionType.LIKE_ACTION,
            actorid: a.actorforpost,
            hasviewerliked: !a.hasviewerliked,
            likecount: (a.likecount || 0) + f,
            entidentifier: e,
            likesentences: {
              current: a.likesentences.alternate,
              alternate: a.likesentences.current,
            },
          };
          c("UFICentralUpdates").handleUpdate(
            d("UFIConstants").UFIPayloadSourceType.USER_ACTION,
            { actions: [f] }
          );
        }
      });
      c("AsyncResponse").defaultErrorHandler(a);
    }
    function n(a) {
      var b = a.request.data,
        e = b.ft_ent_identifier;
      d("UFIFeedbackTargets").getFeedbackTarget(e, function (a) {
        if (a.hasviewersubscribed === b.subscribe_action) {
          a = {
            actiontype: d("UFIConstants").UFIActionType.SUBSCRIBE_ACTION,
            actorid: a.actorforpost,
            hasviewersubscribed: !a.hasviewersubscribed,
            entidentifier: e,
          };
          c("UFICentralUpdates").handleUpdate(
            d("UFIConstants").UFIPayloadSourceType.USER_ACTION,
            { actions: [a] }
          );
        }
      });
      c("AsyncResponse").defaultErrorHandler(a);
    }
    a = {
      "/ajax/ufi/ban_user.php": {
        mode: d("MercuryServerDispatcher").IMMEDIATE,
        error_handler: a,
      },
      "/ajax/ufi/subscribe.php": {
        mode: d("MercuryServerDispatcher").BATCH_CONDITIONAL,
        error_handler: n,
        batch_if: r,
        batch_function: s,
      },
      "/ajax/ufi/id_comment_fetch.php": {
        mode: d("MercuryServerDispatcher").IMMEDIATE,
      },
      "/ajax/ufi/remove_preview.php": {
        mode: d("MercuryServerDispatcher").IMMEDIATE,
      },
      "/profile/broadcast_request/async/add_composer_token/": {
        mode: d("MercuryServerDispatcher").IMMEDIATE,
      },
      "/ajax/litestand/follow_post": {
        mode: d("MercuryServerDispatcher").BATCH_CONDITIONAL,
        error_handler: n,
        batch_if: r,
        batch_function: s,
      },
    };
    n = d("ThisControllerNoLongerExists").__DEADURI__("tuen76whe");
    a[n] = { mode: d("MercuryServerDispatcher").IMMEDIATE, error_handler: b };
    r = c("XUFIDeleteCommentController").getURIBuilder().getURI();
    a[r] = { mode: d("MercuryServerDispatcher").IMMEDIATE, error_handler: e };
    n = c("XUFIDeleteCommentAndRemoveCommenterController")
      .getURIBuilder()
      .getURI();
    a[n] = { mode: d("MercuryServerDispatcher").IMMEDIATE, error_handler: e };
    r = d("ThisControllerNoLongerExists").__DEADURI__("cg8petm7e");
    a[r] = {
      mode: d("MercuryServerDispatcher").BATCH_CONDITIONAL,
      error_handler: f,
      batch_if: p,
      batch_function: s,
    };
    n = c("XGroupsMuteMembersController").getURIBuilder().getURI();
    a[n] = { mode: d("MercuryServerDispatcher").IMMEDIATE };
    r = d("ThisControllerNoLongerExists").__DEADURI__("cpl08d1cb");
    a[r] = { mode: d("MercuryServerDispatcher").IMMEDIATE };
    f = c("XUFIHideCommentController").getURIBuilder().getURI();
    a[f] = { mode: d("MercuryServerDispatcher").IMMEDIATE, error_handler: e };
    p = d("ThisControllerNoLongerExists").__DEADURI__("co98aqji9");
    a[p] = {
      mode: d("MercuryServerDispatcher").BATCH_CONDITIONAL,
      error_handler: h,
      batch_if: q,
      batch_function: s,
    };
    n = d("ThisControllerNoLongerExists").__DEADURI__("jl9uxu6an");
    a[n] = { mode: d("MercuryServerDispatcher").IMMEDIATE, error_handler: b };
    r = d("ThisControllerNoLongerExists").__DEADURI__("pqi03hqc1");
    a[r] = { mode: d("MercuryServerDispatcher").IMMEDIATE };
    f = d("ThisControllerNoLongerExists").__DEADURI__("ocmtwze6h");
    a[f] = { mode: d("MercuryServerDispatcher").IMMEDIATE };
    var o = d("ThisControllerNoLongerExists").__DEADURI__("yfa5gwrzw");
    a[o] = { mode: d("MercuryServerDispatcher").IMMEDIATE };
    d("MercuryServerDispatcher").registerEndpoints(a);
    function p(a, b) {
      return (
        a &&
        a.ft_ent_identifier == b.ft_ent_identifier &&
        a.comment_id == b.comment_id
      );
    }
    function q(a, b) {
      return a && a.ft_ent_identifier == b.ft_ent_identifier;
    }
    function r(a, b) {
      return a && a.ft_ent_identifier == b.ft_ent_identifier;
    }
    function s(a, b) {
      return b;
    }
    e = babelHelpers["extends"](
      {},
      l,
      d("UFIReactionUserActions"),
      d("UFICommentVoteUserActions")
    );
    g["default"] = e;
  },
  98
);
__d(
  "UFICommentEditIDStore",
  ["FluxReduceStore", "UFICentralUpdates", "UFIDispatcherBase"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      a = i(a, "string");
      return typeof a === "symbol" ? a : String(a);
    }
    function i(a, b) {
      if (typeof a !== "object" || a === null) return a;
      var c =
        a[typeof Symbol === "function" ? Symbol.toPrimitive : "@@toPrimitive"];
      if (c !== void 0) {
        c = c.call(a, b || "default");
        if (typeof c !== "object") return c;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (b === "string" ? String : Number)(a);
    }
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b) {
        b = a.call(this, b) || this;
        b.reduce = function (a, b) {
          switch (b.type) {
            case "PRIVATE_ACTOR_CHANGED":
              return {};
            case "add_comment_cancel":
            case "story_show_facecast_replies":
            case "story_hide_facecast_replies":
            case "add_comment_submit_edit":
              a[b.instanceID];
              var c = babelHelpers.objectWithoutPropertiesLoose(
                a,
                [b.instanceID].map(h)
              );
              return c;
            case "comment_edit":
              return babelHelpers["extends"](
                {},
                a,
                ((c = {}), (c[b.instanceID] = b.comment.id), c)
              );
          }
          return a;
        };
        c("UFICentralUpdates").subscribe("actor-changed", function (a, b) {
          c("UFIDispatcherBase").dispatch({
            type: "PRIVATE_ACTOR_CHANGED",
            instanceID: !0,
            ftentidentifier: !0,
          });
        });
        return b;
      }
      var d = b.prototype;
      d.getInitialState = function () {
        return {};
      };
      d.getForInstance = function (a) {
        return this.getState()[a] || null;
      };
      return b;
    })(c("FluxReduceStore"));
    a.__moduleID = f.id;
    b = new a(c("UFIDispatcherBase"));
    g["default"] = b;
  },
  98
);
__d(
  "UFIVisibility",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = Object.freeze({ VISIBLE: "visible", HIDDEN: "hidden" });
    f["default"] = a;
  },
  66
);
__d(
  "UFICommentVisibilityStore",
  [
    "invariant",
    "FluxReduceStore",
    "UFIComments",
    "UFIDispatcherBase",
    "UFILivePinnedCommentStore",
    "UFIRootRegistry",
    "UFIVisibility",
    "filterObject",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    function i(a, b) {
      b === void 0 && (b = null);
      return b && b.comment.fbid
        ? a +
            "-" +
            b.comment.fbid +
            (b.isLivePinnedComment ? "-P" : "") +
            (b.isInLiveVideoReplyMode ? "-R" : "")
        : a;
    }
    function j(a, b) {
      return a === b || a.startsWith(b + "-");
    }
    function k(a) {
      a = d("UFIRootRegistry").getInstanceIDFromFTEntIdentifier(a);
      return a ? a : [];
    }
    function l(a) {
      return { instanceid: a };
    }
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, e;
        for (var f = arguments.length, g = new Array(f), k = 0; k < f; k++)
          g[k] = arguments[k];
        return (
          ((b = e = a.call.apply(a, [this].concat(g)) || this),
          (e.reduce = function (a, b) {
            switch (b.type) {
              case "comment_unmounted":
                var e = babelHelpers["extends"]({}, a);
                delete e[i(b.instanceID, b.renderedComment)];
                return e;
              case "comment_change_visibility":
                return babelHelpers["extends"](
                  {},
                  a,
                  ((e = {}),
                  (e[i(b.instanceID, b.renderedComment)] = b.visibility),
                  e)
                );
              case "story_change_visibility":
                e = d("UFIRootRegistry").getFTEntIdentifierFromInstanceID(
                  b.instanceID
                );
                var f = d("UFIComments").getCommentsForFTEntIdentifier(e);
                b.type === "story_change_visibility" || h(0, 3643);
                var g = b.visibility;
                if (f) {
                  f = f.reduce(function (a, c) {
                    a[
                      i(
                        b.instanceID,
                        c.fbid
                          ? {
                              comment: c,
                              isLivePinnedComment: !1,
                              isInLiveVideoReplyMode: !1,
                            }
                          : null
                      )
                    ] = g;
                    return a;
                  }, {});
                  if (e) {
                    e = c("UFILivePinnedCommentStore").getPinnedCommentID(e);
                    if (e) {
                      e = d("UFIComments").getComment(e);
                      e &&
                        e.__typename === "saved" &&
                        (f[
                          i(b.instanceID, {
                            comment: e,
                            isLivePinnedComment: !0,
                            isInLiveVideoReplyMode: !1,
                          })
                        ] = g);
                    }
                  }
                  return babelHelpers["extends"](
                    {},
                    a,
                    ((e = {}), (e[i(b.instanceID)] = b.visibility), e),
                    f
                  );
                }
              case "story_remove":
                var k = b.instanceID,
                  l = i(k);
                return c("filterObject")(a, function (a, b) {
                  return b !== l && !j(b, k);
                });
            }
            return a;
          }),
          b) || babelHelpers.assertThisInitialized(e)
        );
      }
      var e = b.prototype;
      e.getInitialState = function () {
        return {};
      };
      e.getVisibility = function (a, b, d) {
        d === void 0 && (d = null);
        d = d ? i(b.instanceid, d) : i(b.instanceid);
        return Object.prototype.hasOwnProperty.call(a, d)
          ? a[d]
          : c("UFIVisibility").HIDDEN;
      };
      e.$UFICommentVisibilityStore1 = function (a) {
        a = l(a);
        return (
          this.getVisibility(this.getState(), a) === c("UFIVisibility").VISIBLE
        );
      };
      e.isFeedbackTargetVisible = function (a) {
        var b = this;
        a = k(a);
        return a.some(function (a) {
          return b.$UFICommentVisibilityStore1(a);
        });
      };
      return b;
    })(c("FluxReduceStore"));
    a.__moduleID = f.id;
    b = new a(c("UFIDispatcherBase"));
    g["default"] = b;
  },
  98
);
__d(
  "UFILivePinnedCommentStore",
  [
    "FluxReduceStore",
    "UFIComments",
    "UFIDispatcherBase",
    "UFIFeedbackTargets",
    "areEqual",
  ],
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
          (c.reduce = function (a, b) {
            var c;
            switch (b.type) {
              case "story_live_pin_comment":
              case "story_live_unpin_comment":
                var d = b.commentID,
                  e = b.pinEventID;
                return babelHelpers["extends"](
                  {},
                  a,
                  ((c = {}),
                  (c[b.ftentidentifier] = { commentID: d, pinEventID: e }),
                  c)
                );
              default:
                return a;
            }
          }),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      var e = b.prototype;
      e.getInitialState = function () {
        return {};
      };
      e.areEqual = function (a, b) {
        return c("areEqual")(a, b);
      };
      e.getPinnedCommentID = function (a) {
        var b = this.getState()[a];
        if (!b) {
          a = d("UFIFeedbackTargets").getFeedbackTargetIfExists(a);
          return !a ? null : a.livepinnedcommentid || null;
        }
        return b.commentID || null;
      };
      e.getPinEventID = function (a) {
        a = this.getState()[a];
        return !a ? null : a.pinEventID || null;
      };
      e.getPinnedCommentAuthorID = function (a) {
        a = this.getPinnedCommentID(a);
        if (!a) return null;
        a = d("UFIComments").getComment(a);
        return a ? a.author || null : null;
      };
      return b;
    })(c("FluxReduceStore"));
    a.__moduleID = f.id;
    b = new a(c("UFIDispatcherBase"));
    g["default"] = b;
  },
  98
);
__d(
  "UFILocallyComposedCommentStore",
  [
    "invariant",
    "ClientIDs",
    "FluxReduceStore",
    "UFICentralUpdatesLocalCommentAdapter",
    "UFIDispatcherBase",
    "setByPath",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    function i(a) {
      return babelHelpers["extends"]({}, a);
    }
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b) {
        b = a.call(this, b) || this;
        b.reduce = function (a, b) {
          switch (b.type) {
            case "CENTRALUPDATES_ADDED_COMMENT":
              d("ClientIDs").isExistingClientID(b.clientID) || h(0, 3492);
              a = i(a);
              c("setByPath")(a, [b.instanceID, b.clientID], !0);
              return a;
            case "CENTRALUPDATES_SAVED_COMMENT":
              d("ClientIDs").isExistingClientID(b.clientID) || h(0, 3492);
              a = i(a);
              c("setByPath")(a, [b.instanceID, b.commentID], !0);
              delete a[b.instanceID][b.clientID];
              return a;
            case "add_comment_submit_edit":
              a = i(a);
              c("setByPath")(a, [b.instanceID, b.comment.id], !0);
              return a;
          }
          return a;
        };
        d("UFICentralUpdatesLocalCommentAdapter").subscribeOnce();
        return b;
      }
      var e = b.prototype;
      e.getInitialState = function () {
        return {};
      };
      e.getStateForInstance = function (a) {
        return a ? this.getState()[a] || {} : {};
      };
      return b;
    })(c("FluxReduceStore"));
    a.__moduleID = f.id;
    b = new a(c("UFIDispatcherBase"));
    g["default"] = b;
  },
  98
);
__d(
  "UFISpamStore",
  ["FluxReduceStore", "UFIDispatcherBase", "UFIUserActions"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, d;
        for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
          f[g] = arguments[g];
        return (
          ((b = d = a.call.apply(a, [this].concat(f)) || this),
          (d.reduce = function (a, b) {
            switch (b.type) {
              case "story_spam_fetched":
                a = babelHelpers["extends"]({}, a);
                b.commentIDs.forEach(function (b) {
                  return (a[b] = !0);
                });
                c("UFIUserActions").fetchSpamComments(
                  b.ftentidentifier,
                  b.commentIDs,
                  b.parentCommentID,
                  b.viewas
                );
                break;
            }
            return a;
          }),
          b) || babelHelpers.assertThisInitialized(d)
        );
      }
      var d = b.prototype;
      d.getInitialState = function () {
        return {};
      };
      d.areEqual = function (a, b) {
        return Object.keys(a).length === Object.keys(b).length;
      };
      return b;
    })(c("FluxReduceStore"));
    a.__moduleID = f.id;
    b = new a(c("UFIDispatcherBase"));
    g["default"] = b;
  },
  98
);
__d(
  "UFIUnseenCommentsStore",
  ["FluxReduceStore", "UFIComments", "UFIConstants", "UFIDispatcherBase"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 30;
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
          f[g] = arguments[g];
        return (
          ((b = c = a.call.apply(a, [this].concat(f)) || this),
          (c.reduce = function (a, b) {
            switch (b.type) {
              case "set_comments_scroll_distance":
                var e = b.instanceID,
                  f = b.scrollDist,
                  g = c.getInstanceState(e);
                g = babelHelpers["extends"]({}, g, { scrollDist: f });
                c.shouldAddUnseenCommentsForState(g) ||
                  ((g.unseenComments = 0), (g.unseenCommentsByThread = {}));
                return babelHelpers["extends"](
                  {},
                  a,
                  ((f = {}), (f[e] = g), f)
                );
              case "set_comment_reactions_menu_shown":
                var h;
                e = b.instanceID;
                g = b.commentReactionsMenuShown;
                f = c.getInstanceState(e);
                return babelHelpers["extends"](
                  {},
                  a,
                  ((h = {}),
                  (h[e] = babelHelpers["extends"]({}, f, {
                    commentReactionsMenuShown: g,
                  })),
                  h)
                );
              case "handle_new_comments":
                e = b.instanceID;
                f = b.numComments;
                if (!c.shouldAddUnseenComments(e)) return a;
                g = c.getInstanceState(e);
                return babelHelpers["extends"](
                  {},
                  a,
                  ((h = {}),
                  (h[e] = babelHelpers["extends"]({}, g, {
                    unseenComments: g.unseenComments + f,
                  })),
                  h)
                );
              case "handle_new_facecast_reply":
                e = b.instanceID;
                g = d("UFIComments").getComment(b.replyCommentID);
                if (!c.shouldAddUnseenComments(e) || !g) return a;
                f = c.getInstanceState(e);
                h = f.unseenCommentsByThread;
                b = g.parentcommentid;
                if (b) (h[b] = h[b] || 0), h[b]++;
                else return a;
                return babelHelpers["extends"](
                  {},
                  a,
                  ((g = {}),
                  (g[e] = babelHelpers["extends"]({}, f, {
                    unseenCommentsByThread: h,
                  })),
                  g)
                );
              default:
                return a;
            }
          }),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      var c = b.prototype;
      c.getInitialState = function () {
        return {};
      };
      c.getInstanceState = function (a) {
        a = this.getState()[a];
        return (
          a || {
            commentsReactionMenuShown: !1,
            scrollDist: 0,
            unseenComments: 0,
            unseenCommentsByThread: {},
          }
        );
      };
      c.getCommentReactionsMenuShown = function (a) {
        return this.getInstanceState(a).commentReactionsMenuShown;
      };
      c.getScrolledUp = function (a) {
        return (
          this.getScrollDist(a) >
          d("UFIConstants").maxScrollDistanceForAutoScroll
        );
      };
      c.getScrollDist = function (a) {
        return this.getInstanceState(a).scrollDist;
      };
      c.getUnseenComments = function (a) {
        return this.getInstanceState(a).unseenComments;
      };
      c.getUnseenCommentsByThread = function (a) {
        return this.getInstanceState(a).unseenCommentsByThread;
      };
      c.getUnseenCommentsInThread = function (a, b) {
        a = this.getUnseenCommentsByThread(a);
        return a[b] || 0;
      };
      c.shouldAddUnseenComments = function (a) {
        return this.shouldAddUnseenCommentsForState(this.getInstanceState(a));
      };
      c.shouldAddUnseenCommentsForState = function (a) {
        return (
          a.scrollDist > d("UFIConstants").maxScrollDistanceForAutoScroll ||
          (a.commentReactionsMenuShown && a.scrollDist >= h)
        );
      };
      return b;
    })(c("FluxReduceStore"));
    a.__moduleID = f.id;
    b = new a(c("UFIDispatcherBase"));
    g["default"] = b;
  },
  98
);
__d(
  "UFINewCommentsPillUtils",
  ["UFISharedDispatcher", "UFIStoryAction", "UFIUnseenCommentsStore"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      var c = a ? a.length : 0,
        d = b ? b.length : 0;
      if (!c && !d) return 0;
      var e,
        f = 0;
      if (a)
        for (c = c - 1; c >= 0; c--) {
          var g = a[c];
          if (g.__typename === "saved") {
            e = g.id;
            break;
          }
          f++;
        }
      g = 0;
      c = !1;
      if (b)
        for (a = d - 1; a >= 0; a--) {
          d = b[a];
          if (d.id === e) {
            c = !0;
            break;
          }
          g++;
        }
      d = g - f;
      if (!e || c) return d;
      else return 0;
    }
    function b(a, b) {
      b = b.target;
      b instanceof HTMLElement && h(b, a);
    }
    function h(a, b) {
      a = a.scrollHeight - a.offsetHeight - a.scrollTop;
      c("UFISharedDispatcher").dispatch(
        d("UFIStoryAction").setCommentsScrollDistance(b, a)
      );
    }
    function e(a, b) {
      if (a && b) {
        var c = a.scrollHeight - a.offsetHeight;
        b = b.Animation;
        new b(a)
          .to("scrollTop", c)
          .ease(b.ease.end)
          .duration(Math.min(400, Math.max(200, (c - a.scrollTop) / 1.5)))
          .ondone(function () {
            a.scrollTop = a.scrollHeight - a.offsetHeight;
          })
          .go();
      }
    }
    function f(a, b) {
      a.type === "handle_new_facecast_reply" &&
        c("UFISharedDispatcher").dispatch(
          d("UFIStoryAction").addFacecastReply(b, a.replyCommentID)
        );
      b = b.instanceid;
      !c("UFIUnseenCommentsStore").getScrolledUp(b) &&
      c("UFIUnseenCommentsStore").getCommentReactionsMenuShown(b)
        ? setTimeout(function () {
            c("UFISharedDispatcher").dispatch(a);
          }, 0)
        : c("UFISharedDispatcher").dispatch(a);
    }
    g.findNumNewComments = a;
    g.handleScroll = b;
    g.updateScrolledUp = h;
    g.scrollToBottom = e;
    g.dispatchNewCommentAction = f;
  },
  98
);
__d(
  "TabBar",
  ["ArbiterMixin", "ReactDOMComet", "mixin"],
  function (a, b, c, d, e, f, g) {
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(c, e, f) {
        var g;
        g = a.call(this) || this;
        e.props = babelHelpers["extends"]({}, e.props, {
          onTabClick: function (a) {
            return g.inform(b.TAB_CLICK, a);
          },
        });
        f = d("ReactDOMComet").createRoot(f);
        f.render(c(e));
        return g;
      }
      return b;
    })(c("mixin")(c("ArbiterMixin")));
    a.TAB_CLICK = "onTabClick";
    g["default"] = a;
  },
  98
);
__d(
  "MercuryTypingAnimation_DEPRECATED.react",
  ["cx", "joinClasses", "react"],
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
        return i.jsx("div", {
          className: c("joinClasses")("_4a0v _1x3z", this.props.className),
          children: i.jsxs("div", {
            className: "_4b0g",
            children: [
              i.jsx("div", { className: "_5pd7" }),
              i.jsx("div", { className: "_5pd7" }),
              i.jsx("div", { className: "_5pd7" }),
            ],
          }),
        });
      };
      return b;
    })(i.PureComponent);
    g["default"] = a;
  },
  98
);
__d(
  "FeedStoryCategory",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      UNKNOWN: 0,
      ORGANIC: 1,
      ENGAGEMENT: 2,
      FIXED_POSITION: 3,
      PROMOTION: 4,
      SPONSORED: 5,
      END_OF_FEED_CONTENT: 6,
      FB_STORIES: 7,
      HIGH_VALUE_PROMOTION: 8,
      FB_STORIES_ENGAGEMENT: 9,
      SHOWCASE: 10,
      FB_SHORTS: 11,
      TRENDING: 12,
      ENGAGEMENT_QP: 13,
      MULTI_FB_STORIES_TRAY: 14,
    });
    f["default"] = a;
  },
  66
);
__d(
  "AdAllocationIntegrityGapsInfo",
  ["FeedStoryCategory"],
  function (a, b, c, d, e, f, g) {
    a = (function () {
      function a(a) {
        (this.story_category = a),
          (this.dist_to_top = -1),
          (this.dist_to_fixed = -1),
          (this.dist_to_promo = -1),
          (this.dist_to_sponsored = -1),
          (this.dist_to_engagement = -1);
      }
      var b = a.prototype;
      b.setDistToTop = function (a) {
        this.dist_to_top = a;
      };
      b.setDistIfAbsent = function (a, b) {
        if (
          b < 0 ||
          a === c("FeedStoryCategory").UNKNOWN ||
          a === c("FeedStoryCategory").ORGANIC
        )
          return;
        switch (a) {
          case c("FeedStoryCategory").ENGAGEMENT:
            this.dist_to_engagement = this.$1(b, this.dist_to_engagement);
            break;
          case c("FeedStoryCategory").FIXED_POSITION:
            this.dist_to_fixed = this.$1(b, this.dist_to_fixed);
            break;
          case c("FeedStoryCategory").PROMOTION:
            this.dist_to_promo = this.$1(b, this.dist_to_promo);
            break;
          case c("FeedStoryCategory").SPONSORED:
            this.dist_to_sponsored = this.$1(b, this.dist_to_sponsored);
            break;
        }
      };
      b.$1 = function (a, b) {
        return b === -1 ? a : b;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "AdAllocationIntegrityUtils",
  ["DataAttributeUtils", "FeedStoryCategory", "collectDataAttributes"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "data-story_category",
      i = "data-dedupekey",
      j = "ft";
    function a(a) {
      var b = c("collectDataAttributes")(a, [j]).ft;
      a = c("DataAttributeUtils").getDataAttribute(a, h);
      if (a)
        switch (a) {
          case "2":
            return c("FeedStoryCategory").ENGAGEMENT;
          case "3":
            return c("FeedStoryCategory").FIXED_POSITION;
          case "4":
            return c("FeedStoryCategory").PROMOTION;
          default:
            return c("FeedStoryCategory").UNKNOWN;
        }
      else if (b.ei) return c("FeedStoryCategory").SPONSORED;
      else return c("FeedStoryCategory").ORGANIC;
    }
    function b(a) {
      if (
        a === c("FeedStoryCategory").SPONSORED ||
        a === c("FeedStoryCategory").ENGAGEMENT ||
        a === c("FeedStoryCategory").FIXED_POSITION ||
        a === c("FeedStoryCategory").PROMOTION
      )
        return !0;
      else return !1;
    }
    function d(a) {
      return c("DataAttributeUtils").getDataAttribute(a, i);
    }
    g.getFeedStoryCategory = a;
    g.isGapRuleCategory = b;
    g.getDedupKey = d;
  },
  98
);
__d(
  "WwwVpvFeedTrackingFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("getFalcoLogPolicy_DO_NOT_USE")("1841521");
    b = d("FalcoLoggerInternal").create("www_vpv_feed_tracking", a);
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "viewportTrackingBuilder",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      var b = null;
      return {
        factory: a,
        singleton: function () {
          b || (b = a.apply(void 0, arguments));
          return b;
        },
        clearSingleton: function () {
          b = null;
        },
      };
    }
    f["default"] = a;
  },
  66
);
__d(
  "ViewportTracking",
  [
    "cx",
    "invariant",
    "AdAllocationIntegrityGapsInfo",
    "AdAllocationIntegrityUtils",
    "Arbiter",
    "CSS",
    "DOM",
    "DOMDimensions",
    "Event",
    "LitestandMessages",
    "NavigationMessage",
    "Run",
    "SubscriptionsHandler",
    "TimeSlice",
    "UserActivity",
    "ViewportTrackingHelper",
    "WebSession",
    "WwwVpvFeedTrackingFalcoEvent",
    "clearTimeout",
    "clickRefAction",
    "collectDataAttributes",
    "debounce",
    "getElementPosition",
    "getViewportDimensions",
    "pageID",
    "setTimeout",
    "throttle",
    "viewportTrackingBuilder",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = 97,
      k = "vpv",
      l = 3,
      m = 2,
      n = 1,
      o = 0,
      p = 1,
      q = 2,
      r = 3,
      s = 4,
      t = 43,
      u = (function () {
        function a(a) {
          (this.cachedAllStories = []),
            (this.vpvdAnalysis = !1),
            (this.vpvdDebug = !1),
            (this.vpvDebug = !1),
            (this.fireTimer = this.fireTimer.bind(this)),
            (this.markStoryRead = this.markStoryRead.bind(this)),
            (this.behavior = a);
        }
        var b = a.prototype;
        b.init = function (a) {
          var b = this;
          this.useBanzai = !0;
          this.vpvDebug = !!a.vpv_debug;
          this.vpvdDebug = !!a.vpvd_debug;
          this.vpvdAnalysis = !!a.vpvd_analysis;
          this.ctaLoggingEnabled = !!a.cta_logging_enabled;
          this.adAllocationIntegrityLoggingEnabled =
            !!a.ad_allocation_integrity_logging_enabled;
          this.readStoryIDs = {};
          this.storyIDsWasInView = {};
          this.minFractionToBeVisibleForTimetracking = 0.5;
          this.scrollThrottlingInterval = 100;
          this.mouseThrottlingInterval = 100;
          this.keyboardThrottlingInterval = 100;
          this.userActivityPollingInterval = 5e3;
          this.timeToBeConsideredInactive = 15e3;
          this.minTimeToReportImmediately = 500;
          this.discardVPVDIntervalThreshold = 9e4;
          this.active_state_duration = 1e3;
          this.height_diff_to_change_state = 25;
          this.focused_state_duration = 3500;
          this.minSizeToBeVisible = 200;
          this.invalidateAllStoriesCache();
          this.cachedViewportHeight = c("getViewportDimensions")().height;
          this.isTimetrackingEnabled = !1;
          this.activeStories = {};
          this.userInactiveLock = !1;
          this.userActivityPollerTimeoutID = null;
          this._headLoadStoryCount = 0;
          this.behavior.getDataFromConfig &&
            this.behavior.getDataFromConfig(a, this);
          this.isTimetrackingEnabled &&
            ((this.lastMouseX = -1),
            (this.lastMouseY = -1),
            (this.lastStreamY = -1),
            (this.latestStreamYChangedTimeStamp = -1),
            (this.userFocus = q),
            (this.latestUserFocus = q),
            (this.latestUserActivity = "init"),
            (this.focusedStory = null),
            (this.latestFocusedStory = null),
            (this.latestActiveStory = null),
            (this.totalVPVDuration = {}));
          a.tracking_duration_config &&
            ((this.scrollThrottlingInterval =
              a.tracking_duration_config.scroll_throttling_interval),
            (this.mouseThrottlingInterval =
              a.tracking_duration_config.mouse_throttling_interval),
            (this.keyboardThrottlingInterval =
              a.tracking_duration_config.keyboardThrottlingInterval),
            (this.userActivityPollingInterval =
              a.tracking_duration_config.user_activity_polling_interval),
            (this.timeToBeConsideredInactive =
              a.tracking_duration_config.time_to_be_considered_inactive),
            (this.minSizeToBeVisible =
              a.tracking_duration_config.min_height_to_be_visible),
            (this.minFractionToBeVisibleForTimetracking =
              a.tracking_duration_config.min_fraction_to_be_visible),
            (this.minTimeToReportImmediately =
              a.tracking_duration_config.min_time_to_report_immediately),
            (this.active_state_duration =
              a.tracking_duration_config.active_state_duration),
            (this.height_diff_to_change_state =
              a.tracking_duration_config.story_height_diff_to_change_state),
            (this.focused_state_duration =
              a.tracking_duration_config.focused_state_duration),
            (this.discardVPVDIntervalThreshold =
              a.tracking_duration_config.discard_vpvd_interval_threshold));
          a.record_delay !== void 0 || i(0, 1115);
          var e = c("debounce")(this.fireTimer, a.record_delay, this);
          this.initialStories = this.getStoriesInView();
          this.initialStoriesLogged = !1;
          this.subscriptions = new (c("SubscriptionsHandler"))();
          this.subscriptions.addSubscriptions(
            this._getScrollListener(e),
            c("Event").listen(window, "resize", function () {
              (b.cachedViewportHeight = c("getViewportDimensions")().height),
                e();
            }),
            c("Event").listen(window, "focus", function () {
              b.isTimetrackingEnabled &&
                b.updateTimeTrackingData(!1, "window_focus");
            }),
            c("Event").listen(window, "blur", function () {
              b.isTimetrackingEnabled &&
                b.updateTimeTrackingData(!0, "window_blur");
            }),
            c("Arbiter").subscribe(
              c("NavigationMessage").NAVIGATION_BEGIN,
              this.cleanup.bind(this)
            ),
            c("Arbiter").subscribe(
              "Stream/totalHeadLoadedStories",
              function (a, c) {
                b._headLoadStoryCount = c.count;
              }
            ),
            c("Arbiter").subscribe(
              c("LitestandMessages").STORIES_INSERTED,
              function () {
                b.initialStoriesLogged && e(),
                  b.isTimetrackingEnabled &&
                    b.updateTimeTrackingData(!1, "stories_inserted");
              }
            )
          );
          if (this.isTimetrackingEnabled && this.behavior.getStream) {
            this.updateTimeTrackingData(!1, "init");
            a = c("throttle")(function (a) {
              b.handleScroll(a);
            }, this.scrollThrottlingInterval);
            var f = c("throttle")(function (a) {
                return b.handleKeyboard(a);
              }, this.keyboardThrottlingInterval),
              g = c("throttle")(function (a) {
                return b.handleMouse(a);
              }, this.mouseThrottlingInterval);
            this.subscriptions.addSubscriptions(
              c("Event").listen(window, "scroll", a),
              c("Event").listen(
                document.documentElement,
                "DOMMouseScroll",
                a,
                void 0,
                { passive: !0 }
              ),
              c("Event").listen(
                document.documentElement,
                "mousewheel",
                a,
                void 0,
                { passive: !0 }
              ),
              c("Event").listen(document.documentElement, "keydown", f),
              c("Event").listen(document.documentElement, "mouseover", g),
              c("Event").listen(document.documentElement, "mousemove", g),
              c("Event").listen(
                document.documentElement,
                "click",
                function (a) {
                  b.handleMouse(a);
                }
              ),
              c("Arbiter").subscribe("Event/stop", function (a, c) {
                b.handleMouse(c.event);
              }),
              c("Arbiter").subscribe("PhotoSnowlift.OPEN", function () {
                (b.userFocus = r), b.handleLayers();
              }),
              c("Arbiter").subscribe("PhotoSnowlift.CLOSE", function () {
                (b.userFocus = p),
                  (b.focusedStory = null),
                  b.updateTimeTrackingData(!1, "snowlift_close");
              })
            );
            this._userActivityPoller();
          }
          d("Run").onLeave(this.cleanup.bind(this));
          d("Run").onUnload(this.cleanup.bind(this));
        };
        b._getScrollListener = function (a) {
          return c("Event").listen(window, "scroll", a);
        };
        b.cleanup = function () {
          this.subscriptions &&
            (this.subscriptions.release(), (this.subscriptions = null)),
            this.isTimetrackingEnabled &&
              (c("clearTimeout")(this.userActivityPollerTimeoutID),
              this.updateTimeTrackingData(!0, "cleanup")),
            (this.initialStories = []),
            (this._headLoadStoryCount = 0);
        };
        b.fireTimer = function () {
          this.initialStoriesLogged ||
            (this.initialStories.forEach(this.markStoryRead, this),
            (this.initialStoriesLogged = !0)),
            (this.storiesInView = this.getStoriesInView()),
            this.storiesInView.forEach(this.markStoryRead, this);
        };
        b.getSessionID = function () {
          return null;
        };
        b._userActivityPoller = function () {
          var a = this;
          !this.userInactiveLock &&
            !c("UserActivity").isActive(this.timeToBeConsideredInactive) &&
            ((this.userInactiveLock = !0),
            (this.userFocus = q),
            this.updateTimeTrackingData(!1, "user_activity_inactive"),
            c("UserActivity").subscribeOnce(function () {
              (a.userFocus = p),
                a.updateTimeTrackingData(!1, "user_activity_active"),
                (a.userInactiveLock = !1);
            }));
          this.userActivityPollerTimeoutID = c("setTimeout")(
            c("TimeSlice").guard(
              this._userActivityPoller.bind(this),
              "ViewportTracking poll setTimeout",
              { propagationType: c("TimeSlice").PropagationType.EXECUTION }
            ),
            this.userActivityPollingInterval
          );
        };
        b.getQueryID = function (a) {
          return -1;
        };
        b.getFBFeedLocations = function (a) {
          return -1;
        };
        b.getFBFeedInsertionPosition = function (a) {
          return -1;
        };
        b.createVPVDTimer = function (a) {
          var b = document.createElement("label");
          b.setAttribute("for", a.toString());
          b.setAttribute("class", "vpvd_debug_timer");
          return b;
        };
        b.updateVPVDTimer = function (a) {
          var b = this.activeStories[a].story;
          if (!b) return;
          var d = c("DOM").scry(b, ".vpvd_debug_timer");
          if (!d.length) {
            d = [this.createVPVDTimer(b), this.createVPVDTimer(b)];
            var e = c("DOM").scry(b, ".UFIRow");
            e.length && e[e.length - 1].clientWidth > 0
              ? e[e.length - 1].appendChild(d[0])
              : b.appendChild(d[0]);
            b.insertBefore(d[1], b.firstChild);
          }
          e = this.totalVPVDuration[a];
          b = Math.floor(e / 1e3) + "." + Math.floor((e % 1e3) / 100);
          c("DOM").setContent(d[0], b);
          c("DOM").setContent(d[1], b);
        };
        b.updateVPVDTimers = function () {
          for (var a in this.activeStories)
            Object.prototype.hasOwnProperty.call(this.activeStories, a) &&
              this.updateVPVDTimer(a);
        };
        b.shouldDiscardStory = function (a) {
          var b = this.activeStories[a].height || 0;
          return (
            b != this.activeStories[a].story_height && b < this.totalHeight / 2
          );
        };
        b.calculateTotalHeight = function () {
          this.totalHeight = 0;
          for (var a in this.activeStories)
            Object.prototype.hasOwnProperty.call(this.activeStories, a) &&
              (this.totalHeight += this.activeStories[a].height);
        };
        b.updateVPVDurations = function (a) {
          var b;
          if (
            this.latestUserFocus === q ||
            a - this.latestTimeTrackingTimestamp >
              this.discardVPVDIntervalThreshold
          )
            return;
          b = ((b = {}), (b[n] = 0), (b[m] = 0), (b[l] = 0), b);
          var c =
            a - this.latestTimeTrackingTimestamp >= this.focused_state_duration;
          this.totalVisibleHeight = 0;
          for (var d in this.activeStories)
            if (
              Object.prototype.hasOwnProperty.call(this.activeStories, d) &&
              !(this.latestUserFocus === p && c && this.shouldDiscardStory(d))
            ) {
              var e = this.activeStories[d].state || null,
                f = this.activeStories[d].height || 0;
              e !== null &&
                Object.prototype.hasOwnProperty.call(b, e) &&
                (b[e] += f);
              this.totalVisibleHeight += f;
            }
          e = 0;
          f = a - this.latestTimeTrackingTimestamp;
          this.latestUserFocus === p &&
            ((f =
              b[l] > 0
                ? this.focused_state_duration
                : this.active_state_duration),
            (f = Math.min(f, a - this.latestTimeTrackingTimestamp)),
            (e = a - this.latestTimeTrackingTimestamp - f));
          a = 0;
          var g = l;
          for (var h = l; h >= n; h--)
            if (b[h] > 0) {
              a = b[h];
              g = h;
              break;
            }
          h = b[l] + b[m] + b[n];
          for (d in this.activeStories)
            if (Object.prototype.hasOwnProperty.call(this.activeStories, d)) {
              if (this.latestUserFocus === p && c && this.shouldDiscardStory(d))
                continue;
              b = this.activeStories[d].state || o;
              if (a > 0 && b >= g) {
                b = this.activeStories[d].height || 0;
                b = f * (b / a);
                this.activeStories[d].vpvd += b;
                this.totalVPVDuration[d] += b;
              }
              if (h > 0) {
                var i = this.activeStories[d].height || 0;
                b = e * (i / h);
                this.activeStories[d].vpvd += b;
                this.totalVPVDuration[d] += b;
              }
            }
        };
        b.updateActiveStory = function (a, b, c, d) {
          (this.activeStories[a].state = b),
            (this.activeStories[a].ts = c),
            (this.activeStories[a].height_snapshot = d[a].height),
            (this.activeStories[a].is_focused =
              this.focusedStory === d[a].story),
            (this.activeStories[a].story_height = d[a].story_height),
            this.vpvdAnalysis &&
              ((this.activeStories[a].visible_position = d[a].visible_position),
              (this.activeStories[a].y = d[a].y));
        };
        b.updateActiveStories = function (a, b) {
          for (var c in a)
            if (Object.prototype.hasOwnProperty.call(a, c))
              if (c in this.activeStories) {
                var d = a[c].height || 0;
                this.activeStories[c].height = d;
                d = d - (this.activeStories[c].height_snapshot || 0);
                this.focusedStory === a[c].story
                  ? this.updateActiveStory(c, l, b, a)
                  : d <= -this.height_diff_to_change_state
                  ? this.updateActiveStory(
                      c,
                      this.shouldDiscardStory(c) ? o : n,
                      b,
                      a
                    )
                  : (d >= this.height_diff_to_change_state ||
                      this.activeStories[c].is_focused ||
                      this.activeStories[c].height ===
                        this.activeStories[c].story_height) &&
                    this.updateActiveStory(c, m, b, a);
              } else
                (this.storyIDsWasInView[c] = !0),
                  (this.activeStories[c] = {
                    evp_ts: b,
                    story: a[c].story,
                    height: a[c].height,
                    vpvd: 0,
                  }),
                  this.totalVPVDuration[c] || (this.totalVPVDuration[c] = 0),
                  this.updateActiveStory(c, m, b, a),
                  this.behavior.afterStoryEntersViewport &&
                    this.behavior.afterStoryEntersViewport(
                      this.activeStories[c].story
                    );
        };
        b.recordVPVDurations = function (a, b) {
          for (var c in this.activeStories)
            if (
              Object.prototype.hasOwnProperty.call(this.activeStories, c) &&
              (b || !(c in a))
            ) {
              var d = this.activeStories[c].vpvd || 0;
              (d > this.focused_state_duration ||
                d === this.totalVPVDuration[c] ||
                d >= 250) &&
                this.recordTimeStoryWasInView(this.activeStories[c]);
              this.behavior.afterStoryExitsViewport &&
                this.behavior.afterStoryExitsViewport(
                  this.activeStories[c].story
                );
              delete this.activeStories[c];
            }
        };
        b.updateTimeTrackingData = function (a, b) {
          this.userActivity = b;
          this.activeStories || (this.activeStories = {});
          b = Date.now();
          this.latestTimeTrackingTimestamp ||
            (this.latestTimeTrackingTimestamp = b);
          var c = this.getAllStoriesInView();
          this.calculateTotalHeight();
          this.updateVPVDurations(b);
          this.updateActiveStories(c, b);
          this.vpvdDebug && this.updateVPVDTimers();
          this.recordVPVDurations(c, a);
          a
            ? (this.latestTimeTrackingTimestamp = 0)
            : (this.latestTimeTrackingTimestamp = b);
          this.latestUserActivity = this.userActivity;
          this.latestUserFocus = this.userFocus;
          this.focusedStory && (this.latestActiveStory = this.focusedStory);
          this.latestFocusedStory = this.focusedStory;
          this.focusedStory = null;
        };
        b.needsToUpdateTimeTrackingData = function () {
          return !(
            this.latestUserFocus === this.userFocus &&
            (this.userFocus === q ||
              (this.userFocus === p &&
                !this.latestFocusedStory &&
                !this.focusedStory))
          );
        };
        b.getfocusedStory = function (a) {
          var b = this.getAllStoriesInView();
          for (var c in b)
            if (Object.prototype.hasOwnProperty.call(b, c)) {
              var e = b[c].story;
              if (e && d("ViewportTrackingHelper").isDescendantOf(a, e))
                return e;
            }
          return null;
        };
        b.handleLayers = function () {
          if (this.userFocus === r || this.userFocus === s) {
            this.focusedStory = this.latestActiveStory;
            this.updateTimeTrackingData(!1, "media_layer");
            return !0;
          }
          return !1;
        };
        b.didInteractWithStream = function (a) {
          if (!this.behavior.getStream) return !1;
          var b = this.behavior.getStream();
          return (
            d("ViewportTrackingHelper").isDescendantOf(a, b) ||
            d("ViewportTrackingHelper").isDescendantOf(b, a)
          );
        };
        b.handleScroll = function (a) {
          if (this.handleLayers()) return;
          var b = Date.now();
          this.behavior.getStream || i(0, 1116);
          var d = c("getElementPosition")(this.behavior.getStream()).y;
          d != this.lastStreamY ||
          b - this.latestStreamYChangedTimeStamp <
            2.5 * this.scrollThrottlingInterval ||
          this.didInteractWithStream(a.target)
            ? ((this.latestStreamYChangedTimeStamp = b), (this.userFocus = p))
            : (this.userFocus = q);
          this.lastStreamY = d;
          (this.userFocus === p || this.needsToUpdateTimeTrackingData()) &&
            this.updateTimeTrackingData(!1, "scroll");
        };
        b.handleKeyboard = function (a) {
          if (this.handleLayers()) return;
          this.didInteractWithStream(a.target)
            ? ((this.userFocus = p),
              (this.focusedStory = this.getfocusedStory(a.target)))
            : d("CSS").hasClass(a.target, "shareInput")
            ? ((this.userFocus = p),
              (this.focusedStory = this.latestActiveStory))
            : (this.userFocus = q);
          (this.userFocus === p || this.needsToUpdateTimeTrackingData()) &&
            this.updateTimeTrackingData(!1, "keyboard");
        };
        b.handleMouse = function (a) {
          if (this.handleLayers()) return;
          if (
            a.type != "click" &&
            a.clientX === this.lastMouseX &&
            a.clientY === this.lastMouseY
          )
            return;
          this.didInteractWithStream(a.target)
            ? ((this.userFocus = p),
              (this.focusedStory = this.getfocusedStory(a.target)))
            : (this.userFocus = q);
          this.lastMouseX = a.clientX;
          this.lastMouseY = a.clientY;
          this.needsToUpdateTimeTrackingData() &&
            this.updateTimeTrackingData(!1, a.type);
        };
        b.getStoriesInView = function () {
          var a = this.behavior.getAllStories(),
            b = [],
            c = !1;
          for (var e = 0; e < a.length; e++) {
            var f = a[e],
              g = this.behavior.getStoryID(f);
            if (g && this.hasBeenVisible(g)) continue;
            if (
              d("ViewportTrackingHelper").isVisible(f, this.minSizeToBeVisible)
            )
              f.getAttribute("data-insertion-position") === null &&
                f.setAttribute(
                  "data-insertion-position",
                  (e - this._headLoadStoryCount).toString()
                ),
                b.push(f),
                (c = !0);
            else if (c) break;
          }
          return b;
        };
        b.getAllStoriesFromCache = function () {
          this.cachedAllStories.length === 0 &&
            (this.cachedAllStories = this.behavior.getAllStories());
          return this.cachedAllStories;
        };
        b.invalidateAllStoriesCache = function () {
          this.cachedAllStories = [];
        };
        b.getBlueBarHeightDifference = function () {
          return window.innerHeight >= 400 ? t : 0;
        };
        b.getAllStoriesInView = function () {
          var a = this.getAllStoriesFromCache(),
            b = {},
            e = !1,
            f = 0,
            g = a.length,
            h = 1,
            i = a.length;
          this._indexOfLastVisibleStoryOnPreviousPass > g / 2 &&
            ((f = g - 1), (g = -1), (h = -h));
          var j = window.innerHeight - this.getBlueBarHeightDifference();
          for (f = f; f != g; f += h) {
            var k = a[f],
              l = d("ViewportTrackingHelper").getHeightIfVisible(
                k,
                Math.min(this.minSizeToBeVisible, j / 2)
              );
            if (l > 0 || k === this.focusedStory) {
              k.getAttribute("data-insertion-position") === null &&
                k.setAttribute(
                  "data-insertion-position",
                  (f - this._headLoadStoryCount).toString()
                );
              var m = this.behavior.getStoryID(k);
              m &&
                ((b[m] = {
                  story: k,
                  height: l,
                  story_height:
                    d("DOMDimensions").getElementDimensions(k).height,
                }),
                (e = !0),
                this.vpvdAnalysis &&
                  ((b[m].y = c("getElementPosition")(k).y),
                  (b[m].visible_position = f),
                  (i = Math.min(i, f))));
            } else if (e) {
              this._indexOfLastVisibleStoryOnPreviousPass = f - h;
              break;
            }
          }
          if (this.vpvdAnalysis) {
            this.numVisibleStories = 0;
            for (m in b)
              Object.prototype.hasOwnProperty.call(b, m) &&
                ((b[m].visible_position -= i), this.numVisibleStories++);
          }
          return b;
        };
        b.getTimetrackingDataToLog = function (a) {
          a = {
            evt: j,
            time_spent_id: c("pageID"),
            vpvd_start_timestamp: a.evp_ts || null,
            vpvd_time_delta: Math.round(a.vpvd || 0),
            story_height: d("DOMDimensions").getElementDimensions(a.story)
              .height,
            viewport_height: this.cachedViewportHeight,
            sid_raw: d("WebSession").getId(),
          };
          return { ft: a };
        };
        b.getGapsInfoToLog = function (a) {
          var b = this;
          if (a == null) return null;
          var e = d("AdAllocationIntegrityUtils").getFeedStoryCategory(a),
            f = new (c("AdAllocationIntegrityGapsInfo"))(e);
          if (!d("AdAllocationIntegrityUtils").isGapRuleCategory(e)) return f;
          else {
            e = d("AdAllocationIntegrityUtils").getDedupKey(a);
            if (e === null) return null;
            a = this.behavior.getAllStories().filter(function (a) {
              return Object.prototype.hasOwnProperty.call(
                b.storyIDsWasInView,
                b.behavior.getStoryID(a)
              );
            });
            var g = -1;
            for (var h = a.length - 1; h >= 0; h--) {
              var i = d("AdAllocationIntegrityUtils").getDedupKey(a[h]);
              if (g < 0)
                i !== null && e === i && ((g = h), f.setDistToTop(g + 1));
              else {
                i = d("AdAllocationIntegrityUtils").getFeedStoryCategory(a[h]);
                d("AdAllocationIntegrityUtils").isGapRuleCategory(i) &&
                  f.setDistIfAbsent(i, g - h);
              }
            }
            return f;
          }
        };
        b.recordTimeStoryWasInView = function (a) {
          if (!this.isTimetrackingEnabled) return;
          var b = a.story;
          if (!a.vpvd || !b) return;
          if (a.vpvd > 0) {
            a = this.getTimetrackingDataToLog(a);
            var d = c("collectDataAttributes")(b, ["ft"]);
            Object.assign(a.ft, d.ft);
            if (this.adAllocationIntegrityLoggingEnabled) {
              var e = this.getGapsInfoToLog(b);
              Object.assign(a.ft, e);
            }
            e =
              !!d.ft.ei &&
              a.ft.vpvd_time_delta > this.minTimeToReportImmediately;
            a.ei && delete a.ei;
            this.sendDataToLog(b, a, e);
          }
        };
        b.hasBeenVisible = function (a) {
          return a in this.readStoryIDs;
        };
        b.sendDataToLog = function (a, b, d) {
          if (this.useBanzai) {
            var e = {};
            d && (e.delay = 3e3);
            d = this.getSessionID();
            d && (b.ft.session_id = d);
            b.ft.raw_client_time = Date.now() / 1e3;
            c("WwwVpvFeedTrackingFalcoEvent").log(function () {
              return { tracking: JSON.stringify(b.ft) };
            });
          } else c("clickRefAction")(k, a, null, "FORCE", b);
        };
        b.markStoryRead = function (a) {
          var b = this.behavior.getStoryID(a);
          if (!b || this.hasBeenVisible(b)) return;
          this.readStoryIDs[b] = !0;
          b = this._getDataToLogImpl(a);
          var e = c("collectDataAttributes")(a, ["ft"]);
          Object.assign(b.ft, e.ft);
          delete b.ei;
          this.sendDataToLog(a, b, !1);
          this.vpvDebug && d("CSS").addClass(a, "_5m7s");
        };
        b._getDataToLogImpl = function (a) {
          a = this.behavior.getDataToLog(a);
          a.ft || (a.ft = {});
          return a;
        };
        return a;
      })();
    u.clearSingleton = function () {};
    var v = {
      getAllStories: function () {
        return [];
      },
      getStoryID: function (a) {
        return null;
      },
      getDataToLog: function (a) {
        return {};
      },
    };
    a = c("viewportTrackingBuilder")(function (a) {
      return new u(v);
    });
    u.factory = a.factory.bind(a);
    u.singleton = a.singleton.bind(a);
    u.clearSingleton = a.clearSingleton.bind(a);
    u.getBehavior = function () {
      return v;
    };
    g["default"] = u;
  },
  98
);
__d(
  "collectSubtreeData",
  [],
  function (a, b, c, d, e, f) {
    function g(a, b, c, d, e) {
      if (a.offsetWidth === 0 && a.offsetHeight === 0) return e;
      var f = {};
      if (a.getAttribute)
        for (j = 0; j < b.length; j++) {
          k = b[j];
          var h = a.getAttribute(c[k]);
          if (h) {
            f[k] = {};
            h = JSON.parse(h);
            for (var i in d)
              h[i] !== void 0 &&
                ((f[k][i] = !0),
                e[k] === void 0 && (e[k] = {}),
                e[k][i] === void 0 && (e[k][i] = []),
                d[i].length > 0 && e[k][i].push(d[i]),
                e[k][i].push("(" + h[i]));
          }
        }
      for (var j = 0; j < a.childNodes.length; j++) {
        h = a.childNodes[j];
        g(h, b, c, d, e);
      }
      for (var k in f)
        for (i in f[k]) {
          h = e[k][i][e[k][i].length - 1];
          h.length > 0 && h.charAt(0) == "("
            ? (e[k][i][e[k][i].length - 1] = h.substr(1))
            : e[k][i].push(")");
        }
      return e;
    }
    function a(a, b) {
      var c = {};
      for (var d = 0; d < b.length; ++d) c[b[d]] = "data-" + b[d];
      d = { tn: "", "tn-debug": "," };
      var e = {};
      g(a, b, c, d, e);
      for (a in e) for (b in e[a]) e[a][b] = e[a][b].join("");
      return e;
    }
    e.exports = a;
  },
  null
);
__d(
  "recordTNTreeData",
  ["collectSubtreeData"],
  function (a, b, c, d, e, f) {
    function a(a, c) {
      var d = {},
        e = b("collectSubtreeData")(a, ["ft"]);
      for (var f in e.ft)
        (d[f + "_tree"] = e.ft[f]),
          f === "tn-debug" && a.setAttribute("tn-debug_subtree", e.ft[f]);
      d.evt_value = a.offsetHeight;
      c && (d.offset = Math.max(0, a.offsetTop - c.offsetTop));
      return d;
    }
    e.exports = a;
  },
  null
);
__d(
  "StreamViewportTracking",
  [
    "DOM",
    "DOMDimensions",
    "DataAttributeUtils",
    "ViewportTracking",
    "ge",
    "recordTNTreeData",
    "viewportTrackingBuilder",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 51;
    function i(a, b, e, f, g) {
      f === void 0 && (f = h);
      g === void 0 && (g = null);
      return {
        _stream: null,
        getDataFromConfig: function (a, b) {
          b.isTimetrackingEnabled = !0;
        },
        getAllStories: function () {
          var a = c("DOM").scry(this.getStream(), e);
          return a.filter(function (a) {
            return c("DataAttributeUtils").getDataFt(a);
          });
        },
        getStream: function () {
          if (b) return b;
          this._stream || (this._stream = c("ge")("home_stream"));
          return this._stream;
        },
        getStoryID: function (a) {
          var b = JSON.parse(c("DataAttributeUtils").getDataFt(a));
          if (b && b.mf_story_key) return b.mf_story_key;
          return g !== null ? g(a) : null;
        },
        getDataToLog: function (a) {
          var b = this.getStream();
          b = c("recordTNTreeData")(a, b);
          var e = a.getAttribute("data-insertion-position");
          e !== null && (b.inspos = e);
          b.evt = f;
          b.vpv_time = Math.round(Date.now() / 1e3);
          e = c("DOM").scry(a, ".fbStoryAttachmentImage")[0];
          if (e) {
            a = d("DOMDimensions").getElementDimensions(e);
            b.story_image_height = a.height;
            b.story_image_width = a.width;
          }
          return { ft: b };
        },
      };
    }
    var j = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.apply(this, arguments) || this;
        }
        var d = a.prototype;
        d.getQueryID = function (a) {
          a = JSON.parse(c("DataAttributeUtils").getDataFt(a));
          return a.qid;
        };
        d.getFBFeedLocations = function (a) {
          a = JSON.parse(c("DataAttributeUtils").getDataFt(a));
          return a.fbfeed_location;
        };
        d.getFBFeedInsertionPosition = function (a) {
          a = JSON.parse(c("DataAttributeUtils").getDataFt(a));
          return a.insertion_position;
        };
        d.getTimetrackingDataToLog = function (a) {
          var d = b.prototype.getTimetrackingDataToLog.call(this, a);
          if (this.ctaLoggingEnabled) {
            a = c("DOM")
              .scry(a.story, "[data-is-cta]")
              .map(function (a) {
                a = c("DataAttributeUtils").getDataFt(a);
                a = a && JSON.parse(a);
                return a && a.cta_types;
              })
              .filter(function (a) {
                return !!a;
              });
            a.length > 0 && (d.ft.cta_types = a);
          }
          return d;
        };
        d.cleanup = function () {
          k.clearSingleton(), b.prototype.cleanup.call(this);
        };
        return a;
      })(c("ViewportTracking")),
      k = c("viewportTrackingBuilder")(function (a, b) {
        b = new j(i(a, b, ".uiStreamStory"));
        b.init(a);
        return b;
      });
    j.factory = k.factory.bind(k);
    j.singleton = k.singleton.bind(k);
    j.clearSingleton = k.clearSingleton.bind(k);
    j.getBehavior = i;
    g["default"] = j;
  },
  98
);
__d(
  "UFI2TypingIndicator.react",
  [
    "cx",
    "fbt",
    "MercuryTypingAnimation_DEPRECATED.react",
    "RelayHooks",
    "UFI2RealtimeContainer.react",
    "UFI2TypingIndicatorImpl_feedback.graphql",
    "UFI2TypingIndicator_feedback.graphql",
    "debounceAcrossTransitions",
    "gkx",
    "react",
    "requireDeferred",
    "useVisibilityObserver",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j,
      k,
      l = d("react");
    e = d("react");
    var m = e.useCallback,
      n = e.useEffect,
      o = e.useMemo,
      p = e.useState,
      q = c("requireDeferred")("UFI2TypingSubscription").__setRef(
        "UFI2TypingIndicator.react"
      ),
      r = 15 * 1e3;
    function s(a) {
      a = a.feedback_typers;
      return ((a = a == null ? void 0 : a.other_count) != null ? a : 0) > 0
        ? i._(
            "Quelqu\u2019un est en train d\u2019\u00e9crire un commentaire..."
          )
        : null;
    }
    function t(a) {
      a = a.feedback;
      var e = p({ isTyping: !1, isVisible: !1, label: null }),
        f = e[0],
        g = f.label,
        h = f.isVisible,
        i = f.isTyping,
        k = e[1],
        t = d("RelayHooks").useFragment(
          j !== void 0
            ? j
            : (j = b("UFI2TypingIndicatorImpl_feedback.graphql")),
          a
        ),
        u = d("RelayHooks").useRelayEnvironment(),
        v = o(
          function () {
            return s(t);
          },
          [t]
        );
      n(
        function () {
          k(function (a) {
            return babelHelpers["extends"]({}, a, {
              isTyping: Boolean(v),
              label: v != null ? v : a.label,
            });
          });
        },
        [v]
      );
      var w = o(function () {
        return c("debounceAcrossTransitions")(function () {
          return k(function (a) {
            return babelHelpers["extends"]({}, a, { isTyping: !1 });
          });
        }, r);
      }, []);
      n(
        function () {
          i === !0 && w();
          return function () {
            return w.reset();
          };
        },
        [w, i]
      );
      f = m(
        function () {
          var a = t.id,
            b = t.subscription_target_id;
          if (a == null || b == null) return null;
          var c = !1,
            d = function () {};
          b = {
            dispose: function () {
              (c = !0), d(), w.reset();
            },
          };
          q.onReady(function (b) {
            if (!c) {
              b = b.subscribe(u, a, {
                onNext: function () {
                  w();
                },
              });
              d = b.dispose;
            }
          });
          return b;
        },
        [w, t, u]
      );
      e = m(function () {
        k(function (a) {
          return babelHelpers["extends"]({}, a, { isVisible: !1 });
        });
      }, []);
      a = m(function () {
        k(function (a) {
          return babelHelpers["extends"]({}, a, { isVisible: !0 });
        });
      }, []);
      e = c("useVisibilityObserver")({ onHidden: e, onVisible: a });
      return l.jsx(c("UFI2RealtimeContainer.react"), {
        subscribe: f,
        children: l.jsx("div", {
          className: "_3bem",
          ref: e,
          children: l.jsxs("div", {
            className:
              (h ? "_1kyy" : "") + " _3bep" + (i === !0 ? " __f9" : ""),
            children: [
              l.jsx(c("MercuryTypingAnimation_DEPRECATED.react"), {
                className: "__fa",
              }),
              l.jsx("div", { className: "__fb", children: g }),
            ],
          }),
        }),
      });
    }
    t.displayName = t.name + " [from " + f.id + "]";
    function a(a) {
      a = a.feedback;
      a = d("RelayHooks").useFragment(
        k !== void 0 ? k : (k = b("UFI2TypingIndicator_feedback.graphql")),
        a
      );
      return a.is_eligible_for_real_time_updates === !1 || c("gkx")("1352841")
        ? null
        : l.jsx(t, { feedback: a });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "UFI2ViewOptionsSelectorImpl.react",
  ["cx", "PopoverMenu.react", "ReactXUIMenu", "joinClasses", "react"],
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
        var a = this.props,
          b = a.onChange,
          d = a.alignh,
          e = a.menuClassName,
          f = a.selectorOptions,
          g = a.selectedOption,
          h = a.children;
        a = a.menuRef;
        e = i.jsx(c("ReactXUIMenu").SelectableMenu, {
          className: c("joinClasses")(e, "_21ii"),
          "data-testid": void 0,
          onItemClick: function (a, c) {
            b(c.item.getValue());
          },
          children: f.map(function (a) {
            return i.jsx(
              c("ReactXUIMenu").SelectableItem,
              {
                label: a.title,
                selected: g === a,
                value: a.value,
                children: i.jsxs("div", {
                  className: "_1ojq",
                  "data-ordering": a.value,
                  "data-testid": void 0,
                  children: [
                    i.jsx("div", { className: "_1ojr", children: a.title }),
                    i.jsx("div", {
                      className: "_1ojv",
                      children: a.description,
                    }),
                  ],
                }),
              },
              a.value
            );
          }),
        });
        return i.jsx(c("PopoverMenu.react"), {
          alignh: d,
          alignv: "baseline",
          className: "_21iq",
          menu: e,
          ref: a,
          children: h,
        });
      };
      return b;
    })(i.PureComponent);
    a.defaultProps = { alignh: "right" };
    g["default"] = a;
  },
  98
);
__d(
  "UFI2TypingSubscription",
  ["RelayModern", "UFI2TypingSubscription.graphql"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h !== void 0 ? h : (h = b("UFI2TypingSubscription.graphql"));
    function a(a, b, c) {
      return d("RelayModern").requestSubscription(a, {
        onNext: c && c.onNext,
        subscription: i,
        variables: { input: { feedback_id: b } },
      });
    }
    g.subscribe = a;
  },
  98
);
__d(
  "LiveVideoInteractiveAlertSidePaneView.react",
  ["Arbiter", "JSResource", "lazyLoadComponent", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useEffect,
      j = b.useState,
      k = c("lazyLoadComponent")(
        c("JSResource")("IdentityBadgeEarnedAlertView.react").__setRef(
          "LiveVideoInteractiveAlertSidePaneView.react"
        )
      );
    function a(a) {
      var b = j(null),
        d = b[0],
        e = b[1];
      i(function () {
        var a = c("Arbiter").subscribe(
          "LiveVideoInteractiveAlert/sidePaneAlertReceived",
          function (a, b) {
            return e(b);
          }
        );
        return function () {
          return a && a.unsubscribe();
        };
      });
      if (d === null) return null;
      switch (d.type) {
        case "IDENTITY_BADGE_EARNED":
          return h.jsx(h.Suspense, {
            fallback: h.jsx("span", {}),
            children: h.jsx(k, {
              badgeName: "Familiar Face",
              badgeType: "frequent_watcher",
              videoID: a.videoID,
              onDismiss: function () {
                return e(null);
              },
            }),
          });
        default:
          return null;
      }
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "TahoeActionTypes",
  ["keyMirror"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("keyMirror")({ SET_MC: null, EXIT: null, SET_UFI_INSTANCE_ID: null });
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "TahoeCommentComposer",
  ["csx", "Arbiter", "DOM", "Run", "SubscriptionsHandler"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    function a(a) {
      var b = new (c("SubscriptionsHandler"))();
      b.addSubscriptions(
        c("Arbiter").subscribe("TahoeView/selectCommentTab", function () {
          var b = c("DOM").scry(a.commentComposer, "._7ra0 ._65td"),
            d = c("DOM").scry(a.commentComposer, "._7ra0 ._5rpu");
          (d == null ? void 0 : d[0])
            ? d[0].focus()
            : (b == null ? void 0 : b[0]) && b[0].focus();
        })
      );
      d("Run").onLeave(function () {
        b.release();
      });
    }
    g.init = a;
  },
  98
);
__d(
  "TahoeConstants",
  ["CurrentUser"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = 640;
    b = 360;
    d = 1e3;
    e = 160;
    f = 400;
    var h = c("CurrentUser").isLoggedIn() ? 49 : 0;
    c = c("CurrentUser").isWorkUser() ? "Workplace" : "Facebook";
    var i = "video-up-next-";
    g.MIN_PLAYER_WIDTH = a;
    g.MIN_PLAYER_HEIGHT = b;
    g.MAX_PLAYER_HEIGHT = d;
    g.MIN_BOTTOM_PANE_HEIGHT = e;
    g.SIDE_PANE_WIDTH = f;
    g.BLUE_BAR_HEIGHT = h;
    g.DEFAULT_BROWSER_TITLE = c;
    g.UP_NEXT_UNIT_ID_PREFIX = i;
  },
  98
);
__d(
  "TahoeCopyrightMessage.react",
  [
    "cx",
    "fbt",
    "ix",
    "Image.react",
    "SubscriptionsHandler",
    "XUICloseButton.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i, j) {
    "use strict";
    var k = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
          e[f] = arguments[f];
        return (
          ((b = c = a.call.apply(a, [this].concat(e)) || this),
          (c.state = {
            hasCopyrightAction: c.props.videoController.isAudioBlocked(),
          }),
          (c.$2 = function () {
            c.setState({ hasCopyrightAction: !1 });
          }),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      var d = b.prototype;
      d.componentDidMount = function () {
        var a = this;
        this.$1 = new (c("SubscriptionsHandler"))();
        this.$1.addSubscriptions(
          this.props.videoController.addListener("blockVideo", function () {
            a.setState({ hasCopyrightAction: !1 });
          }),
          this.props.videoController.addListener("blockAudio", function () {
            a.setState({ hasCopyrightAction: !0 });
          }),
          this.props.videoController.addListener("unblockAudio", function () {
            a.setState({ hasCopyrightAction: !1 });
          })
        );
      };
      d.componentWillUnmount = function () {
        this.$1.release();
      };
      d.render = function () {
        return !this.state.hasCopyrightAction
          ? null
          : k.jsxs("div", {
              className: "_6ukn",
              children: [
                k.jsx(c("Image.react"), { src: j("519615") }),
                k.jsx("div", {
                  className: "_6uko",
                  children: this.props.videoController.isBroadcaster()
                    ? i._(
                        "Votre vid\u00e9o peut \u00eatre mise en sourdine dans certains pays pendant la lecture de cette chanson."
                      )
                    : i._(
                        "L\u2019audio de cette vid\u00e9o est d\u00e9sactiv\u00e9 car il contient de la musique qui ne peut pas \u00eatre jou\u00e9e dans le pays o\u00f9 vous vous situez."
                      ),
                }),
                k.jsx(c("XUICloseButton.react"), {
                  className: "_6ujz",
                  shade: "light",
                  tooltip: "Close",
                  onClick: this.$2,
                }),
              ],
            });
      };
      return b;
    })(k.Component);
    g["default"] = a;
  },
  98
);
__d(
  "TahoeDispatcher",
  ["ExplicitRegistrationReactDispatcher"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b) {
        b = a.call(this, b) || this;
        b.dispatch = b.dispatch.bind(babelHelpers.assertThisInitialized(b));
        return b;
      }
      return b;
    })(c("ExplicitRegistrationReactDispatcher"));
    b = new a({ strict: !0 });
    g["default"] = b;
  },
  98
);
__d(
  "TahoeMainPlayerViewportTracking",
  ["csx", "StreamViewportTracking"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = 25,
      j = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.apply(this, arguments) || this;
        }
        var c = a.prototype;
        c.getTimetrackingDataToLog = function (a) {
          a = b.prototype.getTimetrackingDataToLog.call(this, a);
          a.ft.src = i;
          return a;
        };
        return a;
      })(c("StreamViewportTracking"));
    function a(a, b, d) {
      b = new j(c("StreamViewportTracking").getBehavior(a, b, "._5-yb", d));
      b.init(a);
      return b;
    }
    g.setup = a;
  },
  98
);
__d(
  "TahoeUpNextUnitPlaceholder.react",
  ["cx", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a() {
      return i.jsxs("div", {
        children: [
          i.jsx("div", { className: "_27do" }),
          i.jsx("div", { className: "_27dr" }),
          i.jsx("div", { className: "_27em" }),
          i.jsx("div", { className: "_27en" }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "TahoeSidePanePlaceholder.react",
  [
    "cx",
    "Layout.react",
    "TahoeUpNextUnitPlaceholder.react",
    "TahoeV2Config",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    var i = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var d = b.prototype;
      d.render = function () {
        return c("TahoeV2Config").showTahoe2UI
          ? i.jsx("div", {
              className: "_wxj _6j4x",
              children: i.jsxs("div", {
                className: "_6j4y",
                children: [
                  i.jsx("div", { className: "_6j4z _6j4-" }),
                  i.jsx("div", { className: "_6j4z _6j4_" }),
                  i.jsx("div", { className: "_6j4z _6j50" }),
                  i.jsx("div", { className: "_6j4z _6j54" }),
                  i.jsx("div", {
                    className: "_6j55",
                    children: i.jsxs(c("Layout.react"), {
                      children: [
                        i.jsx(c("Layout.react").Column, {
                          className: "_3-90",
                          children: i.jsx("div", { className: "_6j56" }),
                        }),
                        i.jsx(c("Layout.react").FillColumn, {
                          children: i.jsx("div", { className: "_6j57" }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            })
          : i.jsxs("div", {
              className: "_wxj _1-z7",
              children: [
                i.jsx("div", { className: "_1kna" }),
                i.jsx("div", { className: "_1knc" }),
                i.jsx("div", { className: "_1knd" }),
                i.jsx("div", { className: "_1kne" }),
                i.jsx("div", { className: "_1knf" }),
                i.jsx("div", { className: "_1kng" }),
                i.jsx(c("TahoeUpNextUnitPlaceholder.react"), {}),
              ],
            });
      };
      return b;
    })(i.Component);
    g["default"] = a;
  },
  98
);
__d(
  "TahoeUpNextViewportTracking",
  ["csx", "StreamViewportTracking"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = "tahoe_up_next_videos",
      j = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          return b.apply(this, arguments) || this;
        }
        var c = a.prototype;
        c.getTimetrackingDataToLog = function (a) {
          a = b.prototype.getTimetrackingDataToLog.call(this, a);
          a.ft.tracking_source = i;
          return a;
        };
        return a;
      })(c("StreamViewportTracking"));
    function a(a, b, d) {
      b = new j(c("StreamViewportTracking").getBehavior(a, b, "._bne", d));
      b.init(a);
      return b;
    }
    g.setup = a;
  },
  98
);
__d(
  "TahoeWatchLogo.react",
  [
    "fbt",
    "Image.react",
    "Link.react",
    "TetraText.react",
    "URI",
    "VideoHomeTypedLiteLogger",
    "XVideoHomeFeedController",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = d("react").useCallback;
    function a(a) {
      var b = a.paddingBottom,
        d = a.paddingTop;
      a = a.clickable;
      a = a === void 0 ? !1 : a;
      var e = i.jsxs(i.Fragment, {
          children: [
            i.jsx("div", {
              className: "x78zum5 x16ydxro x1db2dqx",
              children: i.jsx(c("Image.react"), {
                src: "/images/litestand/bookmarks/sidebar/icons/mobile/icon-watch-tv.png",
              }),
            }),
            i.jsx(c("TetraText.react"), {
              type: "headlineEmphasized2",
              children: h._("Vid\u00e9o"),
            }),
          ],
        }),
        f = j(function () {
          c("VideoHomeTypedLiteLogger").log({
            event: "click",
            click_target: "tahoe_watch_logo",
          }),
            c("URI").go(
              c("XVideoHomeFeedController").getURIBuilder().getURI(),
              !0
            );
        }, []);
      return a
        ? i.jsx(c("Link.react"), {
            className:
              "x6s0dn4 x78zum5 x1603h9y x117nqv4 xzl6hoh xcicffo x1tpqehw x1wsuqlk x1lku1pv",
            style: { paddingBottom: b, paddingTop: d },
            onClick: f,
            children: e,
          })
        : i.jsx("div", {
            className:
              "x6s0dn4 x78zum5 x1603h9y x117nqv4 xzl6hoh xcicffo x1tpqehw x1wsuqlk",
            style: { paddingBottom: b, paddingTop: d },
            children: e,
          });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "TahoeUpNextWatchEntryPoint.react",
  [
    "cx",
    "fbt",
    "TahoeWatchLogo.react",
    "TetraButton.react",
    "VideoHomeTypedLiteLogger",
    "XVideoHomeFeedController",
    "react",
    "useFullViewImpression",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = d("react").useCallback;
    function a(a) {
      a.sidepaneElement;
      a = k(function (a) {
        a.currentTime,
          c("VideoHomeTypedLiteLogger").log({
            event: "tahoe_up_next_video_watch_entry_point_impression",
          });
      }, []);
      a = c("useFullViewImpression")({ onFullViewStart: a });
      var b = k(function () {
        c("VideoHomeTypedLiteLogger").log({
          event: "click",
          click_target: "tahoe_up_next_video_watch_entry_point",
        });
      }, []);
      return j.jsxs("div", {
        className: "_8c-h",
        ref: a,
        children: [
          j.jsx("div", {
            className: "_8c-i",
            children: i._("Plus de vid\u00e9os sur Watch"),
          }),
          j.jsx(c("TahoeWatchLogo.react"), { paddingBottom: 6, paddingTop: 6 }),
          j.jsx(c("TetraButton.react"), {
            label: i._("Ouvrir Watch"),
            onPress: b,
            linkProps: {
              url: c("XVideoHomeFeedController")
                .getURIBuilder()
                .getURI()
                .toString(),
            },
            size: "medium",
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
  "TahoeVideoStore",
  ["FluxMapStore", "TahoeActionTypes", "TahoeDispatcher", "immutable"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, d;
        for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
          f[g] = arguments[g];
        return (
          ((b = d = a.call.apply(a, [this].concat(f)) || this),
          (d.reduce = function (a, b) {
            switch (b.type) {
              case c("TahoeActionTypes").SET_MC:
                a = a.set("mediaController", b.mediaController);
                break;
              case c("TahoeActionTypes").SET_UFI_INSTANCE_ID:
                a = a.set("ufiInstanceID", b.ufiInstanceID);
                break;
              case c("TahoeActionTypes").EXIT:
                a = c("immutable").Map();
                break;
              default:
                break;
            }
            return a;
          }),
          b) || babelHelpers.assertThisInitialized(d)
        );
      }
      return b;
    })(c("FluxMapStore"));
    a.__moduleID = f.id;
    b = new a(c("TahoeDispatcher"));
    g["default"] = b;
  },
  98
);
__d(
  "VideoInfoBottomPaneShimmer.react",
  [
    "cx",
    "ImageBlock.react",
    "InlineBlock.react",
    "LeftRight.react",
    "joinClasses",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    var i = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var d = b.prototype;
      d.render = function () {
        return i.jsxs("div", {
          className: "_2ve3 _2ve4",
          children: [
            i.jsxs("div", {
              children: [
                i.jsxs(c("LeftRight.react"), {
                  children: [
                    i.jsx(j, { width: 320 }),
                    i.jsxs("span", {
                      children: [i.jsx(l, {}), i.jsx(l, {}), i.jsx(l, {})],
                    }),
                  ],
                }),
                i.jsx(j, { width: 222 }),
                i.jsx("div", {
                  className: "_2vev",
                  children: i.jsxs(c("ImageBlock.react"), {
                    children: [
                      i.jsx("span", { className: "_2vew" }),
                      i.jsx(c("InlineBlock.react"), {
                        alignv: "middle",
                        height: 36,
                        fullWidth: !0,
                        children: i.jsx(m, { width: 90, height: 16 }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
            i.jsxs("div", {
              className: "_2vex",
              children: [
                i.jsx(k, { width: 132 }),
                i.jsx(k, { width: 780 }),
                i.jsx(k, { width: 460 }),
              ],
            }),
          ],
        });
      };
      return b;
    })(i.Component);
    var j = function (a) {
        return i.jsx(m, { width: a.width, height: 16, className: "_2vey" });
      },
      k = function (a) {
        return i.jsx(m, { className: "_2vez", height: 8, width: a.width });
      },
      l = function () {
        return i.jsx(m, {
          width: 60,
          height: 16,
          display: "inline-block",
          className: "_2ve-",
        });
      },
      m = function (a) {
        var b = c("joinClasses")(a.className, "_2ve_");
        return i.jsx("div", {
          className: b,
          style: { width: a.width, height: a.height, display: a.display },
        });
      };
    m.defaultProps = { display: "block" };
    g["default"] = a;
  },
  98
);
__d(
  "VodPncSeeAllReactionsClickFalcoEvent",
  ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("getFalcoLogPolicy_DO_NOT_USE")("1744489");
    b = d("FalcoLoggerInternal").create("vod_pnc_see_all_reactions_click", a);
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "XTahoeAsyncController",
  ["XController"],
  function (a, b, c, d, e, f) {
    e.exports = b("XController").create("/video/tahoe/async/{id}/", {
      privacy_mutation_token: { type: "String" },
      id: { type: "FBID", required: !0 },
      externallogid: { type: "String" },
      sponsoreddata: { type: "String" },
      originalmediaid: { type: "String" },
      preload: { type: "Bool", defaultValue: !1 },
      playerorigin: { type: "Enum", enumType: 1 },
      playersuborigin: { type: "String" },
      videolistid: { type: "String" },
      reactionvideochanneltype: { type: "Enum", enumType: 1 },
      reactionvideochannelsubtype: { type: "String" },
      upstreamplayersource: { type: "Enum", enumType: 1 },
      ispermalink: { type: "Bool", defaultValue: !1 },
      feedtracking: { type: "StringVector", defaultValue: [] },
      storyidentifier: { type: "String" },
      numcopyrightmatchedvideoplayedconsecutively: { type: "Int" },
      comment_id: { type: "Int" },
      reply_comment_id: { type: "Int" },
      payloadtype: { type: "Enum", enumType: 1 },
      tahoeviewhasrendered: { type: "Bool", defaultValue: !1 },
    });
  },
  null
);
__d(
  "XTahoeUpNextAsyncController",
  ["XController"],
  function (a, b, c, d, e, f) {
    e.exports = b("XController").create(
      "/video/tahoe/upnext/async/{media_id}/",
      {
        channel_id: { type: "String" },
        media_id: { type: "FBID", required: !0 },
        viewed_videos: { type: "FBIDSet" },
        caller: { type: "Enum", enumType: 1 },
        chainingindex: { type: "Int" },
        cursor: { type: "String" },
        search_keywords: { type: "String" },
        ispermalink: { type: "Bool", defaultValue: !1 },
      }
    );
  },
  null
);
__d(
  "upNextVideoStateActionTypes",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = "APPEND_TO_BUFFER";
    b = "REMOVE_BUFFER_HEADS";
    c = "RETRIEVE_FROM_BUFFER";
    d = "SET_CHAINING_CURSOR";
    f.APPEND_TO_BUFFER = a;
    f.REMOVE_BUFFER_HEADS = b;
    f.RETRIEVE_FROM_BUFFER = c;
    f.SET_CHAINING_CURSOR = d;
  },
  66
);
__d(
  "upNextVideoStateReducer",
  ["TahoeConstants", "upNextVideoStateActionTypes"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = { upNextVideoBuffer: [], retrievedUnits: [], chainingCursor: null },
      i = 20;
    function a(a, b) {
      a === void 0 && (a = h);
      switch (b.type) {
        case d("upNextVideoStateActionTypes").APPEND_TO_BUFFER:
          var c = b.payload;
          if (Array.isArray(c))
            return {
              upNextVideoBuffer: a.upNextVideoBuffer.concat(c),
              retrievedUnits: a.retrievedUnits,
              chainingCursor: a.chainingCursor,
            };
          else return a;
        case d("upNextVideoStateActionTypes").REMOVE_BUFFER_HEADS:
          c = b.payload;
          if (typeof c === "string") {
            c = d("TahoeConstants").UP_NEXT_UNIT_ID_PREFIX + c;
            while (
              a.upNextVideoBuffer.length > 0 &&
              a.upNextVideoBuffer[0].id !== c
            )
              a.upNextVideoBuffer.shift();
            a.upNextVideoBuffer.length > 0 && a.upNextVideoBuffer.shift();
            return {
              upNextVideoBuffer: a.upNextVideoBuffer,
              retrievedUnits: a.retrievedUnits,
              chainingCursor: a.chainingCursor,
            };
          } else return a;
        case d("upNextVideoStateActionTypes").RETRIEVE_FROM_BUFFER:
          c = b.payload;
          if (typeof c === "number") {
            var e = Math.min(i, a.upNextVideoBuffer.length);
            c = a.upNextVideoBuffer.slice(c, e);
            return {
              upNextVideoBuffer: a.upNextVideoBuffer,
              retrievedUnits: c,
              chainingCursor: a.chainingCursor,
            };
          } else return a;
        case d("upNextVideoStateActionTypes").SET_CHAINING_CURSOR:
          if (typeof b.payload === "string")
            return {
              upNextVideoBuffer: a.upNextVideoBuffer,
              retrievedUnits: a.retrievedUnits,
              chainingCursor: b.payload,
            };
          else return a;
        default:
          return a;
      }
    }
    g["default"] = a;
  },
  98
);
__d(
  "upNextVideoStateStore",
  ["redux", "upNextVideoStateReducer"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("redux").createStore(c("upNextVideoStateReducer"));
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "TahoeVideoView",
  [
    "csx",
    "cx",
    "ActorURI",
    "Arbiter",
    "AsyncRequest",
    "Bootloader",
    "CSS",
    "DOM",
    "DOMQuery",
    "Event",
    "HTML",
    "Keys",
    "LiveVideoInteractiveAlertSidePaneView.react",
    "ReactDOM",
    "ReactRenderer",
    "Run",
    "StreamingReactionsTrayEvents",
    "SubscriptionsHandler",
    "TabBar",
    "Tahoe",
    "TahoeConstants",
    "TahoeCopyrightMessage.react",
    "TahoeMainPlayerViewportTracking",
    "TahoeSidePanePlaceholder.react",
    "TahoeUpNextViewportTracking",
    "TahoeUpNextWatchEntryPoint.react",
    "TahoeV2Config",
    "TahoeVideoStore",
    "TimeSlice",
    "UFISharedDispatcher",
    "URI",
    "VideoInfoBottomPaneShimmer.react",
    "VideoPermalinkURI",
    "VodPncSeeAllReactionsClickFalcoEvent",
    "XTahoeAsyncController",
    "XTahoeUpNextAsyncController",
    "ge",
    "gkx",
    "react",
    "upNextVideoStateStore",
    "uuidv4",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    var j = d("react"),
      k = 4,
      l = c("TahoeV2Config").maximizeEndScreenVideoCount ? 16 : 9,
      m = /^[1-9]\d*$/,
      n = 15,
      o = "tahoe-preloaded-video",
      p = 7,
      q = "video-up-next-",
      r = 4,
      s = 97,
      t = 7;
    a = (function () {
      function a(a, b, e, f) {
        var g = this;
        this.$7 = null;
        this.$19 = !1;
        this.$36 = function () {
          d("CSS").hide(g.$18), g.$6.setFullWidth(!0);
        };
        this.$37 = function () {
          d("CSS").show(g.$18), g.$6.setFullWidth(!1);
        };
        this.$71 = function () {
          g.$10 != null && d("CSS").hide(g.$10);
        };
        this.$6 = a;
        this.$8 = !1;
        this.$14 = this.$6.getID();
        this.$30 = b;
        this.$31 = e;
        this.$29 = this.$6.getVideoListID();
        this.$32 = new Set([this.$14]);
        this.$3 = c("uuidv4")();
        this.$26 = !1;
        this.$27 = [];
        this.$25 = null;
        this.$6.addEvent(
          c("Event").listen(document, "keydown", this.$34.bind(this))
        );
        this.$22 = d("CSS").setClass(c("DOM").create("div"), "_1e8c _2b-0");
        this.$18 = d("CSS").setClass(
          c("DOM").create("div"),
          "_5-lm _3aw0 _6j1g _6j1h"
        );
        this.$5 = d("CSS").setClass(c("DOM").create("div"), "_17am");
        this.$11 = d("CSS").setClass(c("DOM").create("div"), "_76-1");
        this.$15 = d("CSS").setClass(c("DOM").create("div"), "hidden_elem");
        this.$16 = d("TahoeConstants").DEFAULT_BROWSER_TITLE;
        this.$20 = c("DOM").create("div");
        d("ReactDOM").render(
          j.jsx(c("TahoeSidePanePlaceholder.react"), {}),
          this.$18,
          "TahoeVideoView.js"
        );
        d("ReactDOM").render(
          j.jsx(c("LiveVideoInteractiveAlertSidePaneView.react"), {
            videoID: a.getID(),
          }),
          this.$11,
          "TahoeVideoView.js"
        );
        c("TahoeV2Config").showTahoe2UI &&
          ((this.$23 = d("CSS").setClass(c("DOM").create("div"), "_437j")),
          d("CSS").hide(this.$22),
          c("DOM").appendContent(this.$6.getContent(), this.$23),
          d("ReactDOM").render(
            [
              j.jsx(c("VideoInfoBottomPaneShimmer.react"), {}, "shimmer"),
              j.jsx("div", { className: "_3l-q" }, "inner"),
            ],
            this.$23,
            "TahoeVideoView.js"
          ));
        this.$22 && c("DOM").appendContent(this.$6.getContent(), this.$22);
        c("DOM").appendContent(this.$6.getSideContent(), this.$18);
        c("DOM").appendContent(this.$18, this.$5);
        c("DOM").appendContent(this.$18, this.$11);
        c("DOM").appendContent(this.$6.getContent(), this.$15);
        c("DOM").appendContent(this.$6.getContent(), this.$20);
        b = this.$6.getChannelID();
        e = this.$6.getCaller();
        this.$6.getMediaController()
          ? (this.$35(this.$6.getID(), !1, b, e, null, f),
            this.setUpEndScreen(),
            this.setUpUFI(),
            this.setCopyrightMessage())
          : this.updateView(this.$6.getID(), b, e, null, f, !0);
        this.$1 = new (c("SubscriptionsHandler"))();
        this.$1.addSubscriptions(
          c("Arbiter").subscribe("UFIAddComment/focus", function (a, b) {
            a = c("TahoeVideoStore").getState().toObject();
            a = a.ufiInstanceID;
            a === b.instanceid && g.selectCommentTab();
          }),
          c("Arbiter").subscribe("quiet-mode-on", this.$36),
          c("Arbiter").subscribe("quiet-mode-off", this.$37),
          c("Arbiter").subscribe(
            "quick-comments-visible-changed",
            function (a, b) {
              return g.$38(b);
            }
          )
        );
        c("UFISharedDispatcher").register(function (a) {
          a.type === "story_show_comments" && g.selectCommentTab();
        });
        this.$39();
        d("Run").onCleanupOrLeave(this.$6.getContent(), this.$40);
        d("Run").onUnload(this.$40);
      }
      var b = a.prototype;
      b.$40 = function () {
        window.history.replaceState(
          window.history.state,
          "",
          new (c("URI"))(location.href)
            .addQueryData({ redirect: !1 })
            .toString()
        );
      };
      b.$39 = function () {
        window.history.replaceState(
          window.history.state,
          "",
          new (c("URI"))(location.href).removeQueryData(["redirect"]).toString()
        );
      };
      b.$38 = function (a) {
        var b = this.$41();
        if (b == null) return;
        a ? d("CSS").addClass(b, "_4j8y") : d("CSS").removeClass(b, "_4j8y");
      };
      b.setUpUFI = function () {
        var a = this,
          b = this.$6.getMediaController();
        this.$42();
        b &&
          (this.$6.addEvent(
            b.addListener("commercialBreak/hideUFI", function () {
              return a.$43(!0);
            })
          ),
          this.$6.addEvent(
            b.addListener("commercialBreak/showUFI", function () {
              return a.$43(!1);
            })
          ));
      };
      b.$43 = function (a) {
        c("gkx")("678266") || d("CSS").conditionClass(this.$5, "_17an", a),
          this.$22 && d("CSS").conditionClass(this.$22, "_3qt9", a);
      };
      b.setCopyrightMessage = function () {
        if (this.$7) return;
        var a = this.$6.getMediaController();
        a = a;
        if (!a) return;
        var b = c("DOM").create("div", { className: "_6ukq" });
        this.$7 = b;
        c("DOM").appendContent(this.$6.getMediaContent(), b);
        d("ReactDOM").render(
          j.jsx(c("TahoeCopyrightMessage.react"), { videoController: a }),
          b,
          "TahoeVideoView.js"
        );
      };
      b.$44 = function () {
        this.$7 &&
          (d("ReactDOM").unmountComponentAtNode(this.$7, f.id),
          (this.$7 = null));
      };
      b.setUpEndScreen = function () {
        var a = this;
        this.$19 = !1;
        var b = this.$6.getMediaController();
        this.$6.addEvent(b.addListener("stateChange", this.$45.bind(this)));
        if (b.isLiveVideo()) return;
        this.$6.addEvent(
          b.addListener("toggleFullscreen", this.$45.bind(this))
        );
        var c = b;
        if (!c) return;
        c.addListener("updateStatus", function (b) {
          var d = c.getPlaybackDuration();
          b = d - b.position;
          if (b > k) {
            a.$25 && a.$46();
            return;
          }
          b = c.getState();
          if (a.$25 || b === "paused") return;
          a.$47(!1, !0, d > n, p);
        });
      };
      b.$47 = function (a, b, e, f) {
        var g = this;
        if (this.$25) return;
        var h = this.$6.getMediaController(),
          i = h;
        if (!i) return;
        var j = c("DOM").create("div", { className: "_4n-p" });
        h = c("upNextVideoStateStore").getState().upNextVideoBuffer;
        var k = this.$48(h);
        c("Bootloader").loadModules(
          ["TahoeUpNextOverlayAndEndScreen.react"],
          function (h) {
            d("ReactRenderer").constructAndRenderComponent_LEGACY(
              h,
              {
                currentVideoID: g.$6.getID(),
                videoIDs: c("TahoeV2Config").showMoreUpNext
                  ? k
                  : g.$27.slice(0, l),
                shouldShowUpNextOverlay: e && !g.$19,
                countdownTimeoutSec: f,
                vpc: i,
                logEvent: function (a) {
                  g.$6.logEvent(a);
                },
                tahoeController: g.$6,
                hasCustomBackgroundForUpNextOverlay: a,
                isCurrentVideoReplayable: b,
                viewportTrackingConfig: g.$33,
                onRendered: function () {
                  g.$19 = !0;
                },
              },
              j,
              "callsite_a4579934545"
            );
          },
          "TahoeVideoView"
        );
        h = i.getRootNode();
        h = h && h.firstChild;
        h && (h.appendChild(j), (this.$25 = j));
      };
      b.$45 = function () {
        var a = this.$6.getMediaController();
        a = a;
        !a.isLiveVideo()
          ? this.$22 &&
            d("CSS").conditionClass(this.$22, "_65dt", a.isState("finished"))
          : a.isState("finished") && !a.isGaming() && this.$47(!0, !1, !0, p);
      };
      b.$46 = function () {
        var a = this.$25;
        a &&
          (d("ReactDOM").unmountComponentAtNode(a, f.id),
          c("DOM").remove(a),
          (this.$25 = null));
      };
      b.$49 = function () {
        d("CSS").addClass(this.$6.getContent(), "_29du"),
          d("CSS").addClass(this.$18, "_4f4w"),
          this.$23 && d("CSS").addClass(this.$23, "_1udj"),
          this.$22 && c("DOM").empty(this.$22);
      };
      b.$50 = function () {
        var a = this;
        d("CSS").removeClass(this.$6.getContent(), "_29du");
        d("CSS").removeClass(this.$18, "_4f4w");
        this.$23 && d("CSS").removeClass(this.$23, "_1udj");
        var b = d("DOMQuery").find(this.$18, "._3dj6"),
          e = this.$33;
        e &&
          ((this.$28 = d("TahoeUpNextViewportTracking").setup(e, b, s)),
          (this.$24 = d("TahoeUpNextViewportTracking").setup(e, b, r)));
        if (this.$26) {
          b = d("CSS").removeClass(b, "_3dj6");
          e = c("DOM").find(this.$15, "._3dj7");
          c("DOM").setContent(b, e);
          var f = d("DOMQuery").scry(this.$18, "._8fyn");
          if (f.length > 0 && this.$27.length >= t) {
            f = c("DOM").create("div", { className: "_8fym" });
            d("ReactDOM").render(
              j.jsx(c("TahoeUpNextWatchEntryPoint.react"), {
                sidepaneElement: this.$41(),
              }),
              f,
              "TahoeVideoView.js"
            );
            c("DOM").appendContent(b, f);
          }
          this.$26 = !1;
          e.childNodes &&
            e.childNodes[0] &&
            this.$51(
              e.childNodes[0],
              function () {
                c("TimeSlice").guard(
                  a.$52.bind(a),
                  "Tahoe preload next video",
                  { propagationType: c("TimeSlice").PropagationType.ORPHAN }
                )();
              },
              function () {
                return a.selectCommentTab();
              }
            );
        }
        c("TahoeV2Config").showTahoe2UI && this.$6.resizeMedia();
      };
      b.$34 = function (a) {
        a.keyCode === c("Keys").ESC &&
          !a.cancelBubble &&
          !a.defaultPrevented &&
          !this.$6.getIsPermalink() &&
          (this.$6.logEvent("exit_with_esc"), this.$6.onExit());
      };
      b.$53 = function (a, b) {
        c("TahoeV2Config").showTahoe2UI && (a && this.$54(), b && this.$55());
      };
      b.$56 = function (b, e, f, g) {
        if (!c("TahoeV2Config").showMoreUpNext) {
          b = this.$57(b, f, g);
          b && b.send();
        }
        f = d("DOMQuery").scry(this.$6.getContent(), "._1c_u");
        f[0] && c("DOM").replace(f[0], d("DOMQuery").scry(e, "._5-yb")[0]);
        g = d("DOMQuery").scry(e, "._1w6j");
        b = d("DOMQuery").scry(e, "._3l-q");
        this.$53(g[0], b[0]);
        this.$22 && g[0] && c("DOM").setContent(this.$22, g[0]);
        this.$23 && b[0] && c("DOM").setContent(this.$23, b[0]);
        f = this.$41();
        f
          ? c("DOM").replace(f, d("DOMQuery").find(e, "._1rgu"))
          : c("DOM").appendContent(this.$18, d("DOMQuery").find(e, "._1rgu"));
        document.title = this.$16;
        a.registerPendingController(this.$17);
        this.$50();
        g = c("Tahoe").get();
        g && g.emit("insertPreloadedElements");
      };
      b.$35 = function (a, b, d, e, f, g, h) {
        g === void 0 && (g = null);
        h === void 0 && (h = !1);
        this.$2 = null;
        f = this.$58(a, b, f, h);
        g &&
          (g.commentID !== "0" && f.setInt("comment_id", g.commentID),
          g.replyCommentID !== "0" &&
            f.setInt("reply_comment_id", g.replyCommentID));
        h = this.$6.getStoryIdentifier();
        h && f.setString("storyidentifier", h);
        b && this.$59(this.$60(f.setEnum("payloadtype", "primary")));
        this.$61(this.$60(f.setEnum("payloadtype", "secondary")), b);
        if (!c("TahoeV2Config").showMoreUpNext) {
          g = this.$57(a, d, e);
          g && g.send();
        }
        this.$49();
      };
      b.$62 = function (a) {
        a.disablePreload && (this.$9 = !0);
        a.viewportTrackingConfig && (this.$33 = a.viewportTrackingConfig);
        this.$8 = !!a.hasNearlyCompleteLicensedMusicTag;
        document.title =
          a.videoTitle || d("TahoeConstants").DEFAULT_BROWSER_TITLE;
        a = this.$6.getContent();
        var b = this.$33;
        if (a && b) {
          var c = d("DOMQuery").scry(a, "._5-yb")[0];
          c && (this.$13 = d("TahoeMainPlayerViewportTracking").setup(b, a, s));
        }
        this.$50();
      };
      b.$63 = function (a, b, e) {
        e === void 0 && (e = null);
        if (!a) return;
        var f = d("DOMQuery").scry(this.$6.getContent(), "._1c_u");
        f[0] && (c("DOM").replace(f[0], a), this.$64(this.$6.getContent(), e));
        this.$6.setAutoplayAllowed(b);
      };
      b.$65 = function (a, b, d, e) {
        if (e) {
          d && c("DOM").setContent(this.$22, d);
          if (a) {
            e = this.$41();
            e ? c("DOM").replace(e, a) : c("DOM").appendContent(this.$18, a);
          }
        } else
          d && c("DOM").appendContent(this.$22, d),
            a && c("DOM").appendContent(this.$18, a);
        b && c("DOM").replace(this.$23.lastChild, b);
      };
      b.$41 = function () {
        return d("DOMQuery").scry(this.$18, "._1rgu")[0];
      };
      b.$58 = function (a, b, d, e) {
        e === void 0 && (e = !1);
        var f = [JSON.stringify(this.$6.getFeedTracking())];
        e = e || !b ? f : this.$66(a);
        return c("XTahoeAsyncController")
          .getURIBuilder()
          .setFBID("id", a)
          .setString("originalmediaid", this.$14)
          .setEnum("playerorigin", this.$30)
          .setString("playersuborigin", this.$31)
          .setString("videolistid", this.$29)
          .setString("sponsoreddata", d)
          .setString("externallogid", this.$6.getExternalLogID())
          .setEnum(
            "reactionvideochanneltype",
            this.$6.getReactionVideoChannelType()
          )
          .setString(
            "reactionvideochannelsubtype",
            this.$6.getReactionVideoChannelSubtype()
          )
          .setEnum("upstreamplayersource", this.$6.getUpstreamPlayerSource())
          .setBool("ispermalink", this.$6.getIsPermalink())
          .setStringVector("feedtracking", e)
          .setInt(
            "numcopyrightmatchedvideoplayedconsecutively",
            this.$6.getNumCopyrightMatchedVideosPlayedConsecutively()
          );
      };
      b.$60 = function (a) {
        var b = this.$6.getUserID();
        if (b) return d("ActorURI").create(a.getURI(), b);
        else return a.getURI();
      };
      b.$54 = function () {
        d("CSS").show(this.$22),
          d("CSS").hide(this.$23),
          d("CSS").removeClass(this.$6.getContent(), "_-pb");
      };
      b.$55 = function () {
        d("CSS").show(this.$23),
          d("CSS").hide(this.$22),
          d("CSS").addClass(this.$6.getContent(), "_-pb");
      };
      b.$51 = function (a, b, c) {
        a = d("DOMQuery").scry(a, "a")[0];
        a ? ((this.$2 = a.getAttribute("href")), b && b()) : c && c();
      };
      b.setUpNextChainingInfoFromReactElement = function (a) {
        var b = this;
        this.$51(
          a,
          function () {
            c("TimeSlice").guard(b.$52.bind(b), "Tahoe preload next video", {
              propagationType: c("TimeSlice").PropagationType.ORPHAN,
            })();
          },
          function () {
            return b.selectCommentTab();
          }
        );
      };
      b.$57 = function (a, b, e) {
        var f = this,
          g = c("ge")(q + a);
        if (g) {
          var h = g.parentNode,
            i = Array.from(h.children);
          i.some(function (b) {
            if (b.id !== q + a) {
              c("DOM").remove(b);
              return !1;
            } else return !0;
          });
          c("DOM").remove(h.firstChild);
          c("DOM").appendContent(this.$15, h);
          if (h.children.length >= 10) {
            this.$67(Array.from(h.children));
            this.$26 = !0;
            return null;
          }
        } else
          !g &&
            a !== this.$14 &&
            (this.$6.resetChannelData(),
            (this.$4 = null),
            (b = null),
            (e = null));
        i = c("XTahoeUpNextAsyncController")
          .getURIBuilder()
          .setFBID("media_id", a)
          .setFBIDSet("viewed_videos", Array.from(this.$32))
          .setString("channel_id", b)
          .setEnum("caller", e)
          .setString("cursor", this.$4)
          .setString(
            "search_keywords",
            this.$6.getSearchKeywordsForVideoChaining()
          )
          .setBool("ispermalink", this.$6.getIsPermalink());
        return new (c("AsyncRequest"))(i.getURI()).setHandler(function (a) {
          a = a.getPayload();
          f.$4 = a.chainingCursor;
          a.viewportTrackingConfig && (f.$33 = a.viewportTrackingConfig);
          a = c("HTML").replaceJSONWrapper(a.upNextUnit.markup);
          f.$26 = !0;
          var b = d("DOMQuery").scry(f.$18, "._3dj6"),
            e = d("DOMQuery").scry(f.$15, "._3dj7");
          if (e[0]) {
            c("DOM").appendContent(f.$15, a);
            e = d("DOMQuery").scry(f.$15, "._3dj7");
            var g = Array.from(e[1].children);
            g.forEach(function (a) {
              c("DOM").appendContent(e[0], a);
            });
            c("DOM").remove(e[1]);
            a = e[0];
            var h = {};
            Array.from(a.children).forEach(function (a) {
              h[a.id] ? c("DOM").remove(a) : (h[a.id] = !0);
            });
            c("DOM").remove(e[0]);
          }
          g = null;
          if (b[0]) {
            b = d("CSS").removeClass(b[0], "_3dj6");
            c("DOM").setContent(b, a);
            var i = d("DOMQuery").scry(f.$18, "._8fyn"),
              k = d("DOMQuery").scry(f.$18, "._bne");
            if (i.length > 0 && k.length > t) {
              i = c("DOM").create("div", { className: "_8fym" });
              d("ReactDOM").render(
                j.jsx(c("TahoeUpNextWatchEntryPoint.react"), {
                  sidepaneElement: f.$41(),
                }),
                i,
                "TahoeVideoView.js"
              );
              c("DOM").appendContent(b, i);
            }
            f.$26 = !1;
            g = b;
          } else c("DOM").appendContent(f.$15, a), (g = f.$15);
          e = d("DOMQuery").scry(g, "._3dj7");
          e[0] && f.$67(Array.from(e[0].children));
          k = d("DOMQuery").scry(f.$18, "._bne");
          k.childNodes &&
            k.childNodes[0] &&
            f.$51(
              k.childNodes[0],
              function () {
                c("TimeSlice").guard(
                  f.$52.bind(f),
                  "Tahoe preload next video",
                  { propagationType: c("TimeSlice").PropagationType.ORPHAN }
                )();
              },
              function () {
                return f.selectCommentTab();
              }
            );
        });
      };
      b.$59 = function (a) {
        var b = this;
        new (c("AsyncRequest"))(a)
          .setHandler(function (a) {
            a = a.getPayload();
            var d = a.video,
              e = a.autoplayAllowed;
            a = a.trackingData;
            b.$63(c("HTML").replaceJSONWrapper(d && d.markup), e, a);
          })
          .send();
      };
      b.$61 = function (a, b) {
        var d = this;
        new (c("AsyncRequest"))(a)
          .setHandler(function (a) {
            a = a.getPayload();
            var e = a.ufiTray,
              f = a.infoBottomPane,
              g = a.sidePane;
            d.$53(e, f);
            d.$65(
              c("HTML").replaceJSONWrapper(g && g.markup),
              c("HTML").replaceJSONWrapper(f && f.markup),
              c("HTML").replaceJSONWrapper(e && e.markup),
              b
            );
            d.$62(a);
          })
          .send();
      };
      b.$48 = function (a) {
        var b = this;
        return a
          .map(function (a) {
            return a.id && a.id.substring(q.length);
          })
          .filter(function (a) {
            return b.$68(a);
          });
      };
      b.$68 = function (a) {
        return !a ? !1 : m.test(a);
      };
      b.$42 = function () {
        var a = this.$6.getMediaController();
        if (a == null || !a.isLiveVideo()) return;
        a = d("DOMQuery").scry(this.$6.getContent(), "._170l");
        if (!a.length) return;
        this.$12 && c("DOM").remove(this.$12);
        if (!this.$27 || this.$27.length === 0) return;
        return;
      };
      b.$67 = function (a) {
        (this.$27 = this.$48(a)), this.$42();
      };
      b.getCurrentVideoHasCopyrightMusicMatch = function () {
        return this.$8;
      };
      b.setUpNextVideoIDs = function (a) {
        this.$27 = this.$48(a);
      };
      b.getUpNextVideoIDs = function () {
        return this.$27;
      };
      b.$52 = function () {
        var a = this;
        if (this.$9) return;
        var b = new (c("URI"))(this.$2),
          e = d("VideoPermalinkURI").parse(b);
        if (e === null) return;
        var f = e.video_id;
        if (!f) return;
        e = b.getQueryData().sp;
        b = this.$58(f, !0, e)
          .setEnum("payloadtype", "all")
          .setBool("preload", !0);
        e = new (c("AsyncRequest"))(b.getURI()).setHandler(function (b) {
          b = b.getPayload();
          var e = c("DOM").create("div", { id: "preload-" + f, class: o });
          c("DOM").appendContent(
            e,
            c("HTML").replaceJSONWrapper(b.video.markup)
          );
          b.ufiTray &&
            c("DOM").appendContent(
              e,
              c("HTML").replaceJSONWrapper(b.ufiTray.markup)
            );
          b.infoBottomPane &&
            c("DOM").appendContent(
              e,
              c("HTML").replaceJSONWrapper(b.infoBottomPane.markup)
            );
          c("DOM").appendContent(
            e,
            c("HTML").replaceJSONWrapper(b.sidePane.markup)
          );
          c("DOM").appendContent(a.$15, e);
          a.$64(e, b.trackingData);
          e = typeof b.autoplayAllowed === "boolean" ? b.autoplayAllowed : !0;
          a.$16 = b.videoTitle || d("TahoeConstants").DEFAULT_BROWSER_TITLE;
          a.$6.setAutoplayAllowed(e);
          a.$8 = !!b.hasNearlyCompleteLicensedMusicTag;
        });
        e.send();
      };
      b.$66 = function (a) {
        var b = null;
        a = c("ge")(q + a);
        a &&
          a.getAttribute("data-ft") &&
          (b = ['{"ft":' + a.getAttribute("data-ft") + "}"]);
        return b;
      };
      b.selectAddComment = function () {
        var a = d("DOMQuery").scry(this.$18, ".UFIAddCommentInput");
        a[0] && a[0].click();
        this.selectCommentTab();
      };
      b.selectCommentTab = function () {
        var a = this.$41();
        a &&
          (d("CSS").addClass(a, "_7r9y"),
          d("CSS").removeClass(a, "_601i"),
          d("CSS").removeClass(a, "_6yny"),
          c("Arbiter").inform("TahoeView/selectCommentTab"));
      };
      b.selectUpNextTab = function () {
        var a = this.$41();
        a &&
          (d("CSS").addClass(a, "_601i"),
          d("CSS").removeClass(a, "_7r9y"),
          d("CSS").removeClass(a, "_6yny"));
      };
      b.selectFriendPresenceTab = function () {
        var a = this.$41();
        a && (d("CSS").addClass(a, "_6yny"), d("CSS").removeClass(a, "_601i"));
      };
      b.setCommentOverlayActive = function (a) {
        var b = this.$41();
        if (!b) return;
        a ? d("CSS").addClass(b, "_2l-1") : d("CSS").removeClass(b, "_2l-1");
      };
      b.updateView = function (a, b, c, e, f, g) {
        e === void 0 && (e = null);
        f === void 0 && (f = null);
        g === void 0 && (g = !1);
        this.$46();
        this.$32.add(a);
        var h = d("DOMQuery").scry(this.$15, "#preload-" + a);
        h[0] && this.$17
          ? (this.$56(a, h[0], b, c), this.$69())
          : (this.$69(),
            this.$28 && this.$28.cleanup(),
            this.$24 && this.$24.cleanup(),
            this.$13 && this.$13.cleanup(),
            this.$35(a, !0, b, c, e, f, g));
        this.$43(!1);
      };
      b.$69 = function () {
        this.$17 = null;
        var a = d("DOMQuery").scry(this.$15, "." + o);
        Array.from(a).forEach(function (a) {
          c("DOM").remove(a);
        });
      };
      b.toggleNativeSupportFlyout = function () {
        var a = d("DOMQuery").scry(this.$18, ".UFICommentSupportButton");
        a.length > 0 &&
          (a[0].dispatchEvent(new MouseEvent("mousedown", { bubbles: !0 })),
          a[0].dispatchEvent(new MouseEvent("mouseup", { bubbles: !0 })),
          a[0].click());
      };
      b.loadStickerGallery = function (a) {
        var b = this;
        c("Bootloader").loadModules(
          ["TahoeStickerGallery"],
          function (c) {
            c.loadStickerGallery(b.$20, a);
          },
          "TahoeVideoView"
        );
      };
      b.$70 = function (a, b) {
        var e = this;
        this.$10 == null
          ? ((this.$10 = c("DOM").create("div")),
            c("DOM").prependContent(this.$18, this.$10),
            c("Bootloader").loadModules(
              ["TahoeWoodhengeSignupViewRenderer"],
              function (c) {
                c.render(a, b, e.$10, e.$71);
              },
              "TahoeVideoView"
            ))
          : this.$10 != null && d("CSS").show(this.$10);
      };
      b.$64 = function (a, b) {
        a = d("DOMQuery").scry(a, "._1c_u");
        a.length > 0 && b != null && a[0].setAttribute("data-ft", b);
      };
      b.getBottomTrayHeight = function () {
        return this.isRenderingBottomInfoPane()
          ? this.$23 && this.$23.clientHeight
          : this.$22.clientHeight;
      };
      b.isRenderingBottomInfoPane = function () {
        return !d("CSS").shown(this.$22);
      };
      b.getLiveAlertSidePaneOverlayNode = function () {
        return this.$11;
      };
      b.onExit = function () {
        this.$1.release(), this.$46(), this.$44();
      };
      a.registerCommentLink = function (a) {
        var b = c("Tahoe").get();
        b &&
          b.addEvent(
            c("Event").listen(a, "click", function () {
              c("Arbiter").inform(
                d("StreamingReactionsTrayEvents").EnableReactions
              ),
                c("Arbiter").inform("quiet-mode-off"),
                b.getView().selectAddComment();
            })
          );
      };
      a.registerBecomeSupporterLink = function (b, d) {
        var e = c("Tahoe").get();
        if (e == null) return;
        var f = e.getView();
        if (!(f instanceof a)) return;
        var g = e.getMediaController().getMediaID();
        e.addEvent(
          c("Event").listen(b, "click", function () {
            f.$70(d, g);
          })
        );
      };
      a.registerPendingController = function (a) {
        var b = c("Tahoe").get();
        b &&
          a &&
          (b.updateMedia(a),
          b.emit("TahoeController/mediaControllerRegistered"));
      };
      a.registerPreloadController = function (a) {
        var b = c("Tahoe").get();
        b && (b.getView().$17 = a);
      };
      a.registerSidepaneTabbar = function (b) {
        var d = c("Tahoe").get();
        if (d != null) {
          var e = d.getView();
          e instanceof a &&
            b.subscribe(c("TabBar").TAB_CLICK, function (a, b) {
              switch (b) {
                case "up-next":
                  e.selectUpNextTab();
                  break;
                case "comments":
                  e.selectCommentTab();
              }
            });
        }
      };
      a.registerSupportLink = function (b) {
        var d = c("Tahoe").get();
        if (d == null) return;
        var e = d.getView();
        if (!(e instanceof a)) return;
        e.$21 = b;
        d.addEvent(
          c("Event").listen(b, "click", function () {
            e.toggleNativeSupportFlyout();
          })
        );
      };
      a.registerShowCommentsTabLink = function (a) {
        var b = c("Tahoe").get(),
          d = b && b.getView();
        b &&
          d &&
          b.addEvent(
            c("Event").listen(a, "click", function () {
              return d.selectCommentTab();
            })
          );
      };
      a.registerShowMainTabLink = function (a) {
        var b = c("Tahoe").get(),
          d = b && b.getView();
        b &&
          d &&
          b.addEvent(
            c("Event").listen(a, "click", function () {
              return d.selectUpNextTab();
            })
          );
      };
      a.registerShowFriendPresenceTabLink = function (a, b, d, e, f, g) {
        var h = c("Tahoe").get(),
          i = h && h.getView(),
          j = function () {
            i && i.selectFriendPresenceTab(),
              c("VodPncSeeAllReactionsClickFalcoEvent").log(function () {
                return {
                  video_id: b,
                  number_of_friends: d,
                  friend_presence_type_first: e,
                  friend_presence_type_second: f,
                  friend_presence_type_third: g,
                };
              });
          };
        h && i && h.addEvent(c("Event").listen(a, "click", j));
      };
      a.loadView = function (b, c, d, e) {
        return new a(b, c, d, e);
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "VideoChainingToken",
  ["Base64"],
  function (a, b, c, d, e, f, g) {
    a = (function () {
      function a(a) {
        this.$1 = a;
      }
      a.encode = function (b) {
        return new a(c("Base64").encode(JSON.stringify(b)));
      };
      var b = a.prototype;
      b.decode = function () {
        return JSON.parse(c("Base64").decode(this.$1));
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
