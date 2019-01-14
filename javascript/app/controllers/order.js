goodFood.controller('orderCtrl',['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.checkIfMenuEmpty = () => {
        // if($rootScope.productOrder.length === 0) {
        //     alert("bạn chưa chọn menu")
        //     console.log($rootScope.productOrder)
        // }

        console.log($rootScope.productOrder)
    }



}])