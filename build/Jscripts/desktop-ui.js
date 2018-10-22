/*
* TABLE OF CONTENTS
*
* List JS file
* global PIN
*/

/* > List JS file */

// '/vendor/jquery-3.1.1.js',
// '/vendor/jquery.slimscroll.min.js',


$(function(){
	$('.theme-gardian .wrap').bxSlider({
		pager : false,
		slideWidth: 370,
		minSlides: 3,
		maxSlides: 3,
		nextSelector: ".theme-gardian .btn-next",
		prevSelector: ".theme-gardian .btn-prev"
	});
	$('.hasnt-read .wrap').bxSlider({
		pager : false,
		nextSelector: ".hasnt-read .btn-next",
		prevSelector: ".hasnt-read .btn-prev"
	});
});




/* > slimscroll */
// location        : all site
$(function(){
    $('#scroll-01').slimScroll({
        height: '550px'
    });
    $('#scroll-02').slimScroll({
        height: '550px'
    });
    $('#scroll-03').slimScroll({
        height: '415px'
    });
});

