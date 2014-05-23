var sppApp = angular.module('sppApp', ["ngRoute"]);

sppApp.config(function($routeProvider){
	$routeProvider
	.when('/', {templateUrl: 'partials/home.html', controller: 'mainController'})
	.when('/blank', {templateUrl: 'partials/blog.html', controller: 'aboutController'})
	.when('/casestudy', {templateUrl: 'partials/carousel.html', controller: 'caseController'})
	.when('/todo', {templateUrl: 'partials/todo.html', controller: 'todoController'});
	.when('/contact', {templateUrl: 'partials/page.html', controller: 'aboutController'});
});

