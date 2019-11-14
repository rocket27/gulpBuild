import gulp from 'gulp';
import config from '../config';

const fonts = () => gulp.src(config.globPaths.fonts)
    .pipe(gulp.dest(config.targetPaths.fonts));

export default fonts;
