var app = angular.module('employDirectory',[]);

app.controller("employee",function($scope){
	
	/*$scope.allemployees = [
	{"empDetails:"[
		{"name":"vinyak","dob":"22-5-1884","yearofexpirence":"12","pic":"vinyak.jpg","child":[
		{"empDetails":[{"name":"Karthik","dob":"01-05-1990","yearofexpirence":"10","pic":"karthik.jpg","child":[{"empDetails":[{"name":"kotee","dob":"01-05-1990","yearofexpirence":"8","pic":"kotee.jpg","child":[]}]}]}]}
		
		]}
	]}
	];*/
	$scope.level1 = false;
	$scope.level12 = false;
	$scope.expandFunction = function(event,ele){
		console.log(event);
		if(event.target.className =="expandimgPlus")	{
			$scope[ele] =true;
			event.target.className = "expandimgMinus"
		}
		else{
			$scope[ele] = false;
			event.target.className = "expandimgPlus";
		}
	}
});