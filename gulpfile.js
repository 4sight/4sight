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