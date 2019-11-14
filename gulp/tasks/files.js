import gulp from 'gulp';
import config from '../config';

const files = () => gulp.src(config.globPaths.files)
    .pipe(gulp.dest(config.targetPaths.files));

export default files;
