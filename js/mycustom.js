$(document).ready(function(){
  $('#logojava').mouseover(function(){
    $(this).css({"filter": "brightness(50%)"});
    $('#java').fadeIn(1000);
  });
  $('#logojava').mouseout(function(){
    $(this).css({"filter": "brightness(100%)"});
      $('#java').hide().fadeOut(1000);
  });

  $('#logospring').mouseover(function(){
    $(this).css({"filter": "brightness(50%)"});
      $('#spring').fadeIn(1000);
  });
  $('#logospring').mouseout(function(){
    $(this).css({"filter": "brightness(100%)"});
      $('#spring').hide().fadeOut(1000);
  });

  $('#logojs').mouseover(function(){
    $(this).css({"filter": "brightness(50%)"});
      $('#js').fadeIn(1000);
  });
  $('#logojs').mouseout(function(){
    $(this).css({"filter": "brightness(100%)"});
      $('#js').hide().fadeOut(1000);
  });

  $('#logosql').mouseover(function(){
    $(this).css({"filter": "brightness(50%)"});
      $('#sql').fadeIn(1000);
  });
  $('#logosql').mouseout(function(){
    $(this).css({"filter": "brightness(100%)"});
      $('#sql').hide().fadeOut(1000);
  });


});
