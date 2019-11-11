import gulp from 'gulp';
import config from '../config';

const fonts = () => gulp.src(config.assets.fonts)
    .pipe(gulp.dest(`${config.distPath}/assets/fonts`));

export default fonts;
