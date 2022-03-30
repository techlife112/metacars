(function ($) {
  $(function () {
    $("nav ul li > a:not(:only-child)").click(function (e) {
      $(this).siblings(".nav-dropdown").slideToggle();
      $(".nav-dropdown").not($(this).siblings()).hide();
      e.stopPropagation();
    });
    $("html").click(function () {
      $(".nav-dropdown").hide();
    });
    // Toggle open and close nav styles on click
    $("#nav-toggle").click(function () {
      $("nav ul").slideToggle();
    });
    $("#nav-toggle").on("click", function () {
      this.classList.toggle("active");
    });
  });
})(jQuery);

$(".bxslider").bxSlider({
  mode: "horizontal",
  infiniteLoop: true,
  auto: true,
  autoStart: false,
  autoDirection: "next",
  autoHover: false,
  pause: 3000,
  autoControls: false,
  pager: true,
  pagerType: "full",
  controls: false,
  captions: false,
  speed: 500,
});

// Set the date we're counting down to
var countDownDate = new Date("April 5, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var day = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var second = Math.floor((distance % (1000 * 60)) / 1000);

  

  // Output the result in an element with id="demo"
  document.getElementById("days").innerHTML = day;
  document.getElementById("hours").innerHTML = hour;
  document.getElementById("minutes").innerHTML = minute;
  document.getElementById("seconds").innerHTML = second;

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
