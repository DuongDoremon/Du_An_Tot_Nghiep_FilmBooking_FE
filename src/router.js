var myApp = angular.module("myModule", ["ngRoute"]);
myApp.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix("");
  $routeProvider
    .when("/home", {
      templateUrl: "./pages/home.html", 
    })
    .when("/food", {
      templateUrl: "./pages/food.html",
      controller: foodController,
    })
    .when("/bill-food", {
      templateUrl: "./pages/bill-food.html",
    })
    .when("/bill-ticket", {
      templateUrl: "./pages/bill-ticket.html",
    })
    .when("/movie", {
      templateUrl: "./pages/movie.html",
      controller: movieController,
    })
    .when("/movie-type", {
      templateUrl: "./pages/movie-type.html",
    })
    .when("/seat", {
      templateUrl: "./pages/seat.html",
      controller: seatController
    })
    .when("/customer", {
      templateUrl: "./pages/customer.html",
      controller: customerController,
    })
    .when("/room", {
      templateUrl: "./pages/room.html",
      controller: roomController,
    })
    .when("/promotion", {
      templateUrl: "./pages/promotion.html",
      controller: promotionController,
    })
    .when("/statistical", {
      templateUrl: "./pages/statistical.html",
    })
    .when("/cimena", {
      templateUrl: "./pages/cimena.html",
      controller: cinemaController,
    })
    .when("/schedule", {
      templateUrl: "./pages/schedule.html",
      controller: scheduleController
    })
    .when("/setting", {
      templateUrl: "./pages/setting.html",
    })
    .when("/rank", {
      templateUrl: "./pages/rank.html",
      controller: rankController,
    })
    .when("/detailMovie/:id",{
      templateUrl:"./page-detail/chi-tiet-phim.html",
      controller: movieController
    })
    .when("/pages-add-movie",{
      templateUrl: "./page-detail/form-add-movie.html",
      controller: movieController
    }).when("/seat-manager",{
      templateUrl: "./pages/seat-manager.html",
      // controller: movieController
      controller: seatController
    }).when("/form-add-seat",{
      templateUrl: "./page-detail/form-add-seat.html",
      // controller: movieController
      controller: seatController
    })
    .when("/detail-seat-room/:id",{
      templateUrl: "./page-detail/seat-detail.html",
      // controller: movieController
      controller: seatController
    })
    .otherwise({
      redirectTo: "/home",
    });
});
