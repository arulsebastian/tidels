'use strict';

/* Controllers */




angular 
.module('myApp.controllers', [])
.controller('myCtrl', ['$scope', 'fileUpload', function($scope, fileUpload){
    
    $scope.uploadFile = function(){
        var file = $scope.myFile;
        console.log('file is ' + JSON.stringify(file));
        var uploadUrl = "#/file-upload";
        fileUpload.uploadFileToUrl(file, uploadUrl);
    };
    
}]);

angular 
.module('myApp.controllers')
.controller('categoriesCtrl', ['$scope', function($scope){
	window.dispatchEvent(new Event('resize'));
}]);

angular 	
.module('myApp.controllers')
.controller('courseCtrl', ['$scope', 'fileUpload', function($scope, fileUpload){
}]);

angular 
.module('myApp.controllers')
.controller('quizCtrl', ['$scope', 'fileUpload', function($scope, fileUpload){	
}]);


angular 
.module('myApp.controllers')
.controller('TestCntl', ['$scope', '$window', function ($scope, $window) {
}]);


angular 
.module('myApp.controllers')
.controller('DotsCtrl', ['$scope', '$http', function ($scope, $http) {
	$scope.correct_answer='';
	
	 $scope.$on('$viewContentLoaded', function(){
         // Replace the <textarea id="editor1"> with a CKEditor
         // instance, using default configuration.
         CKEDITOR.replace( 'editor1');
	  });
	
	function getValue(){
        var div = document.getElementById("answer");
        var childNodes = div.childNodes;
        var innerHtml = "";
        for (var i = 0; i < childNodes.length; i++) {
//        	alert(i);
            var node = childNodes[i];
            if (node.nodeType == 1) {
                if (node.getAttribute("type") == "text") {
                    innerHtml += node.value;
                } else if (node.getAttribute("type") == "checkbox") {
                    innerHtml += (node.checked? node.value: "");
                } else if (node.type == "select-one") {
                    innerHtml += node.value;
                } else if (node.type == "select-multiple") {
                    innerHtml += node.value;
                } else if (node.getAttribute("type") == "radio") {
                    innerHtml += (node.checked? node.value: "");
                }
            }
        }
        return innerHtml;
	}
	
	$scope.saveAnswer = function(){
		$scope.correct_answer = getValue();
	}
	$scope.submitAnser = function(){
		$scope.answer = getValue();
		$scope.bool = angular.equals($scope.answer, $scope.correct_answer);
//		alert($scope.answer);
//		alert($scope.correct_answer);
		alert($scope.bool);
	}
	
	$scope.saveEditor = function(){
		var str = CKEDITOR.instances.editor1.getData();
		str = "<div id='answer'>"+str+"</div>";

		document.getElementById("question").innerHTML = str;
	}
}]);

angular 
.module('myApp.controllers')
.controller('HomeCtrl', ['$scope', '$log', '$modal', function ($scope, $log, $modal) {

	window.dispatchEvent(new Event('resize'));
	
	$scope.items = ['Student', 'Parent', 'Teacher'];

	  $scope.animationsEnabled = true;

	  $scope.open = function (size) {

	    var modalInstance = $modal.open({
	      animation: $scope.animationsEnabled,
	      templateUrl: 'myModalContent.html',
	      controller: 'ModalInstanceCtrl',
	      backdrop: 'static',
	      size: size,
	      resolve: {
	        items: function () {
	          return $scope.items;
	        }
	      }
	    });

	    modalInstance.result.then(function (selectedItem) {
	      $scope.selected = selectedItem;
	    }, function () {
	      $log.info('Modal dismissed at: ' + new Date());
	    });
	  };

	  $scope.toggleAnimation = function () {
	    $scope.animationsEnabled = !$scope.animationsEnabled;
	  };

	
}]);

angular 
.module('myApp.controllers')
.controller('ModalInstanceCtrl', ['$scope', '$modalInstance', 'items', function ($scope, $modalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
}]);

angular 
.module('myApp.controllers')
.controller('LoginCtrl', [ '$scope', 'user','$rootScope',  '$log', '$modal', function($scope, user, $rootScope, $log, $modal) {
			$scope.change_logintype = function() {
				$scope.person_type = document.getElementByName("person_type").value;
			}

			  $scope.items = ['Student', 'Parent', 'Teacher'];

			  $scope.animationsEnabled = true;

			  function open_modal(size) {
			
			    var modalInstance = $modal.open({
			      animation: $scope.animationsEnabled,
			      templateUrl: 'myModalContent.html',
			      controller: 'ModalInstanceCtrl',
			      backdrop: 'static',
			      size: size,
			      resolve: {
			        items: function () {
			          return $scope.items;
			        }
			      }
			    });

			    modalInstance.result.then(function (selectedItem) {
			      $scope.selected = selectedItem;
			    }, function () {
			      $log.info('Modal dismissed at: ' + new Date());
			    });
			  };

			  $scope.toggleAnimation = function () {
			    $scope.animationsEnabled = !$scope.animationsEnabled;
			  };

			  $rootScope.$on('user.login', function() {
				
				    open_modal('sm');
				});			
			  
			

		}]);

angular 
.module('myApp.controllers')
		.controller('LoginOptionsCtrl', [ '$scope', 'user', function($scope, user) {
			$scope.change_logintype = function() {
				$scope.person_type = document.getElementsByName("person_type");
				window.location = "#/home";
			}
		}]);

angular 
.module('myApp.controllers')
		.controller('UserProfileCtrl', [ '$scope', 'user', '$http', '$interval', function($scope, user, $http, $interval) {
			

			
			$scope.myData = [
				    {
				        "firstName": "Cox",
				        "lastName": "Carney",
				        "company": "Enormo",
				        "employed": true
				    },
				    {
				        "firstName": "Lorraine",
				        "lastName": "Wise",
				        "company": "Comveyer",
				        "employed": false
				    },
				    {
				        "firstName": "Nancy",
				        "lastName": "Waters",
				        "company": "Fuelton",
				        "employed": false
				    }
				];
			
				  function onTabSelect() {
					  alert('test');
					  $('.grid-container').trigger('resize');
					}
				  
				  $scope.gridOptions = {
					        data: 'myData',
					        init:function(grid,$scope) {
					            setTimeout(function() {
					                $scope.gridOptions.$gridServices.DomUtilityService.RebuildGrid(
					                    $scope.gridOptions.$gridScope,
					                    $scope.gridOptions.ngGrid
					                );
					            },1000);
					        },
					        onRegisterApi: function (gridApi) {
					            $scope.gridApi = gridApi;
					       
					            // call resize every 200 ms for 2 s after modal finishes opening - usually only necessary on a bootstrap modal
					            $interval( function() {
					              $scope.gridApi.core.handleWindowResize();
					            }, 10, 500);
					            }
					    };
			
			
			$scope.tabs = [
			                 { title:'Dynamic Title 1', content:'Dynamic content 1' },
			                 { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
			               ];

			               $scope.alertMe = function() {

								  document.getElementById('tab1').trigger('resize');
			               };	
			               
			user.getCurrent().then(function(currentUser) {
				console.log(currentUser.user_id);
				$scope.user = currentUser;
			});


			$scope.userDisabled = true;
			
			$scope.editUser = function() {
				$scope.userDisabled = false;
			};

			$scope.saveUser = function() {

				UserApp.User.save({
					"user_id" : "self",
					"first_name" : document.getElementById("first_name").value,
					"last_name" : document.getElementById("last_name").value,
					"email" : document.getElementById("login").value,
					properties : {
						street1 : {
							value : document.getElementById("street1").value,
							override : true
						},
						street2 : {
							value : document.getElementById("street2").value,
							override : true
						},
						city : {
							value : document.getElementById("city").value,
							override : true
						},
						state : {
							value : document.getElementById("state").value,
							override : true
						},
						country : {
							value : document.getElementById("country").value,
							override : true
						},
						zipcode : {
							value : document.getElementById("zipcode").value,
							override : true
						},
						age : {
							value : document.getElementById("age").value,
							override : true
						},
						gender : {
							value : document.getElementById("gender").value,
							override : true
						},
						qualification : {
							value : document.getElementById("qualification").value,
							override : true
						},
						is_teacher : {
							value : document.getElementById("is_teacher").value,
							override : true
						},
						teaching_subjects : {
							value : document.getElementById("teaching_subjects").value,
							override : true
						},
						teaching_qualification : {
							value : document.getElementById("teaching_qualification").value,
							override : true
						},
						students : {
							value : document.getElementById("students").value,
							override : true
						},
						is_student : {
							value : document.getElementById("is_student").value,
							override : true
						},
						learning_subjects : {
							value : document.getElementById("learning_subjects").value,
							override : true
						},
						learning_qualifications : {
							value : document.getElementById("learning_qualifications").value,
							override : true
						},
						teachers : {
							value : document.getElementById("teachers").value,
							override : true
						},
						
						}
					
				})
			}
		} ]);

angular 
.module('myApp.controllers')
		.controller(
				'ArticlesCtrl',
				[
						'$scope',
						'$http',
						function($scope, $http) {
							$scope.loading = true;
							$scope.error = null;

							// Call the back-end API which will be authenticated
							// using our session token
							$http({
								method : 'GET',
								url : '/articles'
							})
									.success(
											function(data, status, headers,
													config) {
												// The API call to the back-end
												// was successful (i.e. a valid
												// session)
												$scope.articles = data;
												$scope.loading = false;
											})
									.error(
											function(data, status, headers,
													config) {
												$scope.error = {
													message : "The API call to the back-end was not successful. Make sure that your back-end verifies the token.",
													link : "https://app.userapp.io/#/docs/libs/angularjs/#back-end"
												};
												$scope.loading = false;
											});
						} ]);
