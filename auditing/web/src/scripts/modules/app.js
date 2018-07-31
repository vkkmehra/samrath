/* 
 ''''''''''''''''''''''''''''''''''''''''''''''''''''''''
'' File Code        :   Teams_v2 - Main Module of the Project
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


app=angular.module('Teams_v2',['ngMaterial','ngAnimate','ui.router','toastr',
    'pascalprecht.translate',
    'ui.bootstrap','summernote','filter.tpls','dndLists',
    'angular-loading-bar','daterangepicker', 'bm.uiTour']);

    app.run(["$rootScope","commonDataService", "$state",
        "$translate","localStorageService","paginationConfig", '$interval','uiTourService',
             function($rootScope,commonDataService,$state,
                $translate,localStorageService,paginationConfig,$interval, uiTourService)
    {  
       

        var tick = function() {
            $rootScope.clock = Date.now();
            /*$rootScope.hours = $rootScope.clock.getHours();
            $rootScope.minu = $rootScope.clock.getMinutes();*/
        }
        tick();
        $interval(tick, 1000);

       $rootScope.getHelpLinks = function(screenName, tabName){
                // Help Links
                commonDataService.getHelpLinks(screenName,tabName, function(response){
                    if(response.data.List.length>0){
                        $rootScope.HelpLinks = response.data.List;
                        $rootScope.HelpLinks.Flag = true;
                    }                    
                });
            }
        //$rootScope.$on('$stateChangeStart',
        $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        	// called every time the state transition is attempted
            var UserPageVisitsLog = {};
        	UserPageVisitsLog.UserID = 1;
        	UserPageVisitsLog.PageName = toState.name;
        	UserPageVisitsLog.FromPage = fromState.name;              
            $rootScope.ObjectName = "";
            $rootScope.RecordDescription = "";
            
            $rootScope.SendSMS = function()
            {
                alert("SMS sent successfully.");
            }
            //clear the grid data held if any
            //clear the grid data held if any
            $translate.refresh();
            
            $rootScope.canSave = false;        
            $rootScope.Menus = [];    
            $rootScope.HelpLinks = [];
            $rootScope.HelpLinks.Flag= false;
            $rootScope.getHelpLinks(toState.name, null);


            $rootScope.$on('$translateRefreshEnd', function () {
                // do something
                $rootScope.selectedGridObjects = undefined;
                //
                $rootScope.PageName = $translate.instant("ScreenName." + $state.current.name);
                paginationConfig.firstText = $translate.instant("GlobalObjects.txtFirst"); 
                paginationConfig.previousText = $translate.instant("GlobalObjects.txtPrevious"); 
                paginationConfig.nextText = $translate.instant("GlobalObjects.txtNext"); 
                paginationConfig.lastText = $translate.instant("GlobalObjects.txtLast");
                
                
                switch($rootScope.PageName){
                    case '': case 'Documents': case 'Contact Persons': case 'Diary Notes': case 'Commission Templates Linked to ':
                    case 'Commission Promotions Linked to ': case 'Student Fee': case 'UoS VET Student Loan':
                    case 'Program Entry': case 'Module AVETMISS Setting': case 'Intake Offering List Screen': case 'Program - AVETMISS Settings':
                    case 'Program Offering Details': case 'Program Offering - UoC / Modules': case 'AVETMISS Settings for Program Offering ':
                    case 'Offering - Intakes Allocated to': case 'Add Program For': case 'Add Module For': case 'Campus Financial Setting':
                    case 'Agents Linked to': case 'Add Agents to': case 'Link Agent With ': case 'Dashboard Listing': 
                        $rootScope.showBackButton = true;
                        $rootScope.canCancel = false;
                        break;
                    case 'Agents Listing': case 'Agent Commissions Templates': case 'Commission Promotions':
                    case 'Campus Setup': case 'Faculty Welcome Screen': case "Users": case 'Academic Staff Welcome Screen':
                    case 'Employer Welcome Screen': case 'School Welcome Screen': case 'Program Welcome Screen':
                    case 'Intake Welcome Screen': case 'Module Welcome Screen': case 'UoS Welcome Screen':
                    case 'Assessment List': case 'Academic Calendars': case 'Health Cover Fees': case 'Instalment Plans':
                    case 'Purchasing Contracts': case 'Email Signatures': case 'Email Templates': case 'Template Setup': 
                    case 'Class Room Welcome Screen': case 'Marketing Dashboard': case 'Dashboard': case 'potentialStudentApplicationDashboard':
                        $rootScope.showBackButton = false;
                        $rootScope.canCancel = false;
                    break;
                    default:
                        $rootScope.showBackButton = true;
                        $rootScope.canCancel = false;
                    break;
                }                
            });

            $rootScope.showBack = false;

            $rootScope.cancel = function(){
                history.back();
            }            
            
            if(localStorageService.get("token")){
                commonDataService.postUserPageVisitsLog(UserPageVisitsLog,function(UserPageVisitsLogResponse){
                    //vm.newUserPageVisitsLog = UserPageVisitsLogResponse.data;
                },function(error){

                });
            }	   	

        $("html, body").animate({ scrollTop: 0 }, 200);
    });
}])

