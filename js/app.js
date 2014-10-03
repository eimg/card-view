$(function() {
	init();
});

function init() {
	$(window).scroll(function() {
		$(document).scrollLeft(0);
	});

	var winWidth = $(window).width();

	// Setup Stage
	if($(".sticky.top").length) $(".wrap").css("top", 55);
	$(".wrap").width(winWidth * $(".wrap > .card").length);
	$(".wrap > .card").width(winWidth - 20);

	$(".inner").width(winWidth * $(".inner > .card").length);
	$(".inner > .card").width(winWidth - 30);

	// Setup Card Deck
	var inc = 0;
	$(".wrap > .card").each(function() {
		if(inc)
			$(this).data("left", winWidth * inc);
		else
			$(this).data("left", 0);

		inc++;
	});

	// Goto .active Card
	var gotoPos = $(".active").data("left");
	if(gotoPos) gotoPos = "-" + gotoPos + "px";
	else $(".wrap > .card:first").addClass("active");
	$(".wrap").velocity({"left": gotoPos});

	$(".nav[href='#" + $(".card.active").attr("id") + "']").addClass('active');

	// Setup Navigation
	$(".nav").click(function() {
		var target = $(this).attr("href");
		var pos = $(target).data("left");
		if(pos) pos = "-" + pos + "px";
		$(".wrap").velocity({"left": pos});

		$(".wrap > .card").removeClass("active");
		$(target).addClass("active");

		$(".nav").removeClass("active");
		$(this).addClass('active');

		return false;
	});

	// Setup inner Card Deck
	$(".inner").each(function() {
		inc = 0;
		$(".card", this).each(function() {
			if(inc)
				$(this).data("left", (winWidth - 20) * inc);
			else
				$(this).data("left", 0);

			inc++;
		});
	});

	// Setup inner Navigation
	$(".slide").click(function() {
		var target = $(this).attr("href");
		var pos = $(target).data("left");
		if(pos) pos = "-" + pos + "px";
		$(".inner").velocity({"left": pos});
		return false;
	});

	// Open Menu
	$(".menu-trigger").click(function(event) {
		var target = $(this).attr("href");
		$(target).velocity({"width": "50%"});
		return false;
	});

	// Close Menu
	$(".close-menu").click(function() {
		$(this).parent().velocity({"width": "0%"});
		return false;
	});

	// Setup Card Flipper
	$(".flip").quickFlip();
	$(".toggle-flip").click(function(event) {
		var target = $(this).attr("href");
		$(target).quickFlipper();
	});
}