$(document).ready(function() {

  $('.block').hide();

  $('.key').click(function(){
    $('.typer').addClass('typer-trans');
    setTimeout(function () {
    $('.typer').removeClass('typer-trans');
  }, 100);
  });

  $(".sprite").click(function(){
    $(this).addClass('js-ani');
    setTimeout(function () {
      $(".sprite").removeClass('js-ani');
    }, 400);
  });

  $(".spacebar").click(function(){
    $(this).addClass('js-ani-spacebar');
    setTimeout(function () {
      $(".spacebar").removeClass('js-ani-spacebar');
    }, 400);
  });

  var move = 120;
  $(document).ready(function(){
  	$('.key').click(function(){
        if (
  		$('.horizontal2, .text-wrapper, .after').css("transform","translateX("+move+"px)"));
  		move = move - 10;

  	});
  });

  //return


  var count = 0;
$(document).ready(function(){
  $('.key').click(function () {
    count += 1;

    if (count >= 24) {
      $('.horizontal2, .text-wrapper, .after').addClass('js-ani-trans');
      $('.block').show();
      $('.horizontal2, .text-wrapper, .after').css("transform","translateX(120px)");
      $('div p').append("</br>");
      document.getElementById('ding-sound').play();

      setTimeout(function () {
        $('.block').hide();
      }, 1000);

      // TODO:  //PREVENT CLICK  / DISABLE FUNCTION THEN ENABLE AFTER TIMEOUT

       count = 0;
       move = 120;
    }

if (move < 120) {
  $('.horizontal2, .text-wrapper, .after').removeClass('js-ani-trans');
    }
  });
  });





  //audio

    var typesound = document.createElement('audio');
    typesound.setAttribute('src', 'sounds/typewriter-cut.wav');
    typesound.setAttribute('autoplay', 'autoplay');
    //audioElement.load()

    $.get();

    typesound.addEventListener("load", function() {
        typesound.play();
    }, true);

    $('.key').click(function() {
        typesound.play();
    });







    $('.sprite-A').click(function(){
        $('div p').append('A');
      });
      $('.sprite-B').click(function(){
        $('div p').append('B');
      });
      $('.sprite-C').click(function(){
        $('div p').append('C');
      });
      $('.sprite-D').click(function(){
        $('div p').append('D');
      });
      $('.sprite-E').click(function(){
        $('div p').append('E');
      });
      $('.sprite-F').click(function(){
        $('div p').append('F');
      });
      $('.sprite-G').click(function(){
        $('div p').append('G');
      });
      $('.sprite-H').click(function(){
        $('div p').append('H');
      });
      $('.sprite-I').click(function(){
        $('div p').append('I');
      });
      $('.sprite-J').click(function(){
        $('div p').append('J');
      });
      $('.sprite-K').click(function(){
        $('div p').append('K');
      });
      $('.sprite-L').click(function(){
        $('div p').append('L');
      });
      $('.sprite-M').click(function(){
        $('div p').append('M');
      });
      $('.sprite-N').click(function(){
        $('div p').append('N');
      });
      $('.sprite-O').click(function(){
        $('div p').append('O');
      });
      $('.sprite-P').click(function(){
        $('div p').append('P');
      });
      $('.sprite-Q').click(function(){
        $('div p').append('Q');
      });
      $('.sprite-R').click(function(){
        $('div p').append('R');
      });
      $('.sprite-S').click(function(){
        $('div p').append('S');
      });
      $('.sprite-T').click(function(){
        $('div p').append('T');
      });
      $('.sprite-U').click(function(){
        $('div p').append('U');
      });
      $('.sprite-V').click(function(){
        $('div p').append('V');
      });
      $('.sprite-w').click(function(){
        $('div p').append('W');
      });
      $('.sprite-X').click(function(){
        $('div p').append('X');
      });
      $('.sprite-Y').click(function(){
        $('div p').append('Y');
      });
      $('.sprite-Z').click(function(){
        $('div p').append('Z');
      });
      $('.spacebar').click(function(){
        $('div p').append("&nbsp;");
      });




});

//keybinds

$(document).keydown(function(e) {
    if(e.which == 65) {
        $('div p').append('A');
        $('.sprite-A').addClass('js-ani');
          setTimeout(function () {
            $(".sprite").removeClass('js-ani');
          }, 400);

    }

    if(e.which == 66) {
        $('div p').append('B');
        $('.sprite-B').addClass('js-ani');
          setTimeout(function () {
            $(".sprite").removeClass('js-ani');
          }, 400);

    }

    if(e.which == 67) {
        $('div p').append('C');
        $('.sprite-C').addClass('js-ani');
          setTimeout(function () {
            $(".sprite").removeClass('js-ani');
          }, 400);

    }

    if(e.which == 68) {
        $('div p').append('D');
        $('.sprite-D').addClass('js-ani');
          setTimeout(function () {
            $(".sprite").removeClass('js-ani');
          }, 400);

    }

    if(e.which == 69) {
        $('div p').append('E');
        $('.sprite-E').addClass('js-ani');
          setTimeout(function () {
            $(".sprite").removeClass('js-ani');
          }, 400);

    }

    if(e.which == 70) {
        $('div p').append('F');
        $('.sprite-F').addClass('js-ani');
          setTimeout(function () {
            $(".sprite").removeClass('js-ani');
          }, 400);

    }

    if(e.which == 71) {
        $('div p').append('G');
        $('.sprite-G').addClass('js-ani');
          setTimeout(function () {
            $(".sprite").removeClass('js-ani');
          }, 400);

    }

    if(e.which == 72) {
        $('div p').append('H');
        $('.sprite-H').addClass('js-ani');
          setTimeout(function () {
            $(".sprite").removeClass('js-ani');
          }, 400);

    }

    if(e.which == 73) {
        $('div p').append('I');
        $('.sprite-I').addClass('js-ani');
          setTimeout(function () {
            $(".sprite").removeClass('js-ani');
          }, 400);

    }

    if(e.which == 74) {
        $('div p').append('J');
        $('.sprite-J').addClass('js-ani');
          setTimeout(function () {
            $(".sprite").removeClass('js-ani');
          }, 400);

    }

    if(e.which == 75) {
        $('div p').append('K');
        $('.sprite-K').addClass('js-ani');
          setTimeout(function () {
            $(".sprite").removeClass('js-ani');
          }, 400);

    }

    if(e.which == 76) {
        $('div p').append('L');
        $('.sprite-L').addClass('js-ani');
          setTimeout(function () {
            $(".sprite").removeClass('js-ani');
          }, 400);

    }

    if(e.which == 77) {
        $('div p').append('M');
        $('.sprite-M').addClass('js-ani');
          setTimeout(function () {
            $(".sprite").removeClass('js-ani');
          }, 400);

    }

    if(e.which == 78) {
        $('div p').append('N');
        $('.sprite-N').addClass('js-ani');
          setTimeout(function () {
            $(".sprite").removeClass('js-ani');
          }, 400);

    }

    if(e.which == 79) {
        $('div p').append('O');
        $('.sprite-O').addClass('js-ani');
          setTimeout(function () {
            $(".sprite").removeClass('js-ani');
          }, 400);

    }

    if(e.which == 80) {
        $('div p').append('P');
        $('.sprite-P').addClass('js-ani');
          setTimeout(function () {
            $(".sprite").removeClass('js-ani');
          }, 400);

    }

    if(e.which == 81) {
        $('div p').append('Q');
        $('.sprite-Q').addClass('js-ani');
          setTimeout(function () {
            $(".sprite").removeClass('js-ani');
          }, 400);

    }

    if(e.which == 82) {
        $('div p').append('R');
        $('.sprite-R').addClass('js-ani');
          setTimeout(function () {
            $(".sprite").removeClass('js-ani');
          }, 400);

    }

    if(e.which == 83) {
        $('div p').append('S');
        $('.sprite-S').addClass('js-ani');
          setTimeout(function () {
            $(".sprite").removeClass('js-ani');
          }, 400);

    }

    if(e.which == 84) {
        $('div p').append('T');
        $('.sprite-T').addClass('js-ani');
          setTimeout(function () {
            $(".sprite").removeClass('js-ani');
          }, 400);

    }

    if(e.which == 85) {
        $('div p').append('U');
        $('.sprite-U').addClass('js-ani');
          setTimeout(function () {
            $(".sprite").removeClass('js-ani');
          }, 400);

    }

    if(e.which == 86) {
        $('div p').append('V');
        $('.sprite-V').addClass('js-ani');
          setTimeout(function () {
            $(".sprite").removeClass('js-ani');
          }, 400);

    }

    if(e.which == 87) {
        $('div p').append('W');
        $('.sprite-w').addClass('js-ani');
          setTimeout(function () {
            $(".sprite").removeClass('js-ani');
          }, 400);

    }

    if(e.which == 88) {
        $('div p').append('X');
        $('.sprite-X').addClass('js-ani');
          setTimeout(function () {
            $(".sprite").removeClass('js-ani');
          }, 400);

    }

    if(e.which == 89) {
        $('div p').append('Y');
        $('.sprite-Y').addClass('js-ani');
          setTimeout(function () {
            $(".sprite").removeClass('js-ani');
          }, 400);

    }

    if(e.which ==90) {
        $('div p').append('Z');
        $('.sprite-Z').addClass('js-ani');
          setTimeout(function () {
            $(".sprite").removeClass('js-ani');
          }, 400);

    }

    if(e.which == 13) {
        $('div p').append('</br>');
    }

});
