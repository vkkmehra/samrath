module.exports = function () {
    var cssApp = "src/css/*.css";
    var jsModules = "src/app/**/*module*.js";
    var jsConfig = "src/app/**/*config*.js";
    var jsCommon = "src/app/**/*.js";
    var js = [
            'src/bower_components/jquery/dist/jquery.js',
            './src/dependencies/*.js',                        
            'src/bower_components/bootstrap/dist/js/bootstrap.js',
            'src/bower_components/angular/angular.js',
            'src/bower_components/angular-sanitize/angular-sanitize.js',
            'src/bower_components/angular-ui-router/release/angular-ui-router.js',
            'src/bower_components/angular-touch/angular-touch.js',
            'src/bower_components/angular-aria/angular-aria.js',
            'src/bower_components/angular-animate/angular-animate.js',            
            'src/bower_components/angular-loading-bar/src/loading-bar.js',            
            'src/bower_components/angular-chart.js/angular-chart.js',
            'src/bower_components/angular-material/angular-material.js',
            'src/bower_components/angular-toastr/dist/angular-toastr.tpls.js',
            'src/bower_components/angular-drag-and-drop-lists/angular-drag-and-drop-lists.js',
            'src/bower_components/angular-translate/angular-translate.js',
            'src/bower_components/angular-translate-loader-url/angular-translate-loader-url.js',            
			'src/bower_components/cfp-angular-hotkeys/build/hotkeys.js',
			'src/bower_components/hone/hone.js',
			'src/bower_components/tether/dist/js/tether.js',
			'src/bower_components/angular-scroll/angular-scroll.js',
			'src/bower_components/angular-bind-html-compile/angular-bind-html-compile.js',			
            './src/scripts/modules/*.js',            
            './src/scripts/config/*.js',                        
            './src/scripts/controllers/*.js',
            './src/scripts/vendors/*.js'
        ];
        js.push(jsModules);
        js.push(jsConfig);
        js.push(jsCommon);
    var config = {
        "index": "./src/index.html",
        "htmlTemplates":"src/app/**/*.html",        
        "translations":"src/i18n/*.json",
        "html": "./src/**/*.html",
        "client": "./src",
        "css": [
            'src/bower_components/bootstrap/dist/css/bootstrap.min.css',            
            'src/bower_components/font-awesome/css/font-awesome.min.css',
            'src/bower_components/angular-toastr/dist/angular-toastr.css',
            'src/bower_components/angular-loading-bar/src/loading-bar.css',
            cssApp
        ],
        "cssApp":cssApp,
        "jsModules": jsModules,
        "jsConfig": jsConfig,
        "jsCommon": jsCommon,
        "jsTemplatesProd":"build/templates.js",
        "jsAppProd":"app.min.js",
        "jsAllProd":"build/**/*.js",
        "cssAppProd":"app.min.css",
        "cssAllProd":"build/**/*.css",
        "build":"www",
        "js": js,
        "fonts": [
        	"src/assets/fonts/IcoMoon/Font/*.*",   
			"src/assets/fonts/ProximaNovaRegular/*.*",   
          	"src/assets/fonts/*.*",
          	"src/bower_components/font-awesome/fonts/*.*",
          	"src/bower_components/bootstrap/dist/fonts/*.*"
        ],
        "images": [
            "./src/img/*.*"
          ]
    };
    return config;
}