/*FB_PKG_DELIM*/

__d(
  "TypeaheadFacepile",
  ["DOM"],
  function (a, b, c, d, e, f, g) {
    function a() {}
    a.render = function (a) {
      var b = [
        c("DOM").create("span", { className: "splitpic leftpic" }, [
          c("DOM").create("img", { alt: "", src: a[0] }),
        ]),
        c("DOM").create(
          "span",
          { className: "splitpic" + (a[2] ? " toppic" : "") },
          [c("DOM").create("img", { alt: "", src: a[1] })]
        ),
      ];
      a[2] &&
        b.push(
          c("DOM").create("span", { className: "splitpic bottompic" }, [
            c("DOM").create("img", { alt: "", src: a[2] }),
          ])
        );
      return c("DOM").create("span", { className: "splitpics clearfix" }, b);
    };
    g["default"] = a;
  },
  98
);
__d(
  "BasicTypeaheadRenderer",
  ["BadgeHelper", "DOM"],
  function (a, b, c, d, e, f) {
    function a(a, c) {
      c = [];
      a.icon && c.push(b("DOM").create("img", { alt: "", src: a.icon }));
      var d = a.debug_info;
      d && c.push(b("DOM").create("span", { className: "debugInfo" }, d));
      if (a.text) {
        d = [a.text];
        a.is_verified &&
          d.push(b("BadgeHelper").renderBadge("xsmall", "verified"));
        c.push(b("DOM").create("span", { className: "text" }, d));
      }
      if (a.subtext) {
        d = [a.subtext];
        c.push(b("DOM").create("span", { className: "subtext" }, d));
      }
      d = b("DOM").create("li", { className: a.type || "" }, c);
      a.text &&
        (d.setAttribute("title", a.text), d.setAttribute("aria-label", a.text));
      return d;
    }
    a.className = "basic";
    e.exports = a;
  },
  null
);
__d(
  "createIxElement",
  [
    "invariant",
    "DOM",
    "coerceImageishSprited",
    "coerceImageishURL",
    "joinClasses",
  ],
  function (a, b, c, d, e, f, g, h) {
    function a(a, b) {
      var d = "img",
        e = c("coerceImageishSprited")(a);
      a = c("coerceImageishURL")(a);
      if (e) {
        e = c("DOM").create("i", {
          className: c("joinClasses")(
            d,
            e.type === "css" ? e.className : void 0
          ),
          style: e.type === "cssless" ? e.style : void 0,
        });
        b != null && c("DOM").setContent(e, c("DOM").create("u", null, b));
        return e;
      }
      a || h(0, 2521);
      e = c("DOM").create("img", { className: d, src: a.uri });
      b != null && e.setAttribute("alt", b);
      e.setAttribute("width", String(a.width));
      e.setAttribute("height", String(a.height));
      return e;
    }
    g["default"] = a;
  },
  98
);
__d(
  "TypeaheadView",
  [
    "csx",
    "cx",
    "ix",
    "$",
    "ArbiterMixin",
    "BasicTypeaheadRenderer",
    "CSS",
    "DOM",
    "Event",
    "Parent",
    "createIxElement",
    "getElementText",
    "getOrCreateDOMID",
    "mixin",
  ],
  function (a, b, c, d, e, f, g, h, i, j) {
    b = (function (b) {
      babelHelpers.inheritsLoose(e, b);
      function e(a, d) {
        var e;
        e = b.call(this) || this;
        e.initialized = !1;
        e.$TypeaheadView1 = 0;
        e.element = e.content = c("$").fromIDOrElement(a);
        Object.assign(babelHelpers.assertThisInitialized(e), d);
        return e;
      }
      var f = e.prototype;
      f.init = function () {
        this.initialized ||
          ((this.initialized = !0), this.initializeEvents(), this.reset());
      };
      f.initializeEvents = function () {
        c("Event").listen(this.element, {
          mouseup: this.mouseup.bind(this),
          mouseover: this.mouseover.bind(this),
        });
      };
      f.setTypeahead = function (a) {
        this.typeahead = a;
      };
      f.setAccessibilityControlElement = function (a) {
        this.accessibilityElement = a;
      };
      f.getElement = function () {
        return this.element;
      };
      f.mouseup = function (a) {
        a.button != 2 && (this.select(!0), a.prevent());
      };
      f.mouseover = function (a) {
        if (this.ignoreMouseover) {
          this.ignoreMouseover = !1;
          return;
        }
        this.visible && (this.resetColumn(), this.highlight(this.getIndex(a)));
      };
      f.reset = function (a) {
        a || (this.disableAutoSelect = !1);
        this.index = -1;
        this.$TypeaheadView1 = 0;
        this.$TypeaheadView2();
        this.items = [];
        this.results = [];
        this.value = "";
        this.content.innerHTML = "";
        this.inform("reset");
        return this;
      };
      f.getIndex = function (a) {
        return this.items.indexOf(d("Parent").byTag(a.getTarget(), "li"));
      };
      f.getSelection = function () {
        var a = this.results[this.index] || null;
        return this.visible ? a : null;
      };
      f.isEmpty = function () {
        return !this.results.length;
      };
      f.isVisible = function () {
        return !!this.visible;
      };
      f.show = function () {
        d("CSS").show(this.element);
        if (
          this.results &&
          this.results.length &&
          this.autoSelect &&
          this.accessibilityElement &&
          this.selected
        ) {
          var a = c("DOM").scry(this.selected, '[role="gridcell"]');
          a = a.length < 2 ? this.selected : a[this.$TypeaheadView1];
          this.accessibilityElement.setAttribute(
            "aria-activedescendant",
            c("getOrCreateDOMID")(a)
          );
        }
        this.accessibilityElement &&
          this.accessibilityElement.setAttribute("aria-expanded", "true");
        this.visible = !0;
        return this;
      };
      f.hide = function () {
        d("CSS").hide(this.element);
        this.accessibilityElement &&
          (this.accessibilityElement.setAttribute("aria-expanded", "false"),
          this.accessibilityElement.removeAttribute("aria-activedescendant"));
        this.visible = !1;
        return this;
      };
      f.render = function (a, b, d) {
        this.value = a;
        if (!b.length) {
          this.accessibilityElement &&
            this.accessibilityElement.removeAttribute("aria-activedescendant");
          this.reset(!0);
          return;
        }
        a = { results: b, value: a };
        this.inform("beforeRender", a);
        b = a.results;
        a =
          (!this.value || d) && this.index !== -1
            ? this.index
            : this.getDefaultIndex(b);
        this.results = b;
        c("DOM").setContent(this.content, this.buildResults(b));
        this.items = this.getItems();
        this.highlight(a, !1);
        this.inform("render", this.results);
      };
      f.getItems = function () {
        return c("DOM").scry(this.content, "li");
      };
      f.buildResults = function (b) {
        var d,
          e = null;
        typeof this.renderer === "function"
          ? ((d = this.renderer), (e = this.renderer.className || ""))
          : ((d = a.TypeaheadRenderers[this.renderer]), (e = this.renderer));
        d = d.bind(this);
        b = b.map(function (a, b) {
          a = a.node || d(a, b);
          a.setAttribute("role", "option");
          return a;
        });
        e = c("DOM").create(
          "ul",
          {
            className: e,
            id:
              "typeahead_list_" +
              (this.typeahead
                ? c("getOrCreateDOMID")(this.typeahead)
                : c("getOrCreateDOMID")(this.element)),
          },
          b
        );
        e.setAttribute("role", "listbox");
        return e;
      };
      f.showLoadingIndicator = function () {
        var a = c("createIxElement")(j("85428"));
        a = c("DOM").create(
          "li",
          { className: "typeaheadViewInternalLoading" },
          a
        );
        a = c("DOM").create("ul", { role: "listbox" }, a);
        c("DOM").setContent(this.content, a);
      };
      f.getDefaultIndex = function (a) {
        a = this.autoSelect && !this.disableAutoSelect;
        return this.index < 0 && !a ? -1 : 0;
      };
      f.$TypeaheadView2 = function () {
        var a = c("DOM").scry(this.element, ".active")[0];
        a != null && d("CSS").removeClass(a, "active");
        if (this.selected == null || this.index === -1) return;
        a = c("DOM").scry(this.selected, '[role="gridcell"]');
        if (a.length < 2) return;
        a = a[this.$TypeaheadView1];
        d("CSS").addClass(a, "active");
      };
      f.next = function () {
        (this.$TypeaheadView1 = 0),
          this.highlight(this.index + 1),
          this.inform("next", this.selected);
      };
      f.prev = function () {
        (this.$TypeaheadView1 = 0),
          this.highlight(this.index - 1),
          this.inform("prev", this.selected);
      };
      f.getCurrentColumnIndex = function () {
        return this.$TypeaheadView1;
      };
      f.resetColumn = function () {
        if (this.selected == null) return;
        var a = c("DOM").scry(this.selected, '[role="gridcell"]');
        if (a.length < 2) return;
        this.$TypeaheadView1 = 0;
        a = a[this.$TypeaheadView1];
        this.accessibilityElement.setAttribute(
          "aria-activedescendant",
          c("getOrCreateDOMID")(a)
        );
        this.$TypeaheadView2();
      };
      f.nextColumn = function () {
        if (this.index == -1 || this.selected == null) return;
        var a = c("DOM").scry(this.selected, '[role="gridcell"]');
        if (a.length < 2) return;
        if (this.$TypeaheadView1 < a.length - 1) {
          this.$TypeaheadView1++;
          a = a[this.$TypeaheadView1];
          this.accessibilityElement.setAttribute(
            "aria-activedescendant",
            c("getOrCreateDOMID")(a)
          );
          this.$TypeaheadView2();
        } else this.next();
      };
      f.prevColumn = function () {
        if (this.index == -1 || this.selected == null) return;
        var a = c("DOM").scry(this.selected, '[role="gridcell"]');
        if (a.length < 2) return;
        if (this.$TypeaheadView1 > 0) {
          this.$TypeaheadView1--;
          a = a[this.$TypeaheadView1];
          this.accessibilityElement.setAttribute(
            "aria-activedescendant",
            c("getOrCreateDOMID")(a)
          );
          this.$TypeaheadView2();
        } else this.prev();
      };
      f.getItemText = function (a) {
        var b = "";
        a &&
          ((b = a.getAttribute("aria-label")),
          b || ((b = c("getElementText")(a)), a.setAttribute("aria-label", b)));
        return b;
      };
      f.setIsViewingSelectedItems = function (a) {
        this.viewingSelected = a;
        return this;
      };
      f.getIsViewingSelectedItems = function () {
        return !!this.viewingSelected;
      };
      f.highlight = function (a, b) {
        var e = this,
          f = this.selected;
        f != null &&
          (d("CSS").removeClass(f, "selected"),
          f.setAttribute("aria-selected", "false"));
        a > this.items.length - 1
          ? (a = -1)
          : a < -1 && (a = this.items.length - 1);
        a >= 0 && a < this.items.length
          ? ((this.selected = this.items[a]),
            d("CSS").addClass(this.selected, "selected"),
            this.selected != null &&
              this.selected.setAttribute("aria-selected", "true"),
            this.accessibilityElement &&
              window.setTimeout(function () {
                var a = c("DOM").scry(e.selected, '[role="gridcell"]');
                a = a.length < 2 ? e.selected : a[e.$TypeaheadView1];
                a != null &&
                  e.accessibilityElement.setAttribute(
                    "aria-activedescendant",
                    c("getOrCreateDOMID")(a)
                  );
                e.$TypeaheadView2();
              }, 0))
          : this.accessibilityElement &&
            this.accessibilityElement.removeAttribute("aria-activedescendant");
        this.index = a;
        this.disableAutoSelect = a == -1;
        b !== !1 &&
          this.inform("highlight", {
            index: a,
            selected: this.results[a],
            element: this.selected,
          });
      };
      f.select = function (a) {
        var b = this;
        if (this.headerIndex && a) return;
        var c = this.index,
          d = this.results[c],
          e = this.element.getAttribute("id");
        if (d) {
          var f = function (d) {
            b.inform("select", {
              index: c,
              clicked: !!a,
              selected: d,
              id: e,
              query: b.value,
              element: b.selected,
            }),
              b.inform("afterSelect");
          };
          this.shouldValidateTypeaheadSelection(d)
            ? this.validateTypeaheadSelection(d, f)
            : f(d);
        }
      };
      f.shouldValidateTypeaheadSelection = function (a) {
        return !1;
      };
      f.validateTypeaheadSelection = function (a, b) {};
      return e;
    })(c("mixin")(c("ArbiterMixin")));
    Object.assign(b.prototype, {
      events: [
        "highlight",
        "render",
        "reset",
        "select",
        "beforeRender",
        "next",
        "prev",
      ],
      renderer: c("BasicTypeaheadRenderer"),
      autoSelect: !1,
      ignoreMouseover: !1,
    });
    g["default"] = b;
  },
  98
);
__d(
  "BucketedTypeaheadView",
  ["fbt", "DOM", "TypeaheadView"],
  function (a, b, c, d, e, f, g) {
    a = (function (a) {
      "use strict";
      babelHelpers.inheritsLoose(c, a);
      function c() {
        return a.apply(this, arguments) || this;
      }
      var d = c.prototype;
      d.render = function (b, c, d, e) {
        var f = c.length > 0;
        for (var g = 0; g < c.length; ++g) c[g].type !== "hashtag" && (f = !1);
        f || (c = this.buildBuckets(b, c));
        if (d && e) {
          g = this.results.length - this.index;
          this.index = c.length - g;
        }
        return a.prototype.render.call(this, b, c, d);
      };
      d.highlight = function (b, c) {
        this.headerIndex = !1;
        b == -1 && this.index !== 0 && (b = this.index);
        while (
          b >= 0 &&
          b < this.items.length &&
          !this.isHighlightable(this.results[b])
        )
          (b += 1), (this.headerIndex = !0);
        a.prototype.highlight.call(this, b, c);
      };
      d.buildBuckets = function (a, b) {
        if (!this.typeObjects || !b || !b.length) return b;
        a = [];
        var c = {};
        for (var d = 0; d < b.length; ++d) {
          var e = b[d],
            f = e.render_type || e.type;
          Object.prototype.hasOwnProperty.call(c, f) ||
            ((c[f] = a.length), a.push([this.buildBucketHeader(f)]));
          e.classNames = e.classNames || f;
          e.groupIndex = c[f];
          e.indexInGroup = a[e.groupIndex].length - 1;
          e.globalIndex = d;
          a[e.groupIndex].push(e);
        }
        for (f in this.typeObjects)
          !Object.prototype.hasOwnProperty.call(c, f) &&
            this.typeObjects[f].show_always &&
            ((c[f] = a.length),
            a.push([this.buildBucketHeader(f)]),
            (e = this.buildNoResultsEntry()),
            (e.classNames = e.type),
            (e.groupIndex = c[f]),
            (e.indexInGroup = a[e.groupIndex].length - 1),
            a[e.groupIndex].push(e));
        d = [];
        if (this.typeObjectsOrder)
          for (b = 0; b < this.typeObjectsOrder.length; ++b) {
            e = this.typeObjectsOrder[b];
            Object.prototype.hasOwnProperty.call(c, e) &&
              (d = d.concat(a[c[e]]));
          }
        else for (f = 0; f < a.length; ++f) d = d.concat(a[f]);
        return d;
      };
      d.buildNoResultsEntry = function () {
        return {
          uid: "disabled_result",
          type: "disabled_result",
          text: g._("Aucun r\u00e9sultat"),
        };
      };
      d.buildBucketHeader = function (a) {
        var b = this.typeObjects[a];
        if (b === void 0)
          throw new Error(
            a + " is undefined in " + JSON.stringify(this.typeObjects)
          );
        b.markup && ((b.text = b.markup), delete b.markup);
        return this.typeObjects[a];
      };
      d.buildResults = function (c) {
        c = a.prototype.buildResults.call(this, c);
        if (this.typeObjects)
          return b("DOM").create("div", { className: "bucketed" }, [c]);
        else return c;
      };
      d.isHighlightable = function (a) {
        return a.type != "header" && a.type != "disabled_result";
      };
      d.select = function (b) {
        var c = this.results[this.index];
        c && this.isHighlightable(c) && a.prototype.select.call(this, b);
      };
      d.updateResults = function (a) {
        this.results = a;
      };
      d.normalizeIndex = function (a) {
        var b = this.results.length;
        if (b === 0) return -1;
        else if (a < -1) return (a % b) + b + 1;
        else if (a >= b) return (a % b) - 1;
        else return a;
      };
      d.getDefaultIndex = function (a) {
        var b = this.autoSelect && !this.disableAutoSelect;
        if (this.index < 0 && !b) return -1;
        if (!a || (a && a.length === 0)) return -1;
        b = 0;
        while (!this.isHighlightable(a) && b < a.length) b++;
        return b;
      };
      d.prev = function () {
        var b = this.results[this.normalizeIndex(this.index - 1)];
        while (b && !this.isHighlightable(b))
          (this.index = this.normalizeIndex(this.index - 1)),
            (b = this.results[this.normalizeIndex(this.index - 1)]);
        return a.prototype.prev.call(this);
      };
      d.next = function () {
        var b = this.results[this.normalizeIndex(this.index + 1)];
        while (b && !this.isHighlightable(b))
          (this.index = this.normalizeIndex(this.index + 1)),
            (b = this.results[this.normalizeIndex(this.index + 1)]);
        return a.prototype.next.call(this);
      };
      return c;
    })(b("TypeaheadView"));
    e.exports = a;
  },
  null
);
__d(
  "ContextualTypeaheadView",
  [
    "BucketedTypeaheadView",
    "CSS",
    "ContextualLayer",
    "ContextualLayerAutoFlip",
    "ContextualLayerHideOnScroll",
    "DOM",
    "DOMDimensions",
    "Style",
  ],
  function (a, b, c, d, e, f, g) {
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var e = b.prototype;
      e.init = function () {
        this.initializeLayer(), a.prototype.init.call(this);
      };
      e.initializeLayer = function () {
        (this.context = this.getContext()),
          (this.wrapper = c("DOM").create("div")),
          c("DOM").appendContent(this.wrapper, this.element),
          d("CSS").addClass(this.element, "uiContextualTypeaheadView"),
          (this.layer = new (c("ContextualLayer"))(
            {
              context: this.context,
              position: "below",
              alignment: this.alignment,
              causalElement: this.causalElement,
              permanent: !0,
              shouldSetARIAProperties: !1,
            },
            this.wrapper
          )),
          this.layer.enableBehavior(c("ContextualLayerHideOnScroll")),
          (c("Style").isFixed(this.context) || this.autoflip) &&
            this.layer.enableBehavior(c("ContextualLayerAutoFlip")),
          this.subscribe("render", this.renderLayer.bind(this));
      };
      e.show = function () {
        this.minWidth
          ? c("Style").set(this.wrapper, "min-width", this.minWidth + "px")
          : this.width
          ? c("Style").set(this.wrapper, "width", this.width + "px")
          : c("Style").set(
              this.wrapper,
              "width",
              d("DOMDimensions").getElementDimensions(this.context).width + "px"
            );
        var b = a.prototype.show.call(this);
        this.layer.show();
        this.inform("show");
        return b;
      };
      e.hide = function () {
        this.layer.hide();
        this.inform("hide");
        return a.prototype.hide.call(this);
      };
      e.renderLayer = function () {
        if (!this.isVisible()) return;
        this.layer.isShown() ? this.layer.updatePosition() : this.layer.show();
      };
      e.clearText = function () {
        this.layer.getCausalElement().value = "";
      };
      e.getContext = function () {
        return this.element.parentNode;
      };
      return b;
    })(c("BucketedTypeaheadView"));
    g["default"] = a;
  },
  98
);
__d(
  "Token",
  ["fbt", "CSS", "DOM", "DataStore", "Locale", "UnicodeBidi"],
  function (a, b, c, d, e, f, g) {
    a = (function () {
      "use strict";
      function a(a, b) {
        (this.info = a), (this.paramName = b);
      }
      var c = a.prototype;
      c.getInfo = function () {
        return this.info;
      };
      c.getText = function () {
        return this.info.text;
      };
      c.getValue = function () {
        return this.info.uid;
      };
      c.isFreeform = function () {
        return !!this.info.freeform;
      };
      c.setSelected = function (a) {
        b("CSS").conditionClass(this.getElement(), "uiTokenSelected", a);
        return this;
      };
      c.getElement = function () {
        this.element || this.setElement(this.createElement());
        return this.element;
      };
      c.setElement = function (a) {
        b("DataStore").set(a, "Token", this);
        this.element = a;
        return this;
      };
      c.isRemovable = function () {
        return b("CSS").hasClass(this.element, "removable");
      };
      c.getTextDirection = function () {
        var a = b("UnicodeBidi").isDirectionRTL(this.getText()),
          c = b("Locale").isRTL();
        if (a && !c) return "rtl";
        return !a && c ? "ltr" : null;
      };
      c.createElement = function (a, c) {
        var d = this.paramName,
          e = this.getValue(),
          f = this.getText(),
          h = b("DOM").create("span", { className: "uiTokenText" }, f),
          i = null;
        this.info.removable !== !1 &&
          (i = b("DOM").create("a", {
            href: "#",
            "aria-label": g._("Supprimer {item}", [g._param("item", f)]),
            className: "remove uiCloseButton uiCloseButtonSmall",
          }));
        a && b("CSS").addClass(i, "uiCloseButtonSmallGray");
        e = b("DOM").create("input", {
          type: "hidden",
          value: e,
          name: d + "[]",
          autocomplete: "off",
        });
        f = b("DOM").create("input", {
          type: "hidden",
          value: f,
          name: "text_" + d + "[]",
          autocomplete: "off",
        });
        d = { className: "removable uiToken" };
        var j = this.getTextDirection();
        j !== null && (d.dir = j);
        j = b("DOM").create("span", d, [h, e, f, i]);
        a && b("CSS").addClass(j, "uiTokenGray");
        if (c) {
          d = b("DOM").create("i", { className: c });
          b("DOM").prependContent(j, d);
        }
        return j;
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "WeakToken",
  ["CSS", "Token"],
  function (a, b, c, d, e, f, g) {
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var c = b.prototype;
      c.createElement = function () {
        var b = a.prototype.createElement.call(
          this,
          !0,
          "UFIWeakReferenceIcon"
        );
        d("CSS").addClass(b, "uiTokenWeakReference");
        return b;
      };
      return b;
    })(c("Token"));
    g["default"] = a;
  },
  98
);
__d(
  "Tokenizer",
  [
    "Arbiter",
    "ArbiterMixin",
    "CSS",
    "DOM",
    "DOMQuery",
    "DataStore",
    "Event",
    "Focus",
    "Input",
    "Keys",
    "Parent",
    "StickyPlaceholderInput",
    "Style",
    "TextMetrics",
    "Token",
    "UserAgent_DEPRECATED",
    "WeakToken",
    "createObjectFrom",
    "emptyFunction",
    "mixin",
  ],
  function (a, b, c, d, e, f) {
    var g = 20;
    a = (function (a) {
      "use strict";
      babelHelpers.inheritsLoose(c, a);
      function c(c, d, e) {
        var f;
        f = a.call(this) || this;
        f.element = c;
        f.typeahead = d;
        f.input = d.getCore().getElement();
        e && f.init(e.tokenarea, e.param_name, e.initial_info, e.options);
        b("DataStore").set(
          f.element,
          "Tokenizer",
          babelHelpers.assertThisInitialized(f)
        );
        return f;
      }
      var d = c.prototype;
      d.init = function (a, c, d, e) {
        (this._handleEvents = this.handleEvents.bind(this)),
          (this.init = b("emptyFunction")),
          this.setTokenarea(a),
          (this.paramName = c),
          this.placeholder ||
            (this.placeholder =
              this.input.getAttribute("data-placeholder") ||
              this.input.getAttribute("placeholder") ||
              ""),
          Object.assign(this, e),
          this.initEvents(),
          this.initTypeahead(),
          this.reset(d),
          this.initBehaviors(),
          setTimeout(this.adjustWidth.bind(this), 0),
          b("Arbiter").inform("Tokenizer/init", this, "persistent"),
          this.inform("init", { tokens: this.getTokens() });
      };
      d.reset = function (a) {
        (this.tokens = []),
          (this.unique = {}),
          a ? this.populate(a) : b("DOM").empty(this.tokenarea),
          this.updateTokenarea();
      };
      d.populate = function (a) {
        var c = [];
        this.tokens = this.getTokenElements().map(function (b, d) {
          d = a[d];
          c.push(this._tokenKey(d));
          return this.createToken(d, b);
        }, this);
        this.unique = b("createObjectFrom")(c, this.tokens);
      };
      d.setTokenarea = function (a) {
        var c = !this.tokenarea;
        if (a !== this.tokenarea) {
          if (this.tokenarea) {
            b("DOM").remove(this.tokenarea);
            for (var d in this._tokenareaListeners)
              this._tokenareaListeners[d].remove();
          }
          this._tokenareaListeners = b("Event").listen(a, {
            click: this._handleEvents,
            keydown: this._handleEvents,
          });
          this.tokenarea = a;
        }
        c || this.reset();
      };
      d.getElement = function () {
        return this.element;
      };
      d.getTypeahead = function () {
        return this.typeahead;
      };
      d.getInput = function () {
        return this.input;
      };
      d.initBehaviors = function () {
        var a = this;
        this.behaviors = this.behaviors || [];
        if (this.behaviors instanceof Array)
          this.behaviors.forEach(function (b) {
            b.behavior(a, b.config);
          });
        else
          for (var b in this.behaviors || {}) {
            var c = window.TokenizerBehaviors && window.TokenizerBehaviors[b];
            c.call(null, this, this.behaviors[b]);
          }
      };
      d.initTypeahead = function () {
        var a = this,
          c = this.typeahead.getCore();
        c.resetOnSelect = !0;
        c.setValueOnSelect = !1;
        c.preventFocusChangeOnTab = !this.typeaheadTabNavigation;
        if (this.inline) {
          c = this.typeahead.getView();
          b("CSS").addClass(c.getElement(), "uiInlineTokenizerView");
        }
        this.typeahead.subscribe("select", function (b, c) {
          return a.handleSelect(c);
        });
        this.typeahead.subscribe("blur", this.handleBlur.bind(this));
      };
      d.handleBlur = function (a) {
        this.inform("blur", { event: a }), this.updatePlaceholder();
      };
      d.handleSelect = function (a) {
        var b = a.selected;
        a = a.query;
        "uid" in b &&
          (this.updateInput(), this.addToken(this.createToken(b), a));
      };
      d.initEvents = function () {
        var a =
          b("UserAgent_DEPRECATED").firefox() < 4 ? "keypress" : "keydown";
        b("Event").listen(this.input, "paste", this.paste.bind(this));
        b("Event").listen(this.input, a, this.keydown.bind(this));
      };
      d.handleEvents = function (a) {
        var c = a.getTarget(),
          d = c && this.getTokenElementFromTarget(c);
        if (!d) return;
        (a.type != "keydown" || b("Event").getKeyCode(a) == b("Keys").RETURN) &&
          this.processEvents(a, c, d);
      };
      d.processEvents = function (a, c, d) {
        if (b("Parent").byClass(c, "remove")) {
          var e = d.nextSibling;
          e = e && b("DOMQuery").scry(d.nextSibling, ".remove")[0];
          d = this.getTokenFromElement(d);
          d = this.addTokenData(d, c);
          this.removeToken(d);
          this.focusOnTokenRemoval(a, e);
          a.kill();
        }
      };
      d.focusOnTokenRemoval = function (a, c) {
        b("Focus").set((a.type == "keydown" && c) || this.input);
      };
      d.addTokenData = function (a, b) {
        return a;
      };
      d.keydown = function (a) {
        this.inform("keydown", { event: a });
        a = b("Event").getKeyCode(a);
        var c = this.input;
        if (this.inline && a == b("Keys").BACKSPACE && b("Input").isEmpty(c)) {
          a = this.getLastToken();
          a && a.isRemovable() && this.removeToken(a);
        }
        this.updateInput();
      };
      d.paste = function (a) {
        this.inform("paste", { event: a }), this.updateInput(!0);
      };
      d.focusInput = function () {
        b("Focus").set(this.input);
      };
      d.updateInput = function (a) {
        var c = this;
        if (!this.inline) return;
        setTimeout(function () {
          c.adjustWidth(c.input.value), a && (c.input.value = c.input.value);
        }, 20);
        b("StickyPlaceholderInput").setPlaceholderText(this.input, "");
        this.inform("resize");
      };
      d.setStickyPlaceholder = function (a) {
        (this.stickyPlaceholder = !0), this.setPlaceholder(a);
      };
      d.setPlaceholder = function (a) {
        (this.placeholder = a),
          this.stickyPlaceholder &&
            b("StickyPlaceholderInput").setPlaceholderText(this.input, a),
          this.updatePlaceholder();
      };
      d.updatePlaceholder = function () {
        if (!this.inline || this.input.value) return;
        var a = !this.tokens.length,
          c = "";
        a || this.stickyPlaceholder
          ? (this.adjustWidth(this.placeholder), (c = this.placeholder))
          : this.adjustWidth(this.input.value);
        b("StickyPlaceholderInput").setPlaceholderText(this.input, c);
      };
      d.adjustWidth = function (a) {
        if (!this.inline || !this._getIsInDOM()) return;
        !a && this.input.value === "" && (a = this.placeholder);
        var c = g;
        if (
          a !== this.placeholder ||
          !this.getTokens().length ||
          this.stickyPlaceholder
        ) {
          var d = b("Style").getFloat(this.getElement(), "width");
          a = this._getMetrics().measure(a);
          c = a.width + this._getWidthOffset() + 10;
          c = c >= d ? d : c;
        }
        b("Style").set(this.input, "width", c + "px");
        this.inform("resize");
        b("Arbiter").inform("reflow");
      };
      d.getToken = function (a) {
        return this.unique[a] || null;
      };
      d.getTokens = function () {
        return this.tokens || [];
      };
      d.getTokenElements = function () {
        return b("DOMQuery").scry(this.tokenarea, "span.uiToken");
      };
      d.getTokenElementFromTarget = function (a) {
        return b("Parent").byClass(a, "uiToken");
      };
      d.getTokenFromElement = function (a) {
        return b("DataStore").get(a, "Token");
      };
      d.getTokenValues = function () {
        return !this.tokens
          ? []
          : this.tokens.map(function (a) {
              return a.getValue();
            });
      };
      d.getFirstToken = function () {
        return this.tokens[0] || null;
      };
      d.getLastToken = function () {
        return this.tokens[this.tokens.length - 1] || null;
      };
      d.hasMaxTokens = function () {
        return this.maxTokens && this.maxTokens <= this.tokens.length;
      };
      d.createToken = function (a, c) {
        var d = this.getToken(this._tokenKey(a));
        d ||
          (d = a.weak_reference
            ? new (b("WeakToken"))(a, this.paramName)
            : new (b("Token"))(a, this.paramName));
        c && d.setElement(c);
        return d;
      };
      d.addToken = function (a, c) {
        if (this.hasMaxTokens()) return;
        var d = this._tokenKey(a.getInfo());
        if (d in this.unique) return;
        this.unique[d] = a;
        this.tokens.push(a);
        this.insertToken(a);
        this.updateTokenarea();
        this.inform("addToken", a);
        this.inform("addTokenWithQuery", { token: a, query: c });
        this.inform("changeTokens");
        b("Arbiter").inform("Form/change", { node: this.element });
      };
      d.insertToken = function (a) {
        b("DOM").appendContent(this.tokenarea, a.getElement());
      };
      d.removeToken = function (a) {
        if (!a) return;
        var c = this.tokens.indexOf(a);
        if (c < 0) return;
        this.tokens.splice(this.tokens.indexOf(a), 1);
        delete this.unique[this._tokenKey(a.getInfo())];
        b("DOM").remove(a.getElement());
        this.updateTokenarea();
        this.inform("removeToken", a);
        this.inform("changeTokens");
        b("Arbiter").inform("Form/change", { node: this.element });
      };
      d.removeAllTokens = function () {
        this.reset(),
          this.inform("changeTokens"),
          this.inform("removeAllTokens");
      };
      d.updateTokenarea = function () {
        var a = this.typeahead.getCore(),
          c = this.getTokenValues();
        this.excludeDuplicates &&
          (this._exclusions || (this._exclusions = a.getExclusions()),
          a.setExclusions(c.concat(this._exclusions)));
        a.setEnabled(!this.hasMaxTokens());
        this.updateTokenareaVisibility();
        this.updatePlaceholder();
        this.inform("resize");
        b("Arbiter").inform("reflow");
      };
      d.updateTokenareaVisibility = function () {
        b("CSS").conditionShow(this.tokenarea, this.tokens.length !== 0);
      };
      d._tokenKey = function (a) {
        return a.uid + (a.freeform ? ":" : "");
      };
      d._getWidthOffset = function () {
        if (this._widthOffset === null) {
          var a = this.input.clientWidth,
            c = b("Style").getFloat(this.input, "width");
          a == c
            ? (this._widthOffset =
                b("Style").getFloat(this.input, "paddingLeft") +
                b("Style").getFloat(this.input, "paddingRight"))
            : (this._widthOffset = 0);
        }
        return this._widthOffset;
      };
      d._getMetrics = function () {
        this._metrics ||
          (this._metrics = new (b("TextMetrics"))(this.input, this.inline));
        return this._metrics;
      };
      d._getIsInDOM = function () {
        return (
          this._isInDOM ||
          (this._isInDOM = b("DOMQuery").contains(document.body, this.input))
        );
      };
      c.getInstance = function (a) {
        a = b("Parent").byClass(a, "uiTokenizer");
        return a ? b("DataStore").get(a, "Tokenizer") : null;
      };
      c.init = function (a, b) {
        a.init(b.tokenarea, b.param_name, b.initial_info, b.options);
      };
      return c;
    })(b("mixin")(b("ArbiterMixin")));
    Object.assign(a.prototype, {
      inline: !1,
      maxTokens: null,
      excludeDuplicates: !0,
      placeholder: "",
      _widthOffset: null,
      _metrics: null,
    });
    e.exports = a;
  },
  null
);
__d(
  "Typeahead",
  [
    "ArbiterMixin",
    "BehaviorsMixin",
    "DOM",
    "DataStore",
    "Event",
    "Parent",
    "Run",
    "Style",
    "emptyFunction",
    "ge",
    "mixin",
  ],
  function (a, b, c, d, e, f, g) {
    b = (function (b) {
      babelHelpers.inheritsLoose(e, b);
      function e(a, c, e, f) {
        var g;
        g = b.call(this) || this;
        g.args = { data: a, view: c, core: e };
        d("DataStore").set(
          f,
          "Typeahead",
          babelHelpers.assertThisInitialized(g)
        );
        g.element = f;
        return g;
      }
      var f = e.prototype;
      f.init = function (a) {
        (this.init = c("emptyFunction")),
          this.getCore(),
          this.getView().setAccessibilityControlElement(
            this.getCore().getElement()
          ),
          this.proxyEvents(),
          this.initBehaviors(a || []),
          this.inform("init", this),
          this.data.bootstrap(),
          this.core.focus();
      };
      e.loadDataServer = function (a, b, c) {
        a.getData().onLoad(b, c);
      };
      f.getData = function () {
        if (!this.data) {
          var a = this.args.data;
          this.data = a;
          this.data.init();
        }
        return this.data;
      };
      f.getView = function () {
        if (!this.view) {
          var a = this.args.view,
            b = a.node || c("ge")(a.node_id);
          b ||
            ((b = c("DOM").create("div", { className: "uiTypeaheadView" })),
            c("DOM").appendContent(this.element, b));
          typeof a.ctor === "string"
            ? (this.view = new window[a.ctor](b, a.options || {}))
            : (this.view = new a.ctor(b, a.options || {}));
          this.view.init();
          this.view.setTypeahead(this.element);
        }
        return this.view;
      };
      f.getCore = function () {
        if (!this.core) {
          var a = this.args.core;
          typeof a.ctor === "string"
            ? (this.core = new window[a.ctor](a.options || {}))
            : (this.core = new a.ctor(a.options || {}));
          this.core.init(this.getData(), this.getView(), this.getElement());
        }
        return this.core;
      };
      f.getElement = function () {
        return this.element;
      };
      f.setHeight = function (a) {
        a !== "auto" && (a += "px"), c("Style").set(this.element, "height", a);
      };
      f.swapData = function (a) {
        return this.$Typeahead1(a, !0);
      };
      f.swapDataNoCoreReset = function (a) {
        return this.$Typeahead1(a, !1);
      };
      f.$Typeahead1 = function (a, b) {
        var c = this.core;
        this.data = this.args.data = a;
        a.init();
        c && ((c.data = a), c.initData(), b && c.reset(), this.proxyEvents());
        a.bootstrap();
        return a;
      };
      f.proxyEvents = function () {
        var a = this;
        [this.data, this.view, this.core].forEach(function (b) {
          b.subscribe(b.events, a.inform.bind(a));
        });
      };
      f.initBehaviors = function (b) {
        var e = this;
        b.forEach(function (b) {
          typeof b === "string"
            ? a.TypeaheadBehaviors && a.TypeaheadBehaviors[b]
              ? a.TypeaheadBehaviors[b](e)
              : d("Run").onLoad(function () {
                  a.TypeaheadBehaviors &&
                    (a.TypeaheadBehaviors[b] || c("emptyFunction"))(e);
                })
            : e.enableBehavior(b);
        });
      };
      e.getInstance = function (a) {
        a = d("Parent").byClass(a, "uiTypeahead");
        return a ? d("DataStore").get(a, "Typeahead") : null;
      };
      e.initNow = function (a, b, c) {
        c && c.init(a), a.init(b);
      };
      e.init = function (a, b, d, f) {
        c("DOM").isNodeOfType(a, ["input", "textarea"]) ||
          (a = c("DOM").scry(a, "input")[0] || c("DOM").scry(a, "textarea")[0]);
        var g = !1;
        try {
          g = document.activeElement === a;
        } catch (a) {}
        if (g) e.initNow(b, d, f);
        else
          var h = c("Event").listen(a, "focus", function () {
            e.initNow(b, d, f), h.remove();
          });
      };
      return e;
    })(c("mixin")(c("ArbiterMixin"), c("BehaviorsMixin")));
    g["default"] = b;
  },
  98
);
__d(
  "TypeaheadCore",
  [
    "Arbiter",
    "ArbiterMixin",
    "CSS",
    "DOM",
    "Event",
    "Focus",
    "Input",
    "InputSelection",
    "Keys",
    "StickyPlaceholderInput",
    "UserAgent",
    "bind",
    "emptyFunction",
    "mixin",
  ],
  function (a, b, c, d, e, f, g) {
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b) {
        var c;
        c = a.call(this) || this;
        c.events = ["blur", "focus", "click", "unselect", "loading", "change"];
        c.keepFocused = !0;
        c.preventFocusChangeOnTab = !1;
        c.queryTimeout = 250;
        c.resetOnKeyup = !0;
        c.resetOnSelect = !1;
        c.setValueOnSelect = !1;
        c.selectOnTabKey = !0;
        c.selectOnClick = !0;
        Object.assign(babelHelpers.assertThisInitialized(c), b);
        return c;
      }
      var e = b.prototype;
      e.init = function (a, b, e) {
        (this.init = c("emptyFunction")),
          (this.data = a),
          (this.view = b),
          (this.root = e),
          this.initInput(),
          (this.inputWrap = c("DOM").find(e, "div.wrap")),
          (this.hiddenInput = c("DOM").find(e, "input.hiddenInput")),
          (this.value = ""),
          (this.nextQuery = null),
          (this.selectedText = null),
          this.setValueOnSelect &&
            d("CSS").hasClass(this.inputWrap, "selected") &&
            (this.selectedText = this.getValue()),
          this.initView(),
          this.initData(),
          this.initEvents(),
          this.initToggle(),
          (this._exclusions = []);
      };
      e.initInput = function () {
        this.element = c("DOM").find(this.root, ".textInput");
        var a = c("DOM").scry(this.element, "input")[0];
        a && (this.element = a);
      };
      e.initView = function () {
        var a = this;
        this.view.subscribe(
          "highlight",
          d("Focus").set.bind(null, this.element)
        );
        this.view.subscribe("select", function (b, c) {
          a.select(c.selected);
        });
        this.view.subscribe("afterSelect", function () {
          a.afterSelect();
        });
      };
      e.initData = function () {
        var a = this;
        this.data.subscribe("notify", function (b, c) {
          a.root.id == c.rootid &&
            !a.element.disabled &&
            c.value == a.getValue() &&
            a.view.render(c.value, c.results, c.isAsync);
        });
        this.data.subscribe("respond", function (b, c) {
          (c.forceDisplay ||
            (c.value == a.getValue() &&
              !a.element.disabled &&
              (a.element.getAttribute("singlestate") !== "true" ||
                c.nullState))) &&
            a.view.render(c.value, c.results, c.isAsync);
        });
        this.data.subscribe("activity", function (b, c) {
          (a.fetching = c.activity),
            a.fetching || (a.nextQuery && a.performQuery()),
            a.loading != a.fetching &&
              ((a.loading = a.fetching),
              a.inform("loading", { loading: a.loading }));
        });
      };
      e.initEvents = function () {
        c("Event").listen(this.view.getElement(), {
          mouseup: this.viewMouseup.bind(this),
          mousedown: this.viewMousedown.bind(this),
        });
        var a = {
          blur: c("bind")(this, "blur"),
          focus: c("bind")(this, "focus"),
          click: c("bind")(this, "click"),
          keyup: c("bind")(this, "keyup"),
          keydown: c("bind")(this, "keydown"),
          keypress: c("bind")(this, "keypress"),
        };
        c("UserAgent").isBrowser("Firefox") &&
          c("Event").listen(this.element, { input: a.keyup });
        c("Event").listen(this.element, a);
      };
      e.initToggle = function () {
        this.subscribe("blur", this.view.hide.bind(this.view)),
          this.subscribe("focus", this.view.show.bind(this.view));
      };
      e.viewMousedown = function () {
        this.selecting = !0;
      };
      e.viewMouseup = function () {
        this.selecting = !1;
      };
      e.blur = function () {
        if (this.selecting) {
          this.selecting = !1;
          return;
        }
        this.inform("blur");
      };
      e.click = function () {
        if (this.selectOnClick) {
          var a = d("InputSelection").get(this.element);
          a.start == a.end && this.element.select();
        }
        this.inform("click");
      };
      e.focus = function () {
        this.checkValue(), this.inform("focus");
      };
      e.keyup = function () {
        this.resetOnKeyup && !this.getValue() && this.view.reset(),
          this.checkValue(),
          this.getValue().length === 0 && this.inform("change", null);
      };
      e.keydown = function (a) {
        if (!this.view.isVisible() || this.view.isEmpty()) {
          setTimeout(this.checkValue.bind(this), 0);
          return;
        }
        switch (c("Event").getKeyCode(a)) {
          case c("Keys").TAB:
            this.handleTab(a);
            return;
          case c("Keys").UP:
            this.view.prev();
            break;
          case c("Keys").DOWN:
            this.view.next();
            break;
          case c("Keys").ESC:
            this.view.reset();
            break;
          default:
            setTimeout(this.checkValue.bind(this), 0);
            return;
        }
        a.kill();
      };
      e.keypress = function (a) {
        this.view.getSelection() &&
          c("Event").getKeyCode(a) == c("Keys").RETURN &&
          (this.view.select(), a.kill());
      };
      e.handleTab = function (a) {
        this.preventFocusChangeOnTab &&
          (this.view.getSelection() ? a.kill() : a.prevent()),
          this.selectOnTabKey && this.view.select();
      };
      e.select = function (a) {
        if (a && this.setValueOnSelect) {
          var b = a.orig_text || a.text;
          this.setValue(b);
          this.setHiddenValue(a.uid);
          this.selectedText = b;
          d("CSS").addClass(this.inputWrap, "selected");
        }
      };
      e.afterSelect = function () {
        this.keepFocused ? d("Focus").set(this.element) : this.element.blur(),
          this.resetOnSelect ? this.reset() : this.view.reset();
      };
      e.unselect = function () {
        this.setValueOnSelect &&
          ((this.selectedText = null),
          d("CSS").removeClass(this.inputWrap, "selected")),
          this.setHiddenValue(),
          this.inform("unselect", this);
      };
      e.setEnabled = function (a) {
        a = a === !1;
        this.element.disabled = a;
        d("CSS").conditionClass(this.root, "uiTypeaheadDisabled", a);
      };
      e.reset = function () {
        this.unselect(),
          this.setValue(),
          this.keepFocused || d("Input").reset(this.element),
          this.view.reset(),
          this.inform("reset");
      };
      e.getElement = function () {
        return this.element;
      };
      e.setExclusions = function (a) {
        this._exclusions = a.map(String);
      };
      e.getExclusions = function () {
        return this._exclusions;
      };
      e.setValue = function (a) {
        (this.value = this.nextQuery = a || ""),
          d("Input").setValue(this.element, this.value),
          d("StickyPlaceholderInput").update(this.element),
          this.inform("change", a);
      };
      e.setHiddenValue = function (a) {
        typeof a === "number" && (a = String(a));
        this.hiddenInput.value = a || "";
        c("Arbiter").inform("Form/change", { node: this.hiddenInput });
        a = document.createEvent("HTMLEvents");
        a.initEvent("change", !1, !0);
        this.hiddenInput.dispatchEvent(a);
      };
      e.getValue = function () {
        return d("Input").getValue(this.element);
      };
      e.getHiddenValue = function () {
        return this.hiddenInput.value || "";
      };
      e.checkValue = function () {
        var a = this.getValue();
        if (a == this.value) return;
        this.selectedText && this.selectedText != a && this.unselect();
        var b = Date.now(),
          c = b - this.time;
        this.time = b;
        this.value = this.nextQuery = a;
        this.inform("change", this.value);
        this.performQuery(c);
      };
      e.performQuery = function (a) {
        if (this.selectedText) return;
        a = a || 0;
        this.fetching && a < this.queryTimeout
          ? this.data.query(this.nextQuery, !0, this._exclusions, a)
          : (this.data.query(this.nextQuery, !1, this._exclusions, a),
            (this.nextQuery = null));
      };
      e.updateHeight = function () {};
      return b;
    })(c("mixin")(c("ArbiterMixin")));
    g["default"] = a;
  },
  98
);
__d(
  "PhotoTagApproval",
  ["Arbiter", "CSS", "DOM", "Event", "Parent", "PhotosConst", "ge"],
  function (a, b, c, d, e, f) {
    a = (function () {
      "use strict";
      function a(a) {
        var c = this;
        this.viewer = a;
        this.units = [];
        this.currentUnit = 0;
        var d = a.getVersionConst();
        d == b("PhotosConst").VIEWER_SNOWLIFT
          ? (this._root = b("ge")("fbPhotoSnowliftTagApproval"))
          : (this._root = b("ge")("fbPhotoPageTagApproval"));
        b("Arbiter").subscribe(
          a.getEventString("DATA_CHANGE"),
          this.restartTagApproval.bind(this)
        );
        b("Arbiter").subscribe(
          "PhotoTagApproval.PENDING_TAG_PHOTO_CLICK",
          this.pendingTagPhotoClick.bind(this)
        );
        b("Event").listen(this._root, "click", this.handleClick.bind(this));
        b("Event").listen(this._root, "mousemove", function (a) {
          c.hiliteCurrentPendingTag(), b("Event").kill(a);
        });
        this.restartTagApproval();
      }
      var c = a.prototype;
      c.handleClick = function (a) {
        a = a.getTarget();
        if (
          b("CSS").hasClass(a, "nextPager") &&
          b("CSS").hasClass(a, "enabled")
        )
          this.showNextUnit();
        else if (
          b("CSS").hasClass(a, "prevPager") &&
          b("CSS").hasClass(a, "enabled")
        )
          this.showPrevUnit();
        else if (b("Parent").byClass(a, "fbPhotoApprovalPendingButtons")) {
          var c = this.units[this.currentUnit];
          c = this.getTagNameID(c);
          if (c) {
            a = b("Parent").byClass(a, "approve");
            b("Arbiter").inform("PhotoTagApproval.UPDATE_TAG_BOX", {
              id: c,
              approve: a,
              version: this.viewer.getVersionConst(),
            });
          }
          setTimeout(this.removeSelectedUnit.bind(this), 0);
        }
        return !0;
      };
      c.loadUnits = function (a) {
        (this.units = b("DOM").scry(this._root, "div.fbPhotoApprovalUnit")),
          this.units.length
            ? (b("CSS").show(this._root),
              this.showUnit(a),
              b("CSS").conditionClass(
                this._root,
                "hidePagers",
                this.units.length == 1
              ))
            : (b("CSS").hide(this._root),
              b("Arbiter").inform("PhotoTagApproval.HILITE_TAG", {
                tag: null,
                version: this.viewer.getVersionConst(),
              }));
      };
      c.restartTagApproval = function () {
        this.loadUnits(0);
      };
      c.pendingTagPhotoClick = function (a, c) {
        if (
          c.version !== b("PhotosConst").VIEWER_PERMALINK &&
          c.version !== b("PhotosConst").VIEWER_SNOWLIFT
        )
          return !0;
        a = "approve:" + c.id;
        for (c = 0; c < this.units.length; c++)
          if (this.units[c].id === a) {
            this.showUnit(c);
            return !1;
          }
        return !0;
      };
      c.removeSelectedUnit = function () {
        var a = this.units[this.currentUnit];
        b("DOM").remove(a);
        this.loadUnits(this.currentUnit);
      };
      c.showNextUnit = function () {
        this.showUnit(this.currentUnit + 1);
      };
      c.showPrevUnit = function () {
        this.showUnit(this.currentUnit - 1);
      };
      c.getTagNameID = function (a) {
        var b = a.id.indexOf(":");
        return a.id.slice(b + 1);
      };
      c.showUnit = function (a) {
        var c;
        this.units.forEach((c = b("CSS")).hide);
        this.currentUnit = (a + this.units.length) % this.units.length;
        a = this.units[this.currentUnit];
        c.show(a);
        this.hiliteCurrentPendingTag();
        c.conditionClass(
          b("DOM").find(this._root, "a.prevPager"),
          "enabled",
          this.currentUnit > 0
        );
        c.conditionClass(
          b("DOM").find(this._root, "a.nextPager"),
          "enabled",
          this.currentUnit < this.units.length - 1
        );
      };
      c.hiliteCurrentPendingTag = function () {
        var a = this.units[this.currentUnit];
        a = this.getTagNameID(a);
        b("Arbiter").inform("PhotoTagApproval.HILITE_TAG", {
          tag: a,
          version: this.viewer.getVersionConst(),
        });
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "PhotoTags",
  ["csx", "Arbiter", "CSS", "DOM", "Event", "Parent", "PhotosConst", "ge"],
  function (a, b, c, d, e, f, g) {
    a = (function () {
      "use strict";
      function a(a, c, d) {
        var e = this;
        this.tagTargets = a;
        this.tagBox = c;
        this.version = d || b("PhotosConst").VIEWER_PERMALINK;
        this.handlers = [];
        this.tagTargets.forEach(function (a) {
          e.handlers.push(
            b("Event").listen(a, {
              mouseover: e.showTag.bind(e),
              mouseout: e.hideTags.bind(e),
            })
          );
        });
        this.subscriptions = [];
        this.version == b("PhotosConst").VIEWER_SNOWLIFT &&
          this.subscriptions.push(
            b("Arbiter").subscribe(
              "PhotoSnowlift.PAGE",
              this.hideTags.bind(this)
            )
          );
      }
      var c = a.prototype;
      c.showTag = function (a) {
        a = a.getTarget();
        var c = b("CSS").hasClass(a, "taggee"),
          d = b("CSS").matchesSelector(a, "._54ru"),
          e = null,
          f = null;
        if (c)
          (e = a.getAttribute("data-tag")),
            (f = a.getAttribute("data-tagtype"));
        else if (d) {
          c = b("Parent").byTag(a, "a");
          e = c && c.getAttribute("data-tag");
        }
        e ||
          ((a = b("Parent").byClass(a, "taggee")),
          a &&
            ((e = a.getAttribute("data-tag")),
            (f = a.getAttribute("data-tagtype"))));
        d =
          this.version == b("PhotosConst").VIEWER_PERMALINK
            ? "perm:tag:" + e
            : "tag:" + e;
        c = d && b("ge")(d);
        c &&
          (f === "product"
            ? b("CSS").addClass(c, "hover")
            : b("CSS").addClass(c, "showTag"),
          b("CSS").addClass(this.tagBox, "showingTag"),
          b("Arbiter").inform("PhotoTags.SHOWTAG", e));
      };
      c.hideTags = function () {
        b("CSS").removeClass(this.tagBox, "showingTag"),
          b("DOM")
            .scry(this.tagBox, "div.showTag")
            .forEach(function (a) {
              b("CSS").removeClass(a, "showTag");
            }),
          b("DOM")
            .scry(this.tagBox, "div.hover")
            .forEach(function (a) {
              b("CSS").removeClass(a, "hover");
            }),
          b("Arbiter").inform("PhotoTags.HIDETAG");
      };
      c.destroy = function () {
        for (var a in this.handlers) this.handlers[a].remove();
        this.subscriptions.forEach(b("Arbiter").unsubscribe, b("Arbiter"));
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "PhotoViewerFollow",
  [
    "$",
    "Arbiter",
    "AsyncRequest",
    "CSS",
    "DOM",
    "Event",
    "ODS",
    "Parent",
    "PhotosConst",
    "collectDataAttributes",
  ],
  function (a, b, c, d, e, f) {
    var g = {};
    a = (function () {
      "use strict";
      function a(a) {
        (this.FOLLOW_LOCATION_PHOTO = 48), (this.viewer = a);
      }
      var c = a.prototype;
      c.init = function (a, c, d, e, f, g, h) {
        var i = this;
        this.subscribeLink = a;
        this.unsubscribeFlyout = c;
        this.subscribeEndpoints = f;
        this.unsubscribeEndpoints = g;
        this.unsubLinks = e;
        this.unsubDiv = d;
        this.reset();
        this.activate();
        this.type = h;
        b("Event").listen(this.subscribeLink, "click", function (a) {
          b("Parent").byClass(a.getTarget(), "photoViewerFollowLink") &&
            i.subscribePhotoOwner();
        });
        b("Event").listen(
          this.unsubLinks.user,
          "click",
          this.unsubscribePhotoOwner.bind(this)
        );
        b("Event").listen(
          this.unsubLinks.page,
          "click",
          this.unsubscribePhotoOwner.bind(this)
        );
        b("Arbiter").subscribe(
          ["FollowUser", "FollowUserFail", "UnfollowUser", "UnfollowUserFail"],
          this.updateSubscribe.bind(this)
        );
        b("Arbiter").subscribe(
          this.viewer.getEventString("DATA_CHANGE"),
          this.showSubscribeLinkOnChange.bind(this)
        );
        this.viewer.getVersionConst() === b("PhotosConst").VIEWER_SNOWLIFT &&
          (b("Arbiter").subscribe(
            this.viewer.getEventString("CLOSE"),
            this.reset.bind(this)
          ),
          b("Arbiter").subscribe(
            this.viewer.getEventString("OPEN"),
            this.activate.bind(this)
          ));
        this.registerUnsubscribeTarget();
      };
      c.activate = function () {
        this.activated = !0;
      };
      c.reset = function () {
        this.unsubscribeFlyout && this.unsubscribeFlyout.clearNodes(),
          (this.subscriptionChange = {}),
          (this.activated = !1);
      };
      c.registerUnsubscribeTarget = function () {
        if (!this.unsubscribeFlyout) return;
        var a = b("DOM").scry(this.subscribeLink, ".photoViewerFollowedMsg")[0];
        a &&
          !b("CSS").hasClass(a, "unsubFlyoutEnabled") &&
          (this.unsubscribeFlyout.initNode(a),
          b("CSS").addClass(a, "unsubFlyoutEnabled"));
      };
      c.updateSubscribe = function (a, b) {
        if (!this.activated) return;
        b = b.profile_id;
        b &&
          ((this.subscriptionChange[b] =
            a === "FollowUser" || a === "UnfollowUserFail"
              ? "following"
              : "unfollowed"),
          this.toggleSubscribeLink(b));
      };
      c.showSubscribeLinkOnChange = function (a, c) {
        (this.type = c.ownertype),
          b("CSS").conditionClass(
            this.unsubDiv,
            "isPage",
            this.type === "page"
          ),
          this.toggleSubscribeLink(c.owner);
      };
      c.toggleSubscribeLink = function (a) {
        var c = b("DOM").scry(
          this.subscribeLink,
          "span.fbPhotoSubscribeWrapper"
        )[0];
        if (!c) return;
        this.subscriptionChange[a] &&
          (b("CSS").conditionClass(
            c,
            "followingOwner",
            this.subscriptionChange[a] === "following"
          ),
          this.subscriptionChange[a] === "unfollowed" &&
            this.unsubscribeFlyout &&
            this.unsubscribeFlyout.hideFlyout(!0));
        this.registerUnsubscribeTarget();
      };
      c.subscribePhotoOwner = function () {
        if (!this.viewer.getOwnerId()) return;
        var a =
          this.type === "user"
            ? { profile_id: this.viewer.getOwnerId() }
            : {
                fbpage_id: this.viewer.getOwnerId(),
                add: !0,
                reload: !1,
                fan_origin: "photo_snowlift",
              };
        b("Arbiter").inform("FollowUser", {
          profile_id: this.viewer.getOwnerId(),
        });
        this.type === "page" &&
          b("ODS").bumpEntityKey(
            2966,
            "snowlift_page_like",
            "snowlift_page_like.clicked_link"
          );
        a.location = this.FOLLOW_LOCATION_PHOTO;
        var c = event.getTarget();
        c && Object.assign(a, { ft: b("collectDataAttributes")(c, ["ft"]).ft });
        new (b("AsyncRequest"))(this.subscribeEndpoints[this.type])
          .setAllowCrossPageTransition(!0)
          .setData(a)
          .setMethod("POST")
          .setReadOnly(!1)
          .setErrorHandler(b("Arbiter").inform.bind(null, "FollowUserFail", a))
          .send();
      };
      c.unsubscribePhotoOwner = function () {
        if (!this.viewer.getOwnerId()) return;
        var a =
          this.type === "user"
            ? { profile_id: this.viewer.getOwnerId() }
            : { fbpage_id: this.viewer.getOwnerId(), add: !1, reload: !1 };
        b("Arbiter").inform("UnfollowUser", {
          profile_id: this.viewer.getOwnerId(),
        });
        a.location = this.FOLLOW_LOCATION_PHOTO;
        var c = event.getTarget();
        c && Object.assign(a, { ft: b("collectDataAttributes")(c, ["ft"]).ft });
        new (b("AsyncRequest"))(this.unsubscribeEndpoints[this.type])
          .setAllowCrossPageTransition(!0)
          .setData(a)
          .setMethod("POST")
          .setReadOnly(!1)
          .setErrorHandler(
            b("Arbiter").inform.bind(null, "UnfollowUserFail", a)
          )
          .send();
      };
      a.createInstance = function (c, d, e, f, h, i, j, k) {
        c = c.getInstance();
        var l = new a(c);
        l.init(b("$")(d), e, f, h, i, j, k);
        g[c.getVersionConst()] = l;
        return l;
      };
      a.getInstance = function (a) {
        return g[a];
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "PhotoViewerInitPagelet",
  [
    "DOM",
    "PhotoSnowlift",
    "PhotoTagApproval",
    "PhotoTagger",
    "PhotoTags",
    "ge",
  ],
  function (a, b, c, d, e, f) {
    a = function (a) {
      "use strict";
      b("PhotoSnowlift").attachTagger(a.tagging, a.tokenizer, a.ufi);
      var c = b("PhotoSnowlift").getInstance(),
        d = c.getRoot();
      new (b("PhotoTags"))(
        [
          b("ge")("fbPhotoSnowliftAuthorName"),
          b("DOM").find(d, "span.fbPhotoTagList"),
        ],
        b("ge")("fbPhotoSnowliftTagBoxes"),
        a.version
      );
      if (a.setupPhotoTagger) {
        d = new (b("PhotoTagger"))(c);
        d.initSnowlift(a.tagging, a.tokenizer, a.userId, a.ufi);
        d.setQueueName(a.queueName);
      }
      new (b("PhotoTagApproval"))(c);
    };
    e.exports = a;
  },
  null
);
__d(
  "TagToken",
  ["DOM", "Token"],
  function (a, b, c, d, e, f) {
    a = (function (a) {
      "use strict";
      babelHelpers.inheritsLoose(c, a);
      function c(b) {
        return a.call(this, b, "tag") || this;
      }
      var d = c.prototype;
      d.createElement = function () {
        var a = this.isFreeform(),
          c = b("DOM").create("span", { className: "separator" }, ", "),
          d = b("DOM").create(
            a ? "span" : "a",
            { className: "taggee", "data-tag": this.getValue() },
            this.getText()
          );
        a || (d.href = this.getInfo().path);
        return b("DOM").create("span", { className: "tagItem" }, [c, d]);
      };
      return c;
    })(b("Token"));
    e.exports = a;
  },
  null
);
__d(
  "TagTokenizer",
  [
    "fbt",
    "Arbiter",
    "CSS",
    "DOM",
    "Parent",
    "TagToken",
    "Tokenizer",
    "createObjectFrom",
    "ge",
    "getElementText",
  ],
  function (a, b, c, d, e, f, g) {
    a = (function (a) {
      "use strict";
      babelHelpers.inheritsLoose(c, a);
      function c(c, d, e, f, g) {
        e = a.call(this, e, f, g) || this;
        b("Arbiter").subscribe(
          "PhotoInlineEditor.CANCEL_INLINE_EDITING",
          e.updateTokenareaVisibility.bind(
            babelHelpers.assertThisInitialized(e)
          ),
          "new"
        );
        e.appphoto = d;
        b("Arbiter").subscribe(
          c.getInstance().getEventString("DATA_CHANGE"),
          e.setup.bind(babelHelpers.assertThisInitialized(e)),
          "new"
        );
        return e;
      }
      var d = c.prototype;
      d.setup = function (a, b) {
        this.appphoto = b.byapp;
        this.byowner = b.isowner;
        return this.reset();
      };
      d.reset = function () {
        var c = this,
          d = this.getTokenElements().map(this.getTokenDataFromTag, this);
        this.withTagKeys = {};
        var e = this.getWithTagTokenElements().map(function (a) {
          return c._tokenKey(c.getTokenDataFromTag(a));
        });
        this.withTagKeys = b("createObjectFrom")(e);
        return a.prototype.reset.call(this, d);
      };
      d.processEvents = function (a, c, d) {
        if (b("Parent").byClass(c, "remove")) {
          d = this.getTokenFromElement(d);
          d = this.addTokenData(d, c);
          this.removeToken(d);
          a.kill();
        }
      };
      d.insertToken = function (a) {
        return null;
      };
      d.removeToken = function (a) {
        if (this.appphoto) return this.replaceToken(a);
        else
          this.inform("removeToken", a),
            b("Arbiter").inform("Form/change", { node: this.element });
        return null;
      };
      d.addTokenData = function (a, c) {
        b("Parent").byClass(c, "blockuser") && (a.blockUser = !0);
        return a;
      };
      d.getTokenDataFromTag = function (a) {
        return {
          uid: b("DOM").find(a, "input").value,
          text: b("getElementText")(b("DOM").find(a, ".taggee")),
        };
      };
      d.getTokenElementFromTarget = function (a) {
        return b("Parent").byClass(a, "tagItem");
      };
      d.getTokenElements = function () {
        return b("DOM")
          .scry(this.tokenarea, "span.tagItem")
          .filter(this.filterNonTokenElements, this);
      };
      d.getWithTagTokenElements = function () {
        return b("DOM").scry(this.tokenarea, "span.withTagItem");
      };
      d.filterNonTokenElements = function (a) {
        return (
          !b("CSS").hasClass(a, "markasspam") &&
          !b("CSS").hasClass(a, "reported") &&
          !b("CSS").hasClass(a, "withTagItem")
        );
      };
      d.createToken = function (a, c) {
        var d = this.getToken(this._tokenKey(a));
        d = d || new (b("TagToken"))(a);
        c && d.setElement(c);
        return d;
      };
      d.updateTokenareaVisibility = function () {
        var a = this.getTokenElements().filter(function (a) {
            return b("CSS").shown(a);
          }),
          c = this.getWithTagTokenElements(),
          d = b("DOM").scry(this.tokenarea, "span.ogTagItem");
        b("CSS").conditionShow(
          this.tokenarea,
          a.length !== 0 || c.length !== 0 || d.length !== 0
        );
      };
      d.replaceToken = function (a) {
        if (!a) return;
        var c = this.tokens.indexOf(a);
        if (c < 0) return;
        this.tokens.splice(this.tokens.indexOf(a), 1);
        delete this.unique[this._tokenKey(a.getInfo())];
        c = b("ge")("tagspam" + a.getValue());
        c && b("DOM").remove(c);
        c = [" [", g._("Identification retir\u00e9e."), " "];
        c.push(
          b("DOM").create(
            "a",
            { onclick: this.markAsSpam.bind(this, a.getValue()) },
            g._("Marquer l\u2019identification comme ind\u00e9sirable")
          )
        );
        c.push("] ");
        c = b("DOM").create(
          "span",
          {
            className: "fbPhotosTaglistTag tagItem markasspam",
            id: "tagspam" + a.getValue(),
          },
          c
        );
        b("DOM").replace(a.getElement(), c);
        this.updateTokenarea();
        this.inform("removeToken", a);
        b("Arbiter").inform("Form/change", { node: this.element });
      };
      d.markAsSpam = function (a) {
        var c = b("ge")("tagspam" + a),
          d = [" [", g._("Identification signal\u00e9e"), "] "];
        d = b("DOM").create(
          "span",
          {
            className: "fbPhotosTaglistTag tagItem reported",
            id: "tagspam" + a,
          },
          d
        );
        b("DOM").replace(c, d);
        this.inform("markTagAsSpam", a);
      };
      d.removeTokenForSpatialTag = function (b) {
        a.prototype.removeToken.call(this, b);
      };
      return c;
    })(b("Tokenizer"));
    e.exports = a;
  },
  null
);
__d(
  "TagTypeaheadView",
  [
    "AsyncRequest",
    "CSS",
    "ContextualTypeaheadView",
    "DOM",
    "FamilyTaggingConfig",
    "Parent",
  ],
  function (a, b, c, d, e, f) {
    a = (function (a) {
      "use strict";
      babelHelpers.inheritsLoose(c, a);
      function c(b, c) {
        b = a.call(this, b, c) || this;
        b.hintText = c.hintText;
        b.userEd = c.userEd;
        b.origAutoSelect = c.autoSelect;
        b.setSuggestions(c.suggestions);
        return b;
      }
      var d = c.prototype;
      d.init = function () {
        b("CSS").addClass(this.element, "uiTagTypeaheadView"),
          a.prototype.init.call(this);
      };
      d.buildResults = function (c) {
        this.hasResultsWithEmptyInput = !1;
        (!this.value || this.hasResultsWithEmptyInput) &&
          this.hintText &&
          c.unshift({ subtext: this.hintText, type: "hintText" });
        this.userEd &&
          (new (b("AsyncRequest"))()
            .setURI("/ajax/fof/user_education.php")
            .setData({ increment: 1 })
            .send(),
          c.unshift({ subtext: this.userEd, type: "userEdText" }));
        if (b("FamilyTaggingConfig").gk) {
          var d = [],
            e = [];
          for (var f = 0; f < c.length; f++)
            c[f].type !== "family_tags" &&
            c[f].index != -1e3 &&
            c[f].type !== "hintText"
              ? d.push(c[f])
              : e.push(c[f]);
          c = e.concat(d);
          a.prototype.updateResults.call(this, c);
        }
        f = a.prototype.buildResults.call(this, c);
        this.userEd && c.shift();
        (!this.value || this.hasResultsWithEmptyInput) && c.shift();
        return f;
      };
      d.show = function () {
        var c = b("DOM").scry(this.context, ".typeaheadBackdrop");
        c.length > 0 && b("CSS").addClass(c[0], "resultsPresent");
        return a.prototype.show.call(this);
      };
      d.hide = function () {
        var c = b("DOM").scry(this.context, ".typeaheadBackdrop");
        c.length > 0 && b("CSS").removeClass(c[0], "resultsPresent");
        return a.prototype.hide.call(this);
      };
      d.render = function (b, c, d) {
        (this.autoSelect = this.origAutoSelect && b.length),
          (this.disableAutoSelect = b.length === 0),
          (c = c.concat(this.getAdditionalResults())),
          a.prototype.render.call(this, b, c, d);
      };
      d.getItems = function () {
        var b = a.prototype.getItems.call(this);
        (!this.value || this.hasResultsWithEmptyInput) && b.shift();
        this.userEd && b.shift();
        return b;
      };
      d.getSuggestions = function () {
        return this.suggestions;
      };
      d.setSuggestions = function (a) {
        (this.suggestions = a ? a.map(String) : []),
          (this.visible = !!this.suggestions.length);
      };
      d.addSuggestion = function (a) {
        this.suggestions.unshift(a);
      };
      d.addTypeaheadFlip = function (a) {
        b("CSS").addClass(this.element, a);
      };
      d.removeTypeaheadFlip = function (a) {
        b("CSS").removeClass(this.element, a);
      };
      d.getContext = function () {
        var c = b("Parent").byClass(this.element, "typeaheadContainer");
        if (c) return c;
        else return a.prototype.getContext.call(this);
      };
      d.getAdditionalResults = function () {
        return [];
      };
      return c;
    })(b("ContextualTypeaheadView"));
    e.exports = a;
  },
  null
);
__d(
  "FreeformTokenizerBehavior",
  ["Event", "Input", "Keys"],
  function (a, b, c, d, e, f) {
    function a(a, c) {
      var d = c.matcher && new RegExp(c.matcher, "i"),
        e = c.splitter && new RegExp(c.splitter),
        f = c.tokenize_on_blur !== !1,
        g = c.tokenize_on_paste !== !1,
        h = c.split_on_check === !0,
        i = c.select_on_comma !== !1,
        j = c.select_on_space === !0,
        k = c.never_submit === !0;
      function l(c) {
        var f = b("Input").getValue(a.getInput()).trim();
        e && c && c.type == "paste"
          ? (f = f.split(e))
          : e && h
          ? (f = f.split(e))
          : (f = [f]);
        var g = !1;
        for (var i = 0; i < f.length; i++) {
          var j = f[i].trim();
          if (j && (!d || d.test(j))) {
            j = { uid: j, text: j, freeform: !0 };
            a.addToken(a.createToken(j));
            g = !0;
          }
        }
        c && g && (a.getTypeahead().getCore().afterSelect(), c.kill());
      }
      a.subscribe("keydown", function (c, d) {
        c = d.event;
        d = b("Event").getKeyCode(c);
        if (
          d == b("Keys").RETURN ||
          (i && d == b("Keys").COMMA) ||
          (j && d == b("Keys").SPACE)
        ) {
          var e = a.getTypeahead().getView();
          e.getSelection() ? (e.select(), c.kill()) : l(c);
        }
        d == b("Keys").RETURN && k && c.kill();
      });
      a.subscribe("paste", function (a, b) {
        g && setTimeout(l.bind(null, b.event), 20);
      });
      a.subscribe("blur", function (b, c) {
        f && l(), a.getTypeahead().getCore().reset();
      });
    }
    e.exports = a;
  },
  null
);
__d(
  "TypeaheadHintText",
  ["emptyFunction"],
  function (a, b, c, d, e, f) {
    a = (function () {
      "use strict";
      function a(a) {
        this._typeahead = a;
      }
      var b = a.prototype;
      b.enable = function () {
        this._typeahead.getCore().resetOnKeyup = !1;
      };
      return a;
    })();
    Object.assign(a.prototype, { disable: b("emptyFunction") });
    e.exports = a;
  },
  null
);
__d(
  "legacy:HintTextTypeaheadBehavior",
  ["TypeaheadHintText"],
  function (a, b, c, d, e, f) {
    a.TypeaheadBehaviors || (a.TypeaheadBehaviors = {}),
      (a.TypeaheadBehaviors.hintText = function (a) {
        a.enableBehavior(b("TypeaheadHintText"));
      });
  },
  3
);
__d(
  "TypeaheadHoistFriends",
  [],
  function (a, b, c, d, e, f) {
    a = (function () {
      "use strict";
      function a(a) {
        this._typeahead = a;
      }
      var b = a.prototype;
      b.enable = function () {
        var a = this._typeahead.getView();
        this._subscription = a.subscribe("beforeRender", function (a, b) {
          a = [];
          var c = [],
            d = [];
          for (var e = 0; e < b.results.length; ++e) {
            var f = b.results[e];
            f.type == "header"
              ? ((d = d.concat(c, a)), d.push(f), (c = []), (a = []))
              : f.type == "user" && f.bootstrapped
              ? c.push(f)
              : a.push(f);
          }
          b.results = d.concat(c, a);
        });
      };
      b.disable = function () {
        this._typeahead.getView().unsubscribe(this._subscription),
          (this._subscription = null);
      };
      return a;
    })();
    Object.assign(a.prototype, { _subscription: null });
    e.exports = a;
  },
  null
);
__d(
  "legacy:HoistFriendsTypeaheadBehavior",
  ["TypeaheadHoistFriends"],
  function (a, b, c, d, e, f) {
    a.TypeaheadBehaviors || (a.TypeaheadBehaviors = {}),
      (a.TypeaheadBehaviors.hoistFriends = function (a) {
        a.enableBehavior(b("TypeaheadHoistFriends"));
      });
  },
  3
);
__d(
  "QueriesHistory",
  [],
  function (a, b, c, d, e, f) {
    a = (function () {
      "use strict";
      function a(a) {
        (this.$1 = a), this.reset();
      }
      var b = a.prototype;
      b.getQueries = function () {
        return this.$2;
      };
      b.getCurrentLength = function () {
        return this.$3;
      };
      b.add = function (a) {
        this.$2.push(a);
        this.$3 += a.length;
        while (this.$2.length !== 0 && this.$3 > this.$1) {
          a = this.$2.shift();
          this.$3 -= a.length;
        }
      };
      b.reset = function () {
        (this.$3 = 0), (this.$2 = []);
      };
      return a;
    })();
    e.exports = a;
  },
  null
);
__d(
  "TypeaheadMetrics",
  ["AsyncRequest", "Event", "QueriesHistory", "emptyFunction"],
  function (a, b, c, d, e, f) {
    var g = 1e3;
    a = (function () {
      "use strict";
      function a(a) {
        (this.extraData = {}), Object.assign(this, a);
      }
      var c = a.prototype;
      c.init = function (a) {
        (this.init = b("emptyFunction")), this._initImpl(a);
      };
      c._initImpl = function (a) {
        (this.core = a.getCore()),
          (this.view = a.getView()),
          (this.data = a.getData()),
          (this.queriesHistory = new (b("QueriesHistory"))(g)),
          (this.stats = {}),
          (this.sessionActive = !1),
          (this._sessionStartEvents = []),
          (this._sessionEndEvents = []),
          this._reset(),
          this.initEvents();
      };
      c._reset = function () {
        (this.log = []),
          (this.stats = {}),
          (this.avgStats = {}),
          (this.sessionActive = !1),
          this._setSid(Math.floor(Date.now() * Math.random())),
          (this.request_ids = []),
          (this.lastNotBackspacedQuery = ""),
          this.queriesHistory.reset(),
          this._logEvent("session_started", {});
      };
      c._logEvent = function (a, b) {
        a = { type: a, data: b, time: Date.now() };
        this.log.push(a);
      };
      c._setSid = function (a) {
        (this.sid = a),
          typeof this.data.queryData === "object" &&
          this.data.queryData !== null
            ? (this.data.queryData.sid = this.sid)
            : this.data.setQueryData({ sid: this.sid }),
          typeof this.data.bootstrapData === "object" &&
          this.data.bootstrapData !== null
            ? (this.data.bootstrapData.sid = this.sid)
            : this.data.setBootstrapData({ sid: this.sid });
      };
      c.resetWithData = function (a) {
        (this.init = b("emptyFunction")), this._initImpl(a);
      };
      c.resetWithDataBeforeSessionEnd = function (a) {
        var c = this.sessionActive;
        this.init = b("emptyFunction");
        this._initImpl(a);
        this.sessionActive = c;
      };
      c.recordSelect = function (a) {
        var b = a.selected;
        b.uid == null
          ? this.recordStat("selected_id", "SELECT_NULL")
          : this.recordStat("selected_id", b.uid);
        this.recordStat("selected_type", b.type);
        this.recordStat("selected_score", b.score);
        this.recordStat("selected_original_id", b.original_id);
        this.recordStat("place_id", b.place_id);
        this.recordStat("client_time", b.client_time);
        this.recordStat("selected_position", a.index);
        this.recordStat("selected_with_mouse", a.clicked ? 1 : 0);
        this.recordStat("selected_query", a.query);
        this._sessionEnd();
      };
      c.bindSessionStart = function (a, b, c) {
        var d = this;
        if (c)
          for (c = 0; c < this._sessionStartEvents.length; ++c) {
            var e = this._sessionStartEvents[c];
            e.obj.unsubscribe(e.token);
          }
        this._sessionStartEvents.push({
          obj: a,
          token: a.subscribe(b, function (a, b) {
            d._sessionStart();
          }),
        });
      };
      c.bindSessionEnd = function (a, b, c) {
        var d = this;
        if (c)
          for (c = 0; c < this._sessionEndEvents.length; ++c) {
            var e = this._sessionEndEvents[c];
            e.obj.unsubscribe(e.token);
          }
        this._sessionEndEvents.push({
          obj: a,
          token: a.subscribe(b, function (a, b) {
            d._sessionEnd();
          }),
        });
      };
      c.dataSubscribe = function (a, b) {
        var c = this.data,
          d = this.data.subscribe(a, b);
        this._dataSubscriptions.push(function () {
          c.unsubscribe(d);
        });
      };
      c.initEvents = function () {
        var a = this;
        this._dataSubscriptions = this._dataSubscriptions || [];
        this._dataSubscriptions.forEach(function (a) {
          a();
        });
        this._dataSubscriptions = [];
        this.bindSessionStart(this.core, "focus", !1);
        this.bindSessionEnd(this.core, "blur", !1);
        this.view.subscribe("select", function (b, c) {
          a.recordSelect(c);
        });
        this.bindSessionEnd(this.view, "select", !1);
        this.view.subscribe("render", function (b, c) {
          a.results = c;
        });
        this.dataSubscribe("beforeQuery", function (b, c) {
          a._logEvent("user_typed", { query: c.value });
          if (!c.value) return;
          a.query = c.value;
          a.queriesHistory.add(a.query);
          a.lastNotBackspacedQuery.indexOf(a.query) !== 0 &&
            (a.lastNotBackspacedQuery = a.query);
          a.recordCountStat("num_queries");
        });
        this.dataSubscribe("beforeFetch", function (b, c) {
          c.fetch_context.bootstrap
            ? (a.bootstrapBegin = Date.now())
            : (c.fetch_context.queryBegin = Date.now()),
            a._logEvent("async_query_started", {
              query: c.fetch_context.value,
              request_id: c.fetch_context.request_id,
            });
        });
        this.dataSubscribe("fetchComplete", function (b, c) {
          a._logEvent("async_query_completed", {
            query: c.fetch_context.value,
            request_id: c.fetch_context.request_id,
          });
          if (c.fetch_context.bootstrap) {
            a.recordAvgStat("bootstrap_latency", Date.now() - a.bootstrapBegin);
            var d = {};
            c.response.payload.entries.forEach(function (a) {
              !d[a.type] ? (d[a.type] = 1) : d[a.type]++;
            });
            a.recordStat("bootstrap_response_types", d);
            a.bootstrapped = !0;
          } else "filtered_count" in c.response.payload && a.recordStat("filtered_count", c.response.payload.filtered_count), a.recordAvgStat("avg_query_latency", Date.now() - c.fetch_context.queryBegin);
        });
        this.dataSubscribe("respond", function (b, c) {
          a._logEvent("respond", {
            query: c.value,
            num_results: c.results.length,
          });
          b = a.data.tokenizeBackend(c.value || "").flatValue;
          c = a.data.findBestPreviousQuery(b, a.data.getQueryIDs()) || "";
          b = a.data.getQueryIDs()[c];
          a.normalized_backend_query = c;
          a.request_id = b;
          a.request_ids.push(b);
        });
        this.dataSubscribe("dirty", function (b, c) {
          a.bootstrapped = !1;
        });
      };
      c._sessionStart = function () {
        if (this.sessionActive) return;
        this.sessionActive = !0;
      };
      c._sessionEnd = function () {
        if (!this.sessionActive) return;
        this.sessionActive = !1;
        this.submit();
        this._reset();
      };
      c.recordStat = function (a, b) {
        this.stats[a] = b;
      };
      c.recordCountStat = function (a) {
        var b = this.stats[a];
        this.stats[a] = b ? b + 1 : 1;
      };
      c.recordAvgStat = function (a, b) {
        this.avgStats[a]
          ? ((this.avgStats[a][0] += b), ++this.avgStats[a][1])
          : (this.avgStats[a] = [b, 1]);
      };
      c.hasStats = function () {
        return !!Object.keys(this.stats).length;
      };
      c.submit = function () {
        if ("log_all_sessions" in this.extraData || this.hasStats()) {
          Object.assign(this.stats, this.extraData);
          if (this.results) {
            var a = this.results.map(function (a, b) {
              return a.uid;
            });
            this.recordStat("candidate_results", JSON.stringify(a));
          }
          this.query && this.recordStat("query", this.query);
          this.lastNotBackspacedQuery &&
            this.recordStat(
              "last_not_backspaced_query",
              this.lastNotBackspacedQuery
            );
          this.recordStat(
            "queries_history",
            JSON.stringify(this.queriesHistory.getQueries())
          );
          this.normalized_backend_query &&
            this.recordStat(
              "normalized_backend_query",
              this.normalized_backend_query
            );
          this.request_id && this.recordStat("request_id", this.request_id);
          this.request_ids.length &&
            this.recordStat("request_ids", this.request_ids);
          this.sid && this.recordStat("sid", this.sid);
          this.bootstrapped && this.recordStat("bootstrapped", 1);
          for (a in this.avgStats) {
            var c = this.avgStats[a];
            this.stats[a] = c[0] / c[1];
          }
          this.recordStat("log", JSON.stringify(this.log));
          new (b("AsyncRequest"))()
            .setURI(this.endPoint)
            .setMethod("POST")
            .setData({ stats: this.stats })
            .setErrorHandler(b("emptyFunction"))
            .send();
          this._reset();
        }
      };
      a.register = function (a, c, d) {
        if (document.activeElement === a) c.init(d);
        else
          var e = b("Event").listen(a, "focus", function () {
            c.init(d), e.remove();
          });
      };
      return a;
    })();
    Object.assign(a.prototype, {
      endPoint: "/ajax/typeahead/record_basic_metrics.php",
    });
    e.exports = a;
  },
  null
);
__d(
  "createEmojiElement",
  ["cx", "JSXDOM"],
  function (a, b, c, d, e, f, g, h) {
    function a(a, b, d) {
      d = d || 16;
      d = {
        height: d + "px",
        width: d + "px",
        fontSize: d + "px",
        backgroundImage: "url('" + b + "')",
      };
      return c("JSXDOM").span({ className: "_5mfr" }, [
        c("JSXDOM").span({ className: "_6qdm", style: d }, a),
      ]);
    }
    g["default"] = a;
  },
  98
);
__d(
  "DOMEmoji",
  [
    "cx",
    "EmojiImageURL",
    "EmojiRenderer",
    "FBEmojiUtils",
    "JSXDOM",
    "createEmojiElement",
    "flattenArray",
    "isElementNode",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
      MAX_ITEMS: 40,
      transform: function (a, c) {
        var d = this;
        c = c || {};
        var e = c.size || 16,
          f = c.emojiUrlGenerator || b("EmojiImageURL").getFBEmojiURL;
        return b("flattenArray")(
          a.map(function (a) {
            if (!b("isElementNode")(a))
              return b("EmojiRenderer").render(
                a,
                function (a) {
                  var c = b("FBEmojiUtils").getSupportedKey(a);
                  return c
                    ? b("createEmojiElement")(a.join(""), f(c, e), e)
                    : b("JSXDOM").span(
                        { className: "_4ay8" + (e === 16 ? " _3kkw" : "") },
                        a.join("")
                      );
                },
                d.MAX_ITEMS
              );
            else return a;
          })
        );
      },
      params: function (a) {
        if (!a) return this;
        var b = this;
        return { __params: !0, obj: b, params: a };
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "EmoticonEmojiList",
  [],
  function (a, b, c, d, e, f) {
    a = {
      ":)": "slightsmile",
      ":-)": "slightsmile",
      ":]": "slightsmile",
      "=)": "smile",
      "(:": "slightsmile",
      "(=": "smile",
      ":(": "frown",
      ":-(": "frown",
      ":[": "frown",
      "=(": "frown",
      ")=": "frown",
      ";-P": "winktongue",
      ";P": "winktongue",
      ";-p": "winktongue",
      ";p": "winktongue",
      ":dog:": "dog",
      ":poop:": "poop",
      ":trans:": "transflag",
      ":P": "tongue",
      ":-P": "tongue",
      ":-p": "tongue",
      ":p": "tongue",
      "=P": "tongue",
      "=p": "tongue",
      "=D": "grin",
      ":-D": "slightgrin",
      ":D": "slightgrin",
      ":o": "gasp",
      ":-O": "gasp",
      ":O": "gasp",
      ":-o": "gasp",
      ";)": "wink",
      ";-)": "wink",
      "8-)": "glasses",
      "8)": "glasses",
      "B-)": "glasses",
      "B)": "glasses",
      ">:(": "grumpy",
      ">:-(": "grumpy",
      ":/": "unsure",
      ":-/": "unsure",
      ":\\": "unsure",
      ":-\\": "unsure",
      "=/": "unsure",
      "=\\": "unsure",
      ":'(": "cry",
      ":'-(": "cry",
      ":\u2019(": "cry",
      ":\u2019-(": "cry",
      "3:)": "devil",
      "3:-)": "devil",
      "O:)": "angel",
      "O:-)": "angel",
      "0:)": "angel",
      "0:-)": "angel",
      ":*": "kiss",
      ":-*": "kiss",
      ";-*": "winkkiss",
      ";*": "winkkiss",
      "<3": "heart",
      "&lt;3": "heart",
      "\u2665": "heart",
      "^_^": "kiki",
      "^~^": "kiki",
      "-_-": "expressionless",
      ":-|": "squint",
      ":|": "squint",
      ">:o": "upset",
      ">:O": "upset",
      ">:-O": "upset",
      ">:-o": "upset",
      ">_<": "persevere",
      ">.<": "persevere",
      '<(")': "penguin",
      O_O: "flushface",
      o_o: "flushface",
      "0_0": "flushface",
      T_T: "crying",
      "T-T": "crying",
      ToT: "crying",
      "T.T": "crying",
      "-3-": "flushkiss",
      "'-_-": "sweating",
      "\u2019-_-": "sweating",
      "(y)": "like",
      ":like:": "like",
      "(Y)": "like",
      ":+1:": "thumbsup",
      "(n)": "dislike",
      "(N)": "dislike",
    };
    b = {
      slightsmile: "1f642",
      smile: "1f60a",
      frown: "1f61e",
      winktongue: "1f61c",
      dog: "1f436",
      poop: "1f4a9",
      transflag: "1f3f3_200d_26a7",
      tongue: "1f61b",
      slightgrin: "1f600",
      grin: "1f603",
      gasp: "1f62e",
      wink: "1f609",
      glasses: "1f60e",
      grumpy: "1f620",
      unsure: "1f615",
      cry: "1f622",
      devil: "1f608",
      angel: "1f607",
      kiss: "1f617",
      winkkiss: "1f618",
      heart: "2764",
      kiki: "1f60a",
      expressionless: "1f611",
      squint: "1f610",
      upset: "1f620",
      persevere: "1f623",
      penguin: "1f427",
      flushface: "1f633",
      crying: "1f62d",
      flushkiss: "1f61a",
      sweating: "1f613",
      like: "f0000",
      thumbsup: "1f44d",
      dislike: "1f44e",
    };
    c = {
      slightsmile: ":)",
      smile: "=)",
      frown: ":(",
      winktongue: ";-P",
      dog: ":dog:",
      poop: ":poop:",
      transflag: ":trans:",
      tongue: ":P",
      slightgrin: ":D",
      grin: "=D",
      gasp: ":o",
      wink: ";)",
      glasses: "8-)",
      grumpy: ">:(",
      unsure: ":/",
      cry: ":'(",
      devil: "3:)",
      angel: "O:)",
      kiss: ":*",
      winkkiss: ";*",
      heart: "<3",
      kiki: "^_^",
      expressionless: "-_-",
      squint: ":-|",
      upset: ">:o",
      persevere: ">_<",
      penguin: '<(")',
      flushface: "O_O",
      crying: "T_T",
      flushkiss: "-3-",
      sweating: "'-_-",
      like: "(y)",
      thumbsup: ":+1:",
      dislike: "(n)",
    };
    d =
      /(^|[\s\'\".])(:\)(?!\))|:\-\)(?!\))|:\]|=\)(?!\))|\(:|\(=|:\(|:\-\(|:\[|=\(|\)=|;P|;\-P|;\-p|;p|:dog:|:poop:|:trans:|:P|:\-P|:\-p|:p|=P|=p|=D|:\-D|:D|:o|:\-O|:O|:\-o|;\)(?!\))|;\-\)(?!\))|8\-\)(?!\))|B\-\)(?!\))|B\)(?!\))|8\)(?!\))|>:\(|>:\-\(|:\/|:\-\/|:\\|:\-\\|=\/|=\\|:\'\(|:\'\-\(|:\u2019\(|:\u2019\-\(|3:\)(?!\))|3:\-\)(?!\))|O:\)(?!\))|O:\-\)(?!\))|0:\)(?!\))|0:\-\)(?!\))|:\*|:\-\*|;\*|;\-\*|<3|&lt;3|\u2665|\^_\^|\^~\^|\-_\-|:\-\||:\||>:o|>:O|>:\-O|>:\-o|>_<|>\.<|<\(\"\)(?!\))|O_O|o_o|0_0|T_T|T\-T|ToT|T\.T|\-3\-|\'\-_\-|\u2019\-_\-|\(y\)(?!\))|:like:|\(Y\)(?!\))|:\+1:(?!\))|\(n\)(?!\))|\(N\)(?!\)))([\s\'\".,!?]|<br>|$)/;
    e =
      /(?:^|[\s\'\".])(:\)(?!\))|:\-\)(?!\))|:\]|=\)(?!\))|\(:|\(=|:\(|:\-\(|:\[|=\(|\)=|;P|;\-P|;\-p|;p|:dog:|:poop:|:trans:|:P|:\-P|:\-p|:p|=P|=p|=D|:\-D|:D|:o|:\-O|:O|:\-o|;\)(?!\))|;\-\)(?!\))|8\-\)(?!\))|B\-\)(?!\))|B\)(?!\))|8\)(?!\))|>:\(|>:\-\(|:\/|:\-\/|:\\|:\-\\|=\/|=\\|:\'\(|:\'\-\(|:\u2019\(|:\u2019\-\(|3:\)(?!\))|3:\-\)(?!\))|O:\)(?!\))|O:\-\)(?!\))|0:\)(?!\))|0:\-\)(?!\))|:\*|:\-\*|;\*|;\-\*|<3|&lt;3|\u2665|\^_\^|\^~\^|\-_\-|:\-\||:\||>:o|>:O|>:\-O|>:\-o|>_<|>\.<|<\(\"\)(?!\))|O_O|o_o|0_0|T_T|T\-T|ToT|T\.T|\-3\-|\'\-_\-|\u2019\-_\-|\(y\)(?!\))|:like:|\(Y\)(?!\))|:\+1:(?!\))|\(n\)(?!\))|\(N\)(?!\)))(?:[\s\'\".,!?]|<br>|$)/;
    f.names = a;
    f.emote2emojis = b;
    f.symbols = c;
    f.regexp = d;
    f.noncapturingRegexp = e;
  },
  66
);
__d(
  "TransformTextToDOMMixin",
  ["flattenArray", "isElementNode"],
  function (a, b, c, d, e, f) {
    var g = 3;
    a = {
      transform: function (a, c) {
        return b("flattenArray")(
          a.map(
            function (a) {
              if (!b("isElementNode")(a)) {
                var d = a,
                  e = [],
                  f = this.MAX_ITEMS || g;
                while (f--) {
                  var h = c ? [d].concat(c) : [d];
                  h = this.match.apply(this, h);
                  if (!h) break;
                  e.push(d.substring(0, h.startIndex));
                  e.push(h.element);
                  d = d.substring(h.endIndex);
                }
                d && e.push(d);
                return e;
              }
              return a;
            }.bind(this)
          )
        );
      },
      params: function () {
        for (var a = arguments.length, b = new Array(a), c = 0; c < a; c++)
          b[c] = arguments[c];
        var d = this;
        return { __params: !0, obj: d, params: b };
      },
    };
    e.exports = a;
  },
  null
);
__d(
  "DOMEmote",
  [
    "cx",
    "fbt",
    "EmojiImageURL",
    "EmoticonEmojiList",
    "EmoticonsList",
    "JSXDOM",
    "SupportedFacebookEmoji",
    "TransformTextToDOMMixin",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = {
      MAX_ITEMS: 40,
      match: function (a, b) {
        var c = b && b.getMessengerEmote;
        a = c
          ? d("EmoticonEmojiList").regexp.exec(a)
          : d("EmoticonsList").regexp.exec(a);
        if (!a || !a.length) return !1;
        var e = a[2];
        a = a.index + a[1].length;
        c = c ? d("EmoticonEmojiList").names[e] : d("EmoticonsList").emotes[e];
        return {
          startIndex: a,
          endIndex: a + e.length,
          element: j._element(e, c, b),
        };
      },
      _element: function (a, b, e) {
        e = e && e.getMessengerEmote;
        var f = e
          ? d("EmoticonEmojiList").emote2emojis[b]
          : d("EmoticonsList").emoji[b];
        if (f == null) return a;
        b = i._("\u00e9motic\u00f4ne {emoticonName}", [
          i._param("emoticonName", b),
        ]);
        return c("JSXDOM").span({ className: "_47e3 _5mfr", title: b }, [
          c("JSXDOM").img({
            "aria-hidden": !0,
            className: "img",
            height: 16,
            src: e
              ? d("EmojiImageURL").getMessengerURL(f, 16)
              : c("SupportedFacebookEmoji")[f]
              ? d("EmojiImageURL").getFBEmojiURL(f)
              : d("EmojiImageURL").getFBEmojiExtendedURL(f),
            width: 16,
          }),
          c("JSXDOM").span({ "aria-hidden": !0, className: "_7oe" }, a),
        ]);
      },
    };
    a = Object.assign(j, d("TransformTextToDOMMixin"));
    g["default"] = a;
  },
  98
);
__d(
  "transformTextToDOM",
  ["createArrayFromMixed"],
  function (a, b, c, d, e, f) {
    function a(a, c) {
      var d = [a];
      c = b("createArrayFromMixed")(c);
      c.forEach(function (a) {
        var b,
          c = a;
        a.__params && ((b = a.params), (c = a.obj));
        d = c.transform(d, b);
      });
      return d;
    }
    e.exports = a;
  },
  null
);
__d(
  "emojiAndEmote",
  ["DOMEmoji", "DOMEmote", "FbtResultBase", "transformTextToDOM"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = function (a, c) {
      if (a instanceof b("FbtResultBase")) return [a];
      var d = c ? { isSupportedEmoji: c.isSupportedEmoji } : null;
      c = c ? { getMessengerEmote: c.getMessengerEmote } : null;
      d = [b("DOMEmoji").params(d), b("DOMEmote").params(c)];
      return b("transformTextToDOM")(a, d);
    };
    e.exports = a;
  },
  null
);
__d(
  "CompactTypeaheadRenderer",
  [
    "BadgeHelper",
    "DOM",
    "TypeaheadFacepile",
    "emojiAndEmote",
    "isSocialPlugin",
  ],
  function (a, b, c, d, e, f) {
    function a(a, c) {
      c = [];
      if (a.xhp) return b("DOM").create("li", { className: "raw" }, a.xhp);
      var d = a.photos || a.photo;
      d &&
        (d instanceof Array
          ? (d = b("TypeaheadFacepile").render(d))
          : (d = b("DOM").create("img", { alt: "", src: d })),
        c.push(d));
      d = a.iconClass;
      if (d) {
        d = b("DOM").create("span", { className: d });
        c.push(d);
      }
      d = a.debug_info;
      d && c.push(b("DOM").create("span", { className: "debugInfo" }, d));
      if (a.text) {
        d = [a.text];
        b("isSocialPlugin")() || (d = b("emojiAndEmote")(a.text));
        a.is_verified
          ? d.push(b("BadgeHelper").renderBadge("xsmall", "verified"))
          : a.is_trending_hashtag &&
            d.push(b("BadgeHelper").renderBadge("xsmall", "trending"));
        c.push(b("DOM").create("span", { className: "text" }, d));
      }
      d = a.subtext;
      var e = a.category;
      if (d || e) {
        var f = [];
        d && f.push(d);
        d && e && f.push(" \xb7 ");
        e && f.push(e);
        c.push(b("DOM").create("span", { className: "subtext" }, f));
      }
      d = b("DOM").create("li", { className: a.type || "" }, c);
      a.text &&
        (d.setAttribute("title", a.text), d.setAttribute("aria-label", a.text));
      return d;
    }
    a.className = "compact";
    e.exports = a;
  },
  null
);
