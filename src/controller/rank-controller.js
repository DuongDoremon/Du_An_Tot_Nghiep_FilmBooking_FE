window.rankController = function($scope, $http){
    $scope.listRank = [];
    $http.get(rankApi).then(function(response){
        $scope.listRank = response.data.data;
    })
}
