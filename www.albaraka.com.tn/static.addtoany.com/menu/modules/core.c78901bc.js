const t = ".c78901bc",
  J = window,
  K = document,
  p = function () {},
  X = void 0;
J.a2a_config = J.a2a_config || {};
var e = {
  localize: J.a2a_localize || {},
  static_server:
    J.a2a_config.static_server || "https://static.addtoany.com/menu",
  templates: {},
  native: X,
  onclick: 2,
  orientation: X,
  track_links: X,
  track_links_key: "",
  callbacks: [],
  tracking_callback: X,
  add_services: !1,
  thanks: {},
  locale: X,
  no_3p: X,
  icon_color: X,
  color_main: X,
  color_bg: X,
  color_border: X,
  color_link_text: X,
  color_link_text_hover: X,
  counts: X,
  overlays: [],
};
const z = {
    num_services: 8,
    prioritize: X,
    exclude_services: X,
    custom_services: X,
    delay: 0,
    show_menu: X,
    bookmarklet: X,
  },
  f = {
    linkmedia: X,
    linkname: X,
    linkurl: X,
    linkname_escape: X,
    menu_type: X,
    target: X,
  },
  Q = { ...e, ...z, ...f },
  m = function () {
    for (const e in J.a2a_config) Q[e] = J.a2a_config[e];
  },
  j = function (e) {
    for (const a in e)
      (Q[a] = e[a]), J.a2a_config[a] && (J.a2a_config[a] = e[a]);
  },
  u = (m(), "https://static.addtoany.com/menu"),
  o = ["feed", "mail", "page"];
let w,
  x = 0;
const v = (e) => {
  e ? (x = e.a2a_index) : A && (x = A);
};
let k = 0;
const Z = {},
  n = { feed: [], page: [] };
let i = ["a2a", "share1", "share2"],
  b = {},
  ce = [];
const de = [];
let A = X,
  S = X,
  C = X;
const M = K.getElementsByTagName("head")[0],
  pe =
    !!K.querySelector &&
    ((e = K.querySelector('meta[property="og:url"]'))
      ? e.getAttribute("content")
      : !!(e = K.querySelector('link[rel="canonical"]')) && e.href),
  E = K.currentScript && K.currentScript.nonce ? K.currentScript.nonce : null;
const F = navigator.userAgent,
  I = F.match(/Mobi|iPhone|iPad|iPod|Android/),
  D = "ontouchend" in J;
let ue = () => {
  let e;
  var a = "share1";
  return (
    (e =
      (e =
        (e =
          (e =
            Q.native && navigator.share
              ? (e = -1 < F.indexOf("Mac") && a) ||
                (-1 < F.indexOf("CrOS") && "share2")
              : e) ||
          (!!/iPhone|iPad|iPod/.test(F) && a)) ||
        (-1 < F.indexOf("Mac") && D && a)) ||
      (!!/Android/i.test(F) && "share2")),
    (ue = () => e),
    e
  );
};
const O = {
    page: {
      most: [
        ["Facebook", "facebook", "facebook", "1877F2", { pu: 1 }],
        ["Twitter", "twitter", "twitter", "1D9BF0", { pu: 1, na: 1 }],
        ["WhatsApp", "whatsapp", "whatsapp", "12AF0A", { pu: 1, na: 1 }],
        [
          "Email",
          "email",
          "email",
          "0166FF",
          { url: "mailto:?subject=${title}&body=${link}" },
        ],
        ["LinkedIn", "linkedin", "linkedin", "007BB5", { pu: 1, na: 1 }],
        [
          "Pinterest",
          "pinterest",
          "pinterest",
          "BD081C",
          {
            type: "js",
            src: "https://assets.pinterest.com/js/pinmarklet.js",
            media: 1,
            pu: 1,
          },
        ],
        ["Telegram", "telegram", "telegram", "2CA5E0", { na: 1 }],
        [
          "Messenger",
          "facebook_messenger",
          "facebook_messenger",
          "0084FF",
          { pu: 1, na: 1 },
        ],
        ["Reddit", "reddit", "reddit", "ff4500", { na: 1 }],
        ["Gmail", "google_gmail", "gmail", "DD5347", { type: "email", pu: 1 }],
        ["Pocket", "pocket", "pocket", "EE4056"],
        ["Tumblr", "tumblr", "tumblr", "35465C", { media: 1, pu: 1 }],
        ["Amazon Wish List", "amazon_wish_list", "amazon", "F90"],
        ["AOL Mail", "aol_mail", "aol", "2A2A2A", { type: "email", pu: 1 }],
        ["Balatarin", "balatarin", "balatarin", "079948"],
        ["BibSonomy", "bibsonomy", "bibsonomy", "2A2A2A"],
        ["Bitty Browser", "bitty_browser", "bitty", "999"],
        ["Blogger", "blogger", "blogger", "FDA352"],
        ["BlogMarks", "blogmarks", "blogmarks", "535353"],
        ["Bookmarks.fr", "bookmarks_fr", "bookmarks_fr", "96C044"],
        ["Box.net", "box_net", "box", "1A74B0"],
        ["Buffer", "buffer", "buffer", "2A2A2A"],
        [
          "Copy Link",
          "copy_link",
          "link",
          "0166FF",
          { type: "js", src: "javascript:a2a.copyLink('${link}')" },
        ],
        ["Diary.Ru", "diary_ru", "diary_ru", "912D31"],
        ["Diaspora", "diaspora", "diaspora", "2E3436"],
        ["Digg", "digg", "digg", "2A2A2A"],
        ["Diigo", "diigo", "diigo", "4A8BCA"],
        ["Douban", "douban", "douban", "071", { pu: 1 }],
        ["Draugiem", "draugiem", "draugiem", "F60", { pu: 1 }],
        ["Evernote", "evernote", "evernote", "00A82D"],
        ["Fark", "fark", "fark", "555"],
        ["Flipboard", "flipboard", "flipboard", "C00", { pu: 1 }],
        ["Folkd", "folkd", "folkd", "0F70B2"],
        ["Google Classroom", "google_classroom", "google_classroom", "FFC112"],
        ["Google Translate", "google_translate", "google_translate", "528ff5"],
        ["Hacker News", "hacker_news", "y18", "F60"],
        ["Hatena", "hatena", "hatena", "00A6DB"],
        [
          "Houzz",
          "houzz",
          "houzz",
          "7AC143",
          {
            type: "js",
            src: "https://www.houzz.com/js/clipperBookmarklet.js",
            media: 1,
            pu: 1,
          },
        ],
        ["Instapaper", "instapaper", "instapaper", "2A2A2A"],
        ["Kakao", "kakao", "kakao", "FCB700", { pu: 1 }],
        ["Push to Kindle", "kindle_it", "kindle", "2A2A2A"],
        ["Known", "known", "known", "2A2A2A"],
        ["Line", "line", "line", "00C300", { pu: 1, na: 1 }],
        ["LiveJournal", "livejournal", "livejournal", "113140"],
        ["Mail.Ru", "mail_ru", "mail_ru", "356FAC"],
        ["Mastodon", "mastodon", "mastodon", "2b90d9"],
        ["Mendeley", "mendeley", "mendeley", "A70805"],
        ["Meneame", "meneame", "meneame", "FF7D12"],
        ["MeWe", "mewe", "mewe", "007DA1"],
        ["Teams", "microsoft_teams", "microsoft_teams", "5059C9", { pu: 1 }],
        ["Mixi", "mixi", "mixi", "D1AD5A"],
        ["MySpace", "myspace", "myspace", "2A2A2A"],
        ["Odnoklassniki", "odnoklassniki", "odnoklassniki", "F2720C"],
        [
          "Outlook.com",
          "outlook_com",
          "outlook_com",
          "0072C6",
          { type: "email" },
        ],
        ["Papaly", "papaly", "papaly", "3AC0F6", { pu: 1 }],
        ["Pinboard", "pinboard", "pinboard", "1341DE", { pu: 1 }],
        ["Plurk", "plurk", "plurk", "CF682F"],
        [
          "Print",
          "print",
          "print",
          "0166FF",
          { type: "js", src: "javascript:print()" },
        ],
        ["PrintFriendly", "printfriendly", "printfriendly", "6D9F00"],
        ["Pusha", "pusha", "pusha", "0072B8"],
        ["Qzone", "qzone", "qzone", "2B82D9"],
        ["Rediff MyPage", "rediff", "rediff", "D20000"],
        ["Refind", "refind", "refind", "1492ef"],
        ["Sina Weibo", "sina_weibo", "sina_weibo", "E6162D"],
        ["SiteJot", "sitejot", "sitejot", "FFC808"],
        ["Skype", "skype", "skype", "00AFF0"],
        ["Slashdot", "slashdot", "slashdot", "004242"],
        [
          "SMS",
          "sms",
          "sms",
          "6CBE45",
          { url: "sms:?&body=${title}%20${link}" },
        ],
        ["Snapchat", "snapchat", "snapchat", "2A2A2A", { pu: 1, na: 1 }],
        ["StockTwits", "stocktwits", "stocktwits", "40576F", { pu: 1 }],
        ["Svejo", "svejo", "svejo", "5BD428"],
        ["Symbaloo Bookmarks", "symbaloo_bookmarks", "symbaloo", "6DA8F7"],
        [
          "Threema",
          "threema",
          "threema",
          "2A2A2A",
          { url: "threema://compose?text=${title}%20${link}", na: 1 },
        ],
        ["Trello", "trello", "trello", "0079BF", { pu: 1 }],
        ["Twiddla", "twiddla", "twiddla", "2A2A2A"],
        ["TypePad Post", "typepad_post", "typepad", "D2DE61"],
        [
          "Viber",
          "viber",
          "viber",
          "7C529E",
          { url: "viber://forward?text=${title}%20${link}", na: 1 },
        ],
        ["VK", "vk", "vk", "587EA3", { pu: 1 }],
        ["WeChat", "wechat", "wechat", "7BB32E"],
        ["WordPress", "wordpress", "wordpress", "464646"],
        ["Wykop", "wykop", "wykop", "367DA9"],
        ["X", "x", "x", "2A2A2A", { pu: 1, na: 1 }],
        ["XING", "xing", "xing", "165B66", { pu: 1 }],
        ["Yahoo Mail", "yahoo_mail", "yahoo", "400090", { type: "email" }],
        [
          "Yummly",
          "yummly",
          "yummly",
          "E16120",
          {
            type: "js",
            src: "https://www.yummly.com/js/yumlet.js",
            media: 1,
            pu: 1,
          },
        ],
      ],
      email: [
        ["Email", "email", "email", "0166FF", { type: "email" }],
        ["Gmail", "google_gmail", "gmail", "DD5347", { type: "email", pu: 1 }],
        ["AOL Mail", "aol_mail", "aol", "2A2A2A", { type: "email", pu: 1 }],
        [
          "Outlook.com",
          "outlook_com",
          "outlook_com",
          "0072C6",
          { type: "email" },
        ],
        ["Yahoo Mail", "yahoo_mail", "yahoo", "400090", { type: "email" }],
      ],
    },
    feed: {
      most: [
        ["Feed", "feed", "feed", "E3702D", { url: "${link_noenc}" }],
        ["Feedly", "feedly", "feedly", "2BB24C"],
        ["My Yahoo", "my_yahoo", "yahoo", "400090"],
        ["FeedBlitz", "feedblitz", "feedblitz", "FF8B23", { type: "email" }],
        ["AOL Reader", "my_aol", "aol", "2A2A2A"],
        ["The Old Reader", "oldreader", "oldreader", "D73F31"],
        ["Agregator", "agregator", "agregator", "359440"],
        ["Bitty Browser Preview", "bitty_browser_preview", "bitty", "999"],
        ["Daily Rotation", "daily_rotation", "dailyrotation", "2A2A2A"],
        [
          "iTunes",
          "itunes",
          "itunes",
          "FB233A",
          { url: "itpc://${link_nohttp}" },
        ],
        ["Miro", "miro", "miro", "D41700"],
        ["Netvibes", "netvibes", "netvibes", "7CA900"],
        ["NewsAlloy", "newsalloy", "newsalloy", "8E2B3D"],
        [
          "Outlook",
          "outlook",
          "outlook_com",
          "0072C6",
          { url: "feed://${link_nohttp}" },
        ],
        ["PodNova", "podnova", "podnova", "B50419"],
        ["Symbaloo Feeds", "symbaloo_feeds", "symbaloo", "6DA8F7"],
        [
          "The Free Dictionary",
          "the_free_dictionary",
          "thefreedictionary",
          "004B85",
        ],
        ["The Free Library", "the_free_library", "thefreelibrary", "004B85"],
      ],
      email: [
        ["FeedBlitz", "feedblitz", "feedblitz", "FF8B23", { type: "email" }],
      ],
    },
  },
  ee =
    ((ce = O.page.most.concat(O.feed.most)).forEach((e) => i.push(e[2])),
    {
      apple_music: {
        name: "Apple Music",
        icon: "apple_music",
        color: "fa233b",
      },
      behance: {
        name: "Behance",
        icon: "behance",
        color: "007EFF",
        url: "https://www.behance.net/${id}",
      },
      discord: {
        name: "Discord",
        icon: "discord",
        color: "5865F2",
        url: "https://discord.com/invite/${id}",
      },
      facebook: {
        name: "Facebook",
        icon: "facebook",
        color: "1877f2",
        url: "https://www.facebook.com/${id}",
      },
      flickr: {
        name: "Flickr",
        icon: "flickr",
        color: "FF0084",
        url: "https://www.flickr.com/photos/${id}",
      },
      foursquare: {
        name: "Foursquare",
        icon: "foursquare",
        color: "F94877",
        url: "https://foursquare.com/${id}",
      },
      github: {
        name: "GitHub",
        icon: "github",
        color: "2A2A2A",
        url: "https://github.com/${id}",
      },
      google: { name: "Google", icon: "google", color: "4285F4" },
      google_maps: {
        name: "Google Maps",
        icon: "google_maps",
        color: "34A853",
      },
      instagram: {
        name: "Instagram",
        icon: "instagram",
        color: "E4405F",
        url: "https://www.instagram.com/${id}",
      },
      linkedin: {
        name: "LinkedIn",
        icon: "linkedin",
        color: "007BB5",
        url: "https://www.linkedin.com/in/${id}",
      },
      linkedin_company: {
        name: "LinkedIn",
        icon: "linkedin",
        color: "007BB5",
        url: "https://www.linkedin.com/company/${id}",
      },
      medium: {
        name: "Medium",
        icon: "medium",
        color: "2A2A2A",
        url: "https://medium.com/@${id}",
      },
      pinterest: {
        name: "Pinterest",
        icon: "pinterest",
        color: "BD081C",
        url: "https://www.pinterest.com/${id}",
      },
      snapchat: {
        name: "Snapchat",
        icon: "snapchat",
        color: "2A2A2A",
        url: "https://www.snapchat.com/add/${id}",
      },
      soundcloud: { name: "SoundCloud", icon: "soundcloud", color: "ff5500" },
      spotify: { name: "Spotify", icon: "spotify", color: "1ed760" },
      threads: {
        name: "Threads",
        icon: "threads",
        color: "2a2a2a",
        url: "https://www.threads.net/@${id}",
      },
      tiktok: {
        name: "TikTok",
        icon: "tiktok",
        color: "2a2a2a",
        url: "https://www.tiktok.com/@${id}",
      },
      tumblr: {
        name: "Tumblr",
        icon: "tumblr",
        color: "35465C",
        url: "https://${id}.tumblr.com",
      },
      twitter: {
        name: "Twitter",
        icon: "twitter",
        color: "1D9BF0",
        url: "https://twitter.com/${id}",
      },
      vimeo: {
        name: "Vimeo",
        icon: "vimeo",
        color: "1AB7EA",
        url: "https://vimeo.com/${id}",
      },
      x: { name: "X", icon: "x", color: "2A2A2A", url: "https://x.com/${id}" },
      yelp: { name: "Yelp", icon: "yelp", color: "FF1A1A" },
      youtube: {
        name: "YouTube",
        icon: "youtube",
        color: "FF0000",
        url: "https://www.youtube.com/user/${id}",
      },
      youtube_channel: {
        name: "YouTube Channel",
        icon: "youtube",
        color: "FF0000",
        url: "https://www.youtube.com/channel/${id}",
      },
    });
for (const la in ee) i.push(ee[la].icon);
const R = {
  isReady: !1,
  ready: function (e) {
    function a() {
      if (!K.body)
        return setTimeout(function () {
          R.ready(e);
        });
      e(), (R.isReady = !0);
    }
    const t = function (e) {
      (!K.addEventListener &&
        "load" !== e.type &&
        "complete" !== K.readyState) ||
        (K.removeEventListener("DOMContentLoaded", t, !1),
        J.removeEventListener("load", t, !1),
        a());
    };
    "complete" === K.readyState
      ? a()
      : K.addEventListener &&
        (K.addEventListener("DOMContentLoaded", t, !1),
        J.addEventListener("load", t, !1));
  },
};
function ae(e, a = {}) {
  m();
  var t,
    n,
    o,
    i,
    r,
    l,
    s = Q,
    c = {},
    d = null,
    p = {},
    u = location.href;
  for (t in (oa(e), a)) s[t] = a[t];
  for (t in s) c[t] = s[t];
  if ((n = s.target))
    if ("string" == typeof n) {
      if (((o = n.substring(0, 1)), (n = n.substring(1)), "." == o))
        return P(_e(B(n, K)), e, a), void (s.target = X);
      0 <= (o = (d = T(n)).className).indexOf("a2a_kit") &&
        o.indexOf("a2a_target") < 0 &&
        (d = null);
    } else d = s.target;
  (p.type = w),
    (p.node = d),
    (p.linkmedia = s.linkmedia),
    (p.linkname = s.linkname || K.title || location.href),
    (p.linkurl = s.linkurl || location.href),
    (p.linkname_escape = s.linkname_escape),
    (p.linkname_implicit = !s.linkname_escape && (K.title || u) == p.linkname),
    (p.linkurl_implicit = u == p.linkurl),
    (p.orientation = s.orientation),
    (p.track_links = s.track_links),
    (p.track_links_key = s.track_links_key || ""),
    j(f),
    "custom" == Q.track_links &&
      ((Q.track_links = J.a2a_config.track_links = X),
      (Q.track_links_key = J.a2a_config.track_links_key = "")),
    (J["a2a" + w + "_init"] = 1),
    (n = p),
    (o = c),
    k++,
    (x = k),
    (n.n = x),
    (d = (Z["n" + x] = n).node = q(n.node)),
    (u = Z[e]),
    (p = K.createElement("div")),
    (e = ie(d)["a2a-media"]),
    (r = ie(d)["a2a-title"]),
    (l = ie(d)["a2a-url"]),
    d
      ? (n.linkname_escape &&
          (i =
            B("a2a_linkname_escape", d.parentNode)[0] ||
            B("a2a_linkname_escape", d.parentNode.parentNode)[0]) &&
          (n.linkname = i.textContent || i.innerText),
        (n.linkmedia = o.linkmedia = e || n.linkmedia),
        (n.linkname = o.linkname = r || n.linkname),
        (n.linkurl = o.linkurl = l || n.linkurl),
        r && (n.linkname_implicit = !1),
        l && (n.linkurl_implicit = !1),
        "textContent" in K
          ? (p.textContent = n.linkname)
          : (p.innerText = n.linkname),
        (i = p.childNodes[0]) && (n.linkname = i.nodeValue),
        d.a2a_kit ? U(n, o) : H(n))
      : u.show_menu || k--,
    W();
}
function r(a) {
  $(function (e) {
    0 <= e.className.indexOf("a2a_follow")
      ? ae("feed", { target: e })
      : ae(a || "page", { target: e });
  }, !0) ||
    !T("a2a_menu_container") ||
    W.a2a_done ||
    ae(a);
}
function $(i, e) {
  var a = (t = B)("a2a_kit", K),
    t = _e(K.getElementsByName("a2a_dd")).concat(t("a2a_dd", K));
  function n(e) {
    for (var a, t, n = 0, o = e.length; n < o; n++)
      if (
        (t =
          (void 0 === (a = e[n]).a2a_index || "" === a.a2a_index) &&
          a.className.indexOf("a2a_target") < 0 &&
          a.parentNode.className.indexOf("a2a_kit") < 0
            ? i(a)
            : t)
      )
        return t;
    return null;
  }
  if (e) return n(a) || n(t);
  n(a.concat(t));
}
const P = function (e, a, t) {
    for (var n = 0, o = e.length; n < o; n++) (t.target = e[n]), ae(a, t);
  },
  H = function (o) {
    const i = o.node,
      r = o.type;
    var e = i.parentElement;
    const l = "a2a" + r,
      s =
        (e.a2a_kit && (o.kit = e),
        () => {
          v(i), (w = r);
          var e = T(l + "_dropdown"),
            a = d(e),
            t = d(T(l + "_show_more_less")),
            n = Q.onclick,
            o = K.activeElement;
          a
            ? g("none", r)
            : ((n && 2 !== n) || !t || "mail" == r) &&
              (L(i), (Z[r].last_focus = o), e.focus()),
            t && (a || 2 === n) && "mail" != r && (N(), (Z[r].last_focus = o));
        });
    let c = !1,
      t;
    const n = (e) => {
      var e = e.altKey,
        a = Q.native,
        a =
          ((I || D) && (a === X || !0 === a)) || (!0 === a && navigator.share);
      var t = (o) =>
        new Promise((t, e) => {
          var n;
          (n = o),
            new Promise((e, a) => {
              const t = new XMLHttpRequest();
              t.open("GET", n),
                (t.responseType = "blob"),
                (t.onload = () => e(t.response)),
                (t.onerror = () => a(new Error("Network error."))),
                t.send();
            })
              .then((e) => {
                let a;
                try {
                  a = new URL(o).pathname.split(".").pop();
                } catch (e) {}
                a = a || e.type.split("/")[1].match(/(?!x-)\w\w{3,4}/)[0];
                e = new File([e], "media." + a, { type: e.type });
                t(e);
              })
              .catch((e) => {
                console.warn(
                  'To be shared natively, images need the "Access-Control-Allow-Origin" header.'
                );
              });
        });
      if (a || e || c)
        if (a && (e || c)) s();
        else {
          Le(o);
          const n = { url: o.linkurl, text: o.linkname, files: [] };
          a = o.linkmedia;
          a
            ? t(a).then((e) => {
                n.files.push(e), Ne(n, s);
              })
            : Ne(n, s);
        }
      else s();
      c = !1;
    };
    (i.getAttribute("onclick") &&
      -1 != (i.getAttribute("onclick") + "").indexOf("a2a_")) ||
      (i.getAttribute("onmouseover") &&
        -1 != (i.getAttribute("onmouseover") + "").indexOf("a2a_")) ||
      (ne(i, "click", (e) => {
        G(e), V(e), n(e);
      }),
      ne(
        i,
        "touchstart",
        (e) => {
          const a = i.style;
          (a.webkitTouchCallout = a.webkitUserSelect = "none"),
            (t = setTimeout(() => {
              (c = !0), n(e), (a.webkitTouchCallout = a.webkitUserSelect = "");
            }, 700));
        },
        !!h() && { passive: !0 }
      ),
      ne(
        i,
        "touchend",
        () => {
          clearTimeout(t);
        },
        !!h() && { passive: !0 }
      ),
      ne(i, "click", V),
      ne(i, "touchstart", V, !!h() && { passive: !0 }),
      Q.onclick) ||
      (Z[w].delay
        ? (i.onmouseenter = function () {
            Z[w].over_delay = setTimeout(function () {
              L(i);
            }, Z[w].delay);
          })
        : (i.onmouseenter = function () {
            L(i);
          }),
      (i.onmouseleave = function () {
        ye(), Z[w].over_delay && clearTimeout(Z[w].over_delay);
      })),
      "a" == i.tagName.toLowerCase() &&
        "page" == w &&
        (i.href =
          "https://www.addtoany.com/share#url=" +
          encodeURIComponent(o.linkurl) +
          "&title=" +
          encodeURIComponent(o.linkname).replace(/'/g, "%27"));
    e = i.firstChild;
    e &&
      void 0 !== e.srcset &&
      /\/share_save_171_16.(?:gif|png)$/.test(e.src) &&
      (e.srcset =
        "https://static.addtoany.com/buttons/share_save_342_32.png 2x");
  },
  U = (c, d) => {
    const p = c.type;
    let u, _, f;
    const m = [
      "facebook_like",
      "twitter_tweet",
      "pinterest_pin",
      "linkedin_share",
    ];
    function h(e, a) {
      if (e && !oe(e, m))
        for (
          var t = 0,
            n = a ? Z[p].services.most.concat(Z[p].services.email) : ce,
            o = n.length;
          t < o;
          t++
        )
          if (e == n[t][1]) return n[t];
      return !a && [e, e];
    }
    var $ = te.avail;
    function g(e, a) {
      for (var t, n = 0, o = e.attributes.length, i = a; n < o; n++)
        (t = e.attributes[n]).name &&
          "data-" == t.name.substring(0, 5) &&
          (i[t.name.substring(5)] = t.value);
      return i;
    }
    function s(e, a, t) {
      (t = {
        media: c.linkmedia,
        mediaNode: y.a2a_mediaNode,
        node: t,
        service: e,
        serviceCode: a,
        title: c.linkname,
        url: c.linkurl,
      }),
        Be(t, c);
    }
    const P = Q.templates,
      y = c.node;
    var e = ie(y),
      v = y.className,
      k = y.a2a_follow,
      H = _e(y.getElementsByTagName("a")),
      o = H.length,
      i = K.createElement("div"),
      a = e["a2a-icon-color"] || Q.icon_color,
      t = a && a.split(",", 2),
      n = t && t[0];
    let b = t && t[1];
    var U = "a2a_svg a2a_s__default a2a_s_",
      w = {},
      x = {},
      t = e["a2a-scroll-show"],
      A = 0 <= v.indexOf("a2a_vertical_style"),
      e = v.match(/a2a_kit_size_([\w\.]+)(?:\s|$)/),
      S = e ? e[1] : "16",
      C = parseInt(S, 10),
      e = S + "px";
    S &&
      !isNaN(C) &&
      (a &&
        "unset" != a &&
        (n && "unset" != n && (w.backgroundColor = n), b) &&
        "unset" != b.trim() &&
        (b = b.trim()),
      (y.style.lineHeight = x.height = x.lineHeight = e),
      (x.width = 2 * C + "px"),
      (x.fontSize = "16px"),
      A &&
        ((x.height = x.lineHeight = C / 2 + "px"),
        (x.fontSize = "10px"),
        (x.width = S + "px")),
      t && he(y, t),
      32 != C) &&
      ((w.backgroundSize = w.height = w.lineHeight = w.width = e),
      (x.borderRadius = w.borderRadius = (0.14 * C).toFixed() + "px"),
      (x.fontSize = (parseInt(x.height, 10) + (A ? 4 : 0)) / 2 + "px"));
    const E = {
      facebook_like: function (t, n) {
        (f.href = c.linkurl),
          (f.width = "90"),
          (f.layout = "button_count"),
          (f.ref = "addtoany"),
          (f = g(t, f)),
          (t.style.width = f.width + "px");
        var e,
          a,
          o,
          i,
          r = "v17.0",
          l = ta();
        for (e in (2 == (l = l ? l.replace(/-/, "_") : "en_US").length &&
          (l += "_" + l.toUpperCase()),
        f))
          _ += " data-" + e + '="' + f[e] + '"';
        J.fbAsyncInit ||
          ((J.fbAsyncInit = function () {
            J.FB.init({ appId: "0", status: !1, xfbml: !0, version: r }),
              J.FB.Event.subscribe("edge.create", function (e, a) {
                re.track("Facebook Like", "facebook_like", e),
                  s("Facebook Like", n, t);
              });
          }),
          ((u = K.createElement("span")).id = "fb-root"),
          K.body.insertBefore(u, K.body.firstChild)),
          E.facebook_like_script ||
            ((a = K),
            (o = "facebook-jssdk"),
            (i = a.getElementsByTagName("script")[0]),
            a.getElementById(o)) ||
            (((a = a.createElement("script")).id = o),
            (a.src =
              "https://connect.facebook.net/" +
              l +
              "/sdk.js#xfbml=1&version=" +
              r),
            i.parentNode.insertBefore(a, i)),
          (E.facebook_like_script = 1),
          (t.innerHTML = '<div class="fb-like"' + _ + "></div>");
        try {
          J.FB.XFBML.parse(t);
        } catch (e) {}
      },
      facebook_like_script: X,
      twitter_tweet: function (a, t) {
        (f.url = c.linkurl),
          (f.lang = ta() || "en"),
          (f.related = "AddToAny,micropat");
        var e,
          n,
          o,
          i = P.twitter,
          r = "string" == typeof i ? i.lastIndexOf("@") : null,
          l =
            (r &&
              -1 !== r &&
              ((r = (r = i.substring(++r).split(" ", 1))[0]
                .replace(/:/g, "")
                .replace(/\//g, "")
                .replace(/-/g, "")
                .replace(/\./g, "")
                .replace(/,/g, "")
                .replace(/;/g, "")
                .replace(/!/g, "")),
              (f.related = r + ",AddToAny")),
            (f = g(a, f)),
            K.createElement("a"));
        for (e in ((l.className = "twitter-share-button"), f))
          l.setAttribute("data-" + e, f[e]);
        a.appendChild(l),
          E.twitter_tweet_script ||
            ((i = K),
            (r = "twitter-wjs"),
            (o = i.getElementsByTagName("script")[0]),
            i.getElementById(r)) ||
            (((i = i.createElement("script")).id = r),
            (i.src = "https://platform.twitter.com/widgets.js"),
            o.parentNode.insertBefore(i, o),
            (J.twttr =
              J.twttr ||
              (n = {
                _e: [],
                ready: function (e) {
                  n._e.push(e);
                },
              }))),
          (E.twitter_tweet_script = 1);
        try {
          J.twttr.ready(function (e) {
            E.twitter_bind ||
              (e.events.bind("click", function (r) {
                var e;
                r &&
                  "tweet" == r.region &&
                  (e = (function () {
                    var e = r.target.src.split("#")[1] || "";
                    if (e && -1 < e.indexOf("url=")) {
                      for (
                        var a = {}, t = e.split("&"), n = t.length, o = 0;
                        o < n;
                        o++
                      ) {
                        var i = t[o].split("=");
                        a[i[0]] = i[1];
                      }
                      return a;
                    }
                    return !1;
                  })()) &&
                  e.url &&
                  (re.track(
                    "Twitter Tweet",
                    "twitter_tweet",
                    decodeURIComponent(e.url)
                  ),
                  s("Twitter Tweet", t, a));
              }),
              (E.twitter_bind = 1)),
              e.widgets && e.widgets.load();
          });
        } catch (e) {}
      },
      twitter_tweet_script: X,
      twitter_bind: X,
      pinterest_pin: function (e, a) {
        (f["pin-config"] = "beside"),
          (f["pin-do"] = "buttonPin"),
          (f.media = c.linkmedia),
          (f.url = c.linkurl),
          (f = g(e, f));
        var t,
          n,
          o,
          i = K.createElement("a");
        for (t in f) i.setAttribute("data-" + t, f[t]);
        "beside" == f["pin-config"] &&
          "buttonPin" == f["pin-do"] &&
          (e.style.width = "76px"),
          (i.href =
            "https://www.pinterest.com/pin/create/button/?url=" +
            f.url +
            (f.media ? "&media=" + f.media : "") +
            (f.description
              ? "&description=" +
                encodeURIComponent(f.description).replace(/'/g, "%27")
              : "")),
          ne(e, "click", function () {
            re.track("Pinterest Pin", "pinterest_pin", c.linkurl),
              s("Pinterest Pin", a, e);
          }),
          e.appendChild(i),
          E.pinterest_pin_script ||
            ((n = K),
            (o = n.createElement("script")),
            (n = n.getElementsByTagName("script")[0]),
            (o.async = !0),
            (o.src = "https://assets.pinterest.com/js/pinit.js"),
            n.parentNode.insertBefore(o, n)),
          (E.pinterest_pin_script = 1);
      },
      pinterest_pin_script: X,
      linkedin_share: function (e, a) {
        for (var t in ((f.onsuccess = "kit.linkedin_share_event"),
        (f.url = c.linkurl),
        (f = g(e, f))))
          _ += " data-" + t + '="' + f[t] + '"';
        var n, o;
        (E.linkedin_share_event = function () {
          re.track("LinkedIn Share", "linkedin_share", c.linkurl),
            s("LinkedIn Share", a, e);
        }),
          E.linkedin_share_script ||
            ((n = K),
            (o = n.createElement("script")),
            (n = n.getElementsByTagName("script")[0]),
            (o.type = "text/javascript"),
            (o.async = !0),
            (o.src = "https://platform.linkedin.com/in.js"),
            n.parentNode.insertBefore(o, n)),
          (E.linkedin_share_script = 1),
          (e.innerHTML = '<script type="IN/Share"' + _ + "></script>");
      },
      linkedin_share_event: X,
      linkedin_share_script: X,
    };
    for (let s = 0; s < o; s++) {
      var F = H[s],
        T = F.className,
        B = T.match(/a2a_button_([\w\.]+)(?:\s|$)/),
        N = 0 <= T.indexOf("a2a_dd"),
        W = 0 <= T.indexOf("a2a_counter");
      let e = !!B && B[1];
      var L = F.childNodes,
        B = h(e),
        q = k && ee[e] ? ee[e].name : B[0];
      let a = "_blank",
        t = k && ee[e] ? ee[e].icon : B[2],
        n = k && ee[e] ? ee[e].color : B[3] || "CAE0FF";
      B[4];
      let o = !1,
        i = !1;
      var z = 0 <= v.indexOf("a2a_color_buttons");
      let r, l;
      if (
        ((_ = ""),
        (f = {}),
        N
          ? ((d.target = F),
            ae(p, d),
            (e = "a2a"),
            (n = "0166FF"),
            (I = ue()),
            (t = "page" === p && I ? I : "a2a"),
            (i = W),
            0 <= v.indexOf("a2a_floating_style") && (F.a2a_floating = 1))
          : "feed" == e || "print" == e
          ? (a = "")
          : W && e && oe(e, $)
          ? (i = !0)
          : e && oe(e, m) && (E[e](F, e), (o = !0)),
        e && !oe(e, ["google_plus", "stumbleupon"]) && !o)
      ) {
        if (
          (N ||
            ((y.a2a_codes = y.a2a_codes || []),
            y.a2a_codes.push(e),
            (F.target = a),
            !k || (!ee[e] && h(e, !0))
              ? "feed" === e
                ? (F.href = F.href || c.linkurl)
                : se(le(B), F, c)
              : (F.href = (function (e, a) {
                  let t;
                  var n = g(e, {})["a2a-follow"],
                    a = ee[a];
                  return (
                    (t = n && a && a.url ? a.url.replace("${id}", n) : t) ||
                    e.href
                  );
                })(F, e))),
          L.length)
        ) {
          for (var j, Y, V, M = 0, G = L.length; M < G; M++)
            if (
              ((V =
                (Y = "string" == typeof (j = L[M].className)) &&
                ("a2a_label" === j || 0 <= j.indexOf("a2a_ignore"))),
              1 == L[M].nodeType &&
                (V || (l = !0), Y) &&
                0 <= j.indexOf("a2a_count"))
            ) {
              r = !0;
              break;
            }
          if (!l) {
            ((u = K.createElement("span")).className = U + t + " a2a_img_text"),
              n && !z && (u.style.backgroundColor = "#" + n),
              Xe(t, u, b);
            for (const D in w) u.style[D] = w[D];
            F.insertBefore(u, L[0]);
          }
        } else {
          ((u = K.createElement("span")).className = U + t),
            n && !z && (u.style.backgroundColor = "#" + n),
            Xe(t, u, b);
          for (const O in w) u.style[O] = w[O];
          F.appendChild(u),
            ((u = K.createElement("span")).className = "a2a_label"),
            (u.innerHTML =
              q || ("feed" == p ? Q.localize.Subscribe : Q.localize.Share)),
            q ||
              ((u.className += " a2a_localize"),
              u.setAttribute(
                "data-a2a-localize",
                "inner," + ("feed" == p ? "Subscribe" : "Share")
              )),
            F.appendChild(u);
        }
        if ((i = A && S && C < 20 ? !1 : i) && !r) {
          ((u = K.createElement("span")).className = "a2a_count"),
            (u.a2a = {}),
            (u.a2a.kit = y);
          for (const R in x)
            (z && 0 <= ["width", "height"].indexOf(R)) || (u.style[R] = x[R]);
          F.appendChild(u);
          var I = (
            c.linkurl_implicit && pe
              ? encodeURIComponent(pe)
              : encodeURIComponent(c.linkurl)
          ).replace(/'/g, "%27");
          N
            ? ((u.a2a.is_a2a_dd_counter = 1),
              (y.a2a_dd_counter = u),
              te.get("facebook", u, I))
            : te.get(e, u, I);
        }
        n && z && (F.style.backgroundColor = "#" + n),
          "a2a_dd" != T && de.push(F);
      }
    }
    0 <= v.indexOf("a2a_default_style") &&
      ((i.style.clear = "both"), y.appendChild(i));
  },
  te = {
    get: function (i, r, e, l) {
      Q.counts;
      var s,
        a,
        t = decodeURIComponent(e),
        n = te.bonus(i, t, e, r.a2a.kit),
        c = "",
        o = te[i],
        d = o.api,
        p = (o.cb, r.a2a.is_a2a_dd_counter);
      !l && n && ((c = "2"), te.get(i, r, n, !0)),
        "string" != typeof (s = o[t] = o[t] || {}).num || l
          ? "number" == typeof s.num
            ? p
              ? te.sum(r, s.num, i + c)
              : te.set(r, s.num, i + c)
            : ((s.queued = s.queued || []),
              s.queued.push(r),
              (o.n = o.n || 0),
              o.n++,
              (o["cb" + o.n] = function (e) {
                var a,
                  t = te[i].cb(e, r);
                if (void 0 !== t)
                  if ("string" == typeof t && "facebook" == i)
                    "empty" == t
                      ? (a =
                          "Note: Facebook no longer provides public API access to share counts. AddToAny is soon launching a premium service to manage private API access to Facebook and display share counts.")
                      : "limit" == t &&
                        (a =
                          "Facebook's public share counts API has reached its request limit from your connection. Try again later."),
                      console.log("%c" + a, "color:#1877f2"),
                      l || (r.style.display = "none"),
                      (s.num = "error");
                  else
                    for (var n, o = 0; o < s.queued.length; o++)
                      (n = s.queued[o]),
                        (s.num = t),
                        n.a2a.is_a2a_dd_counter
                          ? te.sum(n, t, i + c)
                          : te.set(n, t, i + c);
              }),
              1 == s.queued.length &&
                ((a =
                  d[0] +
                  e +
                  (d[1] || "&callback") +
                  "=a2a.counters." +
                  i +
                  ".cb" +
                  o.n),
                R.ready(function () {
                  Ue(a);
                })))
          : (r.style.display = "none");
    },
    set: function (e, a, t) {
      var n = a;
      (a = void 0 !== e.a2a.last_count ? e.a2a.last_count + a : a),
        (e.innerHTML = "<span>" + te.format(a) + "</span>"),
        "a2a" != t && ((e.a2a.last_count = n), te.sum(e, n, t));
    },
    sum: function (e, a, t) {
      var e = e.a2a.kit,
        n = e.a2a_counts_sum || 0,
        o = e.a2a_counts_summed || [];
      "a2a" != t &&
        -1 === o.indexOf(t) &&
        ((n = e.a2a_counts_sum = n + a),
        (o = e.a2a_counts_summed = o || []).push(t)),
        e.a2a_dd_counter && te.set(e.a2a_dd_counter, n, "a2a");
    },
    format: function (e) {
      var a = te.format,
        t = "localize";
      return (
        a[t] ||
          ((a.locale = ta()),
          (a[t] =
            "object" == typeof Intl &&
            Intl &&
            "function" == typeof Intl.NumberFormat
              ? function (e) {
                  return e.toLocaleString(a.locale, {
                    maximumFractionDigits: 1,
                  });
                }
              : function (e, a) {
                  return a && "decimal" === a
                    ? Math.round(10 * e) / 10
                    : (e += "").charAt(0) + "," + e.substring(1);
                })),
        (e =
          999 < e
            ? e < 1e6
              ? 1e4 < e
                ? a[t](e / 1e3, "decimal") + "k"
                : a[t](e)
              : e < 1e9
              ? a[t](e / 1e6, "decimal") + "M"
              : "1B+"
            : e)
      );
    },
    bonus: function (e, a, t, n) {
      var o,
        i,
        r = Q.counts,
        l = "%3A%2F%2F";
      return (
        r &&
          (r.recover_protocol &&
            "http" === r.recover_protocol &&
            ((o = t.replace(/^https%/, "http%")), (a = decodeURIComponent(o))),
          r.recover_domain &&
            ((o = encodeURIComponent(
              a.replace(
                /^(https?\:\/\/)(?:[^\/?#]+)([\/?#]|$)/i,
                "$1" + r.recover_domain + "$2"
              )
            )),
            (a = decodeURIComponent(o))),
          r.recover) &&
          "function" == typeof r.recover &&
          ((a = {
            url: ((i = K.createElement("a")).href = a),
            pathParts: i.pathname.split("/"),
            domain: i.hostname,
            protocol: i.protocol,
            kit: n,
          }),
          (o = encodeURIComponent(r.recover(a)))),
        !(
          !o ||
          o === t ||
          (-1 !== ["tumblr"].indexOf(e) &&
            o.split(l).pop() === t.split(l).pop())
        ) && o
      );
    },
    avail: ["facebook", "pinterest", "reddit", "tumblr"],
    facebook: {
      api: [
        "https://graph.facebook.com/?fields=og_object%7Bengagement%7D&id=",
        "&callback",
      ],
      cb: function (e, a) {
        return e &&
          e.og_object &&
          e.og_object.engagement &&
          !isNaN(e.og_object.engagement.count)
          ? e.og_object.engagement.count
          : e && e.error && e.error.code && 4 === e.error.code
          ? "limit"
          : "empty";
      },
    },
    pinterest: {
      api: ["https://widgets.pinterest.com/v1/urls/count.json?url="],
      cb: function (e, a) {
        if (e && !isNaN(e.count)) return e.count;
      },
    },
    reddit: {
      api: ["https://www.reddit.com/api/info.json?url=", "&jsonp"],
      cb: function (e, a) {
        var t = e.data;
        if (e && t && t.children) {
          for (var n = [], o = t.children, i = 0; i < o.length; i++) {
            var r = o[i].data;
            r && !isNaN(r.ups) && n.push(r.ups);
          }
          return 0 < n.length ? Math.max.apply(null, n) : 0;
        }
      },
    },
    tumblr: {
      api: ["https://api.tumblr.com/v2/share/stats?url="],
      cb: function (e, a) {
        if (e && e.response && !isNaN(e.response.note_count))
          return e.response.note_count;
      },
    },
  },
  W = function () {
    var e = Z[w],
      a = x;
    e.bookmarklet && ((e.no_hide = 1), (A = a), L()),
      e.show_menu &&
        ((e.no_hide = 1), (A = a), L(null, e.show_menu), (e.show_menu = X)),
      (W.a2a_done = 1);
  },
  q = function (e) {
    function a(e) {
      0 <= e.className.indexOf("a2a_kit") &&
        ((e.a2a_kit = 1), 0 <= e.className.indexOf("a2a_follow")) &&
        (e.a2a_follow = 1);
    }
    return e
      ? ((e.a2a_index = x), a(e), e)
      : $(function (e) {
          return (e.a2a_index = x), a(e), e;
        }, !0);
  },
  T = function (e) {
    return K.getElementById(e);
  },
  B = function (e, a, t) {
    for (
      var n,
        o = (a = a || T("a2a" + w + "_dropdown")).getElementsByClassName(e),
        i = t ? new RegExp("\\b" + t + "\\b", "i") : null,
        r = [],
        l = 0,
        s = o.length;
      l < s;
      l += 1
    )
      (n = o[l]), (i && !i.test(n.nodeName)) || r.push(n);
    return r;
  },
  _e = function (e) {
    for (var a = [], t = e.length, n = 0; n < t; n++) a[a.length] = e[n];
    return a;
  };
e = (e) => {
  try {
    K.createDocumentFragment().querySelector(e);
  } catch {
    return !1;
  }
  return !0;
};
let Y = function (e, a) {
    var t,
      n = "MatchesSelector",
      o = "ms" + n,
      n = "webkit" + n;
    if (e.matches) t = "matches";
    else if (e[o]) t = o;
    else {
      if (!e[n])
        return !(Y = function (e, a) {
          return !1;
        });
      t = n;
    }
    return (Y = function (e, a) {
      try {
        return e[t](a);
      } catch (e) {
        console.error(`'${a}' is not a valid selector.`);
      }
    })(e, a);
  },
  h = function () {
    let e = !1;
    try {
      var a = Object.defineProperty({}, "passive", {
        get: function () {
          e = !0;
        },
      });
      J.addEventListener("test", null, a);
    } catch (e) {}
    return (
      (h = function () {
        return e;
      }),
      e
    );
  };
const ne = function (e, a, t, n) {
    var o;
    return (
      "object" == typeof n && ((o = !!n.useCapture), (n = h() ? n : o)),
      e.addEventListener(a, t, n),
      {
        destroy: function () {
          e.removeEventListener(a, t, n);
        },
      }
    );
  },
  V = function (e) {
    e.stopPropagation();
  },
  G = function (e) {
    e.preventDefault();
  },
  oe = function (e, a, t, n, o) {
    if ("object" == typeof a) {
      e = e.toLowerCase();
      for (var i, r = a.length, l = 0; l < r; l++)
        if (((i = n ? a[l][n] : a[l]), (i = o ? i[o] : i), t)) {
          if (e == i.toLowerCase()) return a[l];
        } else if (-1 != e.indexOf(i.toLowerCase()) && "" !== i) return a[l];
    }
    return !1;
  },
  fe = function (e, a) {
    var t,
      n,
      o,
      i = [];
    for (t in e)
      e.hasOwnProperty(t) &&
        ((n = a ? a + "[" + t + "]" : t),
        (o = e[t]),
        i.push(
          "object" == typeof o
            ? fe(o, n)
            : encodeURIComponent(n) + "=" + encodeURIComponent(o)
        ));
    return i.join("&");
  };
function me(n, o, e) {
  let i,
    r,
    t,
    l,
    s,
    c,
    d = 0,
    p = !1,
    u = !1,
    a = !0;
  const _ = !o && 0 !== o && "function" == typeof J.requestAnimationFrame;
  if ("function" != typeof n) throw new TypeError("Not a function");
  function f(e) {
    var a = i,
      t = r;
    return (i = r = void 0), (d = e), (l = n.apply(t, a));
  }
  function m(e, a) {
    return _
      ? (J.cancelAnimationFrame(s), J.requestAnimationFrame(e))
      : setTimeout(e, a);
  }
  function h(e) {
    var a = e - c,
      e = e - d;
    return void 0 === c || o <= a || a < 0 || (u && e >= t);
  }
  function g() {
    var e,
      a = Date.now();
    if (h(a)) return y(a);
    s = m(
      g,
      ((e = (a = a) - c), (a -= d), (e = o - e), u ? Math.min(e, t - a) : e)
    );
  }
  function y(e) {
    return (s = void 0), a && i ? f(e) : ((i = r = void 0), l);
  }
  function v(...e) {
    var a = Date.now(),
      t = h(a);
    if (((i = e), (r = this), (c = a), t)) {
      if (void 0 === s) return (e = c), (d = e), (s = m(g, o)), p ? f(e) : l;
      if (u) return (s = m(g, o)), f(c);
    }
    return void 0 === s && (s = m(g, o)), l;
  }
  return (
    (o = +o || 0),
    e &&
      ((p = !!e.leading),
      (u = "maxWait" in e),
      (t = u ? Math.max(+e.maxWait || 0, o) : t),
      (a = "trailing" in e ? !!e.trailing : a)),
    (v.cancel = function () {
      void 0 !== s &&
        !(function (e) {
          if (_) return J.cancelAnimationFrame(e);
          clearTimeout(e);
        })(s),
        (d = 0),
        (i = c = r = s = void 0);
    }),
    (v.flush = function () {
      return void 0 === s ? l : y(Date.now());
    }),
    (v.pending = function () {
      return void 0 !== s;
    }),
    v
  );
}
const he = function (e, a) {
    (a = a.split(","))[0] && a[0].trim(), a[1] && a[1].trim();
    var n,
      t = parseInt(a[0], 10) || 0,
      a = parseInt(a[1], 10) || 0,
      e = function (e, a, t) {
        var n = J.pageYOffset,
          o = K.documentElement.scrollHeight - J.innerHeight - n;
        e.style.display = a <= n && t <= o ? "" : "none";
      }.bind(null, e, t, a);
    (t || a) &&
      ((he.handlers = he.handlers || []),
      (n = he.handlers).push(e),
      n.length < 2 &&
        ((t = (function (e, a, t) {
          let n = !0,
            o = !0;
          if ("function" != typeof e) throw new TypeError("Not a function");
          return (
            t &&
              ((n = "leading" in t ? !!t.leading : n),
              (o = "trailing" in t ? !!t.trailing : o)),
            me(e, a, { leading: n, trailing: o, maxWait: a })
          );
        })(function () {
          for (var e = 0, a = n, t = a.length; e < t; e++) a[e]();
        }, 20)),
        J.addEventListener("scroll", t)),
      e());
  },
  a = "undefined" != typeof WeakMap && "function" == typeof new WeakMap().get;
function ge(n, o, i) {
  if (!a) return n;
  if ("function" != typeof n || (null != o && "function" != typeof o))
    throw new TypeError("Not a function");
  function r(...e) {
    var a = o ? o.apply(this, e) : e[0],
      t = r.cache;
    return t.has(a)
      ? t.get(a)
      : ((e = n.apply(this, e)),
        (r.cache = ((!i || null != e) && t.set(a, e)) || t),
        e);
  }
  return (r.cache = new WeakMap()), r;
}
function ye() {
  const e = w;
  var a = "a2a" + e;
  const t = Z[e];
  d(T(a + "_dropdown")) &&
    "none" === Se(T(a + "_full"), "display") &&
    (t.out_delay = setTimeout(function () {
      g("none", e), (t.out_delay = null);
    }, 501));
}
function ve(e, a) {
  var t = Math.round,
    e = e.getBoundingClientRect(),
    n = "scroll" === a ? Ce("w") : 0,
    a = "scroll" === a ? Ce("h") : 0;
  return { left: t(e.left + n), top: t(e.top + a) };
}
function ke(e) {
  var a = 0,
    t = 0;
  return (
    "number" == typeof J.innerWidth
      ? ((a = J.innerWidth), (t = J.innerHeight))
      : K.documentElement &&
        (K.documentElement.clientWidth || K.documentElement.clientHeight)
      ? ((a = K.documentElement.clientWidth),
        (t = K.documentElement.clientHeight))
      : K.body &&
        (K.body.clientWidth || K.body.clientHeight) &&
        ((a = K.body.clientWidth), (t = K.body.clientHeight)),
    "w" == e ? a : t
  );
}
function be() {
  var e = T("a2a" + w + "_find");
  "none" != T("a2a" + w + "_find_container").style.display && e.focus();
}
function we() {
  var e = Z[w].main_services,
    a = e.length,
    t = T("a2a" + w + "_find").value;
  if ("" !== t)
    for (var n, o = t.split(" "), i = 0; i < a; i++)
      (n = e[i].a2a.serviceNameLowerCase),
        oe(n, o, !1)
          ? (e[i].style.display = "")
          : (e[i].style.display = "none");
  else Ee();
}
function xe() {
  w, T("a2a_overlay");
  for (
    var e = T("a2a_modal"), a = B("a2a_modal_body", e), t = 0;
    t < a.length;
    t++
  )
    a[t].style.display = "none";
  y.show(), l("show", e);
}
const Ae = function () {
    var e = (w = Z["n" + (A || x)].type);
    Z[e] && Z[e].out_delay && clearTimeout(Z[e].out_delay);
  },
  g = function (e, a) {
    var t, n;
    ("none" == e && Z[a].no_hide) ||
      ((t = T("a2a" + a + "_dropdown")),
      K.activeElement,
      (n = L.key_listener),
      (t.style.display = e),
      Ae(),
      "none" == e
        ? (L["doc_click_listener_" + a].destroy(),
          delete Z[a].doc_click_close_mini,
          n && n[a] && n[a].destroy())
        : o.forEach((e) => {
            e !== a && L["doc_click_listener_" + e] && g("none", e);
          }));
  },
  ie = function (e) {
    if (!e) return {};
    for (var a, t = 0, n = e.attributes.length, o = {}; t < n; t++)
      (a = e.attributes[t]).name &&
        "data-" == a.name.substring(0, 5) &&
        (o[a.name.substring(5)] = a.value);
    return o;
  },
  Se = function (e, a) {
    return e
      ? e.currentStyle
        ? e.currentStyle[
            a.replace(/-(\w)/gi, function (e, a) {
              return a.toUpperCase();
            })
          ]
        : J.getComputedStyle(e, null).getPropertyValue(a)
      : null;
  },
  d = function (e) {
    e = Se(e, "display");
    return !(!e || "none" === e);
  },
  Ce = function (e) {
    var a = 0,
      t = 0;
    return (
      "number" == typeof J.pageYOffset
        ? ((a = J.pageXOffset), (t = J.pageYOffset))
        : K.body && (K.body.scrollLeft || K.body.scrollTop)
        ? ((a = K.body.scrollLeft), (t = K.body.scrollTop))
        : K.documentElement &&
          (K.documentElement.scrollLeft || K.documentElement.scrollTop) &&
          ((a = K.documentElement.scrollLeft),
          (t = K.documentElement.scrollTop)),
      "w" == e ? a : t
    );
  },
  Ee = function (e) {
    for (
      var e = e || w, a = Z[e].main_services_col_1, t = a.length, n = 0;
      n < t;
      n++
    )
      a[n].style.display = "";
  },
  Fe = function (e) {
    var a,
      t,
      n = K.getElementsByTagName("meta"),
      o = n.length;
    if ((a = J.getSelection ? J.getSelection() + "" : a) && "" !== a) return a;
    if (
      Z["n" + x].linkurl === location.href &&
      -1 === ["facebook", "twitter", "linkedin"].indexOf(e)
    )
      for (var i, r, l = 0; l < o; l++)
        if (
          ((i = (i = n[l].getAttribute("name")) ? i.toLowerCase() : ""),
          (r = (r = n[l].getAttribute("property")) ? r.toLowerCase() : ""),
          (i && "description" === i) || (r && "og:description" === r))
        ) {
          t = n[l].getAttribute("content");
          break;
        }
    return t ? t.substring(0, 1200) : "";
  },
  Te = function (e, a) {
    var t = Q.callbacks || [],
      n = Q.tracking_callback,
      o = {};
    n &&
      (n[e]
        ? t.push(n)
        : n[0] == e
        ? ((o[e] = n[1]), t.push(o))
        : "function" == typeof n && ((o[e] = n), t.push(o)),
      (Q.tracking_callback = null));
    for (var i, r, l = 0, s = t.length; l < s; l++)
      if (
        "function" == typeof (i = t[l][e]) &&
        ((r = i(a)), "ready" == e && (i = null), void 0 !== r)
      )
        return r;
  },
  Be = (e, a, t) => {
    let n = !1;
    var o = Te("share", e);
    return (
      void 0 !== o &&
        (o.url && ((a.linkurl = o.url), (a.linkurl_implicit = !1)),
        o.title && ((a.linkname = o.title), (a.linkname_implicit = !1)),
        o.media && (a.linkmedia = o.media),
        ze(e.node),
        o.stop) &&
        t &&
        ((n = !0), G(t)),
      n
    );
  },
  Ne = (e, a) => {
    navigator.canShare && navigator.canShare(e)
      ? navigator.share(e).catch((e) => {
          "AbortError" !== e.name ? a() : Te("shareError", e);
        })
      : a();
  },
  Le = (e) => {
    var a = e.kit || e.node,
      t = ie(a)["a2a-url"],
      t =
        (t && ((e.linkurl = t), (e.linkurl_implicit = !1)), ie(a)["a2a-title"]),
      t =
        (t && ((e.linkname = t), (e.linkname_implicit = !1)),
        ie(a)["a2a-media"]);
    t && (e.linkmedia = t);
  },
  ze = function (e) {
    var a = location.href,
      t = K.title || a,
      n = e.parentElement,
      n = Z["n" + (n.a2a_index || n.parentElement.a2a_index || A || x)],
      o = n.type,
      i = e.a2a.safename,
      a = n.linkurl_implicit && a != n.linkurl ? a : n.linkurl,
      r = encodeURIComponent(a).replace(/'/g, "%27"),
      t = n.linkname_implicit && t != n.linkname ? t : n.linkname,
      t = encodeURIComponent(t).replace(/'/g, "%27"),
      l = n.linkmedia,
      l = l ? encodeURIComponent(l).replace(/'/g, "%27") : "",
      s = encodeURIComponent(Fe(i)).replace(/'/g, "%27"),
      n =
        !n.track_links || ("page" != o && "mail" != o)
          ? ""
          : "&linktrack=" +
            n.track_links +
            "&linktrackkey=" +
            encodeURIComponent(n.track_links_key),
      c = e.a2a.customserviceuri || !1;
    const d = e.a2a.stype;
    var p = e.a2a.js_src;
    let u = e.a2a.url;
    var _ = e.a2a.media,
      f = e.a2a.na;
    let m;
    const h = Q.templates,
      g = h[i],
      y = "email";
    var v = -1 != F.indexOf("Safari") && -1 == F.indexOf("Chrome");
    function k(e) {
      return encodeURIComponent(e)
        .replace(/'/g, "%27")
        .replace(/%24%7Blink%7D/g, "${link}")
        .replace(/%24%7Blink_noenc%7D/g, "${link_noenc}")
        .replace(/%24%7Blink_nohttp%7D/g, "${link_nohttp}")
        .replace(/%24%7Bmedia%7D/g, "${media}")
        .replace(/%24%7Btitle%7D/g, "${title}")
        .replace(/%24%7Btitle_noenc%7D/g, "${title_noenc}")
        .replace(/%24%7Bnotes%7D/g, "${notes}");
    }
    if (_ && l) (e.a2a.js_skip = 1), (e.target = "_blank");
    else if (d && "js" == d && p)
      (e.target = "_top"),
        "javascript:" == p.substring(0, 11)
          ? ((_ = p.replace("${link}", a.replace(/'/g, "\\'"))),
            (e.a2a.literalJS = _.substring(11)))
          : (e.a2a.externalJS = p),
        (m = "#" + i);
    else if (u && (i != y || (i == y && (I || v))) && !n) {
      if (((e.target = "_top"), "object" == typeof g))
        for (const b in g) u = We(u, b, k(g[b]));
      else "string" == typeof g && (u = We(u, "text", k(g)));
      m = u
        .replace(/\$\{link\}/g, r)
        .replace(/\$\{media\}/g, l)
        .replace(/\$\{link_noenc\}/g, a)
        .replace(/\$\{link_nohttp\}/g, a.replace(/^https?:\/\//, ""))
        .replace(/\$\{title\}/g, t);
    } else
      c &&
        "undefined" != c &&
        (m = c
          .replace(/A2A_LINKNAME_ENC/, t)
          .replace(/A2A_LINKURL_ENC/, r)
          .replace(/A2A_LINKNOTE_ENC/, s));
    return (
      I && f && (e.target = "_top"),
      (e.href =
        m ||
        "https://www.addtoany.com/add_to/" +
          i +
          "?linkurl=" +
          r +
          "&linkname=" +
          t +
          (l ? "&linkmedia=" + l : "") +
          n +
          (function () {
            let e = "";
            return (
              g
                ? (e = "&" + fe({ template: g }))
                : h[y] && d && d == y && (e = "&" + fe({ template: h[y] })),
              e
            );
          })() +
          ("feed" == o ? "&type=feed" : "") +
          "&linknote=" +
          s),
      !0
    );
  },
  l = function (a, t, n) {
    var e, o, i, r, l, s;
    t &&
      ((e = d(t)),
      (o = t.classList),
      (i = "a2a_starting"),
      (r = "transitionend"),
      "show" === a
        ? e ||
          ((l = t),
          (s = o) && Se(l, "transition-duration") && s.add(i),
          (t.style.display = "block"),
          o &&
            setTimeout(function () {
              o.remove(i);
            }, 1))
        : o
        ? e
          ? (t.addEventListener(
              r,
              function e() {
                (t.style.display = "show" === a ? "block" : "none"),
                  n && n(),
                  t.removeEventListener(r, e, !1);
              },
              !1
            ),
            o.add(i))
          : n && n()
        : n && ((t.style.display = "none"), n()));
  },
  y = {
    show: function () {
      var e = "a2a" + w,
        a = T("a2a_overlay"),
        t = T(e + "_find");
      "none" === Se(a, "display") &&
        (l("show", a),
        (y.key_listener = ne(K, "keydown", function (e) {
          var e = e.which || e.keyCode,
            a = K.activeElement;
          27 == e && t != a ? je(w) : 40 < e && e < 91 && t != a && t.focus();
        })));
    },
    hide: function (e) {
      var a = T("a2a_overlay"),
        t = y,
        n = t.key_listener;
      l("hide", a, e),
        n &&
          (n.destroy(),
          setTimeout(function () {
            delete t.key_listener;
          }, 1));
    },
    key_listener: X,
  },
  je = function (e) {
    var a = "a2a" + e,
      t = T(a + "_full"),
      n = T("a2a_overlay"),
      o = T("a2a_modal");
    (N.full_shown = !1),
      l("hide", o),
      l("hide", t),
      y.hide(function () {
        (n.style.display = o.style.display = "none"),
          t && (t.style.display = "none"),
          (s.showing = !1),
          d(T(a + "_dropdown")) && T(a + "_show_more_less").focus();
      });
  },
  N = function () {
    var e = "a2a" + w,
      a = B,
      t = T(e + "_full"),
      n = a("a2a_full_header", t)[0],
      e = T(e + "_full_services"),
      a = a("a2a_full_footer", t)[0];
    Me(w),
      y.show(),
      l("show", t),
      (e.style.cssText = "height:calc(10px)"),
      e.style.height.length &&
        (e.style.height =
          "calc(100% - " + (n.offsetHeight + a.offsetHeight) + "px)"),
      t.focus(),
      c("full");
  },
  L =
    ((N.full_shown = X),
    function (e, a) {
      v(e);
      var t,
        n,
        o,
        i,
        r,
        l,
        s,
        c,
        d,
        p,
        u = Z["n" + x],
        _ = D ? "touchstart" : "click",
        f = !(!D || !h()) && { passive: !0 },
        m = "a2a" + (w = u.type),
        m = T(m + "_dropdown");
      Me(w),
        g("block", w),
        (n = [m.clientWidth, m.clientHeight]),
        (o = ke("w")),
        (i = ke("h")),
        e
          ? ((t = (l = e.a2a_floating) ? "viewport" : "scroll"),
            (m.style.position = l ? "fixed" : ""),
            (r = l ? 0 : Ce("w")),
            (l = l ? 0 : Ce("h")),
            (d = (d = e.getElementsByTagName("img")[0])
              ? ((s = ve(d, t)), (c = d.clientWidth), d.clientHeight)
              : ((s = ve(e, t)), (c = e.offsetWidth), e.offsetHeight)),
            s.left - r + n[0] + c > o && (s.left = s.left - n[0] + c - 8),
            ("up" == u.orientation ||
              ("down" != u.orientation &&
                s.top - l + n[1] + d > i &&
                s.top > n[1])) &&
              (s.top = s.top - n[1] - d),
            (m.style.left = (s.left < 0 ? 0 : s.left) + 2 + "px"),
            (m.style.top = s.top + d + "px"))
          : ((m.style.position = (a = a || {}).position || "absolute"),
            (m.style.left = a.left || o / 2 - n[0] / 2 + "px"),
            (m.style.top = a.top || i / 2 - n[1] / 2 + "px")),
        Z[w].doc_click_close_mini ||
          Z[w].no_hide ||
          ((Z[w].doc_click_close_mini =
            ((p = w),
            function (e) {
              ("number" == typeof e.button && 0 < e.button) ||
                (Z[w].last_focus && Z[w].last_focus.focus(), g("none", p));
            })),
          (L["doc_click_listener_" + w] = ne(
            K,
            _,
            Z[w].doc_click_close_mini,
            f
          ))),
        (L.key_listener = L.key_listener || {}),
        (L.key_listener[w] = ne(K, "keydown", function (e) {
          27 != (e.which || e.keyCode) || y.key_listener || g("none", w);
        }));
    }),
  Me =
    ((L.key_listener = X),
    function (e) {
      if (!Ie[e]) {
        var a,
          t,
          n = "a2a" + e,
          o = K.createDocumentFragment(),
          i = K.createDocumentFragment(),
          r = Z[e].services,
          l = T(n + "_find"),
          s = K.createElement("i");
        if ("mail" != e) {
          for (
            var c = 0,
              d = r.most,
              p = d.length,
              u = parseInt(Z[e].num_services),
              _ = 0,
              f = Z[e].exclude_services;
            c < p;
            c++
          ) {
            var m = d[c],
              h = le(m);
            (f && oe(m[1], f, !0)) || o.appendChild(se(h)),
              !(_ < u) || (f && oe(m[1], f, !0)) || (i.appendChild(se(h)), _++);
          }
          T(n + "_full_services").appendChild(o),
            T(n + "_mini_services").appendChild(i);
        }
        (t = T(n + "_full_services")),
          (s.className = "a2a_i"),
          (a = s.cloneNode()),
          t.appendChild(s),
          t.appendChild(a);
        for (var c = 0, g = r.email, y = g.length; c < y; c++) {
          var v = g[c],
            k = le(v);
          (f && oe(v[1], f, !0)) || T(n + "_2_col1").appendChild(se(k));
        }
        qe(),
          De(e),
          "mail" != e &&
            (l.onkeydown = function (e) {
              (e = e || J.event), (e = e.which || e.keyCode);
              if (13 == e) {
                for (
                  var a, t = 0, n = Z[w].main_services, o = n.length;
                  t < o;
                  t++
                )
                  if ("none" != (a = n[t]).style.display) return a.focus(), !1;
              } else
                27 == e && ("" == l.value && l.blur(), (l.value = ""), we());
            }),
          (Ie[e] = !0);
      }
    }),
  Ie = { feed: !1, page: !1 },
  De = (e) => {
    var a, t;
    Z[e] &&
      (Ye(n[e], e, " a2a_sss"),
      (a = e),
      (t = Z[a]),
      (a = "a2a" + a),
      (t.main_services_col_1 = B("a2a_i", T(a + "_full_services"), "a")),
      (t.main_services = t.main_services_col_1),
      (t.email_services = B("a2a_i", T(a + "_2_col1"), "a")),
      (t.all_services = t.main_services.concat(t.email_services)),
      Ee(e));
  };
var Oe = p;
let Re = (e, a) => {
  ne(e, "click", a), (Re = p);
};
function $e(e) {
  const a = s,
    t = "focus",
    n = "waiting";
  function o() {
    c("post"), s.show(e), J.removeEventListener(t, o), (a[n] = 0);
  }
  a[n] ||
    ((a[n] = 1),
    J.addEventListener("blur", function e() {
      J.removeEventListener("blur", e), J.addEventListener(t, o);
    }));
}
function Pe(e, a) {
  var t,
    o,
    i = /^$|^module$|\/(?:java|ecma)script/i;
  function n() {
    var e = K.createEvent("Event");
    e.initEvent("DOMContentLoaded", !0, !0), K.dispatchEvent(e);
  }
  (a.innerHTML = e),
    (e = (e = a).querySelectorAll("script")),
    (o = []),
    [].forEach.call(e, function (n) {
      ((t = n.getAttribute("type")) && !i.test(t)) ||
        o.push(function (e) {
          var a, t;
          (a = n),
            (e = e),
            (t = K.createElement("script")),
            a.src
              ? ((t.onload = e), (t.onerror = e), (t.src = a.src))
              : (t.textContent = a.innerText),
            K.head.appendChild(t),
            a.src || e();
        });
    }),
    o.length &&
      (function e(a, t, n) {
        a[(n = void 0 === n ? 0 : n)](function () {
          ++n === a.length ? t() : e(a, t, n);
        });
      })(o, n);
}
const s = {
    off: function () {
      var e = Q.thanks;
      return (
        ("boolean" == typeof e && !1 === e) ||
        (e && "boolean" == typeof e.postShare && !1 === e.postShare)
      );
    },
    show: function (e) {
      var a = "a2a" + w;
      const t = T("a2a_modal");
      a = T(a + "_full");
      const n = T("a2a_thanks");
      var o = Q.thanks,
        i = s.off();
      function r() {
        t.setAttribute("aria-label", "Thanks for sharing"),
          xe(),
          (n.style.display = "inline-block"),
          (s.showing = !0);
      }
      _.lit() &&
        o &&
        !i &&
        (_.has(!0) || o.postShare) &&
        !s.showing &&
        "none" === Se(t, "display") &&
        (He(e), d(a) ? l("hide", a, r) : r());
    },
    showing: !1,
  },
  He = (e) => {
    var a = e ? e.a2a_index : null,
      t = e ? e.a2a_codes : ["facebook", "twitter", "email"],
      e = Z["n" + (a || x)],
      a = e.type,
      n = T("a2a_thanks"),
      o = "a2a_thanks_kit";
    let i = T(o),
      r =
        (i
          ? (i.innerHTML = "")
          : (((i = K.createElement("div")).id = o), n.appendChild(i)),
        "");
    o = K.createElement("div");
    (o.className = "a2a_kit a2a_kit_size_32 a2a_default_style"),
      o.setAttribute("data-a2a-url", e.linkurl),
      o.setAttribute("data-a2a-title", e.linkname),
      e.linkmedia && o.setAttribute("data-a2a-media", e.linkmedia),
      (o.style.display = "flex"),
      (o.style.justifyContent = "center");
    for (let e = 0; e < t.length && e < 8; e++)
      r += '<a class="a2a_button_' + t[e] + '"></a>';
    (o.innerHTML = r), i.appendChild(o), ae("page", { target: o }), (w = a);
  },
  Ue = function (e, a) {
    var t = K.createElement("script");
    (t.src = e),
      a &&
        (t.readyState
          ? (t.onreadystatechange = function () {
              ("loaded" !== t.readyState && "complete" !== t.readyState) ||
                ((t.onreadystatechange = null), a());
            })
          : (t.onload = a)),
      K.body.appendChild(t);
  },
  _ = {
    lit: function () {
      var e = Q.thanks;
      return !(
        (T("wpadminbar") || (void 0 !== J.wp && J.wp.customize)) &&
        (!e || !e.postShare)
      );
    },
    has: function (e = !1) {
      var a = {},
        t = !1;
      return (
        (("object" == typeof J.adsbygoogle && J.adsbygoogle.loaded) ||
          "object" == typeof J.google_ad_modifications) &&
          (a.as = t = !0),
        "object" == typeof J.googletag &&
          J.googletag.slots &&
          "function" == typeof Object.keys &&
          0 < Object.keys(J.googletag.slots).length &&
          (a.dc = t = !0),
        J.vglnk && J.vglnk.key && (a.vl = t = !0),
        J.__SKIM_JS_GLOBAL__ && (a.sl = t = !0),
        (J.amazon_ad_tag || J.amzn_assoc_ad) && (a.az = t = !0),
        !(e && !a.as && !a.dc) && (t ? a : void 0)
      );
    },
    set: function (e = !1) {
      w;
      var o = "a2a_thanks_a2a_ad",
        a = "a2a_thanks_pub_ad",
        i = T("a2a_thanks"),
        t = Q.thanks,
        n =
          ("boolean" == typeof t && !1 === t) ||
          (t && "boolean" == typeof t.postShare && !1 === t.postShare) ||
          (t && "boolean" == typeof t.ad && !1 === t.ad),
        r = t && void 0 !== t.ad && !1 !== t.ad;
      let l = T(o),
        s = T(a);
      function c() {
        var e,
          a = encodeURIComponent(location.href),
          t = "width:300px;height:250px;";
        if ((s && (s.style.display = "none"), l))
          J.postMessage &&
            T("a2a_thanks_ifr").contentWindow.postMessage(
              "a2a_refresh_slot1",
              "*"
            );
        else {
          if (J.postMessage) {
            const n = ne(J, "message", function (e) {
              var a = e.origin;
              (a && ".a2a.me" !== a.substr(-7)) ||
                ((a = e.data) &&
                  "a2a_display_slot1" === a &&
                  ((l.style.display = ""), n.destroy()));
            });
          } else l.style.display = "";
          ((e = K.createElement("iframe")).id = "a2a_thanks_ifr"),
            (e.title = "Post-Share Container"),
            e.setAttribute("transparency", "true"),
            e.setAttribute("allowTransparency", "true"),
            e.setAttribute("frameBorder", "0"),
            (e.src = "https://www.a2a.me/html/tag.html#url=" + a),
            ((l = K.createElement("div")).id = o),
            l.insertBefore(e, null),
            (e.style = t),
            (l.style =
              t +
              "display:none;border-radius:6px;margin:45px auto 0;overflow:hidden;"),
            i.appendChild(l),
            d(),
            ne(J, "resize", d);
        }
      }
      function d() {
        var e = J.innerHeight,
          a = e < 460,
          t = Math.max(0.5, parseInt((e / 600).toFixed(1), 10)),
          n = Math.floor((250 * (t - 1)) / 2);
        (l.style.marginTop = e < 360 ? "25px" : "45px"),
          (l.style.transform = a
            ? "translateY(" + n + "px) scale(" + t + ")"
            : "none");
      }
      ((_.lit() && _.has(!0) && !n) || r) &&
        (t && "string" == typeof t.ad && t.ad && 0.5 <= Math.random()
          ? (l && (l.style.display = "none"),
            s ||
              (((n = K.createElement("div")).id = a),
              (n.style.margin = "45px auto 0"),
              i.appendChild(n),
              Pe(t.ad, n)))
          : e && c());
    },
  },
  c = function (a) {
    var e, t, n, o, i, r, l;
    (c.a2a = c.a2a || {}),
      c.a2a[a] ||
        ((e = "&domain=" + encodeURIComponent(location.href.split("/")[2])),
        (t = (r = _.has()) && r.as ? "&as=1" : ""),
        (n = r && r.dc ? "&dc=1" : ""),
        r && r.vl,
        (o = r && r.sl ? "&sl=1" : ""),
        (i = r && r.az ? "&az=1" : ""),
        (r = r ? "&ad=1" : ""),
        (l = new XMLHttpRequest()).open(
          "POST",
          "https://stats.addtoany.com/menu"
        ),
        l.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
        (l.timeout = 3e3),
        (l.ontimeout = function (e) {
          l.abort(), "post" === a && _.set();
        }),
        "post" === a &&
          (l.onload = function (e) {
            var a = this.responseText;
            200 === this.status && a && "1" === a ? _.set(!0) : _.set();
          }),
        l.send("view=" + a + e + r + t + n + o + i),
        (c.a2a[a] = 1));
  },
  re = () => {
    const o = w,
      i = "feed";
    var e = () => {
      "object" == typeof J.pageTracker && "object" == typeof J._gat
        ? (re.track = function (e, a, t) {
            o != i &&
              J.pageTracker._trackSocial(
                "AddToAny",
                e,
                t || Z["n" + x].linkurl
              );
          })
        : "object" == typeof J._gaq
        ? (re.track = (e, a, t) => {
            o != i &&
              J._gaq.push([
                "_trackSocial",
                "AddToAny",
                e,
                t || Z["n" + x].linkurl,
              ]);
          })
        : "string" == typeof J.GoogleAnalyticsObject &&
          "object" != typeof J.dataLayer
        ? (re.track = (e, a, t) => {
            o != i &&
              ((t = t || Z["n" + x].linkurl),
              J[GoogleAnalyticsObject]("send", "social", {
                socialNetwork: "AddToAny",
                socialAction: e,
                socialTarget: t,
                page: t,
              }));
          })
        : "object" == typeof J.dataLayer &&
          (re.track = (e, a, t) => {
            var n;
            o != i &&
              ((t = t || Z["n" + x].linkurl),
              (n =
                (n = Q.callbacks) &&
                n.length &&
                "function" == typeof n.some &&
                n.some((e) => {
                  e = e.share;
                  return (
                    !!e &&
                    /dataLayer[^]+AddToAnyShare[^]+socialAction/.test(
                      e.toString()
                    )
                  );
                })),
              (e = {
                addtoany_service: e,
                addtoany_shared_url: t,
                socialNetwork: "AddToAny",
                socialAction: e,
                socialTarget: t,
                event_category: "AddToAny",
                event_label: t,
              }),
              J.gtag
                ? (function () {
                    J.dataLayer.push(arguments);
                  })("event", "AddToAnyShare", { ...e })
                : n || J.dataLayer.push({ event: "AddToAnyShare", ...e }));
          });
    };
    (re.track = p), e(), re.track === p && J.addEventListener("load", e);
  },
  We =
    ((re.track = X),
    function (e, a, t) {
      var n,
        o = new RegExp(
          "[?&]" +
            a.replace(/[.\\+*?\[\^\]$(){}=!<>|:\-]/g, "\\$&") +
            "=([^&#]*)",
          "i"
        ),
        i = o.exec(e);
      return null === i
        ? e + (n = /\?/.test(e) ? "&" : "?") + a + "=" + t
        : ((n = i[0].charAt(0)), e.replace(o, n + a + "=" + t));
    }),
  qe = function () {
    var e = Z[w].prioritize;
    e && Ye(e, w);
    var a = parseInt(Z[w].num_services),
      t = T("a2a" + w + "_full_services"),
      n = T("a2a" + w + "_mini_services");
    if (Z[w].custom_services) {
      var o = Z[w].custom_services,
        i = o.length;
      o.reverse();
      for (var r, l, s = 0; s < i; s++)
        o[s] &&
          ((r = [
            o[s][0],
            o[s][0].replace(/ /g, "_"),
            null,
            null,
            {},
            o[s][1],
            o[s][2],
          ]),
          (r = le(r)),
          (l = se(r)),
          t.insertBefore(l, t.firstChild),
          (l = se(r)),
          n.insertBefore(l, n.firstChild));
    }
    if ("page" == w && Q.add_services) {
      const o = Q.add_services,
        i = o.length;
      let e = 0;
      for (var c, s = 0; s < i; s++)
        o[s] &&
          ((e += 1),
          (c = [o[s].name, o[s].safe_name, null, null, {}, null, o[s].icon]),
          (c = le(c)),
          (l = se(c)),
          t.insertBefore(l, t.firstChild),
          (l = se(c)),
          n.insertBefore(l, n.firstChild));
    }
    if ((e = B("a2a_i", n, "a")).length > a)
      for (var s = 0, d = e.length; s < d - a; s++) n.removeChild(n.lastChild);
  },
  Ye = function (e, a, t) {
    var n = parseInt(Z[a].num_services),
      o = T("a2a" + a + "_full_services"),
      i = T("a2a" + a + "_mini_services"),
      r = B("a2a_i", o, "a"),
      l = B("a2a_i", i, "a"),
      s = [];
    if (e) {
      for (var c = e.length - 1; -1 < c; c--) {
        var d = e[c],
          d = oe(d, r, !0, "a2a", "safename");
        d &&
          (t && (d.className = d.className + t),
          o.insertBefore(d, o.firstChild),
          s.push(d));
      }
      if (0 < s.length) {
        for (var p, c = 0; c < s.length; c++)
          (p =
            oe(s[c].a2a.safename, l, !0, "a2a", "safename") ||
            ((p = s[c].a2a),
            (p = le([
              p.servicename,
              p.safename,
              p.serviceIcon,
              p.serviceColor,
              {
                src: p.js_src,
                url: p.url,
                type: p.serviceType,
                pu: p.popup,
                na: p.na,
                media: p.media,
              },
            ])),
            se(p))),
            t && (p.className = p.className + t),
            i.insertBefore(p, i.firstChild);
        if ((l = B("a2a_i", i, "a")).length > n)
          for (var c = 0, u = l.length; c < u - n; c++)
            i.removeChild(i.lastChild);
      }
    }
  };
let Ve = function () {
    ae("page");
    for (
      var e,
        a,
        t = S.sheet || S.styleSheet || {},
        n = ("insertRule" in t),
        o = ("addRule" in t),
        i = ce.concat([[0, 0, "a2a", "0166FF"]]),
        r = 0,
        l = i.length;
      r < l;
      r++
    )
      (e = ".a2a_s_" + i[r][2]),
        (a = "background-color:#" + i[r][3] + ";"),
        n ? t.insertRule(e + "{" + a + "}", 0) : o && t.addRule(e, a, 0);
    {
      var s = Q.static_server,
        c = K.createElement("link"),
        d = s != u ? s + "/" : u + "/svg/";
      (c.rel = "stylesheet"),
        (c.href = d + "icons.34.svg.css"),
        M.appendChild(c);
    }
    Ve = p;
  },
  Ge = !1,
  Je = !J.a2a.h1 && Q.static_server == u;
const Ke = (e, a, t) => {
    (e = t ? e.replace(/#FFF/gi, t) : e),
      (a.innerHTML =
        '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">' +
        e +
        "</svg>");
  },
  Xe = (e, a, t) => {
    var n = b[e];
    -1 !== i.indexOf(e) &&
      (n
        ? Ke(n, a, t)
        : (ea.push({ name: e, node: a, color: t }),
          Je && !Ge ? Qe(e) : Ge || Ze()));
  },
  Qe = (e) => {
    import(`/menu/svg/icons/${e}.js`);
  },
  Ze = () => {
    var e, a, t;
    Ge ||
      ((t = Q.static_server),
      (e = K.createElement("script")),
      (a = K.getElementsByTagName("script")[0]),
      (t = t != u ? t + "/" : t + "/svg/"),
      E && e.setAttribute("nonce", E),
      (e.src = t + "icons.34.svg.js"),
      a.parentNode.insertBefore(e, a),
      (Ge = !0));
  },
  ea = [],
  aa = {
    add: (e) => {
      aa.set(e, !0);
    },
    set: (e, a) => {
      if (a) for (const l in e) b[l] = e[l];
      else b = e;
      for (let e = 0, a = ea.length; e < a; e++) {
        var t = ea[e],
          { name: n, node: o, color: i, done: r } = t,
          n = b[n];
        n && !r && (Ke(n, o, i), (t.done = !0));
      }
    },
  },
  le = (e) => {
    return {
      s_name: e[0],
      s_safe_name: e[1],
      s_icon: e[2],
      s_color: e[3],
      s_options: e[4],
      s_custom_service_uri: e[5],
      s_custom_service_icon: e[6],
    };
  },
  se = (e, a, l) => {
    const {
        s_name: s,
        s_safe_name: c,
        s_icon: t,
        s_color: n,
        s_options: o = {},
        s_custom_service_uri: i,
        s_custom_service_icon: r,
      } = e,
      d = a || K.createElement("a");
    a || (d.className = "a2a_i"),
      (d.rel = "nofollow noopener"),
      (d.href = "/#" + c),
      (d.target = "_blank"),
      (d.a2a = {});
    var p,
      u,
      _,
      e = d.a2a,
      f =
        ((e.safename = c),
        (e.servicename = s),
        (e.serviceNameLowerCase = s.toLowerCase()),
        (e.serviceIcon = t),
        (e.serviceColor = n),
        (e.serviceType = o.type),
        o.type && (e.stype = o.type),
        o.src && (e.js_src = o.src),
        o.url && (e.url = o.url),
        o.pu && (e.popup = 1),
        o.na && (e.na = 1),
        o.media && (e.media = 1),
        a ||
          ((d.innerHTML = "<span></span>" + s + " "),
          (a = d.firstChild),
          (p = "a2a_svg a2a_s__default"),
          (u = (_ = (f = Q.icon_color) ? f.split(",", 2) : X) ? _[0] : X),
          (_ = _ ? (null == (_ = _[1]) ? void 0 : _.trim()) : X),
          i && (e.customserviceuri = i),
          r
            ? ((a.style.backgroundImage = "url(" + r + ")"), (a.className = p))
            : f
            ? ((a.className = p + " a2a_s_" + t),
              u && "unset" != u
                ? (a.style.backgroundColor = u)
                : n && (a.style.backgroundColor = "#" + n))
            : t
            ? ((a.className = p + " a2a_s_" + t),
              n && (a.style.backgroundColor = "#" + n))
            : (a.className = p),
          r) ||
          Xe(t, a, _),
        () => {
          var e = l || Z["n" + x];
          Le(e), ze(d);
        });
    return (
      "js" === e.stype
        ? ne(d, "click", f)
        : (ne(d, "mousedown", f), ne(d, "keydown", f)),
      ne(d, "click", (e) => {
        var a,
          t = l || Z["n" + x],
          n = {
            media: t.linkmedia,
            mediaNode: null == (n = t.kit) ? void 0 : n.a2a_mediaNode,
            node: d,
            service: s,
            serviceCode: c,
            title: t.linkname,
            url: t.linkurl,
          },
          o = d.a2a,
          i = "js" === o.stype,
          n = Be(n, t, e),
          r =
            ("feed" == w ||
              o.url ||
              o.js_src ||
              ((r = t.node), (r = t.kit || (r.a2a_kit ? r : X)), $e(r)),
            !o.popup ||
              e.defaultPrevented ||
              "_blank" !== d.target ||
              i ||
              (G(e),
              (r = screen.height),
              J.open(
                d.href,
                "_blank",
                "toolbar=0,personalbar=0,resizable,scrollbars,status,width=550,height=450,top=" +
                  (450 < r ? Math.round(r / 2 - 225) : 40) +
                  ",left=" +
                  Math.round(screen.width / 2 - 275)
              )),
            o.js_skip);
        (!o.externalJS && !o.literalJS) ||
          n ||
          r ||
          ((n = o).literalJS
            ? ((a = K.createElement("script")),
              E && a.setAttribute("nonce", E),
              (a.textContent = n.literalJS),
              M.appendChild(a))
            : n.externalJS && Ue(n.externalJS)),
          i && !r && G(e),
          r && delete o.js_skip,
          re.track(s, c, t.linkurl);
      }),
      d
    );
  };
let ta = () => {
  if (Q.static_server != u) return !1;
  var e,
    a = navigator,
    t = [
      "ar",
      "id",
      "ms",
      "ms-MY",
      "bn",
      "bn-IN",
      "bs",
      "bs-BA",
      "bg",
      "ca",
      "ca-AD",
      "ca-ES",
      "cs",
      "cs-CZ",
      "cy",
      "cy-GB",
      "da",
      "da-DK",
      "de",
      "dv",
      "el",
      "el-GR",
      "et",
      "et-EE",
      "es",
      "es-AR",
      "es-VE",
      "eo",
      "en-US",
      "eu",
      "eu-ES",
      "fa",
      "fa-IR",
      "fr",
      "fr-CA",
      "gd",
      "he",
      "hi",
      "hi-IN",
      "hr",
      "hy",
      "hy-AM",
      "is",
      "it",
      "ja",
      "ja-JP",
      "ko",
      "ko-KR",
      "ku",
      "ku-TR",
      "lv",
      "lt",
      "li",
      "li-NL",
      "hu",
      "mk",
      "nl",
      "nn-NO",
      "no",
      "pl",
      "pt",
      "pt-BR",
      "pt-PT",
      "ro",
      "ru",
      "sr",
      "sr-RS",
      "fi",
      "sk",
      "sl",
      "sl-SI",
      "sv",
      "sv-SE",
      "ta",
      "ta-IN",
      "tr",
      "te-IN",
      "uk",
      "uk-UA",
      "vi",
      "vi-VN",
      "zh-CN",
      "zh-TW",
    ],
    a = Q.locale || (a.browserLanguage || a.language).toLowerCase(),
    n = oe(a, t, !0);
  n || (-1 != (e = a.indexOf("-")) && (n = oe(a.substring(0, e), t, !0)));
  const o = !("en-us" == a || !n) && n;
  return (ta = () => o), o;
};
const na = {
    Share: "Share",
    Save: "Save",
    Subscribe: "Subscribe",
    Email: "Email",
    Bookmark: "Bookmark",
    ShowAll: "Show all",
    ShowLess: "Show less",
    FindAnyServiceToAddTo: "Find any service",
    PoweredBy: "By",
    AnyEmail: "Any email",
    ShareViaEmail: "Share via email",
    SubscribeViaEmail: "Subscribe via email",
    BookmarkInYourBrowser: "Bookmark in your browser",
    BookmarkInstructions: "Press Ctrl+D or &#8984;+D to bookmark this page",
    AddToYourFavorites: "Add to Favorites",
    SendFromWebOrProgram: "Send from any other email service",
    EmailProgram: "Email application",
    More: "More&#8230;",
    ThanksForSharing: "Thanks for sharing!",
    ThanksForFollowing: "Thanks for following!",
  },
  oa = function (e) {
    if (((w = Q.menu_type || e), !Z[w] && !J["a2a" + w + "_init"])) {
      (Z[w] = {}),
        (J.a2a_show_dropdown = L),
        (J.a2a_miniLeaveDelay = ye),
        (J.a2a_init = ae);
      var a,
        t,
        n,
        o,
        i,
        r,
        l,
        s,
        c,
        d,
        p,
        u,
        _,
        f,
        m,
        h,
        g,
        y,
        v = Z[w],
        e = "feed" == w ? "feed" : "page",
        k = Q;
      location.host.split(".").slice(-1);
      for (const b in z) v[b] = k[b];
      (a = ta()) &&
        "custom" != a &&
        Ue(k.static_server + "/locale/" + a + ".js", function () {
          k.localize = J.a2a_localize;
          var e = B("a2a_localize", K),
            a = Q.localize,
            t = na;
          function n(e) {
            var a,
              t = K.createElement("div");
            return (
              (t.innerHTML = e), (a = (e = t.childNodes[0]) ? e.nodeValue : a)
            );
          }
          for (var o, i, r, l = 0, s = e.length; l < s; l++)
            (r =
              (r = (o = e[l]).getAttribute("data-a2a-localize")) &&
              r.split(",", 2)) &&
              ((i = r[0]),
              (r = a[(r = r[1])] || t[r] || ""),
              "inner" === i
                ? (o.innerHTML = r)
                : "label" === i
                ? o.setAttribute("aria-label", n(r))
                : "title" === i && o.setAttribute("title", n(r)));
        }),
        (a = w),
        (e = O[e]),
        (c = s = ""),
        (d = "a2a" + w),
        (p = Q),
        K.createElement("a"),
        (u = (u = p.icon_color) && u.split(",", 2)),
        (_ = u && u[0]),
        (u = u && u[1]),
        (f = "a2a_svg a2a_s__default a2a_s_"),
        (_ = _ && "unset" != _ ? _ : "#0166ff"),
        (m =
          '<svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="' +
          (u = u || "#FFF") +
          '"><path d="M14 7h4v18h-4z"/><path d="M7 14h18v4H7z"/></g></svg>'),
        (h = na),
        (g = p.localize),
        (y = T("a2a_overlay")),
        (w = a),
        (a = _),
        S ||
          ((S = K.createElement("style")).setAttribute("type", "text/css"),
          E && S.setAttribute("nonce", E),
          M.appendChild(S),
          w,
          (t = (_ = Q).color_main || "EEE"),
          (n = _.color_bg || "FFF"),
          (o = _.color_border || "CCC"),
          (r = _.color_link_text || "0166FF"),
          (l = _.color_link_text_hover || "2A2A2A"),
          (i = _.color_link_text || "2A2A2A"),
          (l =
            ".a2a_hide{display:none}.a2a_logo_color{background-color:" +
            (a || "#0166FF") +
            "}.a2a_menu,.a2a_menu *{-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box;float:none;margin:0;padding:0;position:static;height:auto;width:auto}.a2a_menu{border-radius:6px;display:none;direction:ltr;background:#" +
            n +
            ';font:16px sans-serif-light,HelveticaNeue-Light,"Helvetica Neue Light","Helvetica Neue",Arial,Helvetica,"Liberation Sans",sans-serif;color:#000;line-height:12px;border:1px solid #' +
            o +
            ";vertical-align:baseline;overflow:hidden}.a2a_mini{min-width:200px;position:absolute;width:300px;z-index:9999997}.a2a_overlay{display:none;background:#616c7deb;backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);position:fixed;top:0;right:0;left:0;bottom:0;z-index:9999998;-webkit-tap-highlight-color:transparent;transition:opacity .14s,backdrop-filter .14s}.a2a_full{background:#" +
            n +
            ";border:1px solid #" +
            n +
            ";box-shadow:#2a2a2a1a 0 0 20px 10px;height:auto;height:calc(320px);top:15%;left:50%;margin-left:-320px;position:fixed;text-align:center;width:640px;z-index:9999999;transition:transform .14s,opacity .14s}.a2a_full_footer,.a2a_full_header,.a2a_full_services{border:0;margin:0;padding:12px;box-sizing:border-box}.a2a_full_header{padding-bottom:8px}.a2a_full_services{height:280px;overflow-y:scroll;padding:0 12px;-webkit-overflow-scrolling:touch}.a2a_full_services .a2a_i{display:inline-block;float:none;width:181px;width:calc(33.334% - 18px)}div.a2a_full_footer{font-size:12px;text-align:center;padding:8px 14px}div.a2a_full_footer a,div.a2a_full_footer a:visited{display:inline;font-size:12px;line-height:14px;padding:8px 14px}div.a2a_full_footer a:focus,div.a2a_full_footer a:hover{background:0 0;border:0;color:#" +
            r +
            '}div.a2a_full_footer a span.a2a_s_a2a,div.a2a_full_footer a span.a2a_w_a2a{background-size:14px;border-radius:3px;display:inline-block;height:14px;line-height:14px;margin:0 3px 0 0;vertical-align:top;width:14px}.a2a_modal{height:0;left:50%;margin-left:-320px;position:fixed;text-align:center;top:15%;width:640px;z-index:9999999;transition:transform .14s,opacity .14s;-webkit-tap-highlight-color:transparent}.a2a_modal_body{background:0 0;border:0;font:24px sans-serif-light,HelveticaNeue-Light,"Helvetica Neue Light","Helvetica Neue",Arial,Helvetica,"Liberation Sans",sans-serif;position:relative;height:auto;width:auto}.a2a_thanks{color:#fff;height:auto;margin-top:20px;width:auto}.a2a_thanks>div:first-child{margin:0 0 40px 0}.a2a_thanks div *{height:inherit}#a2a_copy_link{background:#' +
            n +
            ";border:1px solid #" +
            n +
            ";cursor:pointer;margin-top:15%}span.a2a_s_link#a2a_copy_link_icon,span.a2a_w_link#a2a_copy_link_icon{background-size:48px;border-radius:0;display:inline-block;height:48px;left:0;line-height:48px;margin:0 3px 0 0;position:absolute;vertical-align:top;width:48px}#a2a_modal input#a2a_copy_link_text{background-color:transparent;border:0;color:#" +
            (a = _.color_link_text || "2A2A2A") +
            ";cursor:pointer;font:inherit;height:48px;left:62px;max-width:initial;min-height:auto;padding:0;position:relative;width:564px;width:calc(100% - 76px)}#a2a_copy_link_copied{background-color:#0166ff;color:#fff;display:none;font:inherit;font-size:16px;margin-top:1px;padding:3px 8px}@media (prefers-color-scheme:dark){.a2a_menu a,.a2a_menu a.a2a_i,.a2a_menu a.a2a_i:visited,.a2a_menu a.a2a_more,i.a2a_i{border-color:#2a2a2a!important;color:#fff!important}.a2a_menu a.a2a_i:active,.a2a_menu a.a2a_i:focus,.a2a_menu a.a2a_i:hover,.a2a_menu a.a2a_more:active,.a2a_menu a.a2a_more:focus,.a2a_menu a.a2a_more:hover,.a2a_menu_find_container{border-color:#444!important;background-color:#444!important}.a2a_menu:not(.a2a_thanks){background-color:#2a2a2a;border-color:#2a2a2a}.a2a_menu_find{color:#fff!important}.a2a_menu span.a2a_s_find svg{background-color:transparent!important}.a2a_menu span.a2a_s_find svg path{fill:#fff!important}.a2a_full{box-shadow:#00000066 0 0 20px 10px}.a2a_overlay{background-color:#373737eb}}@media print{.a2a_floating_style,.a2a_menu,.a2a_overlay{visibility:hidden}}@keyframes a2aFadeIn{from{opacity:0}to{opacity:1}}.a2a_starting{opacity:0}.a2a_starting.a2a_full,.a2a_starting.a2a_modal{transform:scale(.8)}@media (max-width:639px){.a2a_full{border-radius:0;top:15%;left:0;margin-left:auto;width:100%}.a2a_modal{left:0;margin-left:10px;width:calc(100% - 20px)}}@media (min-width:318px) and (max-width:437px){.a2a_full .a2a_full_services .a2a_i{width:calc(50% - 18px)}}@media (max-width:317px){.a2a_full .a2a_full_services .a2a_i{width:calc(100% - 18px)}}@media (max-height:436px){.a2a_full{bottom:40px;height:auto;top:40px}}@media (max-height:550px){.a2a_modal{top:30px}}@media (max-height:360px){.a2a_modal{top:20px}.a2a_thanks>div:first-child{margin-bottom:20px}}.a2a_menu a{color:#" +
            r +
            ';text-decoration:none;font:16px sans-serif-light,HelveticaNeue-Light,"Helvetica Neue Light","Helvetica Neue",Arial,Helvetica,"Liberation Sans",sans-serif;line-height:14px;height:auto;width:auto;outline:0}.a2a_menu a.a2a_i:visited,.a2a_menu a.a2a_more{color:#' +
            r +
            "}.a2a_menu a.a2a_i:active,.a2a_menu a.a2a_i:focus,.a2a_menu a.a2a_i:hover,.a2a_menu a.a2a_more:active,.a2a_menu a.a2a_more:focus,.a2a_menu a.a2a_more:hover{color:#" +
            l +
            ";border-color:#" +
            t +
            ";border-style:solid;background-color:#" +
            t +
            ";text-decoration:none}.a2a_menu span.a2a_s_find{background-size:24px;height:24px;left:8px;position:absolute;top:7px;width:24px}.a2a_menu span.a2a_s_find svg{background-color:#" +
            n +
            "}.a2a_menu span.a2a_s_find svg path{fill:#" +
            (r = _.color_border || o) +
            "}#a2a_menu_container{display:inline-block}.a2a_menu_find_container{border:1px solid #" +
            r +
            ";border-radius:6px;padding:2px 24px 2px 0;position:relative;text-align:left}.a2a_cols_container .a2a_col1{overflow-x:hidden;overflow-y:auto;-webkit-overflow-scrolling:touch}#a2a_modal input,#a2a_modal input[type=text],.a2a_menu input,.a2a_menu input[type=text]{display:block;background-image:none;box-shadow:none;line-height:100%;margin:0;outline:0;overflow:hidden;padding:0;-moz-box-shadow:none;-webkit-box-shadow:none;-webkit-appearance:none}#a2afeed_find_container input,#a2afeed_find_container input[type=text],#a2apage_find_container input,#a2apage_find_container input[type=text]{background-color:transparent;border:0;box-sizing:content-box;color:#" +
            a +
            ";float:none;font:inherit;font-size:16px;height:28px;line-height:20px;left:38px;outline:0;margin:0;max-width:initial;min-height:initial;padding:2px 0;position:relative;width:99%}.a2a_clear{clear:both}.a2a_svg{background-repeat:no-repeat;display:block;overflow:hidden;height:32px;line-height:32px;padding:0;pointer-events:none;width:32px}.a2a_svg svg{background-repeat:no-repeat;background-position:50% 50%;border:none;display:block;left:0;margin:0 auto;overflow:hidden;padding:0;position:relative;top:0;width:auto;height:auto}a.a2a_i,i.a2a_i{display:block;float:left;border:1px solid #" +
            n +
            ";line-height:24px;padding:6px 8px;text-align:left;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:132px}a.a2a_i span,a.a2a_more span{display:inline-block;overflow:hidden;vertical-align:top}a.a2a_i .a2a_svg{margin:0 6px 0 0}a.a2a_i .a2a_svg,a.a2a_more .a2a_svg{background-size:24px;height:24px;line-height:24px;width:24px}a.a2a_sss:hover{border-left:1px solid #" +
            o +
            "}a.a2a_more{border-bottom:1px solid #" +
            n +
            ';border-left:0;border-right:0;line-height:24px;margin:6px 0 0;padding:6px;-webkit-touch-callout:none}a.a2a_more span{height:24px;margin:0 6px 0 0}.a2a_kit .a2a_svg{background-repeat:repeat}.a2a_default_style a:empty,.a2a_flex_style a:empty,.a2a_floating_style a:empty,.a2a_overlay_style a:empty{display:none}.a2a_color_buttons a,.a2a_floating_style a{text-decoration:none}.a2a_default_style:not(.a2a_flex_style) a{float:left;line-height:16px;padding:0 2px}.a2a_default_style a:hover .a2a_svg,.a2a_floating_style a:hover .a2a_svg,.a2a_overlay_style a:hover .a2a_svg svg{opacity:.7}.a2a_overlay_style.a2a_default_style a:hover .a2a_svg{opacity:1}.a2a_default_style .a2a_count,.a2a_default_style .a2a_svg,.a2a_floating_style .a2a_svg,.a2a_menu .a2a_svg,.a2a_vertical_style .a2a_count,.a2a_vertical_style .a2a_svg{border-radius:4px}.a2a_default_style .a2a_counter img,.a2a_default_style .a2a_dd,.a2a_default_style .a2a_svg{float:left}.a2a_default_style .a2a_img_text{margin-right:4px}.a2a_default_style .a2a_divider{border-left:1px solid #000;display:inline;float:left;height:16px;line-height:16px;margin:0 5px}.a2a_kit a{cursor:pointer;transition:none}.a2a_floating_style{background-color:#fff;border-radius:6px;position:fixed;z-index:9999995}.a2a_overlay_style{z-index:2147483647}.a2a_floating_style,.a2a_overlay_style{animation:a2aFadeIn .2s ease-in;padding:4px}.a2a_vertical_style:not(.a2a_flex_style) a{clear:left;display:block;overflow:hidden;padding:4px}.a2a_floating_style.a2a_default_style{bottom:0}.a2a_floating_style.a2a_default_style a,.a2a_overlay_style.a2a_default_style a{padding:4px}.a2a_count{background-color:#fff;border:1px solid #ccc;box-sizing:border-box;color:#2a2a2a;display:block;float:left;font:12px Arial,Helvetica,sans-serif;height:16px;margin-left:4px;position:relative;text-align:center;width:50px}.a2a_count:after,.a2a_count:before{border:solid transparent;border-width:4px 4px 4px 0;content:"";height:0;left:0;line-height:0;margin:-4px 0 0 -4px;position:absolute;top:50%;width:0}.a2a_count:before{border-right-color:#ccc}.a2a_count:after{border-right-color:#fff;margin-left:-3px}.a2a_count span{animation:a2aFadeIn .14s ease-in}.a2a_vertical_style .a2a_counter img{display:block}.a2a_vertical_style .a2a_count{float:none;margin-left:0;margin-top:6px}.a2a_vertical_style .a2a_count:after,.a2a_vertical_style .a2a_count:before{border:solid transparent;border-width:0 4px 4px 4px;content:"";height:0;left:50%;line-height:0;margin:-4px 0 0 -4px;position:absolute;top:0;width:0}.a2a_vertical_style .a2a_count:before{border-bottom-color:#ccc}.a2a_vertical_style .a2a_count:after{border-bottom-color:#fff;margin-top:-3px}.a2a_color_buttons .a2a_count,.a2a_color_buttons .a2a_count:after,.a2a_color_buttons .a2a_count:before,.a2a_color_buttons.a2a_vertical_style .a2a_count:after,.a2a_color_buttons.a2a_vertical_style .a2a_count:before{background-color:transparent;border:none;color:#fff;float:none;width:auto}.a2a_color_buttons.a2a_vertical_style .a2a_count{margin-top:0}.a2a_flex_style{display:flex;align-items:flex-start;gap:0}.a2a_default_style.a2a_flex_style{left:0;right:0;width:100%}.a2a_vertical_style.a2a_flex_style{flex-direction:column;top:0;bottom:0}.a2a_flex_style a{display:flex;justify-content:center;flex:1;padding:4px}.a2a_flex_style.a2a_vertical_style a{flex-direction:column}.a2a_floating_style.a2a_color_buttons,.a2a_floating_style.a2a_flex_style{border-radius:0;padding:0}.a2a_floating_style.a2a_default_style.a2a_flex_style{bottom:0}.a2a_kit.a2a_flex_style .a2a_counter img,.a2a_kit.a2a_flex_style .a2a_dd,.a2a_kit.a2a_flex_style .a2a_svg{float:none}.a2a_nowrap{white-space:nowrap}.a2a_note{margin:0 auto;padding:9px;font-size:12px;text-align:center}.a2a_note .a2a_note_note{margin:0;color:#' +
            i +
            "}.a2a_wide a{display:block;margin-top:3px;border-top:1px solid #" +
            t +
            ";text-align:center}.a2a_label{position:absolute!important;clip-path:polygon(0px 0px,0px 0px,0px 0px);-webkit-clip-path:polygon(0px 0px,0px 0px,0px 0px);overflow:hidden;height:1px;width:1px}.a2a_kit,.a2a_menu,.a2a_modal,.a2a_overlay{-ms-touch-action:manipulation;touch-action:manipulation;outline:0}.a2a_dd{-webkit-user-drag:none}.a2a_dd img{border:0}.a2a_button_facebook_like iframe{max-width:none}"),
          (_ = K.createTextNode(l)),
          S.appendChild(_)),
        (g = p.localize =
          {
            Share: g.Share || h.Share,
            Save: g.Save || h.Save,
            Subscribe: g.Subscribe || h.Subscribe,
            Email: g.Email || h.Email,
            Bookmark: g.Bookmark || h.Bookmark,
            ShowAll: g.ShowAll || h.ShowAll,
            ShowLess: g.ShowLess || h.ShowLess,
            FindAnyServiceToAddTo:
              g.FindAnyServiceToAddTo || h.FindAnyServiceToAddTo,
            PoweredBy: g.PoweredBy || h.PoweredBy,
            AnyEmail: "Any email",
            ShareViaEmail: g.ShareViaEmail || h.ShareViaEmail,
            SubscribeViaEmail: g.SubscribeViaEmail || h.SubscribeViaEmail,
            BookmarkInYourBrowser:
              g.BookmarkInYourBrowser || h.BookmarkInYourBrowser,
            BookmarkInstructions:
              g.BookmarkInstructions || h.BookmarkInstructions,
            AddToYourFavorites: g.AddToYourFavorites || h.AddToYourFavorites,
            SendFromWebOrProgram:
              g.SendFromWebOrProgram || h.SendFromWebOrProgram,
            EmailProgram: g.EmailProgram || h.EmailProgram,
            More: g.More || h.More,
            ThanksForSharing: g.ThanksForSharing || h.ThanksForSharing,
            ThanksForFollowing: g.ThanksForFollowing || h.ThanksForFollowing,
          }),
        y ||
          (c =
            (c =
              (c += '<div class="a2a_overlay" id="a2a_overlay"></div>') +
              '<div id="a2a_modal" class="a2a_modal a2a_hide" role="dialog" tabindex="-1" aria-label=""><div class="a2a_modal_body a2a_menu a2a_hide" id="a2a_copy_link"><span id="a2a_copy_link_icon" class="a2a_svg a2a_s_link a2a_logo_color"><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="' +
              u +
              '" d="M24.4 21.18c0-.36-.1-.67-.36-.92l-2.8-2.8a1.24 1.24 0 0 0-.92-.38c-.38 0-.7.14-.97.43.02.04.1.12.25.26l.3.3.2.24c.08.12.14.24.17.35.03.1.05.23.05.37 0 .36-.13.66-.38.92a1.25 1.25 0 0 1-.92.37 1.4 1.4 0 0 1-.37-.03 1.06 1.06 0 0 1-.35-.18 2.27 2.27 0 0 1-.25-.2 6.82 6.82 0 0 1-.3-.3l-.24-.25c-.3.28-.44.6-.44.98 0 .36.13.66.38.92l2.78 2.8c.24.23.54.35.9.35.37 0 .68-.12.93-.35l1.98-1.97c.26-.25.38-.55.38-.9zm-9.46-9.5c0-.37-.13-.67-.38-.92l-2.78-2.8a1.24 1.24 0 0 0-.9-.37c-.36 0-.67.1-.93.35L7.97 9.92c-.26.25-.38.55-.38.9 0 .36.1.67.37.92l2.8 2.8c.24.25.55.37.92.37.36 0 .7-.13.96-.4-.03-.04-.1-.12-.26-.26s-.24-.23-.3-.3a2.67 2.67 0 0 1-.2-.24 1.05 1.05 0 0 1-.17-.35 1.4 1.4 0 0 1-.04-.37c0-.36.1-.66.36-.9.26-.26.56-.4.92-.4.14 0 .26.03.37.06.12.03.23.1.35.17.1.1.2.16.25.2l.3.3.24.26c.3-.28.44-.6.44-.98zM27 21.17c0 1.07-.38 2-1.15 2.73l-1.98 1.98c-.74.75-1.66 1.12-2.73 1.12-1.1 0-2-.38-2.75-1.14l-2.8-2.8c-.74-.74-1.1-1.65-1.1-2.73 0-1.1.38-2.04 1.17-2.82l-1.18-1.17c-.8.8-1.72 1.18-2.82 1.18-1.08 0-2-.36-2.75-1.12l-2.8-2.8C5.38 12.8 5 11.9 5 10.82c0-1.08.38-2 1.15-2.74L8.13 6.1C8.87 5.37 9.78 5 10.86 5c1.1 0 2 .38 2.75 1.15l2.8 2.8c.74.73 1.1 1.65 1.1 2.72 0 1.1-.38 2.05-1.17 2.82l1.18 1.18c.8-.8 1.72-1.2 2.82-1.2 1.08 0 2 .4 2.75 1.14l2.8 2.8c.76.76 1.13 1.68 1.13 2.76z"/></svg></span><input id="a2a_copy_link_text" type="text" title="Copy link" readonly><div id="a2a_copy_link_copied">&check;</div></div>') +
            '<div class="a2a_modal_body a2a_menu a2a_thanks a2a_hide" id="a2a_thanks"><div class="a2a_localize" data-a2a-localize="inner,ThanksForSharing">' +
            g.ThanksForSharing +
            "</div></div></div>"),
        (s +=
          '<div class="a2a_menu a2a_full a2a_localize" id="a2a' +
          w +
          '_full" role="dialog" tabindex="-1" aria-label="' +
          ("feed" == w ? g.Subscribe : g.Share) +
          '" data-a2a-localize="title,' +
          ("feed" == w ? "Subscribe" : "Share") +
          '"><div class="a2a_full_header"><div id="a2a' +
          w +
          '_find_container" class="a2a_menu_find_container"><input id="a2a' +
          w +
          '_find" class="a2a_menu_find a2a_localize" type="text" autocomplete="off" title="' +
          g.FindAnyServiceToAddTo +
          '" data-a2a-localize="title,FindAnyServiceToAddTo"><span id="a2a' +
          w +
          '_find_icon" class="a2a_svg a2a_s_find"><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#CCC" d="M19.7 18.2l-4.5-4.5c.7-1.1 1.2-2.3 1.2-3.6 0-3.5-2.8-6.3-6.3-6.3s-6.3 2.8-6.3 6.3 2.8 6.3 6.3 6.3c1.4 0 2.6-.4 3.6-1.2l4.5 4.5c.6.6 1.3.7 1.7.2.5-.4.4-1.1-.2-1.7zm-9.6-3.6c-2.5 0-4.5-2.1-4.5-4.5 0-2.5 2.1-4.5 4.5-4.5 2.5 0 4.5 2.1 4.5 4.5s-2 4.5-4.5 4.5z"/></svg></span></div></div><div class="a2a_full_services" id="a2a' +
          w +
          '_full_services" role="presentation"></div><div class="a2a_full_footer"><a href="https://www.addtoany.com" title="Share Buttons" rel="noopener" target="_blank"><span class="' +
          f +
          'a2a a2a_logo_color">' +
          m +
          '</span>AddToAny</a></div></div><div id="a2a' +
          w +
          '_dropdown" class="a2a_menu a2a_mini a2a_localize a2a_hide" tabindex="-1" aria-label="' +
          ("feed" == w ? g.Subscribe : g.Share) +
          '" data-a2a-localize="label,' +
          ("feed" == w ? "Subscribe" : "Share") +
          '"><div class="a2a_mini_services" id="a2a' +
          w +
          '_mini_services"></div><div id="a2a' +
          w +
          '_cols_container" class="a2a_cols_container"><div class="a2a_col1' +
          ("mail" == w ? " a2a_hide" : "") +
          '" id="a2a' +
          w +
          '_col1"></div><div id="a2a' +
          w +
          '_2_col1"' +
          ("mail" != w ? ' class="a2a_hide"' : "") +
          '></div><div class="a2a_clear"></div></div>'),
        "mail" != w &&
          (s +=
            '<div class="a2a' +
            w +
            '_wide a2a_wide"><a href="#addtoany" id="a2a' +
            w +
            '_show_more_less" class="a2a_more a2a_localize" title="' +
            g.ShowAll +
            '" data-a2a-localize="title,ShowAll"><span class="' +
            f +
            'a2a a2a_logo_color">' +
            m +
            '</span><span class="a2a_localize" data-a2a-localize="inner,More">' +
            g.More +
            "</a></span></div>"),
        (s += "</div>"),
        y
          ? C.insertAdjacentHTML("beforeend", s)
          : C.insertAdjacentHTML("afterbegin", c + s),
        (r = T(d + "_dropdown")) &&
          (ne(r, "mouseenter", Ae), Q.onclick || ne(r, "mouseleave", ye)),
        (a = T(d + "_find")) &&
          (ne(T(d + "_find_icon"), "click", be),
          ne(a, "click", be),
          ne(a, "keyup", we)),
        (Z[w].services = e),
        ne(T("a2a_overlay"), "click", function (e) {
          je(w);
        }),
        "mail" != w &&
          ne(T(d + "_show_more_less"), "click", function (e) {
            G(e);
            e = "a2a" + w;
            T(e + "_show_more_less"), N();
          }),
        re(),
        j(z);
    }
  };
function ia() {
  var e, a;
  ra &&
    ((e = Q.overlays) &&
      e.length &&
      import("./overlays" + t + ".js").then((e) => {
        e.overlays();
      }),
    (C = J.a2a.main),
    ne(C, "click", V),
    ne(C, "touchstart", V, !!h() && { passive: !0 })),
    r("page"),
    ra &&
      ((e = (a) => {
        ["feed", "page"].forEach((e) => {
          (n[e] = a[e]), Ie[e] && De(e);
        });
      }),
      (a = J.a2a.userServices) ? e(a) : (J.a2a.userServices = e),
      (w = "page"),
      Te("ready")),
    (ra = !1);
}
let ra = !0;
(J.a2a = J.a2a || {}),
  (J.a2a.bmBrowser = Oe),
  (J.a2a.copyLink = (e) => {
    const a = T("a2apage_full"),
      t = (T("a2a_overlay"), T("a2a_modal")),
      n = T("a2a_copy_link"),
      o = T("a2a_copy_link_copied"),
      i = T("a2a_copy_link_text");
    N.full_shown = d(a);
    Re(n, (e) => {
      i.focus(),
        i.setSelectionRange(0, i.value.length),
        K.execCommand &&
          K.execCommand("copy") &&
          (i.setSelectionRange(0, 0),
          i.blur(),
          (o.style.display = "block"),
          setTimeout(() => {
            (t.style.display = n.style.display = o.style.display = "none"),
              N.full_shown ? N() : je("page");
          }, 700));
    });
    var r = () => {
      t.setAttribute("aria-label", "Copy link"),
        (i.value = e),
        xe(),
        (n.style.display = "block"),
        t.focus(),
        c("copy");
    };
    N.full_shown ? l("hide", a, r) : r();
  }),
  (J.a2a.counters = te),
  (J.a2a.GA = re),
  (J.a2a.init = ae),
  (J.a2a.init_all = r),
  (J.a2a.svg = aa),
  (J.a2a.svg_css = function () {
    ae("page");
    for (
      var e,
        a,
        t = S.sheet || S.styleSheet || {},
        n = ("insertRule" in t),
        o = ("addRule" in t),
        i = ce.concat([[0, 0, "a2a", "0166FF"]]),
        r = 0,
        l = i.length;
      r < l;
      r++
    )
      (e = ".a2a_s_" + i[r][2]),
        (a = "background-color:#" + i[r][3] + ";"),
        n ? t.insertRule(e + "{" + a + "}", 0) : o && t.addRule(e, a, 0);
    {
      var s = Q.static_server,
        c = K.createElement("link"),
        d = s != u ? s + "/" : u + "/svg/";
      (c.rel = "stylesheet"),
        (c.href = d + "icons.34.svg.css"),
        M.appendChild(c);
    }
    Ve = p;
  });
Oe = J.a2a.core;
"function" == typeof Oe ? Oe(ia) : (J.a2a.core = ia);
export {
  J as win,
  K as doc,
  p as noop,
  X as undef,
  Q as a2a_config,
  M as headTag,
  E as nonce,
  ae as init,
  e as validSelector,
  Y as matches,
  h as evOpts,
  ne as addEvent,
  me as debounce,
  ge as memoize,
  ve as getPos,
};
