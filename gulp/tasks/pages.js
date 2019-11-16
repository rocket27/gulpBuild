import gulp from 'gulp';
import config from '../config';

const pages = () => gulp.src(config.globPaths.pages)
    .pipe(gulp.dest(config.distPath));

export default pages;
