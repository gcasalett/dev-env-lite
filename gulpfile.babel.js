var gulp          = require('gulp'),
    notify        = require('gulp-notify'),
    fs            = require('fs'),
    sass          = require('gulp-sass'),
    autoprefixer  = require('gulp-autoprefixer'),
    browserSync   = require('browser-sync').create(),
    babel         = require('gulp-babel'),
    sourcemaps    = require('gulp-sourcemaps'),
    cleanCSS      = require('gulp-clean-css');

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
  gulp.watch('css/**/*.css', ['minify-css']);

});

gulp.task('scss', function () {
  gulp.src('scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .on('error', notify.onError({
      message: 'Error: <%= error.message %>'
    }))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('../css'))
    .pipe(gulp.dest('css/'))
    .pipe(notify({ message: 'SCSS task complete' }))
    .pipe(browserSync.stream());
});

gulp.task('minify-css', function() {
  return gulp.src('css/*.css')
  .pipe(cleanCSS())
  .pipe(gulp.dest('css/'));
});

gulp.task('babel', function() {
  return gulp.src('js/src/**/*.js')
  .pipe(babel({ presets: ['es2015'] }))
  .pipe(gulp.dest('js/dist'))
});

gulp.task('default', ['serve']);
