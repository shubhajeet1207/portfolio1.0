(function() {
    var rotate, timeline;
  
    rotate = function() {
      return $('.card:first-child').fadeOut(100, 'swing', function() {
        return $('.card:first-child').appendTo('.container').hide();
      }).fadeIn(1000, 'swing');
    };
  
    timeline = setInterval(rotate, 1000);
  
    $('.card').click(function() {
      return rotate();
    });
  
  }).call(this);
  