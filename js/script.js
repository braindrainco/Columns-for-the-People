/* Author:

*/

$(function() {
   $("html, body").mousewheel(function(event, delta) {
      this.scrollLeft -= (delta * 20);
      event.preventDefault();
   });
});

function setHeight() {
	var top = $('header').height();
	var windowheight = $(window).height();
	var diff = windowheight - top - 40;
	$('.copy').css({'height':diff, 'margin-top':top});	
}

function fadeTitle() {
	var left = $('body').scrollLeft();
	if ( left !== 0 ){
		$('header').addClass('small');
		//$('section').css('top','5em');
		setHeight();
	}
	else {
		$('header').removeClass('small');
		//$('section').css('top','266px');
		setHeight();
	}
}

function progressBar(){
	var totalWidth = $('.endmark').offset().left - $(window).width();
	var currentPosition = $('body').scrollLeft();
	var progress = currentPosition / totalWidth;
	var progressPercent = progress * 99;
	var location = Math.round(progressPercent).toFixed(0);
	var progressLocation = $('#scrollbar').width() * progress;
	$('#progress').css('width', progressPercent + '%');
	$('#location').html(location + '%').css('margin-left', progressLocation);

}

function nextParagraph() {
	var para_currentPosition = $('body').scrollLeft();
	var paraWidth = $('#first_paragraph').width() + 42;
    var nextPara = Math.ceil(para_currentPosition / paraWidth) * paraWidth;
    if (nextPara == para_currentPosition) {
    nextPara = nextPara + paraWidth;
    }
    else{
    // Do Nothing
    }
    return nextPara;
}


function scrolling() {
	$(document).bind('keydown', 'space', function(){
		$('body').animate({scrollLeft : nextParagraph()}, 200);
	});
}

$(window).ready(function() {
	setHeight();
	fadeTitle();
	progressBar();
	scrolling();
});

$(window).resize(function(){
	setHeight();
	progressBar();
});

$(window).scroll(function(){
	fadeTitle();
	progressBar();
});

