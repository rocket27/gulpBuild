import gulpEslint from 'gulp-eslint';
import gulp from 'gulp';
import config from '../config';

const eslint = () => gulp.src(config.globPaths.scripts)
    .pipe(gulpEslint())
    .pipe(gulpEslint.format());

export default eslint;
