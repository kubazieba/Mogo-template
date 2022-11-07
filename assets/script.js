$(document).ready(function() {
    /* STICKY NAVBAR SCRIPT */
    stickyNav();
    $(window).scroll(function() {
        var top = $(document).scrollTop();
        if(top > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
    })

    /* OPEN MENU MOBILE SCRIPT */
    $('.menu-mobile').on('click', function() {
        $('.menu').toggleClass('menu-show');
        $('.menu-mobile i').toggleClass('menu-show');
        $('body').toggleClass('disabled-scroll');
        $('.navbar .menu li a').on('click', function() {
            $('.menu-mobile').trigger('click');
        });
    });

    /* SHOW SOCIAL MEDIA BAR */
    $('.team-image__matthew').on('mouseover', function() {
        $('.team-image__matthew .social-media').css("display", "flex");
    }).mouseleave(function() {
        $('.team-image__matthew .social-media').css("display", "none");
    });
    
    $('.team-image__christopher').on('mouseover', function() {
        $('.team-image__christopher .social-media').css("display", "flex");
    }).mouseleave(function() {
        $('.team-image__christopher .social-media').css("display", "none");
    });

    $('.team-image__michael').on('mouseover', function() {
        $('.team-image__michael .social-media').css("display", "flex");
    }).mouseleave(function() {
        $('.team-image__michael .social-media').css("display", "none");
    });
});

function stickyNav() {
    var top = $(document).scrollTop();
    if(top > 20) {
        $('.navbar').addClass("sticky");
    } else {
        $('.navbar').removeClass("sticky");
    }
}