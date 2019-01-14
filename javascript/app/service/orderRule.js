var menuService = angular.module('menuService', [])

.service('orderRule', function() {
    this.checkIfMenuPlanned = function () {
        console.log($scope.productDetail)
    }
})