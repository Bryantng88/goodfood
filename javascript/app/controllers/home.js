var navbarItems = [];

goodFood.controller('HomeCtrl', ['$scope', '$http', '$window', '$rootScope', function ($scope, $http, $window, $rootScope) {
$scope.navBar = navBar;
	// $scope.init = () => {
	// 	$http({
	// 		url: 'http://localhost:8090/goodfood/load',
	// 		method: 'GET',
	// 		headers: {
	// 			'Accept': 'application/json',
	// 			'Content-Type': 'application/json'

	// 			// 'Authorization': 'Bearer ' + $window.localStorage.getItem('token')

	// 		}
	// 	})
	// 		.success(function (response) {
	// 			$scope.setActiveLink;
	// 			console.log('success load nav bar item')

	// 			$scope.navbarItems = [...response];
	// 			console.log($scope.navbarItems)
	// 			for (let item in $scope.navbarItems) {
	// 				if ($scope.navbarItems[item].name === "menu") {
	// 					console.log($scope.navbarItems[item].name)
	// 					$scope.setActiveLink = $scope.navbarItems[item].name;
	// 				}
	// 				// console.log($scope.navbarItems[item].name)
	// 			}
	// 			console.log($scope.setActiveLink)


	// 			// $window.localStorage.setItem("navbarItems", JSON.stringify(response))
	// 			// let tests = $window.localStorage.getItem("categories")
	// 			// console.log(tests);

	// 		})


	// }

	$(function () {
		$("li:nth-child(1)").toggleClass("default");
		$("li").hover(function () {
			// $(this).removeClass("active")
			// $(this).prev().removeClass("active")
			// $(this).next().removeClass("active")
			
			$(this).addClass("active")
			$(this).prevAll().addClass("active")
			$(this).prevAll().css("visbility", "hidden")
			$(this).nextAll().removeClass("active")
			$("li:nth-child(1)").removeClass("default")
		})

		$("li").mouseleave(function() {
			$(".stepbar-wrapper").children().removeClass("active");
			$("li:nth-child(1)").toggleClass("default");

		})

	})



}])