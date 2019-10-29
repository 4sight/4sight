$('.experience').mouseenter(function(){
	$(this).addClass('linkHover');
});
$('.experience').mouseleave(function(){
	$(this).removeClass('linkHover');
});
// $(window).scroll(function(){
// 	if($(window).scrollTop() > 300){
// 		$('.experience').addClass('show');
// 	} else {
// 		$('.experience').removeClass('show');
// 	}
// });
$('a.resume').mouseenter(function(){
	$(this).addClass('linkHover');
});
$('a.resume').mouseleave(function(){
	$(this).removeClass('linkHover');
});
$('a#github').hover(function(){
	$('#githubText').filter(':not(:animated)').animate({
		opacity: 1
	})},
	function(){
		$('#githubText').animate({
			opacity: 0
		})
	});
$('a#linkedIn').hover(function(){
	$('#linkedInText').filter(':not(:animated)').animate({
		opacity: 1
	})},
	function(){
		$('#linkedInText').animate({
			opacity: 0
		})
	});
$('a#tumblr').hover(function(){
	$('#tumblrText').filter(':not(:animated)').animate({
		opacity: 1
	})},
	function(){
		$('#tumblrText').animate({
			opacity: 0
		})
	});
$('a#soundcloud').hover(function(){
	$('#soundcloudText').filter(':not(:animated)').animate({
		opacity: 1
	})},
	function(){
		$('#soundcloudText').animate({
			opacity: 0
		})
	});
$('a#phone').hover(function(){
	$('#phoneText').filter(':not(:animated)').animate({
		opacity: 1
	})},
	function(){
		$('#phoneText').animate({
			opacity: 0
		})
	});