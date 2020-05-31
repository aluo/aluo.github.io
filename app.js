var app = angular.module('app', ['ngRoute', 'ngSanitize']);

app.config(function($routeProvider){
  $routeProvider
    .when('/',{
      templateUrl: 'view/home.html',
      controller: 'mainCtrl'
    })
    .when('/about', {
      templateUrl: 'view/about.html',
      controller: 'aboutCtrl'
    })
    .when('/contact', {
      templateUrl: 'view/contact.html',
      controller: 'contactCtrl'
    })
    .when('/projects', {
      templateUrl: 'view/projects.html',
      controller: 'projectCtrl'
    });
});

app.controller('mainCtrl', function($scope){
  $scope.headline = "hi there.";
  $scope.content = "My name is Amy Luo. This is really just meant to be a portal page. For now. I'll fix it up later. <br/><br/><strong>Current Interest:</strong> AngularJS";
  $scope.icons = icon_obj;
});

app.controller('aboutCtrl', function($scope){
  $scope.headline = "about";
  $scope.content = "Hi there. My name is <strong>Amy Luo</strong>. I am a programmer of some skill, and a hobby artist of probably more skill. I'm a recent Computer Science graduate out of Macaulay Honors College in NYC, and currently playing around with code for realz (I guess).<br/><br/><strong>Current Interest:</strong> AngularJS";
});

app.controller('contactCtrl', function($scope){
  $scope.headline = "contact";
  $scope.content = "resume:</br>email:</br>linkedin: <a href='https://www.linkedin.com/in/luoamy'>(+)</a></br>";

});
app.controller('projectCtrl', function($scope){
  $scope.headline = "projects";
  $scope.content = "This is more of a to-do list for now.<br/><br/>- remake website with angular (done)";

});

var icon_obj = [
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
