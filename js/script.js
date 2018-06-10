

/* Start loader */


/* End Loader */


/*  Start Search functions */


$(document).ready(function () {
    $('.search').click(function () {
        $('.search-container').fadeIn();
    });

    $(".hide-search").on('click', function () {
        $('.search-container').fadeOut();
    });

});

var searchInput = document.getElementById('search-input');

searchInput.onfocus = function () {

    'use strict';
    this.removeAttribute('placeholder');
};

searchInput.onblur = function () {

    'use strict';
    this.setAttribute('placeholder', 'Search here....');
};

/*  End Search functions */




/* Start Beside nav functions */



$(document).ready(function () {

    $('.slider').fadeIn(1000);

    $('.beside-nav-bttn').click(function () {
        $(this).css('background', '#CCC');
        $('.beside-nav').show();
        $('.beside-nav-sec1').hide();
    });

    $('.hide-beside').click(function () {
        $('.beside-nav-bttn').css('background', 'none');
        $('.beside-nav').hide();
        $('.beside-nav-sec1').show();
    });
});


/* End Beside nav functions  */







/* Start Navbar of slider functions */

var sliderNav = document.getElementById('slider-nav'),
    mainNav = document.getElementById('main-nav'),
    ourMission = document.getElementById('our-mission');

window.onscroll = function () {
    
    'use strict';

    console.log(pageYOffset);

    if (pageYOffset >= 100) {
        mainNav.setAttribute('style', 'display:none');
        sliderNav.setAttribute('style', 'position:fixed; left:0; right:0; top:0; background-color:#1490d7;box-shadow:0 0 5px 0.5px #333;');
    }
    
    else {
        mainNav.setAttribute('style', 'display:block');
        sliderNav.setAttribute('style', 'position:static');
    }
};



/* End Navbar of Slider functions */





/* Start Showing our mission during scrolling */
var ourMission = document.getElementById('our-mission');

function missionScrolling() {
    'use strict';

    if (pageYOffset >= ourMission.offsetTop - 200) {
        ourMission.setAttribute('style', 'opacity:1;margin-left:0;');
    }
}

window.addEventListener('scroll', missionScrolling);



/* End Showing our mission during scrolling */




/* START What we do functions */

var weDo = document.getElementById('we-do');

function weDoScroll() {

    if (pageYOffset >= weDo.offsetTop - 200) {
        weDo.setAttribute('style', 'opacity:1;margin-left:0;');
    }
}

window.addEventListener('scroll', weDoScroll)

$(document).ready(function () {

    'use strict';


    $('.we-do .we-do-one').mouseenter(function () {
        $('.we-do-one h3').css('color', '#1490d7');
    });

    $('.we-do section').mouseleave(function () {
        $('.we-do-one h3').css('color', '#000');
    });

    //====== End of first section


    $('.we-do .we-do-two').mouseenter(function () {
        $('.we-do-two h3').css('color', '#1490d7');
    });

    $('.we-do .we-do-two').mouseleave(function () {
        $('.we-do-two h3').css('color', '#000');
    });

    //====== End of second section

    $('.we-do .we-do-three').mouseenter(function () {
        $('.we-do-three h3').css('color', '#1490d7');
    });

    $('.we-do .we-do-three').mouseleave(function () {
        $('.we-do-three h3').css('color', '#000');
    });

    //======  End of third section


    $('.we-do .we-do-four').mouseenter(function () {
        $('.we-do-four h3').css('color', '#1490d7');
    });

    $('.we-do .we-do-four').mouseleave(function () {
        $('.we-do-four h3').css('color', '#000');
    });
 
    //======  End of fourth section

});



/* End What we do functions */



/* Start Our Works Functions */

var ourWorks = document.getElementById('our-works');

function ourWorksScroll() {

    if (pageYOffset >= ourWorks.offsetTop - 200) {
        ourWorks.setAttribute('style', 'opacity:1;margin-left:0;');
    }
}

window.addEventListener('scroll', ourWorksScroll)



$(document).ready(function () {

    'use strict';

    $('.our-works section:first').hover(function () {
        $('.our-works section:first article header').css('transform', 'translate3d(0, 0, 60px)');
    });

    $('.our-works section:first').mouseleave(function () {
        $('.our-works section:first article header').css('transform', 'translate3d(0, 0, 0)');
    });

    //======= End of the first one


    $('.our-works section:nth-of-type(2)').hover(function () {
        $('.our-works section:nth-of-type(2) article header').css('transform', 'translate3d(0, 0, 60px)');
    });

    $('.our-works section:nth-of-type(2)').mouseleave(function () {
        $('.our-works section:nth-of-type(2) article header').css('transform', 'translate3d(0, 0, 0)');
    });

    //======= End of the Second one

    $('.our-works section:nth-of-type(3)').hover(function () {
        $('.our-works section:nth-of-type(3) article header').css('transform', 'translate3d(0, 0, 60px)');
    });

    $('.our-works section:nth-of-type(3)').mouseleave(function () {
        $('.our-works section:nth-of-type(3) article header').css('transform', 'translate3d(0, 0, 0)');
    });

    //======= End of the Third one
});

/* End Our Works Functions */




/* Start Why Choose us functions */
var whyChoose = document.getElementById('why-choose');

function whyChooseScroll() {

    if (pageYOffset >= whyChoose.offsetTop - 250) {
        whyChoose.setAttribute('style', 'opacity:1;margin-left:0;');
    }
}

window.addEventListener('scroll', whyChooseScroll)



$(document).ready(function () {

$('.why-choose1').click(function () {
    $('.p-why-choose1').slideToggle();
    $('.p-why-choose2').slideUp();
    $('.p-why-choose3').slideUp();


});

$('.why-choose2').click(function () {
    $('.p-why-choose2').slideToggle();
    $('.p-why-choose1').slideUp();
    $('.p-why-choose3').slideUp();


});


$('.why-choose3').click(function () {
    $('.p-why-choose3').slideToggle();
    $('.p-why-choose1').slideUp();
    $('.p-why-choose2').slideUp();


});


});




/* End Why Choose us functions */


/* Start Our Services functions */
var ourServices = document.getElementById('our-services');

function ourServicesScroll() {

    if (pageYOffset >= ourServices.offsetTop - 250) {
        ourServices.setAttribute('style', 'opacity:1;margin-left:0;');
    }
}

window.addEventListener('scroll', ourServicesScroll)

/* End Our Services functions */



/* Start Our Blog Functions */


var ourBlog = document.getElementById('our-blog');

function ourBlogScroll() {

    if (pageYOffset >= ourBlog.offsetTop - 250) {
        ourBlog.setAttribute('style', 'opacity:1;margin-left:0;');
    }
}

window.addEventListener('scroll', ourBlogScroll)




$(document).ready(function () {

    // Blog 1 

    $('.blog .blog1').hover(function () {
        $(this).css('border', '1px solid #1490d7');
        $('.blog  .date1').css('border', '1px solid #1490d7');
        $('.blog .blog1 img').css({
            transform : 'rotate(0deg)',
            transform : 'translateZ(100px)',
            transition : 'all .3s linear'
        });
    });
    $('.blog .blog1').mouseleave(function () {
        $(this).css('border', '1px solid #EEE');
        $('.blog  .date1').css('border', '1px solid #EEE');
        $('.blog .blog1 img').css({
            transform : 'rotate(-0deg)',
            transform : 'translateZ(0px)',
            transition : 'all .3s linear'
        });
    });
    $('.blog  .date1').hover(function () {
        $(this).css('border', '1px solid #1490d7');
        $('.blog  .blog1').css('border', '1px solid #1490d7');
        $('.blog .blog1 img').css({
            transform : 'rotate(-130deg)',
            transform : 'translateZ(100px)',
            transition : 'all .3s linear'
        });
    });
    $('.blog  .date1').mouseleave(function () {
        $(this).css('border', '1px solid #EEE');
        $('.blog  .blog1').css('border', '1px solid #EEE');
        $('.blog .blog1 img').css({
            transform : 'rotate(-0deg)',
            transform : 'translateZ(0px)',
            transition : 'all .3s linear'
        });
    });




    // Blog 2 

    $('.blog .blog2').hover(function () {
        $(this).css('border', '1px solid #1490d7');
        $('.blog  .date2').css('border', '1px solid #1490d7');
        $('.blog .blog2 img').css({
            transform : 'rotate(-130deg)',
            transform : 'translateZ(400px)',
            transition : 'all .3s linear'
        });
    });
    $('.blog .blog2').mouseleave(function () {
        $(this).css('border', '1px solid #EEE');
        $('.blog  .date2').css('border', '1px solid #EEE');
        $('.blog .blog2 img').css({
            transform : 'rotate(-0deg)',
            transform : 'translateZ(0px)',
            transition : 'all .3s linear'
        });
    });
    $('.blog  .date2').hover(function () {
        $(this).css('border', '1px solid #1490d7');
        $('.blog  .blog2').css('border', '1px solid #1490d7');
        $('.blog .blog2 img').css({
            transform : 'rotate(-130deg)',
            transform : 'translateZ(400px)',
            transition : 'all .3s linear'
        });
    });
    $('.blog  .date2').mouseleave(function () {
        $(this).css('border', '1px solid #EEE');
        $('.blog  .blog2').css('border', '1px solid #EEE');
        $('.blog .blog2 img').css({
            transform : 'rotate(-0deg)',
            transform : 'translateZ(0px)',
            transition : 'all .3s linear'
        });
    });


    // Blog 3


    $('.blog .blog3').hover(function () {
        $(this).css('border', '1px solid #1490d7');
        $('.blog  .date3').css('border', '1px solid #1490d7');
        $('.blog .blog3 img').css({
            transform : 'rotate(-130deg)',
            transform : 'translateZ(100px)',
            transition : 'all .3s linear'
        });
    });
    $('.blog .blog3').mouseleave(function () {
        $(this).css('border', '1px solid #EEE');
        $('.blog  .date3').css('border', '1px solid #EEE');
        $('.blog .blog3 img').css({
            transform : 'rotate(-0deg)',
            transform : 'translateZ(0px)',
            transition : 'all .3s linear'
        });
    });
    $('.blog  .date3').hover(function () {
        $(this).css('border', '1px solid #1490d7');
        $('.blog  .blog3').css('border', '1px solid #1490d7');
        $('.blog .blog3 img').css({
            transform : 'rotate(-130deg)',
            transform : 'translateZ(100px)',
            transition : 'all .3s linear'
        });
    });
    $('.blog  .date3').mouseleave(function () {
        $(this).css('border', '1px solid #EEE');
        $('.blog  .blog3').css('border', '1px solid #EEE');
        $('.blog .blog3 img').css({
            transform : 'rotate(-0deg)',
            transform : 'translateZ(0px)',
            transition : 'all .3s linear'
        });
    });

});
 
/* End Our Blog Functions */



