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


// function flipTo(digit, n){
// 	var current = digit.attr('data-num');
// 	digit.attr('data-num', n);
// 	digit.find('.front').attr('data-content', current);
// 	digit.find('.back, .under').attr('data-content', n);
// 	digit.find('.flap').css('display', 'block');
// 	setTimeout(function(){
// 		digit.find('.base').text(n);
// 		digit.find('.flap').css('display', 'none');
// 	}, 350);
// }
// function jumpTo(digit, n){
// 	digit.attr('data-num', n);
// 	digit.find('.base').text(n);
// }
// function updateGroup(group, n, flip){
// 	var digit1 = $('.ten'+group);
// 	var digit2 = $('.'+group);
// 	n = String(n);
// 	if(n.length == 1) n = '0'+n;
// 	var num1 = n.substr(0, 1);
// 	var num2 = n.substr(1, 1);
// 	if(digit1.attr('data-num') != num1){
// 		if(flip) flipTo(digit1, num1);
// 		else jumpTo(digit1, num1);
// 	}
// 	if(digit2.attr('data-num') != num2){
// 		if(flip) flipTo(digit2, num2);
// 		else jumpTo(digit2, num2);
// 	}
// }
// function setTime(flip){
// 	var t = new Date();
// 	updateGroup('hour', t.getHours(), flip);
// 	updateGroup('min', t.getMinutes(), flip);
// 	updateGroup('sec', t.getSeconds(), flip);
// }
// $(document).ready(function(){
	
// 	setTime(false);
// 	setInterval(function(){
// 		setTime(true);
// 	}, 1000);
	
// });