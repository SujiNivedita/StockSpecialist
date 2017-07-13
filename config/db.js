module.exports = {
    url : 'mongodb://localhost/stencil-dev'
}
// test

// JavaScript Document
var app = angular.module('app',[]);
app.controller('autoCompleteCTRL', function($scope, $scope){
	$scope.searchItems = [
		  "ActionScript",
		  "AppleScript",
		  "Asp",
		  "BASIC",
		  "C",
		  "C++",
		  "Clojure",
		  "COBOL",
		  "ColdFusion",
		  "Erlang",
		  "Fortran",
		  "Groovy",
		  "Haskell",
		  "Java",
		  "JavaScript",
		  "Lisp",
		  "Perl",
		  "PHP",
		  "Python",
		  "Ruby",
		  "Scala",
		  "Scheme"
	];
	
	//Sort Array
	$scope.searchItems.sort();
	//Define Suggestions List
	$scope.suggestions = [];
	//Define Selected Suggestion Item
	$scope.selectedIndex = -1;
	
	//Function To Call On ng-change
	$scope.search = function(){
		$scope.suggestions = [];
		var myMaxSuggestionListLength = 0;
		/* for(var i=0; i<$scope.searchItems.length; i++){
			var searchItemsSmallLetters = angular.lowercase($scope.searchItems[i]);
			var searchTextSmallLetters = angular.lowercase($scope.searchText);
			if( searchItemsSmallLetters.indexOf(searchTextSmallLetters) !== -1){
				$scope.suggestions.push(searchItemsSmallLetters);
				myMaxSuggestionListLength += 1;
				if(myMaxSuggestionListLength == 5){
					break;
				}
			}
		} */
		$scope.suggestions=$scope.searchItems.filter(function(item){
			if(angular.lowercase(item)[0] === angular.lowercase($scope.searchText)[0])
				return item;
		})
	}
	
	//Keep Track Of Search Text Value During The Selection From The Suggestions List  
	$scope.$watch('selectedIndex',function(val){
		if(val !== -1) {
			$scope.searchText = $scope.suggestions[$scope.selectedIndex];
		}
	});
	
	
	//Text Field Events
	//Function To Call on ng-keydown
	$scope.checkKeyDown = function(event){
		if(event.keyCode === 40){//down key, increment selectedIndex
			event.preventDefault();
			if($scope.selectedIndex+1 !== $scope.suggestions.length){
				$scope.selectedIndex++;
			}
		}else if(event.keyCode === 38){ //up key, decrement selectedIndex
			event.preventDefault();
			if($scope.selectedIndex-1 !== -1){
				$scope.selectedIndex--;
			}
		}else if(event.keyCode === 13){ //enter key, empty suggestions array
			event.preventDefault();
			$scope.suggestions = [];
		}
	}
	//Function To Call on ng-keyup
	$scope.checkKeyUp = function(event){ 
		if(event.keyCode !== 8 || event.keyCode !== 46){//delete or backspace
			if($scope.searchText == ""){
				$scope.suggestions = [];
			}
		}
	}
	//======================================
	
	//List Item Events
	//Function To Call on ng-click
	$scope.AssignValueAndHide = function(index){
		 $scope.searchText = $scope.suggestions[index];
		 $scope.suggestions=[];
	}
	//======================================
	
});