$(document).ready(function() {

  $('.block').hide();

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
        $('div p').append(" ");
      });




});
