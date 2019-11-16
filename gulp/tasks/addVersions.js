import gulp from 'gulp';
import replace from 'gulp-replace';
import config from '../config';

const addVersions = () => gulp.src(`${config.distPath}/*.html`)
    .pipe(replace(new RegExp('.js"', 'g'), `.js?v=${new Date()
        .getTime()}"`))
    .pipe(replace(new RegExp('.css"', 'g'), `.css?v=${new Date()
        .getTime()}"`))
    .pipe(gulp.dest(config.distPath));

export default addVersions;
