window.movieController = function ($scope, $http, $routeParams) {
  $scope.listMovie = [];
  $scope.listRated = [];
  $scope.listAddMovie = {
    name: "",
    movieDuration: "",
    trailer: "",
    premiereDate: "",
    endDate: "",
    director: "",
    performers: "",
    languages: "",
    image: "",
    movieType: "",
    description: "",
    rated:""
  };
  $http.get(movieApi).then(function (response) {
    $scope.listMovie = response.data.data;
    $scope.detailsMovie = $scope.listMovie.filter((item, index) => {
      return item.id === $routeParams.id;
    })[0];
  });
  $http.get(ratedApi).then(function(response){
    $scope.listRated = response.data.data;
  })
  $scope.addMovie = function (event) {
    event.preventDefault();
    $http.post(addMovie, $scope.listAddMovie).then(function (response) {
      $scope.listMovie.push(response.data.data);
      alert("Thêm thành công");
    });
  };
  $scope.deleteMovie = function (event, index) {
    event.preventDefault();
    let movie = $scope.listMovie[index];
    let api = deleteMovie + "/" + movie.id;
    $http.delete(api).then(function (response) {
      $scope.listMovie.splice(index, 1);
      alert("Xóa thành công");
    });
  };
  $scope.listUpdateMovie = {
    name: "",
    movieDuration: "",
    trailer: "",
    premiereDate: "",
    endDate: "",
    director: "",
    performers: "",
    languages: "",
    image: "",
    movieType: "",
    description: "",
    code:"",
    rated:""
  };
  $scope.viTri = -1;
  $scope.updateMovie = function (event, index) {
    event.preventDefault();
    if ($scope.viTri - 1) {
      alert("Update thành công");
    }
    let movie = $scope.listMovie[$scope.viTri];
    let api = updateMovie + "/" + movie.id;
    $http.put(api, $scope.listUpdateMovie).then(function (response) {
      $scope.listMovie[$scope.viTri] = response.data.data;
      window.location.reload();
    });
  };
  $scope.detailMovie = function (event, index) {
    event.preventDefault();
    let movie = $scope.listMovie[index];
    console.log(movie);
    $scope.listUpdateMovie.name = movie.name;
    $scope.listUpdateMovie.movieDuration = movie.movieDuration;
    $scope.listUpdateMovie.trailer = movie.trailer;
    $scope.listUpdateMovie.description = movie.description;
    $scope.listUpdateMovie.premiereDate = movie.premiereDate;
    $scope.listUpdateMovie.endDate = movie.endDate;
    $scope.listUpdateMovie.director = movie.director;
    $scope.listUpdateMovie.performers = movie.performers;
    $scope.listUpdateMovie.languages = movie.languages;
    $scope.listUpdateMovie.image = movie.image;
    $scope.listUpdateMovie.movieType = movie.movieType;
    $scope.listUpdateMovie.code = movie.code;
    $scope.listUpdateMovie.rated.id = movie.rated.id;
    $scope.viTri = index;
  };
  // var current_page = 1;
  // $scope.pagerOptions = {
  //   current_page: 1,
  //   perPage: 25,
  //   total: 0,
  // };
  // function getMember(page) {
  //   $scope.pagerOptions.current_page = page;
  //   current_page = page;
  //   Members.get({
  //     page: $scope.pagerOptions.current_page,
  //     per_page: $scope.pagerOptions.perPage,
  //   }).then(function (data) {
  //     $scope.members = data.users;
  //     $scope.pagerOptions.total = data.total_count;
  //   });
  // }
  // $scope.pageChanged = function (newPage) {
  //   if (current_page !== newPage) {
  //     getMember(newPage);
  //   }
  // };
  // getMember(current_page); 
};
