angular.module('rtfmApp').service('userService', function($firebaseAuth, fb, $location){

    //Todo: don't hardcode this
    var user = {
        name: ''
    };

    this.getLoggedInUser = function(){
        return user;
    }

    this.loginWithGoogle = function(){
    	var ref = new Firebase(fb.url);
		var authObj = $firebaseAuth(ref);
    	authObj.$authWithOAuthPopup("google").then(function(authData) {
    	user.name = authData.google.displayName;
    	$location.path('main');	
		}).catch(function(error) {
		  console.error("Authentication failed:", error);
		});
    }

    this.logOut = function(){
    	var ref = new Firebase(fb.url);
        var authObj = $firebaseAuth(ref);
        authObj.$unauth();
        $location.path('login');
    }
});