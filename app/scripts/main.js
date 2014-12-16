$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

    if ($('#countdown_dashboard').length > 0) {
        $('#countdown_dashboard').countDown({
            targetDate: {'day': 24, 'month': 1, 'year': 2015, 'hour': 15, 'min': 00, 'sec': 0},
            onComplete: function() {
                $('#main-text').replaceWith('<h2 class="#main-text">WE ARE FINISHED!</h2>');
                $('#second-text').replaceWith('<h3 class="#second-text">Please wait while we finish updating the site.</h3>');
            }
        });
    }

    if ($('#Gmap').length > 0) {
        $("#Gmap").gmap3({
            map: {
                options: {
                    maxZoom: 16,
                    zoomControl:false,
                    streetViewControl:false
                }
            },
            marker:{
                address: "18 Seaboard Ave, Raleigh, NC 27604",
                options: {
                    icon: new google.maps.MarkerImage("images/marker.png", new google.maps.Size(32, 46, "px", "px"))
                }
            }
        }, "autofit");
    }
});
