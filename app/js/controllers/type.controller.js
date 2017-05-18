function TypeController($timeout){
  var controller = this;

  // controller.letters = [
  //   {
  //     letter: 'a',
  //     key: ''
  //
  //   }
  // ];

  controller.letterDown = false;
  controller.playTypeSound = false;

  controller.letterAni = function () {
    controller.letterDown = true;
    controller.playTypeSound = true;
    $timeout(function () {
      controller.letterDown = false;
      controller.playTypeSound = false;

    }, 300);
  };



}

angular
  .module('TypeApp')
  .controller('TypeController', TypeController);
