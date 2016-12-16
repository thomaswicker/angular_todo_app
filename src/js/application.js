var app = angular.module('todoApp', []);

app.controller('ToDoCtrl', ['$scope', function($scope, $http) {
    $scope.tasklist = [];

    $scope.enterTask = function() {
      if(event.keyCode == 13 && $scope.taskName) {
        $scope.tasklist.push({"name": $scope.taskName, "completed": false});
        $scope.taskName = "";
      }
    }

    $scope.addTask = function() {
      if($scope.taskName) {
        $scope.tasklist.push({"name": $scope.taskName, "completed": false});
        $scope.taskName = "";
      }
    }

    $scope.deleteTask = function(index) {
        $scope.tasklist.splice(index, 1);
    }
}])
