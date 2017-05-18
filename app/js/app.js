function MainRouter ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('/', {
      url: '/',
      templateUrl: '../states/type.html'
    });










  $urlRouterProvider.otherwise('/');
}


angular
.module('TypeApp', ['ui.router'])
.config(MainRouter);
