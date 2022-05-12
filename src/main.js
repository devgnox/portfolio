$(document).ready(function () {
  $(".sidebar__list__link").hover(
    function () {
      var title = $(this).attr("title");
      $(this).data("tipText", title).removeAttr("title");
      $('<p class="tooltip"></p>')
        .text(title)
        .appendTo($(this).before())
        .fadeIn("slow");
    },
    function () {
      $(this).attr("title", $(this).data("tipText"));
      $(".tooltip").remove();
    }
  );
  $("#mobile-btn").css("visibility", "hidden").fadeIn();

  $("#mobile-btn").click(function () {
    $(".mobile-nav-btn__icon").toggle("300");
    $(".mobile-nav").slideToggle();
  });

  $(".mobile-nav__list__link").click(function (e) {
    e.preventDefault();
    $(".mobile-nav").slideToggle();
  });

  $(".hero__subtext--2").css("visibility", "hidden");
  const p2 = $(".hero__subtext--2");
  var texteffect2 = new typeEffect(p2, "|", 800);

  $(function () {
    var position = $("#projects").position().top - 160;
    $(window).scroll(function () {
      if ($(window).scrollTop() > position) {
        if (window.innerWidth >= 848) {
          $(".sidebar").css("visibility", "visible").fadeIn();
        } else {
          $("#mobile-btn").css("visibility", "visible").fadeIn();
        }
      } else {
        $(".sidebar").css("visibility", "hidden").fadeIn();
        $("#mobile-btn").css("visibility", "hidden").fadeIn();
      }
    });
  });
  //show projects according to category
  $(function () {
    $(".projects__nav__link").click(function (e) {
      e.preventDefault();
      var id = $(this).attr("id");
      if (id != "all") {
        $(".project").fadeIn(2);
        $(".project").each(function () {
          if (id === "webdes") {
            var find = $(this).find("span[name=webdes]");
          } else {
            var find = $(this).find(".project__category--" + id);
          }
          if (find.html() === undefined) {
            $(this).fadeOut("slow");
          }
        });
      } else {
        $(".project").fadeIn();
      }
    });
  });
  //sooth scroll
  $(document).on("click", 'a[href^="#"]', function (event) {
    event.preventDefault();
    if ($(this).attr("href") === "#home") {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        500
      );
    } else {
      $("html, body").animate(
        {
          scrollTop: $($.attr(this, "href")).offset().top,
        },
        500
      );
    }
  });
});
function typeEffect(str, cursor, timeout) {
  setTimeout(function () {
    str.css("display", "flex");
    str.css("visibility", "visible");
    var text = str.html(),
      i = 0,
      isTag,
      cursorContent = cursor,
      timer;
    (function type() {
      output = text.slice(0, ++i);
      if (output === text) {
        i = 0;
        blink();
        return;
      }
      str.html(output + " " + cursorContent);
      timer = setTimeout(type, 50);
    })();
    function blink() {
      i++;
      const foo = output + " " + (i % 2 ? cursorContent : "");
      str.html(foo);
      if (i < 5) timer = setTimeout(blink, 600);
      else fade();
    }
    function fade() {
      str.html(text);
    }
  }, timeout);
}
