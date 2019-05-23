var app = angular.module('MyApp',["ngRoute"]);
app.run(function(){
    console.log("My App is Running!");
});

app.config(function($routeProvider,$locationProvider) {    $routeProvider
.when("/", {
        templateUrl : "/home.html"
    })
$locationProvider.html5Mode(true);
});


app.controller('mainCont', function($scope, $http, $location ) {
    console.log("mainCont");
    
    $scope.contents = [
        {
            "category" : "World",
            "heading" : "Featured",
            "date" : "12 Nov",
            "shortdesc" : "This is a wider card with supporting text below as a natural lead-in to additional content.",
            "descrition" : "World"
        },{
            "category" : "Test",
            "heading" : "asdasd",
            "date" : "12 Nov",
            "shortdesc" : "This is a wider card with supporting text below as a natural lead-in to additional content.",
            "descrition" : "World"
        },{
            "category" : "asdasd",
            "heading" : "Featuasdasdred",
            "date" : "12 Nov",
            "shortdesc" : "This is a wider card with supporting text below as a natural lead-in to additional content.",
            "descrition" : "World"
        },{
            "category" : "asdasd",
            "heading" : "Featuasdasdred",
            "date" : "12 Nov",
            "shortdesc" : "This is a wider card with supporting text below as a natural lead-in to additional content.",
            "descrition" : "World"
        },{
            "category" : "asdasd",
            "heading" : "Featuasdasdred",
            "date" : "12 Nov",
            "shortdesc" : "This is a wider card with supporting text below as a natural lead-in to additional content.",
            "descrition" : "World"
        }]
});