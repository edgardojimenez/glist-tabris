/**
 * Created by ejimenez on 11/5/2014.
 */

/*!
 * gulp
 * $ npm install gulp-ruby-sass gulp-autoprefixer gulp-minify-css gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-notify gulp-rename gulp-livereload gulp-cache del --save-dev
 */

// Load plugins
var gulp = require('gulp'),
    gutil = require('gulp-util'),
//sass = require('gulp-ruby-sass'),
//autoprefixer = require('gulp-autoprefixer'),
//minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
//uglify = require('gulp-uglify'),
    //ftp = require('gulp-ftp'),
    ftp = require('vinyl-ftp'),
    using = require('gulp-using'),
    htmlReplace = require('gulp-html-replace'),
//imagemin = require('gulp-imagemin'),
//rename = require('gulp-rename'),
//concat = require('gulp-concat'),
    notify = require('gulp-notify'),
//cache = require('gulp-cache'),
//livereload = require('gulp-livereload'),
    del = require('del');

// Styles

//gulp.task('styles', function() {
//    return gulp.src('src/styles/main.scss')
//        .pipe(sass({ style: 'expanded' }))
//        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
//        .pipe(gulp.dest('dist/styles'))
//        .pipe(rename({ suffix: '.min' }))
//        .pipe(minifycss())
//        .pipe(gulp.dest('dist/styles'))
//        .pipe(notify({ message: 'Styles task complete' }));
//});

// Scripts
//gulp.task('scripts', function() {
//    return gulp.src('src/scripts/**/*.js')
//        .pipe(jshint('.jshintrc'))
//        .pipe(jshint.reporter('default'))
//        .pipe(concat('main.js'))
//        .pipe(gulp.dest('dist/scripts'))
//        .pipe(rename({ suffix: '.min' }))
//        .pipe(uglify())
//        .pipe(gulp.dest('dist/scripts'))
//        .pipe(notify({ message: 'Scripts task complete' }));
//});

// Images
//gulp.task('images', function() {
//    return gulp.src('src/images/**/*')
//        .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
//        .pipe(gulp.dest('dist/images'))
//        .pipe(notify({ message: 'Images task complete' }));
//});

// Scripts
//gulp.task('scripts', function() {
//    return gulp.src('www/**/*.js')
//        .pipe(gulp.dest('dist'))
//        .pipe(ftp({
//            host: 'waws-prod-ch1-001.ftp.azurewebsites.windows.net',
//            user: 'firebase\\ejimenez',
//            pass: 'GS8pWuncHa4pF5KJmaL9RMd3F5bt5SXyp8FS7mRKrz7KlEpYp6CuDbsZr1eH',
//            remotePath: '/site/wwwroot/',
//            debugMode: true
//        }))
//        .pipe(using());
//});


gulp.task('ftp', function() {
    var conn = ftp.create( {
        host: 'waws-prod-ch1-001.ftp.azurewebsites.windows.net',
        user: 'glistfire\\$glistfire',
        password: 'yelmrwsfH7n0ZE6RcKjQGzW9dpYag3t1NK28d6mfFpboyS6FuebyAdXiFT3l',
        parallel: 10,
        log: gutil.log
    } );

    var globs = [
        'bower_components/mobile-angular-ui/dist/css/mobile-angular-ui-hover.min.css',
        'bower_components/mobile-angular-ui/dist/css/mobile-angular-ui-base.min.css',
        'bower_components/mobile-angular-ui/dist/css/mobile-angular-ui-desktop.min.css',
        'bower_components/angular-notify/dist/angular-notify.min.css',
        'bower_components/jquery/dist/jquery.min.js',
        'bower_components/angular/angular.min.js',
        'bower_components/angular-route/angular-route.min.js',
        'bower_components/angular-animate/angular-animate.min.js',
        'bower_components/mobile-angular-ui/dist/js/mobile-angular-ui.min.js',
        'bower_components/mobile-angular-ui/dist/js/mobile-angular-ui.gestures.min.js',
        'bower_components/firebase/firebase.js',
        'bower_components/angularfire/dist/angularfire.min.js',
        'bower_components/toastr/toastr.min.js',
        'bower_components/ios-dblclick/ios-dblclick.js',
        'bower_components/angular-notify/dist/angular-notify.min.js',
        'bower_components/mobile-angular-ui/dist/fonts/fontawesome-webfont.woff',
        'bower_components/mobile-angular-ui/dist/fonts/fontawesome-webfont.ttf',
        'bower_components/mobile-angular-ui/dist/fonts/fontawesome-webfont.svg',
        'bower_components/mobile-angular-ui/dist/fonts/fontawesome-webfont.eot',
        'bower_components/mobile-angular-ui/dist/fonts/FontAwesome.otf',
        'src/**',
        'favicon.ico',
        'index.html'
    ];

    // using base = '.' will transfer everything to /public_html correctly
    // turn off buffering in gulp.src for best performance

    return gulp.src( globs, { base: '.', buffer: false } )
        //.pipe( conn.newer( '/site/wwwroot/' ) ) // only upload newer files
        .pipe( conn.dest( '/site/wwwroot/' ) );

} );

// Clean
//gulp.task('clean', function(cb) {
//    del(['./dist'], cb)
//});

// Default task
gulp.task('default', function() {
    gulp.start('ftp');
});

//// Watch
//gulp.task('watch', function() {
//
//    // Watch .scss files
//    gulp.watch('src/styles/**/*.scss', ['styles']);
//
//    // Watch .js files
//    gulp.watch('src/scripts/**/*.js', ['scripts']);
//
//    // Watch image files
//    gulp.watch('src/images/**/*', ['images']);
//
//    // Create LiveReload server
//    livereload.listen();
//
//    // Watch any files in dist/, reload on change
//    gulp.watch(['dist/**']).on('change', livereload.changed);
//
//});