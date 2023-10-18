window.scheduleController = function ($scope, $http) {
  $scope.listSchedule = [];
  listAddSchedule = {
    // name:"",
    startAt:"",
    room:"",
    movie:"",
    finishAt:""
  }
  // $scope.startAt = new Date();
  // $scope.finishAt = new Date();
  // $scope.getDateRange = function(){
  //   DateRangeService.getDateRange($scope.startAt, $scope.finishAt).then(function(response){
  //     $scope.dates = response.data;
  //   }).catch(function(response){
  //     console.error('Lỗi khi tải danh sách ngày',error);
  //   })
  // }
  $http.get(scheduleApi).then(function (response) {
    $scope.listSchedule = response.data.data;
    console.log($scope.listSchedule = response.data.data);
  });
  $scope.addSchedule = function (event) {
    event.preventDefault();
    $http.post(addSchedule, $scope.listAddSchedule).then(function (response) {
      $scope.listSchedule.push(response.data.data);
      alert("Thêm thành công");
      window.location.reload();
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
  $scope.deleteSchedule = function(event, index){
    event.preventDefault();
    let schedule = $scope.listSchedule[index];
    let api = deleteSchedule + "/" + schedule.id;
    $http.detele(api).then(function (response){
      $scope.listSchedule.splice(index, 1);
      alert("Xóa thành công")
    })
  }
};