const gulp = require('gulp')
const nodemon = require('gulp-nodemon')
const livereload = require('gulp-livereload')
const merge = require('gulp-concat-json')

gulp.task('mocks', () => {
  return gulp.src('mocks/**/*.json')
  .pipe(merge('mock.json'))
  .pipe(gulp.dest('./src/'))
})

gulp.task('watch', () => {
  livereload.listen()
  gulp.watch('mocks/**/*.json', ['mocks'])
})

gulp.task('server', () => {
  nodemon({
    'script': 'app/index.js'
  })
})

gulp.task('serve', ['mocks', 'server', 'watch'])
