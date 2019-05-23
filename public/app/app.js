var app = angular.module('MyApp',["ngRoute"]);
app.run(function(){
    console.log("My App is Running!");
});

app.config(function($routeProvider) {    $routeProvider
.when("/", {
        templateUrl : "/home.html"
    })when("/home", {
        templateUrl : "/home.html"
    });
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