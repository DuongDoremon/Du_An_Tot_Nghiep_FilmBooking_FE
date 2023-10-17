window.seatController = function ($scope, $http) {
  $scope.listSeat = [];
  $scope.listPageSeat = [];
  $scope.listCinema = [];
  $http.get(seatApi).then(function (response) {
    $scope.listSeat = response.data.data;
    $scope.listSeat.sort(function (a, b) {
      return a.code.localeCompare(b.code, "en", { numeric: true });
    });
  });
  // $scope.listSeatSort = [];
  // $http.get(seatApi).then(function (response) {
  //   $scope.listSeatSort = response.data.data;
  //   $http.get(seatApi).then(function (response) {
  //     $scope.listSeatSort = response.data.data;
  //   });
  //   $scope.listSeatSort.sort(function (a, b) {
  //     return a.line.localeCompare(b.line, "en", { numeric: true });
  //   });
  // });
  $scope.listRoom = [];
  $http.get(roomApi).then(function (response) {
    $scope.listRoom = response.data.data;
  });
  $http.get(cinemaApi).then(function (response) {
    $scope.listCinema = response.data.data;
  });
  $scope.listAddSeat = {
    lineNumber: "",
    number: "",
    idRoom: "",
  };
  $scope.listUpdateSeat = {
    lineNumber: "",
    number: "",
    idRoom: "",
    description: "",
  };
  $scope.addSeat = function (event) {
    event.preventDefault();
    $http.post(addSeat, $scope.listAddSeat).then(function (response) {
      $scope.listSeat.push(response.data.data);
      alert("Thêm tành công!");
    });
  };
  $scope.viTri = -1;
  $scope.updateSeat = (event) => {
    event.preventDefault();
    const seat = $scope.listSeat[$scope.viTri];
    const api = updateSeat + "/" + seat.id;
    $http.put(api, $scope.listUpdateSeat).then((response) => {
      $scope.listSeat[$scope.viTri] = response.data.data;
    });
  };
  // phân trang
  $scope.currentPage = 0;
  $scope.searchText = "";
  $scope.pageSeat = function () {
    $http
      .get(seatApi, {
        params: {
          page: $scope.currentPage,
          searchText: $scope.searchText,
        },
      })
      .then(function (response) {
        $scope.listPageSeat = response.data.data.content;
        $scope.totalPages = response.data.data.totalPages;
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  $scope.nextPage = function () {
    $scope.currentPage++;
    $scope.pageSeat();
  };

  $scope.prevPage = function () {
    $scope.currentPage--;
    $scope.pageSeat();
  };

  $scope.numberOfPages = function () {
    return $scope.totalPages ? $scope.totalPages : 0;
  };

  $scope.pageSeat();
};
