goodFood.controller('menuCtrl', ['$scope', '$http', '$rootScope', '$window', function ($scope, $http, $rootScope, $window) {
    // $http({
    //     url: 'http://localhost:8090/goodfood/meal-detail',
    //     method: 'GET',
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'

    //         // 'Authorization': 'Bearer ' + $window.localStorage.getItem('token')

    //     }
    // })
    //     .success(function (response) {
    //         console.log('success load meal item')

    //         $scope.mealDetailItems = [...response];
    //         console.log($scope.mealDetailItems)			
    //         // $window.localStorage.setItem("navbarItems", JSON.stringify(response))
    //         // let tests = $window.localStorage.getItem("categories")
    //         // console.log(tests);

    // //     })

    // $scope.dayInWeek = dayInWeek;
    // $scope.products = products;
    // $http({
    //     url: 'http://localhost:8090/goodfood/meal-detail-daytime?id=2',
    //     method: 'GET',
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'

    //         // 'Authorization': 'Bearer ' + $window.localStorage.getItem('token')

    //     }
    // })
    //     .success(function (response) {
    //         console.log('success load meal item')

    //         $scope.detailOfMOD = [...response];
    //         // $rootScope.mealCategory = $scope.detailOfMOD[0].mealOfDay.name;
    //         console.log($scope.detailOfMOD)
    //         // $window.localStorage.setItem("navbarItems", JSON.stringify(response))
    //         // let tests = $window.localStorage.getItem("categories")
    //         // console.log(tests);

    //     })
    // $http({
    //     url: 'http://localhost:8090/goodfood/meal-category',
    //     method: 'GET',
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'

    //         // 'Authorization': 'Bearer ' + $window.localStorage.getItem('token')

    //     }
    // })
    //     .success(function (response) {
    //         console.log('success load meal category')

    //         $scope.mealOfDay = [...response];
    //         console.log($scope.mealOfDay)
    //         // $window.localStorage.setItem("navbarItems", JSON.stringify(response))
    //         // let tests = $window.localStorage.getItem("categories")
    //         // console.log(tests);


    $scope.juices = juices;
    $scope.dayInWeek = dayInWeek;
    $scope.mealOfDay = mealOfDay;
    $scope.products = products;
    $scope.suggestedProducts = suggestedProducts
    $scope.suggestedAddOns = suggestedAddOns
    $scope.addOns = addOns;
    $scope.productOrder = productOrder;
    $scope.specialRequests = specialRequests
    var object = $window.localStorage.getItem('nodeCopy')
    $scope.html = new DOMParser().parseFromString(object, 'text/html')
    
    $scope.counters = {
        value : 60
    }

    var totalCost = 0;
    var data; var nodeCopy;
    var movable = true;
    var today = {};
    var dataId;

    // function setIdForDayInWeek() {
    //     for (i = 0; i < dayInWeek.length; i++) {
    //     }
    // }

    $scope.counter = function( quantity) {
        return quantity - 1;
    }

    $scope.getDayData = (weekId) => {
        // today = { day: dayInWeek[date.getDay()-1].name, date: date.getdate(), month: date.getmonth() + 1 };
        console.log("started defining someday")
        var someday = {}
        today.date = date.getDate();
        today.weekDay = date.getDay() + 1;
        today.week = 1;
        today.month = date.getMonth() + 1;
        today.year = date.getFullYear();

        for (i = 0; i < dayInWeek.length; i++) {
            if (today.weekDay == dayInWeek[i].id + 1) {
                var a = dayInWeek[i].id
                console.log(document.getElementById(dayInWeek[i].id + 1));;
                someday.date = (weekId - a) + today.date
                someday.weekDay = weekId + 1;
            }
        }

        console.log("today: ", today)
        if (someday.weekDay > 8) {
            someday.week = 2;
            someday.weekDay = someday.weekDay - 7
        }
        else {
            someday.week = 1;
        }
        switch (today.month) {
            case 2:
                if (someday.date == 29 && (today.year % 4 === 0 && today.year % 100 !== 0 && today.year % 400 !== 0) || (today.year % 100 === 0 && today.year % 400 === 0)) {
                    console.log("bbbbb", someday.date)
                    someday.month = today.month;
                    someday.date = 29;
                }

                else if (someday.date > 29 && (today.year % 4 === 0 && today.year % 100 !== 0 && today.year % 400 !== 0) || (today.year % 100 === 0 && today.year % 400 === 0)) {
                    someday.date = someday.date - 29
                    someday.month = today.month + 1;
                    console.log("aaaa")
                }

                else if (someday.date > 28) {
                    someday.date = someday.date - 28
                    someday.month = today.month + 1;
                }
                else if (someday.date <= 28) {
                    someday.month = today.month
                }
                else {
                    alert("no thing")
                }
                someday.year = today.year

                break;
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
                if (someday.date > 31) {
                    someday.date = someday.date - 31
                    someday.month = today.month + 1;
                } else {
                    someday.month = today.month

                }
                someday.year = today.year
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                if (someday.date > 30) {
                    someday.date = someday.date - 30
                    someday.month = today.month + 1;
                } else {
                    someday.month = today.month
                }
                someday.year = today.year
                break;
            case 12:
                if (someday.date > 31) {
                    console.log('hey')
                    someday.date = someday.date - 31
                    someday.month = today.month + 1;
                    someday.year = today.year + 1;
                } else {
                    someday.month = today.month
                    someday.year = today.year
                }
                break;
            default:
                break;
        }
        console.log("someday: ", someday)
    }

    $scope.loadMenuOfDay = (element) => {
        var y = document.getElementById(element);
        $scope.random(suggestedProducts)
        $scope.random(suggestedAddOns)
        for (i = 1; i < y.children.length; i++) {
            nodeCopy = document.getElementById(suggestedProducts[i - 1].id).cloneNode(true);
            nodeCopy1 = document.getElementById(suggestedAddOns[i - 1].id).cloneNode(true);
            if (y.id <= date.getDay()) {
                console.log("xxx") //sua lai cho nay dang bi loi
            }
            else if (y.children[i].children.length < 1) {
                nodeCopy.setAttribute('id', nodeCopy.id + y.children[i].id + y.id)
                nodeCopy1.setAttribute('id', nodeCopy1.id + y.children[i].id + y.id)
                sortDisplay(nodeCopy)
                sortDisplay(nodeCopy1)
                y.children[i].appendChild(nodeCopy)
                y.children[i].appendChild(nodeCopy1)
                nodeCopy.setAttribute('onclick', 'removeTarget(event)');
                nodeCopy1.setAttribute('onclick', 'removeTarget(event)');
                productOrder.push(nodeCopy.id);
                productOrder.push(nodeCopy1.id);
                document.getElementById("pricing").innerHTML = formatter.format(increasePricing(nodeCopy))
                document.getElementById("pricing").innerHTML = formatter.format(increasePricing(nodeCopy1))
            } else {
                console.log("aaaaaaa")
            }

        }
    }

  

    $scope.load = function () {
        // for (i=0; i<dayInWeek.length; i++) {
        //     if ()
        // }
        $scope.random(suggestedProducts)
        $scope.random(suggestedAddOns)
        // sortDisplay(suggestedProducts)
        // sortDisplay(suggestedAddOns)
        if ( today.weekDay == 7 || today.weekDay == 8) {
            console.log("xxx")
        }

        else {
            for (j = 1; j < dayInWeek.length; j++) {
                if (dayInWeek[j].id  == today.weekDay) {
                    var x = dayInWeek[j].id;
                    console.log(x)
                    var y = document.getElementById(dayInWeek[j].id);
                    console.log(y)
                    for (i = 1; i < y.children.length; i++) {
                        nodeCopy = document.getElementById(suggestedProducts[i].id).cloneNode(true);
                        nodeCopy1 = document.getElementById(suggestedAddOns[i].id).cloneNode(true);
                        nodeCopy.setAttribute('id', nodeCopy.id + y.children[i].id + y.id)
                        nodeCopy1.setAttribute('id', nodeCopy1.id + y.children[i].id + y.id)
                        sortDisplay(nodeCopy)
                        sortDisplay(nodeCopy1)
                        y.children[i].appendChild(nodeCopy)
                        y.children[i].appendChild(nodeCopy1)
                        nodeCopy.setAttribute('onclick', 'angular.element(this).scope().removeTarget(event)');
                        nodeCopy1.setAttribute('onclick', 'angular.element(this).scope().removeTarget(event)');
                        productOrder.push(nodeCopy.id);
                        productOrder.push(nodeCopy1.id);
                        document.getElementById("pricing").innerHTML = formatter.format(increasePricing(nodeCopy))
                        document.getElementById("pricing").innerHTML = formatter.format(increasePricing(nodeCopy1))
                    }
                }
            }
        }
    }

    
    $scope.allowDrop = (ev) => {
        ev.preventDefault();
    }


    $scope.dragStart = function (ev) {
        // ev.dataTransfer.setData("object", ev.target.id);
        dataId = ev.target.id
        console.log("start dragging, id: " + ev.target.id + " and id.length: " + ev.target.id.toString().length)
        if (ev.target.id.length <= 3) {
            movable = false;
            console.log(movable)
            console.log("heuz")
        } else {
            movable = true;
            console.log(movable)

        }
    }

    
    $scope.drop = (ev) => {
        ev.preventDefault();
        data = dataId
        if (ev.target.nodeName == "TD" && movable == false) {
            nodeCopy = document.getElementById(data).cloneNode(true);
            nodeCopy.setAttribute('id', data + ev.target.id + ev.target.parentElement.id)

            //run target parent checking

            if (checkConditionOfTargetEle(ev.target.parentElement, ev.target, nodeCopy)) {
                // sortDisplay(nodeCopy)
                ev.target.appendChild(nodeCopy);
                productOrder.push(nodeCopy.id);
                nodeCopy.setAttribute('onclick', 'angular.element(this).scope().removeTarget(event)');
                // console.log(document.getElementById(data).childNodes) 
                document.getElementById("pricing").innerHTML = formatter.format(increasePricing(nodeCopy));
            }
            else {
                alert("no!!!!!")
            }
            console.log("productOrder after drop: " + productOrder + '    product-length: ' + productOrder.length)
        } else if (ev.target.nodeName == "TD" && movable == true) {
            console.log("hey!!! ")
            if (checkConditionOfTargetEle(ev.target.parentElement, ev.target, document.getElementById(data))) {
                ev.target.appendChild(document.getElementById(data));
                removeData(data)
                var newData = document.getElementById(data);
                newData.setAttribute('id', data.substring(0, 3) + ev.target.id + ev.target.parentElement.id)
                productOrder.push(newData.id);
                console.log(productOrder)
            }
        }
        else {
            console.log("not moving !!!: " + ev.target.children.length)
        }
        return productOrder
    }

    // $scope.automaticMenu = (parentEle, childEle) => {
    //     addingElementFromArr(parentEle, childEle)
    //     console.log(parentEle)
    // }

    $scope.dragEnd = (ev) => {
    }

    $scope.removeTarget = function (event) {
        var parentId = event.target.parentElement.id;
        var childId = event.target.id
        var child = document.getElementById(childId)
        console.log(parentId, childId)
        // var child = document.getElementById(id)
        child.parentNode.removeChild(child)
        document.getElementById("pricing").innerHTML = formatter.format(decreasePricing(event.target));
        var index = productOrder.indexOf(child.id)
        console.log(child.id)
        productOrder.splice(index, 1)
        console.log("productOrder after remove: " + productOrder)
    }

    function removeData(element) {
        var index = productOrder.indexOf(element)
        productOrder.splice(index, 1)
    }

    function checkIfEleExist(array, element) {
        for (i = 0; i < array.length; i++) {
            if (array[i].id.substring(0, 2) == element.id.substring(0, 2)) {
                return true;
            }
        }
        return false;
    }


    function increasePricing(element) {
        var cost = parseInt(element.getAttribute("value"));
        totalCost = totalCost + cost;
        return totalCost;
    }

    function decreasePricing(element) {
        var cost = parseInt(element.getAttribute("value"));
        totalCost = totalCost - cost;
        return totalCost;
    }


    function checkConditionOfTargetEle(parentEle, targetEle, childEle) {

        // if (parseInt(parentEle.id) <= date.getDay()) {
        //     console.log(parentEle.id, date.getDay())
        //     return false;
        // }
        if (childEle.id.substring(0, 2) == "rq" && targetEle.children.length == 0) {
            return true;
        }
        else if (targetEle.children.length == 0) {
            return true;
        }
        else if (targetEle.children.length >= 1 && checkIfEleExist(targetEle.children, childEle)) {
            return false;
        } else if (childEle.id.substring(0, 2) == "rq" && targetEle.children.length >= 1 && checkIfEleExist(targetEle.children, childEle) == false) {
            alert("this is for request")
            return true;
        }
        else {
            return true;
        }
    }
    // && data.toString().length < 6
    // && ev.target.nodeName != "SPAN"
    // parentEle.children[0].id.substring(0, 2) == childEle.id.substring(0, 2)


    $scope.test = () => {
        console.log("test")
    }

    $scope.switchItemShow = (target) => {
        switch (target) {
            case 1:
                $scope.showProductItem = "products"
                break;
            case 2:
                $scope.showProductItem = "addOns"
                break;
            case 3:
                $scope.showProductItem = "juices"
                break;
            case 4:
                $scope.showProductItem = 'specialRequest'
                break;
            default:
                target = 1;
                $scope.showProductItem = "products"
                break;
        }
    }

    $scope.switchWeekShow = (target) => {
        switch (target) {
            case 1:
                $scope.week = 1
                $scope.showWeek = "thisWeek"
                console.log("this week")
                break;
            case 2:
                $scope.week = 2
                $scope.showWeek = "nextWeek"
                console.log("next week")
                break;
            default:
                break;
        }

    }

    function sortDisplay(targetEle) {

        if (targetEle.id.substring(0, 2) == "ao") {
            targetEle.style.backgroundColor = "olivedrab";
            targetEle.style.width = "45%";
            targetEle.style.height = "20px"

        } else if (targetEle.id.substring(0, 2) == "ju") {
            targetEle.style.backgroundColor = "yellow"
            targetEle.style.width = "45%"
            targetEle.style.height = "20px"

        } else if (targetEle.id.substring(0, 2) == "pd") {
            targetEle.style.backgroundColor = "brown"
            targetEle.style.width = "95%"
            targetEle.style.height = "20px"

            // document.getElementById(parentArray[i].id).style.float = "left";
        } else if (targetEle.id.substring(0, 2) == "rq") {
            targetEle.style.backgroundColor = "black"
            targetEle.style.width = "21%"
        }

        return targetEle
    }


    $scope.random = (array) => {
        var m = array.length, t, i;

        // While there remain elements to shuffle
        while (m) {
            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);

            // And swap it with the current element.
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }
        return array;
    }

    $scope.test = () => {
        alert('abc')
    }

    // $scope.sendOrder = () => {
    //     console.log($scope.productOrder)

    // }

}])