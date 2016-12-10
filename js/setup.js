$(document).ready(function () {
    // include the static content
    $(".static-content").load("static.html");

    // Find all YouTube videos
    var $allVideos = $("iframe[src^='https://www.youtube.com']"),

            // The element that is fluid width
            $fluidEl = $(".youtube-vid");

    // Figure out and save aspect ratio for each video
    $allVideos.each(function () {

        $(this)
                .data('aspectRatio', this.height / this.width)

                // and remove the hard coded width/height
                .removeAttr('height')
                .removeAttr('width');
    });

    // When the window is resized
    $(window).resize(function () {

        //prevent the video from being wider than 850 px
        var newWidth = ($fluidEl.width() < 854) ? $fluidEl.width() : 854;
        console.log("Embedded video width: " + $fluidEl.width() + "px");

        // Resize all videos according to their own aspect ratio
        $allVideos.each(function () {

            var $el = $(this);
            $el
                    .width(newWidth)
                    .height(newWidth * $el.data('aspectRatio'));

        });

        // Kick off one resize to fix all videos on page load
    }).resize();

    // initialize the carousels
    $('.carousel.carousel-slider').carousel({full_width: true, indicators: true});
});