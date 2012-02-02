/* Author:

*/

$(function() {
   $("html, body").mousewheel(function(event, delta) {
      this.scrollLeft -= (delta * 20);
      event.preventDefault();
   });
});

function setHeight() {
	var top = $('.copy').offset().top;
	var windowheight = $(window).height();
	var diff = windowheight - top - 10;
	$('.copy').css('height', diff);	
}

function fadeTitle() {
	var left = $('body').scrollLeft();
	if ( left !== 0 ){
		$('header').css('opacity','.4');
	}
	else {
		$('header').css('opacity','1');
	}
}

$(window).ready(function() {
	setHeight();
	fadeTitle();
});

$(window).resize(function(){
	setHeight();
});

$(window).scroll(function(){
	fadeTitle();
});

