'use strict';
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    cssnano = require("cssnano"),
    sourcemaps = require("gulp-sourcemaps"),
    browserSync = require("browser-sync").create();
	function style() {
		
	    // Where should gulp look for the sass files?
		
	    // My .sass files are stored in the styles folder
		
	    // (If you want to use scss files, simply look for *.scss files instead)
		
	    return (
		
	        gulp
		
	            .src(paths.styles.src)
		
	 
		
	            // Use sass with the files found, and log any errors
				.pipe(sourcemaps.init())
	            .pipe(sass())
	            .on("error", sass.logError)
	            .pipe(postcss([autoprefixer(), cssnano()]))
	            // What is the destination for the compiled file?
				.pipe(sourcemaps.write())
	            .pipe(gulp.dest(paths.styles.dest))
	            .pipe(browserSync.stream())
	    );
		
	}
		
	 
		
	// Expose the task by exporting it
		
	// This allows you to run it from the commandline using
		
	// $ gulp style
		
	exports.style = style;

	function reload(){
		browserSync.reload();
	}

<<<<<<< HEAD
// Development Tasks 
// -----------------

// Start browserSync server
gulp.task('browserSyncPackage', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
      browser: 'Firefox'
  })
})

gulp.task('sass', function() {
  return gulp.src('app/styles/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sass().on('error', sass.logError)) // Passes it through a gulp-sass, log errors to console
    .pipe(gulp.dest('app/styles')) // Outputs it in the css folder
    .pipe(function(){
    browserSync.reload({ // Reloading with Browser Sync
      stream: true
    })});
})

// Watchers
gulp.task('watch', function() {
  gulp.watch('app/styles/**/*.scss', gulp.series('sass'));
  gulp.watch('app/*.html', gulp.series(browserSync.reload));
  gulp.watch('app/js/**/*.js', gulp.series(browserSync.reload));
})

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

gulp.task('default', gulp.series(gulp.parallel(
  'browserSyncPackage', 'watch'), function(done){
  done();
}));

gulp.task('build', function(callback) {
  runSequence(
    'clean:dist',
    'sass',
    ['useref', 'images', 'fonts'],
    callback
  )
})
=======
	function watch(){
		browserSync.init({
			server: {
				baseDir: "app"
			}
		});
		
	    // gulp.watch takes in the location of the files to watch for changes
		
	    // and the name of the function we want to run on change
		
	    gulp.watch(paths.styles.src, style);
		gulp.watch('app/*.html', reload);
	}
		
	    
		
	// Don't forget to expose the task!
		
	exports.watch = watch
	var paths = {
		
	    styles: {
		
	        // By using styles/**/*.sass we're telling gulp to check all folders for any sass file
		
	        src: "app/styles/*.scss",
		
	        // Compiled files will end up in whichever folder it's found in (partials are not compiled)
		
	        dest: "app/styles"
		
	    }
		
	 
		
	    // Easily add additional paths
		
	    // ,html: {
		
	    //  src: '...',
		
	    //  dest: '...'
		
	    // }
		
	};
>>>>>>> working
