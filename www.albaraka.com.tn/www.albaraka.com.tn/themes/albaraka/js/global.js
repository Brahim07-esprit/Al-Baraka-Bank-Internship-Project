jQuery(document).ready(function () {
  /**** Scroll header ********/
  jQuery(window).scroll(function () {
    var sticky = jQuery(".menus-top"),
      scroll = jQuery(window).scrollTop();

    if (scroll >= 40) {
      sticky.addClass("fixed");
    } else {
      sticky.removeClass("fixed");
    }
  });

  jQuery(
    ".particuliers .we-mega-menu-ul > .we-mega-menu-li > .ul-list-menu > .we-mega-menu-submenu-inner"
  ).addClass("container");

  jQuery.validator.addMethod(
    "lettersonly",
    function (value, element) {
      return this.optional(element) || /^[a-zA-Z\s]+$/i.test(value);
    },
    "Ce champ ne doit pas contenir de caractères spéciaux ni de chiffres."
  );

  jQuery.validator.addMethod(
    "exceptbalise",
    function (value, element) {
      return this.optional(element) || /^[^<>/@]+$/i.test(value);
    },
    "Ce champ ne doit pas contenir de caractères spéciaux."
  );

  jQuery(".right-cours").css(
    "top",
    jQuery(".wrapper-form-cours-change").innerHeight()
  );
  jQuery("#views-exposed-form-faq-page-1").validate({
    rules: {
      body_value: {
        minlength: 3,
      },
    },
  });

  jQuery("#views-exposed-form-documents-utiles-page-1").validate({
    rules: {
      title: {
        minlength: 3,
      },
    },
  });

  jQuery("#frm_convertisseur").validate({
    rules: {
      montant: {
        required: true,
      },
    },
  });

  jQuery(".form-contact").validate({
    rules: {
      tel_: {
        number: true,
        minlength: 8,
      },
      cin: {
        minlength: 8,
        maxlength: 8,
      },
      institution_: {
        exceptbalise: true,
      },
      pays_: {
        lettersonly: true,
      },
      message: {
        exceptbalise: true,
      },
    },
    submitHandler: function (form) {
      if (grecaptcha.getResponse()) {
        form.submit();
      } else {
        jQuery(".g-recaptcha").append(
          '<label class="error " >Le CAPTCHA est incorrecte.</label>'
        );
      }
    },
  });

  // var pathname = window.location.pathname;
  // jQuery('.menu_espace .menu--main.navbar-nav li a').removeClass("is-active");
  // jQuery('.menu_espace .menu--main.navbar-nav li a[href="'+pathname+'"]').addClass('is-active');

  if (window.location.href.indexOf("/entreprises/") > -1) {
    jQuery(".menu_espace .menu--main.navbar-nav li a").removeClass("is-active");
    jQuery(".main-link-ent").addClass("is-active");
  } else if (
    window.location.href.indexOf("/particuliers/") > -1 ||
    window.location.href.indexOf("/devenir-client") > -1
  ) {
    jQuery(".menu_espace .menu--main.navbar-nav li a").removeClass("is-active");
    jQuery(".main-link-part").addClass("is-active");
  } else if (window.location.href.indexOf("/professionnels/") > -1) {
    jQuery(".menu_espace .menu--main.navbar-nav li a").removeClass("is-active");
    jQuery(".main-link-pro").addClass("is-active");
  }

  //Check to see if the window is top if not then display button
  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 100) {
      jQuery(".scroll-to-top-btn").fadeIn();
    } else {
      jQuery(".scroll-to-top-btn").fadeOut();
    }
  });

  //Click event to scroll to top
  jQuery(".scroll-to-top-btn").click(function () {
    jQuery("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });

  jQuery(".Tabs_top .tabs-link a[href^='#']").on("click", function () {
    var heightMenu = jQuery("#fixed-menu").outerHeight();
    var scrollHeight = jQuery(jQuery(this).attr("href")).offset().top;
    jQuery("html, body").animate(
      {
        scrollTop: scrollHeight - 350,
      },
      1000
    );
    return false;
  });

  jQuery(".gallery .owl-carousel").owlCarousel({
    items: 3,
    nav: false,
    rtl: true,
    loop: false,
    autoplay: true,
    dots: false,
    margin: 20,
    autoheight: true,
    responsive: {
      0: {
        items: 1,
      },
      380: {
        items: 2,
      },
      768: {
        items: 3,
      },
    },
  });

  jQuery(".gallery .field--item a").magnificPopup({
    type: "image",
    gallery: {
      // options for gallery
      enabled: true,
    },
  });

  jQuery("#search-block-form").validate({
    rules: {
      keys: {
        required: true,
        minlength: 3,
      },
    },
  });
  jQuery("#views-exposed-form-actualites-page-1").validate({
    rules: {
      title: {
        minlength: 3,
      },
    },
  });

  jQuery("ul.nav li.dropdown").hover(
    function () {
      jQuery(this).find(".dropdown-menu").stop(true, true).fadeIn(500);
    },
    function () {
      jQuery(this).find(".dropdown-menu").stop(true, true).fadeOut(500);
    }
  );

  jQuery(".right_box").click(function () {
    var bloc2 = jQuery(this).prev(".main_box").children(".content_txt");
    if (bloc2.is(":hidden")) {
      bloc2.slideDown("fast");
      jQuery(this).addClass("active");
    } else {
      jQuery(this).removeClass("active");
      bloc2.slideUp("fast");
    }
  });

  jQuery("#search-block-form .control-label").click(function () {
    var bloc_search = jQuery(this).next(".input-group");
    if (bloc_search.is(":hidden")) {
      bloc_search.show("fast");
      jQuery(this).addClass("active");
      jQuery("#fixed-menu").css("z-index", "99");
    } else {
      jQuery(this).removeClass("active");
      bloc_search.hide("fast");
      jQuery("#fixed-menu").css("z-index", "9999");
    }
  });

  jQuery(".btn-fixed-open").click(function () {
    var bloc_fixed = jQuery(this).next(".fixed-menu");
    jQuery(".fixed_Blc_rs .btn_close").show();
    if (bloc_fixed.is(":hidden")) {
      bloc_fixed.show("fast");
      jQuery(this).addClass("active");
      jQuery(this).hide("fast");
    } else {
      jQuery(this).removeClass("active");
      bloc_fixed.hide("fast");
    }
  });
  jQuery(".fixed_Blc_rs .btn_close").click(function () {
    jQuery(this).hide("fast");
    jQuery(".fixed-menu").hide("fast");
    jQuery(".btn-fixed-open").show("fast");
  });

  jQuery(".mobile-picto").click(function () {
    var bloc_top_menu = jQuery(".menu_top");
    if (bloc_top_menu.is(":hidden")) {
      bloc_top_menu.show("fast");
      jQuery(this).addClass("active");
      jQuery("#fixed-menu").css("z-index", "99");
    } else {
      jQuery(this).removeClass("active");
      bloc_top_menu.hide("fast");
      jQuery("#fixed-menu").css("z-index", "9999");
    }
  });

  jQuery(".button.language-link").click(function () {
    var lang_menu = jQuery(".lang-change .dropdown-menu");
    lang_menu.toggle("fast");
  });

  jQuery(".owl-tow-item").owlCarousel({
    items: 2,
    nav: false,
    margin: 30,
    loop: false,
    dots: false,
    autoheight: false,
    responsive: {
      0: {
        items: 1,
      },
      380: {
        items: 1,
      },
      768: {
        items: 1,
      },

      990: {
        items: 2,
      },
    },
  });

  jQuery(".carousel-pdt").owlCarousel({
    items: 4,
    nav: false,
    margin: 30,
    loop: false,
    rtl: true,
    dots: false,
    autoheight: false,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 1,
      },
      768: {
        items: 3,
      },

      990: {
        items: 4,
      },
    },
  });

  jQuery(".carousel-banniere").owlCarousel({
    items: 1,
    nav: false,
    loop: true,
    dots: true,
    autoplay: false,
    autoheight: false,
    rtl: true,
    responsive: {
      0: {
        dots: false,
      },

      1024: {
        dots: true,
      },
    },
  });
  jQuery(".footer-news-slide").owlCarousel({
    items: 3,
    nav: false,
    margin: 30,
    loop: false,
    dots: false,
    autoheight: false,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
      768: {
        items: 3,
      },
    },
  });

  jQuery(".menu--particuliers").addClass("container");

  jQuery(".liste-content-carte li").eq(0).show();
  jQuery(".liste-name-carte li").eq(0).addClass("active");
  jQuery(".liste-name-carte li").click(function () {
    var index = jQuery(".liste-name-carte li").index(this);
    if (jQuery(".liste-content-carte li ").eq(index).is(":hidden")) {
      jQuery(".liste-name-carte li").removeClass("active");
      jQuery(".liste-content-carte li").hide();
      jQuery(".liste-content-carte li").eq(index).show();
      jQuery(".liste-name-carte li").eq(index).addClass("active");
    } else {
    }
  });

  var xbody = jQuery("body").offset();
  var x = jQuery(".navbar-nav").offset();
  var all_calc_left = x.left - xbody.left;
  jQuery(".navbar-default .we-mega-menu-ul").css("padding-left", all_calc_left);
});

window.onscroll = function () {
  myFunction();
};

// Get the navbar
var navbar = document.getElementById("fixed-menu");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

var resizeTimer;
jQuery(window).on("resize", function (e) {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function () {
    if (jQuery(".right-cours").length) {
      jQuery(".right-cours").css(
        "top",
        jQuery(".wrapper-form-cours-change").innerHeight()
      );
    }
  }, 300);

  var xbody = jQuery("body").offset();
  var x = jQuery(".navbar-nav").offset();
  var all_calc_left = x.left - xbody.left;
  jQuery(".navbar-default .we-mega-menu-ul").css("padding-left", all_calc_left);
});
