$(function(){
	// Sidebar positioning on scroll

  $(window).scroll(function() {
      var sidebar = $('#site-content-right');
      var scroll_trigger = 180;

      var window_width = $(window).width();
      var main_width = $('#container').width();
      var sidebar_right = (window_width - main_width)/2;
      
      if ($(this).scrollTop() > scroll_trigger) {
        sidebar.addClass("fixed");
        sidebar.css('top', '20px');
        sidebar.css('right', parseInt(sidebar_right + 1));
      } else {
        sidebar.removeClass("fixed");
        sidebar.css('top', 'auto');
        sidebar.css('right', 'auto');
      }
  });
});