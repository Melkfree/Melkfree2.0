var gulp = require ("gulp"),
	livereload = require ("gulp-livereload");

gulp.task("reload-css", function() {
	gulp.src('./css/*.css')
	.pipe(livereload());
});

gulp.task("default",function() {
	livereload.listen();
	gulp.watch('./css/*.css', ['reload-css']);
});