var app = angular.module('organization',[]);

app.controller("divison",function($scope){
	$scope.organizationData ={"level1":[{"title":"Director","hovertext":"director section","empDetail":{"Name":"Vinayak","TotalEXP":"20","DOB":"22/5/1981","gender":"Male"},
	"Subdepartment":[{"title":"Assistante Directo","hovertext":"assistante director","empDetail":{"Name":"Vinoth","TotalEXP":"10","DOB":"22/5/1985","gender":"Male"}},
	{"title":"Administration","hovertext":"admin dept","empDetail":{"Name":"Karthik Shanmugam","TotalEXP":"10","DOB":"22/5/1985","gender":"Male"},"subdepartment":
		[{
			"title": "Plweb Team",
			"class":"dep-a",
			"hovertext": "Plweb Team, Lead by Jhanavi",
			"empDetail":{"Name":"Jhanavi chenathipathi","TotalEXP":12,"DOB":"22/5/1982","gender":"Female"},
			"Subdepartment":[{"title": "Sach","hovertext":"salesforce developer","empDetail":{"Name":"Sachinatham kumarakurupan","TotalEXP":"8","DOB":"22/5/1985","gender":"Male"}},
			{"title": "Koteeswaran","hovertext":"UI Developer","empDetail":{"Name":"Koteeswaran Ramachandran","TotalEXP":"6","DOB":"22/5/1984","gender":"Male"}},
			{"title": "Sidharaj sawminathan","hovertext":"UI Developer","empDetail":{"Name":"Sidharaj Swaminathan","TotalEXP":"4","DOB":"10/8/1985","gender":"Male"}},
			{"title": "Vijay prakash","hovertext":"Deployment Manager","empDetail":{"Name":"Vijay prakash periyakonda","TotalEXP":"4","DOB":"21/7/1987","gender":"Male"}},
			{"title": "Grish","hovertext":"Business analysist","empDetail":{"Name":"Grish Revendar","TotalEXP":"10","DOB":"22/5/1983","gender":"Male"}}]
		},
		{
			"title": "Kewit Team",
			"class":"dep-b",
			"hovertext": "Kewit Team, lead by Dinesh",
			"empDetail":{"Name":"Dinesh kumar","TotalEXP":15,"DOB":"22/5/1981","gender":"Male"},
			"Subdepartment":[{"title": "Varun","hovertext":"Ui developer","empDetail":{"Name":"Sachinatham kumarakurupan","TotalEXP":10,"DOB":"22/5/1985","gender":"Male"}},
			{"title": "Gopinath srinivasan","hovertext":"dotnet developer","empDetail":{"Name":"Sachinatham kumarakurupan","TotalEXP":10,"DOB":"22/5/1985","gender":"Male"}},
			{"title": "Rajeeve seaker","hovertext":"Senior dot net developer","empDetail":{"Name":"Sachinatham kumarakurupan","TotalEXP":10,"DOB":"22/5/1985","gender":"Male"}},
			{"title": "Jaya loganathan","hovertext":"UI Developer","empDetail":{"Name":"Sachinatham kumarakurupan","TotalEXP":10,"DOB":"22/5/1985","gender":"Female"}}]
		},
		{
			"title": "Sector C",
			"class":"dep-c",
			"hovertext": "Department a hover text",
			"empDetail":{"Name":"Sachinatham kumarakurupan","TotalEXP":10,"DOB":"22/5/1985"},
			"Subdepartment":[{"title": "sector C1","hovertext":"sector C1 Employee","empDetail":{"Name":"Sachinatham kumarakurupan","TotalEXP":10,"DOB":"22/5/1985","gender":"Male"}},
			{"title": "sector C2","hovertext":"sector C2 Employee","empDetail":{"Name":"Sachinatham kumarakurupan","TotalEXP":10,"DOB":"22/5/1985","gender":"Male"}},
			{"title": "sector C3","hovertext":"sector C3 Employee","empDetail":{"Name":"Sachinatham kumarakurupan","TotalEXP":10,"DOB":"22/5/1985","gender":"Male"}},
			{"title": "sector C4","hovertext":"sector C4 Employee","empDetail":{"Name":"Sachinatham kumarakurupan","TotalEXP":10,"DOB":"22/5/1985","gender":"Male"}}]
		},
		{
			"title": "Sector D",
			"class":"dep-d",
			"hovertext": "Department D hover text",
			"empDetail":{"Name":"Sachinatham kumarakurupan","TotalEXP":10,"DOB":"22/5/1985","gender":"Male"},
			"Subdepartment":[{"title": "sector D1","hovertext":"sector D1 Employee","empDetail":{"Name":"Sachinatham kumarakurupan","TotalEXP":10,"DOB":"22/5/1985","gender":"Male"}},
			{"title": "sector D2","hovertext":"sector D2 Employee","empDetail":{"Name":"Sachinatham kumarakurupan","TotalEXP":10,"DOB":"22/5/1985","gender":"Male"}},
			{"title": "sector D3","hovertext":"sector D3 Employee","empDetail":{"Name":"Sachinatham kumarakurupan","TotalEXP":10,"DOB":"22/5/1985","gender":"Male"}},
			{"title": "sector D4","hovertext":"sector D4 Employee","empDetail":{"Name":"Sachinatham kumarakurupan","TotalEXP":10,"DOB":"22/5/1985","gender":"Male"}}]
		},
		{
			"title": "Sector E",
			"class":"dep-e",
			"hovertext": "Department E hover text",
			"empDetail":{"Name":"Sachinatham kumarakurupan","TotalEXP":10,"DOB":"22/5/1985","gender":"Male"},
			"Subdepartment":[{"title": "sector E1","hovertext":"sector E1 Employee","empDetail":{"Name":"Sachinatham kumarakurupan","TotalEXP":10,"DOB":"22/5/1985","gender":"Male"}},
			{"title": "sector E2","hovertext":"sector E2 Employee","empDetail":{"Name":"Sachinatham kumarakurupan","TotalEXP":10,"DOB":"22/5/1985","gender":"Male"}},
			{"title": "sector E3","hovertext":"sector E3 Employee","empDetail":{"Name":"Sachinatham kumarakurupan","TotalEXP":10,"DOB":"22/5/1985","gender":"Male"}},
			{"title": "sector E4","hovertext":"sector E4 Employee","empDetail":{"Name":"Sachinatham kumarakurupan","TotalEXP":10,"DOB":"22/5/1985","gender":"Male"}}]
		}]
		}]
	}]

		};
		
		$scope.ChartPage = true;
		$scope.detailPage = false;
	$scope.divClick = function(empDetails,$event){
		$event.stopPropagation();
		$scope.ChartPage = false;
		$scope.detailPage = true;
		$scope.empDetails = empDetails;
	}
	$scope.goback = function(){
		$scope.ChartPage = true;
		$scope.detailPage = false;
	}
	console.log($scope.organizationData);
});