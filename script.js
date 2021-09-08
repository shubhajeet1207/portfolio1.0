$( document ).ready(function() {

	$( window ).resize(function() {

		windowSize = $( window ).width();

		if (windowSize >= 768) {
			mouseMove();
		} else {
			$(".js-Side-left").css({
				"left": 0
			});

			// Image translation
			$(".js-Side-left-image").css({
				"margin-left": 0
			});

			$(".js-Side-right-image").css({
				"right": 0
			});
		}
		
	});

	var windowSize = $( window ).width();

	// Getting mouse move and animating div and images

	function mouseMove() {

		$( ".js-Home-desktop-wrapper" ).mousemove(function( event ) {
			if (windowSize >= 768) {

				var mouseX = event.pageX,
					result = mouseX * 100/windowSize,
					move   = -(windowSize/2) - mouseX;

				$(".js-Side-left").css({
					"left": move
				});

				// Image translation
	
				$(".js-Side-left-image").css({
					"margin-left": -windowSize - move+(mouseX-(windowSize/2))/40,
				});

				$(".js-Side-right-image").css({
					"right": -(mouseX-(windowSize/2))/40,
				});
			}
		});
	}

	mouseMove();
	
});


window.onload = function () {
    document.querySelector('.cont_modal').className = "cont_modal";
}
var c = 0;
function open_close() {
    if (c % 2 == 0) {
        document.querySelector('.cont_modal').className = "cont_modal cont_modal_active";
        c++;
    } else {
        document.querySelector('.cont_modal').className = "cont_modal";
        c++;
    }
}
