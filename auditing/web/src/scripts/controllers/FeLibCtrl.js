/*
 ''''''''''''''''''''''''''''''''''''''''''''''''''''''''
'' File Code        :   feLibCtrl.js
'' Program Version  :   1.0
'' Copyright        :   All rights reserved by TEAMS Software Unit Trust ABN 94 880 188 637, Australia. 
'' Creation Date    :   28-April-2017
'' Modification Date:   
'' Purpose          :   
''                  :   
''                  :   
'' Quality Improvement Log
''------------------------
'' QIS NO.   Date      Release    Initials    Description
''------------------------------------------------------------------------------
''     
'' Notes: 
''
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''*/

app.controller('Teams_v2Ctrl', 
    ['$scope','apiBase', '$timeout', 'toastr', '$rootScope',
    '$state','$location','localStorageService', 'helpLinks',
    '$timeout', '$translate',
	function ($scope,apiBase, $timeout, toastr, $rootScope,
        $state,$location,localStorageService, helpLinks,
        $timeout, $translate) {

	///////////// Start Initializing section ////////////////
    var vm = this;
    $scope.menuCollapsed = true;
    $rootScope.helpCLinks = helpLinks;
    
    ///////////// End Initializing section ////////////////
    
     if(!io.socket){
         io.socket = io.sails.connect('http://localhost:1337');
        
         io.socket.on('connect', function onConnect () {
           console.log("Socket connected!");
         });

        io.socket.get(apiBase + 'Alerts', function gotResponse(data, jwRes) {
            console.log('Server responded with status code ' + jwRes.statusCode + ' and data: ', data);
        });         

        io.socket.on('getAcademicStaff', function(response){
            console.log('Academic Staff : ' + response.StaffName + ' fetched from the system');
        })        

    //     $rootScope.teamsSocket.get(apiBase + 'Alerts', function gotResponse(data, jwRes) {
    //          console.log('Server responded with status code ' + jwRes.statusCode + ' and data: ', data);
    //     });         
    }

        // var shepherd;
        // shepherd = new Shepherd.Tour({
        //   defaults: {
        //     classes: 'shepherd-element shepherd-open shepherd-theme-arrows',
        //     showCancelLink: true
        //   }
        // });       

        // var setupShepherd = function() {
        //     shepherd.addStep('step1', {
        //       text: ['Agent Entry - Different tabs to enter general information for agent like details, contact information etc. .'],
        //       attachTo: '#tour-step-1 bottom',
        //       classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
        //       buttons: [
        //         {
        //           text: 'Exit',
        //           classes: 'shepherd-button-secondary',
        //           action: shepherd.cancel
        //         }, {
        //           text: 'Next',
        //           action: shepherd.next,
        //           classes: 'shepherd-button-example-primary'
        //         }
        //       ]
        //     });
        //     shepherd.addStep('step2', {
        //       text: ['Click on the flyout to open Menus which will lead you to different screens.'],
        //       attachTo: '#tour-step-2 bottom',
        //       classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
        //       buttons: [
        //         {
        //           text: 'Exit',
        //           classes: 'shepherd-button-secondary',
        //           action: shepherd.cancel
        //         }, {
        //           text: 'Next',
        //           action: shepherd.next,
        //           classes: 'shepherd-button-example-primary'
        //         }
        //       ]
        //     });
        //     shepherd.addStep('step3', {
        //       text: ['Click on the flyout to open Menus which will lead you to different screens.'],
        //       attachTo: '#tour-step-3 left',
        //       classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
        //       buttons: [
        //         {
        //           text: 'Exit',
        //           classes: 'shepherd-button-secondary',
        //           action: shepherd.cancel
        //         }, {
        //           text: 'Next',
        //           action: shepherd.next,
        //           classes: 'shepherd-button-example-primary'
        //         }
        //       ]
        //     });

        //     return shepherd.start();            
        //   };    




    //$timeout(function(){
    // $rootScope.$watch("teamsSocket", function (newValue, oldValue) {
    //     if(newValue !== oldValue)
    //         debugger;        
    // });

    // $rootScope.teamsSocket.get(apiBase + 'Alerts', function gotResponse(data, jwRes) {
    //     console.log('Server responded with status code ' + jwRes.statusCode + ' and data: ', data);
    // });         

    


    //method for GET the Logos 
    $scope.GetImageUrl = function (id, logoPath) {
        return apiBase + 'Documents/' + id;
    }

    //Set the Logo in Root Scope
    $rootScope.logoPath = apiBase + 'Documents/';

    $scope.$watch("save", function (newValue) {
        if (newValue !== undefined) {
            $rootScope.canSave = true;            
        }
    });

    $scope.$watch("back", function (newValue) {     
        if($rootScope.showBack){
            $rootScope.backLabel = $translate.instant("GlobalObjects.btnBack");
        }
        else{
            $rootScope.backLabel = $translate.instant("GlobalObjects.btnCancel");
        }
        if (newValue !== undefined) {
            $rootScope.canCancel = true;
        }
    });

    //Take to dashboard
    $scope.dashboard = function(){
        $state.go('dashboard');
    }

    //SignOut Method
    $scope.logOut = function(){
        $("#logoutWindow").show();    	
    }

    $scope.userLogout = function(){
        if($scope.menuCollapsed == false){
            $scope.menuCollapsed = true;
        }
        $("#logoutWindow").hide();
        window.localStorage.removeItem("user");
        window.localStorage.removeItem("token");
        
        $location.path('/');
    }

    $scope.cancelwindow = function(){
        $("#logoutWindow").hide();
    }

    $rootScope.$on('menuCall', function(event) {
      vm.menu();
    });

    var user = localStorageService.get('user'); 

    $scope.showProfile=function(){        
        $state.go('usersEntry',{'id':user.user_id});
    }

    
    vm.menu = function(){
        var user = localStorageService.get('user');    
        if(user != undefined){
            $scope.userMenu = []; 
            $scope.userImage = user.imagePath;
            $scope.user_name = user.user_name;            
            if(user.newFunctionIDs == undefined){
                var functionIDs = _.uniq(user.FunctionIDs);
            }else{
                var functionIDs = _.uniq(user.newFunctionIDs);
            }

            //functionIDs = "0," + functionIDs;

            angular.forEach(functionIDs, function(functionID){
                angular.forEach(user.Menu, function(menu){
                    if(parseInt(functionID) === parseInt(menu.app_function_id)){
                        $scope.userMenu.push(menu);
                    }
                });
            });
        }
    };

    vm.menu();

    $scope.menuopen = function(value){
        $scope.menuCollapsed = true;
        $state.go(value.target_route);
    }
    
}]);
