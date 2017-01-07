$(document).ready(function() {

  $(".sprite").click(function(){
    $(this).addClass('js-ani');
    setTimeout(function () {
      $(".sprite").removeClass('js-ani');
    }, 400);
  });

  var move = 10;
  $(document).ready(function(){
  	$('.sprite').click(function(){
        if (
  		$('.horizontal').css("transform","translateX("+move+"px)"));
  		move = move + 10;

  	});
  });

  //return


  var count = 0;
$(document).ready(function(){
  $('.sprite').click(function () {
    count += 1;

    if (count >= 24) {
      $('.horizontal').addClass('js-ani-trans');
      $('.horizontal').css("transform","translateX(0)");
      // TODO:  //PREVENT CLICK  / DISABLE FUNCTION THEN ENABLE AFTER TIMEOUT

       count = 0;
       move = 10;
    }

if (move > 10) {
  $('.horizontal').removeClass('js-ani-trans');
    }
  });
  });





  //audio

    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'sounds/typewriter-cut.wav');
    audioElement.setAttribute('autoplay', 'autoplay');
    //audioElement.load()

    $.get();

    audioElement.addEventListener("load", function() {
        audioElement.play();
    }, true);

    $('.sprite').click(function() {
        audioElement.play();
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




});
