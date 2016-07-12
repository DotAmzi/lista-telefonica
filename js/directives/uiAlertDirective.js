angular.module("listaTelefonica").directive("uiAlert", function(){
	return{
		templateUrl: "view/alert.html",
		replace: true,
		restricted: "AE",
		scope: {
			topic: "@title"
		},
		transclude: true
	};
});
