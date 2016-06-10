//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1200, 'easeInOutExpo');
        event.preventDefault();
    });
});

$('#navbar').affix({
      offset: {
        top: function() { return $('#topcontainer').height(); }
    }
});

$('#navbar').on( 'affixed-top.bs.affix', function () {
    $("#topBlock").addClass("hidden");
});

$('#navbar').on('affix.bs.affix', function () {
    $("#topBlock").removeClass("hidden");
});
