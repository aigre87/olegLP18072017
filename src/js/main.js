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

function headerMenuPopup(){
    var $items = $("#headerMenu .link");

    $items.on("click", function(){
        var $this = $(this),
            $thisDetail = $this.find(".popup");
        $this.addClass("active");
        $.magnificPopup.open({
            items: {
                src: "<div class='defaultPopupContent mfp-with-anim'>"+$thisDetail[0].outerHTML+"</div>",
                type: 'inline'
            },
            removalDelay: 500, //delay removal by X to allow out-animation
            closeBtnInside: true,
            mainClass: 'mfp-with-zoom',
            callbacks: {
                beforeOpen: function() {
                    this.st.mainClass = "mfp-zoom-in defaultPopup salesPopup";
                },
                beforeClose: function() {
                    $this.removeClass("active");
                },
            },
            midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
        });
    });
}

function mainMenu(){
	//$("#headerMenu .link")
}
function landMenu(){
	$(".tabsBlock").each(function(){
		var $content = $(".tabsContent");
		TweenMax.set( $content, {  height: $content.find(".tab.selected").outerHeight() } );
		TweenMax.set( $(".tabsBlock .tab"), { position: "absolute", left: 0, top: 0, display: "block" } );
		setTimeout(function(){
			TweenMax.set($content,{clearProps:"height"});
			TweenMax.set($(".tabsBlock .tab"),{clearProps:"left,position,top"});
			TweenMax.set($(".tabsBlock .tab.selected"), { display: "block", autoAlpha:1 });
			TweenMax.set($(".tabsBlock .tab:not(.selected)"), { display: "none", autoAlpha:0 });
		},100);
	});

	$(".tabLinks .link").each(function(){
			var tl;
			$(this).on("click", function(){
				if( $(this).hasClass("selected") ){return false;}
				var $thisLink = $(this),
						$prevCurLink = $(".tabLinks .link.selected"),
						$prevCurTab = $(".tabsBlock .tab.selected"),
						index = $thisLink.index(),
						$block = $thisLink.closest(".tabsBlock"),
						$tabsContent = $block.find(".tabsContent"),
						$links = $block.find(".tabLinks .link"),
						$tabs = $block.find(".tab"),
						$thisTab = $tabs.eq(index),
						$otherTabs = $tabs.siblings(".tab"),
						$otherlinks = $thisLink.siblings(".link");


				if( typeof tl != 'undefined' ){tl.stop().kill();}

				tl = new TimelineLite({});

				tl.set( $tabsContent, {  height: $tabsContent.outerHeight() } )
					.set( $prevCurTab.add($thisTab), { position: "absolute", left: 0, top: 0, display: "block" } )
					.to( $tabsContent, 0.2, {  height: $thisTab.outerHeight() }, "f1" )
					.to( $prevCurTab, 0.3, {  autoAlpha:0, display: "none" }, "f1" )
					.to( $thisTab, 0.3, {  autoAlpha:1 }, "f1" )
					.set($tabsContent,{clearProps:"height"})
					.set($prevCurTab.add($thisTab),{clearProps:"left,position,top"});

				$prevCurTab.add($prevCurLink).removeClass("selected");
				$thisTab.add($thisLink).addClass("selected");
			});
	});

}

$(document).ready(function(){
	svg4everybody({});
	landMenu();
	initSlider();
	headerMenuPopup();
});