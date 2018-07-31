/* jshint camelcase:false */
var gulp = require('gulp');
var config = require('./gulp.config.js')();

var plug = require('gulp-load-plugins')({
    lazy: true
});

gulp.task('inject',/* ['wiredep'],*/ function () {
    //inject custom css
    inject();
});

gulp.task('connect', function () {
    //dont start server as frontend has been moved to 
    //web api project
    plug.connect.server({
        root: config.client,
        port: 4500,
        livereload: true
    });
});

function inject() {    
    return gulp
        .src(config.index)
        .pipe(plug.inject(gulp.src(config.css, {
            read: false
        }), {
            relative: true
        }))
        .pipe(plug.inject(gulp.src(config.js, {
            read: false
        }), {
            relative: true
        }))
        .pipe(gulp.dest(config.client))
        .pipe(plug.connect.reload());
};


/**
 * @desc Create $templateCache from the html templates
 */
gulp.task('copy', function () {
    return gulp
        .src([config.index,config.translations])
        .pipe(plug.copy(config.build,{
            prefix:1
        }));
});

/**
 * @desc Compress images
 */
gulp.task('images', function () {
    var dest = config.build + '/img';
    return gulp
        .src(config.images)
        .pipe(plug.cache(plug.imagemin({
            optimizationLevel: 3
        })))
        .pipe(gulp.dest(dest));
});

/**
 * @desc Copy fonts
 */
gulp.task('fonts', function () {
    var dest = config.build + '/content/fonts';
    return gulp
        .src(config.fonts)
        .pipe(gulp.dest(dest));
});

/**
 * @desc Create $templateCache from the html templates
 */
gulp.task('templatecache', function () {
    //log('Creating an AngularJS $templateCache');

    return gulp
        .src([])
        .pipe(plug.angularTemplatecache('templates.js', {
            module: 'GNC_1',
            standalone: false,
            root: 'app/'
        }))
        .pipe(gulp.dest(config.build));
});

/**
 * @desc Minify and bundle the app's JavaScript
 */
gulp.task('js', ['templatecache'], function () {
    
    return gulp
        .src(config.js)
        // .pipe(plug.sourcemaps.init()) // get screwed up in the file rev process
        .pipe(plug.concat(config.jsAppProd))
        /**/
        .pipe(plug.uglify({
            mangle:     true,
            compress:   true,
            toplevel:   true
        }))
        // .pipe(plug.sourcemaps.write('./'))
        .pipe(gulp.dest(config.build));
});

/**
 * @desc Minify and bundle the app's css
 */
gulp.task('css', function () {
    
    return gulp
        .src(config.css)
        // .pipe(plug.sourcemaps.init()) // get screwed up in the file rev process
        .pipe(plug.concat(config.cssAppProd))
        //@todo: Minify css
        // .pipe(plug.sourcemaps.write('./'))
		//.pipe(purify(['./src/app/**/*.js', './src/**/*.html']))
        .pipe(gulp.dest(config.build+'/content/styles'));
});

gulp.task('build', ['copy','js','css','fonts','images'],function(){

    return gulp
        .src("./www/index.html")
        .pipe(plug.inject(gulp.src(config.build+'/content/styles/'+config.cssAppProd, {
            read: false
        }), {
            relative: true
        }))
        .pipe(plug.inject(gulp.src(config.build+'/'+config.jsAppProd, {
            read: false
        }), {
            relative: true
        }))
        .pipe(gulp.dest(config.build));    

});


gulp.task('watch', ['inject', 'connect'], function () {
    plug.watch([config.jsModules, config.jsConfig, config.jsCommon, config.cssApp], function () {
        inject();
    })
     .pipe(plug.connect.reload());

    plug.watch([config.html])
        .pipe(plug.connect.reload());
});

gulp.task('default', ['inject', 'connect', 'watch']);
