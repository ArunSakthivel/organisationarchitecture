var app = angular.module('employdirectory',[]);
app.directive('orgCharts',function($compile){
  return {
    restrict:'E',
        replace: true,
    scope:  {
      chartsData: '='
     },
     templateUrl: 'tree.html',    
    link: function(scope,ele,attrs){
            
    }
  }
});
app.directive('childTree',function(){
  return{
    restrict:'E',
        controller: 'childTreeController',
    scope:{
      childtree: '='
    },
        templateUrl: 'childTree.html',
    link: function(scope,ele,attrs){
                 
    }
  }
});
app.controller('childTreeController',function($scope,$rootScope,$parse){
     $scope.expandFunction = function(event,emp){
    if(event.target.className.indexOf("expandimgPlus") > -1)  {
      emp.isVisibleChild = true;
            var obj = $parse(event.target.getAttribute('isvisiblec'));
            event.target.className = "ng-scope expandimgMinus"
    }
    else{
      emp.isVisibleChild = false;
      event.target.className = "ng-scope expandimgPlus";
    }
      
  }
    
});
app.directive('insertUl',function($compile){
  return{
    restrict:'E',
        controller: 'ultreeController',
    scope:{
      myTree: '=',
      level: '=',
            empid: '=',
    },
        link: function(scope,ele,attrs){
            if(scope.level != undefined)
                templ = '<ul ng-show="level"><child-tree childtree="myTree"></child-tree></ul>';
            else
                templ = '<ul class="parentTree"><child-tree childtree="myTree" level="level"></child-tree></ul>';
            $compile(templ)(scope,function(cloned, scope,attrs){
                ele.append(cloned);
            });
      
    }
  }
});
app.controller("ultreeController",function($scope,$parse,$rootScope){
    
});
app.controller("employee",function($scope){
    $scope.allemployees =  [
    {
        "empDetails": {
            "name": "vinyak",
            "dob": "22-5-1884",
            "yearofexpirence": "12",
            "pic": "men.jpg",
            "isVisibleChild":  true,
            "empId":"emp1",
            "child": [
                {
                    "empDetails": {
                        "name": "Karthik",
                        "dob": "01-05-1990",
                        "yearofexpirence": "10",
                        "pic": "karthik.jpg",
                        "isVisibleChild": true,
                         "empId":"emp2",
                        "child": [
                            {
                                "empDetails": {
                                    "name": "kotee",
                                    "dob": "01-05-1990",
                                    "yearofexpirence": "8",
                                    "pic": "kotee.jpg",
                                    "isVisibleChild": false,
                                     "empId":"emp3",
                                    "child": []
                                }
                            }
                        ]
                    }
                },
                {
                    "empDetails": {
                        "name": "vinoth",
                        "dob": "01-05-1990",
                        "yearofexpirence": "10",
                        "pic": "vinoth.jpg",
                        "isVisibleChild": false,
                         "empId":"emp4",
                        "child": [
                            {
                                "empDetails": {
                                    "name": "Julie",
                                    "dob": "01-05-1990",
                                    "yearofexpirence": "8",
                                    "pic": "Julie_Taylor50.jpg",
                                    "isVisibleChild": false,
                                     "empId":"emp5",
                                    "child": []
                                }
                            },
                            {
                                "empDetails": {
                                    "name": "venkat",
                                    "dob": "01-05-1990",
                                    "yearofexpirence": "8",
                                    "pic": "venkat.jpg",
                                    "isVisibleChild": false,
                                     "empId":"emp6",
                                    "child": [
                                        {
                                            "empDetails": {
                                                "name": "Paul Gates",
                                                "dob": "01-05-1990",
                                                "yearofexpirence": "8",
                                                "pic": "Paula_Gates50.jpg",
                                                "isVisibleChild": false,
                                                 "empId":"emp7",
                                                "child": [
                                                    {
                                                        "empDetails": {
                                                            "name": "James King",
                                                            "dob": "01-05-1990",
                                                            "yearofexpirence": "8",
                                                            "isVisibleChild": false,
                                                            "pic": "James_King50.jpg",
                                                             "empId":"emp8",
                                                            "child": []
                                                        }
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "empDetails": {
                                                "name": "Eugene Lee",
                                                "dob": "01-05-1990",
                                                "yearofexpirence": "8",
                                                "isVisibleChild": false,
                                                "pic": "Eugene_Lee50.jpg",
                                                 "empId":"emp9",
                                                "child": []
                                            }
                                        },
                                        {
                                            "empDetails": {
                                                "name": "Amy Jones",
                                                "dob": "01-05-1990",
                                                "yearofexpirence": "8",
                                                "pic": "Amy_Jones50.jpg",
                                                "isVisibleChild": false,
                                                 "empId":"emp10",
                                                "child": []
                                            }
                                        }
                                    ]
                                }
                            },
                            {
                                "empDetails": {
                                    "name": "Steven Wells",
                                    "dob": "01-05-1990",
                                    "yearofexpirence": "8",
                                    "pic": "Steven_Wells50.jpg",
                                    "isVisibleChild": false,
                                     "empId":"emp11",
                                    "child": []
                                }
                            }
                        ]
                    }
                }
            ]
        }
    }
];
});




