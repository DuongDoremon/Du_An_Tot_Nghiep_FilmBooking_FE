window.scheduleController = function ($scope, $http) {
  $scope.listSchedule = [];
  listAddSchedule = {
    // name:"",
    startAt:"",
    room:"",
    movie:"",
    finishAt:""
  }
  $http.get(scheduleApi).then(function (response) {
    $scope.listSchedule = response.data.data;
  });
  $scope.addSchedule = function (event) {
    event.preventDefault();
    $http.post(addSchedule, $scope.listAddSchedule).then(function (response) {
      $scope.listSchedule.push(response.data.data);
    });
  };
  //movie
  $scope.listMovie = [];
  $http.get(movieApi).then(function (response) {
    $scope.listMovie = response.data.data;
  });
  //room
  $scope.listRoom = [];
  $http.get(roomApi).then(function(response){
      $scope.listRoom = response.data.data;
  })

};
