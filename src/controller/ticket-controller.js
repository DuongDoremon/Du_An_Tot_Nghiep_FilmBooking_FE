window.ticketController = function($scope, $http){
    $scope.listTicket = [];
    $http.get(ticketApi).then(function(response){
        $scope.listTicket = response.data.data;
    })
}