app.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'js/home/home.html',
        controller: 'HomeController'
    });
});


app.controller('HomeController', function($scope, $state) {
	$scope.goToState = function(state) {
		$state.go(state);
	};
});

