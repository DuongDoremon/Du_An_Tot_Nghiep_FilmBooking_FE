window.roomController = function($scope, $http){
    $scope.listRoom = [];
    $scope.listCinemas = [];
    $http.get(roomApi).then(function(response){
        $scope.listRoom = response.data.data;
    })
    $http.get(cinemaApi).then(function(response){
        $scope.listCinemas = response.data.data;
    })
    listAddRoom = {

        cinema:"",
        type:"",
        capacity:"",
        description:""
    }
    $scope.addRoom = function(event){
        event.preventDefault();
        $http.post(addRoom, $scope.listAddRoom).then(function(response){
            $scope.listRoom.push(response.data.data);
            alert("Thêm thành công");
            window.location.reload();
        })
    }
}