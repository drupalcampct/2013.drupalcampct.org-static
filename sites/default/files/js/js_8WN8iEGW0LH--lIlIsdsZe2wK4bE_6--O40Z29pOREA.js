(function($) {
    $(document).ready(function() {
      $(".menu-toggle").click(function() {
        $(".menu-toggle").toggleClass("collapse");
        $(".nav").toggle('slow');
      });
    });
})(jQuery);;
