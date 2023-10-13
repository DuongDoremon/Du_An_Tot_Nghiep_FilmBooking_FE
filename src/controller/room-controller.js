window.roomController = function($scope, $http){
    $scope.listRoom = [];
    $http.get(roomApi).then(function(response){
        $scope.listRoom = response.data.data;
    })
}