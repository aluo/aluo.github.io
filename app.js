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
    name: "github",
    img: "img/githubLogo.png",
    link: "https://github.com/aluo"
  },
  {
    name: "illustration",
    img: "img/illusLogo.png",
    link: "http://paperstains.tumblr.com"
  },
  {
    name: "linkedin",
    img: "img/linkedInLogo.png",
    link: "https://www.linkedin.com/in/luoamy"
  }
]
