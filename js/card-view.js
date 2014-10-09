var app = {
	// Main Deck and Card
	deck: ".wrap",
	card: ".card",
	nav: ".nav",

	// Inner Deck and Card
	innerDeck: ".inner",
	innerCard: ".card",
	innerNav: ".slide",

	// Active Card and Nav Classes
	// There are no dot prefix
	activeCardClass: "active",
	activeNavClass: "active",

	// Menu
	menu: ".menu",
	menuOpen: ".menu-trigger",
	menuClose: ".close-menu",

	// Toolbar
	toolbar: ".toolbar",

	// Card Flip
	flip: ".flip",
	flipper: ".toggle-flip",

	// Element Sizes
	winWidth: $(window).width(),
	toolbarHeight: 55,
	cardMargins: 20,
	innerMargins: 10
};

function init() {
	// Do nothing but just call up
	// all required functions
	
	disableHorizontalScroll();
	
	// Setting thing up
	setupStage();
	setupMainDeck();
	setupMainNav();
	setupInnerDeck();
	setupInnerNav();
	
	// Events
	registerMenuEvents();
	registerCardFlipEvents();
	
	// Goto intial position if any
	gotoActiveCard();

	// Touch swipe event
	setupMainSwipe();
}

function disableHorizontalScroll() {
	$(window).scroll(function() {
		$(document).scrollLeft(0);
	});
}

function setupStage() {
	// TODO: sort something out to remove
	// fixed selector -> .sticky.top
	if( $(".sticky.top").length ) 
		$(app.deck).css("top", app.toolbarHeight);
	
	// Setting 100% width for deck and cards
	// Substracted margins fron 100%
	$(app.deck).width( app.winWidth * getCards().length );
	getCards().width(app.winWidth - app.cardMargins);

	// Setting 100% width for inner deck and cards
	// Both main card margins and inner card margins
	// needed to be substract from 100%
	$(app.innerDeck).width(app.winWidth * getInnerCards().length);
	var totalMargins = app.cardMargins + app.innerMargins;
	getInnerCards().width(app.winWidth - totalMargins);
}

function setupMainDeck() {
	var inc = 0;
	
	// Setting fixed left position on each card
	getCards().each(function() {
		if(inc)
			$(this).data("left", app.winWidth * inc);
		else
			$(this).data("left", 0);

		inc++;
	});
}

function setupMainNav() {
	// Linking card #id with nav #href
	$(app.nav).click(function() {
		var target = $(this).attr("href");
		var pos = $(target).data("left");
		
		if(pos) pos = cssPos(pos);
		slideToCard(pos);

		getCards().removeClass(app.activeCardClass);
		$(target).addClass(app.activeCardClass);

		$(app.nav).removeClass(app.activeNavClass);
		$(this).addClass(app.activeNavClass);

		return false;
	});
}

function gotoActiveCard() {
	var pos = getActiveCard().data("left");
	
	if(pos) 
		pos = cssPos(pos);
	else 
		getFirstCard().addClass(app.activeCardClass);

	slideToCard(pos);

	// Setting relevent nav as active
	var id = getActiveCard().attr("id");
	getNavByHref(id).addClass(app.activeNavClass);
}

function setupInnerDeck() {
	$(app.innerDeck).each(function() {
		inc = 0;
		
		// Setting fixed left position on each inner card
		$(app.innerCard, this).each(function() {
			if(inc)
				$(this).data("left", (app.winWidth - app.cardMargins) * inc);
			else
				$(this).data("left", 0);

			inc++;
		});
	});
}

function registerMenuEvents() {
	// Open Menu
	$(app.menuOpen).click(function(event) {
		var target = $(this).attr("href");
		$(target).velocity({"width": "50%"});
		return false;
	});

	// Close Menu
	$(app.menuClose).click(function() {
		$(this).parent().velocity({"width": "0%"});
		return false;
	});
}

function setupInnerNav() {
	// Linking inner card #id with inner nav #href
	$(app.innerNav).click(function() {
		var target = $(this).attr("href");
		var pos = $(target).data("left");
		
		if(pos)
			pos = cssPos(pos);
		
		slideToInnerCard(pos);
		
		return false;
	});
}

function registerCardFlipEvents() {
	$(app.flip).quickFlip();
	$(app.flipper).click(function(event) {
		var target = $(this).attr("href");
		$(target).quickFlipper();
	});
}

function nextCard() {
	// Check if this is the last card
	if(getActiveCard().is( getLastCard() )) return false;

	var $next = getActiveCard().next();
	var pos = $next.data("left");
	
	if(pos) 
		pos = cssPos(pos);
	
	slideToCard(pos);

	// Setting active class to relevent elements
	$(app.nav).removeClass(app.activeNavClass);
	$(getCards()).removeClass(app.activeCardClass);
	$next.addClass(app.activeCardClass);

	var id = getActiveCard().attr("id");
	getNavByHref(id).addClass(app.activeNavClass);
}

function prevCard() {
	// Check if this is the first card
	if(getActiveCard().is( getFirstCard() )) return false;

	var $prev = getActiveCard().prev();
	var pos = $prev.data("left");
	
	if(pos)
		pos = cssPos(pos);
	
	slideToCard(pos);

	// Setting active class to relevent elements
	$(app.nav).removeClass(app.activeNavClass);
	$(getCards()).removeClass(app.activeCardClass);
	$prev.addClass(app.activeCardClass);

	var id = getActiveCard().attr("id");
	getNavByHref(id).addClass(app.activeNavClass);
}

function setupMainSwipe() {
	$(app.deck).swipe({
		swipeLeft:function() {
			nextCard();
		},
		swipeRight:function() {
			prevCard();
		}
	});
}

/* Helper: Selector functions */
function getCards() {
	return $(app.deck + ">" + app.card);
}

function getInnerCards() {
	return $(app.innerDeck + ">" + app.innerCard);
}

function getFirstCard() {
	return $(app.deck + ">" + app.card + ":first");
}

function getLastCard() {
	return $(app.deck + ">" + app.card + ":last");
}

function getActiveCard() {
	return $(app.card + "." + app.activeCardClass);
}

function getNavByHref(id) {
	return $(app.nav + "[href='#" + id + "']");
}

/* Helper: Slide deck functions */
function slideToCard(pos) {
	$(app.deck).velocity({"left": pos});
}

function slideToInnerCard(pos) {
	$(app.innerDeck).velocity({"left": pos});
}

/* Helper: General */
function cssPos(pos) {
	return "-" + pos + "px";
}