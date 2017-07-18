function initSlider(){
	$(".items.owl-carousel").each(function(){
		var $this = $(this);
		$this.owlCarousel({
	    loop:false,
	    items: 5,
	    navRewind:false,
	    margin: 15,
	    nav: true,
	    dots:false,
	    navText: [
      		'<svg class="icon">\
						    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="images/symbol/sprite.svg#sliderLA"></use>\
						</svg>',
					'<svg class="icon">\
						    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="images/symbol/sprite.svg#sliderRA"></use>\
						</svg>'
	    ],
	    autoplay: false,
	    autoplayHoverPause: false
	  });
	});
}

function landMenu(){
	$(".tabLinks .link").on("click", function(){
		if( $(this).hasClass("selected") ){return false;}
		var $thisLink = $(this),
				index = $thisLink.index(),
				$block = $thisLink.closest(".tabsBlock"),
				$links = $block.find(".tabLinks .link"),
				$tabs = $block.find(".tab"),
				$thisTabs = $tabs.eq(index);

		$tabs.add($links).removeClass("selected");
		$thisTabs.add($thisLink).addClass("selected");
	});
}

$(document).ready(function(){
	svg4everybody({});
	initSlider();
	landMenu();
});