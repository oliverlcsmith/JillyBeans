$(document).ready(function() {
  let scroll_start = 0;
  let startchange = $(".navbar-default");
  let offset = startchange.offset();

  $(document).scroll(function() {
    scroll_start = $(this).scrollTop();
    if (scroll_start > offset.top) {
      $(".navbar-default").css("background-color", "#df9b91a4");
    } else {
      $(".navbar-default").css("background-color", "transparent");
    }
  });
});
