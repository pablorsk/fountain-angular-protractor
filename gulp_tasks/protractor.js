const gulp = require('gulp');
const gulpProtractorAngular = require('gulp-angular-protractor');

gulp.task('protractor', protractor);

function protractor(done) {
    gulp
        .src(['test/index.spec.js'])
        .pipe(gulpProtractorAngular({
            'configFile': 'conf/protractor.conf.js',
            'debug': false,
            'autoStartStopServer': true
        }))
        .on('error', function(e) {
            console.log(e);
        })
        .on('end', done);
}
