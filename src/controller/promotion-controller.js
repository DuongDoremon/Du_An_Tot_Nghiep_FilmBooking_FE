window.promotionController = function($scope, $http){
    $scope.listPromotion = [];
    $http.get(promotionApi).then(function(response){
        $scope.listPromotion = response.data.data;
    })
}