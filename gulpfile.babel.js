var gulp          = require('gulp');
var notify        = require('gulp-notify');
var fs            = require('fs');
var sass          = require('gulp-sass');
var autoprefixer  = require('gulp-autoprefixer');
var browserSync   = require('browser-sync').create();
var babel         = require('gulp-babel');

gulp.task('serve', ['scss'], function () {
  browserSync.init({
    server: {
      baseDir: './'
    },
    files: ['./**/*.html'],
    rewriteRules: [
      {
        match: /@include\("(.+?)"\)/g,
        fn: function (match, filename) {
          if (fs.existsSync(filename)) {
            return fs.readFileSync(filename);
          } else {
            return '<span style="color: red">'+filename+' not found.</span>';
          }
        }
      }
    ]
  });

  gulp.watch('scss/**/*.scss', ['scss']);
  gulp.watch('js/**/*.js', ['babel']).on('change', browserSync.reload);
  gulp.watch('*.html').on('change', browserSync.reload);

});

gulp.task('scss', function () {
  gulp.src('scss/**/*.scss')
    .pipe(sass())
    .on('error', notify.onError({
      message: 'Error: <%= error.message %>'
    }))
    .pipe(autoprefixer())
    .pipe(gulp.dest('css/'))
    .pipe(notify({ message: 'SCSS task complete' }))
    .pipe(browserSync.stream());
});

gulp.task('babel', function() {
  return gulp.src('js/src/**/*.js')
  .pipe(babel({ presets: ['es2015'] }))
  .pipe(gulp.dest('js/dist'))
});

gulp.task('default', ['serve']);
