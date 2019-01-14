goodFood.directive('customDraggable', function () {
    return {
        restrict: 'EA',
        scope: {
            myDrop: '&ctDrop',
            myDragOver: '&ctDragover',
            myDragStart: '&ctDragstart',
            myDragEnd: '&ctDragend',
  
        },

        link: function (scope, element, attrs) {
    
            element.on('dragstart', function (evt) {
                scope.myDragStart({ event: evt });
            });

            element.on('drop', function (evt) {
                scope.myDrop({ event: evt });
            });

            element.on('dragover', function (evt) {
                scope.myDragOver({ event: evt });
            });

            element.on('dragend', function (evt) {
                scope.myDragEnd({ event: evt });
            });

        }

    };
});





