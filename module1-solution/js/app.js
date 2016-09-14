(function() {
    'use strict';
    angular.module('LunchCheck', [])
        .controller("LunchCheckController", LunchCheckController);
    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
    	$scope.message = "";
    	$scope.lunchCheck = function() {
    		var arrayOfLength;
    		if($scope.menu === undefined) {
    			$scope.message = "Please enter data first";
    			$scope.color = "red";
    			return;
    		}
    		arrayOfLength = slitString($scope.menu, ",").length;
    		if (arrayOfLength === 0) {
    			$scope.message = "Please enter data first";
    			$scope.color = "red";
    		} else if (arrayOfLength < 3 && arrayOfLength > 0) {
    			$scope.message = "Enjoy!";
    			$scope.color = "green";
    		} else {
    			$scope.message = "Too much!";
    			$scope.color = "green";
    		}
    	};

    	$scope.sayMessage = function() {
    		return $scope.message;
    	};
    }
    function slitString(str, separator) {
    	var arrayStr = str.split(separator);
    	return arrayStr.filter(function(str) {
    		return /\S/.test(str);
    	});
    }

})();
