var pkg = require('./package.json');
var fs = require('fs');
var gulp = require('gulp');
var path = require('path');
var del = require('del');
var gutil = require('gulp-util');
var less = require('gulp-less');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var header = require('gulp-header');
var watch = require('gulp-watch');

var banner = ['/**',
    ' * <%= pkg.name %> - <%= pkg.description %>',
    ' * @version v<%= pkg.version %>',
    ' * @link <%= pkg.homepage %>',
    ' * @author <%= pkg.author.name %>',
    ' * @license <%= pkg.license %>',
    ' */',
''].join('\n');

var build_dir = '/Users/juliodinicola/Sites/anacristinaruiz/content/themes/sigmund';

gulp.task('clean', function(cb) {
    del([build_dir + '/**/*'], { force: true },cb);
});

gulp.task('move', ['clean'], function() {
    gulp.src([
        '!./node_modules/**/*',
        './assets/**/*',
        './**/*.hbs'
    ], { base: './' })
    .pipe(gulp.dest(build_dir))
    .on('finish', function() {
        fs.writeFileSync(build_dir + '/package.json', JSON.stringify({ name:pkg.name, version:pkg.version }), null, '\t');
    });
});

gulp.task('less', function() {
    return gulp.src(['less/main.less'])
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(minifyCss())
        .pipe(concat('sigmund.min.css'))
        .pipe(header(banner, { pkg : pkg }))
        .pipe(gulp.dest(build_dir + '/assets/css'));
});

gulp.task('watch', function() {
    watch(['./assets/**/*', './**/*.hbs', 'less/**/*.less'], function() {
        gulp.start('build');
    });
});

gulp.task('build', ['less', 'move']);
