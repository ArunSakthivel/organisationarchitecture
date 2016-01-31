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
app.controller("employee",function($scope,$http){
    $http.get('/employee_detail').then(
        function(response){ 
            $scope.allemployees = response.data; 
        }
    );
});




