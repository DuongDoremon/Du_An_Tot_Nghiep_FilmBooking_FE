window.customerController = function($scope, $http){
    $scope.listCustomer = [];
    $scope.listAddCustomer = {
      name:"",
      phoneNumber:"",
      email:"",
      password:""
    };
    $http.get(customerApi).then(function(response){
        $scope.listCustomer = response.data.data;
    })
    $scope.deleteCustomer = function (event, index) {
        event.preventDefault();
        let customer = $scope.listCustomer[index];
        let api = deleteCustomer + "/" + customer.id;
        $http.delete(api).then(function (response) {
          $scope.listCustomer.splice(index, 1);
          alert("Xóa thành công");
        });
      };
    $scope.addCustomer = function (event){
      event.preventDefault();
      $http.post(addCustomer, $scope.listAddCustomer).then(function (response) {
        $scope.listCustomer.push(response.data.data);
        alert("Thêm thành công");
      })
    }
}