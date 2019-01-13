$(document).ready(function(){
  $('#logojava').mouseover(function(){
    $(this).css({"filter": "brightness(50%)"});
    $('.text-muted mb-0').fadeIn(1000);
  });
  $('#logojava').mouseout(function(){
    $(this).css({"filter": "brightness(100%)"});
      $('.text-muted mb-0').fadeOut(1000);
  });

  $('#logospring').mouseover(function(){
    $(this).css({"filter": "brightness(50%)"});
      $('.text-muted mb-0').fadeIn(1000);
  });
  $('#logospring').mouseout(function(){
    $(this).css({"filter": "brightness(100%)"});
      $('.text-muted mb-0').fadeOut(1000);
  });

  $('#logojs').mouseover(function(){
    $(this).css({"filter": "brightness(50%)"});
      $('.text-muted mb-0').fadeIn(1000);
  });
  $('#logojs').mouseout(function(){
    $(this).css({"filter": "brightness(100%)"});
      $('.text-muted mb-0').fadeOut(1000);
  });

  $('#logosql').mouseover(function(){
    $(this).css({"filter": "brightness(50%)"});
      $('.text-muted mb-0').fadeIn(1000);
  });
  $('#logosql').mouseout(function(){
    $(this).css({"filter": "brightness(100%)"});
      $('.text-muted mb-0').fadeOut(1000);
  });


});
