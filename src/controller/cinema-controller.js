window.cinemaController = function ($scope, $http) {
  $scope.listCinema = [];
  $scope.listAddCinema={
    name: "",
    address:"",
    description: ""
  }
  $http.get(cinemaApi).then(function (response) {
    $scope.listCinema = response.data.data;
  });
  $scope.deleteCinema = function (event, index) {
    event.preventDefault();
    let cinema = $scope.listCinema[index];
    let api = deleteCinema + "/" + cinema.id;
    $http.delete(api).then(function (response) {
      $scope.listCinema.splice(index, 1);
      alert("Xóa thành công");
    });
  };
  $scope.addCinema = function (event) {
    event.preventDefault();
    $http.post(addCinema, $scope.listAddCinema).then(function (response) {
      $scope.listCinema.push(response.data.data);
    });
  };
};
