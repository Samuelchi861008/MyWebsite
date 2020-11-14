/*
	Strata by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

    hidePage();

    var settings = {

        // Parallax background effect?
        parallax: true,

        // Parallax factor (lower = more intense, higher = less intense).
        parallaxFactor: 20

    };

    skel.breakpoints({
        xlarge: '(max-width: 1800px)',
        large: '(max-width: 1280px)',
        medium: '(max-width: 980px)',
        small: '(max-width: 736px)',
        xsmall: '(max-width: 480px)'
    });

    $(function() {

        $(window).scroll(function() {
            if ($(window).scrollTop() > 0) {
                $('.toTop').show();
            } else {
                $('.toTop').hide();
            }
        });

        var $window = $(window),
            $body = $('body'),
            $header = $('#header');

        // Touch?
        if (skel.vars.mobile) {

            // Turn on touch mode.
            $body.addClass('is-touch');

            // Height fix (mostly for iOS).
            window.setTimeout(function() {
                $window.scrollTop($window.scrollTop() + 1);
            }, 0);

        }

        // Fix: Placeholder polyfill.
        $('form').placeholder();

        // Prioritize "important" elements on medium.
        skel.on('+medium -medium', function() {
            $.prioritize(
                '.important\\28 medium\\29',
                skel.breakpoint('medium').active
            );
        });

        // Header.

        // Parallax background.

        // Disable parallax on IE (smooth scrolling is jerky), and on mobile platforms (= better performance).
        if (skel.vars.browser == 'ie' ||
            skel.vars.mobile)
            settings.parallax = false;

        if (settings.parallax) {

            skel.on('change', function() {

                if (skel.breakpoint('medium').active) {

                    $window.off('scroll.strata_parallax');
                    $header.css('background-position', 'top left, center center');

                } else {

                    $header.css('background-position', 'left 0px');

                    $window.on('scroll.strata_parallax', function() {
                        $header.css('background-position', 'left ' + (-1 * (parseInt($window.scrollTop()) / settings.parallaxFactor)) + 'px');
                    });

                }

            });

        }

        // Main Sections: Two.

        // Lightbox gallery.
        $window.on('load', function() {

            $('#two').poptrox({
                caption: function($a) { return $a.next('h3').text(); },
                overlayColor: '#2c2c2c',
                overlayOpacity: 0.85,
                popupCloserText: '',
                popupLoaderText: '',
                selector: '.work-item a.image',
                usePopupCaption: true,
                usePopupDefaultStyling: false,
                usePopupEasyClose: false,
                usePopupNav: true,
                windowMargin: (skel.breakpoint('small').active ? 0 : 50)
            });

            showPage();
        });
    });

})(jQuery);

function backToTop() {
    if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
        window.setTimeout(function() {
            window.scrollTo(0, 0);
        }, 0);
    } else {
        $("html, body").stop().animate({
            scrollTop: 0
        }, "slow");
    }
    return false;
}

/* loader Start */
function hidePage() {
    document.getElementById("loader").style.display = "block";
    document.getElementById("content").style.display = "none";
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("content").style.display = "block";
}
/* loader End */