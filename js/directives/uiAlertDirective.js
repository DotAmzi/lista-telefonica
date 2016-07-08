angular.module("listaTelefonica").directive("uiAlert", function(){
	return{
		templateUrl: "view/alert.html",
		replace: true,
		restricted: "EA",
		scope: {
			topic: "@title"
		},
		transclude: true
	};
});