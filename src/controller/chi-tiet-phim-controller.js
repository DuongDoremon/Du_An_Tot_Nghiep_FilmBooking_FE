// window.movieDetailsController = function($scope, $http){
//     listMovie = [];
//       $http.get(movieApi).then(function (response) {
//     $scope.listMovie = response.data.data;
//   });
//     $scope.detailMovie = {
//         name: "",
//         movieDuration: "",
//         trailer: "",
//         premiereDate: "",
//         endDate: "",
//         director: "",
//         performers: "",
//         languages: "",  
//         image: "",
//         movieType: "",
//         description: "",
//         code:""
//       };
//       $scope.viTriChiTiet = -1;
//       $scope.detailChiTietMovie = function (event, index) {
//         event.preventDefault();
//         let movie = $scope.listMovie[index];
//         console.log(movie);
//         $scope.detailMovie.name = movie.name;
//         $scope.detailMovie.movieDuration = movie.movieDuration;
//         $scope.detailMovie.trailer = movie.trailer;
//         $scope.detailMovie.description = movie.description;
//         $scope.detailMovie.premiereDate = movie.premiereDate;
//         $scope.detailMovie.endDate = movie.endDate;
//         $scope.detailMovie.director = movie.director;
//         $scope.detailMovie.performers = movie.performers;
//         $scope.detailMovie.languages = movie.languages;
//         $scope.detailMovie.image = movie.image;
//         $scope.detailMovie.movieType = movie.movieType;
//         $scope.detailMovie.code = movie.code;
//         $scope.viTriChiTiet = index;
//       };
// }