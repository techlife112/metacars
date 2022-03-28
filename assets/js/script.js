;(function($) {
    $(function() {
      $('nav ul li > a:not(:only-child)').click(function(e) {
        $(this)
          .siblings('.nav-dropdown')
          .slideToggle()
        $('.nav-dropdown')
          .not($(this).siblings())
          .hide()
        e.stopPropagation()
      })
      $('html').click(function() {
        $('.nav-dropdown').hide()
      })
      // Toggle open and close nav styles on click
      $('#nav-toggle').click(function() {
        $('nav ul').slideToggle();
      });
      $('#nav-toggle').on('click', function() {
        this.classList.toggle('active')
      })
    })
  })(jQuery)

  
  $('.bxslider').bxSlider({
    mode: 'horizontal',
    infiniteLoop: true,
    auto: true,
    autoStart: false,
    autoDirection: 'next',
    autoHover: false,
    pause: 3000,
    autoControls: false,
    pager: true,
    pagerType: 'full',
    controls: false,
    captions: false,
    speed: 500
    });