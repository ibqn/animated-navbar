(function() {
  $(document).ready(function() {
    // Your code here.
  });

  $(window).on("scroll", function() {
    console.log("scroll");
    if ($(window).scrollTop()) {
      $("nav").addClass("black");
    } else {
      $("nav").removeClass("black");
    }
  });
})();
