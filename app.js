var app = angular.module('app', ['ngRoute', 'ngSanitize']);

app.config(function($routeProvider){
  $routeProvider
    .when('/',{
      templateUrl: 'view/home.html',
      controller: 'mainCtrl'
    })
});

app.controller('mainCtrl', function($scope){
  $scope.icons = icon_obj;
});

const icon_obj = [
  {
    name: "illustration",
    img: "img/illusLogo.png",
    link: "http://paperstains.tumblr.com"
  },
  {
    name: "github",
    img: "img/githubMark.png",
    link: "https://github.com/aluo"
  }
]
