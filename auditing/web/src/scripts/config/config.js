/**
'' File Code        :   Config
'' File Name        :   Config.js
'' Program Version  :   1.0
'' Written By       :   Sajan Rampal / All rights reserved by Dreamnet Software Pvt. Ltd.
'' Creation Date    :
'' Purpose          :   Contains Routes Information, all the screens in the application 
''                  :   will have defined in this file.
''                  :
''                  :
''                  :
''                  :
'' Quality Improvement Log
''------------------------
'' QIS NO.   Date       Release     Initials    Description
''------------------------------------------------------------------------------
''
'' Notes: 
''
**/

app.config(['$httpProvider', '$compileProvider', '$stateProvider', 
            '$urlRouterProvider', '$translateProvider', '$mdAriaProvider','cfpLoadingBarProvider',
    function ($httpProvider, $compileProvider, $stateProvider,
               $urlRouterProvider, $translateProvider, $mdAriaProvider, cfpLoadingBarProvider
              ) {

        cfpLoadingBarProvider.includeSpinner = false;
        $mdAriaProvider.disableWarnings();
        $urlRouterProvider.otherwise('/');
        $stateProvider

        //Default Route
       

        //Site Setting Route
        .state({
            name: 'siteSettings',
            url: '/SiteSettings',
            templateUrl: "app/siteSetting/SiteSettings.html",
            controller: "siteSettingsController as vm"
        })
        
        //Organisation Setting Route
        .state({
            name: 'organisationSettings',
            url: '/OrganisationSettings',
            templateUrl: "app/organisationSetting/OrganisationSettings.html",
            controller: "organisationSettingsController as vm"
        })

        //User Welcome Screen Route
        .state({
            name: 'users',
            url: '/Users',
            templateUrl: "app/user/UsersList.html",
            controller: "usersController as vm"
        })

        //User Entry Screen Route
        .state({
            name: 'usersEntry',
            url: '/UsersEntry/:id',
            templateUrl: "app/user/UserEntry.html",
            controller: "userController as vm"
        })

        
        //Campus Welcome Screen Route
        .state({
            name:'campus',
            url:'/Campuses',
            templateUrl:"app/campus/CampusesList.html",
            controller:"campusesController as vm"
        })

        //Campus Entry Screen Route
        .state({
            name:'campusEntry',
            url:'/CampusEntry/:id',
            templateUrl:"app/campus/CampusEntry.html",
            controller:"campusController as vm"
        })
       
       //Campus financial Setting
        .state({
            name:'campusFinancialSetting',
            url:'/Campus/:id/:Name/FinancialSetting',
            templateUrl:"app/campus/CampusFinancialSettings.html",
            controller:"campusFinancialSettingController as vm"
        })       
        
        //AVETMISS Training Location Settings
        .state({
            name:'avetmissTrainingLocationSettings',
            url:'/Campus/:id/AvetmissSetting/:avtID/:avtName/AvetmissTrainingLocationSettings',
            templateUrl:"app/campus/AvetmissTrainingLocations.html",
            controller:"avetmissTrainingLocationSettingController as vm"
        })

        //Program Welcome Screen Route
        .state({
            name:'program',
            url:'/Programs',
            templateUrl:'app/programs/ProgramsList.html',
            controller: 'programsController as vm'
        })
        
        //Program Entry Screen Route
        .state({
            name:'programEntry',
            url:'/ProgramEntry/:id',
            templateUrl:'app/programs/ProgramEntry.html',
            controller: 'programController as vm'
        })
        
        // Program Offering Screen Route 
        .state({
            name:'programOffering',
            url:'/Program/:id/ProgramOfferings/:programOfferingId',
            templateUrl:'app/programs/ProgramCreateOfferingDetails.html',
            controller: 'programOfferingController as vm'
        })

         // Program Avetmiss Screen Route
        .state({
            name: 'programAvetmiss',
            url: '/ProgramAvetmiss/{program:json}',
            templateUrl: 'app/programs/ProgramAvetmissSettings.html',
            controller: 'programAvetmissController as vm'
        })

        
        // Program Avetmiss Screen Route
        .state({
            name: 'offeringAvetmiss',
            url: '/ProgramOfferingAvetmiss/{offering:json}',
            templateUrl: 'app/programs/offeringAvetmissSetting.html',
            controller: 'programOfferingAvetmissController as vm'
        })

       // Program Offering - UoS / Study Route
        .state({
            name:'programOfferingUoS',
            url:'/ProgramOfferingUoS/{id:int}/Programs/:programId',
            templateUrl:'app/programs/ProgramOfferingUnitofStudy.html',
            controller: 'programOfferingUoSController as vm'
        })

        // Program Offering - UoC / Module Route
        .state({
            name:'programOfferingUoC',
            url:'/ProgramOfferingUoC/{id:int}/Programs/:programId',
            templateUrl:'app/programs/ProgramOfferingUnitOfCompentency.html',
            controller: 'programOfferingUoCController as vm'
        })

        //Agent Intoduction Screen Route
        .state({
            name: 'agents',
            url: '/Agents',
            templateUrl: "app/agent/AgentList.html",
            controller: 'agentsController as vm'
        })

        //Agent Entry Screen Route
        .state({
            name: 'agentEntry',
            url: '/AgentEntry/:id',
            templateUrl: "app/agent/AgentEntry.html",
            controller: 'agentController as vm'
        })

        //Agent Commission Template linked list Route
        .state({
            name: 'agentCommissionTemplatesLinkedList',
            url: '/Agent/:id/:name/AgentCommissionTemplates',
            templateUrl: "app/agent/AgentCommissionTemplates.html",
            controller: 'agentCommissionTemplatesController as vm'
        })

        //Agent Commission Promotion linked list Route
        .state({
            name: 'agentCommissionPromotionLinkedList',
            url: '/Agent/:id/:name/AgentCommissionPromotion',
            templateUrl: "app/agent/AgentCommissionPromotion.html",
            controller: 'agentCommissionPromotionsController as vm'
        })


        // Academic Staff 
        .state({
            name:'academicStaffs',
            url:'/AcademicStaffs',
            templateUrl:'app/academicStaff/AcademicStaffsList.html',
            controller: 'academicStaffController as vm'
        })
        .state({
            name:'academicStaffEntry',
            url:'/AcademicStaffEntry/:id',
            templateUrl:'app/academicStaff/AcademicStaffEntry.html',
            controller:'academicStaffEntryController as vm'
        })        

        .state({
            name: 'addProgramForAcaStaff',
            url: '/AcademicStaff/:id/:name/AddPrograms',
            templateUrl: 'app/academicStaff/addProgram.html',
            controller: 'addProgramForAcaStaff as vm'
        })

        .state({
            name: 'addModuleForAcaStaff',
            url: '/AcademicStaff/:id/:name/AddModules',
            templateUrl: 'app/academicStaff/addModule.html',
            controller: 'addModuleForAcaStaff as vm'
        })  
 

        //login
        .state({
            name: 'login',
            url: '/',
            templateUrl: 'app/login/login.html',
            controller: 'loginController as vm'
        })

        
        //School welcome screen
        .state({
            name:'SchoolWelcome',
            url:'/Schools',
            templateUrl: 'app/school/SchoolsList.html',
            controller: 'schoolsController as vm'
        })

        //School Entry Screen
        .state({
            name:'SchoolEntry',
            url:'/SchoolEntry/:id',
            templateUrl: 'app/school/SchoolEntry.html',
            controller: 'SchoolController as vm'
        })
          
        
        //Employer Welcome Screen
        .state({
            name: 'employerWelcomeScreen',
            url: '/Employers',
            templateUrl: 'app/employer/EmployersList.html',
            controller: 'employersController as vm'
        })

        //Employer Entry Screen
        .state({
            name: 'employerEntry',
            url: '/EmployerEntry/:id',
            templateUrl: 'app/employer/EmployerEntry.html',
            controller: 'employerController as vm'
        })

        
        //My Setting
        .state({
            name: 'mySetting',
            url: '/mySetting',
            templateUrl: 'screens/MySetting.html',
            controller: 'settingController as vm'
        })

        //Faculty List
        .state({
            name: 'FacultyWelcome',
            url: '/Faculties',
            templateUrl: 'app/faculty/FacultiesList.html',
            controller: 'FacultiesController as vm'
        })
        
        //Faculty Entry
        .state({
            name: 'FacultyEntry',
            url: '/FacultyEntry/:id',
            templateUrl: 'app/faculty/FacultyEntry.html',
            controller: 'facultyController as vm'
        })
        
        //System Code
        .state({
            name: 'SystemCodeWelcome',
            url: '/SystemCodes',
            templateUrl: 'app/systemCode/SystemCodeWelcome.html',
            controller: 'systemCodeController as vm'
        })

        //System Code
        .state({
            name: 'SystemCodes',
            url: '/SystemCodes/:id',
            templateUrl: 'app/systemCode/SystemCodeEntry.html',
            controller: 'systemCodeEntryController as vm'
        })

        // Unit of Study Screen
        .state({
            name:'uosWelcome',
            url:'/UnitofStudy',
            templateUrl:'app/uos/unitofStudyList.html',
            controller :'unitOfStudyController as vm'
        })

        // Unit of Study Initial Definition Screen
        .state({
            name:'uosEntry',
            url:'/UosEntry/:id',
            templateUrl:'app/uos/unitofStudyEntry.html',
            controller : 'unitofStudyEntryController as vm'
        })

        // Unit of Study - Education Fee Screen
        .state({
            name:'uosEducationFee',
            url:'/UosEducationFee/:id',
            templateUrl:'app/uos/unitofStudyEducationFees.html',
            controller: 'unitofStudyEducationFeeController as vm'
        })

        // Unit of Study - VET Fee Help Screen
        .state({
            name:'uosVETStudentLoan',
            url:'/UosVETStudentLoan/:id',
            templateUrl:'app/uos/unitofStudyVETStudentLoans.html',
            controller: 'unitofStudyFundingFeeController as vm'
        })

        //Module List
        .state({
            name:'ModuleWelcomeScreen',
            url: '/Modules',
            templateUrl: 'app/module/modulesList.html',
            controller:'modulesController as vm'
        })

        //Module Entry Screen Route
        .state({
            name:'ModuleEntryScreen',
            url: '/ModuleEntry/:id',
            templateUrl: 'app/module/moduleEntry.html',
            controller:'moduleController as vm'
        })

        //Module AVETMISS Setting Routes
        .state({
            name:'moduleAvtSetting',
            url: '/Module/:id/:UocID/AvtSetting',
            templateUrl: 'app/module/moduleAvetmissSetting.html',
            controller:'moduleAvtSettingController as vm'
        })

        //Module AVETMISS State Setting Routes
        .state({
            name:'moduleAvtStateSetting',
            url: '/Module/:moduleID/:uocID/AvtSetting/:avtID/AvtStateSetting',
            templateUrl: 'app/module/modulePre2018avtStatesSettings.html',
            controller:'moduleAvetmissStateSettingController as vm'
        })

        //Module AVETMISS Education Fees
        .state({
            name:'moduleEducationFees',
            url: '/Module/:id/EducationFees',
            templateUrl: 'app/module/moduleEducationFees.html',
            controller:'moduleEducationFeeController as vm'
        })

         //Module Funding Fee Setup
        .state({
            name:'modulefundingFeeSetup',
            url: '/Module/:id/UoCID/:UoCID/FundingFees',
            templateUrl: 'app/module/moduleVETStudentLoans.html',
            controller:'moduleFundingFeeController as vm'
        })

        // Welcome Screen of Assessment Screen
        .state({
            name:'assessmentList',
            url:'/Assessments',
            templateUrl:'app/assessment/assessmentlist.html',
            controller :'assessmentListController as vm'            
        })

        // Assessment Entry Screen
        .state(
        {
            name:'assessmentEntry',
            url:'/AssessmentEntry/:id',
            templateUrl:'app/assessment/assessmentEntry.html',
            controller :'assessmentEntryController as vm'
        })

        .state({
             name: "academicCalendars",
             url: '/AcademicCalendars',
             templateUrl: 'app/academicCalendar/calendarList.html',
             controller: 'calendarList as vm'
         })

        //Academic Calendars
        .state({
            name: "academicCalendarEntryStep1",
            url: '/AcademicCalendars/{id:int}/Step1',
            templateUrl: 'app/academicCalendar/calendarSetupStep1.html',
            controller: 'calendarSetupStep1 as vm'
        })
        .state({
            name: "academicCalendarTemplateStep1",
            url: '/AcademicCalendarTemplates/{id:int}/Step1',
            templateUrl: 'app/academicCalendar/calendarTemplateStep1.html',
            controller: 'calendarTemplateStep1 as vm'
        })

        // Agent Commission
        .state({
            name:'agentCommission',
            url:'/AgentCommissions',
            templateUrl:'app/AgentCommission/AgentCommissionList.html',
            controller :'agentCommissionListController as vm'
        })

        // Agent Commission Selection
        .state({
            name:'agentCommissionSelection',
            url:'/AgentCommissionSelection',
            templateUrl:'app/AgentCommission/AgentCommissionSelection.html',
            controller :'agentCommissionSelectionController as vm'        
        })

         // Standard Commission Template
        .state({
            name:'standardCommission',
            url:'/StandardCommission/:id',
            templateUrl:'app/AgentCommission/StandardCommissionTemplate.html',
            controller :'standardCommissionTemplateController as vm'
        })

        // Scaled Commission Template
        .state({
            name:'scaledCommission',
            url:'/ScaledCommission/:id',
            templateUrl:'app/AgentCommission/ScaledCommissionTemplate.html',
            controller :'agentScaledCommissionController as vm'
        })

        // Bonus Commission Template
        .state({
            name:'bonusCommission',
            url:'/BonusCommission/:id',
            templateUrl:'app/AgentCommission/BonusCommissionTemplate.html',
            controller :'agentBonusCommissionController as vm'
        })

        // Agent Commission Template Linked 
        .state({
            name:'linkAgentWithCommissionTemplate',
            url:'/LinkAgentWithCommissionTemplate/:id/:name',
            templateUrl:'app/AgentCommission/LinkAgentWithCommissionTemplate.html',
            controller :'agentCommissionLinkedController as vm'
        })

        //Intake Screen
        .state({
            name:'intakeWelcome',
            url:'/Intakes',
            templateUrl:'app/intake/intakeList.html',
            controller:'intakesController as vm'
        })

        //Intake Entry Screen
        .state({
            name:'IntakeEntry',
            url: '/IntakeEntry/:id',
            templateUrl: 'app/intake/intakeEntry.html',
            controller:'intakeController as vm'
        })

        //intake Offering List
        .state({
            name:'IntakeOfferingListScreen',
            url: '/Intake/:id/:name/IntakeOfferings/:status',
            templateUrl: 'app/intake/intakeOfferingList.html',
            controller:'intakeOfferingListController as vm'
        })

        // Health Cover Fees
        .state({
            name:'healthCoverFeesList',
            url:'/HealthCoverFees',
            templateUrl:'app/healthcoverfees/HealthCoverListing.html',
            controller:'healthCoverFeeListController as vm'        
        })

        // Health Cover Fee Entry Screen

        .state({
            name:'healthCoverFeesEntry',
            url:'/HealthCoverFeesEntry/:id',
            templateUrl:'app/healthcoverfees/HealthCoverFeeEntry.html',
            controller:'healthCoverFeeEntryController as vm'
        })
        
        //Installment plan list
        .state(
        {
            name: 'instalmentPlans',
            url: '/InstalmentPlans',
            templateUrl: 'app/instalmentPlan/instalmentPlanList.html',
            controller: 'instalmentPlanList as vm'
        })
      
        // Offering Intake List
        .state({
            name:"offeringIntakeList",
            url:'/OfferingIntakes/ProgramOffering/:id/:name/CampusID/:campusID',
            templateUrl:'app/OfferingIntake/OfferingAllocated.html',
            controller :'offeringIntakeAllocatedController as vm'
        })

         // Offering Allocated
        .state({
            name:'offeringIntakeVariation',
            url:'/OfferingIntakeVariation/IntakeOffering/:intakeOfferingID/:intakeName/ProgramOffering/:programOfferingID/:programOfferingName/CampusID/:campusID/programOfferingTaughtVia/:taughtVia',
            templateUrl:'app/OfferingIntake/offeringIntakeVariation.html',
            controller :'offeringIntakeVariationController as vm'
        })

        // Commission Promotions Welcome
        .state({
            name:'commissionPromotions',
            url:'/CommissionPromotions',
            templateUrl:'app/commissionPromotions/commissionPromotions.html',
            controller :'commissionPromotionsController as vm'
        })

        // Commission Promotions Entry
        .state({
            name:'commissionPromotionsEntry',
            url:'/CommissionPromotionEntry/:id',
            templateUrl:'app/commissionPromotions/commissionPromotionEntry.html',
            controller :'commissionPromotionsEntryController as vm'
        })

         // Agents Linked to Promotion List
        .state({
            name:'agentsLinked',
            url:'/CommissionPromotions/:id/:name/AgentsLinked',
            templateUrl:'app/commissionPromotions/agentsLinkedToPromotions.html',
            controller :'agentsLinkedToPromotionsController as vm'
        })

        // Agents Linked to Promotion Entry
        .state({
            name:"linkedAgentsEntry",
            url:'/CommissionPromotions/:promotionsID/:name/:agentLinked/AgentsLinked/:id',
            templateUrl:'app/commissionPromotions/agentsToPromotionEntry.html',
            controller :'agentsToPromotionEntryController as vm'
        })

        //Purchasing Contracts 
        .state(
        {
            name: 'purchasingContracts',
            url: '/PurchasingContracts',
            templateUrl: 'app/PurchasingContract/purchasingContractList.html',
            controller: 'purchasingContractListController as vm'
            
        })

         //Purchasing Contracts Entry
        .state({
            name:'purchasingContractEntry',
            url:'/PurchasingContractEntry/:id',
            templateUrl:'app/PurchasingContract/purchasingContractEntry.html',
            controller: 'purchasingContractEntryController as vm'
          
        })

        //Program Offerings Linked to Purchasing Contract
        .state({
            name:'programOfferingsLinkedToPurchasingContract',
            url:'/PurchasingContract/:id/Campus/:campusId/ProgramOfferingsLinked',
            templateUrl:'app/PurchasingContract/offeringsLinkedList.html',
            controller: 'offeringProgramListController as vm'
          
        })

        //Avet Program Offerings Linked to Purchasing Contract
        .state({
            name:'avetmissProgramOfferingsLinkedToPurchasingContract',
            url:'/PurchasingContract/:id/ProgramOfferingsLinked/:offeringID',
            templateUrl:'app/PurchasingContract/avetmissSettingForProgramOffering.html',
            controller: 'purchasingContractProgramOfferingAvetmissController as vm'          
        })

        //pre-2018 Avet Program Offerings Linked to Purchasing Contract
        .state({
            name:'pre2018AvetmissProgramOfferingsLinkedToPurchasingContract',
            url:'/PurchasingContract/:id/:PCnumber/ProgramOfferingsLinked/:offeringID/Pre2018AvetmissSetting',
            templateUrl:'app/PurchasingContract/pre2018AvetmissSetting.html',
            controller: 'pre2018PurchasingContractOfferingModule as vm'
          
        })

        //Module Linked to Purchasing Contract
        .state({
            name:'moduleLinkedToPurchasingContract',
            url:'/PurchasingContract/:id/Campus/:campusId/ModulesLinked',
            templateUrl:'app/PurchasingContract/modulesLinkedList.html',
            controller: 'moduleLinkedListController as vm'
          
        })

        // Email Template Welcome Screen
        .state({
            name:'emailTemplates',
            url:'/EmailTemplates',
            templateUrl:'app/emailTemplate/emailTemplateList.html',
            controller :'emailTemplateListController as vm'
        })

        // Email Template Entry Screen
        .state({
            name:'emailTemplateEntry',
            url:'/EmailEntry/:id/campusID/:campusID/faculties/:faculties',
            templateUrl:'app/emailTemplate/emailEntry.html',
            controller :'emailTemplateEntryController as vm'
        })

        // Email Signature List
        .state({
            name: "emailSignatures",
            url: "/EmailSignature",
            templateUrl: "app/EmailSignature/EmailSignatureList.html",
            controller:"emailSignatureListController as vm"
        })

        // Email Signature Setup
        .state({
            name:'emailSignatureEntry',
            url:'/EmailSignatureSetup/:id',
            templateUrl:'app/EmailSignature/EmailSignatureSetup.html',
            controller:'emailSignatureSetupController as vm'
        })

        // SMS Template Welcome Screen
        .state({
            name:'smsTemplates',
            url:'/SMSTemplates',
            templateUrl:'app/smsTemplate/smsTemplateList.html',
            controller :'smsTemplateListController as vm'
        })

        // SMS Template Entry Screen
        .state({
            name:'smsTemplateEntry',
            url:'/SMSEntry/:id/campusID/:campusID/faculties/:faculties',
            templateUrl:'app/smsTemplate/smsEntry.html',
            controller :'smsTemplateEntryController as vm'
        })

        // New Application - Search and Define
        .state({
            name: 'createApplication',
            url: '/Applications/:id/studentID/:student_id',
            templateUrl: 'app/application/createApplication.html',
            controller: 'createApplication as vm',
            resolve: {
                application: ["$rootScope",function ($rootScope) {
                    return $rootScope.application || {};
                }]
            }
        })

        // New Application - Program Selection
        .state({
            name: 'programSelection',
            url: '/programSelection/:applicationName',
            templateUrl: 'app/application/programSelection.html',
            controller: 'selectProgramController as vm',
            resolve: {
                application: ["$rootScope",function ($rootScope) {
                    return $rootScope.application || {};
                }]
            }
        })


        // New Application - Define Fee
        .state({
            name: 'defineApplicationFee',
            url: '/defineApplicationFee/:packageId',
            templateUrl: 'app/application/DefineApplicationFee.html',
            controller: 'appDefineFeeController as vm',
            resolve: {
                application: ["$rootScope",function ($rootScope) {
                    return $rootScope.application || {};
                }]
            }

        })

        .state({
            name: 'applicationInvoices',
            url: '/applicationInvoices/:applicationId/application/:applicationName',
            templateUrl: 'app/application/ApplicationInvoices.html',
            controller: 'appInvoiceController as vm'
        })

        .state({
            name: 'editApplicationInvoices',
            url: '/applicationInvoices/:applicationId/application/:applicationName/:invoiceId',
            templateUrl: 'app/application/editApplicationInvoice.html',
            controller: 'EditAppInvoiceController as vm'
        })

        // Student Fee
        .state({
            name:'studentFee',
            url:'/StudentFee/:typeId/:typeName/:id/:name/:isGST/:allowAgent/:subID',
            templateUrl:'app/studentFee/studentFeeList.html',
            controller:'studentFeeController as vm'
        })

        //Test
        .state({
            name:'test',
            url:'/Test',
            templateUrl:'app/testscreen/test1.html',
            controller: 'testController as vm'
          
        })        

        //Default Dashboard
        .state({
            name: "dashboard",
            url: "/Dashboard",
            templateUrl: "app/dashboard/dashboard.html",
            controller: "dashboard as vm"
        })

        //Marketing Dashboard
        .state({
            name: "marketingDashboard",
            url: "/MarketingDashboard",
            templateUrl: "app/dashboard/marketingDashboard.html",
            controller: "marketingDashboard as vm"
        })

        .state({
            name: "studentDashboard",
            url: "/StudentDashboard/:id/EnrolmentID/:enrolmentID",
            templateUrl: "app/dashboard/studentDashboard.html",
            controller: "studentDashboard as vm"
        })

        //Student -- Enrolment Dashboard
        .state({
            name: 'enrolmentDashboard',
            url: '/EnrolmentDashboard/:id/Student/:studentID',
            templateUrl: 'app/dashboard/enrolmentDashboard.html'
        })

        .state({
            name: 'dashboardList',
            url: '/DashboardList/:queryParams',
            templateUrl: 'app/dashboard/dashboardList.html',
            controller: 'dashboardList as vm'
        })

        .state({
            name: 'dashboardSettings',
            url: '/DashboardSettings/:id/DashboardID/:dashboardID',
            templateUrl: "app/dashboard/DashboardSetting.html",
            controller: 'dashboardSetting as vm'
        })

        //Potential Student Application
        .state({
            name:           'potentialStudentApplicationDashboard',
            url:            '/potentialStudentApplicationDashboard/:id',
            templateUrl:    'app/dashboard/potentialStudentApplicationDashboard.html',
            controller:     'potentialStudentApplicationDashboardController as vm'
        })

        //trainingPlan for Student Application
        .state({
            name:           'trainingPlanApplication',
            url:            '/trainingPlanApplication/:id',
            templateUrl:    'app/dashboard/trainingPlanAndResults.html',
            controller:     'ApplicationTrainingPlanAndResultUoC as vm'          
        })
        
        .state({
            name:               'enquiry',
            url:                '/enquiry/:id',
            templateUrl:        'app/enquiry/enquiryEntry.html'
            controller:         'enquiryEntryController as vm'
        })

        // Welcome Screen of Class Room Screen
        .state({
            name:'classRoomList',
            url:'/ClassRooms',
            templateUrl:'app/classRoom/classRoomList.html',
            controller :'classRoomListController as vm'            
        })

        // Entry Screen of Class Room Screen
        .state({
            name:'classRoomEntry',
            url:'/ClassRoomEntry/:id',
            templateUrl:'app/classRoom/classRoomEntry.html',
            controller :'classRoomController as vm'            
        })

        // Search Result Screen of Classes
        .state({
            name: 'classTemplateGroup',
            url: '/ClassGroup/classTemplate/:classTempaleID/classTemplateName/:name',
            templateUrl: 'app/Classes/classGroupList.html',
            controller: 'classGroupListController as vm'
        })

        // List Screen of Class Room Group
        .state({
            name:'classRoomGroup',
            url:'/ClassRoom/:id/:name/:campusName/ClassGroup',
            templateUrl:'app/classRoom/classRoomLinkedGroup.html',
            controller :'classRoomGroupController as vm'            
        })

        // Search Result Screen of Classes
        .state({
            name: 'classGroupEntry',
            url: '/ClassGroupEdit/classID/:classID/classGroupID/:classGroupID',
            templateUrl: 'app/Classes/classGroupEntry.html',
            controller: 'classGroupEntryController as vm'
        })

        // Search Screen of Class Setup Screen
        .state({
            name: 'classSearch',
            url: '/Classes',
            templateUrl: 'app/Classes/ClassesSearch.html',
            controller: 'classSearchController as vm'
        })

         //Class template setup Screen
        .state({
            name: 'classTemplate',
            url: '/ClassTemplate/:id/campusID/:campus_id',
            templateUrl: 'app/Classes/classTemplate.html',
            controller: 'classTemplateController as vm'
        })

        //class search result screen
        .state({
            name: 'classSearchResult',
            url: '/ClassesResult/calenderYear/:calendarYear/startDate/:startDate/endDate/:endDate/className/:className/campusID/:campusID/campusName/:campusName/facultyID/:facultyID/facultyName/:facultyName/programID/:programID/programName/:programName/programOfferingID/:programOfferingId/programOfferingName/:programOfferingName/offeringIntakeID/:offeringIntakeID/offeringIntakeName/:offeringIntakeName',
            templateUrl: 'app/Classes/classesWelcomeSearchResult.html',
            controller: 'classSearchResultController as vm'
        })

        // Entry Screen of Classes Setup Screen
        .state({
            name: 'classEntry',
            url: '/ClassEntry/:id/campusID/:campus_id',
            templateUrl: 'app/Classes/classEntry.html',
            controller: 'classEntryController as vm'
        })

        // Search Result Screen of Classes
        .state({
            name: 'classEdit',
            url: '/ClassEdit/:id/campusID/:campusID/facultyID/:facultyID/programID/:programID',
            templateUrl: 'app/Classes/classEdit.html',
            controller: 'classEditController as vm'
        })

        .state({
            name: 'documents',
            url: '/documents/documentsType/:documentsType/:object/:id/type/:objectType/:code',
            templateUrl: 'app/documents/documents.html',
            controller: 'documentController as vm'
        })

        .state({
            name: 'notes',
            url: '/Notes/noteType/:noteType/:object/:id/type/:objectType/:code',
            templateUrl: 'app/diaryNotes/notes.html',
            controller: 'noteController as vm'
        })  

        .state({
            name: 'contactPerson',
            url: '/ContactPerson/contactPosition/:contactPosition/:object/:id/type/:objectType/:code',
            templateUrl: 'app/contactPerson/contactPerson.html',
            controller: 'contactPerson as vm'
        })

        // state for Report Selector / Generator
        .state({
            name: 'reportGenerator',
            url: '/ReportGenerator/:id',
            templateUrl: 'app/ReportGenerator/reportSelector.html',
            controller: 'reportSelectorController as vm'
        })

        // state for import generator
        .state({
            name: 'importSelector',
            url: '/ImportSelector',
            templateUrl: 'app/imports/imports.html',
            controller: 'importController as vm'
        })
        .state({
            name: 'importMapper',
            url: '/ImportMapper/:id',
            templateUrl: 'app/imports/importsMapper.html',
            controller: 'importController as vm'
        })

        // state for user report
        // for Grid
        .state({
            name: 'userReportList',
            url: '/UserReportList',
            templateUrl: 'app/userReport/UserReportList.html',
            controller: 'userReportListController as vm'
        })

        // next step -- selecting Master Report
        .state({
            name: 'userReport',
            url: '/UserReport',
            templateUrl: 'app/userReport/UserReportSelector.html',
            controller: 'userReportController as vm'
        })

        // next step -- selecting fields for User Report
        // id == master Report id
        // userReportId == User report id
        .state({
            name: 'userReportField',
            url: '/UserReportField/:id/userReportId/:userReportId',
            templateUrl: 'app/userReport/UserReportFields.html',
            controller: 'userReportController as vm'
        })

        .state({
            name: 'userReportTables',
            url: '/UserReportTables/:id/userReportId/:userReportId',
            templateUrl: 'app/userReport/UserReportTables.html',
            controller: 'userReportTablesController as vm' 
        })

        // user report Table Fields
        //id: masterReportID, // userReportID: user_report_id,
        // userReportTableID : user_report_table_id
        .state({
            name: 'userReportTableFields',
            url: '/userReportTableFields/:id/userReportId/:userReportId/userReportTableId/:userReportTableId',
            templateUrl: 'app/userReport/userReportTableFields.html',
            controller: 'userReportTablesController as vm'
        })

        .state({
            name: 'userReportFilters',
            url: '/userReportFilters/:id/userReportId/:userReportId',
            templateUrl: 'app/userReport/UserReportFilters.html',
            controller: 'userReportFilterController as vm'
        })

        .state({
            name: 'reportTemplates',
            url: '/reportTemplates',
            templateUrl: 'app/ReportGenerator/reportTemplateList.html',
            controller: 'reportTemplatesController as vm'
        })        
        .state({
            name: 'reportTemplate',
            url: '/reportTemplate/:reportId/templateId/:templateId',
            templateUrl: 'app/ReportGenerator/reportTemplate.html',
            controller: 'reportTemplateController as vm'
        })                        

        .state({
            name: 'attendanceScreen',
            url: '/attendanceScreen',
            templateUrl: 'app/Attendance/Attendance.html',
            controller: 'attendanceController as vm'
        })        

        // New Route for Result Screen
        .state({
            name: 'resultScreen',
            url: '/resultScreen',
            templateUrl: 'app/Attendance/Results.html',
            controller: 'resultController as vm'
        })

        .state({
            name: 'classViewer',
            url: '/ClassViewer',
            templateUrl: 'app/classAllocationViewer/classViewer.html',
            controller: 'classAllocatedViewerController as vm'
        })

        .state({
            name: 'moduleViewer',
            url: '/ModuleViewer/:classObj',
            templateUrl: 'app/classAllocationViewer/moduleAllocatedClass.html',
            controller: 'classModuleAllocatedViewerController as vm'
        })

         .state({
            name: 'attendanceViewer',
            url: '/AttendanceViewer',
            templateUrl: 'app/attendanceViewer/attendanceViewer.html',
            controller: 'attendanceViewerController as vm'
        })

         //trainingPlan
        .state({
            name:'trainingPlan',
            url:'/TrainingPlan/Enrolment/:id',
            templateUrl:'app/trainingPlanAndResult/trainingPlanAndResults-UoC.html',
            controller: 'trainingPlanAndResultUoC as vm'          
        })

        //Add Module trainingPlan 
        .state({
            name:           'addModuleTrainingPlan',
            url:            '/TrainingPlan/AddModules/:id/ENo/:enrolmentNo/SNumber/:Number/Name/:Name',
            templateUrl:    'app/trainingPlanAndResult/addModule.html',
            controller:     'addModuleForTrainingPlan as vm'
        })

        //Add Module trainingPlan
        .state({
            name:           'addTrainerAllocation',
            url:            '/TrainingPlan/TrainerAllocation/:id/:moduleId/type/:type/ENo/:enrolmentNo/SNumber/:Number/Name/:Name',
            templateUrl:    'app/trainingPlanAndResult/traininerAllocation.html',
            controller:     'trainingAllocation as vm'
        })     

        //potentialStudentDetails
        .state({
            name:'potentialStudentDetails',
            url:'/PotentialStudent/:id',
            templateUrl:'app/potentialStudentDetail/potentialStudentDetailEntry.html',
            controller: 'potentialStudentController as vm'          
        }) 

         //Avetmiss Info for Student
        .state({
            name:'enrolmentAvetmissSetting',
            url:'/EnrolmentAvetmissSetting/:id',
            templateUrl:'app/enrolmentAvetmiss/enrolmentAvetmissSettings.html',
            controller: 'enrolmentAvetmissSetting as vm'          
        })

        //Avetmiss Info for Student
        .state({
            name:'preEnrolmentAvetmissSetting',
            url:'/EnrolmentPre2018AvetmissSetting/:id',
            templateUrl:'app/enrolmentAvetmiss/pre-2018AvetmissSetting.html',
            //controller: 'avetmissInfomationController as vm'          
        })


        //Avetmiss Info for Student
        .state({
            name:'avetmissInfoStudent',
            url:'/PotentialStudent/:id/AvetmissInfo', 
            templateUrl:'app/potentialStudentDetail/AvetmissInformation.html',
            controller: 'avetmissInfomationController as vm'          
        })  


        //Training plan for UoS
        .state({
            name:           'trainingPlanUoS',
            url:            '/TrainingPlanUoS/Enrolment/:id',
            templateUrl:    'app/trainingPlanAndResult/trainingPlanAndResultsUoS.html',
            controller:     "trainingPlanAndResultUoS as vm"    
        })

        // training Plan for UoS - additional UoS
        .state({
            name:           'addUoSTrainingPlanUoS',
            url:            "/TrainingPlanUoS/AddUoS/:id/ENo/:enrolmentNo",
            templateUrl:    "app/trainingPlanAndResult/AdditionalUoS.html",
            controller:     "addUoSController as vm"
        })

         //training Plan for UoS - Modules Linked to UOS
        .state({
            name:               'modulesLinkedUoS',
            url:                '/ModulesLinkedUoS/:id/:studentId/:enrolmentId/:uosId/:studentNo/:enrolmentNo/:uosCode',
            templateUrl:        "app/trainingPlanAndResult/moduleLinkedtoUoS.html",
            controller:         'uosModuleLinkedController as vm'
        })

        //Avetmiss Info for Student
        .state({
            name:'result',
            url:'/Results',
            templateUrl:'app/result/result.html',
            controller: 'resultController as vm'          
        })

        //potentialStudentDetails
        .state({
        name:'potentialStudentDetails',
        url:'/PotentialStudent/:id',
        templateUrl:'app/potentialStudentDetail/potentialStudentDetailEntry.html',
        controller: 'potentialStudentController as vm'
        })
         //Avetmiss Info for Student
        .state({
            name:'avetmissInfoStudent',
            url:'/PotentialStudent/:id/AvetmissInfo',
            templateUrl:'app/potentialStudentDetail/AvetmissInformation.html',
            controller: 'avetmissInfomationController as vm'          
        })

        //student Visa and CoE
        .state({
            name:           "studentVisaCoE",
            url:            "/StudentVisaCoE/:id/:stuNo/:name",
            templateUrl:    "app/studentVisaCoE/StudentVisaCoEList.html",
            controller:     "studentVisaCoEContoller as vm"    
        })

        .state({
            name:           'studentCoE',
            url:            '/StudentCoE/:id/StudentID/:stuID/:stuNo/:name',
            templateUrl:    'app/studentVisaCoE/studentCoE.html',
            controller:     'studentCoEContoller as vm'
        })

        .state({
            name:            'studentVisa',
            url:             '/StudentVisa/:id/StudentID/:stuID/:stuNo/:name',
            templateUrl:     'app/studentVisaCoE/studentVisa.html',
            controller:      'studentVisaController as vm'   
        })

        //Email route for Student Application
        .state({
            name:               'composeEmail',
            url:                '/composeEmail:id/:objectName/:objectType/:subObject/:processType/:screenName/:queryParams',
            templateUrl:        'app/composeEmail/composeEmail.html',
            controller:         'composeEmailApplicationController as vm'    
        })

        //SMS route for Student Application
        .state({
            name:               'composeSMS',
            url:                '/composeSMS/:id/:objectName/:objectType/:subObject/:processType/:screenName/:queryParams',
            templateUrl:        'app/composeSMS/composeSMS.html',
            controller:         'composeSMSApplicationController as vm'    
        })

        .state({
            name:           'emailSentList',
            url:            '/emailSentLits/:id/:codeType/:processType/:objectType/:screenName',
            templateUrl:    'app/composeEmail/emailSentList.html',
            controller:     'emailSentListController as vm'
        })

        .state({
            name:           'smsSentList',
            url:            '/smsSentLits/:id/:codeType/:processType/:objectType/:screenName',
            templateUrl:    'app/composeSMS/smsSentList.html',
            controller:     'smsSentListController as vm'
        })

        .state({
            name: 'studentHoliday',
            url: '/studentHoliday/:id',
            templateUrl: 'app/studentHoliday/studentHoliday.html',
            controller: 'studentHolidayController as vm'
        });



        // New Enrolment - Search and Define
        .state({
            name: 'createEnrolment',
            url: '/Enrolment/:id',
            templateUrl: 'app/enrolment/createEnrolment.html',
            controller: 'createEnrolment as vm',
            resolve: {
                application: ["$rootScope",function ($rootScope) {
                    return $rootScope.application || {};
                }]
            }
        })       

        // New Enrolment - Program Selection
        .state({
            name: 'enrolmentProgramSelection',
            url: '/enrolmentProgramSelection/:enrolmentName',
            templateUrl: 'app/enrolment/programSelection.html',
            controller: 'selectEnrolmentProgramController as vm',
            resolve: {
                application: ["$rootScope",function ($rootScope) {
                    return $rootScope.application || {};
                }]
            }
        })


        // New Enrolment - Define Fee
        .state({
            name: 'defineEnrolmentFee',
            url: '/defineEnrolmentFee/:packageId',
            templateUrl: 'app/enrolment/DefineApplicationFee.html',
            controller: 'appEnrolmentDefineFeeController as vm',
            resolve: {
                application: ["$rootScope",function ($rootScope) {
                    return $rootScope.application || {};
                }]
            }
        })

        .state({
            name: 'enrolmentInvoices',
            url: '/enrolmentInvoices/:enrolmentId/enrolment/:applicationName',
            templateUrl: 'app/enrolment/EnrolmentInvoices.html',
            controller: 'enrolmentInvoiceController as vm'
        })

        .state({
            name: 'editEnrolmentInvoices',
            url: '/enrolmentInvoices/:enrolmentId/enrolment/:applicationName/:invoiceId',
            templateUrl: 'app/enrolment/editEnrolmentInvoice.html',
            controller: 'editEnrolmentInvoiceController as vm'
        })


        // ReportParameter screen
        .state({
            name: 'reportParam',
            url: '/ReportParam/:id',
            templateUrl: 'app/userReport/ReportParam.html',
            controller: 'reportParam as vm'
        })        


        .state({
            name:           'newRPLApplication',
            //              id = enrolment_id, enrolmentNo = Enrolment Number
            url:            '/newRPLApplication/:id/:enrolmentNo',
            templateUrl:    'app/trainingPlanAndResult/NewRPLApplication.html',
            controller:     'trainingRPLController as vm'
        })

        .state({
            name:           'editStudentVisa',
            url:            '/editStudentVisa/:id/StudentID/:stuID/:stuNo/:name',
            templateUrl:    'app/studentVisaCoE/editStudentVisa.html',
            controller:     'studentVisaController as vm'
        })

        .state({
            name:           'editStudentCoE',
            url:            '/editStudentCoE/:id/StudentID/:stuID/:stuNo/:name',
            templateUrl:    'app/studentVisaCoE/editStudentCoE.html',
            controller:     'studentCoEContoller as vm'
        })

        //Student Employment
        .state({
            name:'stuEmployment',
            url:'/Employment/Student/:studentId/Enrolment/:enrolmentId',
            templateUrl:'app/employerInformation/employerInformationList.html',
            controller: 'studentEmploymentList as vm'          
        })

        //Student VET Employment
        .state({
            name:'AddStuVETEmployment',
            url:'/EmploymentVETEntry/Student/:studentId/Enrolment/:enrolmentId/Employment/:id/:type/:date',
            templateUrl:'app/employerInformation/VETAddEmployer.html',
            controller: 'studentEmployment as vm'          
        })

        //Student Work Employment
        .state({
            name:'AddStuWorkEmployment',
            url:'/EmploymentWorkEntry/Student/:studentId/Enrolment/:enrolmentId/Employment/:id/:type/:date',
            templateUrl:'app/employerInformation/WorkAddEmployer.html',
            controller: 'studentEmployment as vm'          
        })

       .state({
            name:               "complianceDashboard",
            url:                "/ComplianceDashboard",
            templateUrl:        "app/dashboard/ComplianceDashboard.html",
            controller:         "complianceDashboard as vm"
        })

        .state({
                name:           'newRPLApplication',
                // id = enrolment_id, enrolmentNo = Enrolment Number
                url:            '/RPLApplication/New/:id/:enrolmentNo',
                templateUrl:    'app/trainingPlanAndResult/NewRPLApplication.html',
                controller:     'trainingRPLController as vm'
        })

        .state({
            name:               'editRPLApplication',
            //                  id = enrolment_id, enrolmentNo = Enrolment Number
            url:                '/RPLApplication/Edit/:id/:enrolmentNo',
            templateUrl:        'app/trainingPlanAndResult/EditRPLApplication.html',
            controller:         'editEnrolmentRPLApplication as vm'
        })

        .state({
                name:           'newRPLApplicationDashboard',                
                url:            '/newRPLApplicationDashboard',
                templateUrl:    'app/trainingPlanAndResult/NewRPLApplicationDashoard.html',
                controller:     'trainingRPLDashboardController as vm'
        })

        


        $httpProvider.defaults.withCredentials = true;
        //$httpProvider.defaults.headers.common.DBName = "Teams_intl_api";
        //$compileProvider.debugInfoEnabled(false);

        //Multilingual- Translate Provider Function
        $translateProvider.useUrlLoader('./i18n/en.json');
        $translateProvider.preferredLanguage('en');
        $translateProvider.useSanitizeValueStrategy(null);

        //Add a transform function on http service so that it can check each 
        //http response for lastSettingsRefreshDate and if it has changed
        //update the settings
        $httpProvider.interceptors.push(['settingsService','localStorageService','$injector', 
        '$translate', '$q', function (settingsService,localStorageService,$injector,$translate,$q) {
            return {
                'response': function (response) {
                    if(localStorageService.get("token")){
                         return settingsService.validateRefreshDate(response);
                    }
                    else{
                        return response;   
                    }
                       
                   
                },
                'responseError':function(response){
                     if (response.status == 401 || response.status == 403) {
                            $injector.get("$state").go("login");
                        }
                        else if (response.status == 409) {
                            var toastr = $injector.get("toastr");
                            toastr.error($translate.instant("ToastMessages.tmg"+response.data.ObjectName + "409",response.data));
                        }
                        else if (response.status == 300) {
                            var toastr = $injector.get("toastr");
                            toastr.error($translate.instant("ToastMessages.tmg" + response.data.ObjectName + "300", response.data));
                        }
                        return $q.reject(response);
                },
                'request': function(request){
                    request.headers.Token = localStorageService.get("token");
                    return request;
                }
            }
    }]);
}]);

//String Format Function
//Purpose should be specified here.
//Usage example should be defined here.
//
String.prototype.format = function () {
    var formatted = this;
    for (var i = 0; i < arguments.length; i++) {
        var regexp = new RegExp('\\{{' + i + '\\}}', 'gi');
        formatted = formatted.replace(regexp, arguments[i]);
    }
    return formatted;
};


//Date Parse into String Function
String.prototype.parseToDateString = function () {

    var dt = new Date(this);
    return dt.getDate() + "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear();

}

//Set the current time in the passed date instance
Date.prototype.setCurrentTime = function () {
    var currentDate = new Date();
    this.setHours(currentDate.getHours());
    this.setMinutes(currentDate.getMinutes());
    this.setSeconds(currentDate.getSeconds());
    return this;
}

//Date Parse Function
String.prototype.parseToDate = function () {
    if (this.constructor === String) {
        /* ddMMYYYY = /0*[1-31]\/0*[1-12]\/\d\d\d\d/;
         mmDDYYYY = /[1-12]\/[1-31]\/\d\d\d\d/;
         if(ddMMYYYY.test(this)){*/

        //moment should be returned from here and not date
        var dt = new Date(this);
        
        return new Date(moment(dt));
        /*}
        else if(mmDDYYYY.test(this)){
            return new Date(moment(this,'MM/DD/YYYY'));
        }*/
    }
    return null;

}


String.prototype.parseDateSetUp = function(){
    var monthNames=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    var dt = new Date(this);
    var month = dt.getMonth();
    var day = dt.getDate();
    var year = dt.getFullYear();
    return setupDate = day+" "+monthNames[month]+" "+year;
}

String.prototype.toArray = function () {
    if (this.constructor == String) {
        var array = this;
        array = array.trim();
        array = array.replace(" ", "");
        array = array.split(",");
        if(array[0] === ""){
            return [];
        }

        for (var index = array.length - 1; index >= 0; index--) {
            if(!isNaN(array[index])){
                array[index] = Number(array[index]);
            }
        }
        return array;
    }
    return [];
}

// Convert integer to Time
function covertTimein24Format(time){
    var ctime = time;
    var hours = Number(ctime.match(/^(\d+)/)[1]);
    var minutes = Number(ctime.match(/:(\d+)/)[1]);
    var AMPM = ctime.match(/\s(.*)$/)[1];
    if (AMPM == "PM" && hours < 12) hours = hours + 12;
    if (AMPM == "AM" && hours == 12) hours = hours - 12;
    var sHours = hours.toString();
    var sMinutes = minutes.toString();
    if (hours < 10) sHours = "0" + sHours;
    if (minutes < 10) sMinutes = "0" + sMinutes;
    
    var newTime = sHours + ":" + sMinutes;

    var timeMins = parseInt((sHours*60) + parseInt(sMinutes));
    return timeMins;
}

Array.prototype.toCsv = function () {
    if (this != undefined && this != null && this.constructor == Array)
        return this.join(",");
    else
        return "";
}

function convertTime12Format(time){
    var hours = timeHours = parseInt(time / 60);
    var mins = (time % 60);
    if(mins === 0){mins = "00"}
    if(hours > 12){timeHours = parseInt(hours - 12);
        timeZone = "PM";}
    else{timeHours = hours;
        timeZone = "AM";}
    var times = timeHours + ":" + mins + " "+ timeZone
    return times;
} 

//Set the date format   
function parseDateFormat(date)
{    
    if(date != undefined && date != null){
        var monthNames=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
        var dt = new Date(date);
        var month = dt.getMonth();
        var day = dt.getDate();
        var year = dt.getFullYear();
        return setupDate = day+"/"+monthNames[month]+"/"+year;    
    }else {
        return '';
    }    
}

function onlyNumeric(data)
{
    if(data!= undefined)
    {
        var filter = /^[a-zA-Z]+$/;    
        if(!data.match(filter)){
            return true;
        }
    }   
}

function toMinutes (m) {
    var minutes = m % 60;
    var hours = Math.floor(m / 60);

    minutes = (minutes < 10 ? '0' : '') + minutes;
    hours = (hours < 10 ? '0' : '') + hours;

    return hours + ':' + minutes;
}


function generateRandomString(){
    return Math.random().toString(36).substring(5) + moment().format('YYYYMMDDHHMMssSS');
}

function NumberCount(number){
    for(var i = number; i > 1; ++i){
        ++length;
        i = Math.floor(i/10);
    }
    return length;
}

function generateRandomString(){
    return Math.random().toString(36).substring(5) + moment().format('YYYYMMDDHHMMssSS');
}