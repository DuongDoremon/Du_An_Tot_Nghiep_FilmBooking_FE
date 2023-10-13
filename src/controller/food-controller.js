window.foodController = function ($scope, $http) {
  $scope.listFood = [];
  $scope.listAddFood = {
    name: "",
    image: "",
    price: "",
    description: "",
  };
  $scope.listUpdateFood = {
    name: "",
    image: "",
    price: "",
    description: "",
    code: "",
  };
  $scope.viTriUpdate = -1;
  $http.get(foodApi).then(function (response) {
    $scope.listFood = response.data.data;
  });
  $scope.addFood = function (event) {
    event.preventDefault();
    $http.post(addFood, $scope.listAddFood).then(function (r) {
      $scope.listFood.push(r.data.data);
      alert("Thêm thành công");
    });
  };
  $scope.deleteFood = function (event, index) {
    event.preventDefault();
    let food = $scope.listFood[index];
    let api = deleteFood + "/" + food.id;
    $http.delete(api).then(function (response) {
      $scope.listFood.splice(index, 1);
      alert("Xóa thành công");
    });
  };
  $scope.updateFood = function (event, index) {
    event.preventDefault();
    if ($scope.viTriUpdate - 1) {
      alert("Update thành công");
    }
    let sp = $scope.listFood[$scope.viTriUpdate];
    let api = updateFood + "/" + sp.id;
    $http.put(api, $scope.listUpdateFood).then(function (response) {
      $scope.listFood[$scope.viTriUpdate] = response.data.data;
    });
  };
  $scope.detailFood = function (event, index) {
    event.preventDefault();
    let food = $scope.listFood[index];
    console.log(food);
    $scope.listUpdateFood.name = food.name;
    $scope.listUpdateFood.image = food.image;
    $scope.listUpdateFood.price = food.price;
    $scope.listUpdateFood.description = food.description;
    $scope.listUpdateFood.code = food.code;
    $scope.viTriUpdate = index;
  };
};
