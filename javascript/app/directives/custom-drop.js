goodFood.directive('customDrop', function () {
    return {
        restrict: 'EA',
        scope: {
            myDrop: '&ctDrop',
            myDragOver: '&ctDragover',
        },

        link: function (scope, element, attrs) {



            element.on('drop', function (evt) {
                scope.myDrop({ event: evt });
            });

            element.on('dragover', function (evt) {
                scope.myDragOver({ event: evt });
            });



        }
    }

})