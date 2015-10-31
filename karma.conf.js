// Karma configuration
// Generated on Sat Oct 18 2014 07:23:44 GMT-0500 (Central Daylight Time)

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            'bower_components/angular/angular.min.js',
            'bower_components/angular-mocks/angular-mocks.js',

            'bower_components/angular-route/angular-route.min.js',
            'bower_components/angular-animate/angular-animate.min.js',
            'bower_components/mobile-angular-ui/dist/js/mobile-angular-ui.min.js',
            'bower_components/mobile-angular-ui/dist/js/mobile-angular-ui.gestures.min.js',
            'bower_components/firebase/firebase.js',
            'bower_components/angularfire/dist/angularfire.min.js',
            'bower_components/ios-dblclick/ios-dblclick.js',
            'bower_components/angular-notify/dist/angular-notify.min.js',

            'src/app/app.js',
            'src/contTest.js',
            'src/app/core/core.module.js',
            'src/app/core/router.js',
            'src/app/core/exception/exception.handler.js',
            'src/app/core/exception/exception.js',
            'src/app/core/config.js',
            'src/app/core/logger.js',
            'src/app/core/constants.js',
            'src/app/core/common.js',
            'src/app/services/services.module.js',
            'src/app/services/loading.js',
            'src/app/services/repository.js',
            'src/app/services/directives.js',
            'src/app/services/filters.js',
            'src/app/list/list.module.js',
            'src/app/list/list.route.js',
            'src/app/list/list.js',
            'src/app/items/items.module.js',
            'src/app/items/items.route.js',
            'src/app/items/items.js',

            //'src/**/*.js',

            'tests/**/*.js'
        ],


        // list of files to exclude
        exclude: [
            //'tests/items/items.js'
        ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    });
};
