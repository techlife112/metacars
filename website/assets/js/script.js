AOS.init();
var countDownDate = new Date("May 5, 2022 17:55:00 UTC").getTime(),
  x = setInterval(function () {
    var e = new Date().getTime(),
      t = countDownDate - e,
      n = Math.floor(t / 864e5),
      r = Math.floor((t % 864e5) / 36e5),
      o = Math.floor((t % 36e5) / 6e4),
      i = Math.floor((t % 6e4) / 1e3);
    n < 10 && (n = "0" + n),
      r < 10 && (r = "0" + r),
      o < 10 && (o = "0" + o),
      i < 10 && (i = "0" + i),
      (document.getElementById("days").innerHTML = n),
      (document.getElementById("hours").innerHTML = r),
      (document.getElementById("minutes").innerHTML = o),
      (document.getElementById("seconds").innerHTML = i),
      t < 0 &&
        (clearInterval(x),
        (document.getElementById("demo").innerHTML = "EXPIRED"));
  }, 1e3);
document.querySelectorAll('a[href^="#"]').forEach((e) => {
  e.addEventListener("click", function (e) {
    e.preventDefault(),
      document
        .querySelector(this.getAttribute("href"))
        .scrollIntoView({ behavior: "smooth" });
  });
}),
  $(".bxslider").bxSlider({
    mode: "horizontal",
    infiniteLoop: !0,
    auto: !0,
    autoStart: !1,
    autoDirection: "next",
    autoHover: !1,
    pause: 3e3,
    autoControls: !1,
    pager: !0,
    pagerType: "full",
    controls: !1,
    captions: !1,
    speed: 500,
  }),
  (function (e) {
    e.fn.endlessScroll = function (t) {
      t = e.extend(
        {},
        {
          bottomPixels: 50,
          fireOnce: !0,
          fireDelay: 150,
          loader: "<br />Loading...<br />",
          data: "",
          insertAfter: "div:last",
          resetCounter: function () {
            return !1;
          },
          callback: function () {
            return !0;
          },
          ceaseFire: function () {
            return !1;
          },
        },
        t
      );
      var n = !0,
        r = !1,
        o = 0;
      !0 === t.ceaseFire.apply(this) && (n = !1),
        !0 === n &&
          e(this).scroll(function () {
            if (!0 !== t.ceaseFire.apply(this)) {
              if (this == document || this == window)
                var i =
                  e(document).height() - e(window).height() <=
                  e(window).scrollTop() + t.bottomPixels;
              else {
                var l = e(".endless_scroll_inner_wrap", this);
                0 == l.length &&
                  (l = e(this)
                    .wrapInner('<div class="endless_scroll_inner_wrap" />')
                    .find(".endless_scroll_inner_wrap"));
                i =
                  l.length > 0 &&
                  l.height() - e(this).height() <=
                    e(this).scrollTop() + t.bottomPixels;
              }
              i &&
                (0 == t.fireOnce || (1 == t.fireOnce && 1 != r)) &&
                (!0 === t.resetCounter.apply(this) && (o = 0),
                (r = !0),
                o++,
                e(t.insertAfter).after(
                  '<div id="endless_scroll_loader">' + t.loader + "</div>"
                ),
                (data =
                  "function" == typeof t.data
                    ? t.data.apply(this, [o])
                    : t.data),
                !1 !== data &&
                  (e(t.insertAfter).after(
                    '<div id="endless_scroll_data">' + data + "</div>"
                  ),
                  e("div#endless_scroll_data").hide().fadeIn(),
                  e("div#endless_scroll_data").removeAttr("id"),
                  t.callback.apply(this, [o]),
                  !1 !== t.fireDelay || 0 !== t.fireDelay
                    ? (e("body").after(
                        '<div id="endless_scroll_marker"></div>'
                      ),
                      e("div#endless_scroll_marker").fadeTo(
                        t.fireDelay,
                        1,
                        function () {
                          e(this).remove(), (r = !1);
                        }
                      ))
                    : (r = !1)),
                e("div#endless_scroll_loader").remove());
            } else n = !1;
          });
    };
  })(jQuery),
  $(document).ready(function () {
    $(document).endlessScroll({
      inflowPixels: 300,
      callback: function () {
        var e = $("#images li:nth-last-child(5)").clone();
        $("#images").append(e);
      },
    });
  });

  //Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  
}