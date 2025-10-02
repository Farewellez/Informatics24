$(document).ready(function() {
  $("a[href^='#']").on('click', function(e) {
    e.preventDefault();
    let target = $(this.getAttribute("href"));
    if (target.length) {
      $("html, body").animate({
        scrollTop: target.offset().top
      }, 800); // 800ms smooth scroll
    }
  });
});