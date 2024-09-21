/*FB_PKG_DELIM*/

__d(
  "XChatPluginProfilePlusVoiceSwitchPopupController",
  ["XController"],
  function (a, b, c, d, e, f) {
    e.exports = b("XController").create("/plugins/chat/voice_switch/", {});
  },
  null
);
__d(
  "MPNDesktopWelcomePageBottomButtons.react",
  [
    "cx",
    "fbt",
    "ChatPluginTestId",
    "EllipsisText.react",
    "LineClamp.react",
    "LiveChatPluginConstants",
    "LiveChatPluginFbts",
    "LiveChatPluginLoggerUtil",
    "MPNConstants",
    "MPNIdentity",
    "MPNLocalState",
    "MPNMessengerIconSVG.react",
    "MPNNavigation",
    "MPNStorage",
    "MPNXDMessageManager",
    "MessagingPluginContext",
    "MessagingPluginThreadActions",
    "PopupWindow",
    "ShimButton.react",
    "XChatPluginIncognitoLoginPopupController",
    "XChatPluginProfilePlusVoiceSwitchPopupController",
    "cr:878",
    "gkx",
    "performanceAbsoluteNow",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(e, a);
      function e() {
        var e, f;
        for (var g = arguments.length, h = new Array(g), i = 0; i < g; i++)
          h[i] = arguments[i];
        return (
          ((e = f = a.call.apply(a, [this].concat(h)) || this),
          (f.$5 = function () {
            var a = f.context,
              b = a.state,
              e = a.dispatchAction;
            a = b.pageID;
            var g = b.hasGuestMode,
              h = b.pagePassesSentryTest,
              i = b.hasMessagingPermission,
              j = b.isSanitizedEpd3pdRequest,
              k = b.shouldBypassPageSentryTest,
              l = b.shouldUseAccessTokenAuth;
            b = d("MPNIdentity").MPNIdentity.currentUserState();
            var m = d("MPNIdentity").MPNIdentity.currentUserID();
            e({
              type: "UPDATE_CONTINUE_CLICK_TIME",
              continueClickTime: c("performanceAbsoluteNow")(),
            });
            if (b == d("MPNIdentity").MPNIdentityState.FB && m != null) {
              if (!k && !h && !i) {
                (b = f.props.ActionDelegate) == null
                  ? void 0
                  : b.openThreadWithInterstitial(function () {
                      var a;
                      (a = f.props.ActionDelegate) == null
                        ? void 0
                        : a.openThreadWithCurrentFBUser();
                      d("MPNNavigation").navigateToRoute(
                        f.context,
                        f.props.history,
                        d("MPNLocalState").MPNLocalStatePath.THREAD_VIEW
                      );
                      e({ type: "UPDATE_BLOCK_STATUS", isPageBlocked: !1 });
                    });
                d("LiveChatPluginLoggerUtil").logActionFromNewUI(
                  "tab_click",
                  null,
                  a,
                  g ? "welcome_page_with_guest_option" : "welcome_page",
                  { button_name: "continue_as" }
                );
                return;
              }
              d("MPNNavigation").navigateToRoute(
                f.context,
                f.props.history,
                d("MPNLocalState").MPNLocalStatePath.THREAD_VIEW
              );
              (m = f.props.ActionDelegate) == null
                ? void 0
                : m.openThreadWithCurrentFBUser();
              d("LiveChatPluginLoggerUtil").logActionFromNewUI(
                "tab_click",
                null,
                a,
                g ? "welcome_page_with_guest_option" : "welcome_page",
                { button_name: "continue_as" }
              );
              return;
            }
            l
              ? d("MessagingPluginThreadActions").presentPluginOptIn(
                  f.context,
                  function () {
                    var a;
                    (a = f.props.ActionDelegate) == null
                      ? void 0
                      : a.openThreadWithCurrentFBUser();
                    d("MPNNavigation").navigateToRoute(
                      f.context,
                      f.props.history,
                      d("MPNLocalState").MPNLocalStatePath.THREAD_VIEW
                    );
                    e({ type: "UPDATE_BLOCK_STATUS", isPageBlocked: !1 });
                  }
                )
              : d("MPNIdentity").MPNIdentity.performUIAction(
                  function () {
                    if (
                      d("MPNIdentity").MPNIdentity.cookieUserUncached() != "0"
                    ) {
                      if (j) {
                        c("MPNXDMessageManager").reloadPlugin(!0);
                        return;
                      }
                      return;
                    }
                    d("MPNIdentity").MPNIdentity.subscribeLoggedInUserChanges(
                      function (a, b) {
                        a = c("MPNStorage").getFBStorageState();
                        if (a != null) {
                          c("MPNStorage").setFBStorageState(
                            babelHelpers["extends"]({}, a, {
                              chatState:
                                d("MPNLocalState").MPNChatState
                                  .LOGGED_IN_CHAT_STARTED,
                              rdr: d("MPNConstants").MPNRedirect.FB_LOG_IN,
                            })
                          );
                          b = {
                            path: d("MPNLocalState").MPNLocalStatePath
                              .THREAD_VIEW,
                            chatState:
                              d("MPNLocalState").MPNChatState
                                .LOGGED_IN_CHAT_STARTED,
                            visibility:
                              d("MPNConstants").MPNVisibility.NOT_HIDDEN,
                            shouldShowLoginPage: !1,
                          };
                          c("MPNStorage").setThirdPartyStorageState(b);
                        }
                      },
                      d("LiveChatPluginConstants").LOGIN_CHECK_INTERVAL
                    );
                    if (
                      d("MPNIdentity").MPNIdentity.isProfilePlusUserUncached()
                    ) {
                      d("MPNIdentity").MPNIdentity.subscribeLoggedInUserChanges(
                        function (a, b) {
                          d("MPNIdentity").MPNIdentity.currentUserState() !=
                            d("MPNIdentity").MPNIdentityState.GUEST &&
                            (c("MPNStorage").clearFBStorageState(),
                            c("MPNStorage").clearThirdPartyStorageState()),
                            c("MPNXDMessageManager").reloadPlugin();
                        }
                      );
                      var a = c(
                        "XChatPluginProfilePlusVoiceSwitchPopupController"
                      )
                        .getURIBuilder()
                        .getURI();
                      d("PopupWindow").open(a.toString(), 420, 450);
                    } else
                      d("MessagingPluginThreadActions").presentPluginOptIn(
                        f.context
                      );
                  },
                  function () {
                    if (
                      d("MPNIdentity").MPNIdentity.cookieUserUncached() != "0"
                    ) {
                      c("MPNXDMessageManager").reloadPlugin(!0);
                      return;
                    }
                    d("MPNIdentity").MPNIdentity.subscribeLoggedInUserChanges(
                      function (a, b) {
                        a = c("MPNStorage").getFBStorageState();
                        a != null &&
                          c("MPNStorage").setFBStorageState(
                            babelHelpers["extends"]({}, a, {
                              chatState:
                                d("MPNLocalState").MPNChatState
                                  .LOGGED_IN_CHAT_STARTED,
                              rdr: d("MPNConstants").MPNRedirect.FB_LOG_IN,
                            })
                          );
                      },
                      d("LiveChatPluginConstants").LOGIN_CHECK_INTERVAL
                    );
                    if (
                      d("MPNIdentity").MPNIdentity.isProfilePlusUserUncached()
                    ) {
                      d("MPNIdentity").MPNIdentity.subscribeLoggedInUserChanges(
                        function (a, b) {
                          d("MPNIdentity").MPNIdentity.currentUserState() !=
                            d("MPNIdentity").MPNIdentityState.GUEST &&
                            (c("MPNStorage").clearFBStorageState(),
                            c("MPNStorage").clearThirdPartyStorageState()),
                            c("MPNXDMessageManager").reloadPlugin();
                        }
                      );
                      var a = c(
                        "XChatPluginProfilePlusVoiceSwitchPopupController"
                      )
                        .getURIBuilder()
                        .getURI();
                      d("PopupWindow").open(a.toString(), 420, 450);
                    } else
                      d("MessagingPluginThreadActions").presentPluginOptIn(
                        f.context
                      );
                  },
                  function () {
                    if (l) {
                      var a;
                      (a = f.props.ActionDelegate) == null
                        ? void 0
                        : a.openThreadWithAccessToken(function () {
                            var a;
                            (a = f.props.ActionDelegate) == null
                              ? void 0
                              : a.openThreadWithCurrentFBUser();
                            d("MPNNavigation").navigateToRoute(
                              f.context,
                              f.props.history,
                              d("MPNLocalState").MPNLocalStatePath.THREAD_VIEW
                            );
                            e({
                              type: "UPDATE_BLOCK_STATUS",
                              isPageBlocked: !1,
                            });
                          });
                    } else {
                      a = c("XChatPluginIncognitoLoginPopupController")
                        .getURIBuilder()
                        .setBool("is_from_re_engagement", !1)
                        .getURI();
                      d("PopupWindow").open(a.toString(), 420, 450);
                    }
                  }
                );
            d("LiveChatPluginLoggerUtil").logActionFromNewUI(
              "tab_click",
              null,
              a,
              g ? "welcome_page_with_guest_option" : "welcome_page",
              { button_name: "log_in_messenger" }
            );
          }),
          (f.$4 = function () {
            var a = f.context.state.pageID;
            d("MPNIdentity").MPNIdentity.performUIAction(
              function () {
                d("MessagingPluginThreadActions").reEngagementOptIn(f.context);
              },
              function () {
                d("MessagingPluginThreadActions").reEngagementOptIn(f.context);
              },
              function () {
                var a = c("XChatPluginIncognitoLoginPopupController")
                  .getURIBuilder()
                  .setBool("is_from_re_engagement", !0)
                  .getURI();
                d("PopupWindow").open(a.toString(), 420, 450);
              }
            );
            d("LiveChatPluginLoggerUtil").logActionFromNewUI(
              "tab_click",
              null,
              a,
              "re_engagement_expanded_view",
              { button_name: "re_engagement_get_messages" }
            );
          }),
          (f.$1 = function () {
            var a = f.context,
              e = a.state;
            a = a.dispatchAction;
            e = e.pageID;
            a({
              type: "UPDATE_CONTINUE_CLICK_TIME",
              continueClickTime: c("performanceAbsoluteNow")(),
            });
            b("cr:878") == null
              ? void 0
              : b("cr:878").logChatPluginThreadLoadModuleStart();
            d("MPNIdentity").MPNIdentity.performUIAction(
              f.$7,
              function () {
                var a = c("MPNStorage").getFBStorageState();
                a == null
                  ? (a = {
                      requestID: c("MPNStorage").requestID,
                      currentPath:
                        d("MPNLocalState").MPNLocalStatePath.THREAD_VIEW,
                      userID: "0",
                      chatState:
                        d("MPNLocalState").MPNChatState.CHAT_NOT_STARTED,
                      visibility: d("MPNConstants").MPNVisibility.NOT_HIDDEN,
                      showUpgradePrompt:
                        d("MPNConstants").MPNUpgradePrompt.NOT_SHOWN,
                      accessToken: null,
                      expirationTimestamp: null,
                      rdr: d("MPNConstants").MPNRedirect.NEW_GUEST_SESSION,
                    })
                  : (a = babelHelpers["extends"]({}, a, {
                      chatState:
                        d("MPNLocalState").MPNChatState.CHAT_NOT_STARTED,
                      rdr: d("MPNConstants").MPNRedirect.NEW_GUEST_SESSION,
                    }));
                c("MPNStorage").setFBStorageState(a);
                c("MPNXDMessageManager").reloadPlugin();
              },
              function () {
                var a = f.context.dispatchAction;
                a({
                  type: "UPDATE_COOKIE_ACCESS_DENIED",
                  cookieAccessDenied: !0,
                });
                f.$7();
              }
            );
            d("LiveChatPluginLoggerUtil").logActionFromNewUI(
              "tab_click",
              null,
              e,
              "welcome_page_with_guest_option",
              { button_name: "continue_as_guest" }
            );
          }),
          (f.$2 = function () {
            var a,
              b = f.context.state,
              c = b.pageID,
              e = b.greetingDialogDisplay;
            b = b.optimisticStorageState;
            (a = f.props.ActionDelegate) == null ? void 0 : a.minimize();
            a = e === "welcome_message" || e === "hide";
            e = b.isGreetingDismissed !== !0 && a;
            e && d("MPNNavigation").maximizeGreetingDialog(f.context);
            b = e
              ? d("MPNLocalState").MPNLocalStatePath.BUBBLE
              : d("MPNLocalState").MPNLocalStatePath.WELCOME_PAGE;
            d("MPNNavigation").navigateToRoute(
              f.context,
              f.props.history,
              b,
              !1
            );
            d("MPNNavigation").dismissReEngagementDialog(f.context);
            d("LiveChatPluginLoggerUtil").logActionFromNewUI(
              "tab_click",
              null,
              c,
              "re_engagement_expanded_view",
              { button_name: "re_engagement_not_now" }
            );
          }),
          (f.$7 = function () {
            var a = f.context.state.isSanitizedEpd3pdRequest;
            if (a) {
              a = c("MPNStorage").getFBStorageState();
              a != null &&
                c("MPNStorage").setFBStorageState(
                  babelHelpers["extends"]({}, a, {
                    rdr: d("MPNConstants").MPNRedirect.NEW_GUEST_SESSION,
                  })
                );
              c("MPNXDMessageManager").reloadPlugin(!0);
            } else
              d("MPNNavigation").navigateToRoute(
                f.context,
                f.props.history,
                d("MPNLocalState").MPNLocalStatePath.THREAD_VIEW
              ),
                f.props.ActionDelegate &&
                  f.props.ActionDelegate.onContinueAsGuest(function () {});
          }),
          (f.$3 = function () {
            var a = f.context,
              b = a.state;
            a = a.dispatchAction;
            var e = b.pageID,
              g = b.isSanitizedEpd3pdRequest;
            a({
              type: "UPDATE_CONTINUE_CLICK_TIME",
              continueClickTime: c("performanceAbsoluteNow")(),
            });
            d("MPNIdentity").MPNIdentity.performUIAction(
              function () {
                if (g) {
                  c("MPNXDMessageManager").reloadPlugin(!0);
                  return;
                }
                d("MPNNavigation").navigateToRoute(
                  f.context,
                  f.props.history,
                  d("MPNLocalState").MPNLocalStatePath.THREAD_VIEW
                );
              },
              function () {
                d("MPNIdentity").MPNIdentity.clearUserChangesSubscription(),
                  c("MPNStorage").setPath(
                    d("MPNLocalState").MPNLocalStatePath.THREAD_VIEW
                  ),
                  c("MPNXDMessageManager").reloadPlugin();
              },
              function () {
                c("MPNStorage").clearThirdPartyStorageState(),
                  c("MPNXDMessageManager").reloadPlugin();
              }
            );
            d("LiveChatPluginLoggerUtil").logActionFromNewUI(
              "tab_click",
              null,
              e,
              "itp_page",
              { button_name: "continue" }
            );
          }),
          e) || babelHelpers.assertThisInitialized(f)
        );
      }
      var f = e.prototype;
      f.render = function () {
        var a = this.context.state,
          b = a.hasGuestMode;
        a = a.threadCSSColor;
        var e = this.props.isReengagementDialog,
          f =
            d("MPNIdentity").MPNIdentity.currentUserState() ==
            d("MPNIdentity").MPNIdentityState.FB;
        f = c("gkx")("1189683");
        f = !b && !f;
        b = b
          ? j.jsx(c("ShimButton.react"), {
              "data-testid": void 0,
              onClick: this.$1,
              className: "_a2zk",
              children: j.jsx(c("LineClamp.react"), {
                lines: 1,
                children: i._("Continuer en tant qu\u2019invit\u00e9"),
              }),
            })
          : null;
        var g = j.jsx(c("ShimButton.react"), {
          onClick: this.$2,
          className: "_a2zk",
          "data-testid": void 0,
          children: j.jsx(c("LineClamp.react"), {
            lines: 1,
            children: d("LiveChatPluginFbts").NOT_NOW_BUTTON_TEXT,
          }),
        });
        return this.props.useITPContinueButton
          ? j.jsx("div", {
              className: "_a2zl",
              children: j.jsx(c("ShimButton.react"), {
                onClick: this.$3,
                className: "_a2zm",
                style: { backgroundColor: a },
                children: j.jsx(c("LineClamp.react"), {
                  className: "continueText",
                  lines: 1,
                  children: i._("Continuer"),
                }),
              }),
            })
          : j.jsxs("div", {
              className: (f ? "" : "_a2zl") + (f ? " _a2zn" : ""),
              children: [
                j.jsxs(c("ShimButton.react"), {
                  "data-testid": void 0,
                  onClick: this.props.isReengagementDialog ? this.$4 : this.$5,
                  className: "_a2zm",
                  style: { backgroundColor: a },
                  children: [
                    e
                      ? null
                      : j.jsx("div", {
                          className: "loggedInIconContainer",
                          children: j.jsx(c("MPNMessengerIconSVG.react"), {}),
                        }),
                    j.jsx(c("EllipsisText.react"), {
                      className: "continueText _4mr9",
                      children: this.$6(),
                    }),
                  ],
                }),
                this.props.isReengagementDialog ? g : b,
              ],
            });
      };
      f.$6 = function () {
        var a,
          b =
            d("MPNIdentity").MPNIdentity.currentUserState() ==
            d("MPNIdentity").MPNIdentityState.FB;
        a =
          (a = d("MPNIdentity").MPNIdentity.currentUser()) == null
            ? void 0
            : a.shortName;
        if (this.props.isReengagementDialog)
          return d("LiveChatPluginFbts").GET_MESSAGES_BUTTON_TEXT;
        if (!b)
          return d("LiveChatPluginFbts").LOGIN_PAGE_USE_MESSENGER_BUTTON_TEXT;
        return a !== null
          ? i._("Continuer en tant que {first name}", [
              i._param("first name", a),
            ])
          : i._("Continuer");
      };
      return e;
    })(j.Component);
    a.contextType = c("MessagingPluginContext");
    g["default"] = a;
  },
  98
);
__d(
  "ChatPluginDesktopReEngagementExpandedDialog.react",
  [
    "cx",
    "ChatPluginMessengerAttribution.react",
    "ChatPluginSetupFlowE2ETestUtils",
    "Image.react",
    "LineClamp.react",
    "LiveChatPluginConstants",
    "LiveChatPluginLoggerUtil",
    "MPNDesktopWelcomePageBottomButtons.react",
    "MPNDialogMinusButtonSVG.react",
    "MPNLocalState",
    "MPNNavigation",
    "MPNPrivacyText.react",
    "MPNXDMessageManager",
    "MessagingPluginContext",
    "ShimButton.react",
    "react",
    "useResizeObserver",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useContext;
    b.useEffect;
    function a(a) {
      var b = j(c("MessagingPluginContext")),
        e = b.state,
        f = e.alignment,
        g = e.pageProfilePictureUri,
        h = e.windowSize,
        k = e.optimisticStorageState,
        l = e.pageID,
        m = e.expandedOptInMessageText;
      e = e.expandedOptInMessageTitle;
      k = k || {};
      var n = k.isGreetingDismissed,
        o = a.isPreview,
        p = a.ActionDelegate,
        q = h === "compact",
        r = function () {
          var a = q
              ? d("LiveChatPluginConstants")
                  .RE_ENGAGEMENT_EXPANDED_DIALOG_HEIGHT_COMPACT
              : d("LiveChatPluginConstants")
                  .RE_ENGAGEMENT_EXPANDED_DIALOG_HEIGHT,
            b = q
              ? d("LiveChatPluginConstants")
                  .MAIN_IFRAME_PADDING_HEIGHT_WITH_COMPACT
              : d("LiveChatPluginConstants").MAIN_IFRAME_PADDING_HEIGHT;
          a = a + b;
          c("MPNXDMessageManager").resizeIframe(a);
        };
      k = c("useResizeObserver")(function (a, b) {
        r();
      });
      h = f === "left";
      f = h ? "_a968" : "_a969";
      var s = function () {
        if (o) p && p.minimize();
        else {
          var c =
            b.state.greetingDialogDisplay === "welcome_message" ||
            b.state.greetingDialogDisplay === "hide";
          n !== !0 && c && d("MPNNavigation").maximizeGreetingDialog(b);
          d("MPNNavigation").navigateToRoute(
            b,
            a.history,
            d("MPNLocalState").MPNLocalStatePath.REENGAGEMENT_COLLAPSED_VIEW
          );
          d("LiveChatPluginLoggerUtil").logActionFromNewUI(
            "tab_click",
            null,
            l,
            "re_engagement_expanded_view",
            { button_name: "re_engagement_expanded_view_minus_button" }
          );
        }
      };
      return i.jsxs("div", {
        ref: k,
        className:
          (a.isPreview ? "" : "_a9vy") +
          (!a.isPreview && h ? " _abip" : "") +
          (!a.isPreview && !h ? " _abiq" : ""),
        children: [
          i.jsxs("div", {
            "data-testid": void 0,
            className: "_a9b_ _aavn",
            children: [
              i.jsx("div", {
                children: i.jsx("div", {
                  className: "_a9c0",
                  children: i.jsx("div", {
                    children: i.jsx(c("Image.react"), {
                      className: "_a9c1",
                      src: g,
                    }),
                  }),
                }),
              }),
              i.jsx("div", {
                className: "_a9c2",
                children: i.jsx(c("LineClamp.react"), {
                  lines: 1,
                  children: e,
                }),
              }),
              i.jsx("div", {
                className: "_a9c3",
                children: i.jsx(c("LineClamp.react"), {
                  lines: 5,
                  children: m,
                }),
              }),
              i.jsx(
                c("MPNDesktopWelcomePageBottomButtons.react"),
                babelHelpers["extends"]({}, a, {
                  useITPContinueButton: !1,
                  isReengagementDialog: !0,
                })
              ),
              i.jsx("div", {
                className: "_a9c4",
                children: i.jsx(c("MPNPrivacyText.react"), {
                  useITPContinueButton: !1,
                  isShownInReEngagementDialog: !0,
                }),
              }),
              i.jsx(c("ChatPluginMessengerAttribution.react"), {}),
            ],
          }),
          i.jsx("div", {
            className: f,
            children: i.jsx(c("ShimButton.react"), {
              "data-testid": void 0,
              onClick: s,
              className: "_9pti _9l4n",
              "aria-label": "Close",
              children: i.jsx(c("MPNDialogMinusButtonSVG.react"), {}),
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
  "MPNBlockedPageComposer.react",
  [
    "cx",
    "fbt",
    "MessagingPluginContext",
    "MessagingPluginThreadActions",
    "ShimButton.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = d("react").useContext;
    function a() {
      var a = k(c("MessagingPluginContext"));
      return j.jsx("div", {
        className: "_94wl",
        children: j.jsxs("div", {
          className: "_94wm",
          children: [
            j.jsx("div", {
              children: i._(
                "Vous avez d\u00e9sactiv\u00e9 les messages pour {pageName}",
                [i._param("pageName", a.state.pageName)]
              ),
            }),
            i._(
              "Vous ne pouvez pas envoyer de messages \u00e0 cette personne, et vous ne recevez pas ses messages."
            ),
            j.jsx(c("ShimButton.react"), {
              className: "_94wo",
              onClick: function () {
                d("MessagingPluginThreadActions").blockOrUnblockPage(a);
              },
              children: j.jsx("div", {
                className: "_94wp",
                children: i._("Activer les messages"),
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
  "MPNDesktopBotMenuDialog.react",
  [
    "cx",
    "ChatPluginTestId",
    "LiveChatPluginLoggerUtil",
    "MPNDropdownMenu",
    "MPNDropdownMenuAlignment",
    "MPNDropdownMenuItem",
    "MPNIdentity",
    "MercuryIDs",
    "MessagingPluginContext",
    "URI",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c) {
        b = a.call(this, b, c) || this;
        b.state = { navigationPath: [] };
        b.$1 = d("LiveChatPluginLoggerUtil").getAttributionTags();
        b.$2 = d("MercuryIDs").getThreadIDFromUserID(b.context.state.pageID);
        b.$3 =
          d("MPNIdentity").MPNIdentity.currentUserState() ===
          d("MPNIdentity").MPNIdentityState.FB;
        return b;
      }
      var e = b.prototype;
      e.render = function () {
        var a = this,
          b = [],
          d = this.props.menuItems;
        for (var e = 0; e < this.state.navigationPath.length; e++) {
          var f = this.state.navigationPath[e];
          d != null && (d = d[f].nested_ctas);
        }
        d &&
          d.map(function (d, c) {
            switch (d.action_type) {
              case 4:
                a.$4(d, b);
                break;
              case 2:
                a.$5(d, b);
                break;
              case 11:
                a.$6(d, c, b);
                break;
              default:
                b.push({ primaryText: d.title || "" });
                break;
            }
          });
        return i.jsx(c("MPNDropdownMenu"), {
          alignment: c("MPNDropdownMenuAlignment").TOP,
          className: "_a2-d",
          children: b.map(function (b, a) {
            return i.createElement(
              c("MPNDropdownMenuItem"),
              babelHelpers["extends"]({}, b, { key: a, "data-testid": void 0 })
            );
          }),
        });
      };
      e.$5 = function (a, b) {
        var e = this.context.state.pageID,
          f = function (b) {
            c("URI").goURIOnNewWindow(a.action_link || "");
            b = d("MPNIdentity").MPNIdentity.currentUserID();
            d("LiveChatPluginLoggerUtil").logActionUsingFalco(
              b,
              e,
              d("MPNIdentity").MPNIdentity.currentUserState() ===
                d("MPNIdentity").MPNIdentityState.FB
                ? "logged_in_chat_tab"
                : "guest_chat_tab",
              "customer_chat_bot_menu_url_redirect_clicked"
            );
          };
        b.push({ onClick: f, primaryText: a.title || "" });
      };
      e.$6 = function (a, b, c) {
        var d = this,
          e = function (a) {
            d.setState(function (a) {
              return { navigationPath: a.navigationPath.concat(b) };
            });
          };
        c.push({ onClick: e, primaryText: a.title || "" });
      };
      e.$4 = function (a, b) {
        var c = this,
          e = this.context.state,
          f = e.pageID,
          g = e.refererUri;
        e = function (b) {
          b = d("MPNIdentity").MPNIdentity.currentUserState();
          var e = d("MPNIdentity").MPNIdentity.currentUserID();
          if (
            b !== d("MPNIdentity").MPNIdentityState.GUEST &&
            b !== d("MPNIdentity").MPNIdentityState.FB
          )
            return;
          else {
            b = c.context.state.messageStore;
            b = b.sendQueue;
            if (!b) return;
            b.enqueueAndSend(
              a.title || "",
              c.$3,
              g,
              b.makePlatformTokenForPostbackCTA(a.id || "")
            );
          }
          d("LiveChatPluginLoggerUtil").logActionUsingFalco(
            e,
            f,
            d("MPNIdentity").MPNIdentity.currentUserState() ===
              d("MPNIdentity").MPNIdentityState.FB
              ? "logged_in_chat_tab"
              : "guest_chat_tab",
            "customer_chat_bot_menu_postback_clicked"
          );
        };
        b.push({ onClick: e, primaryText: a.title || "" });
      };
      return b;
    })(i.Component);
    a.contextType = c("MessagingPluginContext");
    g["default"] = a;
  },
  98
);
__d(
  "MPNDesktopBotMenuButton.react",
  [
    "cx",
    "fbt",
    "AsyncRequest",
    "BasePopoverTrigger.react",
    "CometPressable.react",
    "LiveChatPluginConstants",
    "LiveChatPluginGuestPersistentMenuQuery",
    "LiveChatPluginLoggerUtil",
    "LiveChatPluginSendButtonSVG.react",
    "MPNBotMenuButtonSVG.react",
    "MPNDesktopBotMenuDialog.react",
    "MPNIdentity",
    "MPNLocalState",
    "MPNStorage",
    "MessagingPluginContext",
    "XMessengerBotsMenuController",
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
          (c.state = { menuItems: null }),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      var e = b.prototype;
      e.UNSAFE_componentWillMount = function () {
        this.state.menuItems == null && this.$2();
      };
      e.componentDidUpdate = function () {
        this.state.menuItems == null &&
          this.context.state.accessToken &&
          this.$2();
      };
      e.componentWillUnmount = function () {
        this.$1 && (this.$1.abort(), (this.$1 = null)),
          this.setState(this.$3(!1));
      };
      e.render = function () {
        var a = this,
          b = this.context.state,
          e = b.hasActiveAutomation,
          f = b.hasPersistentMenu,
          g = b.threadCSSColor;
        return e ||
          !f ||
          !this.state.menuItems ||
          this.state.menuItems.length === 0
          ? j.jsx("div", {
              className: " _95jk _95ms",
              children: j.jsx(c("LiveChatPluginSendButtonSVG.react"), {
                threadColor: d("LiveChatPluginConstants")
                  .GUEST_SEND_BUTTON_COLOR_EMPTY_INPUT,
              }),
            })
          : j.jsx(c("BasePopoverTrigger.react"), {
              position: "above",
              disableAutoFlip: !0,
              popover: c("MPNDesktopBotMenuDialog.react"),
              popoverProps: { menuItems: this.state.menuItems },
              children: function (b, d) {
                return j.jsx("div", {
                  ref: b,
                  children: j.jsx("div", {
                    className: "_94vq _9r2w _9jru",
                    children: j.jsx(c("CometPressable.react"), {
                      overlayRadius: 50,
                      "aria-label": i._("Menu fixe"),
                      onPress: function () {
                        a.$4(), d();
                      },
                      children: j.jsx(c("MPNBotMenuButtonSVG.react"), {
                        threadColor: g,
                      }),
                    }),
                  }),
                });
              },
            });
      };
      e.$2 = function () {
        var a = this,
          b = this.context,
          e = b.state,
          f = b.dispatchAction;
        b = e.pageID;
        e = c("MPNStorage").getFBStorageState();
        if (
          !e ||
          e.chatState === d("MPNLocalState").MPNChatState.CHAT_NOT_STARTED
        )
          return;
        e = d("MPNIdentity").MPNIdentity.currentUserState();
        switch (e) {
          case d("MPNIdentity").MPNIdentityState.GUEST:
            e =
              (e = d("MPNIdentity").MPNIdentity.currentUser()) == null
                ? void 0
                : e.accessToken;
            if (e == null) return;
            d("LiveChatPluginGuestPersistentMenuQuery").fetch(
              b,
              e,
              function (b) {
                b != null && b.length > 0
                  ? (a.setState({ menuItems: b }),
                    f({
                      type: "TOGGLE_HAS_PERSISTENT_MENU",
                      hasPersistentMenu: !0,
                    }))
                  : (a.setState({ menuItems: [] }),
                    f({
                      type: "TOGGLE_HAS_PERSISTENT_MENU",
                      hasPersistentMenu: !1,
                    }));
              }
            );
            break;
          case d("MPNIdentity").MPNIdentityState.FB:
            e = c("XMessengerBotsMenuController")
              .getURIBuilder()
              .setString("page_id", b)
              .setBool("should_flatten", !0)
              .getURI();
            this.$1 = new (c("AsyncRequest"))()
              .setURI(e)
              .setHandler(function (b) {
                a.setState({ menuItems: b.payload.menu });
              })
              .setErrorHandler(function (b) {
                a.setState({ menuItems: [] });
              });
            this.$1.send();
            break;
          default:
            return;
        }
      };
      e.$4 = function () {
        this.setState(this.$3(!0)), this.props.onClick();
      };
      e.$3 = function (a) {
        var b = this.context.state.pageID,
          c = d("MPNIdentity").MPNIdentity.currentUserID();
        d("LiveChatPluginLoggerUtil").logActionUsingFalco(
          c,
          b,
          d("MPNIdentity").MPNIdentity.currentUserState() ===
            d("MPNIdentity").MPNIdentityState.FB
            ? "logged_in_chat_tab"
            : "guest_chat_tab",
          a ? "customer_chat_bot_menu_opened" : "customer_chat_bot_menu_closed"
        );
      };
      return b;
    })(j.Component);
    a.contextType = c("MessagingPluginContext");
    g["default"] = a;
  },
  98
);
__d(
  "MessagingPluginDesktopProfilePicture.react",
  [
    "cx",
    "ix",
    "Image.react",
    "MPNConstants",
    "MessagingPluginContext",
    "PrivacyTransparentOverlay.react",
    "joinClasses",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var e = b.prototype;
      e.render = function () {
        var a = this.context.state,
          b = a.pageProfilePictureUri,
          e = a.isPageAway;
        a = a.awayHoursEnabled;
        var f = this.props,
          g = f.className;
        f = f.availablityIconSize;
        var h = e ? "_a7a1" : "_a2gl";
        f =
          f === d("MPNConstants").MPNAvailablityIconSize.LARGE
            ? "_a7a2"
            : "_a7a3";
        h = c("joinClasses")(h, f);
        f = e
          ? j.jsx(c("Image.react"), { className: h, src: i("213835") })
          : j.jsx("div", { className: h });
        return j.jsxs(c("PrivacyTransparentOverlay.react"), {
          children: [
            j.jsx(c("Image.react"), {
              className: (e = g) != null ? e : "_a3jw",
              src: b,
            }),
            a ? f : null,
          ],
        });
      };
      return b;
    })(j.Component);
    a.contextType = c("MessagingPluginContext");
    g["default"] = a;
  },
  98
);
__d(
  "MessagingPluginDesktopThreadMenu.react",
  [
    "cx",
    "fbt",
    "CometSeparatorMenuItem.react",
    "LiveChatPluginFbts",
    "LiveChatPluginLoggerUtil",
    "MPNDropdownMenu",
    "MPNDropdownMenuItem",
    "MPNIdentity",
    "MessagingPluginContext",
    "MessagingPluginThreadActions",
    "ODS",
    "URI",
    "gkx",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = d("react").useContext;
    function a(a) {
      var b,
        e = k(c("MessagingPluginContext")),
        f = d("MPNIdentity").MPNIdentity.currentUserID(),
        g = e.state,
        h = g.pageID,
        m = g.isPageBlocked,
        n = g.locale,
        o = g.showUpgradeUpsellPrompt,
        p = g.isPageInEU;
      g = g.isLightswitchEnabledForGuest;
      var q =
          d("MPNIdentity").MPNIdentity.currentUserState() ===
          d("MPNIdentity").MPNIdentityState.GUEST,
        r = !0;
      b = (b = e.state.threadExists) != null ? b : !1;
      !q ? (r = c("gkx")("1830721")) : (r = g !== !0);
      r = r && !p && b;
      r ||
        (q &&
          g === !0 &&
          d("ODS").bumpEntityKey(
            4205,
            "chat_plugin",
            "chat_plugin.epd.guest_frx_entry_point_blocked_eu_guest"
          ),
        !q &&
          !c("gkx")("1830721") &&
          d("ODS").bumpEntityKey(
            4205,
            "chat_plugin",
            "chat_plugin.epd.guest_frx_entry_point_blocked_eu_fb_user"
          ),
        p &&
          d("ODS").bumpEntityKey(
            4205,
            "chat_plugin",
            "chat_plugin.epd.guest_frx_entry_point_blocked_eu_page"
          ));
      return j.jsxs(c("MPNDropdownMenu"), {
        className: "_a2zx",
        children: [
          q && o
            ? j.jsx(c("MPNDropdownMenuItem"), {
                "data-testid": void 0,
                iconSrc: "/images/web_messenger/app-messenger_32-4x.png",
                onClick: function () {
                  return a.onUpgrade();
                },
                primaryText: i._("Poursuivre dans Messenger"),
              })
            : null,
          j.jsx(c("MPNDropdownMenuItem"), {
            "data-testid": void 0,
            iconSrc: "/images/web_messenger/cross-circle_32-4x.png",
            onClick: function () {
              l(f, h, q, "end_chat_menu_item"),
                e.dispatchAction({ type: "TOGGLE_END_CHAT", showEndChat: !0 });
            },
            primaryText: i._("Terminer la discussion"),
          }),
          !q && m != null
            ? j.jsx(c("MPNDropdownMenuItem"), {
                "data-testid": void 0,
                iconSrc: "/images/web_messenger/message-cross_32-4x.png",
                onClick: function () {
                  d("MessagingPluginThreadActions").blockOrUnblockPage(e);
                },
                primaryText: m
                  ? i._("Activer les messages")
                  : i._("D\u00e9sactiver les messages"),
              })
            : null,
          q
            ? null
            : j.jsx(c("MPNDropdownMenuItem"), {
                "data-testid": void 0,
                iconSrc: a.isMuted
                  ? "/images/web_messenger/bell-cross_32-4x.png"
                  : "/images/web_messenger/bell_32-4x.png",
                onClick: a.onClickMuteOrUnmute,
                primaryText: d(
                  "LiveChatPluginFbts"
                ).getMuteConversationButtonText(a.isMuted),
              }),
          r
            ? j.jsx(c("MPNDropdownMenuItem"), {
                "data-testid": void 0,
                iconSrc: "/images/web_messenger/caution-triangle_32-4x.png",
                onClick: function () {
                  l(f, h, q, "frx_entry_point"),
                    d("MessagingPluginThreadActions").openFRXPrompt(
                      h,
                      n,
                      "report_button"
                    );
                },
                primaryText: d("LiveChatPluginFbts").getOpenFRXButtonText(),
              })
            : null,
          j.jsx(c("CometSeparatorMenuItem.react"), {}),
          j.jsx(c("MPNDropdownMenuItem"), {
            "data-testid": void 0,
            onClick: function () {
              l(f, h, q, "visit_facebook_page_menu_item"),
                c("URI").goURIOnNewWindow("https://www.facebook.com/" + h);
            },
            primaryText: i._("Visiter la Page Facebook"),
          }),
          j.jsx(c("MPNDropdownMenuItem"), {
            "data-testid": void 0,
            onClick: function () {
              l(f, h, q, "add_messenger_to_your_website_menu_item"),
                c("URI").goURIOnNewWindow(
                  "https://www.facebook.com/business/m/add-messenger-to-your-website"
                );
            },
            primaryText: i._("Ajouter Messenger \u00e0 votre site web."),
          }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function l(a, b, c, e) {
      d("LiveChatPluginLoggerUtil").logActionFromNewUI(
        "in_thread_action",
        a,
        b,
        c ? "guest_chat_tab" : "logged_in_chat_tab",
        { button_name: e }
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "MPNDesktopDialogHeader.react",
  [
    "cx",
    "fbt",
    "Arbiter",
    "BasePopoverTrigger.react",
    "FlexLayout.react",
    "LineClamp.react",
    "LiveChatPluginLoggerUtil",
    "MPNConstants",
    "MPNHeaderActionButton.react",
    "MPNIdentity",
    "MPNMinusButtonSVG.react",
    "MPNMoreInfoButtonSVG.react",
    "MPNThreadPageHeaderSubtitle.react",
    "MPNVerifiedBadge.react",
    "MessagingPluginContext",
    "MessagingPluginDesktopProfilePicture.react",
    "MessagingPluginDesktopThreadMenu.react",
    "MessagingPluginThreadActions",
    "QE2Logger",
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
          (c.$1 = null),
          (c.$3 = function () {
            var a = c.context.state,
              b = a.guestID;
            a = a.pageID;
            c.$1 = d("MessagingPluginThreadActions").launchUpgradeFlowDesktop(
              c.context,
              c.props.history,
              d("MPNConstants").MPNUpgradePrompt.CONTINUE_IN_MESSENGER
            );
            d("LiveChatPluginLoggerUtil").logActionUsingFalco(
              b,
              a,
              "guest_chat_tab",
              d("MPNConstants").MPNUpgradePrompt.CONTINUE_IN_MESSENGER
            );
          }),
          (c.$2 = function () {
            var a = c.context,
              b = a.state;
            a = a.dispatchAction;
            var e = b.isMuted;
            b = b.pageID;
            d("MessagingPluginThreadActions").muteOrUnmutePage(b, e);
            a({ type: "MUTE_CONVERSATION", isMuted: !e });
          }),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      var e = b.prototype;
      e.componentWillUnmount = function () {
        this.$1 && c("Arbiter").unsubscribe(this.$1);
      };
      e.componentDidMount = function () {
        var a = this.context.state,
          b = a.pageID;
        a = a.pageResponsiveness;
        a != null &&
          d("QE2Logger").logExposureForPage(
            "chat_plugin_thread_header_responsiveness_text",
            b.toString()
          );
      };
      e.render = function () {
        var a = this,
          b = this.context.state,
          e = b.pageName,
          f = b.pageVerifiedStatus,
          g = b.showGuestUpgradePopover,
          h = b.pageID,
          k = b.isPageAway;
        b = b.awayHoursEnabled;
        var l = this.props.menuEnabled !== !1,
          m =
            this.context.state.optimisticStorageState.showUpgradePrompt !=
              null &&
            this.context.state.optimisticStorageState.showUpgradePrompt !==
              d("MPNConstants").MPNUpgradePrompt.NOT_SHOWN,
          n = d("MPNIdentity").MPNIdentity.currentUserID(),
          o =
            d("MPNIdentity").MPNIdentity.currentUserState() ===
            d("MPNIdentity").MPNIdentityState.GUEST;
        return j.jsxs("div", {
          className: "_9dxj" + (!m && !g ? " _9gop" : ""),
          children: [
            j.jsx("div", {
              className: "_a2m0",
              children: j.jsx(
                c("MessagingPluginDesktopProfilePicture.react"),
                {}
              ),
            }),
            j.jsxs("div", {
              className: "_9dxi",
              children: [
                j.jsxs(c("FlexLayout.react"), {
                  align: "center",
                  children: [
                    j.jsx(c("LineClamp.react"), {
                      className: "_a2m1",
                      lines: 1,
                      children: j.jsx("strong", { children: e }),
                    }),
                    f && f !== "not_verified"
                      ? j.jsx("span", {
                          className: "_a2m4",
                          children: j.jsx(c("MPNVerifiedBadge.react"), {
                            verificationStatus: f,
                            size: 14,
                          }),
                        })
                      : null,
                  ],
                }),
                j.jsx(c("MPNThreadPageHeaderSubtitle.react"), {
                  isPageAway: k,
                  awayHoursEnabled: b,
                }),
              ],
            }),
            j.jsx("div", { className: "_9dxh" }),
            j.jsxs("div", {
              className: "_9dzn",
              children: [
                l &&
                  j.jsx("div", {
                    "data-testid": void 0,
                    children: j.jsx(c("BasePopoverTrigger.react"), {
                      popover: c("MessagingPluginDesktopThreadMenu.react"),
                      popoverProps: {
                        history: this.props.history,
                        isMuted: this.context.state.isMuted,
                        onClickMuteOrUnmute: this.$2,
                        onUpgrade: this.$3,
                      },
                      children: function (a, b) {
                        return j.jsx("div", {
                          className: "_9r2w",
                          ref: a,
                          children: j.jsx(c("MPNHeaderActionButton.react"), {
                            label: i._("Plus"),
                            onPress: function () {
                              b(),
                                d(
                                  "LiveChatPluginLoggerUtil"
                                ).logActionFromNewUI(
                                  "in_thread_action",
                                  n,
                                  h,
                                  o ? "guest_chat_tab" : "logged_in_chat_tab",
                                  { button_name: "more_menu" }
                                );
                            },
                            children: j.jsx(
                              c("MPNMoreInfoButtonSVG.react"),
                              {}
                            ),
                          }),
                        });
                      },
                    }),
                  }),
                j.jsx(c("MPNHeaderActionButton.react"), {
                  label: i._("fermer"),
                  onPress: function () {
                    var b;
                    (b = a.props.ActionDelegate) == null
                      ? void 0
                      : b.minimize();
                    a.$4();
                  },
                  children: j.jsx(c("MPNMinusButtonSVG.react"), {}),
                }),
              ],
            }),
          ],
        });
      };
      e.$4 = function () {
        var a = this.context.state.pageID,
          b = d("MPNIdentity").MPNIdentity.currentUserID();
        if (b == null) return;
        var c = d("MPNIdentity").MPNIdentity.currentUserState();
        c === d("MPNIdentity").MPNIdentityState.GUEST
          ? d("LiveChatPluginLoggerUtil").logActionFromNewUI(
              "chat_plugin_minimize",
              b,
              a,
              "guest_chat_tab"
            )
          : d("LiveChatPluginLoggerUtil").logActionFromNewUI(
              "chat_plugin_minimize",
              b,
              a,
              "logged_in_chat_tab"
            );
      };
      return b;
    })(j.PureComponent);
    a.contextType = c("MessagingPluginContext");
    g["default"] = a;
  },
  98
);
__d(
  "MPNDesktopGuestAttachmentButton.react",
  [
    "cx",
    "fbt",
    "MPNConstants",
    "MPNPaperclipIconSVG.react",
    "MPNStorage",
    "MessagingPluginContext",
    "ShimButton.react",
    "Tooltip.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var e = b.prototype;
      e.render = function () {
        var a = this.context.dispatchAction;
        return j.jsx(c("Tooltip.react"), {
          tooltip: i._("Attach Files"),
          children: j.jsx(c("ShimButton.react"), {
            "data-testid": void 0,
            className: "_95jj _9jru",
            onClick: function () {
              c("MPNStorage").setShowUpgradePrompt(
                d("MPNConstants").MPNUpgradePrompt.ATTACHMENT_UPSELL
              ),
                a({
                  type: "UPDATE_UPGRADE_UPSELL_PROMPT",
                  upgradeUpsellPrompt:
                    d("MPNConstants").MPNUpgradePrompt.ATTACHMENT_UPSELL,
                });
            },
            children: j.jsx(c("MPNPaperclipIconSVG.react"), {
              color: this.context.state.threadCSSColor,
            }),
          }),
        });
      };
      return b;
    })(j.Component);
    a.contextType = c("MessagingPluginContext");
    g["default"] = a;
  },
  98
);
__d(
  "MPNDesktopGuestUpgradeUpsellPrompt.react",
  [
    "Arbiter",
    "LiveChatPluginLoggerUtil",
    "MPNSharedGuestUpgradePromptV2.react",
    "MessagingPluginContext",
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
          (c.$1 = null),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      var e = b.prototype;
      e.componentWillUnmount = function () {
        this.$1 && c("Arbiter").unsubscribe(this.$1);
      };
      e.componentDidMount = function () {
        var a = this.context.state,
          b = a.pageID;
        a = a.guestID;
        d("LiveChatPluginLoggerUtil").logImpressionUsingFalco_UnsafeFor3PD(
          b,
          "upgrade_prompt",
          null,
          null,
          null,
          null,
          a,
          null,
          this.props.prompt
        );
      };
      e.render = function () {
        return h.jsx(c("MPNSharedGuestUpgradePromptV2.react"), {
          color: this.props.color,
          prompt: this.props.prompt,
          history: this.props.history,
        });
      };
      return b;
    })(h.Component);
    a.contextType = c("MessagingPluginContext");
    g["default"] = a;
  },
  98
);
__d(
  "MPNDesktopLoginModal.react",
  [
    "cx",
    "LineClamp.react",
    "LiveChatPluginFbts",
    "MPNDesktopWelcomePageBottomButtons.react",
    "MPNIdentity",
    "MPNPrivacyText.react",
    "MPNSwitchAccountActionButton.react",
    "MPNSwitchAccountDropDownMenu.react",
    "MessagingPluginContext",
    "emptyFunction",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useContext,
      k = b.useEffect,
      l = b.useRef,
      m = b.useState;
    function a(a) {
      var b = a.useITPContinueButton,
        e = a.isPreview,
        f =
          d("MPNIdentity").MPNIdentity.currentUserState() ==
          d("MPNIdentity").MPNIdentityState.FB,
        g = j(c("MessagingPluginContext"));
      g = g.state;
      var h = m(!1),
        n = h[0],
        o = h[1],
        p = l(null),
        q = l(null);
      k(
        function () {
          function a(a) {
            var b;
            a = a.target;
            p &&
              a instanceof Node &&
              !((b = p.current) == null ? void 0 : b.contains(a)) &&
              q &&
              a instanceof Node &&
              !((b = q.current) == null ? void 0 : b.contains(a)) &&
              o(!1);
          }
          Event.listen(document, "mousedown", a);
          return function () {
            document.removeEventListener("mousedown", a);
          };
        },
        [p, q]
      );
      return i.jsx("div", {
        className: g.windowSize === "compact" ? "_a3u7" : "",
        children: i.jsxs("div", {
          className: "_a8d2",
          children: [
            i.jsxs("div", {
              className: "_a6zi",
              children: [
                i.jsx("div", { className: "_a6zj" }),
                i.jsx("div", {
                  className: "_a6zl",
                  children: i.jsx(c("LineClamp.react"), {
                    lines: 1,
                    children: d("LiveChatPluginFbts").LOGIN_PAGE_TITLE,
                  }),
                }),
                i.jsx("div", {
                  className: "_9dzn _a6zm" + (e ? " _9l3-" : ""),
                  children: f
                    ? i.jsx(c("MPNSwitchAccountActionButton.react"), {
                        onPress: function () {
                          o(!0);
                        },
                        testid: void 0,
                      })
                    : null,
                }),
              ],
            }),
            n &&
              i.jsx("div", {
                ref: q,
                className: "_a1qk",
                children: i.jsx(c("MPNSwitchAccountDropDownMenu.react"), {
                  onClose: c("emptyFunction"),
                }),
              }),
            i.jsx(
              c("MPNDesktopWelcomePageBottomButtons.react"),
              babelHelpers["extends"]({}, a, { isReengagementDialog: !1 })
            ),
            i.jsx(c("MPNPrivacyText.react"), { useITPContinueButton: b }),
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
  "MessagingPluginDesktopInformationDropDownMenu.react",
  [
    "cx",
    "fbt",
    "MPNDropdownMenu",
    "MPNDropdownMenuItem",
    "MessagingPluginContext",
    "URI",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = d("react").useContext;
    function a(a) {
      a = k(c("MessagingPluginContext"));
      var b = a.state.pageID;
      return j.jsxs(c("MPNDropdownMenu"), {
        "data-testid": void 0,
        className: "_9r8t",
        children: [
          j.jsx(c("MPNDropdownMenuItem"), {
            "data-testid": void 0,
            onClick: function () {
              c("URI").goURIOnNewWindow("https://www.facebook.com/" + b);
            },
            primaryText: i._("Visiter la Page Facebook"),
          }),
          j.jsx(c("MPNDropdownMenuItem"), {
            "data-testid": void 0,
            onClick: function () {
              c("URI").goURIOnNewWindow(
                "https://www.facebook.com/business/m/add-messenger-to-your-website"
              );
            },
            primaryText: i._("Ajouter Messenger \u00e0 votre site web."),
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
  "MPNDesktopWelcomePageModalView.react",
  [
    "cx",
    "fbt",
    "BasePopoverTrigger.react",
    "ChatPluginMessengerAttribution.react",
    "ChatPluginSetupFlowE2ETestUtils",
    "FlexLayout.react",
    "LineClamp.react",
    "LiveChatPluginConstants",
    "LiveChatPluginFbts",
    "LiveChatPluginLoggerUtil",
    "MPNConstants",
    "MPNDesktopLoginModal.react",
    "MPNHeaderActionButton.react",
    "MPNIdentity",
    "MPNLocalState",
    "MPNMinusButtonSVG.react",
    "MPNMoreInfoButtonSVG.react",
    "MPNNavigation",
    "MPNNewWelcomePageButtom.react",
    "MPNPageResponsivenessText.react",
    "MPNStorage",
    "MPNVerifiedBadge.react",
    "MPNXDMessageManager",
    "MessagingPluginContext",
    "MessagingPluginDesktopInformationDropDownMenu.react",
    "MessagingPluginDesktopProfilePicture.react",
    "react",
    "useResizeObserver",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    b = d("react");
    var k = b.useContext,
      l = b.useEffect,
      m = b.useRef,
      n = b.useState,
      o = 18,
      p = 16;
    function a(a) {
      var b = k(c("MessagingPluginContext")),
        e = b.state,
        f = e.pageVerifiedStatus,
        g = e.alignment,
        h = e.hasGuestMode,
        q = e.pageName,
        r = e.loggedInGreeting,
        s = e.loggedOutGreeting,
        t = e.pageID,
        u = e.windowSize,
        v = e.awayGreeting,
        w = e.awayHoursEnabled,
        x = e.isPageAway,
        y = e.shouldRenderReEngagementDialog,
        z = e.optimisticStorageState,
        A = e.greetingDialogDisplay;
      e = e.shouldUseAccessTokenAuth;
      e = n(!1);
      var B = e[0],
        C = e[1],
        D = m(null),
        E = m(null);
      l(
        function () {
          function a(a) {
            var b;
            a = a.target;
            D &&
              a instanceof Node &&
              !((b = D.current) == null ? void 0 : b.contains(a)) &&
              E &&
              a instanceof Node &&
              !((b = E.current) == null ? void 0 : b.contains(a)) &&
              (C(!1),
              c("MPNStorage").clearRedirectCommand(),
              c("MPNXDMessageManager").updateShouldShowLoginPage(!1));
          }
          document.addEventListener("mousedown", a);
          return function () {
            document.removeEventListener("mousedown", a);
          };
        },
        [D, E]
      );
      e =
        d("MPNIdentity").MPNIdentity.currentUserState() ==
        d("MPNIdentity").MPNIdentityState.FB;
      q = i._("Discuter avec {pageName}", [i._param("pageName", q)]);
      var F = u === "compact",
        G = function (a, b) {
          var e = F
              ? d("LiveChatPluginConstants")
                  .WELCOME_PAGE_GUEST_FALLBACK_HEIGHT_WITH_COMPACT
              : d("LiveChatPluginConstants").WELCOME_PAGE_GUEST_FALLBACK_HEIGHT,
            f = F
              ? d("LiveChatPluginConstants")
                  .WELCOME_PAGE_NO_GUEST_FALLBACK_HEIGHT_WITH_COMPACT
              : d("LiveChatPluginConstants")
                  .WELCOME_PAGE_NO_GUEST_FALLBACK_HEIGHT,
            g = F
              ? d("LiveChatPluginConstants")
                  .MAIN_IFRAME_PADDING_HEIGHT_WITH_COMPACT
              : d("LiveChatPluginConstants").MAIN_IFRAME_PADDING_HEIGHT,
            h = F
              ? d("LiveChatPluginConstants")
                  .WELCOME_PAGE_ATTRIBUTION_OFFSET_HEIGHT_WITH_COMPACT
              : d("LiveChatPluginConstants")
                  .WELCOME_PAGE_ATTRIBUTION_OFFEST_HEIGHT;
          a = a ? e : f;
          b instanceof HTMLElement && (a = b.offsetHeight);
          e = a + g + h;
          c("MPNXDMessageManager").resizeIframe(e);
        };
      u = c("useResizeObserver")(function (a, b) {
        G(h, b);
      });
      var H = F ? p : o,
        I = F
          ? d("MPNConstants").MPNAvailablityIconSize.MEDIUM
          : d("MPNConstants").MPNAvailablityIconSize.LARGE,
        J = F ? "_a3jw" : "_a3jx";
      r = e
        ? r
        : (e = s) != null
        ? e
        : d("LiveChatPluginFbts").DEFAULT_LOGGED_IN_GREETING_TEXT;
      e =
        (s = v) != null
          ? s
          : d("LiveChatPluginFbts").DEFAULT_AWAY_GREETING_TEXT.toString();
      v = w && x ? e : r;
      var K = function () {
        var a = d("MPNIdentity").MPNIdentity.currentUserID();
        if (a == null) return;
        d("LiveChatPluginLoggerUtil").logActionFromNewUI(
          "chat_plugin_minimize",
          a,
          t,
          "welcome_page"
        );
      };
      s = j.jsx("div", {
        ref: D,
        className: "_9l4n",
        children: j.jsx(c("MPNNewWelcomePageButtom.react"), {
          onClick: function () {
            C(!0);
            var a = c("MPNStorage").getFBStorageState();
            a != null &&
              c("MPNStorage").setFBStorageState(
                babelHelpers["extends"]({}, a, {
                  rdr: d("MPNConstants").MPNRedirect.SHOW_LOGIN_PAGE,
                })
              );
            c("MPNXDMessageManager").updateShouldShowLoginPage(!0);
          },
          shouldShowLoginPage: a.shouldShowLoginPage,
          hasGuestMode: h,
        }),
      });
      var L = function () {
        var c = A === "welcome_message" || A === "hide";
        d("MPNNavigation").navigateToRoute(
          b,
          a.history,
          d("MPNLocalState").MPNLocalStatePath.REENGAGEMENT_COLLAPSED_VIEW
        );
        z.isGreetingDismissed !== !0 &&
          c &&
          d("MPNNavigation").maximizeGreetingDialog(b);
      };
      return j.jsxs("div", {
        "data-testid": void 0,
        ref: u,
        className:
          "_94vf" +
          (g === "left" ? " _9pmu" : "") +
          (g === "right" ? " _9pmv" : ""),
        onClick: function (a) {
          a.stopPropagation();
        },
        role: "none",
        children: [
          j.jsx("div", {
            className: B ? "_a6s5" : "",
            children: j.jsxs("div", {
              className: "welcomePageModalSheetContent",
              children: [
                j.jsxs("div", {
                  className: "_a2zp",
                  children: [
                    j.jsx(c("MessagingPluginDesktopProfilePicture.react"), {
                      className: J,
                      availablityIconSize: I,
                    }),
                    j.jsx("div", { className: "_9dxh" }),
                    j.jsxs("div", {
                      className: "_9dzn",
                      children: [
                        j.jsx(c("BasePopoverTrigger.react"), {
                          popover: c(
                            "MessagingPluginDesktopInformationDropDownMenu.react"
                          ),
                          popoverProps: {},
                          children: function (a, b) {
                            return j.jsx("div", {
                              ref: a,
                              children: j.jsx(
                                c("MPNHeaderActionButton.react"),
                                {
                                  testid: void 0,
                                  label: i._("Plus"),
                                  onPress: b,
                                  children: j.jsx(
                                    c("MPNMoreInfoButtonSVG.react"),
                                    {}
                                  ),
                                }
                              ),
                            });
                          },
                        }),
                        j.jsx("div", {
                          "data-testid": void 0,
                          className: "_9q4i",
                          children: j.jsx(c("MPNHeaderActionButton.react"), {
                            label: i._("fermer"),
                            onPress: function () {
                              var b;
                              y
                                ? L()
                                : (b = a.ActionDelegate) == null
                                ? void 0
                                : b.minimize();
                              K();
                            },
                            children: j.jsx(c("MPNMinusButtonSVG.react"), {}),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                j.jsxs(c("FlexLayout.react"), {
                  align: "center",
                  className_DO_NOT_USE: "_a2zr",
                  children: [
                    j.jsx(c("LineClamp.react"), {
                      lines: 1,
                      children: j.jsx("strong", { children: q }),
                    }),
                    f && f !== "not_verified"
                      ? j.jsx("span", {
                          className: "_a2m5",
                          children: j.jsx(c("MPNVerifiedBadge.react"), {
                            verificationStatus: f,
                            size: H,
                          }),
                        })
                      : null,
                  ],
                }),
                j.jsx(c("MPNPageResponsivenessText.react"), {}),
                j.jsx(c("LineClamp.react"), {
                  lines: 3,
                  className: "_a2zt _a6s6",
                  children: v,
                }),
                s,
                j.jsx(c("ChatPluginMessengerAttribution.react"), {}),
              ],
            }),
          }),
          j.jsx("div", {
            ref: E,
            className: "_a8d4 _9l4n",
            children:
              B &&
              j.jsx("div", {
                className: "_a6w9",
                children: j.jsx("div", {
                  className: "_a8d3",
                  children: j.jsx(
                    c("MPNDesktopLoginModal.react"),
                    babelHelpers["extends"]({}, a, { isPreview: a.isPreview })
                  ),
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
  "MPNDesktopWelcomePageModal.react",
  [
    "cx",
    "BootloaderResource",
    "JSResource",
    "MPNDesktopWelcomePageModalView.react",
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
      var e = b.prototype;
      e.render = function () {
        var a = this.context.state.isSanitizedEpd3pdRequest;
        return i.jsx("div", {
          children: i.jsx("div", {
            role: "none",
            onMouseEnter: function () {
              a ||
                d("BootloaderResource").preload(
                  c("JSResource")("MessagingPluginDialogBody.react").__setRef(
                    "MPNDesktopWelcomePageModal.react"
                  )
                );
            },
            className: "_94ve",
            children: i.jsx(
              c("MPNDesktopWelcomePageModalView.react"),
              babelHelpers["extends"]({}, this.props)
            ),
          }),
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
  "MPNDesktopITPContinuePage.react",
  [
    "MPNConstants",
    "MPNDesktopWelcomePageModal.react",
    "MPNXDMessageManager",
    "MessagingPluginContext",
    "MessagingPluginPathUtils",
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
      e.componentDidMount = function () {
        var a = this.context.state,
          b = a.alignment,
          e = a.bottomSpacing,
          f = a.sideSpacing,
          g = a.entryPointLabel,
          h = a.entryPointSize,
          i = a.optimisticStorageState,
          j = a.windowSize;
        a = a.shouldShowReEngagement;
        i = i.visibility === d("MPNConstants").MPNVisibility.NOT_HIDDEN;
        c("MPNXDMessageManager").setupDesktopIframe(
          b,
          e,
          f,
          d("MessagingPluginPathUtils").MPN_PATH.ITPCONTINUE,
          i,
          !0,
          g,
          h,
          j,
          a
        );
      };
      e.render = function () {
        try {
          return h.jsx(c("MPNDesktopWelcomePageModal.react"), {
            ActionDelegate: this.props.ActionDelegate,
            history: this.props.history,
            useITPContinueButton: !0,
          });
        } catch (a) {}
      };
      return b;
    })(h.Component);
    a.contextType = c("MessagingPluginContext");
    g["default"] = a;
  },
  98
);
__d(
  "MPNDesktopIcon.react",
  [
    "ChatPluginEntryPoint.react",
    "ClickableArea.react",
    "LiveChatPluginLoggerUtil",
    "MPNXDMessageManager",
    "cr:352",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(e, a);
      function e() {
        var b, e;
        for (var f = arguments.length, g = new Array(f), h = 0; h < f; h++)
          g[h] = arguments[h];
        return (
          ((b = e = a.call.apply(a, [this].concat(g)) || this),
          (e.state = { visibility: e.props.initialVisibility, disabled: !1 }),
          (e.$1 = function () {
            if (e.state.disabled == !0) return;
            else
              c("MPNXDMessageManager").markInteraction(),
                e.props.actionDelegate.togglePluginVisibility(),
                e.setState({ disabled: !0 }),
                window.setTimeout(function () {
                  e.setState({ disabled: !1 });
                }, 350),
                d("LiveChatPluginLoggerUtil").logEntryPointClick(
                  e.props.entryPointIconEnum,
                  e.props.entryPointLabel,
                  e.props.pageID
                );
          }),
          b) || babelHelpers.assertThisInitialized(e)
        );
      }
      var f = e.prototype;
      f.render = function () {
        var a = this.props,
          d = a.alignment,
          e = a.entryPointIconSVG,
          f = a.entryPointLabel,
          g = a.entryPointSize,
          i = a.threadColor;
        a = a.shouldUseNewDomain;
        try {
          b("cr:352") == null
            ? void 0
            : b("cr:352").logChatPluginLandingLoadModuleEndSuccess();
          return h.jsx(c("ClickableArea.react"), {
            "data-testid": void 0,
            onClick: this.$1,
            children: h.jsx("div", {
              style: { cursor: "pointer" },
              children: h.jsx(c("ChatPluginEntryPoint.react"), {
                alignment: d,
                entryPointIcon: e,
                entryPointLabel: f,
                entryPointSize: g,
                threadColor: i,
                isSocialPluginDomain: a,
              }),
            }),
          });
        } catch (a) {
          b("cr:352") == null
            ? void 0
            : b("cr:352").logChatPluginLandingLoadModuleEndFail();
        }
      };
      return e;
    })(h.Component);
    g["default"] = a;
  },
  98
);
__d(
  "MPNDesktopMessageComposer.react",
  [
    "cx",
    "fbt",
    "AbstractTextInput.react",
    "JSResource",
    "Keys",
    "LiveChatPluginAttachmentUploadError",
    "LiveChatPluginLoggerUtil",
    "LiveChatPluginMessageComposerAttachmentShelf.react",
    "LiveChatPluginSendButtonSVG.react",
    "MPNDesktopBotMenuButton.react",
    "MPNDesktopGuestAttachmentButton.react",
    "MPNIdentity",
    "MPNLocalState",
    "MPNPaperclipIconSVG.react",
    "MercuryIDs",
    "MercuryMessageActions",
    "MercuryMessageObject",
    "MessagingPluginContext",
    "ShimButton.react",
    "Tooltip.react",
    "lazyLoadComponent",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
      k = c("lazyLoadComponent")(
        c("JSResource")("MPNAttachmentInput.react").__setRef(
          "MPNDesktopMessageComposer.react"
        )
      );
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, e) {
        var f;
        f = a.call(this, b, e) || this;
        f.state = {
          attachmentsDataMap: new Map(),
          error: c("LiveChatPluginAttachmentUploadError").NO_ERROR,
          inputValue: "",
          uploadingAttachments: new Set(),
        };
        f.$18 = function (a) {
          f.props.onChange(),
            f.setState({
              error: c("LiveChatPluginAttachmentUploadError").NO_ERROR,
              inputValue: a.target.value,
            });
        };
        f.$19 = function (a) {
          a.keyCode === c("Keys").RETURN && (a.preventDefault(), f.$17());
        };
        f.$17 = function () {
          var a,
            b = d("MPNIdentity").MPNIdentity.currentUserState(),
            c = f.context.state;
          a = (a = c.messageStore) == null ? void 0 : a.sendQueue;
          var e =
              a == null
                ? void 0
                : a.prepareAttachmentsForMessage(f.$1, f.$3, f.$4, f.$10),
            g = f.state.inputValue.trim();
          if (
            !(a == null
              ? void 0
              : a.canQueueMessage(
                  g,
                  f.state.uploadingAttachments.size !== 0,
                  e
                ))
          )
            return;
          a.enqueueAndSend(
            g,
            b === d("MPNIdentity").MPNIdentityState.FB,
            c.refererUri,
            null,
            e
          );
          f.$20();
          f.setState({ inputValue: "" });
          a =
            b === d("MPNIdentity").MPNIdentityState.FB
              ? d("MPNIdentity").MPNIdentity.currentUserID()
              : c.guestID;
          d("LiveChatPluginLoggerUtil").logActionUsingFalco(
            (g = a) != null ? g : "",
            c.pageID,
            b === d("MPNIdentity").MPNIdentityState.FB
              ? "logged_in_chat_tab"
              : "guest_chat_tab",
            "message_send"
          );
          c.hasActiveAutomation &&
            d("LiveChatPluginLoggerUtil").logActionFromNewUI(
              "automation_freeform_message_sent",
              d("MPNIdentity").MPNIdentity.currentUserID(),
              c.pageID,
              b === d("MPNIdentity").MPNIdentityState.FB
                ? "logged_in_chat_tab"
                : "guest_chat_tab"
            );
        };
        f.$11 = function (a) {
          f.$2 && f.$2.removeAttachment(a);
        };
        f.$15 = function (a) {
          f.setState({ error: a });
        };
        f.$16 = function (a, b, d, e, g, h) {
          d && (f.$1 = d),
            e && (f.$3 = e),
            g && (f.$4 = g),
            h && (f.$10 = h),
            f.setState({
              attachmentsDataMap: new Map(a),
              error: c("LiveChatPluginAttachmentUploadError").NO_ERROR,
              uploadingAttachments: new Set(b),
            }),
            f.focus();
        };
        b = f.context.state.pageID;
        e = d("MPNIdentity").MPNIdentity.currentUserID();
        if (e == null) return babelHelpers.assertThisInitialized(f);
        f.$6 = c("MercuryMessageActions").getForFBID(e);
        f.$7 = c("MercuryMessageObject").getForFBID(e);
        f.$8 = d("MercuryIDs").getThreadIDFromUserID(b);
        f.$9 = d("LiveChatPluginLoggerUtil").getAttributionTags();
        f.$1 = [];
        f.$3 = [];
        f.$4 = [];
        f.$10 = [];
        return f;
      }
      var e = b.prototype;
      e.componentDidMount = function () {
        this.focus();
      };
      e.render = function () {
        return j.jsxs("div", {
          className:
            (this.context.state.isComposerDisabled ? "_664i" : "") + " _94vs",
          children: [
            j.jsx(c("LiveChatPluginMessageComposerAttachmentShelf.react"), {
              attachments: this.state.attachmentsDataMap,
              error: this.state.error,
              removeAttachment: this.$11,
              threadColor: this.context.state.threadColor,
              uploadingAttachments: this.state.uploadingAttachments,
            }),
            j.jsxs("div", {
              className: "_94vt",
              children: [this.$12(), this.$13(), this.$14()],
            }),
          ],
        });
      };
      e.$12 = function () {
        var a = this,
          b = this.context.state,
          e = b.isComposerDisabled,
          f = b.optimisticStorageState;
        b = b.showUpgradeUpsellPrompt;
        if (
          e ||
          f.chatState === d("MPNLocalState").MPNChatState.CHAT_NOT_STARTED
        )
          return null;
        if (
          d("MPNIdentity").MPNIdentity.currentUserState() ===
          d("MPNIdentity").MPNIdentityState.GUEST
        )
          if (b === !0)
            return j.jsx(c("MPNDesktopGuestAttachmentButton.react"), {
              threadColor: this.context.state.threadCSSColor,
            });
          else return null;
        e = d("MPNIdentity").MPNIdentity.currentUserID();
        return e == null
          ? null
          : j.jsx(j.Suspense, {
              fallback: j.jsx("div", {
                className: "_95jj",
                children: j.jsx(c("MPNPaperclipIconSVG.react"), {
                  color: this.context.state.threadCSSColor,
                }),
              }),
              children: j.jsx(k, {
                pageID: this.context.state.pageID,
                ref: function (b) {
                  a.$2 = b;
                },
                setComposerAttachmentError: this.$15,
                updateComposerAttachmentsAndIDs: this.$16,
                viewerID: e,
                isMobile: !1,
              }),
            });
      };
      e.$14 = function () {
        var a = this.context.state,
          b = a.isComposerDisabled;
        a = a.threadCSSColor;
        var d = this.state.inputValue.trim();
        d = d.length === 0 && this.state.attachmentsDataMap.size === 0;
        return d || b
          ? j.jsx(c("MPNDesktopBotMenuButton.react"), {
              onClick: this.props.onClick,
            })
          : j.jsx(c("Tooltip.react"), {
              tooltip: i._("Envoyer"),
              children: j.jsx(c("ShimButton.react"), {
                "aria-label": i._("Envoyer"),
                className: "_4bqf _95jk _9jru",
                "data-testid": void 0,
                onClick: this.$17,
                children: j.jsx(c("LiveChatPluginSendButtonSVG.react"), {
                  threadColor: a,
                }),
              }),
            });
      };
      e.$13 = function () {
        var a = this,
          b = this.context.state.isComposerDisabled,
          d = i._(
            "Saisie clavier d\u00e9sactiv\u00e9e pour cette conversation."
          );
        return b
          ? j.jsx("div", { className: "_664k", children: d })
          : j.jsx("div", {
              className: "_94vv",
              children: j.jsx(c("AbstractTextInput.react"), {
                "data-testid": void 0,
                onBlur: this.props.onBlur,
                onChange: this.$18,
                onClick: this.props.onClick,
                onFocus: this.props.onFocus,
                onKeyDown: this.$19,
                ref: function (b) {
                  a.$5 = b;
                },
                placeholder: i._("Posez une question\u2026").toString(),
                value: this.state.inputValue,
              }),
            });
      };
      e.$20 = function () {
        this.$2 && this.$2.removeAllAttachments();
      };
      e.focus = function () {
        this.$5 && this.$5.focusInput();
      };
      return b;
    })(j.PureComponent);
    a.contextType = c("MessagingPluginContext");
    g["default"] = a;
  },
  98
);
__d(
  "ChatPluginGreetingTextEmptyDialog.react",
  [
    "MPNConstants",
    "MPNLocalState",
    "MPNNavigation",
    "MPNXDMessageManager",
    "MessagingPluginContext",
    "MessagingPluginPathUtils",
    "react",
    "useResizeObserver",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useContext,
      j = b.useEffect;
    function a(a) {
      var b = i(c("MessagingPluginContext")),
        e = c("useResizeObserver")(function (a, b) {
          c("MPNXDMessageManager").resizeIframe(0, !1);
        }),
        f = b.state,
        g = f.alignment,
        k = f.bottomSpacing,
        l = f.sideSpacing,
        m = f.entryPointLabel,
        n = f.entryPointSize,
        o = f.windowSize,
        p = f.shouldShowReEngagement;
      j(
        function () {
          c("MPNXDMessageManager").subscribeEvent(
            "plugin_welcome_message_page",
            "message",
            "navigateToWelcomePage",
            function (e) {
              e = e.data.isHidden === "true";
              d("MPNNavigation").navigateToRoute(
                b,
                a.history,
                d("MPNLocalState").MPNLocalStatePath.WELCOME_PAGE,
                !1
              );
              var f = e
                ? d("MPNConstants").MPNVisibility.HIDDEN
                : d("MPNConstants").MPNVisibility.NOT_HIDDEN;
              c("MPNXDMessageManager").updateMainIframeVisibility(f);
              b.dispatchAction({
                type: "UPDATE_DIALOG_VISIBILITY",
                dialogVisibility: f,
              });
              c("MPNXDMessageManager").setupDesktopIframe(
                (f = g) != null ? f : "right",
                (f = k) != null ? f : 0,
                (f = l) != null ? f : 0,
                d("MessagingPluginPathUtils").MPN_PATH.WELCOME,
                !e,
                null,
                m,
                n,
                (f = o) != null ? f : "standard",
                p
              );
            }
          );
          return function () {
            c("MPNXDMessageManager").unsubscribeEvent(
              "plugin_welcome_message_page",
              "message",
              "navigateToWelcomePage"
            );
          };
        },
        [g, k, l, m, n, o, p, a.history, b]
      );
      return h.jsx("div", { ref: e });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "MPNDesktopThreadPage.react",
  [
    "cx",
    "JSResource",
    "LiveChatPluginConstants",
    "LiveChatPluginLoggerUtil",
    "MPNBlockedPageComposer.react",
    "MPNConstants",
    "MPNDesktopDialogHeader.react",
    "MPNDesktopGuestUpgradeUpsellPrompt.react",
    "MPNDesktopMessageComposer.react",
    "MPNEndChatPrompt.react",
    "MPNIdentity",
    "MPNLocalState",
    "MPNUpgradePopover.react",
    "MPNXDMessageManager",
    "MessagingPluginContext",
    "MessengerSpinner.react",
    "MessengerState.bs",
    "lazyLoadComponent",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = c("lazyLoadComponent")(
        c("JSResource")("MessagingPluginDialogBody.react").__setRef(
          "MPNDesktopThreadPage.react"
        )
      );
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
          e[f] = arguments[f];
        return (
          ((b = c = a.call.apply(a, [this].concat(e)) || this),
          (c.state = { dialogBodyHeight: -1 }),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      var e = b.prototype;
      e.componentDidMount = function () {
        var a = this.$2();
        c("MPNXDMessageManager").resizeIframe(a);
      };
      e.$2 = function () {
        var a = this.context.state.windowSize;
        a = a === "compact";
        var b = a
          ? d("LiveChatPluginConstants").THREAD_PAGE_HEIGHT_COMPACT
          : d("LiveChatPluginConstants").THREAD_PAGE_HEIGHT;
        a = a
          ? d("LiveChatPluginConstants").MAIN_IFRAME_PADDING_HEIGHT_WITH_COMPACT
          : d("LiveChatPluginConstants").MAIN_IFRAME_PADDING_HEIGHT;
        return b + a;
      };
      e.render = function () {
        var a = this,
          b = this.context.state,
          e = b.optimisticStorageState,
          f = b.pageID,
          g = b.isPageBlocked;
        b = b.showUpgradeUpsellPrompt;
        var h = d("MPNIdentity").MPNIdentity.currentUserID(),
          k =
            d("MPNIdentity").MPNIdentity.currentUserState() ===
            d("MPNIdentity").MPNIdentityState.GUEST;
        try {
          return i.jsx("div", {
            role: "none",
            className: "_94vg",
            children: i.jsxs(
              "div",
              {
                className: "_94vh",
                children: [
                  i.jsx(c("MPNDesktopDialogHeader.react"), {
                    ActionDelegate: this.props.ActionDelegate,
                    history: this.props.history,
                  }),
                  i.jsxs("div", {
                    className: "_424s",
                    children: [
                      e.chatState ===
                        d("MPNLocalState").MPNChatState.CHAT_NOT_STARTED &&
                        i.jsx("div", {
                          className: "spinner",
                          children: i.jsx(c("MessengerSpinner.react"), {
                            color: "blue",
                            size: c("MessengerSpinner.react").large_size,
                          }),
                        }),
                      i.jsx(i.Suspense, {
                        fallback: i.jsx("div", {
                          className: "spinner",
                          children: i.jsx(c("MessengerSpinner.react"), {
                            color: "blue",
                            size: c("MessengerSpinner.react").large_size,
                          }),
                        }),
                        children:
                          e.chatState !==
                            d("MPNLocalState").MPNChatState.CHAT_NOT_STARTED &&
                          i.jsx(d("MessengerState.bs").jsComponent, {
                            fbid: h,
                            children: function (b) {
                              return i.jsx(j, {
                                deliveryReceipt:
                                  d("MessengerState.bs").deliveryReceipts(b),
                                dialogBodyHeight: a.state.dialogBodyHeight,
                                messengerState: b,
                                readReceipt: null,
                                sendRef: function () {},
                              });
                            },
                          }),
                      }),
                    ],
                  }),
                  i.jsx(c("MPNUpgradePopover.react"), {}),
                  e.showUpgradePrompt == null ||
                  e.showUpgradePrompt ===
                    d("MPNConstants").MPNUpgradePrompt.NOT_SHOWN ||
                  !b
                    ? null
                    : i.jsx(c("MPNDesktopGuestUpgradeUpsellPrompt.react"), {
                        color: this.context.state.threadCSSColor,
                        prompt:
                          this.context.state.optimisticStorageState
                            .showUpgradePrompt,
                        history: this.props.history,
                      }),
                  i.jsx(c("MPNEndChatPrompt.react"), {
                    isGuest: k,
                    history: this.props.history,
                    shouldMinimize: !1,
                  }),
                  i.jsx("div", {
                    className:
                      e.chatState ===
                      d("MPNLocalState").MPNChatState.CHAT_NOT_STARTED
                        ? "_91hz"
                        : "",
                    children:
                      g &&
                      e.chatState ===
                        d("MPNLocalState").MPNChatState.LOGGED_IN_CHAT_STARTED
                        ? i.jsx(c("MPNBlockedPageComposer.react"), {})
                        : i.jsx(c("MPNDesktopMessageComposer.react"), {
                            onBlur: function () {},
                            onChange: function () {},
                            onClick: function () {},
                            onFocus: function () {},
                            ref: function (b) {
                              return (a.$1 = b);
                            },
                          }),
                  }),
                ],
              },
              "dialog_container"
            ),
          });
        } catch (a) {
          d(
            "LiveChatPluginLoggerUtil"
          ).logImpressionExceptionsFromNewUI_UnsafeFor3PD(
            "tab_load_failure",
            f,
            d("MPNIdentity").MPNIdentity.currentUserState() ===
              d("MPNIdentity").MPNIdentityState.FB
              ? "logged_in_chat_tab"
              : "guest_chat_tab",
            a.name,
            a.message,
            a.stack
          );
        }
      };
      return b;
    })(i.Component);
    a.contextType = c("MessagingPluginContext");
    g["default"] = a;
  },
  98
);
__d(
  "MPNDesktopWelcomePage.react",
  ["MPNDesktopWelcomePageModal.react", "MessagingPluginContext", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var d = b.prototype;
      d.render = function () {
        var a;
        a =
          (a = this.props.history.location.state) == null
            ? void 0
            : a.shouldShowLoginPage;
        try {
          return h.jsx(c("MPNDesktopWelcomePageModal.react"), {
            ActionDelegate: this.props.ActionDelegate,
            history: this.props.history,
            useITPContinueButton: !1,
            shouldShowLoginPage: a === !1 ? a : this.props.shouldShowLoginPage,
          });
        } catch (a) {}
      };
      return b;
    })(h.Component);
    a.contextType = c("MessagingPluginContext");
    g["default"] = a;
  },
  98
);
__d(
  "MessagingPluginDesktopWelcomeMessagePage.react",
  [
    "ChatPluginStyleUtils",
    "ChatPluginTestId",
    "LiveChatPluginFbts",
    "LiveChatPluginLoggerUtil",
    "MPNConstants",
    "MPNDialogMinusButtonSVG.react",
    "MPNLocalState",
    "MPNNavigation",
    "MPNXDMessageManager",
    "MessagingPluginContext",
    "MessagingPluginPathUtils",
    "ShimButton.react",
    "react",
    "useResizeObserver",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
      j = b.useContext,
      k = b.useEffect,
      l = b.useRef,
      m = b.useState;
    function a(a) {
      var b,
        e = j(c("MessagingPluginContext"));
      e = (b = a.context) != null ? b : e;
      b = e.state;
      var f = b.alignment,
        g = b.bottomSpacing,
        n = b.sideSpacing,
        o = b.loggedInGreeting,
        p = b.entryPointLabel,
        q = b.entryPointSize,
        r = b.windowSize,
        s = b.awayGreeting,
        t = b.awayHoursEnabled,
        u = b.isPageAway,
        v = b.shouldShowReEngagement,
        w = b.optimisticStorageState;
      b = m(!1);
      var x = b[0],
        y = b[1];
      b = l(null);
      var z = c("useResizeObserver")(function (a, b) {
          a = b.clientHeight + 12;
          c("MPNXDMessageManager").resizeIframe(a, v);
        }),
        A = function () {
          a.ActionDelegate && a.ActionDelegate.minimize(),
            window.setTimeout(function () {
              var b;
              d("MPNNavigation").navigateToRoute(
                e,
                a.history,
                d("MPNLocalState").MPNLocalStatePath.WELCOME_PAGE
              );
              c("MPNXDMessageManager").setupDesktopIframe(
                (b = f) != null ? b : "right",
                (b = g) != null ? b : 0,
                (b = n) != null ? b : 0,
                d("MessagingPluginPathUtils").MPN_PATH.WELCOME,
                !1,
                null,
                p,
                q,
                (b = r) != null ? b : "standard",
                v
              );
              b = {
                path: d("MPNLocalState").MPNLocalStatePath.WELCOME_PAGE,
                chatState: d("MPNLocalState").MPNChatState.CHAT_NOT_STARTED,
                visibility: d("MPNConstants").MPNVisibility.HIDDEN,
              };
              e.dispatchAction({
                type: "START_CHAT",
                optimisticStorageState: b,
              });
            }, 100);
        },
        B = function () {
          d("MPNNavigation").minimizeGreetingDialog(e),
            d("MPNNavigation").dismissGreetingDialog(e),
            w.path === d("MPNLocalState").MPNLocalStatePath.BUBBLE &&
              c("MPNXDMessageManager").navigateToWelcomePage(!0);
        },
        C = i(
          function () {
            window.setTimeout(function () {
              var b;
              d("MPNNavigation").navigateToRoute(
                e,
                a.history,
                d("MPNLocalState").MPNLocalStatePath.WELCOME_PAGE
              );
              c("MPNXDMessageManager").setupDesktopIframe(
                (b = f) != null ? b : "right",
                (b = g) != null ? b : 0,
                (b = n) != null ? b : 0,
                d("MessagingPluginPathUtils").MPN_PATH.WELCOME,
                !0,
                null,
                p,
                q,
                (b = r) != null ? b : "standard",
                v
              );
              b = {
                path: d("MPNLocalState").MPNLocalStatePath.WELCOME_PAGE,
                chatState: d("MPNLocalState").MPNChatState.CHAT_NOT_STARTED,
                visibility: d("MPNConstants").MPNVisibility.NOT_HIDDEN,
              };
              e.dispatchAction({
                type: "START_CHAT",
                optimisticStorageState: b,
              });
            }, 100);
          },
          [f, g, n, p, q, r, v, e, a.history]
        );
      k(
        function () {
          if (!v) {
            c("MPNXDMessageManager").subscribeEvent(
              "plugin_welcome_message_page",
              "message",
              "navigateToWelcomePage",
              function (a) {
                y(!0), C();
              }
            );
            return function () {
              c("MPNXDMessageManager").unsubscribeEvent(
                "plugin_welcome_message_page",
                "message",
                "navigateToWelcomePage"
              );
            };
          }
        },
        [v, C]
      );
      var D = function () {
          d("LiveChatPluginLoggerUtil").logActionFromNewUI(
            "tab_click",
            null,
            e.state.pageID,
            "plugin_icon",
            { opened_tab: "bubble" }
          );
        },
        E = function () {
          c("MPNXDMessageManager").markInteraction(), C(), D();
        },
        F = function () {
          d("MPNNavigation").minimizeGreetingDialog(e),
            d("MPNNavigation").dismissGreetingDialog(e),
            c("MPNXDMessageManager").markInteraction(),
            c("MPNXDMessageManager").navigateToWelcomePage(!1),
            D();
        },
        G = d("ChatPluginStyleUtils").getWelcomeMessageBubbleStyle(
          f === "left",
          "desktop"
        ),
        H = d("ChatPluginStyleUtils").getWelcomeMessageTextStyle(
          f === "left",
          "desktop"
        ),
        I = d("ChatPluginStyleUtils").getMinusButtonStyle(
          f === "left",
          "desktop"
        );
      x = d("ChatPluginStyleUtils").getMinusButtonVisibility(x);
      var J = d("ChatPluginStyleUtils").getNoOutlineFocus();
      o =
        (o = o) != null
          ? o
          : d("LiveChatPluginFbts").DEFAULT_LOGGED_IN_GREETING_TEXT.toString();
      s =
        (s = s) != null
          ? s
          : d("LiveChatPluginFbts").DEFAULT_AWAY_GREETING_TEXT.toString();
      t = t && u ? s : o;
      return h.jsxs("div", {
        style: x,
        ref: b,
        children: [
          h.jsx(c("ShimButton.react"), {
            onClick: v ? F : E,
            children: h.jsx("div", {
              "data-testid": void 0,
              style: G,
              ref: z,
              children: h.jsx("div", { style: H, children: t }),
            }),
          }),
          h.jsx("div", {
            style: I,
            children: h.jsx(c("ShimButton.react"), {
              "data-testid": void 0,
              onClick: v ? B : A,
              style: J,
              children: h.jsx(c("MPNDialogMinusButtonSVG.react"), {}),
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
  "MPNDesktopRoute.react",
  [
    "ChatPluginDesktopReEngagementExpandedDialog.react",
    "ChatPluginGreetingTextEmptyDialog.react",
    "ChatPluginReEngagementCollapsedDialog.react",
    "MPNDesktopITPContinuePage.react",
    "MPNDesktopThreadPage.react",
    "MPNDesktopWelcomePage.react",
    "MessagingPluginDesktopWelcomeMessagePage.react",
    "MessagingPluginPathUtils",
    "ReactRouterDOM",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    var h = d("react");
    function a(a) {
      var b = a.path,
        e = a.ActionDelegate,
        f = a.shouldShowLoginPage,
        g = a.shouldShowReEngagement;
      return h.jsx(d("ReactRouterDOM").BrowserRouter, {
        children: h.jsxs(d("ReactRouterDOM").Switch, {
          children: [
            h.jsx(d("ReactRouterDOM").Route, {
              render: function (a) {
                return h.jsx(
                  c("MPNDesktopWelcomePage.react"),
                  babelHelpers["extends"]({}, a, {
                    ActionDelegate: e,
                    shouldShowLoginPage: f,
                  })
                );
              },
              exact: !0,
              path: d("MessagingPluginPathUtils").MPN_PATH.WELCOME,
            }),
            h.jsx(d("ReactRouterDOM").Route, {
              render: function (a) {
                return h.jsx(
                  c("MPNDesktopITPContinuePage.react"),
                  babelHelpers["extends"]({}, a, { ActionDelegate: e })
                );
              },
              exact: !0,
              path: d("MessagingPluginPathUtils").MPN_PATH.ITPCONTINUE,
            }),
            h.jsx(d("ReactRouterDOM").Route, {
              render: function (a) {
                return h.jsx(
                  c("MPNDesktopThreadPage.react"),
                  babelHelpers["extends"]({}, a, { ActionDelegate: e })
                );
              },
              exact: !0,
              path: d("MessagingPluginPathUtils").MPN_PATH.THREAD,
            }),
            h.jsx(d("ReactRouterDOM").Route, {
              render: function (a) {
                return g
                  ? h.jsx(
                      c("ChatPluginGreetingTextEmptyDialog.react"),
                      babelHelpers["extends"]({}, a)
                    )
                  : h.jsx(
                      c("MessagingPluginDesktopWelcomeMessagePage.react"),
                      babelHelpers["extends"]({}, a, { ActionDelegate: e })
                    );
              },
              exact: !0,
              path: d("MessagingPluginPathUtils").MPN_PATH.BUBBLE,
            }),
            h.jsx(d("ReactRouterDOM").Route, {
              render: function (a) {
                return h.jsx(
                  c("ChatPluginReEngagementCollapsedDialog.react"),
                  babelHelpers["extends"]({}, a, {
                    isPreview: !1,
                    isMobile: !1,
                  })
                );
              },
              exact: !0,
              path: d("MessagingPluginPathUtils").MPN_PATH
                .REENGAGEMENT_COLLAPSED,
            }),
            h.jsx(d("ReactRouterDOM").Route, {
              render: function (a) {
                return h.jsx(
                  c("ChatPluginDesktopReEngagementExpandedDialog.react"),
                  babelHelpers["extends"]({}, a, {
                    ActionDelegate: e,
                    isPreview: !1,
                  })
                );
              },
              exact: !0,
              path: d("MessagingPluginPathUtils").MPN_PATH
                .REENGAGEMENT_EXPANDED,
            }),
            h.jsx(d("ReactRouterDOM").Redirect, { to: b }),
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
  "MPNDesktopWrapper.react",
  [
    "Arbiter",
    "Bootloader",
    "ChatPluginEntryPoint.react",
    "ChatPluginStyleUtils",
    "CreateCustomerChatPluginGuestUserMutation",
    "LiveChatMqttClient",
    "LiveChatPluginConstants",
    "LiveChatPluginLoggerUtil",
    "MPNConstants",
    "MPNDesktopIcon.react",
    "MPNDesktopRoute.react",
    "MPNEntryPointAvailabilityStatusIcon.react",
    "MPNIdentity",
    "MPNLocalState",
    "MPNNavigation",
    "MPNStorage",
    "MPNUnreadCountBadge.react",
    "MPNXDMessageManager",
    "MessagingPluginContext",
    "MessagingPluginDesktopWelcomeMessagePage.react",
    "MessagingPluginGuestUpgradeActions",
    "MessagingPluginPathUtils",
    "MessagingPluginSDKActionUtil",
    "MessagingPluginThreadActions",
    "ReactDOM",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
      i = {
        NONE: 0,
        CREATE_GUEST_SESSION: 1,
        START_NEW_THREAD: 2,
        GUEST_UPGRADE: 3,
        GUEST_UPGRADE_SWITCH_ACCOUNT: 4,
        SHOW_LOGIN_PAGE: 5,
        RE_ENGAGEMENT_LOG_IN: 6,
        RE_ENGAGEMENT_SWITCH_ACCOUNT: 7,
        SWITCH_ACCOUNT: 8,
      };
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b) {
        var e;
        e = a.call(this, b) || this;
        e.actionOnInit = i.NONE;
        e.iconIframeLoaded = !1;
        e.unreadCountIframeLoaded = !1;
        e.$2 = null;
        e.shouldShowLoginPage = !1;
        e.$6 = function (a) {
          var b = e.context.state,
            f = b.pageID;
          b = b.locale;
          d("CreateCustomerChatPluginGuestUserMutation").commit(
            { input: { page_id: f, locale: b } },
            {
              onSuccess: function (b) {
                b = b.create_customer_chat_plugin_guest_user;
                var c = b == null ? void 0 : b.session_key,
                  f = b == null ? void 0 : b.fbid,
                  g = b == null ? void 0 : b.access_token;
                b = b == null ? void 0 : b.is_lightswitch_enabled;
                c != null &&
                  f != null &&
                  g != null &&
                  b != null &&
                  (d("MessagingPluginThreadActions").startChatAsGuest(
                    e.context,
                    g,
                    f,
                    b
                  ),
                  a(f, g));
              },
              onFailure: function (a) {
                c("MPNStorage").clearFBStorageState(),
                  c("MPNStorage").clearThirdPartyStorageState(),
                  c("MPNXDMessageManager").reloadPlugin(),
                  d("LiveChatPluginLoggerUtil").logActionFromNewUI(
                    "guest_session_create_failure",
                    null,
                    f,
                    "guest_chat_tab"
                  );
              },
            }
          );
        };
        e.initialPath = e.$5();
        if (e.props.redirectCommand != null)
          switch (e.props.redirectCommand) {
            case d("MPNConstants").MPNRedirect.NEW_GUEST_SESSION:
              e.actionOnInit = i.CREATE_GUEST_SESSION;
              break;
            case d("MPNConstants").MPNRedirect.FB_LOG_IN:
              e.actionOnInit = i.START_NEW_THREAD;
              break;
            case d("MPNConstants").MPNRedirect.GUEST_UPGRADE:
              e.actionOnInit = i.GUEST_UPGRADE;
              break;
            case d("MPNConstants").MPNRedirect.GUEST_UPGRADE_SWITCH_ACCOUNT:
              e.actionOnInit = i.GUEST_UPGRADE_SWITCH_ACCOUNT;
              break;
            case d("MPNConstants").MPNRedirect.SHOW_LOGIN_PAGE:
              e.actionOnInit = i.SHOW_LOGIN_PAGE;
              break;
            case d("MPNConstants").MPNRedirect.RE_ENGAGEMENT_LOG_IN:
              e.actionOnInit = i.RE_ENGAGEMENT_LOG_IN;
              break;
            case d("MPNConstants").MPNRedirect.RE_ENGAGEMENT_SWITCH_ACCOUNT:
              e.actionOnInit = i.RE_ENGAGEMENT_SWITCH_ACCOUNT;
              break;
            case d("MPNConstants").MPNRedirect.SWITCH_ACCOUNT:
              e.actionOnInit = i.SWITCH_ACCOUNT;
              break;
            default:
              break;
          }
        e.ActionDelegate = {
          onContinueAsGuest: e.$6,
          openThreadWithCurrentFBUser: function () {
            d("MessagingPluginThreadActions").openThreadWithCurrentFBUser(
              e.context,
              !1
            );
          },
          openThreadWithInterstitial: function (a) {
            d("MessagingPluginThreadActions").openThreadWithInterstitial(
              e.context,
              a
            );
          },
          openThreadWithAccessToken: function (a) {
            d("MessagingPluginThreadActions").openThreadWithAccessToken(
              e.context,
              a
            );
          },
          onChatInMessenger: function () {},
          minimize: function () {
            d("MPNNavigation").minimizePlugin(e.context);
          },
          maximize: function () {
            d("MPNNavigation").maximizePlugin(e.context, !1);
          },
          togglePluginVisibility: function () {
            d("MPNNavigation").togglePluginVisibility(e.context, !1);
          },
        };
        e.$1 = window.name;
        return e;
      }
      var e = b.prototype;
      e.$5 = function () {
        var a = this.props.redirectCommand;
        return a === d("MPNConstants").MPNRedirect.NEW_GUEST_SESSION ||
          a === d("MPNConstants").MPNRedirect.FB_LOG_IN ||
          a === d("MPNConstants").MPNRedirect.RE_ENGAGEMENT_LOG_IN
          ? d("MessagingPluginPathUtils").MPN_PATH.THREAD
          : this.props.path;
      };
      e.componentDidMount = function () {
        var a = this.context.state,
          b = a.alignment,
          e = a.bottomSpacing,
          f = a.sideSpacing,
          g = a.optimisticStorageState,
          h = a.entryPointLabel,
          i = a.entryPointSize,
          j = a.windowSize;
        a = a.shouldShowReEngagement;
        g =
          this.initialPath === d("MessagingPluginPathUtils").MPN_PATH.BUBBLE ||
          g.visibility == d("MPNConstants").MPNVisibility.NOT_HIDDEN;
        this.$7();
        c("MPNXDMessageManager").setupDesktopIframe(
          b,
          e,
          f,
          this.initialPath,
          g,
          !0,
          h,
          i,
          j
        );
        !a &&
          this.initialPath === d("MessagingPluginPathUtils").MPN_PATH.BUBBLE &&
          (c("MPNStorage").setVisibility(
            d("MPNConstants").MPNVisibility.NOT_HIDDEN
          ),
          this.context.dispatchAction({
            type: "UPDATE_DIALOG_VISIBILITY",
            dialogVisibility: d("MPNConstants").MPNVisibility.NOT_HIDDEN,
          }));
        this.$8();
        this.$9();
      };
      e.componentWillUnmount = function () {
        this.$3 && window.clearTimeout(this.$3),
          this.$4 && window.clearTimeout(this.$4);
      };
      e.componentDidUpdate = function () {
        this.$9();
      };
      e.$9 = function () {
        var a = this,
          b = this.context.state,
          e = b.optimisticStorageState,
          f = b.pageID,
          g = b.pageName,
          h = b.accessToken;
        b = b.loggedInAccessToken;
        var i = d("MPNIdentity").MPNIdentity.currentUserID();
        if (
          this.$2 == i ||
          e.chatState === d("MPNLocalState").MPNChatState.CHAT_NOT_STARTED ||
          i == null
        )
          return;
        e = d("MPNIdentity").MPNIdentity.currentUserState();
        e === d("MPNIdentity").MPNIdentityState.FB &&
          (c("LiveChatMqttClient").setUp(
            f,
            i,
            null,
            function () {
              return (a.$2 = i);
            },
            b
          ),
          c("Bootloader").loadModules(
            ["LiveChatPluginAlerts", "MercurySyncDeltaHandler"],
            function (a, b) {
              a.init(i, f, g, new Map(), !1, 0),
                b.getForFBID(i),
                c("Arbiter").inform("MercurySyncDeltaHandler/initSeqID", {
                  fbid: i,
                  seqID: 0,
                });
            },
            "MPNDesktopWrapper.react"
          ));
        e === d("MPNIdentity").MPNIdentityState.GUEST &&
          h != null &&
          (c("LiveChatMqttClient").setUp(f, i, null, null, h), (this.$2 = i));
      };
      e.$7 = function () {
        var a = this,
          b = this.context.state,
          e = b.alignment,
          f = b.bottomSpacing,
          g = b.sideSpacing,
          i = b.isLoadedByFacade,
          j = b.entryPointSize,
          k = b.entryPointIconEnum,
          l = b.shouldShowReEngagement,
          m = b.windowSize,
          n = b.entryPointLabel,
          o = b.optimisticStorageState;
        b = b.shouldUseAccessTokenAuth;
        var p = this.context.state;
        b = h.jsx(c("ChatPluginEntryPoint.react"), {
          entryPointIcon: p.entryPointIconSVG,
          entryPointLabel: p.entryPointLabel,
          entryPointSize: j,
          threadColor: p.threadCSSColor,
          alignment: p.alignment,
          isSocialPluginDomain: b,
        });
        c("MPNXDMessageManager").setupIconIframe(
          this.$1,
          e,
          f,
          g,
          b,
          i,
          this.$10(),
          p.entryPointLabel,
          k,
          j,
          l
        );
        c("MPNXDMessageManager").subscribeEvent(
          "plugin_wrapper",
          "message",
          "bubbleFrameLoaded",
          function (b) {
            try {
              if (b.data.frameName != null && !a.iconIframeLoaded) {
                var e = h.jsx(c("MPNDesktopIcon.react"), {
                    alignment: p.alignment,
                    threadColor: p.threadCSSColor,
                    entryPointIconSVG: p.entryPointIconSVG,
                    entryPointIconEnum: p.entryPointIconEnum,
                    entryPointLabel: p.entryPointLabel,
                    entryPointSize: j,
                    actionDelegate: a.ActionDelegate,
                    pageID: p.pageID,
                    pluginRequestTime: b.data.request_time,
                    initialVisibility: p.optimisticStorageState.visibility,
                    clientRequestTime: p.clientRequestTime,
                    logId: b.data.log_id,
                    serverRequestTime: p.serverTime,
                    shouldUseNewDomain: p.shouldUseAccessTokenAuth,
                  }),
                  g = parent.frames[b.data.frameName].document.body;
                d("ReactDOM").render(e, g, "MPNDesktopWrapper.react.js");
                a.iconIframeLoaded = !0;
              }
              if (b.data.unreadCountFrameName != null) {
                e = h.jsx(c("MPNUnreadCountBadge.react"), {});
                g = parent.frames[b.data.unreadCountFrameName].document.body;
                d("ReactDOM").render(e, g, "MPNDesktopWrapper.react.js");
                a.unreadCountIframeLoaded = !0;
              }
              if (b.data.availabilityStatusIframeName != null) {
                e = h.jsx(c("MPNEntryPointAvailabilityStatusIcon.react"), {
                  awayHoursEnabled: p.awayHoursEnabled,
                  isPageAway: p.isPageAway,
                });
                g =
                  parent.frames[b.data.availabilityStatusIframeName].document
                    .body;
                d("ReactDOM").render(e, g, "MPNDesktopWrapper.react.js");
              }
              e = a.$11();
              if (b.data.greetingIframeName != null)
                if (e) {
                  g = o.visibility === d("MPNConstants").MPNVisibility.HIDDEN;
                  if (
                    !g &&
                    a.initialPath ===
                      d("MessagingPluginPathUtils").MPN_PATH
                        .REENGAGEMENT_COLLAPSED
                  ) {
                    e = m === "compact";
                    g = d(
                      "ChatPluginStyleUtils"
                    ).getDesktopGreetingBottomSpacingWithReEngagementDialog(
                      g,
                      (g = f) != null ? g : 0,
                      n,
                      j,
                      e
                    );
                    c("MPNXDMessageManager").updateGreetingIframeBottomSpacing(
                      g
                    );
                  }
                  e = h.jsx(
                    c("MessagingPluginDesktopWelcomeMessagePage.react"),
                    { context: a.context, ActionDelegate: a.ActionDelegate }
                  );
                  g = parent.frames[b.data.greetingIframeName].document.body;
                  d("ReactDOM").render(e, g, "MPNDesktopWrapper.react.js");
                } else d("MPNNavigation").minimizeGreetingDialog(a.context);
              a.$12();
            } catch (a) {}
          }
        );
      };
      e.$11 = function () {
        var a = this.context.state,
          b = a.optimisticStorageState;
        a = a.shouldShowReEngagement;
        var c = b.greetingVisibility;
        b = b.isGreetingDismissed;
        var e = !1;
        a &&
          b !== !0 &&
          c === d("MPNConstants").MPNVisibility.NOT_HIDDEN &&
          (e = !0);
        return e;
      };
      e.$10 = function () {
        var a = this.context.state.optimisticStorageState;
        return a.visibility === d("MPNConstants").MPNVisibility.NOT_HIDDEN
          ? a.path === d("MPNLocalState").MPNLocalStatePath.BUBBLE
          : !0;
      };
      e.$12 = function () {
        var a = this,
          b = this.context.state,
          c = b.greetingDialogDelay,
          e = b.greetingDialogDisplay;
        b = b.isInitialLoad;
        if (!b) return;
        b = !1;
        var f = 0,
          g = c;
        switch (e) {
          case "show":
          case "unset":
            b = c > 0;
            break;
          case "fade":
            b = c > 0;
            g = c;
            f = d("LiveChatPluginConstants").PLUGIN_FADE_DELAY;
            break;
          case "hide":
            b = !1;
            break;
          default:
            break;
        }
        if (!b) return;
        this.$3 = window.setTimeout(function () {
          a.$13(f);
        }, g);
      };
      e.$13 = function (a) {
        var b = this,
          c = this.context.state.optimisticStorageState;
        c.visibility === d("MPNConstants").MPNVisibility.HIDDEN &&
          (d("MPNNavigation").maximizePlugin(this.context, !1),
          a != null &&
            (this.$4 = window.setTimeout(function () {
              c.visibility !== d("MPNConstants").MPNVisibility.HIDDEN &&
                d("MPNNavigation").minimizePlugin(b.context);
            }, a)));
      };
      e.$8 = function () {
        var a = this;
        c("MPNXDMessageManager").subscribeEvent(
          "plugin_wrapper",
          "message",
          "updateCustomerChat",
          function (b) {
            d("MessagingPluginSDKActionUtil").updateGreetingTextAndRefParam(
              a.context,
              b
            );
          }
        );
        c("MPNXDMessageManager").subscribeEvent(
          "plugin_wrapper",
          "message",
          "CustomerChat.isDialogHidden",
          function (b) {
            d("MessagingPluginSDKActionUtil").updateDialogVisibility(
              a.context,
              b
            );
          }
        );
      };
      e.render = function () {
        var a = this;
        switch (this.actionOnInit) {
          case i.CREATE_GUEST_SESSION:
            this.actionOnInit = i.NONE;
            this.$6(function () {
              c("MPNStorage").clearRedirectCommand();
            });
            break;
          case i.START_NEW_THREAD:
            this.actionOnInit = i.NONE;
            c("MPNStorage").clearRedirectCommand();
            d("MessagingPluginThreadActions").openThreadWithCurrentFBUser(
              this.context,
              !1
            );
            break;
          case i.GUEST_UPGRADE:
            this.actionOnInit = i.NONE;
            c("MPNStorage").clearRedirectCommand();
            d("MessagingPluginGuestUpgradeActions").clearGuestStorage(
              this.context
            );
            d(
              "MessagingPluginGuestUpgradeActions"
            ).setPluginStateToUpgradedThread(this.context);
            break;
          case i.GUEST_UPGRADE_SWITCH_ACCOUNT:
            this.actionOnInit = i.NONE;
            c("MPNStorage").clearRedirectCommand();
            d("MPNIdentity").MPNIdentity.subscribeLoggedInUserChanges(function (
              a,
              b
            ) {
              a = c("MPNStorage").getFBStorageState();
              a != null &&
                c("MPNStorage").setFBStorageState(
                  babelHelpers["extends"]({}, a, {
                    rdr: d("MPNConstants").MPNRedirect.GUEST_UPGRADE,
                  })
                );
              c("MPNXDMessageManager").reloadPlugin();
            },
            250);
            break;
          case i.SHOW_LOGIN_PAGE:
            this.actionOnInit = i.NONE;
            c("MPNStorage").clearRedirectCommand();
            c("MPNXDMessageManager").updateShouldShowLoginPage(!1);
            this.shouldShowLoginPage = !0;
            c("MPNStorage").setPath(
              d("MPNLocalState").MPNLocalStatePath.WELCOME_PAGE
            );
            this.context.dispatchAction({
              type: "UPDATE_DIALOG_PATH",
              path: d("MPNLocalState").MPNLocalStatePath.WELCOME_PAGE,
            });
            break;
          case i.RE_ENGAGEMENT_LOG_IN:
            this.actionOnInit = i.NONE;
            c("MPNStorage").clearRedirectCommand();
            c("MPNXDMessageManager").updateIsReEngagementOptIn(!1);
            d("MessagingPluginThreadActions").openThreadWithCurrentFBUser(
              this.context,
              !0
            );
            break;
          case i.RE_ENGAGEMENT_SWITCH_ACCOUNT:
            this.actionOnInit = i.NONE;
            c("MPNStorage").clearRedirectCommand();
            d("MPNIdentity").MPNIdentity.subscribeLoggedInUserChanges(function (
              b,
              e
            ) {
              if (e !== "0") {
                b = c("MPNStorage").getFBStorageState();
                b != null &&
                  (c("MPNStorage").setFBStorageState(
                    babelHelpers["extends"]({}, b, {
                      rdr: d("MPNConstants").MPNRedirect.RE_ENGAGEMENT_LOG_IN,
                    })
                  ),
                  d("MPNNavigation").dismissReEngagementDialog(a.context),
                  c("MPNXDMessageManager").reloadPlugin());
              }
            },
            d("LiveChatPluginConstants").LOGIN_CHECK_INTERVAL);
            break;
          case i.SWITCH_ACCOUNT:
            this.actionOnInit = i.NONE;
            c("MPNStorage").clearRedirectCommand();
            d("MPNIdentity").MPNIdentity.subscribeLoggedInUserChanges(function (
              a,
              b
            ) {
              if (b !== "0") {
                a = c("MPNStorage").getFBStorageState();
                a != null &&
                  (c("MPNStorage").setFBStorageState(
                    babelHelpers["extends"]({}, a, {
                      rdr: d("MPNConstants").MPNRedirect.SHOW_LOGIN_PAGE,
                    })
                  ),
                  c("MPNXDMessageManager").reloadPlugin());
              }
            },
            d("LiveChatPluginConstants").LOGIN_CHECK_INTERVAL);
            break;
          default:
            break;
        }
        return this.context.state.optimisticStorageState.visibility ===
          d("MPNConstants").MPNVisibility.NOT_HIDDEN ||
          this.iconIframeLoaded ||
          (this.context.state.shouldShowReEngagement &&
            this.initialPath === d("MessagingPluginPathUtils").MPN_PATH.BUBBLE)
          ? h.jsx(c("MPNDesktopRoute.react"), {
              path: this.initialPath,
              ActionDelegate: this.ActionDelegate,
              shouldShowLoginPage: this.shouldShowLoginPage,
              shouldShowReEngagement: this.context.state.shouldShowReEngagement,
            })
          : null;
      };
      return b;
    })(h.Component);
    a.contextType = c("MessagingPluginContext");
    g["default"] = a;
  },
  98
);
__d(
  "MessagingPluginDesktopRoot",
  [
    "cx",
    "CometBlueBridgeKeyCommandListener.react",
    "LiveChatPluginErrorBoundary.react",
    "MPNCacheVersioning",
    "MPNConstants",
    "MPNDesktopWrapper.react",
    "MPNIdentity",
    "MPNLocalState",
    "MPNStorage",
    "MPNXDMessageManager",
    "MessagingPluginPathUtils",
    "MessagingPluginStateProvider",
    "ReactDOM",
    "URI",
    "performanceAbsoluteNow",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    a = (function () {
      function a(a) {
        var b = a.alignment,
          c = a.pageID,
          d = a.container,
          e = a.serverTime,
          f = a.clientRequestTime,
          g = a.pagePassesSentryTest,
          h = a.hasMessagingPermission,
          i = a.isMuted,
          j = a.isPageBlocked,
          k = a.isBusinessActive,
          l = a.requestID,
          m = a.refererUri,
          n = a.originDomain,
          o = a.soundURLs,
          p = a.hasGuestMode,
          q = a.showUpgradeUpsellPrompt,
          r = a.hasAutomation,
          s = a.appSwitchUri,
          t = a.upgradeAppSwitchUri,
          u = a.storedStates,
          v = a.isComposerDisabled,
          w = a.hasPersistentMenu,
          x = a.pageName,
          y = a.pageProfilePictureUri,
          z = a.viewerProfilePicureUri,
          A = a.pageResponsiveness,
          B = a.isInstantlyResponsive,
          C = a.refParam,
          D = a.pageVerifiedStatus,
          E = a.greetingDialogDelay,
          F = a.greetingDialogDisplay,
          G = a.loggedInGreeting,
          H = a.loggedOutGreeting,
          I = a.threadCSSColor,
          J = a.entryPointIconSVG,
          aa = a.entryPointIconEnum,
          ba = a.entryPointLabel,
          ca = a.locale,
          da = a.icebreakers,
          ea = a.icebreakerCtas,
          fa = a.bottomSpacing,
          ga = a.sideSpacing,
          ha = a.isPageInEU,
          ia = a.threadExists,
          K = a.isLoadedByFacade,
          ja = a.loggedInAccessToken,
          ka = a.isSanitizedEpd3pdRequest,
          la = a.shouldShowReEngagement,
          L = a.shouldBypassPageSentryTest,
          M = a.shouldUseAccessTokenAuth,
          ma = a.entryPointSize,
          N = a.windowSize,
          na = a.awayHoursEnabled,
          O = a.awayGreeting,
          oa = a.isPageAway,
          pa = a.nextAvailableTimestamp,
          qa = a.optInMessageEnabled,
          ra = a.optInMessageCadence,
          P = a.collapsedOptInMessageTitle,
          sa = a.expandedOptInMessageTitle,
          ta = a.collapsedOptInMessageText;
        a = a.expandedOptInMessageText;
        try {
          this.$1(
            b,
            c,
            d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            l,
            m,
            n,
            o,
            s,
            t,
            p,
            q,
            r,
            u,
            v,
            w,
            x,
            y,
            z,
            A,
            B,
            C,
            D,
            E,
            F,
            G,
            H,
            I,
            J,
            aa,
            ba,
            ca,
            da,
            ea,
            fa,
            ga,
            ha,
            ia,
            K,
            ja,
            ka,
            la,
            L,
            M,
            ma,
            N,
            na,
            O,
            oa,
            pa,
            qa,
            ra,
            P,
            sa,
            ta,
            a
          );
        } catch (a) {}
      }
      var b = a.prototype;
      b.$1 = function (
        a,
        b,
        e,
        f,
        g,
        h,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u,
        v,
        w,
        x,
        y,
        z,
        A,
        B,
        C,
        D,
        E,
        F,
        G,
        H,
        I,
        J,
        aa,
        ba,
        ca,
        da,
        ea,
        fa,
        ga,
        ha,
        ia,
        K,
        ja,
        ka,
        la,
        L,
        M,
        ma,
        N,
        na,
        O,
        oa,
        pa,
        qa,
        ra,
        P,
        sa,
        ta,
        ua,
        va,
        wa
      ) {
        var xa = !1;
        c("MPNStorage").initialize(p, b, n);
        d("MPNIdentity").MPNIdentity.hasStorageAccess(function (Q) {
          var R, S;
          d("MPNIdentity").MPNIdentity.init(Q, L);
          var T = n,
            U = w;
          U &&
            (d("MPNCacheVersioning").isLatestVersion(U.v) ||
              (c("MPNStorage").clearThirdPartyStorageState(), (U = null)));
          R = (R = U) == null ? void 0 : R.rdet;
          R = c("MPNStorage").getShouldRenderReEngagementDialog(M, P, R);
          S =
            (S = (S = U) == null ? void 0 : S.isGreetingDismissed) != null
              ? S
              : !1;
          U ||
            ((U = c("MPNStorage").getDefaultOptimisticStorageState(
              !1,
              H,
              G,
              R,
              M,
              S
            )),
            c("MPNStorage").setThirdPartyStorageState(U));
          var ya = !1,
            za,
            Aa,
            V = U.visibility,
            W = U.greetingVisibility,
            X = U.shouldShowLoginPage,
            Y = U.isReEngagementOptIn;
          if (Q) {
            var Z,
              $ = c("MPNStorage").getFBStorageState();
            Z = (Z = $) == null ? void 0 : Z.rdr;
            Z == null &&
              !d("MPNCacheVersioning").isLatestVersion(
                (Z = $) == null ? void 0 : Z.v
              ) &&
              (c("MPNStorage").clearFBStorageState(),
              ($ = c("MPNStorage").getFBStorageState()));
            c("MPNStorage").isAccessTokenExpired() &&
              (c("MPNStorage").clearFBStorageState(),
              (U = c("MPNStorage").getDefaultOptimisticStorageState(
                !1,
                H,
                G,
                R,
                M,
                S
              )),
              c("MPNStorage").setThirdPartyStorageState(U));
            if ($ != null && $.requestID != null && $.requestID != "") {
              Z = $.requestID;
              ($.rdr === d("MPNConstants").MPNRedirect.NEW_GUEST_SESSION ||
                $.rdr === d("MPNConstants").MPNRedirect.ITP_CONTINUE_SESSION) &&
                ((T = Z), c("MPNStorage").initialize(p, b, Z));
            }
            xa = c("MPNStorage").setInitialStateIfNecessary(
              !1,
              V,
              H,
              X,
              Y,
              R,
              W,
              S
            );
            $ = c("MPNStorage").getFBStorageState();
            if ($ != null) {
              ya =
                $.chatState != d("MPNLocalState").MPNChatState.CHAT_NOT_STARTED;
              za = $.accessToken;
              Aa = $.userID;
              V = $.visibility;
              U = babelHelpers["extends"]({}, U, {
                path: $.currentPath,
                chatState: $.chatState,
                visibility: $.visibility,
                showUpgradePrompt:
                  (Z = $.showUpgradePrompt) != null
                    ? Z
                    : d("MPNConstants").MPNUpgradePrompt.NOT_SHOWN,
                greetingVisibility: $.greetingVisibility,
              });
              c("MPNStorage").setThirdPartyStorageState(U);
            }
          }
          d("MPNIdentity").MPNIdentity.subscribeLoggedInUserChanges(function (
            a,
            b
          ) {
            d("MPNIdentity").MPNIdentity.currentUserState() !=
              d("MPNIdentity").MPNIdentityState.GUEST &&
              (c("MPNStorage").clearFBStorageState(),
              c("MPNStorage").clearThirdPartyStorageState()),
              c("MPNXDMessageManager").reloadPlugin();
          });
          X = c("MPNStorage").getFBStorageState();
          Y = d(
            "MessagingPluginPathUtils"
          ).getDesktopDisplayPathFromStoredState(Q, U, L, X, R, H === "show");
          W =
            Y ===
              d("MessagingPluginPathUtils").MPN_PATH.REENGAGEMENT_COLLAPSED ||
            Y === d("MessagingPluginPathUtils").MPN_PATH.REENGAGEMENT_EXPANDED;
          if (
            (Y === d("MessagingPluginPathUtils").MPN_PATH.THREAD &&
              U.chatState ===
                d("MPNLocalState").MPNChatState.CHAT_NOT_STARTED) ||
            (W &&
              !R &&
              (X == null ? void 0 : X.rdr) !==
                d("MPNConstants").MPNRedirect.RE_ENGAGEMENT_LOG_IN)
          ) {
            Z = c("MPNStorage").getDefaultPath(!1, V, H, R);
            Y = d(
              "MessagingPluginPathUtils"
            ).MessagingPluginPathUtils.toMobilePath(Z);
            U = babelHelpers["extends"]({}, U, { path: Z });
            c("MPNStorage").setThirdPartyStorageState(U);
          }
          if (M) {
            $ = c("MPNStorage").getDefaultVisibility(
              {
                visibility: U.visibility,
                greetingVisibility: d("MPNConstants").MPNVisibility.HIDDEN,
              },
              d("MessagingPluginPathUtils").MessagingPluginPathUtils.toEnumPath(
                Y
              ),
              M,
              H,
              S,
              !1
            );
            Y === d("MessagingPluginPathUtils").MPN_PATH.BUBBLE
              ? ((U = babelHelpers["extends"]({}, U, {
                  visibility: $.visibility,
                  greetingVisibility: $.greetingVisibility,
                })),
                c("MPNStorage").setThirdPartyStorageState(U))
              : Y ===
                d("MessagingPluginPathUtils").MPN_PATH.REENGAGEMENT_COLLAPSED
              ? ((U = babelHelpers["extends"]({}, U, {
                  path: d(
                    "MessagingPluginPathUtils"
                  ).MessagingPluginPathUtils.toEnumPath(Y),
                  visibility: d("MPNConstants").MPNVisibility.NOT_HIDDEN,
                  greetingVisibility: $.greetingVisibility,
                })),
                c("MPNStorage").setThirdPartyStorageState(U))
              : ((U = babelHelpers["extends"]({}, U, {
                  greetingVisibility: d("MPNConstants").MPNVisibility.HIDDEN,
                })),
                c("MPNStorage").setThirdPartyStorageState(U));
          }
          Q = {
            alignment: a,
            pageID: b,
            pageName: z,
            pagePassesSentryTest: h,
            hasMessagingPermission: j,
            isMuted: k,
            isPageBlocked: l,
            pageProfilePictureUri: A,
            viewerProfilePicureUri: B,
            threadCSSColor: aa,
            entryPointIconSVG: ba,
            entryPointIconEnum: ca,
            entryPointLabel: da,
            pageResponsiveness: C,
            isInstantlyResponsive: D,
            isComposerDisabled: x,
            hasActiveAutomation: !1,
            hasPersistentMenu: y,
            greetingDialogDelay: G,
            greetingDialogDisplay: H,
            loggedInGreeting: I,
            loggedOutGreeting: J,
            refParam: E,
            refererUri: o,
            originDomain: p,
            appSwitchUri: r,
            upgradeAppSwitchUri: s,
            locale: ea,
            isBusinessActive: m,
            icebreakers: fa,
            icebreakerCtas: ga,
            pageVerifiedStatus: F,
            initialRequestUri: c("URI").getRequestURI(),
            requestID: T,
            bottomSpacing: ha,
            sideSpacing: ia,
            chatStarted: ya,
            accessToken: za,
            guestID: Aa,
            optimisticStorageState: U,
            soundURLs: q,
            isInitialLoad: xa,
            hasGuestMode: t,
            showUpgradeUpsellPrompt: u,
            pluginMountTime: c("performanceAbsoluteNow")(),
            serverTime: f,
            clientRequestTime: g,
            upgradeUpsellPrompt: d("MPNConstants").MPNUpgradePrompt.NOT_SHOWN,
            messageCount: null,
            cookieAccessDenied: !1,
            hasAutomation: v && !K,
            isPageInEU: K,
            threadExists: ja,
            isLoadedByFacade: ka,
            isLightswitchEnabledForGuest: !1,
            loggedInAccessToken: la,
            isSanitizedEpd3pdRequest: L,
            shouldShowReEngagement: M,
            shouldBypassPageSentryTest: ma,
            shouldUseAccessTokenAuth: N,
            entryPointSize: na,
            windowSize: O,
            awayHoursEnabled: oa,
            awayGreeting: pa,
            isPageAway: qa,
            nextAvailableTimestamp: ra,
            optInMessageEnabled: P,
            optInMessageCadence: sa,
            collapsedOptInMessageTitle: ta,
            expandedOptInMessageTitle: ua,
            collapsedOptInMessageText: va,
            expandedOptInMessageText: wa,
            shouldRenderReEngagementDialog: R,
          };
          (W = document.body) == null
            ? void 0
            : (X = W.classList) == null
            ? void 0
            : X.add("_a2w-");
          (V = document.body) == null
            ? void 0
            : (Z = V.classList) == null
            ? void 0
            : Z.add("_95ry");
          S = O === "compact";
          c("MPNStorage").setWindowSizeMode(S);
          S &&
            (($ = document.body) == null
              ? void 0
              : (T = $.classList) == null
              ? void 0
              : T.add("_a3u7"));
          d("ReactDOM").render(
            i.jsx(c("LiveChatPluginErrorBoundary.react"), {
              pageID: b,
              shouldUseNewDomain: N,
              children: i.jsx(c("CometBlueBridgeKeyCommandListener.react"), {
                children: i.jsx(c("MessagingPluginStateProvider"), {
                  initialState: Q,
                  children: i.jsx(c("MPNDesktopWrapper.react"), {
                    path: Y,
                    redirectCommand: c("MPNStorage").getRedirectCommand(),
                  }),
                }),
              }),
            }),
            e,
            "MessagingPluginDesktopRoot.js"
          );
        });
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
