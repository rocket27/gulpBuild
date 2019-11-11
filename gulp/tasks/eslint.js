import eslint from 'gulp-eslint';
import gulp from 'gulp';
import config from '../config';

const jslint = () => gulp.src(config.jsPath)
    .pipe(eslint())
    .pipe(eslint.format());

export default jslint;
