$(function () {
  var wow = new WOW({
    boxClass: "wow",
    animateClass: "animated",
    offset: 100,
    mobile: false,
    live: true,
    callback: function (box) {},
    scrollContainer: null,
  });
  wow.init();
  var win_h = $(window).height(),
    win_w = $(window).width();
  if (win_w < 401) {
    $("table.flag-responsive").addClass("table-responsive");
  } else {
    if ($("table.flag-responsive").hasClass("table-responsive")) {
      $("table.flag-responsive").removeClass("table-responsive");
    }
  }
  $(window).scroll(function (e) {
    e.preventDefault();
    if ($(this).scrollTop() >= win_h + win_h * 0.1) {
      $(".scroll-top").animate({ bottom: "30px" }, 500);
    } else {
      $(".scroll-top").stop(true).animate({ bottom: "-70px" }, 500);
    }
  });
  $("#js-scroll-top").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 900);
  });
  $(".navbar-nav a:not(.dropdown-toggle)").click(function () {
    $("#navbarsExampleDefault").collapse("hide");
  });
  $("a.flag-anchor").on("click", function (e) {
    e.preventDefault();
    if ($("#navbarNavAltMarkup").hasClass("show")) {
      $("#navbarNavAltMarkup").collapse("hide");
    }
    var heightMenu = $("header").height(),
      currentBlock = $(this).attr("href"),
      currentBlockOffset = $(currentBlock).offset().top;
    $("html, body").animate(
      { scrollTop: currentBlockOffset - heightMenu },
      900
    );
  });
  $("a.flag-link").on("click", function (e) {
    if ($("#navbarNavAltMarkup").hasClass("show")) {
      $("#navbarNavAltMarkup").collapse("hide");
    }
  });
  $("button.btn.js-goto-whywe").on("click", function (e) {
    e.preventDefault();
    var whyweLayerBlockOffset = $("#why-choose-layer").offset().top,
      heightMenu = $(".sticky-top").height();
    $("html, body").animate(
      { scrollTop: whyweLayerBlockOffset - heightMenu },
      600
    );
  });
  $("button.btn.js-goto-rate").on("click", function (e) {
    e.preventDefault();
    var whyweLayerBlockOffset = $("#rate-layer").offset().top,
      heightMenu = $(".sticky-top").height();
    $("html, body").animate(
      { scrollTop: whyweLayerBlockOffset - heightMenu },
      800
    );
  });
  $("button.btn.js-goto-register").on("click", function (e) {
    e.preventDefault();
    var formLayerBlockOffset = $("#form-layer").offset().top,
      heightMenu = $(".sticky-top").height();
    $("html, body").animate(
      { scrollTop: formLayerBlockOffset - heightMenu },
      600
    );
  });
  $("#rate-layer .inner-box").hover(
    function () {
      $(this)
        .find(".gh-s")
        .css("background-color", "#ffb41b")
        .addClass("classTransition");
      $(this)
        .find("p.percent")
        .css({ color: "#000000" })
        .addClass("classTransition");
    },
    function () {
      $(this).find(".gh-s").css("background-color", "#f7f7f7");
      $(this).find("p.percent").css("color", "#ffb41b");
    }
  );
  $(".collapse")
    .on("shown.bs.collapse", function () {
      $(this)
        .prev()
        .find(".fa")
        .removeClass("fa-angle-right")
        .addClass("fa-angle-down");
      $(this)
        .prev()
        .find("a")
        .css({
          color: "#23527c",
          borderBottom: "1px solid #ffb41b",
          fontWeight: "700",
        });
    })
    .on("hidden.bs.collapse", function () {
      $(this)
        .prev()
        .find(".fa")
        .removeClass("fa-angle-down")
        .addClass("fa-angle-right");
      $(this)
        .prev()
        .find("a")
        .css({ color: "#000000", borderBottom: "none", fontWeight: "500" });
    });
  $("a.go").on("click", function (e) {
    e.preventDefault();
    var idLink = $(this).attr("href");
    if (idLink === "#form-sign1") {
      $("form#signup").slideToggle(500);
      $("form#login").slideToggle(500);
    } else if (idLink === "#form-change-pass") {
      $("form#login").slideToggle(500);
      $("form#forgot").slideToggle(500);
    } else {
      if (idLink === "#form-sign2") {
        $("form#forgot").slideToggle(500);
        $("form#login").slideToggle(500);
      } else {
        $("form#forgot").slideToggle(500);
        $("form#signup").slideToggle(500);
      }
    }
  });
  $("a.goLogin").on("click", function (e) {
    $("form#signup").slideUp(500);
    $("form#login").slideDown(500);
    $("form#forgot").slideUp(500);
  });
  $("a.goRegister").on("click", function (e) {
    $("form#login").slideUp(500);
    $("form#signup").slideDown(500);
    $("form#forgot").slideUp(500);
  });
  $("#cabinet .money-box .mining-block").hover(
    function () {
      $(this).find(".hov").fadeIn(500);
    },
    function () {
      $(this).find(".hov").fadeOut(400);
    }
  );
  $("#copyLink").on("click", function (e) {
    e.preventDefault();
    $(this).prev().find("input.form-control").select();
    document.execCommand("copy");
  });
});
