var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');
var sourcemaps = require('gulp-sourcemaps');

// Basic Gulp task syntax
gulp.task('hello', function() {
  console.log('Hello Zell!');
})

// Development Tasks 
// -----------------

// Start browserSync server
gulp.task('browserSyncPackage', function(){
  browserSync.init({
    server: {
      baseDir: 'app'
    },
      browser: 'Firefox'
  })
})

function style() {
  
    // Where should gulp look for the sass files?
  
    // My .sass files are stored in the styles folder
  
    // (If you want to use scss files, simply look for *.scss files instead)
  
    return (
  
        gulp
  
            .src("./app/styles/*.scss")
  
 
  
            // Use sass with the files found, and log any errors
  
            .pipe(sass())
  
            .on("error", sass.logError)
  
 
  
            // What is the destination for the compiled file?
  
            .pipe(gulp.dest("./app/styles"))
  
    );
  
}
  
 
  
// Expose the task by exporting it
  
// This allows you to run it from the commandline using
  
// $ gulp style
  
exports.style = style;

// Watchers
function watch() {
    browserSync.init({
        server:{
            baseDir: 'app/'
        }
    });
    //     gulp.watch('./scss/**/*.scss'), sass);
    gulp.watch('./app/styles/*.scss', style);
    gulp.watch('./app/styles/*.scss').on('change', browserSync.reload);
    gulp.watch('./app/*.html').on('change', browserSync.reload);
    gulp.watch('./scss/**/*.js').on('change', browserSync.reload);

}

exports.watch = watch;
gulp.task('default', watch);

// Optimization Tasks 
// ------------------

// Optimizing CSS and JavaScript 
gulp.task('useref', function() {

  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'));
});

// Optimizing Images 
gulp.task('images', function() {
  return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
    // Caching images that ran through imagemin
    .pipe(cache(imagemin({
      interlaced: true,
    })))
    .pipe(gulp.dest('dist/images'))
});

// Copying fonts 
gulp.task('fonts', function() {
  return gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))
})

// Cleaning 
gulp.task('clean', function() {
  return del.sync('dist').then(function(cb) {
    return cache.clearAll(cb);
  });
})

gulp.task('clean:dist', function() {
  return del.sync(['dist/**/*', '!dist/images', '!dist/images/**/*']);
});

// Build Sequences
// ---------------

gulp.task('build', function(callback) {
  runSequence(
    'clean:dist',
    'sass',
    ['useref', 'images', 'fonts'],
    callback
  )
})